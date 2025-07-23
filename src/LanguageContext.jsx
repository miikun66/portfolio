import React, { createContext, useState, useEffect } from "react";
import lang from "./lang/lang.json";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("id");

  
  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang && lang[savedLang]) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "id" ? "en" : "id";
      localStorage.setItem("language", newLang); 
      return newLang;
    });
  };

  const currentLang = lang[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, currentLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
