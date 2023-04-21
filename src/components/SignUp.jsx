import { useState } from "react";
import styles from "./SignUp.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import SignUpWithGoogleButton from "./SignUpWithGoogleButton";
import Image from "next/image";

export function SignUp() {
  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  function handleSubmit(event) {
    const password = registerForm["password"].value;
    const confirmPassword = registerForm["confirm-password"].value;

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      return;
    }

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

  return (
    <div className={styles.container}>
      <div className={styles.signupWrapper}>
        <Image src="/icons/logo.svg" alt="logo" width={40} height={30} />
        <div className={styles.sigup}>
          <span className={styles.title}>Sign Up</span>
          <form onSubmit={handleSubmit} className={styles.form}>
            <SignUpWithGoogleButton />
            <div className={styles.continuewithWrapper}><span className={styles.continuewith}>Or continue with</span></div>
            <div className={styles.inputWrapper}>
              <div >
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formState.surname}
                  onChange={handleChange}
                  placeholder="Surname"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  value={formState.password}
                  onChange={handleChange}
                  placeholder="Repeat password"
                  required
                />
              </div>
            </div>
            <div className={styles.buttonAppSection}>
              <button className={styles.buttonApp}>
                <span className={styles.buttonText}>Create an account</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
