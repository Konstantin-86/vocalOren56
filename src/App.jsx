import React from "react";
import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import SectionAbout from "./components/SectionAbout";
import SectionVideo from "./components/SectionVideo";
import SectionLessonsChildren from "./components/SectionLessonsChildren";
import SectionLessonsAdult from "./components/SectionLessonsAdult";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/vocalOren56" element={<MainContent />}></Route>
        <Route path="/about" element={<SectionAbout />}></Route>
        <Route
          path="/lessonsChildren"
          element={<SectionLessonsChildren />}
        ></Route>
        <Route path="/lessonsAdult" element={<SectionLessonsAdult />}></Route>
        <Route path="/video" element={<SectionVideo />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
