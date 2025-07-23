import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function ToggleLanguage() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button
      onClick={toggleLanguage}
      className="bg-[var(--bgDark)] hover:bg-violet-700 text-white font-bold lg:py-2 lg:px-4 px-2 py-1 rounded-xl cursor-pointer lg:w-15 lg:h-10"
    >
      {language === "id" ? "EN" : "ID"}
    </button>
  );
}

export default ToggleLanguage;
