import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const url =
      "https://devfolio.co/_next/data/JtO3J0dzXt3nDh-j8-16z/hackathons.json";

    const res = await axios.get(url);

    const ongoing_hackathons =
      res.data.pageProps.dehydratedState.queries[0].state.data.open_hackathons;

    const upcoming_hackathons =
      res.data.pageProps.dehydratedState.queries[0].state.data
        .upcoming_hackathons;

    const mapContest = (c: any) => ({
      externalId: c.uuid,
      title: c.name,
      platform: "DevFolio",
      url: `https://${c.slug}.devfolio.co/`,
      startDate: c.starts_at ? new Date(c.starts_at).toISOString() : null,
      endDate: c.ends_at ? new Date(c.ends_at).toISOString() : null,
      location: c.is_online ? "Online" : "Offline",
      status: null,
      prizes: null,
      rawJson: c,
    });

    const ongoing = Array.isArray(ongoing_hackathons)
      ? ongoing_hackathons.map(mapContest)
      : [];

    const upcoming = Array.isArray(upcoming_hackathons)
      ? upcoming_hackathons.map(mapContest)
      : [];

    return NextResponse.json({
      devfolio_hackathons: [...ongoing, ...upcoming],
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: true,
        message: err.message || "Failed to scrape DevFolio",
      },
      { status: 500 }
    );
  }
}
