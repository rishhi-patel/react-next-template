const ContactForm = () => {
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
            <label htmlFor="loan">Service interested in</label>
            <input
              type="text"
              id="loan"
              placeholder="Ex. Auto Loan, Home Loan"
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="single-input">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="I would like to get in touch with you..."
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>
        </div>
      </div>
      <div className="btn-area text-center">
        <button type={"button"} className="cmn-btn">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
