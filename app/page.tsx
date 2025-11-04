// Page.tsx
import Hero from "@/components/layout/Hero";
import Skills from "@/components/layout/Skills";
import AboutMe from "@/components/layout/AboutMe";
import ExperienceList from "@/components/layout/ExperienceList";
import Project from "@/components/layout/Project";
import Education from "@/components/layout/Education";
import Contact from "@/components/layout/ContactMe";
import HeaderInline from "@/components/ui/shared/components/HeaderInline";

export default function Page() {
  return (
    <main>
      <section id="home"><Hero /></section>
      <section id="about"><AboutMe /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><ExperienceList /></section>
      <section id="projects"><Project /></section>
      <section id="more-info" className="mx-auto max-w-6xl px-6 py-10">
        <HeaderInline
          intro={{
            title: "More",
            highlight: "information",
            subtitle: "Education & ways to get in touch.",
          }}
        />
        <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-start">
          <div id="education" className="min-w-0 [&_section]:p-0 [&_section]:max-w-none">
            <Education />
          </div>
          <div
            className="hidden md:block md:w-px md:bg-white/10 md:self-stretch"
            aria-hidden="true"
          />
          <div id="contact" className="min-w-0 [&_section]:p-0 [&_section]:max-w-none">
            <Contact />
          </div>
        </div>
      </section>
    </main>
  );
}
