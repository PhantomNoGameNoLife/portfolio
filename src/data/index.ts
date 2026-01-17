export const navItems = [
  { name: "About", link: "#about" },
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
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/dataImgs/cloud.svg",
    nameImg: "/dataImgs/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/dataImgs/app.svg",
    nameImg: "/dataImgs/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/dataImgs/host.svg",
    nameImg: "/dataImgs/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/dataImgs/s.svg",
    nameImg: "/dataImgs/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dataImgs/dock.svg",
    nameImg: "/dataImgs/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
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
