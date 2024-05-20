- [x] "npx create-next-app@latest {project-name}" to initialize nextjs
- [x] create github repo, and connect
- [x] change layout, change page.tsx, delete assets
- [x] create .env file, add .env to .gitignore
- [ ] add .prettierrc
- [ ] "npx shadcn-ui@latest init" to initialize shadcn
- [ ] html, body, :root { height: 100% } thing at app/globals.css
- [ ] "npx shadcn-ui@latest add button" to add button

- [ ] create coachroachdb cluster
- [ ] press connect -> create new sql user -> copy password -> copy general connection string -> paste to .env as DATABASE_URL
- [ ] "npm i -D prisma"
- [ ] "npm i @prisma/client"
- [ ] "npx prisma init"
- [ ] create lib/db.ts
- [ ] add "postinstall": "prisma generate" to package.json's scripts
- [ ] change datasource db provider to cockroachdb in schema.prisma
- [ ] note: "npx prisma generate" and "npx prisma db push" whenever schemas have changed
- [ ] note: "npx prisma studio" to manage content
- [ ] create Profile schema to keep users better
- [ ] create lib/initial-profile.ts and lib/current-profile.ts

---

- primary stack: nextjs13-app-nosrc, react, shadcn, tailwind, convex, clerk-withorg, liveblocks
- secondary stack: zustand, date-fns, use-hooks, react-contenteditable, perfect-freehand
- ui: font = poppins-inter-kalam, icons = lucide

---

-
