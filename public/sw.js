const staticCacheName='site-static';
const dynamicCacheName='site-dynamic';

const assets=[
    '/',
    '/index.html',
    '/css/materialize.min.css',
    '/js/materialize.min.js',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'css/styles.css',
    'background1.jpg',
    'background2.jpg',
    'background3.jpg',


   
];
self.addEventListener('install',evt=>{
  console.log("Service Worker has been installed")
   evt.waitUntil(
caches.open(staticCacheName).then(cache=>{
    console.log("Caching")
    cache.addAll(assets)
    })
);
}
);
self.addEventListener('activate',evt=>{
 console.log("Service Worker has been activated")

}
)
self.addEventListener('fetch',evt=>{
  console.log("fetch event",evt)
    evt.respondWith(
        caches.match(evt.request).then(cacheRes=>{
            return cacheRes || fetch(evt.request).then(fetchRes=>{
                return caches.open(dynamicCacheName).then(cache=>{
                    cache.put(evt.request.url,fetchRes.clone());
                    return fetchRes
                })
            })
        })
    )
})
