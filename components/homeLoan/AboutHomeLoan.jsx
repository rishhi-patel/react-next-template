import Image from "next/image";
import AboutLoan from "../common/AboutLoan";
import about_home_loan_Illus from "/public/images/about-home-loan-Illus.png";
import check from "/public/images/icon/check.png";

const AboutHomeLoan = () => {
  return (
    <AboutLoan
      img={about_home_loan_Illus}
      btnText="Apply for a home loan"
      link="/#home-loan-form"
    >
      <div className="section-text">
        <h5 className="sub-title">Helping you own your home sooner</h5>
        <h2 className="title">A simple way to buy a home or refinance</h2>
        <p>
          Whether you’re building, investing or simply fixing up your current
          home, a housing loan is the best way to hammer in the first nail to
          your dream home.
        </p>
        <ul className="list">
          <li className="list-item d-flex align-items-center">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Same day approval and multiple funding options</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Access loans without origination fees</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Borrow up to $250,000</span>
          </li>
        </ul>
      </div>
    </AboutLoan>
  );
};

export default AboutHomeLoan;
