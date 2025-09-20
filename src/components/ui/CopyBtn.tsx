'use client'
import React, { useState } from 'react'
import Lottie from 'react-lottie';
import MagicButton from './MagicButton';
import { IoCopyOutline } from 'react-icons/io5';
import animationData from "@/data/confetti.json";

const CopyBtn = () => {

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "sherefalex34@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div className="mt-5 relative">
      <div
        className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
          }`}
      >
        <Lottie options={defaultOptions} height={200} width={400} />
      </div>

      <MagicButton
        title={copied ? "Email is Copied!" : "Copy my email address"}
        icon={<IoCopyOutline />}
        position="left"
        handleClick={handleCopy}
        otherClasses="!bg-[#161A31]"
      />
    </div>
  )
}

export default CopyBtn
