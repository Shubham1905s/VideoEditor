\*\*Project for the internship
![alt text](image-1.png)

## Why?

- **Privacy**: Your videos stay on your device
- **Free features**: Most basic CapCut features are now paywalled
- **Simple**: People want editors that are easy to use - CapCut proved that

## Features

- Timeline-based editing
- Multi-track support
- Real-time preview
- No watermarks or subscriptions
- Analytics provided by [Databuddy](https://www.databuddy.cc?utm_source=opencut), 100% Anonymized & Non-invasive.
- Blog powered by [Marble](https://marblecms.com?utm_source=opencut), Headless CMS.

## Project Structure

- `apps/web/` – Main Next.js web application
- `src/components/` – UI and editor components
- `src/hooks/` – Custom React hooks
- `src/lib/` – Utility and API logic
- `src/stores/` – State management (Zustand, etc.)
- `src/types/` – TypeScript types

## Getting Started

### Prerequisites

Make sure you have the following installed before starting:

- [Bun](https://bun.sh/docs/installation) – Used as the package manager and runtime
- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) – Used to run MongoDB and Redis locally
- [Git](https://git-scm.com/downloads) – For cloning the repository

> **Note:** Docker is optional. If you only want to work on frontend/UI features (no saving or auth), you can skip Docker entirely.

---

### Setup

#### 1. Clone the repository

```bash
git clone https://github.com/Shubham1905s/VideoEditor.git
cd VideoEditor
```

#### 2. Set up environment variables

```bash
# Unix/Linux/Mac
cp apps/web/.env.example apps/web/.env.local

# Windows PowerShell
Copy-Item apps/web/.env.example apps/web/.env.local
```

The `.env.example` includes sensible defaults that match the Docker Compose config and should work out of the box.

#### 3. Start the required services (MongoDB + Redis)

```bash
docker compose up -d mongo redis serverless-redis-http
```

> You can verify the containers are running with: `docker ps`

#### 4. Install dependencies

```bash
bun install
```

#### 5. Start the development server

```bash
bun dev:web
```

The app will be available at **[http://localhost:3000](http://localhost:3000)**.

> **Tip:** The first startup may take a few seconds longer as Next.js builds the initial cache. Subsequent starts will be much faster.

---

### Common Issues

| Problem | Fix |
|---|---|
| `bun: command not found` | Install Bun from [bun.sh](https://bun.sh/docs/installation) |
| Docker containers not starting | Make sure Docker Desktop is running |
| Port 3000 already in use | Stop other dev servers or change the port in `apps/web/package.json` |
| Hydration errors in browser | These are usually caused by browser extensions — they are harmless in dev mode |

---

### Self-Hosting with Docker

To run everything (including a production build of the app) in Docker:

```bash
docker compose up -d
```

The app will be available at **[http://localhost:3100](http://localhost:3100)**.

---

### Cleaning Up (Free Up Disk Space)

During development, Next.js creates a `.next` cache folder that can grow large over time. To clean it:

```bash
# Delete Next.js build cache
Remove-Item -Recurse -Force apps/web/.next   # Windows PowerShell
rm -rf apps/web/.next                         # Unix/Linux/Mac
```

To completely remove all dependencies (and reinstall fresh):

```bash
# Windows PowerShell
Remove-Item -Recurse -Force node_modules

# Unix/Linux/Mac
rm -rf node_modules

# Then reinstall
bun install
```






## License

[MIT LICENSE](LICENSE)

---
