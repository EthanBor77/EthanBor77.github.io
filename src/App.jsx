import Header from "./components/Header";
import TestSetup from "./components/TestSetup";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Skills />
        <TestSetup />
      </main>
      <Footer />
    </>
  );
}

export default App;
