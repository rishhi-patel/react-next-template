import Image from "next/image";
import Link from "next/link";
import get_start from "/public/images/get-start.png";

const Ready = () => {
  return (
    <section className="get-start wow fadeInUp">
      <div className="overlay">
        <div className="container">
          <div className="col-12">
            <div className="get-content">
              <div className="section-text">
                <h3 className="title">Ready to get started?</h3>
                <p>
                  It only takes a few minutes to register your FREE Bankio
                  account.
                </p>
              </div>
              <Link href="/register" className="cmn-btn">
                Open an Account
              </Link>
              <Image src={get_start} alt="get start" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ready;
