import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="Educations Loan" cls="educations-loan">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Product", "/"],
          ["Loan", "/"],
          ["Educations Loans", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
