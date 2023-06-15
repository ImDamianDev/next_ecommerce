import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [userCart, setUserCart] = useState(null);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setUserCart(session.user.id); // Asignar el userId de la sesión a userCart
    }
  }, [session]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (userCart) {
          const response = await axios.get(`/api/cart?userId=${userCart}`);
          const cartData = response.data;
          setCartItems(cartData.products);
        }
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      }
    };

    fetchCartItems();
  }, [userCart]);

  const addToCart = async (productId) => {
    try {
      if (!userCart) {
        // Manejar la situación en la que el usuario no ha iniciado sesión
        console.error("User cart is not available");
        return;
      }

      const existingProduct = cartItems.find(
        (item) => item.product.id === productId
      );
      console.log(existingProduct);

      if (existingProduct) {
        // Manejar el caso en el que el producto ya está en el carrito
        console.log("Product already exists in the cart");
        return;
      }

      await axios.post("/api/cart", {
        userId: userCart,
        productId: productId,
      });

      const response = await axios.get(`/api/cart?userId=${userCart}`);
      const cartData = response.data;
      setCartItems(cartData.products);
    } catch (error) {
      console.error("Failed to add product to cart:", error);
    }
  };

  const removeFromCart = async (productId) => {
    console.log(userCart, productId);
    try {
      if (userCart) {
        await axios.delete(`/api/cart`, {
          params: {
            userId: userCart,
            productId: productId,
          },
        });
        const response = await axios.get(`/api/cart?userId=${userCart}`);
        const cartData = response.data;
        setCartItems(cartData.products);
      }
    } catch (error) {
      console.error("Failed to remove product from cart:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        userCart,
        setUserCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
