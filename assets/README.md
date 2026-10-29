# Website assets

The site is buildless HTML/CSS. Edit the page HTML directly; no installation,
build step, or runtime JavaScript is required.

## Provenance — 2026-10-29

- `apps/{sudoku-clear,gridcage-sudoku,glass-skin-routine,countdown-cabinet,local-upnp-things}.webp`:
  resized public Apple `artworkUrl512` images from US lookup responses for IDs
  6777523967, 6776738947, 6775093220, 6775299150, and 6777620569 respectively.
- `apps/wemo-controller.webp`: resized existing production app asset
  `MeOnMesh/apps/wemo-controller/WEMOController/play-store-assets/app-icon/generated/wemo-controller-play-icon.png`.
- All icons: 192 × 192 WebP. Original app assets were preserved.
- `favicon.svg`: original text-based MeOnMesh monogram.
- `social-card.png`: original 1200 × 630 composition of the above existing app
  icons and website text, using DejaVu fonts.
- Store links in the homepage: Apple public lookup responses and Google Play
  public listings, with each package's Open Graph title checked against its app.

Support and policy pages do not prove store availability, privacy compliance,
AdMob readiness, or current release status. Use the live app/store records for
those checks. Preserve root `app-ads.txt` and all existing policy URLs on deploy.

## App detail screenshots

`assets/screenshots/` contains 18 optimized WebP screenshots (three per featured
app), taken from the apps' existing public US Apple/Google Play listings on
2026-10-29. They are actual published product screenshots, not new mockups or
screenshots of owner data captured during this task. `screenshots/sources.json`
records each public source URL and output dimensions. Apple screenshots are
identified as iPhone captures in the page text; Wemo screenshots are Android.
The original store images are unchanged. Each website copy is at most 520px wide
and 1250px high, with lazy loading and intrinsic dimensions in the HTML.
