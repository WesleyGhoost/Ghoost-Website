import { ContainerAll } from "./Styles/containerAll";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro";
import About from './components/about'
import Languages from './components/languages'
import Projects from "./components/projects";
import Details from "./components/details";
import Contact from "./components/contact";
import Footer from "./components/footer";

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