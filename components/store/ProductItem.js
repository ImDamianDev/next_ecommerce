import styles from '@/styles/store/ProductItem.module.css';
import { CardProduct } from '@/components/store/CardProduct';

const ProductItem = ({ product }) => {
  return (
    <div className={`col-6 col-sm-4 col-lg-3 ${styles.productItem}`}>
      <CardProduct
        id={product._id}
        title={product.title}
        price={product.price}
        sprite={product.img}
      />
    </div>
  );
};

export default ProductItem;