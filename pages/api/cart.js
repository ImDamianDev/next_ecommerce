import { getUserCart, addToCart, removeFromCart } from "services/cartService";
import { getProductById } from "services/productService";

export default async function handler(req, res) {
  const { method, body, query } = req;
  const { userId, productId } = body;

  switch (method) {
    case "GET":
      await getCartItems(req, res, query);
      break;
    case "POST":
      await addProductToCart(req, res, body);
      break;
    case "DELETE":
      await removeProductFromCart(req, res, body);
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}

const getCartItems = async (req, res, query) => {
  const { userId } = query;

  try {
    const cart = await getUserCart(userId);

    if (!cart || cart.products.length === 0) {
      return res.status(200).json({ message: "Cart is empty", products: [] });
    }

    const productIds = cart.products.map((product) => product.productId);

    const products = await Promise.all(
      productIds.map(async (productId) => {
        const product = await getProductById(productId);
        const cartItem = cart.products.find(
          (item) => item.productId === productId
        );
        const quantity = cartItem ? cartItem.quantity : 0;
        return { product, quantity };
      })
    );

    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "Failed to get cart items" });
  }
};

const addProductToCart = async (req, res, body) => {
  const { userId, productId } = body;

  try {
    await addToCart(userId, productId);
    res.status(200).json({ message: "Product added to cart" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add product to cart" });
  }
};

const removeProductFromCart = async (req, res) => {
  const { userId, productId } = req.query;
  console.log(userId, productId)
  try {
    await removeFromCart(userId, productId);
    res.status(200).json({ message: "Product removed from cart" });
  } catch (error) {
    res.status(500).json({ message: "Failed to remove product from cart" });
  }
};

