import Link from "next/link";
import BigBanner from "../common/BigBanner";

const Banner = () => {
  return (
    <BigBanner cls="product">
      <div className="main-content">
        <div className="section-text">
          <h5 className="sub-title">Build the future You See for Yourself</h5>
          <h2 className="title">Enjoy The Freedom To Dream Big</h2>
          <p>
            Fulfil your dreams with our loan products.Money shouldn’t just work
            for some of us. It should work for all of us.
          </p>
        </div>
        <Link href="/register" className="cmn-btn">
          Apply Now
        </Link>
      </div>
    </BigBanner>
  );
};

export default Banner;
