
import './App.scss';
import './App.css'
import Navbar from './components/nav-bar';
import HomePage from './components/home-page';
import Aside from './components/aside';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Aside />
      <HomePage />
    </div>
  );
}

export default App;
