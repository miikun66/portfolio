import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import BodyTime from "./components/BodyTime";

function App() {
  return (
    <div className="">
      <header className="mb-20">
        <Header />
      </header>
      <main className="m-10 border-2 mt-25 border-violet-400 rounded-xl">
        <BodyTime />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
