import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      // Aynı ID ve aynı renkte ürün var mı kontrol et
      const existingItem = prev.find(
        (item) => item.id === product.id && item.selectedColor === product.selectedColor
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id && item.selectedColor === product.selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Yeni ürünse quantity 1 olarak ekle
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, amount) } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Beyaz ekranı önlemek için korumalı hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};