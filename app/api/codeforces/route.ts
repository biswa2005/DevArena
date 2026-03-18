import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await axios.get("https://codeforces.com/api/contest.list");

    const upcoming = res.data.result.filter((c: any) => c.phase === "BEFORE");

    const mapped = upcoming.map((c: any) => ({
      externalId: c.id,
      title: c.name,
      platform: "Codeforces",
      url: `https://codeforces.com/contest/${c.id}`,
      startDate: c.startTimeSeconds
        ? new Date(c.startTimeSeconds * 1000).toISOString()
        : null,
      endDate: null,
      location: "Online",
      status: "UPCOMING",
      prizes: null,
      rawJson: c,
    }));

    return NextResponse.json({ codeforces_contests: mapped });
  } catch (e: any) {
    console.error("Codeforces fetch failed:", e.message);

    return NextResponse.json(
      { error: true, message: "Codeforces API failed" },
      { status: 500 }
    );
  }
}
