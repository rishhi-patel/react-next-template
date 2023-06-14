import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";
import { carf_Feature_data } from "./cardData";
import card_left_Illus from "/public/images/card-left-Illus.png";

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

const CardFeature = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 1,
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
        breakpoint: 992,
        settings: {
          dots: false,
        },
      },
    ],
  };
  return (
    <section className="card-feature pt-120">
      <div className="overlay">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="img-area">
                <Image src={card_left_Illus} className="max-un" alt="Images" />
              </div>
            </div>
            <div className="col-md-5">
              <Slider {...settings} className="card-carousel">
                {carf_Feature_data.map((itm, i) => (
                  <div key={itm.id} className="single-item">
                    <div className="single">
                      <div className="text-start">
                        <h2 className="title">{itm.title}</h2>
                        <p>{itm.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardFeature;
