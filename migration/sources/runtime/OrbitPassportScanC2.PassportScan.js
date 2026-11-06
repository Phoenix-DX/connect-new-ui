/*!
 * Orbit Passport Portal — host embed loader
 *
 * Drop this script into a host app (OutSystems, a native WebView wrapper, any page) to
 * embed the passport portal in an iframe without hand-rolling the postMessage plumbing.
 *
 *   <script src="https://<portal>/passport-embed.js"></script>
 *   <script>
 *     OrbitPassport.embed.configure({
 *       baseUrl: 'https://<portal>',
 *       tokenType: 'ubt-one',
 *       getIdToken: function () { return MyApp.getB2CIdToken(); },  // string | Promise<string>
 *       containerId: 'orbit-passport'
 *     }).then(function () {
 *       // preloaded and authenticated; open() is now instant
 *     });
 *
 *     // when the user taps "View Passport details"
 *     OrbitPassport.embed.open();
 *   </script>
 *
 * CAMERA: the host needs no OCR. Supply onRequestCamera and return the capture from it —
 * the portal extracts it, stores it, and shows a pre-filled review form:
 *
 *     onRequestCamera: function () { return MyApp.takePicture(); }  // base64 | Promise
 *
 * Returning a falsy value is read as the user cancelling. Hosts that would rather drive the
 * channel themselves can still answer with sendCameraImage(base64OrDataUrl); one that has
 * native OCR can send sendOcrResult() instead, and if both arrive the OCR result wins.
 *
 * Written as an ES5 IIFE deliberately — OutSystems reactive apps and older mobile
 * WebViews are in scope, and this has to load before any bundler.
 *
 * TOKEN: pass the Azure AD B2C id_token you already have, with tokenType: 'ubt-one'
 * (or an Orbit access token with 'orbit'). No exchange is involved.
 *
 * The B2C token MUST carry extension_ContactBaseID — it is the only link to an Orbit
 * member, and a token without it is rejected as unlinked.
 *
 * The portal will only accept messages from origins listed in its
 * NEXT_PUBLIC_ALLOWED_BRIDGE_ORIGINS (build time), and will only render inside origins
 * listed in ALLOWED_FRAME_ANCESTORS (runtime). Both must include the host origin or the
 * embed stays blank — that is deliberate, not a bug.
 */
