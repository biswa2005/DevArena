"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import { Code2, Zap, Users, Globe, Target, Award } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-40 px-6 mt-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          About{" "}
          <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            DevArena
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mt-6"
        >
          DevArena is a unified platform that aggregates hackathons and
          competitive programming contests from multiple sources, making it
          easier for developers to discover and participate in opportunities
          worldwide.
        </motion.p>
      </section>

      {/* MISSION SECTION */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            To empower developers by eliminating information fragmentation.
            Instead of visiting dozens of platforms, developers now have a
            single source of truth for all competitive programming contests and
            hackathons.
          </p>
        </motion.div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Why Choose DevArena?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "Multi-Platform Aggregation",
              desc: "Access contests from CodeChef, Codeforces, HackerRank, Unstop, Devfolio and more.",
            },
            {
              icon: Zap,
              title: "Real-time Updates",
              desc: "Live countdown timers and automatic refreshes keep you informed every second.",
            },
            {
              icon: Target,
              title: "Smart Filtering",
              desc: "Easily filter events by status (ongoing, upcoming) to find what matters to you.",
            },
            {
              icon: Code2,
              title: "Clean Interface",
              desc: "Minimalist black & white design for focused, distraction-free browsing.",
            },
            {
              icon: Users,
              title: "Community Focused",
              desc: "Built by developers, for developers who want to grow and compete together.",
            },
            {
              icon: Award,
              title: "Curated Events",
              desc: "Discover the best hackathons and contests tailored to your interests.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-xl border border-gray-300 dark:border-gray-800 hover:border-gray-600 dark:hover:border-gray-400 transition-all hover:shadow-lg dark:hover:shadow-gray-900/50"
            >
              <feature.icon className="w-10 h-10 mb-4 text-blue-600 dark:text-cyan-400" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SUPPORTED PLATFORMS */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Supported Platforms
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { name: "CodeChef", color: "from-orange-500 to-orange-600" },
            { name: "Codeforces", color: "from-blue-500 to-blue-600" },
            { name: "Unstop", color: "from-cyan-500 to-cyan-600" },
            { name: "Devfolio", color: "from-purple-500 to-purple-600" },
            { name: "HackerRank", color: "from-green-500 to-green-600" },
          ].map((platform, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-linear-to-br ${platform.color} p-6 rounded-lg text-white font-semibold text-center hover:shadow-lg transition-all`}
            >
              {platform.name}
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "50+", label: "Events Updated Daily" },
            { number: "5+", label: "Platforms Integrated" },
            { number: "100%", label: "Free & Open" },
            { number: "24/7", label: "Live Tracking" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center p-6 rounded-lg border border-gray-300 dark:border-gray-800"
            >
              <motion.p
                className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-cyan-400"
                whileInView={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                {stat.number}
              </motion.p>
              <p className="text-gray-600 dark:text-gray-400 mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-8 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="p-12 rounded-2xl border-2 border-gray-300 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Explore upcoming contests and hackathons. Find your next opportunity
            to compete and learn.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contests"
                className="inline-block px-8 py-3 text-lg font-semibold border-2 border-black dark:border-white text-black dark:text-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                Explore Contests
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/hackathons"
                className="inline-block px-8 py-3 text-lg font-semibold border-2 border-gray-600 dark:border-gray-500 text-gray-600 dark:text-gray-400 rounded-full hover:bg-gray-600 hover:text-white dark:hover:bg-gray-400 dark:hover:text-black transition-all"
              >
                Explore Hackathons
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-12 text-gray-600 dark:text-gray-500 border-t border-gray-300 dark:border-gray-800 mt-20">
        <p className="mb-2">
          Built with ❤️ for developers. © {new Date().getFullYear()}
        </p>
        <p className="text-sm">DevArena - Aggregate. Compete. Grow.</p>
      </footer>
    </main>
  );
}
