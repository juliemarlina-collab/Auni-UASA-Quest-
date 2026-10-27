/* Service worker: app boleh dibuka tanpa internet selepas lawatan pertama.
   Strategi "rangkaian dahulu": bila ada internet, fail terbaharu dari GitHub sentiasa digunakan.
   Selepas mengemas kini fail di GitHub, naikkan nombor versi CACHE (v1 -> v2). */
const CACHE='auni-uasa-v4';
const FILES=["./", "index.html", "css/style.css", "js/config.js", "js/data/bm.js", "js/data/en.js", "js/data/sej.js", "js/data/geo.js", "js/data/mt.js", "js/data/sn.js", "js/data/learn.js", "js/data/more.js", "js/sims.js", "js/raikan.js", "js/app.js", "assets/auni.jpg", "assets/auni-wide.jpg", "assets/icons/icon-192.png", "manifest.webmanifest"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(
    fetch(e.request).then(r=>{
      if(r.ok&&new URL(e.request.url).origin===location.origin){const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp))}
      return r;
    }).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(m=>m||caches.match('index.html')))
  );
});
