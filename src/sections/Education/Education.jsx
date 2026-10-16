"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle, Code, Eye, Download } from "lucide-react";
import education from "@/data/education";

export default function Education() {
    const experiences = [
        {
            id: 1,
            role: "Full Stack & MERN Developer",
            organization: "Independent Projects & Freelance",
            duration: "2023 - Present",
            location: "Dhaka, Bangladesh",
            description:
                "Engineered responsive and scalable full-stack web platforms including StayNest, HireLoop, and PetHaven. Designed secure JWT & Better Auth workflows, role-based dashboards, RESTful APIs, and optimized database queries.",
            highlights: [
                "Built full-stack role-based dashboards with granular permission models.",
                "Implemented Next.js server components, SSR/SSG, and dynamic routing.",
                "Integrated MongoDB aggregation pipelines and RESTful API endpoints.",
            ],
        },
        {
            id: 2,
            role: "Frontend Development Specialist",
            organization: "Open Source & Web Development",
            duration: "2022 - 2023",
            location: "Remote",
            description:
                "Mastered modern JavaScript (ES6+), React.js, Tailwind CSS, and Framer Motion. Focused on responsive design, performance tuning, and reusable component libraries.",
            highlights: [
                "Converted complex UI/UX designs into pixel-perfect responsive web pages.",
                "Designed fluid micro-animations and intuitive interactive states.",
            ],
        },
    ];

    const proficiencyBars = [
        { skill: "React.js & Next.js", percentage: 95 },
        { skill: "Tailwind CSS & Modern UI", percentage: 95 },
        { skill: "JavaScript (ES6+) & TypeScript", percentage: 90 },
        { skill: "Node.js & Express.js", percentage: 88 },
        { skill: "MongoDB & Database Modeling", percentage: 85 },
        { skill: "Git, GitHub & Deployment", percentage: 90 },
    ];

    return (
        <section id="education" className="space-y-12">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3">
                        <span className="w-8 h-0.5 bg-[#6fc844]" />
                        <p className="text-xs uppercase tracking-widest text-[#6fc844] font-bold">
                            Experience & Credentials
                        </p>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                        <span className="text-[#6fc844]">My</span> Resume
                    </h2>
                </div>

                {/* Custom Split Resume Button (Aligned with RyanCV Section Theme) */}
                <div className="ryan-split-btn inline-flex items-stretch rounded-xl border-2 border-[#6fc844] bg-[#6fc844] overflow-hidden shadow-md shadow-[#6fc844]/20 hover:shadow-lg hover:shadow-[#6fc844]/35 transition-all w-fit">
                    <a
                        href="/resume/Diponkor_Roy_Full_Stack_Developer_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Resume in New Tab"
                        className="ryan-split-btn-text px-4 sm:px-5 py-2 font-black text-black text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center hover:bg-[#5eb537] transition-colors cursor-pointer select-none"
                    >
                        RESUME
                    </a>

                    <a
                        href="/resume/Diponkor_Roy_Full_Stack_Developer_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Resume (Preview)"
                        className="ryan-split-btn-icon w-10 sm:w-11 flex items-center justify-center bg-[#16171b] border-l-2 border-[#6fc844] text-[#6fc844] hover:bg-[#6fc844] hover:text-black transition-colors cursor-pointer group"
                    >
                        <Eye size={17} strokeWidth={2.4} className="transition-transform group-hover:scale-110" />
                    </a>

                    <a
                        href="/resume/Diponkor_Roy_Full_Stack_Developer_Resume.pdf"
                        download="Diponkor_Roy_Full_Stack_Developer_Resume.pdf"
                        title="Download Resume PDF"
                        className="ryan-split-btn-icon w-10 sm:w-11 flex items-center justify-center bg-[#16171b] border-l-2 border-[#6fc844] text-[#6fc844] hover:bg-[#6fc844] hover:text-black transition-colors cursor-pointer group"
                    >
                        <Download size={17} strokeWidth={2.4} className="transition-transform group-hover:scale-110" />
                    </a>
                </div>
            </div>

            {/* Dual Column: Experience & Education */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                {/* Left Column: Experience */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2.5 pb-2 border-b border-zinc-800">
                        <Briefcase className="w-5 h-5 text-[#6fc844]" />
                        <span>Experience</span>
                    </h3>

                    <div className="relative border-l border-zinc-800 ml-3.5 space-y-6 pl-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="relative bg-[#16171b] border border-zinc-800/80 rounded-2xl p-5 hover:border-[#6fc844]/40 transition-colors shadow-lg"
                            >
                                {/* Glowing dot on timeline */}
                                <div className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-[#6fc844] ring-4 ring-[#121316]" />

                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#6fc844]/10 text-[#6fc844] border border-[#6fc844]/20">
                                        {exp.duration}
                                    </span>
                                    <span className="text-xs text-zinc-400 flex items-center gap-1">
                                        <MapPin size={12} />
                                        {exp.location}
                                    </span>
                                </div>

                                <h4 className="text-lg font-bold text-white mt-2">
                                    {exp.role}
                                </h4>
                                <p className="text-xs font-semibold text-zinc-300">
                                    {exp.organization}
                                </p>

                                <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="mt-3 space-y-1.5">
                                    {exp.highlights.map((h, i) => (
                                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                                            <CheckCircle className="w-3.5 h-3.5 text-[#6fc844] shrink-0 mt-0.5" />
                                            <span>{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Education */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2.5 pb-2 border-b border-zinc-800">
                        <GraduationCap className="w-5 h-5 text-[#6fc844]" />
                        <span>Education</span>
                    </h3>

                    <div className="relative border-l border-zinc-800 ml-3.5 space-y-6 pl-6">
                        {education.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="relative bg-[#16171b] border border-zinc-800/80 rounded-2xl p-5 hover:border-[#6fc844]/40 transition-colors shadow-lg"
                            >
                                {/* Glowing dot on timeline */}
                                <div className="absolute -left-[31px] top-6 w-3 h-3 rounded-full bg-[#6fc844] ring-4 ring-[#121316]" />

                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#6fc844]/10 text-[#6fc844] border border-[#6fc844]/20">
                                        {item.duration}
                                    </span>
                                    <span className="text-xs text-zinc-400 flex items-center gap-1">
                                        <MapPin size={12} />
                                        {item.location}
                                    </span>
                                </div>

                                <h4 className="text-base sm:text-lg font-bold text-white mt-2">
                                    {item.degree}
                                </h4>
                                <p className="text-xs font-semibold text-[#6fc844]">
                                    {item.institution}
                                </p>

                                <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                                    {item.description}
                                </p>

                                {item.subjects && (
                                    <div className="mt-4 pt-3 border-t border-zinc-800/80">
                                        <p className="text-xs font-semibold text-zinc-300 mb-2">
                                            Relevant Coursework:
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {item.subjects.map((sub, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-0.5 text-[11px] rounded-md bg-[#121316] text-zinc-300 border border-zinc-800"
                                                >
                                                    {sub}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            {/* RyanCV Skill Proficiency Bars */}
            <div className="bg-[#16171b] border border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Code className="w-5 h-5 text-[#6fc844]" />
                    <span>Core Technical Proficiency</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                    {proficiencyBars.map((bar, i) => (
                        <div key={i} className="space-y-2">
                            <div className="flex justify-between items-center text-xs sm:text-sm">
                                <span className="font-semibold text-zinc-200">{bar.skill}</span>
                                <span className="font-mono text-[#6fc844] font-bold">{bar.percentage}%</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-[#121316] border border-zinc-800 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${bar.percentage}%` }}
                                    transition={{ duration: 1, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="h-full bg-gradient-to-r from-[#6fc844]/80 to-[#6fc844] rounded-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
