'use client'
import useRotatingAnimation from '@/hooks/useRotating'
import Image from 'next/image'
import React from 'react'
import myImg from '@/../public/imgs/myPhoto.webp'

const ProfileImg = () => {
    const ellipseRef = useRotatingAnimation()
    return (
        <div className="flex items-center justify-center">
            <div className="relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
                <Image
                    src={myImg}
                    alt="Sherif Alaa - Front-End Developer"
                    className="absolute top-0 left-0 h-full w-full object-cover p-4
                    size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem] rounded-full"
                />
                {/* SVG Ellipse */}
                <div
                    ref={ellipseRef}
                    className="absolute top-0 left-0 h-full w-full will-change-transform"
                >
                    <svg
                        className="h-full w-full"
                        viewBox="0 0 412 413"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="206"
                            cy="206.401"
                            r="204.5"
                            stroke="#18F2E5"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeDasharray="18 36 54 72"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default ProfileImg
