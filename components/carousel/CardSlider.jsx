import Image from "next/image";
import Link from "next/link";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";
import card_img_1 from "/public/images/card-img-1.png";
import card_img_2 from "/public/images/card-img-2.png";

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

const CardSlider = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: <Next />,
    nextArrow: <Prev />,
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
        breakpoint: 993,
        settings: {
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="col-lg-5">
      <div className="pb-120">
        <Slider {...settings} className="card-carousel-index">
          <div className="single">
            <div className="thumb">
              <Image src={card_img_1} alt="image" />
            </div>
            <div className="button-area text-center">
              <Link href="/register" className="cmn-btn">
                Get Started Now
              </Link>
            </div>
          </div>
          <div className="single">
            <div className="thumb">
              <Image src={card_img_2} alt="image" />
            </div>
            <div className="button-area text-center">
              <Link href="/register" className="cmn-btn">
                Get Started Now
              </Link>
            </div>
          </div>
          <div className="single">
            <div className="thumb">
              <Image src={card_img_1} alt="image" />
            </div>
            <div className="button-area text-center">
              <Link href="/register" className="cmn-btn">
                Get Started Now
              </Link>
            </div>
          </div>
          <div className="single">
            <div className="thumb">
              <Image src={card_img_2} alt="image" />
            </div>
            <div className="button-area text-center">
              <Link href="/register" className="cmn-btn">
                Get Started Now
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CardSlider;
