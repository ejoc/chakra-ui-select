(this["webpackJsonpchakra-ui-select-example"]=this["webpackJsonpchakra-ui-select-example"]||[]).push([[0],{155:function(e,t,n){e.exports=n(166)},156:function(e,t,n){},166:function(e,t,n){"use strict";n.r(t);n(156);var a=n(0),l=n.n(a),r=n(41),i=n.n(r),c=n(4),o=n(94),u=n(103),s=n(46),d=n(111),m=n(70),p=n(180),b=n(181),f=n(77),g=n(175),v=n(176),h=n(37),E=n(39),O=n(36),y=n(115),S=n(27),x=n(69),j=n(79),I=n(26),w=n(167),k=n(177),C=n(179),D=n(178),_={pos:"absolute",mt:1,w:"full",zIndex:2,overflow:"auto",maxH:60,rounded:"md"};function P(e){return{py:1,rounded:"md",w:"full",bg:Object(g.a)("#fff","gray.700")(e),boxShadow:Object(g.a)("lg","dark-lg")(e),border:"1px",borderColor:"gray.100"}}function W(e){return{py:2,pl:3,pr:9,color:Object(g.a)("gray.900","gray.50")(e),pos:"relative",userSelect:"none",cursor:"default",fontWeight:"normal",transition:"background 50ms ease-in 0s",_focus:{bg:Object(g.a)("gray.100","whiteAlpha.100")(e)},_active:{bg:Object(g.a)("gray.100","whiteAlpha.200")(e)},_expanded:{bg:Object(g.a)("gray.100","whitxeAlpha.100")(e)},_selected:{bg:"gray.50",fontWeight:"semibold"},_disabled:{opacity:.4,cursor:"not-allowed"}}}function L(e){var t=e.theme;return{bg:"white",position:"relative",w:"full",border:"1px",borderColor:"gray.300",rounded:"md",shadow:"base",textAlign:"left",cursor:"default",display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between",minH:10,transition:"all 0.2s",outline:0,_focusWithin:{outline:"none",borderColor:"gray.400",boxShadow:"0 0 0 1px "+Object(v.a)(t,"gray.400")},_focus:{outline:"none",borderColor:"gray.400",boxShadow:"0 0 0 1px "+Object(v.a)(t,"gray.400")},_readOnly:{boxShadow:"none !important",userSelect:"all"},_disabled:{opacity:.4,cursor:"not-allowed"},_hover:{borderColor:"gray.400",_disabled:{borderColor:"gray.300"}}}}function T(e){return{d:"block",fontSize:"sm",fontWeight:"medium",color:Object(g.a)("gray.700","gray.50")(e)}}var z={zIndex:0,pos:"absolute",inset:0,w:"100%",h:"100%",cursor:"default",_focus:{outline:"none"},_disabled:{opacity:.4,cursor:"not-allowed"}},V={parts:["control","menu","list","option","label","button"],baseStyle:function(e){return{menu:_,list:P(e),option:W(e),control:L(e),label:T(e),button:z}}},M={SelectSingle:V,SelectMultiple:{parts:["control","menu","list","option","label","button"],baseStyle:V.baseStyle}};function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}var F={position:"absolute",top:0,left:0,visibility:"hidden",height:0,overflow:"scroll",whiteSpace:"pre"},A=function(e,t){t.style.fontSize=e.fontSize,t.style.fontFamily=e.fontFamily,t.style.fontWeight=e.fontWeight,t.style.fontStyle=e.fontStyle,t.style.letterSpacing=e.letterSpacing,t.style.textTransform=e.textTransform},B=Object(h.a)((function(e,t){var n=e.wrapperStyle,r=e.className,i=e.placeholder,c=e.minWidth,o=e.placeholderIsMinWidth,u=e.isDisabled,s=N(e,["wrapperStyle","className","placeholder","minWidth","placeholderIsMinWidth","isDisabled"]),d=Object(a.useState)(c),m=d[0],p=d[1],b=Object(a.useRef)(null),f=Object(a.useRef)(null),g=Object(a.useRef)(null),v=Object(S.b)("chakra-select__search-input",r),h=e.defaultValue||e.value||"";Object(a.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===b||void 0===b||null===(e=b.current)||void 0===e||e.focus()}}})),Object(a.useEffect)((function(){O()}),[]),Object(a.useEffect)((function(){var t;if(f&&"undefined"!==typeof(null===(t=f.current)||void 0===t?void 0:t.scrollWidth)){var n,a,l;if(i&&(!e.value||e.value&&o))n=Math.max(f.current.scrollWidth,null===(a=g.current)||void 0===a?void 0:a.scrollWidth)+2;else n=(null===(l=f.current)||void 0===l?void 0:l.scrollWidth)+2;c&&n<c&&(n=c),n!==m&&p(n)}}),[h,c,m,o,i]);var O=function(){if(window.getComputedStyle&&null!==b&&void 0!==b&&b.current){var e=b.current,t=e&&window.getComputedStyle(e);t&&(f.current&&A(t,f.current),g.current&&A(t,g.current))}},y=R({d:"inline-block",visibility:u?"hidden":"visible",color:"gray.800"},n),x=R({w:m+"px",border:0,fontSize:"inherit",outline:0,padding:0,color:"inherit",boxSizing:"content-box",background:"0px center"},s);return l.a.createElement(E.a.div,Object.assign({className:v},y),l.a.createElement(E.a.input,Object.assign({placeholder:i},x,{ref:b})),l.a.createElement(E.a.div,{ref:f,sx:F},h),i&&l.a.createElement(E.a.div,{ref:g,sx:F},i))})),H=Object(w.a)({strict:!1,name:"DownshiftContext"}),J=H[0],K=H[1];function Y(e){return l.a.createElement(E.a.div,Object.assign({d:"flex",alignItems:"center",flex:"1 1 0%",flexWrap:"wrap",padding:"2px 8px",pos:"relative",overflow:"hidden"},e))}Object(h.a)((function(e,t){var n=e.children,a=N(e,["children"]);return l.a.createElement(E.a.div,Object.assign({ref:t,d:"flex",flexShrink:0,alignItems:"center",alignSelf:"stretch",pr:2,pos:"absolute",insetY:0,right:0},a),n)}));var G=Object(h.a)((function(e,t){return l.a.createElement(E.a.div,Object.assign({ref:t,pos:"absolute",insetY:0,right:0,pr:2,display:"flex",alignItems:"center",pointerEvents:"none",color:"gray.500"},e))})),q=(Object(h.a)((function(e,t){var n=e.onClick,a=e.className,r=N(e,["onClick","className"]),i=K(),c=i.selectedItem,o=i.clearSelection,u=i.inputRef,s=i.isDisabled,d=Object(S.b)("chakra-select__clean-btn",a);return!c||s?null:l.a.createElement(E.a.div,Object.assign({d:"flex",p:2,ref:t,"aria-hidden":!0,className:d,zIndex:1,tabIndex:-1,outline:"none",color:"gray.500",w:"100%",h:"100%",alignItems:"center",justifyContent:"center",_hover:{color:"gray.600"}},r,{onClick:Object(x.a)(n,(function(e){var t;e.stopPropagation(),o(),null===u||void 0===u||null===(t=u.current)||void 0===t||t.focus()}))}),l.a.createElement(j.b,{focusable:"false","aria-hidden":!0,boxSize:"1em",stroke:"currentColor"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})))})),Object(h.a)((function(e,t){var n=K().isDisabled,a=Object(k.a)(R({isDisabled:n},e)),r=Object(O.b)();return l.a.createElement(E.a.div,Object.assign({ref:t,__css:r.control},a))}))),Q=Object(h.a)((function(e,t){var n=K(),a=n.getToggleButtonProps,r=n.inputRef,i=n.isDisabled,c=n.isOpen,o=n.getDropdownProps,u=Object(k.a)(R({isDisabled:i},e)),s=Object(O.b)();return l.a.createElement(E.a.button,Object.assign({__css:s.button,ref:t},u,a(R({},null===o||void 0===o?void 0:o({preventKeyAction:c}),{onClick:function(){var e;return null===r||void 0===r||null===(e=r.current)||void 0===e?void 0:e.focus()}}))))})),U=Object(h.a)((function(e,t){var n=K(),r=n.getInputProps,i=n.isDisabled,c=n.inputRef,o=n.getDropdownProps,u=n.selectedItems,s=Object(k.a)(R({isDisabled:i},e));Object(a.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===c||void 0===c||null===(e=c.current)||void 0===e||e.focus()}}}));var d=u&&u.length>0?"":e.placeholder;return l.a.createElement(a.Fragment,null,l.a.createElement(E.a.div,{zIndex:1,m:.5,pb:.5,pt:.5,visibility:i?"hidden":"visible"},l.a.createElement(B,Object.assign({tabIndex:-1,isDisabled:i,type:"text",autoCapitalize:"none"},s,r(R({ref:c},null===o||void 0===o?void 0:o({placeholder:d,ref:c})))))))}));function X(e){var t=e.children,n=e.value,a=e.index,r=e.isDisabled,i=N(e,["children","value","index","isDisabled"]),c=K(),o=c.getItemProps,u=c.selectedItem,s=c.highlightedIndex,d=Object(O.b)(),m=u===n,p=s===a;return l.a.createElement(E.a.li,Object.assign({bg:p?"gray.50":"white","data-disabled":Object(S.c)(r)},o({item:n,index:a}),{"aria-selected":i.isSelected?"true":""+m,__css:d.option},i),Object(x.c)(t,{isSelected:m,isActive:p}))}var Z=Object(h.a)((function(e,t){var n=K().isOpen,a=Object(O.b)();return n?l.a.createElement(E.a.ul,Object.assign({ref:t,__css:a.list},e)):null})),$=Object(h.a)((function(e,t){var n=Object(O.b)(),a=K().getMenuProps;return l.a.createElement(E.a.div,Object.assign({ref:t,__css:n.menu},a(),e))}));function ee(e){var t=e.children,n=e.defaultValue,r=e.defaultIsOpen,i=e.onChange,c=e.itemToString,o=e.isDisabled,u=N(e,["children","defaultValue","defaultIsOpen","onChange","itemToString","isDisabled"]),s=Object(y.a)("SelectSingle",{}),d=Object(a.useRef)(null);return l.a.createElement(I.a,{onChange:i,initialSelectedItem:n,defaultIsOpen:r,itemToString:c},(function(e){return l.a.createElement(E.a.div,Object.assign({pos:"relative"},u,e.getRootProps()),l.a.createElement(O.a,{value:s},l.a.createElement(J,{value:R({},e,{isDisabled:o,inputRef:d})},Object(x.c)(t,{inputValue:e.inputValue,isOpen:e.isOpen,highlightedIndex:e.highlightedIndex,selectedItem:e.selectedItem,getLabelProps:e.getLabelProps}))))}))}function te(e){var t=e.children,n=e.selectedItem,a=e.index,r=N(e,["children","selectedItem","index"]),i=K(),c=i.removeSelectedItem,o=i.getSelectedItemProps,u=i.inputRef;return l.a.createElement(D.a,Object.assign({size:"sm",m:"2px",zIndex:1},r,null===o||void 0===o?void 0:o({selectedItem:n,index:a})),l.a.createElement(D.c,{color:"primary",fontWeight:"semibold"},t),l.a.createElement(D.b,{cursor:"default",_focus:{outline:"none"},onClick:function(e){var t;e.stopPropagation(),null===c||void 0===c||c(n),null===(t=u.current)||void 0===t||t.focus()}}))}function ne(e){var t=e.children,n=e.onChange,r=e.initialSelectedItems,i=void 0===r?[]:r,c=e.defaultSelectedItems,o=e.itemToString,u=e.value,s=e.isDisabled,d=N(e,["children","onChange","initialSelectedItems","defaultSelectedItems","itemToString","value","isDisabled"]),m=Object(a.useRef)(null),p=Object(y.a)("SelectMultiple",{}),b=Object(I.b)(R({defaultSelectedItems:c,initialSelectedItems:i,onSelectedItemsChange:n},u&&{selectedItems:u})),f=b.getSelectedItemProps,g=b.getDropdownProps,v=b.addSelectedItem,h=b.removeSelectedItem,S=b.selectedItems,j=Object(a.useCallback)((function(e){return R({},e,{selectedItems:S,getDropdownProps:g,getSelectedItemProps:f,removeSelectedItem:h})}),[S,g,f,h]),w=Object(a.useCallback)((function(e,t){switch(t.type){case I.a.stateChangeTypes.keyDownEnter:case I.a.stateChangeTypes.keyDownSpaceButton:case I.a.stateChangeTypes.clickItem:return R({},t,{highlightedIndex:e.highlightedIndex,isOpen:!0,inputValue:""});default:return t}}),[]),k=Object(a.useCallback)((function(e){var t=e.type,n=e.selectedItem;switch(t){case I.a.stateChangeTypes.keyDownEnter:case I.a.stateChangeTypes.keyDownSpaceButton:case I.a.stateChangeTypes.clickItem:n&&v(n)}}),[v]);return l.a.createElement(I.a,{stateReducer:w,onStateChange:k,selectedItem:null,itemToString:o},(function(e){var n=R({},j(e),{isDisabled:s,inputRef:m});return l.a.createElement(E.a.div,Object.assign({position:"relative"},d,e.getRootProps()),l.a.createElement(O.a,{value:p},l.a.createElement(J,{value:n},Object(x.c)(t,{inputValue:e.inputValue,isOpen:e.isOpen,highlightedIndex:e.highlightedIndex,selectedItems:S,getLabelProps:e.getLabelProps}))))}))}function ae(e){var t=e.items,n=e.inputValue,a=e.selectedItems,l=e.getOptionLabel;return t.filter((function(e){return n?a.indexOf(e)<0&&l(e).toLowerCase().startsWith(n.toLowerCase()):a.indexOf(e)<0}))}function le(e){var t=e.options,n=e.getOptionLabel,r=void 0===n?function(e){return null===e?"":e.label}:n,i=e.getOptionKey,c=void 0===i?function(e){return null===e?"":e.value}:i,o=e.filterOption,u=void 0===o?ae:o,s=e.placeholder,d=e.isSearchable,m=e.value,p=e.onChange,b=e.isDisabled,f=e.label,g=e.noOptionsMessage,v=void 0===g?function(){return"No options"}:g;return l.a.createElement(ne,{isDisabled:b,itemToString:r,value:m,onChange:p},(function(e){var n=e.selectedItems,i=e.inputValue,o=e.getLabelProps,m=n.length<=0&&!d&&!!s,p=u({items:t,selectedItems:n,inputValue:i,getOptionLabel:r}),b=v(i),g=p.length<=0&&!!b;return l.a.createElement(a.Fragment,null,!!f&&l.a.createElement(C.a,Object.assign({},o()),f),l.a.createElement(q,null,l.a.createElement(Y,null,null===n||void 0===n?void 0:n.map((function(e,t){return l.a.createElement(te,{key:"legal_practice-item-"+t,index:t,selectedItem:e},r(e))})),d&&l.a.createElement(U,{placeholder:s}),m&&l.a.createElement(E.a.span,{color:"gray.400",fontWeight:"normal"},s)),l.a.createElement(Q,{"aria-label":"toggle menu"},l.a.createElement(G,null,l.a.createElement(j.b,{"aria-hidden":!0,boxSize:"1em",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"}))))),l.a.createElement($,null,l.a.createElement(Z,null,p.map((function(e,t){var n=c(e),a=r(e);return l.a.createElement(X,{key:JSON.stringify(n),value:e,index:t},a)})),g&&l.a.createElement(E.a.div,{py:2,pl:3,pr:9,color:"gray.900"},b))))}))}var re=Object(o.a)({components:{SelectSingle:M.SelectSingle,SelectMultiple:M.SelectMultiple}}),ie=[{value:"apple",label:"Apple"},{value:"pear",label:"Pear"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"banana",label:"Banana"}],ce=ie.map((function(e){return e.value})),oe=function(e){var t;return null!==(t=null===e||void 0===e?void 0:e.label)&&void 0!==t?t:""},ue=function(){var e=Object(a.useState)(),t=Object(c.a)(e,2),n=t[0],r=t[1];return console.log("selected",n),l.a.createElement(u.a,{theme:re},l.a.createElement(s.chakra.div,{my:4,maxW:"lg",mx:"auto"},l.a.createElement(ee,{my:4},(function(e){var t=e.selectedItem;return l.a.createElement(l.a.Fragment,null,l.a.createElement(q,null,l.a.createElement(Y,null,l.a.createElement(s.chakra.span,{d:"block",isTruncated:!0},null!==t&&void 0!==t?t:"Select")),l.a.createElement(Q,null,l.a.createElement(G,null,l.a.createElement(d.a,{"aria-hidden":!0,boxSize:"1em",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"}))))),l.a.createElement($,null,l.a.createElement(Z,null,ce.map((function(e,t){return l.a.createElement(X,{key:e,value:e,index:t},e)})))))})),l.a.createElement(ee,{my:4,isDisabled:!0,itemToString:oe,defaultValue:ie[3]},(function(e){var t=e.selectedItem;return l.a.createElement(l.a.Fragment,null,l.a.createElement(q,null,l.a.createElement(Y,null,oe(t)),l.a.createElement(Q,{"aria-label":"toggle menu"},l.a.createElement(G,null,l.a.createElement(d.a,{as:b.a,boxSize:"1em"})))),l.a.createElement($,null,l.a.createElement(Z,null,ie.map((function(e,t){return l.a.createElement(X,{key:e.value,value:e,index:t},oe(e))})))))})),l.a.createElement(ee,{my:4,itemToString:oe,value:n,onChange:function(e){return r(e)}},(function(e){var t=e.inputValue,n=function(e){return Object(f.a)(e,null!==t&&void 0!==t?t:"",{keys:["label"]})}(ie);return l.a.createElement(l.a.Fragment,null,l.a.createElement(q,null,l.a.createElement(Y,null,l.a.createElement(U,{placeholder:"Select"})),l.a.createElement(Q,{"aria-label":"toggle menu"},l.a.createElement(G,null,l.a.createElement(d.a,{as:b.a})))),l.a.createElement($,null,l.a.createElement(Z,null,n.map((function(e,t){return l.a.createElement(X,{key:e.value,value:e,index:t},oe(e))})),n.length<=0&&l.a.createElement(s.chakra.div,{py:2,pl:3,pr:9},"No found"))))})),l.a.createElement(ee,{my:4,itemToString:oe},(function(e){var t=e.inputValue,n=e.getLabelProps,a=function(e){return Object(f.a)(e,null!==t&&void 0!==t?t:"",{keys:["label"]})}(ie);return l.a.createElement(m.a,null,l.a.createElement(p.a,n(),"Select a fruit"),l.a.createElement(q,null,l.a.createElement(Y,null,l.a.createElement(U,{placeholder:"Select"})),l.a.createElement(Q,{"aria-label":"toggle menu"},l.a.createElement(G,null,l.a.createElement(d.a,{as:b.a,boxSize:"1em"})))),l.a.createElement($,null,l.a.createElement(Z,null,a.map((function(e,t){return l.a.createElement(X,{key:e.value,value:e,index:t},oe(e))})),a.length<=0&&l.a.createElement(s.chakra.div,{py:2,pl:3,pr:9},"No found"))))})),l.a.createElement(m.a,null,l.a.createElement(ne,{my:4,w:"full",itemToString:oe},(function(e){var t=e.selectedItems,n=e.inputValue,a=e.getLabelProps,r=function(e){return e.filter((function(e){return n?t.indexOf(e)<0&&oe(e).toLowerCase().startsWith(n.toLowerCase()):t.indexOf(e)<0}))}(ie);return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,a(),"Multi"),l.a.createElement(q,null,l.a.createElement(Y,null,null===t||void 0===t?void 0:t.map((function(e,t){return l.a.createElement(te,{key:"issues-item-".concat(t),index:t,selectedItem:e},e.label)})),l.a.createElement(U,{placeholder:"Select"})),l.a.createElement(Q,{"aria-label":"toggle menu"},l.a.createElement(G,null,l.a.createElement(d.a,{as:b.a,boxSize:"1em"})))),l.a.createElement($,null,l.a.createElement(Z,null,r.map((function(e,t){return l.a.createElement(X,{key:e.value,value:e,index:t},e.label)})),r.length<=0&&l.a.createElement(s.chakra.div,{py:2,pl:3,pr:9},"No found"))))}))),l.a.createElement(le,{options:ie,placeholder:"Select"})))};i.a.render(l.a.createElement(ue,null),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.02e8eccc.chunk.js.map