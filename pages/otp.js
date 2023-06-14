import ShortNavbar from "../components/common/ShortNavbar";
import OtpForm from "../components/otp/OtpForm";

export default function Otp() {
  return (
    <>
      <ShortNavbar />
      <OtpForm />
    </>
  );
}

Otp.getLayout = function getLayout(page) {
  return <>{page}</>;
};
