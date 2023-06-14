import { affiliates } from "./faqsData";

const Affiliates = () => {
  return (
    <>
      <h4>Affiliates</h4>
      <div className="row d-flex justify-content-center">
        <div className="col-xl-8">
          <div className="faq-box">
            <div className="accordion" id="accordionAffiliates">
              {affiliates.map((account, i) => (
                <div key={account.id} className="accordion-item">
                  <h5 className="accordion-header" id={`affiliates${i}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse_affiliates${i}`}
                      aria-expanded="false"
                      aria-controls={`collapse_affiliates${i}`}
                    >
                      {account.question}
                    </button>
                  </h5>
                  <div
                    id={`collapse_affiliates${i}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`affiliates${i}`}
                    data-bs-parent="#accordionAffiliates"
                  >
                    <div className="accordion-body">
                      <p>{account.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Affiliates;
