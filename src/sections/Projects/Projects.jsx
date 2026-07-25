"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import projects from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";


export default function Projects() {
    return (
        <section
            id="projects"
            className="py-12 bg-slate-900 text-white px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center">
                    <p className="text-sky-400 text-lg font-semibold">
                        My Portfolio
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        Featured Projects
                    </h2>

                    <div className="w-24 h-1 bg-sky-500 mx-auto mt-5 rounded-full"></div>
                </motion.div>

                
                {/* Project Cards */}
                <div className="mt-10 space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-sky-500 transition-all">
                            <div className={`grid lg:grid-cols-2 gap-3 items-center ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}>

                                {/* Project Image */}
                                <div className="overflow-hidden h-full">
                                    <Image src={project.image} alt={project.title} width={900} height={600}
                                        className="w-full h-full min-h-87.5 object-cover hover:scale-105 transition duration-500"/>
                                </div>

                                {/* Project Details */}
                                <div className="p-8">
                                    <h3 className="text-3xl font-bold">{project.title}</h3>

                                    <p className="text-gray-400 mt-5 leading-8">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-3 mt-6">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Challenges */}
                                    <div className="mt-8">
                                        <h4 className="text-sky-400 font-semibold text-lg">
                                            Challenges
                                        </h4>

                                        <p className="text-gray-400 mt-2 leading-7">
                                            {project.challenges}
                                        </p>
                                    </div>

                                    {/* Future */}
                                    <div className="mt-6">
                                        <h4 className="text-sky-400 font-semibold text-lg">
                                            Future Improvements
                                        </h4>

                                        <p className="text-gray-400 mt-2 leading-7">
                                            {project.future}
                                        </p>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-4 mt-8 justify-center md:justify-start">
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 px-4 md:px-6 py-3 rounded-lg font-semibold transition">
                                            <ExternalLink size={18} />
                                            Live Demo
                                        </a>

                                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-2 border border-sky-500 hover:bg-sky-500 px-4 md:px-6 py-3 rounded-lg transition">
                                            <FaGithub size={18} />
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

