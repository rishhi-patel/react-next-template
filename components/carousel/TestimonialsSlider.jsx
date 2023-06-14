import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";
import TestimonialCard from "../card/TestimonialCard";

import "slick-carousel/slick/slick.css";

const Next = ({ onClick }) => {
  return (
    <button
      type="button"
      className="slick-arrow slick-prev pull-left"
      onClick={onClick}
    >
      <i>
        <BsChevronLeft />
      </i>
    </button>
  );
};

const Prev = ({ onClick }) => {
  return (
    <button
      type="button"
      className="slick-arrow slick-next pull-right"
      onClick={onClick}
    >
      <i>
        <BsChevronRight />
      </i>
    </button>
  );
};

const TestimonialsSlider = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Next />,
    nextArrow: <Prev />,
    dots: true,
    dotsClass: "section-dots",
    customPaging: function () {
      return (
        <button type="button" className="dot">
          <span className="string"></span>
        </button>
      );
    },
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
    <Slider {...settings} className="testimonials-slider">
      {[1, 2, 3, 4].map((itm, i) => (
        <TestimonialCard key={i} />
      ))}
    </Slider>
  );
};

export default TestimonialsSlider;
