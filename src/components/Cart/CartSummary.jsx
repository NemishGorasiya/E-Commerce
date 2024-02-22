import React, { useState } from "react";
import next from "../../assets/next.png";
import { shippingMode } from "../../constant.js";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { discounts } from "../../constant.js";

const CartSummary = () => {
  const cartProductsContext = useContext(CartContext);
  const [couponCode, setCouponCode] = useState("");
  const [shippingModeSelected, setShippingModeSelected] = useState("standard");
  const [effectivePrice, setEffectivePrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [shippingCharges, setShippingCharges] = useState(5);

  function calcEffectivePrice() {
    if (
      cartProductsContext.totalPrice === 0 ||
      cartProductsContext.totalItems === 0
    ) {
      return 0;
    } else {
      return (
        cartProductsContext.totalPrice -
        (discountPercentage * cartProductsContext.totalPrice) / 100 +
        shippingCharges
      );
    }
  }

  function calcDiscountPercentage(coupon) {
    setDiscountPercentage(
      discounts[coupon] ? discounts[coupon].discountPercentage : 0
    );
  }
  function calcShippingCharge(shipMode) {
    setShippingCharges(
      shippingMode[shipMode]
        ? shippingMode[shipMode].charges
        : shippingMode["standard"].charges
    );
  }

  return (
    <div className="cartSummary">
      <h2>Cart Summary</h2>
      <hr />
      <div className="summaryData">
        <span>TOTAL ITEMS {cartProductsContext.totalItems}</span>
        <span>
          ${" "}
          {cartProductsContext.totalPrice <= 0
            ? (0).toFixed(2)
            : cartProductsContext.totalPrice.toFixed(2)}
        </span>
      </div>
      <div className="shipping">
        <h4>SHIPPING</h4>
        <select
          name=""
          id=""
          onChange={(e) => {
            setShippingModeSelected(e.target.value);
            calcShippingCharge(e.target.value);
          }}
        >
          {Object.entries(shippingMode).map(([key, value]) => (
            <option key={key} value={key}>
              {value.data}
            </option>
          ))}
        </select>
      </div>
      <div className="coupon">
        <h4>DISCOUNT COUPON CODE</h4>
        <div className="couponInput">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            value={couponCode}
            onChange={(e) => {
              calcDiscountPercentage(e.target.value);
              setCouponCode(e.target.value);
            }}
          />
          <img
            src={next}
            alt=""
            onClick={() => {
              cartProductsContext.applyDiscountCoupon(couponCode);
            }}
          />
        </div>
      </div>
      {/* <hr /> */}
      <div className="priceSummary">
        <div className="finalPrice">
          <span>TOTAL PRICE</span>
          <span>
            {cartProductsContext.totalPrice <= 0
              ? (0).toFixed(2)
              : cartProductsContext.totalPrice.toFixed(2)}
          </span>
        </div>
        <div className="finalPrice">
          <span>SHIPPING PRICE</span>
          <span>
            +{" "}
            {cartProductsContext.totalPrice === 0 ||
            cartProductsContext.totalItems === 0
              ? (0).toFixed(2)
              : shippingCharges.toFixed(2)}
          </span>
        </div>
        <div className="finalPrice">
          <span>DISCOUNT</span>
          <span>
            -{" "}
            {(
              (discountPercentage * cartProductsContext.totalPrice) /
              100
            ).toFixed(2)}
          </span>
        </div>
        <hr />
        <div className="finalPrice">
          <span>EFFECTIVE PRICE</span>
          <span>
            {calcEffectivePrice() <= 0
              ? (0).toFixed(2)
              : calcEffectivePrice().toFixed(2)}
          </span>
        </div>
      </div>
      {/* <div className="finalPrice">
        <span>TOTAL PRICE</span>
        <span>
          {calcEffectivePrice() <= 0
            ? (0).toFixed(2)
            : calcEffectivePrice().toFixed(2)}
        </span>
      </div> */}
      <button className="cartCheckoutBtn">CHECKOUT</button>
    </div>
  );
};

export default CartSummary;
