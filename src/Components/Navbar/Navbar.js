import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-scroll";

import "./NavbarStyles.scss";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className="logo">
        <h2 className={nav ? "logo dark" : "logo"}>BEACHES.</h2>
      </div>
      <ul className="nav-menu">
        <Link to="home">
          <li>Home</li>
        </Link>
        <Link to="destinations">
          <li>Destinations</li>
        </Link>
        <Link to="search">
          <li>Travel</li>
        </Link>
        <Link to="selects">
          <li>Book</li>
        </Link>
        <Link to="carousel">
          <li>Views</li>
        </Link>
      </ul>
      <div className="nav-icons">
        <BiSearch className="icon" style={{ marginRight: "1rem" }} />
        <BsPerson className="icon" />
      </div>
      <div className="hamburger" onClick={handleNav}>
        {nav ? (
          <AiOutlineClose className="icon" style={{ color: "black" }} />
        ) : (
          <HiOutlineMenuAlt4 className="icon" />
        )}
      </div>

      <div className={nav ? "active mobile-menu" : "mobile-menu"}>
        <ul className="mobile-nav">
          <Link to="home">
            <li
              onClick={() => {
                setTimeout(handleNav, 500);
              }}
            >
              Home
            </li>
          </Link>
          <Link to="destinations">
            <li
              onClick={() => {
                setTimeout(handleNav, 500);
              }}
            >
              Destinations
            </li>
          </Link>
          <Link to="search">
            <li
              onClick={() => {
                setTimeout(handleNav, 500);
              }}
            >
              Travel
            </li>
          </Link>
          <Link to="selects">
            <li
              onClick={() => {
                setTimeout(handleNav, 500);
              }}
            >
              Book
            </li>
          </Link>
          <Link to="carousel">
            <li
              onClick={() => {
                setTimeout(handleNav, 500);
              }}
            >
              Views
            </li>
          </Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
