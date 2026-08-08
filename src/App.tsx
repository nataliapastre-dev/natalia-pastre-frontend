import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import Experiencia from "./components/Experiencia";
import Habilidades from "./components/Habilidades";
import Projects from "./components/Projects";
import Certificacoes from "./components/Certificacoes";
import Contato from "./components/Contato";


function App() {

  return (

    <>

      <Navbar />


      <main>

        <Hero />

        <About />

        <Experiencia />

        <Projects />

        <Habilidades />

        <Certificacoes />

        <Contato />

      </main>


    </>

  );

}


export default App;