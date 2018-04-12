
var CACHE_NAME = 'restaurants-reviews-cache-v1';
var urlsToCache = [
'/',
'/css',
'/data',
'/img',
'/js'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
	    caches.open(CACHE_NAME).then(function(cache) {
			return cache.addAll(urlsToCache);
			})
  	);
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});