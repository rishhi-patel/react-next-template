import Link from "next/link";
import BigBanner from "../common/BigBanner";

const Banner = () => {
  return (
    <BigBanner cls="card-banner">
      <div className="main-content banner-mar">
        <div className="section-text">
          <h5 className="sub-title">Add value to your life</h5>
          <h2 className="title">Global Expansion Made Easy</h2>
          <p>
            Accelerate your ambitions with the Bankio Debit and Credit Cards
            that comes with no annual fee, a high credit limit.
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
