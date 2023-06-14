import Benefits from "../components/common/Benefits";
import Testimonials from "../components/common/Testimonials";
import Faq from "../components/faq/Faq";
import AboutHomeLoan from "../components/homeLoan/AboutHomeLoan";
import ApplyForLoan from "../components/homeLoan/ApplyForLoan";
import Banner from "../components/homeLoan/Banner";
import CallToAction from "../components/homeLoan/CallToAction";
import HowItWork from "../components/homeLoan/HowItWork";
import LoanCalculation from "../components/homeLoan/LoanCalculation";

export default function HomeLoan() {
  return (
    <>
      <Banner />
      <AboutHomeLoan />
      <CallToAction />
      <Benefits />
      <LoanCalculation />
      <HowItWork />
      <ApplyForLoan />
      <Testimonials />
      <Faq cls="account" />
    </>
  );
}
