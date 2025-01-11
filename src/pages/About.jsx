import React from 'react'
import { ScrambleText } from '@/components'
import { TypeAnimation } from 'react-type-animation'

const About = () => {
  return (
    <div id='About' className='lg:px-[180px] px-10 bg-gradient-to-b from-linearBlue/40 via-white to-linearBlue/40 dark:from-black dark:via-paleBlue/90 dark:to-black min-h-screen lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
      <img
        data-aos="fade-down"
        data-aos-delay="1000"
        src="./assets/profile.jpg"
        width={200}
        height={200}
        className='rounded border-2 p-1 mt-6 border-black img_glow'
        alt=""
      />
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-paleBlue dark:text-linearBlue'>
        <div data-aos="fade-right" data-aos-delay="100" className='text-xl md:text-3xl font-semibold text-paleBlue dark:text-linearBlue text-nowrap'>
          <ScrambleText>M. Aldi Kurniawan</ScrambleText>
        </div>
        <div data-aos="fade-right" data-aos-delay="1500" className='text-xl font-bold md:text-3xl my-4'>
          I&apos;m{' '}
          <TypeAnimation
            sequence={[
              'Web Developer',
              5000,
              'Programmer',
              5000,
              'Frontend Developer',
              5000,
            ]}
            wrapper="span"
            speed={40}
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '1em', display: 'inline-block' }}
            className="text-[#0284c7]"
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="2000" className='text-justify'>
          I am a dedicated and passionate Front-End Web Developer with a keen eye for design and a strong foundation in modern web technologies. My focus lies in crafting seamless user experiences using ReactJS and NextJS, leveraging their power to build dynamic, responsive, and high-performance web applications. Explore my work to see how I bring ideas to life through clean code, innovative design, and a commitment to excellence.
        </div>
        <div className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            <div className='flex space-x-4'>
              <button
                className="neno_button font-bold hover:text-linearBlue text-paleBlue dark:text-linearBlue border-2 hover:bg-paleBlue border-black rounded-lg py-4 px-6 uppercase relative overflow-hidden w-36 text-center"
              >
                Resume
              </button>
              <a
                href="mailto:akurniawan2102@gmail.com"
                className="neno_button font-bold hover:text-linearBlue text-paleBlue dark:text-linearBlue border-2 hover:bg-paleBlue border-black rounded-lg py-4 px-6 uppercase relative overflow-hidden w-36 text-center"
              >
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