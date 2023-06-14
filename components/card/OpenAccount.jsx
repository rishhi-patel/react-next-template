import SingleBox from "../common/SingleBox";
import { open_account_data } from "./cardData";

const OpenAccount = () => {
  return (
    <section className="account-feature features">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-header text-center">
                <h5 className="sub-title">
                  Boost your savings with the right credit card
                </h5>
                <h2 className="title">
                  Access Endless Possibilities With Bankio Card
                </h2>
                <p>
                  All your needs covered with a full range of credit and debit
                  cards.
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {open_account_data.map((singleData) => (
              <div key={singleData.id} className="col-md-4">
                <SingleBox
                  icon={singleData.icon}
                  title={singleData.title}
                  desc={singleData.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenAccount;
