import ProductPage from "components/ProductPage";

const ProductDetailsPage = ({ productId }) => {
  return <ProductPage productId={productId} />;
};

export const getServerSideProps = async (context) => {
  const { productId } = context.query;
  return {
    props: {
      productId,
    },
  };
};

export default ProductDetailsPage;
