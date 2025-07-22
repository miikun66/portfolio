import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ToggleLanguage from "./ToggleLanguage";
import { LanguageContext } from "../LanguageContext";

function Header() {
   const { currentLang } = useContext(LanguageContext);

  return (
    <header className="bg-gray-200 p-4">
      <nav className="flex space-x-5 pl-50">
        <Link to="/">{currentLang.home}</Link>
        <Link to="/shop">{currentLang.shop}</Link>
        <Link to="/blog">{currentLang.blog}</Link>
        <Link to="/about">{currentLang.about}</Link>
        <ToggleLanguage />
      </nav>
    </header>
  );
}

export default Header;
