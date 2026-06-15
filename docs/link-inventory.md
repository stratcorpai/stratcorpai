# Link and Content-Direction Inventory

This inventory covers all known frontend directions, including non-navbar links, modal CTAs, direct PDFs, and external links.

## Router Paths

- `/` -> homepage (`src/App.tsx` -> `src/pages/Index.tsx`)
- `/framework` -> AI Governance Framework page (Overview / Deep Dive tabs) (`src/pages/Framework.tsx`)
- `/war-room` -> War Room page (`src/pages/WarRoom.tsx`)
- `/speaking` -> Speaking page (`src/pages/Speaking.tsx`)
- `*` -> not found (`src/App.tsx` -> `src/pages/NotFound.tsx`)

## Canonical Homepage Section Anchors

- `#investment-thesis`
- `#board-service`
- `#ai-governance`
- `#team`
- `#engagement-paths`

## In-App Navigation Targets

- Navbar section links -> anchors above (`src/components/Navbar.tsx`)
- Navbar "Framework" link -> `/framework` (`src/components/Navbar.tsx`)
- Navbar "War Room" link -> `/war-room` (`src/components/Navbar.tsx`)
- Footer quick links -> anchors above + "Framework" -> `/framework` + "War Room" -> `/war-room` (`src/components/Footer.tsx`)
- Hero primary CTA -> `#engagement-paths` (`src/components/HomePageNarrative.tsx`)
- Hero secondary CTA -> `/framework` (`src/components/HomePageNarrative.tsx`)
- Research section "Open full framework" CTA -> `/framework` (`src/components/HomePageNarrative.tsx`)
- NotFound CTA -> `/` (`src/pages/NotFound.tsx`)

## Contact CTA Triggers (mailto: links)

- `ContactCTA` variants:
  - `board-advisory`
  - `consulting`
  - `partnership`
  - `general`
- Triggers found in:
  - Navbar
  - HomePageNarrative
  - Team
  - Footer

## Direct PDF Endpoints (Preserved)

- `/blog/TheNextAIImperative_A.Bulisache_F.Chima_04.25.pdf`
- `/blog/TheNextAIImperative-Capacity_A.Bulisache_F.Chima_05.25.pdf`
- `/blog/TheNextAIImperative-Geopolitics_A.Bulisache_F.Chima_05.25.pdf`
- `/blog/TheNextAIImperative-Sustainability_at_Scale_A.Bulisache_F.Chima_05.25.pdf`
- `/blog/TheNextAIImperative-Ethics_Sovereignty_Cyber-Resilient_Systems_A.Bulisache_F.Chima_09.25.pdf`
- `/blog/Stratified_Perspectives-PE_AI_Infrastructure_A.Bulisache_F.Chima_09.25.pdf`
- `/blog/TheNextAIImperative-Governing_Intelligence_at_Scale_A.Bulisache_F.Chima_10.25.pdf`

Source: `src/content/siteContent.ts` and `src/utils/blogUtils.ts`

## Team Asset Links (Preserved)

- Images:
  - `/assets/team-andreea.webp`
  - `/assets/team-desiree.webp`
  - `/assets/team-siddhartha.webp`
- Team profiles/descriptions source:
  - `src/components/team/TeamData.ts`

## External Links

- `https://linkedin.com/in/andreeabulisache`
- `https://linkedin.com/in/siddharth`
- `mailto:partner@stratcorp.ai`

## Legacy/Direct URL Funnel Strategy

Legacy paths are redirected to canonical homepage anchors via `public/_redirects`.  
See `docs/legacy-redirect-map.json`.

Deprecated direct links are intentionally removed from primary navigation and consolidated into canonical section anchors.
