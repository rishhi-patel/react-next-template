import Image from "next/image";
import Link from "next/link";
import arrow_left from "/public/images/icon/arrow-left.png";

const OtpForm = () => {
  return (
    <section className="sign-in-up verify-number">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="form-content">
                <div className="section-header">
                  <h5 className="sub-title">Give yourself the Bankio Edge</h5>
                  <h2 className="title">Varified Your Phone Number</h2>
                  <p>
                    A 6 digit One Time Password (OTP) has been sent to your
                    given email address which will expire in 15 minutes, after
                    which you will need to resend the code.
                  </p>
                </div>
                <form action="#">
                  <div className="row">
                    <div className="col-xl-5 col-lg-6 col-md-6">
                      <div className="single-input">
                        <label>Enter OTP Here</label>
                        <div className="mobile-otp d-flex align-items-center">
                          <div className="inputs d-flex flex-row justify-content-center">
                            <input
                              className="text-center form-control"
                              type="text"
                              placeholder="1"
                              maxLength="1"
                              required
                            />
                            <input
                              className="text-center form-control"
                              type="text"
                              placeholder="1"
                              maxLength="1"
                              required
                            />
                            <input
                              className="text-center form-control"
                              type="text"
                              placeholder="1"
                              maxLength="1"
                              required
                            />
                            <input
                              className="text-center form-control"
                              type="text"
                              placeholder="1"
                              maxLength="1"
                              required
                            />
                            <input
                              className="text-center form-control"
                              type="text"
                              placeholder="1"
                              maxLength="1"
                              required
                            />
                            <input
                              className="text-center form-control"
                              type="text"
                              placeholder="1"
                              maxLength="1"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-area">
                    <Link href="/">Resend Code</Link>
                    <button className="cmn-btn">Submit OTP</button>
                  </div>
                </form>
                <div className="btn-back mt-60 d-flex align-items-center">
                  <Link href="/" className="back-arrow">
                    <Image src={arrow_left} alt="icon" />
                    Back
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

export default OtpForm;
