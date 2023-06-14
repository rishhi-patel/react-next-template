import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Social from "../social/Social";
import search from "/public/images/icon/search.png";
import popular_posts_1 from "/public/images/popular-posts-1.png";
import popular_posts_2 from "/public/images/popular-posts-2.png";
import popular_posts_3 from "/public/images/popular-posts-3.png";

const RightSide = () => {
  return (
    <div className="col-md-4">
      <div className="side-area">
        <div className="side-single">
          <div className="search-area">
            <form action="#">
              <div className="form-group d-flex align-items-center">
                <input type="text" placeholder="Search" required />
                <button type={"submit"}>
                  <Image src={search} alt="icon" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="side-single social">
          <h5>Follow Our Journey</h5>
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
        <div className="side-single">
          <h5>Popular Blog Posts</h5>
          <div className="blog-item">
            <div className="img-area">
              <Image src={popular_posts_1} alt="blog" />
            </div>
            <div className="content">
              <Link href="/blog-single">
                <h6>What everyone gets wrong about taxes</h6>
              </Link>
              <div className="text-area">
                <div className="item d-flex align-items-center">
                  <span>December 19,2021</span>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-item">
            <div className="img-area">
              <Image src={popular_posts_2} alt="blog" />
            </div>
            <div className="content">
              <Link href="/blog-single">
                <h6>Mistakes to Avoid When Applying for a Loan</h6>
              </Link>
              <div className="text-area">
                <div className="item d-flex align-items-center">
                  <span>December 19,2021</span>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-item">
            <div className="img-area">
              <Image src={popular_posts_3} alt="blog" />
            </div>
            <div className="content">
              <Link href="/blog-single">
                <h6>18 Ways to Reduce Your Mortgage Loan</h6>
              </Link>
              <div className="text-area">
                <div className="item d-flex align-items-center">
                  <span>December 19,2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
