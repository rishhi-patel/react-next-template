import Slider from "react-slick";
import TestimonialCard from "../card/TestimonialCard";

// Import css files
import "slick-carousel/slick/slick.css";

const Testimonials = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    dotsClass: "section-dots",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <section className="testimonials-section personal-loan">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h2 className="title">
                  We’ve helped more than 15,000 customers
                </h2>
                <p>
                  Our goal is to help you grow. 4.4 out of 5 based on 155
                  reviews
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Slider {...settings} className="testimonials-slider-two">
                {[1, 2, 3, 4].map((itm, i) => (
                  <TestimonialCard key={i} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
