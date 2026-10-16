"use client";
import { motion } from "framer-motion";
import { Code2, Server, Database, Layout, Sparkles, CheckCircle2, Award, FolderGit2, GraduationCap } from "lucide-react";

export default function About() {
    const services = [
        {
            icon: <Code2 className="w-8 h-8 text-[#6fc844]" />,
            title: "Full Stack Development",
            description:
                "Building modern, dynamic, and responsive web applications using Next.js, React, and TypeScript with clean component architecture.",
        },
        {
            icon: <Server className="w-8 h-8 text-[#6fc844]" />,
            title: "Backend & REST APIs",
            description:
                "Designing secure and scalable server applications with Node.js, Express.js, JWT authentication, Better Auth, and modular route handlers.",
        },
        {
            icon: <Database className="w-8 h-8 text-[#6fc844]" />,
            title: "Database Architecture",
            description:
                "Structuring schemas, indexing, and data modeling across MongoDB, PostgreSQL, and MySQL for optimized query performance.",
        },
        {
            icon: <Layout className="w-8 h-8 text-[#6fc844]" />,
            title: "Modern UI/UX & Motion",
            description:
                "Crafting sleek, accessible user interfaces with Tailwind CSS and Framer Motion, focusing on responsive design and subtle micro-interactions.",
        },
    ];

    const personalInfo = [
        { label: "Age", value: "23" },
        { label: "Residence", value: "Bangladesh" },
        { label: "Freelance", value: "Available", highlight: true },
        { label: "Address", value: "Dhaka-1207, Bangladesh" },
        { label: "Phone", value: "+880 1744533593" },
        { label: "Email", value: "diponkorroy064@gmail.com" },
    ];

    const funFacts = [
        { icon: FolderGit2, number: "15+", label: "Completed Projects" },
        { icon: Award, number: "5+", label: "Full Stack Live Apps" },
        { icon: Sparkles, number: "20+", label: "Technologies Mastered" },
        { icon: CheckCircle2, number: "100%", label: "Dedication & Code Quality" },
    ];

    return (
        <section id="about" className="space-y-12">
            {/* Section Header */}
            <div>
                <div className="flex items-center gap-3">
                    <span className="w-8 h-0.5 bg-[#6fc844]" />
                    <p className="text-xs uppercase tracking-widest text-[#6fc844] font-bold">
                        Introduction
                    </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                    <span className="text-[#6fc844]">About</span> Me
                </h2>
            </div>

            {/* Main Bio Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#16171b] border border-zinc-800/80 rounded-2xl p-6 sm:p-8 relative overflow-hidden group shadow-xl"
            >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#6fc844]/5 blur-3xl rounded-full pointer-events-none" />

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Hi, I&apos;m <span className="text-[#6fc844]">Diponkor Roy</span> 👋
                </h3>
                <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mt-1">
                    Frontend & MERN Stack Developer
                </p>

                <div className="mt-5 space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                    <p>
                        I am a passionate <span className="text-white font-semibold">Frontend & MERN Stack Developer</span> who loves crafting clean, modern, and user-centric web applications. My core stack includes <span className="text-[#6fc844] font-medium">React.js, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS</span>.
                    </p>
                    {/* Eye-catching Academic & Analytical Mindset Callout */}
                    <div className="about-academic-callout relative my-5 rounded-xl border border-[#6fc844]/30 border-l-4 border-l-[#6fc844] p-4 sm:p-5 transition-all">
                        <div className="flex items-start gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-[#6fc844]/15 border border-[#6fc844]/30 flex items-center justify-center text-[#6fc844] shrink-0 mt-0.5">
                                <GraduationCap className="w-5 h-5 text-[#6fc844]" />
                            </div>
                            <div className="space-y-1.5 flex-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#6fc844] about-callout-tag">
                                        Academic Insight & Mindset
                                    </span>
                                </div>
                                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                                    My academic background in{" "}
                                    <span className="font-bold text-[#6fc844] about-callout-uni">
                                        Agriculture at Sher-e-Bangla Agricultural University
                                    </span>{" "}
                                    has deeply nurtured my analytical thinking, research discipline, and problem-solving mindset—enabling me to approach software engineering with a structured, real-world perspective.
                                </p>
                            </div>
                        </div>
                    </div>
                    <p>
                        From architecting role-based dashboards and integrating REST APIs to optimizing performance and polishing micro-interactions, I continuously strive to build impactful digital solutions that make everyday workflows seamless.
                    </p>
                </div>

                {/* Personal Info Grid (RyanCV vCard format) */}
                <div className="mt-8 pt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                    {personalInfo.map((info, i) => (
                        <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-[#121316] border border-zinc-800/60">
                            <span className="text-zinc-400 font-medium">{info.label}:</span>
                            <span className={`font-semibold ${info.highlight ? "text-[#6fc844]" : "text-zinc-200"}`}>
                                {info.value}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Services / What I Do */}
            <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="text-[#6fc844]">Services</span> / What I Do
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                            className="bg-[#16171b] border border-zinc-800/80 hover:border-[#6fc844]/50 rounded-2xl p-6 transition-all duration-300 shadow-lg group"
                        >
                            <div className="p-3 w-fit rounded-xl bg-[#121316] border border-zinc-800 group-hover:border-[#6fc844]/40 transition-colors mb-4">
                                {service.icon}
                            </div>
                            <h4 className="text-lg font-bold text-white group-hover:text-[#6fc844] transition-colors">
                                {service.title}
                            </h4>
                            <p className="mt-2 text-zinc-400 text-xs sm:text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Fun Facts / Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {funFacts.map((fact, index) => {
                    const Icon = fact.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            className="bg-[#16171b] border border-zinc-800/80 rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-center hover:border-zinc-700 transition-colors"
                        >
                            <Icon className="w-5 h-5 text-[#6fc844] mb-2" />
                            <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                                {fact.number}
                            </h4>
                            <p className="text-[11px] sm:text-xs text-zinc-400 mt-1 font-medium">
                                {fact.label}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
