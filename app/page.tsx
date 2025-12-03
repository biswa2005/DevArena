"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <main className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {/* NAVBAR */}
      <nav className="w-full backdrop-blur-xl bg-white/10 dark:bg-black/10 border-b border-gray-300 dark:border-gray-800 fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Left - Logo */}
          <h1 className="text-2xl font-bold tracking-wide">DevArena</h1>

          {/* Center - Links */}
          {/* Center - Links */}
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

          {/* Right - Theme Switch */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <section className="flex flex-col items-center justify-center text-center py-44 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-linear-to-t from-slate-700 to-slate-50 bg-clip-text text-transparent"
        >
          Hackathons & Contests,
          <br />
          <span className="bg-linear-to-t from-slate-700 to-slate-50 bg-clip-text text-transparent">
            All in One Place.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mt-6"
        >
          Get upcoming hackathons and competitive programming contests from all
          platforms — CodeChef, Codeforces, Unstop, HackerRank, and more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex gap-4"
        >
          <Link
            href="/contests"
            className="px-8 py-3 text-lg border border-black dark:border-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            Explore Contests
          </Link>

          <Link
            href="/hackathons"
            className="px-8 py-3 text-lg border border-gray-600 dark:border-gray-500 rounded-full hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black transition-all"
          >
            Explore Hackathons
          </Link>
        </motion.div>
      </section>

      {/* FEATURE GRID */}
      <section className="py-24 px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <FeatureCard
          title="All Platforms Combined"
          desc="Stop switching between websites — see all events in one dashboard."
        />
        <FeatureCard
          title="Real-time Updates"
          desc="Get live contest timers and automatic refresh."
        />
        <FeatureCard
          title="Minimal UI"
          desc="A clean black & white interface for focused coders."
        />
      </section>

      <footer className="text-center py-8 text-gray-600 dark:text-gray-500 border-t border-gray-300 dark:border-gray-800">
        Built with ❤️ for developers. © {new Date().getFullYear()}
      </footer>
    </main>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-xl border border-gray-300 dark:border-gray-800 hover:border-gray-600 dark:hover:border-gray-400 transition-all"
    >
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{desc}</p>
    </motion.div>
  );
}
