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

var precacheConfig = [["2018/07/17/hexo introduction/index.html","82acee4d69ebef4a6c2e278d3415361a"],["2018/07/18/mTCP-Code-Reading/index.html","716c42a5d4f6624aba9ba8c9a6b78f59"],["2018/07/18/mTCP-Code-Reading/mtcp-epserver-wu.png","637ea841131b01dad9ceaa0e3089b94b"],["2018/07/26/C语言开发调试经验记录/1.png","a91685fd3dd89dd504338258f5a04de4"],["2018/07/26/C语言开发调试经验记录/index.html","86298fd575a95744f8f243034a1b4633"],["2018/09/29/Linux-时间函数小结/index.html","67d4e0b4073cdd97cd6b019d0d539ba0"],["2018/12/08/pdump-DPDK抓包工具/index.html","1471b28095ee2b6578c42bf9dc106ca8"],["2018/12/08/pdump-DPDK抓包工具/pdump-framework.png","56bd02031cba73fcb9edd8ab589bf9c8"],["2018/12/08/pdump-DPDK抓包工具/pdump-process.png","eaa9b587f93d13610d78e7fa300b88d3"],["2018/12/10/Linux-下的PF-PACKET和SOCK-RAW/index.html","d3850665b3e53d83c997800f2f9f2570"],["2019/03/12/CentOS-发行版及内核升级/centos-1.png","e35f2a67a3b12dd973d2529c8cedc957"],["2019/03/12/CentOS-发行版及内核升级/centos-2.png","6cf6d24e3746a41a928561ef53657a05"],["2019/03/12/CentOS-发行版及内核升级/centos-3.png","ab9fa52840fa5c91ff7978f481ed6057"],["2019/03/12/CentOS-发行版及内核升级/centos-4.png","02194be257fa7c5bed705cf594c8712d"],["2019/03/12/CentOS-发行版及内核升级/centos-5.png","f5ecb0bd5a9d144bb6bb835df85f5727"],["2019/03/12/CentOS-发行版及内核升级/centos-6.png","70543e07d73bd3e61e63b48fd0c4bf71"],["2019/03/12/CentOS-发行版及内核升级/index.html","e0d0eaaa27499ddac4ad9367771bb417"],["2019/08/21/Linux常用调试工具/index.html","c91637c2451e21bf3b3c2a9d11de58af"],["archives/2018/07/index.html","ac0ddb195d18932cab7d980b735051f3"],["archives/2018/09/index.html","12a1ae1749c6b57c8b1fff19eeb8b557"],["archives/2018/12/index.html","38db7d7fd94b1ed259e16a14488965f3"],["archives/2018/index.html","2eddbe4b193b3324c48d15408eb29919"],["archives/2019/03/index.html","28629f039a9518b1bacc2f50d235a70f"],["archives/2019/08/index.html","bb141d501511c9c81f1914ec2ffe30ed"],["archives/2019/index.html","de4692f77d5d0eee00d5b958ea7704b7"],["archives/index.html","8f4ad09716e9c7f63ca44ec010e56b13"],["categories/technology/index.html","275ade2c1b02a505f3ae44d4bd1be990"],["css/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["css/donate.css","a68e4a34e814ce3334186286f4655440"],["css/style.css","3496e1c7588e0ae31148a801b01219f7"],["donate/index.html","91503525d9362bc2db45b1102e43690a"],["google9b8d8a81b13d16eb.html","5a22bf8b0e2e4a6402feb62d1a39e67e"],["img/AliPayQR.png","1511d0c6f91582f2b7bf20d9b0956f87"],["img/BTCQR.png","a48f0b8d3aa8c07adbeffe2979b2e5a4"],["img/WeChatQR.png","8369323e99c4c96518e1297b47a71428"],["img/alipay.svg","9239702087add999b29eda6c69b7fac3"],["img/bitcoin.svg","73007d7f0ee6052c13edec23f0ee5c78"],["img/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["img/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["img/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["img/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["index.html","67027ea31c692923d714b47ded640196"],["js/codeblock-resizer.js","f70200751db2c1b3cff95884d7ecc132"],["js/donate.js","c5119c5bdd5049d805e03af774a47472"],["js/fancybox.js","7a432f63d671adfa0cb9a5458c6db4a8"],["js/gitment.browser.js","434949e3fa004587f73aada62910cfc4"],["js/search.js","2d82d5f1f7964cab86b4df17fcc946f9"],["js/share.js","013db0d5d1e2a227ac821fe8f0af678d"],["js/smartresize.js","14d842f8dea14c352b055b4e9de5cf07"],["js/totop.js","4ec0df4fc761d8a5433c8f0ba94750f7"],["tags/Blog/index.html","4a28d89108154521e63e06a084178b68"],["tags/C语言/index.html","d15d910224c77c90198037367c85ba22"],["tags/DPDK/index.html","9916a3528d36863f4c388cd7b9850841"],["tags/Linux-C语言/index.html","30e6718e4c9f0b094e353f2f461be995"],["tags/Linux-DPDK/index.html","b66cb18ec15e8c1688f2936c514cfcbb"],["tags/Linux-Debug/index.html","529b5d809f09b7581ad3d978698e215a"],["tags/Linux-TCP-IP-DCN/index.html","7242154e710c631eb7df48a7f4984f73"],["tags/Linux/index.html","3d26ed1b341e14af906de9eff1567087"],["tags/code/index.html","bbea8e15ba25c8cd026e9da49f4fec4e"],["tags/hexo/index.html","0b9d3e517e20c5ac44bccf015bf4cf97"],["tags/mTCP/index.html","ec63725702f58c5937ad8650c2c7a282"],["tags/technology/index.html","65b82b313a876bdeff22495d1f10b9fc"],["tags/用户态协议栈/index.html","f926912119f0937a47d7f7e210ee2b9d"]];
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







