import ShortNavbar from "../components/common/ShortNavbar";
import RegisterForm from "../components/Register/RegisterForm";

export default function Register() {
  return (
    <>
      <ShortNavbar />
      <RegisterForm />
    </>
  );
}

Register.getLayout = function getLayout(page) {
  return <>{page}</>;
};
