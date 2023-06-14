import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="Career Single" cls="career-single">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["About Us", "/"],
          ["Career Single", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
