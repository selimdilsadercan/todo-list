- [x] "npx create-next-app@latest {project-name}" to initialize nextjs
- [x] create github repo, and connect
- [x] change layout, change page.tsx, delete assets
- [x] create .env file, add .env to .gitignore
- [x] add .prettierrc

- [x] html, body, :root { height: 100% } thing at app/globals.css

- [x] "npm i -D prisma"
- [x] "npm i @prisma/client"
- [x] "npx prisma init"
- [x] create lib/db.ts
- [x] add "postinstall": "prisma generate" to package.json's scripts
- [x] change datasource db provider to sqlite in schema.prisma
- [x] add DATABASE_URL="file:./dev.db" to .env
- [x] "npx prisma migrate dev --name init"
- [x] add dev.db\*(slash yok) to .gitignore
- [ ] note: "npx prisma generate" and "npx prisma db push" whenever schemas have changed
- [ ] note: "npx prisma studio" to manage content

---

- primary stack: nextjs13-app-nosrc, react, tailwind, prisma
- secondary stack:
- ui: font = inter

---

- "npm i prisma --save-dev" ile "npm i -D prisma" aynı şey
- "npx prisma init --datasource-provider sqlite" sadece prisma/schema.prisma'daki data source'u otomatik sqlite yapmak için
- prisma migrate ile database kullanmadan localini server hale getirip development için database kullanabilirsin
