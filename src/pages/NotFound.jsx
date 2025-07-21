import React from "react";
import notFound from "../assets/images/notFound.webp";

function NotFound() {
  return (
    <div className="bg-no-repeat bg-center bg-cover top-0 bottom-0 left-0 right-0 fixed bg-[var(--secondColor)]/80">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="neon-border flex items-center flex-col p-5 rounded-xl cursor-pointer">
          <img className="w-80 md:w-96" src={notFound} alt="404" />
          <a
            href="/"
            className="hover:text-white mt-10 bg-[var(--mainColor)] px-5 py-2 rounded-lg cursor-pointer drop-shadow-[5px_5px_0px_rgba(0,0,0)] hover:translate-x-2 hover:drop-shadow-none hover:translate-y-2 transition duration-300"
          >
            Kembali Ke Halaman
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
