# Homepage hero first pass — November 2, 2026

This is a **hero-only comparison**, not a replacement visual identity or a
production deployment. Start with [compare.html](compare.html); it works from
local disk and from a static HTTP server. Both pages include the existing lower
homepage for context. The public homepage stays on the existing `main` branch.

## Brief and spatial thesis

- Surface: the existing homepage hero, in Persuade mode. Help a visitor see what
  MeOnMesh apps actually do, then explore the existing collection or an app page.
- Preserve the incumbent green/cream light/dark palette, Georgia/system type,
  original app assets and identities, and all app/store/support/privacy links.
  No invented download counts, testimonials, pricing, or compatibility claims.
- The replacement headline and supporting copy describe existing app uses;
  both variants use the same text to isolate layout differences. The old
  decorative eyebrow, orbit shapes and floating-icon arrangement are omitted
  only inside the proposed hero. No surrounding section is restyled.
- A (`a.html`): text beside two app-screen excerpts. App names label real UI and
  link to the existing app pages. On mobile the excerpts sit side by side.
  This gives more screen context but smaller in-app lettering on a phone.
- B (`b.html`): a broad headline/CTA row above three product scenes. Tighter
  screenshot crops make each app's activity larger. The mobile strip shows a
  peek of the next scene, supports native touch/keyboard scrolling, and never
  auto-advances. The tradeoff is that the third scene needs horizontal browsing.
- Screenshots are existing, unmodified public App Store images. Cropping is CSS,
  not synthetic app UI. Screenshot assets retain their existing provenance in
  `../../assets/screenshots/sources.json`. No new bitmap artwork was generated.

## Impeccable and independent review

Used the local Impeccable skill's scoped layout/bolder guidance and craft floor,
with the incumbent implementation as visual authority. This narrow refinement
can proceed without a full `PRODUCT.md`/brand-init workshop. It is not a formal
scored `critique`, a whole-site rebrand, or an Impeccable live-generation session.
No global skill/hook installation or external service configuration was changed.

Claude performed the independent source-and-screenshot layout assessment before
seeing detector output. Its review identified generic decorative evidence,
unused space, small art labels, brittle absolute positioning, and mobile depth.
It warned that full portrait screens become tiny on phones; A therefore uses
labeled excerpts rather than promising that all in-app text is readable, while
B uses larger activity crops and a keyboard-focusable native scroll region.
Codex implemented and visually verified the two proposals on Ubuntu.

The initial scoped mechanical scan found seven `cramped-padding` warnings: one
in the old hero art and six in the existing card-link wrappers. The final full
scan of A, B and the comparison page returned **16 findings**, all in unchanged
lower-homepage content: 12 card-link wrapper warnings and four existing kickers
(`THE COLLECTION`, `A LITTLE HELP?`). None target either new hero or the
comparison page. The wrapper warning does not account for its 44px-high,
vertically centered child links; those give text a real inset. Existing lower
kickers remain a recorded later-scope design issue. No rule was disabled and no
clean whole-page detector result is claimed.

## Verification and evidence

- 20 Ubuntu Chromium cases: A/B × 320/375/768/1024/1440px × light/dark.
  All images load, pages do not overflow horizontally, one H1 remains, the hero
  contains no eyebrow, CTA anchors work, and keyboard focus is visible.
- Body/hero-secondary-text contrast was calculated from computed browser colors
  and passed 4.5:1 in both themes (5.21:1 in light). This does not certify text
  embedded in the unchanged app screenshots or the whole site's accessibility.
- Mobile B's gallery scrolls with the keyboard. Lower `#apps` font, color,
  padding, width, and grid computed values match the original at every viewport.
- Five additional comparison-page cases: 320/375/768/1440px in light and 375px in
  dark. Images and all local preview links load; the page does not overflow.
- Source hashes prove that every pre-existing production file is unchanged
  except the explicitly appended progress record in the root README. This
  includes the recently fetched Smart Home Status update `b9c8fca`, all policies,
  root HTML/CSS, icons/screenshots, and exact `app-ads.txt` bytes.
- Desktop/mobile/dark PNGs are actual browser captures from Ubuntu, captured at
  scroll position zero. Before screenshots, scripts and raw reports are retained
  privately under `~/.local/state/meonmesh-website/2026-11-02-hero/`.
- Limits: one browser engine, simulated mobile viewports, no physical-device or
  complete screen-reader audit. No user preference, visual selection, public
  deployment, conversion result, or App Store/AdMob status is inferred.

## Next step after choosing

B is the recommendation for showing three kinds of apps sooner; A is preferable
when showing more of each screen matters more than variety. Both are viable.
After Harry chooses, fetch `main` again and apply **only the chosen hero section
and its scoped CSS** to the current homepage. Do not copy the entire preview
HTML back over a newer homepage; these full-page context copies can become stale.
Production verification, commit/push and Pages checks belong to that next step.
