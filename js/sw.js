
var CACHE_NAME = 'restaurants-reviews-cache-v1';
var urlsToCache = [
'/',
'/css',
'/data',
'/img',
'index.html',
'restaurant.html']

self.addEventListener('install', function(event) {
	event.waitUntil(
	    caches.open(CACHE_NAME).then(function(cache) {
			return cache.addAll(urlsToCache);
			})
  	);
});