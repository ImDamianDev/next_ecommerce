import styles from "@/styles/home/Hero.module.css";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h1>Bienvenido</h1>

      <p>Compra productos de calidad al mejor precio</p>

      {/* Botón para ir a la tienda */}
      <Link href="/store">
        <button>Ir a la tienda</button>
      </Link>
    </section>
  );
};

export default HeroSection;
