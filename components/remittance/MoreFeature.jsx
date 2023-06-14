import Image from "next/image";
import more_features_1 from "/public/images/icon/more-features-1.png";
import more_features_2 from "/public/images/icon/more-features-2.png";
import more_features_3 from "/public/images/icon/more-features-3.png";
import more_features_4 from "/public/images/icon/more-features-4.png";

const MoreFeature = () => {
  return (
    <section className="more-feature remittance">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="section-header text-center">
                <h5 className="sub-title">Payments without borders</h5>
                <h2 className="title">Freedom to Received Money Anywhere.</h2>
                <p>
                  Get the best rates when sending money abroad right in the app.
                </p>
              </div>
            </div>
          </div>
          <div className="row cus-mar">
            <div className="col-md-6">
              <div className="content-area d-flex align-items-start">
                <div className="img-area">
                  <Image src={more_features_1} alt="image" />
                </div>
                <div className="text-area">
                  <h5>Always at Your Fingertips</h5>
                  <p>
                    Things come up. Money needs to be sent in a pinch. With the
                    Bankio app’s remittance feature, sending money back home
                    only takes a few taps.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-area d-flex align-items-start">
                <div className="img-area">
                  <Image src={more_features_2} alt="image" />
                </div>
                <div className="text-area">
                  <h5>Get the exchange rate right time</h5>
                  <p>
                    The cost of sending money abroad is constantly shifting. But
                    with the Bankio app, you’ll always know the exchange rate
                    and exactly how much remittance costs you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-area d-flex align-items-start">
                <div className="img-area">
                  <Image src={more_features_3} alt="image" />
                </div>
                <div className="text-area">
                  <h5>No additional fees. Ever</h5>
                  <p>
                    Exchange rates already make remitting money back home more
                    expensive. Stilt will never charge you anything extra to
                    send money to your family. Ever.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-area d-flex align-items-start">
                <div className="img-area">
                  <Image src={more_features_4} alt="image" />
                </div>
                <div className="text-area">
                  <h5>Send with speed</h5>
                  <p>
                    When you send money abroad with the Bankio app’s remittance
                    feature, your payments arrive instantly. No waiting and no
                    instant transfer-fees. get 24/7 support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreFeature;
