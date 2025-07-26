import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function ToggleLanguage() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button
      onClick={toggleLanguage}
      className="bg-[var(--bgDark)] border-2 hover:border-violet-500 border-violet-400 focus:outline-2 focus:outline-offset-2 focus:outline-violet-400 hover:text-purple-400 transition duration-300 text-[var(--secondColor)] font-bold lg:py-2 lg:px-4 px-2 py-1 rounded-xl cursor-pointer lg:w-15 lg:h-10"
    >
      {language === "id" ? "EN" : "ID"}
    </button>
  );
}

export default ToggleLanguage;
