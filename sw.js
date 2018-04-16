var static_cache = 'restaurants-reviews-cache-v1';
var urlsToCache = [
'/',
'index.html',
'restaurant.html',
'css/styles.css',
'js/dbhelper.js',
'js/main.js',
'js/restaurant_info.js',
'data/restaurants.json'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
	    caches.open(static_cache).then(function(cache) {
			return cache.addAll(urlsToCache);
			})
  	);
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});