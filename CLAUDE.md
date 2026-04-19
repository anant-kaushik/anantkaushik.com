# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — dev server at http://localhost:5173 (Vite HMR)
- `npm run build` — production build to `/dist`
- `npm run preview` — serve production build locally
- `npm run deploy` — build + sync to S3 (`www.anantkaushik.com`)

No test runner or linter is configured.

## Architecture

Chat-based personal portfolio SPA. The UI mimics a messaging app where pre-seeded conversations showcase portfolio content through rich widget cards.

**State-based conversation routing** — `App.jsx` holds `activeId` and renders `<ChatInterface key={activeId}>`. Changing `key` resets chat state for the new conversation. No React Router; sidebar clicks swap `activeId`.

**Message cache** — `App.jsx` keeps a `msgCache` object keyed by conversation ID. On first visit, `ChatInterface` loads `conversation.initialMessages` and caches them via `onMessagesCached`. Subsequent visits render cached messages instantly.

**Conversation definitions** — `src/lib/conversations.js` exports `CONVERSATIONS` array and `PROJECT_DETAILS` object. Each conversation has `initialMessages` (pre-seeded chat) and `getBotResponse(text)` (regex pattern-matched replies for user input). The main conversation routes to widget types (about, experience, education, skills, contact); project conversations show `ProjectCard` widgets.

**Widget routing** — `MessageBubble` switches on `message.type` to render the appropriate widget component (AboutCard, ExperienceList, EducationList, SkillsCard, ContactCard, ProjectCard). User messages render as simple text bubbles.

**Content source of truth** — all personal data lives in `src/data/data.jsx`. Widget components read from this file directly.

## Styling

- Tailwind CSS v3 with a shadcn-inspired dark color palette (no shadcn components — widgets are hand-rolled)
- Brand yellow overridden in tailwind.config.js: `yellow-400: #ffc500`, `yellow-500: #ffb100`
- Key colors: bg `#09090b`, card `#18181b`, border `#27272a`, text `#fafafa`, muted `#a1a1aa`
- Icons from `lucide-react` (no brand icons like Linkedin/Github in this version — use ExternalLink or Link2 instead)

## Path Aliases (vite.config.js)

- `features` → `src/features/`
- `data` → `src/data/`
- `assets` → `src/assets/`
- `lib` → `src/lib/`
- `@` → `src/`

## File Structure Conventions

- Feature-based grouping under `src/features/` with **lowercase folder names**
- **PascalCase filenames** for React components
- `src/lib/` for shared non-component code (utils, conversations)
- `src/data/` for content data
- `src/assets/` for static files (images, resume PDF)
