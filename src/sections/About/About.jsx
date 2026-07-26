"use client";
import { motion } from "framer-motion";
import { Code2, Laptop, BookOpen, Lightbulb,} from "lucide-react";


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
            className="bg-slate-900 py-12 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                    className="text-center">
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
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto mt-10">
                    <div className="bg-slate-800/60 backdrop-blur-lg border border-slate-700 rounded-3xl p-8 md:p-10 shadow-xl">

                        <p className="text-xl md:text-3xl font-semibold leading-relaxed text-white">
                            Hi, I'm{" "}
                            <span className="text-sky-400">Diponkor Roy</span> 👋
                        </p>

                        <div className="w-20 h-1 bg-sky-500 rounded-full mt-4 mb-6"></div>

                        <div className="space-y-7 text-gray-300 leading-9 text-sm md:text-lg">

                            <p>
                                I'm a passionate{" "}
                                <span className="font-semibold text-sky-400">
                                    Frontend Developer (MERN Stack)
                                </span>{" "}
                                who enjoys building modern, responsive, and user-friendly web
                                applications using{" "}
                                <span className="font-semibold text-white">
                                    React.js, Next.js, Node.js, Express.js, MongoDB,
                                    Tailwind CSS,
                                </span>{" "}
                                and other modern technologies.
                            </p>

                            <p className="border-l-4 border-sky-500 pl-6">
                                My academic background in{" "}
                                <span className="text-sky-400 font-semibold">
                                    Agriculture
                                </span>{" "}
                                has strengthened my analytical thinking, research mindset,
                                and problem-solving abilities. It allows me to approach
                                software development from a unique perspective and create
                                practical solutions for real-world challenges.
                            </p>

                            <p>
                                I enjoy transforming ideas into clean, scalable, and
                                interactive digital experiences. Whether it's designing
                                beautiful interfaces, integrating REST APIs, or optimizing
                                application performance, I'm always eager to learn and improve.
                            </p>

                            <p>
                                Beyond coding, I enjoy reading books, exploring emerging
                                technologies, and continuously expanding my knowledge.
                                My goal is to become a skilled{" "}
                                <span className="font-semibold text-sky-400">
                                    Full Stack Software Engineer
                                </span>{" "}
                                who builds impactful products that make people's lives easier.
                            </p>

                        </div>
                    </div>
                </motion.div>

                
                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">

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
                            className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-sky-500 transition-all">

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
