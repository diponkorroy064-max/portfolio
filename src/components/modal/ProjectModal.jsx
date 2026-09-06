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
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-3xl p-6 md:p-8 text-white shadow-2xl custom-scrollbar"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition cursor-pointer"
                    aria-label="Close modal"
                >
                    <X size={20} />
                </button>

                {/* Modal Header / Banner */}
                <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-6">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <h3 className="text-3xl font-bold text-white">{project.title}</h3>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies?.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Details Content */}
                <div className="space-y-6 mt-6">
                    <div>
                        <h4 className="text-sky-400 font-semibold text-lg">Overview</h4>
                        <p className="text-slate-300 mt-2 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {project.challenges && (
                        <div>
                            <h4 className="text-sky-400 font-semibold text-lg">Challenges</h4>
                            <p className="text-slate-300 mt-2 leading-relaxed">
                                {project.challenges}
                            </p>
                        </div>
                    )}

                    {project.future && (
                        <div>
                            <h4 className="text-sky-400 font-semibold text-lg">
                                Future Improvements
                            </h4>
                            <p className="text-slate-300 mt-2 leading-relaxed">
                                {project.future}
                            </p>
                        </div>
                    )}
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-slate-800">
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-xl font-semibold transition shadow-lg shadow-sky-500/20"
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
                            className="flex items-center gap-2 border border-sky-500 hover:bg-sky-500/10 text-sky-400 px-5 py-2.5 rounded-xl font-semibold transition"
                        >
                            <FaGithub size={18} />
                            GitHub
                        </a>
                    )}
                </div>
            </motion.div>
        </div>
    );
}

