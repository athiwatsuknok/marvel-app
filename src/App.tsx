import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home";
import Heros from "./pages/Heros";
import HeroDetail from "./pages/HeroDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heros" element={<Heros />} />
          <Route path="/heros/:heroesName" element={<HeroDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
