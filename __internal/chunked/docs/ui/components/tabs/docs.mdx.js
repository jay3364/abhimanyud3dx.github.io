var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/tabs/docs.mdx.js"]=function(e){function t(t){for(var n,r,i=t[0],o=t[1],c=t[2],m=0,b=[];m<i.length;m++)r=i[m],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&b.push(l[r][0]),l[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(d&&d(t);b.length;)b.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var o=a[i];0!==l[o]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},l={73:0},s=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=o;return s.push([740,0]),a()}({0:function(e,t){e.exports=React},20:function(e,t){e.exports=ReactDOM},21:function(e,t){e.exports=JSBeautify},740:function(e,t,a){"use strict";a.r(t),a.d(t,"getElement",(function(){return ie})),a.d(t,"getContents",(function(){return oe}));var n=a(0),l=a.n(n),s=a(4),r=a(2),i=a(26),o=a(15),c=a(14),d=a(39),m=a(3),b=a.n(m),u=a(5),h=a.n(u),f=a(10),p=a(64),E=a(12);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=function(e){return l.a.createElement("div",{className:"slds-tabs-mobile__group"},e.children)};w.propTypes={children:b.a.node};var T=function(e){return l.a.createElement("div",{className:"slds-tabs-mobile__container"},e.children)};T.propTypes={children:b.a.node};var j=function(e){return l.a.createElement("ul",{className:h()("slds-tabs-mobile",{"slds-hidden":e.isHidden})},e.children)};j.propTypes={children:b.a.node,isHidden:b.a.bool};var I=function(e){return l.a.createElement("li",{className:h()("slds-tabs-mobile__item")},e.children)};I.propTypes={children:b.a.node};var S=function(e){return l.a.createElement(E.a,{isFullWidth:!0,onClick:e.onClick},l.a.createElement("span",{className:"slds-truncate",title:e.summary},e.summary),l.a.createElement(f.a,{className:"slds-icon slds-icon_x-small slds-icon-text-default",sprite:"utility",symbol:"chevronright"}))};S.propTypes={onClick:b.a.func,summary:b.a.string};var x=function(e){return l.a.createElement(p.c,{title:e.title,isAnimated:!0,docked:"left",invoke:"drill-in",isInvokedByTab:!0,isVisible:e.isVisible||!1,handleVisibility:e.hidePanel,hasCenterTitle:!0},e.children||"A panel body accepts any layout or component")};x.propTypes={hidePanel:b.a.func,isVisible:b.a.bool,title:b.a.string,children:b.a.node};var _=function(e){return l.a.createElement(T,null,l.a.createElement(j,{isHidden:!0},l.a.createElement(I,null,l.a.createElement(S,{summary:"Item One"})),l.a.createElement(I,null,l.a.createElement(S,{summary:"Item Two"})),l.a.createElement(I,null,l.a.createElement(S,{summary:"Item Three"}))),l.a.createElement(x,{title:"Item 1 Panel",isVisible:!0},l.a.createElement(j,null,l.a.createElement(I,null,l.a.createElement(S,{summary:"Nested Item One"})),l.a.createElement(I,null,l.a.createElement(S,{summary:"Nested Item Two"})),l.a.createElement(I,null,l.a.createElement(S,{summary:"Nested Item Three"}))),l.a.createElement("div",null," Any content can be here "),l.a.createElement(j,null,l.a.createElement(I,null,l.a.createElement(S,{summary:"Nested Item Four"})),l.a.createElement(I,null,l.a.createElement(S,{summary:"Nested Item Five"})))),l.a.createElement(x,{title:"Item 2 Panel"}),l.a.createElement(x,{title:"Item 3 Panel"}),l.a.createElement(x,{title:"Nested Item 1 Panel"}),l.a.createElement(x,{title:"Nested Item 2 Panel"}),l.a.createElement(x,{title:"Nested Item 3 Panel"}),l.a.createElement(x,{title:"Nested Item 4 Panel"}),l.a.createElement(x,{title:"Nested Item 5 Panel"}))},N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(s,e);var t,a,n=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=O(e);if(t){var l=O(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}(this,a)}}(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=n.call(this,e)).hidePanel=t.hidePanel.bind(g(t)),t.state={visiblePanelIdx:-1},t}return t=s,(a=[{key:"componentDidMount",value:function(){void 0!==this.props.visiblePanelIdx&&-1===this.state.visiblePanelIdx&&this.setState({visiblePanelIdx:this.props.visiblePanelIdx})}},{key:"showPanel",value:function(e){this.props.isStatic||this.setState({visiblePanelIdx:e})}},{key:"hidePanel",value:function(){this.props.isStatic||this.setState({visiblePanelIdx:-1})}},{key:"render",value:function(){var e=this.state.visiblePanelIdx;return l.a.createElement(T,null,l.a.createElement(j,{isHidden:-1!==e},l.a.createElement(I,null,l.a.createElement(S,{summary:"Item One",onClick:this.showPanel.bind(this,0)})),l.a.createElement(I,null,l.a.createElement(S,{summary:"Item Two",onClick:this.showPanel.bind(this,1)})),l.a.createElement(I,null,l.a.createElement(S,{summary:"Item Three",onClick:this.showPanel.bind(this,2)}))),l.a.createElement(x,{title:"Item 1 Panel",isVisible:0===e,hidePanel:this.hidePanel}),l.a.createElement(x,{title:"Item 2 Panel",isVisible:1===e,hidePanel:this.hidePanel}),l.a.createElement(x,{title:"Item 3 Panel",isVisible:2===e,hidePanel:this.hidePanel}))}}])&&function(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),s}(n.Component);N.propTypes={visiblePanelIdx:b.a.number,isStatic:b.a.bool};var C=N,k=a(31),P=a(34),A=a(11),U=a(171),W=a(9),M=a(118),B=a(13),L=function(e){return l.a.createElement(k.a,{selectedIndex:e.selectedIndex},l.a.createElement(k.a.Item,{title:"Item One",id:"tab-default-1"},e.itemOneContent),l.a.createElement(k.a.Item,{title:"Item Two",id:"tab-default-2"},"Item Two Content"),l.a.createElement(k.a.Item,{title:"Item Three",id:"tab-default-3"},"Item Three Content"))};L.propTypes={selectedIndex:b.a.number,itemOneContent:b.a.node},L.defaultProps={selectedIndex:0,itemOneContent:"Item One Content"};var V=function(){return l.a.createElement(L,{itemOneContent:l.a.createElement(M.a,null)})},F=function(){return l.a.createElement("div",{className:"demo-only",style:{height:"12rem"}},l.a.createElement(k.a,null,l.a.createElement(k.a.Item,{title:"Item One",id:"tab-default-1"},l.a.createElement("h2",null,"Item One Content")),l.a.createElement(k.a.Item,{title:"Item Two",id:"tab-default-2"},l.a.createElement("h2",null,"Item Two Content")),l.a.createElement(k.a.Item,{title:"Item Three",id:"tab-default-3"},l.a.createElement("h2",null,"Item Three Content")),l.a.createElement(k.a.Item,{title:"Item Four",id:"tab-default-4"},l.a.createElement("h2",null,"Item Four Content")),l.a.createElement(k.a.Item,{title:"Item Five",id:"tab-default-5"},l.a.createElement("h2",null,"Item Five Content")),l.a.createElement(k.a.ItemOverflow,{title:"More Tabs",id:"tab-default-8"},l.a.createElement(U.a,{label:"More",type:"tabs",flavor:"default",isOpen:!0},l.a.createElement(R,null)))))},D=function(){return l.a.createElement("div",{className:"demo-only",style:{height:"12rem"}},l.a.createElement(k.a,null,l.a.createElement(k.a.Item,{title:"Opportunities",leftIcon:l.a.createElement(P.a,{className:"slds-icon_small",symbol:"opportunity",title:"Opportunities",assistiveText:!1}),id:"tab-default-1"},l.a.createElement("h2",null,"Item One Content")),l.a.createElement(k.a.Item,{title:"Cases",leftIcon:l.a.createElement(P.a,{className:"slds-icon_small",title:"Cases",symbol:"case",assistiveText:!1}),id:"tab-default-2"},l.a.createElement("h2",null,"Item Two Content")),l.a.createElement(k.a.Item,{title:"Products",leftIcon:l.a.createElement(P.a,{className:"slds-icon_small",title:"Products",symbol:"product",assistiveText:!1}),id:"tab-default-3"},l.a.createElement("h2",null,"Item Three Content")),l.a.createElement(k.a.Item,{title:"Price Books",leftIcon:l.a.createElement(P.a,{className:"slds-icon_small",title:"Price Books",symbol:"pricebook",assistiveText:!1}),id:"tab-default-4"},l.a.createElement("h2",null,"Item Four Content")),l.a.createElement(k.a.Item,{title:"Contacts",leftIcon:l.a.createElement(P.a,{className:"slds-icon_small",title:"Contacts",symbol:"contact",assistiveText:!1}),id:"tab-default-5"},l.a.createElement("h2",null,"Item Five Content")),l.a.createElement(k.a.ItemOverflow,{title:"More Tabs",id:"tab-default-8"},l.a.createElement(U.a,{label:"More",type:"tabs",flavor:"default",isOpen:!0},l.a.createElement(H,null)))))},R=function(){return l.a.createElement(W.f,{className:"slds-dropdown_right"},l.a.createElement(W.h,{className:"slds-dropdown_length-with-icon-10"},l.a.createElement(W.g,{title:"Accounts"},"Accounts"),l.a.createElement(W.g,{title:"Approvals"},"Approvals"),l.a.createElement(W.g,{title:"Lead"},"Leads")))},H=function(){return l.a.createElement(W.f,{className:"slds-dropdown_right"},l.a.createElement(W.h,{className:"slds-dropdown_length-with-icon-10"},l.a.createElement(W.g,{title:"Accounts"},l.a.createElement("span",{className:"slds-media slds-media_center"},l.a.createElement("span",{className:"slds-media__figure"},l.a.createElement(P.a,{className:"slds-icon_small",symbol:"account",assistiveText:!1})),l.a.createElement("span",{className:"slds-media__body"},"Accounts"))),l.a.createElement(W.g,{title:"Approvals"},l.a.createElement("span",{className:"slds-media slds-media_center"},l.a.createElement("span",{className:"slds-media__figure"},l.a.createElement(P.a,{className:"slds-icon_small",symbol:"approval",assistiveText:!1})),l.a.createElement("span",{className:"slds-media__body"},"Approvals"))),l.a.createElement(W.g,{title:"Lead"},l.a.createElement("span",{className:"slds-media slds-media_center"},l.a.createElement("span",{className:"slds-media__figure"},l.a.createElement(P.a,{className:"slds-icon_small",symbol:"lead",assistiveText:!1})),l.a.createElement("span",{className:"slds-media__body"},"Leads")))))},z=function(){return l.a.createElement(k.a,{isCard:!0,selectedIndex:0},l.a.createElement(k.a.Item,{title:"Item One",id:"tab-default-1"},l.a.createElement(B.d,null,l.a.createElement(B.c,{symbol:"contact",title:"Card Header",href:"#",action:l.a.createElement("button",{className:"slds-button slds-button_neutral"},"New"),onClick:function(e){return e.preventDefault()}}),l.a.createElement(B.a,{hasPadding:!0},"This is a card inside an ",l.a.createElement("code",{className:"doc"},".slds-tabs_card")," ","to show how styling is removed when cards are nested inside."),l.a.createElement(B.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Contacts"))),l.a.createElement(B.d,null,l.a.createElement(B.c,{symbol:"contact",title:"Card Header",href:"#",action:l.a.createElement("button",{className:"slds-button slds-button_neutral"},"New"),onClick:function(e){return e.preventDefault()}}),l.a.createElement(B.a,{hasPadding:!0},"This is a card inside an ",l.a.createElement("code",{className:"doc"},".slds-tabs_card")," ","to show how styling is removed when cards are nested inside."),l.a.createElement(B.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Contacts"))),l.a.createElement(B.d,{hasCardBoundary:!0},l.a.createElement(B.c,{symbol:"contact",title:"Card Header",href:"#",action:l.a.createElement("button",{className:"slds-button slds-button_neutral"},"New"),onClick:function(e){return e.preventDefault()}}),l.a.createElement(B.a,{hasPadding:!0},"This is a card inside an ",l.a.createElement("code",{className:"doc"},".slds-tabs_card")," ","to illustrate how",l.a.createElement("code",{className:"doc"},".slds-card_boundary")," adds a rounded border when desired."),l.a.createElement(B.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Contacts")))),l.a.createElement(k.a.Item,{title:"Item Two",id:"tab-default-2"},"Item Two Content"),l.a.createElement(k.a.Item,{title:"Item Three",id:"tab-default-3"},"Item Three Content"))},q=function(){return l.a.createElement("div",{className:"demo-only",style:{height:"12rem"}},l.a.createElement(k.a,null,l.a.createElement(k.a.Item,{title:"Item One",id:"tab-default-1"},l.a.createElement("h2",null,"Item One Content")),l.a.createElement(k.a.Item,{title:"Item Two",id:"tab-default-2",rightIcon:l.a.createElement(A.a,{className:"slds-icon_x-small slds-icon-text-error",symbol:"error",title:"This item has an error",assistiveText:"This item has an error"})},l.a.createElement("h2",null,"Item Two Content - Has Error")),l.a.createElement(k.a.Item,{title:"Item Three",id:"tab-default-3"},l.a.createElement("h2",null,"Item Three Content")),l.a.createElement(k.a.Item,{title:"Item Four",id:"tab-default-4"},l.a.createElement("h2",null,"Item Four Content"))))},J=function(){return l.a.createElement(k.a,{size:"medium"},l.a.createElement(k.a.Item,{title:"Item One",id:"tab-default-1"},"Item One Content"),l.a.createElement(k.a.Item,{title:"Item Two",id:"tab-default-2"},"Item Two Content"),l.a.createElement(k.a.Item,{title:"Item Three",id:"tab-default-3"},"Item Three Content"))},G=function(){return l.a.createElement(k.a,{size:"large"},l.a.createElement(k.a.Item,{title:"Item One",id:"tab-default-1"},"Item One Content"),l.a.createElement(k.a.Item,{title:"Item Two",id:"tab-default-2"},"Item Two Content"),l.a.createElement(k.a.Item,{title:"Item Three",id:"tab-default-3"},"Item Three Content"))},K=(k.a,k.a.Item,k.a.Item,k.a.Item,a(48)),Y=a(119),$=a(1),Q=s.c.a,X=s.c.code,Z=s.c.h2,ee=s.c.h3,te=s.c.h4,ae=s.c.h5,ne=s.c.li,le=s.c.p,se=s.c.strong,re=s.c.ul,ie=function(){return Object(n.createElement)(s.b,{},Object(n.createElement)("div",{className:"doc lead"},"Tabs keeps related content in a single container that is shown and hidden through navigation."),Object(n.createElement)(r.a,{exampleOnly:!0,demoStyles:"height: 200px;"},Object(n.createElement)(L,null)),Z({id:"About-Tabs"},"About Tabs"),le({},"The default tab set style encapsulates everything that is underneath it without enclosing it visually. Because tab sets can be nested, pay close attention to the markup. They are constructed to prevent styles from leaking from parent tab sets into child tab sets."),ee({id:"Implementation"},"Implementation"),te({id:"Markup"},"Markup"),le({},"The following markup is crucial for Accessibility"),re({},ne({},"Selected tab’s anchor has ",X({},'aria-selected="true"'),", all other tabs’ anchors have ",X({},'aria-selected="false"')),ne({},"Selected tab’s anchor has ",X({},'tabindex="0"'),", all other tabs have ",X({},'tabindex="-1"')),ne({},"Each tab’s anchor has an ",X({},"aria-controls")," attribute whose value is the id of the associated ",X({},'<div role="tabpanel">')),ne({},"Each tab panel has an ",X({},"aria-labelledby")," attribute whose value is the id of its associated ",X({},'<a role="tab">'))),te({id:"Keyboard-Interactions"},"Keyboard Interactions"),re({},ne({},"Arrow keys, when focus is on a selected tab, cycle selection to the next or previous tab"),ne({},"Tab key, when focus is before the tab list, moves focus to the selected tab"),ne({},"Tab key, when focus is on selected tab, moves focus into the selected tab’s associated tab panel or to the next focusable element on the page if that panel has no focusable elements"),ne({},"Shift+Tab keys, when focus is on first element in a tab panel, moves focus back to the selected tab")),te({id:"JavaScript-Needs"},"JavaScript Needs"),le({},"The active tab has two markup requirements:"),re({},ne({},"The ",X({},".slds-active")," class should be placed on the ",X({},"li")," with ",X({},".slds-tabs_{variant}__item"),"."),ne({},"The corresponding ",X({},".slds-tabs_{variant}__content")," container receives ",X({},".slds-show"),"."),ne({},"In order to achieve the focus state styling, apply ",X({},".slds-has-focus")," to the parent ",X({},"li"),".")),le({},"Inactive ",X({},".slds-tabs_{variant}__content")," containers receive ",X({},".slds-hide"),"."),le({},"When the user clicks a different tab, move the ",X({},".slds-active")," class and toggle the ",X({},".slds-hide"),"/",X({},".slds-show")," classes."),ee({id:"Accessibility"},"Accessibility"),le({},"Tabbed UIs have three parts with specific ",se({},"ARIA")," role requirements:"),re({},ne({},"The tab list, which should have ",X({},'role="tablist"')),ne({},"The tabs in that list, which should each be an ",X({},'<a role="tab">')," anchor wrapped in a ",X({},'<li role="presentation">')," list item"),ne({},"The tab panels, which display each tab’s content and should each have ",X({},'role="tabpanel"'))),Z({id:"Base"},"Base"),Object(n.createElement)(o.a,{title:"Tabs Base"},Object(n.createElement)(r.a,{demoStyles:"height: 200px;"},Object(n.createElement)(L,null))),Z({id:"With-Overflow"},"With Overflow"),le({},"The overflow tab style is provided as a tab item type that acts as a menu component and appears as a tab item. It could contain those tab items that don't all fit in a horizontal orientation."),Object(n.createElement)(o.a,{title:"Tabs Overflowing"},Object(n.createElement)(r.a,{demoStyles:"height: 200px;"},Object(n.createElement)(F,null))),Object(n.createElement)(c.a,{type:"note",header:"Implementation Guidelines"},Object(n.createElement)("p",null,"The ",Object(n.createElement)("code",null,"slds-dropdown__list")," element requires a",Object(n.createElement)("code",null,"slds-dropdown_length-with-icon-10")," class, where 10 is the maximum number of items that will be visible before having to scroll.")),Z({id:"With-Icon"},"With Icon"),le({},"Icons can be used with tabs to help users differentiate among them."),Object(n.createElement)(o.a,{title:"Tabs With Icons"},Object(n.createElement)(r.a,{demoStyles:"height: 200px;"},Object(n.createElement)(D,null))),Z({id:"With-Error"},"With Error"),le({},"An icon can be used to communicate when a tab contains a validation error that needs attention."),Object(n.createElement)(o.a,{title:"Tabs With Icons"},Object(n.createElement)(r.a,{demoStyles:"height: 200px;"},Object(n.createElement)(q,null))),Z({id:"With-Nested-Scoped-Tabs"},"With Nested Scoped Tabs"),le({},"If nesting tabs within tabs, the second set should be rendered as ",Q({href:"/components/scoped-tabs"},"Scoped Tabs")," to help differentiate between tab sets."),Object(n.createElement)(o.a,{title:"Tabs with Nested Scoped Tabs"},Object(n.createElement)(r.a,{demoStyles:"height: 200px;"},Object(n.createElement)(V,null))),Z({id:"Size-Modifiers"},"Size Modifiers"),le({},"Tabs come with three size modifiers: default, medium, and large. Each size step will gradually increase the typography. Add the modifier class ",X({},"slds-tabs_medium")," or ",X({},"slds-tabs_large")," to the ",X({},"slds-tabs_default")," element."),ee({id:"Medium"},"Medium"),Object(n.createElement)(o.a,{title:"Tabs with Medium sizing modifier"},Object(n.createElement)(r.a,null,Object(n.createElement)(J,null))),ee({id:"Large"},"Large"),Object(n.createElement)(o.a,{title:"Tabs with Large sizing modifier"},Object(n.createElement)(r.a,null,Object(n.createElement)(G,null))),Z({id:"Subtabs"},"Subtabs"),le({},"Subtabs are used to provide an additional level of navigation below the ",Q({href:"/components/global-navigation"},"Global Navigation")," Tab Bar. Use these tabs when users need to work across multiple sub-pages within a single navigation item."),Object(n.createElement)(r.a,{demoStyles:"height: 100px;"},Object($.f)(K.e)),ee({id:"Expected-Behavior"},"Expected Behavior"),re({},ne({},"The first tab within the Subtab Bar is always the default content for the parent navigation item. To differentiate this tab from other sub-navigation tabs, this tab cannot be closed."),ne({},"When opening a navigation item for the first time, the default sub-navigation tab can be assumed; don’t show the Subtab Bar.",re({},ne({},"When opening the first additional sub-navigation tab, a new tab bar is inserted containing both the default tab and the new sub-navigation tab."))),ne({},"All subtabs are closed when the parent navigation item is closed."),ne({},"Subtabs can optionally include a tab menu for additional controls.")),ee({id:"With-Focus"},"With Focus"),Object(n.createElement)(r.a,{demoStyles:"height: 100px;"},Object($.f)(K.f,"subtabs-has-focus")),ee({id:"With-Borders"},"With Borders"),le({},"To add borders on either side of the subtab, add the classes ",X({},"slds-border_right")," and ",X({},"slds-border_left"),", as needed, to the ",X({},"<li>")," with class ",X({},"slds-sub-tabs__item"),"."),Object(n.createElement)(r.a,{demoStyles:"height: 100px;"},Object($.f)(K.f,"subtabs-borders")),ee({id:"With-Tab-Actions"},"With Tab Actions"),Object(n.createElement)(r.a,{demoStyles:"height: 100px;"},Object($.f)(K.f,"subtabs-menu")),ee({id:"Status-Options"},"Status Options"),te({id:"Unsaved-Tab"},"Unsaved Tab"),le({},"Unsaved tabs receive a blue asterisk on the tab."),Object(n.createElement)(r.a,{demoStyles:"height: 100px;"},Object($.f)(K.f,"subtabs-unsaved")),Object(n.createElement)(c.a,{header:"Additional Tag for Accessibility",type:"a11y"},Object(n.createElement)("p",null,"In order to inform screen readers of the unsaved state, an ",Object(n.createElement)("code",null,"<abbr>")," tag is used to render the asterisk. The ",Object(n.createElement)("code",null,"title")," attribute and ",Object(n.createElement)("code",null,"aria-label")," should read ",Object(n.createElement)("b",null,'"Tab Not Saved"'),".")),Object(n.createElement)(i.a,{toggleCode:!1},Object(n.createElement)("abbr",{className:"slds-indicator_unsaved",title:"Tab Not Saved","aria-label":"Tab Not Saved"},"*")),te({id:"Communicating-Status-to-Screen-Readers"},"Communicating Status to Screen Readers"),le({},"The following examples of subtab status updates should all employ the same technique to communicate that update to users of assistive technology, who would be otherwise unaware of that status change."),le({},"You should use a single hidden ARIA live region for the entire subtabs block, the contents of which gets updated each time a subtab changes its status. The contents should contain a description of the status level and the name of the tab the status change event occurred in. The markup would look something like:"),Object(n.createElement)(i.a,{toggleCode:!1},Object(n.createElement)("div",{className:"slds-assistive-text","aria-live":"polite"},"...")),le({},"Upon clearing the status on a given tab, you should clear the message from the live region."),te({id:"Unread-Tab"},"Unread Tab"),le({},"Unread tabs receive a red dot on the tab."),Object(n.createElement)(r.a,{demoStyles:"height: 100px;"},Object($.f)(K.f,"unread")),Object(n.createElement)(c.a,{header:"Accessibility",type:"a11y"},Object(n.createElement)("p",null,"In order to inform screen readers of new activity in a tab, 2 things should occur."),Object(n.createElement)("ol",{className:"slds-list_ordered"},Object(n.createElement)("li",null,"The ",Object(n.createElement)("code",null,"title")," attribute and ",Object(n.createElement)("code",null,"aria-label")," on the element that displays the red dot should read ",Object(n.createElement)("b",null,'"New Activity"'),'. This will update the text content of the tab to include the "New Activity" text: "New Activity Chat - Customer".'),Object(n.createElement)("li",null,"The hidden live region as described above, should have its content updated to ",Object(n.createElement)("b",null,'"New Activity in Tab: [Tab Name Here]"')," to alert the user of new activity in that particular subtab."))),Object(n.createElement)(i.a,{toggleCode:!1},Object(n.createElement)("span",{"aria-label":"New Activity",className:"slds-indicator_unread",title:"New Activity",role:"img"})),Object(n.createElement)(i.a,{toggleCode:!1},Object(n.createElement)("div",{className:"slds-assistive-text","aria-live":"polite"},"New activity in Tab: Chat - Customer")),te({id:"Unread-and-Unsaved-Tab"},"Unread and Unsaved Tab"),le({},"Unread and unsaved tabs receive a blue asterisk with a red dot underneath. Be sure to check out the individual sections above for the Accessibility requirements."),Object(n.createElement)(r.a,{demoStyles:"height: 100px;"},Object($.f)(K.f,"unsaved")),Object(n.createElement)(c.a,{header:"Accessibility",type:"a11y"},Object(n.createElement)("p",null,"Don't forget to update the hidden live region with which subtab has new activity")),te({id:"Warning-Tab"},"Warning Tab"),le({},"When you wish to draw attention to a particular subtab because a warning about that tab has occurred, you can use the ",X({},"slds-has-warning")," class to change the background color and introduce a short pulsing animation to draw attention from the user."),le({},"The icon is updated to be the warning icon, to give an extra way to communicate the level of the status without relying on the use of color alone."),le({},"In this example we show that something inside the subtab is about to break a service level agreement in 30 seconds, and we wish to draw the users attention to it to take action."),Object(n.createElement)(r.a,{demoStyles:"height: 100px;"},Object($.f)(K.f,"warning")),Object(n.createElement)(c.a,{header:"Accessibility",type:"a11y"},Object(n.createElement)("p",null,"Update the hidden live region with a message that informs the user of the status level, the warning and the offending subtab"," ",Object(n.createElement)("b",null,"[level]: [message] in tab: [tab_name]"))),Object(n.createElement)(i.a,{toggleCode:!1},Object(n.createElement)("div",{className:"slds-assistive-text","aria-live":"polite"},"Warning: SLA agreement in 30 seconds in tab: Chat - Customer")),ae({id:"Unsaved-Warning-Tab"},"Unsaved Warning Tab"),Object(n.createElement)(r.a,{demoStyles:"height: 100px;"},Object($.f)(K.f,"warning-unsaved")),ae({id:"Unread-Warning-Tab"},"Unread Warning Tab"),Object(n.createElement)(r.a,{demoStyles:"height: 100px;"},Object($.f)(K.f,"warning-unread")),te({id:"Error-Tab"},"Error Tab"),le({},"When you wish to draw attention to a particular subtab because an error or violation has occurred in that tab, you can use the ",X({},"slds-has-error")," class to change the background color and introduce a short pulsing animation to draw attention from the user."),le({},"The icon is updated to be the error icon, to give an extra way to communicate the level of the status without relying on the use of color alone."),le({},"In this example we show that something inside the subtab has broken an SLA agreement, and we wish to draw the users attention to it to take action."),Object(n.createElement)(r.a,{demoStyles:"height: 100px;"},Object($.f)(K.f,"error")),Object(n.createElement)(c.a,{header:"Accessibility",type:"a11y"},Object(n.createElement)("p",null,"Update the hidden live region with a message that informs the user of the status level, the error or violation and the offending subtab"," ",Object(n.createElement)("b",null,"[level]: [message] in tab: [tab_name]"))),Object(n.createElement)(i.a,{toggleCode:!1},Object(n.createElement)("div",{className:"slds-assistive-text","aria-live":"polite"},"Violation: SLA agreement in tab: Chat - Customer")),ae({id:"Unsaved-Error-Tab"},"Unsaved Error Tab"),Object(n.createElement)(r.a,{demoStyles:"height: 100px;"},Object($.f)(K.f,"error-unsaved")),ae({id:"Unread-Error-Tab"},"Unread Error Tab"),Object(n.createElement)(r.a,{demoStyles:"height: 100px;"},Object($.f)(K.f,"error-unread")),te({id:"Success-Tab"},"Success Tab"),le({},"When you wish to draw attention to a particular subtab because a warning or violation has been cleared in the subtab, you can use the ",X({},"slds-has-success")," class to change the background color and introduce a short pulsing animation to draw attention from the user."),le({},"The icon is updated to be the success icon, to give an extra way to communicate the level of the status without relying on the use of color alone."),Object(n.createElement)(r.a,{demoStyles:"height: 100px;"},Object($.f)(K.f,"success")),Object(n.createElement)(c.a,{header:"Accessibility",type:"a11y"},Object(n.createElement)("p",null,"Update the hidden live region with a message that informs the user that the status level has been successfully cleared and the subtab it was cleared from"," ",Object(n.createElement)("b",null,"[level]: [message] in tab: [tab_name]"))),Object(n.createElement)(i.a,{toggleCode:!1},Object(n.createElement)("div",{className:"slds-assistive-text","aria-live":"polite"},"Success: SLA agreement warning cleared in tab: Chat - Customer")),ae({id:"Unsaved-Success-Tab"},"Unsaved Success Tab"),Object(n.createElement)(r.a,{demoStyles:"height: 100px;"},Object($.f)(K.f,"success-unsaved")),ae({id:"Unread-Success-Tab"},"Unread Success Tab"),Object(n.createElement)(r.a,{demoStyles:"height: 100px;"},Object($.f)(K.f,"success-unread")),ee({id:"With-Overflow-Tab"},"With Overflow Tab"),le({},"Overflowing subtabs are contained in a More dropdown."),Object(n.createElement)(r.a,{demoStyles:"height: 100px;"},Object($.f)(K.f,"overflow-tabs")),te({id:"Overflow-Tab-Open"},"Overflow Tab Open"),Object(n.createElement)(r.a,{demoStyles:"height: 200px;"},Object($.f)(K.f,"overflow-tabs-open")),te({id:"Unread-Overflow-Tab"},"Unread Overflow Tab"),Object(n.createElement)(r.a,{demoStyles:"height: 200px;"},Object($.f)(K.f,"unread-overflow-tabs-open")),te({id:"Unsaved-Overflow-Tab"},"Unsaved Overflow Tab"),Object(n.createElement)(r.a,{demoStyles:"height: 200px;"},Object($.f)(K.f,"unsaved-overflow-tabs-open")),te({id:"Unread-and-Unsaved-Overflow-Tab"},"Unread and Unsaved Overflow Tab"),Object(n.createElement)(r.a,{demoStyles:"height: 200px;"},Object($.f)(K.f,"unsaved-unread-overflow-tabs-open")),te({id:"Success-Overflow-Tab"},"Success Overflow Tab"),Object(n.createElement)(r.a,{demoStyles:"height: 200px;"},Object($.f)(K.f,"overflow-tabs-success")),te({id:"Unread-and-Unsaved-Success-Overflow-Tab"},"Unread and Unsaved Success Overflow Tab"),Object(n.createElement)(r.a,{demoStyles:"height: 200px;"},Object($.f)(K.f,"overflow-tabs-success-unread-unsaved")),te({id:"Warning-Overflow-Tab"},"Warning Overflow Tab"),Object(n.createElement)(r.a,{demoStyles:"height: 200px;"},Object($.f)(K.f,"overflow-tabs-warning")),te({id:"Unread-and-Unsaved-Warning-Overflow-Tab"},"Unread and Unsaved Warning Overflow Tab"),Object(n.createElement)(r.a,{demoStyles:"height: 200px;"},Object($.f)(K.f,"overflow-tabs-warning-unread-unsaved")),te({id:"Error-Overflow-Tab"},"Error Overflow Tab"),Object(n.createElement)(r.a,{demoStyles:"height: 200px;"},Object($.f)(K.f,"overflow-tabs-error")),te({id:"Unread-and-Unsaved-Error-Overflow-Tab"},"Unread and Unsaved Error Overflow Tab"),Object(n.createElement)(r.a,{demoStyles:"height: 200px;"},Object($.f)(K.f,"overflow-tabs-error-unread-unsaved")),Z({id:"Vertical"},"Vertical"),le({},"To use vertical tabs, check out the ",Q({href:"../vertical-tabs"},"Vertical Tabs")," component."),Object(n.createElement)(o.a,{title:"Tabs as Vertical"},Y.a),Z({id:"As-a-Card"},"As a Card"),le({},"To style tabs as a card, add the class ",X({},"slds-tabs_card")," to the ",X({},"<div>")," with the class ",X({},"slds-tabs_default"),". See the following example for guidance on styling cards inside the tab panel content."),Object(n.createElement)(o.a,{title:"Tabs as a Card"},Object(n.createElement)(r.a,{demoStyles:"height: 600px;"},Object(n.createElement)(z,null))),Z({id:"On-Mobile"},"On Mobile"),le({},"For mobile, tabs become stacked and act as buttons that drill in to see the tab's content."),le({},"Mobile tabs consist of two parts, the tabs, which are represented via buttons, and their associated panels. When clicking on one of the buttons, the associated panel will slide in from right-to-left."),Object(n.createElement)(c.a,{header:"Focus Management",type:"a11y"},Object(n.createElement)("p",null,"When a user selects a tab button, focus should be placed on the back button of the panel that slides into view. When the user clicks the back button, focus should be placed on the button that was just pressed.")),Object(n.createElement)(o.a,{title:"Tabs Mobile Base"},Object(n.createElement)(r.a,null,Object(n.createElement)(C,null))),ee({id:"Accessibility-2"},"Accessibility"),le({},se({},"Visibility")),re({},ne({},"The panels should have ",X({},"aria-hidden=true")," when they are not visible to ensure keyboard and screen reader users cannot access the content."),ne({},"The tabs should have ",X({},"aria-hidden=true")," when a panel is open to ensure keyboard and screen reader users cannot access the buttons.")),le({},se({},"Focus Management")),le({},"When a user selects a tab button, focus should be placed on the back button of the panel that slides into view. When the user clicks the back button, focus should be placed on the button that was just pressed."),le({},se({},"Assistive Text")),le({},"The title and assistive text for the panel's back button text should read \"Collapse $&123;heading text&125;” so it stays contextual to the tab that was clicked on."),ee({id:"Panel-Open"},"Panel Open"),le({},'When clicking a tab button, the entire view changes and is replaced with the "content" of that tab inside of a panel. This includes a back button on the top left of the screen to go back to the view with the tabs.'),Object(n.createElement)(o.a,{title:"Tabs Mobile Drilled-in"},Object(n.createElement)(r.a,null,Object(n.createElement)(C,{visiblePanelIdx:0,isStatic:!0}))),ee({id:"Adjacent-Tab-Sets"},"Adjacent Tab Sets"),le({},"When there are two or more immediately adjacent tab sets on mobile, use the ",X({},"slds-tabs_mobile__group")," class to adjust the styling to make them appear as if they're part of one master list. Semantically, they are still two separate lists."),Object(n.createElement)(o.a,{title:"Tabs Mobile Adjacent Stacked"},Object(n.createElement)(r.a,null,Object(n.createElement)(w,null,Object(n.createElement)(C,{isStatic:!0}),Object(n.createElement)(C,{isStatic:!0,startingIdx:3})))),ee({id:"Nested-Tab-Sets"},"Nested Tab Sets"),Object(n.createElement)(o.a,{title:"Tabs Mobile Nested"},Object(n.createElement)(r.a,{demoStyles:"height: 300px;"},Object(n.createElement)(_,null))),Z({id:"Styling-Hooks-Overview"},"Styling Hooks Overview"),Object(n.createElement)(d.a,{name:"tabs",type:"component"}))},oe=function(){return Object(s.a)(ie())}}});