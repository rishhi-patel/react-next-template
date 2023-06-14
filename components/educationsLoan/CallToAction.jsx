import CalculateLoanForm from "./CalculateLoanForm";

const CallToAction = () => {
  return (
    <section className="call-action card-page educations">
      <div className="overlay pt-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h2 className="title">Let&#39;s Calculate Your Loan Offer</h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12">
              <div className="main-content">
                {/* Calculat eLoan Form */}
                <CalculateLoanForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
