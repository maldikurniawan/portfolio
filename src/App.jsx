import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import {
  Nav,
  Footer,
} from '@/components'
import {
  About,
  Minigames,
  Skills,
  Projects,
  Educations,
} from '@/pages'

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-800 overflow-x-hidden">
      <div id="stars"></div>
      <Nav />
      <About />
      <Educations />
      <Skills />
      <Projects />
      <Minigames />
      <Footer />
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className='opacity-100 z-40'
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            color: '#FFF',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
          <FaArrowUp className='w-10 h-10 p-2 bg-fuchsia-600 rounded-full' />
        </button>
      )}
      <div id="stars2"></div>
    </div>
  )
}

export default App
