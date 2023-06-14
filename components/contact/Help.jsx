import SingleBox from "../common/SingleBox";
import need_help_1 from "/public/images/icon/need-help-1.png";
import need_help_2 from "/public/images/icon/need-help-2.png";
import need_help_3 from "/public/images/icon/need-help-3.png";

const help_data = [
  {
    id: 1,
    icon: need_help_1,
    title: "Sales",
    desc: "sales@bankio.com",
  },
  {
    id: 2,
    icon: need_help_2,
    title: "Help & Support",
    desc: "supports@bankio.com",
  },
  {
    id: 3,
    icon: need_help_3,
    title: "Media & Press",
    desc: "media@bankio.com",
  },
];

const Help = () => {
  return (
    <section className="account-feature loan-feature need-more-help">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-header text-center">
                <h5 className="sub-title">
                  You can reach out to us for all your
                </h5>
                <h2 className="title">Need More Help?</h2>
                <p>
                  Queries, complaints and feedback. We will be happy to serve
                  you
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {help_data.map((singleData) => (
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

export default Help;
