import Banner from "../components/account/Banner";
import BusinessSolutions from "../components/account/BusinessSolutions";
import Feature from "../components/account/Feature";
import OpenAccount from "../components/account/OpenAccount";
import Faq from "../components/faq/Faq";

export default function Account() {
  return (
    <>
      <Banner />
      <OpenAccount />
      <Feature />
      <BusinessSolutions />
      <Faq cls="account" />
    </>
  );
}
