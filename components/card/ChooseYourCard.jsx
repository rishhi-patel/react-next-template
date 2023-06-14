import Image from "next/image";
import Link from "next/link";
import card_1 from "/public/images/card-1.png";
import card_2 from "/public/images/card-2.png";
import card_3 from "/public/images/card-3.png";

const ChooseYourCard = () => {
  return (
    <section className="choose-card">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-header text-center">
                <h5 className="sub-title">Grow Your Confidence</h5>
                <h2 className="title">
                  Choose the Card that Matches Your Needs
                </h2>
                <p>
                  We have a fine range of accounts to help you manage your
                  finances seamlessly
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center cus-mar">
            <div className="col-lg-12 text-center">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="credit-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#credit"
                    type="button"
                    role="tab"
                    aria-controls="credit"
                    aria-selected="true"
                  >
                    Credit Card
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="debit-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#debit"
                    type="button"
                    role="tab"
                    aria-controls="debit"
                    aria-selected="false"
                  >
                    Debit Card
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="credit"
                  role="tabpanel"
                  aria-labelledby="credit-tab"
                >
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="single-card">
                        <Image src={card_1} alt="images" />
                        <div className="btn-area">
                          <Link href="/register" className="cmn-btn">
                            Get Started Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="single-card">
                        <Image src={card_2} alt="images" />
                        <div className="btn-area">
                          <Link href="/register" className="cmn-btn">
                            Get Started Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="single-card">
                        <Image src={card_3} alt="images" />
                        <div className="btn-area">
                          <Link href="/register" className="cmn-btn">
                            Get Started Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="debit"
                  role="tabpanel"
                  aria-labelledby="debit-tab"
                >
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="single-card">
                        <Image src={card_3} alt="images" />
                        <div className="btn-area">
                          <Link href="/register" className="cmn-btn">
                            Get Started Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="single-card">
                        <Image src={card_2} alt="images" />
                        <div className="btn-area">
                          <Link href="/register" className="cmn-btn">
                            Get Started Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="single-card">
                        <Image src={card_1} alt="images" />
                        <div className="btn-area">
                          <Link href="/register" className="cmn-btn">
                            Get Started Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseYourCard;
