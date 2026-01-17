"use client";
import React from 'react';
import { motion } from 'motion/react';
import { skills } from '@/data';
import { Code2, Database, Wrench, Zap } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
    'Frontend Development': <Code2 className="w-6 h-6" />,
    'Backend Development': <Database className="w-6 h-6" />,
    'Tools & Technologies': <Wrench className="w-6 h-6" />,
    'Soft Skills': <Zap className="w-6 h-6" />,
};

export default function Skills() {
    return (
        <section id='skills' className="relative w-full py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h1 className="heading">
                    my{" "}
                    <span className="text-purple">skills</span>
                </h1>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="group relative"
                        >
                            {/* Card background with glow - Matched to Projects theme */}
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative bg-[#13162D] border border-white/[0.1] group-hover:border-purple/50 rounded-2xl p-8 transition-all duration-300 h-full overflow-hidden">
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        // Gradient matched to Achievements icon
                                        className="p-3 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg text-white shadow-lg shadow-violet-500/20"
                                    >
                                        {categoryIcons[skillGroup.category] || <Code2 className="w-6 h-6" />}
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-white">
                                        {skillGroup.category}
                                    </h3>
                                </div>

                                {/* Skills Grid */}
                                <div className="flex flex-wrap gap-3">
                                    {skillGroup.items.map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: i * 0.05 }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.05 }}
                                            className="group/item"
                                        >
                                            <div className="px-4 py-2 bg-indigo-950/30 border border-white/[0.1] group-hover/item:border-purple/50 group-hover/item:bg-violet-900/20 rounded-lg text-sm font-medium transition-all duration-300 cursor-default"
                                                 style={{ color: '#BEC1DD' }} /* Default text color matches project description */
                                            >
                                                <span className="group-hover/item:text-white transition-colors">
                                                    {skill}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Animated line accent - Purple */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}