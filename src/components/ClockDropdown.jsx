import React, { useState, useEffect, useRef } from "react";

function ClockDropdown() {
  const [time, setTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  const day = time.toLocaleDateString("en-EN", { weekday: "long" });
  const date = time.getDate();
  const month = time.toLocaleDateString("en-EN", { month: "long" });
  const year = time.getFullYear();

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* PC View: tampil semua berjajar */}
      <div className="lg:px-4 lg:py-2 px-2 py-1 hidden md:block font-bold text-[var(--bgDark)] cursor-pointer border-2 rounded-xl text-sm lg:text-lg hover:border-violet-700 hover:text-violet-700">
       {day},{date} {month} {year} | {hours}:{minutes}:{seconds}
      </div>

      {/* Mobile View: jam + dropdown */}
      <div className="md:hidden">
        <button
          onClick={toggleDropdown}
          className="px-4 py-2 text-[var(--bgDark)] font-bold cursor-pointer border-2 rounded-xl hover:border-violet-700 hover:text-violet-700"
        >
          {hours}:{minutes}:{seconds}
        </button>

        {isOpen && (
          <div className="absolute w-35 text-center bg-[var(--secondColor)] rounded-xl border-2 border-violet-700 shadow-lg p-4 z-10 text-violet-700">
            <p>{day}</p>
            <hr />
            <p>{date} {month} {year}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClockDropdown;
