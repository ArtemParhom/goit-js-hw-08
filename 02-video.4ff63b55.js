!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,y=Math.min,m=function(){return s.Date.now()};function g(e,t,n){var i,r,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=i,o=r;return i=r=void 0,l=t,f=e.apply(o,n)}function j(e){return l=e,a=setTimeout(w,t),d?g(e):f}function T(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function w(){var e=m();if(T(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-c);return s?y(n,u-(e-l)):n}(e))}function O(e){return a=void 0,v&&i?g(e):(i=r=void 0,f)}function x(){var e=m(),n=T(e);if(i=arguments,r=this,c=e,n){if(void 0===a)return j(c);if(s)return a=setTimeout(w,t),g(c)}return void 0===a&&(a=setTimeout(w,t)),f}return t=h(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?p(h(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=r=a=void 0},x.flush=function(){return void 0===a?f:O(m())},x}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=f.test(t);return o||a.test(t)?c(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};var j=document.querySelector("iframe"),T=new Vimeo.Player(j);T.on("play",(function(){console.log("played the video!")})),T.getVideoTitle().then((function(e){console.log("title:",e)}));T.on("timeupdate",e(t)((function(e){localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3)),T.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.4ff63b55.js.map
