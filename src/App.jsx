// eslint-disable-next-line no-unused-vars
import { useState } from "react";

import "./App.css";
import HomePage from "./Pages/Home/HomePage";
import AboutPage from "./Pages/About/AboutPage";
import ExperiencePage from "./Pages/Experiences/ExperiencePage";
import ProjectPage from "./Pages/Project/ProjectPage";
import SkillsPage from "./Pages/Skills/SkillsPage";
import ContactPage from "./Pages/Contact/ContactPage";

function App() {
  return (
    <>
      <header className="flex w-full justify-center ">
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        Header
      </header>
      <HomePage />
      <AboutPage />
      <ExperiencePage />
      <ProjectPage />
      <SkillsPage />
      <ContactPage />
    </>
  );
}

export default App;
