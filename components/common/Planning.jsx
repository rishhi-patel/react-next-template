import Link from "next/link";
import planning_data from "../../data/planningData";
import PlaningCard from "../cards/PlaningCard";

const Planning = () => {
  return (
    <section className="financial-planning">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-6 col-lg-5">
              <div className="section-text">
                <h5 className="sub-title">Financial Planning</h5>
                <h2 className="title">
                  Let&#39;s plan your finances the right way
                </h2>
                <p>
                  Lending that doesn&#39;t weigh you down.We know how hard is it
                  to start something new, that’s why we have the perfect plan
                  for you.
                </p>
              </div>
              <Link href="/register" className="cmn-btn">
                Apply for a loan
              </Link>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="row cus-mar">
                {planning_data.map((singlePlanning) => (
                  <div key={singlePlanning.id} className="col-md-6 col-sm-6">
                    <PlaningCard singlePlanning={singlePlanning} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planning;
