const CalculateLoanForm = () => {
  return (
    <form action="#">
      <div className="row">
        <div className="col-md-6">
          <div className="single-input">
            <label htmlFor="collegeName">College Name</label>
            <input
              type="text"
              id="collegeName"
              placeholder="Enter your college name"
              required
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="single-input">
            <label htmlFor="gre">GRE Score</label>
            <input type="text" id="gre" placeholder="Enter" required />
          </div>
        </div>
        <div className="col-md-3">
          <div className="single-input">
            <label htmlFor="score">GMAT Score</label>
            <input type="text" id="score" placeholder="Enter" required />
          </div>
        </div>
      </div>
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-2 col-md-3">
          <div className="single-input">
            <h6>Period</h6>
            <div className="radio-area d-flex">
              <label className="single-radio">
                Yes
                <input type="radio" checked="checked" name="period" required />
                <span className="checkmark"></span>
              </label>
              <label className="single-radio">
                No
                <input type="radio" name="period" required />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="col-lg-10 col-md-9">
          <div className="single-input">
            <label htmlFor="loanAmount">Loan Amount Needed</label>
            <input
              type="text"
              id="loanAmount"
              placeholder="Enter amount"
              required
            />
          </div>
        </div>
      </div>
      <div className="bottom-area row justify-content-between align-items-center">
        <div className="col-lg-8 col-md-7">
          <div className="single-input">
            <h6>Have you already secured your student loan?</h6>
            <div className="radio-area d-flex">
              <label className="single-radio">
                Yes
                <input type="radio" name="loan" required />
                <span className="checkmark"></span>
              </label>
              <label className="single-radio">
                No
                <input type="radio" checked="checked" name="loan" required />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-5">
          <div className="btn-area text-end">
            <button type={"submit"} className="cmn-btn">
              Calculate Now
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CalculateLoanForm;
