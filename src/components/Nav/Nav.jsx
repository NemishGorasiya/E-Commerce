import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import listIcon from "../../assets/list.png";
import closeIcon from "../../assets/close.png";
import { navLinksLeft } from "../../constant.js";
import { navLinksRight } from "../../constant.js";
import NavUl from "./NavUl.jsx";
import "./Nav.css";
import BreadCrumb from "../BreadCrumb/BreadCrumb.jsx";
export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  function handleNavBtn() {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <>
      <nav className={isNavOpen ? "navOpen" : ""}>
        <button onClick={handleNavBtn}>
          <img src={isNavOpen ? closeIcon : listIcon} />
        </button>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navLinks">
          <NavUl navLinks={navLinksLeft} />
          <NavUl navLinks={navLinksRight} />
        </div>
      </nav>
      <BreadCrumb />
    </>
  );
}
