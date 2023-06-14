import Image from "next/image";
import check from "/public/images/icon/check.png";
import pay_early_right from "/public/images/pay-early-right.png";

const PayEarly = () => {
  return (
    <section className="features-section pay-early">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="top-section">
                <div className="section-text">
                  <h5 className="sub-title">
                    Feel free to pay as early as you want
                  </h5>
                  <h2 className="title">Pay early without Any Extra Cost</h2>
                  <p>
                    No prepayment penalty for early payment, pay as soon as you
                    want.
                  </p>
                  <ul className="list">
                    <li className="list-item d-flex align-items-center">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>Fast and Easy</span>
                    </li>
                    <li className="list-item d-flex align-items-center ">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>Early Loan Repaymnet</span>
                    </li>
                    <li className="list-item d-flex align-items-center ">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>No Hidden Fees</span>
                    </li>
                  </ul>
                </div>
                <div className="btn-area">
                  <a href="#personal-loan-form" className="cmn-btn">
                    Apply for a Personal loan
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-area">
                <Image src={pay_early_right} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayEarly;
