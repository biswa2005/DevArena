"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  // const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav className="w-full backdrop-blur-xl bg-white/10 dark:bg-black/10 border-b border-gray-300 dark:border-gray-800 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Left - Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
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

        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <Button
            variant="outline"
            size="icon"
            className="relative cursor-pointer border-gray-300 dark:border-gray-700 
          hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg border border-gray-300 dark:border-gray-700 
          hover:bg-gray-200 dark:hover:bg-gray-800 transition cursor-pointer"
            onClick={() => setOpen((v) => !v)}
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
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  About
                </Link>
                <Link
                  href="/contests"
                  onClick={() => setOpen(false)}
                  className="py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Contests
                </Link>
                <Link
                  href="/hackathons"
                  onClick={() => setOpen(false)}
                  className="py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                >
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
