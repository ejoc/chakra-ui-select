(this["webpackJsonpchakra-ui-select-example"]=this["webpackJsonpchakra-ui-select-example"]||[]).push([[0],{152:function(e,t,n){e.exports=n(163)},153:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);n(153);var a=n(0),l=n.n(a),r=n(53),i=n.n(r),o=n(4),c=n(96),u=n(101),s=n(39),d=n(109),m=n(75),p=n(177),b=n(179),g=n(73),f=n(174),v=n(175),h=n(47),E=n(48),O=n(38),y=n(168),x=n(164),S=n(108),j=n(76),I=n(27),w=n(178),k=n(165),C=n(176),D={pos:"absolute",mt:1,w:"full",zIndex:2,overflow:"auto",maxH:60,rounded:"md"};function _(e){return{py:1,rounded:"md",w:"full",bg:Object(f.a)("#fff","gray.700")(e),boxShadow:Object(f.a)("lg","dark-lg")(e),border:"1px",borderColor:"gray.100"}}function P(e){return{py:2,pl:3,pr:9,color:Object(f.a)("gray.900","gray.50")(e),pos:"relative",userSelect:"none",cursor:"default",fontWeight:"normal",transition:"background 50ms ease-in 0s",_focus:{bg:Object(f.a)("gray.100","whiteAlpha.100")(e)},_active:{bg:Object(f.a)("gray.100","whiteAlpha.200")(e)},_expanded:{bg:Object(f.a)("gray.100","whitxeAlpha.100")(e)},_selected:{bg:"gray.50",fontWeight:"semibold"},_disabled:{opacity:.4,cursor:"not-allowed"}}}function W(e){var t=e.theme;return{bg:"white",position:"relative",w:"full",border:"1px",borderColor:"gray.300",rounded:"md",shadow:"base",textAlign:"left",cursor:"default",display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between",minH:10,transition:"all 0.2s",outline:0,_focusWithin:{outline:"none",borderColor:"gray.400",boxShadow:"0 0 0 1px "+Object(v.a)(t,"gray.400")},_focus:{outline:"none",borderColor:"gray.400",boxShadow:"0 0 0 1px "+Object(v.a)(t,"gray.400")},_readOnly:{boxShadow:"none !important",userSelect:"all"},_disabled:{opacity:.4,cursor:"not-allowed"},_hover:{borderColor:"gray.400",_disabled:{borderColor:"gray.300"}}}}function L(e){return{d:"block",fontSize:"sm",fontWeight:"medium",color:Object(f.a)("gray.700","gray.50")(e)}}var T={zIndex:0,pos:"absolute",inset:0,w:"100%",h:"100%",cursor:"default",_focus:{outline:"none"},_disabled:{opacity:.4,cursor:"not-allowed"}},z={parts:["control","menu","list","option","label","button"],baseStyle:function(e){return{menu:D,list:_(e),option:P(e),control:W(e),label:L(e),button:T}}},V={SelectSingle:z,SelectMultiple:{parts:["control","menu","list","option","label","button"],baseStyle:z.baseStyle}};function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}var H={position:"absolute",top:0,left:0,visibility:"hidden",height:0,overflow:"scroll",whiteSpace:"pre"},N=function(e,t){t.style.fontSize=e.fontSize,t.style.fontFamily=e.fontFamily,t.style.fontWeight=e.fontWeight,t.style.fontStyle=e.fontStyle,t.style.letterSpacing=e.letterSpacing,t.style.textTransform=e.textTransform},F=Object(h.a)((function(e,t){var n=e.wrapperStyle,r=e.className,i=e.placeholder,o=e.minWidth,c=e.placeholderIsMinWidth,u=e.isDisabled,s=R(e,["wrapperStyle","className","placeholder","minWidth","placeholderIsMinWidth","isDisabled"]),d=Object(a.useState)(o),m=d[0],p=d[1],b=Object(a.useRef)(null),g=Object(a.useRef)(null),f=Object(a.useRef)(null),v=Object(x.b)("chakra-select__search-input",r),h=e.defaultValue||e.value||"";Object(a.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===b||void 0===b||null===(e=b.current)||void 0===e||e.focus()}}})),Object(a.useEffect)((function(){O()}),[]),Object(a.useEffect)((function(){var t;if(g&&"undefined"!==typeof(null===(t=g.current)||void 0===t?void 0:t.scrollWidth)){var n,a,l;if(i&&(!e.value||e.value&&c))n=Math.max(g.current.scrollWidth,null===(a=f.current)||void 0===a?void 0:a.scrollWidth)+2;else n=(null===(l=g.current)||void 0===l?void 0:l.scrollWidth)+2;o&&n<o&&(n=o),n!==m&&p(n)}}),[h,o,m,c,i]);var O=function(){if(window.getComputedStyle&&null!==b&&void 0!==b&&b.current){var e=b.current,t=e&&window.getComputedStyle(e);t&&(g.current&&N(t,g.current),f.current&&N(t,f.current))}},y=M({d:"inline-block",visibility:u?"hidden":"visible",color:"gray.800"},n),S=M({w:m+"px",border:0,fontSize:"inherit",outline:0,padding:0,color:"inherit",boxSizing:"content-box",background:"0px center"},s);return l.a.createElement(E.a.div,Object.assign({className:v},y),l.a.createElement(E.a.input,Object.assign({placeholder:i},S,{ref:b})),l.a.createElement(E.a.div,{ref:g,sx:H},h),i&&l.a.createElement(E.a.div,{ref:f,sx:H},i))})),A=Object(k.a)({strict:!1,name:"DownshiftContext"}),B=A[0],J=A[1];function K(e){return l.a.createElement(E.a.div,Object.assign({d:"flex",alignItems:"center",flex:"1 1 0%",flexWrap:"wrap",padding:"2px 8px",pos:"relative",overflow:"hidden"},e))}var G=Object(h.a)((function(e,t){return l.a.createElement(E.a.div,Object.assign({ref:t,pos:"absolute",insetY:0,right:0,pr:2,display:"flex",alignItems:"center",pointerEvents:"none",color:"gray.500"},e))})),Y=(Object(h.a)((function(e,t){var n=e.onClick,a=e.className,r=R(e,["onClick","className"]),i=J(),o=i.selectedItem,c=i.clearSelection,u=i.inputRef,s=i.isDisabled,d=Object(x.b)("chakra-select__clean-btn",a);return!o||s?null:l.a.createElement(E.a.div,Object.assign({d:"flex",p:2,ref:t,"aria-hidden":!0,className:d,zIndex:1,tabIndex:-1,outline:"none",color:"gray.500",w:"100%",h:"100%",alignItems:"center",justifyContent:"center",_hover:{color:"gray.600"}},r,{onClick:Object(S.a)(n,(function(e){var t;e.stopPropagation(),c(),null===u||void 0===u||null===(t=u.current)||void 0===t||t.focus()}))}),l.a.createElement(j.b,{focusable:"false","aria-hidden":!0,boxSize:"1em",stroke:"currentColor"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})))})),Object(h.a)((function(e,t){var n=J().isDisabled,a=Object(w.a)(M({isDisabled:n},e)),r=Object(O.b)();return l.a.createElement(E.a.div,Object.assign({ref:t,__css:r.control},a))}))),q=Object(h.a)((function(e,t){var n=e.onClick,a=J(),r=a.getToggleButtonProps,i=a.inputRef,o=a.isDisabled,c=a.isOpen,u=a.getDropdownProps,s=Object(w.a)(M({isDisabled:o},e)),d=Object(O.b)();return l.a.createElement(E.a.button,Object.assign({__css:d.button,ref:t},s,r(M({},null===u||void 0===u?void 0:u({preventKeyAction:c}),{onClick:Object(S.a)(n,(function(e){var t;e.stopPropagation(),null===i||void 0===i||null===(t=i.current)||void 0===t||t.focus()}))}))))})),Q=Object(h.a)((function(e,t){var n=J(),r=n.getInputProps,i=n.isDisabled,o=n.inputRef,c=n.getDropdownProps,u=n.selectedItems,s=Object(w.a)(M({isDisabled:i},e));Object(a.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===o||void 0===o||null===(e=o.current)||void 0===e||e.focus()}}}));var d=u&&u.length>0?"":e.placeholder;return l.a.createElement(a.Fragment,null,l.a.createElement(E.a.div,{zIndex:1,m:.5,pb:.5,pt:.5,visibility:i?"hidden":"visible"},l.a.createElement(F,Object.assign({tabIndex:-1,isDisabled:i,type:"text",autoCapitalize:"none"},s,r(M({ref:o},null===c||void 0===c?void 0:c({placeholder:d,ref:o})))))))}));function U(e){var t=e.children,n=e.value,a=e.index,r=e.isDisabled,i=R(e,["children","value","index","isDisabled"]),o=J(),c=o.getItemProps,u=o.selectedItem,s=o.highlightedIndex,d=Object(O.b)(),m=u===n,p=s===a;return l.a.createElement(E.a.li,Object.assign({bg:p?"gray.50":"white","data-disabled":Object(x.c)(r)},c({item:n,index:a}),{"aria-selected":i.isSelected?"true":""+m,__css:d.option},i),Object(S.c)(t,{isSelected:m,isActive:p}))}var X=Object(h.a)((function(e,t){var n=J().isOpen,a=Object(O.b)();return n?l.a.createElement(E.a.ul,Object.assign({ref:t,__css:a.list},e)):null})),Z=Object(h.a)((function(e,t){var n=Object(O.b)(),a=J().getMenuProps;return l.a.createElement(E.a.div,Object.assign({ref:t,__css:n.menu},a(),e))}));function $(e){var t=e.id,n=e.children,r=e.isOpen,i=e.defaultValue,o=e.defaultIsOpen,c=e.defaultHighlightedIndex,u=void 0===c?0:c,s=e.onChange,d=e.itemToString,m=e.isDisabled,p=R(e,["id","children","isOpen","defaultValue","defaultIsOpen","defaultHighlightedIndex","onChange","itemToString","isDisabled"]),b=Object(y.a)("SelectSingle",{}),g=Object(a.useRef)(null);return l.a.createElement(I.a,{id:t,onChange:s,initialSelectedItem:i,initialIsOpen:o,isOpen:r,itemToString:d,initialHighlightedIndex:u},(function(e){return l.a.createElement(E.a.div,Object.assign({pos:"relative"},p,e.getRootProps()),l.a.createElement(O.a,{value:b},l.a.createElement(B,{value:M({},e,{isDisabled:m,inputRef:g})},Object(S.c)(n,{inputValue:e.inputValue,isOpen:e.isOpen,highlightedIndex:e.highlightedIndex,selectedItem:e.selectedItem,getLabelProps:e.getLabelProps}))))}))}function ee(e){var t=e.children,n=e.selectedItem,a=e.index,r=R(e,["children","selectedItem","index"]),i=J(),o=i.removeSelectedItem,c=i.getSelectedItemProps,u=i.inputRef;return l.a.createElement(C.a,Object.assign({size:"sm",m:"2px",zIndex:1},r,null===c||void 0===c?void 0:c({selectedItem:n,index:a})),l.a.createElement(C.c,{color:"primary",fontWeight:"semibold"},t),l.a.createElement(C.b,{cursor:"default",_focus:{outline:"none"},onClick:function(e){var t;e.stopPropagation(),null===o||void 0===o||o(n),null===(t=u.current)||void 0===t||t.focus()}}))}function te(e){var t=e.id,n=e.children,r=e.onChange,i=e.initialSelectedItems,o=void 0===i?[]:i,c=e.defaultSelectedItems,u=e.itemToString,s=e.value,d=e.isDisabled,m=e.defaultHighlightedIndex,p=void 0===m?0:m,b=e.defaultIsOpen,g=e.isOpen,f=R(e,["id","children","onChange","initialSelectedItems","defaultSelectedItems","itemToString","value","isDisabled","defaultHighlightedIndex","defaultIsOpen","isOpen"]),v=Object(a.useRef)(null),h=Object(y.a)("SelectMultiple",{}),x=Object(I.b)(M({defaultSelectedItems:c,initialSelectedItems:o,onSelectedItemsChange:r},s&&{selectedItems:s})),j=x.getSelectedItemProps,w=x.getDropdownProps,k=x.addSelectedItem,C=x.removeSelectedItem,D=x.selectedItems,_=Object(a.useCallback)((function(e){return M({},e,{selectedItems:D,getDropdownProps:w,getSelectedItemProps:j,removeSelectedItem:C})}),[D,w,j,C]),P=Object(a.useCallback)((function(e,t){switch(t.type){case I.a.stateChangeTypes.keyDownEnter:case I.a.stateChangeTypes.keyDownSpaceButton:case I.a.stateChangeTypes.clickItem:return M({},t,{highlightedIndex:e.highlightedIndex,isOpen:!0,inputValue:""});default:return t}}),[]),W=Object(a.useCallback)((function(e){var t=e.type,n=e.selectedItem;switch(t){case I.a.stateChangeTypes.keyDownEnter:case I.a.stateChangeTypes.keyDownSpaceButton:case I.a.stateChangeTypes.clickItem:n&&k(n)}}),[k]);return l.a.createElement(I.a,{id:t,stateReducer:P,onStateChange:W,selectedItem:null,itemToString:u,initialHighlightedIndex:p,initialIsOpen:b,isOpen:g},(function(e){var t=M({},_(e),{isDisabled:d,inputRef:v});return l.a.createElement(E.a.div,Object.assign({position:"relative"},f,e.getRootProps()),l.a.createElement(O.a,{value:h},l.a.createElement(B,{value:t},Object(S.c)(n,{inputValue:e.inputValue,isOpen:e.isOpen,highlightedIndex:e.highlightedIndex,selectedItems:D,getLabelProps:e.getLabelProps}))))}))}var ne=n(37);function ae(e){var t=e.items,n=e.inputValue,a=e.selectedItems,l=e.getOptionLabel;return t.filter((function(e){return n?a.indexOf(e)<0&&l(e).toLowerCase().startsWith(n.toLowerCase()):a.indexOf(e)<0}))}function le(e){var t=e.options,n=e.getOptionLabel,r=void 0===n?function(e){return null===e?"":e.label}:n,i=e.getOptionKey,o=void 0===i?function(e){return null===e?"":e.value}:i,c=e.filterOption,u=void 0===c?ae:c,s=e.placeholder,m=e.isSearchable,b=e.value,g=e.onChange,f=e.isDisabled,v=e.label,h=e.noOptionsMessage,E=void 0===h?function(){return"No options"}:h;return l.a.createElement(te,{isDisabled:f,itemToString:r,value:b,onChange:g},(function(e){var n=e.selectedItems,i=e.inputValue,c=e.getLabelProps,b=n.length<=0&&!m&&!!s,g=u({items:t,selectedItems:n,inputValue:i,getOptionLabel:r}),f=E(i),h=g.length<=0&&!!f;return l.a.createElement(a.Fragment,null,!!v&&l.a.createElement(p.a,c(),v),l.a.createElement(Y,null,l.a.createElement(K,null,null===n||void 0===n?void 0:n.map((function(e,t){return l.a.createElement(ee,{key:"legal_practice-item-".concat(t),index:t,selectedItem:e},r(e))})),m&&l.a.createElement(Q,{placeholder:s}),b&&l.a.createElement(ne.a.span,{color:"gray.400",fontWeight:"normal"},s)),l.a.createElement(q,{"aria-label":"toggle menu"},l.a.createElement(G,null,l.a.createElement(d.b,{"aria-hidden":!0,boxSize:"1em",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"}))))),l.a.createElement(Z,null,l.a.createElement(X,null,g.map((function(e,t){var n=o(e),a=r(e);return l.a.createElement(U,{key:JSON.stringify(n),value:e,index:t},a)})),h&&l.a.createElement(ne.a.div,{py:2,pl:3,pr:9,color:"gray.900"},f))))}))}var re=Object(c.a)({components:{SelectSingle:V.SelectSingle,SelectMultiple:V.SelectMultiple}}),ie=[{value:"apple",label:"Apple"},{value:"pear",label:"Pear"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"banana",label:"Banana"}],oe=ie.map((function(e){return e.value})),ce=function(e){var t;return null!==(t=null===e||void 0===e?void 0:e.label)&&void 0!==t?t:""},ue=function(){var e=Object(a.useState)(),t=Object(o.a)(e,2),n=t[0],r=t[1];return l.a.createElement(u.a,{theme:re},l.a.createElement(s.chakra.div,{my:4,maxW:"lg",mx:"auto"},l.a.createElement($,{my:4},(function(e){var t=e.selectedItem;return l.a.createElement(l.a.Fragment,null,l.a.createElement(Y,null,l.a.createElement(K,null,l.a.createElement(s.chakra.span,{d:"block",isTruncated:!0},null!==t&&void 0!==t?t:"Select")),l.a.createElement(q,null,l.a.createElement(G,null,l.a.createElement(d.a,{"aria-hidden":!0,boxSize:"1em",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"}))))),l.a.createElement(Z,null,l.a.createElement(X,null,oe.map((function(e,t){return l.a.createElement(U,{key:e,value:e,index:t},e)})))))})),l.a.createElement($,{my:4,isDisabled:!0,itemToString:ce,defaultValue:ie[3]},(function(e){var t=e.selectedItem;return l.a.createElement(l.a.Fragment,null,l.a.createElement(Y,null,l.a.createElement(K,null,ce(t)),l.a.createElement(q,{"aria-label":"toggle menu"},l.a.createElement(G,null,l.a.createElement(d.a,{as:b.a,boxSize:"1em"})))),l.a.createElement(Z,null,l.a.createElement(X,null,ie.map((function(e,t){return l.a.createElement(U,{key:e.value,value:e,index:t},ce(e))})))))})),l.a.createElement($,{my:4,itemToString:ce,value:n,onChange:function(e){return r(e)},defaultHighlightedIndex:3},(function(e){var t=e.inputValue,n=function(e){return Object(g.a)(e,null!==t&&void 0!==t?t:"",{keys:["label"]})}(ie);return l.a.createElement(l.a.Fragment,null,l.a.createElement(Y,null,l.a.createElement(K,null,l.a.createElement(Q,{placeholder:"Select"})),l.a.createElement(q,{"aria-label":"toggle menu"},l.a.createElement(G,null,l.a.createElement(d.a,{as:b.a})))),l.a.createElement(Z,null,l.a.createElement(X,null,n.map((function(e,t){return l.a.createElement(U,{key:e.value,value:e,index:t},ce(e))})),n.length<=0&&l.a.createElement(s.chakra.div,{py:2,pl:3,pr:9},"No found"))))})),l.a.createElement($,{my:4,itemToString:ce},(function(e){var t=e.inputValue,n=e.getLabelProps,a=function(e){return Object(g.a)(e,null!==t&&void 0!==t?t:"",{keys:["label"]})}(ie);return l.a.createElement(m.a,null,l.a.createElement(p.a,n(),"Select a fruit"),l.a.createElement(Y,null,l.a.createElement(K,null,l.a.createElement(Q,{placeholder:"Select"})),l.a.createElement(q,{"aria-label":"toggle menu"},l.a.createElement(G,null,l.a.createElement(d.a,{as:b.a,boxSize:"1em"})))),l.a.createElement(Z,null,l.a.createElement(X,null,a.map((function(e,t){return l.a.createElement(U,{key:e.value,value:e,index:t},ce(e))})),a.length<=0&&l.a.createElement(s.chakra.div,{py:2,pl:3,pr:9},"No found"))))})),l.a.createElement(m.a,null,l.a.createElement(te,{my:4,w:"full",itemToString:ce},(function(e){var t=e.selectedItems,n=e.inputValue,a=e.getLabelProps,r=function(e){return e.filter((function(e){return n?t.indexOf(e)<0&&ce(e).toLowerCase().startsWith(n.toLowerCase()):t.indexOf(e)<0}))}(ie);return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,a(),"Multi"),l.a.createElement(Y,null,l.a.createElement(K,null,null===t||void 0===t?void 0:t.map((function(e,t){return l.a.createElement(ee,{key:"issues-item-".concat(t),index:t,selectedItem:e},e.label)})),l.a.createElement(Q,{placeholder:"Select"})),l.a.createElement(q,{"aria-label":"toggle menu"},l.a.createElement(G,null,l.a.createElement(d.a,{as:b.a,boxSize:"1em"})))),l.a.createElement(Z,null,l.a.createElement(X,null,r.map((function(e,t){return l.a.createElement(U,{key:e.value,value:e,index:t},e.label)})),r.length<=0&&l.a.createElement(s.chakra.div,{py:2,pl:3,pr:9},"No found"))))}))),l.a.createElement(le,{options:ie,placeholder:"Select"})))};i.a.render(l.a.createElement(ue,null),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.fd331d01.chunk.js.map