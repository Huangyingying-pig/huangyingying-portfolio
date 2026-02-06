import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Footer from './sections/Footer';

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <Footer />
    </main>
  );
}

export default App;
