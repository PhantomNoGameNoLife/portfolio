"use client";
import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Image from "next/image";


const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20">
            <h1 className="heading">
                Kind words from
                <span className="text-purple"> satisfied clients</span>
            </h1>

            <div className="flex flex-col items-center max-lg:mt-10">
                <div className="my-10 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12 max-lg:mt-10">
                    {companies.map((company) => (
                        <div key={company.id} className="flex items-center gap-2">
                            <Image
                                width={40}
                                height={40}
                                src={company.img}
                                alt={company.name}
                                className="md:w-12 w-6"
                            />
                            <p className="md:text-lg text-sm font-bold">{company.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;