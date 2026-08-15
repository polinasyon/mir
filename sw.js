// service worker - basic caching
const CACHE_NAME = 'polinasyon-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/src/main.js',
  '/src/core.js',
  '/src/meteo.js',
  '/src/nectar.js',
  '/src/flora-db.js',
  '/src/map.js',
  '/assets/logo.svg'
];

self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=> c.addAll(ASSETS)).then(()=> self.skipWaiting()));
});
self.addEventListener('activate', (e)=>{
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (e)=>{
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(caches.match(req).then(r=> r || fetch(req).then(res=>{
    // optionally cache
    return res;
  })).catch(()=> caches.match('/index.html')));
});
