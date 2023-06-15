import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/store/CardProduct.module.css";


export const CardProduct = (props) => {
  return (
    <div className={styles.card}>
      {/* Imagen del producto */}
      <div className={styles.cardHead}>
        <Image
          src={props.sprite}
          alt={props.title}
          fill={true}
          className={styles.image}
        />
      </div>

      {/* Contenido del producto */}
      <div className={styles.cardBody}>
        {/* Título del producto */}
        <h5 className={styles.title}>{props.title}</h5>

        {/* Precio del producto */}
        <p className={styles.price}>$ {props.price}</p>

        {/* Enlace para ver el producto */}
        <Link href={`/store/product/${props.id}`}>
          <button className={styles.btn}>Ver producto</button>
        </Link>
      </div>
    </div>
  );
};
