import EducationLoanForm from "./EducationLoanForm";

const ApplyForLoan = () => {
  return (
    <section
      className="apply-for-loan business-loan educations"
      id="educations-loan-form"
    >
      <div className="overlay pt-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h5 className="sub-title">Quick & easy Education loan</h5>
                <h2 className="title">Take One Step Closer to Your Dream.</h2>
                <p>
                  Get Education loans approved within days with transparent
                  lending criteria and transparent processes.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="form-content">
                <div className="section-header text-center">
                  <h2 className="title">Apply for a loan</h2>
                  <p>
                    Please fill the form below. We will get in touch with you
                    within 1-2 business days, to request all necessary details
                  </p>
                </div>
                {/* Education Loan Form */}
                <EducationLoanForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyForLoan;
