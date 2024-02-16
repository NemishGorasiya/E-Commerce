import React from "react";

export default function NavUl({ navLinks }) {
  return (
    <ul>
      {navLinks.map((ele, idx) => {
        return <li key={idx}>{ele}</li>;
      })}
    </ul>
  );
}
