import Hero from "@/sections/Hero/Hero";
import About from "@/sections/About/About";
import Skills from "@/sections/Skills/Skills";
import Education from "@/sections/Education/Education";
import Projects from "@/sections/Projects/Projects";
import Reviews from "@/sections/Reviews/Reviews";
import Contact from "@/sections/Contact/Contact";


export const metadata = {
  title: "Diponkor Roy | Frontend Developer (MERN Stack)",
  description:
    "Professional portfolio of Diponkor Roy, a Frontend Developer specializing in the MERN Stack, Next.js, React, and modern web technologies.",
};


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      {/*<section id="resume">
        <Resume />
      </section> */}

      <section id="contact">
        <Contact />
      </section>

      <section id="reviews">
        <Reviews />
      </section>

      <section id="education">
        <Education />
      </section>
    </main>
  );
}
