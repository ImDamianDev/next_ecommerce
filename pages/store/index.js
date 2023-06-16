// Importación de componentes
import ProductList from "@/components/store/ProductList";
import SectionTitle from "@/components/SectionTitle";

// Importación de estilos
import styles from "@/styles/Store.module.css";

// Importación de función de obtención de datos
import { fetchData } from "@/utils/fetchData";

const StorePage = ({ products }) => {
  return (
    <section className="container py-5">
      <SectionTitle titleSection="Tienda" />
      <ProductList products={products} />
    </section>
  );
};

export const getServerSideProps = async (context) => {
  // Obtener los productos utilizando la función fetchData
  const products = await fetchData();

  return {
    props: {
      products,
    },
  };
};

export default StorePage;
