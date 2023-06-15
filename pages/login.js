import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import SocialSignInButton from '@/components/login/SocialSignInButton';
import LoginForm from '@/components/login/LoginForm';

import styles from '@/styles/login/login.module.css';

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'authenticated') {
    router.push('/');
    return null;
  }

  return (
    <div className={`${styles.container}`}>
      <h1 className={`${styles.title}`}>Iniciar sesión</h1>
      <div className={styles.content}>
        <div className={`row align-items-center ${styles.row}`}>
          <div className={`col-12 col-sm-6 d-flex flex-column ${styles.column}`}>
            <SocialSignInButton provider="google">
              Iniciar sesión con Google
            </SocialSignInButton>
            <SocialSignInButton provider="github">
              Iniciar sesión con GitHub
            </SocialSignInButton>
          </div>
          <div className={`col-12 col-sm-6 ${styles.column}`}>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
