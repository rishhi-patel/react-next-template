import Image from "next/image";
import { useState } from "react";
import home_loan_section_right from "/public/images/home-loan-section-right.png";

const LoanCalculation = () => {
  const [sliderValue, setSliderValue] = useState(2000000);
  const [sliderValueOne, setSliderValueOne] = useState(50000);

  const MAX = 5000000;
  const MAX_ONE = 100000;

  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(sliderValue * 100) / MAX}% 100%`,
    };
  };

  const getBackgroundSizeOne = () => {
    return {
      backgroundSize: `${(sliderValueOne * 100) / MAX_ONE}% 100%`,
    };
  };

  return (
    <section className="loan-calculation">
      <div className="img-area pt-120">
        <Image src={home_loan_section_right} alt="image" />
      </div>
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h5 className="sub-title">
                  Get a quick and easy loan to own your dream home
                </h5>
                <h2 className="title">
                  Get Started with the Digital Mortgage Experience
                </h2>
                <p className="top-para">
                  Prequalify or apply for your mortgage in minutes
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-7">
              <div className="form-group">
                <div className="range-amount">
                  <h5 className="d-flex flex-column">
                    <label>
                      Purchase Price: <span> ${sliderValue}</span>
                    </label>
                    <input
                      type={"range"}
                      min={60000}
                      max={MAX}
                      onChange={(e) => setSliderValue(e.target.value)}
                      style={getBackgroundSize()}
                      value={sliderValue}
                    />
                  </h5>
                </div>
                {/* <div id="home-loan-slide"></div> */}
                <div className="d-flex justify-content-between">
                  <p>$60,000</p>
                  <p>$2.5 million</p>
                </div>
              </div>
              <div className="form-group">
                <div className="range-amount">
                  <h5 className="d-flex flex-column">
                    <label>
                      Down Payment: <span> ${sliderValueOne}</span>
                    </label>
                    <input
                      type={"range"}
                      min={1000}
                      max={MAX_ONE}
                      onChange={(e) => setSliderValueOne(e.target.value)}
                      style={getBackgroundSizeOne()}
                      value={sliderValueOne}
                    />
                  </h5>
                </div>
                <div id="down-payment-slide"></div>
                <div className="d-flex justify-content-between">
                  <p>5% or more of purchase price</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="radio-area">
                    <h6>Period</h6>
                    <label className="single-radio">
                      5/1 arm variable
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="single-radio">
                      15 Year fixed
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="single-radio">
                      30 Year fixed
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="content-box text-center">
                <p className="mdr">Your Total Payment will be</p>
                <h2 className="mb-60">$984</h2>
                <div className="info-block mb-60 d-flex align-items-center justify-content-between">
                  <div className="info-single text-center">
                    <span>Rate</span>
                    <h6>5.250%</h6>
                  </div>
                  <div className="info-single text-center">
                    <span>APR</span>
                    <h6>4.418</h6>
                  </div>
                  <div className="info-single text-center">
                    <span>Points</span>
                    <h6>0.325</h6>
                  </div>
                </div>
                <div className="btn-area">
                  <a href="#home-loan-form" className="cmn-btn">
                    Apply for Loan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculation;
