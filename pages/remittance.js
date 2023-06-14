import Testimonials from "../components/common/Testimonials";
import Faq from "../components/faq/Faq";
import App from "../components/remittance/App";
import Banner from "../components/remittance/Banner";
import Feature from "../components/remittance/Feature";
import MoreFeature from "../components/remittance/MoreFeature";
import Security from "../components/remittance/Security";

export default function Remittance() {
  return (
    <>
      <Banner />
      <Feature />
      <MoreFeature />
      <App />
      <Security />
      <Testimonials />
      <Faq cls="account" />
    </>
  );
}
