"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder } from "lucide-react";
import projects from "@/data/projects";
import ProjectCard from "@/components/card/ProjectCard";
import ProjectModal from "@/components/modal/ProjectModal";
import Link from "next/link";


const projectsData = projects;
const categories = ["All", "Full Stack", "Frontend", "MERN Stack"];

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
        <main className="min-h-screen bg-slate-950 text-white pt-28 pb-20 px-5 sm:px-8 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* HEADER SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-4">
                        <Folder className="w-4 h-4" />
                        <span>My Work</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                        Featured <span className="text-sky-400">Projects</span>
                    </h1>
                    <p className="mt-4 text-gray-400 text-base sm:text-lg leading-relaxed">
                        Here are some of the web applications and full-stack projects I’ve built recently using modern tools and clean code principles.
                    </p>
                </motion.div>

                {/* CATEGORY FILTER TABS */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12 sm:mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${selectedCategory === category
                                    ? "bg-sky-500 text-white shadow-lg shadow-sky-500/25"
                                    : "bg-slate-900/80 text-gray-400 border border-slate-800 hover:border-sky-500/50 hover:text-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* PROJECTS GRID */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    className="mt-20 p-8 sm:p-12 rounded-3xl bg-linear-to-r from-slate-900 via-sky-950/40 to-slate-900 border border-slate-800 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Have a custom project in mind?
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base mb-6">
                            I&#39;m available for freelance work, full-time engineering roles, and open-source collaborations.
                        </p>

                        <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=diponkorroy064@gmail.com" className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all duration-300 shadow-lg shadow-sky-500/25">
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

