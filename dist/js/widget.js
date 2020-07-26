!function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e);var o=function(t,e,n,o,s,r,i,a){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=l):s&&(l=a?function(){s.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:u}}({name:"ValueWidget",props:{meta:{type:Object,default:null},card:{type:Object,default:null},coordinates:{type:Object}},computed:{options:function(){return this.meta?this.meta.options:this.card.options}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("widget",{attrs:{meta:t.meta},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.value,s=o.currentValue,r=o.previousValue,i=o.previousValuePercentage,a=o.isPositive;return[n("div",{staticClass:"flex flex-col h-full justify-between leading-none"},[n("div",{staticClass:"text-base text-80 font-bold"},[t._v("\n                "+t._s(t.options.title)+"\n            ")]),t._v(" "),n("div",{staticClass:"flex flex-col text-4xl justify-center mt-2"},[n("div",{staticClass:"flex items-center whitespace-no-wrap"},[t._v("\n\n                    "+t._s(t.options.prefix)+" "+t._s(s||t.options.no_current_data)+"\n\n                    "),t.options.suffix?n("span",{staticClass:"ml-2 text-sm font-bold text-80"},[t._v("\n                        "+t._s(t.options.suffix)+"\n                    ")]):t._e()])]),t._v(" "),n("div",{staticClass:"flex mt-2 items-center text-80 font-bold"},[0===i&&void 0!==s&&void 0!==r?n("div",[t._v("\n                    "+t._s(t.options.labels["No Increase"])+"\n                ")]):i?[n("tooltip",{staticClass:"cursor-pointer",attrs:{trigger:"hover"}},[n("div",{staticClass:"flex items-center"},[n("svg",a?{staticClass:"rotate-180 text-success fill-current mr-2",attrs:{width:"20",height:"12"}}:{staticClass:"text-danger fill-current mr-2",attrs:{width:"20",height:"12"}},[n("path",{attrs:{d:"M2 3a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1h8a1 1 0 0 0 0-2H3.414L9 4.414l3.293 3.293a1 1 0 0 0 1.414 0l6-6A1 1 0 0 0 18.293.293L13 5.586 9.707 2.293a1 1 0 0 0-1.414 0L2 8.586V3z"}})]),t._v("\n\n                            "+t._s(i)+"%\n                            "+t._s(a?t.options.labels.Increase:t.options.labels.Decrease)+"\n\n                        ")]),t._v(" "),n("tooltip-content",{attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"flex"},[t._v("\n\n                                "+t._s(t.options.labels["Previous Value"])+" "+t._s(t.options.prefix)+" "+t._s(r)+"\n\n                                "),t.options.suffix?n("span",[t._v(t._s(t.options.suffix))]):t._e()])])],1)]:n("div",void 0===s?[t._v("\n                    "+t._s(t.options.labels["No Current Data"])+"\n                ")]:[t._v("\n                    "+t._s(t.options.labels["No Prior Data"])+"\n                ")])],2)])]}}])})}),[],!1,null,null,null).exports;Nova.booting((function(t,e,n){t.component("value-widget",o)}))}]);