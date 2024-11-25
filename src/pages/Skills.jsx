import React from 'react'
import { FaLaravel, FaReact } from 'react-icons/fa'
import { TbBrandDjango, TbBrandNextjs } from 'react-icons/tb'

const Skills = () => {
  return (
    <div id='Skills' className='p-20 flex flex-col items-center justify-center'>
      <h1 data-aos="fade-right" className='text-3xl font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Skills</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>
        <h2 data-aos="fade-up" className='text-[26px] flex items-center gap-2 justify-center font-semibold text-fuchsia-100 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>
          <FaLaravel />Laravel
        </h2>
        <h2 data-aos="fade-down" className='text-[26px] flex items-center gap-2 justify-center font-semibold text-fuchsia-100 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>
          <TbBrandDjango />Django
        </h2>
        <h2 data-aos="fade-up" className='text-[26px] flex items-center gap-2 justify-center font-semibold text-fuchsia-100 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>
          <TbBrandNextjs />NextJS
        </h2>
        <h2 data-aos="fade-down" className='text-[26px] flex items-center gap-2 justify-center font-semibold text-fuchsia-100 rounded-ss-3xl rounded-br-3xl h-36 w-44 border-2 border-fuchsia-800 b_glow'>
          <FaReact />ReactJS
        </h2>
      </div>
    </div>
  )
}

export default Skills