"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import SocialLinks from "@/components/SocialLinks";


export default function Hero() {
    return (
        <section className="min-h-screen flex items-center bg-slate-950 text-white px-6 md:px-12 pt-24 pb-5">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Side */}
                <motion.div
                    initial={{ opacity: 0, x: -70 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}>
                    <p className="text-sky-400 text-lg mb-2">
                        Hello, I'm
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Diponkor Roy
                    </h1>

                    <h2 className="text-2xl md:text-3xl mt-4 text-gray-300 font-semibold">
                        Frontend Developer
                        <span className="text-sky-400">
                            {" "}
                            (MERN Stack)
                        </span>
                    </h2>

                    <p className="mt-8 text-gray-400 leading-8 max-w-xl">
                        Passionate MERN Stack Developer with experience building
                        responsive, user-friendly, and scalable web applications
                        using React, Next.js, Node.js, Express.js, and MongoDB.
                        I enjoy transforming ideas into real-world digital
                        experiences with clean code and modern UI.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-5 mt-8">
                        <a
                            href="/resume/Diponkor_Roy_Resume.pdf"
                            download
                            className="bg-sky-500 hover:bg-sky-600 transition px-7 py-4 rounded-full font-semibold">
                            Download Resume
                        </a>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer border border-sky-500 hover:bg-sky-500 transition px-7 py-4 rounded-full font-semibold"
                        >
                            Hire Me
                        </Link>

                    </div>

                    <SocialLinks />

                </motion.div>

                {/* Right Side */}

                <motion.div
                    initial={{ opacity: 0, scale: .7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .8 }}
                    className="flex justify-center">

                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-sky-500 blur-[120px] opacity-30"></div>
                        <Image
                            src="/images/diponkor_roy.png"
                            alt="Diponkor Roy"
                            width={420}
                            height={450}
                            priority
                            className="rounded-full border-4 border-sky-500 object-cover relative z-10"
                        />

                    </div>

                </motion.div>

            </div>
        </section>
    );
}
