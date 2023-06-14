const EducationLoanForm = () => {
  return (
    <form action="#">
      <div className="row">
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="What's your name?" />
          </div>
        </div>
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="What's your email?" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" placeholder="(123) 480 - 3540" />
          </div>
        </div>
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="state">State</label>
            <input type="text" id="state" placeholder="California" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="amount">Loan amount</label>
            <input type="text" id="amount" placeholder="Ex. $8,000 USD" />
          </div>
        </div>
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="term">Loan term</label>
            <input type="text" id="term" placeholder="Ex. 12 months" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="single-input">
            <label htmlFor="country">Country you are going</label>
            <input type="text" id="country" placeholder="Ex. $8,000 USD" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="single-input d-flex align-items-center">
            <div className="checkbox_wrapper">
              <input type="checkbox" />
              <label></label>
            </div>
            <span className="check_span">
              By clicking submit, you agree to Bankio&#39;s Privacy Policy, T&C
              & E-sign and Communication Authorization.
            </span>
          </div>
        </div>
      </div>
      <div className="btn-area text-center">
        <button className="cmn-btn">Submit</button>
      </div>
    </form>
  );
};

export default EducationLoanForm;
