"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import SocialLinks from "@/components/SocialLinks";


export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen bg-slate-950 text-white flex items-center pt-24 pb-16 px-5 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left order-2 lg:order-1">
                    <p className="text-sky-400 text-lg font-medium">
                        👋 Hello, I'm
                    </p>

                    <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                        Diponkor Roy
                    </h1>

                    <h2 className="mt-5 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300">
                        Frontend Developer{" "}
                        <span className="text-sky-400">(MERN Stack)</span>
                    </h2>

                    <p className="mt-8 max-w-2xl mx-auto lg:mx-0 text-gray-400 text-base sm:text-lg leading-8">
                        Passionate MERN Stack Developer with experience building
                        responsive, user-friendly, and scalable web applications using{" "}
                        <span className="font-semibold text-sky-400">
                            Next.js, React.js, JavaScript, Node.js, Express.js,
                            MongoDB, Tailwind CSS
                        </span>
                        . I enjoy transforming ideas into real-world digital
                        experiences through clean code and modern UI design.
                    </p>

                    
                    {/* Buttons */}
                    <div className="mt-10 flex flex-col justify-center md:justify-start sm:flex-row items-center lg:items-start gap-5">
                        <a
                            href="/resume/Diponkor_Roy_Resume.pdf"
                            download
                            className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 px-8 py-4 rounded-full font-semibold transition text-center">
                            Download Resume
                        </a>

                        <Link
                            to="contact"
                            smooth
                            duration={500}
                            offset={-70}
                            className="w-full sm:w-auto cursor-pointer border border-sky-500 hover:bg-sky-500 px-8 py-4 rounded-full font-semibold transition text-center">
                            Hire Me
                        </Link>
                    </div>

                    <div className="mt-10 flex justify-center lg:justify-start">
                        <SocialLinks />
                    </div>
                </motion.div>

                
                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center order-1 lg:order-2">
                    <div className="relative">

                        {/* Glow */}
                        <div className="absolute inset-0 rounded-full bg-sky-500 blur-[120px] opacity-30"></div>

                        <Image src="/images/diponkor_roy.png" alt="Diponkor Roy" width={500} height={500} priority className="relative z-10 rounded-full border-4 border-sky-500 object-cover w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-105 lg:h-105"/>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
