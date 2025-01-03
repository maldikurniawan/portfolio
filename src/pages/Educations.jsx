import React from 'react'
import ExperienceTimeline from '../components/atoms/ExperienceTimelime'

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
        <div id='Educations' className='flex py-20 lg:px-20 flex-col items-center justify-center'>
            <h1 data-aos="fade-right" className='text-3xl font-semibold mb-20 leading-normal text-[#0ea5e9]'>
                My Experience
            </h1>
            <div className="mx-auto mb-10 flex grid-cols-9 flex-col p-2 text-blue-50 md:grid">
                {experience.map((data, index) => (
                    <ExperienceTimeline position={index % 2 == 1} key={index} {...data} />
                ))}
            </div>
        </div>
    )
}

export default Educations