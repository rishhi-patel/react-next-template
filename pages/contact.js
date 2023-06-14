import Banner from "../components/contact/Banner";
import GetInTouch from "../components/contact/GetInTouch";
import Help from "../components/contact/Help";
import Faq from "../components/faq/Faq";

export default function Contact() {
  return (
    <>
      <Banner />
      <GetInTouch />
      <Help />
      <Faq cls="account" />
    </>
  );
}
