import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="Privacy Policy" cls="privacy-content">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Pages", "/"],
          ["Privacy Policy", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
