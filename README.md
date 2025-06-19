# Learnflo: Mini Course Platform

A modern, production-grade Mini Course Platform — thoughtfully crafted to showcase software development best practices using today’s most powerful web tools.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🧱 Folder Structure

```
/app         # Next.js app directory (routing, pages)
/components  # Reusable UI components (Shadcn UI, etc.)
/lib         # Utilities and helpers (e.g. cn, fetchers)
/hooks       # Custom React hooks
/types       # TypeScript types
/styles      # Global and modular styles
/config      # App configuration (env, constants)
/tests       # Unit and integration tests
```

---

## 💎 Code Quality & Tooling

- **TypeScript** for type safety
- **ESLint** (Next.js, TypeScript, Tailwind plugins)
- **Prettier** (integrated with ESLint)
- **Husky** + **lint-staged** (pre-commit hooks)
- **Commitlint** (enforce Conventional Commits)
- **Vitest** + **Testing Library** + **MSW** (unit & integration tests)
- **Absolute imports** via `@/`

---

## 🧪 Testing

- Run all tests: `npm test`
- Add tests in `/src/tests` or `/tests`
- Mock APIs with MSW

---

## 🧰 Useful Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "format": "prettier --write .",
  "test": "vitest",
  "type-check": "tsc --noEmit",
  "prepare": "husky install"
}
```

---

## 🧑‍💻 Contributing

- Fork & clone the repo
- Create a feature branch
- Use [Conventional Commits](https://www.conventionalcommits.org/)
- Run `npm run lint` and `npm test` before pushing
- Open a PR with a clear description

---

## 📝 Commit Message Guidelines

- Use [Conventional Commits](https://www.conventionalcommits.org/)
- Example: `feat(auth): add login with Supabase`

---

## 🌐 Tech Stack

- **Frontend:** Next.js (App Router), Tailwind CSS, Shadcn UI
- **Backend:** Supabase (DB, Auth, Storage)
- **Optional AI:** OpenAI or Claude for content generation
- **Deployment:** Vercel
- **CI/CD:** GitHub Actions

---

## 📦 Features

- Auth system (Supabase)
- Course browsing & pages
- Progress tracking
- Admin panel
- Dark mode & responsive UI
- Reusable UI system (Shadcn UI)
- AI enhancements (optional)
- Production-ready stack

---

## 📄 License

MIT

---

## 🙏 Credits

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Supabase](https://supabase.com/)
- [Vercel](https://vercel.com/)

---

> Built as a public dev challenge to showcase best practices and modern web development.
