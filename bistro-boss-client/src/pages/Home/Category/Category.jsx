// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// import slide1 from "../../../assets/home/slide1.jpg";
// import slide2 from "../../../assets/home/slide2.jpg";
// import slide3 from "../../../assets/home/slide3.jpg";
// import slide4 from "../../../assets/home/slide4.jpg";
// import slide5 from "../../../assets/home/slide5.jpg";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";

// const Category = () => {
//   return (
//     <section>
//       <SectionTitle
//         subHeading={"From 11.00am to 10.00pm"}
//         heading={"Order online"}
//       ></SectionTitle>
//       <Swiper
//         breakpoints={{
//           0: {
//             slidesPerView: 2,
//             spaceBetween: 5,
//           },
//           640: {
//             slidesPerView: 3,
//             spaceBetween: 10,
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 30,
//           },
//         }}
//         centeredSlides={false}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper mb-24"
//       >
//         <SwiperSlide>
//           <img src={slide1} alt="" />
//           <h3 className="text-sm lg:text-4xl uppercase text-center -mt-10 lg:-mt-16 text-white">
//             Salads
//           </h3>
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide2} alt="" />
//           <h3 className="text-sm lg:text-4xl uppercase text-center -mt-10 lg:-mt-16 text-white">
//             Pizzas
//           </h3>
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide3} alt="" />
//           <h3 className="text-sm lg:text-4xl uppercase text-center -mt-10 lg:-mt-16 text-white">
//             Soups
//           </h3>
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide4} alt="" />
//           <h3 className="text-sm lg:text-4xl uppercase text-center -mt-10 lg:-mt-16 text-white">
//             Dessert
//           </h3>
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={slide5} alt="" />
//           <h3 className="text-sm lg:text-4xl uppercase text-center -mt-10 lg:-mt-16 text-white">
//             Salads
//           </h3>
//         </SwiperSlide>
//       </Swiper>
//     </section>
//   );
// };

// export default Category;
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order online"}
      />

      <Swiper
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
        }}
        // ticker-style settings
        loop={true}
        speed={9000}
        allowTouchMove={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="mySwiper mb-24"
      >
        {[
          { img: slide1, label: "Salads" },
          { img: slide2, label: "Pizzas" },
          { img: slide3, label: "Soups" },
          { img: slide4, label: "Dessert" },
          { img: slide5, label: "Salads" },
        ].map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={item.img}
                alt={item.label}
                className="h-[220px] w-full object-cover md:h-[260px] lg:h-[320px]"
              />

              {/* subtle dark gradient for premium text readability */}
              <div
                className="pointer-events-none absolute inset-0 
              bg-gradient-to-t from-black/55 via-black/10 
              to-transparent"
              />
              <h3 className="absolute bottom-4 left-0 right-0 text-center uppercase tracking-[0.2em]
               text-white text-sm md:text-2xl lg:text-3xl font-semibold drop-shadow"
              >
                {item.label}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Make it continuous like a news ticker */}
      <style>
        {`
          .mySwiper .swiper-wrapper {
            transition-timing-function: linear !important;
          }
        `}
      </style>
    </section>
  );
};

export default Category;
