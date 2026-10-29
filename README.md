# jolie1204.github.io

MeOnMesh’s GitHub Pages developer website: app discovery, verified downloads,
app-specific support, privacy policies, and the shared app-ads.txt seller file.

Published files:

- `https://jolie1204.github.io/app-ads.txt`
- `https://jolie1204.github.io/wemo-controller-privacy/`
- `https://jolie1204.github.io/glass-skin-routine/`
- `https://jolie1204.github.io/glass-skin-routine-privacy/`
- `https://jolie1204.github.io/countdown-cabinet-privacy/`
- `https://jolie1204.github.io/gridcage-sudoku/`
- `https://jolie1204.github.io/gridcage-sudoku-privacy/`
- `https://jolie1204.github.io/sudoku-clear/`
- `https://jolie1204.github.io/sudoku-clear-privacy/`

## Local UPnP Things policy update — October 19, 2026

Updated only `local-upnp-things-privacy/index.html` to describe optional Apple
Home/HomeKit/Matter access, protected on-device checklists, explicit local tools,
Home-data separation from consent-gated non-personalized AdMob/UMP, SDK data use,
privacy choices, deletion and support contact. App branding remains Local UPnP
Things. No Android policy, other app page or app-ads.txt change is included.

Validation: HTML/link/required-content checks and independent factual review;
public HTTP/content verification is recorded after the Pages deployment. This
policy update is not an App Store submission or a claim of ad-serving approval.

## Smart Home Status naming update — October 19, 2026

Harry selected Smart Home Status as the iOS app's public release name. Updated
only its support/policy branding and its root app-directory label. Existing URL
paths and app-ads.txt are preserved. The support page now describes optional
Apple Home checks, compatible HAP/Matter via HomeKit, reviewed power changes on
iOS 18+, local tools and the existing public support email. The policy explains
the former Local UPnP Things name without changing the app's installation identity.

Checks: static HTML structure/link validation and source-scope review. Publication
and canonical HTTP verification are recorded in the app repository's README.
This does not reserve an App Store name, change store/account records or claim
trademark clearance, store approval or live ad serving.

## Smart Home Status navigation and explicit device controls — October 19, 2026

Updated only the iOS policy: one shared footer above four bottom tabs, UMP checks
at app launch independently of Home/LAN permission, and ephemeral explicit On/Off
with fresh preflight/readback. Removed the obsolete local-tools-only banner
placement and home-display-name setting claims. No Home/device advertising
context is introduced. Existing URLs, other products and app-ads.txt are unchanged.

Checks: parsed HTML, verified required scope/control/privacy statements and
checked whitespace. Canonical HTTP verification is recorded in the iOS app log
after Pages deployment. This policy change does not submit or release the app.

Follow-up: ad privacy choices/retry controls live in Settings → Advertising so
the footer has exactly one banner row. Verified the HTML and required settings
route; no URL, ad configuration or data-processing claim changed.

## Website improvement — October 29, 2026 (PDT)

### Milestone 1: homepage and app discovery

Replaced the text-only directory with an introductory hero, six app cards,
existing app icons, verified store links, and a common contact section. Added
responsive light/dark styling, a keyboard skip link and visible focus states,
app-specific accessible link names, canonical/description/Open Graph metadata,
a favicon, and a locally hosted social preview. No analytics or third-party
runtime scripts were added. Existing support/privacy routes and the exact shared
`app-ads.txt` are preserved. Wemo's privacy route is a separate existing GitHub
Pages project; it returned HTTP 200 on October 29.

Sources: public US Apple lookup confirmed IDs 6777523967 (Sudoku Clear),
6776738947 (GridCage), 6775093220 (Glass Skin Routine), 6775299150 (Countdown),
and 6777620569 (Smart Home Status), including their icons and public store URLs.
Google Play public Open Graph titles also confirmed Sudoku Clear
`com.meonmesh.sudoku`, GridCage `com.meonmesh.gridcage`, Glass Skin Routine
`com.glassskinroutine`, and Countdown `com.appfoundry.countdown_cabinet`;
these Android download links are included. Wemo's existing Google Play package `com.meonmesh.lot.wemocontroller` was
confirmed by the public listing's Open Graph title/description. Its icon is a
resized copy of the existing app's production Play icon. Icons are optimized
192px WebP copies; the source app projects were not edited. Glass Skin Routine's
homepage copy reflects the current public guide/Shelf scope, replacing obsolete
routine/streak claims on the old support page in the next milestone.

Validation so far: parsed the homepage; checked local navigation/asset targets,
its single H1, unchanged seller-file bytes, and `git diff --check`. Claude completed a read-only accessibility/content review; its small-link,
header wrapping, theme-color, and navigation-arrow findings were addressed. Mac
Codex used the computer-use skill with native node_repl/@oai/sky in a new Chrome
tab: all six cards render in the desktop grid and stack at 400px; the collection
anchor and local app pages work. The local preview cannot serve Wemo’s separate
privacy project, so its link uses the canonical absolute URL (public HTTP 200).
Full visual review results and live deployment checks follow below. Subsequent work: refresh the six linked app pages with actual
public screenshots, current descriptions, downloads, and consistent support;
then verify the public deployment and all preserved policy routes.

Milestone 1 publication confirmed: GitHub Pages reported `built` for source
`97492ed2cdc44ab5e6d50bb219433c3e0f4e1ab7` at 2026-10-29 09:59:23 PDT
(16:59:23 UTC), and an independent canonical HTTPS GET returned the new
collection content. Commit `97492ed` was pushed to `origin/main` successfully.
The Mac visual review covered desktop and 375×630 responsive layout; it did not
open external stores or email. Follow-up fixes enlarged secondary links,
categories and footer text. Browser screenshots are kept privately, outside Git.

