const express = require('express')
const admin = require("firebase-admin");
const app = express()
const jwt = require('jsonwebtoken')
const cors = require('cors')
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const port = process.env.PORT || 5000;

//firebase admin
const serviceAccount = require("./bistro-boss-restaurant-f78d3-firebase-adminsdk-kmf2e-ec617a0f06.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

//middleware
app.use(cors())
app.use(express.json());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.preca8g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const usersCollection = client.db("BistroBossDB").collection("users")
        const menuCollection = client.db("BistroBossDB").collection("menu")
        const reviewsCollection = client.db("BistroBossDB").collection("reviews")
        const cartCollection = client.db("BistroBossDB").collection("carts")
        const paymentCollection = client.db("BistroBossDB").collection("payments")

        //middlewares 
        const verifytoken = (req, res, next) => {
            //console.log("inside verify token", req.headers.authorization)
            if (!req.headers.authorization) {
                return res.status(401).send({ message: 'Unauthorized Access' })
            }
            const token = req.headers.authorization.split(" ")[1]
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
                if (err) {
                    return res.status(401).send({ message: 'Unauthorized Access' })
                }
                req.decoded = decoded
                next()
            })
        }

        // use verify admin after verifyToken
        const verifyAdmin = async (req, res, next) => {
            const email = req.decoded.email;
            const query = { email: email };
            const user = await usersCollection.findOne(query);
            const isAdmin = user?.role === 'admin';
            if (!isAdmin) {
                return res.status(403).send({ message: 'forbidden access' });
            }
            next();
        }

        //api's

        // jwt related api's 
        app.post("/jwt", async (req, res) => {
            const user = req.body;
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "24h" })
            res.send({ token })
        })

        //users related api's
        app.post('/users', async (req, res) => {
            //insert email only if user doesn't exist
            const user = req.body;
            const query = { email: user.email }
            const existingUser = await usersCollection.findOne(query)
            if (existingUser) {
                return res.send({ message: "this user already exists", insertedId: null })
            }
            const result = await usersCollection.insertOne(user)
            res.send(result)
        })

        app.get('/users', verifytoken, verifyAdmin, async (req, res) => {
            const result = await usersCollection.find().toArray()
            res.send(result)
        })

        app.patch("/users/admin/:id", verifytoken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const updatedDoc = {
                $set: {
                    role: 'admin'
                }
            }
            const result = await usersCollection.updateOne(filter, updatedDoc)
            res.send(result)
        })

        app.get("/users/admin/:email", verifytoken, async (req, res) => {
            const email = req?.params?.email;
            if (email !== req?.decoded?.email) {
                return res.status(403).send({ message: "forbidden access" })
            }

            const query = { email: email }
            const user = await usersCollection.findOne(query)

            let admin = false;
            if (user) {
                admin = user?.role === "admin"
            }
            res.send({ admin })
        })

        app.delete('/users/:id', verifytoken, verifyAdmin, async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };

            const user = await usersCollection.findOne(query);
            if (!user) {
                return res.status(404).send({ message: "User not found" });
            }
            if (!user.uid) {
                return res.status(404).send({ message: "firebase uid not found" });
            }

            //Delete the user from Firebase & mongodb
            await admin.auth().deleteUser(user?.uid);
            const result = await usersCollection.deleteOne(query)
            res.send(result)
        })

        //menu related api's
        app.get('/menu', async (req, res) => {
            const result = await menuCollection.find().toArray()
            res.send(result)
        })
        app.get('/menu/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await menuCollection.findOne(query)
            res.send(result)
        })
        app.post('/menu', verifytoken, verifyAdmin, async (req, res) => {
            const item = req.body;
            const result = await menuCollection.insertOne(item)
            res.send(result)
        })

        app.patch('/menu/:id', verifytoken, verifyAdmin, async (req, res) => {
            const item = req.body;
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const updatedDoc = {
                $set: {
                    name: item.name,
                    category: item.category,
                    price: item.price,
                    recipe: item.recipe,
                    image: item.image
                }
            }

            const result = await menuCollection.updateOne(filter, updatedDoc)
            res.send(result)
        })

        app.delete('/menu/:id', verifytoken, verifyAdmin, async (req, res) => {
            console.log("inside api");
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await menuCollection.deleteOne(query)
            console.log(result);
            res.send(result)
        })
        //review related api's
        app.get('/reviews', async (req, res) => {
            const result = await reviewsCollection.find().toArray()
            res.send(result)
        })

        //cart related api's
        app.get('/carts', async (req, res) => {
            const email = req?.query?.email
            if (email) {
                const result = await cartCollection.find({ email: email }).toArray()
                res.send(result)
            }
            else {
                const result = await cartCollection.find().toArray()
                res.send(result)
            }

        })
        app.post('/carts', async (req, res) => {
            const cartItem = req.body;
            const result = await cartCollection.insertOne(cartItem)
            res.send(result)
        })
        app.delete('/carts/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await cartCollection.deleteOne(query)
            res.send(result)
        })

        //payment related api's

        //payment intent
        app.post('/create-payment-intent', async (req, res) => {
            const { price } = req.body;
            const amount = parseInt(price * 100);
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency: "usd",
                payment_method_types: ['card']
            })
            res.send({
                clientSecret: paymentIntent.client_secret
            })
        })

        app.post('/payments', async (req, res) => {
            const payment = req.body;
            const paymentResult = await paymentCollection.insertOne(payment)

            //deleting all the item from cart for which payment has been cleared! 
            const query = {
                _id: { $in: payment.cartIds.map(id => new ObjectId(id)) }
            }
            const deleteResult = await cartCollection.deleteMany(query)
            //console.log('payment Info', payment);
            res.send({ paymentResult, deleteResult })
        })

        app.get("/payments/:email", verifytoken, async (req, res) => {
            const query = { email: req?.params?.email }
            if (req.params.email !== req.decoded.email) {
                return res.status(403).send({ message: 'forbidden access' })
            }
            const result = await paymentCollection.find(query).toArray()
            res.send(result)
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("Bistro Boss Server is active")
})

app.listen(port, () => {
    console.log(`Bistro boss server is running on port ${port}`);
})


