import axios from "axios";
import { NextResponse } from "next/server";
import * as cheerio from "cheerio"

const URL = 'https://devfolio.co/hackathons';

async function getHackathons() {
  const { data: html } = await axios.get(URL);

  const $ = cheerio.load(html);

  const scriptContent = $("#__NEXT_DATA__").html();

  if (!scriptContent) throw new Error("No NEXT_DATA found");

  const json = JSON.parse(scriptContent);

  const hackathons = json.props.pageProps.dehydratedState.queries[0].state.data;

  return hackathons;
}

export async function GET() {
  try {
    const hackathons = await getHackathons();
    const ongoing_hackathons = hackathons.open_hackathons;
    const upcoming_hackathons = hackathons.upcoming_hackathons;
    const featured_hackathons = hackathons.featured_hackathons;

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
      console.log("Ongoing hackathons:", ongoing.length);

    const upcoming = Array.isArray(upcoming_hackathons)
      ? upcoming_hackathons.map(mapContest)
      : [];
      console.log("Upcoming hackathons:", upcoming.length);

    const featured = Array.isArray(featured_hackathons)
      ? featured_hackathons.map(mapContest)
      : [];
      console.log("Featured hackathons:", featured.length);

    return NextResponse.json({
      devfolio_hackathons: [...ongoing, ...upcoming, ...featured],
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
