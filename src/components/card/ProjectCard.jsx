"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function ProjectCard({ project, index = 0, setSelectedProject }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-all shadow-lg flex flex-col group w-full h-full"
        >
            {/* Top Image */}
            <div className="relative w-full h-60 sm:h-64 md:h-72 overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                />
            </div>

            {/* Card Content */}
            <div className="p-6 md:p-8 flex flex-col grow justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition">
                        {project.title}
                    </h3>

                    <p className="text-slate-400 mt-3 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                    </p>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-5 border-t border-slate-800/80">
                    <button onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 bg-sky-500/10 hover:bg-sky-500 text-sky-400 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer">
                        <Eye size={16} />
                        View Details
                    </button>

                    <div className="flex items-center gap-3">
                        {project.live && (
                            <Link
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-sm transition"
                                title="Live Demo"
                            >
                                <ExternalLink size={16} />
                                <span className="hidden sm:inline">Live Demo</span>
                            </Link>
                        )}
                        {project.github && (
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-sm transition"
                                title="GitHub Repository"
                            >
                                <FaGithub size={16} />
                                <span className="hidden sm:inline">GitHub</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

