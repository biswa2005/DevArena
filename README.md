# DevArena

DevArena is a polished Next.js application that aggregates programming contests and hackathons from multiple platforms and displays them with real-time timers, filters, and a responsive UI. It was built as a lightweight dashboard for competitive programmers to discover ongoing and upcoming events across CodeChef, CodeForces, Devfolio and Unstop.

## Key Features

- Aggregates contests from CodeChef and CodeForces via server API routes.
- Aggregates hackathons from Devfolio and Unstop via server API routes.
- Real-time countdown timers for each contest/hackathon (updates every second).
- Filter controls for `All`, `Ongoing`, and `Upcoming` events.
- Responsive UI with a reusable `Navbar`, theme toggle (light/dark), and mobile hamburger menu.
- Aesthetic loading spinner component used across pages.

## Project Structure (important files)

- `app/contests/page.tsx` — Contests listing page (CodeChef + CodeForces).
- `app/hackathons/page.tsx` — Hackathons listing page (Devfolio + Unstop).
- `app/components/Navbar.tsx` — Site navigation, theme toggle and mobile menu.
- `app/components/LoadingSpinner.tsx` — Reusable loader component.
- `app/api/codechef/route.ts` — Server route that fetches CodeChef contests.
- `app/api/codeforces/route.ts` — Server route that fetches Codeforces contests.
- `app/api/devfolio/route.ts` — Server route that fetches Devfolio hackathons.
- `app/api/unstop/route.ts` — Server route that fetches Unstop hackathons.
- `app/globals.css` — Global styles, theme variables and loader CSS.

> Note: The repository uses the Next.js app router and TypeScript.

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Axios (HTTP client)
- next-themes (theme switching)

## Local Setup

Prerequisites

- Node.js (v18+ recommended)
- npm or pnpm

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build for production

```bash
npm run build
npm run start
```

Lint / format (if scripts exist in `package.json`)

```bash
npm run lint
npm run format
```

## Environment & API Notes

- The app exposes server API routes under `app/api/*` which proxy or fetch data from external contest/hackathon providers. These store-agnostic routes return normalized contest/hackathon objects consumed by the pages.
- If any external APIs require keys, place them in a `.env.local` file at the project root and reference them in `next.config.js` or the server route files.

## Developer Notes

- Timers use client-side `setInterval` to update countdowns every second. When modifying timer logic, prefer `useEffect` cleanup to avoid leaks.
- UI uses `framer-motion`'s `AnimatePresence` for smooth entry/exit animations of the mobile menu and cards.
- Keep imports consistent with Next.js path aliases (e.g. `@/app/components/...`).

## API Routes (summary)

- `GET /api/codechef` — Returns `codechef_contests` array.
- `GET /api/codeforces` — Returns `codeforces_contests` array.
- `GET /api/devfolio` — Returns `devfolio_hackathons` array.
- `GET /api/unstop` — Returns `unstop_hackathons` array.

These server routes are intended to normalize response shape so frontend components can use a single `ContestCard` UI for multiple providers.

## Contributing

- Feel free to open issues for feature requests or bugs.
- Make feature branches from `main` and open pull requests with a clear description of changes.
- Run and verify `npm run dev` locally before opening PRs.

## Known Workflow / Git Notes

- This repository uses a `main` branch. When pushing new changes, create a feature branch and open a pull request.
- If you need to revert work locally, check commit history with `git log --oneline` and use `git reset` or `git revert` as appropriate.

## License

This project is available under the MIT License — see the `LICENSE` file for details.

---

If you want, I can also:

- add example screenshots or GIFs to the `README.md`.
- add a short `CONTRIBUTING.md` with PR checklist.
- add an automated `GitHub Actions` workflow to run lint/build on PRs.

Which of these would you like next?
