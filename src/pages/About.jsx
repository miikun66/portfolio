import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function About() {
  const { currentLang } = useContext(LanguageContext);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{currentLang.about}</h1>
      <p>This is the about page.</p>
    </div>
  );
}

export default About;
