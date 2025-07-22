import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function Home() {
  const { currentLang } = useContext(LanguageContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{currentLang.home}</h1>
      <p>{currentLang.body || "This is home page content."}</p>
    </div>
  );
}

export default Home;
