import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Errorpage from "./Pages/Errorpage";
// import About from "./Pages/About"; // Example additional page
// import Services from "./Pages/Services"; // Example additional page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
