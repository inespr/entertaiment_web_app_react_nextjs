import SignUp from "@/components/SignUp";
import styles from './AuthLayout.module.css'

export default function AuthLayout() {
  return (
    <section className={styles.authLayout}>
      <SignUp />
    </section>
  );
}
