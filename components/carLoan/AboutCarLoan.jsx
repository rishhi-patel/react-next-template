import AboutLoan from "../common/AboutLoan";
import about_car_loan_Illus from "/public/images/about-car-loan-Illus.png";

const AboutCarLoan = () => {
  return (
    <AboutLoan
      btnText="Apply Now"
      img={about_car_loan_Illus}
      link="/#car-loan-form"
    >
      <div className="section-text">
        <h5 className="sub-title">Why should you demand a bankio loan</h5>
        <h2 className="title">Smarter car loans. Designed for you.</h2>
        <p>
          Bankio expands access to fair credit with a simple and fast loan
          application that looks at you – not just your credit score.A flexible
          hassle-free financing facility that enables you to own your dream car
        </p>
      </div>
    </AboutLoan>
  );
};

export default AboutCarLoan;
