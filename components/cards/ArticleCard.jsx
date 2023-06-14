import Image from "next/image";
import Link from "next/link";
import arrow_right from "/public/images/icon/arrow-right.png";
import calendar from "/public/images/icon/calendar.png";
import user from "/public/images/icon/user.png";

const ArticleCard = ({ singleArticle }) => {
  const { title, desc, image, author, date, details_link } = singleArticle;
  return (
    <div className="blog-item">
      <div className="thumb">
        <Image src={image} alt="blog" />
      </div>
      <div className="content">
        <Link href="/blog-single">
          <h5>{title}</h5>
        </Link>
        <div className="info">
          <div className="item cus-bor d-flex align-items-center">
            <span className="icon d-flex align-items-center justify-content-center ">
              <Image src={user} alt="icon" />
            </span>
            <span>Post By {author}</span>
          </div>
          <div className="item d-flex align-items-center">
            <span className="icon d-flex align-items-center justify-content-center">
              <Image src={calendar} alt="icon" />
            </span>
            <span>{date}</span>
          </div>
        </div>
        <p>{desc}</p>
        <div className="read">
          <Link href={details_link} className="btn-arrow">
            Read more
            <Image src={arrow_right} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
