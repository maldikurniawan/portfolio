import React, { useState } from 'react';
import Modal from './Modal';

const Projects = () => {
  const projectData = [
    {
      title: 'Landing Kos',
      image: './assets/landing-kos.jpg',
      link: 'https://rumahklatenasri.netlify.app/',
      language: 'ReactJS, Tailwind CSS',
      description: 'A beautiful landing page for promoting rental properties.',
    },
    {
      title: 'Quran App',
      image: './assets/quranapp.jpg',
      link: 'https://maldikurniawan.github.io/quranapp/',
      language: 'ReactJS, Tailwind CSS',
      description: 'An interactive Quran application with a modern design.',
    },
    {
      title: 'Sistem Buku Ilmiah',
      image: './assets/bukuilmiah.jpg',
      link: null,
      language: 'Laravel, MySQL',
      description: 'A system for managing and publishing scientific books.',
    },
    {
      title: 'CACHESIM',
      image: './assets/cache.jpg',
      link: 'https://fe-cache-proxy.vercel.app/',
      language: 'ReactJS, Tailwind CSS, Django',
      description: 'A monitoring system for cache proxy servers.',
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
    <div id="Projects" className="p-20 flex flex-col items-center justify-center">
      <h1
        data-aos="fade-right"
        className="text-3xl font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        Projects
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
        {projectData.map((project, index) => (
          <div key={index} className="relative group">
            <img
              className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow cursor-pointer"
              src={project.image}
              alt={project.title}
            />
            <div onClick={() => handleImageClick(project)} className="absolute cursor-pointer inset-0 flex items-center justify-center rounded-3xl text-center bg-black bg-opacity-80 font-bold text-fuchsia-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.title}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedProject && (
          <div className="p-4 sm:p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl mx-auto">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="rounded-lg mb-4 w-full object-cover"
            />
            <h2 className="text-lg sm:text-xl font-bold mb-2 text-fuchsia-800 text-center">
              {selectedProject.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mb-4 text-center">
              {selectedProject.description}
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-4 text-center">
              <strong>Languages:</strong> {selectedProject.language}
            </p>
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-fuchsia-500 text-white px-4 py-2 rounded-lg hover:bg-fuchsia-600 transition duration-200"
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
