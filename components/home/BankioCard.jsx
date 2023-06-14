import CardSlider from "../carousel/CardSlider";
import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";

const BankioCard = () => {
  return (
    <section className="card-section">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div className="section-header">
                <h5 className="sub-title">
                  Boost your savings with the right credit card
                </h5>
                <h2 className="title">
                  Access Endless Possibilities with Bankio Card
                </h2>
                <p>
                  All your needs covered with a full range of credit and debit
                  cards.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-end">
            {/* Card slider here  */}
            <CardSlider />

            <div className="col-lg-6">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="credit-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#credit"
                    type="button"
                    role="tab"
                    aria-controls="credit"
                    aria-selected="true"
                  >
                    Credit Card
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="debit-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#debit"
                    type="button"
                    role="tab"
                    aria-controls="debit"
                    aria-selected="false"
                  >
                    Debit Card
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="credit"
                  role="tabpanel"
                  aria-labelledby="credit-tab"
                >
                  {/* Credit Card here */}
                  <CreditCard />
                </div>

                <div
                  className="tab-pane fade"
                  id="debit"
                  role="tabpanel"
                  aria-labelledby="debit-tab"
                >
                  {/* Debit Card here */}
                  <DebitCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankioCard;
