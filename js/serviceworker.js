const staticCacheName = 'site-bike1';
const assets = [
    '/',
  '/index.html',
  '/js/app.js',
  '/js/ui.js',
  '/js/materialize.min.js',
  '/css/styles.css',
  '/img/bike1.png',
  '/css/materialize.min.css',
  '/pages/fallbackpage.html'
];

// install event for cashing
self.addEventListener('install', evt => {

  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event for service worker 
self.addEventListener('activate', evt => {
});

// fetch event for the service work 
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
})
