import { signIn } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from '@/styles/login/socialSignInButton.module.css';

const SocialSignInButton = ({ provider, children }) => {
  const handleSignIn = () => {
    signIn(provider);
  };

  return (
    <button onClick={handleSignIn} className={`btn mt-3 w-100 ${styles.button}`}>
      <FontAwesomeIcon icon={provider === 'google' ? faGoogle : faGithub} className={styles.svg}/>
      {children}
    </button>
  );
};

export default SocialSignInButton;