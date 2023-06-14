import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Social from "../social/Social";
import map_icon from "/public/images/icon/map-icon.png";
import time_icon from "/public/images/icon/time-icon.png";

const About = () => {
  return (
    <section className="career-single">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-area mb-60">
                <div className="content">
                  <h2>Office Manager</h2>
                  <div className="sub-heading d-flex align-items-center">
                    <div className="single-sub d-flex align-items-center cus-bor">
                      <div className="icon-area">
                        <Image src={time_icon} alt="icon" />
                      </div>
                      <span>Full time</span>
                    </div>
                    <div className="single-sub d-flex align-items-center">
                      <div className="icon-area">
                        <Image src={map_icon} alt="icon" />
                      </div>
                      <span>New York, USA</span>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    morbi nibh et, ullamcorper ultricies. Vitae platea arcu
                    nulla eu pharetra in.
                  </p>
                </div>
              </div>
              <div className="single-area mb-60">
                <h3>Job Overview</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lobortis tortor lectus risus lorem eu. Blandit pulvinar purus
                  et{" "}
                  <Link href="/#">nunc odio turpis ac euismod volutpat.</Link>{" "}
                  Metus vitae justo iaculis enim aenean scelerisque. Quis purus
                  congue vel tellus donec at. Sed tellus non consectetur massa,
                  velit.
                </p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Bibendum enim facilisis gravida neque convallis a cras
                    semper.
                  </li>
                  <li>
                    Tincidunt nunc pulvinar sapien et. Donec ac odio tempor orci
                    dapibus
                  </li>
                  <li>
                    Purus semper eget duis at. Condimentum lacinia quis vel
                    eros.tempor.
                  </li>
                </ul>
              </div>
              <div className="single-area mb-60">
                <h4>How to apply to this position?</h4>
                <p>
                  <Link href="/#">Lorem ipsum dolor sit amet,</Link> consectetur
                  adipiscing elit. Magna urna viverra at in. Eleifend bibendum
                  enim faucibus in id et convallis sed. Et praesent id
                  consectetur dolor aliquam lectus viverra. Dignissim quis
                  tristique.
                </p>
              </div>
              <div className="single-area mb-60">
                <h3>Responsibilities</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lobortis tortor lectus risus lorem eu. Blandit pulvinar purus
                  et{" "}
                  <Link href="/#">nunc odio turpis ac euismod volutpat.</Link>{" "}
                  Metus vitae justo iaculis enim aenean scelerisque. Quis purus
                  congue vel tellus donec at. Sed tellus non consectetur massa,
                  velit.
                </p>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Bibendum enim facilisis gravida neque convallis a cras
                    semper.
                  </li>
                  <li>
                    Tincidunt nunc pulvinar sapien et. Donec ac odio tempor orci
                    dapibus
                  </li>
                  <li>
                    Purus semper eget duis at. Condimentum lacinia quis vel
                    eros.tempor.
                  </li>
                </ul>
              </div>
              <div className="single-area">
                <h3>Job Requirements</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lobortis tortor lectus risus lorem eu. Blandit pulvinar purus
                  et{" "}
                  <Link href="/#">nunc odio turpis ac euismod volutpat.</Link>{" "}
                  Metus vitae justo iaculis enim aenean scelerisque. Quis purus
                  congue vel tellus donec at. Sed tellus non consectetur massa,
                  velit.
                </p>
                <ul className="mb-60">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Bibendum enim facilisis gravida neque convallis a cras
                    semper.
                  </li>
                  <li>
                    Tincidunt nunc pulvinar sapien et. Donec ac odio tempor orci
                    dapibus
                  </li>
                  <li>
                    Purus semper eget duis at. Condimentum lacinia quis vel
                    eros.tempor.
                  </li>
                </ul>
                <Link href="/register" className="cmn-btn">
                  Apply for this job
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-item">
                <h4>Apply to this position</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing eliterloe.
                  Donec est sit ut justo. Non pharetra sem vitae odio lorem ipi
                </p>
                <Link href="/register" className="cmn-btn">
                  Apply for this job
                </Link>
              </div>
              <div className="d-flex align-items-center">
                <span>Share</span>
                <div className="social-link d-flex align-items-center">
                  {/* Socila Links here */}
                  <Social
                    items={[
                      [FaFacebookF, "/"],
                      [FaTwitter, "/"],
                      [FaLinkedinIn, "/"],
                      [FaInstagram, "/"],
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
