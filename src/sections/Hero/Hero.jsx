"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiSun, FiMenu } from "react-icons/fi";
import SocialLinks from "@/components/SocialLinks";
import ResumeButton from "@/components/ResumeButton";

const designations = [
    "FULL STACK DEVELOPER",
    "MERN STACK DEVELOPER",
    "PROBLEM SOLVER",
];

const navItems = [
    { name: "About", to: "about", active: true },
    { name: "Works", to: "portfolio" },
    { name: "Services", to: "services" },
    { name: "Resume", to: "resume" },
    { name: "Skills", to: "skills" },
    { name: "Blog", to: "blog" },
    { name: "Contact", to: "contact" },
];

export default function Hero() {
    const [designationIndex, setDesignationIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // টাইপরাইটার অ্যানিমেশন ইফেক্ট
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
        <div className="bg-[#0b0c0e] text-white min-h-screen relative overflow-hidden font-sans">
            {/* ব্যাকগ্রাউন্ডে সূক্ষ্ম সবুজ নিয়ন আভা (Glowing Ambient Effect) */}
            <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#6fc844]/10 blur-[150px] rounded-full pointer-events-none" />

            {/* ১. শুধুমাত্র মোবাইলের জন্য স্টিকি টপ হেডার (ছবি ৪ অনুযায়ী) */}
            <header className="lg:hidden sticky top-0 z-50 flex items-center justify-between px-5 py-4 bg-[#0e0f12]/90 backdrop-blur-md border-b border-zinc-800/60">
                <div>
                    <h2 className="text-base font-bold text-white tracking-wide">Diponkor Roy</h2>
                    <p className="text-xs text-[#6fc844] font-medium tracking-wider">
                        {mounted ? displayText.slice(0, 14) : "DEVELOPER"}
                    </p>
                </div>
                <div className="flex items-center gap-4 text-zinc-400">
                    <button aria-label="Toggle Theme" className="hover:text-white transition-colors">
                        <FiSun className="w-5 h-5" />
                    </button>
                    <button aria-label="Open Menu" className="hover:text-white transition-colors">
                        <FiMenu className="w-6 h-6" />
                    </button>
                </div>
            </header>

            {/* মূল কন্টেইনার (ডেস্কটপে ২ কলাম, মোবাইলে ১ কলাম) */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

                    {/* ======================================================== */}
                    {/* বাম পাশের প্রোফাইল কার্ড (Desktop: col-span-5, Mobile: full) */}
                    {/* ======================================================== */}
                    <motion.aside
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-5 w-full bg-[#16171b] border border-zinc-800/80 rounded-3xl p-5 sm:p-7 shadow-2xl relative flex flex-col items-center"
                    >
                        {/* বড় স্ক্রিনে কার্ডের ভেতরের টপ আইকন (হ্যামবার্গার ও সান আইকন) */}
                        <div className="w-full hidden lg:flex items-center justify-between text-zinc-500 mb-5">
                            <FiMenu className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                            <FiSun className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                        </div>

                        {/* প্রোফাইল ইমেজ কন্টেইনার */}
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/70 mb-6 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
                            <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#6fc844]/25 blur-3xl rounded-full pointer-events-none" />

                            <Image
                                src="/images/diponkor.png"
                                alt="Diponkor Roy"
                                fill
                                priority
                                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* নাম */}
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white text-center">
                            Diponkor Roy
                        </h1>

                        {/* টাইপিং পদবি ও ব্লিংকিং কার্সর */}
                        <div className="mt-2 h-7 flex items-center justify-center">
                            <p className="text-xs sm:text-sm uppercase tracking-widest text-zinc-400 font-medium">
                                {mounted ? displayText : designations[0]}
                                <span className="text-[#6fc844] font-bold animate-pulse ml-1">_</span>
                            </p>
                        </div>

                        {/* সোশ্যাল মিডিয়া লিঙ্কস */}
                        <div className="mt-5 mb-6 flex justify-center">
                            <SocialLinks />
                        </div>

                        {/* Download CV বাটন (ছবির মতো চওড়া গ্রিন বাটন) */}
                        <div className="w-full">
                            <ResumeButton
                                type="download"
                                className="w-full !bg-[#6fc844] hover:!bg-[#5eb537] !text-black font-bold !py-3.5 !rounded-xl !text-center transition-all duration-300 shadow-lg shadow-[#6fc844]/20 flex items-center justify-center gap-2 tracking-wide text-sm sm:text-base"
                            />
                        </div>
                    </motion.aside>

                    {/* ======================================================== */}
                    {/* ডান পাশের মূল কনটেন্ট (Desktop: col-span-7, Mobile: full) */}
                    {/* ======================================================== */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-7 flex flex-col justify-center pt-2 lg:pt-4"
                    >
                        {/* টপ নেভিগেশন পিল বাটনস (ছবি ৩ অনুযায়ী) */}
                        <nav className="flex flex-wrap gap-2.5 mb-8 sm:mb-10">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className={`cursor-pointer px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${item.active
                                            ? "text-[#6fc844] border-[#6fc844] bg-[#6fc844]/10 shadow-sm shadow-[#6fc844]/20"
                                            : "text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-600 bg-zinc-900/60"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* সাব-হেডিং */}
                        <p className="text-zinc-300 text-lg sm:text-xl font-medium tracking-wide flex items-center gap-2">
                            Hello, I&apos;m <span className="text-[#6fc844] font-bold">Diponkor Roy</span>
                        </p>

                        {/* বড় বোল্ড মেইন হেডলাইন (ছবি ৩ এর মতো হাইলাইটেড ক্যাপসুলসহ) */}
                        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-white">
                            Full Stack & MERN Stack{" "}
                            <span className="inline-block bg-[#6fc844] text-black px-3.5 py-0.5 rounded-full font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl align-middle shadow-md shadow-[#6fc844]/30">
                                Developer
                            </span>{" "}
                            Based in Dhaka, Bangladesh.
                        </h2>

                        {/* বিস্তারিত বিবরণ */}
                        <p className="mt-6 text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
                            Passionate MERN Stack Developer with experience building responsive, user-friendly, and scalable web applications using{" "}
                            <span className="text-zinc-200 font-semibold">
                                Next.js, React.js, Node.js, Express.js, MongoDB, and Tailwind CSS
                            </span>
                            . I enjoy transforming complex ideas into clean code and modern digital experiences.
                        </p>

                        {/* অ্যাকশন বাটনস (Hire Me / Contact) */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="cursor-pointer bg-[#6fc844] hover:bg-[#5eb537] text-black px-8 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-[#6fc844]/25 text-sm sm:text-base text-center tracking-wide"
                            >
                                Hire Me
                            </Link>
                            <Link
                                to="portfolio"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="cursor-pointer border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 text-zinc-300 hover:text-white px-7 py-3.5 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base text-center"
                            >
                                View Works
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </main>
        </div>
    );
}
