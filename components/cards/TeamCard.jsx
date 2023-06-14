import Image from "next/image";

const TeamCard = ({ singleTeam }) => {
  const { img, name, designation } = singleTeam;

  return (
    <div className="single-box">
      <div className="icon-box">
        <Image src={img} alt="image" />
      </div>
      <div className="test-area">
        <h5>{name}</h5>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default TeamCard;
