# The $10K Upgrade Plan — Burton Industry LLC

Tracking the work to close the gap from a strong $3–5K site to a genuine $10K site,
measured against **The $10K Checklist** (8 criteria).

## Scoreboard

| # | Criterion | Before | After 1–3 | Target |
|---|-----------|:-----:|:--------:|:------:|
| 01 | Point of view, not a template | 8 | 8 | 9 |
| 02 | Typography that does work | 4 | 8 | 9 |
| 03 | Restrained color system | 8.5 | 8.5 | 9 |
| 04 | Hierarchy that breathes | 8 | 8 | 8.5 |
| 05 | Imagery with intent | 5 | 6.5 | 9 |
| 06 | Motion that whispers | 6 | 6 | 9 |
| 07 | Mobile designed, not shrunk | 7.5 | 7.5 | 9 |
| 08 | Invisible expensive stuff | 5 | 7.5 | 9 |

**Overall: 6.5 → ~7.5 → target 9.0**

---

## ✅ Done (Items 1–3)

- **Typography** — Swapped Inter/Inter Tight for **Fraunces** (editorial display serif)
  + **Hanken Grotesk** (body) + JetBrains Mono (labels). No longer uses the banned font.
- **Imagery (branding cleanup)** — Replaced the HiLine-branded crane photo with a clean,
  branding-free climber/rigging shot (`rigging-climber.jpg`). Deleted unused branded
  assets (`crane-rigging.jpg`, `crane-debris-bin.jpg`, `tree-rigging.jpg`).
- **Invisible layer (partial)** — Added full metadata (Open Graph, Twitter card, robots,
  canonical, keywords, icons, `metadataBase`), a dynamic branded **OG image**
  (`opengraph-image.tsx` / `twitter-image.tsx` via `next/og`), and fixed the
  `--color-text-faint` token to pass **WCAG AA** (was ~3.4:1, now ~6.3:1).

---

## Remaining Work

### Phase 1 — Motion that whispers (Checklist #06) · ~1 day

The headline scroll behavior is still textbook fade-up. Replace the generic pattern with
2–3 signature, hand-crafted moments. Keep `prefers-reduced-motion` support everywhere.

- [ ] **Hero**: replace opacity/translateY entrance with a line-by-line masked text reveal
      (clip-path/overflow mask) so headlines wipe up from a baseline. Add subtle parallax
      on the background video (translateY on scroll, throttled).
- [ ] **Portfolio / services imagery**: `clip-path` inset or scale-from-mask reveal instead
      of fade-up; stagger by column, not uniform delay.
- [ ] **Micro-interactions**: magnetic/spring hover on primary CTAs, animated underline on
      nav links, number ticker easing already good (keep).
- [ ] **Section transitions**: a single cohesive scroll-linked accent (e.g. a thin rule that
      draws in) rather than every block doing the same fade.
- **Acceptance**: a designer reviewing scroll behavior would not immediately call it "AOS."
  Reduced-motion users get instant, non-janky states.

### Phase 2 — Imagery with intent (Checklist #05) · ~0.5 day + ongoing

Branding is cleaned up, but assets are still recognizable stock.

- [ ] Audit remaining product branding (ECHO/STIHL visible on tools in `arborist-ladder.jpg`,
      `log-hauling.jpg`) — crop out or replace.
- [ ] Fix copy/image mismatch: "Commercial Lot Crown Reduction" currently shows a forest
      path (`commercial-trees.jpg`) — source a true commercial/urban tree-work shot.
- [ ] Apply a consistent grade/treatment (duotone toward forest-green shadows, unified
      warmth) so curated stock reads as a commissioned set.
- [ ] **Longer term**: schedule a real photo/drone shoot of Burton's crews; swap the hero
      video + 6–8 portfolio shots for owned assets. This is the single biggest lever on #05.
- **Acceptance**: no third-party logos/plates; images feel like one art-directed library.

### Phase 3 — Hero video & performance (Checklist #08, #04) · ~0.5 day

- [ ] Re-encode hero/section video to web-native formats: `.webm` (VP9/AV1) + `.mp4` (H.264),
      **drop `.mov`/QuickTime as a source**. Add a `poster` image for instant first paint.
- [ ] Compress and cap video bitrate and dimensions for mobile; serve a lighter mobile variant.
- [ ] Verify **LCP < 2.0s** and total hero payload is reasonable; lazy-load below-the-fold
      video. Run Lighthouse (mobile + desktop) and record scores.
- **Acceptance**: video plays on Chrome/Firefox/Safari; sub-2s LCP on a mid-tier phone.

### Phase 4 — Mobile, designed not shrunk (Checklist #07) · ~0.5 day

The bottom-nav + safe-area work is good; go further than reflow.

- [ ] Rethink the services list and portfolio for phone (e.g. snap-scroll carousel vs stacked
      rows), not just `grid-cols-1`.
- [ ] Tune hero type scale and spacing specifically for small screens.
- [ ] Verify tap targets ≥44px, no horizontal overflow, mobile menu focus trap.
- **Acceptance**: phone layout reads as a deliberate design, not a compressed desktop.

### Phase 5 — POV cohesion & polish (Checklist #01, #02) · ~0.5 day

- [ ] Resolve the **light header vs forest-noir body** inconsistency — either commit the nav
      to the dark system with a brighter surface, or intentionally theme it. (Right now it's
      the one element breaking the POV.)
- [ ] Tune Fraunces: confirm optical sizing at display vs body, consider an italic accent on
      a key word ("rooted in *integrity*") for editorial character.
- [ ] Re-check full type scale/rhythm after the serif swap.

### Phase 6 — Invisible layer, finish (Checklist #08) · ~0.5 day

- [ ] Confirm the **production domain** and update `metadataBase` (currently
      `https://burtonindustry.com` placeholder).
- [ ] Ship a proper **favicon set** (square `icon.png`/`favicon.ico`/`apple-icon.png`) instead
      of reusing the non-square `logo.png`.
- [ ] Full **keyboard-nav + focus-visible** audit across nav, forms, cards, mobile menu.
- [ ] Contrast audit of all color tokens against AA (not just `text-faint`).
- [ ] Add `sitemap.ts` and `robots.ts`; structured data (LocalBusiness JSON-LD) for SEO.
- [ ] Wire the estimate form to a real endpoint (currently client-only `setSubmitted`).

---

## Suggested order

1. **Phase 1 (Motion)** — biggest perceived-quality jump, directly fixes a named failure.
2. **Phase 3 (Video/perf)** — fixes a real cross-browser bug + the "feels fast" signal.
3. **Phase 2 (Imagery)** — quick branding/mismatch fixes now; commissioned shoot later.
4. **Phase 5 (POV/type polish)** then **Phase 4 (Mobile)** then **Phase 6 (Invisible finish)**.

_Total remaining estimate: ~3–4 focused days (excluding a real photo shoot)._
