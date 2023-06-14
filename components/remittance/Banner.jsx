import Image from "next/image";
import Link from "next/link";
import BigBanner from "../common/BigBanner";
import SendMoneyForm from "./SendMoneyForm";
import app_store from "/public/images/app-store.png";
import google_play from "/public/images/google-play.png";

const Banner = () => {
  return (
    <section className="banner-section inner-banner remittance">
      <BigBanner>
        <div className="main-content">
          <div className="section-text">
            <h5 className="sub-title">Simple. Transparent. Secure</h5>
            <h2 className="title">Send Remittance Back Home</h2>
            <p>
              Competitive rates, low fees, and the most reliable money transfer
              convenient way.You can receive money from abroad directly.
            </p>
          </div>
          <div className="button-group d-flex align-items-center flex-wrap">
            <Link href="/">
              <Image src={google_play} alt="image" />
            </Link>
            <Link href="/">
              <Image src={app_store} alt="image" />
            </Link>
          </div>
        </div>
      </BigBanner>

      <div className="bottom-box">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="form-content">
                <div className="section-header text-center">
                  <h2 className="title">Send Money Anywhere</h2>
                  <p>
                    Please fill the form below. We will get in touch with you
                    within 1-2 business days, to request all necessary details
                  </p>
                </div>

                {/* Send Money Form */}
                <SendMoneyForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
