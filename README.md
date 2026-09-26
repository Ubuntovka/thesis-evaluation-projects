# Study website

A small Next.js website with two pages:

- `/dashboard`: project dashboard
- `/courses`: course catalogue

Every pipeline deploys a preview of the current commit to Vercel and checks the
UI goals in `.uiqlab.json` with the UIQLab CI client.

```bash
npm ci
npm run dev
```
