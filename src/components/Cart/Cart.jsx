import "./Cart.css";

import next from "../../assets/next.png";
import CartProduct from "./CartProduct.jsx";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext.jsx";
import emptyCart from "../../assets/emptyCart.png"
const Cart = () => {
  const cartProducts = useContext(CartContext);
  return (
    <div className="cart">
      <h1 className="cartHeading">Shopping Cart</h1>
      <div className="cartWrapper">
        <div className="cartItems">
          <div className="cartProducts">
            { cartProducts.cartProductsList.length === 0
            ? <img className="emptyCart" src={emptyCart} alt="cart is empty" /> 
            : cartProducts.cartProductsList.map((productData,idx)=><CartProduct key={idx} cartProductData={productData}/>)
            }
          </div>
        </div>
        <div className="cartSummary">
          <h2>Cart Summary</h2>
          <hr />
          <div className="summaryData">
            <span>TOTAL QUANTITY 5</span>
            <span>$ 132</span>
          </div>
          <div className="shipping">
            <h4>SHIPPING</h4>
            <select name="" id="">
              <option value="standard">Standard delivery $5</option>
              <option value="superFast">Super Fast Delivery $10</option>
            </select>
          </div>
          <div className="coupon">
            <h4>DISCOUNT COUPON CODE</h4>
            <div className="couponInput">
              <input type="text" placeholder="Enter Coupon Code" />
              <img src={next} alt="" />
            </div>
          </div>
          <hr />
          <div className="finalPrice">
            <span>TOTAL PRICE</span>
            <span>$ 132</span>
          </div>
          <button className="cartCheckoutBtn">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
