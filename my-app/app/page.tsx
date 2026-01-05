"use client";

import Home from "./home/home";
import About from "./about/page";
import Projects from "./projects/page";
import Resume from "./resume/page";

export default function Page() {
  return (
    <>
      <section id="home">
        <Home />
      </section>

      <About />
      <Projects />
      <Resume />
    </>
  );
}
