# AGENTS.md

## Structure
- Two independent apps, no root `package.json` or workspace. Install/run separately.
- `backend/` — Express 5 ESM (`"type":"module"`). Entrypoint `backend/index.js` mounts `POST /api/auth/signup|login`, `GET /api/auth/logout`, `GET /api/user/currentuser`. Key dirs: `config/`, `controllers/`, `models/user.model.js`, `routes/`, `middlewares/isAuth.js`.
- `frontend/` — Vite 8 + React 19 + react-router-dom 7 + Tailwind 3.4. Entrypoint `frontend/src/main.jsx` → `BrowserRouter` → `AuthContext` → `UserContext` → `App.jsx` (routes gated on `userData`). Pages: `Home`, `Login`, `Signup`; Components: `Nav.jsx`.
- No CI workflows, no tests, no `opencode.json`.

## Commands
- Backend: `cd backend && npm install && npm run dev` — runs `nodemon index.js`. Only script is `dev`.
- Frontend: `cd frontend && npm install && npm run dev` (Vite at `http://localhost:5173`) | `npm run build` | `npm run lint` (eslint `.`, ignores `dist/`) | `npm run preview`
- No `npm test` / typecheck. Lint exists only in `frontend/`. No single-test command.

## Env & Config
- `backend/.env` (gitignored, example committed): `PORT=8000` (fallback `5000` in `backend/index.js:18`), `MONGODB_URI="mongodb://127.0.0.1:27017/linkedIn"`, `JWT_SECRET`, `NODE_ENV="development"`. Requires local MongoDB running.
- CORS hardcoded in `backend/index.js:14` to `origin:"http://localhost:5173" credentials:true` — update together with frontend.
- Frontend `serverUrl` hardcoded in `frontend/src/context/AuthContext.jsx:5` as `"http://localhost:8000"` (not `VITE_*` env). Update that file, not an env var, for deploy.
- **Gotcha:** `backend/controllers/auth.controllers.js:36,70` checks `process.env.NODE_ENVIRONMENT==="production"` for `secure` cookie but `.env` sets `NODE_ENV` — `secure` never enables. Fix var name if touching auth.
- `backend/config/db.js` calls `dotenv.config()` independently; `connectDb()` is called inside `app.listen` (`backend/index.js:24`).

## Auth Flow
- JWT via `httpOnly` cookie `token` (7d, `sameSite:"strict"`), set in `backend/controllers/auth.controllers.js` / `backend/config/token.js:5` (`jwt.sign({userId}, JWT_SECRET, {expiresIn:"7d"})`).
- `backend/middlewares/isAuth.js:5` reads `req.cookies.token`, verifies with `JWT_SECRET`, sets `req.userId`.
- Every frontend auth request must use `{withCredentials:true}` — see `frontend/src/context/UserContext.jsx:12`, `frontend/src/pages/Login.jsx:26` & `Signup.jsx:31`, `frontend/src/components/Nav.jsx:21`. `UserContext` fetches `GET /api/user/currentuser` on mount to populate `userData`.
- `frontend/src/App.jsx:13-15` guards routes: `userData ? <Home/> : <Navigate to="/login"/>` and inverse for `/login`/`/signup`.

## Conventions & Quirks
- ESM `import/export` everywhere. `cookie-parser` and `cors` required before routes.
- No formatter (prettier) or typecheck config. ESLint config at `frontend/eslint.config.js` (flat config, `globalIgnores(['dist'])`).
- Tailwind content globs `index.html` + `src/**/*.{js,ts,jsx,tsx}` (`frontend/tailwind.config.js:3`), PostCSS `tailwindcss` + `autoprefixer`.
- `backend/.gitignore` ignores `node_modules/` + `.env`; `frontend/.gitignore` ignores `dist/`.
