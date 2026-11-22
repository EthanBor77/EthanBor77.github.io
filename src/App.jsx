import Header from "./components/Header";
import TestSetup from "./components/TestSetup";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
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
          {/* <TestSetup /> */}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
