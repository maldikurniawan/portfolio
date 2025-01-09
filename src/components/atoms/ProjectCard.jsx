import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { HiMiniMagnifyingGlassPlus } from 'react-icons/hi2';

export default function ProjectCard({
    image,
    title,
    description,
    repo,
    onModalClick,
    type,
}) {
    return (
        <motion.div
            whileInView={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="group relative h-36 w-[280px] cursor-pointer overflow-hidden rounded-lg border-2 border-black shadow-paleBlue dark:shadow-linearBlue object-cover shadow-lg sm:w-[360px] lg:h-44"
        >
            <img
                src={image}
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
                alt="foto"
            />
            <div className="absolute right-0 top-0 z-10 flex h-1/4 w-full -translate-y-10 items-center justify-end gap-2 p-2 transition-all group-hover:translate-y-0">
                {onModalClick && (
                    <div
                        onClick={onModalClick}
                        className="cursor-pointer rounded-full border-2 border-black bg-linearBlue/90 p-1.5 text-sm text-paleBlue hover:bg-linearBlue lg:p-2 lg:text-base"
                    >
                        <HiMiniMagnifyingGlassPlus />
                    </div>
                )}
                {repo && (
                    <a
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer rounded-full border-2 border-black bg-linearBlue/90 p-1.5 text-sm text-paleBlue hover:bg-linearBlue lg:p-2 lg:text-base"
                    >
                        <FaGithub />
                    </a>
                )}
            </div>
            <div className="absolute bottom-0 h-10 w-full border-t-2 border-black bg-linearBlue/90 p-2 transition-all duration-300 group-hover:h-[60%] lg:group-hover:h-2/4">
                <div className="h-20">
                    <div className="line-clamp-1 font-bold text-paleBlue group-hover:line-clamp-2">
                        {title}{' '}
                        <span className="w-full rounded-lg text-xs text-paleBlue">
                            {'('}{type}{')'}
                        </span>
                    </div>
                    <div className="hidden h-full text-xs font-normal text-paleBlue group-hover:block leading-4">
                        {description}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
