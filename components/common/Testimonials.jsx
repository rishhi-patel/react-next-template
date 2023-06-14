import TestimonialsSlider from "../carousel/TestimonialsSlider";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h5 className="sub-title">Testimonials</h5>
                <h2 className="title">Trusted by 2000+ Partners & Customers</h2>
                <p>
                  Take a look at our past customers success stories. Our goal is
                  to help you grow
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* Testimonials Slider */}
              <TestimonialsSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
