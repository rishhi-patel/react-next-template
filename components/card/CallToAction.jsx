import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="call-action card-page second">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="section-text text-center">
                <h2 className="title">
                  Now it&#39;s time to switch old ways to track expenses smarter
                </h2>
                <p>What are you waiting for? It&#39;s time to get started.</p>
              </div>
              <div className="btn-area text-center">
                <Link href="/register" className="cmn-btn">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
