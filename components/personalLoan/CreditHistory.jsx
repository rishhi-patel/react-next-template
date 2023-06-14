import Image from "next/image";
import Link from "next/link";
import credit_history_left from "/public/images/credit.png";
import check from "/public/images/icon/check.png";

const CreditHistory = () => {
  return (
    <section className="features-section credit-history">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img-area">
                <Image src={credit_history_left} alt="image adgf" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="top-section">
                <div className="section-text">
                  <h5 className="sub-title">
                    don’t have an SSN yet there is no need to worry
                  </h5>
                  <h2 className="title">
                    Be Eligible Without SSN or Credit History
                  </h2>
                  <p>
                    We look at holistic profile of individuals, and do no rely
                    only on traditional credit history. We look at all
                    indications of financial responsibility.
                  </p>
                  <ul className="list">
                    <li className="list-item d-flex align-items-center">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>Current employment or employability</span>
                    </li>
                    <li className="list-item d-flex align-items-center ">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>Education</span>
                    </li>
                    <li className="list-item d-flex align-items-center ">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>Financial Behavior</span>
                    </li>
                  </ul>
                </div>
                <div className="btn-area">
                  <Link href="#personal-loan-form" className="cmn-btn">
                    Apply for a Personal loan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditHistory;
