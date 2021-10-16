import LoginWithFacebook from "./FacebookLogin";
import LoginWithGoogle from "./GoogleLogin";
export default function SocialMedia() {
  return (
    <div className="mt-3 flex space-x-5 justify-center">
      <LoginWithFacebook />
      <LoginWithGoogle />
    </div>
  );
}
