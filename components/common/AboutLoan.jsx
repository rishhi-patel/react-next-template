import Image from "next/image";
import Link from "next/link";

const AboutLoan = ({ img, children, btnText, link }) => {
  return (
    <section className="features-section about-business-loan about-educations-loan">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-6">
              <div className="top-section">
                {/* section text  */}
                {children}
                <div className="btn-area">
                  <Link href={link} className="cmn-btn">
                    {btnText}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <div className="img-area">
                <Image src={img} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLoan;
