import React from 'react'

const MagicButton = ({
    title,
    icon,
    postion,
    handleClick,
    otherClasses,
}: {
    title: string
    icon: React.ReactNode
    postion: 'left' | 'right'
    handleClick?: () => void
    otherClasses?: string
}) => {
    return (
        <button
            onClick={handleClick}
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] 
                 focus:outline-none focus:ring-2 focus:ring-slate-400 
                 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
            <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
                   bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
            />
            <span
                className={`inline-flex h-full w-full cursor-pointer items-center justify-center 
                    rounded-full bg-slate-950 px-1 sm:px-3 py-1 text-xs sm:text-sm font-medium text-white 
                    backdrop-blur-3xl gap-2 ${otherClasses || ''}`}
            >
                {postion === 'left' && icon}
                {title}
                {postion === 'right' && icon}
            </span>
        </button>
    )
}

export default MagicButton