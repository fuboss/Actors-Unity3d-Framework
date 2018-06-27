/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1c0dbb119a66758411a663b68e326715"
  },
  {
    "url": "assets/css/0.styles.0bb851bb.css",
    "revision": "b64fe09f1bce3ab7a32d0d1266cbe0a4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.5d28b7b4.js",
    "revision": "3eb5a6693a5b42570e201ac2b6a42062"
  },
  {
    "url": "assets/js/3.45fed496.js",
    "revision": "a52ea5a69bd67b2c304cb79259be3698"
  },
  {
    "url": "assets/js/4.f6529715.js",
    "revision": "a6196aa029910d1005fc673ace4bf78c"
  },
  {
    "url": "assets/js/5.f8de191a.js",
    "revision": "6a61ed3700fcbae28e7a0e292e8c3072"
  },
  {
    "url": "assets/js/6.38cbd466.js",
    "revision": "d99dca47a7849f2d92d504e9af68d3e5"
  },
  {
    "url": "assets/js/7.f28e9f2e.js",
    "revision": "ae7ea26ff973f266f3a1b49ff08b227b"
  },
  {
    "url": "assets/js/8.aa56240c.js",
    "revision": "7b6dbab06ab9aec78a9e552ab973b746"
  },
  {
    "url": "assets/js/9.ae1e6e90.js",
    "revision": "a162817e69387f02271dfeb1e946812c"
  },
  {
    "url": "assets/js/app.bffbe60e.js",
    "revision": "db7f58310a8e73e0825dc727e149f7b9"
  },
  {
    "url": "assets/js/vendors~docsearch.1bc44d2d.js",
    "revision": "5ee8f908ca25d5b90222fdc31bb14ca2"
  },
  {
    "url": "guide/basic-stuff.html",
    "revision": "0038899cc7edf19183b813513f586ca6"
  },
  {
    "url": "guide/index.html",
    "revision": "e9591b3ac1c987a740ae2a9e0123501d"
  },
  {
    "url": "guide/setup.html",
    "revision": "0c7b488d32490980f40b2f52ca79ad6b"
  },
  {
    "url": "index.html",
    "revision": "be19a97ce86c390683a931ebb2314935"
  },
  {
    "url": "logo.png",
    "revision": "f445b8bcb104138446475198b6da540f"
  },
  {
    "url": "ru/guide/basic-stuff.html",
    "revision": "f43464e8fa2ea7fbe0d67c1e98cc1631"
  },
  {
    "url": "ru/guide/index.html",
    "revision": "0f6da711f8b4387095f411db26662cc4"
  },
  {
    "url": "ru/guide/setup.html",
    "revision": "cc1839bf01d4ba917eeea40c124ea0d8"
  },
  {
    "url": "ru/index.html",
    "revision": "e5dba0556feef49f8b24d333ef2b195f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
