import Image from "next/image";
import Link from "next/link";
import show_hide from "/public/images/icon/show-hide.png";

const LoginForm = () => {
  return (
    <section className="sign-in-up login">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="form-content">
                <div className="section-header">
                  <h5 className="sub-title">The Power of Financial Freedom</h5>
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
                        <label htmlFor="email">Enter Your Email ID</label>
                        <input
                          type={"email"}
                          id="email"
                          placeholder="Your email ID here"
                          required
                        />
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
                            placeholder="Enter Your Password"
                            required
                          />
                          <Image
                            className="showPass"
                            src={show_hide}
                            alt="icon"
                          />
                        </div>
                        <div className="forgot-area text-end">
                          <Link href="/#" className="forgot-password">
                            Forgot Password?
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-area">
                    <button className="cmn-btn">Login</button>
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

export default LoginForm;
