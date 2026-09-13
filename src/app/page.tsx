import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Metrics } from "@/components/metrics";
import { About } from "@/components/about";
import { Expertise } from "@/components/expertise";
import { Stack } from "@/components/stack";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Metrics />
        <About />
        <Expertise />
        <Stack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

