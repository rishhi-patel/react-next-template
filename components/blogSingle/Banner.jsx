import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner cls="blog" titile="Blog Single">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Blog", "/"],
          ["Blog Single", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;
