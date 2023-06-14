import ContactForm from "./ContactForm";

const GetInTouch = () => {
  return (
    <section className="apply-for-loan contact">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h2 className="title">Get in touch with us.</h2>
                <p>
                  Fill up the form and our team will get back to you within 24
                  hours
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="form-content">
                {/* Contact Form here */}
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
