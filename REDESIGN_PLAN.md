# SavyCart Landing Page Redesign Plan

Status: approved for implementation
Direction dealt: `product-performs` · seed `518937014` · sector `consumer-app` · tone `quiet`
Skill: `design-taste-frontend`

---

## 1. Findings

### Stack (unchanged)

- Next.js 16 (pages router, `output: 'export'`), React 19, TypeScript 6
- Tailwind 4 (`@theme` in `src/styles/main.css`), no `tailwind.config.js`
- framer-motion, @headlessui/react, @heroicons/react, react-scroll
- ESLint 10 flat config + Prettier; Husky pre-commit runs lint + tsc

### Product truth

Source: `/private/var/www/services/savycart-app/FEATURES_OVERVIEW.md`, app README, and app source.

- Product list with search, filter, favorites, brands, categories, measurement units
- Shopping cart with quantity, persistence, purchase creation
- Tax calculation at checkout; multi-currency
- Purchase history and shopping history (place, date, total) with per-product price history
- Offline support (service worker / v-offline); cloud synchronization
- Settings, profile, financial summaries

### Critical content issue

The current `pricing` block in `src/config/index.json` (Free/Pro/Enterprise, $15/$29, “5 users, 10 GB”) is template fiction — not in any documentation. **Remove it.** Do not invent pricing, stats, testimonials, or integrations.

### URLs and navigation that must survive

| Destination | Where |
|---|---|
| `https://apps.apple.com/app/savycart/id6458534889` | primary CTA |
| `https://sheiley-shop.netlify.app` | secondary CTA |
| `#product`, `#features`, `#about` | header nav (react-scroll) |
| `/policy`, `/terms` | footer links |
| GitHub / Twitter / LinkedIn | footer socials |
| GA + Google Ads scripts | `Analytics.tsx` (keep as-is) |

### Real imagery available

- Raw UI: `public/assets/product-list.jpeg`, `public/assets/shipping-history.jpeg`
- Lifestyle/product: `public/assets/shop-history.png`, `demo-1.png`, `demo-2.png`, `main-demo.png`
- Brand: `main-logo.png`, App Store badge SVG, 4 feature icons
- `public/assets/gifs/demo.gif` is 9.5 MB — **do not use** (performance)

### Design skill

`design-taste-frontend` loaded and followed. Dealt sheet:

- **Direction:** The product performs — working interface fragments, not illustrations
- **Type:** Clash Grotesk (Fontshare CDN), weights 400/500
- **Colour:** Sand and moss

```css
--bg: #ddd6c6;
--surface: #d2cab8;
--ink: #2a2a26;
--muted: #59574e;
--accent: #4f6238;
--accent-ink: #ffffff;
--field-1: #3f5a2a;
```

---

## 2. The idea and the live thing

> **On this page, the grocery list itself becomes the interface.**

SavyCart’s own material is the list — item, unit, price, favorite star, place/date/total history. The page runs a working list in the hero instead of a static mockup.

**Live thing:** an interactive “My list” fragment (HTML, root marked `data-ui`) with real sample items from the screenshots (Arroz, Nuggets, Oregano…). Visitors tick items, watch the running total update, star favorites. No-JS fallback: the static list still reads correctly.

---

## 3. Page argument (claims → sections)

| # | Section | Claim | Proof |
|---|---|---|---|
| 1 | **Hero** (`h1`) | Your grocery list, in your pocket — no pencil | Headline + live list fragment + App Store / Web CTAs |
| 2 | **Showcase** `#product` | The real app, not a concept | Raw screenshots: list, shopping history, purchase detail |
| 3 | **Features** `#features` | Capabilities that change how you shop | Sentence bands with working switches + consequence lines |
| 4 | **How it works** | Empty list → spending insight in three steps | Call-and-response: input → true-size UI fragment |
| 5 | **Final CTA** | Start free on iOS or in the browser | Accent tile: App Store badge + web link |
| 6 | **About** `#about` | Open source, made for real shopping trips | Socials, policy/terms preserved |
| 7 | **Footer** | One quiet baseline line | 3-column grid: description · links · year |

### Removed

- `Pricing` (unsupported claims)
- `Canvas` / `Wave` (decorative animation, banned patterns)
- `Divider` (thin rules banned)
- Old zig-zag `Product` layout and template copy (“Latest & greatest”, “All the best technologies”)

---

## 4. Design system

### Tokens (`src/styles/main.css`)

- Palette above as CSS variables + Tailwind `@theme` color roles
- Type steps (five only):
  - `--step-small: clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)`
  - `--step-body: clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)`
  - `--step-lead: clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)`
  - `--step-head: clamp(2rem, 1.3rem + 3.2vw, 4rem)`
- One corner radius for page chrome: `4px`
- One button shape: rectangular; moss fill primary, outline secondary
- Clash Grotesk 400/500 via Fontshare with preconnect

### House rules (enforced)

No gradients, glass, icon-card grids, eyebrow labels, hairline rules, shadows at rest, monospace, index numbering, emoji, decorative blobs. Headlines ≤ 2 lines at every width. Equal outer margins. Heading on every section. One `h1` on the first screen.

Product UI colors (blue/green/red) appear only inside `data-ui` fragments.

---

## 5. Section blueprints

### Hero

- Desktop: two-tone split (sand | surface) at a clean vertical edge.
  - Left: logo top-left; everything else bottom-left — headline `clamp(26px, 2.1vw, 32px)` medium (one plain line, ≤ ~32 chars), supporting sentence 17px / 44ch, App Store badge + “Open web app”.
  - Right: live list fragment ~450px, centred, real items, tickable, running total at 13px.
