import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-linearBlue dark:bg-paleBlue dark:text-linearBlue text-black lg:px-20 px-4 py-4'>
      <div className="flex sm:flex-row flex-col gap-1 text-xs md:text-sm justify-between w-full font-semibold">
        <span className="my-auto">© {currentYear} - Aldi. All Rights Reserved.</span>
        <div className="flex gap-1 sm:gap-2">
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