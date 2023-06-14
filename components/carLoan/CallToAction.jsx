import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="call-action car-page">
      <div className="overlay pt-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="main-content">
                <div className="section-header text-center">
                  <h2 className="title">Get a new car today, apply now.</h2>
                </div>
                <div className="bottom-area text-center">
                  <Link href="#car-loan-form" className="cmn-btn">
                    Apply for Loan
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

export default CallToAction;