- Mobile: lighter block first with fragment at 78vw / 58svh; darker block below with headline 6.4vw, sentence, CTAs at 20px margins. Logo top-left over first block.
- Header: wordmark + Product / Features / About + one action. Mobile: Headless UI popover.

### Showcase `#product`

Alternating 5/7 rows (statement + cropped interface/lifestyle image). Assets: `product-list.jpeg`, `shipping-history.jpeg`, `demo-1.png`, `shop-history.png`. Consistent crop ratios, square corners, proper `width`/`height`/`alt`/`loading="lazy"`.

### Features `#features`

Four full-bleed bands (~20vh desktop, ≥132px mobile), butted with no gap:

1. Star the staples you always buy → favorites filter
2. Keep shopping without a signal → offline / service worker
3. See tax before you pay → tax calculation
4. Track what each trip cost → purchase history (place, date, total)

Each: sentence ≤ 8 words at `clamp(30px, 3.6vw, 60px)` + working toggle (44px touch target). Two bands on at load. On: band fills a palette field; consequence line at 17px (no invented stats). Click, Space, Enter; `aria-pressed`.

### How it works

Narrow column (~560px). Three exchanges:

1. *First, build the list.* → product input with real typed text → list row fragment
2. *Then shop it.* → qty × price → total + tax fragment
3. *Then review the trip.* → breaks out wider: Place / Date / Total rows

Mobile: stack, no indent; final result edge-to-edge.

### Final CTA

Full-width `--field-1` tile ~360px: heading 3–5 words at 40px (28px mobile), two lines of 17px, App Store badge + web-version button. Lifestyle photo support. Mobile: accent tile full width.

### About + footer

- About: honest short block — open source, replaces pencil & paper, GitHub link. No founder letter (does not exist).
- Footer baseline, 3-col grid `1fr auto 1fr`: description · Policy · Terms · socials · © year. Mobile: three stacked 14px lines.

---

## 6. Motion

1. **Signature:** masked headline line reveal on load (~900ms, ease-out, 110ms stagger), then sentence + CTA fade-up.
2. **Section entrances:** stagger 60–90ms, rise 16–32px + opacity, once on enter (adapt `LazyShow`).
3. **Control feedback:** press/hover/focus on buttons, links, switches, list rows.
4. **List micro-interaction:** check → row state + total transition (transform/opacity only).

All respect `prefers-reduced-motion: reduce`. No scroll-jacking.

---

## 7. Content & config

`src/config/index.json`:

- Keep: company name/logo, navigation names + hrefs, both CTA URLs, `about.socialMedia`
- Replace: `mainHero`, `product`, `features` with the copy deck (polished English, ≤ 2-line headlines)
- **Delete:** entire `pricing` object
- Fix: `callToAction.href` → App Store URL (currently `"#"`)

`src/utils/AppConfig.ts` + `index.tsx` Head:

- Description: “SavyCart is the grocery list that remembers prices — build lists, track purchases, and review your shopping history on iPhone and the web.”
- Add meta description + og tags on the home page.

---

## 8. File-level work

| Action | File |
|---|---|
| Rewrite tokens + type utilities | `src/styles/main.css` |
| Rewrite content; drop pricing | `src/config/index.json` |
| Slim header (desktop + mobile popover + CTA) | `src/components/Header.tsx` |
| New hero + live list | `src/components/Hero.tsx`, `LiveList.tsx` |
| New showcase | `src/components/Showcase.tsx` |
| Rewrite features (switch bands) | `src/components/Features.tsx` |
| New how-it-works | `src/components/HowItWorks.tsx` |
| New final CTA | `src/components/FinalCta.tsx` |
| Rewrite about + footer baseline | `src/components/About.tsx` (or `Footer.tsx`) |
| Assemble page | `src/pages/index.tsx` |
| Font preconnect + SEO meta | `src/pages/_document.tsx`, `index.tsx` |
| SEO defaults | `src/utils/AppConfig.ts` |
| Remove from bundle | `Canvas`, `Wave`, `Pricing`, `Divider`, `MainHero`, `MainHeroImage` (+ unused hooks/utils) |
| Keep as-is | `Analytics`, `policy`, `terms`, `gtag`, `googleAds` |

No new runtime dependencies. Clash Grotesk is a stylesheet link only.

---

## 9. Responsive strategy

| Width | Composition |
|---|---|
| ≥1280 | Hero split 50/50; full-bleed feature bands; indented how-it-works; 3-col footer |
| 768–1279 | Hero stacks or 55/45; showcase compresses; lower type clamps |
| <768 | Fragment-first hero (58svh); headline 6.4vw; bands ≥132px / 44px toggles; unindented steps; full-bleed CTA; 3-line footer; popover nav |

Verify at 1440 / 768 / 390.

---

## 10. QA gate

1. `npm run lint` → `npm run build-types` → `npm run build`
2. `node …/scripts/lint.mjs src/` — no banned patterns
3. Serve `out/` → `inspect.mjs` at 1440/768/390 → 0 FAIL; open every screenshot; ≤ 3 critique rounds
4. Click every link: App Store, web app, anchors, policy, terms, socials; confirm static export routes
5. Console: no hydration errors, no 404 assets
6. Reduced-motion + keyboard passes
7. Confirm GA/Ads scripts still render

---

## 11. Decisions locked

| Decision | Rationale |
|---|---|
| Remove pricing entirely | Unsupported by docs; keeping it invents commercial claims |
| Sand & moss palette, not brand blue | Dealt direction; blue survives in product fragments + logo; earthy ground fits grocery and avoids blue-SaaS cliché |
| Drop the 9.5 MB gif | Performance; live HTML fragment is stronger |
| No testimonials / stats / logo strips | Nothing documented |
| Live list over phone-bezel mockup | Direction’s core: the product performs |
