"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { projects, techTabs } from "@/data";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";
import { useEffect, useState } from "react";


const Projects = () => {
    const ITEMS_PER_PAGE = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTab, setActiveTab] = useState("all");

    const filteredProjects =
        activeTab === "all"
            ? projects
            : projects.filter((p) => p.tech.includes(activeTab));

    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

    const paginatedProjects = filteredProjects.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab]);

    return (
        <section id="projects" className="py-20">
            <h1 className="heading">
                A small selection of{" "}
                <span className="text-purple">recent projects</span>
            </h1>

            {/* ===== Tabs ===== */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
                {techTabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border transition
                        ${activeTab === tab.key
                                ? "bg-purple text-white border-purple"
                                : "border-white/20 text-white hover:bg-white/10"
                            }`}
                    >
                        {tab.icon && <Image src={tab.icon} width={22} height={22} alt={tab.label} />}
                        <span className="text-sm hidden sm:block">{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* ===== Projects Grid ===== */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center -mt-5">
                {paginatedProjects.map((item) => (
                    <div
                        className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center animate-project"
                        key={`${activeTab}-${item.id}`}
                    >
                        <PinContainer title={item.link} href={item.link}>
                            <div className="relative flex items-center justify-center 2xl:w-full lg:w-[23vw] w-[70vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]"
                                >
                                    <Image width={300} height={200} src="/imgs/bg.png" alt="bgimg" />
                                </div>
                                <Image
                                    width={300}
                                    height={200}
                                    src={item.img}
                                    alt="cover"
                                    className="z-10 absolute bottom-0 [transform:rotate3d(1,1,1,5deg)_scaleY(1.3)_translateY(-10px)]"
                                />
                            </div>

                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                {item.title}
                            </h1>

                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD] mt-[1vh]">
                                {item.des}
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {item.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            <Image width={32} height={32} src={icon} alt="icon5" className="p-2" />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                        Live Site
                                    </p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>

            {/* ===== Pagination ===== */}
            <div className="flex justify-center gap-3 mt-10">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`w-10 h-10 rounded-full border transition
                ${currentPage === index + 1
                                ? "bg-purple text-white border-purple"
                                : "border-white/20 text-white hover:bg-white/10"
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Projects;