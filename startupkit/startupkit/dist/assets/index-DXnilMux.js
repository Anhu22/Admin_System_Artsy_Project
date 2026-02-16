(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))i(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function c(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function i(d){if(d.ep)return;d.ep=!0;const f=c(d);fetch(d.href,f)}})();function nh(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Id={exports:{}},vl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function zv(){if(yg)return vl;yg=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function c(i,d,f){var g=null;if(f!==void 0&&(g=""+f),d.key!==void 0&&(g=""+d.key),"key"in d){f={};for(var b in d)b!=="key"&&(f[b]=d[b])}else f=d;return d=f.ref,{$$typeof:a,type:i,key:g,ref:d!==void 0?d:null,props:f}}return vl.Fragment=s,vl.jsx=c,vl.jsxs=c,vl}var jg;function Ov(){return jg||(jg=1,Id.exports=zv()),Id.exports}var r=Ov(),Jd={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function Bv(){if(wg)return pe;wg=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),g=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),y=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,M={};function T(O,W,te){this.props=O,this.context=W,this.refs=M,this.updater=te||A}T.prototype.isReactComponent={},T.prototype.setState=function(O,W){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,W,"setState")},T.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function k(){}k.prototype=T.prototype;function N(O,W,te){this.props=O,this.context=W,this.refs=M,this.updater=te||A}var E=N.prototype=new k;E.constructor=N,S(E,T.prototype),E.isPureReactComponent=!0;var z=Array.isArray,K={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function L(O,W,te,re,ie,je){return te=je.ref,{$$typeof:a,type:O,key:W,ref:te!==void 0?te:null,props:je}}function R(O,W){return L(O.type,W,void 0,void 0,void 0,O.props)}function D(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function I(O){var W={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(te){return W[te]})}var $=/\/+/g;function P(O,W){return typeof O=="object"&&O!==null&&O.key!=null?I(""+O.key):W.toString(36)}function Y(){}function oe(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(Y,Y):(O.status="pending",O.then(function(W){O.status==="pending"&&(O.status="fulfilled",O.value=W)},function(W){O.status==="pending"&&(O.status="rejected",O.reason=W)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function me(O,W,te,re,ie){var je=typeof O;(je==="undefined"||je==="boolean")&&(O=null);var ue=!1;if(O===null)ue=!0;else switch(je){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(O.$$typeof){case a:case s:ue=!0;break;case w:return ue=O._init,me(ue(O._payload),W,te,re,ie)}}if(ue)return ie=ie(O),ue=re===""?"."+P(O,0):re,z(ie)?(te="",ue!=null&&(te=ue.replace($,"$&/")+"/"),me(ie,W,te,"",function(ot){return ot})):ie!=null&&(D(ie)&&(ie=R(ie,te+(ie.key==null||O&&O.key===ie.key?"":(""+ie.key).replace($,"$&/")+"/")+ue)),W.push(ie)),1;ue=0;var We=re===""?".":re+":";if(z(O))for(var ke=0;ke<O.length;ke++)re=O[ke],je=We+P(re,ke),ue+=me(re,W,te,je,ie);else if(ke=v(O),typeof ke=="function")for(O=ke.call(O),ke=0;!(re=O.next()).done;)re=re.value,je=We+P(re,ke++),ue+=me(re,W,te,je,ie);else if(je==="object"){if(typeof O.then=="function")return me(oe(O),W,te,re,ie);throw W=String(O),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return ue}function G(O,W,te){if(O==null)return O;var re=[],ie=0;return me(O,re,"","",function(je){return W.call(te,je,ie++)}),re}function ee(O){if(O._status===-1){var W=O._result;W=W(),W.then(function(te){(O._status===0||O._status===-1)&&(O._status=1,O._result=te)},function(te){(O._status===0||O._status===-1)&&(O._status=2,O._result=te)}),O._status===-1&&(O._status=0,O._result=W)}if(O._status===1)return O._result.default;throw O._result}var se=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function be(){}return pe.Children={map:G,forEach:function(O,W,te){G(O,function(){W.apply(this,arguments)},te)},count:function(O){var W=0;return G(O,function(){W++}),W},toArray:function(O){return G(O,function(W){return W})||[]},only:function(O){if(!D(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},pe.Component=T,pe.Fragment=c,pe.Profiler=d,pe.PureComponent=N,pe.StrictMode=i,pe.Suspense=m,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,pe.__COMPILER_RUNTIME={__proto__:null,c:function(O){return K.H.useMemoCache(O)}},pe.cache=function(O){return function(){return O.apply(null,arguments)}},pe.cloneElement=function(O,W,te){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var re=S({},O.props),ie=O.key,je=void 0;if(W!=null)for(ue in W.ref!==void 0&&(je=void 0),W.key!==void 0&&(ie=""+W.key),W)!H.call(W,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&W.ref===void 0||(re[ue]=W[ue]);var ue=arguments.length-2;if(ue===1)re.children=te;else if(1<ue){for(var We=Array(ue),ke=0;ke<ue;ke++)We[ke]=arguments[ke+2];re.children=We}return L(O.type,ie,void 0,void 0,je,re)},pe.createContext=function(O){return O={$$typeof:g,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:f,_context:O},O},pe.createElement=function(O,W,te){var re,ie={},je=null;if(W!=null)for(re in W.key!==void 0&&(je=""+W.key),W)H.call(W,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(ie[re]=W[re]);var ue=arguments.length-2;if(ue===1)ie.children=te;else if(1<ue){for(var We=Array(ue),ke=0;ke<ue;ke++)We[ke]=arguments[ke+2];ie.children=We}if(O&&O.defaultProps)for(re in ue=O.defaultProps,ue)ie[re]===void 0&&(ie[re]=ue[re]);return L(O,je,void 0,void 0,null,ie)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(O){return{$$typeof:b,render:O}},pe.isValidElement=D,pe.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:ee}},pe.memo=function(O,W){return{$$typeof:h,type:O,compare:W===void 0?null:W}},pe.startTransition=function(O){var W=K.T,te={};K.T=te;try{var re=O(),ie=K.S;ie!==null&&ie(te,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(be,se)}catch(je){se(je)}finally{K.T=W}},pe.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},pe.use=function(O){return K.H.use(O)},pe.useActionState=function(O,W,te){return K.H.useActionState(O,W,te)},pe.useCallback=function(O,W){return K.H.useCallback(O,W)},pe.useContext=function(O){return K.H.useContext(O)},pe.useDebugValue=function(){},pe.useDeferredValue=function(O,W){return K.H.useDeferredValue(O,W)},pe.useEffect=function(O,W,te){var re=K.H;if(typeof te=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return re.useEffect(O,W)},pe.useId=function(){return K.H.useId()},pe.useImperativeHandle=function(O,W,te){return K.H.useImperativeHandle(O,W,te)},pe.useInsertionEffect=function(O,W){return K.H.useInsertionEffect(O,W)},pe.useLayoutEffect=function(O,W){return K.H.useLayoutEffect(O,W)},pe.useMemo=function(O,W){return K.H.useMemo(O,W)},pe.useOptimistic=function(O,W){return K.H.useOptimistic(O,W)},pe.useReducer=function(O,W,te){return K.H.useReducer(O,W,te)},pe.useRef=function(O){return K.H.useRef(O)},pe.useState=function(O){return K.H.useState(O)},pe.useSyncExternalStore=function(O,W,te){return K.H.useSyncExternalStore(O,W,te)},pe.useTransition=function(){return K.H.useTransition()},pe.version="19.1.0",pe}var Ag;function po(){return Ag||(Ag=1,Jd.exports=Bv()),Jd.exports}var C=po();const Le=nh(C);var Wd={exports:{}},yl={},ef={exports:{}},tf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function $v(){return Sg||(Sg=1,function(a){function s(G,ee){var se=G.length;G.push(ee);e:for(;0<se;){var be=se-1>>>1,O=G[be];if(0<d(O,ee))G[be]=ee,G[se]=O,se=be;else break e}}function c(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var ee=G[0],se=G.pop();if(se!==ee){G[0]=se;e:for(var be=0,O=G.length,W=O>>>1;be<W;){var te=2*(be+1)-1,re=G[te],ie=te+1,je=G[ie];if(0>d(re,se))ie<O&&0>d(je,re)?(G[be]=je,G[ie]=se,be=ie):(G[be]=re,G[te]=se,be=te);else if(ie<O&&0>d(je,se))G[be]=je,G[ie]=se,be=ie;else break e}}return ee}function d(G,ee){var se=G.sortIndex-ee.sortIndex;return se!==0?se:G.id-ee.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var g=Date,b=g.now();a.unstable_now=function(){return g.now()-b}}var m=[],h=[],w=1,y=null,v=3,A=!1,S=!1,M=!1,T=!1,k=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;function z(G){for(var ee=c(h);ee!==null;){if(ee.callback===null)i(h);else if(ee.startTime<=G)i(h),ee.sortIndex=ee.expirationTime,s(m,ee);else break;ee=c(h)}}function K(G){if(M=!1,z(G),!S)if(c(m)!==null)S=!0,H||(H=!0,P());else{var ee=c(h);ee!==null&&me(K,ee.startTime-G)}}var H=!1,L=-1,R=5,D=-1;function I(){return T?!0:!(a.unstable_now()-D<R)}function $(){if(T=!1,H){var G=a.unstable_now();D=G;var ee=!0;try{e:{S=!1,M&&(M=!1,N(L),L=-1),A=!0;var se=v;try{t:{for(z(G),y=c(m);y!==null&&!(y.expirationTime>G&&I());){var be=y.callback;if(typeof be=="function"){y.callback=null,v=y.priorityLevel;var O=be(y.expirationTime<=G);if(G=a.unstable_now(),typeof O=="function"){y.callback=O,z(G),ee=!0;break t}y===c(m)&&i(m),z(G)}else i(m);y=c(m)}if(y!==null)ee=!0;else{var W=c(h);W!==null&&me(K,W.startTime-G),ee=!1}}break e}finally{y=null,v=se,A=!1}ee=void 0}}finally{ee?P():H=!1}}}var P;if(typeof E=="function")P=function(){E($)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,oe=Y.port2;Y.port1.onmessage=$,P=function(){oe.postMessage(null)}}else P=function(){k($,0)};function me(G,ee){L=k(function(){G(a.unstable_now())},ee)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(G){G.callback=null},a.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<G?Math.floor(1e3/G):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(G){switch(v){case 1:case 2:case 3:var ee=3;break;default:ee=v}var se=v;v=ee;try{return G()}finally{v=se}},a.unstable_requestPaint=function(){T=!0},a.unstable_runWithPriority=function(G,ee){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var se=v;v=G;try{return ee()}finally{v=se}},a.unstable_scheduleCallback=function(G,ee,se){var be=a.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?be+se:be):se=be,G){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=se+O,G={id:w++,callback:ee,priorityLevel:G,startTime:se,expirationTime:O,sortIndex:-1},se>be?(G.sortIndex=se,s(h,G),c(m)===null&&G===c(h)&&(M?(N(L),L=-1):M=!0,me(K,se-be))):(G.sortIndex=O,s(m,G),S||A||(S=!0,H||(H=!0,P()))),G},a.unstable_shouldYield=I,a.unstable_wrapCallback=function(G){var ee=v;return function(){var se=v;v=ee;try{return G.apply(this,arguments)}finally{v=se}}}}(tf)),tf}var kg;function Kv(){return kg||(kg=1,ef.exports=$v()),ef.exports}var rf={exports:{}},mt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function Uv(){if(Cg)return mt;Cg=1;var a=po();function s(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)h+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var i={d:{f:c,r:function(){throw Error(s(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(m,h,w){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:y==null?null:""+y,children:m,containerInfo:h,implementation:w}}var g=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,mt.createPortal=function(m,h){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(s(299));return f(m,h,null,w)},mt.flushSync=function(m){var h=g.T,w=i.p;try{if(g.T=null,i.p=2,m)return m()}finally{g.T=h,i.p=w,i.d.f()}},mt.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(m,h))},mt.prefetchDNS=function(m){typeof m=="string"&&i.d.D(m)},mt.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var w=h.as,y=b(w,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,A=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;w==="style"?i.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:A}):w==="script"&&i.d.X(m,{crossOrigin:y,integrity:v,fetchPriority:A,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},mt.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var w=b(h.as,h.crossOrigin);i.d.M(m,{crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(m)},mt.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var w=h.as,y=b(w,h.crossOrigin);i.d.L(m,w,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},mt.preloadModule=function(m,h){if(typeof m=="string")if(h){var w=b(h.as,h.crossOrigin);i.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(m)},mt.requestFormReset=function(m){i.d.r(m)},mt.unstable_batchedUpdates=function(m,h){return m(h)},mt.useFormState=function(m,h,w){return g.H.useFormState(m,h,w)},mt.useFormStatus=function(){return g.H.useHostTransitionStatus()},mt.version="19.1.0",mt}var Eg;function P1(){if(Eg)return rf.exports;Eg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),rf.exports=Uv(),rf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function Lv(){if(Mg)return yl;Mg=1;var a=Kv(),s=po(),c=P1();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(f(e)!==e)throw Error(i(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,o=t;;){var l=n.return;if(l===null)break;var u=l.alternate;if(u===null){if(o=l.return,o!==null){n=o;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===n)return b(l),e;if(u===o)return b(l),t;u=u.sibling}throw Error(i(188))}if(n.return!==o.return)n=l,o=u;else{for(var x=!1,j=l.child;j;){if(j===n){x=!0,n=l,o=u;break}if(j===o){x=!0,o=l,n=u;break}j=j.sibling}if(!x){for(j=u.child;j;){if(j===n){x=!0,n=u,o=l;break}if(j===o){x=!0,o=u,n=l;break}j=j.sibling}if(!x)throw Error(i(189))}}if(n.alternate!==o)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function h(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=h(e),t!==null)return t;e=e.sibling}return null}var w=Object.assign,y=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),E=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),I=Symbol.for("react.memo_cache_sentinel"),$=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Symbol.for("react.client.reference");function oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Y?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case T:return"Profiler";case M:return"StrictMode";case K:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case E:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return t=e.displayName||null,t!==null?t:oe(e.type)||"Memo";case R:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var me=Array.isArray,G=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},be=[],O=-1;function W(e){return{current:e}}function te(e){0>O||(e.current=be[O],be[O]=null,O--)}function re(e,t){O++,be[O]=e.current,e.current=t}var ie=W(null),je=W(null),ue=W(null),We=W(null);function ke(e,t){switch(re(ue,t),re(je,e),re(ie,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?G0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=G0(t),e=Z0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}te(ie),re(ie,e)}function ot(){te(ie),te(je),te(ue)}function mr(e){e.memoizedState!==null&&re(We,e);var t=ie.current,n=Z0(t,e.type);t!==n&&(re(je,e),re(ie,n))}function Et(e){je.current===e&&(te(ie),te(je)),We.current===e&&(te(We),ml._currentValue=se)}var dt=Object.prototype.hasOwnProperty,Sr=a.unstable_scheduleCallback,ar=a.unstable_cancelCallback,pr=a.unstable_shouldYield,Uc=a.unstable_requestPaint,ne=a.unstable_now,Rn=a.unstable_getCurrentPriorityLevel,lt=a.unstable_ImmediatePriority,xt=a.unstable_UserBlockingPriority,ii=a.unstable_NormalPriority,px=a.unstable_LowPriority,Th=a.unstable_IdlePriority,gx=a.log,bx=a.unstable_setDisableYieldValue,wo=null,Mt=null;function Xr(e){if(typeof gx=="function"&&bx(e),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(wo,e)}catch{}}var Nt=Math.clz32?Math.clz32:yx,xx=Math.log,vx=Math.LN2;function yx(e){return e>>>=0,e===0?32:31-(xx(e)/vx|0)|0}var si=256,ci=4194304;function Dn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ui(e,t,n){var o=e.pendingLanes;if(o===0)return 0;var l=0,u=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var j=o&134217727;return j!==0?(o=j&~u,o!==0?l=Dn(o):(x&=j,x!==0?l=Dn(x):n||(n=j&~e,n!==0&&(l=Dn(n))))):(j=o&~u,j!==0?l=Dn(j):x!==0?l=Dn(x):n||(n=o&~e,n!==0&&(l=Dn(n)))),l===0?0:t!==0&&t!==l&&(t&u)===0&&(u=l&-l,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:l}function Ao(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function jx(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _h(){var e=si;return si<<=1,(si&4194048)===0&&(si=256),e}function Rh(){var e=ci;return ci<<=1,(ci&62914560)===0&&(ci=4194304),e}function Lc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function So(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function wx(e,t,n,o,l,u){var x=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var j=e.entanglements,_=e.expirationTimes,q=e.hiddenUpdates;for(n=x&~n;0<n;){var Z=31-Nt(n),J=1<<Z;j[Z]=0,_[Z]=-1;var F=q[Z];if(F!==null)for(q[Z]=null,Z=0;Z<F.length;Z++){var V=F[Z];V!==null&&(V.lane&=-536870913)}n&=~J}o!==0&&Dh(e,o,0),u!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=u&~(x&~t))}function Dh(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-Nt(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|n&4194090}function zh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Nt(n),l=1<<o;l&t|e[o]&t&&(e[o]|=t),n&=~l}}function Hc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Oh(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:mg(e.type))}function Ax(e,t){var n=ee.p;try{return ee.p=e,t()}finally{ee.p=n}}var Ir=Math.random().toString(36).slice(2),ft="__reactFiber$"+Ir,vt="__reactProps$"+Ir,fa="__reactContainer$"+Ir,qc="__reactEvents$"+Ir,Sx="__reactListeners$"+Ir,kx="__reactHandles$"+Ir,Bh="__reactResources$"+Ir,ko="__reactMarker$"+Ir;function Yc(e){delete e[ft],delete e[vt],delete e[qc],delete e[Sx],delete e[kx]}function ha(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fa]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=W0(e);e!==null;){if(n=e[ft])return n;e=W0(e)}return t}e=n,n=e.parentNode}return null}function ma(e){if(e=e[ft]||e[fa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Co(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function pa(e){var t=e[Bh];return t||(t=e[Bh]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function et(e){e[ko]=!0}var $h=new Set,Kh={};function zn(e,t){ga(e,t),ga(e+"Capture",t)}function ga(e,t){for(Kh[e]=t,e=0;e<t.length;e++)$h.add(t[e])}var Cx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Uh={},Lh={};function Ex(e){return dt.call(Lh,e)?!0:dt.call(Uh,e)?!1:Cx.test(e)?Lh[e]=!0:(Uh[e]=!0,!1)}function di(e,t,n){if(Ex(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function fi(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function kr(e,t,n,o){if(o===null)e.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+o)}}var Pc,Hh;function ba(e){if(Pc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pc=t&&t[1]||"",Hh=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pc+e+Hh}var Fc=!1;function Vc(e,t){if(!e||Fc)return"";Fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(V){var F=V}Reflect.construct(e,[],J)}else{try{J.call()}catch(V){F=V}e.call(J.prototype)}}else{try{throw Error()}catch(V){F=V}(J=e())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(V){if(V&&F&&typeof V.stack=="string")return[V.stack,F.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=o.DetermineComponentFrameRoot(),x=u[0],j=u[1];if(x&&j){var _=x.split(`
`),q=j.split(`
`);for(l=o=0;o<_.length&&!_[o].includes("DetermineComponentFrameRoot");)o++;for(;l<q.length&&!q[l].includes("DetermineComponentFrameRoot");)l++;if(o===_.length||l===q.length)for(o=_.length-1,l=q.length-1;1<=o&&0<=l&&_[o]!==q[l];)l--;for(;1<=o&&0<=l;o--,l--)if(_[o]!==q[l]){if(o!==1||l!==1)do if(o--,l--,0>l||_[o]!==q[l]){var Z=`
`+_[o].replace(" at new "," at ");return e.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",e.displayName)),Z}while(1<=o&&0<=l);break}}}finally{Fc=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ba(n):""}function Mx(e){switch(e.tag){case 26:case 27:case 5:return ba(e.type);case 16:return ba("Lazy");case 13:return ba("Suspense");case 19:return ba("SuspenseList");case 0:case 15:return Vc(e.type,!1);case 11:return Vc(e.type.render,!1);case 1:return Vc(e.type,!0);case 31:return ba("Activity");default:return""}}function Qh(e){try{var t="";do t+=Mx(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Nx(e){var t=qh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(x){o=""+x,u.call(this,x)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(x){o=""+x},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function hi(e){e._valueTracker||(e._valueTracker=Nx(e))}function Yh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=qh(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Tx=/[\n"\\]/g;function Ht(e){return e.replace(Tx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Gc(e,t,n,o,l,u,x,j){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),t!=null?x==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Lt(t)):e.value!==""+Lt(t)&&(e.value=""+Lt(t)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),t!=null?Zc(e,x,Lt(t)):n!=null?Zc(e,x,Lt(n)):o!=null&&e.removeAttribute("value"),l==null&&u!=null&&(e.defaultChecked=!!u),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),j!=null&&typeof j!="function"&&typeof j!="symbol"&&typeof j!="boolean"?e.name=""+Lt(j):e.removeAttribute("name")}function Ph(e,t,n,o,l,u,x,j){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;n=n!=null?""+Lt(n):"",t=t!=null?""+Lt(t):n,j||t===e.value||(e.value=t),e.defaultValue=t}o=o??l,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=j?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x)}function Zc(e,t,n){t==="number"&&mi(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function xa(e,t,n,o){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Fh(e,t,n){if(t!=null&&(t=""+Lt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Lt(n):""}function Vh(e,t,n,o){if(t==null){if(o!=null){if(n!=null)throw Error(i(92));if(me(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),t=n}n=Lt(t),e.defaultValue=n,o=e.textContent,o===n&&o!==""&&o!==null&&(e.value=o)}function va(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _x=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gh(e,t,n){var o=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,n):typeof n!="number"||n===0||_x.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Zh(e,t,n){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var l in t)o=t[l],t.hasOwnProperty(l)&&n[l]!==o&&Gh(e,l,o)}else for(var u in t)t.hasOwnProperty(u)&&Gh(e,u,t[u])}function Xc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pi(e){return Dx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ic=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ya=null,ja=null;function Xh(e){var t=ma(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Gc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ht(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var l=o[vt]||null;if(!l)throw Error(i(90));Gc(o,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)o=n[t],o.form===e.form&&Yh(o)}break e;case"textarea":Fh(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&xa(e,!!n.multiple,t,!1)}}}var Wc=!1;function Ih(e,t,n){if(Wc)return e(t,n);Wc=!0;try{var o=e(t);return o}finally{if(Wc=!1,(ya!==null||ja!==null)&&(es(),ya&&(t=ya,e=ja,ja=ya=null,Xh(t),e)))for(t=0;t<e.length;t++)Xh(e[t])}}function Eo(e,t){var n=e.stateNode;if(n===null)return null;var o=n[vt]||null;if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var Cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=!1;if(Cr)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){eu=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{eu=!1}var Jr=null,tu=null,gi=null;function Jh(){if(gi)return gi;var e,t=tu,n=t.length,o,l="value"in Jr?Jr.value:Jr.textContent,u=l.length;for(e=0;e<n&&t[e]===l[e];e++);var x=n-e;for(o=1;o<=x&&t[n-o]===l[u-o];o++);return gi=l.slice(e,1<o?1-o:void 0)}function bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function Wh(){return!1}function yt(e){function t(n,o,l,u,x){this._reactName=n,this._targetInst=l,this.type=o,this.nativeEvent=u,this.target=x,this.currentTarget=null;for(var j in e)e.hasOwnProperty(j)&&(n=e[j],this[j]=n?n(u):u[j]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?xi:Wh,this.isPropagationStopped=Wh,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vi=yt(On),No=w({},On,{view:0,detail:0}),zx=yt(No),ru,nu,To,yi=w({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==To&&(To&&e.type==="mousemove"?(ru=e.screenX-To.screenX,nu=e.screenY-To.screenY):nu=ru=0,To=e),ru)},movementY:function(e){return"movementY"in e?e.movementY:nu}}),em=yt(yi),Ox=w({},yi,{dataTransfer:0}),Bx=yt(Ox),$x=w({},No,{relatedTarget:0}),au=yt($x),Kx=w({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Ux=yt(Kx),Lx=w({},On,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hx=yt(Lx),Qx=w({},On,{data:0}),tm=yt(Qx),qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Px[e])?!!t[e]:!1}function ou(){return Fx}var Vx=w({},No,{key:function(e){if(e.key){var t=qx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gx=yt(Vx),Zx=w({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rm=yt(Zx),Xx=w({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),Ix=yt(Xx),Jx=w({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wx=yt(Jx),e5=w({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t5=yt(e5),r5=w({},On,{newState:0,oldState:0}),n5=yt(r5),a5=[9,13,27,32],lu=Cr&&"CompositionEvent"in window,_o=null;Cr&&"documentMode"in document&&(_o=document.documentMode);var o5=Cr&&"TextEvent"in window&&!_o,nm=Cr&&(!lu||_o&&8<_o&&11>=_o),am=" ",om=!1;function lm(e,t){switch(e){case"keyup":return a5.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function im(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wa=!1;function l5(e,t){switch(e){case"compositionend":return im(t);case"keypress":return t.which!==32?null:(om=!0,am);case"textInput":return e=t.data,e===am&&om?null:e;default:return null}}function i5(e,t){if(wa)return e==="compositionend"||!lu&&lm(e,t)?(e=Jh(),gi=tu=Jr=null,wa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nm&&t.locale!=="ko"?null:t.data;default:return null}}var s5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!s5[e.type]:t==="textarea"}function cm(e,t,n,o){ya?ja?ja.push(o):ja=[o]:ya=o,t=ls(t,"onChange"),0<t.length&&(n=new vi("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Ro=null,Do=null;function c5(e){q0(e,0)}function ji(e){var t=Co(e);if(Yh(t))return e}function um(e,t){if(e==="change")return t}var dm=!1;if(Cr){var iu;if(Cr){var su="oninput"in document;if(!su){var fm=document.createElement("div");fm.setAttribute("oninput","return;"),su=typeof fm.oninput=="function"}iu=su}else iu=!1;dm=iu&&(!document.documentMode||9<document.documentMode)}function hm(){Ro&&(Ro.detachEvent("onpropertychange",mm),Do=Ro=null)}function mm(e){if(e.propertyName==="value"&&ji(Do)){var t=[];cm(t,Do,e,Jc(e)),Ih(c5,t)}}function u5(e,t,n){e==="focusin"?(hm(),Ro=t,Do=n,Ro.attachEvent("onpropertychange",mm)):e==="focusout"&&hm()}function d5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ji(Do)}function f5(e,t){if(e==="click")return ji(t)}function h5(e,t){if(e==="input"||e==="change")return ji(t)}function m5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:m5;function zo(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var l=n[o];if(!dt.call(t,l)||!Tt(e[l],t[l]))return!1}return!0}function pm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gm(e,t){var n=pm(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pm(n)}}function bm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=mi(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=mi(e.document)}return t}function cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var p5=Cr&&"documentMode"in document&&11>=document.documentMode,Aa=null,uu=null,Oo=null,du=!1;function vm(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;du||Aa==null||Aa!==mi(o)||(o=Aa,"selectionStart"in o&&cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Oo&&zo(Oo,o)||(Oo=o,o=ls(uu,"onSelect"),0<o.length&&(t=new vi("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Aa)))}function Bn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sa={animationend:Bn("Animation","AnimationEnd"),animationiteration:Bn("Animation","AnimationIteration"),animationstart:Bn("Animation","AnimationStart"),transitionrun:Bn("Transition","TransitionRun"),transitionstart:Bn("Transition","TransitionStart"),transitioncancel:Bn("Transition","TransitionCancel"),transitionend:Bn("Transition","TransitionEnd")},fu={},ym={};Cr&&(ym=document.createElement("div").style,"AnimationEvent"in window||(delete Sa.animationend.animation,delete Sa.animationiteration.animation,delete Sa.animationstart.animation),"TransitionEvent"in window||delete Sa.transitionend.transition);function $n(e){if(fu[e])return fu[e];if(!Sa[e])return e;var t=Sa[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ym)return fu[e]=t[n];return e}var jm=$n("animationend"),wm=$n("animationiteration"),Am=$n("animationstart"),g5=$n("transitionrun"),b5=$n("transitionstart"),x5=$n("transitioncancel"),Sm=$n("transitionend"),km=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function or(e,t){km.set(e,t),zn(t,[e])}var Cm=new WeakMap;function Qt(e,t){if(typeof e=="object"&&e!==null){var n=Cm.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Qh(t)},Cm.set(e,t),t)}return{value:e,source:t,stack:Qh(t)}}var qt=[],ka=0,mu=0;function wi(){for(var e=ka,t=mu=ka=0;t<e;){var n=qt[t];qt[t++]=null;var o=qt[t];qt[t++]=null;var l=qt[t];qt[t++]=null;var u=qt[t];if(qt[t++]=null,o!==null&&l!==null){var x=o.pending;x===null?l.next=l:(l.next=x.next,x.next=l),o.pending=l}u!==0&&Em(n,l,u)}}function Ai(e,t,n,o){qt[ka++]=e,qt[ka++]=t,qt[ka++]=n,qt[ka++]=o,mu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function pu(e,t,n,o){return Ai(e,t,n,o),Si(e)}function Ca(e,t){return Ai(e,null,null,t),Si(e)}function Em(e,t,n){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n);for(var l=!1,u=e.return;u!==null;)u.childLanes|=n,o=u.alternate,o!==null&&(o.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(l=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,l&&t!==null&&(l=31-Nt(n),e=u.hiddenUpdates,o=e[l],o===null?e[l]=[t]:o.push(t),t.lane=n|536870912),u):null}function Si(e){if(50<ll)throw ll=0,jd=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ea={};function v5(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _t(e,t,n,o){return new v5(e,t,n,o)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Er(e,t){var n=e.alternate;return n===null?(n=_t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Mm(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ki(e,t,n,o,l,u){var x=0;if(o=e,typeof e=="function")gu(e)&&(x=1);else if(typeof e=="string")x=jv(e,n,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=_t(31,n,t,l),e.elementType=D,e.lanes=u,e;case S:return Kn(n.children,l,u,t);case M:x=8,l|=24;break;case T:return e=_t(12,n,t,l|2),e.elementType=T,e.lanes=u,e;case K:return e=_t(13,n,t,l),e.elementType=K,e.lanes=u,e;case H:return e=_t(19,n,t,l),e.elementType=H,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:case E:x=10;break e;case N:x=9;break e;case z:x=11;break e;case L:x=14;break e;case R:x=16,o=null;break e}x=29,n=Error(i(130,e===null?"null":typeof e,"")),o=null}return t=_t(x,n,t,l),t.elementType=e,t.type=o,t.lanes=u,t}function Kn(e,t,n,o){return e=_t(7,e,o,t),e.lanes=n,e}function bu(e,t,n){return e=_t(6,e,null,t),e.lanes=n,e}function xu(e,t,n){return t=_t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ma=[],Na=0,Ci=null,Ei=0,Yt=[],Pt=0,Un=null,Mr=1,Nr="";function Ln(e,t){Ma[Na++]=Ei,Ma[Na++]=Ci,Ci=e,Ei=t}function Nm(e,t,n){Yt[Pt++]=Mr,Yt[Pt++]=Nr,Yt[Pt++]=Un,Un=e;var o=Mr;e=Nr;var l=32-Nt(o)-1;o&=~(1<<l),n+=1;var u=32-Nt(t)+l;if(30<u){var x=l-l%5;u=(o&(1<<x)-1).toString(32),o>>=x,l-=x,Mr=1<<32-Nt(t)+l|n<<l|o,Nr=u+e}else Mr=1<<u|n<<l|o,Nr=e}function vu(e){e.return!==null&&(Ln(e,1),Nm(e,1,0))}function yu(e){for(;e===Ci;)Ci=Ma[--Na],Ma[Na]=null,Ei=Ma[--Na],Ma[Na]=null;for(;e===Un;)Un=Yt[--Pt],Yt[Pt]=null,Nr=Yt[--Pt],Yt[Pt]=null,Mr=Yt[--Pt],Yt[Pt]=null}var bt=null,He=null,Ee=!1,Hn=null,gr=!1,ju=Error(i(519));function Qn(e){var t=Error(i(418,""));throw Ko(Qt(t,e)),ju}function Tm(e){var t=e.stateNode,n=e.type,o=e.memoizedProps;switch(t[ft]=e,t[vt]=o,n){case"dialog":Ae("cancel",t),Ae("close",t);break;case"iframe":case"object":case"embed":Ae("load",t);break;case"video":case"audio":for(n=0;n<sl.length;n++)Ae(sl[n],t);break;case"source":Ae("error",t);break;case"img":case"image":case"link":Ae("error",t),Ae("load",t);break;case"details":Ae("toggle",t);break;case"input":Ae("invalid",t),Ph(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),hi(t);break;case"select":Ae("invalid",t);break;case"textarea":Ae("invalid",t),Vh(t,o.value,o.defaultValue,o.children),hi(t)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||o.suppressHydrationWarning===!0||V0(t.textContent,n)?(o.popover!=null&&(Ae("beforetoggle",t),Ae("toggle",t)),o.onScroll!=null&&Ae("scroll",t),o.onScrollEnd!=null&&Ae("scrollend",t),o.onClick!=null&&(t.onclick=is),t=!0):t=!1,t||Qn(e)}function _m(e){for(bt=e.return;bt;)switch(bt.tag){case 5:case 13:gr=!1;return;case 27:case 3:gr=!0;return;default:bt=bt.return}}function Bo(e){if(e!==bt)return!1;if(!Ee)return _m(e),Ee=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||$d(e.type,e.memoizedProps)),n=!n),n&&He&&Qn(e),_m(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){He=ir(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}He=null}}else t===27?(t=He,pn(e.type)?(e=Hd,Hd=null,He=e):He=t):He=bt?ir(e.stateNode.nextSibling):null;return!0}function $o(){He=bt=null,Ee=!1}function Rm(){var e=Hn;return e!==null&&(At===null?At=e:At.push.apply(At,e),Hn=null),e}function Ko(e){Hn===null?Hn=[e]:Hn.push(e)}var wu=W(null),qn=null,Tr=null;function Wr(e,t,n){re(wu,t._currentValue),t._currentValue=n}function _r(e){e._currentValue=wu.current,te(wu)}function Au(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Su(e,t,n,o){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){var x=l.child;u=u.firstContext;e:for(;u!==null;){var j=u;u=l;for(var _=0;_<t.length;_++)if(j.context===t[_]){u.lanes|=n,j=u.alternate,j!==null&&(j.lanes|=n),Au(u.return,n,e),o||(x=null);break e}u=j.next}}else if(l.tag===18){if(x=l.return,x===null)throw Error(i(341));x.lanes|=n,u=x.alternate,u!==null&&(u.lanes|=n),Au(x,n,e),x=null}else x=l.child;if(x!==null)x.return=l;else for(x=l;x!==null;){if(x===e){x=null;break}if(l=x.sibling,l!==null){l.return=x.return,x=l;break}x=x.return}l=x}}function Uo(e,t,n,o){e=null;for(var l=t,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var x=l.alternate;if(x===null)throw Error(i(387));if(x=x.memoizedProps,x!==null){var j=l.type;Tt(l.pendingProps.value,x.value)||(e!==null?e.push(j):e=[j])}}else if(l===We.current){if(x=l.alternate,x===null)throw Error(i(387));x.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(ml):e=[ml])}l=l.return}e!==null&&Su(t,e,n,o),t.flags|=262144}function Mi(e){for(e=e.firstContext;e!==null;){if(!Tt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Yn(e){qn=e,Tr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ht(e){return Dm(qn,e)}function Ni(e,t){return qn===null&&Yn(e),Dm(e,t)}function Dm(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Tr===null){if(e===null)throw Error(i(308));Tr=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Tr=Tr.next=t;return n}var y5=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},j5=a.unstable_scheduleCallback,w5=a.unstable_NormalPriority,Xe={$$typeof:E,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ku(){return{controller:new y5,data:new Map,refCount:0}}function Lo(e){e.refCount--,e.refCount===0&&j5(w5,function(){e.controller.abort()})}var Ho=null,Cu=0,Ta=0,_a=null;function A5(e,t){if(Ho===null){var n=Ho=[];Cu=0,Ta=Md(),_a={status:"pending",value:void 0,then:function(o){n.push(o)}}}return Cu++,t.then(zm,zm),t}function zm(){if(--Cu===0&&Ho!==null){_a!==null&&(_a.status="fulfilled");var e=Ho;Ho=null,Ta=0,_a=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function S5(e,t){var n=[],o={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(o.status="rejected",o.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),o}var Om=G.S;G.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&A5(e,t),Om!==null&&Om(e,t)};var Pn=W(null);function Eu(){var e=Pn.current;return e!==null?e:Oe.pooledCache}function Ti(e,t){t===null?re(Pn,Pn.current):re(Pn,t.pool)}function Bm(){var e=Eu();return e===null?null:{parent:Xe._currentValue,pool:e}}var Qo=Error(i(460)),$m=Error(i(474)),_i=Error(i(542)),Mu={then:function(){}};function Km(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ri(){}function Um(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ri,Ri),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hm(e),e;default:if(typeof t.status=="string")t.then(Ri,Ri);else{if(e=Oe,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=o}},function(o){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hm(e),e}throw qo=t,Qo}}var qo=null;function Lm(){if(qo===null)throw Error(i(459));var e=qo;return qo=null,e}function Hm(e){if(e===Qo||e===_i)throw Error(i(483))}var en=!1;function Nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function tn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function rn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var l=o.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),o.pending=t,t=Si(e),Em(e,null,n),t}return Ai(e,o,t,n),Si(e)}function Yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,zh(e,n)}}function _u(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var l=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var x={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?l=u=x:u=u.next=x,n=n.next}while(n!==null);u===null?l=u=t:u=u.next=t}else l=u=t;n={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:o.shared,callbacks:o.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ru=!1;function Po(){if(Ru){var e=_a;if(e!==null)throw e}}function Fo(e,t,n,o){Ru=!1;var l=e.updateQueue;en=!1;var u=l.firstBaseUpdate,x=l.lastBaseUpdate,j=l.shared.pending;if(j!==null){l.shared.pending=null;var _=j,q=_.next;_.next=null,x===null?u=q:x.next=q,x=_;var Z=e.alternate;Z!==null&&(Z=Z.updateQueue,j=Z.lastBaseUpdate,j!==x&&(j===null?Z.firstBaseUpdate=q:j.next=q,Z.lastBaseUpdate=_))}if(u!==null){var J=l.baseState;x=0,Z=q=_=null,j=u;do{var F=j.lane&-536870913,V=F!==j.lane;if(V?(Se&F)===F:(o&F)===F){F!==0&&F===Ta&&(Ru=!0),Z!==null&&(Z=Z.next={lane:0,tag:j.tag,payload:j.payload,callback:null,next:null});e:{var he=e,de=j;F=t;var De=n;switch(de.tag){case 1:if(he=de.payload,typeof he=="function"){J=he.call(De,J,F);break e}J=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=de.payload,F=typeof he=="function"?he.call(De,J,F):he,F==null)break e;J=w({},J,F);break e;case 2:en=!0}}F=j.callback,F!==null&&(e.flags|=64,V&&(e.flags|=8192),V=l.callbacks,V===null?l.callbacks=[F]:V.push(F))}else V={lane:F,tag:j.tag,payload:j.payload,callback:j.callback,next:null},Z===null?(q=Z=V,_=J):Z=Z.next=V,x|=F;if(j=j.next,j===null){if(j=l.shared.pending,j===null)break;V=j,j=V.next,V.next=null,l.lastBaseUpdate=V,l.shared.pending=null}}while(!0);Z===null&&(_=J),l.baseState=_,l.firstBaseUpdate=q,l.lastBaseUpdate=Z,u===null&&(l.shared.lanes=0),dn|=x,e.lanes=x,e.memoizedState=J}}function Qm(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function qm(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Qm(n[e],t)}var Ra=W(null),Di=W(0);function Ym(e,t){e=Kr,re(Di,e),re(Ra,t),Kr=e|t.baseLanes}function Du(){re(Di,Kr),re(Ra,Ra.current)}function zu(){Kr=Di.current,te(Ra),te(Di)}var nn=0,xe=null,_e=null,Fe=null,zi=!1,Da=!1,Fn=!1,Oi=0,Vo=0,za=null,k5=0;function qe(){throw Error(i(321))}function Ou(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function Bu(e,t,n,o,l,u){return nn=u,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,G.H=e===null||e.memoizedState===null?Ep:Mp,Fn=!1,u=n(o,l),Fn=!1,Da&&(u=Fm(t,n,o,l)),Pm(e),u}function Pm(e){G.H=Hi;var t=_e!==null&&_e.next!==null;if(nn=0,Fe=_e=xe=null,zi=!1,Vo=0,za=null,t)throw Error(i(300));e===null||tt||(e=e.dependencies,e!==null&&Mi(e)&&(tt=!0))}function Fm(e,t,n,o){xe=e;var l=0;do{if(Da&&(za=null),Vo=0,Da=!1,25<=l)throw Error(i(301));if(l+=1,Fe=_e=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}G.H=R5,u=t(n,o)}while(Da);return u}function C5(){var e=G.H,t=e.useState()[0];return t=typeof t.then=="function"?Go(t):t,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(xe.flags|=1024),t}function $u(){var e=Oi!==0;return Oi=0,e}function Ku(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Uu(e){if(zi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zi=!1}nn=0,Fe=_e=xe=null,Da=!1,Vo=Oi=0,za=null}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?xe.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Ve(){if(_e===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Fe===null?xe.memoizedState:Fe.next;if(t!==null)Fe=t,_e=e;else{if(e===null)throw xe.alternate===null?Error(i(467)):Error(i(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Fe===null?xe.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function Lu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Go(e){var t=Vo;return Vo+=1,za===null&&(za=[]),e=Um(za,e,t),t=xe,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,G.H=t===null||t.memoizedState===null?Ep:Mp),e}function Bi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Go(e);if(e.$$typeof===E)return ht(e)}throw Error(i(438,String(e)))}function Hu(e){var t=null,n=xe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var o=xe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Lu(),xe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),o=0;o<e;o++)n[o]=I;return t.index++,n}function Rr(e,t){return typeof t=="function"?t(e):t}function $i(e){var t=Ve();return Qu(t,_e,e)}function Qu(e,t,n){var o=e.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var l=e.baseQueue,u=o.pending;if(u!==null){if(l!==null){var x=l.next;l.next=u.next,u.next=x}t.baseQueue=l=u,o.pending=null}if(u=e.baseState,l===null)e.memoizedState=u;else{t=l.next;var j=x=null,_=null,q=t,Z=!1;do{var J=q.lane&-536870913;if(J!==q.lane?(Se&J)===J:(nn&J)===J){var F=q.revertLane;if(F===0)_!==null&&(_=_.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),J===Ta&&(Z=!0);else if((nn&F)===F){q=q.next,F===Ta&&(Z=!0);continue}else J={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},_===null?(j=_=J,x=u):_=_.next=J,xe.lanes|=F,dn|=F;J=q.action,Fn&&n(u,J),u=q.hasEagerState?q.eagerState:n(u,J)}else F={lane:J,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},_===null?(j=_=F,x=u):_=_.next=F,xe.lanes|=J,dn|=J;q=q.next}while(q!==null&&q!==t);if(_===null?x=u:_.next=j,!Tt(u,e.memoizedState)&&(tt=!0,Z&&(n=_a,n!==null)))throw n;e.memoizedState=u,e.baseState=x,e.baseQueue=_,o.lastRenderedState=u}return l===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function qu(e){var t=Ve(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var o=n.dispatch,l=n.pending,u=t.memoizedState;if(l!==null){n.pending=null;var x=l=l.next;do u=e(u,x.action),x=x.next;while(x!==l);Tt(u,t.memoizedState)||(tt=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,o]}function Vm(e,t,n){var o=xe,l=Ve(),u=Ee;if(u){if(n===void 0)throw Error(i(407));n=n()}else n=t();var x=!Tt((_e||l).memoizedState,n);x&&(l.memoizedState=n,tt=!0),l=l.queue;var j=Xm.bind(null,o,l,e);if(Zo(2048,8,j,[e]),l.getSnapshot!==t||x||Fe!==null&&Fe.memoizedState.tag&1){if(o.flags|=2048,Oa(9,Ki(),Zm.bind(null,o,l,n,t),null),Oe===null)throw Error(i(349));u||(nn&124)!==0||Gm(o,t,n)}return n}function Gm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t=Lu(),xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zm(e,t,n,o){t.value=n,t.getSnapshot=o,Im(t)&&Jm(e)}function Xm(e,t,n){return n(function(){Im(t)&&Jm(e)})}function Im(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function Jm(e){var t=Ca(e,2);t!==null&&Bt(t,e,2)}function Yu(e){var t=jt();if(typeof e=="function"){var n=e;if(e=n(),Fn){Xr(!0);try{n()}finally{Xr(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:e},t}function Wm(e,t,n,o){return e.baseState=n,Qu(e,_e,typeof o=="function"?o:Rr)}function E5(e,t,n,o,l){if(Li(e))throw Error(i(485));if(e=t.action,e!==null){var u={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){u.listeners.push(x)}};G.T!==null?n(!0):u.isTransition=!1,o(u),n=t.pending,n===null?(u.next=t.pending=u,ep(t,u)):(u.next=n.next,t.pending=n.next=u)}}function ep(e,t){var n=t.action,o=t.payload,l=e.state;if(t.isTransition){var u=G.T,x={};G.T=x;try{var j=n(l,o),_=G.S;_!==null&&_(x,j),tp(e,t,j)}catch(q){Pu(e,t,q)}finally{G.T=u}}else try{u=n(l,o),tp(e,t,u)}catch(q){Pu(e,t,q)}}function tp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){rp(e,t,o)},function(o){return Pu(e,t,o)}):rp(e,t,n)}function rp(e,t,n){t.status="fulfilled",t.value=n,np(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ep(e,n)))}function Pu(e,t,n){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=n,np(t),t=t.next;while(t!==o)}e.action=null}function np(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ap(e,t){return t}function op(e,t){if(Ee){var n=Oe.formState;if(n!==null){e:{var o=xe;if(Ee){if(He){t:{for(var l=He,u=gr;l.nodeType!==8;){if(!u){l=null;break t}if(l=ir(l.nextSibling),l===null){l=null;break t}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){He=ir(l.nextSibling),o=l.data==="F!";break e}}Qn(o)}o=!1}o&&(t=n[0])}}return n=jt(),n.memoizedState=n.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ap,lastRenderedState:t},n.queue=o,n=Sp.bind(null,xe,o),o.dispatch=n,o=Yu(!1),u=Xu.bind(null,xe,!1,o.queue),o=jt(),l={state:t,dispatch:null,action:e,pending:null},o.queue=l,n=E5.bind(null,xe,l,u,n),l.dispatch=n,o.memoizedState=e,[t,n,!1]}function lp(e){var t=Ve();return ip(t,_e,e)}function ip(e,t,n){if(t=Qu(e,t,ap)[0],e=$i(Rr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Go(t)}catch(x){throw x===Qo?_i:x}else o=t;t=Ve();var l=t.queue,u=l.dispatch;return n!==t.memoizedState&&(xe.flags|=2048,Oa(9,Ki(),M5.bind(null,l,n),null)),[o,u,e]}function M5(e,t){e.action=t}function sp(e){var t=Ve(),n=_e;if(n!==null)return ip(t,n,e);Ve(),t=t.memoizedState,n=Ve();var o=n.queue.dispatch;return n.memoizedState=e,[t,o,!1]}function Oa(e,t,n,o){return e={tag:e,create:n,deps:o,inst:t,next:null},t=xe.updateQueue,t===null&&(t=Lu(),xe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e),e}function Ki(){return{destroy:void 0,resource:void 0}}function cp(){return Ve().memoizedState}function Ui(e,t,n,o){var l=jt();o=o===void 0?null:o,xe.flags|=e,l.memoizedState=Oa(1|t,Ki(),n,o)}function Zo(e,t,n,o){var l=Ve();o=o===void 0?null:o;var u=l.memoizedState.inst;_e!==null&&o!==null&&Ou(o,_e.memoizedState.deps)?l.memoizedState=Oa(t,u,n,o):(xe.flags|=e,l.memoizedState=Oa(1|t,u,n,o))}function up(e,t){Ui(8390656,8,e,t)}function dp(e,t){Zo(2048,8,e,t)}function fp(e,t){return Zo(4,2,e,t)}function hp(e,t){return Zo(4,4,e,t)}function mp(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pp(e,t,n){n=n!=null?n.concat([e]):null,Zo(4,4,mp.bind(null,t,e),n)}function Fu(){}function gp(e,t){var n=Ve();t=t===void 0?null:t;var o=n.memoizedState;return t!==null&&Ou(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function bp(e,t){var n=Ve();t=t===void 0?null:t;var o=n.memoizedState;if(t!==null&&Ou(t,o[1]))return o[0];if(o=e(),Fn){Xr(!0);try{e()}finally{Xr(!1)}}return n.memoizedState=[o,t],o}function Vu(e,t,n){return n===void 0||(nn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=y0(),xe.lanes|=e,dn|=e,n)}function xp(e,t,n,o){return Tt(n,t)?n:Ra.current!==null?(e=Vu(e,n,o),Tt(e,t)||(tt=!0),e):(nn&42)===0?(tt=!0,e.memoizedState=n):(e=y0(),xe.lanes|=e,dn|=e,t)}function vp(e,t,n,o,l){var u=ee.p;ee.p=u!==0&&8>u?u:8;var x=G.T,j={};G.T=j,Xu(e,!1,t,n);try{var _=l(),q=G.S;if(q!==null&&q(j,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var Z=S5(_,o);Xo(e,t,Z,Ot(e))}else Xo(e,t,o,Ot(e))}catch(J){Xo(e,t,{then:function(){},status:"rejected",reason:J},Ot())}finally{ee.p=u,G.T=x}}function N5(){}function Gu(e,t,n,o){if(e.tag!==5)throw Error(i(476));var l=yp(e).queue;vp(e,l,t,se,n===null?N5:function(){return jp(e),n(o)})}function yp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:se},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function jp(e){var t=yp(e).next.queue;Xo(e,t,{},Ot())}function Zu(){return ht(ml)}function wp(){return Ve().memoizedState}function Ap(){return Ve().memoizedState}function T5(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ot();e=tn(n);var o=rn(t,e,n);o!==null&&(Bt(o,t,n),Yo(o,t,n)),t={cache:ku()},e.payload=t;return}t=t.return}}function _5(e,t,n){var o=Ot();n={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Li(e)?kp(t,n):(n=pu(e,t,n,o),n!==null&&(Bt(n,e,o),Cp(n,t,o)))}function Sp(e,t,n){var o=Ot();Xo(e,t,n,o)}function Xo(e,t,n,o){var l={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Li(e))kp(t,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var x=t.lastRenderedState,j=u(x,n);if(l.hasEagerState=!0,l.eagerState=j,Tt(j,x))return Ai(e,t,l,0),Oe===null&&wi(),!1}catch{}finally{}if(n=pu(e,t,l,o),n!==null)return Bt(n,e,o),Cp(n,t,o),!0}return!1}function Xu(e,t,n,o){if(o={lane:2,revertLane:Md(),action:o,hasEagerState:!1,eagerState:null,next:null},Li(e)){if(t)throw Error(i(479))}else t=pu(e,n,o,2),t!==null&&Bt(t,e,2)}function Li(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function kp(e,t){Da=zi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cp(e,t,n){if((n&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,zh(e,n)}}var Hi={readContext:ht,use:Bi,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe},Ep={readContext:ht,use:Bi,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:up,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ui(4194308,4,mp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ui(4194308,4,e,t)},useInsertionEffect:function(e,t){Ui(4,2,e,t)},useMemo:function(e,t){var n=jt();t=t===void 0?null:t;var o=e();if(Fn){Xr(!0);try{e()}finally{Xr(!1)}}return n.memoizedState=[o,t],o},useReducer:function(e,t,n){var o=jt();if(n!==void 0){var l=n(t);if(Fn){Xr(!0);try{n(t)}finally{Xr(!1)}}}else l=t;return o.memoizedState=o.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},o.queue=e,e=e.dispatch=_5.bind(null,xe,e),[o.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:function(e){e=Yu(e);var t=e.queue,n=Sp.bind(null,xe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Fu,useDeferredValue:function(e,t){var n=jt();return Vu(n,e,t)},useTransition:function(){var e=Yu(!1);return e=vp.bind(null,xe,e.queue,!0,!1),jt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var o=xe,l=jt();if(Ee){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Oe===null)throw Error(i(349));(Se&124)!==0||Gm(o,t,n)}l.memoizedState=n;var u={value:n,getSnapshot:t};return l.queue=u,up(Xm.bind(null,o,u,e),[e]),o.flags|=2048,Oa(9,Ki(),Zm.bind(null,o,u,n,t),null),n},useId:function(){var e=jt(),t=Oe.identifierPrefix;if(Ee){var n=Nr,o=Mr;n=(o&~(1<<32-Nt(o)-1)).toString(32)+n,t="«"+t+"R"+n,n=Oi++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=k5++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Zu,useFormState:op,useActionState:op,useOptimistic:function(e){var t=jt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Xu.bind(null,xe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Hu,useCacheRefresh:function(){return jt().memoizedState=T5.bind(null,xe)}},Mp={readContext:ht,use:Bi,useCallback:gp,useContext:ht,useEffect:dp,useImperativeHandle:pp,useInsertionEffect:fp,useLayoutEffect:hp,useMemo:bp,useReducer:$i,useRef:cp,useState:function(){return $i(Rr)},useDebugValue:Fu,useDeferredValue:function(e,t){var n=Ve();return xp(n,_e.memoizedState,e,t)},useTransition:function(){var e=$i(Rr)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:Go(e),t]},useSyncExternalStore:Vm,useId:wp,useHostTransitionStatus:Zu,useFormState:lp,useActionState:lp,useOptimistic:function(e,t){var n=Ve();return Wm(n,_e,e,t)},useMemoCache:Hu,useCacheRefresh:Ap},R5={readContext:ht,use:Bi,useCallback:gp,useContext:ht,useEffect:dp,useImperativeHandle:pp,useInsertionEffect:fp,useLayoutEffect:hp,useMemo:bp,useReducer:qu,useRef:cp,useState:function(){return qu(Rr)},useDebugValue:Fu,useDeferredValue:function(e,t){var n=Ve();return _e===null?Vu(n,e,t):xp(n,_e.memoizedState,e,t)},useTransition:function(){var e=qu(Rr)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:Go(e),t]},useSyncExternalStore:Vm,useId:wp,useHostTransitionStatus:Zu,useFormState:sp,useActionState:sp,useOptimistic:function(e,t){var n=Ve();return _e!==null?Wm(n,_e,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Hu,useCacheRefresh:Ap},Ba=null,Io=0;function Qi(e){var t=Io;return Io+=1,Ba===null&&(Ba=[]),Um(Ba,e,t)}function Jo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function qi(e,t){throw t.$$typeof===y?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Np(e){var t=e._init;return t(e._payload)}function Tp(e){function t(U,B){if(e){var Q=U.deletions;Q===null?(U.deletions=[B],U.flags|=16):Q.push(B)}}function n(U,B){if(!e)return null;for(;B!==null;)t(U,B),B=B.sibling;return null}function o(U){for(var B=new Map;U!==null;)U.key!==null?B.set(U.key,U):B.set(U.index,U),U=U.sibling;return B}function l(U,B){return U=Er(U,B),U.index=0,U.sibling=null,U}function u(U,B,Q){return U.index=Q,e?(Q=U.alternate,Q!==null?(Q=Q.index,Q<B?(U.flags|=67108866,B):Q):(U.flags|=67108866,B)):(U.flags|=1048576,B)}function x(U){return e&&U.alternate===null&&(U.flags|=67108866),U}function j(U,B,Q,X){return B===null||B.tag!==6?(B=bu(Q,U.mode,X),B.return=U,B):(B=l(B,Q),B.return=U,B)}function _(U,B,Q,X){var ae=Q.type;return ae===S?Z(U,B,Q.props.children,X,Q.key):B!==null&&(B.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===R&&Np(ae)===B.type)?(B=l(B,Q.props),Jo(B,Q),B.return=U,B):(B=ki(Q.type,Q.key,Q.props,null,U.mode,X),Jo(B,Q),B.return=U,B)}function q(U,B,Q,X){return B===null||B.tag!==4||B.stateNode.containerInfo!==Q.containerInfo||B.stateNode.implementation!==Q.implementation?(B=xu(Q,U.mode,X),B.return=U,B):(B=l(B,Q.children||[]),B.return=U,B)}function Z(U,B,Q,X,ae){return B===null||B.tag!==7?(B=Kn(Q,U.mode,X,ae),B.return=U,B):(B=l(B,Q),B.return=U,B)}function J(U,B,Q){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=bu(""+B,U.mode,Q),B.return=U,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case v:return Q=ki(B.type,B.key,B.props,null,U.mode,Q),Jo(Q,B),Q.return=U,Q;case A:return B=xu(B,U.mode,Q),B.return=U,B;case R:var X=B._init;return B=X(B._payload),J(U,B,Q)}if(me(B)||P(B))return B=Kn(B,U.mode,Q,null),B.return=U,B;if(typeof B.then=="function")return J(U,Qi(B),Q);if(B.$$typeof===E)return J(U,Ni(U,B),Q);qi(U,B)}return null}function F(U,B,Q,X){var ae=B!==null?B.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return ae!==null?null:j(U,B,""+Q,X);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===ae?_(U,B,Q,X):null;case A:return Q.key===ae?q(U,B,Q,X):null;case R:return ae=Q._init,Q=ae(Q._payload),F(U,B,Q,X)}if(me(Q)||P(Q))return ae!==null?null:Z(U,B,Q,X,null);if(typeof Q.then=="function")return F(U,B,Qi(Q),X);if(Q.$$typeof===E)return F(U,B,Ni(U,Q),X);qi(U,Q)}return null}function V(U,B,Q,X,ae){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return U=U.get(Q)||null,j(B,U,""+X,ae);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case v:return U=U.get(X.key===null?Q:X.key)||null,_(B,U,X,ae);case A:return U=U.get(X.key===null?Q:X.key)||null,q(B,U,X,ae);case R:var ve=X._init;return X=ve(X._payload),V(U,B,Q,X,ae)}if(me(X)||P(X))return U=U.get(Q)||null,Z(B,U,X,ae,null);if(typeof X.then=="function")return V(U,B,Q,Qi(X),ae);if(X.$$typeof===E)return V(U,B,Q,Ni(B,X),ae);qi(B,X)}return null}function he(U,B,Q,X){for(var ae=null,ve=null,ce=B,fe=B=0,nt=null;ce!==null&&fe<Q.length;fe++){ce.index>fe?(nt=ce,ce=null):nt=ce.sibling;var Ce=F(U,ce,Q[fe],X);if(Ce===null){ce===null&&(ce=nt);break}e&&ce&&Ce.alternate===null&&t(U,ce),B=u(Ce,B,fe),ve===null?ae=Ce:ve.sibling=Ce,ve=Ce,ce=nt}if(fe===Q.length)return n(U,ce),Ee&&Ln(U,fe),ae;if(ce===null){for(;fe<Q.length;fe++)ce=J(U,Q[fe],X),ce!==null&&(B=u(ce,B,fe),ve===null?ae=ce:ve.sibling=ce,ve=ce);return Ee&&Ln(U,fe),ae}for(ce=o(ce);fe<Q.length;fe++)nt=V(ce,U,fe,Q[fe],X),nt!==null&&(e&&nt.alternate!==null&&ce.delete(nt.key===null?fe:nt.key),B=u(nt,B,fe),ve===null?ae=nt:ve.sibling=nt,ve=nt);return e&&ce.forEach(function(yn){return t(U,yn)}),Ee&&Ln(U,fe),ae}function de(U,B,Q,X){if(Q==null)throw Error(i(151));for(var ae=null,ve=null,ce=B,fe=B=0,nt=null,Ce=Q.next();ce!==null&&!Ce.done;fe++,Ce=Q.next()){ce.index>fe?(nt=ce,ce=null):nt=ce.sibling;var yn=F(U,ce,Ce.value,X);if(yn===null){ce===null&&(ce=nt);break}e&&ce&&yn.alternate===null&&t(U,ce),B=u(yn,B,fe),ve===null?ae=yn:ve.sibling=yn,ve=yn,ce=nt}if(Ce.done)return n(U,ce),Ee&&Ln(U,fe),ae;if(ce===null){for(;!Ce.done;fe++,Ce=Q.next())Ce=J(U,Ce.value,X),Ce!==null&&(B=u(Ce,B,fe),ve===null?ae=Ce:ve.sibling=Ce,ve=Ce);return Ee&&Ln(U,fe),ae}for(ce=o(ce);!Ce.done;fe++,Ce=Q.next())Ce=V(ce,U,fe,Ce.value,X),Ce!==null&&(e&&Ce.alternate!==null&&ce.delete(Ce.key===null?fe:Ce.key),B=u(Ce,B,fe),ve===null?ae=Ce:ve.sibling=Ce,ve=Ce);return e&&ce.forEach(function(Dv){return t(U,Dv)}),Ee&&Ln(U,fe),ae}function De(U,B,Q,X){if(typeof Q=="object"&&Q!==null&&Q.type===S&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:e:{for(var ae=Q.key;B!==null;){if(B.key===ae){if(ae=Q.type,ae===S){if(B.tag===7){n(U,B.sibling),X=l(B,Q.props.children),X.return=U,U=X;break e}}else if(B.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===R&&Np(ae)===B.type){n(U,B.sibling),X=l(B,Q.props),Jo(X,Q),X.return=U,U=X;break e}n(U,B);break}else t(U,B);B=B.sibling}Q.type===S?(X=Kn(Q.props.children,U.mode,X,Q.key),X.return=U,U=X):(X=ki(Q.type,Q.key,Q.props,null,U.mode,X),Jo(X,Q),X.return=U,U=X)}return x(U);case A:e:{for(ae=Q.key;B!==null;){if(B.key===ae)if(B.tag===4&&B.stateNode.containerInfo===Q.containerInfo&&B.stateNode.implementation===Q.implementation){n(U,B.sibling),X=l(B,Q.children||[]),X.return=U,U=X;break e}else{n(U,B);break}else t(U,B);B=B.sibling}X=xu(Q,U.mode,X),X.return=U,U=X}return x(U);case R:return ae=Q._init,Q=ae(Q._payload),De(U,B,Q,X)}if(me(Q))return he(U,B,Q,X);if(P(Q)){if(ae=P(Q),typeof ae!="function")throw Error(i(150));return Q=ae.call(Q),de(U,B,Q,X)}if(typeof Q.then=="function")return De(U,B,Qi(Q),X);if(Q.$$typeof===E)return De(U,B,Ni(U,Q),X);qi(U,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,B!==null&&B.tag===6?(n(U,B.sibling),X=l(B,Q),X.return=U,U=X):(n(U,B),X=bu(Q,U.mode,X),X.return=U,U=X),x(U)):n(U,B)}return function(U,B,Q,X){try{Io=0;var ae=De(U,B,Q,X);return Ba=null,ae}catch(ce){if(ce===Qo||ce===_i)throw ce;var ve=_t(29,ce,null,U.mode);return ve.lanes=X,ve.return=U,ve}finally{}}}var $a=Tp(!0),_p=Tp(!1),Ft=W(null),br=null;function an(e){var t=e.alternate;re(Ie,Ie.current&1),re(Ft,e),br===null&&(t===null||Ra.current!==null||t.memoizedState!==null)&&(br=e)}function Rp(e){if(e.tag===22){if(re(Ie,Ie.current),re(Ft,e),br===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(br=e)}}else on()}function on(){re(Ie,Ie.current),re(Ft,Ft.current)}function Dr(e){te(Ft),br===e&&(br=null),te(Ie)}var Ie=W(0);function Yi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Ld(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Iu(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ju={enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Ot(),l=tn(o);l.payload=t,n!=null&&(l.callback=n),t=rn(e,l,o),t!==null&&(Bt(t,e,o),Yo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Ot(),l=tn(o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=rn(e,l,o),t!==null&&(Bt(t,e,o),Yo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ot(),o=tn(n);o.tag=2,t!=null&&(o.callback=t),t=rn(e,o,n),t!==null&&(Bt(t,e,n),Yo(t,e,n))}};function Dp(e,t,n,o,l,u,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,u,x):t.prototype&&t.prototype.isPureReactComponent?!zo(n,o)||!zo(l,u):!0}function zp(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Ju.enqueueReplaceState(t,t.state,null)}function Vn(e,t){var n=t;if("ref"in t){n={};for(var o in t)o!=="ref"&&(n[o]=t[o])}if(e=e.defaultProps){n===t&&(n=w({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}var Pi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Op(e){Pi(e)}function Bp(e){console.error(e)}function $p(e){Pi(e)}function Fi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function Kp(e,t,n){try{var o=e.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Wu(e,t,n){return n=tn(n),n.tag=3,n.payload={element:null},n.callback=function(){Fi(e,t)},n}function Up(e){return e=tn(e),e.tag=3,e}function Lp(e,t,n,o){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var u=o.value;e.payload=function(){return l(u)},e.callback=function(){Kp(t,n,o)}}var x=n.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Kp(t,n,o),typeof l!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var j=o.stack;this.componentDidCatch(o.value,{componentStack:j!==null?j:""})})}function D5(e,t,n,o,l){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=n.alternate,t!==null&&Uo(t,n,l,!0),n=Ft.current,n!==null){switch(n.tag){case 13:return br===null?Ad():n.alternate===null&&Qe===0&&(Qe=3),n.flags&=-257,n.flags|=65536,n.lanes=l,o===Mu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([o]):t.add(o),kd(e,o,l)),!1;case 22:return n.flags|=65536,o===Mu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([o]):n.add(o)),kd(e,o,l)),!1}throw Error(i(435,n.tag))}return kd(e,o,l),Ad(),!1}if(Ee)return t=Ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,o!==ju&&(e=Error(i(422),{cause:o}),Ko(Qt(e,n)))):(o!==ju&&(t=Error(i(423),{cause:o}),Ko(Qt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,o=Qt(o,n),l=Wu(e.stateNode,o,l),_u(e,l),Qe!==4&&(Qe=2)),!1;var u=Error(i(520),{cause:o});if(u=Qt(u,n),ol===null?ol=[u]:ol.push(u),Qe!==4&&(Qe=2),t===null)return!0;o=Qt(o,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Wu(n.stateNode,o,e),_u(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(fn===null||!fn.has(u))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Up(l),Lp(l,e,n,o),_u(n,l),!1}n=n.return}while(n!==null);return!1}var Hp=Error(i(461)),tt=!1;function it(e,t,n,o){t.child=e===null?_p(t,null,n,o):$a(t,e.child,n,o)}function Qp(e,t,n,o,l){n=n.render;var u=t.ref;if("ref"in o){var x={};for(var j in o)j!=="ref"&&(x[j]=o[j])}else x=o;return Yn(t),o=Bu(e,t,n,x,u,l),j=$u(),e!==null&&!tt?(Ku(e,t,l),zr(e,t,l)):(Ee&&j&&vu(t),t.flags|=1,it(e,t,o,l),t.child)}function qp(e,t,n,o,l){if(e===null){var u=n.type;return typeof u=="function"&&!gu(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,Yp(e,t,u,o,l)):(e=ki(n.type,null,o,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!id(e,l)){var x=u.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(x,o)&&e.ref===t.ref)return zr(e,t,l)}return t.flags|=1,e=Er(u,o),e.ref=t.ref,e.return=t,t.child=e}function Yp(e,t,n,o,l){if(e!==null){var u=e.memoizedProps;if(zo(u,o)&&e.ref===t.ref)if(tt=!1,t.pendingProps=o=u,id(e,l))(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,zr(e,t,l)}return ed(e,t,n,o,l)}function Pp(e,t,n){var o=t.pendingProps,l=o.children,u=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((t.flags&128)!==0){if(o=u!==null?u.baseLanes|n:n,e!==null){for(l=t.child=e.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;t.childLanes=u&~o}else t.childLanes=0,t.child=null;return Fp(e,t,o,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ti(t,u!==null?u.cachePool:null),u!==null?Ym(t,u):Du(),Rp(t);else return t.lanes=t.childLanes=536870912,Fp(e,t,u!==null?u.baseLanes|n:n,n)}else u!==null?(Ti(t,u.cachePool),Ym(t,u),on(),t.memoizedState=null):(e!==null&&Ti(t,null),Du(),on());return it(e,t,l,n),t.child}function Fp(e,t,n,o){var l=Eu();return l=l===null?null:{parent:Xe._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&Ti(t,null),Du(),Rp(t),e!==null&&Uo(e,t,o,!0),null}function Vi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ed(e,t,n,o,l){return Yn(t),n=Bu(e,t,n,o,void 0,l),o=$u(),e!==null&&!tt?(Ku(e,t,l),zr(e,t,l)):(Ee&&o&&vu(t),t.flags|=1,it(e,t,n,l),t.child)}function Vp(e,t,n,o,l,u){return Yn(t),t.updateQueue=null,n=Fm(t,o,n,l),Pm(e),o=$u(),e!==null&&!tt?(Ku(e,t,u),zr(e,t,u)):(Ee&&o&&vu(t),t.flags|=1,it(e,t,n,u),t.child)}function Gp(e,t,n,o,l){if(Yn(t),t.stateNode===null){var u=Ea,x=n.contextType;typeof x=="object"&&x!==null&&(u=ht(x)),u=new n(o,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Ju,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=o,u.state=t.memoizedState,u.refs={},Nu(t),x=n.contextType,u.context=typeof x=="object"&&x!==null?ht(x):Ea,u.state=t.memoizedState,x=n.getDerivedStateFromProps,typeof x=="function"&&(Iu(t,n,x,o),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(x=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),x!==u.state&&Ju.enqueueReplaceState(u,u.state,null),Fo(t,o,u,l),Po(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){u=t.stateNode;var j=t.memoizedProps,_=Vn(n,j);u.props=_;var q=u.context,Z=n.contextType;x=Ea,typeof Z=="object"&&Z!==null&&(x=ht(Z));var J=n.getDerivedStateFromProps;Z=typeof J=="function"||typeof u.getSnapshotBeforeUpdate=="function",j=t.pendingProps!==j,Z||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(j||q!==x)&&zp(t,u,o,x),en=!1;var F=t.memoizedState;u.state=F,Fo(t,o,u,l),Po(),q=t.memoizedState,j||F!==q||en?(typeof J=="function"&&(Iu(t,n,J,o),q=t.memoizedState),(_=en||Dp(t,n,_,o,F,q,x))?(Z||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=q),u.props=o,u.state=q,u.context=x,o=_):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{u=t.stateNode,Tu(e,t),x=t.memoizedProps,Z=Vn(n,x),u.props=Z,J=t.pendingProps,F=u.context,q=n.contextType,_=Ea,typeof q=="object"&&q!==null&&(_=ht(q)),j=n.getDerivedStateFromProps,(q=typeof j=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(x!==J||F!==_)&&zp(t,u,o,_),en=!1,F=t.memoizedState,u.state=F,Fo(t,o,u,l),Po();var V=t.memoizedState;x!==J||F!==V||en||e!==null&&e.dependencies!==null&&Mi(e.dependencies)?(typeof j=="function"&&(Iu(t,n,j,o),V=t.memoizedState),(Z=en||Dp(t,n,Z,o,F,V,_)||e!==null&&e.dependencies!==null&&Mi(e.dependencies))?(q||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,V,_),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,V,_)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||x===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=V),u.props=o,u.state=V,u.context=_,o=Z):(typeof u.componentDidUpdate!="function"||x===e.memoizedProps&&F===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&F===e.memoizedState||(t.flags|=1024),o=!1)}return u=o,Vi(e,t),o=(t.flags&128)!==0,u||o?(u=t.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&o?(t.child=$a(t,e.child,null,l),t.child=$a(t,null,n,l)):it(e,t,n,l),t.memoizedState=u.state,e=t.child):e=zr(e,t,l),e}function Zp(e,t,n,o){return $o(),t.flags|=256,it(e,t,n,o),t.child}var td={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rd(e){return{baseLanes:e,cachePool:Bm()}}function nd(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Vt),e}function Xp(e,t,n){var o=t.pendingProps,l=!1,u=(t.flags&128)!==0,x;if((x=u)||(x=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),x&&(l=!0,t.flags&=-129),x=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ee){if(l?an(t):on(),Ee){var j=He,_;if(_=j){e:{for(_=j,j=gr;_.nodeType!==8;){if(!j){j=null;break e}if(_=ir(_.nextSibling),_===null){j=null;break e}}j=_}j!==null?(t.memoizedState={dehydrated:j,treeContext:Un!==null?{id:Mr,overflow:Nr}:null,retryLane:536870912,hydrationErrors:null},_=_t(18,null,null,0),_.stateNode=j,_.return=t,t.child=_,bt=t,He=null,_=!0):_=!1}_||Qn(t)}if(j=t.memoizedState,j!==null&&(j=j.dehydrated,j!==null))return Ld(j)?t.lanes=32:t.lanes=536870912,null;Dr(t)}return j=o.children,o=o.fallback,l?(on(),l=t.mode,j=Gi({mode:"hidden",children:j},l),o=Kn(o,l,n,null),j.return=t,o.return=t,j.sibling=o,t.child=j,l=t.child,l.memoizedState=rd(n),l.childLanes=nd(e,x,n),t.memoizedState=td,o):(an(t),ad(t,j))}if(_=e.memoizedState,_!==null&&(j=_.dehydrated,j!==null)){if(u)t.flags&256?(an(t),t.flags&=-257,t=od(e,t,n)):t.memoizedState!==null?(on(),t.child=e.child,t.flags|=128,t=null):(on(),l=o.fallback,j=t.mode,o=Gi({mode:"visible",children:o.children},j),l=Kn(l,j,n,null),l.flags|=2,o.return=t,l.return=t,o.sibling=l,t.child=o,$a(t,e.child,null,n),o=t.child,o.memoizedState=rd(n),o.childLanes=nd(e,x,n),t.memoizedState=td,t=l);else if(an(t),Ld(j)){if(x=j.nextSibling&&j.nextSibling.dataset,x)var q=x.dgst;x=q,o=Error(i(419)),o.stack="",o.digest=x,Ko({value:o,source:null,stack:null}),t=od(e,t,n)}else if(tt||Uo(e,t,n,!1),x=(n&e.childLanes)!==0,tt||x){if(x=Oe,x!==null&&(o=n&-n,o=(o&42)!==0?1:Hc(o),o=(o&(x.suspendedLanes|n))!==0?0:o,o!==0&&o!==_.retryLane))throw _.retryLane=o,Ca(e,o),Bt(x,e,o),Hp;j.data==="$?"||Ad(),t=od(e,t,n)}else j.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=_.treeContext,He=ir(j.nextSibling),bt=t,Ee=!0,Hn=null,gr=!1,e!==null&&(Yt[Pt++]=Mr,Yt[Pt++]=Nr,Yt[Pt++]=Un,Mr=e.id,Nr=e.overflow,Un=t),t=ad(t,o.children),t.flags|=4096);return t}return l?(on(),l=o.fallback,j=t.mode,_=e.child,q=_.sibling,o=Er(_,{mode:"hidden",children:o.children}),o.subtreeFlags=_.subtreeFlags&65011712,q!==null?l=Er(q,l):(l=Kn(l,j,n,null),l.flags|=2),l.return=t,o.return=t,o.sibling=l,t.child=o,o=l,l=t.child,j=e.child.memoizedState,j===null?j=rd(n):(_=j.cachePool,_!==null?(q=Xe._currentValue,_=_.parent!==q?{parent:q,pool:q}:_):_=Bm(),j={baseLanes:j.baseLanes|n,cachePool:_}),l.memoizedState=j,l.childLanes=nd(e,x,n),t.memoizedState=td,o):(an(t),n=e.child,e=n.sibling,n=Er(n,{mode:"visible",children:o.children}),n.return=t,n.sibling=null,e!==null&&(x=t.deletions,x===null?(t.deletions=[e],t.flags|=16):x.push(e)),t.child=n,t.memoizedState=null,n)}function ad(e,t){return t=Gi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Gi(e,t){return e=_t(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function od(e,t,n){return $a(t,e.child,null,n),e=ad(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ip(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Au(e.return,t,n)}function ld(e,t,n,o,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:l}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=o,u.tail=n,u.tailMode=l)}function Jp(e,t,n){var o=t.pendingProps,l=o.revealOrder,u=o.tail;if(it(e,t,o.children,n),o=Ie.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ip(e,n,t);else if(e.tag===19)Ip(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(re(Ie,o),l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Yi(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ld(t,!1,l,n,u);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Yi(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ld(t,!0,n,null,u);break;case"together":ld(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Uo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Er(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Er(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function id(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Mi(e)))}function z5(e,t,n){switch(t.tag){case 3:ke(t,t.stateNode.containerInfo),Wr(t,Xe,e.memoizedState.cache),$o();break;case 27:case 5:mr(t);break;case 4:ke(t,t.stateNode.containerInfo);break;case 10:Wr(t,t.type,t.memoizedProps.value);break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(an(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Xp(e,t,n):(an(t),e=zr(e,t,n),e!==null?e.sibling:null);an(t);break;case 19:var l=(e.flags&128)!==0;if(o=(n&t.childLanes)!==0,o||(Uo(e,t,n,!1),o=(n&t.childLanes)!==0),l){if(o)return Jp(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),re(Ie,Ie.current),o)break;return null;case 22:case 23:return t.lanes=0,Pp(e,t,n);case 24:Wr(t,Xe,e.memoizedState.cache)}return zr(e,t,n)}function Wp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tt=!0;else{if(!id(e,n)&&(t.flags&128)===0)return tt=!1,z5(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,Ee&&(t.flags&1048576)!==0&&Nm(t,Ei,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var o=t.elementType,l=o._init;if(o=l(o._payload),t.type=o,typeof o=="function")gu(o)?(e=Vn(o,e),t.tag=1,t=Gp(null,t,o,e,n)):(t.tag=0,t=ed(null,t,o,e,n));else{if(o!=null){if(l=o.$$typeof,l===z){t.tag=11,t=Qp(null,t,o,e,n);break e}else if(l===L){t.tag=14,t=qp(null,t,o,e,n);break e}}throw t=oe(o)||o,Error(i(306,t,""))}}return t;case 0:return ed(e,t,t.type,t.pendingProps,n);case 1:return o=t.type,l=Vn(o,t.pendingProps),Gp(e,t,o,l,n);case 3:e:{if(ke(t,t.stateNode.containerInfo),e===null)throw Error(i(387));o=t.pendingProps;var u=t.memoizedState;l=u.element,Tu(e,t),Fo(t,o,null,n);var x=t.memoizedState;if(o=x.cache,Wr(t,Xe,o),o!==u.cache&&Su(t,[Xe],n,!0),Po(),o=x.element,u.isDehydrated)if(u={element:o,isDehydrated:!1,cache:x.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Zp(e,t,o,n);break e}else if(o!==l){l=Qt(Error(i(424)),t),Ko(l),t=Zp(e,t,o,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=ir(e.firstChild),bt=t,Ee=!0,Hn=null,gr=!0,n=_p(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if($o(),o===l){t=zr(e,t,n);break e}it(e,t,o,n)}t=t.child}return t;case 26:return Vi(e,t),e===null?(n=ng(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ee||(n=t.type,e=t.pendingProps,o=ss(ue.current).createElement(n),o[ft]=t,o[vt]=e,ct(o,n,e),et(o),t.stateNode=o):t.memoizedState=ng(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return mr(t),e===null&&Ee&&(o=t.stateNode=eg(t.type,t.pendingProps,ue.current),bt=t,gr=!0,l=He,pn(t.type)?(Hd=l,He=ir(o.firstChild)):He=l),it(e,t,t.pendingProps.children,n),Vi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ee&&((l=o=He)&&(o=sv(o,t.type,t.pendingProps,gr),o!==null?(t.stateNode=o,bt=t,He=ir(o.firstChild),gr=!1,l=!0):l=!1),l||Qn(t)),mr(t),l=t.type,u=t.pendingProps,x=e!==null?e.memoizedProps:null,o=u.children,$d(l,u)?o=null:x!==null&&$d(l,x)&&(t.flags|=32),t.memoizedState!==null&&(l=Bu(e,t,C5,null,null,n),ml._currentValue=l),Vi(e,t),it(e,t,o,n),t.child;case 6:return e===null&&Ee&&((e=n=He)&&(n=cv(n,t.pendingProps,gr),n!==null?(t.stateNode=n,bt=t,He=null,e=!0):e=!1),e||Qn(t)),null;case 13:return Xp(e,t,n);case 4:return ke(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=$a(t,null,o,n):it(e,t,o,n),t.child;case 11:return Qp(e,t,t.type,t.pendingProps,n);case 7:return it(e,t,t.pendingProps,n),t.child;case 8:return it(e,t,t.pendingProps.children,n),t.child;case 12:return it(e,t,t.pendingProps.children,n),t.child;case 10:return o=t.pendingProps,Wr(t,t.type,o.value),it(e,t,o.children,n),t.child;case 9:return l=t.type._context,o=t.pendingProps.children,Yn(t),l=ht(l),o=o(l),t.flags|=1,it(e,t,o,n),t.child;case 14:return qp(e,t,t.type,t.pendingProps,n);case 15:return Yp(e,t,t.type,t.pendingProps,n);case 19:return Jp(e,t,n);case 31:return o=t.pendingProps,n=t.mode,o={mode:o.mode,children:o.children},e===null?(n=Gi(o,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Er(e.child,o),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Pp(e,t,n);case 24:return Yn(t),o=ht(Xe),e===null?(l=Eu(),l===null&&(l=Oe,u=ku(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=n),l=u),t.memoizedState={parent:o,cache:l},Nu(t),Wr(t,Xe,l)):((e.lanes&n)!==0&&(Tu(e,t),Fo(t,null,null,n),Po()),l=e.memoizedState,u=t.memoizedState,l.parent!==o?(l={parent:o,cache:o},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Wr(t,Xe,o)):(o=u.cache,Wr(t,Xe,o),o!==l.cache&&Su(t,[Xe],n,!0))),it(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Or(e){e.flags|=4}function e0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sg(t)){if(t=Ft.current,t!==null&&((Se&4194048)===Se?br!==null:(Se&62914560)!==Se&&(Se&536870912)===0||t!==br))throw qo=Mu,$m;e.flags|=8192}}function Zi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Rh():536870912,e.lanes|=t,Ha|=t)}function Wo(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,o|=l.subtreeFlags&65011712,o|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function O5(e,t,n){var o=t.pendingProps;switch(yu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return n=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),_r(Xe),ot(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bo(t)?Or(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Rm())),Ue(t),null;case 26:return n=t.memoizedState,e===null?(Or(t),n!==null?(Ue(t),e0(t,n)):(Ue(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Or(t),Ue(t),e0(t,n)):(Ue(t),t.flags&=-16777217):(e.memoizedProps!==o&&Or(t),Ue(t),t.flags&=-16777217),null;case 27:Et(t),n=ue.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Or(t);else{if(!o){if(t.stateNode===null)throw Error(i(166));return Ue(t),null}e=ie.current,Bo(t)?Tm(t):(e=eg(l,o,n),t.stateNode=e,Or(t))}return Ue(t),null;case 5:if(Et(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&Or(t);else{if(!o){if(t.stateNode===null)throw Error(i(166));return Ue(t),null}if(e=ie.current,Bo(t))Tm(t);else{switch(l=ss(ue.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?l.createElement("select",{is:o.is}):l.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?l.createElement(n,{is:o.is}):l.createElement(n)}}e[ft]=t,e[vt]=o;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(ct(e,n,o),n){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Or(t)}}return Ue(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&Or(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(i(166));if(e=ue.current,Bo(t)){if(e=t.stateNode,n=t.memoizedProps,o=null,l=bt,l!==null)switch(l.tag){case 27:case 5:o=l.memoizedProps}e[ft]=t,e=!!(e.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||V0(e.nodeValue,n)),e||Qn(t)}else e=ss(e).createTextNode(o),e[ft]=t,t.stateNode=e}return Ue(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Bo(t),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(i(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(i(317));l[ft]=t}else $o(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),l=!1}else l=Rm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Dr(t),t):(Dr(t),null)}if(Dr(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=o!==null,e=e!==null&&e.memoizedState!==null,n){o=t.child,l=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(l=o.alternate.memoizedState.cachePool.pool);var u=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(u=o.memoizedState.cachePool.pool),u!==l&&(o.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Zi(t,t.updateQueue),Ue(t),null;case 4:return ot(),e===null&&Rd(t.stateNode.containerInfo),Ue(t),null;case 10:return _r(t.type),Ue(t),null;case 19:if(te(Ie),l=t.memoizedState,l===null)return Ue(t),null;if(o=(t.flags&128)!==0,u=l.rendering,u===null)if(o)Wo(l,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Yi(e),u!==null){for(t.flags|=128,Wo(l,!1),e=u.updateQueue,t.updateQueue=e,Zi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Mm(n,e),n=n.sibling;return re(Ie,Ie.current&1|2),t.child}e=e.sibling}l.tail!==null&&ne()>Ji&&(t.flags|=128,o=!0,Wo(l,!1),t.lanes=4194304)}else{if(!o)if(e=Yi(u),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Zi(t,e),Wo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!Ee)return Ue(t),null}else 2*ne()-l.renderingStartTime>Ji&&n!==536870912&&(t.flags|=128,o=!0,Wo(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(e=l.last,e!==null?e.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ne(),t.sibling=null,e=Ie.current,re(Ie,o?e&1|2:e&1),t):(Ue(t),null);case 22:case 23:return Dr(t),zu(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(n&536870912)!==0&&(t.flags&128)===0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),n=t.updateQueue,n!==null&&Zi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==n&&(t.flags|=2048),e!==null&&te(Pn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),_r(Xe),Ue(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function B5(e,t){switch(yu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _r(Xe),ot(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Et(t),null;case 13:if(Dr(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));$o()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(Ie),null;case 4:return ot(),null;case 10:return _r(t.type),null;case 22:case 23:return Dr(t),zu(),e!==null&&te(Pn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _r(Xe),null;case 25:return null;default:return null}}function t0(e,t){switch(yu(t),t.tag){case 3:_r(Xe),ot();break;case 26:case 27:case 5:Et(t);break;case 4:ot();break;case 13:Dr(t);break;case 19:te(Ie);break;case 10:_r(t.type);break;case 22:case 23:Dr(t),zu(),e!==null&&te(Pn);break;case 24:_r(Xe)}}function el(e,t){try{var n=t.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var l=o.next;n=l;do{if((n.tag&e)===e){o=void 0;var u=n.create,x=n.inst;o=u(),x.destroy=o}n=n.next}while(n!==l)}}catch(j){ze(t,t.return,j)}}function ln(e,t,n){try{var o=t.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var u=l.next;o=u;do{if((o.tag&e)===e){var x=o.inst,j=x.destroy;if(j!==void 0){x.destroy=void 0,l=t;var _=n,q=j;try{q()}catch(Z){ze(l,_,Z)}}}o=o.next}while(o!==u)}}catch(Z){ze(t,t.return,Z)}}function r0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qm(t,n)}catch(o){ze(e,e.return,o)}}}function n0(e,t,n){n.props=Vn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(o){ze(e,t,o)}}function tl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof n=="function"?e.refCleanup=n(o):n.current=o}}catch(l){ze(e,t,l)}}function xr(e,t){var n=e.ref,o=e.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(l){ze(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){ze(e,t,l)}else n.current=null}function a0(e){var t=e.type,n=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break e;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(l){ze(e,e.return,l)}}function sd(e,t,n){try{var o=e.stateNode;nv(o,e.type,n,t),o[vt]=t}catch(l){ze(e,e.return,l)}}function o0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pn(e.type)||e.tag===4}function cd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||o0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ud(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=is));else if(o!==4&&(o===27&&pn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ud(e,t,n),e=e.sibling;e!==null;)ud(e,t,n),e=e.sibling}function Xi(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(o===27&&pn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Xi(e,t,n),e=e.sibling;e!==null;)Xi(e,t,n),e=e.sibling}function l0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var o=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ct(t,o,n),t[ft]=e,t[vt]=n}catch(u){ze(e,e.return,u)}}var Br=!1,Ye=!1,dd=!1,i0=typeof WeakSet=="function"?WeakSet:Set,rt=null;function $5(e,t){if(e=e.containerInfo,Od=ms,e=xm(e),cu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var l=o.anchorOffset,u=o.focusNode;o=o.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var x=0,j=-1,_=-1,q=0,Z=0,J=e,F=null;t:for(;;){for(var V;J!==n||l!==0&&J.nodeType!==3||(j=x+l),J!==u||o!==0&&J.nodeType!==3||(_=x+o),J.nodeType===3&&(x+=J.nodeValue.length),(V=J.firstChild)!==null;)F=J,J=V;for(;;){if(J===e)break t;if(F===n&&++q===l&&(j=x),F===u&&++Z===o&&(_=x),(V=J.nextSibling)!==null)break;J=F,F=J.parentNode}J=V}n=j===-1||_===-1?null:{start:j,end:_}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bd={focusedElem:e,selectionRange:n},ms=!1,rt=t;rt!==null;)if(t=rt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,rt=e;else for(;rt!==null;){switch(t=rt,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,l=u.memoizedProps,u=u.memoizedState,o=n.stateNode;try{var he=Vn(n.type,l,n.elementType===n.type);e=o.getSnapshotBeforeUpdate(he,u),o.__reactInternalSnapshotBeforeUpdate=e}catch(de){ze(n,n.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Ud(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ud(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rt=e;break}rt=t.return}}function s0(e,t,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:sn(e,n),o&4&&el(5,n);break;case 1:if(sn(e,n),o&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(x){ze(n,n.return,x)}else{var l=Vn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(x){ze(n,n.return,x)}}o&64&&r0(n),o&512&&tl(n,n.return);break;case 3:if(sn(e,n),o&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qm(e,t)}catch(x){ze(n,n.return,x)}}break;case 27:t===null&&o&4&&l0(n);case 26:case 5:sn(e,n),t===null&&o&4&&a0(n),o&512&&tl(n,n.return);break;case 12:sn(e,n);break;case 13:sn(e,n),o&4&&d0(e,n),o&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=F5.bind(null,n),uv(e,n))));break;case 22:if(o=n.memoizedState!==null||Br,!o){t=t!==null&&t.memoizedState!==null||Ye,l=Br;var u=Ye;Br=o,(Ye=t)&&!u?cn(e,n,(n.subtreeFlags&8772)!==0):sn(e,n),Br=l,Ye=u}break;case 30:break;default:sn(e,n)}}function c0(e){var t=e.alternate;t!==null&&(e.alternate=null,c0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Yc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,wt=!1;function $r(e,t,n){for(n=n.child;n!==null;)u0(e,t,n),n=n.sibling}function u0(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(wo,n)}catch{}switch(n.tag){case 26:Ye||xr(n,t),$r(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ye||xr(n,t);var o=$e,l=wt;pn(n.type)&&($e=n.stateNode,wt=!1),$r(e,t,n),ul(n.stateNode),$e=o,wt=l;break;case 5:Ye||xr(n,t);case 6:if(o=$e,l=wt,$e=null,$r(e,t,n),$e=o,wt=l,$e!==null)if(wt)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(n.stateNode)}catch(u){ze(n,t,u)}else try{$e.removeChild(n.stateNode)}catch(u){ze(n,t,u)}break;case 18:$e!==null&&(wt?(e=$e,J0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),xl(e)):J0($e,n.stateNode));break;case 4:o=$e,l=wt,$e=n.stateNode.containerInfo,wt=!0,$r(e,t,n),$e=o,wt=l;break;case 0:case 11:case 14:case 15:Ye||ln(2,n,t),Ye||ln(4,n,t),$r(e,t,n);break;case 1:Ye||(xr(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"&&n0(n,t,o)),$r(e,t,n);break;case 21:$r(e,t,n);break;case 22:Ye=(o=Ye)||n.memoizedState!==null,$r(e,t,n),Ye=o;break;default:$r(e,t,n)}}function d0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xl(e)}catch(n){ze(t,t.return,n)}}function K5(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new i0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new i0),t;default:throw Error(i(435,e.tag))}}function fd(e,t){var n=K5(e);t.forEach(function(o){var l=V5.bind(null,e,o);n.has(o)||(n.add(o),o.then(l,l))})}function Rt(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var l=n[o],u=e,x=t,j=x;e:for(;j!==null;){switch(j.tag){case 27:if(pn(j.type)){$e=j.stateNode,wt=!1;break e}break;case 5:$e=j.stateNode,wt=!1;break e;case 3:case 4:$e=j.stateNode.containerInfo,wt=!0;break e}j=j.return}if($e===null)throw Error(i(160));u0(u,x,l),$e=null,wt=!1,u=l.alternate,u!==null&&(u.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)f0(t,e),t=t.sibling}var lr=null;function f0(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rt(t,e),Dt(e),o&4&&(ln(3,e,e.return),el(3,e),ln(5,e,e.return));break;case 1:Rt(t,e),Dt(e),o&512&&(Ye||n===null||xr(n,n.return)),o&64&&Br&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var l=lr;if(Rt(t,e),Dt(e),o&512&&(Ye||n===null||xr(n,n.return)),o&4){var u=n!==null?n.memoizedState:null;if(o=e.memoizedState,n===null)if(o===null)if(e.stateNode===null){e:{o=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(o){case"title":u=l.getElementsByTagName("title")[0],(!u||u[ko]||u[ft]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=l.createElement(o),l.head.insertBefore(u,l.querySelector("head > title"))),ct(u,o,n),u[ft]=e,et(u),o=u;break e;case"link":var x=lg("link","href",l).get(o+(n.href||""));if(x){for(var j=0;j<x.length;j++)if(u=x[j],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){x.splice(j,1);break t}}u=l.createElement(o),ct(u,o,n),l.head.appendChild(u);break;case"meta":if(x=lg("meta","content",l).get(o+(n.content||""))){for(j=0;j<x.length;j++)if(u=x[j],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){x.splice(j,1);break t}}u=l.createElement(o),ct(u,o,n),l.head.appendChild(u);break;default:throw Error(i(468,o))}u[ft]=e,et(u),o=u}e.stateNode=o}else ig(l,e.type,e.stateNode);else e.stateNode=og(l,o,e.memoizedProps);else u!==o?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,o===null?ig(l,e.type,e.stateNode):og(l,o,e.memoizedProps)):o===null&&e.stateNode!==null&&sd(e,e.memoizedProps,n.memoizedProps)}break;case 27:Rt(t,e),Dt(e),o&512&&(Ye||n===null||xr(n,n.return)),n!==null&&o&4&&sd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Rt(t,e),Dt(e),o&512&&(Ye||n===null||xr(n,n.return)),e.flags&32){l=e.stateNode;try{va(l,"")}catch(V){ze(e,e.return,V)}}o&4&&e.stateNode!=null&&(l=e.memoizedProps,sd(e,l,n!==null?n.memoizedProps:l)),o&1024&&(dd=!0);break;case 6:if(Rt(t,e),Dt(e),o&4){if(e.stateNode===null)throw Error(i(162));o=e.memoizedProps,n=e.stateNode;try{n.nodeValue=o}catch(V){ze(e,e.return,V)}}break;case 3:if(ds=null,l=lr,lr=cs(t.containerInfo),Rt(t,e),lr=l,Dt(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{xl(t.containerInfo)}catch(V){ze(e,e.return,V)}dd&&(dd=!1,h0(e));break;case 4:o=lr,lr=cs(e.stateNode.containerInfo),Rt(t,e),Dt(e),lr=o;break;case 12:Rt(t,e),Dt(e);break;case 13:Rt(t,e),Dt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(xd=ne()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,fd(e,o)));break;case 22:l=e.memoizedState!==null;var _=n!==null&&n.memoizedState!==null,q=Br,Z=Ye;if(Br=q||l,Ye=Z||_,Rt(t,e),Ye=Z,Br=q,Dt(e),o&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||_||Br||Ye||Gn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){_=n=t;try{if(u=_.stateNode,l)x=u.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{j=_.stateNode;var J=_.memoizedProps.style,F=J!=null&&J.hasOwnProperty("display")?J.display:null;j.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(V){ze(_,_.return,V)}}}else if(t.tag===6){if(n===null){_=t;try{_.stateNode.nodeValue=l?"":_.memoizedProps}catch(V){ze(_,_.return,V)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,fd(e,n))));break;case 19:Rt(t,e),Dt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,fd(e,o)));break;case 30:break;case 21:break;default:Rt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{for(var n,o=e.return;o!==null;){if(o0(o)){n=o;break}o=o.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var l=n.stateNode,u=cd(e);Xi(e,u,l);break;case 5:var x=n.stateNode;n.flags&32&&(va(x,""),n.flags&=-33);var j=cd(e);Xi(e,j,x);break;case 3:case 4:var _=n.stateNode.containerInfo,q=cd(e);ud(e,q,_);break;default:throw Error(i(161))}}catch(Z){ze(e,e.return,Z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function h0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;h0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function sn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)s0(e,t.alternate,t),t=t.sibling}function Gn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ln(4,t,t.return),Gn(t);break;case 1:xr(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&n0(t,t.return,n),Gn(t);break;case 27:ul(t.stateNode);case 26:case 5:xr(t,t.return),Gn(t);break;case 22:t.memoizedState===null&&Gn(t);break;case 30:Gn(t);break;default:Gn(t)}e=e.sibling}}function cn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,l=e,u=t,x=u.flags;switch(u.tag){case 0:case 11:case 15:cn(l,u,n),el(4,u);break;case 1:if(cn(l,u,n),o=u,l=o.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(q){ze(o,o.return,q)}if(o=u,l=o.updateQueue,l!==null){var j=o.stateNode;try{var _=l.shared.hiddenCallbacks;if(_!==null)for(l.shared.hiddenCallbacks=null,l=0;l<_.length;l++)Qm(_[l],j)}catch(q){ze(o,o.return,q)}}n&&x&64&&r0(u),tl(u,u.return);break;case 27:l0(u);case 26:case 5:cn(l,u,n),n&&o===null&&x&4&&a0(u),tl(u,u.return);break;case 12:cn(l,u,n);break;case 13:cn(l,u,n),n&&x&4&&d0(l,u);break;case 22:u.memoizedState===null&&cn(l,u,n),tl(u,u.return);break;case 30:break;default:cn(l,u,n)}t=t.sibling}}function hd(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Lo(n))}function md(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Lo(e))}function vr(e,t,n,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)m0(e,t,n,o),t=t.sibling}function m0(e,t,n,o){var l=t.flags;switch(t.tag){case 0:case 11:case 15:vr(e,t,n,o),l&2048&&el(9,t);break;case 1:vr(e,t,n,o);break;case 3:vr(e,t,n,o),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Lo(e)));break;case 12:if(l&2048){vr(e,t,n,o),e=t.stateNode;try{var u=t.memoizedProps,x=u.id,j=u.onPostCommit;typeof j=="function"&&j(x,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(_){ze(t,t.return,_)}}else vr(e,t,n,o);break;case 13:vr(e,t,n,o);break;case 23:break;case 22:u=t.stateNode,x=t.alternate,t.memoizedState!==null?u._visibility&2?vr(e,t,n,o):rl(e,t):u._visibility&2?vr(e,t,n,o):(u._visibility|=2,Ka(e,t,n,o,(t.subtreeFlags&10256)!==0)),l&2048&&hd(x,t);break;case 24:vr(e,t,n,o),l&2048&&md(t.alternate,t);break;default:vr(e,t,n,o)}}function Ka(e,t,n,o,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,x=t,j=n,_=o,q=x.flags;switch(x.tag){case 0:case 11:case 15:Ka(u,x,j,_,l),el(8,x);break;case 23:break;case 22:var Z=x.stateNode;x.memoizedState!==null?Z._visibility&2?Ka(u,x,j,_,l):rl(u,x):(Z._visibility|=2,Ka(u,x,j,_,l)),l&&q&2048&&hd(x.alternate,x);break;case 24:Ka(u,x,j,_,l),l&&q&2048&&md(x.alternate,x);break;default:Ka(u,x,j,_,l)}t=t.sibling}}function rl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,o=t,l=o.flags;switch(o.tag){case 22:rl(n,o),l&2048&&hd(o.alternate,o);break;case 24:rl(n,o),l&2048&&md(o.alternate,o);break;default:rl(n,o)}t=t.sibling}}var nl=8192;function Ua(e){if(e.subtreeFlags&nl)for(e=e.child;e!==null;)p0(e),e=e.sibling}function p0(e){switch(e.tag){case 26:Ua(e),e.flags&nl&&e.memoizedState!==null&&Av(lr,e.memoizedState,e.memoizedProps);break;case 5:Ua(e);break;case 3:case 4:var t=lr;lr=cs(e.stateNode.containerInfo),Ua(e),lr=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=nl,nl=16777216,Ua(e),nl=t):Ua(e));break;default:Ua(e)}}function g0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function al(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];rt=o,x0(o,e)}g0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)b0(e),e=e.sibling}function b0(e){switch(e.tag){case 0:case 11:case 15:al(e),e.flags&2048&&ln(9,e,e.return);break;case 3:al(e);break;case 12:al(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ii(e)):al(e);break;default:al(e)}}function Ii(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];rt=o,x0(o,e)}g0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ln(8,t,t.return),Ii(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ii(t));break;default:Ii(t)}e=e.sibling}}function x0(e,t){for(;rt!==null;){var n=rt;switch(n.tag){case 0:case 11:case 15:ln(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Lo(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,rt=o;else e:for(n=e;rt!==null;){o=rt;var l=o.sibling,u=o.return;if(c0(o),o===n){rt=null;break e}if(l!==null){l.return=u,rt=l;break e}rt=u}}}var U5={getCacheForType:function(e){var t=ht(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},L5=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Oe=null,we=null,Se=0,Te=0,zt=null,un=!1,La=!1,pd=!1,Kr=0,Qe=0,dn=0,Zn=0,gd=0,Vt=0,Ha=0,ol=null,At=null,bd=!1,xd=0,Ji=1/0,Wi=null,fn=null,st=0,hn=null,Qa=null,qa=0,vd=0,yd=null,v0=null,ll=0,jd=null;function Ot(){if((Ne&2)!==0&&Se!==0)return Se&-Se;if(G.T!==null){var e=Ta;return e!==0?e:Md()}return Oh()}function y0(){Vt===0&&(Vt=(Se&536870912)===0||Ee?_h():536870912);var e=Ft.current;return e!==null&&(e.flags|=32),Vt}function Bt(e,t,n){(e===Oe&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(Ya(e,0),mn(e,Se,Vt,!1)),So(e,n),((Ne&2)===0||e!==Oe)&&(e===Oe&&((Ne&2)===0&&(Zn|=n),Qe===4&&mn(e,Se,Vt,!1)),yr(e))}function j0(e,t,n){if((Ne&6)!==0)throw Error(i(327));var o=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Ao(e,t),l=o?q5(e,t):Sd(e,t,!0),u=o;do{if(l===0){La&&!o&&mn(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!H5(n)){l=Sd(e,t,!1),u=!1;continue}if(l===2){if(u=t,e.errorRecoveryDisabledLanes&u)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){t=x;e:{var j=e;l=ol;var _=j.current.memoizedState.isDehydrated;if(_&&(Ya(j,x).flags|=256),x=Sd(j,x,!1),x!==2){if(pd&&!_){j.errorRecoveryDisabledLanes|=u,Zn|=u,l=4;break e}u=At,At=l,u!==null&&(At===null?At=u:At.push.apply(At,u))}l=x}if(u=!1,l!==2)continue}}if(l===1){Ya(e,0),mn(e,t,0,!0);break}e:{switch(o=e,u=l,u){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:mn(o,t,Vt,!un);break e;case 2:At=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(l=xd+300-ne(),10<l)){if(mn(o,t,Vt,!un),ui(o,0,!0)!==0)break e;o.timeoutHandle=X0(w0.bind(null,o,n,At,Wi,bd,t,Vt,Zn,Ha,un,u,2,-0,0),l);break e}w0(o,n,At,Wi,bd,t,Vt,Zn,Ha,un,u,0,-0,0)}}break}while(!0);yr(e)}function w0(e,t,n,o,l,u,x,j,_,q,Z,J,F,V){if(e.timeoutHandle=-1,J=t.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(hl={stylesheets:null,count:0,unsuspend:wv},p0(t),J=Sv(),J!==null)){e.cancelPendingCommit=J(N0.bind(null,e,t,u,n,o,l,x,j,_,Z,1,F,V)),mn(e,u,x,!q);return}N0(e,t,u,n,o,l,x,j,_)}function H5(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var l=n[o],u=l.getSnapshot;l=l.value;try{if(!Tt(u(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mn(e,t,n,o){t&=~gd,t&=~Zn,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var l=t;0<l;){var u=31-Nt(l),x=1<<u;o[u]=-1,l&=~x}n!==0&&Dh(e,n,t)}function es(){return(Ne&6)===0?(il(0),!1):!0}function wd(){if(we!==null){if(Te===0)var e=we.return;else e=we,Tr=qn=null,Uu(e),Ba=null,Io=0,e=we;for(;e!==null;)t0(e.alternate,e),e=e.return;we=null}}function Ya(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,ov(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),wd(),Oe=e,we=n=Er(e.current,null),Se=t,Te=0,zt=null,un=!1,La=Ao(e,t),pd=!1,Ha=Vt=gd=Zn=dn=Qe=0,At=ol=null,bd=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var l=31-Nt(o),u=1<<l;t|=e[l],o&=~u}return Kr=t,wi(),n}function A0(e,t){xe=null,G.H=Hi,t===Qo||t===_i?(t=Lm(),Te=3):t===$m?(t=Lm(),Te=4):Te=t===Hp?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,zt=t,we===null&&(Qe=1,Fi(e,Qt(t,e.current)))}function S0(){var e=G.H;return G.H=Hi,e===null?Hi:e}function k0(){var e=G.A;return G.A=U5,e}function Ad(){Qe=4,un||(Se&4194048)!==Se&&Ft.current!==null||(La=!0),(dn&134217727)===0&&(Zn&134217727)===0||Oe===null||mn(Oe,Se,Vt,!1)}function Sd(e,t,n){var o=Ne;Ne|=2;var l=S0(),u=k0();(Oe!==e||Se!==t)&&(Wi=null,Ya(e,t)),t=!1;var x=Qe;e:do try{if(Te!==0&&we!==null){var j=we,_=zt;switch(Te){case 8:wd(),x=6;break e;case 3:case 2:case 9:case 6:Ft.current===null&&(t=!0);var q=Te;if(Te=0,zt=null,Pa(e,j,_,q),n&&La){x=0;break e}break;default:q=Te,Te=0,zt=null,Pa(e,j,_,q)}}Q5(),x=Qe;break}catch(Z){A0(e,Z)}while(!0);return t&&e.shellSuspendCounter++,Tr=qn=null,Ne=o,G.H=l,G.A=u,we===null&&(Oe=null,Se=0,wi()),x}function Q5(){for(;we!==null;)C0(we)}function q5(e,t){var n=Ne;Ne|=2;var o=S0(),l=k0();Oe!==e||Se!==t?(Wi=null,Ji=ne()+500,Ya(e,t)):La=Ao(e,t);e:do try{if(Te!==0&&we!==null){t=we;var u=zt;t:switch(Te){case 1:Te=0,zt=null,Pa(e,t,u,1);break;case 2:case 9:if(Km(u)){Te=0,zt=null,E0(t);break}t=function(){Te!==2&&Te!==9||Oe!==e||(Te=7),yr(e)},u.then(t,t);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:Km(u)?(Te=0,zt=null,E0(t)):(Te=0,zt=null,Pa(e,t,u,7));break;case 5:var x=null;switch(we.tag){case 26:x=we.memoizedState;case 5:case 27:var j=we;if(!x||sg(x)){Te=0,zt=null;var _=j.sibling;if(_!==null)we=_;else{var q=j.return;q!==null?(we=q,ts(q)):we=null}break t}}Te=0,zt=null,Pa(e,t,u,5);break;case 6:Te=0,zt=null,Pa(e,t,u,6);break;case 8:wd(),Qe=6;break e;default:throw Error(i(462))}}Y5();break}catch(Z){A0(e,Z)}while(!0);return Tr=qn=null,G.H=o,G.A=l,Ne=n,we!==null?0:(Oe=null,Se=0,wi(),Qe)}function Y5(){for(;we!==null&&!pr();)C0(we)}function C0(e){var t=Wp(e.alternate,e,Kr);e.memoizedProps=e.pendingProps,t===null?ts(e):we=t}function E0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Vp(n,t,t.pendingProps,t.type,void 0,Se);break;case 11:t=Vp(n,t,t.pendingProps,t.type.render,t.ref,Se);break;case 5:Uu(t);default:t0(n,t),t=we=Mm(t,Kr),t=Wp(n,t,Kr)}e.memoizedProps=e.pendingProps,t===null?ts(e):we=t}function Pa(e,t,n,o){Tr=qn=null,Uu(t),Ba=null,Io=0;var l=t.return;try{if(D5(e,l,t,n,Se)){Qe=1,Fi(e,Qt(n,e.current)),we=null;return}}catch(u){if(l!==null)throw we=l,u;Qe=1,Fi(e,Qt(n,e.current)),we=null;return}t.flags&32768?(Ee||o===1?e=!0:La||(Se&536870912)!==0?e=!1:(un=e=!0,(o===2||o===9||o===3||o===6)&&(o=Ft.current,o!==null&&o.tag===13&&(o.flags|=16384))),M0(t,e)):ts(t)}function ts(e){var t=e;do{if((t.flags&32768)!==0){M0(t,un);return}e=t.return;var n=O5(t.alternate,t,Kr);if(n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Qe===0&&(Qe=5)}function M0(e,t){do{var n=B5(e.alternate,e);if(n!==null){n.flags&=32767,we=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){we=e;return}we=e=n}while(e!==null);Qe=6,we=null}function N0(e,t,n,o,l,u,x,j,_){e.cancelPendingCommit=null;do rs();while(st!==0);if((Ne&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(u=t.lanes|t.childLanes,u|=mu,wx(e,n,u,x,j,_),e===Oe&&(we=Oe=null,Se=0),Qa=t,hn=e,qa=n,vd=u,yd=l,v0=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,G5(ii,function(){return z0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=G.T,G.T=null,l=ee.p,ee.p=2,x=Ne,Ne|=4;try{$5(e,t,n)}finally{Ne=x,ee.p=l,G.T=o}}st=1,T0(),_0(),R0()}}function T0(){if(st===1){st=0;var e=hn,t=Qa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=G.T,G.T=null;var o=ee.p;ee.p=2;var l=Ne;Ne|=4;try{f0(t,e);var u=Bd,x=xm(e.containerInfo),j=u.focusedElem,_=u.selectionRange;if(x!==j&&j&&j.ownerDocument&&bm(j.ownerDocument.documentElement,j)){if(_!==null&&cu(j)){var q=_.start,Z=_.end;if(Z===void 0&&(Z=q),"selectionStart"in j)j.selectionStart=q,j.selectionEnd=Math.min(Z,j.value.length);else{var J=j.ownerDocument||document,F=J&&J.defaultView||window;if(F.getSelection){var V=F.getSelection(),he=j.textContent.length,de=Math.min(_.start,he),De=_.end===void 0?de:Math.min(_.end,he);!V.extend&&de>De&&(x=De,De=de,de=x);var U=gm(j,de),B=gm(j,De);if(U&&B&&(V.rangeCount!==1||V.anchorNode!==U.node||V.anchorOffset!==U.offset||V.focusNode!==B.node||V.focusOffset!==B.offset)){var Q=J.createRange();Q.setStart(U.node,U.offset),V.removeAllRanges(),de>De?(V.addRange(Q),V.extend(B.node,B.offset)):(Q.setEnd(B.node,B.offset),V.addRange(Q))}}}}for(J=[],V=j;V=V.parentNode;)V.nodeType===1&&J.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof j.focus=="function"&&j.focus(),j=0;j<J.length;j++){var X=J[j];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}ms=!!Od,Bd=Od=null}finally{Ne=l,ee.p=o,G.T=n}}e.current=t,st=2}}function _0(){if(st===2){st=0;var e=hn,t=Qa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=G.T,G.T=null;var o=ee.p;ee.p=2;var l=Ne;Ne|=4;try{s0(e,t.alternate,t)}finally{Ne=l,ee.p=o,G.T=n}}st=3}}function R0(){if(st===4||st===3){st=0,Uc();var e=hn,t=Qa,n=qa,o=v0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?st=5:(st=0,Qa=hn=null,D0(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(fn=null),Qc(n),t=t.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(wo,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=G.T,l=ee.p,ee.p=2,G.T=null;try{for(var u=e.onRecoverableError,x=0;x<o.length;x++){var j=o[x];u(j.value,{componentStack:j.stack})}}finally{G.T=t,ee.p=l}}(qa&3)!==0&&rs(),yr(e),l=e.pendingLanes,(n&4194090)!==0&&(l&42)!==0?e===jd?ll++:(ll=0,jd=e):ll=0,il(0)}}function D0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Lo(t)))}function rs(e){return T0(),_0(),R0(),z0()}function z0(){if(st!==5)return!1;var e=hn,t=vd;vd=0;var n=Qc(qa),o=G.T,l=ee.p;try{ee.p=32>n?32:n,G.T=null,n=yd,yd=null;var u=hn,x=qa;if(st=0,Qa=hn=null,qa=0,(Ne&6)!==0)throw Error(i(331));var j=Ne;if(Ne|=4,b0(u.current),m0(u,u.current,x,n),Ne=j,il(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(wo,u)}catch{}return!0}finally{ee.p=l,G.T=o,D0(e,t)}}function O0(e,t,n){t=Qt(n,t),t=Wu(e.stateNode,t,2),e=rn(e,t,2),e!==null&&(So(e,2),yr(e))}function ze(e,t,n){if(e.tag===3)O0(e,e,n);else for(;t!==null;){if(t.tag===3){O0(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(fn===null||!fn.has(o))){e=Qt(n,e),n=Up(2),o=rn(t,n,2),o!==null&&(Lp(n,o,t,e),So(o,2),yr(o));break}}t=t.return}}function kd(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new L5;var l=new Set;o.set(t,l)}else l=o.get(t),l===void 0&&(l=new Set,o.set(t,l));l.has(n)||(pd=!0,l.add(n),e=P5.bind(null,e,t,n),t.then(e,e))}function P5(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Oe===e&&(Se&n)===n&&(Qe===4||Qe===3&&(Se&62914560)===Se&&300>ne()-xd?(Ne&2)===0&&Ya(e,0):gd|=n,Ha===Se&&(Ha=0)),yr(e)}function B0(e,t){t===0&&(t=Rh()),e=Ca(e,t),e!==null&&(So(e,t),yr(e))}function F5(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),B0(e,n)}function V5(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(i(314))}o!==null&&o.delete(t),B0(e,n)}function G5(e,t){return Sr(e,t)}var ns=null,Fa=null,Cd=!1,as=!1,Ed=!1,Xn=0;function yr(e){e!==Fa&&e.next===null&&(Fa===null?ns=Fa=e:Fa=Fa.next=e),as=!0,Cd||(Cd=!0,X5())}function il(e,t){if(!Ed&&as){Ed=!0;do for(var n=!1,o=ns;o!==null;){if(e!==0){var l=o.pendingLanes;if(l===0)var u=0;else{var x=o.suspendedLanes,j=o.pingedLanes;u=(1<<31-Nt(42|e)+1)-1,u&=l&~(x&~j),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,L0(o,u))}else u=Se,u=ui(o,o===Oe?u:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(u&3)===0||Ao(o,u)||(n=!0,L0(o,u));o=o.next}while(n);Ed=!1}}function Z5(){$0()}function $0(){as=Cd=!1;var e=0;Xn!==0&&(av()&&(e=Xn),Xn=0);for(var t=ne(),n=null,o=ns;o!==null;){var l=o.next,u=K0(o,t);u===0?(o.next=null,n===null?ns=l:n.next=l,l===null&&(Fa=n)):(n=o,(e!==0||(u&3)!==0)&&(as=!0)),o=l}il(e)}function K0(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var x=31-Nt(u),j=1<<x,_=l[x];_===-1?((j&n)===0||(j&o)!==0)&&(l[x]=jx(j,t)):_<=t&&(e.expiredLanes|=j),u&=~j}if(t=Oe,n=Se,n=ui(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,n===0||e===t&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ar(o),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ao(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(o!==null&&ar(o),Qc(n)){case 2:case 8:n=xt;break;case 32:n=ii;break;case 268435456:n=Th;break;default:n=ii}return o=U0.bind(null,e),n=Sr(n,o),e.callbackPriority=t,e.callbackNode=n,t}return o!==null&&o!==null&&ar(o),e.callbackPriority=2,e.callbackNode=null,2}function U0(e,t){if(st!==0&&st!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(rs()&&e.callbackNode!==n)return null;var o=Se;return o=ui(e,e===Oe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(j0(e,o,t),K0(e,ne()),e.callbackNode!=null&&e.callbackNode===n?U0.bind(null,e):null)}function L0(e,t){if(rs())return null;j0(e,t,!0)}function X5(){lv(function(){(Ne&6)!==0?Sr(lt,Z5):$0()})}function Md(){return Xn===0&&(Xn=_h()),Xn}function H0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pi(""+e)}function Q0(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function I5(e,t,n,o,l){if(t==="submit"&&n&&n.stateNode===l){var u=H0((l[vt]||null).action),x=o.submitter;x&&(t=(t=x[vt]||null)?H0(t.formAction):x.getAttribute("formAction"),t!==null&&(u=t,x=null));var j=new vi("action","action",null,o,l);e.push({event:j,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xn!==0){var _=x?Q0(l,x):new FormData(l);Gu(n,{pending:!0,data:_,method:l.method,action:u},null,_)}}else typeof u=="function"&&(j.preventDefault(),_=x?Q0(l,x):new FormData(l),Gu(n,{pending:!0,data:_,method:l.method,action:u},u,_))},currentTarget:l}]})}}for(var Nd=0;Nd<hu.length;Nd++){var Td=hu[Nd],J5=Td.toLowerCase(),W5=Td[0].toUpperCase()+Td.slice(1);or(J5,"on"+W5)}or(jm,"onAnimationEnd"),or(wm,"onAnimationIteration"),or(Am,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(g5,"onTransitionRun"),or(b5,"onTransitionStart"),or(x5,"onTransitionCancel"),or(Sm,"onTransitionEnd"),ga("onMouseEnter",["mouseout","mouseover"]),ga("onMouseLeave",["mouseout","mouseover"]),ga("onPointerEnter",["pointerout","pointerover"]),ga("onPointerLeave",["pointerout","pointerover"]),zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zn("onBeforeInput",["compositionend","keypress","textInput","paste"]),zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ev=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sl));function q0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],l=o.event;o=o.listeners;e:{var u=void 0;if(t)for(var x=o.length-1;0<=x;x--){var j=o[x],_=j.instance,q=j.currentTarget;if(j=j.listener,_!==u&&l.isPropagationStopped())break e;u=j,l.currentTarget=q;try{u(l)}catch(Z){Pi(Z)}l.currentTarget=null,u=_}else for(x=0;x<o.length;x++){if(j=o[x],_=j.instance,q=j.currentTarget,j=j.listener,_!==u&&l.isPropagationStopped())break e;u=j,l.currentTarget=q;try{u(l)}catch(Z){Pi(Z)}l.currentTarget=null,u=_}}}}function Ae(e,t){var n=t[qc];n===void 0&&(n=t[qc]=new Set);var o=e+"__bubble";n.has(o)||(Y0(t,e,2,!1),n.add(o))}function _d(e,t,n){var o=0;t&&(o|=4),Y0(n,e,o,t)}var os="_reactListening"+Math.random().toString(36).slice(2);function Rd(e){if(!e[os]){e[os]=!0,$h.forEach(function(n){n!=="selectionchange"&&(ev.has(n)||_d(n,!1,e),_d(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[os]||(t[os]=!0,_d("selectionchange",!1,t))}}function Y0(e,t,n,o){switch(mg(t)){case 2:var l=Ev;break;case 8:l=Mv;break;default:l=Fd}n=l.bind(null,t,n,e),l=void 0,!eu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Dd(e,t,n,o,l){var u=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var j=o.stateNode.containerInfo;if(j===l)break;if(x===4)for(x=o.return;x!==null;){var _=x.tag;if((_===3||_===4)&&x.stateNode.containerInfo===l)return;x=x.return}for(;j!==null;){if(x=ha(j),x===null)return;if(_=x.tag,_===5||_===6||_===26||_===27){o=u=x;continue e}j=j.parentNode}}o=o.return}Ih(function(){var q=u,Z=Jc(n),J=[];e:{var F=km.get(e);if(F!==void 0){var V=vi,he=e;switch(e){case"keypress":if(bi(n)===0)break e;case"keydown":case"keyup":V=Gx;break;case"focusin":he="focus",V=au;break;case"focusout":he="blur",V=au;break;case"beforeblur":case"afterblur":V=au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=em;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Ix;break;case jm:case wm:case Am:V=Ux;break;case Sm:V=Wx;break;case"scroll":case"scrollend":V=zx;break;case"wheel":V=t5;break;case"copy":case"cut":case"paste":V=Hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=rm;break;case"toggle":case"beforetoggle":V=n5}var de=(t&4)!==0,De=!de&&(e==="scroll"||e==="scrollend"),U=de?F!==null?F+"Capture":null:F;de=[];for(var B=q,Q;B!==null;){var X=B;if(Q=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||Q===null||U===null||(X=Eo(B,U),X!=null&&de.push(cl(B,X,Q))),De)break;B=B.return}0<de.length&&(F=new V(F,he,null,n,Z),J.push({event:F,listeners:de}))}}if((t&7)===0){e:{if(F=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",F&&n!==Ic&&(he=n.relatedTarget||n.fromElement)&&(ha(he)||he[fa]))break e;if((V||F)&&(F=Z.window===Z?Z:(F=Z.ownerDocument)?F.defaultView||F.parentWindow:window,V?(he=n.relatedTarget||n.toElement,V=q,he=he?ha(he):null,he!==null&&(De=f(he),de=he.tag,he!==De||de!==5&&de!==27&&de!==6)&&(he=null)):(V=null,he=q),V!==he)){if(de=em,X="onMouseLeave",U="onMouseEnter",B="mouse",(e==="pointerout"||e==="pointerover")&&(de=rm,X="onPointerLeave",U="onPointerEnter",B="pointer"),De=V==null?F:Co(V),Q=he==null?F:Co(he),F=new de(X,B+"leave",V,n,Z),F.target=De,F.relatedTarget=Q,X=null,ha(Z)===q&&(de=new de(U,B+"enter",he,n,Z),de.target=Q,de.relatedTarget=De,X=de),De=X,V&&he)t:{for(de=V,U=he,B=0,Q=de;Q;Q=Va(Q))B++;for(Q=0,X=U;X;X=Va(X))Q++;for(;0<B-Q;)de=Va(de),B--;for(;0<Q-B;)U=Va(U),Q--;for(;B--;){if(de===U||U!==null&&de===U.alternate)break t;de=Va(de),U=Va(U)}de=null}else de=null;V!==null&&P0(J,F,V,de,!1),he!==null&&De!==null&&P0(J,De,he,de,!0)}}e:{if(F=q?Co(q):window,V=F.nodeName&&F.nodeName.toLowerCase(),V==="select"||V==="input"&&F.type==="file")var ae=um;else if(sm(F))if(dm)ae=h5;else{ae=d5;var ve=u5}else V=F.nodeName,!V||V.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?q&&Xc(q.elementType)&&(ae=um):ae=f5;if(ae&&(ae=ae(e,q))){cm(J,ae,n,Z);break e}ve&&ve(e,F,q),e==="focusout"&&q&&F.type==="number"&&q.memoizedProps.value!=null&&Zc(F,"number",F.value)}switch(ve=q?Co(q):window,e){case"focusin":(sm(ve)||ve.contentEditable==="true")&&(Aa=ve,uu=q,Oo=null);break;case"focusout":Oo=uu=Aa=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,vm(J,n,Z);break;case"selectionchange":if(p5)break;case"keydown":case"keyup":vm(J,n,Z)}var ce;if(lu)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else wa?lm(e,n)&&(fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(fe="onCompositionStart");fe&&(nm&&n.locale!=="ko"&&(wa||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&wa&&(ce=Jh()):(Jr=Z,tu="value"in Jr?Jr.value:Jr.textContent,wa=!0)),ve=ls(q,fe),0<ve.length&&(fe=new tm(fe,e,null,n,Z),J.push({event:fe,listeners:ve}),ce?fe.data=ce:(ce=im(n),ce!==null&&(fe.data=ce)))),(ce=o5?l5(e,n):i5(e,n))&&(fe=ls(q,"onBeforeInput"),0<fe.length&&(ve=new tm("onBeforeInput","beforeinput",null,n,Z),J.push({event:ve,listeners:fe}),ve.data=ce)),I5(J,e,q,n,Z)}q0(J,t)})}function cl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ls(e,t){for(var n=t+"Capture",o=[];e!==null;){var l=e,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=Eo(e,n),l!=null&&o.unshift(cl(e,l,u)),l=Eo(e,t),l!=null&&o.push(cl(e,l,u))),e.tag===3)return o;e=e.return}return[]}function Va(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function P0(e,t,n,o,l){for(var u=t._reactName,x=[];n!==null&&n!==o;){var j=n,_=j.alternate,q=j.stateNode;if(j=j.tag,_!==null&&_===o)break;j!==5&&j!==26&&j!==27||q===null||(_=q,l?(q=Eo(n,u),q!=null&&x.unshift(cl(n,q,_))):l||(q=Eo(n,u),q!=null&&x.push(cl(n,q,_)))),n=n.return}x.length!==0&&e.push({event:t,listeners:x})}var tv=/\r\n?/g,rv=/\u0000|\uFFFD/g;function F0(e){return(typeof e=="string"?e:""+e).replace(tv,`
`).replace(rv,"")}function V0(e,t){return t=F0(t),F0(e)===t}function is(){}function Re(e,t,n,o,l,u){switch(n){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||va(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&va(e,""+o);break;case"className":fi(e,"class",o);break;case"tabIndex":fi(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":fi(e,n,o);break;case"style":Zh(e,o,u);break;case"data":if(t!=="object"){fi(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=pi(""+o),e.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Re(e,t,"name",l.name,l,null),Re(e,t,"formEncType",l.formEncType,l,null),Re(e,t,"formMethod",l.formMethod,l,null),Re(e,t,"formTarget",l.formTarget,l,null)):(Re(e,t,"encType",l.encType,l,null),Re(e,t,"method",l.method,l,null),Re(e,t,"target",l.target,l,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=pi(""+o),e.setAttribute(n,o);break;case"onClick":o!=null&&(e.onclick=is);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(i(61));if(n=o.__html,n!=null){if(l.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}n=pi(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""+o):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":o===!0?e.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,o):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(n,o):e.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(n):e.setAttribute(n,o);break;case"popover":Ae("beforetoggle",e),Ae("toggle",e),di(e,"popover",o);break;case"xlinkActuate":kr(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":kr(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":kr(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":kr(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":kr(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":kr(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":kr(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":kr(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":kr(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":di(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Rx.get(n)||n,di(e,n,o))}}function zd(e,t,n,o,l,u){switch(n){case"style":Zh(e,o,u);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(i(61));if(n=o.__html,n!=null){if(l.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"children":typeof o=="string"?va(e,o):(typeof o=="number"||typeof o=="bigint")&&va(e,""+o);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"onClick":o!=null&&(e.onclick=is);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kh.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),u=e[vt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,l),typeof o=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,o,l);break e}n in e?e[n]=o:o===!0?e.setAttribute(n,""):di(e,n,o)}}}function ct(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",e),Ae("load",e);var o=!1,l=!1,u;for(u in n)if(n.hasOwnProperty(u)){var x=n[u];if(x!=null)switch(u){case"src":o=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Re(e,t,u,x,n,null)}}l&&Re(e,t,"srcSet",n.srcSet,n,null),o&&Re(e,t,"src",n.src,n,null);return;case"input":Ae("invalid",e);var j=u=x=l=null,_=null,q=null;for(o in n)if(n.hasOwnProperty(o)){var Z=n[o];if(Z!=null)switch(o){case"name":l=Z;break;case"type":x=Z;break;case"checked":_=Z;break;case"defaultChecked":q=Z;break;case"value":u=Z;break;case"defaultValue":j=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,t));break;default:Re(e,t,o,Z,n,null)}}Ph(e,u,j,_,q,x,l,!1),hi(e);return;case"select":Ae("invalid",e),o=x=u=null;for(l in n)if(n.hasOwnProperty(l)&&(j=n[l],j!=null))switch(l){case"value":u=j;break;case"defaultValue":x=j;break;case"multiple":o=j;default:Re(e,t,l,j,n,null)}t=u,n=x,e.multiple=!!o,t!=null?xa(e,!!o,t,!1):n!=null&&xa(e,!!o,n,!0);return;case"textarea":Ae("invalid",e),u=l=o=null;for(x in n)if(n.hasOwnProperty(x)&&(j=n[x],j!=null))switch(x){case"value":o=j;break;case"defaultValue":l=j;break;case"children":u=j;break;case"dangerouslySetInnerHTML":if(j!=null)throw Error(i(91));break;default:Re(e,t,x,j,n,null)}Vh(e,o,l,u),hi(e);return;case"option":for(_ in n)if(n.hasOwnProperty(_)&&(o=n[_],o!=null))switch(_){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Re(e,t,_,o,n,null)}return;case"dialog":Ae("beforetoggle",e),Ae("toggle",e),Ae("cancel",e),Ae("close",e);break;case"iframe":case"object":Ae("load",e);break;case"video":case"audio":for(o=0;o<sl.length;o++)Ae(sl[o],e);break;case"image":Ae("error",e),Ae("load",e);break;case"details":Ae("toggle",e);break;case"embed":case"source":case"link":Ae("error",e),Ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in n)if(n.hasOwnProperty(q)&&(o=n[q],o!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:Re(e,t,q,o,n,null)}return;default:if(Xc(t)){for(Z in n)n.hasOwnProperty(Z)&&(o=n[Z],o!==void 0&&zd(e,t,Z,o,n,void 0));return}}for(j in n)n.hasOwnProperty(j)&&(o=n[j],o!=null&&Re(e,t,j,o,n,null))}function nv(e,t,n,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,x=null,j=null,_=null,q=null,Z=null;for(V in n){var J=n[V];if(n.hasOwnProperty(V)&&J!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":_=J;default:o.hasOwnProperty(V)||Re(e,t,V,null,o,J)}}for(var F in o){var V=o[F];if(J=n[F],o.hasOwnProperty(F)&&(V!=null||J!=null))switch(F){case"type":u=V;break;case"name":l=V;break;case"checked":q=V;break;case"defaultChecked":Z=V;break;case"value":x=V;break;case"defaultValue":j=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(i(137,t));break;default:V!==J&&Re(e,t,F,V,o,J)}}Gc(e,x,j,_,q,Z,u,l);return;case"select":V=x=j=F=null;for(u in n)if(_=n[u],n.hasOwnProperty(u)&&_!=null)switch(u){case"value":break;case"multiple":V=_;default:o.hasOwnProperty(u)||Re(e,t,u,null,o,_)}for(l in o)if(u=o[l],_=n[l],o.hasOwnProperty(l)&&(u!=null||_!=null))switch(l){case"value":F=u;break;case"defaultValue":j=u;break;case"multiple":x=u;default:u!==_&&Re(e,t,l,u,o,_)}t=j,n=x,o=V,F!=null?xa(e,!!n,F,!1):!!o!=!!n&&(t!=null?xa(e,!!n,t,!0):xa(e,!!n,n?[]:"",!1));return;case"textarea":V=F=null;for(j in n)if(l=n[j],n.hasOwnProperty(j)&&l!=null&&!o.hasOwnProperty(j))switch(j){case"value":break;case"children":break;default:Re(e,t,j,null,o,l)}for(x in o)if(l=o[x],u=n[x],o.hasOwnProperty(x)&&(l!=null||u!=null))switch(x){case"value":F=l;break;case"defaultValue":V=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(i(91));break;default:l!==u&&Re(e,t,x,l,o,u)}Fh(e,F,V);return;case"option":for(var he in n)if(F=n[he],n.hasOwnProperty(he)&&F!=null&&!o.hasOwnProperty(he))switch(he){case"selected":e.selected=!1;break;default:Re(e,t,he,null,o,F)}for(_ in o)if(F=o[_],V=n[_],o.hasOwnProperty(_)&&F!==V&&(F!=null||V!=null))switch(_){case"selected":e.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:Re(e,t,_,F,o,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in n)F=n[de],n.hasOwnProperty(de)&&F!=null&&!o.hasOwnProperty(de)&&Re(e,t,de,null,o,F);for(q in o)if(F=o[q],V=n[q],o.hasOwnProperty(q)&&F!==V&&(F!=null||V!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(i(137,t));break;default:Re(e,t,q,F,o,V)}return;default:if(Xc(t)){for(var De in n)F=n[De],n.hasOwnProperty(De)&&F!==void 0&&!o.hasOwnProperty(De)&&zd(e,t,De,void 0,o,F);for(Z in o)F=o[Z],V=n[Z],!o.hasOwnProperty(Z)||F===V||F===void 0&&V===void 0||zd(e,t,Z,F,o,V);return}}for(var U in n)F=n[U],n.hasOwnProperty(U)&&F!=null&&!o.hasOwnProperty(U)&&Re(e,t,U,null,o,F);for(J in o)F=o[J],V=n[J],!o.hasOwnProperty(J)||F===V||F==null&&V==null||Re(e,t,J,F,o,V)}var Od=null,Bd=null;function ss(e){return e.nodeType===9?e:e.ownerDocument}function G0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Z0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function $d(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kd=null;function av(){var e=window.event;return e&&e.type==="popstate"?e===Kd?!1:(Kd=e,!0):(Kd=null,!1)}var X0=typeof setTimeout=="function"?setTimeout:void 0,ov=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,lv=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(e){return I0.resolve(null).then(e).catch(iv)}:X0;function iv(e){setTimeout(function(){throw e})}function pn(e){return e==="head"}function J0(e,t){var n=t,o=0,l=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<o&&8>o){n=o;var x=e.ownerDocument;if(n&1&&ul(x.documentElement),n&2&&ul(x.body),n&4)for(n=x.head,ul(n),x=n.firstChild;x;){var j=x.nextSibling,_=x.nodeName;x[ko]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&x.rel.toLowerCase()==="stylesheet"||n.removeChild(x),x=j}}if(l===0){e.removeChild(u),xl(t);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:o=n.charCodeAt(0)-48;else o=0;n=u}while(n);xl(t)}function Ud(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ud(n),Yc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function sv(e,t,n,o){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ko])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=ir(e.nextSibling),e===null)break}return null}function cv(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ir(e.nextSibling),e===null))return null;return e}function Ld(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function uv(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var o=function(){t(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ir(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Hd=null;function W0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function eg(e,t,n){switch(t=ss(n),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function ul(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Yc(e)}var Gt=new Map,tg=new Set;function cs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ur=ee.d;ee.d={f:dv,r:fv,D:hv,C:mv,L:pv,m:gv,X:xv,S:bv,M:vv};function dv(){var e=Ur.f(),t=es();return e||t}function fv(e){var t=ma(e);t!==null&&t.tag===5&&t.type==="form"?jp(t):Ur.r(e)}var Ga=typeof document>"u"?null:document;function rg(e,t,n){var o=Ga;if(o&&typeof t=="string"&&t){var l=Ht(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),tg.has(l)||(tg.add(l),e={rel:e,crossOrigin:n,href:t},o.querySelector(l)===null&&(t=o.createElement("link"),ct(t,"link",e),et(t),o.head.appendChild(t)))}}function hv(e){Ur.D(e),rg("dns-prefetch",e,null)}function mv(e,t){Ur.C(e,t),rg("preconnect",e,t)}function pv(e,t,n){Ur.L(e,t,n);var o=Ga;if(o&&e&&t){var l='link[rel="preload"][as="'+Ht(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Ht(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Ht(n.imageSizes)+'"]')):l+='[href="'+Ht(e)+'"]';var u=l;switch(t){case"style":u=Za(e);break;case"script":u=Xa(e)}Gt.has(u)||(e=w({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Gt.set(u,e),o.querySelector(l)!==null||t==="style"&&o.querySelector(dl(u))||t==="script"&&o.querySelector(fl(u))||(t=o.createElement("link"),ct(t,"link",e),et(t),o.head.appendChild(t)))}}function gv(e,t){Ur.m(e,t);var n=Ga;if(n&&e){var o=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Ht(o)+'"][href="'+Ht(e)+'"]',u=l;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Xa(e)}if(!Gt.has(u)&&(e=w({rel:"modulepreload",href:e},t),Gt.set(u,e),n.querySelector(l)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(fl(u)))return}o=n.createElement("link"),ct(o,"link",e),et(o),n.head.appendChild(o)}}}function bv(e,t,n){Ur.S(e,t,n);var o=Ga;if(o&&e){var l=pa(o).hoistableStyles,u=Za(e);t=t||"default";var x=l.get(u);if(!x){var j={loading:0,preload:null};if(x=o.querySelector(dl(u)))j.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Gt.get(u))&&Qd(e,n);var _=x=o.createElement("link");et(_),ct(_,"link",e),_._p=new Promise(function(q,Z){_.onload=q,_.onerror=Z}),_.addEventListener("load",function(){j.loading|=1}),_.addEventListener("error",function(){j.loading|=2}),j.loading|=4,us(x,t,o)}x={type:"stylesheet",instance:x,count:1,state:j},l.set(u,x)}}}function xv(e,t){Ur.X(e,t);var n=Ga;if(n&&e){var o=pa(n).hoistableScripts,l=Xa(e),u=o.get(l);u||(u=n.querySelector(fl(l)),u||(e=w({src:e,async:!0},t),(t=Gt.get(l))&&qd(e,t),u=n.createElement("script"),et(u),ct(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function vv(e,t){Ur.M(e,t);var n=Ga;if(n&&e){var o=pa(n).hoistableScripts,l=Xa(e),u=o.get(l);u||(u=n.querySelector(fl(l)),u||(e=w({src:e,async:!0,type:"module"},t),(t=Gt.get(l))&&qd(e,t),u=n.createElement("script"),et(u),ct(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},o.set(l,u))}}function ng(e,t,n,o){var l=(l=ue.current)?cs(l):null;if(!l)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Za(n.href),n=pa(l).hoistableStyles,o=n.get(t),o||(o={type:"style",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Za(n.href);var u=pa(l).hoistableStyles,x=u.get(e);if(x||(l=l.ownerDocument||l,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,x),(u=l.querySelector(dl(e)))&&!u._p&&(x.instance=u,x.state.loading=5),Gt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Gt.set(e,n),u||yv(l,e,n,x.state))),t&&o===null)throw Error(i(528,""));return x}if(t&&o!==null)throw Error(i(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Xa(n),n=pa(l).hoistableScripts,o=n.get(t),o||(o={type:"script",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Za(e){return'href="'+Ht(e)+'"'}function dl(e){return'link[rel="stylesheet"]['+e+"]"}function ag(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function yv(e,t,n,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),ct(t,"link",n),et(t),e.head.appendChild(t))}function Xa(e){return'[src="'+Ht(e)+'"]'}function fl(e){return"script[async]"+e}function og(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Ht(n.href)+'"]');if(o)return t.instance=o,et(o),o;var l=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),et(o),ct(o,"style",l),us(o,n.precedence,e),t.instance=o;case"stylesheet":l=Za(n.href);var u=e.querySelector(dl(l));if(u)return t.state.loading|=4,t.instance=u,et(u),u;o=ag(n),(l=Gt.get(l))&&Qd(o,l),u=(e.ownerDocument||e).createElement("link"),et(u);var x=u;return x._p=new Promise(function(j,_){x.onload=j,x.onerror=_}),ct(u,"link",o),t.state.loading|=4,us(u,n.precedence,e),t.instance=u;case"script":return u=Xa(n.src),(l=e.querySelector(fl(u)))?(t.instance=l,et(l),l):(o=n,(l=Gt.get(u))&&(o=w({},n),qd(o,l)),e=e.ownerDocument||e,l=e.createElement("script"),et(l),ct(l,"link",o),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,us(o,n.precedence,e));return t.instance}function us(e,t,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=o.length?o[o.length-1]:null,u=l,x=0;x<o.length;x++){var j=o[x];if(j.dataset.precedence===t)u=j;else if(u!==l)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Qd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function qd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ds=null;function lg(e,t,n){if(ds===null){var o=new Map,l=ds=new Map;l.set(n,o)}else l=ds,o=l.get(n),o||(o=new Map,l.set(n,o));if(o.has(e))return o;for(o.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var u=n[l];if(!(u[ko]||u[ft]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var x=u.getAttribute(t)||"";x=e+x;var j=o.get(x);j?j.push(u):o.set(x,[u])}}return o}function ig(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function jv(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function sg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var hl=null;function wv(){}function Av(e,t,n){if(hl===null)throw Error(i(475));var o=hl;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Za(n.href),u=e.querySelector(dl(l));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=fs.bind(o),e.then(o,o)),t.state.loading|=4,t.instance=u,et(u);return}u=e.ownerDocument||e,n=ag(n),(l=Gt.get(l))&&Qd(n,l),u=u.createElement("link"),et(u);var x=u;x._p=new Promise(function(j,_){x.onload=j,x.onerror=_}),ct(u,"link",n),t.instance=u}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(o.count++,t=fs.bind(o),e.addEventListener("load",t),e.addEventListener("error",t))}}function Sv(){if(hl===null)throw Error(i(475));var e=hl;return e.stylesheets&&e.count===0&&Yd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Yd(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function fs(){if(this.count--,this.count===0){if(this.stylesheets)Yd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hs=null;function Yd(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hs=new Map,t.forEach(kv,e),hs=null,fs.call(e))}function kv(e,t){if(!(t.state.loading&4)){var n=hs.get(e);if(n)var o=n.get(null);else{n=new Map,hs.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var x=l[u];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(n.set(x.dataset.precedence,x),o=x)}o&&n.set(null,o)}l=t.instance,x=l.getAttribute("data-precedence"),u=n.get(x)||o,u===o&&n.set(null,l),n.set(x,l),this.count++,o=fs.bind(this),l.addEventListener("load",o),l.addEventListener("error",o),u?u.parentNode.insertBefore(l,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var ml={$$typeof:E,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function Cv(e,t,n,o,l,u,x,j){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.hiddenUpdates=Lc(null),this.identifierPrefix=o,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function cg(e,t,n,o,l,u,x,j,_,q,Z,J){return e=new Cv(e,t,n,x,j,_,q,J),t=1,u===!0&&(t|=24),u=_t(3,null,null,t),e.current=u,u.stateNode=e,t=ku(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:o,isDehydrated:n,cache:t},Nu(u),e}function ug(e){return e?(e=Ea,e):Ea}function dg(e,t,n,o,l,u){l=ug(l),o.context===null?o.context=l:o.pendingContext=l,o=tn(t),o.payload={element:n},u=u===void 0?null:u,u!==null&&(o.callback=u),n=rn(e,o,t),n!==null&&(Bt(n,e,t),Yo(n,e,t))}function fg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pd(e,t){fg(e,t),(e=e.alternate)&&fg(e,t)}function hg(e){if(e.tag===13){var t=Ca(e,67108864);t!==null&&Bt(t,e,67108864),Pd(e,67108864)}}var ms=!0;function Ev(e,t,n,o){var l=G.T;G.T=null;var u=ee.p;try{ee.p=2,Fd(e,t,n,o)}finally{ee.p=u,G.T=l}}function Mv(e,t,n,o){var l=G.T;G.T=null;var u=ee.p;try{ee.p=8,Fd(e,t,n,o)}finally{ee.p=u,G.T=l}}function Fd(e,t,n,o){if(ms){var l=Vd(o);if(l===null)Dd(e,t,o,ps,n),pg(e,o);else if(Tv(l,e,t,n,o))o.stopPropagation();else if(pg(e,o),t&4&&-1<Nv.indexOf(e)){for(;l!==null;){var u=ma(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var x=Dn(u.pendingLanes);if(x!==0){var j=u;for(j.pendingLanes|=2,j.entangledLanes|=2;x;){var _=1<<31-Nt(x);j.entanglements[1]|=_,x&=~_}yr(u),(Ne&6)===0&&(Ji=ne()+500,il(0))}}break;case 13:j=Ca(u,2),j!==null&&Bt(j,u,2),es(),Pd(u,2)}if(u=Vd(o),u===null&&Dd(e,t,o,ps,n),u===l)break;l=u}l!==null&&o.stopPropagation()}else Dd(e,t,o,null,n)}}function Vd(e){return e=Jc(e),Gd(e)}var ps=null;function Gd(e){if(ps=null,e=ha(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ps=e,null}function mg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rn()){case lt:return 2;case xt:return 8;case ii:case px:return 32;case Th:return 268435456;default:return 32}default:return 32}}var Zd=!1,gn=null,bn=null,xn=null,pl=new Map,gl=new Map,vn=[],Nv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pg(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":pl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(t.pointerId)}}function bl(e,t,n,o,l,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:u,targetContainers:[l]},t!==null&&(t=ma(t),t!==null&&hg(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Tv(e,t,n,o,l){switch(t){case"focusin":return gn=bl(gn,e,t,n,o,l),!0;case"dragenter":return bn=bl(bn,e,t,n,o,l),!0;case"mouseover":return xn=bl(xn,e,t,n,o,l),!0;case"pointerover":var u=l.pointerId;return pl.set(u,bl(pl.get(u)||null,e,t,n,o,l)),!0;case"gotpointercapture":return u=l.pointerId,gl.set(u,bl(gl.get(u)||null,e,t,n,o,l)),!0}return!1}function gg(e){var t=ha(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,Ax(e.priority,function(){if(n.tag===13){var o=Ot();o=Hc(o);var l=Ca(n,o);l!==null&&Bt(l,n,o),Pd(n,o)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vd(e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);Ic=o,n.target.dispatchEvent(o),Ic=null}else return t=ma(n),t!==null&&hg(t),e.blockedOn=n,!1;t.shift()}return!0}function bg(e,t,n){gs(e)&&n.delete(t)}function _v(){Zd=!1,gn!==null&&gs(gn)&&(gn=null),bn!==null&&gs(bn)&&(bn=null),xn!==null&&gs(xn)&&(xn=null),pl.forEach(bg),gl.forEach(bg)}function bs(e,t){e.blockedOn===t&&(e.blockedOn=null,Zd||(Zd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,_v)))}var xs=null;function xg(e){xs!==e&&(xs=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){xs===e&&(xs=null);for(var t=0;t<e.length;t+=3){var n=e[t],o=e[t+1],l=e[t+2];if(typeof o!="function"){if(Gd(o||n)===null)continue;break}var u=ma(n);u!==null&&(e.splice(t,3),t-=3,Gu(u,{pending:!0,data:l,method:n.method,action:o},o,l))}}))}function xl(e){function t(_){return bs(_,e)}gn!==null&&bs(gn,e),bn!==null&&bs(bn,e),xn!==null&&bs(xn,e),pl.forEach(t),gl.forEach(t);for(var n=0;n<vn.length;n++){var o=vn[n];o.blockedOn===e&&(o.blockedOn=null)}for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)gg(n),n.blockedOn===null&&vn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var l=n[o],u=n[o+1],x=l[vt]||null;if(typeof u=="function")x||xg(n);else if(x){var j=null;if(u&&u.hasAttribute("formAction")){if(l=u,x=u[vt]||null)j=x.formAction;else if(Gd(l)!==null)continue}else j=x.action;typeof j=="function"?n[o+1]=j:(n.splice(o,3),o-=3),xg(n)}}}function Xd(e){this._internalRoot=e}vs.prototype.render=Xd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,o=Ot();dg(n,o,e,t,null,null)},vs.prototype.unmount=Xd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dg(e.current,2,null,e,null,null),es(),t[fa]=null}};function vs(e){this._internalRoot=e}vs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Oh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vn.length&&t!==0&&t<vn[n].priority;n++);vn.splice(n,0,e),n===0&&gg(e)}};var vg=s.version;if(vg!=="19.1.0")throw Error(i(527,vg,"19.1.0"));ee.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=m(t),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var Rv={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ys.isDisabled&&ys.supportsFiber)try{wo=ys.inject(Rv),Mt=ys}catch{}}return yl.createRoot=function(e,t){if(!d(e))throw Error(i(299));var n=!1,o="",l=Op,u=Bp,x=$p,j=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(x=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(j=t.unstable_transitionCallbacks)),t=cg(e,1,!1,null,null,n,o,l,u,x,j,null),e[fa]=t.current,Rd(e),new Xd(t)},yl.hydrateRoot=function(e,t,n){if(!d(e))throw Error(i(299));var o=!1,l="",u=Op,x=Bp,j=$p,_=null,q=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(x=n.onCaughtError),n.onRecoverableError!==void 0&&(j=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(_=n.unstable_transitionCallbacks),n.formState!==void 0&&(q=n.formState)),t=cg(e,1,!0,t,n??null,o,l,u,x,j,_,q),t.context=ug(null),n=t.current,o=Ot(),o=Hc(o),l=tn(o),l.callback=null,rn(n,l,o),n=o,t.current.lanes=n,So(t,n),yr(t),e[fa]=t.current,Rd(e),new vs(t)},yl.version="19.1.0",yl}var Ng;function Hv(){if(Ng)return Wd.exports;Ng=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),Wd.exports=Lv(),Wd.exports}var Qv=Hv();const ti=C.createContext();var jl={},Tg;function qv(){if(Tg)return jl;Tg=1,Object.defineProperty(jl,"__esModule",{value:!0}),jl.parse=g,jl.serialize=h;const a=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,c=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,f=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function g(v,A){const S=new f,M=v.length;if(M<2)return S;const T=(A==null?void 0:A.decode)||w;let k=0;do{const N=v.indexOf("=",k);if(N===-1)break;const E=v.indexOf(";",k),z=E===-1?M:E;if(N>z){k=v.lastIndexOf(";",N-1)+1;continue}const K=b(v,k,N),H=m(v,N,K),L=v.slice(K,H);if(S[L]===void 0){let R=b(v,N+1,z),D=m(v,z,R);const I=T(v.slice(R,D));S[L]=I}k=z+1}while(k<M);return S}function b(v,A,S){do{const M=v.charCodeAt(A);if(M!==32&&M!==9)return A}while(++A<S);return S}function m(v,A,S){for(;A>S;){const M=v.charCodeAt(--A);if(M!==32&&M!==9)return A+1}return S}function h(v,A,S){const M=(S==null?void 0:S.encode)||encodeURIComponent;if(!a.test(v))throw new TypeError(`argument name is invalid: ${v}`);const T=M(A);if(!s.test(T))throw new TypeError(`argument val is invalid: ${A}`);let k=v+"="+T;if(!S)return k;if(S.maxAge!==void 0){if(!Number.isInteger(S.maxAge))throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);k+="; Max-Age="+S.maxAge}if(S.domain){if(!c.test(S.domain))throw new TypeError(`option domain is invalid: ${S.domain}`);k+="; Domain="+S.domain}if(S.path){if(!i.test(S.path))throw new TypeError(`option path is invalid: ${S.path}`);k+="; Path="+S.path}if(S.expires){if(!y(S.expires)||!Number.isFinite(S.expires.valueOf()))throw new TypeError(`option expires is invalid: ${S.expires}`);k+="; Expires="+S.expires.toUTCString()}if(S.httpOnly&&(k+="; HttpOnly"),S.secure&&(k+="; Secure"),S.partitioned&&(k+="; Partitioned"),S.priority)switch(typeof S.priority=="string"?S.priority.toLowerCase():void 0){case"low":k+="; Priority=Low";break;case"medium":k+="; Priority=Medium";break;case"high":k+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${S.priority}`)}if(S.sameSite)switch(typeof S.sameSite=="string"?S.sameSite.toLowerCase():S.sameSite){case!0:case"strict":k+="; SameSite=Strict";break;case"lax":k+="; SameSite=Lax";break;case"none":k+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${S.sameSite}`)}return k}function w(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function y(v){return d.call(v)==="[object Date]"}return jl}qv();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var _g="popstate";function Yv(a={}){function s(i,d){let{pathname:f,search:g,hash:b}=i.location;return $f("",{pathname:f,search:g,hash:b},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function c(i,d){return typeof d=="string"?d:Xl(d)}return Fv(s,c,null,a)}function Ke(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}function fr(a,s){if(!a){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function Pv(){return Math.random().toString(36).substring(2,10)}function Rg(a,s){return{usr:a.state,key:a.key,idx:s}}function $f(a,s,c=null,i){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof s=="string"?go(s):s,state:c,key:s&&s.key||i||Pv()}}function Xl({pathname:a="/",search:s="",hash:c=""}){return s&&s!=="?"&&(a+=s.charAt(0)==="?"?s:"?"+s),c&&c!=="#"&&(a+=c.charAt(0)==="#"?c:"#"+c),a}function go(a){let s={};if(a){let c=a.indexOf("#");c>=0&&(s.hash=a.substring(c),a=a.substring(0,c));let i=a.indexOf("?");i>=0&&(s.search=a.substring(i),a=a.substring(0,i)),a&&(s.pathname=a)}return s}function Fv(a,s,c,i={}){let{window:d=document.defaultView,v5Compat:f=!1}=i,g=d.history,b="POP",m=null,h=w();h==null&&(h=0,g.replaceState({...g.state,idx:h},""));function w(){return(g.state||{idx:null}).idx}function y(){b="POP";let T=w(),k=T==null?null:T-h;h=T,m&&m({action:b,location:M.location,delta:k})}function v(T,k){b="PUSH";let N=$f(M.location,T,k);h=w()+1;let E=Rg(N,h),z=M.createHref(N);try{g.pushState(E,"",z)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;d.location.assign(z)}f&&m&&m({action:b,location:M.location,delta:1})}function A(T,k){b="REPLACE";let N=$f(M.location,T,k);h=w();let E=Rg(N,h),z=M.createHref(N);g.replaceState(E,"",z),f&&m&&m({action:b,location:M.location,delta:0})}function S(T){let k=d.location.origin!=="null"?d.location.origin:d.location.href,N=typeof T=="string"?T:Xl(T);return N=N.replace(/ $/,"%20"),Ke(k,`No window.location.(origin|href) available to create URL for href: ${N}`),new URL(N,k)}let M={get action(){return b},get location(){return a(d,g)},listen(T){if(m)throw new Error("A history only accepts one active listener");return d.addEventListener(_g,y),m=T,()=>{d.removeEventListener(_g,y),m=null}},createHref(T){return s(d,T)},createURL:S,encodeLocation(T){let k=S(T);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:v,replace:A,go(T){return g.go(T)}};return M}function F1(a,s,c="/"){return Vv(a,s,c,!1)}function Vv(a,s,c,i){let d=typeof s=="string"?go(s):s,f=Fr(d.pathname||"/",c);if(f==null)return null;let g=V1(a);Gv(g);let b=null;for(let m=0;b==null&&m<g.length;++m){let h=o2(f);b=n2(g[m],h,i)}return b}function V1(a,s=[],c=[],i=""){let d=(f,g,b)=>{let m={relativePath:b===void 0?f.path||"":b,caseSensitive:f.caseSensitive===!0,childrenIndex:g,route:f};m.relativePath.startsWith("/")&&(Ke(m.relativePath.startsWith(i),`Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(i.length));let h=Pr([i,m.relativePath]),w=c.concat(m);f.children&&f.children.length>0&&(Ke(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),V1(f.children,s,w,h)),!(f.path==null&&!f.index)&&s.push({path:h,score:t2(h,f.index),routesMeta:w})};return a.forEach((f,g)=>{var b;if(f.path===""||!((b=f.path)!=null&&b.includes("?")))d(f,g);else for(let m of G1(f.path))d(f,g,m)}),s}function G1(a){let s=a.split("/");if(s.length===0)return[];let[c,...i]=s,d=c.endsWith("?"),f=c.replace(/\?$/,"");if(i.length===0)return d?[f,""]:[f];let g=G1(i.join("/")),b=[];return b.push(...g.map(m=>m===""?f:[f,m].join("/"))),d&&b.push(...g),b.map(m=>a.startsWith("/")&&m===""?"/":m)}function Gv(a){a.sort((s,c)=>s.score!==c.score?c.score-s.score:r2(s.routesMeta.map(i=>i.childrenIndex),c.routesMeta.map(i=>i.childrenIndex)))}var Zv=/^:[\w-]+$/,Xv=3,Iv=2,Jv=1,Wv=10,e2=-2,Dg=a=>a==="*";function t2(a,s){let c=a.split("/"),i=c.length;return c.some(Dg)&&(i+=e2),s&&(i+=Iv),c.filter(d=>!Dg(d)).reduce((d,f)=>d+(Zv.test(f)?Xv:f===""?Jv:Wv),i)}function r2(a,s){return a.length===s.length&&a.slice(0,-1).every((i,d)=>i===s[d])?a[a.length-1]-s[s.length-1]:0}function n2(a,s,c=!1){let{routesMeta:i}=a,d={},f="/",g=[];for(let b=0;b<i.length;++b){let m=i[b],h=b===i.length-1,w=f==="/"?s:s.slice(f.length)||"/",y=fc({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},w),v=m.route;if(!y&&h&&c&&!i[i.length-1].route.index&&(y=fc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},w)),!y)return null;Object.assign(d,y.params),g.push({params:d,pathname:Pr([f,y.pathname]),pathnameBase:c2(Pr([f,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(f=Pr([f,y.pathnameBase]))}return g}function fc(a,s){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[c,i]=a2(a.path,a.caseSensitive,a.end),d=s.match(c);if(!d)return null;let f=d[0],g=f.replace(/(.)\/+$/,"$1"),b=d.slice(1);return{params:i.reduce((h,{paramName:w,isOptional:y},v)=>{if(w==="*"){let S=b[v]||"";g=f.slice(0,f.length-S.length).replace(/(.)\/+$/,"$1")}const A=b[v];return y&&!A?h[w]=void 0:h[w]=(A||"").replace(/%2F/g,"/"),h},{}),pathname:f,pathnameBase:g,pattern:a}}function a2(a,s=!1,c=!0){fr(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let i=[],d="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,b,m)=>(i.push({paramName:b,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return a.endsWith("*")?(i.push({paramName:"*"}),d+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?d+="\\/*$":a!==""&&a!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),i]}function o2(a){try{return a.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return fr(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),a}}function Fr(a,s){if(s==="/")return a;if(!a.toLowerCase().startsWith(s.toLowerCase()))return null;let c=s.endsWith("/")?s.length-1:s.length,i=a.charAt(c);return i&&i!=="/"?null:a.slice(c)||"/"}function l2(a,s="/"){let{pathname:c,search:i="",hash:d=""}=typeof a=="string"?go(a):a;return{pathname:c?c.startsWith("/")?c:i2(c,s):s,search:u2(i),hash:d2(d)}}function i2(a,s){let c=s.replace(/\/+$/,"").split("/");return a.split("/").forEach(d=>{d===".."?c.length>1&&c.pop():d!=="."&&c.push(d)}),c.length>1?c.join("/"):"/"}function nf(a,s,c,i){return`Cannot include a '${a}' character in a manually specified \`to.${s}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function s2(a){return a.filter((s,c)=>c===0||s.route.path&&s.route.path.length>0)}function ah(a){let s=s2(a);return s.map((c,i)=>i===s.length-1?c.pathname:c.pathnameBase)}function oh(a,s,c,i=!1){let d;typeof a=="string"?d=go(a):(d={...a},Ke(!d.pathname||!d.pathname.includes("?"),nf("?","pathname","search",d)),Ke(!d.pathname||!d.pathname.includes("#"),nf("#","pathname","hash",d)),Ke(!d.search||!d.search.includes("#"),nf("#","search","hash",d)));let f=a===""||d.pathname==="",g=f?"/":d.pathname,b;if(g==null)b=c;else{let y=s.length-1;if(!i&&g.startsWith("..")){let v=g.split("/");for(;v[0]==="..";)v.shift(),y-=1;d.pathname=v.join("/")}b=y>=0?s[y]:"/"}let m=l2(d,b),h=g&&g!=="/"&&g.endsWith("/"),w=(f||g===".")&&c.endsWith("/");return!m.pathname.endsWith("/")&&(h||w)&&(m.pathname+="/"),m}var Pr=a=>a.join("/").replace(/\/\/+/g,"/"),c2=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),u2=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,d2=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function f2(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var Z1=["POST","PUT","PATCH","DELETE"];new Set(Z1);var h2=["GET",...Z1];new Set(h2);var bo=C.createContext(null);bo.displayName="DataRouter";var wc=C.createContext(null);wc.displayName="DataRouterState";var X1=C.createContext({isTransitioning:!1});X1.displayName="ViewTransition";var m2=C.createContext(new Map);m2.displayName="Fetchers";var p2=C.createContext(null);p2.displayName="Await";var hr=C.createContext(null);hr.displayName="Navigation";var ri=C.createContext(null);ri.displayName="Location";var tr=C.createContext({outlet:null,matches:[],isDataRoute:!1});tr.displayName="Route";var lh=C.createContext(null);lh.displayName="RouteError";function g2(a,{relative:s}={}){Ke(xo(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:i}=C.useContext(hr),{hash:d,pathname:f,search:g}=ni(a,{relative:s}),b=f;return c!=="/"&&(b=f==="/"?c:Pr([c,f])),i.createHref({pathname:b,search:g,hash:d})}function xo(){return C.useContext(ri)!=null}function Vr(){return Ke(xo(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(ri).location}var I1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function J1(a){C.useContext(hr).static||C.useLayoutEffect(a)}function Ct(){let{isDataRoute:a}=C.useContext(tr);return a?_2():b2()}function b2(){Ke(xo(),"useNavigate() may be used only in the context of a <Router> component.");let a=C.useContext(bo),{basename:s,navigator:c}=C.useContext(hr),{matches:i}=C.useContext(tr),{pathname:d}=Vr(),f=JSON.stringify(ah(i)),g=C.useRef(!1);return J1(()=>{g.current=!0}),C.useCallback((m,h={})=>{if(fr(g.current,I1),!g.current)return;if(typeof m=="number"){c.go(m);return}let w=oh(m,JSON.parse(f),d,h.relative==="path");a==null&&s!=="/"&&(w.pathname=w.pathname==="/"?s:Pr([s,w.pathname])),(h.replace?c.replace:c.push)(w,h.state,h)},[s,c,f,d,a])}var x2=C.createContext(null);function v2(a){let s=C.useContext(tr).outlet;return s&&C.createElement(x2.Provider,{value:a},s)}function W1(){let{matches:a}=C.useContext(tr),s=a[a.length-1];return s?s.params:{}}function ni(a,{relative:s}={}){let{matches:c}=C.useContext(tr),{pathname:i}=Vr(),d=JSON.stringify(ah(c));return C.useMemo(()=>oh(a,JSON.parse(d),i,s==="path"),[a,d,i,s])}function y2(a,s){return eb(a,s)}function eb(a,s,c,i){var N;Ke(xo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d,static:f}=C.useContext(hr),{matches:g}=C.useContext(tr),b=g[g.length-1],m=b?b.params:{},h=b?b.pathname:"/",w=b?b.pathnameBase:"/",y=b&&b.route;{let E=y&&y.path||"";tb(h,!y||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let v=Vr(),A;if(s){let E=typeof s=="string"?go(s):s;Ke(w==="/"||((N=E.pathname)==null?void 0:N.startsWith(w)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${w}" but pathname "${E.pathname}" was given in the \`location\` prop.`),A=E}else A=v;let S=A.pathname||"/",M=S;if(w!=="/"){let E=w.replace(/^\//,"").split("/");M="/"+S.replace(/^\//,"").split("/").slice(E.length).join("/")}let T=!f&&c&&c.matches&&c.matches.length>0?c.matches:F1(a,{pathname:M});fr(y||T!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),fr(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=k2(T&&T.map(E=>Object.assign({},E,{params:Object.assign({},m,E.params),pathname:Pr([w,d.encodeLocation?d.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?w:Pr([w,d.encodeLocation?d.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),g,c,i);return s&&k?C.createElement(ri.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},k):k}function j2(){let a=T2(),s=f2(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),c=a instanceof Error?a.stack:null,i="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:i},f={padding:"2px 4px",backgroundColor:i},g=null;return console.error("Error handled by React Router default ErrorBoundary:",a),g=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:f},"ErrorBoundary")," or"," ",C.createElement("code",{style:f},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},s),c?C.createElement("pre",{style:d},c):null,g)}var w2=C.createElement(j2,null),A2=class extends C.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,s){return s.location!==a.location||s.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:s.error,location:s.location,revalidation:a.revalidation||s.revalidation}}componentDidCatch(a,s){console.error("React Router caught the following error during render",a,s)}render(){return this.state.error!==void 0?C.createElement(tr.Provider,{value:this.props.routeContext},C.createElement(lh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function S2({routeContext:a,match:s,children:c}){let i=C.useContext(bo);return i&&i.static&&i.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=s.route.id),C.createElement(tr.Provider,{value:a},c)}function k2(a,s=[],c=null,i=null){if(a==null){if(!c)return null;if(c.errors)a=c.matches;else if(s.length===0&&!c.initialized&&c.matches.length>0)a=c.matches;else return null}let d=a,f=c==null?void 0:c.errors;if(f!=null){let m=d.findIndex(h=>h.route.id&&(f==null?void 0:f[h.route.id])!==void 0);Ke(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,m+1))}let g=!1,b=-1;if(c)for(let m=0;m<d.length;m++){let h=d[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(b=m),h.route.id){let{loaderData:w,errors:y}=c,v=h.route.loader&&!w.hasOwnProperty(h.route.id)&&(!y||y[h.route.id]===void 0);if(h.route.lazy||v){g=!0,b>=0?d=d.slice(0,b+1):d=[d[0]];break}}}return d.reduceRight((m,h,w)=>{let y,v=!1,A=null,S=null;c&&(y=f&&h.route.id?f[h.route.id]:void 0,A=h.route.errorElement||w2,g&&(b<0&&w===0?(tb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,S=null):b===w&&(v=!0,S=h.route.hydrateFallbackElement||null)));let M=s.concat(d.slice(0,w+1)),T=()=>{let k;return y?k=A:v?k=S:h.route.Component?k=C.createElement(h.route.Component,null):h.route.element?k=h.route.element:k=m,C.createElement(S2,{match:h,routeContext:{outlet:m,matches:M,isDataRoute:c!=null},children:k})};return c&&(h.route.ErrorBoundary||h.route.errorElement||w===0)?C.createElement(A2,{location:c.location,revalidation:c.revalidation,component:A,error:y,children:T(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):T()},null)}function ih(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function C2(a){let s=C.useContext(bo);return Ke(s,ih(a)),s}function E2(a){let s=C.useContext(wc);return Ke(s,ih(a)),s}function M2(a){let s=C.useContext(tr);return Ke(s,ih(a)),s}function sh(a){let s=M2(a),c=s.matches[s.matches.length-1];return Ke(c.route.id,`${a} can only be used on routes that contain a unique "id"`),c.route.id}function N2(){return sh("useRouteId")}function T2(){var i;let a=C.useContext(lh),s=E2("useRouteError"),c=sh("useRouteError");return a!==void 0?a:(i=s.errors)==null?void 0:i[c]}function _2(){let{router:a}=C2("useNavigate"),s=sh("useNavigate"),c=C.useRef(!1);return J1(()=>{c.current=!0}),C.useCallback(async(d,f={})=>{fr(c.current,I1),c.current&&(typeof d=="number"?a.navigate(d):await a.navigate(d,{fromRouteId:s,...f}))},[a,s])}var zg={};function tb(a,s,c){!s&&!zg[a]&&(zg[a]=!0,fr(!1,c))}C.memo(R2);function R2({routes:a,future:s,state:c}){return eb(a,void 0,c,s)}function D2({to:a,replace:s,state:c,relative:i}){Ke(xo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=C.useContext(hr);fr(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:f}=C.useContext(tr),{pathname:g}=Vr(),b=Ct(),m=oh(a,ah(f),g,i==="path"),h=JSON.stringify(m);return C.useEffect(()=>{b(JSON.parse(h),{replace:s,state:c,relative:i})},[b,h,i,s,c]),null}function z2(a){return v2(a.context)}function Ge(a){Ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function O2({basename:a="/",children:s=null,location:c,navigationType:i="POP",navigator:d,static:f=!1}){Ke(!xo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=a.replace(/^\/*/,"/"),b=C.useMemo(()=>({basename:g,navigator:d,static:f,future:{}}),[g,d,f]);typeof c=="string"&&(c=go(c));let{pathname:m="/",search:h="",hash:w="",state:y=null,key:v="default"}=c,A=C.useMemo(()=>{let S=Fr(m,g);return S==null?null:{location:{pathname:S,search:h,hash:w,state:y,key:v},navigationType:i}},[g,m,h,w,y,v,i]);return fr(A!=null,`<Router basename="${g}"> is not able to match the URL "${m}${h}${w}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:C.createElement(hr.Provider,{value:b},C.createElement(ri.Provider,{children:s,value:A}))}function B2({children:a,location:s}){return y2(Kf(a),s)}function Kf(a,s=[]){let c=[];return C.Children.forEach(a,(i,d)=>{if(!C.isValidElement(i))return;let f=[...s,d];if(i.type===C.Fragment){c.push.apply(c,Kf(i.props.children,f));return}Ke(i.type===Ge,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ke(!i.props.index||!i.props.children,"An index route cannot have child routes.");let g={id:i.props.id||f.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(g.children=Kf(i.props.children,f)),c.push(g)}),c}var nc="get",ac="application/x-www-form-urlencoded";function Ac(a){return a!=null&&typeof a.tagName=="string"}function $2(a){return Ac(a)&&a.tagName.toLowerCase()==="button"}function K2(a){return Ac(a)&&a.tagName.toLowerCase()==="form"}function U2(a){return Ac(a)&&a.tagName.toLowerCase()==="input"}function L2(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function H2(a,s){return a.button===0&&(!s||s==="_self")&&!L2(a)}var js=null;function Q2(){if(js===null)try{new FormData(document.createElement("form"),0),js=!1}catch{js=!0}return js}var q2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function af(a){return a!=null&&!q2.has(a)?(fr(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ac}"`),null):a}function Y2(a,s){let c,i,d,f,g;if(K2(a)){let b=a.getAttribute("action");i=b?Fr(b,s):null,c=a.getAttribute("method")||nc,d=af(a.getAttribute("enctype"))||ac,f=new FormData(a)}else if($2(a)||U2(a)&&(a.type==="submit"||a.type==="image")){let b=a.form;if(b==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||b.getAttribute("action");if(i=m?Fr(m,s):null,c=a.getAttribute("formmethod")||b.getAttribute("method")||nc,d=af(a.getAttribute("formenctype"))||af(b.getAttribute("enctype"))||ac,f=new FormData(b,a),!Q2()){let{name:h,type:w,value:y}=a;if(w==="image"){let v=h?`${h}.`:"";f.append(`${v}x`,"0"),f.append(`${v}y`,"0")}else h&&f.append(h,y)}}else{if(Ac(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=nc,i=null,d=ac,g=a}return f&&d==="text/plain"&&(g=f,f=void 0),{action:i,method:c.toLowerCase(),encType:d,formData:f,body:g}}function ch(a,s){if(a===!1||a===null||typeof a>"u")throw new Error(s)}async function P2(a,s){if(a.id in s)return s[a.id];try{let c=await import(a.module);return s[a.id]=c,c}catch(c){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function F2(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function V2(a,s,c){let i=await Promise.all(a.map(async d=>{let f=s.routes[d.route.id];if(f){let g=await P2(f,c);return g.links?g.links():[]}return[]}));return I2(i.flat(1).filter(F2).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Og(a,s,c,i,d,f){let g=(m,h)=>c[h]?m.route.id!==c[h].route.id:!0,b=(m,h)=>{var w;return c[h].pathname!==m.pathname||((w=c[h].route.path)==null?void 0:w.endsWith("*"))&&c[h].params["*"]!==m.params["*"]};return f==="assets"?s.filter((m,h)=>g(m,h)||b(m,h)):f==="data"?s.filter((m,h)=>{var y;let w=i.routes[m.route.id];if(!w||!w.hasLoader)return!1;if(g(m,h)||b(m,h))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((y=c[0])==null?void 0:y.params)||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function G2(a,s,{includeHydrateFallback:c}={}){return Z2(a.map(i=>{let d=s.routes[i.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),c&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function Z2(a){return[...new Set(a)]}function X2(a){let s={},c=Object.keys(a).sort();for(let i of c)s[i]=a[i];return s}function I2(a,s){let c=new Set;return new Set(s),a.reduce((i,d)=>{let f=JSON.stringify(X2(d));return c.has(f)||(c.add(f),i.push({key:f,link:d})),i},[])}function J2(a,s){let c=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return c.pathname==="/"?c.pathname="_root.data":s&&Fr(c.pathname,s)==="/"?c.pathname=`${s.replace(/\/$/,"")}/_root.data`:c.pathname=`${c.pathname.replace(/\/$/,"")}.data`,c}function rb(){let a=C.useContext(bo);return ch(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function W2(){let a=C.useContext(wc);return ch(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var uh=C.createContext(void 0);uh.displayName="FrameworkContext";function nb(){let a=C.useContext(uh);return ch(a,"You must render this element inside a <HydratedRouter> element"),a}function ey(a,s){let c=C.useContext(uh),[i,d]=C.useState(!1),[f,g]=C.useState(!1),{onFocus:b,onBlur:m,onMouseEnter:h,onMouseLeave:w,onTouchStart:y}=s,v=C.useRef(null);C.useEffect(()=>{if(a==="render"&&g(!0),a==="viewport"){let M=k=>{k.forEach(N=>{g(N.isIntersecting)})},T=new IntersectionObserver(M,{threshold:.5});return v.current&&T.observe(v.current),()=>{T.disconnect()}}},[a]),C.useEffect(()=>{if(i){let M=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(M)}}},[i]);let A=()=>{d(!0)},S=()=>{d(!1),g(!1)};return c?a!=="intent"?[f,v,{}]:[f,v,{onFocus:wl(b,A),onBlur:wl(m,S),onMouseEnter:wl(h,A),onMouseLeave:wl(w,S),onTouchStart:wl(y,A)}]:[!1,v,{}]}function wl(a,s){return c=>{a&&a(c),c.defaultPrevented||s(c)}}function ty({page:a,...s}){let{router:c}=rb(),i=C.useMemo(()=>F1(c.routes,a,c.basename),[c.routes,a,c.basename]);return i?C.createElement(ny,{page:a,matches:i,...s}):null}function ry(a){let{manifest:s,routeModules:c}=nb(),[i,d]=C.useState([]);return C.useEffect(()=>{let f=!1;return V2(a,s,c).then(g=>{f||d(g)}),()=>{f=!0}},[a,s,c]),i}function ny({page:a,matches:s,...c}){let i=Vr(),{manifest:d,routeModules:f}=nb(),{basename:g}=rb(),{loaderData:b,matches:m}=W2(),h=C.useMemo(()=>Og(a,s,m,d,i,"data"),[a,s,m,d,i]),w=C.useMemo(()=>Og(a,s,m,d,i,"assets"),[a,s,m,d,i]),y=C.useMemo(()=>{if(a===i.pathname+i.search+i.hash)return[];let S=new Set,M=!1;if(s.forEach(k=>{var E;let N=d.routes[k.route.id];!N||!N.hasLoader||(!h.some(z=>z.route.id===k.route.id)&&k.route.id in b&&((E=f[k.route.id])!=null&&E.shouldRevalidate)||N.hasClientLoader?M=!0:S.add(k.route.id))}),S.size===0)return[];let T=J2(a,g);return M&&S.size>0&&T.searchParams.set("_routes",s.filter(k=>S.has(k.route.id)).map(k=>k.route.id).join(",")),[T.pathname+T.search]},[g,b,i,d,h,s,a,f]),v=C.useMemo(()=>G2(w,d),[w,d]),A=ry(w);return C.createElement(C.Fragment,null,y.map(S=>C.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...c})),v.map(S=>C.createElement("link",{key:S,rel:"modulepreload",href:S,...c})),A.map(({key:S,link:M})=>C.createElement("link",{key:S,...M})))}function ay(...a){return s=>{a.forEach(c=>{typeof c=="function"?c(s):c!=null&&(c.current=s)})}}var ab=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ab&&(window.__reactRouterVersion="7.5.0")}catch{}function oy({basename:a,children:s,window:c}){let i=C.useRef();i.current==null&&(i.current=Yv({window:c,v5Compat:!0}));let d=i.current,[f,g]=C.useState({action:d.action,location:d.location}),b=C.useCallback(m=>{C.startTransition(()=>g(m))},[g]);return C.useLayoutEffect(()=>d.listen(b),[d,b]),C.createElement(O2,{basename:a,children:s,location:f.location,navigationType:f.action,navigator:d})}var ob=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ye=C.forwardRef(function({onClick:s,discover:c="render",prefetch:i="none",relative:d,reloadDocument:f,replace:g,state:b,target:m,to:h,preventScrollReset:w,viewTransition:y,...v},A){let{basename:S}=C.useContext(hr),M=typeof h=="string"&&ob.test(h),T,k=!1;if(typeof h=="string"&&M&&(T=h,ab))try{let D=new URL(window.location.href),I=h.startsWith("//")?new URL(D.protocol+h):new URL(h),$=Fr(I.pathname,S);I.origin===D.origin&&$!=null?h=$+I.search+I.hash:k=!0}catch{fr(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=g2(h,{relative:d}),[E,z,K]=ey(i,v),H=cy(h,{replace:g,state:b,target:m,preventScrollReset:w,relative:d,viewTransition:y});function L(D){s&&s(D),D.defaultPrevented||H(D)}let R=C.createElement("a",{...v,...K,href:T||N,onClick:k||f?s:L,ref:ay(A,z),target:m,"data-discover":!M&&c==="render"?"true":void 0});return E&&!M?C.createElement(C.Fragment,null,R,C.createElement(ty,{page:N})):R});ye.displayName="Link";var ly=C.forwardRef(function({"aria-current":s="page",caseSensitive:c=!1,className:i="",end:d=!1,style:f,to:g,viewTransition:b,children:m,...h},w){let y=ni(g,{relative:h.relative}),v=Vr(),A=C.useContext(wc),{navigator:S,basename:M}=C.useContext(hr),T=A!=null&&my(y)&&b===!0,k=S.encodeLocation?S.encodeLocation(y).pathname:y.pathname,N=v.pathname,E=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;c||(N=N.toLowerCase(),E=E?E.toLowerCase():null,k=k.toLowerCase()),E&&M&&(E=Fr(E,M)||E);const z=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let K=N===k||!d&&N.startsWith(k)&&N.charAt(z)==="/",H=E!=null&&(E===k||!d&&E.startsWith(k)&&E.charAt(k.length)==="/"),L={isActive:K,isPending:H,isTransitioning:T},R=K?s:void 0,D;typeof i=="function"?D=i(L):D=[i,K?"active":null,H?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let I=typeof f=="function"?f(L):f;return C.createElement(ye,{...h,"aria-current":R,className:D,ref:w,style:I,to:g,viewTransition:b},typeof m=="function"?m(L):m)});ly.displayName="NavLink";var iy=C.forwardRef(({discover:a="render",fetcherKey:s,navigate:c,reloadDocument:i,replace:d,state:f,method:g=nc,action:b,onSubmit:m,relative:h,preventScrollReset:w,viewTransition:y,...v},A)=>{let S=fy(),M=hy(b,{relative:h}),T=g.toLowerCase()==="get"?"get":"post",k=typeof b=="string"&&ob.test(b),N=E=>{if(m&&m(E),E.defaultPrevented)return;E.preventDefault();let z=E.nativeEvent.submitter,K=(z==null?void 0:z.getAttribute("formmethod"))||g;S(z||E.currentTarget,{fetcherKey:s,method:K,navigate:c,replace:d,state:f,relative:h,preventScrollReset:w,viewTransition:y})};return C.createElement("form",{ref:A,method:T,action:M,onSubmit:i?m:N,...v,"data-discover":!k&&a==="render"?"true":void 0})});iy.displayName="Form";function sy(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lb(a){let s=C.useContext(bo);return Ke(s,sy(a)),s}function cy(a,{target:s,replace:c,state:i,preventScrollReset:d,relative:f,viewTransition:g}={}){let b=Ct(),m=Vr(),h=ni(a,{relative:f});return C.useCallback(w=>{if(H2(w,s)){w.preventDefault();let y=c!==void 0?c:Xl(m)===Xl(h);b(a,{replace:y,state:i,preventScrollReset:d,relative:f,viewTransition:g})}},[m,b,h,c,i,s,a,d,f,g])}var uy=0,dy=()=>`__${String(++uy)}__`;function fy(){let{router:a}=lb("useSubmit"),{basename:s}=C.useContext(hr),c=N2();return C.useCallback(async(i,d={})=>{let{action:f,method:g,encType:b,formData:m,body:h}=Y2(i,s);if(d.navigate===!1){let w=d.fetcherKey||dy();await a.fetch(w,c,d.action||f,{preventScrollReset:d.preventScrollReset,formData:m,body:h,formMethod:d.method||g,formEncType:d.encType||b,flushSync:d.flushSync})}else await a.navigate(d.action||f,{preventScrollReset:d.preventScrollReset,formData:m,body:h,formMethod:d.method||g,formEncType:d.encType||b,replace:d.replace,state:d.state,fromRouteId:c,flushSync:d.flushSync,viewTransition:d.viewTransition})},[a,s,c])}function hy(a,{relative:s}={}){let{basename:c}=C.useContext(hr),i=C.useContext(tr);Ke(i,"useFormAction must be used inside a RouteContext");let[d]=i.matches.slice(-1),f={...ni(a||".",{relative:s})},g=Vr();if(a==null){f.search=g.search;let b=new URLSearchParams(f.search),m=b.getAll("index");if(m.some(w=>w==="")){b.delete("index"),m.filter(y=>y).forEach(y=>b.append("index",y));let w=b.toString();f.search=w?`?${w}`:""}}return(!a||a===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(f.pathname=f.pathname==="/"?c:Pr([c,f.pathname])),Xl(f)}function my(a,s={}){let c=C.useContext(X1);Ke(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=lb("useViewTransitionState"),d=ni(a,{relative:s.relative});if(!c.isTransitioning)return!1;let f=Fr(c.currentLocation.pathname,i)||c.currentLocation.pathname,g=Fr(c.nextLocation.pathname,i)||c.nextLocation.pathname;return fc(d.pathname,g)!=null||fc(d.pathname,f)!=null}new TextEncoder;var py=P1();const Pl=nh(py),ib=C.createContext(void 0),gy=({children:a})=>{const[s,c]=C.useState(null);C.useEffect(()=>{const g=localStorage.getItem("user");g&&c(JSON.parse(g))},[]);const i=g=>{c(g),localStorage.setItem("user",JSON.stringify(g))},d=()=>{c(null),localStorage.removeItem("user")},f=s!==null;return r.jsx(ib.Provider,{value:{user:s,login:i,logout:d,isAuthenticated:f},children:a})},dh=()=>{const a=C.useContext(ib);if(a===void 0)throw new Error("useAuth must be used within an AuthProvider");return a},by="/assets/logo-TCVqfNPV.png";var pt=function(){return pt=Object.assign||function(s){for(var c,i=1,d=arguments.length;i<d;i++){c=arguments[i];for(var f in c)Object.prototype.hasOwnProperty.call(c,f)&&(s[f]=c[f])}return s},pt.apply(this,arguments)};function Il(a,s,c){if(c||arguments.length===2)for(var i=0,d=s.length,f;i<d;i++)(f||!(i in s))&&(f||(f=Array.prototype.slice.call(s,0,i)),f[i]=s[i]);return a.concat(f||Array.prototype.slice.call(s))}var Be="-ms-",Gl="-moz-",Me="-webkit-",sb="comm",Sc="rule",fh="decl",xy="@import",vy="@namespace",cb="@keyframes",yy="@layer",ub=Math.abs,hh=String.fromCharCode,Uf=Object.assign;function jy(a,s){return Je(a,0)^45?(((s<<2^Je(a,0))<<2^Je(a,1))<<2^Je(a,2))<<2^Je(a,3):0}function db(a){return a.trim()}function qr(a,s){return(a=s.exec(a))?a[0]:a}function ge(a,s,c){return a.replace(s,c)}function oc(a,s,c){return a.indexOf(s,c)}function Je(a,s){return a.charCodeAt(s)|0}function ca(a,s,c){return a.slice(s,c)}function sr(a){return a.length}function fb(a){return a.length}function Fl(a,s){return s.push(a),a}function wy(a,s){return a.map(s).join("")}function Bg(a,s){return a.filter(function(c){return!qr(c,s)})}var kc=1,so=1,hb=0,er=0,Ze=0,vo="";function Cc(a,s,c,i,d,f,g,b){return{value:a,root:s,parent:c,type:i,props:d,children:f,line:kc,column:so,length:g,return:"",siblings:b}}function kn(a,s){return Uf(Cc("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},s)}function Ia(a){for(;a.root;)a=kn(a.root,{children:[a]});Fl(a,a.siblings)}function Ay(){return Ze}function Sy(){return Ze=er>0?Je(vo,--er):0,so--,Ze===10&&(so=1,kc--),Ze}function ur(){return Ze=er<hb?Je(vo,er++):0,so++,Ze===10&&(so=1,kc++),Ze}function Mn(){return Je(vo,er)}function lc(){return er}function Ec(a,s){return ca(vo,a,s)}function Jl(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ky(a){return kc=so=1,hb=sr(vo=a),er=0,[]}function Cy(a){return vo="",a}function of(a){return db(Ec(er-1,Lf(a===91?a+2:a===40?a+1:a)))}function Ey(a){for(;(Ze=Mn())&&Ze<33;)ur();return Jl(a)>2||Jl(Ze)>3?"":" "}function My(a,s){for(;--s&&ur()&&!(Ze<48||Ze>102||Ze>57&&Ze<65||Ze>70&&Ze<97););return Ec(a,lc()+(s<6&&Mn()==32&&ur()==32))}function Lf(a){for(;ur();)switch(Ze){case a:return er;case 34:case 39:a!==34&&a!==39&&Lf(Ze);break;case 40:a===41&&Lf(a);break;case 92:ur();break}return er}function Ny(a,s){for(;ur()&&a+Ze!==57;)if(a+Ze===84&&Mn()===47)break;return"/*"+Ec(s,er-1)+"*"+hh(a===47?a:ur())}function Ty(a){for(;!Jl(Mn());)ur();return Ec(a,er)}function _y(a){return Cy(ic("",null,null,null,[""],a=ky(a),0,[0],a))}function ic(a,s,c,i,d,f,g,b,m){for(var h=0,w=0,y=g,v=0,A=0,S=0,M=1,T=1,k=1,N=0,E="",z=d,K=f,H=i,L=E;T;)switch(S=N,N=ur()){case 40:if(S!=108&&Je(L,y-1)==58){oc(L+=ge(of(N),"&","&\f"),"&\f",ub(h?b[h-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:L+=of(N);break;case 9:case 10:case 13:case 32:L+=Ey(S);break;case 92:L+=My(lc()-1,7);continue;case 47:switch(Mn()){case 42:case 47:Fl(Ry(Ny(ur(),lc()),s,c,m),m),(Jl(S||1)==5||Jl(Mn()||1)==5)&&sr(L)&&ca(L,-1,void 0)!==" "&&(L+=" ");break;default:L+="/"}break;case 123*M:b[h++]=sr(L)*k;case 125*M:case 59:case 0:switch(N){case 0:case 125:T=0;case 59+w:k==-1&&(L=ge(L,/\f/g,"")),A>0&&(sr(L)-y||M===0&&S===47)&&Fl(A>32?Kg(L+";",i,c,y-1,m):Kg(ge(L," ","")+";",i,c,y-2,m),m);break;case 59:L+=";";default:if(Fl(H=$g(L,s,c,h,w,d,b,E,z=[],K=[],y,f),f),N===123)if(w===0)ic(L,s,H,H,z,f,y,b,K);else{switch(v){case 99:if(Je(L,3)===110)break;case 108:if(Je(L,2)===97)break;default:w=0;case 100:case 109:case 115:}w?ic(a,H,H,i&&Fl($g(a,H,H,0,0,d,b,E,d,z=[],y,K),K),d,K,y,b,i?z:K):ic(L,H,H,H,[""],K,0,b,K)}}h=w=A=0,M=k=1,E=L="",y=g;break;case 58:y=1+sr(L),A=S;default:if(M<1){if(N==123)--M;else if(N==125&&M++==0&&Sy()==125)continue}switch(L+=hh(N),N*M){case 38:k=w>0?1:(L+="\f",-1);break;case 44:b[h++]=(sr(L)-1)*k,k=1;break;case 64:Mn()===45&&(L+=of(ur())),v=Mn(),w=y=sr(E=L+=Ty(lc())),N++;break;case 45:S===45&&sr(L)==2&&(M=0)}}return f}function $g(a,s,c,i,d,f,g,b,m,h,w,y){for(var v=d-1,A=d===0?f:[""],S=fb(A),M=0,T=0,k=0;M<i;++M)for(var N=0,E=ca(a,v+1,v=ub(T=g[M])),z=a;N<S;++N)(z=db(T>0?A[N]+" "+E:ge(E,/&\f/g,A[N])))&&(m[k++]=z);return Cc(a,s,c,d===0?Sc:b,m,h,w,y)}function Ry(a,s,c,i){return Cc(a,s,c,sb,hh(Ay()),ca(a,2,-2),0,i)}function Kg(a,s,c,i,d){return Cc(a,s,c,fh,ca(a,0,i),ca(a,i+1,-1),i,d)}function mb(a,s,c){switch(jy(a,s)){case 5103:return Me+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Me+a+a;case 4855:return Me+a.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+a;case 4789:return Gl+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+a+Gl+a+Be+a+a;case 5936:switch(Je(a,s+11)){case 114:return Me+a+Be+ge(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return Me+a+Be+ge(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return Me+a+Be+ge(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return Me+a+Be+a+a;case 6165:return Me+a+Be+"flex-"+a+a;case 5187:return Me+a+ge(a,/(\w+).+(:[^]+)/,Me+"box-$1$2"+Be+"flex-$1$2")+a;case 5443:return Me+a+Be+"flex-item-"+ge(a,/flex-|-self/g,"")+(qr(a,/flex-|baseline/)?"":Be+"grid-row-"+ge(a,/flex-|-self/g,""))+a;case 4675:return Me+a+Be+"flex-line-pack"+ge(a,/align-content|flex-|-self/g,"")+a;case 5548:return Me+a+Be+ge(a,"shrink","negative")+a;case 5292:return Me+a+Be+ge(a,"basis","preferred-size")+a;case 6060:return Me+"box-"+ge(a,"-grow","")+Me+a+Be+ge(a,"grow","positive")+a;case 4554:return Me+ge(a,/([^-])(transform)/g,"$1"+Me+"$2")+a;case 6187:return ge(ge(ge(a,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),a,"")+a;case 5495:case 3959:return ge(a,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return ge(ge(a,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+Be+"flex-pack:$3"),/space-between/,"justify")+Me+a+a;case 4200:if(!qr(a,/flex-|baseline/))return Be+"grid-column-align"+ca(a,s)+a;break;case 2592:case 3360:return Be+ge(a,"template-","")+a;case 4384:case 3616:return c&&c.some(function(i,d){return s=d,qr(i.props,/grid-\w+-end/)})?~oc(a+(c=c[s].value),"span",0)?a:Be+ge(a,"-start","")+a+Be+"grid-row-span:"+(~oc(c,"span",0)?qr(c,/\d+/):+qr(c,/\d+/)-+qr(a,/\d+/))+";":Be+ge(a,"-start","")+a;case 4896:case 4128:return c&&c.some(function(i){return qr(i.props,/grid-\w+-start/)})?a:Be+ge(ge(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return ge(a,/(.+)-inline(.+)/,Me+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sr(a)-1-s>6)switch(Je(a,s+1)){case 109:if(Je(a,s+4)!==45)break;case 102:return ge(a,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+Gl+(Je(a,s+3)==108?"$3":"$2-$3"))+a;case 115:return~oc(a,"stretch",0)?mb(ge(a,"stretch","fill-available"),s,c)+a:a}break;case 5152:case 5920:return ge(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,d,f,g,b,m,h){return Be+d+":"+f+h+(g?Be+d+"-span:"+(b?m:+m-+f)+h:"")+a});case 4949:if(Je(a,s+6)===121)return ge(a,":",":"+Me)+a;break;case 6444:switch(Je(a,Je(a,14)===45?18:11)){case 120:return ge(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Me+(Je(a,14)===45?"inline-":"")+"box$3$1"+Me+"$2$3$1"+Be+"$2box$3")+a;case 100:return ge(a,":",":"+Be)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ge(a,"scroll-","scroll-snap-")+a}return a}function hc(a,s){for(var c="",i=0;i<a.length;i++)c+=s(a[i],i,a,s)||"";return c}function Dy(a,s,c,i){switch(a.type){case yy:if(a.children.length)break;case xy:case vy:case fh:return a.return=a.return||a.value;case sb:return"";case cb:return a.return=a.value+"{"+hc(a.children,i)+"}";case Sc:if(!sr(a.value=a.props.join(",")))return""}return sr(c=hc(a.children,i))?a.return=a.value+"{"+c+"}":""}function zy(a){var s=fb(a);return function(c,i,d,f){for(var g="",b=0;b<s;b++)g+=a[b](c,i,d,f)||"";return g}}function Oy(a){return function(s){s.root||(s=s.return)&&a(s)}}function By(a,s,c,i){if(a.length>-1&&!a.return)switch(a.type){case fh:a.return=mb(a.value,a.length,c);return;case cb:return hc([kn(a,{value:ge(a.value,"@","@"+Me)})],i);case Sc:if(a.length)return wy(c=a.props,function(d){switch(qr(d,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ia(kn(a,{props:[ge(d,/:(read-\w+)/,":"+Gl+"$1")]})),Ia(kn(a,{props:[d]})),Uf(a,{props:Bg(c,i)});break;case"::placeholder":Ia(kn(a,{props:[ge(d,/:(plac\w+)/,":"+Me+"input-$1")]})),Ia(kn(a,{props:[ge(d,/:(plac\w+)/,":"+Gl+"$1")]})),Ia(kn(a,{props:[ge(d,/:(plac\w+)/,Be+"input-$1")]})),Ia(kn(a,{props:[d]})),Uf(a,{props:Bg(c,i)});break}return""})}}var $y={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Kt={},co=typeof process<"u"&&Kt!==void 0&&(Kt.REACT_APP_SC_ATTR||Kt.SC_ATTR)||"data-styled",pb="active",gb="data-styled-version",Mc="6.3.9",mh=`/*!sc*/
`,Zl=typeof window<"u"&&typeof document<"u",wr=Le.createContext===void 0,Ky=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Kt!==void 0&&Kt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Kt.REACT_APP_SC_DISABLE_SPEEDY!==""?Kt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Kt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Kt!==void 0&&Kt.SC_DISABLE_SPEEDY!==void 0&&Kt.SC_DISABLE_SPEEDY!==""&&Kt.SC_DISABLE_SPEEDY!=="false"&&Kt.SC_DISABLE_SPEEDY),Uy={},ph=Object.freeze([]),uo=Object.freeze({});function bb(a,s,c){return c===void 0&&(c=uo),a.theme!==c.theme&&a.theme||s||c.theme}var xb=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Ly=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Hy=/(^-|-$)/g;function Ug(a){return a.replace(Ly,"-").replace(Hy,"")}var Qy=/(a)(d)/gi,Lg=function(a){return String.fromCharCode(a+(a>25?39:97))};function Hf(a){var s,c="";for(s=Math.abs(a);s>52;s=s/52|0)c=Lg(s%52)+c;return(Lg(s%52)+c).replace(Qy,"$1-$2")}var lf,oa=function(a,s){for(var c=s.length;c;)a=33*a^s.charCodeAt(--c);return a},vb=function(a){return oa(5381,a)};function yb(a){return Hf(vb(a)>>>0)}function qy(a){return a.displayName||a.name||"Component"}function sf(a){return typeof a=="string"&&!0}var jb=typeof Symbol=="function"&&Symbol.for,wb=jb?Symbol.for("react.memo"):60115,Yy=jb?Symbol.for("react.forward_ref"):60112,Py={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ab={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vy=((lf={})[Yy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},lf[wb]=Ab,lf);function Hg(a){return("type"in(s=a)&&s.type.$$typeof)===wb?Ab:"$$typeof"in a?Vy[a.$$typeof]:Py;var s}var Gy=Object.defineProperty,Zy=Object.getOwnPropertyNames,Qg=Object.getOwnPropertySymbols,Xy=Object.getOwnPropertyDescriptor,Iy=Object.getPrototypeOf,qg=Object.prototype;function Sb(a,s,c){if(typeof s!="string"){if(qg){var i=Iy(s);i&&i!==qg&&Sb(a,i,c)}var d=Zy(s);Qg&&(d=d.concat(Qg(s)));for(var f=Hg(a),g=Hg(s),b=0;b<d.length;++b){var m=d[b];if(!(m in Fy||c&&c[m]||g&&m in g||f&&m in f)){var h=Xy(s,m);try{Gy(a,m,h)}catch{}}}}return a}function fo(a){return typeof a=="function"}function gh(a){return typeof a=="object"&&"styledComponentId"in a}function sa(a,s){return a&&s?"".concat(a," ").concat(s):a||s||""}function Qf(a,s){return a.join("")}function Wl(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function qf(a,s,c){if(c===void 0&&(c=!1),!c&&!Wl(a)&&!Array.isArray(a))return s;if(Array.isArray(s))for(var i=0;i<s.length;i++)a[i]=qf(a[i],s[i]);else if(Wl(s))for(var i in s)a[i]=qf(a[i],s[i]);return a}function bh(a,s){Object.defineProperty(a,"toString",{value:s})}function ai(a){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(s.length>0?" Args: ".concat(s.join(", ")):""))}var Jy=function(){function a(s){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=s,this._cGroup=0,this._cIndex=0}return a.prototype.indexOfGroup=function(s){if(s===this._cGroup)return this._cIndex;var c=this._cIndex;if(s>this._cGroup)for(var i=this._cGroup;i<s;i++)c+=this.groupSizes[i];else for(i=this._cGroup-1;i>=s;i--)c-=this.groupSizes[i];return this._cGroup=s,this._cIndex=c,c},a.prototype.insertRules=function(s,c){if(s>=this.groupSizes.length){for(var i=this.groupSizes,d=i.length,f=d;s>=f;)if((f<<=1)<0)throw ai(16,"".concat(s));this.groupSizes=new Uint32Array(f),this.groupSizes.set(i),this.length=f;for(var g=d;g<f;g++)this.groupSizes[g]=0}for(var b=this.indexOfGroup(s+1),m=0,h=(g=0,c.length);g<h;g++)this.tag.insertRule(b,c[g])&&(this.groupSizes[s]++,b++,m++);m>0&&this._cGroup>s&&(this._cIndex+=m)},a.prototype.clearGroup=function(s){if(s<this.length){var c=this.groupSizes[s],i=this.indexOfGroup(s),d=i+c;this.groupSizes[s]=0;for(var f=i;f<d;f++)this.tag.deleteRule(i);c>0&&this._cGroup>s&&(this._cIndex-=c)}},a.prototype.getGroup=function(s){var c="";if(s>=this.length||this.groupSizes[s]===0)return c;for(var i=this.groupSizes[s],d=this.indexOfGroup(s),f=d+i,g=d;g<f;g++)c+=this.tag.getRule(g)+mh;return c},a}(),sc=new Map,mc=new Map,cc=1,oo=function(a){if(sc.has(a))return sc.get(a);for(;mc.has(cc);)cc++;var s=cc++;return sc.set(a,s),mc.set(s,a),s},Wy=function(a,s){cc=s+1,sc.set(a,s),mc.set(s,a)},e3="style[".concat(co,"][").concat(gb,'="').concat(Mc,'"]'),t3=new RegExp("^".concat(co,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Yg=function(a){return typeof ShadowRoot<"u"&&a instanceof ShadowRoot||"host"in a&&a.nodeType===11},Yf=function(a){if(!a)return document;if(Yg(a))return a;if("getRootNode"in a){var s=a.getRootNode();if(Yg(s))return s}return document},r3=function(a,s,c){for(var i,d=c.split(","),f=0,g=d.length;f<g;f++)(i=d[f])&&a.registerName(s,i)},n3=function(a,s){for(var c,i=((c=s.textContent)!==null&&c!==void 0?c:"").split(mh),d=[],f=0,g=i.length;f<g;f++){var b=i[f].trim();if(b){var m=b.match(t3);if(m){var h=0|parseInt(m[1],10),w=m[2];h!==0&&(Wy(w,h),r3(a,w,m[3]),a.getTag().insertRules(h,d)),d.length=0}else d.push(b)}}},cf=function(a){for(var s=Yf(a.options.target).querySelectorAll(e3),c=0,i=s.length;c<i;c++){var d=s[c];d&&d.getAttribute(co)!==pb&&(n3(a,d),d.parentNode&&d.parentNode.removeChild(d))}};function a3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var kb=function(a){var s=document.head,c=a||s,i=document.createElement("style"),d=function(b){var m=Array.from(b.querySelectorAll("style[".concat(co,"]")));return m[m.length-1]}(c),f=d!==void 0?d.nextSibling:null;i.setAttribute(co,pb),i.setAttribute(gb,Mc);var g=a3();return g&&i.setAttribute("nonce",g),c.insertBefore(i,f),i},o3=function(){function a(s){this.element=kb(s),this.element.appendChild(document.createTextNode("")),this.sheet=function(c){var i;if(c.sheet)return c.sheet;for(var d=(i=c.getRootNode().styleSheets)!==null&&i!==void 0?i:document.styleSheets,f=0,g=d.length;f<g;f++){var b=d[f];if(b.ownerNode===c)return b}throw ai(17)}(this.element),this.length=0}return a.prototype.insertRule=function(s,c){try{return this.sheet.insertRule(c,s),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(s){this.sheet.deleteRule(s),this.length--},a.prototype.getRule=function(s){var c=this.sheet.cssRules[s];return c&&c.cssText?c.cssText:""},a}(),l3=function(){function a(s){this.element=kb(s),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(s,c){if(s<=this.length&&s>=0){var i=document.createTextNode(c);return this.element.insertBefore(i,this.nodes[s]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(s){this.element.removeChild(this.nodes[s]),this.length--},a.prototype.getRule=function(s){return s<this.length?this.nodes[s].textContent:""},a}(),i3=function(){function a(s){this.rules=[],this.length=0}return a.prototype.insertRule=function(s,c){return s<=this.length&&(s===this.length?this.rules.push(c):this.rules.splice(s,0,c),this.length++,!0)},a.prototype.deleteRule=function(s){this.rules.splice(s,1),this.length--},a.prototype.getRule=function(s){return s<this.length?this.rules[s]:""},a}(),Pg=Zl,s3={isServer:!Zl,useCSSOMInjection:!Ky},pc=function(){function a(s,c,i){s===void 0&&(s=uo),c===void 0&&(c={});var d=this;this.options=pt(pt({},s3),s),this.gs=c,this.names=new Map(i),this.server=!!s.isServer,!this.server&&Zl&&Pg&&(Pg=!1,cf(this)),bh(this,function(){return function(f){for(var g=f.getTag(),b=g.length,m="",h=function(y){var v=function(k){return mc.get(k)}(y);if(v===void 0)return"continue";var A=f.names.get(v);if(A===void 0||!A.size)return"continue";var S=g.getGroup(y);if(S.length===0)return"continue";var M=co+".g"+y+'[id="'+v+'"]',T="";A.forEach(function(k){k.length>0&&(T+=k+",")}),m+=S+M+'{content:"'+T+'"}'+mh},w=0;w<b;w++)h(w);return m}(d)})}return a.registerId=function(s){return oo(s)},a.prototype.rehydrate=function(){!this.server&&Zl&&cf(this)},a.prototype.reconstructWithOptions=function(s,c){c===void 0&&(c=!0);var i=new a(pt(pt({},this.options),s),this.gs,c&&this.names||void 0);return!this.server&&Zl&&s.target!==this.options.target&&Yf(this.options.target)!==Yf(s.target)&&cf(i),i},a.prototype.allocateGSInstance=function(s){return this.gs[s]=(this.gs[s]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(s=function(c){var i=c.useCSSOMInjection,d=c.target;return c.isServer?new i3(d):i?new o3(d):new l3(d)}(this.options),new Jy(s)));var s},a.prototype.hasNameForId=function(s,c){var i,d;return(d=(i=this.names.get(s))===null||i===void 0?void 0:i.has(c))!==null&&d!==void 0&&d},a.prototype.registerName=function(s,c){oo(s);var i=this.names.get(s);i?i.add(c):this.names.set(s,new Set([c]))},a.prototype.insertRules=function(s,c,i){this.registerName(s,c),this.getTag().insertRules(oo(s),i)},a.prototype.clearNames=function(s){this.names.has(s)&&this.names.get(s).clear()},a.prototype.clearRules=function(s){this.getTag().clearGroup(oo(s)),this.clearNames(s)},a.prototype.clearTag=function(){this.tag=void 0},a}(),c3=/&/g,Yr=47,la=42;function Fg(a){if(a.indexOf("}")===-1)return!1;for(var s=a.length,c=0,i=0,d=!1,f=0;f<s;f++){var g=a.charCodeAt(f);if(i!==0||d||g!==Yr||a.charCodeAt(f+1)!==la)if(d)g===la&&a.charCodeAt(f+1)===Yr&&(d=!1,f++);else if(g!==34&&g!==39||f!==0&&a.charCodeAt(f-1)===92){if(i===0){if(g===123)c++;else if(g===125&&--c<0)return!0}}else i===0?i=g:i===g&&(i=0);else d=!0,f++}return c!==0||i!==0}function Cb(a,s){return a.map(function(c){return c.type==="rule"&&(c.value="".concat(s," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(s," ")),c.props=c.props.map(function(i){return"".concat(s," ").concat(i)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=Cb(c.children,s)),c})}function u3(a){var s,c,i,d=uo,f=d.options,g=f===void 0?uo:f,b=d.plugins,m=b===void 0?ph:b,h=function(S,M,T){return T.startsWith(c)&&T.endsWith(c)&&T.replaceAll(c,"").length>0?".".concat(s):S},w=m.slice();w.push(function(S){S.type===Sc&&S.value.includes("&")&&(i||(i=new RegExp("\\".concat(c,"\\b"),"g")),S.props[0]=S.props[0].replace(c3,c).replace(i,h))}),g.prefix&&w.push(By),w.push(Dy);var y=[],v=zy(w.concat(Oy(function(S){return y.push(S)}))),A=function(S,M,T,k){M===void 0&&(M=""),T===void 0&&(T=""),k===void 0&&(k="&"),s=k,c=M,i=void 0;var N=function(z){if(!Fg(z))return z;for(var K=z.length,H="",L=0,R=0,D=0,I=!1,$=0;$<K;$++){var P=z.charCodeAt($);if(D!==0||I||P!==Yr||z.charCodeAt($+1)!==la)if(I)P===la&&z.charCodeAt($+1)===Yr&&(I=!1,$++);else if(P!==34&&P!==39||$!==0&&z.charCodeAt($-1)===92){if(D===0)if(P===123)R++;else if(P===125){if(--R<0){for(var Y=$+1;Y<K;){var oe=z.charCodeAt(Y);if(oe===59||oe===10)break;Y++}Y<K&&z.charCodeAt(Y)===59&&Y++,R=0,$=Y-1,L=Y;continue}R===0&&(H+=z.substring(L,$+1),L=$+1)}else P===59&&R===0&&(H+=z.substring(L,$+1),L=$+1)}else D===0?D=P:D===P&&(D=0);else I=!0,$++}if(L<K){var me=z.substring(L);Fg(me)||(H+=me)}return H}(function(z){if(z.indexOf("//")===-1)return z;for(var K=z.length,H=[],L=0,R=0,D=0,I=0;R<K;){var $=z.charCodeAt(R);if($!==34&&$!==39||R!==0&&z.charCodeAt(R-1)===92)if(D===0)if($===Yr&&R+1<K&&z.charCodeAt(R+1)===la){for(R+=2;R+1<K&&(z.charCodeAt(R)!==la||z.charCodeAt(R+1)!==Yr);)R++;R+=2}else if($===40&&R>=3&&(32|z.charCodeAt(R-1))==108&&(32|z.charCodeAt(R-2))==114&&(32|z.charCodeAt(R-3))==117)I=1,R++;else if(I>0)$===41?I--:$===40&&I++,R++;else if($===la&&R+1<K&&z.charCodeAt(R+1)===Yr)R>L&&H.push(z.substring(L,R)),L=R+=2;else if($===Yr&&R+1<K&&z.charCodeAt(R+1)===Yr){for(R>L&&H.push(z.substring(L,R));R<K&&z.charCodeAt(R)!==10;)R++;L=R}else R++;else R++;else D===0?D=$:D===$&&(D=0),R++}return L===0?z:(L<K&&H.push(z.substring(L)),H.join(""))}(S)),E=_y(T||M?"".concat(T," ").concat(M," { ").concat(N," }"):N);return g.namespace&&(E=Cb(E,g.namespace)),y=[],hc(E,v),y};return A.hash=m.length?m.reduce(function(S,M){return M.name||ai(15),oa(S,M.name)},5381).toString():"",A}var d3=new pc,Pf=u3(),Ff={shouldForwardProp:void 0,styleSheet:d3,stylis:Pf},Eb=wr?{Provider:function(a){return a.children},Consumer:function(a){return(0,a.children)(Ff)}}:Le.createContext(Ff);Eb.Consumer;wr||Le.createContext(void 0);function Vf(){return wr?Ff:Le.useContext(Eb)}var f3=function(){function a(s,c){var i=this;this.inject=function(d,f){f===void 0&&(f=Pf);var g=i.name+f.hash;d.hasNameForId(i.id,g)||d.insertRules(i.id,g,f(i.rules,g,"@keyframes"))},this.name=s,this.id="sc-keyframes-".concat(s),this.rules=c,bh(this,function(){throw ai(12,String(i.name))})}return a.prototype.getName=function(s){return s===void 0&&(s=Pf),this.name+s.hash},a}();function h3(a,s){return s==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||a in $y||a.startsWith("--")?String(s).trim():"".concat(s,"px")}var m3=function(a){return a>="A"&&a<="Z"};function Vg(a){for(var s="",c=0;c<a.length;c++){var i=a[c];if(c===1&&i==="-"&&a[0]==="-")return a;m3(i)?s+="-"+i.toLowerCase():s+=i}return s.startsWith("ms-")?"-"+s:s}var Mb=function(a){return a==null||a===!1||a===""},Nb=function(a){var s=[];for(var c in a){var i=a[c];a.hasOwnProperty(c)&&!Mb(i)&&(Array.isArray(i)&&i.isCss||fo(i)?s.push("".concat(Vg(c),":"),i,";"):Wl(i)?s.push.apply(s,Il(Il(["".concat(c," {")],Nb(i),!1),["}"],!1)):s.push("".concat(Vg(c),": ").concat(h3(c,i),";")))}return s};function Nn(a,s,c,i,d){if(d===void 0&&(d=[]),typeof a=="string")return a&&d.push(a),d;if(Mb(a))return d;if(gh(a))return d.push(".".concat(a.styledComponentId)),d;if(fo(a)){if(!fo(g=a)||g.prototype&&g.prototype.isReactComponent||!s)return d.push(a),d;var f=a(s);return Nn(f,s,c,i,d)}var g;if(a instanceof f3)return c?(a.inject(c,i),d.push(a.getName(i))):d.push(a),d;if(Wl(a)){for(var b=Nb(a),m=0;m<b.length;m++)d.push(b[m]);return d}if(!Array.isArray(a))return d.push(a.toString()),d;for(m=0;m<a.length;m++)Nn(a[m],s,c,i,d);return d}function Tb(a){for(var s=0;s<a.length;s+=1){var c=a[s];if(fo(c)&&!gh(c))return!1}return!0}var p3=vb(Mc),g3=function(){function a(s,c,i){this.rules=s,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Tb(s),this.componentId=c,this.baseHash=oa(p3,c),this.baseStyle=i,pc.registerId(c)}return a.prototype.generateAndInjectStyles=function(s,c,i){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,c,i).className:"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))d=sa(d,this.staticRulesId);else{var f=Qf(Nn(this.rules,s,c,i)),g=Hf(oa(this.baseHash,f)>>>0);if(!c.hasNameForId(this.componentId,g)){var b=i(f,".".concat(g),void 0,this.componentId);c.insertRules(this.componentId,g,b)}d=sa(d,g),this.staticRulesId=g}else{for(var m=oa(this.baseHash,i.hash),h="",w=0;w<this.rules.length;w++){var y=this.rules[w];if(typeof y=="string")h+=y;else if(y){var v=Qf(Nn(y,s,c,i));m=oa(oa(m,String(w)),v),h+=v}}if(h){var A=Hf(m>>>0);if(!c.hasNameForId(this.componentId,A)){var S=i(h,".".concat(A),void 0,this.componentId);c.insertRules(this.componentId,A,S)}d=sa(d,A)}}return{className:d,css:typeof window>"u"?c.getTag().getGroup(oo(this.componentId)):""}},a}(),xh=wr?{Provider:function(a){return a.children},Consumer:function(a){return(0,a.children)(void 0)}}:Le.createContext(void 0);xh.Consumer;var uf={};function b3(a,s,c){var i=gh(a),d=a,f=!sf(a),g=s.attrs,b=g===void 0?ph:g,m=s.componentId,h=m===void 0?function(z,K){var H=typeof z!="string"?"sc":Ug(z);uf[H]=(uf[H]||0)+1;var L="".concat(H,"-").concat(yb(Mc+H+uf[H]));return K?"".concat(K,"-").concat(L):L}(s.displayName,s.parentComponentId):m,w=s.displayName,y=w===void 0?function(z){return sf(z)?"styled.".concat(z):"Styled(".concat(qy(z),")")}(a):w,v=s.displayName&&s.componentId?"".concat(Ug(s.displayName),"-").concat(s.componentId):s.componentId||h,A=i&&d.attrs?d.attrs.concat(b).filter(Boolean):b,S=s.shouldForwardProp;if(i&&d.shouldForwardProp){var M=d.shouldForwardProp;if(s.shouldForwardProp){var T=s.shouldForwardProp;S=function(z,K){return M(z,K)&&T(z,K)}}else S=M}var k=new g3(c,v,i?d.componentStyle:void 0);function N(z,K){return function(H,L,R){var D=H.attrs,I=H.componentStyle,$=H.defaultProps,P=H.foldedComponentIds,Y=H.styledComponentId,oe=H.target,me=wr?void 0:Le.useContext(xh),G=Vf(),ee=H.shouldForwardProp||G.shouldForwardProp,se=bb(L,me,$)||(wr?void 0:uo),be=function(ke,ot,mr){for(var Et,dt=pt(pt({},ot),{className:void 0,theme:mr}),Sr=0;Sr<ke.length;Sr+=1){var ar=fo(Et=ke[Sr])?Et(dt):Et;for(var pr in ar)pr==="className"?dt.className=sa(dt.className,ar[pr]):pr==="style"?dt.style=pt(pt({},dt.style),ar[pr]):dt[pr]=ar[pr]}return"className"in ot&&typeof ot.className=="string"&&(dt.className=sa(dt.className,ot.className)),dt}(D,L,se),O=be.as||oe,W={};for(var te in be)be[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&be.theme===se||(te==="forwardedAs"?W.as=be.forwardedAs:ee&&!ee(te,O)||(W[te]=be[te]));var re=function(ke,ot){var mr=Vf(),Et=ke.generateAndInjectStyles(ot,mr.styleSheet,mr.stylis);return Et}(I,be),ie=re.className,je=re.css,ue=sa(P,Y);ie&&(ue+=" "+ie),be.className&&(ue+=" "+be.className),W[sf(O)&&!xb.has(O)?"class":"className"]=ue,R&&(W.ref=R);var We=C.createElement(O,W);return wr&&je?Le.createElement(Le.Fragment,null,Le.createElement("style",{precedence:"styled-components",href:"sc-".concat(Y,"-").concat(ie),children:je}),We):We}(E,z,K)}N.displayName=y;var E=Le.forwardRef(N);return E.attrs=A,E.componentStyle=k,E.displayName=y,E.shouldForwardProp=S,E.foldedComponentIds=i?sa(d.foldedComponentIds,d.styledComponentId):"",E.styledComponentId=v,E.target=i?d.target:a,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(z){this._foldedDefaultProps=i?function(K){for(var H=[],L=1;L<arguments.length;L++)H[L-1]=arguments[L];for(var R=0,D=H;R<D.length;R++)qf(K,D[R],!0);return K}({},d.defaultProps,z):z}}),bh(E,function(){return".".concat(E.styledComponentId)}),f&&Sb(E,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function Gg(a,s){for(var c=[a[0]],i=0,d=s.length;i<d;i+=1)c.push(s[i],a[i+1]);return c}var Zg=function(a){return Object.assign(a,{isCss:!0})};function _b(a){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];if(fo(a)||Wl(a))return Zg(Nn(Gg(ph,Il([a],s,!0))));var i=a;return s.length===0&&i.length===1&&typeof i[0]=="string"?Nn(i):Zg(Nn(Gg(i,s)))}function Gf(a,s,c){if(c===void 0&&(c=uo),!s)throw ai(1,s);var i=function(d){for(var f=[],g=1;g<arguments.length;g++)f[g-1]=arguments[g];return a(s,c,_b.apply(void 0,Il([d],f,!1)))};return i.attrs=function(d){return Gf(a,s,pt(pt({},c),{attrs:Array.prototype.concat(c.attrs,d).filter(Boolean)}))},i.withConfig=function(d){return Gf(a,s,pt(pt({},c),d))},i}var Rb=function(a){return Gf(b3,a)},p=Rb;xb.forEach(function(a){p[a]=Rb(a)});var x3=function(){function a(s,c){this.rules=s,this.componentId=c,this.isStatic=Tb(s),pc.registerId(this.componentId+1)}return a.prototype.createStyles=function(s,c,i,d){var f=d(Qf(Nn(this.rules,c,i,d)),""),g=this.componentId+s;i.insertRules(g,g,f)},a.prototype.removeStyles=function(s,c){c.clearRules(this.componentId+s)},a.prototype.renderStyles=function(s,c,i,d){s>2&&pc.registerId(this.componentId+s);var f=this.componentId+s;this.isStatic?i.hasNameForId(f,f)||this.createStyles(s,c,i,d):(this.removeStyles(s,i),this.createStyles(s,c,i,d))},a}();function Ar(a){for(var s=[],c=1;c<arguments.length;c++)s[c-1]=arguments[c];var i=_b.apply(void 0,Il([a],s,!1)),d="sc-global-".concat(yb(JSON.stringify(i))),f=new x3(i,d),g=new WeakMap,b=function(h){var w=Vf(),y=wr?void 0:Le.useContext(xh),v=g.get(w.styleSheet);if(v===void 0&&(v=w.styleSheet.allocateGSInstance(d),g.set(w.styleSheet,v)),(typeof window>"u"||!w.styleSheet.server)&&m(v,h,w.styleSheet,y,w.stylis),wr||Le.useLayoutEffect(function(){return w.styleSheet.server||m(v,h,w.styleSheet,y,w.stylis),function(){var M;f.removeStyles(v,w.styleSheet),M=w.styleSheet.options.target,typeof document<"u"&&(M??document).querySelectorAll('style[data-styled-global="'.concat(d,'"]')).forEach(function(T){return T.remove()})}},[v,h,w.styleSheet,y,w.stylis]),wr){var A=d+v,S=typeof window>"u"?w.styleSheet.getTag().getGroup(oo(A)):"";if(S)return Le.createElement("style",{key:"".concat(d,"-").concat(v),"data-styled-global":d,children:S})}return null};function m(h,w,y,v,A){if(f.isStatic)f.renderStyles(h,Uy,y,A);else{var S=pt(pt({},w),{theme:bb(w,v,b.defaultProps)});f.renderStyles(h,S,y,A)}}return Le.memo(b)}const v3=p.span`
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  font-weight: 700;
  color: #2c2828;
  letter-spacing: 0.5px;
  
  /* Optional: Add a hover effect for a brand feel */
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;function y3(){setTimeout(()=>{let a=document.querySelector("#main-wrapper");a.classList.contains("menu-toggle")?a.classList.remove("menu-toggle"):a.classList.add("menu-toggle")},200)}const j3=()=>{const[a,s]=C.useState(!1),{openMenuToggle:c}=C.useContext(ti);return r.jsxs("div",{className:"nav-header",children:[r.jsxs(ye,{to:"/dashboard",className:"brand-logo",children:[r.jsx("img",{src:by,alt:"Educareer Logo",className:"logo-abbr",style:{width:40,height:40}}),r.jsx("div",{className:"brand-title",children:r.jsx(v3,{children:"Educareer"})})]}),r.jsx("div",{className:"nav-control",onClick:()=>{s(!a),c(),y3()},children:r.jsxs("div",{className:`hamburger ${a?"is-active":""}`,children:[r.jsx("span",{className:"line"}),r.jsx("span",{className:"line"}),r.jsx("span",{className:"line"})]})})]})},w3=({toggleTab:a,toggleChatBox:s})=>r.jsx("div",{className:`tab-pane fade  ${a==="notes"?"active show":""}`,id:"notes",children:r.jsxs("div",{className:"card mb-sm-3 mb-md-0 note_card",children:[r.jsxs("div",{className:"card-header chat-list-header text-center",children:[r.jsx(ye,{to:"#",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"18px",height:"18px",viewBox:"0 0 24 24",version:"1.1",children:r.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[r.jsx("rect",{fill:"#000000",x:"4",y:"11",width:"16",height:"2",rx:"1"}),r.jsx("rect",{fill:"#000000",opacity:"0.3",transform:"translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) ",x:"4",y:"11",width:"16",height:"2",rx:"1"})]})})}),r.jsxs("div",{children:[r.jsx("h6",{className:"mb-1",children:"Notes"}),r.jsx("p",{className:"mb-0",children:"Add New Nots"})]}),r.jsx(ye,{to:"#",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"18px",height:"18px",viewBox:"0 0 24 24",version:"1.1",children:r.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[r.jsx("rect",{x:"0",y:"0",width:"24",height:"24"}),r.jsx("path",{d:"M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z",fill:"#000000",fillRule:"nonzero",opacity:"0.3"}),r.jsx("path",{d:"M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z",fill:"#000000",fillRule:"nonzero"})]})})})]}),r.jsx("div",{className:"card-body contacts_body p-0 dlab-scroll  ",id:"DZ_W_Contacts_Body2",children:r.jsxs("ul",{className:"contacts",children:[r.jsx("li",{className:"active",children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"New order placed.."}),r.jsx("p",{children:"10 Aug 2020"})]}),r.jsxs("div",{className:"ms-auto",children:[r.jsx(ye,{to:"#",className:"btn btn-primary btn-xs sharp me-1",children:r.jsx("i",{className:"fas fa-pencil-alt"})}),r.jsx(ye,{to:"#",className:"btn btn-danger btn-xs sharp",children:r.jsx("i",{className:"fa fa-trash"})})]})]})}),r.jsx("li",{children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Youtube, a video-sharing website.."}),r.jsx("p",{children:"10 Aug 2020"})]}),r.jsxs("div",{className:"ms-auto",children:[r.jsx(ye,{to:"#",className:"btn btn-primary btn-xs sharp me-1",children:r.jsx("i",{className:"fas fa-pencil-alt"})}),r.jsx(ye,{to:"#",className:"btn btn-danger btn-xs sharp",children:r.jsx("i",{className:"fa fa-trash"})})]})]})}),r.jsx("li",{children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"john just buy your product.."}),r.jsx("p",{children:"10 Aug 2020"})]}),r.jsxs("div",{className:"ms-auto",children:[r.jsx(ye,{to:"#",className:"btn btn-primary btn-xs sharp me-1",children:r.jsx("i",{className:"fas fa-pencil-alt"})}),r.jsx(ye,{to:"#",className:"btn btn-danger btn-xs sharp",children:r.jsx("i",{className:"fa fa-trash"})})]})]})}),r.jsx("li",{children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Athan Jacoby"}),r.jsx("p",{children:"10 Aug 2020"})]}),r.jsxs("div",{className:"ms-auto",children:[r.jsx(ye,{to:"#",className:"btn btn-primary btn-xs sharp me-1",children:r.jsx("i",{className:"fas fa-pencil-alt"})}),r.jsx(ye,{to:"#",className:"btn btn-danger btn-xs sharp",children:r.jsx("i",{className:"fa fa-trash"})})]})]})})]})})]})}),A3=({toggleTab:a,toggleChatBox:s})=>r.jsx("div",{className:`tab-pane fade  ${a==="alerts"?"active show":""}`,id:"alerts",role:"tabpanel",children:r.jsxs("div",{className:"card mb-sm-3 mb-md-0 contacts_card",children:[r.jsxs("div",{className:"card-header chat-list-header text-center",children:[r.jsx(ye,{to:"#",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"18px",height:"18px",viewBox:"0 0 24 24",version:"1.1",children:r.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[r.jsx("rect",{x:"0",y:"0",width:"24",height:"24"}),r.jsx("circle",{fill:"#000000",cx:"5",cy:"12",r:"2"}),r.jsx("circle",{fill:"#000000",cx:"12",cy:"12",r:"2"}),r.jsx("circle",{fill:"#000000",cx:"19",cy:"12",r:"2"})]})})}),r.jsxs("div",{children:[r.jsx("h6",{className:"mb-1",children:"Notications"}),r.jsx("p",{className:"mb-0",children:"Show All"})]}),r.jsx(ye,{to:"#",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"18px",height:"18px",viewBox:"0 0 24 24",version:"1.1",children:r.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[r.jsx("rect",{x:"0",y:"0",width:"24",height:"24"}),r.jsx("path",{d:"M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z",fill:"#000000",fillRule:"nonzero",opacity:"0.3"}),r.jsx("path",{d:"M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z",fill:"#000000",fillRule:"nonzero"})]})})})]}),r.jsx("div",{className:"card-body contacts_body p-0 dlab-scroll  ",id:"DZ_W_Contacts_Body1",children:r.jsxs("ul",{className:"contacts",children:[r.jsx("li",{className:"name-first-letter",children:"SEVER STATUS"}),r.jsx("li",{className:"active",children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsx("div",{className:"img_cont primary",children:"KK"}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"David Nester Birthday"}),r.jsx("p",{className:"text-primary",children:"Today"})]})]})}),r.jsx("li",{className:"name-first-letter",children:"SOCIAL"}),r.jsx("li",{children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsx("div",{className:"img_cont success",children:"RU"}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Perfection Simplified"}),r.jsx("p",{children:"Jame Smith commented on your status"})]})]})}),r.jsx("li",{className:"name-first-letter",children:"SEVER STATUS"}),r.jsx("li",{children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsx("div",{className:"img_cont primary",children:"AU"}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"AharlieKane"}),r.jsx("p",{children:"Sami is online"})]})]})}),r.jsx("li",{children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsx("div",{className:"img_cont info",children:"MO"}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Athan Jacoby"}),r.jsx("p",{children:"Nargis left 30 mins ago"})]})]})})]})}),r.jsx("div",{className:"card-footer"})]})}),ws="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAlgCWAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqEXMbXX2dTlwu446AZxU1Z8cMcOskRoFBtyTj13UASvfqsrotvcSbDgsiZGfzqSe6SAICrs7/dRFyTVSSO9t1nmSSPaGaTZtzuH1+lPjcTapFJjhrbcoPuaALkMyTxLJGcq1PJAGScCslN62t1JE5Uw3DsBnAIHUGrNoPtdu80x3LMeEJyFUdB9aALEFxHcBzGchHKE+pHpUC6grvtW2uCN23eE+XrjOc03TFVFulUAKLhgAO3Sof9MsLZZXkjaNT88YXsT1z680AW7i9jt32FZHbbuIRc7R6mrCOsiK6nKsMg+oqnAAdSvd3og59MUulEnTYc+h/maALlFFFABRRRQAUUUUAFFFFABRRRQAVD9n/037Tu/wCWfl7ce+c5qaigCk9gx3xrcMsDklowo79cGpJ7QuY3hk8mSMbVYLkY9MVZooAqfYV+zxwbzsDbnyOX7/zqWC38h5SrfI7bgmPunvU1FAEEFuIRMC24SyF+mMZ7VANPbCxPcM1upBEe0dugJ7ir1FAFS4s2llMkUxiZl2Phc7h/jViKNYYljQYVRgU+igAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9k=",As="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAlgCWAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqEXMbXX2dTlwu446AZxU1Z8cMcOskRoFBtyTj13UASvfqsrotvcSbDgsiZGfzqSe6SAICrs7/dRFyTVSSO9t1nmSSPaGaTZtzuH1+lPjcTapFJjhrbcoPuaALkMyTxLJGcq1PJAGScCslN62t1JE5Uw3DsBnAIHUGrNoPtdu80x3LMeEJyFUdB9aALEFxHcBzGchHKE+pHpUC6grvtW2uCN23eE+XrjOc03TFVFulUAKLhgAO3Sof9MsLZZXkjaNT88YXsT1z680AW7i9jt32FZHbbuIRc7R6mrCOsiK6nKsMg+oqnAAdSvd3og59MUulEnTYc+h/maALlFFFABRRRQAUUUUAFFFFABRRRQAVD9n/037Tu/wCWfl7ce+c5qaigCk9gx3xrcMsDklowo79cGpJ7QuY3hk8mSMbVYLkY9MVZooAqfYV+zxwbzsDbnyOX7/zqWC38h5SrfI7bgmPunvU1FAEEFuIRMC24SyF+mMZ7VANPbCxPcM1upBEe0dugJ7ir1FAFS4s2llMkUxiZl2Phc7h/jViKNYYljQYVRgU+igAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9k=",df="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAlgCWAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqEXMbXX2dTlwu446AZxU1Z8cMcOskRoFBtyTj13UASvfqsrotvcSbDgsiZGfzqSe6SAICrs7/dRFyTVSSO9t1nmSSPaGaTZtzuH1+lPjcTapFJjhrbcoPuaALkMyTxLJGcq1PJAGScCslN62t1JE5Uw3DsBnAIHUGrNoPtdu80x3LMeEJyFUdB9aALEFxHcBzGchHKE+pHpUC6grvtW2uCN23eE+XrjOc03TFVFulUAKLhgAO3Sof9MsLZZXkjaNT88YXsT1z680AW7i9jt32FZHbbuIRc7R6mrCOsiK6nKsMg+oqnAAdSvd3og59MUulEnTYc+h/maALlFFFABRRRQAUUUUAFFFFABRRRQAVD9n/037Tu/wCWfl7ce+c5qaigCk9gx3xrcMsDklowo79cGpJ7QuY3hk8mSMbVYLkY9MVZooAqfYV+zxwbzsDbnyOX7/zqWC38h5SrfI7bgmPunvU1FAEEFuIRMC24SyF+mMZ7VANPbCxPcM1upBEe0dugJ7ir1FAFS4s2llMkUxiZl2Phc7h/jViKNYYljQYVRgU+igAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9k=",ff="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAlgCWAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqEXMbXX2dTlwu446AZxU1Z8cMcOskRoFBtyTj13UASvfqsrotvcSbDgsiZGfzqSe6SAICrs7/dRFyTVSSO9t1nmSSPaGaTZtzuH1+lPjcTapFJjhrbcoPuaALkMyTxLJGcq1PJAGScCslN62t1JE5Uw3DsBnAIHUGrNoPtdu80x3LMeEJyFUdB9aALEFxHcBzGchHKE+pHpUC6grvtW2uCN23eE+XrjOc03TFVFulUAKLhgAO3Sof9MsLZZXkjaNT88YXsT1z680AW7i9jt32FZHbbuIRc7R6mrCOsiK6nKsMg+oqnAAdSvd3og59MUulEnTYc+h/maALlFFFABRRRQAUUUUAFFFFABRRRQAVD9n/037Tu/wCWfl7ce+c5qaigCk9gx3xrcMsDklowo79cGpJ7QuY3hk8mSMbVYLkY9MVZooAqfYV+zxwbzsDbnyOX7/zqWC38h5SrfI7bgmPunvU1FAEEFuIRMC24SyF+mMZ7VANPbCxPcM1upBEe0dugJ7ir1FAFS4s2llMkUxiZl2Phc7h/jViKNYYljQYVRgU+igAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9k=",hf="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAlgCWAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqEXMbXX2dTlwu446AZxU1Z8cMcOskRoFBtyTj13UASvfqsrotvcSbDgsiZGfzqSe6SAICrs7/dRFyTVSSO9t1nmSSPaGaTZtzuH1+lPjcTapFJjhrbcoPuaALkMyTxLJGcq1PJAGScCslN62t1JE5Uw3DsBnAIHUGrNoPtdu80x3LMeEJyFUdB9aALEFxHcBzGchHKE+pHpUC6grvtW2uCN23eE+XrjOc03TFVFulUAKLhgAO3Sof9MsLZZXkjaNT88YXsT1z680AW7i9jt32FZHbbuIRc7R6mrCOsiK6nKsMg+oqnAAdSvd3og59MUulEnTYc+h/maALlFFFABRRRQAUUUUAFFFFABRRRQAVD9n/037Tu/wCWfl7ce+c5qaigCk9gx3xrcMsDklowo79cGpJ7QuY3hk8mSMbVYLkY9MVZooAqfYV+zxwbzsDbnyOX7/zqWC38h5SrfI7bgmPunvU1FAEEFuIRMC24SyF+mMZ7VANPbCxPcM1upBEe0dugJ7ir1FAFS4s2llMkUxiZl2Phc7h/jViKNYYljQYVRgU+igAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9k=",S3=({avatar1:a,avatar2:s,openMsg:c,offMsg:i})=>{const[d,f]=C.useState(!1);return r.jsxs("div",{className:`card chat dlab-chat-history-box ${c?"":"d-none"}`,children:[r.jsxs("div",{className:"card-header chat-list-header text-center",children:[r.jsx(ye,{to:"#",className:"dlab-chat-history-back",onClick:()=>i(),children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"18px",height:"18px",viewBox:"0 0 24 24",version:"1.1",children:r.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[r.jsx("polygon",{points:"0 0 24 0 24 24 0 24"}),r.jsx("rect",{fill:"#000000",opacity:"0.3",transform:"translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) ",x:"14",y:"7",width:"2",height:"10",rx:"1"}),r.jsx("path",{d:"M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z",fill:"#000000",fillRule:"nonzero",transform:"translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) "})]})})}),r.jsxs("div",{children:[r.jsx("h6",{className:"mb-1",children:"Chat with Khelesh"}),r.jsx("p",{className:"mb-0 text-success",children:"Online"})]}),r.jsxs("div",{className:"dropdown",children:[r.jsx(ye,{to:"#","data-toggle":"dropdown","aria-expanded":"false",onClick:()=>f(!d),children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"18px",height:"18px",viewBox:"0 0 24 24",version:"1.1",children:r.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[r.jsx("rect",{x:"0",y:"0",width:"24",height:"24"}),r.jsx("circle",{fill:"#000000",cx:"5",cy:"12",r:"2"}),r.jsx("circle",{fill:"#000000",cx:"12",cy:"12",r:"2"}),r.jsx("circle",{fill:"#000000",cx:"19",cy:"12",r:"2"})]})})}),r.jsxs("ul",{className:`dropdown-menu dropdown-menu-right ${d?"show":""}`,children:[r.jsxs("li",{className:"dropdown-item",onClick:()=>f(!1),children:[r.jsx("i",{className:"fa fa-user-circle text-primary me-2"})," ","View profile"]}),r.jsxs("li",{className:"dropdown-item",onClick:()=>f(!1),children:[r.jsx("i",{className:"fa fa-users text-primary me-2"})," Add to close friends"]}),r.jsxs("li",{className:"dropdown-item",onClick:()=>f(!1),children:[r.jsx("i",{className:"fa fa-plus text-primary me-2"})," Add to group"]}),r.jsxs("li",{className:"dropdown-item",onClick:()=>f(!1),children:[r.jsx("i",{className:"fa fa-ban text-primary me-2"})," Block"]})]})]})]}),r.jsxs("div",{className:"card-body msg_card_body dlab-scroll  ",id:"DZ_W_Contacts_Body3",children:[r.jsxs("div",{className:"d-flex justify-content-start mb-4",children:[r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:a,className:"rounded-circle user_img_msg",alt:""})}),r.jsxs("div",{className:"msg_cotainer",children:["Hi, how are you samim?",r.jsx("span",{className:"msg_time",children:"8:40 AM, Today"})]})]}),r.jsxs("div",{className:"d-flex justify-content-end mb-4",children:[r.jsxs("div",{className:"msg_cotainer_send",children:["Hi Khalid i am good tnx how about you?",r.jsx("span",{className:"msg_time_send",children:"8:55 AM, Today"})]}),r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:s,className:"rounded-circle user_img_msg",alt:""})})]}),r.jsxs("div",{className:"d-flex justify-content-start mb-4",children:[r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:a,className:"rounded-circle user_img_msg",alt:""})}),r.jsxs("div",{className:"msg_cotainer",children:["I am good too, thank you for your chat template",r.jsx("span",{className:"msg_time",children:"9:00 AM, Today"})]})]}),r.jsxs("div",{className:"d-flex justify-content-end mb-4",children:[r.jsxs("div",{className:"msg_cotainer_send",children:["You are welcome",r.jsx("span",{className:"msg_time_send",children:"9:05 AM, Today"})]}),r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:s,className:"rounded-circle user_img_msg",alt:""})})]}),r.jsxs("div",{className:"d-flex justify-content-start mb-4",children:[r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:a,className:"rounded-circle user_img_msg",alt:""})}),r.jsxs("div",{className:"msg_cotainer",children:["I am looking for your next templates",r.jsx("span",{className:"msg_time",children:"9:07 AM, Today"})]})]}),r.jsxs("div",{className:"d-flex justify-content-end mb-4",children:[r.jsxs("div",{className:"msg_cotainer_send",children:["Ok, thank you have a good day",r.jsx("span",{className:"msg_time_send",children:"9:10 AM, Today"})]}),r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:s,className:"rounded-circle user_img_msg",alt:""})})]}),r.jsxs("div",{className:"d-flex justify-content-start mb-4",children:[r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:a,className:"rounded-circle user_img_msg",alt:""})}),r.jsxs("div",{className:"msg_cotainer",children:["Bye, see you",r.jsx("span",{className:"msg_time",children:"9:12 AM, Today"})]})]}),r.jsxs("div",{className:"d-flex justify-content-start mb-4",children:[r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:a,className:"rounded-circle user_img_msg",alt:""})}),r.jsxs("div",{className:"msg_cotainer",children:["Hi, how are you samim?",r.jsx("span",{className:"msg_time",children:"8:40 AM, Today"})]})]}),r.jsxs("div",{className:"d-flex justify-content-end mb-4",children:[r.jsxs("div",{className:"msg_cotainer_send",children:["Hi Khalid i am good tnx how about you?",r.jsx("span",{className:"msg_time_send",children:"8:55 AM, Today"})]}),r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:s,className:"rounded-circle user_img_msg",alt:""})})]}),r.jsxs("div",{className:"d-flex justify-content-start mb-4",children:[r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:a,className:"rounded-circle user_img_msg",alt:""})}),r.jsxs("div",{className:"msg_cotainer",children:["I am good too, thank you for your chat template",r.jsx("span",{className:"msg_time",children:"9:00 AM, Today"})]})]}),r.jsxs("div",{className:"d-flex justify-content-end mb-4",children:[r.jsxs("div",{className:"msg_cotainer_send",children:["You are welcome",r.jsx("span",{className:"msg_time_send",children:"9:05 AM, Today"})]}),r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:s,className:"rounded-circle user_img_msg",alt:""})})]}),r.jsxs("div",{className:"d-flex justify-content-start mb-4",children:[r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:a,className:"rounded-circle user_img_msg",alt:""})}),r.jsxs("div",{className:"msg_cotainer",children:["I am looking for your next templates",r.jsx("span",{className:"msg_time",children:"9:07 AM, Today"})]})]}),r.jsxs("div",{className:"d-flex justify-content-end mb-4",children:[r.jsxs("div",{className:"msg_cotainer_send",children:["Ok, thank you have a good day",r.jsx("span",{className:"msg_time_send",children:"9:10 AM, Today"})]}),r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:s,className:"rounded-circle user_img_msg",alt:""})})]}),r.jsxs("div",{className:"d-flex justify-content-start mb-4",children:[r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:a,className:"rounded-circle user_img_msg",alt:""})}),r.jsxs("div",{className:"msg_cotainer",children:["Bye, see you",r.jsx("span",{className:"msg_time",children:"9:12 AM, Today"})]})]})]}),r.jsx("div",{className:"card-footer type_msg",children:r.jsxs("div",{className:"input-group",children:[r.jsx("textarea",{className:"form-control",placeholder:"Type your message..."}),r.jsx("div",{className:"input-group-append",children:r.jsx("button",{type:"button",className:"btn btn-primary",children:r.jsx("i",{className:"fa fa-location-arrow"})})})]})})]})},k3=({toggleChatBox:a,toggleTab:s})=>{const[c,i]=C.useState(!1);return r.jsxs("div",{className:`tab-pane fade  ${s==="chat"?"active show":""}`,id:"chat",role:"tabpanel",children:[r.jsxs("div",{className:`card mb-sm-3 mb-md-0 contacts_card dlab-chat-user-box ${c?"d-none":""}`,children:[r.jsxs("div",{className:"card-header chat-list-header text-center",children:[r.jsx(ye,{to:"#",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"18px",height:"18px",viewBox:"0 0 24 24",version:"1.1",children:r.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[r.jsx("rect",{fill:"#000000",x:"4",y:"11",width:"16",height:"2",rx:"1"}),r.jsx("rect",{fill:"#000000",opacity:"0.3",transform:"translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) ",x:"4",y:"11",width:"16",height:"2",rx:"1"})]})})}),r.jsxs("div",{children:[r.jsx("h6",{className:"mb-1",children:"Chat List"}),r.jsx("p",{className:"mb-0",children:"Show All"})]}),r.jsx(ye,{to:"#",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"18px",height:"18px",viewBox:"0 0 24 24",version:"1.1",children:r.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[r.jsx("rect",{x:"0",y:"0",width:"24",height:"24"}),r.jsx("circle",{fill:"#000000",cx:"5",cy:"12",r:"2"}),r.jsx("circle",{fill:"#000000",cx:"12",cy:"12",r:"2"}),r.jsx("circle",{fill:"#000000",cx:"19",cy:"12",r:"2"})]})})})]}),r.jsx("div",{className:`card-body contacts_body p-0 dlab-scroll  ${a?"ps ps--active-y":""}`,id:"DZ_W_Contacts_Body",children:r.jsxs("ul",{className:"contacts",children:[r.jsx("li",{className:"name-first-letter",children:"A"}),r.jsx("li",{className:"active dlab-chat-user",onClick:()=>i(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:ws,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Archie Parker"}),r.jsx("p",{children:"Kalid is online"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>i(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:As,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon offline"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Alfie Mason"}),r.jsx("p",{children:"Taherah left 7 mins ago"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>i(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:df,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"AharlieKane"}),r.jsx("p",{children:"Sami is online"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>i(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:ff,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon offline"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Athan Jacoby"}),r.jsx("p",{children:"Nargis left 30 mins ago"})]})]})}),r.jsx("li",{className:"name-first-letter",children:"B"}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>i(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:hf,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon offline"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Bashid Samim"}),r.jsx("p",{children:"Rashid left 50 mins ago"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>i(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:ws,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Breddie Ronan"}),r.jsx("p",{children:"Kalid is online"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>i(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:As,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon offline"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Ceorge Carson"}),r.jsx("p",{children:"Taherah left 7 mins ago"})]})]})}),r.jsx("li",{className:"name-first-letter",children:"D"}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>i(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:df,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Darry Parker"}),r.jsx("p",{children:"Sami is online"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>i(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:ff,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon offline"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Denry Hunter"}),r.jsx("p",{children:"Nargis left 30 mins ago"})]})]})}),r.jsx("li",{className:"name-first-letter",children:"J"}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>i(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:hf,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon offline"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Jack Ronan"}),r.jsx("p",{children:"Rashid left 50 mins ago"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>i(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:ws,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Jacob Tucker"}),r.jsx("p",{children:"Kalid is online"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>i(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:As,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon offline"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"James Logan"}),r.jsx("p",{children:"Taherah left 7 mins ago"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>i(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:df,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Joshua Weston"}),r.jsx("p",{children:"Sami is online"})]})]})}),r.jsx("li",{className:"name-first-letter",children:"O"}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>i(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:ff,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon offline"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Oliver Acker"}),r.jsx("p",{children:"Nargis left 30 mins ago"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>i(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:hf,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon offline"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Oscar Weston"}),r.jsx("p",{children:"Rashid left 50 mins ago"})]})]})})]})})]}),r.jsx(S3,{avatar1:ws,avatar2:As,openMsg:c,offMsg:()=>i(!1)})]})},C3=({onClick:a,toggle:s})=>{const[c,i]=C.useState(window.location.hash.slice(1)?window.location.hash.slice(1):"chat"),d=[{href:"#notes",name:"Notes"},{href:"#alerts",name:"Alerts"},{href:"#chat",name:"Chat"}];return r.jsxs("div",{className:`chatbox ${s==="chatbox"?"active":""}`,children:[r.jsx("div",{className:"chatbox-close",onClick:()=>a()}),r.jsxs("div",{className:"custom-tab-1",children:[r.jsx("ul",{className:"nav nav-tabs",children:d.map((f,g)=>r.jsx("li",{className:"nav-item",children:r.jsx(ye,{className:`nav-link ${c===f.name.toLocaleLowerCase()?"active":""}`,to:"#","data-toggle":"tab",href:f.href,onClick:()=>i(f.name.toLocaleLowerCase()),children:f.name})},g))}),r.jsxs("div",{className:"tab-content",children:[r.jsx(k3,{toggle:s,toggleTab:c}),r.jsx(w3,{toggle:s,toggleTab:c}),r.jsx(A3,{toggle:s,toggleTab:c})]})]})]})};function Db({title:a,description:s,icon:c,action:i,children:d}){return r.jsxs("div",{className:"flex items-center justify-between mb-8",children:[r.jsxs("div",{className:"flex items-center",children:[c&&r.jsx("span",{className:"mr-2",children:c}),r.jsxs("div",{children:[r.jsx("h1",{className:"text-2xl font-bold text-foreground",children:a}),s&&r.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:s})]})]}),r.jsxs("div",{className:"flex items-center",children:[i&&r.jsx("button",{onClick:i.onClick,className:"btn btn-primary ml-2",children:i.label}),d]})]})}const vh=({pageTitle:a,pageDescription:s,pageIcon:c,tabs:i,action:d,viewMode:f="tabs"})=>{var m;const[g,b]=C.useState(((m=i[0])==null?void 0:m.id)||"");return r.jsxs("div",{className:"settings-layout",children:[r.jsx(Db,{title:a,description:s,icon:c,action:d}),f==="tabs"?r.jsx(r.Fragment,{children:r.jsxs("div",{className:"card mb-4",children:[r.jsx("div",{className:"card-header p-0 border-bottom-0",children:r.jsx("ul",{className:"nav nav-tabs",role:"tablist",children:i.map(h=>r.jsx("li",{className:"nav-item",children:r.jsxs("button",{className:`nav-link ${g===h.id?"active":""}`,onClick:()=>b(h.id),role:"tab","aria-selected":g===h.id,children:[h.icon&&r.jsx("span",{className:"me-2",children:h.icon}),h.label]})},h.id))})}),r.jsx("div",{className:"tab-content card-body p-0",children:i.map(h=>r.jsx("div",{className:`tab-pane fade ${g===h.id?"show active":""}`,role:"tabpanel",children:h.content},h.id))})]})}):r.jsx("div",{className:"row",children:i.map(h=>r.jsx("div",{className:"col-lg-6 mb-4",children:r.jsxs("div",{className:"card h-100",children:[r.jsx("div",{className:"card-header bg-light",children:r.jsxs("h5",{className:"mb-0",children:[h.icon&&r.jsx("span",{className:"me-2",children:h.icon}),h.label]})}),r.jsx("div",{className:"card-body",children:h.content})]})},h.id))})]})},rr=({fields:a,title:s,submitLabel:c="Create",onSubmit:i,initialData:d={},isLoading:f=!1})=>{const[g,b]=C.useState(d),[m,h]=C.useState({}),w=A=>{const{name:S,value:M,type:T}=A.target;if(T==="checkbox"){const k=A.target.checked;b(N=>({...N,[S]:k}))}else b(k=>({...k,[S]:M}));m[S]&&h(k=>{const N={...k};return delete N[S],N})},y=()=>{const A={};return a.forEach(S=>{const M=g[S.name];S.required&&!M&&(A[S.name]=`${S.label} is required`),S.validation&&M&&!S.validation(M)&&(A[S.name]=`${S.label} is invalid`)}),h(A),Object.keys(A).length===0},v=A=>{A.preventDefault(),y()&&(i(g),b(d))};return r.jsxs("div",{className:"card mb-4",children:[r.jsx("div",{className:"card-header bg-light",children:r.jsx("h5",{className:"mb-0",children:s})}),r.jsx("div",{className:"card-body",children:r.jsxs("form",{onSubmit:v,children:[r.jsx("div",{className:"row",children:a.map(A=>{var S;return r.jsxs("div",{className:A.type==="textarea"?"col-12 mb-3":"col-md-6 mb-3",children:[r.jsxs("label",{htmlFor:A.name,className:"form-label",children:[A.label,A.required&&r.jsx("span",{className:"text-danger ms-1",children:"*"})]}),A.type==="select"?r.jsxs("select",{id:A.name,name:A.name,className:`form-select ${m[A.name]?"is-invalid":""}`,onChange:w,value:g[A.name]||"",children:[r.jsx("option",{value:"",children:"-- Select --"}),(S=A.options)==null?void 0:S.map(M=>r.jsx("option",{value:M.value,children:M.label},M.value))]}):A.type==="textarea"?r.jsx("textarea",{id:A.name,name:A.name,className:`form-control ${m[A.name]?"is-invalid":""}`,placeholder:A.placeholder,onChange:w,value:g[A.name]||"",rows:4}):A.type==="toggle"?r.jsxs("div",{className:"form-check form-switch",children:[r.jsx("input",{id:A.name,name:A.name,type:"checkbox",className:"form-check-input",onChange:w,checked:g[A.name]||!1}),r.jsx("label",{className:"form-check-label",htmlFor:A.name,children:g[A.name]?"Active":"Inactive"})]}):r.jsx("input",{id:A.name,name:A.name,type:A.type,className:`form-control ${m[A.name]?"is-invalid":""}`,placeholder:A.placeholder,onChange:w,value:g[A.name]||""}),m[A.name]&&r.jsx("div",{className:"invalid-feedback d-block",children:m[A.name]})]},A.name)})}),r.jsxs("div",{className:"d-flex gap-2",children:[r.jsx("button",{type:"submit",className:"btn btn-primary",disabled:f,children:f?"Processing...":c}),r.jsx("button",{type:"reset",className:"btn btn-outline-secondary",onClick:()=>b(d),children:"Reset"})]})]})})]})},nr=({columns:a,data:s,title:c,onEdit:i,onDelete:d,searchFields:f=[],itemsPerPage:g=10})=>{const[b,m]=C.useState(""),[h,w]=C.useState(null),[y,v]=C.useState(1),A=C.useMemo(()=>b?s.filter(E=>f.some(z=>String(E[z]).toLowerCase().includes(b.toLowerCase()))):s,[s,b,f]),S=C.useMemo(()=>{let E=[...A];return h&&E.sort((z,K)=>{const H=z[h.key],L=K[h.key];if(H===L)return 0;const R=H<L?-1:1;return h.direction==="asc"?R:-R}),E},[A,h]),M=Math.ceil(S.length/g),T=C.useMemo(()=>{const E=(y-1)*g;return S.slice(E,E+g)},[S,y,g]),k=E=>{w(z=>(z==null?void 0:z.key)===E?{key:E,direction:z.direction==="asc"?"desc":"asc"}:{key:E,direction:"asc"})},N=E=>{window.confirm("Are you sure you want to delete this item?")&&(d==null||d(E))};return r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"card-header bg-light d-flex justify-content-between align-items-center",children:[r.jsx("h5",{className:"mb-0",children:c}),f.length>0&&r.jsx("input",{type:"text",className:"form-control form-control-sm",style:{maxWidth:"250px"},placeholder:"Search...",value:b,onChange:E=>{m(E.target.value),v(1)}})]}),r.jsx("div",{className:"card-body p-0",children:T.length===0?r.jsx("div",{className:"text-center py-5 text-muted",children:r.jsx("p",{children:"No data available"})}):r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"table-responsive",children:r.jsxs("table",{className:"table table-hover mb-0",children:[r.jsx("thead",{className:"table-light",children:r.jsxs("tr",{children:[a.map(E=>r.jsx("th",{onClick:()=>E.sortable&&k(E.key),style:{cursor:E.sortable?"pointer":"default"},className:E.sortable?"user-select-none":"",children:r.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[E.label,E.sortable&&(h==null?void 0:h.key)===E.key&&r.jsx("span",{children:h.direction==="asc"?" ↑":" ↓"})]})},E.key)),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:T.map((E,z)=>r.jsxs("tr",{children:[a.map(K=>r.jsx("td",{children:K.render?K.render(E[K.key],E):E[K.key]},K.key)),r.jsx("td",{children:r.jsxs("div",{className:"d-flex gap-2",children:[i&&r.jsx("button",{className:"btn btn-sm btn-outline-primary",onClick:()=>i(E),title:"Edit",children:"✏️"}),d&&r.jsx("button",{className:"btn btn-sm btn-outline-danger",onClick:()=>N(E),title:"Delete",children:"🗑️"})]})})]},z))})]})}),M>1&&r.jsx("nav",{className:"d-flex justify-content-center mt-4 mb-3",children:r.jsxs("ul",{className:"pagination pagination-sm",children:[r.jsx("li",{className:`page-item ${y===1?"disabled":""}`,children:r.jsx("button",{className:"page-link",onClick:()=>v(1),children:"First"})}),r.jsx("li",{className:`page-item ${y===1?"disabled":""}`,children:r.jsx("button",{className:"page-link",onClick:()=>v(y-1),children:"Previous"})}),Array.from({length:Math.min(5,M)}).map((E,z)=>{const K=y<=3?z+1:y-2+z;return K>M?null:r.jsx("li",{className:`page-item ${y===K?"active":""}`,children:r.jsx("button",{className:"page-link",onClick:()=>v(K),children:K})},K)}),r.jsx("li",{className:`page-item ${y===M?"disabled":""}`,children:r.jsx("button",{className:"page-link",onClick:()=>v(y+1),children:"Next"})}),r.jsx("li",{className:`page-item ${y===M?"disabled":""}`,children:r.jsx("button",{className:"page-link",onClick:()=>v(M),children:"Last"})})]})})]})})]})},Nc=p.div`
	display: ${a=>a.isOpen?"flex":"none"};
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	align-items: center;
	justify-content: center;
	z-index: 1000;
`,Tc=p.div`
	background-color: white;
	border-radius: 8px;
	padding: 2rem;
	max-width: 600px;
	width: 90%;
	max-height: 90vh;
	overflow-y: auto;
	box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
`,_c=p.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.5rem;
	border-bottom: 1px solid #e5e7eb;
	padding-bottom: 1rem;

	h2 {
		margin: 0;
		font-size: 1.5rem;
		color: #111827;
	}
`,Rc=p.button`
	background: none;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
	color: #6b7280;
	padding: 0;
	width: 2rem;
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		color: #111827;
	}
`,Dc=p.button`
	padding: 0.625rem 1rem;
	background-color: #2563eb;
	color: white;
	border: none;
	border-radius: 0.5rem;
	font-size: 0.875rem;
	font-weight: 500;
	cursor: pointer;
	transition: background-color 0.2s;
	margin-bottom: 1.5rem;

	&:hover {
		background-color: #1d4ed8;
	}
`,E3=()=>{const[a,s]=C.useState([{id:1,name:"Computer Science",code:"CS",description:"Core CS concepts",active:!0},{id:2,name:"Data Science",code:"DS",description:"Data analysis and ML",active:!0}]),[c,i]=C.useState(null),[d,f]=C.useState(!1),g=[{name:"name",label:"Module Name",type:"text",placeholder:"e.g., Computer Science",required:!0},{name:"code",label:"Module Code",type:"text",placeholder:"e.g., CS",required:!0},{name:"description",label:"Description",type:"textarea",placeholder:"Module description"},{name:"active",label:"Status",type:"toggle"}],b=[{key:"name",label:"Module Name",sortable:!0},{key:"code",label:"Code",sortable:!0},{key:"description",label:"Description"},{key:"active",label:"Status",render:v=>r.jsx("span",{className:`badge ${v?"bg-success":"bg-secondary"}`,children:v?"Active":"Inactive"})}],m=v=>{c?(s(a.map(A=>A.id===c.id?{...A,...v}:A)),i(null)):s([...a,{id:Date.now(),...v}]),f(!1)},h=v=>{s(a.filter(A=>A.id!==v.id))},w=()=>{f(!1),i(null)},y=v=>{i(v),f(!0)};return r.jsxs("div",{className:"p-4",children:[r.jsx(Dc,{onClick:()=>f(!0),children:"+ Create New Module"}),r.jsx(Nc,{isOpen:d,children:r.jsxs(Tc,{children:[r.jsxs(_c,{children:[r.jsx("h2",{children:c?"Edit Module":"Create New Module"}),r.jsx(Rc,{onClick:w,children:"×"})]}),r.jsx(rr,{fields:g,title:"",submitLabel:c?"Update":"Create",onSubmit:m,initialData:c||{name:"",code:"",description:"",active:!0}})]})}),r.jsx(nr,{columns:b,data:a,title:"Module List",onEdit:y,onDelete:h,searchFields:["name","code"]})]})},M3=()=>{const[a,s]=C.useState([{id:1,name:"Introduction to Programming",module:"CS",order:1,description:"Basics of programming"},{id:2,name:"Data Structures",module:"CS",order:2,description:"Arrays, lists, trees"}]),[c,i]=C.useState(null),[d,f]=C.useState(!1),g=[{name:"name",label:"Chapter Name",type:"text",placeholder:"e.g., Introduction to Programming",required:!0},{name:"module",label:"Module",type:"select",options:[{value:"CS",label:"Computer Science"},{value:"DS",label:"Data Science"}],required:!0},{name:"order",label:"Chapter Order",type:"number",placeholder:"1",required:!0},{name:"description",label:"Description",type:"textarea"}],b=[{key:"name",label:"Chapter Name",sortable:!0},{key:"module",label:"Module",sortable:!0},{key:"order",label:"Order",sortable:!0},{key:"description",label:"Description"}],m=v=>{c?(s(a.map(A=>A.id===c.id?{...A,...v}:A)),i(null)):s([...a,{id:Date.now(),...v,order:parseInt(v.order)}]),f(!1)},h=v=>{s(a.filter(A=>A.id!==v.id))},w=()=>{f(!1),i(null)},y=v=>{i(v),f(!0)};return r.jsxs("div",{className:"p-4",children:[r.jsx(Dc,{onClick:()=>f(!0),children:"+ Create New Chapter"}),r.jsx(Nc,{isOpen:d,children:r.jsxs(Tc,{children:[r.jsxs(_c,{children:[r.jsx("h2",{children:c?"Edit Chapter":"Create New Chapter"}),r.jsx(Rc,{onClick:w,children:"×"})]}),r.jsx(rr,{fields:g,title:"",submitLabel:c?"Update":"Create",onSubmit:m,initialData:c||{name:"",module:"",order:"",description:""}})]})}),r.jsx(nr,{columns:b,data:a,title:"Chapter List",onEdit:y,onDelete:h,searchFields:["name","module"]})]})},N3=()=>{const[a,s]=C.useState([{id:1,name:"Python Programming",code:"PROG101",department:"Computer Science",credits:3},{id:2,name:"Web Development",code:"WEB101",department:"Computer Science",credits:4}]),[c,i]=C.useState(null),[d,f]=C.useState(!1),g=[{name:"name",label:"Subject Name",type:"text",placeholder:"e.g., Python Programming",required:!0},{name:"code",label:"Subject Code",type:"text",placeholder:"e.g., PROG101",required:!0},{name:"department",label:"Department",type:"select",options:[{value:"Computer Science",label:"Computer Science"},{value:"Engineering",label:"Engineering"},{value:"Science",label:"Science"}],required:!0},{name:"credits",label:"Credits",type:"number",placeholder:"3"}],b=[{key:"name",label:"Subject Name",sortable:!0},{key:"code",label:"Code",sortable:!0},{key:"department",label:"Department",sortable:!0},{key:"credits",label:"Credits"}],m=v=>{c?(s(a.map(A=>A.id===c.id?{...A,...v}:A)),i(null)):s([...a,{id:Date.now(),...v,credits:parseInt(v.credits)||0}]),f(!1)},h=v=>{s(a.filter(A=>A.id!==v.id))},w=()=>{f(!1),i(null)},y=v=>{i(v),f(!0)};return r.jsxs("div",{className:"p-4",children:[r.jsx(Dc,{onClick:()=>f(!0),children:"+ Create New Subject"}),r.jsx(Nc,{isOpen:d,children:r.jsxs(Tc,{children:[r.jsxs(_c,{children:[r.jsx("h2",{children:c?"Edit Subject":"Create New Subject"}),r.jsx(Rc,{onClick:w,children:"×"})]}),r.jsx(rr,{fields:g,title:"",submitLabel:c?"Update":"Create",onSubmit:m,initialData:c||{name:"",code:"",department:"",credits:""}})]})}),r.jsx(nr,{columns:b,data:a,title:"Subject List",onEdit:y,onDelete:h,searchFields:["name","code"]})]})},T3=()=>{const[a,s]=C.useState([{id:1,name:"Spring 2024",academicYear:"2023-2024",startDate:"2024-01-15",endDate:"2024-05-30",active:!0},{id:2,name:"Fall 2024",academicYear:"2024-2025",startDate:"2024-09-01",endDate:"2024-12-20",active:!1}]),[c,i]=C.useState(null),[d,f]=C.useState(!1),g=[{name:"name",label:"Semester Name",type:"text",placeholder:"e.g., Spring 2024",required:!0},{name:"academicYear",label:"Academic Year",type:"text",placeholder:"e.g., 2023-2024",required:!0},{name:"startDate",label:"Start Date",type:"date",required:!0},{name:"endDate",label:"End Date",type:"date",required:!0},{name:"active",label:"Active",type:"toggle"}],b=[{key:"name",label:"Semester Name",sortable:!0},{key:"academicYear",label:"Academic Year",sortable:!0},{key:"startDate",label:"Start Date"},{key:"endDate",label:"End Date"},{key:"active",label:"Status",render:v=>r.jsx("span",{className:`badge ${v?"bg-success":"bg-secondary"}`,children:v?"Active":"Inactive"})}],m=v=>{c?(s(a.map(A=>A.id===c.id?{...A,...v}:A)),i(null)):s([...a,{id:Date.now(),...v}]),f(!1)},h=v=>{s(a.filter(A=>A.id!==v.id))},w=()=>{f(!1),i(null)},y=v=>{i(v),f(!0)};return r.jsxs("div",{className:"p-4",children:[r.jsx(Dc,{onClick:()=>f(!0),children:"+ Create New Semester"}),r.jsx(Nc,{isOpen:d,children:r.jsxs(Tc,{children:[r.jsxs(_c,{children:[r.jsx("h2",{children:c?"Edit Semester":"Create New Semester"}),r.jsx(Rc,{onClick:w,children:"×"})]}),r.jsx(rr,{fields:g,title:"",submitLabel:c?"Update":"Create",onSubmit:m,initialData:c||{name:"",academicYear:"",startDate:"",endDate:"",active:!0}})]})}),r.jsx(nr,{columns:b,data:a,title:"Semester List",onEdit:y,onDelete:h,searchFields:["name","academicYear"]})]})},_3=()=>{const a=[{id:"modules",label:" Module",icon:"",content:r.jsx(E3,{})},{id:"chapters",label:"Chapter",icon:"",content:r.jsx(M3,{})},{id:"subjects",label:"Subject",icon:"",content:r.jsx(N3,{})},{id:"semesters",label:"Semester",icon:"",content:r.jsx(T3,{})}];return r.jsx(vh,{pageTitle:"Academic Structure Settings",pageDescription:"Manage your academic hierarchy including modules, chapters, subjects, and semesters",pageIcon:"⚙️",tabs:a,viewMode:"tabs"})},Xg=[{title:"Dashboard",to:"dashboard",iconStyle:r.jsx("i",{className:"flaticon-home"})},{title:"Management",classsChange:"menu-title"},{title:"User",to:"user-management",iconStyle:r.jsx("i",{className:"flaticon-user"})},{title:"Payment",to:"payments",iconStyle:r.jsx("i",{className:"flaticon-price-tag"})},{title:"Documents",to:"documents",iconStyle:r.jsx("i",{className:"flaticon-approved"})},{title:"Modules and Tests",to:"modules-tests",iconStyle:r.jsx("i",{className:"flaticon-notes"})},{title:"Questions",classsChange:"menu-title"},{title:"Question Bank",to:"question-bank",iconStyle:r.jsx("i",{className:"flaticon-file"})},{title:"Student Submitted",to:"student-submitted",iconStyle:r.jsx("i",{className:"flaticon-registration"})},{title:"Configuration",classsChange:"menu-title"},{title:"Academic Setting",to:"academic-settings",iconStyle:r.jsx("i",{className:"flaticon-blog"})},{title:"Subscription",to:"subscription",iconStyle:r.jsx("i",{className:"flaticon-app"})},{title:"Points Rules",to:"point-settings",iconStyle:r.jsx("i",{className:"flaticon-bar-chart"})},{title:"Test Setting",to:"test-settings",iconStyle:r.jsx("i",{className:"flaticon-puzzle"})},{title:"System Setting",iconStyle:r.jsx("i",{className:"flaticon flaticon-cms"}),"mm-collapse":!0,content:[{title:"Role Permissions",to:"system-settings"},{title:"Audit Logs",to:"audit-logs"}]}];var mf={},pf={},Al={},Ig;function R3(){if(Ig)return Al;Ig=1,Object.defineProperty(Al,"__esModule",{value:!0}),Al.useIsomorphicLayoutEffect=void 0;const a=po();return Al.useIsomorphicLayoutEffect=typeof window<"u"?a.useLayoutEffect:a.useEffect,Al}var Jg;function D3(){return Jg||(Jg=1,function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.useScrollPosition=void 0;const s=po(),c=R3(),i=typeof window<"u",d={x:0,y:0},f=b=>b==null?void 0:b.getBoundingClientRect(),g=({element:b,useWindow:m,boundingElement:h})=>{if(!i)return d;if(m)return{x:window.scrollX,y:window.scrollY};const w=f((b==null?void 0:b.current)||document.body),y=f(h==null?void 0:h.current);return w?y?{x:(y.x||0)-(w.x||0),y:(y.y||0)-(w.y||0)}:{x:w.left,y:w.top}:d};a.useScrollPosition=(b,m,h,w,y,v)=>{const A=s.useRef(g({useWindow:w,boundingElement:v}));let S=null;const M=()=>{const T=g({element:h,useWindow:w,boundingElement:v});b({prevPos:A.current,currPos:T}),A.current=T,S=null};c.useIsomorphicLayoutEffect(()=>{var T;if(!i)return;const k=()=>{y?S===null&&(S=setTimeout(M,y)):M()};return v?(T=v.current)===null||T===void 0||T.addEventListener("scroll",k,{passive:!0}):window.addEventListener("scroll",k,{passive:!0}),()=>{var N;v?(N=v.current)===null||N===void 0||N.removeEventListener("scroll",k):window.removeEventListener("scroll",k),S&&clearTimeout(S)}},m)},a.useScrollPosition.defaultProps={deps:[],element:!1,useWindow:!1,wait:null,boundingElement:!1}}(pf)),pf}var Wg;function z3(){return Wg||(Wg=1,function(a){Object.defineProperty(a,"__esModule",{value:!0});var s=D3();Object.defineProperty(a,"useScrollPosition",{enumerable:!0,get:function(){return s.useScrollPosition}})}(mf)),mf}var O3=z3(),gf={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var e1;function B3(){return e1||(e1=1,function(a){(function(){var s={}.hasOwnProperty;function c(){for(var f="",g=0;g<arguments.length;g++){var b=arguments[g];b&&(f=d(f,i(b)))}return f}function i(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return c.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var g="";for(var b in f)s.call(f,b)&&f[b]&&(g=d(g,b));return g}function d(f,g){return g?f?f+" "+g:f+g:f}a.exports?(c.default=c,a.exports=c):window.classNames=c})()}(gf)),gf.exports}var $3=B3();const K3=nh($3);function U3(a,s){if(a==null)return{};var c={};for(var i in a)if({}.hasOwnProperty.call(a,i)){if(s.indexOf(i)!==-1)continue;c[i]=a[i]}return c}function Zf(a,s){return Zf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,i){return c.__proto__=i,c},Zf(a,s)}function L3(a,s){a.prototype=Object.create(s.prototype),a.prototype.constructor=a,Zf(a,s)}function H3(a){return a&&a.ownerDocument||document}function Q3(a){var s=H3(a);return s&&s.defaultView||window}function q3(a,s){return Q3(a).getComputedStyle(a,s)}var Y3=/([A-Z])/g;function P3(a){return a.replace(Y3,"-$1").toLowerCase()}var F3=/^ms-/;function Ss(a){return P3(a).replace(F3,"-ms-")}var V3=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function G3(a){return!!(a&&V3.test(a))}function gc(a,s){var c="",i="";if(typeof s=="string")return a.style.getPropertyValue(Ss(s))||q3(a).getPropertyValue(Ss(s));Object.keys(s).forEach(function(d){var f=s[d];!f&&f!==0?a.style.removeProperty(Ss(d)):G3(d)?i+=d+"("+f+") ":c+=Ss(d)+": "+f+";"}),i&&(c+="transform: "+i+";"),a.style.cssText+=";"+c}const t1={disabled:!1},zb=Le.createContext(null);var Z3=function(s){return s.scrollTop},Vl="unmounted",Cn="exited",En="entering",ia="entered",bc="exiting",Gr=function(a){L3(s,a);function s(i,d){var f;f=a.call(this,i,d)||this;var g=d,b=g&&!g.isMounting?i.enter:i.appear,m;return f.appearStatus=null,i.in?b?(m=Cn,f.appearStatus=En):m=ia:i.unmountOnExit||i.mountOnEnter?m=Vl:m=Cn,f.state={status:m},f.nextCallback=null,f}s.getDerivedStateFromProps=function(d,f){var g=d.in;return g&&f.status===Vl?{status:Cn}:null};var c=s.prototype;return c.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},c.componentDidUpdate=function(d){var f=null;if(d!==this.props){var g=this.state.status;this.props.in?g!==En&&g!==ia&&(f=En):(g===En||g===ia)&&(f=bc)}this.updateStatus(!1,f)},c.componentWillUnmount=function(){this.cancelNextCallback()},c.getTimeouts=function(){var d=this.props.timeout,f,g,b;return f=g=b=d,d!=null&&typeof d!="number"&&(f=d.exit,g=d.enter,b=d.appear!==void 0?d.appear:g),{exit:f,enter:g,appear:b}},c.updateStatus=function(d,f){if(d===void 0&&(d=!1),f!==null)if(this.cancelNextCallback(),f===En){if(this.props.unmountOnExit||this.props.mountOnEnter){var g=this.props.nodeRef?this.props.nodeRef.current:Pl.findDOMNode(this);g&&Z3(g)}this.performEnter(d)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Cn&&this.setState({status:Vl})},c.performEnter=function(d){var f=this,g=this.props.enter,b=this.context?this.context.isMounting:d,m=this.props.nodeRef?[b]:[Pl.findDOMNode(this),b],h=m[0],w=m[1],y=this.getTimeouts(),v=b?y.appear:y.enter;if(!d&&!g||t1.disabled){this.safeSetState({status:ia},function(){f.props.onEntered(h)});return}this.props.onEnter(h,w),this.safeSetState({status:En},function(){f.props.onEntering(h,w),f.onTransitionEnd(v,function(){f.safeSetState({status:ia},function(){f.props.onEntered(h,w)})})})},c.performExit=function(){var d=this,f=this.props.exit,g=this.getTimeouts(),b=this.props.nodeRef?void 0:Pl.findDOMNode(this);if(!f||t1.disabled){this.safeSetState({status:Cn},function(){d.props.onExited(b)});return}this.props.onExit(b),this.safeSetState({status:bc},function(){d.props.onExiting(b),d.onTransitionEnd(g.exit,function(){d.safeSetState({status:Cn},function(){d.props.onExited(b)})})})},c.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},c.safeSetState=function(d,f){f=this.setNextCallback(f),this.setState(d,f)},c.setNextCallback=function(d){var f=this,g=!0;return this.nextCallback=function(b){g&&(g=!1,f.nextCallback=null,d(b))},this.nextCallback.cancel=function(){g=!1},this.nextCallback},c.onTransitionEnd=function(d,f){this.setNextCallback(f);var g=this.props.nodeRef?this.props.nodeRef.current:Pl.findDOMNode(this),b=d==null&&!this.props.addEndListener;if(!g||b){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var m=this.props.nodeRef?[this.nextCallback]:[g,this.nextCallback],h=m[0],w=m[1];this.props.addEndListener(h,w)}d!=null&&setTimeout(this.nextCallback,d)},c.render=function(){var d=this.state.status;if(d===Vl)return null;var f=this.props,g=f.children;f.in,f.mountOnEnter,f.unmountOnExit,f.appear,f.enter,f.exit,f.timeout,f.addEndListener,f.onEnter,f.onEntering,f.onEntered,f.onExit,f.onExiting,f.onExited,f.nodeRef;var b=U3(f,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Le.createElement(zb.Provider,{value:null},typeof g=="function"?g(d,b):Le.cloneElement(Le.Children.only(g),b))},s}(Le.Component);Gr.contextType=zb;Gr.propTypes={};function Ja(){}Gr.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ja,onEntering:Ja,onEntered:Ja,onExit:Ja,onExiting:Ja,onExited:Ja};Gr.UNMOUNTED=Vl;Gr.EXITED=Cn;Gr.ENTERING=En;Gr.ENTERED=ia;Gr.EXITING=bc;function X3(){const a=C.version.split(".");return{major:+a[0],minor:+a[1],patch:+a[2]}}function I3(a){if(!a||typeof a=="function")return null;const{major:s}=X3();return s>=19?a.props.ref:a.ref}const J3=!!(typeof window<"u"&&window.document&&window.document.createElement);var Xf=!1,If=!1;try{var bf={get passive(){return Xf=!0},get once(){return If=Xf=!0}};J3&&(window.addEventListener("test",bf,bf),window.removeEventListener("test",bf,!0))}catch{}function W3(a,s,c,i){if(i&&typeof i!="boolean"&&!If){var d=i.once,f=i.capture,g=c;!If&&d&&(g=c.__once||function b(m){this.removeEventListener(s,b,f),c.call(this,m)},c.__once=g),a.addEventListener(s,g,Xf?i:f)}a.addEventListener(s,c,i)}function ej(a,s,c,i){var d=i&&typeof i!="boolean"?i.capture:i;a.removeEventListener(s,c,d),c.__once&&a.removeEventListener(s,c.__once,d)}function Ob(a,s,c,i){return W3(a,s,c,i),function(){ej(a,s,c,i)}}function tj(a,s,c,i){if(i===void 0&&(i=!0),a){var d=document.createEvent("HTMLEvents");d.initEvent(s,c,i),a.dispatchEvent(d)}}function rj(a){var s=gc(a,"transitionDuration")||"",c=s.indexOf("ms")===-1?1e3:1;return parseFloat(s)*c}function nj(a,s,c){c===void 0&&(c=5);var i=!1,d=setTimeout(function(){i||tj(a,"transitionend",!0)},s+c),f=Ob(a,"transitionend",function(){i=!0},{once:!0});return function(){clearTimeout(d),f()}}function aj(a,s,c,i){c==null&&(c=rj(a)||0);var d=nj(a,c,i),f=Ob(a,"transitionend",s);return function(){d(),f()}}function r1(a,s){const c=gc(a,s)||"",i=c.indexOf("ms")===-1?1e3:1;return parseFloat(c)*i}function oj(a,s){const c=r1(a,"transitionDuration"),i=r1(a,"transitionDelay"),d=aj(a,f=>{f.target===a&&(d(),s(f))},c+i)}function Sl(...a){return a.filter(s=>s!=null).reduce((s,c)=>{if(typeof c!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return s===null?c:function(...d){s.apply(this,d),c.apply(this,d)}},null)}function lj(a){a.offsetHeight}const n1=a=>!a||typeof a=="function"?a:s=>{a.current=s};function ij(a,s){const c=n1(a),i=n1(s);return d=>{c&&c(d),i&&i(d)}}function sj(a,s){return C.useMemo(()=>ij(a,s),[a,s])}function cj(a){return a&&"setState"in a?Pl.findDOMNode(a):a??null}const uj=Le.forwardRef(({onEnter:a,onEntering:s,onEntered:c,onExit:i,onExiting:d,onExited:f,addEndListener:g,children:b,childRef:m,...h},w)=>{const y=C.useRef(null),v=sj(y,m),A=H=>{v(cj(H))},S=H=>L=>{H&&y.current&&H(y.current,L)},M=C.useCallback(S(a),[a]),T=C.useCallback(S(s),[s]),k=C.useCallback(S(c),[c]),N=C.useCallback(S(i),[i]),E=C.useCallback(S(d),[d]),z=C.useCallback(S(f),[f]),K=C.useCallback(S(g),[g]);return r.jsx(Gr,{ref:w,...h,onEnter:M,onEntered:k,onEntering:T,onExit:N,onExited:z,onExiting:E,addEndListener:K,nodeRef:y,children:typeof b=="function"?(H,L)=>b(H,{...L,ref:A}):Le.cloneElement(b,{ref:A})})}),dj={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function fj(a,s){const c=`offset${a[0].toUpperCase()}${a.slice(1)}`,i=s[c],d=dj[a];return i+parseInt(gc(s,d[0]),10)+parseInt(gc(s,d[1]),10)}const hj={[Cn]:"collapse",[bc]:"collapsing",[En]:"collapsing",[ia]:"collapse show"},a1=Le.forwardRef(({onEnter:a,onEntering:s,onEntered:c,onExit:i,onExiting:d,className:f,children:g,dimension:b="height",in:m=!1,timeout:h=300,mountOnEnter:w=!1,unmountOnExit:y=!1,appear:v=!1,getDimensionValue:A=fj,...S},M)=>{const T=typeof b=="function"?b():b,k=C.useMemo(()=>Sl(H=>{H.style[T]="0"},a),[T,a]),N=C.useMemo(()=>Sl(H=>{const L=`scroll${T[0].toUpperCase()}${T.slice(1)}`;H.style[T]=`${H[L]}px`},s),[T,s]),E=C.useMemo(()=>Sl(H=>{H.style[T]=null},c),[T,c]),z=C.useMemo(()=>Sl(H=>{H.style[T]=`${A(T,H)}px`,lj(H)},i),[i,A,T]),K=C.useMemo(()=>Sl(H=>{H.style[T]=null},d),[T,d]);return r.jsx(uj,{ref:M,addEndListener:oj,...S,"aria-expanded":S.role?m:null,onEnter:k,onEntering:N,onEntered:E,onExit:z,onExiting:K,childRef:I3(g),in:m,timeout:h,mountOnEnter:w,unmountOnExit:y,appear:v,children:(H,L)=>Le.cloneElement(g,{...L,className:K3(f,g.props.className,hj[H],T==="width"&&"collapse-horizontal")})})}),mj=(a,s)=>({...a,...s}),pj={active:"",activeSubmenu:""};function gj(){const{iconHover:a,sidebarposition:s,headerposition:c,sidebarLayout:i,ChangeIconSidebar:d}=C.useContext(ti),[f,g]=C.useReducer(mj,pj),[b,m]=C.useState(!0);O3.useScrollPosition(({prevPos:v,currPos:A})=>{const S=A.y>v.y;S!==b&&m(S)},[b]);const h=v=>{g({active:v}),f.active===v&&g({active:""})},w=v=>{g({activeSubmenu:v}),f.activeSubmenu===v&&g({activeSubmenu:""})};let y=window.location.pathname;return y=y.split("/"),y=y[y.length-1],C.useEffect(()=>{Xg.forEach(v=>{var A;(A=v.content)==null||A.forEach(S=>{var M;y===S.to&&g({active:v.title}),(M=S.content)==null||M.forEach(T=>{y===T.to&&g({activeSubmenu:S.title,active:v.title})})})})},[y]),r.jsx(r.Fragment,{children:r.jsx("div",{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),className:`ic-sidenav ${a} ${s.value==="fixed"&&i.value==="horizontal"&&c.value==="static"&&b>120?"fixed":""}`,children:r.jsx("div",{className:"ic-sidenav-scroll",children:r.jsx("ul",{className:"metismenu",id:"menu",children:Xg.map((v,A)=>{let S=v.classsChange;return S==="menu-title"?r.jsx("li",{className:S,children:v.title},A):r.jsx("li",{className:` ${f.active===v.title?"mm-active":""} ${v.to===y?"mm-active":""}`,children:v.content&&v.content.length>0?r.jsxs(r.Fragment,{children:[r.jsxs(ye,{to:"#",className:"has-arrow",onClick:()=>{h(v.title)},children:[v.iconStyle,r.jsxs("span",{className:"nav-text",children:[" ",v.title," "]}),r.jsx("span",{className:"badge badge-xs style-1 badge-danger",children:v.update})]}),r.jsx(a1,{in:f.active===v.title,children:r.jsx("ul",{className:`${S==="mm-collapse"?"mm-show":""}`,children:v.content&&v.content.map((M,T)=>r.jsx("li",{className:`${f.activeSubmenu===M.title?"mm-active":""}`,children:M.content&&M.content.length>0?r.jsxs(r.Fragment,{children:[r.jsx(ye,{to:`/${M.to}`,className:` ${M.hasMenu?"has-arrow":""} ${M.to===y?"mm-active":""} `,onClick:()=>{w(M.title)},children:M.title}),r.jsx(a1,{in:f.activeSubmenu===M.title,children:r.jsx("ul",{className:`${S==="mm-collapse"?"mm-show":""}`,children:M.content&&M.content.map((k,N)=>r.jsx(C.Fragment,{children:r.jsx("li",{children:r.jsx(ye,{className:`${y===k.to?"mm-active":""}`,to:`/${k.to}`,children:k.title})})},N))})})]}):r.jsxs(ye,{to:`/${M.to}`,className:`${M.to===y?"mm-active":""}`,children:[" ",M.title,"  "]})},T))})})]}):r.jsxs(ye,{to:`/${v.to}`,children:[" ",v.iconStyle," ",r.jsxs("span",{className:"nav-text",children:[" ",v.title," "]})," "]})},A)})})})})})}const bj="/assets/user-profile-CVj7iLx6.png",o1={userProfile:bj},Zt={fullscreen:r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsxs("g",{clipPath:"url(#clip0_5_876)",children:[r.jsx("path",{d:"M5.5 5.5L0.833334 0.833334M0.833334 0.833334L0.833334 5.5M0.833334 0.833334L5.5 0.833334",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12.5 5.5L17.1667 0.833334M17.1667 0.833334L12.5 0.833334M17.1667 0.833334L17.1667 5.5",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.5 12.5L0.833334 17.1667M0.833334 17.1667L5.5 17.1667M0.833334 17.1667L0.833334 12.5",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12.5 12.5L17.1667 17.1667M17.1667 17.1667L17.1667 12.5M17.1667 17.1667L12.5 17.1667",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("defs",{children:[" ",r.jsxs("clipPath",{id:"clip0_5_876",children:[" ",r.jsx("rect",{width:"18",height:"18",fill:"white"})," "]})," "]})]}),threeline:r.jsxs("svg",{className:"ms-2 mt-1 h-line",width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("rect",{y:"0.5",width:"12",height:"1",fill:"white"}),r.jsx("rect",{y:"4.5",width:"12",height:"1",fill:"white"}),r.jsx("rect",{y:"8.5",width:"12",height:"1",fill:"white"})]}),edit:r.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M18.379 8.44975L8.96409 17.8648C8.68489 18.144 8.32929 18.3343 7.9421 18.4117L5.00037 19.0001L5.58872 16.0583C5.66615 15.6711 5.85646 15.3155 6.13565 15.0363L15.5506 5.62132M18.379 8.44975L19.7932 7.03553C20.1837 6.64501 20.1837 6.01184 19.7932 5.62132L18.379 4.20711C17.9885 3.81658 17.3553 3.81658 16.9648 4.20711L15.5506 5.62132M18.379 8.44975L15.5506 5.62132",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),profile:r.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20Z",fill:"white",fillOpacity:"0.25"}),r.jsx("circle",{cx:"19.9997",cy:"16.6667",r:"6.66667",fill:"white"}),r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.4335 30.5196C30.4904 30.6167 30.4727 30.7398 30.3915 30.8178C27.6957 33.4079 24.034 35 20.0004 35C15.9668 35 12.3051 33.4079 9.60933 30.8179C9.52818 30.7399 9.51048 30.6169 9.56735 30.5198C11.4843 27.2465 15.4363 25 20.0005 25C24.5645 25 28.5165 27.2464 30.4335 30.5196Z",fill:"white"})]}),msg:r.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M6.66699 17.4718C6.66699 16.269 6.66699 15.6676 6.96569 15.1843C7.26439 14.701 7.80231 14.432 8.87814 13.8941L18.2115 9.22744C19.0893 8.78853 19.5282 8.56908 20.0003 8.56908C20.4725 8.56908 20.9114 8.78853 21.7892 9.22744L31.1225 13.8941C32.1983 14.432 32.7363 14.701 33.035 15.1843C33.3337 15.6676 33.3337 16.269 33.3337 17.4718V27.6663C33.3337 29.552 33.3337 30.4948 32.7479 31.0806C32.1621 31.6663 31.2193 31.6663 29.3337 31.6663H10.667C8.78137 31.6663 7.83857 31.6663 7.25278 31.0806C6.66699 30.4948 6.66699 29.552 6.66699 27.6663V17.4718Z",fill:"white",fillOpacity:"0.25"}),r.jsx("path",{d:"M6.66699 29.667V16.9097C6.66699 16.7982 6.78434 16.7257 6.88407 16.7755L18.6587 22.6628C19.5033 23.0851 20.4974 23.0851 21.342 22.6628L33.1166 16.7755C33.2163 16.7257 33.3337 16.7982 33.3337 16.9097V29.667C33.3337 30.7716 32.4382 31.667 31.3337 31.667H8.66699C7.56242 31.667 6.66699 30.7716 6.66699 29.667Z",fill:"white"})]}),taskboard:r.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("rect",{x:"6.66699",y:"5",width:"26.6667",height:"30",rx:"2",fill:"white",fillOpacity:"0.25"}),r.jsx("path",{d:"M6.66699 31.6663C6.66699 30.4202 6.66699 29.7971 6.93494 29.333C7.11048 29.029 7.36295 28.7765 7.66699 28.601C8.13109 28.333 8.75417 28.333 10.0003 28.333H29.3337C31.2193 28.333 32.1621 28.333 32.7479 27.7472C33.3337 27.1614 33.3337 26.2186 33.3337 24.333V23.333V30.9997C33.3337 32.8853 33.3337 33.8281 32.7479 34.4139C32.1621 34.9997 31.2193 34.9997 29.3337 34.9997H10.0003C8.75417 34.9997 8.13109 34.9997 7.66699 34.7317C7.36295 34.5562 7.11048 34.3037 6.93494 33.9997C6.66699 33.5356 6.66699 32.9125 6.66699 31.6663V31.6663Z",fill:"white"}),r.jsx("path",{d:"M15.833 17.5003L19.0603 20.7276C19.1189 20.7862 19.2138 20.7862 19.2724 20.7276L25.833 14.167",stroke:"white",strokeWidth:"1.2"})]}),help:r.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("rect",{x:"26.667",y:"20",width:"6.66667",height:"11.6667",rx:"3",fill:"white",fillOpacity:"0.25",stroke:"white",strokeWidth:"1.2",strokeLinejoin:"round"}),r.jsx("rect",{x:"6.66699",y:"20",width:"6.66667",height:"11.6667",rx:"3",fill:"white",fillOpacity:"0.25",stroke:"white",strokeWidth:"1.2",strokeLinejoin:"round"}),r.jsx("path",{d:"M6.66699 21.667V26.667",stroke:"white",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M33.333 21.667V26.667",stroke:"white",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M33.3337 21.667C33.3337 17.6887 31.9289 13.8734 29.4284 11.0604C26.9279 8.24735 23.5365 6.66699 20.0003 6.66699C16.4641 6.66699 13.0727 8.24734 10.5722 11.0604C8.07175 13.8734 6.66699 17.6887 6.66699 21.667",stroke:"white",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),setting:r.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M9.97675 9.02568L5.65322 17.1923C4.92539 18.5671 4.56147 19.2545 4.56147 19.9997C4.56147 20.7448 4.92539 21.4322 5.65322 22.807L9.97675 30.9737C10.8001 32.5289 11.2118 33.3066 11.9258 33.7365C12.6398 34.1663 13.5197 34.1663 15.2795 34.1663H24.7212C26.4809 34.1663 27.3608 34.1663 28.0748 33.7365C28.7888 33.3066 29.2005 32.5289 30.0239 30.9737L34.3474 22.807C35.0753 21.4322 35.4392 20.7448 35.4392 19.9997C35.4392 19.2545 35.0753 18.5671 34.3474 17.1923L30.0239 9.02568C29.2005 7.47041 28.7888 6.69278 28.0748 6.26289C27.3608 5.83301 26.4809 5.83301 24.7212 5.83301H15.2795C13.5197 5.83301 12.6398 5.83301 11.9258 6.26289C11.2118 6.69278 10.8001 7.47041 9.97675 9.02568Z",fill:"white",fillOpacity:"0.25"}),r.jsx("circle",{cx:"20",cy:"20",r:"5",fill:"white"})]}),security:r.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M6.66699 18.667C6.66699 17.7242 6.66699 17.2528 6.95989 16.9599C7.25278 16.667 7.72418 16.667 8.66699 16.667H31.3337C32.2765 16.667 32.7479 16.667 33.0408 16.9599C33.3337 17.2528 33.3337 17.7242 33.3337 18.667V30.2106C33.3337 31.7105 33.3337 32.4604 32.9101 33.0029C32.4865 33.5455 31.7589 33.7273 30.3038 34.0911L29.7018 34.2416C24.8755 35.4482 22.4624 36.0515 20.0003 36.0515C17.5382 36.0515 15.1251 35.4482 10.2989 34.2416L9.69685 34.0911C8.24173 33.7273 7.51417 33.5455 7.09058 33.0029C6.66699 32.4604 6.66699 31.7105 6.66699 30.2106V18.667Z",fill:"white",fillOpacity:"0.25"}),r.jsx("path",{d:"M27.5 16.6667V15C27.5 12.6703 27.5 11.5054 27.1194 10.5866C26.6119 9.36144 25.6386 8.38807 24.4134 7.8806C23.4946 7.5 22.3297 7.5 20 7.5V7.5C17.6703 7.5 16.5054 7.5 15.5866 7.8806C14.3614 8.38807 13.3881 9.36144 12.8806 10.5866C12.5 11.5054 12.5 12.6703 12.5 15V16.6667",stroke:"white"}),r.jsx("circle",{cx:"20.0003",cy:"25.0003",r:"3.33333",fill:"white"}),r.jsx("path",{d:"M12 16V18.5",stroke:"white",strokeLinecap:"round"})]}),plan:r.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M6.66699 7C6.66699 5.89543 7.56242 5 8.66699 5H31.3337C32.4382 5 33.3337 5.89543 33.3337 7V31.7639C33.3337 33.2507 31.769 34.2177 30.4392 33.5528L20.8948 28.7805C20.3317 28.499 19.669 28.499 19.1059 28.7805L9.56142 33.5528C8.23162 34.2177 6.66699 33.2507 6.66699 31.7639V7Z",fill:"white",fillOpacity:"0.25"}),r.jsx("rect",{x:"10",y:"8.33301",width:"20",height:"3.33333",rx:"1.66667",fill:"white"})]}),feedback:r.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M5 12.667C5 9.83857 5 8.42435 5.87868 7.54567C6.75736 6.66699 8.17157 6.66699 11 6.66699H29C31.8284 6.66699 33.2426 6.66699 34.1213 7.54567C35 8.42435 35 9.83857 35 12.667V15.417C35 15.6493 35 15.7655 34.9808 15.8621C34.9019 16.2588 34.5918 16.5689 34.1951 16.6478C34.0985 16.667 33.9823 16.667 33.75 16.667H33.3333C33.0238 16.667 32.869 16.667 32.7385 16.6784C31.2882 16.8053 30.1383 17.9552 30.0114 19.4055C30 19.536 30 19.6908 30 20.0003C30 20.3099 30 20.4646 30.0114 20.5951C30.1383 22.0455 31.2882 23.1954 32.7385 23.3222C32.869 23.3337 33.0238 23.3337 33.3333 23.3337H33.75C33.9823 23.3337 34.0985 23.3337 34.1951 23.3529C34.5918 23.4318 34.9019 23.7419 34.9808 24.1386C35 24.2352 35 24.3513 35 24.5837V27.3337C35 30.1621 35 31.5763 34.1213 32.455C33.2426 33.3337 31.8284 33.3337 29 33.3337H11C8.17157 33.3337 6.75736 33.3337 5.87868 32.455C5 31.5763 5 30.1621 5 27.3337V24.5837C5 24.3513 5 24.2352 5.01921 24.1386C5.09812 23.7419 5.40822 23.4318 5.80491 23.3529C5.90151 23.3337 6.01767 23.3337 6.25 23.3337H6.66667C6.97621 23.3337 7.13098 23.3337 7.26147 23.3222C8.71181 23.1954 9.8617 22.0455 9.98858 20.5951C10 20.4646 10 20.3099 10 20.0003C10 19.6908 10 19.536 9.98858 19.4055C9.8617 17.9552 8.71181 16.8053 7.26147 16.6784C7.13098 16.667 6.97621 16.667 6.66667 16.667H6.25C6.01767 16.667 5.90151 16.667 5.80491 16.6478C5.40822 16.5689 5.09812 16.2588 5.01921 15.8621C5 15.7655 5 15.6493 5 15.417V12.667Z",fill:"white",fillOpacity:"0.25"}),r.jsx("path",{d:"M19.5961 13.885C19.7958 13.6118 20.2035 13.6118 20.4033 13.885L22.3343 16.5259C22.396 16.6103 22.4826 16.6733 22.582 16.7059L25.6903 17.7263C26.0119 17.8318 26.1379 18.2196 25.9398 18.494L24.0248 21.1466C23.9636 21.2314 23.9305 21.3332 23.9302 21.4377L23.9203 24.7093C23.9193 25.0477 23.5894 25.2874 23.2672 25.1838L20.1527 24.1822C20.0532 24.1502 19.9461 24.1502 19.8466 24.1822L16.7321 25.1838C16.4099 25.2874 16.0801 25.0477 16.079 24.7093L16.0691 21.4377C16.0688 21.3332 16.0357 21.2314 15.9745 21.1466L14.0596 18.494C13.8615 18.2196 13.9875 17.8318 14.309 17.7263L17.4174 16.7059C17.5167 16.6733 17.6034 16.6103 17.6651 16.5259L19.5961 13.885Z",fill:"white"})]}),logout:r.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{opacity:"0.25",d:"M28.6325 11.2111L16.3162 7.10573C15.6687 6.88989 15 7.37186 15 8.05442V31.9462C15 32.6288 15.6687 33.1108 16.3162 32.8949L28.6325 28.7895C29.4491 28.5173 30 27.753 30 26.8921V13.1085C30 12.2476 29.4491 11.4834 28.6325 11.2111Z",fill:"white"}),r.jsx("path",{d:"M19.1663 15.833L23.333 19.9997M23.333 19.9997L19.1663 24.1663M23.333 19.9997H6.66634",stroke:"white",strokeLinecap:"round"})]})};var $t={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5,fullscreen:6},l1=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],i1=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],s1=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"],St=typeof window<"u"&&typeof window.document<"u"?window.document:{},Xt="fullscreenEnabled"in St&&Object.keys($t)||l1[0]in St&&l1||i1[0]in St&&i1||s1[0]in St&&s1||[],xf={requestFullscreen:function(a){return a[Xt[$t.requestFullscreen]]()},requestFullscreenFunction:function(a){return a[Xt[$t.requestFullscreen]]},get exitFullscreen(){return St[Xt[$t.exitFullscreen]].bind(St)},get fullscreenPseudoClass(){return":"+Xt[$t.fullscreen]},addEventListener:function(a,s,c){return St.addEventListener(Xt[$t[a]],s,c)},removeEventListener:function(a,s,c){return St.removeEventListener(Xt[$t[a]],s,c)},get fullscreenEnabled(){return!!St[Xt[$t.fullscreenEnabled]]},set fullscreenEnabled(a){},get fullscreenElement(){return St[Xt[$t.fullscreenElement]]},set fullscreenElement(a){},get onfullscreenchange(){return St[("on"+Xt[$t.fullscreenchange]).toLowerCase()]},set onfullscreenchange(a){return St[("on"+Xt[$t.fullscreenchange]).toLowerCase()]=a},get onfullscreenerror(){return St[("on"+Xt[$t.fullscreenerror]).toLowerCase()]},set onfullscreenerror(a){return St[("on"+Xt[$t.fullscreenerror]).toLowerCase()]=a}};function xj(){const{background:a,changeBackground:s}=C.useContext(ti),{user:c}=dh(),i=()=>{a.value==="dark"?s({value:"light",label:"Light"}):s({value:"dark",label:"Dark"})},d=()=>{xf.fullscreenElement?xf.exitFullscreen():xf.requestFullscreen(document.documentElement).catch(f=>{console.error(`Error attempting to enable full-screen mode: ${f.message}`)})};return r.jsx(r.Fragment,{children:r.jsx("div",{className:"header",children:r.jsx("div",{className:"header-content",children:r.jsx("nav",{className:"navbar navbar-expand",children:r.jsxs("div",{className:"collapse navbar-collapse justify-content-between",children:[r.jsx("div",{className:"header-left",children:r.jsxs("ul",{className:"navbar-nav header-left",children:[r.jsx("li",{className:"nav-item d-flex align-items-center",children:r.jsxs("div",{className:"input-group search-area",children:[r.jsx("span",{className:"input-group-text pe-2",children:r.jsx(ye,{to:"#",children:r.jsx("i",{className:"flaticon-search-interface-symbol"})})}),r.jsx("input",{type:"text",className:"form-control ps-0",placeholder:"Search anything"})]})}),r.jsx("li",{className:"nav-item dropdown notification_dropdown",children:r.jsxs("button",{className:`ic-theme-mode ${a.value==="dark"?"active":""}`,onClick:()=>i(),type:"button",children:[r.jsx("span",{className:"light",children:"Light"}),r.jsx("span",{className:"dark",children:"Dark"})]})})]})}),r.jsxs("ul",{className:"navbar-nav header-right",children:[r.jsx("li",{className:"nav-item dropdown notification_dropdown",children:r.jsxs(ye,{className:"nav-link dz-fullscreen",to:"#",onClick:d,children:[" ",Zt.fullscreen," "]})}),r.jsxs("li",{className:"nav-item dropdown header-profile",children:[r.jsxs(ye,{className:"nav-link",to:"#",role:"button","data-bs-toggle":"dropdown",children:[r.jsx("img",{src:o1.userProfile,width:"20",height:"20",alt:"user",style:{borderRadius:"50%",objectFit:"cover"}}),r.jsx("div",{className:"header-info ms-3",children:r.jsx("span",{className:"fs-14 font-w600 mb-0",children:(c==null?void 0:c.name)||"User"})}),Zt.threeline]}),r.jsx("div",{className:"profile-detail card",children:r.jsxs("div",{className:"card-body p-0",children:[r.jsxs("div",{className:"d-flex profile-media justify-content-between align-items-center",children:[r.jsxs("div",{className:"d-flex align-items-center",children:[r.jsx("img",{src:o1.userProfile,alt:"img",style:{borderRadius:"50%",width:"50px",height:"50px",objectFit:"cover"}}),r.jsxs("div",{className:"ms-3",children:[r.jsxs("h4",{className:"mb-0",children:[(c==null?void 0:c.name)||"User"," "]}),r.jsx("p",{className:"mb-0",children:(c==null?void 0:c.email)||"email@example.com"})]})]}),r.jsx(ye,{to:"/edit-profile",children:r.jsxs("div",{className:"icon-box",children:[" ",Zt.edit," "]})})]}),r.jsx("div",{className:"media-box",children:r.jsxs("ul",{className:"d-flex flex-colunm gap-2 flex-wrap",children:[r.jsx("li",{children:r.jsx(ye,{to:"/app-profile",children:r.jsxs("div",{className:"icon-box-lg",children:[" ",Zt.profile," ",r.jsx("p",{children:" Profile "})," "]})})}),r.jsx("li",{children:r.jsx(ye,{to:"/message",children:r.jsxs("div",{className:"icon-box-lg",children:[" ",Zt.msg," ",r.jsx("p",{children:"Message"})," "]})})}),r.jsx("li",{children:r.jsx(ye,{to:"/note",children:r.jsxs("div",{className:"icon-box-lg",children:[" ",Zt.taskboard," ",r.jsx("p",{children:"Taskboard"})," "]})})}),r.jsx("li",{children:r.jsx(ye,{to:"#",children:r.jsxs("div",{className:"icon-box-lg",children:[" ",Zt.help," ",r.jsx("p",{children:"Help"})," "]})})}),r.jsx("li",{children:r.jsxs("div",{className:"icon-box-lg",children:[" ",Zt.setting," ",r.jsx("p",{children:"Settings"})," "]})}),r.jsx("li",{children:r.jsx("div",{className:"icon-box-lg",children:r.jsxs(ye,{to:"#",children:[Zt.security," ",r.jsx("p",{children:"Security"})]})})}),r.jsx("li",{children:r.jsxs("div",{className:"icon-box-lg",children:[" ",Zt.plan," ",r.jsx("p",{children:"Plans"})," "]})}),r.jsx("li",{children:r.jsx("div",{className:"icon-box-lg",children:r.jsxs(ye,{to:"#",children:[Zt.feedback," ",r.jsx("p",{children:" Feedback "})]})})}),r.jsx("li",{children:r.jsx(ye,{to:"/page-login",children:r.jsxs("div",{className:"icon-box-lg",children:[" ",Zt.logout," ",r.jsx("p",{children:" Logout "})," "]})})})]})})]})})]})]})]})})})})})}const vj=({title:a,onClick:s})=>{const[c,i]=C.useState(""),d=f=>i(c===f?"":f);return r.jsxs(C.Fragment,{children:[r.jsx(j3,{}),r.jsx(C3,{onClick:()=>d("chatbox"),toggle:c}),r.jsx(xj,{onNote:()=>d("chatbox"),onNotification:()=>d("notification"),onProfile:()=>d("profile"),toggle:c,title:a,onBox:()=>d("box"),onClick:()=>s()}),r.jsx(gj,{})]})},yj=()=>{var a=new Date;return r.jsx("div",{className:"footer",children:r.jsx("div",{className:"copyright",children:r.jsxs("p",{children:["Copyright © Designed & Developed by"," ",r.jsx("a",{href:"http://dexignlab.com/",target:"_blank",rel:"noreferrer",children:"DexignLab"})," ",a.getFullYear()]})})})},jj=()=>{const[a,s]=C.useState(""),[c,i]=C.useState(""),[d,f]=C.useState(""),{login:g}=dh(),b=Ct(),m=h=>{if(h.preventDefault(),f(""),!a||!c){f("Please fill in all fields");return}const y=JSON.parse(localStorage.getItem("registeredUsers")||"[]").find(v=>v.email===a&&v.password===c);if(y){const v={id:y.id,name:y.name,email:y.email,role:y.role,avatar:y.avatar||"/src/assets/images/avatar/default.jpg"};g(v),b("/dashboard");return}a==="superadmin@example.com"&&c==="password"?(g({id:"1",name:"Super Admin User",email:a,role:"SUPER_ADMIN",avatar:"/src/assets/images/avatar/default.jpg"}),b("/dashboard")):a==="admin@example.com"&&c==="password"?(g({id:"2",name:"Admin User",email:a,role:"ADMIN",avatar:"/src/assets/images/avatar/default.jpg"}),b("/dashboard")):a==="manager@example.com"&&c==="password"?(g({id:"3",name:"Manager User",email:a,role:"MANAGER",avatar:"/src/assets/images/avatar/default.jpg"}),b("/dashboard")):a==="student@example.com"&&c==="password"?(g({id:"4",name:"Student User",email:a,role:"STUDENT",avatar:"/src/assets/images/avatar/default.jpg"}),b("/dashboard")):f("Invalid email or password")};return r.jsx("div",{className:"login-container d-flex align-items-center justify-content-center min-vh-100",children:r.jsx("div",{className:"card shadow-lg",style:{width:"400px"},children:r.jsxs("div",{className:"card-body p-5",children:[r.jsxs("div",{className:"text-center mb-4",children:[r.jsx("h2",{className:"card-title",children:"Login to Educareer"}),r.jsx("p",{className:"text-muted",children:"Enter your credentials to access the system"})]}),d&&r.jsx("div",{className:"alert alert-danger",role:"alert",children:d}),r.jsxs("form",{onSubmit:m,children:[r.jsxs("div",{className:"mb-3",children:[r.jsx("label",{htmlFor:"email",className:"form-label",children:"Email address"}),r.jsx("input",{type:"email",className:"form-control",id:"email",value:a,onChange:h=>s(h.target.value),placeholder:"Enter your email",required:!0})]}),r.jsxs("div",{className:"mb-3",children:[r.jsx("label",{htmlFor:"password",className:"form-label",children:"Password"}),r.jsx("input",{type:"password",className:"form-control",id:"password",value:c,onChange:h=>i(h.target.value),placeholder:"Enter your password",required:!0})]}),r.jsx("button",{type:"submit",className:"btn btn-primary w-100",children:"Login"})]}),r.jsxs("div",{className:"mt-4 text-center",children:[r.jsxs("p",{className:"mb-2",children:["Don't have an account? ",r.jsx(ye,{to:"/register",children:"Register here"})]}),r.jsxs("small",{className:"text-muted",children:["Demo accounts:",r.jsx("br",{}),"superadmin@example.com / password (SUPER_ADMIN)",r.jsx("br",{}),"admin@example.com / password (ADMIN)",r.jsx("br",{}),"manager@example.com / password (MANAGER)",r.jsx("br",{}),"student@example.com / password (STUDENT)"]})]})]})})})},wj=()=>{const[a,s]=C.useState(""),[c,i]=C.useState(""),[d,f]=C.useState(""),[g,b]=C.useState(""),[m,h]=C.useState("STUDENT"),[w,y]=C.useState(""),v=Ct(),A=S=>{if(S.preventDefault(),y(""),!a||!c||!d||!g){y("Please fill in all fields");return}if(d!==g){y("Passwords do not match");return}if(d.length<6){y("Password must be at least 6 characters long");return}const M=JSON.parse(localStorage.getItem("registeredUsers")||"[]");if(M.some(k=>k.email===c)){y("User with this email already exists");return}const T={id:Date.now().toString(),name:a,email:c,password:d,role:m,avatar:"/src/assets/images/avatar/default.jpg"};M.push(T),localStorage.setItem("registeredUsers",JSON.stringify(M)),v("/login")};return r.jsx("div",{className:"login-container d-flex align-items-center justify-content-center min-vh-100",children:r.jsx("div",{className:"card shadow-lg",style:{width:"400px"},children:r.jsxs("div",{className:"card-body p-5",children:[r.jsxs("div",{className:"text-center mb-4",children:[r.jsx("h2",{className:"card-title",children:"Register for Educareer"}),r.jsx("p",{className:"text-muted",children:"Create your account to get started"})]}),w&&r.jsx("div",{className:"alert alert-danger",role:"alert",children:w}),r.jsxs("form",{onSubmit:A,children:[r.jsxs("div",{className:"mb-3",children:[r.jsx("label",{htmlFor:"name",className:"form-label",children:"Full Name"}),r.jsx("input",{type:"text",className:"form-control",id:"name",value:a,onChange:S=>s(S.target.value),placeholder:"Enter your full name",required:!0})]}),r.jsxs("div",{className:"mb-3",children:[r.jsx("label",{htmlFor:"email",className:"form-label",children:"Email address"}),r.jsx("input",{type:"email",className:"form-control",id:"email",value:c,onChange:S=>i(S.target.value),placeholder:"Enter your email",required:!0})]}),r.jsxs("div",{className:"mb-3",children:[r.jsx("label",{htmlFor:"role",className:"form-label",children:"Role"}),r.jsxs("select",{className:"form-control",id:"role",value:m,onChange:S=>h(S.target.value),required:!0,children:[r.jsx("option",{value:"STUDENT",children:"Student"}),r.jsx("option",{value:"MANAGER",children:"Manager"}),r.jsx("option",{value:"ADMIN",children:"Admin"}),r.jsx("option",{value:"SUPER_ADMIN",children:"Super Admin"})]})]}),r.jsxs("div",{className:"mb-3",children:[r.jsx("label",{htmlFor:"password",className:"form-label",children:"Password"}),r.jsx("input",{type:"password",className:"form-control",id:"password",value:d,onChange:S=>f(S.target.value),placeholder:"Enter your password",required:!0})]}),r.jsxs("div",{className:"mb-3",children:[r.jsx("label",{htmlFor:"confirmPassword",className:"form-label",children:"Confirm Password"}),r.jsx("input",{type:"password",className:"form-control",id:"confirmPassword",value:g,onChange:S=>b(S.target.value),placeholder:"Confirm your password",required:!0})]}),r.jsx("button",{type:"submit",className:"btn btn-primary w-100",children:"Register"})]}),r.jsx("div",{className:"mt-4 text-center",children:r.jsxs("p",{className:"mb-0",children:["Already have an account? ",r.jsx(ye,{to:"/login",children:"Login here"})]})})]})})})},Aj=p.div`
  padding: 24px;
`,Sj=p.div`
  margin-bottom: 24px;
`,kj=p.h2`
  font-size: 22px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
`,Cj=p.p`
  color: #6b7280;
  font-size: 14px;
`,Bb=p.div`
  background: white;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  padding: 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
`,Ej=p.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`,In=p(Bb)`
  display: flex;
  flex-direction: column;
`,Jn=p.span`
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 10px;
`,Wn=p.span`
  font-size: 26px;
  font-weight: 600;
  color: #111827;
`,Mj=p(Bb)`
  margin-top: 10px;
`,Nj=p.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #111827;
`,Tj=p.table`
  width: 100%;
  border-collapse: collapse;
`,ks=p.th`
  text-align: left;
  font-size: 13px;
  color: #6b7280;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e7eb;
`,It=p.td`
  padding: 14px 0;
  font-size: 14px;
  color: #111827;
  border-bottom: 1px solid #f3f4f6;
`,vf=p.span`
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;

  background: ${a=>a.type==="success"?"#ecfdf5":a.type==="warning"?"#fffbeb":"#fef2f2"};

  color: ${a=>a.type==="success"?"#059669":a.type==="warning"?"#d97706":"#dc2626"};
`;function c1(){return r.jsxs(Aj,{children:[r.jsxs(Sj,{children:[r.jsx(kj,{children:"Good Morning"}),r.jsx(Cj,{children:"This is your admin dashboard overview"})]}),r.jsxs(Ej,{children:[r.jsxs(In,{children:[r.jsx(Jn,{children:"Total Users"}),r.jsx(Wn,{children:"12,540"})]}),r.jsxs(In,{children:[r.jsx(Jn,{children:"Active Subscriptions"}),r.jsx(Wn,{children:"8,230"})]}),r.jsxs(In,{children:[r.jsx(Jn,{children:" Paid User"}),r.jsx(Wn,{children:"4,320"})]}),r.jsxs(In,{children:[r.jsx(Jn,{children:"Total Document"}),r.jsx(Wn,{children:"1,284"})]}),r.jsxs(In,{children:[r.jsx(Jn,{children:"New Users (This Month)"}),r.jsx(Wn,{children:"1,200"})]}),r.jsxs(In,{children:[r.jsx(Jn,{children:"Question Paper"}),r.jsx(Wn,{children:"320"})]}),r.jsxs(In,{children:[r.jsx(Jn,{children:"Revenue (This Month)"}),r.jsx(Wn,{children:"₹4,25,000"})]})]}),r.jsxs(Mj,{children:[r.jsx(Nj,{children:"Recent User Activity"}),r.jsxs(Tj,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx(ks,{children:"User"}),r.jsx(ks,{children:"Action"}),r.jsx(ks,{children:"Date"}),r.jsx(ks,{children:"Status"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx(It,{children:"Ananya Sharma"}),r.jsx(It,{children:"Purchased Subscription"}),r.jsx(It,{children:"Today"}),r.jsx(It,{children:r.jsx(vf,{type:"success",children:"Completed"})})]}),r.jsxs("tr",{children:[r.jsx(It,{children:"Rahul Verma"}),r.jsx(It,{children:"Downloaded Notes"}),r.jsx(It,{children:"Yesterday"}),r.jsx(It,{children:r.jsx(vf,{type:"success",children:"Success"})})]}),r.jsxs("tr",{children:[r.jsx(It,{children:"Priya Nair"}),r.jsx(It,{children:"Payment Failed"}),r.jsx(It,{children:"2 Days Ago"}),r.jsx(It,{children:r.jsx(vf,{type:"danger",children:"Failed"})})]})]})]})]})]})}const _j=()=>{const[a,s]=C.useState([{id:1,name:"Midterm Exam",subject:"Python Programming",duration:120,totalMarks:100,passingMarks:40,active:!0},{id:2,name:"Final Exam",subject:"Python Programming",duration:180,totalMarks:100,passingMarks:40,active:!0}]),[c,i]=C.useState(null),d=[{name:"name",label:"Test Name",type:"text",placeholder:"e.g., Midterm Exam",required:!0},{name:"subject",label:"Subject",type:"select",options:[{value:"Python Programming",label:"Python Programming"},{value:"Web Development",label:"Web Development"},{value:"Data Science",label:"Data Science"}],required:!0},{name:"duration",label:"Duration (minutes)",type:"number",placeholder:"120",required:!0},{name:"totalMarks",label:"Total Marks",type:"number",placeholder:"100",required:!0},{name:"passingMarks",label:"Passing Marks",type:"number",placeholder:"40",required:!0},{name:"active",label:"Status",type:"toggle"}],f=[{key:"name",label:"Test Name",sortable:!0},{key:"subject",label:"Subject"},{key:"duration",label:"Duration (min)"},{key:"totalMarks",label:"Total Marks"},{key:"passingMarks",label:"Passing Marks"},{key:"active",label:"Status",render:m=>r.jsx("span",{className:`badge ${m?"bg-success":"bg-secondary"}`,children:m?"Active":"Inactive"})}],g=m=>{c?(s(a.map(h=>h.id===c.id?{...h,...m}:h)),i(null)):s([...a,{id:Date.now(),...m,duration:parseInt(m.duration),totalMarks:parseInt(m.totalMarks),passingMarks:parseInt(m.passingMarks)}])},b=m=>{s(a.filter(h=>h.id!==m.id))};return r.jsxs("div",{className:"p-4",children:[r.jsx(rr,{fields:d,title:c?"Edit Test":"Create New Test",submitLabel:c?"Update":"Create",onSubmit:g,initialData:c||{name:"",subject:"",duration:"",totalMarks:"",passingMarks:"",active:!0}}),r.jsx(nr,{columns:f,data:a,title:"Test Configuration List",onEdit:m=>i(m),onDelete:b,searchFields:["name","subject"]})]})},Rj=()=>{const[a,s]=C.useState([{id:1,name:"Quiz",description:"Short assessment",weight:10},{id:2,name:"Midterm",description:"Mid-semester examination",weight:30},{id:3,name:"Final",description:"Final examination",weight:60}]),[c,i]=C.useState(null),d=[{name:"name",label:"Category Name",type:"text",placeholder:"e.g., Quiz",required:!0},{name:"description",label:"Description",type:"textarea",placeholder:"Category description"},{name:"weight",label:"Weight (%)",type:"number",placeholder:"10",required:!0}],f=[{key:"name",label:"Category Name",sortable:!0},{key:"description",label:"Description"},{key:"weight",label:"Weight (%)"}],g=m=>{c?(s(a.map(h=>h.id===c.id?{...h,...m}:h)),i(null)):s([...a,{id:Date.now(),...m,weight:parseInt(m.weight)}])},b=m=>{s(a.filter(h=>h.id!==m.id))};return r.jsxs("div",{className:"p-4",children:[r.jsx(rr,{fields:d,title:c?"Edit Category":"Create New Category",submitLabel:c?"Update":"Create",onSubmit:g,initialData:c||{name:"",description:"",weight:""}}),r.jsx(nr,{columns:f,data:a,title:"Test Category List",onEdit:m=>i(m),onDelete:b,searchFields:["name"]})]})},Dj=()=>{const a=[{id:"config",label:"⚙️ Test Configuration",icon:"⚙️",content:r.jsx(_j,{})},{id:"categories",label:"📂 Test Categories",icon:"📂",content:r.jsx(Rj,{})}];return r.jsx(vh,{pageTitle:"Test Settings",pageDescription:"Configure and manage test configurations and categories",pageIcon:"📝",tabs:a,viewMode:"tabs"})},zj=()=>{const[a,s]=C.useState([{id:1,subscriptionType:"Premium",dailyPoints:10,monthlyBonus:100,active:!0},{id:2,subscriptionType:"Standard",dailyPoints:5,monthlyBonus:50,active:!0}]),[c,i]=C.useState(null),d=[{name:"subscriptionType",label:"Subscription Type",type:"text",placeholder:"e.g., Premium",required:!0},{name:"dailyPoints",label:"Daily Points",type:"number",placeholder:"10",required:!0},{name:"monthlyBonus",label:"Monthly Bonus Points",type:"number",placeholder:"100",required:!0},{name:"active",label:"Active",type:"toggle"}],f=[{key:"subscriptionType",label:"Subscription Type",sortable:!0},{key:"dailyPoints",label:"Daily Points"},{key:"monthlyBonus",label:"Monthly Bonus"},{key:"active",label:"Status",render:m=>r.jsx("span",{className:`badge ${m?"bg-success":"bg-secondary"}`,children:m?"Active":"Inactive"})}],g=m=>{c?(s(a.map(h=>h.id===c.id?{...h,...m}:h)),i(null)):s([...a,{id:Date.now(),...m,dailyPoints:parseInt(m.dailyPoints),monthlyBonus:parseInt(m.monthlyBonus)}])},b=m=>{s(a.filter(h=>h.id!==m.id))};return r.jsxs("div",{className:"p-4",children:[r.jsx(rr,{fields:d,title:c?"Edit Rule":"Create New Subscription Rule",submitLabel:c?"Update":"Create",onSubmit:g,initialData:c||{subscriptionType:"",dailyPoints:"",monthlyBonus:"",active:!0}}),r.jsx(nr,{columns:f,data:a,title:"Subscription Based Rules",onEdit:m=>i(m),onDelete:b,searchFields:["subscriptionType"]})]})},Oj=()=>{const[a,s]=C.useState([{id:1,ruleName:"Monthly Reset",resetDay:1,maxPointsBefore:1e3,active:!0},{id:2,ruleName:"Quarterly Reset",resetDay:90,maxPointsBefore:5e3,active:!0}]),[c,i]=C.useState(null),d=[{name:"ruleName",label:"Rule Name",type:"text",placeholder:"e.g., Monthly Reset",required:!0},{name:"resetDay",label:"Reset Every (days)",type:"number",placeholder:"1",required:!0},{name:"maxPointsBefore",label:"Max Points Before Reset",type:"number",placeholder:"1000",required:!0},{name:"active",label:"Active",type:"toggle"}],f=[{key:"ruleName",label:"Rule Name",sortable:!0},{key:"resetDay",label:"Reset Days"},{key:"maxPointsBefore",label:"Max Points"},{key:"active",label:"Status",render:m=>r.jsx("span",{className:`badge ${m?"bg-success":"bg-secondary"}`,children:m?"Active":"Inactive"})}],g=m=>{c?(s(a.map(h=>h.id===c.id?{...h,...m}:h)),i(null)):s([...a,{id:Date.now(),...m,resetDay:parseInt(m.resetDay),maxPointsBefore:parseInt(m.maxPointsBefore)}])},b=m=>{s(a.filter(h=>h.id!==m.id))};return r.jsxs("div",{className:"p-4",children:[r.jsx(rr,{fields:d,title:c?"Edit Reset Rule":"Create New Reset Rule",submitLabel:c?"Update":"Create",onSubmit:g,initialData:c||{ruleName:"",resetDay:"",maxPointsBefore:"",active:!0}}),r.jsx(nr,{columns:f,data:a,title:"Reset Rules",onEdit:m=>i(m),onDelete:b,searchFields:["ruleName"]})]})},Bj=()=>{const[a,s]=C.useState([{id:1,action:"Login",points:5,maxDaily:5,active:!0},{id:2,action:"Solve Question",points:10,maxDaily:50,active:!0},{id:3,action:"View Lecture",points:3,maxDaily:30,active:!0}]),[c,i]=C.useState(null),d=[{name:"action",label:"Action",type:"text",placeholder:"e.g., Login",required:!0},{name:"points",label:"Points Per Action",type:"number",placeholder:"5",required:!0},{name:"maxDaily",label:"Max Daily Points",type:"number",placeholder:"50",required:!0},{name:"active",label:"Active",type:"toggle"}],f=[{key:"action",label:"Action",sortable:!0},{key:"points",label:"Points Per Action"},{key:"maxDaily",label:"Max Daily"},{key:"active",label:"Status",render:m=>r.jsx("span",{className:`badge ${m?"bg-success":"bg-secondary"}`,children:m?"Active":"Inactive"})}],g=m=>{c?(s(a.map(h=>h.id===c.id?{...h,...m}:h)),i(null)):s([...a,{id:Date.now(),...m,points:parseInt(m.points),maxDaily:parseInt(m.maxDaily)}])},b=m=>{s(a.filter(h=>h.id!==m.id))};return r.jsxs("div",{className:"p-4",children:[r.jsx(rr,{fields:d,title:c?"Edit Daily Usage Rule":"Create New Daily Usage Rule",submitLabel:c?"Update":"Create",onSubmit:g,initialData:c||{action:"",points:"",maxDaily:"",active:!0}}),r.jsx(nr,{columns:f,data:a,title:"Daily Usage Points",onEdit:m=>i(m),onDelete:b,searchFields:["action"]})]})},$j=()=>{const[a,s]=C.useState([{id:1,difficultyLevel:"Easy",points:5,approvalRequired:!1,active:!0},{id:2,difficultyLevel:"Medium",points:10,approvalRequired:!0,active:!0},{id:3,difficultyLevel:"Hard",points:20,approvalRequired:!0,active:!0}]),[c,i]=C.useState(null),d=[{name:"difficultyLevel",label:"Difficulty Level",type:"select",options:[{value:"Easy",label:"Easy"},{value:"Medium",label:"Medium"},{value:"Hard",label:"Hard"}],required:!0},{name:"points",label:"Points",type:"number",placeholder:"5",required:!0},{name:"approvalRequired",label:"Admin Approval Required",type:"toggle"},{name:"active",label:"Active",type:"toggle"}],f=[{key:"difficultyLevel",label:"Difficulty Level",sortable:!0},{key:"points",label:"Points"},{key:"approvalRequired",label:"Approval Required",render:m=>r.jsx("span",{className:`badge ${m?"bg-warning":"bg-success"}`,children:m?"Yes":"No"})},{key:"active",label:"Status",render:m=>r.jsx("span",{className:`badge ${m?"bg-success":"bg-secondary"}`,children:m?"Active":"Inactive"})}],g=m=>{c?(s(a.map(h=>h.id===c.id?{...h,...m}:h)),i(null)):s([...a,{id:Date.now(),...m,points:parseInt(m.points)}])},b=m=>{s(a.filter(h=>h.id!==m.id))};return r.jsxs("div",{className:"p-4",children:[r.jsx(rr,{fields:d,title:c?"Edit Question Points":"Create New Question Points Rule",submitLabel:c?"Update":"Create",onSubmit:g,initialData:c||{difficultyLevel:"",points:"",approvalRequired:!1,active:!0}}),r.jsx(nr,{columns:f,data:a,title:"Points Per Approved Questions",onEdit:m=>i(m),onDelete:b,searchFields:["difficultyLevel"]})]})},Kj=()=>{const[a,s]=C.useState([{id:1,uploadType:"Single Choice Question",points:3,maxPerDay:20,active:!0},{id:2,uploadType:"Multiple Choice Question",points:5,maxPerDay:20,active:!0},{id:3,uploadType:"Essay Question",points:10,maxPerDay:10,active:!0}]),[c,i]=C.useState(null),d=[{name:"uploadType",label:"Upload Type",type:"text",placeholder:"e.g., Single Choice Question",required:!0},{name:"points",label:"Points Per Upload",type:"number",placeholder:"3",required:!0},{name:"maxPerDay",label:"Max Per Day",type:"number",placeholder:"20",required:!0},{name:"active",label:"Active",type:"toggle"}],f=[{key:"uploadType",label:"Upload Type",sortable:!0},{key:"points",label:"Points Per Upload"},{key:"maxPerDay",label:"Max Per Day"},{key:"active",label:"Status",render:m=>r.jsx("span",{className:`badge ${m?"bg-success":"bg-secondary"}`,children:m?"Active":"Inactive"})}],g=m=>{c?(s(a.map(h=>h.id===c.id?{...h,...m}:h)),i(null)):s([...a,{id:Date.now(),...m,points:parseInt(m.points),maxPerDay:parseInt(m.maxPerDay)}])},b=m=>{s(a.filter(h=>h.id!==m.id))};return r.jsxs("div",{className:"p-4",children:[r.jsx(rr,{fields:d,title:c?"Edit Upload Points":"Create New Upload Points Rule",submitLabel:c?"Update":"Create",onSubmit:g,initialData:c||{uploadType:"",points:"",maxPerDay:"",active:!0}}),r.jsx(nr,{columns:f,data:a,title:"Points Per Question Upload",onEdit:m=>i(m),onDelete:b,searchFields:["uploadType"]})]})},Uj=()=>{const[a,s]=C.useState([{id:1,testType:"Quiz",pointsPerCorrect:2,pointsPerIncorrect:-.5,maxPointsPerTest:50,active:!0},{id:2,testType:"Midterm",pointsPerCorrect:5,pointsPerIncorrect:-1,maxPointsPerTest:200,active:!0},{id:3,testType:"Final Exam",pointsPerCorrect:10,pointsPerIncorrect:-2,maxPointsPerTest:500,active:!0}]),[c,i]=C.useState(null),d=[{name:"testType",label:"Test Type",type:"text",placeholder:"e.g., Quiz",required:!0},{name:"pointsPerCorrect",label:"Points Per Correct Answer",type:"number",placeholder:"2",required:!0},{name:"pointsPerIncorrect",label:"Points Per Incorrect (Negative)",type:"number",placeholder:"-0.5",required:!0},{name:"maxPointsPerTest",label:"Max Points Per Test",type:"number",placeholder:"50",required:!0},{name:"active",label:"Active",type:"toggle"}],f=[{key:"testType",label:"Test Type",sortable:!0},{key:"pointsPerCorrect",label:"Correct Answer"},{key:"pointsPerIncorrect",label:"Incorrect Answer"},{key:"maxPointsPerTest",label:"Max Points"},{key:"active",label:"Status",render:m=>r.jsx("span",{className:`badge ${m?"bg-success":"bg-secondary"}`,children:m?"Active":"Inactive"})}],g=m=>{c?(s(a.map(h=>h.id===c.id?{...h,...m}:h)),i(null)):s([...a,{id:Date.now(),...m,pointsPerCorrect:parseFloat(m.pointsPerCorrect),pointsPerIncorrect:parseFloat(m.pointsPerIncorrect),maxPointsPerTest:parseInt(m.maxPointsPerTest)}])},b=m=>{s(a.filter(h=>h.id!==m.id))};return r.jsxs("div",{className:"p-4",children:[r.jsx(rr,{fields:d,title:c?"Edit Test Points":"Create New Test Points Rule",submitLabel:c?"Update":"Create",onSubmit:g,initialData:c||{testType:"",pointsPerCorrect:"",pointsPerIncorrect:"",maxPointsPerTest:"",active:!0}}),r.jsx(nr,{columns:f,data:a,title:"Points Per Test",onEdit:m=>i(m),onDelete:b,searchFields:["testType"]})]})},Lj=()=>{const a=[{id:"subscription",label:"📋 Subscription Based Rules",icon:"📋",content:r.jsx(zj,{})},{id:"reset",label:"🔄 Reset Rules",icon:"🔄",content:r.jsx(Oj,{})},{id:"daily",label:"📅 Daily Usage Points",icon:"📅",content:r.jsx(Bj,{})},{id:"approved-questions",label:"✅ Points Per Approved Questions",icon:"✅",content:r.jsx($j,{})},{id:"question-upload",label:"⬆️ Points Per Question Upload",icon:"⬆️",content:r.jsx(Kj,{})},{id:"test",label:"📝 Points Per Test",icon:"📝",content:r.jsx(Uj,{})}];return r.jsx(vh,{pageTitle:"Point System",pageDescription:"Configure all point earning rules and system",pageIcon:"⭐",tabs:a,viewMode:"tabs"})};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=(...a)=>a.filter((s,c,i)=>!!s&&s.trim()!==""&&i.indexOf(s)===c).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hj=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qj=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,c,i)=>i?i.toUpperCase():c.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=a=>{const s=Qj(a);return s.charAt(0).toUpperCase()+s.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qj={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yj=a=>{for(const s in a)if(s.startsWith("aria-")||s==="role"||s==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pj=C.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:c=2,absoluteStrokeWidth:i,className:d="",children:f,iconNode:g,...b},m)=>C.createElement("svg",{ref:m,...qj,width:s,height:s,stroke:a,strokeWidth:i?Number(c)*24/Number(s):c,className:$b("lucide",d),...!f&&!Yj(b)&&{"aria-hidden":"true"},...b},[...g.map(([h,w])=>C.createElement(h,w)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=(a,s)=>{const c=C.forwardRef(({className:i,...d},f)=>C.createElement(Pj,{ref:f,iconNode:s,className:$b(`lucide-${Hj(u1(a))}`,`lucide-${a}`,i),...d}));return c.displayName=u1(a),c};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fj=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Kb=le("activity",Fj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vj=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],zc=le("archive",Vj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gj=[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]],Zj=le("arrow-down-right",Gj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xj=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ij=le("arrow-left",Xj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jj=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],yf=le("arrow-up-right",Jj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wj=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],ho=le("award",Wj);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=[["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],t6=le("ban",e6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Oc=le("book-open",r6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Jf=le("calendar",n6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],yh=le("chart-column",a6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ub=le("check",o6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Pe=le("chevron-down",l6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],jh=le("chevron-left",i6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],wh=le("chevron-right",s6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Bc=le("circle-alert",c6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],at=le("circle-check-big",u6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],mo=le("circle-question-mark",d6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Wf=le("circle-x",f6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],d1=le("circle",h6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ut=le("clock",m6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],oi=le("copy",p6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Lb=le("credit-card",g6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],xc=le("crown",b6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Ah=le("dollar-sign",x6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],dr=le("download",v6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],ua=le("ellipsis",y6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],gt=le("eye",j6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],A6=le("file-spreadsheet",w6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Jt=le("file-text",S6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}]],C6=le("file",k6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Wt=le("funnel",E6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],N6=le("globe",M6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Hb=le("graduation-cap",T6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],R6=le("image",_6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],Qb=le("link-2",D6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],vc=le("lock",z6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],yc=le("mail",O6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],f1=le("menu",B6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],qb=le("message-square",$6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],da=le("plus",K6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]],L6=le("presentation",U6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],Q6=le("printer",H6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],h1=le("receipt",q6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Yb=le("refresh-cw",Y6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Pb=le("save",P6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Zr=le("search",F6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],uc=le("settings",V6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],lo=le("shield",G6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Tn=le("square-pen",Z6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],ei=le("star",X6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=[["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}],["path",{d:"M17 14V2",key:"8ymqnk"}]],m1=le("thumbs-down",I6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=[["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}],["path",{d:"M7 10v12",key:"1qc93n"}]],p1=le("thumbs-up",J6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],yo=le("trash-2",W6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],t7=le("trending-up",e7);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Sh=le("upload",r7);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=[["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m14.305 16.53.923-.382",key:"1itpsq"}],["path",{d:"m15.228 13.852-.923-.383",key:"eplpkm"}],["path",{d:"m16.852 12.228-.383-.923",key:"13v3q0"}],["path",{d:"m16.852 17.772-.383.924",key:"1i8mnm"}],["path",{d:"m19.148 12.228.383-.923",key:"1q8j1v"}],["path",{d:"m19.53 18.696-.382-.924",key:"vk1qj3"}],["path",{d:"m20.772 13.852.924-.383",key:"n880s0"}],["path",{d:"m20.772 16.148.924.383",key:"1g6xey"}],["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Fb=le("user-cog",n7);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],kh=le("user",a7);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],cr=le("users",o7);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],kt=le("x",l7);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],io=le("zap",i7),s7=Ar`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`,c7=p.div`
  display: flex;
  height: 100vh;
  background-color: #f9fafb;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`,u7=p.div`
  flex: 1;
  overflow: auto;
`,d7=p.div`
  padding: 2rem;
`,f7=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`,h7=p.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;

    @media (prefers-color-scheme: dark) {
      color: #9ca3af;
    }
  }
`,m7=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Vb=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #1d4ed8;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #3b82f6;
    &:hover {
      background-color: #2563eb;
    }
  }
`,p7=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background-color: white;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: #6b7280;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    color: #e5e7eb;
    border-color: #4b5563;

    &:hover {
      background-color: #4b5563;
    }

    svg {
      color: #9ca3af;
    }
  }
`,g7=p.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,b7=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,x7=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${a=>a.bg};
  border-radius: 0.5rem;
  color: ${a=>a.color};
  flex-shrink: 0;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,v7=p.div`
  flex: 1;
`,y7=p.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.125rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,j7=p.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,w7=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,A7=p.div`
  padding: 1.25rem;
`,S7=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`,k7=p.div`
  position: relative;
  flex: 1;
  min-width: 300px;

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
  }
`,C7=p.input`
  width: 100%;
  padding: 0.625rem 0.75rem 0.625rem 2.25rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: white;

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }
  }
`,E7=p.div`
  position: relative;
  min-width: 160px;

  select {
    appearance: none;
    width: 100%;
    padding: 0.625rem 2rem 0.625rem 2.25rem;
    font-size: 0.875rem;
    background-color: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    cursor: pointer;
    color: #374151;
    
    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
    }

    @media (prefers-color-scheme: dark) {
      background-color: #374151;
      border-color: #4b5563;
      color: white;
    }
  }

  svg {
    position: absolute;
    pointer-events: none;
    
    &:first-of-type {
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      color: #9ca3af;
    }
    
    &:last-of-type {
      right: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      color: #9ca3af;
    }
  }
`,M7=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: #4b5563;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #f9fafb;
    color: #111827;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: #d1d5db;

    &:hover {
      background-color: #4b5563;
      color: white;
    }
  }
`,N7=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;
  margin-bottom: 2rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,T7=p.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }
`,_7=p.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,R7=p.p`
  font-size: 0.875rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,D7=p.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  overflow-x: auto;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }
`,z7=p.button`
  padding: 1rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${a=>a.active?"#2563eb":"#6b7280"};
  background: none;
  border: none;
  border-bottom: 2px solid ${a=>a.active?"#2563eb":"transparent"};
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: -1px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;

  &:hover {
    color: ${a=>a.active?"#2563eb":"#374151"};
  }

  @media (prefers-color-scheme: dark) {
    color: ${a=>a.active?"#60a5fa":"#9ca3af"};
    
    &:hover {
      color: ${a=>a.active?"#60a5fa":"#e5e7eb"};
    }
  }
`,O7=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  padding: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,g1=p.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;p.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;const b1=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 1rem;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #374151;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-color: #4b5563;
    color: #e5e7eb;
  }
`,x1=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  color: #6b7280;
  flex-shrink: 0;

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,v1=p.span`
  flex: 1;
`,y1=p.span`
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  background-color: ${a=>{switch(a.type){case"role-change":return"#eff6ff";case"export":return"#f3f4f6";case"block":return"#fef2f2";case"assign-points":return"#fef3c7";default:return"#f3f4f6"}}};
  color: ${a=>{switch(a.type){case"role-change":return"#1e40af";case"export":return"#374151";case"block":return"#991b1b";case"assign-points":return"#92400e";default:return"#374151"}}};
  border: 1px solid ${a=>{switch(a.type){case"role-change":return"#bfdbfe";case"export":return"#e5e7eb";case"block":return"#fecaca";case"assign-points":return"#fde68a";default:return"#e5e7eb"}}};
  margin-left: 0.5rem;

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>{switch(a.type){case"role-change":return"rgba(37, 99, 235, 0.2)";case"export":return"rgba(55, 65, 81, 0.5)";case"block":return"rgba(220, 38, 38, 0.2)";case"assign-points":return"rgba(245, 158, 11, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${a=>{switch(a.type){case"role-change":return"#93c5fd";case"export":return"#d1d5db";case"block":return"#fca5a5";case"assign-points":return"#fcd34d";default:return"#d1d5db"}}};
    border-color: ${a=>{switch(a.type){case"role-change":return"rgba(37, 99, 235, 0.3)";case"export":return"rgba(75, 85, 99, 0.5)";case"block":return"rgba(220, 38, 38, 0.3)";case"assign-points":return"rgba(245, 158, 11, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,j1=p.button`
  width: 2rem;
  height: 1.125rem;
  border-radius: 9999px;
  background-color: ${a=>a.active?"#2563eb":"#e5e7eb"};
  border: none;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 50%;
    background-color: white;
    top: 0.125rem;
    left: ${a=>a.active?"1rem":"0.125rem"};
    transition: left 0.2s;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>a.active?"#3b82f6":"#4b5563"};
  }
`,B7=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-top-color: #4b5563;
  }
`,$7=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #374151;

  svg {
    width: 1rem;
    height: 1rem;
    color: #2563eb;
  }

  @media (prefers-color-scheme: dark) {
    color: #e5e7eb;

    svg {
      color: #60a5fa;
    }
  }
`,K7=p(Vb)`
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
`,U7=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;
  margin-top: 2rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,L7=p.div`
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }
`,H7=p.div`
  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }
  p {
    font-size: 0.875rem;
    color: #6b7280;

    @media (prefers-color-scheme: dark) {
      color: #9ca3af;
    }
  }
`,Q7=p.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  background-color: #eff6ff;
  color: #2563eb;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
  border: 1px solid #bfdbfe;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(37, 99, 235, 0.2);
    color: #60a5fa;
    border-color: rgba(37, 99, 235, 0.3);
  }
`,q7=p.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-bottom: 1px solid #e5e7eb;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }
`,Y7=p.div`
  padding: 1.25rem 1.5rem;
  border-right: ${a=>a.isLast?"none":"1px solid #e5e7eb"};
  background-color: #fafafa;

  @media (max-width: 1024px) {
    border-right: ${a=>a.isLast?"none":"1px solid #e5e7eb"};
  }

  @media (max-width: 640px) {
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
    
    &:last-child {
      border-bottom: none;
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-right-color: #4b5563;
    border-bottom-color: #4b5563;
  }
`,P7=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`,F7=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: ${a=>`${a.color}10`};
  color: ${a=>a.color};
  border-radius: 0.5rem;

  svg {
    width: 1rem;
    height: 1rem;
  }
`,V7=p.div`
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.125rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,G7=p.div`
  font-size: 0.75rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,Z7=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 0.25rem;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a1a1a1;
  }

  @media (prefers-color-scheme: dark) {
    &::-webkit-scrollbar-track {
      background: #374151;
    }
    &::-webkit-scrollbar-thumb {
      background: #4b5563;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #6b7280;
    }
  }
`,X7=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  
  &:hover {
    background-color: #f9fafb;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #4b5563;
    color: #e5e7eb;

    &:hover {
      background-color: #2d3748;
    }
  }
`,I7=p.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #374151;
  font-weight: 400;
  text-transform: capitalize;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    color: #9ca3af;
  }

  @media (prefers-color-scheme: dark) {
    color: #e5e7eb;

    svg {
      color: #6b7280;
    }
  }
`,J7=p.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.7rem;
  color: ${a=>a.visible?"#059669":"#9ca3af"};
  
  svg {
    width: 0.7rem;
    height: 0.7rem;
  }

  @media (prefers-color-scheme: dark) {
    color: ${a=>a.visible?"#86efac":"#6b7280"};
  }
`,W7=()=>{const[a,s]=C.useState("admin"),[c,i]=C.useState(""),d=[{id:"super-admin",name:"Super Admin",users:2,color:"#7c3aed",icon:lo},{id:"admin",name:"Admin",users:8,color:"#2563eb",icon:cr},{id:"manager",name:"Manager",users:15,color:"#0891b2",icon:uc},{id:"student",name:"Student",users:245,color:"#059669",icon:cr}],f=[{label:"Total Roles",value:"4",icon:lo,bg:"#eff6ff",color:"#2563eb"},{label:"Total Users",value:"270",icon:cr,bg:"#ecfdf5",color:"#10b981"},{label:"Permissions",value:"24",icon:vc,bg:"#fef3c7",color:"#f59e0b"},{label:"Menu Items",value:"18",icon:f1,bg:"#f3e8ff",color:"#8b5cf6"},{label:"Active Today",value:"156",icon:gt,bg:"#fee2e2",color:"#ef4444"}],g=["Dashboard","Users","Payments","Documents","Modules","Questions","Student Questions","Academic Settings","Subscriptions","Points Rules","Test Settings","System Settings","Audit Logs","File Limits","Reports","Analytics","Notifications","Support Tickets"],b={"super-admin":g,admin:["Dashboard","Users","Payments","Documents","Modules","Questions","Student Questions","Academic Settings","Subscriptions","Points Rules","Test Settings","Audit Logs","Reports","Analytics"],manager:["Dashboard","Documents","Modules","Questions","Student Questions","Test Settings","Reports","Analytics","Notifications"],student:["Dashboard","Documents","Modules","Questions","Student Questions","Support Tickets"]},m=g.filter(y=>y.toLowerCase().includes(c.toLowerCase())),h=[{icon:gt,text:"dashboard"},{icon:cr,text:"users → role change",badge:{type:"role-change",label:"role change"}},{icon:Ah,text:"payments → export",badge:{type:"export",label:"export"}},{icon:Oc,text:"modules"},{icon:mo,text:"questions → assign points",badge:{type:"assign-points",label:"assign points"}},{icon:uc,text:"academic settings"},{icon:ho,text:"points rules"}],w=[{icon:cr,text:"users"},{icon:vc,text:"users → block",badge:{type:"block",label:"block"}},{icon:Jt,text:"documents"},{icon:mo,text:"questions"},{icon:cr,text:"student questions"},{icon:Lb,text:"subscriptions"},{icon:uc,text:"test settings"}];return r.jsxs(r.Fragment,{children:[r.jsx(s7,{}),r.jsx(c7,{children:r.jsx(u7,{children:r.jsxs(d7,{children:[r.jsxs(f7,{children:[r.jsxs(h7,{children:[r.jsx("h1",{children:"Role Permissions"}),r.jsx("p",{children:"Configure which permissions each role has access to"})]}),r.jsxs(m7,{children:[r.jsxs(p7,{children:[r.jsx(dr,{size:16}),"Export"]}),r.jsxs(Vb,{children:[r.jsx(da,{size:16}),"New Role"]})]})]}),r.jsx(g7,{children:f.map((y,v)=>{const A=y.icon;return r.jsxs(b7,{children:[r.jsx(x7,{bg:y.bg,color:y.color,children:r.jsx(A,{})}),r.jsxs(v7,{children:[r.jsx(y7,{children:y.label}),r.jsx(j7,{children:y.value})]})]},v)})}),r.jsx(w7,{children:r.jsx(A7,{children:r.jsxs(S7,{children:[r.jsxs(k7,{children:[r.jsx(Zr,{size:16}),r.jsx(C7,{type:"text",placeholder:"Search permissions...",value:c,onChange:y=>i(y.target.value)})]}),r.jsxs(E7,{children:[r.jsx(Wt,{size:16}),r.jsxs("select",{children:[r.jsx("option",{value:"all",children:"All Roles"}),r.jsx("option",{value:"super-admin",children:"Super Admin"}),r.jsx("option",{value:"admin",children:"Admin"}),r.jsx("option",{value:"manager",children:"Manager"}),r.jsx("option",{value:"student",children:"Student"})]}),r.jsx(Pe,{size:16})]}),c&&r.jsxs(M7,{onClick:()=>i(""),children:[r.jsx(kt,{size:16}),"Clear"]})]})})}),r.jsxs(N7,{children:[r.jsxs(T7,{children:[r.jsx(_7,{children:"Role Permissions"}),r.jsx(R7,{children:"Configure which permissions each role has access to."})]}),r.jsx(D7,{children:d.map(y=>r.jsx(z7,{active:a===y.id,onClick:()=>s(y.id),children:y.name},y.id))}),r.jsxs(O7,{children:[r.jsx(g1,{children:h.map((y,v)=>r.jsxs(b1,{children:[r.jsx(x1,{children:r.jsx(y.icon,{})}),r.jsxs(v1,{children:[y.text,y.badge&&r.jsx(y1,{type:y.badge.type,children:y.badge.label})]}),r.jsx(j1,{active:a==="admin"||a==="super-admin"})]},v))}),r.jsx(g1,{children:w.map((y,v)=>r.jsxs(b1,{children:[r.jsx(x1,{children:r.jsx(y.icon,{})}),r.jsxs(v1,{children:[y.text,y.badge&&r.jsx(y1,{type:y.badge.type,children:y.badge.label})]}),r.jsx(j1,{active:a==="admin"||a==="super-admin"})]},v))})]}),r.jsxs(B7,{children:[r.jsxs($7,{children:[r.jsx(lo,{size:16}),r.jsx("span",{children:"Admin"})]}),r.jsxs(K7,{children:[r.jsx(Pb,{size:16}),"Save"]})]})]}),r.jsxs(U7,{children:[r.jsxs(L7,{children:[r.jsxs(H7,{children:[r.jsx("h3",{children:"Menu Visibility per Role"}),r.jsx("p",{children:"Menu items are automatically rendered based on the permissions above"})]}),r.jsxs(Q7,{children:[r.jsx(gt,{size:14}),"Live Preview"]})]}),r.jsx(q7,{children:d.map((y,v)=>{const A=y.icon,S=b[y.id]||[];return r.jsxs(Y7,{isLast:v===d.length-1,children:[r.jsxs(P7,{children:[r.jsx(F7,{color:y.color,children:r.jsx(A,{})}),r.jsxs("div",{children:[r.jsx(V7,{children:y.name}),r.jsxs(G7,{children:[y.users," users"]})]})]}),r.jsxs(Z7,{children:[m.map((M,T)=>{const k=S.includes(M);return r.jsxs(X7,{children:[r.jsxs(I7,{children:[r.jsx(f1,{}),M]}),r.jsx(J7,{visible:k,children:k?r.jsxs(r.Fragment,{children:[r.jsx(Ub,{}),"Visible"]}):r.jsxs(r.Fragment,{children:[r.jsx(gt,{}),"Hidden"]})})]},T)}),m.length===0&&r.jsx("div",{style:{padding:"1rem",textAlign:"center",color:"#6b7280"},children:"No menu items found"})]})]},y.id)})})]})]})})})]})};var jf={exports:{}},wf={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w1;function ew(){if(w1)return wf;w1=1;var a=po();function s(m,h){return m===h&&(m!==0||1/m===1/h)||m!==m&&h!==h}var c=typeof Object.is=="function"?Object.is:s,i=a.useSyncExternalStore,d=a.useRef,f=a.useEffect,g=a.useMemo,b=a.useDebugValue;return wf.useSyncExternalStoreWithSelector=function(m,h,w,y,v){var A=d(null);if(A.current===null){var S={hasValue:!1,value:null};A.current=S}else S=A.current;A=g(function(){function T(K){if(!k){if(k=!0,N=K,K=y(K),v!==void 0&&S.hasValue){var H=S.value;if(v(H,K))return E=H}return E=K}if(H=E,c(N,K))return H;var L=y(K);return v!==void 0&&v(H,L)?(N=K,H):(N=K,E=L)}var k=!1,N,E,z=w===void 0?null:w;return[function(){return T(h())},z===null?void 0:function(){return T(z())}]},[h,w,y,v]);var M=i(m,A[0],A[1]);return f(function(){S.hasValue=!0,S.value=M},[M]),b(M),M},wf}var A1;function tw(){return A1||(A1=1,jf.exports=ew()),jf.exports}var rw=tw();function nw(a){a()}function aw(){let a=null,s=null;return{clear(){a=null,s=null},notify(){nw(()=>{let c=a;for(;c;)c.callback(),c=c.next})},get(){const c=[];let i=a;for(;i;)c.push(i),i=i.next;return c},subscribe(c){let i=!0;const d=s={callback:c,next:null,prev:s};return d.prev?d.prev.next=d:a=d,function(){!i||a===null||(i=!1,d.next?d.next.prev=d.prev:s=d.prev,d.prev?d.prev.next=d.next:a=d.next)}}}}var S1={notify(){},get:()=>[]};function ow(a,s){let c,i=S1,d=0,f=!1;function g(M){w();const T=i.subscribe(M);let k=!1;return()=>{k||(k=!0,T(),y())}}function b(){i.notify()}function m(){S.onStateChange&&S.onStateChange()}function h(){return f}function w(){d++,c||(c=a.subscribe(m),i=aw())}function y(){d--,c&&d===0&&(c(),c=void 0,i.clear(),i=S1)}function v(){f||(f=!0,w())}function A(){f&&(f=!1,y())}const S={addNestedSub:g,notifyNestedSubs:b,handleChangeWrapper:m,isSubscribed:h,trySubscribe:v,tryUnsubscribe:A,getListeners:()=>i};return S}var lw=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",iw=lw(),sw=()=>typeof navigator<"u"&&navigator.product==="ReactNative",cw=sw(),uw=()=>iw||cw?C.useLayoutEffect:C.useEffect,dw=uw(),Af=Symbol.for("react-redux-context"),Sf=typeof globalThis<"u"?globalThis:{};function fw(){if(!C.createContext)return{};const a=Sf[Af]??(Sf[Af]=new Map);let s=a.get(C.createContext);return s||(s=C.createContext(null),a.set(C.createContext,s)),s}var _n=fw();function hw(a){const{children:s,context:c,serverState:i,store:d}=a,f=C.useMemo(()=>{const m=ow(d);return{store:d,subscription:m,getServerState:i?()=>i:void 0}},[d,i]),g=C.useMemo(()=>d.getState(),[d]);dw(()=>{const{subscription:m}=f;return m.onStateChange=m.notifyNestedSubs,m.trySubscribe(),g!==d.getState()&&m.notifyNestedSubs(),()=>{m.tryUnsubscribe(),m.onStateChange=void 0}},[f,g]);const b=c||_n;return C.createElement(b.Provider,{value:f},s)}var mw=hw;function Ch(a=_n){return function(){return C.useContext(a)}}var Gb=Ch();function Zb(a=_n){const s=a===_n?Gb:Ch(a),c=()=>{const{store:i}=s();return i};return Object.assign(c,{withTypes:()=>c}),c}var pw=Zb();function gw(a=_n){const s=a===_n?pw:Zb(a),c=()=>s().dispatch;return Object.assign(c,{withTypes:()=>c}),c}var Eh=gw(),bw=(a,s)=>a===s;function xw(a=_n){const s=a===_n?Gb:Ch(a),c=(i,d={})=>{const{equalityFn:f=bw}=typeof d=="function"?{equalityFn:d}:d,g=s(),{store:b,subscription:m,getServerState:h}=g;C.useRef(!0);const w=C.useCallback({[i.name](v){return i(v)}}[i.name],[i]),y=rw.useSyncExternalStoreWithSelector(m.addNestedSub,b.getState,h||b.getState,w,f);return C.useDebugValue(y),y};return Object.assign(c,{withTypes:()=>c}),c}var Mh=xw();const Xb="SET_USERS",Ib="UPDATE_USER",vw=a=>({type:Xb,payload:a}),Jb=a=>({type:Ib,payload:a}),yw=Ar`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`,jw=p.div`
  display: flex;
  height: 100vh;
  background-color: #f9fafb;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`,ww=p.div`
  flex: 1;
  overflow: auto;
`,Aw=p.div`
  padding: 2rem;
`,Sw=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`,kw=p.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;

    @media (prefers-color-scheme: dark) {
      color: #9ca3af;
    }
  }
`,Cw=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #1d4ed8;
  }

  &:focus {
    outline: none;
    ring: 2px solid #3b82f6;
    ring-offset: 2px;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #3b82f6;
    
    &:hover {
      background-color: #2563eb;
    }
  }
`,Ew=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,Mw=p.div`
  padding: 1.25rem;
`,Nw=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`,Tw=p.div`
  position: relative;
  flex: 1;
  min-width: 300px;

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
  }
`,_w=p.input`
  width: 100%;
  padding: 0.625rem 0.75rem 0.625rem 2.25rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: white;

    &::placeholder {
      color: #9ca3af;
    }

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }
  }
`,k1=p.div`
  position: relative;
  min-width: 160px;

  svg:first-of-type {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
    pointer-events: none;
  }

  svg:last-of-type {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
    pointer-events: none;
  }
`,C1=p.select`
  appearance: none;
  width: 100%;
  padding: 0.625rem 2.25rem 0.625rem 2.25rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: white;

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }
  }
    &:hover{
    background-color: #f3f4f6;
    border-color: #d1d5db;
    }
`,Wb=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: #4b5563;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    background-color: #f9fafb;
    color: #111827;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: #d1d5db;

    &:hover {
      background-color: #4b5563;
      color: white;
    }
  }
`,Rw=p(Wb)`
  background-color: #2563eb;
  color: white;
  border-color: #2563eb;
  &:hover {
    background-color: #2052daa5;
    color: white;
    }`,Dw=p.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-top-color: #374151;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,kf=p.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-color: #4b5563;
  }
  &:hover {
    background-color: #f3f4f6;
    border-color: #d1d5db;
  }
`,Cf=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: ${a=>a.bg||"#eff6ff"};
  border-radius: 0.75rem;
  color: ${a=>a.color||"#2563eb"};

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`,Ef=p.div`
  flex: 1;
`,Mf=p.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,Nf=p.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,zw=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,Ow=p.div`
  overflow-x: auto;
`,Bw=p.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
`,$w=p.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-bottom-color: #4b5563;
  }
`,Wa=p.th`
  text-align: left;
  padding: 1rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,Kw=p.tbody``,eh=p.tr`
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(249, 250, 251, 0.8);
  }

  &:last-child {
    border-bottom: none;
  }

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #4b5563;

    &:hover {
      background-color: rgba(55, 65, 81, 0.5);
    }
  }
`,ea=p.td`
  padding: 1.25rem 1.5rem;
  font-size: 0.875rem;
  color: ${a=>a.color||"#4b5563"};

  @media (prefers-color-scheme: dark) {
    color: ${a=>a.color||"#d1d5db"};
  }
`,Uw=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Lw=p.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background-color: ${a=>a.bg||"#3b82f6"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  font-size: 0.875rem;
  flex-shrink: 0;
`,Hw=p.div`
  font-weight: 500;
  color: #111827;
  transition: color 0.2s;

  ${eh}:hover & {
    color: #2563eb;
  }

  @media (prefers-color-scheme: dark) {
    color: white;

    ${eh}:hover & {
      color: #60a5fa;
    }
  }
`,Qw=p.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.125rem;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,Nh=p.span`
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  white-space: nowrap;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.375rem;
    flex-shrink: 0;
  }
`,qw=p(Nh)`
  background-color: ${a=>{switch(a.role){case"Super Admin":return"#fffbeb";case"Admin":return"#faf5ff";case"Manager":return"#eef2ff";case"Student":return"#eff6ff";default:return"#f9fafb"}}};
  color: ${a=>{switch(a.role){case"Super Admin":return"#b45309";case"Admin":return"#ea6512";case"Manager":return"#4f46e5";case"Student":return"#132020";default:return"#374151"}}};
  border-color: ${a=>{switch(a.role){case"Super Admin":return"#fde68a";case"Admin":return"#d5853f";case"Manager":return"#c7d2fe";case"Student":return"#bffefe";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>{switch(a.role){case"Super Admin":return"rgba(245, 158, 11, 0.2)";case"Admin":return"rgba(139, 92, 246, 0.2)";case"Manager":return"rgba(79, 70, 229, 0.2)";case"Student":return"rgba(37, 99, 235, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${a=>{switch(a.role){case"Super Admin":return"#fcd34d";case"Admin":return"#c4b5fd";case"Manager":return"#a5b4fc";case"Student":return"#93c5fd";default:return"#d1d5db"}}};
    border-color: ${a=>{switch(a.role){case"Super Admin":return"rgba(245, 158, 11, 0.3)";case"Admin":return"rgba(139, 92, 246, 0.3)";case"Manager":return"rgba(79, 70, 229, 0.3)";case"Student":return"rgba(37, 99, 235, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,Yw=p(Nh)`
  background-color: ${a=>{switch(a.subscription){case"Free":return"#f9fafb";case"Pro":return"#eff6ff";case"Ultra":return"#faf5ff";default:return"#f9fafb"}}};
  color: ${a=>{switch(a.subscription){case"Free":return"#374151";case"Pro":return"#2563eb";case"Ultra":return"#7e5bef";default:return"#374151"}}};
  border-color: ${a=>{switch(a.subscription){case"Free":return"#e5e7eb";case"Pro":return"#bfdbfe";case"Ultra":return"#ddd6fe";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>{switch(a.subscription){case"Free":return"rgba(55, 65, 81, 0.5)";case"Pro":return"rgba(37, 99, 235, 0.2)";case"Ultra":return"rgba(139, 92, 246, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${a=>{switch(a.subscription){case"Free":return"#d1d5db";case"Pro":return"#93c5fd";case"Ultra":return"#c4b5fd";default:return"#d1d5db"}}};
    border-color: ${a=>{switch(a.subscription){case"Free":return"rgba(75, 85, 99, 0.5)";case"Pro":return"rgba(37, 99, 235, 0.3)";case"Ultra":return"rgba(139, 92, 246, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,Pw=p(Nh)`
  background-color: ${a=>{switch(a.status){case"Active":return"#ecfdf5";case"Blocked":return"#fef2f2";default:return"#f9fafb"}}};
  color: ${a=>{switch(a.status){case"Active":return"#047857";case"Blocked":return"#b91c1c";default:return"#374151"}}};
  border-color: ${a=>{switch(a.status){case"Active":return"#a7f3d0";case"Blocked":return"#fecaca";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>{switch(a.status){case"Active":return"rgba(16, 185, 129, 0.2)";case"Blocked":return"rgba(220, 38, 38, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${a=>{switch(a.status){case"Active":return"#86efac";case"Blocked":return"#fca5a5";default:return"#d1d5db"}}};
    border-color: ${a=>{switch(a.status){case"Active":return"rgba(16, 185, 129, 0.3)";case"Blocked":return"rgba(220, 38, 38, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,Fw=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`,ex=p.button`
  padding: 0.5rem;
  color: #6b7280;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.hoverBg||"#f3f4f6"};
    color: ${a=>a.hoverColor||"#374151"};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    &:hover {
      background-color: ${a=>a.hoverBg||"#4b5563"};
      color: ${a=>a.hoverColor||"white"};
    }
  }
`;p(ex)`
  &:hover {
    background-color: #eff6ff;
    color: #2563eb;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgba(37, 99, 235, 0.2);
      color: #60a5fa;
    }
  }
`;const Vw=p.span`
  font-size: 0.875rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,Gw=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-top-color: #4b5563;
  }
`,Zw=p.div`
  font-size: 0.875rem;
  color: #6b7280;

  span {
    font-weight: 500;
    color: #111827;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    span {
      color: white;
    }
  }
`,Xw=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,kl=p.button`
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  background-color: ${a=>a.active?"#2563eb":"white"};
  color: ${a=>a.active?"white":"#4b5563"};
  border: 1px solid ${a=>a.active?"#2563eb":"#e5e7eb"};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.active?"#1d4ed8":"#f9fafb"};
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>a.active?"#2563eb":"#374151"};
    color: ${a=>a.active?"white":"#d1d5db"};
    border-color: ${a=>a.active?"#2563eb":"#4b5563"};

    &:hover {
      background-color: ${a=>a.active?"#1d4ed8":"#4b5563"};
    }
  }
`,Iw=p.div`
  padding: 3rem 1.5rem;
  text-align: center;
`,Jw=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Ww=p.div`
  width: 4rem;
  height: 4rem;
  background-color: #f3f4f6;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  svg {
    width: 2rem;
    height: 2rem;
    color: #9ca3af;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;

    svg {
      color: #6b7280;
    }
  }
`,e4=p.p`
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,t4=p.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 1rem;

  @media (prefers-color-scheme: dark) {
    color: #6b7280;
  }
`,r4=p.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #2563eb;
  background-color: #eff6ff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #dbeafe;
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgba(37, 99, 235, 0.2);
    color: #60a5fa;

    &:hover {
      background-color: rgba(37, 99, 235, 0.3);
    }
  }
`,n4=p.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`,a4=p.div`
  position: fixed;
  z-index: 50;
  width: 14rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #4b5563;
  }
`,eo=p.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: ${a=>a.danger?"#dc2626":"#374151"};
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.danger?"#fef2f2":"#f9fafb"};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${a=>a.danger?"#dc2626":"#6b7280"};
  }

  @media (prefers-color-scheme: dark) {
    color: ${a=>a.danger?"#f87171":"#e5e7eb"};

    &:hover {
      background-color: ${a=>a.danger?"rgba(220, 38, 38, 0.2)":"#374151"};
    }

    svg {
      color: ${a=>a.danger?"#f87171":"#9ca3af"};
    }
  }
`,o4=p.div`
  height: 1px;
  background-color: #f3f4f6;
  margin: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #4b5563;
  }
`,l4=[{id:1,name:"John Doe",email:"john@example.com",role:"Student",subscription:"Pro",status:"Active"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"Admin",subscription:"Ultra",status:"Active"},{id:3,name:"Bob Wilson",email:"bob@example.com",role:"Manager",subscription:"Ultra",status:"Blocked"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Student",subscription:"Free",status:"Active"},{id:5,name:"Charlie Lee",email:"charlie@example.com",role:"Student",subscription:"Pro",status:"Active"},{id:6,name:"Anhupama N E",email:"anhupamane@gmail.com",role:"Super Admin",subscription:"Ultra",status:"Active"}],i4=()=>{const a=Ct(),s=Eh(),c=Mh($=>$.userReducer.users),[i,d]=C.useState([]),[f,g]=C.useState("All"),[b,m]=C.useState("All"),[h,w]=C.useState(""),[y,v]=C.useState(null),[A,S]=C.useState(null);C.useEffect(()=>{c.length===0&&s(vw(l4))},[s,c.length]),C.useEffect(()=>{d(c)},[c]),C.useEffect(()=>{let $=c;f!=="All"&&($=$.filter(P=>P.role===f)),b!=="All"&&($=$.filter(P=>P.status===b)),h&&($=$.filter(P=>P.name.toLowerCase().includes(h.toLowerCase())||P.email.toLowerCase().includes(h.toLowerCase()))),d($)},[c,f,b,h]);const M=$=>{g($)},T=$=>{m($)},k=()=>{g("All"),m("All"),w("")},N=$=>{switch($){case"Super Admin":return r.jsx(lo,{});case"Admin":return r.jsx(Fb,{});case"Manager":return r.jsx(ei,{});case"Student":return r.jsx(Hb,{});default:return r.jsx(cr,{})}},E=$=>{switch($){case"Free":return r.jsx(io,{});case"Pro":return r.jsx(ei,{});case"Ultra":return r.jsx(xc,{});default:return r.jsx(d1,{})}},z=$=>{switch($){case"Active":return r.jsx(at,{});case"Blocked":return r.jsx(Wf,{});default:return r.jsx(Ut,{})}},K=($,P)=>{$.preventDefault(),v({x:$.clientX,y:$.clientY,user:P}),S(P)},H=()=>{v(null),S(null)},L=()=>{alert(`Send message to ${A==null?void 0:A.name}`),H()},R=()=>{alert(`View analytics for ${A==null?void 0:A.name}`),H()},D=$=>{a(`/edit-profile/${$}`),H()},I=$=>{const P=["#3b82f6","#8b5cf6","#10b981","#f59e0b","#ef4444","#06b6d4"],Y=$.length%P.length;return P[Y]};return r.jsxs(r.Fragment,{children:[r.jsx(yw,{}),r.jsxs(jw,{children:[r.jsx(ww,{children:r.jsxs(Aw,{children:[r.jsxs(Sw,{children:[r.jsxs(kw,{children:[r.jsx("h1",{children:"User Management"}),r.jsx("p",{children:"Manage all platform users and their roles effectively."})]}),r.jsxs(Cw,{onClick:()=>a("/users/create"),children:[r.jsx(da,{}),"Create User"]})]}),r.jsx(Ew,{children:r.jsxs(Mw,{children:[r.jsxs(Nw,{children:[r.jsxs(Tw,{children:[r.jsx(Zr,{}),r.jsx(_w,{type:"text",value:h,onChange:$=>w($.target.value),placeholder:"Search users by name or email..."})]}),r.jsxs(k1,{children:[r.jsx(Wt,{}),r.jsxs(C1,{value:f,onChange:$=>M($.target.value),children:[r.jsx("option",{value:"All",children:"All Roles"}),r.jsx("option",{value:"Super Admin",children:"Super Admin"}),r.jsx("option",{value:"Admin",children:"Admin"}),r.jsx("option",{value:"Manager",children:"Manager"}),r.jsx("option",{value:"Student",children:"Student"})]}),r.jsx(Pe,{})]}),r.jsxs(k1,{children:[r.jsx(d1,{}),r.jsxs(C1,{value:b,onChange:$=>T($.target.value),children:[r.jsx("option",{value:"All",children:"All Status"}),r.jsx("option",{value:"Active",children:"Active"}),r.jsx("option",{value:"Blocked",children:"Blocked"})]}),r.jsx(Pe,{})]}),(f!=="All"||b!=="All"||h)&&r.jsxs(Wb,{onClick:k,children:[r.jsx(kt,{}),"Clear"]}),r.jsxs(Rw,{children:[r.jsx(dr,{}),"Export"]})]}),r.jsxs(Dw,{children:[r.jsxs(kf,{children:[r.jsx(Cf,{bg:"#eff6ff",color:"#2563eb",children:r.jsx(cr,{})}),r.jsxs(Ef,{children:[r.jsx(Mf,{children:"Total Users"}),r.jsx(Nf,{children:i.length})]})]}),r.jsxs(kf,{children:[r.jsx(Cf,{bg:"#ecfdf5",color:"#10b981",children:r.jsx(at,{})}),r.jsxs(Ef,{children:[r.jsx(Mf,{children:"Active Users"}),r.jsx(Nf,{children:i.filter($=>$.status==="Active").length})]})]}),r.jsxs(kf,{children:[r.jsx(Cf,{bg:"#fef3c7",color:"#f59e0b",children:r.jsx(xc,{})}),r.jsxs(Ef,{children:[r.jsx(Mf,{children:"Ultra Subscribers"}),r.jsx(Nf,{children:i.filter($=>$.subscription==="Ultra").length})]})]})]})]})}),r.jsxs(zw,{children:[r.jsx(Ow,{children:r.jsxs(Bw,{children:[r.jsx($w,{children:r.jsxs("tr",{children:[r.jsx(Wa,{width:"30%",children:"User"}),r.jsx(Wa,{width:"15%",children:"Role"}),r.jsx(Wa,{width:"15%",children:"Subscription"}),r.jsx(Wa,{width:"12%",children:"Status"}),r.jsx(Wa,{width:"15%",children:"Last Active"}),r.jsx(Wa,{width:"13%",style:{textAlign:"right"},children:"Actions"})]})}),r.jsx(Kw,{children:i.length>0?i.map($=>r.jsxs(eh,{onContextMenu:P=>K(P,$),children:[r.jsx(ea,{children:r.jsxs(Uw,{children:[r.jsx(Lw,{bg:I($.name),children:$.name.split(" ").map(P=>P[0]).join("").slice(0,2).toUpperCase()}),r.jsxs("div",{children:[r.jsx(Hw,{children:$.name}),r.jsxs(Qw,{children:[r.jsx(yc,{}),$.email]})]})]})}),r.jsx(ea,{children:r.jsxs(qw,{role:$.role,children:[N($.role),$.role]})}),r.jsx(ea,{children:r.jsxs(Yw,{subscription:$.subscription,children:[E($.subscription),$.subscription]})}),r.jsx(ea,{children:r.jsxs(Pw,{status:$.status,children:[z($.status),$.status]})}),r.jsx(ea,{children:r.jsx(Vw,{children:"Just now"})}),r.jsx(ea,{children:r.jsx(Fw,{children:r.jsx(ex,{onClick:P=>K(P,$),title:"More options",children:r.jsx(ua,{})})})})]},$.id)):r.jsx("tr",{children:r.jsx(ea,{colSpan:"6",style:{padding:0},children:r.jsx(Iw,{children:r.jsxs(Jw,{children:[r.jsx(Ww,{children:r.jsx(Bc,{})}),r.jsx(e4,{children:"No users found"}),r.jsx(t4,{children:"Try adjusting your filters"}),r.jsx(r4,{onClick:k,children:"Clear all filters"})]})})})})})]})}),r.jsxs(Gw,{children:[r.jsxs(Zw,{children:["Showing ",r.jsx("span",{children:i.length})," of"," ",r.jsx("span",{children:c.length})," users"]}),r.jsxs(Xw,{children:[r.jsx(kl,{children:"Previous"}),r.jsx(kl,{active:!0,children:"1"}),r.jsx(kl,{children:"2"}),r.jsx(kl,{children:"3"}),r.jsx(kl,{children:"Next"})]})]})]})]})}),y&&A&&r.jsxs(r.Fragment,{children:[r.jsx(n4,{onClick:H}),r.jsxs(a4,{style:{left:y.x,top:y.y},children:[r.jsxs(eo,{onClick:()=>D(A.id),children:[r.jsx(Tn,{}),"Edit User"]}),r.jsxs(eo,{onClick:L,children:[r.jsx(qb,{}),"Send Message"]}),r.jsxs(eo,{onClick:R,children:[r.jsx(yh,{}),"View Analytics"]}),r.jsxs(eo,{children:[r.jsx(oi,{}),"Duplicate"]}),r.jsxs(eo,{children:[r.jsx(zc,{}),"Archive"]}),r.jsx(o4,{}),r.jsxs(eo,{danger:!0,children:[r.jsx(yo,{}),"Delete"]})]})]})]})]})},s4=()=>{const{id:a}=W1(),s=Ct(),c=Eh(),i=Mh(h=>h.userReducer.users),d=a?i.find(h=>h.id===parseInt(a)):null,[f,g]=C.useState({name:"",email:"",role:"",status:""});C.useEffect(()=>{d&&g({name:d.name,email:d.email,role:d.role,status:d.status})},[d]);const b=h=>{const{name:w,value:y}=h.target;g(v=>({...v,[w]:y}))},m=h=>{h.preventDefault();const w={...d,...f};c(Jb(w)),s("/user-management")};return d?r.jsxs("div",{children:[r.jsx(Db,{title:"User Details",description:"Edit user information."}),r.jsx("div",{className:"max-w-md mx-auto bg-card rounded-lg border shadow-sm p-6",children:r.jsxs("form",{onSubmit:m,children:[r.jsxs("div",{className:"mb-4",children:[r.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-muted-foreground mb-2",children:"Name"}),r.jsx("input",{type:"text",id:"name",name:"name",value:f.name,onChange:b,className:"w-full border rounded p-2",required:!0})]}),r.jsxs("div",{className:"mb-4",children:[r.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-muted-foreground mb-2",children:"Email"}),r.jsx("input",{type:"email",id:"email",name:"email",value:f.email,onChange:b,className:"w-full border rounded p-2",required:!0})]}),r.jsxs("div",{className:"mb-4",children:[r.jsx("label",{htmlFor:"role",className:"block text-sm font-medium text-muted-foreground mb-2",children:"Role"}),r.jsxs("select",{id:"role",name:"role",value:f.role,onChange:b,className:"w-full border rounded p-2",children:[r.jsx("option",{value:"Super Admin",children:"Super Admin"}),r.jsx("option",{value:"Admin",children:"Admin"}),r.jsx("option",{value:"Manager",children:"Manager"}),r.jsx("option",{value:"Student",children:"Student"})]})]}),r.jsxs("div",{className:"mb-4",children:[r.jsx("label",{htmlFor:"status",className:"block text-sm font-medium text-muted-foreground mb-2",children:"Status"}),r.jsxs("select",{id:"status",name:"status",value:f.status,onChange:b,className:"w-full border rounded p-2",children:[r.jsx("option",{value:"Active",children:"Active"}),r.jsx("option",{value:"Inactive",children:"Inactive"})]})]}),r.jsxs("div",{className:"flex justify-end space-x-2",children:[r.jsx("button",{type:"button",onClick:()=>s("/user-management"),className:"px-4 py-2 border rounded text-muted-foreground hover:bg-muted",children:"Cancel"}),r.jsx("button",{type:"submit",className:"px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90",children:"Save"})]})]})})]}):r.jsx("div",{children:"User not found"})},c4=Ar`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`,u4=p.div`
  display: flex;
  height: 100vh;
  background-color: #f9fafb;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`,d4=p.div`
  flex: 1;
  overflow: auto;
`,f4=p.div`
  padding: 2rem;
`,h4=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`,m4=p.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;

    @media (prefers-color-scheme: dark) {
      color: #9ca3af;
    }
  }
`,p4=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #1d4ed8;
  }

  &:focus {
    outline: none;
    ring: 2px solid #3b82f6;
    ring-offset: 2px;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #3b82f6;
    
    &:hover {
      background-color: #2563eb;
    }
  }
`,g4=p.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Cs=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,Es=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`,Ms=p.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,Ns=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${a=>a.bg||"#eff6ff"};
  border-radius: 0.5rem;
  color: ${a=>a.color||"#2563eb"};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,Ts=p.div`
  font-size: 1.875rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,_s=p.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: ${a=>a.positive?"#10b981":"#6b7280"};

  svg {
    width: 1rem;
    height: 1rem;
  }

  span {
    color: #6b7280;
    margin-left: 0.25rem;
  }

  @media (prefers-color-scheme: dark) {
    color: ${a=>a.positive?"#86efac":"#9ca3af"};
    
    span {
      color: #9ca3af;
    }
  }
`,b4=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,x4=p.div`
  padding: 1.25rem;
`,v4=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`,y4=p.div`
  position: relative;
  flex: 1;
  min-width: 300px;

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
  }
`,j4=p.input`
  width: 100%;
  padding: 0.625rem 0.75rem 0.625rem 2.25rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: white;

    &::placeholder {
      color: #9ca3af;
    }

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }
  }
`,E1=p.div`
  position: relative;
  min-width: 160px;

  svg:first-of-type {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
    pointer-events: none;
  }

  svg:last-of-type {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
    pointer-events: none;
  }
`,M1=p.select`
  appearance: none;
  width: 100%;
  padding: 0.625rem 2.25rem 0.625rem 2.25rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: white;

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }
  }
`,tx=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: #4b5563;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    background-color: #f9fafb;
    color: #111827;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: #d1d5db;

    &:hover {
      background-color: #4b5563;
      color: white;
    }
  }
`,w4=p(tx)``,A4=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,S4=p.div`
  overflow-x: auto;
`,k4=p.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
`,C4=p.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-bottom-color: #4b5563;
  }
`,ta=p.th`
  text-align: left;
  padding: 1rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,E4=p.tbody``,th=p.tr`
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(249, 250, 251, 0.8);
  }

  &:last-child {
    border-bottom: none;
  }

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #4b5563;

    &:hover {
      background-color: rgba(55, 65, 81, 0.5);
    }
  }
`,jn=p.td`
  padding: 1.25rem 1.5rem;
  font-size: 0.875rem;
  color: ${a=>a.color||"#4b5563"};

  @media (prefers-color-scheme: dark) {
    color: ${a=>a.color||"#d1d5db"};
  }
`,M4=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,N4=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${a=>a.bg||"#f3f4f6"};
  border-radius: 0.5rem;
  color: ${a=>a.color||"#6b7280"};
  flex-shrink: 0;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>a.darkBg||"#374151"};
    color: ${a=>a.darkColor||"#9ca3af"};
  }
`,T4=p.div`
  font-weight: 600;
  color: #111827;
  transition: color 0.2s;
  margin-bottom: 0.25rem;
  font-family: monospace;

  ${th}:hover & {
    color: #2563eb;
  }

  @media (prefers-color-scheme: dark) {
    color: white;

    ${th}:hover & {
      color: #60a5fa;
    }
  }
`,_4=p.div`
  display: flex;
  flex-direction: column;
`,R4=p.div`
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,D4=p.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #6b7280;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,rx=p.span`
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  white-space: nowrap;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.375rem;
    flex-shrink: 0;
  }
`,z4=p(rx)`
  background-color: ${a=>{switch(a.status){case"Completed":return"#ecfdf5";case"Pending":return"#fefce8";case"Failed":case"Refunded":return"#fef2f2";case"Processing":return"#eff6ff";default:return"#f9fafb"}}};
  color: ${a=>{switch(a.status){case"Completed":return"#047857";case"Pending":return"#b45309";case"Failed":case"Refunded":return"#b91c1c";case"Processing":return"#1e40af";default:return"#374151"}}};
  border-color: ${a=>{switch(a.status){case"Completed":return"#a7f3d0";case"Pending":return"#fde68a";case"Failed":case"Refunded":return"#fecaca";case"Processing":return"#bfdbfe";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>{switch(a.status){case"Completed":return"rgba(16, 185, 129, 0.2)";case"Pending":return"rgba(245, 158, 11, 0.2)";case"Failed":case"Refunded":return"rgba(220, 38, 38, 0.2)";case"Processing":return"rgba(37, 99, 235, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${a=>{switch(a.status){case"Completed":return"#86efac";case"Pending":return"#fcd34d";case"Failed":case"Refunded":return"#fca5a5";case"Processing":return"#93c5fd";default:return"#d1d5db"}}};
    border-color: ${a=>{switch(a.status){case"Completed":return"rgba(16, 185, 129, 0.3)";case"Pending":return"rgba(245, 158, 11, 0.3)";case"Failed":case"Refunded":return"rgba(220, 38, 38, 0.3)";case"Processing":return"rgba(37, 99, 235, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,O4=p(rx)`
  background-color: #f9fafb;
  color: #111827;
  border-color: #e5e7eb;
  font-weight: 600;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: white;
    border-color: rgba(75, 85, 99, 0.5);
  }
`,B4=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`,nx=p.button`
  padding: 0.5rem;
  color: #6b7280;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.hoverBg||"#f3f4f6"};
    color: ${a=>a.hoverColor||"#374151"};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    &:hover {
      background-color: ${a=>a.hoverBg||"#4b5563"};
      color: ${a=>a.hoverColor||"white"};
    }
  }
`,$4=p(nx)`
  &:hover {
    background-color: #eff6ff;
    color: #2563eb;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgba(37, 99, 235, 0.2);
      color: #60a5fa;
    }
  }
`,K4=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-top-color: #4b5563;
  }
`,U4=p.div`
  font-size: 0.875rem;
  color: #6b7280;

  span {
    font-weight: 500;
    color: #111827;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    span {
      color: white;
    }
  }
`,L4=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Cl=p.button`
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  background-color: ${a=>a.active?"#2563eb":"white"};
  color: ${a=>a.active?"white":"#4b5563"};
  border: 1px solid ${a=>a.active?"#2563eb":"#e5e7eb"};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.active?"#1d4ed8":"#f9fafb"};
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>a.active?"#2563eb":"#374151"};
    color: ${a=>a.active?"white":"#d1d5db"};
    border-color: ${a=>a.active?"#2563eb":"#4b5563"};

    &:hover {
      background-color: ${a=>a.active?"#1d4ed8":"#4b5563"};
    }
  }
`,H4=p.div`
  padding: 3rem 1.5rem;
  text-align: center;
`,Q4=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,q4=p.div`
  width: 4rem;
  height: 4rem;
  background-color: #f3f4f6;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  svg {
    width: 2rem;
    height: 2rem;
    color: #9ca3af;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;

    svg {
      color: #6b7280;
    }
  }
`,Y4=p.p`
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,P4=p.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 1rem;

  @media (prefers-color-scheme: dark) {
    color: #6b7280;
  }
`,F4=p.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #2563eb;
  background-color: #eff6ff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #dbeafe;
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgba(37, 99, 235, 0.2);
    color: #60a5fa;

    &:hover {
      background-color: rgba(37, 99, 235, 0.3);
    }
  }
`,V4=p.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`,G4=p.div`
  position: fixed;
  z-index: 50;
  width: 14rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #4b5563;
  }
`,to=p.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: ${a=>a.danger?"#dc2626":"#374151"};
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.danger?"#fef2f2":"#f9fafb"};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${a=>a.danger?"#dc2626":"#6b7280"};
  }

  @media (prefers-color-scheme: dark) {
    color: ${a=>a.danger?"#f87171":"#e5e7eb"};

    &:hover {
      background-color: ${a=>a.danger?"rgba(220, 38, 38, 0.2)":"#374151"};
    }

    svg {
      color: ${a=>a.danger?"#f87171":"#9ca3af"};
    }
  }
`,Z4=p.div`
  height: 1px;
  background-color: #f3f4f6;
  margin: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #4b5563;
  }
`,X4=a=>{switch(a){case"Completed":return r.jsx(at,{});case"Pending":return r.jsx(Ut,{});case"Failed":return r.jsx(kt,{});case"Refunded":return r.jsx(Yb,{});case"Processing":return r.jsx(mo,{});default:return r.jsx(Ub,{})}},I4=a=>{const s=[{bg:"#eff6ff",color:"#2563eb",darkBg:"rgba(37, 99, 235, 0.2)",darkColor:"#60a5fa"},{bg:"#fef3c7",color:"#d97706",darkBg:"rgba(245, 158, 11, 0.2)",darkColor:"#fbbf24"},{bg:"#ecfdf5",color:"#059669",darkBg:"rgba(16, 185, 129, 0.2)",darkColor:"#34d399"},{bg:"#f3e8ff",color:"#9333ea",darkBg:"rgba(147, 51, 234, 0.2)",darkColor:"#c084fc"}],c=(a==null?void 0:a.length)%s.length||0;return s[c]},J4=a=>new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),W4=[{id:"PAY-001",user:"John Doe",email:"john.doe@example.com",amount:250,date:"2026-02-10",status:"Completed",method:"Credit Card",invoice:"INV-2026-001"},{id:"PAY-002",user:"Jane Smith",email:"jane.smith@example.com",amount:180,date:"2026-02-09",status:"Completed",method:"PayPal",invoice:"INV-2026-002"},{id:"PAY-003",user:"Bob Wilson",email:"bob.wilson@example.com",amount:320,date:"2026-02-08",status:"Pending",method:"Credit Card",invoice:"INV-2026-003"},{id:"PAY-004",user:"Alice Brown",email:"alice.brown@example.com",amount:150,date:"2026-02-07",status:"Failed",method:"Debit Card",invoice:"INV-2026-004"},{id:"PAY-005",user:"Charlie Lee",email:"charlie.lee@example.com",amount:425.5,date:"2026-02-06",status:"Completed",method:"Credit Card",invoice:"INV-2026-005"},{id:"PAY-006",user:"Diana Prince",email:"diana.prince@example.com",amount:89.99,date:"2026-02-05",status:"Processing",method:"PayPal",invoice:"INV-2026-006"},{id:"PAY-007",user:"Bruce Wayne",email:"bruce.wayne@example.com",amount:599.99,date:"2026-02-04",status:"Refunded",method:"Credit Card",invoice:"INV-2026-007"}],eA=()=>{const a=Ct(),[s,c]=C.useState([]),[i,d]=C.useState([]),[f,g]=C.useState(""),[b,m]=C.useState("All"),[h,w]=C.useState("All"),[y,v]=C.useState(null),[A,S]=C.useState(null);C.useEffect(()=>{c(W4)},[]),C.useEffect(()=>{let L=s;if(b!=="All"&&(L=L.filter(R=>R.status===b)),h!=="All"){const R=new Date,D=new Date(R.setHours(0,0,0,0)),I=new Date(D);I.setDate(I.getDate()-7);const $=new Date(D);$.setMonth($.getMonth()-1),L=L.filter(P=>{const Y=new Date(P.date);switch(h){case"Today":return Y>=D;case"This Week":return Y>=I;case"This Month":return Y>=$;default:return!0}})}if(f){const R=f.toLowerCase();L=L.filter(D=>D.id.toLowerCase().includes(R)||D.user.toLowerCase().includes(R)||D.email.toLowerCase().includes(R)||D.invoice.toLowerCase().includes(R))}d(L)},[s,b,h,f]);const M=(L,R)=>{L.preventDefault(),v({x:L.clientX,y:L.clientY}),S(R)},T=()=>{v(null),S(null)},k=()=>{m("All"),w("All"),g("")},N=i.reduce((L,R)=>R.status==="Completed"?L+R.amount:L,0),E=i.length,z=i.filter(L=>L.status==="Completed").length,K=i.filter(L=>L.status==="Pending").length,H=E>0?(z/E*100).toFixed(1):0;return r.jsxs(r.Fragment,{children:[r.jsx(c4,{}),r.jsxs(u4,{children:[r.jsx(d4,{children:r.jsxs(f4,{children:[r.jsxs(h4,{children:[r.jsxs(m4,{children:[r.jsx("h1",{children:"Payment Management"}),r.jsx("p",{children:"Track and manage all payment transactions"})]}),r.jsxs(p4,{onClick:()=>a("/payments/create"),children:[r.jsx(da,{}),"Create Invoice"]})]}),r.jsxs(g4,{children:[r.jsxs(Cs,{children:[r.jsxs(Es,{children:[r.jsx(Ms,{children:"Total Revenue"}),r.jsx(Ns,{bg:"#eff6ff",color:"#2563eb",children:r.jsx(Ah,{})})]}),r.jsxs(Ts,{children:["₹ ",N.toLocaleString()]}),r.jsxs(_s,{positive:!0,children:[r.jsx(yf,{}),"+8.2%",r.jsx("span",{children:"vs last month"})]})]}),r.jsxs(Cs,{children:[r.jsxs(Es,{children:[r.jsx(Ms,{children:"Transactions"}),r.jsx(Ns,{bg:"#ecfdf5",color:"#10b981",children:r.jsx(Lb,{})})]}),r.jsx(Ts,{children:E}),r.jsxs(_s,{positive:!0,children:[r.jsx(yf,{}),"+15",r.jsx("span",{children:"this week"})]})]}),r.jsxs(Cs,{children:[r.jsxs(Es,{children:[r.jsx(Ms,{children:"Success Rate"}),r.jsx(Ns,{bg:"#fef3c7",color:"#f59e0b",children:r.jsx(at,{})})]}),r.jsxs(Ts,{children:[H,"%"]}),r.jsxs(_s,{positive:H>=70,children:[H>=70?r.jsx(yf,{}):r.jsx(Zj,{}),H>=70?"+2.5%":"-1.2%",r.jsx("span",{children:"completion"})]})]}),r.jsxs(Cs,{children:[r.jsxs(Es,{children:[r.jsx(Ms,{children:"Pending"}),r.jsx(Ns,{bg:"#fef2f2",color:"#ef4444",children:r.jsx(Ut,{})})]}),r.jsx(Ts,{children:K}),r.jsx(_s,{children:r.jsx("span",{children:"Awaiting processing"})})]})]}),r.jsx(b4,{children:r.jsx(x4,{children:r.jsxs(v4,{children:[r.jsxs(y4,{children:[r.jsx(Zr,{}),r.jsx(j4,{type:"text",value:f,onChange:L=>g(L.target.value),placeholder:"Search by ID, user, email, or invoice..."})]}),r.jsxs(E1,{children:[r.jsx(Wt,{}),r.jsxs(M1,{value:b,onChange:L=>m(L.target.value),children:[r.jsx("option",{value:"All",children:"All Status"}),r.jsx("option",{value:"Completed",children:"Completed"}),r.jsx("option",{value:"Pending",children:"Pending"}),r.jsx("option",{value:"Processing",children:"Processing"}),r.jsx("option",{value:"Failed",children:"Failed"}),r.jsx("option",{value:"Refunded",children:"Refunded"})]}),r.jsx(Pe,{})]}),r.jsxs(E1,{children:[r.jsx(Jf,{}),r.jsxs(M1,{value:h,onChange:L=>w(L.target.value),children:[r.jsx("option",{value:"All",children:"All Time"}),r.jsx("option",{value:"Today",children:"Today"}),r.jsx("option",{value:"This Week",children:"This Week"}),r.jsx("option",{value:"This Month",children:"This Month"})]}),r.jsx(Pe,{})]}),(b!=="All"||h!=="All"||f)&&r.jsxs(tx,{onClick:k,children:[r.jsx(kt,{}),"Clear"]}),r.jsxs(w4,{children:[r.jsx(dr,{}),"Export"]})]})})}),r.jsxs(A4,{children:[r.jsx(S4,{children:r.jsxs(k4,{children:[r.jsx(C4,{children:r.jsxs("tr",{children:[r.jsx(ta,{width:"15%",children:"Invoice ID"}),r.jsx(ta,{width:"20%",children:"Customer"}),r.jsx(ta,{width:"12%",children:"Amount"}),r.jsx(ta,{width:"12%",children:"Date"}),r.jsx(ta,{width:"12%",children:"Method"}),r.jsx(ta,{width:"12%",children:"Status"}),r.jsx(ta,{width:"17%",style:{textAlign:"right"},children:"Actions"})]})}),r.jsx(E4,{children:i.length>0?i.map(L=>{const R=I4(L.id);return r.jsxs(th,{onContextMenu:D=>M(D,L),children:[r.jsx(jn,{children:r.jsxs(M4,{children:[r.jsx(N4,{bg:R.bg,color:R.color,darkBg:R.darkBg,darkColor:R.darkColor,children:r.jsx(h1,{})}),r.jsxs("div",{children:[r.jsx(T4,{children:L.id}),r.jsx("div",{style:{fontSize:"0.75rem",color:"#6b7280",...window.matchMedia("(prefers-color-scheme: dark)").matches&&{color:"#9ca3af"}},children:L.invoice})]})]})}),r.jsx(jn,{children:r.jsxs(_4,{children:[r.jsx(R4,{children:L.user}),r.jsxs(D4,{children:[r.jsx(yc,{}),L.email]})]})}),r.jsx(jn,{children:r.jsxs(O4,{children:["₹ ",L.amount.toFixed(2)]})}),r.jsx(jn,{children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"#6b7280",...window.matchMedia("(prefers-color-scheme: dark)").matches&&{color:"#9ca3af"}},children:[r.jsx(Jf,{style:{width:"0.875rem",height:"0.875rem"}}),J4(L.date)]})}),r.jsx(jn,{children:r.jsx("span",{style:{fontSize:"0.875rem",color:"#4b5563",...window.matchMedia("(prefers-color-scheme: dark)").matches&&{color:"#d1d5db"}},children:L.method})}),r.jsx(jn,{children:r.jsxs(z4,{status:L.status,children:[X4(L.status),L.status]})}),r.jsx(jn,{children:r.jsxs(B4,{children:[r.jsx($4,{onClick:()=>a(`/payments/${L.id}`),title:"View details",children:r.jsx(gt,{})}),r.jsx(nx,{onClick:D=>M(D,L),title:"More options",children:r.jsx(ua,{})})]})})]},L.id)}):r.jsx("tr",{children:r.jsx(jn,{colSpan:"7",style:{padding:0},children:r.jsx(H4,{children:r.jsxs(Q4,{children:[r.jsx(q4,{children:r.jsx(Bc,{})}),r.jsx(Y4,{children:"No transactions found"}),r.jsx(P4,{children:"Try adjusting your filters or create a new invoice"}),r.jsx(F4,{onClick:k,children:"Clear all filters"})]})})})})})]})}),r.jsxs(K4,{children:[r.jsxs(U4,{children:["Showing ",r.jsx("span",{children:i.length})," of"," ",r.jsx("span",{children:s.length})," transactions"]}),r.jsxs(L4,{children:[r.jsx(Cl,{children:"Previous"}),r.jsx(Cl,{active:!0,children:"1"}),r.jsx(Cl,{children:"2"}),r.jsx(Cl,{children:"3"}),r.jsx(Cl,{children:"Next"})]})]})]})]})}),y&&A&&r.jsxs(r.Fragment,{children:[r.jsx(V4,{onClick:T}),r.jsxs(G4,{style:{left:y.x,top:y.y},children:[r.jsxs(to,{onClick:()=>a(`/payments/${A.id}`),children:[r.jsx(gt,{}),"View Details"]}),r.jsxs(to,{children:[r.jsx(h1,{}),"View Invoice"]}),r.jsxs(to,{children:[r.jsx(Q6,{}),"Print Receipt"]}),r.jsxs(to,{children:[r.jsx(yc,{}),"Email Receipt"]}),r.jsx(Z4,{}),r.jsxs(to,{children:[r.jsx(Yb,{}),"Process Refund"]}),r.jsxs(to,{danger:!0,children:[r.jsx(t6,{}),"Cancel Payment"]})]})]})]})]})},tA=Ar`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`,rA=p.div`
  display: flex;
  height: 100vh;
  background-color: #f9fafb;
`,nA=p.div`
  flex: 1;
  overflow: auto;
`,aA=p.div`
  padding: 2rem;
`,oA=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`,lA=p.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;
  }
`,iA=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #1d4ed8;
  }

  &:focus {
    outline: none;
    ring: 2px solid #3b82f6;
    ring-offset: 2px;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`,sA=p.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-top-color: #374151;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,El=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-color: #4b5563;
  }
`,Ml=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${a=>a.bg||"#eff6ff"};
  border-radius: 0.5rem;
  color: ${a=>a.color||"#2563eb"};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,Nl=p.div`
  flex: 1;
`,Tl=p.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,_l=p.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,cA=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
`,uA=p.div`
  padding: 1.25rem;
`,dA=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`,fA=p.div`
  position: relative;
  flex: 1;
  min-width: 300px;

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
  }
`,hA=p.input`
  width: 100%;
  padding: 0.625rem 0.75rem 0.625rem 2.25rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`,N1=p.div`
  position: relative;
  min-width: 160px;

  svg:first-of-type {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
    pointer-events: none;
  }

  svg:last-of-type {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
    pointer-events: none;
  }
`,T1=p.select`
  appearance: none;
  width: 100%;
  padding: 0.625rem 2.25rem 0.625rem 2.25rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }
`,ax=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: #4b5563;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    background-color: #f9fafb;
    color: #111827;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`,mA=p(ax)`
  background-color: #2563eb;  
  color: white;
  border-color: #2563eb;
  &:hover {
    background-color: #2455ddd3;
    color: white;
    }`,pA=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
`,gA=p.div`
  overflow-x: auto;
`,bA=p.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
`,xA=p.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
`,Lr=p.th`
  text-align: left;
  padding: 1rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: ${a=>a.width||"auto"};
`,vA=p.tbody``,ox=p.tr`
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(249, 250, 251, 0.8);
  }

  &:last-child {
    border-bottom: none;
  }
`,jr=p.td`
  padding: 1.25rem 1.5rem;
  font-size: 0.875rem;
  color: ${a=>a.color||"#4b5563"};
`,yA=p.div`
  font-weight: 500;
  color: #111827;
  transition: color 0.2s;

  ${ox}:hover & {
    color: #2563eb;
  }
`,lx=p.span`
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  white-space: nowrap;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.375rem;
    flex-shrink: 0;
  }
`,_1=p(lx)`
  background-color: ${a=>{switch(a.status){case"Published":return"#ecfdf5";case"Draft":return"#f9fafb";case"Pending":return"#fefce8";default:return"#f9fafb"}}};
  color: ${a=>{switch(a.status){case"Published":return"#047857";case"Draft":return"#374151";case"Pending":return"#b45309";default:return"#374151"}}};
  border-color: ${a=>{switch(a.status){case"Published":return"#a7f3d0";case"Draft":return"#e5e7eb";case"Pending":return"#fde68a";default:return"#e5e7eb"}}};
`,jA=p(lx)`
  background-color: ${a=>a.paid==="Free"?"#f9fafb":"#eff6ff"};
  color: ${a=>a.paid==="Free"?"#374151":"#1e40af"};
  border-color: ${a=>a.paid==="Free"?"#e5e7eb":"#bfdbfe"};
`,ix=p.button`
  padding: 0.5rem;
  color: #6b7280;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.hoverColor||"#f3f4f6"};
    color: ${a=>a.hoverTextColor||"#374151"};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;p(ix)`
  &:hover {
    background-color: #eff6ff;
    color: #2563eb;
  }
`;const wA=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`,AA=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;
`,SA=p.div`
  font-size: 0.875rem;
  color: #6b7280;

  span {
    font-weight: 500;
    color: #111827;
  }
`,kA=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Rl=p.button`
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  background-color: ${a=>a.active?"#2563eb":"white"};
  color: ${a=>a.active?"white":"#4b5563"};
  border: 1px solid ${a=>a.active?"#2563eb":"#e5e7eb"};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.active?"#1d4ed8":"#f9fafb"};
  }
`,CA=p.div`
  padding: 3rem 1.5rem;
  text-align: center;
`,EA=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,MA=p.div`
  width: 4rem;
  height: 4rem;
  background-color: #f3f4f6;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  svg {
    width: 2rem;
    height: 2rem;
    color: #9ca3af;
  }
`,NA=p.p`
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 0.25rem;
`,TA=p.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 1rem;
`,_A=p.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #2563eb;
  background-color: #eff6ff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #dbeafe;
  }
`,RA=p.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`,DA=p.div`
  position: fixed;
  z-index: 50;
  width: 14rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 0.375rem 0;
`,Dl=p.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: ${a=>a.danger?"#dc2626":"#374151"};
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.danger?"#fef2f2":"#f9fafb"};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${a=>a.danger?"#dc2626":"#6b7280"};
  }
`,zA=p.div`
  height: 1px;
  background-color: #f3f4f6;
  margin: 0.375rem 0;
`,OA=[{id:1,title:"Module 1 – Intro to Arrays",subject:"DSA",chapter:"Ch 1",test:"Linked",questions:"Set A",points:20,paid:"Free",status:"Published"},{id:2,title:"Module 2 – Linked Lists",subject:"DSA",chapter:"Ch 1",test:"Linked",questions:"Set B",points:25,paid:"Paid",status:"Published"},{id:3,title:"Module 1 – Classes & Objects",subject:"OOP",chapter:"Ch 1",test:"None",questions:"-",points:0,paid:"Free",status:"Draft"},{id:4,title:"Module 3 – SQL Queries",subject:"DBMS",chapter:"Ch 2",test:"Linked",questions:"Set C",points:30,paid:"Paid",status:"Published"},{id:5,title:"Module 1 – OSI Model",subject:"CN",chapter:"Ch 1",test:"Linked",questions:"Set A",points:15,paid:"Free",status:"Pending"}],BA=()=>{const a=Ct(),[s,c]=C.useState([]),[i,d]=C.useState([]),[f,g]=C.useState(""),[b,m]=C.useState("All"),[h,w]=C.useState("All"),[y,v]=C.useState(null),[A,S]=C.useState(null);C.useEffect(()=>{c(OA)},[]),C.useEffect(()=>{let R=s;if(b!=="All"&&(R=R.filter(D=>D.subject===b)),h!=="All"&&(R=R.filter(D=>D.status===h)),f){const D=f.toLowerCase();R=R.filter(I=>I.title.toLowerCase().includes(D)||I.subject.toLowerCase().includes(D)||I.chapter.toLowerCase().includes(D))}d(R)},[s,b,h,f]);const M=(R,D)=>{R.preventDefault(),v({x:R.clientX,y:R.clientY}),S(D)},T=()=>{v(null),S(null)},k=R=>{a(`/modules/${R}/edit`),T()},N=()=>{m("All"),w("All"),g("")},E=s.length,z=s.filter(R=>R.test==="Linked").length,K=s.filter(R=>R.status==="Published").length,H=s.filter(R=>R.status==="Draft").length,L=s.filter(R=>R.status==="Pending").length;return r.jsxs(r.Fragment,{children:[r.jsx(tA,{}),r.jsxs(rA,{children:[r.jsx(nA,{children:r.jsxs(aA,{children:[r.jsxs(oA,{children:[r.jsxs(lA,{children:[r.jsx("h1",{children:"Modules & Tests"}),r.jsx("p",{children:"Manage modules and linked tests."})]}),r.jsxs(iA,{onClick:()=>a("/modules/create"),children:[r.jsx(da,{}),"Upload Module "]})]}),r.jsx(cA,{children:r.jsxs(uA,{children:[r.jsxs(dA,{children:[r.jsxs(fA,{children:[r.jsx(Zr,{}),r.jsx(hA,{type:"text",value:f,onChange:R=>g(R.target.value),placeholder:"Search modules..."})]}),r.jsxs(N1,{children:[r.jsx(Wt,{}),r.jsxs(T1,{value:b,onChange:R=>m(R.target.value),children:[r.jsx("option",{value:"All",children:"All Subjects"}),r.jsx("option",{value:"DSA",children:"DSA"}),r.jsx("option",{value:"OOP",children:"OOP"}),r.jsx("option",{value:"DBMS",children:"DBMS"}),r.jsx("option",{value:"CN",children:"CN"})]}),r.jsx(Pe,{})]}),r.jsxs(N1,{children:[r.jsx(Wt,{}),r.jsxs(T1,{value:h,onChange:R=>w(R.target.value),children:[r.jsx("option",{value:"All",children:"All Status"}),r.jsx("option",{value:"Published",children:"Published"}),r.jsx("option",{value:"Draft",children:"Draft"}),r.jsx("option",{value:"Pending",children:"Pending"})]}),r.jsx(Pe,{})]}),(b!=="All"||h!=="All"||f)&&r.jsxs(ax,{onClick:N,children:[r.jsx(kt,{}),"Clear"]}),r.jsxs(mA,{children:[r.jsx(dr,{}),"Export"]})]}),r.jsxs(sA,{children:[r.jsxs(El,{children:[r.jsx(Ml,{bg:"#eff6ff",color:"#2563eb",children:r.jsx(Jt,{})}),r.jsxs(Nl,{children:[r.jsx(Tl,{children:"Total Documents"}),r.jsx(_l,{children:E})]})]}),r.jsxs(El,{children:[r.jsx(Ml,{bg:"#eff6ff",color:"#684bb4",children:r.jsx(Jt,{})}),r.jsxs(Nl,{children:[r.jsx(Tl,{children:"Total Tests"}),r.jsx(_l,{children:z})]})]}),r.jsxs(El,{children:[r.jsx(Ml,{bg:"#eff6ff",color:"#25eb28",children:r.jsx(at,{})}),r.jsxs(Nl,{children:[r.jsx(Tl,{children:"Published Tests"}),r.jsx(_l,{children:K})]})]}),r.jsxs(El,{children:[r.jsx(Ml,{bg:"#eff6ff",color:"#575759",children:r.jsx(Jt,{})}),r.jsxs(Nl,{children:[r.jsx(Tl,{children:"Draft Tests"}),r.jsx(_l,{children:H})]})]}),r.jsxs(El,{children:[r.jsx(Ml,{bg:"#eff6ff",color:"#ebac25",children:r.jsx(Ut,{})}),r.jsxs(Nl,{children:[r.jsx(Tl,{children:"Pending Tests"}),r.jsx(_l,{children:L})]})]})]})]})}),r.jsxs(pA,{children:[r.jsx(gA,{children:r.jsxs(bA,{children:[r.jsx(xA,{children:r.jsxs("tr",{children:[r.jsx(Lr,{width:"25%",children:"Module"}),r.jsx(Lr,{width:"8.33%",children:"Subject"}),r.jsx(Lr,{width:"8.33%",children:"Chapter"}),r.jsx(Lr,{width:"8.33%",children:"Test"}),r.jsx(Lr,{width:"8.33%",children:"Questions"}),r.jsx(Lr,{width:"8.33%",children:"Points"}),r.jsx(Lr,{width:"8.33%",children:"Paid"}),r.jsx(Lr,{width:"8.33%",children:"Status"}),r.jsx(Lr,{width:"8.33%",style:{textAlign:"right"},children:"Actions"})]})}),r.jsx(vA,{children:i.length>0?i.map(R=>r.jsxs(ox,{onContextMenu:D=>M(D,R),children:[r.jsx(jr,{children:r.jsx(yA,{children:R.title})}),r.jsx(jr,{children:R.subject}),r.jsx(jr,{children:R.chapter}),r.jsx(jr,{children:R.test==="Linked"?r.jsxs(_1,{status:"Published",children:[r.jsx(at,{}),"Linked"]}):r.jsx("span",{style:{color:"#9ca3af"},children:"—"})}),r.jsx(jr,{children:R.questions!=="-"?r.jsx("span",{style:{color:"#111827"},children:R.questions}):r.jsx("span",{style:{color:"#9ca3af"},children:"—"})}),r.jsx(jr,{style:{color:"#111827"},children:R.points}),r.jsx(jr,{children:r.jsxs(jA,{paid:R.paid,children:[R.paid==="Paid"," ",R.paid]})}),r.jsx(jr,{children:r.jsxs(_1,{status:R.status,children:[R.status==="Published"&&r.jsx(at,{}),R.status==="Draft"&&r.jsx(gt,{}),R.status==="Pending"&&r.jsx(Ut,{}),R.status]})}),r.jsx(jr,{children:r.jsx(wA,{children:r.jsx(ix,{onClick:D=>M(D,R),title:"More options",children:r.jsx(ua,{})})})})]},R.id)):r.jsx("tr",{children:r.jsx(jr,{colSpan:"9",style:{padding:0},children:r.jsx(CA,{children:r.jsxs(EA,{children:[r.jsx(MA,{children:r.jsx(Bc,{})}),r.jsx(NA,{children:"No modules found"}),r.jsx(TA,{children:"Try adjusting your filters"}),r.jsx(_A,{onClick:N,children:"Clear all filters"})]})})})})})]})}),r.jsxs(AA,{children:[r.jsxs(SA,{children:["Showing ",r.jsx("span",{children:i.length})," of"," ",r.jsx("span",{children:s.length})," modules"]}),r.jsxs(kA,{children:[r.jsx(Rl,{children:"Previous"}),r.jsx(Rl,{active:!0,children:"1"}),r.jsx(Rl,{children:"2"}),r.jsx(Rl,{children:"3"}),r.jsx(Rl,{children:"Next"})]})]})]})]})}),y&&A&&r.jsxs(r.Fragment,{children:[r.jsx(RA,{onClick:T}),r.jsxs(DA,{style:{left:y.x,top:y.y},children:[r.jsxs(Dl,{onClick:()=>k(A.id),children:[r.jsx(Tn,{}),"Edit Module"]}),r.jsxs(Dl,{onClick:()=>{var R;(R=navigator.clipboard)==null||R.writeText(window.location.origin+`/modules/${A.id}`),T()},children:[r.jsx(Qb,{}),"Copy Link"]}),r.jsxs(Dl,{children:[r.jsx(oi,{}),"Duplicate"]}),r.jsxs(Dl,{children:[r.jsx(zc,{}),"Archive"]}),r.jsx(zA,{}),r.jsxs(Dl,{danger:!0,children:[r.jsx(yo,{}),"Delete"]})]})]})]})]})};function $A(){const{pathname:a}=Vr();return C.useEffect(()=>{window.scrollTo(0,0)},[a]),null}const R1=Ar`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`,D1=p.div`
  min-height: 100vh;
  background-color: #f9fafb;
  padding: 2rem;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`,z1=p.div`
  max-width: 800px;
  margin: 0 auto;
`,KA=p.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`,UA=p.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
    color: #111827;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
    color: #9ca3af;

    &:hover {
      background-color: #374151;
      border-color: #4b5563;
      color: white;
    }
  }
`,LA=p.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;

    @media (prefers-color-scheme: dark) {
      color: #9ca3af;
    }
  }
`,HA=p.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  @media (max-width: 640px) {
    flex-direction: column;
    text-align: center;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,QA=p.div`
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, ${a=>a.gradient||"#3b82f6"});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 2rem;
  flex-shrink: 0;

  @media (prefers-color-scheme: dark) {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
  }
`,qA=p.div`
  flex: 1;
`,YA=p.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,O1=p.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  background-color: ${a=>a.bg||"#f3f4f6"};
  color: ${a=>a.color||"#374151"};
  border: 1px solid ${a=>a.border||"#e5e7eb"};
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>a.darkBg||"rgba(55, 65, 81, 0.5)"};
    color: ${a=>a.darkColor||"#d1d5db"};
    border-color: ${a=>a.darkBorder||"#4b5563"};
  }
`,PA=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,FA=p.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,Rs=p.div`
  margin-bottom: 1.5rem;
`,Ds=p.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;

  svg {
    width: 1rem;
    height: 1rem;
    color: #6b7280;
  }

  @media (prefers-color-scheme: dark) {
    color: #e5e7eb;

    svg {
      color: #9ca3af;
    }
  }
`,B1=p.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;
  color: #111827;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: white;

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    }

    &::placeholder {
      color: #6b7280;
    }
  }
`,$1=p.select`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;
  color: #111827;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: white;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    }
  }
`,zs=p.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.375rem;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,VA=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-top-color: #374151;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`,GA=p.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
    color: #111827;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: #d1d5db;

    &:hover {
      background-color: #4b5563;
      border-color: #6b7280;
      color: white;
    }
  }
`,ZA=p.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background-color: #2563eb;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #3b82f6;

    &:hover {
      background-color: #2563eb;
    }
  }
`;p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`;p.div`
  padding: 2rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  text-align: center;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
    color: #9ca3af;
  }
`;const XA=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`,IA=p.div`
  padding: 2rem;
  background-color: white;
  border: 1px solid #fecaca;
  border-radius: 1rem;
  text-align: center;
  color: #b91c1c;

  svg {
    width: 3rem;
    height: 3rem;
    margin-bottom: 1rem;
    color: #ef4444;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 1.5rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: rgba(239, 68, 68, 0.3);
    color: #f87171;

    p {
      color: #9ca3af;
    }
  }
`,JA=p.button`
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background-color: #2563eb;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`,WA=a=>{switch(a){case"Super Admin":return r.jsx(lo,{});case"Admin":return r.jsx(Fb,{});case"Manager":return r.jsx(ei,{});case"Student":return r.jsx(Hb,{});default:return r.jsx(kh,{})}},e8=a=>{switch(a){case"Super Admin":return{bg:"#fffbeb",color:"#b45309",border:"#fde68a",darkBg:"rgba(245, 158, 11, 0.2)",darkColor:"#fcd34d",darkBorder:"rgba(245, 158, 11, 0.3)"};case"Admin":return{bg:"#faf5ff",color:"#7e5bef",border:"#ddd6fe",darkBg:"rgba(139, 92, 246, 0.2)",darkColor:"#c4b5fd",darkBorder:"rgba(139, 92, 246, 0.3)"};case"Manager":return{bg:"#eef2ff",color:"#4f46e5",border:"#c7d2fe",darkBg:"rgba(79, 70, 229, 0.2)",darkColor:"#a5b4fc",darkBorder:"rgba(79, 70, 229, 0.3)"};case"Student":return{bg:"#eff6ff",color:"#2563eb",border:"#bfdbfe",darkBg:"rgba(37, 99, 235, 0.2)",darkColor:"#93c5fd",darkBorder:"rgba(37, 99, 235, 0.3)"};default:return{bg:"#f3f4f6",color:"#374151",border:"#e5e7eb",darkBg:"rgba(55, 65, 81, 0.5)",darkColor:"#d1d5db",darkBorder:"#4b5563"}}},t8=a=>a==="Active"?{bg:"#ecfdf5",color:"#047857",border:"#a7f3d0",darkBg:"rgba(16, 185, 129, 0.2)",darkColor:"#86efac",darkBorder:"rgba(16, 185, 129, 0.3)"}:{bg:"#fef2f2",color:"#b91c1c",border:"#fecaca",darkBg:"rgba(220, 38, 38, 0.2)",darkColor:"#fca5a5",darkBorder:"rgba(220, 38, 38, 0.3)"},r8=a=>{const s=["#3b82f6, #2563eb","#8b5cf6, #7c3aed","#10b981, #059669","#f59e0b, #d97706","#ef4444, #dc2626","#06b6d4, #0891b2"],c=(a==null?void 0:a.length)%s.length||0;return s[c]},n8=()=>{var y;const{id:a}=W1(),s=Ct(),c=Eh(),i=Mh(v=>v.userReducer.users),d=a?i.find(v=>v.id===parseInt(a)):null,[f,g]=C.useState({name:"",email:"",role:"",status:"Active"});C.useEffect(()=>{d&&g({name:d.name,email:d.email,role:d.role,status:d.status})},[d]);const b=v=>{const{name:A,value:S}=v.target;g(M=>({...M,[A]:S}))},m=v=>{v.preventDefault();const A={...d,...f};c(Jb(A)),s("/user-management")};if(!d)return r.jsxs(r.Fragment,{children:[r.jsx(R1,{}),r.jsx(D1,{children:r.jsx(z1,{children:r.jsx(XA,{children:r.jsxs(IA,{children:[r.jsx(Wf,{}),r.jsx("h3",{children:"User Not Found"}),r.jsx("p",{children:"The user you're trying to edit doesn't exist or has been removed."}),r.jsx(JA,{onClick:()=>s("/user-management"),children:"Return to User Management"})]})})})})]});const h=e8(d.role),w=t8(d.status);return r.jsxs(r.Fragment,{children:[r.jsx(R1,{}),r.jsx(D1,{children:r.jsxs(z1,{children:[r.jsxs(KA,{children:[r.jsx(UA,{onClick:()=>s("/user-management"),children:r.jsx(Ij,{})}),r.jsxs(LA,{children:[r.jsx("h1",{children:"Edit Profile"}),r.jsx("p",{children:"Update user information and role settings"})]})]}),r.jsxs(HA,{children:[r.jsx(QA,{gradient:r8(d.name),children:(y=d.name)==null?void 0:y.split(" ").map(v=>v[0]).join("").slice(0,2).toUpperCase()}),r.jsxs(qA,{children:[r.jsx(YA,{children:d.name}),r.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[r.jsxs(O1,{bg:h.bg,color:h.color,border:h.border,darkBg:h.darkBg,darkColor:h.darkColor,darkBorder:h.darkBorder,children:[WA(d.role),d.role]}),r.jsxs(O1,{bg:w.bg,color:w.color,border:w.border,darkBg:w.darkBg,darkColor:w.darkColor,darkBorder:w.darkBorder,children:[d.status==="Active"?r.jsx(at,{}):r.jsx(Wf,{}),d.status]})]})]})]}),r.jsxs(PA,{children:[r.jsx(FA,{children:"Edit User Information"}),r.jsxs("form",{onSubmit:m,children:[r.jsxs(Rs,{children:[r.jsxs(Ds,{htmlFor:"name",children:[r.jsx(kh,{}),"Full Name"]}),r.jsx(B1,{type:"text",id:"name",name:"name",value:f.name,onChange:b,placeholder:"Enter user's full name",required:!0}),r.jsx(zs,{children:"Update the user's display name"})]}),r.jsxs(Rs,{children:[r.jsxs(Ds,{htmlFor:"email",children:[r.jsx(yc,{}),"Email Address"]}),r.jsx(B1,{type:"email",id:"email",name:"email",value:f.email,onChange:b,placeholder:"Enter user's email address",required:!0}),r.jsx(zs,{children:"This will be used for notifications and login"})]}),r.jsxs(Rs,{children:[r.jsxs(Ds,{htmlFor:"role",children:[r.jsx(lo,{}),"User Role"]}),r.jsxs($1,{id:"role",name:"role",value:f.role,onChange:b,required:!0,children:[r.jsx("option",{value:"",children:"Select a role"}),r.jsx("option",{value:"Super Admin",children:"Super Admin"}),r.jsx("option",{value:"Admin",children:"Admin"}),r.jsx("option",{value:"Manager",children:"Manager"}),r.jsx("option",{value:"Student",children:"Student"})]}),r.jsx(zs,{children:"Determines user permissions and access level"})]}),r.jsxs(Rs,{children:[r.jsxs(Ds,{htmlFor:"status",children:[r.jsx(at,{}),"Account Status"]}),r.jsxs($1,{id:"status",name:"status",value:f.status,onChange:b,children:[r.jsx("option",{value:"Active",children:"Active"}),r.jsx("option",{value:"Inactive",children:"Inactive"}),r.jsx("option",{value:"Blocked",children:"Blocked"})]}),r.jsx(zs,{children:"Active users can access the platform"})]}),r.jsxs(VA,{children:[r.jsx(GA,{type:"button",onClick:()=>s("/user-management"),children:"Cancel"}),r.jsxs(ZA,{type:"submit",children:[r.jsx(Pb,{}),"Save Changes"]})]})]})]})]})})]})},a8=Ar`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`,o8=p.div`
  display: flex;
  height: 100vh;
  background-color: #f9fafb;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`,l8=p.div`
  flex: 1;
  overflow: auto;
`,i8=p.div`
  padding: 2rem;
`,s8=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`,c8=p.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;

    @media (prefers-color-scheme: dark) {
      color: #9ca3af;
    }
  }
`,u8=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #1d4ed8;
  }

  &:focus {
    outline: none;
    ring: 2px solid #3b82f6;
    ring-offset: 2px;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #3b82f6;
    
    &:hover {
      background-color: #2563eb;
    }
  }
`,d8=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,f8=p.div`
  padding: 1.25rem;
`,h8=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`,m8=p.div`
  position: relative;
  flex: 1;
  min-width: 300px;

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
  }
`,p8=p.input`
  width: 100%;
  padding: 0.625rem 0.75rem 0.625rem 2.25rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: white;

    &::placeholder {
      color: #9ca3af;
    }

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }
  }
`,Tf=p.div`
  position: relative;
  min-width: 160px;

  svg:first-of-type {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
    pointer-events: none;
  }

  svg:last-of-type {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
    pointer-events: none;
  }
`,_f=p.select`
  appearance: none;
  width: 100%;
  padding: 0.625rem 2.25rem 0.625rem 2.25rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: white;

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }
  }
`,sx=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: #4b5563;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    background-color: #f9fafb;
    color: #111827;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: #d1d5db;

    &:hover {
      background-color: #4b5563;
      color: white;
    }
  }
`,g8=p(sx)`
  background-color: #2563eb;  
  color: white;
  border-color: #2563eb;
  &:hover {
    background-color: #2455ddd3;
    color: white;
    }`,b8=p.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-top-color: #374151;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Os=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-color: #4b5563;
  }
`,Bs=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${a=>a.bg||"#eff6ff"};
  border-radius: 0.5rem;
  color: ${a=>a.color||"#2563eb"};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,$s=p.div`
  flex: 1;
`,Ks=p.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,Us=p.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,x8=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,v8=p.div`
  overflow-x: auto;
`,y8=p.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
`,j8=p.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-bottom-color: #4b5563;
  }
`,ra=p.th`
  text-align: left;
  padding: 1rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,w8=p.tbody``,rh=p.tr`
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(249, 250, 251, 0.8);
  }

  &:last-child {
    border-bottom: none;
  }

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #4b5563;

    &:hover {
      background-color: rgba(55, 65, 81, 0.5);
    }
  }
`,wn=p.td`
  padding: 1.25rem 1.5rem;
  font-size: 0.875rem;
  color: ${a=>a.color||"#4b5563"};

  @media (prefers-color-scheme: dark) {
    color: ${a=>a.color||"#d1d5db"};
  }
`,A8=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,S8=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${a=>a.bg||"#f3f4f6"};
  border-radius: 0.5rem;
  color: ${a=>a.color||"#6b7280"};
  flex-shrink: 0;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>a.darkBg||"#374151"};
    color: ${a=>a.darkColor||"#9ca3af"};
  }
`,k8=p.div`
  font-weight: 500;
  color: #111827;
  transition: color 0.2s;
  margin-bottom: 0.25rem;

  ${rh}:hover & {
    color: #2563eb;
  }

  @media (prefers-color-scheme: dark) {
    color: white;

    ${rh}:hover & {
      color: #60a5fa;
    }
  }
`,C8=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #6b7280;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,$c=p.span`
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  white-space: nowrap;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.375rem;
    flex-shrink: 0;
  }
`,E8=p($c)`
  background-color: ${a=>{switch(a.type){case"PDF":return"#fee2e2";case"Doc":return"#dbeafe";case"PPT":return"#fef3c7";case"Excel":return"#dcfce7";case"Image":return"#f3e8ff";default:return"#f3f4f6"}}};
  color: ${a=>{switch(a.type){case"PDF":return"#991b1b";case"Doc":return"#1e40af";case"PPT":return"#92400e";case"Excel":return"#166534";case"Image":return"#6b21a8";default:return"#374151"}}};
  border-color: ${a=>{switch(a.type){case"PDF":return"#fecaca";case"Doc":return"#bfdbfe";case"PPT":return"#fde68a";case"Excel":return"#bbf7d0";case"Image":return"#e9d5ff";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>{switch(a.type){case"PDF":return"rgba(220, 38, 38, 0.2)";case"Doc":return"rgba(37, 99, 235, 0.2)";case"PPT":return"rgba(245, 158, 11, 0.2)";case"Excel":return"rgba(22, 163, 74, 0.2)";case"Image":return"rgba(147, 51, 234, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${a=>{switch(a.type){case"PDF":return"#fca5a5";case"Doc":return"#93c5fd";case"PPT":return"#fcd34d";case"Excel":return"#86efac";case"Image":return"#d8b4fe";default:return"#d1d5db"}}};
    border-color: ${a=>{switch(a.type){case"PDF":return"rgba(220, 38, 38, 0.3)";case"Doc":return"rgba(37, 99, 235, 0.3)";case"PPT":return"rgba(245, 158, 11, 0.3)";case"Excel":return"rgba(22, 163, 74, 0.3)";case"Image":return"rgba(147, 51, 234, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,M8=p($c)`
  background-color: #f3f4f6;
  color: #374151;
  border-color: #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: #d1d5db;
    border-color: rgba(75, 85, 99, 0.5);
  }
`,N8=p($c)`
  background-color: ${a=>{switch(a.status){case"Active":return"#ecfdf5";case"Pending":return"#fefce8";case"Disabled":return"#fef2f2";default:return"#f9fafb"}}};
  color: ${a=>{switch(a.status){case"Active":return"#047857";case"Pending":return"#b45309";case"Disabled":return"#b91c1c";default:return"#374151"}}};
  border-color: ${a=>{switch(a.status){case"Active":return"#a7f3d0";case"Pending":return"#fde68a";case"Disabled":return"#fecaca";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>{switch(a.status){case"Active":return"rgba(16, 185, 129, 0.2)";case"Pending":return"rgba(245, 158, 11, 0.2)";case"Disabled":return"rgba(220, 38, 38, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${a=>{switch(a.status){case"Active":return"#86efac";case"Pending":return"#fcd34d";case"Disabled":return"#fca5a5";default:return"#d1d5db"}}};
    border-color: ${a=>{switch(a.status){case"Active":return"rgba(16, 185, 129, 0.3)";case"Pending":return"rgba(245, 158, 11, 0.3)";case"Disabled":return"rgba(220, 38, 38, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,T8=p($c)`
  background-color: ${a=>a.paid==="Free"?"#f9fafb":"#eff6ff"};
  color: ${a=>a.paid==="Free"?"#374151":"#1e40af"};
  border-color: ${a=>a.paid==="Free"?"#e5e7eb":"#bfdbfe"};

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>a.paid==="Free"?"rgba(55, 65, 81, 0.5)":"rgba(37, 99, 235, 0.2)"};
    color: ${a=>a.paid==="Free"?"#d1d5db":"#93c5fd"};
    border-color: ${a=>a.paid==="Free"?"rgba(75, 85, 99, 0.5)":"rgba(37, 99, 235, 0.3)"};
  }
`,_8=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`,cx=p.button`
  padding: 0.5rem;
  color: #6b7280;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.hoverBg||"#f3f4f6"};
    color: ${a=>a.hoverColor||"#374151"};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    &:hover {
      background-color: ${a=>a.hoverBg||"#4b5563"};
      color: ${a=>a.hoverColor||"white"};
    }
  }
`,R8=p(cx)`
  &:hover {
    background-color: #eff6ff;
    color: #2563eb;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgba(37, 99, 235, 0.2);
      color: #60a5fa;
    }
  }
`,D8=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-top-color: #4b5563;
  }
`,z8=p.div`
  font-size: 0.875rem;
  color: #6b7280;

  span {
    font-weight: 500;
    color: #111827;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    span {
      color: white;
    }
  }
`,O8=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,zl=p.button`
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  background-color: ${a=>a.active?"#2563eb":"white"};
  color: ${a=>a.active?"white":"#4b5563"};
  border: 1px solid ${a=>a.active?"#2563eb":"#e5e7eb"};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.active?"#1d4ed8":"#f9fafb"};
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>a.active?"#2563eb":"#374151"};
    color: ${a=>a.active?"white":"#d1d5db"};
    border-color: ${a=>a.active?"#2563eb":"#4b5563"};

    &:hover {
      background-color: ${a=>a.active?"#1d4ed8":"#4b5563"};
    }
  }
`,B8=p.div`
  padding: 3rem 1.5rem;
  text-align: center;
`,$8=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,K8=p.div`
  width: 4rem;
  height: 4rem;
  background-color: #f3f4f6;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  svg {
    width: 2rem;
    height: 2rem;
    color: #9ca3af;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;

    svg {
      color: #6b7280;
    }
  }
`,U8=p.p`
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,L8=p.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 1rem;

  @media (prefers-color-scheme: dark) {
    color: #6b7280;
  }
`,H8=p.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #2563eb;
  background-color: #eff6ff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #dbeafe;
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgba(37, 99, 235, 0.2);
    color: #60a5fa;

    &:hover {
      background-color: rgba(37, 99, 235, 0.3);
    }
  }
`,Q8=p.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`,q8=p.div`
  position: fixed;
  z-index: 50;
  width: 14rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #4b5563;
  }
`,ro=p.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: ${a=>a.danger?"#dc2626":"#374151"};
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.danger?"#fef2f2":"#f9fafb"};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${a=>a.danger?"#dc2626":"#6b7280"};
  }

  @media (prefers-color-scheme: dark) {
    color: ${a=>a.danger?"#f87171":"#e5e7eb"};

    &:hover {
      background-color: ${a=>a.danger?"rgba(220, 38, 38, 0.2)":"#374151"};
    }

    svg {
      color: ${a=>a.danger?"#f87171":"#9ca3af"};
    }
  }
`,Y8=p.div`
  height: 1px;
  background-color: #f3f4f6;
  margin: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #4b5563;
  }
`,P8=a=>{switch(a==null?void 0:a.toLowerCase()){case"pdf":return r.jsx(Jt,{});case"doc":case"docx":return r.jsx(C6,{});case"ppt":case"pptx":return r.jsx(L6,{});case"xls":case"xlsx":return r.jsx(A6,{});case"jpg":case"png":case"image":return r.jsx(R6,{});default:return r.jsx(Oc,{})}},F8=a=>{switch(a==null?void 0:a.toLowerCase()){case"pdf":return{bg:"#fee2e2",color:"#dc2626",darkBg:"rgba(220, 38, 38, 0.2)",darkColor:"#f87171"};case"doc":case"docx":return{bg:"#dbeafe",color:"#2563eb",darkBg:"rgba(37, 99, 235, 0.2)",darkColor:"#60a5fa"};case"ppt":case"pptx":return{bg:"#fef3c7",color:"#d97706",darkBg:"rgba(245, 158, 11, 0.2)",darkColor:"#fbbf24"};case"xls":case"xlsx":return{bg:"#dcfce7",color:"#16a34a",darkBg:"rgba(22, 163, 74, 0.2)",darkColor:"#4ade80"};case"jpg":case"png":case"image":return{bg:"#f3e8ff",color:"#9333ea",darkBg:"rgba(147, 51, 234, 0.2)",darkColor:"#c084fc"};default:return{bg:"#f3f4f6",color:"#6b7280",darkBg:"rgba(55, 65, 81, 0.5)",darkColor:"#9ca3af"}}},V8=[{id:1,title:"Data Structure and Algorithm Hand Written Notes",type:"PDF",semester:"3rd",subject:"DSA",paid:"Free",status:"Active",size:"2.4 MB",pages:45,downloads:234},{id:2,title:"Data Structure and Algorithm Textbook",type:"PDF",semester:"3rd",subject:"DSA",paid:"Paid",status:"Active",size:"15.2 MB",pages:450,downloads:89},{id:3,title:"OOP Concept Summary",type:"Doc",semester:"3rd",subject:"OOP",paid:"Free",status:"Disabled",size:"1.1 MB",pages:12,downloads:0},{id:4,title:"SQL Important Queries",type:"PDF",semester:"5th",subject:"DBMS",paid:"Paid",status:"Active",size:"3.7 MB",pages:78,downloads:15},{id:5,title:"Computer Networks Lab Manual",type:"PDF",semester:"6th",subject:"CN",paid:"Free",status:"Active",size:"5.3 MB",pages:120,downloads:41},{id:6,title:"Operating Systems Lecture Slides",type:"PPT",semester:"4th",subject:"OS",paid:"Free",status:"Pending",size:"8.9 MB",pages:65,downloads:17}],G8=()=>{const a=Ct(),[s,c]=C.useState([]),[i,d]=C.useState([]),[f,g]=C.useState(""),[b,m]=C.useState("All"),[h,w]=C.useState("All"),[y,v]=C.useState("All"),[A,S]=C.useState(null),[M,T]=C.useState(null);C.useEffect(()=>{c(V8)},[]),C.useEffect(()=>{let D=s;if(b!=="All"&&(D=D.filter(I=>I.subject===b)),h!=="All"&&(D=D.filter(I=>I.status===h)),y!=="All"&&(D=D.filter(I=>I.type===y)),f){const I=f.toLowerCase();D=D.filter($=>$.title.toLowerCase().includes(I)||$.subject.toLowerCase().includes(I)||$.type.toLowerCase().includes(I))}d(D)},[s,b,h,y,f]);const k=(D,I)=>{D.preventDefault(),S({x:D.clientX,y:D.clientY}),T(I)},N=()=>{S(null),T(null)},E=D=>{a(`/documents/${D}/edit`),N()},z=()=>{m("All"),w("All"),v("All"),g("")},K=s.length,H=s.filter(D=>D.status==="Published"||D.status==="Active").length,L=s.filter(D=>D.status==="Pending").length,R=s.filter(D=>D.status==="Disabled").length;return r.jsxs(r.Fragment,{children:[r.jsx(a8,{}),r.jsxs(o8,{children:[r.jsx(l8,{children:r.jsxs(i8,{children:[r.jsxs(s8,{children:[r.jsxs(c8,{children:[r.jsx("h1",{children:"Documents & Notes"}),r.jsx("p",{children:"Upload and manage study materials"})]}),r.jsxs(u8,{onClick:()=>a("/documents/upload"),children:[r.jsx(da,{}),"Upload Document "]})]}),r.jsx(d8,{children:r.jsxs(f8,{children:[r.jsxs(h8,{children:[r.jsxs(m8,{children:[r.jsx(Zr,{}),r.jsx(p8,{type:"text",value:f,onChange:D=>g(D.target.value),placeholder:"Search by title, subject, or type..."})]}),r.jsxs(Tf,{children:[r.jsx(Wt,{}),r.jsxs(_f,{value:y,onChange:D=>v(D.target.value),children:[r.jsx("option",{value:"All",children:"All Types"}),r.jsx("option",{value:"PDF",children:"PDF"}),r.jsx("option",{value:"Doc",children:"Document"}),r.jsx("option",{value:"PPT",children:"Presentation"}),r.jsx("option",{value:"Excel",children:"Spreadsheet"}),r.jsx("option",{value:"Image",children:"Image"})]}),r.jsx(Pe,{})]}),r.jsxs(Tf,{children:[r.jsx(Wt,{}),r.jsxs(_f,{value:b,onChange:D=>m(D.target.value),children:[" ",r.jsx("option",{value:"All",children:"All Subjects"}),r.jsx("option",{value:"DSA",children:"DSA"}),r.jsx("option",{value:"OOP",children:"OOP"}),r.jsx("option",{value:"DBMS",children:"DBMS"}),r.jsx("option",{value:"CN",children:"CN"}),r.jsx("option",{value:"OS",children:"OS"})]}),r.jsx(Pe,{})]}),r.jsxs(Tf,{children:[r.jsx(Wt,{}),r.jsxs(_f,{value:h,onChange:D=>w(D.target.value),children:[r.jsx("option",{value:"All",children:"All Status"}),r.jsx("option",{value:"Active",children:"Active"}),r.jsx("option",{value:"Pending",children:"Pending"}),r.jsx("option",{value:"Disabled",children:"Disabled"})]}),r.jsx(Pe,{})]}),(b!=="All"||h!=="All"||y!=="All"||f)&&r.jsxs(sx,{onClick:z,children:[r.jsx(kt,{}),"Clear"]}),r.jsxs(g8,{children:[r.jsx(dr,{}),"Export"]})]}),r.jsxs(b8,{children:[r.jsxs(Os,{children:[r.jsx(Bs,{bg:"#eff6ff",color:"#2563eb",children:r.jsx(Jt,{})}),r.jsxs($s,{children:[r.jsx(Ks,{children:"Total Documents"}),r.jsx(Us,{children:K})]})]}),r.jsxs(Os,{children:[r.jsx(Bs,{bg:"#ecfdf5",color:"#10b981",children:r.jsx(at,{})}),r.jsxs($s,{children:[r.jsx(Ks,{children:"Active Documents"}),r.jsx(Us,{children:H})]})]}),r.jsxs(Os,{children:[r.jsx(Bs,{bg:"#fef3c7",color:"#f5510b",children:r.jsx(kt,{})}),r.jsxs($s,{children:[r.jsx(Ks,{children:"Disabled Documents"}),r.jsx(Us,{children:R})]})]}),r.jsxs(Os,{children:[r.jsx(Bs,{bg:"#f3e8ff",color:"#fc982d",children:r.jsx(Ut,{})}),r.jsxs($s,{children:[r.jsx(Ks,{children:"Pending Documents"}),r.jsx(Us,{children:L.toLocaleString()})]})]})]})]})}),r.jsxs(x8,{children:[r.jsx(v8,{children:r.jsxs(y8,{children:[r.jsx(j8,{children:r.jsxs("tr",{children:[r.jsx(ra,{width:"35%",children:"Document"}),r.jsx(ra,{width:"10%",children:"Type"}),r.jsx(ra,{width:"10%",children:"Semester"}),r.jsx(ra,{width:"12%",children:"Subject"}),r.jsx(ra,{width:"10%",children:"Access"}),r.jsx(ra,{width:"10%",children:"Status"}),r.jsx(ra,{width:"13%",style:{textAlign:"right"},children:"Actions"})]})}),r.jsx(w8,{children:i.length>0?i.map(D=>{const I=F8(D.type);return r.jsxs(rh,{onContextMenu:$=>k($,D),children:[r.jsx(wn,{children:r.jsxs(A8,{children:[r.jsx(S8,{bg:I.bg,color:I.color,darkBg:I.darkBg,darkColor:I.darkColor,children:P8(D.type)}),r.jsxs("div",{children:[r.jsx(k8,{children:D.title}),r.jsxs(C8,{children:[r.jsx("span",{children:D.size||"—"}),r.jsx("span",{children:"•"}),r.jsxs("span",{children:[D.pages||0," pages"]}),r.jsx("span",{children:"•"}),r.jsxs("span",{children:[D.downloads||0," downloads"]})]})]})]})}),r.jsx(wn,{children:r.jsx(E8,{type:D.type,children:D.type})}),r.jsx(wn,{children:r.jsx(M8,{children:D.semester||"—"})}),r.jsx(wn,{children:r.jsx("span",{style:{fontWeight:500,color:"#111827",...window.matchMedia("(prefers-color-scheme: dark)").matches&&{color:"white"}},children:D.subject})}),r.jsx(wn,{children:r.jsx(T8,{paid:D.paid,children:D.paid})}),r.jsx(wn,{children:r.jsxs(N8,{status:D.status,children:[D.status==="Published"&&r.jsx(at,{}),D.status==="Active"&&r.jsx(at,{}),D.status==="Draft"&&r.jsx(gt,{}),D.status==="Pending"&&r.jsx(Ut,{}),D.status==="Disabled"&&r.jsx(kt,{}),D.status]})}),r.jsx(wn,{children:r.jsxs(_8,{children:[r.jsx(R8,{onClick:()=>E(D.id),title:"Edit document",children:r.jsx(Tn,{})}),r.jsx(cx,{onClick:$=>k($,D),title:"More options",children:r.jsx(ua,{})})]})})]},D.id)}):r.jsx("tr",{children:r.jsx(wn,{colSpan:"7",style:{padding:0},children:r.jsx(B8,{children:r.jsxs($8,{children:[r.jsx(K8,{children:r.jsx(Bc,{})}),r.jsx(U8,{children:"No documents found"}),r.jsx(L8,{children:"Try adjusting your filters or upload a new document"}),r.jsx(H8,{onClick:z,children:"Clear all filters"})]})})})})})]})}),r.jsxs(D8,{children:[r.jsxs(z8,{children:["Showing ",r.jsx("span",{children:i.length})," of"," ",r.jsx("span",{children:s.length})," documents"]}),r.jsxs(O8,{children:[r.jsx(zl,{children:"Previous"}),r.jsx(zl,{active:!0,children:"1"}),r.jsx(zl,{children:"2"}),r.jsx(zl,{children:"3"}),r.jsx(zl,{children:"Next"})]})]})]})]})}),A&&M&&r.jsxs(r.Fragment,{children:[r.jsx(Q8,{onClick:N}),r.jsxs(q8,{style:{left:A.x,top:A.y},children:[r.jsxs(ro,{onClick:()=>E(M.id),children:[r.jsx(Tn,{}),"Edit Document"]}),r.jsxs(ro,{onClick:()=>{var D;(D=navigator.clipboard)==null||D.writeText(window.location.origin+`/documents/${M.id}`),N()},children:[r.jsx(Qb,{}),"Copy Link"]}),r.jsxs(ro,{children:[r.jsx(dr,{}),"Download"]}),r.jsxs(ro,{children:[r.jsx(oi,{}),"Duplicate"]}),r.jsxs(ro,{children:[r.jsx(zc,{}),"Archive"]}),r.jsx(Y8,{}),r.jsxs(ro,{danger:!0,children:[r.jsx(yo,{}),"Delete"]})]})]})]})]})},Z8=Ar`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`,X8=p.div`
  display: flex;
  height: 100vh;
  background-color: #f9fafb;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`,I8=p.div`
  flex: 1;
  overflow: auto;
`,J8=p.div`
  padding: 2rem;
`,W8=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`,eS=p.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;

    @media (prefers-color-scheme: dark) {
      color: #9ca3af;
    }
  }
`,tS=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #1d4ed8;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #3b82f6;
    &:hover {
      background-color: #2563eb;
    }
  }
`,rS=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  margin-bottom: 1rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,nS=p.div`
  padding: 1.25rem;
`,aS=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`,oS=p.div`
  position: relative;
  flex: 1;
  min-width: 300px;

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
  }
`,lS=p.input`
  width: 100%;
  padding: 0.625rem 0.75rem 0.625rem 2.25rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: white;

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }
  }
`,K1=p.div`
  position: relative;
  min-width: 160px;

  select {
    appearance: none;
    width: 100%;
    padding: 0.625rem 2rem 0.625rem 2.25rem;
    font-size: 0.875rem;
    background-color: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    cursor: pointer;
    color: #374151;
    
    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
    }

    @media (prefers-color-scheme: dark) {
      background-color: #374151;
      border-color: #4b5563;
      color: white;
    }
  }

  svg {
    position: absolute;
    pointer-events: none;
    
    &:first-of-type {
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      color: #9ca3af;
    }
    
    &:last-of-type {
      right: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      color: #9ca3af;
    }
  }
`,iS=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;

  &:hover {
    background-color: #f9fafb;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: #6b7280;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: #e5e7eb;

    &:hover {
      background-color: #4b5563;
    }

    svg {
      color: #9ca3af;
    }
  }
`,sS=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: #4b5563;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #f9fafb;
    color: #111827;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: #d1d5db;

    &:hover {
      background-color: #4b5563;
      color: white;
    }
  }
`,cS=p.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Ol=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: ${a=>a.active?"#eff6ff":"white"};
  border: 1px solid ${a=>a.active?"#bfdbfe":"#e5e7eb"};
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: ${a=>a.active?"#eff6ff":"#f9fafb"};
    border-color: ${a=>a.active?"#2563eb":"#d1d5db"};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>a.active?"rgba(37, 99, 235, 0.2)":"#1f2937"};
    border-color: ${a=>a.active?"rgba(37, 99, 235, 0.3)":"#374151"};

    &:hover {
      background-color: ${a=>a.active?"rgba(37, 99, 235, 0.3)":"#2d3748"};
      border-color: ${a=>a.active?"rgba(37, 99, 235, 0.4)":"#4b5563"};
    }
  }
`,Bl=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${a=>a.bg||"#eff6ff"};
  border-radius: 0.5rem;
  color: ${a=>a.color||"#2563eb"};
  flex-shrink: 0;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,$l=p.div`
  flex: 1;
`,Kl=p.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,Ul=p.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,uS=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,dS=p.div`
  overflow-x: auto;
`,fS=p.table`
  width: 100%;
  border-collapse: collapse;
`,hS=p.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-bottom-color: #4b5563;
  }
`,Ll=p.th`
  text-align: left;
  padding: 1rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,mS=p.tbody``,U1=p.tr`
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(249, 250, 251, 0.8);
  }

  &:last-child {
    border-bottom: none;
  }

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #4b5563;

    &:hover {
      background-color: rgba(55, 65, 81, 0.5);
    }
  }
`,no=p.td`
  padding: 1.25rem 1.5rem;
  font-size: 0.875rem;
  color: #4b5563;
  vertical-align: middle;

  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`,pS=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,gS=p.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  background-color: ${a=>a.color||"#2563eb"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  flex-shrink: 0;
`,bS=p.div`
  display: flex;
  flex-direction: column;
`,xS=p.span`
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.125rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,vS=p.span`
  font-size: 0.75rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,ux=p.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  white-space: normal;
  word-break: break-word;
  max-width: 350px;
`,yS=p(ux)`
  background-color: ${a=>{switch(a.type){case"update":return"#eff6ff";case"approve":return"#ecfdf5";case"upload":return"#f9fafb";case"role":return"#fefce8";case"block":return"#fef2f2";case"maintenance":return"#faf5ff";default:return"#f9fafb"}}};
  
  color: ${a=>{switch(a.type){case"update":return"#1e40af";case"approve":return"#065f46";case"upload":return"#374151";case"role":return"#92400e";case"block":return"#991b1b";case"maintenance":return"#6b21a8";default:return"#374151"}}};
  
  border-color: ${a=>{switch(a.type){case"update":return"#bfdbfe";case"approve":return"#d1fae5";case"upload":return"#e5e7eb";case"role":return"#fde68a";case"block":return"#fecaca";case"maintenance":return"#e9d5ff";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>{switch(a.type){case"update":return"rgba(37, 99, 235, 0.2)";case"approve":return"rgba(16, 185, 129, 0.2)";case"upload":return"rgba(55, 65, 81, 0.5)";case"role":return"rgba(245, 158, 11, 0.2)";case"block":return"rgba(220, 38, 38, 0.2)";case"maintenance":return"rgba(139, 92, 246, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${a=>{switch(a.type){case"update":return"#93c5fd";case"approve":return"#86efac";case"upload":return"#d1d5db";case"role":return"#fcd34d";case"block":return"#fca5a5";case"maintenance":return"#d8b4fe";default:return"#d1d5db"}}};
    border-color: ${a=>{switch(a.type){case"update":return"rgba(37, 99, 235, 0.3)";case"approve":return"rgba(16, 185, 129, 0.3)";case"upload":return"rgba(75, 85, 99, 0.5)";case"role":return"rgba(245, 158, 11, 0.3)";case"block":return"rgba(220, 38, 38, 0.3)";case"maintenance":return"rgba(139, 92, 246, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,jS=p(ux)`
  background-color: #f9fafb;
  color: #4b5563;
  border-color: #e5e7eb;
  font-family: monospace;

  svg {
    width: 0.75rem;
    height: 0.75rem;
    color: #6b7280;
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: #d1d5db;
    border-color: rgba(75, 85, 99, 0.5);

    svg {
      color: #9ca3af;
    }
  }
`,wS=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,AS=p.span`
  font-weight: 500;
  color: #111827;
  white-space: nowrap;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,SS=p.span`
  font-size: 0.75rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,kS=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`,dx=p.button`
  padding: 0.5rem;
  color: #6b7280;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.hoverBg||"#f3f4f6"};
    color: ${a=>a.hoverColor||"#374151"};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    &:hover {
      background-color: ${a=>a.hoverBg||"#4b5563"};
      color: ${a=>a.hoverColor||"white"};
    }
  }
`,CS=p(dx)`
  &:hover {
    background-color: #eff6ff;
    color: #2563eb;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgba(37, 99, 235, 0.2);
      color: #60a5fa;
    }
  }
`,ES=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;
  flex-wrap: wrap;
  gap: 1rem;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-top-color: #4b5563;
  }
`,MS=p.div`
  font-size: 0.875rem;
  color: #6b7280;

  span {
    font-weight: 600;
    color: #111827;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    span {
      color: white;
    }
  }
`,NS=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Hl=p.button`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: ${a=>a.active?"white":"#4b5563"};
  background-color: ${a=>a.active?"#2563eb":"white"};
  border: 1px solid ${a=>a.active?"#2563eb":"#e5e7eb"};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${a=>a.active?"#1d4ed8":"#f9fafb"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (prefers-color-scheme: dark) {
    color: ${a=>a.active?"white":"#d1d5db"};
    background-color: ${a=>a.active?"#2563eb":"#374151"};
    border-color: ${a=>a.active?"#2563eb":"#4b5563"};

    &:hover {
      background-color: ${a=>a.active?"#1d4ed8":"#4b5563"};
    }
  }
`,TS=p.div`
  padding: 3rem 1.5rem;
  text-align: center;
`,_S=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,RS=p.div`
  width: 4rem;
  height: 4rem;
  background-color: #f3f4f6;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 2rem;
    height: 2rem;
    color: #9ca3af;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;

    svg {
      color: #6b7280;
    }
  }
`,DS=p.p`
  color: #6b7280;
  font-weight: 500;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,zS=p.p`
  font-size: 0.875rem;
  color: #9ca3af;

  @media (prefers-color-scheme: dark) {
    color: #6b7280;
  }
`,OS=p.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #2563eb;
  background-color: #eff6ff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #dbeafe;
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgba(37, 99, 235, 0.2);
    color: #60a5fa;

    &:hover {
      background-color: rgba(37, 99, 235, 0.3);
    }
  }
`,BS=p.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`,$S=p.div`
  position: fixed;
  z-index: 50;
  width: 14rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #4b5563;
  }
`,Ls=p.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: ${a=>a.danger?"#dc2626":"#374151"};
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.danger?"#fef2f2":"#f9fafb"};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${a=>a.danger?"#dc2626":"#6b7280"};
  }

  @media (prefers-color-scheme: dark) {
    color: ${a=>a.danger?"#f87171":"#e5e7eb"};

    &:hover {
      background-color: ${a=>a.danger?"rgba(220, 38, 38, 0.2)":"#374151"};
    }

    svg {
      color: ${a=>a.danger?"#f87171":"#9ca3af"};
    }
  }
`,KS=p.div`
  height: 1px;
  background-color: #f3f4f6;
  margin: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #4b5563;
  }
`,US=a=>{switch(a){case"update":return r.jsx(uc,{size:12});case"approve":return r.jsx(at,{size:12});case"upload":return r.jsx(Sh,{size:12});case"role":return r.jsx(cr,{size:12});case"block":return r.jsx(vc,{size:12});case"maintenance":return r.jsx(Kb,{size:12});default:return r.jsx(Jt,{size:12})}},LS=a=>{const s=["#2563eb","#7c3aed","#0891b2","#059669","#b45309","#dc2626"],c=a.length%s.length;return s[c]},HS=a=>a.split(" ").map(s=>s[0]).join("").substring(0,2).toUpperCase(),QS=a=>new Date(a).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).replace(",",""),na=[{id:1,user:"Admin User",role:"Administrator",action:"Updated subscription plan Pro",actionType:"update",ipAddress:"192.168.1.45",timestamp:"2026-02-13 14:32:10",relativeTime:"2 hours ago"},{id:2,user:"Admin User",role:"Administrator",action:"Approved student question #3",actionType:"approve",ipAddress:"192.168.1.45",timestamp:"2026-02-13 13:15:22",relativeTime:"3 hours ago"},{id:3,user:"Vikram Singh",role:"Instructor",action:"Uploaded document: OS Process Notes",actionType:"upload",ipAddress:"10.0.0.12",timestamp:"2026-02-13 11:48:05",relativeTime:"5 hours ago"},{id:4,user:"Admin User",role:"Administrator",action:"Changed user role: Amit Kumar → Manager",actionType:"role",ipAddress:"192.168.1.45",timestamp:"2026-02-12 16:20:33",relativeTime:"1 day ago"},{id:5,user:"Amit Kumar",role:"Manager",action:"Created module: Module 1 → OSI Model",actionType:"upload",ipAddress:"10.0.0.8",timestamp:"2026-02-12 14:55:18",relativeTime:"1 day ago"},{id:6,user:"Admin User",role:"Administrator",action:"Blocked user: Sneha Reddy",actionType:"block",ipAddress:"192.168.1.45",timestamp:"2026-02-11 09:12:44",relativeTime:"2 days ago"},{id:7,user:"Admin User",role:"Administrator",action:"Enabled maintenance mode",actionType:"maintenance",ipAddress:"192.168.1.45",timestamp:"2026-02-10 22:00:01",relativeTime:"3 days ago"},{id:8,user:"Admin User",role:"Administrator",action:"Updated points rules",actionType:"update",ipAddress:"192.168.1.45",timestamp:"2026-02-10 18:30:12",relativeTime:"3 days ago"}],qS=()=>{const a=Ct(),[s,c]=C.useState(""),[i,d]=C.useState("all"),[f,g]=C.useState("all"),[b,m]=C.useState(null),[h,w]=C.useState(null),y=na.filter(H=>{const L=s===""||H.user.toLowerCase().includes(s.toLowerCase())||H.action.toLowerCase().includes(s.toLowerCase())||H.ipAddress.includes(s),R=i==="all"||H.actionType===i,D=f==="all"||f==="admin"&&H.role==="Administrator"||f==="instructor"&&H.role==="Instructor"||f==="manager"&&H.role==="Manager";return L&&R&&D}),v=(H,L)=>{H.preventDefault(),m({x:H.clientX,y:H.clientY}),w(L)},A=()=>{m(null),w(null)},S=()=>{c(""),d("all"),g("all")},M=H=>{a(`/audit-logs/${H}`),A()},T=(H,L)=>{d(L)},k=na.length,N=na.filter(H=>H.actionType==="approve").length,E=na.filter(H=>H.actionType==="upload").length,z=na.filter(H=>H.actionType==="role").length,K=na.filter(H=>["block","maintenance"].includes(H.actionType)).length;return r.jsxs(r.Fragment,{children:[r.jsx(Z8,{}),r.jsxs(X8,{children:[r.jsx(I8,{children:r.jsxs(J8,{children:[r.jsxs(W8,{children:[r.jsxs(eS,{children:[r.jsx("h1",{children:"Audit Logs"}),r.jsx("p",{children:"Track all administrative actions on the platform"})]}),r.jsxs(tS,{onClick:()=>a("/export-logs"),children:[r.jsx(dr,{size:16}),"Export Logs"]})]}),r.jsx(rS,{children:r.jsx(nS,{children:r.jsxs(aS,{children:[r.jsxs(oS,{children:[r.jsx(Zr,{size:16}),r.jsx(lS,{type:"text",placeholder:"Search users, actions, IP addresses...",value:s,onChange:H=>c(H.target.value)})]}),r.jsxs(K1,{children:[r.jsx(Wt,{size:16}),r.jsxs("select",{value:i,onChange:H=>d(H.target.value),children:[r.jsx("option",{value:"all",children:"All Actions"}),r.jsx("option",{value:"update",children:"Updates"}),r.jsx("option",{value:"approve",children:"Approvals"}),r.jsx("option",{value:"upload",children:"Uploads"}),r.jsx("option",{value:"role",children:"Role Changes"}),r.jsx("option",{value:"block",children:"Blocks"}),r.jsx("option",{value:"maintenance",children:"Maintenance"})]}),r.jsx(Pe,{size:16})]}),r.jsxs(K1,{children:[r.jsx(kh,{size:16}),r.jsxs("select",{value:f,onChange:H=>g(H.target.value),children:[r.jsx("option",{value:"all",children:"All Users"}),r.jsx("option",{value:"admin",children:"Administrators"}),r.jsx("option",{value:"instructor",children:"Instructors"}),r.jsx("option",{value:"manager",children:"Managers"})]}),r.jsx(Pe,{size:16})]}),r.jsxs(iS,{children:[r.jsx(Jf,{size:16}),r.jsx("span",{children:"Last 7 days"}),r.jsx(Pe,{size:16})]}),(s||i!=="all"||f!=="all")&&r.jsxs(sS,{onClick:S,children:[r.jsx(kt,{size:16}),"Clear"]})]})})}),r.jsxs(cS,{children:[r.jsxs(Ol,{active:i==="all",onClick:()=>T("action","all"),children:[r.jsx(Bl,{bg:"#eff6ff",color:"#2563eb",children:r.jsx(Kb,{})}),r.jsxs($l,{children:[r.jsx(Kl,{children:"All Activities"}),r.jsx(Ul,{children:k})]})]}),r.jsxs(Ol,{active:i==="approve",onClick:()=>T("action","approve"),children:[r.jsx(Bl,{bg:"#ecfdf5",color:"#10b981",children:r.jsx(at,{})}),r.jsxs($l,{children:[r.jsx(Kl,{children:"Approvals"}),r.jsx(Ul,{children:N})]})]}),r.jsxs(Ol,{active:i==="upload",onClick:()=>T("action","upload"),children:[r.jsx(Bl,{bg:"#f3f4f6",color:"#6b7280",children:r.jsx(Sh,{})}),r.jsxs($l,{children:[r.jsx(Kl,{children:"Uploads"}),r.jsx(Ul,{children:E})]})]}),r.jsxs(Ol,{active:i==="role",onClick:()=>T("action","role"),children:[r.jsx(Bl,{bg:"#fef3c7",color:"#f59e0b",children:r.jsx(cr,{})}),r.jsxs($l,{children:[r.jsx(Kl,{children:"Role Changes"}),r.jsx(Ul,{children:z})]})]}),r.jsxs(Ol,{active:i==="block"||i==="maintenance",onClick:()=>T("action","block"),children:[r.jsx(Bl,{bg:"#fee2e2",color:"#ef4444",children:r.jsx(vc,{})}),r.jsxs($l,{children:[r.jsx(Kl,{children:"Security"}),r.jsx(Ul,{children:K})]})]})]}),r.jsxs(uS,{children:[r.jsx(dS,{children:r.jsxs(fS,{children:[r.jsx(hS,{children:r.jsxs("tr",{children:[r.jsx(Ll,{children:"User"}),r.jsx(Ll,{children:"Action"}),r.jsx(Ll,{children:"IP Address"}),r.jsx(Ll,{children:"Timestamp"}),r.jsx(Ll,{style:{textAlign:"right"},children:"Actions"})]})}),r.jsx(mS,{children:y.length>0?y.map(H=>r.jsxs(U1,{onContextMenu:L=>v(L,H),children:[r.jsx(no,{children:r.jsxs(pS,{children:[r.jsx(gS,{color:LS(H.user),children:HS(H.user)}),r.jsxs(bS,{children:[r.jsx(xS,{children:H.user}),r.jsx(vS,{children:H.role})]})]})}),r.jsx(no,{children:r.jsxs(yS,{type:H.actionType,children:[US(H.actionType),H.action]})}),r.jsx(no,{children:r.jsxs(jS,{children:[r.jsx(N6,{size:12}),H.ipAddress]})}),r.jsx(no,{children:r.jsxs(wS,{children:[r.jsx(AS,{children:QS(H.timestamp)}),r.jsxs(SS,{children:[r.jsx(Ut,{size:12}),H.relativeTime]})]})}),r.jsx(no,{children:r.jsxs(kS,{children:[r.jsx(CS,{onClick:()=>M(H.id),title:"View details",children:r.jsx(gt,{size:16})}),r.jsx(dx,{onClick:L=>v(L,H),title:"More options",children:r.jsx(ua,{size:16})})]})})]},H.id)):r.jsx(U1,{children:r.jsx(no,{colSpan:"5",style:{padding:0},children:r.jsx(TS,{children:r.jsxs(_S,{children:[r.jsx(RS,{children:r.jsx(Jt,{size:32})}),r.jsx(DS,{children:"No audit logs found"}),r.jsx(zS,{children:"Try adjusting your filters"}),r.jsx(OS,{onClick:S,children:"Clear all filters"})]})})})})})]})}),r.jsxs(ES,{children:[r.jsxs(MS,{children:["Showing ",r.jsx("span",{children:y.length})," of"," ",r.jsx("span",{children:na.length})," audit logs"]}),r.jsxs(NS,{children:[r.jsx(Hl,{disabled:!0,children:r.jsx(jh,{size:16})}),r.jsx(Hl,{active:!0,children:"1"}),r.jsx(Hl,{children:"2"}),r.jsx(Hl,{children:"3"}),r.jsx(Hl,{children:r.jsx(wh,{size:16})})]})]})]})]})}),b&&h&&r.jsxs(r.Fragment,{children:[r.jsx(BS,{onClick:A}),r.jsxs($S,{style:{left:b.x,top:b.y},children:[r.jsxs(Ls,{onClick:()=>M(h.id),children:[r.jsx(gt,{size:16}),"View Details"]}),r.jsxs(Ls,{children:[r.jsx(oi,{size:16}),"Copy Log ID"]}),r.jsxs(Ls,{children:[r.jsx(dr,{size:16}),"Export Entry"]}),r.jsx(KS,{}),r.jsxs(Ls,{danger:!0,children:[r.jsx(yo,{size:16}),"Delete Log"]})]})]})]})]})},YS=Ar`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`,PS=p.div`
  display: flex;
  height: 100vh;
  background-color: #f9fafb;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`,FS=p.div`
  flex: 1;
  overflow: auto;
`,VS=p.div`
  padding: 2rem;
`,GS=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`,ZS=p.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;

    @media (prefers-color-scheme: dark) {
      color: #9ca3af;
    }
  }
`,XS=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,IS=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #1d4ed8;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #3b82f6;
    &:hover {
      background-color: #2563eb;
    }
  }
`,JS=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background-color: white;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: #6b7280;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    color: #e5e7eb;
    border-color: #4b5563;

    &:hover {
      background-color: #4b5563;
    }

    svg {
      color: #9ca3af;
    }
  }
`,WS=p.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Hs=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,Qs=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`,qs=p.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,Ys=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${a=>a.bg||"#eff6ff"};
  border-radius: 0.5rem;
  color: ${a=>a.color||"#2563eb"};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,Ps=p.div`
  font-size: 1.875rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,Fs=p.div`
  font-size: 0.875rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,e9=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,t9=p.div`
  padding: 1.25rem;
`,r9=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`,n9=p.div`
  position: relative;
  flex: 1;
  min-width: 300px;

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
  }
`,a9=p.input`
  width: 100%;
  padding: 0.625rem 0.75rem 0.625rem 2.25rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: white;

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }
  }
`,Vs=p.div`
  position: relative;
  min-width: 160px;

  select {
    appearance: none;
    width: 100%;
    padding: 0.625rem 2rem 0.625rem 2.25rem;
    font-size: 0.875rem;
    background-color: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    cursor: pointer;
    color: #374151;
    
    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
    }

    @media (prefers-color-scheme: dark) {
      background-color: #374151;
      border-color: #4b5563;
      color: white;
    }
  }

  svg {
    position: absolute;
    pointer-events: none;
    
    &:first-of-type {
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      color: #9ca3af;
    }
    
    &:last-of-type {
      right: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      color: #9ca3af;
    }
  }
`,o9=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: #4b5563;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #f9fafb;
    color: #111827;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: #d1d5db;

    &:hover {
      background-color: #4b5563;
      color: white;
    }
  }
`,l9=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,i9=p.div`
  overflow-x: auto;
`,s9=p.table`
  width: 100%;
  border-collapse: collapse;
`,c9=p.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-bottom-color: #4b5563;
  }
`,An=p.th`
  text-align: left;
  padding: 1rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,u9=p.tbody``,L1=p.tr`
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(249, 250, 251, 0.8);
  }

  &:last-child {
    border-bottom: none;
  }

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #4b5563;

    &:hover {
      background-color: rgba(55, 65, 81, 0.5);
    }
  }
`,Hr=p.td`
  padding: 1.25rem 1.5rem;
  font-size: 0.875rem;
  color: #4b5563;
  vertical-align: middle;

  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`,d9=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,f9=p.div`
  font-weight: 500;
  color: #111827;
  max-width: 350px;
  word-break: break-word;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,h9=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #6b7280;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,jo=p.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  white-space: nowrap;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.25rem;
  }
`,m9=p(jo)`
  background-color: ${a=>{switch(a.type){case"MCQ":return"#eff6ff";case"Coding":return"#fef3c7";case"Written":return"#f3e8ff";default:return"#f3f4f6"}}};
  color: ${a=>{switch(a.type){case"MCQ":return"#1e40af";case"Coding":return"#92400e";case"Written":return"#6b21a8";default:return"#374151"}}};
  border-color: ${a=>{switch(a.type){case"MCQ":return"#bfdbfe";case"Coding":return"#fde68a";case"Written":return"#e9d5ff";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>{switch(a.type){case"MCQ":return"rgba(37, 99, 235, 0.2)";case"Coding":return"rgba(245, 158, 11, 0.2)";case"Written":return"rgba(139, 92, 246, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${a=>{switch(a.type){case"MCQ":return"#93c5fd";case"Coding":return"#fcd34d";case"Written":return"#d8b4fe";default:return"#d1d5db"}}};
    border-color: ${a=>{switch(a.type){case"MCQ":return"rgba(37, 99, 235, 0.3)";case"Coding":return"rgba(245, 158, 11, 0.3)";case"Written":return"rgba(139, 92, 246, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,p9=p(jo)`
  background-color: ${a=>{switch(a.difficulty){case"Easy":return"#ecfdf5";case"Medium":return"#fef3c7";case"Hard":return"#fee2e2";default:return"#f3f4f6"}}};
  color: ${a=>{switch(a.difficulty){case"Easy":return"#065f46";case"Medium":return"#92400e";case"Hard":return"#991b1b";default:return"#374151"}}};
  border-color: ${a=>{switch(a.difficulty){case"Easy":return"#d1fae5";case"Medium":return"#fde68a";case"Hard":return"#fecaca";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>{switch(a.difficulty){case"Easy":return"rgba(16, 185, 129, 0.2)";case"Medium":return"rgba(245, 158, 11, 0.2)";case"Hard":return"rgba(220, 38, 38, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${a=>{switch(a.difficulty){case"Easy":return"#86efac";case"Medium":return"#fcd34d";case"Hard":return"#fca5a5";default:return"#d1d5db"}}};
    border-color: ${a=>{switch(a.difficulty){case"Easy":return"rgba(16, 185, 129, 0.3)";case"Medium":return"rgba(245, 158, 11, 0.3)";case"Hard":return"rgba(220, 38, 38, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,g9=p(jo)`
  background-color: #f9fafb;
  color: #374151;
  border-color: #e5e7eb;
  font-weight: 600;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: #d1d5db;
    border-color: rgba(75, 85, 99, 0.5);
  }
`,b9=p(jo)`
  background-color: ${a=>{switch(a.status){case"Published":return"#ecfdf5";case"Draft":return"#f9fafb";default:return"#f9fafb"}}};
  color: ${a=>{switch(a.status){case"Published":return"#047857";case"Draft":return"#374151";default:return"#374151"}}};
  border-color: ${a=>{switch(a.status){case"Published":return"#a7f3d0";case"Draft":return"#e5e7eb";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>{switch(a.status){case"Published":return"rgba(16, 185, 129, 0.2)";case"Draft":return"rgba(55, 65, 81, 0.5)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${a=>{switch(a.status){case"Published":return"#86efac";case"Draft":return"#d1d5db";default:return"#d1d5db"}}};
    border-color: ${a=>{switch(a.status){case"Published":return"rgba(16, 185, 129, 0.3)";case"Draft":return"rgba(75, 85, 99, 0.5)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,x9=p(jo)`
  background-color: #f3f4f6;
  color: #374151;
  border-color: #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: #d1d5db;
    border-color: rgba(75, 85, 99, 0.5);
  }
`,v9=p(jo)`
  background-color: #f3f4f6;
  color: #374151;
  border-color: #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: #d1d5db;
    border-color: rgba(75, 85, 99, 0.5);
  }
`,y9=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`,fx=p.button`
  padding: 0.5rem;
  color: #6b7280;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.hoverBg||"#f3f4f6"};
    color: ${a=>a.hoverColor||"#374151"};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    &:hover {
      background-color: ${a=>a.hoverBg||"#4b5563"};
      color: ${a=>a.hoverColor||"white"};
    }
  }
`,j9=p(fx)`
  &:hover {
    background-color: #eff6ff;
    color: #2563eb;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgba(37, 99, 235, 0.2);
      color: #60a5fa;
    }
  }
`,w9=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;
  flex-wrap: wrap;
  gap: 1rem;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-top-color: #4b5563;
  }
`,A9=p.div`
  font-size: 0.875rem;
  color: #6b7280;

  span {
    font-weight: 600;
    color: #111827;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    span {
      color: white;
    }
  }
`,S9=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Ql=p.button`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: ${a=>a.active?"white":"#4b5563"};
  background-color: ${a=>a.active?"#2563eb":"white"};
  border: 1px solid ${a=>a.active?"#2563eb":"#e5e7eb"};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${a=>a.active?"#1d4ed8":"#f9fafb"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (prefers-color-scheme: dark) {
    color: ${a=>a.active?"white":"#d1d5db"};
    background-color: ${a=>a.active?"#2563eb":"#374151"};
    border-color: ${a=>a.active?"#2563eb":"#4b5563"};

    &:hover {
      background-color: ${a=>a.active?"#1d4ed8":"#4b5563"};
    }
  }
`,k9=p.div`
  padding: 3rem 1.5rem;
  text-align: center;
`,C9=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,E9=p.div`
  width: 4rem;
  height: 4rem;
  background-color: #f3f4f6;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 2rem;
    height: 2rem;
    color: #9ca3af;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;

    svg {
      color: #6b7280;
    }
  }
`,M9=p.p`
  color: #6b7280;
  font-weight: 500;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,N9=p.p`
  font-size: 0.875rem;
  color: #9ca3af;

  @media (prefers-color-scheme: dark) {
    color: #6b7280;
  }
`,T9=p.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #2563eb;
  background-color: #eff6ff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #dbeafe;
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgba(37, 99, 235, 0.2);
    color: #60a5fa;

    &:hover {
      background-color: rgba(37, 99, 235, 0.3);
    }
  }
`,_9=p.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`,R9=p.div`
  position: fixed;
  z-index: 50;
  width: 14rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #4b5563;
  }
`,ql=p.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: ${a=>a.danger?"#dc2626":"#374151"};
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.danger?"#fef2f2":"#f9fafb"};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${a=>a.danger?"#dc2626":"#6b7280"};
  }

  @media (prefers-color-scheme: dark) {
    color: ${a=>a.danger?"#f87171":"#e5e7eb"};

    &:hover {
      background-color: ${a=>a.danger?"rgba(220, 38, 38, 0.2)":"#374151"};
    }

    svg {
      color: ${a=>a.danger?"#f87171":"#9ca3af"};
    }
  }
`,D9=p.div`
  height: 1px;
  background-color: #f3f4f6;
  margin: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #4b5563;
  }
`,z9=a=>{switch(a){case"Easy":return r.jsx(io,{size:12});case"Medium":return r.jsx(yh,{size:12});case"Hard":return r.jsx(ho,{size:12});default:return r.jsx(ei,{size:12})}},O9=a=>{switch(a){case"Published":return r.jsx(at,{size:12});case"Draft":return r.jsx(gt,{size:12});default:return r.jsx(Ut,{size:12})}},B9=[{id:1,question:"What is polymorphism in OOP?",type:"MCQ",subject:"OOP",module:"Module 2",difficulty:"Medium",points:10,status:"Published",topic:"Polymorphism",lastUsed:"2 days ago"},{id:2,question:"Implement a binary search tree",type:"Coding",subject:"DSA",module:"Module 5",difficulty:"Hard",points:25,status:"Published",topic:"Binary Search Tree",lastUsed:"5 days ago"},{id:3,question:"Explain the OSI model layers",type:"Written",subject:"CN",module:"Module 1",difficulty:"Easy",points:15,status:"Draft",topic:"OSI Model",lastUsed:"Not used"},{id:4,question:"SQL JOIN types with examples",type:"Written",subject:"DBMS",module:"Module 3",difficulty:"Medium",points:20,status:"Published",topic:"SQL JOINs",lastUsed:"1 week ago"},{id:5,question:"Write a program for Dijkstra's algorithm",type:"Coding",subject:"DSA",module:"Module 7",difficulty:"Hard",points:30,status:"Draft",topic:"Dijkstra",lastUsed:"Not used"},{id:6,question:"What is normalization?",type:"MCQ",subject:"DBMS",module:"Module 2",difficulty:"Easy",points:5,status:"Published",topic:"Normalization",lastUsed:"3 days ago"}],$9=()=>{const a=Ct(),[s,c]=C.useState([]),[i,d]=C.useState([]),[f,g]=C.useState(""),[b,m]=C.useState("all"),[h,w]=C.useState("all"),[y,v]=C.useState("all"),[A,S]=C.useState("all"),[M,T]=C.useState(null),[k,N]=C.useState(null);C.useEffect(()=>{c(B9)},[]),C.useEffect(()=>{let Y=s;if(b!=="all"&&(Y=Y.filter(oe=>oe.type===b)),h!=="all"&&(Y=Y.filter(oe=>oe.subject===h)),y!=="all"&&(Y=Y.filter(oe=>oe.difficulty===y)),A!=="all"&&(Y=Y.filter(oe=>oe.status===A)),f){const oe=f.toLowerCase();Y=Y.filter(me=>me.question.toLowerCase().includes(oe)||me.topic.toLowerCase().includes(oe)||me.subject.toLowerCase().includes(oe))}d(Y)},[s,b,h,y,A,f]);const E=(Y,oe)=>{Y.preventDefault(),T({x:Y.clientX,y:Y.clientY}),N(oe)},z=()=>{T(null),N(null)},K=()=>{m("all"),w("all"),v("all"),S("all"),g("")},H=Y=>{a(`/questions/${Y}/edit`),z()},L=Y=>{a(`/questions/${Y}`),z()},R=s.length,D=s.filter(Y=>Y.status==="Published").length,I=s.filter(Y=>Y.status==="Draft").length,$=s.reduce((Y,oe)=>Y+oe.points,0),P=[...new Set(s.map(Y=>Y.subject))];return r.jsxs(r.Fragment,{children:[r.jsx(YS,{}),r.jsxs(PS,{children:[r.jsx(FS,{children:r.jsxs(VS,{children:[r.jsxs(GS,{children:[r.jsxs(ZS,{children:[r.jsx("h1",{children:"Question Bank"}),r.jsx("p",{children:"Create and manage exam questions"})]}),r.jsxs(XS,{children:[r.jsxs(JS,{onClick:()=>a("/questions/upload"),children:[r.jsx(Sh,{size:16}),"JSON Upload"]}),r.jsxs(IS,{onClick:()=>a("/questions/create"),children:[r.jsx(da,{size:16}),"Create Question"]})]})]}),r.jsxs(WS,{children:[r.jsxs(Hs,{children:[r.jsxs(Qs,{children:[r.jsx(qs,{children:"Total Questions"}),r.jsx(Ys,{bg:"#eff6ff",color:"#2563eb",children:r.jsx(mo,{})})]}),r.jsx(Ps,{children:R}),r.jsx(Fs,{children:"In question bank"})]}),r.jsxs(Hs,{children:[r.jsxs(Qs,{children:[r.jsx(qs,{children:"Published"}),r.jsx(Ys,{bg:"#ecfdf5",color:"#10b981",children:r.jsx(at,{})})]}),r.jsx(Ps,{children:D}),r.jsx(Fs,{children:"Ready to use"})]}),r.jsxs(Hs,{children:[r.jsxs(Qs,{children:[r.jsx(qs,{children:"Drafts"}),r.jsx(Ys,{bg:"#f3f4f6",color:"#6b7280",children:r.jsx(gt,{})})]}),r.jsx(Ps,{children:I}),r.jsx(Fs,{children:"In progress"})]}),r.jsxs(Hs,{children:[r.jsxs(Qs,{children:[r.jsx(qs,{children:"Total Points"}),r.jsx(Ys,{bg:"#fef3c7",color:"#f59e0b",children:r.jsx(ho,{})})]}),r.jsx(Ps,{children:$}),r.jsx(Fs,{children:"Across all questions"})]})]}),r.jsx(e9,{children:r.jsx(t9,{children:r.jsxs(r9,{children:[r.jsxs(n9,{children:[r.jsx(Zr,{size:16}),r.jsx(a9,{type:"text",placeholder:"Search questions...",value:f,onChange:Y=>g(Y.target.value)})]}),r.jsxs(Vs,{children:[r.jsx(Wt,{size:16}),r.jsxs("select",{value:b,onChange:Y=>m(Y.target.value),children:[r.jsx("option",{value:"all",children:"All Types"}),r.jsx("option",{value:"MCQ",children:"MCQ"}),r.jsx("option",{value:"Coding",children:"Coding"}),r.jsx("option",{value:"Written",children:"Written"})]}),r.jsx(Pe,{size:16})]}),r.jsxs(Vs,{children:[r.jsx(Oc,{size:16}),r.jsxs("select",{value:h,onChange:Y=>w(Y.target.value),children:[r.jsx("option",{value:"all",children:"All Subjects"}),P.map(Y=>r.jsx("option",{value:Y,children:Y},Y))]}),r.jsx(Pe,{size:16})]}),r.jsxs(Vs,{children:[r.jsx(yh,{size:16}),r.jsxs("select",{value:y,onChange:Y=>v(Y.target.value),children:[r.jsx("option",{value:"all",children:"All Difficulties"}),r.jsx("option",{value:"Easy",children:"Easy"}),r.jsx("option",{value:"Medium",children:"Medium"}),r.jsx("option",{value:"Hard",children:"Hard"})]}),r.jsx(Pe,{size:16})]}),r.jsxs(Vs,{children:[r.jsx(gt,{size:16}),r.jsxs("select",{value:A,onChange:Y=>S(Y.target.value),children:[r.jsx("option",{value:"all",children:"All Status"}),r.jsx("option",{value:"Published",children:"Published"}),r.jsx("option",{value:"Draft",children:"Draft"})]}),r.jsx(Pe,{size:16})]}),(b!=="all"||h!=="all"||y!=="all"||A!=="all"||f)&&r.jsxs(o9,{onClick:K,children:[r.jsx(kt,{size:16}),"Clear"]})]})})}),r.jsxs(l9,{children:[r.jsx(i9,{children:r.jsxs(s9,{children:[r.jsx(c9,{children:r.jsxs("tr",{children:[r.jsx(An,{children:"Question"}),r.jsx(An,{children:"Type"}),r.jsx(An,{children:"Subject"}),r.jsx(An,{children:"Module"}),r.jsx(An,{children:"Difficulty"}),r.jsx(An,{children:"Points"}),r.jsx(An,{children:"Status"}),r.jsx(An,{style:{textAlign:"right"},children:"Actions"})]})}),r.jsx(u9,{children:i.length>0?i.map(Y=>r.jsxs(L1,{onContextMenu:oe=>E(oe,Y),children:[r.jsx(Hr,{children:r.jsxs(d9,{children:[r.jsx(f9,{children:Y.question}),r.jsxs(h9,{children:[r.jsx("span",{children:Y.topic}),r.jsx("span",{children:"•"}),r.jsxs("span",{children:["Used ",Y.lastUsed]})]})]})}),r.jsx(Hr,{children:r.jsx(m9,{type:Y.type,children:Y.type})}),r.jsx(Hr,{children:r.jsx(x9,{children:Y.subject})}),r.jsx(Hr,{children:r.jsx(v9,{children:Y.module})}),r.jsx(Hr,{children:r.jsxs(p9,{difficulty:Y.difficulty,children:[z9(Y.difficulty),Y.difficulty]})}),r.jsx(Hr,{children:r.jsxs(g9,{children:[Y.points," pts"]})}),r.jsx(Hr,{children:r.jsxs(b9,{status:Y.status,children:[O9(Y.status),Y.status]})}),r.jsx(Hr,{children:r.jsxs(y9,{children:[r.jsx(j9,{onClick:()=>H(Y.id),title:"Edit question",children:r.jsx(Tn,{size:16})}),r.jsx(fx,{onClick:oe=>E(oe,Y),title:"More options",children:r.jsx(ua,{size:16})})]})})]},Y.id)):r.jsx(L1,{children:r.jsx(Hr,{colSpan:8,style:{padding:0},children:r.jsx(k9,{children:r.jsxs(C9,{children:[r.jsx(E9,{children:r.jsx(mo,{size:32})}),r.jsx(M9,{children:"No questions found"}),r.jsx(N9,{children:"Try adjusting your filters or create a new question"}),r.jsx(T9,{onClick:K,children:"Clear all filters"})]})})})})})]})}),r.jsxs(w9,{children:[r.jsxs(A9,{children:["Showing ",r.jsx("span",{children:i.length})," of"," ",r.jsx("span",{children:s.length})," questions"]}),r.jsxs(S9,{children:[r.jsx(Ql,{disabled:!0,children:r.jsx(jh,{size:16})}),r.jsx(Ql,{active:!0,children:"1"}),r.jsx(Ql,{children:"2"}),r.jsx(Ql,{children:"3"}),r.jsx(Ql,{children:r.jsx(wh,{size:16})})]})]})]})]})}),M&&k&&r.jsxs(r.Fragment,{children:[r.jsx(_9,{onClick:z}),r.jsxs(R9,{style:{left:M.x,top:M.y},children:[r.jsxs(ql,{onClick:()=>L(k.id),children:[r.jsx(gt,{size:16}),"View Question"]}),r.jsxs(ql,{onClick:()=>H(k.id),children:[r.jsx(Tn,{size:16}),"Edit Question"]}),r.jsxs(ql,{children:[r.jsx(oi,{size:16}),"Duplicate"]}),r.jsxs(ql,{children:[r.jsx(zc,{size:16}),"Archive"]}),r.jsx(D9,{}),r.jsxs(ql,{danger:!0,children:[r.jsx(yo,{size:16}),"Delete"]})]})]})]})]})},K9=Ar`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`,U9=p.div`
  display: flex;
  height: 100vh;
  background-color: #f9fafb;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`,L9=p.div`
  flex: 1;
  overflow: auto;
`,H9=p.div`
  padding: 2rem;
`,Q9=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`,q9=p.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;

    @media (prefers-color-scheme: dark) {
      color: #9ca3af;
    }
  }
`;p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #1d4ed8;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #3b82f6;
    &:hover {
      background-color: #2563eb;
    }
  }
`;p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background-color: white;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: #6b7280;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    color: #e5e7eb;
    border-color: #4b5563;

    &:hover {
      background-color: #4b5563;
    }

    svg {
      color: #9ca3af;
    }
  }
`;const Y9=p.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Gs=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,Zs=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`,Xs=p.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,Is=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${a=>a.bg||"#eff6ff"};
  border-radius: 0.5rem;
  color: ${a=>a.color||"#2563eb"};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,Js=p.div`
  font-size: 1.875rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,Ws=p.div`
  font-size: 0.875rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,P9=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,F9=p.div`
  padding: 1.25rem;
`,V9=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`,G9=p.div`
  position: relative;
  flex: 1;
  min-width: 300px;

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
  }
`,Z9=p.input`
  width: 100%;
  padding: 0.625rem 0.75rem 0.625rem 2.25rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: white;

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }
  }
`,Rf=p.div`
  position: relative;
  min-width: 160px;

  select {
    appearance: none;
    width: 100%;
    padding: 0.625rem 2rem 0.625rem 2.25rem;
    font-size: 0.875rem;
    background-color: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    cursor: pointer;
    color: #374151;
    
    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
    }

    @media (prefers-color-scheme: dark) {
      background-color: #374151;
      border-color: #4b5563;
      color: white;
    }
  }

  svg {
    position: absolute;
    pointer-events: none;
    
    &:first-of-type {
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      color: #9ca3af;
    }
    
    &:last-of-type {
      right: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      color: #9ca3af;
    }
  }
`,X9=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: #4b5563;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #f9fafb;
    color: #111827;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: #d1d5db;

    &:hover {
      background-color: #4b5563;
      color: white;
    }
  }
`,I9=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,J9=p.div`
  overflow-x: auto;
`,W9=p.table`
  width: 100%;
  border-collapse: collapse;
`,ek=p.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-bottom-color: #4b5563;
  }
`,Sn=p.th`
  text-align: left;
  padding: 1rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,tk=p.tbody``,H1=p.tr`
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(249, 250, 251, 0.8);
  }

  &:last-child {
    border-bottom: none;
  }

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #4b5563;

    &:hover {
      background-color: rgba(55, 65, 81, 0.5);
    }
  }
`,Qr=p.td`
  padding: 1.25rem 1.5rem;
  font-size: 0.875rem;
  color: #4b5563;
  vertical-align: middle;

  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`,rk=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,nk=p.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  background-color: ${a=>a.color||"#2563eb"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  flex-shrink: 0;
`,ak=p.div`
  display: flex;
  flex-direction: column;
`,ok=p.span`
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.125rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,lk=p.span`
  font-size: 0.75rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,ik=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-width: 300px;
`,sk=p.div`
  font-weight: 500;
  color: #111827;
  word-break: break-word;
  line-height: 1.4;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,ck=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  color: #6b7280;

  svg {
    width: 0.7rem;
    height: 0.7rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,li=p.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  white-space: nowrap;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.25rem;
  }
`,uk=p(li)`
  background-color: ${a=>{switch(a.type){case"MCQ":return"#eff6ff";case"Coding":return"#fef3c7";case"Written":return"#f3e8ff";default:return"#f3f4f6"}}};
  color: ${a=>{switch(a.type){case"MCQ":return"#1e40af";case"Coding":return"#92400e";case"Written":return"#6b21a8";default:return"#374151"}}};
  border-color: ${a=>{switch(a.type){case"MCQ":return"#bfdbfe";case"Coding":return"#fde68a";case"Written":return"#e9d5ff";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>{switch(a.type){case"MCQ":return"rgba(37, 99, 235, 0.2)";case"Coding":return"rgba(245, 158, 11, 0.2)";case"Written":return"rgba(139, 92, 246, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${a=>{switch(a.type){case"MCQ":return"#93c5fd";case"Coding":return"#fcd34d";case"Written":return"#d8b4fe";default:return"#d1d5db"}}};
    border-color: ${a=>{switch(a.type){case"MCQ":return"rgba(37, 99, 235, 0.3)";case"Coding":return"rgba(245, 158, 11, 0.3)";case"Written":return"rgba(139, 92, 246, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,dk=p(li)`
  background-color: ${a=>{switch(a.status){case"Accepted":case"Published":return"#ecfdf5";case"Pending":return"#fefce8";case"Rejected":return"#fef2f2";default:return"#f9fafb"}}};
  color: ${a=>{switch(a.status){case"Accepted":case"Published":return"#047857";case"Pending":return"#b45309";case"Rejected":return"#b91c1c";default:return"#374151"}}};
  border-color: ${a=>{switch(a.status){case"Accepted":case"Published":return"#a7f3d0";case"Pending":return"#fde68a";case"Rejected":return"#fecaca";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>{switch(a.status){case"Accepted":case"Published":return"rgba(16, 185, 129, 0.2)";case"Pending":return"rgba(245, 158, 11, 0.2)";case"Rejected":return"rgba(220, 38, 38, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${a=>{switch(a.status){case"Accepted":case"Published":return"#86efac";case"Pending":return"#fcd34d";case"Rejected":return"#fca5a5";default:return"#d1d5db"}}};
    border-color: ${a=>{switch(a.status){case"Accepted":case"Published":return"rgba(16, 185, 129, 0.3)";case"Pending":return"rgba(245, 158, 11, 0.3)";case"Rejected":return"rgba(220, 38, 38, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,fk=p(li)`
  background-color: #f3f4f6;
  color: #374151;
  border-color: #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: #d1d5db;
    border-color: rgba(75, 85, 99, 0.5);
  }
`,hk=p(li)`
  background-color: #f3f4f6;
  color: #374151;
  border-color: #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: #d1d5db;
    border-color: rgba(75, 85, 99, 0.5);
  }
`,mk=p(li)`
  background-color: ${a=>a.points?"#f9fafb":"#f3f4f6"};
  color: ${a=>a.points?"#374151":"#9ca3af"};
  border-color: ${a=>(a.points,"#e5e7eb")};
  font-weight: ${a=>a.points?"600":"400"};

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>a.points?"rgba(55, 65, 81, 0.5)":"rgba(55, 65, 81, 0.3)"};
    color: ${a=>a.points?"#d1d5db":"#6b7280"};
    border-color: ${a=>a.points?"rgba(75, 85, 99, 0.5)":"rgba(75, 85, 99, 0.3)"};
  }
`,pk=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`,Kc=p.button`
  padding: 0.5rem;
  color: #6b7280;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.hoverBg||"#f3f4f6"};
    color: ${a=>a.hoverColor||"#374151"};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    &:hover {
      background-color: ${a=>a.hoverBg||"#4b5563"};
      color: ${a=>a.hoverColor||"white"};
    }
  }
`,gk=p(Kc)`
  &:hover {
    background-color: #ecfdf5;
    color: #10b981;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgba(16, 185, 129, 0.2);
      color: #86efac;
    }
  }
`,bk=p(Kc)`
  &:hover {
    background-color: #fef2f2;
    color: #ef4444;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgba(239, 68, 68, 0.2);
      color: #fca5a5;
    }
  }
`,xk=p(Kc)`
  &:hover {
    background-color: #eff6ff;
    color: #2563eb;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgba(37, 99, 235, 0.2);
      color: #60a5fa;
    }
  }
`,vk=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;
  flex-wrap: wrap;
  gap: 1rem;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-top-color: #4b5563;
  }
`,yk=p.div`
  font-size: 0.875rem;
  color: #6b7280;

  span {
    font-weight: 600;
    color: #111827;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    span {
      color: white;
    }
  }
`,jk=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Yl=p.button`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: ${a=>a.active?"white":"#4b5563"};
  background-color: ${a=>a.active?"#2563eb":"white"};
  border: 1px solid ${a=>a.active?"#2563eb":"#e5e7eb"};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${a=>a.active?"#1d4ed8":"#f9fafb"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (prefers-color-scheme: dark) {
    color: ${a=>a.active?"white":"#d1d5db"};
    background-color: ${a=>a.active?"#2563eb":"#374151"};
    border-color: ${a=>a.active?"#2563eb":"#4b5563"};

    &:hover {
      background-color: ${a=>a.active?"#1d4ed8":"#4b5563"};
    }
  }
`,wk=p.div`
  padding: 3rem 1.5rem;
  text-align: center;
`,Ak=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,Sk=p.div`
  width: 4rem;
  height: 4rem;
  background-color: #f3f4f6;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 2rem;
    height: 2rem;
    color: #9ca3af;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;

    svg {
      color: #6b7280;
    }
  }
`,kk=p.p`
  color: #6b7280;
  font-weight: 500;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,Ck=p.p`
  font-size: 0.875rem;
  color: #9ca3af;

  @media (prefers-color-scheme: dark) {
    color: #6b7280;
  }
`,Ek=p.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #2563eb;
  background-color: #eff6ff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #dbeafe;
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgba(37, 99, 235, 0.2);
    color: #60a5fa;

    &:hover {
      background-color: rgba(37, 99, 235, 0.3);
    }
  }
`,Mk=p.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`,Nk=p.div`
  position: fixed;
  z-index: 50;
  width: 14rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #4b5563;
  }
`,ao=p.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: ${a=>a.danger?"#dc2626":"#374151"};
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.danger?"#fef2f2":"#f9fafb"};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${a=>a.danger?"#dc2626":"#6b7280"};
  }

  @media (prefers-color-scheme: dark) {
    color: ${a=>a.danger?"#f87171":"#e5e7eb"};

    &:hover {
      background-color: ${a=>a.danger?"rgba(220, 38, 38, 0.2)":"#374151"};
    }

    svg {
      color: ${a=>a.danger?"#f87171":"#9ca3af"};
    }
  }
`,Tk=p.div`
  height: 1px;
  background-color: #f3f4f6;
  margin: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #4b5563;
  }
`,_k=a=>{switch(a){case"Accepted":case"Published":return r.jsx(at,{size:12});case"Pending":return r.jsx(Ut,{size:12});case"Rejected":return r.jsx(kt,{size:12});default:return r.jsx(Ut,{size:12})}},Rk=a=>{const s=["#2563eb","#7c3aed","#0891b2","#059669","#b45309","#dc2626"],c=a.length%s.length;return s[c]},Dk=a=>a.split(" ").map(s=>s[0]).join("").substring(0,2).toUpperCase(),zk=[{id:1,student:"Rahul Sharma",email:"rahul.sharma@example.com",question:"Explain the difference between stack and queue with real-world examples",type:"Written",subject:"DSA",module:"Module 1",status:"Pending",points:null,submittedDate:"2026-02-13",submittedTime:"2 hours ago"},{id:2,student:"Priya Patel",email:"priya.patel@example.com",question:"Which data structure is best for implementing undo functionality in text editors?",type:"MCQ",subject:"DSA",module:"Module 3",status:"Pending",points:null,submittedDate:"2026-02-13",submittedTime:"3 hours ago"},{id:3,student:"Karthik Nair",email:"karthik.nair@example.com",question:"Write a function to detect cycle in a linked list",type:"Coding",subject:"DSA",module:"Module 2",status:"Accepted",points:15,submittedDate:"2026-02-12",submittedTime:"1 day ago"},{id:4,student:"Meera Joshi",email:"meera.joshi@example.com",question:"What is the time complexity of merge sort and why?",type:"Written",subject:"DSA",module:"Module 4",status:"Published",points:20,submittedDate:"2026-02-11",submittedTime:"2 days ago"},{id:5,student:"Anjali Gupta",email:"anjali.gupta@example.com",question:"Explain normalization with examples up to 3NF",type:"Written",subject:"DBMS",module:"Module 2",status:"Rejected",points:null,submittedDate:"2026-02-10",submittedTime:"3 days ago"},{id:6,student:"Vikram Singh",email:"vikram.singh@example.com",question:"Implement a priority queue using a heap",type:"Coding",subject:"DSA",module:"Module 5",status:"Pending",points:null,submittedDate:"2026-02-09",submittedTime:"4 days ago"}],Ok=()=>{const a=Ct(),[s,c]=C.useState([]),[i,d]=C.useState([]),[f,g]=C.useState(""),[b,m]=C.useState("all"),[h,w]=C.useState("all"),[y,v]=C.useState("all"),[A,S]=C.useState(null),[M,T]=C.useState(null);C.useEffect(()=>{c(zk)},[]),C.useEffect(()=>{let P=s;if(b!=="all"&&(P=P.filter(Y=>Y.status===b)),h!=="all"&&(P=P.filter(Y=>Y.subject===h)),y!=="all"&&(P=P.filter(Y=>Y.type===y)),f){const Y=f.toLowerCase();P=P.filter(oe=>oe.student.toLowerCase().includes(Y)||oe.email.toLowerCase().includes(Y)||oe.question.toLowerCase().includes(Y)||oe.subject.toLowerCase().includes(Y))}d(P)},[s,b,h,y,f]);const k=(P,Y)=>{P.preventDefault(),S({x:P.clientX,y:P.clientY}),T(Y)},N=()=>{S(null),T(null)},E=()=>{m("all"),w("all"),v("all"),g("")},z=P=>{a(`/student-questions/${P}`),N()},K=P=>{console.log("Approve question:",P),N()},H=P=>{console.log("Reject question:",P),N()},L=s.length,R=s.filter(P=>P.status==="Pending").length,D=s.filter(P=>P.status==="Accepted"||P.status==="Published").length,I=s.filter(P=>P.status==="Rejected").length,$=[...new Set(s.map(P=>P.subject))];return r.jsxs(r.Fragment,{children:[r.jsx(K9,{}),r.jsxs(U9,{children:[r.jsx(L9,{children:r.jsxs(H9,{children:[r.jsx(Q9,{children:r.jsxs(q9,{children:[r.jsx("h1",{children:"Student Submitted Questions"}),r.jsx("p",{children:"Review, refine, and approve student-submitted questions"})]})}),r.jsxs(Y9,{children:[r.jsxs(Gs,{children:[r.jsxs(Zs,{children:[r.jsx(Xs,{children:"Total Submissions"}),r.jsx(Is,{bg:"#eff6ff",color:"#2563eb",children:r.jsx(Jt,{})})]}),r.jsx(Js,{children:L}),r.jsx(Ws,{children:"Awaiting review"})]}),r.jsxs(Gs,{children:[r.jsxs(Zs,{children:[r.jsx(Xs,{children:"Pending"}),r.jsx(Is,{bg:"#fefce8",color:"#f59e0b",children:r.jsx(Ut,{})})]}),r.jsx(Js,{children:R}),r.jsx(Ws,{children:"Need attention"})]}),r.jsxs(Gs,{children:[r.jsxs(Zs,{children:[r.jsx(Xs,{children:"Accepted"}),r.jsx(Is,{bg:"#ecfdf5",color:"#10b981",children:r.jsx(at,{})})]}),r.jsx(Js,{children:D}),r.jsx(Ws,{children:"Ready to publish"})]}),r.jsxs(Gs,{children:[r.jsxs(Zs,{children:[r.jsx(Xs,{children:"Rejected"}),r.jsx(Is,{bg:"#fef2f2",color:"#ef4444",children:r.jsx(kt,{})})]}),r.jsx(Js,{children:I}),r.jsx(Ws,{children:"Needs revision"})]})]}),r.jsx(P9,{children:r.jsx(F9,{children:r.jsxs(V9,{children:[r.jsxs(G9,{children:[r.jsx(Zr,{size:16}),r.jsx(Z9,{type:"text",placeholder:"Search questions or students...",value:f,onChange:P=>g(P.target.value)})]}),r.jsxs(Rf,{children:[r.jsx(Wt,{size:16}),r.jsxs("select",{value:b,onChange:P=>m(P.target.value),children:[r.jsx("option",{value:"all",children:"All Status"}),r.jsx("option",{value:"Pending",children:"Pending"}),r.jsx("option",{value:"Accepted",children:"Accepted"}),r.jsx("option",{value:"Published",children:"Published"}),r.jsx("option",{value:"Rejected",children:"Rejected"})]}),r.jsx(Pe,{size:16})]}),r.jsxs(Rf,{children:[r.jsx(Oc,{size:16}),r.jsxs("select",{value:h,onChange:P=>w(P.target.value),children:[r.jsx("option",{value:"all",children:"All Subjects"}),$.map(P=>r.jsx("option",{value:P,children:P},P))]}),r.jsx(Pe,{size:16})]}),r.jsxs(Rf,{children:[r.jsx(Jt,{size:16}),r.jsxs("select",{value:y,onChange:P=>v(P.target.value),children:[r.jsx("option",{value:"all",children:"All Types"}),r.jsx("option",{value:"MCQ",children:"MCQ"}),r.jsx("option",{value:"Coding",children:"Coding"}),r.jsx("option",{value:"Written",children:"Written"})]}),r.jsx(Pe,{size:16})]}),(b!=="all"||h!=="all"||y!=="all"||f)&&r.jsxs(X9,{onClick:E,children:[r.jsx(kt,{size:16}),"Clear"]})]})})}),r.jsxs(I9,{children:[r.jsx(J9,{children:r.jsxs(W9,{children:[r.jsx(ek,{children:r.jsxs("tr",{children:[r.jsx(Sn,{children:"Student"}),r.jsx(Sn,{children:"Question"}),r.jsx(Sn,{children:"Subject"}),r.jsx(Sn,{children:"Module"}),r.jsx(Sn,{children:"Type"}),r.jsx(Sn,{children:"Status"}),r.jsx(Sn,{children:"Points"}),r.jsx(Sn,{style:{textAlign:"right"},children:"Actions"})]})}),r.jsx(tk,{children:i.length>0?i.map(P=>r.jsxs(H1,{onContextMenu:Y=>k(Y,P),children:[r.jsx(Qr,{children:r.jsxs(rk,{children:[r.jsx(nk,{color:Rk(P.student),children:Dk(P.student)}),r.jsxs(ak,{children:[r.jsx(ok,{children:P.student}),r.jsx(lk,{children:P.email})]})]})}),r.jsx(Qr,{children:r.jsxs(ik,{children:[r.jsx(sk,{children:P.question}),r.jsxs(ck,{children:[r.jsx(Ut,{size:10}),r.jsx("span",{children:P.submittedTime})]})]})}),r.jsx(Qr,{children:r.jsx(fk,{children:P.subject})}),r.jsx(Qr,{children:r.jsx(hk,{children:P.module})}),r.jsx(Qr,{children:r.jsx(uk,{type:P.type,children:P.type})}),r.jsx(Qr,{children:r.jsxs(dk,{status:P.status,children:[_k(P.status),P.status]})}),r.jsx(Qr,{children:r.jsx(mk,{points:P.points,children:P.points?`✓ ${P.points}`:"—"})}),r.jsx(Qr,{children:r.jsxs(pk,{children:[r.jsx(xk,{onClick:()=>z(P.id),title:"View question",children:r.jsx(gt,{size:16})}),P.status==="Pending"&&r.jsxs(r.Fragment,{children:[r.jsx(gk,{onClick:()=>K(P.id),title:"Approve question",children:r.jsx(p1,{size:16})}),r.jsx(bk,{onClick:()=>H(P.id),title:"Reject question",children:r.jsx(m1,{size:16})})]}),r.jsx(Kc,{onClick:Y=>k(Y,P),title:"More options",children:r.jsx(ua,{size:16})})]})})]},P.id)):r.jsx(H1,{children:r.jsx(Qr,{colSpan:8,style:{padding:0},children:r.jsx(wk,{children:r.jsxs(Ak,{children:[r.jsx(Sk,{children:r.jsx(Jt,{size:32})}),r.jsx(kk,{children:"No questions found"}),r.jsx(Ck,{children:"Try adjusting your filters"}),r.jsx(Ek,{onClick:E,children:"Clear all filters"})]})})})})})]})}),r.jsxs(vk,{children:[r.jsxs(yk,{children:["Showing ",r.jsx("span",{children:i.length})," of"," ",r.jsx("span",{children:s.length})," questions"]}),r.jsxs(jk,{children:[r.jsx(Yl,{disabled:!0,children:r.jsx(jh,{size:16})}),r.jsx(Yl,{active:!0,children:"1"}),r.jsx(Yl,{children:"2"}),r.jsx(Yl,{children:"3"}),r.jsx(Yl,{children:r.jsx(wh,{size:16})})]})]})]})]})}),A&&M&&r.jsxs(r.Fragment,{children:[r.jsx(Mk,{onClick:N}),r.jsxs(Nk,{style:{left:A.x,top:A.y},children:[r.jsxs(ao,{onClick:()=>z(M.id),children:[r.jsx(gt,{size:16}),"View Question"]}),M.status==="Pending"&&r.jsxs(r.Fragment,{children:[r.jsxs(ao,{onClick:()=>K(M.id),children:[r.jsx(p1,{size:16}),"Approve"]}),r.jsxs(ao,{onClick:()=>H(M.id),children:[r.jsx(m1,{size:16}),"Reject"]})]}),r.jsxs(ao,{children:[r.jsx(qb,{size:16}),"Send Feedback"]}),r.jsxs(ao,{children:[r.jsx(Tn,{size:16}),"Edit Question"]}),r.jsx(Tk,{}),r.jsxs(ao,{danger:!0,children:[r.jsx(yo,{size:16}),"Delete"]})]})]})]})]})},Bk=Ar`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`,$k=p.div`
  padding: 2rem;
  background-color: #f9fafb;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`,Kk=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`,Uk=p.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;

    @media (prefers-color-scheme: dark) {
      color: #9ca3af;
    }
  }
`,Lk=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,Hk=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #1d4ed8;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #3b82f6;
    &:hover {
      background-color: #2563eb;
    }
  }
`,Qk=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background-color: white;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: #6b7280;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    color: #e5e7eb;
    border-color: #4b5563;

    &:hover {
      background-color: #4b5563;
    }

    svg {
      color: #9ca3af;
    }
  }
`,qk=p.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Yk=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,Pk=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`,Fk=p.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,Vk=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${a=>a.bg||"#eff6ff"};
  border-radius: 0.5rem;
  color: ${a=>a.color||"#2563eb"};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,Gk=p.div`
  font-size: 1.875rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;p.div`
  font-size: 0.875rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;const Zk=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,Xk=p.div`
  padding: 1.25rem;
`,Ik=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`,Jk=p.div`
  position: relative;
  flex: 1;
  min-width: 300px;

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
  }
`,Wk=p.input`
  width: 100%;
  padding: 0.625rem 0.75rem 0.625rem 2.25rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: white;

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }
  }
`,eC=p.div`
  position: relative;
  min-width: 160px;

  select {
    appearance: none;
    width: 100%;
    padding: 0.625rem 2rem 0.625rem 2.25rem;
    font-size: 0.875rem;
    background-color: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    cursor: pointer;
    color: #374151;
    
    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
    }

    @media (prefers-color-scheme: dark) {
      background-color: #374151;
      border-color: #4b5563;
      color: white;
    }
  }

  svg {
    position: absolute;
    pointer-events: none;
    
    &:first-of-type {
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      color: #9ca3af;
    }
    
    &:last-of-type {
      right: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      color: #9ca3af;
    }
  }
`,tC=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: #4b5563;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #f9fafb;
    color: #111827;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: #d1d5db;

    &:hover {
      background-color: #4b5563;
      color: white;
    }
  }
`,rC=p.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,nC=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,aC=p.div`
  padding: 1.5rem;
  background: ${a=>a.gradient||"linear-gradient(135deg, #6b7280 0%, #4b5563 100%)"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,oC=p.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,lC=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  backdrop-filter: blur(4px);

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: white;
  }
`,iC=p.div`
  padding: 1.5rem;
`,Q1=p.h4`
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 1rem;
    height: 1rem;
    color: #6b7280;
  }

  @media (prefers-color-scheme: dark) {
    color: white;

    svg {
      color: #9ca3af;
    }
  }
`,sC=p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`,ec=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,tc=p.span`
  font-size: 0.75rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,rc=p.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${a=>a.color||"#111827"};
  line-height: 1.2;

  @media (prefers-color-scheme: dark) {
    color: ${a=>a.color||"white"};
  }
`,cC=p.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1.5rem;
  margin-top: 0.5rem;

  @media (prefers-color-scheme: dark) {
    border-top-color: #374151;
  }
`,uC=p.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
`,Df=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,zf=p.span`
  font-size: 0.7rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,Of=p.span`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    color: #f59e0b;
  }

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,dC=p.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: ${a=>a.color||"#2563eb"}10;
  color: ${a=>a.color||"#2563eb"};
  border: 1px solid ${a=>a.color||"#2563eb"}30;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${a=>a.color||"#2563eb"}20;
    border-color: ${a=>a.color||"#2563eb"}50;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${a=>a.color||"#2563eb"}20;
    color: ${a=>a.color||"#2563eb"}80;
    border-color: ${a=>a.color||"#2563eb"}40;

    &:hover {
      background-color: ${a=>a.color||"#2563eb"}30;
      color: ${a=>a.color||"#2563eb"}90;
    }
  }
`,fC=[{id:"free",name:"Free",icon:io,gradient:"linear-gradient(135deg, #6b7280 0%, #4b5563 100%)",color:"#6b7280",quotas:{downloads:5,notes:3,questionPapers:2,freeQuota:0},points:{perTest:5,perUpload:2,bonus:0}},{id:"pro",name:"Pro",icon:ei,gradient:"linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",color:"#2563eb",quotas:{downloads:50,notes:30,questionPapers:20,freeQuota:10},points:{perTest:10,perUpload:5,bonus:50}},{id:"max",name:"Max",icon:xc,gradient:"linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",color:"#7c3aed",quotas:{downloads:200,notes:100,questionPapers:80,freeQuota:30},points:{perTest:15,perUpload:8,bonus:100}},{id:"ultra",name:"Ultra",icon:ho,gradient:"linear-gradient(135deg, #db2777 0%, #be185d 100%)",color:"#db2777",quotas:{downloads:1499,notes:100,questionPapers:80,freeQuota:50},points:{perTest:25,perUpload:15,bonus:200}}],hC=()=>{const a=Ct(),[s,c]=C.useState(""),[i,d]=C.useState("all"),f=[{label:"Total Plans",value:"4",icon:xc,bg:"#eff6ff",color:"#2563eb"},{label:"Active Subscribers",value:"1,245",icon:cr,bg:"#ecfdf5",color:"#10b981"},{label:"Monthly Revenue",value:"$12,450",icon:Ah,bg:"#fef3c7",color:"#f59e0b"},{label:"Growth",value:"+23%",icon:t7,bg:"#fee2e2",color:"#ef4444"}],g=fC.filter(b=>b.name.toLowerCase().includes(s.toLowerCase()));return r.jsxs(r.Fragment,{children:[r.jsx(Bk,{}),r.jsxs($k,{children:[r.jsxs(Kk,{children:[r.jsxs(Uk,{children:[r.jsx("h1",{children:"Subscription Plans"}),r.jsx("p",{children:"Manage pricing, quotas, and point rewards for each plan"})]}),r.jsxs(Lk,{children:[r.jsxs(Qk,{onClick:()=>a("/subscriptions/export"),children:[r.jsx(dr,{size:16}),"Export"]}),r.jsxs(Hk,{onClick:()=>a("/subscriptions/create"),children:[r.jsx(da,{size:16}),"New Plan"]})]})]}),r.jsx(qk,{children:f.map((b,m)=>{const h=b.icon;return r.jsxs(Yk,{children:[r.jsxs(Pk,{children:[r.jsx(Fk,{children:b.label}),r.jsx(Vk,{bg:b.bg,color:b.color,children:r.jsx(h,{})})]}),r.jsx(Gk,{children:b.value})]},m)})}),r.jsx(Zk,{children:r.jsx(Xk,{children:r.jsxs(Ik,{children:[r.jsxs(Jk,{children:[r.jsx(Zr,{size:16}),r.jsx(Wk,{type:"text",placeholder:"Search plans...",value:s,onChange:b=>c(b.target.value)})]}),r.jsxs(eC,{children:[r.jsx(Wt,{size:16}),r.jsxs("select",{value:i,onChange:b=>d(b.target.value),children:[r.jsx("option",{value:"all",children:"All Plans"}),r.jsx("option",{value:"active",children:"Active"}),r.jsx("option",{value:"inactive",children:"Inactive"})]}),r.jsx(Pe,{size:16})]}),s&&r.jsxs(tC,{onClick:()=>c(""),children:[r.jsx(kt,{size:16}),"Clear"]})]})})}),r.jsx(rC,{children:g.map(b=>{const m=b.icon;return r.jsxs(nC,{children:[r.jsxs(aC,{gradient:b.gradient,children:[r.jsx(oC,{children:b.name}),r.jsx(lC,{children:r.jsx(m,{})})]}),r.jsxs(iC,{children:[r.jsxs(Q1,{children:[r.jsx(dr,{size:16}),"Downloads & Notes"]}),r.jsxs(sC,{children:[r.jsxs(ec,{children:[r.jsxs(tc,{children:[r.jsx(dr,{size:12}),"Downloads"]}),r.jsx(rc,{color:b.color,children:b.quotas.downloads})]}),r.jsxs(ec,{children:[r.jsxs(tc,{children:[r.jsx(Jt,{size:12}),"Notes"]}),r.jsx(rc,{color:b.color,children:b.quotas.notes})]}),r.jsxs(ec,{children:[r.jsxs(tc,{children:[r.jsx(mo,{size:12}),"Question Papers"]}),r.jsx(rc,{color:b.color,children:b.quotas.questionPapers})]}),r.jsxs(ec,{children:[r.jsxs(tc,{children:[r.jsx(ho,{size:12}),"Free Quota"]}),r.jsx(rc,{color:b.color,children:b.quotas.freeQuota})]})]}),r.jsxs(cC,{children:[r.jsxs(Q1,{children:[r.jsx(io,{size:16}),"Points"]}),r.jsxs(uC,{children:[r.jsxs(Df,{children:[r.jsx(zf,{children:"Per Test"}),r.jsxs(Of,{children:[r.jsx(io,{size:14}),b.points.perTest," pts"]})]}),r.jsxs(Df,{children:[r.jsx(zf,{children:"Per Upload"}),r.jsxs(Of,{children:[r.jsx(io,{size:14}),b.points.perUpload," pts"]})]}),r.jsxs(Df,{children:[r.jsx(zf,{children:"Bonus"}),r.jsxs(Of,{children:[r.jsx(ho,{size:14}),b.points.bonus," pts"]})]})]})]}),r.jsxs(dC,{color:b.color,onClick:()=>a(`/subscriptions/${b.id}/edit`),children:[r.jsx(Tn,{size:16}),"Edit Plan"]})]})]},b.id)})})]})]})},mC=()=>r.jsxs(r.Fragment,{children:[r.jsxs(B2,{children:[r.jsx(Ge,{path:"/login",element:r.jsx(jj,{})}),r.jsx(Ge,{path:"/register",element:r.jsx(wj,{})}),r.jsxs(Ge,{element:r.jsx(pC,{}),children:[r.jsx(Ge,{path:"",element:r.jsx(c1,{})}),r.jsx(Ge,{path:"/dashboard",element:r.jsx(c1,{})}),r.jsx(Ge,{path:"/user-management",element:r.jsx(i4,{})}),r.jsx(Ge,{path:"/user-details/:id",element:r.jsx(s4,{})}),r.jsx(Ge,{path:"/edit-profile/:id",element:r.jsx(n8,{})}),r.jsx(Ge,{path:"/payments",element:r.jsx(eA,{})}),r.jsx(Ge,{path:"/academic-settings",element:r.jsx(_3,{})}),r.jsx(Ge,{path:"/test-settings",element:r.jsx(Dj,{})}),r.jsx(Ge,{path:"/point-settings",element:r.jsx(Lj,{})}),r.jsx(Ge,{path:"/system-settings",element:r.jsx(W7,{})}),r.jsx(Ge,{path:"/modules-tests",element:r.jsx(BA,{})}),r.jsx(Ge,{path:"/documents",element:r.jsx(G8,{})}),r.jsx(Ge,{path:"/audit-logs",element:r.jsx(qS,{})}),r.jsx(Ge,{path:"/question-bank",element:r.jsx($9,{})}),r.jsx(Ge,{path:"/student-submitted",element:r.jsx(Ok,{})}),r.jsx(Ge,{path:"/subscription-plans",element:r.jsx(hC,{})})]})]}),r.jsx($A,{})]});function pC(){const{menuToggle:a,sidebariconHover:s}=C.useContext(ti),{isAuthenticated:c}=dh();return c?r.jsx(r.Fragment,{children:r.jsxs("div",{id:"main-wrapper",className:`show ${s?"iconhover-toggle":""} ${a?"menu-toggle":""}`,children:[r.jsx(vj,{}),r.jsx("div",{className:"content-body",style:{minHeight:"849px"},children:r.jsx("div",{className:"container-fluid",children:r.jsx(z2,{})})}),r.jsx(yj,{})]})}):r.jsx(D2,{to:"/login"})}function gC(){return r.jsx(r.Fragment,{children:r.jsx(mC,{})})}let aa="ltr";const bC=[{typography:"poppins",version:"light",layout:"vertical",headerBg:"color_1",navheaderBg:"color_1",sidebarBg:"color_1",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"full",direction:aa},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_1",headerBg:"color_1",sidebarStyle:"full",sidebarBg:"color_1",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_1",direction:aa},{typography:"poppins",version:"light",layout:"horizontal",navheaderBg:"color_1",headerBg:"color_1",sidebarStyle:"modern",sidebarBg:"color_3",sidebarPosition:"static",headerPosition:"fixed",containerLayout:"wide",primary:"color_1",direction:aa},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_1",headerBg:"color_10",sidebarStyle:"compact",sidebarBg:"color_1",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_10",direction:aa},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_1",headerBg:"color_1",sidebarStyle:"modern",sidebarBg:"color_15",sidebarPosition:"static",headerPosition:"fixed",containerLayout:"wide",primary:"color_15",direction:aa},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_13",headerBg:"color_1",sidebarStyle:"icon-hover",sidebarBg:"color_13",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_13",direction:aa},{typography:"poppins",version:"light",layout:"horizontal",navheaderBg:"color_12",headerBg:"color_12",sidebarStyle:"full",sidebarBg:"color_1",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_1",direction:aa}],xC=a=>{const[s,c]=C.useState({value:"full",label:"Full"}),[i,d]=C.useState({value:"fixed",label:"Fixed"}),[f,g]=C.useState({value:"fixed",label:"Fixed"}),[b,m]=C.useState({value:"vertical",label:"Vertical"}),[h,w]=C.useState({value:"ltr",label:"LTR"}),[y,v]=C.useState("color_1"),[A,S]=C.useState("color_1"),[M,T]=C.useState("color_1"),[k,N]=C.useState("color_1"),[E,z]=C.useState(!1),[K,H]=C.useState(!1),[L,R]=C.useState(!1),[D,I]=C.useState({value:"light",label:"Light"}),[$,P]=C.useState({value:"wide-boxed",label:"Wide Boxed"}),Y=document.querySelector("body"),oe=[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],me=[{value:"compact",label:"Compact"},{value:"full",label:"Full"},{value:"mini",label:"Mini"},{value:"modern",label:"Modern"},{value:"overlay",label:"Overlay"},{value:"icon-hover",label:"Icon-hover"}],G=[{value:"light",label:"Light"},{value:"dark",label:"Dark"}],ee=[{value:"fixed",label:"Fixed"},{value:"static",label:"Static"}],se=[{value:"fixed",label:"Fixed"},{value:"static",label:"Static"}],be=[{value:"wide",label:"Wide"},{value:"boxed",label:"Boxed"},{value:"wide-boxed",label:"Wide Boxed"}],O=ne=>{c(ne),Y.setAttribute("data-sidebar-style",ne.value)},W=ne=>{m(ne),Y.setAttribute("data-layout",ne.value)},te=ne=>{w(ne),Y.setAttribute("direction",ne.value)},re=ne=>{v(ne),Y.setAttribute("data-primary",ne)},ie=ne=>{S(ne),Y.setAttribute("data-nav-headerbg",ne)},je=()=>{z(!E)},ue=ne=>{T(ne),Y.setAttribute("data-headerbg",ne)},We=ne=>{w(ne),Y.setAttribute("direction",ne.value)},ke=ne=>{N(ne),Y.setAttribute("data-sidebarbg",ne)},ot=()=>{H(!K)},mr=ne=>{d(ne),Y.setAttribute("data-sidebar-position",ne.value)},Et=ne=>{d(ne),Y.setAttribute("data-sidebar-position",ne.value)},dt=ne=>{g(ne),Y.setAttribute("data-header-position",ne.value)},Sr=()=>{s.value==="overly"?R(!0):R(!1)},ar=ne=>{Y.setAttribute("data-theme-version",ne.value),I(ne)},pr=ne=>{P(ne),Y.setAttribute("data-container",ne.value),ne.value==="boxed"&&O({value:"overlay",label:"Overlay"})},Uc=(ne,Rn)=>{var lt={},xt=bC[ne];Y.setAttribute("data-typography",xt.typography),lt.value=xt.version,ar(lt),lt.value=xt.layout,W(lt),re(xt.primary),ie(xt.navheaderBg),ue(xt.headerBg),lt.value=xt.sidebarStyle,O(lt),ke(xt.sidebarBg),lt.value=xt.sidebarPosition,Et(lt),lt.value=xt.headerPosition,dt(lt),lt.value=xt.containerLayout,pr(lt),lt.value=Rn,We(lt)};return C.useEffect(()=>{const ne=document.querySelector("body");ne.setAttribute("data-typography","poppins"),ne.setAttribute("data-theme-version","light"),ne.setAttribute("data-layout","vertical"),ne.setAttribute("data-primary","color_1"),ne.setAttribute("data-nav-headerbg","color_1"),ne.setAttribute("data-headerbg","color_1"),ne.setAttribute("data-sidebar-style","full"),ne.setAttribute("data-sidebarbg","color_1"),ne.setAttribute("data-primary","color_1"),ne.setAttribute("data-sidebar-position","fixed"),ne.setAttribute("data-header-position","fixed"),ne.setAttribute("data-container","wide"),ne.setAttribute("direction","ltr");let Rn=()=>{ne.setAttribute("data-sidebar-style","full")};return Rn(),window.addEventListener("resize",Rn),()=>window.removeEventListener("resize",Rn)},[]),r.jsx(ti.Provider,{value:{body:Y,sideBarOption:me,layoutOption:oe,sideBarStyle:s,changeSideBarStyle:O,changeSideBarLayout:W,sidebarLayout:b,changeDirection:te,direction:h,primaryColor:y,changePrimaryColor:re,navigationHader:A,changeNavigationHader:ie,haderColor:M,chnageHaderColor:ue,sidebarColor:k,chnageSidebarColor:ke,ChangeSideBarPostion:mr,changeSideBarPostion:Et,sidebarposition:i,headerposition:f,changeHeaderPostion:dt,sidebarpositions:ee,headerPositions:se,iconHover:E,ChangeIconSidebar:je,containerPosition:be,containerPosition_:$,backgroundOption:G,ChangeIconSidebarOne:ot,sidebariconHover:K,menuToggle:L,openMenuToggle:Sr,changeBackground:ar,background:D,setDemoTheme:Uc},children:a.children})};function ut(a){return`Minified Redux error #${a}; visit https://redux.js.org/Errors?code=${a} for the full message or use the non-minified dev environment for full errors. `}var vC=typeof Symbol=="function"&&Symbol.observable||"@@observable",q1=vC,Bf=()=>Math.random().toString(36).substring(7).split("").join("."),yC={INIT:`@@redux/INIT${Bf()}`,REPLACE:`@@redux/REPLACE${Bf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Bf()}`},jc=yC;function jC(a){if(typeof a!="object"||a===null)return!1;let s=a;for(;Object.getPrototypeOf(s)!==null;)s=Object.getPrototypeOf(s);return Object.getPrototypeOf(a)===s||Object.getPrototypeOf(a)===null}function hx(a,s,c){if(typeof a!="function")throw new Error(ut(2));if(typeof s=="function"&&typeof c=="function"||typeof c=="function"&&typeof arguments[3]=="function")throw new Error(ut(0));if(typeof s=="function"&&typeof c>"u"&&(c=s,s=void 0),typeof c<"u"){if(typeof c!="function")throw new Error(ut(1));return c(hx)(a,s)}let i=a,d=s,f=new Map,g=f,b=0,m=!1;function h(){g===f&&(g=new Map,f.forEach((T,k)=>{g.set(k,T)}))}function w(){if(m)throw new Error(ut(3));return d}function y(T){if(typeof T!="function")throw new Error(ut(4));if(m)throw new Error(ut(5));let k=!0;h();const N=b++;return g.set(N,T),function(){if(k){if(m)throw new Error(ut(6));k=!1,h(),g.delete(N),f=null}}}function v(T){if(!jC(T))throw new Error(ut(7));if(typeof T.type>"u")throw new Error(ut(8));if(typeof T.type!="string")throw new Error(ut(17));if(m)throw new Error(ut(9));try{m=!0,d=i(d,T)}finally{m=!1}return(f=g).forEach(N=>{N()}),T}function A(T){if(typeof T!="function")throw new Error(ut(10));i=T,v({type:jc.REPLACE})}function S(){const T=y;return{subscribe(k){if(typeof k!="object"||k===null)throw new Error(ut(11));function N(){const z=k;z.next&&z.next(w())}return N(),{unsubscribe:T(N)}},[q1](){return this}}}return v({type:jc.INIT}),{dispatch:v,subscribe:y,getState:w,replaceReducer:A,[q1]:S}}function wC(a){Object.keys(a).forEach(s=>{const c=a[s];if(typeof c(void 0,{type:jc.INIT})>"u")throw new Error(ut(12));if(typeof c(void 0,{type:jc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ut(13))})}function AC(a){const s=Object.keys(a),c={};for(let f=0;f<s.length;f++){const g=s[f];typeof a[g]=="function"&&(c[g]=a[g])}const i=Object.keys(c);let d;try{wC(c)}catch(f){d=f}return function(g={},b){if(d)throw d;let m=!1;const h={};for(let w=0;w<i.length;w++){const y=i[w],v=c[y],A=g[y],S=v(A,b);if(typeof S>"u")throw b&&b.type,new Error(ut(14));h[y]=S,m=m||S!==A}return m=m||i.length!==Object.keys(g).length,m?h:g}}function mx(...a){return a.length===0?s=>s:a.length===1?a[0]:a.reduce((s,c)=>(...i)=>s(c(...i)))}function SC(...a){return s=>(c,i)=>{const d=s(c,i);let f=()=>{throw new Error(ut(15))};const g={getState:d.getState,dispatch:(m,...h)=>f(m,...h)},b=a.map(m=>m(g));return f=mx(...b)(d.dispatch),{...d,dispatch:f}}}const kC="[Post Action] Create Post",CC="[Post Action] Confirmed Create Post",EC="[Post Action] Confirmed Get Posts",MC="[Post Action] Confirmed Edit Post",NC="[Post Action] Confirmed Delete Post",TC={posts:[]};function _C(a=TC,s){if(s.type===kC){const c={id:Math.random(),title:"Post Title 2asdasd",description:"Sample Description 2asdasdas"},i=[...a.posts];return i.push(c),{...a,posts:i}}if(s.type===NC){const c=[...a.posts],i=c.findIndex(d=>d.id===s.payload);return c.splice(i,1),{...a,posts:c}}if(s.type===MC){const c=[...a.posts],i=c.findIndex(d=>d.id===s.payload.id);return c[i]=s.payload,{...a,posts:c}}if(s.type===CC){const c=[...a.posts];return c.push(s.payload),{...a,posts:c}}return s.type===EC?{...a,posts:s.payload}:a}function RC(a){return({dispatch:c,getState:i})=>d=>f=>typeof f=="function"?f(c,i,a):d(f)}var DC=RC(),dc={exports:{}},zC=dc.exports,Y1;function OC(){return Y1||(Y1=1,function(a,s){(function(c,i){a.exports=i()})(zC,function(){return function(c){function i(f){if(d[f])return d[f].exports;var g=d[f]={i:f,l:!1,exports:{}};return c[f].call(g.exports,g,g.exports,i),g.l=!0,g.exports}var d={};return i.m=c,i.c=d,i.d=function(f,g,b){i.o(f,g)||Object.defineProperty(f,g,{configurable:!1,enumerable:!0,get:b})},i.n=function(f){var g=f&&f.__esModule?function(){return f.default}:function(){return f};return i.d(g,"a",g),g},i.o=function(f,g){return Object.prototype.hasOwnProperty.call(f,g)},i.p="",i(i.s=8)}([function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f="swal-button";i.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:f,CONFIRM_BUTTON:f+"--confirm",CANCEL_BUTTON:f+"--cancel",DANGER_BUTTON:f+"--danger",BUTTON_LOADING:f+"--loading",BUTTON_LOADER:f+"__loader"},i.default=i.CLASS_NAMES},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0}),i.getNode=function(f){var g="."+f;return document.querySelector(g)},i.stringToNode=function(f){var g=document.createElement("div");return g.innerHTML=f.trim(),g.firstChild},i.insertAfter=function(f,g){var b=g.nextSibling;g.parentNode.insertBefore(f,b)},i.removeNode=function(f){f.parentElement.removeChild(f)},i.throwErr=function(f){throw f=f.replace(/ +(?= )/g,""),"SweetAlert: "+(f=f.trim())},i.isPlainObject=function(f){if(Object.prototype.toString.call(f)!=="[object Object]")return!1;var g=Object.getPrototypeOf(f);return g===null||g===Object.prototype},i.ordinalSuffixOf=function(f){var g=f%10,b=f%100;return g===1&&b!==11?f+"st":g===2&&b!==12?f+"nd":g===3&&b!==13?f+"rd":f+"th"}},function(c,i,d){function f(v){for(var A in v)i.hasOwnProperty(A)||(i[A]=v[A])}Object.defineProperty(i,"__esModule",{value:!0}),f(d(25));var g=d(26);i.overlayMarkup=g.default,f(d(27)),f(d(28)),f(d(29));var b=d(0),m=b.default.MODAL_TITLE,h=b.default.MODAL_TEXT,w=b.default.ICON,y=b.default.FOOTER;i.iconMarkup=`
  <div class="`+w+'"></div>',i.titleMarkup=`
  <div class="`+m+`"></div>
`,i.textMarkup=`
  <div class="`+h+'"></div>',i.footerMarkup=`
  <div class="`+y+`"></div>
`},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(1);i.CONFIRM_KEY="confirm",i.CANCEL_KEY="cancel";var g={visible:!0,text:null,value:null,className:"",closeModal:!0},b=Object.assign({},g,{visible:!1,text:"Cancel",value:null}),m=Object.assign({},g,{text:"OK",value:!0});i.defaultButtonList={cancel:b,confirm:m};var h=function(A){switch(A){case i.CONFIRM_KEY:return m;case i.CANCEL_KEY:return b;default:var S=A.charAt(0).toUpperCase()+A.slice(1);return Object.assign({},g,{text:S,value:A})}},w=function(A,S){var M=h(A);return S===!0?Object.assign({},M,{visible:!0}):typeof S=="string"?Object.assign({},M,{visible:!0,text:S}):f.isPlainObject(S)?Object.assign({visible:!0},M,S):Object.assign({},M,{visible:!1})},y=function(A){for(var S={},M=0,T=Object.keys(A);M<T.length;M++){var k=T[M],N=A[k],E=w(k,N);S[k]=E}return S.cancel||(S.cancel=b),S},v=function(A){var S={};switch(A.length){case 1:S[i.CANCEL_KEY]=Object.assign({},b,{visible:!1});break;case 2:S[i.CANCEL_KEY]=w(i.CANCEL_KEY,A[0]),S[i.CONFIRM_KEY]=w(i.CONFIRM_KEY,A[1]);break;default:f.throwErr("Invalid number of 'buttons' in array ("+A.length+`).
      If you want more than 2 buttons, you need to use an object!`)}return S};i.getButtonListOpts=function(A){var S=i.defaultButtonList;return typeof A=="string"?S[i.CONFIRM_KEY]=w(i.CONFIRM_KEY,A):Array.isArray(A)?S=v(A):f.isPlainObject(A)?S=y(A):A===!0?S=v([!0,!0]):A===!1?S=v([!1,!1]):A===void 0&&(S=i.defaultButtonList),S}},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(1),g=d(2),b=d(0),m=b.default.MODAL,h=b.default.OVERLAY,w=d(30),y=d(31),v=d(32),A=d(33);i.injectElIntoModal=function(k){var N=f.getNode(m),E=f.stringToNode(k);return N.appendChild(E),E};var S=function(k){k.className=m,k.textContent=""},M=function(k,N){S(k);var E=N.className;E&&k.classList.add(E)};i.initModalContent=function(k){var N=f.getNode(m);M(N,k),w.default(k.icon),y.initTitle(k.title),y.initText(k.text),A.default(k.content),v.default(k.buttons,k.dangerMode)};var T=function(){var k=f.getNode(h),N=f.stringToNode(g.modalMarkup);k.appendChild(N)};i.default=T},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(3),g={isOpen:!1,promise:null,actions:{},timer:null},b=Object.assign({},g);i.resetState=function(){b=Object.assign({},g)},i.setActionValue=function(h){if(typeof h=="string")return m(f.CONFIRM_KEY,h);for(var w in h)m(w,h[w])};var m=function(h,w){b.actions[h]||(b.actions[h]={}),Object.assign(b.actions[h],{value:w})};i.setActionOptionsFor=function(h,w){var y=(w===void 0?{}:w).closeModal,v=y===void 0||y;Object.assign(b.actions[h],{closeModal:v})},i.default=b},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(1),g=d(3),b=d(0),m=b.default.OVERLAY,h=b.default.SHOW_MODAL,w=b.default.BUTTON,y=b.default.BUTTON_LOADING,v=d(5);i.openModal=function(){f.getNode(m).classList.add(h),v.default.isOpen=!0};var A=function(){f.getNode(m).classList.remove(h),v.default.isOpen=!1};i.onAction=function(S){S===void 0&&(S=g.CANCEL_KEY);var M=v.default.actions[S],T=M.value;if(M.closeModal===!1){var k=w+"--"+S;f.getNode(k).classList.add(y)}else A();v.default.promise.resolve(T)},i.getState=function(){var S=Object.assign({},v.default);return delete S.promise,delete S.timer,S},i.stopLoading=function(){for(var S=document.querySelectorAll("."+w),M=0;M<S.length;M++)S[M].classList.remove(y)}},function(c,i){var d;d=function(){return this}();try{d=d||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(d=window)}c.exports=d},function(c,i,d){(function(f){c.exports=f.sweetAlert=d(9)}).call(i,d(7))},function(c,i,d){(function(f){c.exports=f.swal=d(10)}).call(i,d(7))},function(c,i,d){typeof window<"u"&&d(11),d(16);var f=d(23).default;c.exports=f},function(c,i,d){var f=d(12);typeof f=="string"&&(f=[[c.i,f,""]]);var g={insertAt:"top"};g.transform=void 0,d(14)(f,g),f.locals&&(c.exports=f.locals)},function(c,i,d){i=c.exports=d(13)(void 0),i.push([c.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(c,i){function d(g,b){var m=g[1]||"",h=g[3];if(!h)return m;if(b&&typeof btoa=="function"){var w=f(h);return[m].concat(h.sources.map(function(y){return"/*# sourceURL="+h.sourceRoot+y+" */"})).concat([w]).join(`
`)}return[m].join(`
`)}function f(g){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(g))))+" */"}c.exports=function(g){var b=[];return b.toString=function(){return this.map(function(m){var h=d(m,g);return m[2]?"@media "+m[2]+"{"+h+"}":h}).join("")},b.i=function(m,h){typeof m=="string"&&(m=[[null,m,""]]);for(var w={},y=0;y<this.length;y++){var v=this[y][0];typeof v=="number"&&(w[v]=!0)}for(y=0;y<m.length;y++){var A=m[y];typeof A[0]=="number"&&w[A[0]]||(h&&!A[2]?A[2]=h:h&&(A[2]="("+A[2]+") and ("+h+")"),b.push(A))}},b}},function(c,i,d){function f(R,D){for(var I=0;I<R.length;I++){var $=R[I],P=T[$.id];if(P){P.refs++;for(var Y=0;Y<P.parts.length;Y++)P.parts[Y]($.parts[Y]);for(;Y<$.parts.length;Y++)P.parts.push(v($.parts[Y],D))}else{for(var oe=[],Y=0;Y<$.parts.length;Y++)oe.push(v($.parts[Y],D));T[$.id]={id:$.id,refs:1,parts:oe}}}}function g(R,D){for(var I=[],$={},P=0;P<R.length;P++){var Y=R[P],oe=D.base?Y[0]+D.base:Y[0],me=Y[1],G=Y[2],ee=Y[3],se={css:me,media:G,sourceMap:ee};$[oe]?$[oe].parts.push(se):I.push($[oe]={id:oe,parts:[se]})}return I}function b(R,D){var I=N(R.insertInto);if(!I)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var $=K[K.length-1];if(R.insertAt==="top")$?$.nextSibling?I.insertBefore(D,$.nextSibling):I.appendChild(D):I.insertBefore(D,I.firstChild),K.push(D);else{if(R.insertAt!=="bottom")throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");I.appendChild(D)}}function m(R){if(R.parentNode===null)return!1;R.parentNode.removeChild(R);var D=K.indexOf(R);D>=0&&K.splice(D,1)}function h(R){var D=document.createElement("style");return R.attrs.type="text/css",y(D,R.attrs),b(R,D),D}function w(R){var D=document.createElement("link");return R.attrs.type="text/css",R.attrs.rel="stylesheet",y(D,R.attrs),b(R,D),D}function y(R,D){Object.keys(D).forEach(function(I){R.setAttribute(I,D[I])})}function v(R,D){var I,$,P,Y;if(D.transform&&R.css){if(!(Y=D.transform(R.css)))return function(){};R.css=Y}if(D.singleton){var oe=z++;I=E||(E=h(D)),$=A.bind(null,I,oe,!1),P=A.bind(null,I,oe,!0)}else R.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(I=w(D),$=M.bind(null,I,D),P=function(){m(I),I.href&&URL.revokeObjectURL(I.href)}):(I=h(D),$=S.bind(null,I),P=function(){m(I)});return $(R),function(me){if(me){if(me.css===R.css&&me.media===R.media&&me.sourceMap===R.sourceMap)return;$(R=me)}else P()}}function A(R,D,I,$){var P=I?"":$.css;if(R.styleSheet)R.styleSheet.cssText=L(D,P);else{var Y=document.createTextNode(P),oe=R.childNodes;oe[D]&&R.removeChild(oe[D]),oe.length?R.insertBefore(Y,oe[D]):R.appendChild(Y)}}function S(R,D){var I=D.css,$=D.media;if($&&R.setAttribute("media",$),R.styleSheet)R.styleSheet.cssText=I;else{for(;R.firstChild;)R.removeChild(R.firstChild);R.appendChild(document.createTextNode(I))}}function M(R,D,I){var $=I.css,P=I.sourceMap,Y=D.convertToAbsoluteUrls===void 0&&P;(D.convertToAbsoluteUrls||Y)&&($=H($)),P&&($+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(P))))+" */");var oe=new Blob([$],{type:"text/css"}),me=R.href;R.href=URL.createObjectURL(oe),me&&URL.revokeObjectURL(me)}var T={},k=function(R){var D;return function(){return D===void 0&&(D=R.apply(this,arguments)),D}}(function(){return window&&document&&document.all&&!window.atob}),N=function(R){var D={};return function(I){return D[I]===void 0&&(D[I]=R.call(this,I)),D[I]}}(function(R){return document.querySelector(R)}),E=null,z=0,K=[],H=d(15);c.exports=function(R,D){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");D=D||{},D.attrs=typeof D.attrs=="object"?D.attrs:{},D.singleton||(D.singleton=k()),D.insertInto||(D.insertInto="head"),D.insertAt||(D.insertAt="bottom");var I=g(R,D);return f(I,D),function($){for(var P=[],Y=0;Y<I.length;Y++){var oe=I[Y],me=T[oe.id];me.refs--,P.push(me)}$&&f(g($,D),D);for(var Y=0;Y<P.length;Y++){var me=P[Y];if(me.refs===0){for(var G=0;G<me.parts.length;G++)me.parts[G]();delete T[me.id]}}}};var L=function(){var R=[];return function(D,I){return R[D]=I,R.filter(Boolean).join(`
`)}}()},function(c,i){c.exports=function(d){var f=typeof window<"u"&&window.location;if(!f)throw new Error("fixUrls requires window.location");if(!d||typeof d!="string")return d;var g=f.protocol+"//"+f.host,b=g+f.pathname.replace(/\/[^\/]*$/,"/");return d.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(m,h){var w=h.trim().replace(/^"(.*)"$/,function(v,A){return A}).replace(/^'(.*)'$/,function(v,A){return A});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(w))return m;var y;return y=w.indexOf("//")===0?w:w.indexOf("/")===0?g+w:b+w.replace(/^\.\//,""),"url("+JSON.stringify(y)+")"})}},function(c,i,d){var f=d(17);typeof window>"u"||window.Promise||(window.Promise=f),d(21),String.prototype.includes||(String.prototype.includes=function(g,b){return typeof b!="number"&&(b=0),!(b+g.length>this.length)&&this.indexOf(g,b)!==-1}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(g,b){if(this==null)throw new TypeError('"this" is null or not defined');var m=Object(this),h=m.length>>>0;if(h===0)return!1;for(var w=0|b,y=Math.max(w>=0?w:h-Math.abs(w),0);y<h;){if(function(v,A){return v===A||typeof v=="number"&&typeof A=="number"&&isNaN(v)&&isNaN(A)}(m[y],g))return!0;y++}return!1}}),typeof window<"u"&&function(g){g.forEach(function(b){b.hasOwnProperty("remove")||Object.defineProperty(b,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(c,i,d){(function(f){(function(g){function b(){}function m(k,N){return function(){k.apply(N,arguments)}}function h(k){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");if(typeof k!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],M(k,this)}function w(k,N){for(;k._state===3;)k=k._value;if(k._state===0)return void k._deferreds.push(N);k._handled=!0,h._immediateFn(function(){var E=k._state===1?N.onFulfilled:N.onRejected;if(E===null)return void(k._state===1?y:v)(N.promise,k._value);var z;try{z=E(k._value)}catch(K){return void v(N.promise,K)}y(N.promise,z)})}function y(k,N){try{if(N===k)throw new TypeError("A promise cannot be resolved with itself.");if(N&&(typeof N=="object"||typeof N=="function")){var E=N.then;if(N instanceof h)return k._state=3,k._value=N,void A(k);if(typeof E=="function")return void M(m(E,N),k)}k._state=1,k._value=N,A(k)}catch(z){v(k,z)}}function v(k,N){k._state=2,k._value=N,A(k)}function A(k){k._state===2&&k._deferreds.length===0&&h._immediateFn(function(){k._handled||h._unhandledRejectionFn(k._value)});for(var N=0,E=k._deferreds.length;N<E;N++)w(k,k._deferreds[N]);k._deferreds=null}function S(k,N,E){this.onFulfilled=typeof k=="function"?k:null,this.onRejected=typeof N=="function"?N:null,this.promise=E}function M(k,N){var E=!1;try{k(function(z){E||(E=!0,y(N,z))},function(z){E||(E=!0,v(N,z))})}catch(z){if(E)return;E=!0,v(N,z)}}var T=setTimeout;h.prototype.catch=function(k){return this.then(null,k)},h.prototype.then=function(k,N){var E=new this.constructor(b);return w(this,new S(k,N,E)),E},h.all=function(k){var N=Array.prototype.slice.call(k);return new h(function(E,z){function K(R,D){try{if(D&&(typeof D=="object"||typeof D=="function")){var I=D.then;if(typeof I=="function")return void I.call(D,function($){K(R,$)},z)}N[R]=D,--H==0&&E(N)}catch($){z($)}}if(N.length===0)return E([]);for(var H=N.length,L=0;L<N.length;L++)K(L,N[L])})},h.resolve=function(k){return k&&typeof k=="object"&&k.constructor===h?k:new h(function(N){N(k)})},h.reject=function(k){return new h(function(N,E){E(k)})},h.race=function(k){return new h(function(N,E){for(var z=0,K=k.length;z<K;z++)k[z].then(N,E)})},h._immediateFn=typeof f=="function"&&function(k){f(k)}||function(k){T(k,0)},h._unhandledRejectionFn=function(k){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",k)},h._setImmediateFn=function(k){h._immediateFn=k},h._setUnhandledRejectionFn=function(k){h._unhandledRejectionFn=k},c!==void 0&&c.exports?c.exports=h:g.Promise||(g.Promise=h)})(this)}).call(i,d(18).setImmediate)},function(c,i,d){function f(b,m){this._id=b,this._clearFn=m}var g=Function.prototype.apply;i.setTimeout=function(){return new f(g.call(setTimeout,window,arguments),clearTimeout)},i.setInterval=function(){return new f(g.call(setInterval,window,arguments),clearInterval)},i.clearTimeout=i.clearInterval=function(b){b&&b.close()},f.prototype.unref=f.prototype.ref=function(){},f.prototype.close=function(){this._clearFn.call(window,this._id)},i.enroll=function(b,m){clearTimeout(b._idleTimeoutId),b._idleTimeout=m},i.unenroll=function(b){clearTimeout(b._idleTimeoutId),b._idleTimeout=-1},i._unrefActive=i.active=function(b){clearTimeout(b._idleTimeoutId);var m=b._idleTimeout;m>=0&&(b._idleTimeoutId=setTimeout(function(){b._onTimeout&&b._onTimeout()},m))},d(19),i.setImmediate=setImmediate,i.clearImmediate=clearImmediate},function(c,i,d){(function(f,g){(function(b,m){function h(E){typeof E!="function"&&(E=new Function(""+E));for(var z=new Array(arguments.length-1),K=0;K<z.length;K++)z[K]=arguments[K+1];var H={callback:E,args:z};return M[S]=H,A(S),S++}function w(E){delete M[E]}function y(E){var z=E.callback,K=E.args;switch(K.length){case 0:z();break;case 1:z(K[0]);break;case 2:z(K[0],K[1]);break;case 3:z(K[0],K[1],K[2]);break;default:z.apply(m,K)}}function v(E){if(T)setTimeout(v,0,E);else{var z=M[E];if(z){T=!0;try{y(z)}finally{w(E),T=!1}}}}if(!b.setImmediate){var A,S=1,M={},T=!1,k=b.document,N=Object.getPrototypeOf&&Object.getPrototypeOf(b);N=N&&N.setTimeout?N:b,{}.toString.call(b.process)==="[object process]"?function(){A=function(E){g.nextTick(function(){v(E)})}}():function(){if(b.postMessage&&!b.importScripts){var E=!0,z=b.onmessage;return b.onmessage=function(){E=!1},b.postMessage("","*"),b.onmessage=z,E}}()?function(){var E="setImmediate$"+Math.random()+"$",z=function(K){K.source===b&&typeof K.data=="string"&&K.data.indexOf(E)===0&&v(+K.data.slice(E.length))};b.addEventListener?b.addEventListener("message",z,!1):b.attachEvent("onmessage",z),A=function(K){b.postMessage(E+K,"*")}}():b.MessageChannel?function(){var E=new MessageChannel;E.port1.onmessage=function(z){v(z.data)},A=function(z){E.port2.postMessage(z)}}():k&&"onreadystatechange"in k.createElement("script")?function(){var E=k.documentElement;A=function(z){var K=k.createElement("script");K.onreadystatechange=function(){v(z),K.onreadystatechange=null,E.removeChild(K),K=null},E.appendChild(K)}}():function(){A=function(E){setTimeout(v,0,E)}}(),N.setImmediate=h,N.clearImmediate=w}})(typeof self>"u"?f===void 0?this:f:self)}).call(i,d(7),d(20))},function(c,i){function d(){throw new Error("setTimeout has not been defined")}function f(){throw new Error("clearTimeout has not been defined")}function g(E){if(v===setTimeout)return setTimeout(E,0);if((v===d||!v)&&setTimeout)return v=setTimeout,setTimeout(E,0);try{return v(E,0)}catch{try{return v.call(null,E,0)}catch{return v.call(this,E,0)}}}function b(E){if(A===clearTimeout)return clearTimeout(E);if((A===f||!A)&&clearTimeout)return A=clearTimeout,clearTimeout(E);try{return A(E)}catch{try{return A.call(null,E)}catch{return A.call(this,E)}}}function m(){k&&M&&(k=!1,M.length?T=M.concat(T):N=-1,T.length&&h())}function h(){if(!k){var E=g(m);k=!0;for(var z=T.length;z;){for(M=T,T=[];++N<z;)M&&M[N].run();N=-1,z=T.length}M=null,k=!1,b(E)}}function w(E,z){this.fun=E,this.array=z}function y(){}var v,A,S=c.exports={};(function(){try{v=typeof setTimeout=="function"?setTimeout:d}catch{v=d}try{A=typeof clearTimeout=="function"?clearTimeout:f}catch{A=f}})();var M,T=[],k=!1,N=-1;S.nextTick=function(E){var z=new Array(arguments.length-1);if(arguments.length>1)for(var K=1;K<arguments.length;K++)z[K-1]=arguments[K];T.push(new w(E,z)),T.length!==1||k||g(h)},w.prototype.run=function(){this.fun.apply(null,this.array)},S.title="browser",S.browser=!0,S.env={},S.argv=[],S.version="",S.versions={},S.on=y,S.addListener=y,S.once=y,S.off=y,S.removeListener=y,S.removeAllListeners=y,S.emit=y,S.prependListener=y,S.prependOnceListener=y,S.listeners=function(E){return[]},S.binding=function(E){throw new Error("process.binding is not supported")},S.cwd=function(){return"/"},S.chdir=function(E){throw new Error("process.chdir is not supported")},S.umask=function(){return 0}},function(c,i,d){d(22).polyfill()},function(c,i,d){function f(b,m){if(b==null)throw new TypeError("Cannot convert first argument to object");for(var h=Object(b),w=1;w<arguments.length;w++){var y=arguments[w];if(y!=null)for(var v=Object.keys(Object(y)),A=0,S=v.length;A<S;A++){var M=v[A],T=Object.getOwnPropertyDescriptor(y,M);T!==void 0&&T.enumerable&&(h[M]=y[M])}}return h}function g(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:f})}c.exports={assign:f,polyfill:g}},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(24),g=d(6),b=d(5),m=d(36),h=function(){for(var w=[],y=0;y<arguments.length;y++)w[y]=arguments[y];if(typeof window<"u"){var v=m.getOpts.apply(void 0,w);return new Promise(function(A,S){b.default.promise={resolve:A,reject:S},f.default(v),setTimeout(function(){g.openModal()})})}};h.close=g.onAction,h.getState=g.getState,h.setActionValue=b.setActionValue,h.stopLoading=g.stopLoading,h.setDefaults=m.setDefaults,i.default=h},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(1),g=d(0),b=g.default.MODAL,m=d(4),h=d(34),w=d(35),y=d(1);i.init=function(v){f.getNode(b)||(document.body||y.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),h.default(),m.default()),m.initModalContent(v),w.default(v)},i.default=i.init},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(0),g=f.default.MODAL;i.modalMarkup=`
  <div class="`+g+'" role="dialog" aria-modal="true"></div>',i.default=i.modalMarkup},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(0),g=f.default.OVERLAY,b=`<div 
    class="`+g+`"
    tabIndex="-1">
  </div>`;i.default=b},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(0),g=f.default.ICON;i.errorIconMarkup=function(){var b=g+"--error",m=b+"__line";return`
    <div class="`+b+`__x-mark">
      <span class="`+m+" "+m+`--left"></span>
      <span class="`+m+" "+m+`--right"></span>
    </div>
  `},i.warningIconMarkup=function(){var b=g+"--warning";return`
    <span class="`+b+`__body">
      <span class="`+b+`__dot"></span>
    </span>
  `},i.successIconMarkup=function(){var b=g+"--success";return`
    <span class="`+b+"__line "+b+`__line--long"></span>
    <span class="`+b+"__line "+b+`__line--tip"></span>

    <div class="`+b+`__ring"></div>
    <div class="`+b+`__hide-corners"></div>
  `}},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(0),g=f.default.CONTENT;i.contentMarkup=`
  <div class="`+g+`">

  </div>
`},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(0),g=f.default.BUTTON_CONTAINER,b=f.default.BUTTON,m=f.default.BUTTON_LOADER;i.buttonMarkup=`
  <div class="`+g+`">

    <button
      class="`+b+`"
    ></button>

    <div class="`+m+`">
      <div></div>
      <div></div>
      <div></div>
    </div>

  </div>
`},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(4),g=d(2),b=d(0),m=b.default.ICON,h=b.default.ICON_CUSTOM,w=["error","warning","success","info"],y={error:g.errorIconMarkup(),warning:g.warningIconMarkup(),success:g.successIconMarkup()},v=function(M,T){var k=m+"--"+M;T.classList.add(k);var N=y[M];N&&(T.innerHTML=N)},A=function(M,T){T.classList.add(h);var k=document.createElement("img");k.src=M,T.appendChild(k)},S=function(M){if(M){var T=f.injectElIntoModal(g.iconMarkup);w.includes(M)?v(M,T):A(M,T)}};i.default=S},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(2),g=d(4),b=function(m){navigator.userAgent.includes("AppleWebKit")&&(m.style.display="none",m.offsetHeight,m.style.display="")};i.initTitle=function(m){if(m){var h=g.injectElIntoModal(f.titleMarkup);h.textContent=m,b(h)}},i.initText=function(m){if(m){var h=document.createDocumentFragment();m.split(`
`).forEach(function(y,v,A){h.appendChild(document.createTextNode(y)),v<A.length-1&&h.appendChild(document.createElement("br"))});var w=g.injectElIntoModal(f.textMarkup);w.appendChild(h),b(w)}}},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(1),g=d(4),b=d(0),m=b.default.BUTTON,h=b.default.DANGER_BUTTON,w=d(3),y=d(2),v=d(6),A=d(5),S=function(T,k,N){var E=k.text,z=k.value,K=k.className,H=k.closeModal,L=f.stringToNode(y.buttonMarkup),R=L.querySelector("."+m),D=m+"--"+T;R.classList.add(D),K&&(Array.isArray(K)?K:K.split(" ")).filter(function($){return $.length>0}).forEach(function($){R.classList.add($)}),N&&T===w.CONFIRM_KEY&&R.classList.add(h),R.textContent=E;var I={};return I[T]=z,A.setActionValue(I),A.setActionOptionsFor(T,{closeModal:H}),R.addEventListener("click",function(){return v.onAction(T)}),L},M=function(T,k){var N=g.injectElIntoModal(y.footerMarkup);for(var E in T){var z=T[E],K=S(E,z,k);z.visible&&N.appendChild(K)}N.children.length===0&&N.remove()};i.default=M},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(3),g=d(4),b=d(2),m=d(5),h=d(6),w=d(0),y=w.default.CONTENT,v=function(M){M.addEventListener("input",function(T){var k=T.target,N=k.value;m.setActionValue(N)}),M.addEventListener("keyup",function(T){if(T.key==="Enter")return h.onAction(f.CONFIRM_KEY)}),setTimeout(function(){M.focus(),m.setActionValue("")},0)},A=function(M,T,k){var N=document.createElement(T),E=y+"__"+T;N.classList.add(E);for(var z in k){var K=k[z];N[z]=K}T==="input"&&v(N),M.appendChild(N)},S=function(M){if(M){var T=g.injectElIntoModal(b.contentMarkup),k=M.element,N=M.attributes;typeof k=="string"?A(T,k,N):T.appendChild(k)}};i.default=S},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(1),g=d(2),b=function(){var m=f.stringToNode(g.overlayMarkup);document.body.appendChild(m)};i.default=b},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(5),g=d(6),b=d(1),m=d(3),h=d(0),w=h.default.MODAL,y=h.default.BUTTON,v=h.default.OVERLAY,A=function($){$.preventDefault(),N()},S=function($){$.preventDefault(),E()},M=function($){if(f.default.isOpen)switch($.key){case"Escape":return g.onAction(m.CANCEL_KEY)}},T=function($){if(f.default.isOpen)switch($.key){case"Tab":return A($)}},k=function($){if(f.default.isOpen)return $.key==="Tab"&&$.shiftKey?S($):void 0},N=function(){var $=b.getNode(y);$&&($.tabIndex=0,$.focus())},E=function(){var $=b.getNode(w),P=$.querySelectorAll("."+y),Y=P.length-1,oe=P[Y];oe&&oe.focus()},z=function($){$[$.length-1].addEventListener("keydown",T)},K=function($){$[0].addEventListener("keydown",k)},H=function(){var $=b.getNode(w),P=$.querySelectorAll("."+y);P.length&&(z(P),K(P))},L=function($){if(b.getNode(v)===$.target)return g.onAction(m.CANCEL_KEY)},R=function($){var P=b.getNode(v);P.removeEventListener("click",L),$&&P.addEventListener("click",L)},D=function($){f.default.timer&&clearTimeout(f.default.timer),$&&(f.default.timer=window.setTimeout(function(){return g.onAction(m.CANCEL_KEY)},$))},I=function($){$.closeOnEsc?document.addEventListener("keyup",M):document.removeEventListener("keyup",M),$.dangerMode?N():E(),H(),R($.closeOnClickOutside),D($.timer)};i.default=I},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(1),g=d(3),b=d(37),m=d(38),h={title:null,text:null,icon:null,buttons:g.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},w=Object.assign({},h);i.setDefaults=function(k){w=Object.assign({},h,k)};var y=function(k){var N=k&&k.button,E=k&&k.buttons;return N!==void 0&&E!==void 0&&f.throwErr("Cannot set both 'button' and 'buttons' options!"),N!==void 0?{confirm:N}:E},v=function(k){return f.ordinalSuffixOf(k+1)},A=function(k,N){f.throwErr(v(N)+" argument ('"+k+"') is invalid")},S=function(k,N){var E=k+1,z=N[E];f.isPlainObject(z)||z===void 0||f.throwErr("Expected "+v(E)+" argument ('"+z+"') to be a plain object")},M=function(k,N){var E=k+1,z=N[E];z!==void 0&&f.throwErr("Unexpected "+v(E)+" argument ("+z+")")},T=function(k,N,E,z){var K=typeof N,H=K==="string",L=N instanceof Element;if(H){if(E===0)return{text:N};if(E===1)return{text:N,title:z[0]};if(E===2)return S(E,z),{icon:N};A(N,E)}else{if(L&&E===0)return S(E,z),{content:N};if(f.isPlainObject(N))return M(E,z),N;A(N,E)}};i.getOpts=function(){for(var k=[],N=0;N<arguments.length;N++)k[N]=arguments[N];var E={};k.forEach(function(H,L){var R=T(0,H,L,k);Object.assign(E,R)});var z=y(E);E.buttons=g.getButtonListOpts(z),delete E.button,E.content=b.getContentOpts(E.content);var K=Object.assign({},h,w,E);return Object.keys(K).forEach(function(H){m.DEPRECATED_OPTS[H]&&m.logDeprecation(H)}),K}},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0});var f=d(1),g={element:"input",attributes:{placeholder:""}};i.getContentOpts=function(b){var m={};return f.isPlainObject(b)?Object.assign(m,b):b instanceof Element?{element:b}:b==="input"?g:null}},function(c,i,d){Object.defineProperty(i,"__esModule",{value:!0}),i.logDeprecation=function(f){var g=i.DEPRECATED_OPTS[f],b=g.onlyRename,m=g.replacement,h=g.subOption,w=g.link,y=b?"renamed":"deprecated",v='SweetAlert warning: "'+f+'" option has been '+y+".";m&&(v+=" Please use"+(h?' "'+h+'" in ':" ")+'"'+m+'" instead.');var A="https://sweetalert.js.org";v+=w?" More details: "+A+w:" More details: "+A+"/guides/#upgrading-from-1x",console.warn(v)},i.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])})}(dc)),dc.exports}OC();const BC="[signup action] confirmed signup",$C="[signup action] failed signup",KC="[login action] confirmed login",UC="[login action] failed login",LC="[Loading action] toggle loading",HC="[Logout action] logout action",QC={auth:{email:"",idToken:"",localId:"",expiresIn:"",refreshToken:""},errorMessage:"",successMessage:"",showLoading:!1};function qC(a=QC,s){return s.type===BC?{...a,auth:s.payload,errorMessage:"",successMessage:"Signup Successfully Completed",showLoading:!1}:s.type===KC?{...a,auth:s.payload,errorMessage:"",successMessage:"Login Successfully Completed",showLoading:!1}:s.type===HC?{...a,errorMessage:"",successMessage:"",auth:{email:"",idToken:"",localId:"",expiresIn:"",refreshToken:""}}:s.type===$C||s.type===UC?{...a,errorMessage:s.payload,successMessage:"",showLoading:!1}:s.type===LC?{...a,showLoading:s.payload}:a}const YC={list:[]},PC=(a=YC,s)=>{switch(s.type){case"ADD_TODO":const{id:c,data:i}=s.payload;return{...a,list:[...a.list,{id:c,data:i}]};case"DELETE_TODO":const d=a.list.filter(f=>f.id!==s.id);return{...a,list:d};case"REMOVE_TODO":return{...a,list:[]};default:return a}},FC={users:[]},VC=(a=FC,s)=>{switch(s.type){case Xb:return{...a,users:s.payload};case Ib:return{...a,users:a.users.map(c=>c.id===s.payload.id?s.payload:c)};default:return a}},GC=SC(DC),ZC=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||mx,XC=AC({posts:_C,auth:qC,todoReducers:PC,userReducer:VC}),IC=hx(XC,ZC(GC));Qv.createRoot(document.getElementById("root")).render(r.jsx(C.StrictMode,{children:r.jsx(mw,{store:IC,children:r.jsx(oy,{children:r.jsx(xC,{children:r.jsx(gy,{children:r.jsx(gC,{})})})})})}));
