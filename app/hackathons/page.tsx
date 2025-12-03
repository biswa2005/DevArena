"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/app/src/components/Navbar";
import LoadingSpinner from "@/app/components/LoadingSpinner";

interface Hackathon {
  externalId: string | number;
  title: string;
  platform: string;
  url: string;
  startDate: string | null;
  endDate: string | null;
  location: string;
  status: string | null;
  prizes: any;
}

export default function HackathonsPage() {
  const [ongoingHackathons, setOngoingHackathons] = useState<Hackathon[]>([]);
  const [upcomingHackathons, setUpcomingHackathons] = useState<Hackathon[]>([]);
  const [filter, setFilter] = useState<"all" | "ongoing" | "upcoming">("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadHackathons() {
      try {
        setLoading(true);
        setError(null);

        // Fetch from both Devfolio and Unstop APIs
        const [devfolioRes, unstopRes] = await Promise.all([
          fetch("/api/devfolio"),
          fetch("/api/unstop"),
        ]);

        if (!devfolioRes.ok || !unstopRes.ok) {
          throw new Error("Failed to fetch hackathon data");
        }

        const devfolioData = await devfolioRes.json();
        const unstopData = await unstopRes.json();

        // Combine hackathons from both platforms
        const allHackathons: Hackathon[] = [
          ...(devfolioData.devfolio_hackathons || []),
          ...(unstopData.unstop_hackathons || []),
        ];

        const now = new Date();

        // Separate ongoing and upcoming hackathons
        const ongoing = allHackathons.filter((h) => {
          const startDate = h.startDate ? new Date(h.startDate) : null;
          const endDate = h.endDate ? new Date(h.endDate) : null;
          return startDate && startDate <= now && (!endDate || endDate >= now);
        });

        const upcoming = allHackathons.filter((h) => {
          const startDate = h.startDate ? new Date(h.startDate) : null;
          return !startDate || startDate > now;
        });

        // Sort ongoing by end date (soonest first)
        ongoing.sort((a, b) => {
          const endA = a.endDate ? new Date(a.endDate).getTime() : Infinity;
          const endB = b.endDate ? new Date(b.endDate).getTime() : Infinity;
          return endA - endB;
        });

        // Sort upcoming by start date (soonest first)
        upcoming.sort((a, b) => {
          if (!a.startDate || !b.startDate) return 0;
          return (
            new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
          );
        });

        setOngoingHackathons(ongoing);
        setUpcomingHackathons(upcoming);
      } catch (err: any) {
        setError(err.message || "Failed to load hackathons");
        console.error("Error loading hackathons:", err);
      } finally {
        setLoading(false);
      }
    }

    loadHackathons();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-24 mt-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-12 uppercase bg-linear-to-t from-slate-600 to-slate-50 bg-clip-text text-transparent"
        >
          Hackathons
        </motion.h1>

        {/* Filter Controls */}
        <div className="max-w-6xl mx-auto mb-8 flex justify-center">
          <div className="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                filter === "all"
                  ? "bg-white dark:bg-gray-900 shadow"
                  : "hover:bg-white/60 dark:hover:bg-gray-700/60"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`cursor-pointer px-4 py-2 rounded-md text-sm font-medium transition ${
                filter === "ongoing"
                  ? "bg-white dark:bg-gray-900 shadow"
                  : "hover:bg-white/60 dark:hover:bg-gray-700/60"
              }`}
              onClick={() => setFilter("ongoing")}
            >
              Ongoing
            </button>
            <button
              className={`cursor-pointer px-4 py-2 rounded-md text-sm font-medium transition ${
                filter === "upcoming"
                  ? "bg-white dark:bg-gray-900 shadow"
                  : "hover:bg-white/60 dark:hover:bg-gray-700/60"
              }`}
              onClick={() => setFilter("upcoming")}
            >
              Upcoming
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && <LoadingSpinner />}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto p-6 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg text-red-700 dark:text-red-300 text-center"
          >
            <p className="font-semibold">Failed to load hackathons</p>
            <p className="text-sm mt-2">{error}</p>
          </motion.div>
        )}

        {/* Hackathons Grid */}
        {!loading && !error && (
          <section className="max-w-6xl mx-auto">
            {filter === "all" &&
              ongoingHackathons.length === 0 &&
              upcomingHackathons.length === 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-gray-500 text-lg"
                >
                  No hackathons available at the moment.
                </motion.p>
              )}

            {(filter === "all" || filter === "ongoing") && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 border-l-4 pl-4 border-green-500">
                  🔴 Ongoing Hackathons
                </h2>

                {ongoingHackathons.length === 0 ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-gray-500"
                  >
                    No ongoing hackathons at the moment.
                  </motion.p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ongoingHackathons.map((hackathon, i) => (
                      <HackathonCard
                        key={`${hackathon.platform}-${hackathon.externalId}-ongoing`}
                        hackathon={hackathon}
                        index={i}
                        isOngoing={true}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {(filter === "all" || filter === "upcoming") && (
              <div>
                <h2 className="text-3xl font-bold mb-6 border-l-4 pl-4 border-blue-500">
                  ⏳ Upcoming Hackathons
                </h2>

                {upcomingHackathons.length === 0 ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-gray-500"
                  >
                    No upcoming hackathons at the moment.
                  </motion.p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {upcomingHackathons.map((hackathon, i) => (
                      <HackathonCard
                        key={`${hackathon.platform}-${hackathon.externalId}-upcoming`}
                        hackathon={hackathon}
                        index={i}
                        isOngoing={false}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </section>
        )}
      </main>
    </>
  );
}

function HackathonCard({
  hackathon,
  index,
  isOngoing,
}: {
  hackathon: Hackathon;
  index: number;
  isOngoing?: boolean;
}) {
  const [timeRemaining, setTimeRemaining] = useState<string>("");

  // Update timer every second
  useEffect(() => {
    const updateTimer = () => {
      const startDate = hackathon.startDate
        ? new Date(hackathon.startDate)
        : null;
      const endDate = hackathon.endDate ? new Date(hackathon.endDate) : null;
      const dateToUse = isOngoing ? endDate : startDate;

      if (!dateToUse) {
        setTimeRemaining("");
        return;
      }

      const now = new Date();
      const diff = dateToUse.getTime() - now.getTime();

      if (diff < 0) {
        setTimeRemaining(isOngoing ? "Hackathon ended" : "Hackathon started");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      if (days > 0) {
        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else if (hours > 0) {
        setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeRemaining(`${minutes}m ${seconds}s`);
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [hackathon, isOngoing]);

  const platformColors: Record<string, string> = {
    devfolio:
      "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300",
    unstop: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300",
  };

  const platformColor =
    platformColors[hackathon.platform.toLowerCase()] ||
    "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300";

  const startDate = hackathon.startDate ? new Date(hackathon.startDate) : null;
  const endDate = hackathon.endDate ? new Date(hackathon.endDate) : null;

  const formatDate = (date: Date | null) => {
    if (!date) return "N/A";
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <motion.a
      href={hackathon.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, translateY: -5 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="block p-6 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-600 shadow-md hover:shadow-xl transition-all overflow-hidden group"
    >
      {/* Platform Badge */}
      <div className="flex items-start justify-between mb-4">
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full ${platformColor}`}
        >
          {hackathon.platform.toUpperCase()}
        </span>
        {isOngoing ? (
          <span className="text-xs font-semibold px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
            🔴 Ongoing
          </span>
        ) : (
          <span className="text-xs font-semibold px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
            ⏳ Upcoming
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {hackathon.title}
      </h3>

      {/* Details */}
      <div className="space-y-2 mb-4 text-sm">
        {/* Start Date - for upcoming hackathons */}
        {!isOngoing && startDate && (
          <div className="flex items-start gap-2">
            <span className="text-gray-500 dark:text-gray-400 min-w-fit">
              📅
            </span>
            <div className="flex-1">
              <p className="text-gray-600 dark:text-gray-300">
                {formatDate(startDate)}
              </p>
              {timeRemaining && (
                <p className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 mt-1 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                  ⏱️ {timeRemaining}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Start & End Date - for ongoing hackathons */}
        {isOngoing && startDate && (
          <div className="flex items-start gap-2">
            <span className="text-gray-500 dark:text-gray-400 min-w-fit">
              ⏱️
            </span>
            <div className="flex-1">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                Started: {formatDate(startDate)}
              </p>
              {endDate && (
                <>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ends: {formatDate(endDate)}
                  </p>
                  {timeRemaining && (
                    <p className="text-xs font-mono font-semibold text-green-600 dark:text-green-400 mt-1 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">
                      ⏳ {timeRemaining}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        {/* Location */}
        {hackathon.location && (
          <div className="flex items-center gap-2">
            <span className="text-gray-500 dark:text-gray-400">📍</span>
            <p className="text-gray-600 dark:text-gray-300">
              {hackathon.location}
            </p>
          </div>
        )}

        {/* Prizes */}
        {hackathon.prizes && (
          <div className="flex items-center gap-2">
            <span className="text-gray-500 dark:text-gray-400">🏆</span>
            <p className="text-gray-600 dark:text-gray-300">
              {typeof hackathon.prizes === "string"
                ? hackathon.prizes
                : "Prizes available"}
            </p>
          </div>
        )}
      </div>

      {/* Link Indicator */}
      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold pt-4 border-t border-gray-200 dark:border-gray-700 group-hover:gap-3 transition-all">
        <span>View Hackathon</span>
        <span className="group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
    </motion.a>
  );
}
