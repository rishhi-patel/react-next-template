import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Social from "../social/Social";
import author_image from "/public/images/author-image.png";

const Author = () => {
  return (
    <section className="author-section pb-120">
      <div className="overlay wow fadeInUp">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="main-content text-center">
                <div className="img-area">
                  <Image src={author_image} alt="images" />
                </div>
                <h4>Percy Mathis</h4>
                <p className="highlight-text">Marketing Manager at Bankio</p>
                <p className="para-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                  purus vel, viverra facilisi neque quisque.
                </p>
                <div className="social-link d-flex justify-content-center align-items-center">
                  {/* Socila Links here */}
                  <Social
                    items={[
                      [FaFacebookF, "/"],
                      [FaTwitter, "/"],
                      [FaLinkedinIn, "/"],
                      [FaInstagram, "/"],
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
