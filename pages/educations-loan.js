import Testimonials from "../components/common/Testimonials";
import AboutBusiness from "../components/educationsLoan/AboutBusiness";
import ApplyForLoan from "../components/educationsLoan/ApplyForLoan";
import Banner from "../components/educationsLoan/Banner";
import CallToAction from "../components/educationsLoan/CallToAction";
import Counter from "../components/educationsLoan/Counter";
import GetLoanIn from "../components/educationsLoan/GetLoanIn";
import OurProducts from "../components/educationsLoan/OurProducts";
import Faq from "../components/faq/Faq";

export default function EducationsLoan() {
  return (
    <>
      <Banner />
      <AboutBusiness />
      <Counter />
      <GetLoanIn />
      <CallToAction />
      <OurProducts />
      <ApplyForLoan />
      <Testimonials />
      <Faq cls="account" />
    </>
  );
}
