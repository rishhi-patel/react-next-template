import SingleBox from "../common/SingleBox";
import { open_account_data } from "./accountData";

const OpenAccount = () => {
  return (
    <section className="account-feature">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-header text-center">
                <h5 className="sub-title">
                  Open your account from anywhere in the world
                </h5>
                <h2 className="title">An account, designed for you</h2>
                <p>
                  Power up your business and personal life with a full-stack
                  online bank account that fits your needs.
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
