import Link from "next/link";

const CareerCard = ({ career }) => {
  const { position, title, desc, link } = career;
  return (
    <div className="single-item">
      <p className="mdr">{position}</p>
      <h5>{title}</h5>
      <p>{desc}</p>
      <Link href={link} className="cmn-btn">
        Apply Now
      </Link>
    </div>
  );
};

export default CareerCard;
