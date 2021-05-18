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
    "url": "09c6f28ff2dba15cfae6f612bb1edbacd9563822-b84e771dffda9bb7ccca.js"
  },
  {
    "url": "0bd1a12a4e2a89e1a7f6696efd1076450f68dc86-8ba0606ec8bef5f3d0a4.js"
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
    "revision": "b273be3d1e618e6d462879cf3c425ec8"
  },
  {
    "url": "404/index.html",
    "revision": "9fc13d65194bc214f805c7d1b6516e77"
  },
  {
    "url": "532a2f07-2b491197e5445acdb528.js"
  },
  {
    "url": "about/index.html",
    "revision": "910a767aad576e3903f94fc0302450f8"
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
    "url": "app-4b620b4b9ef67d5d4395.js"
  },
  {
    "url": "app-98c5d054efc807d353c6.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-504f688893251871c6ae.js"
  },
  {
    "url": "component---src-pages-404-js-87ed337f26418eca33df.js"
  },
  {
    "url": "component---src-pages-404-js-98806504d8d00a97e29a.js"
  },
  {
    "url": "component---src-pages-about-js-4ab59915a4b6d5a6e344.js"
  },
  {
    "url": "component---src-pages-about-js-636af553da1cfa787196.js"
  },
  {
    "url": "component---src-pages-images-js-a567cea78b6778619d8e.js"
  },
  {
    "url": "component---src-pages-index-js-4d9ae33d11c59298d02d.js"
  },
  {
    "url": "component---src-pages-index-js-84219e4bfa54470f3ed7.js"
  },
  {
    "url": "framework-3e59b0ca76e46f05ca8d.js"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "images/context-aboutunited.jpg",
    "revision": "ef5e233294dfd1e0b8cef31ee7ca6f28"
  },
  {
    "url": "images/context-ak.jpg",
    "revision": "ed3a6be7fd1c36274d147e40e00e715b"
  },
  {
    "url": "images/context-bruderland.jpg",
    "revision": "b6b70529be9ee059f5bff71967ca8e0f"
  },
  {
    "url": "images/context-deluxedeckeln.jpg",
    "revision": "9baaaaddb6c0e6462ac83855ce0beef9"
  },
  {
    "url": "images/context-jetzterstrecht.jpg",
    "revision": "5779fc7ec8c1cfe863278e7f81e04d4b"
  },
  {
    "url": "images/context-lause.jpg",
    "revision": "a9f384b4cf8a5a51b1aa3b535e47b470"
  },
  {
    "url": "images/context-mietendeckel.jpg",
    "revision": "30400359cafa5629258cfb440793dc35"
  },
  {
    "url": "images/context-racialprofiling.jpg",
    "revision": "af90e23050998c592c5db6a3f8d83d2c"
  },
  {
    "url": "images/context-wewillrise.jpg",
    "revision": "81580171bce274f0ab929f1d462394f0"
  },
  {
    "url": "images/design-aboutunited.jpg",
    "revision": "fc14ade2405dca96c7afafc7bcb75f47"
  },
  {
    "url": "images/design-aircrewalliance.jpg",
    "revision": "08f9a8ae12b69fa08445a84855f984f0"
  },
  {
    "url": "images/design-ak.jpg",
    "revision": "5e61b56e27c7c374e1408b51c63e3bbc"
  },
  {
    "url": "images/design-bff.jpg",
    "revision": "8881b625a0390d389f3ea1c387bbb72b"
  },
  {
    "url": "images/design-bruderland.jpg",
    "revision": "edd7bc84abf109c90fdefb33fd21d2db"
  },
  {
    "url": "images/design-iuventa10.jpg",
    "revision": "c3da3cb924200d877d57c8242439f536"
  },
  {
    "url": "images/design-romarchiv.jpg",
    "revision": "fb307fbb2cb1ce8fc44c25d595bf4095"
  },
  {
    "url": "images/design-romarchiv2.jpg",
    "revision": "cbc36c515dcc350cb668e59a77dbd396"
  },
  {
    "url": "images/design-rosa.jpg",
    "revision": "18ebc6423af71ccd13b4ae7548806f77"
  },
  {
    "url": "images/extra-bug.jpg",
    "revision": "96018f264aab8da8b11972d25fd32eb7"
  },
  {
    "url": "images/extra-figma.jpg",
    "revision": "c3c5eef50fde6a6f975eab6b5d196f9c"
  },
  {
    "url": "images/extra-gestaltung.jpg",
    "revision": "54b9c9a4f6bcdf9596cb1f765cb38635"
  },
  {
    "url": "images/extra-kollektivtreffen.jpg",
    "revision": "f0237b7af2577a78733551a2088a886d"
  },
  {
    "url": "images/extra-lause.jpg",
    "revision": "ae87b36aebe1b4e29c6998a61144089c"
  },
  {
    "url": "images/extra-planning.jpg",
    "revision": "686c6399a53be2b5c4ea4fbfa6d5a344"
  },
  {
    "url": "images/extra-wellmitz.jpg",
    "revision": "9c7223cf5942cf171592fca02cef6a1c"
  },
  {
    "url": "images/extra-workflow.jpg",
    "revision": "a4b4cdef1aed381e8a28fbb9fb1f4c18"
  },
  {
    "url": "images/extra-zoom.jpg",
    "revision": "56a20f6ed3f9803e0b274e7965d9b049"
  },
  {
    "url": "images/extra-zoomzoomzoom.jpg",
    "revision": "996712682c5c1918c27be7c262cd141e"
  },
  {
    "url": "images/index.html",
    "revision": "0a885280bf7771bf562ca76560b60048"
  },
  {
    "url": "images/process-aboutunited.jpg",
    "revision": "178c42b479519f513abc1f82242c0434"
  },
  {
    "url": "images/process-ak.jpg",
    "revision": "c3f54c410abdcea410bcdc07c8ea9481"
  },
  {
    "url": "images/process-bff.jpg",
    "revision": "8726805b798db66e46e69f8ca3d217bf"
  },
  {
    "url": "images/process-digitalgewalt.jpg",
    "revision": "3c3d86ae04724b5f304963d4ba624699"
  },
  {
    "url": "images/process-htw.jpg",
    "revision": "f4a5ccdaa583da02cce4fb2aac089e7f"
  },
  {
    "url": "images/process-nbk.jpg",
    "revision": "a80e87fb9efdc43a43b0e649f587acbc"
  },
  {
    "url": "images/process-student.jpg",
    "revision": "2749a65fa8e22ba3c5270d9f4acc1db5"
  },
  {
    "url": "images/process-wellmitz.jpg",
    "revision": "509917ae7d44b747f83f0ebbb0175a0e"
  },
  {
    "url": "images/process-wewillrise.jpg",
    "revision": "7505d61e47014575bc8a73a68e10c8b4"
  },
  {
    "url": "index.html",
    "revision": "675ba03debd7d326be281816fc9f5750"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b9616718efd251726ba82a15815705eb"
  },
  {
    "url": "polyfill-564fab21cd0762acc05c.js"
  },
  {
    "url": "polyfill-72b219bae196683411be.js"
  },
  {
    "url": "styles.d4325a8b64c472e16e2e.css"
  },
  {
    "url": "styles.f4efed67f0dd6654ad89.css"
  },
  {
    "url": "webpack-runtime-aa27f1def3cc49feb074.js"
  },
  {
    "url": "webpack-runtime-bfaf869013f5ea86c44c.js"
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
  if (!resources || !(await caches.match(`/app-98c5d054efc807d353c6.js`))) {
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
