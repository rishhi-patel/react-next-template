import Image from "next/image";
import Link from "next/link";

const CreditAndDebitCard = ({ img1, img2, link, headingText }) => {
  return (
    <div className="col-md-6">
      <div className="single-box text-center">
        <div className="thumb">
          <Image src={img1} alt="icon" className="active" />
          <Image src={img2} alt="icon" className="alt" />
        </div>
        <Link href={link}>
          <h5>{headingText}</h5>
        </Link>
      </div>
    </div>
  );
};

export default CreditAndDebitCard;
