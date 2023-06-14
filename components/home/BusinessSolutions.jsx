import BusinessSolutionsCard from "../cards/BusinessSolutionsCard";
import { business_solutions_data } from "./homeData";

const BusinessSolutions = () => {
  return (
    <section className="solutions-business">
      <div className="overlay pt-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header text-center">
                <h5 className="sub-title">
                  Open your account from anywhere in the world
                </h5>
                <h2 className="title">Solutions for Every Business Need.</h2>
                <p>
                  Power up your business with a full-stack online bank account
                  that fits your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {business_solutions_data.map((singleBusiness) => (
              <div key={singleBusiness.id} className="col-lg-4 col-md-6">
                <BusinessSolutionsCard singleBusiness={singleBusiness} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
