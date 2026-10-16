"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  FileText, 
  Cpu, 
  Briefcase, 
  MessageSquare, 
  Mail, 
  Menu, 
  X 
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";

const navTabs = [
  { id: "about", name: "About", icon: User },
  { id: "education", name: "Resume", icon: FileText },
  { id: "skills", name: "Skills", icon: Cpu },
  { id: "projects", name: "Works", icon: Briefcase },
  { id: "reviews", name: "Reviews", icon: MessageSquare },
  { id: "contact", name: "Contact", icon: Mail },
];

export default function MobileHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="lg:hidden sticky top-0 z-50 flex items-center justify-between px-5 py-3.5 bg-[#121316]/95 backdrop-blur-md border-b border-zinc-800/80">
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

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
          className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white cursor-pointer"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden sticky top-[61px] z-40 bg-[#121316]/95 backdrop-blur-xl border-b border-zinc-800 px-5 py-4 grid grid-cols-2 gap-2"
          >
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  onClick={(e) => scrollToSection(e, tab.id)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-[#6fc844] text-black shadow-md shadow-[#6fc844]/20"
                      : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800"
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.name}</span>
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
