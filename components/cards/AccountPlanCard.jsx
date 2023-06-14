import Link from "next/link";

const AccountPlanCard = ({ account }) => {
  const { could_earn, type, fee, interest, regular_deposits, access } = account;
  return (
    <div className="single-plan text-center">
      <div className="introd-area">
        <div className="content">
          <p className="mdr">You could earn:</p>
          <h4>
            <span className="number">{could_earn}</span>
            <span className="right">
              <span>%</span>
              <span className="mdr">p.a</span>
            </span>
          </h4>
        </div>
      </div>
      <div className="head-area">
        <h5>{type}</h5>
      </div>
      <div className="plan-list">
        <div className="single">
          <h6>Fees</h6>
          <p>${fee} Account keeping fees</p>
        </div>
        <div className="single">
          <h6>Interest</h6>
          <p>{interest}</p>
        </div>
        <div className="single">
          <h6>Regular Deposits</h6>
          <p>{regular_deposits}</p>
        </div>
        <div className="single">
          <h6>Access Your Funds</h6>
          <p>{access}</p>
        </div>
      </div>
      <div className="btn-area">
        <Link href="/register" className="cmn-btn">
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default AccountPlanCard;
