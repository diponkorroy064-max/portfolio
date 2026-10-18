"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, ArrowLeft } from "lucide-react";
import projects from "@/data/projects";
import ProjectCard from "@/components/card/ProjectCard";
import ProjectModal from "@/components/modal/ProjectModal";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

const projectsData = projects;
const categories = ["All", "Full Stack", "MERN Stack", "Frontend"];

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    // Filter projects dynamically based on selectedCategory
    const filteredProjects =
        selectedCategory === "All"
            ? projectsData
            : projectsData.filter(
                (item) => item.category?.toLowerCase() === selectedCategory.toLowerCase()
            );

    return (
        <main className="min-h-screen bg-[#0e0f12] text-white pt-20 pb-20 px-5 sm:px-8 md:px-12 lg:px-16 selection:bg-[#6fc844] selection:text-black">
            <div className="max-w-7xl mx-auto">
                {/* Back to Home & Theme Toggle Bar */}
                <div className="mb-8 flex items-center justify-between">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#16171b] border border-zinc-800 hover:border-[#6fc844]/50 text-zinc-300 hover:text-white text-xs font-semibold transition-colors"
                    >
                        <ArrowLeft size={14} className="text-[#6fc844]" />
                        <span>Back to Home</span>
                    </Link>
                    <ThemeToggle />
                </div>

                {/* HEADER SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6fc844]/10 border border-[#6fc844]/30 text-[#6fc844] text-xs font-bold uppercase tracking-wider mb-4">
                        <Folder className="w-3.5 h-3.5" />
                        <span>All Works</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                        Featured <span className="text-[#6fc844]">Projects</span>
                    </h1>
                    <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
                        A curated archive of full-stack, frontend, and modern web applications built using Next.js, React, Node.js, and MongoDB.
                    </p>
                </motion.div>

                {/* CATEGORY FILTER TABS */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12 sm:mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                                selectedCategory === category
                                    ? "bg-[#6fc844] text-black border-[#6fc844] shadow-md shadow-[#6fc844]/25"
                                    : "bg-[#16171b] text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* PROJECTS GRID */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id || index}
                                className="flex flex-col h-full"
                            >
                                <ProjectCard
                                    project={project}
                                    index={index}
                                    setSelectedProject={setSelectedProject}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* BOTTOM CALL TO ACTION */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#16171b] border border-zinc-800/80 text-center relative overflow-hidden shadow-2xl"
                >
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                            Have a custom project or role in mind?
                        </h2>
                        <p className="text-zinc-400 text-xs sm:text-sm mb-6 leading-relaxed">
                            I am open for full-time frontend/full-stack developer opportunities, contract work, and engineering collaborations.
                        </p>

                        <Link
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=diponkorroy064@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#6fc844] hover:bg-[#5eb537] text-black font-extrabold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-lg shadow-[#6fc844]/25"
                        >
                            Let&#39;s Talk
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* RENDER MODAL */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </main>
    );
}
