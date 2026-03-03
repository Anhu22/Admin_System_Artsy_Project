(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))l(d);new MutationObserver(d=>{for(const u of d)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function s(d){const u={};return d.integrity&&(u.integrity=d.integrity),d.referrerPolicy&&(u.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?u.credentials="include":d.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(d){if(d.ep)return;d.ep=!0;const u=s(d);fetch(d.href,u)}})();function wm(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Xf={exports:{}},Xi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function I2(){if(B0)return Xi;B0=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function s(l,d,u){var h=null;if(u!==void 0&&(h=""+u),d.key!==void 0&&(h=""+d.key),"key"in d){u={};for(var g in d)g!=="key"&&(u[g]=d[g])}else u=d;return d=u.ref,{$$typeof:n,type:l,key:h,ref:d!==void 0?d:null,props:u}}return Xi.Fragment=i,Xi.jsx=s,Xi.jsxs=s,Xi}var U0;function X2(){return U0||(U0=1,Xf.exports=I2()),Xf.exports}var r=X2(),Zf={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function Z2(){if(K0)return ye;K0=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function j(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,N={};function E(z,W,ae){this.props=z,this.context=W,this.refs=N,this.updater=ae||S}E.prototype.isReactComponent={},E.prototype.setState=function(z,W){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,W,"setState")},E.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function A(){}A.prototype=E.prototype;function M(z,W,ae){this.props=z,this.context=W,this.refs=N,this.updater=ae||S}var T=M.prototype=new A;T.constructor=M,w(T,E.prototype),T.isPureReactComponent=!0;var _=Array.isArray,R={H:null,A:null,T:null,S:null,V:null},$=Object.prototype.hasOwnProperty;function L(z,W,ae,ie,he,te){return ae=te.ref,{$$typeof:n,type:z,key:W,ref:ae!==void 0?ae:null,props:te}}function B(z,W){return L(z.type,W,void 0,void 0,void 0,z.props)}function q(z){return typeof z=="object"&&z!==null&&z.$$typeof===n}function ne(z){var W={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(ae){return W[ae]})}var U=/\/+/g;function D(z,W){return typeof z=="object"&&z!==null&&z.key!=null?ne(""+z.key):W.toString(36)}function J(){}function se(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(J,J):(z.status="pending",z.then(function(W){z.status==="pending"&&(z.status="fulfilled",z.value=W)},function(W){z.status==="pending"&&(z.status="rejected",z.reason=W)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function de(z,W,ae,ie,he){var te=typeof z;(te==="undefined"||te==="boolean")&&(z=null);var oe=!1;if(z===null)oe=!0;else switch(te){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(z.$$typeof){case n:case i:oe=!0;break;case v:return oe=z._init,de(oe(z._payload),W,ae,ie,he)}}if(oe)return he=he(z),oe=ie===""?"."+D(z,0):ie,_(he)?(ae="",oe!=null&&(ae=oe.replace(U,"$&/")+"/"),de(he,W,ae,"",function(tt){return tt})):he!=null&&(q(he)&&(he=B(he,ae+(he.key==null||z&&z.key===he.key?"":(""+he.key).replace(U,"$&/")+"/")+oe)),W.push(he)),1;oe=0;var Se=ie===""?".":ie+":";if(_(z))for(var ve=0;ve<z.length;ve++)ie=z[ve],te=Se+D(ie,ve),oe+=de(ie,W,ae,te,he);else if(ve=j(z),typeof ve=="function")for(z=ve.call(z),ve=0;!(ie=z.next()).done;)ie=ie.value,te=Se+D(ie,ve++),oe+=de(ie,W,ae,te,he);else if(te==="object"){if(typeof z.then=="function")return de(se(z),W,ae,ie,he);throw W=String(z),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return oe}function V(z,W,ae){if(z==null)return z;var ie=[],he=0;return de(z,ie,"","",function(te){return W.call(ae,te,he++)}),ie}function I(z){if(z._status===-1){var W=z._result;W=W(),W.then(function(ae){(z._status===0||z._status===-1)&&(z._status=1,z._result=ae)},function(ae){(z._status===0||z._status===-1)&&(z._status=2,z._result=ae)}),z._status===-1&&(z._status=0,z._result=W)}if(z._status===1)return z._result.default;throw z._result}var Y=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)};function le(){}return ye.Children={map:V,forEach:function(z,W,ae){V(z,function(){W.apply(this,arguments)},ae)},count:function(z){var W=0;return V(z,function(){W++}),W},toArray:function(z){return V(z,function(W){return W})||[]},only:function(z){if(!q(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},ye.Component=E,ye.Fragment=s,ye.Profiler=d,ye.PureComponent=M,ye.StrictMode=l,ye.Suspense=b,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,ye.__COMPILER_RUNTIME={__proto__:null,c:function(z){return R.H.useMemoCache(z)}},ye.cache=function(z){return function(){return z.apply(null,arguments)}},ye.cloneElement=function(z,W,ae){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var ie=w({},z.props),he=z.key,te=void 0;if(W!=null)for(oe in W.ref!==void 0&&(te=void 0),W.key!==void 0&&(he=""+W.key),W)!$.call(W,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&W.ref===void 0||(ie[oe]=W[oe]);var oe=arguments.length-2;if(oe===1)ie.children=ae;else if(1<oe){for(var Se=Array(oe),ve=0;ve<oe;ve++)Se[ve]=arguments[ve+2];ie.children=Se}return L(z.type,he,void 0,void 0,te,ie)},ye.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:u,_context:z},z},ye.createElement=function(z,W,ae){var ie,he={},te=null;if(W!=null)for(ie in W.key!==void 0&&(te=""+W.key),W)$.call(W,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(he[ie]=W[ie]);var oe=arguments.length-2;if(oe===1)he.children=ae;else if(1<oe){for(var Se=Array(oe),ve=0;ve<oe;ve++)Se[ve]=arguments[ve+2];he.children=Se}if(z&&z.defaultProps)for(ie in oe=z.defaultProps,oe)he[ie]===void 0&&(he[ie]=oe[ie]);return L(z,te,void 0,void 0,null,he)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(z){return{$$typeof:g,render:z}},ye.isValidElement=q,ye.lazy=function(z){return{$$typeof:v,_payload:{_status:-1,_result:z},_init:I}},ye.memo=function(z,W){return{$$typeof:m,type:z,compare:W===void 0?null:W}},ye.startTransition=function(z){var W=R.T,ae={};R.T=ae;try{var ie=z(),he=R.S;he!==null&&he(ae,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(le,Y)}catch(te){Y(te)}finally{R.T=W}},ye.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},ye.use=function(z){return R.H.use(z)},ye.useActionState=function(z,W,ae){return R.H.useActionState(z,W,ae)},ye.useCallback=function(z,W){return R.H.useCallback(z,W)},ye.useContext=function(z){return R.H.useContext(z)},ye.useDebugValue=function(){},ye.useDeferredValue=function(z,W){return R.H.useDeferredValue(z,W)},ye.useEffect=function(z,W,ae){var ie=R.H;if(typeof ae=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(z,W)},ye.useId=function(){return R.H.useId()},ye.useImperativeHandle=function(z,W,ae){return R.H.useImperativeHandle(z,W,ae)},ye.useInsertionEffect=function(z,W){return R.H.useInsertionEffect(z,W)},ye.useLayoutEffect=function(z,W){return R.H.useLayoutEffect(z,W)},ye.useMemo=function(z,W){return R.H.useMemo(z,W)},ye.useOptimistic=function(z,W){return R.H.useOptimistic(z,W)},ye.useReducer=function(z,W,ae){return R.H.useReducer(z,W,ae)},ye.useRef=function(z){return R.H.useRef(z)},ye.useState=function(z){return R.H.useState(z)},ye.useSyncExternalStore=function(z,W,ae){return R.H.useSyncExternalStore(z,W,ae)},ye.useTransition=function(){return R.H.useTransition()},ye.version="19.1.0",ye}var L0;function Ka(){return L0||(L0=1,Zf.exports=Z2()),Zf.exports}var C=Ka();const Fe=wm(C);var Jf={exports:{}},Zi={},Wf={exports:{}},eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function J2(){return P0||(P0=1,function(n){function i(V,I){var Y=V.length;V.push(I);e:for(;0<Y;){var le=Y-1>>>1,z=V[le];if(0<d(z,I))V[le]=I,V[Y]=z,Y=le;else break e}}function s(V){return V.length===0?null:V[0]}function l(V){if(V.length===0)return null;var I=V[0],Y=V.pop();if(Y!==I){V[0]=Y;e:for(var le=0,z=V.length,W=z>>>1;le<W;){var ae=2*(le+1)-1,ie=V[ae],he=ae+1,te=V[he];if(0>d(ie,Y))he<z&&0>d(te,ie)?(V[le]=te,V[he]=Y,le=he):(V[le]=ie,V[ae]=Y,le=ae);else if(he<z&&0>d(te,Y))V[le]=te,V[he]=Y,le=he;else break e}}return I}function d(V,I){var Y=V.sortIndex-I.sortIndex;return Y!==0?Y:V.id-I.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var h=Date,g=h.now();n.unstable_now=function(){return h.now()-g}}var b=[],m=[],v=1,x=null,j=3,S=!1,w=!1,N=!1,E=!1,A=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function _(V){for(var I=s(m);I!==null;){if(I.callback===null)l(m);else if(I.startTime<=V)l(m),I.sortIndex=I.expirationTime,i(b,I);else break;I=s(m)}}function R(V){if(N=!1,_(V),!w)if(s(b)!==null)w=!0,$||($=!0,D());else{var I=s(m);I!==null&&de(R,I.startTime-V)}}var $=!1,L=-1,B=5,q=-1;function ne(){return E?!0:!(n.unstable_now()-q<B)}function U(){if(E=!1,$){var V=n.unstable_now();q=V;var I=!0;try{e:{w=!1,N&&(N=!1,M(L),L=-1),S=!0;var Y=j;try{t:{for(_(V),x=s(b);x!==null&&!(x.expirationTime>V&&ne());){var le=x.callback;if(typeof le=="function"){x.callback=null,j=x.priorityLevel;var z=le(x.expirationTime<=V);if(V=n.unstable_now(),typeof z=="function"){x.callback=z,_(V),I=!0;break t}x===s(b)&&l(b),_(V)}else l(b);x=s(b)}if(x!==null)I=!0;else{var W=s(m);W!==null&&de(R,W.startTime-V),I=!1}}break e}finally{x=null,j=Y,S=!1}I=void 0}}finally{I?D():$=!1}}}var D;if(typeof T=="function")D=function(){T(U)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,se=J.port2;J.port1.onmessage=U,D=function(){se.postMessage(null)}}else D=function(){A(U,0)};function de(V,I){L=A(function(){V(n.unstable_now())},I)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return j},n.unstable_next=function(V){switch(j){case 1:case 2:case 3:var I=3;break;default:I=j}var Y=j;j=I;try{return V()}finally{j=Y}},n.unstable_requestPaint=function(){E=!0},n.unstable_runWithPriority=function(V,I){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Y=j;j=V;try{return I()}finally{j=Y}},n.unstable_scheduleCallback=function(V,I,Y){var le=n.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?le+Y:le):Y=le,V){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=Y+z,V={id:v++,callback:I,priorityLevel:V,startTime:Y,expirationTime:z,sortIndex:-1},Y>le?(V.sortIndex=Y,i(m,V),s(b)===null&&V===s(m)&&(N?(M(L),L=-1):N=!0,de(R,Y-le))):(V.sortIndex=z,i(b,V),w||S||(w=!0,$||($=!0,D()))),V},n.unstable_shouldYield=ne,n.unstable_wrapCallback=function(V){var I=j;return function(){var Y=j;j=I;try{return V.apply(this,arguments)}finally{j=Y}}}}(eh)),eh}var H0;function W2(){return H0||(H0=1,Wf.exports=J2()),Wf.exports}var th={exports:{}},jt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function ej(){if(q0)return jt;q0=1;var n=Ka();function i(b){var m="https://react.dev/errors/"+b;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+b+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var l={d:{f:s,r:function(){throw Error(i(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function u(b,m,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:x==null?null:""+x,children:b,containerInfo:m,implementation:v}}var h=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(b,m){if(b==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,jt.createPortal=function(b,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(i(299));return u(b,m,null,v)},jt.flushSync=function(b){var m=h.T,v=l.p;try{if(h.T=null,l.p=2,b)return b()}finally{h.T=m,l.p=v,l.d.f()}},jt.preconnect=function(b,m){typeof b=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,l.d.C(b,m))},jt.prefetchDNS=function(b){typeof b=="string"&&l.d.D(b)},jt.preinit=function(b,m){if(typeof b=="string"&&m&&typeof m.as=="string"){var v=m.as,x=g(v,m.crossOrigin),j=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?l.d.S(b,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:j,fetchPriority:S}):v==="script"&&l.d.X(b,{crossOrigin:x,integrity:j,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},jt.preinitModule=function(b,m){if(typeof b=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=g(m.as,m.crossOrigin);l.d.M(b,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&l.d.M(b)},jt.preload=function(b,m){if(typeof b=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,x=g(v,m.crossOrigin);l.d.L(b,v,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},jt.preloadModule=function(b,m){if(typeof b=="string")if(m){var v=g(m.as,m.crossOrigin);l.d.m(b,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else l.d.m(b)},jt.requestFormReset=function(b){l.d.r(b)},jt.unstable_batchedUpdates=function(b,m){return b(m)},jt.useFormState=function(b,m,v){return h.H.useFormState(b,m,v)},jt.useFormStatus=function(){return h.H.useHostTransitionStatus()},jt.version="19.1.0",jt}var F0;function _x(){if(F0)return th.exports;F0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),th.exports=ej(),th.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function tj(){if(Q0)return Zi;Q0=1;var n=W2(),i=Ka(),s=_x();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var t=e,o=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(o=t.return),e=t.return;while(e)}return t.tag===3?o:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(u(e)!==e)throw Error(l(188))}function b(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(l(188));return t!==e?null:e}for(var o=e,a=t;;){var c=o.return;if(c===null)break;var f=c.alternate;if(f===null){if(a=c.return,a!==null){o=a;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===o)return g(c),e;if(f===a)return g(c),t;f=f.sibling}throw Error(l(188))}if(o.return!==a.return)o=c,a=f;else{for(var y=!1,k=c.child;k;){if(k===o){y=!0,o=c,a=f;break}if(k===a){y=!0,a=c,o=f;break}k=k.sibling}if(!y){for(k=f.child;k;){if(k===o){y=!0,o=f,a=c;break}if(k===a){y=!0,a=f,o=c;break}k=k.sibling}if(!y)throw Error(l(189))}}if(o.alternate!==a)throw Error(l(190))}if(o.tag!==3)throw Error(l(188));return o.stateNode.current===o?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),T=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),ne=Symbol.for("react.memo_cache_sentinel"),U=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function se(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case E:return"Profiler";case N:return"StrictMode";case R:return"Suspense";case $:return"SuspenseList";case q:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case T:return(e.displayName||"Context")+".Provider";case M:return(e._context.displayName||"Context")+".Consumer";case _:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case B:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var de=Array.isArray,V=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},le=[],z=-1;function W(e){return{current:e}}function ae(e){0>z||(e.current=le[z],le[z]=null,z--)}function ie(e,t){z++,le[z]=e.current,e.current=t}var he=W(null),te=W(null),oe=W(null),Se=W(null);function ve(e,t){switch(ie(oe,t),ie(te,e),ie(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?u0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=u0(t),e=f0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ae(he),ie(he,e)}function tt(){ae(he),ae(te),ae(oe)}function Sr(e){e.memoizedState!==null&&ie(Se,e);var t=he.current,o=f0(t,e.type);t!==o&&(ie(te,e),ie(he,o))}function Ut(e){te.current===e&&(ae(he),ae(te)),Se.current===e&&(ae(Se),Qi._currentValue=Y)}var xt=Object.prototype.hasOwnProperty,zr=n.unstable_scheduleCallback,fr=n.unstable_cancelCallback,Ar=n.unstable_shouldYield,Bd=n.unstable_requestPaint,ce=n.unstable_now,In=n.unstable_getCurrentPriorityLevel,ht=n.unstable_ImmediatePriority,Tt=n.unstable_UserBlockingPriority,Hl=n.unstable_NormalPriority,My=n.unstable_LowPriority,Vm=n.unstable_IdlePriority,_y=n.log,Ry=n.unstable_setDisableYieldValue,Wa=null,Kt=null;function un(e){if(typeof _y=="function"&&Ry(e),Kt&&typeof Kt.setStrictMode=="function")try{Kt.setStrictMode(Wa,e)}catch{}}var Lt=Math.clz32?Math.clz32:zy,Dy=Math.log,Oy=Math.LN2;function zy(e){return e>>>=0,e===0?32:31-(Dy(e)/Oy|0)|0}var ql=256,Fl=4194304;function Xn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ql(e,t,o){var a=e.pendingLanes;if(a===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var k=a&134217727;return k!==0?(a=k&~f,a!==0?c=Xn(a):(y&=k,y!==0?c=Xn(y):o||(o=k&~e,o!==0&&(c=Xn(o))))):(k=a&~f,k!==0?c=Xn(k):y!==0?c=Xn(y):o||(o=a&~e,o!==0&&(c=Xn(o)))),c===0?0:t!==0&&t!==c&&(t&f)===0&&(f=c&-c,o=t&-t,f>=o||f===32&&(o&4194048)!==0)?t:c}function ei(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $y(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gm(){var e=ql;return ql<<=1,(ql&4194048)===0&&(ql=256),e}function Im(){var e=Fl;return Fl<<=1,(Fl&62914560)===0&&(Fl=4194304),e}function Ud(e){for(var t=[],o=0;31>o;o++)t.push(e);return t}function ti(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function By(e,t,o,a,c,f){var y=e.pendingLanes;e.pendingLanes=o,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=o,e.entangledLanes&=o,e.errorRecoveryDisabledLanes&=o,e.shellSuspendCounter=0;var k=e.entanglements,O=e.expirationTimes,F=e.hiddenUpdates;for(o=y&~o;0<o;){var Z=31-Lt(o),re=1<<Z;k[Z]=0,O[Z]=-1;var Q=F[Z];if(Q!==null)for(F[Z]=null,Z=0;Z<Q.length;Z++){var G=Q[Z];G!==null&&(G.lane&=-536870913)}o&=~re}a!==0&&Xm(e,a,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~t))}function Xm(e,t,o){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-Lt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|o&4194090}function Zm(e,t){var o=e.entangledLanes|=t;for(e=e.entanglements;o;){var a=31-Lt(o),c=1<<a;c&t|e[a]&t&&(e[a]|=t),o&=~c}}function Kd(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ld(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Jm(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:_0(e.type))}function Uy(e,t){var o=I.p;try{return I.p=e,t()}finally{I.p=o}}var fn=Math.random().toString(36).slice(2),vt="__reactFiber$"+fn,Nt="__reactProps$"+fn,Bo="__reactContainer$"+fn,Pd="__reactEvents$"+fn,Ky="__reactListeners$"+fn,Ly="__reactHandles$"+fn,Wm="__reactResources$"+fn,ri="__reactMarker$"+fn;function Hd(e){delete e[vt],delete e[Nt],delete e[Pd],delete e[Ky],delete e[Ly]}function Uo(e){var t=e[vt];if(t)return t;for(var o=e.parentNode;o;){if(t=o[Bo]||o[vt]){if(o=t.alternate,t.child!==null||o!==null&&o.child!==null)for(e=g0(e);e!==null;){if(o=e[vt])return o;e=g0(e)}return t}e=o,o=e.parentNode}return null}function Ko(e){if(e=e[vt]||e[Bo]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ni(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Lo(e){var t=e[Wm];return t||(t=e[Wm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function it(e){e[ri]=!0}var ep=new Set,tp={};function Zn(e,t){Po(e,t),Po(e+"Capture",t)}function Po(e,t){for(tp[e]=t,e=0;e<t.length;e++)ep.add(t[e])}var Py=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rp={},np={};function Hy(e){return xt.call(np,e)?!0:xt.call(rp,e)?!1:Py.test(e)?np[e]=!0:(rp[e]=!0,!1)}function Yl(e,t,o){if(Hy(t))if(o===null)e.removeAttribute(t);else{switch(typeof o){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+o)}}function Vl(e,t,o){if(o===null)e.removeAttribute(t);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+o)}}function $r(e,t,o,a){if(a===null)e.removeAttribute(o);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(o);return}e.setAttributeNS(t,o,""+a)}}var qd,op;function Ho(e){if(qd===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);qd=t&&t[1]||"",op=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qd+e+op}var Fd=!1;function Qd(e,t){if(!e||Fd)return"";Fd=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var re=function(){throw Error()};if(Object.defineProperty(re.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(re,[])}catch(G){var Q=G}Reflect.construct(e,[],re)}else{try{re.call()}catch(G){Q=G}e.call(re.prototype)}}else{try{throw Error()}catch(G){Q=G}(re=e())&&typeof re.catch=="function"&&re.catch(function(){})}}catch(G){if(G&&Q&&typeof G.stack=="string")return[G.stack,Q.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=a.DetermineComponentFrameRoot(),y=f[0],k=f[1];if(y&&k){var O=y.split(`
`),F=k.split(`
`);for(c=a=0;a<O.length&&!O[a].includes("DetermineComponentFrameRoot");)a++;for(;c<F.length&&!F[c].includes("DetermineComponentFrameRoot");)c++;if(a===O.length||c===F.length)for(a=O.length-1,c=F.length-1;1<=a&&0<=c&&O[a]!==F[c];)c--;for(;1<=a&&0<=c;a--,c--)if(O[a]!==F[c]){if(a!==1||c!==1)do if(a--,c--,0>c||O[a]!==F[c]){var Z=`
`+O[a].replace(" at new "," at ");return e.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",e.displayName)),Z}while(1<=a&&0<=c);break}}}finally{Fd=!1,Error.prepareStackTrace=o}return(o=e?e.displayName||e.name:"")?Ho(o):""}function qy(e){switch(e.tag){case 26:case 27:case 5:return Ho(e.type);case 16:return Ho("Lazy");case 13:return Ho("Suspense");case 19:return Ho("SuspenseList");case 0:case 15:return Qd(e.type,!1);case 11:return Qd(e.type.render,!1);case 1:return Qd(e.type,!0);case 31:return Ho("Activity");default:return""}}function ap(e){try{var t="";do t+=qy(e),e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Wt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ip(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fy(e){var t=ip(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gl(e){e._valueTracker||(e._valueTracker=Fy(e))}function lp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var o=t.getValue(),a="";return e&&(a=ip(e)?e.checked?"true":"false":e.value),e=a,e!==o?(t.setValue(e),!0):!1}function Il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qy=/[\n"\\]/g;function er(e){return e.replace(Qy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Yd(e,t,o,a,c,f,y,k){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),t!=null?y==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Wt(t)):e.value!==""+Wt(t)&&(e.value=""+Wt(t)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),t!=null?Vd(e,y,Wt(t)):o!=null?Vd(e,y,Wt(o)):a!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?e.name=""+Wt(k):e.removeAttribute("name")}function sp(e,t,o,a,c,f,y,k){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||o!=null){if(!(f!=="submit"&&f!=="reset"||t!=null))return;o=o!=null?""+Wt(o):"",t=t!=null?""+Wt(t):o,k||t===e.value||(e.value=t),e.defaultValue=t}a=a??c,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=k?e.checked:!!a,e.defaultChecked=!!a,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function Vd(e,t,o){t==="number"&&Il(e.ownerDocument)===e||e.defaultValue===""+o||(e.defaultValue=""+o)}function qo(e,t,o,a){if(e=e.options,t){t={};for(var c=0;c<o.length;c++)t["$"+o[c]]=!0;for(o=0;o<e.length;o++)c=t.hasOwnProperty("$"+e[o].value),e[o].selected!==c&&(e[o].selected=c),c&&a&&(e[o].defaultSelected=!0)}else{for(o=""+Wt(o),t=null,c=0;c<e.length;c++){if(e[c].value===o){e[c].selected=!0,a&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function cp(e,t,o){if(t!=null&&(t=""+Wt(t),t!==e.value&&(e.value=t),o==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=o!=null?""+Wt(o):""}function dp(e,t,o,a){if(t==null){if(a!=null){if(o!=null)throw Error(l(92));if(de(a)){if(1<a.length)throw Error(l(93));a=a[0]}o=a}o==null&&(o=""),t=o}o=Wt(t),e.defaultValue=o,a=e.textContent,a===o&&a!==""&&a!==null&&(e.value=a)}function Fo(e,t){if(t){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=t;return}}e.textContent=t}var Yy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function up(e,t,o){var a=t.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,o):typeof o!="number"||o===0||Yy.has(t)?t==="float"?e.cssFloat=o:e[t]=(""+o).trim():e[t]=o+"px"}function fp(e,t,o){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,o!=null){for(var a in o)!o.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var c in t)a=t[c],t.hasOwnProperty(c)&&o[c]!==a&&up(e,c,a)}else for(var f in t)t.hasOwnProperty(f)&&up(e,f,t[f])}function Gd(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xl(e){return Gy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Id=null;function Xd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qo=null,Yo=null;function hp(e){var t=Ko(e);if(t&&(e=t.stateNode)){var o=e[Nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Yd(e,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),t=o.name,o.type==="radio"&&t!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+er(""+t)+'"][type="radio"]'),t=0;t<o.length;t++){var a=o[t];if(a!==e&&a.form===e.form){var c=a[Nt]||null;if(!c)throw Error(l(90));Yd(a,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<o.length;t++)a=o[t],a.form===e.form&&lp(a)}break e;case"textarea":cp(e,o.value,o.defaultValue);break e;case"select":t=o.value,t!=null&&qo(e,!!o.multiple,t,!1)}}}var Zd=!1;function mp(e,t,o){if(Zd)return e(t,o);Zd=!0;try{var a=e(t);return a}finally{if(Zd=!1,(Qo!==null||Yo!==null)&&(zs(),Qo&&(t=Qo,e=Yo,Yo=Qo=null,hp(t),e)))for(t=0;t<e.length;t++)hp(e[t])}}function oi(e,t){var o=e.stateNode;if(o===null)return null;var a=o[Nt]||null;if(a===null)return null;o=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(l(231,t,typeof o));return o}var Br=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jd=!1;if(Br)try{var ai={};Object.defineProperty(ai,"passive",{get:function(){Jd=!0}}),window.addEventListener("test",ai,ai),window.removeEventListener("test",ai,ai)}catch{Jd=!1}var hn=null,Wd=null,Zl=null;function pp(){if(Zl)return Zl;var e,t=Wd,o=t.length,a,c="value"in hn?hn.value:hn.textContent,f=c.length;for(e=0;e<o&&t[e]===c[e];e++);var y=o-e;for(a=1;a<=y&&t[o-a]===c[f-a];a++);return Zl=c.slice(e,1<a?1-a:void 0)}function Jl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wl(){return!0}function gp(){return!1}function Mt(e){function t(o,a,c,f,y){this._reactName=o,this._targetInst=c,this.type=a,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var k in e)e.hasOwnProperty(k)&&(o=e[k],this[k]=o?o(f):f[k]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wl:gp,this.isPropagationStopped=gp,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),t}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},es=Mt(Jn),ii=v({},Jn,{view:0,detail:0}),Iy=Mt(ii),eu,tu,li,ts=v({},ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==li&&(li&&e.type==="mousemove"?(eu=e.screenX-li.screenX,tu=e.screenY-li.screenY):tu=eu=0,li=e),eu)},movementY:function(e){return"movementY"in e?e.movementY:tu}}),bp=Mt(ts),Xy=v({},ts,{dataTransfer:0}),Zy=Mt(Xy),Jy=v({},ii,{relatedTarget:0}),ru=Mt(Jy),Wy=v({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),e5=Mt(Wy),t5=v({},Jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),r5=Mt(t5),n5=v({},Jn,{data:0}),xp=Mt(n5),o5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l5(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=i5[e])?!!t[e]:!1}function nu(){return l5}var s5=v({},ii,{key:function(e){if(e.key){var t=o5[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?a5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(e){return e.type==="keypress"?Jl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),c5=Mt(s5),d5=v({},ts,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vp=Mt(d5),u5=v({},ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),f5=Mt(u5),h5=v({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),m5=Mt(h5),p5=v({},ts,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),g5=Mt(p5),b5=v({},Jn,{newState:0,oldState:0}),x5=Mt(b5),v5=[9,13,27,32],ou=Br&&"CompositionEvent"in window,si=null;Br&&"documentMode"in document&&(si=document.documentMode);var y5=Br&&"TextEvent"in window&&!si,yp=Br&&(!ou||si&&8<si&&11>=si),jp=" ",wp=!1;function Sp(e,t){switch(e){case"keyup":return v5.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ap(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vo=!1;function j5(e,t){switch(e){case"compositionend":return Ap(t);case"keypress":return t.which!==32?null:(wp=!0,jp);case"textInput":return e=t.data,e===jp&&wp?null:e;default:return null}}function w5(e,t){if(Vo)return e==="compositionend"||!ou&&Sp(e,t)?(e=pp(),Zl=Wd=hn=null,Vo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yp&&t.locale!=="ko"?null:t.data;default:return null}}var S5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!S5[e.type]:t==="textarea"}function Cp(e,t,o,a){Qo?Yo?Yo.push(a):Yo=[a]:Qo=a,t=Ps(t,"onChange"),0<t.length&&(o=new es("onChange","change",null,o,a),e.push({event:o,listeners:t}))}var ci=null,di=null;function A5(e){i0(e,0)}function rs(e){var t=ni(e);if(lp(t))return e}function Ep(e,t){if(e==="change")return t}var Tp=!1;if(Br){var au;if(Br){var iu="oninput"in document;if(!iu){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),iu=typeof Np.oninput=="function"}au=iu}else au=!1;Tp=au&&(!document.documentMode||9<document.documentMode)}function Mp(){ci&&(ci.detachEvent("onpropertychange",_p),di=ci=null)}function _p(e){if(e.propertyName==="value"&&rs(di)){var t=[];Cp(t,di,e,Xd(e)),mp(A5,t)}}function k5(e,t,o){e==="focusin"?(Mp(),ci=t,di=o,ci.attachEvent("onpropertychange",_p)):e==="focusout"&&Mp()}function C5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rs(di)}function E5(e,t){if(e==="click")return rs(t)}function T5(e,t){if(e==="input"||e==="change")return rs(t)}function N5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pt=typeof Object.is=="function"?Object.is:N5;function ui(e,t){if(Pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var c=o[a];if(!xt.call(t,c)||!Pt(e[c],t[c]))return!1}return!0}function Rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dp(e,t){var o=Rp(e);e=0;for(var a;o;){if(o.nodeType===3){if(a=e+o.textContent.length,e<=t&&a>=t)return{node:o,offset:t-e};e=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Rp(o)}}function Op(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Op(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Il(e.document);t instanceof e.HTMLIFrameElement;){try{var o=typeof t.contentWindow.location.href=="string"}catch{o=!1}if(o)e=t.contentWindow;else break;t=Il(e.document)}return t}function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var M5=Br&&"documentMode"in document&&11>=document.documentMode,Go=null,su=null,fi=null,cu=!1;function $p(e,t,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;cu||Go==null||Go!==Il(a)||(a=Go,"selectionStart"in a&&lu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),fi&&ui(fi,a)||(fi=a,a=Ps(su,"onSelect"),0<a.length&&(t=new es("onSelect","select",null,t,o),e.push({event:t,listeners:a}),t.target=Go)))}function Wn(e,t){var o={};return o[e.toLowerCase()]=t.toLowerCase(),o["Webkit"+e]="webkit"+t,o["Moz"+e]="moz"+t,o}var Io={animationend:Wn("Animation","AnimationEnd"),animationiteration:Wn("Animation","AnimationIteration"),animationstart:Wn("Animation","AnimationStart"),transitionrun:Wn("Transition","TransitionRun"),transitionstart:Wn("Transition","TransitionStart"),transitioncancel:Wn("Transition","TransitionCancel"),transitionend:Wn("Transition","TransitionEnd")},du={},Bp={};Br&&(Bp=document.createElement("div").style,"AnimationEvent"in window||(delete Io.animationend.animation,delete Io.animationiteration.animation,delete Io.animationstart.animation),"TransitionEvent"in window||delete Io.transitionend.transition);function eo(e){if(du[e])return du[e];if(!Io[e])return e;var t=Io[e],o;for(o in t)if(t.hasOwnProperty(o)&&o in Bp)return du[e]=t[o];return e}var Up=eo("animationend"),Kp=eo("animationiteration"),Lp=eo("animationstart"),_5=eo("transitionrun"),R5=eo("transitionstart"),D5=eo("transitioncancel"),Pp=eo("transitionend"),Hp=new Map,uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");uu.push("scrollEnd");function hr(e,t){Hp.set(e,t),Zn(t,[e])}var qp=new WeakMap;function tr(e,t){if(typeof e=="object"&&e!==null){var o=qp.get(e);return o!==void 0?o:(t={value:e,source:t,stack:ap(t)},qp.set(e,t),t)}return{value:e,source:t,stack:ap(t)}}var rr=[],Xo=0,fu=0;function ns(){for(var e=Xo,t=fu=Xo=0;t<e;){var o=rr[t];rr[t++]=null;var a=rr[t];rr[t++]=null;var c=rr[t];rr[t++]=null;var f=rr[t];if(rr[t++]=null,a!==null&&c!==null){var y=a.pending;y===null?c.next=c:(c.next=y.next,y.next=c),a.pending=c}f!==0&&Fp(o,c,f)}}function os(e,t,o,a){rr[Xo++]=e,rr[Xo++]=t,rr[Xo++]=o,rr[Xo++]=a,fu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function hu(e,t,o,a){return os(e,t,o,a),as(e)}function Zo(e,t){return os(e,null,null,t),as(e)}function Fp(e,t,o){e.lanes|=o;var a=e.alternate;a!==null&&(a.lanes|=o);for(var c=!1,f=e.return;f!==null;)f.childLanes|=o,a=f.alternate,a!==null&&(a.childLanes|=o),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&t!==null&&(c=31-Lt(o),e=f.hiddenUpdates,a=e[c],a===null?e[c]=[t]:a.push(t),t.lane=o|536870912),f):null}function as(e){if(50<Bi)throw Bi=0,yf=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Jo={};function O5(e,t,o,a){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,o,a){return new O5(e,t,o,a)}function mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ur(e,t){var o=e.alternate;return o===null?(o=Ht(e.tag,t,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=t,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&65011712,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,t=e.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o.refCleanup=e.refCleanup,o}function Qp(e,t){e.flags&=65011714;var o=e.alternate;return o===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=o.childLanes,e.lanes=o.lanes,e.child=o.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=o.memoizedProps,e.memoizedState=o.memoizedState,e.updateQueue=o.updateQueue,e.type=o.type,t=o.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function is(e,t,o,a,c,f){var y=0;if(a=e,typeof e=="function")mu(e)&&(y=1);else if(typeof e=="string")y=$2(e,o,he.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case q:return e=Ht(31,o,t,c),e.elementType=q,e.lanes=f,e;case w:return to(o.children,c,f,t);case N:y=8,c|=24;break;case E:return e=Ht(12,o,t,c|2),e.elementType=E,e.lanes=f,e;case R:return e=Ht(13,o,t,c),e.elementType=R,e.lanes=f,e;case $:return e=Ht(19,o,t,c),e.elementType=$,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:case T:y=10;break e;case M:y=9;break e;case _:y=11;break e;case L:y=14;break e;case B:y=16,a=null;break e}y=29,o=Error(l(130,e===null?"null":typeof e,"")),a=null}return t=Ht(y,o,t,c),t.elementType=e,t.type=a,t.lanes=f,t}function to(e,t,o,a){return e=Ht(7,e,a,t),e.lanes=o,e}function pu(e,t,o){return e=Ht(6,e,null,t),e.lanes=o,e}function gu(e,t,o){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=o,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wo=[],ea=0,ls=null,ss=0,nr=[],or=0,ro=null,Kr=1,Lr="";function no(e,t){Wo[ea++]=ss,Wo[ea++]=ls,ls=e,ss=t}function Yp(e,t,o){nr[or++]=Kr,nr[or++]=Lr,nr[or++]=ro,ro=e;var a=Kr;e=Lr;var c=32-Lt(a)-1;a&=~(1<<c),o+=1;var f=32-Lt(t)+c;if(30<f){var y=c-c%5;f=(a&(1<<y)-1).toString(32),a>>=y,c-=y,Kr=1<<32-Lt(t)+c|o<<c|a,Lr=f+e}else Kr=1<<f|o<<c|a,Lr=e}function bu(e){e.return!==null&&(no(e,1),Yp(e,1,0))}function xu(e){for(;e===ls;)ls=Wo[--ea],Wo[ea]=null,ss=Wo[--ea],Wo[ea]=null;for(;e===ro;)ro=nr[--or],nr[or]=null,Lr=nr[--or],nr[or]=null,Kr=nr[--or],nr[or]=null}var kt=null,Qe=null,_e=!1,oo=null,kr=!1,vu=Error(l(519));function ao(e){var t=Error(l(418,""));throw pi(tr(t,e)),vu}function Vp(e){var t=e.stateNode,o=e.type,a=e.memoizedProps;switch(t[vt]=e,t[Nt]=a,o){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(o=0;o<Ki.length;o++)Ce(Ki[o],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),sp(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Gl(t);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),dp(t,a.value,a.defaultValue,a.children),Gl(t)}o=a.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||t.textContent===""+o||a.suppressHydrationWarning===!0||d0(t.textContent,o)?(a.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),a.onScroll!=null&&Ce("scroll",t),a.onScrollEnd!=null&&Ce("scrollend",t),a.onClick!=null&&(t.onclick=Hs),t=!0):t=!1,t||ao(e)}function Gp(e){for(kt=e.return;kt;)switch(kt.tag){case 5:case 13:kr=!1;return;case 27:case 3:kr=!0;return;default:kt=kt.return}}function hi(e){if(e!==kt)return!1;if(!_e)return Gp(e),_e=!0,!1;var t=e.tag,o;if((o=t!==3&&t!==27)&&((o=t===5)&&(o=e.type,o=!(o!=="form"&&o!=="button")||$f(e.type,e.memoizedProps)),o=!o),o&&Qe&&ao(e),Gp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(o=e.data,o==="/$"){if(t===0){Qe=pr(e.nextSibling);break e}t--}else o!=="$"&&o!=="$!"&&o!=="$?"||t++;e=e.nextSibling}Qe=null}}else t===27?(t=Qe,Nn(e.type)?(e=Lf,Lf=null,Qe=e):Qe=t):Qe=kt?pr(e.stateNode.nextSibling):null;return!0}function mi(){Qe=kt=null,_e=!1}function Ip(){var e=oo;return e!==null&&(Dt===null?Dt=e:Dt.push.apply(Dt,e),oo=null),e}function pi(e){oo===null?oo=[e]:oo.push(e)}var yu=W(null),io=null,Pr=null;function mn(e,t,o){ie(yu,t._currentValue),t._currentValue=o}function Hr(e){e._currentValue=yu.current,ae(yu)}function ju(e,t,o){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===o)break;e=e.return}}function wu(e,t,o,a){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;e:for(;f!==null;){var k=f;f=c;for(var O=0;O<t.length;O++)if(k.context===t[O]){f.lanes|=o,k=f.alternate,k!==null&&(k.lanes|=o),ju(f.return,o,e),a||(y=null);break e}f=k.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(l(341));y.lanes|=o,f=y.alternate,f!==null&&(f.lanes|=o),ju(y,o,e),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function gi(e,t,o,a){e=null;for(var c=t,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(l(387));if(y=y.memoizedProps,y!==null){var k=c.type;Pt(c.pendingProps.value,y.value)||(e!==null?e.push(k):e=[k])}}else if(c===Se.current){if(y=c.alternate,y===null)throw Error(l(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Qi):e=[Qi])}c=c.return}e!==null&&wu(t,e,o,a),t.flags|=262144}function cs(e){for(e=e.firstContext;e!==null;){if(!Pt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lo(e){io=e,Pr=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yt(e){return Xp(io,e)}function ds(e,t){return io===null&&lo(e),Xp(e,t)}function Xp(e,t){var o=t._currentValue;if(t={context:t,memoizedValue:o,next:null},Pr===null){if(e===null)throw Error(l(308));Pr=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Pr=Pr.next=t;return o}var z5=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(o,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(o){return o()})}},$5=n.unstable_scheduleCallback,B5=n.unstable_NormalPriority,rt={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Su(){return{controller:new z5,data:new Map,refCount:0}}function bi(e){e.refCount--,e.refCount===0&&$5(B5,function(){e.controller.abort()})}var xi=null,Au=0,ta=0,ra=null;function U5(e,t){if(xi===null){var o=xi=[];Au=0,ta=Ef(),ra={status:"pending",value:void 0,then:function(a){o.push(a)}}}return Au++,t.then(Zp,Zp),t}function Zp(){if(--Au===0&&xi!==null){ra!==null&&(ra.status="fulfilled");var e=xi;xi=null,ta=0,ra=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function K5(e,t){var o=[],a={status:"pending",value:null,reason:null,then:function(c){o.push(c)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var c=0;c<o.length;c++)(0,o[c])(t)},function(c){for(a.status="rejected",a.reason=c,c=0;c<o.length;c++)(0,o[c])(void 0)}),a}var Jp=V.S;V.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&U5(e,t),Jp!==null&&Jp(e,t)};var so=W(null);function ku(){var e=so.current;return e!==null?e:Ke.pooledCache}function us(e,t){t===null?ie(so,so.current):ie(so,t.pool)}function Wp(){var e=ku();return e===null?null:{parent:rt._currentValue,pool:e}}var vi=Error(l(460)),eg=Error(l(474)),fs=Error(l(542)),Cu={then:function(){}};function tg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hs(){}function rg(e,t,o){switch(o=e[o],o===void 0?e.push(t):o!==t&&(t.then(hs,hs),t=o),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,og(e),e;default:if(typeof t.status=="string")t.then(hs,hs);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=a}},function(a){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,og(e),e}throw yi=t,vi}}var yi=null;function ng(){if(yi===null)throw Error(l(459));var e=yi;return yi=null,e}function og(e){if(e===vi||e===fs)throw Error(l(483))}var pn=!1;function Eu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function gn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function bn(e,t,o){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(De&2)!==0){var c=a.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),a.pending=t,t=as(e),Fp(e,null,o),t}return os(e,a,t,o),as(e)}function ji(e,t,o){if(t=t.updateQueue,t!==null&&(t=t.shared,(o&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,o|=a,t.lanes=o,Zm(e,o)}}function Nu(e,t){var o=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var c=null,f=null;if(o=o.firstBaseUpdate,o!==null){do{var y={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,o=o.next}while(o!==null);f===null?c=f=t:f=f.next=t}else c=f=t;o={baseState:a.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:a.shared,callbacks:a.callbacks},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=t:e.next=t,o.lastBaseUpdate=t}var Mu=!1;function wi(){if(Mu){var e=ra;if(e!==null)throw e}}function Si(e,t,o,a){Mu=!1;var c=e.updateQueue;pn=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,k=c.shared.pending;if(k!==null){c.shared.pending=null;var O=k,F=O.next;O.next=null,y===null?f=F:y.next=F,y=O;var Z=e.alternate;Z!==null&&(Z=Z.updateQueue,k=Z.lastBaseUpdate,k!==y&&(k===null?Z.firstBaseUpdate=F:k.next=F,Z.lastBaseUpdate=O))}if(f!==null){var re=c.baseState;y=0,Z=F=O=null,k=f;do{var Q=k.lane&-536870913,G=Q!==k.lane;if(G?(Ee&Q)===Q:(a&Q)===Q){Q!==0&&Q===ta&&(Mu=!0),Z!==null&&(Z=Z.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var be=e,pe=k;Q=t;var Be=o;switch(pe.tag){case 1:if(be=pe.payload,typeof be=="function"){re=be.call(Be,re,Q);break e}re=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=pe.payload,Q=typeof be=="function"?be.call(Be,re,Q):be,Q==null)break e;re=v({},re,Q);break e;case 2:pn=!0}}Q=k.callback,Q!==null&&(e.flags|=64,G&&(e.flags|=8192),G=c.callbacks,G===null?c.callbacks=[Q]:G.push(Q))}else G={lane:Q,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Z===null?(F=Z=G,O=re):Z=Z.next=G,y|=Q;if(k=k.next,k===null){if(k=c.shared.pending,k===null)break;G=k,k=G.next,G.next=null,c.lastBaseUpdate=G,c.shared.pending=null}}while(!0);Z===null&&(O=re),c.baseState=O,c.firstBaseUpdate=F,c.lastBaseUpdate=Z,f===null&&(c.shared.lanes=0),kn|=y,e.lanes=y,e.memoizedState=re}}function ag(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function ig(e,t){var o=e.callbacks;if(o!==null)for(e.callbacks=null,e=0;e<o.length;e++)ag(o[e],t)}var na=W(null),ms=W(0);function lg(e,t){e=Ir,ie(ms,e),ie(na,t),Ir=e|t.baseLanes}function _u(){ie(ms,Ir),ie(na,na.current)}function Ru(){Ir=ms.current,ae(na),ae(ms)}var xn=0,we=null,ze=null,Xe=null,ps=!1,oa=!1,co=!1,gs=0,Ai=0,aa=null,L5=0;function Ve(){throw Error(l(321))}function Du(e,t){if(t===null)return!1;for(var o=0;o<t.length&&o<e.length;o++)if(!Pt(e[o],t[o]))return!1;return!0}function Ou(e,t,o,a,c,f){return xn=f,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,V.H=e===null||e.memoizedState===null?Fg:Qg,co=!1,f=o(a,c),co=!1,oa&&(f=cg(t,o,a,c)),sg(e),f}function sg(e){V.H=ws;var t=ze!==null&&ze.next!==null;if(xn=0,Xe=ze=we=null,ps=!1,Ai=0,aa=null,t)throw Error(l(300));e===null||lt||(e=e.dependencies,e!==null&&cs(e)&&(lt=!0))}function cg(e,t,o,a){we=e;var c=0;do{if(oa&&(aa=null),Ai=0,oa=!1,25<=c)throw Error(l(301));if(c+=1,Xe=ze=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}V.H=V5,f=t(o,a)}while(oa);return f}function P5(){var e=V.H,t=e.useState()[0];return t=typeof t.then=="function"?ki(t):t,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(we.flags|=1024),t}function zu(){var e=gs!==0;return gs=0,e}function $u(e,t,o){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o}function Bu(e){if(ps){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ps=!1}xn=0,Xe=ze=we=null,oa=!1,Ai=gs=0,aa=null}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?we.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ze(){if(ze===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=Xe===null?we.memoizedState:Xe.next;if(t!==null)Xe=t,ze=e;else{if(e===null)throw we.alternate===null?Error(l(467)):Error(l(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},Xe===null?we.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Uu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ki(e){var t=Ai;return Ai+=1,aa===null&&(aa=[]),e=rg(aa,e,t),t=we,(Xe===null?t.memoizedState:Xe.next)===null&&(t=t.alternate,V.H=t===null||t.memoizedState===null?Fg:Qg),e}function bs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ki(e);if(e.$$typeof===T)return yt(e)}throw Error(l(438,String(e)))}function Ku(e){var t=null,o=we.updateQueue;if(o!==null&&(t=o.memoCache),t==null){var a=we.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),o===null&&(o=Uu(),we.updateQueue=o),o.memoCache=t,o=t.data[t.index],o===void 0)for(o=t.data[t.index]=Array(e),a=0;a<e;a++)o[a]=ne;return t.index++,o}function qr(e,t){return typeof t=="function"?t(e):t}function xs(e){var t=Ze();return Lu(t,ze,e)}function Lu(e,t,o){var a=e.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=o;var c=e.baseQueue,f=a.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}t.baseQueue=c=f,a.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{t=c.next;var k=y=null,O=null,F=t,Z=!1;do{var re=F.lane&-536870913;if(re!==F.lane?(Ee&re)===re:(xn&re)===re){var Q=F.revertLane;if(Q===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),re===ta&&(Z=!0);else if((xn&Q)===Q){F=F.next,Q===ta&&(Z=!0);continue}else re={lane:0,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},O===null?(k=O=re,y=f):O=O.next=re,we.lanes|=Q,kn|=Q;re=F.action,co&&o(f,re),f=F.hasEagerState?F.eagerState:o(f,re)}else Q={lane:re,revertLane:F.revertLane,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null},O===null?(k=O=Q,y=f):O=O.next=Q,we.lanes|=re,kn|=re;F=F.next}while(F!==null&&F!==t);if(O===null?y=f:O.next=k,!Pt(f,e.memoizedState)&&(lt=!0,Z&&(o=ra,o!==null)))throw o;e.memoizedState=f,e.baseState=y,e.baseQueue=O,a.lastRenderedState=f}return c===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Pu(e){var t=Ze(),o=t.queue;if(o===null)throw Error(l(311));o.lastRenderedReducer=e;var a=o.dispatch,c=o.pending,f=t.memoizedState;if(c!==null){o.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);Pt(f,t.memoizedState)||(lt=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),o.lastRenderedState=f}return[f,a]}function dg(e,t,o){var a=we,c=Ze(),f=_e;if(f){if(o===void 0)throw Error(l(407));o=o()}else o=t();var y=!Pt((ze||c).memoizedState,o);y&&(c.memoizedState=o,lt=!0),c=c.queue;var k=hg.bind(null,a,c,e);if(Ci(2048,8,k,[e]),c.getSnapshot!==t||y||Xe!==null&&Xe.memoizedState.tag&1){if(a.flags|=2048,ia(9,vs(),fg.bind(null,a,c,o,t),null),Ke===null)throw Error(l(349));f||(xn&124)!==0||ug(a,t,o)}return o}function ug(e,t,o){e.flags|=16384,e={getSnapshot:t,value:o},t=we.updateQueue,t===null?(t=Uu(),we.updateQueue=t,t.stores=[e]):(o=t.stores,o===null?t.stores=[e]:o.push(e))}function fg(e,t,o,a){t.value=o,t.getSnapshot=a,mg(t)&&pg(e)}function hg(e,t,o){return o(function(){mg(t)&&pg(e)})}function mg(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!Pt(e,o)}catch{return!0}}function pg(e){var t=Zo(e,2);t!==null&&Vt(t,e,2)}function Hu(e){var t=_t();if(typeof e=="function"){var o=e;if(e=o(),co){un(!0);try{o()}finally{un(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:e},t}function gg(e,t,o,a){return e.baseState=o,Lu(e,ze,typeof a=="function"?a:qr)}function H5(e,t,o,a,c){if(js(e))throw Error(l(485));if(e=t.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};V.T!==null?o(!0):f.isTransition=!1,a(f),o=t.pending,o===null?(f.next=t.pending=f,bg(t,f)):(f.next=o.next,t.pending=o.next=f)}}function bg(e,t){var o=t.action,a=t.payload,c=e.state;if(t.isTransition){var f=V.T,y={};V.T=y;try{var k=o(c,a),O=V.S;O!==null&&O(y,k),xg(e,t,k)}catch(F){qu(e,t,F)}finally{V.T=f}}else try{f=o(c,a),xg(e,t,f)}catch(F){qu(e,t,F)}}function xg(e,t,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(a){vg(e,t,a)},function(a){return qu(e,t,a)}):vg(e,t,o)}function vg(e,t,o){t.status="fulfilled",t.value=o,yg(t),e.state=o,t=e.pending,t!==null&&(o=t.next,o===t?e.pending=null:(o=o.next,t.next=o,bg(e,o)))}function qu(e,t,o){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=o,yg(t),t=t.next;while(t!==a)}e.action=null}function yg(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function jg(e,t){return t}function wg(e,t){if(_e){var o=Ke.formState;if(o!==null){e:{var a=we;if(_e){if(Qe){t:{for(var c=Qe,f=kr;c.nodeType!==8;){if(!f){c=null;break t}if(c=pr(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Qe=pr(c.nextSibling),a=c.data==="F!";break e}}ao(a)}a=!1}a&&(t=o[0])}}return o=_t(),o.memoizedState=o.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jg,lastRenderedState:t},o.queue=a,o=Pg.bind(null,we,a),a.dispatch=o,a=Hu(!1),f=Gu.bind(null,we,!1,a.queue),a=_t(),c={state:t,dispatch:null,action:e,pending:null},a.queue=c,o=H5.bind(null,we,c,f,o),c.dispatch=o,a.memoizedState=e,[t,o,!1]}function Sg(e){var t=Ze();return Ag(t,ze,e)}function Ag(e,t,o){if(t=Lu(e,t,jg)[0],e=xs(qr)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=ki(t)}catch(y){throw y===vi?fs:y}else a=t;t=Ze();var c=t.queue,f=c.dispatch;return o!==t.memoizedState&&(we.flags|=2048,ia(9,vs(),q5.bind(null,c,o),null)),[a,f,e]}function q5(e,t){e.action=t}function kg(e){var t=Ze(),o=ze;if(o!==null)return Ag(t,o,e);Ze(),t=t.memoizedState,o=Ze();var a=o.queue.dispatch;return o.memoizedState=e,[t,a,!1]}function ia(e,t,o,a){return e={tag:e,create:o,deps:a,inst:t,next:null},t=we.updateQueue,t===null&&(t=Uu(),we.updateQueue=t),o=t.lastEffect,o===null?t.lastEffect=e.next=e:(a=o.next,o.next=e,e.next=a,t.lastEffect=e),e}function vs(){return{destroy:void 0,resource:void 0}}function Cg(){return Ze().memoizedState}function ys(e,t,o,a){var c=_t();a=a===void 0?null:a,we.flags|=e,c.memoizedState=ia(1|t,vs(),o,a)}function Ci(e,t,o,a){var c=Ze();a=a===void 0?null:a;var f=c.memoizedState.inst;ze!==null&&a!==null&&Du(a,ze.memoizedState.deps)?c.memoizedState=ia(t,f,o,a):(we.flags|=e,c.memoizedState=ia(1|t,f,o,a))}function Eg(e,t){ys(8390656,8,e,t)}function Tg(e,t){Ci(2048,8,e,t)}function Ng(e,t){return Ci(4,2,e,t)}function Mg(e,t){return Ci(4,4,e,t)}function _g(e,t){if(typeof t=="function"){e=e();var o=t(e);return function(){typeof o=="function"?o():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rg(e,t,o){o=o!=null?o.concat([e]):null,Ci(4,4,_g.bind(null,t,e),o)}function Fu(){}function Dg(e,t){var o=Ze();t=t===void 0?null:t;var a=o.memoizedState;return t!==null&&Du(t,a[1])?a[0]:(o.memoizedState=[e,t],e)}function Og(e,t){var o=Ze();t=t===void 0?null:t;var a=o.memoizedState;if(t!==null&&Du(t,a[1]))return a[0];if(a=e(),co){un(!0);try{e()}finally{un(!1)}}return o.memoizedState=[a,t],a}function Qu(e,t,o){return o===void 0||(xn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=o,e=Bb(),we.lanes|=e,kn|=e,o)}function zg(e,t,o,a){return Pt(o,t)?o:na.current!==null?(e=Qu(e,o,a),Pt(e,t)||(lt=!0),e):(xn&42)===0?(lt=!0,e.memoizedState=o):(e=Bb(),we.lanes|=e,kn|=e,t)}function $g(e,t,o,a,c){var f=I.p;I.p=f!==0&&8>f?f:8;var y=V.T,k={};V.T=k,Gu(e,!1,t,o);try{var O=c(),F=V.S;if(F!==null&&F(k,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var Z=K5(O,a);Ei(e,t,Z,Yt(e))}else Ei(e,t,a,Yt(e))}catch(re){Ei(e,t,{then:function(){},status:"rejected",reason:re},Yt())}finally{I.p=f,V.T=y}}function F5(){}function Yu(e,t,o,a){if(e.tag!==5)throw Error(l(476));var c=Bg(e).queue;$g(e,c,t,Y,o===null?F5:function(){return Ug(e),o(a)})}function Bg(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:Y},next:null};var o={};return t.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:o},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ug(e){var t=Bg(e).next.queue;Ei(e,t,{},Yt())}function Vu(){return yt(Qi)}function Kg(){return Ze().memoizedState}function Lg(){return Ze().memoizedState}function Q5(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var o=Yt();e=gn(o);var a=bn(t,e,o);a!==null&&(Vt(a,t,o),ji(a,t,o)),t={cache:Su()},e.payload=t;return}t=t.return}}function Y5(e,t,o){var a=Yt();o={lane:a,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},js(e)?Hg(t,o):(o=hu(e,t,o,a),o!==null&&(Vt(o,e,a),qg(o,t,a)))}function Pg(e,t,o){var a=Yt();Ei(e,t,o,a)}function Ei(e,t,o,a){var c={lane:a,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(js(e))Hg(t,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var y=t.lastRenderedState,k=f(y,o);if(c.hasEagerState=!0,c.eagerState=k,Pt(k,y))return os(e,t,c,0),Ke===null&&ns(),!1}catch{}finally{}if(o=hu(e,t,c,a),o!==null)return Vt(o,e,a),qg(o,t,a),!0}return!1}function Gu(e,t,o,a){if(a={lane:2,revertLane:Ef(),action:a,hasEagerState:!1,eagerState:null,next:null},js(e)){if(t)throw Error(l(479))}else t=hu(e,o,a,2),t!==null&&Vt(t,e,2)}function js(e){var t=e.alternate;return e===we||t!==null&&t===we}function Hg(e,t){oa=ps=!0;var o=e.pending;o===null?t.next=t:(t.next=o.next,o.next=t),e.pending=t}function qg(e,t,o){if((o&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,o|=a,t.lanes=o,Zm(e,o)}}var ws={readContext:yt,use:bs,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve},Fg={readContext:yt,use:bs,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:yt,useEffect:Eg,useImperativeHandle:function(e,t,o){o=o!=null?o.concat([e]):null,ys(4194308,4,_g.bind(null,t,e),o)},useLayoutEffect:function(e,t){return ys(4194308,4,e,t)},useInsertionEffect:function(e,t){ys(4,2,e,t)},useMemo:function(e,t){var o=_t();t=t===void 0?null:t;var a=e();if(co){un(!0);try{e()}finally{un(!1)}}return o.memoizedState=[a,t],a},useReducer:function(e,t,o){var a=_t();if(o!==void 0){var c=o(t);if(co){un(!0);try{o(t)}finally{un(!1)}}}else c=t;return a.memoizedState=a.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},a.queue=e,e=e.dispatch=Y5.bind(null,we,e),[a.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:function(e){e=Hu(e);var t=e.queue,o=Pg.bind(null,we,t);return t.dispatch=o,[e.memoizedState,o]},useDebugValue:Fu,useDeferredValue:function(e,t){var o=_t();return Qu(o,e,t)},useTransition:function(){var e=Hu(!1);return e=$g.bind(null,we,e.queue,!0,!1),_t().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,o){var a=we,c=_t();if(_e){if(o===void 0)throw Error(l(407));o=o()}else{if(o=t(),Ke===null)throw Error(l(349));(Ee&124)!==0||ug(a,t,o)}c.memoizedState=o;var f={value:o,getSnapshot:t};return c.queue=f,Eg(hg.bind(null,a,f,e),[e]),a.flags|=2048,ia(9,vs(),fg.bind(null,a,f,o,t),null),o},useId:function(){var e=_t(),t=Ke.identifierPrefix;if(_e){var o=Lr,a=Kr;o=(a&~(1<<32-Lt(a)-1)).toString(32)+o,t="«"+t+"R"+o,o=gs++,0<o&&(t+="H"+o.toString(32)),t+="»"}else o=L5++,t="«"+t+"r"+o.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Vu,useFormState:wg,useActionState:wg,useOptimistic:function(e){var t=_t();t.memoizedState=t.baseState=e;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=o,t=Gu.bind(null,we,!0,o),o.dispatch=t,[e,t]},useMemoCache:Ku,useCacheRefresh:function(){return _t().memoizedState=Q5.bind(null,we)}},Qg={readContext:yt,use:bs,useCallback:Dg,useContext:yt,useEffect:Tg,useImperativeHandle:Rg,useInsertionEffect:Ng,useLayoutEffect:Mg,useMemo:Og,useReducer:xs,useRef:Cg,useState:function(){return xs(qr)},useDebugValue:Fu,useDeferredValue:function(e,t){var o=Ze();return zg(o,ze.memoizedState,e,t)},useTransition:function(){var e=xs(qr)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:ki(e),t]},useSyncExternalStore:dg,useId:Kg,useHostTransitionStatus:Vu,useFormState:Sg,useActionState:Sg,useOptimistic:function(e,t){var o=Ze();return gg(o,ze,e,t)},useMemoCache:Ku,useCacheRefresh:Lg},V5={readContext:yt,use:bs,useCallback:Dg,useContext:yt,useEffect:Tg,useImperativeHandle:Rg,useInsertionEffect:Ng,useLayoutEffect:Mg,useMemo:Og,useReducer:Pu,useRef:Cg,useState:function(){return Pu(qr)},useDebugValue:Fu,useDeferredValue:function(e,t){var o=Ze();return ze===null?Qu(o,e,t):zg(o,ze.memoizedState,e,t)},useTransition:function(){var e=Pu(qr)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:ki(e),t]},useSyncExternalStore:dg,useId:Kg,useHostTransitionStatus:Vu,useFormState:kg,useActionState:kg,useOptimistic:function(e,t){var o=Ze();return ze!==null?gg(o,ze,e,t):(o.baseState=e,[e,o.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:Lg},la=null,Ti=0;function Ss(e){var t=Ti;return Ti+=1,la===null&&(la=[]),rg(la,e,t)}function Ni(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function As(e,t){throw t.$$typeof===x?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Yg(e){var t=e._init;return t(e._payload)}function Vg(e){function t(P,K){if(e){var H=P.deletions;H===null?(P.deletions=[K],P.flags|=16):H.push(K)}}function o(P,K){if(!e)return null;for(;K!==null;)t(P,K),K=K.sibling;return null}function a(P){for(var K=new Map;P!==null;)P.key!==null?K.set(P.key,P):K.set(P.index,P),P=P.sibling;return K}function c(P,K){return P=Ur(P,K),P.index=0,P.sibling=null,P}function f(P,K,H){return P.index=H,e?(H=P.alternate,H!==null?(H=H.index,H<K?(P.flags|=67108866,K):H):(P.flags|=67108866,K)):(P.flags|=1048576,K)}function y(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function k(P,K,H,ee){return K===null||K.tag!==6?(K=pu(H,P.mode,ee),K.return=P,K):(K=c(K,H),K.return=P,K)}function O(P,K,H,ee){var ue=H.type;return ue===w?Z(P,K,H.props.children,ee,H.key):K!==null&&(K.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===B&&Yg(ue)===K.type)?(K=c(K,H.props),Ni(K,H),K.return=P,K):(K=is(H.type,H.key,H.props,null,P.mode,ee),Ni(K,H),K.return=P,K)}function F(P,K,H,ee){return K===null||K.tag!==4||K.stateNode.containerInfo!==H.containerInfo||K.stateNode.implementation!==H.implementation?(K=gu(H,P.mode,ee),K.return=P,K):(K=c(K,H.children||[]),K.return=P,K)}function Z(P,K,H,ee,ue){return K===null||K.tag!==7?(K=to(H,P.mode,ee,ue),K.return=P,K):(K=c(K,H),K.return=P,K)}function re(P,K,H){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=pu(""+K,P.mode,H),K.return=P,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case j:return H=is(K.type,K.key,K.props,null,P.mode,H),Ni(H,K),H.return=P,H;case S:return K=gu(K,P.mode,H),K.return=P,K;case B:var ee=K._init;return K=ee(K._payload),re(P,K,H)}if(de(K)||D(K))return K=to(K,P.mode,H,null),K.return=P,K;if(typeof K.then=="function")return re(P,Ss(K),H);if(K.$$typeof===T)return re(P,ds(P,K),H);As(P,K)}return null}function Q(P,K,H,ee){var ue=K!==null?K.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return ue!==null?null:k(P,K,""+H,ee);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case j:return H.key===ue?O(P,K,H,ee):null;case S:return H.key===ue?F(P,K,H,ee):null;case B:return ue=H._init,H=ue(H._payload),Q(P,K,H,ee)}if(de(H)||D(H))return ue!==null?null:Z(P,K,H,ee,null);if(typeof H.then=="function")return Q(P,K,Ss(H),ee);if(H.$$typeof===T)return Q(P,K,ds(P,H),ee);As(P,H)}return null}function G(P,K,H,ee,ue){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return P=P.get(H)||null,k(K,P,""+ee,ue);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case j:return P=P.get(ee.key===null?H:ee.key)||null,O(K,P,ee,ue);case S:return P=P.get(ee.key===null?H:ee.key)||null,F(K,P,ee,ue);case B:var Ae=ee._init;return ee=Ae(ee._payload),G(P,K,H,ee,ue)}if(de(ee)||D(ee))return P=P.get(H)||null,Z(K,P,ee,ue,null);if(typeof ee.then=="function")return G(P,K,H,Ss(ee),ue);if(ee.$$typeof===T)return G(P,K,H,ds(K,ee),ue);As(K,ee)}return null}function be(P,K,H,ee){for(var ue=null,Ae=null,me=K,ge=K=0,ct=null;me!==null&&ge<H.length;ge++){me.index>ge?(ct=me,me=null):ct=me.sibling;var Te=Q(P,me,H[ge],ee);if(Te===null){me===null&&(me=ct);break}e&&me&&Te.alternate===null&&t(P,me),K=f(Te,K,ge),Ae===null?ue=Te:Ae.sibling=Te,Ae=Te,me=ct}if(ge===H.length)return o(P,me),_e&&no(P,ge),ue;if(me===null){for(;ge<H.length;ge++)me=re(P,H[ge],ee),me!==null&&(K=f(me,K,ge),Ae===null?ue=me:Ae.sibling=me,Ae=me);return _e&&no(P,ge),ue}for(me=a(me);ge<H.length;ge++)ct=G(me,P,ge,H[ge],ee),ct!==null&&(e&&ct.alternate!==null&&me.delete(ct.key===null?ge:ct.key),K=f(ct,K,ge),Ae===null?ue=ct:Ae.sibling=ct,Ae=ct);return e&&me.forEach(function(On){return t(P,On)}),_e&&no(P,ge),ue}function pe(P,K,H,ee){if(H==null)throw Error(l(151));for(var ue=null,Ae=null,me=K,ge=K=0,ct=null,Te=H.next();me!==null&&!Te.done;ge++,Te=H.next()){me.index>ge?(ct=me,me=null):ct=me.sibling;var On=Q(P,me,Te.value,ee);if(On===null){me===null&&(me=ct);break}e&&me&&On.alternate===null&&t(P,me),K=f(On,K,ge),Ae===null?ue=On:Ae.sibling=On,Ae=On,me=ct}if(Te.done)return o(P,me),_e&&no(P,ge),ue;if(me===null){for(;!Te.done;ge++,Te=H.next())Te=re(P,Te.value,ee),Te!==null&&(K=f(Te,K,ge),Ae===null?ue=Te:Ae.sibling=Te,Ae=Te);return _e&&no(P,ge),ue}for(me=a(me);!Te.done;ge++,Te=H.next())Te=G(me,P,ge,Te.value,ee),Te!==null&&(e&&Te.alternate!==null&&me.delete(Te.key===null?ge:Te.key),K=f(Te,K,ge),Ae===null?ue=Te:Ae.sibling=Te,Ae=Te);return e&&me.forEach(function(G2){return t(P,G2)}),_e&&no(P,ge),ue}function Be(P,K,H,ee){if(typeof H=="object"&&H!==null&&H.type===w&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case j:e:{for(var ue=H.key;K!==null;){if(K.key===ue){if(ue=H.type,ue===w){if(K.tag===7){o(P,K.sibling),ee=c(K,H.props.children),ee.return=P,P=ee;break e}}else if(K.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===B&&Yg(ue)===K.type){o(P,K.sibling),ee=c(K,H.props),Ni(ee,H),ee.return=P,P=ee;break e}o(P,K);break}else t(P,K);K=K.sibling}H.type===w?(ee=to(H.props.children,P.mode,ee,H.key),ee.return=P,P=ee):(ee=is(H.type,H.key,H.props,null,P.mode,ee),Ni(ee,H),ee.return=P,P=ee)}return y(P);case S:e:{for(ue=H.key;K!==null;){if(K.key===ue)if(K.tag===4&&K.stateNode.containerInfo===H.containerInfo&&K.stateNode.implementation===H.implementation){o(P,K.sibling),ee=c(K,H.children||[]),ee.return=P,P=ee;break e}else{o(P,K);break}else t(P,K);K=K.sibling}ee=gu(H,P.mode,ee),ee.return=P,P=ee}return y(P);case B:return ue=H._init,H=ue(H._payload),Be(P,K,H,ee)}if(de(H))return be(P,K,H,ee);if(D(H)){if(ue=D(H),typeof ue!="function")throw Error(l(150));return H=ue.call(H),pe(P,K,H,ee)}if(typeof H.then=="function")return Be(P,K,Ss(H),ee);if(H.$$typeof===T)return Be(P,K,ds(P,H),ee);As(P,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,K!==null&&K.tag===6?(o(P,K.sibling),ee=c(K,H),ee.return=P,P=ee):(o(P,K),ee=pu(H,P.mode,ee),ee.return=P,P=ee),y(P)):o(P,K)}return function(P,K,H,ee){try{Ti=0;var ue=Be(P,K,H,ee);return la=null,ue}catch(me){if(me===vi||me===fs)throw me;var Ae=Ht(29,me,null,P.mode);return Ae.lanes=ee,Ae.return=P,Ae}finally{}}}var sa=Vg(!0),Gg=Vg(!1),ar=W(null),Cr=null;function vn(e){var t=e.alternate;ie(nt,nt.current&1),ie(ar,e),Cr===null&&(t===null||na.current!==null||t.memoizedState!==null)&&(Cr=e)}function Ig(e){if(e.tag===22){if(ie(nt,nt.current),ie(ar,e),Cr===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Cr=e)}}else yn()}function yn(){ie(nt,nt.current),ie(ar,ar.current)}function Fr(e){ae(ar),Cr===e&&(Cr=null),ae(nt)}var nt=W(0);function ks(e){for(var t=e;t!==null;){if(t.tag===13){var o=t.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Kf(o)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Iu(e,t,o,a){t=e.memoizedState,o=o(a,t),o=o==null?t:v({},t,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Xu={enqueueSetState:function(e,t,o){e=e._reactInternals;var a=Yt(),c=gn(a);c.payload=t,o!=null&&(c.callback=o),t=bn(e,c,a),t!==null&&(Vt(t,e,a),ji(t,e,a))},enqueueReplaceState:function(e,t,o){e=e._reactInternals;var a=Yt(),c=gn(a);c.tag=1,c.payload=t,o!=null&&(c.callback=o),t=bn(e,c,a),t!==null&&(Vt(t,e,a),ji(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var o=Yt(),a=gn(o);a.tag=2,t!=null&&(a.callback=t),t=bn(e,a,o),t!==null&&(Vt(t,e,o),ji(t,e,o))}};function Xg(e,t,o,a,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,f,y):t.prototype&&t.prototype.isPureReactComponent?!ui(o,a)||!ui(c,f):!0}function Zg(e,t,o,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(o,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(o,a),t.state!==e&&Xu.enqueueReplaceState(t,t.state,null)}function uo(e,t){var o=t;if("ref"in t){o={};for(var a in t)a!=="ref"&&(o[a]=t[a])}if(e=e.defaultProps){o===t&&(o=v({},o));for(var c in e)o[c]===void 0&&(o[c]=e[c])}return o}var Cs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Jg(e){Cs(e)}function Wg(e){console.error(e)}function eb(e){Cs(e)}function Es(e,t){try{var o=e.onUncaughtError;o(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function tb(e,t,o){try{var a=e.onCaughtError;a(o.value,{componentStack:o.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Zu(e,t,o){return o=gn(o),o.tag=3,o.payload={element:null},o.callback=function(){Es(e,t)},o}function rb(e){return e=gn(e),e.tag=3,e}function nb(e,t,o,a){var c=o.type.getDerivedStateFromError;if(typeof c=="function"){var f=a.value;e.payload=function(){return c(f)},e.callback=function(){tb(t,o,a)}}var y=o.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){tb(t,o,a),typeof c!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var k=a.stack;this.componentDidCatch(a.value,{componentStack:k!==null?k:""})})}function G5(e,t,o,a,c){if(o.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=o.alternate,t!==null&&gi(t,o,c,!0),o=ar.current,o!==null){switch(o.tag){case 13:return Cr===null?wf():o.alternate===null&&Ye===0&&(Ye=3),o.flags&=-257,o.flags|=65536,o.lanes=c,a===Cu?o.flags|=16384:(t=o.updateQueue,t===null?o.updateQueue=new Set([a]):t.add(a),Af(e,a,c)),!1;case 22:return o.flags|=65536,a===Cu?o.flags|=16384:(t=o.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},o.updateQueue=t):(o=t.retryQueue,o===null?t.retryQueue=new Set([a]):o.add(a)),Af(e,a,c)),!1}throw Error(l(435,o.tag))}return Af(e,a,c),wf(),!1}if(_e)return t=ar.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,a!==vu&&(e=Error(l(422),{cause:a}),pi(tr(e,o)))):(a!==vu&&(t=Error(l(423),{cause:a}),pi(tr(t,o))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,a=tr(a,o),c=Zu(e.stateNode,a,c),Nu(e,c),Ye!==4&&(Ye=2)),!1;var f=Error(l(520),{cause:a});if(f=tr(f,o),$i===null?$i=[f]:$i.push(f),Ye!==4&&(Ye=2),t===null)return!0;a=tr(a,o),o=t;do{switch(o.tag){case 3:return o.flags|=65536,e=c&-c,o.lanes|=e,e=Zu(o.stateNode,a,e),Nu(o,e),!1;case 1:if(t=o.type,f=o.stateNode,(o.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Cn===null||!Cn.has(f))))return o.flags|=65536,c&=-c,o.lanes|=c,c=rb(c),nb(c,e,o,a),Nu(o,c),!1}o=o.return}while(o!==null);return!1}var ob=Error(l(461)),lt=!1;function mt(e,t,o,a){t.child=e===null?Gg(t,null,o,a):sa(t,e.child,o,a)}function ab(e,t,o,a,c){o=o.render;var f=t.ref;if("ref"in a){var y={};for(var k in a)k!=="ref"&&(y[k]=a[k])}else y=a;return lo(t),a=Ou(e,t,o,y,f,c),k=zu(),e!==null&&!lt?($u(e,t,c),Qr(e,t,c)):(_e&&k&&bu(t),t.flags|=1,mt(e,t,a,c),t.child)}function ib(e,t,o,a,c){if(e===null){var f=o.type;return typeof f=="function"&&!mu(f)&&f.defaultProps===void 0&&o.compare===null?(t.tag=15,t.type=f,lb(e,t,f,a,c)):(e=is(o.type,null,a,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!af(e,c)){var y=f.memoizedProps;if(o=o.compare,o=o!==null?o:ui,o(y,a)&&e.ref===t.ref)return Qr(e,t,c)}return t.flags|=1,e=Ur(f,a),e.ref=t.ref,e.return=t,t.child=e}function lb(e,t,o,a,c){if(e!==null){var f=e.memoizedProps;if(ui(f,a)&&e.ref===t.ref)if(lt=!1,t.pendingProps=a=f,af(e,c))(e.flags&131072)!==0&&(lt=!0);else return t.lanes=e.lanes,Qr(e,t,c)}return Ju(e,t,o,a,c)}function sb(e,t,o){var a=t.pendingProps,c=a.children,f=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((t.flags&128)!==0){if(a=f!==null?f.baseLanes|o:o,e!==null){for(c=t.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;t.childLanes=f&~a}else t.childLanes=0,t.child=null;return cb(e,t,a,o)}if((o&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&us(t,f!==null?f.cachePool:null),f!==null?lg(t,f):_u(),Ig(t);else return t.lanes=t.childLanes=536870912,cb(e,t,f!==null?f.baseLanes|o:o,o)}else f!==null?(us(t,f.cachePool),lg(t,f),yn(),t.memoizedState=null):(e!==null&&us(t,null),_u(),yn());return mt(e,t,c,o),t.child}function cb(e,t,o,a){var c=ku();return c=c===null?null:{parent:rt._currentValue,pool:c},t.memoizedState={baseLanes:o,cachePool:c},e!==null&&us(t,null),_u(),Ig(t),e!==null&&gi(e,t,a,!0),null}function Ts(e,t){var o=t.ref;if(o===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(l(284));(e===null||e.ref!==o)&&(t.flags|=4194816)}}function Ju(e,t,o,a,c){return lo(t),o=Ou(e,t,o,a,void 0,c),a=zu(),e!==null&&!lt?($u(e,t,c),Qr(e,t,c)):(_e&&a&&bu(t),t.flags|=1,mt(e,t,o,c),t.child)}function db(e,t,o,a,c,f){return lo(t),t.updateQueue=null,o=cg(t,a,o,c),sg(e),a=zu(),e!==null&&!lt?($u(e,t,f),Qr(e,t,f)):(_e&&a&&bu(t),t.flags|=1,mt(e,t,o,f),t.child)}function ub(e,t,o,a,c){if(lo(t),t.stateNode===null){var f=Jo,y=o.contextType;typeof y=="object"&&y!==null&&(f=yt(y)),f=new o(a,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Xu,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=a,f.state=t.memoizedState,f.refs={},Eu(t),y=o.contextType,f.context=typeof y=="object"&&y!==null?yt(y):Jo,f.state=t.memoizedState,y=o.getDerivedStateFromProps,typeof y=="function"&&(Iu(t,o,y,a),f.state=t.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Xu.enqueueReplaceState(f,f.state,null),Si(t,a,f,c),wi(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){f=t.stateNode;var k=t.memoizedProps,O=uo(o,k);f.props=O;var F=f.context,Z=o.contextType;y=Jo,typeof Z=="object"&&Z!==null&&(y=yt(Z));var re=o.getDerivedStateFromProps;Z=typeof re=="function"||typeof f.getSnapshotBeforeUpdate=="function",k=t.pendingProps!==k,Z||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(k||F!==y)&&Zg(t,f,a,y),pn=!1;var Q=t.memoizedState;f.state=Q,Si(t,a,f,c),wi(),F=t.memoizedState,k||Q!==F||pn?(typeof re=="function"&&(Iu(t,o,re,a),F=t.memoizedState),(O=pn||Xg(t,o,O,a,Q,F,y))?(Z||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=F),f.props=a,f.state=F,f.context=y,a=O):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{f=t.stateNode,Tu(e,t),y=t.memoizedProps,Z=uo(o,y),f.props=Z,re=t.pendingProps,Q=f.context,F=o.contextType,O=Jo,typeof F=="object"&&F!==null&&(O=yt(F)),k=o.getDerivedStateFromProps,(F=typeof k=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==re||Q!==O)&&Zg(t,f,a,O),pn=!1,Q=t.memoizedState,f.state=Q,Si(t,a,f,c),wi();var G=t.memoizedState;y!==re||Q!==G||pn||e!==null&&e.dependencies!==null&&cs(e.dependencies)?(typeof k=="function"&&(Iu(t,o,k,a),G=t.memoizedState),(Z=pn||Xg(t,o,Z,a,Q,G,O)||e!==null&&e.dependencies!==null&&cs(e.dependencies))?(F||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(a,G,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(a,G,O)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&Q===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&Q===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=G),f.props=a,f.state=G,f.context=O,a=Z):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&Q===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&Q===e.memoizedState||(t.flags|=1024),a=!1)}return f=a,Ts(e,t),a=(t.flags&128)!==0,f||a?(f=t.stateNode,o=a&&typeof o.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&a?(t.child=sa(t,e.child,null,c),t.child=sa(t,null,o,c)):mt(e,t,o,c),t.memoizedState=f.state,e=t.child):e=Qr(e,t,c),e}function fb(e,t,o,a){return mi(),t.flags|=256,mt(e,t,o,a),t.child}var Wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(e){return{baseLanes:e,cachePool:Wp()}}function tf(e,t,o){return e=e!==null?e.childLanes&~o:0,t&&(e|=ir),e}function hb(e,t,o){var a=t.pendingProps,c=!1,f=(t.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(nt.current&2)!==0),y&&(c=!0,t.flags&=-129),y=(t.flags&32)!==0,t.flags&=-33,e===null){if(_e){if(c?vn(t):yn(),_e){var k=Qe,O;if(O=k){e:{for(O=k,k=kr;O.nodeType!==8;){if(!k){k=null;break e}if(O=pr(O.nextSibling),O===null){k=null;break e}}k=O}k!==null?(t.memoizedState={dehydrated:k,treeContext:ro!==null?{id:Kr,overflow:Lr}:null,retryLane:536870912,hydrationErrors:null},O=Ht(18,null,null,0),O.stateNode=k,O.return=t,t.child=O,kt=t,Qe=null,O=!0):O=!1}O||ao(t)}if(k=t.memoizedState,k!==null&&(k=k.dehydrated,k!==null))return Kf(k)?t.lanes=32:t.lanes=536870912,null;Fr(t)}return k=a.children,a=a.fallback,c?(yn(),c=t.mode,k=Ns({mode:"hidden",children:k},c),a=to(a,c,o,null),k.return=t,a.return=t,k.sibling=a,t.child=k,c=t.child,c.memoizedState=ef(o),c.childLanes=tf(e,y,o),t.memoizedState=Wu,a):(vn(t),rf(t,k))}if(O=e.memoizedState,O!==null&&(k=O.dehydrated,k!==null)){if(f)t.flags&256?(vn(t),t.flags&=-257,t=nf(e,t,o)):t.memoizedState!==null?(yn(),t.child=e.child,t.flags|=128,t=null):(yn(),c=a.fallback,k=t.mode,a=Ns({mode:"visible",children:a.children},k),c=to(c,k,o,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,sa(t,e.child,null,o),a=t.child,a.memoizedState=ef(o),a.childLanes=tf(e,y,o),t.memoizedState=Wu,t=c);else if(vn(t),Kf(k)){if(y=k.nextSibling&&k.nextSibling.dataset,y)var F=y.dgst;y=F,a=Error(l(419)),a.stack="",a.digest=y,pi({value:a,source:null,stack:null}),t=nf(e,t,o)}else if(lt||gi(e,t,o,!1),y=(o&e.childLanes)!==0,lt||y){if(y=Ke,y!==null&&(a=o&-o,a=(a&42)!==0?1:Kd(a),a=(a&(y.suspendedLanes|o))!==0?0:a,a!==0&&a!==O.retryLane))throw O.retryLane=a,Zo(e,a),Vt(y,e,a),ob;k.data==="$?"||wf(),t=nf(e,t,o)}else k.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=O.treeContext,Qe=pr(k.nextSibling),kt=t,_e=!0,oo=null,kr=!1,e!==null&&(nr[or++]=Kr,nr[or++]=Lr,nr[or++]=ro,Kr=e.id,Lr=e.overflow,ro=t),t=rf(t,a.children),t.flags|=4096);return t}return c?(yn(),c=a.fallback,k=t.mode,O=e.child,F=O.sibling,a=Ur(O,{mode:"hidden",children:a.children}),a.subtreeFlags=O.subtreeFlags&65011712,F!==null?c=Ur(F,c):(c=to(c,k,o,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,a=c,c=t.child,k=e.child.memoizedState,k===null?k=ef(o):(O=k.cachePool,O!==null?(F=rt._currentValue,O=O.parent!==F?{parent:F,pool:F}:O):O=Wp(),k={baseLanes:k.baseLanes|o,cachePool:O}),c.memoizedState=k,c.childLanes=tf(e,y,o),t.memoizedState=Wu,a):(vn(t),o=e.child,e=o.sibling,o=Ur(o,{mode:"visible",children:a.children}),o.return=t,o.sibling=null,e!==null&&(y=t.deletions,y===null?(t.deletions=[e],t.flags|=16):y.push(e)),t.child=o,t.memoizedState=null,o)}function rf(e,t){return t=Ns({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ns(e,t){return e=Ht(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function nf(e,t,o){return sa(t,e.child,null,o),e=rf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mb(e,t,o){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ju(e.return,t,o)}function of(e,t,o,a,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:c}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=a,f.tail=o,f.tailMode=c)}function pb(e,t,o){var a=t.pendingProps,c=a.revealOrder,f=a.tail;if(mt(e,t,a.children,o),a=nt.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mb(e,o,t);else if(e.tag===19)mb(e,o,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(ie(nt,a),c){case"forwards":for(o=t.child,c=null;o!==null;)e=o.alternate,e!==null&&ks(e)===null&&(c=o),o=o.sibling;o=c,o===null?(c=t.child,t.child=null):(c=o.sibling,o.sibling=null),of(t,!1,c,o,f);break;case"backwards":for(o=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&ks(e)===null){t.child=c;break}e=c.sibling,c.sibling=o,o=c,c=e}of(t,!0,o,null,f);break;case"together":of(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qr(e,t,o){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,(o&t.childLanes)===0)if(e!==null){if(gi(e,t,o,!1),(o&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,o=Ur(e,e.pendingProps),t.child=o,o.return=t;e.sibling!==null;)e=e.sibling,o=o.sibling=Ur(e,e.pendingProps),o.return=t;o.sibling=null}return t.child}function af(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&cs(e)))}function I5(e,t,o){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),mn(t,rt,e.memoizedState.cache),mi();break;case 27:case 5:Sr(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:mn(t,t.type,t.memoizedProps.value);break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(vn(t),t.flags|=128,null):(o&t.child.childLanes)!==0?hb(e,t,o):(vn(t),e=Qr(e,t,o),e!==null?e.sibling:null);vn(t);break;case 19:var c=(e.flags&128)!==0;if(a=(o&t.childLanes)!==0,a||(gi(e,t,o,!1),a=(o&t.childLanes)!==0),c){if(a)return pb(e,t,o);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ie(nt,nt.current),a)break;return null;case 22:case 23:return t.lanes=0,sb(e,t,o);case 24:mn(t,rt,e.memoizedState.cache)}return Qr(e,t,o)}function gb(e,t,o){if(e!==null)if(e.memoizedProps!==t.pendingProps)lt=!0;else{if(!af(e,o)&&(t.flags&128)===0)return lt=!1,I5(e,t,o);lt=(e.flags&131072)!==0}else lt=!1,_e&&(t.flags&1048576)!==0&&Yp(t,ss,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var a=t.elementType,c=a._init;if(a=c(a._payload),t.type=a,typeof a=="function")mu(a)?(e=uo(a,e),t.tag=1,t=ub(null,t,a,e,o)):(t.tag=0,t=Ju(null,t,a,e,o));else{if(a!=null){if(c=a.$$typeof,c===_){t.tag=11,t=ab(null,t,a,e,o);break e}else if(c===L){t.tag=14,t=ib(null,t,a,e,o);break e}}throw t=se(a)||a,Error(l(306,t,""))}}return t;case 0:return Ju(e,t,t.type,t.pendingProps,o);case 1:return a=t.type,c=uo(a,t.pendingProps),ub(e,t,a,c,o);case 3:e:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(l(387));a=t.pendingProps;var f=t.memoizedState;c=f.element,Tu(e,t),Si(t,a,null,o);var y=t.memoizedState;if(a=y.cache,mn(t,rt,a),a!==f.cache&&wu(t,[rt],o,!0),wi(),a=y.element,f.isDehydrated)if(f={element:a,isDehydrated:!1,cache:y.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=fb(e,t,a,o);break e}else if(a!==c){c=tr(Error(l(424)),t),pi(c),t=fb(e,t,a,o);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=pr(e.firstChild),kt=t,_e=!0,oo=null,kr=!0,o=Gg(t,null,a,o),t.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(mi(),a===c){t=Qr(e,t,o);break e}mt(e,t,a,o)}t=t.child}return t;case 26:return Ts(e,t),e===null?(o=y0(t.type,null,t.pendingProps,null))?t.memoizedState=o:_e||(o=t.type,e=t.pendingProps,a=qs(oe.current).createElement(o),a[vt]=t,a[Nt]=e,gt(a,o,e),it(a),t.stateNode=a):t.memoizedState=y0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Sr(t),e===null&&_e&&(a=t.stateNode=b0(t.type,t.pendingProps,oe.current),kt=t,kr=!0,c=Qe,Nn(t.type)?(Lf=c,Qe=pr(a.firstChild)):Qe=c),mt(e,t,t.pendingProps.children,o),Ts(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&_e&&((c=a=Qe)&&(a=S2(a,t.type,t.pendingProps,kr),a!==null?(t.stateNode=a,kt=t,Qe=pr(a.firstChild),kr=!1,c=!0):c=!1),c||ao(t)),Sr(t),c=t.type,f=t.pendingProps,y=e!==null?e.memoizedProps:null,a=f.children,$f(c,f)?a=null:y!==null&&$f(c,y)&&(t.flags|=32),t.memoizedState!==null&&(c=Ou(e,t,P5,null,null,o),Qi._currentValue=c),Ts(e,t),mt(e,t,a,o),t.child;case 6:return e===null&&_e&&((e=o=Qe)&&(o=A2(o,t.pendingProps,kr),o!==null?(t.stateNode=o,kt=t,Qe=null,e=!0):e=!1),e||ao(t)),null;case 13:return hb(e,t,o);case 4:return ve(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=sa(t,null,a,o):mt(e,t,a,o),t.child;case 11:return ab(e,t,t.type,t.pendingProps,o);case 7:return mt(e,t,t.pendingProps,o),t.child;case 8:return mt(e,t,t.pendingProps.children,o),t.child;case 12:return mt(e,t,t.pendingProps.children,o),t.child;case 10:return a=t.pendingProps,mn(t,t.type,a.value),mt(e,t,a.children,o),t.child;case 9:return c=t.type._context,a=t.pendingProps.children,lo(t),c=yt(c),a=a(c),t.flags|=1,mt(e,t,a,o),t.child;case 14:return ib(e,t,t.type,t.pendingProps,o);case 15:return lb(e,t,t.type,t.pendingProps,o);case 19:return pb(e,t,o);case 31:return a=t.pendingProps,o=t.mode,a={mode:a.mode,children:a.children},e===null?(o=Ns(a,o),o.ref=t.ref,t.child=o,o.return=t,t=o):(o=Ur(e.child,a),o.ref=t.ref,t.child=o,o.return=t,t=o),t;case 22:return sb(e,t,o);case 24:return lo(t),a=yt(rt),e===null?(c=ku(),c===null&&(c=Ke,f=Su(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=o),c=f),t.memoizedState={parent:a,cache:c},Eu(t),mn(t,rt,c)):((e.lanes&o)!==0&&(Tu(e,t),Si(t,null,null,o),wi()),c=e.memoizedState,f=t.memoizedState,c.parent!==a?(c={parent:a,cache:a},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),mn(t,rt,a)):(a=f.cache,mn(t,rt,a),a!==c.cache&&wu(t,[rt],o,!0))),mt(e,t,t.pendingProps.children,o),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Yr(e){e.flags|=4}function bb(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!k0(t)){if(t=ar.current,t!==null&&((Ee&4194048)===Ee?Cr!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||t!==Cr))throw yi=Cu,eg;e.flags|=8192}}function Ms(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Im():536870912,e.lanes|=t,fa|=t)}function Mi(e,t){if(!_e)switch(e.tailMode){case"hidden":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,o=0,a=0;if(t)for(var c=e.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags&65011712,a|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)o|=c.lanes|c.childLanes,a|=c.subtreeFlags,a|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=a,e.childLanes=o,t}function X5(e,t,o){var a=t.pendingProps;switch(xu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return qe(t),null;case 3:return o=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Hr(rt),tt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(hi(t)?Yr(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ip())),qe(t),null;case 26:return o=t.memoizedState,e===null?(Yr(t),o!==null?(qe(t),bb(t,o)):(qe(t),t.flags&=-16777217)):o?o!==e.memoizedState?(Yr(t),qe(t),bb(t,o)):(qe(t),t.flags&=-16777217):(e.memoizedProps!==a&&Yr(t),qe(t),t.flags&=-16777217),null;case 27:Ut(t),o=oe.current;var c=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Yr(t);else{if(!a){if(t.stateNode===null)throw Error(l(166));return qe(t),null}e=he.current,hi(t)?Vp(t):(e=b0(c,a,o),t.stateNode=e,Yr(t))}return qe(t),null;case 5:if(Ut(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Yr(t);else{if(!a){if(t.stateNode===null)throw Error(l(166));return qe(t),null}if(e=he.current,hi(t))Vp(t);else{switch(c=qs(oe.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?c.createElement(o,{is:a.is}):c.createElement(o)}}e[vt]=t,e[Nt]=a;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=e;e:switch(gt(e,o,a),o){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Yr(t)}}return qe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Yr(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(l(166));if(e=oe.current,hi(t)){if(e=t.stateNode,o=t.memoizedProps,a=null,c=kt,c!==null)switch(c.tag){case 27:case 5:a=c.memoizedProps}e[vt]=t,e=!!(e.nodeValue===o||a!==null&&a.suppressHydrationWarning===!0||d0(e.nodeValue,o)),e||ao(t)}else e=qs(e).createTextNode(a),e[vt]=t,t.stateNode=e}return qe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=hi(t),a!==null&&a.dehydrated!==null){if(e===null){if(!c)throw Error(l(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[vt]=t}else mi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),c=!1}else c=Ip(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(Fr(t),t):(Fr(t),null)}if(Fr(t),(t.flags&128)!==0)return t.lanes=o,t;if(o=a!==null,e=e!==null&&e.memoizedState!==null,o){a=t.child,c=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(c=a.alternate.memoizedState.cachePool.pool);var f=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(f=a.memoizedState.cachePool.pool),f!==c&&(a.flags|=2048)}return o!==e&&o&&(t.child.flags|=8192),Ms(t,t.updateQueue),qe(t),null;case 4:return tt(),e===null&&_f(t.stateNode.containerInfo),qe(t),null;case 10:return Hr(t.type),qe(t),null;case 19:if(ae(nt),c=t.memoizedState,c===null)return qe(t),null;if(a=(t.flags&128)!==0,f=c.rendering,f===null)if(a)Mi(c,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=ks(e),f!==null){for(t.flags|=128,Mi(c,!1),e=f.updateQueue,t.updateQueue=e,Ms(t,e),t.subtreeFlags=0,e=o,o=t.child;o!==null;)Qp(o,e),o=o.sibling;return ie(nt,nt.current&1|2),t.child}e=e.sibling}c.tail!==null&&ce()>Ds&&(t.flags|=128,a=!0,Mi(c,!1),t.lanes=4194304)}else{if(!a)if(e=ks(f),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Ms(t,e),Mi(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!_e)return qe(t),null}else 2*ce()-c.renderingStartTime>Ds&&o!==536870912&&(t.flags|=128,a=!0,Mi(c,!1),t.lanes=4194304);c.isBackwards?(f.sibling=t.child,t.child=f):(e=c.last,e!==null?e.sibling=f:t.child=f,c.last=f)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=ce(),t.sibling=null,e=nt.current,ie(nt,a?e&1|2:e&1),t):(qe(t),null);case 22:case 23:return Fr(t),Ru(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(o&536870912)!==0&&(t.flags&128)===0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),o=t.updateQueue,o!==null&&Ms(t,o.retryQueue),o=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==o&&(t.flags|=2048),e!==null&&ae(so),null;case 24:return o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),Hr(rt),qe(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Z5(e,t){switch(xu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hr(rt),tt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ut(t),null;case 13:if(Fr(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(nt),null;case 4:return tt(),null;case 10:return Hr(t.type),null;case 22:case 23:return Fr(t),Ru(),e!==null&&ae(so),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Hr(rt),null;case 25:return null;default:return null}}function xb(e,t){switch(xu(t),t.tag){case 3:Hr(rt),tt();break;case 26:case 27:case 5:Ut(t);break;case 4:tt();break;case 13:Fr(t);break;case 19:ae(nt);break;case 10:Hr(t.type);break;case 22:case 23:Fr(t),Ru(),e!==null&&ae(so);break;case 24:Hr(rt)}}function _i(e,t){try{var o=t.updateQueue,a=o!==null?o.lastEffect:null;if(a!==null){var c=a.next;o=c;do{if((o.tag&e)===e){a=void 0;var f=o.create,y=o.inst;a=f(),y.destroy=a}o=o.next}while(o!==c)}}catch(k){Ue(t,t.return,k)}}function jn(e,t,o){try{var a=t.updateQueue,c=a!==null?a.lastEffect:null;if(c!==null){var f=c.next;a=f;do{if((a.tag&e)===e){var y=a.inst,k=y.destroy;if(k!==void 0){y.destroy=void 0,c=t;var O=o,F=k;try{F()}catch(Z){Ue(c,O,Z)}}}a=a.next}while(a!==f)}}catch(Z){Ue(t,t.return,Z)}}function vb(e){var t=e.updateQueue;if(t!==null){var o=e.stateNode;try{ig(t,o)}catch(a){Ue(e,e.return,a)}}}function yb(e,t,o){o.props=uo(e.type,e.memoizedProps),o.state=e.memoizedState;try{o.componentWillUnmount()}catch(a){Ue(e,t,a)}}function Ri(e,t){try{var o=e.ref;if(o!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof o=="function"?e.refCleanup=o(a):o.current=a}}catch(c){Ue(e,t,c)}}function Er(e,t){var o=e.ref,a=e.refCleanup;if(o!==null)if(typeof a=="function")try{a()}catch(c){Ue(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(c){Ue(e,t,c)}else o.current=null}function jb(e){var t=e.type,o=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":o.autoFocus&&a.focus();break e;case"img":o.src?a.src=o.src:o.srcSet&&(a.srcset=o.srcSet)}}catch(c){Ue(e,e.return,c)}}function lf(e,t,o){try{var a=e.stateNode;x2(a,e.type,o,t),a[Nt]=t}catch(c){Ue(e,e.return,c)}}function wb(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Nn(e.type)||e.tag===4}function sf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Nn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cf(e,t,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(e,t):(t=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,t.appendChild(e),o=o._reactRootContainer,o!=null||t.onclick!==null||(t.onclick=Hs));else if(a!==4&&(a===27&&Nn(e.type)&&(o=e.stateNode,t=null),e=e.child,e!==null))for(cf(e,t,o),e=e.sibling;e!==null;)cf(e,t,o),e=e.sibling}function _s(e,t,o){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?o.insertBefore(e,t):o.appendChild(e);else if(a!==4&&(a===27&&Nn(e.type)&&(o=e.stateNode),e=e.child,e!==null))for(_s(e,t,o),e=e.sibling;e!==null;)_s(e,t,o),e=e.sibling}function Sb(e){var t=e.stateNode,o=e.memoizedProps;try{for(var a=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);gt(t,a,o),t[vt]=e,t[Nt]=o}catch(f){Ue(e,e.return,f)}}var Vr=!1,Ge=!1,df=!1,Ab=typeof WeakSet=="function"?WeakSet:Set,st=null;function J5(e,t){if(e=e.containerInfo,Of=Is,e=zp(e),lu(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var c=a.anchorOffset,f=a.focusNode;a=a.focusOffset;try{o.nodeType,f.nodeType}catch{o=null;break e}var y=0,k=-1,O=-1,F=0,Z=0,re=e,Q=null;t:for(;;){for(var G;re!==o||c!==0&&re.nodeType!==3||(k=y+c),re!==f||a!==0&&re.nodeType!==3||(O=y+a),re.nodeType===3&&(y+=re.nodeValue.length),(G=re.firstChild)!==null;)Q=re,re=G;for(;;){if(re===e)break t;if(Q===o&&++F===c&&(k=y),Q===f&&++Z===a&&(O=y),(G=re.nextSibling)!==null)break;re=Q,Q=re.parentNode}re=G}o=k===-1||O===-1?null:{start:k,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(zf={focusedElem:e,selectionRange:o},Is=!1,st=t;st!==null;)if(t=st,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,st=e;else for(;st!==null;){switch(t=st,f=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,o=t,c=f.memoizedProps,f=f.memoizedState,a=o.stateNode;try{var be=uo(o.type,c,o.elementType===o.type);e=a.getSnapshotBeforeUpdate(be,f),a.__reactInternalSnapshotBeforeUpdate=e}catch(pe){Ue(o,o.return,pe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,o=e.nodeType,o===9)Uf(e);else if(o===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Uf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,st=e;break}st=t.return}}function kb(e,t,o){var a=o.flags;switch(o.tag){case 0:case 11:case 15:wn(e,o),a&4&&_i(5,o);break;case 1:if(wn(e,o),a&4)if(e=o.stateNode,t===null)try{e.componentDidMount()}catch(y){Ue(o,o.return,y)}else{var c=uo(o.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ue(o,o.return,y)}}a&64&&vb(o),a&512&&Ri(o,o.return);break;case 3:if(wn(e,o),a&64&&(e=o.updateQueue,e!==null)){if(t=null,o.child!==null)switch(o.child.tag){case 27:case 5:t=o.child.stateNode;break;case 1:t=o.child.stateNode}try{ig(e,t)}catch(y){Ue(o,o.return,y)}}break;case 27:t===null&&a&4&&Sb(o);case 26:case 5:wn(e,o),t===null&&a&4&&jb(o),a&512&&Ri(o,o.return);break;case 12:wn(e,o);break;case 13:wn(e,o),a&4&&Tb(e,o),a&64&&(e=o.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(o=l2.bind(null,o),k2(e,o))));break;case 22:if(a=o.memoizedState!==null||Vr,!a){t=t!==null&&t.memoizedState!==null||Ge,c=Vr;var f=Ge;Vr=a,(Ge=t)&&!f?Sn(e,o,(o.subtreeFlags&8772)!==0):wn(e,o),Vr=c,Ge=f}break;case 30:break;default:wn(e,o)}}function Cb(e){var t=e.alternate;t!==null&&(e.alternate=null,Cb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Hd(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,Rt=!1;function Gr(e,t,o){for(o=o.child;o!==null;)Eb(e,t,o),o=o.sibling}function Eb(e,t,o){if(Kt&&typeof Kt.onCommitFiberUnmount=="function")try{Kt.onCommitFiberUnmount(Wa,o)}catch{}switch(o.tag){case 26:Ge||Er(o,t),Gr(e,t,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ge||Er(o,t);var a=Pe,c=Rt;Nn(o.type)&&(Pe=o.stateNode,Rt=!1),Gr(e,t,o),Pi(o.stateNode),Pe=a,Rt=c;break;case 5:Ge||Er(o,t);case 6:if(a=Pe,c=Rt,Pe=null,Gr(e,t,o),Pe=a,Rt=c,Pe!==null)if(Rt)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(o.stateNode)}catch(f){Ue(o,t,f)}else try{Pe.removeChild(o.stateNode)}catch(f){Ue(o,t,f)}break;case 18:Pe!==null&&(Rt?(e=Pe,p0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,o.stateNode),Ii(e)):p0(Pe,o.stateNode));break;case 4:a=Pe,c=Rt,Pe=o.stateNode.containerInfo,Rt=!0,Gr(e,t,o),Pe=a,Rt=c;break;case 0:case 11:case 14:case 15:Ge||jn(2,o,t),Ge||jn(4,o,t),Gr(e,t,o);break;case 1:Ge||(Er(o,t),a=o.stateNode,typeof a.componentWillUnmount=="function"&&yb(o,t,a)),Gr(e,t,o);break;case 21:Gr(e,t,o);break;case 22:Ge=(a=Ge)||o.memoizedState!==null,Gr(e,t,o),Ge=a;break;default:Gr(e,t,o)}}function Tb(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ii(e)}catch(o){Ue(t,t.return,o)}}function W5(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ab),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ab),t;default:throw Error(l(435,e.tag))}}function uf(e,t){var o=W5(e);t.forEach(function(a){var c=s2.bind(null,e,a);o.has(a)||(o.add(a),a.then(c,c))})}function qt(e,t){var o=t.deletions;if(o!==null)for(var a=0;a<o.length;a++){var c=o[a],f=e,y=t,k=y;e:for(;k!==null;){switch(k.tag){case 27:if(Nn(k.type)){Pe=k.stateNode,Rt=!1;break e}break;case 5:Pe=k.stateNode,Rt=!1;break e;case 3:case 4:Pe=k.stateNode.containerInfo,Rt=!0;break e}k=k.return}if(Pe===null)throw Error(l(160));Eb(f,y,c),Pe=null,Rt=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Nb(t,e),t=t.sibling}var mr=null;function Nb(e,t){var o=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qt(t,e),Ft(e),a&4&&(jn(3,e,e.return),_i(3,e),jn(5,e,e.return));break;case 1:qt(t,e),Ft(e),a&512&&(Ge||o===null||Er(o,o.return)),a&64&&Vr&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(o=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=o===null?a:o.concat(a))));break;case 26:var c=mr;if(qt(t,e),Ft(e),a&512&&(Ge||o===null||Er(o,o.return)),a&4){var f=o!==null?o.memoizedState:null;if(a=e.memoizedState,o===null)if(a===null)if(e.stateNode===null){e:{a=e.type,o=e.memoizedProps,c=c.ownerDocument||c;t:switch(a){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ri]||f[vt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(a),c.head.insertBefore(f,c.querySelector("head > title"))),gt(f,a,o),f[vt]=e,it(f),a=f;break e;case"link":var y=S0("link","href",c).get(a+(o.href||""));if(y){for(var k=0;k<y.length;k++)if(f=y[k],f.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&f.getAttribute("rel")===(o.rel==null?null:o.rel)&&f.getAttribute("title")===(o.title==null?null:o.title)&&f.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){y.splice(k,1);break t}}f=c.createElement(a),gt(f,a,o),c.head.appendChild(f);break;case"meta":if(y=S0("meta","content",c).get(a+(o.content||""))){for(k=0;k<y.length;k++)if(f=y[k],f.getAttribute("content")===(o.content==null?null:""+o.content)&&f.getAttribute("name")===(o.name==null?null:o.name)&&f.getAttribute("property")===(o.property==null?null:o.property)&&f.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&f.getAttribute("charset")===(o.charSet==null?null:o.charSet)){y.splice(k,1);break t}}f=c.createElement(a),gt(f,a,o),c.head.appendChild(f);break;default:throw Error(l(468,a))}f[vt]=e,it(f),a=f}e.stateNode=a}else A0(c,e.type,e.stateNode);else e.stateNode=w0(c,a,e.memoizedProps);else f!==a?(f===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):f.count--,a===null?A0(c,e.type,e.stateNode):w0(c,a,e.memoizedProps)):a===null&&e.stateNode!==null&&lf(e,e.memoizedProps,o.memoizedProps)}break;case 27:qt(t,e),Ft(e),a&512&&(Ge||o===null||Er(o,o.return)),o!==null&&a&4&&lf(e,e.memoizedProps,o.memoizedProps);break;case 5:if(qt(t,e),Ft(e),a&512&&(Ge||o===null||Er(o,o.return)),e.flags&32){c=e.stateNode;try{Fo(c,"")}catch(G){Ue(e,e.return,G)}}a&4&&e.stateNode!=null&&(c=e.memoizedProps,lf(e,c,o!==null?o.memoizedProps:c)),a&1024&&(df=!0);break;case 6:if(qt(t,e),Ft(e),a&4){if(e.stateNode===null)throw Error(l(162));a=e.memoizedProps,o=e.stateNode;try{o.nodeValue=a}catch(G){Ue(e,e.return,G)}}break;case 3:if(Ys=null,c=mr,mr=Fs(t.containerInfo),qt(t,e),mr=c,Ft(e),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Ii(t.containerInfo)}catch(G){Ue(e,e.return,G)}df&&(df=!1,Mb(e));break;case 4:a=mr,mr=Fs(e.stateNode.containerInfo),qt(t,e),Ft(e),mr=a;break;case 12:qt(t,e),Ft(e);break;case 13:qt(t,e),Ft(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(bf=ce()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,uf(e,a)));break;case 22:c=e.memoizedState!==null;var O=o!==null&&o.memoizedState!==null,F=Vr,Z=Ge;if(Vr=F||c,Ge=Z||O,qt(t,e),Ge=Z,Vr=F,Ft(e),a&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(o===null||O||Vr||Ge||fo(e)),o=null,t=e;;){if(t.tag===5||t.tag===26){if(o===null){O=o=t;try{if(f=O.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{k=O.stateNode;var re=O.memoizedProps.style,Q=re!=null&&re.hasOwnProperty("display")?re.display:null;k.style.display=Q==null||typeof Q=="boolean"?"":(""+Q).trim()}}catch(G){Ue(O,O.return,G)}}}else if(t.tag===6){if(o===null){O=t;try{O.stateNode.nodeValue=c?"":O.memoizedProps}catch(G){Ue(O,O.return,G)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;o===t&&(o=null),t=t.return}o===t&&(o=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(o=a.retryQueue,o!==null&&(a.retryQueue=null,uf(e,o))));break;case 19:qt(t,e),Ft(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,uf(e,a)));break;case 30:break;case 21:break;default:qt(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{for(var o,a=e.return;a!==null;){if(wb(a)){o=a;break}a=a.return}if(o==null)throw Error(l(160));switch(o.tag){case 27:var c=o.stateNode,f=sf(e);_s(e,f,c);break;case 5:var y=o.stateNode;o.flags&32&&(Fo(y,""),o.flags&=-33);var k=sf(e);_s(e,k,y);break;case 3:case 4:var O=o.stateNode.containerInfo,F=sf(e);cf(e,F,O);break;default:throw Error(l(161))}}catch(Z){Ue(e,e.return,Z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mb(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Mb(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function wn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)kb(e,t.alternate,t),t=t.sibling}function fo(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:jn(4,t,t.return),fo(t);break;case 1:Er(t,t.return);var o=t.stateNode;typeof o.componentWillUnmount=="function"&&yb(t,t.return,o),fo(t);break;case 27:Pi(t.stateNode);case 26:case 5:Er(t,t.return),fo(t);break;case 22:t.memoizedState===null&&fo(t);break;case 30:fo(t);break;default:fo(t)}e=e.sibling}}function Sn(e,t,o){for(o=o&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,c=e,f=t,y=f.flags;switch(f.tag){case 0:case 11:case 15:Sn(c,f,o),_i(4,f);break;case 1:if(Sn(c,f,o),a=f,c=a.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(F){Ue(a,a.return,F)}if(a=f,c=a.updateQueue,c!==null){var k=a.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)ag(O[c],k)}catch(F){Ue(a,a.return,F)}}o&&y&64&&vb(f),Ri(f,f.return);break;case 27:Sb(f);case 26:case 5:Sn(c,f,o),o&&a===null&&y&4&&jb(f),Ri(f,f.return);break;case 12:Sn(c,f,o);break;case 13:Sn(c,f,o),o&&y&4&&Tb(c,f);break;case 22:f.memoizedState===null&&Sn(c,f,o),Ri(f,f.return);break;case 30:break;default:Sn(c,f,o)}t=t.sibling}}function ff(e,t){var o=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==o&&(e!=null&&e.refCount++,o!=null&&bi(o))}function hf(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bi(e))}function Tr(e,t,o,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_b(e,t,o,a),t=t.sibling}function _b(e,t,o,a){var c=t.flags;switch(t.tag){case 0:case 11:case 15:Tr(e,t,o,a),c&2048&&_i(9,t);break;case 1:Tr(e,t,o,a);break;case 3:Tr(e,t,o,a),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bi(e)));break;case 12:if(c&2048){Tr(e,t,o,a),e=t.stateNode;try{var f=t.memoizedProps,y=f.id,k=f.onPostCommit;typeof k=="function"&&k(y,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){Ue(t,t.return,O)}}else Tr(e,t,o,a);break;case 13:Tr(e,t,o,a);break;case 23:break;case 22:f=t.stateNode,y=t.alternate,t.memoizedState!==null?f._visibility&2?Tr(e,t,o,a):Di(e,t):f._visibility&2?Tr(e,t,o,a):(f._visibility|=2,ca(e,t,o,a,(t.subtreeFlags&10256)!==0)),c&2048&&ff(y,t);break;case 24:Tr(e,t,o,a),c&2048&&hf(t.alternate,t);break;default:Tr(e,t,o,a)}}function ca(e,t,o,a,c){for(c=c&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var f=e,y=t,k=o,O=a,F=y.flags;switch(y.tag){case 0:case 11:case 15:ca(f,y,k,O,c),_i(8,y);break;case 23:break;case 22:var Z=y.stateNode;y.memoizedState!==null?Z._visibility&2?ca(f,y,k,O,c):Di(f,y):(Z._visibility|=2,ca(f,y,k,O,c)),c&&F&2048&&ff(y.alternate,y);break;case 24:ca(f,y,k,O,c),c&&F&2048&&hf(y.alternate,y);break;default:ca(f,y,k,O,c)}t=t.sibling}}function Di(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var o=e,a=t,c=a.flags;switch(a.tag){case 22:Di(o,a),c&2048&&ff(a.alternate,a);break;case 24:Di(o,a),c&2048&&hf(a.alternate,a);break;default:Di(o,a)}t=t.sibling}}var Oi=8192;function da(e){if(e.subtreeFlags&Oi)for(e=e.child;e!==null;)Rb(e),e=e.sibling}function Rb(e){switch(e.tag){case 26:da(e),e.flags&Oi&&e.memoizedState!==null&&U2(mr,e.memoizedState,e.memoizedProps);break;case 5:da(e);break;case 3:case 4:var t=mr;mr=Fs(e.stateNode.containerInfo),da(e),mr=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Oi,Oi=16777216,da(e),Oi=t):da(e));break;default:da(e)}}function Db(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function zi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var o=0;o<t.length;o++){var a=t[o];st=a,zb(a,e)}Db(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ob(e),e=e.sibling}function Ob(e){switch(e.tag){case 0:case 11:case 15:zi(e),e.flags&2048&&jn(9,e,e.return);break;case 3:zi(e);break;case 12:zi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Rs(e)):zi(e);break;default:zi(e)}}function Rs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var o=0;o<t.length;o++){var a=t[o];st=a,zb(a,e)}Db(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:jn(8,t,t.return),Rs(t);break;case 22:o=t.stateNode,o._visibility&2&&(o._visibility&=-3,Rs(t));break;default:Rs(t)}e=e.sibling}}function zb(e,t){for(;st!==null;){var o=st;switch(o.tag){case 0:case 11:case 15:jn(8,o,t);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var a=o.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:bi(o.memoizedState.cache)}if(a=o.child,a!==null)a.return=o,st=a;else e:for(o=e;st!==null;){a=st;var c=a.sibling,f=a.return;if(Cb(a),a===o){st=null;break e}if(c!==null){c.return=f,st=c;break e}st=f}}}var e2={getCacheForType:function(e){var t=yt(rt),o=t.data.get(e);return o===void 0&&(o=e(),t.data.set(e,o)),o}},t2=typeof WeakMap=="function"?WeakMap:Map,De=0,Ke=null,ke=null,Ee=0,Oe=0,Qt=null,An=!1,ua=!1,mf=!1,Ir=0,Ye=0,kn=0,ho=0,pf=0,ir=0,fa=0,$i=null,Dt=null,gf=!1,bf=0,Ds=1/0,Os=null,Cn=null,pt=0,En=null,ha=null,ma=0,xf=0,vf=null,$b=null,Bi=0,yf=null;function Yt(){if((De&2)!==0&&Ee!==0)return Ee&-Ee;if(V.T!==null){var e=ta;return e!==0?e:Ef()}return Jm()}function Bb(){ir===0&&(ir=(Ee&536870912)===0||_e?Gm():536870912);var e=ar.current;return e!==null&&(e.flags|=32),ir}function Vt(e,t,o){(e===Ke&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(pa(e,0),Tn(e,Ee,ir,!1)),ti(e,o),((De&2)===0||e!==Ke)&&(e===Ke&&((De&2)===0&&(ho|=o),Ye===4&&Tn(e,Ee,ir,!1)),Nr(e))}function Ub(e,t,o){if((De&6)!==0)throw Error(l(327));var a=!o&&(t&124)===0&&(t&e.expiredLanes)===0||ei(e,t),c=a?o2(e,t):Sf(e,t,!0),f=a;do{if(c===0){ua&&!a&&Tn(e,t,0,!1);break}else{if(o=e.current.alternate,f&&!r2(o)){c=Sf(e,t,!1),f=!1;continue}if(c===2){if(f=t,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){t=y;e:{var k=e;c=$i;var O=k.current.memoizedState.isDehydrated;if(O&&(pa(k,y).flags|=256),y=Sf(k,y,!1),y!==2){if(mf&&!O){k.errorRecoveryDisabledLanes|=f,ho|=f,c=4;break e}f=Dt,Dt=c,f!==null&&(Dt===null?Dt=f:Dt.push.apply(Dt,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){pa(e,0),Tn(e,t,0,!0);break}e:{switch(a=e,f=c,f){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:Tn(a,t,ir,!An);break e;case 2:Dt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(c=bf+300-ce(),10<c)){if(Tn(a,t,ir,!An),Ql(a,0,!0)!==0)break e;a.timeoutHandle=h0(Kb.bind(null,a,o,Dt,Os,gf,t,ir,ho,fa,An,f,2,-0,0),c);break e}Kb(a,o,Dt,Os,gf,t,ir,ho,fa,An,f,0,-0,0)}}break}while(!0);Nr(e)}function Kb(e,t,o,a,c,f,y,k,O,F,Z,re,Q,G){if(e.timeoutHandle=-1,re=t.subtreeFlags,(re&8192||(re&16785408)===16785408)&&(Fi={stylesheets:null,count:0,unsuspend:B2},Rb(t),re=K2(),re!==null)){e.cancelPendingCommit=re(Yb.bind(null,e,t,f,o,a,c,y,k,O,Z,1,Q,G)),Tn(e,f,y,!F);return}Yb(e,t,f,o,a,c,y,k,O)}function r2(e){for(var t=e;;){var o=t.tag;if((o===0||o===11||o===15)&&t.flags&16384&&(o=t.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var a=0;a<o.length;a++){var c=o[a],f=c.getSnapshot;c=c.value;try{if(!Pt(f(),c))return!1}catch{return!1}}if(o=t.child,t.subtreeFlags&16384&&o!==null)o.return=t,t=o;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tn(e,t,o,a){t&=~pf,t&=~ho,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var c=t;0<c;){var f=31-Lt(c),y=1<<f;a[f]=-1,c&=~y}o!==0&&Xm(e,o,t)}function zs(){return(De&6)===0?(Ui(0),!1):!0}function jf(){if(ke!==null){if(Oe===0)var e=ke.return;else e=ke,Pr=io=null,Bu(e),la=null,Ti=0,e=ke;for(;e!==null;)xb(e.alternate,e),e=e.return;ke=null}}function pa(e,t){var o=e.timeoutHandle;o!==-1&&(e.timeoutHandle=-1,y2(o)),o=e.cancelPendingCommit,o!==null&&(e.cancelPendingCommit=null,o()),jf(),Ke=e,ke=o=Ur(e.current,null),Ee=t,Oe=0,Qt=null,An=!1,ua=ei(e,t),mf=!1,fa=ir=pf=ho=kn=Ye=0,Dt=$i=null,gf=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var c=31-Lt(a),f=1<<c;t|=e[c],a&=~f}return Ir=t,ns(),o}function Lb(e,t){we=null,V.H=ws,t===vi||t===fs?(t=ng(),Oe=3):t===eg?(t=ng(),Oe=4):Oe=t===ob?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Qt=t,ke===null&&(Ye=1,Es(e,tr(t,e.current)))}function Pb(){var e=V.H;return V.H=ws,e===null?ws:e}function Hb(){var e=V.A;return V.A=e2,e}function wf(){Ye=4,An||(Ee&4194048)!==Ee&&ar.current!==null||(ua=!0),(kn&134217727)===0&&(ho&134217727)===0||Ke===null||Tn(Ke,Ee,ir,!1)}function Sf(e,t,o){var a=De;De|=2;var c=Pb(),f=Hb();(Ke!==e||Ee!==t)&&(Os=null,pa(e,t)),t=!1;var y=Ye;e:do try{if(Oe!==0&&ke!==null){var k=ke,O=Qt;switch(Oe){case 8:jf(),y=6;break e;case 3:case 2:case 9:case 6:ar.current===null&&(t=!0);var F=Oe;if(Oe=0,Qt=null,ga(e,k,O,F),o&&ua){y=0;break e}break;default:F=Oe,Oe=0,Qt=null,ga(e,k,O,F)}}n2(),y=Ye;break}catch(Z){Lb(e,Z)}while(!0);return t&&e.shellSuspendCounter++,Pr=io=null,De=a,V.H=c,V.A=f,ke===null&&(Ke=null,Ee=0,ns()),y}function n2(){for(;ke!==null;)qb(ke)}function o2(e,t){var o=De;De|=2;var a=Pb(),c=Hb();Ke!==e||Ee!==t?(Os=null,Ds=ce()+500,pa(e,t)):ua=ei(e,t);e:do try{if(Oe!==0&&ke!==null){t=ke;var f=Qt;t:switch(Oe){case 1:Oe=0,Qt=null,ga(e,t,f,1);break;case 2:case 9:if(tg(f)){Oe=0,Qt=null,Fb(t);break}t=function(){Oe!==2&&Oe!==9||Ke!==e||(Oe=7),Nr(e)},f.then(t,t);break e;case 3:Oe=7;break e;case 4:Oe=5;break e;case 7:tg(f)?(Oe=0,Qt=null,Fb(t)):(Oe=0,Qt=null,ga(e,t,f,7));break;case 5:var y=null;switch(ke.tag){case 26:y=ke.memoizedState;case 5:case 27:var k=ke;if(!y||k0(y)){Oe=0,Qt=null;var O=k.sibling;if(O!==null)ke=O;else{var F=k.return;F!==null?(ke=F,$s(F)):ke=null}break t}}Oe=0,Qt=null,ga(e,t,f,5);break;case 6:Oe=0,Qt=null,ga(e,t,f,6);break;case 8:jf(),Ye=6;break e;default:throw Error(l(462))}}a2();break}catch(Z){Lb(e,Z)}while(!0);return Pr=io=null,V.H=a,V.A=c,De=o,ke!==null?0:(Ke=null,Ee=0,ns(),Ye)}function a2(){for(;ke!==null&&!Ar();)qb(ke)}function qb(e){var t=gb(e.alternate,e,Ir);e.memoizedProps=e.pendingProps,t===null?$s(e):ke=t}function Fb(e){var t=e,o=t.alternate;switch(t.tag){case 15:case 0:t=db(o,t,t.pendingProps,t.type,void 0,Ee);break;case 11:t=db(o,t,t.pendingProps,t.type.render,t.ref,Ee);break;case 5:Bu(t);default:xb(o,t),t=ke=Qp(t,Ir),t=gb(o,t,Ir)}e.memoizedProps=e.pendingProps,t===null?$s(e):ke=t}function ga(e,t,o,a){Pr=io=null,Bu(t),la=null,Ti=0;var c=t.return;try{if(G5(e,c,t,o,Ee)){Ye=1,Es(e,tr(o,e.current)),ke=null;return}}catch(f){if(c!==null)throw ke=c,f;Ye=1,Es(e,tr(o,e.current)),ke=null;return}t.flags&32768?(_e||a===1?e=!0:ua||(Ee&536870912)!==0?e=!1:(An=e=!0,(a===2||a===9||a===3||a===6)&&(a=ar.current,a!==null&&a.tag===13&&(a.flags|=16384))),Qb(t,e)):$s(t)}function $s(e){var t=e;do{if((t.flags&32768)!==0){Qb(t,An);return}e=t.return;var o=X5(t.alternate,t,Ir);if(o!==null){ke=o;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Ye===0&&(Ye=5)}function Qb(e,t){do{var o=Z5(e.alternate,e);if(o!==null){o.flags&=32767,ke=o;return}if(o=e.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!t&&(e=e.sibling,e!==null)){ke=e;return}ke=e=o}while(e!==null);Ye=6,ke=null}function Yb(e,t,o,a,c,f,y,k,O){e.cancelPendingCommit=null;do Bs();while(pt!==0);if((De&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(f=t.lanes|t.childLanes,f|=fu,By(e,o,f,y,k,O),e===Ke&&(ke=Ke=null,Ee=0),ha=t,En=e,ma=o,xf=f,vf=c,$b=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,c2(Hl,function(){return Zb(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=V.T,V.T=null,c=I.p,I.p=2,y=De,De|=4;try{J5(e,t,o)}finally{De=y,I.p=c,V.T=a}}pt=1,Vb(),Gb(),Ib()}}function Vb(){if(pt===1){pt=0;var e=En,t=ha,o=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||o){o=V.T,V.T=null;var a=I.p;I.p=2;var c=De;De|=4;try{Nb(t,e);var f=zf,y=zp(e.containerInfo),k=f.focusedElem,O=f.selectionRange;if(y!==k&&k&&k.ownerDocument&&Op(k.ownerDocument.documentElement,k)){if(O!==null&&lu(k)){var F=O.start,Z=O.end;if(Z===void 0&&(Z=F),"selectionStart"in k)k.selectionStart=F,k.selectionEnd=Math.min(Z,k.value.length);else{var re=k.ownerDocument||document,Q=re&&re.defaultView||window;if(Q.getSelection){var G=Q.getSelection(),be=k.textContent.length,pe=Math.min(O.start,be),Be=O.end===void 0?pe:Math.min(O.end,be);!G.extend&&pe>Be&&(y=Be,Be=pe,pe=y);var P=Dp(k,pe),K=Dp(k,Be);if(P&&K&&(G.rangeCount!==1||G.anchorNode!==P.node||G.anchorOffset!==P.offset||G.focusNode!==K.node||G.focusOffset!==K.offset)){var H=re.createRange();H.setStart(P.node,P.offset),G.removeAllRanges(),pe>Be?(G.addRange(H),G.extend(K.node,K.offset)):(H.setEnd(K.node,K.offset),G.addRange(H))}}}}for(re=[],G=k;G=G.parentNode;)G.nodeType===1&&re.push({element:G,left:G.scrollLeft,top:G.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<re.length;k++){var ee=re[k];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}Is=!!Of,zf=Of=null}finally{De=c,I.p=a,V.T=o}}e.current=t,pt=2}}function Gb(){if(pt===2){pt=0;var e=En,t=ha,o=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||o){o=V.T,V.T=null;var a=I.p;I.p=2;var c=De;De|=4;try{kb(e,t.alternate,t)}finally{De=c,I.p=a,V.T=o}}pt=3}}function Ib(){if(pt===4||pt===3){pt=0,Bd();var e=En,t=ha,o=ma,a=$b;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?pt=5:(pt=0,ha=En=null,Xb(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Cn=null),Ld(o),t=t.stateNode,Kt&&typeof Kt.onCommitFiberRoot=="function")try{Kt.onCommitFiberRoot(Wa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=V.T,c=I.p,I.p=2,V.T=null;try{for(var f=e.onRecoverableError,y=0;y<a.length;y++){var k=a[y];f(k.value,{componentStack:k.stack})}}finally{V.T=t,I.p=c}}(ma&3)!==0&&Bs(),Nr(e),c=e.pendingLanes,(o&4194090)!==0&&(c&42)!==0?e===yf?Bi++:(Bi=0,yf=e):Bi=0,Ui(0)}}function Xb(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,bi(t)))}function Bs(e){return Vb(),Gb(),Ib(),Zb()}function Zb(){if(pt!==5)return!1;var e=En,t=xf;xf=0;var o=Ld(ma),a=V.T,c=I.p;try{I.p=32>o?32:o,V.T=null,o=vf,vf=null;var f=En,y=ma;if(pt=0,ha=En=null,ma=0,(De&6)!==0)throw Error(l(331));var k=De;if(De|=4,Ob(f.current),_b(f,f.current,y,o),De=k,Ui(0,!1),Kt&&typeof Kt.onPostCommitFiberRoot=="function")try{Kt.onPostCommitFiberRoot(Wa,f)}catch{}return!0}finally{I.p=c,V.T=a,Xb(e,t)}}function Jb(e,t,o){t=tr(o,t),t=Zu(e.stateNode,t,2),e=bn(e,t,2),e!==null&&(ti(e,2),Nr(e))}function Ue(e,t,o){if(e.tag===3)Jb(e,e,o);else for(;t!==null;){if(t.tag===3){Jb(t,e,o);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Cn===null||!Cn.has(a))){e=tr(o,e),o=rb(2),a=bn(t,o,2),a!==null&&(nb(o,a,t,e),ti(a,2),Nr(a));break}}t=t.return}}function Af(e,t,o){var a=e.pingCache;if(a===null){a=e.pingCache=new t2;var c=new Set;a.set(t,c)}else c=a.get(t),c===void 0&&(c=new Set,a.set(t,c));c.has(o)||(mf=!0,c.add(o),e=i2.bind(null,e,t,o),t.then(e,e))}function i2(e,t,o){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&o,e.warmLanes&=~o,Ke===e&&(Ee&o)===o&&(Ye===4||Ye===3&&(Ee&62914560)===Ee&&300>ce()-bf?(De&2)===0&&pa(e,0):pf|=o,fa===Ee&&(fa=0)),Nr(e)}function Wb(e,t){t===0&&(t=Im()),e=Zo(e,t),e!==null&&(ti(e,t),Nr(e))}function l2(e){var t=e.memoizedState,o=0;t!==null&&(o=t.retryLane),Wb(e,o)}function s2(e,t){var o=0;switch(e.tag){case 13:var a=e.stateNode,c=e.memoizedState;c!==null&&(o=c.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(l(314))}a!==null&&a.delete(t),Wb(e,o)}function c2(e,t){return zr(e,t)}var Us=null,ba=null,kf=!1,Ks=!1,Cf=!1,mo=0;function Nr(e){e!==ba&&e.next===null&&(ba===null?Us=ba=e:ba=ba.next=e),Ks=!0,kf||(kf=!0,u2())}function Ui(e,t){if(!Cf&&Ks){Cf=!0;do for(var o=!1,a=Us;a!==null;){if(e!==0){var c=a.pendingLanes;if(c===0)var f=0;else{var y=a.suspendedLanes,k=a.pingedLanes;f=(1<<31-Lt(42|e)+1)-1,f&=c&~(y&~k),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(o=!0,n0(a,f))}else f=Ee,f=Ql(a,a===Ke?f:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(f&3)===0||ei(a,f)||(o=!0,n0(a,f));a=a.next}while(o);Cf=!1}}function d2(){e0()}function e0(){Ks=kf=!1;var e=0;mo!==0&&(v2()&&(e=mo),mo=0);for(var t=ce(),o=null,a=Us;a!==null;){var c=a.next,f=t0(a,t);f===0?(a.next=null,o===null?Us=c:o.next=c,c===null&&(ba=o)):(o=a,(e!==0||(f&3)!==0)&&(Ks=!0)),a=c}Ui(e)}function t0(e,t){for(var o=e.suspendedLanes,a=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Lt(f),k=1<<y,O=c[y];O===-1?((k&o)===0||(k&a)!==0)&&(c[y]=$y(k,t)):O<=t&&(e.expiredLanes|=k),f&=~k}if(t=Ke,o=Ee,o=Ql(e,e===t?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,o===0||e===t&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&fr(a),e.callbackNode=null,e.callbackPriority=0;if((o&3)===0||ei(e,o)){if(t=o&-o,t===e.callbackPriority)return t;switch(a!==null&&fr(a),Ld(o)){case 2:case 8:o=Tt;break;case 32:o=Hl;break;case 268435456:o=Vm;break;default:o=Hl}return a=r0.bind(null,e),o=zr(o,a),e.callbackPriority=t,e.callbackNode=o,t}return a!==null&&a!==null&&fr(a),e.callbackPriority=2,e.callbackNode=null,2}function r0(e,t){if(pt!==0&&pt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var o=e.callbackNode;if(Bs()&&e.callbackNode!==o)return null;var a=Ee;return a=Ql(e,e===Ke?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Ub(e,a,t),t0(e,ce()),e.callbackNode!=null&&e.callbackNode===o?r0.bind(null,e):null)}function n0(e,t){if(Bs())return null;Ub(e,t,!0)}function u2(){j2(function(){(De&6)!==0?zr(ht,d2):e0()})}function Ef(){return mo===0&&(mo=Gm()),mo}function o0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xl(""+e)}function a0(e,t){var o=t.ownerDocument.createElement("input");return o.name=t.name,o.value=t.value,e.id&&o.setAttribute("form",e.id),t.parentNode.insertBefore(o,t),e=new FormData(e),o.parentNode.removeChild(o),e}function f2(e,t,o,a,c){if(t==="submit"&&o&&o.stateNode===c){var f=o0((c[Nt]||null).action),y=a.submitter;y&&(t=(t=y[Nt]||null)?o0(t.formAction):y.getAttribute("formAction"),t!==null&&(f=t,y=null));var k=new es("action","action",null,a,c);e.push({event:k,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(mo!==0){var O=y?a0(c,y):new FormData(c);Yu(o,{pending:!0,data:O,method:c.method,action:f},null,O)}}else typeof f=="function"&&(k.preventDefault(),O=y?a0(c,y):new FormData(c),Yu(o,{pending:!0,data:O,method:c.method,action:f},f,O))},currentTarget:c}]})}}for(var Tf=0;Tf<uu.length;Tf++){var Nf=uu[Tf],h2=Nf.toLowerCase(),m2=Nf[0].toUpperCase()+Nf.slice(1);hr(h2,"on"+m2)}hr(Up,"onAnimationEnd"),hr(Kp,"onAnimationIteration"),hr(Lp,"onAnimationStart"),hr("dblclick","onDoubleClick"),hr("focusin","onFocus"),hr("focusout","onBlur"),hr(_5,"onTransitionRun"),hr(R5,"onTransitionStart"),hr(D5,"onTransitionCancel"),hr(Pp,"onTransitionEnd"),Po("onMouseEnter",["mouseout","mouseover"]),Po("onMouseLeave",["mouseout","mouseover"]),Po("onPointerEnter",["pointerout","pointerover"]),Po("onPointerLeave",["pointerout","pointerover"]),Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ki));function i0(e,t){t=(t&4)!==0;for(var o=0;o<e.length;o++){var a=e[o],c=a.event;a=a.listeners;e:{var f=void 0;if(t)for(var y=a.length-1;0<=y;y--){var k=a[y],O=k.instance,F=k.currentTarget;if(k=k.listener,O!==f&&c.isPropagationStopped())break e;f=k,c.currentTarget=F;try{f(c)}catch(Z){Cs(Z)}c.currentTarget=null,f=O}else for(y=0;y<a.length;y++){if(k=a[y],O=k.instance,F=k.currentTarget,k=k.listener,O!==f&&c.isPropagationStopped())break e;f=k,c.currentTarget=F;try{f(c)}catch(Z){Cs(Z)}c.currentTarget=null,f=O}}}}function Ce(e,t){var o=t[Pd];o===void 0&&(o=t[Pd]=new Set);var a=e+"__bubble";o.has(a)||(l0(t,e,2,!1),o.add(a))}function Mf(e,t,o){var a=0;t&&(a|=4),l0(o,e,a,t)}var Ls="_reactListening"+Math.random().toString(36).slice(2);function _f(e){if(!e[Ls]){e[Ls]=!0,ep.forEach(function(o){o!=="selectionchange"&&(p2.has(o)||Mf(o,!1,e),Mf(o,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ls]||(t[Ls]=!0,Mf("selectionchange",!1,t))}}function l0(e,t,o,a){switch(_0(t)){case 2:var c=H2;break;case 8:c=q2;break;default:c=Qf}o=c.bind(null,t,o,e),c=void 0,!Jd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),a?c!==void 0?e.addEventListener(t,o,{capture:!0,passive:c}):e.addEventListener(t,o,!0):c!==void 0?e.addEventListener(t,o,{passive:c}):e.addEventListener(t,o,!1)}function Rf(e,t,o,a,c){var f=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var y=a.tag;if(y===3||y===4){var k=a.stateNode.containerInfo;if(k===c)break;if(y===4)for(y=a.return;y!==null;){var O=y.tag;if((O===3||O===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;k!==null;){if(y=Uo(k),y===null)return;if(O=y.tag,O===5||O===6||O===26||O===27){a=f=y;continue e}k=k.parentNode}}a=a.return}mp(function(){var F=f,Z=Xd(o),re=[];e:{var Q=Hp.get(e);if(Q!==void 0){var G=es,be=e;switch(e){case"keypress":if(Jl(o)===0)break e;case"keydown":case"keyup":G=c5;break;case"focusin":be="focus",G=ru;break;case"focusout":be="blur",G=ru;break;case"beforeblur":case"afterblur":G=ru;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":G=bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":G=Zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":G=f5;break;case Up:case Kp:case Lp:G=e5;break;case Pp:G=m5;break;case"scroll":case"scrollend":G=Iy;break;case"wheel":G=g5;break;case"copy":case"cut":case"paste":G=r5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":G=vp;break;case"toggle":case"beforetoggle":G=x5}var pe=(t&4)!==0,Be=!pe&&(e==="scroll"||e==="scrollend"),P=pe?Q!==null?Q+"Capture":null:Q;pe=[];for(var K=F,H;K!==null;){var ee=K;if(H=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||H===null||P===null||(ee=oi(K,P),ee!=null&&pe.push(Li(K,ee,H))),Be)break;K=K.return}0<pe.length&&(Q=new G(Q,be,null,o,Z),re.push({event:Q,listeners:pe}))}}if((t&7)===0){e:{if(Q=e==="mouseover"||e==="pointerover",G=e==="mouseout"||e==="pointerout",Q&&o!==Id&&(be=o.relatedTarget||o.fromElement)&&(Uo(be)||be[Bo]))break e;if((G||Q)&&(Q=Z.window===Z?Z:(Q=Z.ownerDocument)?Q.defaultView||Q.parentWindow:window,G?(be=o.relatedTarget||o.toElement,G=F,be=be?Uo(be):null,be!==null&&(Be=u(be),pe=be.tag,be!==Be||pe!==5&&pe!==27&&pe!==6)&&(be=null)):(G=null,be=F),G!==be)){if(pe=bp,ee="onMouseLeave",P="onMouseEnter",K="mouse",(e==="pointerout"||e==="pointerover")&&(pe=vp,ee="onPointerLeave",P="onPointerEnter",K="pointer"),Be=G==null?Q:ni(G),H=be==null?Q:ni(be),Q=new pe(ee,K+"leave",G,o,Z),Q.target=Be,Q.relatedTarget=H,ee=null,Uo(Z)===F&&(pe=new pe(P,K+"enter",be,o,Z),pe.target=H,pe.relatedTarget=Be,ee=pe),Be=ee,G&&be)t:{for(pe=G,P=be,K=0,H=pe;H;H=xa(H))K++;for(H=0,ee=P;ee;ee=xa(ee))H++;for(;0<K-H;)pe=xa(pe),K--;for(;0<H-K;)P=xa(P),H--;for(;K--;){if(pe===P||P!==null&&pe===P.alternate)break t;pe=xa(pe),P=xa(P)}pe=null}else pe=null;G!==null&&s0(re,Q,G,pe,!1),be!==null&&Be!==null&&s0(re,Be,be,pe,!0)}}e:{if(Q=F?ni(F):window,G=Q.nodeName&&Q.nodeName.toLowerCase(),G==="select"||G==="input"&&Q.type==="file")var ue=Ep;else if(kp(Q))if(Tp)ue=T5;else{ue=C5;var Ae=k5}else G=Q.nodeName,!G||G.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?F&&Gd(F.elementType)&&(ue=Ep):ue=E5;if(ue&&(ue=ue(e,F))){Cp(re,ue,o,Z);break e}Ae&&Ae(e,Q,F),e==="focusout"&&F&&Q.type==="number"&&F.memoizedProps.value!=null&&Vd(Q,"number",Q.value)}switch(Ae=F?ni(F):window,e){case"focusin":(kp(Ae)||Ae.contentEditable==="true")&&(Go=Ae,su=F,fi=null);break;case"focusout":fi=su=Go=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,$p(re,o,Z);break;case"selectionchange":if(M5)break;case"keydown":case"keyup":$p(re,o,Z)}var me;if(ou)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Vo?Sp(e,o)&&(ge="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(ge="onCompositionStart");ge&&(yp&&o.locale!=="ko"&&(Vo||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Vo&&(me=pp()):(hn=Z,Wd="value"in hn?hn.value:hn.textContent,Vo=!0)),Ae=Ps(F,ge),0<Ae.length&&(ge=new xp(ge,e,null,o,Z),re.push({event:ge,listeners:Ae}),me?ge.data=me:(me=Ap(o),me!==null&&(ge.data=me)))),(me=y5?j5(e,o):w5(e,o))&&(ge=Ps(F,"onBeforeInput"),0<ge.length&&(Ae=new xp("onBeforeInput","beforeinput",null,o,Z),re.push({event:Ae,listeners:ge}),Ae.data=me)),f2(re,e,F,o,Z)}i0(re,t)})}function Li(e,t,o){return{instance:e,listener:t,currentTarget:o}}function Ps(e,t){for(var o=t+"Capture",a=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=oi(e,o),c!=null&&a.unshift(Li(e,c,f)),c=oi(e,t),c!=null&&a.push(Li(e,c,f))),e.tag===3)return a;e=e.return}return[]}function xa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function s0(e,t,o,a,c){for(var f=t._reactName,y=[];o!==null&&o!==a;){var k=o,O=k.alternate,F=k.stateNode;if(k=k.tag,O!==null&&O===a)break;k!==5&&k!==26&&k!==27||F===null||(O=F,c?(F=oi(o,f),F!=null&&y.unshift(Li(o,F,O))):c||(F=oi(o,f),F!=null&&y.push(Li(o,F,O)))),o=o.return}y.length!==0&&e.push({event:t,listeners:y})}var g2=/\r\n?/g,b2=/\u0000|\uFFFD/g;function c0(e){return(typeof e=="string"?e:""+e).replace(g2,`
`).replace(b2,"")}function d0(e,t){return t=c0(t),c0(e)===t}function Hs(){}function $e(e,t,o,a,c,f){switch(o){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Fo(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Fo(e,""+a);break;case"className":Vl(e,"class",a);break;case"tabIndex":Vl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Vl(e,o,a);break;case"style":fp(e,a,f);break;case"data":if(t!=="object"){Vl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||o!=="href")){e.removeAttribute(o);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(o);break}a=Xl(""+a),e.setAttribute(o,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(o==="formAction"?(t!=="input"&&$e(e,t,"name",c.name,c,null),$e(e,t,"formEncType",c.formEncType,c,null),$e(e,t,"formMethod",c.formMethod,c,null),$e(e,t,"formTarget",c.formTarget,c,null)):($e(e,t,"encType",c.encType,c,null),$e(e,t,"method",c.method,c,null),$e(e,t,"target",c.target,c,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(o);break}a=Xl(""+a),e.setAttribute(o,a);break;case"onClick":a!=null&&(e.onclick=Hs);break;case"onScroll":a!=null&&Ce("scroll",e);break;case"onScrollEnd":a!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(o=a.__html,o!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=o}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}o=Xl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(o,""+a):e.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(o,""):e.removeAttribute(o);break;case"capture":case"download":a===!0?e.setAttribute(o,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(o,a):e.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(o,a):e.removeAttribute(o);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(o):e.setAttribute(o,a);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),Yl(e,"popover",a);break;case"xlinkActuate":$r(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":$r(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":$r(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":$r(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":$r(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":$r(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":$r(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":$r(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":$r(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Yl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Vy.get(o)||o,Yl(e,o,a))}}function Df(e,t,o,a,c,f){switch(o){case"style":fp(e,a,f);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(o=a.__html,o!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=o}}break;case"children":typeof a=="string"?Fo(e,a):(typeof a=="number"||typeof a=="bigint")&&Fo(e,""+a);break;case"onScroll":a!=null&&Ce("scroll",e);break;case"onScrollEnd":a!=null&&Ce("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Hs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tp.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(c=o.endsWith("Capture"),t=o.slice(2,c?o.length-7:void 0),f=e[Nt]||null,f=f!=null?f[o]:null,typeof f=="function"&&e.removeEventListener(t,f,c),typeof a=="function")){typeof f!="function"&&f!==null&&(o in e?e[o]=null:e.hasAttribute(o)&&e.removeAttribute(o)),e.addEventListener(t,a,c);break e}o in e?e[o]=a:a===!0?e.setAttribute(o,""):Yl(e,o,a)}}}function gt(e,t,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var a=!1,c=!1,f;for(f in o)if(o.hasOwnProperty(f)){var y=o[f];if(y!=null)switch(f){case"src":a=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:$e(e,t,f,y,o,null)}}c&&$e(e,t,"srcSet",o.srcSet,o,null),a&&$e(e,t,"src",o.src,o,null);return;case"input":Ce("invalid",e);var k=f=y=c=null,O=null,F=null;for(a in o)if(o.hasOwnProperty(a)){var Z=o[a];if(Z!=null)switch(a){case"name":c=Z;break;case"type":y=Z;break;case"checked":O=Z;break;case"defaultChecked":F=Z;break;case"value":f=Z;break;case"defaultValue":k=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(l(137,t));break;default:$e(e,t,a,Z,o,null)}}sp(e,f,k,O,F,y,c,!1),Gl(e);return;case"select":Ce("invalid",e),a=y=f=null;for(c in o)if(o.hasOwnProperty(c)&&(k=o[c],k!=null))switch(c){case"value":f=k;break;case"defaultValue":y=k;break;case"multiple":a=k;default:$e(e,t,c,k,o,null)}t=f,o=y,e.multiple=!!a,t!=null?qo(e,!!a,t,!1):o!=null&&qo(e,!!a,o,!0);return;case"textarea":Ce("invalid",e),f=c=a=null;for(y in o)if(o.hasOwnProperty(y)&&(k=o[y],k!=null))switch(y){case"value":a=k;break;case"defaultValue":c=k;break;case"children":f=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(l(91));break;default:$e(e,t,y,k,o,null)}dp(e,a,c,f),Gl(e);return;case"option":for(O in o)if(o.hasOwnProperty(O)&&(a=o[O],a!=null))switch(O){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:$e(e,t,O,a,o,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(a=0;a<Ki.length;a++)Ce(Ki[a],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(F in o)if(o.hasOwnProperty(F)&&(a=o[F],a!=null))switch(F){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:$e(e,t,F,a,o,null)}return;default:if(Gd(t)){for(Z in o)o.hasOwnProperty(Z)&&(a=o[Z],a!==void 0&&Df(e,t,Z,a,o,void 0));return}}for(k in o)o.hasOwnProperty(k)&&(a=o[k],a!=null&&$e(e,t,k,a,o,null))}function x2(e,t,o,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,k=null,O=null,F=null,Z=null;for(G in o){var re=o[G];if(o.hasOwnProperty(G)&&re!=null)switch(G){case"checked":break;case"value":break;case"defaultValue":O=re;default:a.hasOwnProperty(G)||$e(e,t,G,null,a,re)}}for(var Q in a){var G=a[Q];if(re=o[Q],a.hasOwnProperty(Q)&&(G!=null||re!=null))switch(Q){case"type":f=G;break;case"name":c=G;break;case"checked":F=G;break;case"defaultChecked":Z=G;break;case"value":y=G;break;case"defaultValue":k=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(l(137,t));break;default:G!==re&&$e(e,t,Q,G,a,re)}}Yd(e,y,k,O,F,Z,f,c);return;case"select":G=y=k=Q=null;for(f in o)if(O=o[f],o.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":G=O;default:a.hasOwnProperty(f)||$e(e,t,f,null,a,O)}for(c in a)if(f=a[c],O=o[c],a.hasOwnProperty(c)&&(f!=null||O!=null))switch(c){case"value":Q=f;break;case"defaultValue":k=f;break;case"multiple":y=f;default:f!==O&&$e(e,t,c,f,a,O)}t=k,o=y,a=G,Q!=null?qo(e,!!o,Q,!1):!!a!=!!o&&(t!=null?qo(e,!!o,t,!0):qo(e,!!o,o?[]:"",!1));return;case"textarea":G=Q=null;for(k in o)if(c=o[k],o.hasOwnProperty(k)&&c!=null&&!a.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:$e(e,t,k,null,a,c)}for(y in a)if(c=a[y],f=o[y],a.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":Q=c;break;case"defaultValue":G=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(l(91));break;default:c!==f&&$e(e,t,y,c,a,f)}cp(e,Q,G);return;case"option":for(var be in o)if(Q=o[be],o.hasOwnProperty(be)&&Q!=null&&!a.hasOwnProperty(be))switch(be){case"selected":e.selected=!1;break;default:$e(e,t,be,null,a,Q)}for(O in a)if(Q=a[O],G=o[O],a.hasOwnProperty(O)&&Q!==G&&(Q!=null||G!=null))switch(O){case"selected":e.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:$e(e,t,O,Q,a,G)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in o)Q=o[pe],o.hasOwnProperty(pe)&&Q!=null&&!a.hasOwnProperty(pe)&&$e(e,t,pe,null,a,Q);for(F in a)if(Q=a[F],G=o[F],a.hasOwnProperty(F)&&Q!==G&&(Q!=null||G!=null))switch(F){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(l(137,t));break;default:$e(e,t,F,Q,a,G)}return;default:if(Gd(t)){for(var Be in o)Q=o[Be],o.hasOwnProperty(Be)&&Q!==void 0&&!a.hasOwnProperty(Be)&&Df(e,t,Be,void 0,a,Q);for(Z in a)Q=a[Z],G=o[Z],!a.hasOwnProperty(Z)||Q===G||Q===void 0&&G===void 0||Df(e,t,Z,Q,a,G);return}}for(var P in o)Q=o[P],o.hasOwnProperty(P)&&Q!=null&&!a.hasOwnProperty(P)&&$e(e,t,P,null,a,Q);for(re in a)Q=a[re],G=o[re],!a.hasOwnProperty(re)||Q===G||Q==null&&G==null||$e(e,t,re,Q,a,G)}var Of=null,zf=null;function qs(e){return e.nodeType===9?e:e.ownerDocument}function u0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function $f(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bf=null;function v2(){var e=window.event;return e&&e.type==="popstate"?e===Bf?!1:(Bf=e,!0):(Bf=null,!1)}var h0=typeof setTimeout=="function"?setTimeout:void 0,y2=typeof clearTimeout=="function"?clearTimeout:void 0,m0=typeof Promise=="function"?Promise:void 0,j2=typeof queueMicrotask=="function"?queueMicrotask:typeof m0<"u"?function(e){return m0.resolve(null).then(e).catch(w2)}:h0;function w2(e){setTimeout(function(){throw e})}function Nn(e){return e==="head"}function p0(e,t){var o=t,a=0,c=0;do{var f=o.nextSibling;if(e.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(0<a&&8>a){o=a;var y=e.ownerDocument;if(o&1&&Pi(y.documentElement),o&2&&Pi(y.body),o&4)for(o=y.head,Pi(o),y=o.firstChild;y;){var k=y.nextSibling,O=y.nodeName;y[ri]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&y.rel.toLowerCase()==="stylesheet"||o.removeChild(y),y=k}}if(c===0){e.removeChild(f),Ii(t);return}c--}else o==="$"||o==="$?"||o==="$!"?c++:a=o.charCodeAt(0)-48;else a=0;o=f}while(o);Ii(t)}function Uf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var o=t;switch(t=t.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Uf(o),Hd(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}e.removeChild(o)}}function S2(e,t,o,a){for(;e.nodeType===1;){var c=o;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ri])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=pr(e.nextSibling),e===null)break}return null}function A2(e,t,o){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!o||(e=pr(e.nextSibling),e===null))return null;return e}function Kf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function k2(e,t){var o=e.ownerDocument;if(e.data!=="$?"||o.readyState==="complete")t();else{var a=function(){t(),o.removeEventListener("DOMContentLoaded",a)};o.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function pr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Lf=null;function g0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(t===0)return e;t--}else o==="/$"&&t++}e=e.previousSibling}return null}function b0(e,t,o){switch(t=qs(o),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Pi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Hd(e)}var lr=new Map,x0=new Set;function Fs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Xr=I.d;I.d={f:C2,r:E2,D:T2,C:N2,L:M2,m:_2,X:D2,S:R2,M:O2};function C2(){var e=Xr.f(),t=zs();return e||t}function E2(e){var t=Ko(e);t!==null&&t.tag===5&&t.type==="form"?Ug(t):Xr.r(e)}var va=typeof document>"u"?null:document;function v0(e,t,o){var a=va;if(a&&typeof t=="string"&&t){var c=er(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof o=="string"&&(c+='[crossorigin="'+o+'"]'),x0.has(c)||(x0.add(c),e={rel:e,crossOrigin:o,href:t},a.querySelector(c)===null&&(t=a.createElement("link"),gt(t,"link",e),it(t),a.head.appendChild(t)))}}function T2(e){Xr.D(e),v0("dns-prefetch",e,null)}function N2(e,t){Xr.C(e,t),v0("preconnect",e,t)}function M2(e,t,o){Xr.L(e,t,o);var a=va;if(a&&e&&t){var c='link[rel="preload"][as="'+er(t)+'"]';t==="image"&&o&&o.imageSrcSet?(c+='[imagesrcset="'+er(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(c+='[imagesizes="'+er(o.imageSizes)+'"]')):c+='[href="'+er(e)+'"]';var f=c;switch(t){case"style":f=ya(e);break;case"script":f=ja(e)}lr.has(f)||(e=v({rel:"preload",href:t==="image"&&o&&o.imageSrcSet?void 0:e,as:t},o),lr.set(f,e),a.querySelector(c)!==null||t==="style"&&a.querySelector(Hi(f))||t==="script"&&a.querySelector(qi(f))||(t=a.createElement("link"),gt(t,"link",e),it(t),a.head.appendChild(t)))}}function _2(e,t){Xr.m(e,t);var o=va;if(o&&e){var a=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+er(a)+'"][href="'+er(e)+'"]',f=c;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ja(e)}if(!lr.has(f)&&(e=v({rel:"modulepreload",href:e},t),lr.set(f,e),o.querySelector(c)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(qi(f)))return}a=o.createElement("link"),gt(a,"link",e),it(a),o.head.appendChild(a)}}}function R2(e,t,o){Xr.S(e,t,o);var a=va;if(a&&e){var c=Lo(a).hoistableStyles,f=ya(e);t=t||"default";var y=c.get(f);if(!y){var k={loading:0,preload:null};if(y=a.querySelector(Hi(f)))k.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},o),(o=lr.get(f))&&Pf(e,o);var O=y=a.createElement("link");it(O),gt(O,"link",e),O._p=new Promise(function(F,Z){O.onload=F,O.onerror=Z}),O.addEventListener("load",function(){k.loading|=1}),O.addEventListener("error",function(){k.loading|=2}),k.loading|=4,Qs(y,t,a)}y={type:"stylesheet",instance:y,count:1,state:k},c.set(f,y)}}}function D2(e,t){Xr.X(e,t);var o=va;if(o&&e){var a=Lo(o).hoistableScripts,c=ja(e),f=a.get(c);f||(f=o.querySelector(qi(c)),f||(e=v({src:e,async:!0},t),(t=lr.get(c))&&Hf(e,t),f=o.createElement("script"),it(f),gt(f,"link",e),o.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},a.set(c,f))}}function O2(e,t){Xr.M(e,t);var o=va;if(o&&e){var a=Lo(o).hoistableScripts,c=ja(e),f=a.get(c);f||(f=o.querySelector(qi(c)),f||(e=v({src:e,async:!0,type:"module"},t),(t=lr.get(c))&&Hf(e,t),f=o.createElement("script"),it(f),gt(f,"link",e),o.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},a.set(c,f))}}function y0(e,t,o,a){var c=(c=oe.current)?Fs(c):null;if(!c)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(t=ya(o.href),o=Lo(c).hoistableStyles,a=o.get(t),a||(a={type:"style",instance:null,count:0,state:null},o.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){e=ya(o.href);var f=Lo(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(Hi(e)))&&!f._p&&(y.instance=f,y.state.loading=5),lr.has(e)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},lr.set(e,o),f||z2(c,e,o,y.state))),t&&a===null)throw Error(l(528,""));return y}if(t&&a!==null)throw Error(l(529,""));return null;case"script":return t=o.async,o=o.src,typeof o=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ja(o),o=Lo(c).hoistableScripts,a=o.get(t),a||(a={type:"script",instance:null,count:0,state:null},o.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function ya(e){return'href="'+er(e)+'"'}function Hi(e){return'link[rel="stylesheet"]['+e+"]"}function j0(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function z2(e,t,o,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),gt(t,"link",o),it(t),e.head.appendChild(t))}function ja(e){return'[src="'+er(e)+'"]'}function qi(e){return"script[async]"+e}function w0(e,t,o){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+er(o.href)+'"]');if(a)return t.instance=a,it(a),a;var c=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),it(a),gt(a,"style",c),Qs(a,o.precedence,e),t.instance=a;case"stylesheet":c=ya(o.href);var f=e.querySelector(Hi(c));if(f)return t.state.loading|=4,t.instance=f,it(f),f;a=j0(o),(c=lr.get(c))&&Pf(a,c),f=(e.ownerDocument||e).createElement("link"),it(f);var y=f;return y._p=new Promise(function(k,O){y.onload=k,y.onerror=O}),gt(f,"link",a),t.state.loading|=4,Qs(f,o.precedence,e),t.instance=f;case"script":return f=ja(o.src),(c=e.querySelector(qi(f)))?(t.instance=c,it(c),c):(a=o,(c=lr.get(f))&&(a=v({},o),Hf(a,c)),e=e.ownerDocument||e,c=e.createElement("script"),it(c),gt(c,"link",a),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Qs(a,o.precedence,e));return t.instance}function Qs(e,t,o){for(var a=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=a.length?a[a.length-1]:null,f=c,y=0;y<a.length;y++){var k=a[y];if(k.dataset.precedence===t)f=k;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=o.nodeType===9?o.head:o,t.insertBefore(e,t.firstChild))}function Pf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Hf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ys=null;function S0(e,t,o){if(Ys===null){var a=new Map,c=Ys=new Map;c.set(o,a)}else c=Ys,a=c.get(o),a||(a=new Map,c.set(o,a));if(a.has(e))return a;for(a.set(e,null),o=o.getElementsByTagName(e),c=0;c<o.length;c++){var f=o[c];if(!(f[ri]||f[vt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(t)||"";y=e+y;var k=a.get(y);k?k.push(f):a.set(y,[f])}}return a}function A0(e,t,o){e=e.ownerDocument||e,e.head.insertBefore(o,t==="title"?e.querySelector("head > title"):null)}function $2(e,t,o){if(o===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function k0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Fi=null;function B2(){}function U2(e,t,o){if(Fi===null)throw Error(l(475));var a=Fi;if(t.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var c=ya(o.href),f=e.querySelector(Hi(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Vs.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=f,it(f);return}f=e.ownerDocument||e,o=j0(o),(c=lr.get(c))&&Pf(o,c),f=f.createElement("link"),it(f);var y=f;y._p=new Promise(function(k,O){y.onload=k,y.onerror=O}),gt(f,"link",o),t.instance=f}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Vs.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}function K2(){if(Fi===null)throw Error(l(475));var e=Fi;return e.stylesheets&&e.count===0&&qf(e,e.stylesheets),0<e.count?function(t){var o=setTimeout(function(){if(e.stylesheets&&qf(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(o)}}:null}function Vs(){if(this.count--,this.count===0){if(this.stylesheets)qf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gs=null;function qf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gs=new Map,t.forEach(L2,e),Gs=null,Vs.call(e))}function L2(e,t){if(!(t.state.loading&4)){var o=Gs.get(e);if(o)var a=o.get(null);else{o=new Map,Gs.set(e,o);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(o.set(y.dataset.precedence,y),a=y)}a&&o.set(null,a)}c=t.instance,y=c.getAttribute("data-precedence"),f=o.get(y)||a,f===a&&o.set(null,c),o.set(y,c),this.count++,a=Vs.bind(this),c.addEventListener("load",a),c.addEventListener("error",a),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var Qi={$$typeof:T,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function P2(e,t,o,a,c,f,y,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ud(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ud(0),this.hiddenUpdates=Ud(null),this.identifierPrefix=a,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function C0(e,t,o,a,c,f,y,k,O,F,Z,re){return e=new P2(e,t,o,y,k,O,F,re),t=1,f===!0&&(t|=24),f=Ht(3,null,null,t),e.current=f,f.stateNode=e,t=Su(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:a,isDehydrated:o,cache:t},Eu(f),e}function E0(e){return e?(e=Jo,e):Jo}function T0(e,t,o,a,c,f){c=E0(c),a.context===null?a.context=c:a.pendingContext=c,a=gn(t),a.payload={element:o},f=f===void 0?null:f,f!==null&&(a.callback=f),o=bn(e,a,t),o!==null&&(Vt(o,e,t),ji(o,e,t))}function N0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<t?o:t}}function Ff(e,t){N0(e,t),(e=e.alternate)&&N0(e,t)}function M0(e){if(e.tag===13){var t=Zo(e,67108864);t!==null&&Vt(t,e,67108864),Ff(e,67108864)}}var Is=!0;function H2(e,t,o,a){var c=V.T;V.T=null;var f=I.p;try{I.p=2,Qf(e,t,o,a)}finally{I.p=f,V.T=c}}function q2(e,t,o,a){var c=V.T;V.T=null;var f=I.p;try{I.p=8,Qf(e,t,o,a)}finally{I.p=f,V.T=c}}function Qf(e,t,o,a){if(Is){var c=Yf(a);if(c===null)Rf(e,t,a,Xs,o),R0(e,a);else if(Q2(c,e,t,o,a))a.stopPropagation();else if(R0(e,a),t&4&&-1<F2.indexOf(e)){for(;c!==null;){var f=Ko(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Xn(f.pendingLanes);if(y!==0){var k=f;for(k.pendingLanes|=2,k.entangledLanes|=2;y;){var O=1<<31-Lt(y);k.entanglements[1]|=O,y&=~O}Nr(f),(De&6)===0&&(Ds=ce()+500,Ui(0))}}break;case 13:k=Zo(f,2),k!==null&&Vt(k,f,2),zs(),Ff(f,2)}if(f=Yf(a),f===null&&Rf(e,t,a,Xs,o),f===c)break;c=f}c!==null&&a.stopPropagation()}else Rf(e,t,a,null,o)}}function Yf(e){return e=Xd(e),Vf(e)}var Xs=null;function Vf(e){if(Xs=null,e=Uo(e),e!==null){var t=u(e);if(t===null)e=null;else{var o=t.tag;if(o===13){if(e=h(t),e!==null)return e;e=null}else if(o===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Xs=e,null}function _0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(In()){case ht:return 2;case Tt:return 8;case Hl:case My:return 32;case Vm:return 268435456;default:return 32}default:return 32}}var Gf=!1,Mn=null,_n=null,Rn=null,Yi=new Map,Vi=new Map,Dn=[],F2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function R0(e,t){switch(e){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Yi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(t.pointerId)}}function Gi(e,t,o,a,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:o,eventSystemFlags:a,nativeEvent:f,targetContainers:[c]},t!==null&&(t=Ko(t),t!==null&&M0(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function Q2(e,t,o,a,c){switch(t){case"focusin":return Mn=Gi(Mn,e,t,o,a,c),!0;case"dragenter":return _n=Gi(_n,e,t,o,a,c),!0;case"mouseover":return Rn=Gi(Rn,e,t,o,a,c),!0;case"pointerover":var f=c.pointerId;return Yi.set(f,Gi(Yi.get(f)||null,e,t,o,a,c)),!0;case"gotpointercapture":return f=c.pointerId,Vi.set(f,Gi(Vi.get(f)||null,e,t,o,a,c)),!0}return!1}function D0(e){var t=Uo(e.target);if(t!==null){var o=u(t);if(o!==null){if(t=o.tag,t===13){if(t=h(o),t!==null){e.blockedOn=t,Uy(e.priority,function(){if(o.tag===13){var a=Yt();a=Kd(a);var c=Zo(o,a);c!==null&&Vt(c,o,a),Ff(o,a)}});return}}else if(t===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var o=Yf(e.nativeEvent);if(o===null){o=e.nativeEvent;var a=new o.constructor(o.type,o);Id=a,o.target.dispatchEvent(a),Id=null}else return t=Ko(o),t!==null&&M0(t),e.blockedOn=o,!1;t.shift()}return!0}function O0(e,t,o){Zs(e)&&o.delete(t)}function Y2(){Gf=!1,Mn!==null&&Zs(Mn)&&(Mn=null),_n!==null&&Zs(_n)&&(_n=null),Rn!==null&&Zs(Rn)&&(Rn=null),Yi.forEach(O0),Vi.forEach(O0)}function Js(e,t){e.blockedOn===t&&(e.blockedOn=null,Gf||(Gf=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Y2)))}var Ws=null;function z0(e){Ws!==e&&(Ws=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ws===e&&(Ws=null);for(var t=0;t<e.length;t+=3){var o=e[t],a=e[t+1],c=e[t+2];if(typeof a!="function"){if(Vf(a||o)===null)continue;break}var f=Ko(o);f!==null&&(e.splice(t,3),t-=3,Yu(f,{pending:!0,data:c,method:o.method,action:a},a,c))}}))}function Ii(e){function t(O){return Js(O,e)}Mn!==null&&Js(Mn,e),_n!==null&&Js(_n,e),Rn!==null&&Js(Rn,e),Yi.forEach(t),Vi.forEach(t);for(var o=0;o<Dn.length;o++){var a=Dn[o];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Dn.length&&(o=Dn[0],o.blockedOn===null);)D0(o),o.blockedOn===null&&Dn.shift();if(o=(e.ownerDocument||e).$$reactFormReplay,o!=null)for(a=0;a<o.length;a+=3){var c=o[a],f=o[a+1],y=c[Nt]||null;if(typeof f=="function")y||z0(o);else if(y){var k=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[Nt]||null)k=y.formAction;else if(Vf(c)!==null)continue}else k=y.action;typeof k=="function"?o[a+1]=k:(o.splice(a,3),a-=3),z0(o)}}}function If(e){this._internalRoot=e}ec.prototype.render=If.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var o=t.current,a=Yt();T0(o,a,e,t,null,null)},ec.prototype.unmount=If.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;T0(e.current,2,null,e,null,null),zs(),t[Bo]=null}};function ec(e){this._internalRoot=e}ec.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jm();e={blockedOn:null,target:e,priority:t};for(var o=0;o<Dn.length&&t!==0&&t<Dn[o].priority;o++);Dn.splice(o,0,e),o===0&&D0(e)}};var $0=i.version;if($0!=="19.1.0")throw Error(l(527,$0,"19.1.0"));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=b(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var V2={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{Wa=tc.inject(V2),Kt=tc}catch{}}return Zi.createRoot=function(e,t){if(!d(e))throw Error(l(299));var o=!1,a="",c=Jg,f=Wg,y=eb,k=null;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(k=t.unstable_transitionCallbacks)),t=C0(e,1,!1,null,null,o,a,c,f,y,k,null),e[Bo]=t.current,_f(e),new If(t)},Zi.hydrateRoot=function(e,t,o){if(!d(e))throw Error(l(299));var a=!1,c="",f=Jg,y=Wg,k=eb,O=null,F=null;return o!=null&&(o.unstable_strictMode===!0&&(a=!0),o.identifierPrefix!==void 0&&(c=o.identifierPrefix),o.onUncaughtError!==void 0&&(f=o.onUncaughtError),o.onCaughtError!==void 0&&(y=o.onCaughtError),o.onRecoverableError!==void 0&&(k=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(O=o.unstable_transitionCallbacks),o.formState!==void 0&&(F=o.formState)),t=C0(e,1,!0,t,o??null,a,c,f,y,k,O,F),t.context=E0(null),o=t.current,a=Yt(),a=Kd(a),c=gn(a),c.callback=null,bn(o,c,a),o=a,t.current.lanes=o,ti(t,o),Nr(t),e[Bo]=t.current,_f(e),new ec(t)},Zi.version="19.1.0",Zi}var Y0;function rj(){if(Y0)return Jf.exports;Y0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),Jf.exports=tj(),Jf.exports}var nj=rj();const Ol=C.createContext();var Ji={},V0;function oj(){if(V0)return Ji;V0=1,Object.defineProperty(Ji,"__esModule",{value:!0}),Ji.parse=h,Ji.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,s=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,l=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,u=(()=>{const j=function(){};return j.prototype=Object.create(null),j})();function h(j,S){const w=new u,N=j.length;if(N<2)return w;const E=(S==null?void 0:S.decode)||v;let A=0;do{const M=j.indexOf("=",A);if(M===-1)break;const T=j.indexOf(";",A),_=T===-1?N:T;if(M>_){A=j.lastIndexOf(";",M-1)+1;continue}const R=g(j,A,M),$=b(j,M,R),L=j.slice(R,$);if(w[L]===void 0){let B=g(j,M+1,_),q=b(j,_,B);const ne=E(j.slice(B,q));w[L]=ne}A=_+1}while(A<N);return w}function g(j,S,w){do{const N=j.charCodeAt(S);if(N!==32&&N!==9)return S}while(++S<w);return w}function b(j,S,w){for(;S>w;){const N=j.charCodeAt(--S);if(N!==32&&N!==9)return S+1}return w}function m(j,S,w){const N=(w==null?void 0:w.encode)||encodeURIComponent;if(!n.test(j))throw new TypeError(`argument name is invalid: ${j}`);const E=N(S);if(!i.test(E))throw new TypeError(`argument val is invalid: ${S}`);let A=j+"="+E;if(!w)return A;if(w.maxAge!==void 0){if(!Number.isInteger(w.maxAge))throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);A+="; Max-Age="+w.maxAge}if(w.domain){if(!s.test(w.domain))throw new TypeError(`option domain is invalid: ${w.domain}`);A+="; Domain="+w.domain}if(w.path){if(!l.test(w.path))throw new TypeError(`option path is invalid: ${w.path}`);A+="; Path="+w.path}if(w.expires){if(!x(w.expires)||!Number.isFinite(w.expires.valueOf()))throw new TypeError(`option expires is invalid: ${w.expires}`);A+="; Expires="+w.expires.toUTCString()}if(w.httpOnly&&(A+="; HttpOnly"),w.secure&&(A+="; Secure"),w.partitioned&&(A+="; Partitioned"),w.priority)switch(typeof w.priority=="string"?w.priority.toLowerCase():void 0){case"low":A+="; Priority=Low";break;case"medium":A+="; Priority=Medium";break;case"high":A+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${w.priority}`)}if(w.sameSite)switch(typeof w.sameSite=="string"?w.sameSite.toLowerCase():w.sameSite){case!0:case"strict":A+="; SameSite=Strict";break;case"lax":A+="; SameSite=Lax";break;case"none":A+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${w.sameSite}`)}return A}function v(j){if(j.indexOf("%")===-1)return j;try{return decodeURIComponent(j)}catch{return j}}function x(j){return d.call(j)==="[object Date]"}return Ji}oj();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var G0="popstate";function aj(n={}){function i(l,d){let{pathname:u,search:h,hash:g}=l.location;return Vh("",{pathname:u,search:h,hash:g},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function s(l,d){return typeof d=="string"?d:Tl(d)}return lj(i,s,null,n)}function He(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function yr(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function ij(){return Math.random().toString(36).substring(2,10)}function I0(n,i){return{usr:n.state,key:n.key,idx:i}}function Vh(n,i,s=null,l){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?La(i):i,state:s,key:i&&i.key||l||ij()}}function Tl({pathname:n="/",search:i="",hash:s=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function La(n){let i={};if(n){let s=n.indexOf("#");s>=0&&(i.hash=n.substring(s),n=n.substring(0,s));let l=n.indexOf("?");l>=0&&(i.search=n.substring(l),n=n.substring(0,l)),n&&(i.pathname=n)}return i}function lj(n,i,s,l={}){let{window:d=document.defaultView,v5Compat:u=!1}=l,h=d.history,g="POP",b=null,m=v();m==null&&(m=0,h.replaceState({...h.state,idx:m},""));function v(){return(h.state||{idx:null}).idx}function x(){g="POP";let E=v(),A=E==null?null:E-m;m=E,b&&b({action:g,location:N.location,delta:A})}function j(E,A){g="PUSH";let M=Vh(N.location,E,A);m=v()+1;let T=I0(M,m),_=N.createHref(M);try{h.pushState(T,"",_)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;d.location.assign(_)}u&&b&&b({action:g,location:N.location,delta:1})}function S(E,A){g="REPLACE";let M=Vh(N.location,E,A);m=v();let T=I0(M,m),_=N.createHref(M);h.replaceState(T,"",_),u&&b&&b({action:g,location:N.location,delta:0})}function w(E){let A=d.location.origin!=="null"?d.location.origin:d.location.href,M=typeof E=="string"?E:Tl(E);return M=M.replace(/ $/,"%20"),He(A,`No window.location.(origin|href) available to create URL for href: ${M}`),new URL(M,A)}let N={get action(){return g},get location(){return n(d,h)},listen(E){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(G0,x),b=E,()=>{d.removeEventListener(G0,x),b=null}},createHref(E){return i(d,E)},createURL:w,encodeLocation(E){let A=w(E);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:j,replace:S,go(E){return h.go(E)}};return N}function Rx(n,i,s="/"){return sj(n,i,s,!1)}function sj(n,i,s,l){let d=typeof i=="string"?La(i):i,u=nn(d.pathname||"/",s);if(u==null)return null;let h=Dx(n);cj(h);let g=null;for(let b=0;g==null&&b<h.length;++b){let m=yj(u);g=xj(h[b],m,l)}return g}function Dx(n,i=[],s=[],l=""){let d=(u,h,g)=>{let b={relativePath:g===void 0?u.path||"":g,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};b.relativePath.startsWith("/")&&(He(b.relativePath.startsWith(l),`Absolute route path "${b.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(l.length));let m=rn([l,b.relativePath]),v=s.concat(b);u.children&&u.children.length>0&&(He(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Dx(u.children,i,v,m)),!(u.path==null&&!u.index)&&i.push({path:m,score:gj(m,u.index),routesMeta:v})};return n.forEach((u,h)=>{var g;if(u.path===""||!((g=u.path)!=null&&g.includes("?")))d(u,h);else for(let b of Ox(u.path))d(u,h,b)}),i}function Ox(n){let i=n.split("/");if(i.length===0)return[];let[s,...l]=i,d=s.endsWith("?"),u=s.replace(/\?$/,"");if(l.length===0)return d?[u,""]:[u];let h=Ox(l.join("/")),g=[];return g.push(...h.map(b=>b===""?u:[u,b].join("/"))),d&&g.push(...h),g.map(b=>n.startsWith("/")&&b===""?"/":b)}function cj(n){n.sort((i,s)=>i.score!==s.score?s.score-i.score:bj(i.routesMeta.map(l=>l.childrenIndex),s.routesMeta.map(l=>l.childrenIndex)))}var dj=/^:[\w-]+$/,uj=3,fj=2,hj=1,mj=10,pj=-2,X0=n=>n==="*";function gj(n,i){let s=n.split("/"),l=s.length;return s.some(X0)&&(l+=pj),i&&(l+=fj),s.filter(d=>!X0(d)).reduce((d,u)=>d+(dj.test(u)?uj:u===""?hj:mj),l)}function bj(n,i){return n.length===i.length&&n.slice(0,-1).every((l,d)=>l===i[d])?n[n.length-1]-i[i.length-1]:0}function xj(n,i,s=!1){let{routesMeta:l}=n,d={},u="/",h=[];for(let g=0;g<l.length;++g){let b=l[g],m=g===l.length-1,v=u==="/"?i:i.slice(u.length)||"/",x=Wc({path:b.relativePath,caseSensitive:b.caseSensitive,end:m},v),j=b.route;if(!x&&m&&s&&!l[l.length-1].route.index&&(x=Wc({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},v)),!x)return null;Object.assign(d,x.params),h.push({params:d,pathname:rn([u,x.pathname]),pathnameBase:Aj(rn([u,x.pathnameBase])),route:j}),x.pathnameBase!=="/"&&(u=rn([u,x.pathnameBase]))}return h}function Wc(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[s,l]=vj(n.path,n.caseSensitive,n.end),d=i.match(s);if(!d)return null;let u=d[0],h=u.replace(/(.)\/+$/,"$1"),g=d.slice(1);return{params:l.reduce((m,{paramName:v,isOptional:x},j)=>{if(v==="*"){let w=g[j]||"";h=u.slice(0,u.length-w.length).replace(/(.)\/+$/,"$1")}const S=g[j];return x&&!S?m[v]=void 0:m[v]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:h,pattern:n}}function vj(n,i=!1,s=!0){yr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],d="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,g,b)=>(l.push({paramName:g,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(l.push({paramName:"*"}),d+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?d+="\\/*$":n!==""&&n!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,i?void 0:"i"),l]}function yj(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return yr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function nn(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let s=i.endsWith("/")?i.length-1:i.length,l=n.charAt(s);return l&&l!=="/"?null:n.slice(s)||"/"}function jj(n,i="/"){let{pathname:s,search:l="",hash:d=""}=typeof n=="string"?La(n):n;return{pathname:s?s.startsWith("/")?s:wj(s,i):i,search:kj(l),hash:Cj(d)}}function wj(n,i){let s=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(d=>{d===".."?s.length>1&&s.pop():d!=="."&&s.push(d)}),s.length>1?s.join("/"):"/"}function rh(n,i,s,l){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Sj(n){return n.filter((i,s)=>s===0||i.route.path&&i.route.path.length>0)}function Sm(n){let i=Sj(n);return i.map((s,l)=>l===i.length-1?s.pathname:s.pathnameBase)}function Am(n,i,s,l=!1){let d;typeof n=="string"?d=La(n):(d={...n},He(!d.pathname||!d.pathname.includes("?"),rh("?","pathname","search",d)),He(!d.pathname||!d.pathname.includes("#"),rh("#","pathname","hash",d)),He(!d.search||!d.search.includes("#"),rh("#","search","hash",d)));let u=n===""||d.pathname==="",h=u?"/":d.pathname,g;if(h==null)g=s;else{let x=i.length-1;if(!l&&h.startsWith("..")){let j=h.split("/");for(;j[0]==="..";)j.shift(),x-=1;d.pathname=j.join("/")}g=x>=0?i[x]:"/"}let b=jj(d,g),m=h&&h!=="/"&&h.endsWith("/"),v=(u||h===".")&&s.endsWith("/");return!b.pathname.endsWith("/")&&(m||v)&&(b.pathname+="/"),b}var rn=n=>n.join("/").replace(/\/\/+/g,"/"),Aj=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),kj=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Cj=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Ej(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var zx=["POST","PUT","PATCH","DELETE"];new Set(zx);var Tj=["GET",...zx];new Set(Tj);var Pa=C.createContext(null);Pa.displayName="DataRouter";var dd=C.createContext(null);dd.displayName="DataRouterState";var $x=C.createContext({isTransitioning:!1});$x.displayName="ViewTransition";var Nj=C.createContext(new Map);Nj.displayName="Fetchers";var Mj=C.createContext(null);Mj.displayName="Await";var jr=C.createContext(null);jr.displayName="Navigation";var zl=C.createContext(null);zl.displayName="Location";var ur=C.createContext({outlet:null,matches:[],isDataRoute:!1});ur.displayName="Route";var km=C.createContext(null);km.displayName="RouteError";function _j(n,{relative:i}={}){He(Ha(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:l}=C.useContext(jr),{hash:d,pathname:u,search:h}=$l(n,{relative:i}),g=u;return s!=="/"&&(g=u==="/"?s:rn([s,u])),l.createHref({pathname:g,search:h,hash:d})}function Ha(){return C.useContext(zl)!=null}function ln(){return He(Ha(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(zl).location}var Bx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ux(n){C.useContext(jr).static||C.useLayoutEffect(n)}function Jt(){let{isDataRoute:n}=C.useContext(ur);return n?Yj():Rj()}function Rj(){He(Ha(),"useNavigate() may be used only in the context of a <Router> component.");let n=C.useContext(Pa),{basename:i,navigator:s}=C.useContext(jr),{matches:l}=C.useContext(ur),{pathname:d}=ln(),u=JSON.stringify(Sm(l)),h=C.useRef(!1);return Ux(()=>{h.current=!0}),C.useCallback((b,m={})=>{if(yr(h.current,Bx),!h.current)return;if(typeof b=="number"){s.go(b);return}let v=Am(b,JSON.parse(u),d,m.relative==="path");n==null&&i!=="/"&&(v.pathname=v.pathname==="/"?i:rn([i,v.pathname])),(m.replace?s.replace:s.push)(v,m.state,m)},[i,s,u,d,n])}var Dj=C.createContext(null);function Oj(n){let i=C.useContext(ur).outlet;return i&&C.createElement(Dj.Provider,{value:n},i)}function Kx(){let{matches:n}=C.useContext(ur),i=n[n.length-1];return i?i.params:{}}function $l(n,{relative:i}={}){let{matches:s}=C.useContext(ur),{pathname:l}=ln(),d=JSON.stringify(Sm(s));return C.useMemo(()=>Am(n,JSON.parse(d),l,i==="path"),[n,d,l,i])}function zj(n,i){return Lx(n,i)}function Lx(n,i,s,l){var M;He(Ha(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d,static:u}=C.useContext(jr),{matches:h}=C.useContext(ur),g=h[h.length-1],b=g?g.params:{},m=g?g.pathname:"/",v=g?g.pathnameBase:"/",x=g&&g.route;{let T=x&&x.path||"";Px(m,!x||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let j=ln(),S;if(i){let T=typeof i=="string"?La(i):i;He(v==="/"||((M=T.pathname)==null?void 0:M.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${T.pathname}" was given in the \`location\` prop.`),S=T}else S=j;let w=S.pathname||"/",N=w;if(v!=="/"){let T=v.replace(/^\//,"").split("/");N="/"+w.replace(/^\//,"").split("/").slice(T.length).join("/")}let E=!u&&s&&s.matches&&s.matches.length>0?s.matches:Rx(n,{pathname:N});yr(x||E!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),yr(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=Lj(E&&E.map(T=>Object.assign({},T,{params:Object.assign({},b,T.params),pathname:rn([v,d.encodeLocation?d.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?v:rn([v,d.encodeLocation?d.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),h,s,l);return i&&A?C.createElement(zl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},A):A}function $j(){let n=Qj(),i=Ej(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),s=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:l},u={padding:"2px 4px",backgroundColor:l},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:u},"ErrorBoundary")," or"," ",C.createElement("code",{style:u},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},i),s?C.createElement("pre",{style:d},s):null,h)}var Bj=C.createElement($j,null),Uj=class extends C.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?C.createElement(ur.Provider,{value:this.props.routeContext},C.createElement(km.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Kj({routeContext:n,match:i,children:s}){let l=C.useContext(Pa);return l&&l.static&&l.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=i.route.id),C.createElement(ur.Provider,{value:n},s)}function Lj(n,i=[],s=null,l=null){if(n==null){if(!s)return null;if(s.errors)n=s.matches;else if(i.length===0&&!s.initialized&&s.matches.length>0)n=s.matches;else return null}let d=n,u=s==null?void 0:s.errors;if(u!=null){let b=d.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);He(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),d=d.slice(0,Math.min(d.length,b+1))}let h=!1,g=-1;if(s)for(let b=0;b<d.length;b++){let m=d[b];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(g=b),m.route.id){let{loaderData:v,errors:x}=s,j=m.route.loader&&!v.hasOwnProperty(m.route.id)&&(!x||x[m.route.id]===void 0);if(m.route.lazy||j){h=!0,g>=0?d=d.slice(0,g+1):d=[d[0]];break}}}return d.reduceRight((b,m,v)=>{let x,j=!1,S=null,w=null;s&&(x=u&&m.route.id?u[m.route.id]:void 0,S=m.route.errorElement||Bj,h&&(g<0&&v===0?(Px("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,w=null):g===v&&(j=!0,w=m.route.hydrateFallbackElement||null)));let N=i.concat(d.slice(0,v+1)),E=()=>{let A;return x?A=S:j?A=w:m.route.Component?A=C.createElement(m.route.Component,null):m.route.element?A=m.route.element:A=b,C.createElement(Kj,{match:m,routeContext:{outlet:b,matches:N,isDataRoute:s!=null},children:A})};return s&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?C.createElement(Uj,{location:s.location,revalidation:s.revalidation,component:S,error:x,children:E(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):E()},null)}function Cm(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Pj(n){let i=C.useContext(Pa);return He(i,Cm(n)),i}function Hj(n){let i=C.useContext(dd);return He(i,Cm(n)),i}function qj(n){let i=C.useContext(ur);return He(i,Cm(n)),i}function Em(n){let i=qj(n),s=i.matches[i.matches.length-1];return He(s.route.id,`${n} can only be used on routes that contain a unique "id"`),s.route.id}function Fj(){return Em("useRouteId")}function Qj(){var l;let n=C.useContext(km),i=Hj("useRouteError"),s=Em("useRouteError");return n!==void 0?n:(l=i.errors)==null?void 0:l[s]}function Yj(){let{router:n}=Pj("useNavigate"),i=Em("useNavigate"),s=C.useRef(!1);return Ux(()=>{s.current=!0}),C.useCallback(async(d,u={})=>{yr(s.current,Bx),s.current&&(typeof d=="number"?n.navigate(d):await n.navigate(d,{fromRouteId:i,...u}))},[n,i])}var Z0={};function Px(n,i,s){!i&&!Z0[n]&&(Z0[n]=!0,yr(!1,s))}C.memo(Vj);function Vj({routes:n,future:i,state:s}){return Lx(n,void 0,s,i)}function Gj({to:n,replace:i,state:s,relative:l}){He(Ha(),"<Navigate> may be used only in the context of a <Router> component.");let{static:d}=C.useContext(jr);yr(!d,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=C.useContext(ur),{pathname:h}=ln(),g=Jt(),b=Am(n,Sm(u),h,l==="path"),m=JSON.stringify(b);return C.useEffect(()=>{g(JSON.parse(m),{replace:i,state:s,relative:l})},[g,m,l,i,s]),null}function Ij(n){return Oj(n.context)}function Je(n){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Xj({basename:n="/",children:i=null,location:s,navigationType:l="POP",navigator:d,static:u=!1}){He(!Ha(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),g=C.useMemo(()=>({basename:h,navigator:d,static:u,future:{}}),[h,d,u]);typeof s=="string"&&(s=La(s));let{pathname:b="/",search:m="",hash:v="",state:x=null,key:j="default"}=s,S=C.useMemo(()=>{let w=nn(b,h);return w==null?null:{location:{pathname:w,search:m,hash:v,state:x,key:j},navigationType:l}},[h,b,m,v,x,j,l]);return yr(S!=null,`<Router basename="${h}"> is not able to match the URL "${b}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:C.createElement(jr.Provider,{value:g},C.createElement(zl.Provider,{children:i,value:S}))}function Zj({children:n,location:i}){return zj(Gh(n),i)}function Gh(n,i=[]){let s=[];return C.Children.forEach(n,(l,d)=>{if(!C.isValidElement(l))return;let u=[...i,d];if(l.type===C.Fragment){s.push.apply(s,Gh(l.props.children,u));return}He(l.type===Je,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!l.props.index||!l.props.children,"An index route cannot have child routes.");let h={id:l.props.id||u.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(h.children=Gh(l.props.children,u)),s.push(h)}),s}var Hc="get",qc="application/x-www-form-urlencoded";function ud(n){return n!=null&&typeof n.tagName=="string"}function Jj(n){return ud(n)&&n.tagName.toLowerCase()==="button"}function Wj(n){return ud(n)&&n.tagName.toLowerCase()==="form"}function e3(n){return ud(n)&&n.tagName.toLowerCase()==="input"}function t3(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function r3(n,i){return n.button===0&&(!i||i==="_self")&&!t3(n)}var rc=null;function n3(){if(rc===null)try{new FormData(document.createElement("form"),0),rc=!1}catch{rc=!0}return rc}var o3=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function nh(n){return n!=null&&!o3.has(n)?(yr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qc}"`),null):n}function a3(n,i){let s,l,d,u,h;if(Wj(n)){let g=n.getAttribute("action");l=g?nn(g,i):null,s=n.getAttribute("method")||Hc,d=nh(n.getAttribute("enctype"))||qc,u=new FormData(n)}else if(Jj(n)||e3(n)&&(n.type==="submit"||n.type==="image")){let g=n.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=n.getAttribute("formaction")||g.getAttribute("action");if(l=b?nn(b,i):null,s=n.getAttribute("formmethod")||g.getAttribute("method")||Hc,d=nh(n.getAttribute("formenctype"))||nh(g.getAttribute("enctype"))||qc,u=new FormData(g,n),!n3()){let{name:m,type:v,value:x}=n;if(v==="image"){let j=m?`${m}.`:"";u.append(`${j}x`,"0"),u.append(`${j}y`,"0")}else m&&u.append(m,x)}}else{if(ud(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Hc,l=null,d=qc,h=n}return u&&d==="text/plain"&&(h=u,u=void 0),{action:l,method:s.toLowerCase(),encType:d,formData:u,body:h}}function Tm(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}async function i3(n,i){if(n.id in i)return i[n.id];try{let s=await import(n.module);return i[n.id]=s,s}catch(s){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function l3(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function s3(n,i,s){let l=await Promise.all(n.map(async d=>{let u=i.routes[d.route.id];if(u){let h=await i3(u,s);return h.links?h.links():[]}return[]}));return f3(l.flat(1).filter(l3).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function J0(n,i,s,l,d,u){let h=(b,m)=>s[m]?b.route.id!==s[m].route.id:!0,g=(b,m)=>{var v;return s[m].pathname!==b.pathname||((v=s[m].route.path)==null?void 0:v.endsWith("*"))&&s[m].params["*"]!==b.params["*"]};return u==="assets"?i.filter((b,m)=>h(b,m)||g(b,m)):u==="data"?i.filter((b,m)=>{var x;let v=l.routes[b.route.id];if(!v||!v.hasLoader)return!1;if(h(b,m)||g(b,m))return!0;if(b.route.shouldRevalidate){let j=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((x=s[0])==null?void 0:x.params)||{},nextUrl:new URL(n,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof j=="boolean")return j}return!0}):[]}function c3(n,i,{includeHydrateFallback:s}={}){return d3(n.map(l=>{let d=i.routes[l.route.id];if(!d)return[];let u=[d.module];return d.clientActionModule&&(u=u.concat(d.clientActionModule)),d.clientLoaderModule&&(u=u.concat(d.clientLoaderModule)),s&&d.hydrateFallbackModule&&(u=u.concat(d.hydrateFallbackModule)),d.imports&&(u=u.concat(d.imports)),u}).flat(1))}function d3(n){return[...new Set(n)]}function u3(n){let i={},s=Object.keys(n).sort();for(let l of s)i[l]=n[l];return i}function f3(n,i){let s=new Set;return new Set(i),n.reduce((l,d)=>{let u=JSON.stringify(u3(d));return s.has(u)||(s.add(u),l.push({key:u,link:d})),l},[])}function h3(n,i){let s=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return s.pathname==="/"?s.pathname="_root.data":i&&nn(s.pathname,i)==="/"?s.pathname=`${i.replace(/\/$/,"")}/_root.data`:s.pathname=`${s.pathname.replace(/\/$/,"")}.data`,s}function Hx(){let n=C.useContext(Pa);return Tm(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function m3(){let n=C.useContext(dd);return Tm(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Nm=C.createContext(void 0);Nm.displayName="FrameworkContext";function qx(){let n=C.useContext(Nm);return Tm(n,"You must render this element inside a <HydratedRouter> element"),n}function p3(n,i){let s=C.useContext(Nm),[l,d]=C.useState(!1),[u,h]=C.useState(!1),{onFocus:g,onBlur:b,onMouseEnter:m,onMouseLeave:v,onTouchStart:x}=i,j=C.useRef(null);C.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let N=A=>{A.forEach(M=>{h(M.isIntersecting)})},E=new IntersectionObserver(N,{threshold:.5});return j.current&&E.observe(j.current),()=>{E.disconnect()}}},[n]),C.useEffect(()=>{if(l){let N=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(N)}}},[l]);let S=()=>{d(!0)},w=()=>{d(!1),h(!1)};return s?n!=="intent"?[u,j,{}]:[u,j,{onFocus:Wi(g,S),onBlur:Wi(b,w),onMouseEnter:Wi(m,S),onMouseLeave:Wi(v,w),onTouchStart:Wi(x,S)}]:[!1,j,{}]}function Wi(n,i){return s=>{n&&n(s),s.defaultPrevented||i(s)}}function g3({page:n,...i}){let{router:s}=Hx(),l=C.useMemo(()=>Rx(s.routes,n,s.basename),[s.routes,n,s.basename]);return l?C.createElement(x3,{page:n,matches:l,...i}):null}function b3(n){let{manifest:i,routeModules:s}=qx(),[l,d]=C.useState([]);return C.useEffect(()=>{let u=!1;return s3(n,i,s).then(h=>{u||d(h)}),()=>{u=!0}},[n,i,s]),l}function x3({page:n,matches:i,...s}){let l=ln(),{manifest:d,routeModules:u}=qx(),{basename:h}=Hx(),{loaderData:g,matches:b}=m3(),m=C.useMemo(()=>J0(n,i,b,d,l,"data"),[n,i,b,d,l]),v=C.useMemo(()=>J0(n,i,b,d,l,"assets"),[n,i,b,d,l]),x=C.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let w=new Set,N=!1;if(i.forEach(A=>{var T;let M=d.routes[A.route.id];!M||!M.hasLoader||(!m.some(_=>_.route.id===A.route.id)&&A.route.id in g&&((T=u[A.route.id])!=null&&T.shouldRevalidate)||M.hasClientLoader?N=!0:w.add(A.route.id))}),w.size===0)return[];let E=h3(n,h);return N&&w.size>0&&E.searchParams.set("_routes",i.filter(A=>w.has(A.route.id)).map(A=>A.route.id).join(",")),[E.pathname+E.search]},[h,g,l,d,m,i,n,u]),j=C.useMemo(()=>c3(v,d),[v,d]),S=b3(v);return C.createElement(C.Fragment,null,x.map(w=>C.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...s})),j.map(w=>C.createElement("link",{key:w,rel:"modulepreload",href:w,...s})),S.map(({key:w,link:N})=>C.createElement("link",{key:w,...N})))}function v3(...n){return i=>{n.forEach(s=>{typeof s=="function"?s(i):s!=null&&(s.current=i)})}}var Fx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Fx&&(window.__reactRouterVersion="7.5.0")}catch{}function y3({basename:n,children:i,window:s}){let l=C.useRef();l.current==null&&(l.current=aj({window:s,v5Compat:!0}));let d=l.current,[u,h]=C.useState({action:d.action,location:d.location}),g=C.useCallback(b=>{C.startTransition(()=>h(b))},[h]);return C.useLayoutEffect(()=>d.listen(g),[d,g]),C.createElement(Xj,{basename:n,children:i,location:u.location,navigationType:u.action,navigator:d})}var Qx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ne=C.forwardRef(function({onClick:i,discover:s="render",prefetch:l="none",relative:d,reloadDocument:u,replace:h,state:g,target:b,to:m,preventScrollReset:v,viewTransition:x,...j},S){let{basename:w}=C.useContext(jr),N=typeof m=="string"&&Qx.test(m),E,A=!1;if(typeof m=="string"&&N&&(E=m,Fx))try{let q=new URL(window.location.href),ne=m.startsWith("//")?new URL(q.protocol+m):new URL(m),U=nn(ne.pathname,w);ne.origin===q.origin&&U!=null?m=U+ne.search+ne.hash:A=!0}catch{yr(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=_j(m,{relative:d}),[T,_,R]=p3(l,j),$=A3(m,{replace:h,state:g,target:b,preventScrollReset:v,relative:d,viewTransition:x});function L(q){i&&i(q),q.defaultPrevented||$(q)}let B=C.createElement("a",{...j,...R,href:E||M,onClick:A||u?i:L,ref:v3(S,_),target:b,"data-discover":!N&&s==="render"?"true":void 0});return T&&!N?C.createElement(C.Fragment,null,B,C.createElement(g3,{page:M})):B});Ne.displayName="Link";var j3=C.forwardRef(function({"aria-current":i="page",caseSensitive:s=!1,className:l="",end:d=!1,style:u,to:h,viewTransition:g,children:b,...m},v){let x=$l(h,{relative:m.relative}),j=ln(),S=C.useContext(dd),{navigator:w,basename:N}=C.useContext(jr),E=S!=null&&N3(x)&&g===!0,A=w.encodeLocation?w.encodeLocation(x).pathname:x.pathname,M=j.pathname,T=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;s||(M=M.toLowerCase(),T=T?T.toLowerCase():null,A=A.toLowerCase()),T&&N&&(T=nn(T,N)||T);const _=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let R=M===A||!d&&M.startsWith(A)&&M.charAt(_)==="/",$=T!=null&&(T===A||!d&&T.startsWith(A)&&T.charAt(A.length)==="/"),L={isActive:R,isPending:$,isTransitioning:E},B=R?i:void 0,q;typeof l=="function"?q=l(L):q=[l,R?"active":null,$?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let ne=typeof u=="function"?u(L):u;return C.createElement(Ne,{...m,"aria-current":B,className:q,ref:v,style:ne,to:h,viewTransition:g},typeof b=="function"?b(L):b)});j3.displayName="NavLink";var w3=C.forwardRef(({discover:n="render",fetcherKey:i,navigate:s,reloadDocument:l,replace:d,state:u,method:h=Hc,action:g,onSubmit:b,relative:m,preventScrollReset:v,viewTransition:x,...j},S)=>{let w=E3(),N=T3(g,{relative:m}),E=h.toLowerCase()==="get"?"get":"post",A=typeof g=="string"&&Qx.test(g),M=T=>{if(b&&b(T),T.defaultPrevented)return;T.preventDefault();let _=T.nativeEvent.submitter,R=(_==null?void 0:_.getAttribute("formmethod"))||h;w(_||T.currentTarget,{fetcherKey:i,method:R,navigate:s,replace:d,state:u,relative:m,preventScrollReset:v,viewTransition:x})};return C.createElement("form",{ref:S,method:E,action:N,onSubmit:l?b:M,...j,"data-discover":!A&&n==="render"?"true":void 0})});w3.displayName="Form";function S3(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yx(n){let i=C.useContext(Pa);return He(i,S3(n)),i}function A3(n,{target:i,replace:s,state:l,preventScrollReset:d,relative:u,viewTransition:h}={}){let g=Jt(),b=ln(),m=$l(n,{relative:u});return C.useCallback(v=>{if(r3(v,i)){v.preventDefault();let x=s!==void 0?s:Tl(b)===Tl(m);g(n,{replace:x,state:l,preventScrollReset:d,relative:u,viewTransition:h})}},[b,g,m,s,l,i,n,d,u,h])}var k3=0,C3=()=>`__${String(++k3)}__`;function E3(){let{router:n}=Yx("useSubmit"),{basename:i}=C.useContext(jr),s=Fj();return C.useCallback(async(l,d={})=>{let{action:u,method:h,encType:g,formData:b,body:m}=a3(l,i);if(d.navigate===!1){let v=d.fetcherKey||C3();await n.fetch(v,s,d.action||u,{preventScrollReset:d.preventScrollReset,formData:b,body:m,formMethod:d.method||h,formEncType:d.encType||g,flushSync:d.flushSync})}else await n.navigate(d.action||u,{preventScrollReset:d.preventScrollReset,formData:b,body:m,formMethod:d.method||h,formEncType:d.encType||g,replace:d.replace,state:d.state,fromRouteId:s,flushSync:d.flushSync,viewTransition:d.viewTransition})},[n,i,s])}function T3(n,{relative:i}={}){let{basename:s}=C.useContext(jr),l=C.useContext(ur);He(l,"useFormAction must be used inside a RouteContext");let[d]=l.matches.slice(-1),u={...$l(n||".",{relative:i})},h=ln();if(n==null){u.search=h.search;let g=new URLSearchParams(u.search),b=g.getAll("index");if(b.some(v=>v==="")){g.delete("index"),b.filter(x=>x).forEach(x=>g.append("index",x));let v=g.toString();u.search=v?`?${v}`:""}}return(!n||n===".")&&d.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(u.pathname=u.pathname==="/"?s:rn([s,u.pathname])),Tl(u)}function N3(n,i={}){let s=C.useContext($x);He(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=Yx("useViewTransitionState"),d=$l(n,{relative:i.relative});if(!s.isTransitioning)return!1;let u=nn(s.currentLocation.pathname,l)||s.currentLocation.pathname,h=nn(s.nextLocation.pathname,l)||s.nextLocation.pathname;return Wc(d.pathname,h)!=null||Wc(d.pathname,u)!=null}new TextEncoder;var M3=_x();const Sl=wm(M3),Vx=C.createContext(void 0),_3=({children:n})=>{const[i,s]=C.useState(null);C.useEffect(()=>{const h=localStorage.getItem("user");h&&s(JSON.parse(h))},[]);const l=h=>{s(h),localStorage.setItem("user",JSON.stringify(h))},d=()=>{s(null),localStorage.removeItem("user")},u=i!==null;return r.jsx(Vx.Provider,{value:{user:i,login:l,logout:d,isAuthenticated:u},children:n})},Mm=()=>{const n=C.useContext(Vx);if(n===void 0)throw new Error("useAuth must be used within an AuthProvider");return n},R3="/assets/logo-TCVqfNPV.png";var At=function(){return At=Object.assign||function(i){for(var s,l=1,d=arguments.length;l<d;l++){s=arguments[l];for(var u in s)Object.prototype.hasOwnProperty.call(s,u)&&(i[u]=s[u])}return i},At.apply(this,arguments)};function Nl(n,i,s){if(s||arguments.length===2)for(var l=0,d=i.length,u;l<d;l++)(u||!(l in i))&&(u||(u=Array.prototype.slice.call(i,0,l)),u[l]=i[l]);return n.concat(u||Array.prototype.slice.call(i))}var Le="-ms-",Cl="-moz-",Re="-webkit-",Gx="comm",fd="rule",_m="decl",D3="@import",O3="@namespace",Ix="@keyframes",z3="@layer",Xx=Math.abs,Rm=String.fromCharCode,Ih=Object.assign;function $3(n,i){return ot(n,0)^45?(((i<<2^ot(n,0))<<2^ot(n,1))<<2^ot(n,2))<<2^ot(n,3):0}function Zx(n){return n.trim()}function en(n,i){return(n=i.exec(n))?n[0]:n}function je(n,i,s){return n.replace(i,s)}function Fc(n,i,s){return n.indexOf(i,s)}function ot(n,i){return n.charCodeAt(i)|0}function Do(n,i,s){return n.slice(i,s)}function gr(n){return n.length}function Jx(n){return n.length}function Al(n,i){return i.push(n),n}function B3(n,i){return n.map(i).join("")}function W0(n,i){return n.filter(function(s){return!en(s,i)})}var hd=1,za=1,Wx=0,dr=0,We=0,qa="";function md(n,i,s,l,d,u,h,g){return{value:n,root:i,parent:s,type:l,props:d,children:u,line:hd,column:za,length:h,return:"",siblings:g}}function Pn(n,i){return Ih(md("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},i)}function wa(n){for(;n.root;)n=Pn(n.root,{children:[n]});Al(n,n.siblings)}function U3(){return We}function K3(){return We=dr>0?ot(qa,--dr):0,za--,We===10&&(za=1,hd--),We}function xr(){return We=dr<Wx?ot(qa,dr++):0,za++,We===10&&(za=1,hd++),We}function Qn(){return ot(qa,dr)}function Qc(){return dr}function pd(n,i){return Do(qa,n,i)}function Ml(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function L3(n){return hd=za=1,Wx=gr(qa=n),dr=0,[]}function P3(n){return qa="",n}function oh(n){return Zx(pd(dr-1,Xh(n===91?n+2:n===40?n+1:n)))}function H3(n){for(;(We=Qn())&&We<33;)xr();return Ml(n)>2||Ml(We)>3?"":" "}function q3(n,i){for(;--i&&xr()&&!(We<48||We>102||We>57&&We<65||We>70&&We<97););return pd(n,Qc()+(i<6&&Qn()==32&&xr()==32))}function Xh(n){for(;xr();)switch(We){case n:return dr;case 34:case 39:n!==34&&n!==39&&Xh(We);break;case 40:n===41&&Xh(n);break;case 92:xr();break}return dr}function F3(n,i){for(;xr()&&n+We!==57;)if(n+We===84&&Qn()===47)break;return"/*"+pd(i,dr-1)+"*"+Rm(n===47?n:xr())}function Q3(n){for(;!Ml(Qn());)xr();return pd(n,dr)}function Y3(n){return P3(Yc("",null,null,null,[""],n=L3(n),0,[0],n))}function Yc(n,i,s,l,d,u,h,g,b){for(var m=0,v=0,x=h,j=0,S=0,w=0,N=1,E=1,A=1,M=0,T="",_=d,R=u,$=l,L=T;E;)switch(w=M,M=xr()){case 40:if(w!=108&&ot(L,x-1)==58){Fc(L+=je(oh(M),"&","&\f"),"&\f",Xx(m?g[m-1]:0))!=-1&&(A=-1);break}case 34:case 39:case 91:L+=oh(M);break;case 9:case 10:case 13:case 32:L+=H3(w);break;case 92:L+=q3(Qc()-1,7);continue;case 47:switch(Qn()){case 42:case 47:Al(V3(F3(xr(),Qc()),i,s,b),b),(Ml(w||1)==5||Ml(Qn()||1)==5)&&gr(L)&&Do(L,-1,void 0)!==" "&&(L+=" ");break;default:L+="/"}break;case 123*N:g[m++]=gr(L)*A;case 125*N:case 59:case 0:switch(M){case 0:case 125:E=0;case 59+v:A==-1&&(L=je(L,/\f/g,"")),S>0&&(gr(L)-x||N===0&&w===47)&&Al(S>32?t1(L+";",l,s,x-1,b):t1(je(L," ","")+";",l,s,x-2,b),b);break;case 59:L+=";";default:if(Al($=e1(L,i,s,m,v,d,g,T,_=[],R=[],x,u),u),M===123)if(v===0)Yc(L,i,$,$,_,u,x,g,R);else{switch(j){case 99:if(ot(L,3)===110)break;case 108:if(ot(L,2)===97)break;default:v=0;case 100:case 109:case 115:}v?Yc(n,$,$,l&&Al(e1(n,$,$,0,0,d,g,T,d,_=[],x,R),R),d,R,x,g,l?_:R):Yc(L,$,$,$,[""],R,0,g,R)}}m=v=S=0,N=A=1,T=L="",x=h;break;case 58:x=1+gr(L),S=w;default:if(N<1){if(M==123)--N;else if(M==125&&N++==0&&K3()==125)continue}switch(L+=Rm(M),M*N){case 38:A=v>0?1:(L+="\f",-1);break;case 44:g[m++]=(gr(L)-1)*A,A=1;break;case 64:Qn()===45&&(L+=oh(xr())),j=Qn(),v=x=gr(T=L+=Q3(Qc())),M++;break;case 45:w===45&&gr(L)==2&&(N=0)}}return u}function e1(n,i,s,l,d,u,h,g,b,m,v,x){for(var j=d-1,S=d===0?u:[""],w=Jx(S),N=0,E=0,A=0;N<l;++N)for(var M=0,T=Do(n,j+1,j=Xx(E=h[N])),_=n;M<w;++M)(_=Zx(E>0?S[M]+" "+T:je(T,/&\f/g,S[M])))&&(b[A++]=_);return md(n,i,s,d===0?fd:g,b,m,v,x)}function V3(n,i,s,l){return md(n,i,s,Gx,Rm(U3()),Do(n,2,-2),0,l)}function t1(n,i,s,l,d){return md(n,i,s,_m,Do(n,0,l),Do(n,l+1,-1),l,d)}function ev(n,i,s){switch($3(n,i)){case 5103:return Re+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Re+n+n;case 4855:return Re+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return Cl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Re+n+Cl+n+Le+n+n;case 5936:switch(ot(n,i+11)){case 114:return Re+n+Le+je(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Re+n+Le+je(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Re+n+Le+je(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Re+n+Le+n+n;case 6165:return Re+n+Le+"flex-"+n+n;case 5187:return Re+n+je(n,/(\w+).+(:[^]+)/,Re+"box-$1$2"+Le+"flex-$1$2")+n;case 5443:return Re+n+Le+"flex-item-"+je(n,/flex-|-self/g,"")+(en(n,/flex-|baseline/)?"":Le+"grid-row-"+je(n,/flex-|-self/g,""))+n;case 4675:return Re+n+Le+"flex-line-pack"+je(n,/align-content|flex-|-self/g,"")+n;case 5548:return Re+n+Le+je(n,"shrink","negative")+n;case 5292:return Re+n+Le+je(n,"basis","preferred-size")+n;case 6060:return Re+"box-"+je(n,"-grow","")+Re+n+Le+je(n,"grow","positive")+n;case 4554:return Re+je(n,/([^-])(transform)/g,"$1"+Re+"$2")+n;case 6187:return je(je(je(n,/(zoom-|grab)/,Re+"$1"),/(image-set)/,Re+"$1"),n,"")+n;case 5495:case 3959:return je(n,/(image-set\([^]*)/,Re+"$1$`$1");case 4968:return je(je(n,/(.+:)(flex-)?(.*)/,Re+"box-pack:$3"+Le+"flex-pack:$3"),/space-between/,"justify")+Re+n+n;case 4200:if(!en(n,/flex-|baseline/))return Le+"grid-column-align"+Do(n,i)+n;break;case 2592:case 3360:return Le+je(n,"template-","")+n;case 4384:case 3616:return s&&s.some(function(l,d){return i=d,en(l.props,/grid-\w+-end/)})?~Fc(n+(s=s[i].value),"span",0)?n:Le+je(n,"-start","")+n+Le+"grid-row-span:"+(~Fc(s,"span",0)?en(s,/\d+/):+en(s,/\d+/)-+en(n,/\d+/))+";":Le+je(n,"-start","")+n;case 4896:case 4128:return s&&s.some(function(l){return en(l.props,/grid-\w+-start/)})?n:Le+je(je(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return je(n,/(.+)-inline(.+)/,Re+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gr(n)-1-i>6)switch(ot(n,i+1)){case 109:if(ot(n,i+4)!==45)break;case 102:return je(n,/(.+:)(.+)-([^]+)/,"$1"+Re+"$2-$3$1"+Cl+(ot(n,i+3)==108?"$3":"$2-$3"))+n;case 115:return~Fc(n,"stretch",0)?ev(je(n,"stretch","fill-available"),i,s)+n:n}break;case 5152:case 5920:return je(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,d,u,h,g,b,m){return Le+d+":"+u+m+(h?Le+d+"-span:"+(g?b:+b-+u)+m:"")+n});case 4949:if(ot(n,i+6)===121)return je(n,":",":"+Re)+n;break;case 6444:switch(ot(n,ot(n,14)===45?18:11)){case 120:return je(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Re+(ot(n,14)===45?"inline-":"")+"box$3$1"+Re+"$2$3$1"+Le+"$2box$3")+n;case 100:return je(n,":",":"+Le)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return je(n,"scroll-","scroll-snap-")+n}return n}function ed(n,i){for(var s="",l=0;l<n.length;l++)s+=i(n[l],l,n,i)||"";return s}function G3(n,i,s,l){switch(n.type){case z3:if(n.children.length)break;case D3:case O3:case _m:return n.return=n.return||n.value;case Gx:return"";case Ix:return n.return=n.value+"{"+ed(n.children,l)+"}";case fd:if(!gr(n.value=n.props.join(",")))return""}return gr(s=ed(n.children,l))?n.return=n.value+"{"+s+"}":""}function I3(n){var i=Jx(n);return function(s,l,d,u){for(var h="",g=0;g<i;g++)h+=n[g](s,l,d,u)||"";return h}}function X3(n){return function(i){i.root||(i=i.return)&&n(i)}}function Z3(n,i,s,l){if(n.length>-1&&!n.return)switch(n.type){case _m:n.return=ev(n.value,n.length,s);return;case Ix:return ed([Pn(n,{value:je(n.value,"@","@"+Re)})],l);case fd:if(n.length)return B3(s=n.props,function(d){switch(en(d,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":wa(Pn(n,{props:[je(d,/:(read-\w+)/,":"+Cl+"$1")]})),wa(Pn(n,{props:[d]})),Ih(n,{props:W0(s,l)});break;case"::placeholder":wa(Pn(n,{props:[je(d,/:(plac\w+)/,":"+Re+"input-$1")]})),wa(Pn(n,{props:[je(d,/:(plac\w+)/,":"+Cl+"$1")]})),wa(Pn(n,{props:[je(d,/:(plac\w+)/,Le+"input-$1")]})),wa(Pn(n,{props:[d]})),Ih(n,{props:W0(s,l)});break}return""})}}var J3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},It={},$a=typeof process<"u"&&It!==void 0&&(It.REACT_APP_SC_ATTR||It.SC_ATTR)||"data-styled",tv="active",rv="data-styled-version",gd="6.3.9",Dm=`/*!sc*/
`,El=typeof window<"u"&&typeof document<"u",Or=Fe.createContext===void 0,W3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&It!==void 0&&It.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&It.REACT_APP_SC_DISABLE_SPEEDY!==""?It.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&It.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&It!==void 0&&It.SC_DISABLE_SPEEDY!==void 0&&It.SC_DISABLE_SPEEDY!==""&&It.SC_DISABLE_SPEEDY!=="false"&&It.SC_DISABLE_SPEEDY),ew={},Om=Object.freeze([]),Ba=Object.freeze({});function nv(n,i,s){return s===void 0&&(s=Ba),n.theme!==s.theme&&n.theme||i||s.theme}var ov=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),tw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,rw=/(^-|-$)/g;function r1(n){return n.replace(tw,"-").replace(rw,"")}var nw=/(a)(d)/gi,n1=function(n){return String.fromCharCode(n+(n>25?39:97))};function Zh(n){var i,s="";for(i=Math.abs(n);i>52;i=i/52|0)s=n1(i%52)+s;return(n1(i%52)+s).replace(nw,"$1-$2")}var ah,ko=function(n,i){for(var s=i.length;s;)n=33*n^i.charCodeAt(--s);return n},av=function(n){return ko(5381,n)};function iv(n){return Zh(av(n)>>>0)}function ow(n){return n.displayName||n.name||"Component"}function ih(n){return typeof n=="string"&&!0}var lv=typeof Symbol=="function"&&Symbol.for,sv=lv?Symbol.for("react.memo"):60115,aw=lv?Symbol.for("react.forward_ref"):60112,iw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sw=((ah={})[aw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ah[sv]=cv,ah);function o1(n){return("type"in(i=n)&&i.type.$$typeof)===sv?cv:"$$typeof"in n?sw[n.$$typeof]:iw;var i}var cw=Object.defineProperty,dw=Object.getOwnPropertyNames,a1=Object.getOwnPropertySymbols,uw=Object.getOwnPropertyDescriptor,fw=Object.getPrototypeOf,i1=Object.prototype;function dv(n,i,s){if(typeof i!="string"){if(i1){var l=fw(i);l&&l!==i1&&dv(n,l,s)}var d=dw(i);a1&&(d=d.concat(a1(i)));for(var u=o1(n),h=o1(i),g=0;g<d.length;++g){var b=d[g];if(!(b in lw||s&&s[b]||h&&b in h||u&&b in u)){var m=uw(i,b);try{cw(n,b,m)}catch{}}}}return n}function Ua(n){return typeof n=="function"}function zm(n){return typeof n=="object"&&"styledComponentId"in n}function To(n,i){return n&&i?"".concat(n," ").concat(i):n||i||""}function Jh(n,i){return n.join("")}function _l(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Wh(n,i,s){if(s===void 0&&(s=!1),!s&&!_l(n)&&!Array.isArray(n))return i;if(Array.isArray(i))for(var l=0;l<i.length;l++)n[l]=Wh(n[l],i[l]);else if(_l(i))for(var l in i)n[l]=Wh(n[l],i[l]);return n}function $m(n,i){Object.defineProperty(n,"toString",{value:i})}function Bl(n){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var hw=function(){function n(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i,this._cGroup=0,this._cIndex=0}return n.prototype.indexOfGroup=function(i){if(i===this._cGroup)return this._cIndex;var s=this._cIndex;if(i>this._cGroup)for(var l=this._cGroup;l<i;l++)s+=this.groupSizes[l];else for(l=this._cGroup-1;l>=i;l--)s-=this.groupSizes[l];return this._cGroup=i,this._cIndex=s,s},n.prototype.insertRules=function(i,s){if(i>=this.groupSizes.length){for(var l=this.groupSizes,d=l.length,u=d;i>=u;)if((u<<=1)<0)throw Bl(16,"".concat(i));this.groupSizes=new Uint32Array(u),this.groupSizes.set(l),this.length=u;for(var h=d;h<u;h++)this.groupSizes[h]=0}for(var g=this.indexOfGroup(i+1),b=0,m=(h=0,s.length);h<m;h++)this.tag.insertRule(g,s[h])&&(this.groupSizes[i]++,g++,b++);b>0&&this._cGroup>i&&(this._cIndex+=b)},n.prototype.clearGroup=function(i){if(i<this.length){var s=this.groupSizes[i],l=this.indexOfGroup(i),d=l+s;this.groupSizes[i]=0;for(var u=l;u<d;u++)this.tag.deleteRule(l);s>0&&this._cGroup>i&&(this._cIndex-=s)}},n.prototype.getGroup=function(i){var s="";if(i>=this.length||this.groupSizes[i]===0)return s;for(var l=this.groupSizes[i],d=this.indexOfGroup(i),u=d+l,h=d;h<u;h++)s+=this.tag.getRule(h)+Dm;return s},n}(),Vc=new Map,td=new Map,Gc=1,Da=function(n){if(Vc.has(n))return Vc.get(n);for(;td.has(Gc);)Gc++;var i=Gc++;return Vc.set(n,i),td.set(i,n),i},mw=function(n,i){Gc=i+1,Vc.set(n,i),td.set(i,n)},pw="style[".concat($a,"][").concat(rv,'="').concat(gd,'"]'),gw=new RegExp("^".concat($a,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),l1=function(n){return typeof ShadowRoot<"u"&&n instanceof ShadowRoot||"host"in n&&n.nodeType===11},em=function(n){if(!n)return document;if(l1(n))return n;if("getRootNode"in n){var i=n.getRootNode();if(l1(i))return i}return document},bw=function(n,i,s){for(var l,d=s.split(","),u=0,h=d.length;u<h;u++)(l=d[u])&&n.registerName(i,l)},xw=function(n,i){for(var s,l=((s=i.textContent)!==null&&s!==void 0?s:"").split(Dm),d=[],u=0,h=l.length;u<h;u++){var g=l[u].trim();if(g){var b=g.match(gw);if(b){var m=0|parseInt(b[1],10),v=b[2];m!==0&&(mw(v,m),bw(n,v,b[3]),n.getTag().insertRules(m,d)),d.length=0}else d.push(g)}}},lh=function(n){for(var i=em(n.options.target).querySelectorAll(pw),s=0,l=i.length;s<l;s++){var d=i[s];d&&d.getAttribute($a)!==tv&&(xw(n,d),d.parentNode&&d.parentNode.removeChild(d))}};function vw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var uv=function(n){var i=document.head,s=n||i,l=document.createElement("style"),d=function(g){var b=Array.from(g.querySelectorAll("style[".concat($a,"]")));return b[b.length-1]}(s),u=d!==void 0?d.nextSibling:null;l.setAttribute($a,tv),l.setAttribute(rv,gd);var h=vw();return h&&l.setAttribute("nonce",h),s.insertBefore(l,u),l},yw=function(){function n(i){this.element=uv(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(s){var l;if(s.sheet)return s.sheet;for(var d=(l=s.getRootNode().styleSheets)!==null&&l!==void 0?l:document.styleSheets,u=0,h=d.length;u<h;u++){var g=d[u];if(g.ownerNode===s)return g}throw Bl(17)}(this.element),this.length=0}return n.prototype.insertRule=function(i,s){try{return this.sheet.insertRule(s,i),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},n.prototype.getRule=function(i){var s=this.sheet.cssRules[i];return s&&s.cssText?s.cssText:""},n}(),jw=function(){function n(i){this.element=uv(i),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(i,s){if(i<=this.length&&i>=0){var l=document.createTextNode(s);return this.element.insertBefore(l,this.nodes[i]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},n.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},n}(),ww=function(){function n(i){this.rules=[],this.length=0}return n.prototype.insertRule=function(i,s){return i<=this.length&&(i===this.length?this.rules.push(s):this.rules.splice(i,0,s),this.length++,!0)},n.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},n.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},n}(),s1=El,Sw={isServer:!El,useCSSOMInjection:!W3},rd=function(){function n(i,s,l){i===void 0&&(i=Ba),s===void 0&&(s={});var d=this;this.options=At(At({},Sw),i),this.gs=s,this.names=new Map(l),this.server=!!i.isServer,!this.server&&El&&s1&&(s1=!1,lh(this)),$m(this,function(){return function(u){for(var h=u.getTag(),g=h.length,b="",m=function(x){var j=function(A){return td.get(A)}(x);if(j===void 0)return"continue";var S=u.names.get(j);if(S===void 0||!S.size)return"continue";var w=h.getGroup(x);if(w.length===0)return"continue";var N=$a+".g"+x+'[id="'+j+'"]',E="";S.forEach(function(A){A.length>0&&(E+=A+",")}),b+=w+N+'{content:"'+E+'"}'+Dm},v=0;v<g;v++)m(v);return b}(d)})}return n.registerId=function(i){return Da(i)},n.prototype.rehydrate=function(){!this.server&&El&&lh(this)},n.prototype.reconstructWithOptions=function(i,s){s===void 0&&(s=!0);var l=new n(At(At({},this.options),i),this.gs,s&&this.names||void 0);return!this.server&&El&&i.target!==this.options.target&&em(this.options.target)!==em(i.target)&&lh(l),l},n.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(i=function(s){var l=s.useCSSOMInjection,d=s.target;return s.isServer?new ww(d):l?new yw(d):new jw(d)}(this.options),new hw(i)));var i},n.prototype.hasNameForId=function(i,s){var l,d;return(d=(l=this.names.get(i))===null||l===void 0?void 0:l.has(s))!==null&&d!==void 0&&d},n.prototype.registerName=function(i,s){Da(i);var l=this.names.get(i);l?l.add(s):this.names.set(i,new Set([s]))},n.prototype.insertRules=function(i,s,l){this.registerName(i,s),this.getTag().insertRules(Da(i),l)},n.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},n.prototype.clearRules=function(i){this.getTag().clearGroup(Da(i)),this.clearNames(i)},n.prototype.clearTag=function(){this.tag=void 0},n}(),Aw=/&/g,tn=47,Co=42;function c1(n){if(n.indexOf("}")===-1)return!1;for(var i=n.length,s=0,l=0,d=!1,u=0;u<i;u++){var h=n.charCodeAt(u);if(l!==0||d||h!==tn||n.charCodeAt(u+1)!==Co)if(d)h===Co&&n.charCodeAt(u+1)===tn&&(d=!1,u++);else if(h!==34&&h!==39||u!==0&&n.charCodeAt(u-1)===92){if(l===0){if(h===123)s++;else if(h===125&&--s<0)return!0}}else l===0?l=h:l===h&&(l=0);else d=!0,u++}return s!==0||l!==0}function fv(n,i){return n.map(function(s){return s.type==="rule"&&(s.value="".concat(i," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(i," ")),s.props=s.props.map(function(l){return"".concat(i," ").concat(l)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=fv(s.children,i)),s})}function kw(n){var i,s,l,d=Ba,u=d.options,h=u===void 0?Ba:u,g=d.plugins,b=g===void 0?Om:g,m=function(w,N,E){return E.startsWith(s)&&E.endsWith(s)&&E.replaceAll(s,"").length>0?".".concat(i):w},v=b.slice();v.push(function(w){w.type===fd&&w.value.includes("&")&&(l||(l=new RegExp("\\".concat(s,"\\b"),"g")),w.props[0]=w.props[0].replace(Aw,s).replace(l,m))}),h.prefix&&v.push(Z3),v.push(G3);var x=[],j=I3(v.concat(X3(function(w){return x.push(w)}))),S=function(w,N,E,A){N===void 0&&(N=""),E===void 0&&(E=""),A===void 0&&(A="&"),i=A,s=N,l=void 0;var M=function(_){if(!c1(_))return _;for(var R=_.length,$="",L=0,B=0,q=0,ne=!1,U=0;U<R;U++){var D=_.charCodeAt(U);if(q!==0||ne||D!==tn||_.charCodeAt(U+1)!==Co)if(ne)D===Co&&_.charCodeAt(U+1)===tn&&(ne=!1,U++);else if(D!==34&&D!==39||U!==0&&_.charCodeAt(U-1)===92){if(q===0)if(D===123)B++;else if(D===125){if(--B<0){for(var J=U+1;J<R;){var se=_.charCodeAt(J);if(se===59||se===10)break;J++}J<R&&_.charCodeAt(J)===59&&J++,B=0,U=J-1,L=J;continue}B===0&&($+=_.substring(L,U+1),L=U+1)}else D===59&&B===0&&($+=_.substring(L,U+1),L=U+1)}else q===0?q=D:q===D&&(q=0);else ne=!0,U++}if(L<R){var de=_.substring(L);c1(de)||($+=de)}return $}(function(_){if(_.indexOf("//")===-1)return _;for(var R=_.length,$=[],L=0,B=0,q=0,ne=0;B<R;){var U=_.charCodeAt(B);if(U!==34&&U!==39||B!==0&&_.charCodeAt(B-1)===92)if(q===0)if(U===tn&&B+1<R&&_.charCodeAt(B+1)===Co){for(B+=2;B+1<R&&(_.charCodeAt(B)!==Co||_.charCodeAt(B+1)!==tn);)B++;B+=2}else if(U===40&&B>=3&&(32|_.charCodeAt(B-1))==108&&(32|_.charCodeAt(B-2))==114&&(32|_.charCodeAt(B-3))==117)ne=1,B++;else if(ne>0)U===41?ne--:U===40&&ne++,B++;else if(U===Co&&B+1<R&&_.charCodeAt(B+1)===tn)B>L&&$.push(_.substring(L,B)),L=B+=2;else if(U===tn&&B+1<R&&_.charCodeAt(B+1)===tn){for(B>L&&$.push(_.substring(L,B));B<R&&_.charCodeAt(B)!==10;)B++;L=B}else B++;else B++;else q===0?q=U:q===U&&(q=0),B++}return L===0?_:(L<R&&$.push(_.substring(L)),$.join(""))}(w)),T=Y3(E||N?"".concat(E," ").concat(N," { ").concat(M," }"):M);return h.namespace&&(T=fv(T,h.namespace)),x=[],ed(T,j),x};return S.hash=b.length?b.reduce(function(w,N){return N.name||Bl(15),ko(w,N.name)},5381).toString():"",S}var Cw=new rd,tm=kw(),rm={shouldForwardProp:void 0,styleSheet:Cw,stylis:tm},hv=Or?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(rm)}}:Fe.createContext(rm);hv.Consumer;Or||Fe.createContext(void 0);function nm(){return Or?rm:Fe.useContext(hv)}var Ew=function(){function n(i,s){var l=this;this.inject=function(d,u){u===void 0&&(u=tm);var h=l.name+u.hash;d.hasNameForId(l.id,h)||d.insertRules(l.id,h,u(l.rules,h,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=s,$m(this,function(){throw Bl(12,String(l.name))})}return n.prototype.getName=function(i){return i===void 0&&(i=tm),this.name+i.hash},n}();function Tw(n,i){return i==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||n in J3||n.startsWith("--")?String(i).trim():"".concat(i,"px")}var Nw=function(n){return n>="A"&&n<="Z"};function d1(n){for(var i="",s=0;s<n.length;s++){var l=n[s];if(s===1&&l==="-"&&n[0]==="-")return n;Nw(l)?i+="-"+l.toLowerCase():i+=l}return i.startsWith("ms-")?"-"+i:i}var mv=function(n){return n==null||n===!1||n===""},pv=function(n){var i=[];for(var s in n){var l=n[s];n.hasOwnProperty(s)&&!mv(l)&&(Array.isArray(l)&&l.isCss||Ua(l)?i.push("".concat(d1(s),":"),l,";"):_l(l)?i.push.apply(i,Nl(Nl(["".concat(s," {")],pv(l),!1),["}"],!1)):i.push("".concat(d1(s),": ").concat(Tw(s,l),";")))}return i};function Yn(n,i,s,l,d){if(d===void 0&&(d=[]),typeof n=="string")return n&&d.push(n),d;if(mv(n))return d;if(zm(n))return d.push(".".concat(n.styledComponentId)),d;if(Ua(n)){if(!Ua(h=n)||h.prototype&&h.prototype.isReactComponent||!i)return d.push(n),d;var u=n(i);return Yn(u,i,s,l,d)}var h;if(n instanceof Ew)return s?(n.inject(s,l),d.push(n.getName(l))):d.push(n),d;if(_l(n)){for(var g=pv(n),b=0;b<g.length;b++)d.push(g[b]);return d}if(!Array.isArray(n))return d.push(n.toString()),d;for(b=0;b<n.length;b++)Yn(n[b],i,s,l,d);return d}function gv(n){for(var i=0;i<n.length;i+=1){var s=n[i];if(Ua(s)&&!zm(s))return!1}return!0}var Mw=av(gd),_w=function(){function n(i,s,l){this.rules=i,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&gv(i),this.componentId=s,this.baseHash=ko(Mw,s),this.baseStyle=l,rd.registerId(s)}return n.prototype.generateAndInjectStyles=function(i,s,l){var d=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,s,l).className:"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))d=To(d,this.staticRulesId);else{var u=Jh(Yn(this.rules,i,s,l)),h=Zh(ko(this.baseHash,u)>>>0);if(!s.hasNameForId(this.componentId,h)){var g=l(u,".".concat(h),void 0,this.componentId);s.insertRules(this.componentId,h,g)}d=To(d,h),this.staticRulesId=h}else{for(var b=ko(this.baseHash,l.hash),m="",v=0;v<this.rules.length;v++){var x=this.rules[v];if(typeof x=="string")m+=x;else if(x){var j=Jh(Yn(x,i,s,l));b=ko(ko(b,String(v)),j),m+=j}}if(m){var S=Zh(b>>>0);if(!s.hasNameForId(this.componentId,S)){var w=l(m,".".concat(S),void 0,this.componentId);s.insertRules(this.componentId,S,w)}d=To(d,S)}}return{className:d,css:typeof window>"u"?s.getTag().getGroup(Da(this.componentId)):""}},n}(),Bm=Or?{Provider:function(n){return n.children},Consumer:function(n){return(0,n.children)(void 0)}}:Fe.createContext(void 0);Bm.Consumer;var sh={};function Rw(n,i,s){var l=zm(n),d=n,u=!ih(n),h=i.attrs,g=h===void 0?Om:h,b=i.componentId,m=b===void 0?function(_,R){var $=typeof _!="string"?"sc":r1(_);sh[$]=(sh[$]||0)+1;var L="".concat($,"-").concat(iv(gd+$+sh[$]));return R?"".concat(R,"-").concat(L):L}(i.displayName,i.parentComponentId):b,v=i.displayName,x=v===void 0?function(_){return ih(_)?"styled.".concat(_):"Styled(".concat(ow(_),")")}(n):v,j=i.displayName&&i.componentId?"".concat(r1(i.displayName),"-").concat(i.componentId):i.componentId||m,S=l&&d.attrs?d.attrs.concat(g).filter(Boolean):g,w=i.shouldForwardProp;if(l&&d.shouldForwardProp){var N=d.shouldForwardProp;if(i.shouldForwardProp){var E=i.shouldForwardProp;w=function(_,R){return N(_,R)&&E(_,R)}}else w=N}var A=new _w(s,j,l?d.componentStyle:void 0);function M(_,R){return function($,L,B){var q=$.attrs,ne=$.componentStyle,U=$.defaultProps,D=$.foldedComponentIds,J=$.styledComponentId,se=$.target,de=Or?void 0:Fe.useContext(Bm),V=nm(),I=$.shouldForwardProp||V.shouldForwardProp,Y=nv(L,de,U)||(Or?void 0:Ba),le=function(ve,tt,Sr){for(var Ut,xt=At(At({},tt),{className:void 0,theme:Sr}),zr=0;zr<ve.length;zr+=1){var fr=Ua(Ut=ve[zr])?Ut(xt):Ut;for(var Ar in fr)Ar==="className"?xt.className=To(xt.className,fr[Ar]):Ar==="style"?xt.style=At(At({},xt.style),fr[Ar]):xt[Ar]=fr[Ar]}return"className"in tt&&typeof tt.className=="string"&&(xt.className=To(xt.className,tt.className)),xt}(q,L,Y),z=le.as||se,W={};for(var ae in le)le[ae]===void 0||ae[0]==="$"||ae==="as"||ae==="theme"&&le.theme===Y||(ae==="forwardedAs"?W.as=le.forwardedAs:I&&!I(ae,z)||(W[ae]=le[ae]));var ie=function(ve,tt){var Sr=nm(),Ut=ve.generateAndInjectStyles(tt,Sr.styleSheet,Sr.stylis);return Ut}(ne,le),he=ie.className,te=ie.css,oe=To(D,J);he&&(oe+=" "+he),le.className&&(oe+=" "+le.className),W[ih(z)&&!ov.has(z)?"class":"className"]=oe,B&&(W.ref=B);var Se=C.createElement(z,W);return Or&&te?Fe.createElement(Fe.Fragment,null,Fe.createElement("style",{precedence:"styled-components",href:"sc-".concat(J,"-").concat(he),children:te}),Se):Se}(T,_,R)}M.displayName=x;var T=Fe.forwardRef(M);return T.attrs=S,T.componentStyle=A,T.displayName=x,T.shouldForwardProp=w,T.foldedComponentIds=l?To(d.foldedComponentIds,d.styledComponentId):"",T.styledComponentId=j,T.target=l?d.target:n,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(_){this._foldedDefaultProps=l?function(R){for(var $=[],L=1;L<arguments.length;L++)$[L-1]=arguments[L];for(var B=0,q=$;B<q.length;B++)Wh(R,q[B],!0);return R}({},d.defaultProps,_):_}}),$m(T,function(){return".".concat(T.styledComponentId)}),u&&dv(T,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function u1(n,i){for(var s=[n[0]],l=0,d=i.length;l<d;l+=1)s.push(i[l],n[l+1]);return s}var f1=function(n){return Object.assign(n,{isCss:!0})};function bv(n){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];if(Ua(n)||_l(n))return f1(Yn(u1(Om,Nl([n],i,!0))));var l=n;return i.length===0&&l.length===1&&typeof l[0]=="string"?Yn(l):f1(Yn(u1(l,i)))}function om(n,i,s){if(s===void 0&&(s=Ba),!i)throw Bl(1,i);var l=function(d){for(var u=[],h=1;h<arguments.length;h++)u[h-1]=arguments[h];return n(i,s,bv.apply(void 0,Nl([d],u,!1)))};return l.attrs=function(d){return om(n,i,At(At({},s),{attrs:Array.prototype.concat(s.attrs,d).filter(Boolean)}))},l.withConfig=function(d){return om(n,i,At(At({},s),d))},l}var xv=function(n){return om(Rw,n)},p=xv;ov.forEach(function(n){p[n]=xv(n)});var Dw=function(){function n(i,s){this.rules=i,this.componentId=s,this.isStatic=gv(i),rd.registerId(this.componentId+1)}return n.prototype.createStyles=function(i,s,l,d){var u=d(Jh(Yn(this.rules,s,l,d)),""),h=this.componentId+i;l.insertRules(h,h,u)},n.prototype.removeStyles=function(i,s){s.clearRules(this.componentId+i)},n.prototype.renderStyles=function(i,s,l,d){i>2&&rd.registerId(this.componentId+i);var u=this.componentId+i;this.isStatic?l.hasNameForId(u,u)||this.createStyles(i,s,l,d):(this.removeStyles(i,l),this.createStyles(i,s,l,d))},n}();function sn(n){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];var l=bv.apply(void 0,Nl([n],i,!1)),d="sc-global-".concat(iv(JSON.stringify(l))),u=new Dw(l,d),h=new WeakMap,g=function(m){var v=nm(),x=Or?void 0:Fe.useContext(Bm),j=h.get(v.styleSheet);if(j===void 0&&(j=v.styleSheet.allocateGSInstance(d),h.set(v.styleSheet,j)),(typeof window>"u"||!v.styleSheet.server)&&b(j,m,v.styleSheet,x,v.stylis),Or||Fe.useLayoutEffect(function(){return v.styleSheet.server||b(j,m,v.styleSheet,x,v.stylis),function(){var N;u.removeStyles(j,v.styleSheet),N=v.styleSheet.options.target,typeof document<"u"&&(N??document).querySelectorAll('style[data-styled-global="'.concat(d,'"]')).forEach(function(E){return E.remove()})}},[j,m,v.styleSheet,x,v.stylis]),Or){var S=d+j,w=typeof window>"u"?v.styleSheet.getTag().getGroup(Da(S)):"";if(w)return Fe.createElement("style",{key:"".concat(d,"-").concat(j),"data-styled-global":d,children:w})}return null};function b(m,v,x,j,S){if(u.isStatic)u.renderStyles(m,ew,x,S);else{var w=At(At({},v),{theme:nv(v,j,g.defaultProps)});u.renderStyles(m,w,x,S)}}return Fe.memo(g)}const Ow=p.span`
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
`;function zw(){setTimeout(()=>{let n=document.querySelector("#main-wrapper");n.classList.contains("menu-toggle")?n.classList.remove("menu-toggle"):n.classList.add("menu-toggle")},200)}const $w=()=>{const[n,i]=C.useState(!1),{openMenuToggle:s}=C.useContext(Ol);return r.jsxs("div",{className:"nav-header",children:[r.jsxs(Ne,{to:"/dashboard",className:"brand-logo",children:[r.jsx("img",{src:R3,alt:"Educareer Logo",className:"logo-abbr",style:{width:40,height:40}}),r.jsx("div",{className:"brand-title",children:r.jsx(Ow,{children:"Educareer"})})]}),r.jsx("div",{className:"nav-control",onClick:()=>{i(!n),s(),zw()},children:r.jsxs("div",{className:`hamburger ${n?"is-active":""}`,children:[r.jsx("span",{className:"line"}),r.jsx("span",{className:"line"}),r.jsx("span",{className:"line"})]})})]})},Bw=({toggleTab:n,toggleChatBox:i})=>r.jsx("div",{className:`tab-pane fade  ${n==="notes"?"active show":""}`,id:"notes",children:r.jsxs("div",{className:"card mb-sm-3 mb-md-0 note_card",children:[r.jsxs("div",{className:"card-header chat-list-header text-center",children:[r.jsx(Ne,{to:"#",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"18px",height:"18px",viewBox:"0 0 24 24",version:"1.1",children:r.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[r.jsx("rect",{fill:"#000000",x:"4",y:"11",width:"16",height:"2",rx:"1"}),r.jsx("rect",{fill:"#000000",opacity:"0.3",transform:"translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) ",x:"4",y:"11",width:"16",height:"2",rx:"1"})]})})}),r.jsxs("div",{children:[r.jsx("h6",{className:"mb-1",children:"Notes"}),r.jsx("p",{className:"mb-0",children:"Add New Nots"})]}),r.jsx(Ne,{to:"#",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"18px",height:"18px",viewBox:"0 0 24 24",version:"1.1",children:r.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[r.jsx("rect",{x:"0",y:"0",width:"24",height:"24"}),r.jsx("path",{d:"M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z",fill:"#000000",fillRule:"nonzero",opacity:"0.3"}),r.jsx("path",{d:"M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z",fill:"#000000",fillRule:"nonzero"})]})})})]}),r.jsx("div",{className:"card-body contacts_body p-0 dlab-scroll  ",id:"DZ_W_Contacts_Body2",children:r.jsxs("ul",{className:"contacts",children:[r.jsx("li",{className:"active",children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"New order placed.."}),r.jsx("p",{children:"10 Aug 2020"})]}),r.jsxs("div",{className:"ms-auto",children:[r.jsx(Ne,{to:"#",className:"btn btn-primary btn-xs sharp me-1",children:r.jsx("i",{className:"fas fa-pencil-alt"})}),r.jsx(Ne,{to:"#",className:"btn btn-danger btn-xs sharp",children:r.jsx("i",{className:"fa fa-trash"})})]})]})}),r.jsx("li",{children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Youtube, a video-sharing website.."}),r.jsx("p",{children:"10 Aug 2020"})]}),r.jsxs("div",{className:"ms-auto",children:[r.jsx(Ne,{to:"#",className:"btn btn-primary btn-xs sharp me-1",children:r.jsx("i",{className:"fas fa-pencil-alt"})}),r.jsx(Ne,{to:"#",className:"btn btn-danger btn-xs sharp",children:r.jsx("i",{className:"fa fa-trash"})})]})]})}),r.jsx("li",{children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"john just buy your product.."}),r.jsx("p",{children:"10 Aug 2020"})]}),r.jsxs("div",{className:"ms-auto",children:[r.jsx(Ne,{to:"#",className:"btn btn-primary btn-xs sharp me-1",children:r.jsx("i",{className:"fas fa-pencil-alt"})}),r.jsx(Ne,{to:"#",className:"btn btn-danger btn-xs sharp",children:r.jsx("i",{className:"fa fa-trash"})})]})]})}),r.jsx("li",{children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Athan Jacoby"}),r.jsx("p",{children:"10 Aug 2020"})]}),r.jsxs("div",{className:"ms-auto",children:[r.jsx(Ne,{to:"#",className:"btn btn-primary btn-xs sharp me-1",children:r.jsx("i",{className:"fas fa-pencil-alt"})}),r.jsx(Ne,{to:"#",className:"btn btn-danger btn-xs sharp",children:r.jsx("i",{className:"fa fa-trash"})})]})]})})]})})]})}),Uw=({toggleTab:n,toggleChatBox:i})=>r.jsx("div",{className:`tab-pane fade  ${n==="alerts"?"active show":""}`,id:"alerts",role:"tabpanel",children:r.jsxs("div",{className:"card mb-sm-3 mb-md-0 contacts_card",children:[r.jsxs("div",{className:"card-header chat-list-header text-center",children:[r.jsx(Ne,{to:"#",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"18px",height:"18px",viewBox:"0 0 24 24",version:"1.1",children:r.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[r.jsx("rect",{x:"0",y:"0",width:"24",height:"24"}),r.jsx("circle",{fill:"#000000",cx:"5",cy:"12",r:"2"}),r.jsx("circle",{fill:"#000000",cx:"12",cy:"12",r:"2"}),r.jsx("circle",{fill:"#000000",cx:"19",cy:"12",r:"2"})]})})}),r.jsxs("div",{children:[r.jsx("h6",{className:"mb-1",children:"Notications"}),r.jsx("p",{className:"mb-0",children:"Show All"})]}),r.jsx(Ne,{to:"#",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"18px",height:"18px",viewBox:"0 0 24 24",version:"1.1",children:r.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[r.jsx("rect",{x:"0",y:"0",width:"24",height:"24"}),r.jsx("path",{d:"M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z",fill:"#000000",fillRule:"nonzero",opacity:"0.3"}),r.jsx("path",{d:"M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z",fill:"#000000",fillRule:"nonzero"})]})})})]}),r.jsx("div",{className:"card-body contacts_body p-0 dlab-scroll  ",id:"DZ_W_Contacts_Body1",children:r.jsxs("ul",{className:"contacts",children:[r.jsx("li",{className:"name-first-letter",children:"SEVER STATUS"}),r.jsx("li",{className:"active",children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsx("div",{className:"img_cont primary",children:"KK"}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"David Nester Birthday"}),r.jsx("p",{className:"text-primary",children:"Today"})]})]})}),r.jsx("li",{className:"name-first-letter",children:"SOCIAL"}),r.jsx("li",{children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsx("div",{className:"img_cont success",children:"RU"}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Perfection Simplified"}),r.jsx("p",{children:"Jame Smith commented on your status"})]})]})}),r.jsx("li",{className:"name-first-letter",children:"SEVER STATUS"}),r.jsx("li",{children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsx("div",{className:"img_cont primary",children:"AU"}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"AharlieKane"}),r.jsx("p",{children:"Sami is online"})]})]})}),r.jsx("li",{children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsx("div",{className:"img_cont info",children:"MO"}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Athan Jacoby"}),r.jsx("p",{children:"Nargis left 30 mins ago"})]})]})})]})}),r.jsx("div",{className:"card-footer"})]})}),nc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAlgCWAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqEXMbXX2dTlwu446AZxU1Z8cMcOskRoFBtyTj13UASvfqsrotvcSbDgsiZGfzqSe6SAICrs7/dRFyTVSSO9t1nmSSPaGaTZtzuH1+lPjcTapFJjhrbcoPuaALkMyTxLJGcq1PJAGScCslN62t1JE5Uw3DsBnAIHUGrNoPtdu80x3LMeEJyFUdB9aALEFxHcBzGchHKE+pHpUC6grvtW2uCN23eE+XrjOc03TFVFulUAKLhgAO3Sof9MsLZZXkjaNT88YXsT1z680AW7i9jt32FZHbbuIRc7R6mrCOsiK6nKsMg+oqnAAdSvd3og59MUulEnTYc+h/maALlFFFABRRRQAUUUUAFFFFABRRRQAVD9n/037Tu/wCWfl7ce+c5qaigCk9gx3xrcMsDklowo79cGpJ7QuY3hk8mSMbVYLkY9MVZooAqfYV+zxwbzsDbnyOX7/zqWC38h5SrfI7bgmPunvU1FAEEFuIRMC24SyF+mMZ7VANPbCxPcM1upBEe0dugJ7ir1FAFS4s2llMkUxiZl2Phc7h/jViKNYYljQYVRgU+igAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9k=",oc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAlgCWAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqEXMbXX2dTlwu446AZxU1Z8cMcOskRoFBtyTj13UASvfqsrotvcSbDgsiZGfzqSe6SAICrs7/dRFyTVSSO9t1nmSSPaGaTZtzuH1+lPjcTapFJjhrbcoPuaALkMyTxLJGcq1PJAGScCslN62t1JE5Uw3DsBnAIHUGrNoPtdu80x3LMeEJyFUdB9aALEFxHcBzGchHKE+pHpUC6grvtW2uCN23eE+XrjOc03TFVFulUAKLhgAO3Sof9MsLZZXkjaNT88YXsT1z680AW7i9jt32FZHbbuIRc7R6mrCOsiK6nKsMg+oqnAAdSvd3og59MUulEnTYc+h/maALlFFFABRRRQAUUUUAFFFFABRRRQAVD9n/037Tu/wCWfl7ce+c5qaigCk9gx3xrcMsDklowo79cGpJ7QuY3hk8mSMbVYLkY9MVZooAqfYV+zxwbzsDbnyOX7/zqWC38h5SrfI7bgmPunvU1FAEEFuIRMC24SyF+mMZ7VANPbCxPcM1upBEe0dugJ7ir1FAFS4s2llMkUxiZl2Phc7h/jViKNYYljQYVRgU+igAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9k=",ch="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAlgCWAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqEXMbXX2dTlwu446AZxU1Z8cMcOskRoFBtyTj13UASvfqsrotvcSbDgsiZGfzqSe6SAICrs7/dRFyTVSSO9t1nmSSPaGaTZtzuH1+lPjcTapFJjhrbcoPuaALkMyTxLJGcq1PJAGScCslN62t1JE5Uw3DsBnAIHUGrNoPtdu80x3LMeEJyFUdB9aALEFxHcBzGchHKE+pHpUC6grvtW2uCN23eE+XrjOc03TFVFulUAKLhgAO3Sof9MsLZZXkjaNT88YXsT1z680AW7i9jt32FZHbbuIRc7R6mrCOsiK6nKsMg+oqnAAdSvd3og59MUulEnTYc+h/maALlFFFABRRRQAUUUUAFFFFABRRRQAVD9n/037Tu/wCWfl7ce+c5qaigCk9gx3xrcMsDklowo79cGpJ7QuY3hk8mSMbVYLkY9MVZooAqfYV+zxwbzsDbnyOX7/zqWC38h5SrfI7bgmPunvU1FAEEFuIRMC24SyF+mMZ7VANPbCxPcM1upBEe0dugJ7ir1FAFS4s2llMkUxiZl2Phc7h/jViKNYYljQYVRgU+igAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9k=",dh="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAlgCWAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqEXMbXX2dTlwu446AZxU1Z8cMcOskRoFBtyTj13UASvfqsrotvcSbDgsiZGfzqSe6SAICrs7/dRFyTVSSO9t1nmSSPaGaTZtzuH1+lPjcTapFJjhrbcoPuaALkMyTxLJGcq1PJAGScCslN62t1JE5Uw3DsBnAIHUGrNoPtdu80x3LMeEJyFUdB9aALEFxHcBzGchHKE+pHpUC6grvtW2uCN23eE+XrjOc03TFVFulUAKLhgAO3Sof9MsLZZXkjaNT88YXsT1z680AW7i9jt32FZHbbuIRc7R6mrCOsiK6nKsMg+oqnAAdSvd3og59MUulEnTYc+h/maALlFFFABRRRQAUUUUAFFFFABRRRQAVD9n/037Tu/wCWfl7ce+c5qaigCk9gx3xrcMsDklowo79cGpJ7QuY3hk8mSMbVYLkY9MVZooAqfYV+zxwbzsDbnyOX7/zqWC38h5SrfI7bgmPunvU1FAEEFuIRMC24SyF+mMZ7VANPbCxPcM1upBEe0dugJ7ir1FAFS4s2llMkUxiZl2Phc7h/jViKNYYljQYVRgU+igAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9k=",uh="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAlgCWAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9MooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqEXMbXX2dTlwu446AZxU1Z8cMcOskRoFBtyTj13UASvfqsrotvcSbDgsiZGfzqSe6SAICrs7/dRFyTVSSO9t1nmSSPaGaTZtzuH1+lPjcTapFJjhrbcoPuaALkMyTxLJGcq1PJAGScCslN62t1JE5Uw3DsBnAIHUGrNoPtdu80x3LMeEJyFUdB9aALEFxHcBzGchHKE+pHpUC6grvtW2uCN23eE+XrjOc03TFVFulUAKLhgAO3Sof9MsLZZXkjaNT88YXsT1z680AW7i9jt32FZHbbuIRc7R6mrCOsiK6nKsMg+oqnAAdSvd3og59MUulEnTYc+h/maALlFFFABRRRQAUUUUAFFFFABRRRQAVD9n/037Tu/wCWfl7ce+c5qaigCk9gx3xrcMsDklowo79cGpJ7QuY3hk8mSMbVYLkY9MVZooAqfYV+zxwbzsDbnyOX7/zqWC38h5SrfI7bgmPunvU1FAEEFuIRMC24SyF+mMZ7VANPbCxPcM1upBEe0dugJ7ir1FAFS4s2llMkUxiZl2Phc7h/jViKNYYljQYVRgU+igAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA/9k=",Kw=({avatar1:n,avatar2:i,openMsg:s,offMsg:l})=>{const[d,u]=C.useState(!1);return r.jsxs("div",{className:`card chat dlab-chat-history-box ${s?"":"d-none"}`,children:[r.jsxs("div",{className:"card-header chat-list-header text-center",children:[r.jsx(Ne,{to:"#",className:"dlab-chat-history-back",onClick:()=>l(),children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"18px",height:"18px",viewBox:"0 0 24 24",version:"1.1",children:r.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[r.jsx("polygon",{points:"0 0 24 0 24 24 0 24"}),r.jsx("rect",{fill:"#000000",opacity:"0.3",transform:"translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) ",x:"14",y:"7",width:"2",height:"10",rx:"1"}),r.jsx("path",{d:"M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z",fill:"#000000",fillRule:"nonzero",transform:"translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) "})]})})}),r.jsxs("div",{children:[r.jsx("h6",{className:"mb-1",children:"Chat with Khelesh"}),r.jsx("p",{className:"mb-0 text-success",children:"Online"})]}),r.jsxs("div",{className:"dropdown",children:[r.jsx(Ne,{to:"#","data-toggle":"dropdown","aria-expanded":"false",onClick:()=>u(!d),children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"18px",height:"18px",viewBox:"0 0 24 24",version:"1.1",children:r.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[r.jsx("rect",{x:"0",y:"0",width:"24",height:"24"}),r.jsx("circle",{fill:"#000000",cx:"5",cy:"12",r:"2"}),r.jsx("circle",{fill:"#000000",cx:"12",cy:"12",r:"2"}),r.jsx("circle",{fill:"#000000",cx:"19",cy:"12",r:"2"})]})})}),r.jsxs("ul",{className:`dropdown-menu dropdown-menu-right ${d?"show":""}`,children:[r.jsxs("li",{className:"dropdown-item",onClick:()=>u(!1),children:[r.jsx("i",{className:"fa fa-user-circle text-primary me-2"})," ","View profile"]}),r.jsxs("li",{className:"dropdown-item",onClick:()=>u(!1),children:[r.jsx("i",{className:"fa fa-users text-primary me-2"})," Add to close friends"]}),r.jsxs("li",{className:"dropdown-item",onClick:()=>u(!1),children:[r.jsx("i",{className:"fa fa-plus text-primary me-2"})," Add to group"]}),r.jsxs("li",{className:"dropdown-item",onClick:()=>u(!1),children:[r.jsx("i",{className:"fa fa-ban text-primary me-2"})," Block"]})]})]})]}),r.jsxs("div",{className:"card-body msg_card_body dlab-scroll  ",id:"DZ_W_Contacts_Body3",children:[r.jsxs("div",{className:"d-flex justify-content-start mb-4",children:[r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:n,className:"rounded-circle user_img_msg",alt:""})}),r.jsxs("div",{className:"msg_cotainer",children:["Hi, how are you samim?",r.jsx("span",{className:"msg_time",children:"8:40 AM, Today"})]})]}),r.jsxs("div",{className:"d-flex justify-content-end mb-4",children:[r.jsxs("div",{className:"msg_cotainer_send",children:["Hi Khalid i am good tnx how about you?",r.jsx("span",{className:"msg_time_send",children:"8:55 AM, Today"})]}),r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:i,className:"rounded-circle user_img_msg",alt:""})})]}),r.jsxs("div",{className:"d-flex justify-content-start mb-4",children:[r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:n,className:"rounded-circle user_img_msg",alt:""})}),r.jsxs("div",{className:"msg_cotainer",children:["I am good too, thank you for your chat template",r.jsx("span",{className:"msg_time",children:"9:00 AM, Today"})]})]}),r.jsxs("div",{className:"d-flex justify-content-end mb-4",children:[r.jsxs("div",{className:"msg_cotainer_send",children:["You are welcome",r.jsx("span",{className:"msg_time_send",children:"9:05 AM, Today"})]}),r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:i,className:"rounded-circle user_img_msg",alt:""})})]}),r.jsxs("div",{className:"d-flex justify-content-start mb-4",children:[r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:n,className:"rounded-circle user_img_msg",alt:""})}),r.jsxs("div",{className:"msg_cotainer",children:["I am looking for your next templates",r.jsx("span",{className:"msg_time",children:"9:07 AM, Today"})]})]}),r.jsxs("div",{className:"d-flex justify-content-end mb-4",children:[r.jsxs("div",{className:"msg_cotainer_send",children:["Ok, thank you have a good day",r.jsx("span",{className:"msg_time_send",children:"9:10 AM, Today"})]}),r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:i,className:"rounded-circle user_img_msg",alt:""})})]}),r.jsxs("div",{className:"d-flex justify-content-start mb-4",children:[r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:n,className:"rounded-circle user_img_msg",alt:""})}),r.jsxs("div",{className:"msg_cotainer",children:["Bye, see you",r.jsx("span",{className:"msg_time",children:"9:12 AM, Today"})]})]}),r.jsxs("div",{className:"d-flex justify-content-start mb-4",children:[r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:n,className:"rounded-circle user_img_msg",alt:""})}),r.jsxs("div",{className:"msg_cotainer",children:["Hi, how are you samim?",r.jsx("span",{className:"msg_time",children:"8:40 AM, Today"})]})]}),r.jsxs("div",{className:"d-flex justify-content-end mb-4",children:[r.jsxs("div",{className:"msg_cotainer_send",children:["Hi Khalid i am good tnx how about you?",r.jsx("span",{className:"msg_time_send",children:"8:55 AM, Today"})]}),r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:i,className:"rounded-circle user_img_msg",alt:""})})]}),r.jsxs("div",{className:"d-flex justify-content-start mb-4",children:[r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:n,className:"rounded-circle user_img_msg",alt:""})}),r.jsxs("div",{className:"msg_cotainer",children:["I am good too, thank you for your chat template",r.jsx("span",{className:"msg_time",children:"9:00 AM, Today"})]})]}),r.jsxs("div",{className:"d-flex justify-content-end mb-4",children:[r.jsxs("div",{className:"msg_cotainer_send",children:["You are welcome",r.jsx("span",{className:"msg_time_send",children:"9:05 AM, Today"})]}),r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:i,className:"rounded-circle user_img_msg",alt:""})})]}),r.jsxs("div",{className:"d-flex justify-content-start mb-4",children:[r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:n,className:"rounded-circle user_img_msg",alt:""})}),r.jsxs("div",{className:"msg_cotainer",children:["I am looking for your next templates",r.jsx("span",{className:"msg_time",children:"9:07 AM, Today"})]})]}),r.jsxs("div",{className:"d-flex justify-content-end mb-4",children:[r.jsxs("div",{className:"msg_cotainer_send",children:["Ok, thank you have a good day",r.jsx("span",{className:"msg_time_send",children:"9:10 AM, Today"})]}),r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:i,className:"rounded-circle user_img_msg",alt:""})})]}),r.jsxs("div",{className:"d-flex justify-content-start mb-4",children:[r.jsx("div",{className:"img_cont_msg",children:r.jsx("img",{src:n,className:"rounded-circle user_img_msg",alt:""})}),r.jsxs("div",{className:"msg_cotainer",children:["Bye, see you",r.jsx("span",{className:"msg_time",children:"9:12 AM, Today"})]})]})]}),r.jsx("div",{className:"card-footer type_msg",children:r.jsxs("div",{className:"input-group",children:[r.jsx("textarea",{className:"form-control",placeholder:"Type your message..."}),r.jsx("div",{className:"input-group-append",children:r.jsx("button",{type:"button",className:"btn btn-primary",children:r.jsx("i",{className:"fa fa-location-arrow"})})})]})})]})},Lw=({toggleChatBox:n,toggleTab:i})=>{const[s,l]=C.useState(!1);return r.jsxs("div",{className:`tab-pane fade  ${i==="chat"?"active show":""}`,id:"chat",role:"tabpanel",children:[r.jsxs("div",{className:`card mb-sm-3 mb-md-0 contacts_card dlab-chat-user-box ${s?"d-none":""}`,children:[r.jsxs("div",{className:"card-header chat-list-header text-center",children:[r.jsx(Ne,{to:"#",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"18px",height:"18px",viewBox:"0 0 24 24",version:"1.1",children:r.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[r.jsx("rect",{fill:"#000000",x:"4",y:"11",width:"16",height:"2",rx:"1"}),r.jsx("rect",{fill:"#000000",opacity:"0.3",transform:"translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) ",x:"4",y:"11",width:"16",height:"2",rx:"1"})]})})}),r.jsxs("div",{children:[r.jsx("h6",{className:"mb-1",children:"Chat List"}),r.jsx("p",{className:"mb-0",children:"Show All"})]}),r.jsx(Ne,{to:"#",children:r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"18px",height:"18px",viewBox:"0 0 24 24",version:"1.1",children:r.jsxs("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[r.jsx("rect",{x:"0",y:"0",width:"24",height:"24"}),r.jsx("circle",{fill:"#000000",cx:"5",cy:"12",r:"2"}),r.jsx("circle",{fill:"#000000",cx:"12",cy:"12",r:"2"}),r.jsx("circle",{fill:"#000000",cx:"19",cy:"12",r:"2"})]})})})]}),r.jsx("div",{className:`card-body contacts_body p-0 dlab-scroll  ${n?"ps ps--active-y":""}`,id:"DZ_W_Contacts_Body",children:r.jsxs("ul",{className:"contacts",children:[r.jsx("li",{className:"name-first-letter",children:"A"}),r.jsx("li",{className:"active dlab-chat-user",onClick:()=>l(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:nc,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Archie Parker"}),r.jsx("p",{children:"Kalid is online"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>l(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:oc,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon offline"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Alfie Mason"}),r.jsx("p",{children:"Taherah left 7 mins ago"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>l(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:ch,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"AharlieKane"}),r.jsx("p",{children:"Sami is online"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>l(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:dh,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon offline"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Athan Jacoby"}),r.jsx("p",{children:"Nargis left 30 mins ago"})]})]})}),r.jsx("li",{className:"name-first-letter",children:"B"}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>l(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:uh,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon offline"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Bashid Samim"}),r.jsx("p",{children:"Rashid left 50 mins ago"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>l(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:nc,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Breddie Ronan"}),r.jsx("p",{children:"Kalid is online"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>l(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:oc,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon offline"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Ceorge Carson"}),r.jsx("p",{children:"Taherah left 7 mins ago"})]})]})}),r.jsx("li",{className:"name-first-letter",children:"D"}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>l(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:ch,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Darry Parker"}),r.jsx("p",{children:"Sami is online"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>l(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:dh,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon offline"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Denry Hunter"}),r.jsx("p",{children:"Nargis left 30 mins ago"})]})]})}),r.jsx("li",{className:"name-first-letter",children:"J"}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>l(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:uh,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon offline"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Jack Ronan"}),r.jsx("p",{children:"Rashid left 50 mins ago"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>l(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:nc,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Jacob Tucker"}),r.jsx("p",{children:"Kalid is online"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>l(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:oc,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon offline"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"James Logan"}),r.jsx("p",{children:"Taherah left 7 mins ago"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>l(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:ch,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Joshua Weston"}),r.jsx("p",{children:"Sami is online"})]})]})}),r.jsx("li",{className:"name-first-letter",children:"O"}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>l(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:dh,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon offline"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Oliver Acker"}),r.jsx("p",{children:"Nargis left 30 mins ago"})]})]})}),r.jsx("li",{className:"dlab-chat-user",onClick:()=>l(!0),children:r.jsxs("div",{className:"d-flex bd-highlight",children:[r.jsxs("div",{className:"img_cont",children:[r.jsx("img",{src:uh,className:"rounded-circle user_img",alt:""}),r.jsx("span",{className:"online_icon offline"})]}),r.jsxs("div",{className:"user_info",children:[r.jsx("span",{children:"Oscar Weston"}),r.jsx("p",{children:"Rashid left 50 mins ago"})]})]})})]})})]}),r.jsx(Kw,{avatar1:nc,avatar2:oc,openMsg:s,offMsg:()=>l(!1)})]})},Pw=({onClick:n,toggle:i})=>{const[s,l]=C.useState(window.location.hash.slice(1)?window.location.hash.slice(1):"chat"),d=[{href:"#notes",name:"Notes"},{href:"#alerts",name:"Alerts"},{href:"#chat",name:"Chat"}];return r.jsxs("div",{className:`chatbox ${i==="chatbox"?"active":""}`,children:[r.jsx("div",{className:"chatbox-close",onClick:()=>n()}),r.jsxs("div",{className:"custom-tab-1",children:[r.jsx("ul",{className:"nav nav-tabs",children:d.map((u,h)=>r.jsx("li",{className:"nav-item",children:r.jsx(Ne,{className:`nav-link ${s===u.name.toLocaleLowerCase()?"active":""}`,to:"#","data-toggle":"tab",href:u.href,onClick:()=>l(u.name.toLocaleLowerCase()),children:u.name})},h))}),r.jsxs("div",{className:"tab-content",children:[r.jsx(Lw,{toggle:i,toggleTab:s}),r.jsx(Bw,{toggle:i,toggleTab:s}),r.jsx(Uw,{toggle:i,toggleTab:s})]})]})]})};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=(...n)=>n.filter((i,s,l)=>!!i&&i.trim()!==""&&l.indexOf(i)===s).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,s,l)=>l?l.toUpperCase():s.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=n=>{const i=qw(n);return i.charAt(0).toUpperCase()+i.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=n=>{for(const i in n)if(i.startsWith("aria-")||i==="role"||i==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=C.forwardRef(({color:n="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:d="",children:u,iconNode:h,...g},b)=>C.createElement("svg",{ref:b,...Fw,width:i,height:i,stroke:n,strokeWidth:l?Number(s)*24/Number(i):s,className:vv("lucide",d),...!u&&!Qw(g)&&{"aria-hidden":"true"},...g},[...h.map(([m,v])=>C.createElement(m,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=(n,i)=>{const s=C.forwardRef(({className:l,...d},u)=>C.createElement(Yw,{ref:u,iconNode:i,className:vv(`lucide-${Hw(h1(n))}`,`lucide-${n}`,l),...d}));return s.displayName=h1(n),s};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],yv=fe("activity",Vw);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],bd=fe("archive",Gw);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]],Xw=fe("arrow-down-right",Iw);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Jw=fe("arrow-left",Zw);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],fh=fe("arrow-up-right",Ww);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Mo=fe("award",eS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],rS=fe("ban",tS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],xd=fe("book-open",nS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],am=fe("calendar",oS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],vd=fe("chart-column",aS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],jv=fe("check",iS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],et=fe("chevron-down",lS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],yd=fe("chevron-left",sS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],jd=fe("chevron-right",cS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]],uS=fe("chevrons-left",dS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]],hS=fe("chevrons-right",fS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],wd=fe("circle-alert",mS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],ft=fe("circle-check-big",pS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],_o=fe("circle-question-mark",gS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],im=fe("circle-x",bS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],m1=fe("circle",xS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Zt=fe("clock",vS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Ul=fe("copy",yS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],lm=fe("credit-card",jS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],nd=fe("crown",wS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],sm=fe("dollar-sign",SS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],on=fe("download",AS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],zo=fe("ellipsis",kS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ct=fe("eye",CS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],TS=fe("file-spreadsheet",ES);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Et=fe("file-text",NS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}]],_S=fe("file",MS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],vr=fe("funnel",RS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],OS=fe("globe",DS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],wv=fe("graduation-cap",zS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],BS=fe("image",$S);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],Sv=fe("link-2",US);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Um=fe("lock",KS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],od=fe("mail",LS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],HS=fe("menu",PS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],Av=fe("message-square",qS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],at=fe("plus",FS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]],YS=fe("presentation",QS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],GS=fe("printer",VS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],p1=fe("receipt",IS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],kv=fe("refresh-cw",XS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Cv=fe("save",ZS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],cn=fe("search",JS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Oa=fe("settings",WS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Rl=fe("shield",e6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],an=fe("square-pen",t6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Vn=fe("star",r6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=[["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}],["path",{d:"M17 14V2",key:"8ymqnk"}]],g1=fe("thumbs-down",n6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=[["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}],["path",{d:"M7 10v12",key:"1qc93n"}]],b1=fe("thumbs-up",o6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],$o=fe("trash-2",a6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Ev=fe("upload",i6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=[["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m14.305 16.53.923-.382",key:"1itpsq"}],["path",{d:"m15.228 13.852-.923-.383",key:"eplpkm"}],["path",{d:"m16.852 12.228-.383-.923",key:"13v3q0"}],["path",{d:"m16.852 17.772-.383.924",key:"1i8mnm"}],["path",{d:"m19.148 12.228.383-.923",key:"1q8j1v"}],["path",{d:"m19.53 18.696-.382-.924",key:"vk1qj3"}],["path",{d:"m20.772 13.852.924-.383",key:"n880s0"}],["path",{d:"m20.772 16.148.924.383",key:"1g6xey"}],["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Tv=fe("user-cog",l6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Km=fe("user",s6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],br=fe("users",c6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Me=fe("x",d6);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Fn=fe("zap",u6);function Nv({title:n,description:i,icon:s,action:l,children:d}){return r.jsxs("div",{className:"flex items-center justify-between mb-8",children:[r.jsxs("div",{className:"flex items-center",children:[s&&r.jsx("span",{className:"mr-2",children:s}),r.jsxs("div",{children:[r.jsx("h1",{className:"text-2xl font-bold text-foreground",children:n}),i&&r.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:i})]})]}),r.jsxs("div",{className:"flex items-center",children:[l&&r.jsx("button",{onClick:l.onClick,className:"btn btn-primary ml-2",children:l.label}),d]})]})}const Sd=({pageTitle:n,pageDescription:i,pageIcon:s,tabs:l,action:d,viewMode:u="tabs"})=>{var b;const[h,g]=C.useState(((b=l[0])==null?void 0:b.id)||"");return r.jsxs("div",{className:"settings-layout",children:[r.jsx(Nv,{title:n,description:i,icon:s,action:d}),u==="tabs"?r.jsx(r.Fragment,{children:r.jsxs("div",{className:"card mb-4",children:[r.jsx("div",{className:"card-header p-0 border-bottom-0",children:r.jsx("ul",{className:"nav nav-tabs",role:"tablist",children:l.map(m=>r.jsx("li",{className:"nav-item",children:r.jsxs("button",{className:`nav-link ${h===m.id?"active":""}`,onClick:()=>g(m.id),role:"tab","aria-selected":h===m.id,children:[m.icon&&r.jsx("span",{className:"me-2",children:m.icon}),m.label]})},m.id))})}),r.jsx("div",{className:"tab-content card-body p-0",children:l.map(m=>r.jsx("div",{className:`tab-pane fade ${h===m.id?"show active":""}`,role:"tabpanel",children:m.content},m.id))})]})}):r.jsx("div",{className:"row",children:l.map(m=>r.jsx("div",{className:"col-lg-6 mb-4",children:r.jsxs("div",{className:"card h-100",children:[r.jsx("div",{className:"card-header bg-light",children:r.jsxs("h5",{className:"mb-0",children:[m.icon&&r.jsx("span",{className:"me-2",children:m.icon}),m.label]})}),r.jsx("div",{className:"card-body",children:m.content})]})},m.id))})]})},$t=({fields:n,title:i,submitLabel:s="Create",onSubmit:l,initialData:d={},isLoading:u=!1})=>{const[h,g]=C.useState(d),[b,m]=C.useState({}),v=S=>{const{name:w,value:N,type:E}=S.target;if(E==="checkbox"){const A=S.target.checked;g(M=>({...M,[w]:A}))}else g(A=>({...A,[w]:N}));b[w]&&m(A=>{const M={...A};return delete M[w],M})},x=()=>{const S={};return n.forEach(w=>{const N=h[w.name];w.required&&!N&&(S[w.name]=`${w.label} is required`),w.validation&&N&&!w.validation(N)&&(S[w.name]=`${w.label} is invalid`)}),m(S),Object.keys(S).length===0},j=S=>{S.preventDefault(),x()&&(l(h),g(d))};return r.jsxs("div",{className:"card mb-4",children:[r.jsx("div",{className:"card-header bg-light",children:r.jsx("h5",{className:"mb-0",children:i})}),r.jsx("div",{className:"card-body",children:r.jsxs("form",{onSubmit:j,children:[r.jsx("div",{className:"row",children:n.map(S=>{var w;return r.jsxs("div",{className:S.type==="textarea"?"col-12 mb-3":"col-md-6 mb-3",children:[r.jsxs("label",{htmlFor:S.name,className:"form-label",children:[S.label,S.required&&r.jsx("span",{className:"text-danger ms-1",children:"*"})]}),S.type==="select"?r.jsxs("select",{id:S.name,name:S.name,className:`form-select ${b[S.name]?"is-invalid":""}`,onChange:v,value:h[S.name]||"",children:[r.jsx("option",{value:"",children:"-- Select --"}),(w=S.options)==null?void 0:w.map(N=>r.jsx("option",{value:N.value,children:N.label},N.value))]}):S.type==="textarea"?r.jsx("textarea",{id:S.name,name:S.name,className:`form-control ${b[S.name]?"is-invalid":""}`,placeholder:S.placeholder,onChange:v,value:h[S.name]||"",rows:4}):S.type==="toggle"?r.jsxs("div",{className:"form-check form-switch",children:[r.jsx("input",{id:S.name,name:S.name,type:"checkbox",className:"form-check-input",onChange:v,checked:h[S.name]||!1}),r.jsx("label",{className:"form-check-label",htmlFor:S.name,children:h[S.name]?"Active":"Inactive"})]}):r.jsx("input",{id:S.name,name:S.name,type:S.type,className:`form-control ${b[S.name]?"is-invalid":""}`,placeholder:S.placeholder,onChange:v,value:h[S.name]||""}),b[S.name]&&r.jsx("div",{className:"invalid-feedback d-block",children:b[S.name]})]},S.name)})}),r.jsxs("div",{className:"d-flex gap-2",children:[r.jsx("button",{type:"submit",className:"btn btn-primary",disabled:u,children:u?"Processing...":s}),r.jsx("button",{type:"reset",className:"btn btn-outline-secondary",onClick:()=>g(d),children:"Reset"})]})]})})]})},f6=p.div`
	background-color: white;
	border: 1px solid #e5e7eb;
	border-radius: 0.75rem;
	overflow: hidden;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

	@media (prefers-color-scheme: dark) {
		background-color: #1f2937;
		border-color: #374151;
	}
`,h6=p.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 1.5rem;
	background-color: #f9fafb;
	border-bottom: 1px solid #e5e7eb;

	@media (prefers-color-scheme: dark) {
		background-color: #2d3748;
		border-bottom-color: #4b5563;
	}
`,m6=p.h5`
	font-size: 1rem;
	font-weight: 600;
	color: #111827;
	margin: 0;

	@media (prefers-color-scheme: dark) {
		color: white;
	}
`,p6=p.div`
	position: relative;

	svg {
		position: absolute;
		left: 0.75rem;
		top: 50%;
		transform: translateY(-50%);
		width: 1rem;
		height: 1rem;
		color: #9ca3af;
		pointer-events: none;
	}
`,g6=p.input`
	padding: 0.5rem 0.75rem 0.5rem 2.25rem;
	font-size: 0.875rem;
	background-color: white;
	border: 1px solid #e5e7eb;
	border-radius: 0.5rem;
	width: 250px;
	max-width: 100%;
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
`,b6=p.div`
	overflow-x: auto;
`,x6=p.table`
	width: 100%;
	border-collapse: collapse;
`,v6=p.thead`
	background-color: #f9fafb;
	border-bottom: 1px solid #e5e7eb;

	@media (prefers-color-scheme: dark) {
		background-color: #2d3748;
		border-bottom-color: #4b5563;
	}
`,x1=p.th`
	padding: 1rem 1.5rem;
	font-size: 0.75rem;
	font-weight: 600;
	color: #6b7280;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	text-align: left;
	cursor: ${n=>n.sortable?"pointer":"default"};
	user-select: none;
	transition: color 0.2s;

	&:hover {
		color: ${n=>n.sortable?"#2563eb":"#6b7280"};
	}

	@media (prefers-color-scheme: dark) {
		color: #9ca3af;

		&:hover {
			color: ${n=>n.sortable?"#60a5fa":"#9ca3af"};
		}
	}
`,y6=p.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`,j6=p.span`
	color: #2563eb;
	font-size: 0.875rem;

	@media (prefers-color-scheme: dark) {
		color: #60a5fa;
	}
`,w6=p.tbody``,S6=p.tr`
	border-bottom: 1px solid #e5e7eb;
	transition: background-color 0.2s;

	&:hover {
		background-color: #f9fafb;
	}

	&:last-child {
		border-bottom: none;
	}

	@media (prefers-color-scheme: dark) {
		border-bottom-color: #4b5563;

		&:hover {
			background-color: #2d3748;
		}
	}
`,v1=p.td`
	padding: 1rem 1.5rem;
	font-size: 0.875rem;
	color: #4b5563;
	vertical-align: middle;

	@media (prefers-color-scheme: dark) {
		color: #d1d5db;
	}
`,A6=p.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`,y1=p.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
	border-radius: 0.375rem;
	border: none;
	cursor: pointer;
	transition: all 0.2s;
	background: transparent;
	color: ${n=>n.$variant==="edit"?"#3b82f6":"#ef4444"};

	&:hover {
		background-color: ${n=>n.$variant==="edit"?"#eff6ff":"#fef2f2"};
		color: ${n=>n.$variant==="edit"?"#2563eb":"#dc2626"};
	}

	svg {
		width: 1.125rem;
		height: 1.125rem;
	}

	@media (prefers-color-scheme: dark) {
		color: ${n=>n.$variant==="edit"?"#60a5fa":"#f87171"};

		&:hover {
			background-color: ${n=>n.$variant==="edit"?"rgba(37, 99, 235, 0.2)":"rgba(239, 68, 68, 0.2)"};
			color: ${n=>n.$variant==="edit"?"#93c5fd":"#fca5a5"};
		}
	}
`,k6=p.div`
	text-align: center;
	padding: 3rem 1.5rem;
	color: #6b7280;

	p {
		font-size: 0.875rem;
		margin: 0;
	}

	@media (prefers-color-scheme: dark) {
		color: #9ca3af;
	}
`,C6=p.nav`
	display: flex;
	justify-content: center;
	padding: 1rem 1.5rem;
	border-top: 1px solid #e5e7eb;
	background-color: #f9fafb;

	@media (prefers-color-scheme: dark) {
		border-top-color: #4b5563;
		background-color: #2d3748;
	}
`,E6=p.ul`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	list-style: none;
	margin: 0;
	padding: 0;
`,Sa=p.li`
	display: inline-flex;
`,Aa=p.button`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 2rem;
	height: 2rem;
	padding: 0 0.5rem;
	font-size: 0.875rem;
	font-weight: ${n=>n.$active?"600":"400"};
	color: ${n=>n.$active?"white":"#6b7280"};
	background-color: ${n=>n.$active?"#3b82f6":"transparent"};
	border: 1px solid ${n=>n.$active?"#3b82f6":"#e5e7eb"};
	border-radius: 0.375rem;
	cursor: pointer;
	transition: all 0.2s;

	&:hover:not(:disabled) {
		background-color: ${n=>n.$active?"#2563eb":"#f3f4f6"};
		border-color: ${n=>n.$active?"#2563eb":"#d1d5db"};
		color: ${n=>n.$active?"white":"#374151"};
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	svg {
		width: 1rem;
		height: 1rem;
	}

	@media (prefers-color-scheme: dark) {
		color: ${n=>n.$active?"white":"#9ca3af"};
		border-color: ${n=>n.$active?"#3b82f6":"#4b5563"};
		background-color: ${n=>n.$active?"#3b82f6":"transparent"};

		&:hover:not(:disabled) {
			background-color: ${n=>n.$active?"#2563eb":"#374151"};
			border-color: ${n=>n.$active?"#2563eb":"#6b7280"};
			color: ${n=>n.$active?"white":"#e5e7eb"};
		}
	}
`,Bt=({columns:n,data:i,title:s,onEdit:l,onDelete:d,searchFields:u=[],itemsPerPage:h=10})=>{const[g,b]=C.useState(""),[m,v]=C.useState(null),[x,j]=C.useState(1),S=C.useMemo(()=>g?i.filter(_=>u.some(R=>String(_[R]||"").toLowerCase().includes(g.toLowerCase()))):i,[i,g,u]),w=C.useMemo(()=>{if(!S.length)return[];let _=[...S];return m&&_.sort((R,$)=>{const L=R[m.key],B=$[m.key];if(L===B)return 0;if(L==null)return 1;if(B==null)return-1;const q=L<B?-1:1;return m.direction==="asc"?q:-q}),_},[S,m]),N=Math.ceil(w.length/h),E=C.useMemo(()=>{const _=(x-1)*h;return w.slice(_,_+h)},[w,x,h]),A=_=>{v(R=>(R==null?void 0:R.key)===_?{key:_,direction:R.direction==="asc"?"desc":"asc"}:{key:_,direction:"asc"})},M=_=>{window.confirm("Are you sure you want to delete this item?")&&(d==null||d(_))},T=()=>{const _=[];if(N<=5)for(let $=1;$<=N;$++)_.push($);else if(x<=3){for(let $=1;$<=4;$++)_.push($);_.push(-1),_.push(N)}else if(x>=N-2){_.push(1),_.push(-1);for(let $=N-3;$<=N;$++)_.push($)}else{_.push(1),_.push(-1);for(let $=x-1;$<=x+1;$++)_.push($);_.push(-1),_.push(N)}return _};return r.jsxs(f6,{children:[r.jsxs(h6,{children:[r.jsx(m6,{children:s}),u.length>0&&r.jsxs(p6,{children:[r.jsx(cn,{size:16}),r.jsx(g6,{type:"text",placeholder:"Search...",value:g,onChange:_=>{b(_.target.value),j(1)}})]})]}),r.jsx(b6,{children:E.length===0?r.jsx(k6,{children:r.jsx("p",{children:"No data available"})}):r.jsxs(x6,{children:[r.jsx(v6,{children:r.jsxs("tr",{children:[n.map(_=>r.jsx(x1,{sortable:_.sortable,onClick:()=>_.sortable&&A(_.key),children:r.jsxs(y6,{children:[_.label,_.sortable&&(m==null?void 0:m.key)===_.key&&r.jsx(j6,{children:m.direction==="asc"?"↑":"↓"})]})},_.key)),r.jsx(x1,{children:"Actions"})]})}),r.jsx(w6,{children:E.map((_,R)=>r.jsxs(S6,{children:[n.map($=>r.jsx(v1,{children:$.render?$.render(_[$.key],_):_[$.key]??"-"},$.key)),r.jsx(v1,{children:r.jsxs(A6,{children:[l&&r.jsx(y1,{$variant:"edit",onClick:()=>l(_),title:"Edit",children:r.jsx(an,{size:16})}),d&&r.jsx(y1,{$variant:"delete",onClick:()=>M(_),title:"Delete",children:r.jsx($o,{size:16})})]})})]},_.id||R))})]})}),N>1&&r.jsx(C6,{children:r.jsxs(E6,{children:[r.jsx(Sa,{children:r.jsx(Aa,{onClick:()=>j(1),disabled:x===1,title:"First page",children:r.jsx(uS,{size:16})})}),r.jsx(Sa,{children:r.jsx(Aa,{onClick:()=>j(x-1),disabled:x===1,title:"Previous page",children:r.jsx(yd,{size:16})})}),T().map((_,R)=>_===-1?r.jsx(Sa,{children:r.jsx(Aa,{disabled:!0,children:"..."})},`separator-${R}`):r.jsx(Sa,{children:r.jsx(Aa,{$active:x===_,onClick:()=>j(_),children:_})},_)),r.jsx(Sa,{children:r.jsx(Aa,{onClick:()=>j(x+1),disabled:x===N,title:"Next page",children:r.jsx(jd,{size:16})})}),r.jsx(Sa,{children:r.jsx(Aa,{onClick:()=>j(N),disabled:x===N,title:"Last page",children:r.jsx(hS,{size:16})})})]})})]})},Ad=p.div`
	display: ${n=>n.isOpen?"flex":"none"};
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	align-items: center;
	justify-content: center;
	z-index: 1000;
`,kd=p.div`
	background-color: white;
	border-radius: 8px;
	padding: 2rem;
	max-width: 600px;
	width: 90%;
	max-height: 90vh;
	overflow-y: auto;
	box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);

	@media (prefers-color-scheme: dark) {
		background-color: #1f2937;
	}
`,Cd=p.div`
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

		@media (prefers-color-scheme: dark) {
			color: white;
		}
	}

	@media (prefers-color-scheme: dark) {
		border-bottom-color: #374151;
	}
`,Ed=p.button`
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

	@media (prefers-color-scheme: dark) {
		color: #9ca3af;

		&:hover {
			color: white;
		}
	}
`,Td=p.button`
	display: flex;
	align-items: center;
	gap: 0.5rem;
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
`,Mv=p.span`
	display: inline-flex;
	align-items: center;
	padding: 0.25rem 0.75rem;
	border-radius: 9999px;
	font-size: 0.75rem;
	font-weight: 500;
	line-height: 1.5;
	
	${n=>n.active?`
		background-color: #d1fae5;
		color: #065f46;
		border: 1px solid #a7f3d0;
	`:`
		background-color: #fee2e2;
		color: #991b1b;
		border: 1px solid #fecaca;
	`}

	@media (prefers-color-scheme: dark) {
		${n=>n.active?`
			background-color: rgba(16, 185, 129, 0.2);
			color: #86efac;
			border-color: rgba(16, 185, 129, 0.3);
		`:`
			background-color: rgba(220, 38, 38, 0.2);
			color: #fca5a5;
			border-color: rgba(220, 38, 38, 0.3);
		`}
	}
`,T6=()=>{const[n,i]=C.useState([{id:1,name:"Computer Science",code:"CS",description:"Core CS concepts",active:!0},{id:2,name:"Data Science",code:"DS",description:"Data analysis and ML",active:!0}]),[s,l]=C.useState(null),[d,u]=C.useState(!1),h=[{name:"name",label:"Module Name",type:"text",placeholder:"e.g., Computer Science",required:!0},{name:"code",label:"Module Code",type:"text",placeholder:"e.g., CS",required:!0},{name:"description",label:"Description",type:"textarea",placeholder:"Module description"},{name:"active",label:"Status",type:"toggle"}],g=[{key:"name",label:"Module Name",sortable:!0},{key:"code",label:"Code",sortable:!0},{key:"description",label:"Description"},{key:"active",label:"Status",render:j=>r.jsx(Mv,{active:j,children:j?"Active":"Inactive"})}],b=j=>{s?(i(n.map(S=>S.id===s.id?{...S,...j}:S)),l(null)):i([...n,{id:Date.now(),...j}]),u(!1)},m=j=>{i(n.filter(S=>S.id!==j.id))},v=()=>{u(!1),l(null)},x=j=>{l(j),u(!0)};return r.jsxs("div",{className:"p-4",children:[r.jsxs(Td,{onClick:()=>u(!0),children:[r.jsx(at,{size:16}),"Create New Module"]}),r.jsx(Ad,{isOpen:d,children:r.jsxs(kd,{children:[r.jsxs(Cd,{children:[r.jsx("h2",{children:s?"Edit Module":"Create New Module"}),r.jsx(Ed,{onClick:v,children:r.jsx(Me,{size:20})})]}),r.jsx($t,{fields:h,title:"",submitLabel:s?"Update":"Create",onSubmit:b,initialData:s||{name:"",code:"",description:"",active:!0}})]})}),r.jsx(Bt,{columns:g,data:n,title:"Module List",onEdit:x,onDelete:m,searchFields:["name","code"]})]})},N6=()=>{const[n,i]=C.useState([{id:1,name:"Introduction to Programming",module:"CS",order:1,description:"Basics of programming"},{id:2,name:"Data Structures",module:"CS",order:2,description:"Arrays, lists, trees"}]),[s,l]=C.useState(null),[d,u]=C.useState(!1),h=[{name:"name",label:"Chapter Name",type:"text",placeholder:"e.g., Introduction to Programming",required:!0},{name:"module",label:"Module",type:"select",options:[{value:"CS",label:"Computer Science"},{value:"DS",label:"Data Science"}],required:!0},{name:"order",label:"Chapter Order",type:"number",placeholder:"1",required:!0},{name:"description",label:"Description",type:"textarea"}],g=[{key:"name",label:"Chapter Name",sortable:!0},{key:"module",label:"Module",sortable:!0},{key:"order",label:"Order",sortable:!0},{key:"description",label:"Description"}],b=j=>{s?(i(n.map(S=>S.id===s.id?{...S,...j}:S)),l(null)):i([...n,{id:Date.now(),...j,order:parseInt(j.order)}]),u(!1)},m=j=>{i(n.filter(S=>S.id!==j.id))},v=()=>{u(!1),l(null)},x=j=>{l(j),u(!0)};return r.jsxs("div",{className:"p-4",children:[r.jsxs(Td,{onClick:()=>u(!0),children:[r.jsx(at,{size:16}),"Create New Chapter"]}),r.jsx(Ad,{isOpen:d,children:r.jsxs(kd,{children:[r.jsxs(Cd,{children:[r.jsx("h2",{children:s?"Edit Chapter":"Create New Chapter"}),r.jsx(Ed,{onClick:v,children:r.jsx(Me,{size:20})})]}),r.jsx($t,{fields:h,title:"",submitLabel:s?"Update":"Create",onSubmit:b,initialData:s||{name:"",module:"",order:"",description:""}})]})}),r.jsx(Bt,{columns:g,data:n,title:"Chapter List",onEdit:x,onDelete:m,searchFields:["name","module"]})]})},M6=()=>{const[n,i]=C.useState([{id:1,name:"Python Programming",code:"PROG101",department:"Computer Science",credits:3},{id:2,name:"Web Development",code:"WEB101",department:"Computer Science",credits:4}]),[s,l]=C.useState(null),[d,u]=C.useState(!1),h=[{name:"name",label:"Subject Name",type:"text",placeholder:"e.g., Python Programming",required:!0},{name:"code",label:"Subject Code",type:"text",placeholder:"e.g., PROG101",required:!0},{name:"department",label:"Department",type:"select",options:[{value:"Computer Science",label:"Computer Science"},{value:"Engineering",label:"Engineering"},{value:"Science",label:"Science"}],required:!0},{name:"credits",label:"Credits",type:"number",placeholder:"3"}],g=[{key:"name",label:"Subject Name",sortable:!0},{key:"code",label:"Code",sortable:!0},{key:"department",label:"Department",sortable:!0},{key:"credits",label:"Credits"}],b=j=>{s?(i(n.map(S=>S.id===s.id?{...S,...j}:S)),l(null)):i([...n,{id:Date.now(),...j,credits:parseInt(j.credits)||0}]),u(!1)},m=j=>{i(n.filter(S=>S.id!==j.id))},v=()=>{u(!1),l(null)},x=j=>{l(j),u(!0)};return r.jsxs("div",{className:"p-4",children:[r.jsxs(Td,{onClick:()=>u(!0),children:[r.jsx(at,{size:16}),"Create New Subject"]}),r.jsx(Ad,{isOpen:d,children:r.jsxs(kd,{children:[r.jsxs(Cd,{children:[r.jsx("h2",{children:s?"Edit Subject":"Create New Subject"}),r.jsx(Ed,{onClick:v,children:r.jsx(Me,{size:20})})]}),r.jsx($t,{fields:h,title:"",submitLabel:s?"Update":"Create",onSubmit:b,initialData:s||{name:"",code:"",department:"",credits:""}})]})}),r.jsx(Bt,{columns:g,data:n,title:"Subject List",onEdit:x,onDelete:m,searchFields:["name","code"]})]})},_6=()=>{const[n,i]=C.useState([{id:1,name:"Spring 2024",academicYear:"2023-2024",startDate:"2024-01-15",endDate:"2024-05-30",active:!0},{id:2,name:"Fall 2024",academicYear:"2024-2025",startDate:"2024-09-01",endDate:"2024-12-20",active:!1}]),[s,l]=C.useState(null),[d,u]=C.useState(!1),h=[{name:"name",label:"Semester Name",type:"text",placeholder:"e.g., Spring 2024",required:!0},{name:"academicYear",label:"Academic Year",type:"text",placeholder:"e.g., 2023-2024",required:!0},{name:"startDate",label:"Start Date",type:"date",required:!0},{name:"endDate",label:"End Date",type:"date",required:!0},{name:"active",label:"Active",type:"toggle"}],g=[{key:"name",label:"Semester Name",sortable:!0},{key:"academicYear",label:"Academic Year",sortable:!0},{key:"startDate",label:"Start Date"},{key:"endDate",label:"End Date"},{key:"active",label:"Status",render:j=>r.jsx(Mv,{active:j,children:j?"Active":"Inactive"})}],b=j=>{s?(i(n.map(S=>S.id===s.id?{...S,...j}:S)),l(null)):i([...n,{id:Date.now(),...j}]),u(!1)},m=j=>{i(n.filter(S=>S.id!==j.id))},v=()=>{u(!1),l(null)},x=j=>{l(j),u(!0)};return r.jsxs("div",{className:"p-4",children:[r.jsxs(Td,{onClick:()=>u(!0),children:[r.jsx(at,{size:16}),"Create New Semester"]}),r.jsx(Ad,{isOpen:d,children:r.jsxs(kd,{children:[r.jsxs(Cd,{children:[r.jsx("h2",{children:s?"Edit Semester":"Create New Semester"}),r.jsx(Ed,{onClick:v,children:r.jsx(Me,{size:20})})]}),r.jsx($t,{fields:h,title:"",submitLabel:s?"Update":"Create",onSubmit:b,initialData:s||{name:"",academicYear:"",startDate:"",endDate:"",active:!0}})]})}),r.jsx(Bt,{columns:g,data:n,title:"Semester List",onEdit:x,onDelete:m,searchFields:["name","academicYear"]})]})},R6=()=>{const n=[{id:"modules",label:"Module",icon:"",content:r.jsx(T6,{})},{id:"chapters",label:"Chapter",icon:"",content:r.jsx(N6,{})},{id:"subjects",label:"Subject",icon:"",content:r.jsx(M6,{})},{id:"semesters",label:"Semester",icon:"",content:r.jsx(_6,{})}];return r.jsx(Sd,{pageTitle:"Academic Structure Settings",pageDescription:"Manage your academic hierarchy including modules, chapters, subjects, and semesters",pageIcon:"",tabs:n,viewMode:"tabs"})},j1=[{title:"Dashboard",to:"dashboard",iconStyle:r.jsx("i",{className:"flaticon-home"})},{title:"Management",classsChange:"menu-title"},{title:"User",to:"user-management",iconStyle:r.jsx("i",{className:"flaticon-user"})},{title:"Payment",to:"payments",iconStyle:r.jsx("i",{className:"flaticon-price-tag"})},{title:"Documents",to:"documents",iconStyle:r.jsx("i",{className:"flaticon-approved"})},{title:"Modules and Tests",to:"modules-tests",iconStyle:r.jsx("i",{className:"flaticon-notes"})},{title:"Questions",classsChange:"menu-title"},{title:"Question Bank",to:"question-bank",iconStyle:r.jsx("i",{className:"flaticon-file"})},{title:"Student Submitted",to:"student-submitted",iconStyle:r.jsx("i",{className:"flaticon-registration"})},{title:"Configuration",classsChange:"menu-title"},{title:"Academic Setting",to:"academic-settings",iconStyle:r.jsx("i",{className:"flaticon-blog"})},{title:"Subscription",to:"subscription",iconStyle:r.jsx("i",{className:"flaticon-app"})},{title:"Points Rules",to:"point-settings",iconStyle:r.jsx("i",{className:"flaticon-bar-chart"})},{title:"Test Setting",to:"test-settings",iconStyle:r.jsx("i",{className:"flaticon-puzzle"})},{title:"System Setting",to:"system-settings",iconStyle:r.jsx("i",{className:"flaticon flaticon-cms"})}];var hh={},mh={},el={},w1;function D6(){if(w1)return el;w1=1,Object.defineProperty(el,"__esModule",{value:!0}),el.useIsomorphicLayoutEffect=void 0;const n=Ka();return el.useIsomorphicLayoutEffect=typeof window<"u"?n.useLayoutEffect:n.useEffect,el}var S1;function O6(){return S1||(S1=1,function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.useScrollPosition=void 0;const i=Ka(),s=D6(),l=typeof window<"u",d={x:0,y:0},u=g=>g==null?void 0:g.getBoundingClientRect(),h=({element:g,useWindow:b,boundingElement:m})=>{if(!l)return d;if(b)return{x:window.scrollX,y:window.scrollY};const v=u((g==null?void 0:g.current)||document.body),x=u(m==null?void 0:m.current);return v?x?{x:(x.x||0)-(v.x||0),y:(x.y||0)-(v.y||0)}:{x:v.left,y:v.top}:d};n.useScrollPosition=(g,b,m,v,x,j)=>{const S=i.useRef(h({useWindow:v,boundingElement:j}));let w=null;const N=()=>{const E=h({element:m,useWindow:v,boundingElement:j});g({prevPos:S.current,currPos:E}),S.current=E,w=null};s.useIsomorphicLayoutEffect(()=>{var E;if(!l)return;const A=()=>{x?w===null&&(w=setTimeout(N,x)):N()};return j?(E=j.current)===null||E===void 0||E.addEventListener("scroll",A,{passive:!0}):window.addEventListener("scroll",A,{passive:!0}),()=>{var M;j?(M=j.current)===null||M===void 0||M.removeEventListener("scroll",A):window.removeEventListener("scroll",A),w&&clearTimeout(w)}},b)},n.useScrollPosition.defaultProps={deps:[],element:!1,useWindow:!1,wait:null,boundingElement:!1}}(mh)),mh}var A1;function z6(){return A1||(A1=1,function(n){Object.defineProperty(n,"__esModule",{value:!0});var i=O6();Object.defineProperty(n,"useScrollPosition",{enumerable:!0,get:function(){return i.useScrollPosition}})}(hh)),hh}var $6=z6(),ph={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var k1;function B6(){return k1||(k1=1,function(n){(function(){var i={}.hasOwnProperty;function s(){for(var u="",h=0;h<arguments.length;h++){var g=arguments[h];g&&(u=d(u,l(g)))}return u}function l(u){if(typeof u=="string"||typeof u=="number")return u;if(typeof u!="object")return"";if(Array.isArray(u))return s.apply(null,u);if(u.toString!==Object.prototype.toString&&!u.toString.toString().includes("[native code]"))return u.toString();var h="";for(var g in u)i.call(u,g)&&u[g]&&(h=d(h,g));return h}function d(u,h){return h?u?u+" "+h:u+h:u}n.exports?(s.default=s,n.exports=s):window.classNames=s})()}(ph)),ph.exports}var U6=B6();const K6=wm(U6);function L6(n,i){if(n==null)return{};var s={};for(var l in n)if({}.hasOwnProperty.call(n,l)){if(i.indexOf(l)!==-1)continue;s[l]=n[l]}return s}function cm(n,i){return cm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,l){return s.__proto__=l,s},cm(n,i)}function P6(n,i){n.prototype=Object.create(i.prototype),n.prototype.constructor=n,cm(n,i)}function H6(n){return n&&n.ownerDocument||document}function q6(n){var i=H6(n);return i&&i.defaultView||window}function F6(n,i){return q6(n).getComputedStyle(n,i)}var Q6=/([A-Z])/g;function Y6(n){return n.replace(Q6,"-$1").toLowerCase()}var V6=/^ms-/;function ac(n){return Y6(n).replace(V6,"-ms-")}var G6=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function I6(n){return!!(n&&G6.test(n))}function ad(n,i){var s="",l="";if(typeof i=="string")return n.style.getPropertyValue(ac(i))||F6(n).getPropertyValue(ac(i));Object.keys(i).forEach(function(d){var u=i[d];!u&&u!==0?n.style.removeProperty(ac(d)):I6(d)?l+=d+"("+u+") ":s+=ac(d)+": "+u+";"}),l&&(s+="transform: "+l+";"),n.style.cssText+=";"+s}const C1={disabled:!1},_v=Fe.createContext(null);var X6=function(i){return i.scrollTop},kl="unmounted",Hn="exited",qn="entering",Eo="entered",id="exiting",dn=function(n){P6(i,n);function i(l,d){var u;u=n.call(this,l,d)||this;var h=d,g=h&&!h.isMounting?l.enter:l.appear,b;return u.appearStatus=null,l.in?g?(b=Hn,u.appearStatus=qn):b=Eo:l.unmountOnExit||l.mountOnEnter?b=kl:b=Hn,u.state={status:b},u.nextCallback=null,u}i.getDerivedStateFromProps=function(d,u){var h=d.in;return h&&u.status===kl?{status:Hn}:null};var s=i.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(d){var u=null;if(d!==this.props){var h=this.state.status;this.props.in?h!==qn&&h!==Eo&&(u=qn):(h===qn||h===Eo)&&(u=id)}this.updateStatus(!1,u)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var d=this.props.timeout,u,h,g;return u=h=g=d,d!=null&&typeof d!="number"&&(u=d.exit,h=d.enter,g=d.appear!==void 0?d.appear:h),{exit:u,enter:h,appear:g}},s.updateStatus=function(d,u){if(d===void 0&&(d=!1),u!==null)if(this.cancelNextCallback(),u===qn){if(this.props.unmountOnExit||this.props.mountOnEnter){var h=this.props.nodeRef?this.props.nodeRef.current:Sl.findDOMNode(this);h&&X6(h)}this.performEnter(d)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Hn&&this.setState({status:kl})},s.performEnter=function(d){var u=this,h=this.props.enter,g=this.context?this.context.isMounting:d,b=this.props.nodeRef?[g]:[Sl.findDOMNode(this),g],m=b[0],v=b[1],x=this.getTimeouts(),j=g?x.appear:x.enter;if(!d&&!h||C1.disabled){this.safeSetState({status:Eo},function(){u.props.onEntered(m)});return}this.props.onEnter(m,v),this.safeSetState({status:qn},function(){u.props.onEntering(m,v),u.onTransitionEnd(j,function(){u.safeSetState({status:Eo},function(){u.props.onEntered(m,v)})})})},s.performExit=function(){var d=this,u=this.props.exit,h=this.getTimeouts(),g=this.props.nodeRef?void 0:Sl.findDOMNode(this);if(!u||C1.disabled){this.safeSetState({status:Hn},function(){d.props.onExited(g)});return}this.props.onExit(g),this.safeSetState({status:id},function(){d.props.onExiting(g),d.onTransitionEnd(h.exit,function(){d.safeSetState({status:Hn},function(){d.props.onExited(g)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(d,u){u=this.setNextCallback(u),this.setState(d,u)},s.setNextCallback=function(d){var u=this,h=!0;return this.nextCallback=function(g){h&&(h=!1,u.nextCallback=null,d(g))},this.nextCallback.cancel=function(){h=!1},this.nextCallback},s.onTransitionEnd=function(d,u){this.setNextCallback(u);var h=this.props.nodeRef?this.props.nodeRef.current:Sl.findDOMNode(this),g=d==null&&!this.props.addEndListener;if(!h||g){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var b=this.props.nodeRef?[this.nextCallback]:[h,this.nextCallback],m=b[0],v=b[1];this.props.addEndListener(m,v)}d!=null&&setTimeout(this.nextCallback,d)},s.render=function(){var d=this.state.status;if(d===kl)return null;var u=this.props,h=u.children;u.in,u.mountOnEnter,u.unmountOnExit,u.appear,u.enter,u.exit,u.timeout,u.addEndListener,u.onEnter,u.onEntering,u.onEntered,u.onExit,u.onExiting,u.onExited,u.nodeRef;var g=L6(u,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Fe.createElement(_v.Provider,{value:null},typeof h=="function"?h(d,g):Fe.cloneElement(Fe.Children.only(h),g))},i}(Fe.Component);dn.contextType=_v;dn.propTypes={};function ka(){}dn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ka,onEntering:ka,onEntered:ka,onExit:ka,onExiting:ka,onExited:ka};dn.UNMOUNTED=kl;dn.EXITED=Hn;dn.ENTERING=qn;dn.ENTERED=Eo;dn.EXITING=id;function Z6(){const n=C.version.split(".");return{major:+n[0],minor:+n[1],patch:+n[2]}}function J6(n){if(!n||typeof n=="function")return null;const{major:i}=Z6();return i>=19?n.props.ref:n.ref}const W6=!!(typeof window<"u"&&window.document&&window.document.createElement);var dm=!1,um=!1;try{var gh={get passive(){return dm=!0},get once(){return um=dm=!0}};W6&&(window.addEventListener("test",gh,gh),window.removeEventListener("test",gh,!0))}catch{}function eA(n,i,s,l){if(l&&typeof l!="boolean"&&!um){var d=l.once,u=l.capture,h=s;!um&&d&&(h=s.__once||function g(b){this.removeEventListener(i,g,u),s.call(this,b)},s.__once=h),n.addEventListener(i,h,dm?l:u)}n.addEventListener(i,s,l)}function tA(n,i,s,l){var d=l&&typeof l!="boolean"?l.capture:l;n.removeEventListener(i,s,d),s.__once&&n.removeEventListener(i,s.__once,d)}function Rv(n,i,s,l){return eA(n,i,s,l),function(){tA(n,i,s,l)}}function rA(n,i,s,l){if(l===void 0&&(l=!0),n){var d=document.createEvent("HTMLEvents");d.initEvent(i,s,l),n.dispatchEvent(d)}}function nA(n){var i=ad(n,"transitionDuration")||"",s=i.indexOf("ms")===-1?1e3:1;return parseFloat(i)*s}function oA(n,i,s){s===void 0&&(s=5);var l=!1,d=setTimeout(function(){l||rA(n,"transitionend",!0)},i+s),u=Rv(n,"transitionend",function(){l=!0},{once:!0});return function(){clearTimeout(d),u()}}function aA(n,i,s,l){s==null&&(s=nA(n)||0);var d=oA(n,s,l),u=Rv(n,"transitionend",i);return function(){d(),u()}}function E1(n,i){const s=ad(n,i)||"",l=s.indexOf("ms")===-1?1e3:1;return parseFloat(s)*l}function iA(n,i){const s=E1(n,"transitionDuration"),l=E1(n,"transitionDelay"),d=aA(n,u=>{u.target===n&&(d(),i(u))},s+l)}function tl(...n){return n.filter(i=>i!=null).reduce((i,s)=>{if(typeof s!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return i===null?s:function(...d){i.apply(this,d),s.apply(this,d)}},null)}function lA(n){n.offsetHeight}const T1=n=>!n||typeof n=="function"?n:i=>{n.current=i};function sA(n,i){const s=T1(n),l=T1(i);return d=>{s&&s(d),l&&l(d)}}function cA(n,i){return C.useMemo(()=>sA(n,i),[n,i])}function dA(n){return n&&"setState"in n?Sl.findDOMNode(n):n??null}const uA=Fe.forwardRef(({onEnter:n,onEntering:i,onEntered:s,onExit:l,onExiting:d,onExited:u,addEndListener:h,children:g,childRef:b,...m},v)=>{const x=C.useRef(null),j=cA(x,b),S=$=>{j(dA($))},w=$=>L=>{$&&x.current&&$(x.current,L)},N=C.useCallback(w(n),[n]),E=C.useCallback(w(i),[i]),A=C.useCallback(w(s),[s]),M=C.useCallback(w(l),[l]),T=C.useCallback(w(d),[d]),_=C.useCallback(w(u),[u]),R=C.useCallback(w(h),[h]);return r.jsx(dn,{ref:v,...m,onEnter:N,onEntered:A,onEntering:E,onExit:M,onExited:_,onExiting:T,addEndListener:R,nodeRef:x,children:typeof g=="function"?($,L)=>g($,{...L,ref:S}):Fe.cloneElement(g,{ref:S})})}),fA={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function hA(n,i){const s=`offset${n[0].toUpperCase()}${n.slice(1)}`,l=i[s],d=fA[n];return l+parseInt(ad(i,d[0]),10)+parseInt(ad(i,d[1]),10)}const mA={[Hn]:"collapse",[id]:"collapsing",[qn]:"collapsing",[Eo]:"collapse show"},N1=Fe.forwardRef(({onEnter:n,onEntering:i,onEntered:s,onExit:l,onExiting:d,className:u,children:h,dimension:g="height",in:b=!1,timeout:m=300,mountOnEnter:v=!1,unmountOnExit:x=!1,appear:j=!1,getDimensionValue:S=hA,...w},N)=>{const E=typeof g=="function"?g():g,A=C.useMemo(()=>tl($=>{$.style[E]="0"},n),[E,n]),M=C.useMemo(()=>tl($=>{const L=`scroll${E[0].toUpperCase()}${E.slice(1)}`;$.style[E]=`${$[L]}px`},i),[E,i]),T=C.useMemo(()=>tl($=>{$.style[E]=null},s),[E,s]),_=C.useMemo(()=>tl($=>{$.style[E]=`${S(E,$)}px`,lA($)},l),[l,S,E]),R=C.useMemo(()=>tl($=>{$.style[E]=null},d),[E,d]);return r.jsx(uA,{ref:N,addEndListener:iA,...w,"aria-expanded":w.role?b:null,onEnter:A,onEntering:M,onEntered:T,onExit:_,onExiting:R,childRef:J6(h),in:b,timeout:m,mountOnEnter:v,unmountOnExit:x,appear:j,children:($,L)=>Fe.cloneElement(h,{...L,className:K6(u,h.props.className,mA[$],E==="width"&&"collapse-horizontal")})})}),pA=(n,i)=>({...n,...i}),gA={active:"",activeSubmenu:""};function bA(){const{iconHover:n,sidebarposition:i,headerposition:s,sidebarLayout:l,ChangeIconSidebar:d}=C.useContext(Ol),[u,h]=C.useReducer(pA,gA),[g,b]=C.useState(!0);$6.useScrollPosition(({prevPos:j,currPos:S})=>{const w=S.y>j.y;w!==g&&b(w)},[g]);const m=j=>{h({active:j}),u.active===j&&h({active:""})},v=j=>{h({activeSubmenu:j}),u.activeSubmenu===j&&h({activeSubmenu:""})};let x=window.location.pathname;return x=x.split("/"),x=x[x.length-1],C.useEffect(()=>{j1.forEach(j=>{var S;(S=j.content)==null||S.forEach(w=>{var N;x===w.to&&h({active:j.title}),(N=w.content)==null||N.forEach(E=>{x===E.to&&h({activeSubmenu:w.title,active:j.title})})})})},[x]),r.jsx(r.Fragment,{children:r.jsx("div",{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),className:`ic-sidenav ${n} ${i.value==="fixed"&&l.value==="horizontal"&&s.value==="static"&&g>120?"fixed":""}`,children:r.jsx("div",{className:"ic-sidenav-scroll",children:r.jsx("ul",{className:"metismenu",id:"menu",children:j1.map((j,S)=>{let w=j.classsChange;return w==="menu-title"?r.jsx("li",{className:w,children:j.title},S):r.jsx("li",{className:` ${u.active===j.title?"mm-active":""} ${j.to===x?"mm-active":""}`,children:j.content&&j.content.length>0?r.jsxs(r.Fragment,{children:[r.jsxs(Ne,{to:"#",className:"has-arrow",onClick:()=>{m(j.title)},children:[j.iconStyle,r.jsxs("span",{className:"nav-text",children:[" ",j.title," "]}),r.jsx("span",{className:"badge badge-xs style-1 badge-danger",children:j.update})]}),r.jsx(N1,{in:u.active===j.title,children:r.jsx("ul",{className:`${w==="mm-collapse"?"mm-show":""}`,children:j.content&&j.content.map((N,E)=>r.jsx("li",{className:`${u.activeSubmenu===N.title?"mm-active":""}`,children:N.content&&N.content.length>0?r.jsxs(r.Fragment,{children:[r.jsx(Ne,{to:`/${N.to}`,className:` ${N.hasMenu?"has-arrow":""} ${N.to===x?"mm-active":""} `,onClick:()=>{v(N.title)},children:N.title}),r.jsx(N1,{in:u.activeSubmenu===N.title,children:r.jsx("ul",{className:`${w==="mm-collapse"?"mm-show":""}`,children:N.content&&N.content.map((A,M)=>r.jsx(C.Fragment,{children:r.jsx("li",{children:r.jsx(Ne,{className:`${x===A.to?"mm-active":""}`,to:`/${A.to}`,children:A.title})})},M))})})]}):r.jsxs(Ne,{to:`/${N.to}`,className:`${N.to===x?"mm-active":""}`,children:[" ",N.title,"  "]})},E))})})]}):r.jsxs(Ne,{to:`/${j.to}`,children:[" ",j.iconStyle," ",r.jsxs("span",{className:"nav-text",children:[" ",j.title," "]})," "]})},S)})})})})})}const xA="/assets/user-profile-CVj7iLx6.png",M1={userProfile:xA},ic={fullscreen:r.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsxs("g",{clipPath:"url(#clip0_5_876)",children:[r.jsx("path",{d:"M5.5 5.5L0.833334 0.833334M0.833334 0.833334L0.833334 5.5M0.833334 0.833334L5.5 0.833334",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12.5 5.5L17.1667 0.833334M17.1667 0.833334L12.5 0.833334M17.1667 0.833334L17.1667 5.5",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.5 12.5L0.833334 17.1667M0.833334 17.1667L5.5 17.1667M0.833334 17.1667L0.833334 12.5",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12.5 12.5L17.1667 17.1667M17.1667 17.1667L17.1667 12.5M17.1667 17.1667L12.5 17.1667",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("defs",{children:[" ",r.jsxs("clipPath",{id:"clip0_5_876",children:[" ",r.jsx("rect",{width:"18",height:"18",fill:"white"})," "]})," "]})]}),threeline:r.jsxs("svg",{className:"ms-2 mt-1 h-line",width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("rect",{y:"0.5",width:"12",height:"1",fill:"white"}),r.jsx("rect",{y:"4.5",width:"12",height:"1",fill:"white"}),r.jsx("rect",{y:"8.5",width:"12",height:"1",fill:"white"})]}),edit:r.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M18.379 8.44975L8.96409 17.8648C8.68489 18.144 8.32929 18.3343 7.9421 18.4117L5.00037 19.0001L5.58872 16.0583C5.66615 15.6711 5.85646 15.3155 6.13565 15.0363L15.5506 5.62132M18.379 8.44975L19.7932 7.03553C20.1837 6.64501 20.1837 6.01184 19.7932 5.62132L18.379 4.20711C17.9885 3.81658 17.3553 3.81658 16.9648 4.20711L15.5506 5.62132M18.379 8.44975L15.5506 5.62132",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),logout:r.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{opacity:"0.25",d:"M28.6325 11.2111L16.3162 7.10573C15.6687 6.88989 15 7.37186 15 8.05442V31.9462C15 32.6288 15.6687 33.1108 16.3162 32.8949L28.6325 28.7895C29.4491 28.5173 30 27.753 30 26.8921V13.1085C30 12.2476 29.4491 11.4834 28.6325 11.2111Z",fill:"white"}),r.jsx("path",{d:"M19.1663 15.833L23.333 19.9997M23.333 19.9997L19.1663 24.1663M23.333 19.9997H6.66634",stroke:"white",strokeLinecap:"round"})]})};var Gt={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5,fullscreen:6},_1=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],R1=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],D1=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"],Ot=typeof window<"u"&&typeof window.document<"u"?window.document:{},sr="fullscreenEnabled"in Ot&&Object.keys(Gt)||_1[0]in Ot&&_1||R1[0]in Ot&&R1||D1[0]in Ot&&D1||[],bh={requestFullscreen:function(n){return n[sr[Gt.requestFullscreen]]()},requestFullscreenFunction:function(n){return n[sr[Gt.requestFullscreen]]},get exitFullscreen(){return Ot[sr[Gt.exitFullscreen]].bind(Ot)},get fullscreenPseudoClass(){return":"+sr[Gt.fullscreen]},addEventListener:function(n,i,s){return Ot.addEventListener(sr[Gt[n]],i,s)},removeEventListener:function(n,i,s){return Ot.removeEventListener(sr[Gt[n]],i,s)},get fullscreenEnabled(){return!!Ot[sr[Gt.fullscreenEnabled]]},set fullscreenEnabled(n){},get fullscreenElement(){return Ot[sr[Gt.fullscreenElement]]},set fullscreenElement(n){},get onfullscreenchange(){return Ot[("on"+sr[Gt.fullscreenchange]).toLowerCase()]},set onfullscreenchange(n){return Ot[("on"+sr[Gt.fullscreenchange]).toLowerCase()]=n},get onfullscreenerror(){return Ot[("on"+sr[Gt.fullscreenerror]).toLowerCase()]},set onfullscreenerror(n){return Ot[("on"+sr[Gt.fullscreenerror]).toLowerCase()]=n}};function vA(){const{background:n,changeBackground:i}=C.useContext(Ol),{user:s}=Mm(),l=()=>{n.value==="dark"?i({value:"light",label:"Light"}):i({value:"dark",label:"Dark"})},d=()=>{bh.fullscreenElement?bh.exitFullscreen():bh.requestFullscreen(document.documentElement).catch(u=>{console.error(`Error attempting to enable full-screen mode: ${u.message}`)})};return r.jsx(r.Fragment,{children:r.jsx("div",{className:"header",children:r.jsx("div",{className:"header-content",children:r.jsx("nav",{className:"navbar navbar-expand",children:r.jsxs("div",{className:"collapse navbar-collapse justify-content-between",children:[r.jsx("div",{className:"header-left",children:r.jsxs("ul",{className:"navbar-nav header-left",children:[r.jsx("li",{className:"nav-item d-flex align-items-center",children:r.jsxs("div",{className:"input-group search-area",children:[r.jsx("span",{className:"input-group-text pe-2",children:r.jsx(Ne,{to:"#",children:r.jsx("i",{className:"flaticon-search-interface-symbol"})})}),r.jsx("input",{type:"text",className:"form-control ps-0",placeholder:"Search anything"})]})}),r.jsx("li",{className:"nav-item dropdown notification_dropdown",children:r.jsxs("button",{className:`ic-theme-mode ${n.value==="dark"?"active":""}`,onClick:()=>l(),type:"button",children:[r.jsx("span",{className:"light",children:"Light"}),r.jsx("span",{className:"dark",children:"Dark"})]})})]})}),r.jsxs("ul",{className:"navbar-nav header-right",children:[r.jsx("li",{className:"nav-item dropdown notification_dropdown",children:r.jsxs(Ne,{className:"nav-link dz-fullscreen",to:"#",onClick:d,children:[" ",ic.fullscreen," "]})}),r.jsxs("li",{className:"nav-item dropdown header-profile",children:[r.jsxs(Ne,{className:"nav-link",to:"#",role:"button","data-bs-toggle":"dropdown",children:[r.jsx("img",{src:M1.userProfile,width:"20",height:"20",alt:"user",style:{borderRadius:"50%",objectFit:"cover"}}),r.jsx("div",{className:"header-info ms-3",children:r.jsx("span",{className:"fs-14 font-w600 mb-0",children:(s==null?void 0:s.name)||"User"})}),ic.threeline]}),r.jsx("div",{className:"profile-detail card",children:r.jsxs("div",{className:"card-body p-0",children:[r.jsxs("div",{className:"d-flex profile-media justify-content-between align-items-center",children:[r.jsxs("div",{className:"d-flex align-items-center",children:[r.jsx("img",{src:M1.userProfile,alt:"img",style:{borderRadius:"50%",width:"50px",height:"50px",objectFit:"cover"}}),r.jsxs("div",{className:"ms-3",children:[r.jsxs("h4",{className:"mb-0",children:[(s==null?void 0:s.name)||"User"," "]}),r.jsx("p",{className:"mb-0",children:(s==null?void 0:s.email)||"email@example.com"})]})]}),r.jsx(Ne,{to:"/edit-profile",children:r.jsxs("div",{className:"icon-box",children:[" ",ic.edit," "]})})]}),r.jsx("div",{className:"media-box",children:r.jsx("ul",{className:"d-flex flex-colunm gap-2 flex-wrap",children:r.jsx("li",{children:r.jsx(Ne,{to:"/login",children:r.jsxs("div",{className:"icon-box-lg",children:[" ",ic.logout," ",r.jsx("p",{children:" Logout "})," "]})})})})})]})})]})]})]})})})})})}const yA=({title:n,onClick:i})=>{const[s,l]=C.useState(""),d=u=>l(s===u?"":u);return r.jsxs(C.Fragment,{children:[r.jsx($w,{}),r.jsx(Pw,{onClick:()=>d("chatbox"),toggle:s}),r.jsx(vA,{onNote:()=>d("chatbox"),onNotification:()=>d("notification"),onProfile:()=>d("profile"),toggle:s,title:n,onBox:()=>d("box"),onClick:()=>i()}),r.jsx(bA,{})]})},jA=()=>{var n=new Date;return r.jsx("div",{className:"footer",children:r.jsx("div",{className:"copyright",children:r.jsxs("p",{children:["Copyright © Designed & Developed by"," ",r.jsx("a",{href:"http://dexignlab.com/",target:"_blank",rel:"noreferrer",children:"DexignLab"})," ",n.getFullYear()]})})})},wA=()=>{const[n,i]=C.useState(""),[s,l]=C.useState(""),[d,u]=C.useState(""),{login:h}=Mm(),g=Jt(),b=async m=>{if(m.preventDefault(),u(""),!n||!s){u("Please fill in all fields");return}try{const v=await fetch("http://127.0.0.1:8000/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:s})}),x=await v.json();v.ok?(localStorage.setItem("access_token",x.access_token),localStorage.setItem("user",JSON.stringify(x.user)),h(x.user),g("/dashboard")):u(x.detail||"Invalid email or password")}catch{u("Server error. Please try again.")}};return r.jsx("div",{className:"login-container d-flex align-items-center justify-content-center min-vh-100",children:r.jsx("div",{className:"card shadow-lg",style:{width:"400px"},children:r.jsxs("div",{className:"card-body p-5",children:[r.jsxs("div",{className:"text-center mb-4",children:[r.jsx("h2",{className:"card-title",children:"Login to Educareer"}),r.jsx("p",{className:"text-muted",children:"Enter your credentials to access the system"})]}),d&&r.jsx("div",{className:"alert alert-danger",role:"alert",children:d}),r.jsxs("form",{onSubmit:b,children:[r.jsxs("div",{className:"mb-3",children:[r.jsx("label",{htmlFor:"email",className:"form-label",children:"Email address"}),r.jsx("input",{type:"email",className:"form-control",id:"email",value:n,onChange:m=>i(m.target.value),placeholder:"Enter your email",required:!0})]}),r.jsxs("div",{className:"mb-3",children:[r.jsx("label",{htmlFor:"password",className:"form-label",children:"Password"}),r.jsx("input",{type:"password",className:"form-control",id:"password",value:s,onChange:m=>l(m.target.value),placeholder:"Enter your password",required:!0})]}),r.jsx("button",{type:"submit",className:"btn btn-primary w-100",children:"Login"})]}),r.jsxs("div",{className:"mt-4 text-center",children:[r.jsxs("p",{className:"mb-2",children:["Don't have an account? ",r.jsx(Ne,{to:"/register",children:"Register here"})]}),r.jsxs("small",{className:"text-muted",children:["Demo accounts:",r.jsx("br",{}),"superadmin@example.com / password (SUPER_ADMIN)",r.jsx("br",{}),"admin@example.com / password (ADMIN)",r.jsx("br",{}),"manager@example.com / password (MANAGER)",r.jsx("br",{}),"student@example.com / password (STUDENT)"]})]})]})})})},SA=()=>{const[n,i]=C.useState({email:"",full_name:"",college:"",usn:"",scheme:"",semester:1,branch:"",password:"",confirm_password:""}),[s,l]=C.useState(""),[d,u]=C.useState(!1),h=Jt(),g=m=>{const{name:v,value:x}=m.target;i(j=>({...j,[v]:v==="semester"?parseInt(x):x}))},b=async m=>{if(m.preventDefault(),l(""),u(!0),!n.email||!n.full_name||!n.password||!n.confirm_password){l("Please fill in all required fields"),u(!1);return}if(n.password!==n.confirm_password){l("Passwords do not match"),u(!1);return}if(n.password.length<6){l("Password must be at least 6 characters long"),u(!1);return}try{const v=await fetch("http://127.0.0.1:8000/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.email,full_name:n.full_name,college:n.college,usn:n.usn,scheme:n.scheme,semester:n.semester,branch:n.branch,password:n.password})}),x=await v.json();v.ok?h("/login",{state:{message:"Registration successful! Please login."}}):l(x.detail||"Registration failed")}catch{l("Server error. Please try again.")}finally{u(!1)}};return r.jsx("div",{className:"login-container d-flex align-items-center justify-content-center min-vh-100",children:r.jsx("div",{className:"card shadow-lg",style:{width:"500px"},children:r.jsxs("div",{className:"card-body p-5",children:[r.jsxs("div",{className:"text-center mb-4",children:[r.jsx("h2",{className:"card-title",children:"Register for Educareer"}),r.jsx("p",{className:"text-muted",children:"Create your account to get started"})]}),s&&r.jsx("div",{className:"alert alert-danger",role:"alert",children:s}),r.jsxs("form",{onSubmit:b,children:[r.jsxs("div",{className:"row",children:[r.jsxs("div",{className:"col-md-6 mb-3",children:[r.jsx("label",{className:"form-label",children:"Full Name *"}),r.jsx("input",{type:"text",className:"form-control",name:"full_name",value:n.full_name,onChange:g,required:!0,disabled:d})]}),r.jsxs("div",{className:"col-md-6 mb-3",children:[r.jsx("label",{className:"form-label",children:"Email *"}),r.jsx("input",{type:"email",className:"form-control",name:"email",value:n.email,onChange:g,required:!0,disabled:d})]})]}),r.jsxs("div",{className:"row",children:[r.jsxs("div",{className:"col-md-6 mb-3",children:[r.jsx("label",{className:"form-label",children:"College"}),r.jsx("input",{type:"text",className:"form-control",name:"college",value:n.college,onChange:g,disabled:d})]}),r.jsxs("div",{className:"col-md-6 mb-3",children:[r.jsx("label",{className:"form-label",children:"USN"}),r.jsx("input",{type:"text",className:"form-control",name:"usn",value:n.usn,onChange:g,disabled:d})]})]}),r.jsxs("div",{className:"row",children:[r.jsxs("div",{className:"col-md-4 mb-3",children:[r.jsx("label",{className:"form-label",children:"Scheme"}),r.jsx("input",{type:"text",className:"form-control",name:"scheme",value:n.scheme,onChange:g,disabled:d})]}),r.jsxs("div",{className:"col-md-4 mb-3",children:[r.jsx("label",{className:"form-label",children:"Semester"}),r.jsx("select",{className:"form-control",name:"semester",value:n.semester,onChange:g,disabled:d,children:[1,2,3,4,5,6,7,8].map(m=>r.jsxs("option",{value:m,children:["Semester ",m]},m))})]}),r.jsxs("div",{className:"col-md-4 mb-3",children:[r.jsx("label",{className:"form-label",children:"Branch"}),r.jsx("input",{type:"text",className:"form-control",name:"branch",value:n.branch,onChange:g,disabled:d})]})]}),r.jsxs("div",{className:"row",children:[r.jsxs("div",{className:"col-md-6 mb-3",children:[r.jsx("label",{className:"form-label",children:"Password *"}),r.jsx("input",{type:"password",className:"form-control",name:"password",value:n.password,onChange:g,required:!0,disabled:d})]}),r.jsxs("div",{className:"col-md-6 mb-3",children:[r.jsx("label",{className:"form-label",children:"Confirm Password *"}),r.jsx("input",{type:"password",className:"form-control",name:"confirm_password",value:n.confirm_password,onChange:g,required:!0,disabled:d})]})]}),r.jsx("button",{type:"submit",className:"btn btn-primary w-100",disabled:d,children:d?"Registering...":"Register"})]}),r.jsx("div",{className:"mt-4 text-center",children:r.jsxs("p",{className:"mb-0",children:["Already have an account? ",r.jsx(Ne,{to:"/login",children:"Login here"})]})})]})})})},AA=p.div`
  padding: 24px;
`,kA=p.div`
  margin-bottom: 24px;
`,CA=p.h2`
  font-size: 22px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
`,EA=p.p`
  color: #6b7280;
  font-size: 14px;
`,Dv=p.div`
  background: white;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  padding: 20px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
`,TA=p.div`
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
`,po=p(Dv)`
  display: flex;
  flex-direction: column;
`,go=p.span`
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 10px;
`,bo=p.span`
  font-size: 26px;
  font-weight: 600;
  color: #111827;
`,NA=p(Dv)`
  margin-top: 10px;
`,MA=p.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #111827;
`,_A=p.table`
  width: 100%;
  border-collapse: collapse;
`,lc=p.th`
  text-align: left;
  font-size: 13px;
  color: #6b7280;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e7eb;
`,cr=p.td`
  padding: 14px 0;
  font-size: 14px;
  color: #111827;
  border-bottom: 1px solid #f3f4f6;
`,xh=p.span`
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;

  background: ${n=>n.type==="success"?"#ecfdf5":n.type==="warning"?"#fffbeb":"#fef2f2"};

  color: ${n=>n.type==="success"?"#059669":n.type==="warning"?"#d97706":"#dc2626"};
`;function O1(){return r.jsxs(AA,{children:[r.jsxs(kA,{children:[r.jsx(CA,{children:"Good Morning"}),r.jsx(EA,{children:"This is your admin dashboard overview"})]}),r.jsxs(TA,{children:[r.jsxs(po,{children:[r.jsx(go,{children:"Total Users"}),r.jsx(bo,{children:"12,540"})]}),r.jsxs(po,{children:[r.jsx(go,{children:"Active Subscriptions"}),r.jsx(bo,{children:"8,230"})]}),r.jsxs(po,{children:[r.jsx(go,{children:" Paid User"}),r.jsx(bo,{children:"4,320"})]}),r.jsxs(po,{children:[r.jsx(go,{children:"Total Document"}),r.jsx(bo,{children:"1,284"})]}),r.jsxs(po,{children:[r.jsx(go,{children:"New Users (This Month)"}),r.jsx(bo,{children:"1,200"})]}),r.jsxs(po,{children:[r.jsx(go,{children:"Question Paper"}),r.jsx(bo,{children:"320"})]}),r.jsxs(po,{children:[r.jsx(go,{children:"Revenue (This Month)"}),r.jsx(bo,{children:"₹4,25,000"})]})]}),r.jsxs(NA,{children:[r.jsx(MA,{children:"Recent User Activity"}),r.jsxs(_A,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx(lc,{children:"User"}),r.jsx(lc,{children:"Action"}),r.jsx(lc,{children:"Date"}),r.jsx(lc,{children:"Status"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx(cr,{children:"Ananya Sharma"}),r.jsx(cr,{children:"Purchased Subscription"}),r.jsx(cr,{children:"Today"}),r.jsx(cr,{children:r.jsx(xh,{type:"success",children:"Completed"})})]}),r.jsxs("tr",{children:[r.jsx(cr,{children:"Rahul Verma"}),r.jsx(cr,{children:"Downloaded Notes"}),r.jsx(cr,{children:"Yesterday"}),r.jsx(cr,{children:r.jsx(xh,{type:"success",children:"Success"})})]}),r.jsxs("tr",{children:[r.jsx(cr,{children:"Priya Nair"}),r.jsx(cr,{children:"Payment Failed"}),r.jsx(cr,{children:"2 Days Ago"}),r.jsx(cr,{children:r.jsx(xh,{type:"danger",children:"Failed"})})]})]})]})]})]})}const RA=p.span`
	display: inline-flex;
	align-items: center;
	padding: 0.25rem 0.75rem;
	border-radius: 9999px;
	font-size: 0.75rem;
	font-weight: 500;
	line-height: 1.5;
	
	${n=>n.$active?`
		background-color: #d1fae5;
		color: #065f46;
		border: 1px solid #a7f3d0;
	`:`
		background-color: #fee2e2;
		color: #991b1b;
		border: 1px solid #fecaca;
	`}

	@media (prefers-color-scheme: dark) {
		${n=>n.$active?`
			background-color: rgba(16, 185, 129, 0.2);
			color: #86efac;
			border-color: rgba(16, 185, 129, 0.3);
		`:`
			background-color: rgba(220, 38, 38, 0.2);
			color: #fca5a5;
			border-color: rgba(220, 38, 38, 0.3);
		`}
	}
`,Ov=p.div`
	display: ${n=>n.$isOpen?"flex":"none"};
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	align-items: center;
	justify-content: center;
	z-index: 1000;
`,zv=p.div`
	background-color: white;
	border-radius: 0.75rem;
	padding: 1.5rem;
	max-width: 680px;
	width: 94%;
	max-height: 90vh;
	overflow-y: auto;
	box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);

	@media (prefers-color-scheme: dark) {
		background-color: #1f2937;
	}
`,$v=p.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	border-bottom: 1px solid #e5e7eb;
	padding-bottom: 0.75rem;

	h2 {
		margin: 0;
		font-size: 1.25rem;
		color: #111827;

		@media (prefers-color-scheme: dark) {
			color: white;
		}
	}

	@media (prefers-color-scheme: dark) {
		border-bottom-color: #374151;
	}
`,Bv=p.button`
	background: none;
	border: none;
	cursor: pointer;
	color: #6b7280;
	padding: 0;
	width: 2rem;
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0.375rem;
	transition: all 0.2s;

	&:hover {
		color: #111827;
		background-color: #f3f4f6;
	}

	svg {
		width: 1.25rem;
		height: 1.25rem;
	}

	@media (prefers-color-scheme: dark) {
		color: #9ca3af;

		&:hover {
			color: white;
			background-color: #374151;
		}
	}
`,Uv=p.button`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem 1rem;
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
`,DA=()=>{const[n,i]=C.useState([{id:1,name:"Midterm Exam",subject:"Python Programming",duration:120,totalMarks:100,passingMarks:40,active:!0},{id:2,name:"Final Exam",subject:"Python Programming",duration:180,totalMarks:100,passingMarks:40,active:!0}]),[s,l]=C.useState(null),[d,u]=C.useState(!1),h=[{name:"name",label:"Test Name",type:"text",placeholder:"e.g., Midterm Exam",required:!0},{name:"subject",label:"Subject",type:"select",options:[{value:"Python Programming",label:"Python Programming"},{value:"Web Development",label:"Web Development"},{value:"Data Science",label:"Data Science"}],required:!0},{name:"duration",label:"Duration (minutes)",type:"number",placeholder:"120",required:!0},{name:"totalMarks",label:"Total Marks",type:"number",placeholder:"100",required:!0},{name:"passingMarks",label:"Passing Marks",type:"number",placeholder:"40",required:!0},{name:"active",label:"Status",type:"toggle"}],g=[{key:"name",label:"Test Name",sortable:!0},{key:"subject",label:"Subject"},{key:"duration",label:"Duration (min)"},{key:"totalMarks",label:"Total Marks"},{key:"passingMarks",label:"Passing Marks"},{key:"active",label:"Status",render:x=>r.jsx(RA,{$active:x,children:x?"Active":"Inactive"})}],b=x=>{s?(i(n.map(j=>j.id===s.id?{...j,...x}:j)),l(null)):i([...n,{id:Date.now(),...x,duration:parseInt(x.duration),totalMarks:parseInt(x.totalMarks),passingMarks:parseInt(x.passingMarks)}]),u(!1)},m=()=>{u(!1),l(null)},v=x=>{i(n.filter(j=>j.id!==x.id))};return r.jsxs("div",{style:{padding:"1.5rem"},children:[r.jsxs(Uv,{onClick:()=>u(!0),children:[r.jsx(at,{size:16}),"Create New Test"]}),r.jsx(Ov,{$isOpen:d,children:r.jsxs(zv,{children:[r.jsxs($v,{children:[r.jsx("h2",{children:s?"Edit Test":"Create New Test"}),r.jsx(Bv,{onClick:m,children:r.jsx(Me,{size:20})})]}),r.jsx($t,{fields:h,title:"",submitLabel:s?"Update":"Create",onSubmit:b,initialData:s||{name:"",subject:"",duration:"",totalMarks:"",passingMarks:"",active:!0}})]})}),r.jsx(Bt,{columns:g,data:n,title:"Test Configuration List",onEdit:x=>{l(x),u(!0)},onDelete:v,searchFields:["name","subject"]})]})},OA=()=>{const[n,i]=C.useState([{id:1,name:"Quiz",description:"Short assessment",weight:10},{id:2,name:"Midterm",description:"Mid-semester examination",weight:30},{id:3,name:"Final",description:"Final examination",weight:60}]),[s,l]=C.useState(null),[d,u]=C.useState(!1),h=[{name:"name",label:"Category Name",type:"text",placeholder:"e.g., Quiz",required:!0},{name:"description",label:"Description",type:"textarea",placeholder:"Category description"},{name:"weight",label:"Weight (%)",type:"number",placeholder:"10",required:!0}],g=[{key:"name",label:"Category Name",sortable:!0},{key:"description",label:"Description"},{key:"weight",label:"Weight (%)"}],b=x=>{s?(i(n.map(j=>j.id===s.id?{...j,...x}:j)),l(null)):i([...n,{id:Date.now(),...x,weight:parseInt(x.weight)}]),u(!1)},m=()=>{u(!1),l(null)},v=x=>{i(n.filter(j=>j.id!==x.id))};return r.jsxs("div",{style:{padding:"1.5rem"},children:[r.jsxs(Uv,{onClick:()=>u(!0),children:[r.jsx(at,{size:16}),"Create New Category"]}),r.jsx(Ov,{$isOpen:d,children:r.jsxs(zv,{children:[r.jsxs($v,{children:[r.jsx("h2",{children:s?"Edit Category":"Create New Category"}),r.jsx(Bv,{onClick:m,children:r.jsx(Me,{size:20})})]}),r.jsx($t,{fields:h,title:"",submitLabel:s?"Update":"Create",onSubmit:b,initialData:s||{name:"",description:"",weight:""}})]})}),r.jsx(Bt,{columns:g,data:n,title:"Test Category List",onEdit:x=>{l(x),u(!0)},onDelete:v,searchFields:["name"]})]})},zA=()=>{const n=[{id:"config",label:"Test Configuration",icon:"",content:r.jsx(DA,{})},{id:"categories",label:"Test Categories",icon:"",content:r.jsx(OA,{})}];return r.jsx(Sd,{pageTitle:"Test Settings",pageDescription:"Configure and manage test configurations and categories",pageIcon:"",tabs:n,viewMode:"tabs"})},Fa=p.span`
	display: inline-flex;
	align-items: center;
	padding: 0.25rem 0.75rem;
	border-radius: 9999px;
	font-size: 0.75rem;
	font-weight: 500;
	line-height: 1.5;
	
	${n=>n.$active?`
		background-color: #d1fae5;
		color: #065f46;
		border: 1px solid #a7f3d0;
	`:`
		background-color: #fee2e2;
		color: #991b1b;
		border: 1px solid #fecaca;
	`}

	@media (prefers-color-scheme: dark) {
		${n=>n.$active?`
			background-color: rgba(16, 185, 129, 0.2);
			color: #86efac;
			border-color: rgba(16, 185, 129, 0.3);
		`:`
			background-color: rgba(220, 38, 38, 0.2);
			color: #fca5a5;
			border-color: rgba(220, 38, 38, 0.3);
		`}
	}
`,$A=p.span`
	display: inline-flex;
	align-items: center;
	padding: 0.25rem 0.75rem;
	border-radius: 9999px;
	font-size: 0.75rem;
	font-weight: 500;
	line-height: 1.5;
	
	${n=>n.$required?`
		background-color: #fef3c7;
		color: #92400e;
		border: 1px solid #fde68a;
	`:`
		background-color: #d1fae5;
		color: #065f46;
		border: 1px solid #a7f3d0;
	`}

	@media (prefers-color-scheme: dark) {
		${n=>n.$required?`
			background-color: rgba(245, 158, 11, 0.2);
			color: #fcd34d;
			border-color: rgba(245, 158, 11, 0.3);
		`:`
			background-color: rgba(16, 185, 129, 0.2);
			color: #86efac;
			border-color: rgba(16, 185, 129, 0.3);
		`}
	}
`,Qa=p.div`
	display: ${n=>n.$isOpen?"flex":"none"};
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	align-items: center;
	justify-content: center;
	z-index: 1000;
`,Ya=p.div`
	background-color: white;
	border-radius: 8px;
	padding: 1.5rem;
	max-width: 680px;
	width: 94%;
	max-height: 90vh;
	overflow-y: auto;
	box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);

	@media (prefers-color-scheme: dark) {
		background-color: #1f2937;
	}
`,Va=p.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	border-bottom: 1px solid #e5e7eb;
	padding-bottom: 0.75rem;

	h2 {
		margin: 0;
		font-size: 1.25rem;
		color: #111827;

		@media (prefers-color-scheme: dark) {
			color: white;
		}
	}

	@media (prefers-color-scheme: dark) {
		border-bottom-color: #374151;
	}
`,Ga=p.button`
	background: none;
	border: none;
	font-size: 1.25rem;
	cursor: pointer;
	color: #6b7280;
	padding: 0;
	width: 2rem;
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 0.375rem;
	transition: all 0.2s;

	&:hover {
		color: #111827;
		background-color: #f3f4f6;
	}

	@media (prefers-color-scheme: dark) {
		color: #9ca3af;

		&:hover {
			color: white;
			background-color: #374151;
		}
	}
`,Ia=p.button`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem 1rem;
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
`,BA=()=>{const[n,i]=C.useState([{id:1,subscriptionType:"Premium",dailyPoints:10,monthlyBonus:100,active:!0},{id:2,subscriptionType:"Standard",dailyPoints:5,monthlyBonus:50,active:!0}]),[s,l]=C.useState(null),[d,u]=C.useState(!1),h=[{name:"subscriptionType",label:"Subscription Type",type:"text",placeholder:"e.g., Premium",required:!0},{name:"dailyPoints",label:"Daily Points",type:"number",placeholder:"10",required:!0},{name:"monthlyBonus",label:"Monthly Bonus Points",type:"number",placeholder:"100",required:!0},{name:"active",label:"Active",type:"toggle"}],g=[{key:"subscriptionType",label:"Subscription Type",sortable:!0},{key:"dailyPoints",label:"Daily Points"},{key:"monthlyBonus",label:"Monthly Bonus"},{key:"active",label:"Status",render:x=>r.jsx(Fa,{$active:x,children:x?"Active":"Inactive"})}],b=x=>{s?(i(n.map(j=>j.id===s.id?{...j,...x}:j)),l(null)):i([...n,{id:Date.now(),...x,dailyPoints:parseInt(x.dailyPoints),monthlyBonus:parseInt(x.monthlyBonus)}]),u(!1)},m=()=>{u(!1),l(null)},v=x=>{i(n.filter(j=>j.id!==x.id))};return r.jsxs("div",{style:{padding:"1.5rem"},children:[r.jsxs(Ia,{onClick:()=>u(!0),children:[r.jsx(at,{size:16}),"Create New Rule"]}),r.jsx(Qa,{$isOpen:d,children:r.jsxs(Ya,{children:[r.jsxs(Va,{children:[r.jsx("h2",{children:s?"Edit Rule":"Create New Subscription Rule"}),r.jsx(Ga,{onClick:m,children:r.jsx(Me,{size:20})})]}),r.jsx($t,{fields:h,title:"",submitLabel:s?"Update":"Create",onSubmit:b,initialData:s||{subscriptionType:"",dailyPoints:"",monthlyBonus:"",active:!0}})]})}),r.jsx(Bt,{columns:g,data:n,title:"Subscription Based Rules",onEdit:x=>{l(x),u(!0)},onDelete:v,searchFields:["subscriptionType"]})]})},UA=()=>{const[n,i]=C.useState([{id:1,ruleName:"Monthly Reset",resetDay:1,maxPointsBefore:1e3,active:!0},{id:2,ruleName:"Quarterly Reset",resetDay:90,maxPointsBefore:5e3,active:!0}]),[s,l]=C.useState(null),[d,u]=C.useState(!1),h=[{name:"ruleName",label:"Rule Name",type:"text",placeholder:"e.g., Monthly Reset",required:!0},{name:"resetDay",label:"Reset Every (days)",type:"number",placeholder:"1",required:!0},{name:"maxPointsBefore",label:"Max Points Before Reset",type:"number",placeholder:"1000",required:!0},{name:"active",label:"Active",type:"toggle"}],g=[{key:"ruleName",label:"Rule Name",sortable:!0},{key:"resetDay",label:"Reset Days"},{key:"maxPointsBefore",label:"Max Points"},{key:"active",label:"Status",render:x=>r.jsx(Fa,{$active:x,children:x?"Active":"Inactive"})}],b=x=>{s?(i(n.map(j=>j.id===s.id?{...j,...x}:j)),l(null)):i([...n,{id:Date.now(),...x,resetDay:parseInt(x.resetDay),maxPointsBefore:parseInt(x.maxPointsBefore)}]),u(!1)},m=()=>{u(!1),l(null)},v=x=>{i(n.filter(j=>j.id!==x.id))};return r.jsxs("div",{style:{padding:"1.5rem"},children:[r.jsxs(Ia,{onClick:()=>u(!0),children:[r.jsx(at,{size:16}),"Create New Reset Rule"]}),r.jsx(Qa,{$isOpen:d,children:r.jsxs(Ya,{children:[r.jsxs(Va,{children:[r.jsx("h2",{children:s?"Edit Reset Rule":"Create New Reset Rule"}),r.jsx(Ga,{onClick:m,children:r.jsx(Me,{size:20})})]}),r.jsx($t,{fields:h,title:"",submitLabel:s?"Update":"Create",onSubmit:b,initialData:s||{ruleName:"",resetDay:"",maxPointsBefore:"",active:!0}})]})}),r.jsx(Bt,{columns:g,data:n,title:"Reset Rules",onEdit:x=>{l(x),u(!0)},onDelete:v,searchFields:["ruleName"]})]})},KA=()=>{const[n,i]=C.useState([{id:1,action:"Login",points:5,maxDaily:5,active:!0},{id:2,action:"Solve Question",points:10,maxDaily:50,active:!0},{id:3,action:"View Lecture",points:3,maxDaily:30,active:!0}]),[s,l]=C.useState(null),[d,u]=C.useState(!1),h=[{name:"action",label:"Action",type:"text",placeholder:"e.g., Login",required:!0},{name:"points",label:"Points Per Action",type:"number",placeholder:"5",required:!0},{name:"maxDaily",label:"Max Daily Points",type:"number",placeholder:"50",required:!0},{name:"active",label:"Active",type:"toggle"}],g=[{key:"action",label:"Action",sortable:!0},{key:"points",label:"Points Per Action"},{key:"maxDaily",label:"Max Daily"},{key:"active",label:"Status",render:x=>r.jsx(Fa,{$active:x,children:x?"Active":"Inactive"})}],b=x=>{s?(i(n.map(j=>j.id===s.id?{...j,...x}:j)),l(null)):i([...n,{id:Date.now(),...x,points:parseInt(x.points),maxDaily:parseInt(x.maxDaily)}]),u(!1)},m=()=>{u(!1),l(null)},v=x=>{i(n.filter(j=>j.id!==x.id))};return r.jsxs("div",{style:{padding:"1.5rem"},children:[r.jsxs(Ia,{onClick:()=>u(!0),children:[r.jsx(at,{size:16}),"Create New Daily Usage Rule"]}),r.jsx(Qa,{$isOpen:d,children:r.jsxs(Ya,{children:[r.jsxs(Va,{children:[r.jsx("h2",{children:s?"Edit Daily Usage Rule":"Create New Daily Usage Rule"}),r.jsx(Ga,{onClick:m,children:r.jsx(Me,{size:20})})]}),r.jsx($t,{fields:h,title:"",submitLabel:s?"Update":"Create",onSubmit:b,initialData:s||{action:"",points:"",maxDaily:"",active:!0}})]})}),r.jsx(Bt,{columns:g,data:n,title:"Daily Usage Points",onEdit:x=>{l(x),u(!0)},onDelete:v,searchFields:["action"]})]})},LA=()=>{const[n,i]=C.useState([{id:1,difficultyLevel:"Easy",points:5,approvalRequired:!1,active:!0},{id:2,difficultyLevel:"Medium",points:10,approvalRequired:!0,active:!0},{id:3,difficultyLevel:"Hard",points:20,approvalRequired:!0,active:!0}]),[s,l]=C.useState(null),[d,u]=C.useState(!1),h=[{name:"difficultyLevel",label:"Difficulty Level",type:"select",options:[{value:"Easy",label:"Easy"},{value:"Medium",label:"Medium"},{value:"Hard",label:"Hard"}],required:!0},{name:"points",label:"Points",type:"number",placeholder:"5",required:!0},{name:"approvalRequired",label:"Admin Approval Required",type:"toggle"},{name:"active",label:"Active",type:"toggle"}],g=[{key:"difficultyLevel",label:"Difficulty Level",sortable:!0},{key:"points",label:"Points"},{key:"approvalRequired",label:"Approval Required",render:x=>r.jsx($A,{$required:x,children:x?"Yes":"No"})},{key:"active",label:"Status",render:x=>r.jsx(Fa,{$active:x,children:x?"Active":"Inactive"})}],b=x=>{s?(i(n.map(j=>j.id===s.id?{...j,...x}:j)),l(null)):i([...n,{id:Date.now(),...x,points:parseInt(x.points)}]),u(!1)},m=()=>{u(!1),l(null)},v=x=>{i(n.filter(j=>j.id!==x.id))};return r.jsxs("div",{style:{padding:"1.5rem"},children:[r.jsxs(Ia,{onClick:()=>u(!0),children:[r.jsx(at,{size:16}),"Create New Question Points Rule"]}),r.jsx(Qa,{$isOpen:d,children:r.jsxs(Ya,{children:[r.jsxs(Va,{children:[r.jsx("h2",{children:s?"Edit Question Points":"Create New Question Points Rule"}),r.jsx(Ga,{onClick:m,children:r.jsx(Me,{size:20})})]}),r.jsx($t,{fields:h,title:"",submitLabel:s?"Update":"Create",onSubmit:b,initialData:s||{difficultyLevel:"",points:"",approvalRequired:!1,active:!0}})]})}),r.jsx(Bt,{columns:g,data:n,title:"Points Per Approved Questions",onEdit:x=>{l(x),u(!0)},onDelete:v,searchFields:["difficultyLevel"]})]})},PA=()=>{const[n,i]=C.useState([{id:1,uploadType:"Single Choice Question",points:3,maxPerDay:20,active:!0},{id:2,uploadType:"Multiple Choice Question",points:5,maxPerDay:20,active:!0},{id:3,uploadType:"Essay Question",points:10,maxPerDay:10,active:!0}]),[s,l]=C.useState(null),[d,u]=C.useState(!1),h=[{name:"uploadType",label:"Upload Type",type:"text",placeholder:"e.g., Single Choice Question",required:!0},{name:"points",label:"Points Per Upload",type:"number",placeholder:"3",required:!0},{name:"maxPerDay",label:"Max Per Day",type:"number",placeholder:"20",required:!0},{name:"active",label:"Active",type:"toggle"}],g=[{key:"uploadType",label:"Upload Type",sortable:!0},{key:"points",label:"Points Per Upload"},{key:"maxPerDay",label:"Max Per Day"},{key:"active",label:"Status",render:x=>r.jsx(Fa,{$active:x,children:x?"Active":"Inactive"})}],b=x=>{s?(i(n.map(j=>j.id===s.id?{...j,...x}:j)),l(null)):i([...n,{id:Date.now(),...x,points:parseInt(x.points),maxPerDay:parseInt(x.maxPerDay)}]),u(!1)},m=()=>{u(!1),l(null)},v=x=>{i(n.filter(j=>j.id!==x.id))};return r.jsxs("div",{style:{padding:"1.5rem"},children:[r.jsxs(Ia,{onClick:()=>u(!0),children:[r.jsx(at,{size:16}),"Create New Upload Points Rule"]}),r.jsx(Qa,{$isOpen:d,children:r.jsxs(Ya,{children:[r.jsxs(Va,{children:[r.jsx("h2",{children:s?"Edit Upload Points":"Create New Upload Points Rule"}),r.jsx(Ga,{onClick:m,children:r.jsx(Me,{size:20})})]}),r.jsx($t,{fields:h,title:"",submitLabel:s?"Update":"Create",onSubmit:b,initialData:s||{uploadType:"",points:"",maxPerDay:"",active:!0}})]})}),r.jsx(Bt,{columns:g,data:n,title:"Points Per Question Upload",onEdit:x=>{l(x),u(!0)},onDelete:v,searchFields:["uploadType"]})]})},HA=()=>{const[n,i]=C.useState([{id:1,testType:"Quiz",pointsPerCorrect:2,pointsPerIncorrect:-.5,maxPointsPerTest:50,active:!0},{id:2,testType:"Midterm",pointsPerCorrect:5,pointsPerIncorrect:-1,maxPointsPerTest:200,active:!0},{id:3,testType:"Final Exam",pointsPerCorrect:10,pointsPerIncorrect:-2,maxPointsPerTest:500,active:!0}]),[s,l]=C.useState(null),[d,u]=C.useState(!1),h=[{name:"testType",label:"Test Type",type:"text",placeholder:"e.g., Quiz",required:!0},{name:"pointsPerCorrect",label:"Points Per Correct Answer",type:"number",placeholder:"2",required:!0},{name:"pointsPerIncorrect",label:"Points Per Incorrect (Negative)",type:"number",placeholder:"-0.5",required:!0},{name:"maxPointsPerTest",label:"Max Points Per Test",type:"number",placeholder:"50",required:!0},{name:"active",label:"Active",type:"toggle"}],g=[{key:"testType",label:"Test Type",sortable:!0},{key:"pointsPerCorrect",label:"Correct Answer"},{key:"pointsPerIncorrect",label:"Incorrect Answer"},{key:"maxPointsPerTest",label:"Max Points"},{key:"active",label:"Status",render:x=>r.jsx(Fa,{$active:x,children:x?"Active":"Inactive"})}],b=x=>{s?(i(n.map(j=>j.id===s.id?{...j,...x}:j)),l(null)):i([...n,{id:Date.now(),...x,pointsPerCorrect:parseFloat(x.pointsPerCorrect),pointsPerIncorrect:parseFloat(x.pointsPerIncorrect),maxPointsPerTest:parseInt(x.maxPointsPerTest)}]),u(!1)},m=()=>{u(!1),l(null)},v=x=>{i(n.filter(j=>j.id!==x.id))};return r.jsxs("div",{style:{padding:"1.5rem"},children:[r.jsxs(Ia,{onClick:()=>u(!0),children:[r.jsx(at,{size:16}),"Create New Test Points Rule"]}),r.jsx(Qa,{$isOpen:d,children:r.jsxs(Ya,{children:[r.jsxs(Va,{children:[r.jsx("h2",{children:s?"Edit Test Points":"Create New Test Points Rule"}),r.jsx(Ga,{onClick:m,children:r.jsx(Me,{size:20})})]}),r.jsx($t,{fields:h,title:"",submitLabel:s?"Update":"Create",onSubmit:b,initialData:s||{testType:"",pointsPerCorrect:"",pointsPerIncorrect:"",maxPointsPerTest:"",active:!0}})]})}),r.jsx(Bt,{columns:g,data:n,title:"Points Per Test",onEdit:x=>{l(x),u(!0)},onDelete:v,searchFields:["testType"]})]})},qA=()=>{const n=[{id:"subscription",label:"Subscription Based Points",icon:"",content:r.jsx(BA,{})},{id:"reset",label:"Reset Rules",icon:"",content:r.jsx(UA,{})},{id:"daily",label:"Daily Points",icon:"",content:r.jsx(KA,{})},{id:"approved-questions",label:"Per Approved Questions",icon:"",content:r.jsx(LA,{})},{id:"question-upload",label:"Points Per Upload",icon:"",content:r.jsx(PA,{})},{id:"test",label:"Points Per Test",icon:"",content:r.jsx(HA,{})}];return r.jsx(Sd,{pageTitle:"Point System",pageDescription:"Configure all point earning rules and system",pageIcon:"",tabs:n,viewMode:"tabs"})},FA=sn`
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
`,QA=p.div`
  display: flex;
  height: 100vh;
  background-color: #f9fafb;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`,YA=p.div`
  flex: 1;
  overflow: auto;
`;p.div`
  padding: 2rem;
`;p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;p.div`
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
`;const VA=p.button`
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
`;p.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${n=>n.$active?"#d1fae5":"#fee2e2"};
  color: ${n=>n.$active?"#065f46":"#991b1b"};
  border: 1px solid ${n=>n.$active?"#a7f3d0":"#fecaca"};

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>n.$active?"rgba(16, 185, 129, 0.2)":"rgba(220, 38, 38, 0.2)"};
    color: ${n=>n.$active?"#86efac":"#fca5a5"};
    border-color: ${n=>n.$active?"rgba(16, 185, 129, 0.3)":"rgba(220, 38, 38, 0.3)"};
  }
`;const GA=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;
  margin-bottom: 2rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,IA=p.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }
`,XA=p.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,ZA=p.p`
  font-size: 0.875rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,JA=p.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  overflow-x: auto;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }
`,WA=p.button`
  padding: 1rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${n=>n.$active?"#2563eb":"#6b7280"};
  background: none;
  border: none;
  border-bottom: 2px solid ${n=>n.$active?"#2563eb":"transparent"};
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: -1px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;

  &:hover {
    color: ${n=>n.$active?"#2563eb":"#374151"};
  }

  @media (prefers-color-scheme: dark) {
    color: ${n=>n.$active?"#60a5fa":"#9ca3af"};
    
    &:hover {
      color: ${n=>n.$active?"#60a5fa":"#e5e7eb"};
    }
  }
`,vh=p.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,yh=p.div`
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
`,jh=p.div`
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
`,wh=p.span`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,Sh=p.span`
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  background-color: ${n=>{switch(n.$type){case"role-change":return"#eff6ff";case"export":return"#f3f4f6";case"block":return"#fef2f2";case"assign-points":return"#fef3c7";case"edit":return"#eff6ff";case"delete":return"#fef2f2";case"publish":return"#fef3c7";case"approve":return"#ecfdf5";default:return"#f3f4f6"}}};
  color: ${n=>{switch(n.$type){case"role-change":return"#1e40af";case"export":return"#374151";case"block":return"#991b1b";case"assign-points":return"#92400e";case"edit":return"#1e40af";case"delete":return"#991b1b";case"publish":return"#92400e";case"approve":return"#065f46";default:return"#374151"}}};
  border: 1px solid ${n=>{switch(n.$type){case"role-change":return"#bfdbfe";case"export":return"#e5e7eb";case"block":return"#fecaca";case"assign-points":return"#fde68a";case"edit":return"#bfdbfe";case"delete":return"#fecaca";case"publish":return"#fde68a";case"approve":return"#d1fae5";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>{switch(n.$type){case"role-change":return"rgba(37, 99, 235, 0.2)";case"export":return"rgba(55, 65, 81, 0.5)";case"block":return"rgba(220, 38, 38, 0.2)";case"assign-points":return"rgba(245, 158, 11, 0.2)";case"edit":return"rgba(37, 99, 235, 0.2)";case"delete":return"rgba(220, 38, 38, 0.2)";case"publish":return"rgba(245, 158, 11, 0.2)";case"approve":return"rgba(16, 185, 129, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${n=>{switch(n.$type){case"role-change":return"#93c5fd";case"export":return"#d1d5db";case"block":return"#fca5a5";case"assign-points":return"#fcd34d";case"edit":return"#93c5fd";case"delete":return"#fca5a5";case"publish":return"#fcd34d";case"approve":return"#86efac";default:return"#d1d5db"}}};
    border-color: ${n=>{switch(n.$type){case"role-change":return"rgba(37, 99, 235, 0.3)";case"export":return"rgba(75, 85, 99, 0.5)";case"block":return"rgba(220, 38, 38, 0.3)";case"assign-points":return"rgba(245, 158, 11, 0.3)";case"edit":return"rgba(37, 99, 235, 0.3)";case"delete":return"rgba(220, 38, 38, 0.3)";case"publish":return"rgba(245, 158, 11, 0.3)";case"approve":return"rgba(16, 185, 129, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,Ah=p.button`
  width: 2rem;
  height: 1.125rem;
  border-radius: 9999px;
  background-color: ${n=>n.$active?"#2563eb":"#e5e7eb"};
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
    left: ${n=>n.$active?"1rem":"0.125rem"};
    transition: left 0.2s;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>n.$active?"#3b82f6":"#4b5563"};
  }
`,e7=p.div`
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
`,t7=p.div`
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
`,r7=p(VA)`
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
`,n7=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;
  margin-top: 2rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,o7=p.div`
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
`,a7=p.div`
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
`,i7=p.span`
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
`,l7=p.div`
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
`,s7=p.div`
  padding: 1.25rem 1.5rem;
  border-right: ${n=>n.$isLast?"none":"1px solid #e5e7eb"};
  background-color: #fafafa;

  @media (max-width: 1024px) {
    border-right: ${n=>n.$isLast?"none":"1px solid #e5e7eb"};
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
`,c7=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`,d7=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: ${n=>`${n.$color}10`};
  color: ${n=>n.$color};
  border-radius: 0.5rem;

  svg {
    width: 1rem;
    height: 1rem;
  }
`,u7=p.div`
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.125rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,f7=p.div`
  font-size: 0.75rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,h7=p.div`
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
`,m7=p.div`
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
`,p7=p.span`
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
`,g7=p.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.7rem;
  color: ${n=>n.$visible?"#059669":"#9ca3af"};
  
  svg {
    width: 0.7rem;
    height: 0.7rem;
  }

  @media (prefers-color-scheme: dark) {
    color: ${n=>n.$visible?"#86efac":"#6b7280"};
  }
`,b7=p.div`
  display: ${n=>n.$isOpen?"flex":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,x7=p.div`
  background-color: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  max-width: 680px;
  width: 94%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
  }
`,v7=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.75rem;

  h2 {
    margin: 0;
    font-size: 1.25rem;
    color: #111827;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }
`,y7=p.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
  padding: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  transition: all 0.2s;

  &:hover {
    color: #111827;
    background-color: #f3f4f6;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    &:hover {
      color: white;
      background-color: #374151;
    }
  }
`,j7=p.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
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
`,w7=()=>{var v;const[n,i]=C.useState("admin"),s=[{id:"super-admin",name:"Super Admin",users:2,color:"#7c3aed",icon:Rl},{id:"admin",name:"Admin",users:8,color:"#2563eb",icon:br},{id:"manager",name:"Manager",users:15,color:"#0891b2",icon:Oa},{id:"student",name:"Student",users:245,color:"#059669",icon:br}],l={"super-admin":{totalPermissions:32,activePermissions:32,lastActive:"2 minutes ago",usageRate:"100%"},admin:{totalPermissions:28,activePermissions:26,lastActive:"5 minutes ago",usageRate:"93%"},manager:{totalPermissions:20,activePermissions:18,lastActive:"15 minutes ago",usageRate:"90%"},student:{totalPermissions:10,activePermissions:10,lastActive:"1 minute ago",usageRate:"100%"}},d=[{icon:Ct,text:"dashboard"},{icon:br,text:"users → role change",badge:{type:"role-change",label:"role change"}},{icon:sm,text:"payments → export",badge:{type:"export",label:"export"}},{icon:xd,text:"modules"},{icon:_o,text:"questions → assign points",badge:{type:"assign-points",label:"assign points"}},{icon:Oa,text:"academic settings"},{icon:Mo,text:"points rules"}],u=[{icon:br,text:"users"},{icon:Um,text:"users → block",badge:{type:"block",label:"block"}},{icon:Et,text:"documents"},{icon:_o,text:"questions"},{icon:br,text:"student questions"},{icon:lm,text:"subscriptions"},{icon:Oa,text:"test settings"}],h=[{icon:br,text:"users → edit",badge:{type:"edit",label:"edit"}},{icon:sm,text:"payments"},{icon:Et,text:"documents → delete",badge:{type:"delete",label:"delete"}},{icon:_o,text:"questions → publish",badge:{type:"publish",label:"publish"}},{icon:br,text:"student questions → approve",badge:{type:"approve",label:"approve"}},{icon:lm,text:"subscriptions → delete",badge:{type:"delete",label:"delete"}},{icon:Oa,text:"system settings"}],g=["Dashboard","Users","Payments","Documents","Modules","Questions","Student Questions","Academic Settings","Subscriptions","Points Rules","Test Settings","System Settings","Audit Logs","File Limits","Reports","Analytics","Notifications","Support Tickets"],b={"super-admin":g,admin:["Dashboard","Users","Payments","Documents","Modules","Questions","Student Questions","Academic Settings","Subscriptions","Points Rules","Test Settings","Audit Logs","Reports","Analytics"],manager:["Dashboard","Documents","Modules","Questions","Student Questions","Test Settings","Reports","Analytics","Notifications"],student:["Dashboard","Documents","Modules","Questions","Student Questions","Support Tickets"]},m=l[n];return r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1rem",marginBottom:"2rem"},children:[r.jsxs("div",{style:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"0.75rem",padding:"1.25rem",boxShadow:"0 1px 2px 0 rgba(0, 0, 0, 0.05)"},children:[r.jsx("div",{style:{fontSize:"0.875rem",color:"#6b7280",marginBottom:"0.5rem"},children:"Total Permissions"}),r.jsx("div",{style:{fontSize:"2rem",fontWeight:"600",color:"#111827"},children:m.totalPermissions})]}),r.jsxs("div",{style:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"0.75rem",padding:"1.25rem",boxShadow:"0 1px 2px 0 rgba(0, 0, 0, 0.05)"},children:[r.jsx("div",{style:{fontSize:"0.875rem",color:"#6b7280",marginBottom:"0.5rem"},children:"Active Permissions"}),r.jsx("div",{style:{fontSize:"2rem",fontWeight:"600",color:"#111827"},children:m.activePermissions})]}),r.jsxs("div",{style:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"0.75rem",padding:"1.25rem",boxShadow:"0 1px 2px 0 rgba(0, 0, 0, 0.05)"},children:[r.jsx("div",{style:{fontSize:"0.875rem",color:"#6b7280",marginBottom:"0.5rem"},children:"Last Active"}),r.jsx("div",{style:{fontSize:"2rem",fontWeight:"600",color:"#111827"},children:m.lastActive})]}),r.jsxs("div",{style:{backgroundColor:"white",border:"1px solid #e5e7eb",borderRadius:"0.75rem",padding:"1.25rem",boxShadow:"0 1px 2px 0 rgba(0, 0, 0, 0.05)"},children:[r.jsx("div",{style:{fontSize:"0.875rem",color:"#6b7280",marginBottom:"0.5rem"},children:"Usage Rate"}),r.jsx("div",{style:{fontSize:"2rem",fontWeight:"600",color:"#111827"},children:m.usageRate})]})]}),r.jsxs(GA,{children:[r.jsxs(IA,{children:[r.jsx(XA,{children:"Role Permissions"}),r.jsx(ZA,{children:"Configure which permissions each role has access to."})]}),r.jsx(JA,{children:s.map(x=>r.jsx(WA,{$active:n===x.id,onClick:()=>i(x.id),children:x.name},x.id))}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1.5rem",padding:"1.5rem"},children:[r.jsx(vh,{children:d.map((x,j)=>r.jsxs(yh,{children:[r.jsx(jh,{children:r.jsx(x.icon,{})}),r.jsxs(wh,{children:[x.text,x.badge&&r.jsx(Sh,{$type:x.badge.type,children:x.badge.label})]}),r.jsx(Ah,{$active:n==="admin"||n==="super-admin"})]},j))}),r.jsx(vh,{children:u.map((x,j)=>r.jsxs(yh,{children:[r.jsx(jh,{children:r.jsx(x.icon,{})}),r.jsxs(wh,{children:[x.text,x.badge&&r.jsx(Sh,{$type:x.badge.type,children:x.badge.label})]}),r.jsx(Ah,{$active:n==="admin"||n==="super-admin"})]},j))}),r.jsx(vh,{children:h.map((x,j)=>r.jsxs(yh,{children:[r.jsx(jh,{children:r.jsx(x.icon,{})}),r.jsxs(wh,{children:[x.text,x.badge&&r.jsx(Sh,{$type:x.badge.type,children:x.badge.label})]}),r.jsx(Ah,{$active:n==="admin"||n==="super-admin"})]},j))})]}),r.jsxs(e7,{children:[r.jsxs(t7,{children:[r.jsx(Rl,{size:16}),r.jsx("span",{children:((v=s.find(x=>x.id===n))==null?void 0:v.name)||"Admin"})]}),r.jsxs(r7,{children:[r.jsx(Cv,{size:16}),"Save Changes"]})]})]}),r.jsxs(n7,{children:[r.jsxs(o7,{children:[r.jsxs(a7,{children:[r.jsx("h3",{children:"Menu Visibility per Role"}),r.jsx("p",{children:"Menu items are automatically rendered based on the permissions above"})]}),r.jsxs(i7,{children:[r.jsx(Ct,{size:14}),"Live Preview"]})]}),r.jsx(l7,{children:s.map((x,j)=>{const S=x.icon,w=b[x.id]||[];return r.jsxs(s7,{$isLast:j===s.length-1,children:[r.jsxs(c7,{children:[r.jsx(d7,{$color:x.color,children:r.jsx(S,{})}),r.jsxs("div",{children:[r.jsx(u7,{children:x.name}),r.jsxs(f7,{children:[x.users," users"]})]})]}),r.jsx(h7,{children:g.map((N,E)=>{const A=w.includes(N);return r.jsxs(m7,{children:[r.jsxs(p7,{children:[r.jsx(HS,{size:14}),N]}),r.jsx(g7,{$visible:A,children:A?r.jsxs(r.Fragment,{children:[r.jsx(jv,{size:12}),"Visible"]}):r.jsxs(r.Fragment,{children:[r.jsx(Ct,{size:12}),"Hidden"]})})]},E)})})]},x.id)})})]})]})},S7=()=>{const[n,i]=C.useState([{id:1,user:"Admin",action:"Updated role permissions",date:"2026-02-10 10:12"},{id:2,user:"Manager",action:"Exported reports",date:"2026-02-12 14:22"}]),s=[{key:"user",label:"User",sortable:!0},{key:"action",label:"Action"},{key:"date",label:"Date"}];return r.jsx("div",{style:{padding:"1.5rem"},children:r.jsx(Bt,{columns:s,data:n,title:"Audit Logs",searchFields:["user","action"]})})},A7=()=>{const[n,i]=C.useState([{id:1,type:"User Upload",maxMB:50},{id:2,type:"Document Storage per User",maxMB:500}]),[s,l]=C.useState(null),[d,u]=C.useState(!1),h=[{name:"type",label:"File Type",type:"text",required:!0},{name:"maxMB",label:"Max (MB)",type:"number",required:!0}],g=[{key:"type",label:"Type",sortable:!0},{key:"maxMB",label:"Max (MB)"}],b=x=>{s?(i(n.map(j=>j.id===s.id?{...j,...x}:j)),l(null)):i([...n,{id:Date.now(),...x,maxMB:parseInt(x.maxMB)}]),u(!1)},m=x=>i(n.filter(j=>j.id!==x.id)),v=()=>{u(!1),l(null)};return r.jsxs("div",{style:{padding:"1.5rem"},children:[r.jsxs(j7,{onClick:()=>u(!0),children:[r.jsx(at,{size:16}),"Create New Limit"]}),r.jsx(b7,{$isOpen:d,children:r.jsxs(x7,{children:[r.jsxs(v7,{children:[r.jsx("h2",{children:s?"Edit Limit":"Create New Limit"}),r.jsx(y7,{onClick:v,children:r.jsx(Me,{size:20})})]}),r.jsx($t,{fields:h,title:"",submitLabel:s?"Update":"Create",onSubmit:b,initialData:s||{type:"",maxMB:""}})]})}),r.jsx(Bt,{columns:g,data:n,title:"File Limits",onEdit:x=>{l(x),u(!0)},onDelete:m,searchFields:["type"]})]})},k7=()=>{const[n,i]=C.useState({maintenanceMode:!1,maxLoginAttempts:5}),s=[{name:"maintenanceMode",label:"Maintenance Mode",type:"toggle"},{name:"maxLoginAttempts",label:"Max Login Attempts",type:"number"}],l=d=>{i({...n,...d}),alert("Settings saved successfully!")};return r.jsx("div",{style:{padding:"1.5rem"},children:r.jsx($t,{fields:s,title:"System Settings",submitLabel:"Save",onSubmit:l,initialData:n})})},C7=()=>{const n=[{id:"role-performance",label:"Role Performance",icon:r.jsx(vd,{}),content:r.jsx(w7,{})},{id:"audit-logs",label:"Audit Logs",icon:r.jsx(Et,{}),content:r.jsx(S7,{})},{id:"file-limits",label:"File Limits",icon:r.jsx(Et,{}),content:r.jsx(A7,{})},{id:"system",label:"System",icon:r.jsx(Oa,{}),content:r.jsx(k7,{})}];return r.jsxs(r.Fragment,{children:[r.jsx(FA,{}),r.jsx(QA,{children:r.jsx(YA,{children:r.jsx(Sd,{pageTitle:"System Settings",pageDescription:"Manage system-wide settings, logs and limits",pageIcon:"",tabs:n,viewMode:"tabs"})})})]})};var kh={exports:{}},Ch={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z1;function E7(){if(z1)return Ch;z1=1;var n=Ka();function i(b,m){return b===m&&(b!==0||1/b===1/m)||b!==b&&m!==m}var s=typeof Object.is=="function"?Object.is:i,l=n.useSyncExternalStore,d=n.useRef,u=n.useEffect,h=n.useMemo,g=n.useDebugValue;return Ch.useSyncExternalStoreWithSelector=function(b,m,v,x,j){var S=d(null);if(S.current===null){var w={hasValue:!1,value:null};S.current=w}else w=S.current;S=h(function(){function E(R){if(!A){if(A=!0,M=R,R=x(R),j!==void 0&&w.hasValue){var $=w.value;if(j($,R))return T=$}return T=R}if($=T,s(M,R))return $;var L=x(R);return j!==void 0&&j($,L)?(M=R,$):(M=R,T=L)}var A=!1,M,T,_=v===void 0?null:v;return[function(){return E(m())},_===null?void 0:function(){return E(_())}]},[m,v,x,j]);var N=l(b,S[0],S[1]);return u(function(){w.hasValue=!0,w.value=N},[N]),g(N),N},Ch}var $1;function T7(){return $1||($1=1,kh.exports=E7()),kh.exports}var N7=T7();function M7(n){n()}function _7(){let n=null,i=null;return{clear(){n=null,i=null},notify(){M7(()=>{let s=n;for(;s;)s.callback(),s=s.next})},get(){const s=[];let l=n;for(;l;)s.push(l),l=l.next;return s},subscribe(s){let l=!0;const d=i={callback:s,next:null,prev:i};return d.prev?d.prev.next=d:n=d,function(){!l||n===null||(l=!1,d.next?d.next.prev=d.prev:i=d.prev,d.prev?d.prev.next=d.next:n=d.next)}}}}var B1={notify(){},get:()=>[]};function R7(n,i){let s,l=B1,d=0,u=!1;function h(N){v();const E=l.subscribe(N);let A=!1;return()=>{A||(A=!0,E(),x())}}function g(){l.notify()}function b(){w.onStateChange&&w.onStateChange()}function m(){return u}function v(){d++,s||(s=n.subscribe(b),l=_7())}function x(){d--,s&&d===0&&(s(),s=void 0,l.clear(),l=B1)}function j(){u||(u=!0,v())}function S(){u&&(u=!1,x())}const w={addNestedSub:h,notifyNestedSubs:g,handleChangeWrapper:b,isSubscribed:m,trySubscribe:j,tryUnsubscribe:S,getListeners:()=>l};return w}var D7=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",O7=D7(),z7=()=>typeof navigator<"u"&&navigator.product==="ReactNative",$7=z7(),B7=()=>O7||$7?C.useLayoutEffect:C.useEffect,U7=B7(),Eh=Symbol.for("react-redux-context"),Th=typeof globalThis<"u"?globalThis:{};function K7(){if(!C.createContext)return{};const n=Th[Eh]??(Th[Eh]=new Map);let i=n.get(C.createContext);return i||(i=C.createContext(null),n.set(C.createContext,i)),i}var Gn=K7();function L7(n){const{children:i,context:s,serverState:l,store:d}=n,u=C.useMemo(()=>{const b=R7(d);return{store:d,subscription:b,getServerState:l?()=>l:void 0}},[d,l]),h=C.useMemo(()=>d.getState(),[d]);U7(()=>{const{subscription:b}=u;return b.onStateChange=b.notifyNestedSubs,b.trySubscribe(),h!==d.getState()&&b.notifyNestedSubs(),()=>{b.tryUnsubscribe(),b.onStateChange=void 0}},[u,h]);const g=s||Gn;return C.createElement(g.Provider,{value:u},i)}var P7=L7;function Lm(n=Gn){return function(){return C.useContext(n)}}var Kv=Lm();function Lv(n=Gn){const i=n===Gn?Kv:Lm(n),s=()=>{const{store:l}=i();return l};return Object.assign(s,{withTypes:()=>s}),s}var H7=Lv();function q7(n=Gn){const i=n===Gn?H7:Lv(n),s=()=>i().dispatch;return Object.assign(s,{withTypes:()=>s}),s}var Pm=q7(),F7=(n,i)=>n===i;function Q7(n=Gn){const i=n===Gn?Kv:Lm(n),s=(l,d={})=>{const{equalityFn:u=F7}=typeof d=="function"?{equalityFn:d}:d,h=i(),{store:g,subscription:b,getServerState:m}=h;C.useRef(!0);const v=C.useCallback({[l.name](j){return l(j)}}[l.name],[l]),x=N7.useSyncExternalStoreWithSelector(b.addNestedSub,g.getState,m||g.getState,v,u);return C.useDebugValue(x),x};return Object.assign(s,{withTypes:()=>s}),s}var Hm=Q7();const Pv="SET_USERS",Hv="UPDATE_USER",Y7=n=>({type:Pv,payload:n}),qv=n=>({type:Hv,payload:n}),V7=sn`
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
`,G7=p.div`
  display: flex;
  height: 100vh;
  background-color: #f9fafb;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`,I7=p.div`
  flex: 1;
  overflow: auto;
`,X7=p.div`
  padding: 2rem;
`,Z7=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`,J7=p.div`
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
`;const W7=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,ek=p.div`
  padding: 1.25rem;
`,tk=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`,rk=p.div`
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
`,nk=p.input`
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
`,U1=p.div`
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
`,K1=p.select`
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
`,Fv=p.button`
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
`,ok=p(Fv)`
  background-color: #2563eb;
  color: white;
  border-color: #2563eb;
  &:hover {
    background-color: #2052daa5;
    color: white;
    }`,ak=p.div`
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
`,Nh=p.div`
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
`,Mh=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: ${n=>n.bg||"#eff6ff"};
  border-radius: 0.75rem;
  color: ${n=>n.color||"#2563eb"};

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`,_h=p.div`
  flex: 1;
`,Rh=p.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,Dh=p.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,ik=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,lk=p.div`
  overflow-x: auto;
`,sk=p.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
`,ck=p.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-bottom-color: #4b5563;
  }
`,Ca=p.th`
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
`,dk=p.tbody``,fm=p.tr`
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
`,xo=p.td`
  padding: 1.25rem 1.5rem;
  font-size: 0.875rem;
  color: ${n=>n.color||"#4b5563"};

  @media (prefers-color-scheme: dark) {
    color: ${n=>n.color||"#d1d5db"};
  }
`,uk=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,fk=p.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background-color: ${n=>n.bg||"#3b82f6"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  font-size: 0.875rem;
  flex-shrink: 0;
`,hk=p.div`
  font-weight: 500;
  color: #111827;
  transition: color 0.2s;

  ${fm}:hover & {
    color: #2563eb;
  }

  @media (prefers-color-scheme: dark) {
    color: white;

    ${fm}:hover & {
      color: #60a5fa;
    }
  }
`,mk=p.div`
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
`,qm=p.span`
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
`,pk=p(qm)`
  background-color: ${n=>{switch(n.role){case"Super Admin":return"#fffbeb";case"Admin":return"#faf5ff";case"Manager":return"#eef2ff";case"Student":return"#eff6ff";default:return"#f9fafb"}}};
  color: ${n=>{switch(n.role){case"Super Admin":return"#b45309";case"Admin":return"#ea6512";case"Manager":return"#4f46e5";case"Student":return"#132020";default:return"#374151"}}};
  border-color: ${n=>{switch(n.role){case"Super Admin":return"#fde68a";case"Admin":return"#d5853f";case"Manager":return"#c7d2fe";case"Student":return"#bffefe";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>{switch(n.role){case"Super Admin":return"rgba(245, 158, 11, 0.2)";case"Admin":return"rgba(139, 92, 246, 0.2)";case"Manager":return"rgba(79, 70, 229, 0.2)";case"Student":return"rgba(37, 99, 235, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${n=>{switch(n.role){case"Super Admin":return"#fcd34d";case"Admin":return"#c4b5fd";case"Manager":return"#a5b4fc";case"Student":return"#93c5fd";default:return"#d1d5db"}}};
    border-color: ${n=>{switch(n.role){case"Super Admin":return"rgba(245, 158, 11, 0.3)";case"Admin":return"rgba(139, 92, 246, 0.3)";case"Manager":return"rgba(79, 70, 229, 0.3)";case"Student":return"rgba(37, 99, 235, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,gk=p(qm)`
  background-color: ${n=>{switch(n.subscription){case"Free":return"#f9fafb";case"Pro":return"#eff6ff";case"Ultra":return"#faf5ff";default:return"#f9fafb"}}};
  color: ${n=>{switch(n.subscription){case"Free":return"#374151";case"Pro":return"#2563eb";case"Ultra":return"#7e5bef";default:return"#374151"}}};
  border-color: ${n=>{switch(n.subscription){case"Free":return"#e5e7eb";case"Pro":return"#bfdbfe";case"Ultra":return"#ddd6fe";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>{switch(n.subscription){case"Free":return"rgba(55, 65, 81, 0.5)";case"Pro":return"rgba(37, 99, 235, 0.2)";case"Ultra":return"rgba(139, 92, 246, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${n=>{switch(n.subscription){case"Free":return"#d1d5db";case"Pro":return"#93c5fd";case"Ultra":return"#c4b5fd";default:return"#d1d5db"}}};
    border-color: ${n=>{switch(n.subscription){case"Free":return"rgba(75, 85, 99, 0.5)";case"Pro":return"rgba(37, 99, 235, 0.3)";case"Ultra":return"rgba(139, 92, 246, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,bk=p(qm)`
  background-color: ${n=>{switch(n.status){case"Active":return"#ecfdf5";case"Blocked":return"#fef2f2";default:return"#f9fafb"}}};
  color: ${n=>{switch(n.status){case"Active":return"#047857";case"Blocked":return"#b91c1c";default:return"#374151"}}};
  border-color: ${n=>{switch(n.status){case"Active":return"#a7f3d0";case"Blocked":return"#fecaca";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>{switch(n.status){case"Active":return"rgba(16, 185, 129, 0.2)";case"Blocked":return"rgba(220, 38, 38, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${n=>{switch(n.status){case"Active":return"#86efac";case"Blocked":return"#fca5a5";default:return"#d1d5db"}}};
    border-color: ${n=>{switch(n.status){case"Active":return"rgba(16, 185, 129, 0.3)";case"Blocked":return"rgba(220, 38, 38, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,xk=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`,Qv=p.button`
  padding: 0.5rem;
  color: #6b7280;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${n=>n.hoverBg||"#f3f4f6"};
    color: ${n=>n.hoverColor||"#374151"};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    &:hover {
      background-color: ${n=>n.hoverBg||"#4b5563"};
      color: ${n=>n.hoverColor||"white"};
    }
  }
`;p(Qv)`
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
`;const vk=p.span`
  font-size: 0.875rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,yk=p.div`
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
`,jk=p.div`
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
`,wk=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,rl=p.button`
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  background-color: ${n=>n.active?"#2563eb":"white"};
  color: ${n=>n.active?"white":"#4b5563"};
  border: 1px solid ${n=>n.active?"#2563eb":"#e5e7eb"};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${n=>n.active?"#1d4ed8":"#f9fafb"};
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>n.active?"#2563eb":"#374151"};
    color: ${n=>n.active?"white":"#d1d5db"};
    border-color: ${n=>n.active?"#2563eb":"#4b5563"};

    &:hover {
      background-color: ${n=>n.active?"#1d4ed8":"#4b5563"};
    }
  }
`,Sk=p.div`
  padding: 3rem 1.5rem;
  text-align: center;
`,Ak=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,kk=p.div`
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
`,Ck=p.p`
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,Ek=p.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 1rem;

  @media (prefers-color-scheme: dark) {
    color: #6b7280;
  }
`,Tk=p.button`
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
`,Nk=p.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`,Mk=p.div`
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
`,Ea=p.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: ${n=>n.danger?"#dc2626":"#374151"};
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${n=>n.danger?"#fef2f2":"#f9fafb"};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${n=>n.danger?"#dc2626":"#6b7280"};
  }

  @media (prefers-color-scheme: dark) {
    color: ${n=>n.danger?"#f87171":"#e5e7eb"};

    &:hover {
      background-color: ${n=>n.danger?"rgba(220, 38, 38, 0.2)":"#374151"};
    }

    svg {
      color: ${n=>n.danger?"#f87171":"#9ca3af"};
    }
  }
`,_k=p.div`
  height: 1px;
  background-color: #f3f4f6;
  margin: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #4b5563;
  }
`,Rk=[{id:1,name:"John Doe",email:"john@example.com",role:"Student",subscription:"Pro",status:"Active"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"Admin",subscription:"Ultra",status:"Active"},{id:3,name:"Bob Wilson",email:"bob@example.com",role:"Manager",subscription:"Ultra",status:"Blocked"},{id:4,name:"Alice Brown",email:"alice@example.com",role:"Student",subscription:"Free",status:"Active"},{id:5,name:"Charlie Lee",email:"charlie@example.com",role:"Student",subscription:"Pro",status:"Active"},{id:6,name:"Anhupama N E",email:"anhupamane@gmail.com",role:"Super Admin",subscription:"Ultra",status:"Active"}],Dk=()=>{const n=Jt(),i=Pm(),s=Hm(U=>U.userReducer.users),[l,d]=C.useState([]),[u,h]=C.useState("All"),[g,b]=C.useState("All"),[m,v]=C.useState(""),[x,j]=C.useState(null),[S,w]=C.useState(null);C.useEffect(()=>{s.length===0&&i(Y7(Rk))},[i,s.length]),C.useEffect(()=>{d(s)},[s]),C.useEffect(()=>{let U=s;u!=="All"&&(U=U.filter(D=>D.role===u)),g!=="All"&&(U=U.filter(D=>D.status===g)),m&&(U=U.filter(D=>D.name.toLowerCase().includes(m.toLowerCase())||D.email.toLowerCase().includes(m.toLowerCase()))),d(U)},[s,u,g,m]);const N=U=>{h(U)},E=U=>{b(U)},A=()=>{h("All"),b("All"),v("")},M=U=>{switch(U){case"Super Admin":return r.jsx(Rl,{});case"Admin":return r.jsx(Tv,{});case"Manager":return r.jsx(Vn,{});case"Student":return r.jsx(wv,{});default:return r.jsx(br,{})}},T=U=>{switch(U){case"Free":return r.jsx(Fn,{});case"Pro":return r.jsx(Vn,{});case"Ultra":return r.jsx(nd,{});default:return r.jsx(m1,{})}},_=U=>{switch(U){case"Active":return r.jsx(ft,{});case"Blocked":return r.jsx(im,{});default:return r.jsx(Zt,{})}},R=(U,D)=>{U.preventDefault(),j({x:U.clientX,y:U.clientY,user:D}),w(D)},$=()=>{j(null),w(null)},L=()=>{alert(`Send message to ${S==null?void 0:S.name}`),$()},B=()=>{alert(`View analytics for ${S==null?void 0:S.name}`),$()},q=U=>{n(`/edit-profile/${U}`),$()},ne=U=>{const D=["#3b82f6","#8b5cf6","#10b981","#f59e0b","#ef4444","#06b6d4"],J=U.length%D.length;return D[J]};return r.jsxs(r.Fragment,{children:[r.jsx(V7,{}),r.jsxs(G7,{children:[r.jsx(I7,{children:r.jsxs(X7,{children:[r.jsx(Z7,{children:r.jsxs(J7,{children:[r.jsx("h1",{children:"User Management"}),r.jsx("p",{children:"Manage all platform users and their roles effectively."})]})}),r.jsx(W7,{children:r.jsxs(ek,{children:[r.jsxs(tk,{children:[r.jsxs(rk,{children:[r.jsx(cn,{}),r.jsx(nk,{type:"text",value:m,onChange:U=>v(U.target.value),placeholder:"Search users by name or email..."})]}),r.jsxs(U1,{children:[r.jsx(vr,{}),r.jsxs(K1,{value:u,onChange:U=>N(U.target.value),children:[r.jsx("option",{value:"All",children:"All Roles"}),r.jsx("option",{value:"Super Admin",children:"Super Admin"}),r.jsx("option",{value:"Admin",children:"Admin"}),r.jsx("option",{value:"Manager",children:"Manager"}),r.jsx("option",{value:"Student",children:"Student"})]}),r.jsx(et,{})]}),r.jsxs(U1,{children:[r.jsx(m1,{}),r.jsxs(K1,{value:g,onChange:U=>E(U.target.value),children:[r.jsx("option",{value:"All",children:"All Status"}),r.jsx("option",{value:"Active",children:"Active"}),r.jsx("option",{value:"Blocked",children:"Blocked"})]}),r.jsx(et,{})]}),(u!=="All"||g!=="All"||m)&&r.jsxs(Fv,{onClick:A,children:[r.jsx(Me,{}),"Clear"]}),r.jsxs(ok,{children:[r.jsx(on,{}),"Export"]})]}),r.jsxs(ak,{children:[r.jsxs(Nh,{children:[r.jsx(Mh,{bg:"#eff6ff",color:"#2563eb",children:r.jsx(br,{})}),r.jsxs(_h,{children:[r.jsx(Rh,{children:"Total Users"}),r.jsx(Dh,{children:l.length})]})]}),r.jsxs(Nh,{children:[r.jsx(Mh,{bg:"#ecfdf5",color:"#10b981",children:r.jsx(ft,{})}),r.jsxs(_h,{children:[r.jsx(Rh,{children:"Active Users"}),r.jsx(Dh,{children:l.filter(U=>U.status==="Active").length})]})]}),r.jsxs(Nh,{children:[r.jsx(Mh,{bg:"#fef3c7",color:"#f59e0b",children:r.jsx(nd,{})}),r.jsxs(_h,{children:[r.jsx(Rh,{children:"Ultra Subscribers"}),r.jsx(Dh,{children:l.filter(U=>U.subscription==="Ultra").length})]})]})]})]})}),r.jsxs(ik,{children:[r.jsx(lk,{children:r.jsxs(sk,{children:[r.jsx(ck,{children:r.jsxs("tr",{children:[r.jsx(Ca,{width:"30%",children:"User"}),r.jsx(Ca,{width:"15%",children:"Role"}),r.jsx(Ca,{width:"15%",children:"Subscription"}),r.jsx(Ca,{width:"12%",children:"Status"}),r.jsx(Ca,{width:"15%",children:"Last Active"}),r.jsx(Ca,{width:"13%",style:{textAlign:"right"},children:"Actions"})]})}),r.jsx(dk,{children:l.length>0?l.map(U=>r.jsxs(fm,{onContextMenu:D=>R(D,U),children:[r.jsx(xo,{children:r.jsxs(uk,{children:[r.jsx(fk,{bg:ne(U.name),children:U.name.split(" ").map(D=>D[0]).join("").slice(0,2).toUpperCase()}),r.jsxs("div",{children:[r.jsx(hk,{children:U.name}),r.jsxs(mk,{children:[r.jsx(od,{}),U.email]})]})]})}),r.jsx(xo,{children:r.jsxs(pk,{role:U.role,children:[M(U.role),U.role]})}),r.jsx(xo,{children:r.jsxs(gk,{subscription:U.subscription,children:[T(U.subscription),U.subscription]})}),r.jsx(xo,{children:r.jsxs(bk,{status:U.status,children:[_(U.status),U.status]})}),r.jsx(xo,{children:r.jsx(vk,{children:"Just now"})}),r.jsx(xo,{children:r.jsx(xk,{children:r.jsx(Qv,{onClick:D=>R(D,U),title:"More options",children:r.jsx(zo,{})})})})]},U.id)):r.jsx("tr",{children:r.jsx(xo,{colSpan:"6",style:{padding:0},children:r.jsx(Sk,{children:r.jsxs(Ak,{children:[r.jsx(kk,{children:r.jsx(wd,{})}),r.jsx(Ck,{children:"No users found"}),r.jsx(Ek,{children:"Try adjusting your filters"}),r.jsx(Tk,{onClick:A,children:"Clear all filters"})]})})})})})]})}),r.jsxs(yk,{children:[r.jsxs(jk,{children:["Showing ",r.jsx("span",{children:l.length})," of"," ",r.jsx("span",{children:s.length})," users"]}),r.jsxs(wk,{children:[r.jsx(rl,{children:"Previous"}),r.jsx(rl,{active:!0,children:"1"}),r.jsx(rl,{children:"2"}),r.jsx(rl,{children:"3"}),r.jsx(rl,{children:"Next"})]})]})]})]})}),x&&S&&r.jsxs(r.Fragment,{children:[r.jsx(Nk,{onClick:$}),r.jsxs(Mk,{style:{left:x.x,top:x.y},children:[r.jsxs(Ea,{onClick:()=>q(S.id),children:[r.jsx(an,{}),"Edit User"]}),r.jsxs(Ea,{onClick:L,children:[r.jsx(Av,{}),"Send Message"]}),r.jsxs(Ea,{onClick:B,children:[r.jsx(vd,{}),"View Analytics"]}),r.jsxs(Ea,{children:[r.jsx(Ul,{}),"Duplicate"]}),r.jsxs(Ea,{children:[r.jsx(bd,{}),"Archive"]}),r.jsx(_k,{}),r.jsxs(Ea,{danger:!0,children:[r.jsx($o,{}),"Delete"]})]})]})]})]})},Ok=()=>{const{id:n}=Kx(),i=Jt(),s=Pm(),l=Hm(m=>m.userReducer.users),d=n?l.find(m=>m.id===parseInt(n)):null,[u,h]=C.useState({name:"",email:"",role:"",status:""});C.useEffect(()=>{d&&h({name:d.name,email:d.email,role:d.role,status:d.status})},[d]);const g=m=>{const{name:v,value:x}=m.target;h(j=>({...j,[v]:x}))},b=m=>{m.preventDefault();const v={...d,...u};s(qv(v)),i("/user-management")};return d?r.jsxs("div",{children:[r.jsx(Nv,{title:"User Details",description:"Edit user information."}),r.jsx("div",{className:"max-w-md mx-auto bg-card rounded-lg border shadow-sm p-6",children:r.jsxs("form",{onSubmit:b,children:[r.jsxs("div",{className:"mb-4",children:[r.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-muted-foreground mb-2",children:"Name"}),r.jsx("input",{type:"text",id:"name",name:"name",value:u.name,onChange:g,className:"w-full border rounded p-2",required:!0})]}),r.jsxs("div",{className:"mb-4",children:[r.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-muted-foreground mb-2",children:"Email"}),r.jsx("input",{type:"email",id:"email",name:"email",value:u.email,onChange:g,className:"w-full border rounded p-2",required:!0})]}),r.jsxs("div",{className:"mb-4",children:[r.jsx("label",{htmlFor:"role",className:"block text-sm font-medium text-muted-foreground mb-2",children:"Role"}),r.jsxs("select",{id:"role",name:"role",value:u.role,onChange:g,className:"w-full border rounded p-2",children:[r.jsx("option",{value:"Super Admin",children:"Super Admin"}),r.jsx("option",{value:"Admin",children:"Admin"}),r.jsx("option",{value:"Manager",children:"Manager"}),r.jsx("option",{value:"Student",children:"Student"})]})]}),r.jsxs("div",{className:"mb-4",children:[r.jsx("label",{htmlFor:"status",className:"block text-sm font-medium text-muted-foreground mb-2",children:"Status"}),r.jsxs("select",{id:"status",name:"status",value:u.status,onChange:g,className:"w-full border rounded p-2",children:[r.jsx("option",{value:"Active",children:"Active"}),r.jsx("option",{value:"Inactive",children:"Inactive"})]})]}),r.jsxs("div",{className:"flex justify-end space-x-2",children:[r.jsx("button",{type:"button",onClick:()=>i("/user-management"),className:"px-4 py-2 border rounded text-muted-foreground hover:bg-muted",children:"Cancel"}),r.jsx("button",{type:"submit",className:"px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90",children:"Save"})]})]})})]}):r.jsx("div",{children:"User not found"})},zk=sn`
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
  display: flex;
  height: 100vh;
  background-color: #f9fafb;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`,Bk=p.div`
  flex: 1;
  overflow: auto;
`,Uk=p.div`
  padding: 2rem;
`,Kk=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`,Lk=p.div`
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
`;const Pk=p.div`
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
`,sc=p.div`
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
`,cc=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`,dc=p.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,uc=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${n=>n.bg||"#eff6ff"};
  border-radius: 0.5rem;
  color: ${n=>n.color||"#2563eb"};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,fc=p.div`
  font-size: 1.875rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,hc=p.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: ${n=>n.positive?"#10b981":"#6b7280"};

  svg {
    width: 1rem;
    height: 1rem;
  }

  span {
    color: #6b7280;
    margin-left: 0.25rem;
  }

  @media (prefers-color-scheme: dark) {
    color: ${n=>n.positive?"#86efac":"#9ca3af"};
    
    span {
      color: #9ca3af;
    }
  }
`,Hk=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,qk=p.div`
  padding: 1.25rem;
`,Fk=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`,Qk=p.div`
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
`,Yk=p.input`
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
`,L1=p.div`
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
`,P1=p.select`
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
`,Yv=p.button`
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
`,Vk=p(Yv)`
  background-color: #2563eb;
  color: white;
  border-color: #2563eb;
  &:hover { 
    background-color: #1d4ed8;
    color: white; 
    }`,Gk=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,Ik=p.div`
  overflow-x: auto;
`,Xk=p.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
`,Zk=p.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-bottom-color: #4b5563;
  }
`,vo=p.th`
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
`,Jk=p.tbody``,hm=p.tr`
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
`,zn=p.td`
  padding: 1.25rem 1.5rem;
  font-size: 0.875rem;
  color: ${n=>n.color||"#4b5563"};

  @media (prefers-color-scheme: dark) {
    color: ${n=>n.color||"#d1d5db"};
  }
`,Wk=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,eC=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${n=>n.bg||"#f3f4f6"};
  border-radius: 0.5rem;
  color: ${n=>n.color||"#6b7280"};
  flex-shrink: 0;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>n.darkBg||"#374151"};
    color: ${n=>n.darkColor||"#9ca3af"};
  }
`,tC=p.div`
  font-weight: 600;
  color: #111827;
  transition: color 0.2s;
  margin-bottom: 0.25rem;
  font-family: monospace;

  ${hm}:hover & {
    color: #2563eb;
  }

  @media (prefers-color-scheme: dark) {
    color: white;

    ${hm}:hover & {
      color: #60a5fa;
    }
  }
`,rC=p.div`
  display: flex;
  flex-direction: column;
`,nC=p.div`
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,oC=p.div`
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
`,Vv=p.span`
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
`,aC=p(Vv)`
  background-color: ${n=>{switch(n.status){case"Completed":return"#ecfdf5";case"Pending":return"#fefce8";case"Failed":case"Refunded":return"#fef2f2";case"Processing":return"#eff6ff";default:return"#f9fafb"}}};
  color: ${n=>{switch(n.status){case"Completed":return"#047857";case"Pending":return"#b45309";case"Failed":case"Refunded":return"#b91c1c";case"Processing":return"#1e40af";default:return"#374151"}}};
  border-color: ${n=>{switch(n.status){case"Completed":return"#a7f3d0";case"Pending":return"#fde68a";case"Failed":case"Refunded":return"#fecaca";case"Processing":return"#bfdbfe";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>{switch(n.status){case"Completed":return"rgba(16, 185, 129, 0.2)";case"Pending":return"rgba(245, 158, 11, 0.2)";case"Failed":case"Refunded":return"rgba(220, 38, 38, 0.2)";case"Processing":return"rgba(37, 99, 235, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${n=>{switch(n.status){case"Completed":return"#86efac";case"Pending":return"#fcd34d";case"Failed":case"Refunded":return"#fca5a5";case"Processing":return"#93c5fd";default:return"#d1d5db"}}};
    border-color: ${n=>{switch(n.status){case"Completed":return"rgba(16, 185, 129, 0.3)";case"Pending":return"rgba(245, 158, 11, 0.3)";case"Failed":case"Refunded":return"rgba(220, 38, 38, 0.3)";case"Processing":return"rgba(37, 99, 235, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,iC=p(Vv)`
  background-color: #f9fafb;
  color: #111827;
  border-color: #e5e7eb;
  font-weight: 600;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: white;
    border-color: rgba(75, 85, 99, 0.5);
  }
`,lC=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`,Gv=p.button`
  padding: 0.5rem;
  color: #6b7280;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${n=>n.hoverBg||"#f3f4f6"};
    color: ${n=>n.hoverColor||"#374151"};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    &:hover {
      background-color: ${n=>n.hoverBg||"#4b5563"};
      color: ${n=>n.hoverColor||"white"};
    }
  }
`,sC=p(Gv)`
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
`,cC=p.div`
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
`,dC=p.div`
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
`,uC=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,nl=p.button`
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  background-color: ${n=>n.active?"#2563eb":"white"};
  color: ${n=>n.active?"white":"#4b5563"};
  border: 1px solid ${n=>n.active?"#2563eb":"#e5e7eb"};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${n=>n.active?"#1d4ed8":"#f9fafb"};
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>n.active?"#2563eb":"#374151"};
    color: ${n=>n.active?"white":"#d1d5db"};
    border-color: ${n=>n.active?"#2563eb":"#4b5563"};

    &:hover {
      background-color: ${n=>n.active?"#1d4ed8":"#4b5563"};
    }
  }
`,fC=p.div`
  padding: 3rem 1.5rem;
  text-align: center;
`,hC=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,mC=p.div`
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
`,pC=p.p`
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,gC=p.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 1rem;

  @media (prefers-color-scheme: dark) {
    color: #6b7280;
  }
`,bC=p.button`
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
`,xC=p.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`,vC=p.div`
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
`,Ta=p.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: ${n=>n.danger?"#dc2626":"#374151"};
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${n=>n.danger?"#fef2f2":"#f9fafb"};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${n=>n.danger?"#dc2626":"#6b7280"};
  }

  @media (prefers-color-scheme: dark) {
    color: ${n=>n.danger?"#f87171":"#e5e7eb"};

    &:hover {
      background-color: ${n=>n.danger?"rgba(220, 38, 38, 0.2)":"#374151"};
    }

    svg {
      color: ${n=>n.danger?"#f87171":"#9ca3af"};
    }
  }
`,yC=p.div`
  height: 1px;
  background-color: #f3f4f6;
  margin: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #4b5563;
  }
`,jC=n=>{switch(n){case"Completed":return r.jsx(ft,{});case"Pending":return r.jsx(Zt,{});case"Failed":return r.jsx(Me,{});case"Refunded":return r.jsx(kv,{});case"Processing":return r.jsx(_o,{});default:return r.jsx(jv,{})}},wC=n=>{const i=[{bg:"#eff6ff",color:"#2563eb",darkBg:"rgba(37, 99, 235, 0.2)",darkColor:"#60a5fa"},{bg:"#fef3c7",color:"#d97706",darkBg:"rgba(245, 158, 11, 0.2)",darkColor:"#fbbf24"},{bg:"#ecfdf5",color:"#059669",darkBg:"rgba(16, 185, 129, 0.2)",darkColor:"#34d399"},{bg:"#f3e8ff",color:"#9333ea",darkBg:"rgba(147, 51, 234, 0.2)",darkColor:"#c084fc"}],s=(n==null?void 0:n.length)%i.length||0;return i[s]},SC=n=>new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),AC=[{id:"PAY-001",user:"John Doe",email:"john.doe@example.com",amount:250,date:"2026-02-10",status:"Completed",method:"Credit Card",invoice:"INV-2026-001"},{id:"PAY-002",user:"Jane Smith",email:"jane.smith@example.com",amount:180,date:"2026-02-09",status:"Completed",method:"PayPal",invoice:"INV-2026-002"},{id:"PAY-003",user:"Bob Wilson",email:"bob.wilson@example.com",amount:320,date:"2026-02-08",status:"Pending",method:"Credit Card",invoice:"INV-2026-003"},{id:"PAY-004",user:"Alice Brown",email:"alice.brown@example.com",amount:150,date:"2026-02-07",status:"Failed",method:"Debit Card",invoice:"INV-2026-004"},{id:"PAY-005",user:"Charlie Lee",email:"charlie.lee@example.com",amount:425.5,date:"2026-02-06",status:"Completed",method:"Credit Card",invoice:"INV-2026-005"},{id:"PAY-006",user:"Diana Prince",email:"diana.prince@example.com",amount:89.99,date:"2026-02-05",status:"Processing",method:"PayPal",invoice:"INV-2026-006"},{id:"PAY-007",user:"Bruce Wayne",email:"bruce.wayne@example.com",amount:599.99,date:"2026-02-04",status:"Refunded",method:"Credit Card",invoice:"INV-2026-007"}],kC=()=>{const n=Jt(),[i,s]=C.useState([]),[l,d]=C.useState([]),[u,h]=C.useState(""),[g,b]=C.useState("All"),[m,v]=C.useState("All"),[x,j]=C.useState(null),[S,w]=C.useState(null);C.useEffect(()=>{s(AC)},[]),C.useEffect(()=>{let L=i;if(g!=="All"&&(L=L.filter(B=>B.status===g)),m!=="All"){const B=new Date,q=new Date(B.setHours(0,0,0,0)),ne=new Date(q);ne.setDate(ne.getDate()-7);const U=new Date(q);U.setMonth(U.getMonth()-1),L=L.filter(D=>{const J=new Date(D.date);switch(m){case"Today":return J>=q;case"This Week":return J>=ne;case"This Month":return J>=U;default:return!0}})}if(u){const B=u.toLowerCase();L=L.filter(q=>q.id.toLowerCase().includes(B)||q.user.toLowerCase().includes(B)||q.email.toLowerCase().includes(B)||q.invoice.toLowerCase().includes(B))}d(L)},[i,g,m,u]);const N=(L,B)=>{L.preventDefault(),j({x:L.clientX,y:L.clientY}),w(B)},E=()=>{j(null),w(null)},A=()=>{b("All"),v("All"),h("")},M=l.reduce((L,B)=>B.status==="Completed"?L+B.amount:L,0),T=l.length,_=l.filter(L=>L.status==="Completed").length,R=l.filter(L=>L.status==="Pending").length,$=T>0?(_/T*100).toFixed(1):0;return r.jsxs(r.Fragment,{children:[r.jsx(zk,{}),r.jsxs($k,{children:[r.jsx(Bk,{children:r.jsxs(Uk,{children:[r.jsx(Kk,{children:r.jsxs(Lk,{children:[r.jsx("h1",{children:"Payment Management"}),r.jsx("p",{children:"Track and manage all payment transactions"})]})}),r.jsxs(Pk,{children:[r.jsxs(sc,{children:[r.jsxs(cc,{children:[r.jsx(dc,{children:"Total Revenue"}),r.jsx(uc,{bg:"#eff6ff",color:"#2563eb",children:r.jsx(sm,{})})]}),r.jsxs(fc,{children:["₹ ",M.toLocaleString()]}),r.jsxs(hc,{positive:!0,children:[r.jsx(fh,{}),"+8.2%",r.jsx("span",{children:"vs last month"})]})]}),r.jsxs(sc,{children:[r.jsxs(cc,{children:[r.jsx(dc,{children:"Transactions"}),r.jsx(uc,{bg:"#ecfdf5",color:"#10b981",children:r.jsx(lm,{})})]}),r.jsx(fc,{children:T}),r.jsxs(hc,{positive:!0,children:[r.jsx(fh,{}),"+15",r.jsx("span",{children:"this week"})]})]}),r.jsxs(sc,{children:[r.jsxs(cc,{children:[r.jsx(dc,{children:"Success Rate"}),r.jsx(uc,{bg:"#fef3c7",color:"#f59e0b",children:r.jsx(ft,{})})]}),r.jsxs(fc,{children:[$,"%"]}),r.jsxs(hc,{positive:$>=70,children:[$>=70?r.jsx(fh,{}):r.jsx(Xw,{}),$>=70?"+2.5%":"-1.2%",r.jsx("span",{children:"completion"})]})]}),r.jsxs(sc,{children:[r.jsxs(cc,{children:[r.jsx(dc,{children:"Pending"}),r.jsx(uc,{bg:"#fef2f2",color:"#ef4444",children:r.jsx(Zt,{})})]}),r.jsx(fc,{children:R}),r.jsx(hc,{children:r.jsx("span",{children:"Awaiting processing"})})]})]}),r.jsx(Hk,{children:r.jsx(qk,{children:r.jsxs(Fk,{children:[r.jsxs(Qk,{children:[r.jsx(cn,{}),r.jsx(Yk,{type:"text",value:u,onChange:L=>h(L.target.value),placeholder:"Search by ID, user, email, or invoice..."})]}),r.jsxs(L1,{children:[r.jsx(vr,{}),r.jsxs(P1,{value:g,onChange:L=>b(L.target.value),children:[r.jsx("option",{value:"All",children:"All Status"}),r.jsx("option",{value:"Completed",children:"Completed"}),r.jsx("option",{value:"Pending",children:"Pending"}),r.jsx("option",{value:"Processing",children:"Processing"}),r.jsx("option",{value:"Failed",children:"Failed"}),r.jsx("option",{value:"Refunded",children:"Refunded"})]}),r.jsx(et,{})]}),r.jsxs(L1,{children:[r.jsx(am,{}),r.jsxs(P1,{value:m,onChange:L=>v(L.target.value),children:[r.jsx("option",{value:"All",children:"All Time"}),r.jsx("option",{value:"Today",children:"Today"}),r.jsx("option",{value:"This Week",children:"This Week"}),r.jsx("option",{value:"This Month",children:"This Month"})]}),r.jsx(et,{})]}),(g!=="All"||m!=="All"||u)&&r.jsxs(Yv,{onClick:A,children:[r.jsx(Me,{}),"Clear"]}),r.jsxs(Vk,{children:[r.jsx(on,{}),"Export"]})]})})}),r.jsxs(Gk,{children:[r.jsx(Ik,{children:r.jsxs(Xk,{children:[r.jsx(Zk,{children:r.jsxs("tr",{children:[r.jsx(vo,{width:"15%",children:"Invoice ID"}),r.jsx(vo,{width:"20%",children:"Customer"}),r.jsx(vo,{width:"12%",children:"Amount"}),r.jsx(vo,{width:"12%",children:"Date"}),r.jsx(vo,{width:"12%",children:"Method"}),r.jsx(vo,{width:"12%",children:"Status"}),r.jsx(vo,{width:"17%",style:{textAlign:"right"},children:"Actions"})]})}),r.jsx(Jk,{children:l.length>0?l.map(L=>{const B=wC(L.id);return r.jsxs(hm,{onContextMenu:q=>N(q,L),children:[r.jsx(zn,{children:r.jsxs(Wk,{children:[r.jsx(eC,{bg:B.bg,color:B.color,darkBg:B.darkBg,darkColor:B.darkColor,children:r.jsx(p1,{})}),r.jsxs("div",{children:[r.jsx(tC,{children:L.id}),r.jsx("div",{style:{fontSize:"0.75rem",color:"#6b7280",...window.matchMedia("(prefers-color-scheme: dark)").matches&&{color:"#9ca3af"}},children:L.invoice})]})]})}),r.jsx(zn,{children:r.jsxs(rC,{children:[r.jsx(nC,{children:L.user}),r.jsxs(oC,{children:[r.jsx(od,{}),L.email]})]})}),r.jsx(zn,{children:r.jsxs(iC,{children:["₹ ",L.amount.toFixed(2)]})}),r.jsx(zn,{children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"#6b7280",...window.matchMedia("(prefers-color-scheme: dark)").matches&&{color:"#9ca3af"}},children:[r.jsx(am,{style:{width:"0.875rem",height:"0.875rem"}}),SC(L.date)]})}),r.jsx(zn,{children:r.jsx("span",{style:{fontSize:"0.875rem",color:"#4b5563",...window.matchMedia("(prefers-color-scheme: dark)").matches&&{color:"#d1d5db"}},children:L.method})}),r.jsx(zn,{children:r.jsxs(aC,{status:L.status,children:[jC(L.status),L.status]})}),r.jsx(zn,{children:r.jsxs(lC,{children:[r.jsx(sC,{onClick:()=>n(`/payments/${L.id}`),title:"View details",children:r.jsx(Ct,{})}),r.jsx(Gv,{onClick:q=>N(q,L),title:"More options",children:r.jsx(zo,{})})]})})]},L.id)}):r.jsx("tr",{children:r.jsx(zn,{colSpan:"7",style:{padding:0},children:r.jsx(fC,{children:r.jsxs(hC,{children:[r.jsx(mC,{children:r.jsx(wd,{})}),r.jsx(pC,{children:"No transactions found"}),r.jsx(gC,{children:"Try adjusting your filters or create a new invoice"}),r.jsx(bC,{onClick:A,children:"Clear all filters"})]})})})})})]})}),r.jsxs(cC,{children:[r.jsxs(dC,{children:["Showing ",r.jsx("span",{children:l.length})," of"," ",r.jsx("span",{children:i.length})," transactions"]}),r.jsxs(uC,{children:[r.jsx(nl,{children:"Previous"}),r.jsx(nl,{active:!0,children:"1"}),r.jsx(nl,{children:"2"}),r.jsx(nl,{children:"3"}),r.jsx(nl,{children:"Next"})]})]})]})]})}),x&&S&&r.jsxs(r.Fragment,{children:[r.jsx(xC,{onClick:E}),r.jsxs(vC,{style:{left:x.x,top:x.y},children:[r.jsxs(Ta,{onClick:()=>n(`/payments/${S.id}`),children:[r.jsx(Ct,{}),"View Details"]}),r.jsxs(Ta,{children:[r.jsx(p1,{}),"View Invoice"]}),r.jsxs(Ta,{children:[r.jsx(GS,{}),"Print Receipt"]}),r.jsxs(Ta,{children:[r.jsx(od,{}),"Email Receipt"]}),r.jsx(yC,{}),r.jsxs(Ta,{children:[r.jsx(kv,{}),"Process Refund"]}),r.jsxs(Ta,{danger:!0,children:[r.jsx(rS,{}),"Cancel Payment"]})]})]})]})]})},CC=sn`
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
`,EC=p.div`
  display: flex;
  height: 100vh;
  background-color: #f9fafb;
`,TC=p.div`
  flex: 1;
  overflow: auto;
`,NC=p.div`
  padding: 2rem;
`,MC=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`,_C=p.div`
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
`,RC=p.button`
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
`,DC=p.div`
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
`,ol=p.div`
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
`,al=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${n=>n.bg||"#eff6ff"};
  border-radius: 0.5rem;
  color: ${n=>n.color||"#2563eb"};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,il=p.div`
  flex: 1;
`,ll=p.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,sl=p.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,OC=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
`,zC=p.div`
  padding: 1.25rem;
`,$C=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`,BC=p.div`
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
`,UC=p.input`
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
`,H1=p.div`
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
`,q1=p.select`
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
`,Iv=p.button`
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
`,KC=p(Iv)`
  background-color: #2563eb;  
  color: white;
  border-color: #2563eb;
  &:hover {
    background-color: #2455ddd3;
    color: white;
    }`,LC=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
`,PC=p.div`
  overflow-x: auto;
`,HC=p.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
`,qC=p.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
`,Zr=p.th`
  text-align: left;
  padding: 1rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: ${n=>n.width||"auto"};
`,FC=p.tbody``,Xv=p.tr`
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(249, 250, 251, 0.8);
  }

  &:last-child {
    border-bottom: none;
  }
`,Mr=p.td`
  padding: 1.25rem 1.5rem;
  font-size: 0.875rem;
  color: ${n=>n.color||"#4b5563"};
`,QC=p.div`
  font-weight: 500;
  color: #111827;
  transition: color 0.2s;

  ${Xv}:hover & {
    color: #2563eb;
  }
`,Zv=p.span`
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
`,F1=p(Zv)`
  background-color: ${n=>{switch(n.status){case"Published":return"#ecfdf5";case"Draft":return"#f9fafb";case"Pending":return"#fefce8";default:return"#f9fafb"}}};
  color: ${n=>{switch(n.status){case"Published":return"#047857";case"Draft":return"#374151";case"Pending":return"#b45309";default:return"#374151"}}};
  border-color: ${n=>{switch(n.status){case"Published":return"#a7f3d0";case"Draft":return"#e5e7eb";case"Pending":return"#fde68a";default:return"#e5e7eb"}}};
`,YC=p(Zv)`
  background-color: ${n=>n.paid==="Free"?"#f9fafb":"#eff6ff"};
  color: ${n=>n.paid==="Free"?"#374151":"#1e40af"};
  border-color: ${n=>n.paid==="Free"?"#e5e7eb":"#bfdbfe"};
`,Jv=p.button`
  padding: 0.5rem;
  color: #6b7280;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${n=>n.hoverColor||"#f3f4f6"};
    color: ${n=>n.hoverTextColor||"#374151"};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;p(Jv)`
  &:hover {
    background-color: #eff6ff;
    color: #2563eb;
  }
`;const VC=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`,GC=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;
`,IC=p.div`
  font-size: 0.875rem;
  color: #6b7280;

  span {
    font-weight: 500;
    color: #111827;
  }
`,XC=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,cl=p.button`
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  background-color: ${n=>n.active?"#2563eb":"white"};
  color: ${n=>n.active?"white":"#4b5563"};
  border: 1px solid ${n=>n.active?"#2563eb":"#e5e7eb"};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${n=>n.active?"#1d4ed8":"#f9fafb"};
  }
`,ZC=p.div`
  padding: 3rem 1.5rem;
  text-align: center;
`,JC=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,WC=p.div`
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
`,e4=p.p`
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 0.25rem;
`,t4=p.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 1rem;
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
`,n4=p.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`,o4=p.div`
  position: fixed;
  z-index: 50;
  width: 14rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 0.375rem 0;
`,dl=p.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: ${n=>n.danger?"#dc2626":"#374151"};
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${n=>n.danger?"#fef2f2":"#f9fafb"};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${n=>n.danger?"#dc2626":"#6b7280"};
  }
`,a4=p.div`
  height: 1px;
  background-color: #f3f4f6;
  margin: 0.375rem 0;
`,i4=p.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60;
`,l4=p.div`
  background: white;
  width: 90%;
  max-width: 800px;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
`,s4=p.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #e5e7eb;
`,c4=p.h3`
  margin:0;
  font-size:1.125rem;
  font-weight:600;
  color:#111827;
`,d4=p.div`
  padding: 1rem 1.25rem;
`,_r=p.div`
  margin-bottom: 0.75rem;
`,Rr=p.label`
  display:block;
  font-size:0.875rem;
  color:#374151;
  margin-bottom:0.375rem;
`,Na=p.input`
  width:100%;
  padding:0.5rem 0.75rem;
  border:1px solid #e5e7eb;
  border-radius:0.5rem;
`,mc=p.select`
  width:100%;
  padding:0.5rem 0.75rem;
  border:1px solid #e5e7eb;
  border-radius:0.5rem;
`,u4=p.div`
  display:flex;
  gap:0.5rem;
  justify-content:flex-end;
  padding:0.75rem 1.25rem;
  border-top:1px solid #e5e7eb;
`,f4=p.button`
  padding:0.5rem 0.875rem;
  background:#2563eb;
  color:white;
  border:none;
  border-radius:0.5rem;
  cursor:pointer;
`,h4=p.button`
  padding:0.5rem 0.875rem;
  background:white;
  border:1px solid #e5e7eb;
  color:#374151;
  border-radius:0.5rem;
  cursor:pointer;
`,m4=[{id:1,title:"Module 1 – Intro to Arrays",subject:"DSA",chapter:"Ch 1",test:"Linked",questions:"Set A",points:20,paid:"Free",status:"Published"},{id:2,title:"Module 2 – Linked Lists",subject:"DSA",chapter:"Ch 1",test:"Linked",questions:"Set B",points:25,paid:"Paid",status:"Published"},{id:3,title:"Module 1 – Classes & Objects",subject:"OOP",chapter:"Ch 1",test:"None",questions:"-",points:0,paid:"Free",status:"Draft"},{id:4,title:"Module 3 – SQL Queries",subject:"DBMS",chapter:"Ch 2",test:"Linked",questions:"Set C",points:30,paid:"Paid",status:"Published"},{id:5,title:"Module 1 – OSI Model",subject:"CN",chapter:"Ch 1",test:"Linked",questions:"Set A",points:15,paid:"Free",status:"Pending"}],p4=()=>{const n=Jt(),[i,s]=C.useState([]),[l,d]=C.useState([]),[u,h]=C.useState(""),[g,b]=C.useState("All"),[m,v]=C.useState("All"),[x,j]=C.useState(null),[S,w]=C.useState(null),[N,E]=C.useState(!1),[A,M]=C.useState({title:"",subject:"DSA",chapter:"",test:"",questions:"",points:"",paid:"Free",status:"Published",semester:"Sem 1",file:null});C.useEffect(()=>{s(m4)},[]),C.useEffect(()=>{let I=i;if(g!=="All"&&(I=I.filter(Y=>Y.subject===g)),m!=="All"&&(I=I.filter(Y=>Y.status===m)),u){const Y=u.toLowerCase();I=I.filter(le=>le.title.toLowerCase().includes(Y)||le.subject.toLowerCase().includes(Y)||le.chapter.toLowerCase().includes(Y))}d(I)},[i,g,m,u]);const T=(I,Y)=>{I.preventDefault(),j({x:I.clientX,y:I.clientY}),w(Y)},_=()=>{j(null),w(null)},R=I=>{n(`/modules/${I}/edit`),_()},$=()=>{M({title:"",subject:"DSA",chapter:"",test:"",questions:"",points:"",paid:"Free",status:"Published",semester:"Sem 1",file:null}),E(!0)},L=()=>E(!1),B=I=>{const{name:Y,value:le}=I.target;M(z=>({...z,[Y]:le}))},q=I=>{const Y=I.target.files&&I.target.files[0];M(le=>({...le,file:Y}))},ne=()=>{const I={id:Date.now(),title:A.title||(A.file?A.file.name:"Untitled Module"),subject:A.subject,chapter:A.chapter,test:A.test||"None",questions:A.questions||"-",points:A.points?Number(A.points):0,paid:A.paid,status:A.status,semester:A.semester};s(Y=>[I,...Y]),E(!1)},U=()=>{b("All"),v("All"),h("")},D=i.length,J=i.filter(I=>I.test==="Linked").length,se=i.filter(I=>I.status==="Published").length,de=i.filter(I=>I.status==="Draft").length,V=i.filter(I=>I.status==="Pending").length;return r.jsxs(r.Fragment,{children:[r.jsx(CC,{}),r.jsxs(EC,{children:[r.jsx(TC,{children:r.jsxs(NC,{children:[r.jsxs(MC,{children:[r.jsxs(_C,{children:[r.jsx("h1",{children:"Modules & Tests"}),r.jsx("p",{children:"Manage modules and linked tests."})]}),r.jsxs(RC,{onClick:$,children:[r.jsx(at,{}),"Upload Module "]})]}),r.jsx(OC,{children:r.jsxs(zC,{children:[r.jsxs($C,{children:[r.jsxs(BC,{children:[r.jsx(cn,{}),r.jsx(UC,{type:"text",value:u,onChange:I=>h(I.target.value),placeholder:"Search modules..."})]}),r.jsxs(H1,{children:[r.jsx(vr,{}),r.jsxs(q1,{value:g,onChange:I=>b(I.target.value),children:[r.jsx("option",{value:"All",children:"All Subjects"}),r.jsx("option",{value:"DSA",children:"DSA"}),r.jsx("option",{value:"OOP",children:"OOP"}),r.jsx("option",{value:"DBMS",children:"DBMS"}),r.jsx("option",{value:"CN",children:"CN"})]}),r.jsx(et,{})]}),r.jsxs(H1,{children:[r.jsx(vr,{}),r.jsxs(q1,{value:m,onChange:I=>v(I.target.value),children:[r.jsx("option",{value:"All",children:"All Status"}),r.jsx("option",{value:"Published",children:"Published"}),r.jsx("option",{value:"Draft",children:"Draft"}),r.jsx("option",{value:"Pending",children:"Pending"})]}),r.jsx(et,{})]}),(g!=="All"||m!=="All"||u)&&r.jsxs(Iv,{onClick:U,children:[r.jsx(Me,{}),"Clear"]}),r.jsxs(KC,{children:[r.jsx(on,{}),"Export"]})]}),r.jsxs(DC,{children:[r.jsxs(ol,{children:[r.jsx(al,{bg:"#eff6ff",color:"#2563eb",children:r.jsx(Et,{})}),r.jsxs(il,{children:[r.jsx(ll,{children:"Total Documents"}),r.jsx(sl,{children:D})]})]}),r.jsxs(ol,{children:[r.jsx(al,{bg:"#eff6ff",color:"#684bb4",children:r.jsx(Et,{})}),r.jsxs(il,{children:[r.jsx(ll,{children:"Total Tests"}),r.jsx(sl,{children:J})]})]}),r.jsxs(ol,{children:[r.jsx(al,{bg:"#eff6ff",color:"#25eb28",children:r.jsx(ft,{})}),r.jsxs(il,{children:[r.jsx(ll,{children:"Published Tests"}),r.jsx(sl,{children:se})]})]}),r.jsxs(ol,{children:[r.jsx(al,{bg:"#eff6ff",color:"#575759",children:r.jsx(Et,{})}),r.jsxs(il,{children:[r.jsx(ll,{children:"Draft Tests"}),r.jsx(sl,{children:de})]})]}),r.jsxs(ol,{children:[r.jsx(al,{bg:"#eff6ff",color:"#ebac25",children:r.jsx(Zt,{})}),r.jsxs(il,{children:[r.jsx(ll,{children:"Pending Tests"}),r.jsx(sl,{children:V})]})]})]})]})}),r.jsxs(LC,{children:[r.jsx(PC,{children:r.jsxs(HC,{children:[r.jsx(qC,{children:r.jsxs("tr",{children:[r.jsx(Zr,{width:"25%",children:"Module"}),r.jsx(Zr,{width:"8.33%",children:"Subject"}),r.jsx(Zr,{width:"8.33%",children:"Chapter"}),r.jsx(Zr,{width:"8.33%",children:"Test"}),r.jsx(Zr,{width:"8.33%",children:"Questions"}),r.jsx(Zr,{width:"8.33%",children:"Points"}),r.jsx(Zr,{width:"8.33%",children:"Paid"}),r.jsx(Zr,{width:"8.33%",children:"Status"}),r.jsx(Zr,{width:"8.33%",style:{textAlign:"right"},children:"Actions"})]})}),r.jsx(FC,{children:l.length>0?l.map(I=>r.jsxs(Xv,{onContextMenu:Y=>T(Y,I),children:[r.jsx(Mr,{children:r.jsx(QC,{children:I.title})}),r.jsx(Mr,{children:I.subject}),r.jsx(Mr,{children:I.chapter}),r.jsx(Mr,{children:I.test==="Linked"?r.jsxs(F1,{status:"Published",children:[r.jsx(ft,{}),"Linked"]}):r.jsx("span",{style:{color:"#9ca3af"},children:"—"})}),r.jsx(Mr,{children:I.questions!=="-"?r.jsx("span",{style:{color:"#111827"},children:I.questions}):r.jsx("span",{style:{color:"#9ca3af"},children:"—"})}),r.jsx(Mr,{style:{color:"#111827"},children:I.points}),r.jsx(Mr,{children:r.jsxs(YC,{paid:I.paid,children:[I.paid==="Paid"," ",I.paid]})}),r.jsx(Mr,{children:r.jsxs(F1,{status:I.status,children:[I.status==="Published"&&r.jsx(ft,{}),I.status==="Draft"&&r.jsx(Ct,{}),I.status==="Pending"&&r.jsx(Zt,{}),I.status]})}),r.jsx(Mr,{children:r.jsx(VC,{children:r.jsx(Jv,{onClick:Y=>T(Y,I),title:"More options",children:r.jsx(zo,{})})})})]},I.id)):r.jsx("tr",{children:r.jsx(Mr,{colSpan:"9",style:{padding:0},children:r.jsx(ZC,{children:r.jsxs(JC,{children:[r.jsx(WC,{children:r.jsx(wd,{})}),r.jsx(e4,{children:"No modules found"}),r.jsx(t4,{children:"Try adjusting your filters"}),r.jsx(r4,{onClick:U,children:"Clear all filters"})]})})})})})]})}),r.jsxs(GC,{children:[r.jsxs(IC,{children:["Showing ",r.jsx("span",{children:l.length})," of"," ",r.jsx("span",{children:i.length})," modules"]}),r.jsxs(XC,{children:[r.jsx(cl,{children:"Previous"}),r.jsx(cl,{active:!0,children:"1"}),r.jsx(cl,{children:"2"}),r.jsx(cl,{children:"3"}),r.jsx(cl,{children:"Next"})]})]})]})]})}),x&&S&&r.jsxs(r.Fragment,{children:[r.jsx(n4,{onClick:_}),r.jsxs(o4,{style:{left:x.x,top:x.y},children:[r.jsxs(dl,{onClick:()=>R(S.id),children:[r.jsx(an,{}),"Edit Module"]}),r.jsxs(dl,{onClick:()=>{var I;(I=navigator.clipboard)==null||I.writeText(window.location.origin+`/modules/${S.id}`),_()},children:[r.jsx(Sv,{}),"Copy Link"]}),r.jsxs(dl,{children:[r.jsx(Ul,{}),"Duplicate"]}),r.jsxs(dl,{children:[r.jsx(bd,{}),"Archive"]}),r.jsx(a4,{}),r.jsxs(dl,{danger:!0,children:[r.jsx($o,{}),"Delete"]})]})]}),N&&r.jsx(i4,{onClick:L,children:r.jsxs(l4,{onClick:I=>I.stopPropagation(),children:[r.jsxs(s4,{children:[r.jsx(c4,{children:"Upload Module / Test"}),r.jsx("button",{onClick:L,style:{background:"none",border:"none",cursor:"pointer"},children:r.jsx(Me,{})})]}),r.jsx(d4,{children:r.jsxs("div",{style:{display:"grid",gap:"0.75rem",gridTemplateColumns:"1fr 1fr"},children:[r.jsxs(_r,{style:{gridColumn:"1 / span 2"},children:[r.jsx(Rr,{children:"Title"}),r.jsx(Na,{name:"title",value:A.title,onChange:B,placeholder:"Module title"})]}),r.jsxs(_r,{children:[r.jsx(Rr,{children:"Subject"}),r.jsxs(mc,{name:"subject",value:A.subject,onChange:B,children:[r.jsx("option",{children:"DSA"}),r.jsx("option",{children:"OOP"}),r.jsx("option",{children:"DBMS"}),r.jsx("option",{children:"CN"})]})]}),r.jsxs(_r,{children:[r.jsx(Rr,{children:"Semester"}),r.jsxs(mc,{name:"semester",value:A.semester,onChange:B,children:[r.jsx("option",{children:"Sem 1"}),r.jsx("option",{children:"Sem 2"})]})]}),r.jsxs(_r,{children:[r.jsx(Rr,{children:"Chapter"}),r.jsx(Na,{name:"chapter",value:A.chapter,onChange:B,placeholder:"Chapter"})]}),r.jsxs(_r,{children:[r.jsx(Rr,{children:"Test Name"}),r.jsx(Na,{name:"test",value:A.test,onChange:B,placeholder:"e.g. Set A"})]}),r.jsxs(_r,{children:[r.jsx(Rr,{children:"Questions"}),r.jsx(Na,{name:"questions",value:A.questions,onChange:B,type:"number"})]}),r.jsxs(_r,{children:[r.jsx(Rr,{children:"Points"}),r.jsx(Na,{name:"points",value:A.points,onChange:B,type:"number"})]}),r.jsxs(_r,{children:[r.jsx(Rr,{children:"Access"}),r.jsxs(mc,{name:"paid",value:A.paid,onChange:B,children:[r.jsx("option",{children:"Free"}),r.jsx("option",{children:"Paid"})]})]}),r.jsxs(_r,{children:[r.jsx(Rr,{children:"Status"}),r.jsxs(mc,{name:"status",value:A.status,onChange:B,children:[r.jsx("option",{children:"Published"}),r.jsx("option",{children:"Pending"}),r.jsx("option",{children:"Draft"})]})]}),r.jsxs(_r,{style:{gridColumn:"1 / span 2"},children:[r.jsx(Rr,{children:"File"}),r.jsx(Na,{type:"file",name:"file",onChange:q})]})]})}),r.jsxs(u4,{children:[r.jsx(h4,{onClick:L,children:"Cancel"}),r.jsx(f4,{onClick:ne,children:"Upload"})]})]})})]})]})};function g4(){const{pathname:n}=ln();return C.useEffect(()=>{window.scrollTo(0,0)},[n]),null}const Q1=sn`
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
`,Y1=p.div`
  min-height: 100vh;
  background-color: #f9fafb;
  padding: 2rem;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`,V1=p.div`
  max-width: 800px;
  margin: 0 auto;
`,b4=p.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`,x4=p.button`
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
`,v4=p.div`
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
`,y4=p.div`
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
`,j4=p.div`
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, ${n=>n.gradient||"#3b82f6"});
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
`,w4=p.div`
  flex: 1;
`,S4=p.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,G1=p.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  background-color: ${n=>n.bg||"#f3f4f6"};
  color: ${n=>n.color||"#374151"};
  border: 1px solid ${n=>n.border||"#e5e7eb"};
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>n.darkBg||"rgba(55, 65, 81, 0.5)"};
    color: ${n=>n.darkColor||"#d1d5db"};
    border-color: ${n=>n.darkBorder||"#4b5563"};
  }
`,A4=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,k4=p.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,pc=p.div`
  margin-bottom: 1.5rem;
`,gc=p.label`
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
`,I1=p.input`
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
`,X1=p.select`
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
`,bc=p.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.375rem;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,C4=p.div`
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
`,E4=p.button`
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
`,T4=p.button`
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
`;const N4=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`,M4=p.div`
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
`,_4=p.button`
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
`,R4=n=>{switch(n){case"Super Admin":return r.jsx(Rl,{});case"Admin":return r.jsx(Tv,{});case"Manager":return r.jsx(Vn,{});case"Student":return r.jsx(wv,{});default:return r.jsx(Km,{})}},D4=n=>{switch(n){case"Super Admin":return{bg:"#fffbeb",color:"#b45309",border:"#fde68a",darkBg:"rgba(245, 158, 11, 0.2)",darkColor:"#fcd34d",darkBorder:"rgba(245, 158, 11, 0.3)"};case"Admin":return{bg:"#faf5ff",color:"#7e5bef",border:"#ddd6fe",darkBg:"rgba(139, 92, 246, 0.2)",darkColor:"#c4b5fd",darkBorder:"rgba(139, 92, 246, 0.3)"};case"Manager":return{bg:"#eef2ff",color:"#4f46e5",border:"#c7d2fe",darkBg:"rgba(79, 70, 229, 0.2)",darkColor:"#a5b4fc",darkBorder:"rgba(79, 70, 229, 0.3)"};case"Student":return{bg:"#eff6ff",color:"#2563eb",border:"#bfdbfe",darkBg:"rgba(37, 99, 235, 0.2)",darkColor:"#93c5fd",darkBorder:"rgba(37, 99, 235, 0.3)"};default:return{bg:"#f3f4f6",color:"#374151",border:"#e5e7eb",darkBg:"rgba(55, 65, 81, 0.5)",darkColor:"#d1d5db",darkBorder:"#4b5563"}}},O4=n=>n==="Active"?{bg:"#ecfdf5",color:"#047857",border:"#a7f3d0",darkBg:"rgba(16, 185, 129, 0.2)",darkColor:"#86efac",darkBorder:"rgba(16, 185, 129, 0.3)"}:{bg:"#fef2f2",color:"#b91c1c",border:"#fecaca",darkBg:"rgba(220, 38, 38, 0.2)",darkColor:"#fca5a5",darkBorder:"rgba(220, 38, 38, 0.3)"},z4=n=>{const i=["#3b82f6, #2563eb","#8b5cf6, #7c3aed","#10b981, #059669","#f59e0b, #d97706","#ef4444, #dc2626","#06b6d4, #0891b2"],s=(n==null?void 0:n.length)%i.length||0;return i[s]},$4=()=>{var x;const{id:n}=Kx(),i=Jt(),s=Pm(),l=Hm(j=>j.userReducer.users),d=n?l.find(j=>j.id===parseInt(n)):null,[u,h]=C.useState({name:"",email:"",role:"",status:"Active"});C.useEffect(()=>{d&&h({name:d.name,email:d.email,role:d.role,status:d.status})},[d]);const g=j=>{const{name:S,value:w}=j.target;h(N=>({...N,[S]:w}))},b=j=>{j.preventDefault();const S={...d,...u};s(qv(S)),i("/user-management")};if(!d)return r.jsxs(r.Fragment,{children:[r.jsx(Q1,{}),r.jsx(Y1,{children:r.jsx(V1,{children:r.jsx(N4,{children:r.jsxs(M4,{children:[r.jsx(im,{}),r.jsx("h3",{children:"User Not Found"}),r.jsx("p",{children:"The user you're trying to edit doesn't exist or has been removed."}),r.jsx(_4,{onClick:()=>i("/user-management"),children:"Return to User Management"})]})})})})]});const m=D4(d.role),v=O4(d.status);return r.jsxs(r.Fragment,{children:[r.jsx(Q1,{}),r.jsx(Y1,{children:r.jsxs(V1,{children:[r.jsxs(b4,{children:[r.jsx(x4,{onClick:()=>i("/user-management"),children:r.jsx(Jw,{})}),r.jsxs(v4,{children:[r.jsx("h1",{children:"Edit Profile"}),r.jsx("p",{children:"Update user information and role settings"})]})]}),r.jsxs(y4,{children:[r.jsx(j4,{gradient:z4(d.name),children:(x=d.name)==null?void 0:x.split(" ").map(j=>j[0]).join("").slice(0,2).toUpperCase()}),r.jsxs(w4,{children:[r.jsx(S4,{children:d.name}),r.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[r.jsxs(G1,{bg:m.bg,color:m.color,border:m.border,darkBg:m.darkBg,darkColor:m.darkColor,darkBorder:m.darkBorder,children:[R4(d.role),d.role]}),r.jsxs(G1,{bg:v.bg,color:v.color,border:v.border,darkBg:v.darkBg,darkColor:v.darkColor,darkBorder:v.darkBorder,children:[d.status==="Active"?r.jsx(ft,{}):r.jsx(im,{}),d.status]})]})]})]}),r.jsxs(A4,{children:[r.jsx(k4,{children:"Edit User Information"}),r.jsxs("form",{onSubmit:b,children:[r.jsxs(pc,{children:[r.jsxs(gc,{htmlFor:"name",children:[r.jsx(Km,{}),"Full Name"]}),r.jsx(I1,{type:"text",id:"name",name:"name",value:u.name,onChange:g,placeholder:"Enter user's full name",required:!0}),r.jsx(bc,{children:"Update the user's display name"})]}),r.jsxs(pc,{children:[r.jsxs(gc,{htmlFor:"email",children:[r.jsx(od,{}),"Email Address"]}),r.jsx(I1,{type:"email",id:"email",name:"email",value:u.email,onChange:g,placeholder:"Enter user's email address",required:!0}),r.jsx(bc,{children:"This will be used for notifications and login"})]}),r.jsxs(pc,{children:[r.jsxs(gc,{htmlFor:"role",children:[r.jsx(Rl,{}),"User Role"]}),r.jsxs(X1,{id:"role",name:"role",value:u.role,onChange:g,required:!0,children:[r.jsx("option",{value:"",children:"Select a role"}),r.jsx("option",{value:"Super Admin",children:"Super Admin"}),r.jsx("option",{value:"Admin",children:"Admin"}),r.jsx("option",{value:"Manager",children:"Manager"}),r.jsx("option",{value:"Student",children:"Student"})]}),r.jsx(bc,{children:"Determines user permissions and access level"})]}),r.jsxs(pc,{children:[r.jsxs(gc,{htmlFor:"status",children:[r.jsx(ft,{}),"Account Status"]}),r.jsxs(X1,{id:"status",name:"status",value:u.status,onChange:g,children:[r.jsx("option",{value:"Active",children:"Active"}),r.jsx("option",{value:"Inactive",children:"Inactive"}),r.jsx("option",{value:"Blocked",children:"Blocked"})]}),r.jsx(bc,{children:"Active users can access the platform"})]}),r.jsxs(C4,{children:[r.jsx(E4,{type:"button",onClick:()=>i("/user-management"),children:"Cancel"}),r.jsxs(T4,{type:"submit",children:[r.jsx(Cv,{}),"Save Changes"]})]})]})]})]})})]})},B4=sn`
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
`,U4=p.div`
  display: flex;
  height: 100vh;
  background-color: #f9fafb;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`,K4=p.div`
  flex: 1;
  overflow: auto;
`,L4=p.div`
  padding: 2rem;
`,P4=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`,H4=p.div`
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
`,q4=p.button`
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
`,F4=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,Q4=p.div`
  padding: 1.25rem;
`,Y4=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`,V4=p.div`
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
`,G4=p.input`
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
`,Oh=p.div`
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
`,zh=p.select`
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
`,Wv=p.button`
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
`,I4=p(Wv)`
  background-color: #2563eb;  
  color: white;
  border-color: #2563eb;
  &:hover {
    background-color: #2455ddd3;
    color: white;
    }`,X4=p.div`
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
`,xc=p.div`
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
`,vc=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${n=>n.bg||"#eff6ff"};
  border-radius: 0.5rem;
  color: ${n=>n.color||"#2563eb"};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,yc=p.div`
  flex: 1;
`,jc=p.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,wc=p.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,Z4=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,J4=p.div`
  overflow-x: auto;
`,W4=p.table`
  width: 100%;
  table-layout: auto;
  border-collapse: collapse;
`,e8=p.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-bottom-color: #4b5563;
  }
`,yo=p.th`
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
`,t8=p.tbody``,mm=p.tr`
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
`,$n=p.td`
  padding: 1.25rem 1.5rem;
  font-size: 0.875rem;
  color: ${n=>n.color||"#4b5563"};

  @media (prefers-color-scheme: dark) {
    color: ${n=>n.color||"#d1d5db"};
  }
`,r8=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,n8=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${n=>n.bg||"#f3f4f6"};
  border-radius: 0.5rem;
  color: ${n=>n.color||"#6b7280"};
  flex-shrink: 0;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>n.darkBg||"#374151"};
    color: ${n=>n.darkColor||"#9ca3af"};
  }
`,o8=p.div`
  font-weight: 500;
  color: #111827;
  transition: color 0.2s;
  margin-bottom: 0.25rem;

  ${mm}:hover & {
    color: #2563eb;
  }

  @media (prefers-color-scheme: dark) {
    color: white;

    ${mm}:hover & {
      color: #60a5fa;
    }
  }
`,a8=p.div`
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
`,Nd=p.span`
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
`,i8=p(Nd)`
  background-color: ${n=>{switch(n.type){case"PDF":return"#fee2e2";case"Doc":return"#dbeafe";case"PPT":return"#fef3c7";case"Excel":return"#dcfce7";case"Image":return"#f3e8ff";default:return"#f3f4f6"}}};
  color: ${n=>{switch(n.type){case"PDF":return"#991b1b";case"Doc":return"#1e40af";case"PPT":return"#92400e";case"Excel":return"#166534";case"Image":return"#6b21a8";default:return"#374151"}}};
  border-color: ${n=>{switch(n.type){case"PDF":return"#fecaca";case"Doc":return"#bfdbfe";case"PPT":return"#fde68a";case"Excel":return"#bbf7d0";case"Image":return"#e9d5ff";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>{switch(n.type){case"PDF":return"rgba(220, 38, 38, 0.2)";case"Doc":return"rgba(37, 99, 235, 0.2)";case"PPT":return"rgba(245, 158, 11, 0.2)";case"Excel":return"rgba(22, 163, 74, 0.2)";case"Image":return"rgba(147, 51, 234, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${n=>{switch(n.type){case"PDF":return"#fca5a5";case"Doc":return"#93c5fd";case"PPT":return"#fcd34d";case"Excel":return"#86efac";case"Image":return"#d8b4fe";default:return"#d1d5db"}}};
    border-color: ${n=>{switch(n.type){case"PDF":return"rgba(220, 38, 38, 0.3)";case"Doc":return"rgba(37, 99, 235, 0.3)";case"PPT":return"rgba(245, 158, 11, 0.3)";case"Excel":return"rgba(22, 163, 74, 0.3)";case"Image":return"rgba(147, 51, 234, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,l8=p(Nd)`
  background-color: #f3f4f6;
  color: #374151;
  border-color: #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: #d1d5db;
    border-color: rgba(75, 85, 99, 0.5);
  }
`,s8=p(Nd)`
  background-color: ${n=>{switch(n.status){case"Active":return"#ecfdf5";case"Pending":return"#fefce8";case"Disabled":return"#fef2f2";default:return"#f9fafb"}}};
  color: ${n=>{switch(n.status){case"Active":return"#047857";case"Pending":return"#b45309";case"Disabled":return"#b91c1c";default:return"#374151"}}};
  border-color: ${n=>{switch(n.status){case"Active":return"#a7f3d0";case"Pending":return"#fde68a";case"Disabled":return"#fecaca";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>{switch(n.status){case"Active":return"rgba(16, 185, 129, 0.2)";case"Pending":return"rgba(245, 158, 11, 0.2)";case"Disabled":return"rgba(220, 38, 38, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${n=>{switch(n.status){case"Active":return"#86efac";case"Pending":return"#fcd34d";case"Disabled":return"#fca5a5";default:return"#d1d5db"}}};
    border-color: ${n=>{switch(n.status){case"Active":return"rgba(16, 185, 129, 0.3)";case"Pending":return"rgba(245, 158, 11, 0.3)";case"Disabled":return"rgba(220, 38, 38, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,c8=p(Nd)`
  background-color: ${n=>n.paid==="Free"?"#f9fafb":"#eff6ff"};
  color: ${n=>n.paid==="Free"?"#374151":"#1e40af"};
  border-color: ${n=>n.paid==="Free"?"#e5e7eb":"#bfdbfe"};

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>n.paid==="Free"?"rgba(55, 65, 81, 0.5)":"rgba(37, 99, 235, 0.2)"};
    color: ${n=>n.paid==="Free"?"#d1d5db":"#93c5fd"};
    border-color: ${n=>n.paid==="Free"?"rgba(75, 85, 99, 0.5)":"rgba(37, 99, 235, 0.3)"};
  }
`,d8=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`,ey=p.button`
  padding: 0.5rem;
  color: #6b7280;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${n=>n.hoverBg||"#f3f4f6"};
    color: ${n=>n.hoverColor||"#374151"};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    &:hover {
      background-color: ${n=>n.hoverBg||"#4b5563"};
      color: ${n=>n.hoverColor||"white"};
    }
  }
`,u8=p(ey)`
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
`,f8=p.div`
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
`,h8=p.div`
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
`,m8=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ul=p.button`
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  background-color: ${n=>n.active?"#2563eb":"white"};
  color: ${n=>n.active?"white":"#4b5563"};
  border: 1px solid ${n=>n.active?"#2563eb":"#e5e7eb"};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${n=>n.active?"#1d4ed8":"#f9fafb"};
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>n.active?"#2563eb":"#374151"};
    color: ${n=>n.active?"white":"#d1d5db"};
    border-color: ${n=>n.active?"#2563eb":"#4b5563"};

    &:hover {
      background-color: ${n=>n.active?"#1d4ed8":"#4b5563"};
    }
  }
`,p8=p.div`
  padding: 3rem 1.5rem;
  text-align: center;
`,g8=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,b8=p.div`
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
`,x8=p.p`
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,v8=p.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 1rem;

  @media (prefers-color-scheme: dark) {
    color: #6b7280;
  }
`,y8=p.button`
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
`,j8=p.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`,w8=p.div`
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
`,Ma=p.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: ${n=>n.danger?"#dc2626":"#374151"};
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${n=>n.danger?"#fef2f2":"#f9fafb"};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${n=>n.danger?"#dc2626":"#6b7280"};
  }

  @media (prefers-color-scheme: dark) {
    color: ${n=>n.danger?"#f87171":"#e5e7eb"};

    &:hover {
      background-color: ${n=>n.danger?"rgba(220, 38, 38, 0.2)":"#374151"};
    }

    svg {
      color: ${n=>n.danger?"#f87171":"#9ca3af"};
    }
  }
`,S8=p.div`
  height: 1px;
  background-color: #f3f4f6;
  margin: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #4b5563;
  }
`,A8=p.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,k8=p.div`
  background-color: white;
  border-radius: 0.75rem;
  width: 90%;
  max-width: 640px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
  }
`,C8=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }
`,E8=p.h3`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,T8=p.button`
  background: none;
  border: none;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #6b7280;

  &:hover { background-color: #f3f4f6; color: #111827; }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
    &:hover { background-color: #374151; color: white; }
  }
`,N8=p.div`
  padding: 1rem 1.25rem;
`,jo=p.div`
  margin-bottom: 0.75rem;
`,wo=p.label`
  display: block;
  font-size: 0.875rem;
  color: #374151;
  margin-bottom: 0.375rem;

  @media (prefers-color-scheme: dark) {
    color: #e5e7eb;
  }
`,Sc=p.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: white;
  color: #111827;

  &:focus { outline: none; border-color: #3b82f6; }

  @media (prefers-color-scheme: dark) {
    background: #374151;
    border-color: #4b5563;
    color: white;
  }
`,$h=p.select`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: white;
  color: #111827;

  &:focus { outline: none; border-color: #3b82f6; }

  @media (prefers-color-scheme: dark) {
    background: #374151;
    border-color: #4b5563;
    color: white;
  }
`,M8=p.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  padding: 0.75rem 1.25rem;
  border-top: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-top-color: #374151;
  }
`,_8=p.button`
  padding: 0.5rem 0.875rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover { background-color: #1d4ed8; }
`,R8=p.button`
  padding: 0.5rem 0.875rem;
  background: white;
  border: 1px solid #e5e7eb;
  color: #374151;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover { background-color: #f9fafb; }
`,D8=n=>{switch(n==null?void 0:n.toLowerCase()){case"pdf":return r.jsx(Et,{});case"doc":case"docx":return r.jsx(_S,{});case"ppt":case"pptx":return r.jsx(YS,{});case"xls":case"xlsx":return r.jsx(TS,{});case"jpg":case"png":case"image":return r.jsx(BS,{});default:return r.jsx(xd,{})}},O8=n=>{switch(n==null?void 0:n.toLowerCase()){case"pdf":return{bg:"#fee2e2",color:"#dc2626",darkBg:"rgba(220, 38, 38, 0.2)",darkColor:"#f87171"};case"doc":case"docx":return{bg:"#dbeafe",color:"#2563eb",darkBg:"rgba(37, 99, 235, 0.2)",darkColor:"#60a5fa"};case"ppt":case"pptx":return{bg:"#fef3c7",color:"#d97706",darkBg:"rgba(245, 158, 11, 0.2)",darkColor:"#fbbf24"};case"xls":case"xlsx":return{bg:"#dcfce7",color:"#16a34a",darkBg:"rgba(22, 163, 74, 0.2)",darkColor:"#4ade80"};case"jpg":case"png":case"image":return{bg:"#f3e8ff",color:"#9333ea",darkBg:"rgba(147, 51, 234, 0.2)",darkColor:"#c084fc"};default:return{bg:"#f3f4f6",color:"#6b7280",darkBg:"rgba(55, 65, 81, 0.5)",darkColor:"#9ca3af"}}},z8=[{id:1,title:"Data Structure and Algorithm Hand Written Notes",type:"PDF",semester:"3rd",subject:"DSA",paid:"Free",status:"Active",size:"2.4 MB",pages:45,downloads:234},{id:2,title:"Data Structure and Algorithm Textbook",type:"PDF",semester:"3rd",subject:"DSA",paid:"Paid",status:"Active",size:"15.2 MB",pages:450,downloads:89},{id:3,title:"OOP Concept Summary",type:"Doc",semester:"3rd",subject:"OOP",paid:"Free",status:"Disabled",size:"1.1 MB",pages:12,downloads:0},{id:4,title:"SQL Important Queries",type:"PDF",semester:"5th",subject:"DBMS",paid:"Paid",status:"Active",size:"3.7 MB",pages:78,downloads:15},{id:5,title:"Computer Networks Lab Manual",type:"PDF",semester:"6th",subject:"CN",paid:"Free",status:"Active",size:"5.3 MB",pages:120,downloads:41},{id:6,title:"Operating Systems Lecture Slides",type:"PPT",semester:"4th",subject:"OS",paid:"Free",status:"Pending",size:"8.9 MB",pages:65,downloads:17}],$8=()=>{const n=Jt(),[i,s]=C.useState([]),[l,d]=C.useState([]),[u,h]=C.useState(""),[g,b]=C.useState("All"),[m,v]=C.useState("All"),[x,j]=C.useState("All"),[S,w]=C.useState(null),[N,E]=C.useState(null),[A,M]=C.useState(!1),[T,_]=C.useState({title:"",type:"PDF",semester:"",subject:"",paid:"Free",status:"Active",file:null});C.useEffect(()=>{s(z8)},[]),C.useEffect(()=>{let Y=i;if(g!=="All"&&(Y=Y.filter(le=>le.subject===g)),m!=="All"&&(Y=Y.filter(le=>le.status===m)),x!=="All"&&(Y=Y.filter(le=>le.type===x)),u){const le=u.toLowerCase();Y=Y.filter(z=>z.title.toLowerCase().includes(le)||z.subject.toLowerCase().includes(le)||z.type.toLowerCase().includes(le))}d(Y)},[i,g,m,x,u]);const R=(Y,le)=>{Y.preventDefault(),w({x:Y.clientX,y:Y.clientY}),E(le)},$=()=>{w(null),E(null)},L=Y=>{n(`/documents/${Y}/edit`),$()},B=()=>{b("All"),v("All"),j("All"),h("")},q=()=>{_({title:"",type:"PDF",semester:"",subject:"",paid:"Free",status:"Active",file:null}),M(!0)},ne=()=>{M(!1)},U=Y=>{const{name:le,value:z}=Y.target;_(W=>({...W,[le]:z}))},D=Y=>{const le=Y.target.files&&Y.target.files[0];_(z=>({...z,file:le}))},J=()=>{const Y=T.file,le=Y?`${(Y.size/1024/1024).toFixed(1)} MB`:"—",z={id:Date.now(),title:T.title||(Y?Y.name:"Untitled"),type:T.type,semester:T.semester||"—",subject:T.subject||"—",paid:T.paid,status:T.status,size:le,pages:0,downloads:0};s(W=>[z,...W]),M(!1)},se=i.length,de=i.filter(Y=>Y.status==="Published"||Y.status==="Active").length,V=i.filter(Y=>Y.status==="Pending").length,I=i.filter(Y=>Y.status==="Disabled").length;return r.jsxs(r.Fragment,{children:[r.jsx(B4,{}),r.jsxs(U4,{children:[r.jsx(K4,{children:r.jsxs(L4,{children:[r.jsxs(P4,{children:[r.jsxs(H4,{children:[r.jsx("h1",{children:"Documents & Notes"}),r.jsx("p",{children:"Upload and manage study materials"})]}),r.jsxs(q4,{onClick:q,children:[r.jsx(at,{}),"Upload Document "]})]}),r.jsx(F4,{children:r.jsxs(Q4,{children:[r.jsxs(Y4,{children:[r.jsxs(V4,{children:[r.jsx(cn,{}),r.jsx(G4,{type:"text",value:u,onChange:Y=>h(Y.target.value),placeholder:"Search by title, subject, or type..."})]}),r.jsxs(Oh,{children:[r.jsx(vr,{}),r.jsxs(zh,{value:x,onChange:Y=>j(Y.target.value),children:[r.jsx("option",{value:"All",children:"All Types"}),r.jsx("option",{value:"PDF",children:"PDF"}),r.jsx("option",{value:"Doc",children:"Document"}),r.jsx("option",{value:"PPT",children:"Presentation"}),r.jsx("option",{value:"Excel",children:"Spreadsheet"}),r.jsx("option",{value:"Image",children:"Image"})]}),r.jsx(et,{})]}),r.jsxs(Oh,{children:[r.jsx(vr,{}),r.jsxs(zh,{value:g,onChange:Y=>b(Y.target.value),children:[" ",r.jsx("option",{value:"All",children:"All Subjects"}),r.jsx("option",{value:"DSA",children:"DSA"}),r.jsx("option",{value:"OOP",children:"OOP"}),r.jsx("option",{value:"DBMS",children:"DBMS"}),r.jsx("option",{value:"CN",children:"CN"}),r.jsx("option",{value:"OS",children:"OS"})]}),r.jsx(et,{})]}),r.jsxs(Oh,{children:[r.jsx(vr,{}),r.jsxs(zh,{value:m,onChange:Y=>v(Y.target.value),children:[r.jsx("option",{value:"All",children:"All Status"}),r.jsx("option",{value:"Active",children:"Active"}),r.jsx("option",{value:"Pending",children:"Pending"}),r.jsx("option",{value:"Disabled",children:"Disabled"})]}),r.jsx(et,{})]}),(g!=="All"||m!=="All"||x!=="All"||u)&&r.jsxs(Wv,{onClick:B,children:[r.jsx(Me,{}),"Clear"]}),r.jsxs(I4,{children:[r.jsx(on,{}),"Export"]})]}),r.jsxs(X4,{children:[r.jsxs(xc,{children:[r.jsx(vc,{bg:"#eff6ff",color:"#2563eb",children:r.jsx(Et,{})}),r.jsxs(yc,{children:[r.jsx(jc,{children:"Total Documents"}),r.jsx(wc,{children:se})]})]}),r.jsxs(xc,{children:[r.jsx(vc,{bg:"#ecfdf5",color:"#10b981",children:r.jsx(ft,{})}),r.jsxs(yc,{children:[r.jsx(jc,{children:"Active Documents"}),r.jsx(wc,{children:de})]})]}),r.jsxs(xc,{children:[r.jsx(vc,{bg:"#fef3c7",color:"#f5510b",children:r.jsx(Me,{})}),r.jsxs(yc,{children:[r.jsx(jc,{children:"Disabled Documents"}),r.jsx(wc,{children:I})]})]}),r.jsxs(xc,{children:[r.jsx(vc,{bg:"#f3e8ff",color:"#fc982d",children:r.jsx(Zt,{})}),r.jsxs(yc,{children:[r.jsx(jc,{children:"Pending Documents"}),r.jsx(wc,{children:V.toLocaleString()})]})]})]})]})}),r.jsxs(Z4,{children:[r.jsx(J4,{children:r.jsxs(W4,{children:[r.jsx(e8,{children:r.jsxs("tr",{children:[r.jsx(yo,{width:"35%",children:"Document"}),r.jsx(yo,{width:"10%",children:"Type"}),r.jsx(yo,{width:"10%",children:"Semester"}),r.jsx(yo,{width:"12%",children:"Subject"}),r.jsx(yo,{width:"10%",children:"Access"}),r.jsx(yo,{width:"10%",children:"Status"}),r.jsx(yo,{width:"13%",style:{textAlign:"right"},children:"Actions"})]})}),r.jsx(t8,{children:l.length>0?l.map(Y=>{const le=O8(Y.type);return r.jsxs(mm,{onContextMenu:z=>R(z,Y),children:[r.jsx($n,{children:r.jsxs(r8,{children:[r.jsx(n8,{bg:le.bg,color:le.color,darkBg:le.darkBg,darkColor:le.darkColor,children:D8(Y.type)}),r.jsxs("div",{children:[r.jsx(o8,{children:Y.title}),r.jsxs(a8,{children:[r.jsx("span",{children:Y.size||"—"}),r.jsx("span",{children:"•"}),r.jsxs("span",{children:[Y.pages||0," pages"]}),r.jsx("span",{children:"•"}),r.jsxs("span",{children:[Y.downloads||0," downloads"]})]})]})]})}),r.jsx($n,{children:r.jsx(i8,{type:Y.type,children:Y.type})}),r.jsx($n,{children:r.jsx(l8,{children:Y.semester||"—"})}),r.jsx($n,{children:r.jsx("span",{style:{fontWeight:500,color:"#111827",...window.matchMedia("(prefers-color-scheme: dark)").matches&&{color:"white"}},children:Y.subject})}),r.jsx($n,{children:r.jsx(c8,{paid:Y.paid,children:Y.paid})}),r.jsx($n,{children:r.jsxs(s8,{status:Y.status,children:[Y.status==="Published"&&r.jsx(ft,{}),Y.status==="Active"&&r.jsx(ft,{}),Y.status==="Draft"&&r.jsx(Ct,{}),Y.status==="Pending"&&r.jsx(Zt,{}),Y.status==="Disabled"&&r.jsx(Me,{}),Y.status]})}),r.jsx($n,{children:r.jsxs(d8,{children:[r.jsx(u8,{onClick:()=>L(Y.id),title:"Edit document",children:r.jsx(an,{})}),r.jsx(ey,{onClick:z=>R(z,Y),title:"More options",children:r.jsx(zo,{})})]})})]},Y.id)}):r.jsx("tr",{children:r.jsx($n,{colSpan:"7",style:{padding:0},children:r.jsx(p8,{children:r.jsxs(g8,{children:[r.jsx(b8,{children:r.jsx(wd,{})}),r.jsx(x8,{children:"No documents found"}),r.jsx(v8,{children:"Try adjusting your filters or upload a new document"}),r.jsx(y8,{onClick:B,children:"Clear all filters"})]})})})})})]})}),r.jsxs(f8,{children:[r.jsxs(h8,{children:["Showing ",r.jsx("span",{children:l.length})," of"," ",r.jsx("span",{children:i.length})," documents"]}),r.jsxs(m8,{children:[r.jsx(ul,{children:"Previous"}),r.jsx(ul,{active:!0,children:"1"}),r.jsx(ul,{children:"2"}),r.jsx(ul,{children:"3"}),r.jsx(ul,{children:"Next"})]})]})]})]})}),A&&r.jsx(A8,{onClick:ne,children:r.jsxs(k8,{onClick:Y=>Y.stopPropagation(),children:[r.jsxs(C8,{children:[r.jsx(E8,{children:"Upload Document"}),r.jsx(T8,{onClick:ne,children:r.jsx(Me,{})})]}),r.jsxs(N8,{children:[r.jsxs(jo,{children:[r.jsx(wo,{children:"Title"}),r.jsx(Sc,{name:"title",value:T.title,onChange:U,placeholder:"Document title"})]}),r.jsxs(jo,{children:[r.jsx(wo,{children:"Type"}),r.jsxs($h,{name:"type",value:T.type,onChange:U,children:[r.jsx("option",{value:"PDF",children:"PDF"}),r.jsx("option",{value:"Doc",children:"Document"}),r.jsx("option",{value:"PPT",children:"Presentation"}),r.jsx("option",{value:"Excel",children:"Spreadsheet"}),r.jsx("option",{value:"Image",children:"Image"})]})]}),r.jsxs(jo,{children:[r.jsx(wo,{children:"Semester"}),r.jsx(Sc,{name:"semester",value:T.semester,onChange:U,placeholder:"e.g. 3rd"})]}),r.jsxs(jo,{children:[r.jsx(wo,{children:"Subject"}),r.jsx(Sc,{name:"subject",value:T.subject,onChange:U,placeholder:"e.g. DSA"})]}),r.jsxs(jo,{children:[r.jsx(wo,{children:"Access"}),r.jsxs($h,{name:"paid",value:T.paid,onChange:U,children:[r.jsx("option",{value:"Free",children:"Free"}),r.jsx("option",{value:"Paid",children:"Paid"})]})]}),r.jsxs(jo,{children:[r.jsx(wo,{children:"Status"}),r.jsxs($h,{name:"status",value:T.status,onChange:U,children:[r.jsx("option",{value:"Active",children:"Active"}),r.jsx("option",{value:"Pending",children:"Pending"}),r.jsx("option",{value:"Disabled",children:"Disabled"})]})]}),r.jsxs(jo,{children:[r.jsx(wo,{children:"File"}),r.jsx(Sc,{type:"file",name:"file",onChange:D})]})]}),r.jsxs(M8,{children:[r.jsx(R8,{onClick:ne,children:"Cancel"}),r.jsx(_8,{onClick:J,children:"Upload"})]})]})}),S&&N&&r.jsxs(r.Fragment,{children:[r.jsx(j8,{onClick:$}),r.jsxs(w8,{style:{left:S.x,top:S.y},children:[r.jsxs(Ma,{onClick:()=>L(N.id),children:[r.jsx(an,{}),"Edit Document"]}),r.jsxs(Ma,{onClick:()=>{var Y;(Y=navigator.clipboard)==null||Y.writeText(window.location.origin+`/documents/${N.id}`),$()},children:[r.jsx(Sv,{}),"Copy Link"]}),r.jsxs(Ma,{children:[r.jsx(on,{}),"Download"]}),r.jsxs(Ma,{children:[r.jsx(Ul,{}),"Duplicate"]}),r.jsxs(Ma,{children:[r.jsx(bd,{}),"Archive"]}),r.jsx(S8,{}),r.jsxs(Ma,{danger:!0,children:[r.jsx($o,{}),"Delete"]})]})]})]})]})},B8=sn`
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
`,U8=p.div`
  display: flex;
  height: 100vh;
  background-color: #f9fafb;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`,K8=p.div`
  flex: 1;
  overflow: auto;
`,L8=p.div`
  padding: 2rem;
`,P8=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`,H8=p.div`
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
`,q8=p.button`
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
`,F8=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  margin-bottom: 1rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,Q8=p.div`
  padding: 1.25rem;
`,Y8=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`,V8=p.div`
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
`,G8=p.input`
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
`,Z1=p.div`
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
`,I8=p.div`
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
`,X8=p.button`
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
`,Z8=p.div`
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
`,fl=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: ${n=>n.active?"#eff6ff":"white"};
  border: 1px solid ${n=>n.active?"#bfdbfe":"#e5e7eb"};
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: ${n=>n.active?"#eff6ff":"#f9fafb"};
    border-color: ${n=>n.active?"#2563eb":"#d1d5db"};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>n.active?"rgba(37, 99, 235, 0.2)":"#1f2937"};
    border-color: ${n=>n.active?"rgba(37, 99, 235, 0.3)":"#374151"};

    &:hover {
      background-color: ${n=>n.active?"rgba(37, 99, 235, 0.3)":"#2d3748"};
      border-color: ${n=>n.active?"rgba(37, 99, 235, 0.4)":"#4b5563"};
    }
  }
`,hl=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${n=>n.bg||"#eff6ff"};
  border-radius: 0.5rem;
  color: ${n=>n.color||"#2563eb"};
  flex-shrink: 0;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,ml=p.div`
  flex: 1;
`,pl=p.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,gl=p.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,J8=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,W8=p.div`
  overflow-x: auto;
`,e9=p.table`
  width: 100%;
  border-collapse: collapse;
`,t9=p.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-bottom-color: #4b5563;
  }
`,bl=p.th`
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
`,r9=p.tbody``,J1=p.tr`
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
`,_a=p.td`
  padding: 1.25rem 1.5rem;
  font-size: 0.875rem;
  color: #4b5563;
  vertical-align: middle;

  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`,n9=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,o9=p.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  background-color: ${n=>n.color||"#2563eb"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  flex-shrink: 0;
`,a9=p.div`
  display: flex;
  flex-direction: column;
`,i9=p.span`
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.125rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,l9=p.span`
  font-size: 0.75rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,ty=p.span`
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
`,s9=p(ty)`
  background-color: ${n=>{switch(n.type){case"update":return"#eff6ff";case"approve":return"#ecfdf5";case"upload":return"#f9fafb";case"role":return"#fefce8";case"block":return"#fef2f2";case"maintenance":return"#faf5ff";default:return"#f9fafb"}}};
  
  color: ${n=>{switch(n.type){case"update":return"#1e40af";case"approve":return"#065f46";case"upload":return"#374151";case"role":return"#92400e";case"block":return"#991b1b";case"maintenance":return"#6b21a8";default:return"#374151"}}};
  
  border-color: ${n=>{switch(n.type){case"update":return"#bfdbfe";case"approve":return"#d1fae5";case"upload":return"#e5e7eb";case"role":return"#fde68a";case"block":return"#fecaca";case"maintenance":return"#e9d5ff";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>{switch(n.type){case"update":return"rgba(37, 99, 235, 0.2)";case"approve":return"rgba(16, 185, 129, 0.2)";case"upload":return"rgba(55, 65, 81, 0.5)";case"role":return"rgba(245, 158, 11, 0.2)";case"block":return"rgba(220, 38, 38, 0.2)";case"maintenance":return"rgba(139, 92, 246, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${n=>{switch(n.type){case"update":return"#93c5fd";case"approve":return"#86efac";case"upload":return"#d1d5db";case"role":return"#fcd34d";case"block":return"#fca5a5";case"maintenance":return"#d8b4fe";default:return"#d1d5db"}}};
    border-color: ${n=>{switch(n.type){case"update":return"rgba(37, 99, 235, 0.3)";case"approve":return"rgba(16, 185, 129, 0.3)";case"upload":return"rgba(75, 85, 99, 0.5)";case"role":return"rgba(245, 158, 11, 0.3)";case"block":return"rgba(220, 38, 38, 0.3)";case"maintenance":return"rgba(139, 92, 246, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,c9=p(ty)`
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
`,d9=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,u9=p.span`
  font-weight: 500;
  color: #111827;
  white-space: nowrap;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,f9=p.span`
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
`,h9=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`,ry=p.button`
  padding: 0.5rem;
  color: #6b7280;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${n=>n.hoverBg||"#f3f4f6"};
    color: ${n=>n.hoverColor||"#374151"};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    &:hover {
      background-color: ${n=>n.hoverBg||"#4b5563"};
      color: ${n=>n.hoverColor||"white"};
    }
  }
`,m9=p(ry)`
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
`,p9=p.div`
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
`,g9=p.div`
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
`,b9=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,xl=p.button`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: ${n=>n.active?"white":"#4b5563"};
  background-color: ${n=>n.active?"#2563eb":"white"};
  border: 1px solid ${n=>n.active?"#2563eb":"#e5e7eb"};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${n=>n.active?"#1d4ed8":"#f9fafb"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (prefers-color-scheme: dark) {
    color: ${n=>n.active?"white":"#d1d5db"};
    background-color: ${n=>n.active?"#2563eb":"#374151"};
    border-color: ${n=>n.active?"#2563eb":"#4b5563"};

    &:hover {
      background-color: ${n=>n.active?"#1d4ed8":"#4b5563"};
    }
  }
`,x9=p.div`
  padding: 3rem 1.5rem;
  text-align: center;
`,v9=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,y9=p.div`
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
`,j9=p.p`
  color: #6b7280;
  font-weight: 500;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,w9=p.p`
  font-size: 0.875rem;
  color: #9ca3af;

  @media (prefers-color-scheme: dark) {
    color: #6b7280;
  }
`,S9=p.button`
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
`,A9=p.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`,k9=p.div`
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
`,Ac=p.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: ${n=>n.danger?"#dc2626":"#374151"};
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${n=>n.danger?"#fef2f2":"#f9fafb"};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${n=>n.danger?"#dc2626":"#6b7280"};
  }

  @media (prefers-color-scheme: dark) {
    color: ${n=>n.danger?"#f87171":"#e5e7eb"};

    &:hover {
      background-color: ${n=>n.danger?"rgba(220, 38, 38, 0.2)":"#374151"};
    }

    svg {
      color: ${n=>n.danger?"#f87171":"#9ca3af"};
    }
  }
`,C9=p.div`
  height: 1px;
  background-color: #f3f4f6;
  margin: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #4b5563;
  }
`,E9=n=>{switch(n){case"update":return r.jsx(Oa,{size:12});case"approve":return r.jsx(ft,{size:12});case"upload":return r.jsx(Ev,{size:12});case"role":return r.jsx(br,{size:12});case"block":return r.jsx(Um,{size:12});case"maintenance":return r.jsx(yv,{size:12});default:return r.jsx(Et,{size:12})}},T9=n=>{const i=["#2563eb","#7c3aed","#0891b2","#059669","#b45309","#dc2626"],s=n.length%i.length;return i[s]},N9=n=>n.split(" ").map(i=>i[0]).join("").substring(0,2).toUpperCase(),M9=n=>new Date(n).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).replace(",",""),So=[{id:1,user:"Admin User",role:"Administrator",action:"Updated subscription plan Pro",actionType:"update",ipAddress:"192.168.1.45",timestamp:"2026-02-13 14:32:10",relativeTime:"2 hours ago"},{id:2,user:"Admin User",role:"Administrator",action:"Approved student question #3",actionType:"approve",ipAddress:"192.168.1.45",timestamp:"2026-02-13 13:15:22",relativeTime:"3 hours ago"},{id:3,user:"Vikram Singh",role:"Instructor",action:"Uploaded document: OS Process Notes",actionType:"upload",ipAddress:"10.0.0.12",timestamp:"2026-02-13 11:48:05",relativeTime:"5 hours ago"},{id:4,user:"Admin User",role:"Administrator",action:"Changed user role: Amit Kumar → Manager",actionType:"role",ipAddress:"192.168.1.45",timestamp:"2026-02-12 16:20:33",relativeTime:"1 day ago"},{id:5,user:"Amit Kumar",role:"Manager",action:"Created module: Module 1 → OSI Model",actionType:"upload",ipAddress:"10.0.0.8",timestamp:"2026-02-12 14:55:18",relativeTime:"1 day ago"},{id:6,user:"Admin User",role:"Administrator",action:"Blocked user: Sneha Reddy",actionType:"block",ipAddress:"192.168.1.45",timestamp:"2026-02-11 09:12:44",relativeTime:"2 days ago"},{id:7,user:"Admin User",role:"Administrator",action:"Enabled maintenance mode",actionType:"maintenance",ipAddress:"192.168.1.45",timestamp:"2026-02-10 22:00:01",relativeTime:"3 days ago"},{id:8,user:"Admin User",role:"Administrator",action:"Updated points rules",actionType:"update",ipAddress:"192.168.1.45",timestamp:"2026-02-10 18:30:12",relativeTime:"3 days ago"}],_9=()=>{const n=Jt(),[i,s]=C.useState(""),[l,d]=C.useState("all"),[u,h]=C.useState("all"),[g,b]=C.useState(null),[m,v]=C.useState(null),x=So.filter($=>{const L=i===""||$.user.toLowerCase().includes(i.toLowerCase())||$.action.toLowerCase().includes(i.toLowerCase())||$.ipAddress.includes(i),B=l==="all"||$.actionType===l,q=u==="all"||u==="admin"&&$.role==="Administrator"||u==="instructor"&&$.role==="Instructor"||u==="manager"&&$.role==="Manager";return L&&B&&q}),j=($,L)=>{$.preventDefault(),b({x:$.clientX,y:$.clientY}),v(L)},S=()=>{b(null),v(null)},w=()=>{s(""),d("all"),h("all")},N=$=>{n(`/audit-logs/${$}`),S()},E=($,L)=>{d(L)},A=So.length,M=So.filter($=>$.actionType==="approve").length,T=So.filter($=>$.actionType==="upload").length,_=So.filter($=>$.actionType==="role").length,R=So.filter($=>["block","maintenance"].includes($.actionType)).length;return r.jsxs(r.Fragment,{children:[r.jsx(B8,{}),r.jsxs(U8,{children:[r.jsx(K8,{children:r.jsxs(L8,{children:[r.jsxs(P8,{children:[r.jsxs(H8,{children:[r.jsx("h1",{children:"Audit Logs"}),r.jsx("p",{children:"Track all administrative actions on the platform"})]}),r.jsxs(q8,{onClick:()=>n("/export-logs"),children:[r.jsx(on,{size:16}),"Export Logs"]})]}),r.jsx(F8,{children:r.jsx(Q8,{children:r.jsxs(Y8,{children:[r.jsxs(V8,{children:[r.jsx(cn,{size:16}),r.jsx(G8,{type:"text",placeholder:"Search users, actions, IP addresses...",value:i,onChange:$=>s($.target.value)})]}),r.jsxs(Z1,{children:[r.jsx(vr,{size:16}),r.jsxs("select",{value:l,onChange:$=>d($.target.value),children:[r.jsx("option",{value:"all",children:"All Actions"}),r.jsx("option",{value:"update",children:"Updates"}),r.jsx("option",{value:"approve",children:"Approvals"}),r.jsx("option",{value:"upload",children:"Uploads"}),r.jsx("option",{value:"role",children:"Role Changes"}),r.jsx("option",{value:"block",children:"Blocks"}),r.jsx("option",{value:"maintenance",children:"Maintenance"})]}),r.jsx(et,{size:16})]}),r.jsxs(Z1,{children:[r.jsx(Km,{size:16}),r.jsxs("select",{value:u,onChange:$=>h($.target.value),children:[r.jsx("option",{value:"all",children:"All Users"}),r.jsx("option",{value:"admin",children:"Administrators"}),r.jsx("option",{value:"instructor",children:"Instructors"}),r.jsx("option",{value:"manager",children:"Managers"})]}),r.jsx(et,{size:16})]}),r.jsxs(I8,{children:[r.jsx(am,{size:16}),r.jsx("span",{children:"Last 7 days"}),r.jsx(et,{size:16})]}),(i||l!=="all"||u!=="all")&&r.jsxs(X8,{onClick:w,children:[r.jsx(Me,{size:16}),"Clear"]})]})})}),r.jsxs(Z8,{children:[r.jsxs(fl,{active:l==="all",onClick:()=>E("action","all"),children:[r.jsx(hl,{bg:"#eff6ff",color:"#2563eb",children:r.jsx(yv,{})}),r.jsxs(ml,{children:[r.jsx(pl,{children:"All Activities"}),r.jsx(gl,{children:A})]})]}),r.jsxs(fl,{active:l==="approve",onClick:()=>E("action","approve"),children:[r.jsx(hl,{bg:"#ecfdf5",color:"#10b981",children:r.jsx(ft,{})}),r.jsxs(ml,{children:[r.jsx(pl,{children:"Approvals"}),r.jsx(gl,{children:M})]})]}),r.jsxs(fl,{active:l==="upload",onClick:()=>E("action","upload"),children:[r.jsx(hl,{bg:"#f3f4f6",color:"#6b7280",children:r.jsx(Ev,{})}),r.jsxs(ml,{children:[r.jsx(pl,{children:"Uploads"}),r.jsx(gl,{children:T})]})]}),r.jsxs(fl,{active:l==="role",onClick:()=>E("action","role"),children:[r.jsx(hl,{bg:"#fef3c7",color:"#f59e0b",children:r.jsx(br,{})}),r.jsxs(ml,{children:[r.jsx(pl,{children:"Role Changes"}),r.jsx(gl,{children:_})]})]}),r.jsxs(fl,{active:l==="block"||l==="maintenance",onClick:()=>E("action","block"),children:[r.jsx(hl,{bg:"#fee2e2",color:"#ef4444",children:r.jsx(Um,{})}),r.jsxs(ml,{children:[r.jsx(pl,{children:"Security"}),r.jsx(gl,{children:R})]})]})]}),r.jsxs(J8,{children:[r.jsx(W8,{children:r.jsxs(e9,{children:[r.jsx(t9,{children:r.jsxs("tr",{children:[r.jsx(bl,{children:"User"}),r.jsx(bl,{children:"Action"}),r.jsx(bl,{children:"IP Address"}),r.jsx(bl,{children:"Timestamp"}),r.jsx(bl,{style:{textAlign:"right"},children:"Actions"})]})}),r.jsx(r9,{children:x.length>0?x.map($=>r.jsxs(J1,{onContextMenu:L=>j(L,$),children:[r.jsx(_a,{children:r.jsxs(n9,{children:[r.jsx(o9,{color:T9($.user),children:N9($.user)}),r.jsxs(a9,{children:[r.jsx(i9,{children:$.user}),r.jsx(l9,{children:$.role})]})]})}),r.jsx(_a,{children:r.jsxs(s9,{type:$.actionType,children:[E9($.actionType),$.action]})}),r.jsx(_a,{children:r.jsxs(c9,{children:[r.jsx(OS,{size:12}),$.ipAddress]})}),r.jsx(_a,{children:r.jsxs(d9,{children:[r.jsx(u9,{children:M9($.timestamp)}),r.jsxs(f9,{children:[r.jsx(Zt,{size:12}),$.relativeTime]})]})}),r.jsx(_a,{children:r.jsxs(h9,{children:[r.jsx(m9,{onClick:()=>N($.id),title:"View details",children:r.jsx(Ct,{size:16})}),r.jsx(ry,{onClick:L=>j(L,$),title:"More options",children:r.jsx(zo,{size:16})})]})})]},$.id)):r.jsx(J1,{children:r.jsx(_a,{colSpan:"5",style:{padding:0},children:r.jsx(x9,{children:r.jsxs(v9,{children:[r.jsx(y9,{children:r.jsx(Et,{size:32})}),r.jsx(j9,{children:"No audit logs found"}),r.jsx(w9,{children:"Try adjusting your filters"}),r.jsx(S9,{onClick:w,children:"Clear all filters"})]})})})})})]})}),r.jsxs(p9,{children:[r.jsxs(g9,{children:["Showing ",r.jsx("span",{children:x.length})," of"," ",r.jsx("span",{children:So.length})," audit logs"]}),r.jsxs(b9,{children:[r.jsx(xl,{disabled:!0,children:r.jsx(yd,{size:16})}),r.jsx(xl,{active:!0,children:"1"}),r.jsx(xl,{children:"2"}),r.jsx(xl,{children:"3"}),r.jsx(xl,{children:r.jsx(jd,{size:16})})]})]})]})]})}),g&&m&&r.jsxs(r.Fragment,{children:[r.jsx(A9,{onClick:S}),r.jsxs(k9,{style:{left:g.x,top:g.y},children:[r.jsxs(Ac,{onClick:()=>N(m.id),children:[r.jsx(Ct,{size:16}),"View Details"]}),r.jsxs(Ac,{children:[r.jsx(Ul,{size:16}),"Copy Log ID"]}),r.jsxs(Ac,{children:[r.jsx(on,{size:16}),"Export Entry"]}),r.jsx(C9,{}),r.jsxs(Ac,{danger:!0,children:[r.jsx($o,{size:16}),"Delete Log"]})]})]})]})]})},R9=sn`
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
`,D9=p.div`
  display: flex;
  height: 100vh;
  background-color: #f9fafb;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`,O9=p.div`
  flex: 1;
  overflow: auto;
`,z9=p.div`
  padding: 2rem;
`,$9=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`,B9=p.div`
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
`,U9=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,W1=p.button`
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
`,K9=p.button`
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
`,L9=p.div`
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
`,kc=p.div`
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
`,Cc=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`,Ec=p.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,Tc=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${n=>n.bg||"#eff6ff"};
  border-radius: 0.5rem;
  color: ${n=>n.color||"#2563eb"};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,Nc=p.div`
  font-size: 1.875rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,Mc=p.div`
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
`,H9=p.div`
  padding: 1.25rem;
`,q9=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`,F9=p.div`
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
`,Q9=p.input`
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
`,_c=p.div`
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
`,Y9=p.button`
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
`,V9=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,G9=p.div`
  overflow-x: auto;
`,I9=p.table`
  width: 100%;
  border-collapse: collapse;
`,X9=p.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-bottom-color: #4b5563;
  }
`,Bn=p.th`
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
`,Z9=p.tbody``,ex=p.tr`
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
`,Jr=p.td`
  padding: 1.25rem 1.5rem;
  font-size: 0.875rem;
  color: #4b5563;
  vertical-align: middle;

  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`,J9=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,W9=p.div`
  font-weight: 500;
  color: #111827;
  max-width: 350px;
  word-break: break-word;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,eE=p.div`
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
`,Xa=p.span`
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
`,tE=p(Xa)`
  background-color: ${n=>{switch(n.type){case"MCQ":return"#eff6ff";case"Coding":return"#fef3c7";case"Written":return"#f3e8ff";default:return"#f3f4f6"}}};
  color: ${n=>{switch(n.type){case"MCQ":return"#1e40af";case"Coding":return"#92400e";case"Written":return"#6b21a8";default:return"#374151"}}};
  border-color: ${n=>{switch(n.type){case"MCQ":return"#bfdbfe";case"Coding":return"#fde68a";case"Written":return"#e9d5ff";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>{switch(n.type){case"MCQ":return"rgba(37, 99, 235, 0.2)";case"Coding":return"rgba(245, 158, 11, 0.2)";case"Written":return"rgba(139, 92, 246, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${n=>{switch(n.type){case"MCQ":return"#93c5fd";case"Coding":return"#fcd34d";case"Written":return"#d8b4fe";default:return"#d1d5db"}}};
    border-color: ${n=>{switch(n.type){case"MCQ":return"rgba(37, 99, 235, 0.3)";case"Coding":return"rgba(245, 158, 11, 0.3)";case"Written":return"rgba(139, 92, 246, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,rE=p(Xa)`
  background-color: ${n=>{switch(n.difficulty){case"Easy":return"#ecfdf5";case"Medium":return"#fef3c7";case"Hard":return"#fee2e2";default:return"#f3f4f6"}}};
  color: ${n=>{switch(n.difficulty){case"Easy":return"#065f46";case"Medium":return"#92400e";case"Hard":return"#991b1b";default:return"#374151"}}};
  border-color: ${n=>{switch(n.difficulty){case"Easy":return"#d1fae5";case"Medium":return"#fde68a";case"Hard":return"#fecaca";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>{switch(n.difficulty){case"Easy":return"rgba(16, 185, 129, 0.2)";case"Medium":return"rgba(245, 158, 11, 0.2)";case"Hard":return"rgba(220, 38, 38, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${n=>{switch(n.difficulty){case"Easy":return"#86efac";case"Medium":return"#fcd34d";case"Hard":return"#fca5a5";default:return"#d1d5db"}}};
    border-color: ${n=>{switch(n.difficulty){case"Easy":return"rgba(16, 185, 129, 0.3)";case"Medium":return"rgba(245, 158, 11, 0.3)";case"Hard":return"rgba(220, 38, 38, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,nE=p(Xa)`
  background-color: #f9fafb;
  color: #374151;
  border-color: #e5e7eb;
  font-weight: 600;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: #d1d5db;
    border-color: rgba(75, 85, 99, 0.5);
  }
`,oE=p(Xa)`
  background-color: ${n=>{switch(n.status){case"Published":return"#ecfdf5";case"Draft":return"#f9fafb";default:return"#f9fafb"}}};
  color: ${n=>{switch(n.status){case"Published":return"#047857";case"Draft":return"#374151";default:return"#374151"}}};
  border-color: ${n=>{switch(n.status){case"Published":return"#a7f3d0";case"Draft":return"#e5e7eb";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>{switch(n.status){case"Published":return"rgba(16, 185, 129, 0.2)";case"Draft":return"rgba(55, 65, 81, 0.5)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${n=>{switch(n.status){case"Published":return"#86efac";case"Draft":return"#d1d5db";default:return"#d1d5db"}}};
    border-color: ${n=>{switch(n.status){case"Published":return"rgba(16, 185, 129, 0.3)";case"Draft":return"rgba(75, 85, 99, 0.5)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,aE=p(Xa)`
  background-color: #f3f4f6;
  color: #374151;
  border-color: #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: #d1d5db;
    border-color: rgba(75, 85, 99, 0.5);
  }
`,iE=p(Xa)`
  background-color: #f3f4f6;
  color: #374151;
  border-color: #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: #d1d5db;
    border-color: rgba(75, 85, 99, 0.5);
  }
`,lE=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`,pm=p.button`
  padding: 0.5rem;
  color: #6b7280;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${n=>n.hoverBg||"#f3f4f6"};
    color: ${n=>n.hoverColor||"#374151"};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    &:hover {
      background-color: ${n=>n.hoverBg||"#4b5563"};
      color: ${n=>n.hoverColor||"white"};
    }
  }
`,sE=p(pm)`
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
`,cE=p.div`
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
`,dE=p.div`
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
`,uE=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,vl=p.button`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: ${n=>n.active?"white":"#4b5563"};
  background-color: ${n=>n.active?"#2563eb":"white"};
  border: 1px solid ${n=>n.active?"#2563eb":"#e5e7eb"};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${n=>n.active?"#1d4ed8":"#f9fafb"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (prefers-color-scheme: dark) {
    color: ${n=>n.active?"white":"#d1d5db"};
    background-color: ${n=>n.active?"#2563eb":"#374151"};
    border-color: ${n=>n.active?"#2563eb":"#4b5563"};

    &:hover {
      background-color: ${n=>n.active?"#1d4ed8":"#4b5563"};
    }
  }
`,fE=p.div`
  padding: 3rem 1.5rem;
  text-align: center;
`,hE=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,mE=p.div`
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
`,pE=p.p`
  color: #6b7280;
  font-weight: 500;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,gE=p.p`
  font-size: 0.875rem;
  color: #9ca3af;

  @media (prefers-color-scheme: dark) {
    color: #6b7280;
  }
`,bE=p.button`
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
`,xE=p.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`,vE=p.div`
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
`,yl=p.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: ${n=>n.danger?"#dc2626":"#374151"};
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${n=>n.danger?"#fef2f2":"#f9fafb"};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${n=>n.danger?"#dc2626":"#6b7280"};
  }

  @media (prefers-color-scheme: dark) {
    color: ${n=>n.danger?"#f87171":"#e5e7eb"};

    &:hover {
      background-color: ${n=>n.danger?"rgba(220, 38, 38, 0.2)":"#374151"};
    }

    svg {
      color: ${n=>n.danger?"#f87171":"#9ca3af"};
    }
  }
`,yE=p.div`
  height: 1px;
  background-color: #f3f4f6;
  margin: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #4b5563;
  }
`,jE=p.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,wE=p.div`
  background-color: white;
  border-radius: 0.75rem;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
  }
`,SE=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }
`,AE=p.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #2563eb;
  }

  @media (prefers-color-scheme: dark) {
    color: white;

    svg {
      color: #60a5fa;
    }
  }
`,kE=p.button`
  padding: 0.5rem;
  background: none;
  border: none;
  border-radius: 0.375rem;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    &:hover {
      background-color: #374151;
      color: #e5e7eb;
    }
  }
`,CE=p.div`
  padding: 1.5rem;
`,EE=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.5rem;
  border-top: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-top-color: #374151;
  }
`,Bh=p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
`,Un=p.div`
  margin-bottom: 1rem;
`,Kn=p.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;

  @media (prefers-color-scheme: dark) {
    color: #e5e7eb;
  }
`,Rc=p.input`
  width: 100%;
  padding: 0.625rem 0.75rem;
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
`,Uh=p.select`
  width: 100%;
  padding: 0.625rem 0.75rem;
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
  }
`,tx=p.textarea`
  width: 100%;
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;
  min-height: 100px;
  resize: vertical;

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
`,rx=p.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
  }
`,nx=p.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,TE=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`,NE=p.input`
  flex: 1;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #4b5563;
    color: white;
  }
`,ME=p.input`
  width: 1rem;
  height: 1rem;
  accent-color: #2563eb;
  cursor: pointer;
`,_E=p.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  color: #2563eb;
  background: none;
  border: 1px dashed #2563eb;
  border-radius: 0.375rem;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    background-color: #eff6ff;
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #60a5fa;
    border-color: #60a5fa;

    &:hover {
      background-color: rgba(37, 99, 235, 0.2);
    }
  }
`,RE=n=>{switch(n){case"Easy":return r.jsx(Fn,{size:12});case"Medium":return r.jsx(vd,{size:12});case"Hard":return r.jsx(Mo,{size:12});default:return r.jsx(Vn,{size:12})}},DE=n=>{switch(n){case"Published":return r.jsx(ft,{size:12});case"Draft":return r.jsx(Ct,{size:12});default:return r.jsx(Zt,{size:12})}},OE=[{id:1,question:"What is polymorphism in OOP?",type:"MCQ",subject:"OOP",module:"Module 2",difficulty:"Medium",points:10,status:"Published",topic:"Polymorphism",lastUsed:"2 days ago"},{id:2,question:"Implement a binary search tree",type:"Coding",subject:"DSA",module:"Module 5",difficulty:"Hard",points:25,status:"Published",topic:"Binary Search Tree",lastUsed:"5 days ago"},{id:3,question:"Explain the OSI model layers",type:"Written",subject:"CN",module:"Module 1",difficulty:"Easy",points:15,status:"Draft",topic:"OSI Model",lastUsed:"Not used"},{id:4,question:"SQL JOIN types with examples",type:"Written",subject:"DBMS",module:"Module 3",difficulty:"Medium",points:20,status:"Published",topic:"SQL JOINs",lastUsed:"1 week ago"},{id:5,question:"Write a program for Dijkstra's algorithm",type:"Coding",subject:"DSA",module:"Module 7",difficulty:"Hard",points:30,status:"Draft",topic:"Dijkstra",lastUsed:"Not used"},{id:6,question:"What is normalization?",type:"MCQ",subject:"DBMS",module:"Module 2",difficulty:"Easy",points:5,status:"Published",topic:"Normalization",lastUsed:"3 days ago"}],zE=()=>{const n=Jt(),[i,s]=C.useState([]),[l,d]=C.useState([]),[u,h]=C.useState(""),[g,b]=C.useState("all"),[m,v]=C.useState("all"),[x,j]=C.useState("all"),[S,w]=C.useState("all"),[N,E]=C.useState(null),[A,M]=C.useState(null),[T,_]=C.useState(!1),[R,$]=C.useState({question:"",type:"MCQ",subject:"",module:"",difficulty:"Medium",points:10,status:"Draft",topic:"",options:["","","",""],correctOption:0,code:""});C.useEffect(()=>{s(OE)},[]),C.useEffect(()=>{let te=i;if(g!=="all"&&(te=te.filter(oe=>oe.type===g)),m!=="all"&&(te=te.filter(oe=>oe.subject===m)),x!=="all"&&(te=te.filter(oe=>oe.difficulty===x)),S!=="all"&&(te=te.filter(oe=>oe.status===S)),u){const oe=u.toLowerCase();te=te.filter(Se=>Se.question.toLowerCase().includes(oe)||Se.topic.toLowerCase().includes(oe)||Se.subject.toLowerCase().includes(oe))}d(te)},[i,g,m,x,S,u]);const L=(te,oe)=>{te.preventDefault(),E({x:te.clientX,y:te.clientY}),M(oe)},B=()=>{E(null),M(null)},q=()=>{b("all"),v("all"),j("all"),w("all"),h("")},ne=te=>{n(`/questions/${te}/edit`),B()},U=te=>{n(`/questions/${te}`),B()},D=()=>{_(!0),$({question:"",type:"MCQ",subject:"",module:"",difficulty:"Medium",points:10,status:"Draft",topic:"",options:["","","",""],correctOption:0,code:""})},J=()=>{_(!1)},se=te=>{const{name:oe,value:Se}=te.target;$(ve=>({...ve,[oe]:Se}))},de=(te,oe)=>{const Se=[...R.options];Se[te]=oe,$(ve=>({...ve,options:Se}))},V=te=>{$(oe=>({...oe,correctOption:te}))},I=()=>{$(te=>({...te,options:[...te.options,""]}))},Y=te=>{if(R.options.length<=2)return;const oe=R.options.filter((ve,tt)=>tt!==te);let Se=R.correctOption;te===R.correctOption?Se=0:te<R.correctOption&&(Se=R.correctOption-1),$(ve=>({...ve,options:oe,correctOption:Se}))},le=()=>{if(!R.question||!R.subject||!R.module||!R.topic){alert("Please fill in all required fields");return}if(R.type==="MCQ"&&R.options.filter(ve=>ve.trim()!=="").length<2){alert("Please provide at least 2 options for MCQ");return}const oe={id:i.length+1,question:R.question,type:R.type,subject:R.subject,module:R.module,difficulty:R.difficulty,points:parseInt(R.points),status:R.status,topic:R.topic,lastUsed:"Not used",...R.type==="MCQ"&&{options:R.options.filter(Se=>Se.trim()!==""),correctOption:R.correctOption},...R.type==="Coding"&&{code:R.code}};s(Se=>[...Se,oe]),J()},z=i.length,W=i.filter(te=>te.status==="Published").length,ae=i.filter(te=>te.status==="Draft").length,ie=i.reduce((te,oe)=>te+oe.points,0),he=[...new Set(i.map(te=>te.subject))];return r.jsxs(r.Fragment,{children:[r.jsx(R9,{}),r.jsxs(D9,{children:[r.jsx(O9,{children:r.jsxs(z9,{children:[r.jsxs($9,{children:[r.jsxs(B9,{children:[r.jsx("h1",{children:"Question Bank"}),r.jsx("p",{children:"Create and manage exam questions"})]}),r.jsx(U9,{children:r.jsxs(W1,{onClick:D,children:[r.jsx(at,{size:16}),"Create Question"]})})]}),r.jsxs(L9,{children:[r.jsxs(kc,{children:[r.jsxs(Cc,{children:[r.jsx(Ec,{children:"Total Questions"}),r.jsx(Tc,{bg:"#eff6ff",color:"#2563eb",children:r.jsx(_o,{})})]}),r.jsx(Nc,{children:z}),r.jsx(Mc,{children:"In question bank"})]}),r.jsxs(kc,{children:[r.jsxs(Cc,{children:[r.jsx(Ec,{children:"Published"}),r.jsx(Tc,{bg:"#ecfdf5",color:"#10b981",children:r.jsx(ft,{})})]}),r.jsx(Nc,{children:W}),r.jsx(Mc,{children:"Ready to use"})]}),r.jsxs(kc,{children:[r.jsxs(Cc,{children:[r.jsx(Ec,{children:"Drafts"}),r.jsx(Tc,{bg:"#f3f4f6",color:"#6b7280",children:r.jsx(Ct,{})})]}),r.jsx(Nc,{children:ae}),r.jsx(Mc,{children:"In progress"})]}),r.jsxs(kc,{children:[r.jsxs(Cc,{children:[r.jsx(Ec,{children:"Total Points"}),r.jsx(Tc,{bg:"#fef3c7",color:"#f59e0b",children:r.jsx(Mo,{})})]}),r.jsx(Nc,{children:ie}),r.jsx(Mc,{children:"Across all questions"})]})]}),r.jsx(P9,{children:r.jsx(H9,{children:r.jsxs(q9,{children:[r.jsxs(F9,{children:[r.jsx(cn,{size:16}),r.jsx(Q9,{type:"text",placeholder:"Search questions...",value:u,onChange:te=>h(te.target.value)})]}),r.jsxs(_c,{children:[r.jsx(vr,{size:16}),r.jsxs("select",{value:g,onChange:te=>b(te.target.value),children:[r.jsx("option",{value:"all",children:"All Types"}),r.jsx("option",{value:"MCQ",children:"MCQ"}),r.jsx("option",{value:"Coding",children:"Coding"}),r.jsx("option",{value:"Written",children:"Written"})]}),r.jsx(et,{size:16})]}),r.jsxs(_c,{children:[r.jsx(xd,{size:16}),r.jsxs("select",{value:m,onChange:te=>v(te.target.value),children:[r.jsx("option",{value:"all",children:"All Subjects"}),he.map(te=>r.jsx("option",{value:te,children:te},te))]}),r.jsx(et,{size:16})]}),r.jsxs(_c,{children:[r.jsx(vd,{size:16}),r.jsxs("select",{value:x,onChange:te=>j(te.target.value),children:[r.jsx("option",{value:"all",children:"All Difficulties"}),r.jsx("option",{value:"Easy",children:"Easy"}),r.jsx("option",{value:"Medium",children:"Medium"}),r.jsx("option",{value:"Hard",children:"Hard"})]}),r.jsx(et,{size:16})]}),r.jsxs(_c,{children:[r.jsx(Ct,{size:16}),r.jsxs("select",{value:S,onChange:te=>w(te.target.value),children:[r.jsx("option",{value:"all",children:"All Status"}),r.jsx("option",{value:"Published",children:"Published"}),r.jsx("option",{value:"Draft",children:"Draft"})]}),r.jsx(et,{size:16})]}),(g!=="all"||m!=="all"||x!=="all"||S!=="all"||u)&&r.jsxs(Y9,{onClick:q,children:[r.jsx(Me,{size:16}),"Clear"]})]})})}),r.jsxs(V9,{children:[r.jsx(G9,{children:r.jsxs(I9,{children:[r.jsx(X9,{children:r.jsxs("tr",{children:[r.jsx(Bn,{children:"Question"}),r.jsx(Bn,{children:"Type"}),r.jsx(Bn,{children:"Subject"}),r.jsx(Bn,{children:"Module"}),r.jsx(Bn,{children:"Difficulty"}),r.jsx(Bn,{children:"Points"}),r.jsx(Bn,{children:"Status"}),r.jsx(Bn,{style:{textAlign:"right"},children:"Actions"})]})}),r.jsx(Z9,{children:l.length>0?l.map(te=>r.jsxs(ex,{onContextMenu:oe=>L(oe,te),children:[r.jsx(Jr,{children:r.jsxs(J9,{children:[r.jsx(W9,{children:te.question}),r.jsxs(eE,{children:[r.jsx("span",{children:te.topic}),r.jsx("span",{children:"•"}),r.jsxs("span",{children:["Used ",te.lastUsed]})]})]})}),r.jsx(Jr,{children:r.jsx(tE,{type:te.type,children:te.type})}),r.jsx(Jr,{children:r.jsx(aE,{children:te.subject})}),r.jsx(Jr,{children:r.jsx(iE,{children:te.module})}),r.jsx(Jr,{children:r.jsxs(rE,{difficulty:te.difficulty,children:[RE(te.difficulty),te.difficulty]})}),r.jsx(Jr,{children:r.jsxs(nE,{children:[te.points," pts"]})}),r.jsx(Jr,{children:r.jsxs(oE,{status:te.status,children:[DE(te.status),te.status]})}),r.jsx(Jr,{children:r.jsxs(lE,{children:[r.jsx(sE,{onClick:()=>ne(te.id),title:"Edit question",children:r.jsx(an,{size:16})}),r.jsx(pm,{onClick:oe=>L(oe,te),title:"More options",children:r.jsx(zo,{size:16})})]})})]},te.id)):r.jsx(ex,{children:r.jsx(Jr,{colSpan:8,style:{padding:0},children:r.jsx(fE,{children:r.jsxs(hE,{children:[r.jsx(mE,{children:r.jsx(_o,{size:32})}),r.jsx(pE,{children:"No questions found"}),r.jsx(gE,{children:"Try adjusting your filters or create a new question"}),r.jsx(bE,{onClick:q,children:"Clear all filters"})]})})})})})]})}),r.jsxs(cE,{children:[r.jsxs(dE,{children:["Showing ",r.jsx("span",{children:l.length})," of"," ",r.jsx("span",{children:i.length})," questions"]}),r.jsxs(uE,{children:[r.jsx(vl,{disabled:!0,children:r.jsx(yd,{size:16})}),r.jsx(vl,{active:!0,children:"1"}),r.jsx(vl,{children:"2"}),r.jsx(vl,{children:"3"}),r.jsx(vl,{children:r.jsx(jd,{size:16})})]})]})]})]})}),N&&A&&r.jsxs(r.Fragment,{children:[r.jsx(xE,{onClick:B}),r.jsxs(vE,{style:{left:N.x,top:N.y},children:[r.jsxs(yl,{onClick:()=>U(A.id),children:[r.jsx(Ct,{size:16}),"View Question"]}),r.jsxs(yl,{onClick:()=>ne(A.id),children:[r.jsx(an,{size:16}),"Edit Question"]}),r.jsxs(yl,{children:[r.jsx(Ul,{size:16}),"Duplicate"]}),r.jsxs(yl,{children:[r.jsx(bd,{size:16}),"Archive"]}),r.jsx(yE,{}),r.jsxs(yl,{danger:!0,children:[r.jsx($o,{size:16}),"Delete"]})]})]}),T&&r.jsx(jE,{onClick:J,children:r.jsxs(wE,{onClick:te=>te.stopPropagation(),children:[r.jsxs(SE,{children:[r.jsxs(AE,{children:[r.jsx(at,{size:20}),"Create New Question"]}),r.jsx(kE,{onClick:J,children:r.jsx(Me,{size:20})})]}),r.jsxs(CE,{children:[r.jsxs(Bh,{children:[r.jsxs(Un,{children:[r.jsx(Kn,{children:"Question Type *"}),r.jsxs(Uh,{name:"type",value:R.type,onChange:se,children:[r.jsx("option",{value:"MCQ",children:"Multiple Choice (MCQ)"}),r.jsx("option",{value:"Coding",children:"Coding"}),r.jsx("option",{value:"Written",children:"Written"})]})]}),r.jsxs(Un,{children:[r.jsx(Kn,{children:"Difficulty *"}),r.jsxs(Uh,{name:"difficulty",value:R.difficulty,onChange:se,children:[r.jsx("option",{value:"Easy",children:"Easy"}),r.jsx("option",{value:"Medium",children:"Medium"}),r.jsx("option",{value:"Hard",children:"Hard"})]})]})]}),r.jsxs(Bh,{children:[r.jsxs(Un,{children:[r.jsx(Kn,{children:"Subject *"}),r.jsx(Rc,{type:"text",name:"subject",value:R.subject,onChange:se,placeholder:"e.g., OOP, DSA, DBMS"})]}),r.jsxs(Un,{children:[r.jsx(Kn,{children:"Module *"}),r.jsx(Rc,{type:"text",name:"module",value:R.module,onChange:se,placeholder:"e.g., Module 1, Chapter 2"})]})]}),r.jsxs(Bh,{children:[r.jsxs(Un,{children:[r.jsx(Kn,{children:"Topic *"}),r.jsx(Rc,{type:"text",name:"topic",value:R.topic,onChange:se,placeholder:"e.g., Polymorphism, Arrays"})]}),r.jsxs(Un,{children:[r.jsx(Kn,{children:"Points *"}),r.jsx(Rc,{type:"number",name:"points",value:R.points,onChange:se,min:"1",max:"100"})]})]}),r.jsxs(Un,{children:[r.jsx(Kn,{children:"Question Title *"}),r.jsx(tx,{name:"question",value:R.question,onChange:se,placeholder:"Enter your question here..."})]}),R.type==="MCQ"&&r.jsxs(rx,{children:[r.jsx(nx,{children:"Answer Options"}),R.options.map((te,oe)=>r.jsxs(TE,{children:[r.jsx(ME,{type:"radio",name:"correctOption",checked:R.correctOption===oe,onChange:()=>V(oe)}),r.jsx(NE,{type:"text",value:te,onChange:Se=>de(oe,Se.target.value),placeholder:`Option ${oe+1}`}),R.options.length>2&&r.jsx(pm,{onClick:()=>Y(oe),title:"Remove option",hoverColor:"#dc2626",children:r.jsx(Me,{size:14})})]},oe)),r.jsxs(_E,{onClick:I,children:[r.jsx(at,{size:14}),"Add Option"]})]}),R.type==="Coding"&&r.jsxs(rx,{children:[r.jsx(nx,{children:"Code Template (Optional)"}),r.jsx(tx,{name:"code",value:R.code,onChange:se,placeholder:"Provide starter code if needed...",style:{minHeight:"150px",fontFamily:"monospace"}})]}),r.jsxs(Un,{children:[r.jsx(Kn,{children:"Status"}),r.jsxs(Uh,{name:"status",value:R.status,onChange:se,children:[r.jsx("option",{value:"Draft",children:"Draft"}),r.jsx("option",{value:"Published",children:"Published"})]})]})]}),r.jsxs(EE,{children:[r.jsx(K9,{onClick:J,children:"Cancel"}),r.jsx(W1,{onClick:le,children:"Create Question"})]})]})})]})]})},$E=sn`
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
`,BE=p.div`
  display: flex;
  height: 100vh;
  background-color: #f9fafb;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`,UE=p.div`
  flex: 1;
  overflow: auto;
`,KE=p.div`
  padding: 2rem;
`,LE=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`,PE=p.div`
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
`;const HE=p.div`
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
`,Dc=p.div`
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
`,Oc=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`,zc=p.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,$c=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${n=>n.bg||"#eff6ff"};
  border-radius: 0.5rem;
  color: ${n=>n.color||"#2563eb"};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,Bc=p.div`
  font-size: 1.875rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,Uc=p.div`
  font-size: 0.875rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,qE=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,FE=p.div`
  padding: 1.25rem;
`,QE=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`,YE=p.div`
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
`,VE=p.input`
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
`,Kh=p.div`
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
`,GE=p.button`
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
`,IE=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,XE=p.div`
  overflow-x: auto;
`,ZE=p.table`
  width: 100%;
  border-collapse: collapse;
`,JE=p.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-bottom-color: #4b5563;
  }
`,Ln=p.th`
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
`,WE=p.tbody``,ox=p.tr`
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
`,Wr=p.td`
  padding: 1.25rem 1.5rem;
  font-size: 0.875rem;
  color: #4b5563;
  vertical-align: middle;

  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`,eT=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,tT=p.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  background-color: ${n=>n.color||"#2563eb"};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  flex-shrink: 0;
`,rT=p.div`
  display: flex;
  flex-direction: column;
`,nT=p.span`
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.125rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,oT=p.span`
  font-size: 0.75rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,aT=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-width: 300px;
`,iT=p.div`
  font-weight: 500;
  color: #111827;
  word-break: break-word;
  line-height: 1.4;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,lT=p.div`
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
`,Kl=p.span`
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
`,sT=p(Kl)`
  background-color: ${n=>{switch(n.type){case"MCQ":return"#eff6ff";case"Coding":return"#fef3c7";case"Written":return"#f3e8ff";default:return"#f3f4f6"}}};
  color: ${n=>{switch(n.type){case"MCQ":return"#1e40af";case"Coding":return"#92400e";case"Written":return"#6b21a8";default:return"#374151"}}};
  border-color: ${n=>{switch(n.type){case"MCQ":return"#bfdbfe";case"Coding":return"#fde68a";case"Written":return"#e9d5ff";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>{switch(n.type){case"MCQ":return"rgba(37, 99, 235, 0.2)";case"Coding":return"rgba(245, 158, 11, 0.2)";case"Written":return"rgba(139, 92, 246, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${n=>{switch(n.type){case"MCQ":return"#93c5fd";case"Coding":return"#fcd34d";case"Written":return"#d8b4fe";default:return"#d1d5db"}}};
    border-color: ${n=>{switch(n.type){case"MCQ":return"rgba(37, 99, 235, 0.3)";case"Coding":return"rgba(245, 158, 11, 0.3)";case"Written":return"rgba(139, 92, 246, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,cT=p(Kl)`
  background-color: ${n=>{switch(n.status){case"Accepted":case"Published":return"#ecfdf5";case"Pending":return"#fefce8";case"Rejected":return"#fef2f2";default:return"#f9fafb"}}};
  color: ${n=>{switch(n.status){case"Accepted":case"Published":return"#047857";case"Pending":return"#b45309";case"Rejected":return"#b91c1c";default:return"#374151"}}};
  border-color: ${n=>{switch(n.status){case"Accepted":case"Published":return"#a7f3d0";case"Pending":return"#fde68a";case"Rejected":return"#fecaca";default:return"#e5e7eb"}}};

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>{switch(n.status){case"Accepted":case"Published":return"rgba(16, 185, 129, 0.2)";case"Pending":return"rgba(245, 158, 11, 0.2)";case"Rejected":return"rgba(220, 38, 38, 0.2)";default:return"rgba(55, 65, 81, 0.5)"}}};
    color: ${n=>{switch(n.status){case"Accepted":case"Published":return"#86efac";case"Pending":return"#fcd34d";case"Rejected":return"#fca5a5";default:return"#d1d5db"}}};
    border-color: ${n=>{switch(n.status){case"Accepted":case"Published":return"rgba(16, 185, 129, 0.3)";case"Pending":return"rgba(245, 158, 11, 0.3)";case"Rejected":return"rgba(220, 38, 38, 0.3)";default:return"rgba(75, 85, 99, 0.5)"}}};
  }
`,dT=p(Kl)`
  background-color: #f3f4f6;
  color: #374151;
  border-color: #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: #d1d5db;
    border-color: rgba(75, 85, 99, 0.5);
  }
`,uT=p(Kl)`
  background-color: #f3f4f6;
  color: #374151;
  border-color: #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: #d1d5db;
    border-color: rgba(75, 85, 99, 0.5);
  }
`,fT=p(Kl)`
  background-color: ${n=>n.points?"#f9fafb":"#f3f4f6"};
  color: ${n=>n.points?"#374151":"#9ca3af"};
  border-color: ${n=>(n.points,"#e5e7eb")};
  font-weight: ${n=>n.points?"600":"400"};

  @media (prefers-color-scheme: dark) {
    background-color: ${n=>n.points?"rgba(55, 65, 81, 0.5)":"rgba(55, 65, 81, 0.3)"};
    color: ${n=>n.points?"#d1d5db":"#6b7280"};
    border-color: ${n=>n.points?"rgba(75, 85, 99, 0.5)":"rgba(75, 85, 99, 0.3)"};
  }
`,hT=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`,Md=p.button`
  padding: 0.5rem;
  color: #6b7280;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${n=>n.hoverBg||"#f3f4f6"};
    color: ${n=>n.hoverColor||"#374151"};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    &:hover {
      background-color: ${n=>n.hoverBg||"#4b5563"};
      color: ${n=>n.hoverColor||"white"};
    }
  }
`,mT=p(Md)`
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
`,pT=p(Md)`
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
`,gT=p(Md)`
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
`,bT=p.div`
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
`,xT=p.div`
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
`,vT=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,jl=p.button`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: ${n=>n.active?"white":"#4b5563"};
  background-color: ${n=>n.active?"#2563eb":"white"};
  border: 1px solid ${n=>n.active?"#2563eb":"#e5e7eb"};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${n=>n.active?"#1d4ed8":"#f9fafb"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (prefers-color-scheme: dark) {
    color: ${n=>n.active?"white":"#d1d5db"};
    background-color: ${n=>n.active?"#2563eb":"#374151"};
    border-color: ${n=>n.active?"#2563eb":"#4b5563"};

    &:hover {
      background-color: ${n=>n.active?"#1d4ed8":"#4b5563"};
    }
  }
`,yT=p.div`
  padding: 3rem 1.5rem;
  text-align: center;
`,jT=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`,wT=p.div`
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
`,ST=p.p`
  color: #6b7280;
  font-weight: 500;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,AT=p.p`
  font-size: 0.875rem;
  color: #9ca3af;

  @media (prefers-color-scheme: dark) {
    color: #6b7280;
  }
`,kT=p.button`
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
`,CT=p.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`,ET=p.div`
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
`,Ra=p.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: ${n=>n.danger?"#dc2626":"#374151"};
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${n=>n.danger?"#fef2f2":"#f9fafb"};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${n=>n.danger?"#dc2626":"#6b7280"};
  }

  @media (prefers-color-scheme: dark) {
    color: ${n=>n.danger?"#f87171":"#e5e7eb"};

    &:hover {
      background-color: ${n=>n.danger?"rgba(220, 38, 38, 0.2)":"#374151"};
    }

    svg {
      color: ${n=>n.danger?"#f87171":"#9ca3af"};
    }
  }
`,TT=p.div`
  height: 1px;
  background-color: #f3f4f6;
  margin: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #4b5563;
  }
`,NT=n=>{switch(n){case"Accepted":case"Published":return r.jsx(ft,{size:12});case"Pending":return r.jsx(Zt,{size:12});case"Rejected":return r.jsx(Me,{size:12});default:return r.jsx(Zt,{size:12})}},MT=n=>{const i=["#2563eb","#7c3aed","#0891b2","#059669","#b45309","#dc2626"],s=n.length%i.length;return i[s]},_T=n=>n.split(" ").map(i=>i[0]).join("").substring(0,2).toUpperCase(),RT=[{id:1,student:"Rahul Sharma",email:"rahul.sharma@example.com",question:"Explain the difference between stack and queue with real-world examples",type:"Written",subject:"DSA",module:"Module 1",status:"Pending",points:null,submittedDate:"2026-02-13",submittedTime:"2 hours ago"},{id:2,student:"Priya Patel",email:"priya.patel@example.com",question:"Which data structure is best for implementing undo functionality in text editors?",type:"MCQ",subject:"DSA",module:"Module 3",status:"Pending",points:null,submittedDate:"2026-02-13",submittedTime:"3 hours ago"},{id:3,student:"Karthik Nair",email:"karthik.nair@example.com",question:"Write a function to detect cycle in a linked list",type:"Coding",subject:"DSA",module:"Module 2",status:"Accepted",points:15,submittedDate:"2026-02-12",submittedTime:"1 day ago"},{id:4,student:"Meera Joshi",email:"meera.joshi@example.com",question:"What is the time complexity of merge sort and why?",type:"Written",subject:"DSA",module:"Module 4",status:"Published",points:20,submittedDate:"2026-02-11",submittedTime:"2 days ago"},{id:5,student:"Anjali Gupta",email:"anjali.gupta@example.com",question:"Explain normalization with examples up to 3NF",type:"Written",subject:"DBMS",module:"Module 2",status:"Rejected",points:null,submittedDate:"2026-02-10",submittedTime:"3 days ago"},{id:6,student:"Vikram Singh",email:"vikram.singh@example.com",question:"Implement a priority queue using a heap",type:"Coding",subject:"DSA",module:"Module 5",status:"Pending",points:null,submittedDate:"2026-02-09",submittedTime:"4 days ago"}],DT=()=>{const n=Jt(),[i,s]=C.useState([]),[l,d]=C.useState([]),[u,h]=C.useState(""),[g,b]=C.useState("all"),[m,v]=C.useState("all"),[x,j]=C.useState("all"),[S,w]=C.useState(null),[N,E]=C.useState(null);C.useEffect(()=>{s(RT)},[]),C.useEffect(()=>{let D=i;if(g!=="all"&&(D=D.filter(J=>J.status===g)),m!=="all"&&(D=D.filter(J=>J.subject===m)),x!=="all"&&(D=D.filter(J=>J.type===x)),u){const J=u.toLowerCase();D=D.filter(se=>se.student.toLowerCase().includes(J)||se.email.toLowerCase().includes(J)||se.question.toLowerCase().includes(J)||se.subject.toLowerCase().includes(J))}d(D)},[i,g,m,x,u]);const A=(D,J)=>{D.preventDefault(),w({x:D.clientX,y:D.clientY}),E(J)},M=()=>{w(null),E(null)},T=()=>{b("all"),v("all"),j("all"),h("")},_=D=>{n(`/student-questions/${D}`),M()},R=D=>{console.log("Approve question:",D),M()},$=D=>{console.log("Reject question:",D),M()},L=i.length,B=i.filter(D=>D.status==="Pending").length,q=i.filter(D=>D.status==="Accepted"||D.status==="Published").length,ne=i.filter(D=>D.status==="Rejected").length,U=[...new Set(i.map(D=>D.subject))];return r.jsxs(r.Fragment,{children:[r.jsx($E,{}),r.jsxs(BE,{children:[r.jsx(UE,{children:r.jsxs(KE,{children:[r.jsx(LE,{children:r.jsxs(PE,{children:[r.jsx("h1",{children:"Student Submitted Questions"}),r.jsx("p",{children:"Review, refine, and approve student-submitted questions"})]})}),r.jsxs(HE,{children:[r.jsxs(Dc,{children:[r.jsxs(Oc,{children:[r.jsx(zc,{children:"Total Submissions"}),r.jsx($c,{bg:"#eff6ff",color:"#2563eb",children:r.jsx(Et,{})})]}),r.jsx(Bc,{children:L}),r.jsx(Uc,{children:"Awaiting review"})]}),r.jsxs(Dc,{children:[r.jsxs(Oc,{children:[r.jsx(zc,{children:"Pending"}),r.jsx($c,{bg:"#fefce8",color:"#f59e0b",children:r.jsx(Zt,{})})]}),r.jsx(Bc,{children:B}),r.jsx(Uc,{children:"Need attention"})]}),r.jsxs(Dc,{children:[r.jsxs(Oc,{children:[r.jsx(zc,{children:"Accepted"}),r.jsx($c,{bg:"#ecfdf5",color:"#10b981",children:r.jsx(ft,{})})]}),r.jsx(Bc,{children:q}),r.jsx(Uc,{children:"Ready to publish"})]}),r.jsxs(Dc,{children:[r.jsxs(Oc,{children:[r.jsx(zc,{children:"Rejected"}),r.jsx($c,{bg:"#fef2f2",color:"#ef4444",children:r.jsx(Me,{})})]}),r.jsx(Bc,{children:ne}),r.jsx(Uc,{children:"Needs revision"})]})]}),r.jsx(qE,{children:r.jsx(FE,{children:r.jsxs(QE,{children:[r.jsxs(YE,{children:[r.jsx(cn,{size:16}),r.jsx(VE,{type:"text",placeholder:"Search questions or students...",value:u,onChange:D=>h(D.target.value)})]}),r.jsxs(Kh,{children:[r.jsx(vr,{size:16}),r.jsxs("select",{value:g,onChange:D=>b(D.target.value),children:[r.jsx("option",{value:"all",children:"All Status"}),r.jsx("option",{value:"Pending",children:"Pending"}),r.jsx("option",{value:"Accepted",children:"Accepted"}),r.jsx("option",{value:"Published",children:"Published"}),r.jsx("option",{value:"Rejected",children:"Rejected"})]}),r.jsx(et,{size:16})]}),r.jsxs(Kh,{children:[r.jsx(xd,{size:16}),r.jsxs("select",{value:m,onChange:D=>v(D.target.value),children:[r.jsx("option",{value:"all",children:"All Subjects"}),U.map(D=>r.jsx("option",{value:D,children:D},D))]}),r.jsx(et,{size:16})]}),r.jsxs(Kh,{children:[r.jsx(Et,{size:16}),r.jsxs("select",{value:x,onChange:D=>j(D.target.value),children:[r.jsx("option",{value:"all",children:"All Types"}),r.jsx("option",{value:"MCQ",children:"MCQ"}),r.jsx("option",{value:"Coding",children:"Coding"}),r.jsx("option",{value:"Written",children:"Written"})]}),r.jsx(et,{size:16})]}),(g!=="all"||m!=="all"||x!=="all"||u)&&r.jsxs(GE,{onClick:T,children:[r.jsx(Me,{size:16}),"Clear"]})]})})}),r.jsxs(IE,{children:[r.jsx(XE,{children:r.jsxs(ZE,{children:[r.jsx(JE,{children:r.jsxs("tr",{children:[r.jsx(Ln,{children:"Student"}),r.jsx(Ln,{children:"Question"}),r.jsx(Ln,{children:"Subject"}),r.jsx(Ln,{children:"Module"}),r.jsx(Ln,{children:"Type"}),r.jsx(Ln,{children:"Status"}),r.jsx(Ln,{children:"Points"}),r.jsx(Ln,{style:{textAlign:"right"},children:"Actions"})]})}),r.jsx(WE,{children:l.length>0?l.map(D=>r.jsxs(ox,{onContextMenu:J=>A(J,D),children:[r.jsx(Wr,{children:r.jsxs(eT,{children:[r.jsx(tT,{color:MT(D.student),children:_T(D.student)}),r.jsxs(rT,{children:[r.jsx(nT,{children:D.student}),r.jsx(oT,{children:D.email})]})]})}),r.jsx(Wr,{children:r.jsxs(aT,{children:[r.jsx(iT,{children:D.question}),r.jsxs(lT,{children:[r.jsx(Zt,{size:10}),r.jsx("span",{children:D.submittedTime})]})]})}),r.jsx(Wr,{children:r.jsx(dT,{children:D.subject})}),r.jsx(Wr,{children:r.jsx(uT,{children:D.module})}),r.jsx(Wr,{children:r.jsx(sT,{type:D.type,children:D.type})}),r.jsx(Wr,{children:r.jsxs(cT,{status:D.status,children:[NT(D.status),D.status]})}),r.jsx(Wr,{children:r.jsx(fT,{points:D.points,children:D.points?`✓ ${D.points}`:"—"})}),r.jsx(Wr,{children:r.jsxs(hT,{children:[r.jsx(gT,{onClick:()=>_(D.id),title:"View question",children:r.jsx(Ct,{size:16})}),D.status==="Pending"&&r.jsxs(r.Fragment,{children:[r.jsx(mT,{onClick:()=>R(D.id),title:"Approve question",children:r.jsx(b1,{size:16})}),r.jsx(pT,{onClick:()=>$(D.id),title:"Reject question",children:r.jsx(g1,{size:16})})]}),r.jsx(Md,{onClick:J=>A(J,D),title:"More options",children:r.jsx(zo,{size:16})})]})})]},D.id)):r.jsx(ox,{children:r.jsx(Wr,{colSpan:8,style:{padding:0},children:r.jsx(yT,{children:r.jsxs(jT,{children:[r.jsx(wT,{children:r.jsx(Et,{size:32})}),r.jsx(ST,{children:"No questions found"}),r.jsx(AT,{children:"Try adjusting your filters"}),r.jsx(kT,{onClick:T,children:"Clear all filters"})]})})})})})]})}),r.jsxs(bT,{children:[r.jsxs(xT,{children:["Showing ",r.jsx("span",{children:l.length})," of"," ",r.jsx("span",{children:i.length})," questions"]}),r.jsxs(vT,{children:[r.jsx(jl,{disabled:!0,children:r.jsx(yd,{size:16})}),r.jsx(jl,{active:!0,children:"1"}),r.jsx(jl,{children:"2"}),r.jsx(jl,{children:"3"}),r.jsx(jl,{children:r.jsx(jd,{size:16})})]})]})]})]})}),S&&N&&r.jsxs(r.Fragment,{children:[r.jsx(CT,{onClick:M}),r.jsxs(ET,{style:{left:S.x,top:S.y},children:[r.jsxs(Ra,{onClick:()=>_(N.id),children:[r.jsx(Ct,{size:16}),"View Question"]}),N.status==="Pending"&&r.jsxs(r.Fragment,{children:[r.jsxs(Ra,{onClick:()=>R(N.id),children:[r.jsx(b1,{size:16}),"Approve"]}),r.jsxs(Ra,{onClick:()=>$(N.id),children:[r.jsx(g1,{size:16}),"Reject"]})]}),r.jsxs(Ra,{children:[r.jsx(Av,{size:16}),"Send Feedback"]}),r.jsxs(Ra,{children:[r.jsx(an,{size:16}),"Edit Question"]}),r.jsx(TT,{}),r.jsxs(Ra,{danger:!0,children:[r.jsx($o,{size:16}),"Delete"]})]})]})]})]})},OT=p.div`
  padding: 2rem;
  background-color: #f9fafb;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`,zT=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`,$T=p.div`
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
`,BT=p.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,UT=p.button`
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
`;p.div`
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
`;p.div`
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
`;p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;p.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  color: #6b7280;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    color: #9ca3af;
  }
`;p.div`
  font-size: 1.875rem;
  font-weight: 600;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;const KT=p.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`,LT=p.div`
  padding: 1.25rem;
`,PT=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`,HT=p.div`
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
`,qT=p.input`
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
`,FT=p.div`
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
`,QT=p.button`
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
`,YT=p.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,VT=p.div`
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
`,GT=p.div`
  padding: 1.5rem;
  background-color: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-bottom-color: #4b5563;
  }
`,IT=p.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,XT=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #e5e7eb;
  border-radius: 9999px;
  color: #6b7280;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #4b5563;
    color: #9ca3af;
  }
`,ZT=p.div`
  padding: 1.5rem;
`,ax=p.h4`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
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
    color: #e5e7eb;

    svg {
      color: #9ca3af;
    }
  }
`,JT=p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Kc=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Lc=p.span`
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
`,Pc=p.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  line-height: 1.2;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,WT=p.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1.5rem;
  margin-top: 0.5rem;

  @media (prefers-color-scheme: dark) {
    border-top-color: #374151;
  }
`,eN=p.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
`,Lh=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Ph=p.span`
  font-size: 0.7rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`,Hh=p.span`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    color: #6b7280;
  }

  @media (prefers-color-scheme: dark) {
    color: white;

    svg {
      color: #9ca3af;
    }
  }
`,tN=p.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: white;
  color: #374151;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

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
`,ix=p.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,lx=p.div`
  background-color: white;
  border-radius: 1rem;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
  }
`,sx=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }
`,cx=p.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`,dx=p.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #6b7280;
  transition: all 0.2s;

  &:hover {
    background-color: #f3f4f6;
    color: #111827;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    &:hover {
      background-color: #374151;
      color: white;
    }
  }
`,ux=p.div`
  padding: 1.5rem;
`,dt=p.div`
  margin-bottom: 1.25rem;
`,ut=p.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;

  @media (prefers-color-scheme: dark) {
    color: #e5e7eb;
  }
`,wt=p.input`
  width: 100%;
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;
  color: #111827;

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
`,fx=p.select`
  width: 100%;
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #111827;
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
`;p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;const hx=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.5rem;
  border-top: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-top-color: #374151;
  }
`,mx=p.button`
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

  &:hover {
    background-color: #1d4ed8;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`,px=p.button`
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

  &:hover {
    background-color: #f9fafb;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    color: #e5e7eb;
    border-color: #4b5563;

    &:hover {
      background-color: #4b5563;
    }
  }
`,rN=[{id:"free",name:"Free",icon:Fn,quotas:{downloads:5,notes:3,questionPapers:2,freeQuota:0},points:{perTest:5,perUpload:2,bonus:0}},{id:"pro",name:"Pro",icon:Vn,quotas:{downloads:50,notes:30,questionPapers:20,freeQuota:10},points:{perTest:10,perUpload:5,bonus:50}},{id:"max",name:"Max",icon:nd,quotas:{downloads:200,notes:100,questionPapers:80,freeQuota:30},points:{perTest:15,perUpload:8,bonus:100}},{id:"ultra",name:"Ultra",icon:Mo,quotas:{downloads:1499,notes:100,questionPapers:80,freeQuota:50},points:{perTest:25,perUpload:15,bonus:200}}],nN=()=>{var ne,U;const[n,i]=C.useState(""),[s,l]=C.useState("all"),[d,u]=C.useState(rN),[h,g]=C.useState(!1),[b,m]=C.useState(!1),[v,x]=C.useState(null),[j,S]=C.useState({name:"",icon:Fn,quotas:{downloads:0,notes:0,questionPapers:0,freeQuota:0},points:{perTest:0,perUpload:0,bonus:0}}),[w,N]=C.useState({name:"",icon:Vn,quotas:{downloads:0,notes:0,questionPapers:0,freeQuota:0},points:{perTest:0,perUpload:0,bonus:0}}),E=[{name:"Zap",icon:Fn},{name:"Star",icon:Vn},{name:"Crown",icon:nd},{name:"Award",icon:Mo}],A=D=>{x(D),S({name:D.name,icon:D.icon,quotas:{...D.quotas},points:{...D.points}}),g(!0)},M=()=>{const D=d.map(J=>J.id===v.id?{...J,...j,id:J.id}:J);u(D),g(!1),x(null)},T=()=>{N({name:"",icon:Vn,quotas:{downloads:0,notes:0,questionPapers:0,freeQuota:0},points:{perTest:0,perUpload:0,bonus:0}}),m(!0)},_=()=>{const D={id:`plan-${Date.now()}`,...w};u([...d,D]),m(!1)},R=(D,J,se)=>{const{value:de}=D.target;J==="edit"?S(V=>({...V,quotas:{...V.quotas,[se]:parseInt(de)||0}})):N(V=>({...V,quotas:{...V.quotas,[se]:parseInt(de)||0}}))},$=(D,J,se)=>{const{value:de}=D.target;J==="edit"?S(V=>({...V,points:{...V.points,[se]:parseInt(de)||0}})):N(V=>({...V,points:{...V.points,[se]:parseInt(de)||0}}))},L=(D,J)=>{const se=E.find(de=>de.name===D.target.value);J==="edit"?S(de=>({...de,icon:se.icon})):N(de=>({...de,icon:se.icon}))},B=(D,J)=>{const{value:se}=D.target;J==="edit"?S(de=>({...de,name:se})):N(de=>({...de,name:se}))},q=d.filter(D=>D.name.toLowerCase().includes(n.toLowerCase()));return r.jsxs(OT,{children:[r.jsxs(zT,{children:[r.jsxs($T,{children:[r.jsx("h1",{children:"Subscription Plans"}),r.jsx("p",{children:"Manage pricing, quotas, and point rewards for each plan"})]}),r.jsx(BT,{children:r.jsxs(UT,{onClick:T,children:[r.jsx(at,{size:16}),"New Plan"]})})]}),r.jsx(KT,{children:r.jsx(LT,{children:r.jsxs(PT,{children:[r.jsxs(HT,{children:[r.jsx(cn,{size:16}),r.jsx(qT,{type:"text",placeholder:"Search plans...",value:n,onChange:D=>i(D.target.value)})]}),r.jsxs(FT,{children:[r.jsx(vr,{size:16}),r.jsxs("select",{value:s,onChange:D=>l(D.target.value),children:[r.jsx("option",{value:"all",children:"All Plans"}),r.jsx("option",{value:"active",children:"Active"}),r.jsx("option",{value:"inactive",children:"Inactive"})]}),r.jsx(et,{size:16})]}),n&&r.jsxs(QT,{onClick:()=>i(""),children:[r.jsx(Me,{size:16}),"Clear"]})]})})}),r.jsx(YT,{children:q.map(D=>{const J=D.icon;return r.jsxs(VT,{children:[r.jsxs(GT,{children:[r.jsx(IT,{children:D.name}),r.jsx(XT,{children:r.jsx(J,{})})]}),r.jsxs(ZT,{children:[r.jsxs(ax,{children:[r.jsx(on,{size:16}),"Downloads & Notes"]}),r.jsxs(JT,{children:[r.jsxs(Kc,{children:[r.jsxs(Lc,{children:[r.jsx(on,{size:12}),"Downloads"]}),r.jsx(Pc,{children:D.quotas.downloads})]}),r.jsxs(Kc,{children:[r.jsxs(Lc,{children:[r.jsx(Et,{size:12}),"Notes"]}),r.jsx(Pc,{children:D.quotas.notes})]}),r.jsxs(Kc,{children:[r.jsxs(Lc,{children:[r.jsx(_o,{size:12}),"Question Papers"]}),r.jsx(Pc,{children:D.quotas.questionPapers})]}),r.jsxs(Kc,{children:[r.jsxs(Lc,{children:[r.jsx(Mo,{size:12}),"Free Quota"]}),r.jsx(Pc,{children:D.quotas.freeQuota})]})]}),r.jsxs(WT,{children:[r.jsxs(ax,{children:[r.jsx(Fn,{size:16}),"Points"]}),r.jsxs(eN,{children:[r.jsxs(Lh,{children:[r.jsx(Ph,{children:"Per Test"}),r.jsxs(Hh,{children:[r.jsx(Fn,{size:14}),D.points.perTest," pts"]})]}),r.jsxs(Lh,{children:[r.jsx(Ph,{children:"Per Upload"}),r.jsxs(Hh,{children:[r.jsx(Fn,{size:14}),D.points.perUpload," pts"]})]}),r.jsxs(Lh,{children:[r.jsx(Ph,{children:"Bonus"}),r.jsxs(Hh,{children:[r.jsx(Mo,{size:14}),D.points.bonus," pts"]})]})]})]}),r.jsxs(tN,{onClick:()=>A(D),children:[r.jsx(an,{size:16}),"Edit Plan"]})]})]},D.id)})}),h&&r.jsx(ix,{onClick:()=>g(!1),children:r.jsxs(lx,{onClick:D=>D.stopPropagation(),children:[r.jsxs(sx,{children:[r.jsx(cx,{children:"Edit Plan"}),r.jsx(dx,{onClick:()=>g(!1),children:r.jsx(Me,{size:20})})]}),r.jsxs(ux,{children:[r.jsxs(dt,{children:[r.jsx(ut,{children:"Plan Name"}),r.jsx(wt,{type:"text",value:j.name,onChange:D=>B(D,"edit")})]}),r.jsxs(dt,{children:[r.jsx(ut,{children:"Plan Icon"}),r.jsx(fx,{value:((ne=E.find(D=>D.icon===j.icon))==null?void 0:ne.name)||"Zap",onChange:D=>L(D,"edit"),children:E.map(D=>r.jsx("option",{value:D.name,children:D.name},D.name))})]}),r.jsxs(dt,{children:[r.jsx(ut,{children:"Downloads"}),r.jsx(wt,{type:"number",value:j.quotas.downloads,onChange:D=>R(D,"edit","downloads")})]}),r.jsxs(dt,{children:[r.jsx(ut,{children:"Notes"}),r.jsx(wt,{type:"number",value:j.quotas.notes,onChange:D=>R(D,"edit","notes")})]}),r.jsxs(dt,{children:[r.jsx(ut,{children:"Question Papers"}),r.jsx(wt,{type:"number",value:j.quotas.questionPapers,onChange:D=>R(D,"edit","questionPapers")})]}),r.jsxs(dt,{children:[r.jsx(ut,{children:"Free Quota"}),r.jsx(wt,{type:"number",value:j.quotas.freeQuota,onChange:D=>R(D,"edit","freeQuota")})]}),r.jsxs(dt,{children:[r.jsx(ut,{children:"Points per Test"}),r.jsx(wt,{type:"number",value:j.points.perTest,onChange:D=>$(D,"edit","perTest")})]}),r.jsxs(dt,{children:[r.jsx(ut,{children:"Points per Upload"}),r.jsx(wt,{type:"number",value:j.points.perUpload,onChange:D=>$(D,"edit","perUpload")})]}),r.jsxs(dt,{children:[r.jsx(ut,{children:"Bonus Points"}),r.jsx(wt,{type:"number",value:j.points.bonus,onChange:D=>$(D,"edit","bonus")})]})]}),r.jsxs(hx,{children:[r.jsx(px,{onClick:()=>g(!1),children:"Cancel"}),r.jsx(mx,{onClick:M,children:"Save Changes"})]})]})}),b&&r.jsx(ix,{onClick:()=>m(!1),children:r.jsxs(lx,{onClick:D=>D.stopPropagation(),children:[r.jsxs(sx,{children:[r.jsx(cx,{children:"Create New Plan"}),r.jsx(dx,{onClick:()=>m(!1),children:r.jsx(Me,{size:20})})]}),r.jsxs(ux,{children:[r.jsxs(dt,{children:[r.jsx(ut,{children:"Plan Name"}),r.jsx(wt,{type:"text",value:w.name,onChange:D=>B(D,"new"),placeholder:"Enter plan name"})]}),r.jsxs(dt,{children:[r.jsx(ut,{children:"Plan Icon"}),r.jsx(fx,{value:((U=E.find(D=>D.icon===w.icon))==null?void 0:U.name)||"Star",onChange:D=>L(D,"new"),children:E.map(D=>r.jsx("option",{value:D.name,children:D.name},D.name))})]}),r.jsxs(dt,{children:[r.jsx(ut,{children:"Downloads"}),r.jsx(wt,{type:"number",value:w.quotas.downloads,onChange:D=>R(D,"new","downloads")})]}),r.jsxs(dt,{children:[r.jsx(ut,{children:"Notes"}),r.jsx(wt,{type:"number",value:w.quotas.notes,onChange:D=>R(D,"new","notes")})]}),r.jsxs(dt,{children:[r.jsx(ut,{children:"Question Papers"}),r.jsx(wt,{type:"number",value:w.quotas.questionPapers,onChange:D=>R(D,"new","questionPapers")})]}),r.jsxs(dt,{children:[r.jsx(ut,{children:"Free Quota"}),r.jsx(wt,{type:"number",value:w.quotas.freeQuota,onChange:D=>R(D,"new","freeQuota")})]}),r.jsxs(dt,{children:[r.jsx(ut,{children:"Points per Test"}),r.jsx(wt,{type:"number",value:w.points.perTest,onChange:D=>$(D,"new","perTest")})]}),r.jsxs(dt,{children:[r.jsx(ut,{children:"Points per Upload"}),r.jsx(wt,{type:"number",value:w.points.perUpload,onChange:D=>$(D,"new","perUpload")})]}),r.jsxs(dt,{children:[r.jsx(ut,{children:"Bonus Points"}),r.jsx(wt,{type:"number",value:w.points.bonus,onChange:D=>$(D,"new","bonus")})]})]}),r.jsxs(hx,{children:[r.jsx(px,{onClick:()=>m(!1),children:"Cancel"}),r.jsx(mx,{onClick:_,children:"Create Plan"})]})]})})]})},oN=()=>r.jsxs(r.Fragment,{children:[r.jsxs(Zj,{children:[r.jsx(Je,{path:"/login",element:r.jsx(wA,{})}),r.jsx(Je,{path:"/register",element:r.jsx(SA,{})}),r.jsxs(Je,{element:r.jsx(aN,{}),children:[r.jsx(Je,{path:"",element:r.jsx(O1,{})}),r.jsx(Je,{path:"/dashboard",element:r.jsx(O1,{})}),r.jsx(Je,{path:"/user-management",element:r.jsx(Dk,{})}),r.jsx(Je,{path:"/user-details/:id",element:r.jsx(Ok,{})}),r.jsx(Je,{path:"/edit-profile/:id",element:r.jsx($4,{})}),r.jsx(Je,{path:"/payments",element:r.jsx(kC,{})}),r.jsx(Je,{path:"/academic-settings",element:r.jsx(R6,{})}),r.jsx(Je,{path:"/test-settings",element:r.jsx(zA,{})}),r.jsx(Je,{path:"/point-settings",element:r.jsx(qA,{})}),r.jsx(Je,{path:"/system-settings",element:r.jsx(C7,{})}),r.jsx(Je,{path:"/modules-tests",element:r.jsx(p4,{})}),r.jsx(Je,{path:"/documents",element:r.jsx($8,{})}),r.jsx(Je,{path:"/audit-logs",element:r.jsx(_9,{})}),r.jsx(Je,{path:"/question-bank",element:r.jsx(zE,{})}),r.jsx(Je,{path:"/student-submitted",element:r.jsx(DT,{})}),r.jsx(Je,{path:"/subscription",element:r.jsx(nN,{})})]})]}),r.jsx(g4,{})]});function aN(){const{menuToggle:n,sidebariconHover:i}=C.useContext(Ol),{isAuthenticated:s}=Mm();return s?r.jsx(r.Fragment,{children:r.jsxs("div",{id:"main-wrapper",className:`show ${i?"iconhover-toggle":""} ${n?"menu-toggle":""}`,children:[r.jsx(yA,{}),r.jsx("div",{className:"content-body",style:{minHeight:"849px"},children:r.jsx("div",{className:"container-fluid",children:r.jsx(Ij,{})})}),r.jsx(jA,{})]})}):r.jsx(Gj,{to:"/login"})}function iN(){return r.jsx(r.Fragment,{children:r.jsx(oN,{})})}let Ao="ltr";const lN=[{typography:"poppins",version:"light",layout:"vertical",headerBg:"color_1",navheaderBg:"color_1",sidebarBg:"color_1",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"full",direction:Ao},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_1",headerBg:"color_1",sidebarStyle:"full",sidebarBg:"color_1",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_1",direction:Ao},{typography:"poppins",version:"light",layout:"horizontal",navheaderBg:"color_1",headerBg:"color_1",sidebarStyle:"modern",sidebarBg:"color_3",sidebarPosition:"static",headerPosition:"fixed",containerLayout:"wide",primary:"color_1",direction:Ao},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_1",headerBg:"color_10",sidebarStyle:"compact",sidebarBg:"color_1",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_10",direction:Ao},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_1",headerBg:"color_1",sidebarStyle:"modern",sidebarBg:"color_15",sidebarPosition:"static",headerPosition:"fixed",containerLayout:"wide",primary:"color_15",direction:Ao},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_13",headerBg:"color_1",sidebarStyle:"icon-hover",sidebarBg:"color_13",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_13",direction:Ao},{typography:"poppins",version:"light",layout:"horizontal",navheaderBg:"color_12",headerBg:"color_12",sidebarStyle:"full",sidebarBg:"color_1",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_1",direction:Ao}],sN=n=>{const[i,s]=C.useState({value:"full",label:"Full"}),[l,d]=C.useState({value:"fixed",label:"Fixed"}),[u,h]=C.useState({value:"fixed",label:"Fixed"}),[g,b]=C.useState({value:"vertical",label:"Vertical"}),[m,v]=C.useState({value:"ltr",label:"LTR"}),[x,j]=C.useState("color_1"),[S,w]=C.useState("color_1"),[N,E]=C.useState("color_1"),[A,M]=C.useState("color_1"),[T,_]=C.useState(!1),[R,$]=C.useState(!1),[L,B]=C.useState(!1),[q,ne]=C.useState({value:"light",label:"Light"}),[U,D]=C.useState({value:"wide-boxed",label:"Wide Boxed"}),J=document.querySelector("body"),se=[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],de=[{value:"compact",label:"Compact"},{value:"full",label:"Full"},{value:"mini",label:"Mini"},{value:"modern",label:"Modern"},{value:"overlay",label:"Overlay"},{value:"icon-hover",label:"Icon-hover"}],V=[{value:"light",label:"Light"},{value:"dark",label:"Dark"}],I=[{value:"fixed",label:"Fixed"},{value:"static",label:"Static"}],Y=[{value:"fixed",label:"Fixed"},{value:"static",label:"Static"}],le=[{value:"wide",label:"Wide"},{value:"boxed",label:"Boxed"},{value:"wide-boxed",label:"Wide Boxed"}],z=ce=>{s(ce),J.setAttribute("data-sidebar-style",ce.value)},W=ce=>{b(ce),J.setAttribute("data-layout",ce.value)},ae=ce=>{v(ce),J.setAttribute("direction",ce.value)},ie=ce=>{j(ce),J.setAttribute("data-primary",ce)},he=ce=>{w(ce),J.setAttribute("data-nav-headerbg",ce)},te=()=>{_(!T)},oe=ce=>{E(ce),J.setAttribute("data-headerbg",ce)},Se=ce=>{v(ce),J.setAttribute("direction",ce.value)},ve=ce=>{M(ce),J.setAttribute("data-sidebarbg",ce)},tt=()=>{$(!R)},Sr=ce=>{d(ce),J.setAttribute("data-sidebar-position",ce.value)},Ut=ce=>{d(ce),J.setAttribute("data-sidebar-position",ce.value)},xt=ce=>{h(ce),J.setAttribute("data-header-position",ce.value)},zr=()=>{i.value==="overly"?B(!0):B(!1)},fr=ce=>{J.setAttribute("data-theme-version",ce.value),ne(ce)},Ar=ce=>{D(ce),J.setAttribute("data-container",ce.value),ce.value==="boxed"&&z({value:"overlay",label:"Overlay"})},Bd=(ce,In)=>{var ht={},Tt=lN[ce];J.setAttribute("data-typography",Tt.typography),ht.value=Tt.version,fr(ht),ht.value=Tt.layout,W(ht),ie(Tt.primary),he(Tt.navheaderBg),oe(Tt.headerBg),ht.value=Tt.sidebarStyle,z(ht),ve(Tt.sidebarBg),ht.value=Tt.sidebarPosition,Ut(ht),ht.value=Tt.headerPosition,xt(ht),ht.value=Tt.containerLayout,Ar(ht),ht.value=In,Se(ht)};return C.useEffect(()=>{const ce=document.querySelector("body");ce.setAttribute("data-typography","poppins"),ce.setAttribute("data-theme-version","light"),ce.setAttribute("data-layout","vertical"),ce.setAttribute("data-primary","color_1"),ce.setAttribute("data-nav-headerbg","color_1"),ce.setAttribute("data-headerbg","color_1"),ce.setAttribute("data-sidebar-style","full"),ce.setAttribute("data-sidebarbg","color_1"),ce.setAttribute("data-primary","color_1"),ce.setAttribute("data-sidebar-position","fixed"),ce.setAttribute("data-header-position","fixed"),ce.setAttribute("data-container","wide"),ce.setAttribute("direction","ltr");let In=()=>{ce.setAttribute("data-sidebar-style","full")};return In(),window.addEventListener("resize",In),()=>window.removeEventListener("resize",In)},[]),r.jsx(Ol.Provider,{value:{body:J,sideBarOption:de,layoutOption:se,sideBarStyle:i,changeSideBarStyle:z,changeSideBarLayout:W,sidebarLayout:g,changeDirection:ae,direction:m,primaryColor:x,changePrimaryColor:ie,navigationHader:S,changeNavigationHader:he,haderColor:N,chnageHaderColor:oe,sidebarColor:A,chnageSidebarColor:ve,ChangeSideBarPostion:Sr,changeSideBarPostion:Ut,sidebarposition:l,headerposition:u,changeHeaderPostion:xt,sidebarpositions:I,headerPositions:Y,iconHover:T,ChangeIconSidebar:te,containerPosition:le,containerPosition_:U,backgroundOption:V,ChangeIconSidebarOne:tt,sidebariconHover:R,menuToggle:L,openMenuToggle:zr,changeBackground:fr,background:q,setDemoTheme:Bd},children:n.children})};function bt(n){return`Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}var cN=typeof Symbol=="function"&&Symbol.observable||"@@observable",gx=cN,qh=()=>Math.random().toString(36).substring(7).split("").join("."),dN={INIT:`@@redux/INIT${qh()}`,REPLACE:`@@redux/REPLACE${qh()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${qh()}`},ld=dN;function uN(n){if(typeof n!="object"||n===null)return!1;let i=n;for(;Object.getPrototypeOf(i)!==null;)i=Object.getPrototypeOf(i);return Object.getPrototypeOf(n)===i||Object.getPrototypeOf(n)===null}function ny(n,i,s){if(typeof n!="function")throw new Error(bt(2));if(typeof i=="function"&&typeof s=="function"||typeof s=="function"&&typeof arguments[3]=="function")throw new Error(bt(0));if(typeof i=="function"&&typeof s>"u"&&(s=i,i=void 0),typeof s<"u"){if(typeof s!="function")throw new Error(bt(1));return s(ny)(n,i)}let l=n,d=i,u=new Map,h=u,g=0,b=!1;function m(){h===u&&(h=new Map,u.forEach((E,A)=>{h.set(A,E)}))}function v(){if(b)throw new Error(bt(3));return d}function x(E){if(typeof E!="function")throw new Error(bt(4));if(b)throw new Error(bt(5));let A=!0;m();const M=g++;return h.set(M,E),function(){if(A){if(b)throw new Error(bt(6));A=!1,m(),h.delete(M),u=null}}}function j(E){if(!uN(E))throw new Error(bt(7));if(typeof E.type>"u")throw new Error(bt(8));if(typeof E.type!="string")throw new Error(bt(17));if(b)throw new Error(bt(9));try{b=!0,d=l(d,E)}finally{b=!1}return(u=h).forEach(M=>{M()}),E}function S(E){if(typeof E!="function")throw new Error(bt(10));l=E,j({type:ld.REPLACE})}function w(){const E=x;return{subscribe(A){if(typeof A!="object"||A===null)throw new Error(bt(11));function M(){const _=A;_.next&&_.next(v())}return M(),{unsubscribe:E(M)}},[gx](){return this}}}return j({type:ld.INIT}),{dispatch:j,subscribe:x,getState:v,replaceReducer:S,[gx]:w}}function fN(n){Object.keys(n).forEach(i=>{const s=n[i];if(typeof s(void 0,{type:ld.INIT})>"u")throw new Error(bt(12));if(typeof s(void 0,{type:ld.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(bt(13))})}function hN(n){const i=Object.keys(n),s={};for(let u=0;u<i.length;u++){const h=i[u];typeof n[h]=="function"&&(s[h]=n[h])}const l=Object.keys(s);let d;try{fN(s)}catch(u){d=u}return function(h={},g){if(d)throw d;let b=!1;const m={};for(let v=0;v<l.length;v++){const x=l[v],j=s[x],S=h[x],w=j(S,g);if(typeof w>"u")throw g&&g.type,new Error(bt(14));m[x]=w,b=b||w!==S}return b=b||l.length!==Object.keys(h).length,b?m:h}}function oy(...n){return n.length===0?i=>i:n.length===1?n[0]:n.reduce((i,s)=>(...l)=>i(s(...l)))}function mN(...n){return i=>(s,l)=>{const d=i(s,l);let u=()=>{throw new Error(bt(15))};const h={getState:d.getState,dispatch:(b,...m)=>u(b,...m)},g=n.map(b=>b(h));return u=oy(...g)(d.dispatch),{...d,dispatch:u}}}const pN="[Post Action] Create Post",gN="[Post Action] Confirmed Create Post",bN="[Post Action] Confirmed Get Posts",xN="[Post Action] Confirmed Edit Post",vN="[Post Action] Confirmed Delete Post",yN={posts:[]};function jN(n=yN,i){if(i.type===pN){const s={id:Math.random(),title:"Post Title 2asdasd",description:"Sample Description 2asdasdas"},l=[...n.posts];return l.push(s),{...n,posts:l}}if(i.type===vN){const s=[...n.posts],l=s.findIndex(d=>d.id===i.payload);return s.splice(l,1),{...n,posts:s}}if(i.type===xN){const s=[...n.posts],l=s.findIndex(d=>d.id===i.payload.id);return s[l]=i.payload,{...n,posts:s}}if(i.type===gN){const s=[...n.posts];return s.push(i.payload),{...n,posts:s}}return i.type===bN?{...n,posts:i.payload}:n}function wN(n){return({dispatch:s,getState:l})=>d=>u=>typeof u=="function"?u(s,l,n):d(u)}var SN=wN();function ay(n,i){return function(){return n.apply(i,arguments)}}const{toString:AN}=Object.prototype,{getPrototypeOf:Fm}=Object,_d=(n=>i=>{const s=AN.call(i);return n[s]||(n[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),wr=n=>(n=n.toLowerCase(),i=>_d(i)===n),Rd=n=>i=>typeof i===n,{isArray:Za}=Array,Dl=Rd("undefined");function kN(n){return n!==null&&!Dl(n)&&n.constructor!==null&&!Dl(n.constructor)&&Xt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const iy=wr("ArrayBuffer");function CN(n){let i;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?i=ArrayBuffer.isView(n):i=n&&n.buffer&&iy(n.buffer),i}const EN=Rd("string"),Xt=Rd("function"),ly=Rd("number"),Dd=n=>n!==null&&typeof n=="object",TN=n=>n===!0||n===!1,Ic=n=>{if(_d(n)!=="object")return!1;const i=Fm(n);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},NN=wr("Date"),MN=wr("File"),_N=wr("Blob"),RN=wr("FileList"),DN=n=>Dd(n)&&Xt(n.pipe),ON=n=>{let i;return n&&(typeof FormData=="function"&&n instanceof FormData||Xt(n.append)&&((i=_d(n))==="formdata"||i==="object"&&Xt(n.toString)&&n.toString()==="[object FormData]"))},zN=wr("URLSearchParams"),[$N,BN,UN,KN]=["ReadableStream","Request","Response","Headers"].map(wr),LN=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ll(n,i,{allOwnKeys:s=!1}={}){if(n===null||typeof n>"u")return;let l,d;if(typeof n!="object"&&(n=[n]),Za(n))for(l=0,d=n.length;l<d;l++)i.call(null,n[l],l,n);else{const u=s?Object.getOwnPropertyNames(n):Object.keys(n),h=u.length;let g;for(l=0;l<h;l++)g=u[l],i.call(null,n[g],g,n)}}function sy(n,i){i=i.toLowerCase();const s=Object.keys(n);let l=s.length,d;for(;l-- >0;)if(d=s[l],i===d.toLowerCase())return d;return null}const No=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,cy=n=>!Dl(n)&&n!==No;function gm(){const{caseless:n}=cy(this)&&this||{},i={},s=(l,d)=>{const u=n&&sy(i,d)||d;Ic(i[u])&&Ic(l)?i[u]=gm(i[u],l):Ic(l)?i[u]=gm({},l):Za(l)?i[u]=l.slice():i[u]=l};for(let l=0,d=arguments.length;l<d;l++)arguments[l]&&Ll(arguments[l],s);return i}const PN=(n,i,s,{allOwnKeys:l}={})=>(Ll(i,(d,u)=>{s&&Xt(d)?n[u]=ay(d,s):n[u]=d},{allOwnKeys:l}),n),HN=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),qN=(n,i,s,l)=>{n.prototype=Object.create(i.prototype,l),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:i.prototype}),s&&Object.assign(n.prototype,s)},FN=(n,i,s,l)=>{let d,u,h;const g={};if(i=i||{},n==null)return i;do{for(d=Object.getOwnPropertyNames(n),u=d.length;u-- >0;)h=d[u],(!l||l(h,n,i))&&!g[h]&&(i[h]=n[h],g[h]=!0);n=s!==!1&&Fm(n)}while(n&&(!s||s(n,i))&&n!==Object.prototype);return i},QN=(n,i,s)=>{n=String(n),(s===void 0||s>n.length)&&(s=n.length),s-=i.length;const l=n.indexOf(i,s);return l!==-1&&l===s},YN=n=>{if(!n)return null;if(Za(n))return n;let i=n.length;if(!ly(i))return null;const s=new Array(i);for(;i-- >0;)s[i]=n[i];return s},VN=(n=>i=>n&&i instanceof n)(typeof Uint8Array<"u"&&Fm(Uint8Array)),GN=(n,i)=>{const l=(n&&n[Symbol.iterator]).call(n);let d;for(;(d=l.next())&&!d.done;){const u=d.value;i.call(n,u[0],u[1])}},IN=(n,i)=>{let s;const l=[];for(;(s=n.exec(i))!==null;)l.push(s);return l},XN=wr("HTMLFormElement"),ZN=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,l,d){return l.toUpperCase()+d}),bx=(({hasOwnProperty:n})=>(i,s)=>n.call(i,s))(Object.prototype),JN=wr("RegExp"),dy=(n,i)=>{const s=Object.getOwnPropertyDescriptors(n),l={};Ll(s,(d,u)=>{let h;(h=i(d,u,n))!==!1&&(l[u]=h||d)}),Object.defineProperties(n,l)},WN=n=>{dy(n,(i,s)=>{if(Xt(n)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const l=n[s];if(Xt(l)){if(i.enumerable=!1,"writable"in i){i.writable=!1;return}i.set||(i.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},eM=(n,i)=>{const s={},l=d=>{d.forEach(u=>{s[u]=!0})};return Za(n)?l(n):l(String(n).split(i)),s},tM=()=>{},rM=(n,i)=>n!=null&&Number.isFinite(n=+n)?n:i;function nM(n){return!!(n&&Xt(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const oM=n=>{const i=new Array(10),s=(l,d)=>{if(Dd(l)){if(i.indexOf(l)>=0)return;if(!("toJSON"in l)){i[d]=l;const u=Za(l)?[]:{};return Ll(l,(h,g)=>{const b=s(h,d+1);!Dl(b)&&(u[g]=b)}),i[d]=void 0,u}}return l};return s(n,0)},aM=wr("AsyncFunction"),iM=n=>n&&(Dd(n)||Xt(n))&&Xt(n.then)&&Xt(n.catch),uy=((n,i)=>n?setImmediate:i?((s,l)=>(No.addEventListener("message",({source:d,data:u})=>{d===No&&u===s&&l.length&&l.shift()()},!1),d=>{l.push(d),No.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",Xt(No.postMessage)),lM=typeof queueMicrotask<"u"?queueMicrotask.bind(No):typeof process<"u"&&process.nextTick||uy,X={isArray:Za,isArrayBuffer:iy,isBuffer:kN,isFormData:ON,isArrayBufferView:CN,isString:EN,isNumber:ly,isBoolean:TN,isObject:Dd,isPlainObject:Ic,isReadableStream:$N,isRequest:BN,isResponse:UN,isHeaders:KN,isUndefined:Dl,isDate:NN,isFile:MN,isBlob:_N,isRegExp:JN,isFunction:Xt,isStream:DN,isURLSearchParams:zN,isTypedArray:VN,isFileList:RN,forEach:Ll,merge:gm,extend:PN,trim:LN,stripBOM:HN,inherits:qN,toFlatObject:FN,kindOf:_d,kindOfTest:wr,endsWith:QN,toArray:YN,forEachEntry:GN,matchAll:IN,isHTMLForm:XN,hasOwnProperty:bx,hasOwnProp:bx,reduceDescriptors:dy,freezeMethods:WN,toObjectSet:eM,toCamelCase:ZN,noop:tM,toFiniteNumber:rM,findKey:sy,global:No,isContextDefined:cy,isSpecCompliantForm:nM,toJSONObject:oM,isAsyncFn:aM,isThenable:iM,setImmediate:uy,asap:lM};function xe(n,i,s,l,d){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",i&&(this.code=i),s&&(this.config=s),l&&(this.request=l),d&&(this.response=d,this.status=d.status?d.status:null)}X.inherits(xe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:X.toJSONObject(this.config),code:this.code,status:this.status}}});const fy=xe.prototype,hy={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{hy[n]={value:n}});Object.defineProperties(xe,hy);Object.defineProperty(fy,"isAxiosError",{value:!0});xe.from=(n,i,s,l,d,u)=>{const h=Object.create(fy);return X.toFlatObject(n,h,function(b){return b!==Error.prototype},g=>g!=="isAxiosError"),xe.call(h,n.message,i,s,l,d),h.cause=n,h.name=n.name,u&&Object.assign(h,u),h};const sM=null;function bm(n){return X.isPlainObject(n)||X.isArray(n)}function my(n){return X.endsWith(n,"[]")?n.slice(0,-2):n}function xx(n,i,s){return n?n.concat(i).map(function(d,u){return d=my(d),!s&&u?"["+d+"]":d}).join(s?".":""):i}function cM(n){return X.isArray(n)&&!n.some(bm)}const dM=X.toFlatObject(X,{},null,function(i){return/^is[A-Z]/.test(i)});function Od(n,i,s){if(!X.isObject(n))throw new TypeError("target must be an object");i=i||new FormData,s=X.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(N,E){return!X.isUndefined(E[N])});const l=s.metaTokens,d=s.visitor||v,u=s.dots,h=s.indexes,b=(s.Blob||typeof Blob<"u"&&Blob)&&X.isSpecCompliantForm(i);if(!X.isFunction(d))throw new TypeError("visitor must be a function");function m(w){if(w===null)return"";if(X.isDate(w))return w.toISOString();if(!b&&X.isBlob(w))throw new xe("Blob is not supported. Use a Buffer instead.");return X.isArrayBuffer(w)||X.isTypedArray(w)?b&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function v(w,N,E){let A=w;if(w&&!E&&typeof w=="object"){if(X.endsWith(N,"{}"))N=l?N:N.slice(0,-2),w=JSON.stringify(w);else if(X.isArray(w)&&cM(w)||(X.isFileList(w)||X.endsWith(N,"[]"))&&(A=X.toArray(w)))return N=my(N),A.forEach(function(T,_){!(X.isUndefined(T)||T===null)&&i.append(h===!0?xx([N],_,u):h===null?N:N+"[]",m(T))}),!1}return bm(w)?!0:(i.append(xx(E,N,u),m(w)),!1)}const x=[],j=Object.assign(dM,{defaultVisitor:v,convertValue:m,isVisitable:bm});function S(w,N){if(!X.isUndefined(w)){if(x.indexOf(w)!==-1)throw Error("Circular reference detected in "+N.join("."));x.push(w),X.forEach(w,function(A,M){(!(X.isUndefined(A)||A===null)&&d.call(i,A,X.isString(M)?M.trim():M,N,j))===!0&&S(A,N?N.concat(M):[M])}),x.pop()}}if(!X.isObject(n))throw new TypeError("data must be an object");return S(n),i}function vx(n){const i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(l){return i[l]})}function Qm(n,i){this._pairs=[],n&&Od(n,this,i)}const py=Qm.prototype;py.append=function(i,s){this._pairs.push([i,s])};py.toString=function(i){const s=i?function(l){return i.call(this,l,vx)}:vx;return this._pairs.map(function(d){return s(d[0])+"="+s(d[1])},"").join("&")};function uM(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function gy(n,i,s){if(!i)return n;const l=s&&s.encode||uM;X.isFunction(s)&&(s={serialize:s});const d=s&&s.serialize;let u;if(d?u=d(i,s):u=X.isURLSearchParams(i)?i.toString():new Qm(i,s).toString(l),u){const h=n.indexOf("#");h!==-1&&(n=n.slice(0,h)),n+=(n.indexOf("?")===-1?"?":"&")+u}return n}class yx{constructor(){this.handlers=[]}use(i,s,l){return this.handlers.push({fulfilled:i,rejected:s,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(i){this.handlers[i]&&(this.handlers[i]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(i){X.forEach(this.handlers,function(l){l!==null&&i(l)})}}const by={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},fM=typeof URLSearchParams<"u"?URLSearchParams:Qm,hM=typeof FormData<"u"?FormData:null,mM=typeof Blob<"u"?Blob:null,pM={isBrowser:!0,classes:{URLSearchParams:fM,FormData:hM,Blob:mM},protocols:["http","https","file","blob","url","data"]},Ym=typeof window<"u"&&typeof document<"u",xm=typeof navigator=="object"&&navigator||void 0,gM=Ym&&(!xm||["ReactNative","NativeScript","NS"].indexOf(xm.product)<0),bM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",xM=Ym&&window.location.href||"http://localhost",vM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ym,hasStandardBrowserEnv:gM,hasStandardBrowserWebWorkerEnv:bM,navigator:xm,origin:xM},Symbol.toStringTag,{value:"Module"})),St={...vM,...pM};function yM(n,i){return Od(n,new St.classes.URLSearchParams,Object.assign({visitor:function(s,l,d,u){return St.isNode&&X.isBuffer(s)?(this.append(l,s.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)}},i))}function jM(n){return X.matchAll(/\w+|\[(\w*)]/g,n).map(i=>i[0]==="[]"?"":i[1]||i[0])}function wM(n){const i={},s=Object.keys(n);let l;const d=s.length;let u;for(l=0;l<d;l++)u=s[l],i[u]=n[u];return i}function xy(n){function i(s,l,d,u){let h=s[u++];if(h==="__proto__")return!0;const g=Number.isFinite(+h),b=u>=s.length;return h=!h&&X.isArray(d)?d.length:h,b?(X.hasOwnProp(d,h)?d[h]=[d[h],l]:d[h]=l,!g):((!d[h]||!X.isObject(d[h]))&&(d[h]=[]),i(s,l,d[h],u)&&X.isArray(d[h])&&(d[h]=wM(d[h])),!g)}if(X.isFormData(n)&&X.isFunction(n.entries)){const s={};return X.forEachEntry(n,(l,d)=>{i(jM(l),d,s,0)}),s}return null}function SM(n,i,s){if(X.isString(n))try{return(i||JSON.parse)(n),X.trim(n)}catch(l){if(l.name!=="SyntaxError")throw l}return(s||JSON.stringify)(n)}const Pl={transitional:by,adapter:["xhr","http","fetch"],transformRequest:[function(i,s){const l=s.getContentType()||"",d=l.indexOf("application/json")>-1,u=X.isObject(i);if(u&&X.isHTMLForm(i)&&(i=new FormData(i)),X.isFormData(i))return d?JSON.stringify(xy(i)):i;if(X.isArrayBuffer(i)||X.isBuffer(i)||X.isStream(i)||X.isFile(i)||X.isBlob(i)||X.isReadableStream(i))return i;if(X.isArrayBufferView(i))return i.buffer;if(X.isURLSearchParams(i))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let g;if(u){if(l.indexOf("application/x-www-form-urlencoded")>-1)return yM(i,this.formSerializer).toString();if((g=X.isFileList(i))||l.indexOf("multipart/form-data")>-1){const b=this.env&&this.env.FormData;return Od(g?{"files[]":i}:i,b&&new b,this.formSerializer)}}return u||d?(s.setContentType("application/json",!1),SM(i)):i}],transformResponse:[function(i){const s=this.transitional||Pl.transitional,l=s&&s.forcedJSONParsing,d=this.responseType==="json";if(X.isResponse(i)||X.isReadableStream(i))return i;if(i&&X.isString(i)&&(l&&!this.responseType||d)){const h=!(s&&s.silentJSONParsing)&&d;try{return JSON.parse(i)}catch(g){if(h)throw g.name==="SyntaxError"?xe.from(g,xe.ERR_BAD_RESPONSE,this,null,this.response):g}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:St.classes.FormData,Blob:St.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};X.forEach(["delete","get","head","post","put","patch"],n=>{Pl.headers[n]={}});const AM=X.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),kM=n=>{const i={};let s,l,d;return n&&n.split(`
`).forEach(function(h){d=h.indexOf(":"),s=h.substring(0,d).trim().toLowerCase(),l=h.substring(d+1).trim(),!(!s||i[s]&&AM[s])&&(s==="set-cookie"?i[s]?i[s].push(l):i[s]=[l]:i[s]=i[s]?i[s]+", "+l:l)}),i},jx=Symbol("internals");function wl(n){return n&&String(n).trim().toLowerCase()}function Xc(n){return n===!1||n==null?n:X.isArray(n)?n.map(Xc):String(n)}function CM(n){const i=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=s.exec(n);)i[l[1]]=l[2];return i}const EM=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Fh(n,i,s,l,d){if(X.isFunction(l))return l.call(this,i,s);if(d&&(i=s),!!X.isString(i)){if(X.isString(l))return i.indexOf(l)!==-1;if(X.isRegExp(l))return l.test(i)}}function TM(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(i,s,l)=>s.toUpperCase()+l)}function NM(n,i){const s=X.toCamelCase(" "+i);["get","set","has"].forEach(l=>{Object.defineProperty(n,l+s,{value:function(d,u,h){return this[l].call(this,i,d,u,h)},configurable:!0})})}let zt=class{constructor(i){i&&this.set(i)}set(i,s,l){const d=this;function u(g,b,m){const v=wl(b);if(!v)throw new Error("header name must be a non-empty string");const x=X.findKey(d,v);(!x||d[x]===void 0||m===!0||m===void 0&&d[x]!==!1)&&(d[x||b]=Xc(g))}const h=(g,b)=>X.forEach(g,(m,v)=>u(m,v,b));if(X.isPlainObject(i)||i instanceof this.constructor)h(i,s);else if(X.isString(i)&&(i=i.trim())&&!EM(i))h(kM(i),s);else if(X.isHeaders(i))for(const[g,b]of i.entries())u(b,g,l);else i!=null&&u(s,i,l);return this}get(i,s){if(i=wl(i),i){const l=X.findKey(this,i);if(l){const d=this[l];if(!s)return d;if(s===!0)return CM(d);if(X.isFunction(s))return s.call(this,d,l);if(X.isRegExp(s))return s.exec(d);throw new TypeError("parser must be boolean|regexp|function")}}}has(i,s){if(i=wl(i),i){const l=X.findKey(this,i);return!!(l&&this[l]!==void 0&&(!s||Fh(this,this[l],l,s)))}return!1}delete(i,s){const l=this;let d=!1;function u(h){if(h=wl(h),h){const g=X.findKey(l,h);g&&(!s||Fh(l,l[g],g,s))&&(delete l[g],d=!0)}}return X.isArray(i)?i.forEach(u):u(i),d}clear(i){const s=Object.keys(this);let l=s.length,d=!1;for(;l--;){const u=s[l];(!i||Fh(this,this[u],u,i,!0))&&(delete this[u],d=!0)}return d}normalize(i){const s=this,l={};return X.forEach(this,(d,u)=>{const h=X.findKey(l,u);if(h){s[h]=Xc(d),delete s[u];return}const g=i?TM(u):String(u).trim();g!==u&&delete s[u],s[g]=Xc(d),l[g]=!0}),this}concat(...i){return this.constructor.concat(this,...i)}toJSON(i){const s=Object.create(null);return X.forEach(this,(l,d)=>{l!=null&&l!==!1&&(s[d]=i&&X.isArray(l)?l.join(", "):l)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([i,s])=>i+": "+s).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(i){return i instanceof this?i:new this(i)}static concat(i,...s){const l=new this(i);return s.forEach(d=>l.set(d)),l}static accessor(i){const l=(this[jx]=this[jx]={accessors:{}}).accessors,d=this.prototype;function u(h){const g=wl(h);l[g]||(NM(d,h),l[g]=!0)}return X.isArray(i)?i.forEach(u):u(i),this}};zt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);X.reduceDescriptors(zt.prototype,({value:n},i)=>{let s=i[0].toUpperCase()+i.slice(1);return{get:()=>n,set(l){this[s]=l}}});X.freezeMethods(zt);function Qh(n,i){const s=this||Pl,l=i||s,d=zt.from(l.headers);let u=l.data;return X.forEach(n,function(g){u=g.call(s,u,d.normalize(),i?i.status:void 0)}),d.normalize(),u}function vy(n){return!!(n&&n.__CANCEL__)}function Ja(n,i,s){xe.call(this,n??"canceled",xe.ERR_CANCELED,i,s),this.name="CanceledError"}X.inherits(Ja,xe,{__CANCEL__:!0});function yy(n,i,s){const l=s.config.validateStatus;!s.status||!l||l(s.status)?n(s):i(new xe("Request failed with status code "+s.status,[xe.ERR_BAD_REQUEST,xe.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}function MM(n){const i=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return i&&i[1]||""}function _M(n,i){n=n||10;const s=new Array(n),l=new Array(n);let d=0,u=0,h;return i=i!==void 0?i:1e3,function(b){const m=Date.now(),v=l[u];h||(h=m),s[d]=b,l[d]=m;let x=u,j=0;for(;x!==d;)j+=s[x++],x=x%n;if(d=(d+1)%n,d===u&&(u=(u+1)%n),m-h<i)return;const S=v&&m-v;return S?Math.round(j*1e3/S):void 0}}function RM(n,i){let s=0,l=1e3/i,d,u;const h=(m,v=Date.now())=>{s=v,d=null,u&&(clearTimeout(u),u=null),n.apply(null,m)};return[(...m)=>{const v=Date.now(),x=v-s;x>=l?h(m,v):(d=m,u||(u=setTimeout(()=>{u=null,h(d)},l-x)))},()=>d&&h(d)]}const sd=(n,i,s=3)=>{let l=0;const d=_M(50,250);return RM(u=>{const h=u.loaded,g=u.lengthComputable?u.total:void 0,b=h-l,m=d(b),v=h<=g;l=h;const x={loaded:h,total:g,progress:g?h/g:void 0,bytes:b,rate:m||void 0,estimated:m&&g&&v?(g-h)/m:void 0,event:u,lengthComputable:g!=null,[i?"download":"upload"]:!0};n(x)},s)},wx=(n,i)=>{const s=n!=null;return[l=>i[0]({lengthComputable:s,total:n,loaded:l}),i[1]]},Sx=n=>(...i)=>X.asap(()=>n(...i)),DM=St.hasStandardBrowserEnv?((n,i)=>s=>(s=new URL(s,St.origin),n.protocol===s.protocol&&n.host===s.host&&(i||n.port===s.port)))(new URL(St.origin),St.navigator&&/(msie|trident)/i.test(St.navigator.userAgent)):()=>!0,OM=St.hasStandardBrowserEnv?{write(n,i,s,l,d,u){const h=[n+"="+encodeURIComponent(i)];X.isNumber(s)&&h.push("expires="+new Date(s).toGMTString()),X.isString(l)&&h.push("path="+l),X.isString(d)&&h.push("domain="+d),u===!0&&h.push("secure"),document.cookie=h.join("; ")},read(n){const i=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function zM(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function $M(n,i){return i?n.replace(/\/?\/$/,"")+"/"+i.replace(/^\/+/,""):n}function jy(n,i,s){let l=!zM(i);return n&&(l||s==!1)?$M(n,i):i}const Ax=n=>n instanceof zt?{...n}:n;function Oo(n,i){i=i||{};const s={};function l(m,v,x,j){return X.isPlainObject(m)&&X.isPlainObject(v)?X.merge.call({caseless:j},m,v):X.isPlainObject(v)?X.merge({},v):X.isArray(v)?v.slice():v}function d(m,v,x,j){if(X.isUndefined(v)){if(!X.isUndefined(m))return l(void 0,m,x,j)}else return l(m,v,x,j)}function u(m,v){if(!X.isUndefined(v))return l(void 0,v)}function h(m,v){if(X.isUndefined(v)){if(!X.isUndefined(m))return l(void 0,m)}else return l(void 0,v)}function g(m,v,x){if(x in i)return l(m,v);if(x in n)return l(void 0,m)}const b={url:u,method:u,data:u,baseURL:h,transformRequest:h,transformResponse:h,paramsSerializer:h,timeout:h,timeoutMessage:h,withCredentials:h,withXSRFToken:h,adapter:h,responseType:h,xsrfCookieName:h,xsrfHeaderName:h,onUploadProgress:h,onDownloadProgress:h,decompress:h,maxContentLength:h,maxBodyLength:h,beforeRedirect:h,transport:h,httpAgent:h,httpsAgent:h,cancelToken:h,socketPath:h,responseEncoding:h,validateStatus:g,headers:(m,v,x)=>d(Ax(m),Ax(v),x,!0)};return X.forEach(Object.keys(Object.assign({},n,i)),function(v){const x=b[v]||d,j=x(n[v],i[v],v);X.isUndefined(j)&&x!==g||(s[v]=j)}),s}const wy=n=>{const i=Oo({},n);let{data:s,withXSRFToken:l,xsrfHeaderName:d,xsrfCookieName:u,headers:h,auth:g}=i;i.headers=h=zt.from(h),i.url=gy(jy(i.baseURL,i.url,i.allowAbsoluteUrls),n.params,n.paramsSerializer),g&&h.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):"")));let b;if(X.isFormData(s)){if(St.hasStandardBrowserEnv||St.hasStandardBrowserWebWorkerEnv)h.setContentType(void 0);else if((b=h.getContentType())!==!1){const[m,...v]=b?b.split(";").map(x=>x.trim()).filter(Boolean):[];h.setContentType([m||"multipart/form-data",...v].join("; "))}}if(St.hasStandardBrowserEnv&&(l&&X.isFunction(l)&&(l=l(i)),l||l!==!1&&DM(i.url))){const m=d&&u&&OM.read(u);m&&h.set(d,m)}return i},BM=typeof XMLHttpRequest<"u",UM=BM&&function(n){return new Promise(function(s,l){const d=wy(n);let u=d.data;const h=zt.from(d.headers).normalize();let{responseType:g,onUploadProgress:b,onDownloadProgress:m}=d,v,x,j,S,w;function N(){S&&S(),w&&w(),d.cancelToken&&d.cancelToken.unsubscribe(v),d.signal&&d.signal.removeEventListener("abort",v)}let E=new XMLHttpRequest;E.open(d.method.toUpperCase(),d.url,!0),E.timeout=d.timeout;function A(){if(!E)return;const T=zt.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),R={data:!g||g==="text"||g==="json"?E.responseText:E.response,status:E.status,statusText:E.statusText,headers:T,config:n,request:E};yy(function(L){s(L),N()},function(L){l(L),N()},R),E=null}"onloadend"in E?E.onloadend=A:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(A)},E.onabort=function(){E&&(l(new xe("Request aborted",xe.ECONNABORTED,n,E)),E=null)},E.onerror=function(){l(new xe("Network Error",xe.ERR_NETWORK,n,E)),E=null},E.ontimeout=function(){let _=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded";const R=d.transitional||by;d.timeoutErrorMessage&&(_=d.timeoutErrorMessage),l(new xe(_,R.clarifyTimeoutError?xe.ETIMEDOUT:xe.ECONNABORTED,n,E)),E=null},u===void 0&&h.setContentType(null),"setRequestHeader"in E&&X.forEach(h.toJSON(),function(_,R){E.setRequestHeader(R,_)}),X.isUndefined(d.withCredentials)||(E.withCredentials=!!d.withCredentials),g&&g!=="json"&&(E.responseType=d.responseType),m&&([j,w]=sd(m,!0),E.addEventListener("progress",j)),b&&E.upload&&([x,S]=sd(b),E.upload.addEventListener("progress",x),E.upload.addEventListener("loadend",S)),(d.cancelToken||d.signal)&&(v=T=>{E&&(l(!T||T.type?new Ja(null,n,E):T),E.abort(),E=null)},d.cancelToken&&d.cancelToken.subscribe(v),d.signal&&(d.signal.aborted?v():d.signal.addEventListener("abort",v)));const M=MM(d.url);if(M&&St.protocols.indexOf(M)===-1){l(new xe("Unsupported protocol "+M+":",xe.ERR_BAD_REQUEST,n));return}E.send(u||null)})},KM=(n,i)=>{const{length:s}=n=n?n.filter(Boolean):[];if(i||s){let l=new AbortController,d;const u=function(m){if(!d){d=!0,g();const v=m instanceof Error?m:this.reason;l.abort(v instanceof xe?v:new Ja(v instanceof Error?v.message:v))}};let h=i&&setTimeout(()=>{h=null,u(new xe(`timeout ${i} of ms exceeded`,xe.ETIMEDOUT))},i);const g=()=>{n&&(h&&clearTimeout(h),h=null,n.forEach(m=>{m.unsubscribe?m.unsubscribe(u):m.removeEventListener("abort",u)}),n=null)};n.forEach(m=>m.addEventListener("abort",u));const{signal:b}=l;return b.unsubscribe=()=>X.asap(g),b}},LM=function*(n,i){let s=n.byteLength;if(s<i){yield n;return}let l=0,d;for(;l<s;)d=l+i,yield n.slice(l,d),l=d},PM=async function*(n,i){for await(const s of HM(n))yield*LM(s,i)},HM=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const i=n.getReader();try{for(;;){const{done:s,value:l}=await i.read();if(s)break;yield l}}finally{await i.cancel()}},kx=(n,i,s,l)=>{const d=PM(n,i);let u=0,h,g=b=>{h||(h=!0,l&&l(b))};return new ReadableStream({async pull(b){try{const{done:m,value:v}=await d.next();if(m){g(),b.close();return}let x=v.byteLength;if(s){let j=u+=x;s(j)}b.enqueue(new Uint8Array(v))}catch(m){throw g(m),m}},cancel(b){return g(b),d.return()}},{highWaterMark:2})},zd=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Sy=zd&&typeof ReadableStream=="function",qM=zd&&(typeof TextEncoder=="function"?(n=>i=>n.encode(i))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),Ay=(n,...i)=>{try{return!!n(...i)}catch{return!1}},FM=Sy&&Ay(()=>{let n=!1;const i=new Request(St.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!i}),Cx=64*1024,vm=Sy&&Ay(()=>X.isReadableStream(new Response("").body)),cd={stream:vm&&(n=>n.body)};zd&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(i=>{!cd[i]&&(cd[i]=X.isFunction(n[i])?s=>s[i]():(s,l)=>{throw new xe(`Response type '${i}' is not supported`,xe.ERR_NOT_SUPPORT,l)})})})(new Response);const QM=async n=>{if(n==null)return 0;if(X.isBlob(n))return n.size;if(X.isSpecCompliantForm(n))return(await new Request(St.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(X.isArrayBufferView(n)||X.isArrayBuffer(n))return n.byteLength;if(X.isURLSearchParams(n)&&(n=n+""),X.isString(n))return(await qM(n)).byteLength},YM=async(n,i)=>{const s=X.toFiniteNumber(n.getContentLength());return s??QM(i)},VM=zd&&(async n=>{let{url:i,method:s,data:l,signal:d,cancelToken:u,timeout:h,onDownloadProgress:g,onUploadProgress:b,responseType:m,headers:v,withCredentials:x="same-origin",fetchOptions:j}=wy(n);m=m?(m+"").toLowerCase():"text";let S=KM([d,u&&u.toAbortSignal()],h),w;const N=S&&S.unsubscribe&&(()=>{S.unsubscribe()});let E;try{if(b&&FM&&s!=="get"&&s!=="head"&&(E=await YM(v,l))!==0){let R=new Request(i,{method:"POST",body:l,duplex:"half"}),$;if(X.isFormData(l)&&($=R.headers.get("content-type"))&&v.setContentType($),R.body){const[L,B]=wx(E,sd(Sx(b)));l=kx(R.body,Cx,L,B)}}X.isString(x)||(x=x?"include":"omit");const A="credentials"in Request.prototype;w=new Request(i,{...j,signal:S,method:s.toUpperCase(),headers:v.normalize().toJSON(),body:l,duplex:"half",credentials:A?x:void 0});let M=await fetch(w);const T=vm&&(m==="stream"||m==="response");if(vm&&(g||T&&N)){const R={};["status","statusText","headers"].forEach(q=>{R[q]=M[q]});const $=X.toFiniteNumber(M.headers.get("content-length")),[L,B]=g&&wx($,sd(Sx(g),!0))||[];M=new Response(kx(M.body,Cx,L,()=>{B&&B(),N&&N()}),R)}m=m||"text";let _=await cd[X.findKey(cd,m)||"text"](M,n);return!T&&N&&N(),await new Promise((R,$)=>{yy(R,$,{data:_,headers:zt.from(M.headers),status:M.status,statusText:M.statusText,config:n,request:w})})}catch(A){throw N&&N(),A&&A.name==="TypeError"&&/fetch/i.test(A.message)?Object.assign(new xe("Network Error",xe.ERR_NETWORK,n,w),{cause:A.cause||A}):xe.from(A,A&&A.code,n,w)}}),ym={http:sM,xhr:UM,fetch:VM};X.forEach(ym,(n,i)=>{if(n){try{Object.defineProperty(n,"name",{value:i})}catch{}Object.defineProperty(n,"adapterName",{value:i})}});const Ex=n=>`- ${n}`,GM=n=>X.isFunction(n)||n===null||n===!1,ky={getAdapter:n=>{n=X.isArray(n)?n:[n];const{length:i}=n;let s,l;const d={};for(let u=0;u<i;u++){s=n[u];let h;if(l=s,!GM(s)&&(l=ym[(h=String(s)).toLowerCase()],l===void 0))throw new xe(`Unknown adapter '${h}'`);if(l)break;d[h||"#"+u]=l}if(!l){const u=Object.entries(d).map(([g,b])=>`adapter ${g} `+(b===!1?"is not supported by the environment":"is not available in the build"));let h=i?u.length>1?`since :
`+u.map(Ex).join(`
`):" "+Ex(u[0]):"as no adapter specified";throw new xe("There is no suitable adapter to dispatch the request "+h,"ERR_NOT_SUPPORT")}return l},adapters:ym};function Yh(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new Ja(null,n)}function Tx(n){return Yh(n),n.headers=zt.from(n.headers),n.data=Qh.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),ky.getAdapter(n.adapter||Pl.adapter)(n).then(function(l){return Yh(n),l.data=Qh.call(n,n.transformResponse,l),l.headers=zt.from(l.headers),l},function(l){return vy(l)||(Yh(n),l&&l.response&&(l.response.data=Qh.call(n,n.transformResponse,l.response),l.response.headers=zt.from(l.response.headers))),Promise.reject(l)})}const Cy="1.8.4",$d={};["object","boolean","number","function","string","symbol"].forEach((n,i)=>{$d[n]=function(l){return typeof l===n||"a"+(i<1?"n ":" ")+n}});const Nx={};$d.transitional=function(i,s,l){function d(u,h){return"[Axios v"+Cy+"] Transitional option '"+u+"'"+h+(l?". "+l:"")}return(u,h,g)=>{if(i===!1)throw new xe(d(h," has been removed"+(s?" in "+s:"")),xe.ERR_DEPRECATED);return s&&!Nx[h]&&(Nx[h]=!0,console.warn(d(h," has been deprecated since v"+s+" and will be removed in the near future"))),i?i(u,h,g):!0}};$d.spelling=function(i){return(s,l)=>(console.warn(`${l} is likely a misspelling of ${i}`),!0)};function IM(n,i,s){if(typeof n!="object")throw new xe("options must be an object",xe.ERR_BAD_OPTION_VALUE);const l=Object.keys(n);let d=l.length;for(;d-- >0;){const u=l[d],h=i[u];if(h){const g=n[u],b=g===void 0||h(g,u,n);if(b!==!0)throw new xe("option "+u+" must be "+b,xe.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new xe("Unknown option "+u,xe.ERR_BAD_OPTION)}}const Zc={assertOptions:IM,validators:$d},Dr=Zc.validators;let Ro=class{constructor(i){this.defaults=i,this.interceptors={request:new yx,response:new yx}}async request(i,s){try{return await this._request(i,s)}catch(l){if(l instanceof Error){let d={};Error.captureStackTrace?Error.captureStackTrace(d):d=new Error;const u=d.stack?d.stack.replace(/^.+\n/,""):"";try{l.stack?u&&!String(l.stack).endsWith(u.replace(/^.+\n.+\n/,""))&&(l.stack+=`
`+u):l.stack=u}catch{}}throw l}}_request(i,s){typeof i=="string"?(s=s||{},s.url=i):s=i||{},s=Oo(this.defaults,s);const{transitional:l,paramsSerializer:d,headers:u}=s;l!==void 0&&Zc.assertOptions(l,{silentJSONParsing:Dr.transitional(Dr.boolean),forcedJSONParsing:Dr.transitional(Dr.boolean),clarifyTimeoutError:Dr.transitional(Dr.boolean)},!1),d!=null&&(X.isFunction(d)?s.paramsSerializer={serialize:d}:Zc.assertOptions(d,{encode:Dr.function,serialize:Dr.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),Zc.assertOptions(s,{baseUrl:Dr.spelling("baseURL"),withXsrfToken:Dr.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let h=u&&X.merge(u.common,u[s.method]);u&&X.forEach(["delete","get","head","post","put","patch","common"],w=>{delete u[w]}),s.headers=zt.concat(h,u);const g=[];let b=!0;this.interceptors.request.forEach(function(N){typeof N.runWhen=="function"&&N.runWhen(s)===!1||(b=b&&N.synchronous,g.unshift(N.fulfilled,N.rejected))});const m=[];this.interceptors.response.forEach(function(N){m.push(N.fulfilled,N.rejected)});let v,x=0,j;if(!b){const w=[Tx.bind(this),void 0];for(w.unshift.apply(w,g),w.push.apply(w,m),j=w.length,v=Promise.resolve(s);x<j;)v=v.then(w[x++],w[x++]);return v}j=g.length;let S=s;for(x=0;x<j;){const w=g[x++],N=g[x++];try{S=w(S)}catch(E){N.call(this,E);break}}try{v=Tx.call(this,S)}catch(w){return Promise.reject(w)}for(x=0,j=m.length;x<j;)v=v.then(m[x++],m[x++]);return v}getUri(i){i=Oo(this.defaults,i);const s=jy(i.baseURL,i.url,i.allowAbsoluteUrls);return gy(s,i.params,i.paramsSerializer)}};X.forEach(["delete","get","head","options"],function(i){Ro.prototype[i]=function(s,l){return this.request(Oo(l||{},{method:i,url:s,data:(l||{}).data}))}});X.forEach(["post","put","patch"],function(i){function s(l){return function(u,h,g){return this.request(Oo(g||{},{method:i,headers:l?{"Content-Type":"multipart/form-data"}:{},url:u,data:h}))}}Ro.prototype[i]=s(),Ro.prototype[i+"Form"]=s(!0)});let XM=class Ey{constructor(i){if(typeof i!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(u){s=u});const l=this;this.promise.then(d=>{if(!l._listeners)return;let u=l._listeners.length;for(;u-- >0;)l._listeners[u](d);l._listeners=null}),this.promise.then=d=>{let u;const h=new Promise(g=>{l.subscribe(g),u=g}).then(d);return h.cancel=function(){l.unsubscribe(u)},h},i(function(u,h,g){l.reason||(l.reason=new Ja(u,h,g),s(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]}unsubscribe(i){if(!this._listeners)return;const s=this._listeners.indexOf(i);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const i=new AbortController,s=l=>{i.abort(l)};return this.subscribe(s),i.signal.unsubscribe=()=>this.unsubscribe(s),i.signal}static source(){let i;return{token:new Ey(function(d){i=d}),cancel:i}}};function ZM(n){return function(s){return n.apply(null,s)}}function JM(n){return X.isObject(n)&&n.isAxiosError===!0}const jm={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(jm).forEach(([n,i])=>{jm[i]=n});function Ty(n){const i=new Ro(n),s=ay(Ro.prototype.request,i);return X.extend(s,Ro.prototype,i,{allOwnKeys:!0}),X.extend(s,i,null,{allOwnKeys:!0}),s.create=function(d){return Ty(Oo(n,d))},s}const Ie=Ty(Pl);Ie.Axios=Ro;Ie.CanceledError=Ja;Ie.CancelToken=XM;Ie.isCancel=vy;Ie.VERSION=Cy;Ie.toFormData=Od;Ie.AxiosError=xe;Ie.Cancel=Ie.CanceledError;Ie.all=function(i){return Promise.all(i)};Ie.spread=ZM;Ie.isAxiosError=JM;Ie.mergeConfig=Oo;Ie.AxiosHeaders=zt;Ie.formToJSON=n=>xy(X.isHTMLForm(n)?new FormData(n):n);Ie.getAdapter=ky.getAdapter;Ie.HttpStatusCode=jm;Ie.default=Ie;const{Axios:v_,AxiosError:y_,CanceledError:j_,isCancel:w_,CancelToken:S_,VERSION:A_,all:k_,Cancel:C_,isAxiosError:E_,spread:T_,toFormData:N_,AxiosHeaders:M_,HttpStatusCode:__,formToJSON:R_,getAdapter:D_,mergeConfig:O_}=Ie,WM=Ie.create({baseURL:"https://react-course-b798e-default-rtdb.firebaseio.com/"});WM.interceptors.request.use(n=>{const s=Ny.getState().auth.auth.idToken;return n.params=n.params||{},n.params.auth=s,n});var Jc={exports:{}},e_=Jc.exports,Mx;function t_(){return Mx||(Mx=1,function(n,i){(function(s,l){n.exports=l()})(e_,function(){return function(s){function l(u){if(d[u])return d[u].exports;var h=d[u]={i:u,l:!1,exports:{}};return s[u].call(h.exports,h,h.exports,l),h.l=!0,h.exports}var d={};return l.m=s,l.c=d,l.d=function(u,h,g){l.o(u,h)||Object.defineProperty(u,h,{configurable:!1,enumerable:!0,get:g})},l.n=function(u){var h=u&&u.__esModule?function(){return u.default}:function(){return u};return l.d(h,"a",h),h},l.o=function(u,h){return Object.prototype.hasOwnProperty.call(u,h)},l.p="",l(l.s=8)}([function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u="swal-button";l.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:u,CONFIRM_BUTTON:u+"--confirm",CANCEL_BUTTON:u+"--cancel",DANGER_BUTTON:u+"--danger",BUTTON_LOADING:u+"--loading",BUTTON_LOADER:u+"__loader"},l.default=l.CLASS_NAMES},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0}),l.getNode=function(u){var h="."+u;return document.querySelector(h)},l.stringToNode=function(u){var h=document.createElement("div");return h.innerHTML=u.trim(),h.firstChild},l.insertAfter=function(u,h){var g=h.nextSibling;h.parentNode.insertBefore(u,g)},l.removeNode=function(u){u.parentElement.removeChild(u)},l.throwErr=function(u){throw u=u.replace(/ +(?= )/g,""),"SweetAlert: "+(u=u.trim())},l.isPlainObject=function(u){if(Object.prototype.toString.call(u)!=="[object Object]")return!1;var h=Object.getPrototypeOf(u);return h===null||h===Object.prototype},l.ordinalSuffixOf=function(u){var h=u%10,g=u%100;return h===1&&g!==11?u+"st":h===2&&g!==12?u+"nd":h===3&&g!==13?u+"rd":u+"th"}},function(s,l,d){function u(j){for(var S in j)l.hasOwnProperty(S)||(l[S]=j[S])}Object.defineProperty(l,"__esModule",{value:!0}),u(d(25));var h=d(26);l.overlayMarkup=h.default,u(d(27)),u(d(28)),u(d(29));var g=d(0),b=g.default.MODAL_TITLE,m=g.default.MODAL_TEXT,v=g.default.ICON,x=g.default.FOOTER;l.iconMarkup=`
  <div class="`+v+'"></div>',l.titleMarkup=`
  <div class="`+b+`"></div>
`,l.textMarkup=`
  <div class="`+m+'"></div>',l.footerMarkup=`
  <div class="`+x+`"></div>
`},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(1);l.CONFIRM_KEY="confirm",l.CANCEL_KEY="cancel";var h={visible:!0,text:null,value:null,className:"",closeModal:!0},g=Object.assign({},h,{visible:!1,text:"Cancel",value:null}),b=Object.assign({},h,{text:"OK",value:!0});l.defaultButtonList={cancel:g,confirm:b};var m=function(S){switch(S){case l.CONFIRM_KEY:return b;case l.CANCEL_KEY:return g;default:var w=S.charAt(0).toUpperCase()+S.slice(1);return Object.assign({},h,{text:w,value:S})}},v=function(S,w){var N=m(S);return w===!0?Object.assign({},N,{visible:!0}):typeof w=="string"?Object.assign({},N,{visible:!0,text:w}):u.isPlainObject(w)?Object.assign({visible:!0},N,w):Object.assign({},N,{visible:!1})},x=function(S){for(var w={},N=0,E=Object.keys(S);N<E.length;N++){var A=E[N],M=S[A],T=v(A,M);w[A]=T}return w.cancel||(w.cancel=g),w},j=function(S){var w={};switch(S.length){case 1:w[l.CANCEL_KEY]=Object.assign({},g,{visible:!1});break;case 2:w[l.CANCEL_KEY]=v(l.CANCEL_KEY,S[0]),w[l.CONFIRM_KEY]=v(l.CONFIRM_KEY,S[1]);break;default:u.throwErr("Invalid number of 'buttons' in array ("+S.length+`).
      If you want more than 2 buttons, you need to use an object!`)}return w};l.getButtonListOpts=function(S){var w=l.defaultButtonList;return typeof S=="string"?w[l.CONFIRM_KEY]=v(l.CONFIRM_KEY,S):Array.isArray(S)?w=j(S):u.isPlainObject(S)?w=x(S):S===!0?w=j([!0,!0]):S===!1?w=j([!1,!1]):S===void 0&&(w=l.defaultButtonList),w}},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(1),h=d(2),g=d(0),b=g.default.MODAL,m=g.default.OVERLAY,v=d(30),x=d(31),j=d(32),S=d(33);l.injectElIntoModal=function(A){var M=u.getNode(b),T=u.stringToNode(A);return M.appendChild(T),T};var w=function(A){A.className=b,A.textContent=""},N=function(A,M){w(A);var T=M.className;T&&A.classList.add(T)};l.initModalContent=function(A){var M=u.getNode(b);N(M,A),v.default(A.icon),x.initTitle(A.title),x.initText(A.text),S.default(A.content),j.default(A.buttons,A.dangerMode)};var E=function(){var A=u.getNode(m),M=u.stringToNode(h.modalMarkup);A.appendChild(M)};l.default=E},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(3),h={isOpen:!1,promise:null,actions:{},timer:null},g=Object.assign({},h);l.resetState=function(){g=Object.assign({},h)},l.setActionValue=function(m){if(typeof m=="string")return b(u.CONFIRM_KEY,m);for(var v in m)b(v,m[v])};var b=function(m,v){g.actions[m]||(g.actions[m]={}),Object.assign(g.actions[m],{value:v})};l.setActionOptionsFor=function(m,v){var x=(v===void 0?{}:v).closeModal,j=x===void 0||x;Object.assign(g.actions[m],{closeModal:j})},l.default=g},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(1),h=d(3),g=d(0),b=g.default.OVERLAY,m=g.default.SHOW_MODAL,v=g.default.BUTTON,x=g.default.BUTTON_LOADING,j=d(5);l.openModal=function(){u.getNode(b).classList.add(m),j.default.isOpen=!0};var S=function(){u.getNode(b).classList.remove(m),j.default.isOpen=!1};l.onAction=function(w){w===void 0&&(w=h.CANCEL_KEY);var N=j.default.actions[w],E=N.value;if(N.closeModal===!1){var A=v+"--"+w;u.getNode(A).classList.add(x)}else S();j.default.promise.resolve(E)},l.getState=function(){var w=Object.assign({},j.default);return delete w.promise,delete w.timer,w},l.stopLoading=function(){for(var w=document.querySelectorAll("."+v),N=0;N<w.length;N++)w[N].classList.remove(x)}},function(s,l){var d;d=function(){return this}();try{d=d||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(d=window)}s.exports=d},function(s,l,d){(function(u){s.exports=u.sweetAlert=d(9)}).call(l,d(7))},function(s,l,d){(function(u){s.exports=u.swal=d(10)}).call(l,d(7))},function(s,l,d){typeof window<"u"&&d(11),d(16);var u=d(23).default;s.exports=u},function(s,l,d){var u=d(12);typeof u=="string"&&(u=[[s.i,u,""]]);var h={insertAt:"top"};h.transform=void 0,d(14)(u,h),u.locals&&(s.exports=u.locals)},function(s,l,d){l=s.exports=d(13)(void 0),l.push([s.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(s,l){function d(h,g){var b=h[1]||"",m=h[3];if(!m)return b;if(g&&typeof btoa=="function"){var v=u(m);return[b].concat(m.sources.map(function(x){return"/*# sourceURL="+m.sourceRoot+x+" */"})).concat([v]).join(`
`)}return[b].join(`
`)}function u(h){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(h))))+" */"}s.exports=function(h){var g=[];return g.toString=function(){return this.map(function(b){var m=d(b,h);return b[2]?"@media "+b[2]+"{"+m+"}":m}).join("")},g.i=function(b,m){typeof b=="string"&&(b=[[null,b,""]]);for(var v={},x=0;x<this.length;x++){var j=this[x][0];typeof j=="number"&&(v[j]=!0)}for(x=0;x<b.length;x++){var S=b[x];typeof S[0]=="number"&&v[S[0]]||(m&&!S[2]?S[2]=m:m&&(S[2]="("+S[2]+") and ("+m+")"),g.push(S))}},g}},function(s,l,d){function u(B,q){for(var ne=0;ne<B.length;ne++){var U=B[ne],D=E[U.id];if(D){D.refs++;for(var J=0;J<D.parts.length;J++)D.parts[J](U.parts[J]);for(;J<U.parts.length;J++)D.parts.push(j(U.parts[J],q))}else{for(var se=[],J=0;J<U.parts.length;J++)se.push(j(U.parts[J],q));E[U.id]={id:U.id,refs:1,parts:se}}}}function h(B,q){for(var ne=[],U={},D=0;D<B.length;D++){var J=B[D],se=q.base?J[0]+q.base:J[0],de=J[1],V=J[2],I=J[3],Y={css:de,media:V,sourceMap:I};U[se]?U[se].parts.push(Y):ne.push(U[se]={id:se,parts:[Y]})}return ne}function g(B,q){var ne=M(B.insertInto);if(!ne)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var U=R[R.length-1];if(B.insertAt==="top")U?U.nextSibling?ne.insertBefore(q,U.nextSibling):ne.appendChild(q):ne.insertBefore(q,ne.firstChild),R.push(q);else{if(B.insertAt!=="bottom")throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");ne.appendChild(q)}}function b(B){if(B.parentNode===null)return!1;B.parentNode.removeChild(B);var q=R.indexOf(B);q>=0&&R.splice(q,1)}function m(B){var q=document.createElement("style");return B.attrs.type="text/css",x(q,B.attrs),g(B,q),q}function v(B){var q=document.createElement("link");return B.attrs.type="text/css",B.attrs.rel="stylesheet",x(q,B.attrs),g(B,q),q}function x(B,q){Object.keys(q).forEach(function(ne){B.setAttribute(ne,q[ne])})}function j(B,q){var ne,U,D,J;if(q.transform&&B.css){if(!(J=q.transform(B.css)))return function(){};B.css=J}if(q.singleton){var se=_++;ne=T||(T=m(q)),U=S.bind(null,ne,se,!1),D=S.bind(null,ne,se,!0)}else B.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(ne=v(q),U=N.bind(null,ne,q),D=function(){b(ne),ne.href&&URL.revokeObjectURL(ne.href)}):(ne=m(q),U=w.bind(null,ne),D=function(){b(ne)});return U(B),function(de){if(de){if(de.css===B.css&&de.media===B.media&&de.sourceMap===B.sourceMap)return;U(B=de)}else D()}}function S(B,q,ne,U){var D=ne?"":U.css;if(B.styleSheet)B.styleSheet.cssText=L(q,D);else{var J=document.createTextNode(D),se=B.childNodes;se[q]&&B.removeChild(se[q]),se.length?B.insertBefore(J,se[q]):B.appendChild(J)}}function w(B,q){var ne=q.css,U=q.media;if(U&&B.setAttribute("media",U),B.styleSheet)B.styleSheet.cssText=ne;else{for(;B.firstChild;)B.removeChild(B.firstChild);B.appendChild(document.createTextNode(ne))}}function N(B,q,ne){var U=ne.css,D=ne.sourceMap,J=q.convertToAbsoluteUrls===void 0&&D;(q.convertToAbsoluteUrls||J)&&(U=$(U)),D&&(U+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(D))))+" */");var se=new Blob([U],{type:"text/css"}),de=B.href;B.href=URL.createObjectURL(se),de&&URL.revokeObjectURL(de)}var E={},A=function(B){var q;return function(){return q===void 0&&(q=B.apply(this,arguments)),q}}(function(){return window&&document&&document.all&&!window.atob}),M=function(B){var q={};return function(ne){return q[ne]===void 0&&(q[ne]=B.call(this,ne)),q[ne]}}(function(B){return document.querySelector(B)}),T=null,_=0,R=[],$=d(15);s.exports=function(B,q){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");q=q||{},q.attrs=typeof q.attrs=="object"?q.attrs:{},q.singleton||(q.singleton=A()),q.insertInto||(q.insertInto="head"),q.insertAt||(q.insertAt="bottom");var ne=h(B,q);return u(ne,q),function(U){for(var D=[],J=0;J<ne.length;J++){var se=ne[J],de=E[se.id];de.refs--,D.push(de)}U&&u(h(U,q),q);for(var J=0;J<D.length;J++){var de=D[J];if(de.refs===0){for(var V=0;V<de.parts.length;V++)de.parts[V]();delete E[de.id]}}}};var L=function(){var B=[];return function(q,ne){return B[q]=ne,B.filter(Boolean).join(`
`)}}()},function(s,l){s.exports=function(d){var u=typeof window<"u"&&window.location;if(!u)throw new Error("fixUrls requires window.location");if(!d||typeof d!="string")return d;var h=u.protocol+"//"+u.host,g=h+u.pathname.replace(/\/[^\/]*$/,"/");return d.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(b,m){var v=m.trim().replace(/^"(.*)"$/,function(j,S){return S}).replace(/^'(.*)'$/,function(j,S){return S});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(v))return b;var x;return x=v.indexOf("//")===0?v:v.indexOf("/")===0?h+v:g+v.replace(/^\.\//,""),"url("+JSON.stringify(x)+")"})}},function(s,l,d){var u=d(17);typeof window>"u"||window.Promise||(window.Promise=u),d(21),String.prototype.includes||(String.prototype.includes=function(h,g){return typeof g!="number"&&(g=0),!(g+h.length>this.length)&&this.indexOf(h,g)!==-1}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(h,g){if(this==null)throw new TypeError('"this" is null or not defined');var b=Object(this),m=b.length>>>0;if(m===0)return!1;for(var v=0|g,x=Math.max(v>=0?v:m-Math.abs(v),0);x<m;){if(function(j,S){return j===S||typeof j=="number"&&typeof S=="number"&&isNaN(j)&&isNaN(S)}(b[x],h))return!0;x++}return!1}}),typeof window<"u"&&function(h){h.forEach(function(g){g.hasOwnProperty("remove")||Object.defineProperty(g,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(s,l,d){(function(u){(function(h){function g(){}function b(A,M){return function(){A.apply(M,arguments)}}function m(A){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");if(typeof A!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],N(A,this)}function v(A,M){for(;A._state===3;)A=A._value;if(A._state===0)return void A._deferreds.push(M);A._handled=!0,m._immediateFn(function(){var T=A._state===1?M.onFulfilled:M.onRejected;if(T===null)return void(A._state===1?x:j)(M.promise,A._value);var _;try{_=T(A._value)}catch(R){return void j(M.promise,R)}x(M.promise,_)})}function x(A,M){try{if(M===A)throw new TypeError("A promise cannot be resolved with itself.");if(M&&(typeof M=="object"||typeof M=="function")){var T=M.then;if(M instanceof m)return A._state=3,A._value=M,void S(A);if(typeof T=="function")return void N(b(T,M),A)}A._state=1,A._value=M,S(A)}catch(_){j(A,_)}}function j(A,M){A._state=2,A._value=M,S(A)}function S(A){A._state===2&&A._deferreds.length===0&&m._immediateFn(function(){A._handled||m._unhandledRejectionFn(A._value)});for(var M=0,T=A._deferreds.length;M<T;M++)v(A,A._deferreds[M]);A._deferreds=null}function w(A,M,T){this.onFulfilled=typeof A=="function"?A:null,this.onRejected=typeof M=="function"?M:null,this.promise=T}function N(A,M){var T=!1;try{A(function(_){T||(T=!0,x(M,_))},function(_){T||(T=!0,j(M,_))})}catch(_){if(T)return;T=!0,j(M,_)}}var E=setTimeout;m.prototype.catch=function(A){return this.then(null,A)},m.prototype.then=function(A,M){var T=new this.constructor(g);return v(this,new w(A,M,T)),T},m.all=function(A){var M=Array.prototype.slice.call(A);return new m(function(T,_){function R(B,q){try{if(q&&(typeof q=="object"||typeof q=="function")){var ne=q.then;if(typeof ne=="function")return void ne.call(q,function(U){R(B,U)},_)}M[B]=q,--$==0&&T(M)}catch(U){_(U)}}if(M.length===0)return T([]);for(var $=M.length,L=0;L<M.length;L++)R(L,M[L])})},m.resolve=function(A){return A&&typeof A=="object"&&A.constructor===m?A:new m(function(M){M(A)})},m.reject=function(A){return new m(function(M,T){T(A)})},m.race=function(A){return new m(function(M,T){for(var _=0,R=A.length;_<R;_++)A[_].then(M,T)})},m._immediateFn=typeof u=="function"&&function(A){u(A)}||function(A){E(A,0)},m._unhandledRejectionFn=function(A){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",A)},m._setImmediateFn=function(A){m._immediateFn=A},m._setUnhandledRejectionFn=function(A){m._unhandledRejectionFn=A},s!==void 0&&s.exports?s.exports=m:h.Promise||(h.Promise=m)})(this)}).call(l,d(18).setImmediate)},function(s,l,d){function u(g,b){this._id=g,this._clearFn=b}var h=Function.prototype.apply;l.setTimeout=function(){return new u(h.call(setTimeout,window,arguments),clearTimeout)},l.setInterval=function(){return new u(h.call(setInterval,window,arguments),clearInterval)},l.clearTimeout=l.clearInterval=function(g){g&&g.close()},u.prototype.unref=u.prototype.ref=function(){},u.prototype.close=function(){this._clearFn.call(window,this._id)},l.enroll=function(g,b){clearTimeout(g._idleTimeoutId),g._idleTimeout=b},l.unenroll=function(g){clearTimeout(g._idleTimeoutId),g._idleTimeout=-1},l._unrefActive=l.active=function(g){clearTimeout(g._idleTimeoutId);var b=g._idleTimeout;b>=0&&(g._idleTimeoutId=setTimeout(function(){g._onTimeout&&g._onTimeout()},b))},d(19),l.setImmediate=setImmediate,l.clearImmediate=clearImmediate},function(s,l,d){(function(u,h){(function(g,b){function m(T){typeof T!="function"&&(T=new Function(""+T));for(var _=new Array(arguments.length-1),R=0;R<_.length;R++)_[R]=arguments[R+1];var $={callback:T,args:_};return N[w]=$,S(w),w++}function v(T){delete N[T]}function x(T){var _=T.callback,R=T.args;switch(R.length){case 0:_();break;case 1:_(R[0]);break;case 2:_(R[0],R[1]);break;case 3:_(R[0],R[1],R[2]);break;default:_.apply(b,R)}}function j(T){if(E)setTimeout(j,0,T);else{var _=N[T];if(_){E=!0;try{x(_)}finally{v(T),E=!1}}}}if(!g.setImmediate){var S,w=1,N={},E=!1,A=g.document,M=Object.getPrototypeOf&&Object.getPrototypeOf(g);M=M&&M.setTimeout?M:g,{}.toString.call(g.process)==="[object process]"?function(){S=function(T){h.nextTick(function(){j(T)})}}():function(){if(g.postMessage&&!g.importScripts){var T=!0,_=g.onmessage;return g.onmessage=function(){T=!1},g.postMessage("","*"),g.onmessage=_,T}}()?function(){var T="setImmediate$"+Math.random()+"$",_=function(R){R.source===g&&typeof R.data=="string"&&R.data.indexOf(T)===0&&j(+R.data.slice(T.length))};g.addEventListener?g.addEventListener("message",_,!1):g.attachEvent("onmessage",_),S=function(R){g.postMessage(T+R,"*")}}():g.MessageChannel?function(){var T=new MessageChannel;T.port1.onmessage=function(_){j(_.data)},S=function(_){T.port2.postMessage(_)}}():A&&"onreadystatechange"in A.createElement("script")?function(){var T=A.documentElement;S=function(_){var R=A.createElement("script");R.onreadystatechange=function(){j(_),R.onreadystatechange=null,T.removeChild(R),R=null},T.appendChild(R)}}():function(){S=function(T){setTimeout(j,0,T)}}(),M.setImmediate=m,M.clearImmediate=v}})(typeof self>"u"?u===void 0?this:u:self)}).call(l,d(7),d(20))},function(s,l){function d(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function h(T){if(j===setTimeout)return setTimeout(T,0);if((j===d||!j)&&setTimeout)return j=setTimeout,setTimeout(T,0);try{return j(T,0)}catch{try{return j.call(null,T,0)}catch{return j.call(this,T,0)}}}function g(T){if(S===clearTimeout)return clearTimeout(T);if((S===u||!S)&&clearTimeout)return S=clearTimeout,clearTimeout(T);try{return S(T)}catch{try{return S.call(null,T)}catch{return S.call(this,T)}}}function b(){A&&N&&(A=!1,N.length?E=N.concat(E):M=-1,E.length&&m())}function m(){if(!A){var T=h(b);A=!0;for(var _=E.length;_;){for(N=E,E=[];++M<_;)N&&N[M].run();M=-1,_=E.length}N=null,A=!1,g(T)}}function v(T,_){this.fun=T,this.array=_}function x(){}var j,S,w=s.exports={};(function(){try{j=typeof setTimeout=="function"?setTimeout:d}catch{j=d}try{S=typeof clearTimeout=="function"?clearTimeout:u}catch{S=u}})();var N,E=[],A=!1,M=-1;w.nextTick=function(T){var _=new Array(arguments.length-1);if(arguments.length>1)for(var R=1;R<arguments.length;R++)_[R-1]=arguments[R];E.push(new v(T,_)),E.length!==1||A||h(m)},v.prototype.run=function(){this.fun.apply(null,this.array)},w.title="browser",w.browser=!0,w.env={},w.argv=[],w.version="",w.versions={},w.on=x,w.addListener=x,w.once=x,w.off=x,w.removeListener=x,w.removeAllListeners=x,w.emit=x,w.prependListener=x,w.prependOnceListener=x,w.listeners=function(T){return[]},w.binding=function(T){throw new Error("process.binding is not supported")},w.cwd=function(){return"/"},w.chdir=function(T){throw new Error("process.chdir is not supported")},w.umask=function(){return 0}},function(s,l,d){d(22).polyfill()},function(s,l,d){function u(g,b){if(g==null)throw new TypeError("Cannot convert first argument to object");for(var m=Object(g),v=1;v<arguments.length;v++){var x=arguments[v];if(x!=null)for(var j=Object.keys(Object(x)),S=0,w=j.length;S<w;S++){var N=j[S],E=Object.getOwnPropertyDescriptor(x,N);E!==void 0&&E.enumerable&&(m[N]=x[N])}}return m}function h(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:u})}s.exports={assign:u,polyfill:h}},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(24),h=d(6),g=d(5),b=d(36),m=function(){for(var v=[],x=0;x<arguments.length;x++)v[x]=arguments[x];if(typeof window<"u"){var j=b.getOpts.apply(void 0,v);return new Promise(function(S,w){g.default.promise={resolve:S,reject:w},u.default(j),setTimeout(function(){h.openModal()})})}};m.close=h.onAction,m.getState=h.getState,m.setActionValue=g.setActionValue,m.stopLoading=h.stopLoading,m.setDefaults=b.setDefaults,l.default=m},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(1),h=d(0),g=h.default.MODAL,b=d(4),m=d(34),v=d(35),x=d(1);l.init=function(j){u.getNode(g)||(document.body||x.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),m.default(),b.default()),b.initModalContent(j),v.default(j)},l.default=l.init},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(0),h=u.default.MODAL;l.modalMarkup=`
  <div class="`+h+'" role="dialog" aria-modal="true"></div>',l.default=l.modalMarkup},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(0),h=u.default.OVERLAY,g=`<div 
    class="`+h+`"
    tabIndex="-1">
  </div>`;l.default=g},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(0),h=u.default.ICON;l.errorIconMarkup=function(){var g=h+"--error",b=g+"__line";return`
    <div class="`+g+`__x-mark">
      <span class="`+b+" "+b+`--left"></span>
      <span class="`+b+" "+b+`--right"></span>
    </div>
  `},l.warningIconMarkup=function(){var g=h+"--warning";return`
    <span class="`+g+`__body">
      <span class="`+g+`__dot"></span>
    </span>
  `},l.successIconMarkup=function(){var g=h+"--success";return`
    <span class="`+g+"__line "+g+`__line--long"></span>
    <span class="`+g+"__line "+g+`__line--tip"></span>

    <div class="`+g+`__ring"></div>
    <div class="`+g+`__hide-corners"></div>
  `}},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(0),h=u.default.CONTENT;l.contentMarkup=`
  <div class="`+h+`">

  </div>
`},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(0),h=u.default.BUTTON_CONTAINER,g=u.default.BUTTON,b=u.default.BUTTON_LOADER;l.buttonMarkup=`
  <div class="`+h+`">

    <button
      class="`+g+`"
    ></button>

    <div class="`+b+`">
      <div></div>
      <div></div>
      <div></div>
    </div>

  </div>
`},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(4),h=d(2),g=d(0),b=g.default.ICON,m=g.default.ICON_CUSTOM,v=["error","warning","success","info"],x={error:h.errorIconMarkup(),warning:h.warningIconMarkup(),success:h.successIconMarkup()},j=function(N,E){var A=b+"--"+N;E.classList.add(A);var M=x[N];M&&(E.innerHTML=M)},S=function(N,E){E.classList.add(m);var A=document.createElement("img");A.src=N,E.appendChild(A)},w=function(N){if(N){var E=u.injectElIntoModal(h.iconMarkup);v.includes(N)?j(N,E):S(N,E)}};l.default=w},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(2),h=d(4),g=function(b){navigator.userAgent.includes("AppleWebKit")&&(b.style.display="none",b.offsetHeight,b.style.display="")};l.initTitle=function(b){if(b){var m=h.injectElIntoModal(u.titleMarkup);m.textContent=b,g(m)}},l.initText=function(b){if(b){var m=document.createDocumentFragment();b.split(`
`).forEach(function(x,j,S){m.appendChild(document.createTextNode(x)),j<S.length-1&&m.appendChild(document.createElement("br"))});var v=h.injectElIntoModal(u.textMarkup);v.appendChild(m),g(v)}}},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(1),h=d(4),g=d(0),b=g.default.BUTTON,m=g.default.DANGER_BUTTON,v=d(3),x=d(2),j=d(6),S=d(5),w=function(E,A,M){var T=A.text,_=A.value,R=A.className,$=A.closeModal,L=u.stringToNode(x.buttonMarkup),B=L.querySelector("."+b),q=b+"--"+E;B.classList.add(q),R&&(Array.isArray(R)?R:R.split(" ")).filter(function(U){return U.length>0}).forEach(function(U){B.classList.add(U)}),M&&E===v.CONFIRM_KEY&&B.classList.add(m),B.textContent=T;var ne={};return ne[E]=_,S.setActionValue(ne),S.setActionOptionsFor(E,{closeModal:$}),B.addEventListener("click",function(){return j.onAction(E)}),L},N=function(E,A){var M=h.injectElIntoModal(x.footerMarkup);for(var T in E){var _=E[T],R=w(T,_,A);_.visible&&M.appendChild(R)}M.children.length===0&&M.remove()};l.default=N},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(3),h=d(4),g=d(2),b=d(5),m=d(6),v=d(0),x=v.default.CONTENT,j=function(N){N.addEventListener("input",function(E){var A=E.target,M=A.value;b.setActionValue(M)}),N.addEventListener("keyup",function(E){if(E.key==="Enter")return m.onAction(u.CONFIRM_KEY)}),setTimeout(function(){N.focus(),b.setActionValue("")},0)},S=function(N,E,A){var M=document.createElement(E),T=x+"__"+E;M.classList.add(T);for(var _ in A){var R=A[_];M[_]=R}E==="input"&&j(M),N.appendChild(M)},w=function(N){if(N){var E=h.injectElIntoModal(g.contentMarkup),A=N.element,M=N.attributes;typeof A=="string"?S(E,A,M):E.appendChild(A)}};l.default=w},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(1),h=d(2),g=function(){var b=u.stringToNode(h.overlayMarkup);document.body.appendChild(b)};l.default=g},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(5),h=d(6),g=d(1),b=d(3),m=d(0),v=m.default.MODAL,x=m.default.BUTTON,j=m.default.OVERLAY,S=function(U){U.preventDefault(),M()},w=function(U){U.preventDefault(),T()},N=function(U){if(u.default.isOpen)switch(U.key){case"Escape":return h.onAction(b.CANCEL_KEY)}},E=function(U){if(u.default.isOpen)switch(U.key){case"Tab":return S(U)}},A=function(U){if(u.default.isOpen)return U.key==="Tab"&&U.shiftKey?w(U):void 0},M=function(){var U=g.getNode(x);U&&(U.tabIndex=0,U.focus())},T=function(){var U=g.getNode(v),D=U.querySelectorAll("."+x),J=D.length-1,se=D[J];se&&se.focus()},_=function(U){U[U.length-1].addEventListener("keydown",E)},R=function(U){U[0].addEventListener("keydown",A)},$=function(){var U=g.getNode(v),D=U.querySelectorAll("."+x);D.length&&(_(D),R(D))},L=function(U){if(g.getNode(j)===U.target)return h.onAction(b.CANCEL_KEY)},B=function(U){var D=g.getNode(j);D.removeEventListener("click",L),U&&D.addEventListener("click",L)},q=function(U){u.default.timer&&clearTimeout(u.default.timer),U&&(u.default.timer=window.setTimeout(function(){return h.onAction(b.CANCEL_KEY)},U))},ne=function(U){U.closeOnEsc?document.addEventListener("keyup",N):document.removeEventListener("keyup",N),U.dangerMode?M():T(),$(),B(U.closeOnClickOutside),q(U.timer)};l.default=ne},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(1),h=d(3),g=d(37),b=d(38),m={title:null,text:null,icon:null,buttons:h.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},v=Object.assign({},m);l.setDefaults=function(A){v=Object.assign({},m,A)};var x=function(A){var M=A&&A.button,T=A&&A.buttons;return M!==void 0&&T!==void 0&&u.throwErr("Cannot set both 'button' and 'buttons' options!"),M!==void 0?{confirm:M}:T},j=function(A){return u.ordinalSuffixOf(A+1)},S=function(A,M){u.throwErr(j(M)+" argument ('"+A+"') is invalid")},w=function(A,M){var T=A+1,_=M[T];u.isPlainObject(_)||_===void 0||u.throwErr("Expected "+j(T)+" argument ('"+_+"') to be a plain object")},N=function(A,M){var T=A+1,_=M[T];_!==void 0&&u.throwErr("Unexpected "+j(T)+" argument ("+_+")")},E=function(A,M,T,_){var R=typeof M,$=R==="string",L=M instanceof Element;if($){if(T===0)return{text:M};if(T===1)return{text:M,title:_[0]};if(T===2)return w(T,_),{icon:M};S(M,T)}else{if(L&&T===0)return w(T,_),{content:M};if(u.isPlainObject(M))return N(T,_),M;S(M,T)}};l.getOpts=function(){for(var A=[],M=0;M<arguments.length;M++)A[M]=arguments[M];var T={};A.forEach(function($,L){var B=E(0,$,L,A);Object.assign(T,B)});var _=x(T);T.buttons=h.getButtonListOpts(_),delete T.button,T.content=g.getContentOpts(T.content);var R=Object.assign({},m,v,T);return Object.keys(R).forEach(function($){b.DEPRECATED_OPTS[$]&&b.logDeprecation($)}),R}},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0});var u=d(1),h={element:"input",attributes:{placeholder:""}};l.getContentOpts=function(g){var b={};return u.isPlainObject(g)?Object.assign(b,g):g instanceof Element?{element:g}:g==="input"?h:null}},function(s,l,d){Object.defineProperty(l,"__esModule",{value:!0}),l.logDeprecation=function(u){var h=l.DEPRECATED_OPTS[u],g=h.onlyRename,b=h.replacement,m=h.subOption,v=h.link,x=g?"renamed":"deprecated",j='SweetAlert warning: "'+u+'" option has been '+x+".";b&&(j+=" Please use"+(m?' "'+m+'" in ':" ")+'"'+b+'" instead.');var S="https://sweetalert.js.org";j+=v?" More details: "+S+v:" More details: "+S+"/guides/#upgrading-from-1x",console.warn(j)},l.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])})}(Jc)),Jc.exports}t_();const r_="[signup action] confirmed signup",n_="[signup action] failed signup",o_="[login action] confirmed login",a_="[login action] failed login",i_="[Loading action] toggle loading",l_="[Logout action] logout action",s_={auth:{email:"",idToken:"",localId:"",expiresIn:"",refreshToken:""},errorMessage:"",successMessage:"",showLoading:!1};function c_(n=s_,i){return i.type===r_?{...n,auth:i.payload,errorMessage:"",successMessage:"Signup Successfully Completed",showLoading:!1}:i.type===o_?{...n,auth:i.payload,errorMessage:"",successMessage:"Login Successfully Completed",showLoading:!1}:i.type===l_?{...n,errorMessage:"",successMessage:"",auth:{email:"",idToken:"",localId:"",expiresIn:"",refreshToken:""}}:i.type===n_||i.type===a_?{...n,errorMessage:i.payload,successMessage:"",showLoading:!1}:i.type===i_?{...n,showLoading:i.payload}:n}const d_={list:[]},u_=(n=d_,i)=>{switch(i.type){case"ADD_TODO":const{id:s,data:l}=i.payload;return{...n,list:[...n.list,{id:s,data:l}]};case"DELETE_TODO":const d=n.list.filter(u=>u.id!==i.id);return{...n,list:d};case"REMOVE_TODO":return{...n,list:[]};default:return n}},f_={users:[]},h_=(n=f_,i)=>{switch(i.type){case Pv:return{...n,users:i.payload};case Hv:return{...n,users:n.users.map(s=>s.id===i.payload.id?i.payload:s)};default:return n}},m_=mN(SN),p_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oy,g_=hN({posts:jN,auth:c_,todoReducers:u_,userReducer:h_}),Ny=ny(g_,p_(m_));nj.createRoot(document.getElementById("root")).render(r.jsx(C.StrictMode,{children:r.jsx(P7,{store:Ny,children:r.jsx(y3,{children:r.jsx(sN,{children:r.jsx(_3,{children:r.jsx(iN,{})})})})})}));
