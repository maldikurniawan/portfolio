import {
    SpeedDial,
    SpeedDialAction,
    SpeedDialContent,
    SpeedDialHandler,
} from '@material-tailwind/react'
import { useEffect, useRef, useState, useContext } from 'react'
import { ThemeContext } from "@/context/ThemeContext";
import { ThemeButton, AudioPlayer, ButtonParticles } from '@/components'
import ruins from "/ruins.mp3";
import { FaGear } from 'react-icons/fa6';
import { AiFillSound } from 'react-icons/ai';

export default function Settings({ setParticlesEnable }) {
    const { colorMode, setColorMode } = useContext(ThemeContext);
    const [particlesEnabled, setParticlesEnabled] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.05);
    const audioRef = useRef(null);

    const toggleParticles = () => {
        setParticlesEnabled((prev) => !prev); // Toggle the state
        setParticlesEnable(!particlesEnabled); // Update the parent state
    };

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio(ruins);
            audioRef.current.addEventListener('ended', () => setIsPlaying(false));
        }

        const audio = audioRef.current;
        audio.volume = 0.05;

        isPlaying ? audio.play() : audio.pause();

        return () => {
            audio.pause();
            audio.removeEventListener('ended', () => setIsPlaying(false));
        };
    }, [isPlaying]);

    const toggle = () => setIsPlaying(!isPlaying);

    return (
        <div className="fixed bottom-6 left-6 hidden w-full items-center space-x-5 md:flex">
            <SpeedDial className="z-10">
                <SpeedDialHandler>
                    <button className="h-16 w-16 cursor-pointer rounded-full border-4 border-black bg-linearBlue duration-150 hover:-rotate-90 md:right-16 md:block">
                        <FaGear className='h-full w-full p-2 animate-spin' />
                    </button>
                </SpeedDialHandler>
                <SpeedDialContent>
                    <SpeedDialAction
                        onClick={() => {
                            setColorMode(colorMode === 'light' ? 'dark' : 'light');
                        }}
                        className="h-16 w-16 cursor-pointer rounded-full border-4 border-black bg-linearBlue duration-150 hover:bg-orange-primary md:right-16 md:block"
                    >
                        <ThemeButton theme={colorMode} />
                    </SpeedDialAction>
                    <SpeedDialAction className="h-16 w-16 cursor-pointer rounded-full border-4 border-black bg-linearBlue duration-150 hover:bg-orange-primary md:right-16 md:block">
                        <AudioPlayer isPlaying={isPlaying} toggle={toggle} />
                    </SpeedDialAction>
                    <SpeedDialAction
                        onClick={toggleParticles}
                        className="h-16 w-16 cursor-pointer rounded-full border-4 border-black bg-linearBlue duration-150 hover:bg-orange-primary md:right-16 md:block"
                    >
                        <ButtonParticles isEnable={particlesEnabled} />
                    </SpeedDialAction>
                </SpeedDialContent>
            </SpeedDial>
            {isPlaying && (
                <div className="absolute flex translate-x-12 items-center rounded-md border-4 border-black bg-linearBlue px-3 shadow-button-card gap-2">
                    <AiFillSound className='h-8 w-8' />
                    <input
                        type="range"
                        min="0"
                        max="100"
                        className="h-8 w-20 accent-white"
                        value={volume * 100}
                        onChange={(e) => {
                            setVolume(parseInt(e.target.value) / 100);
                            audioRef.current.volume = parseInt(e.target.value) / 100;
                        }}
                    />
                </div>
            )}
        </div>
    );
}
