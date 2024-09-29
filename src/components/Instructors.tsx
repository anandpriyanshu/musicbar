'use client'

import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip';

const Instructors = () => {

    const instructors = [
        {
            id: 1,
            name: 'Elen Davis',
            designation: 'Vocal Coach',
            image:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 2,
            name: 'Andrew Thomas',
            designation: 'Guitar Instructor',
            image:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
        },
        {
            id: 3,
            name: 'Juli Sweet',
            designation: 'Piano Teacher',
            image:
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        },
        {
            id: 4,
            name: 'Nick Gomez',
            designation: 'Drumming Expert',
            image:
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        },
    ];
    return (
        <>
            <div className='relative h-[40rem] flex justify-center items-center overflow-hidden '>

                <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
                    <h2 className='mt-20 md:mt-0 text-3xl md:text-4xl lg:text-7xl text-white font-bold mb-8 '> Our True Instructors</h2>
                    <p className='text-base md:text-lg text-white text-center mb-4 '>Discover the talented professionals who will guide your musical journey</p>

                    <div className='flex flex-row justify-center items-center mb-10 w-full'>
                        <AnimatedTooltip items={instructors} />
                    </div>
                </WavyBackground>
            </div>

        </>
    )
}

export default Instructors