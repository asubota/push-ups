if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const d=e=>n(e,r),l={module:{uri:r},exports:o,require:d};i[r]=Promise.all(s.map((e=>l[e]||d(e)))).then((e=>(t(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BQklhvG9.js",revision:null},{url:"index.html",revision:"d509c715398d24245f650a9e4460e36a"},{url:"registerSW.js",revision:"db1b9d43ad81c73050e37d2eb444fabb"},{url:"manifest.webmanifest",revision:"010c4be834797b9c1a18d67605130209"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
