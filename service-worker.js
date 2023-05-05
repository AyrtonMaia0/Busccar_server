var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/main.css',
        './assets/css/noscript.css',
        // './assets/css/fontawesome-all.min.css',

        './assets/js/util.js',
        './assets/js/main.js',
        './assets/js/jquery.min.js',
        './assets/js/browser.min.js',
        './assets/js/breakpoints.min.js',

        './images/AppIcons/appstore.png',
        './images/AppIcons/playstore.png',
        './images/AppIcons/1024.png',
        './images/AppIcons/512.png',
        './images/AppIcons/256.png',
        './images/AppIcons/196.png',
        './images/AppIcons/152.png',
        './images/AppIcons/100.png',
        './images/AppIcons/76.png',
        './images/AppIcons/57.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});