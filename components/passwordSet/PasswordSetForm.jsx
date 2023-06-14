import Image from "next/image";
import Link from "next/link";
import arrow_left from "/public/images/icon/arrow-left.png";
import show_hide from "/public/images/icon/show-hide.png";

const PasswordSetForm = () => {
  return (
    <section className="sign-in-up set-password">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="form-content">
                <div className="section-header">
                  <h5 className="sub-title">
                    Unlock Your ambitions at every step
                  </h5>
                  <h2 className="title">Set Up Your Password</h2>
                  <p>
                    Your security is our top priority. You&#39;ll need this to
                    log into your bankio account
                  </p>
                </div>
                <form action="#">
                  <div className="row">
                    <div className="col-12">
                      <div className="single-input">
                        <label htmlFor="choosePass">Choose Password</label>
                        <div className="password-show d-flex align-items-center">
                          <input
                            type={"password"}
                            className="passInput"
                            id="choosePass"
                            autocomplete="off"
                            placeholder="Enter Your Password"
                          />
                          <Image
                            className="showPass"
                            src={show_hide}
                            alt="icon"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="single-input ">
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <div className="password-show d-flex align-items-center">
                          <input
                            type={"password"}
                            className="passInput"
                            id="confirmPass"
                            autocomplete="off"
                            placeholder="Enter Your Password"
                          />
                          <Image
                            className="showPass"
                            src={show_hide}
                            alt="icon"
                          />
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

export default PasswordSetForm;
