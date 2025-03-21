import type { Metadata } from "next";
import { Bowlby_One_SC, DM_Mono } from "next/font/google";

import { Header } from "@/components/Header";
import { SVGFilters } from "@/components/SVGFilters";
import "./globals.css";


// Use the fonts specified in the tailwind.config.ts
const bowlby = Bowlby_One_SC({
  weight: "400",
  display: 'swap',
  variable: "--font-bowlby-sc",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  display: 'swap',
  variable: "--font-dm-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suburbia Sultanpur",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bowlby.variable} ${dmMono.variable} antialiased font-mono font-medium text-zinc-800`}
        suppressHydrationWarning
      >
        <main className="">
        <Header/>
        </main>
        {children}
        <SVGFilters>

        </SVGFilters>

      </body>
    </html>
  );
}
