import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartItem, Product } from "../types";
import { randomUUID } from "expo-crypto";


const CartContext = createContext<CartType>({
  items: [],
  addItems: () => {},
  updateQuantity: () => {},
  total: 0,
});

type CartType = {
  items: CartItem[];
  addItems: (product: Product, size: CartItem["size"]) => void;
  updateQuantity: (itemId: string, amount: -1 | 1) => void;
  total: number;
};

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Add Item to Cart
  const addItem = (product: Product, size: CartItem["size"]) => {
    // NOTE: If already in cart increment quantity
    const existingItem  = items.find(
      (item) => item.product === product && item.size === size
    );

    if(existingItem){
      updateQuantity(existingItem.id, 1);
      return;
    }
    // console.log(product);
    const newCartItem: CartItem = {
      id: randomUUID(), // generate
      product,
      product_id: product.id,
      size,
      quantity: 1,
    };

    setItems([newCartItem, ...items]);
  };

  // console.log(items)

  // Update Quantity of Item in Cart
  const updateQuantity = (itemId: string, amount: -1 | 1) => {
    // console.log(itemId, amount);
    setItems(
      items.map((item) =>(
        item.id !== itemId ? item : {...item, quantity: item.quantity + amount}
      )).filter((item) => item.quantity > 0)
    );
  };


  const total = items.reduce((sum, item)=> sum + item.product.price * item.quantity, 0);


  return (
    <CartContext.Provider
      value={{
        items,
        updateQuantity,
        addItems: addItem,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
