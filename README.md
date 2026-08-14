# Alumni App Setup Guide

This project is a React + TypeScript + Vite app for the alumni platform UI.

## Prerequisites

Make sure you have these installed:

- Node.js 18 or newer
- npm 9 or newer

## 1) Install dependencies

From the project folder:

```bash
cd alumni_app
npm install
```

## 2) Start the development server

```bash
npm run dev
```

For a network-accessible preview:

```bash
npm run dev -- --host 0.0.0.0
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## 3) Build for production

```bash
npm run build
```

This creates the production files in the `dist` folder.

## 4) Preview production build

```bash
npm run preview
```

## 5) Lint the project

```bash
npm run lint
```

## Useful notes

- The app uses Vite, so the dev server hot reloads automatically when files change.
- If the command says `Missing script: "dev"`, make sure you are in the correct folder: `alumni_app`.
- If dependencies are missing, run `npm install` before starting.

## Project structure

```text
alumni_app/
├── src/
├── public/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── eslint.config.js
└── README.md
```

## Verification

This project was verified by running:

```bash
npm install
npm run build
```

The production build completed successfully with Vite.

