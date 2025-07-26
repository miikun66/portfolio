import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Cek scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll halus ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-[var(--bgDark)] border-2 border-violet-400 text-white shadow-lg transition duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } hover:text-purple-400 hover:bg-[var(--secondColor)] cursor-pointer`}
      aria-label="Scroll to top"
    >
      <FaAngleDoubleUp />
    </button>
  );
};

export default ScrollButton;
