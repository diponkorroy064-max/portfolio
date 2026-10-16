"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
    if (!project) return null;

    // Prevent background scrolling when modal is open & handle Escape key
    useEffect(() => {
        document.body.style.overflow = "hidden";
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#16171b] border border-zinc-800 rounded-3xl p-6 md:p-8 text-white shadow-2xl"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition cursor-pointer"
                    aria-label="Close modal"
                >
                    <X size={20} />
                </button>

                {/* Modal Header / Banner */}
                <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-6 bg-zinc-900 border border-zinc-800/80">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h3>
                    {project.category && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#6fc844]/10 text-[#6fc844] border border-[#6fc844]/30">
                            {project.category}
                        </span>
                    )}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies?.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 rounded-full bg-[#121316] border border-zinc-800 text-zinc-300 text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Details Content */}
                <div className="space-y-6 mt-6">
                    <div>
                        <h4 className="text-[#6fc844] font-semibold text-base sm:text-lg flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#6fc844]" />
                            Overview
                        </h4>
                        <p className="text-zinc-300 mt-2 text-sm sm:text-base leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {project.challenges && (
                        <div>
                            <h4 className="text-[#6fc844] font-semibold text-base sm:text-lg flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#6fc844]" />
                                Key Implementations & Challenges
                            </h4>
                            <p className="text-zinc-300 mt-2 text-sm sm:text-base leading-relaxed">
                                {project.challenges}
                            </p>
                        </div>
                    )}

                    {project.future && (
                        <div>
                            <h4 className="text-[#6fc844] font-semibold text-base sm:text-lg flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#6fc844]" />
                                Future Improvements
                            </h4>
                            <p className="text-zinc-300 mt-2 text-sm sm:text-base leading-relaxed">
                                {project.future}
                            </p>
                        </div>
                    )}
                </div>

                {/* Action Links & Bottom Close Button */}
                <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-zinc-800">
                    <div className="flex flex-wrap items-center gap-3">
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#6fc844] hover:bg-[#5eb537] text-black px-5 py-2.5 rounded-xl font-bold transition shadow-lg shadow-[#6fc844]/20 cursor-pointer"
                            >
                                <ExternalLink size={18} />
                                Live Demo
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-zinc-700 hover:border-[#6fc844] hover:bg-[#6fc844]/10 text-zinc-300 hover:text-[#6fc844] px-5 py-2.5 rounded-xl font-semibold transition cursor-pointer"
                            >
                                <FaGithub size={18} />
                                GitHub Code
                            </a>
                        )}
                    </div>

                    {/* Bottom Right Close Button */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition cursor-pointer ml-auto"
                    >
                        <X size={18} />
                        <span>Close</span>
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

