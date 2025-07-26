import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import BodyTime from "./components/BodyTime";
import ScrollButton from "./components/ScrollButton";

function App() {
  return (
    <div className="">
      <header className="mb-20">
        <Header />
      </header>
      <main className="mx-5 lg:mx-10 border-2 mt-20 lg:mt-28 border-violet-400 rounded-xl">
        <BodyTime />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        <ScrollButton />
      </footer>
    </div>
  );
}

export default App;
