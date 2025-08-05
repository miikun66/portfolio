import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import HeroSection from "../components/HeroSection";

function Home() {
  const { currentLang } = useContext(LanguageContext);

  return (
    <>
      <HeroSection />
    </>
  );
}

export default Home;
