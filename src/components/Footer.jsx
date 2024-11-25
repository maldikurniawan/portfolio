import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-fuchsia-100 lg:px-20 px-4 py-2'>
      <div className="py-2 text-xs md:text-sm justify-between w-full font-semibold flex">
        <div className='my-auto'>
          Designed by Aldi
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/maldikurniawan" target="_blank">
            <FaGithub size={26} />
          </a>
          <a href="https://www.linkedin.com/in/m-aldi-kurniawan-23a781291/" target="_blank">
            <FaLinkedin size={26} />
          </a>
          <a href="https://www.instagram.com/aldiknn_/" target="_blank">
            <FaInstagram size={26} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=62895610107247" target="_blank">
            <FaWhatsapp size={26} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer