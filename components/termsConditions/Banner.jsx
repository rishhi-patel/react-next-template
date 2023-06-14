import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="Terms Conditions" cls="terms">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Pages", "/"],
          ["Terms Conditions", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
