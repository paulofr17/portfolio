//import './App.css'
import { Header } from "@components/Header";
import { About } from "@components/About";
import { Experience } from "@components/Experience";
import { Projects } from "@components/Projects";
import { Contact } from "@components/Contact";
import { Footer } from "@components/Footer";

function App() {
  return (
    <div className="w-full max-w-[1920px] mx-auto">
      <Header />
      <section id="about" className="bg-zinc-50 px-4 py-12">
        <About />
      </section>
      <section id="experience" className="px-4 py-12">
        <Experience />
      </section>
      <section id="projects" className="bg-zinc-50 px-4 py-12">
        <Projects />
      </section>
      <section id="contact" className="px-4 py-12">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
