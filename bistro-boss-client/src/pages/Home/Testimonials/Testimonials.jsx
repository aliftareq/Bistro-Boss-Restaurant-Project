import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import "./Testimonials.css"; // ✅ custom styles

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://bistro-boss-server-mu-five.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle subHeading="What Our Client Says" heading="Testimonials" />

      <div className="testimonial-wrapper">
        <Swiper navigation modules={[Navigation]} className="testimonialSwiper">
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-accent" />

                  {/* ⭐ Centered Rating */}
                  <div className="testimonial-rating">
                    <div className="testimonial-rating-inner">
                      <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                      />
                    </div>
                  </div>

                  <p className="testimonial-text">{review.details}</p>

                  <h3 className="testimonial-name">{review.name}</h3>
                  <p className="testimonial-role">Verified Guest</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
