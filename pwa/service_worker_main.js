'use strict'

const CACHE_NAME = 'text2speech';
// The files we want to cache
const resourceList = [
  '/',
  'https://thedoggybrad.github.io/text2speech/index.html',
  'https://thedoggybrad.github.io/text2speech/img.png',
  'https://thedoggybrad.github.io/text2speech/script.js',
  'https://thedoggybrad.github.io/text2speech/wave.gif',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css'
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
