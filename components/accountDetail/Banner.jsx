import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="Saving Account" cls="account-details">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Product", "/"],
          ["Account", "/"],
          ["Saving Account", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
