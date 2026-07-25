import Navbar from "@/sections/Navbar/Navbar";
import Hero from "@/sections/Hero/Hero";
import About from "@/sections/About/About";
import Skills from "@/sections/Skills/Skills";
import Education from "@/sections/Education/Education";
import Projects from "@/sections/Projects/Projects";
import Resume from "@/sections/Resume/Resume";
import Reviews from "@/sections/Reviews/Reviews";
import Contact from "@/sections/Contact/Contact";
import Footer from "@/sections/Footer/Footer";

export const metadata = {
  title: "Diponkor Roy | Frontend Developer (MERN Stack)",
  description:
    "Professional portfolio of Diponkor Roy, a Frontend Developer specializing in the MERN Stack, Next.js, React, and modern web technologies.",
};


export default function Home() {
  return (
    <main className="container mx-auto min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar id="navbar" />

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

      <section id="education">
        <Education />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="resume">
        <Resume />
      </section>

      <section id="reviews">
        <Reviews />
      </section>

      <Footer />
    </main>
  );
}
