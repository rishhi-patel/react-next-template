import HowItWork from "../components/carLoan/HowItWork";
import Faq from "../components/faq/Faq";
import AboutPersonalLoan from "../components/personalLoan/AboutPersonalLoan";
import ApplyForLoan from "../components/personalLoan/ApplyForLoan";
import Banner from "../components/personalLoan/Banner";
import Counter from "../components/personalLoan/Counter";
import CreditHistory from "../components/personalLoan/CreditHistory";
import GetPersonal from "../components/personalLoan/GetPersonal";
import Loan from "../components/personalLoan/Loan";
import PayEarly from "../components/personalLoan/PayEarly";
import Testimonials from "../components/personalLoan/Testimonials";

export default function PersonalLoan(params) {
  return (
    <>
      <Banner />
      <AboutPersonalLoan />
      <Counter />
      <HowItWork />
      <Loan />
      <Testimonials />
      <CreditHistory />
      <PayEarly />
      <GetPersonal />
      <ApplyForLoan />
      <Faq cls="account" />
    </>
  );
}
