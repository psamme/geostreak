# GeoStreak

GeoStreak is a dark, run-based geography game where each round gives you one country and five city clues. Clues reveal from hardest to easiest, and the earlier you guess correctly, the more points you earn.

## Features

- Automatic local progress saving with `localStorage`
- Level-based progression
- One-country rounds with progressive clue reveals
- Profile page with stats and unlocked-country archive
- Static frontend with no build step

## Local Development

This app now uses Vercel API routes for round delivery, guess validation, and runtime config.

Example:

```bash
vercel dev
```

Then open:

```text
http://127.0.0.1:3000
```

## Deployment

This repo is ready to deploy as a static site.

## Configuration

Set these environment variables where you deploy:

- `GEOSTREAK_RUN_LENGTH` (optional, defaults to `10`)
- `GEOSTREAK_TOKEN_SECRET` (required, any long random string)
- `GEOSTREAK_SUPABASE_URL` (required for visitor tracking)
- `GEOSTREAK_SUPABASE_SERVICE_ROLE_KEY` (required for visitor tracking)
- `GEOSTREAK_ADMIN_SECRET` (required to read visitor counts)

### Vercel

1. Import the GitHub repo into Vercel.
2. Framework preset: `Other`
3. Build command: leave empty
4. Output directory: leave empty
5. Add the environment variables above
6. Deploy

## Visitor Tracking

This app can track anonymous unique browsers with Supabase while keeping gameplay local-only.

1. Run [`supabase-visitors.sql`](/Users/samuelevans/Documents/geostreak/supabase-visitors.sql) in your Supabase SQL editor.
2. Set `GEOSTREAK_SUPABASE_URL` and `GEOSTREAK_SUPABASE_SERVICE_ROLE_KEY` in Vercel.
3. Set a private `GEOSTREAK_ADMIN_SECRET` in Vercel.
4. The frontend will POST one anonymous `visitor_id` per browser session to `/api/track-visitor`.
5. To read the total unique visitor count, call `/api/visitor-count` with header `x-admin-secret: <your secret>`.

This counts unique browsers/devices, not guaranteed unique humans.

### GitHub Pages

1. Open the GitHub repo settings.
2. Go to `Pages`.
3. Set source to `Deploy from a branch`.
4. Select branch `main` and folder `/ (root)`.
5. Save.

## Files

- `index.html`: app shell
- `styles.css`: visual styling and animations
- `app.js`: game logic, local profile persistence, stats, and profile rendering
- `api/config.js`: runtime public config endpoint
- `api/round.js`: server-delivered round data
- `api/guess.js`: server-side guess validation
- `api/track-visitor.js`: anonymous visitor tracking endpoint
- `api/visitor-count.js`: admin-only visitor count endpoint
- `supabase-visitors.sql`: Supabase schema for anonymous visitor tracking
- `vercel.json`: static deployment config for Vercel
