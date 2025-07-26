import React, { useState, useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import {
  FaFacebookF,
  FaGithub,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
    const { currentLang } = useContext(LanguageContext);

  return (
    <div className="bg-violet-400 text-[var(--bgDark)] py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 bg-[var(--secondColor)] md:px-10 py-5 rounded-xl border-2 border-purple-400">
        {/* Brand or Info */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">© {new Date().getFullYear()} Miikun</h2>
          <p className="text-sm font-bold">{currentLang.footer}.</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a
            href="https://www.facebook.com/profile.php?id=61561172033409"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/miikun66"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.youtube.com/@mii-kun1998"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
