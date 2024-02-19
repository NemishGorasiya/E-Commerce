import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "../../assets/cart.png";
import { CartContext } from "../../Context/CartContext";

export default function NavUl({ navLinks }) {
  const cartContext = useContext(CartContext);
  return (
    <ul>
      {navLinks.map((ele, idx) => {
        if (ele === "Cart") {
          return (
            <li
              key={idx}
              className="cartIconWrapper"
              data-qty={cartContext.totalItems}
            >
              <Link to="/cart">
                <img className="cartIcon" src={Cart} alt="" />
              </Link>
            </li>
          );
        }
        if (ele === "Home") {
          return (
            <li key={idx}>
              <Link to="/">{ele}</Link>
            </li>
          );
        }
        return <li key={idx}>{ele}</li>;
      })}
    </ul>
  );
}
