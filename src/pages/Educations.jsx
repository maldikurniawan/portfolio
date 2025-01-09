import React from 'react'
import ExperienceTimeline from '../components/atoms/ExperienceTimelime'
import { FcGraduationCap } from 'react-icons/fc'
import { TextSection } from '@/components'

const Educations = () => {
    const experience = [
        {
            title: 'Fullstack Web Developer',
            company: 'NF Computer',
            type: 'Education',
            description:
                'Completed a comprehensive Fullstack Developer training using Laravel, gaining a deep understanding of web development principles from both frontend to backend. The training covered essential Laravel concepts, API integration, and best practices for building scalable, efficient web applications. I developed the skills necessary to create a robust web-based scheduling system, ensuring seamless functionality and optimized performance throughout the development process.',
            date: 'Febuary 2023 - June 2023',
            url: '',
        },
        {
            title: 'Frontend Developer',
            company: 'DISKOMINFOTIK Lampung',
            type: 'Work',
            description:
                'Developed an Integrated Competency Development System for State Civil Apparatus (ASN) using the Laravel platform, designed to efficiently manage, track, and enhance the competencies of ASNs within an organization. The system provides a comprehensive solution for fostering continuous professional growth, aligning skills with organizational needs, and ensuring effective competency management for ASNs at all levels.',
            date: 'June 2023 - August 2023',
            url: '',
        },
        {
            title: 'Web Developer',
            company: 'PT. Queen Network Nusantara',
            type: 'Work',
            description:
                'As a Frontend Developer at PT Queen Network Nusantara, I built responsive landing pages and customized content management systems (CMS) using ReactJS and Tailwind CSS. I focused on creating user-friendly designs, optimizing performance, and collaborating with teams to deliver seamless and efficient web solutions that supported the companys digital growth.',
            date: 'March 2024 - Present',
            url: '',
        },
    ]

    return (
        <div id='Educations' className='flex py-20 lg:px-20 flex-col bg-gradient-to-b dark:from-black dark:via-paleBlue/90 dark:to-black items-center justify-center'>
            <div data-aos="fade-right" data-aos-delay="100" className='text-3xl font-semibold mb-20 leading-normal text-paleBlue'>
                <TextSection icon={<FcGraduationCap />} text="My Experience" />
            </div>
            <div className="mx-auto mb-10 flex grid-cols-9 flex-col p-2 text-paleBlue/50 md:grid">
                {experience.map((data, index) => (
                    <ExperienceTimeline position={index % 2 == 1} key={index} {...data} />
                ))}
            </div>
        </div>
    )
}

export default Educations