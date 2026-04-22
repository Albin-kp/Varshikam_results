'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e1244e0c59a7d618c8f5d21d33cd962c",
".git/config": "ed88aa8c294a3fde7d84acc4814bf8e0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9f29ed254b1c5c0aa07333ca72e901a4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4a8b8ebe407632a0783a036934db4309",
".git/logs/refs/heads/gh-pages": "5354481401e0bc63b44e3acf51b8064f",
".git/logs/refs/remotes/origin/gh-pages": "5edbe700266fe4a2fefb8a8d333c7736",
".git/logs/refs/remotes/origin/main": "f8dc200786ac4c7466e350e2b0264121",
".git/objects/01/030b6bdc654931888752c1d48cb5572808c01d": "19b58247c24c68c5461bc09444769d0e",
".git/objects/01/1c8e244db1c523fa7323070898f97e58df3edf": "07880bc77818b7e2426ab9ec24883af5",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/aa8a8650c09b499d0247b286080b5ebe1b4778": "af5da382ac1d7c4a173094273db6b1d5",
".git/objects/05/2c4a50b52f26092b17a3c4318141c531ae2a95": "042facc4fae3d2ba5569e431f14a5cfa",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/09/e9f4f155bee6fe40a69609eb90a5d170eab623": "5b53111d973643ea6f853627b8498aae",
".git/objects/0a/7f3ef7e076dd2e0e1b80a4b3aac20c7984cbf3": "7fe2014321a4940f15210b239dce4285",
".git/objects/0b/fca14d823099daa37ca45ea3a485c11b8b3de5": "5670b8c9cc7ec9b047b2f3600f222f15",
".git/objects/14/bd9f95e4685539fd9b45a58fe2cffb5657a1de": "249724ec626da244d3c751e832b351c4",
".git/objects/1a/6dc269ac264057c7781deacb437c2f43e08867": "a279e92b2c7a2ae1f5aa4e9bc5cf7ec2",
".git/objects/1b/d70620a7a0581f0d4942ef6a0ebb76bae2eb08": "b2b666c2c566dad90ca11257f18b41b0",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/817f5088691915cb59d7adcb14980deb2fd446": "19db6cdbedcec5bd633888f6c65d6151",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/29/d3e140482360bdca1fad3c8abc5c50fd1bf2fb": "2ed6f16f220283266528463a034389d5",
".git/objects/2f/0622db92b592f0917212d929e44e049595c7ed": "e71a867e81d2799d03938ed60a68f503",
".git/objects/31/9a994d73f20f4a71656b17b5cd69a8a35492f3": "afe1d8ce532ef897c7cb3cd619535c15",
".git/objects/32/b421411420078acb453b0f60780cc3d48518c1": "d3f1d8d0c9a5cb7336778c18f75a5a5d",
".git/objects/35/d29feaf059374583c812e28b6ef1e7eb89ad47": "173eed2521a6c5e14d5b3c4e9f64ae7e",
".git/objects/3a/03901f9592397b6798f3e698f7cbc4059cecad": "c2eb8c5b6828b82b18e28d4c060381e5",
".git/objects/3c/0011f7949a30f47264163c01f375a290836e72": "4e4f76051202a453222c0397c44523c8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/f4a529e938409107702c4c20aca70fd1ae3969": "cba2a0088b38ff831bd0923d0da95ec0",
".git/objects/4d/11ca3efb954328c8dd74ab3c10481d49f90c5e": "3f6f5c60a65e9ab16182a288ff574e5a",
".git/objects/4d/1a21d71a57a1e969dd4b6c42285692558b30d0": "e36619c9c5e4b00e1af6e92dd4ad118a",
".git/objects/4d/a95294e1c3ec6aca5d5d8a1e6b05bfd472964e": "5c9b15482a457f92d0f4532a3f67cb78",
".git/objects/4f/94e6750c11d2f5340d70a4b6928d5c908e89b9": "438c76c5c7d0cc79449ce868bd5176b1",
".git/objects/57/c1ca2ea4bda3c82c89c3faae640f62647b738b": "0d06ffeb03d2ab47cb237f50a118c905",
".git/objects/58/e4a125816680b38d93787111d9a6f029cda61b": "4fc67da017ee016a28874a5d2af52b8c",
".git/objects/5a/042cd8f10075b54f97a502eefaf4739bc2d1e2": "0b737bbae33c99015e5b47069bf7c3fb",
".git/objects/5e/c04e28b07e6f19c22108399d0844eb5d165df7": "f21664e0d6a0d0095198a1ff76650a47",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/66/47e8042f12853ea2b44e571e495b91a4eb219d": "af63791f5f3676575c6098463d2cde5a",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/213ba95f30b6e9fb609fd14b81724132c43333": "727fad3097ab7a1fdf5842dc7595aa78",
".git/objects/6c/dba4e89df6d6f000651cb64a3fa7c10ac80d73": "cbbfe4ffb6b20a59e1e3634053dedc50",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/71/8af28d2815529e2e59d56bb2a309f5e79d1ea9": "3cd97b20bd9e68084eb4718e59e44e32",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/82/32b9ffb507569ff5ea1e60c58b8ee6495c905f": "96494dc61d685fc0ccdb7cb70aa0ad9f",
".git/objects/83/4265188f9ae20901106badeae9748036f01a96": "247f842f173f8c830131363e3cf3ce54",
".git/objects/84/485d40eed56d10bdc00eeab93c1d14bf0cb8cd": "ac688fd410a5780e8f750fd300ba5363",
".git/objects/84/b5d983dad30339aa54be37390a2b2d1f4401f8": "405dc0060d280ff50df2ae09f76b0ac2",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/fe241e17bdbb6ad4268bb64a3a74beb105ca54": "47438f77fd30fc82598fe4af5273045a",
".git/objects/8f/1720f203e935a2ddf8a54541b50e8d2d0b3288": "eb3c6bbf03a8189c2d512e8198f3c7a4",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/4d889b107f3428bfc11361070abb4f78108446": "14fafe972961a1c236f8fb491bcc75cf",
".git/objects/95/b58d6e353fb948ab5e20f5034dc2793b5e488a": "8ff9d8e01bc191ff24614764b1bf8aff",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9b/3b5d1766eb0e069d6ee741d25d15734eee597a": "783caeedc49632769dd1daa466dfe3dc",
".git/objects/9e/352ad94cad806e188e3aed490af05d0f55c887": "d6006be453d72f8ce0a4979444a8205a",
".git/objects/a0/cd57dc2f18a0064ea9026708092579637b4643": "abf5a6bea1487787840b6db10ebe719c",
".git/objects/af/1dc1938e1b627c54f5537d80124fb2d6b82033": "4ec11af2b7c00d3aa15a953305c5afc9",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/9942e122165198767ebeaa3b37f6e284e85bdd": "f39f85064ef10b4ded5d16a08b27ee55",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c8/2575a9a7f7d025bc6f42ad64b8efd84cb42bff": "0b533dd26f487fea88b44fafc15ad2d3",
".git/objects/ca/81c27d81bfded361436f7e1ff869fec06a0b7d": "8dff4ad29124ad5e95e43a6dbf51376b",
".git/objects/d2/e088edd3df4611b144e37027abfe5364452cfb": "1da7f5871890cee0b34ea87164bcefcd",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/02f7f337ba930c90f048336a3f87e5953aeca7": "e7c2d3168586dcdceadde41c5cecdf14",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/009f3a3eb028eb96ff33be096e282416753cb9": "d1453c696cab0bde3e840960bb13ce7c",
".git/objects/e3/2cec29bb6c78f7cbee8e56e408833f10840ef7": "0ff33ca49c1630dbe5818df0d899351c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ef/6545a3bfca5356fa9d828ea3b0bf6aea637f3b": "80a466217535d9b13b5cf7de506090c2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/1fd7195c6eca793f55bd6821d664ed5aa2ccb6": "6ea9269a5680567363b3c46580814434",
".git/objects/f7/3994d8e40e491e863a9587d7350b0d838c0dff": "f9fc05aed093f2cc1171f84938e03edf",
".git/objects/ff/e9fb5dd92124f0818003b8d41201f1d1cd5dcf": "b41486748dcc8969c087c3e01ecec8ed",
".git/refs/heads/gh-pages": "20f4c771eb9599d8e5284d7b13fbb858",
".git/refs/remotes/origin/gh-pages": "20f4c771eb9599d8e5284d7b13fbb858",
".git/refs/remotes/origin/main": "51422a3d006c25d6904a0a0b4e36995f",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b223acbe38b39c3637673e8d1ba7e18f",
"assets/NOTICES": "3739dfa6f1b9221b2c0cdf66d1dfe031",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "6dd0808a860f09aad7bf44b75245a452",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d93a5301a083c6a580c36b08e9481dac",
"/": "d93a5301a083c6a580c36b08e9481dac",
"main.dart.js": "618dc4bb083351c31061a5851fe6187e",
"manifest.json": "5b9da65439840fd2d6fbf0c49fe6985d",
"README.md": "85a09420ad156c5812498bf8a90f5f96",
"version.json": "ae2137c7cd10fc5d6fde7a79c665fd9e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
