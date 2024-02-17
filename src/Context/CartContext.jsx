import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartProductsList, setCartProductsList] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  function addToCart(id) {
    let addedProduct = products.filter((ele) => ele.id === id);
    // console.log("addedProduct", addedProduct[0]);
    addedProduct[0].qty = 1;
    setCartProductsList([...cartProductsList, ...addedProduct]);
    // console.log("cart", cartProductsList);
  }
  function decreaseQuantity(id) {
    let x = cartProductsList.map((ele)=>{
      if (ele.id === id) {
        if (ele.qty > 1) {
          ele.qty-=1;
        }
      }
      return ele;
    })
    setCartProductsList(x);
  }
  function increaseQuantity(id) {
    let x = cartProductsList.map((ele)=>{
      if (ele.id === id) {
        ele.qty+=1;
      }
      return ele;
    })
    setCartProductsList(x);
  }
  function removeFromCart(id) {
    let x = cartProductsList.filter((ele)=>{
      return ele.id !== id;
    })
    setCartProductsList(x);
  }

  return (
    <CartContext.Provider value={{ cartProductsList, addToCart , increaseQuantity , decreaseQuantity , removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
}
