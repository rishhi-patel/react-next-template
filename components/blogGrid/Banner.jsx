import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner titile="Blog" cls="blog">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Blog", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
