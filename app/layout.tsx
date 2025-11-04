import type { ReactNode } from "react";
import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import localFont from "next/font/local";

const montserrat = localFont({
  src: "./font/monserrat-medium/Montserrat-Medium.ttf",
  weight: "500",
  style: "normal",
  display: "swap",
  variable: "--font-montserrat", 
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${montserrat.variable} bg-info-content`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
