!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n(2),n(3),n(13),n(14)},function(e,t,n){e.exports=n.p+"favicon.png"},function(e,t){},,,,,,,,,,function(e,t){"use strict";var n=document.querySelector(".markdownIt-TOC"),o=document.querySelector(".js-markdownIt-TOCOriginalContainer"),r=document.querySelector(".js-markdownIt-TOCPlaceholder");n&&o&&r?(o.classList.add("r-minM--4of5"),r.classList.add("r-minM--1of5"),r.appendChild(n)):console.info("No TOC to move")},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(15),i=o(r),u=document.querySelector(".js-Headroom");u&&!function(){var e=u.getBoundingClientRect().height,t=function(){return window.pageYOffset||document.documentElement.scrollTop},n=t(),o=function(){var o=t();return 0>o?!0:(o>n+e?(u.classList.add("js-Headroom--hide"),n=o):n-e>o&&(u.classList.remove("js-Headroom--hide"),n=o),!0)};window.addEventListener("scroll",function(){return(0,i["default"])(o)},!1),window.addEventListener("hashchange",function(){setTimeout(function(){return(0,i["default"])(function(){return u.classList.add("js-Headroom--hide"),!0})},10)},!1),setTimeout(function(){return(0,i["default"])(function(){if(window.location.hash){var t=document.getElementById(window.location.hash.slice(1));t.getBoundingClientRect().top<e&&t.getBoundingClientRect().top>-e&&u.classList.add("js-Headroom--hide")}return!0})},10)}()},function(e,t){"use strict";function n(e){r[i.indexOf(e)]=!e()}function o(e){var t=i.indexOf(e);-1===t&&(i.push(e),t=i.indexOf(e)),r[t]||(r[t]=!0,requestAnimationFrame(function(){return n(e)}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r={},i=[];e.exports=t["default"]}]);