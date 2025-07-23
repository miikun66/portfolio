import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function ToggleLanguage() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button
      onClick={toggleLanguage}
      className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-15 h-10"
    >
      {language === "id" ? "EN" : "ID"}
    </button>
  );
}

export default ToggleLanguage;
