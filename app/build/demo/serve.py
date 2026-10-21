#!/usr/bin/env python3
"""Zero-dependency local server for the UBTConnect demo (Python 3.8+): `python3 serve.py [port]`, then open
http://localhost:<port>/UBTConnect/ . localhost is a secure context, so the service worker and "Install app" work.
Serves files from this folder; app routes fall back to index.html; the mock Feed CMS item pages to their page."""
import http.server
import os
import re
import sys
import urllib.parse

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else int(os.environ.get("PORT", "8080"))
MANIFEST = "/UBTConnect/moduleservices/pwa/manifest"
FEED = re.compile(r"^/embed/feeds(/item/[^/]+)?/?$")


class DemoHandler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        ".js": "text/javascript",
        ".mjs": "text/javascript",
        ".css": "text/css",
        ".svg": "image/svg+xml",
        ".woff": "font/woff",
        ".woff2": "font/woff2",
        ".ttf": "font/ttf",
        ".json": "application/json",
        "": "application/octet-stream",
    }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def _target(self, path):
        """The URL path that answers `path`: the file itself, the mock Feed CMS page, or the SPA entry."""
        local = os.path.normpath(os.path.join(ROOT, path.lstrip("/")))
        if not local.startswith(ROOT):
            return None
        if os.path.isfile(local) or os.path.isfile(os.path.join(local, "index.html")):
            return path
        if FEED.match(path):
            return "/embed/feeds/index.html"
        return None if "." in path.rsplit("/", 1)[-1] else "/index.html"

    def send_head(self):
        url = urllib.parse.urlsplit(self.path)
        path = urllib.parse.unquote(url.path)
        target = self._target(path)
        if target is None:
            self.send_error(404, "Not found")
            return None
        if os.path.isdir(os.path.join(ROOT, target.lstrip("/"))) and not target.endswith("/"):
            target += "/index.html"
        self.path = target
        return super().send_head()

    def guess_type(self, path):
        if path.replace(os.sep, "/").endswith(MANIFEST):
            return "application/manifest+json"
        return super().guess_type(path)

    def end_headers(self):
        no_cache = self.path.endswith((".html", "/sw.js")) or self.path == MANIFEST
        self.send_header("Cache-Control", "no-cache" if no_cache else "public, max-age=3600")
        super().end_headers()


if __name__ == "__main__":
    server = http.server.ThreadingHTTPServer(("localhost", PORT), DemoHandler)
    print(f"UBTConnect demo: http://localhost:{PORT}/UBTConnect/  (Ctrl+C to stop)")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
