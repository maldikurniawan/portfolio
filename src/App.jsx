import { useCallback, useEffect, useState } from "react";
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
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

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

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const optionparticles = {
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#c026d3",
      },
      links: {
        color: "#c026d3",
        distance: 100,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 500,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
  };

  return (
    <div className="relative overflow-x-hidden">
      <Particles
        className="absolute inset-0 z-10"
        id="tsparticles"
        init={particlesInit}
        options={optionparticles}
      />
      <div
        style={{
          maskImage: `linear-gradient(to left top, transparent, black)`,
          WebkitMaskImage: `linear-gradient(to left top, transparent, black)`,
        }}
        className="absolute z-10 inset-0 h-full w-full bg-white/50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      ></div>
      <div className="relative z-20">
        <Nav />
        <About />
        <Educations />
        <Skills />
        <Projects />
        <Minigames />
        <Footer />
      </div>
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
          <FaArrowUp className='w-10 h-10 p-2 bg-fuchsia-500 rounded-full' />
        </button>
      )}
    </div>
  )
}

export default App
