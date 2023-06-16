// Importación de componentes
import ProductList from "@/components/store/ProductList";
import SectionTitle from "@/components/SectionTitle";
import HeroSection from "@/components/home/Hero";
import Banner from "@/components/home/Banner";
import WellcomeMessage from "@/components/WellcomeMessage";
import SiteShoppingInfo from "@/components/home/SiteShoppingInfo";
import ProductInfo from "@/components/home/ProductInfo";

// Importación de estilos
import styles from "@/styles/home/Home.module.css";

// Importación de función de obtención de datos
import { fetchData } from "@/utils/fetchData";

export default function Home({ products }) {
  return (
    <>
      <main className={styles.main}>
        {/* Sección de bienvenida */}
        <WellcomeMessage />

        {/* Sección principal */}
        <HeroSection />

        {/* Banner */}
        <Banner />

        {/* Sección de productos destacados */}
        <section className="container py-5">
          <SectionTitle titleSection="Destacados" />
          <ProductList products={products} />
        </section>

        {/* Otras secciones */}
        <ProductInfo />

        <SiteShoppingInfo />
      </main>
    </>
  );
}

export const getServerSideProps = async (context) => {
  // Obtener los productos utilizando la función fetchData
  const products = await fetchData();

  return {
    props: {
      products,
    },
  };
};
