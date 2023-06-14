import SingleBox from "../common/SingleBox";
import { net_work_data } from "./affiliateData";

const NetWork = () => {
  return (
    <section className="account-feature affiliate">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h5 className="sub-title">Make money through your network</h5>
                <h2 className="title">
                  What goes around, comes around, and we take it seriously!
                </h2>
                <p>
                  You got credit, now it’s time to give your friends some credit
                  too. With Bankio’s Refer-a-Friend program, you can earn a $25
                  referral reward when your friend activates a Bankio credit
                  card using your link. What’s more, your friend gets $25
                  credited to their Bankio credit card balance too!
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {net_work_data.map((singleData) => (
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

export default NetWork;
