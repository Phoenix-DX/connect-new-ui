'use strict';
/**
 * Origin normalization for the self-parity comparison (`parity_check.cjs --self-ref`).
 * The self reference stores absolute URLs with the origin of the server that recorded it (for example
 * http://localhost:5175). A run on another port must not differ because of that, so both sides are
 * normalized: `http(s)://localhost:<port>` and `http(s)://127.0.0.1:<port>` become `http://localhost:*`.
 */
const ORIGIN = /https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?/g;
const NORMAL = 'http://localhost:*';

/** Returns a deep copy of a JSON value with every local origin in its strings replaced. */
function normalizeOrigins(value) {
  if (typeof value === 'string') return value.replace(ORIGIN, NORMAL);
  if (Array.isArray(value)) return value.map(normalizeOrigins);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, normalizeOrigins(v)]));
  }
  return value;
}

module.exports = { normalizeOrigins, NORMAL };
