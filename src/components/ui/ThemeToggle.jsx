"use client";
import { useTheme } from "@/providers/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle({ className = "", size = 18 }) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center opacity-70 ${className}`}
      >
        <Sun size={size} className="text-zinc-400" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#121316] border border-zinc-800 hover:border-[#6fc844] flex items-center justify-center text-zinc-400 hover:text-[#6fc844] hover:shadow-lg hover:shadow-[#6fc844]/20 transition-all duration-300 cursor-pointer ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? (
          <Sun size={size} className="text-yellow-400 hover:text-yellow-300" />
        ) : (
          <Moon size={size} className="text-indigo-600 hover:text-indigo-700" />
        )}
      </motion.div>
    </motion.button>
  );
}
