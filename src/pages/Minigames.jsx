import React, { useState } from 'react';
import { Modal } from '@/components';

const Minigames = () => {
    const minigameData = [
        {
            title: 'Magic Memory',
            image: './assets/magicmemmory.jpg',
            link: 'https://maldikurniawan.github.io/magic-memory/',
            language: 'ReactJS, Tailwind CSS',
            description:
                'Test your memory skills with this thrilling magic-themed game! Match cards to reveal hidden magical symbols. With an enchanting design and responsive gameplay, its perfect for players of all ages.',
        },
        {
            title: '2048',
            image: './assets/2048.jpg',
            link: 'https://maldikurniawan.github.io/2048-animated/',
            language: 'ReactJS, SCSS',
            description:
                'Dive into the world of logic and strategy in this animated version of the classic 2048 puzzle game. Slide numbered tiles and merge them to reach the elusive 2048 tile while enjoying smooth animations.',
        },
        {
            title: 'Flappy Bird',
            image: './assets/manuk.jpg',
            link: 'https://manuklayang.netlify.app/',
            language: 'ReactJS, CSS, Redux',
            description:
                'Guide the flappy bird through an endless obstacle course. Avoid pipes and collect points by navigating through narrow gaps in this fun, fast-paced game!',
        },
        {
            title: 'Shooting Game',
            image: './assets/shooting.jpg',
            link: 'https://maldikurniawan.github.io/r3f-playroom-multiplayer-shooter-game/',
            language: 'ReactJS, Three.js',
            description:
                'Step into a multiplayer 3D shooting arena with this action-packed game! Powered by Three.js, it delivers immersive graphics, interactive gameplay, and endless hours of competitive fun.',
        },
    ];

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedGame, setSelectedGame] = useState(null);

    const handleImageClick = (game) => {
        setSelectedGame(game);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedGame(null);
    };

    return (
        <div id="Minigames" className="p-20 flex flex-col items-center justify-center">
            <h1
                data-aos="fade-right"
                className="text-3xl font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
            >
                Minigames
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10 mb-20">
                {minigameData.map((game, index) => (
                    <div key={index} className="relative group">
                        <img
                            className="text-[26px] flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow cursor-pointer"
                            src={game.image}
                            alt={game.title}
                            onClick={() => handleImageClick(game)}
                        />
                        <div
                            onClick={() => handleImageClick(game)}
                            className="absolute cursor-pointer inset-0 flex items-center justify-center rounded-3xl text-center bg-black bg-opacity-80 font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            {game.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {selectedGame && (
                    <div className="p-4 sm:p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto">
                        <img
                            src={selectedGame.image}
                            alt={selectedGame.title}
                            className="rounded-lg mb-4 w-full object-cover"
                        />
                        <h2 className="text-lg sm:text-xl font-bold mb-2 text-fuchsia-600 text-center">
                            {selectedGame.title}
                        </h2>
                        <p className="text-sm sm:text-base text-gray-700 mb-4 text-justify">
                            {selectedGame.description}
                        </p>
                        <p className="text-sm sm:text-base text-gray-600 mb-4 text-left">
                            <strong>Languages:</strong> {selectedGame.language}
                        </p>
                        {selectedGame.link && (
                            <a
                                href={selectedGame.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center bg-fuchsia-500 text-white px-4 py-2 rounded-lg hover:bg-fuchsia-600 transition duration-200"
                            >
                                Play Minigame
                            </a>
                        )}
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Minigames;
