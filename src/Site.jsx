import { ContainerAll } from "./Styles/ContainerAll";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/Intro";
import About from './components/About'
import Languages from './components/Languages'
import Projects from "./components/Projects";
import Details from "./components/Details";
import Contact from "./components/contact";
import Footer from "./components/Footer";

const Site = () => {
  return (
    <ContainerAll id='intro'>
      <Navbar />

      <Intro />

      <About />

      <Languages />

      <Projects />

      <Details />

      <Contact />

      <Footer />
    </ContainerAll>
  );
}

export default Site;