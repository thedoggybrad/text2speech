'use strict'

const CACHE_NAME = 'text2speech';
// The files we want to cache
const resourceList = [
  '/',

  'https://thedoggybrad.github.io/text2speech/index.html',
  'https://thedoggybrad.github.io/text2speech/img.png',
  'https://thedoggybrad.github.io/text2speech/script.js',
  'https://thedoggybrad.github.io/text2speech/wave.gif',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
  'https://code.jquery.com/jquery-3.3.1.slim.min.js',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js'

];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => {
    return cache.addAll(resourceList);
  }));
});

function addToCache(cacheName, resourceList) {
  caches.open(cacheName).then(cache => {
    return cache.addAll(resourceList);
  });
}

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    return response || fetch(event.request);
  }));
});
