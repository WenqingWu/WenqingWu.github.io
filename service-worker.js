/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2018/07/17/hexo introduction/index.html","19a03a02cfae33047e1472edbb5a7a6f"],["2018/07/18/mTCP-Code-Reading/index.html","df1291faf5e68c67dca2ac4422930e98"],["2018/07/18/mTCP-Code-Reading/mtcp-epserver-wu.png","637ea841131b01dad9ceaa0e3089b94b"],["2018/07/26/C语言开发调试经验记录/1.png","a91685fd3dd89dd504338258f5a04de4"],["2018/07/26/C语言开发调试经验记录/index.html","4085dd0d4b10416e03574e3d730eb785"],["2018/09/29/Linux-时间函数小结/index.html","1f475adbf43d82d84a38d0ebc7396709"],["2018/12/08/pdump-DPDK抓包工具/index.html","f778b2ed82d5b57ac41c59d0d0578a12"],["2018/12/08/pdump-DPDK抓包工具/pdump-framework.png","56bd02031cba73fcb9edd8ab589bf9c8"],["2018/12/08/pdump-DPDK抓包工具/pdump-process.png","eaa9b587f93d13610d78e7fa300b88d3"],["2018/12/10/Linux-下的PF-PACKET和SOCK-RAW/index.html","ff483e2b070a6b2ec20bda3a46c5983b"],["2019/03/12/Centos-发行版及内核升级/index.html","dbf3b7966df59a8e095861e41b6fb206"],["archives/2018/07/index.html","7078813d07c6c3c6b3d4fc5fa282b617"],["archives/2018/09/index.html","b4d904ecde237a2df6b0969de73174ed"],["archives/2018/12/index.html","c7fe67d2f74e54c77f30beb930a90079"],["archives/2018/index.html","06dcb4d09f09937312efbc0f8366d7ec"],["archives/2019/03/index.html","4a39273ee9023fc02758d626faf46ecf"],["archives/2019/index.html","4a39273ee9023fc02758d626faf46ecf"],["archives/index.html","5b43acdd92fb26282a52b9c430a03a1e"],["categories/technology/index.html","15993d451e978e5e77248f33f8225be9"],["css/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["css/donate.css","a68e4a34e814ce3334186286f4655440"],["css/style.css","3496e1c7588e0ae31148a801b01219f7"],["donate/index.html","91503525d9362bc2db45b1102e43690a"],["google9b8d8a81b13d16eb.html","5f30aff6ab4a15f35387b84b8e055f17"],["img/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["img/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["img/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["img/alipay.svg","9239702087add999b29eda6c69b7fac3"],["img/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["img/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["img/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["img/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["img/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["index.html","a97da7eb7b21f43e6a0e16ce98effd6b"],["js/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["js/donate.js","c5119c5bdd5049d805e03af774a47472"],["js/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["js/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["js/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["js/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["js/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["js/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["tags/C/index.html","82892efb461967344d69887eea409147"],["tags/DCN/index.html","0a24b5b49e1c8d0c9a4d44dc441e7862"],["tags/DPDK/index.html","103f4870602115041a6812e5e65b02ef"],["tags/Linux-DPDK-DCN/index.html","aa6c553d1e53b3578290e442d00ef1ba"],["tags/Linux-OS/index.html","547a53ab8bf914304da4ce86c5d694fa"],["tags/Linux-TCP-IP-DCN/index.html","464bf4bfb5f30910e3c9ee7919394215"],["tags/Linux/index.html","44b4acf10502eb718df558f0a760420a"],["tags/code/index.html","bbea8e15ba25c8cd026e9da49f4fec4e"],["tags/hexo/index.html","0ca72ba3fbd73cd8d52d322670795b07"],["tags/mTCP/index.html","b9cec2e775a23feb69d9a247744410dd"],["tags/technology/index.html","02965271ead983dd6d2261ffb0814c27"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







