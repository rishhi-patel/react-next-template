import ShortNavbar from "../components/common/ShortNavbar";
import VarifyNumberForm from "../components/varifyNumber/VarifyNumberForm";

export default function VarifyNumber() {
  return (
    <>
      <ShortNavbar />
      <VarifyNumberForm />
    </>
  );
}

VarifyNumber.getLayout = function getLayout(page) {
  return <>{page}</>;
};
