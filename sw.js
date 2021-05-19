/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "0bd1a12a4e2a89e1a7f6696efd1076450f68dc86-426d2f98f2e7e0ec80f5.js"
  },
  {
    "url": "0bd1a12a4e2a89e1a7f6696efd1076450f68dc86-64ef0406b32355459eb8.js"
  },
  {
    "url": "175-f95d508753f99439a669.js"
  },
  {
    "url": "231-b2d35ff9bb1952aa22d1.js"
  },
  {
    "url": "368-bc1a2f5df22e72070872.js"
  },
  {
    "url": "404.html",
    "revision": "4c6f663b1468d83a48fcd5a36eef7295"
  },
  {
    "url": "404/index.html",
    "revision": "031cd96845561abaadb04a19e651a112"
  },
  {
    "url": "532a2f07-2b491197e5445acdb528.js"
  },
  {
    "url": "about/index.html",
    "revision": "d232ba33716df859c40340d776a89223"
  },
  {
    "url": "admin/cms.js"
  },
  {
    "url": "admin/index.html",
    "revision": "86f31db0fe71bc9ac214bb9a10972c2f"
  },
  {
    "url": "admin/netlify-identity.js"
  },
  {
    "url": "admin/react-dom.production.min.js"
  },
  {
    "url": "admin/react.production.min.js"
  },
  {
    "url": "app-5762d927242891032240.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-504f688893251871c6ae.js"
  },
  {
    "url": "component---src-pages-404-js-89f2369fc1d58e9f1fb6.js"
  },
  {
    "url": "component---src-pages-about-js-5c357d7d9c7a75ce4f8a.js"
  },
  {
    "url": "component---src-pages-index-js-a681a95977b9c714c3b0.js"
  },
  {
    "url": "component---src-pages-index-js-faa9d62f266d7bbe1727.js"
  },
  {
    "url": "framework-3e59b0ca76e46f05ca8d.js"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "2c86a125fbf5432e5ed995eb16c7abe8"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e60186fc8aabd59ccb03b0cd734bf48c"
  },
  {
    "url": "polyfill-564fab21cd0762acc05c.js"
  },
  {
    "url": "static/zoff-65c6358e1ec0b21756f8d4e5921848fb.woff"
  },
  {
    "url": "static/zoff2-50c54d56735e3414648dbf0083f80f69.woff"
  },
  {
    "url": "styles.18932930974764065b53.css"
  },
  {
    "url": "styles.907b6aef908810438a21.css"
  },
  {
    "url": "webpack-runtime-40c4a87a8b07ce8b552b.js"
  },
  {
    "url": "webpack-runtime-daf9509916f96cdb5596.js"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-5762d927242891032240.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
