"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import navLinks from "@/constants/navLinks";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <motion.header
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className="container mx-auto fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800"
            >
                <nav className="max-w-7xl mx-auto h-20 px-5 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Logo */}

                    <Link
                        to="home"
                        smooth
                        duration={500}
                        offset={-70}
                        className="cursor-pointer"
                    >
                        <h1 className="text-2xl md:text-3xl font-bold text-sky-400">
                            Diponkor
                            <span className="text-white">.</span>
                        </h1>
                    </Link>

                    {/* Desktop Menu */}

                    <ul className="hidden lg:flex items-center gap-8">
                        {navLinks.map((item) => (
                            <li key={item.id}>
                                <Link
                                    activeClass="text-sky-400"
                                    spy
                                    smooth
                                    duration={500}
                                    offset={-70}
                                    to={item.to}
                                    className="cursor-pointer text-gray-300 hover:text-sky-400 transition font-medium"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Resume */}

                    <a
                        href="/resume/Diponkor_Roy_Resume.pdf"
                        download
                        className="hidden lg:flex items-center gap-2 bg-sky-500 hover:bg-sky-600 px-5 py-3 rounded-full font-semibold transition"
                    >
                        <Download size={18} />
                        Resume
                    </a>

                    {/* Mobile Button */}

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden text-white"
                    >
                        {menuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Menu */}

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.35 }}
                        className="fixed inset-0 z-40 bg-slate-950 lg:hidden"
                    >
                        <div className="pt-28 px-8">

                            <ul className="space-y-7 text-center">

                                {navLinks.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            to={item.to}
                                            smooth
                                            duration={500}
                                            offset={-70}
                                            onClick={() => setMenuOpen(false)}
                                            className="block text-2xl text-gray-300 hover:text-sky-400 transition"
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}

                            </ul>

                            <a
                                href="/resume/Diponkor_Roy_Resume.pdf"
                                download
                                className="mt-10 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 rounded-xl py-4 font-semibold"
                            >
                                <Download size={20} />
                                Download Resume
                            </a>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}