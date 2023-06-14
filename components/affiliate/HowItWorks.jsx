import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import card_with_bg from "/public/images/card-with-bg.png";
import how_it_works_ellipse from "/public/images/how-it-works-ellipse.png";
import copy_icon from "/public/images/icon/copy-icon.png";
import how_works_affiliate_1 from "/public/images/icon/how-works-affiliate-1.png";
import how_works_affiliate_2 from "/public/images/icon/how-works-affiliate-2.png";
import how_works_affiliate_3 from "/public/images/icon/how-works-affiliate-3.png";
import share_icon from "/public/images/icon/share-icon.png";

const HowItWorks = () => {
  const [copyValue, setCopyValue] = useState({
    value: "bankio.com/get/yU78has7",
    copied: false,
  });
  return (
    <section className="how-it-works">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="section-header text-center">
                <h5 className="sub-title">
                  Refer Bankio credit card and earn $25!
                </h5>
                <h2 className="title">How it Works</h2>
                <p>
                  It&#39;s easier than you think. Follow the following simple
                  easy steps
                </p>
              </div>
            </div>
          </div>
          <div className="abs-item">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="text-area">
                  <div className="img-area">
                    <Image src={how_works_affiliate_1} alt="image" />
                  </div>
                  <h4>Share Your Unique Referral Link With Friends</h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="abs-contant">
                  <Image
                    src={how_it_works_ellipse}
                    className="contant-bg"
                    alt="image"
                  />
                  <div className="contant-area">
                    <p>
                      Share the below link with your friends to earn the
                      rewards!
                    </p>
                    <div className="input-area d-flex align-items-center justify-content-between">
                      <input
                        type="text"
                        disabled
                        value={copyValue.value}
                        data-click-select-all
                      />
                      <CopyToClipboard text={copyValue.value}>
                        <Image
                          src={copy_icon}
                          alt="icon"
                          onCopy={() => setCopyValue({ copied: true })}
                        />
                      </CopyToClipboard>
                    </div>
                    <div className="share-item text-center">
                      <Link href="/affiliate">
                        <Image src={share_icon} alt="icon" />
                        Share Link
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mid-contant pt-120 pb-120">
            <div className="row align-items-center">
              <div className="col-md-6 cus-ord">
                <div className="img-area">
                  <Image src={card_with_bg} alt="image" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="text-area">
                  <div className="img-area">
                    <Image src={how_works_affiliate_2} alt="image" />
                  </div>
                  <h4>
                    Your friends have to sign up and activate their Bankio
                    Credit Card
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="abs-item">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="text-area">
                  <div className="img-area">
                    <Image src={how_works_affiliate_3} alt="image" />
                  </div>
                  <h4>
                    Both you and your friend get $25 credited to your Bankio
                    credit card balance!
                  </h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="abs-contant">
                  <Image
                    src={how_it_works_ellipse}
                    className="contant-bg"
                    alt="image"
                  />
                  <div className="contant-area congratulation text-center">
                    <h4>Congratulation</h4>
                    <h6>You’ve Earned</h6>
                    <h3>$25</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
