(()=>{"use strict";var e,t={858:(e,t,r)=>{const n=Vue;var o=["innerHTML"],a={class:"text-xl value-widget__title"},i={class:"text-2xl font-bold value-widget__value"};const c={props:{card:Object}};var l=r(379),d=r.n(l),s=r(169),u={insert:"head",singleton:!1};d()(s.Z,u);s.Z.locals;const f=(0,r(744).Z)(c,[["render",function(e,t,r,c,l,d){var s=(0,n.resolveComponent)("Icon"),u=(0,n.resolveComponent)("LoadingView"),f=(0,n.resolveComponent)("Card");return(0,n.openBlock)(),(0,n.createBlock)(f,{class:"value-widget flex justify-center py-4",style:(0,n.normalizeStyle)({"--background-color-dark":r.card.backgroundColorDark,"--text-color-dark":r.card.textColorDark,"--background-color-light":r.card.backgroundColorLight,"--text-color-light":r.card.textColorLight})},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(u,{loading:e.isLoading,class:"flex flex-col justify-center items-center"},{default:(0,n.withCtx)((function(){return[r.card.icon.trim().startsWith("<svg")?((0,n.openBlock)(),(0,n.createElementBlock)("div",{key:0,innerHTML:r.card.icon},null,8,o)):((0,n.openBlock)(),(0,n.createBlock)(s,{key:1,type:r.card.icon},null,8,["type"])),(0,n.createElementVNode)("div",a,(0,n.toDisplayString)(r.card.title),1),(0,n.createElementVNode)("div",i,(0,n.toDisplayString)(r.card.value),1)]})),_:1},8,["loading"])]})),_:1},8,["style"])}]]);Nova.booting((function(e){e.component("value-widget",f)}))},169:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".dark .value-widget{background-color:var(--background-color-dark,rgb(var(--colors-gray-800)));color:var(--text-color-dark)}.value-widget{background-color:var(--background-color-light,#fff);color:var(--text-color-light)}.value-widget svg{height:3.5rem;margin-bottom:.25rem;width:3.5rem}",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},962:()=>{},379:(e,t,r)=>{var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function c(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function l(e,t){for(var r={},n=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],d=r[l]||0,s="".concat(l," ").concat(d);r[l]=d+1;var u=c(s),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:s,updater:h(f,t),references:1}),n.push(s)}return n}function d(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function v(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,g=0;function h(e,t){var r,n,o;if(t.singleton){var a=g++;r=p||(p=d(t)),n=f.bind(null,r,a,!1),o=f.bind(null,r,a,!0)}else r=d(t),n=v.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=c(r[n]);i[o].references--}for(var a=l(e,t),d=0;d<r.length;d++){var s=c(r[d]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}r=a}}}},744:(e,t)=>{t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,n]of t)r[e]=n;return r}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={id:e,exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){for(var[r,o,a]=e[s],c=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(c=!1,a<i&&(i=a));if(c){e.splice(s--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={440:0,458:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,c,l]=r,d=0;if(i.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var s=l(n)}for(t&&t(r);d<i.length;d++)a=i[d],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self.webpackChunkdigital_creative_value_widget=self.webpackChunkdigital_creative_value_widget||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,n.O(void 0,[458],(()=>n(858)));var o=n.O(void 0,[458],(()=>n(962)));o=n.O(o)})();