import React from "react";
import { Link } from "react-router-dom";

export default function NavUl({ navLinks }) {
  return (
    <ul>
      {navLinks.map((ele, idx) => {
        if (ele === "Cart") {
          return (
            <li key={idx}>
              <Link to="/cart">{ele}</Link>
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
