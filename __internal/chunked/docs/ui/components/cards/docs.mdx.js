var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/cards/docs.mdx.js"]=function(e){function t(t){for(var n,c,r=t[0],i=t[1],d=t[2],m=0,u=[];m<r.length;m++)c=r[m],Object.prototype.hasOwnProperty.call(l,c)&&l[c]&&u.push(l[c][0]),l[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(o&&o(t);u.length;)u.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==l[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},l={14:0},s=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var o=i;return s.push([725,0]),a()}({0:function(e,t){e.exports=React},20:function(e,t){e.exports=ReactDOM},21:function(e,t){e.exports=JSBeautify},725:function(e,t,a){"use strict";a.r(t),a.d(t,"getElement",(function(){return G})),a.d(t,"getContents",(function(){return K}));var n=a(0),l=a.n(n),s=a(4),c=a(2),r=(a(26),a(15)),i=a(14),d=a(13),o=a(152),m=a(82),u=a(34),h=a(6),b=a(54),E=a(65),f=a(32),p=l.a.createElement("button",{className:"slds-button slds-button_neutral"},"New"),y=l.a.createElement(h.s,{isFixedLayout:!0,isBordered:!0,hasNoRowHover:!0,hasCellBuffer:!0,type:"advanced",ariaLabel:"Example table in a Card"},l.a.createElement(h.q,null,l.a.createElement(h.r,null,l.a.createElement(h.c,null,l.a.createElement(h.b,{columnName:"Name"})),l.a.createElement(h.c,null,l.a.createElement(h.b,{columnName:"Company"})),l.a.createElement(h.c,null,l.a.createElement(h.b,{columnName:"Title"})),l.a.createElement(h.c,null,l.a.createElement(h.b,{columnName:"Email"})))),l.a.createElement(h.o,null,l.a.createElement(h.p,null,l.a.createElement(h.m,null,l.a.createElement(h.j,{cellLink:!0,cellText:"Amy Choi"})),l.a.createElement(h.t,{type:"advanced"},l.a.createElement(h.j,{cellText:"Company One"})),l.a.createElement(h.t,{type:"advanced"},l.a.createElement(h.j,{cellText:"Director of Operations"})),l.a.createElement(h.t,{type:"advanced"},l.a.createElement(h.j,{cellText:"adam@company.com"}))))),g=l.a.createElement("ul",{className:"slds-grid slds-wrap slds-grid_pull-padded"},l.a.createElement("li",{className:"slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3"},l.a.createElement(m.a,{actions:!0,className:"slds-card__tile",media:l.a.createElement(u.a,{className:"slds-icon_small",symbol:"contact",assistiveText:"Contact"}),title:"Related Record Title 1"})),l.a.createElement("li",{className:"slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3"},l.a.createElement(m.a,{actions:!0,className:"slds-card__tile",media:l.a.createElement(u.a,{className:"slds-icon_small",symbol:"contact",assistiveText:"Contact"}),title:"Related Record Title 1"})),l.a.createElement("li",{className:"slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3"},l.a.createElement(m.a,{actions:!0,className:"slds-card__tile",media:l.a.createElement(u.a,{className:"slds-icon_small",symbol:"contact",assistiveText:"Contact"}),title:"Related Record Title 1"}))),w=[{id:"default",label:"Default",element:l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Accounts",href:!0,symbol:"account",action:l.a.createElement("button",{className:"slds-button slds-button_neutral"},"New")}),l.a.createElement(d.a,{hasPadding:!0},"Anything can go into the card body"),l.a.createElement(d.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Accounts")))}],v=[{id:"empty",label:"Empty",element:l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Card Header",href:!0,symbol:"contact",action:l.a.createElement("button",{className:"slds-button slds-button_neutral"},"New")}),l.a.createElement(d.a,null),l.a.createElement(d.b,null))},{id:"empty-illustration",label:"Empty with illustration",element:l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Tasks",href:!0,symbol:"task"}),l.a.createElement(d.a,{hasPadding:!0},l.a.createElement(f.a,null,l.a.createElement(E.d,null),l.a.createElement(f.c,{heading:"No new tasks",message:"Nothing needs your attention right now. Check back later."}))))},{id:"loading",label:"Loading",element:l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Tasks",href:!0,symbol:"task"}),l.a.createElement(d.a,{hasPadding:!0},l.a.createElement(b.a,{className:"slds-spinner_small"})))}],_=[{id:"related-list-table",label:"With data-table",element:l.a.createElement((function(e){return l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Contacts (1)",href:!0,symbol:"contact",action:p}),l.a.createElement(d.a,null,y),l.a.createElement(d.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Contacts")))}),null)},{id:"related-list-tiles",label:"With tiles",element:l.a.createElement((function(e){return l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Contacts (3)",href:!0,symbol:"contact",action:p}),l.a.createElement(d.a,{hasPadding:!0},g),l.a.createElement(d.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Contacts")))}),null)},{id:"nested-cards",label:"Nested cards",element:l.a.createElement((function(e){return l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Outer Card Header",href:!0,symbol:"contact",action:p}),l.a.createElement(d.a,{hasPadding:!0},l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Contacts",href:!0,symbol:"contact",action:p}),l.a.createElement(d.a,{hasPadding:!0},"This is a card inside an `slds-card` to show how styling is removed when cards are nested inside each other."),l.a.createElement(d.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Contacts"))),l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Contacts",href:!0,symbol:"contact",action:p}),l.a.createElement(d.a,{hasPadding:!0},"This is a card inside an `slds-card` to show how styling is removed when cards are nested inside each other."),l.a.createElement(d.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Contacts"))),l.a.createElement(d.d,{hasCardBoundary:!0},l.a.createElement(d.c,{title:"Contacts",href:!0,symbol:"contact",action:p}),l.a.createElement(d.a,{hasPadding:!0},"This is a card inside an `slds-card` to illustrate how `slds-card_boundary` adds a rounded border when desired."),l.a.createElement(d.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Contacts"))),l.a.createElement(d.d,{hasCardBoundary:!0},l.a.createElement(d.c,{title:"Contacts",href:!0,symbol:"contact",action:p}),l.a.createElement(d.a,{hasPadding:!0},"This is a card inside an `slds-card` to illustrate how `slds-card_boundary` adds a rounded border when desired."),l.a.createElement(d.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Contacts")))))}),null)},{id:"with-no-header",label:"With no header",element:l.a.createElement(d.d,null,l.a.createElement(d.a,{hasPadding:!0},"Anything can go into the card body"),l.a.createElement(d.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Accounts")))},{id:"visibly-hidden-card-header",label:"Visibly hidden card header",element:l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Card Header",href:!0,className:"slds-assistive-text"}),l.a.createElement(d.a,{hasPadding:!0},"Anything can go into the card body"),l.a.createElement(d.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Accounts")))},{id:"body-has-no-padding",label:"Body with no padding",element:l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Accounts",href:!0,symbol:"account"}),l.a.createElement(d.a,null,"Card Body"))},{id:"body-has-padding",label:"Body with padding",element:l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Accounts",href:!0,symbol:"account"}),l.a.createElement(d.a,{hasPadding:!0},"Card Body with Padding"))},{id:"has-no-footer",label:"No footer",element:l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Accounts",href:!0,showIcon:!0,symbol:"account"}),l.a.createElement(d.a,{hasPadding:!0},"Card Body"),l.a.createElement(d.b,null))},{id:"has-footer",label:"Has footer",element:l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Accounts",href:!0,showIcon:!0,symbol:"account"}),l.a.createElement(d.a,{hasPadding:!0},"Card Body"),l.a.createElement(d.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Accounts")))},{id:"nested-no-boundary",label:"Nested with no boundary",element:l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Outer Card Header",href:!0,symbol:"account"}),l.a.createElement(d.a,{hasPadding:!0},l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Card Header",href:!0,symbol:"account"}),l.a.createElement(d.a,{hasPadding:!0},"This is a nested card with no styling (default)"),l.a.createElement(d.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Accounts")))),l.a.createElement(d.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Accounts")))},{id:"nested-with-boundary",label:"Nested with boundary",element:l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Outer Card Header",href:!0,symbol:"account"}),l.a.createElement(d.a,{hasPadding:!0},l.a.createElement(d.d,{hasCardBoundary:!0},l.a.createElement(d.c,{title:"Card Header",href:!0,symbol:"account"}),l.a.createElement(d.a,{hasPadding:!0},"This is a card inside an `slds-card` to illustrate how `slds-card_boundary` adds a rounded border when desired."),l.a.createElement(d.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Accounts")))),l.a.createElement(d.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Accounts")))},{id:"with-long-truncated-title",label:"With long truncated title",demoStyles:"max-width: 360px;",storybookStyles:!0,element:l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Card Header Title With Exceptionally Long Title",href:!0,symbol:"account",action:l.a.createElement("button",{className:"slds-button slds-button_neutral"},"New")}),l.a.createElement(d.a,{hasPadding:!0},"Anything can go into the card body"),l.a.createElement(d.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Accounts")))},{id:"styling-hooks",label:"Styling Hooks",demoStyles:"\n      --slds-c-card-color-background: #f3f3f3;\n      --slds-c-card-radius-border: 8px;\n      --slds-c-card-shadow: rgba(0,0,0,.15) 0 4px 8px, rgba(0,0,0,.05) 0 2px 4px;\n      --slds-c-card-spacing-block-start: 1.5rem;\n      --slds-c-card-spacing-block-end: 0.5rem;\n      --slds-c-card-spacing-inline: 1rem;\n      --slds-c-card-title-font-size: 1.5rem;\n      --slds-c-card-header-spacing-block-start: 0;\n      --slds-c-card-header-spacing-inline-start: 1.5rem;\n      --slds-c-card-header-spacing-inline-end: 1.5rem;\n      --slds-c-card-body-spacing-inline-start: 1.5rem;\n      --slds-c-card-body-spacing-inline-end: 1.5rem;\n      --slds-c-card-body-spacing-block-end: 1rem;\n      --slds-c-card-footer-spacing-block-start: 0.5rem;\n      --slds-c-card-footer-spacing-block-end: 0;\n      --slds-c-card-footer-spacing-inline-start: 1.5rem;\n      --slds-c-card-footer-spacing-inline-end: 1.5rem;\n      --slds-c-card-footer-font-size: 0.75rem;\n      --slds-c-card-footer-text-align: right;\n    ",storybookStyles:!0,element:l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Accounts",href:!0,symbol:"account",action:l.a.createElement("button",{className:"slds-button slds-button_neutral"},"New")}),l.a.createElement(d.a,null,"Anything can go into the card body"),l.a.createElement(d.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Accounts")))}],O=a(10),j=a(7),N=a(59),x=a(5),C=a.n(x),A=function(e){return l.a.createElement("div",{className:"slds-einstein-header__actions"},l.a.createElement(N.a,null,l.a.createElement(j.b,{className:"slds-button_icon-border-filled",symbol:"email",assistiveText:"Email",title:"Email","aria-pressed":"false"}),l.a.createElement(j.b,{className:"slds-button_icon-border-filled",symbol:"edit",assistiveText:"Edit",title:"Edit","aria-pressed":"false"})))},T=function(e){return l.a.createElement("div",{className:C()("slds-grid slds-einstein-header",e.className)},e.closeButton?l.a.createElement(j.b,{className:C()("slds-button_icon-small slds-float_right slds-popover__close",e.inverse?"slds-button_icon-inverse":"slds-button_icon"),symbol:"close",assistiveText:"Close dialog",title:"Close dialog"}):null,l.a.createElement("header",{className:C()("slds-media slds-media_center slds-has-flexi-truncate")},l.a.createElement("div",{className:"slds-grid slds-grid_vertical-align-center slds-size_3-of-4 slds-medium-size_2-of-3"},e.symbol?l.a.createElement("div",{className:"slds-media__figure"},l.a.createElement("span",{className:"slds-icon_container slds-icon-utility-"+e.symbol},l.a.createElement(O.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:e.symbol}))):null,l.a.createElement("div",{className:"slds-media__body"},l.a.createElement("h2",{className:"slds-truncate",id:e.headingId,title:e.headerTitle||"Einstein"},e.hasLink?l.a.createElement("a",{href:"#",className:"slds-card__header-link",title:e.headerTitle||"Einstein",onClick:function(e){return e.preventDefault()}},l.a.createElement("span",{className:"slds-text-heading_small"},e.headerTitle||"Einstein")):l.a.createElement("span",{className:"slds-text-heading_small"},e.headerTitle||"Einstein")))),l.a.createElement("div",{className:"slds-einstein-header__figure slds-size_1-of-4 slds-medium-size_1-of-3"})),e.actions&&l.a.createElement(A,null))},k=function(e){return l.a.createElement(d.d,null,l.a.createElement(T,{className:"slds-card__header",headerTitle:"Einstein (10+)",hasLink:!0,actions:e.hasActions,symbol:e.hasIcon&&"salesforce1"}),l.a.createElement(d.a,{hasPadding:!0},"Card Body"),l.a.createElement(d.b,null,"View All"," ",l.a.createElement("span",{className:"slds-assistive-text"},"Einstein Recommendations")))},S=l.a.createElement(k,null),W=[{id:"einstein-with-icon",label:"Einstein card - with icon",element:l.a.createElement(k,{hasIcon:!0})},{id:"einstein-with-icon-and-actions",label:"Einstein card - with icon and actions",element:l.a.createElement(k,{hasIcon:!0,hasActions:!0})}],P=a(31),D=[{id:"default",label:"Default",element:l.a.createElement("div",{className:"slds-card-wrapper"},l.a.createElement(d.d,null,l.a.createElement(d.c,{title:"Contacts",href:!0,symbol:"contact",action:l.a.createElement("button",{className:"slds-button slds-button_neutral"},"New")}),l.a.createElement(d.a,null,"This is a card inside an `slds-card-wrapper` to show how styling is removed when cards are nested inside."),l.a.createElement(d.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Contacts"))),l.a.createElement(d.d,{hasCardBoundary:!0},l.a.createElement(d.c,{title:"Contacts",href:!0,symbol:"contact",action:l.a.createElement("button",{className:"slds-button slds-button_neutral"},"New")}),l.a.createElement(d.a,{hasPadding:!0},"This is a card inside an `slds-card-wrapper` to illustrate how `slds-card_boundary` adds a rounded border when desired."),l.a.createElement(d.b,null,"View All ",l.a.createElement("span",{className:"slds-assistive-text"},"Contacts"))))}],V=(P.a,P.a.Item,d.d,d.c,d.a,d.b,d.d,d.c,d.a,d.b,P.a.Item,P.a.Item,P.a,P.a.Item,d.d,d.c,d.a,d.b,d.d,d.c,d.a,d.b,P.a.Item,P.a.Item,a(1)),B=a(37),I=a(39),L=s.c.a,z=s.c.code,H=s.c.em,M=s.c.h2,R=s.c.h3,F=s.c.h4,J=s.c.h5,q=s.c.p,Y=s.c.strong,G=function(){return Object(n.createElement)(s.b,{},Object(n.createElement)("div",{className:"lead doc"},"Cards are used to apply a container around a related grouping of information."),Object(n.createElement)(c.a,{exampleOnly:!0},Object(V.f)(w)),M({id:"About-Cards"},"About Cards"),q({},"To initialize a card, apply the ",z({},"slds-card")," class to an ",z({},"<article>")," element."),R({id:"Accessibility"},"Accessibility"),q({},"Cards should use an underlying ",z({},"<article>")," element to maintain usability for some screen reader users."),q({},"If the card header icon is redundant with the card header text, the assistive text is not needed."),q({},"The card heading level should follow the DOM structure of the page. We are using ",z({},"h2")," as the default heading level for examples, but real world use will dictate the correct level based on the surrounding elements."),R({id:"Mobile"},"Mobile"),Object(n.createElement)(B.a,{patternSpecificText:"cards will have bolded header title text, no top border, and no rounded corners"}),Object(n.createElement)(c.a,{frameOnly:!0,frameTitle:"Example mobile styles for cards"},Object(V.f)(w)),M({id:"Base-Card-Structure"},"Base Card Structure"),q({},"A card is made up of 3 sections, a header, a body, and a footer. The header and footer have limitations, but the body section can accommodate any layout of related information."),Object(n.createElement)(c.a,null,Object(V.f)(w)),R({id:"Header"},"Header"),q({},"The card header can have an icon, a title and actions. The icon and title are located on the left, while the actions row is located on the right side of the card header."),Object(n.createElement)(r.a,{title:"Cards Header"},Object(n.createElement)(c.a,null,Object(n.createElement)(d.d,null,Object(n.createElement)(d.c,{title:"Accounts",href:"#",onClick:function(e){return e.preventDefault()},symbol:"account"})))),F({id:"With-no-header"},"With no header"),q({},"The card header can be removed from the HTML to prevent the card header from displaying."),Object(n.createElement)(c.a,null,Object(V.f)(_,"with-no-header")),q({},"Alternatively, the card header can be visually hidden but still accessible to screen readers by applying ",z({},"slds-assistive-text")," to the ",z({},"slds-card__header")," element."),Object(n.createElement)(c.a,null,Object(V.f)(_,"visibly-hidden-card-header")),F({id:"Actions-row"},"Actions row"),q({},"The actions row of a card header typically accommodates a single action for the object a user is working with, such as creating, editing, or deleting. If there are more than one action, an action overflow menu would be used instead."),J({id:"Single-action"},"Single action"),Object(n.createElement)(r.a,{title:"Cards Single Action"},Object(n.createElement)(c.a,null,Object(n.createElement)(d.d,null,Object(n.createElement)(d.c,{title:"Accounts",href:"#",onClick:function(e){return e.preventDefault()},symbol:"account",action:Object(n.createElement)("button",{className:"slds-button slds-button_neutral"},"New")})))),J({id:"Multiple-actions"},"Multiple actions"),Object(n.createElement)(r.a,{title:"Cards Multiple Actions"},Object(n.createElement)(c.a,{demoStyles:"height: 10rem;"},Object(n.createElement)(d.d,null,Object(n.createElement)(d.c,{title:"Accounts",href:"#",onClick:function(e){return e.preventDefault()},symbol:"account",action:Object(n.createElement)(o.a,{position:"right"})})))),R({id:"Body"},"Body"),q({},"The card body accommodates any layout or design, as long as its a grouping of related information."),Object(n.createElement)(i.a,{type:"note",header:"Styling Note"},Object(n.createElement)("p",null,"By default, the body of a card does not have padding. Components inside the card will be flush to the left and right edges of the card. If you need to add padding, use the ",Object(n.createElement)("code",null,"slds-card__body_inner")," class on the ",Object(n.createElement)("code",null,"slds-card__body")," element.")),F({id:"Default-without-padding"},"Default without padding"),q({},"For an example of when to use the default behavior, see the ",L({href:"/components/cards/#With-a-Data-Table"},"Data Table example"),"."),Object(n.createElement)(c.a,null,Object(V.f)(_,"body-has-no-padding")),F({id:"With-padding"},"With padding"),q({},"For an example of when to use the ",z({},"slds-card__body_inner")," class, see the ",L({href:"/components/cards/#With-Tiles"},"Tiles example"),"."),Object(n.createElement)(c.a,null,Object(V.f)(_,"body-has-padding")),R({id:"Footer"},"Footer"),q({},"The card footer is optional and should ",H({},Y({},"only")),' have a "View All" link that takes a user to the object list view.'),Object(n.createElement)(i.a,{type:"a11y",header:"Accessibility Note"},Object(n.createElement)("p",null,"When present, the footer includes hidden assistive text to give screen reader users context about which entity they will be viewing.")),Object(n.createElement)(i.a,{type:"note",header:"Implementation Note"},Object(n.createElement)("p",null,"The examples in this documentation use the ",Object(n.createElement)("code",null,"slds-card__footer-action")," class on the footer link ",Object(n.createElement)("code",null,"<a>")," to force the footer's click target to span the entire width of the card. Simply remove this class if not needed.")),F({id:"With-no-footer"},"With no footer"),Object(n.createElement)(c.a,null,Object(V.f)(_,"has-no-footer")),F({id:"With-a-footer"},"With a footer"),Object(n.createElement)(c.a,null,Object(V.f)(_,"has-footer")),M({id:"Examples"},"Examples"),R({id:"Empty"},"Empty"),q({},"When a card doesn't have any data, it is represented with the body and footer collapsed by default."),F({id:"Collapsed"},"Collapsed"),Object(n.createElement)(c.a,null,Object(V.f)(v,"empty")),F({id:"With-Illustration"},"With Illustration"),q({},"Alternatively, a card can be represented with no data by using an ",L({href:"/components/illustration"},"illustration")," in the card body."),Object(n.createElement)(c.a,null,Object(V.f)(v,"empty-illustration")),R({id:"Loading"},"Loading"),q({},"When a card instantiates and is loading, we want to provide feedback to the user by display a spinner. Once the data has loaded, the spinner can be removed from the card component."),Object(n.createElement)(c.a,null,Object(V.f)(v,"loading")),R({id:"With-a-Data-Table"},"With a Data Table"),q({},"Placing a data table inside of an ",z({},"slds-card__body")," is an example of when to utilize the default behavior of a card body, since no padding is applied."),Object(n.createElement)(c.a,null,Object(V.f)(_,"related-list-table")),R({id:"With-Tiles"},"With Tiles"),q({},"Placing contact tiles inside of an ",z({},"slds-card__body")," is an example of using ",z({},"slds-card__body_inner")," to apply additional padding to the card body content."),Object(n.createElement)(c.a,null,Object(V.f)(_,"related-list-tiles")),Object(n.createElement)(B.b,{docsLink:"#Mobile",header:"Mobile context changes",elementName:"cards with tiles"}),Object(n.createElement)(c.a,{frameOnly:!0,frameTitle:"Example mobile styles for cards with tiles"},Object(V.f)(_,"related-list-tiles")),M({id:"Layout"},"Layout"),R({id:"Nested-Cards"},"Nested Cards"),q({},"When a card is located inside of another card body, we remove the drop shadow and border of the nested cards. You can opt into adding the border back by applying ",z({},"slds-card_boundary")," to the ",z({},"slds-card")," element."),F({id:"No-styling"},"No styling"),Object(n.createElement)(c.a,null,Object(V.f)(_,"nested-no-boundary")),F({id:"With-card-styling"},"With card styling"),q({},"Adding ",z({},"slds-card_boundary")," to the ",z({},"slds-card")," element will give you back the card styling."),Object(n.createElement)(c.a,null,Object(V.f)(_,"nested-with-boundary")),R({id:"Wrapped-Cards"},"Wrapped Cards"),q({},"To combine several cards into a single card look, wrap the cards using ",z({},"slds-card-wrapper"),". Similar to the nested cards, adding ",z({},"slds-card_boundary")," to the ",z({},"slds-card")," element will give you back the card styling."),Object(n.createElement)(c.a,null,Object(V.f)(D)),M({id:"Einstein-Theming"},"Einstein Theming"),q({},"For cards that contain Einstein related information, you can include an Einstein themed card header."),Object(n.createElement)(c.a,null,Object(V.f)(S)),R({id:"With-an-Icon"},"With an Icon"),Object(n.createElement)(c.a,null,Object(V.f)(W,"einstein-with-icon")),R({id:"With-Actions"},"With Actions"),Object(n.createElement)(c.a,null,Object(V.f)(W,"einstein-with-icon-and-actions")),Object(n.createElement)(B.b,{docsLink:"#Mobile",header:"Mobile context changes",elementName:"cards with Einstein theming and actions"}),Object(n.createElement)(c.a,{frameOnly:!0,frameTitle:"Example mobile styles for Einstein themed cards"},Object(V.f)(W,"einstein-with-icon-and-actions")),M({id:"Styling-Hooks-Overview"},"Styling Hooks Overview"),Object(n.createElement)(I.a,{name:"cards",type:"component"}))},K=function(){return Object(s.a)(G())}}});