(function () {
  'use strict';

  var NS = window.OrbitPassport || {};

  var config = {
    baseUrl: null,
    idToken: null,
    getIdToken: null,
    tokenType: 'orbit',
    memberId: null,
    loginMemberId: null,
    memberAssertion: null,
    getMemberAssertion: null,
    b2cTenants: null,
    b2cClientIds: null,
    b2cPolicy: null,
    containerId: 'orbit-passport',
    width: '100%',
    height: '100%',
    path: '/passport',
    onReady: null,
    onSaved: null,
    onClose: null,
    onError: null,
    onAuthExpired: null,
    onRequestCamera: null,
    debug: false,
  };

  var iframe = null;
  var isReady = false;
  var pendingToken = null;
  var listening = false;
  var configureResolve = null;
  var configureReject = null;
  var configurePromise = null;

  // ── helpers ───────────────────────────────────────────────────────────────

  function merge(userConfig) {
    if (!userConfig) return;
    for (var key in userConfig) {
      if (Object.prototype.hasOwnProperty.call(userConfig, key) &&
          Object.prototype.hasOwnProperty.call(config, key)) {
        config[key] = userConfig[key];
      }
    }
  }

  function warn(message) {
    if (window.console && console.warn) console.warn('[OrbitPassport] ' + message);
  }

  function fail(message) {
    warn(message);
    if (typeof config.onError === 'function') config.onError(message);
  }

  /** Origin of the portal, used as the postMessage target. Never '*'. */
  function portalOrigin() {
    if (!config.baseUrl) return null;
    try {
      return new URL(config.baseUrl, window.location.href).origin;
    } catch (e) {
      return null;
    }
  }

  /**
   * Builds a capture message, tolerating a data: URL where raw base64 is expected and
   * recovering the mime type from it when the caller did not pass one.
   */
  function imageMessage(type, base64Image, mimeType) {
    var raw = String(base64Image || '');
    var match = /^data:([^;,]+)?(?:;[^,]*)?,(.*)$/i.exec(raw);
    if (match) {
      raw = match[2];
      mimeType = mimeType || match[1];
    }
    return { type: type, base64Image: raw, mimeType: mimeType || 'image/jpeg' };
  }

  /** Resolves the current token from either config.idToken or config.getIdToken(). */
  function resolveToken() {
    if (typeof config.getIdToken === 'function') {
      try {
        return Promise.resolve(config.getIdToken());
      } catch (e) {
        return Promise.resolve(null);
      }
    }
    return Promise.resolve(config.idToken);
  }

  /** Returns whether the message actually reached the portal. */
  function post(message) {
    var target = portalOrigin();
    if (!iframe || !iframe.contentWindow || !target) {
      if (message && message.type === 'auth:token') pendingToken = message.token;
      return false;
    }
    iframe.contentWindow.postMessage(message, target);
    return true;
  }

  /** Token and type, plus the optional target member and B2C authority. */
  function authMessage(type, token) {
    var message = { type: type, token: token, tokenType: config.tokenType };

    // A TARGET, not an identity: the API resolves the caller from the token itself and
    // returns 403 unless the target is in their household, so this cannot widen access.
    if (config.memberId !== null && config.memberId !== undefined) {
      message.memberId = config.memberId;
    }

    if (config.loginMemberId !== null && config.loginMemberId !== undefined) {
      message.loginMemberId = config.loginMemberId;
    }

    var assertion = config.memberAssertion;
    if (typeof config.getMemberAssertion === 'function') {
      try {
        assertion = config.getMemberAssertion();
      } catch (e) {
        assertion = null;
      }
    }
    if (typeof assertion === 'string' && assertion) {
      message.memberAssertion = assertion;
    }

    // Optional B2C authority, same names Connect 2's embed uses, so a host configures both
    // portals identically and a new tenant needs no change on the Orbit side. The API only
    // honours these where it is configured to; elsewhere they are ignored.
    if (config.b2cTenants) message.b2cTenants = config.b2cTenants;
    if (config.b2cClientIds) message.b2cClientIds = config.b2cClientIds;
    if (config.b2cPolicy) message.b2cPolicy = config.b2cPolicy;

    return message;
  }

  function sendToken(token) {
    if (!token) {
      fail('No token available to send. Provide idToken or getIdToken in configure().');
      return;
    }
    if (!isReady) {
      pendingToken = token;
      return;
    }
    post(authMessage('auth:token', token));
  }

  // ── iframe lifecycle ──────────────────────────────────────────────────────

  function buildUrl() {
    var base = String(config.baseUrl).replace(/\/+$/, '');
    return base + config.path;
  }

  function addPreconnect() {
    var origin = portalOrigin();
    if (!origin) return;
    if (document.querySelector('link[rel="preconnect"][href="' + origin + '"]')) return;
    var link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = origin;
    document.head.appendChild(link);
  }

  function createIframe(hidden) {
    if (iframe) return iframe;

    iframe = document.createElement('iframe');
    iframe.id = 'orbit-passport-iframe';
    iframe.src = buildUrl();
    iframe.title = 'Passport details';
    iframe.setAttribute('loading', 'eager');
    iframe.setAttribute('allow', '');
    iframe.style.border = 'none';
    iframe.style.width = config.width;
    iframe.style.height = config.height;

    // Preloading has to happen INSIDE the container, hidden in place. Re-inserting an
    // iframe under a different parent makes the browser reload its document, so parking it
    // on document.body and moving it later threw away the very preload this exists to
    // provide — a second full load, and the first load's API calls aborted mid-flight.
    var container = document.getElementById(config.containerId);
    if (!container) {
      if (!hidden) {
        fail('Container "' + config.containerId + '" not found');
        iframe = null;
        return null;
      }
      // Preloading before the container is rendered: park it on body and accept that
      // reveal() will have to move (and therefore reload) it.
      iframe.style.position = 'absolute';
      iframe.style.left = '-9999px';
      iframe.style.width = '1px';
      iframe.style.height = '1px';
      document.body.appendChild(iframe);
      return iframe;
    }

    if (hidden) hide(iframe);
    else container.innerHTML = '';
    container.appendChild(iframe);

    return iframe;
  }

  /** Collapse in place — no reparenting, so the document keeps loading undisturbed. */
  function hide(el) {
    el.style.position = 'absolute';
    el.style.width = '1px';
    el.style.height = '1px';
    el.style.opacity = '0';
    el.style.pointerEvents = 'none';
  }

  /** Show a preloaded iframe. Style-only when it already sits in its container. */
  function reveal() {
    var container = document.getElementById(config.containerId);
    if (!container) {
      fail('Container "' + config.containerId + '" not found');
      return;
    }

    iframe.style.position = '';
    iframe.style.left = '';
    iframe.style.opacity = '';
    iframe.style.pointerEvents = '';
    iframe.style.width = config.width;
    iframe.style.height = config.height;

    // Only reached when the container did not exist at preload time; this reloads.
    if (iframe.parentNode !== container) {
      container.innerHTML = '';
      container.appendChild(iframe);
    }
  }

  // ── message handling ──────────────────────────────────────────────────────

  function onMessage(event) {
    var origin = portalOrigin();
    if (!origin || event.origin !== origin) return; // ignore anything not from the portal
    var data = event.data;
    if (!data || !data.type) return;
    if (config.debug) trace('portal → host  ' + data.type);

    switch (data.type) {
      case 'webview:ready':
        isReady = true;
        if (pendingToken) {
          post(authMessage('auth:token', pendingToken));
          pendingToken = null;
        } else {
          resolveToken().then(sendToken);
        }
        if (typeof config.onReady === 'function') config.onReady();
        if (configureResolve) {
          configureResolve();
          configureResolve = null;
          configureReject = null;
        }
        break;

      case 'auth:expired':
        if (typeof config.onAuthExpired === 'function') config.onAuthExpired();
        break;

      // The portal's token expired mid-session and it cannot renew on its own.
      case 'auth:requestRefresh':
        resolveToken().then(function (token) {
          if (token) {
            post(authMessage('auth:refresh', token));
          } else {
            post({ type: 'auth:expired', reason: 'host could not supply a token' });
            if (typeof config.onAuthExpired === 'function') config.onAuthExpired();
          }
        });
        break;

      case 'passport:saved':
        if (typeof config.onSaved === 'function') config.onSaved(data.passportId);
        break;

      case 'webview:close':
        if (typeof config.onClose === 'function') config.onClose();
        break;

      case 'passport:error':
        fail(data.error || 'Passport portal reported an error');
        break;

      case 'passport:requestCamera':
        if (typeof config.onRequestCamera === 'function') {
          deliverCapture();
        } else {
          warn(
            'passport:requestCamera received but this host provides no capture. ' +
            'Supply onRequestCamera, or reply with sendCameraImage(base64, mime) — the ' +
            'portal does the OCR itself — or let the user fall back to Upload or manual entry.'
          );
        }
        break;
    }
  }

  /**
   * Keys a capture API might hand the image back under. OutSystems' camera plugin returns
   * ImageBase64, Cordova returns a bare string, others use base64/image/data — returning the
   * plugin's whole result object is the natural thing to write, so accept the object as well
   * as the string rather than making the host unwrap it correctly.
   */
  var IMAGE_KEYS = ['base64Image', 'ImageBase64', 'base64', 'Base64', 'image', 'Image',
                    'data', 'Data', 'dataUrl', 'uri', 'URI'];
  var MIME_KEYS = ['mimeType', 'MimeType', 'mediaType', 'type', 'Type'];

  var DATA_URL_RE = /^data:image\//i;
  var BASE64_RE = /^[A-Za-z0-9+/=\r\n]+$/;
  /** Shorter than this and it is a status string, not a passport photo. */
  var MIN_IMAGE_CHARS = 100;

  function looksLikeImage(v) {
    return typeof v === 'string' && v.length >= MIN_IMAGE_CHARS &&
      (DATA_URL_RE.test(v) || BASE64_RE.test(v));
  }

  /** First usable string among the given keys, or null. */
  function pickString(obj, keys) {
    if (!obj || typeof obj !== 'object') return null;
    for (var i = 0; i < keys.length; i++) {
      var v = obj[keys[i]];
      if (typeof v === 'string' && v) return v;
    }
    return null;
  }

  /**
   * Finds the image in whatever a capture API handed back, WITHOUT needing to know its
   * shape. Named keys win; failing that, the longest base64/data-URL-looking string
   * anywhere in the object (two levels deep) is taken.
   *
   * Deliberately shape-agnostic: every wrapper names this field differently, and a host
   * whose plugin succeeded should never be told the capture was cancelled because we did
   * not recognise its key.
   */
  function findImage(value, depth) {
    var named = pickString(value, IMAGE_KEYS);
    if (named) return named;
    if (!value || typeof value !== 'object' || depth >= 2) return null;

    var best = null;
    for (var k in value) {
      if (!Object.prototype.hasOwnProperty.call(value, k)) continue;
      var v = value[k];
      var found = looksLikeImage(v) ? v : findImage(v, depth + 1);
      if (found && (!best || found.length > best.length)) best = found;
    }
    return best;
  }

  /** Human-readable shape of an unusable return value, for the console. */
  function describeValue(value) {
    if (value === null) return 'null';
    if (typeof value !== 'object') return 'a ' + typeof value + ' (' + String(value).slice(0, 40) + ')';
    var parts = [];
    for (var k in value) {
      if (!Object.prototype.hasOwnProperty.call(value, k)) continue;
      var v = value[k];
      parts.push(k + ': ' + (typeof v === 'string' ? 'string(' + v.length + ')' : typeof v));
    }
    return '{ ' + parts.join(', ') + ' }';
  }

  /**
   * Runs the host's onRequestCamera and answers the portal with whatever it produced.
   *
   * ALWAYS answers: a request that goes unanswered leaves the portal sitting on the scan
   * overlay forever. The callback may return raw base64, a data: URL, or the capture API's
   * own result object, or a promise of any of those.
   *
   * Distinguishes NOTHING (the user cancelled) from SOMETHING UNRECOGNISED (the host
   * returned a value with no image in it). Reporting the second as "Capture cancelled" is a
   * lie that costs an integrator hours — their plugin logged success and the portal blamed
   * the user — so it names the keys it actually received instead.
   */
  function deliverCapture() {
    var pending;
    try {
      pending = Promise.resolve(config.onRequestCamera());
    } catch (e) {
      pending = Promise.reject(e);
    }

    pending.then(
      function (result) {
        // A returned string is explicit intent — take it whatever it looks like. Anything
        // else gets searched, so an unfamiliar plugin shape still works.
        var image = typeof result === 'string' && result ? result : findImage(result, 0);

        if (!image) {
          // undefined = "I returned nothing". A wrapper that fires the plugin and delivers the
          // image by its own route (or forgets to return it) lands here, and answering for it
          // would cancel a capture that is still on its way. Wait and say so, rather than
          // reporting a cancel the user never made. sendCameraImage() still ends the wait.
          if (result === undefined) {
            warn(
              'onRequestCamera resolved with undefined — nothing was returned. If your capture ' +
              'delivers the image separately, call OrbitPassport.embed.sendCameraImage(base64) ' +
              'when it arrives (or sendOcrError(msg) to abandon it); the portal is still ' +
              'waiting on the scan overlay. If you meant to return the image, return the ' +
              'capture result instead of calling it and discarding the value.'
            );
            return;
          }

          // An EXPLICIT null/false/'' is the host saying "no capture" — a real cancel.
          if (result === null || result === '' || result === false) {
            post({ type: 'ocr:error', error: 'Capture cancelled' });
            return;
          }
          warn(
            'onRequestCamera resolved with ' + describeValue(result) + ', and no base64 or ' +
            'data: URL could be found anywhere in it. Return the image itself, or an object ' +
            'carrying it (any key name works as long as the value is base64).'
          );
          post({
            type: 'ocr:error',
            error: 'The camera returned a value the portal could not read as an image.',
          });
          return;
        }

        post(imageMessage('camera:image', image, pickString(result, MIME_KEYS)));
      },
      function (e) {
        post({
          type: 'ocr:error',
          error: (e && e.message) || 'Could not capture passport image',
        });
      }
    );
  }

  function startListening() {
    if (listening) return;
    window.addEventListener('message', onMessage);
    listening = true;
  }

  // ── public API ────────────────────────────────────────────────────────────

  // ── tracing ───────────────────────────────────────────────────────────────
  // Opt-in with configure({ debug: true }) or window.ORBIT_PASSPORT_DEBUG = true before the
  // script loads. Prints every call the HOST makes and every message the portal sends back,
  // so an integrator's console alone shows which side did what, in what order. Off by
  // default — this is a diagnostic, not normal operation.

  var instrumented = false;

  function trace(message) {
    if (window.console && console.log) console.log('[OrbitPassport] ' + message);
  }

  /** Short, safe rendering of a call argument — never a token or an image. */
  function summarize(v) {
    if (v === null) return 'null';
    if (v === undefined) return 'undefined';
    if (typeof v === 'function') return 'fn';
    if (typeof v === 'string') {
      return v.length > 40 ? 'string(' + v.length + ' chars)' : JSON.stringify(v);
    }
    if (typeof v !== 'object') return String(v);
    var out = [];
    for (var k in v) {
      if (!Object.prototype.hasOwnProperty.call(v, k)) continue;
      var val = v[k];
      // tokenType/b2c* are diagnostic, not secret — only the credential itself is hidden.
      if (/^(id_?token|accessToken|token)$/i.test(k) || /base64|image|mrz/i.test(k)) {
        out.push(k + ': <redacted' + (typeof val === 'string' ? ' ' + val.length + 'c' : '') + '>');
      } else {
        out.push(k + ': ' + summarize(val));
      }
    }
    return '{ ' + out.join(', ') + ' }';
  }

  /** Wraps every public method so the call and its result are logged. */
  function instrument(api) {
    if (instrumented) return;
    instrumented = true;
    for (var name in api) {
      if (!Object.prototype.hasOwnProperty.call(api, name)) continue;
      if (typeof api[name] !== 'function') continue;
      api[name] = (function (label, original) {
        return function () {
          var args = Array.prototype.slice.call(arguments).map(summarize).join(', ');
          trace('host called ' + label + '(' + args + ')');
          var result = original.apply(this, arguments);
          if (typeof result === 'boolean') trace('  ' + label + ' returned ' + result);
          return result;
        };
      })(name, api[name]);
    }
  }

  var embed = {
    /**
     * Set up and preload. Call as early as possible — it creates a hidden iframe that
     * loads and authenticates in the background, so open() has nothing left to do.
     * Resolves once the portal has announced itself and been given a token.
     */
    configure: function (options) {
      merge(options);

      if (config.debug || window.ORBIT_PASSPORT_DEBUG) {
        config.debug = true;
        // configure() itself is not wrapped yet, so record it explicitly.
        trace('host called configure(' + summarize(options) + ')');
        instrument(embed);
      }

      if (!config.baseUrl) {
        return Promise.reject(new Error('[OrbitPassport] baseUrl is required'));
      }
      if (!config.idToken && typeof config.getIdToken !== 'function') {
        warn('Neither idToken nor getIdToken supplied — the portal will sit on a spinner.');
      }

      addPreconnect();
      startListening();

      if (configurePromise) return configurePromise;

      configurePromise = new Promise(function (resolve, reject) {
        configureResolve = resolve;
        configureReject = reject;
      });

      createIframe(true);
      return configurePromise;
    },

    /** Show the portal. Reveals the preloaded frame, or creates one if configure() was skipped. */
    /**
     * Reveal the portal. `options` accepts any configure() key, so the member to show is
     * named here: `open({ memberId: 4242 })`, or `{ memberId: null }` for the signed-in
     * user. Omitting it keeps whatever was set last.
     */
    open: function (options) {
      merge(options);
      if (!config.baseUrl) {
        fail('baseUrl is required');
        return;
      }
      startListening();

      if (iframe) {
        reveal();
        // Already handshaken, so the portal is holding the PREVIOUS target. Re-send the
        // token to carry the current one; it ignores an unchanged value, so this is only a
        // switch when there is something to switch to.
        if (isReady) {
          resolveToken().then(function (token) {
            if (token) post(authMessage('auth:refresh', token));
          });
        }
      } else {
        createIframe(false);
      }
    },

    /** Remove the iframe and reset. The next open() reloads from scratch. */
    close: function () {
      if (iframe && iframe.parentNode) iframe.parentNode.removeChild(iframe);
      iframe = null;
      isReady = false;
      pendingToken = null;

      if (configureReject) {
        configureReject(new Error('[OrbitPassport] configure() abandoned: close() was called before the portal finished loading'));
      }
      configurePromise = null;
      configureResolve = null;
      configureReject = null;
    },

    /** Push a new token (e.g. after the host refreshed its session). */
    setIdToken: function (token) {
      config.idToken = token;
      if (isReady) post(authMessage('auth:refresh', token));
      else pendingToken = token;
    },

    /** Tell the portal the session is dead so it stops waiting. */
    expireSession: function (reason) {
      post({ type: 'auth:expired', reason: reason || 'host session ended' });
    },

    /**
     * Deliver a native capture. The portal extracts it with Document Intelligence and stores
     * it, so a host needs no OCR of its own — this is the whole camera contract.
     *
     * A data: URL is accepted as well as raw base64, since that is what a capture API
     * usually hands back.
     */
    sendCameraImage: function (base64Image, mimeType) {
      post(imageMessage('camera:image', base64Image, mimeType));
    },

    /** Same, for an image the user picked rather than captured. */
    sendGalleryImage: function (base64Image, mimeType) {
      post(imageMessage('gallery:image', base64Image, mimeType));
    },

    /** Deliver OCR results captured by a native host that has its own OCR. */
    sendOcrResult: function (data, mrz, confidence) {
      post({ type: 'ocr:result', data: data || {}, mrz: mrz || '', confidence: confidence || 0 });
    },

    /** Tell the portal that capture or extraction failed. */
    sendOcrError: function (error) {
      post({ type: 'ocr:error', error: error || 'Could not extract passport information' });
    },

    /** Host back button — steps the portal back one screen. */
    /**
     * Host back button. Returns TRUE when the portal took the press and will step itself
     * back, FALSE when there was no open portal to take it — configure() not called yet,
     * already closed, or still loading.
     *
     * Check the return value. A dropped press used to be silent, which reads to a user as
     * "back does nothing": the host suppressed its own navigation on the documented advice
     * and the portal never received anything to act on.
     *
     *     if (!OrbitPassport.embed.back()) { myApp.navigateBack(); }
     */
    back: function () {
      if (!iframe || !isReady) {
        warn(
          'back() called with no portal ready to receive it (configured=' + !!iframe +
          ', ready=' + isReady + '). Nothing will happen inside the portal — navigate ' +
          'yourself in this case; back() returns false so you can branch on it.'
        );
        return false;
      }
      return post({ type: 'navigation:back' });
    },

    /**
     * True once configure() has run and has not been closed or destroyed.
     *
     * An OutSystems Reactive screen re-runs OnReady on every entry, so the host needs to
     * detect an existing embed rather than configure a second one over it. Mirrors
     * Connect2Feed.embed.isConfigured(), so the same guard works for both embeds:
     *
     *   if (OrbitPassport.embed.isConfigured()) OrbitPassport.embed.destroy();
     *   OrbitPassport.embed.configure({ ... });
     */
    isConfigured: function () {
      return Boolean(configurePromise);
    },

    /** True once the iframe has loaded and completed the auth handshake. */
    isReady: function () {
      return isReady;
    },

    destroy: function () {
      embed.close();
      if (listening) {
        window.removeEventListener('message', onMessage);
        listening = false;
      }
    },
  };

  NS.embed = embed;
  NS.version = '1.0.0';
  window.OrbitPassport = NS;
})();
