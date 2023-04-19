import AuthLayout from "@/layouts/AuthLayout";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function SignUp() {
  return (
    <div>
      <GoogleOAuthProvider clientId="545527913001-qqrvp8anlokq45nolp1hnfirf3gq140e.apps.googleusercontent.com">
        <AuthLayout />
      </GoogleOAuthProvider>
    </div>
  );
}
