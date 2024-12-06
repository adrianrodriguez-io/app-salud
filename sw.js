const CACHE_NAME = "pwa-plan-salud-cache-v1";
const FILES_TO_CACHE = [
    "./", // Raíz
    "./index.html", // Página principal
    "./styles.css", // Estilos
    "./app.js", // JavaScript principal
    "./manifest.json", // Manifest
    "./icons/icon-192.png", // Iconos
    "./icons/icon-512.png" // Iconos
];

// Instalar el Service Worker y cachear archivos
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Archivos cacheados correctamente");
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// Activar el Service Worker y limpiar cachés antiguas
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log("Borrando caché antigua:", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Interceptar solicitudes y servir desde la caché
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        }).catch(() => {
            // Si no hay conexión y no está cacheado, muestra index.html
            if (event.request.destination === "document") {
                return caches.match("./index.html");
            }
        })
    );
});
