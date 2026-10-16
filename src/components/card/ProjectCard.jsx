"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function ProjectCard({ project, index = 0, setSelectedProject }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-[#16171b] rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#6fc844]/60 transition-all duration-300 shadow-xl flex flex-col group w-full h-full relative"
        >
            {/* Top Image Container */}
            <div className="relative w-full aspect-video overflow-hidden bg-zinc-900 border-b border-zinc-800/80">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16171b] via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Category Badge */}
                {project.category && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#121316]/90 backdrop-blur-md text-[#6fc844] border border-[#6fc844]/30 shadow-md">
                        {project.category}
                    </span>
                )}
            </div>

            {/* Card Content */}
            <div className="p-5 sm:p-6 flex flex-col grow justify-between">
                <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#6fc844] transition-colors duration-200">
                        {project.title}
                    </h3>

                    <p className="text-zinc-400 mt-2 text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {project.description}
                    </p>

                    {/* Quick Technologies Chips */}
                    {project.technologies && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                            {project.technologies.slice(0, 4).map((tech, i) => (
                                <span
                                    key={i}
                                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.technologies.length > 4 && (
                                <span className="text-[11px] font-medium px-1.5 py-0.5 rounded-md bg-zinc-900/90 text-zinc-500 border border-zinc-800">
                                    +{project.technologies.length - 4}
                                </span>
                            )}
                        </div>
                    )}
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-4 border-t border-zinc-800/80">
                    <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-1.5 bg-[#6fc844]/10 hover:bg-[#6fc844] text-[#6fc844] hover:text-black px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border border-[#6fc844]/20 hover:border-[#6fc844]"
                    >
                        <Eye size={14} />
                        Details
                    </button>

                    <div className="flex items-center gap-2">
                        {project.live && (
                            <Link
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-medium transition-colors"
                                title="Live Demo"
                            >
                                <ExternalLink size={13} />
                                <span>Live</span>
                            </Link>
                        )}
                        {project.github && (
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-medium transition-colors"
                                title="GitHub Repository"
                            >
                                <FaGithub size={13} />
                                <span>Code</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

