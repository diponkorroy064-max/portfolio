"use client";
import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";


export default function Resume() {
    return (
        <section id="resume" className="bg-slate-950 py-12 px-6 lg:px-12 text-white">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}

                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center">
                    <p className="text-sky-400 text-lg font-semibold">My Professional Profile</p>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3">Resume</h2>
                    <div className="w-24 h-1 bg-sky-500 mx-auto mt-5 rounded-full"></div>
                </motion.div>

                {/* Resume Card */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="mt-10 bg-slate-800 border border-slate-700 rounded-3xl p-10 shadow-lg">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                        
                        {/* Left */}
                        <div className="flex items-center gap-6">
                            <div className="w-24 h-24 rounded-full bg-sky-500 flex items-center justify-center">
                                <FileText size={42} />
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold">
                                    Diponkor Roy
                                </h3>

                                <p className="text-sky-400 mt-2 text-lg">
                                    Frontend Developer (MERN Stack)
                                </p>

                                <p className="text-gray-400 mt-4 max-w-lg">
                                    My resume highlights my technical skills,
                                    projects, education, and experience in modern web
                                    development. Feel free to view it online or
                                    download a copy.
                                </p>
                            </div>
                        </div>

                        
                        {/* Right */}
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href="/resume/Diponkor_Roy_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-sky-500 hover:bg-sky-600 transition px-12 py-4 rounded-xl font-semibold">
                                <Eye size={20} /> View Resume
                            </a>

                            <a href="/resume/Diponkor_Roy_Resume.pdf" download className="flex items-center justify-center gap-3 border border-sky-500 hover:bg-sky-500 transition px-12 py-4 rounded-xl font-semibold">
                                <Download size={20} /> Download
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
