import React, { useState, useEffect, useRef, useContext } from "react";
import { LanguageContext } from "../LanguageContext";

function ClockDropdown() {
  const [time, setTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { currentLang } = useContext(LanguageContext);
  const locale = currentLang.language || "id-ID"; // default ke id-ID jika kosong

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Format waktu dan tanggal
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  const day = time.toLocaleDateString(locale, { weekday: "long" });
  const date = time.getDate();
  const month = time.toLocaleDateString(locale, { month: "long" });
  const year = time.getFullYear();

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* PC View: tampil semua berjajar */}
      <div className="text-violet-200 transition duration-300 text-shadow-violet-700 text-shadow-[0px_1px_0px_rgb(0.0.0)] lg:px-4 lg:py-2 px-2 py-1 hidden md:block font-bold bg-zinc-700 cursor-pointer border-2 border-violet-400 rounded-xl text-sm lg:text-lg hover:border-violet-500 hover:text-purple-400">
        {day}, {date} {month} {year} | {hours}:{minutes}:{seconds}
      </div>

      {/* Mobile View: jam + dropdown */}
      <div className="md:hidden">
        <button
          onClick={toggleDropdown}
          className="px-4 py-2 text-violet-200 transition duration-300 text-shadow-violet-700 text-shadow-[0px_1px_0px_rgb(0.0.0)] font-bold cursor-pointer border-2 rounded-xl bg-zinc-700 border-violet-400 hover:border-violet-500 hover:text-purple-400"
        >
          {hours}:{minutes}:{seconds}
        </button>

        {isOpen && (
          <div className="absolute w-35 text-center bg-[var(--secondColor)] rounded-xl border-2 border-violet-700 shadow-lg p-4 z-10 text-purple-600">
            <p className="font-bold">{day}</p>
            <hr />
            <p>{date} {month} {year}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClockDropdown;
