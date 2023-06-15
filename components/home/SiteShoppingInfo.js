import styles from "@/styles/home/SiteShoppingInfo.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCreditCard, faShield } from '@fortawesome/free-solid-svg-icons';

const SiteShoppingInfo = () => {
  return (
    <section className="container py-5 my-5">
          <div className="row">

            <div className={`col-12 col-md-4 ${styles.item}`}>
              <FontAwesomeIcon icon={faCreditCard} className={styles.siteShoppingIcon}/>
              <h2>Elige cómo pagar</h2>
              <p>
                Con Mercado Pago, paga con tus tarjetas de débito y crédito o
                hazlo con efectivo en puntos de pago. Paga siempre desde Mercado
                Libre para que podamos asegurar tu dinero.
              </p>
            </div>

            <div className={`col-12 col-md-4 ${styles.item}`}>
              <FontAwesomeIcon icon={faBox} className={styles.siteShoppingIcon}/>
              <h2>Elige cómo pagar</h2>
              <p>
                Con Mercado Pago, paga con tus tarjetas de débito y crédito o
                hazlo con efectivo en puntos de pago. Paga siempre desde Mercado
                Libre para que podamos asegurar tu dinero.
              </p>
            </div>

            <div className={`col-12 col-md-4 ${styles.item}`}>
              <FontAwesomeIcon icon={faShield} className={styles.siteShoppingIcon}/>
              <h2>Elige cómo pagar</h2>
              <p>
                Con Mercado Pago, paga con tus tarjetas de débito y crédito o
                hazlo con efectivo en puntos de pago. Paga siempre desde Mercado
                Libre para que podamos asegurar tu dinero.
              </p>
            </div>

          </div>
        </section>
  );
};

export default SiteShoppingInfo;
