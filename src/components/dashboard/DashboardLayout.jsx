"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  FileText, 
  Cpu, 
  Briefcase, 
  MessageSquare, 
  Mail, 
  Send,
  Menu,
  X,
  Sparkles
} from "lucide-react";

import SocialLinks from "@/components/SocialLinks";
import ResumeButton from "@/components/ResumeButton";
import TypewriterText from "@/components/ui/TypewriterText";
import ThemeToggle from "@/components/ui/ThemeToggle";

// Section Components
import About from "@/sections/about/About";
import Education from "@/sections/education/Education";
import Skills from "@/sections/skills/Skills";
import Projects from "@/sections/projects/Projects";
import Reviews from "@/sections/reviews/Reviews";
import Contact from "@/sections/contact/Contact";

const navTabs = [
  { id: "about", name: "About", icon: User },
  { id: "education", name: "Resume", icon: FileText },
  { id: "skills", name: "Skills", icon: Cpu },
  { id: "projects", name: "Works", icon: Briefcase },
  { id: "reviews", name: "Reviews", icon: MessageSquare },
  { id: "contact", name: "Contact", icon: Mail },
];

export default function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contentScrollRef = useRef(null);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);

    // Reset right panel scroll position to top
    if (contentScrollRef.current) {
      contentScrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }

    // On mobile devices, smoothly scroll down to the active content section
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      const mainElement = document.querySelector("main");
      if (mainElement) {
        mainElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden bg-[#0e0f12] text-white selection:bg-[#6fc844] selection:text-black font-sans relative flex flex-col justify-between">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-10 left-1/4 w-125 h-125 bg-[#6fc844]/5 blur-[170px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
      <div className="fixed bottom-10 right-1/4 w-112.5 h-112.5 bg-[#6fc844]/5 blur-[180px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />

      {/* ======================================================== */}
      {/* 1. MOBILE HEADER & DRAWER NAVIGATION (Small Devices)     */}
      {/* ======================================================== */}
      <header className="lg:hidden sticky top-0 z-50 flex items-center justify-between px-5 py-3.5 bg-[#121316]/95 backdrop-blur-md border-b border-zinc-800/80 shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#6fc844]/50">
            <Image
              src="/images/diponkor.png"
              alt="Diponkor Roy"
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white tracking-wide">Diponkor Roy</h2>
            <p className="text-[10px] text-[#6fc844] font-semibold tracking-wider uppercase">
              <TypewriterText className="text-[10px]" />
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle size={16} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden sticky top-15.25 z-40 bg-[#121316]/95 backdrop-blur-xl border-b border-zinc-800 px-5 py-4 grid grid-cols-2 gap-2"
          >
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-[#6fc844] text-black shadow-md shadow-[#6fc844]/20"
                      : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800"
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* 2. MAIN DASHBOARD CONTAINER (Desktop Full Screen View)    */}
      {/* ======================================================== */}
      <div className="w-full max-w-[1600px] mx-auto p-3 sm:p-4 lg:p-4 flex-1 flex flex-col lg:h-full lg:overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-4 items-stretch flex-1 lg:h-full lg:overflow-hidden">

          {/* ======================================================== */}
          {/* LEFT SIDE: FIXED PROFILE SIDEBAR (Never Scrolls!)       */}
          {/* ======================================================== */}
          <aside className="lg:col-span-5 xl:col-span-4 w-full bg-[#16171b] border border-zinc-800/80 rounded-none p-5 sm:p-6 shadow-2xl flex flex-col relative lg:h-full lg:overflow-y-auto custom-scrollbar shrink-0 space-y-4">
            
            {/* Top Glow Accent */}
            <div className="absolute top-0 inset-x-0 h-28 bg-linear-to-b from-[#6fc844]/15 via-transparent to-transparent pointer-events-none" />

            {/* Top Status */}
            <div>
              <div className="w-full flex items-center justify-between mb-3 z-10 relative">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#121316] text-[#6fc844] border border-[#6fc844]/30 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#6fc844] animate-pulse" />
                  Available for Work
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-zinc-500">Dhaka, BD</span>
                  <ThemeToggle size={14} className="w-7! h-7! hidden sm:flex" />
                </div>
              </div>

              {/* Profile Photo */}
              <div className="relative w-full aspect-square max-w-70 sm:max-w-[320px] lg:max-w-85 xl:max-w-90 mx-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800/90 mb-3.5 group shadow-lg">
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
                <Image
                  src="/images/diponkor.png"
                  alt="Diponkor Roy"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Name & Typewriter Subtitle */}
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white text-center">
                Diponkor Roy
              </h1>

              <div className="mt-1 h-6 flex items-center justify-center">
                <p className="text-xs uppercase tracking-widest text-[#6fc844] font-bold">
                  <TypewriterText />
                </p>
              </div>

              {/* Social Channels Row */}
              <div className="mt-3 mb-2 w-full flex justify-center">
                <SocialLinks />
              </div>
            </div>

            {/* Action Buttons & Quick Metadata */}
            <div className="space-y-3 pt-1">
              <div className="space-y-2">
                <ResumeButton
                  type="download"
                  className="w-full bg-[#6fc844] hover:bg-[#5eb537]! text-black! font-extrabold py-3! rounded-xl! text-center! transition-all duration-300 shadow-lg shadow-[#6fc844]/25 flex items-center justify-center gap-2 text-xs uppercase tracking-wide cursor-pointer"
                />

                <button
                  onClick={() => handleTabChange("contact")}
                  className="w-full bg-[#121316] hover:bg-zinc-900 text-zinc-300 hover:text-white font-bold py-2.5 px-4 rounded-xl text-xs border border-zinc-800 hover:border-zinc-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={13} className="text-[#6fc844]" />
                  <span>Contact Me</span>
                </button>
              </div>

              {/* Quick Info Grid (RyanCV vCard Info) */}
              <div className="w-full pt-3 pb-2 border-t border-zinc-800/80 space-y-2 text-xs text-zinc-400">
                <div className="flex justify-between items-center py-1 border-b border-zinc-800/40">
                  <span className="font-medium text-zinc-400">Residence</span>
                  <span className="font-semibold text-zinc-200">Bangladesh</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-zinc-800/40">
                  <span className="font-medium text-zinc-400">Freelance</span>
                  <span className="font-semibold text-[#6fc844]">Available</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-zinc-800/40">
                  <span className="font-medium text-zinc-400">Education</span>
                  <span className="font-semibold text-zinc-200">SAU (Agriculture)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-zinc-800/40">
                  <span className="font-medium text-zinc-400">Location</span>
                  <span className="font-semibold text-zinc-200">Dhaka-1207, BD</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-medium text-zinc-400">Email</span>
                  <span className="font-semibold text-zinc-200 truncate max-w-42.5" title="diponkorroy064@gmail.com">
                    diponkorroy064@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* ======================================================== */}
          {/* RIGHT SIDE: DASHBOARD WORKSPACE (Independent Scroll)     */}
          {/* ======================================================== */}
          <main className="lg:col-span-7 xl:col-span-8 flex flex-col bg-[#121316] border border-zinc-800/80 rounded-none shadow-2xl overflow-hidden lg:h-full">
            
            {/* Top Navigation Bar: Pinned & Always Visible on Desktop (Hidden on Small Devices) */}
            <div className="hidden lg:flex px-4 py-3 sm:px-5 sm:py-3.5 border-b border-zinc-800/80 bg-[#121316]/95 backdrop-blur-md shrink-0 items-center justify-between gap-2 z-20">
              <nav className="flex items-center gap-1.5 xl:gap-2 flex-wrap xl:flex-nowrap">
                {navTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className={`flex items-center gap-1.5 px-3 xl:px-4 py-1.5 sm:py-2 rounded-full text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                        isActive
                          ? "text-black bg-[#6fc844] border-[#6fc844] shadow-md shadow-[#6fc844]/25 scale-105"
                          : "text-zinc-400 border-zinc-800/80 hover:text-white hover:border-zinc-700 bg-zinc-900/60"
                      }`}
                    >
                      <Icon size={13} />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Right Controls: Status Indicator & Theme Toggle */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <Sparkles size={13} className="text-[#6fc844]" />
                  <span className="text-[11px] text-[#6fc844] font-bold uppercase">
                    {activeTab}
                  </span>
                </div>
                <ThemeToggle size={16} />
              </div>
            </div>

            {/* Scrollable Section Container: ONLY this part scrolls! */}
            <div 
              ref={contentScrollRef}
              className="flex-1 overflow-y-auto custom-scrollbar p-6 sm:p-8 lg:p-10 space-y-12"
            >
              <AnimatePresence mode="wait">
                {activeTab === "about" && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    <About />
                  </motion.div>
                )}

                {activeTab === "education" && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Education />
                  </motion.div>
                )}

                {activeTab === "skills" && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Skills />
                  </motion.div>
                )}

                {activeTab === "projects" && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Projects />
                  </motion.div>
                )}

                {activeTab === "reviews" && (
                  <motion.div
                    key="reviews"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Reviews />
                  </motion.div>
                )}

                {activeTab === "contact" && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Contact />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Minimalist Dashboard Footer */}
              <footer className="mt-12 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
                <p>© {new Date().getFullYear()} Diponkor Roy. All rights reserved.</p>
                <p className="text-zinc-400">
                  Crafted with <span className="text-[#6fc844]">Next.js</span> & <span className="text-[#6fc844]">Tailwind CSS</span>
                </p>
              </footer>
            </div>

          </main>

        </div>
      </div>

    </div>
  );
}
