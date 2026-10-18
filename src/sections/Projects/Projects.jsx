"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import projects from "@/data/projects";
import ProjectCard from "@/components/card/ProjectCard";
import ProjectModal from "@/components/modal/ProjectModal";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Extract categories
    const categories = ["all", "full stack", "mern stack", "Frontend"];

    const filteredProjects = useMemo(() => {
        if (selectedCategory === "all") return projects;
        return projects.filter(
            (p) => p.category?.toLowerCase() === selectedCategory.toLowerCase()
        );
    }, [selectedCategory]);

    return (
        <section id="projects" className="space-y-8">
            {/* Section Header */}
            <div>
                <div className="flex items-center gap-3">
                    <span className="w-8 h-0.5 bg-[#6fc844]" />
                    <p className="text-xs uppercase tracking-widest text-[#6fc844] font-bold">
                        Portfolio & Case Studies
                    </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                    <span className="text-[#6fc844]">Featured</span> Works
                </h2>
            </div>

            {/* RyanCV Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pb-2">
                {categories.map((cat) => {
                    const isActive = selectedCategory === cat;
                    return (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                                isActive
                                    ? "bg-[#6fc844] text-black border-[#6fc844] shadow-md shadow-[#6fc844]/20"
                                    : "bg-[#16171b] text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700"
                            }`}
                        >
                            {cat}
                        </button>
                    );
                })}
            </div>

            {/* Projects Grid */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id || index}
                            layout
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
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

            {/* Details Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}
