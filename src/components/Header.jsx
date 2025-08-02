import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ToggleLanguage from "./ToggleLanguage";
import { LanguageContext } from "../LanguageContext";
import logo from "../assets/images/logo.webp";
import logoSm from "../assets/images/favicon-96x96.png";
import ClockDropdown from "./ClockDropdown";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const { currentLang } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scroll ke bawah
        setShowHeader(false);
      } else {
        // Scroll ke atas
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 border-2 border-violet-400 lg:my-5 lg:mx-10 my-2 mx-5 rounded-xl shadow-md z-50 bg-[var(--bgDark)] transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-100"
      }`}
    >
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
        <nav className="hidden md:flex lg:space-x-12 space-x-3 font-bold text-[var(--mainColor)] lg:text-2xl text-xl">
          <ul className="flex space-x-3 lg:space-x-12">
            <li>
              <Link
                className="nav-link hover:text-purple-400 transition duration-300"
                to="/"
              >
                {currentLang.home}
              </Link>
            </li>
            <li>
              <a
                className="nav-link hover:text-purple-400 transition duration-300"
                href="https://store.miikun.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {currentLang.shop}
              </a>
            </li>
            <li>
              <a
                className="nav-link hover:text-purple-400 transition duration-300"
                href="https://blog.miikun.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {currentLang.blog}
              </a>
            </li>
            <li>
              <Link
                className="nav-link hover:text-purple-400 transition duration-300"
                to="/about"
              >
                {currentLang.about}
              </Link>
            </li>
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
            className="border-2 border-violet-400 cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-violet-400 hover:text-purple-400 transition duration-300 focus:outline-none text-violet-400 bg-[var(--bgDark)] h-8 w-8 flex items-center justify-center rounded-md"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Button */}
        <div className="hidden md:flex flex-shrink-0">
          <ToggleLanguage />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden font-bold text-[var(--bgDark)]">
          <hr className="text-violet-400 mx-3" />
          <nav className="px-4 py-3 space-y-2">
            <ul className="space-y-2 text-violet-400 bg-zinc-600/50 rounded-lg">
              <li>
                <Link
                  className="hover:text-white hover:translate-x-2 transition duration-300 block hover:bg-gradient-to-r from-violet-400 to-transparent p-1 rounded-lg"
                  to="/"
                >
                  {currentLang.home}
                </Link>
              </li>
              <li>
                <a
                  className="hover:text-white hover:translate-x-2 transition duration-300 block hover:bg-gradient-to-r from-violet-400 to-transparent p-1 rounded-lg"
                  href="https://store.miikun.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {currentLang.shop}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white hover:translate-x-2 transition duration-300 block hover:bg-gradient-to-r from-violet-400 to-transparent p-1 rounded-lg"
                  href="https://blog.miikun.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {currentLang.blog}
                </a>
              </li>
              <li>
                <Link
                  className="hover:text-white hover:translate-x-2 transition duration-300 block hover:bg-gradient-to-r from-violet-400 to-transparent p-1 rounded-lg"
                  to="/about"
                >
                  {currentLang.about}
                </Link>
              </li>
            </ul>
            <ToggleLanguage />
          </nav>
        </div>
      )}
    </div>
  );
}

export default Header;
