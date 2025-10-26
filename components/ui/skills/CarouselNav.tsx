"use client";
import { Icon } from "@iconify/react";

type Props = { onPrev?: () => void; onNext?: () => void; disablePrev?: boolean; disableNext?: boolean; side: "left" | "right" };

const btn = "inline-flex items-center justify-center p-2 hover:scale-110 transition disabled:opacity-30";
const ico = "h-8 w-8 text-indigo-400 hover:text-fuchsia-400";

export default function CarouselNav({ onPrev, onNext, disablePrev, disableNext, side }: Props) {
  return side === "left" ? (
    <button aria-label="Previous" className={btn} onClick={onPrev} disabled={disablePrev}>
      <Icon icon="lucide:chevron-left" className={ico} />
    </button>
  ) : (
    <button aria-label="Next" className={btn} onClick={onNext} disabled={disableNext}>
      <Icon icon="lucide:chevron-right" className={ico} />
    </button>
  );
}
