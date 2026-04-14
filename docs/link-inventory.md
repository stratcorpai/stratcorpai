# Link and Content-Direction Inventory

This inventory covers all known frontend directions, including non-navbar links, modal CTAs, direct PDFs, and external links.

## Router Paths

- `/` -> homepage (`src/App.tsx`)
- `/framework` -> AI Governance Framework page (Overview / Deep Dive tabs) (`src/pages/Framework.tsx`)
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
- Footer quick links -> anchors above + "Framework" -> `/framework` (`src/components/Footer.tsx`)
- Hero primary CTA -> `#engagement-paths` (`src/components/Hero.tsx`)
- Hero secondary CTA -> `#ai-governance` (`src/components/Hero.tsx`)
- Research section "View AI Governance Framework" CTA -> `/framework` (`src/components/blog/BlogSection.tsx`)
- NotFound CTA -> `/` (`src/pages/NotFound.tsx`)

## Modal CTA Triggers (Contact)

- `ContactCTA` variants:
  - `board-advisory`
  - `consulting`
  - `partnership`
- Triggers found in:
  - Navbar
  - BoardService
  - BlogSection
  - Team
  - EngagementPaths
  - Footer

## Direct PDF Endpoints (Preserved)

- `/blog/TheNextAIImperative, A.Bulisache, F.Chima, 04.25.pdf`
- `/blog/TheNextAIImperative- Capacity, A.Bulisache, F.Chima, 05.25.pdf`
- `/blog/TheNextAIImperative-Geopolitics, A.Bulisache, F.Chima, 05.25.pdf`
- `/blog/TheNextAIImperative- Sustainability at Scale, A.Bulisache, F.Chima 05.25.pdf`
- `/blog/TheNextAIImperative-Ethics_Sovereignty_Cyber-Resilient_Systems_A.Bulisache_F.Chima_09.25.pdf`
- `/blog/Stratified_Perspectives-PE_AI_Infrastructure_A.Bulisache_F.Chima_09.25.pdf`
- `/blog/TheNextAIImperative-Governing_Intelligence_at_Scale_A.Bulisache_F.Chima_10.25.pdf`

Source: `src/content/siteContent.ts` and `src/utils/blogUtils.ts`

## Team Asset Links (Preserved)

- Images:
  - `/assets/team-andreea.png`
  - `/assets/team-desiree.png`
  - `/assets/team-siddhartha.png`
- Team profiles/descriptions source:
  - `src/components/team/TeamData.ts`

## External Links

- `https://linkedin.com/in/andreeabulisache`
- `https://linkedin.com/in/siddharth`
- `mailto:andreea@stratifiedadvisory.com`
- `mailto:sc@stratcorp.ai`

## Legacy/Direct URL Funnel Strategy

Legacy paths are redirected to canonical homepage anchors via `public/_redirects`.  
See `docs/legacy-redirect-map.json`.

Deprecated direct links are intentionally removed from primary navigation and consolidated into canonical section anchors.

