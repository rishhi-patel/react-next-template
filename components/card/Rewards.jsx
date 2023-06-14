import Link from "next/link";

const Rewards = () => {
  return (
    <section className="call-action card-page">
      <div className="overlay pt-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7">
              <div className="section-header text-center">
                <h2 className="title">
                  Rewards So Awesome, You&#39;ll be Spoiled for Choice
                </h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12">
              <div className="main-content">
                <div className="row mb-60">
                  <div className="col-sm-4">
                    <div className="single">
                      <h3>5%-10%</h3>
                      <p className="xlr">Cashback</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single">
                      <h3>10k+</h3>
                      <p className="xlr">Merchants</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="single">
                      <h3>Giftcards</h3>
                      <p className="xlr">For your friends & family</p>
                    </div>
                  </div>
                </div>
                <div className="bottom-area text-center">
                  <Link href="/register" className="cmn-btn">
                    Apply Now
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

export default Rewards;
