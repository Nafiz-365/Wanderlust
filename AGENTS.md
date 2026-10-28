<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Wanderlust

Next.js 16.4 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui (base-nova style). All app code lives in `src`; routes live in `src/app`. Only the `/` route exists, but the homepage is complete: Banner, WhyChooseUs, Testimonials, CtaSection, Footer.

## Commands

- npm is the package manager (`package-lock.json` is the only lockfile).
- `npm run dev` — dev server at http://localhost:3000 (Turbopack is the default bundler in Next 16).
- `npm run build` — `next build`; runs the TypeScript check as part of the build; required before `npm run start`.
- `npm run start` — production server (run `build` first).
- `npm run lint` — ESLint v9 flat config (`eslint.config.mjs`).
- Fast type check without a full build: `npx tsc --noEmit` (there is no `typecheck` script).
- No test script or test runner is installed — `npm test` does not exist; do not look for one.
- Verification order: `npm run lint` → `npm run build` (the build covers typecheck; there is nothing after it).

## Layout & global shell

- Root layout `src/app/layout.tsx` renders `<Navbar />` + `<Footer />` on every page — never re-add them to individual pages. It also exports `metadata`, loads Geist/Josefin Sans via `next/font/google`, and uses Next's generated `LayoutProps<"/">` type.
- The navbar is a floating overlay: absolutely positioned at document top (16px inset, `z-30`), `body` has `pt-22` (the design's 88px band), and `Banner` pulls itself under it with `-mt-22`. Keep these three in sync — the offset trio is what makes the homepage match the design exactly while other pages would start below the navbar.
- `Navbar` is a client component (`usePathname` highlights the active route). Its links target routes that don't exist yet (`/destinations`, `/bookings`, `/admin`, `/profile`, `/login`, `/signup`) — build those pages rather than searching for them.

## Section conventions

- Every section in `src/components/*.tsx` follows the same shell: container `mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-20`, section padding `py-16 sm:py-20 lg:py-[120px]`, h2 `text-4xl sm:text-5xl lg:text-[60px]` + `tracking-[-0.03em]`.
- Palette: teal `#15a1bf` (primary + hover states), pale `#edfcff` (light section bg), ink `#0c0b0b`, grays `#6c696d`/`#b6b6b6`, card border `#eeeeee`. The design specifies no hover/focus states — adding teal hovers and `#128da5` button hovers is a deliberate, accepted deviation.
- Design source of truth: `C:\Users\hp\Desktop\b14-wanderlust-resources\Wanderlust .penpot` (a ZIP of per-element JSON files with exact geometry/colors/typography; PNGs in `public/images/` are byte-identical to the design assets). Extract specs from it rather than eyeballing screenshots.
- The design has a "Featured Destinations" section (page y746–1800) between Banner and WhyChooseUs that is not built yet.
- `metadata.title` is still "Create Next App" (not yet updated).

## Stack notes that differ from defaults

- Tailwind CSS v4, CSS-first: all imports/tokens in `src/app/globals.css`; there is no `tailwind.config.js` (`components.json` sets `tailwind.config: ""`). Path alias `@/*` → `./src/*`. Icons from lucide-react.
- React Compiler is enabled (`reactCompiler: true` in `next.config.ts`): components are auto-memoized — do not add `React.memo`/`useMemo`/`useCallback` for performance. `"use client"` / `"use server"` directives still apply where needed.
- shadcn/ui primitives in `src/components/ui` (`@/components/ui`) are built on **Base UI** (`@base-ui/react`) — not Radix; never add `@radix-ui/*` imports. Add components with `npx shadcn add <name>`.

## shadcn/ui primitive gotchas (learned the hard way)

- `cn()` at `src/lib/utils.ts` is the `cn` package (shadcn's clsx+tailwind-merge replacement): later classes win conflicts, so `className` overrides on primitives are reliable.
- `Button` as a link: `render={<a href="..." />}` **must** be paired with `nativeButton={false}` or Base UI throws a console error about lost native button semantics.
- Button sizes bare icons via `[&_svg:not([class*='size-'])]:size-4` — pass an explicit `size-*` class on the icon to control size.
- `Card` quirks: `has-[>img:first-child]:pt-0` strips top padding when an `img` is the first child (wrap images in a `<div>`), and `*:[img:first-child]`/`*:[img:last-child]` round image corners at any depth (neutralize with `rounded-none!` on the image). Gap and vertical padding come from `--card-spacing` — override via `[--card-spacing:--spacing(N)]` plus explicit `px-*`.
- `ui/carousel.tsx` carries a scoped `eslint-disable-next-line react-hooks/set-state-in-effect` on its initial `onSelect(api)` call — it is required (embla emits `select` only when the index changes). If you regenerate the file with `npx shadcn add carousel`, re-add the suppression or lint fails.
- `Testimonials.tsx` is `"use client"` because it uses `Carousel`; it also calls `useCarousel()` to render the design's custom 60px nav arrows in the header row instead of the built-in absolutely positioned chevrons.

## Gotchas

- The footer newsletter `<input type="email">` has `suppressHydrationWarning` on purpose: browser extensions (e.g. Temp Mail) inject attributes into email fields before hydration and trigger React hydration errors. Keep it; apply the same to future email inputs.
- `public/images/Banner.png` has the dark overlay and bottom gradient baked in — never add an extra `bg-black/*` layer over it.
- `.next/`, `out/`, `build/`, `next-env.d.ts`, and `.env*` are gitignored — never commit them. ESLint ignores the same paths (overrides in `eslint.config.mjs`).
- `AGENTS.md` between the BEGIN/END markers is regenerated by `next dev` — keep that block intact; commit it with your changes.
