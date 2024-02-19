import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartProductsList, setCartProductsList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

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
    let alredyInCartFlag = false;
    cartProductsList.forEach((ele) => {
      if (ele.id === id) {
        alredyInCartFlag = true;
      }
    });
    if (alredyInCartFlag) {
      return;
    }
    let addedProduct = products.filter((ele) => ele.id === id);
    addedProduct[0].qty = 1;
    setTotalItems((prev) => prev + 1);
    setCartProductsList([...cartProductsList, ...addedProduct]);
    setTotalPrice((prev) => {
      return (prev += addedProduct[0].price);
    });
  }
  function decreaseQuantity(id) {
    let x = cartProductsList.map((ele) => {
      if (ele.id === id) {
        if (ele.qty > 1) {
          ele.qty -= 1;
          setTotalPrice((prev) => {
            return (prev -= ele.price);
          });
        }
      }
      return ele;
    });
    setCartProductsList(x);
  }
  function increaseQuantity(id) {
    let x = cartProductsList.map((ele) => {
      if (ele.id === id) {
        ele.qty += 1;
        setTotalPrice((prev) => {
          return (prev += ele.price);
        });
      }
      return ele;
    });
    setCartProductsList(x);
  }
  function removeFromCart(id) {
    setTotalItems((prev) => (prev > 1 ? prev - 1 : 0));
    let x = cartProductsList.filter((ele) => {
      if (ele.id !== id) {
        return ele.id !== id;
      } else {
        setTotalPrice((prev) => {
          return (prev -= ele.price * ele.qty);
        });
      }
    });
    setCartProductsList(x);
  }

  return (
    <CartContext.Provider
      value={{
        cartProductsList,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
