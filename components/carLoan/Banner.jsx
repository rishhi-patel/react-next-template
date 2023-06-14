import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="Car Loans" cls="car-loans">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Product", "/"],
          ["Loan", "/"],
          ["Car Loans", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
