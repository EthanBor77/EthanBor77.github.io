import Header from "./components/Header";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="site-content">
          <Intro />
          <About />
          <Skills />
          <Education />
          <Projects />
          {/* <Experience /> hidden for now; see Experience.jsx */}
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
