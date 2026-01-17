"use client";
import React from 'react';
import { motion } from 'motion/react';
import { achievements } from '@/data';
import { Award, Trophy, Star, Zap } from 'lucide-react';

const achievementIcons = [Trophy, Star, Award, Zap];

export default function Achievement() {
    return (
        <section id='achievement' className="relative w-full py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <h1 className="heading">
                    my{" "}
                    <span className="text-purple">achievement</span>
                </h1>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement, idx) => {
                        const IconComponent = achievementIcons[idx % achievementIcons.length];

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, rotateX: -20 }}
                                whileInView={{ opacity: 1, rotateX: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                viewport={{ once: true }}
                                className="group relative h-full perspective"
                            >
                                {/* Glowing border effect - Changed to Purple */}
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/20 to-purple-600/0 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300" />

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    // Background color matched to Projects (#13162D) and borders adjusted
                                    className="relative h-full bg-[#13162D] border border-white/[0.1] group-hover:border-purple/50 rounded-xl p-8 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Top accent line - Changed to Purple Gradient */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple to-transparent opacity-50" />

                                    {/* Icon container - Changed to Violet/Indigo Gradient */}
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-14 h-14 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full flex items-center justify-center mb-5 shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all"
                                    >
                                        <IconComponent className="w-7 h-7 text-white" />
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                                        {achievement.title}
                                    </h3>

                                    <p className="font-medium text-sm mb-3 flex items-center gap-2" style={{ color: '#CBACF9' }}>
                                        <span className="text-purple">✦</span>
                                        {achievement.issuer}
                                    </p>

                                    {/* Description color matched to Projects (#BEC1DD) */}
                                    <p className="text-sm leading-relaxed" style={{ color: '#BEC1DD' }}>
                                        {achievement.description}
                                    </p>

                                    {/* Animated corner decoration - Subtle Purple */}
                                    <div className="absolute bottom-0 right-0 w-16 h-16 text-purple/5 text-6xl font-bold">
                                        ◆
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}