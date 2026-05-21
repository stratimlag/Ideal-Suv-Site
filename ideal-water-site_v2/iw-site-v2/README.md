# Ideal Water — Static Website

## Structure
```
ideal-water-site/
├── index.html         # Markup + security meta tags (CSP, X-CTO, Referrer, Permissions)
├── css/
│   └── styles.css     # All styles
├── js/
│   ├── ui.js          # Tabs (whitelisted), scroll reveal, scroll-to-top
│   ├── marquee.js     # Client-logos marquee (host-validated image URLs)
│   └── i18n.js        # RU/UZ translations + sanitized HTML injection
└── README.md
```

## Security measures
- **Content-Security-Policy** meta: scripts only from same origin, images from self/https, styles from self + Google Fonts, no framing, locked base-uri/form-action.
- **X-Content-Type-Options: nosniff**, strict **Referrer-Policy**, restrictive **Permissions-Policy** (geo/mic/camera disabled).
- All `target="_blank"` external links have `rel="noopener noreferrer"` (prevents tabnabbing + referer leak).
- i18n strings pass through a **whitelist sanitizer** before `innerHTML` — only `<em><strong><b><i><br><span>` allowed, all `on*=` and `javascript:` attributes stripped.
- Language switcher only accepts keys in the `i18n` object (no prototype pollution / arbitrary keys).
- Product tab switcher uses a hardcoded whitelist of category ids.
- Marquee image URLs are validated against the expected host.
- `localStorage` access wrapped in `try/catch` (already present).

## Run locally
Open `index.html` in a browser, or serve the folder:
```
python3 -m http.server 8000
```
Then visit http://localhost:8000

> Note: CSP via `<meta>` works but real HTTP headers (set by your web server / Nginx / Cloudflare) are stronger. For production, also set:
> `Strict-Transport-Security`, `X-Frame-Options: DENY`, and the same CSP as a real header.
