import React from 'react'
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoPostgresql,
} from 'react-icons/bi'
import {
  SiNextdotjs,
  SiLaravel,
  SiTailwindcss,
  SiMysql,
  SiDjango,
  SiExpo,
  SiVercel,
} from 'react-icons/si'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { TextSection } from '@/components'
import { FcAndroidOs } from 'react-icons/fc'

const Skills = () => {
  const fadeInAnimationVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.05 * index,
      },
    }),
  }

  const techIcons = [
    {
      name: 'JavaScript',
      icons: BiLogoJavascript,
    },
    {
      name: 'TypeScript',
      icons: BiLogoTypescript,
    },
    {
      name: 'Expo',
      icons: SiExpo,
    },
    {
      name: 'React',
      icons: BiLogoReact,
    },
    {
      name: 'NextJS',
      icons: SiNextdotjs,
    },
    {
      name: 'Laravel',
      icons: SiLaravel,
    },
    {
      name: 'Django',
      icons: SiDjango,
    },
    {
      name: 'Tailwind',
      icons: SiTailwindcss,
    },
    {
      name: 'Vercel',
      icons: SiVercel,
    },
    {
      name: 'MySQL',
      icons: SiMysql,
    },
    {
      name: 'PostgreSQL',
      icons: BiLogoPostgresql,
    },
  ]

  return (
    <div id='Skills' className='py-20 lg:px-20 flex flex-col bg-gradient-to-b from-linearBlue/40 via-white to-linearBlue/40 min-h-screen items-center justify-center'>
      <div data-aos="fade-right" className='text-3xl font-semibold mb-20 leading-normal text-paleBlue'>
        <TextSection icon={<FcAndroidOs />} text="Tech That I Use" />
      </div>
      <div className="flex flex-wrap justify-center justify-items-center gap-5 xl:gap-10 xl:px-40 pb-10">
        {/* <TechTabs /> */}
        {techIcons.map((data, index) => {
          const Icons = data.icons
          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="animate"
              variants={fadeInAnimationVariants}
              viewport={{ once: true }}
              custom={index}
              className={twMerge(
                `flex h-24 w-24 flex-col items-center justify-center gap-y-2 rounded-2xl border-2 bg-white duration-150 hover:scale-105 hover:border-paleBlue hover:shadow-paleBlue hover:shadow-lg md:h-36 md:w-36 md:p-4`,
              )}
            >
              <Icons
                className={twMerge(`text-4xl text-paleBlue md:text-6xl`)}
              />
              <div className="text-base font-bold text-paleBlue md:text-xl">
                {data.name}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills