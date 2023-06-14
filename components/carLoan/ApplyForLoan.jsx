import LoanForm from "../common/LoanForm";

const ApplyForLoan = () => {
  return (
    <section className="apply-for-loan" id="car-loan-form">
      <div className="overlay pt-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h2 className="title">
                  Apply for a loan today. Your new car is waiting for you
                </h2>
                <p>
                  Don’t just dream, get your dream car.Bankio offers a flexible
                  and hassle-free financing facility that enables you to own
                  your dream car and provides financing up to 85% of the value
                  of your desired car.
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
                {/* Loan form  */}
                <LoanForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyForLoan;
