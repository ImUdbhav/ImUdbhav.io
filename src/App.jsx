import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav"; 
import Hero2 from "./components/Hero2";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

function App() {
 
  return (
    
    <Router>
       <Analytics/>
      <Nav />
      <Hero2 />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer/>
    </Router>
  );
}

export default App;
