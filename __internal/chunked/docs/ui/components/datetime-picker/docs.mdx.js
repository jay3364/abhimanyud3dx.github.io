var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/datetime-picker/docs.mdx.js"]=function(e){function t(t){for(var n,i,l=t[0],s=t[1],d=t[2],u=0,m=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(c&&c(t);m.length;)m.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={26:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var c=s;return o.push([797,0]),a()}({0:function(e,t){e.exports=React},20:function(e,t){e.exports=ReactDOM},21:function(e,t){e.exports=JSBeautify},797:function(e,t,a){"use strict";a.r(t),a.d(t,"getElement",(function(){return N})),a.d(t,"getContents",(function(){return P}));var n=a(0),r=a.n(n),o=a(4),i=a(2),l=a(14),s=a(3),d=a.n(s),c=a(5),u=a.n(c),m=a(1),p=a(23),h=a(24),b=a(25),f=a(11),y=a(38),g=a(7),O=a(8),v=a(17);function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,o=[],i=!0,l=!1;try{for(a=a.call(e);!(i=(n=a.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{i||null==a.return||a.return()}finally{if(l)throw r}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var x=function(e){var t=e.dropdown,a=e.dropdownIsOpen,o=e.hasFocus,i=e.hasError,l=e.isOpen,s=e.isRequired,d=e.isDisabled,c=e.listboxData,b=e.dateDefaultValue,y=e.showRequiredIndicator,_=Object(n.useRef)(),x=w(Object(n.useState)(""),2),S=x[0],E=x[1],j=w(Object(n.useState)(""),2),D=j[0],k=j[1],q=w(Object(n.useState)(m.d.uniqueId("example-unique-id-")),1)[0],I=w(Object(n.useState)(m.d.uniqueId("example-unique-id-")),1)[0],T=w(Object(n.useState)(m.d.uniqueId("example-unique-id-")),1)[0];Object(n.useEffect)((function(){_.current&&("id"in _.current&&_.current.id&&E(_.current.id),"ariaChecked"in _.current&&_.current.ariaChecked&&k(_.current.textContent))}),[]);var R={"slds-is-open":a};return r.a.createElement("div",{className:"slds-form"},r.a.createElement("fieldset",{className:u()("slds-form-element slds-form-element_compound",{"slds-has-error":i})},r.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},s&&r.a.createElement("abbr",{className:"slds-required",title:"required"},"*"," "),"Date and Time"),r.a.createElement("div",{className:"slds-form-element__control"},r.a.createElement("div",{className:"slds-form-element__group"},r.a.createElement("div",{className:"slds-form-element__row"},r.a.createElement(O.b,{formElementClassName:u()("slds-dropdown-trigger slds-dropdown-trigger_click",R),labelContent:"Date",inputId:q,hasRightIcon:!0,dropdown:t,hasError:i,isRequired:s,showRequiredIndicator:y},r.a.createElement(v.a,{id:q,placeholder:"Select a date…",defaultValue:b,"aria-describedby":i&&q+"-error",required:s,disabled:d}),r.a.createElement(g.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date",disabled:d})),r.a.createElement(p.b,{id:I,"aria-controls":T,"aria-activedescendant":S,autocomplete:!0,label:"Time",placeholder:"Select a time…",inputIconPosition:"right",hasError:i,isDisabled:d,rightInputIcon:r.a.createElement(f.a,{symbol:"clock",className:u()("slds-icon slds-icon_x-small slds-icon-text-default",{"slds-icon-text-error":i,"slds-is-disabled":d}),containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:r.a.createElement(h.e,{className:"slds-dropdown_fluid slds-dropdown_left",id:T,snapshot:c,type:"plain",count:6,focusedRef:_}),resultsType:"listbox",hasInteractions:!0,hasFocus:o,isOpen:l,value:D})))),i&&r.a.createElement("div",{className:"slds-form-element__help",id:q+"-error"},"Complete this field.")))};x.propTypes={dropdown:d.a.node,dropdownIsOpen:d.a.bool,hasFocus:d.a.bool,isOpen:d.a.bool,isRequired:d.a.bool,hasError:d.a.bool,listboxIsOpen:d.a.bool,listboxData:d.a.object.isRequired,dateDefaultValue:d.a.string,showRequiredIndicator:d.a.bool,isDisabled:d.a.bool},x.defaultProps={dropdown:r.a.createElement(y.a,{todayActive:!0}),dropdownIsOpen:!0,showRequiredIndicator:!1,isDisabled:!1};var S=r.a.createElement(x,{listboxData:b.x}),E=(b.x,[{id:"date-selection",label:"Date selected",element:r.a.createElement(x,{dropdown:r.a.createElement(y.a,{todayActive:!0,dateSelected:"single",dateRange:"week-4"}),dateDefaultValue:"06/24/2021",listboxData:b.x})},{id:"time-selection",label:"Time selected",demoStyles:"height: 20rem;",storybookStyles:!0,element:r.a.createElement(x,{dropdown:r.a.createElement(y.a,{todayActive:!0,dateSelected:"single",dateRange:"week-4",value:"8:00am"}),dropdownIsOpen:!1,dateDefaultValue:"06/24/2021",isOpen:!0,hasFocus:!0,listboxData:b.z})},{id:"required",label:"Date and Time - required",demoStyles:"height: 20rem;",element:r.a.createElement(x,{dropdownIsOpen:!1,isRequired:!0,listboxData:b.x})},{id:"error",label:"Date and Time - error",demoStyles:"height: 20rem;",element:r.a.createElement(x,{dropdownIsOpen:!1,hasError:!0,listboxData:b.x})},{id:"required-error",label:"Date and Time - required and has error",demoStyles:"height: 20rem;",element:r.a.createElement(x,{dropdownIsOpen:!1,isRequired:!0,hasError:!0,listboxData:b.x})},{id:"disabled",label:"Date and Time - disabled",demoStyles:"height: 10rem;",storybookStyles:!0,element:r.a.createElement(x,{dropdownIsOpen:!1,listboxData:b.x,isDisabled:!0})}]),j=o.c.a,D=o.c.code,k=o.c.h2,q=o.c.h3,I=o.c.li,T=o.c.p,R=o.c.strong,A=o.c.ul,N=function(){return Object(n.createElement)(o.b,{},Object(n.createElement)("div",{className:"doc lead"},"A datetime picker is used to select a day and a time."),Object(n.createElement)(i.a,{exampleOnly:!0,demoStyles:"height: 28rem;"},Object(m.f)(S)),k({id:"About-datetime-picker"},"About datetime picker"),q({id:"Implementation"},"Implementation"),T({},"The datetime is two ",j({href:"/components/form-element"},"form elements"),", each containing a label and text ",j({href:"/components/input"},"input"),", and a dropdown ",j({href:"/components/menus"},"menu"),", containing a grid-based calendar and filters. The date form element acts as a trigger for the dropdown."),Object(n.createElement)(l.a,{type:"warning"},Object(n.createElement)("p",null,"Placement of inline form elements inside a data table cell is not supported. Instead, use a button to invoke a popover, which does support form elements.")),T({},"The datetime picker has the following markup requirements:"),T({},R({},"All")),A({},I({},"Follow all accessibility requirements mentioned in the ",j({href:"/components/datepickers"},"Datepicker")," and ",j({href:"/components/timepicker"},"Timepicker")," blueprints.")),T({},R({},"Desktop")),A({},I({},"Add ",D({},".slds-is-open")," to the element with ",D({},".slds-dropdown-trigger")," to invoke the dropdown that contains the datepicker and the list of time options."),I({},"On the timepicker, the ",D({},".slds-has-focus")," modifier class is required on the ",D({},".slds-listbox__option")," element that has focus."),I({},"On the timepicker, the ",D({},".slds-is-selected")," modifier class is required on the ",D({},".slds-listbox__option")," element that has been selected."),I({},"On the datepicker, the ",D({},".slds-is-selected")," modifier class is required on the ",D({},"td")," element that has the selected day."),I({},"On the datepicker, the ",D({},".slds-is-today")," modifier class is required on the ",D({},"td")," element that is the current day.")),T({},R({},"Mobile")),A({},I({},"When on mobile, we want to leverage the native datetime picker by changing the ",D({},"input")," type from ",D({},"text")," to ",D({},"datetime-local")),I({},"The ",D({},'input type="datetime-local"')," will create an input field allowing a date and time to be easily entered — this includes year, month, day, hours, and minutes."),I({},"When switching ",D({},'input type="text"')," to ",D({},'input type="datetime-local"')," for mobile, we need to remove the ARIA attributes. The native rendering doesn't require these.",A({},I({},"On the element with the class ",D({},"slds-combobox"),", please remove ",D({},'role="combobox"'),", ",D({},"aria-expanded"),", and ",D({},"aria-haspopup"),"."),I({},"On the ",D({},"input")," that we just added ",D({},'type="datetime-local"')," to, please remove ",D({},"aria-controls"),", ",D({},"aria-autocomplete"),", and ",D({},'role="textbox"'),".")))),k({id:"Base"},"Base"),Object(n.createElement)(i.a,{demoStyles:"height: 28rem;"},Object(m.f)(S)),k({id:"States"},"States"),q({id:"Date-selection"},"Date selection"),Object(n.createElement)(i.a,{demoStyles:"height: 28rem;"},Object(m.f)(E,"date-selection")),q({id:"Time-selection"},"Time selection"),Object(n.createElement)(i.a,{demoStyles:"height: 28rem;"},Object(m.f)(E,"time-selection")))},P=function(){return Object(o.a)(N())}}});