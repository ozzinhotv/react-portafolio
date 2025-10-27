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
      <section id="home"><Hero  /></section>
      <section id="about"><AboutMe /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><ExperienceList /></section>
      <section id="projects"><Project /></section>
      <section id="more-info" className="mx-auto max-w-6xl px-6 py-10">
        <header className="mb-6">
          <h2 className="text-balance text-3xl font-bold leading-tight">
            More{" "}
            <span className="text-blue-500">information</span>
          </h2>
          <p className="mt-2 text-pretty text-zinc-400">
            Education & ways to get in touch.
          </p>
        </header>
        <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr]">
          <div id="education" className="min-w-0">
            <Education />
          </div>
          <div className="hidden md:block md:w-px md:bg-white/10" aria-hidden="true" />
          <div id="contact" className="min-w-0">
            <Contact />
          </div>
        </div>
      </section>
    </main>
  );
}
