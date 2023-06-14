import Image from "next/image";
import Link from "next/link";
import affiliate_banner_1 from "/public/images/affiliate-banner-1.png";
import affiliate_banner_2 from "/public/images/affiliate-banner-2.png";

const Banner = () => {
  return (
    <section className="banner-section inner-banner affiliate">
      <div className="overlay">
        <div className="banner-content d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-md-10">
                <div className="main-content">
                  <div className="section-text text-center">
                    <h1 className="title">
                      Give <span>Credit</span>, Get <span>Credit!</span>
                    </h1>
                    <p className="xlr">Refer ------ Reward ------ Repeat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-box pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="main-content d-flex align-items-center justify-content-between">
                <div className="left-side">
                  <Image src={affiliate_banner_1} alt="image" />
                </div>
                <div className="mid-side text-center d-flex align-items-center justify-content-center">
                  <div className="content-text">
                    <h3>$25</h3>
                    <p>Per Friend</p>
                  </div>
                </div>
                <div className="left-side">
                  <Image src={affiliate_banner_2} alt="image" />
                </div>
              </div>
              <div className="btn-area text-center">
                <Link href="/register" className="cmn-btn">
                  Refer Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
