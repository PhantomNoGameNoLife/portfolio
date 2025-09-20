import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
    {
        href: "https://www.linkedin.com/in/sherif-alaa-38bb44237/",
        icon: <FaLinkedin className="text-blue-600 dark:text-blue-400 w-5 h-5" />,
        hover: "hover:bg-blue-100 dark:hover:bg-blue-900",
    },
    {
        href: "https://github.com/PhantomNoGameNoLife",
        icon: <FaGithub className="text-gray-800 dark:text-gray-100 w-5 h-5" />,
        hover: "hover:bg-gray-300 dark:hover:bg-gray-600",
    },
    {
        href: "https://wa.me/201012983148",
        icon: <FaWhatsapp className="text-green-600 dark:text-green-400 w-5 h-5" />,
        hover: "hover:bg-green-100 dark:hover:bg-green-900",
    },
    {
        href: "mailto:sherefalex34@gmail.com",
        icon: <MdEmail className="text-red-600 dark:text-red-400 w-5 h-5" />,
        hover: "hover:bg-red-100 dark:hover:bg-red-900",
    },
];

export default function SocialLinks() {
    return (
        <ul className="flex gap-2 z-10 justify-center md:justify-start mt-6 md:mt-8">
            {socialLinks.map(({ href, icon, hover }, i) => (
                <li key={i}>
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-colors shadow-md hover:shadow-lg dark:shadow-black/30 bg-gray-100 dark:bg-gray-700 ${hover}`}
                    >
                        {icon}
                    </a>
                </li>
            ))}
        </ul>
    );
}