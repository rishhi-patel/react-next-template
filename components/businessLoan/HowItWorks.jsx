import Image from "next/image";
import Link from "next/link";
import how_works_business from "/public/images/how-works-business.png";
import how_works_1 from "/public/images/icon/how-works-1.png";
import how_works_11 from "/public/images/icon/how-works-11.png";
import how_works_2 from "/public/images/icon/how-works-2.png";
import how_works_22 from "/public/images/icon/how-works-22.png";
import how_works_3 from "/public/images/icon/how-works-3.png";
import how_works_33 from "/public/images/icon/how-works-33.png";
import how_works_4 from "/public/images/icon/how-works-4.png";
import how_works_44 from "/public/images/icon/how-works-44.png";

const HowItWorks = () => {
  return (
    <section className="financial-planning how-works-business">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 wow fadeInUp">
              <div className="section-header">
                <h5 className="sub-title">A Better Way to Get Loan</h5>
                <h2 className="title">How it works</h2>
                <p>
                  It&#39;s easier than you think. Follow the following simple
                  easy steps
                </p>
              </div>
              <div className="mb-60">
                <div className="row cus-mar">
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <Image
                          src={how_works_1}
                          alt="icon"
                          className="active"
                        />
                        <Image src={how_works_11} alt="icon" className="alt" />
                      </div>
                      <h5>1. Fill the form</h5>
                      <p>
                        Fill basic information for us to get in touch with you.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <Image
                          src={how_works_2}
                          alt="icon"
                          className="active"
                        />
                        <Image src={how_works_22} alt="icon" className="alt" />
                      </div>
                      <h5>2. Get pre-qualified</h5>
                      <p>
                        Verify your ID and get on a quick video call with a loan
                        specialist.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <Image
                          src={how_works_3}
                          alt="icon"
                          className="active"
                        />
                        <Image src={how_works_33} alt="icon" className="alt" />
                      </div>
                      <h5>3. Send documents</h5>
                      <p>
                        Upload your documents on the Bankio app and get approved
                        in
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="plan-box">
                      <div className="thumb">
                        <Image
                          src={how_works_4}
                          alt="icon"
                          className="active"
                        />
                        <Image src={how_works_44} alt="icon" className="alt" />
                      </div>
                      <h5>4. Get a loan</h5>
                      <p>
                        Make smart spending decisions on the spot. Our budgeting
                        too
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-area">
                <Link href="/#business-loan-form" className="cmn-btn">
                  Apply for a business loan
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="right-box">
                <Image src={how_works_business} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
