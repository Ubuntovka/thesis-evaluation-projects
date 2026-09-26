# Study website

A small Next.js website with two pages:

- `/dashboard`: project dashboard
- `/courses`: course catalogue

Every pipeline builds and starts the current commit locally and checks the UI
goals in `.uiqlab.json` with the UIQLab CI client.

```bash
npm ci
npm run dev
```

Reports are saved as `uiqlab-report.html` and `uiqlab-report.json` in the job artifacts.
