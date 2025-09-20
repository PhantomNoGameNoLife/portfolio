"use client";

import { useState } from "react";
import { FaDownload, FaSpinner, FaCheck, FaTimes } from "react-icons/fa";

const STATES = {
    initial: "initial",
    downloading: "downloading",
    completed: "completed",
    error: "error",
} as const;

export default function DownloadCvLink() {
    const [state, setState] = useState<typeof STATES[keyof typeof STATES]>(
        STATES.initial
    );

    const handleClick = async (e: React.MouseEvent) => {
        if (state !== STATES.initial) {
            e.preventDefault();
            return;
        }

        setState(STATES.downloading);

        try {
            // simulate delay
            await new Promise((r) => setTimeout(r, 2000));
            setState(STATES.completed);
        } catch {
            setState(STATES.error);
        } finally {
            setTimeout(() => setState(STATES.initial), 2000);
        }
    };

    const icons = {
        [STATES.initial]: (
            <>
                <FaDownload />
                <span className="ml-2">Download CV</span>
            </>
        ),
        [STATES.downloading]: (
            <>
                <FaSpinner className="animate-spin" />
                <span className="ml-2 animate-pulse">Downloading...</span>
            </>
        ),
        [STATES.completed]: (
            <>
                <FaCheck className="animate-bounce" />
                <span className="ml-2">Done!</span>
            </>
        ),
        [STATES.error]: (
            <>
                <FaTimes className="text-destructive animate-pulse" />
                <span className="ml-2">Error!</span>
            </>
        ),
    };

    const linkClass = {
        [STATES.initial]: "bg-primary hover:bg-primary/90",
        [STATES.downloading]: "bg-muted-foreground cursor-not-allowed",
        [STATES.completed]: "bg-primary",
        [STATES.error]: "bg-destructive",
    }[state];

    return (
        <a
            href="/files/Sherif_Alaa(Front-End).pdf"
            download="Sherif_Alaa(Front-End).pdf"
            onClick={handleClick}
            className={`group flex items-center justify-center rounded-full py-3.5 px-1 sm:px-4 font-semibold text-xs sm:text-sm text-primary-foreground transition-colors duration-300 ${linkClass}`}
        >
            {icons[state]}
        </a>
    );
}