import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { NavigationContext } from "../context/NavigationContext";

const NavLinks = () => {
  const { activeLink, handleSetActiveLink } = useContext(NavigationContext);
  // const [activeLink, setActiveLink] = useState("home");
  const [mobNav, setMobNav] = useState(false);

  const handleMobNav = () => {
    setMobNav(!mobNav);
  };

  const handleNavLinkClick = (link) => {
    handleSetActiveLink(link);
    setMobNav(false);
  };

  return (
    <>
      <ul
        className={`w-[98%] md:w-[max-content] ${
          mobNav ? "flex" : "hidden md:flex"
        } flex-col md:flex-row items-start md:items-center justify-center transition-all duration-200`}
      >
        <Link
          to="/"
          className={`${
            activeLink === "home" ? "bg-primary-text/10 text-white" : ""
          } text-primary-text text-[14px] duration-200 hover:text-white  hover:bg-primary-text/10 cursor-pointer px-5 py-2 w-full md:w-[max-content]`}
          onClick={() => handleNavLinkClick("home")}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={`${
            activeLink === "about" ? "bg-primary-text/10 text-white" : ""
          } text-primary-text text-[14px] duration-200 hover:text-white  hover:bg-primary-text/10 cursor-pointer px-5 py-2 w-full md:w-[max-content]`}
          onClick={() => handleNavLinkClick("about")}
        >
          About
        </Link>
        <Link
          to="/menu"
          className={`${
            activeLink === "menu" ? "bg-primary-text/10 text-white" : ""
          } text-primary-text text-[14px] duration-200 hover:text-white  hover:bg-primary-text/10 cursor-pointer px-5 py-2 w-full md:w-[max-content]`}
          onClick={() => handleNavLinkClick("menu")}
        >
          Menu
        </Link>
        <Link
          to="/story"
          className={`${
            activeLink === "stories" ? "bg-primary-text/10 text-white" : ""
          } text-primary-text text-[14px] duration-200 hover:text-white  hover:bg-primary-text/10 cursor-pointer px-5 py-2 w-full md:w-[max-content]`}
          onClick={() => handleNavLinkClick("stories")}
        >
          Stories
        </Link>
        <Link
          to="/contact"
          className={`${
            activeLink === "contact" ? "bg-primary-text/10 text-white" : ""
          } text-primary-text text-[14px] duration-200 hover:text-white  hover:bg-primary-text/10 cursor-pointer px-5 py-2 w-full md:w-[max-content]`}
          onClick={() => handleNavLinkClick("contact")}
        >
          Contact
        </Link>

        <Link
          to="/login"
          className="bg-button px-10 py-3 shadow-sm hover:shadow-button-hover ml-3 cursor-pointer text-primary-text duration-200 hover:bg-button-hover w-full md:w-[max-content]"
        >
          Login
        </Link>

        {/*  <button
        type="button"
        className="bg-button px-10 py-3 shadow-sm hover:shadow-button-hover ml-3 cursor-pointer text-primary-text duration-200 hover:bg-button-hover"
      >
        Book a table
      </button> */}
      </ul>

      {/* Hamburger Menu */}
      <div
        className="block md:hidden text-xl text-primary-text px-4 py-2 bg-primary-text/10 cursor-pointer shadow-sm hover:shadow-primary-text/30 absolute right-4 top-5"
        onClick={handleMobNav}
      >
        {mobNav ? (
          <>
            <i className="fa-solid fa-close"></i> Menu
          </>
        ) : (
          <>
            <i className="fa-solid fa-bars"></i> Menu
          </>
        )}
      </div>
    </>
  );
};

export default NavLinks;
