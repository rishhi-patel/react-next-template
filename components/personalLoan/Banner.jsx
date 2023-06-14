import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="Personal Loan" cls="personal-loan">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Product", "/"],
          ["Loan", "/"],
          ["Personal Loans", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
