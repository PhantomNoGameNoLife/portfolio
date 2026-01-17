export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Services", link: "#services" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "ABOUT ME",
    description: `My journey as a React.js Developer began at Benha University, where I studied Computer Science and discovered my passion for web development. Through hands-on learning at DEPI and Route Academy, I strengthened my skills in React.js, Next.js, and TypeScript.
                  Today, I focus on building responsive and scalable applications, always aiming to create smooth and meaningful user experiences.`,
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60dvh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/dataImgs/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zones",
    description: "Work anytime globally",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/dataImgs/reshot-icon-smart-timer-NAP2G6K89S.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "A Touch of Personality",
    description: "Positivity First",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast",
    description: "Always learning",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/dataImgs/grid.svg",
    spareImg: "/dataImgs/b4.svg",
  },
  {
    id: 5,
    title: "The Value I Bring",
    description: `Quality & Precision: I deliver clean, maintainable code and seamless UIs, driven by a meticulous attention to every detail.
                  Persistent Problem-Solving: I tackle complex technical challenges with a "solve-it-at-all-costs" attitude to ensure efficient, scalable results.
                  Reliability: I prioritize your time and project deadlines, maintaining high standards of excellence from start to finish.`,
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/dataImgs/b5.svg",
    spareImg: "/dataImgs/grid.svg",
  },
  {
    id: 6,
    title: "Start a project together?",
    description: "Let's create something",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const techTabs = [
  { key: "all", label: "All" },
  { key: "next", icon: "/dataImgs/next.svg", label: "NextJS" },
  { key: "react", icon: "/dataImgs/re.svg", label: "ReactJS" },
  { key: "three", icon: "/dataImgs/three.svg", label: "ThreeJS" },
  { key: "tailwind", icon: "/dataImgs/tail.svg", label: "Tailwind" },
  { key: "bootstrap", icon: "/dataImgs/boot.svg", label: "Boostrap" },
  { key: "css", icon: "/dataImgs/css.svg", label: "CSS" },
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    des: "A professional full-stack platform featuring product browsing, NextAuth authentication, cart management, and a seamless checkout process.",
    img: "/dataImgs/p1.png",
    tech: ["next", "tailwind"],
    iconLists: [
      "/dataImgs/next.svg",
      "/dataImgs/tail.svg",
      "/dataImgs/ts.svg",
      "/dataImgs/redux.svg",
      "/dataImgs/zod.webp",
    ],
    link: "https://ecommerce-alpha-kohl.vercel.app",
  },
  {
    id: 2,
    title: "Airbun - Airbnb Clone",
    des: "A modern home rental application featuring property listings, booking capabilities, and a dynamic map interface.",
    img: "/dataImgs/p2.png",
    tech: ["next", "tailwind"],
    iconLists: [
      "/dataImgs/next.svg",
      "/dataImgs/tail.svg",
      "/dataImgs/ts.svg",
      "/dataImgs/zod.webp",
    ],
    link: "https://airbun.vercel.app",
  },
  {
    id: 3,
    title: "Social Media Web App",
    des: "An interactive social platform with post and comment functionality, built with optimized form handling and efficient server-state management.",
    img: "/dataImgs/p3.png",
    tech: ["react", "tailwind"],
    iconLists: [
      "/dataImgs/re.svg",
      "/dataImgs/tail.svg",
      "/dataImgs/ts.svg",
      "/dataImgs/zod.webp",
    ],
    link: "https://social-app-alpha-three.vercel.app",
  },
  {
    id: 4,
    title: "Asterix Admin Dashboard",
    des: "A robust dashboard for product management with full CRUD operations, real-time data handling with Firebase, and a sleek Material-UI design.",
    img: "/dataImgs/p4.png",
    tech: ["tailwind"],
    iconLists: ["/dataImgs/tail.svg", "/dataImgs/fire.svg"],
    link: "https://asterix-dashboard.vercel.app",
  },
  {
    id: 5,
    title: "3D Raspberry Pi Simulation",
    des: "An immersive 3D visualization and simulation of the Raspberry Pi board using Three.js and interactive React components.",
    img: "/dataImgs/p5.png",
    tech: ["three", "css"],
    iconLists: ["/dataImgs/three.svg", "/dataImgs/css.svg"],
    link: "https://3d-raspberry-seven.vercel.app",
  },
  {
    id: 6,
    title: "3D Soda Drink Experience",
    des: "A creative 3D landing page for a beverage brand, featuring smooth GSAP animations and realistic 3D product rendering.",
    img: "/dataImgs/p6.png",
    tech: ["css"],
    iconLists: ["/dataImgs/css.svg"],
    link: "https://soda-drink.vercel.app",
  },
  {
    id: 7,
    title: "IC Academy Portal",
    des: "An educational platform designed for course management and student interaction with a focus on clean UI/UX.",
    img: "/dataImgs/p7.png",
    tech: ["css"],
    iconLists: ["/dataImgs/css.svg"],
    link: "https://www.icacademy.online",
  },
  {
    id: 8,
    title: "Smart Slider Effects",
    des: "A showcase of advanced web animation techniques and modern slider transitions using Framer Motion and React.",
    img: "/dataImgs/p8.png",
    tech: ["css"],
    iconLists: ["/dataImgs/css.svg"],
    link: "https://slider-effects-ten.vercel.app",
  },
  {
    id: 9,
    title: "A10 Bookmarker Utility",
    des: "A practical productivity tool for organizing and managing web bookmarks efficiently with local storage integration.",
    img: "/dataImgs/p9.png",
    tech: ["bootstrap"],
    iconLists: ["/dataImgs/boot.svg"],
    link: "https://phantomnogamenolife.github.io/A10-Bookmarker",
  },
  {
    id: 10,
    title: "Daniels Portfolio Template",
    des: "A sleek and responsive landing page template based on the Daniels design, optimized for speed and modern aesthetics.",
    img: "/dataImgs/p10.png",
    tech: ["bootstrap"],
    iconLists: ["/dataImgs/boot.svg"],
    link: "https://phantomnogamenolife.github.io/EX1-Daniels",
  },
];

