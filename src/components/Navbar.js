import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../images/Shop_logo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <div className="header-div d-flex justify-content-between">
        <div className="image-div">
          <NavLink to="/">
          <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="nav-div">
          <nav ref={navRef}>
            <NavLink to="/shoptohome">Home</NavLink>
            <NavLink to="/shoptohome/about">About</NavLink>
            <NavLink to="/shoptohome/contact">Contact</NavLink>
            <NavLink to="/shoptohome/products">Product</NavLink>
            <NavLink to="/shoptohome/cart" className="navbar-link cart-trolley--link">
              {" "}
              <FiShoppingCart className="cart-trolley" />{" "}
              <span className="cart-total--item"> 0 </span>{" "}
            </NavLink>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
