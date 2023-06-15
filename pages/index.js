import ProductList from "@/components/store/ProductList";
import SectionTitle from "@/components/SectionTitle";
import HeroSection from "@/components/home/Hero";
import Banner from "@/components/home/Banner";
import WellcomeMessage from "@/components/WellcomeMessage";
import SiteShoppingInfo from "@/components/home/SiteShoppingInfo";

import styles from "@/styles/home/Home.module.css";
import ProductInfo from "@/components/home/ProductInfo";

export default function Home({ products }) {
  return (
    <>
      <main className={styles.main}>
        <WellcomeMessage />
        {/* Sección principal */}
        <HeroSection />

        {/* Banner */}
        <Banner />

        <section className="container py-5">
          <SectionTitle titleSection="Destacados" />
          <ProductList products={products} />
        </section>

        <ProductInfo />

        <SiteShoppingInfo />
      </main>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};
