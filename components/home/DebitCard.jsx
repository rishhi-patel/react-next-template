import CreditAndDebitCard from "../cards/CreditAndDebitCard";
import { card_data } from "./homeData";

const DebitCard = () => {
  return (
    <div className="row cus-mar">
      {card_data.map((singleCard) => (
        <CreditAndDebitCard
          key={singleCard.id}
          img1={singleCard.img1}
          img2={singleCard.img2}
          link={singleCard.link}
          headingText={singleCard.heading_text}
        />
      ))}
    </div>
  );
};

export default DebitCard;
