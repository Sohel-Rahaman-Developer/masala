<<<<<<< HEAD
if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const t=e=>s(e,n),d={module:{uri:n},exports:r,require:t};a[n]=Promise.all(i.map((e=>d[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"1cae6a740ab4312b5c014c59dfabf9b9"},{url:"/_next/static/chunks/20-68346b1d3524e241.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/23-cc4b2c51f1b29ab5.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/468-02d28d33a5a99259.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/631-8e6e9d32e57e425b.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/648-4d5dcbc675eec6d9.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/69b09407-2e60a5a8f1569f4f.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/714-e85b04f4fa358253.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/870fdd6f-4e3d150cd725398f.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/909-baf47004cd95e8c5.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/970-c2d0380c9f20d240.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/app/_not-found/page-4f6327c0a2923be7.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/app/about/page-64a3ebcafd6b3bf7.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/app/contact-us/page-0f313bbfff7aff40.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/app/gallery/page-f180410c8e486267.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/app/layout-83e255a3861e09ae.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/app/page-72ffd1627d78e018.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/app/product-details/%5Bid%5D/page-796c9d0fbd760ba2.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/app/products/%5Bcategory%5D/page-761625daba84fa48.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/app/products/page-3be1c077c4a3b2b4.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/c15bf2b0-c5f2ab0c4ce668d5.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/fd9d1056-2f8afe028ba66698.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/main-52c1fe8ff9b3ef3b.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/main-app-846711e30de0f0d3.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-1aea20cca8309698.js",revision:"w2UlcACxoyYayGCbPLd2Y"},{url:"/_next/static/css/0d47304ae016090c.css",revision:"0d47304ae016090c"},{url:"/_next/static/css/2967603ba0206157.css",revision:"2967603ba0206157"},{url:"/_next/static/css/3a24c022f69a36a9.css",revision:"3a24c022f69a36a9"},{url:"/_next/static/css/5a56e3c1761e58ad.css",revision:"5a56e3c1761e58ad"},{url:"/_next/static/css/b9f17939095a9703.css",revision:"b9f17939095a9703"},{url:"/_next/static/css/dd766982906d8ab9.css",revision:"dd766982906d8ab9"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fa-brands-400.5d18d427.ttf",revision:"5d18d427"},{url:"/_next/static/media/fa-brands-400.87587a68.woff2",revision:"87587a68"},{url:"/_next/static/media/fa-regular-400.3ccdbd3d.woff2",revision:"3ccdbd3d"},{url:"/_next/static/media/fa-regular-400.81482cd4.ttf",revision:"81482cd4"},{url:"/_next/static/media/fa-solid-900.0b0cc8a6.woff2",revision:"0b0cc8a6"},{url:"/_next/static/media/fa-solid-900.69d3141a.ttf",revision:"69d3141a"},{url:"/_next/static/media/fa-v4compatibility.0e21f5b1.woff2",revision:"0e21f5b1"},{url:"/_next/static/media/fa-v4compatibility.2c070fd2.ttf",revision:"2c070fd2"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/_next/static/w2UlcACxoyYayGCbPLd2Y/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/w2UlcACxoyYayGCbPLd2Y/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/about-images/about.png",revision:"432eb711d83f4b6feb2f92e302cff0a0"},{url:"/about-images/brands.png",revision:"41317adbceafe6469624b2e045d35e68"},{url:"/about-images/masala.png",revision:"62b3e8a8257e5d0738fbc4c541206633"},{url:"/about-images/masala2.png",revision:"ac16410c98d240f5dbe28ced824b3080"},{url:"/banner-images/banner1.png",revision:"2c83c52eaedde1d5855f260c9c46617e"},{url:"/banner-images/banner2.png",revision:"b55ab51e8437685621c6ba4e9e8c84ec"},{url:"/banner-images/banner3.png",revision:"5be752627e253c7594164d5b48c81da9"},{url:"/banner-images/banneru1.png",revision:"c497c1a79c8db9636b216a3df580a455"},{url:"/banner-images/hero1.jpg",revision:"007fcc7fef6327874a146ef7de56d32e"},{url:"/banner-images/hero2.jpg",revision:"235245d8e3d184e952deee819a26ae2e"},{url:"/banner-images/hero4.jpg",revision:"14c799cb6c6a4bdd0eb0be920273d379"},{url:"/banner-images/hero6.jpg",revision:"2955f3ca40e8cd2b49017cdf5773988f"},{url:"/banner-images/image.png",revision:"2a2ecbaf18bead1d979b3b71a2cff578"},{url:"/final-product-images/Soybean-1.jpg",revision:"db493707e1baf95d61657af3fbca0d5f"},{url:"/final-product-images/soya_chunks_all.jpg",revision:"0bff557331bb057f78365ab5a4cc4e34"},{url:"/final-product-images/soya_chunks_sin.jpg",revision:"80504cd2134af1591d02db747d6f0c40"},{url:"/final-product-images/soya_chunks_veg.jpg",revision:"0e3b9329e1e445a022a0c76df2a06a2c"},{url:"/final-product-images/soya_mini_chunks_sin.jpg",revision:"5ecf7f30650abb3c94ba8baed9d45061"},{url:"/final-product-images/soya_mini_chunks_veg.jpg",revision:"4265872c5d0eafda5abe0ca5728a89a9"},{url:"/final-product-images/soya_mini_veg.jpg",revision:"1d7be93d41a91be4f0aae83ccc931815"},{url:"/final-product-images/soyabin2.jpg",revision:"a4a8490e61b70f1f54ef3d60c7bcdfa1"},{url:"/final-product-images/soybean-0.webp",revision:"114d8840d31c7c10178d9fa34acdfd42"},{url:"/icon-192x192.png",revision:"1c1df587db2d37ea3a374fc1410d5182"},{url:"/icon-256x256.png",revision:"c3312f7ed9d3eb8e31c20fdee219d8ab"},{url:"/icon-384x384.png",revision:"58fcb86da678eb2efa9a5f386372dffe"},{url:"/icon-512x512.png",revision:"08c856c4d5c61f447c8df1506dc49ce1"},{url:"/images/breadcrumb.jpg",revision:"40aedc19cee0be2c5ccb73eade761d06"},{url:"/images/breadcrumb2.jpg",revision:"ef97c8926a27e7cc063e06abdf885683"},{url:"/images/breadcrumb3.png",revision:"beae7d72c2ef725477c40d5f1c8c6fa1"},{url:"/images/masala1.png",revision:"dc8990dc9305eb9447b43ddabe56e803"},{url:"/images/masala2.png",revision:"d5ecaf61a7e31cae35d359a1af860c7b"},{url:"/images/masala3.png",revision:"e6b94de07e11564608d6f96589652c8a"},{url:"/images/masala4.png",revision:"9dec5ae1bc132e2e69a9ce87f9d9aca9"},{url:"/images/milmapure.png",revision:"052747552043836ee5c8a5ec0e84ae27"},{url:"/images/ts-gharana-withoutbg.png",revision:"a91e43e9d3d9df3972ede2cfeca36f2d"},{url:"/images/ts-gharana.jpg",revision:"e2c86c05ed768db4bc8a8b031207d190"},{url:"/images/tslogo.png",revision:"6533ca7bd8ccc050d853bb35355333ca"},{url:"/manifest.webmanifest",revision:"b1e23dd7765a75c6d56db5a5d4e7a40b"},{url:"/masala-gallery/rec1.webp",revision:"f90eda94912780489430092502f174ac"},{url:"/masala-gallery/rec2.jpeg",revision:"1a47e7f31736a71636e4a33afae44f26"},{url:"/masala-gallery/rec3.webp",revision:"15125dc41b7b1a46373b4025bcee6b2f"},{url:"/masala-gallery/rec4.webp",revision:"001ffe4e3c1a35eae296d1b4c127fa1c"},{url:"/masala-gallery/rec5.jpg",revision:"14c30abfdd8137cc5eacf8a49d55b094"},{url:"/masala-gallery/sq1.jpeg",revision:"f66ff6defa4762c09f83eac620efd018"},{url:"/masala-gallery/sq2.jpeg",revision:"cd255d6e3009e31b345487882bb02de2"},{url:"/masala-gallery/sq3.jpg",revision:"2f6ccfca9712f897a731f437845d51de"},{url:"/masala-gallery/sq4.jpg",revision:"98e34312eca616c1d37d7bfc5add298e"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/products-list-images/biriyani.png",revision:"5e3b86dbeb4eecee4b060338cd740be6"},{url:"/products-list-images/biriyani2.png",revision:"4c04fed6540fb2681fbb73aa470804cf"},{url:"/products-list-images/category3.png",revision:"4d3acbd74c057b7015b767ca009bac14"},{url:"/products-list-images/chat-masala.png",revision:"88b6d3287fa43dd4d171901ab3b102c1"},{url:"/products-list-images/chat2.png",revision:"f4d589187a9adb01aded62d23db48ae4"},{url:"/products-list-images/garam-masala.png",revision:"2926c33181c9c200598fde62a9099603"},{url:"/products-list-images/garam-masala2.png",revision:"886044470ba66977cb8de54c5e718653"},{url:"/products-list-images/panjabi.png",revision:"09ffcb9d7a9981dd7dee2d87fc1dedf3"},{url:"/products-list-images/panjabi2.png",revision:"9edf35c311bc67176bc7ff7de2ff1f03"},{url:"/products-list-images/pav.png",revision:"46330ab78e397e6d9f5f6eaf0353bce2"},{url:"/products-list-images/pav2.png",revision:"b10dbbea189474d5cae9a69454039e17"},{url:"/products-list-images/pulao.png",revision:"a431f5e246d67fbf0f3f597ab463d5d8"},{url:"/products-list-images/pulao2.png",revision:"b8515e7c67707d4eda69c350b9caeed5"},{url:"/products-list-images/rajma.png",revision:"dedf301dd760fefacb7cb2954cccc3a9"},{url:"/products-list-images/rajma2.png",revision:"5e337a213d01b6004e84d7414a94e978"},{url:"/products-list-images/rasam.png",revision:"5d4d35a5b416f85db9c8c80b56ebc174"},{url:"/products-list-images/rasam2.png",revision:"e21577619deb32416570ed8491905104"},{url:"/products-list-images/sambar.png",revision:"d299ea668a8760561ac1b40ded976143"},{url:"/products-list-images/sambar2.png",revision:"f951c1826ced7415775d773997f1cd35"},{url:"/products-list-images/tanduri.png",revision:"554fb6a28dcbad5c35572c3d304c2e14"},{url:"/products-list-images/tanduri2.png",revision:"720b7294f9927c9a5aa2229590b0730c"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
=======
/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-e43f5367'], (function (workbox) { 'use strict';

  importScripts();
  self.skipWaiting();
  workbox.clientsClaim();
  workbox.registerRoute("/", new workbox.NetworkFirst({
    "cacheName": "start-url",
    plugins: [{
      cacheWillUpdate: async ({
        request,
        response,
        event,
        state
      }) => {
        if (response && response.type === 'opaqueredirect') {
          return new Response(response.body, {
            status: 200,
            statusText: 'OK',
            headers: response.headers
          });
        }
        return response;
      }
    }]
  }), 'GET');
  workbox.registerRoute(/.*/i, new workbox.NetworkOnly({
    "cacheName": "dev",
    plugins: []
  }), 'GET');

}));
//# sourceMappingURL=sw.js.map
>>>>>>> 38087f94514b0032b412d3cc3c3272ff787eea4b
