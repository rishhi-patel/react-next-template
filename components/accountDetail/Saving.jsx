import Image from "next/image";
import check from "/public/images/icon/check.png";
import saving_account_Illu from "/public/images/saving-account-Illu.png";

const Saving = () => {
  return (
    <section className="saving-account features-section">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center">
            <div className="col-lg-6 cus-ord">
              <div className="img-area">
                <Image src={saving_account_Illu} alt="image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="top-section">
                <h5 className="sub-title">Secure & Grow Your Savings</h5>
                <h2 className="title">Savings Accounts Made for You</h2>
                <p>
                  Helping you save for your goals sooner, with accounts free
                  from account keeping, management, and annual fees.
                </p>
                <ul className="list">
                  <li className="list-item d-flex align-items-center">
                    <span className="check d-flex align-items-center justify-content-center">
                      <Image src={check} alt="icon" />
                    </span>
                    <span>Free deposits and withdrawals</span>
                  </li>
                  <li className="list-item d-flex align-items-center">
                    <span className="check d-flex align-items-center justify-content-center">
                      <Image src={check} alt="icon" />
                    </span>
                    <span>Your savings are protected at all times</span>
                  </li>
                  <li className="list-item d-flex align-items-center">
                    <span className="check d-flex align-items-center justify-content-center">
                      <Image src={check} alt="icon" />
                    </span>
                    <span>Be eligible for a dividend, when paid</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Saving;
