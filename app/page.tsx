import Hero from "@/components/layout/Hero";
import Skills from "@/components/layout/Skills";
import AboutMe from "@/components/layout/AboutMe";
import ExperienceList from "@/components/layout/ExperienceList";
import Project from "@/components/layout/Project";
import Education from "@/components/layout/Education";
import Contact from "@/components/layout/ContactMe";

export default function Page() {
  return (
    <main>
      <section id="home"><Hero /></section>
      <section id="about"><AboutMe /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><ExperienceList /></section>
      <section id="projects"><Project /></section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}
