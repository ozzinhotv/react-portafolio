import type { ReactNode } from "react";
import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-zinc-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
