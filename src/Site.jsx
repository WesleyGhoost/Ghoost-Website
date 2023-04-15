import { ContainerAll } from "./Styles/ContainerAll";

import Navbar from "./components/Navbar";

import Intro from "./components/Intro";

import About from './components/About'

import Languages from './components/Languages'

import Projects from "./components/Projects";

import Details from "./components/Details";

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

      <Footer />
    </ContainerAll>
  );
}

export default Site;