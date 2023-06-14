import { securitys } from "./faqsData";

const Security = () => {
  return (
    <>
      <h4>Security</h4>
      <div className="row d-flex justify-content-center">
        <div className="col-xl-8">
          <div className="faq-box">
            <div className="accordion" id="accordionSecurity">
              {securitys.map((account, i) => (
                <div key={account.id} className="accordion-item">
                  <h5 className="accordion-header" id={`security${i}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse_security${i}`}
                      aria-expanded="false"
                      aria-controls={`collapse_security${i}`}
                    >
                      {account.question}
                    </button>
                  </h5>
                  <div
                    id={`collapse_security${i}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`security${i}`}
                    data-bs-parent="#accordionSecurity"
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

export default Security;
