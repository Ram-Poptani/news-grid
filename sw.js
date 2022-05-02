const cacheName = 'ANW';

const cacheAssets = [
   "index.html",
   "about.html",
   
    

];

self.addEventListener('install', evt => {
    console.log('Service Worker Installed');
    evt.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log("Caching Files");
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    )
});

self.addEventListener('activate', evt => {
    console.log('Service Worker Activated');
});

self.addEventListener('fetch', evt => {
    console.log(evt.request.url);
});
self.addEventListener('push', evt => {
    console.log("Push Activated");
});





