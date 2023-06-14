import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner cls="about" titile="About">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["About Us", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
