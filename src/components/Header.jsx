import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ToggleLanguage from "./ToggleLanguage";
import { LanguageContext } from "../LanguageContext";
import logo from "../assets/images/logo.webp";
import logoSm from "../assets/images/favicon-96x96.png";

function Header() {
  const { currentLang } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

   return (
    <header className="fixed top-0 left-0 right-0 border-2 border-violet-400 md:my-5 md:mx-10 my-2 mx-5 rounded-xl shadow-md z-50 bg-[var(--secondColor)]/80">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img className="h-10 w-auto hidden md:flex" src={logo} alt={currentLang.logo} />
            <img className="h-10 w-auto md:hidden" src={logoSm} alt={currentLang.logo} />
          </Link>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[var(--mainColor)] hover:text-violet-700 focus:outline-none cursor-pointer border-2 rounded-md"
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

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 font-bold text-[var(--bgDark)]">
          <Link className="hover:text-[var(--mainColor)]" to="/">{currentLang.home}</Link>
          <Link className="hover:text-[var(--mainColor)]" to="/shop">{currentLang.shop}</Link>
          <Link className="hover:text-[var(--mainColor)]" to="/blog">{currentLang.blog}</Link>
          <Link className="hover:text-[var(--mainColor)]" to="/about">{currentLang.about}</Link>
        </nav>

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
            <Link to="/" className="block bg-amber-200">{currentLang.home}</Link>
            <Link to="/shop" className="block">{currentLang.shop}</Link>
            <Link to="/blog" className="block">{currentLang.blog}</Link>
            <Link to="/about" className="block">{currentLang.about}</Link>
            <ToggleLanguage />
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
