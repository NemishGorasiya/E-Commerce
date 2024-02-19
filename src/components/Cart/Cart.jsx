import "./Cart.css";
import CartProduct from "./CartProduct.jsx";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext.jsx";
import emptyCart from "../../assets/emptyCart.png";
import CartSummary from "./CartSummary.jsx";
import Next from "../../assets/next.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartProducts = useContext(CartContext);
  return (
    <div className="cart">
      <h1 className="cartHeading">Shopping Cart</h1>
      <div className="cartWrapper">
        <div className="cartItems">
          <div className="cartProducts">
            {cartProducts.cartProductsList.length === 0 ? (
              <img className="emptyCart" src={emptyCart} alt="cart is empty" />
            ) : (
              cartProducts.cartProductsList.map((productData, idx) => (
                <CartProduct key={idx} cartProductData={productData} />
              ))
            )}
          </div>
        </div>
        <CartSummary />
      </div>
      <Link to="/">
        <h4 className="backToHome">
          <img src={Next} alt="" /> Go back to shopping
        </h4>
      </Link>
    </div>
  );
};

export default Cart;
