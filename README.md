# jolie1204.github.io

Root GitHub Pages site for app privacy policies and app-ads.txt verification.

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
