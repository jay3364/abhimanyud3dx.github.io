var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/avatar-group/docs.mdx.js"]=function(e){function t(t){for(var l,r,s=t[0],c=t[1],o=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l]);for(m&&m(t);d.length;)d.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],l=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(l=!1)}l&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var l={},n={5:0},i=[];function r(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=l,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(a,l,function(t){return e[t]}.bind(null,l));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var m=c;return i.push([735,0]),a()}({0:function(e,t){e.exports=React},20:function(e,t){e.exports=ReactDOM},21:function(e,t){e.exports=JSBeautify},735:function(e,t,a){"use strict";a.r(t),a.d(t,"getElement",(function(){return P})),a.d(t,"getContents",(function(){return z}));var l=a(0),n=a.n(l),i=a(4),r=a(3),s=a.n(r),c=a(5),o=a.n(c),m=a(51),u=function(e){var t=e.isPrimary,a=e.isInverse,i=e.type,r=function(e,t){switch(e){case"icon":return n.a.createElement(g,null);case"user-initials":return n.a.createElement(E,{isInverse:a});default:return n.a.createElement(b,{imgType:t?"1":"2"})}};return n.a.createElement(l.Fragment,null,n.a.createElement(p,{isPrimary:!0,isInverse:a},r(i,t)),n.a.createElement(p,{isInverse:a},r(i,!1)))};u.defaultProps={type:"image"},u.propTypes={type:s.a.oneOf(["image","icon","user-initials"]),isPrimary:s.a.bool,isInverse:s.a.bool};var d=function(e){return n.a.createElement("span",{className:o()("slds-avatar-group",(t={},a="slds-avatar-group_".concat(e.size),l=e.size,a in t?Object.defineProperty(t,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[a]=l,t))},e.children);var t,a,l};d.defaultProps={children:n.a.createElement(u,null)},d.propTypes={children:s.a.node.isRequired,size:s.a.oneOf(["x-small","small","medium","large"])};var p=function(e){var t=e.children,a=e.isPrimary,l=e.isInverse;return n.a.createElement(m.a,{isGrouped:!0,isPrimary:a,isInverse:l},t)};p.propTypes={children:s.a.node.isRequired,isPrimary:s.a.bool,isInverse:s.a.bool};var b=function(e){var t=e.imgType,a="Person ".concat(t," name");return n.a.createElement("img",{alt:a,src:"/assets/images/avatar".concat(t,".jpg"),title:a})};b.defaultProps={imgType:"1"},b.propTypes={imgType:s.a.oneOf(["1","2"]).isRequired};var g=function(e){return n.a.createElement(m.b,{symbol:"user",isGrouped:!0})},E=function(e){return n.a.createElement(m.c,{isGrouped:!0,isInverse:e.isInverse,title:"Person name",initials:"WW"})};E.propTypes={isInverse:s.a.bool},a(49);var h=a(14),f=(a(15),a(2)),O=(a(26),a(34),[{id:"default",label:"Default",element:n.a.createElement(d,null,n.a.createElement(u,{type:"image"}))}]),j=[{id:"with-icons",label:"With icons",element:n.a.createElement(d,null,n.a.createElement(u,{type:"icon"}))},{id:"with-user-initials",label:"With initials",element:n.a.createElement(d,null,n.a.createElement(u,{type:"user-initials"}))},{id:"with-user-initials-inversed",label:"With initials inversed",demoStyles:"padding: 0.5rem; background: #16325c",storybookStyles:!0,element:n.a.createElement(d,null,n.a.createElement(u,{type:"user-initials",isInverse:!0}))},{id:"with-image-and-icon",label:"With image and icon",element:n.a.createElement(d,null,n.a.createElement(p,{isPrimary:!0},n.a.createElement(b,null)),n.a.createElement(p,null,n.a.createElement(g,null)))},{id:"with-icon-and-user-initials",label:"With icon and user initials",element:n.a.createElement(d,null,n.a.createElement(p,{isPrimary:!0},n.a.createElement(g,null)),n.a.createElement(p,null,n.a.createElement(E,null)))},{id:"with-user-initials-and-image",label:"With user initials and image",element:n.a.createElement(d,null,n.a.createElement(p,{isPrimary:!0},n.a.createElement(E,null)),n.a.createElement(p,null,n.a.createElement(b,null)))},{id:"x-small-image",label:"X-Small",element:n.a.createElement(d,{size:"x-small"},n.a.createElement(u,{type:"image"}))},{id:"small-image",label:"Small",element:n.a.createElement(d,{size:"small"},n.a.createElement(u,{type:"image"}))},{id:"medium-image",label:"Medium",element:n.a.createElement(d,{size:"medium"},n.a.createElement(u,{type:"image"}))},{id:"large-image",label:"Large",element:n.a.createElement(d,{size:"large"},n.a.createElement(u,{type:"image"}))},{id:"x-small-icon",label:"X-Small With icon",element:n.a.createElement(d,{size:"x-small"},n.a.createElement(u,{type:"icon"}))},{id:"small-icon",label:"Small With icon",element:n.a.createElement(d,{size:"small"},n.a.createElement(u,{type:"icon"}))},{id:"medium-icon",label:"Medium With icon",element:n.a.createElement(d,{size:"medium"},n.a.createElement(u,{type:"icon"}))},{id:"large-icon",label:"Large With icon",element:n.a.createElement(d,{size:"large"},n.a.createElement(u,{type:"icon"}))},{id:"x-small-user-initials",label:"X-Small With initials",element:n.a.createElement(d,{size:"x-small"},n.a.createElement(u,{type:"user-initials"}))},{id:"small-user-initials",label:"Small With initials",element:n.a.createElement(d,{size:"small"},n.a.createElement(u,{type:"user-initials"}))},{id:"medium-user-initials",label:"Medium With initials",element:n.a.createElement(d,{size:"medium"},n.a.createElement(u,{type:"user-initials"}))},{id:"large-user-initials",label:"Large With initials",element:n.a.createElement(d,{size:"large"},n.a.createElement(u,{type:"user-initials"}))}],v=a(28),y=a(45),S=a(1),I=i.c.code,_=i.c.h2,W=i.c.h3,w=i.c.h4,x=i.c.p,P=function(){return Object(l.createElement)(i.b,{},Object(l.createElement)("div",{className:"doc lead"},"An avatar group is an element that communicates to the user that there is more than 1 person associated to an item."),Object(l.createElement)(f.a,{exampleOnly:!0},Object(S.f)(O)),_({id:"About-Avatar-Group"},"About Avatar Group"),x({},"The Avatar Group contains two Avatar components with modifying classes. Both Avatars in the group get ",I({},"slds-avatar-grouped")," applied to them. Then, ",I({},"slds-avatar-grouped__primary")," is applied to the first Avatar and ",I({},"slds-avatar-grouped__secondary")," on the second. Avatars of the image variety are preferred within an Avatar Group."),Object(l.createElement)(h.a,{type:"note",header:"Design Guidelines"},Object(l.createElement)("p",null,"Avatar Groups should only be used to represent people and NOT groups of salesforce objects.")),_({id:"Base"},"Base"),Object(l.createElement)(f.a,null,Object(S.f)(O)),W({id:"With-Icon"},"With Icon"),x({},"Icon Avatars can be put into a group. In this case, on the ",I({},"slds-icon_container")," apply the ",I({},"slds-avatar-grouped__icon")," class."),Object(l.createElement)(f.a,null,Object(S.f)(j,"with-icons")),W({id:"With-User-Initials"},"With User Initials"),x({},"User Initials Avatars can be put into a group. In this case, on the ",I({},"<abbr>")," apply the ",I({},"slds-avatar-grouped__initials")," class."),Object(l.createElement)(f.a,null,Object(S.f)(j,"with-user-initials")),w({id:"Inversed"},"Inversed"),x({},"Inversed User Initials Avatars can also be used in a group when on a dark background. To achieve the lighter background for the Avatar, additionally apply the ",I({},"slds-avatar-grouped_inverse")," class along with the ",I({},"slds-avatar-grouped")," class."),Object(l.createElement)(f.a,{demoStyles:Object(S.e)(j,"with-user-initials-inversed")},Object(S.f)(j,"with-user-initials-inversed")),W({id:"With-Mixed-Avatar-types"},"With Mixed Avatar types"),x({},"Avatars of type image, icon, or initials can be used in combination with each other in a group."),Object(l.createElement)(f.a,null,Object(l.createElement)(l.Fragment,null,Object(S.f)(j,"with-image-and-icon"),Object(S.f)(j,"with-icon-and-user-initials"),Object(S.f)(j,"with-user-initials-and-image"))),_({id:"Sizes"},"Sizes"),x({},"Avatar Groups come in 4 different sizes: ",I({},"x-small"),", ",I({},"small"),", ",I({},"medium"),", and ",I({},"large")," by applying a ",I({},"slds-avatar-group_{size}")," modifier class on ",I({},"slds-avatar-group"),". If the size modifier class is not used, ",I({},"medium")," is also the default size."),W({id:"With-Images"},"With Images"),Object(l.createElement)(y.a,null,Object(l.createElement)(v.a,null,Object(l.createElement)("strong",null,"X-Small"),Object(l.createElement)(f.a,{toggleCode:!1},Object(S.f)(j,"x-small-image"))),Object(l.createElement)(v.a,null,Object(l.createElement)("strong",null,"Small"),Object(l.createElement)(f.a,{toggleCode:!1},Object(S.f)(j,"small-image"))),Object(l.createElement)(v.a,null,Object(l.createElement)("strong",null,"Medium"),Object(l.createElement)(f.a,{toggleCode:!1},Object(S.f)(j,"medium-image"))),Object(l.createElement)(v.a,null,Object(l.createElement)("strong",null,"Large"),Object(l.createElement)(f.a,{toggleCode:!1},Object(S.f)(j,"large-image")))),W({id:"With-Icons"},"With Icons"),Object(l.createElement)(y.a,null,Object(l.createElement)(v.a,null,Object(l.createElement)("strong",null,"X-Small"),Object(l.createElement)(f.a,{toggleCode:!1},Object(S.f)(j,"x-small-icon"))),Object(l.createElement)(v.a,null,Object(l.createElement)("strong",null,"Small"),Object(l.createElement)(f.a,{toggleCode:!1},Object(S.f)(j,"small-icon"))),Object(l.createElement)(v.a,null,Object(l.createElement)("strong",null,"Medium"),Object(l.createElement)(f.a,{toggleCode:!1},Object(S.f)(j,"medium-icon"))),Object(l.createElement)(v.a,null,Object(l.createElement)("strong",null,"Large"),Object(l.createElement)(f.a,{toggleCode:!1},Object(S.f)(j,"large-icon")))),W({id:"With-User-Initials-2"},"With User Initials"),Object(l.createElement)(y.a,null,Object(l.createElement)(v.a,null,Object(l.createElement)("strong",null,"X-Small"),Object(l.createElement)(f.a,{toggleCode:!1},Object(S.f)(j,"x-small-user-initials"))),Object(l.createElement)(v.a,null,Object(l.createElement)("strong",null,"Small"),Object(l.createElement)(f.a,{toggleCode:!1},Object(S.f)(j,"small-user-initials"))),Object(l.createElement)(v.a,null,Object(l.createElement)("strong",null,"Medium"),Object(l.createElement)(f.a,{toggleCode:!1},Object(S.f)(j,"medium-user-initials"))),Object(l.createElement)(v.a,null,Object(l.createElement)("strong",null,"Large"),Object(l.createElement)(f.a,{toggleCode:!1},Object(S.f)(j,"large-user-initials")))))},z=function(){return Object(i.a)(P())}}});