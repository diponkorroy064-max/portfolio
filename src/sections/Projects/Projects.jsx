"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import projects from "@/data/projects";
import ProjectCard from "@/components/card/ProjectCard";
import ProjectModal from "@/components/modal/ProjectModal";


const topProjects = projects.slice(0, 3);

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);


    return (
        <section id="projects" className="py-16 bg-slate-950 text-white px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center">
                    <p className="text-sky-400 text-lg font-semibold tracking-wide">
                        My Portfolio
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Featured Projects
                    </h2>

                    <div className="w-20 h-1 bg-sky-500 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Horizontal Project Cards Stack */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {topProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id || index}
                            project={project}
                            index={index}
                            setSelectedProject={setSelectedProject}
                        />
                    ))}
                </div>

                {/* Navigation Link to All Projects */}
                <div className="mt-16 text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-sky-500 text-sky-400 hover:text-sky-300 px-8 py-4 rounded-full font-semibold transition group shadow-lg">
                        <span>View All Projects</span>
                        <ArrowRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </Link>
                </div>
            </div>

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

