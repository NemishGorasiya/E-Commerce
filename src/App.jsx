import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav.jsx";
import Slider from "./components/Slider/Slider.jsx";
import DisplayItems from "./components/ProductDisplay/DisplayItems.jsx";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart.jsx";
import { CartContextProvider } from "./Context/CartContext.jsx";
function App() {
  const [products, setProducts] = useState([]);
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
  return (
    <>
      <CartContextProvider>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <DisplayItems products={products} />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContextProvider>
    </>
  );
}

export default App;
