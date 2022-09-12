import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <main className='main-section'>
      <Navbar />
      <Header />
      <Stack />
      <Projects />
      <Work />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
