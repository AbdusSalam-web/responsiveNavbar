import React, { useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    };
    const handleCloseMobileMenu = () => {
        setClick(false)
    }
  return (
    <>
      <nav>
        <Link to="/">Epic</Link>
        <div onClick={handleClick}>
          <i>{click ? <FaTimes /> : <FaBars />}</i>
        </div>
        <ul className={click ? "navMenu active" : "navMenu"}>
          <li className="navItem">
            <Link to="/" onClick={handleCloseMobileMenu}>
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
