# Ochi — Animated Presentation Agency Site

A small, animated React/Vite website showcasing a presentation agency UI with scroll and motion effects. This repo contains a handcrafted landing, marquee, project cards, and more — built with modern frontend tools and animation libraries.

(Short Hindi note) — Is repo ke liye ye README hai: ek animated website jo React + Vite + Tailwind-like utilities, Framer Motion aur Locomotive Scroll use karti hai.

---

## Demo

- This is a local development site. To preview, run the dev server (instructions below) and open the Vite URL (usually http://localhost:5173).

## Features

- Large animated landing headings using Framer Motion.
- Horizontal marquee animation.
- Interactive project cards with animated center text on hover.
- Fixed top navigation and a large footer layout.
- Uses external images and inline SVGs for logos and icons.

## Tech & Libraries

- React
- Vite (dev server + build)
- Framer Motion (animations)
- Locomotive Scroll (scroll behavior — imported in code)
- react-icons (icons)
- Tailwind-like utility classes (project uses utility class names; if Tailwind is not set up, add it or replace classes with your own CSS)

> Note: The source imports `locomotive-scroll` and `framer-motion`. Ensure those packages are installed if you run the project.

## Project structure (key files)

- `src/App.jsx` — main app, imports components and initializes LocomotiveScroll.
- `src/main.jsx` — Vite entry (typical). 
- `src/components/` — components folder with:
  - `Navbar.jsx`, `landing.jsx`, `marquee.jsx`, `about.jsx`, `project.jsx`, `card.jsx`, `footer.jsx`, `eye.jsx`
- `index.html`, `vite.config.js`, `package.json` — project meta and configuration

## Installation (Windows / PowerShell)

Open a PowerShell terminal in the project root and run:

```powershell
# install dependencies
npm install

# start dev server
npm run dev
```

Typical Vite output will show the local URL (e.g., http://localhost:5173). Open that in your browser to see the animated site.

If you prefer yarn:

```powershell
yarn
yarn dev
```

## Build for production

```powershell
npm run build
# then serve the dist folder using a static host or `npm run preview` (Vite)
npm run preview
```

## Common adjustments & notes

- Fonts: The code references fonts like `Neue_Montreal` and `Franklin_Gothic_*`. Make sure to include those fonts (local or web) or replace them with available fonts.
- Tailwind: The project uses utility-style classes (e.g., `min-h-screen`, `px-20`). If Tailwind isn't installed/configured, either add Tailwind or replace classes with CSS.
- Images: Several components load external images. For an offline repo copy, save images to `public/` and update `src` paths.
- LocomotiveScroll: `new LocomotiveScroll()` is called in `App.jsx`. In some setups you need to initialize Locomotive properly within a React effect and provide container options; check the `locomotive-scroll` docs if you face issues.

## Deployment

- For quick deploys you can use Vercel or Netlify. Connect the repo and set the build command to `npm run build` and publish directory to `dist`.

## Contributing

- Small fixes, accessibility improvements, and performance tweaks are welcome. Open issues or PRs with a clear description.

## License

Add a license file (e.g., `LICENSE`) if you want to publish this repo publicly. If unsure, add `MIT` for permissive use.

---

If you want, I can:
- add a screenshot or GIF to this README (please drop a screenshot or tell me which page to capture),
- wire up Tailwind config / plugin if it isn't present, or
- fix `LocomotiveScroll` initialization so it integrates cleanly with React.

