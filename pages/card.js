import Banner from "../components/card/Banner";
import CallToAction from "../components/card/CallToAction";
import CardFeature from "../components/card/CardFeature";
import ChooseYourCard from "../components/card/ChooseYourCard";
import OpenAccount from "../components/card/OpenAccount";
import Rewards from "../components/card/Rewards";
import Faq from "../components/faq/Faq";

export default function Card() {
  return (
    <>
      <Banner />
      <OpenAccount />
      <Rewards />
      <CardFeature />
      <ChooseYourCard />
      <CallToAction />
      <Faq cls="account" />
    </>
  );
}
