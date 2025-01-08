import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/AboutMe";
import Services from "./Components/Services";
import Portfolio from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Each section has an id corresponding to the Navbar link */}
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
};

export default App;
