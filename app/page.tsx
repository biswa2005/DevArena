"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Globe, Users } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-slate-100 text-slate-900 dark:bg-black dark:text-white transition-colors duration-300">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-40 px-6 mt-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight 
          bg-linear-to-b from-blue-600 to-blue-300 
          dark:from-slate-700 dark:to-slate-50 
          bg-clip-text text-transparent 
          drop-shadow-[0_2px_4px_rgba(0,0,0,0.12)]"
        >
          Hackathons & Contests,
          <br />
          <span className="bg-linear-to-r from-slate-700 to-slate-400 dark:from-slate-600 dark:to-slate-200 bg-clip-text text-transparent">
            All in One Place.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mt-6"
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
            className="px-8 py-3 text-lg border border-blue-700 rounded-full bg-white text-blue-700 
            dark:border-white dark:bg-black dark:text-white
            hover:bg-blue-700 hover:text-white 
            dark:hover:bg-white dark:hover:text-black 
            transition-all shadow-sm"
          >
            Explore Contests
          </Link>

          <Link
            href="/hackathons"
            className="px-8 py-3 text-lg border border-cyan-600 rounded-full bg-white text-cyan-700 
            dark:border-cyan-500 dark:bg-black dark:text-cyan-300
            hover:bg-cyan-600 hover:text-white 
            dark:hover:bg-cyan-200 dark:hover:text-black 
            transition-all shadow-sm"
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
          color="bg-white/70 backdrop-blur-sm text-slate-900 dark:bg-black dark:text-blue-300 border border-slate-200 dark:border-blue-700 shadow-sm"
        />
        <FeatureCard
          title="Real-time Updates"
          desc="Get live contest timers and automatic refresh."
          color="bg-white/70 backdrop-blur-sm text-slate-900 dark:bg-black dark:text-cyan-300 border border-slate-200 dark:border-cyan-700 shadow-sm"
        />
        <FeatureCard
          title="Minimal UI"
          desc="A clean black & white interface for focused coders."
          color="bg-white/70 backdrop-blur-sm text-slate-900 dark:bg-black dark:text-purple-300 border border-slate-200 dark:border-purple-700 shadow-sm"
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
            {
              name: "CodeChef",
              logo: "/codechef.jpg",
            },
            {
              name: "Codeforces",
              logo: "/codeforces.jpg",
            },
            {
              name: "Unstop",
              logo: "/unstop.png",
            },
            {
              name: "Devfolio",
              logo: "/devfolio.png",
            },
            {
              name: "HackerRank",
              logo: "/hackerrank.jpg",
            },
          ].map((platform, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-0.5 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition duration-300 bg-linear-to-r`}
              />

              {/* Card */}
              <div
                className={`relative flex items-center justify-between rounded-2xl text-white font-semibold 
                bg-linear-to-br 
                border border-white/10
                backdrop-blur-md
                shadow-lg
                group-hover:scale-115 transition-all duration-700 drop-shadow-2xl drop-shadow-cyan-500/50`}
              >
                {/* Logo */}
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="h-26 w-full object-cover transition bg-transparent rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
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
              className="text-center p-6 rounded-lg border border-slate-200 shadow-sm dark:border-gray-800 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-600"
            >
              <motion.p
                className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-cyan-400"
                whileInView={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                {stat.number}
              </motion.p>
              <p className="text-slate-600 dark:text-gray-400 mt-3">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY DEVARENA */}
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
          {/* LEFT */}
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
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 shrink-0 mt-1" />
                <p className="text-lg text-slate-700 dark:text-gray-300">
                  {benefit}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT */}
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
                className="p-6 rounded-lg border border-slate-200 shadow-sm dark:border-gray-800 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all"
              >
                <item.icon className="w-8 h-8 text-blue-700 dark:text-cyan-400 mb-3" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GET STARTED */}
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
              className="relative p-8 rounded-xl border border-slate-200 shadow-sm 
              dark:border-gray-800 hover:shadow-lg hover:border-blue-500 
              dark:hover:border-cyan-400 transition-all"
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-blue-700 text-white dark:bg-cyan-500 flex items-center justify-center font-bold text-lg shadow">
                {item.step}
              </div>
              <h3 className="text-2xl font-semibold mb-3 mt-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-8 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="p-12 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-lg 
          dark:bg-linear-to-br dark:from-gray-900 dark:to-gray-800 dark:border-gray-800"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Level Up Your Coding Game?
          </h2>
          <p className="text-slate-600 dark:text-gray-400 mb-8 text-lg">
            Join thousands of developers who are discovering and competing in
            contests and hackathons worldwide.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contests"
                className="inline-block px-8 py-3 text-lg font-semibold border border-blue-700 text-blue-700 
                hover:bg-blue-700 hover:text-white shadow-sm rounded-full
                dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                Explore Contests
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/hackathons"
                className="inline-block px-8 py-3 text-lg font-semibold border border-slate-400 text-slate-600 
                hover:bg-slate-700 hover:text-white shadow-sm rounded-full
                dark:border-gray-500 dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-black transition-all"
              >
                Explore Hackathons
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-12 text-slate-600 dark:text-gray-500 border-t border-slate-200 dark:border-gray-800 mt-20">
        <p className="mb-2">
          Built with ❤️ for developers. © {new Date().getFullYear()}
        </p>
        <p className="text-sm">DevArena - Aggregate. Compete. Grow.</p>
      </footer>
    </main>
  );
}

/* Feature Card */
function FeatureCard({
  title,
  desc,
  color,
}: {
  title: string;
  desc: string;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`p-6 rounded-xl hover:border-cyan-400 transition-all ${color}`}
    >
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-700 dark:text-gray-400">{desc}</p>
    </motion.div>
  );
}
