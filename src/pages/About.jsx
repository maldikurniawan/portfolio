import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  return (

    <div id='About' className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
      <img
        data-aos="fade-down"
        src="./assets/profile.jpg"
        width={200}
        height={200}
        className='rounded border-2 p-1 mt-6 border-fuchsia-500 img_glow'
        alt=""
      />
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-fuchsia-100'>
        <h1 data-aos="fade-right" className='text-3xl font-semibold mb-8 leading-normal text-fuchsia-500 uppercase text-nowrap'>
          About Me
        </h1>
        <p data-aos="fade-left">
          Welcome to my portfolio! I am a dedicated and passionate Front-End Web Developer with a keen eye for design and a strong foundation in web technologies. Explore my work to see how I bring ideas to life through code.
        </p>
        <div className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            <div className='flex space-x-2 gap-2'>
              <button className='neno-button shadow-xl hover:shadow-fuchsia-800/50 text-fuchsia-100 border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-7 uppercase relative overflow-hidden'>
                Resume
              </button>
              <a href='mailto:akurniawan2102@gmail.com' className='neno-button shadow-xl hover:shadow-fuchsia-800/50 text-fuchsia-100 border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-11 uppercase relative overflow-hidden'>
                Hire
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About