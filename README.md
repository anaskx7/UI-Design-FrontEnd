# NotesApp UI

A simple, responsive notes application built with React, Vite, and Tailwind CSS. Notes can include a heading and details, and are saved automatically in the browser.

## Features

- Create notes with a heading and up to 700 characters of details
- View all saved notes in a card layout
- Delete notes individually
- Persist notes in browser `localStorage`
- Responsive layout with custom styling and animation

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- JavaScript

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run ESLint
```

## Project Structure

```text
NotesApp-UI/
├── public/          # Static public assets
├── src/
│   ├── App.jsx      # Notes UI and application logic
│   ├── App.css      # Component stylesheet
│   ├── index.css    # Global styles and Tailwind import
│   └── main.jsx     # React entry point
├── index.html
└── package.json
```

## Data Storage

Notes are stored under the `Tasks` key in the browser's `localStorage`. Clearing site data from the browser will remove all saved notes.
