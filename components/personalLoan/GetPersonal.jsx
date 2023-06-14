import Image from "next/image";
import get_personal_loan from "/public/images/get-personal-loan.png";
import check from "/public/images/icon/check.png";

const GetPersonal = () => {
  return (
    <section className="features-section get-personal-loan">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="img-area">
                <Image src={get_personal_loan} alt="image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="top-section">
                <div className="section-text">
                  <h5 className="sub-title">
                    Easy access to all your personal needs
                  </h5>
                  <h2 className="title">
                    Loans, minus the paperwork and haggling.
                  </h2>
                  <p>
                    We make borrowing uncomplicated by setting clear criteria
                    that you can view beforehand to decide if we fit your needs.
                  </p>
                  <ul className="list">
                    <li className="list-item d-flex align-items-center">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>Competitively priced and tailored for you.</span>
                    </li>
                    <li className="list-item d-flex align-items-center ">
                      <span className="check d-flex align-items-center justify-content-center">
                        <Image src={check} alt="icon" />
                      </span>
                      <span>Get an overview on your loans in the app.</span>
                    </li>
                  </ul>
                </div>
                <div className="btn-area">
                  <a href="#personal-loan-form" className="cmn-btn">
                    Apply for a Personal loan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetPersonal;
