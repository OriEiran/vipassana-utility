const CACHE_NAME = 'meditation-app-v1';
const assetsToCache = [
  '/',
  '/index.ejs',
  '/Goenka.mp3',
  '/Goenka45.mp3',
  '/manifest.json',
  // Add other assets
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(assetsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});