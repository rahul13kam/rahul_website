import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import SalesforceCertifications from "@/components/SalesforceCertifications";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Summary />
      <Skills />
      <Experience />
      <SalesforceCertifications />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
