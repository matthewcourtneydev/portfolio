import "./App.scss";
import "./App.css";
import Navbar from "./components/nav-bar";
import Landing from "./components/landing";
import Aside from "./components/aside";
import SocialIcons from './components/left-social-media-icons';
import RightEmail from './components/right-email';
import AboutMe from './components/about-me';
import Experience from './components/experience';
import Portfolio from './components/portofolio';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Aside />
      <Navbar />
      <SocialIcons /> 
      <RightEmail />
      <Landing />
      <AboutMe />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
