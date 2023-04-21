import firebase from "firebase/app";
import { auth } from "/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import styles from './SignUpWithGoogleButton.module.css'
import Image from "next/image";


const provider = new GoogleAuthProvider();

export default function SignUpWithGoogleButton() {
  const [user, loading, error] = useAuthState(auth);

  function signUpWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <div className={styles.gSignInWrapper}>
      <button onClick={signUpWithGoogle} disabled={loading || user} className={styles.customGPlusSignIn}>
        <Image
         src="/icons/icons8-google.svg"
         alt="movies"
         width={18}
         height={18}
         className={styles.icon}
        />
        <span className={styles.buttonText}>{loading ? "Loading..." : user ? "Log In with Google".toUpperCase() : "Sign Up with Google".toUpperCase()}</span>
      </button>
    </div>
  );
}
