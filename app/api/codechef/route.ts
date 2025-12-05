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

    // ✔ FORMAT ISO TIMESTAMP TO IST (NO DOUBLE CONVERSION)
    const formatIST = (iso: string | null | undefined) => {
      if (!iso) return null;

      const date = new Date(iso); // already includes +05:30 in API

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

    const mapContest = (c: any) => {
      // ⭐ USE CodeChef's ISO fields DIRECTLY
      const startISO = c.contest_start_date_iso || null;
      const endISO = c.contest_end_date_iso || null;

      return {
        externalId: c.contest_code,
        title: c.contest_name,
        platform: "codechef",
        url: `https://www.codechef.com/${c.contest_code}`,

        // RAW ISO FROM API (IST INCLUDED)
        startDate: startISO,
        endDate: endISO,

        // FORMATTED IST
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
