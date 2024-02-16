import { useState } from "react";
import logo from "../assets/logo.png";
import listIcon from "../assets/list.png";
import closeIcon from "../assets/close.png";
import { navLinksLeft } from "../data.js";
import { navLinksRight } from "../data.js";
import NavUl from "./NavUl.jsx";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleNavBtn() {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <nav className={isNavOpen ? "navOpen" : ""}>
      <button onClick={handleNavBtn}>
        <img src={isNavOpen ? closeIcon : listIcon} />
      </button>
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="navLinks">
        <NavUl navLinks={navLinksLeft} />
        <NavUl navLinks={navLinksRight} />
      </div>
    </nav>
  );
}
