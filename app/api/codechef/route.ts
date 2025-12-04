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

    // ------------------------------
    // ✅ Always parse dates as IST
    // ------------------------------
    const parseAsIST = (dateString: string | null) => {
      if (!dateString) return null;

      // Normalize string
      const cleaned = dateString.replace(/\s+/g, " ").trim();

      // Use Intl to force IST interpretation
      const date = new Date(
        new Date(
          new Intl.DateTimeFormat("en-IN", {
            timeZone: "Asia/Kolkata",
          })
            .formatToParts(new Date(cleaned))
            .map((v) => v.value)
            .join(" ")
        )
      );

      return isNaN(date.getTime()) ? null : date.toISOString();
    };

    // ------------------------------
    // Format ISO → IST readable
    // ------------------------------
    const formatIST = (iso: string | null) => {
      if (!iso) return null;
      return new Date(iso).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    };

    // ------------------------------
    // Map CodeChef contests
    // ------------------------------
    const mapContest = (c: any) => {
      const start = c.startTimeSeconds
        ? new Date(c.startTimeSeconds * 1000).toISOString()
        : parseAsIST(c?.contest_start_date);

      const end = c.endTimeSeconds
        ? new Date(c.endTimeSeconds * 1000).toISOString()
        : parseAsIST(c?.contest_end_date);

      return {
        externalId: c.contest_code,
        title: c.contest_name,
        platform: "codechef",
        url: `https://www.codechef.com/${c.contest_code}`,

        startDate: start,
        endDate: end,

        startDateFormatted: formatIST(start),
        endDateFormatted: formatIST(end),

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
