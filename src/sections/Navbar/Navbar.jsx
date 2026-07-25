"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import navLinks from "@/constants/navLinks";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 z-1000 bg-slate-950/80 backdrop-blur-md border-b border-gray-500 container mx-auto">
            <nav className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer"
                    >
                        <h1 className="text-2xl font-bold text-sky-400">
                            Diponkor<span className="text-white">.</span>
                        </h1>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((item) => (
                            <li key={item.id}>
                                <Link
                                    activeClass="text-sky-400"
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="cursor-pointer text-gray-300 hover:text-sky-400 transition font-medium"
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Resume Button */}
                    <a
                        href="/resume/Diponkor_Roy_Resume.pdf"
                        download
                        className="hidden md:inline-block bg-sky-500 hover:bg-sky-600 px-5 py-2 rounded-full text-white font-semibold transition"
                    >
                        Resume
                    </a>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-white"
                    >
                        {menuOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-slate-900 rounded-xl mb-5 p-6"
                    >
                        <ul className="space-y-5">
                            {navLinks.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        onClick={() => setMenuOpen(false)}
                                        className="block cursor-pointer text-gray-300 hover:text-sky-400 transition"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}

                            <a
                                href="/resume/Diponkor_Roy_Resume.pdf"
                                download
                                className="block text-center bg-sky-500 hover:bg-sky-600 py-3 rounded-lg font-semibold"
                            >
                                Download Resume
                            </a>
                        </ul>
                    </motion.div>
                )}
            </nav>
        </motion.header>
    );
}
