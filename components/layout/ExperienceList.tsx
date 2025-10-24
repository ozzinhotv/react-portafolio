import { getExperience } from "@/libs/getExperience";
import ExperienceCard from "@/components/ui/ExperienceCard";

export default async function ExperienceList() {
  const items = await getExperience();
  return (
    <section className="mx-auto grid max-w-6xl gap-5 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => <ExperienceCard key={it.id} item={it} />)}
    </section>
  );
}