const LoanForm = () => {
  return (
    <form action="#">
      <div className="row">
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="What's your name?"
              required
            />
          </div>
        </div>
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="What's your email?"
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              placeholder="(123) 480 - 3540"
              required
            />
          </div>
        </div>
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="state">State</label>
            <input type="text" id="state" placeholder="California" required />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="amount">Loan amount</label>
            <input
              type="text"
              id="amount"
              placeholder="Ex. $8,000 USD"
              required
            />
          </div>
        </div>
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="term">Loan term</label>
            <input type="text" id="term" placeholder="Ex. 12 months" />
          </div>
        </div>
      </div>
      <div className="btn-area text-center">
        <button className="cmn-btn">Submit</button>
      </div>
    </form>
  );
};

export default LoanForm;
