var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/vertical-tabs/base/example.jsx.js"]=function(e){function t(t){for(var a,o,s=t[0],c=t[1],i=t[2],m=0,f=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);f.length;)f.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={157:0,6:0,22:0,73:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,128:0,132:0,136:0,141:0,143:0},l=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=c;return l.push([704,0]),n()}({0:function(e,t){e.exports=React},704:function(e,t,n){"use strict";n.r(t),n.d(t,"examples",(function(){return h}));var a=n(0),r=n.n(a),l=n(2),o=n.n(l);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(l,e);var t,n,a=i(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=a.call(this,e)).state={currentTabIndex:0},t}return t=l,(n=[{key:"render",value:function(){var e=this.state.currentTabIndex,t=this.props,n=t.itemFocused,a=t.tabs;return r.a.createElement("div",{className:"slds-vertical-tabs"},r.a.createElement("ul",{className:"slds-vertical-tabs__nav",role:"tablist","aria-orientation":"vertical"},a.map((function(t,a){var l=a!==e||n?"":"slds-is-active",s=a===e&&n?"slds-has-focus":"",c=a===e?0:-1,i=a===e?"true":"false",u="slds-vertical-tabs-".concat(a),m="slds-vertical-tabs-".concat(a,"__nav");return r.a.createElement("li",{className:o()("slds-vertical-tabs__nav-item",l,s),title:t.label,role:"presentation",key:m},r.a.createElement("a",{className:"slds-vertical-tabs__link",href:"#",role:"tab",tabIndex:c,"aria-selected":i,"aria-controls":u,id:m,onClick:function(e){return e.preventDefault()}},r.a.createElement("span",{className:"slds-vertical-tabs__left-icon"},t.leftIcon),r.a.createElement("span",{className:"slds-truncate",title:t.label},t.label),r.a.createElement("span",{className:"slds-vertical-tabs__right-icon"},t.rightIcon)))}))),a.map((function(t,n){var l="slds-vertical-tabs-".concat(n),s=n===e?"slds-show":"slds-hide",c="slds-vertical-tabs-".concat(n,"__nav");return r.a.createElement("div",{className:o()("slds-vertical-tabs__content",s),id:l,role:"tabpanel","aria-labelledby":c,key:l},a[e].content)})))}}])&&function(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(r.a.Component),f=n(25),d=n(8),p=n(41),b=[{label:"Tab 1",content:r.a.createElement("div",{className:"slds-text-longform"},r.a.createElement("h3",{className:"slds-text-heading_medium"},"Tab Title"),r.a.createElement("p",null,"Content for Tab 1"),r.a.createElement("p",null,"Lorem ipsum dolor..."),r.a.createElement("p",null,"Lorem ipsum dolor..."))},{label:"Tab 2",content:r.a.createElement("div",{className:"slds-text-longform"},r.a.createElement("p",null,"Content for Tab 2"))},{label:"Tab 3 has a really long label and can wrap or truncate",content:r.a.createElement("div",{className:"slds-text-longform"},r.a.createElement("p",null,"Content for Tab 3"))}],v=[{label:"Opportunities",leftIcon:r.a.createElement(f.StandardIcon,{symbol:"opportunity",assistiveText:!1,className:"slds-icon_small"}),content:r.a.createElement("div",{className:"slds-text-longform"},r.a.createElement("h3",{className:"slds-text-heading_medium"},"Tab Title"),r.a.createElement("p",null,"Content for Tab 1"),r.a.createElement("p",null,"Lorem ipsum dolor..."),r.a.createElement("p",null,"Lorem ipsum dolor..."))},{label:"Cases",leftIcon:r.a.createElement(f.StandardIcon,{symbol:"case",assistiveText:!1,className:"slds-icon_small"}),rightIcon:r.a.createElement(d.UtilityIcon,{symbol:"error",title:"This tab has an error",assistiveText:"This tab has an error",className:"slds-icon_x-small slds-icon-text-error"}),content:r.a.createElement("div",{className:"slds-text-longform"},r.a.createElement("p",null,"Content for Tab 2"))},{label:"Accounts",leftIcon:r.a.createElement(f.StandardIcon,{symbol:"account",assistiveText:!1,className:"slds-icon_small"}),content:r.a.createElement("div",{className:"slds-text-longform"},r.a.createElement("p",null,"Content for Tab 3"))}],y=[{label:"Opportunities",leftIcon:r.a.createElement(f.StandardIcon,{symbol:"opportunity",assistiveText:!1,className:"slds-icon_small"}),rightIcon:r.a.createElement(p.a,{isInverse:!0},"New"),content:r.a.createElement("div",{className:"slds-text-longform"},r.a.createElement("h3",{className:"slds-text-heading_medium"},"Tab Title"),r.a.createElement("p",null,"Content for Tab 1"),r.a.createElement("p",null,"Lorem ipsum dolor..."),r.a.createElement("p",null,"Lorem ipsum dolor..."))},{label:"Cases",leftIcon:r.a.createElement(f.StandardIcon,{symbol:"case",assistiveText:!1,className:"slds-icon_small"}),rightIcon:r.a.createElement(p.a,{isInverse:!0},"New"),content:r.a.createElement("div",{className:"slds-text-longform"},r.a.createElement("p",null,"Content for Tab 2"))},{label:"Accounts",leftIcon:r.a.createElement(f.StandardIcon,{symbol:"account",assistiveText:!1,className:"slds-icon_small"}),content:r.a.createElement("div",{className:"slds-text-longform"},r.a.createElement("p",null,"Content for Tab 3"))}],h=(t.default=r.a.createElement(m,{tabs:b}),[{id:"with-icons",label:"With icons",element:r.a.createElement(m,{tabs:v})},{id:"with-badges",label:"With badges",element:r.a.createElement(m,{tabs:y})},{id:"item-focus",label:"Item Focus",element:r.a.createElement(m,{itemFocused:!0,tabs:b})}])}});