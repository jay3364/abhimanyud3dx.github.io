var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/picklist/docs.mdx.js"]=function(e){function t(t){for(var n,i,a=t[0],c=t[1],d=t[2],p=0,u=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(r&&r(t);u.length;)u.shift()();return l.push.apply(l,d||[]),s()}function s(){for(var e,t=0;t<l.length;t++){for(var s=l[t],n=!0,a=1;a<s.length;a++){var c=s[a];0!==o[c]&&(n=!1)}n&&(l.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},o={54:0},l=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var a=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var r=c;return l.push([732,0]),s()}({0:function(e,t){e.exports=React},20:function(e,t){e.exports=ReactDOM},21:function(e,t){e.exports=JSBeautify},732:function(e,t,s){"use strict";s.r(t),s.d(t,"getElement",(function(){return k})),s.d(t,"getContents",(function(){return A}));var n=s(0),o=s.n(n),l=s(4),i=s(2),a=(s(28),s(45),s(14),s(1)),c=s(23),d=s(24),r=s(3),p=s.n(r),u=s(5),m=s.n(u),b=s(10),h=s(7),x=s(8),O=function(e){var t=a.d.uniqueId("listbox-option-");return o.a.createElement("li",{className:e.className,role:"presentation"},o.a.createElement("span",{className:m()("presentation"===e.role?"slds-lookup__item_label":e.text?"slds-lookup__item-action slds-lookup__item-action_label":"slds-lookup__item-action slds-media"),role:e.role?e.role:"option",tabIndex:e.tabIndex||"-1",id:t},e.isSelectable?o.a.createElement(b.a,{className:"slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small slds-shrink-none",sprite:"utility",symbol:"check"}):null,e.headerText?o.a.createElement("h3",{className:"slds-text-title_caps",role:"presentation"},e.headerText):e.text?o.a.createElement("span",{className:"slds-truncate",title:e.title},e.children):e.children))},f=function(e){var t=e.autocomplete,s=e.dropdown,n=e.placeholder;return o.a.createElement(x.b,null,o.a.createElement(x.d,{labelContent:"Categories",inputId:"text-input-01"}),o.a.createElement(x.c,{className:"slds-input-has-icon slds-input-has-icon_right slds-picklist__input"},o.a.createElement("input",{id:"text-input-01",className:"slds-lookup__search-input slds-input",type:"text",placeholder:n,"aria-owns":"option-list-01",role:"textbox",readOnly:!t,"aria-autocomplete":t?"list":null}),t?null:o.a.createElement(h.b,{className:"slds-input__icon slds-text-color_default",symbol:"down",assistiveText:"Expand category options","aria-expanded":"open"===s?"true":"false",iconClassName:"slds-button__icon",tabIndex:"-1"})))};f.propTypes={autocomplete:p.a.bool,dropdown:p.a.string,placeholder:p.a.string},f.defaultProps={placeholder:"Select an Option…"};var _=s(70),y=s(11),g={option1:{name:"Option A"},option2:{name:"Option B"},option3:{name:"Option ABCDEFGHIJKLMNOPQRSTUVWXYZ"}},E={option1:{name:"Option A",selected:!0},option2:{name:"Option B"},option3:{name:"Option ABCDEFGHIJKLMNOPQRSTUVWXYZ"}},S={option1:{name:"Option A",selected:!0},option2:{name:"Option B",selected:!0},option3:{name:"Option ABCDEFGHIJKLMNOPQRSTUVWXYZ"}},I=[{id:"default",label:"Default",element:o.a.createElement(c.b,{id:a.d.uniqueId("combobox-id-"),containerClassName:"slds-size_small","aria-controls":"listbox-id-1",inputIconPosition:"right",rightInputIcon:o.a.createElement(y.a,{symbol:"down",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:o.a.createElement(d.e,{id:"listbox-id-1",snapshot:g,type:"plain",count:8}),resultsType:"listbox",selectOnly:!0,hasInteractions:!0})}],v=[{id:"focused",label:"Focused",element:o.a.createElement(c.b,{id:a.d.uniqueId("combobox-id-"),containerClassName:"slds-size_small","aria-controls":"listbox-id-2",inputIconPosition:"right",rightInputIcon:o.a.createElement(y.a,{symbol:"down",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:o.a.createElement(d.e,{id:"listbox-id-2",snapshot:g,type:"plain",count:8}),resultsType:"listbox",selectOnly:!0,hasFocus:!0,isOpen:!0})},{id:"open-item-focused",label:"Open - Item Focused",element:o.a.createElement(c.b,{id:a.d.uniqueId("combobox-id-"),containerClassName:"slds-size_small","aria-controls":"listbox-id-3",inputIconPosition:"right",rightInputIcon:o.a.createElement(y.a,{symbol:"down",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:o.a.createElement(d.e,{id:"listbox-id-3",snapshot:{option1:{name:"Option A",focused:!0},option2:{name:"Option B"},option3:{name:"Option ABCDEFGHIJKLMNOPQRSTUVWXYZ"}},type:"plain",count:8}),resultsType:"listbox","aria-activedescendant":"option1",selectOnly:!0,hasFocus:!0,isOpen:!0})},{id:"open-option-selected",label:"Open - Option Selected",element:o.a.createElement(c.b,{id:a.d.uniqueId("combobox-id-"),containerClassName:"slds-size_small","aria-controls":"listbox-id-4",inputIconPosition:"right",value:"Option A",rightInputIcon:o.a.createElement(y.a,{symbol:"down",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:o.a.createElement(d.e,{id:"listbox-id-4",snapshot:E,type:"plain",count:8}),resultsType:"listbox","aria-activedescendant":"option1",selectOnly:!0,hasFocus:!0,isOpen:!0})},{id:"open-options-selected",label:"Open - Options Selected",element:o.a.createElement(c.b,{id:a.d.uniqueId("combobox-id-"),containerClassName:"slds-size_small","aria-controls":"listbox-id-5",selectOnly:!0,value:"2 Options Selected",inputIconPosition:"right",rightInputIcon:o.a.createElement(y.a,{symbol:"down",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:o.a.createElement(d.e,{id:"listbox-id-5",snapshot:S,type:"plain",count:8}),resultsType:"listbox",isOpen:!0,hasFocus:!0})},{id:"closed-option-selected",label:"Closed - Option Selected",element:o.a.createElement(c.b,{id:a.d.uniqueId("combobox-id-"),containerClassName:"slds-size_small","aria-controls":"listbox-id-6",inputIconPosition:"right",value:"Option A",rightInputIcon:o.a.createElement(y.a,{symbol:"down",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:o.a.createElement(d.e,{id:"listbox-id-6",snapshot:E,type:"plain",count:8}),resultsType:"listbox","aria-activedescendant":"option1",selectOnly:!0})},{id:"closed-options-selected",label:"Closed - Options Selected",element:o.a.createElement(c.b,{id:a.d.uniqueId("combobox-id-"),containerClassName:"slds-size_small","aria-controls":"listbox-id-7",selectOnly:!0,value:"2 Options Selected",inputIconPosition:"right",rightInputIcon:o.a.createElement(y.a,{symbol:"down",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:o.a.createElement(d.e,{id:"listbox-id-7",snapshot:S,type:"plain",count:8}),resultsType:"listbox",listboxOfSelections:o.a.createElement(_.a,{snapshot:{option1:{name:"Option A",tabIndex:0},option2:{name:"Option B"}},count:2})})},{id:"group-heading",label:"Group heading label",element:o.a.createElement(c.b,{id:a.d.uniqueId("combobox-id-"),containerClassName:"slds-size_small","aria-controls":"listbox-id-8",selectOnly:!0,inputIconPosition:"right",rightInputIcon:o.a.createElement(y.a,{symbol:"down",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:o.a.createElement(d.c,{id:"listbox-id-8",className:"slds-dropdown slds-dropdown_fluid"},o.a.createElement(d.b,{"aria-label":"Group One",snapshot:{option0:{name:"Recently Viewed",label:!0},option1:{name:"Option A"},option2:{name:"Option B"}},count:3})),resultsType:"listbox",isOpen:!0,hasFocus:!0})},{id:"deprecated-picklist-open",label:"Deprecated Picklist Open",element:o.a.createElement("div",{className:"demo-only",style:{height:"240px"}},o.a.createElement("div",{className:"slds-picklist slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"},o.a.createElement(f,{dropdown:"open"}),o.a.createElement((function(e){return o.a.createElement("div",{className:m()("slds-dropdown",e.className),role:"listbox"},e.children)}),{className:"slds-dropdown_left slds-dropdown_length-5"},o.a.createElement((function(e){return o.a.createElement("ul",{id:e.id||"option-list-01",className:m()("slds-dropdown__list",e.className),role:"group"===e.role?"group":"presentation","aria-label":"group"===e.role?e["aria-label"]:null},e.children)}),null,o.a.createElement(O,{isSelectable:!0,text:!0,title:"Option A",tabIndex:"0"},"Option A"),o.a.createElement(O,{isSelectable:!0,text:!0,title:"Option B"},"Option B"),o.a.createElement(O,{isSelectable:!0,text:!0,title:"Option C"},"Option C"),o.a.createElement(O,{isSelectable:!0,text:!0,title:"Option D"},"Option D"),o.a.createElement(O,{isSelectable:!0,text:!0,title:"Option E"},"Option E"),o.a.createElement(O,{isSelectable:!0,text:!0,title:"Option F"},"Option FGHIJKLMNOPQRSTUVWXYZ")))))}],w=l.c.a,N=l.c.code,C=l.c.h2,T=l.c.h3,j=l.c.p,k=function(){return Object(n.createElement)(l.b,{},Object(n.createElement)("div",{className:"doc lead"},"A Picklist provides a user with an select-only component that is functionally similar to an HTML `select` element. It is accompanied with a listbox of pre-defined options. A picklist has both single and multi-selection patterns."),Object(n.createElement)(i.a,{demoStyles:"height: 11rem;",exampleOnly:!0},Object(a.f)(v,"open-option-selected")),C({id:"About-Picklist"},"About Picklist"),j({},"A picklist is a widget that displays a list of selectable options. When an option is selected, it is shown as selected and the value of the read-only input is updated to match it."),j({},'A multi-select picklist is a widget that displays a list of selectable options, where more than one option can be chosen. When more than one option has been selected, the value of the read-only input should update with the total number of selected items, such as "3 options selected". When a picklist with multiple selected options is closed, a listbox of pills is also used to represent those selected options. The listbox of pills is positioned below the read-only input, each pill represents a selected option. This allows a user to easily see and remove selected items.'),j({},"The target HTML element, ",N({},"slds-combobox")," and dropdown need to be wrapped in the class ",N({},".slds-dropdown-trigger dropdown-trigger_click"),"."),C({id:"Accessibility"},"Accessibility"),j({},'A Picklist allows a user to select and set a value from a pre-defined list of options. As such we follow the ARIA Combobox widget pattern to implement it as it\'s the most appropriate concept to achieve this. The variant of Combobox we chose is the "Read-only" version, as a users keyboard input cannot directly affect the value set in the Combobox, but can only select a value from a pre-defined list. It also does not perform a search, or autocomplete function. It most closely resembles the HTML ',N({},"select")," element."),j({},"Implementing a multi-select pattern with a Combobox is not standard, nor is it technically supported by the specification. Therefore great care should be paid to the extra steps we take to try and communicate multi-selection."),j({},"Please refer to the ",w({href:"/components/combobox"},"Combobox")," documentation relating to read-only implementation guidelines."),C({id:"Default"},"Default"),j({},"A Picklist provides a user with an read-only input field that is accompanied with a listbox of pre-defined options. A picklist has a single and multi-selection pattern."),Object(n.createElement)(i.a,{demoStyles:"height: 11rem;"},Object(a.f)(I)),C({id:"States"},"States"),T({id:"Focused"},"Focused"),Object(n.createElement)(i.a,{demoStyles:"height: 11rem;"},Object(a.f)(v,"focused")),T({id:"Open-Item-Focused"},"Open - Item Focused"),Object(n.createElement)(i.a,{demoStyles:"height: 11rem;"},Object(a.f)(v,"open-item-focused")),T({id:"Open-Option-Selected"},"Open - Option Selected"),Object(n.createElement)(i.a,{demoStyles:"height: 11rem;"},Object(a.f)(v,"open-option-selected")),T({id:"Open-Options-Selected"},"Open - Options Selected"),Object(n.createElement)(i.a,{demoStyles:"height: 11rem;"},Object(a.f)(v,"open-options-selected")),T({id:"Closed-Option-Selected"},"Closed - Option Selected"),Object(n.createElement)(i.a,null,Object(a.f)(v,"closed-option-selected")),T({id:"Closed-Options-Selected"},"Closed - Options Selected"),Object(n.createElement)(i.a,null,Object(a.f)(v,"closed-options-selected")),C({id:"Examples"},"Examples"),T({id:"Group-heading-label"},"Group heading label"),Object(n.createElement)(i.a,{demoStyles:"height: 13rem;"},Object(a.f)(v,"group-heading")))},A=function(){return Object(l.a)(k())}}});