### Milestone 2: app detail pages and consistent support

Refreshed the existing six featured app pages with shared styling, real public
store screenshots (three per app), download links, a return-to-collection link,
and clearly labeled support/privacy information. No prototype was promoted to a
released app; ReadyZoom and Fairway Caddie AI pages remain unchanged. The site
continues in its existing English language. No new contact service, account,
analytics, form, or application/store release was introduced.

Sudoku and GridCage descriptions now reflect public Levels/Free play behavior.
Glass Skin Routine now describes the current guide/product-type/layer-order and
local Shelf features, with its cosmetic-education limits. Countdown describes
current widgets, reminders and local backup. Smart Home’s compatibility,
HomeKit/Matter, iOS-version and snapshot-only limits, and Wemo’s existing FAQ,
reset warning, compatibility, support channel and affiliation disclaimer were
preserved. Wemo’s existing search-oriented page title was retained.

Screenshot source URLs/dimensions are recorded in
`assets/screenshots/sources.json`. Apple’s default small lookup thumbnails were
replaced with larger versions from the same public CDN originals after Claude’s
read-only review caught softness and the inaccurate enlargement hint. Final
Apple screenshots are 520×1130; Wemo screenshots are 520×925. All are served
locally, lazily loaded and have intrinsic dimensions and descriptive alt text.
The source app repositories and original store assets were not changed.

Verification before publication: seven changed HTML pages and 174 references
parsed/checked; local files and fragment targets resolve; every page has one H1;
all images have alt/width/height; WebP files decode. All existing policy files
and `app-ads.txt` are byte-identical to the fetched baseline. Claude independently
reviewed the six detail pages and confirmed preservation of Smart Home caveats
and Wemo FAQ/support. Store identities were checked against the public listings,
not inferred from local package names alone. Stylesheet URLs include a version
query to avoid stale shared styles after this deployment.

The first Mac detail-page attempt saw missing lazy images and then Sky
`cgWindowNotFound` errors. The short-lived SSH tunnel was subsequently confirmed
closed; a separate persistent tunnel restored remote image HTTP 200. A bounded
follow-up visual check and final public HTTP checks are recorded below. No full
screen-reader audit, physical-phone run or full browser matrix is claimed.

Final pre-publication verification moved to Ubuntu at Harry’s explicit request;
no further Mac work was performed. Native Mac Sky remained unavailable, so the
follow-up did not establish image rendering. Ubuntu Playwright/Chromium then
passed **30 browser checks**: all seven changed pages at 320, 375, 768 and 1440px,
plus homepage/Glass Skin at 375px in dark mode. All images completed with positive
natural dimensions, no page-level horizontal overflow or JavaScript page errors
occurred, and the dark backgrounds matched the intended theme. Actual desktop,
mobile, and dark screenshots were inspected; the screenshot galleries now render
correctly. Temporary QA dependencies and browser reports remain outside the Git
checkout. Static checks were repeated after the larger screenshot and stylesheet
changes and passed; `git diff --check` passed.

### Publication closeout — October 29, 2026, 10:08 PDT

- Website source: `03652353e59017498746eb64c5cac5545d5810d7` (detail-page milestone),
  preceded by homepage `97492ed2cdc44ab5e6d50bb219433c3e0f4e1ab7`.
  Both commits were confirmed pushed to `origin/main`; the existing Pages
  publishing configuration remains `main`, repository root, public HTTPS.
- GitHub Pages reported `built` for `0365235` at **10:07:41 PDT / 17:07:41 UTC**.
  The check made while it was still building correctly saw the prior site;
  that intermediate report is retained separately and is not the final status.
- At **10:08:09 PDT / 17:08:09 UTC**, independent HTTPS checks passed for
  **45 canonical public endpoints**: homepage, every existing app/support and
  privacy route, all app icons and screenshots, stylesheet, favicon, social
  preview, and `app-ads.txt`. All returned HTTP 200. All 44 files owned by this
  checkout matched the local published source byte-for-byte; Wemo’s separate
  privacy project returned 200 and was not edited.
- Four additional **Ubuntu Chromium public-site checks** passed: homepage and
  Glass Skin detail at 375/1440px. The final versioned stylesheet was present,
  every image loaded, and neither page overflowed horizontally. Together with
  the 30 local browser cases, this resolves the earlier preview image-loading
  uncertainty. Claude reviews and earlier Mac checks are described above;
  final verification and deployment closeout used Ubuntu only.
- Shared seller-file SHA-256 remains
  `1924020676c7f4cb241b2b80f247d8edbf09b1fd128d722d939a3388d9ef175a`.
  Existing privacy document contents and extra prototype/app routes are
  unchanged. This website work makes no app-release, privacy-compliance,
  AdMob-readiness, traffic, download, or revenue claim.
- Evidence and QA scripts are retained privately outside Git under
  `~/.local/state/meonmesh-website/2026-10-29/`, including public HTTP hashes,
  Ubuntu browser results/screenshots, public store source responses, and earlier
  preview evidence. Browser UI captures were not published. Temporary QA
  dependencies are outside the checkout; no unrelated workspace content or
  app repository was changed. No worktree or branch was removed.
- Requested homepage, detail-page, support consistency, metadata and responsive
  improvements are complete. Limits: no full screen-reader/physical-phone audit,
  additional browser-engine matrix, or new language localization was performed;
  email applications were not launched during QA. Later documentation-only
  commits do not change the exact website-source reference above.
