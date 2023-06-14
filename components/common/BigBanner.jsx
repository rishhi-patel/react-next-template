const BigBanner = ({ cls, children }) => {
  return (
    <section className={`banner-section inner-banner ${cls}`}>
      <div className="overlay">
        <div className="banner-content d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-lg-7 col-md-10">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigBanner;
