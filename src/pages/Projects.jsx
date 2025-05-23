import React, { useState } from 'react';
import { Modal, ProjectCard, TextSection } from '@/components';
import { FcSmartphoneTablet } from 'react-icons/fc';

const Projects = () => {
  const projectData = [
    {
      title: 'Landing Kos',
      type: 'Website',
      img: './assets/landing-kos.jpg',
      link: 'https://rumahklatenasri.netlify.app/',
      repo: 'https://github.com/maldikurniawan/landing-kos',
      language: 'ReactJS, Tailwind CSS, AOS',
      description:
        'A beautifully designed landing page for showcasing rental properties. This project features responsive layouts, modern UI elements, and interactive components to attract potential tenants. It’s optimized for performance and accessibility.',
    },
    {
      title: 'Quran App',
      type: 'Website',
      img: './assets/quranapp.png',
      link: 'https://alquranapp.vercel.app/',
      repo: 'https://github.com/maldikurniawan/quranapp',
      language: 'ReactJS, Tailwind CSS',
      description:
        'An engaging Quran application offering a clean and intuitive design. Users can browse surahs, ayahs, and translations seamlessly. The app includes a bookmark feature and dark mode for enhanced usability.',
    },
    {
      title: 'Wed Template',
      type: 'Website',
      img: './assets/wedding.jpg',
      link: 'https://wedcraft.netlify.app/',
      repo: 'https://github.com/maldikurniawan/wedding',
      language: 'ReactJS, Tailwind CSS',
      description:
        'A sophisticated system designed for managing wedding-related data and invitations. It allows for efficient customization and deployment, making it a perfect solution for modern wedding websites.',
    },
    {
      title: 'CACHESIM',
      type: 'Website',
      img: './assets/cache.jpg',
      link: 'https://github.com/maldikurniawan/fe-cache-proxy',
      repo: 'https://github.com/maldikurniawan/fe-cache-proxy',
      language: 'ReactJS, Tailwind CSS, Django',
      description:
        'A robust monitoring system tailored for cache proxy servers. This project features real-time analytics, server switching, and comprehensive visualizations for monitoring server performance. It is an invaluable tool for IT administrators.',
    },
    {
      title: 'Magic Memory',
      type: 'Game',
      img: './assets/match-game.png',
      link: 'https://maldikurniawan.github.io/magic-memory/',
      repo: 'https://github.com/maldikurniawan/magic-memory',
      language: 'ReactJS, Tailwind CSS',
      description:
        'Test your memory skills with this thrilling magic-themed game! Match cards to reveal hidden magical symbols. With an enchanting design and responsive gameplay, its perfect for players of all ages.',
    },
    {
      title: '2048',
      type: 'Game',
      img: './assets/2048.png',
      link: 'https://maldikurniawan.github.io/2048-animated/',
      repo: 'https://github.com/maldikurniawan/2048-animated',
      language: 'ReactJS, SCSS',
      description:
        'Dive into the world of logic and strategy in this animated version of the classic 2048 puzzle game. Slide numbered tiles and merge them to reach the elusive 2048 tile while enjoying smooth animations.',
    },
    {
      title: 'Flappy Bird',
      type: 'Game',
      img: './assets/manuk-layang.png',
      link: 'https://manuklayang.netlify.app/',
      repo: 'https://github.com/maldikurniawan/flappy-bird',
      language: 'ReactJS, CSS, Redux',
      description:
        'Guide the flappy bird through an endless obstacle course. Avoid pipes and collect points by navigating through narrow gaps in this fun, fast-paced game!',
    },
    {
      title: 'Tetris',
      type: 'Game',
      img: './assets/tetris.png',
      link: 'https://tetrislite.netlify.app/',
      repo: 'https://github.com/maldikurniawan/tetris',
      language: 'ReactJS, Tailwind CSS',
      description:
        'A modern and minimalist implementation of the classic Tetris game, built with ReactJS and styled using Tailwind CSS. Enjoy seamless gameplay with an elegant design and responsive layout.',
    },
    {
      title: 'GRAHASIP',
      type: 'Website',
      img: './assets/grahasip.jpg',
      link: 'https://grahasip.vercel.app/',
      repo: 'https://grahasip.vercel.app/',
      language: 'NextJS, Tailwind CSS, Django',
      description:
        "Graha Skrip Infra Prima is a website designed to promote products manufactured by the company. It serves as an online platform to showcase their offerings, attract customers, and provide detailed information about their products and services.",
    },
    {
      title: 'Hack Template',
      type: 'Website',
      img: './assets/heker.jpg',
      link: 'https://heker.vercel.app/',
      repo: 'https://github.com/maldikurniawan/',
      language: 'ReactJS, Tailwind CSS, Typescript, Framer Motion',
      description:
        "Hack Template is a hacker-themed website template built using ReactJS, Tailwind CSS, and TypeScript. It features a modern and edgy design, perfect for creating websites or applications with a tech-savvy and cyberpunk vibe.",
    },
    {
      title: 'SIPELAN',
      type: 'Android',
      img: './assets/sipelan.png',
      link: 'https://github.com/maldikurniawan/sipelan',
      repo: 'https://github.com/maldikurniawan/sipelan',
      language: 'Laravel, Bootstrap 5, MySQL',
      description:
        "SIPELAN is a system designed to manage academic activities efficiently. Built with Laravel, Bootstrap 5, and MySQL, this system streamlines processes such as scheduling, attendance tracking, and other essential tasks related to academic operations.",
    },
    {
      title: 'Anilist',
      type: 'Website',
      img: './assets/animlist.png',
      link: 'https://animlist.vercel.app/',
      repo: 'https://github.com/maldikurniawan/anilist',
      language: 'ReactJS, Tailwind CSS, Typescript',
      description:
        "Anilist is a web application that allows users to view a list of anime and movies. Built with ReactJS, Tailwind CSS, and TypeScript, it provides a simple and seamless browsing experience.",
    },
    {
      title: 'Storeku',
      type: 'Website',
      img: './assets/storeku.png',
      link: 'https://storeku.vercel.app/',
      repo: 'https://github.com/maldikurniawan/topup-store',
      language: 'ReactJS, Tailwind CSS, Typescript, Framer Motion',
      description:
        "Storeku is a web application for purchasing game top-ups and digital products. Built with ReactJS, Tailwind CSS, and TypeScript, it offers a seamless and user-friendly experience for browsing and completing transactions.",
    },
    {
      title: 'Chessu',
      type: 'Website',
      img: './assets/chessu.png',
      link: 'https://chessu.netlify.app/',
      repo: 'https://github.com/maldikurniawan/catur',
      language: 'ReactJS, Tailwind CSS',
      description:
        "Chessu is a web-based chess game built with ReactJS and Tailwind CSS. It allows players to enjoy classic chess matches locally with friends on the same device.",
    },
    {
      title: 'SIRENBANGKOM',
      type: 'Website',
      img: './assets/sirenbangkom.png',
      link: 'https://github.com/MKhalfanRD/sirenbangkom',
      repo: 'https://github.com/MKhalfanRD/sirenbangkom',
      language: 'Laravel, Bootstrap 5, MySQL',
      description:
        "SIRENBANGKOM is a web-based system for planning and managing competency development for ASN (State Civil Apparatus). Built with Laravel, Bootstrap 5, and MySQL, it helps government agencies identify training needs, propose development programs, and track progress. The system makes it easier to improve the skills and performance of civil servants.",
    },
    {
      title: 'SICERDAS',
      type: 'Website',
      img: './assets/sicerdas.jpg',
      link: 'https://sicerdas.vercel.app/',
      repo: 'https://sicerdas.vercel.app/',
      language: 'ReactJS, Tailwind CSS, Typescript, OpenRouterAI',
      description:
        "SICERDAS is a web application that utilizes OpenRouterAI to provide answers to user questions. Built with ReactJS, Tailwind CSS, and TypeScript, it offers a simple and intuitive interface for users to interact with the AI model.",
    },
    {
      title: 'RostGram',
      type: 'Website',
      img: './assets/rostgram.jpg',
      link: 'https://rostgram.vercel.app/',
      repo: 'https://rostgram.vercel.app/',
      language: 'NextJS, Tailwind CSS, Typescript, OpenRouterAI, Framer Motion, Apify',
      description:
        "RostGram is a web application that allows users to scrape Instagram data using OpenRouterAI and Apify. Built with ReactJS, Tailwind CSS, and TypeScript, it provides a user-friendly interface for extracting and analyzing Instagram content.",
    },
    {
      title: 'Animiru',
      type: 'Website',
      img: './assets/animiru.jpg',
      link: 'https://animiru.vercel.app/',
      repo: 'https://animiru.vercel.app/',
      language: 'NextJS, Tailwind CSS, Typescript, NodeJS, Framer Motion',
      description:
        "Animiru is a web application that allows users to watch anime online. Built with NextJS, Tailwind CSS, and TypeScript, it provides a seamless and user-friendly experience for browsing and streaming anime content.",
    },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div id="Projects" className='py-20 lg:px-20 bg-gradient-to-b dark:from-black dark:via-paleBlue/90 dark:to-black flex flex-col min-h-screen items-center justify-center'>
      <div data-aos="fade-right" data-aos-delay="100" className='text-3xl z-10 font-semibold mb-20 leading-normal text-paleBlue'>
        <TextSection icon={<FcSmartphoneTablet />} text="My Project" />
      </div>
      <div className="flex flex-wrap justify-center justify-items-center gap-6">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.img}
            title={project.title}
            type={project.type}
            description={project.description}
            repo={project.repo}
            onModalClick={() => handleImageClick(project)}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedProject && (
          <div className="p-4 sm:p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto">
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="rounded-lg mb-4 w-full object-cover"
            />
            <h2 className="text-lg sm:text-xl font-bold mb-2 text-paleBlue text-center">
              {selectedProject.title}
            </h2>
            <div className="text-sm sm:text-base text-paleBlue mb-4 text-justify">
              {selectedProject.description}
            </div>
            <div className="text-sm sm:text-base text-paleBlue mb-4 text-left">
              <strong>Languages:</strong> {selectedProject.language}
            </div>
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-paleBlue/90 text-white px-4 py-2 rounded-lg hover:bg-paleBlue transition duration-200"
              >
                Visit Project
              </a>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Projects;
