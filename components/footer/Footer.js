import styles from "@/styles/footer/footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// components/Footer.js
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FontAwesomeIcon icon={faFacebook} className={styles.socialIcon}/>
      <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon}/>
      <FontAwesomeIcon icon={faWhatsapp} className={styles.socialIcon}/>
      <hr className={styles.hr}/>
      <p className={styles.copyR}> Elimuisa - 2023 | &copy; Todos los Derechos Reservados | Desarrollado por <a href="https://imdamian-dev.netlify.app/">ImDamianDev</a></p>
    </footer>
  );
};

export default Footer;
