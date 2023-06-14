import Image from "next/image";
import Link from "next/link";
import app_store from "/public/images/app-store.png";
import google_play from "/public/images/google-play.png";
import right_choice_Illus from "/public/images/right-choice-Illus.png";

const App = () => {
  return (
    <section className="features-section app-download remittance">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img-area">
                <Image
                  className="max-un"
                  src={right_choice_Illus}
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="top-section">
                <h5 className="sub-title">
                  Learn why Bankio is the right choice for you
                </h5>
                <h2 className="title">Send money from the comfort of home</h2>
                <p>
                  You can deposit money directly into someone’s bank account.
                  This way, they don’t even have to leave their house either!
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
