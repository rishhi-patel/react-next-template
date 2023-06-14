import SingleBox from "../common/SingleBox";
import { feature_data } from "./remittanceData";

const Feature = () => {
  return (
    <section className="account-feature remittance">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row cus-mar">
            {feature_data.map((singleData) => (
              <div key={singleData.id} className="col-lg-3 col-md-6">
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

export default Feature;
