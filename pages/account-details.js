import AccountPlans from "../components/accountDetail/AccountPlans";
import Banner from "../components/accountDetail/Banner";
import CallToAction from "../components/accountDetail/CallToAction";
import HowItWork from "../components/accountDetail/HowItWork";
import Saving from "../components/accountDetail/Saving";
import Faq from "../components/faq/Faq";

export default function AccountDetails() {
  return (
    <>
      <Banner />
      <Saving />
      <CallToAction />
      <AccountPlans />
      <HowItWork />
      <Faq />
    </>
  );
}
