"use client";
import React from "react";

export default function HoverGallery() {
  const imgs = [
    "https://img.daisyui.com/images/stock/daisyui-hat-1.webp",
    "https://img.daisyui.com/images/stock/daisyui-hat-2.webp",
    "https://img.daisyui.com/images/stock/daisyui-hat-3.webp",
    "https://img.daisyui.com/images/stock/daisyui-hat-4.webp",
  ];

  return (
    <figure
      className={[
        "hover-gallery w-full",
        "h-(--aboutBoxH) max-w-(--aboutBoxW)",
        "rounded-4xl overflow-hidden ring-1 ring-white/10",
        "transition-shadow duration-300 hover:ring-white/20 hover:shadow-2xl",
      ].join(" ")}
    >
      {imgs.map((src, i) => (
        <img key={i} src={src} alt={`about-gallery-${i + 1}`} />
      ))}
    </figure>
  );
}
