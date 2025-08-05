import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import BodyTime from "./components/BodyTime";
import ScrollButton from "./components/ScrollButton";
import PreventInspect from "./components/PreventInspect";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

function App() {
  const location = useLocation();

  return (
    <div className="selection:bg-zinc-700 selection:text-violet-400">
      <header className="mb-20">
        <Header />
      </header>
      <main className="mx-5 lg:mx-10 mt-20 lg:mt-28">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <PreventInspect />
        <BodyTime />
        <ScrollButton />
        <PageTransition />
      </main>
      <footer>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#A684FF"
            fillOpacity="1"
            d="M0,32L17.1,42.7C34.3,53,69,75,103,117.3C137.1,160,171,224,206,229.3C240,235,274,181,309,176C342.9,171,377,213,411,213.3C445.7,213,480,171,514,149.3C548.6,128,583,128,617,154.7C651.4,181,686,235,720,224C754.3,213,789,139,823,122.7C857.1,107,891,149,926,165.3C960,181,994,171,1029,154.7C1062.9,139,1097,117,1131,117.3C1165.7,117,1200,139,1234,154.7C1268.6,171,1303,181,1337,165.3C1371.4,149,1406,107,1423,85.3L1440,64L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
          ></path>
        </svg>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
