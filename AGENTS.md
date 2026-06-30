# AI Agent Instructions

## Purpose
This repository is a small full-stack forum app with an Express backend at the repository root and a Vite + React frontend in client/.

## Quick start
- Install dependencies with npm install from the repo root.
- Start the backend with npm run server.
- Start the frontend with npm run client.
- Start both together with npm run dev.

## Project layout
- package.json: root scripts and backend dependencies.
- index.js: Express entrypoint for the server.
- routes/, models/: server-side API and data model files.
- client/: Vite React frontend source and config.
- client/src/Components/: frontend UI components.
- client/src/Components/auth/: authentication-related components.
- README.md: project notes and overview.

## Conventions
- Keep changes minimal and aligned with the existing Express + React/Vite structure.
- The root package uses ES modules via "type": "module".
- Prefer existing npm scripts over introducing new tooling.
- Avoid assuming a monorepo setup, Turborepo, or pnpm is configured.
- If you add scripts or config, make sure npm run dev still starts both the backend and frontend.
- When editing server route files, preserve the current Express style and keep handlers simple and explicit.
- For the client, use the existing Vite + React setup and the installed Tailwind integration when adding styling.

## Common pitfalls
- The client uses React Router, so route syntax should follow the current version in use.
- Component imports must match the actual filenames in client/src/Components/.
- Do not introduce new build tooling unless the existing scripts need it.

## Notes for agents
- There is no dedicated test command configured in the repo yet.
- Use the existing README and client/README.md for broader context before making structural changes.
