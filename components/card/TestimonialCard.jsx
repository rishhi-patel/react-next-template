import Image from "next/image";
import { BsFillStarFill } from "react-icons/bs";
import testimonials_image_1 from "/public/images/testimonials-image-1.png";

const TestimonialCard = () => {
  return (
    <div className="single-slide">
      <div className="single">
        <div className="review-area d-flex gap-1">
          <i>
            <BsFillStarFill />
          </i>
          <i>
            <BsFillStarFill />
          </i>
          <i>
            <BsFillStarFill />
          </i>
          <i>
            <BsFillStarFill />
          </i>
          <i className="blank">
            <BsFillStarFill />
          </i>
        </div>
        <p className="xlr">
          Sed arcu tortor, feugiat sit amet accumsan ac, maximus quis quam.vitae
          Integer ultrices elit.
        </p>
        <div className="profile-area d-flex align-items-center">
          <div className="img-area">
            <Image src={testimonials_image_1} alt="image" />
          </div>
          <h6>Ben Mason</h6>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
