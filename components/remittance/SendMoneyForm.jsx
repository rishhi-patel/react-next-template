import Image from "next/image";
import austria from "/public/images/austria.png";
import united_states from "/public/images/united-states.png";

const SendMoneyForm = () => {
  return (
    <form action="#">
      <div className="row">
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="send">You send</label>
            <div className="single d-flex align-items-center">
              <input type="text" id="send" placeholder="1000" />
              <div className="d-flex align-items-center select">
                <Image src={united_states} alt="image" />
                <select>
                  <option value="1">USD</option>
                  <option value="2">EUR</option>
                  <option value="3">INR</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="gets">Recipient Gets</label>
            <div className="single d-flex align-items-center">
              <input type="text" id="gets" placeholder="73,605.00" />
              <div className="d-flex align-items-center select">
                <Image src={austria} alt="image" />
                <select>
                  <option value="1">EUR</option>
                  <option value="2">UDS</option>
                  <option value="3">INR</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-bottom row align-items-center justify-content-between">
        <div className="col-xl-6 col-md-4">
          <p>Exchange Rate</p>
        </div>
        <div className="col-xl-6 col-md-8 d-sm-flex align-items-center justify-content-md-end justify-content-start">
          <p className="currency">
            <span>73.61</span> USD to EUR
          </p>
          <div className="btn-area text-center">
            <button className="cmn-btn">Transfer Funds</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SendMoneyForm;
