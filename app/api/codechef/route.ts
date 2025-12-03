import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const res = await axios.get(
      "https://www.codechef.com/api/list/contests/all?sort_by=START&sorting_order=asc&offset=0"
    );

    const present = Array.isArray(res.data.present_contests)
      ? res.data.present_contests
      : [];

    const future = Array.isArray(res.data.future_contests)
      ? res.data.future_contests
      : [];

    // ⏰ Force convert ISO → IST consistently (works on local + vercel)
    const formatIST = (isoString: string | null) => {
      if (!isoString) return null;

      const date = new Date(isoString);

      return new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(date);
    };

    // Parse API times
    const parseContestDate = (seconds?: number, str?: string) => {
      if (typeof seconds === "number") {
        return new Date(seconds * 1000).toISOString();
      }

      if (!str) return null;

      const cleaned = str.replace(/\s+/g, " ").trim();
      let d = new Date(cleaned);

      if (isNaN(d.valueOf())) d = new Date(cleaned + " UTC");

      return isNaN(d.valueOf()) ? null : d.toISOString();
    };

    const mapContest = (c: any) => {
      const startISO = parseContestDate(
        c.startTimeSeconds,
        c.contest_start_date
      );
      const endISO = parseContestDate(c.endTimeSeconds, c.contest_end_date);

      return {
        externalId: c.contest_code,
        title: c.contest_name,
        platform: "codechef",
        url: `https://www.codechef.com/${c.contest_code}`,

        // Raw stored ISO
        startDate: startISO,
        endDate: endISO,

        // 🟢 Correct user-friendly IST time
        startDateFormatted: formatIST(startISO),
        endDateFormatted: formatIST(endISO),

        location: "Online",
        status: "UPCOMING",
        prizes: null,
        rawJson: c,
      };
    };

    const codechef_contests = [
      ...present.map(mapContest),
      ...future.map(mapContest),
    ];

    return NextResponse.json(
      { success: true, codechef_contests },
      { status: 200 }
    );
  } catch (e: any) {
    console.error("CodeChef Fetch Failed:", e.message);
    return NextResponse.json(
      { success: false, message: "Failed to fetch CodeChef contests" },
      { status: 500 }
    );
  }
}
