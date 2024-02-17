import "./App.css";
import Nav from "./components/Nav.jsx";
import Slider from "./components/Slider.jsx";
import DisplayItems from "./components/DisplayItems.jsx";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart.jsx";
function App() {
  return (
    <>
      <Nav />
      {/* <Slider />
      <DisplayItems /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <DisplayItems />
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
