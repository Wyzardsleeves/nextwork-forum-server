# AI Agent Instructions

## Purpose
This repository contains a minimal full-stack example: an Express backend in the repo root and a Vite-powered React frontend under `client/`.

## Key files
- `package.json` — root project scripts and backend dependencies
- `index.js` — Express backend entrypoint
- `client/package.json` — frontend scripts and dependencies
- `client/src/` — React + TypeScript application code
- `client/vite.config.ts` — frontend build/dev configuration
- `README.md` — project notes and setup guidance
- `client/README.md` — client template notes

## How to run
- `npm install` — install root dependencies
- `npm run dev` — run backend and frontend concurrently from the repository root
- `npm run server` — run only the Express backend
- `npm run client` — run only the Vite frontend
- `npm run dev --prefix client` — alternate way to start the frontend from root

## Frontend details
- React 19 with TypeScript
- Vite dev server
- `client/src/` is the main application source
- ESLint and Vite are configured in the client

## Backend details
- Express 5 backend running from `index.js`
- Uses `cors` and `express.json()`
- Serves an API on port `5000`

## Conventions and assumptions
- The backend lives in the repository root, not under `client/`
- The frontend lives in `client/`
- The root package uses `type: "module"`
- There are currently no test commands configured in the repo
- Prefer npm for scripts since root `package.json` defines npm commands

## Useful docs
- Root README: `README.md`
- Frontend template notes: `client/README.md`

## Notes for AI agents
- Keep changes minimal and align with the current Express + React/Vite setup
- Do not assume a monorepo tool like Turborepo or pnpm is configured
- If you add scripts or config, ensure the root `dev` script still starts both the backend and `client` frontend
