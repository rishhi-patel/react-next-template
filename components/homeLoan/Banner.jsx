import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="Home Loan" cls="home-loan">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Produc", "/"],
          ["Loan", "/"],
          ["Home Loans", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
