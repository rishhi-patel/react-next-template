import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";
import { journey_carousel_data } from "./carouselData";

// Import css files
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

const JourneyCarousel = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Next />,
    nextArrow: <Prev />,
    dots: false,
    dotsClass: "section-dots",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
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
    <Slider {...settings} className="journey-carousel">
      {journey_carousel_data.map((itm, i) => (
        <div key={itm.id} className="single">
          <div className="single-box">
            <div className="top-box d-flex align-items-center">
              <div className="icon-box">
                <Image src={itm.icon} alt="icon" />
              </div>
              <h4>{itm.year}</h4>
            </div>
            <div className="text-box">
              <p>{itm.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default JourneyCarousel;
