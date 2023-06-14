import Image from "next/image";
import { useState } from "react";
import check from "/public/images/icon/check.png";

const Loan = () => {
  const [sliderValue, setSliderValue] = useState(12000);
  const MAX = 30000;

  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(sliderValue * 100) / MAX}% 100%`,
    };
  };
  return (
    <section className="business-loan-section personal-loan">
      <div className="overlay">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-content">
                <div className="section-text">
                  <h2 className="title">Put Your Plans into Action</h2>
                  <p>
                    Choose the Personal loan amount that you need ($1,000 to
                    $30,000) and the payment period (6–18 months) that suits you
                    best.
                  </p>
                </div>
                <form action="#">
                  <div className="form-group">
                    <div className="range-amount">
                      <h4 className="d-flex flex-column align-items-center justify-content-center">
                        <label>
                          Personal Loan Amount : <span> ${sliderValue}</span>
                        </label>
                        <input
                          type={"range"}
                          min={1000}
                          max={MAX}
                          onChange={(e) => setSliderValue(e.target.value)}
                          style={getBackgroundSize()}
                          value={sliderValue}
                        />
                      </h4>
                    </div>
                    <div id="personal-slide"></div>
                  </div>
                  <ul
                    className="nav nav-tabs justify-content-between"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-btn active"
                        id="months12-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#months12"
                        type="button"
                        role="tab"
                        aria-controls="months12"
                        aria-selected="true"
                      >
                        12 Months
                        <span className="mdr">Av. APR is 7.99%</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-btn"
                        id="months18-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#months18"
                        type="button"
                        role="tab"
                        aria-controls="months18"
                        aria-selected="false"
                      >
                        18 Months
                        <span className="mdr">Av. APR is 7.99%</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-btn"
                        id="months24-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#months24"
                        type="button"
                        role="tab"
                        aria-controls="months24"
                        aria-selected="false"
                      >
                        24 Months
                        <span className="mdr">Av. APR is 7.99%</span>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-btn"
                        id="months36-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#months36"
                        type="button"
                        role="tab"
                        aria-controls="months36"
                        aria-selected="false"
                      >
                        36 Months
                        <span className="mdr">Av. APR is 7.99%</span>
                      </button>
                    </li>
                  </ul>
                  <div className="bottom-area pt-120 d-xl-flex align-items-center justify-content-between">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="months12"
                        role="tabpanel"
                        aria-labelledby="months12-tab"
                      >
                        <h5>
                          Monthly Payment: <span>$608.89</span>
                        </h5>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="months18"
                        role="tabpanel"
                        aria-labelledby="months18-tab"
                      >
                        <h5>
                          Monthly Payment: <span>$1208.89</span>
                        </h5>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="months24"
                        role="tabpanel"
                        aria-labelledby="months24-tab"
                      >
                        <h5>
                          Monthly Payment: <span>$1808.89</span>
                        </h5>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="months36"
                        role="tabpanel"
                        aria-labelledby="months36-tab"
                      >
                        <h5>
                          Monthly Payment: <span>$2408.89</span>
                        </h5>
                      </div>
                    </div>
                    <a href="#personal-loan-form" className="cmn-btn">
                      Apply for a Personal loan
                    </a>
                  </div>
                </form>
              </div>
              <ul className="list d-lg-flex justify-content-between">
                <li className="list-item d-flex align-items-center">
                  <span className="check d-flex align-items-center justify-content-center">
                    <Image src={check} alt="icon" />
                  </span>
                  <span>No SSN or credit history required</span>
                </li>
                <li className="list-item d-flex align-items-center ">
                  <span className="check d-flex align-items-center justify-content-center">
                    <Image src={check} alt="icon" />
                  </span>
                  <span>Checking for rate won&#39;t impact credit score</span>
                </li>
                <li className="list-item d-flex align-items-center ">
                  <span className="check d-flex align-items-center justify-content-center">
                    <Image src={check} alt="icon" />
                  </span>
                  <span>No prepayment fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loan;
