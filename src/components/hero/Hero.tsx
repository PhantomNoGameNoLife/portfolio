import React from 'react'
import { Spotlight } from '../ui/spotlight'
import { GridBack } from '../ui/GridBack'
import { TextGenerateEffect } from '../ui/text-generate-effect'
import Link from 'next/link'
import MagicButton from '../ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import AnimatedDownloadCvButton from '../ui/DownloadCvBtn'
import HireMe from '../ui/HireMe'
import SocialLinks from '../ui/SocialMedia'
import ProfileImg from '../ui/ProfileImg'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-dvh' fill='white' />
            <Spotlight className='top-10 left-full h-[80dvh] w-[50dvw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80dvh] w-[50dvw]' fill='blue' />
            <GridBack />
            <div className="flex flex-col gap-y-4 lg:flex-row-reverse lg:justify-between">
                <ProfileImg />
                <div className="flex justify-center lg:justify-start relative mb-20 z-10">
                    <div className='max-w-[89dvw] md:max-w-2xl flex flex-col items-center justify-center lg:justify-start lg:items-start'>
                        <span className="block text-xl md:text-2xl text-muted-foreground mb-2 tracking-widest">
                            {`Hello, I'm`}
                        </span>
                        <h1 className='block text-3xl md:text-4xl lg:text-5xl
                        bg-clip-text text-transparent
                        bg-gradient-to-r
                        from-primary to-purple-500
                        whitespace-nowrap overflow-hidden
                        border-r-4 border-transparent'>Sherif Alaa</h1>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 bg-clip-text text-transparent
                        bg-gradient-to-r
                        from-foreground to-muted-foreground">
                            Front-End Developer
                        </h2>
                        <TextGenerateEffect className='text-center lg:text-start lg:!max-w-lg' duration={0}
                            words={`I'm a front-end developer specializing in React and Next.js, with strong skills in TypeScript, Tailwind CSS, Redux Toolkit, and React Query. I enjoy building fast, modern web applications with smooth UI using Framer Motion, and integrating secure authentication and real-time features with NextAuth and Firebase.`}
                        />
                        <div className="flex items-center mt-4 gap-1.5 sm:gap-3 flex-wrap justify-center">
                            <HireMe />
                            <AnimatedDownloadCvButton />
                            <Link href='#works' className='block'>
                                <MagicButton postion='right' icon={<FaLocationArrow />} title='Show my work' />
                            </Link>
                        </div>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
