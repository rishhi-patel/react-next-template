import Image from "next/image";
import Link from "next/link";
import arrow_left from "/public/images/icon/arrow-left.png";
import united_states from "/public/images/united-states.png";

const VarifyNumberForm = () => {
  return (
    <section className="sign-in-up mobile-number">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="form-content">
                <div className="section-header">
                  <h5 className="sub-title">Give yourself the Bankio Edge</h5>
                  <h2 className="title">
                    What’s the best number to reach you on?
                  </h2>
                  <p>
                    We don’t send spam, just important information you must know
                  </p>
                </div>
                <form action="#">
                  <div className="row">
                    <div className="col-12">
                      <div className="single-input">
                        <label htmlFor="mobileNum">Mobile Number</label>
                        <div className="phone-number d-flex align-items-center">
                          <div className="d-flex align-items-center select">
                            <Image src={united_states} alt="image" />
                            <select>
                              <option value="1">USD</option>
                              <option value="2">EUR</option>
                              <option value="3">INR</option>
                            </select>
                          </div>
                          <input type="text" id="mobileNum" placeholder="+1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-area">
                    <button className="cmn-btn">Submit Now</button>
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

export default VarifyNumberForm;
