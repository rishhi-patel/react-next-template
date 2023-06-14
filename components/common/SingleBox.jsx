import Image from "next/image";

const SingleBox = ({ title, icon, desc }) => {
  return (
    <div className="single-box">
      <div className="icon-box">
        <Image src={icon} alt="icon" />
      </div>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
};

export default SingleBox;
