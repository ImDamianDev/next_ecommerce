import styles from '@/styles/store/ProductList.module.css';
import ProductItem from '@/components/store/ProductItem';

const ProductList = ({ products }) => {
  return (
    <div className={`row ${styles.productsWrapper}`}>
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;