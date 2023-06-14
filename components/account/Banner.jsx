import Link from "next/link";
import BigBanner from "../common/BigBanner";

const Banner = () => {
  return (
    <BigBanner cls="account">
      <div className="main-content banner-mar">
        <div className="section-text">
          <h5 className="sub-title">
            The right financial help, at the right time
          </h5>
          <h2 className="title">An Account You Can Truly Bank Upon</h2>
          <p>
            Change the way you manage your money.We have a fine range of
            accounts to help you manage your finances seamlessly
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
