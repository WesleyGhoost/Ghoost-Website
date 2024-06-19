import { ContainerAll } from "./Styles/ContainerAll";
import { LanguageModal } from "./components/modals/languageModal";
import { useSelector } from "react-redux";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/Intro";
import About from './components/About'
import Languages from './components/Languages'
import Projects from "./components/Projects";
import Details from "./components/Details";
import Contact from "./components/contact";
import Footer from "./components/Footer";

const Site = () => {
  const opacity = useSelector((state) => state.appOpacity)

  return (
    <>
      <LanguageModal />

      <ContainerAll id='intro' opacity={opacity}>
        <Navbar />

        <Intro />

        <About />

        <Languages />

        <Projects />

        <Details />

        <Contact />

        <Footer />
      </ContainerAll>
    </>
  );
}

export default Site;