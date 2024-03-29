//import './App.css'
import { Header } from "@components/Header";

function App() {
  return (
    <div className="w-full max-w-[1920px]">
      <Header />
      <section id="home" className="h-[500px] py-24">
        home
      </section>
      <section id="about" className="h-[500px] bg-stone-50 py-24">
        about
      </section>
      <section id="projects" className="h-[500px] py-24">
        projects
      </section>
      <section id="contact" className="h-[500px] bg-stone-50 py-24">
        contacts
      </section>
      <footer className="h-[100px] bg-stone-100 py-24"></footer>
    </div>
  );
}

export default App;
