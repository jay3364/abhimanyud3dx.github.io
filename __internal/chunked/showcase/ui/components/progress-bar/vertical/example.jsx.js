var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/progress-bar/vertical/example.jsx.js"]=function(e){function t(t){for(var n,o,c=t[0],i=t[1],u=t[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);f.length;)f.shift()();return l.push.apply(l,u||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={126:0,6:0,22:0,73:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,128:0,132:0,136:0,141:0,143:0},l=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=i;return l.push([654,0]),r()}({0:function(e,t){e.exports=React},654:function(e,t,r){"use strict";r.r(t),r.d(t,"Context",(function(){return o})),r.d(t,"states",(function(){return c}));var n=r(0),a=r.n(n),l=r(42),o=function(e){return a.a.createElement("div",{style:{height:"200px"}},e.children)};t.default=a.a.createElement(l.a,{value:"25",isVertical:!0});var c=[{id:"zero",label:"0% complete",element:a.a.createElement(l.a,{value:"0",isVertical:!0})},{id:"25",label:"25% complete",element:a.a.createElement(l.a,{value:"25",isVertical:!0})},{id:"50",label:"50% complete",element:a.a.createElement(l.a,{value:"50",isVertical:!0})},{id:"75",label:"75% complete",element:a.a.createElement(l.a,{value:"75",isVertical:!0})},{id:"100",label:"100% complete",element:a.a.createElement(l.a,{value:"100",isVertical:!0})}]}});