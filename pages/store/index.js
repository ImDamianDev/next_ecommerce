import styles from "@/styles/Store.module.css";
import ProductList from "@/components/store/ProductList";
import SectionTitle from "@/components/SectionTitle";

const StorePage = ({ products }) => {
  return (
    <section className="container py-5">
      <SectionTitle titleSection="Tienda" />
      <ProductList products={products} />
    </section>
  );
};

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

export default StorePage;
