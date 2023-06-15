import React, { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import Link from "next/link";
import LoginBtn from "./login-btn";
import styles from "@/styles/navbar/Navbar.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className={`navbar navbar-expand-md ${styles.navbar}`}>
      <div className={`container ${styles.container}`}>
        {/* Botón de hamburguesa para dispositivos móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Logo */}
        <Link href="/" className={`navbar-brand me-auto ms-2 ms-md-auto ${styles.navbarBrand}`}>
          Elimuisa
        </Link>

        {/* Carrito */}
        <div className={`${styles.cartButton}`}>
          <Link href="/cart">
            <button className={styles.cartButton}>
              <FontAwesomeIcon icon={faCartShopping} className={styles.cartIcon}/>
              ({cartItems.length})
            </button>
          </Link>
        </div>

        {/* Menú de navegación */}
        <div className={`collapse navbar-collapse px-3 ${styles.menuWrapper}`} id="navbarSupportedContent">
          <ul className={`navbar-nav me-auto ${styles.navbarNav}`}>
            <li className={`nav-item ${styles.navItem}`}>
              <Link href="/" className={styles.navLink}>
                Inicio
              </Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link href="/store" className={styles.navLink}>
                Tienda
              </Link>
            </li>
            <li className={`nav-item ${styles.navItem}`}>
              <Link href="/contact" className={styles.navLink}>
                Contacto
              </Link>
            </li>
          </ul>
          {/* Botón de inicio de sesión */}
          <LoginBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
