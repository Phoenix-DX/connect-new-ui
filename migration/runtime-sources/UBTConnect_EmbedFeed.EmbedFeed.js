(function() {
  'use strict';

  var Connect2Feed = window.Connect2Feed || {};
  var config = {
    baseUrl: null,
    theme: 'light',
    limit: 10,
    hideActions: false,
    height: '600px',
    width: '100%',
    containerId: 'connect2-feeds',
    onReady: null,
    onFeedsLoaded: null,
    onError: null,
    onFeedClick: null,
    onShare: null,
    onAddToCalendar: null,
    onComplete: null,
    onDownload: null,
    onFilterCleared: null,
    idToken: null,
    getIdToken: null,
    b2cTenants: null,
    b2cClientIds: null,
    b2cPolicy: null,
    customTheme: null,
    feedId: null
  };

  var iframe = null;
  var isReady = false;
  var pendingToken = null;
  var itemIframes = {};
  var itemHandlers = {};
  var preloadIframe = null;
  var configureResolve = null;
  var configurePromise = null;
  var configureTimeout = null;
  var hasEmittedComplete = false;

  function mergeConfig(userConfig) {
    if (!userConfig) return;
    for (var key in userConfig) {
      if (userConfig.hasOwnProperty(key) && config.hasOwnProperty(key)) {
        config[key] = userConfig[key];
      }
    }
  }

  function buildEmbedUrl() {
    var params = [];
    params.push('theme=' + encodeURIComponent(config.theme));
    params.push('limit=' + encodeURIComponent(config.limit.toString()));
    if (config.hideActions) {
      params.push('hideActions=true');
    }
    if (config.b2cTenants) {
      params.push('b2cTenants=' + encodeURIComponent(config.b2cTenants));
    }
    if (config.b2cClientIds) {
      params.push('b2cClientIds=' + encodeURIComponent(config.b2cClientIds));
    }
    if (config.b2cPolicy) {
      params.push('b2cPolicy=' + encodeURIComponent(config.b2cPolicy));
    }
    if (config.feedId) {
      params.push('feedId=' + encodeURIComponent(config.feedId));
    }
    return config.baseUrl + '/embed/feeds?' + params.join('&');
  }

  function addPreconnect() {
    if (!config.baseUrl) return;
    var existing = document.querySelector('link[rel="preconnect"][href="' + config.baseUrl + '"]');
    if (existing) return;
    var link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = config.baseUrl;
    document.head.appendChild(link);
  }

  function tokenIdentity(token) {
    if (!token || typeof token !== 'string') return null;
    var parts = token.split('.');
    if (parts.length < 2) return null;
    try {
      var base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
      while (base64.length % 4 !== 0) {
        base64 += '=';
      }
      if (typeof atob !== 'function') return null;
      var claims = JSON.parse(atob(base64));
      return claims.sub || claims.oid || (claims.emails && claims.emails[0]) || null;
    } catch (e) {
      return null;
    }
  }

  function markIdentity(el) {
    if (!el) return;
    var identity = tokenIdentity(config.idToken);
    if (identity) {
      el.setAttribute('data-c2-identity', identity);
    }
  }

  function createIframe() {
    var container = document.getElementById(config.containerId);
    if (!container) {
      console.error('Connect2Feed: Container element "' + config.containerId + '" not found');
      return null;
    }

    hasEmittedComplete = false;

    iframe = document.createElement('iframe');
    iframe.id = 'connect2-feeds-iframe';
    markIdentity(iframe);
    iframe.src = buildEmbedUrl();
    iframe.style.width = config.width;
    iframe.style.height = config.height;
    iframe.style.border = 'none';
    iframe.setAttribute('title', 'Connect2 News Feed');
    iframe.setAttribute('loading', 'eager');
    
    container.innerHTML = '';
    container.appendChild(iframe);
    
    return iframe;
  }

  function sendToken(token) {
    if (!iframe || !iframe.contentWindow) {
      pendingToken = token;
      return;
    }
    
    var message = {
      type: 'auth:token',
      token: token
    };
    if (config.b2cTenants) message.b2cTenants = config.b2cTenants;
    if (config.b2cClientIds) message.b2cClientIds = config.b2cClientIds;
    if (config.b2cPolicy) message.b2cPolicy = config.b2cPolicy;
    iframe.contentWindow.postMessage(message, config.baseUrl);
  }

  function refreshToken(token) {
    if (!iframe || !iframe.contentWindow) return;
    
    var message = {
      type: 'auth:refresh',
      token: token
    };
    if (config.b2cTenants) message.b2cTenants = config.b2cTenants;
    if (config.b2cClientIds) message.b2cClientIds = config.b2cClientIds;
    if (config.b2cPolicy) message.b2cPolicy = config.b2cPolicy;
    iframe.contentWindow.postMessage(message, config.baseUrl);
  }

  function setTheme(options) {
    if (!iframe || !iframe.contentWindow) return;
    var message = {
      type: 'theme:update'
    };
    if (options.mode) message.mode = options.mode;
    if (options.variables) message.variables = options.variables;
    iframe.contentWindow.postMessage(message, config.baseUrl);
  }

  function isItemWindow(win) {
    if (!win) return false;
    for (var id in itemIframes) {
      if (itemIframes.hasOwnProperty(id) && itemIframes[id] && itemIframes[id].contentWindow === win) {
        return true;
      }
    }
    return false;
  }

  function handleMessage(event) {
    if (event.origin !== config.baseUrl) return;
    if (isItemWindow(event.source)) return;

    var data = event.data || {};
    
    switch (data.type) {
      case 'embed:ready':
        isReady = true;
        
        var targetWindow = event.source;

        if (config.customTheme && targetWindow) {
          targetWindow.postMessage({
            type: 'theme:update',
            mode: config.customTheme.mode,
            variables: config.customTheme.variables
          }, config.baseUrl);
        }

        var buildAuthMessage = function(tkn) {
          var msg = {
            type: 'auth:token',
            token: tkn
          };
          if (config.b2cTenants) msg.b2cTenants = config.b2cTenants;
          if (config.b2cClientIds) msg.b2cClientIds = config.b2cClientIds;
          if (config.b2cPolicy) msg.b2cPolicy = config.b2cPolicy;
          return msg;
        };

        if (config.idToken && targetWindow) {
          targetWindow.postMessage(buildAuthMessage(config.idToken), config.baseUrl);
        } else if (pendingToken && targetWindow) {
          targetWindow.postMessage(buildAuthMessage(pendingToken), config.baseUrl);
          pendingToken = null;
        } else if (typeof config.getIdToken === 'function') {
          Promise.resolve(config.getIdToken()).then(function(token) {
            if (token && targetWindow) {
              targetWindow.postMessage(buildAuthMessage(token), config.baseUrl);
            }
          }).catch(function(error) {
            console.error('Connect2Feed: Failed to get token', error);
            if (typeof config.onError === 'function') {
              config.onError({ type: 'token_error', message: error.message });
            }
          });
        }
        
        if (typeof config.onReady === 'function') {
          config.onReady(data);
        }
        break;

      case 'auth:ready':
        if (configureTimeout) {
          clearTimeout(configureTimeout);
          configureTimeout = null;
        }
        if (configureResolve) {
          configureResolve();
          configureResolve = null;
        }
        break;
        
      case 'feeds:loaded':
        if (typeof config.onFeedsLoaded === 'function') {
          config.onFeedsLoaded(data);
        }
        break;
        
      case 'feeds:error':
        if (typeof config.onError === 'function') {
          config.onError(data);
        }
        break;
        
      case 'feed:click':
        if (typeof config.onFeedClick === 'function') {
          config.onFeedClick(data);
        }
        break;

      case 'feed:share':
        if (typeof config.onShare === 'function') {
          config.onShare(data);
        }
        break;

      case 'feed:add-to-calendar':
        if (typeof config.onAddToCalendar === 'function') {
          config.onAddToCalendar(data);
        }
        break;

      case 'feed:filter-cleared':
        if (typeof config.onFilterCleared === 'function') {
          config.onFilterCleared(data);
        }
        break;

      case 'embed:complete':
        if (iframe) {
          var emptyContainer = document.getElementById(config.containerId);
          if (data && data.total === 0) {
            iframe.style.display = 'none';
            if (emptyContainer) {
              emptyContainer.style.minHeight = '0px';
              emptyContainer.style.height = '0px';
            }
          } else {
            iframe.style.display = '';
            iframe.style.height = config.height;
            if (emptyContainer) {
              emptyContainer.style.minHeight = '';
              emptyContainer.style.height = '';
            }
          }
        }
        if (!hasEmittedComplete && typeof config.onComplete === 'function') {
          hasEmittedComplete = true;
          config.onComplete(data);
        }
        break;

      case 'feed:download':
        if (typeof config.onDownload === 'function') {
          config.onDownload(data);
        } else if (data.url) {
          window.open(data.url, '_blank');
        }
        break;
    }
  }

  var isConfigured = false;

  function configure(userConfig) {
    mergeConfig(userConfig);

    if (!config.baseUrl) {
      console.error('Connect2Feed: baseUrl is required');
      return;
    }

    if (!isConfigured) {
      window.addEventListener('message', handleMessage);
      isConfigured = true;
    }

    resetStaleState();
    discardForFeedIdChange();
    discardForIdentityChange();

    if (preloadIframe || iframe) {
      if (isReady) {
        var target = (preloadIframe || iframe).contentWindow;
        if (target && config.idToken) {
          var authMsg = {
            type: 'auth:token',
            token: config.idToken
          };
          if (config.b2cTenants) authMsg.b2cTenants = config.b2cTenants;
          if (config.b2cClientIds) authMsg.b2cClientIds = config.b2cClientIds;
          if (config.b2cPolicy) authMsg.b2cPolicy = config.b2cPolicy;
          target.postMessage(authMsg, config.baseUrl);
        } else if (target && typeof config.getIdToken === 'function') {
          Promise.resolve(config.getIdToken()).then(function(tkn) {
            if (tkn && target) {
              var authMsg = {
                type: 'auth:token',
                token: tkn
              };
              if (config.b2cTenants) authMsg.b2cTenants = config.b2cTenants;
              if (config.b2cClientIds) authMsg.b2cClientIds = config.b2cClientIds;
              if (config.b2cPolicy) authMsg.b2cPolicy = config.b2cPolicy;
              target.postMessage(authMsg, config.baseUrl);
            }
          });
        }
        if (config.customTheme) {
          target.postMessage({
            type: 'theme:update',
            mode: config.customTheme.mode,
            variables: config.customTheme.variables
          }, config.baseUrl);
        }
      }
      return configurePromise;
    }

    configurePromise = new Promise(function(resolve) {
      configureResolve = resolve;
    });

    var tryPreload = function() {
      var container = document.getElementById(config.containerId);
      if (!container) {
        addPreconnect();
        if (configureResolve) {
          configureResolve();
          configureResolve = null;
        }
        return;
      }

      preloadIframe = document.createElement('iframe');
      preloadIframe.id = 'connect2-feeds-preload';
      markIdentity(preloadIframe);
      preloadIframe.src = buildEmbedUrl() + '&preload=true';
      preloadIframe.style.width = '0';
      preloadIframe.style.height = '0';
      preloadIframe.style.border = 'none';
      preloadIframe.style.position = 'absolute';
      preloadIframe.style.opacity = '0';
      preloadIframe.style.pointerEvents = 'none';
      preloadIframe.setAttribute('aria-hidden', 'true');
      preloadIframe.setAttribute('title', 'Connect2 News Feed');
      container.appendChild(preloadIframe);

      configureTimeout = setTimeout(function() {
        if (configureResolve) {
          configureResolve();
          configureResolve = null;
        }
      }, 15000);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', tryPreload);
    } else {
      tryPreload();
    }

    return configurePromise;
  }

  function isIframeAttached(el) {
    return el && el.parentNode && document.contains(el);
  }

  function iframeFeedId(el) {
    if (!el || !el.src) return null;
    var match = el.src.match(/[?&]feedId=([^&]*)/);
    return match ? decodeURIComponent(match[1]) : null;
  }

  function discardForFeedIdChange() {
    var existing = preloadIframe || iframe;
    if (!existing) return;
    var desired = config.feedId || null;
    if (iframeFeedId(existing) === desired) return;

    if (preloadIframe && preloadIframe.parentNode) {
      preloadIframe.parentNode.removeChild(preloadIframe);
    }
    if (iframe && iframe.parentNode) {
      iframe.parentNode.removeChild(iframe);
    }
    preloadIframe = null;
    iframe = null;
    isReady = false;
    configurePromise = null;
    configureResolve = null;
    if (configureTimeout) {
      clearTimeout(configureTimeout);
      configureTimeout = null;
    }
  }

  function iframeIdentity(el) {
    if (!el) return null;
    return el.getAttribute('data-c2-identity') || null;
  }

  function discardForIdentityChange() {
    var existing = preloadIframe || iframe;
    if (!existing) return;
    var desired = tokenIdentity(config.idToken);
    if (!desired) return;
    var current = iframeIdentity(existing);
    if (!current || current === desired) return;

    if (preloadIframe && preloadIframe.parentNode) {
      preloadIframe.parentNode.removeChild(preloadIframe);
    }
    if (iframe && iframe.parentNode) {
      iframe.parentNode.removeChild(iframe);
    }
    preloadIframe = null;
    iframe = null;
    isReady = false;
    configurePromise = null;
    configureResolve = null;
    if (configureTimeout) {
      clearTimeout(configureTimeout);
      configureTimeout = null;
    }
  }

  function resetStaleState() {
    if (iframe && !isIframeAttached(iframe)) {
      iframe = null;
    }
    if (preloadIframe && !isIframeAttached(preloadIframe)) {
      preloadIframe = null;
    }
    if (!iframe && !preloadIframe) {
      isReady = false;
      configurePromise = null;
      configureResolve = null;
      if (configureTimeout) {
        clearTimeout(configureTimeout);
        configureTimeout = null;
      }
    }
  }

  function loadFeeds(userConfig) {
    if (userConfig) {
      configure(userConfig);
    }

    hasEmittedComplete = false;
    resetStaleState();
    discardForFeedIdChange();
    discardForIdentityChange();

    if (!config.baseUrl) {
      console.error('Connect2Feed: baseUrl is required');
      return;
    }

    function doLoad() {
      if (preloadIframe && isIframeAttached(preloadIframe)) {
        preloadIframe.style.width = config.width;
        preloadIframe.style.height = config.height;
        preloadIframe.style.position = '';
        preloadIframe.style.opacity = '';
        preloadIframe.style.pointerEvents = '';
        preloadIframe.id = 'connect2-feeds-iframe';
        preloadIframe.removeAttribute('aria-hidden');

        var parent = preloadIframe.parentNode;
        if (parent) {
          var children = parent.childNodes;
          for (var i = children.length - 1; i >= 0; i--) {
            if (children[i] !== preloadIframe) {
              parent.removeChild(children[i]);
            }
          }
        }

        iframe = preloadIframe;
        preloadIframe = null;

        var sendFeedsLoad = function() {
          if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage({ type: 'feeds:load' }, config.baseUrl);
          }
        };

        if (configurePromise) {
          configurePromise.then(sendFeedsLoad);
        } else {
          sendFeedsLoad();
        }
      } else {
        preloadIframe = null;
        createIframe();
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', doLoad);
    } else {
      doLoad();
    }
  }

  function relayItemMessage(data) {
    switch (data.type) {
      case 'feeds:loaded':
        if (typeof config.onFeedsLoaded === 'function') config.onFeedsLoaded(data);
        break;
      case 'feeds:error':
        if (typeof config.onError === 'function') config.onError(data);
        break;
      case 'feed:click':
        if (typeof config.onFeedClick === 'function') config.onFeedClick(data);
        break;
      case 'feed:share':
        if (typeof config.onShare === 'function') config.onShare(data);
        break;
      case 'feed:add-to-calendar':
        if (typeof config.onAddToCalendar === 'function') config.onAddToCalendar(data);
        break;
      case 'feed:filter-cleared':
        if (typeof config.onFilterCleared === 'function') config.onFilterCleared(data);
        break;
      case 'feed:download':
        if (typeof config.onDownload === 'function') config.onDownload(data);
        else if (data.url) window.open(data.url, '_blank');
        break;
    }
  }

  function injectItemToken(feedId) {
    if (config.idToken) {
      sendTokenToItemIframe(feedId, config.idToken);
      return;
    }
    if (typeof config.getIdToken === 'function') {
      var result = config.getIdToken();
      if (result && typeof result.then === 'function') {
        result.then(function(t) {
          if (t && itemIframes[feedId]) {
            sendTokenToItemIframe(feedId, t);
          }
        });
        return;
      }
      if (result && itemIframes[feedId]) {
        sendTokenToItemIframe(feedId, result);
      }
    }
  }

  function attachItemHandler(feedId, injectTokenOnReady) {
    if (itemHandlers[feedId]) {
      window.removeEventListener('message', itemHandlers[feedId]);
    }

    var hasEmittedItemComplete = false;
    var handler = function(event) {
      if (event.origin !== config.baseUrl) return;
      var itemIframe = itemIframes[feedId];
      if (!itemIframe || event.source !== itemIframe.contentWindow) return;

      var data = event.data || {};

      if (data.type === 'embed:ready') {
        if (injectTokenOnReady) injectItemToken(feedId);
        return;
      }

      if (data.type === 'embed:complete') {
        if (data && data.total === 0) {
          itemIframe.style.height = '0px';
        }
        if (!hasEmittedItemComplete && typeof config.onComplete === 'function') {
          hasEmittedItemComplete = true;
          config.onComplete(data);
        }
        return;
      }

      relayItemMessage(data);
    };

    itemHandlers[feedId] = handler;
    window.addEventListener('message', handler);
  }

  function openFeedItem(feedId, containerId, options) {
    if (!config.baseUrl || !feedId) return null;

    var container = containerId ? document.getElementById(containerId) : null;
    if (!container) return null;

    var itemWidth = (options && options.width) || '100%';
    var itemHeight = (options && options.height) || '100%';

    if (itemIframes[feedId]) {
      closeFeedItem(feedId);
    }

    if (!(options && options.hideActions) && preloadIframe && isIframeAttached(preloadIframe) && config.feedId === feedId) {
      preloadIframe.style.width = itemWidth;
      preloadIframe.style.height = itemHeight;
      preloadIframe.style.position = '';
      preloadIframe.style.opacity = '';
      preloadIframe.style.pointerEvents = '';
      preloadIframe.id = 'connect2-feed-item-' + feedId;
      preloadIframe.removeAttribute('aria-hidden');

      container.innerHTML = '';
      container.appendChild(preloadIframe);

      itemIframes[feedId] = preloadIframe;
      preloadIframe = null;
      attachItemHandler(feedId, false);

      var sendFeedsLoad = function() {
        var itemIframe = itemIframes[feedId];
        if (itemIframe && itemIframe.contentWindow) {
          itemIframe.contentWindow.postMessage({ type: 'feeds:load' }, config.baseUrl);
        }
      };

      if (configurePromise) {
        configurePromise.then(sendFeedsLoad);
      } else {
        sendFeedsLoad();
      }

      return itemIframes[feedId];
    }

    var itemIframe = document.createElement('iframe');
    itemIframe.id = 'connect2-feed-item-' + feedId;
    var itemSrc = config.baseUrl + '/embed/feeds/item/' + encodeURIComponent(feedId);
    if (options && options.hideActions) {
      itemSrc += '?hideActions=true';
    }
    itemIframe.src = itemSrc;
    itemIframe.style.width = itemWidth;
    itemIframe.style.height = itemHeight;
    itemIframe.style.border = 'none';
    itemIframe.setAttribute('title', 'Connect2 Feed Item');

    container.innerHTML = '';
    container.appendChild(itemIframe);

    itemIframes[feedId] = itemIframe;
    attachItemHandler(feedId, true);

    return itemIframe;
  }

  function sendTokenToItemIframe(feedId, token) {
    var itemIframe = itemIframes[feedId];
    if (!itemIframe || !itemIframe.contentWindow) return;

    var message = {
      type: 'auth:token',
      token: token
    };
    if (config.b2cTenants) message.b2cTenants = config.b2cTenants;
    if (config.b2cClientIds) message.b2cClientIds = config.b2cClientIds;
    if (config.b2cPolicy) message.b2cPolicy = config.b2cPolicy;
    itemIframe.contentWindow.postMessage(message, config.baseUrl);

    if (config.customTheme) {
      itemIframe.contentWindow.postMessage({
        type: 'theme:update',
        mode: config.customTheme.mode,
        variables: config.customTheme.variables
      }, config.baseUrl);
    }
  }

  function closeFeedItem(feedId) {
    if (itemHandlers[feedId]) {
      window.removeEventListener('message', itemHandlers[feedId]);
      delete itemHandlers[feedId];
    }
    var itemIframe = itemIframes[feedId];
    if (itemIframe && itemIframe.parentNode) {
      itemIframe.parentNode.removeChild(itemIframe);
    }
    delete itemIframes[feedId];
  }

  function destroy() {
    window.removeEventListener('message', handleMessage);
    
    if (iframe && iframe.parentNode) {
      iframe.parentNode.removeChild(iframe);
    }

    if (preloadIframe && preloadIframe.parentNode) {
      preloadIframe.parentNode.removeChild(preloadIframe);
    }

    if (configureTimeout) {
      clearTimeout(configureTimeout);
      configureTimeout = null;
    }

    for (var feedId in itemIframes) {
      if (itemIframes.hasOwnProperty(feedId)) {
        closeFeedItem(feedId);
      }
    }
    
    iframe = null;
    preloadIframe = null;
    isReady = false;
    isConfigured = false;
    pendingToken = null;
    hasEmittedComplete = false;
    itemIframes = {};
    itemHandlers = {};
    configurePromise = null;
    configureResolve = null;
  }

  Connect2Feed.embed = {
    configure: configure,
    loadFeeds: loadFeeds,
    init: loadFeeds,
    destroy: destroy,
    sendIdToken: sendToken,
    refreshToken: refreshToken,
    setTheme: setTheme,
    openFeedItem: openFeedItem,
    closeFeedItem: closeFeedItem,
    isReady: function() { return isReady; },
    isConfigured: function() { return isConfigured; },
    getConfig: function() { return Object.assign({}, config); }
  };

  window.Connect2Feed = Connect2Feed;
})();