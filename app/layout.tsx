import type { ReactNode } from "react";
import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/layout/Hero";
import Skills from "@/components/layout/Skills";
import AboutMe from "@/components/layout/AboutMe";
import ExperienceList from "@/components/layout/ExperienceList";
import Projects from "@/components/layout/Project";
import Education from "@/components/layout/Education";
import Contact from "@/components/layout/ContactMe";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=" ">
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <ExperienceList />
        <Projects />
        <Education />
        <Contact />
        {/* {children} */}
        <Footer />
      </body>
    </html>
  );
}
