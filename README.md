# CityStreak

CityStreak is a dark, run-based geography game where each round gives you one country and five city clues. Clues reveal from hardest to easiest, and the earlier you guess correctly, the more points you earn.

## Features

- Local sign-up and login flow
- Level-based progression
- One-country rounds with progressive clue reveals
- Profile page with stats and unlocked-country archive
- Share card export
- Static frontend with no build step

## Local Development

Serve the project from the repo root with any static server.

Example:

```bash
python3 -m http.server 5734
```

Then open:

```text
http://127.0.0.1:5734
```

## Deployment

This repo is ready to deploy as a static site.

### Vercel

1. Import the GitHub repo into Vercel.
2. Framework preset: `Other`
3. Build command: leave empty
4. Output directory: leave empty
5. Deploy

### GitHub Pages

1. Open the GitHub repo settings.
2. Go to `Pages`.
3. Set source to `Deploy from a branch`.
4. Select branch `main` and folder `/ (root)`.
5. Save.

## Files

- `index.html`: app shell
- `styles.css`: visual styling and animations
- `app.js`: game logic, local auth, stats, share card rendering
- `vercel.json`: static deployment config for Vercel

