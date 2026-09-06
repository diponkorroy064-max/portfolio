"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import SocialLinks from "@/components/SocialLinks";
import ResumeButton from "@/components/ResumeButton";

const designations = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Problem Solver",
];

export default function Hero() {
    const [designationIndex, setDesignationIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch for client-side state
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const currentText = designations[designationIndex];
        let timeout;

        if (!isDeleting && displayText.length < currentText.length) {
            timeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, displayText.length + 1));
            }, 100);
        } else if (!isDeleting && displayText.length === currentText.length) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 1800);
        } else if (isDeleting && displayText.length > 0) {
            timeout = setTimeout(() => {
                setDisplayText(currentText.slice(0, displayText.length - 1));
            }, 60);
        } else if (isDeleting && displayText.length === 0) {
            setIsDeleting(false);
            setDesignationIndex((prev) => (prev + 1) % designations.length);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, designationIndex, mounted]);

    return (
        <section id="home" className="min-h-screen bg-slate-950 text-white flex items-center overflow-hidden px-5 sm:px-6 md:px-10 lg:px-12 pt-28 sm:pt-28 md:pt-32 pb-14 sm:pb-16 md:pb-20">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 md:gap-16 lg:gap-20 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 lg:order-1 text-center lg:text-left"
                >
                    <p className="text-sky-400 text-base sm:text-lg md:text-xl font-medium">
                        👋 Hello, I'm
                    </p>

                    <h1 className="mt-3 sm:mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                        Diponkor Roy
                    </h1>

                    {/* Typing Designation */}
                    <div className="mt-5 h-10 sm:h-11 md:h-12 flex items-center justify-center lg:justify-start">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-sky-400">
                            {mounted ? displayText : ""}
                            <span className="ml-1 text-white animate-pulse">|</span>
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="mt-5 sm:mt-6 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg text-gray-400 leading-7 sm:leading-8">
                        Passionate MERN Stack Developer with experience building responsive, user-friendly, and scalable web applications using{" "}
                        <span className="font-semibold text-sky-400">
                            Next.js, React.js, JavaScript, Node.js, Express.js, MongoDB, and Tailwind CSS
                        </span>
                        . I enjoy transforming ideas into real-world digital experiences through clean code and modern UI design.
                    </p>

                    {/* Buttons */}
                    <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5">
                        <ResumeButton type="download" className="w-full sm:w-auto" />

                        <Link
                            to="contact"
                            smooth
                            duration={500}
                            offset={-70}
                            className="w-full sm:w-auto cursor-pointer border border-sky-500 hover:bg-sky-500 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold transition-all duration-300 text-center"
                        >
                            Hire Me
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="mt-8 sm:mt-9 md:mt-10 flex justify-center lg:justify-start">
                        <SocialLinks />
                    </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="order-1 lg:order-2 flex justify-center w-full"
                >
                    <div className="relative">
                        {/* Glow */}
                        <div className="absolute inset-0 rounded-full bg-sky-500 blur-[80px] sm:blur-[100px] md:blur-[120px] opacity-25" />

                        {/* Image */}
                        <Image
                            src="/images/diponkor.png"
                            alt="Diponkor Roy"
                            width={500}
                            height={500}
                            priority
                            className="relative z-10 rounded-full border-4 border-sky-500 object-cover w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

