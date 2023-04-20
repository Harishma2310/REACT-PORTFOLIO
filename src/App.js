import logo from './logo.svg';
import './App.css';
import HomePage from './components/Home';
import Navbar from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Project';
import Resume from './components/Resume';
import Projects from './components/Project';
import Contacts from './components/Contact';
import NavScrollExample from './components/Nav';
import MyProjects from './components/MyProjects';
function App() {
  return (
    <div className="App">
       <NavScrollExample/>
      <HomePage/>
      <About/>
      <Skills/>
      <Resume/>
      <Projects/>
      <MyProjects/>
      <Contacts/>
    </div>
  );
}

export default App;
