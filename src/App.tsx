import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { CTA } from "./components/sections/CTA";
import { Hero } from "./components/sections/Hero";
import { Process } from "./components/sections/Process";
import { Services } from "./components/sections/Services";
import { FieldVideos } from "./components/sections/FieldVideos";
import { Showcase } from "./components/sections/Showcase";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";

function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-sm focus:bg-white focus:px-4 focus:py-2 focus:text-brand-dark"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Showcase />
        <FieldVideos />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
