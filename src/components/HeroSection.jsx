import React, { useContext } from "react";
import hero from "../assets/images/hero.webp";
import { LanguageContext } from "../LanguageContext";
import { FaFacebookF, FaGithub, FaYoutube } from "react-icons/fa";

export default function HeroSection() {
  const { currentLang } = useContext(LanguageContext);

  return (
    <section className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 border-2 border-violet-400 rounded-xl">
      {/* Kiri: Teks */}
      <div className="flex-1 text-center lg:text-left space-y-6 mt-10 lg:mt-0">
        <p className="text-sm tracking-widest text-gray-400 uppercase">
          Youtuber Gaming
        </p>
        <h1 className="text-4xl md:text-6xl font-bold">
          {currentLang.say} <br />
          <span className="text-violet-400">Miikun</span>
        </h1>
        <p className="text-lg max-w-md mx-auto lg:mx-0">
          {currentLang.descript}
        </p>

        {/* Tombol & Ikon */}
        <div className="flex justify-center lg:justify-start items-center gap-5">
          <a
            href="#"
            className="px-6 py-2 border border-violet-400 text-violet-400 rounded-full hover:bg-violet-400 hover:text-black transition duration-300"
          >
            Download CV
          </a>
          {/* Ikon tambahan */}
          <div className="flex gap-3 text-violet-400 p-3 space-x-5 rounded-full">
            <a
              href="https://www.facebook.com/profile.php?id=61561172033409"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition duration-300 border p-2 rounded-full"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/miikun66"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-300 border p-2 rounded-full"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.youtube.com/@mii-kun1998"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-300 border p-2 rounded-full"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Kanan: Gambar */}
      <div className="flex-1 flex justify-center items-center relative">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-violet-400 p-1 relative overflow-hidden">
          <img
            src={hero} // Ganti dengan path gambar kamu
            alt="Miikun"
            className="w-full h-full object-cover rounded-full cursor-pointer"
          />
        </div>
        {/* Efek garis luar bisa kamu tambahkan pakai animasi jika perlu */}
      </div>
    </section>
  );
}
