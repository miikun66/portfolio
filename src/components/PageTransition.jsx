// src/components/PageTransition.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import gambar from "../assets/images/keqing.webp";

const variants = {
  initial: { opacity: 1 },
  animate: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export default function PageTransition() {
  const [show, setShow] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          className="fixed inset-0 z-[9999] bg-black overflow-hidden"
        >
          {/* Fullscreen Image */}
          <img
            src={gambar}
            alt="Loading"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Loading Text */}
          <div className="absolute bottom-5 right-10 md:bottom-5 md:right-5 text-white text-5xl md:text-8xl font-semibold animate-pulse">
            Loading...
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
