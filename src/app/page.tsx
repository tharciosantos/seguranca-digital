import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { TipsSection } from "@/components/TipsSection";
import { Summary } from "@/components/Summary";
import { FormSection } from "@/components/FormSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <TipsSection />
        <Summary />
        <FormSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
