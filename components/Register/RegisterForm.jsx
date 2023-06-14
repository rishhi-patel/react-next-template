import Link from "next/link";

const RegisterForm = () => {
  return (
    <section className="sign-in-up register">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="form-content">
                <div className="section-header">
                  <h5 className="sub-title">The Power of Financial Freedom</h5>
                  <h2 className="title">Let’s Get Started!</h2>
                  <p>
                    Please Enter your Email Address to Start your Online
                    Application
                  </p>
                </div>
                <form action="#">
                  <div className="row">
                    <div className="col-6">
                      <div className="single-input">
                        <label htmlFor="fname">First Name</label>
                        <input
                          type="text"
                          id="fname"
                          placeholder="Jone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="single-input">
                        <label htmlFor="lname">Last Name</label>
                        <input
                          type="text"
                          id="lname"
                          placeholder="Fisher"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="single-input">
                        <label htmlFor="email">Enter Your Email ID</label>
                        <input
                          type="text"
                          id="email"
                          placeholder="Your email ID here"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="single-input">
                        <label htmlFor="referral">
                          Someone invited you over?
                        </label>
                        <input
                          type="text"
                          id="referral"
                          placeholder="Enter the referral code"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="single-input">
                        <p>
                          By clicking submit, you agree to{" "}
                          <Link href="/terms-condition">
                            <span>
                              Bankio&#39;s Terms of Use, Privacy Policy, E-sign
                            </span>
                          </Link>{" "}
                          &{" "}
                          <Link href="/">
                            <span>communication Authorization.</span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="btn-area">
                    <button type={"submit"} className="cmn-btn">
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
