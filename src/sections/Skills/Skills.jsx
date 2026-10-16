"use client";
import { motion } from "framer-motion";
import skills from "@/data/skills";

export default function Skills() {
    return (
        <section id="skills" className="space-y-10">
            {/* Section Header */}
            <div>
                <div className="flex items-center gap-3">
                    <span className="w-8 h-0.5 bg-[#6fc844]" />
                    <p className="text-xs uppercase tracking-widest text-[#6fc844] font-bold">
                        Capabilities & Stack
                    </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                    <span className="text-[#6fc844]">Technical</span> Skills
                </h2>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-[#16171b] rounded-2xl p-6 border border-zinc-800/80 hover:border-zinc-700 transition-colors shadow-lg flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between pb-3 mb-5 border-b border-zinc-800">
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#6fc844]" />
                                    {category.category}
                                </h3>
                                <span className="text-xs font-semibold text-zinc-400">
                                    {category.items.length} Skills
                                </span>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {category.items.map((skill, i) => {
                                    const Icon = skill.icon;
                                    return (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -4, scale: 1.02 }}
                                            className="bg-[#121316] rounded-xl p-3 text-center border border-zinc-800/80 hover:border-[#6fc844]/60 hover:shadow-md hover:shadow-[#6fc844]/10 transition-all duration-200 group cursor-default"
                                        >
                                            <Icon
                                                size={28}
                                                className="mx-auto text-zinc-400 group-hover:text-[#6fc844] group-hover:scale-110 transition-all duration-200 mb-2"
                                            />
                                            <h4 className="text-xs font-medium text-zinc-300 group-hover:text-white transition-colors truncate">
                                                {skill.name}
                                            </h4>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
