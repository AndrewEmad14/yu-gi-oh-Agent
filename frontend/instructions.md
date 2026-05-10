# Refined Prompt

---

## Project: Yu-Gi-Oh! Assistant — Frontend Only

### Role

You are a **senior frontend engineer** specializing in React and modern UI/UX. You have a strong eye for themed, immersive interfaces and a clean, component-driven architecture. You write production-quality code with clear separation of concerns and leave integration points well-documented for other engineers to pick up.

---

### Overview

Build the **frontend only** for a Yu-Gi-Oh! themed chatbot web app. The app should feel inspired by **Yu-Gi-Oh! Master Duel's UI** — dark, mystical, card-game aesthetic — with full **light/dark mode** support and **mobile-responsive** design.

---

### Tech Stack

| Tool | Purpose |
|---|---|
| React | UI framework |
| Tailwind CSS | Styling |
| react-hot-toast (or react-toastify) | Toast notifications |
| Font Awesome | Icons |

---

### Features

**1. Chatbot Interface**
- Main chat area displaying the conversation (user messages + assistant responses)
- Message input bar at the bottom with a send button
- Messages styled distinctly for user vs. assistant
- Loading/thinking indicator while awaiting a response

**2. Chat History Sidebar**
- List of past chat sessions shown in a collapsible sidebar
- Each chat has an auto-incremented numeric ID and a short label (e.g. first message preview)
- Clicking a history item loads that chat into the main view
- Chats are persisted in a plain `.txt` file (one chat per line, format: `id | content`)

**3. Theme**
- Dark mode / light mode toggle
- Yu-Gi-Oh! Master Duel-inspired visual language: dark backgrounds, gold/purple accents, mystical card-like UI elements, atmospheric typography

---

### API Service Layer — **Critical**

This is the **single most important architectural requirement**.

Create a clearly isolated service file (e.g. `src/services/chatService.js`) that is **the only place** backend communication happens. It must:

- Export a single async function (e.g. `sendMessage(prompt)`)
- Accept the user's prompt as a string
- Make a `POST` request to a placeholder base URL (e.g. `http://localhost:8000/api/chat`) stored in one place (`src/config.js` or a `.env` variable) so it's trivially swappable
- Return the assistant's response text to the caller
- Handle errors gracefully and surface them via toast notifications
- Contain **clear comments** marking exactly where the request is built and where the response is parsed, so the backend integration developer knows precisely what to edit

This file should be **completely decoupled** from UI components — no component should ever call `fetch` or `axios` directly.

The default implementation must use a **mock/stub response** (e.g. returns a hardcoded string) so the UI is fully functional and demonstrable without any backend running.

---

### File & Folder Structure

```
frontend/
├── public/
├── src/
│   ├── assets/              # Fonts, images, icons
│   ├── components/          # Reusable UI components
│   │   ├── ChatWindow.jsx
│   │   ├── MessageBubble.jsx
│   │   ├── InputBar.jsx
│   │   ├── Sidebar.jsx
│   │   └── ThemeToggle.jsx
│   ├── services/
│   │   └── chatService.js   ← THE INTEGRATION POINT — backend dev edits here
│   ├── config.js            ← Base URL and environment variables live here
│   ├── App.jsx
│   └── main.jsx
├── chats.txt                # Local chat history file
├── .gitignore
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

### `.gitignore` Requirements

Generate a `.gitignore` that covers:
- `node_modules/`
- Build output: `dist/`, `build/`
- Environment files: `.env`, `.env.*`, `.env.local`
- OS artifacts: `.DS_Store`, `Thumbs.db`
- Editor directories: `.vscode/`, `.idea/`
- Cache directories: `.cache/`, `.parcel-cache/`

> **Do not initialize a git repository.** Only produce the `.gitignore` file.

---

### Constraints & Notes

- **Frontend only** — absolutely no backend, server, or database code
- All backend-facing logic lives exclusively in `src/services/chatService.js` and `src/config.js` — no exceptions
- Mobile-first responsive layout
- No authentication, no user accounts
- The UI must be fully usable with the mock stub active — the app should not break or appear broken without a real backend


# style guide

i have attached a folder called stitch, use it for guidance on how to design the ui, i want it to have the same vibe, colors, fonts, and spacing