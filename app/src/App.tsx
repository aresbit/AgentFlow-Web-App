import { StarField } from './components/custom/StarField';
import { Logo } from './components/custom/Logo';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Skills } from './sections/Skills';
import { Cases } from './sections/Cases';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <StarField />
      <Logo />

      <main className="relative z-10">
        <Hero />
        <Features />
        <Skills />
        <Cases />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
