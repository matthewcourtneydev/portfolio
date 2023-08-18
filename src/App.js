import "./App.scss";
import "./App.css";
import Navbar from "./components/nav-bar";
import Landing from "./components/landing";
import Aside from "./components/aside";
import SocialIcons from './components/left-social-media-icons';
import RightEmail from './components/right-email';
import Experience from './components/experience';

function App() {
  return (
    <div className="App">
      <Aside />
      <Navbar />
      <SocialIcons /> 
      <RightEmail />
      <Landing />
      <Experience />
    </div>
  );
}

export default App;
