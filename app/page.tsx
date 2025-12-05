"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, CheckCircle, Zap, Globe, Users } from "lucide-react";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <section className="flex flex-col items-center justify-center text-center py-40 px-6 mt-12">
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
      <section className="py-4 px-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
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

      {/* WHY DEVARENA SECTION */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Why Developers Love DevArena
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              "Never miss a contest or hackathon again",
              "Save hours of research across multiple platforms",
              "Real-time countdown timers keep you on track",
              "Filter by status to find what matters to you",
              "Beautiful, distraction-free interface",
              "100% free and always will be",
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-6"
          >
            {[
              {
                icon: Globe,
                title: "Global Reach",
                desc: "Access contests and hackathons worldwide",
              },
              {
                icon: Zap,
                title: "Instant Updates",
                desc: "Real-time data refreshes every minute",
              },
              {
                icon: Users,
                title: "Community Driven",
                desc: "Built for developers, by developers",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-lg border border-gray-300 dark:border-gray-800 hover:border-gray-600 dark:hover:border-gray-400 transition-all"
              >
                <item.icon className="w-8 h-8 text-blue-600 dark:text-cyan-400 mb-3" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="py-24 px-8 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Get Started in 3 Steps
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: 1,
              title: "Browse Events",
              desc: "Explore upcoming contests and hackathons from all platforms in one place.",
            },
            {
              step: 2,
              title: "Filter & Sort",
              desc: "Filter by status (ongoing/upcoming) and find events that match your interests.",
            },
            {
              step: 3,
              title: "Register & Compete",
              desc: "Click on any event to register directly on the platform and start competing.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative p-8 rounded-xl border-2 border-gray-300 dark:border-gray-800 hover:border-blue-600 dark:hover:border-cyan-400 transition-all"
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-blue-600 dark:bg-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                {item.step}
              </div>
              <h3 className="text-2xl font-semibold mb-3 mt-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
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
          <h2 className="text-3xl font-bold mb-4">
            Ready to Level Up Your Coding Game?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Join thousands of developers who are discovering and competing in
            contests and hackathons worldwide.
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

      <footer className="text-center py-12 text-gray-600 dark:text-gray-500 border-t border-gray-300 dark:border-gray-800 mt-20">
        <p className="mb-2">
          Built with ❤️ for developers. © {new Date().getFullYear()}
        </p>
        <p className="text-sm">DevArena - Aggregate. Compete. Grow.</p>
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
