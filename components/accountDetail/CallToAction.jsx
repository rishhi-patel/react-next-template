import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="call-action">
      <div className="overlay pt-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="main-content">
                <div className="section-header text-center">
                  <h2 className="title">Save With Us</h2>
                  <p>
                    Bankio’s range of savings account offers tailor made saving
                    solutions for you
                  </p>
                </div>
                <div className="bottom-area text-center">
                  <Link href="/register" className="cmn-btn">
                    Open Account
                  </Link>
                  <Link href="/contact" className="cmn-btn second">
                    Get in touch
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
