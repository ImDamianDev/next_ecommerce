import styles from "@/styles/home/ProductInfo.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCake } from "@fortawesome/free-solid-svg-icons";

const ProductInfo = () => {
  return (
    <section className={`container-fluid row ${styles.productInfo}`}>
      <div className={`col-12 col-md-7 ${styles.item}`}>
        <h2 className="mb-3">Elige cómo pagar</h2>
        <hr className="w-50 w-md-25 mb-4" />
        <p>
          Con Mercado Pago, paga con tus tarjetas de débito y crédito o hazlo
          con efectivo en puntos de pago. Paga siempre desde Mercado Libre para
          que podamos asegurar tu dinero.
        </p>
      </div>

      <div className={`col-12 col-md-5 ${styles.item}`}>
        <FontAwesomeIcon icon={faCake} className={styles.productInfoIcon} />
      </div>
    </section>
  );
};

export default ProductInfo;
