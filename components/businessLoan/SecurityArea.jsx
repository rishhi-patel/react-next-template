import Image from "next/image";
import security_area_left from "/public/images/security-area-left.png";

const SecurityArea = () => {
  return (
    <section className="security-section">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img-area">
                <Image src={security_area_left} alt="image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-right">
                <h5 className="sub-title">Security is our top priority</h5>
                <h2 className="title">You&#39;re safe with us</h2>
                <p>
                  Your business data is important to get financing. We keep your
                  data safe with bank-level security and 256-bit encryption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityArea;
