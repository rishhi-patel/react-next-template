import ShortNavbar from "../components/common/ShortNavbar";
import PasswordSetForm from "../components/passwordSet/PasswordSetForm";

export default function PasswordSet() {
  return (
    <>
      <ShortNavbar />
      <PasswordSetForm />
    </>
  );
}

PasswordSet.getLayout = function getLayout(page) {
  return <>{page}</>;
};
