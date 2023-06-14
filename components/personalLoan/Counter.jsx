import LoanCounter from "../common/LoanCounter";

const Counter = () => {
  return (
    <LoanCounter
      title="We believe you are more than a number."
      btnText="Apply for a Personal loan"
      link="/#personal-loan-form"
      loans_given={100}
      customers_served={15000}
      countries={150}
    />
  );
};

export default Counter;
