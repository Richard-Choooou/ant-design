"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6077],{34607:function(le,x){Object.defineProperty(x,"__esModule",{value:!0});var e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};x.default=e},303840:function(le,x,e){Object.defineProperty(x,"__esModule",{value:!0}),x.default=void 0;const $=y(e(554434));function y(i){return i&&i.__esModule?i:{default:i}}const P=$;x.default=P,le.exports=P},554434:function(le,x,e){Object.defineProperty(x,"__esModule",{value:!0}),Object.defineProperty(x,"default",{enumerable:!0,get:function(){return D}});var $=g(e(667294)),y=X(e(34607)),P=X(e(592074));function i(a,n,c){return n in a?Object.defineProperty(a,n,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[n]=c,a}function X(a){return a&&a.__esModule?a:{default:a}}function C(a){if(typeof WeakMap!="function")return null;var n=new WeakMap,c=new WeakMap;return(C=function(f){return f?c:n})(a)}function g(a,n){if(!n&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var c=C(n);if(c&&c.has(a))return c.get(a);var f={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Z in a)if(Z!=="default"&&Object.prototype.hasOwnProperty.call(a,Z)){var M=A?Object.getOwnPropertyDescriptor(a,Z):null;M&&(M.get||M.set)?Object.defineProperty(f,Z,M):f[Z]=a[Z]}return f.default=a,c&&c.set(a,f),f}function re(a){for(var n=1;n<arguments.length;n++){var c=arguments[n]!=null?arguments[n]:{},f=Object.keys(c);typeof Object.getOwnPropertySymbols=="function"&&(f=f.concat(Object.getOwnPropertySymbols(c).filter(function(A){return Object.getOwnPropertyDescriptor(c,A).enumerable}))),f.forEach(function(A){i(a,A,c[A])})}return a}function o(a,n){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);n&&(f=f.filter(function(A){return Object.getOwnPropertyDescriptor(a,A).enumerable})),c.push.apply(c,f)}return c}function m(a,n){return n=n!=null?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(n,c))}),a}var E=function(a,n){return $.createElement(P.default,m(re({},a),{ref:n,icon:y.default}))},D=$.forwardRef(E)},302281:function(le,x,e){e.d(x,{Z:function(){return S}});var $=e(97857),y=e.n($),P=e(9783),i=e.n(P),X=e(805574),C=e.n(X),g=e(513769),re=e.n(g),o=e(667294),m=e(294184),E=e.n(m),D=e(650010),a=e(851863),n=e(73287),c=e(976883),f=e(578294),A=e(358245),Z=e(46287),M=e(785893),ve=function(t){var d=t.prefixCls,r=t.title,s=t.footer,u=t.extra,p=t.closeIcon,T=t.closable,b=t.onClose,B=t.headerStyle,L=t.drawerStyle,U=t.bodyStyle,w=t.footerStyle,K=t.children,W=o.useCallback(function(N){return(0,M.jsx)("button",{type:"button",onClick:b,"aria-label":"Close",className:"".concat(d,"-close"),children:N})},[b]),j=(0,Z.Z)(T,p,W,void 0,!0),R=C()(j,2),z=R[0],Y=R[1],te=o.useMemo(function(){return!r&&!z?null:(0,M.jsxs)("div",{style:B,className:E()("".concat(d,"-header"),i()({},"".concat(d,"-header-close-only"),z&&!r&&!u)),children:[(0,M.jsxs)("div",{className:"".concat(d,"-header-title"),children:[Y,r&&(0,M.jsx)("div",{className:"".concat(d,"-title"),children:r})]}),u&&(0,M.jsx)("div",{className:"".concat(d,"-extra"),children:u})]})},[z,Y,u,B,d,r]),G=o.useMemo(function(){if(!s)return null;var N="".concat(d,"-footer");return(0,M.jsx)("div",{className:N,style:w,children:s})},[s,w,d]);return(0,M.jsxs)("div",{className:"".concat(d,"-wrapper-body"),style:L,children:[te,(0,M.jsx)("div",{className:"".concat(d,"-body"),style:U,children:K}),G]})},oe=ve,q=e(141035),_=e(986943),he=function(t){var d,r=t.componentCls,s=t.motionDurationSlow,u={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:"all ".concat(s)}}};return i()({},r,(d={},i()(d,"".concat(r,"-mask-motion"),{"&-enter, &-appear, &-leave":{"&-active":{transition:"all ".concat(s)}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}}),i()(d,"".concat(r,"-panel-motion"),{"&-left":[u,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[u,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[u,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[u,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}),d))},se=he,Q=function(t){var d,r,s=t.componentCls,u=t.zIndexPopup,p=t.colorBgMask,T=t.colorBgElevated,b=t.motionDurationSlow,B=t.motionDurationMid,L=t.padding,U=t.paddingLG,w=t.fontSizeLG,K=t.lineHeightLG,W=t.lineWidth,j=t.lineType,R=t.colorSplit,z=t.marginSM,Y=t.colorIcon,te=t.colorIconHover,G=t.colorText,N=t.fontWeightStrong,ne=t.footerPaddingBlock,ue=t.footerPaddingInline,ie="".concat(s,"-content-wrapper");return i()({},s,(r={position:"fixed",inset:0,zIndex:u,pointerEvents:"none","&-pure":(d={position:"relative",background:T},i()(d,"&".concat(s,"-left"),{boxShadow:t.boxShadowDrawerLeft}),i()(d,"&".concat(s,"-right"),{boxShadow:t.boxShadowDrawerRight}),i()(d,"&".concat(s,"-top"),{boxShadow:t.boxShadowDrawerUp}),i()(d,"&".concat(s,"-bottom"),{boxShadow:t.boxShadowDrawerDown}),d),"&-inline":{position:"absolute"}},i()(r,"".concat(s,"-mask"),{position:"absolute",inset:0,zIndex:u,background:p,pointerEvents:"auto"}),i()(r,ie,{position:"absolute",zIndex:u,maxWidth:"100vw",transition:"all ".concat(b),"&-hidden":{display:"none"}}),i()(r,"&-left > ".concat(ie),{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:t.boxShadowDrawerLeft}),i()(r,"&-right > ".concat(ie),{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:t.boxShadowDrawerRight}),i()(r,"&-top > ".concat(ie),{top:0,insetInline:0,boxShadow:t.boxShadowDrawerUp}),i()(r,"&-bottom > ".concat(ie),{bottom:0,insetInline:0,boxShadow:t.boxShadowDrawerDown}),i()(r,"".concat(s,"-content"),{width:"100%",height:"100%",overflow:"auto",background:T,pointerEvents:"auto"}),i()(r,"".concat(s,"-wrapper-body"),{display:"flex",flexDirection:"column",width:"100%",height:"100%"}),i()(r,"".concat(s,"-header"),{display:"flex",flex:0,alignItems:"center",padding:"".concat(L,"px ").concat(U,"px"),fontSize:w,lineHeight:K,borderBottom:"".concat(W,"px ").concat(j," ").concat(R),"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}}),i()(r,"".concat(s,"-extra"),{flex:"none"}),i()(r,"".concat(s,"-close"),{display:"inline-block",marginInlineEnd:z,color:Y,fontWeight:N,fontSize:w,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:"color ".concat(B),textRendering:"auto","&:focus, &:hover":{color:te,textDecoration:"none"}}),i()(r,"".concat(s,"-title"),{flex:1,margin:0,color:G,fontWeight:t.fontWeightStrong,fontSize:w,lineHeight:K}),i()(r,"".concat(s,"-body"),{flex:1,minWidth:0,minHeight:0,padding:U,overflow:"auto"}),i()(r,"".concat(s,"-footer"),{flexShrink:0,padding:"".concat(ne,"px ").concat(ue,"px"),borderTop:"".concat(W,"px ").concat(j," ").concat(R)}),i()(r,"&-rtl",{direction:"rtl"}),r))},ee=(0,q.Z)("Drawer",function(h){var t=(0,_.TS)(h,{});return[Q(t),se(t)]},function(h){return{zIndexPopup:h.zIndexPopupBase,footerPaddingBlock:h.paddingXS,footerPaddingInline:h.padding}}),ce=["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange"],de=["prefixCls","style","className","placement"],O=null,l={distance:180},I=function(t){var d=t.rootClassName,r=t.width,s=t.height,u=t.size,p=u===void 0?"default":u,T=t.mask,b=T===void 0?!0:T,B=t.push,L=B===void 0?l:B,U=t.open,w=t.afterOpenChange,K=t.onClose,W=t.prefixCls,j=t.getContainer,R=t.style,z=t.className,Y=t.visible,te=t.afterVisibleChange,G=re()(t,ce),N=o.useContext(n.E_),ne=N.getPopupContainer,ue=N.getPrefixCls,ie=N.direction,J=N.drawer,ae=ue("drawer",W),Ce=ee(ae),ge=C()(Ce,2),_e=ge[0],pe=ge[1],Me=j===void 0&&ne?function(){return ne(document.body)}:j,Se=E()(i()({"no-mask":!b},"".concat(ae,"-rtl"),ie==="rtl"),d,pe);if(!1)var Ie,xe;var fe=o.useMemo(function(){return r!=null?r:p==="large"?736:378},[r,p]),Pe=o.useMemo(function(){return s!=null?s:p==="large"?736:378},[s,p]),De={motionName:(0,a.m)(ae,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},Oe=function(we){return{motionName:(0,a.m)(ae,"panel-motion-".concat(we)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}},Ee=(0,A.H)();return _e((0,M.jsx)(f.BR,{children:(0,M.jsx)(c.Ux,{status:!0,override:!0,children:(0,M.jsx)(D.Z,y()(y()({prefixCls:ae,onClose:K,maskMotion:De,motion:Oe},G),{},{open:U!=null?U:Y,mask:b,push:L,width:fe,height:Pe,style:y()(y()({},J==null?void 0:J.style),R),className:E()(J==null?void 0:J.className,z),rootClassName:Se,getContainer:Me,afterOpenChange:w!=null?w:te,panelRef:Ee,children:(0,M.jsx)(oe,y()(y()({prefixCls:ae},G),{},{onClose:K}))}))})}))},v=function(t){var d=t.prefixCls,r=t.style,s=t.className,u=t.placement,p=u===void 0?"right":u,T=re()(t,de),b=o.useContext(n.E_),B=b.getPrefixCls,L=B("drawer",d),U=ee(L),w=C()(U,2),K=w[0],W=w[1],j=E()(L,"".concat(L,"-pure"),"".concat(L,"-").concat(p),W,s);return K((0,M.jsx)("div",{className:j,style:r,children:(0,M.jsx)(oe,y()({prefixCls:L},T))}))};I._InternalPanelDoNotUseOrYouWillBeFired=v;var S=I},25835:function(le,x,e){e.d(x,{Z:function(){return de}});var $=e(97857),y=e.n($),P=e(719632),i=e.n(P),X=e(805574),C=e.n(X),g=e(667294),re=e(763199),o=e(294184),m=e.n(o),E=e(301192),D=e(358245),a=3;function n(O,l){var I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,v=document.createElement("canvas"),S=v.getContext("2d"),h=O*I,t=l*I;return v.setAttribute("width","".concat(h,"px")),v.setAttribute("height","".concat(t,"px")),S.save(),[S,v,h,t]}function c(){function O(l,I,v,S,h,t,d,r){var s=n(S,h,v),u=C()(s,4),p=u[0],T=u[1],b=u[2],B=u[3];if(l instanceof HTMLImageElement)p.drawImage(l,0,0,b,B);else{var L=t.color,U=t.fontSize,w=t.fontStyle,K=t.fontWeight,W=t.fontFamily,j=Number(U)*v;p.font="".concat(w," normal ").concat(K," ").concat(j,"px/").concat(h,"px ").concat(W),p.fillStyle=L,p.textAlign="center",p.textBaseline="top";var R=Array.isArray(l)?l:[l];R==null||R.forEach(function(k,me){p.fillText(k!=null?k:"",b/2,me*(j+a*v))})}var z=Math.PI/180*Number(I),Y=Math.max(S,h),te=n(Y,Y,v),G=C()(te,3),N=G[0],ne=G[1],ue=G[2];N.translate(ue/2,ue/2),N.rotate(z),b>0&&B>0&&N.drawImage(T,-b/2,-B/2);function ie(k,me){var Re=k*Math.cos(z)-me*Math.sin(z),Te=k*Math.sin(z)+me*Math.cos(z);return[Re,Te]}var J=0,ae=0,Ce=0,ge=0,_e=b/2,pe=B/2,Me=[[0-_e,0-pe],[0+_e,0-pe],[0+_e,0+pe],[0-_e,0+pe]];Me.forEach(function(k){var me=C()(k,2),Re=me[0],Te=me[1],He=ie(Re,Te),be=C()(He,2),$e=be[0],Ke=be[1];J=Math.min(J,$e),ae=Math.max(ae,$e),Ce=Math.min(Ce,Ke),ge=Math.max(ge,Ke)});var Se=J+ue/2,Ie=Ce+ue/2,xe=ae-J,fe=ge-Ce,Pe=d*v,De=r*v,Oe=(xe+Pe)*2,Ee=fe+De,Ne=n(Oe,Ee),we=C()(Ne,2),Ze=we[0],Ue=we[1];function je(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,me=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;Ze.drawImage(ne,Se,Ie,xe,fe,k,me,xe,fe)}return je(),je(xe+Pe,-fe/2-De/2),je(xe+Pe,+fe/2+De/2),[Ue.toDataURL(),Oe/v,Ee/v]}return O}var f=e(564543),A=e(656790);function Z(O){var l=g.useRef(!1),I=g.useRef(),v=(0,A.zX)(O);return function(){l.current||(l.current=!0,v(),I.current=(0,f.Z)(function(){l.current=!1}))}}function M(O){return O.replace(/([A-Z])/g,"-$1").toLowerCase()}function ve(O){return Object.keys(O).map(function(l){return"".concat(M(l),": ").concat(O[l],";")}).join(" ")}function oe(){return window.devicePixelRatio||1}var q=function(l,I){var v=!1;return l.removedNodes.length&&(v=Array.from(l.removedNodes).some(function(S){return I(S)})),l.type==="attributes"&&I(l.target)&&(v=!0),v},_=2,he=3;function se(O){var l=g.useState(function(){return new Map}),I=C()(l,1),v=I[0],S=function(r,s,u){if(u){if(!v.get(u)){var p=document.createElement("div");v.set(u,p)}var T=v.get(u);T.setAttribute("style",ve(y()(y()({},O),{},{backgroundImage:"url('".concat(r,"')"),backgroundSize:"".concat(Math.floor(s),"px")}))),u.append(T)}},h=function(r){var s=v.get(r);s&&r&&r.removeChild(s),v.delete(r)},t=function(r){return Array.from(v.values()).includes(r)};return[S,h,t]}var Q=e(785893);function ee(O,l){return O.size===l.size?O:l}var ce=function(l){var I,v,S=l.zIndex,h=S===void 0?9:S,t=l.rotate,d=t===void 0?-22:t,r=l.width,s=l.height,u=l.image,p=l.content,T=l.font,b=T===void 0?{}:T,B=l.style,L=l.className,U=l.rootClassName,w=l.gap,K=w===void 0?[100,100]:w,W=l.offset,j=l.children,R=(0,E.Z)(),z=C()(R,2),Y=z[1],te=b.color,G=te===void 0?Y.colorFill:te,N=b.fontSize,ne=N===void 0?Y.fontSizeLG:N,ue=b.fontWeight,ie=ue===void 0?"normal":ue,J=b.fontStyle,ae=J===void 0?"normal":J,Ce=b.fontFamily,ge=Ce===void 0?"sans-serif":Ce,_e=C()(K,2),pe=_e[0],Me=_e[1],Se=pe/2,Ie=Me/2,xe=(I=W==null?void 0:W[0])!==null&&I!==void 0?I:Se,fe=(v=W==null?void 0:W[1])!==null&&v!==void 0?v:Ie,Pe=g.useMemo(function(){var V={zIndex:h,position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",backgroundRepeat:"repeat"},F=xe-Se,H=fe-Ie;return F>0&&(V.left="".concat(F,"px"),V.width="calc(100% - ".concat(F,"px)"),F=0),H>0&&(V.top="".concat(H,"px"),V.height="calc(100% - ".concat(H,"px)"),H=0),V.backgroundPosition="".concat(F,"px ").concat(H,"px"),V},[h,xe,Se,fe,Ie]),De=g.useState(),Oe=C()(De,2),Ee=Oe[0],Ne=Oe[1],we=g.useState(new Set),Ze=C()(we,2),Ue=Ze[0],je=Ze[1],k=g.useMemo(function(){var V=Ee?[Ee]:[];return[].concat(V,i()(Array.from(Ue)))},[Ee,Ue]),me=function(F){var H=120,ye=64;if(!u&&F.measureText){F.font="".concat(Number(ne),"px ").concat(ge);var Be=Array.isArray(p)?p:[p],Le=Be.map(function(Ae){var ze=F.measureText(Ae);return[ze.width,ze.fontBoundingBoxAscent+ze.fontBoundingBoxDescent]});H=Math.ceil(Math.max.apply(Math,i()(Le.map(function(Ae){return Ae[0]})))),ye=Math.ceil(Math.max.apply(Math,i()(Le.map(function(Ae){return Ae[1]}))))*Be.length+(Be.length-1)*a}return[r!=null?r:H,s!=null?s:ye]},Re=c(),Te=g.useState(null),He=C()(Te,2),be=He[0],$e=He[1],Ke=function(){var F=document.createElement("canvas"),H=F.getContext("2d");if(H){var ye=oe(),Be=me(H),Le=C()(Be,2),Ae=Le[0],ze=Le[1],Xe=function(tt){var nt=Re(tt||"",d,ye,Ae,ze,{color:G,fontSize:ne,fontStyle:ae,fontWeight:ie,fontFamily:ge},pe,Me),Ge=C()(nt,2),at=Ge[0],rt=Ge[1];$e([at,rt])};if(u){var We=new Image;We.onload=function(){Xe(We)},We.onerror=function(){Xe(p)},We.crossOrigin="anonymous",We.referrerPolicy="no-referrer",We.src=u}else Xe(p)}},Ye=Z(Ke),Ve=se(Pe),Fe=C()(Ve,3),Qe=Fe[0],Je=Fe[1],ke=Fe[2];(0,g.useEffect)(function(){be&&k.forEach(function(V){Qe(be[0],be[1],V)})},[be,k]);var qe=function(F){F.forEach(function(H){q(H,ke)&&Ye()})};(0,re.b)(k,qe),(0,g.useEffect)(Ye,[d,h,r,s,u,p,G,ne,ie,ae,ge,pe,Me,xe,fe]);var et=g.useMemo(function(){return{add:function(F){je(function(H){var ye=new Set(H);return ye.add(F),ee(H,ye)})},remove:function(F){Je(F),je(function(H){var ye=new Set(H);return ye.delete(F),ee(H,ye)})}}},[]);return(0,Q.jsx)("div",{ref:Ne,className:m()(L,U),style:y()({position:"relative"},B),children:(0,Q.jsx)(D.Z.Provider,{value:et,children:j})})},de=ce},931782:function(le,x,e){e.r(x);var $=e(667294),y=e(25835),P=e(785893),i=function(){return(0,P.jsx)(y.Z,{content:"Ant Design",children:(0,P.jsx)("div",{style:{height:500}})})};x.default=i},652421:function(le,x,e){e.r(x);var $=e(97857),y=e.n($),P=e(805574),i=e.n(P),X=e(667294),C=e(185209),g=e(506380),re=e(25835),o=e(432210),m=e(483465),E=e(329573),D=e(209269),a=e(469922),n=e(785893),c=C.Z.Paragraph,f=function(){var Z=g.Z.useForm(),M=i()(Z,1),ve=M[0],oe=(0,X.useState)({content:"Ant Design",color:"rgba(0, 0, 0, 0.15)",fontSize:16,zIndex:11,rotate:-22,gap:[100,100],offset:void 0}),q=i()(oe,2),_=q[0],he=q[1],se=_.content,Q=_.color,ee=_.fontSize,ce=_.zIndex,de=_.rotate,O=_.gap,l=_.offset,I=(0,X.useMemo)(function(){return{content:se,font:{color:typeof Q=="string"?Q:Q.toRgbString(),fontSize:ee},zIndex:ce,rotate:de,gap:O,offset:l}},[_]);return(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsxs)(re.Z,y()(y()({},I),{},{children:[(0,n.jsxs)(C.Z,{children:[(0,n.jsx)(c,{children:"The light-speed iteration of the digital world makes products more complex. However, human consciousness and attention resources are limited. Facing this design contradiction, the pursuit of natural interaction will be the consistent direction of Ant Design."}),(0,n.jsx)(c,{children:"Natural user cognition: According to cognitive psychology, about 80% of external information is obtained through visual channels. The most important visual elements in the interface design, including layout, colors, illustrations, icons, etc., should fully absorb the laws of nature, thereby reducing the user's cognitive cost and bringing authentic and smooth feelings. In some scenarios, opportunely adding other sensory channels such as hearing, touch can create a richer and more natural product experience."}),(0,n.jsx)(c,{children:"Natural user behavior: In the interaction with the system, the designer should fully understand the relationship between users, system roles, and task objectives, and also contextually organize system functions and services. At the same time, a series of methods such as behavior analysis, artificial intelligence and sensors could be applied to assist users to make effective decisions and reduce extra operations of users, to save users' mental and physical resources and make human-computer interaction more natural."})]}),(0,n.jsx)("img",{style:{zIndex:10,width:"100%",maxWidth:800,position:"relative"},src:"https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ",alt:"\u793A\u4F8B\u56FE\u7247"})]})),(0,n.jsxs)(g.Z,{style:{width:280,flexShrink:0,borderLeft:"1px solid #eee",paddingLeft:20,marginLeft:20},form:ve,layout:"vertical",initialValues:_,onValuesChange:function(S,h){he(h)},children:[(0,n.jsx)(g.Z.Item,{name:"content",label:"Content",children:(0,n.jsx)(o.Z,{placeholder:"\u8BF7\u8F93\u5165"})}),(0,n.jsx)(g.Z.Item,{name:"color",label:"Color",children:(0,n.jsx)(m.Z,{})}),(0,n.jsx)(g.Z.Item,{name:"fontSize",label:"FontSize",children:(0,n.jsx)(E.Z,{step:1,min:1,max:100})}),(0,n.jsx)(g.Z.Item,{name:"zIndex",label:"zIndex",children:(0,n.jsx)(E.Z,{step:1,min:0,max:100})}),(0,n.jsx)(g.Z.Item,{name:"rotate",label:"Rotate",children:(0,n.jsx)(E.Z,{step:1,min:-180,max:180})}),(0,n.jsx)(g.Z.Item,{label:"Gap",style:{marginBottom:0},children:(0,n.jsxs)(D.Z,{style:{display:"flex"},align:"baseline",children:[(0,n.jsx)(g.Z.Item,{name:["gap",0],children:(0,n.jsx)(a.Z,{placeholder:"gapX",style:{width:"100%"}})}),(0,n.jsx)(g.Z.Item,{name:["gap",1],children:(0,n.jsx)(a.Z,{placeholder:"gapY",style:{width:"100%"}})})]})}),(0,n.jsx)(g.Z.Item,{label:"Offset",style:{marginBottom:0},children:(0,n.jsxs)(D.Z,{style:{display:"flex"},align:"baseline",children:[(0,n.jsx)(g.Z.Item,{name:["offset",0],children:(0,n.jsx)(a.Z,{placeholder:"offsetLeft",style:{width:"100%"}})}),(0,n.jsx)(g.Z.Item,{name:["offset",1],children:(0,n.jsx)(a.Z,{placeholder:"offsetTop",style:{width:"100%"}})})]})})]})]})};x.default=f},914184:function(le,x,e){e.r(x);var $=e(667294),y=e(25835),P=e(785893),i=function(){return(0,P.jsx)(y.Z,{height:30,width:130,image:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original",children:(0,P.jsx)("div",{style:{height:500}})})};x.default=i},486551:function(le,x,e){e.r(x);var $=e(667294),y=e(25835),P=e(785893),i=function(){return(0,P.jsx)(y.Z,{content:["Ant Design","Happy Working"],children:(0,P.jsx)("div",{style:{height:500}})})};x.default=i},314923:function(le,x,e){e.r(x);var $=e(805574),y=e.n($),P=e(667294),i=e(209269),X=e(988872),C=e(25835),g=e(98651),re=e(302281),o=e(785893),m=(0,o.jsx)("div",{style:{height:300,display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(150, 150, 150, 0.2)"},children:"A mock height"}),E=function(){var a=P.useState(!1),n=y()(a,2),c=n[0],f=n[1],A=P.useState(!1),Z=y()(A,2),M=Z[0],ve=Z[1],oe=function(){return f(!1)},q=function(){return ve(!1)};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(X.ZP,{onClick:function(){return f(!0)},children:"Show Modal"}),(0,o.jsx)(X.ZP,{onClick:function(){return ve(!0)},children:"Show Drawer"})]}),(0,o.jsxs)(C.Z,{content:"Ant Design",children:[(0,o.jsx)(g.Z,{destroyOnClose:!0,open:c,title:"Modal",onCancel:oe,onOk:oe,children:m}),(0,o.jsx)(re.Z,{destroyOnClose:!0,open:M,title:"Drawer",onClose:q,children:m})]})]})};x.default=E},517423:function(le,x,e){e.d(x,{Z:function(){return re}});const $=o=>typeof o=="object"&&o!=null&&o.nodeType===1,y=(o,m)=>(!m||o!=="hidden")&&o!=="visible"&&o!=="clip",P=(o,m)=>{if(o.clientHeight<o.scrollHeight||o.clientWidth<o.scrollWidth){const E=getComputedStyle(o,null);return y(E.overflowY,m)||y(E.overflowX,m)||(D=>{const a=(n=>{if(!n.ownerDocument||!n.ownerDocument.defaultView)return null;try{return n.ownerDocument.defaultView.frameElement}catch(c){return null}})(D);return!!a&&(a.clientHeight<D.scrollHeight||a.clientWidth<D.scrollWidth)})(o)}return!1},i=(o,m,E,D,a,n,c,f)=>n<o&&c>m||n>o&&c<m?0:n<=o&&f<=E||c>=m&&f>=E?n-o-D:c>m&&f<E||n<o&&f>E?c-m+a:0,X=o=>{const m=o.parentElement;return m==null?o.getRootNode().host||null:m},C=(o,m)=>{var E,D,a,n;if(typeof document=="undefined")return[];const{scrollMode:c,block:f,inline:A,boundary:Z,skipOverflowHiddenElements:M}=m,ve=typeof Z=="function"?Z:d=>d!==Z;if(!$(o))throw new TypeError("Invalid target");const oe=document.scrollingElement||document.documentElement,q=[];let _=o;for(;$(_)&&ve(_);){if(_=X(_),_===oe){q.push(_);break}_!=null&&_===document.body&&P(_)&&!P(document.documentElement)||_!=null&&P(_,M)&&q.push(_)}const he=(D=(E=window.visualViewport)==null?void 0:E.width)!=null?D:innerWidth,se=(n=(a=window.visualViewport)==null?void 0:a.height)!=null?n:innerHeight,{scrollX:Q,scrollY:ee}=window,{height:ce,width:de,top:O,right:l,bottom:I,left:v}=o.getBoundingClientRect();let S=f==="start"||f==="nearest"?O:f==="end"?I:O+ce/2,h=A==="center"?v+de/2:A==="end"?l:v;const t=[];for(let d=0;d<q.length;d++){const r=q[d],{height:s,width:u,top:p,right:T,bottom:b,left:B}=r.getBoundingClientRect();if(c==="if-needed"&&O>=0&&v>=0&&I<=se&&l<=he&&O>=p&&I<=b&&v>=B&&l<=T)return t;const L=getComputedStyle(r),U=parseInt(L.borderLeftWidth,10),w=parseInt(L.borderTopWidth,10),K=parseInt(L.borderRightWidth,10),W=parseInt(L.borderBottomWidth,10);let j=0,R=0;const z="offsetWidth"in r?r.offsetWidth-r.clientWidth-U-K:0,Y="offsetHeight"in r?r.offsetHeight-r.clientHeight-w-W:0,te="offsetWidth"in r?r.offsetWidth===0?0:u/r.offsetWidth:0,G="offsetHeight"in r?r.offsetHeight===0?0:s/r.offsetHeight:0;if(oe===r)j=f==="start"?S:f==="end"?S-se:f==="nearest"?i(ee,ee+se,se,w,W,ee+S,ee+S+ce,ce):S-se/2,R=A==="start"?h:A==="center"?h-he/2:A==="end"?h-he:i(Q,Q+he,he,U,K,Q+h,Q+h+de,de),j=Math.max(0,j+ee),R=Math.max(0,R+Q);else{j=f==="start"?S-p-w:f==="end"?S-b+W+Y:f==="nearest"?i(p,b,s,w,W+Y,S,S+ce,ce):S-(p+s/2)+Y/2,R=A==="start"?h-B-U:A==="center"?h-(B+u/2)+z/2:A==="end"?h-T+K+z:i(B,T,u,U,K+z,h,h+de,de);const{scrollLeft:N,scrollTop:ne}=r;j=Math.max(0,Math.min(ne+j/G,r.scrollHeight-s/G+Y)),R=Math.max(0,Math.min(N+R/te,r.scrollWidth-u/te+z)),S+=ne-j,h+=N-R}t.push({el:r,top:j,left:R})}return t},g=o=>o===!1?{block:"end",inline:"nearest"}:(m=>m===Object(m)&&Object.keys(m).length!==0)(o)?o:{block:"start",inline:"nearest"};function re(o,m){if(!o.isConnected||!(D=>{let a=D;for(;a&&a.parentNode;){if(a.parentNode===document)return!0;a=a.parentNode instanceof ShadowRoot?a.parentNode.host:a.parentNode}return!1})(o))return;if((D=>typeof D=="object"&&typeof D.behavior=="function")(m))return m.behavior(C(o,m));const E=typeof m=="boolean"||m==null?void 0:m.behavior;for(const{el:D,top:a,left:n}of C(o,g(m)))D.scroll({top:a,left:n,behavior:E})}}}]);
