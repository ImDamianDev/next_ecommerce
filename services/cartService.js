import Cart from "models/cartModel";

const getUserCart = async (userId) => {
  try {
    const cart = await Cart.findOne({ userId });
    return cart;
  } catch (error) {
    throw new Error("Failed to get user cart");
  }
};

const addToCart = async (userId, productId) => {
  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, products: [] });
    }

    const existingProductIndex = cart.products.findIndex(
      (product) => product.productId === productId
    );

    if (existingProductIndex !== -1) {
      cart.products[existingProductIndex].quantity += 1;
    } else {
      cart.products.push({ productId, quantity: 1 });
    }

    await cart.save();
  } catch (error) {
    throw new Error("Failed to add product to cart");
  }
};

const removeFromCart = async (userId, productId) => {
  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      throw new Error("User cart not found");
    }

    cart.products = cart.products.filter(
      (product) => product.productId !== productId
    );

    await cart.save();
  } catch (error) {
    throw new Error("Failed to remove product from cart");
  }
};

const updateCart = async (userId, updatedCart) => {
  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      throw new Error("User cart not found");
    }

    cart.products = updatedCart;
    await cart.save();
  } catch (error) {
    throw new Error("Failed to update cart");
  }
};

export { getUserCart, addToCart, removeFromCart, updateCart };
