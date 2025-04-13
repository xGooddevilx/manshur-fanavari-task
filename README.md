# Manshure Fanavari Task

---

## 📚 Table of Contents

- [Manshure Fanavari Task](#manshure-fanavari-task)
  - [📚 Table of Contents](#-table-of-contents)
  - [🛠️ Technologies Used](#️-technologies-used)
  - [📁 Folder Structure](#-folder-structure)
  - [🧪 Sample Users](#-sample-users)
  - [🧰 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation \& Running](#installation--running)
  - [📡 API Endpoints](#-api-endpoints)

---

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query v5](https://tanstack.com/query/latest)
- [Zod](https://zod.dev/) for schema validation and type inference
- [JWT](https://jwt.io/) for token-based authentication
- [Ky](https://github.com/sindresorhus/ky) – minimal HTTP client
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide Icons](https://lucide.dev/) – beautiful open-source icons
- [React Hook Form](https://react-hook-form.com/) for performant forms
- [Sonner](https://sonner.emilkowal.ski/) for toast notifications
- [ts-belt](https://github.com/mobily/ts-belt) – functional utilities for TypeScript
- [T3 Env](https://github.com/t3-oss/t3-env) for environment variable management

---

## 📁 Folder Structure

```
src/
├── api-services/      # API client setup and typed queries
│   ├── api-client/
│   ├── queries/
│   └── types/
├── app/               # App Router (pages, layout, routes)
│   ├── (application)/ # Main dashboard routes
│   ├── (auth)/        # Auth routes (login)
│   ├── api/           # Next.js API routes (backend logic)
├── components/        # Reusable UI components
│   ├── ui/            # Tables, Inputs, Toasts etc.
├── layouts/           # Layout wrappersBusiness modules like auth, env, etc.
├── modules/           # Business modules like auth, env, etc.
├── styles/            # Tailwind & global styles
├── utils/             # Utility helpers
├── views/             # Views for rendering specific page layouts and UI logic
```

---

## 🧪 Sample Users

| Username | Password  | Role  |
|----------|-----------|-------|
| admin    | admin123  | admin |
| user     | user123   | user  |

---

## 🧰 Getting Started

### Prerequisites

Make sure you have the following installed:

| Tool     | Version | Install Command                                |
|----------|---------|-------------------------------------------------|
| Node.js  | v20+    | [https://nodejs.org/](https://nodejs.org/)     |
| pnpm     | v8+     | `npm i -g pnpm`                                 |
| Git      | latest  | [https://git-scm.com/](https://git-scm.com/)   |

---

### Installation & Running

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/manshur-fanavari-task.git
cd manshur-fanavari-task
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Configure environment variables**

Create a `.env` file in the root:

```bash
cp .env.example .env
# Then edit .env with your values
```

```env
NEXT_PUBLIC_ENV=development
NEXT_PUBLIC_API_URL_ADDRESS=http://localhost:3000
NEXT_PUBLIC_API_PREFIX_URL=/api

JWT_SECRET=your-secret-key
```

> ✅ Generate a secure `JWT_SECRET` using:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

4. **Run the development server**

```bash
pnpm dev
```

> App will be running at: [http://localhost:3000](http://localhost:3000)

---

## 📡 API Endpoints

| Method | Endpoint             | Description                    |
|--------|----------------------|--------------------------------|
| POST   | /api/auth/login      | Login with username/password   |
| POST   | /api/auth/logout     | Logout & clear session         |
| GET    | /api/auth/whoami     | Current authenticated user     |
| GET    | /api/admin/users     | Admin-only: Fetch all users    |