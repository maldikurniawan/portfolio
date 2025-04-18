import { useEffect, useState, Fragment } from "react";
import { FaArrowUp } from "react-icons/fa";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/react"
import {
  Nav,
  Footer,
  Settings,
  Particles,
} from '@/components'
import {
  About,
  Skills,
  Projects,
  Educations,
} from '@/pages'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [particlesEnable, setParticlesEnable] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });

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
    <Fragment>
      <Analytics/>
      <ThemeProvider>
        <div className="relative overflow-x-hidden">
          {particlesEnable && <Particles />}
          <div
            style={{
              maskImage: `linear-gradient(to left top, transparent, black)`,
              WebkitMaskImage: `linear-gradient(to left top, transparent, black)`,
            }}
            className="absolute z-10 inset-0 h-full w-full bg-white/50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-black/50 dark:bg-[linear-gradient(to_right,#FFF_1px,transparent_1px),linear-gradient(to_bottom,#FFF_1px,transparent_1px)]"
          ></div>
          <div className="relative z-20">
            <Nav />
            <About />
            <Educations />
            <Skills />
            <Projects />
            <Settings setParticlesEnable={setParticlesEnable} />
            <Footer />
            {showScrollToTop && (
              <button
                onClick={scrollToTop}
                className='opacity-100 z-40 bottom-6 right-6'
                style={{
                  position: 'fixed',
                  color: '#FFF',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>
                <FaArrowUp className='w-10 h-10 md:w-16 md:h-16 p-2 md:text-black bg-[#0284c7] md:bg-linearBlue md:border-4 border-black rounded-full' />
              </button>
            )}
          </div>
        </div>
      </ThemeProvider>
    </Fragment>
  )
}

export default App
