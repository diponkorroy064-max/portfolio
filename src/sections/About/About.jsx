"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Laptop,
    BookOpen,
    Lightbulb,
} from "lucide-react";

export default function About() {
    const cards = [
        {
            icon: <Code2 size={30} />,
            title: "Programming Journey",
            description:
                "Started with HTML, CSS, and JavaScript before moving into React, Next.js, Node.js, Express.js, and MongoDB. I enjoy building responsive and scalable web applications with modern technologies.",
        },
        {
            icon: <Laptop size={30} />,
            title: "What I Enjoy",
            description:
                "I enjoy creating clean user interfaces, developing reusable components, integrating REST APIs, solving real-world problems, and continuously learning new technologies.",
        },
        {
            icon: <BookOpen size={30} />,
            title: "Beyond Programming",
            description:
                "Outside programming, I enjoy reading books, exploring agriculture and technology, learning new development tools, and improving my problem-solving skills.",
        },
        {
            icon: <Lightbulb size={30} />,
            title: "My Goal",
            description:
                "My goal is to become a skilled Full Stack Developer capable of building impactful, scalable, and user-friendly applications that make people's lives easier.",
        },
    ];

    return (
        <section
            id="about"
            className="bg-slate-900 py-24 px-6 lg:px-12"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-sky-400 font-semibold text-lg">
                        Get To Know Me
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
                        About Me
                    </h2>

                    <div className="w-24 h-1 bg-sky-500 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                {/* Introduction */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mt-12 text-center"
                >
                    <p className="text-lg leading-9 text-gray-300">
                        Hello! I'm{" "}
                        <span className="text-sky-400 font-semibold">
                            Diponkor Roy
                        </span>
                        , a passionate Frontend Developer specializing in the
                        MERN Stack. I enjoy transforming creative ideas into
                        interactive, responsive, and user-friendly web
                        applications using React.js, Next.js, Node.js,
                        Express.js, MongoDB, and Tailwind CSS.

                        <br />
                        <br />

                        My academic background in Agriculture has strengthened
                        my analytical thinking and problem-solving skills,
                        allowing me to approach software development from a
                        unique perspective. I believe technology should solve
                        real-world problems while providing an excellent user
                        experience.

                        <br />
                        <br />

                        I'm a lifelong learner who loves exploring modern web
                        technologies, building personal projects, collaborating
                        with teams, and continuously improving my development
                        skills.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

                    {cards.map((card, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: .5,
                                delay: index * .15,
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                            }}
                            className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-sky-500 transition-all"
                        >

                            <div className="text-sky-400 mb-5">
                                {card.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-4">
                                {card.title}
                            </h3>

                            <p className="text-gray-400 leading-7">
                                {card.description}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}
