import styles from "@/styles/CardProduct.module.css";
import Image from "next/image";
import Link from "next/link";

export const CardProduct = (props) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <Image
            src={props.sprite}
            alt={props.title}
            width={250}
            height={250}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="text-end text-success m-0">$ {props.price}</p>
          <Link src={`/product/${props.title}`}>
          <button>
            ver producto
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};
