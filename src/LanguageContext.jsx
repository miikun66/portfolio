import React, { createContext, useState } from "react";
import lang from "./lang/lang.json";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("id");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"));
  };

  const currentLang = lang[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, currentLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
