import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  // Save cart in localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product._id);

    if (existingProduct) {
      return;
    }

    setCart([
      ...cart,

      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ?
          {
            ...item,
            quantity: item.quantity + 1,
          }
        : item,
      ),
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1 ?
          {
            ...item,
            quantity: item.quantity - 1,
          }
        : item,
      ),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,

        setCart,

        addToCart,

        increaseQuantity,

        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
