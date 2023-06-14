import Image from "next/image";
import AboutLoan from "../common/AboutLoan";
import about_educations_loan_Illus from "/public/images/about-educations-loan-Illus.png";
import check from "/public/images/icon/check.png";

const AboutBusiness = () => {
  return (
    <AboutLoan
      btnText="Apply for a Educations loan"
      link="/#educations-loan-form"
      img={about_educations_loan_Illus}
    >
      <div className="section-text">
        <h5 className="sub-title">Varied offers for boundless ambitions</h5>
        <h2 className="title">Educations loans for everyone</h2>
        <p>
          Make the smart choice. Get education loan offers at great interest
          rates
        </p>
        <ul className="list">
          <li className="list-item d-flex align-items-center">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>No SSN or credit history required</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Checking for rate won&#39;t impact credit score</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>No prepayment fees</span>
          </li>
        </ul>
      </div>
    </AboutLoan>
  );
};

export default AboutBusiness;
