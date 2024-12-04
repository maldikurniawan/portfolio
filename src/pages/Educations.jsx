import React from 'react'

const Educations = () => {
    return (
        <div id='Educations' className='p-20 flex flex-col items-center justify-center'>
            <h1 data-aos="fade-right" className='text-3xl font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>
                Educations
            </h1>
            <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20'>
                <h2 data-aos="fade-down">
                    <div className='min-[500px]:text-[26px] text-xl justify-center text-center font-semibold text-white text-nowrap flex items-center gap-2'>
                        <img
                            src="./assets/logo-unila.png"
                            alt="logo"
                            className="h-8 w-8"
                        />
                        Lampung University
                    </div>
                    <div className='text-center text-[#e1e1e1]'>
                        Informatics Engineering
                    </div>
                    <div className='text-center text-[#d0d0d0]'>
                        Sep 2020 - Dec 2024
                    </div>
                    <div className='text-center text-[#d0d0d0]'>
                        Grade: 3.82 / 4.00
                    </div>
                </h2>
                <h2 data-aos="fade-up">
                    <div className='min-[500px]:text-[26px] text-xl justify-center text-center font-semibold text-white text-nowrap flex items-center gap-2'>
                        <img
                            src="./assets/logo-kominfo.png"
                            alt="logo"
                            className="h-8 w-8"
                        />
                        Kominfo Lampung
                    </div>
                    <div className='text-center text-[#e1e1e1]'>
                        Front-End Dev
                    </div>
                    <div className='text-center text-[#d0d0d0]'>
                        Jul 2023 - Sep 2023
                    </div>
                    <div className='text-center text-[#d0d0d0]'>
                        Grade: 92 / 100
                    </div>
                </h2>
                <h2 data-aos="fade-down">
                    <div className='min-[500px]:text-[26px] text-xl justify-center text-center font-semibold text-white text-nowrap flex items-center gap-2'>
                        <img
                            src="./assets/logo-nf.png"
                            alt="logo"
                            className="h-8 w-8"
                        />
                        NF Computer
                    </div>
                    <div className='text-center text-[#e1e1e1]'>
                        Fullstack Web Dev
                    </div>
                    <div className='text-center text-[#d0d0d0]'>
                        Feb 2023 - Jun 2023
                    </div>
                    <div className='text-center text-[#d0d0d0]'>
                        Grade: 92 / 100
                    </div>
                </h2>
                <h2 data-aos="fade-up">
                    <div className='min-[500px]:text-[26px] text-xl justify-center text-center font-semibold text-white text-nowrap flex items-center gap-2'>
                        <img
                            src="./assets/logo-smalan.png"
                            alt="logo"
                            className="h-8 w-8"
                        />
                        SMAN 9 B. Lampung
                    </div>
                    <div className='text-center text-[#e1e1e1]'>
                        Science
                    </div>
                    <div className='text-center text-[#d0d0d0]'>
                        Aug 2017 - Apr 2020
                    </div>
                    <div className='text-center text-[#d0d0d0]'>
                        Grade: 86 / 100
                    </div>
                </h2>
            </div>
        </div>
    )
}

export default Educations