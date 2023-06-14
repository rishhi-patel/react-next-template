import { accounts } from "./faqsData";

const Account = () => {
  return (
    <>
      <h4>Account</h4>
      <div className="row d-flex justify-content-center">
        <div className="col-xl-8">
          <div className="faq-box">
            <div className="accordion" id="accordionAccount">
              {accounts.map((account, i) => (
                <div key={account.id} className="accordion-item">
                  <h5 className="accordion-header" id={`account${i}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse_account${i}`}
                      aria-expanded="false"
                      aria-controls={`collapse_account${i}`}
                    >
                      {account.question}
                    </button>
                  </h5>
                  <div
                    id={`collapse_account${i}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`account${i}`}
                    data-bs-parent="#accordionAccount"
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

export default Account;
