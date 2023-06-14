import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="Contact Us" cls="contact">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Contact Us", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
