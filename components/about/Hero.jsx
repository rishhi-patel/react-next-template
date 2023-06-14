import Image from "next/image";
import about_img_1 from "/public/images/about-img-1.png";
import about_img_2 from "/public/images/about-img-2.png";
import about_img_3 from "/public/images/about-img-3.png";

const Hero = () => {
  return (
    <section className="about-section">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-area">
                <h5 className="sub-title">About Us</h5>
                <h2 className="title">
                  Your ally in achieving ambition beyond borders
                </h2>
                <p>
                  We understand that with global ambition, comes global
                  challenges, and we are here to bridge the gap by offering
                  seamless cross-border financial services. Consider us your
                  friendly digital guide to all things finance, helping you make
                  the most of your money.
                </p>
              </div>
              <div className="row cus-mar">
                <div className="col-xl-4 col-md-4">
                  <div className="count-content text-center">
                    <div className="count-number">
                      <h4 className="counter">98</h4>
                      <h4 className="static">%</h4>
                    </div>
                    <p>Customer satisfaction</p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4">
                  <div className="count-content text-center">
                    <div className="count-number ">
                      <h4 className="counter">250</h4>
                      <h4 className="static">M</h4>
                    </div>
                    <p>Monthly active users</p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4">
                  <div className="count-content text-center">
                    <div className="count-number ">
                      <h4 className="counter">100</h4>
                      <h4 className="static">K</h4>
                    </div>
                    <p>New Users per week</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <div className="img-area">
                <Image className="img-1" src={about_img_1} alt="image" />
                <Image className="img-2" src={about_img_2} alt="image" />
                <Image className="img-3" src={about_img_3} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
