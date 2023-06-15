import { useSession, signIn, signOut } from "next-auth/react";
import styles from "@/styles/navbar/authNavbar.module.css";
import Link from "next/link";

export default function Component() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <div className={`auth-navbar ${styles.authNavbar}`}>
      <ul className={`navbar-nav ${styles.authNavbarList}`}>
        <li className={`nav-item ${styles.navItem}`}>
          <Link href="/register" className={styles.navLink}>
            Crea tu cuenta
          </Link>
        </li>
        <li className={`nav-item ${styles.navItem}`}>
          <Link href="/login" className={styles.navLink}>
            Ingresa
          </Link>
        </li>
      </ul>
    </div>
  );
}
