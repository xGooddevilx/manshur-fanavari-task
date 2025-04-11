# Manshure Fanavari Task

## 🚀 Features
- **Role-Based Access Control**: Admin and User roles with distinct dashboards.
- **JWT Authentication**: Secure token-based authentication stored in HTTP-only cookies.
- **Protected Routes**: Middleware to restrict access based on user roles.
- **Session Persistence**: Maintains user sessions across page reloads.
- **API Integration**: Seamless communication with Next.js API routes using `ky`.
- **State Management**: Efficient data fetching and caching with React Query.
- **Type Safety**: Comprehensive TypeScript interfaces and types.
- **Error Handling**: User-friendly error messages and loading indicators.

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [JWT](https://jwt.io/)
- [React Query](https://tanstack.com/query/latest)
- [ky](https://github.com/sindresorhus/ky) for HTTP requests
- [T3 Env](https://github.com/t3-oss/t3-env) for environment variable management

## 📁 Project Structure


## 🧪 Sample Users

| Username | Password  | Role  |
|----------|-----------|-------|
| admin    | admin123  | admin |
| user     | user123   | user  |



## 🧰 Getting Started

### Prerequisites

- Node.js v20 or higher
- pnpm

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/nextjs-role-based-auth.git
   cd nextjs-role-based-auth
  ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
  ```

3. **Configure Environment Variables**

   Create a `.env.local` file in the root directory:

   ```env
   JWT_SECRET=your-secure-jwt-secret
  ```

   **Note**: Generate a strong secret using Node.js:

   ```bash
   node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
  ```

4. **Run the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
  ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧱 API Endpoints

- `POST /api/auth/login`: Authenticate user credentials.
- `POST /api/auth/logout`: Terminate user session.
- `GET /api/auth/whoami`: Retrieve current authenticated user.
- `GET /api/admin/users`: Fetch all users (Admin only).
