import ShortNavbar from "../components/common/ShortNavbar";
import LoginForm from "../components/login/LoginForm";

export default function Login() {
  return (
    <>
      <ShortNavbar />
      <LoginForm />
    </>
  );
}

Login.getLayout = function getLayout(page) {
  return <>{page}</>;
};
