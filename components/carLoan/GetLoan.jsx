import SingleBox from "../common/SingleBox";
import { get_loan_data } from "./carLoanData";

const GetLoan = () => {
  return (
    <section className="account-feature loan-feature">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h5 className="sub-title">
                  Why Bankio is a great financing option for you.
                </h5>
                <h2 className="title">Great benefits from Bankio</h2>
                <p>
                  Bankio CarLoan offers you the freedom to choose any vehicle on
                  a fixed mark-up rate facility to suit your personal
                  requirements​
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {get_loan_data.map((singleData) => (
              <div key={singleData.id} className="col-lg-4 col-md-6">
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

export default GetLoan;
