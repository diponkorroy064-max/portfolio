"use client";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import education from "@/data/education";


export default function Education() {
    return (
        <section
            id="education"
            className="bg-slate-900 py-12 px-6 lg:px-12 text-white">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center">
                    <p className="text-sky-400 font-semibold text-lg">
                        Academic Journey
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        Education
                    </h2>

                    <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full mt-5"></div>
                </motion.div>

                
                {/* Timeline */}
                <div className="relative mt-20">

                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-6 top-0 w-1 h-full bg-sky-500 rounded-full"></div>

                    {education.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                            className="relative flex items-start gap-8 mb-14">
                            {/* Timeline Icon */}

                            <div className="w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center z-10 shrink-0">
                                <GraduationCap size={24} />
                            </div>

                            {/* Card */}
                            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 w-full hover:border-sky-500 transition-all">

                                <h3 className="text-2xl font-bold">
                                    {item.degree}
                                </h3>

                                <p className="text-sky-400 mt-2 font-medium">
                                    {item.institution}
                                </p>

                                <div className="flex flex-wrap gap-6 mt-5 text-gray-400">

                                    <div className="flex items-center gap-2">
                                        <MapPin size={18} />
                                        {item.location}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Calendar size={18} />
                                        {item.duration}
                                    </div>

                                </div>

                                <p className="text-gray-300 mt-6 leading-8">
                                    {item.description}
                                </p>

                                {/* Subjects */}

                                <div className="mt-8">

                                    <h4 className="font-semibold text-lg mb-4">
                                        Relevant Subjects
                                    </h4>

                                    <div className="flex flex-wrap gap-3">
                                        {item.subjects.map((subject, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-2 rounded-full bg-slate-700 text-gray-300 hover:bg-sky-500 hover:text-white transition">
                                                {subject}
                                            </span>
                                        ))}
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
