"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full backdrop-blur-xl bg-white/10 dark:bg-black/10 border-b border-gray-300 dark:border-gray-800 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Left - Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-blue-600 dark:hover:text-blue-400 font-serif transition">
          DevArena
        </Link>

        {/* Center - Links (desktop) */}
        <div className="hidden md:flex gap-8 text-lg">
          <Link href="/" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/about" className="relative group">
            About
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/contests" className="relative group">
            Contests
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/hackathons" className="relative group">
            Hackathons
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Right - Theme Switch + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === "dark" ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? (
                <Sun size={20} className="text-yellow-400 cursor-pointer" />
              ) : (
                <Moon size={20} className="text-gray-700 cursor-pointer" />
              )}
            </motion.div>
          </motion.button>

          {/* Mobile menu button - visible on small screens only */}
          <button
            className="md:hidden p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden px-4 pb-4"
          >
            <div className="max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-b-md shadow-md p-4">
              <div className="flex flex-col gap-3">
                <Link href="/" onClick={() => setOpen(false)} className="py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                  Home
                </Link>
                <Link href="/about" onClick={() => setOpen(false)} className="py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                  About
                </Link>
                <Link href="/contests" onClick={() => setOpen(false)} className="py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                  Contests
                </Link>
                <Link href="/hackathons" onClick={() => setOpen(false)} className="py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                  Hackathons
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
  