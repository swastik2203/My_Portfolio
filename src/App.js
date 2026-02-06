import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SocialSidebar from './components/SocialSidebar';
import FixedResumeButton from './components/FixedResumeButton';

function App() {
  return (
    <div className="min-h-screen w-full custom-scrollbar">
      <Navbar />
      <SocialSidebar />
      <FixedResumeButton />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

