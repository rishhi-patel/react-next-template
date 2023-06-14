import Image from "next/image";
import Link from "next/link";
import counter_Illus from "/public/images/counter-Illus.png";

const LoanCounter = ({
  btnText,
  link,
  title,
  loans_given,
  customers_served,
  countries,
}) => {
  return (
    <section className="counter-educations">
      <div className="overlay">
        <div className="container wow fadeInUp">
          <div className="row d-flex align-items-end justify-content-center">
            <div className="col-lg-5">
              <div className="img-area">
                <Image src={counter_Illus} className="max-un" alt="image" />
              </div>
            </div>
            <div className="col-lg-7 pt-120 pb-120">
              <div className="section-text">
                <h2 className="title">{title}</h2>
              </div>
              <div className="counter-area mb-60 d-flex align-items-center justify-content-between">
                <div className="single">
                  <h3>
                    <span className="counter">{loans_given}</span>M+
                  </h3>
                  <p>Loans Given</p>
                </div>
                <div className="single">
                  <h3>
                    <span className="counter">{customers_served}</span>+
                  </h3>
                  <p>Customers Served</p>
                </div>
                <div className="single">
                  <h3 className="counter">{countries}</h3>
                  <p>Countries</p>
                </div>
              </div>
              <div className="btn-area">
                <Link href={link} className="cmn-btn">
                  {btnText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCounter;
