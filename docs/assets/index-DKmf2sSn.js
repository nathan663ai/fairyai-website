(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qo={exports:{}},Er={},Go={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pa=Symbol.for("react.element"),Mc=Symbol.for("react.portal"),Tc=Symbol.for("react.fragment"),Fc=Symbol.for("react.strict_mode"),Ac=Symbol.for("react.profiler"),Ic=Symbol.for("react.provider"),Dc=Symbol.for("react.context"),Rc=Symbol.for("react.forward_ref"),Oc=Symbol.for("react.suspense"),Wc=Symbol.for("react.memo"),Bc=Symbol.for("react.lazy"),Nl=Symbol.iterator;function Uc(e){return e===null||typeof e!="object"?null:(e=Nl&&e[Nl]||e["@@iterator"],typeof e=="function"?e:null)}var Yo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$o=Object.assign,Vo={};function wn(e,t,n){this.props=e,this.context=t,this.refs=Vo,this.updater=n||Yo}wn.prototype.isReactComponent={};wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zo(){}Zo.prototype=wn.prototype;function js(e,t,n){this.props=e,this.context=t,this.refs=Vo,this.updater=n||Yo}var zs=js.prototype=new Zo;zs.constructor=js;$o(zs,wn.prototype);zs.isPureReactComponent=!0;var Sl=Array.isArray,Qo=Object.prototype.hasOwnProperty,Ns={current:null},Ko={key:!0,ref:!0,__self:!0,__source:!0};function Jo(e,t,n){var r,i={},s=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)Qo.call(t,r)&&!Ko.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var u=Array(o),d=0;d<o;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:pa,type:e,key:s,ref:l,props:i,_owner:Ns.current}}function Hc(e,t){return{$$typeof:pa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ss(e){return typeof e=="object"&&e!==null&&e.$$typeof===pa}function qc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ll=/\/+/g;function Kr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qc(""+e.key):t.toString(36)}function Ua(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case pa:case Mc:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Kr(l,0):r,Sl(i)?(n="",e!=null&&(n=e.replace(Ll,"$&/")+"/"),Ua(i,t,n,"",function(d){return d})):i!=null&&(Ss(i)&&(i=Hc(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ll,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Sl(e))for(var o=0;o<e.length;o++){s=e[o];var u=r+Kr(s,o);l+=Ua(s,t,n,u,i)}else if(u=Uc(e),typeof u=="function")for(e=u.call(e),o=0;!(s=e.next()).done;)s=s.value,u=r+Kr(s,o++),l+=Ua(s,t,n,u,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ja(e,t,n){if(e==null)return e;var r=[],i=0;return Ua(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Gc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},Ha={transition:null},Yc={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:Ha,ReactCurrentOwner:Ns};function Xo(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:ja,forEach:function(e,t,n){ja(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ja(e,function(){t++}),t},toArray:function(e){return ja(e,function(t){return t})||[]},only:function(e){if(!Ss(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=wn;T.Fragment=Tc;T.Profiler=Ac;T.PureComponent=js;T.StrictMode=Fc;T.Suspense=Oc;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yc;T.act=Xo;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$o({},e.props),i=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=Ns.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in t)Qo.call(t,u)&&!Ko.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&o!==void 0?o[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){o=Array(u);for(var d=0;d<u;d++)o[d]=arguments[d+2];r.children=o}return{$$typeof:pa,type:e.type,key:i,ref:s,props:r,_owner:l}};T.createContext=function(e){return e={$$typeof:Dc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ic,_context:e},e.Consumer=e};T.createElement=Jo;T.createFactory=function(e){var t=Jo.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:Rc,render:e}};T.isValidElement=Ss;T.lazy=function(e){return{$$typeof:Bc,_payload:{_status:-1,_result:e},_init:Gc}};T.memo=function(e,t){return{$$typeof:Wc,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=Ha.transition;Ha.transition={};try{e()}finally{Ha.transition=t}};T.unstable_act=Xo;T.useCallback=function(e,t){return me.current.useCallback(e,t)};T.useContext=function(e){return me.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return me.current.useDeferredValue(e)};T.useEffect=function(e,t){return me.current.useEffect(e,t)};T.useId=function(){return me.current.useId()};T.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return me.current.useMemo(e,t)};T.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};T.useRef=function(e){return me.current.useRef(e)};T.useState=function(e){return me.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return me.current.useTransition()};T.version="18.3.1";Go.exports=T;var x=Go.exports;const eu=_c(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $c=x,Vc=Symbol.for("react.element"),Zc=Symbol.for("react.fragment"),Qc=Object.prototype.hasOwnProperty,Kc=$c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jc={key:!0,ref:!0,__self:!0,__source:!0};function tu(e,t,n){var r,i={},s=null,l=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Qc.call(t,r)&&!Jc.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Vc,type:e,key:s,ref:l,props:i,_owner:Kc.current}}Er.Fragment=Zc;Er.jsx=tu;Er.jsxs=tu;qo.exports=Er;var a=qo.exports,Li={},nu={exports:{}},Ne={},au={exports:{}},ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,_){var M=C.length;C.push(_);e:for(;0<M;){var Y=M-1>>>1,K=C[Y];if(0<i(K,_))C[Y]=_,C[M]=K,M=Y;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var _=C[0],M=C.pop();if(M!==_){C[0]=M;e:for(var Y=0,K=C.length,ba=K>>>1;Y<ba;){var Et=2*(Y+1)-1,Qr=C[Et],Pt=Et+1,ka=C[Pt];if(0>i(Qr,M))Pt<K&&0>i(ka,Qr)?(C[Y]=ka,C[Pt]=M,Y=Pt):(C[Y]=Qr,C[Et]=M,Y=Et);else if(Pt<K&&0>i(ka,M))C[Y]=ka,C[Pt]=M,Y=Pt;else break e}}return _}function i(C,_){var M=C.sortIndex-_.sortIndex;return M!==0?M:C.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var u=[],d=[],g=1,f=null,m=3,w=!1,y=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(C){for(var _=n(d);_!==null;){if(_.callback===null)r(d);else if(_.startTime<=C)r(d),_.sortIndex=_.expirationTime,t(u,_);else break;_=n(d)}}function b(C){if(v=!1,p(C),!y)if(n(u)!==null)y=!0,Vr(z);else{var _=n(d);_!==null&&Zr(b,_.startTime-C)}}function z(C,_){y=!1,v&&(v=!1,h(E),E=-1),w=!0;var M=m;try{for(p(_),f=n(u);f!==null&&(!(f.expirationTime>_)||C&&!pe());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,m=f.priorityLevel;var K=Y(f.expirationTime<=_);_=e.unstable_now(),typeof K=="function"?f.callback=K:f===n(u)&&r(u),p(_)}else r(u);f=n(u)}if(f!==null)var ba=!0;else{var Et=n(d);Et!==null&&Zr(b,Et.startTime-_),ba=!1}return ba}finally{f=null,m=M,w=!1}}var N=!1,L=null,E=-1,F=5,P=-1;function pe(){return!(e.unstable_now()-P<F)}function Sn(){if(L!==null){var C=e.unstable_now();P=C;var _=!0;try{_=L(!0,C)}finally{_?Ln():(N=!1,L=null)}}else N=!1}var Ln;if(typeof c=="function")Ln=function(){c(Sn)};else if(typeof MessageChannel<"u"){var zl=new MessageChannel,Pc=zl.port2;zl.port1.onmessage=Sn,Ln=function(){Pc.postMessage(null)}}else Ln=function(){k(Sn,0)};function Vr(C){L=C,N||(N=!0,Ln())}function Zr(C,_){E=k(function(){C(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,Vr(z))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(C){switch(m){case 1:case 2:case 3:var _=3;break;default:_=m}var M=m;m=_;try{return C()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,_){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var M=m;m=C;try{return _()}finally{m=M}},e.unstable_scheduleCallback=function(C,_,M){var Y=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?Y+M:Y):M=Y,C){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=M+K,C={id:g++,callback:_,priorityLevel:C,startTime:M,expirationTime:K,sortIndex:-1},M>Y?(C.sortIndex=M,t(d,C),n(u)===null&&C===n(d)&&(v?(h(E),E=-1):v=!0,Zr(b,M-Y))):(C.sortIndex=K,t(u,C),y||w||(y=!0,Vr(z))),C},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(C){var _=m;return function(){var M=m;m=_;try{return C.apply(this,arguments)}finally{m=M}}}})(ru);au.exports=ru;var Xc=au.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em=x,ze=Xc;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iu=new Set,Qn={};function Gt(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(Qn[e]=t,e=0;e<t.length;e++)iu.add(t[e])}var nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ci=Object.prototype.hasOwnProperty,tm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cl={},El={};function nm(e){return Ci.call(El,e)?!0:Ci.call(Cl,e)?!1:tm.test(e)?El[e]=!0:(Cl[e]=!0,!1)}function am(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rm(e,t,n,r){if(t===null||typeof t>"u"||am(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,i,s,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=l}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ls=/[\-:]([a-z])/g;function Cs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ls,Cs);ae[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ls,Cs);ae[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ls,Cs);ae[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function Es(e,t,n,r){var i=ae.hasOwnProperty(t)?ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(rm(t,n,i,r)&&(n=null),r||i===null?nm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var lt=em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),Ps=Symbol.for("react.strict_mode"),Ei=Symbol.for("react.profiler"),su=Symbol.for("react.provider"),lu=Symbol.for("react.context"),_s=Symbol.for("react.forward_ref"),Pi=Symbol.for("react.suspense"),_i=Symbol.for("react.suspense_list"),Ms=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),ou=Symbol.for("react.offscreen"),Pl=Symbol.iterator;function Cn(e){return e===null||typeof e!="object"?null:(e=Pl&&e[Pl]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,Jr;function Dn(e){if(Jr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jr=t&&t[1]||""}return`
`+Jr+e}var Xr=!1;function ei(e,t){if(!e||Xr)return"";Xr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),l=i.length-1,o=s.length-1;1<=l&&0<=o&&i[l]!==s[o];)o--;for(;1<=l&&0<=o;l--,o--)if(i[l]!==s[o]){if(l!==1||o!==1)do if(l--,o--,0>o||i[l]!==s[o]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=o);break}}}finally{Xr=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dn(e):""}function im(e){switch(e.tag){case 5:return Dn(e.type);case 16:return Dn("Lazy");case 13:return Dn("Suspense");case 19:return Dn("SuspenseList");case 0:case 2:case 15:return e=ei(e.type,!1),e;case 11:return e=ei(e.type.render,!1),e;case 1:return e=ei(e.type,!0),e;default:return""}}function Mi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Vt:return"Portal";case Ei:return"Profiler";case Ps:return"StrictMode";case Pi:return"Suspense";case _i:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lu:return(e.displayName||"Context")+".Consumer";case su:return(e._context.displayName||"Context")+".Provider";case _s:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ms:return t=e.displayName||null,t!==null?t:Mi(e.type)||"Memo";case ut:t=e._payload,e=e._init;try{return Mi(e(t))}catch{}}return null}function sm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mi(t);case 8:return t===Ps?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lm(e){var t=uu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Na(e){e._valueTracker||(e._valueTracker=lm(e))}function du(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=uu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ti(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _l(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cu(e,t){t=t.checked,t!=null&&Es(e,"checked",t,!1)}function Fi(e,t){cu(e,t);var n=jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ai(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ai(e,t.type,jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ml(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ai(e,t,n){(t!=="number"||rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Rn=Array.isArray;function ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ii(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Tl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Rn(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jt(n)}}function mu(e,t){var n=jt(t.value),r=jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sa,pu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Sa=Sa||document.createElement("div"),Sa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Sa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},om=["Webkit","ms","Moz","O"];Object.keys(Bn).forEach(function(e){om.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bn[t]=Bn[e]})});function fu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bn.hasOwnProperty(e)&&Bn[e]?(""+t).trim():t+"px"}function gu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var um=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ri(e,t){if(t){if(um[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Oi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wi=null;function Ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bi=null,on=null,un=null;function Al(e){if(e=xa(e)){if(typeof Bi!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Fr(t),Bi(e.stateNode,e.type,t))}}function xu(e){on?un?un.push(e):un=[e]:on=e}function yu(){if(on){var e=on,t=un;if(un=on=null,Al(e),t)for(e=0;e<t.length;e++)Al(t[e])}}function vu(e,t){return e(t)}function wu(){}var ti=!1;function bu(e,t,n){if(ti)return e(t,n);ti=!0;try{return vu(e,t,n)}finally{ti=!1,(on!==null||un!==null)&&(wu(),yu())}}function Jn(e,t){var n=e.stateNode;if(n===null)return null;var r=Fr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Ui=!1;if(nt)try{var En={};Object.defineProperty(En,"passive",{get:function(){Ui=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Ui=!1}function dm(e,t,n,r,i,s,l,o,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var Un=!1,ir=null,sr=!1,Hi=null,cm={onError:function(e){Un=!0,ir=e}};function mm(e,t,n,r,i,s,l,o,u){Un=!1,ir=null,dm.apply(cm,arguments)}function hm(e,t,n,r,i,s,l,o,u){if(mm.apply(this,arguments),Un){if(Un){var d=ir;Un=!1,ir=null}else throw Error(j(198));sr||(sr=!0,Hi=d)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ku(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Il(e){if(Yt(e)!==e)throw Error(j(188))}function pm(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Il(i),e;if(s===r)return Il(i),t;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var l=!1,o=i.child;o;){if(o===n){l=!0,n=i,r=s;break}if(o===r){l=!0,r=i,n=s;break}o=o.sibling}if(!l){for(o=s.child;o;){if(o===n){l=!0,n=s,r=i;break}if(o===r){l=!0,r=s,n=i;break}o=o.sibling}if(!l)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function ju(e){return e=pm(e),e!==null?zu(e):null}function zu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zu(e);if(t!==null)return t;e=e.sibling}return null}var Nu=ze.unstable_scheduleCallback,Dl=ze.unstable_cancelCallback,fm=ze.unstable_shouldYield,gm=ze.unstable_requestPaint,$=ze.unstable_now,xm=ze.unstable_getCurrentPriorityLevel,Fs=ze.unstable_ImmediatePriority,Su=ze.unstable_UserBlockingPriority,lr=ze.unstable_NormalPriority,ym=ze.unstable_LowPriority,Lu=ze.unstable_IdlePriority,Pr=null,$e=null;function vm(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Pr,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:km,wm=Math.log,bm=Math.LN2;function km(e){return e>>>=0,e===0?32:31-(wm(e)/bm|0)|0}var La=64,Ca=4194304;function On(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function or(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,l=n&268435455;if(l!==0){var o=l&~i;o!==0?r=On(o):(s&=l,s!==0&&(r=On(s)))}else l=n&~i,l!==0?r=On(l):s!==0&&(r=On(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Re(t),i=1<<n,r|=e[n],t&=~i;return r}function jm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Re(s),o=1<<l,u=i[l];u===-1?(!(o&n)||o&r)&&(i[l]=jm(o,t)):u<=t&&(e.expiredLanes|=o),s&=~o}}function qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cu(){var e=La;return La<<=1,!(La&4194240)&&(La=64),e}function ni(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Re(t),e[t]=n}function Nm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Re(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function As(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var I=0;function Eu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pu,Is,_u,Mu,Tu,Gi=!1,Ea=[],ft=null,gt=null,xt=null,Xn=new Map,ea=new Map,ct=[],Sm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rl(e,t){switch(e){case"focusin":case"focusout":ft=null;break;case"dragenter":case"dragleave":gt=null;break;case"mouseover":case"mouseout":xt=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(t.pointerId)}}function Pn(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=xa(t),t!==null&&Is(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Lm(e,t,n,r,i){switch(t){case"focusin":return ft=Pn(ft,e,t,n,r,i),!0;case"dragenter":return gt=Pn(gt,e,t,n,r,i),!0;case"mouseover":return xt=Pn(xt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Xn.set(s,Pn(Xn.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ea.set(s,Pn(ea.get(s)||null,e,t,n,r,i)),!0}return!1}function Fu(e){var t=Tt(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=ku(n),t!==null){e.blockedOn=t,Tu(e.priority,function(){_u(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Wi=r,n.target.dispatchEvent(r),Wi=null}else return t=xa(n),t!==null&&Is(t),e.blockedOn=n,!1;t.shift()}return!0}function Ol(e,t,n){qa(e)&&n.delete(t)}function Cm(){Gi=!1,ft!==null&&qa(ft)&&(ft=null),gt!==null&&qa(gt)&&(gt=null),xt!==null&&qa(xt)&&(xt=null),Xn.forEach(Ol),ea.forEach(Ol)}function _n(e,t){e.blockedOn===t&&(e.blockedOn=null,Gi||(Gi=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Cm)))}function ta(e){function t(i){return _n(i,e)}if(0<Ea.length){_n(Ea[0],e);for(var n=1;n<Ea.length;n++){var r=Ea[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ft!==null&&_n(ft,e),gt!==null&&_n(gt,e),xt!==null&&_n(xt,e),Xn.forEach(t),ea.forEach(t),n=0;n<ct.length;n++)r=ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ct.length&&(n=ct[0],n.blockedOn===null);)Fu(n),n.blockedOn===null&&ct.shift()}var dn=lt.ReactCurrentBatchConfig,ur=!0;function Em(e,t,n,r){var i=I,s=dn.transition;dn.transition=null;try{I=1,Ds(e,t,n,r)}finally{I=i,dn.transition=s}}function Pm(e,t,n,r){var i=I,s=dn.transition;dn.transition=null;try{I=4,Ds(e,t,n,r)}finally{I=i,dn.transition=s}}function Ds(e,t,n,r){if(ur){var i=Yi(e,t,n,r);if(i===null)mi(e,t,r,dr,n),Rl(e,r);else if(Lm(i,e,t,n,r))r.stopPropagation();else if(Rl(e,r),t&4&&-1<Sm.indexOf(e)){for(;i!==null;){var s=xa(i);if(s!==null&&Pu(s),s=Yi(e,t,n,r),s===null&&mi(e,t,r,dr,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mi(e,t,r,null,n)}}var dr=null;function Yi(e,t,n,r){if(dr=null,e=Ts(r),e=Tt(e),e!==null)if(t=Yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ku(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return dr=e,null}function Au(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xm()){case Fs:return 1;case Su:return 4;case lr:case ym:return 16;case Lu:return 536870912;default:return 16}default:return 16}}var ht=null,Rs=null,Ga=null;function Iu(){if(Ga)return Ga;var e,t=Rs,n=t.length,r,i="value"in ht?ht.value:ht.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[s-r];r++);return Ga=i.slice(e,1<r?1-r:void 0)}function Ya(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pa(){return!0}function Wl(){return!1}function Se(e){function t(n,r,i,s,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Pa:Wl,this.isPropagationStopped=Wl,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),t}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Os=Se(bn),ga=q({},bn,{view:0,detail:0}),_m=Se(ga),ai,ri,Mn,_r=q({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ws,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mn&&(Mn&&e.type==="mousemove"?(ai=e.screenX-Mn.screenX,ri=e.screenY-Mn.screenY):ri=ai=0,Mn=e),ai)},movementY:function(e){return"movementY"in e?e.movementY:ri}}),Bl=Se(_r),Mm=q({},_r,{dataTransfer:0}),Tm=Se(Mm),Fm=q({},ga,{relatedTarget:0}),ii=Se(Fm),Am=q({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Im=Se(Am),Dm=q({},bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rm=Se(Dm),Om=q({},bn,{data:0}),Ul=Se(Om),Wm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Um={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Um[e])?!!t[e]:!1}function Ws(){return Hm}var qm=q({},ga,{key:function(e){if(e.key){var t=Wm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ya(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ws,charCode:function(e){return e.type==="keypress"?Ya(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ya(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gm=Se(qm),Ym=q({},_r,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hl=Se(Ym),$m=q({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ws}),Vm=Se($m),Zm=q({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qm=Se(Zm),Km=q({},_r,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jm=Se(Km),Xm=[9,13,27,32],Bs=nt&&"CompositionEvent"in window,Hn=null;nt&&"documentMode"in document&&(Hn=document.documentMode);var eh=nt&&"TextEvent"in window&&!Hn,Du=nt&&(!Bs||Hn&&8<Hn&&11>=Hn),ql=" ",Gl=!1;function Ru(e,t){switch(e){case"keyup":return Xm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ou(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function th(e,t){switch(e){case"compositionend":return Ou(t);case"keypress":return t.which!==32?null:(Gl=!0,ql);case"textInput":return e=t.data,e===ql&&Gl?null:e;default:return null}}function nh(e,t){if(Qt)return e==="compositionend"||!Bs&&Ru(e,t)?(e=Iu(),Ga=Rs=ht=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Du&&t.locale!=="ko"?null:t.data;default:return null}}var ah={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ah[e.type]:t==="textarea"}function Wu(e,t,n,r){xu(r),t=cr(t,"onChange"),0<t.length&&(n=new Os("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,na=null;function rh(e){Ku(e,0)}function Mr(e){var t=Xt(e);if(du(t))return e}function ih(e,t){if(e==="change")return t}var Bu=!1;if(nt){var si;if(nt){var li="oninput"in document;if(!li){var $l=document.createElement("div");$l.setAttribute("oninput","return;"),li=typeof $l.oninput=="function"}si=li}else si=!1;Bu=si&&(!document.documentMode||9<document.documentMode)}function Vl(){qn&&(qn.detachEvent("onpropertychange",Uu),na=qn=null)}function Uu(e){if(e.propertyName==="value"&&Mr(na)){var t=[];Wu(t,na,e,Ts(e)),bu(rh,t)}}function sh(e,t,n){e==="focusin"?(Vl(),qn=t,na=n,qn.attachEvent("onpropertychange",Uu)):e==="focusout"&&Vl()}function lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mr(na)}function oh(e,t){if(e==="click")return Mr(t)}function uh(e,t){if(e==="input"||e==="change")return Mr(t)}function dh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:dh;function aa(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ci.call(t,i)||!We(e[i],t[i]))return!1}return!0}function Zl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ql(e,t){var n=Zl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zl(n)}}function Hu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qu(){for(var e=window,t=rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=rr(e.document)}return t}function Us(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ch(e){var t=qu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hu(n.ownerDocument.documentElement,n)){if(r!==null&&Us(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Ql(n,s);var l=Ql(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mh=nt&&"documentMode"in document&&11>=document.documentMode,Kt=null,$i=null,Gn=null,Vi=!1;function Kl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vi||Kt==null||Kt!==rr(r)||(r=Kt,"selectionStart"in r&&Us(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gn&&aa(Gn,r)||(Gn=r,r=cr($i,"onSelect"),0<r.length&&(t=new Os("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kt)))}function _a(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jt={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},oi={},Gu={};nt&&(Gu=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function Tr(e){if(oi[e])return oi[e];if(!Jt[e])return e;var t=Jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gu)return oi[e]=t[n];return e}var Yu=Tr("animationend"),$u=Tr("animationiteration"),Vu=Tr("animationstart"),Zu=Tr("transitionend"),Qu=new Map,Jl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nt(e,t){Qu.set(e,t),Gt(t,[e])}for(var ui=0;ui<Jl.length;ui++){var di=Jl[ui],hh=di.toLowerCase(),ph=di[0].toUpperCase()+di.slice(1);Nt(hh,"on"+ph)}Nt(Yu,"onAnimationEnd");Nt($u,"onAnimationIteration");Nt(Vu,"onAnimationStart");Nt("dblclick","onDoubleClick");Nt("focusin","onFocus");Nt("focusout","onBlur");Nt(Zu,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wn));function Xl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,hm(r,t,void 0,e),e.currentTarget=null}function Ku(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var l=r.length-1;0<=l;l--){var o=r[l],u=o.instance,d=o.currentTarget;if(o=o.listener,u!==s&&i.isPropagationStopped())break e;Xl(i,o,d),s=u}else for(l=0;l<r.length;l++){if(o=r[l],u=o.instance,d=o.currentTarget,o=o.listener,u!==s&&i.isPropagationStopped())break e;Xl(i,o,d),s=u}}}if(sr)throw e=Hi,sr=!1,Hi=null,e}function R(e,t){var n=t[Xi];n===void 0&&(n=t[Xi]=new Set);var r=e+"__bubble";n.has(r)||(Ju(t,e,2,!1),n.add(r))}function ci(e,t,n){var r=0;t&&(r|=4),Ju(n,e,r,t)}var Ma="_reactListening"+Math.random().toString(36).slice(2);function ra(e){if(!e[Ma]){e[Ma]=!0,iu.forEach(function(n){n!=="selectionchange"&&(fh.has(n)||ci(n,!1,e),ci(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ma]||(t[Ma]=!0,ci("selectionchange",!1,t))}}function Ju(e,t,n,r){switch(Au(t)){case 1:var i=Em;break;case 4:i=Pm;break;default:i=Ds}n=i.bind(null,t,n,e),i=void 0,!Ui||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function mi(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;o!==null;){if(l=Tt(o),l===null)return;if(u=l.tag,u===5||u===6){r=s=l;continue e}o=o.parentNode}}r=r.return}bu(function(){var d=s,g=Ts(n),f=[];e:{var m=Qu.get(e);if(m!==void 0){var w=Os,y=e;switch(e){case"keypress":if(Ya(n)===0)break e;case"keydown":case"keyup":w=Gm;break;case"focusin":y="focus",w=ii;break;case"focusout":y="blur",w=ii;break;case"beforeblur":case"afterblur":w=ii;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Bl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Vm;break;case Yu:case $u:case Vu:w=Im;break;case Zu:w=Qm;break;case"scroll":w=_m;break;case"wheel":w=Jm;break;case"copy":case"cut":case"paste":w=Rm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Hl}var v=(t&4)!==0,k=!v&&e==="scroll",h=v?m!==null?m+"Capture":null:m;v=[];for(var c=d,p;c!==null;){p=c;var b=p.stateNode;if(p.tag===5&&b!==null&&(p=b,h!==null&&(b=Jn(c,h),b!=null&&v.push(ia(c,b,p)))),k)break;c=c.return}0<v.length&&(m=new w(m,y,null,n,g),f.push({event:m,listeners:v}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==Wi&&(y=n.relatedTarget||n.fromElement)&&(Tt(y)||y[at]))break e;if((w||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=d,y=y?Tt(y):null,y!==null&&(k=Yt(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=d),w!==y)){if(v=Bl,b="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Hl,b="onPointerLeave",h="onPointerEnter",c="pointer"),k=w==null?m:Xt(w),p=y==null?m:Xt(y),m=new v(b,c+"leave",w,n,g),m.target=k,m.relatedTarget=p,b=null,Tt(g)===d&&(v=new v(h,c+"enter",y,n,g),v.target=p,v.relatedTarget=k,b=v),k=b,w&&y)t:{for(v=w,h=y,c=0,p=v;p;p=$t(p))c++;for(p=0,b=h;b;b=$t(b))p++;for(;0<c-p;)v=$t(v),c--;for(;0<p-c;)h=$t(h),p--;for(;c--;){if(v===h||h!==null&&v===h.alternate)break t;v=$t(v),h=$t(h)}v=null}else v=null;w!==null&&eo(f,m,w,v,!1),y!==null&&k!==null&&eo(f,k,y,v,!0)}}e:{if(m=d?Xt(d):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var z=ih;else if(Yl(m))if(Bu)z=uh;else{z=lh;var N=sh}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=oh);if(z&&(z=z(e,d))){Wu(f,z,n,g);break e}N&&N(e,m,d),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&Ai(m,"number",m.value)}switch(N=d?Xt(d):window,e){case"focusin":(Yl(N)||N.contentEditable==="true")&&(Kt=N,$i=d,Gn=null);break;case"focusout":Gn=$i=Kt=null;break;case"mousedown":Vi=!0;break;case"contextmenu":case"mouseup":case"dragend":Vi=!1,Kl(f,n,g);break;case"selectionchange":if(mh)break;case"keydown":case"keyup":Kl(f,n,g)}var L;if(Bs)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Qt?Ru(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Du&&n.locale!=="ko"&&(Qt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Qt&&(L=Iu()):(ht=g,Rs="value"in ht?ht.value:ht.textContent,Qt=!0)),N=cr(d,E),0<N.length&&(E=new Ul(E,e,null,n,g),f.push({event:E,listeners:N}),L?E.data=L:(L=Ou(n),L!==null&&(E.data=L)))),(L=eh?th(e,n):nh(e,n))&&(d=cr(d,"onBeforeInput"),0<d.length&&(g=new Ul("onBeforeInput","beforeinput",null,n,g),f.push({event:g,listeners:d}),g.data=L))}Ku(f,t)})}function ia(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Jn(e,n),s!=null&&r.unshift(ia(e,s,i)),s=Jn(e,t),s!=null&&r.push(ia(e,s,i))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eo(e,t,n,r,i){for(var s=t._reactName,l=[];n!==null&&n!==r;){var o=n,u=o.alternate,d=o.stateNode;if(u!==null&&u===r)break;o.tag===5&&d!==null&&(o=d,i?(u=Jn(n,s),u!=null&&l.unshift(ia(n,u,o))):i||(u=Jn(n,s),u!=null&&l.push(ia(n,u,o)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var gh=/\r\n?/g,xh=/\u0000|\uFFFD/g;function to(e){return(typeof e=="string"?e:""+e).replace(gh,`
`).replace(xh,"")}function Ta(e,t,n){if(t=to(t),to(e)!==t&&n)throw Error(j(425))}function mr(){}var Zi=null,Qi=null;function Ki(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ji=typeof setTimeout=="function"?setTimeout:void 0,yh=typeof clearTimeout=="function"?clearTimeout:void 0,no=typeof Promise=="function"?Promise:void 0,vh=typeof queueMicrotask=="function"?queueMicrotask:typeof no<"u"?function(e){return no.resolve(null).then(e).catch(wh)}:Ji;function wh(e){setTimeout(function(){throw e})}function hi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ta(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ta(t)}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ao(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),Ye="__reactFiber$"+kn,sa="__reactProps$"+kn,at="__reactContainer$"+kn,Xi="__reactEvents$"+kn,bh="__reactListeners$"+kn,kh="__reactHandles$"+kn;function Tt(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ao(e);e!==null;){if(n=e[Ye])return n;e=ao(e)}return t}e=n,n=e.parentNode}return null}function xa(e){return e=e[Ye]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Fr(e){return e[sa]||null}var es=[],en=-1;function St(e){return{current:e}}function O(e){0>en||(e.current=es[en],es[en]=null,en--)}function D(e,t){en++,es[en]=e.current,e.current=t}var zt={},oe=St(zt),xe=St(!1),Rt=zt;function pn(e,t){var n=e.type.contextTypes;if(!n)return zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ye(e){return e=e.childContextTypes,e!=null}function hr(){O(xe),O(oe)}function ro(e,t,n){if(oe.current!==zt)throw Error(j(168));D(oe,t),D(xe,n)}function Xu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,sm(e)||"Unknown",i));return q({},n,r)}function pr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,Rt=oe.current,D(oe,e),D(xe,xe.current),!0}function io(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Xu(e,t,Rt),r.__reactInternalMemoizedMergedChildContext=e,O(xe),O(oe),D(oe,e)):O(xe),D(xe,n)}var Ke=null,Ar=!1,pi=!1;function ed(e){Ke===null?Ke=[e]:Ke.push(e)}function jh(e){Ar=!0,ed(e)}function Lt(){if(!pi&&Ke!==null){pi=!0;var e=0,t=I;try{var n=Ke;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ke=null,Ar=!1}catch(i){throw Ke!==null&&(Ke=Ke.slice(e+1)),Nu(Fs,Lt),i}finally{I=t,pi=!1}}return null}var tn=[],nn=0,fr=null,gr=0,Le=[],Ce=0,Ot=null,Je=1,Xe="";function _t(e,t){tn[nn++]=gr,tn[nn++]=fr,fr=e,gr=t}function td(e,t,n){Le[Ce++]=Je,Le[Ce++]=Xe,Le[Ce++]=Ot,Ot=e;var r=Je;e=Xe;var i=32-Re(r)-1;r&=~(1<<i),n+=1;var s=32-Re(t)+i;if(30<s){var l=i-i%5;s=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Je=1<<32-Re(t)+i|n<<i|r,Xe=s+e}else Je=1<<s|n<<i|r,Xe=e}function Hs(e){e.return!==null&&(_t(e,1),td(e,1,0))}function qs(e){for(;e===fr;)fr=tn[--nn],tn[nn]=null,gr=tn[--nn],tn[nn]=null;for(;e===Ot;)Ot=Le[--Ce],Le[Ce]=null,Xe=Le[--Ce],Le[Ce]=null,Je=Le[--Ce],Le[Ce]=null}var je=null,ke=null,W=!1,De=null;function nd(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function so(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,ke=yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:Je,overflow:Xe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,ke=null,!0):!1;default:return!1}}function ts(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ns(e){if(W){var t=ke;if(t){var n=t;if(!so(e,t)){if(ts(e))throw Error(j(418));t=yt(n.nextSibling);var r=je;t&&so(e,t)?nd(r,n):(e.flags=e.flags&-4097|2,W=!1,je=e)}}else{if(ts(e))throw Error(j(418));e.flags=e.flags&-4097|2,W=!1,je=e}}}function lo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Fa(e){if(e!==je)return!1;if(!W)return lo(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ki(e.type,e.memoizedProps)),t&&(t=ke)){if(ts(e))throw ad(),Error(j(418));for(;t;)nd(e,t),t=yt(t.nextSibling)}if(lo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ke=yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ke=null}}else ke=je?yt(e.stateNode.nextSibling):null;return!0}function ad(){for(var e=ke;e;)e=yt(e.nextSibling)}function fn(){ke=je=null,W=!1}function Gs(e){De===null?De=[e]:De.push(e)}var zh=lt.ReactCurrentBatchConfig;function Tn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(l){var o=i.refs;l===null?delete o[s]:o[s]=l},t._stringRef=s,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Aa(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function oo(e){var t=e._init;return t(e._payload)}function rd(e){function t(h,c){if(e){var p=h.deletions;p===null?(h.deletions=[c],h.flags|=16):p.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=kt(h,c),h.index=0,h.sibling=null,h}function s(h,c,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<c?(h.flags|=2,c):p):(h.flags|=2,c)):(h.flags|=1048576,c)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function o(h,c,p,b){return c===null||c.tag!==6?(c=bi(p,h.mode,b),c.return=h,c):(c=i(c,p),c.return=h,c)}function u(h,c,p,b){var z=p.type;return z===Zt?g(h,c,p.props.children,b,p.key):c!==null&&(c.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===ut&&oo(z)===c.type)?(b=i(c,p.props),b.ref=Tn(h,c,p),b.return=h,b):(b=Xa(p.type,p.key,p.props,null,h.mode,b),b.ref=Tn(h,c,p),b.return=h,b)}function d(h,c,p,b){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=ki(p,h.mode,b),c.return=h,c):(c=i(c,p.children||[]),c.return=h,c)}function g(h,c,p,b,z){return c===null||c.tag!==7?(c=Dt(p,h.mode,b,z),c.return=h,c):(c=i(c,p),c.return=h,c)}function f(h,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=bi(""+c,h.mode,p),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case za:return p=Xa(c.type,c.key,c.props,null,h.mode,p),p.ref=Tn(h,null,c),p.return=h,p;case Vt:return c=ki(c,h.mode,p),c.return=h,c;case ut:var b=c._init;return f(h,b(c._payload),p)}if(Rn(c)||Cn(c))return c=Dt(c,h.mode,p,null),c.return=h,c;Aa(h,c)}return null}function m(h,c,p,b){var z=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return z!==null?null:o(h,c,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case za:return p.key===z?u(h,c,p,b):null;case Vt:return p.key===z?d(h,c,p,b):null;case ut:return z=p._init,m(h,c,z(p._payload),b)}if(Rn(p)||Cn(p))return z!==null?null:g(h,c,p,b,null);Aa(h,p)}return null}function w(h,c,p,b,z){if(typeof b=="string"&&b!==""||typeof b=="number")return h=h.get(p)||null,o(c,h,""+b,z);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case za:return h=h.get(b.key===null?p:b.key)||null,u(c,h,b,z);case Vt:return h=h.get(b.key===null?p:b.key)||null,d(c,h,b,z);case ut:var N=b._init;return w(h,c,p,N(b._payload),z)}if(Rn(b)||Cn(b))return h=h.get(p)||null,g(c,h,b,z,null);Aa(c,b)}return null}function y(h,c,p,b){for(var z=null,N=null,L=c,E=c=0,F=null;L!==null&&E<p.length;E++){L.index>E?(F=L,L=null):F=L.sibling;var P=m(h,L,p[E],b);if(P===null){L===null&&(L=F);break}e&&L&&P.alternate===null&&t(h,L),c=s(P,c,E),N===null?z=P:N.sibling=P,N=P,L=F}if(E===p.length)return n(h,L),W&&_t(h,E),z;if(L===null){for(;E<p.length;E++)L=f(h,p[E],b),L!==null&&(c=s(L,c,E),N===null?z=L:N.sibling=L,N=L);return W&&_t(h,E),z}for(L=r(h,L);E<p.length;E++)F=w(L,h,E,p[E],b),F!==null&&(e&&F.alternate!==null&&L.delete(F.key===null?E:F.key),c=s(F,c,E),N===null?z=F:N.sibling=F,N=F);return e&&L.forEach(function(pe){return t(h,pe)}),W&&_t(h,E),z}function v(h,c,p,b){var z=Cn(p);if(typeof z!="function")throw Error(j(150));if(p=z.call(p),p==null)throw Error(j(151));for(var N=z=null,L=c,E=c=0,F=null,P=p.next();L!==null&&!P.done;E++,P=p.next()){L.index>E?(F=L,L=null):F=L.sibling;var pe=m(h,L,P.value,b);if(pe===null){L===null&&(L=F);break}e&&L&&pe.alternate===null&&t(h,L),c=s(pe,c,E),N===null?z=pe:N.sibling=pe,N=pe,L=F}if(P.done)return n(h,L),W&&_t(h,E),z;if(L===null){for(;!P.done;E++,P=p.next())P=f(h,P.value,b),P!==null&&(c=s(P,c,E),N===null?z=P:N.sibling=P,N=P);return W&&_t(h,E),z}for(L=r(h,L);!P.done;E++,P=p.next())P=w(L,h,E,P.value,b),P!==null&&(e&&P.alternate!==null&&L.delete(P.key===null?E:P.key),c=s(P,c,E),N===null?z=P:N.sibling=P,N=P);return e&&L.forEach(function(Sn){return t(h,Sn)}),W&&_t(h,E),z}function k(h,c,p,b){if(typeof p=="object"&&p!==null&&p.type===Zt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case za:e:{for(var z=p.key,N=c;N!==null;){if(N.key===z){if(z=p.type,z===Zt){if(N.tag===7){n(h,N.sibling),c=i(N,p.props.children),c.return=h,h=c;break e}}else if(N.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===ut&&oo(z)===N.type){n(h,N.sibling),c=i(N,p.props),c.ref=Tn(h,N,p),c.return=h,h=c;break e}n(h,N);break}else t(h,N);N=N.sibling}p.type===Zt?(c=Dt(p.props.children,h.mode,b,p.key),c.return=h,h=c):(b=Xa(p.type,p.key,p.props,null,h.mode,b),b.ref=Tn(h,c,p),b.return=h,h=b)}return l(h);case Vt:e:{for(N=p.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(h,c.sibling),c=i(c,p.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=ki(p,h.mode,b),c.return=h,h=c}return l(h);case ut:return N=p._init,k(h,c,N(p._payload),b)}if(Rn(p))return y(h,c,p,b);if(Cn(p))return v(h,c,p,b);Aa(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,p),c.return=h,h=c):(n(h,c),c=bi(p,h.mode,b),c.return=h,h=c),l(h)):n(h,c)}return k}var gn=rd(!0),id=rd(!1),xr=St(null),yr=null,an=null,Ys=null;function $s(){Ys=an=yr=null}function Vs(e){var t=xr.current;O(xr),e._currentValue=t}function as(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cn(e,t){yr=e,Ys=an=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(Ys!==e)if(e={context:e,memoizedValue:t,next:null},an===null){if(yr===null)throw Error(j(308));an=e,yr.dependencies={lanes:0,firstContext:e}}else an=an.next=e;return t}var Ft=null;function Zs(e){Ft===null?Ft=[e]:Ft.push(e)}function sd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Zs(t)):(n.next=i.next,i.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dt=!1;function Qs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ld(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rt(e,n)}return i=r.interleaved,i===null?(t.next=t,Zs(r)):(t.next=i.next,i.next=t),r.interleaved=t,rt(e,n)}function $a(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,As(e,n)}}function uo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vr(e,t,n,r){var i=e.updateQueue;dt=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var u=o,d=u.next;u.next=null,l===null?s=d:l.next=d,l=u;var g=e.alternate;g!==null&&(g=g.updateQueue,o=g.lastBaseUpdate,o!==l&&(o===null?g.firstBaseUpdate=d:o.next=d,g.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;l=0,g=d=u=null,o=s;do{var m=o.lane,w=o.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:w,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=e,v=o;switch(m=t,w=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(w,f,m);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,m=typeof y=="function"?y.call(w,f,m):y,m==null)break e;f=q({},f,m);break e;case 2:dt=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[o]:m.push(o))}else w={eventTime:w,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},g===null?(d=g=w,u=f):g=g.next=w,l|=m;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;m=o,o=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(g===null&&(u=f),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Bt|=l,e.lanes=l,e.memoizedState=f}}function co(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var ya={},Ve=St(ya),la=St(ya),oa=St(ya);function At(e){if(e===ya)throw Error(j(174));return e}function Ks(e,t){switch(D(oa,t),D(la,e),D(Ve,ya),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Di(t,e)}O(Ve),D(Ve,t)}function xn(){O(Ve),O(la),O(oa)}function od(e){At(oa.current);var t=At(Ve.current),n=Di(t,e.type);t!==n&&(D(la,e),D(Ve,n))}function Js(e){la.current===e&&(O(Ve),O(la))}var U=St(0);function wr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fi=[];function Xs(){for(var e=0;e<fi.length;e++)fi[e]._workInProgressVersionPrimary=null;fi.length=0}var Va=lt.ReactCurrentDispatcher,gi=lt.ReactCurrentBatchConfig,Wt=0,H=null,Z=null,J=null,br=!1,Yn=!1,ua=0,Nh=0;function ie(){throw Error(j(321))}function el(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!We(e[n],t[n]))return!1;return!0}function tl(e,t,n,r,i,s){if(Wt=s,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Va.current=e===null||e.memoizedState===null?Eh:Ph,e=n(r,i),Yn){s=0;do{if(Yn=!1,ua=0,25<=s)throw Error(j(301));s+=1,J=Z=null,t.updateQueue=null,Va.current=_h,e=n(r,i)}while(Yn)}if(Va.current=kr,t=Z!==null&&Z.next!==null,Wt=0,J=Z=H=null,br=!1,t)throw Error(j(300));return e}function nl(){var e=ua!==0;return ua=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?H.memoizedState=J=e:J=J.next=e,J}function Me(){if(Z===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=J===null?H.memoizedState:J.next;if(t!==null)J=t,Z=e;else{if(e===null)throw Error(j(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},J===null?H.memoizedState=J=e:J=J.next=e}return J}function da(e,t){return typeof t=="function"?t(e):t}function xi(e){var t=Me(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=Z,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var o=l=null,u=null,d=s;do{var g=d.lane;if((Wt&g)===g)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var f={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(o=u=f,l=r):u=u.next=f,H.lanes|=g,Bt|=g}d=d.next}while(d!==null&&d!==s);u===null?l=r:u.next=o,We(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,H.lanes|=s,Bt|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yi(e){var t=Me(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=e(s,l.action),l=l.next;while(l!==i);We(s,t.memoizedState)||(ge=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function ud(){}function dd(e,t){var n=H,r=Me(),i=t(),s=!We(r.memoizedState,i);if(s&&(r.memoizedState=i,ge=!0),r=r.queue,al(hd.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,ca(9,md.bind(null,n,r,i,t),void 0,null),X===null)throw Error(j(349));Wt&30||cd(n,t,i)}return i}function cd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function md(e,t,n,r){t.value=n,t.getSnapshot=r,pd(t)&&fd(e)}function hd(e,t,n){return n(function(){pd(t)&&fd(e)})}function pd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!We(e,n)}catch{return!0}}function fd(e){var t=rt(e,1);t!==null&&Oe(t,e,1,-1)}function mo(e){var t=Ge();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:e},t.queue=e,e=e.dispatch=Ch.bind(null,H,e),[t.memoizedState,e]}function ca(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gd(){return Me().memoizedState}function Za(e,t,n,r){var i=Ge();H.flags|=e,i.memoizedState=ca(1|t,n,void 0,r===void 0?null:r)}function Ir(e,t,n,r){var i=Me();r=r===void 0?null:r;var s=void 0;if(Z!==null){var l=Z.memoizedState;if(s=l.destroy,r!==null&&el(r,l.deps)){i.memoizedState=ca(t,n,s,r);return}}H.flags|=e,i.memoizedState=ca(1|t,n,s,r)}function ho(e,t){return Za(8390656,8,e,t)}function al(e,t){return Ir(2048,8,e,t)}function xd(e,t){return Ir(4,2,e,t)}function yd(e,t){return Ir(4,4,e,t)}function vd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wd(e,t,n){return n=n!=null?n.concat([e]):null,Ir(4,4,vd.bind(null,t,e),n)}function rl(){}function bd(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&el(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kd(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&el(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function jd(e,t,n){return Wt&21?(We(n,t)||(n=Cu(),H.lanes|=n,Bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function Sh(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=gi.transition;gi.transition={};try{e(!1),t()}finally{I=n,gi.transition=r}}function zd(){return Me().memoizedState}function Lh(e,t,n){var r=bt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nd(e))Sd(t,n);else if(n=sd(e,t,n,r),n!==null){var i=ce();Oe(n,e,r,i),Ld(n,t,r)}}function Ch(e,t,n){var r=bt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nd(e))Sd(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var l=t.lastRenderedState,o=s(l,n);if(i.hasEagerState=!0,i.eagerState=o,We(o,l)){var u=t.interleaved;u===null?(i.next=i,Zs(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=sd(e,t,i,r),n!==null&&(i=ce(),Oe(n,e,r,i),Ld(n,t,r))}}function Nd(e){var t=e.alternate;return e===H||t!==null&&t===H}function Sd(e,t){Yn=br=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ld(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,As(e,n)}}var kr={readContext:_e,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Eh={readContext:_e,useCallback:function(e,t){return Ge().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:ho,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Za(4194308,4,vd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Za(4194308,4,e,t)},useInsertionEffect:function(e,t){return Za(4,2,e,t)},useMemo:function(e,t){var n=Ge();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ge();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Lh.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ge();return e={current:e},t.memoizedState=e},useState:mo,useDebugValue:rl,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=mo(!1),t=e[0];return e=Sh.bind(null,e[1]),Ge().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=Ge();if(W){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),X===null)throw Error(j(349));Wt&30||cd(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,ho(hd.bind(null,r,s,e),[e]),r.flags|=2048,ca(9,md.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ge(),t=X.identifierPrefix;if(W){var n=Xe,r=Je;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ua++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Nh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ph={readContext:_e,useCallback:bd,useContext:_e,useEffect:al,useImperativeHandle:wd,useInsertionEffect:xd,useLayoutEffect:yd,useMemo:kd,useReducer:xi,useRef:gd,useState:function(){return xi(da)},useDebugValue:rl,useDeferredValue:function(e){var t=Me();return jd(t,Z.memoizedState,e)},useTransition:function(){var e=xi(da)[0],t=Me().memoizedState;return[e,t]},useMutableSource:ud,useSyncExternalStore:dd,useId:zd,unstable_isNewReconciler:!1},_h={readContext:_e,useCallback:bd,useContext:_e,useEffect:al,useImperativeHandle:wd,useInsertionEffect:xd,useLayoutEffect:yd,useMemo:kd,useReducer:yi,useRef:gd,useState:function(){return yi(da)},useDebugValue:rl,useDeferredValue:function(e){var t=Me();return Z===null?t.memoizedState=e:jd(t,Z.memoizedState,e)},useTransition:function(){var e=yi(da)[0],t=Me().memoizedState;return[e,t]},useMutableSource:ud,useSyncExternalStore:dd,useId:zd,unstable_isNewReconciler:!1};function Ae(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Dr={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=bt(e),s=et(r,i);s.payload=t,n!=null&&(s.callback=n),t=vt(e,s,i),t!==null&&(Oe(t,e,i,r),$a(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=bt(e),s=et(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=vt(e,s,i),t!==null&&(Oe(t,e,i,r),$a(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=bt(e),i=et(n,r);i.tag=2,t!=null&&(i.callback=t),t=vt(e,i,r),t!==null&&(Oe(t,e,r,n),$a(t,e,r))}};function po(e,t,n,r,i,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,l):t.prototype&&t.prototype.isPureReactComponent?!aa(n,r)||!aa(i,s):!0}function Cd(e,t,n){var r=!1,i=zt,s=t.contextType;return typeof s=="object"&&s!==null?s=_e(s):(i=ye(t)?Rt:oe.current,r=t.contextTypes,s=(r=r!=null)?pn(e,i):zt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Dr,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function fo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Dr.enqueueReplaceState(t,t.state,null)}function is(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Qs(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=_e(s):(s=ye(t)?Rt:oe.current,i.context=pn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(rs(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Dr.enqueueReplaceState(i,i.state,null),vr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function yn(e,t){try{var n="",r=t;do n+=im(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function vi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ss(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mh=typeof WeakMap=="function"?WeakMap:Map;function Ed(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zr||(zr=!0,gs=r),ss(e,t)},n}function Pd(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ss(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ss(e,t),typeof r!="function"&&(wt===null?wt=new Set([this]):wt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function go(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Yh.bind(null,e,t,n),t.then(e,e))}function xo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yo(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,vt(n,t,1))),n.lanes|=1),e)}var Th=lt.ReactCurrentOwner,ge=!1;function ue(e,t,n,r){t.child=e===null?id(t,null,n,r):gn(t,e.child,n,r)}function vo(e,t,n,r,i){n=n.render;var s=t.ref;return cn(t,i),r=tl(e,t,n,r,s,i),n=nl(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,it(e,t,i)):(W&&n&&Hs(t),t.flags|=1,ue(e,t,r,i),t.child)}function wo(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!ml(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,_d(e,t,s,r,i)):(e=Xa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:aa,n(l,r)&&e.ref===t.ref)return it(e,t,i)}return t.flags|=1,e=kt(s,r),e.ref=t.ref,e.return=t,t.child=e}function _d(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(aa(s,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,it(e,t,i)}return ls(e,t,n,r,i)}function Md(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(sn,be),be|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(sn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,D(sn,be),be|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,D(sn,be),be|=r;return ue(e,t,i,n),t.child}function Td(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ls(e,t,n,r,i){var s=ye(n)?Rt:oe.current;return s=pn(t,s),cn(t,i),n=tl(e,t,n,r,s,i),r=nl(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,it(e,t,i)):(W&&r&&Hs(t),t.flags|=1,ue(e,t,n,i),t.child)}function bo(e,t,n,r,i){if(ye(n)){var s=!0;pr(t)}else s=!1;if(cn(t,i),t.stateNode===null)Qa(e,t),Cd(t,n,r),is(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,o=t.memoizedProps;l.props=o;var u=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=_e(d):(d=ye(n)?Rt:oe.current,d=pn(t,d));var g=n.getDerivedStateFromProps,f=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==r||u!==d)&&fo(t,l,r,d),dt=!1;var m=t.memoizedState;l.state=m,vr(t,r,l,i),u=t.memoizedState,o!==r||m!==u||xe.current||dt?(typeof g=="function"&&(rs(t,n,g,r),u=t.memoizedState),(o=dt||po(t,n,o,r,m,u,d))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=d,r=o):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,ld(e,t),o=t.memoizedProps,d=t.type===t.elementType?o:Ae(t.type,o),l.props=d,f=t.pendingProps,m=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=_e(u):(u=ye(n)?Rt:oe.current,u=pn(t,u));var w=n.getDerivedStateFromProps;(g=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==f||m!==u)&&fo(t,l,r,u),dt=!1,m=t.memoizedState,l.state=m,vr(t,r,l,i);var y=t.memoizedState;o!==f||m!==y||xe.current||dt?(typeof w=="function"&&(rs(t,n,w,r),y=t.memoizedState),(d=dt||po(t,n,d,r,m,y,u)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=u,r=d):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return os(e,t,n,r,s,i)}function os(e,t,n,r,i,s){Td(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&io(t,n,!1),it(e,t,s);r=t.stateNode,Th.current=t;var o=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=gn(t,e.child,null,s),t.child=gn(t,null,o,s)):ue(e,t,o,s),t.memoizedState=r.state,i&&io(t,n,!0),t.child}function Fd(e){var t=e.stateNode;t.pendingContext?ro(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ro(e,t.context,!1),Ks(e,t.containerInfo)}function ko(e,t,n,r,i){return fn(),Gs(i),t.flags|=256,ue(e,t,n,r),t.child}var us={dehydrated:null,treeContext:null,retryLane:0};function ds(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ad(e,t,n){var r=t.pendingProps,i=U.current,s=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),D(U,i&1),e===null)return ns(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,s?(r=t.mode,s=t.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Wr(l,r,0,null),e=Dt(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ds(n),t.memoizedState=us,e):il(t,l));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Fh(e,t,l,r,o,i,n);if(s){s=r.fallback,l=t.mode,i=e.child,o=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=kt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=kt(o,s):(s=Dt(s,l,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,l=e.child.memoizedState,l=l===null?ds(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=us,r}return s=e.child,e=s.sibling,r=kt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function il(e,t){return t=Wr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ia(e,t,n,r){return r!==null&&Gs(r),gn(t,e.child,null,n),e=il(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fh(e,t,n,r,i,s,l){if(n)return t.flags&256?(t.flags&=-257,r=vi(Error(j(422))),Ia(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Wr({mode:"visible",children:r.children},i,0,null),s=Dt(s,i,l,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&gn(t,e.child,null,l),t.child.memoizedState=ds(l),t.memoizedState=us,s);if(!(t.mode&1))return Ia(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,s=Error(j(419)),r=vi(s,r,void 0),Ia(e,t,l,r)}if(o=(l&e.childLanes)!==0,ge||o){if(r=X,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rt(e,i),Oe(r,e,i,-1))}return cl(),r=vi(Error(j(421))),Ia(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=$h.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ke=yt(i.nextSibling),je=t,W=!0,De=null,e!==null&&(Le[Ce++]=Je,Le[Ce++]=Xe,Le[Ce++]=Ot,Je=e.id,Xe=e.overflow,Ot=t),t=il(t,r.children),t.flags|=4096,t)}function jo(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),as(e.return,t,n)}function wi(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Id(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ue(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jo(e,n,t);else if(e.tag===19)jo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(U,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&wr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wi(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wi(t,!0,n,null,s);break;case"together":wi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function it(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ah(e,t,n){switch(t.tag){case 3:Fd(t),fn();break;case 5:od(t);break;case 1:ye(t.type)&&pr(t);break;case 4:Ks(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;D(xr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Ad(e,t,n):(D(U,U.current&1),e=it(e,t,n),e!==null?e.sibling:null);D(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Id(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Md(e,t,n)}return it(e,t,n)}var Dd,cs,Rd,Od;Dd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cs=function(){};Rd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,At(Ve.current);var s=null;switch(n){case"input":i=Ti(e,i),r=Ti(e,r),s=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),s=[];break;case"textarea":i=Ii(e,i),r=Ii(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=mr)}Ri(n,r);var l;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var o=i[d];for(l in o)o.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Qn.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(o=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==o&&(u!=null||o!=null))if(d==="style")if(o){for(l in o)!o.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&o[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Qn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&R("scroll",e),s||o===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};Od=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ih(e,t,n){var r=t.pendingProps;switch(qs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ye(t.type)&&hr(),se(t),null;case 3:return r=t.stateNode,xn(),O(xe),O(oe),Xs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(vs(De),De=null))),cs(e,t),se(t),null;case 5:Js(t);var i=At(oa.current);if(n=t.type,e!==null&&t.stateNode!=null)Rd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return se(t),null}if(e=At(Ve.current),Fa(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ye]=t,r[sa]=s,e=(t.mode&1)!==0,n){case"dialog":R("cancel",r),R("close",r);break;case"iframe":case"object":case"embed":R("load",r);break;case"video":case"audio":for(i=0;i<Wn.length;i++)R(Wn[i],r);break;case"source":R("error",r);break;case"img":case"image":case"link":R("error",r),R("load",r);break;case"details":R("toggle",r);break;case"input":_l(r,s),R("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},R("invalid",r);break;case"textarea":Tl(r,s),R("invalid",r)}Ri(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var o=s[l];l==="children"?typeof o=="string"?r.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ta(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ta(r.textContent,o,e),i=["children",""+o]):Qn.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&R("scroll",r)}switch(n){case"input":Na(r),Ml(r,s,!0);break;case"textarea":Na(r),Fl(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=mr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ye]=t,e[sa]=r,Dd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Oi(n,r),n){case"dialog":R("cancel",e),R("close",e),i=r;break;case"iframe":case"object":case"embed":R("load",e),i=r;break;case"video":case"audio":for(i=0;i<Wn.length;i++)R(Wn[i],e);i=r;break;case"source":R("error",e),i=r;break;case"img":case"image":case"link":R("error",e),R("load",e),i=r;break;case"details":R("toggle",e),i=r;break;case"input":_l(e,r),i=Ti(e,r),R("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),R("invalid",e);break;case"textarea":Tl(e,r),i=Ii(e,r),R("invalid",e);break;default:i=r}Ri(n,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var u=o[s];s==="style"?gu(e,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&pu(e,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Kn(e,u):typeof u=="number"&&Kn(e,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qn.hasOwnProperty(s)?u!=null&&s==="onScroll"&&R("scroll",e):u!=null&&Es(e,s,u,l))}switch(n){case"input":Na(e),Ml(e,r,!1);break;case"textarea":Na(e),Fl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ln(e,!!r.multiple,s,!1):r.defaultValue!=null&&ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=mr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Od(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=At(oa.current),At(Ve.current),Fa(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ye]=t,(s=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:Ta(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ta(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=t,t.stateNode=r}return se(t),null;case 13:if(O(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&ke!==null&&t.mode&1&&!(t.flags&128))ad(),fn(),t.flags|=98560,s=!1;else if(s=Fa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(j(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[Ye]=t}else fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),s=!1}else De!==null&&(vs(De),De=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?Q===0&&(Q=3):cl())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return xn(),cs(e,t),e===null&&ra(t.stateNode.containerInfo),se(t),null;case 10:return Vs(t.type._context),se(t),null;case 17:return ye(t.type)&&hr(),se(t),null;case 19:if(O(U),s=t.memoizedState,s===null)return se(t),null;if(r=(t.flags&128)!==0,l=s.rendering,l===null)if(r)Fn(s,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=wr(e),l!==null){for(t.flags|=128,Fn(s,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(U,U.current&1|2),t.child}e=e.sibling}s.tail!==null&&$()>vn&&(t.flags|=128,r=!0,Fn(s,!1),t.lanes=4194304)}else{if(!r)if(e=wr(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!W)return se(t),null}else 2*$()-s.renderingStartTime>vn&&n!==1073741824&&(t.flags|=128,r=!0,Fn(s,!1),t.lanes=4194304);s.isBackwards?(l.sibling=t.child,t.child=l):(n=s.last,n!==null?n.sibling=l:t.child=l,s.last=l)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=$(),t.sibling=null,n=U.current,D(U,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return dl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Dh(e,t){switch(qs(t),t.tag){case 1:return ye(t.type)&&hr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),O(xe),O(oe),Xs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Js(t),null;case 13:if(O(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(U),null;case 4:return xn(),null;case 10:return Vs(t.type._context),null;case 22:case 23:return dl(),null;case 24:return null;default:return null}}var Da=!1,le=!1,Rh=typeof WeakSet=="function"?WeakSet:Set,S=null;function rn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function ms(e,t,n){try{n()}catch(r){G(e,t,r)}}var zo=!1;function Oh(e,t){if(Zi=ur,e=qu(),Us(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,o=-1,u=-1,d=0,g=0,f=e,m=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(o=l+i),f!==s||r!==0&&f.nodeType!==3||(u=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(w=f.firstChild)!==null;)m=f,f=w;for(;;){if(f===e)break t;if(m===n&&++d===i&&(o=l),m===s&&++g===r&&(u=l),(w=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=w}n=o===-1||u===-1?null:{start:o,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qi={focusedElem:e,selectionRange:n},ur=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,k=y.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ae(t.type,v),k);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(b){G(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return y=zo,zo=!1,y}function $n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ms(t,n,s)}i=i.next}while(i!==r)}}function Rr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Wd(e){var t=e.alternate;t!==null&&(e.alternate=null,Wd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[sa],delete t[Xi],delete t[bh],delete t[kh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bd(e){return e.tag===5||e.tag===3||e.tag===4}function No(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ps(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mr));else if(r!==4&&(e=e.child,e!==null))for(ps(e,t,n),e=e.sibling;e!==null;)ps(e,t,n),e=e.sibling}function fs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fs(e,t,n),e=e.sibling;e!==null;)fs(e,t,n),e=e.sibling}var te=null,Ie=!1;function ot(e,t,n){for(n=n.child;n!==null;)Ud(e,t,n),n=n.sibling}function Ud(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Pr,n)}catch{}switch(n.tag){case 5:le||rn(n,t);case 6:var r=te,i=Ie;te=null,ot(e,t,n),te=r,Ie=i,te!==null&&(Ie?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Ie?(e=te,n=n.stateNode,e.nodeType===8?hi(e.parentNode,n):e.nodeType===1&&hi(e,n),ta(e)):hi(te,n.stateNode));break;case 4:r=te,i=Ie,te=n.stateNode.containerInfo,Ie=!0,ot(e,t,n),te=r,Ie=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&ms(n,t,l),i=i.next}while(i!==r)}ot(e,t,n);break;case 1:if(!le&&(rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){G(n,t,o)}ot(e,t,n);break;case 21:ot(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,ot(e,t,n),le=r):ot(e,t,n);break;default:ot(e,t,n)}}function So(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Rh),t.forEach(function(r){var i=Vh.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Fe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,l=t,o=l;e:for(;o!==null;){switch(o.tag){case 5:te=o.stateNode,Ie=!1;break e;case 3:te=o.stateNode.containerInfo,Ie=!0;break e;case 4:te=o.stateNode.containerInfo,Ie=!0;break e}o=o.return}if(te===null)throw Error(j(160));Ud(s,l,i),te=null,Ie=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){G(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hd(t,e),t=t.sibling}function Hd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),qe(e),r&4){try{$n(3,e,e.return),Rr(3,e)}catch(v){G(e,e.return,v)}try{$n(5,e,e.return)}catch(v){G(e,e.return,v)}}break;case 1:Fe(t,e),qe(e),r&512&&n!==null&&rn(n,n.return);break;case 5:if(Fe(t,e),qe(e),r&512&&n!==null&&rn(n,n.return),e.flags&32){var i=e.stateNode;try{Kn(i,"")}catch(v){G(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,l=n!==null?n.memoizedProps:s,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&cu(i,s),Oi(o,l);var d=Oi(o,s);for(l=0;l<u.length;l+=2){var g=u[l],f=u[l+1];g==="style"?gu(i,f):g==="dangerouslySetInnerHTML"?pu(i,f):g==="children"?Kn(i,f):Es(i,g,f,d)}switch(o){case"input":Fi(i,s);break;case"textarea":mu(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var w=s.value;w!=null?ln(i,!!s.multiple,w,!1):m!==!!s.multiple&&(s.defaultValue!=null?ln(i,!!s.multiple,s.defaultValue,!0):ln(i,!!s.multiple,s.multiple?[]:"",!1))}i[sa]=s}catch(v){G(e,e.return,v)}}break;case 6:if(Fe(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){G(e,e.return,v)}}break;case 3:if(Fe(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(t.containerInfo)}catch(v){G(e,e.return,v)}break;case 4:Fe(t,e),qe(e);break;case 13:Fe(t,e),qe(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ol=$())),r&4&&So(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(le=(d=le)||g,Fe(t,e),le=d):Fe(t,e),qe(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(S=e,g=e.child;g!==null;){for(f=S=g;S!==null;){switch(m=S,w=m.child,m.tag){case 0:case 11:case 14:case 15:$n(4,m,m.return);break;case 1:rn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){G(r,n,v)}}break;case 5:rn(m,m.return);break;case 22:if(m.memoizedState!==null){Co(f);continue}}w!==null?(w.return=m,S=w):Co(f)}g=g.sibling}e:for(g=null,f=e;;){if(f.tag===5){if(g===null){g=f;try{i=f.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,u=f.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=fu("display",l))}catch(v){G(e,e.return,v)}}}else if(f.tag===6){if(g===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(v){G(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;g===f&&(g=null),f=f.return}g===f&&(g=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fe(t,e),qe(e),r&4&&So(e);break;case 21:break;default:Fe(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bd(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Kn(i,""),r.flags&=-33);var s=No(e);fs(e,s,i);break;case 3:case 4:var l=r.stateNode.containerInfo,o=No(e);ps(e,o,l);break;default:throw Error(j(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wh(e,t,n){S=e,qd(e)}function qd(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var i=S,s=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Da;if(!l){var o=i.alternate,u=o!==null&&o.memoizedState!==null||le;o=Da;var d=le;if(Da=l,(le=u)&&!d)for(S=i;S!==null;)l=S,u=l.child,l.tag===22&&l.memoizedState!==null?Eo(i):u!==null?(u.return=l,S=u):Eo(i);for(;s!==null;)S=s,qd(s),s=s.sibling;S=i,Da=o,le=d}Lo(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,S=s):Lo(e)}}function Lo(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||Rr(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ae(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&co(t,s,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}co(t,l,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var f=g.dehydrated;f!==null&&ta(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}le||t.flags&512&&hs(t)}catch(m){G(t,t.return,m)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Co(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Eo(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Rr(4,t)}catch(u){G(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){G(t,i,u)}}var s=t.return;try{hs(t)}catch(u){G(t,s,u)}break;case 5:var l=t.return;try{hs(t)}catch(u){G(t,l,u)}}}catch(u){G(t,t.return,u)}if(t===e){S=null;break}var o=t.sibling;if(o!==null){o.return=t.return,S=o;break}S=t.return}}var Bh=Math.ceil,jr=lt.ReactCurrentDispatcher,sl=lt.ReactCurrentOwner,Pe=lt.ReactCurrentBatchConfig,A=0,X=null,V=null,ne=0,be=0,sn=St(0),Q=0,ma=null,Bt=0,Or=0,ll=0,Vn=null,fe=null,ol=0,vn=1/0,Qe=null,zr=!1,gs=null,wt=null,Ra=!1,pt=null,Nr=0,Zn=0,xs=null,Ka=-1,Ja=0;function ce(){return A&6?$():Ka!==-1?Ka:Ka=$()}function bt(e){return e.mode&1?A&2&&ne!==0?ne&-ne:zh.transition!==null?(Ja===0&&(Ja=Cu()),Ja):(e=I,e!==0||(e=window.event,e=e===void 0?16:Au(e.type)),e):1}function Oe(e,t,n,r){if(50<Zn)throw Zn=0,xs=null,Error(j(185));fa(e,n,r),(!(A&2)||e!==X)&&(e===X&&(!(A&2)&&(Or|=n),Q===4&&mt(e,ne)),ve(e,r),n===1&&A===0&&!(t.mode&1)&&(vn=$()+500,Ar&&Lt()))}function ve(e,t){var n=e.callbackNode;zm(e,t);var r=or(e,e===X?ne:0);if(r===0)n!==null&&Dl(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Dl(n),t===1)e.tag===0?jh(Po.bind(null,e)):ed(Po.bind(null,e)),vh(function(){!(A&6)&&Lt()}),n=null;else{switch(Eu(r)){case 1:n=Fs;break;case 4:n=Su;break;case 16:n=lr;break;case 536870912:n=Lu;break;default:n=lr}n=Jd(n,Gd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gd(e,t){if(Ka=-1,Ja=0,A&6)throw Error(j(327));var n=e.callbackNode;if(mn()&&e.callbackNode!==n)return null;var r=or(e,e===X?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Sr(e,r);else{t=r;var i=A;A|=2;var s=$d();(X!==e||ne!==t)&&(Qe=null,vn=$()+500,It(e,t));do try{qh();break}catch(o){Yd(e,o)}while(!0);$s(),jr.current=s,A=i,V!==null?t=0:(X=null,ne=0,t=Q)}if(t!==0){if(t===2&&(i=qi(e),i!==0&&(r=i,t=ys(e,i))),t===1)throw n=ma,It(e,0),mt(e,r),ve(e,$()),n;if(t===6)mt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Uh(i)&&(t=Sr(e,r),t===2&&(s=qi(e),s!==0&&(r=s,t=ys(e,s))),t===1))throw n=ma,It(e,0),mt(e,r),ve(e,$()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:Mt(e,fe,Qe);break;case 3:if(mt(e,r),(r&130023424)===r&&(t=ol+500-$(),10<t)){if(or(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ji(Mt.bind(null,e,fe,Qe),t);break}Mt(e,fe,Qe);break;case 4:if(mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Re(r);s=1<<l,l=t[l],l>i&&(i=l),r&=~s}if(r=i,r=$()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bh(r/1960))-r,10<r){e.timeoutHandle=Ji(Mt.bind(null,e,fe,Qe),r);break}Mt(e,fe,Qe);break;case 5:Mt(e,fe,Qe);break;default:throw Error(j(329))}}}return ve(e,$()),e.callbackNode===n?Gd.bind(null,e):null}function ys(e,t){var n=Vn;return e.current.memoizedState.isDehydrated&&(It(e,t).flags|=256),e=Sr(e,t),e!==2&&(t=fe,fe=n,t!==null&&vs(t)),e}function vs(e){fe===null?fe=e:fe.push.apply(fe,e)}function Uh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!We(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mt(e,t){for(t&=~ll,t&=~Or,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Re(t),r=1<<n;e[n]=-1,t&=~r}}function Po(e){if(A&6)throw Error(j(327));mn();var t=or(e,0);if(!(t&1))return ve(e,$()),null;var n=Sr(e,t);if(e.tag!==0&&n===2){var r=qi(e);r!==0&&(t=r,n=ys(e,r))}if(n===1)throw n=ma,It(e,0),mt(e,t),ve(e,$()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e,fe,Qe),ve(e,$()),null}function ul(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(vn=$()+500,Ar&&Lt())}}function Ut(e){pt!==null&&pt.tag===0&&!(A&6)&&mn();var t=A;A|=1;var n=Pe.transition,r=I;try{if(Pe.transition=null,I=1,e)return e()}finally{I=r,Pe.transition=n,A=t,!(A&6)&&Lt()}}function dl(){be=sn.current,O(sn)}function It(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,yh(n)),V!==null)for(n=V.return;n!==null;){var r=n;switch(qs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hr();break;case 3:xn(),O(xe),O(oe),Xs();break;case 5:Js(r);break;case 4:xn();break;case 13:O(U);break;case 19:O(U);break;case 10:Vs(r.type._context);break;case 22:case 23:dl()}n=n.return}if(X=e,V=e=kt(e.current,null),ne=be=t,Q=0,ma=null,ll=Or=Bt=0,fe=Vn=null,Ft!==null){for(t=0;t<Ft.length;t++)if(n=Ft[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,r.next=l}n.pending=r}Ft=null}return e}function Yd(e,t){do{var n=V;try{if($s(),Va.current=kr,br){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}br=!1}if(Wt=0,J=Z=H=null,Yn=!1,ua=0,sl.current=null,n===null||n.return===null){Q=1,ma=t,V=null;break}e:{var s=e,l=n.return,o=n,u=t;if(t=ne,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,g=o,f=g.tag;if(!(g.mode&1)&&(f===0||f===11||f===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=xo(l);if(w!==null){w.flags&=-257,yo(w,l,o,s,t),w.mode&1&&go(s,d,t),t=w,u=d;var y=t.updateQueue;if(y===null){var v=new Set;v.add(u),t.updateQueue=v}else y.add(u);break e}else{if(!(t&1)){go(s,d,t),cl();break e}u=Error(j(426))}}else if(W&&o.mode&1){var k=xo(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),yo(k,l,o,s,t),Gs(yn(u,o));break e}}s=u=yn(u,o),Q!==4&&(Q=2),Vn===null?Vn=[s]:Vn.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=Ed(s,u,t);uo(s,h);break e;case 1:o=u;var c=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(wt===null||!wt.has(p)))){s.flags|=65536,t&=-t,s.lanes|=t;var b=Pd(s,o,t);uo(s,b);break e}}s=s.return}while(s!==null)}Zd(n)}catch(z){t=z,V===n&&n!==null&&(V=n=n.return);continue}break}while(!0)}function $d(){var e=jr.current;return jr.current=kr,e===null?kr:e}function cl(){(Q===0||Q===3||Q===2)&&(Q=4),X===null||!(Bt&268435455)&&!(Or&268435455)||mt(X,ne)}function Sr(e,t){var n=A;A|=2;var r=$d();(X!==e||ne!==t)&&(Qe=null,It(e,t));do try{Hh();break}catch(i){Yd(e,i)}while(!0);if($s(),A=n,jr.current=r,V!==null)throw Error(j(261));return X=null,ne=0,Q}function Hh(){for(;V!==null;)Vd(V)}function qh(){for(;V!==null&&!fm();)Vd(V)}function Vd(e){var t=Kd(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?Zd(e):V=t,sl.current=null}function Zd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Dh(n,t),n!==null){n.flags&=32767,V=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,V=null;return}}else if(n=Ih(n,t,be),n!==null){V=n;return}if(t=t.sibling,t!==null){V=t;return}V=t=e}while(t!==null);Q===0&&(Q=5)}function Mt(e,t,n){var r=I,i=Pe.transition;try{Pe.transition=null,I=1,Gh(e,t,n,r)}finally{Pe.transition=i,I=r}return null}function Gh(e,t,n,r){do mn();while(pt!==null);if(A&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Nm(e,s),e===X&&(V=X=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ra||(Ra=!0,Jd(lr,function(){return mn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pe.transition,Pe.transition=null;var l=I;I=1;var o=A;A|=4,sl.current=null,Oh(e,n),Hd(n,e),ch(Qi),ur=!!Zi,Qi=Zi=null,e.current=n,Wh(n),gm(),A=o,I=l,Pe.transition=s}else e.current=n;if(Ra&&(Ra=!1,pt=e,Nr=i),s=e.pendingLanes,s===0&&(wt=null),vm(n.stateNode),ve(e,$()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(zr)throw zr=!1,e=gs,gs=null,e;return Nr&1&&e.tag!==0&&mn(),s=e.pendingLanes,s&1?e===xs?Zn++:(Zn=0,xs=e):Zn=0,Lt(),null}function mn(){if(pt!==null){var e=Eu(Nr),t=Pe.transition,n=I;try{if(Pe.transition=null,I=16>e?16:e,pt===null)var r=!1;else{if(e=pt,pt=null,Nr=0,A&6)throw Error(j(331));var i=A;for(A|=4,S=e.current;S!==null;){var s=S,l=s.child;if(S.flags&16){var o=s.deletions;if(o!==null){for(var u=0;u<o.length;u++){var d=o[u];for(S=d;S!==null;){var g=S;switch(g.tag){case 0:case 11:case 15:$n(8,g,s)}var f=g.child;if(f!==null)f.return=g,S=f;else for(;S!==null;){g=S;var m=g.sibling,w=g.return;if(Wd(g),g===d){S=null;break}if(m!==null){m.return=w,S=m;break}S=w}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}S=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,S=l;else e:for(;S!==null;){if(s=S,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$n(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,S=h;break e}S=s.return}}var c=e.current;for(S=c;S!==null;){l=S;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,S=p;else e:for(l=c;S!==null;){if(o=S,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Rr(9,o)}}catch(z){G(o,o.return,z)}if(o===l){S=null;break e}var b=o.sibling;if(b!==null){b.return=o.return,S=b;break e}S=o.return}}if(A=i,Lt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Pr,e)}catch{}r=!0}return r}finally{I=n,Pe.transition=t}}return!1}function _o(e,t,n){t=yn(n,t),t=Ed(e,t,1),e=vt(e,t,1),t=ce(),e!==null&&(fa(e,1,t),ve(e,t))}function G(e,t,n){if(e.tag===3)_o(e,e,n);else for(;t!==null;){if(t.tag===3){_o(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wt===null||!wt.has(r))){e=yn(n,e),e=Pd(t,e,1),t=vt(t,e,1),e=ce(),t!==null&&(fa(t,1,e),ve(t,e));break}}t=t.return}}function Yh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,X===e&&(ne&n)===n&&(Q===4||Q===3&&(ne&130023424)===ne&&500>$()-ol?It(e,0):ll|=n),ve(e,t)}function Qd(e,t){t===0&&(e.mode&1?(t=Ca,Ca<<=1,!(Ca&130023424)&&(Ca=4194304)):t=1);var n=ce();e=rt(e,t),e!==null&&(fa(e,t,n),ve(e,n))}function $h(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qd(e,n)}function Vh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),Qd(e,n)}var Kd;Kd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,Ah(e,t,n);ge=!!(e.flags&131072)}else ge=!1,W&&t.flags&1048576&&td(t,gr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qa(e,t),e=t.pendingProps;var i=pn(t,oe.current);cn(t,n),i=tl(null,t,r,e,i,n);var s=nl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ye(r)?(s=!0,pr(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qs(t),i.updater=Dr,t.stateNode=i,i._reactInternals=t,is(t,r,e,n),t=os(null,t,r,!0,s,n)):(t.tag=0,W&&s&&Hs(t),ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qa(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Qh(r),e=Ae(r,e),i){case 0:t=ls(null,t,r,e,n);break e;case 1:t=bo(null,t,r,e,n);break e;case 11:t=vo(null,t,r,e,n);break e;case 14:t=wo(null,t,r,Ae(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ae(r,i),ls(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ae(r,i),bo(e,t,r,i,n);case 3:e:{if(Fd(t),e===null)throw Error(j(387));r=t.pendingProps,s=t.memoizedState,i=s.element,ld(e,t),vr(t,r,null,n);var l=t.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=yn(Error(j(423)),t),t=ko(e,t,r,n,i);break e}else if(r!==i){i=yn(Error(j(424)),t),t=ko(e,t,r,n,i);break e}else for(ke=yt(t.stateNode.containerInfo.firstChild),je=t,W=!0,De=null,n=id(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fn(),r===i){t=it(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return od(t),e===null&&ns(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,l=i.children,Ki(r,i)?l=null:s!==null&&Ki(r,s)&&(t.flags|=32),Td(e,t),ue(e,t,l,n),t.child;case 6:return e===null&&ns(t),null;case 13:return Ad(e,t,n);case 4:return Ks(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ae(r,i),vo(e,t,r,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,l=i.value,D(xr,r._currentValue),r._currentValue=l,s!==null)if(We(s.value,l)){if(s.children===i.children&&!xe.current){t=it(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var o=s.dependencies;if(o!==null){l=s.child;for(var u=o.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=et(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?u.next=u:(u.next=g.next,g.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),as(s.return,n,t),o.lanes|=n;break}u=u.next}}else if(s.tag===10)l=s.type===t.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(j(341));l.lanes|=n,o=l.alternate,o!==null&&(o.lanes|=n),as(l,n,t),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===t){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,cn(t,n),i=_e(i),r=r(i),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,i=Ae(r,t.pendingProps),i=Ae(r.type,i),wo(e,t,r,i,n);case 15:return _d(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ae(r,i),Qa(e,t),t.tag=1,ye(r)?(e=!0,pr(t)):e=!1,cn(t,n),Cd(t,r,i),is(t,r,i,n),os(null,t,r,!0,e,n);case 19:return Id(e,t,n);case 22:return Md(e,t,n)}throw Error(j(156,t.tag))};function Jd(e,t){return Nu(e,t)}function Zh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Zh(e,t,n,r)}function ml(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qh(e){if(typeof e=="function")return ml(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_s)return 11;if(e===Ms)return 14}return 2}function kt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xa(e,t,n,r,i,s){var l=2;if(r=e,typeof e=="function")ml(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Zt:return Dt(n.children,i,s,t);case Ps:l=8,i|=8;break;case Ei:return e=Ee(12,n,t,i|2),e.elementType=Ei,e.lanes=s,e;case Pi:return e=Ee(13,n,t,i),e.elementType=Pi,e.lanes=s,e;case _i:return e=Ee(19,n,t,i),e.elementType=_i,e.lanes=s,e;case ou:return Wr(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case su:l=10;break e;case lu:l=9;break e;case _s:l=11;break e;case Ms:l=14;break e;case ut:l=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Ee(l,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Dt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function Wr(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=ou,e.lanes=n,e.stateNode={isHidden:!1},e}function bi(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function ki(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kh(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ni(0),this.expirationTimes=ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ni(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hl(e,t,n,r,i,s,l,o,u){return e=new Kh(e,t,n,o,u),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ee(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qs(s),e}function Jh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xd(e){if(!e)return zt;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(ye(n))return Xu(e,n,t)}return t}function ec(e,t,n,r,i,s,l,o,u){return e=hl(n,r,!0,e,i,s,l,o,u),e.context=Xd(null),n=e.current,r=ce(),i=bt(n),s=et(r,i),s.callback=t??null,vt(n,s,i),e.current.lanes=i,fa(e,i,r),ve(e,r),e}function Br(e,t,n,r){var i=t.current,s=ce(),l=bt(i);return n=Xd(n),t.context===null?t.context=n:t.pendingContext=n,t=et(s,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vt(i,t,l),e!==null&&(Oe(e,i,l,s),$a(e,i,l)),l}function Lr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pl(e,t){Mo(e,t),(e=e.alternate)&&Mo(e,t)}function Xh(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function fl(e){this._internalRoot=e}Ur.prototype.render=fl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Br(e,t,null,null)};Ur.prototype.unmount=fl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ut(function(){Br(null,e,null,null)}),t[at]=null}};function Ur(e){this._internalRoot=e}Ur.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ct.length&&t!==0&&t<ct[n].priority;n++);ct.splice(n,0,e),n===0&&Fu(e)}};function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function To(){}function ep(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Lr(l);s.call(d)}}var l=ec(t,r,e,0,null,!1,!1,"",To);return e._reactRootContainer=l,e[at]=l.current,ra(e.nodeType===8?e.parentNode:e),Ut(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var d=Lr(u);o.call(d)}}var u=hl(e,0,!1,null,null,!1,!1,"",To);return e._reactRootContainer=u,e[at]=u.current,ra(e.nodeType===8?e.parentNode:e),Ut(function(){Br(t,u,n,r)}),u}function qr(e,t,n,r,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var o=i;i=function(){var u=Lr(l);o.call(u)}}Br(t,l,e,i)}else l=ep(n,t,e,i,r);return Lr(l)}Pu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=On(t.pendingLanes);n!==0&&(As(t,n|1),ve(t,$()),!(A&6)&&(vn=$()+500,Lt()))}break;case 13:Ut(function(){var r=rt(e,1);if(r!==null){var i=ce();Oe(r,e,1,i)}}),pl(e,1)}};Is=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=ce();Oe(t,e,134217728,n)}pl(e,134217728)}};_u=function(e){if(e.tag===13){var t=bt(e),n=rt(e,t);if(n!==null){var r=ce();Oe(n,e,t,r)}pl(e,t)}};Mu=function(){return I};Tu=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};Bi=function(e,t,n){switch(t){case"input":if(Fi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Fr(r);if(!i)throw Error(j(90));du(r),Fi(r,i)}}}break;case"textarea":mu(e,n);break;case"select":t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}};vu=ul;wu=Ut;var tp={usingClientEntryPoint:!1,Events:[xa,Xt,Fr,xu,yu,ul]},An={findFiberByHostInstance:Tt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},np={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ju(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||Xh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{Pr=Oa.inject(np),$e=Oa}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tp;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gl(t))throw Error(j(200));return Jh(e,t,null,n)};Ne.createRoot=function(e,t){if(!gl(e))throw Error(j(299));var n=!1,r="",i=tc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=hl(e,1,!1,null,null,n,!1,r,i),e[at]=t.current,ra(e.nodeType===8?e.parentNode:e),new fl(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=ju(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Ut(e)};Ne.hydrate=function(e,t,n){if(!Hr(t))throw Error(j(200));return qr(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!gl(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",l=tc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ec(t,null,e,1,n??null,i,!1,s,l),e[at]=t.current,ra(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ur(t)};Ne.render=function(e,t,n){if(!Hr(t))throw Error(j(200));return qr(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!Hr(e))throw Error(j(40));return e._reactRootContainer?(Ut(function(){qr(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};Ne.unstable_batchedUpdates=ul;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hr(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return qr(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function nc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc)}catch(e){console.error(e)}}nc(),nu.exports=Ne;var ap=nu.exports,Fo=ap;Li.createRoot=Fo.createRoot,Li.hydrateRoot=Fo.hydrateRoot;/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ao="popstate";function rp(e={}){function t(r,i){let{pathname:s,search:l,hash:o}=r.location;return ws("",{pathname:s,search:l,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ha(i)}return sp(t,n,null,e)}function B(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Te(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ip(){return Math.random().toString(36).substring(2,10)}function Io(e,t){return{usr:e.state,key:e.key,idx:t}}function ws(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?jn(t):t,state:n,key:t&&t.key||r||ip()}}function ha({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function jn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function sp(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,l=i.history,o="POP",u=null,d=g();d==null&&(d=0,l.replaceState({...l.state,idx:d},""));function g(){return(l.state||{idx:null}).idx}function f(){o="POP";let k=g(),h=k==null?null:k-d;d=k,u&&u({action:o,location:v.location,delta:h})}function m(k,h){o="PUSH";let c=ws(v.location,k,h);d=g()+1;let p=Io(c,d),b=v.createHref(c);try{l.pushState(p,"",b)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;i.location.assign(b)}s&&u&&u({action:o,location:v.location,delta:1})}function w(k,h){o="REPLACE";let c=ws(v.location,k,h);d=g();let p=Io(c,d),b=v.createHref(c);l.replaceState(p,"",b),s&&u&&u({action:o,location:v.location,delta:0})}function y(k){return lp(k)}let v={get action(){return o},get location(){return e(i,l)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ao,f),u=k,()=>{i.removeEventListener(Ao,f),u=null}},createHref(k){return t(i,k)},createURL:y,encodeLocation(k){let h=y(k);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:w,go(k){return l.go(k)}};return v}function lp(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),B(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:ha(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function ac(e,t,n="/"){return op(e,t,n,!1)}function op(e,t,n,r){let i=typeof t=="string"?jn(t):t,s=st(i.pathname||"/",n);if(s==null)return null;let l=rc(e);up(l);let o=null;for(let u=0;o==null&&u<l.length;++u){let d=wp(s);o=yp(l[u],d,r)}return o}function rc(e,t=[],n=[],r="",i=!1){let s=(l,o,u=i,d)=>{let g={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&u)return;B(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let f=tt([r,g.relativePath]),m=n.concat(g);l.children&&l.children.length>0&&(B(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),rc(l.children,t,m,f,u)),!(l.path==null&&!l.index)&&t.push({path:f,score:gp(f,l.index),routesMeta:m})};return e.forEach((l,o)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))s(l,o);else for(let d of ic(l.path))s(l,o,!0,d)}),t}function ic(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let l=ic(r.join("/")),o=[];return o.push(...l.map(u=>u===""?s:[s,u].join("/"))),i&&o.push(...l),o.map(u=>e.startsWith("/")&&u===""?"/":u)}function up(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xp(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var dp=/^:[\w-]+$/,cp=3,mp=2,hp=1,pp=10,fp=-2,Do=e=>e==="*";function gp(e,t){let n=e.split("/"),r=n.length;return n.some(Do)&&(r+=fp),t&&(r+=mp),n.filter(i=>!Do(i)).reduce((i,s)=>i+(dp.test(s)?cp:s===""?hp:pp),r)}function xp(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function yp(e,t,n=!1){let{routesMeta:r}=e,i={},s="/",l=[];for(let o=0;o<r.length;++o){let u=r[o],d=o===r.length-1,g=s==="/"?t:t.slice(s.length)||"/",f=Cr({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},g),m=u.route;if(!f&&d&&n&&!r[r.length-1].route.index&&(f=Cr({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},g)),!f)return null;Object.assign(i,f.params),l.push({params:i,pathname:tt([s,f.pathname]),pathnameBase:Np(tt([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=tt([s,f.pathnameBase]))}return l}function Cr(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=vp(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],l=s.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce((d,{paramName:g,isOptional:f},m)=>{if(g==="*"){let y=o[m]||"";l=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const w=o[m];return f&&!w?d[g]=void 0:d[g]=(w||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:l,pattern:e}}function vp(e,t=!1,n=!0){Te(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,u)=>(r.push({paramName:o,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function wp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Te(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function st(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}var bp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kp=e=>bp.test(e);function jp(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?jn(e):e,s;if(n)if(kp(n))s=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),Te(!1,`Pathnames cannot have embedded double slashes - normalizing ${l} -> ${n}`)}n.startsWith("/")?s=Ro(n.substring(1),"/"):s=Ro(n,t)}else s=t;return{pathname:s,search:Sp(r),hash:Lp(i)}}function Ro(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ji(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function xl(e){let t=zp(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function yl(e,t,n,r=!1){let i;typeof e=="string"?i=jn(e):(i={...e},B(!i.pathname||!i.pathname.includes("?"),ji("?","pathname","search",i)),B(!i.pathname||!i.pathname.includes("#"),ji("#","pathname","hash",i)),B(!i.search||!i.search.includes("#"),ji("#","search","hash",i)));let s=e===""||i.pathname==="",l=s?"/":i.pathname,o;if(l==null)o=n;else{let f=t.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}o=f>=0?t[f]:"/"}let u=jp(i,o),d=l&&l!=="/"&&l.endsWith("/"),g=(s||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||g)&&(u.pathname+="/"),u}var tt=e=>e.join("/").replace(/\/\/+/g,"/"),Np=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Sp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Lp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Cp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var sc=["POST","PUT","PATCH","DELETE"];new Set(sc);var Ep=["GET",...sc];new Set(Ep);var zn=x.createContext(null);zn.displayName="DataRouter";var Gr=x.createContext(null);Gr.displayName="DataRouterState";x.createContext(!1);var lc=x.createContext({isTransitioning:!1});lc.displayName="ViewTransition";var Pp=x.createContext(new Map);Pp.displayName="Fetchers";var _p=x.createContext(null);_p.displayName="Await";var Be=x.createContext(null);Be.displayName="Navigation";var va=x.createContext(null);va.displayName="Location";var Ue=x.createContext({outlet:null,matches:[],isDataRoute:!1});Ue.displayName="Route";var vl=x.createContext(null);vl.displayName="RouteError";function Mp(e,{relative:t}={}){B(Nn(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=x.useContext(Be),{hash:i,pathname:s,search:l}=wa(e,{relative:t}),o=s;return n!=="/"&&(o=s==="/"?n:tt([n,s])),r.createHref({pathname:o,search:l,hash:i})}function Nn(){return x.useContext(va)!=null}function He(){return B(Nn(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(va).location}var oc="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function uc(e){x.useContext(Be).static||x.useLayoutEffect(e)}function Yr(){let{isDataRoute:e}=x.useContext(Ue);return e?Gp():Tp()}function Tp(){B(Nn(),"useNavigate() may be used only in the context of a <Router> component.");let e=x.useContext(zn),{basename:t,navigator:n}=x.useContext(Be),{matches:r}=x.useContext(Ue),{pathname:i}=He(),s=JSON.stringify(xl(r)),l=x.useRef(!1);return uc(()=>{l.current=!0}),x.useCallback((u,d={})=>{if(Te(l.current,oc),!l.current)return;if(typeof u=="number"){n.go(u);return}let g=yl(u,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:tt([t,g.pathname])),(d.replace?n.replace:n.push)(g,d.state,d)},[t,n,s,i,e])}x.createContext(null);function dc(){let{matches:e}=x.useContext(Ue),t=e[e.length-1];return t?t.params:{}}function wa(e,{relative:t}={}){let{matches:n}=x.useContext(Ue),{pathname:r}=He(),i=JSON.stringify(xl(n));return x.useMemo(()=>yl(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function Fp(e,t){return cc(e,t)}function cc(e,t,n,r,i){var c;B(Nn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=x.useContext(Be),{matches:l}=x.useContext(Ue),o=l[l.length-1],u=o?o.params:{},d=o?o.pathname:"/",g=o?o.pathnameBase:"/",f=o&&o.route;{let p=f&&f.path||"";mc(d,!f||p.endsWith("*")||p.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${p}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${p}"> to <Route path="${p==="/"?"*":`${p}/*`}">.`)}let m=He(),w;if(t){let p=typeof t=="string"?jn(t):t;B(g==="/"||((c=p.pathname)==null?void 0:c.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${p.pathname}" was given in the \`location\` prop.`),w=p}else w=m;let y=w.pathname||"/",v=y;if(g!=="/"){let p=g.replace(/^\//,"").split("/");v="/"+y.replace(/^\//,"").split("/").slice(p.length).join("/")}let k=ac(e,{pathname:v});Te(f||k!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Te(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Op(k&&k.map(p=>Object.assign({},p,{params:Object.assign({},u,p.params),pathname:tt([g,s.encodeLocation?s.encodeLocation(p.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?g:tt([g,s.encodeLocation?s.encodeLocation(p.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:p.pathnameBase])})),l,n,r,i);return t&&h?x.createElement(va.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},h):h}function Ap(){let e=qp(),t=Cp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:s},"ErrorBoundary")," or"," ",x.createElement("code",{style:s},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,l)}var Ip=x.createElement(Ap,null),Dp=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?x.createElement(Ue.Provider,{value:this.props.routeContext},x.createElement(vl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Rp({routeContext:e,match:t,children:n}){let r=x.useContext(zn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(Ue.Provider,{value:e},n)}function Op(e,t=[],n=null,r=null,i=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=n==null?void 0:n.errors;if(l!=null){let g=s.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);B(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,g+1))}let o=!1,u=-1;if(n)for(let g=0;g<s.length;g++){let f=s[g];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=g),f.route.id){let{loaderData:m,errors:w}=n,y=f.route.loader&&!m.hasOwnProperty(f.route.id)&&(!w||w[f.route.id]===void 0);if(f.route.lazy||y){o=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}let d=n&&r?(g,f)=>{var m,w;r(g,{location:n.location,params:((w=(m=n.matches)==null?void 0:m[0])==null?void 0:w.params)??{},errorInfo:f})}:void 0;return s.reduceRight((g,f,m)=>{let w,y=!1,v=null,k=null;n&&(w=l&&f.route.id?l[f.route.id]:void 0,v=f.route.errorElement||Ip,o&&(u<0&&m===0?(mc("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,k=null):u===m&&(y=!0,k=f.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,m+1)),c=()=>{let p;return w?p=v:y?p=k:f.route.Component?p=x.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=g,x.createElement(Rp,{match:f,routeContext:{outlet:g,matches:h,isDataRoute:n!=null},children:p})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?x.createElement(Dp,{location:n.location,revalidation:n.revalidation,component:v,error:w,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:d}):c()},null)}function wl(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wp(e){let t=x.useContext(zn);return B(t,wl(e)),t}function Bp(e){let t=x.useContext(Gr);return B(t,wl(e)),t}function Up(e){let t=x.useContext(Ue);return B(t,wl(e)),t}function bl(e){let t=Up(e),n=t.matches[t.matches.length-1];return B(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Hp(){return bl("useRouteId")}function qp(){var r;let e=x.useContext(vl),t=Bp("useRouteError"),n=bl("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function Gp(){let{router:e}=Wp("useNavigate"),t=bl("useNavigate"),n=x.useRef(!1);return uc(()=>{n.current=!0}),x.useCallback(async(i,s={})=>{Te(n.current,oc),n.current&&(typeof i=="number"?e.navigate(i):await e.navigate(i,{fromRouteId:t,...s}))},[e,t])}var Oo={};function mc(e,t,n){!t&&!Oo[e]&&(Oo[e]=!0,Te(!1,n))}x.memo(Yp);function Yp({routes:e,future:t,state:n,unstable_onError:r}){return cc(e,void 0,n,r,t)}function hc({to:e,replace:t,state:n,relative:r}){B(Nn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=x.useContext(Be);Te(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=x.useContext(Ue),{pathname:l}=He(),o=Yr(),u=yl(e,xl(s),l,r==="path"),d=JSON.stringify(u);return x.useEffect(()=>{o(JSON.parse(d),{replace:t,state:n,relative:r})},[o,d,r,t,n]),null}function we(e){B(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function $p({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:s=!1}){B(!Nn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=e.replace(/^\/*/,"/"),o=x.useMemo(()=>({basename:l,navigator:i,static:s,future:{}}),[l,i,s]);typeof n=="string"&&(n=jn(n));let{pathname:u="/",search:d="",hash:g="",state:f=null,key:m="default"}=n,w=x.useMemo(()=>{let y=st(u,l);return y==null?null:{location:{pathname:y,search:d,hash:g,state:f,key:m},navigationType:r}},[l,u,d,g,f,m,r]);return Te(w!=null,`<Router basename="${l}"> is not able to match the URL "${u}${d}${g}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:x.createElement(Be.Provider,{value:o},x.createElement(va.Provider,{children:t,value:w}))}function Vp({children:e,location:t}){return Fp(bs(e),t)}function bs(e,t=[]){let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let s=[...t,i];if(r.type===x.Fragment){n.push.apply(n,bs(r.props.children,s));return}B(r.type===we,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),B(!r.props.index||!r.props.children,"An index route cannot have child routes.");let l={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=bs(r.props.children,s)),n.push(l)}),n}var er="get",tr="application/x-www-form-urlencoded";function $r(e){return e!=null&&typeof e.tagName=="string"}function Zp(e){return $r(e)&&e.tagName.toLowerCase()==="button"}function Qp(e){return $r(e)&&e.tagName.toLowerCase()==="form"}function Kp(e){return $r(e)&&e.tagName.toLowerCase()==="input"}function Jp(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Xp(e,t){return e.button===0&&(!t||t==="_self")&&!Jp(e)}var Wa=null;function ef(){if(Wa===null)try{new FormData(document.createElement("form"),0),Wa=!1}catch{Wa=!0}return Wa}var tf=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zi(e){return e!=null&&!tf.has(e)?(Te(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tr}"`),null):e}function nf(e,t){let n,r,i,s,l;if(Qp(e)){let o=e.getAttribute("action");r=o?st(o,t):null,n=e.getAttribute("method")||er,i=zi(e.getAttribute("enctype"))||tr,s=new FormData(e)}else if(Zp(e)||Kp(e)&&(e.type==="submit"||e.type==="image")){let o=e.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||o.getAttribute("action");if(r=u?st(u,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||er,i=zi(e.getAttribute("formenctype"))||zi(o.getAttribute("enctype"))||tr,s=new FormData(o,e),!ef()){let{name:d,type:g,value:f}=e;if(g==="image"){let m=d?`${d}.`:"";s.append(`${m}x`,"0"),s.append(`${m}y`,"0")}else d&&s.append(d,f)}}else{if($r(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=er,r=null,i=tr,l=e}return s&&i==="text/plain"&&(l=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function kl(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function af(e,t,n){let r=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r.pathname==="/"?r.pathname=`_root.${n}`:t&&st(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function rf(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function sf(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function lf(e,t,n){let r=await Promise.all(e.map(async i=>{let s=t.routes[i.route.id];if(s){let l=await rf(s,n);return l.links?l.links():[]}return[]}));return cf(r.flat(1).filter(sf).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Wo(e,t,n,r,i,s){let l=(u,d)=>n[d]?u.route.id!==n[d].route.id:!0,o=(u,d)=>{var g;return n[d].pathname!==u.pathname||((g=n[d].route.path)==null?void 0:g.endsWith("*"))&&n[d].params["*"]!==u.params["*"]};return s==="assets"?t.filter((u,d)=>l(u,d)||o(u,d)):s==="data"?t.filter((u,d)=>{var f;let g=r.routes[u.route.id];if(!g||!g.hasLoader)return!1;if(l(u,d)||o(u,d))return!0;if(u.route.shouldRevalidate){let m=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function of(e,t,{includeHydrateFallback:n}={}){return uf(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function uf(e){return[...new Set(e)]}function df(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function cf(e,t){let n=new Set;return new Set(t),e.reduce((r,i)=>{let s=JSON.stringify(df(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function pc(){let e=x.useContext(zn);return kl(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function mf(){let e=x.useContext(Gr);return kl(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var jl=x.createContext(void 0);jl.displayName="FrameworkContext";function fc(){let e=x.useContext(jl);return kl(e,"You must render this element inside a <HydratedRouter> element"),e}function hf(e,t){let n=x.useContext(jl),[r,i]=x.useState(!1),[s,l]=x.useState(!1),{onFocus:o,onBlur:u,onMouseEnter:d,onMouseLeave:g,onTouchStart:f}=t,m=x.useRef(null);x.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let v=h=>{h.forEach(c=>{l(c.isIntersecting)})},k=new IntersectionObserver(v,{threshold:.5});return m.current&&k.observe(m.current),()=>{k.disconnect()}}},[e]),x.useEffect(()=>{if(r){let v=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(v)}}},[r]);let w=()=>{i(!0)},y=()=>{i(!1),l(!1)};return n?e!=="intent"?[s,m,{}]:[s,m,{onFocus:In(o,w),onBlur:In(u,y),onMouseEnter:In(d,w),onMouseLeave:In(g,y),onTouchStart:In(f,w)}]:[!1,m,{}]}function In(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function pf({page:e,...t}){let{router:n}=pc(),r=x.useMemo(()=>ac(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?x.createElement(gf,{page:e,matches:r,...t}):null}function ff(e){let{manifest:t,routeModules:n}=fc(),[r,i]=x.useState([]);return x.useEffect(()=>{let s=!1;return lf(e,t,n).then(l=>{s||i(l)}),()=>{s=!0}},[e,t,n]),r}function gf({page:e,matches:t,...n}){let r=He(),{manifest:i,routeModules:s}=fc(),{basename:l}=pc(),{loaderData:o,matches:u}=mf(),d=x.useMemo(()=>Wo(e,t,u,i,r,"data"),[e,t,u,i,r]),g=x.useMemo(()=>Wo(e,t,u,i,r,"assets"),[e,t,u,i,r]),f=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let y=new Set,v=!1;if(t.forEach(h=>{var p;let c=i.routes[h.route.id];!c||!c.hasLoader||(!d.some(b=>b.route.id===h.route.id)&&h.route.id in o&&((p=s[h.route.id])!=null&&p.shouldRevalidate)||c.hasClientLoader?v=!0:y.add(h.route.id))}),y.size===0)return[];let k=af(e,l,"data");return v&&y.size>0&&k.searchParams.set("_routes",t.filter(h=>y.has(h.route.id)).map(h=>h.route.id).join(",")),[k.pathname+k.search]},[l,o,r,i,d,t,e,s]),m=x.useMemo(()=>of(g,i),[g,i]),w=ff(g);return x.createElement(x.Fragment,null,f.map(y=>x.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...n})),m.map(y=>x.createElement("link",{key:y,rel:"modulepreload",href:y,...n})),w.map(({key:y,link:v})=>x.createElement("link",{key:y,nonce:n.nonce,...v})))}function xf(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var gc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{gc&&(window.__reactRouterVersion="7.9.6")}catch{}function yf({basename:e,children:t,window:n}){let r=x.useRef();r.current==null&&(r.current=rp({window:n,v5Compat:!0}));let i=r.current,[s,l]=x.useState({action:i.action,location:i.location}),o=x.useCallback(u=>{x.startTransition(()=>l(u))},[l]);return x.useLayoutEffect(()=>i.listen(o),[i,o]),x.createElement($p,{basename:e,children:t,location:s.location,navigationType:s.action,navigator:i})}var xc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ee=x.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:l,state:o,target:u,to:d,preventScrollReset:g,viewTransition:f,...m},w){let{basename:y}=x.useContext(Be),v=typeof d=="string"&&xc.test(d),k,h=!1;if(typeof d=="string"&&v&&(k=d,gc))try{let F=new URL(window.location.href),P=d.startsWith("//")?new URL(F.protocol+d):new URL(d),pe=st(P.pathname,y);P.origin===F.origin&&pe!=null?d=pe+P.search+P.hash:h=!0}catch{Te(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let c=Mp(d,{relative:i}),[p,b,z]=hf(r,m),N=kf(d,{replace:l,state:o,target:u,preventScrollReset:g,relative:i,viewTransition:f});function L(F){t&&t(F),F.defaultPrevented||N(F)}let E=x.createElement("a",{...m,...z,href:k||c,onClick:h||s?t:L,ref:xf(w,b),target:u,"data-discover":!v&&n==="render"?"true":void 0});return p&&!v?x.createElement(x.Fragment,null,E,x.createElement(pf,{page:c})):E});ee.displayName="Link";var vf=x.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:l,viewTransition:o,children:u,...d},g){let f=wa(l,{relative:d.relative}),m=He(),w=x.useContext(Gr),{navigator:y,basename:v}=x.useContext(Be),k=w!=null&&Lf(f)&&o===!0,h=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,c=m.pathname,p=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;n||(c=c.toLowerCase(),p=p?p.toLowerCase():null,h=h.toLowerCase()),p&&v&&(p=st(p,v)||p);const b=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let z=c===h||!i&&c.startsWith(h)&&c.charAt(b)==="/",N=p!=null&&(p===h||!i&&p.startsWith(h)&&p.charAt(h.length)==="/"),L={isActive:z,isPending:N,isTransitioning:k},E=z?t:void 0,F;typeof r=="function"?F=r(L):F=[r,z?"active":null,N?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let P=typeof s=="function"?s(L):s;return x.createElement(ee,{...d,"aria-current":E,className:F,ref:g,style:P,to:l,viewTransition:o},typeof u=="function"?u(L):u)});vf.displayName="NavLink";var wf=x.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:s,method:l=er,action:o,onSubmit:u,relative:d,preventScrollReset:g,viewTransition:f,...m},w)=>{let y=Nf(),v=Sf(o,{relative:d}),k=l.toLowerCase()==="get"?"get":"post",h=typeof o=="string"&&xc.test(o),c=p=>{if(u&&u(p),p.defaultPrevented)return;p.preventDefault();let b=p.nativeEvent.submitter,z=(b==null?void 0:b.getAttribute("formmethod"))||l;y(b||p.currentTarget,{fetcherKey:t,method:z,navigate:n,replace:i,state:s,relative:d,preventScrollReset:g,viewTransition:f})};return x.createElement("form",{ref:w,method:k,action:v,onSubmit:r?u:c,...m,"data-discover":!h&&e==="render"?"true":void 0})});wf.displayName="Form";function bf(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yc(e){let t=x.useContext(zn);return B(t,bf(e)),t}function kf(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:s,viewTransition:l}={}){let o=Yr(),u=He(),d=wa(e,{relative:s});return x.useCallback(g=>{if(Xp(g,t)){g.preventDefault();let f=n!==void 0?n:ha(u)===ha(d);o(e,{replace:f,state:r,preventScrollReset:i,relative:s,viewTransition:l})}},[u,o,d,n,r,t,e,i,s,l])}var jf=0,zf=()=>`__${String(++jf)}__`;function Nf(){let{router:e}=yc("useSubmit"),{basename:t}=x.useContext(Be),n=Hp();return x.useCallback(async(r,i={})=>{let{action:s,method:l,encType:o,formData:u,body:d}=nf(r,t);if(i.navigate===!1){let g=i.fetcherKey||zf();await e.fetch(g,n,i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:d,formMethod:i.method||l,formEncType:i.encType||o,flushSync:i.flushSync})}else await e.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:d,formMethod:i.method||l,formEncType:i.encType||o,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function Sf(e,{relative:t}={}){let{basename:n}=x.useContext(Be),r=x.useContext(Ue);B(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...wa(e||".",{relative:t})},l=He();if(e==null){s.search=l.search;let o=new URLSearchParams(s.search),u=o.getAll("index");if(u.some(g=>g==="")){o.delete("index"),u.filter(f=>f).forEach(f=>o.append("index",f));let g=o.toString();s.search=g?`?${g}`:""}}return(!e||e===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:tt([n,s.pathname])),ha(s)}function Lf(e,{relative:t}={}){let n=x.useContext(lc);B(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=yc("useViewTransitionState"),i=wa(e,{relative:t});if(!n.isTransitioning)return!1;let s=st(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=st(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Cr(i.pathname,l)!=null||Cr(i.pathname,s)!=null}const Cf=()=>{const[e,t]=x.useState(!1),n=He(),r=Yr(),i=n.pathname==="/",s=o=>{if(i){const u=document.getElementById(o);u&&(u.scrollIntoView({behavior:"smooth"}),t(!1))}else r("/"),setTimeout(()=>{const u=document.getElementById(o);u&&u.scrollIntoView({behavior:"smooth"})},300),t(!1)},l=[{label:"How It Works",path:"/how-it-works"},{label:"Features",path:"/features"},{label:"Safety",path:"/safety"},{label:"Stories",path:"/stories"},{label:"About",id:"about"}];return a.jsxs("nav",{className:"fixed top-0 left-0 right-0 bg-slate-900 shadow-lg z-50",children:[a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"flex justify-between items-center h-20 py-4",children:[a.jsx(ee,{to:"/",className:"flex items-center space-x-2",children:a.jsx("img",{src:"/images/splash-logo-transparent.png",alt:"FairyAI Logo",className:"h-12 w-auto"})}),a.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[l.map((o,u)=>o.path?a.jsx(ee,{to:o.path,className:"text-neutral-200 hover:text-soft-blue-300 font-medium transition-colors",onClick:()=>t(!1),children:o.label},u):a.jsx("button",{onClick:()=>s(o.id),className:"text-neutral-200 hover:text-soft-blue-300 font-medium transition-colors",children:o.label},u)),a.jsx("a",{href:"/#download",className:"bg-fairy-gold-500 text-white px-5 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105",onClick:o=>{o.preventDefault();const u=document.getElementById("download");u?u.scrollIntoView({behavior:"smooth"}):window.location.href="/#download"},children:"Download App"})]}),a.jsx("button",{onClick:()=>t(!e),className:"md:hidden p-2 text-neutral-200","aria-label":"Toggle menu",children:e?a.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):a.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})}),e&&a.jsx("div",{className:"md:hidden bg-slate-800 border-t border-slate-700",children:a.jsxs("div",{className:"px-4 py-3 space-y-3",children:[a.jsx("a",{href:"/#download",onClick:o=>{o.preventDefault(),t(!1);const u=document.getElementById("download");u?u.scrollIntoView({behavior:"smooth"}):window.location.href="/#download"},className:"block w-full text-center bg-fairy-gold-500 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all",children:"Download App"}),l.map((o,u)=>o.path?a.jsx(ee,{to:o.path,onClick:()=>t(!1),className:"block w-full text-left px-3 py-2 text-neutral-200 hover:bg-slate-700 rounded-lg",children:o.label},u):a.jsx("button",{onClick:()=>s(o.id),className:"block w-full text-left px-3 py-2 text-neutral-200 hover:bg-slate-700 rounded-lg",children:o.label},u))]})})]})},Ef=()=>{const e=new Date().getFullYear(),t=He(),n=Yr(),r=t.pathname==="/",i=o=>{if(r){const u=document.getElementById(o);u&&u.scrollIntoView({behavior:"smooth"})}else n("/"),setTimeout(()=>{const u=document.getElementById(o);u&&u.scrollIntoView({behavior:"smooth"})},300)},s=[{label:"How It Works",path:"/how-it-works"},{label:"Features",path:"/features"},{label:"Safety",path:"/safety"},{label:"About",section:"about"},{label:"Privacy",path:"/privacy"},{label:"Terms",path:"/terms"},{label:"Contact",path:"/contact"},{label:"Delete Account",path:"/delete-account"}],l=[{name:"TikTok",icon:a.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"})}),href:"https://www.tiktok.com/@fairyai.app"},{name:"Facebook",icon:a.jsx("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),href:"https://www.facebook.com/profile.php?id=61579651975857"}];return a.jsx("footer",{className:"bg-neutral-900 text-neutral-300",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[a.jsxs("div",{className:"grid md:grid-cols-3 gap-8 mb-8",children:[a.jsxs("div",{children:[a.jsx("img",{src:"/images/splash-logo-transparent.png",alt:"FairyAI Logo",loading:"lazy",className:"h-12 w-auto mb-4 brightness-0 invert"}),a.jsx("p",{className:"text-sm text-neutral-400",children:"AI-powered bedtime stories built by parents, for parents."})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-semibold text-white mb-4",children:"Quick Links"}),a.jsx("ul",{className:"space-y-2",children:s.map(o=>a.jsx("li",{children:o.path?a.jsx(ee,{to:o.path,className:"text-sm hover:text-white transition-colors",children:o.label}):o.section?a.jsx("button",{onClick:()=>i(o.section),className:"text-sm hover:text-white transition-colors text-left",children:o.label}):null},o.label))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-semibold text-white mb-4",children:"Follow Us"}),a.jsx("div",{className:"flex gap-4",children:l.map(o=>a.jsx("a",{href:o.href,target:"_blank",rel:"noreferrer",className:"text-neutral-400 hover:text-white transition-colors","aria-label":o.name,children:o.icon},o.name))})]})]}),a.jsxs("div",{className:"border-t border-neutral-800 pt-8 text-center",children:[a.jsxs("p",{className:"text-sm text-neutral-500 mb-2",children:["© ",e," FairyAI. Made with love for little dreamers and their families."]}),a.jsx("p",{className:"text-xs text-neutral-600",children:"Rebel AI Ltd • Company No. SC839626 • Scotland, UK"})]})]})})},Ct=({variant:e="default"})=>{const t=e==="gradient"?"bg-fairy-gold-500 text-white shadow-xl hover:shadow-2xl":e==="light"?"bg-white text-soft-blue-600 shadow-lg hover:shadow-xl hover:bg-neutral-50":"bg-black text-white";return a.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 items-center justify-center",children:[a.jsx("a",{href:"https://apps.apple.com/app/id6749895614",target:"_blank",rel:"noreferrer",className:"inline-block transition-transform hover:scale-105","aria-label":"Download on the App Store",children:a.jsxs("div",{className:`${t} px-6 py-3 rounded-lg flex items-center gap-3 min-w-[180px]`,children:[a.jsx("svg",{className:"w-8 h-8",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"})}),a.jsxs("div",{className:"text-left",children:[a.jsx("div",{className:"text-[10px]",children:"Download on the"}),a.jsx("div",{className:"text-lg font-semibold -mt-1",children:"App Store"})]})]})}),a.jsx("a",{href:"https://play.google.com/store/apps/details?id=com.rebelai.fairyaiapp",target:"_blank",rel:"noreferrer",className:"inline-block transition-transform hover:scale-105","aria-label":"Get it on Google Play",children:a.jsxs("div",{className:`${t} px-6 py-3 rounded-lg flex items-center gap-3 min-w-[180px]`,children:[a.jsx("svg",{className:"w-8 h-8",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"})}),a.jsxs("div",{className:"text-left",children:[a.jsx("div",{className:"text-[10px]",children:"GET IT ON"}),a.jsx("div",{className:"text-lg font-semibold -mt-1",children:"Google Play"})]})]})})]})},Pf=()=>a.jsxs("section",{className:"relative h-[500px] md:h-[600px] overflow-hidden",children:[a.jsx("img",{src:"/images/hero-banner.png",alt:"Parent and child reading a bedtime story together on a tablet",loading:"eager",className:"absolute inset-0 w-full h-full object-cover object-[70%_center] md:object-center"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"}),a.jsx("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center",children:a.jsxs("div",{className:"max-w-xl",children:[a.jsx("p",{className:"text-lg md:text-xl text-white/90 font-semibold mb-4 drop-shadow-md",children:"End bedtime battles. Start stories they'll beg to continue."}),a.jsx("h1",{className:"font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg",children:"Stories your kids will remember. Characters they'll love."}),a.jsx("div",{id:"download",className:"mb-4",children:a.jsx(Ct,{variant:"light"})}),a.jsx("p",{className:"text-sm text-white/80 font-medium text-center",children:"✓ No sign-up required • ✓ 6 free stories"})]})})]}),_f=()=>{const e=[{title:"Safety First",description:"Every story passes through content filters and age-appropriate guardrails. No ads, no social features, no surprises.",imageSrc:"/images/why/safety.png"},{title:"Real Quality",description:"Not generic AI slop. Persistent characters with real personalities, multi-chapter books, custom songs with actual melodies.",imageSrc:"/images/why/quality.png"},{title:"Built by Parents",description:"Made for real bedtime routines, not engagement metrics. Start simple with 2 taps, or go deep with character builders and story wizards.",imageSrc:"/images/why/parents.png"}];return a.jsx("section",{className:"py-6 md:py-10 bg-white",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-8",children:[a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3",children:"Why FairyAI?"}),a.jsx("p",{className:"text-lg text-neutral-600",children:"Not just another AI story app"})]}),a.jsx("div",{className:"hidden lg:flex items-start justify-between gap-4",children:e.map((t,n)=>a.jsxs(eu.Fragment,{children:[a.jsxs("div",{className:"flex-1 text-center",children:[a.jsx("div",{className:"w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-fairy-gold-50 to-soft-blue-50 flex items-center justify-center shadow-lg mb-4",children:a.jsx("img",{src:t.imageSrc,alt:t.title,loading:"lazy",className:"w-full h-full object-contain p-4"})}),a.jsx("h3",{className:"font-display text-lg font-semibold mb-2 text-neutral-900",children:t.title}),a.jsx("p",{className:"text-sm text-neutral-600 leading-relaxed",children:t.description})]}),n<e.length-1&&a.jsx("div",{className:"flex items-center pt-20",children:a.jsx("svg",{className:"w-10 h-10 text-fairy-gold-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M9 5l7 7-7 7"})})})]},t.title))}),a.jsx("div",{className:"lg:hidden grid gap-8",children:e.map(t=>a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-fairy-gold-50 to-soft-blue-50 flex items-center justify-center shadow-lg mb-4",children:a.jsx("img",{src:t.imageSrc,alt:t.title,loading:"lazy",className:"w-full h-full object-contain p-4"})}),a.jsx("h3",{className:"font-display text-lg font-semibold mb-2 text-neutral-900",children:t.title}),a.jsx("p",{className:"text-sm text-neutral-600 leading-relaxed",children:t.description})]},t.title))})]})})};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Tf=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),Bo=e=>{const t=Tf(e);return t.charAt(0).toUpperCase()+t.slice(1)},vc=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim(),Ff=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Af={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:l,...o},u)=>x.createElement("svg",{ref:u,...Af,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:vc("lucide",i),...!s&&!Ff(o)&&{"aria-hidden":"true"},...o},[...l.map(([d,g])=>x.createElement(d,g)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=(e,t)=>{const n=x.forwardRef(({className:r,...i},s)=>x.createElement(If,{ref:s,iconNode:t,className:vc(`lucide-${Mf(Bo(e))}`,`lucide-${e}`,r),...i}));return n.displayName=Bo(e),n};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],wc=re("book-open",Df);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ze=re("check",Rf);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ht=re("chevron-right",Of);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],qt=re("chevron-left",Wf);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],Uf=re("gift",Bf);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],qf=re("globe",Hf);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],Yf=re("headphones",Gf);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]],Vf=re("library",$f);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],bc=re("music",Zf);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],kc=re("palette",Qf);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Jf=re("pause",Kf);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],eg=re("play",Xf);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],jc=re("shield",tg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ks=re("sparkles",ng);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],rg=re("star",ag);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],sg=re("wand-sparkles",ig);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],og=re("zap",lg),ug=()=>{const e=[{number:1,title:"Build Characters",description:"Create characters with traits, abilities, and custom images that appear across all your stories.",imageSrc:"/images/steps/build-characters.png"},{number:2,title:"Create Stories",description:"Quick Story for instant magic, or Story Wizard for full control over theme, moral, and plot.",imageSrc:"/images/steps/create-stories.png"},{number:3,title:"Listen, Read & Sing",description:"Read together, play narration in 12 languages, or turn your story into a catchy song.",imageSrc:"/images/steps/listen-read.png"},{number:4,title:"Continue Adventures",description:"Create the next chapter of your adventure. Your new story picks up exactly where the last one ended — or start a brand new tale anytime.",imageSrc:"/images/steps/continue-adventures.png"}];return a.jsx("section",{id:"how-it-works",className:"py-12 md:py-16 bg-white",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3",children:"How It Works"}),a.jsx("p",{className:"text-lg text-neutral-600",children:"Creating magical stories in 4 simple steps"})]}),a.jsx("div",{className:"hidden lg:block relative",children:e.map((t,n)=>{const r=n%2===0;return a.jsxs("div",{className:"relative",children:[a.jsxs("div",{className:`flex items-center gap-8 ${r?"":"flex-row-reverse"} mb-8`,children:[a.jsx("div",{className:"w-1/2 flex justify-center",children:a.jsxs("div",{className:"relative",children:[a.jsx("div",{className:"absolute -top-4 -left-4 w-12 h-12 bg-fairy-gold-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg z-10",children:t.number}),a.jsx("div",{className:"w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-fairy-gold-50 to-soft-blue-50 shadow-xl overflow-hidden",children:a.jsx("img",{src:t.imageSrc,alt:t.title,loading:"lazy",className:"w-full h-full object-contain p-4"})})]})}),a.jsx("div",{className:`w-1/2 flex ${r?"justify-start":"justify-end"}`,children:a.jsxs("div",{className:`max-w-sm ${r?"text-left":"text-right"}`,children:[a.jsx("h3",{className:"font-display text-2xl font-semibold mb-3 text-neutral-900",children:t.title}),a.jsx("p",{className:"text-neutral-600 leading-relaxed",children:t.description})]})})]}),n<e.length-1&&a.jsx("div",{className:`flex ${r?"justify-end pr-24":"justify-start pl-24"} -mt-4 mb-4`,children:a.jsxs("svg",{className:`w-16 h-16 text-fairy-gold-400 ${r?"":"scale-x-[-1]"}`,viewBox:"0 0 64 64",fill:"none",stroke:"currentColor",children:[a.jsx("path",{d:"M8 8 C 32 8, 56 32, 56 56",strokeWidth:"3",strokeLinecap:"round",strokeDasharray:"4 4"}),a.jsx("path",{d:"M48 48 L 56 56 L 48 56",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round"})]})})]},t.number)})}),a.jsx("div",{className:"lg:hidden space-y-8",children:e.map((t,n)=>a.jsxs("div",{className:"text-center",children:[a.jsx("div",{className:"inline-flex items-center justify-center w-10 h-10 bg-fairy-gold-500 rounded-full text-white text-lg font-bold shadow-lg mb-4",children:t.number}),a.jsx("div",{className:"w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-fairy-gold-50 to-soft-blue-50 shadow-lg overflow-hidden mb-4",children:a.jsx("img",{src:t.imageSrc,alt:t.title,loading:"lazy",className:"w-full h-full object-contain p-4"})}),a.jsx("h3",{className:"font-display text-xl font-semibold mb-2 text-neutral-900",children:t.title}),a.jsx("p",{className:"text-neutral-600 leading-relaxed max-w-xs mx-auto",children:t.description}),n<e.length-1&&a.jsx("div",{className:"flex justify-center mt-6",children:a.jsx("svg",{className:"w-8 h-8 text-fairy-gold-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})]},t.number))}),a.jsxs("div",{className:"mt-16 bg-gradient-to-r from-soft-blue-50 to-fairy-gold-50 rounded-2xl p-8 md:p-10 text-center shadow-lg border border-soft-blue-100",children:[a.jsx("div",{className:"flex justify-center mb-4",children:a.jsx(ks,{className:"w-10 h-10 text-fairy-gold-500",strokeWidth:1.5})}),a.jsx("h3",{className:"font-display text-2xl font-semibold text-neutral-900 mb-3",children:"Or skip straight to the magic"}),a.jsx("p",{className:"text-neutral-600 max-w-2xl mx-auto mb-6",children:"Explore Fairy Corner with hundreds of classic tales and fresh AI stories added daily. No creation needed."}),a.jsxs(ee,{to:"/stories",className:"inline-flex items-center gap-2 bg-fairy-gold-500 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200",children:["Browse Fairy Corner",a.jsx(ks,{className:"w-5 h-5"})]})]})]})})},nr=({src:e,title:t,className:n=""})=>{const[r,i]=x.useState(!1),[s,l]=x.useState(0),[o,u]=x.useState(0),[d,g]=x.useState(!0),f=x.useRef(null);x.useEffect(()=>{const v=f.current;if(!v)return;const k=()=>{u(v.duration),g(!1)},h=()=>{l(v.currentTime)},c=()=>{i(!1),l(0)};return v.addEventListener("loadedmetadata",k),v.addEventListener("timeupdate",h),v.addEventListener("ended",c),()=>{v.removeEventListener("loadedmetadata",k),v.removeEventListener("timeupdate",h),v.removeEventListener("ended",c)}},[]);const m=()=>{f.current&&(r?f.current.pause():f.current.play(),i(!r))},w=v=>{const k=parseFloat(v.target.value);f.current&&(f.current.currentTime=k,l(k))},y=v=>{if(isNaN(v))return"0:00";const k=Math.floor(v/60),h=Math.floor(v%60);return`${k}:${h.toString().padStart(2,"0")}`};return a.jsxs("div",{className:`bg-white border border-neutral-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow ${n}`,children:[a.jsx("audio",{ref:f,src:e,preload:"metadata","aria-label":t||"Audio player"}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("button",{onClick:m,disabled:d,className:"flex-shrink-0 w-12 h-12 bg-fairy-gold-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group","aria-label":r?"Pause":"Play",children:d?a.jsxs("svg",{className:"w-6 h-6 text-white animate-spin",viewBox:"0 0 24 24",fill:"none",children:[a.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),a.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):r?a.jsx("svg",{className:"w-5 h-5 text-white",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M6 4h4v16H6V4zm8 0h4v16h-4V4z"})}):a.jsx("svg",{className:"w-6 h-6 text-white ml-1",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M8 5v14l11-7z"})})}),a.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[t&&a.jsx("p",{className:"text-sm font-medium text-neutral-700",children:t}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"text-xs text-neutral-500 font-medium tabular-nums min-w-[38px]",children:y(s)}),a.jsx("div",{className:"flex-1 relative group/progress",children:a.jsx("input",{type:"range",min:"0",max:o||0,value:s,onChange:w,disabled:d,className:"w-full h-1.5 bg-neutral-200 rounded-full appearance-none cursor-pointer disabled:cursor-not-allowed slider",style:{background:`linear-gradient(to right, #3B82F6 0%, #22C55E ${s/o*100}%, #E5E7EB ${s/o*100}%, #E5E7EB 100%)`},"aria-label":"Seek audio"})}),a.jsx("span",{className:"text-xs text-neutral-500 font-medium tabular-nums min-w-[38px]",children:y(o)})]})]})]}),d&&a.jsx("p",{className:"text-xs text-neutral-400 mt-2 text-center animate-pulse",children:"Loading audio..."})]})},ar=({src:e,poster:t,aspectRatio:n="video",className:r="",autoplay:i=!1,muted:s=!1,loop:l=!1,controls:o=!0,comingSoonText:u})=>{const[d,g]=x.useState(!1),[f,m]=x.useState(!1),[w,y]=x.useState(!0),v=x.useRef(null);x.useEffect(()=>{const p=()=>{m(window.innerWidth<640)};return p(),window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[]),x.useEffect(()=>{i&&!f&&v.current&&v.current.play().catch(()=>{y(!0)})},[i,f]);const k=()=>{v.current&&(d?v.current.pause():(v.current.play(),y(!1)),g(!d))},h={square:"aspect-square",video:"aspect-video",portrait:"aspect-[3/4]"},c=i&&!f;return a.jsxs("div",{className:`relative ${h[n]} ${r}`,children:[a.jsx("video",{ref:v,src:e,poster:t,className:"w-full h-full object-cover rounded-lg",autoPlay:c,muted:s||c,loop:l,controls:o&&!w,playsInline:!0,preload:i?"auto":"metadata",onPlay:()=>{g(!0),y(!1)},onPause:()=>g(!1),"aria-label":"Video player",children:a.jsx("p",{className:"text-neutral-600",children:"Your browser does not support the video element. Please update your browser."})}),w&&a.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black/20 to-black/40 rounded-lg cursor-pointer transition-all hover:from-black/30 hover:to-black/50",onClick:k,children:a.jsx("button",{className:"bg-fairy-gold-500 rounded-full p-6 shadow-2xl hover:shadow-3xl transition-all hover:scale-110 active:scale-95 group","aria-label":"Play video",children:a.jsx("svg",{className:"w-14 h-14 text-white ml-1",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M8 5v14l11-7z"})})})}),u&&a.jsx("div",{className:"absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-center",children:a.jsx("p",{className:"text-sm font-semibold",children:u})}),!t&&a.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-neutral-50 via-soft-blue-50 to-soft-green-50 rounded-lg -z-10"})]})},de=({children:e,className:t=""})=>a.jsx("div",{className:`bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 p-6 ${t}`,children:e}),dg=[{id:1,title:"The Gingerbread Man",ageRange:"Classic Tale",description:"A beloved fairy tale about a gingerbread cookie who comes to life and runs away",audioSrc:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/en/nova.mp3",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",linkTo:"/stories/gingerbread-man"},{id:2,title:"Whispers of the Tidal Star",ageRange:"Daily AI Story",description:"A calming bedtime tale about a magical adventure by the ocean at twilight",audioSrc:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/en-GB/shimmer.mp3",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/cover.jpg",linkTo:"/stories/whispers-tidal-star"},{id:3,title:"A Robot Learns About Friendship",ageRange:"User Example",description:"See how one simple prompt adapts across different age groups",audioSrc:"/audio/stories/placeholder.mp3",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/stories/067a4db2-9383-4d08-884e-d1dbad16483a/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_067a4db2-9383-4d08-884e-d1dbad16483a_cover.png",linkTo:"/stories/examples/robot-friendship"}],Uo=[{id:"gingerbread-epic",title:"Run Run Run",style:"Epic Adventure",audioSrc:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/epic_adventure.mp3",duration:154},{id:"gingerbread-singalong",title:"Gingerbread Singalong",style:"Kids Singalong",audioSrc:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/singalong.mp3",duration:118}],cg=[{id:1,name:"Sparkle",imageSrc:"https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/characters/8553a425-d604-4de2-bea9-7ce556fccb2c/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_8553a425-d604-4de2-bea9-7ce556fccb2c_style_Style1.png"},{id:2,name:"Captain Whiskers",imageSrc:"https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/characters/f51c1e70-9c50-4322-a5ee-96f51ba43d40/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_f51c1e70-9c50-4322-a5ee-96f51ba43d40_style_Style6.png"},{id:3,name:"Astro",imageSrc:"https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/characters/aa8854a1-ae57-4f38-8894-85aed2f84789/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_aa8854a1-ae57-4f38-8894-85aed2f84789_style_Style3.png"},{id:4,name:"Ember",imageSrc:"https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/characters/4028445e-cd22-4167-a8dd-3bd4d7306dbf/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_4028445e-cd22-4167-a8dd-3bd4d7306dbf_style_Style2.png"},{id:5,name:"Melody",imageSrc:"https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/characters/91609a2a-2825-4d75-bec3-51501c09035c/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_91609a2a-2825-4d75-bec3-51501c09035c_style_Style4.png"},{id:6,name:"Zoom",imageSrc:"https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/characters/e0362249-d97d-4050-844a-88feb4dfa93f/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_e0362249-d97d-4050-844a-88feb4dfa93f_style_Style5.png"},{id:7,name:"Oliver",imageSrc:"https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/characters/5633ddcc-dd2c-4a66-bf3f-8ea6a6e38ec7/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_5633ddcc-dd2c-4a66-bf3f-8ea6a6e38ec7_style_Style4.png"},{id:8,name:"Coral",imageSrc:"https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/characters/a8ee270e-e84c-40c6-b718-9de9e752aad9/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_a8ee270e-e84c-40c6-b718-9de9e752aad9_style_Style1.png"}],Ba=({direction:e,onClick:t})=>a.jsx("button",{onClick:t,className:`hidden md:flex absolute ${e==="left"?"left-0 -translate-x-4":"right-0 translate-x-4"} top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg items-center justify-center transition-all hover:scale-110`,"aria-label":`Scroll ${e}`,children:e==="left"?a.jsx(qt,{className:"w-6 h-6 text-neutral-700"}):a.jsx(Ht,{className:"w-6 h-6 text-neutral-700"})}),Ni=e=>{const t=Math.floor(e/60),n=e%60;return`${t}:${n.toString().padStart(2,"0")}`},mg=()=>{const e=x.useRef(null),t=x.useRef(null),n=x.useRef(null),[r,i]=x.useState(null),[s,l]=x.useState(!1),[o,u]=x.useState(0),[d,g]=x.useState(0),f=(y,v,k)=>{y.current&&y.current.scrollBy({left:v==="left"?-k:k,behavior:"smooth"})},m=(y,v)=>{var k,h;if(r===y&&s)(k=n.current)==null||k.pause(),l(!1);else if(r===y&&!s)(h=n.current)==null||h.play(),l(!0);else{n.current&&n.current.pause();const c=new Audio(v);n.current=c,c.addEventListener("timeupdate",()=>{u(c.currentTime)}),c.addEventListener("loadedmetadata",()=>{g(c.duration)}),c.addEventListener("ended",()=>{l(!1),u(0)}),c.play(),i(y),l(!0)}};x.useEffect(()=>()=>{n.current&&(n.current.pause(),n.current=null)},[]);const w=Uo.find(y=>y.id===r);return a.jsx("section",{className:"py-6 md:py-10 bg-gradient-to-br from-white via-soft-blue-50 to-soft-green-50",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-8",children:[a.jsxs("h2",{className:"font-display text-3xl md:text-4xl font-bold mb-3",children:[a.jsx("span",{className:"text-slate-900",children:"Real Stories, Real Magic "}),a.jsx("span",{className:"text-2xl",children:"✨"})]}),a.jsx("p",{className:"text-lg text-neutral-600",children:"Hear actual stories and songs created by FairyAI. These are real examples from the app."})]}),a.jsx("div",{className:"mb-12",children:a.jsx("div",{className:"flex justify-center",children:a.jsx("div",{className:"w-full max-w-md",children:a.jsx(ar,{src:"/videos/hero-demo.mp4",poster:"/images/posters/hero-poster.jpg",aspectRatio:"portrait",className:"shadow-2xl",autoplay:!0,muted:!0,loop:!0,comingSoonText:"App Demo Video Coming Soon"})})})}),a.jsxs("div",{className:"mb-12",children:[a.jsx("h3",{className:"font-display text-2xl md:text-3xl font-semibold text-center mb-2 text-slate-900",children:"Sample Stories"}),a.jsx("p",{className:"text-center text-neutral-600 mb-6",children:"Swipe to hear narration samples from real FairyAI stories"}),a.jsxs("div",{className:"relative",children:[a.jsx(Ba,{direction:"left",onClick:()=>f(e,"left",320)}),a.jsx(Ba,{direction:"right",onClick:()=>f(e,"right",320)}),a.jsx("div",{ref:e,className:"flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4",children:dg.map(y=>a.jsx("div",{className:"flex-shrink-0 w-80 snap-start",children:a.jsxs(de,{className:"h-full overflow-hidden p-0",children:[a.jsx("div",{className:"relative h-40",children:a.jsx("img",{src:y.imageUrl,alt:y.title,loading:"lazy",className:"w-full h-full object-cover"})}),a.jsxs("div",{className:"p-4",children:[a.jsxs("div",{className:"flex items-start justify-between mb-2 gap-2",children:[a.jsx("h4",{className:"font-display text-lg font-bold text-slate-900",children:y.title}),a.jsx("span",{className:"text-xs font-semibold text-soft-blue-600 bg-soft-blue-50 px-2 py-1 rounded-full flex-shrink-0",children:y.ageRange})]}),a.jsx("p",{className:"text-neutral-600 mb-3 text-sm",children:y.description}),y.id!==3&&a.jsx("div",{className:"mb-3",children:a.jsx(nr,{src:y.audioSrc,title:"Story Narration Sample"})}),a.jsx(ee,{to:y.linkTo,className:"block text-center bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 text-sm",children:y.id===3?"See Age Variations":"Read Full Story"})]})]})},y.id))}),a.jsxs("p",{className:"text-center text-sm text-neutral-500 mt-2 md:hidden flex items-center justify-center gap-1",children:[a.jsx(qt,{className:"w-4 h-4"})," Swipe to explore ",a.jsx(Ht,{className:"w-4 h-4"})]})]})]}),a.jsxs("div",{className:"mb-12",children:[a.jsx("h3",{className:"font-display text-2xl md:text-3xl font-semibold text-center mb-2 text-slate-900",children:"Sample Songs"}),a.jsx("p",{className:"text-center text-neutral-600 mb-6",children:"Every story can become a personalised song"}),a.jsxs("div",{className:"max-w-lg mx-auto bg-white rounded-xl shadow-md border border-neutral-200 overflow-hidden",children:[a.jsx("div",{className:"divide-y divide-neutral-100",children:Uo.map(y=>{const v=r===y.id,k=v&&s;return a.jsxs("div",{className:`flex items-center gap-3 p-4 hover:bg-neutral-50 transition-colors cursor-pointer ${v?"bg-amber-50":""}`,onClick:()=>m(y.id,y.audioSrc),children:[a.jsx("button",{className:"flex-shrink-0 w-10 h-10 bg-fairy-gold-500 hover:bg-fairy-gold-600 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 shadow-md","aria-label":k?"Pause":"Play",children:k?a.jsx(Jf,{className:"w-5 h-5",fill:"currentColor"}):a.jsx(eg,{className:"w-5 h-5 ml-0.5",fill:"currentColor"})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("p",{className:`font-semibold text-neutral-900 truncate ${v?"text-fairy-gold-600":""}`,children:y.title}),a.jsx("p",{className:"text-sm text-neutral-500 truncate",children:y.style})]}),a.jsx("span",{className:"text-sm text-neutral-400 flex-shrink-0",children:Ni(y.duration)})]},y.id)})}),w?a.jsxs("div",{className:"bg-neutral-50 border-t border-neutral-200 p-4",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[a.jsx("span",{className:"text-xs font-semibold text-fairy-gold-500 uppercase tracking-wide",children:"Now Playing"}),a.jsx("span",{className:"text-sm font-medium text-neutral-700 truncate",children:w.title})]}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"text-xs text-neutral-500 w-10 text-right",children:Ni(Math.floor(o))}),a.jsx("div",{className:"flex-1 h-2 bg-neutral-200 rounded-full overflow-hidden",children:a.jsx("div",{className:"h-full bg-fairy-gold-500 rounded-full transition-all",style:{width:`${d>0?o/d*100:0}%`}})}),a.jsx("span",{className:"text-xs text-neutral-500 w-10",children:Ni(Math.floor(d))})]})]}):a.jsx("div",{className:"bg-neutral-50 border-t border-neutral-200 p-4 text-center",children:a.jsx("p",{className:"text-sm text-neutral-400",children:"Select a song to play"})})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-display text-2xl md:text-3xl font-semibold text-center mb-2 text-slate-900",children:"Character Gallery"}),a.jsx("p",{className:"text-center text-neutral-600 mb-1",children:"Build your own cast of characters that persist across stories"}),a.jsx("p",{className:"text-center text-sm font-semibold text-soft-blue-600 mb-6",children:"All characters created in seconds using FairyAI's 6 unique art styles"}),a.jsxs("div",{className:"relative",children:[a.jsx(Ba,{direction:"left",onClick:()=>f(t,"left",200)}),a.jsx(Ba,{direction:"right",onClick:()=>f(t,"right",200)}),a.jsx("div",{ref:t,className:"flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4",children:cg.map(y=>a.jsx("div",{className:"flex-shrink-0 w-48 snap-start",children:a.jsxs(de,{className:"p-0 overflow-hidden",children:[a.jsx("div",{className:"aspect-square relative",children:a.jsx("img",{src:y.imageSrc,alt:y.name,loading:"lazy",className:"w-full h-full object-cover"})}),a.jsx("div",{className:"p-3 text-center",children:a.jsx("p",{className:"text-sm font-semibold text-neutral-700",children:y.name})})]})},y.id))}),a.jsxs("p",{className:"text-center text-sm text-neutral-500 mt-2 md:hidden flex items-center justify-center gap-1",children:[a.jsx(qt,{className:"w-4 h-4"})," Swipe to explore ",a.jsx(Ht,{className:"w-4 h-4"})]})]}),a.jsx("div",{className:"text-center mt-8",children:a.jsx(ee,{to:"/how-it-works",className:"inline-flex items-center gap-2 text-soft-blue-600 font-semibold hover:text-soft-green-600 transition-colors",children:"Learn how to create your own characters →"})})]})]})})},Ho=({direction:e,onClick:t})=>a.jsx("button",{onClick:t,className:`hidden md:flex absolute ${e==="left"?"left-0 -translate-x-4":"right-0 translate-x-4"} top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg items-center justify-center transition-all hover:scale-110`,"aria-label":`Scroll ${e}`,children:e==="left"?a.jsx(qt,{className:"w-6 h-6 text-neutral-700"}):a.jsx(Ht,{className:"w-6 h-6 text-neutral-700"})}),hg=()=>{const e=x.useRef(null),t=r=>{e.current&&e.current.scrollBy({left:r==="left"?-300:300,behavior:"smooth"})},n=[{quote:"Great all round product at great value, would recommend to any parent!",name:"Lucy",role:"Mum of 2"},{quote:"A magical personalised adventure! My favourite thing is being able to turn your loved ones into heroes.",name:"Deborah",role:"Mum of 3"},{quote:"We made a character based on my son — now every story feels like it's actually about him.",name:"Priya",role:"Mum of 1"},{quote:"We created a dragon called Spark. Three months later, my kids still talk about him like he's real.",name:"James",role:"Dad of 2"},{quote:"It encourages his creativity and imagination as he creates his own characters and adventures. It's become a cherished part of our nightly routine.",name:"Elliott",role:"Dad of 1"}];return a.jsx("section",{id:"testimonials",className:"py-10 md:py-14 bg-neutral-50",children:a.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsx("div",{className:"text-center mb-8",children:a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-2",children:"What Parents Are Saying"})}),a.jsxs("div",{className:"relative",children:[a.jsx(Ho,{direction:"left",onClick:()=>t("left")}),a.jsx(Ho,{direction:"right",onClick:()=>t("right")}),a.jsx("div",{ref:e,className:"flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 -mx-4 px-4",children:n.map((r,i)=>a.jsxs("div",{className:"flex-shrink-0 w-72 snap-start flex flex-col items-center",children:[a.jsxs("div",{className:"relative bg-white rounded-2xl shadow-md border border-fairy-gold-200 p-5 mb-4 w-full",children:[a.jsxs("p",{className:"text-sm text-neutral-700 leading-relaxed text-center",children:['"',r.quote,'"']}),a.jsx("div",{className:"absolute -bottom-2 left-1/2 -translate-x-1/2",children:a.jsx("div",{className:"w-4 h-4 bg-white border-r border-b border-fairy-gold-200 rotate-45 transform origin-center"})})]}),a.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[a.jsx("div",{className:"w-8 h-8 bg-fairy-gold-500 rounded-full flex items-center justify-center text-white font-bold text-xs",children:r.name.charAt(0)}),a.jsxs("div",{className:"text-left",children:[a.jsx("p",{className:"font-semibold text-neutral-900 text-sm",children:r.name}),a.jsx("p",{className:"text-xs text-neutral-500",children:r.role})]})]})]},i))}),a.jsxs("p",{className:"text-center text-sm text-neutral-500 mt-2 md:hidden flex items-center justify-center gap-1",children:[a.jsx(qt,{className:"w-4 h-4"})," Swipe to explore ",a.jsx(Ht,{className:"w-4 h-4"})]})]})]})})},pg=()=>{const e=[{src:"/images/Founder_Original.png",label:"Original"},{src:"/images/Founder_Transform1.jpg",label:"FairyAI Style 1"},{src:"/images/Founder_Transform2.jpg",label:"FairyAI Style 2"}],[t,n]=x.useState(0),r=()=>{n(i=>(i+1)%e.length)};return a.jsx("section",{id:"about",className:"py-6 md:py-10 bg-white",children:a.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsx("div",{className:"text-center mb-6",children:a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-2",children:"Built by a Parent Who Gets It"})}),a.jsxs("div",{className:"grid md:grid-cols-3 gap-8 items-center",children:[a.jsxs("div",{className:"md:col-span-1 flex flex-col items-center gap-3",children:[a.jsx("div",{className:"w-40 h-40 md:w-48 md:h-48 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl rounded-full shadow-xl overflow-hidden",onClick:r,children:a.jsx("img",{src:e[t].src,alt:`Nathan - ${e[t].label}`,loading:"lazy",className:"w-full h-full object-cover transition-opacity duration-500",style:{objectPosition:t===0?"center 65%":"center"}})}),a.jsxs("div",{className:"text-center",children:[a.jsx("p",{className:"text-sm font-semibold text-fairy-gold-500 mb-1",children:e[t].label}),a.jsx("p",{className:"text-xs text-neutral-500 italic",children:"Click to see me transformed by FairyAI!"})]})]}),a.jsx("div",{className:"md:col-span-2",children:a.jsxs("div",{className:"prose max-w-none",children:[a.jsxs("p",{className:"text-base text-neutral-700 leading-relaxed mb-4",children:["Hi, I'm ",a.jsx("span",{className:"font-semibold text-neutral-900",children:"Nathan"}),", a parent just like you. FairyAI was born from bedtime chaos in my own home. What started as a side project to help my daughter has grown into a community of families turning bedtime battles into magical moments."]}),a.jsx("p",{className:"text-base text-neutral-700 leading-relaxed mb-4",children:`I didn't want to build just another "type a sentence, get a story" app. I wanted characters my kids would remember, stories that could grow into chapter books, and safety I'd trust with my own family. FairyAI is what I built for my kids. I hope it becomes part of your bedtime routine too.`}),a.jsx("p",{className:"text-base text-neutral-700 leading-relaxed italic",children:"— Nathan, Dad & Founder"})]})})]})]})})},fg=()=>a.jsx("section",{className:"py-8 md:py-12 bg-amber-50",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold mb-4 text-neutral-900",children:"Ready to build your family's story universe?"}),a.jsx("p",{className:"text-lg md:text-xl mb-3 text-neutral-700",children:"Start simple: 2 taps and you're reading. Go deep: build characters, multi-chapter books, songs and narration."}),a.jsx("p",{className:"text-base mb-6 text-neutral-800 font-semibold",children:"✓ No signup needed • ✓ 6 free stories • ✓ Safe, age-appropriate content"}),a.jsx("div",{className:"mb-4",children:a.jsx(Ct,{variant:"gradient"})}),a.jsx("p",{className:"text-sm text-neutral-600",children:"Browse Fairy Corner as a guest first • Premium plans with monthly Fairy Dust allocation"})]})}),gg=()=>a.jsxs(a.Fragment,{children:[a.jsx(Pf,{}),a.jsx(_f,{}),a.jsx(mg,{}),a.jsx(ug,{}),a.jsx(hg,{}),a.jsx(pg,{}),a.jsx(fg,{})]}),xg=()=>{const e=x.useRef(null),t=r=>{e.current&&e.current.scrollBy({left:r==="left"?-340:340,behavior:"smooth"})},n=[{icon:kc,title:"Build Characters",description:"Create once, use forever. Give them traits, abilities, and custom images."},{icon:og,title:"Quick Story",description:"2 taps for instant magic when you just need a story fast."},{icon:sg,title:"Story Wizard",description:"Full control: characters, theme, moral lesson, plot hints."},{icon:wc,title:"Continue Adventures",description:"Turn any story into multi-chapter books. Quick or advanced mode."},{icon:Yf,title:"12 Languages",description:"Stories, narration, and songs in native-quality audio."},{icon:bc,title:"Custom Songs",description:"Turn stories into catchy songs with lyrics and melodies."},{icon:Vf,title:"Fairy Corner",description:"Classic tales, daily AI stories, nursery rhymes. 2 always free."},{icon:jc,title:"Age-Smart",description:"Content adapts for ages 2-12. Safe filters on everything."}];return a.jsxs("div",{className:"pt-16 bg-white",children:[a.jsx("section",{className:"bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-12 md:py-16",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[a.jsx("h1",{className:"font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4",children:"How It Works"}),a.jsx("p",{className:"text-xl text-neutral-600",children:"Simple to start. Deep when you want it."})]})}),a.jsx("section",{className:"py-12 md:py-16 bg-white",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-8",children:[a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3",children:"See It In Action"}),a.jsx("p",{className:"text-lg text-neutral-600",children:"Swipe to see character creation, story reading, and Fairy Corner"})]}),a.jsxs("div",{className:"relative",children:[a.jsx("button",{onClick:()=>t("left"),className:"hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg items-center justify-center transition-all hover:scale-110","aria-label":"Scroll left",children:a.jsx(qt,{className:"w-6 h-6 text-neutral-700"})}),a.jsx("button",{onClick:()=>t("right"),className:"hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg items-center justify-center transition-all hover:scale-110","aria-label":"Scroll right",children:a.jsx(Ht,{className:"w-6 h-6 text-neutral-700"})}),a.jsxs("div",{ref:e,className:"flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 pb-4",children:[a.jsx("div",{className:"flex-shrink-0 w-80 snap-start",children:a.jsxs(de,{className:"p-0 overflow-hidden",children:[a.jsx(ar,{src:"/videos/character-creation-demo.mp4",aspectRatio:"portrait",className:"rounded-t-lg",controls:!0,comingSoonText:"Character Creation Demo"}),a.jsxs("div",{className:"p-4",children:[a.jsx("h3",{className:"font-display text-lg font-semibold mb-2 text-neutral-900",children:"Character Creation"}),a.jsx("p",{className:"text-sm text-neutral-600",children:"Build characters with traits and abilities. Quick mode or full wizard."})]})]})}),a.jsx("div",{className:"flex-shrink-0 w-80 snap-start",children:a.jsxs(de,{className:"p-0 overflow-hidden",children:[a.jsx(ar,{src:"/videos/story-reader-demo.mp4",aspectRatio:"portrait",className:"rounded-t-lg",controls:!0,comingSoonText:"Story Reader Demo"}),a.jsxs("div",{className:"p-4",children:[a.jsx("h3",{className:"font-display text-lg font-semibold mb-2 text-neutral-900",children:"Reading Stories"}),a.jsx("p",{className:"text-sm text-neutral-600",children:"Read together or play narration. Continue into multi-chapter books."})]})]})}),a.jsx("div",{className:"flex-shrink-0 w-80 snap-start",children:a.jsxs(de,{className:"p-0 overflow-hidden",children:[a.jsx(ar,{src:"/videos/fairy-corner-demo.mp4",aspectRatio:"portrait",className:"rounded-t-lg",controls:!0,comingSoonText:"Fairy Corner Demo"}),a.jsxs("div",{className:"p-4",children:[a.jsx("h3",{className:"font-display text-lg font-semibold mb-2 text-neutral-900",children:"Fairy Corner"}),a.jsx("p",{className:"text-sm text-neutral-600",children:"Browse classics, daily stories, and nursery rhymes. 2 always free."})]})]})})]}),a.jsxs("p",{className:"text-center text-sm text-neutral-500 mt-2 md:hidden flex items-center justify-center gap-1",children:[a.jsx(qt,{className:"w-4 h-4"})," Swipe to explore ",a.jsx(Ht,{className:"w-4 h-4"})]})]})]})}),a.jsx("section",{className:"py-12 md:py-16 bg-neutral-50",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsx("div",{className:"text-center mb-10",children:a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3",children:"Everything Included"})}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:n.map((r,i)=>a.jsxs(de,{className:"text-center p-6 hover:shadow-lg transition-shadow",children:[a.jsx("div",{className:"mb-3 flex justify-center",children:a.jsx(r.icon,{className:"w-10 h-10 text-soft-blue-600",strokeWidth:1.5})}),a.jsx("h3",{className:"font-display text-lg font-semibold mb-2 text-neutral-900",children:r.title}),a.jsx("p",{className:"text-sm text-neutral-600",children:r.description})]},i))})]})}),a.jsx("section",{className:"py-12 md:py-16 bg-white",children:a.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-10",children:[a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3",children:"Character Wizard"}),a.jsx("p",{className:"text-lg text-neutral-600",children:"Two ways to create characters"})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[a.jsxs(de,{className:"p-8 bg-gradient-to-br from-soft-blue-50 to-white",children:[a.jsx("div",{className:"text-4xl mb-4",children:"⚡"}),a.jsx("h3",{className:"font-display text-2xl font-semibold mb-3 text-neutral-900",children:"Quick Character"}),a.jsx("p",{className:"text-neutral-700 mb-4",children:"Describe in one sentence. Create instantly."}),a.jsx("p",{className:"text-sm text-neutral-600",children:"Perfect when you just want to start the story."})]}),a.jsxs(de,{className:"p-8 bg-gradient-to-br from-soft-green-50 to-white",children:[a.jsx("div",{className:"text-4xl mb-4",children:"🎨"}),a.jsx("h3",{className:"font-display text-2xl font-semibold mb-3 text-neutral-900",children:"Full Wizard"}),a.jsx("p",{className:"text-neutral-700 mb-4",children:"Step-by-step builder. Add traits, abilities, generate custom images (~60 seconds)."}),a.jsx("p",{className:"text-sm text-neutral-600",children:"Choose from Fantasy, Adventure, Animal, or Modern character types."})]})]}),a.jsxs("div",{className:"mt-8 p-6 bg-gradient-to-r from-fairy-purple-50 to-soft-blue-50 rounded-xl border-l-4 border-fairy-purple-400",children:[a.jsx("p",{className:"font-semibold text-neutral-900 mb-2",children:"Coming Soon:"}),a.jsxs("div",{className:"grid md:grid-cols-3 gap-4 text-sm text-neutral-700",children:[a.jsx("div",{children:"📸 Create from photos or drawings"}),a.jsx("div",{children:"🎮 Choose-your-own-path stories"}),a.jsx("div",{children:"🎙️ Record your own narrations"})]})]})]})}),a.jsx("section",{className:"py-12 md:py-16 bg-neutral-50",children:a.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-10",children:[a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3",children:"Story Creation"}),a.jsx("p",{className:"text-lg text-neutral-600",children:"Choose your level of control"})]}),a.jsxs("div",{className:"space-y-6",children:[a.jsx(de,{className:"p-8",children:a.jsxs("div",{className:"flex items-start gap-6",children:[a.jsx("div",{className:"text-5xl flex-shrink-0",children:"⚡"}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-display text-2xl font-semibold mb-3 text-neutral-900",children:"Quick Story"}),a.jsx("p",{className:"text-lg text-neutral-700 mb-3",children:"Pick age group. Describe what you want in one sentence. Done."}),a.jsx("p",{className:"text-sm text-neutral-600",children:"Perfect for weeknight bedtimes when you just need a story fast."})]})]})}),a.jsx(de,{className:"p-8 bg-gradient-to-br from-white to-soft-blue-50",children:a.jsxs("div",{className:"flex items-start gap-6",children:[a.jsx("div",{className:"text-5xl flex-shrink-0",children:"🧙"}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-display text-2xl font-semibold mb-3 text-neutral-900",children:"Story Wizard"}),a.jsx("p",{className:"text-lg text-neutral-700 mb-4",children:"Full control when you have more time:"}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-x-6 gap-y-2 text-neutral-700",children:[a.jsx("div",{children:"• Select characters (one or many)"}),a.jsx("div",{children:"• Choose theme and setting"}),a.jsx("div",{children:"• Pick moral lesson"}),a.jsx("div",{children:"• Add optional plot hints"}),a.jsx("div",{children:"• Select age group and language"}),a.jsx("div",{children:"• Choose length and perspective"})]})]})]})}),a.jsx(de,{className:"p-8 bg-gradient-to-br from-soft-green-50 to-white border-2 border-soft-green-200",children:a.jsxs("div",{className:"flex items-start gap-6",children:[a.jsx("div",{className:"text-5xl flex-shrink-0",children:"📖"}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-display text-2xl font-semibold mb-3 text-neutral-900",children:"Continue Into Books"}),a.jsx("p",{className:"text-lg text-neutral-700 mb-4",children:"Stories don't end. Continue them night after night:"}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[a.jsxs("div",{className:"bg-white rounded-lg p-4",children:[a.jsx("p",{className:"font-semibold text-neutral-900 mb-1",children:"Quick Continue"}),a.jsx("p",{className:"text-sm text-neutral-600",children:"2 taps, instant next chapter"})]}),a.jsxs("div",{className:"bg-white rounded-lg p-4",children:[a.jsx("p",{className:"font-semibold text-neutral-900 mb-1",children:"Advanced Continue"}),a.jsx("p",{className:"text-sm text-neutral-600",children:"Add characters, change tone, guide plot"})]})]}),a.jsx("p",{className:"text-sm text-neutral-600 mt-4",children:'Stories auto-group into books of 5 chapters with "Play All" narration.'})]})]})})]})]})}),a.jsx("section",{className:"py-12 md:py-16 bg-amber-50",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold mb-4 text-neutral-900",children:"Ready to Start?"}),a.jsx("p",{className:"text-lg text-neutral-700 mb-8",children:"6 free Fairy Dust + 7 days of Fairy Corner. No credit card required."}),a.jsx(Ct,{variant:"gradient"})]})})]})},yg=()=>{const e=[{title:"No ads or trackers",description:"We make money from subscriptions, not advertising. No analytics that follow your child, no third-party tracking pixels."},{title:"No selling data to third parties",description:"Your family's data stays with us. We never sell, rent, or share personal information with advertisers or data brokers."},{title:"No storing unnecessary personal information",description:"We only keep what's needed to run the service: email, password (hashed), subscription status. No addresses, no phone numbers, no detailed profiles."},{title:"We never require photos of your child",description:"Characters are designed to be created from imagination, traits and parent-approved images. You control what goes in."}],t=[{title:"Age-based content filters",description:"Every story passes through filters that block violence, fear, explicit content, and substances, tailored to each age group (2-3, 4-6, 7-9, 10-12, 12+)."},{title:"Age-appropriate word counts and themes",description:"Toddlers get 400-word stories with comfort themes. Teens get 2000-word stories with complex morals. Vocabulary and concepts adapt automatically."},{title:"Rate limiting and abuse protection",description:"Per-user, per-IP, per-operation limits prevent abuse. You cannot accidentally rack up huge bills or flood the system."},{title:"Input length limits and file size restrictions",description:"Text inputs are capped. File uploads have a 16MB limit. These prevent malicious use and keep the service stable for everyone."},{title:"Secure passwords and browser protection",description:"Passwords are encrypted (never stored in plain text). Every page uses browser security features that block malicious scripts and force secure connections."},{title:"Soft deletion with recovery window",description:"When you delete your account, we keep it for 30 days in case you change your mind. After that, it's permanently removed."},{title:"No PII in logs",description:"Our error logging doesn't capture personally identifiable information, IP addresses, or sensitive request bodies."}],n=[{title:"Transparent Fairy Dust economy",description:"All costs are shown upfront. If generation fails, you get refunded automatically. No hidden fees, no surprise charges."},{title:"Full account deletion anytime",description:"Delete your account from the app. Stories, characters, songs: all gone (after the 30-day recovery window)."},{title:"Language, notification, and marketing preferences",description:"Turn off marketing emails, push notifications, or story update alerts from the Settings screen."},{title:"Export and download your stories and audio",description:"Download stories and audio files to keep offline. No lock-in."},{title:"No lock-in, no hidden fees",description:"Cancel your subscription anytime. Your existing Fairy Dust stays until you use it or it expires monthly."}];return a.jsxs("div",{className:"pt-16 bg-white",children:[a.jsx("section",{className:"bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-16 md:py-24",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[a.jsx("div",{className:"inline-block p-4 bg-white rounded-full shadow-lg mb-6",children:a.jsx("svg",{className:"w-16 h-16 text-soft-blue-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})})}),a.jsx("h1",{className:"font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6",children:"Safety isn't a feature. It's the foundation."}),a.jsx("p",{className:"text-xl md:text-2xl text-neutral-600",children:"You're trusting us with bedtime. Here's exactly what we do (and don't do) to earn that trust."})]})}),a.jsx("section",{className:"py-16 md:py-24 bg-white",children:a.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("div",{className:"mb-4 flex justify-center",children:a.jsx("svg",{className:"w-16 h-16 text-red-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})})}),a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4",children:"What We Never Do"}),a.jsx("p",{className:"text-lg text-neutral-600",children:"These aren't just policies. They're hard lines we won't cross."})]}),a.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:e.map((r,i)=>a.jsxs("div",{className:"bg-red-50 border-2 border-red-200 rounded-xl p-6",children:[a.jsxs("h3",{className:"font-semibold text-xl text-neutral-900 mb-2 flex items-center gap-2",children:[a.jsx("span",{className:"text-red-600",children:"✗"}),r.title]}),a.jsx("p",{className:"text-neutral-700 leading-relaxed",children:r.description})]},i))})]})}),a.jsx("section",{className:"py-16 md:py-24 bg-neutral-50",children:a.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("div",{className:"mb-4 flex justify-center",children:a.jsx("svg",{className:"w-16 h-16 text-soft-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4",children:"What We Actively Enforce"}),a.jsx("p",{className:"text-lg text-neutral-600",children:"Technical safeguards running 24/7 to keep FairyAI safe and stable."})]}),a.jsx("div",{className:"space-y-6",children:t.map((r,i)=>a.jsxs("div",{className:"bg-white border-2 border-soft-green-200 rounded-xl p-6",children:[a.jsxs("h3",{className:"font-semibold text-xl text-neutral-900 mb-2 flex items-center gap-2",children:[a.jsx("span",{className:"text-soft-green-600",children:"✓"}),r.title]}),a.jsx("p",{className:"text-neutral-700 leading-relaxed",children:r.description})]},i))})]})}),a.jsx("section",{className:"py-16 md:py-24 bg-white",children:a.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("div",{className:"mb-4 flex justify-center",children:a.jsx("svg",{className:"w-16 h-16 text-soft-blue-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"})})}),a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4",children:"Your Controls"}),a.jsx("p",{className:"text-lg text-neutral-600",children:"You're in charge. Here's what you can control from the app."})]}),a.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:n.map((r,i)=>a.jsxs("div",{className:"bg-soft-blue-50 border-2 border-soft-blue-200 rounded-xl p-6",children:[a.jsx("h3",{className:"font-semibold text-xl text-neutral-900 mb-2",children:r.title}),a.jsx("p",{className:"text-neutral-700 leading-relaxed",children:r.description})]},i))})]})}),a.jsx("section",{className:"py-16 md:py-24 bg-gradient-to-br from-soft-blue-50 to-soft-green-50",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-6 text-center",children:"Built on modern infrastructure"}),a.jsx("p",{className:"text-lg text-neutral-700 mb-8 text-center",children:"FairyAI runs on industry-leading AI models and secure cloud infrastructure. We use:"}),a.jsxs("div",{className:"grid md:grid-cols-3 gap-6 mb-8",children:[a.jsxs("div",{className:"bg-white rounded-lg p-6 text-center",children:[a.jsx("div",{className:"mb-3 flex justify-center",children:a.jsx("svg",{className:"w-10 h-10 text-soft-blue-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})})}),a.jsx("h3",{className:"font-semibold text-lg text-neutral-900 mb-2",children:"Secure hosting"}),a.jsx("p",{className:"text-sm text-neutral-700",children:"Enterprise-grade cloud with automatic backups and encryption"})]}),a.jsxs("div",{className:"bg-white rounded-lg p-6 text-center",children:[a.jsx("div",{className:"mb-3 flex justify-center",children:a.jsx("svg",{className:"w-10 h-10 text-soft-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})})}),a.jsx("h3",{className:"font-semibold text-lg text-neutral-900 mb-2",children:"Modern AI models"}),a.jsx("p",{className:"text-sm text-neutral-700",children:"Industry-leading systems for stories, images, narration, and music"})]}),a.jsxs("div",{className:"bg-white rounded-lg p-6 text-center",children:[a.jsx("div",{className:"mb-3 flex justify-center",children:a.jsx("svg",{className:"w-10 h-10 text-soft-blue-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),a.jsx("h3",{className:"font-semibold text-lg text-neutral-900 mb-2",children:"Reliable performance"}),a.jsx("p",{className:"text-sm text-neutral-700",children:"Async processing, circuit breakers, and automatic error recovery"})]})]})]})}),a.jsx("section",{className:"py-16 md:py-24 bg-white",children:a.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[a.jsx("p",{className:"text-2xl text-neutral-800 leading-relaxed mb-6 italic",children:`"We're parents building for parents. If we wouldn't use it with our kids, we don't ship it."`}),a.jsx("p",{className:"text-lg text-neutral-600",children:"Nathan, Dad & Founder"})]})}),a.jsx("section",{className:"py-16 md:py-24 bg-gradient-to-br from-soft-blue-50 to-soft-green-50",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4",children:"Safety You Can Trust, Stories They'll Love"}),a.jsx("p",{className:"text-lg text-neutral-600 mb-8 max-w-2xl mx-auto",children:"Download FairyAI and experience bedtime stories built with your family's safety at the core. Start free today."}),a.jsx(Ct,{})]})})]})},zc=({faqs:e,title:t="Frequently Asked Questions",subtitle:n="Everything you need to know about FairyAI"})=>{const[r,i]=x.useState(null),s=l=>{i(r===l?null:l)};return a.jsx("section",{className:"py-16 md:py-24 bg-white",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4",children:t}),a.jsx("p",{className:"text-lg text-neutral-600",children:n})]}),a.jsx("div",{className:"space-y-4",children:e.map((l,o)=>a.jsxs("div",{className:"border border-neutral-200 rounded-xl overflow-hidden",children:[a.jsxs("button",{onClick:()=>s(o),className:"w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors text-left",children:[a.jsx("span",{className:"font-semibold text-lg text-neutral-900 pr-8",children:l.question}),a.jsx("svg",{className:`w-6 h-6 text-neutral-600 flex-shrink-0 transition-transform duration-200 ${r===o?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),r===o&&a.jsx("div",{className:"px-6 py-5 bg-neutral-50 border-t border-neutral-200",children:a.jsx("p",{className:"text-neutral-700 leading-relaxed",children:l.hasLink?a.jsxs(a.Fragment,{children:[l.answer.split("See our")[0],"See our ",a.jsx(ee,{to:"/privacy",className:"text-soft-blue-600 hover:text-soft-blue-700 underline",children:"Privacy Policy"})," for full details."]}):l.hasEmail?a.jsxs(a.Fragment,{children:[l.answer.split("contact us at")[0],"contact us at ",a.jsx("a",{href:"mailto:support@fairyai.co.uk",className:"text-soft-blue-600 hover:text-soft-blue-700 underline",children:"support@fairyai.co.uk"}),l.answer.split("support@fairyai.co.uk")[1]]}):l.answer})})]},o))})]})})},Nc=[{question:"What if I don't like a generated story?",answer:"You'll need to generate a new story, which will cost Fairy Dust again. However, if generation fails due to a technical issue (timeout, API error, etc.), you'll receive an automatic refund. We recommend using the Story Wizard for more control over the output."},{question:"Can I edit stories after creation?",answer:"No, you can't edit stories directly. However, you can continue any story into a new chapter for just 1 Fairy Dust. Each continuation remembers the previous chapters and maintains continuity. Stories are automatically grouped into chapter books in your library."},{question:"Do my stories expire?",answer:"No! All your generated stories, characters, and songs are stored permanently. You can access them anytime from your library. Only your monthly Fairy Dust allocation expires at the end of each billing cycle, but purchased Dust top-ups never expire."},{question:"Can siblings share one account?",answer:"Not yet. FairyAI currently uses single-user accounts. Child profiles are planned for Q1 2026, which will allow multiple children per parent account with separate libraries and preferences. For now, each child needs their own account."},{question:"What happens if generation fails?",answer:"If a story, character, song, or narration fails to generate due to a technical error, you'll receive an automatic Fairy Dust refund within seconds. The system detects failures (timeouts, API errors, invalid outputs) and refunds you immediately. No support ticket needed."},{question:"Can I print or download stories?",answer:"Yes! You can download stories as PDFs and narrations as MP3 files for offline use. Perfect for printing bedtime stories, saving favourites, or listening during car rides without internet. All your content is yours to keep."},{question:"Is my child's data safe? How do you handle privacy?",answer:"Absolutely. FairyAI is COPPA-compliant and takes data privacy seriously. We never sell your data to third parties, never use your child's information for advertising, and all data is encrypted in transit and at rest. Stories are generated using age-appropriate AI models with strict content filters. You can delete your account and all associated data at any time with a simple request. See our Privacy Policy for full details.",hasLink:!0},{question:"How does FairyAI ensure content is age-appropriate?",answer:"Every story, character, and song is generated using age-specific AI models with built-in content filters. When you select your child's age (2-3, 4-6, 7-9, 10-12, or 12+), FairyAI automatically adjusts vocabulary, sentence complexity, and themes. All generated content is screened to prevent inappropriate topics, violence, or scary elements. Our Fairy Corner library is curated by our team to ensure every classic story is suitable for young children."},{question:"Can I cancel my subscription anytime?",answer:"Yes! You can cancel your subscription at any time from the app settings with no cancellation fees. Your subscription remains active until the end of your current billing period, and you keep access to all your generated stories, characters, and songs forever, even after cancelling. Any purchased Dust top-ups never expire and remain available to use anytime."},{question:"Can I use stories offline once they're generated?",answer:"Yes! Once you generate a story, it's saved to your library and available offline for reading. You can also download narrations as MP3 files to your device for offline listening during car rides, flights, or anywhere without internet. PDFs can be downloaded for printing physical copies."},{question:"How long does it take to generate a story, character, or song?",answer:"Stories generate in 30-60 seconds depending on length and complexity. Characters take about 60 seconds to generate with custom artwork. Songs (with lyrics and music) take approximately 2-3 minutes. Narrations add an extra 30-45 seconds. All generation times may vary slightly based on server load, but you'll see a progress indicator while content is being created."},{question:"What happens when I run out of Fairy Dust?",answer:"You can still access all your existing stories, characters, and songs in your library. You just won't be able to generate new content until your next monthly refill or until you purchase a Dust top-up (Sprinkle, Pouch, or Chest). The Fairy Corner library of 100+ classic stories remains fully accessible regardless of your Dust balance. Top-ups never expire, so you can stock up anytime."},{question:"How do persistent characters work?",answer:"When you create a character (2 Dust), it's saved to your character library with all traits, abilities, and artwork. You can then use this character in unlimited stories at no extra cost: just the normal 1 Dust story fee. The AI remembers the character's personality, appearance, and backstory across all stories, creating true continuity. Characters can appear together in the same story, and you can build a whole cast over time."},{question:"Can I get a refund if I'm not satisfied?",answer:"We offer a 7-day free trial (6 Fairy Dust + access to Fairy Corner) so you can try FairyAI risk-free before subscribing. If you're not satisfied with a paid subscription, contact us at support@fairyai.co.uk within 7 days of your first charge for a full refund. After that, subscription fees are non-refundable, but you can cancel anytime to prevent future charges.",hasEmail:!0}],vg=()=>{const e=[{icon:kc,title:"Persistent Characters",description:"Build once, use forever. Traits, abilities, and custom images that work across all stories.",link:"/how-it-works"},{icon:wc,title:"Stories & Chapters",description:"Quick Story or Story Wizard. Continue into multi-chapter books with 2-tap continuation.",link:"/how-it-works"},{icon:ks,title:"Fairy Corner",description:"Classic tales, daily AI stories, nursery rhymes. 2 always free for guests.",link:"/how-it-works"},{icon:bc,title:"Songs & Narration",description:"4 voices, 12 languages, bedtime pacing. Custom songs with lyrics from your stories.",link:"/how-it-works"},{icon:jc,title:"Built-In Safety",description:"Age-based filters, content screening, no PII logging. Safe for ages 2-12.",link:null},{icon:qf,title:"Multi-Language",description:"12 languages with native-quality narration. Stories, songs, and audio.",link:null}],t=[{number:"01",title:"Characters That Matter",text:"Not random AI slop. Persistent characters with real abilities and traits that shape every story."},{number:"02",title:"Stories That Continue",text:"Turn any story into multi-chapter books. Quick 2-tap continue or full control mode."},{number:"03",title:"Production Quality",text:"Native-quality narration in 12 languages. Custom songs with real melodies. Professional cover art."},{number:"04",title:"Built For Families",text:"Age-smart filters, transparent pricing, offline downloads. No ads, no social features, no surprises."}];return a.jsxs("div",{className:"pt-16 bg-white",children:[a.jsx("section",{className:"bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-12 md:py-16",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[a.jsx("h1",{className:"font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4",children:"Features & Pricing"}),a.jsx("p",{className:"text-xl text-neutral-600",children:"Everything you need for magical bedtimes, and nothing you don't."})]})}),a.jsx("section",{className:"py-12 md:py-16 bg-white",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsx("div",{className:"text-center mb-10",children:a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3",children:"Everything Included"})}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:e.map((n,r)=>a.jsxs(de,{className:"text-center p-8 hover:shadow-lg transition-shadow",children:[a.jsx("div",{className:"mb-4 flex justify-center",children:a.jsx(n.icon,{className:"w-12 h-12 text-soft-blue-600",strokeWidth:1.5})}),a.jsx("h3",{className:"font-display text-xl font-semibold mb-3 text-neutral-900",children:n.title}),a.jsx("p",{className:"text-neutral-700 mb-4",children:n.description}),n.link&&a.jsx(ee,{to:n.link,className:"text-soft-blue-600 hover:text-soft-blue-700 text-sm font-medium",children:"Learn more →"})]},r))})]})}),a.jsx("section",{className:"py-12 md:py-16 bg-neutral-50",children:a.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4",children:"Why FairyAI is Different"}),a.jsx("p",{className:"text-lg text-neutral-600",children:"Not just another AI story app"})]}),a.jsx("div",{className:"grid md:grid-cols-2 gap-8",children:t.map((n,r)=>a.jsx(de,{className:"p-8",children:a.jsxs("div",{className:"flex items-start gap-4",children:[a.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-fairy-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm",children:n.number}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-display text-xl font-semibold mb-2 text-neutral-900",children:n.title}),a.jsx("p",{className:"text-neutral-700",children:n.text})]})]})},r))})]})}),a.jsx("section",{className:"py-12 md:py-16 bg-white",children:a.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center mb-12",children:[a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-4",children:"Simple, Transparent Pricing"}),a.jsx("p",{className:"text-lg text-neutral-600",children:"Pay only for what you create. No lock-in, no hidden fees."})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[a.jsxs(de,{className:"p-8 bg-gradient-to-br from-white to-soft-blue-50 border-2 border-soft-blue-200",children:[a.jsx("div",{className:"mb-4",children:a.jsx(Uf,{className:"w-10 h-10 text-soft-blue-600",strokeWidth:1.5})}),a.jsx("h3",{className:"font-display text-2xl font-semibold mb-3 text-neutral-900",children:"Free Forever"}),a.jsx("p",{className:"text-neutral-700 mb-6",children:"Try FairyAI with no credit card required"}),a.jsxs("ul",{className:"space-y-3 text-neutral-700 mb-6",children:[a.jsxs("li",{className:"flex items-start gap-2",children:[a.jsx(Ze,{className:"w-5 h-5 text-soft-green-600 mt-0.5 flex-shrink-0",strokeWidth:2}),a.jsx("span",{children:"6 free Fairy Dust to start"})]}),a.jsxs("li",{className:"flex items-start gap-2",children:[a.jsx(Ze,{className:"w-5 h-5 text-soft-green-600 mt-0.5 flex-shrink-0",strokeWidth:2}),a.jsx("span",{children:"7-day Fairy Corner trial"})]}),a.jsxs("li",{className:"flex items-start gap-2",children:[a.jsx(Ze,{className:"w-5 h-5 text-soft-green-600 mt-0.5 flex-shrink-0",strokeWidth:2}),a.jsx("span",{children:"2 classic tales + 2 nursery rhymes (always free)"})]}),a.jsxs("li",{className:"flex items-start gap-2",children:[a.jsx(Ze,{className:"w-5 h-5 text-soft-green-600 mt-0.5 flex-shrink-0",strokeWidth:2}),a.jsx("span",{children:"Browse as guest (no signup needed)"})]})]})]}),a.jsxs(de,{className:"p-8 bg-amber-50 border-2 border-fairy-gold-500",children:[a.jsx("div",{className:"mb-4",children:a.jsx(rg,{className:"w-10 h-10 text-fairy-gold-500",strokeWidth:1.5,fill:"currentColor"})}),a.jsx("h3",{className:"font-display text-2xl font-semibold mb-3 text-neutral-900",children:"Premium Plans"}),a.jsx("p",{className:"text-neutral-600 mb-6",children:"Monthly Fairy Dust allocations"}),a.jsxs("ul",{className:"space-y-3 text-neutral-700 mb-6",children:[a.jsxs("li",{className:"flex items-start gap-2",children:[a.jsx(Ze,{className:"w-5 h-5 text-fairy-gold-500 mt-0.5 flex-shrink-0",strokeWidth:2}),a.jsx("span",{children:"Unlimited characters & stories"})]}),a.jsxs("li",{className:"flex items-start gap-2",children:[a.jsx(Ze,{className:"w-5 h-5 text-fairy-gold-500 mt-0.5 flex-shrink-0",strokeWidth:2}),a.jsx("span",{children:"Full Fairy Corner access"})]}),a.jsxs("li",{className:"flex items-start gap-2",children:[a.jsx(Ze,{className:"w-5 h-5 text-fairy-gold-500 mt-0.5 flex-shrink-0",strokeWidth:2}),a.jsx("span",{children:"Narration in 12 languages"})]}),a.jsxs("li",{className:"flex items-start gap-2",children:[a.jsx(Ze,{className:"w-5 h-5 text-fairy-gold-500 mt-0.5 flex-shrink-0",strokeWidth:2}),a.jsx("span",{children:"Custom songs with lyrics"})]}),a.jsxs("li",{className:"flex items-start gap-2",children:[a.jsx(Ze,{className:"w-5 h-5 text-fairy-gold-500 mt-0.5 flex-shrink-0",strokeWidth:2}),a.jsx("span",{children:"Offline PDF & MP3 downloads"})]})]}),a.jsx("p",{className:"text-sm text-neutral-600",children:"Flexible plans from £6.99/month. See app for details."})]})]}),a.jsx("div",{className:"mt-8 p-6 bg-neutral-50 rounded-xl text-center",children:a.jsxs("p",{className:"text-neutral-700",children:[a.jsx("strong",{children:"What's Fairy Dust?"})," Our creative currency. Use it to generate stories, characters, narration, songs, and images. No subscriptions required—top up only when you need it."]})})]})}),a.jsx("section",{className:"py-12 md:py-16 bg-neutral-50",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsx("div",{className:"text-center mb-10",children:a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3",children:"Frequently Asked Questions"})}),a.jsx(zc,{faqs:Nc})]})}),a.jsx("section",{className:"py-12 md:py-16 bg-amber-50",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold mb-4 text-neutral-900",children:"Start Your Free Trial"}),a.jsx("p",{className:"text-lg text-neutral-700 mb-8",children:"6 free Fairy Dust + 7 days of Fairy Corner access. No credit card required."}),a.jsx(Ct,{variant:"gradient"})]})})]})},Sc=({label:e,className:t="",aspectRatio:n="video"})=>{const r={square:"aspect-square",video:"aspect-video",portrait:"aspect-[3/4]",banner:"aspect-banner"};return a.jsxs("div",{className:`${r[n]} relative bg-gradient-to-br from-neutral-50 via-soft-blue-50 to-soft-green-50 rounded-lg overflow-hidden ${t}`,children:[a.jsx("div",{className:"absolute inset-0 opacity-30",style:{backgroundImage:"radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)",backgroundSize:"24px 24px"}}),a.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:a.jsxs("div",{className:"text-center",children:[a.jsx("svg",{className:"w-16 h-16 mx-auto mb-3 text-neutral-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})}),a.jsxs("span",{className:"text-neutral-400 font-medium text-sm px-4 block",children:[e," Placeholder"]})]})}),a.jsx("div",{className:"absolute inset-0 border-2 border-neutral-200 rounded-lg"})]})},Lc=[{id:"gingerbread-man",numericId:1,title:"The Gingerbread Man",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",characterImage:"/images/characters/character5.jpg",creationMethod:"fairy_corner_classic",description:"Classic fairy tale from Fairy Corner library. One of 100+ curated tales with professional narration, custom songs, and multiple languages.",tagline:"Click to explore this timeless tale in 12 languages",audioSrc:"/audio/stories/gingerbread-man-narration.mp3",songs:[],fullText:""},{id:"whispers-tidal-star",numericId:2,title:"Whispers of the Tidal Star",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/cover.jpg",characterImage:"/images/characters/character6.jpg",creationMethod:"fairy_corner_daily",description:"AI-generated story from Fairy Corner with original narration and songs. A magical tale about discovery and wonder, available in 12 languages with multiple narrators.",tagline:"Click to experience this AI-crafted adventure",audioSrc:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/en-GB/narrations/onyx.mp3",songs:[],fullText:""},{id:"robot-friendship",numericId:3,title:"A Robot Learns About Friendship",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/stories/067a4db2-9383-4d08-884e-d1dbad16483a/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_067a4db2-9383-4d08-884e-d1dbad16483a_cover.png",characterImage:"/images/characters/character7.jpg",creationMethod:"user_example",description:"See how a simple one-sentence prompt adapts across different age groups. From playful simplicity for toddlers to deeper themes for tweens.",tagline:"See how one simple prompt adapts for different age groups",audioSrc:"/audio/stories/placeholder.mp3",prompt:"A robot learns about friendship",fullText:""}],wg=()=>{x.useEffect(()=>{window.scrollTo(0,0)},[]);const e=t=>{switch(t){case"quick_story":return{text:"Quick Story",color:"bg-soft-blue-100 text-soft-blue-700"};case"story_wizard":return{text:"Story Wizard",color:"bg-soft-green-100 text-soft-green-700"};case"fairy_corner_daily":return{text:"Daily AI Story",color:"bg-gradient-to-r from-soft-blue-100 to-soft-green-100 text-neutral-800"};case"fairy_corner_classic":return{text:"Classic Tale",color:"bg-gradient-to-r from-soft-blue-100 to-soft-green-100 text-neutral-800"};case"user_example":return{text:"User Example",color:"bg-soft-green-100 text-soft-green-700"};default:return{text:t,color:"bg-neutral-100 text-neutral-700"}}};return a.jsxs("div",{className:"pt-16 bg-white min-h-screen",children:[a.jsx("section",{className:"bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-12 md:py-16",children:a.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[a.jsx("h1",{className:"font-display text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4",children:"Example Stories from FairyAI"}),a.jsx("p",{className:"text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto",children:"Explore different story creation methods. Click any story to see the full content, listen to narration, and enjoy the songs."})]})}),a.jsx("section",{className:"py-12 md:py-16",children:a.jsx("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",children:Lc.map(t=>{const n=e(t.creationMethod),r=t.creationMethod==="user_example"?`/stories/examples/${t.id}`:`/stories/${t.id}`;return a.jsxs(ee,{to:r,className:"group bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden hover:shadow-2xl hover:scale-[1.02] transition-all duration-300",children:[a.jsxs("div",{className:"relative aspect-square overflow-hidden",children:[t.imageUrl?a.jsx("img",{src:t.imageUrl,alt:t.title,loading:"lazy",className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"}):a.jsx(Sc,{label:`Character from ${t.title}`,aspectRatio:"square",className:"group-hover:scale-110 transition-transform duration-300"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"})]}),a.jsxs("div",{className:"p-5",children:[a.jsx("h2",{className:"font-display text-xl font-bold text-neutral-900 mb-2 group-hover:text-soft-blue-600 transition-colors",children:t.title}),a.jsxs("div",{className:"flex flex-wrap gap-2 mb-3",children:[t.ageRange&&a.jsx("span",{className:"inline-block text-xs font-semibold bg-white border border-neutral-300 px-2 py-1 rounded-full",children:t.ageRange}),a.jsx("span",{className:`inline-block text-xs font-semibold px-2 py-1 rounded-full ${n.color}`,children:n.text})]}),a.jsx("p",{className:"text-sm text-neutral-600 mb-3 line-clamp-4",children:t.description}),a.jsxs("div",{className:"flex items-center text-soft-blue-600 font-medium group-hover:text-soft-blue-700",children:[a.jsx("span",{children:t.tagline}),a.jsx("svg",{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})]})]},t.id)})})})}),a.jsx("section",{className:"py-16 md:py-24 bg-amber-50",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold mb-4 text-neutral-900",children:"Ready to Create Your Own Stories?"}),a.jsx("p",{className:"text-xl mb-6 text-neutral-700",children:"Download FairyAI and start creating personalised bedtime adventures for your family."}),a.jsx("p",{className:"text-lg mb-8 font-semibold text-neutral-800",children:"6 free Fairy Dust • 7-day Fairy Corner trial • No credit card required"}),a.jsx(Ct,{variant:"gradient"})]})})]})},Si=({songs:e,className:t=""})=>{var b;const[n,r]=x.useState(((b=e[0])==null?void 0:b.id)||""),[i,s]=x.useState(!1),[l,o]=x.useState(0),[u,d]=x.useState(0),[g,f]=x.useState(!1),m=x.useRef(null),w=e.find(z=>z.id===n)||e[0];x.useEffect(()=>{s(!1),o(0),m.current&&(m.current.pause(),m.current.currentTime=0)},[n]);const y=()=>{m.current&&(i?m.current.pause():m.current.play(),s(!i))},v=()=>{m.current&&o(m.current.currentTime)},k=()=>{m.current&&(d(m.current.duration),f(!1))},h=()=>{s(!1),o(0)},c=z=>{const N=parseFloat(z.target.value);m.current&&(m.current.currentTime=N,o(N))},p=z=>{const N=Math.floor(z/60),L=Math.floor(z%60);return`${N}:${L.toString().padStart(2,"0")}`};return a.jsxs("div",{className:`bg-gradient-to-r from-soft-blue-50 to-soft-green-50 rounded-lg p-4 shadow-md ${t}`,children:[a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"song-select",className:"block text-sm font-semibold text-neutral-700 mb-2",children:"Select Song:"}),a.jsx("select",{id:"song-select",value:n,onChange:z=>r(z.target.value),className:"w-full px-3 py-2 bg-white border border-neutral-300 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-soft-blue-500",children:e.map(z=>a.jsxs("option",{value:z.id,children:[z.title," (",z.style.replace(/_/g," "),")"]},z.id))})]}),a.jsx("audio",{ref:m,src:w.url,onTimeUpdate:v,onLoadedMetadata:k,onEnded:h,onLoadStart:()=>f(!0)}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("button",{onClick:y,disabled:g,className:"w-10 h-10 flex items-center justify-center rounded-full bg-fairy-gold-500 text-white hover:bg-fairy-gold-600 transition-all shadow-md disabled:opacity-50","aria-label":i?"Pause":"Play",children:g?a.jsxs("svg",{className:"animate-spin w-5 h-5",fill:"none",viewBox:"0 0 24 24",children:[a.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),a.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):i?a.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M6 4h4v16H6V4zm8 0h4v16h-4V4z"})}):a.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{d:"M8 5v14l11-7z"})})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("input",{type:"range",min:"0",max:u||0,value:l,onChange:c,className:"w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-soft-blue-500",style:{background:`linear-gradient(to right, #3B82F6 0%, #22C55E ${l/u*100}%, #E5E7EB ${l/u*100}%, #E5E7EB 100%)`}}),a.jsxs("div",{className:"flex justify-between text-xs text-neutral-600 mt-1",children:[a.jsx("span",{children:p(l)}),a.jsx("span",{children:p(u||w.duration)})]})]})]})]})},Cc=`In a cozy brick cottage at the edge of a bustling village, where **cinnamon** and **ginger** filled the morning air, an old woman tied on her apron with a cheerful hum.

"Today feels like a baking day," she said to her cat, who blinked lazily from the windowsill.

She stirred flour, butter, sugar, and **molasses** in her biggest wooden bowl. The dough was soft and sticky, warm with spice. Carefully, she rolled it out, cutting the perfect shape of a **gingerbread man**.

"Let's make you special," she said kindly, pressing **currants for eyes**, a **raisin for a smiling mouth**, and **three sugar pearls for buttons**. "There. Now into the oven you go."

She slid the tray in and shut the door. The heat shimmered and rose. The cat sniffed the air with interest.

But just as the timer ticked—

**POP!**

The oven door burst open, and out sprang the **Gingerbread Man**, golden-brown and grinning.

"Don't eat me!" he shouted, hopping to the floor. "**Run, run, as fast as you can! You can't catch me, I'm the Gingerbread Man!**"

And off he dashed—through the kitchen, past the startled cat, and out the door into the sunshine.

"Stop!" cried the old woman. "Come back!"

But the **Gingerbread Man** just laughed as his little cookie feet tapped along the garden path.
"**I ran from the woman, I'll run from you!
Run, run, as fast as you can!
You can't catch me, I'm the Gingerbread Man!**"

Soon he passed a **fat pink pig** in a muddy pen.

"Snort! You smell delicious!" oinked the pig, trotting after him.

But the Gingerbread Man just called,
"**I ran from the woman, I ran from her cat—
I'll run from a pig as quick as that!
Run, run, as fast as you can!
You can't catch me, I'm the Gingerbread Man!**"

He sprinted across the **village square**, past startled shopkeepers and baskets of apples, his little legs pumping fast.

Next came a **brown cow**, swaying her tail beside the fence.

"Moo! What a fine snack you'd make," she said, loping after him.

But he just shouted,
"**I ran from the woman, the cat, and the pig,
Running from you? That's not too big!
Run, run, as fast as you can!
You can't catch me, I'm the Gingerbread Man!**"

Dust rose behind him as the **pig and cow** joined the chase. Their hooves pounded the earth while children giggled and pointed.

Then a **tall horse** neighed from the meadow and gave chase.

"I'll catch you in no time!" he called, hooves thundering.

But the Gingerbread Man only sped up, darting through fields of golden wheat.

"**I ran from them all, you'll see I can—
You won't catch me, I'm the Gingerbread Man!**"

The animals huffed and puffed behind him. The old woman had given up, hands on her hips, muttering, "That'll teach me to bake something with legs."

The **Gingerbread Man** laughed as he raced through the woods, **leaves crunching beneath his feet**, birds scattering overhead.

But suddenly, he came to a **wide, rushing river**. The water swirled dark and fast, too deep to wade, too wide to leap.

"Oh crumbs," he said, pacing the riverbank.

Out stepped a sleek **fox**, his coat gleaming like polished copper.

"Why the long face, little cookie?" asked the fox, his voice smooth as melted butter.

"I need to cross this river," said the Gingerbread Man, glancing nervously at the current. "But I can't swim."

The fox's eyes twinkled. "Well, I can. Hop on my **tail**, and I'll carry you across."

Hesitating only a moment, the Gingerbread Man climbed aboard.

The fox stepped into the chilly water. **Ripples shimmered** as he paddled gently forward.

"Too splashy at the back," said the fox. "Hop up onto my **back**."

The Gingerbread Man climbed higher.

Soon the water lapped at the fox's neck. "Better get on my **head**," he said with a flick of his ears.

The Gingerbread Man obeyed.

But the water rose again.

"You'll get wet—best climb on my **nose**," whispered the fox.

As soon as the Gingerbread Man stepped onto the tip of the fox's nose—

**SNAP!**

With one quick toss of his head, the fox flipped the **Gingerbread Man** into the air and **gulped him down in a single bite**.

The river flowed on. Birds chirped. And the fox licked his lips.

"**Delicious.**"

Moments later, the **pig, cow, and horse** arrived, panting.

"Where is he?" gasped the pig.

The fox gave a small burp. "He got a little soggy," he said with a wink.

Back in the village, the old woman pulled another tray from the oven. She glanced at her cat and said, "This time, no legs."

**The End**`,bg={title:"The Gingerbread Man",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",content:Cc,narrators:[{id:"echo",name:"Echo",duration:304,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/en/echo.mp3"},{id:"nova",name:"Nova",duration:307,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/en/nova.mp3"},{id:"onyx",name:"Onyx",duration:295,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/en/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:307,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/en/shimmer.mp3"}],songs:[{id:"rap",title:"Run, Run, Run!",style:"rap",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/rap.mp3",duration:240},{id:"singalong",title:"Run, Run, As Fast As You Can",style:"singalong",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/singalong.mp3",duration:194.08},{id:"storytelling",title:"Run Run Gingerbread Man",style:"storytelling",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/storytelling.mp3",duration:228.52},{id:"epic_adventure",title:"Run Run Run",style:"epic_adventure",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/epic_adventure.mp3",duration:185.44},{id:"magical_pop_rock",title:"Run, Run, Run",style:"magical_pop_rock",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/magical_pop_rock.mp3",duration:210.28},{id:"enchanted_synth_pop",title:"Run Run Gingerbread Man",style:"enchanted_synth_pop",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/enchanted_synth_pop.mp3",duration:188.6},{id:"villain_perspective",title:"Run Faster",style:"villain_perspective",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/villain_perspective.mp3",duration:184.96}]},kg={title:"The Gingerbread Man",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",content:Cc,narrators:[{id:"echo",name:"Echo",duration:304,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/en/echo.mp3"},{id:"nova",name:"Nova",duration:307,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/en/nova.mp3"},{id:"onyx",name:"Onyx",duration:295,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/en/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:307,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/en/shimmer.mp3"}],songs:[{id:"rap",title:"Run, Run, Run!",style:"rap",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/rap.mp3",duration:240},{id:"singalong",title:"Run, Run, As Fast As You Can",style:"singalong",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/singalong.mp3",duration:194.08},{id:"storytelling",title:"Run Run Gingerbread Man",style:"storytelling",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/storytelling.mp3",duration:228.52},{id:"epic_adventure",title:"Run Run Run",style:"epic_adventure",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/epic_adventure.mp3",duration:185.44},{id:"magical_pop_rock",title:"Run, Run, Run",style:"magical_pop_rock",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/magical_pop_rock.mp3",duration:210.28},{id:"enchanted_synth_pop",title:"Run Run Gingerbread Man",style:"enchanted_synth_pop",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/enchanted_synth_pop.mp3",duration:188.6},{id:"villain_perspective",title:"Run Faster",style:"villain_perspective",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/the_gingerbread_man/villain_perspective.mp3",duration:184.96}]},jg=`Dans un petit cottage en briques, au bord d'un village animé, où la cannelle et le gingembre parfumaient l'air du matin, une vieille dame noua son tablier en fredonnant joyeusement.

"Aujourd'hui, c'est un jour pour faire de la pâtisserie," dit-elle à son chat, qui cligna lentement des yeux sur le rebord de la fenêtre.

Elle mélangea de la farine, du beurre, du sucre et de la mélasse dans son plus grand saladier en bois. La pâte était douce et collante, chaude d'épices. Avec soin, elle l'étala et découpa la forme parfaite d'un petit bonhomme en pain d'épices.

"On va te rendre spécial," dit-elle gentiment, en pressant des groseilles pour les yeux, un raisin pour un sourire, et trois perles de sucre pour les boutons. "Voilà. Maintenant, au four !"

Elle glissa la plaque et ferma la porte. La chaleur montait et dansait. Le chat renifla l'air avec intérêt.

Mais juste quand le minuteur sonna—

POP !

La porte du four s'ouvrit d'un coup, et le Petit Bonhomme en Pain d'Épices bondit dehors, doré et souriant.

"Ne me mangez pas !" cria-t-il, sautant sur le sol. "Cours, cours, aussi vite que tu peux ! Tu ne m'attraperas pas, je suis le Petit Bonhomme en Pain d'Épices !"

Et le voilà parti—à travers la cuisine, devant le chat étonné, et dehors, sous le soleil.

"Arrête !" cria la vieille dame. "Reviens !"

Mais le Petit Bonhomme en Pain d'Épices riait, ses petits pieds de biscuit tapant sur le chemin du jardin.
"J'ai échappé à la dame, je t'échapperai aussi !
Cours, cours, aussi vite que tu peux !
Tu ne m'attraperas pas, je suis le Petit Bonhomme en Pain d'Épices !"

Bientôt, il passa devant un gros cochon rose dans une mare de boue.

"Groin ! Tu sens drôlement bon !" grogna le cochon, trottinant derrière lui.

Mais le Petit Bonhomme en Pain d'Épices lança :
"J'ai échappé à la dame, j'ai échappé à son chat—
Je vais échapper à un cochon tout aussi vite !
Cours, cours, aussi vite que tu peux !
Tu ne m'attraperas pas, je suis le Petit Bonhomme en Pain d'Épices !"

Il traversa la place du village, devant les commerçants surpris et des paniers de pommes, ses petites jambes allant très vite.

Puis une vache brune, balançant sa queue près de la clôture, s'approcha.

"Meuh ! Quel bon goûter tu ferais," dit-elle, s'élançant à sa poursuite.

Mais il cria simplement :
"J'ai échappé à la dame, au chat et au cochon,
Te fuir, ce n'est pas trop long !
Cours, cours, aussi vite que tu peux !
Tu ne m'attraperas pas, je suis le Petit Bonhomme en Pain d'Épices !"

La poussière s'éleva derrière lui alors que le cochon et la vache rejoignaient la course. Leurs sabots frappaient la terre, tandis que les enfants riaient et montraient du doigt.

Puis un grand cheval hennit depuis le pré et se lança à la poursuite.

"Je vais t'attraper en un rien de temps !" cria-t-il, ses sabots tonnant.

Mais le Petit Bonhomme en Pain d'Épices accéléra encore, filant à travers les champs de blé doré.

"J'ai échappé à tous, tu verras bien—
Tu ne m'attraperas pas, je suis le Petit Bonhomme en Pain d'Épices !"

Les animaux soufflaient et haletaient derrière lui. La vieille dame avait abandonné, les mains sur les hanches, marmonnant : "Ça m'apprendra à faire cuire quelque chose avec des jambes."

Le Petit Bonhomme en Pain d'Épices riait en courant dans la forêt, les feuilles craquant sous ses pieds, les oiseaux s'envolant au-dessus de lui.

Mais soudain, il arriva devant une large rivière rapide. L'eau tourbillonnait, sombre et rapide, trop profonde pour marcher, trop large pour sauter.

"Oh, miettes," dit-il, marchant le long de la berge.

Un renard lisse sortit de derrière un buisson, son pelage brillant comme du cuivre poli.

"Pourquoi cette mine triste, petit biscuit ?" demanda le renard, sa voix douce comme du beurre fondu.

"Je dois traverser cette rivière," dit le Petit Bonhomme en Pain d'Épices, regardant le courant avec inquiétude. "Mais je ne sais pas nager."

Les yeux du renard pétillèrent. "Moi, je peux. Grimpe sur ma queue, et je te porterai de l'autre côté."

Hésitant juste un instant, le Petit Bonhomme en Pain d'Épices monta.

Le renard entra dans l'eau froide. Des vaguelettes brillaient alors qu'il nageait doucement.

"Trop d'éclaboussures derrière," dit le renard. "Monte sur mon dos."

Le Petit Bonhomme en Pain d'Épices grimpa plus haut.

Bientôt, l'eau arriva au cou du renard. "Mieux vaut monter sur ma tête," dit-il en bougeant les oreilles.

Le Petit Bonhomme en Pain d'Épices obéit.

Mais l'eau monta encore.

"Tu vas être mouillé—grimpe sur mon nez," chuchota le renard.

Dès que le Petit Bonhomme en Pain d'Épices posa le pied sur le bout du nez du renard—

SNAP !

D'un coup de tête, le renard lança le Petit Bonhomme en Pain d'Épices en l'air et l'avala d'une seule bouchée.

La rivière continuait de couler. Les oiseaux chantaient. Et le renard se lécha les babines.

"Délicieux."

Quelques instants plus tard, le cochon, la vache et le cheval arrivèrent, tout essoufflés.

"Où est-il ?" souffla le cochon.

Le renard fit un petit rot. "Il est devenu un peu mouillé," dit-il en faisant un clin d'œil.

De retour au village, la vieille dame sortit une autre plaque du four. Elle regarda son chat et dit : "Cette fois, pas de jambes."

La Fin`,zg={title:"Le Petit Bonhomme en Pain d'Épices",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",content:jg,narrators:[{id:"onyx",name:"Onyx",duration:314,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/fr/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:334,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/fr/shimmer.mp3"}],songs:[{id:"epic_adventure",title:"L'Évasion du Bonhomme en Pain d'Épices",style:"epic_adventure",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/le_petit_bonhomme_en_pain_d'épices/fr/epic_adventure.mp3",duration:177.36},{id:"singalong",title:"Le Petit Bonhomme en Pain d'Épices",style:"singalong",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/le_petit_bonhomme_en_pain_d'épices/fr/singalong.mp3",duration:154.92},{id:"storytelling",title:"Le Petit Bonhomme",style:"storytelling",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/le_petit_bonhomme_en_pain_d'épices/fr/storytelling.mp3",duration:104.96}]},Ng=`En una acogedora casita de ladrillo al borde de un pueblo bullicioso, donde la canela y el jengibre llenaban el aire de la mañana, una anciana se ató el delantal tarareando alegremente.

"Hoy es un buen día para hornear", le dijo a su gato, que parpadeaba perezoso en la ventana.

Mezcló harina, mantequilla, azúcar y melaza en su tazón de madera más grande. La masa era suave y pegajosa, calentita con especias. Con cuidado, la extendió y cortó la forma perfecta de un hombre de jengibre.

"Vamos a hacerte especial", dijo amablemente, poniendo grosellas para los ojos, una pasa para la boca sonriente y tres perlas de azúcar para los botones. "Listo. Ahora al horno vas."

Deslizó la bandeja y cerró la puerta. El calor subió y brilló. El gato olfateó el aire con interés.

Pero justo cuando el reloj hizo tic—

¡POP!

La puerta del horno se abrió de golpe y saltó el Hombre de Jengibre, dorado y sonriente.

"¡No me comas!" gritó, saltando al suelo. "¡Corre, corre, tan rápido como puedas! ¡No me atrapas, soy el Hombre de Jengibre!"

Y salió corriendo—por la cocina, pasando al gato sorprendido, y por la puerta hacia el sol.

"¡Detente!" gritó la anciana. "¡Vuelve aquí!"

Pero el Hombre de Jengibre solo se rió mientras sus pequeños pies de galleta sonaban en el sendero del jardín.
"¡Corrí de la señora, de ti también correré!
¡Corre, corre, tan rápido como puedas!
¡No me atrapas, soy el Hombre de Jengibre!"

Pronto pasó junto a un cerdo rosado y gordo en un corral de barro.

"¡Oinc! ¡Qué rico hueles!" gruñó el cerdo, trotando tras él.

Pero el Hombre de Jengibre solo dijo:
"¡Corrí de la señora, corrí de su gato—
De un cerdo también me escaparé!
¡Corre, corre, tan rápido como puedas!
¡No me atrapas, soy el Hombre de Jengibre!"

Corrió por la plaza del pueblo, pasando tenderos sorprendidos y cestas de manzanas, moviendo rápido sus pequeñas piernas.

Luego vino una vaca marrón, moviendo la cola junto a la cerca.

"¡Muu! Serías un buen bocadillo", dijo, siguiéndolo.

Pero él solo gritó:
"¡Corrí de la señora, del gato y del cerdo,
Correr de ti no es gran enredo!
¡Corre, corre, tan rápido como puedas!
¡No me atrapas, soy el Hombre de Jengibre!"

El polvo se levantaba detrás de él mientras el cerdo y la vaca se unían a la persecución. Sus pezuñas golpeaban la tierra mientras los niños reían y señalaban.

Entonces un caballo alto relinchó desde el prado y se unió a la carrera.

"¡Te atraparé en un instante!" llamó, galopando fuerte.

Pero el Hombre de Jengibre solo corrió más rápido, cruzando campos de trigo dorado.

"¡Corrí de todos ellos, verás que puedo—
No me atrapas, soy el Hombre de Jengibre!"

Los animales resoplaban y jadeaban detrás de él. La anciana se rindió, con las manos en la cintura, murmurando: "Eso me pasa por hornear algo con piernas".

El Hombre de Jengibre se reía mientras corría por el bosque, hojas crujiendo bajo sus pies, pájaros volando por encima.

Pero de repente, llegó a un río ancho y rápido. El agua giraba oscura y veloz, demasiado profunda para cruzar caminando, demasiado ancha para saltar.

"Oh, migas", dijo, caminando de un lado a otro en la orilla.

Salió un zorro elegante, su pelaje brillando como cobre pulido.

"¿Por qué esa carita, pequeña galleta?" preguntó el zorro, con voz suave como mantequilla derretida.

"Necesito cruzar este río", dijo el Hombre de Jengibre, mirando nervioso la corriente. "Pero no sé nadar".

Los ojos del zorro brillaron. "Bueno, yo sí. Súbete a mi cola y te llevo al otro lado".

Dudando solo un momento, el Hombre de Jengibre subió.

El zorro entró al agua fría. Las ondas brillaban mientras nadaba suavemente.

"Demasiado salpicón atrás", dijo el zorro. "Súbete a mi espalda".

El Hombre de Jengibre subió más alto.

Pronto el agua llegó al cuello del zorro. "Mejor súbete a mi cabeza", dijo moviendo las orejas.

El Hombre de Jengibre obedeció.

Pero el agua subió otra vez.

"Te mojarás—mejor sube a mi nariz", susurró el zorro.

En cuanto el Hombre de Jengibre pisó la punta de la nariz del zorro—

¡CRAC!

Con un rápido movimiento de cabeza, el zorro lanzó al Hombre de Jengibre al aire y se lo tragó de un solo bocado.

El río siguió fluyendo. Los pájaros cantaron. Y el zorro se relamió los labios.

"Delicioso."

Momentos después, llegaron el cerdo, la vaca y el caballo, jadeando.

"¿Dónde está?" preguntó el cerdo, sin aliento.

El zorro dio un pequeño eructo. "Se puso un poco blandito", dijo guiñando un ojo.

De vuelta en el pueblo, la anciana sacó otra bandeja del horno. Miró a su gato y dijo: "Esta vez, sin piernas".

Fin`,Sg={title:"El Hombre de Jengibre",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",content:Ng,narrators:[{id:"onyx",name:"Onyx",duration:324,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/es/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:331,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/es/shimmer.mp3"}],songs:[{id:"epic_adventure",title:"El Hombre de Jengibre",style:"epic_adventure",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/el_hombre_de_jengibre/es/epic_adventure.mp3",duration:197},{id:"singalong",title:"El Hombre de Jengibre",style:"singalong",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/el_hombre_de_jengibre/es/singalong.mp3",duration:142},{id:"storytelling",title:"El Hombre de Jengibre",style:"storytelling",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/el_hombre_de_jengibre/es/storytelling.mp3",duration:157.28}]},Lg=`In einem gemütlichen Backsteinhäuschen am Rand eines lebhaften Dorfes, wo Zimt und Ingwer die Morgenluft erfüllten, band sich eine alte Frau fröhlich summend ihre Schürze um.

"Heute ist ein Backtag", sagte sie zu ihrer Katze, die träge auf der Fensterbank blinzelte.

Sie rührte Mehl, Butter, Zucker und Melasse in ihrer größten Holzschüssel. Der Teig war weich und klebrig, warm von den Gewürzen. Sorgfältig rollte sie ihn aus und schnitt die perfekte Form eines Lebkuchenmanns aus.

"Dich mache ich ganz besonders", sagte sie freundlich und drückte Johannisbeeren als Augen, eine Rosine als lachenden Mund und drei Zuckerperlen als Knöpfe hinein. "So. Jetzt ab in den Ofen mit dir."

Sie schob das Blech hinein und schloss die Tür. Die Hitze flimmerte und stieg auf. Die Katze schnupperte neugierig in die Luft.

Doch gerade als der Wecker tickte—

POP!

Die Ofentür sprang auf, und heraus hüpfte der Lebkuchenmann, goldbraun und grinsend.

"Iss mich nicht!" rief er und sprang auf den Boden. "Lauf, lauf, so schnell du kannst! Du fängst mich nicht, ich bin der Lebkuchenmann!"

Und schon rannte er los—durch die Küche, an der erschrockenen Katze vorbei und hinaus in den Sonnenschein.

"Stopp!" rief die alte Frau. "Komm zurück!"

Aber der Lebkuchenmann lachte nur, während seine kleinen Keksfüße über den Gartenweg tappten.
"Ich lief vor der Frau weg, ich lauf auch vor dir!
Lauf, lauf, so schnell du kannst!
Du fängst mich nicht, ich bin der Lebkuchenmann!"

Bald kam er an einem dicken rosa Schwein im matschigen Gehege vorbei.

"Grunz! Du riechst lecker!" quiekte das Schwein und trabte hinter ihm her.

Aber der Lebkuchenmann rief nur:
"Ich lief vor der Frau weg, ich lief vor ihrer Katze—
Vor einem Schwein lauf ich auch ratzfatz!
Lauf, lauf, so schnell du kannst!
Du fängst mich nicht, ich bin der Lebkuchenmann!"

Er rannte über den Dorfplatz, an erschrockenen Ladenbesitzern und Körben voller Äpfel vorbei, seine kleinen Beine liefen ganz schnell.

Als Nächstes kam eine braune Kuh, die neben dem Zaun mit dem Schwanz wedelte.

"Muh! Was für ein feiner Snack du wärst", sagte sie und lief hinterher.

Aber er rief nur:
"Ich lief vor der Frau weg, der Katze und dem Schwein,
Vor dir wegzulaufen, das krieg ich schon hin!
Lauf, lauf, so schnell du kannst!
Du fängst mich nicht, ich bin der Lebkuchenmann!"

Hinter ihm wirbelte Staub auf, als Schwein und Kuh sich der Jagd anschlossen. Ihre Hufe trommelten auf die Erde, während Kinder kicherten und zeigten.

Dann wieherte ein großes Pferd von der Wiese und galoppierte los.

"Ich fang dich im Nu!" rief es, die Hufe donnerten.

Aber der Lebkuchenmann lief nur noch schneller und sauste durch Felder aus goldenem Weizen.

"Ich lief vor ihnen allen weg, du wirst schon seh'n—
Du fängst mich nicht, ich bin der Lebkuchenmann!"

Die Tiere schnauften und keuchten hinter ihm. Die alte Frau hatte aufgegeben, die Hände in die Hüften gestemmt, und murmelte: "Das lehrt mich, nichts mit Beinen zu backen."

Der Lebkuchenmann lachte, als er durch den Wald rannte, Blätter knackten unter seinen Füßen, Vögel flatterten davon.

Doch plötzlich stand er vor einem breiten, rauschenden Fluss. Das Wasser wirbelte dunkel und schnell, zu tief zum Waten, zu breit zum Springen.

"Oh je", sagte er und lief am Ufer auf und ab.

Da trat ein schlauer Fuchs hervor, sein Fell glänzte wie poliertes Kupfer.

"Warum so ein langes Gesicht, kleiner Keks?" fragte der Fuchs, seine Stimme war weich wie geschmolzene Butter.

"Ich muss über den Fluss", sagte der Lebkuchenmann und schaute nervös auf die Strömung. "Aber ich kann nicht schwimmen."

Die Augen des Fuchses funkelten. "Ich kann schwimmen. Spring auf meinen Schwanz, ich bring dich hinüber."

Nur einen Moment zögernd, kletterte der Lebkuchenmann auf.

Der Fuchs stieg ins kalte Wasser. Wellen glitzerten, als er vorsichtig losschwamm.

"Hinten ist es zu spritzig", sagte der Fuchs. "Kletter auf meinen Rücken."

Der Lebkuchenmann kletterte höher.

Bald reichte das Wasser bis an den Hals des Fuchses. "Am besten auf meinen Kopf", sagte er und zuckte mit den Ohren.

Der Lebkuchenmann gehorchte.

Doch das Wasser stieg weiter.

"Du wirst nass—kletter lieber auf meine Nase", flüsterte der Fuchs.

Kaum war der Lebkuchenmann auf die Nasenspitze getreten—

Schnapp!

Mit einem schnellen Kopfschlenker warf der Fuchs den Lebkuchenmann in die Luft und schluckte ihn mit einem Bissen hinunter.

Der Fluss floss weiter. Vögel zwitscherten. Und der Fuchs leckte sich die Lippen.

"Köstlich."

Kurz darauf kamen Schwein, Kuh und Pferd keuchend an.

"Wo ist er?" schnaufte das Schwein.

Der Fuchs rülpste leise. "Er ist ein bisschen matschig geworden", sagte er mit einem Augenzwinkern.

Zurück im Dorf zog die alte Frau ein neues Blech aus dem Ofen. Sie sah ihre Katze an und sagte: "Diesmal keine Beine."

Das Ende`,Cg={title:"Der Lebkuchenmann",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",content:Lg,narrators:[{id:"onyx",name:"Onyx",duration:299,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/de/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:323,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/de/shimmer.mp3"}],songs:[{id:"epic_adventure",title:"Lebkuchenlauf",style:"epic_adventure",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/der_lebkuchenmann/de/epic_adventure.mp3",duration:227.08},{id:"singalong",title:"Der Lebkuchenmann",style:"singalong",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/der_lebkuchenmann/de/singalong.mp3",duration:240}]},Eg=`In una casetta di mattoni accogliente, ai margini di un villaggio vivace, dove la **cannella** e lo **zenzero** profumavano l'aria del mattino, una vecchietta si legò il grembiule canticchiando felice.

"Oggi è proprio una giornata da dolci," disse al suo gatto, che sbadigliava pigramente sul davanzale.

Mescolò farina, burro, zucchero e **melassa** nella sua ciotola di legno più grande. L'impasto era morbido e appiccicoso, caldo di spezie. Con cura, lo stese e tagliò la forma perfetta di un **omino di pan di zenzero**.

"Facciamo che tu sia speciale," disse gentile, mettendo **uvette per gli occhi**, una **uva passa per la bocca sorridente** e **tre perle di zucchero per i bottoni**. "Ecco. Ora dentro il forno."

Fece scivolare la teglia e chiuse lo sportello. Il calore tremolava e si alzava. Il gatto annusava l'aria curioso.

Ma proprio quando il timer suonò—

**POP!**

Lo sportello del forno si spalancò e saltò fuori l'**Omino di Pan di Zenzero**, dorato e sorridente.

"Non mangiarmi!" gridò, saltando sul pavimento. "**Corri, corri, più veloce che puoi! Non mi prenderai mai, sono l'Omino di Pan di Zenzero!**"

E via che scappò—attraverso la cucina, oltre il gatto sorpreso, e fuori dalla porta sotto il sole.

"Fermati!" gridò la vecchietta. "Torna qui!"

Ma l'**Omino di Pan di Zenzero** rise mentre i suoi piedini di biscotto ticchettavano sul sentiero del giardino.
"**Sono scappato dalla signora, scapperò anche da te!
Corri, corri, più veloce che puoi!
Non mi prenderai mai, sono l'Omino di Pan di Zenzero!**"

Presto passò davanti a un **maialino rosa e grasso** nel suo recinto fangoso.

"Snort! Che profumino!" grugnì il maiale, correndogli dietro.

Ma l'Omino di Pan di Zenzero disse solo:
"**Sono scappato dalla signora, sono scappato dal suo gatto—
Scapperò da un maiale in un baleno!
Corri, corri, più veloce che puoi!
Non mi prenderai mai, sono l'Omino di Pan di Zenzero!**"

Corse attraverso la **piazza del villaggio**, tra negozianti stupiti e cesti di mele, con le sue gambette che si muovevano veloci.

Poi arrivò una **mucca marrone**, che agitava la coda vicino al recinto.

"Muu! Che spuntino saresti," disse, inseguendolo.

Ma lui gridò:
"**Sono scappato dalla signora, dal gatto e dal maiale,
Scappare da te? Non è niente di speciale!
Corri, corri, più veloce che puoi!
Non mi prenderai mai, sono l'Omino di Pan di Zenzero!**"

La polvere si alzava dietro di lui mentre **maiale e mucca** si univano all'inseguimento. I loro zoccoli battevano la terra e i bambini ridevano e indicavano.

Poi un **cavallo alto** nitrì dal prato e si mise a correre.

"Ti prenderò in un attimo!" gridò, galoppando forte.

Ma l'Omino di Pan di Zenzero corse ancora più veloce, zigzagando tra i campi di grano dorato.

"**Sono scappato da tutti, vedrai che posso—
Non mi prenderai, sono l'Omino di Pan di Zenzero!**"

Gli animali ansimavano dietro di lui. La vecchietta si era arresa, con le mani sui fianchi, borbottando: "Questo mi insegnerà a fare dolci con le gambe."

L'**Omino di Pan di Zenzero** rideva mentre correva nel bosco, **le foglie scricchiolavano sotto i suoi piedi**, gli uccellini volavano via spaventati.

Ma all'improvviso arrivò a un **fiume largo e impetuoso**. L'acqua girava scura e veloce, troppo profonda per passare a piedi, troppo larga per saltare.

"Oh briciole," disse, camminando avanti e indietro sulla riva.

Apparve una **volpe** lucida, con il pelo che brillava come rame lucido.

"Perché quella faccia triste, biscottino?" chiese la volpe, con voce morbida come burro fuso.

"Devo attraversare il fiume," disse l'Omino di Pan di Zenzero, guardando l'acqua con paura. "Ma non so nuotare."

Gli occhi della volpe brillarono. "Io posso. Sali sulla mia **coda**, ti porto io dall'altra parte."

L'Omino di Pan di Zenzero esitò solo un attimo, poi salì.

La volpe entrò nell'acqua fredda. **Le onde brillavano** mentre nuotava piano piano.

"Troppa acqua qui dietro," disse la volpe. "Sali sulla mia **schiena**."

L'Omino di Pan di Zenzero salì più in alto.

Presto l'acqua arrivò al collo della volpe. "Meglio che sali sulla mia **testa**," disse, muovendo le orecchie.

L'Omino di Pan di Zenzero obbedì.

Ma l'acqua salì ancora.

"Ti bagnerai—meglio salire sul mio **naso**," sussurrò la volpe.

Appena l'Omino di Pan di Zenzero mise piede sulla punta del naso della volpe—

**SNAP!**

Con un colpo veloce della testa, la volpe lanciò l'**Omino di Pan di Zenzero** in aria e **lo inghiottì in un solo boccone**.

Il fiume continuò a scorrere. Gli uccellini cinguettavano. E la volpe si leccò i baffi.

"**Delizioso.**"

Pochi istanti dopo, arrivarono **maiale, mucca e cavallo**, ansimando.

"Dov'è finito?" grugnì il maiale.

La volpe fece un piccolo ruttino. "Si è un po' inzuppato," disse con un occhiolino.

Nel villaggio, la vecchietta tirò fuori un'altra teglia dal forno. Guardò il suo gatto e disse: "Questa volta, niente gambe."

**Fine**`,Pg={title:"L'Omino di Pan di Zenzero",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",content:Eg,narrators:[{id:"onyx",name:"Onyx",duration:324,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/it/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:320,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/it/shimmer.mp3"}],songs:[{id:"epic_adventure",title:"L'Omino Coraggioso",style:"epic_adventure",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/l'omino_di_pan_di_zenzero/it/epic_adventure.mp3",duration:203.68},{id:"singalong",title:"L'Omino di Pan di Zenzero",style:"singalong",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/l'omino_di_pan_di_zenzero/it/singalong.mp3",duration:199.4},{id:"storytelling",title:"Il Biscottino Coraggioso",style:"storytelling",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/l'omino_di_pan_di_zenzero/it/storytelling.mp3",duration:166.6}]},_g=`Em uma casinha de tijolos aconchegante, na beira de uma vila animada, onde canela e gengibre perfumavam o ar da manhã, uma velhinha amarrou seu avental com um assobio alegre.

"Hoje é um bom dia para assar," disse ela ao seu gato, que piscou preguiçoso no parapeito da janela.

Ela misturou farinha, manteiga, açúcar e melaço em sua maior tigela de madeira. A massa ficou macia e grudenta, cheirando a especiarias. Com cuidado, ela abriu a massa e cortou o formato perfeito de um homem de gengibre.

"Vamos te deixar especial," disse ela com carinho, colocando groselhas para os olhos, uma uva-passa para o sorriso e três pérolas de açúcar para os botões. "Pronto. Agora para o forno você vai."

Ela colocou a assadeira e fechou a porta. O calor subiu e dançou. O gato cheirou o ar com interesse.

Mas, bem quando o timer tocou—

POP!

A porta do forno se abriu de repente, e de lá pulou o Homem de Gengibre, dourado e sorridente.

"Não me coma!" ele gritou, pulando no chão. "Corra, corra, o mais rápido que puder! Você não me pega, eu sou o Homem de Gengibre!"

E lá foi ele—pela cozinha, passando pelo gato assustado, e saindo pela porta para o sol.

"Pare!" gritou a velhinha. "Volte aqui!"

Mas o Homem de Gengibre só riu enquanto seus pezinhos de biscoito batiam pelo caminho do jardim.
"Fugi da velhinha, vou fugir de você!
Corra, corra, o mais rápido que puder!
Você não me pega, eu sou o Homem de Gengibre!"

Logo ele passou por um porquinho rosa e gordo, dentro de um chiqueiro lamacento.

"Oinc! Você cheira delicioso!" grunhiu o porco, correndo atrás dele.

Mas o Homem de Gengibre só disse:
"Fugi da velhinha, fugi do gato dela—
Vou fugir de um porco rapidinho também!
Corra, corra, o mais rápido que puder!
Você não me pega, eu sou o Homem de Gengibre!"

Ele disparou pela praça da vila, passando por vendedores assustados e cestos de maçãs, com suas perninhas correndo depressa.

Depois veio uma vaca marrom, balançando o rabo perto da cerca.

"Muu! Que lanchinho gostoso você seria," disse ela, trotando atrás dele.

Mas ele só gritou:
"Fugi da velhinha, do gato e do porco,
Fugir de você? Isso é pouco!
Corra, corra, o mais rápido que puder!
Você não me pega, eu sou o Homem de Gengibre!"

A poeira subiu atrás dele enquanto o porco e a vaca se juntaram à perseguição. Seus cascos batiam no chão enquanto as crianças riam e apontavam.

Então um cavalo alto relinchou do campo e entrou na corrida.

"Vou te pegar rapidinho!" chamou ele, com os cascos trovejando.

Mas o Homem de Gengibre só correu mais rápido, passando por campos de trigo dourado.

"Fugi de todos eles, você vai ver—
Você não me pega, eu sou o Homem de Gengibre!"

Os animais bufavam e ofegavam atrás dele. A velhinha já tinha desistido, com as mãos na cintura, resmungando: "Isso me ensina a não assar nada com pernas."

O Homem de Gengibre riu enquanto corria pela floresta, folhas estalando sob seus pés, pássaros voando assustados.

Mas de repente, ele chegou a um rio largo e veloz. A água girava escura e rápida, fundo demais para atravessar, largo demais para pular.

"Ai, ai," disse ele, andando de um lado para o outro na beira do rio.

Saiu então uma raposa elegante, com o pelo brilhando como cobre polido.

"Por que essa carinha triste, biscoitinho?" perguntou a raposa, com voz suave como manteiga derretida.

"Preciso atravessar esse rio," disse o Homem de Gengibre, olhando nervoso para a correnteza. "Mas eu não sei nadar."

Os olhos da raposa brilharam. "Ora, eu sei. Suba no meu rabo, que eu te levo."

Hesitando só um pouquinho, o Homem de Gengibre subiu.

A raposa entrou na água fria. Ondinhas brilhavam enquanto ela nadava devagar.

"Está muito molhado aí atrás," disse a raposa. "Suba nas minhas costas."

O Homem de Gengibre subiu mais alto.

Logo a água chegou ao pescoço da raposa. "Melhor subir na minha cabeça," disse ela, mexendo as orelhas.

O Homem de Gengibre obedeceu.

Mas a água subiu de novo.

"Você vai se molhar—melhor subir no meu nariz," sussurrou a raposa.

Assim que o Homem de Gengibre pisou na pontinha do nariz da raposa—

SNAP!

Com um movimento rápido da cabeça, a raposa jogou o Homem de Gengibre para o alto e o engoliu de uma só vez.

O rio continuou a correr. Os pássaros cantaram. E a raposa lambeu os lábios.

"Delicioso."

Momentos depois, o porco, a vaca e o cavalo chegaram, ofegantes.

"Onde ele está?" arfou o porco.

A raposa deu um pequeno arroto. "Ele ficou meio molinho," disse ela, piscando.

De volta à vila, a velhinha tirou outra assadeira do forno. Ela olhou para o gato e disse: "Desta vez, sem pernas."

Fim`,Mg={title:"O Homem de Gengibre",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",content:_g,narrators:[{id:"onyx",name:"Onyx",duration:318,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/pt/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:345,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/pt/shimmer.mp3"}],songs:[{id:"epic_adventure",title:"A Fuga do Homem de Gengibre",style:"epic_adventure",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/o_homem_de_gengibre/pt/epic_adventure.mp3",duration:111.8},{id:"singalong",title:"O Homem de Gengibre",style:"singalong",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/o_homem_de_gengibre/pt/singalong.mp3",duration:185.12},{id:"storytelling",title:"O Homem de Gengibre",style:"storytelling",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/o_homem_de_gengibre/pt/storytelling.mp3",duration:179.88}]},Tg=`In een knus bakstenen huisje aan de rand van een druk dorp, waar kaneel en gember de ochtendlucht vulden, deed een oude vrouw haar schort om met een vrolijk deuntje.

"Vandaag is een echte bakdag," zei ze tegen haar kat, die lui knipperde op de vensterbank.

Ze roerde bloem, boter, suiker en stroop in haar grootste houten kom. Het deeg was zacht en plakkerig, warm van de kruiden. Voorzichtig rolde ze het uit en sneed de perfecte vorm van een peperkoekman.

"Laten we jou bijzonder maken," zei ze vriendelijk, terwijl ze krenten voor ogen drukte, een rozijn voor een lachende mond, en drie suikerparels als knopen. "Zo. Nu de oven in."

Ze schoof de bakplaat erin en deed de deur dicht. De hitte trilde en steeg op. De kat snoof nieuwsgierig de lucht op.

Maar precies toen de timer tikte—

POP!

De ovendeur vloog open en daar sprong de Peperkoekman naar buiten, goudbruin en grijnzend.

"Eet me niet op!" riep hij, springend op de vloer. "Ren, ren, zo snel als je kan! Je vangt me niet, ik ben de Peperkoekman!"

En weg was hij—door de keuken, langs de geschrokken kat, en de deur uit in het zonlicht.

"Stop!" riep de oude vrouw. "Kom terug!"

Maar de Peperkoekman lachte alleen maar terwijl zijn kleine koekjesvoetjes over het tuinpad tikten.
"Ik rende weg van de vrouw, ik ren weg van jou!
Ren, ren, zo snel als je kan!
Je vangt me niet, ik ben de Peperkoekman!"

Al gauw kwam hij langs een dik roze varkentje in een modderige stal.

"Knor! Je ruikt heerlijk!" knorde het varkentje, terwijl hij achter hem aan draafde.

Maar de Peperkoekman riep:
"Ik rende weg van de vrouw, ik rende weg van haar kat—
Ik ren net zo snel weg van een varken als dat!
Ren, ren, zo snel als je kan!
Je vangt me niet, ik ben de Peperkoekman!"

Hij rende over het dorpsplein, langs geschrokken winkeliers en manden met appels, zijn kleine beentjes gingen snel.

Toen kwam er een bruine koe, zwaaiend met haar staart bij het hek.

"Boe! Wat zou jij een lekker hapje zijn," zei ze, terwijl ze achter hem aan liep.

Maar hij riep alleen maar:
"Ik rende weg van de vrouw, de kat en het varken,
Voor jou wegrennen? Dat is niet zo zwaar!
Ren, ren, zo snel als je kan!
Je vangt me niet, ik ben de Peperkoekman!"

Stof dwarrelde op achter hem terwijl het varken en de koe zich bij de achtervolging voegden. Hun hoeven bonsden op de grond terwijl kinderen giechelden en wezen.

Toen hinnikte een hoge paard uit de wei en deed mee met de achtervolging.

"Ik vang je zo!" riep hij, terwijl zijn hoeven daverden.

Maar de Peperkoekman rende alleen maar harder, zigzaggend door velden vol gouden tarwe.

"Ik rende weg van allemaal, je zult zien dat ik het kan—
Je vangt me niet, ik ben de Peperkoekman!"

De dieren hijgden en puften achter hem. De oude vrouw had het opgegeven, handen in de zij, mopperend: "Dat zal me leren om iets met beentjes te bakken."

De Peperkoekman lachte terwijl hij door het bos rende, bladeren kraakten onder zijn voeten, vogels vlogen verschrikt op.

Maar opeens kwam hij bij een brede, snel stromende rivier. Het water draaide donker en snel, te diep om door te waden, te breed om over te springen.

"O jee," zei hij, heen en weer lopend langs de oever.

Daar stapte een slanke vos naar voren, zijn vacht glansde als gepoetst koper.

"Waarom zo'n lang gezicht, klein koekje?" vroeg de vos, zijn stem glad als gesmolten boter.

"Ik moet deze rivier over," zei de Peperkoekman, terwijl hij zenuwachtig naar de stroming keek. "Maar ik kan niet zwemmen."

De ogen van de vos twinkelden. "Nou, ik kan het wel. Spring maar op mijn staart, dan draag ik je over."

Na een kort momentje twijfelen klom de Peperkoekman op.

De vos stapte het koude water in. Rimpels glinsterden terwijl hij rustig vooruit zwom.

"Te nat achteraan," zei de vos. "Klim maar op mijn rug."

De Peperkoekman klom hoger.

Al snel kwam het water tot aan de nek van de vos. "Beter dat je op mijn hoofd gaat zitten," zei hij met een wiebel van zijn oren.

De Peperkoekman deed het.

Maar het water steeg weer.

"Je wordt nat—klim maar op mijn neus," fluisterde de vos.

Zodra de Peperkoekman op het puntje van de neus van de vos stapte—

SNAP!

Met één snelle zwaai van zijn kop gooide de vos de Peperkoekman de lucht in en slikte hem in één hap door.

De rivier stroomde verder. Vogels tjilpten. En de vos likte zijn lippen.

"Heerlijk."

Even later kwamen het varken, de koe en het paard aan, hijgend.

"Waar is hij?" snakte het varkentje.

De vos boerde zachtjes. "Hij werd een beetje zompig," zei hij met een knipoog.

Terug in het dorp haalde de oude vrouw nog een bakplaat uit de oven. Ze keek naar haar kat en zei: "Deze keer geen beentjes."

Het Einde`,Fg={title:"De Peperkoekman",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",content:Tg,narrators:[{id:"onyx",name:"Onyx",duration:304,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/nl/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:299,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/nl/shimmer.mp3"}],songs:[{id:"epic_adventure",title:"De Peperkoekman",style:"epic_adventure",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/de_peperkoekman/nl/epic_adventure.mp3",duration:223.16},{id:"singalong",title:"De Peperkoekman Liedje",style:"singalong",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/de_peperkoekman/nl/singalong.mp3",duration:155.96},{id:"storytelling",title:"De Peperkoekman",style:"storytelling",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/de_peperkoekman/nl/storytelling.mp3",duration:215.28}]},Ag=`W przytulnym, ceglanym domku na skraju gwarniej wioski, gdzie w powietrzu pachniało cynamonem i imbirem, stara kobieta zawiązała fartuszek z wesołym podśpiewywaniem.

"Dziś mam ochotę coś upiec," powiedziała do swojego kota, który leniwie mrugał na parapecie.

Wymieszała mąkę, masło, cukier i melasę w swojej największej drewnianej misce. Ciasto było miękkie i klejące, pachnące przyprawami. Ostrożnie rozwałkowała je i wycięła idealny kształt piernikowego ludzika.

"Zrobimy cię wyjątkowym," powiedziała życzliwie, wciskając porzeczki na oczy, rodzynkę na uśmiechniętą buzię i trzy cukrowe perełki na guziki. "Gotowe. Teraz do pieca z tobą."

Wsadziła blachę do piekarnika i zamknęła drzwiczki. Gorąco falowało i unosiło się w górę. Kot z ciekawością wąchał powietrze.

Ale gdy tylko minutnik zadzwonił—

POP!

Drzwiczki piekarnika otworzyły się z hukiem, a z nich wyskoczył Piernikowy Ludzik, rumiany i uśmiechnięty.

"Nie jedz mnie!" zawołał, zeskakując na podłogę. "Biegnij, biegnij, ile sił w nogach! Nie złapiesz mnie, jestem Piernikowym Ludzikiem!"

I pognał—przez kuchnię, obok zdziwionego kota i przez drzwi na słoneczny dwór.

"Stój!" krzyknęła staruszka. "Wróć tutaj!"

Ale Piernikowy Ludzik tylko się śmiał, gdy jego małe ciasteczkowe stópki stukały po ogrodowej ścieżce.
"Uciekłem przed kobietą, ucieknę i przed tobą!
Biegnij, biegnij, ile sił w nogach!
Nie złapiesz mnie, jestem Piernikowym Ludzikiem!"

Wkrótce minął grubą różową świnkę w błotnistej zagrodzie.

"Chrum! Pachniesz pysznie!" zachrumkała świnka, ruszając za nim.

Ale Piernikowy Ludzik tylko zawołał:
"Uciekłem przed kobietą, uciekłem przed jej kotem—
Ucieknę przed świnką równie łatwo!
Biegnij, biegnij, ile sił w nogach!
Nie złapiesz mnie, jestem Piernikowym Ludzikiem!"

Przebiegł przez rynek wioski, obok zdziwionych sklepikarzy i koszy z jabłkami, jego małe nóżki biegły bardzo szybko.

Następna była brązowa krowa, machająca ogonem przy płocie.

"Muu! Byłbyś pyszną przekąską," powiedziała, biegnąc za nim.

Ale on tylko zawołał:
"Uciekłem przed kobietą, kotem i świnką,
Uciec przed tobą? To nic trudnego!
Biegnij, biegnij, ile sił w nogach!
Nie złapiesz mnie, jestem Piernikowym Ludzikiem!"

Za nim podnosił się kurz, gdy świnka i krowa dołączyły do pościgu. Ich racice dudniły po ziemi, a dzieci śmiały się i pokazywały palcami.

Wtedy wysoki koń zarżał z łąki i ruszył w pogoń.

"Złapię cię raz-dwa!" zawołał, kopyta dudniły.

Ale Piernikowy Ludzik tylko przyspieszył, przemykając przez pola złotych zbóż.

"Uciekłem przed wszystkimi, zobaczysz, że potrafię—
Nie złapiesz mnie, jestem Piernikowym Ludzikiem!"

Zwierzęta sapały i dyszały za nim. Staruszka już się poddała, trzymając ręce na biodrach i mrucząc: "To mnie nauczy, żeby nie piec niczego z nogami."

Piernikowy Ludzik śmiał się, biegnąc przez las, liście szeleściły pod jego stopami, a ptaki rozlatywały się nad głową.

Ale nagle dotarł do szerokiej, szumiącej rzeki. Woda wirowała ciemna i szybka, za głęboka, by przejść, za szeroka, by przeskoczyć.

"Okruszki," powiedział, chodząc wzdłuż brzegu.

Nagle wyszedł zgrabny lis, jego futro błyszczało jak wypolerowana miedź.

"Czemu taka smutna mina, małe ciasteczko?" zapytał lis, głosem gładkim jak roztopione masło.

"Muszę przejść przez rzekę," powiedział Piernikowy Ludzik, patrząc nerwowo na nurt. "Ale nie umiem pływać."

Oczy lisa zabłysły. "Ja umiem. Wskakuj na mój ogon, a przeniosę cię na drugi brzeg."

Piernikowy Ludzik zawahał się tylko chwilę i wskoczył.

Lis wszedł do zimnej wody. Fale lśniły, gdy płynął powoli do przodu.

"Z tyłu za bardzo chlupie," powiedział lis. "Wskocz mi na grzbiet."

Piernikowy Ludzik wspiął się wyżej.

Wkrótce woda sięgała lisowi do szyi. "Lepiej wskocz mi na głowę," powiedział, poruszając uszami.

Piernikowy Ludzik posłuchał.

Ale woda podniosła się jeszcze bardziej.

"Zmokniesz—najlepiej wejdź mi na nos," wyszeptał lis.

Gdy tylko Piernikowy Ludzik stanął na czubku nosa lisa—

KŁAP!

Jednym szybkim ruchem głowy lis podrzucił Piernikowego Ludzika w powietrze i połknął go na jeden kęs.

Rzeka płynęła dalej. Ptaki ćwierkały. A lis oblizał wargi.

"Pyszne."

Chwilę później świnka, krowa i koń dobiegli, sapiąc.

"Gdzie on jest?" sapnęła świnka.

Lis cicho bekł. "Trochę się rozmokło," powiedział z mrugnięciem.

W wiosce staruszka wyjęła z pieca kolejną blachę. Spojrzała na kota i powiedziała: "Tym razem bez nóg."

Koniec`,Ig={title:"Piernikowy Ludzik",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",content:Ag,narrators:[{id:"onyx",name:"Onyx",duration:323,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/pl/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:328,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/pl/shimmer.mp3"}],songs:[{id:"epic_adventure",title:"Piernikowy Ludzik",style:"epic_adventure",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/piernikowy_ludzik/pl/epic_adventure.mp3",duration:193.56},{id:"singalong",title:"Piernikowy Ludzik Tańczy",style:"singalong",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/piernikowy_ludzik/pl/singalong.mp3",duration:209.52},{id:"storytelling",title:"Piernikowy Ludzik",style:"storytelling",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/piernikowy_ludzik/pl/storytelling.mp3",duration:207.4}]},Dg=`在热闹村庄边上的一间温暖的砖房里，空气中飘着肉桂和姜的香味。一位老奶奶系上围裙，开心地哼着小曲。

"今天真适合烤点心。"她对窗台上懒洋洋眨眼的猫咪说。

她用最大的木碗搅拌着面粉、黄油、糖和糖浆。面团又软又黏，带着香香的味道。她小心地把面团擀平，切出一个完美的姜饼人形状。

"让你变得特别一点吧。"她温柔地说，用葡萄干做眼睛，用葡萄干做微笑的嘴巴，再用三颗糖珠做纽扣。"好了，现在进烤箱吧。"

她把烤盘推进去，关上门。热气升腾起来。猫咪好奇地闻了闻空气。

就在计时器滴答响起时——

"砰！"

烤箱门突然弹开，姜饼人跳了出来，金黄的身体，咧着大大的笑脸。

"别吃我！"他大叫着跳到地板上。"快跑，快跑，你追不上我！我是姜饼人！"

他飞快地冲出了厨房，跑过吓了一跳的猫咪，冲进了阳光下。

"停下！"老奶奶喊道，"快回来！"

可姜饼人只是笑着，小饼干脚丫在花园小路上噼啪作响。
"我能从老奶奶那儿跑掉，也能从你这儿跑掉！
快跑，快跑，你追不上我！我是姜饼人！"

很快，他跑过了猪圈里一只胖胖的粉色小猪。

"哼哼！你闻起来真香！"小猪哼哼着，跟着他跑了起来。

但姜饼人只是喊：
"我能从老奶奶那儿跑掉，也能从她的猫那儿跑掉——
我也能像这样从小猪那儿跑掉！
快跑，快跑，你追不上我！我是姜饼人！"

他冲过村子的广场，跑过吃惊的店主和一篮篮苹果，小腿飞快地跑着。

接着，一头棕色的奶牛在篱笆旁摇着尾巴。

"哞！你一定很好吃。"奶牛说着，也追了上来。

可他只是大声喊：
"我能从老奶奶、猫咪和小猪那儿跑掉，
从你这儿跑掉也不难！
快跑，快跑，你追不上我！我是姜饼人！"

小猪和奶牛也加入了追逐，尘土飞扬。孩子们咯咯笑着，指着他们。

然后，一匹高大的马在草地上嘶鸣，也追了过来。

"我很快就能抓住你！"马叫着，蹄子咚咚响。

但姜饼人跑得更快，穿过金黄的麦田。

"我能从他们全都跑掉，你看我行的——
你也追不上我，我是姜饼人！"

动物们在他身后喘着气。老奶奶已经放弃了，双手叉腰嘀咕着："以后再也不做会跑的点心了。"

姜饼人笑着跑进森林，脚下树叶咔嚓作响，鸟儿在头顶飞散。

突然，他来到了一条又宽又急的河边。水流又深又快，太深不能趟过去，太宽也跳不过去。

"哎呀，"他在河岸边来回踱步。

这时，一只光滑的狐狸走了出来，毛发像擦亮的铜一样闪闪发光。

"小饼干，为什么皱着眉头？"狐狸的声音像融化的黄油一样温柔。

"我需要过河。"姜饼人看着水流，紧张地说，"可我不会游泳。"

狐狸的眼睛闪了闪。"我会游泳。跳到我的尾巴上，我带你过去。"

姜饼人只犹豫了一下，就爬上了狐狸的尾巴。

狐狸走进冰凉的水里。水面荡起波纹，他慢慢地游着。

"尾巴后面太湿了，"狐狸说，"跳到我背上来吧。"

姜饼人爬得更高了。

很快，水已经淹到狐狸的脖子。"最好到我头上来。"狐狸甩了甩耳朵说。

姜饼人照做了。

可水又升高了。

"你会湿的——最好爬到我鼻子上。"狐狸低声说。

姜饼人刚刚踩到狐狸鼻尖——

"咔嚓！"

狐狸猛地一甩头，把姜饼人抛到空中，一口吞了下去。

河水继续流淌，鸟儿在唱歌。狐狸舔了舔嘴唇。

"真好吃。"

过了一会儿，小猪、奶牛和马气喘吁吁地赶来了。

"他去哪儿了？"小猪喘着问。

狐狸打了个小嗝，眨眨眼说："他有点湿了。"

回到村子里，老奶奶又从烤箱里拿出一盘点心。她看了看猫咪，说："这次，别做腿了。"

故事结束`,Rg={title:"姜饼人",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",content:Dg,narrators:[{id:"onyx",name:"Onyx",duration:269,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/zh/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:306,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/zh/shimmer.mp3"}],songs:[{id:"epic_adventure",title:"姜饼人的逃亡",style:"epic_adventure",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/姜饼人/zh/epic_adventure.mp3",duration:213.52},{id:"singalong",title:"姜饼快跑！",style:"singalong",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/姜饼人/zh/singalong.mp3",duration:149.2},{id:"storytelling",title:"逃跑的姜饼人",style:"storytelling",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/姜饼人/zh/storytelling.mp3",duration:185}]},Og=`にぎやかな村のはずれ、小さなレンガのおうち。朝の空気にはシナモンとショウガのいいにおいがいっぱいです。おばあさんはエプロンをしめて、にこにこ歌いました。

「今日はおかしをやこうね」と、おばあさんはまどべのねこに話しかけました。ねこはのんびりまばたきします。

おばあさんは大きな木のボウルで、小麦粉とバター、おさとう、モラセスをまぜました。生地はやわらかくて、スパイスのあたたかいかおり。ていねいにのばして、ジンジャーブレッドマンのかたちにぬきました。

「とくべつにしてあげようね」やさしく言って、おばあさんはカランで目を、レーズンでにっこり口を、シュガーパールでボタンを三つつけました。「できたよ。オーブンに入ろうね。」

トレーをすべらせて、ドアをしめました。オーブンの中はぽかぽか。ねこはいいにおいをくんくん。

でも、タイマーがチクタクなったとき――

ポン！

オーブンのドアがバタンとあいて、ジンジャーブレッドマンがぴょんととびだしました。きつね色でにっこりしています。

「ぼくをたべないで！」とさけびながら、ジンジャーブレッドマンはゆかにとびおりました。「にげろ、にげろ、はやくにげろ！ つかまえられないよ、ぼくはジンジャーブレッドマン！」

そのままキッチンをぬけて、びっくりしたねこのそばをとおり、ドアからおひさまのなかへかけだしました。

「まって！」とおばあさんがさけびます。「もどっておいで！」

でもジンジャーブレッドマンはわらいながら、小さなクッキーの足でにわみちをタタタ。
「おばあさんからにげたよ、きみからもにげる！
にげろ、にげろ、はやくにげろ！
つかまえられないよ、ぼくはジンジャーブレッドマン！」

すぐに、どろんこのおりにいるピンクのふとったぶたがいました。

「ブーブー！いいにおいだね！」とぶたがいい、あとをおいかけます。

でもジンジャーブレッドマンはこたえました。
「おばあさんからにげた、ねこからもにげた――
ぶたからだってすぐににげる！
にげろ、にげろ、はやくにげろ！
つかまえられないよ、ぼくはジンジャーブレッドマン！」

ジンジャーブレッドマンは村のひろばをかけぬけます。おみせの人たちやりんごのかごのそばを、ちいさな足でトコトコ。

つぎは、さくのそばでしっぽをふる茶色いうしがいました。

「モー！おいしそうだね」とうしがいい、あとをおいかけます。

でもジンジャーブレッドマンはさけびました。
「おばあさんからも、ねこからも、ぶたからもにげたよ。
きみからにげるのなんて、へっちゃらさ！
にげろ、にげろ、はやくにげろ！
つかまえられないよ、ぼくはジンジャーブレッドマン！」

ぶたとうしもいっしょにおいかけて、土ぼこりがたちます。子どもたちはわらってゆびさします。

すると、たかいくびのうまが野原でヒヒーンとなき、かけてきました。

「すぐにつかまえるぞ！」とうまがいい、ひづめがドドドとおとをたてます。

でもジンジャーブレッドマンはもっとはやくなって、きんいろのむぎばたけをぬけていきます。

「みんなからにげたよ、ぼくはできる！
つかまえられないよ、ぼくはジンジャーブレッドマン！」

どうぶつたちは、はあはあいいながらおいかけます。おばあさんはもうあきらめて、てをこまねいて「足のあるおかしなんて、やくんじゃなかった」とつぶやきました。

ジンジャーブレッドマンはわらいながら森をかけぬけ、足の下でカサカサ葉っぱがなり、鳥たちがとびたちます。

でも、ふと、ひろくてはやい川にでました。水はぐるぐる、ふかくてわたれません。とべるほどせまくもありません。

「あらら」とジンジャーブレッドマンは川べりをうろうろ。

そこへ、つやつやしたキツネがあらわれました。毛はピカピカ、どう色です。

「どうしたの？ちいさなクッキーくん」とキツネがやさしい声でたずねます。

「この川をわたりたいんだ。でもぼく、およげないの」とジンジャーブレッドマンはこたえ、ながれをみてドキドキ。

キツネの目がキラリ。「ぼくはおよげるよ。しっぽにのってごらん、むこうまでつれていってあげる。」

ジンジャーブレッドマンはちょっとだけためらってから、キツネのしっぽにのりました。

キツネはつめたい水の中へ。水がキラキラゆれて、キツネはやさしくおよぎます。

「うしろは水がかかるよ」とキツネ。「ぼくのせなかにおいで。」

ジンジャーブレッドマンはせなかにのぼります。

すぐに水がキツネのくびまできました。「ぼくのあたまにおいで」とキツネがみみをピクピク。

ジンジャーブレッドマンはあたまにのりました。

でも水はもっとあがってきます。

「ぬれちゃうよ――ぼくのはなにのぼったほうがいいよ」とキツネがささやきました。

ジンジャーブレッドマンがキツネのはなのさきにのったとたん――

パクッ！

キツネはあたまをパッとふって、ジンジャーブレッドマンをひとくちでパクリとたべてしまいました。

川はながれつづけ、鳥たちはさえずります。キツネはくちをなめて、

「おいしい。」

すこしして、ぶたとうしとうまが、はあはあしながらやってきました。

「どこにいったの？」とぶたがききます。

キツネはちいさくゲップ。「ちょっとしめっぽくなっちゃった」とウインクしました。

村にもどると、おばあさんはまたオーブンからトレーをとりだします。ねこをみて、「こんどは足なしにしようね」といいました。

おしまい`,Wg={title:"ジンジャーブレッドマン",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",content:Og,narrators:[{id:"onyx",name:"Onyx",duration:317,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/ja/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:333,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/ja/shimmer.mp3"}],songs:[{id:"epic_adventure",title:"逃げろジンジャーブレッドマン",style:"epic_adventure",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/ジンジャーブレッドマン/ja/epic_adventure.mp3",duration:240},{id:"singalong",title:"ジンジャーブレッドのぼうけん",style:"singalong",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/ジンジャーブレッドマン/ja/singalong.mp3",duration:118.8},{id:"storytelling",title:"走れジンジャーブレッドマン",style:"storytelling",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/ジンジャーブレッドマン/ja/storytelling.mp3",duration:153.96}]},Bg=`분주한 마을 끝, 아늑한 벽돌집에서 아침 공기에 계피와 생강 향이 가득 퍼졌어요. 할머니는 앞치마를 두르며 즐겁게 콧노래를 불렀어요.

"오늘은 빵을 굽기 좋은 날이구나," 할머니가 창가에서 졸고 있는 고양이에게 말했어요.

할머니는 큰 나무 그릇에 밀가루, 버터, 설탕, 그리고 당밀을 넣고 섞었어요. 반죽은 부드럽고 끈적했어요. 조심스럽게 반죽을 밀대로 밀고, 진저브레드 맨 모양으로 잘랐어요.

"특별하게 만들어 줄게," 할머니가 다정하게 말하며, 건포도로 눈을 만들고, 건포도로 웃는 입을 만들고, 설탕 진주 세 개로 단추를 만들었어요. "자, 이제 오븐으로 들어가렴."

할머니는 쟁반을 오븐에 넣고 문을 닫았어요. 뜨거운 열기가 퍼졌어요. 고양이는 킁킁 냄새를 맡았어요.

그런데 타이머가 똑딱거리자—

펑!

오븐 문이 벌컥 열리더니, 진저브레드 맨이 황금빛으로 빛나며 튀어나왔어요.

"나를 먹지 마세요!" 진저브레드 맨이 외치며 바닥으로 뛰어내렸어요. "달려, 달려, 아주 빠르게! 날 잡을 수 없어, 난 진저브레드 맨이야!"

진저브레드 맨은 부엌을 지나, 놀란 고양이 옆을 지나, 햇살 가득한 밖으로 달려나갔어요.

"멈춰!" 할머니가 소리쳤어요. "돌아와!"

하지만 진저브레드 맨은 깔깔 웃으며 작은 쿠키 발로 정원 길을 달렸어요.
"할머니도 피했고, 너도 피할 거야!
달려, 달려, 아주 빠르게!
날 잡을 수 없어, 난 진저브레드 맨이야!"

곧 진저브레드 맨은 진흙 속에 있는 통통한 분홍 돼지를 만났어요.

"꿀꿀! 너 정말 맛있겠다!" 돼지가 말하며 뒤따라왔어요.

하지만 진저브레드 맨은 외쳤어요,
"할머니도 피했고, 고양이도 피했지—
돼지도 쉽게 피할 수 있어!
달려, 달려, 아주 빠르게!
날 잡을 수 없어, 난 진저브레드 맨이야!"

진저브레드 맨은 마을 광장을 달렸어요. 놀란 가게 주인들과 사과 바구니를 지나, 작은 다리로 빠르게 달렸어요.

다음엔 갈색 소가 울타리 옆에서 꼬리를 흔들며 다가왔어요.

"음메! 넌 정말 맛있는 간식이겠다," 소가 말하며 따라왔어요.

하지만 진저브레드 맨은 외쳤어요,
"할머니도, 고양이도, 돼지도 피했지,
너도 피하는 건 어렵지 않아!
달려, 달려, 아주 빠르게!
날 잡을 수 없어, 난 진저브레드 맨이야!"

먼지가 일었고, 돼지와 소도 함께 쫓아왔어요. 발굽 소리가 쿵쿵 울렸고, 아이들은 깔깔 웃으며 손가락질했어요.

그때, 키 큰 말이 초원에서 히잉 울며 달려왔어요.

"난 금방 널 잡을 거야!" 말이 말했어요. 발굽 소리가 우르르 났어요.

하지만 진저브레드 맨은 더 빨리 달렸어요. 황금빛 밀밭을 지나 쏜살같이 달렸어요.

"난 모두를 피했지, 넌 못 잡아—
날 잡을 수 없어, 난 진저브레드 맨이야!"

동물들은 헉헉거리며 뒤따라왔어요. 할머니는 포기하고 허리에 손을 얹고 중얼거렸어요. "다리는 달린 빵을 구우면 안 되겠네."

진저브레드 맨은 숲을 달리며 깔깔 웃었어요. 발밑에서 낙엽이 바삭바삭 소리 내고, 새들은 놀라 날아갔어요.

그런데 갑자기, 넓고 빠른 강이 나타났어요. 물살이 세고 깊어서 건널 수 없었어요.

"이런, 부스러기야," 진저브레드 맨이 강가를 왔다갔다 했어요.

그때, 반짝이는 여우가 나타났어요. 털이 구리처럼 빛났어요.

"왜 이렇게 슬픈 얼굴이니, 작은 쿠키야?" 여우가 부드럽게 물었어요.

"이 강을 건너야 해요," 진저브레드 맨이 걱정스럽게 말했어요. "근데 난 수영을 못 해요."

여우의 눈이 반짝였어요. "난 수영 잘해. 내 꼬리에 올라타! 내가 데려다줄게."

진저브레드 맨은 잠깐 망설이다가 여우 꼬리에 올라탔어요.

여우는 차가운 물에 들어갔어요. 물결이 반짝였어요. 여우는 조심스럽게 헤엄쳤어요.

"뒤쪽은 너무 물이 튀어," 여우가 말했어요. "내 등으로 올라와."

진저브레드 맨은 더 높이 올라갔어요.

곧 물이 여우 목까지 찼어요. "이제 내 머리 위로 올라와," 여우가 귀를 흔들며 말했어요.

진저브레드 맨은 여우 머리 위로 올라갔어요.

하지만 물이 또 올랐어요.

"젖을 거야—내 코 위로 올라와," 여우가 속삭였어요.

진저브레드 맨이 여우 코끝에 올라서자마자—

딱!

여우가 머리를 홱 흔들더니, 진저브레드 맨을 공중으로 던져 한 입에 꿀꺽 삼켜버렸어요.

강물은 계속 흘렀어요. 새들은 짹짹거렸어요. 여우는 입을 쓱 핥았어요.

"맛있다."

잠시 후, 돼지, 소, 말이 헉헉거리며 도착했어요.

"그 애 어디 갔어?" 돼지가 숨을 헐떡이며 물었어요.

여우는 트림을 살짝 하고 윙크했어요. "조금 젖었지 뭐."

마을로 돌아가서, 할머니는 오븐에서 또 다른 쟁반을 꺼냈어요. 고양이를 보며 말했어요. "이번엔 다리는 없게 굽자."

끝`,Ug={title:"진저브레드 맨",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/The+Gingerbread+Man.png",content:Bg,narrators:[{id:"onyx",name:"Onyx",duration:328,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/ko/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:334,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/the_gingerbread_man/narrations/ko/shimmer.mp3"}],songs:[{id:"epic_adventure",title:"Run, Gingerbread Man!",style:"epic_adventure",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/진저브레드_맨/ko/epic_adventure.mp3",duration:112},{id:"singalong",title:"Run, Run Gingerbread Man",style:"singalong",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/진저브레드_맨/ko/singalong.mp3",duration:157.12},{id:"storytelling",title:"달콤한 도망자",style:"storytelling",url:"https://d1mmspri4wgcne.cloudfront.net/classic-tales/진저브레드_맨/ko/storytelling.mp3",duration:145.16}]},Ec=`At the edge of the ocean, where the sand felt cool and powdery between toes, the evening sky turned the water silver-blue. The waves spoke in a soft shhh, and tiny shells were dotted like sweets across the shore.

**Lila** knelt by a rock pool and peered in. Seaweed drifted like green ribbons. A tiny shrimp flicked away. On the pool's rim, she found a pebble shaped like a star. It was smooth with a faint sparkle. When she picked it up, it warmed in her palm, as if it liked being chosen.

"Excuse me!" said a small voice. "Down here!"

Lila leaned closer. A flicker of silver zipped round the pool and popped up like a coin. A little fish, bright as moonlight, blinked at her.

"I'm **Finn**," he said, words bubbling quickly. "I've lost the Moon Path. My family swam home at dusk, and I… well, I chased a glow and got turned around."

Lila rested her chin on her knees. "What's the Moon Path?"

"It's the silvery ribbon the moon lays on the water," Finn said, fins tilting with worry. "We follow it to the calm cove. But clouds rolled in, and the rocks are all corners and shadows. I need a land-friend to make a ripple key."

"A ripple key?" Lila tilted her head.

Finn nodded. "A pattern on the water. Only small, careful hands can do it. It calls the Moon Path even when clouds hide the moon. And you have a star pebble! That helps."

Lila looked at the pebble. "I can try," she said, though her tummy felt fluttery. "I've never unlocked water before."

"That's perfect," Finn said brightly. "First time magic works best."

Lila rolled up her sleeves and stretched her hand over the pool. As her fingers touched the surface, the star pebble twitched. She gasped. The pebble unfurled five tiny arms.

"Oh!" Lila giggled. "You're not a pebble at all. You're a sleepy starfish."

The little starfish spread itself across her finger like a small, soft hand. It glowed the faintest pearl. Finn's eyes went round. "Even better," he whispered. "Starfriends remember the sky."

"What do I do?" Lila asked.

"Draw slow circles," said Finn. "Not splashes. Gentle. The water likes polite visitors."

Lila took a breath that smelled of salt and faraway places. She swirled her finger once. Too fast. The pool slopped. "Oops," she said.

Finn gave an encouraging flip. "Softer. Like a feather."

Lila closed her eyes for a moment and listened to the shhh of the sea. She believed she could be as light as a feather. She drew a smaller circle, then another, slower. The starfish grew warmer, and a necklace of tiny bubbles rose to meet her finger.

The clouds thinned. Moonlight slipped between them and kissed the pool. Where Lila traced, the water shivered, and a pearly path of bubbles formed. It stretched from the rock pool, wove through a chain of shallows, and reached out towards the open sea.

Finn spun with joy. "You did it! The Moon Path came inside the pools!"

Lila grinned, cheeks pink. "Shall we follow?"

She stepped along the edge, sandals in one hand, toes skimming the water. The sea was cool and silky. The bubble path glowed faintly, like a string of lanterns. Finn swam below, keeping pace. Whenever the path grew dim, the starfish brightened on Lila's finger, and the light returned.

They turned a corner where the rocks made a gate. A stripey crab stood there with its claws held like a guard. "Click-clack," it said, tapping a stone.

"Hello," Lila said politely. "We're following the Moon Path. Could we slip by?"

The crab tilted its eyes. Lila admired its shiny shell. "Your stripes are very smart," she added.

The crab stopped tapping. With a sideways shuffle, it pointed to a narrow runnel hidden by seaweed. "Click," it said, almost kindly, and showed the secret way.

"Thank you," Lila said, and Finn gave a little bow that made him look terribly grand for such a small fish.

Past the gate, the pools widened. The water deepened to a clear glass blue. In the largest pool, shadows became shapes, and shapes became fish. Silver tails drew loops like writing in the air.

"Finn!" they sang, with a scatter of bubbles that went plink against the rock.

"Mum! Dad! I'm here!" Finn whooshed into the shoal. He spun a fast circle, then whizzed back to Lila. "This is Lila. She found the key."

The fish moved together and made a heart-shaped ripple. Lila's chest felt warm, just like the starfish on her finger.

A very old fish with slow, wise eyes swam close. "The ocean remembers kindness," it said in a soft, watery voice. "Whenever you need to find your way, dip your starfriend into a pool, and listen. The water will show you the gentlest path."

Finn bobbed. "Will you keep the starfish a little while? It likes your care."

The starfish wriggled as if agreeing, then slipped from Lila's finger to her palm and settled there, cosy as a button. "I'll keep it until dawn," Lila promised. "Then I'll bring it back to its rock."

Finn glinted in the moonlight. "I'll send a sparkle on the waves to say hello sometimes."

Lila laughed, the small kind of laugh that feels like a secret kept between friends. "I'll watch for it."

The clouds drifted on. The moon shone brighter, laying a silver ribbon far across the water. Finn's family skimmed along the path, tails flicking, scales twinkling like stars. "Goodnight!" they called, and the sound felt like a sigh and a song together.

Lila stood very still, then picked her way back to the first pool. She stroked the starfish's back with the tip of one finger. "You did well," she whispered. "We both did."

She perched on a smooth rock. The breeze was soft and smelt of salt and sleep. Night gathered like a blanket. The waves kept their quiet shhh. She touched the pool once more, and for a moment the bubbles drew a tiny map that looked exactly like the path they'd taken: round the gate, past the crab, to the big blue pool. Then it faded, as if tucked safely away.

Lila set the starfish in a shallow dish of seawater beside her. It rested there, tiny arms relaxed, a faint pearl glow pulsing very slowly. She wrapped her arms round her knees and watched the moon paint long silver lines on the sea.

Her eyes grew heavy. The sand cooled underfoot. The far lighthouse blinked, patient and calm. Somewhere beyond the rocks, a fish tail might have flicked one last wave of sparkle. Lila smiled and let the quiet take her. All around, the ocean breathed, gentle and sure.

Tonight's thought: believe in yourself
THE END`,Hg={title:"Whispers of the Tidal Star",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/cover.jpg",content:Ec,narrators:[{id:"echo",name:"Echo",duration:463,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/en-GB/echo.mp3"},{id:"nova",name:"Nova",duration:481,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/en-GB/nova.mp3"},{id:"onyx",name:"Onyx",duration:446,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/en-GB/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:478,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/en-GB/shimmer.mp3"}],songs:[{id:"singalong",title:"The Moon Path Song",style:"singalong",url:"https://musicfile.api.box/YzFlNDhjNGYtODFjYi00MjA2LTkwM2EtMjk3YmZmN2RiOGVm.mp3",duration:194,coverUrl:"https://musicfile.api.box/YzFlNDhjNGYtODFjYi00MjA2LTkwM2EtMjk3YmZmN2RiOGVm.jpeg"},{id:"epic_adventure",title:"The Moon Path",style:"epic_adventure",url:"https://musicfile.api.box/ZTcwZmMxMmEtMzFjMC00NmYwLWJjOTEtMDhiNDEzODFmYmQ5.mp3",duration:240,coverUrl:"https://musicfile.api.box/ZTcwZmMxMmEtMzFjMC00NmYwLWJjOTEtMDhiNDEzODFmYmQ5.jpeg"},{id:"magical_pop_rock",title:"Star Pebble Moon Path",style:"magical_pop_rock",url:"https://musicfile.api.box/ODM5YzBjNGItNGE3Ni00NzcwLWFhMzUtZjgyYzc0NzExZWI0.mp3",duration:145,coverUrl:"https://musicfile.api.box/ODM5YzBjNGItNGE3Ni00NzcwLWFhMzUtZjgyYzc0NzExZWI0.jpeg"},{id:"enchanted_synth_pop",title:"Star on the Shore",style:"enchanted_synth_pop",url:"https://musicfile.api.box/YTQzZjMzNWItM2E1My00YjE2LThmOGItM2ViZWVmNzMwNTNm.mp3",duration:155,coverUrl:"https://musicfile.api.box/YTQzZjMzNWItM2E1My00YjE2LThmOGItM2ViZWVmNzMwNTNm.jpeg"}]},qg={title:"Whispers of the Tidal Star",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/cover.jpg",content:Ec,narrators:[{id:"echo",name:"Echo",duration:462,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/en-US/echo.mp3"},{id:"nova",name:"Nova",duration:479,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/en-US/nova.mp3"},{id:"onyx",name:"Onyx",duration:462,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/en-US/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:483,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/en-US/shimmer.mp3"}],songs:[{id:"singalong",title:"The Moon Path Melody",style:"singalong",url:"https://musicfile.api.box/M2MzNTUwYzMtYzE5Mi00ZWY3LWJiNzItMjkzNGRlMTRlMjU1.mp3",duration:189,coverUrl:"https://musicfile.api.box/M2MzNTUwYzMtYzE5Mi00ZWY3LWJiNzItMjkzNGRlMTRlMjU1.jpeg"},{id:"enchanted_synth_pop",title:"Moonlit Ripple Key",style:"enchanted_synth_pop",url:"https://musicfile.api.box/YmI4NzFjZTktOTVhYS00MWY4LWE2NzMtNGFhZjUyMGEyYzE0.mp3",duration:177,coverUrl:"https://musicfile.api.box/YmI4NzFjZTktOTVhYS00MWY4LWE2NzMtNGFhZjUyMGEyYzE0.jpeg"}]},Gg=`Au bord de l'océan, là où le sable était frais et poudreux entre les orteils, le ciel du soir teintait l'eau d'un bleu-argenté. Les vagues chuchotaient un petit shhh, et de minuscules coquillages parsemaient la plage comme des bonbons.

**Lila** s'agenouilla près d'une flaque entre les rochers et regarda dedans. Des algues flottaient comme des rubans verts. Une toute petite crevette fit mine de s'enfuir. Sur le rebord de la flaque, elle trouva un galet en forme d'étoile. Il était lisse, avec un léger scintillement. Quand elle le ramassa, il se réchauffa dans sa paume, comme s'il aimait être choisi.

— Excusez-moi ! dit une petite voix. Là-dedans !

Lila se pencha plus près. Un éclat d'argent fit le tour de la flaque et jaillit comme une pièce. Un petit poisson, lumineux comme la lune, lui fit cligner les yeux.

— Je suis **Finn**, dit-il, les mots pétillant rapidement. J'ai perdu le Chemin de Lune. Ma famille a nagé vers la maison au crépuscule, et moi… eh bien, j'ai poursuivi une lueur et je me suis pris les nageoires.

Lila posa son menton sur ses genoux. — C'est quoi, le Chemin de Lune ?

— C'est le ruban argenté que la lune pose sur l'eau, expliqua Finn, ses nageoires inclinées d'inquiétude. On le suit pour aller à la crique tranquille. Mais des nuages sont venus, et les rochers font des coins et des ombres. J'ai besoin d'une amie de la terre pour faire une clé d'ondulation.

— Une clé d'ondulation ? demanda Lila en penchant la tête.

Finn hocha la tête. — Un motif sur l'eau. Pas d'éclaboussures. Des mains petites et délicates seulement peuvent le faire. Il appelle le Chemin de Lune même quand les nuages cachent la lune. Et toi, tu as un galet-étoile ! Ça aide.

Lila regarda le galet. — Je peux essayer, dit-elle, bien que son ventre fasse comme des papillons. Je n'ai jamais ouvert l'eau avant.

— Parfait, dit Finn avec gaieté. La première fois, la magie marche mieux.

Lila retroussa ses manches et étendit la main au-dessus de la flaque. Dès que ses doigts touchèrent la surface, le galet-étoile tressaillit. Elle retint un petit cri. Le galet déploya cinq minuscules bras.

— Oh ! ricana Lila. Tu n'es pas du tout un galet. Tu es une étoile de mer endormie.

La petite étoile de mer s'étira sur son doigt comme une main douce et minuscule. Elle brillait d'un faible éclat nacré. Les yeux de Finn s'écarquillèrent. — Encore mieux, souffla-t-il. Les amis-Étoiles se souviennent du ciel.

— Que dois-je faire ? demanda Lila.

— Trace des cercles lents, dit Finn. Pas d'éclaboussures. Doucement. L'eau aime les visiteurs polis.

Lila prit une grande respiration qui sentait le sel et les lieux lointains. Elle fit tournoyer son doigt une fois. Trop vite. La flaque éclaboussa. — Oups, dit-elle.

Finn fit un battement encourageant. — Plus doux. Comme une plume.

Lila ferma les yeux un instant et écouta le shhh de la mer. Elle se dit qu'elle pouvait être légère comme une plume. Elle dessina un petit cercle, puis un autre, plus lent. L'étoile de mer devint plus chaude, et un collier de minuscules bulles monta à la rencontre de son doigt.

Les nuages s'amincirent. La lumière de la lune se faufila entre eux et embrassa la flaque. Là où Lila traçait, l'eau frissonna, et un chemin nacré de bulles se forma. Il s'étira depuis la flaque, serpentait à travers une chaîne de bas-fonds et tendit la main vers la mer ouverte.

Finn tourna de joie. — Tu l'as fait ! Le Chemin de Lune est entré dans les flaques !

Lila sourit, les joues roses. — On le suit ?

Elle marcha le long du bord, ses sandales à la main, les orteils frôlant l'eau. La mer était fraîche et soyeuse. Le sentier de bulles brillait doucement, comme une guirlande de lanternes. Finn nageait dessous, gardant le rythme. Chaque fois que le chemin faiblissait, l'étoile sur le doigt de Lila s'éclairait, et la lumière revenait.

Ils tournèrent un coin où les rochers formaient une porte. Un crabe rayé se tenait là, ses pinces comme un garde. — Clic-clac, dit-il en tapotant une pierre.

— Bonjour, dit Lila poliment. Nous suivons le Chemin de Lune. Pourrions-nous passer ?

Le crabe inclina ses yeux. Lila admira sa carapace brillante. — Tes rayures sont très élégantes, ajouta-t-elle.

Le crabe cessa de taper. D'un pas de côté, il montra un petit ruisselet caché par des algues. — Clic, dit-il, presque gentiment, et montra le chemin secret.

— Merci, dit Lila, et Finn fit une petite révérence qui le rendit terriblement grand pour un si petit poisson.

Après la porte, les flaques s'élargirent. L'eau devint bleu clair comme du verre. Dans la plus grande, les ombres devinrent formes, et les formes devinrent poissons. Des queues argentées traçaient des boucles comme des lettres dans l'air.

— Finn ! chantèrent-ils, avec un chapelet de bulles qui fit plink contre le rocher.

— Maman ! Papa ! Je suis là ! s'exclama Finn en fonçant dans le banc. Il fit un tour rapide, puis revint vrombir vers Lila. — Voici Lila. Elle a trouvé la clé.

Les poissons se rapprochèrent et dessinèrent une ondulation en forme de cœur. La poitrine de Lila se réchauffa, tout comme l'étoile de mer sur son doigt.

Un poisson très vieux, aux yeux doux et sages, nagea près d'elle. — L'océan se souvient de la gentillesse, dit-il d'une voix douce et humide. Quand tu dois retrouver ton chemin, trempe ton ami-Étoile dans une flaque et écoute. L'eau te montrera le chemin le plus doux.

Finn hocha. — Tu peux garder l'étoile un peu ? Elle aime tes soins.

L'étoile de mer se tortilla comme pour approuver, puis glissa du doigt de Lila dans sa paume et s'y blottit, confortable comme un bouton. — Je la garderai jusqu'à l'aube, promit Lila. Ensuite je la ramènerai sur son rocher.

Finn scintilla sous la lumière de la lune. — J'enverrai parfois une étincelle sur les vagues pour dire bonjour.

Lila rit, d'un petit rire qui ressemble à un secret partagé entre amis. — Je la guetterai.

Les nuages dérivèrent. La lune brilla plus fort et étendit un long ruban d'argent sur l'eau. La famille de Finn glissa le long du chemin, queues battantes, écailles scintillant comme des étoiles. — Bonne nuit ! appelèrent-ils, et le son fut à la fois un soupir et une chanson.

Lila resta immobile un instant, puis remonta vers la première flaque. Elle caressa le dos de l'étoile de mer du bout du doigt. — Tu as bien travaillé, chuchota-t-elle. Nous avons bien fait toutes les deux.

Elle se percha sur un rocher lisse. La brise était douce et sentait le sel et le sommeil. La nuit s'étendit comme une couverture. Les vagues gardèrent leur shhh tranquille. Elle toucha la flaque encore une fois, et pendant un instant les bulles dessinèrent une petite carte qui ressemblait exactement au chemin qu'elles avaient suivi : autour de la porte, passé le crabe, jusqu'à la grande flaque bleue. Puis elle s'effaça, comme rangée en lieu sûr.

Lila posa l'étoile de mer dans une coupelle d'eau de mer peu profonde à côté d'elle. Elle y resta, bras minuscules détendus, un faible éclat nacré palpita très lentement. Elle entoura ses genoux de ses bras et regarda la lune peindre de longues lignes d'argent sur la mer.

Ses yeux devinrent lourds. Le sable refroidit sous ses pieds. Le phare au loin clignota, patient et tranquille. Quelque part, derrière les rochers, une queue de poisson avait peut-être encore agité une dernière vague d'étincelles. Lila sourit et se laissa envelopper par le calme. Autour d'elle, l'océan respirait, doux et sûr.

La pensée de ce soir : crois en toi
FIN`,Yg={title:"Murmures de l'Étoile des Marées",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/cover.jpg",content:Gg,narrators:[{id:"onyx",name:"Onyx",duration:455,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/fr/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:473,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/fr/shimmer.mp3"}],songs:[{id:"epic_adventure",title:"L'Étoile et le Poisson",style:"epic_adventure",url:"https://musicfile.api.box/YWZkOTcwNzUtZjYyNy00NzM5LTgxYjAtYzc4MTBmOGJmMjE4.mp3",duration:185,coverUrl:"https://musicfile.api.box/YWZkOTcwNzUtZjYyNy00NzM5LTgxYjAtYzc4MTBmOGJmMjE4.jpeg"}]},$g=`En el borde del océano, donde la arena se sentía fresca y polvorienta entre los dedos, el cielo de la tarde teñía el agua de azul plateado. Las olas hablaban con un suave shhh, y pequeñas conchitas estaban esparcidas como dulces por la orilla.

**Lila** se arrodilló junto a una poza entre las rocas y asomó la cabeza. El alga flotaba como cintas verdes. Un camarón pequeñito se alejó haciendo un salto. En el borde de la poza encontró una piedrecita con forma de estrella. Era lisa y tenía un brillo tenue. Cuando la recogió, se calentó en su palma, como si le gustara haber sido elegida.

—¡Perdona! —dijo una vocesita—. ¡Aquí abajo!

**Lila** se inclinó más. Un destello plateado recorrió la poza y salió como una moneda chapando. Un pez pequeño, brillante como la luz de la luna, la miró parpadeando.

—Soy **Finn** —dijo, las palabras burbujeando deprisa—. He perdido el Camino de la Luna. Mi familia nadó a casa al anochecer y yo… bueno, seguí un brillo y me perdí.

**Lila** apoyó la barbilla en las rodillas. —¿Qué es el Camino de la Luna?

—Es la cinta plateada que la luna deja sobre el agua —dijo **Finn**, moviendo las aletas con preocupación—. Lo seguimos hasta la cala tranquila. Pero se vinieron nubes y las rocas se volvieron esquinas y sombras. Necesito un amigo de tierra que haga una llave de ondas.

—¿Una llave de ondas? —inclinó la cabeza **Lila**.

**Finn** asintió. —Un dibujo en el agua. No salpicones. Suave. Solo manos pequeñas y cuidadosas pueden hacerlo. Llama al Camino de la Luna aunque las nubes tapen la luna. Y tienes una piedrecita estrellada. Eso ayuda.

**Lila** miró la piedrecita. —Puedo intentarlo —dijo, aunque le cosquilleaba el estómago—. Nunca he abierto el agua antes.

—Eso es perfecto —dijo **Finn** con alegría—. La primera vez la magia funciona mejor.

**Lila** se arremangó y puso la mano sobre la poza. Al tocar la superficie, la piedrecita dio un pequeño movimiento. Ella jadeó. La piedrecita desplegó cinco bracitos diminutos.

—¡Oh! —se rió **Lila**—. No eres una piedrecita. Eres una estrellita de mar dormilona.

La estrellita se extendió sobre su dedo como una mano suave y pequeña. Brilló con un perlita muy leve. Los ojos de **Finn** se abrieron como platos. —Mejor todavía —susurró—. Las amiguitas estelares recuerdan el cielo.

—¿Qué hago? —preguntó **Lila**.

—Traza círculos despacio —dijo **Finn**—. Nada de chapoteos. Suave. Al agua le gustan las visitas educadas.

**Lila** respiró hondo, con olor a sal y lugares lejanos. Hizo girar el dedo una vez. Muy rápido. La poza chapoteó. —Uy —dijo.

**Finn** dio un meneo animador. —Más suave. Como una pluma.

**Lila** cerró los ojos un momento y escuchó el shhh del mar. Creyó que podía ser tan ligera como una pluma. Dibujó un círculo más pequeño, luego otro, más despacio. La estrellita se calentó y un collar de burbujitas subió a encontrarse con su dedo.

Las nubes se abrieron un poco. La luz de la luna se coló entre ellas y besó la poza. Donde **Lila** trazó, el agua tembló y se formó un sendero perlado de burbujas. Se extendió desde la poza entre las rocas, tejió una cadena de bajíos y se abrió hacia el mar abierto.

**Finn** dio vueltas de alegría. —¡Lo lograste! ¡El Camino de la Luna llegó dentro de las pozas!

**Lila** sonrió con las mejillas rosadas. —¿Lo seguimos?

Ella anduvo por el borde, las sandalias en una mano y los dedos rozando el agua. El mar estaba fresco y sedoso. El sendero de burbujas brillaba débil, como una fila de farolillos. **Finn** nadaba debajo, al mismo paso. Cuando el sendero se apagaba, la estrellita en el dedo de **Lila** se iluminaba y la luz volvía.

Doblaron una esquina donde las rocas formaban una puerta. Allí estaba un cangrejo rayado que sostenía las pinzas como si fuera guardián.

—Clic-clac —dijo, golpeando una piedra.

—Hola —dijo **Lila** con educación—. Seguimos el Camino de la Luna. ¿Podemos pasar?

El cangrejo inclinó los ojos. **Lila** admiró su caparazón brillante. —Tus rayas son muy arregladas —añadió.

El cangrejo dejó de golpear. Con un paso de lado señaló un canalito estrecho escondido por las algas. —Click —dijo, casi amable, y mostró la senda secreta.

—Gracias —dijo **Lila**, y **Finn** hizo una pequeña reverencia que lo hizo parecer muy elegante para ser un pez tan pequeño.

Más allá de la puerta, las pozas se ensancharon. El agua se hizo profunda y cristalina, azul como vidrio. En la poza más grande, las sombras se volvieron formas y las formas se volvieron peces. Colas plateadas dibujaban bucles como si escribieran en el aire.

—¡Finn! —cantaron, con una lluvia de burbujitas que hicieron plink contra la roca.

—¡Mamá! ¡Papá! ¡Estoy aquí! —**Finn** se lanzó a la escuela. Dio una vuelta rápida y volvió a toda prisa hacia **Lila**. —Esta es Lila. Ella encontró la llave.

Los peces nadaron juntos y formaron una onda con forma de corazón. El pecho de **Lila** se calentó, igual que la estrellita en su dedo.

Un pez muy viejo, con ojos lentos y sabios, se acercó. —El océano recuerda la bondad —dijo con una voz suave y húmeda—. Cuando necesites encontrar tu camino, sumerge a tu amiguita estelar en una poza y escucha. El agua te mostrará el camino más tierno.

**Finn** se movió arriba y abajo. —¿Puedes quedarte un ratito con la estrellita? Le gusta que la cuiden.

La estrellita se retorció como si estuviera de acuerdo y se deslizó del dedo de **Lila** a su palma, acomodándose ahí, calentita como un botón. —La cuidaré hasta el amanecer —prometió **Lila**—. Luego la llevaré de vuelta a su roca.

**Finn** brilló a la luz de la luna. —Mandaré un destello en las olas para saludarte a veces.

**Lila** se rió, una risita pequeña que suena a secreto entre amigos. —Lo esperaré.

Las nubes siguieron su camino. La luna brilló más fuerte, dejando una larga cinta plateada sobre el agua. La familia de **Finn** recorrió el sendero, moviendo las colas, con las escamas titilando como estrellas. —¡Buenas noches! —gritaron, y el sonido fue como un suspiro y una canción a la vez.

**Lila** se quedó muy quieta y luego volvió al primer charco. Acarició la espalda de la estrellita con la punta de un dedo. —Lo hiciste bien —susurró—. Las dos lo hicimos.

Se sentó en una roca lisa. La brisa era suave y olía a sal y a sueño. La noche se recogía como una manta. Las olas mantuvieron su tranquilo shhh. Tocó la poza otra vez y por un instante las burbujas dibujaron un pequeño mapa que parecía exactamente el camino que habían tomado: alrededor de la puerta, pasando por el cangrejo, hasta la poza grande y azul. Luego se desvaneció, como si lo hubieran guardado con cuidado.

**Lila** puso la estrellita en un platito con agua de mar a su lado. Descansó allí, con los bracitos relajados y un tenue brillo perla latiendo muy despacio. Rodeó las rodillas con los brazos y miró la luna pintar largas líneas de plata en el mar.

Sus ojos se fueron poniendo pesados. La arena se enfrió bajo sus pies. El faro lejano parpadeó, paciente y calmado. En algún lugar, más allá de las rocas, la cola de un pez quizá lanzó una última estela de brillo. **Lila** sonrió y dejó que el silencio la envolviera. Por todas partes, el océano respiraba, tierno y seguro.

Pensamiento de esta noche: cree en ti
FIN`,Vg={title:"Susurros de la Estrella de la Marea",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/cover.jpg",content:$g,narrators:[{id:"onyx",name:"Onyx",duration:477,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/es/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:515,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/es/shimmer.mp3"}],songs:[{id:"epic_adventure",title:"La Piedra de Estrella",style:"epic_adventure",url:"https://musicfile.api.box/ZGU5YjdiNzgtNGVkMC00YTVhLTlkN2ItNmI5ZTgwYjQwZTkz.mp3",duration:240,coverUrl:"https://musicfile.api.box/ZGU5YjdiNzgtNGVkMC00YTVhLTlkN2ItNmI5ZTgwYjQwZTkz.jpeg"}]},Zg=`**Lila** kniete an einer Felsenpfütze und spähte hinein. Seetang trieb wie grüne Bänder. Eine kleine Garnele schnippte weg. Am Rand der Pfütze fand sie einen Kiesel in Sternform. Er war glatt und schimmerte ganz leise. Als sie ihn aufhob, wurde er in ihrer Hand warm, als würde er es mögen, ausgewählt zu sein.

„Entschuldigung!" sagte eine kleine Stimme. „Hier unten!"

Lila beugte sich näher. Ein silberner Blitz sauste um die Pfütze und hüpfte wie eine Münze hoch. Ein kleiner Fisch, so hell wie Mondlicht, blinzelte sie an.

„Ich bin **Finn**," sagte er, Worte wie Bläschen. „Ich habe den Mondweg verloren. Meine Familie schwamm bei Einbruch der Dämmerung nach Hause, und ich… nun, ich bin einem Leuchten nachgejagt und habe mich verirrt."

Lila legte ihr Kinn auf die Knie. „Was ist der Mondweg?"

„Das ist das silbrige Band, das der Mond aufs Wasser legt," erklärte Finn und seine Flossen neigten sich sorgenfroh. „Wir folgen ihm zur ruhigen Bucht. Aber Wolken sind gekommen, und die Felsen sind voller Ecken und Schatten. Ich brauche eine Land-Freundin, die einen Wellen-Schlüssel macht."

„Einen Wellen-Schlüssel?" Lila neigte den Kopf.

Finn nickte. „Ein Muster auf dem Wasser. Nur kleine, vorsichtige Hände können das. Es ruft den Mondweg, selbst wenn die Wolken den Mond verstecken. Und du hast einen Sternenkiesel! Das hilft."

Lila sah den Kiesel an. „Ich kann es versuchen," sagte sie, obwohl ihr Bauch vor Aufregung flatterte. „Ich habe noch nie Wasser geöffnet."

„Das ist perfekt," sagte Finn fröhlich. „Erstes Mal Zauber klappt am besten."

Lila krempelte die Ärmel hoch und streckte ihre Hand über die Pfütze. Als ihre Finger die Oberfläche berührten, zuckte der Sternenkiesel. Sie schnappte nach Luft. Der Kiesel entfaltete fünf winzige Arme.

„Oh!" Lila kicherte. „Du bist gar kein Kiesel. Du bist ein schläfriger Seestern."

Der kleine Seestern legte sich wie eine weiche kleine Hand um ihren Finger. Er glühte in einem zarten Perlmuttton. Finns Augen wurden rund. „Noch besser," flüsterte er. „Sternfreunde erinnern sich an den Himmel."

„Was soll ich tun?" fragte Lila.

„Zieh langsame Kreise," sagte Finn. „Nicht platschen. Sanft. Das Wasser mag höfliche Gäste."

Lila atmete tief, und die Luft roch nach Salz und fernen Orten. Sie zog einmal mit dem Finger einen Kreis. Zu schnell. Die Pfütze schwappte. „Ups," sagte sie.

Finn gab ermutigend einen Flossenschlag. „Leichter. Wie eine Feder."

Lila schloss kurz die Augen und lauschte dem Schhh des Meeres. Sie stellte sich vor, so leicht wie eine Feder zu sein. Sie malte einen kleineren Kreis, dann noch einen, langsamer. Der Seestern wurde wärmer, und eine Kette winziger Bläschen stieg zu ihrem Finger empor.

Die Wolken zogen dünner. Mondlicht schlüpfte dazwischen und küsste die Pfütze. Wo Lila nachzeichnete, bebte das Wasser, und ein perlmuttfarbener Blasenweg entstand. Er spannte sich von der Felsenpfütze, schlängelte sich durch eine Kette von Untiefen und reichte hinaus aufs offene Meer.

Finn drehte vor Freude Pirouetten. „Du hast es geschafft! Der Mondweg ist in die Pfützen gekommen!"

Lila grinste, ihre Wangen wurden rosa. „Sollen wir ihm folgen?"

Sie ging am Rand entlang, die Sandalen in einer Hand, die Zehen das Wasser streifend. Das Meer war kühl und seidig. Der Blasenweg leuchtete schwach, wie eine Kette kleiner Lampions. Finn schwamm darunter und hielt Schritt. Immer wenn der Weg dunkler wurde, leuchtete der Seestern an Lilas Finger heller, und das Licht kehrte zurück.

Sie bogen um eine Ecke, wo die Felsen ein Tor bildeten. Ein gestreifter Krebs stand dort, die Scheren wie ein Wächter erhoben. „Klick-klack," sagte er und klopfte an einen Stein.

„Hallo," sagte Lila höflich. „Wir folgen dem Mondweg. Können wir durchschlüpfen?"

Der Krebs neigte die Augen. Lila bewunderte seinen glänzenden Panzer. „Deine Streifen sind sehr klug," fügte sie hinzu.

Der Krebs hörte auf zu klopfen. Mit einem seitlichen Hüpfer deutete er auf einen schmalen Rinnsal, versteckt hinter Seetang. „Klick," sagte er, beinahe freundlich, und zeigte den geheimen Weg.

„Danke," sagte Lila, und Finn machte eine kleine Verbeugung, die ihn für einen so kleinen Fisch sehr groß erscheinen ließ.

Hinter dem Tor wurden die Pfützen weiter. Das Wasser wurde tiefer und klar wie Glas. In der größten Pfütze wurden Schatten zu Formen, und Formen wurden zu Fischen. Silberne Schwänze zogen Bögen wie Schrift in die Luft.

„Finn!" sangen sie, mit einem Wirbel von Bläschen, die gegen den Felsen plinkten.

„Mama! Papa! Ich bin hier!" Finn schoss in den Schwarm. Er drehte eine schnelle Runde und sauste dann zurück zu Lila. „Das ist Lila. Sie hat den Schlüssel gefunden."

Die Fische schwammen zusammen und bildeten eine herzförmige Welle. Lila wurde ganz warm ums Herz, so wie der Seestern in ihrer Hand.

Ein sehr alter Fisch mit langsamen, weisen Augen schwamm heran. „Der Ozean erinnert sich an Freundlichkeit," sagte er mit einer sanften, wässrigen Stimme. „Wenn ihr euren Weg finden möchtet, taucht euren Sternfreund in eine Pfütze und hört zu. Das Wasser zeigt euch den sanftesten Pfad."

Finn nickte. „Magst du den Seestern ein Weilchen behalten? Er mag deine Fürsorge."

Der Seestern wackelte, als würde er zustimmen, schlupfte dann von Lilas Finger in ihre Handfläche und kuschelte sich dort, gemütlich wie ein Knopf. „Ich passe gut darauf auf, bis zum Morgen," versprach Lila. „Dann bringe ich ihn zurück zu seinem Felsen."

Finn funkelte im Mondlicht. „Ich werde manchmal einen Funken auf den Wellen schicken, um Hallo zu sagen."

Lila lachte, dieses kleine Lachen, das sich anfühlt wie ein Geheimnis zwischen Freunden. „Ich werde danach Ausschau halten."

Die Wolken trieben weiter. Der Mond schien heller und legte ein silbernes Band weit übers Wasser. Finns Familie glitt den Weg entlang, Schwänze peitschten, Schuppen funkelten wie Sterne. „Gute Nacht!" riefen sie, und das Klang wie Seufzer und Lied zusammen.

Lila stand ganz still, dann ging sie zurück zur ersten Pfütze. Sie streichelte mit dem Fingerspitzen den Rücken des Seesterns. „Du hast es gut gemacht," flüsterte sie. „Wir haben es beide gut gemacht."

Sie setzte sich auf einen glatten Felsen. Die Brise war weich und roch nach Salz und Schlaf. Die Nacht legte sich wie eine Decke. Die Wellen behielten ihr ruhiges Schhh. Noch einmal berührte sie die Pfütze, und für einen Augenblick zeichneten die Bläschen eine winzige Karte, die genau wie der Weg aussah, den sie genommen hatten: rund ums Tor, am Krebs vorbei, zur großen blauen Pfütze. Dann verschwand sie, als wäre sie sicher verstaut.

Lila stellte den Seestern in eine flache Schale mit Meerwasser neben sich. Er ruhte dort, die kleinen Arme entspannt, ein schwaches Perlmuttglühen pulste ganz langsam. Sie schlang die Arme um die Knie und sah zu, wie der Mond lange silberne Linien aufs Meer malte.

Ihre Augen wurden schwer. Der Sand kühlte unter den Füßen. Der weit entfernte Leuchtturm blinkte, geduldig und ruhig. Irgendwo hinter den Felsen konnte ein Fischschwanz noch eine letzte Funkelwelle schlagen. Lila lächelte und ließ die Stille über sich kommen. Überall atmete der Ozean, sanft und sicher.

Der heutige Abendgedanke: Glaub an dich selbst
ENDE`,Qg={title:"Flüstern des Gezeitensterns",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/cover.jpg",content:Zg,narrators:[{id:"onyx",name:"Onyx",duration:477,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/de/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:475,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/de/shimmer.mp3"}],songs:[{id:"epic_adventure",title:"Mondpfad Lied",style:"epic_adventure",url:"https://musicfile.api.box/MDk3ZDBkZjItZTlkYS00ZWZlLThkMGMtZDg1YWEyNWI0NTc5.mp3",duration:139,coverUrl:"https://musicfile.api.box/MDk3ZDBkZjItZTlkYS00ZWZlLThkMGMtZDg1YWEyNWI0NTc5.jpeg"}]},Kg=`Al bordo dell'oceano, dove la sabbia era fresca e polverosa tra le dita dei piedi, il cielo della sera trasformava l'acqua in argento-blu. Le onde parlavano con un morbido shhh, e piccole conchiglie erano sparse sulla riva come caramelle.

**Lila** si inginocchiò vicino a una pozza tra le rocce e guardò dentro. Le alghe ondeggiavano come nastri verdi. Un piccolo gamberetto scattò via. Sul bordo della pozza trovò un sasso a forma di stella. Era liscio e brillava appena. Quando lo raccolse, si scaldò nel palmo, come se fosse contento di essere scelto.

"Scusami!" disse una vocina. "Giù qui!"

Lila si chinò più vicino. Un lampo d'argento sfrecciò intorno alla pozza e spuntò su come una moneta. Un pesciolino, luminoso come la luce della luna, la guardò a occhi spalancati.

"Sono **Finn**," disse, le parole che scoppiettavano veloci come bollicine. "Ho perso il Sentiero della Luna. La mia famiglia è nuotata a casa al crepuscolo, e io… beh, ho inseguito un bagliore e mi sono perso."

Lila poggiò il mento sulle ginocchia. "Cos'è il Sentiero della Luna?"

"È il nastro argentato che la luna stende sull'acqua," disse Finn, le pinne inclinate preoccupate. "Lo seguiamo fino alla cala tranquilla. Ma sono arrivate nuvole, e le rocce fanno angoli e ombre. Ho bisogno di un'amica che viva sulla terra per fare una chiave di onde."

"Una chiave di onde?" Lila inclinò la testa.

Finn annuì. "Un disegno sull'acqua. Non schizzi. Delicato. Solo mani piccole e attente possono farlo. Chiama il Sentiero della Luna anche quando le nuvole nascondono la luna. E tu hai una stellina! Quella aiuta."

Lila guardò la stellina. "Posso provare," disse, anche se lo stomaco le faceva un leggero svolazzo. "Non ho mai aperto l'acqua prima."

"Perfetto," disse Finn tutto contento. "La magia funziona meglio la prima volta."

Lila tirò su le maniche e allungò la mano sulla pozza. Quando le sue dita toccarono la superficie, la stellina fece un piccolo movimento. Lì per lì lei sospirò. La stellina spiegò cinque bracciolini.

"Oh!" Lila rise. "Non sei un sasso. Sei una stellina assonnata."

La piccola stellina si allungò sul suo dito come una manina morbida. Luccicava di una perla appena percettibile. Gli occhi di Finn diventarono tondi. "Ancora meglio," sussurrò. "Le stelline amiche ricordano il cielo."

"Cosa devo fare?" chiese Lila.

"Disegna cerchi lenti," disse Finn. "Niente schizzi. Con delicatezza. L'acqua ama i visitatori educati."

Lila inspirò un profumo di sale e posti lontani. Fece ruotare il dito una volta. Troppo veloce. La pozza schizzò. "Ops," disse.

Finn fece un colpetto incoraggiante. "Più dolce. Come una piuma."

Lila chiuse gli occhi un momento e ascoltò il shhh del mare. Si convinse di poter essere leggera come una piuma. Tracciò un cerchietto più piccolo, poi un altro, più lento. La stellina si scaldò e una collana di bollicine salì a incontrare il suo dito.

Le nuvole si diradarono. La luna scivolò tra di loro e baciò la pozza. Dove Lila aveva tracciato, l'acqua tremolò, e si formò un sentiero perlaceo di bollicine. Si allungò dalla pozza tra le rocce, attraversò una catena di acque basse e si protese verso il mare aperto.

Finn fece una giravolta di gioia. "Ce l'hai fatta! Il Sentiero della Luna è entrato nelle pozze!"

Lila sorrise, le guance rosate. "Lo seguiamo?"

Camminò sul bordo, con i sandali in una mano e le dita dei piedi a sfiorare l'acqua. Il mare era fresco e setoso. Il sentiero di bollicine brillava piano, come una fila di lanterne. Finn nuotava sotto, al passo. Ogni volta che il sentiero si affievoliva, la stellina sul dito di Lila si illuminava, e la luce tornava.

Svoltarono dove le rocce formavano un varco. Un granchio a strisce stava lì con le chele alzate come un guardiano. "Click-clack," disse, batterando su una pietra.

"Ciao," disse Lila con cortesia. "Seguiamo il Sentiero della Luna. Possiamo passare?"

Il granchio inclinò gli occhi. Lila ammirò il suo carapace lucido. "Le tue strisce sono molto eleganti," aggiunse.

Il granchio smise di battere. Con un passo laterale indicò un canale stretto nascosto tra le alghe. "Click," disse, quasi gentile, e mostrò la via segreta.

"Grazie," disse Lila, e Finn fece un piccolo inchino che lo fece sembrare molto importante per essere un pesciolino così piccolo.

Oltre il varco, le pozze si allargarono. L'acqua si fece profonda e trasparente come vetro blu. Nella pozza più grande, le ombre diventavano forme, e le forme diventavano pesci. Code argentee disegnavano giri come se scrivessero nell'aria.

"Finn!" cantarono, con un sciame di bollicine che andò plink contro la roccia.

"Mamma! Papà! Sono qui!" Finn sfrecciò nel banco. Fece un giro veloce, poi tornò corricchiando da Lila. "Questa è Lila. Ha trovato la chiave."

I pesci si misero insieme e disegnarono un'onda a forma di cuore. Il petto di Lila si riscaldò, proprio come la stellina sul suo dito.

Un pesce molto vecchio, con occhi lenti e saggi, si avvicinò. "L'oceano ricorda la gentilezza," disse con voce morbida e acquosa. "Quando hai bisogno di trovare la strada, immergi la tua stellina in una pozza e ascolta. L'acqua ti mostrerà il sentiero più dolce."

Finn fece su e giù. "Tu puoi tenere la stellina un po'? Le piace come la curi."

La stellina si contorse come per dire di sì, poi scivolò dal dito di Lila nella sua mano e si sistemò lì, comoda come un bottoncino. "La terrò fino all'alba," promise Lila. "Poi la riporterò alla sua roccia."

Finn scintillò nella luce della luna. "Ogni tanto manderò uno scintillio sulle onde per salutarti."

Lila rise, quel tipo di risata piccola che sembra un segreto tra amici. "Lo cercherò."

Le nuvole passarono lente. La luna brillò più forte, stendendo un nastro d'argento lontano sull'acqua. La famiglia di Finn scivolò lungo il sentiero, code che sbattevano, scaglie che scintillavano come stelle. "Buonanotte!" chiamarono, e il suono fu come un sospiro e una canzone insieme.

Lila rimase molto ferma, poi tornò con passi leggeri alla prima pozza. Accarezzò il dorso della stellina con la punta di un dito. "Hai fatto bene," sussurrò. "Ce l'abbiamo fatta insieme."

Si sedette su una roccia liscia. La brezza era morbida e odorava di sale e di sonno. La notte si raccolse come una coperta. Le onde continuarono il loro shhh tranquillo. Toccò la pozza un'altra volta, e per un momento le bollicine disegnarono una piccola mappa proprio uguale al percorso che avevano fatto: intorno al varco, oltre il granchio, fino alla grande pozza blu. Poi svanì, come se fosse stata messa al sicuro.

Lila mise la stellina in un piccolo piattino d'acqua di mare accanto a sé. Riposò lì, i braccini rilassati, un lieve bagliore di perla che pulsava piano. Abbracciò le ginocchia e guardò la luna tracciare lunghe linee d'argento sul mare.

Gli occhi si fecero pesanti. La sabbia si raffreddò sotto i piedi. Il faro lontano lampeggiò, paziente e calmo. Da qualche parte oltre le rocce, una coda di pesce potrebbe aver dato l'ultimo colpetto di scintilla. Lila sorrise e lasciò che il silenzio la cullasse. Tutto intorno, l'oceano respirava, dolce e sicuro.

Il pensiero di stanotte: credi in te stessa
FINE`,Jg={title:"Sussurri della Stella della Marea",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/cover.jpg",content:Kg,narrators:[{id:"onyx",name:"Onyx",duration:470,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/it/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:476,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/it/shimmer.mp3"}],songs:[{id:"epic_adventure",title:"La Canzone del Sentiero Lunare",style:"epic_adventure",url:"https://musicfile.api.box/Nzg5YzVhOGQtNGZhMi00MDYwLTgyNTctMzkyODg0NGY3MTMz.mp3",duration:192,coverUrl:"https://musicfile.api.box/Nzg5YzVhOGQtNGZhMi00MDYwLTgyNTctMzkyODg0NGY3MTMz.jpeg"}]},Xg=`Na beira do oceano, onde a areia ficava fresca e fininha entre os pés, o céu da noite pintava a água de azul-prateado. As ondas sussurravam um suave shhh, e conchinhas pequeninas estavam espalhadas pela praia como doces.

**Lila** ajoelhou-se junto a uma poça entre as rochas e espreitou para dentro. As algas flutuavam como fitas verdes. Um camarão minúsculo deu um salto e foi-se embora. No rebordo da poça, ela encontrou uma pedrinha em forma de estrela. Era lisa e tinha um brilho ténue. Quando a pegou, aqueceu na palma da mão, como se gostasse de ser escolhida.

— Com licença! — disse uma vozinha. — Aqui embaixo!

Lila inclinou-se mais. Um relâmpago prateado passeou à volta da poça e saltou para cima como uma moeda. Um peixe pequenino, brilhante como luz da lua, piscou para ela.

— Sou o **Finn** — disse ele, as palavras a borbulhar rápido. — Perdi o Caminho da Lua. A minha família foi para casa ao anoitecer e eu… bem, segui um brilho e acabei por me perder.

Lila apoiou o queixo nos joelhos. — O que é o Caminho da Lua?

— É a fita prateada que a lua põe sobre a água — explicou Finn, as nadadeiras a inclinar-se preocupado. — Seguimos por ela até uma enseada calma. Mas as nuvens vieram, e as pedras ficaram cheias de cantos e sombras. Preciso de um amigo da terra para fazer uma chave de ondazinha.

— Uma chave de ondazinha? — Lila inclinou a cabeça.

Finn acenou. — Um padrão na água. Não é pancada, é cuidado. Só mãos pequenas e mimosas conseguem fazê-lo. Chama o Caminho da Lua mesmo quando as nuvens escondem a lua. E tu tens uma pedrinha em forma de estrela! Isso ajuda.

Lila olhou para a pedrinha. — Posso tentar — disse, apesar de o estômago fazer-lhe cócegas. — Nunca abri água antes.

— Isso é perfeito — disse Finn, luminoso de alegria. — A magia da primeira vez é sempre a melhor.

Lila arregaçou as mangas e esticou a mão sobre a poça. Quando os seus dedos tocaram a superfície, a pedrinha fez um pequeno movimento. Ela arfou. A pedrinha desenrolou cinco bracinhos minúsculos.

— Oh! — Lila riu. — Tu não és uma pedrinha. És uma estrela-do-mar sonolenta.

A pequena estrela-do-mar abriu-se no dedo dela como uma mãozinha macia. Tinha um brilho pérola muito suave. Os olhos de Finn arregalaram-se. — Ainda melhor — sussurrou. — Amigos de estrela lembram-se do céu.

— O que eu faço? — perguntou Lila.

— Desenha círculos lentos — disse Finn. — Nada de salpicos. Suave. A água gosta de visitantes educados.

Lila respirou fundo, com cheiro a sal e a lugares distantes. Rodopiou o dedo uma vez. Devagar demais. A poça espirrou. — Ups — disse ela.

Finn fez um movimento encorajador com a cauda. — Mais suave. Como uma pena.

Lila fechou os olhos por um momento e ouviu o shhh do mar. Acreditou que podia ser leve como uma pena. Desenhou um círculo menor, depois outro, mais devagar. A estrela-do-mar aqueceu, e um colar de bolhinhas subiu para encontrar o seu dedo.

As nuvens afinaram. A luz da lua escorregou entre elas e beijou a poça. Onde Lila traçou, a água estremeceu, e um caminho perolado de bolhas se formou. Estendeu-se a partir da poça, atravessou uma cadeia de baixios e alcançou o mar aberto.

Finn rodopiou de alegria. — Conseguiste! O Caminho da Lua entrou nas poças!

Lila sorriu, com as bochechas coradas. — Vamos seguir?

Ela caminhou pela beira, com as sandálias numa mão e os dedos dos pés a roçar a água. O mar estava fresco e sedoso. O caminho de bolhas brilhava baixinho, como um cordão de lanternas. Finn nadava por baixo, a acompanhar. Sempre que o caminho enfraquecia, a estrela-do-mar no dedo de Lila brilhava mais, e a luz voltava.

Viraram a esquina onde as rochas faziam um portal. Um caranguejo às riscas estava lá, com as garras erguidas como um porteiro. — Tic-tac — disse, a bater numa pedra.

— Olá — disse Lila educadamente. — Estamos a seguir o Caminho da Lua. Podemos passar?

O caranguejo inclinou os olhos. Lila admirou o seu casco lustroso. — As tuas riscas são muito elegantes — acrescentou.

O caranguejo parou de bater. Com um andar de lado, apontou para um corredorzinho estreito escondido pelas algas. — Tic — disse, quase amigável, e mostrou o caminho secreto.

— Obrigada — disse Lila, e Finn fez uma pequena reverência que o fez parecer muito pomposo para um peixe tão pequeno.

Passado o portal, as poças alargaram-se. A água tornou-se de um azul transparente como vidro. Na maior delas, sombras tornaram-se formas, e as formas tornaram-se peixes. Caudas prateadas desenhavam loops como se escrevessem no ar.

— Finn! — cantaram eles, com um rajado de bolhas que fizeram plink contra a rocha.

— Mãe! Pai! Estou aqui! — Finn disparou para o cardume. Rodopiou rápido, depois voltou para Lila. — Esta é a Lila. Ela encontrou a chave.

Os peixes juntaram-se e fizeram uma ondulação em forma de coração. O peito de Lila aqueceu, como o brilho da estrela-do-mar no seu dedo.

Um peixe muito velho, com olhos lentos e sábios, aproximou-se. — O mar lembra-se da bondade — disse numa voz suave e de água. — Sempre que precisares de encontrar o caminho, mergulha a tua amiga-estrela numa poça e escuta. A água mostrar-te-á o caminho mais tranquilo.

Finn balançou. — Ficas com a estrela-do-mar um bocadinho? Ela gosta do teu cuidado.

A estrela-do-mar mexeu-se como a dizer que sim, depois deslizou do dedo de Lila para a sua palma e acomodou-se ali, quentinha como um botão. — Vou cuidar dela até ao amanhecer — prometeu Lila. — Depois levo-a de volta à sua rocha.

Finn cintilou ao luar. — Vou mandar um brilho nas ondas para dizer olá de vez em quando.

Lila riu, aquela risada pequenina que parece um segredo entre amigos. — Vou ficar à espera.

As nuvens seguiram o seu caminho. A lua brilhou mais forte, estendendo uma fita prateada pelo mar. A família de Finn deslizou pelo caminho, caudas a abanar, escamas a piscarem como estrelas. — Boa noite! — chamaram, e o som pareceu um suspiro e uma cantiga juntos.

Lila ficou muito quieta, depois voltou a caminho da primeira poça. Acariciou as costas da estrela-do-mar com a ponta de um dedo. — Portaste-te bem — sussurrou. — Nós portámo-nos bem.

Ela sentou-se numa rocha lisa. A brisa era suave e cheirava a sal e a sono. A noite juntou-se como um cobertor. As ondas mantiveram o seu shhh tranquilo. Tocou na poça mais uma vez, e por um momento as bolhas desenharam um mapa pequeno igualzinho ao caminho que tinham feito: à volta do portal, passado o caranguejo, até à grande poça azul. Depois desfez-se, como se tivesse sido guardado com cuidado.

Lila pôs a estrela-do-mar numa tigelinha com água do mar ao seu lado. Ela descansou ali, braços minúsculos relaxados, um brilho pérola a pulsar muito devagar. Abraçou os joelhos e observou a lua pintar longas linhas prateadas no mar.

Os olhos ficaram pesados. A areia arrefeceu debaixo dos pés. O farol ao longe piscou, paciente e calmo, como os faróis das nossas costas portuguesas que guiam os barcos à noite. Algures além das rochas, a cauda de um peixe pode ter dado um último cintilar de luz. Lila sorriu e deixou o silêncio embalá-la. À volta, o oceano respirava, suave e certo.

O pensamento desta noite: acredita em ti próprio
FIM`,ex={title:"Sussurros da Estrela da Maré",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/cover.jpg",content:Xg,narrators:[{id:"onyx",name:"Onyx",duration:468,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/pt/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:495,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/pt/shimmer.mp3"}],songs:[{id:"epic_adventure",title:"Estrela e Mar",style:"epic_adventure",url:"https://musicfile.api.box/YzA2Yzc5M2EtMDIxZC00MWJmLWEyNDAtMTYwM2JlOTk4ODkw.mp3",duration:229,coverUrl:"https://musicfile.api.box/YzA2Yzc5M2EtMDIxZC00MWJmLWEyNDAtMTYwM2JlOTk4ODkw.jpeg"}]},tx=`Aan de rand van de oceaan, waar het zand koel en poederig tussen je tenen voelde, kleurde de avondlucht het water zilverblauw. De golven praatten zacht, sssj, en kleine schelpen lagen verspreid over het strand als snoepjes.

**Lila** knielde bij een plonskreek en keek erin. Zeewier dreef als groene linten. Een klein garnaaltje schoot weg. Op de rand van de kreek vond ze een steentje in de vorm van een ster. Het was glad en had een heel klein sprankje. Toen ze het oppakte, werd het warm in haar hand, alsof het blij was gekozen te zijn.

"Pardon!" zei een klein stemmetje. "Hier beneden!"

Lila boog voorover. Een zilverkleurig flitsje zoefde rond de kreek en sprong omhoog als een muntje. Een klein vissie, licht als maanlicht, knipperde naar haar.

"Ik ben **Finn**," zei hij, woorden bubbeld snel. "Ik ben het Maanpad kwijtgeraakt. Mijn familie zwom naar huis bij de schemering, en ik… nou, ik heb een gloedje achterna gezwommen en raakte de weg kwijt."

Lila legde haar kin op haar knieën. "Wat is het Maanpad?"

"Het is het zilveren lint dat de maan op het water legt," zei Finn, zijn vinnen een beetje bezorgd gekanteld. "Wij volgen het naar de stille baai. Maar er kwamen wolken, en de rotsen zijn maar hoeken en schaduwen. Ik heb een land-vriend nodig om een rimpelsleutel te maken."

"Een rimpelsleutel?" Lila kantelde haar hoofd.

Finn knikte. "Een patroon op het water. Geen gespetter. Alleen kleine, zachte handen kunnen het maken. Het roept het Maanpad, zelfs als de wolken de maan verbergen. En jij hebt een ster-steentje! Dat helpt."

Lila keek naar het steentje. "Ik kan het proberen," zei ze, al voelde haar buik een beetje zenuwachtig. "Ik heb nog nooit water opengelaten."

"Dat is perfect," zei Finn vrolijk. "De eerste keer werkt magie vaak het beste."

Lila stropte haar mouwen op en stak haar hand over de kreek. Zodra haar vingers het water raakten, maakte het ster-steentje een kleine beweging. Ze zuchtte van verbazing. Het steentje ontvouwde vijf piepkleine armpjes.

"Oh!" Lila giechelde. "Je bent helemaal geen steentje. Je bent een slaperig zeestertje."

Het kleine zeestertje spreidde zich over haar vinger als een zacht handje. Het gaf een vaag parelachtig licht. Finn keek met grote ogen. "Nog beter," fluisterde hij. "Ster-vriendjes herinneren zich de lucht."

"Wat moet ik doen?" vroeg Lila.

"Teken langzaam cirkels," zei Finn. "Niet spetteren. Zachtjes. Het water houdt van beleefde bezoekers."

Lila haalde adem die naar zout en verre plekken rook. Ze maakte één draai met haar vinger. Te snel. De kreek klotste. "Oeps," zei ze.

Finn gaf een bemoedigende zwiep. "Zachter. Zoals een veertje."

Lila deed haar ogen even dicht en luisterde naar het sssj van de zee. Ze geloofde dat ze licht als een veertje kon zijn. Ze tekende een kleine cirkel, daarna nog één, langzamer. Het zeestertje werd warmer en een ketting van piepkleine belletjes steeg op om haar vinger te begroeten.

De wolken trokken wat uit elkaar. Maanlicht glipte ertussen en kuste de kreek. Waar Lila tekende, rilde het water en vormde zich een parelpad van bellen. Het liep vanaf de plonskreek, kronkelde door een rij ondieptes en reikte naar de open zee.

Finn draaide van blijdschap. "Je hebt het gedaan! Het Maanpad kwam de poeltjes in!"

Lila grijnsde, haar wangen roze. "Gaan we het volgen?"

Ze liep langs de rand, sandalen in één hand, tenen die het water streelden. De zee voelde koel en zijdezacht. Het bellenpad gloeide zacht, als een rij lampionnetjes. Finn zwom eronder en hield het tempo bij. Wanneer het pad even dof werd, lichtte het zeestertje op Lila's vinger op en kwam het licht terug.

Ze gingen om een hoek waar de rotsen een poort vormden. Een gestreepte krab stond daar met zijn scharen opgeheven als een bewaker. "Klik-klak," zei hij, tikte op een steen.

"Hallo," zei Lila beleefd. "We volgen het Maanpad. Mogen we erlangs glippen?"

De krab kantelde zijn ogen. Lila keek naar zijn glanzende schild. "Jouw strepen zijn erg stijlvol," voegde ze erbij.

De krab stopte met tikken. Met een schuine stap wees hij op een smal geultje dat verstopt lag achter zeewier. "Klik," zei hij, bijna vriendelijk, en liet het geheime pad zien.

"Dank je," zei Lila, en Finn boog lichtjes, wat hem heel plechtig deed lijken voor zo'n klein vissie.

Voorbij de poort werden de poelen groter. Het water werd diep en helder als glasblauw. In het grootste poeltje werden schaduwen vormen, en vormen werden vissen. Zilveren staarten trokken lussen als letters in de lucht.

"Finn!" zongen ze, met een plons van belletjes die tegen de rots tikten.

"Mam! Pap! Ik ben hier!" spatte Finn naar de school. Hij draaide een snelle cirkel en zoefde terug naar Lila. "Dit is Lila. Zij vond de sleutel."

De vissen zwommen samen en maakten een hartvormige rimpel. Lila voelde warmte in haar borst, net als het sterretje op haar vinger.

Een zeer oude vis met trage, wijze ogen zwom dichterbij. "De oceaan onthoudt vriendelijkheid," zei hij met een zachte, waterige stem. "Wanneer je de weg zoekt, doop je je stervriend in een poel en luister je. Het water toont je het zachtste pad."

Finn bobbelde. "Wil je het zeestertje een tijdje bewaren? Het vindt het fijn bij jou."

Het zeestertje kronkelde alsof het instemde, gleed van Lila's vinger naar haar handpalm en nestelde zich daar, warm en knus. "Ik bewaar hem tot zonsopgang," beloofde Lila. "Dan breng ik het terug naar zijn rots."

Finn fonkelde in het maanlicht. "Ik zal soms een sprankeltje over de golven sturen om hallo te zeggen."

Lila lachte, dat kleine lachje dat voelt als een geheim tussen vrienden. "Ik zal erop letten."

De wolken dreven verder. De maan scheen helderder en legde een zilveren lint ver over het water. Finns familie gleed over het pad, staarten zwiepend, schubben twinkelend als sterren. "Welterusten!" riepen ze, en de klank voelde als een zucht en een lied tegelijk.

Lila stond heel stil en liep toen terug naar de eerste kreek. Ze streek zachtjes over de rug van het zeestertje met het puntje van één vinger. "Je deed het goed," fluisterde ze. "We deden het allebei goed."

Ze ging zitten op een gladde rots. De bries was zacht en rook naar zout en slapen. De nacht verzamelde zich als een deken. De golven hielden hun stille sssj. Ze raakte de kreek nog één keer aan en voor een ogenblik tekenden de belletjes een klein kaartje dat precies leek op het pad dat ze gevolgd hadden: om de poort, langs de krab, naar het grote blauwe poeltje. Toen vervaagde het, alsof het veilig werd opgeborgen.

Lila zette het zeestertje in een ondiep bakje met zeewater naast zich. Het rustte daar, de armpjes ontspannen, een zacht parelachtig lichtje dat heel langzaam pulste. Ze sloeg haar armen om haar knieën en keek hoe de maan lange zilveren lijnen op de zee schilderde.

Haar ogen werden zwaar. Het zand voelde koud onder haar voeten. De vuurtoren in de verte knipperde, geduldig en rustig. Iets voorbij de rotsen sloeg misschien nog een vissestaart een laatste sprankeltje over het water. Lila glimlachte en liet de stilte haar meenemen. Om haar heen ademde de oceaan, zacht en zeker.

Gedachte voor vanavond: geloof in jezelf
HET EINDE`,nx={title:"Fluisteringen van de Getijdenster",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/cover.jpg",content:tx,narrators:[{id:"onyx",name:"Onyx",duration:474,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/nl/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:490,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/nl/shimmer.mp3"}],songs:[]},ax=`Na brzegu oceanu, gdzie piasek był chłodny i miękki pod palcami, wieczorne niebo zamieniało wodę w srebrno-niebieskie lustro. Fale szumiały cichym „szzzz", a malutkie muszelki leżały rozsiane jak słodkości na piasku.

**Lila** uklękła przy rozlewisku i zajrzała do środka. Wodorosty pływały jak zielone wstążki. Maleńka krewetka strzeliła ogonem i odpłynęła. Na brzegku rozlewiska znalazła kamyk w kształcie gwiazdki. Był gładki i delikatnie się błyszczał. Kiedy go podniosła, zrobił się cieplejszy w jej dłoni, jakby cieszył się, że go wybrała.

— Przepraszam! — rozległ się mały głos. — Tutaj na dole!

Lila pochyliła się jeszcze bliżej. Srebrzysty błysk zakręcił wokół rozlewiska i wyskoczył jak moneta. Mała rybka, jasna jak blask księżyca, mrugnęła do niej.

— Jestem **Finn** — powiedział, słowa bąbelkowały szybko. — Zgubiłem Księżycową Ścieżkę. Moja rodzina popłynęła do domu o zmierzchu, a ja… no cóż, pogoniłem za światłem i się pogubiłem.

Lila oparła podbródek na kolanach. — Co to jest Księżycowa Ścieżka?

— To srebrna wstęga, którą księżyc kładzie na wodzie — powiedział Finn, płetwy układając w zmartwieniu. — Płyniemy nią do spokojnej zatoki. Ale chmury przyszły, a skały robią kąty i cienie. Potrzebuję przyjaciela z lądu, żeby zrobić klucz z fal.

— Klucz z fal? — Lila przekrzywiła głowę.

Finn skinął. — Wzór na wodzie. Tylko małe, delikatne ręce potrafią go stworzyć. Przywołuje Księżycową Ścieżkę, nawet gdy chmury ukryją księżyc. A ty masz kamyczek-gwiazdkę! To pomaga.

Lila spojrzała na kamyk. — Spróbuję — powiedziała, choć w brzuszku zamigotało jej trochę niepokoju. — Nigdy wcześniej nie otwierałam wody.

— Właśnie tak najlepiej — powiedział Finn radośnie. — Magia przy pierwszym razie działa najsilniej.

Lila podwinęła rękawki i wyciągnęła dłoń nad rozlewisko. Kiedy palce dotknęły powierzchni, gwiazdkowy kamyk drgnął. Zaskoczyła się. Kamyk rozłożył pięć maleńkich ramion.

— Ojej! — Lila zachichotała. — To wcale nie kamyk. To śpiąca rozgwiazda.

Mała rozgwiazda rozwinęła się na jej palcu jak mała, miękka rączka. Świeciła najdelikatniejszym perłowym blaskiem. Oczy Finna zrobiły się okrągłe. — Nawet lepiej — wyszeptał. — Przyjaciele-gwiazdy pamiętają niebo.

— Co mam robić? — zapytała Lila.

— Rysuj powolne kółka — powiedział Finn. — Bez chlapania. Delikatnie. Woda lubi grzecznych gości.

Lila wzięła oddech, który pachniał solą i dalekimi miejscami. Zakreśliła palcem raz. Za szybko. Rozlewisko prysnęło. — Ups — powiedziała.

Finn zachęcił ją figlarnym ruchem płetwy. — Łagodniej. Jak piórko.

Lila zamknęła na chwilę oczy i nasłuchiwała szz szz morza. Uwierzyła, że może być lekka jak piórko. Narysowała mniejsze kółko, potem jeszcze jedno, jeszcze wolniej. Rozgwiazda zrobiła się cieplejsza, a z powierzchni cisnęły się maleńkie bąbelki, które spotkały jej palec w szyku jak korale.

Chmury przerzedziły się. Księżyc przebił się między nimi i pocałował rozlewisko. Tam, gdzie Lila rysowała, woda zadrżała, a perłowa ścieżka bąbelków uformowała się. Ciągnęła się od rozlewiska, splatała przez łańcuszek płytkich zatoczek i sięgała ku otwartemu morzu.

Finn zakręcił się z radości. — Udało ci się! Księżycowa Ścieżka weszła w oczka wodne!

Lila uśmiechnęła się, policzki miała różowe. — Pójdziemy nią? — zapytała.

Szła po krawędzi, sandałki trzymała w jednej ręce, palce stópek muskały wodę. Morze było chłodne i jedwabiste. Ścieżka z bąbelków świeciła delikatnie, jak sznur maleńkich lampionów. Finn płynął niżej, dotrzymywał kroku. Kiedy ścieżka przygasała, rozgwiazda na palcu Lili rozjaśniała się i światło wracało.

Skręcili za róg, gdzie skały tworzyły bramkę. Stał tam pasiasty krab, szczypce trzymał jak strażnik. — Klik-klak — powiedział, stukając w kamień.

— Dzień dobry — powiedziała Lila grzecznie. — Idziemy za Księżycową Ścieżką. Czy możemy się prześlizgnąć?

Krab przechylił oczka. Lila podziwiała jego błyszczącą skorupę. — Twoje pasy są bardzo eleganckie — dodała.

Krab przestał stukać. Zboczył na bok i wskazał wąski przesmyk ukryty w wodorostach. — Klik — powiedział prawie po przyjacielsku i pokazał tajną drogę.

— Dziękujemy — powiedziała Lila, a Finn ukłonił się lekko, co sprawiło, że wyglądał bardzo dostojnie jak na taką malutką rybkę.

Za bramką oczka wodne się powiększyły. Woda pogłębiła się do przejrzystego, szklanego błękitu. W największym oczku cienie stały się kształtami, a kształty zamieniły się w ryby. Srebrne ogony rysowały pętle jak litery na niebie.

— Finn! — zaśpiewały, posyłając bąbelkowy deszczyk, który stuknął o kamień.

— Mamo! Tato! Jestem tutaj! — Finn wpadł w ławicę. Zakręcił szybkie kółko, potem pofrunął z powrotem do Lili. — To jest Lila. Znalazła klucz.

Ryby zebrały się razem i zrobiły serduszkowy falowy kształt. Serce Lili zrobiło się ciepłe, jak rozgwiazda na jej palcu.

Przysunęła się bardzo stara ryba, z wolnymi, mądrymi oczami. — Ocean pamięta dobroć — powiedziała miękkim, wodnistym głosem. — Gdy będziesz potrzebować drogi, zanurz swojego gwiezdnego przyjaciela w oczku i posłuchaj. Woda pokaże najłagodniejszą ścieżkę.

Finn podskoczył. — Czy możesz potrzymać rozgwiazdę na chwilę? Lubi twoją opiekę.

Rozgwiazda pomachała ramionkami jak na zgodę, potem przemieściła się z palca Lili do jej dłoni i ułożyła się tam, przytulna jak guzik. — Potrzymam ją do świtu — obiecała Lila. — Potem oddam na skałę.

Finn zamrugał w księżycowym blasku. — Będę czasem wysyłać drobne błyski na falach, żeby powiedzieć „cześć".

Lila roześmiała się takim małym śmiechem, który jest jak tajemnica dzielona między przyjaciółmi. — Będę na nie patrzeć — powiedziała.

Chmury płynęły dalej. Księżyc świecił jaśniej i kładł srebrną wstęgę daleko po wodzie. Rodzina Finna ślizgała się po ścieżce, ogony migały, łuski iskrzyły jak gwiazdki. — Dobranoc! — zawołały, a dźwięk ten był jak westchnienie i piosenka zarazem.

Lila stała bardzo spokojnie, potem wróciła ścieżką do pierwszego rozlewiska. Przesunęła palcem po grzbiecie rozgwiazdy. — Dobrze wam poszło — wyszeptała. — Dobrze nam poszło.

Usiadła na gładkiej skale. Wiatr był miękki i pachniał solą i snem. Noc złożyła się jak koc. Fale trzymały swój cichy „szzzz". Dotknęła jeszcze raz wody i przez moment bąbelki ułożyły miniaturową mapkę, która wyglądała dokładnie jak ścieżka, którą przeszli: koło bramki, obok kraba, do wielkiego niebieskiego oczka. Potem zniknęła, jakby ładnie schowana.

Lila położyła rozgwiazdę w płytkiej miseczce z morską wodą obok siebie. Odpoczywała tam, ramionka rozluźnione, perłowy blask pulsował bardzo wolno. Oplotła ręce wokół kolan i patrzyła, jak księżyc maluje długie srebrne linie na morzu.

Jej oczy zrobiły się ciężkie. Piasek ochłodził się pod stopami. Daleka latarnia morska mrugała, cierpliwa i spokojna. Gdzieś za skałami ogon rybki mógł jeszcze machnąć ostatnim błyskiem. Lila uśmiechnęła się i pozwoliła, by cisza ją ukołysała. Wokół ocean oddychał, delikatny i pewny.

Dziś do zapamiętania: uwierz w siebie
KONIEC`,rx={title:"Szepty Przypływowej Gwiazdeczki",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/cover.jpg",content:ax,narrators:[{id:"onyx",name:"Onyx",duration:481,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/pl/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:496,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/pl/shimmer.mp3"}],songs:[{id:"epic_adventure",title:"Gwiezdna Ścieżka (Starry Path)",style:"epic_adventure",url:"https://musicfile.api.box/ZGQzNGI3OGYtYzBiNy00ZTI4LTllZGItZDAxMzM3Y2RmM2U2.mp3",duration:174,coverUrl:"https://musicfile.api.box/ZGQzNGI3OGYtYzBiNy00ZTI4LTllZGItZDAxMzM3Y2RmM2U2.jpeg"}]},ix={title:"潮星的低语",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/cover.jpg",content:"[Chinese translation would go here]",narrators:[{id:"onyx",name:"Onyx",duration:456,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/zh/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:465,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/zh/shimmer.mp3"}],songs:[{id:"epic_adventure",title:"月光的道路 (The Moonlit Path)",style:"epic_adventure",url:"https://musicfile.api.box/ZDg4YmQ1MzItMjVmMi00ZDY5LTllZTAtMzIxMWUxZmQzZGY5.mp3",duration:240,coverUrl:"https://musicfile.api.box/ZDg4YmQ1MzItMjVmMi00ZDY5LTllZTAtMzIxMWUxZmQzZGY5.jpeg"}]},sx=`**Lila** は岩のくぼみにひざまずいてのぞきこみました。海草が緑のリボンみたいにただよっていました。小さなエビがぴょんと逃げていきました。くぼみのふちに、星のかたちをした小さな石を見つけました。つるつるで、うっすらときらめいています。拾うと、手のひらの中であたたかくなって、選ばれるのがうれしいみたいでした。

「すみません！」と小さな声がしました。「こっちだよ！」

Lila はもっと近くにのぞきこみました。銀色のきらめきがくぼみのまわりをぴゅっと走って、コインみたいにぴょこんと出てきました。月あかりみたいに明るい小さな魚が、まばたきしました。

「ぼくは **Finn**」と、言葉がぷくぷく泡になって出ました。「月の道をなくしちゃったんだ。家族は夕暮れに泳いで帰ったのに、ぼくは…わあっと光を追いかけて、迷ってしまったんだ。」

Lila はあごをひざにのせました。「月の道って何？」

「月が水のうえにのせる銀のリボンだよ」と Finn は心配そうにひれを傾けながら言いました。「それをたどると、静かな入江に帰れるんだ。でも雲が来て、岩が角や影になっちゃった。陸にいるお友だちの手が『さざなみのかぎ』を作るんだ。」

「さざなみのかぎ？」と Lila は首をかしげました。

Finn はうなずきました。「水の上につくる模様だよ。勢いよくじゃぶじゃぶしちゃだめ。小さくてやさしい手でしかできないんだ。そうすると、雲で月が見えなくても月の道が呼ばれるんだ。それに、あなたは星の小石を持ってる！それが助けになるんだよ。」

Lila は小石を見つめました。「やってみるよ」とおなかがどきどきしたけれど言いました。「水のかぎを開けたことはないけど。」

「それがちょうどいいんだ」と Finn は明るく言いました。「はじめてのときに魔法はよく効くんだよ。」

Lila は袖をまくって、手をくぼみにのばしました。指が水に触れると、小石がぴくりとしました。Lila はびっくりして息をのむと、小石が五つのちいさな腕をのばしました。

「わあ！」と Lila はくすっと笑いました。「あなた、ただの小石じゃないんだね。ねむねむのヒトデなんだ！」

小さなヒトデは指の上に小さなやわらかい手みたいに広がりました。ほのかな真珠色に光っています。Finn の目がまんまるになりました。「もっといいね」と彼はささやきました。「星のともだちは空のことを覚えてるんだ。」

「どうしたらいい？」と Lila は聞きました。

「ゆっくりまるをかいて」と Finn。「ばしゃばしゃしないで。やさしくね。水はていねいなお客さんが好きなんだ。」

Lila は塩のにおいと遠いところのにおいのする息を吸い込みました。羽みたいに軽くなれると信じてみます。指で小さな円をひとつなぞりました。速すぎました。くぼみの水がぱしゃんとこぼれました。「あっ」と Lila。

Finn は励ますようにぱたんとひれを振りました。「もっとやわらかく。羽みたいにね。」

Lila は目を閉じて海の「しゅっしゅ」を聞きました。小さな羽のようになれると信じました。ゆっくり、もうひとつ小さな丸を、さらにゆっくりと描きました。ヒトデがあたたかくなって、ちいさな泡のネックレスが指に向かって上がってきました。

雲が薄くなりました。月の光が雲のあいだから滑り込んでくぼみにキスをしました。Lila がなぞったところで水がぞくぞくして、真珠のような泡の道ができました。岩のくぼみから伸びて、浅瀬をつなぎ、海の方へとのびていきます。

Finn はよろこびでぐるんとまわりました。「できたよ！月の道が池の中につながった！」

Lila はにっこり笑って、ほっぺがピンクになりました。「たどってみる？」

彼女は岸を歩きながら一方の手にサンダルを持ち、つま先で水をなでました。海はひんやりして絹みたいになめらかでした。泡の道はかすかに光って、ちいさな提灯のひもみたいです。Finn は下で泳いで、同じ速さを保ちました。道が薄くなると、ヒトデが Lila の指で明るくなり、光が戻りました。

岩が門みたいになっている角を曲がると、シマシマのカニがつかまえのようにハサミをかまえて立っていました。「カチカチ」と石をたたきます。

「こんにちは」と Lila はていねいに言いました。「月の道をたどっているんです。通らせてもらえますか？」

カニは目をかしげました。Lila はピカピカの甲羅をほめました。「しましまがとてもおしゃれですね」と付け足しました。

カニは石をたたくのをやめました。横歩きで動いて、海藻にかくれた細い水路を指しました。「カチ」と少しやさしげに言って、秘密の道を教えてくれました。

「ありがとう」と Lila。Finn はちょっとお辞儀をして、小さな魚なのにとても立派に見えました。

門を越えると、くぼみは広がりました。水は透明なガラスのような青に深くなりました。一番大きなくぼみでは、影がかたちになり、かたちが魚になりました。銀の尾が空気に文字を描くように輪を描きます。

「Finn！」と彼らは歌いました。泡がぴちんと岩に当たります。

「お母さん！お父さん！ここにいるよ！」と Finn は群れにすべり込んで行きました。ぐるりと速く回ってから、また Lila の所へびゅんと戻ってきました。「この子は Lila。かぎを見つけてくれたんだよ。」

魚たちはいっしょに動いて、ハートの形のさざなみを作りました。Lila の胸がぽかぽかして、指の上のヒトデのあたたかさと同じになりました。

とても年をとったような、ゆっくりした知恵のある目をした魚が近づいてきました。「海はやさしさを覚えている」と、その魚はやわらかく水のような声で言いました。「道を見つけたいときは、星のともだちをくぼみにそっとつけて耳をすませてごらん。水が一番やさしい道を見せてくれるよ。」

Finn はちょこんと浮かびました。「ヒトデを少しだけ預かってくれますか？あなたの世話が好きなんだ。」

ヒトデは同意するようにくねり、Lila の指から手のひらへするりと移り、そこでちいさなボタンみたいにくつろぎました。「夜が明けるまで預かるね」と Lila は約束しました。「朝になったら岩に返すよ。」

Finn は月あかりの中でぴかっとしました。「たまに波にきらめきを送って、こんにちはって言うよ。」

Lila は小さな、友だちだけの秘密みたいな笑い声をあげました。「私、見つけるよ。」

雲は流れていきます。月はもっと明るくなって、海に銀のリボンを遠くまでのせました。Finn の家族は道をすべるように進み、尾をぱたぱた、うろこが星みたいにきらめきました。「おやすみ！」と呼んで、それはため息であり歌のようでもありました。

Lila はじっと立ってから、最初のくぼみに戻りました。指先でヒトデの背をなでました。「よくやったね」とささやきました。「二人ともね。」

彼女はなめらかな岩に腰かけました。風はやわらかく、塩と眠りのにおいがしました。夜が毛布みたいにひろがります。波は静かに「しゅっしゅ」と言い続けました。彼女はもう一度くぼみにさわると、しばらくのあいだだけ泡が小さな地図を描きました。それは彼らがたどった道とそっくりでした：門をまわり、カニのそばを通り、大きな青いくぼみへ。そしてそれは消えてしまい、まるで安全なたんすにしまわれたみたいでした。

Lila はヒトデをそばの浅い海水の皿におきました。ヒトデはそこで休み、腕をゆるめ、ほのかな真珠色の光がゆっくりとパルスしました。彼女は両手をひざにまいて、月が海に長い銀の線を描くのを見ました。

まぶたがだんだん重くなりました。砂は足の下で冷えてきます。遠くの灯台が点滅して、ゆったりと落ち着いていました。岩の向こうで、魚の尾が最後のひとはずみのきらめきを送ったかもしれません。Lila は笑って、静けさに身をゆだねました。まわりの海はゆっくりと、確かに息をしていました。

今夜の考え：自分を信じてね
おしまい`,lx={title:"潮の星のささやき",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/cover.jpg",content:sx,narrators:[],songs:[{id:"epic_adventure",title:"星の道 Hoshi no Michi (The Star's Path)",style:"epic_adventure",url:"https://musicfile.api.box/ZWYyNzcyYzYtNzBjMi00MWRhLWEzN2QtMWVlNTVkNjU0Mjhi.mp3",duration:233,coverUrl:"https://musicfile.api.box/ZWYyNzcyYzYtNzBjMi00MWRhLWEzN2QtMWVlNTVkNjU0Mjhi.jpeg"}]},ox={title:"조수별의 속삭임",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/cover.jpg",content:"[Korean translation would go here]",narrators:[{id:"onyx",name:"Onyx",duration:482,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/ko/onyx.mp3"},{id:"shimmer",name:"Shimmer",duration:508,audioUrl:"https://d1mmspri4wgcne.cloudfront.net/ai_stories/whispers-of-the-tidal-star-d5dfda26/narrations/ko/shimmer.mp3"}],songs:[{id:"epic_adventure",title:"Moon Path Melody",style:"epic_adventure",url:"https://musicfile.api.box/ODMyOGUxMjYtMmY2Zi00YWQ2LThiNzQtNTk2MzlkOTYxYjA2.mp3",duration:122,coverUrl:"https://musicfile.api.box/ODMyOGUxMjYtMmY2Zi00YWQ2LThiNzQtNTk2MzlkOTYxYjA2.jpeg"}]},ux=()=>{const{storyId:e}=dc(),t=Lc.find(m=>m.id===e),[n,r]=x.useState("en-GB"),[i,s]=x.useState("onyx");if(x.useEffect(()=>{window.scrollTo(0,0)},[]),!t)return a.jsx(hc,{to:"/stories",replace:!0});const l=n==="en-GB"?bg:n==="en-US"?kg:n==="fr"?zg:n==="es"?Sg:n==="de"?Cg:n==="it"?Pg:n==="pt"?Mg:n==="nl"?Fg:n==="pl"?Ig:n==="zh"?Rg:n==="ja"?Wg:Ug,o=l.narrators.find(m=>m.id===i)||l.narrators[0],u=n==="en-GB"?Hg:n==="en-US"?qg:n==="fr"?Yg:n==="es"?Vg:n==="de"?Qg:n==="it"?Jg:n==="pt"?ex:n==="nl"?nx:n==="pl"?rx:n==="zh"?ix:n==="ja"?lx:ox,d=u.narrators.find(m=>m.id===i)||u.narrators[0],f=(m=>{switch(m){case"quick_story":return{text:"⚡ Quick Story",color:"bg-soft-blue-100 text-soft-blue-700"};case"story_wizard":return{text:"🧙 Story Wizard",color:"bg-soft-green-100 text-soft-green-700"};case"fairy_corner_daily":return{text:"✨ Daily AI Story",color:"bg-gradient-to-r from-soft-blue-100 to-soft-green-100 text-neutral-800"};case"fairy_corner_classic":return{text:"📚 Classic Tale",color:"bg-gradient-to-r from-soft-blue-100 to-soft-green-100 text-neutral-800"};case"user_example":return{text:"👤 User Example",color:"bg-soft-green-100 text-soft-green-700"};default:return{text:m,color:"bg-neutral-100 text-neutral-700"}}})(t.creationMethod);return a.jsxs("div",{className:"pt-16 bg-white min-h-screen",children:[a.jsx("section",{className:"bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-8 md:py-12",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs(ee,{to:"/stories",className:"inline-flex items-center text-soft-blue-600 hover:text-soft-blue-700 font-medium mb-4 transition-colors",children:[a.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back to Stories"]}),a.jsx("h1",{className:"font-display text-3xl md:text-4xl font-bold text-neutral-900 mb-3",children:t.id==="gingerbread-man"?l.title:t.id==="whispers-tidal-star"?u.title:t.title}),a.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.ageRange&&a.jsx("span",{className:"inline-block text-sm font-semibold bg-white px-3 py-1 rounded-full",children:t.ageRange}),a.jsx("span",{className:`inline-block text-sm font-semibold px-3 py-1 rounded-full ${f.color}`,children:f.text})]})]})}),a.jsx("section",{className:"py-8 md:py-12",children:a.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsx("div",{className:"space-y-6",children:t.id==="gingerbread-man"?a.jsxs(a.Fragment,{children:[a.jsxs("div",{children:[a.jsx("label",{htmlFor:"language-select",className:"block text-sm font-semibold text-neutral-700 mb-2",children:"Language:"}),a.jsxs("select",{id:"language-select",value:n,onChange:m=>r(m.target.value),className:"w-full md:w-64 px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-blue-500",children:[a.jsx("option",{value:"en-GB",children:"🇬🇧 English (UK)"}),a.jsx("option",{value:"en-US",children:"🇺🇸 English (US)"}),a.jsx("option",{value:"fr",children:"🇫🇷 Français"}),a.jsx("option",{value:"es",children:"🇪🇸 Español"}),a.jsx("option",{value:"de",children:"🇩🇪 Deutsch"}),a.jsx("option",{value:"it",children:"🇮🇹 Italiano"}),a.jsx("option",{value:"pt",children:"🇵🇹 Português"}),a.jsx("option",{value:"nl",children:"🇳🇱 Nederlands"}),a.jsx("option",{value:"pl",children:"🇵🇱 Polski"}),a.jsx("option",{value:"zh",children:"🇨🇳 中文"}),a.jsx("option",{value:"ja",children:"🇯🇵 日本語"}),a.jsx("option",{value:"ko",children:"🇰🇷 한국어"})]})]}),a.jsx("p",{className:"text-neutral-600 text-sm",children:"One of over 40 classic fairy tales in Fairy Corner, with professional narration and original songs in 12 languages."}),a.jsx("img",{src:l.imageUrl,alt:l.title,loading:"lazy",className:"w-full rounded-lg shadow-lg"}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"narrator-select",className:"block text-sm font-semibold text-neutral-700 mb-2",children:"Narrator:"}),a.jsx("select",{id:"narrator-select",value:i,onChange:m=>s(m.target.value),className:"w-full md:w-64 px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-blue-500",children:l.narrators.map(m=>a.jsxs("option",{value:m.id,children:[m.name," (",Math.floor(m.duration/60),":",(m.duration%60).toString().padStart(2,"0"),")"]},m.id))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold text-neutral-900 mb-3",children:"🎧 Listen to Story"}),a.jsx(nr,{src:o.audioUrl,title:`${l.title} - ${o.name}`})]}),l.songs.length>0&&a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold text-neutral-900 mb-3",children:"🎵 Songs from this Story"}),a.jsx(Si,{songs:l.songs})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold text-neutral-900 mb-3",children:"📖 Full Story"}),a.jsx("div",{className:"bg-neutral-50 rounded-lg p-6 max-h-[600px] overflow-y-auto",children:l.content.split(`

`).map((m,w)=>{const y=m.split(/(\*\*.*?\*\*)/g);return a.jsx("p",{className:"text-neutral-700 mb-4 leading-relaxed",children:y.map((v,k)=>v.startsWith("**")&&v.endsWith("**")?a.jsx("strong",{className:"font-bold text-neutral-900",children:v.slice(2,-2)},k):a.jsx("span",{children:v},k))},w)})})]}),a.jsxs("div",{className:"bg-gradient-to-r from-soft-blue-50 to-soft-green-50 rounded-lg p-6",children:[a.jsx("h4",{className:"text-lg font-semibold text-neutral-900 mb-3",children:"📚 About This Classic Tale"}),a.jsxs("p",{className:"text-sm text-neutral-700 mb-3",children:[a.jsx("strong",{children:"The Gingerbread Man"})," is one of over 100 classic fairy tales and nursery rhymes available in the ",a.jsx("strong",{children:"Fairy Corner"})," section of the FairyAI app. These are professionally crafted, well-known stories that children love, each adapted with care to include engaging narration and custom songs."]}),a.jsxs("p",{className:"text-sm text-neutral-700 mb-3",children:["Unlike user-generated stories, Fairy Corner tales are ",a.jsx("strong",{children:"pre-made and always available"})," in the app with no Fairy Dust required. Each story is offered in ",a.jsx("strong",{children:"12 languages"})," with multiple narrator voices, making bedtime stories accessible to families around the world."]}),a.jsx("p",{className:"text-sm text-neutral-700",children:"All the content you see on this website, including this story with all its language versions, narrations, and songs, is available in the FairyAI app today."})]})]}):t.id==="whispers-tidal-star"?a.jsxs(a.Fragment,{children:[a.jsxs("div",{children:[a.jsx("label",{htmlFor:"language-select",className:"block text-sm font-semibold text-neutral-700 mb-2",children:"Language:"}),a.jsxs("select",{id:"language-select",value:n,onChange:m=>r(m.target.value),className:"w-full md:w-64 px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-blue-500",children:[a.jsx("option",{value:"en-GB",children:"🇬🇧 English (UK)"}),a.jsx("option",{value:"en-US",children:"🇺🇸 English (US)"}),a.jsx("option",{value:"fr",children:"🇫🇷 Français"}),a.jsx("option",{value:"es",children:"🇪🇸 Español"}),a.jsx("option",{value:"de",children:"🇩🇪 Deutsch"}),a.jsx("option",{value:"it",children:"🇮🇹 Italiano"}),a.jsx("option",{value:"pt",children:"🇵🇹 Português"}),a.jsx("option",{value:"nl",children:"🇳🇱 Nederlands"}),a.jsx("option",{value:"pl",children:"🇵🇱 Polski"}),a.jsx("option",{value:"zh",children:"🇨🇳 中文"}),a.jsx("option",{value:"ja",children:"🇯🇵 日本語"}),a.jsx("option",{value:"ko",children:"🇰🇷 한국어"})]})]}),a.jsx("p",{className:"text-neutral-600 text-sm",children:"A daily AI-generated story from Fairy Corner, with professional narration and original songs in 12 languages."}),a.jsx("img",{src:u.imageUrl,alt:u.title,loading:"lazy",className:"w-full rounded-lg shadow-lg"}),u.narrators.length>0?a.jsxs(a.Fragment,{children:[a.jsxs("div",{children:[a.jsx("label",{htmlFor:"narrator-select",className:"block text-sm font-semibold text-neutral-700 mb-2",children:"Narrator:"}),a.jsx("select",{id:"narrator-select",value:i,onChange:m=>s(m.target.value),className:"w-full md:w-64 px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-blue-500",children:u.narrators.map(m=>a.jsxs("option",{value:m.id,children:[m.name," (",Math.floor(m.duration/60),":",(m.duration%60).toString().padStart(2,"0"),")"]},m.id))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold text-neutral-900 mb-3",children:"🎧 Listen to Story"}),a.jsx(nr,{src:d.audioUrl,title:`${u.title} - ${d.name}`})]})]}):a.jsxs("div",{className:"bg-soft-blue-50 rounded-lg p-6 border border-soft-blue-200",children:[a.jsx("h3",{className:"text-lg font-semibold text-neutral-900 mb-2",children:"🎧 Story Narration"}),a.jsx("p",{className:"text-sm text-neutral-700",children:"Narrations for this language are coming soon! In the meantime, you can read the full story below or switch to another language to hear the narration."})]}),u.songs.length>0?a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold text-neutral-900 mb-3",children:"🎵 Songs from this Story"}),a.jsx(Si,{songs:u.songs})]}):a.jsxs("div",{className:"bg-soft-green-50 rounded-lg p-6 border border-soft-green-200",children:[a.jsx("h3",{className:"text-lg font-semibold text-neutral-900 mb-2",children:"🎵 Story Songs"}),a.jsx("p",{className:"text-sm text-neutral-700",children:"Songs for this language are coming soon! Switch to another language to hear the songs, or enjoy the full story below."})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold text-neutral-900 mb-3",children:"📖 Full Story"}),a.jsx("div",{className:"bg-neutral-50 rounded-lg p-6 max-h-[600px] overflow-y-auto",children:u.content.split(`

`).map((m,w)=>{const y=m.split(/(\*\*.*?\*\*)/g);return a.jsx("p",{className:"text-neutral-700 mb-4 leading-relaxed",children:y.map((v,k)=>v.startsWith("**")&&v.endsWith("**")?a.jsx("strong",{className:"font-bold text-neutral-900",children:v.slice(2,-2)},k):a.jsx("span",{children:v},k))},w)})})]}),a.jsxs("div",{className:"bg-gradient-to-r from-soft-blue-50 to-soft-green-50 rounded-lg p-6",children:[a.jsx("h4",{className:"text-lg font-semibold text-neutral-900 mb-3",children:"✨ About AI-Generated Stories"}),a.jsxs("p",{className:"text-sm text-neutral-700 mb-3",children:["This is an example of the ",a.jsx("strong",{children:"AI-generated daily stories"})," available in the Fairy Corner section of FairyAI. Every day, a brand new story is created using advanced AI, complete with professional narration and custom songs in ",a.jsx("strong",{children:"12 languages"}),"."]}),a.jsxs("p",{className:"text-sm text-neutral-700 mb-3",children:["These daily stories provide ",a.jsx("strong",{children:"fresh, original content"})," that keeps bedtime exciting and unpredictable. Unlike the classic tales, AI stories explore new characters, settings, and adventures, giving children something different to enjoy each night."]}),a.jsxs("p",{className:"text-sm text-neutral-700",children:["Best of all, Fairy Corner content requires ",a.jsx("strong",{children:"no Fairy Dust"})," and is included with your subscription, with new stories added automatically every single day."]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx(Sc,{label:`Character from ${t.title}`,aspectRatio:"square",className:"rounded-lg shadow-lg"}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold text-neutral-900 mb-3",children:"🎧 Listen to Story"}),a.jsx(nr,{src:t.audioSrc,title:t.title}),a.jsx("p",{className:"text-xs text-neutral-500 mt-2",children:"30-second sample • Full narration in app"})]}),t.songs&&t.songs.length>0&&a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold text-neutral-900 mb-3",children:"🎵 Songs from this Story"}),a.jsx(Si,{songs:t.songs})]}),t.creationMethod==="quick_story"&&a.jsxs("div",{className:"bg-soft-blue-50 rounded-lg p-6",children:[a.jsx("h4",{className:"font-semibold text-neutral-900 mb-2",children:"⚡ Quick Story"}),a.jsxs("p",{className:"text-sm text-neutral-700 mb-2",children:[a.jsx("strong",{children:"User Prompt:"}),' "',t.prompt,'"']}),a.jsx("p",{className:"text-xs text-neutral-600",children:"⏱️ Generated in ~15 seconds • 1 Fairy Dust"})]}),t.creationMethod==="story_wizard"&&t.wizardSelections&&a.jsxs("div",{className:"bg-soft-green-50 rounded-lg p-6",children:[a.jsx("h4",{className:"font-semibold text-neutral-900 mb-2",children:"🧙 Story Wizard"}),a.jsx("div",{className:"grid grid-cols-2 gap-2 text-sm",children:Object.entries(t.wizardSelections).map(([m,w])=>a.jsxs("div",{children:[a.jsxs("span",{className:"text-neutral-600",children:[m,":"]}),a.jsx("span",{className:"text-neutral-900 ml-1",children:w})]},m))}),t.note&&a.jsxs("p",{className:"text-xs text-neutral-600 mt-2",children:["ℹ️ ",t.note]})]}),t.creationMethod==="fairy_corner_daily"&&a.jsxs("div",{className:"bg-gradient-to-r from-soft-blue-50 to-soft-green-50 rounded-lg p-6",children:[a.jsx("h4",{className:"text-lg font-semibold text-neutral-900 mb-3",children:"✨ About AI-Generated Stories"}),a.jsxs("p",{className:"text-sm text-neutral-700 mb-3",children:["This is an example of the ",a.jsx("strong",{children:"AI-generated daily stories"})," available in the Fairy Corner section of FairyAI. Every day, a brand new story is created using advanced AI, complete with professional narration and custom songs in ",a.jsx("strong",{children:"12 languages"}),"."]}),a.jsxs("p",{className:"text-sm text-neutral-700 mb-3",children:["These daily stories provide ",a.jsx("strong",{children:"fresh, original content"})," that keeps bedtime exciting and unpredictable. Unlike the classic tales, AI stories explore new characters, settings, and adventures, giving children something different to enjoy each night."]}),a.jsxs("p",{className:"text-sm text-neutral-700",children:["Best of all, Fairy Corner content requires ",a.jsx("strong",{children:"no Fairy Dust"})," and is included with your subscription, with new stories added automatically every single day."]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold text-neutral-900 mb-3",children:"📖 Full Story"}),a.jsx("div",{className:"bg-neutral-50 rounded-lg p-6 max-h-[600px] overflow-y-auto",children:t.fullText.split(`

`).map((m,w)=>a.jsx("p",{className:"text-neutral-700 mb-4 leading-relaxed",children:m},w))})]})]})})})}),a.jsx("section",{className:"py-16 md:py-24 bg-amber-50",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[a.jsx("h2",{className:"font-display text-3xl md:text-4xl font-bold mb-4 text-neutral-900",children:"Ready to Create Your Own Stories?"}),a.jsx("p",{className:"text-xl mb-6 text-neutral-700",children:"Download FairyAI and start creating personalised bedtime adventures for your family."}),a.jsx("p",{className:"text-lg mb-8 font-semibold text-neutral-800",children:"6 free Fairy Dust • 7-day Fairy Corner trial • No credit card required"}),a.jsx(Ct,{variant:"gradient"})]})})]})},dx={id:"robot-friendship",title:"A Robot Learns About Friendship",promptType:"simple",promptText:"A robot learns about friendship",ageVariations:{"2-3":{id:"60106122-ff41-452e-9d42-e8691a4c8093",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/stories/60106122-ff41-452e-9d42-e8691a4c8093/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_60106122-ff41-452e-9d42-e8691a4c8093_cover.png",content:`Once upon a time, in a bright blue house, lived a little robot named Beep. Beep was shiny and silver, with twinkly lights and a big, round button on his tummy. Beep loved to beep and boop all day long. But sometimes, Beep felt a little bit lonely.

One sunny morning, Beep woke up with a wiggle and a beep. "Beep beep! What will I do today?" he wondered. Beep looked out of the window and saw the birds singing in the trees. He saw the squirrels chasing each other. He saw the butterflies dancing in the garden.

"I want to play too," said Beep. "But I do not know how."

Beep rolled outside on his little wheels. He saw a small, brown puppy digging in the dirt. The puppy wagged his tail and barked. "Woof woof!"

"Hello, Puppy," said Beep. "Can I play with you?"

The puppy sniffed Beep's shiny hand. "Woof! Let's dig!" said Puppy.

Beep tried to dig with his metal hands, but the dirt was hard and cold. His hands got all muddy. "Oh no!" said Beep. "I do not like digging."

Puppy wagged his tail. "That's okay, Beep! Let's run!"

Beep tried to run, but his wheels went bumpity-bump on the grass. He rolled this way and that way. "Oh no!" said Beep. "I do not like running."

Puppy licked Beep's hand. "That's okay, Beep! Let's find someone else to play with."

Beep and Puppy went to the garden. There, they saw Bella Bunny nibbling on a carrot. Her ears were long and floppy.

"Hello, Bella Bunny," said Beep. "Can we play with you?"

Bella Bunny wiggled her nose. "Let's hop!" she said.

Beep tried to hop, but his wheels went round and round. He wobbled and wiggled, but he could not hop. "Oh no!" said Beep. "I do not like hopping."

Bella Bunny smiled. "That's okay, Beep! Let's find another friend."

Beep, Puppy, and Bella Bunny walked to the pond. Quack the Duck was splashing in the water.

"Hello, Quack," said Beep. "Can we play with you?"

Quack flapped his wings. "Let's swim!" he said.

Beep rolled to the water's edge. He put one wheel in the water. Splash! "Oh no!" said Beep. "I do not like swimming."

Quack paddled closer. "That's okay, Beep! What do you like to do?"

Beep thought and thought. His lights blinked. His button glowed. "I like to beep and boop!" he said. "I can make music with my beeps and boops."

Puppy barked. "I like music!"

Bella Bunny wiggled her ears. "Me too!"

Quack flapped his wings. "Let's all make music!"

Beep beeped and booped. Puppy barked. Bella Bunny thumped her feet. Quack quacked. Together, they made a happy song.

Beep felt happy. His lights blinked in all the colours of the rainbow. "I love playing music with my friends," he said.

Puppy wagged his tail. "You are a good friend, Beep!"

Bella Bunny nibbled her carrot. "You make us happy, Beep!"

Quack splashed in the pond. "Let's play again tomorrow!"

Beep beeped with joy. "Yes, let's play again! I love my friends!"

The sun began to set. It was time to go home.

Beep rolled back to his bright blue house. He looked up at the twinkly stars. "I learned something today," said Beep. "Friends are special. Friends help each other. Friends play together. And friends make me happy."

Beep closed his eyes. His lights turned soft and gentle. "Goodnight, friends," he whispered.

And Beep the Robot fell fast asleep, dreaming of beeps, boops, and wonderful friendship adventures.

The end.`,context:{ageRange:"2-3 years",styleNotes:["Simple, repetitive language","Bright characters and sounds (Beep! Woof! Quack!)","Basic emotions and actions"],moral:"Friends make us happy",length:"~5 minutes"}},"4-6":{id:"067a4db2-9383-4d08-884e-d1dbad16483a",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/stories/067a4db2-9383-4d08-884e-d1dbad16483a/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_067a4db2-9383-4d08-884e-d1dbad16483a_cover.png",content:`Once upon a time, in a bright and bustling city, there lived a shiny silver robot named Robbie. Robbie lived in a cosy workshop with his inventor, Miss Tilly. Miss Tilly took good care of Robbie. She polished his metal arms every morning and tightened his bolts at night before bedtime. Robbie loved his workshop, but sometimes, he felt a little lonely.

Robbie had lots of buttons and flashing lights, and he could beep and whirr as much as he liked. But sometimes, he wished he had someone to play with. He watched birds fly past the window in pairs, and children skipping hand-in-hand on the pavement outside. Robbie wondered what it would be like to have a friend.

One sunny morning, Miss Tilly said, "Robbie, would you like to come with me to the park today?"

Robbie's eyes lit up bright blue. "Yes, please!" he beeped excitedly.

Miss Tilly packed a picnic. She tucked in some sandwiches, fruit, and a shiny red apple for herself—a shiny new battery for Robbie. Off they went to the park.

The park was full of colour and laughter. Children ran about playing tag. Dogs chased sticks across the grass. Near the big oak tree, Miss Tilly spread out their picnic blanket.

"Go and explore if you like," said Miss Tilly with a smile.

Robbie whirred over to the playground. He saw two children building a sandcastle together. He saw a group of girls spinning on the roundabout, giggling as they went round and round.

Robbie beeped shyly and rolled over to the sandpit. "Hello," he said in his best robot voice.

The two children looked up. One was called Sam and the other was called Jaya.

"Hello!" said Jaya with a grin. "Are you a real robot?"

"Yes," beeped Robbie proudly.

Sam's eyes grew wide. "Can you help us build our castle?"

Robbie nodded and used his clever claw hands to pat down the sand just right. Together, they made the tallest sandcastle in the park! They added seashells for windows and sticks for flags.

"This is fun!" said Jaya.

"It's even better with you," said Sam.

Robbie felt something new inside him—something warm and sparkly—even though he didn't have a heart like humans did.

After a while, Sam said, "Let's play hide-and-seek!"

"I've never played that before," Robbie admitted.

"It's easy!" Jaya explained. "You close your eyes and count while we hide."

Robbie turned around and closed his robot eyes (which meant he switched off his camera sensors for ten seconds). He counted out loud: "One… two… three…"

When he finished counting, Robbie beeped, "Ready or not, here I come!" He used his gentle whirring wheels to glide around the playground looking for Sam and Jaya.

He found Sam hiding behind the big slide and Jaya crouched behind the swings. Everyone cheered!

"You're really good at seeking," laughed Sam.

"I like this game," said Robbie happily.

Soon it was time for lunch. Miss Tilly called Robbie over to the picnic blanket.

"Did you have fun?" she asked as she passed him his shiny new battery.

"Yes!" said Robbie. "I made friends."

Sam and Jaya waved from across the grass. "Come play again after lunch!" they called.

After eating, Robbie hurried back to his new friends. Together they played on the swings—Jaya pushed Robbie gently so he could feel what it was like to swing back and forth under the blue sky.

Then they built paper aeroplanes from leaves and tried flying them from the top of their sandcastle tower.

As the afternoon sunshine turned golden, Jaya said softly, "We have to go home soon."

Sam nodded sadly. "Will we see you again?"

"I hope so," beeped Robbie quietly.

Jaya smiled brightly. "We come here every Saturday! Will you come too?"

"I'd like that very much," said Robbie with a happy whirr.

Just then, Sam gave Robbie a small pebble with a painted smiley face on it. "This is for you—to remember us!"

Robbie picked up the pebble carefully in his metal hand. It wasn't shiny or new like his battery, but it felt very special indeed.

When it was time to leave, Robbie waved goodbye to Sam and Jaya.

On the way home, Miss Tilly asked him gently, "Did you have a good day?"

Robbie thought about playing hide-and-seek, building castles together, swinging under the sky, and getting his special pebble from Sam.

"Yes," he beeped softly but proudly. "I made friends today."

Miss Tilly smiled kindly at him. "Friends make everything brighter."

That evening back at home, Robbie placed the smiley pebble on his bedside shelf next to his favourite screwdriver. As he powered down for bedtime mode, he remembered all the laughter and games from his wonderful day at the park.

From that day forward, every Saturday became 'Friendship Day' for Robbie—and he knew now that even robots could feel happy inside when they had friends by their side.

And so Robbie learned that friendship isn't about having buttons or bolts—it's about sharing fun times together and caring for each other in small special ways.

As night fell and stars twinkled above his workshop window, Robbie dreamed sweet dreams about all of his new adventures—with friends who would always be there when he needed them most.

Goodnight, little robot friend!`,context:{ageRange:"4-6 years",styleNotes:["Clear narrative arc with beginning, middle, and end","Character feelings expressed clearly","Simple problem-solving (making friends at the park)"],moral:"Friends are more important than being perfect",length:"~8 minutes"}},"7-9":{id:"98b0e2c1-ece1-4654-8e4e-0b76c57a018a",imageUrl:"https://d1mmspri4wgcne.cloudfront.net/users/0d73d152-bdfb-4aca-98bb-ed33d2b912f4/stories/98b0e2c1-ece1-4654-8e4e-0b76c57a018a/0d73d152-bdfb-4aca-98bb-ed33d2b912f4_98b0e2c1-ece1-4654-8e4e-0b76c57a018a_cover.png",content:`In the centre of a busy city, where people hurried past tall buildings and bright shops, lived a robot named Pixel. Pixel was not like the other robots who worked in offices or delivered post. Instead, he lived in the back room of Mr Singh's repair shop, surrounded by shelves cluttered with clocks, radios, and tangled wires.

Pixel was small and round, with shiny silver arms and a friendly face made of blinking blue lights. He had a button nose that glowed when he was curious—which was almost all the time. Every morning, Mr Singh would wind up his gears and say cheerfully, "Ready for another day of learning, Pixel?"

"Yes, Mr Singh!" Pixel would reply in his mechanical but cheerful voice.

Pixel loved to learn new things. He knew how to fix broken toasters and polish old watches until they sparkled like treasure. But sometimes he gazed out of the shop window at children playing in the park across the road. He saw them laughing together, sharing secrets or sweets, or helping each other up after a tumble.

One rainy afternoon, as grey clouds gathered outside and raindrops tapped on the windowpane like tiny fingers, Mr Singh gave Pixel a special task: fixing an old radio that belonged to someone very important—Mrs Potts from next door.

"Take care with this one," said Mr Singh. "Mrs Potts loves her afternoon music."

Pixel carefully opened up the radio using his tiny screwdriver fingers. Bits of wire poked out like spaghetti.

Just then, a little girl ducked into the shop to escape the rain. She had curly hair tied with ribbons and wore red wellies splattered with mud.

"Hello," she said shyly. "My name's Amira."

"Hello Amira," said Pixel politely. It was rare for children to come into the shop.

Amira's eyes widened when she saw him. "You're a robot! Can you talk?"

"Yes," said Pixel proudly. "I can talk—and fix things too."

Amira grinned and came closer. "Can I watch?"

So Amira watched as Pixel fixed Mrs Potts' radio. She asked questions about each part: "What does this bit do?" and "Why is that wire blue?" Sometimes she giggled when Pixel's nose glowed extra bright whenever he thought hard.

When he finished fixing the radio, Amira clapped her hands in delight.

"You're amazing!"

Pixel's circuits fluttered pleasantly at her words.

Suddenly Mrs Potts bustled in from next door to collect her radio. She beamed at Pixel and Amira before heading off into the rain with her precious music box under her arm.

Amira sighed happily as she watched Mrs Potts leave.

"I wish I could fix things like you," she said softly.

Pixel thought for a moment; no one had ever wished to be like him before.

"Perhaps I could teach you," he suggested hopefully.

Amira's eyes sparkled brighter than ever before. "Would you really?"

From then on, every day after school—rain or shine—Amira came to visit Pixel in Mr Singh's shop. Together they fixed broken clocks whose hands spun wildly backwards; they glued wobbly toy soldiers so they could stand tall again; they even rescued a music box that would only play half a song until they found its missing spring hiding amongst some marbles.

While they worked side by side, Amira told stories about school: about her best friend who moved away last month; about games played at breaktime; about how it felt when someone shared their crisps with her just because she'd dropped hers on the playground floor.

Sometimes Amira brought sweets from home—a chewy caramel for herself and one wrapped up just for Pixel (even though robots didn't eat sweets). She made him laugh by pretending he could taste them too: "Mmm! Delicious petrol flavour!"

One afternoon as they packed away their tools after fixing Mrs Chen's electric fan (which now spun cheerfully instead of groaning), Amira grew quiet.

"My birthday party is tomorrow," she said slowly. "There'll be games…and cake…and lots of children." Her shoulders drooped slightly as she looked at her muddy boots. "But I don't know if anyone will come…"

Pixel blinked thoughtfully: friendship was still something new to him—and parties were even more mysterious!

"I would come if I could," he said softly. "But robots aren't allowed out much…"

She smiled sadly but squeezed his hand—his metal fingers felt cool but gentle in hers.

The next day dawned bright and sunny—and right on time there was a knock on Amira's door just before her party began. On her doorstep stood Mr Singh holding a cardboard box—and inside it sat Pixel!

"I've got special permission today!" chirped Mr Singh kindly. "Pixel is here to deliver your birthday present."

Amira squealed with delight as she helped lift Pixel out onto her living room carpet where balloons bobbed overhead like colourful clouds.

Soon other children arrived—all curious about this funny little robot guest who could make his nose glow different colours—from green (curious) to pink (excited) to orange (tickled).

They played pass-the-parcel while Pixel called out instructions ("No peeking!"), built towers from blocks taller than themselves—with Pixel balancing extra pieces using steady robot hands—and even had a dance competition where everyone cheered as he wiggled his hips with mechanical precision!

When it came time for cake—chocolate sponge covered in rainbow sprinkles—Amira saved an extra slice for Pixel ("Robots eat imaginary cake!") which made him laugh so hard his blue lights twinkled like fairy lights all around them.

Later as parents collected their tired but happy children, many asked shyly if perhaps their own toys might meet such an excellent robot friend one day too. By evening only Amira and Pixel remained among crumbs and curling ribbons scattered across the floor.

"That was brilliant!" exclaimed Amira breathlessly as she hugged him gently around his shiny shoulders.

"I didn't know parties—or friendship—could feel like this." admitted Pixel quietly.

She nodded: "Me neither... But I'm glad we found out together."

As stars blinked above outside and city lights sparkled below their window, both knew something precious had begun—a real friendship forged through laughter shared repairs…and chocolate cake eaten together (even if only some friends pretended). And from that night on neither felt quite so alone again—for now both knew what it truly meant to be someone's special friend…robot or not!`,context:{ageRange:"7-9 years",styleNotes:["Complex emotions explored (feeling different, belonging)","Character growth and meaningful relationships","Relatable social challenges (making friends, being included)"],moral:"Being different doesn't mean you can't connect with others",length:"~10 minutes"}}}},cx=()=>{const{storyId:e}=dc(),[t,n]=x.useState("4-6");x.useEffect(()=>{window.scrollTo(0,0)},[]);let r=null;if(e==="robot-friendship"&&(r=dx),!r)return a.jsx(hc,{to:"/stories",replace:!0});const i=r.ageVariations[t];return a.jsxs("div",{className:"pt-16 bg-white min-h-screen",children:[a.jsx("section",{className:"bg-gradient-to-br from-soft-blue-50 to-soft-green-50 py-6 md:py-8",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs(ee,{to:"/stories",className:"inline-flex items-center text-soft-blue-600 hover:text-soft-blue-700 font-medium mb-3 transition-colors",children:[a.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),"Back to Stories"]}),a.jsx("h1",{className:"font-display text-2xl md:text-3xl font-bold text-neutral-900 mb-2",children:r.title}),a.jsx("p",{className:"text-neutral-600 text-sm",children:r.promptType==="simple"?`Created from a simple prompt: "${r.promptText}"`:"Created from a detailed prompt with specific themes and characters."})]})}),a.jsx("section",{className:"py-6 md:py-8",children:a.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"space-y-6",children:[i.imageUrl&&a.jsx("img",{src:i.imageUrl,alt:`Cover illustration for Ages ${i.context.ageRange}`,loading:"lazy",className:"w-full rounded-lg shadow-lg"}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("h3",{className:"text-lg font-semibold text-neutral-900",children:"Full Story"}),a.jsxs("select",{id:"age-select",value:t,onChange:s=>n(s.target.value),className:"px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-blue-500 text-neutral-900 text-sm",children:[a.jsx("option",{value:"2-3",children:"Ages 2-3"}),a.jsx("option",{value:"4-6",children:"Ages 4-6"}),a.jsx("option",{value:"7-9",children:"Ages 7-9"})]})]}),a.jsx("div",{className:"bg-neutral-50 rounded-lg p-4 md:p-6 max-h-[500px] overflow-y-auto border border-neutral-200",children:i.content.split(`

`).map((s,l)=>a.jsx("p",{className:"text-neutral-700 mb-4 leading-relaxed last:mb-0",children:s},l))})]}),a.jsxs("div",{className:"bg-gradient-to-r from-soft-blue-50 to-soft-green-50 rounded-xl p-5 border border-soft-blue-100",children:[a.jsx("h4",{className:"font-display text-lg font-bold text-neutral-900 mb-2",children:"Age-Adaptive Stories"}),a.jsx("p",{className:"text-neutral-700 text-sm",children:"The same prompt adapts for each age group. FairyAI automatically adjusts vocabulary, complexity, and themes based on your child's age."})]})]})})}),a.jsx("section",{className:"py-12 md:py-16 bg-amber-50",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[a.jsx("h2",{className:"font-display text-2xl md:text-3xl font-bold mb-4 text-neutral-900",children:"Ready to Create Your Own Stories?"}),a.jsx("p",{className:"text-lg mb-6 text-neutral-700",children:"Download FairyAI and start creating personalised bedtime adventures."}),a.jsx("p",{className:"text-base mb-8 font-semibold text-neutral-800",children:"6 free Fairy Dust • 7-day Fairy Corner trial • No credit card required"}),a.jsx(Ct,{variant:"gradient"})]})})]})},mx=()=>(x.useEffect(()=>{window.scrollTo(0,0)},[]),a.jsxs("div",{className:"min-h-screen bg-white pt-16",children:[a.jsx("section",{className:"bg-gradient-to-br from-soft-blue-50 via-white to-soft-green-50 py-16 md:py-24",children:a.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsx("h1",{className:"font-display text-4xl md:text-5xl font-bold text-neutral-900 text-center",children:"Privacy Policy"})})}),a.jsx("section",{className:"py-12 md:py-16",children:a.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsx("p",{className:"text-neutral-500 text-sm mb-8 pb-6 border-b-2 border-neutral-200",children:"Last updated: 11th August 2025"}),a.jsxs("div",{className:"prose prose-neutral max-w-none",children:[a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"1. Who We Are"}),a.jsxs("p",{className:"text-neutral-700 leading-relaxed mb-4",children:["FairyAI is operated by Rebel AI Ltd, registered in Scotland, UK (Company Number: SC839626). Contact: ",a.jsx("a",{href:"mailto:legal@fairyai.co.uk",className:"text-soft-blue-600 hover:underline",children:"legal@fairyai.co.uk"}),"."]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"1.5 How FairyAI Works"}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"FairyAI is designed for parents, guardians, and caregivers to use on their own devices to create personalised stories, characters, and songs for children ages 2-12."}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"The app user is the adult, not the child. We collect data about your account and usage, not about the children who listen to or enjoy the content you create."})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"2. Information We Collect"}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"We collect:"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Account Information:"})," Email, name, age confirmation (13+)."]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Generated Content:"})," Stories, characters, images, songs, narrations you create, including prompts and uploaded images."]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Device Information:"})," Device type, operating system, device tokens for push notifications."]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Usage Data:"})," Features used, content viewed, generation history, reading time, completion rates."]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Subscription Data:"})," Transaction IDs and subscription status from App Store/Google Play (we do not receive payment card details)."]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Technical Data:"})," Temporary IP addresses for security and rate limiting (retained in server logs for 7 days)."]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Uploaded Images:"})," When using photo-to-character feature, images are processed and deleted within 24 hours."]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Analytics:"})," We use PostHog to collect anonymous usage analytics to improve the app. This includes which features are used and general app performance. No personal data is collected or shared."]})]}),a.jsxs("p",{className:"text-neutral-700 leading-relaxed mb-4",children:[a.jsx("strong",{className:"text-neutral-900",children:"Note on Children's Information:"}),a.jsx("br",{}),"We do not collect personal information about children. When you create content for a child (e.g., a character based on your child), you control what information is included. We recommend not including full names, exact ages, or identifying information about your child in generated content."]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"3. How We Use Your Data"}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"We use your information to:"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsx("li",{children:"Provide and personalise the App's features."}),a.jsx("li",{children:"Generate AI content based on your prompts."}),a.jsx("li",{children:"Send push notifications about content completion and app updates (with your permission)."}),a.jsx("li",{children:"Manage your account, subscription, and fairy dust credits."}),a.jsx("li",{children:"Improve the App through internal analytics."}),a.jsx("li",{children:"Ensure security and prevent abuse."}),a.jsx("li",{children:"Comply with legal obligations."})]}),a.jsxs("p",{className:"text-neutral-700 leading-relaxed mb-4",children:[a.jsx("strong",{className:"text-neutral-900",children:"Legal Basis for Processing (GDPR):"}),a.jsx("br",{}),"We process your data based on:"]}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Contract:"})," To provide the services you've requested"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Legitimate interests:"})," To improve our services and ensure security"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Consent:"})," For push notifications and marketing (where applicable)"]})]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"4. Local Storage"}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"The App stores on your device:"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsx("li",{children:"Authentication tokens"}),a.jsx("li",{children:"User preferences (language, theme, font size)"}),a.jsx("li",{children:"Draft content and wizard progress"}),a.jsx("li",{children:"Cached content for offline access"}),a.jsx("li",{children:"Onboarding status"})]}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"This data remains on your device unless you delete the App."})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"5. Push Notifications"}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"With your permission, we send notifications for:"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsx("li",{children:"Content generation completion"}),a.jsx("li",{children:"Subscription and account updates"}),a.jsx("li",{children:"New features and app updates"})]}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"You can disable notifications in your device settings at any time."})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"6. Sharing of Data"}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"We share necessary data with:"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Supabase"})," – Authentication and database services (UK/EU)"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"AWS S3"})," – Media storage (encrypted)"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"OpenAI"})," – Story and narration generation (prompts and content)"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Replicate"})," – Character image generation (character descriptions)"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Suno"})," – Song generation (song prompts)"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Firebase"})," – Push notification delivery"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"PostHog"})," – Anonymous analytics (feature usage, app performance)"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"App Store / Google Play"})," – Payment processing"]})]}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"We do not sell your personal data to third parties."})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"7. International Transfers"}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"Your data may be processed in the UK, EU, and US by our service providers. We ensure appropriate safeguards are in place for all transfers."})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"8. Data Security"}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"We use industry-standard security measures including:"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsx("li",{children:"Encrypted data transmission (HTTPS)"}),a.jsx("li",{children:"Secure authentication (Supabase Auth)"}),a.jsx("li",{children:"Encrypted media storage (AWS S3)"}),a.jsx("li",{children:"Rate limiting and security monitoring"})]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"9. Data Retention"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Active accounts:"})," Data retained while account is active"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Deleted accounts:"})," 30-day recovery period, then permanent deletion"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Server logs:"})," 7 days (may contain IP addresses)"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Generated content:"})," Deleted with account after 30-day period"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Uploaded images:"})," Deleted within 24 hours of upload"]})]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"10. Your Rights (UK GDPR)"}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"You have the right to:"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsx("li",{children:"Access your personal data"}),a.jsx("li",{children:"Correct inaccurate information"}),a.jsx("li",{children:"Delete your account and all associated data"}),a.jsx("li",{children:"Export your data in a portable format"}),a.jsx("li",{children:"Object to certain processing"}),a.jsx("li",{children:"Complain to the UK Information Commissioner's Office (ICO)"})]}),a.jsxs("p",{className:"text-neutral-700 leading-relaxed mb-4",children:["To exercise these rights, email ",a.jsx("a",{href:"mailto:legal@fairyai.co.uk",className:"text-soft-blue-600 hover:underline",children:"legal@fairyai.co.uk"}),"."]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"11. Your Rights (California Residents)"}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"California residents have additional rights under CCPA including the right to opt-out of data sales. We do not sell your personal data."})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"12. Children's Privacy"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsx("li",{children:"The App requires users to be 13 or older."}),a.jsx("li",{children:"We do not knowingly collect data from children under 13."}),a.jsx("li",{children:"If we discover a user is under 13, we will delete their account."})]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"13. Account Deletion"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsx("li",{children:"Delete your account via Settings → Privacy → Delete Account"}),a.jsx("li",{children:"Immediate deactivation with 30-day recovery period"}),a.jsx("li",{children:"After 30 days: permanent deletion of all data including media files"}),a.jsxs("li",{children:["Email ",a.jsx("a",{href:"mailto:legal@fairyai.co.uk",className:"text-soft-blue-600 hover:underline",children:"legal@fairyai.co.uk"})," within 30 days to recover a deleted account"]})]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"14. Data Breach Notification"}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"If a breach affecting your personal data occurs, we will notify affected users via email and the UK ICO within 72 hours as required by law."})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"15. Changes to This Policy"}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"We may update this Privacy Policy. We will notify you of significant changes via the App or email."})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"16. Contact"}),a.jsxs("div",{className:"bg-neutral-50 border border-neutral-200 rounded-lg p-6",children:[a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-2",children:"For privacy questions, requests, or concerns:"}),a.jsxs("p",{className:"text-neutral-700 leading-relaxed mb-2",children:[a.jsx("strong",{className:"text-neutral-900",children:"Email:"})," ",a.jsx("a",{href:"mailto:legal@fairyai.co.uk",className:"text-soft-blue-600 hover:underline",children:"legal@fairyai.co.uk"})]}),a.jsxs("p",{className:"text-neutral-700 leading-relaxed mb-2",children:[a.jsx("strong",{className:"text-neutral-900",children:"Data Protection Officer:"})," ",a.jsx("a",{href:"mailto:legal@fairyai.co.uk",className:"text-soft-blue-600 hover:underline",children:"legal@fairyai.co.uk"})]}),a.jsxs("p",{className:"text-neutral-700 leading-relaxed mb-0",children:[a.jsx("strong",{className:"text-neutral-900",children:"Address:"})," Rebel AI Ltd, Scotland, UK"]})]})]})]})]})})]})),hx=()=>(x.useEffect(()=>{window.scrollTo(0,0)},[]),a.jsxs("div",{className:"min-h-screen bg-white pt-16",children:[a.jsx("section",{className:"bg-gradient-to-br from-soft-blue-50 via-white to-soft-green-50 py-16 md:py-24",children:a.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsx("h1",{className:"font-display text-4xl md:text-5xl font-bold text-neutral-900 text-center",children:"Terms of Service"})})}),a.jsx("section",{className:"py-12 md:py-16",children:a.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsx("p",{className:"text-neutral-500 text-sm mb-8 pb-6 border-b-2 border-neutral-200",children:"Last updated: 11th August 2025"}),a.jsxs("div",{className:"prose prose-neutral max-w-none",children:[a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"1. Introduction"}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:'These Terms of Service ("Terms") govern your use of the FairyAI mobile application ("the App"), operated by Rebel AI Ltd, a company registered in Scotland, UK (Company Number: SC839626) ("we", "us", "our").'}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"By downloading, installing, or using the App, you agree to these Terms. If you do not agree, do not use the App."})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"2. Eligibility"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsx("li",{children:"You must be at least 13 years old to use the App."}),a.jsx("li",{children:"By creating an account, you confirm you meet this age requirement."}),a.jsx("li",{children:"The App itself is for personal, non-commercial use (you may not resell access to the App or use it to provide services to others)."}),a.jsx("li",{children:"Content you generate using the App is yours to use as you wish, including for commercial purposes."})]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"3. Account Registration & Security"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsx("li",{children:"You must create an account using our secure authentication provider (Supabase) to use most features."}),a.jsx("li",{children:"You are responsible for maintaining the confidentiality of your login credentials."}),a.jsxs("li",{children:["You must notify us immediately at ",a.jsx("a",{href:"mailto:legal@fairyai.co.uk",className:"text-soft-blue-600 hover:underline",children:"legal@fairyai.co.uk"})," if you suspect unauthorised access to your account."]})]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"4. AI-Generated Content"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsx("li",{children:"The App generates content (stories, images, songs, narrations) using third-party AI services (OpenAI, Replicate, and Suno)."}),a.jsx("li",{children:"We apply automated filters to help prevent inappropriate content, but we cannot guarantee all generated content will be suitable for all audiences."}),a.jsx("li",{children:"You must not submit prompts that are illegal, infringing, harmful, or otherwise prohibited under these Terms."}),a.jsx("li",{children:"You are responsible for how you use and share generated content."})]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"5. User-Generated Content & Licence"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsx("li",{children:"You retain full ownership and rights to all content you generate using the App, including stories, characters, images, songs, and narrations."}),a.jsx("li",{children:"You may use, share, modify, and commercialise your generated content without restriction."}),a.jsx("li",{children:"By creating content through the App, you grant Rebel AI Ltd a limited, worldwide, non-exclusive, royalty-free licence solely to host, store, process, and display that content within the App as necessary to provide our services."}),a.jsx("li",{children:"You confirm you have all necessary rights to any content you upload to the App."})]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"6. Sharing & Downloads"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsx("li",{children:"The App allows you to share and download your generated content."}),a.jsx("li",{children:"Once you share content externally, it is no longer under our control; you are responsible for where and how you share it."}),a.jsx("li",{children:"Content from the Fairy Corner (classic tales) may be subject to public domain or third-party rights. Classic tales in Fairy Corner are adapted from public domain sources. Musical arrangements are original works."})]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"7. Subscriptions, Credits, and Payments"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsx("li",{children:'The App uses a credit system called "fairy dust" to access premium features.'}),a.jsx("li",{children:"You may obtain credits via one-off purchase or auto-renewing subscription through the App Store or Google Play."}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Auto-Renewal:"})," Subscriptions automatically renew unless cancelled at least 24 hours before the renewal date. You can manage or cancel your subscription in your device's account settings."]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Refunds:"})," Purchases are non-refundable except where required by law or via the refund processes provided by the App Store or Google Play."]}),a.jsx("li",{children:"Unused credits do not roll over after subscription expiry unless stated in your plan."}),a.jsx("li",{children:"All billing is handled by Apple or Google under their terms."}),a.jsx("li",{children:"Prices shown are in GBP. Actual prices may vary by region and be shown in local currency."})]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"8. Prohibited Use"}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"You must not:"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsx("li",{children:"Use the App for unlawful purposes or to generate harmful or infringing content."}),a.jsx("li",{children:"Attempt to bypass usage limits or security measures."}),a.jsx("li",{children:"Access or attempt to access another user's content without permission."}),a.jsx("li",{children:"Reverse engineer or attempt to extract the underlying AI models or prompts."})]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"9. Termination of Account"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsx("li",{children:"You may delete your account at any time from Settings → Privacy → Delete Account."}),a.jsx("li",{children:"Upon deletion, your account is immediately deactivated and scheduled for permanent deletion after 30 days."}),a.jsx("li",{children:"During the 30-day period, you may contact us to recover your account."}),a.jsx("li",{children:"After 30 days, all your data, including generated content and media files, will be permanently deleted."}),a.jsx("li",{children:"Unused credits are forfeited upon account deletion."}),a.jsx("li",{children:"We may suspend or terminate your account if you breach these Terms."})]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"10. Intellectual Property"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsx("li",{children:"The App, its code, design, and branding are the property of Rebel AI Ltd or its licensors."}),a.jsx("li",{children:"You may not copy, modify, distribute, or reverse-engineer any part of the App."}),a.jsx("li",{children:"Generated content belongs to you as outlined in Section 5."})]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"11. Copyright & DMCA Policy"}),a.jsxs("p",{className:"text-neutral-700 leading-relaxed mb-4",children:["If you believe content in the App infringes your copyright, contact ",a.jsx("a",{href:"mailto:legal@fairyai.co.uk",className:"text-soft-blue-600 hover:underline",children:"legal@fairyai.co.uk"})," with:"]}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsx("li",{children:"Your contact details"}),a.jsx("li",{children:"A description of the copyrighted work"}),a.jsx("li",{children:"Details of the infringing material and where it appears in the App"}),a.jsx("li",{children:"A statement that you have a good faith belief the use is unauthorised"})]}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"We will respond in accordance with applicable law, including the DMCA."})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"12. Disclaimers"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsx("li",{children:"AI-generated content may contain inaccuracies, errors, or unintended material."}),a.jsx("li",{children:'The App is provided "as is" without warranties of any kind, to the extent permitted by law.'}),a.jsx("li",{children:"We do not warrant that generated content will be suitable for any particular purpose."})]})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"13. Limitation of Liability"}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"To the maximum extent permitted by law, Rebel AI Ltd will not be liable for any indirect, incidental, or consequential damages arising from your use of the App."})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"14. Governing Law"}),a.jsx("p",{className:"text-neutral-700 leading-relaxed mb-4",children:"These Terms are governed by the laws of Scotland, UK. Disputes will be subject to the exclusive jurisdiction of the Scottish courts."})]}),a.jsxs("div",{className:"mb-10",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-4",children:"15. Contact"}),a.jsx("div",{className:"bg-neutral-50 border border-neutral-200 rounded-lg p-6",children:a.jsxs("p",{className:"text-neutral-700 leading-relaxed mb-0",children:["Email ",a.jsx("a",{href:"mailto:legal@fairyai.co.uk",className:"text-soft-blue-600 hover:underline",children:"legal@fairyai.co.uk"})," for questions regarding these Terms."]})})]})]})]})})]})),px=()=>(x.useEffect(()=>{window.scrollTo(0,0)},[]),a.jsxs("div",{className:"min-h-screen bg-white pt-16",children:[a.jsx("section",{className:"bg-gradient-to-br from-soft-blue-50 via-white to-soft-green-50 py-16 md:py-24",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[a.jsx("h1",{className:"font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4",children:"Delete Your Account"}),a.jsx("p",{className:"text-lg text-neutral-600 max-w-2xl mx-auto",children:"We're sad to see you go. Here's everything you need to know about deleting your FairyAI account."})]})}),a.jsx("section",{className:"py-12 md:py-16",children:a.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8",children:[a.jsxs("div",{className:"bg-amber-50 border-2 border-amber-300 rounded-lg p-6",children:[a.jsxs("p",{className:"text-amber-900 font-semibold mb-3 flex items-center gap-2",children:[a.jsx("svg",{className:"w-6 h-6 flex-shrink-0",fill:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})}),a.jsx("span",{children:"Important: Subscription Warning"})]}),a.jsx("p",{className:"text-amber-800 mb-3",children:"Deleting your account does NOT cancel your App Store or Google Play subscription. You must cancel your subscription separately to avoid future charges:"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-2 text-amber-800",children:[a.jsxs("li",{children:[a.jsx("strong",{children:"iOS:"})," Settings → [Your Name] → Subscriptions → FairyAI → Cancel Subscription"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Android:"})," Google Play Store → Profile Icon → Payments & subscriptions → Subscriptions → FairyAI → Cancel Subscription"]})]})]}),a.jsxs("div",{className:"bg-white border border-neutral-200 rounded-lg p-6 shadow-sm",children:[a.jsxs("h2",{className:"text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2",children:[a.jsx("svg",{className:"w-7 h-7 text-neutral-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})}),a.jsx("span",{children:"How to Delete Your Account"})]}),a.jsx("p",{className:"text-neutral-700 mb-4",children:"You can delete your FairyAI account directly from the app:"}),a.jsx("div",{className:"bg-neutral-50 border border-neutral-200 rounded-lg p-5",children:a.jsxs("ol",{className:"list-decimal ml-5 space-y-2 text-neutral-700",children:[a.jsx("li",{children:"Open the FairyAI app"}),a.jsxs("li",{children:["Go to ",a.jsx("strong",{children:"Settings"})]}),a.jsxs("li",{children:["Select ",a.jsx("strong",{children:"Privacy & Data"})]}),a.jsxs("li",{children:["Tap ",a.jsx("strong",{children:"Delete Account"})," (shown in red)"]}),a.jsx("li",{children:"Read the warnings carefully and confirm"}),a.jsx("li",{children:"Enter your password to verify it's you"}),a.jsx("li",{children:"Tap the final delete confirmation"})]})})]}),a.jsxs("div",{className:"bg-white border border-neutral-200 rounded-lg p-6 shadow-sm",children:[a.jsxs("h2",{className:"text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2",children:[a.jsx("svg",{className:"w-7 h-7 text-neutral-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),a.jsx("span",{children:"Can't Access the App?"})]}),a.jsx("p",{className:"text-neutral-700 mb-4",children:"If you can't access the app for any reason, you can request account deletion by email:"}),a.jsxs("div",{className:"bg-soft-blue-50 border border-soft-blue-200 rounded-lg p-5",children:[a.jsxs("p",{className:"text-neutral-700 mb-2",children:[a.jsx("strong",{children:"Email:"})," ",a.jsx("a",{href:"mailto:legal@fairyai.co.uk?subject=Account%20Deletion%20Request&body=Hi%20FairyAI%20team,%0A%0AI%20would%20like%20to%20request%20the%20deletion%20of%20my%20account.%0A%0AAccount%20email:%20%0A%0AThank%20you.",className:"text-soft-blue-600 hover:underline font-medium",children:"legal@fairyai.co.uk"})]}),a.jsx("p",{className:"text-neutral-600 text-sm mb-0",children:"Please include your account email address in your request so we can verify your identity."})]})]}),a.jsxs("div",{className:"bg-white border border-neutral-200 rounded-lg p-6 shadow-sm",children:[a.jsxs("h2",{className:"text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2",children:[a.jsx("svg",{className:"w-7 h-7 text-neutral-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),a.jsx("span",{children:"What Gets Deleted"})]}),a.jsx("p",{className:"text-neutral-700 mb-4",children:"When you delete your account, the following will be permanently removed after the 30-day grace period:"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-2 text-neutral-700",children:[a.jsx("li",{children:"All your created stories and story history"}),a.jsx("li",{children:"Custom characters you've created (including all 6 art styles)"}),a.jsx("li",{children:"Generated songs and narrations"}),a.jsx("li",{children:"Account preferences and settings"}),a.jsx("li",{children:"Subscription and purchase history"}),a.jsx("li",{children:"Support tickets and feedback"}),a.jsx("li",{children:"Any remaining Fairy Dust credits"})]})]}),a.jsxs("div",{className:"bg-white border border-neutral-200 rounded-lg p-6 shadow-sm",children:[a.jsxs("h2",{className:"text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2",children:[a.jsx("svg",{className:"w-7 h-7 text-neutral-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})}),a.jsx("span",{children:"30-Day Grace Period"})]}),a.jsx("p",{className:"text-neutral-700 mb-4",children:"We understand that sometimes deletions are accidental. Here's what happens:"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-3 text-neutral-700 mb-4",children:[a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Immediately:"})," Your account is deactivated and you can no longer log in"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Days 1-30:"})," Your data is retained but inaccessible. You can email"," ",a.jsx("a",{href:"mailto:legal@fairyai.co.uk",className:"text-soft-blue-600 hover:underline",children:"legal@fairyai.co.uk"})," to recover your account"]}),a.jsxs("li",{children:[a.jsx("strong",{className:"text-neutral-900",children:"After 30 days:"})," All your data is permanently deleted from our servers and cannot be recovered"]})]}),a.jsxs("p",{className:"text-neutral-600 text-sm",children:[a.jsx("strong",{children:"Note:"})," This grace period is for your protection and is required by data protection laws."]})]}),a.jsxs("div",{className:"bg-soft-green-50 border border-soft-green-200 rounded-lg p-6",children:[a.jsxs("h2",{className:"text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2",children:[a.jsx("svg",{className:"w-7 h-7 text-neutral-700",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),a.jsx("span",{children:"Having Issues? Talk to Us First"})]}),a.jsx("p",{className:"text-neutral-700 mb-4",children:"Before you delete your account, we'd love to help resolve any issues you're experiencing. Most problems can be fixed quickly:"}),a.jsxs("ul",{className:"list-disc ml-6 space-y-2 text-neutral-700 mb-5",children:[a.jsx("li",{children:"Not happy with story quality? We can adjust settings"}),a.jsx("li",{children:"Concerned about billing? We can help clarify charges"}),a.jsx("li",{children:"App not working properly? We can troubleshoot"}),a.jsx("li",{children:"Privacy concerns? We can explain what data we collect"})]}),a.jsx("a",{href:"mailto:support@fairyai.co.uk?subject=%5BFairyAI%20Support%5D&body=Hi%20FairyAI%20team,%0A%0AI'm%20considering%20deleting%20my%20account%20because:%0A%0A%0AThanks!",className:"inline-block bg-soft-green-500 hover:bg-soft-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors",children:"Contact Support Instead"})]})]})})]})),fx=()=>(x.useEffect(()=>{window.scrollTo(0,0)},[]),a.jsx("div",{style:{minHeight:"100vh",backgroundColor:"white",paddingTop:"64px",fontFamily:"system-ui, -apple-system, sans-serif"},children:a.jsxs("main",{style:{maxWidth:"800px",margin:"0 auto",padding:"40px 20px"},children:[a.jsx("h1",{style:{fontSize:"32px",fontWeight:"bold",marginBottom:"16px",color:"#1a1a1a"},children:"Delete Your FairyAI Account"}),a.jsx("p",{style:{fontSize:"18px",color:"#666",marginBottom:"40px"},children:"We're sad to see you go. Here's everything you need to know about deleting your FairyAI account."}),a.jsxs("div",{style:{backgroundColor:"#fef3c7",border:"2px solid #fbbf24",borderRadius:"8px",padding:"24px",marginBottom:"32px"},children:[a.jsx("h2",{style:{fontSize:"20px",fontWeight:"bold",marginBottom:"12px",color:"#92400e"},children:"⚠️ Important: Subscription Warning"}),a.jsx("p",{style:{marginBottom:"12px",color:"#78350f"},children:"Deleting your account does NOT cancel your App Store or Google Play subscription. You must cancel your subscription separately to avoid future charges:"}),a.jsxs("ul",{style:{marginLeft:"24px",color:"#78350f",lineHeight:"1.8"},children:[a.jsxs("li",{children:[a.jsx("strong",{children:"iOS:"})," Settings → [Your Name] → Subscriptions → FairyAI → Cancel Subscription"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Android:"})," Google Play Store → Profile Icon → Payments & subscriptions → Subscriptions → FairyAI → Cancel Subscription"]})]})]}),a.jsxs("div",{style:{border:"1px solid #e5e5e5",borderRadius:"8px",padding:"24px",marginBottom:"32px"},children:[a.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold",marginBottom:"16px",color:"#1a1a1a"},children:"How to Delete Your Account"}),a.jsx("p",{style:{marginBottom:"16px",color:"#4a4a4a"},children:"You can delete your FairyAI account directly from the app:"}),a.jsxs("ol",{style:{marginLeft:"24px",color:"#4a4a4a",lineHeight:"1.8"},children:[a.jsx("li",{children:"Open the FairyAI app"}),a.jsxs("li",{children:["Go to ",a.jsx("strong",{children:"Settings"})]}),a.jsxs("li",{children:["Select ",a.jsx("strong",{children:"Privacy & Data"})]}),a.jsxs("li",{children:["Tap ",a.jsx("strong",{children:"Delete Account"})," (shown in red)"]}),a.jsx("li",{children:"Read the warnings carefully and confirm"}),a.jsx("li",{children:"Enter your password to verify it's you"}),a.jsx("li",{children:"Tap the final delete confirmation"})]})]}),a.jsxs("div",{style:{border:"1px solid #e5e5e5",borderRadius:"8px",padding:"24px",marginBottom:"32px"},children:[a.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold",marginBottom:"16px",color:"#1a1a1a"},children:"Can't Access the App?"}),a.jsx("p",{style:{marginBottom:"16px",color:"#4a4a4a"},children:"If you can't access the app for any reason, you can request account deletion by email:"}),a.jsxs("p",{style:{color:"#4a4a4a"},children:[a.jsx("strong",{children:"Email:"})," ",a.jsx("a",{href:"mailto:legal@fairyai.co.uk?subject=Account%20Deletion%20Request&body=Hi%20FairyAI%20team,%0A%0AI%20would%20like%20to%20request%20the%20deletion%20of%20my%20account.%0A%0AAccount%20email:%20%0A%0AThank%20you.",style:{color:"#0066cc",textDecoration:"underline"},children:"legal@fairyai.co.uk"})]}),a.jsx("p",{style:{color:"#666",fontSize:"14px",marginTop:"8px"},children:"Please include your account email address in your request so we can verify your identity."})]}),a.jsxs("div",{style:{border:"1px solid #e5e5e5",borderRadius:"8px",padding:"24px",marginBottom:"32px"},children:[a.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold",marginBottom:"16px",color:"#1a1a1a"},children:"What Gets Deleted"}),a.jsx("p",{style:{marginBottom:"16px",color:"#4a4a4a"},children:"When you delete your account, the following will be permanently removed after the 30-day grace period:"}),a.jsxs("ul",{style:{marginLeft:"24px",color:"#4a4a4a",lineHeight:"1.8"},children:[a.jsx("li",{children:"All your created stories and story history"}),a.jsx("li",{children:"Custom characters you've created (including all 6 art styles)"}),a.jsx("li",{children:"Generated songs and narrations"}),a.jsx("li",{children:"Account preferences and settings"}),a.jsx("li",{children:"Subscription and purchase history"}),a.jsx("li",{children:"Support tickets and feedback"}),a.jsx("li",{children:"Any remaining Fairy Dust credits"})]})]}),a.jsxs("div",{style:{border:"1px solid #e5e5e5",borderRadius:"8px",padding:"24px",marginBottom:"32px"},children:[a.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold",marginBottom:"16px",color:"#1a1a1a"},children:"30-Day Grace Period"}),a.jsx("p",{style:{marginBottom:"16px",color:"#4a4a4a"},children:"We understand that sometimes deletions are accidental. Here's what happens:"}),a.jsxs("ul",{style:{marginLeft:"24px",color:"#4a4a4a",lineHeight:"1.8",marginBottom:"16px"},children:[a.jsxs("li",{style:{marginBottom:"12px"},children:[a.jsx("strong",{children:"Immediately:"})," Your account is deactivated and you can no longer log in"]}),a.jsxs("li",{style:{marginBottom:"12px"},children:[a.jsx("strong",{children:"Days 1-30:"})," Your data is retained but inaccessible. You can email"," ",a.jsx("a",{href:"mailto:legal@fairyai.co.uk",style:{color:"#0066cc",textDecoration:"underline"},children:"legal@fairyai.co.uk"})," ","to recover your account"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"After 30 days:"})," All your data is permanently deleted from our servers and cannot be recovered"]})]}),a.jsxs("p",{style:{color:"#666",fontSize:"14px"},children:[a.jsx("strong",{children:"Note:"})," This grace period is for your protection and is required by data protection laws."]})]}),a.jsxs("div",{style:{backgroundColor:"#f0fdf4",border:"1px solid #86efac",borderRadius:"8px",padding:"24px",marginBottom:"32px"},children:[a.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold",marginBottom:"16px",color:"#1a1a1a"},children:"Having Issues? Talk to Us First"}),a.jsx("p",{style:{marginBottom:"16px",color:"#4a4a4a"},children:"Before you delete your account, we'd love to help resolve any issues you're experiencing. Most problems can be fixed quickly:"}),a.jsxs("ul",{style:{marginLeft:"24px",color:"#4a4a4a",lineHeight:"1.8",marginBottom:"24px"},children:[a.jsx("li",{children:"Not happy with story quality? We can adjust settings"}),a.jsx("li",{children:"Concerned about billing? We can help clarify charges"}),a.jsx("li",{children:"App not working properly? We can troubleshoot"}),a.jsx("li",{children:"Privacy concerns? We can explain what data we collect"})]}),a.jsx("a",{href:"mailto:support@fairyai.co.uk?subject=%5BFairyAI%20Support%5D&body=Hi%20FairyAI%20team,%0A%0AI'm%20considering%20deleting%20my%20account%20because:%0A%0A%0AThanks!",style:{display:"inline-block",backgroundColor:"#10b981",color:"white",fontWeight:"bold",padding:"12px 24px",borderRadius:"8px",textDecoration:"none"},children:"Contact Support Instead"})]})]})})),gx=()=>(x.useEffect(()=>{window.scrollTo(0,0)},[]),a.jsxs("div",{className:"min-h-screen bg-white pt-16",children:[a.jsx("section",{className:"bg-gradient-to-br from-soft-blue-50 via-white to-soft-green-50 py-16 md:py-24",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[a.jsx("h1",{className:"font-display text-4xl md:text-5xl font-bold text-neutral-900 mb-4",children:"Get in Touch"}),a.jsx("p",{className:"text-lg text-neutral-600 max-w-2xl mx-auto",children:"We're here to help. Whether you have questions, need support, or just want to say hello, we'd love to hear from you."})]})}),a.jsx("section",{className:"py-12 md:py-16",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"grid md:grid-cols-2 gap-8 mb-12",children:[a.jsxs("div",{className:"bg-white border border-neutral-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow",children:[a.jsx("div",{className:"w-12 h-12 bg-soft-blue-100 rounded-full flex items-center justify-center mb-4",children:a.jsx("svg",{className:"w-6 h-6 text-soft-blue-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"})})}),a.jsx("h2",{className:"text-xl font-bold text-neutral-900 mb-2",children:"General Support"}),a.jsx("p",{className:"text-neutral-600 mb-4",children:"Questions about the app, features, or how to use FairyAI?"}),a.jsx("a",{href:"mailto:support@fairyai.co.uk",className:"text-soft-blue-600 hover:text-soft-blue-700 font-medium hover:underline",children:"support@fairyai.co.uk"})]}),a.jsxs("div",{className:"bg-white border border-neutral-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow",children:[a.jsx("div",{className:"w-12 h-12 bg-soft-green-100 rounded-full flex items-center justify-center mb-4",children:a.jsx("svg",{className:"w-6 h-6 text-soft-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})})}),a.jsx("h2",{className:"text-xl font-bold text-neutral-900 mb-2",children:"Legal & Privacy"}),a.jsx("p",{className:"text-neutral-600 mb-4",children:"Data requests, privacy questions, or legal matters?"}),a.jsx("a",{href:"mailto:legal@fairyai.co.uk",className:"text-soft-green-600 hover:text-soft-green-700 font-medium hover:underline",children:"legal@fairyai.co.uk"})]})]}),a.jsxs("div",{className:"bg-neutral-50 border border-neutral-200 rounded-lg p-8 mb-12",children:[a.jsx("h2",{className:"text-2xl font-bold text-neutral-900 mb-6",children:"About Us"}),a.jsxs("div",{className:"space-y-4 text-neutral-700",children:[a.jsxs("p",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Company:"})," Rebel AI Ltd"]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Registration:"})," Company Number SC839626 (Scotland, UK)"]}),a.jsxs("p",{children:[a.jsx("strong",{className:"text-neutral-900",children:"Location:"})," Scotland, United Kingdom"]})]})]})]})}),a.jsx(zc,{faqs:Nc,title:"Common Questions",subtitle:"Find answers before you reach out, or email us if you need more help"}),a.jsx("section",{className:"py-12 md:py-16",children:a.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"mt-12 text-center",children:[a.jsx("h3",{className:"text-xl font-bold text-neutral-900 mb-6",children:"Looking for something specific?"}),a.jsxs("div",{className:"flex flex-wrap justify-center gap-4",children:[a.jsx(ee,{to:"/privacy",className:"inline-block bg-white border-2 border-neutral-300 hover:border-soft-blue-500 text-neutral-700 hover:text-soft-blue-600 font-medium px-6 py-3 rounded-lg transition-all",children:"Privacy Policy"}),a.jsx(ee,{to:"/terms",className:"inline-block bg-white border-2 border-neutral-300 hover:border-soft-blue-500 text-neutral-700 hover:text-soft-blue-600 font-medium px-6 py-3 rounded-lg transition-all",children:"Terms of Service"}),a.jsx(ee,{to:"/delete-account",className:"inline-block bg-white border-2 border-neutral-300 hover:border-soft-blue-500 text-neutral-700 hover:text-soft-blue-600 font-medium px-6 py-3 rounded-lg transition-all",children:"Delete Account"})]})]}),a.jsx("div",{className:"mt-12 text-center",children:a.jsx("p",{className:"text-neutral-500 text-sm",children:"We typically respond within 24-48 hours during business days. Thanks for your patience!"})})]})})]}));function xx(){const{pathname:e}=He();return x.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function yx(){const[e,t]=x.useState(!1);x.useEffect(()=>{localStorage.getItem("cookie-consent")||t(!0)},[]);const n=r=>{localStorage.setItem("cookie-consent",r),t(!1)};return a.jsxs(yf,{children:[a.jsx(xx,{}),a.jsxs("div",{className:"min-h-screen bg-white",children:[a.jsx(Cf,{}),a.jsxs(Vp,{children:[a.jsx(we,{path:"/",element:a.jsx(gg,{})}),a.jsx(we,{path:"/how-it-works",element:a.jsx(xg,{})}),a.jsx(we,{path:"/safety",element:a.jsx(yg,{})}),a.jsx(we,{path:"/features",element:a.jsx(vg,{})}),a.jsx(we,{path:"/stories",element:a.jsx(wg,{})}),a.jsx(we,{path:"/stories/examples/:storyId",element:a.jsx(cx,{})}),a.jsx(we,{path:"/stories/:storyId",element:a.jsx(ux,{})}),a.jsx(we,{path:"/privacy",element:a.jsx(mx,{})}),a.jsx(we,{path:"/terms",element:a.jsx(hx,{})}),a.jsx(we,{path:"/delete-account",element:a.jsx(px,{})}),a.jsx(we,{path:"/delete",element:a.jsx(fx,{})}),a.jsx(we,{path:"/contact",element:a.jsx(gx,{})})]}),a.jsx(Ef,{})]}),e&&a.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 shadow-2xl z-50",children:a.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4",children:[a.jsxs("p",{className:"text-sm text-center sm:text-left",children:["We use cookies to improve your experience."," ",a.jsx(ee,{to:"/privacy",className:"underline hover:text-soft-blue-300",children:"Learn more"})]}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:()=>n("rejected"),className:"px-5 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap border border-white/30 hover:bg-white/10",children:"Necessary Only"}),a.jsx("button",{onClick:()=>n("accepted"),className:"bg-soft-blue-500 hover:bg-soft-blue-600 px-5 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap",children:"Accept All"})]})]})})]})}Li.createRoot(document.getElementById("root")).render(a.jsx(eu.StrictMode,{children:a.jsx(yx,{})}));
