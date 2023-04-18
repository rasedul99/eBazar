import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const addToCart = (newItem) => {
    setCartItems((prev) => {
      const itemExists = cartItems.find((item) => item.id == newItem.id);

      if (itemExists) {
        const updatedItem = {
          ...itemExists,
          quantity: itemExists.quantity + newItem.quantity,
        };

        const newArray = prev.map((item) => {
          return item.id == newItem.id ? updatedItem : item;
        });

        return newArray;
      } else {
        return [...prev, newItem];
      }
    });
  };

  const removeCartItem = (cartItem) => {
    setCartItems((prev) => {
      return prev.filter((item) => item.id != cartItem.id);
    });
  };

  return (
    <cartContext.Provider
      value={{
        cartItems,
        toggleCart,
        isCartOpen,
        addToCart,
        removeCartItem,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export function useCartContext() {
  return useContext(cartContext);
}
