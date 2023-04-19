import { useState } from "react";
import styles from "./SignUp.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "/firebase";
import { SaveUserInfo } from "@/components/SaveUserInfo";
import { GoogleLogin } from "@react-oauth/google";

export function SignUp() {
  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, formState.email, formState.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("New User:", user.email);
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
      });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formState.surname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <GoogleLogin
          onSuccess={responseMessage}
          onError={errorMessage}
          text={{
            signInWithGoogle: 'Sign in with Google',
            signingIn: 'Signing in...',
            signOut: 'Sign out',
            signOutWithGoogle: 'Sign out with Google',
            failed: 'Sorry, authentication with Google failed',
            needToConfigure: 'Sorry, you need to configure authentication with Google'
          }}
          render={(props) => (
            <button onClick={props.onClick} disabled={props.disabled}>
              Sign in with Google
            </button>
          )}
        />
      </div>
    </>
  );
}

export default SignUp;
