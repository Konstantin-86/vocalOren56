import React from "react";
import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import SectionVideo from "./components/SectionVideo";
import SectionLessons from "./components/SectionLessons";
import SectionPrice from "./components/SectionPrice";
import SectionAbout from "./components/SectionAbout";

import { Routes, Route, Link } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/vocalOren56" element={<MainContent />}></Route>
        <Route path="/about" element={<SectionAbout />}></Route>
        <Route path="/video" element={<SectionVideo />}></Route>
        <Route path="/lessons" element={<SectionLessons />}></Route>
        <Route path="/price" element={<SectionPrice />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
