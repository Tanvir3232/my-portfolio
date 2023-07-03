import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Banner from "./Banner";
import Footer from "./Footer";
import Skills from "./Skills";
import { Element } from 'react-scroll';

const Home = () => {
    return (
      <div>
        <Element name="banner">
          <Banner></Banner>
        </Element>
        <Element name="skills">
          <Skills></Skills>
        </Element>
        <Element name="projects">
          <Projects></Projects>
        </Element>
        <Element name="about">
          <About></About>
        </Element>
        <Element name="contact">
          <Contact></Contact>
        </Element>
        <Footer></Footer>
      </div>
    );
  };
  
export default Home;