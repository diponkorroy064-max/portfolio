"use client";
import { useState, useEffect } from "react";
import { 
  User, 
  FileText, 
  Cpu, 
  Briefcase, 
  MessageSquare, 
  Mail, 
  Sparkles 
} from "lucide-react";

const navTabs = [
  { id: "about", name: "About", icon: User },
  { id: "education", name: "Resume", icon: FileText },
  { id: "skills", name: "Skills", icon: Cpu },
  { id: "projects", name: "Works", icon: Briefcase },
  { id: "reviews", name: "Reviews", icon: MessageSquare },
  { id: "contact", name: "Contact", icon: Mail },
];

export default function RyanCvNavbar() {
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const tab of navTabs) {
        const el = document.getElementById(tab.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(tab.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden lg:flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-zinc-800/80 sticky top-8 bg-[#121316]/90 backdrop-blur-xl z-40 py-2 -mt-2">
      <div className="flex flex-wrap gap-2">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={(e) => scrollToSection(e, tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                isActive
                  ? "text-black bg-[#6fc844] border-[#6fc844] shadow-md shadow-[#6fc844]/25 scale-105"
                  : "text-zinc-400 border-zinc-800/80 hover:text-white hover:border-zinc-700 bg-zinc-900/60"
              }`}
            >
              <Icon size={13} />
              <span>{tab.name}</span>
            </a>
          );
        })}
      </div>

      {/* Status Indicator */}
      <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
        <Sparkles size={13} className="text-[#6fc844]" />
        <span className="text-[11px] text-[#6fc844] font-bold">PORTFOLIO</span>
      </div>
    </nav>
  );
}