export const testimonials = [
  {
    quote:
      "Sherif is an exceptionally bright developer who consistently engages with complex concepts. His punctuality and analytical thinking during our sessions at Route Academy were truly impressive. He doesn't just write code; he deeply understands the logic behind it.",
    name: "Eng. Hoda Khaled",
    img: "/dataImgs/t1.png",
    title: "Front-end Instructor at Route Academy",
  },
  {
    quote:
      "I’ve seen firsthand Sherif's dedication to his craft. He has a remarkable habit of delivering high-quality tasks well within deadlines. His commitment and the quality of his front-end implementations show a developer who truly cares about the end result.",
    name: "Eng. Ammar",
    img: "/dataImgs/t2.webp",
    title: "Front-end Monitor at Route Academy",
  },
  {
    quote:
      "Sherif's ability to grasp new technologies quickly is impressive. Beyond his technical skills, his problem-solving mindset and disciplined approach to development make him a valuable asset to any engineering team he joins.",
    name: "Professional Peer Review",
    img: "/dataImgs/route.png",
    title: "Route Academy Network",
  },
  {
    quote:
      "Working with Sherif in the DEPI initiative was a pleasure. His projects are characterized by clean, modular code and a very organized architectural approach. He has a professional knack for turning complex ideas into well-structured and highly maintainable technical solutions.",
    name: "Eng. Mohamed Emad",
    img: "/dataImgs/t4.png",
    title: "Technical Instructor at DEPI",
  },
];

export const companies = [
  {
    id: 1,
    name: "Digital Egypt Pioneers",
    img: "/dataImgs/DEP.png",
  },
  {
    id: 2,
    name: "Route",
    img: "/dataImgs/route.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: `AST-React Frontend 
            Nov 2025 – Present`,
    desc: "Completed 200+ hours of advanced React training and professional soft skills through the Digital Egypt Pioneers Initiative.",
    className: "md:col-span-2",
    thumbnail: "/dataImgs/exp1.svg",
  },
  {
    id: 2,
    title: `Route Front-End Track 
            Mar 2025 – Sep 2025`,
    desc: "Built 5+ production-ready projects using React and Next.js, including a full e-commerce platform and social networking apps.",
    className: "md:col-span-2",
    thumbnail: "/dataImgs/exp2.svg",
  },
];

export const ServicesData = [
  {
    id: 1,
    title: "System Architecture & API Planning",
    order: "Planning",
    des: "Mapping out the technical structure of your application, including database schemas and RESTful API endpoints. I focus on creating a solid backend foundation that supports scalable frontend features.",
    containerClassName: "bg-emerald-900 rounded-3xl overflow-hidden",
  },
  {
    id: 2,
    title: "Dynamic Frontend Development",
    order: "Frontend",
    des: "Building responsive and interactive user interfaces using React.js and Next.js. I leverage TypeScript for type safety and Redux Toolkit or TanStack Query for efficient state management.",
    containerClassName: "bg-pink-900 rounded-3xl overflow-hidden",
  },
  {
    id: 3,
    title: "Full-Stack (React & Express.js)",
    order: "Backend",
    des: "Developing robust server-side logic using Express.js and integrating it seamlessly with the frontend. This includes handling CRUD operations, authentication, and ensuring smooth data flow across the entire stack",
    containerClassName: "bg-sky-600 rounded-3xl overflow-hidden",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/dataImgs/git.svg",
  },
  {
    id: 2,
    img: "/dataImgs/twit.svg",
  },
  {
    id: 3,
    img: "/dataImgs/link.svg",
  },
];
