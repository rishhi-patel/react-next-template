import AccountPlanCard from "../cards/AccountPlanCard";
import { accountPlan_data } from "./accountDetailData";

const AccountPlans = () => {
  return (
    <section className="grow-confidence">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h5 className="sub-title">Grow Your Confidence</h5>
                <h2 className="title">
                  Choose the account that matches your needs
                </h2>
                <p>
                  We have a fine range of accounts to help you manage your
                  finances seamlessly
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {accountPlan_data.map((account) => (
              <div key={account.id} className="col-lg-4 col-md-6">
                <AccountPlanCard account={account} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountPlans;
