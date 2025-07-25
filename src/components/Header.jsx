import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ToggleLanguage from "./ToggleLanguage";
import { LanguageContext } from "../LanguageContext";
import logo from "../assets/images/logo.webp";
import logoSm from "../assets/images/favicon-96x96.png";
import ClockDropdown from "./ClockDropdown";

function Header() {
  const { currentLang } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { to: "/", label: currentLang.home },
    { to: "/shop", label: currentLang.shop },
    { to: "/blog", label: currentLang.blog },
    { to: "/about", label: currentLang.about },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 border-2 border-violet-400 lg:my-5 lg:mx-10 my-2 mx-5 rounded-xl shadow-md z-50 bg-[var(--bgDark)]/80">
      <div className="max-w-7xl mx-auto lg:px-4 lg:py-3 px-1 py-1 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              className="h-10 w-auto hidden md:flex"
              src={logo}
              alt={currentLang.logo}
            />
            <img
              className="h-10 w-auto md:hidden pl-2"
              src={logoSm}
              alt={currentLang.logo}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex lg:space-x-12 space-x-3 font-bold text-[var(--mainColor)]">
          <ul className="flex space-x-3 lg:space-x-12">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link className="nav-link hover:text-purple-400 transition duration-300" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/*Clock*/}
        <div>
          <ClockDropdown />
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden pr-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border-2 border-violet-400 focus:outline-2 focus:outline-offset-2 focus:outline-violet-400 hover:text-purple-400 transition duration-300 focus:outline-none text-violet-400 bg-[var(--bgDark)] h-8 cursor-pointer rounded-md"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Button */}
        <div className="hidden md:flex flex-shrink-0">
          <ToggleLanguage />
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden font-bold text-[var(--bgDark)]">
          <hr className="text-violet-400 mx-3" />
          <nav className="px-4 py-3 space-y-2">
            <ul className="space-y-2 text-violet-400 bg-zinc-600/50 rounded-lg ">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    className="hover:text-white block hover:bg-gradient-to-r from-violet-400 to-transparent p-1 rounded-lg"
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ToggleLanguage />
          </nav>
        </div>
      )}
    </div>
  );
}

export default Header;
