import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="call-action card-page affiliate">
      <div className="overlay pt-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="main-content">
                <div className="section-header text-center">
                  <h5 className="sub-title">
                    Even better, your friends will earn $25 too!
                  </h5>
                  <h2 className="title">
                    Invite Your Friends & Earn $25 for Each Referral
                  </h2>
                  <p>
                    Sign in to your account for your personalized link and share
                    it with friends. Once they apply for a Bankio account, you
                    both get paid!
                  </p>
                </div>
                <div className="btn-area text-center">
                  <Link href="/register" className="cmn-btn">
                    Refer a friend now!
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
