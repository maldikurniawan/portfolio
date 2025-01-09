import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

export default function TextSection({ classNames, text, icon }) {
    return (
        <div className={twMerge('relative font-semibold xl:text-xl', classNames)}>
            <div className="relative mx-auto w-fit text-2xl text-paleBlue dark:text-linearBlue md:text-4xl">
                <motion.span
                    whileInView={{ width: '100%' }}
                    initial={{ width: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 -z-10 h-6 w-3/4 -translate-x-3 -rotate-2 rounded-md bg-gradient-to-r from-[#0284c7] to-transparent"
                ></motion.span>
                <div className='flex items-center gap-2'>
                    <motion.span className="text-3xl md:text-[48px]">{icon}</motion.span>
                    <span>{text}</span>
                </div>
            </div>
        </div>
    );
}
