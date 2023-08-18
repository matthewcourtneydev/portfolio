import "./App.scss";
import "./App.css";
import Navbar from "./components/nav-bar";
import HomePage from "./components/home-page";
import Aside from "./components/aside";
import SocialIcons from './components/left-social-media-icons';
import RightEmail from './components/right-email';

function App() {
  return (
    <div className="App">
      <Aside />
      <Navbar />
      <SocialIcons /> 
      <RightEmail />
      <HomePage />
    </div>
  );
}

export default App;
