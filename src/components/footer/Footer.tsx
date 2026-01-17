import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import MagicButton from "../ui/MagicButton";
import Link from "next/link";
import SocialLinks from "../ui/SocialMedia";

const Footer = () => {
    return (
        <footer className="relative w-full pt-20 pb-10 overflow-hidden" id="contact">
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <Image
                    width={200}
                    height={200}
                    src="/imgs/footer-grid.svg"
                    alt="footer-grid"
                    className="w-full opacity-50"
                />
            </div>

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your</span> digital
                    presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                <Link target="_blank" href="https://wa.me/201012983148" >
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </Link>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-3">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2026 Sherif Alaa
                </p>
                <SocialLinks />
            </div>
        </footer>
    );
};

export default Footer;