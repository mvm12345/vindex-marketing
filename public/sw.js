// Dummy Service Worker to overwrite the old React PWA one
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      // Take control of all clients and force them to reload
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (e) => {
  // Pass through all requests, bypass cache
  e.respondWith(fetch(e.request));
});
