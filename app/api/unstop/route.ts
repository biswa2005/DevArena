import axios from "axios";
import { NextResponse } from "next/server";

async function fetchUnstop() {
  const allHackathons: any[] = [];
  let page = 1;
  let lastPage = 1;

  try {
    do {
      const res = await axios.get(
        `https://unstop.com/api/public/opportunity/search-result?opportunity=hackathons&oppstatus=open&page=${page}`,
      );

      const responseData = res.data?.data;
      if (!responseData) break;

      const mapped = Array.isArray(responseData.data)
        ? responseData.data.map((c: any) => ({
            externalId: c.id,
            title: c.title,
            platform: "Unstop",
            url: `https://unstop.com/${c.public_url.replace(/^\//, "")}`,
            startDate: c.regnRequirements?.start_regn_dt
              ? new Date(c.regnRequirements.start_regn_dt).toISOString()
              : null,
            endDate: c.end_date ? new Date(c.end_date).toISOString() : null,
            location:
              c.region && c.region.toLowerCase() === "online"
                ? "Online"
                : "Offline",
            status: c.status ?? null,
            prizes: c.prizes ?? null,
            rawJson: c,
          }))
        : [];

      allHackathons.push(...mapped);

      // Update pagination
      lastPage = responseData.last_page || 1;
      page++;

    } while (page <= lastPage);

    return allHackathons;
  } catch (e: any) {
    console.error("Unstop fetch failed ➜", e.message);
    return [];
  }
}

export async function GET() {
  try {
    const unstop_hackathons = await fetchUnstop();
    return NextResponse.json({ unstop_hackathons });
  } catch (e: any) {
    return NextResponse.json(
      { error: true, message: "Failed to fetch Unstop hackathons" },
      { status: 500 }
    );
  }
}
