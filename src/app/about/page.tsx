import type { Metadata } from "next";
import DirectorsBoard from "@/components/about/DirectorsBoard";

export const metadata: Metadata = {
  title: "About Us | TARKA Design Studio",
  description: "Get to know TARKA.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p> TARKA DESIGN STUDIO / ABOUT US </p>
        <h1>
          We turn thoughts
          <br />
          into something real.
        </h1>
      </section>

      <DirectorsBoard />
    </main>
  );
}