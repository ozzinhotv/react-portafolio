"use client";

import type { ContactCard } from "@/types/contactMe.type";
import ContactItemCard from "./ContactItemCard";

type Props = { cards: ContactCard[] };

export default function ContactList({ cards }: Props) {
  return (
    <ul className="space-y-4">
      {cards.map((c) => (
        <li key={c.id}>
          <ContactItemCard card={c} />
        </li>
      ))}
    </ul>
  );
}
