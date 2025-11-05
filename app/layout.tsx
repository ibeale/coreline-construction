import type { Metadata } from "next";
import { Oswald, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coreline Construction | Quality Residential Construction in San Diego",
  description: "Expert construction services specializing in waterproofing, remodeling, and general contracting. Serving San Diego with over a decade of experience.",
  keywords: "construction, waterproofing, remodeling, San Diego, residential construction, commercial construction, California",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${outfit.variable} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
