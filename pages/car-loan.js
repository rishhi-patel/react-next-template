import AboutCarLoan from "../components/carLoan/AboutCarLoan";
import ApplyForLoan from "../components/carLoan/ApplyForLoan";
import Banner from "../components/carLoan/Banner";
import CallToAction from "../components/carLoan/CallToAction";
import HowItWork from "../components/carLoan/HowItWork";
import Benefits from "../components/common/Benefits";
import Faq from "../components/faq/Faq";

export default function CarLoan() {
  return (
    <>
      <Banner />
      <AboutCarLoan />
      <ApplyForLoan />
      <HowItWork />
      <CallToAction />
      <Benefits />
      <Faq cls="account" />
    </>
  );
}
