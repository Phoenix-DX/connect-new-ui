# UBTConnect demo (mock data)

A static build of the UBTConnect React app with **fictional mock data**. Nothing is sent to a server: every API call
is answered inside the page. It installs as an app (PWA) and, after one online visit, opens offline.

This is a review build, not production: sign-in is mocked and there is no backend.

## Run it on your computer

You need either Node.js 18+ or Python 3.8+. In this folder:

```sh
node serve.mjs          # or: python3 serve.py
```

Then open <http://localhost:8080/UBTConnect/>. Another port: `node serve.mjs 9000` (or `python3 serve.py 9000`).

Use `localhost`, not `127.0.0.1` or your network address: the browser allows service workers and installing only on
`localhost` or HTTPS.

## Sign-in and PIN

The demo starts signed in as a fictional user. When the app asks for the PIN (after a few minutes without activity, or
with `?mocksession=locked`), the PIN is **0223**. To see the sign-in flow from the start, open
`/UBTConnect/Login?mocksession=out`.

## Install it as an app

- **Chrome / Edge (desktop):** the install icon at the right of the address bar, or menu > "Install Connect 2.0".
- **Android (Chrome):** menu > "Install app" / "Add to Home screen". Needs an HTTPS URL (see "Host it").
- **iPhone / iPad (Safari):** Share > "Add to Home Screen". Needs an HTTPS URL. iOS shows no install prompt by itself.

Phones cannot use `http://<your computer's IP>:8080`: that address is not secure, so there is no offline mode and no
install. Put the folder on an HTTPS host instead.

## Offline

Open the app once while online and wait a few seconds: every file of the demo, mock data included, is stored by the
service worker. Afterwards the app (installed or in a tab) opens and works offline with the same mock data.

## Mock data switches

Add to any app URL (remembered for the browser tab):

- `?mock=empty`: lists come back empty; `?mock=error`: calls fail; `?mock=loading`: calls never answer;
  `?mock=real`: back to normal.
- `?latency=<ms>`: answer delay (default 600).

## Host it (any static HTTPS host)

Upload the **contents** of this folder to the **root of a domain or subdomain** (for example
`https://ubtconnect-demo.example.org/`). A sub-path such as `https://example.org/demo/` does not work: the app, its
service worker and its manifest use absolute paths (`/UBTConnect/...`, `/assets/...`, `/sw.js`).

The host needs three rules. They are ready for Netlify and Cloudflare Pages (`_redirects`, `_headers`); GitHub Pages
works through `404.html` and the pre-built feed pages. Elsewhere, set them by hand:

1. **SPA fallback:** a path that is not a file answers `/index.html` (status 200 preferred; a 404 status with
   `404.html` also works).
2. **Mock Feed CMS:** `/embed/feeds` and `/embed/feeds/item/<anything>` answer `/embed/feeds/index.html`.
3. **Manifest type:** `/UBTConnect/moduleservices/pwa/manifest` with `Content-Type: application/manifest+json`.

Optional: `Cache-Control: no-cache` on `/sw.js` and `/index.html`, and long caching on `/assets/*` (file names are
hashed).

## Updates and clean-up

A new demo version is picked up in the background and used from the next start: close every window and tab of the
demo, then open it again. To remove everything: uninstall the app, or in the browser's site settings clear the data of
the site (service worker, caches, storage).
