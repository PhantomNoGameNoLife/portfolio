"use client";
import React from 'react';
import { motion } from 'motion/react';
import { education } from '@/data';

export default function Education() {
    return (
        <section id='education' className="relative w-full py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <h1 className="heading">
                    my{" "}
                    <span className="text-purple">education</span>
                </h1>

                <div className="mt-16 relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 hidden md:block" />

                    <div className="space-y-12">
                        {education.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="md:pl-24 relative"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-0 w-16 h-16 hidden md:flex items-center justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full border-4 border-[#0a0e27] shadow-lg shadow-yellow-400/50"
                                    />
                                </div>

                                {/* Content card */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 group"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300 mb-2">
                                                {edu.institution}
                                            </h3>
                                            <p className="text-yellow-400 font-semibold text-lg mb-1">
                                                {edu.degree}
                                            </p>
                                            <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                                                <span className="text-blue-400">📅</span>
                                                {edu.period}
                                            </p>
                                            <p className="text-gray-300 leading-relaxed text-sm">
                                                {edu.description}
                                            </p>
                                        </div>
                                        <div className="text-3xl opacity-20 group-hover:opacity-100 transition-opacity">
                                            🎓
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}