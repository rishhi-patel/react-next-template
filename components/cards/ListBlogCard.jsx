import Image from "next/image";
import Link from "next/link";
import arrow_right from "/public/images/icon/arrow-right.png";

const ListBlogCard = ({ singleBlog }) => {
  const { title, date, desc, type, img } = singleBlog;
  return (
    <div className="blog-item list">
      <div className="thumb">
        <Image src={img} alt="blog" />
      </div>
      <div className="content">
        <Link href="/blog-single">
          <h5>{title}</h5>
        </Link>
        <div className="info">
          <div className="item cus-bor d-flex align-items-center">
            <span>{type}</span>
          </div>
          <div className="item d-flex align-items-center">
            <span>{date}</span>
          </div>
        </div>
        <p>{desc}</p>
        <div className="read">
          <Link href="/blog-single" className="btn-arrow">
            Learn More
            <Image src={arrow_right} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListBlogCard;
