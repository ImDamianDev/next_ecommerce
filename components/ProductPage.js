import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { CartContext } from "@/contexts/CartContext";

const ProductPage = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useContext(CartContext);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${productId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProduct();
  }, [productId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = async () => {
    try {
      await addToCart(productId);
      setAddedToCart(true);
      router.push("/cart");
    } catch (error) {
      console.error("Failed to add product to cart:", error);
    }
  };

  return (
    <div className="container">
      <h1>{product.title}</h1>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <p>Cantidad: {product.quantity}</p>

      {!addedToCart && (
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
      {addedToCart && <p className="text-success">Product added to cart!</p>}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { productId } = context.query;
  return {
    props: {
      productId,
    },
  };
};

export default ProductPage;