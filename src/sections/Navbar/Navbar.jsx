"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import navLinks from "@/constants/navLinks";
import ResumeButton from "@/components/ResumeButton";


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    return (
        <>
            <motion.header initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800">
                <nav className="max-w-7xl mx-auto h-20 px-5 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* LOGO */}
                    <NextLink href="/" className="cursor-pointer">
                        <h1 className="text-2xl md:text-3xl font-bold text-sky-400">
                            Diponkor<span className="text-white">.</span>
                        </h1>
                    </NextLink>

                    {/* DESKTOP MENU */}
                    <ul className="hidden lg:flex items-center gap-8">
                        {navLinks.map((item) => {
                            const isActiveRoute = item.isRoute && pathname === item.path;

                            return (
                                <li key={item.id}>
                                    {item.isRoute || !isHomePage ? (
                                        /* Page Link for /projects or non-home pages */
                                        <NextLink
                                            href={item.path}
                                            className={`transition font-medium ${isActiveRoute
                                                    ? "text-sky-400 font-semibold border-b-2 border-sky-400 pb-1"
                                                    : "text-gray-300 hover:text-sky-400"
                                                }`}
                                        >
                                            {item.title}
                                        </NextLink>
                                    ) : (
                                        /* Smooth Scroll Link for Homepage Sections */
                                        <ScrollLink
                                            activeClass="text-sky-400 font-semibold border-b-2 border-sky-400 pb-1"
                                            spy
                                            smooth
                                            duration={500}
                                            offset={-70}
                                            to={item.to}
                                            className="cursor-pointer text-gray-300 hover:text-sky-400 transition font-medium"
                                        >
                                            {item.title}
                                        </ScrollLink>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    {/* RESUME BUTTON */}
                    <ResumeButton type="view" className="hidden lg:flex" />

                    {/* MOBILE TOGGLE BUTTON */}
                    <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2 rounded-lg hover:bg-slate-900 transition" aria-label="Toggle Navigation Menu">
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </nav>
            </motion.header>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.35 }}
                        className="fixed inset-0 z-40 bg-slate-950 lg:hidden">
                        <div className="pt-28 px-8">
                            <ul className="space-y-7 text-center">
                                {navLinks.map((item) => {
                                    const isActiveRoute = item.isRoute && pathname === item.path;

                                    return (
                                        <li key={item.id}>
                                            {item.isRoute || !isHomePage ? (
                                                <NextLink
                                                    href={item.path}
                                                    onClick={() => setMenuOpen(false)}
                                                    className={`block text-2xl transition ${isActiveRoute
                                                            ? "text-sky-400 font-semibold"
                                                            : "text-gray-300 hover:text-sky-400"
                                                        }`}
                                                >
                                                    {item.title}
                                                </NextLink>
                                            ) : (
                                                <ScrollLink
                                                    to={item.to}
                                                    smooth
                                                    duration={500}
                                                    offset={-70}
                                                    onClick={() => setMenuOpen(false)}
                                                    activeClass="text-sky-400 font-semibold"
                                                    spy
                                                    className="block text-2xl text-gray-300 hover:text-sky-400 transition cursor-pointer"
                                                >
                                                    {item.title}
                                                </ScrollLink>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>

                            <div className="mt-10 flex justify-center">
                                <ResumeButton type="view" className="w-full max-w-xs" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

