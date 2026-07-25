"use client";
import { motion } from "framer-motion";
import skills from "@/data/skills";


export default function Skills() {
    return (
        <section
            id="skills"
            className="py-12 bg-slate-950 text-white px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                    className="text-center">
                    <p className="text-sky-400 text-lg font-semibold">
                        My Expertise
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        Technical Skills
                    </h2>

                    <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full mt-5"></div>
                </motion.div>

                
                {/* Categories */}
                <div className="grid md:grid-cols-2 gap-8 mt-10">

                    {skills.map((category, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: .6,
                                delay: index * .2,
                            }}
                            viewport={{ once: true }}
                            className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

                            <h3 className="text-2xl font-bold text-sky-400 mb-8">
                                {category.category}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">

                                {category.items.map((skill, i) => {

                                    const Icon = skill.icon;

                                    return (
                                        <motion.div
                                            key={i}
                                            whileHover={{
                                                y: -8,
                                                scale: 1.05,
                                            }}
                                            className="bg-slate-800 rounded-xl p-5 text-center border border-slate-700 hover:border-sky-500 transition">

                                            <Icon
                                                size={38}
                                                className="mx-auto text-sky-400 mb-4"/>

                                            <h4 className="text-gray-300 font-medium">
                                                {skill.name}
                                            </h4>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

