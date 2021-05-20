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
    "url": "0bd1a12a4e2a89e1a7f6696efd1076450f68dc86-e3f73a3877c65fbaa2d9.js"
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
    "revision": "0fd4deee7ea7a7d37514c87cd2d887f7"
  },
  {
    "url": "404/index.html",
    "revision": "5cfba4964635ccfa2219e4d359a7b9bc"
  },
  {
    "url": "532a2f07-2b491197e5445acdb528.js"
  },
  {
    "url": "about/index.html",
    "revision": "9e3b28040b85bdef5345aa0cfa932284"
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
    "url": "app-f4ad4a41c112fe3c4404.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-504f688893251871c6ae.js"
  },
  {
    "url": "component---src-pages-404-js-89f2369fc1d58e9f1fb6.js"
  },
  {
    "url": "component---src-pages-about-js-2cc7ab48cf9a5c7ee75f.js"
  },
  {
    "url": "component---src-pages-about-js-4730e7d3846f62ad98e8.js"
  },
  {
    "url": "component---src-pages-about-js-5c357d7d9c7a75ce4f8a.js"
  },
  {
    "url": "component---src-pages-index-js-9deba164606de352924b.js"
  },
  {
    "url": "component---src-pages-index-js-a681a95977b9c714c3b0.js"
  },
  {
    "url": "component---src-pages-index-js-c53ed9d9ced77cf41627.js"
  },
  {
    "url": "component---src-pages-index-js-cf4b7050eaefac438134.js"
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
    "revision": "a8080167ebeef520669f19c4ff559d0f"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f83f204341941492b7bd63f3e3d361ee"
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
    "url": "styles.7931da9fd57f417996ca.css"
  },
  {
    "url": "styles.907b6aef908810438a21.css"
  },
  {
    "url": "styles.ded0b368081d66eeda01.css"
  },
  {
    "url": "webpack-runtime-07ed757580955c184890.js"
  },
  {
    "url": "webpack-runtime-40c4a87a8b07ce8b552b.js"
  },
  {
    "url": "webpack-runtime-707a970f06896c4e7cc6.js"
  },
  {
    "url": "webpack-runtime-bfbd9b81f558a5b7eede.js"
  },
  {
    "url": "webpack-runtime-c00685bea80aeb12992f.js"
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
