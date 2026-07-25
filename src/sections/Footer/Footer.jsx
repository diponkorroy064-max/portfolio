"use client";
import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-10">

                    {/* Left */}
                    <div>
                        <h2 className="text-3xl font-bold text-sky-400">
                            Diponkor Roy
                        </h2>

                        <p className="mt-5 text-gray-400 leading-8">
                            Frontend Developer (MERN Stack) passionate about
                            building responsive, modern, and user-friendly web
                            applications using React, Next.js, Node.js,
                            Express.js, and MongoDB.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-5">
                            Quick Links
                        </h3>

                        <ul className="grid grid-cols-2 gap-3 text-gray-400">
                            {[
                                "home",
                                "about",
                                "skills",
                                "education",
                                "projects",
                                "reviews",
                                "contact",
                            ].map((item) => (

                                <li key={item}>
                                    <Link
                                        to={item}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className="cursor-pointer hover:text-sky-400 transition capitalize">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    
                    {/* Contact & Social */}
                    <div>
                        <h3 className="text-xl font-semibold mb-5">
                            Connect With Me
                        </h3>

                        <div className="space-y-4">
                            
                            {/* Email link */}
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=diponkorroy064@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-sky-400 transition-colors duration-300">
                                <Mail size={18} />
                                <span>diponkorroy064@gmail.com</span>
                            </a>

                            <div className="flex gap-4 mt-6">
                                <a href="https://github.com/diponkorroy064-max"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-slate-800 hover:bg-sky-500 flex items-center justify-center transition">
                                    <FaGithub size={20} />
                                </a>

                                <a href="https://www.linkedin.com/in/diponkorroy21010504"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-slate-800 hover:bg-sky-500 flex items-center justify-center transition">
                                    <FaLinkedin size={20} />
                                </a>

                                <a href="https://www.facebook.com/diponkorroy.roy.92"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-slate-800 hover:bg-sky-500 flex items-center justify-center transition">
                                    <FaFacebook size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom */}
                <div className="border-t border-slate-800 mt-12 pt-4 flex flex-col md:flex-row justify-between items-center gap-6">

                    <p className="text-gray-400 text-center">
                        © {currentYear} Diponkor Roy. All Rights Reserved.
                    </p>

                    <Link to="home" smooth={true}
                        duration={500}
                        offset={-70}
                        className="cursor-pointer w-12 h-12 rounded-full bg-sky-500 hover:bg-sky-600 flex items-center justify-center transition">
                        <ArrowUp size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
