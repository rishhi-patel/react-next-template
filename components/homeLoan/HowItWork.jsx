import Image from "next/image";
import Link from "next/link";
import SingleBox from "../common/SingleBox";
import { get_loan_in_data } from "./homeLoanData";
import how_it_works_home from "/public/images/how-it-works-home.png";

const HowItWork = () => {
  return (
    <section className="account-feature get-loan home-loan">
      <div className="img-area">
        <Image src={how_it_works_home} alt="image" />
      </div>
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-header text-center">
                <h5 className="sub-title">A Better Way to Get Loan</h5>
                <h2 className="title">How it works</h2>
                <p>
                  It&#39;s easier than you think. Follow the following simple
                  easy steps
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            {get_loan_in_data.map((singleData) => (
              <div key={singleData.id} className="col-lg-3">
                <SingleBox
                  icon={singleData.icon}
                  title={singleData.title}
                  desc={singleData.desc}
                />
              </div>
            ))}
          </div>
          <div className="btn-area text-center mt-60">
            <Link href="#home-loan-form" className="cmn-btn">
              Apply for Loan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
