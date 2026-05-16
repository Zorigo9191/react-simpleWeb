import { useState } from "react";
import "./App.scss";
import Nav from "./sections/header/nav";
import Hero from "./sections/main/Hero";
import About from "./sections/main/About";
import Features from "./sections/main/Features";
import Contact from "./sections/main/Contact";
import Footer from "./sections/footer/Footer";
import Trending from "./sections/main/Trending";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Trending />
      <div id="ueber-uns">
        <About />
      </div>

      <Features />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
