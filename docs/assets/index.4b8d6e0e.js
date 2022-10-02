var Ck=Object.defineProperty,Ak=Object.defineProperties;var xk=Object.getOwnPropertyDescriptors;var Zl=Object.getOwnPropertySymbols;var Gy=Object.prototype.hasOwnProperty,Yy=Object.prototype.propertyIsEnumerable;var nf=(t,e,n)=>e in t?Ck(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ks=(t,e)=>{for(var n in e||(e={}))Gy.call(e,n)&&nf(t,n,e[n]);if(Zl)for(var n of Zl(e))Yy.call(e,n)&&nf(t,n,e[n]);return t},Xy=(t,e)=>Ak(t,xk(e));var rf=(t,e)=>{var n={};for(var r in t)Gy.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&Zl)for(var r of Zl(t))e.indexOf(r)<0&&Yy.call(t,r)&&(n[r]=t[r]);return n};var jn=(t,e,n)=>(nf(t,typeof e!="symbol"?e+"":e,n),n);const Rk=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Rk();function kd(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const kk="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dk=kd(kk);function gw(t){return!!t||t===""}function Ji(t){if(Ee(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=kt(r)?Nk(r):Ji(r);if(i)for(const o in i)e[o]=i[o]}return e}else{if(kt(t))return t;if(Dt(t))return t}}const Lk=/;(?![^(]*\))/g,Ok=/:(.+)/;function Nk(t){const e={};return t.split(Lk).forEach(n=>{if(n){const r=n.split(Ok);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Rt(t){let e="";if(kt(t))e=t;else if(Ee(t))for(let n=0;n<t.length;n++){const r=Rt(t[n]);r&&(e+=r+" ")}else if(Dt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sn=t=>kt(t)?t:t==null?"":Ee(t)||Dt(t)&&(t.toString===_w||!Le(t.toString))?JSON.stringify(t,mw,2):String(t),mw=(t,e)=>e&&e.__v_isRef?mw(t,e.value):Hs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:yw(e)?{[`Set(${e.size})`]:[...e.values()]}:Dt(e)&&!Ee(e)&&!ww(e)?String(e):e,lt={},Vs=[],ar=()=>{},Pk=()=>!1,Mk=/^on[^a-z]/,ic=t=>Mk.test(t),Dd=t=>t.startsWith("onUpdate:"),Gt=Object.assign,Ld=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Fk=Object.prototype.hasOwnProperty,We=(t,e)=>Fk.call(t,e),Ee=Array.isArray,Hs=t=>sc(t)==="[object Map]",yw=t=>sc(t)==="[object Set]",Le=t=>typeof t=="function",kt=t=>typeof t=="string",Od=t=>typeof t=="symbol",Dt=t=>t!==null&&typeof t=="object",vw=t=>Dt(t)&&Le(t.then)&&Le(t.catch),_w=Object.prototype.toString,sc=t=>_w.call(t),Uk=t=>sc(t).slice(8,-1),ww=t=>sc(t)==="[object Object]",Nd=t=>kt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,du=kd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Bk=/-(\w)/g,vr=oc(t=>t.replace(Bk,(e,n)=>n?n.toUpperCase():"")),$k=/\B([A-Z])/g,uo=oc(t=>t.replace($k,"-$1").toLowerCase()),ac=oc(t=>t.charAt(0).toUpperCase()+t.slice(1)),sf=oc(t=>t?`on${ac(t)}`:""),da=(t,e)=>!Object.is(t,e),of=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Su=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},bw=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Jy;const Vk=()=>Jy||(Jy=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let dr;class Ew{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&dr&&(this.parent=dr,this.index=(dr.scopes||(dr.scopes=[])).push(this)-1)}run(e){if(this.active){const n=dr;try{return dr=this,e()}finally{dr=n}}}on(){dr=this}off(){dr=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Iw(t){return new Ew(t)}function Hk(t,e=dr){e&&e.active&&e.effects.push(t)}const Pd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Tw=t=>(t.w&yi)>0,Sw=t=>(t.n&yi)>0,Wk=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=yi},qk=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];Tw(i)&&!Sw(i)?i.delete(t):e[n++]=i,i.w&=~yi,i.n&=~yi}e.length=n}},Of=new WeakMap;let zo=0,yi=1;const Nf=30;let ir;const Ki=Symbol(""),Pf=Symbol("");class Md{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Hk(this,r)}run(){if(!this.active)return this.fn();let e=ir,n=hi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ir,ir=this,hi=!0,yi=1<<++zo,zo<=Nf?Wk(this):Qy(this),this.fn()}finally{zo<=Nf&&qk(this),yi=1<<--zo,ir=this.parent,hi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ir===this?this.deferStop=!0:this.active&&(Qy(this),this.onStop&&this.onStop(),this.active=!1)}}function Qy(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let hi=!0;const Cw=[];function co(){Cw.push(hi),hi=!1}function ho(){const t=Cw.pop();hi=t===void 0?!0:t}function Pn(t,e,n){if(hi&&ir){let r=Of.get(t);r||Of.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Pd()),Aw(i)}}function Aw(t,e){let n=!1;zo<=Nf?Sw(t)||(t.n|=yi,n=!Tw(t)):n=!t.has(ir),n&&(t.add(ir),ir.deps.push(t))}function Br(t,e,n,r,i,o){const l=Of.get(t);if(!l)return;let c=[];if(e==="clear")c=[...l.values()];else if(n==="length"&&Ee(t))l.forEach((h,d)=>{(d==="length"||d>=r)&&c.push(h)});else switch(n!==void 0&&c.push(l.get(n)),e){case"add":Ee(t)?Nd(n)&&c.push(l.get("length")):(c.push(l.get(Ki)),Hs(t)&&c.push(l.get(Pf)));break;case"delete":Ee(t)||(c.push(l.get(Ki)),Hs(t)&&c.push(l.get(Pf)));break;case"set":Hs(t)&&c.push(l.get(Ki));break}if(c.length===1)c[0]&&Mf(c[0]);else{const h=[];for(const d of c)d&&h.push(...d);Mf(Pd(h))}}function Mf(t,e){for(const n of Ee(t)?t:[...t])(n!==ir||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const zk=kd("__proto__,__v_isRef,__isVue"),xw=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Od)),Kk=Fd(),jk=Fd(!1,!0),Gk=Fd(!0),Zy=Yk();function Yk(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ze(this);for(let o=0,l=this.length;o<l;o++)Pn(r,"get",o+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(ze)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){co();const r=ze(this)[e].apply(this,n);return ho(),r}}),t}function Fd(t=!1,e=!1){return function(r,i,o){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&o===(t?e?hD:Ow:e?Lw:Dw).get(r))return r;const l=Ee(r);if(!t&&l&&We(Zy,i))return Reflect.get(Zy,i,o);const c=Reflect.get(r,i,o);return(Od(i)?xw.has(i):zk(i))||(t||Pn(r,"get",i),e)?c:Et(c)?!l||!Nd(i)?c.value:c:Dt(c)?t?Nw(c):cs(c):c}}const Xk=Rw(),Jk=Rw(!0);function Rw(t=!1){return function(n,r,i,o){let l=n[r];if(pa(l)&&Et(l)&&!Et(i))return!1;if(!t&&!pa(i)&&(Pw(i)||(i=ze(i),l=ze(l)),!Ee(n)&&Et(l)&&!Et(i)))return l.value=i,!0;const c=Ee(n)&&Nd(r)?Number(r)<n.length:We(n,r),h=Reflect.set(n,r,i,o);return n===ze(o)&&(c?da(i,l)&&Br(n,"set",r,i):Br(n,"add",r,i)),h}}function Qk(t,e){const n=We(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Br(t,"delete",e,void 0),r}function Zk(t,e){const n=Reflect.has(t,e);return(!Od(e)||!xw.has(e))&&Pn(t,"has",e),n}function eD(t){return Pn(t,"iterate",Ee(t)?"length":Ki),Reflect.ownKeys(t)}const kw={get:Kk,set:Xk,deleteProperty:Qk,has:Zk,ownKeys:eD},tD={get:Gk,set(t,e){return!0},deleteProperty(t,e){return!0}},nD=Gt({},kw,{get:jk,set:Jk}),Ud=t=>t,lc=t=>Reflect.getPrototypeOf(t);function eu(t,e,n=!1,r=!1){t=t.__v_raw;const i=ze(t),o=ze(e);e!==o&&!n&&Pn(i,"get",e),!n&&Pn(i,"get",o);const{has:l}=lc(i),c=r?Ud:n?Vd:ga;if(l.call(i,e))return c(t.get(e));if(l.call(i,o))return c(t.get(o));t!==i&&t.get(e)}function tu(t,e=!1){const n=this.__v_raw,r=ze(n),i=ze(t);return t!==i&&!e&&Pn(r,"has",t),!e&&Pn(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function nu(t,e=!1){return t=t.__v_raw,!e&&Pn(ze(t),"iterate",Ki),Reflect.get(t,"size",t)}function ev(t){t=ze(t);const e=ze(this);return lc(e).has.call(e,t)||(e.add(t),Br(e,"add",t,t)),this}function tv(t,e){e=ze(e);const n=ze(this),{has:r,get:i}=lc(n);let o=r.call(n,t);o||(t=ze(t),o=r.call(n,t));const l=i.call(n,t);return n.set(t,e),o?da(e,l)&&Br(n,"set",t,e):Br(n,"add",t,e),this}function nv(t){const e=ze(this),{has:n,get:r}=lc(e);let i=n.call(e,t);i||(t=ze(t),i=n.call(e,t)),r&&r.call(e,t);const o=e.delete(t);return i&&Br(e,"delete",t,void 0),o}function rv(){const t=ze(this),e=t.size!==0,n=t.clear();return e&&Br(t,"clear",void 0,void 0),n}function ru(t,e){return function(r,i){const o=this,l=o.__v_raw,c=ze(l),h=e?Ud:t?Vd:ga;return!t&&Pn(c,"iterate",Ki),l.forEach((d,p)=>r.call(i,h(d),h(p),o))}}function iu(t,e,n){return function(...r){const i=this.__v_raw,o=ze(i),l=Hs(o),c=t==="entries"||t===Symbol.iterator&&l,h=t==="keys"&&l,d=i[t](...r),p=n?Ud:e?Vd:ga;return!e&&Pn(o,"iterate",h?Pf:Ki),{next(){const{value:m,done:_}=d.next();return _?{value:m,done:_}:{value:c?[p(m[0]),p(m[1])]:p(m),done:_}},[Symbol.iterator](){return this}}}}function Qr(t){return function(...e){return t==="delete"?!1:this}}function rD(){const t={get(o){return eu(this,o)},get size(){return nu(this)},has:tu,add:ev,set:tv,delete:nv,clear:rv,forEach:ru(!1,!1)},e={get(o){return eu(this,o,!1,!0)},get size(){return nu(this)},has:tu,add:ev,set:tv,delete:nv,clear:rv,forEach:ru(!1,!0)},n={get(o){return eu(this,o,!0)},get size(){return nu(this,!0)},has(o){return tu.call(this,o,!0)},add:Qr("add"),set:Qr("set"),delete:Qr("delete"),clear:Qr("clear"),forEach:ru(!0,!1)},r={get(o){return eu(this,o,!0,!0)},get size(){return nu(this,!0)},has(o){return tu.call(this,o,!0)},add:Qr("add"),set:Qr("set"),delete:Qr("delete"),clear:Qr("clear"),forEach:ru(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=iu(o,!1,!1),n[o]=iu(o,!0,!1),e[o]=iu(o,!1,!0),r[o]=iu(o,!0,!0)}),[t,n,e,r]}const[iD,sD,oD,aD]=rD();function Bd(t,e){const n=e?t?aD:oD:t?sD:iD;return(r,i,o)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(We(n,i)&&i in r?n:r,i,o)}const lD={get:Bd(!1,!1)},uD={get:Bd(!1,!0)},cD={get:Bd(!0,!1)},Dw=new WeakMap,Lw=new WeakMap,Ow=new WeakMap,hD=new WeakMap;function fD(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dD(t){return t.__v_skip||!Object.isExtensible(t)?0:fD(Uk(t))}function cs(t){return pa(t)?t:$d(t,!1,kw,lD,Dw)}function pD(t){return $d(t,!1,nD,uD,Lw)}function Nw(t){return $d(t,!0,tD,cD,Ow)}function $d(t,e,n,r,i){if(!Dt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=i.get(t);if(o)return o;const l=dD(t);if(l===0)return t;const c=new Proxy(t,l===2?r:n);return i.set(t,c),c}function fi(t){return pa(t)?fi(t.__v_raw):!!(t&&t.__v_isReactive)}function pa(t){return!!(t&&t.__v_isReadonly)}function Pw(t){return!!(t&&t.__v_isShallow)}function Mw(t){return fi(t)||pa(t)}function ze(t){const e=t&&t.__v_raw;return e?ze(e):t}function Ys(t){return Su(t,"__v_skip",!0),t}const ga=t=>Dt(t)?cs(t):t,Vd=t=>Dt(t)?Nw(t):t;function Fw(t){hi&&ir&&(t=ze(t),Aw(t.dep||(t.dep=Pd())))}function Uw(t,e){t=ze(t),t.dep&&Mf(t.dep)}function Et(t){return!!(t&&t.__v_isRef===!0)}function Pr(t){return Bw(t,!1)}function gD(t){return Bw(t,!0)}function Bw(t,e){return Et(t)?t:new mD(t,e)}class mD{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ze(e),this._value=n?e:ga(e)}get value(){return Fw(this),this._value}set value(e){e=this.__v_isShallow?e:ze(e),da(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:ga(e),Uw(this))}}function Ws(t){return Et(t)?t.value:t}const yD={get:(t,e,n)=>Ws(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Et(i)&&!Et(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function $w(t){return fi(t)?t:new Proxy(t,yD)}function vD(t){const e=Ee(t)?new Array(t.length):{};for(const n in t)e[n]=wD(t,n);return e}class _D{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function wD(t,e,n){const r=t[e];return Et(r)?r:new _D(t,e,n)}class bD{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Md(e,()=>{this._dirty||(this._dirty=!0,Uw(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=ze(this);return Fw(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ED(t,e,n=!1){let r,i;const o=Le(t);return o?(r=t,i=ar):(r=t.get,i=t.set),new bD(r,i,o||!i,n)}function di(t,e,n,r){let i;try{i=r?t(...r):t()}catch(o){uc(o,e,n)}return i}function Yn(t,e,n,r){if(Le(t)){const o=di(t,e,n,r);return o&&vw(o)&&o.catch(l=>{uc(l,e,n)}),o}const i=[];for(let o=0;o<t.length;o++)i.push(Yn(t[o],e,n,r));return i}function uc(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let o=e.parent;const l=e.proxy,c=n;for(;o;){const d=o.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,c)===!1)return}o=o.parent}const h=e.appContext.config.errorHandler;if(h){di(h,null,10,[t,l,c]);return}}ID(t,n,i,r)}function ID(t,e,n,r=!0){console.error(t)}let Cu=!1,Ff=!1;const Nn=[];let Dr=0;const ea=[];let Ko=null,Ps=0;const ta=[];let ii=null,Ms=0;const Vw=Promise.resolve();let Hd=null,Uf=null;function Wd(t){const e=Hd||Vw;return t?e.then(this?t.bind(this):t):e}function TD(t){let e=Dr+1,n=Nn.length;for(;e<n;){const r=e+n>>>1;ma(Nn[r])<t?e=r+1:n=r}return e}function Hw(t){(!Nn.length||!Nn.includes(t,Cu&&t.allowRecurse?Dr+1:Dr))&&t!==Uf&&(t.id==null?Nn.push(t):Nn.splice(TD(t.id),0,t),Ww())}function Ww(){!Cu&&!Ff&&(Ff=!0,Hd=Vw.then(Kw))}function SD(t){const e=Nn.indexOf(t);e>Dr&&Nn.splice(e,1)}function qw(t,e,n,r){Ee(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Ww()}function CD(t){qw(t,Ko,ea,Ps)}function AD(t){qw(t,ii,ta,Ms)}function qd(t,e=null){if(ea.length){for(Uf=e,Ko=[...new Set(ea)],ea.length=0,Ps=0;Ps<Ko.length;Ps++)Ko[Ps]();Ko=null,Ps=0,Uf=null,qd(t,e)}}function zw(t){if(ta.length){const e=[...new Set(ta)];if(ta.length=0,ii){ii.push(...e);return}for(ii=e,ii.sort((n,r)=>ma(n)-ma(r)),Ms=0;Ms<ii.length;Ms++)ii[Ms]();ii=null,Ms=0}}const ma=t=>t.id==null?1/0:t.id;function Kw(t){Ff=!1,Cu=!0,qd(t),Nn.sort((n,r)=>ma(n)-ma(r));const e=ar;try{for(Dr=0;Dr<Nn.length;Dr++){const n=Nn[Dr];n&&n.active!==!1&&di(n,null,14)}}finally{Dr=0,Nn.length=0,zw(),Cu=!1,Hd=null,(Nn.length||ea.length||ta.length)&&Kw(t)}}function xD(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||lt;let i=n;const o=e.startsWith("update:"),l=o&&e.slice(7);if(l&&l in r){const p=`${l==="modelValue"?"model":l}Modifiers`,{number:m,trim:_}=r[p]||lt;_?i=n.map(E=>E.trim()):m&&(i=n.map(bw))}let c,h=r[c=sf(e)]||r[c=sf(vr(e))];!h&&o&&(h=r[c=sf(uo(e))]),h&&Yn(h,t,6,i);const d=r[c+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Yn(d,t,6,i)}}function jw(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const o=t.emits;let l={},c=!1;if(!Le(t)){const h=d=>{const p=jw(d,e,!0);p&&(c=!0,Gt(l,p))};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}return!o&&!c?(r.set(t,null),null):(Ee(o)?o.forEach(h=>l[h]=null):Gt(l,o),r.set(t,l),l)}function cc(t,e){return!t||!ic(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(t,e[0].toLowerCase()+e.slice(1))||We(t,uo(e))||We(t,e))}let nn=null,Gw=null;function Au(t){const e=nn;return nn=t,Gw=t&&t.type.__scopeId||null,e}function xt(t,e=nn,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&gv(-1);const o=Au(e),l=t(...i);return Au(o),r._d&&gv(1),l};return r._n=!0,r._c=!0,r._d=!0,r}function af(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[l],slots:c,attrs:h,emit:d,render:p,renderCache:m,data:_,setupState:E,ctx:C,inheritAttrs:M}=t;let P,V;const X=Au(t);try{if(n.shapeFlag&4){const Z=i||r;P=pr(p.call(Z,Z,m,o,E,_,C)),V=h}else{const Z=e;P=pr(Z.length>1?Z(o,{attrs:h,slots:c,emit:d}):Z(o,null)),V=e.props?h:RD(h)}}catch(Z){ia.length=0,uc(Z,t,1),P=Re(Xn)}let se=P;if(V&&M!==!1){const Z=Object.keys(V),{shapeFlag:de}=se;Z.length&&de&7&&(l&&Z.some(Dd)&&(V=kD(V,l)),se=Zi(se,V))}return n.dirs&&(se.dirs=se.dirs?se.dirs.concat(n.dirs):n.dirs),n.transition&&(se.transition=n.transition),P=se,Au(X),P}const RD=t=>{let e;for(const n in t)(n==="class"||n==="style"||ic(n))&&((e||(e={}))[n]=t[n]);return e},kD=(t,e)=>{const n={};for(const r in t)(!Dd(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function DD(t,e,n){const{props:r,children:i,component:o}=t,{props:l,children:c,patchFlag:h}=e,d=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&h>=0){if(h&1024)return!0;if(h&16)return r?iv(r,l,d):!!l;if(h&8){const p=e.dynamicProps;for(let m=0;m<p.length;m++){const _=p[m];if(l[_]!==r[_]&&!cc(d,_))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:r===l?!1:r?l?iv(r,l,d):!0:!!l;return!1}function iv(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==t[o]&&!cc(n,o))return!0}return!1}function LD({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const OD=t=>t.__isSuspense;function ND(t,e){e&&e.pendingBranch?Ee(t)?e.effects.push(...t):e.effects.push(t):AD(t)}function pu(t,e){if(Ft){let n=Ft.provides;const r=Ft.parent&&Ft.parent.provides;r===n&&(n=Ft.provides=Object.create(r)),n[t]=e}}function Mr(t,e,n=!1){const r=Ft||nn;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Le(e)?e.call(r.proxy):e}}const sv={};function na(t,e,n){return Yw(t,e,n)}function Yw(t,e,{immediate:n,deep:r,flush:i,onTrack:o,onTrigger:l}=lt){const c=Ft;let h,d=!1,p=!1;if(Et(t)?(h=()=>t.value,d=Pw(t)):fi(t)?(h=()=>t,r=!0):Ee(t)?(p=!0,d=t.some(fi),h=()=>t.map(V=>{if(Et(V))return V.value;if(fi(V))return Hi(V);if(Le(V))return di(V,c,2)})):Le(t)?e?h=()=>di(t,c,2):h=()=>{if(!(c&&c.isUnmounted))return m&&m(),Yn(t,c,3,[_])}:h=ar,e&&r){const V=h;h=()=>Hi(V())}let m,_=V=>{m=P.onStop=()=>{di(V,c,4)}};if(ya)return _=ar,e?n&&Yn(e,c,3,[h(),p?[]:void 0,_]):h(),ar;let E=p?[]:sv;const C=()=>{if(!!P.active)if(e){const V=P.run();(r||d||(p?V.some((X,se)=>da(X,E[se])):da(V,E)))&&(m&&m(),Yn(e,c,3,[V,E===sv?void 0:E,_]),E=V)}else P.run()};C.allowRecurse=!!e;let M;i==="sync"?M=C:i==="post"?M=()=>En(C,c&&c.suspense):M=()=>{!c||c.isMounted?CD(C):C()};const P=new Md(h,M);return e?n?C():E=P.run():i==="post"?En(P.run.bind(P),c&&c.suspense):P.run(),()=>{P.stop(),c&&c.scope&&Ld(c.scope.effects,P)}}function PD(t,e,n){const r=this.proxy,i=kt(t)?t.includes(".")?Xw(r,t):()=>r[t]:t.bind(r,r);let o;Le(e)?o=e:(o=e.handler,n=e);const l=Ft;Xs(this);const c=Yw(i,o.bind(r),n);return l?Xs(l):Gi(),c}function Xw(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Hi(t,e){if(!Dt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Et(t))Hi(t.value,e);else if(Ee(t))for(let n=0;n<t.length;n++)Hi(t[n],e);else if(yw(t)||Hs(t))t.forEach(n=>{Hi(n,e)});else if(ww(t))for(const n in t)Hi(t[n],e);return t}function MD(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return t0(()=>{t.isMounted=!0}),n0(()=>{t.isUnmounting=!0}),t}const Gn=[Function,Array],FD={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gn,onEnter:Gn,onAfterEnter:Gn,onEnterCancelled:Gn,onBeforeLeave:Gn,onLeave:Gn,onAfterLeave:Gn,onLeaveCancelled:Gn,onBeforeAppear:Gn,onAppear:Gn,onAfterAppear:Gn,onAppearCancelled:Gn},setup(t,{slots:e}){const n=ep(),r=MD();let i;return()=>{const o=e.default&&Zw(e.default(),!0);if(!o||!o.length)return;let l=o[0];if(o.length>1){for(const M of o)if(M.type!==Xn){l=M;break}}const c=ze(t),{mode:h}=c;if(r.isLeaving)return lf(l);const d=ov(l);if(!d)return lf(l);const p=Bf(d,c,r,n);$f(d,p);const m=n.subTree,_=m&&ov(m);let E=!1;const{getTransitionKey:C}=d.type;if(C){const M=C();i===void 0?i=M:M!==i&&(i=M,E=!0)}if(_&&_.type!==Xn&&(!$i(d,_)||E)){const M=Bf(_,c,r,n);if($f(_,M),h==="out-in")return r.isLeaving=!0,M.afterLeave=()=>{r.isLeaving=!1,n.update()},lf(l);h==="in-out"&&d.type!==Xn&&(M.delayLeave=(P,V,X)=>{const se=Qw(r,_);se[String(_.key)]=_,P._leaveCb=()=>{V(),P._leaveCb=void 0,delete p.delayedLeave},p.delayedLeave=X})}return l}}},Jw=FD;function Qw(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Bf(t,e,n,r){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:_,onAfterLeave:E,onLeaveCancelled:C,onBeforeAppear:M,onAppear:P,onAfterAppear:V,onAppearCancelled:X}=e,se=String(t.key),Z=Qw(n,t),de=(z,Ie)=>{z&&Yn(z,r,9,Ie)},re={mode:o,persisted:l,beforeEnter(z){let Ie=c;if(!n.isMounted)if(i)Ie=M||c;else return;z._leaveCb&&z._leaveCb(!0);const ye=Z[se];ye&&$i(t,ye)&&ye.el._leaveCb&&ye.el._leaveCb(),de(Ie,[z])},enter(z){let Ie=h,ye=d,Ke=p;if(!n.isMounted)if(i)Ie=P||h,ye=V||d,Ke=X||p;else return;let it=!1;const ae=z._enterCb=Je=>{it||(it=!0,Je?de(Ke,[z]):de(ye,[z]),re.delayedLeave&&re.delayedLeave(),z._enterCb=void 0)};Ie?(Ie(z,ae),Ie.length<=1&&ae()):ae()},leave(z,Ie){const ye=String(t.key);if(z._enterCb&&z._enterCb(!0),n.isUnmounting)return Ie();de(m,[z]);let Ke=!1;const it=z._leaveCb=ae=>{Ke||(Ke=!0,Ie(),ae?de(C,[z]):de(E,[z]),z._leaveCb=void 0,Z[ye]===t&&delete Z[ye])};Z[ye]=t,_?(_(z,it),_.length<=1&&it()):it()},clone(z){return Bf(z,e,n,r)}};return re}function lf(t){if(hc(t))return t=Zi(t),t.children=null,t}function ov(t){return hc(t)?t.children?t.children[0]:void 0:t}function $f(t,e){t.shapeFlag&6&&t.component?$f(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Zw(t,e=!1,n){let r=[],i=0;for(let o=0;o<t.length;o++){let l=t[o];const c=n==null?l.key:String(n)+String(l.key!=null?l.key:o);l.type===bt?(l.patchFlag&128&&i++,r=r.concat(Zw(l.children,e,c))):(e||l.type!==Xn)&&r.push(c!=null?Zi(l,{key:c}):l)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function Ii(t){return Le(t)?{setup:t,name:t.name}:t}const xu=t=>!!t.type.__asyncLoader,hc=t=>t.type.__isKeepAlive;function UD(t,e){e0(t,"a",e)}function BD(t,e){e0(t,"da",e)}function e0(t,e,n=Ft){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(fc(e,r,n),n){let i=n.parent;for(;i&&i.parent;)hc(i.parent.vnode)&&$D(r,e,n,i),i=i.parent}}function $D(t,e,n,r){const i=fc(e,t,r,!0);zd(()=>{Ld(r[e],i)},n)}function fc(t,e,n=Ft,r=!1){if(n){const i=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...l)=>{if(n.isUnmounted)return;co(),Xs(n);const c=Yn(e,n,t,l);return Gi(),ho(),c});return r?i.unshift(o):i.push(o),o}}const Hr=t=>(e,n=Ft)=>(!ya||t==="sp")&&fc(t,e,n),VD=Hr("bm"),t0=Hr("m"),HD=Hr("bu"),WD=Hr("u"),n0=Hr("bum"),zd=Hr("um"),qD=Hr("sp"),zD=Hr("rtg"),KD=Hr("rtc");function jD(t,e=Ft){fc("ec",t,e)}let Vf=!0;function GD(t){const e=i0(t),n=t.proxy,r=t.ctx;Vf=!1,e.beforeCreate&&av(e.beforeCreate,t,"bc");const{data:i,computed:o,methods:l,watch:c,provide:h,inject:d,created:p,beforeMount:m,mounted:_,beforeUpdate:E,updated:C,activated:M,deactivated:P,beforeDestroy:V,beforeUnmount:X,destroyed:se,unmounted:Z,render:de,renderTracked:re,renderTriggered:z,errorCaptured:Ie,serverPrefetch:ye,expose:Ke,inheritAttrs:it,components:ae,directives:Je,filters:Qe}=e;if(d&&YD(d,r,null,t.appContext.config.unwrapInjectedRef),l)for(const Ve in l){const Ue=l[Ve];Le(Ue)&&(r[Ve]=Ue.bind(n))}if(i){const Ve=i.call(n,n);Dt(Ve)&&(t.data=cs(Ve))}if(Vf=!0,o)for(const Ve in o){const Ue=o[Ve],on=Le(Ue)?Ue.bind(n,n):Le(Ue.get)?Ue.get.bind(n,n):ar,Zn=!Le(Ue)&&Le(Ue.set)?Ue.set.bind(n):ar,St=sr({get:on,set:Zn});Object.defineProperty(r,Ve,{enumerable:!0,configurable:!0,get:()=>St.value,set:Un=>St.value=Un})}if(c)for(const Ve in c)r0(c[Ve],r,n,Ve);if(h){const Ve=Le(h)?h.call(n):h;Reflect.ownKeys(Ve).forEach(Ue=>{pu(Ue,Ve[Ue])})}p&&av(p,t,"c");function gt(Ve,Ue){Ee(Ue)?Ue.forEach(on=>Ve(on.bind(n))):Ue&&Ve(Ue.bind(n))}if(gt(VD,m),gt(t0,_),gt(HD,E),gt(WD,C),gt(UD,M),gt(BD,P),gt(jD,Ie),gt(KD,re),gt(zD,z),gt(n0,X),gt(zd,Z),gt(qD,ye),Ee(Ke))if(Ke.length){const Ve=t.exposed||(t.exposed={});Ke.forEach(Ue=>{Object.defineProperty(Ve,Ue,{get:()=>n[Ue],set:on=>n[Ue]=on})})}else t.exposed||(t.exposed={});de&&t.render===ar&&(t.render=de),it!=null&&(t.inheritAttrs=it),ae&&(t.components=ae),Je&&(t.directives=Je)}function YD(t,e,n=ar,r=!1){Ee(t)&&(t=Hf(t));for(const i in t){const o=t[i];let l;Dt(o)?"default"in o?l=Mr(o.from||i,o.default,!0):l=Mr(o.from||i):l=Mr(o),Et(l)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:c=>l.value=c}):e[i]=l}}function av(t,e,n){Yn(Ee(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function r0(t,e,n,r){const i=r.includes(".")?Xw(n,r):()=>n[r];if(kt(t)){const o=e[t];Le(o)&&na(i,o)}else if(Le(t))na(i,t.bind(n));else if(Dt(t))if(Ee(t))t.forEach(o=>r0(o,e,n,r));else{const o=Le(t.handler)?t.handler.bind(n):e[t.handler];Le(o)&&na(i,o,t)}}function i0(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:l}}=t.appContext,c=o.get(e);let h;return c?h=c:!i.length&&!n&&!r?h=e:(h={},i.length&&i.forEach(d=>Ru(h,d,l,!0)),Ru(h,e,l)),o.set(e,h),h}function Ru(t,e,n,r=!1){const{mixins:i,extends:o}=e;o&&Ru(t,o,n,!0),i&&i.forEach(l=>Ru(t,l,n,!0));for(const l in e)if(!(r&&l==="expose")){const c=XD[l]||n&&n[l];t[l]=c?c(t[l],e[l]):e[l]}return t}const XD={data:lv,props:Ui,emits:Ui,methods:Ui,computed:Ui,beforeCreate:hn,created:hn,beforeMount:hn,mounted:hn,beforeUpdate:hn,updated:hn,beforeDestroy:hn,beforeUnmount:hn,destroyed:hn,unmounted:hn,activated:hn,deactivated:hn,errorCaptured:hn,serverPrefetch:hn,components:Ui,directives:Ui,watch:QD,provide:lv,inject:JD};function lv(t,e){return e?t?function(){return Gt(Le(t)?t.call(this,this):t,Le(e)?e.call(this,this):e)}:e:t}function JD(t,e){return Ui(Hf(t),Hf(e))}function Hf(t){if(Ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function hn(t,e){return t?[...new Set([].concat(t,e))]:e}function Ui(t,e){return t?Gt(Gt(Object.create(null),t),e):e}function QD(t,e){if(!t)return e;if(!e)return t;const n=Gt(Object.create(null),t);for(const r in e)n[r]=hn(t[r],e[r]);return n}function ZD(t,e,n,r=!1){const i={},o={};Su(o,dc,1),t.propsDefaults=Object.create(null),s0(t,e,i,o);for(const l in t.propsOptions[0])l in i||(i[l]=void 0);n?t.props=r?i:pD(i):t.type.props?t.props=i:t.props=o,t.attrs=o}function eL(t,e,n,r){const{props:i,attrs:o,vnode:{patchFlag:l}}=t,c=ze(i),[h]=t.propsOptions;let d=!1;if((r||l>0)&&!(l&16)){if(l&8){const p=t.vnode.dynamicProps;for(let m=0;m<p.length;m++){let _=p[m];if(cc(t.emitsOptions,_))continue;const E=e[_];if(h)if(We(o,_))E!==o[_]&&(o[_]=E,d=!0);else{const C=vr(_);i[C]=Wf(h,c,C,E,t,!1)}else E!==o[_]&&(o[_]=E,d=!0)}}}else{s0(t,e,i,o)&&(d=!0);let p;for(const m in c)(!e||!We(e,m)&&((p=uo(m))===m||!We(e,p)))&&(h?n&&(n[m]!==void 0||n[p]!==void 0)&&(i[m]=Wf(h,c,m,void 0,t,!0)):delete i[m]);if(o!==c)for(const m in o)(!e||!We(e,m)&&!0)&&(delete o[m],d=!0)}d&&Br(t,"set","$attrs")}function s0(t,e,n,r){const[i,o]=t.propsOptions;let l=!1,c;if(e)for(let h in e){if(du(h))continue;const d=e[h];let p;i&&We(i,p=vr(h))?!o||!o.includes(p)?n[p]=d:(c||(c={}))[p]=d:cc(t.emitsOptions,h)||(!(h in r)||d!==r[h])&&(r[h]=d,l=!0)}if(o){const h=ze(n),d=c||lt;for(let p=0;p<o.length;p++){const m=o[p];n[m]=Wf(i,h,m,d[m],t,!We(d,m))}}return l}function Wf(t,e,n,r,i,o){const l=t[n];if(l!=null){const c=We(l,"default");if(c&&r===void 0){const h=l.default;if(l.type!==Function&&Le(h)){const{propsDefaults:d}=i;n in d?r=d[n]:(Xs(i),r=d[n]=h.call(null,e),Gi())}else r=h}l[0]&&(o&&!c?r=!1:l[1]&&(r===""||r===uo(n))&&(r=!0))}return r}function o0(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const o=t.props,l={},c=[];let h=!1;if(!Le(t)){const p=m=>{h=!0;const[_,E]=o0(m,e,!0);Gt(l,_),E&&c.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!o&&!h)return r.set(t,Vs),Vs;if(Ee(o))for(let p=0;p<o.length;p++){const m=vr(o[p]);uv(m)&&(l[m]=lt)}else if(o)for(const p in o){const m=vr(p);if(uv(m)){const _=o[p],E=l[m]=Ee(_)||Le(_)?{type:_}:_;if(E){const C=fv(Boolean,E.type),M=fv(String,E.type);E[0]=C>-1,E[1]=M<0||C<M,(C>-1||We(E,"default"))&&c.push(m)}}}const d=[l,c];return r.set(t,d),d}function uv(t){return t[0]!=="$"}function cv(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function hv(t,e){return cv(t)===cv(e)}function fv(t,e){return Ee(e)?e.findIndex(n=>hv(n,t)):Le(e)&&hv(e,t)?0:-1}const a0=t=>t[0]==="_"||t==="$stable",Kd=t=>Ee(t)?t.map(pr):[pr(t)],tL=(t,e,n)=>{const r=xt((...i)=>Kd(e(...i)),n);return r._c=!1,r},l0=(t,e,n)=>{const r=t._ctx;for(const i in t){if(a0(i))continue;const o=t[i];if(Le(o))e[i]=tL(i,o,r);else if(o!=null){const l=Kd(o);e[i]=()=>l}}},u0=(t,e)=>{const n=Kd(e);t.slots.default=()=>n},nL=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ze(e),Su(e,"_",n)):l0(e,t.slots={})}else t.slots={},e&&u0(t,e);Su(t.slots,dc,1)},rL=(t,e,n)=>{const{vnode:r,slots:i}=t;let o=!0,l=lt;if(r.shapeFlag&32){const c=e._;c?n&&c===1?o=!1:(Gt(i,e),!n&&c===1&&delete i._):(o=!e.$stable,l0(e,i)),l=e}else e&&(u0(t,e),l={default:1});if(o)for(const c in i)!a0(c)&&!(c in l)&&delete i[c]};function Qi(t,e){const n=nn;if(n===null)return t;const r=pc(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[l,c,h,d=lt]=e[o];Le(l)&&(l={mounted:l,updated:l}),l.deep&&Hi(c),i.push({dir:l,instance:r,value:c,oldValue:void 0,arg:h,modifiers:d})}return t}function Pi(t,e,n,r){const i=t.dirs,o=e&&e.dirs;for(let l=0;l<i.length;l++){const c=i[l];o&&(c.oldValue=o[l].value);let h=c.dir[r];h&&(co(),Yn(h,n,8,[t.el,c,t,e]),ho())}}function c0(){return{app:null,config:{isNativeTag:Pk,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let iL=0;function sL(t,e){return function(r,i=null){Le(r)||(r=Object.assign({},r)),i!=null&&!Dt(i)&&(i=null);const o=c0(),l=new Set;let c=!1;const h=o.app={_uid:iL++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:AL,get config(){return o.config},set config(d){},use(d,...p){return l.has(d)||(d&&Le(d.install)?(l.add(d),d.install(h,...p)):Le(d)&&(l.add(d),d(h,...p))),h},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),h},component(d,p){return p?(o.components[d]=p,h):o.components[d]},directive(d,p){return p?(o.directives[d]=p,h):o.directives[d]},mount(d,p,m){if(!c){const _=Re(r,i);return _.appContext=o,p&&e?e(_,d):t(_,d,m),c=!0,h._container=d,d.__vue_app__=h,pc(_.component)||_.component.proxy}},unmount(){c&&(t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return o.provides[d]=p,h}};return h}}function qf(t,e,n,r,i=!1){if(Ee(t)){t.forEach((_,E)=>qf(_,e&&(Ee(e)?e[E]:e),n,r,i));return}if(xu(r)&&!i)return;const o=r.shapeFlag&4?pc(r.component)||r.component.proxy:r.el,l=i?null:o,{i:c,r:h}=t,d=e&&e.r,p=c.refs===lt?c.refs={}:c.refs,m=c.setupState;if(d!=null&&d!==h&&(kt(d)?(p[d]=null,We(m,d)&&(m[d]=null)):Et(d)&&(d.value=null)),Le(h))di(h,c,12,[l,p]);else{const _=kt(h),E=Et(h);if(_||E){const C=()=>{if(t.f){const M=_?p[h]:h.value;i?Ee(M)&&Ld(M,o):Ee(M)?M.includes(o)||M.push(o):_?(p[h]=[o],We(m,h)&&(m[h]=p[h])):(h.value=[o],t.k&&(p[t.k]=h.value))}else _?(p[h]=l,We(m,h)&&(m[h]=l)):Et(h)&&(h.value=l,t.k&&(p[t.k]=l))};l?(C.id=-1,En(C,n)):C()}}}const En=ND;function oL(t){return aL(t)}function aL(t,e){const n=Vk();n.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:l,createText:c,createComment:h,setText:d,setElementText:p,parentNode:m,nextSibling:_,setScopeId:E=ar,cloneNode:C,insertStaticContent:M}=t,P=(w,T,x,B=null,N=null,q=null,Y=!1,W=null,H=!!T.dynamicChildren)=>{if(w===T)return;w&&!$i(w,T)&&(B=ie(w),mn(w,N,q,!0),w=null),T.patchFlag===-2&&(H=!1,T.dynamicChildren=null);const{type:$,ref:ue,shapeFlag:te}=T;switch($){case Qd:V(w,T,x,B);break;case Xn:X(w,T,x,B);break;case uf:w==null&&se(T,x,B,Y);break;case bt:Je(w,T,x,B,N,q,Y,W,H);break;default:te&1?re(w,T,x,B,N,q,Y,W,H):te&6?Qe(w,T,x,B,N,q,Y,W,H):(te&64||te&128)&&$.process(w,T,x,B,N,q,Y,W,H,st)}ue!=null&&N&&qf(ue,w&&w.ref,q,T||w,!T)},V=(w,T,x,B)=>{if(w==null)r(T.el=c(T.children),x,B);else{const N=T.el=w.el;T.children!==w.children&&d(N,T.children)}},X=(w,T,x,B)=>{w==null?r(T.el=h(T.children||""),x,B):T.el=w.el},se=(w,T,x,B)=>{[w.el,w.anchor]=M(w.children,T,x,B,w.el,w.anchor)},Z=({el:w,anchor:T},x,B)=>{let N;for(;w&&w!==T;)N=_(w),r(w,x,B),w=N;r(T,x,B)},de=({el:w,anchor:T})=>{let x;for(;w&&w!==T;)x=_(w),i(w),w=x;i(T)},re=(w,T,x,B,N,q,Y,W,H)=>{Y=Y||T.type==="svg",w==null?z(T,x,B,N,q,Y,W,H):Ke(w,T,N,q,Y,W,H)},z=(w,T,x,B,N,q,Y,W)=>{let H,$;const{type:ue,props:te,shapeFlag:le,transition:ve,patchFlag:Ne,dirs:je}=w;if(w.el&&C!==void 0&&Ne===-1)H=w.el=C(w.el);else{if(H=w.el=l(w.type,q,te&&te.is,te),le&8?p(H,w.children):le&16&&ye(w.children,H,null,B,N,q&&ue!=="foreignObject",Y,W),je&&Pi(w,null,B,"created"),te){for(const nt in te)nt!=="value"&&!du(nt)&&o(H,nt,null,te[nt],q,w.children,B,N,j);"value"in te&&o(H,"value",null,te.value),($=te.onVnodeBeforeMount)&&fr($,B,w)}Ie(H,w,w.scopeId,Y,B)}je&&Pi(w,null,B,"beforeMount");const Ge=(!N||N&&!N.pendingBranch)&&ve&&!ve.persisted;Ge&&ve.beforeEnter(H),r(H,T,x),(($=te&&te.onVnodeMounted)||Ge||je)&&En(()=>{$&&fr($,B,w),Ge&&ve.enter(H),je&&Pi(w,null,B,"mounted")},N)},Ie=(w,T,x,B,N)=>{if(x&&E(w,x),B)for(let q=0;q<B.length;q++)E(w,B[q]);if(N){let q=N.subTree;if(T===q){const Y=N.vnode;Ie(w,Y,Y.scopeId,Y.slotScopeIds,N.parent)}}},ye=(w,T,x,B,N,q,Y,W,H=0)=>{for(let $=H;$<w.length;$++){const ue=w[$]=W?si(w[$]):pr(w[$]);P(null,ue,T,x,B,N,q,Y,W)}},Ke=(w,T,x,B,N,q,Y)=>{const W=T.el=w.el;let{patchFlag:H,dynamicChildren:$,dirs:ue}=T;H|=w.patchFlag&16;const te=w.props||lt,le=T.props||lt;let ve;x&&Mi(x,!1),(ve=le.onVnodeBeforeUpdate)&&fr(ve,x,T,w),ue&&Pi(T,w,x,"beforeUpdate"),x&&Mi(x,!0);const Ne=N&&T.type!=="foreignObject";if($?it(w.dynamicChildren,$,W,x,B,Ne,q):Y||on(w,T,W,null,x,B,Ne,q,!1),H>0){if(H&16)ae(W,T,te,le,x,B,N);else if(H&2&&te.class!==le.class&&o(W,"class",null,le.class,N),H&4&&o(W,"style",te.style,le.style,N),H&8){const je=T.dynamicProps;for(let Ge=0;Ge<je.length;Ge++){const nt=je[Ge],an=te[nt],lr=le[nt];(lr!==an||nt==="value")&&o(W,nt,an,lr,N,w.children,x,B,j)}}H&1&&w.children!==T.children&&p(W,T.children)}else!Y&&$==null&&ae(W,T,te,le,x,B,N);((ve=le.onVnodeUpdated)||ue)&&En(()=>{ve&&fr(ve,x,T,w),ue&&Pi(T,w,x,"updated")},B)},it=(w,T,x,B,N,q,Y)=>{for(let W=0;W<T.length;W++){const H=w[W],$=T[W],ue=H.el&&(H.type===bt||!$i(H,$)||H.shapeFlag&70)?m(H.el):x;P(H,$,ue,null,B,N,q,Y,!0)}},ae=(w,T,x,B,N,q,Y)=>{if(x!==B){for(const W in B){if(du(W))continue;const H=B[W],$=x[W];H!==$&&W!=="value"&&o(w,W,$,H,Y,T.children,N,q,j)}if(x!==lt)for(const W in x)!du(W)&&!(W in B)&&o(w,W,x[W],null,Y,T.children,N,q,j);"value"in B&&o(w,"value",x.value,B.value)}},Je=(w,T,x,B,N,q,Y,W,H)=>{const $=T.el=w?w.el:c(""),ue=T.anchor=w?w.anchor:c("");let{patchFlag:te,dynamicChildren:le,slotScopeIds:ve}=T;ve&&(W=W?W.concat(ve):ve),w==null?(r($,x,B),r(ue,x,B),ye(T.children,x,ue,N,q,Y,W,H)):te>0&&te&64&&le&&w.dynamicChildren?(it(w.dynamicChildren,le,x,N,q,Y,W),(T.key!=null||N&&T===N.subTree)&&jd(w,T,!0)):on(w,T,x,ue,N,q,Y,W,H)},Qe=(w,T,x,B,N,q,Y,W,H)=>{T.slotScopeIds=W,w==null?T.shapeFlag&512?N.ctx.activate(T,x,B,Y,H):Qn(T,x,B,N,q,Y,H):gt(w,T,H)},Qn=(w,T,x,B,N,q,Y)=>{const W=w.component=wL(w,B,N);if(hc(w)&&(W.ctx.renderer=st),bL(W),W.asyncDep){if(N&&N.registerDep(W,Ve),!w.el){const H=W.subTree=Re(Xn);X(null,H,T,x)}return}Ve(W,w,T,x,N,q,Y)},gt=(w,T,x)=>{const B=T.component=w.component;if(DD(w,T,x))if(B.asyncDep&&!B.asyncResolved){Ue(B,T,x);return}else B.next=T,SD(B.update),B.update();else T.component=w.component,T.el=w.el,B.vnode=T},Ve=(w,T,x,B,N,q,Y)=>{const W=()=>{if(w.isMounted){let{next:ue,bu:te,u:le,parent:ve,vnode:Ne}=w,je=ue,Ge;Mi(w,!1),ue?(ue.el=Ne.el,Ue(w,ue,Y)):ue=Ne,te&&of(te),(Ge=ue.props&&ue.props.onVnodeBeforeUpdate)&&fr(Ge,ve,ue,Ne),Mi(w,!0);const nt=af(w),an=w.subTree;w.subTree=nt,P(an,nt,m(an.el),ie(an),w,N,q),ue.el=nt.el,je===null&&LD(w,nt.el),le&&En(le,N),(Ge=ue.props&&ue.props.onVnodeUpdated)&&En(()=>fr(Ge,ve,ue,Ne),N)}else{let ue;const{el:te,props:le}=T,{bm:ve,m:Ne,parent:je}=w,Ge=xu(T);if(Mi(w,!1),ve&&of(ve),!Ge&&(ue=le&&le.onVnodeBeforeMount)&&fr(ue,je,T),Mi(w,!0),te&&_e){const nt=()=>{w.subTree=af(w),_e(te,w.subTree,w,N,null)};Ge?T.type.__asyncLoader().then(()=>!w.isUnmounted&&nt()):nt()}else{const nt=w.subTree=af(w);P(null,nt,x,B,w,N,q),T.el=nt.el}if(Ne&&En(Ne,N),!Ge&&(ue=le&&le.onVnodeMounted)){const nt=T;En(()=>fr(ue,je,nt),N)}T.shapeFlag&256&&w.a&&En(w.a,N),w.isMounted=!0,T=x=B=null}},H=w.effect=new Md(W,()=>Hw(w.update),w.scope),$=w.update=H.run.bind(H);$.id=w.uid,Mi(w,!0),$()},Ue=(w,T,x)=>{T.component=w;const B=w.vnode.props;w.vnode=T,w.next=null,eL(w,T.props,B,x),rL(w,T.children,x),co(),qd(void 0,w.update),ho()},on=(w,T,x,B,N,q,Y,W,H=!1)=>{const $=w&&w.children,ue=w?w.shapeFlag:0,te=T.children,{patchFlag:le,shapeFlag:ve}=T;if(le>0){if(le&128){St($,te,x,B,N,q,Y,W,H);return}else if(le&256){Zn($,te,x,B,N,q,Y,W,H);return}}ve&8?(ue&16&&j($,N,q),te!==$&&p(x,te)):ue&16?ve&16?St($,te,x,B,N,q,Y,W,H):j($,N,q,!0):(ue&8&&p(x,""),ve&16&&ye(te,x,B,N,q,Y,W,H))},Zn=(w,T,x,B,N,q,Y,W,H)=>{w=w||Vs,T=T||Vs;const $=w.length,ue=T.length,te=Math.min($,ue);let le;for(le=0;le<te;le++){const ve=T[le]=H?si(T[le]):pr(T[le]);P(w[le],ve,x,null,N,q,Y,W,H)}$>ue?j(w,N,q,!0,!1,te):ye(T,x,B,N,q,Y,W,H,te)},St=(w,T,x,B,N,q,Y,W,H)=>{let $=0;const ue=T.length;let te=w.length-1,le=ue-1;for(;$<=te&&$<=le;){const ve=w[$],Ne=T[$]=H?si(T[$]):pr(T[$]);if($i(ve,Ne))P(ve,Ne,x,null,N,q,Y,W,H);else break;$++}for(;$<=te&&$<=le;){const ve=w[te],Ne=T[le]=H?si(T[le]):pr(T[le]);if($i(ve,Ne))P(ve,Ne,x,null,N,q,Y,W,H);else break;te--,le--}if($>te){if($<=le){const ve=le+1,Ne=ve<ue?T[ve].el:B;for(;$<=le;)P(null,T[$]=H?si(T[$]):pr(T[$]),x,Ne,N,q,Y,W,H),$++}}else if($>le)for(;$<=te;)mn(w[$],N,q,!0),$++;else{const ve=$,Ne=$,je=new Map;for($=Ne;$<=le;$++){const Vt=T[$]=H?si(T[$]):pr(T[$]);Vt.key!=null&&je.set(Vt.key,$)}let Ge,nt=0;const an=le-Ne+1;let lr=!1,ps=0;const wr=new Array(an);for($=0;$<an;$++)wr[$]=0;for($=ve;$<=te;$++){const Vt=w[$];if(nt>=an){mn(Vt,N,q,!0);continue}let yn;if(Vt.key!=null)yn=je.get(Vt.key);else for(Ge=Ne;Ge<=le;Ge++)if(wr[Ge-Ne]===0&&$i(Vt,T[Ge])){yn=Ge;break}yn===void 0?mn(Vt,N,q,!0):(wr[yn-Ne]=$+1,yn>=ps?ps=yn:lr=!0,P(Vt,T[yn],x,null,N,q,Y,W,H),nt++)}const gs=lr?lL(wr):Vs;for(Ge=gs.length-1,$=an-1;$>=0;$--){const Vt=Ne+$,yn=T[Vt],cl=Vt+1<ue?T[Vt+1].el:B;wr[$]===0?P(null,yn,x,cl,N,q,Y,W,H):lr&&(Ge<0||$!==gs[Ge]?Un(yn,x,cl,2):Ge--)}}},Un=(w,T,x,B,N=null)=>{const{el:q,type:Y,transition:W,children:H,shapeFlag:$}=w;if($&6){Un(w.component.subTree,T,x,B);return}if($&128){w.suspense.move(T,x,B);return}if($&64){Y.move(w,T,x,st);return}if(Y===bt){r(q,T,x);for(let te=0;te<H.length;te++)Un(H[te],T,x,B);r(w.anchor,T,x);return}if(Y===uf){Z(w,T,x);return}if(B!==2&&$&1&&W)if(B===0)W.beforeEnter(q),r(q,T,x),En(()=>W.enter(q),N);else{const{leave:te,delayLeave:le,afterLeave:ve}=W,Ne=()=>r(q,T,x),je=()=>{te(q,()=>{Ne(),ve&&ve()})};le?le(q,Ne,je):je()}else r(q,T,x)},mn=(w,T,x,B=!1,N=!1)=>{const{type:q,props:Y,ref:W,children:H,dynamicChildren:$,shapeFlag:ue,patchFlag:te,dirs:le}=w;if(W!=null&&qf(W,null,x,w,!0),ue&256){T.ctx.deactivate(w);return}const ve=ue&1&&le,Ne=!xu(w);let je;if(Ne&&(je=Y&&Y.onVnodeBeforeUnmount)&&fr(je,T,w),ue&6)ee(w.component,x,B);else{if(ue&128){w.suspense.unmount(x,B);return}ve&&Pi(w,null,T,"beforeUnmount"),ue&64?w.type.remove(w,T,x,N,st,B):$&&(q!==bt||te>0&&te&64)?j($,T,x,!1,!0):(q===bt&&te&384||!N&&ue&16)&&j(H,T,x),B&&To(w)}(Ne&&(je=Y&&Y.onVnodeUnmounted)||ve)&&En(()=>{je&&fr(je,T,w),ve&&Pi(w,null,T,"unmounted")},x)},To=w=>{const{type:T,el:x,anchor:B,transition:N}=w;if(T===bt){O(x,B);return}if(T===uf){de(w);return}const q=()=>{i(x),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(w.shapeFlag&1&&N&&!N.persisted){const{leave:Y,delayLeave:W}=N,H=()=>Y(x,q);W?W(w.el,q,H):H()}else q()},O=(w,T)=>{let x;for(;w!==T;)x=_(w),i(w),w=x;i(T)},ee=(w,T,x)=>{const{bum:B,scope:N,update:q,subTree:Y,um:W}=w;B&&of(B),N.stop(),q&&(q.active=!1,mn(Y,w,T,x)),W&&En(W,T),En(()=>{w.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},j=(w,T,x,B=!1,N=!1,q=0)=>{for(let Y=q;Y<w.length;Y++)mn(w[Y],T,x,B,N)},ie=w=>w.shapeFlag&6?ie(w.component.subTree):w.shapeFlag&128?w.suspense.next():_(w.anchor||w.el),qe=(w,T,x)=>{w==null?T._vnode&&mn(T._vnode,null,null,!0):P(T._vnode||null,w,T,null,null,null,x),zw(),T._vnode=w},st={p:P,um:mn,m:Un,r:To,mt:Qn,mc:ye,pc:on,pbc:it,n:ie,o:t};let xe,_e;return e&&([xe,_e]=e(st)),{render:qe,hydrate:xe,createApp:sL(qe,xe)}}function Mi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function jd(t,e,n=!1){const r=t.children,i=e.children;if(Ee(r)&&Ee(i))for(let o=0;o<r.length;o++){const l=r[o];let c=i[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[o]=si(i[o]),c.el=l.el),n||jd(l,c))}}function lL(t){const e=t.slice(),n=[0];let r,i,o,l,c;const h=t.length;for(r=0;r<h;r++){const d=t[r];if(d!==0){if(i=n[n.length-1],t[i]<d){e[r]=i,n.push(r);continue}for(o=0,l=n.length-1;o<l;)c=o+l>>1,t[n[c]]<d?o=c+1:l=c;d<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}for(o=n.length,l=n[o-1];o-- >0;)n[o]=l,l=e[l];return n}const uL=t=>t.__isTeleport,ra=t=>t&&(t.disabled||t.disabled===""),dv=t=>typeof SVGElement!="undefined"&&t instanceof SVGElement,zf=(t,e)=>{const n=t&&t.to;return kt(n)?e?e(n):null:n},cL={__isTeleport:!0,process(t,e,n,r,i,o,l,c,h,d){const{mc:p,pc:m,pbc:_,o:{insert:E,querySelector:C,createText:M,createComment:P}}=d,V=ra(e.props);let{shapeFlag:X,children:se,dynamicChildren:Z}=e;if(t==null){const de=e.el=M(""),re=e.anchor=M("");E(de,n,r),E(re,n,r);const z=e.target=zf(e.props,C),Ie=e.targetAnchor=M("");z&&(E(Ie,z),l=l||dv(z));const ye=(Ke,it)=>{X&16&&p(se,Ke,it,i,o,l,c,h)};V?ye(n,re):z&&ye(z,Ie)}else{e.el=t.el;const de=e.anchor=t.anchor,re=e.target=t.target,z=e.targetAnchor=t.targetAnchor,Ie=ra(t.props),ye=Ie?n:re,Ke=Ie?de:z;if(l=l||dv(re),Z?(_(t.dynamicChildren,Z,ye,i,o,l,c),jd(t,e,!0)):h||m(t,e,ye,Ke,i,o,l,c,!1),V)Ie||su(e,n,de,d,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const it=e.target=zf(e.props,C);it&&su(e,it,null,d,0)}else Ie&&su(e,re,z,d,1)}},remove(t,e,n,r,{um:i,o:{remove:o}},l){const{shapeFlag:c,children:h,anchor:d,targetAnchor:p,target:m,props:_}=t;if(m&&o(p),(l||!ra(_))&&(o(d),c&16))for(let E=0;E<h.length;E++){const C=h[E];i(C,e,n,!0,!!C.dynamicChildren)}},move:su,hydrate:hL};function su(t,e,n,{o:{insert:r},m:i},o=2){o===0&&r(t.targetAnchor,e,n);const{el:l,anchor:c,shapeFlag:h,children:d,props:p}=t,m=o===2;if(m&&r(l,e,n),(!m||ra(p))&&h&16)for(let _=0;_<d.length;_++)i(d[_],e,n,2);m&&r(c,e,n)}function hL(t,e,n,r,i,o,{o:{nextSibling:l,parentNode:c,querySelector:h}},d){const p=e.target=zf(e.props,h);if(p){const m=p._lpa||p.firstChild;e.shapeFlag&16&&(ra(e.props)?(e.anchor=d(l(t),e,c(t),n,r,i,o),e.targetAnchor=m):(e.anchor=l(t),e.targetAnchor=d(m,e,p,n,r,i,o)),p._lpa=e.targetAnchor&&l(e.targetAnchor))}return e.anchor&&l(e.anchor)}const Gd=cL,Yd="components",fL="directives";function en(t,e){return Jd(Yd,t,!0,e)||t}const h0=Symbol();function dL(t){return kt(t)?Jd(Yd,t,!1)||t:t||h0}function Xd(t){return Jd(fL,t)}function Jd(t,e,n=!0,r=!1){const i=nn||Ft;if(i){const o=i.type;if(t===Yd){const c=SL(o);if(c&&(c===e||c===vr(e)||c===ac(vr(e))))return o}const l=pv(i[t]||o[t],e)||pv(i.appContext[t],e);return!l&&r?o:l}}function pv(t,e){return t&&(t[e]||t[vr(e)]||t[ac(vr(e))])}const bt=Symbol(void 0),Qd=Symbol(void 0),Xn=Symbol(void 0),uf=Symbol(void 0),ia=[];let ji=null;function ce(t=!1){ia.push(ji=t?null:[])}function pL(){ia.pop(),ji=ia[ia.length-1]||null}let ku=1;function gv(t){ku+=t}function f0(t){return t.dynamicChildren=ku>0?ji||Vs:null,pL(),ku>0&&ji&&ji.push(t),t}function Ce(t,e,n,r,i,o){return f0(tt(t,e,n,r,i,o,!0))}function Cn(t,e,n,r,i){return f0(Re(t,e,n,r,i,!0))}function Du(t){return t?t.__v_isVNode===!0:!1}function $i(t,e){return t.type===e.type&&t.key===e.key}const dc="__vInternal",d0=({key:t})=>t!=null?t:null,gu=({ref:t,ref_key:e,ref_for:n})=>t!=null?kt(t)||Et(t)||Le(t)?{i:nn,r:t,k:e,f:!!n}:t:null;function tt(t,e=null,n=null,r=0,i=null,o=t===bt?0:1,l=!1,c=!1){const h={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&d0(e),ref:e&&gu(e),scopeId:Gw,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(Zd(h,n),o&128&&t.normalize(h)):n&&(h.shapeFlag|=kt(n)?8:16),ku>0&&!l&&ji&&(h.patchFlag>0||o&6)&&h.patchFlag!==32&&ji.push(h),h}const Re=gL;function gL(t,e=null,n=null,r=0,i=null,o=!1){if((!t||t===h0)&&(t=Xn),Du(t)){const c=Zi(t,e,!0);return n&&Zd(c,n),c}if(CL(t)&&(t=t.__vccOpts),e){e=mL(e);let{class:c,style:h}=e;c&&!kt(c)&&(e.class=Rt(c)),Dt(h)&&(Mw(h)&&!Ee(h)&&(h=Gt({},h)),e.style=Ji(h))}const l=kt(t)?1:OD(t)?128:uL(t)?64:Dt(t)?4:Le(t)?2:0;return tt(t,e,n,r,i,l,o,!0)}function mL(t){return t?Mw(t)||dc in t?Gt({},t):t:null}function Zi(t,e,n=!1){const{props:r,ref:i,patchFlag:o,children:l}=t,c=e?Na(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&d0(c),ref:e&&e.ref?n&&i?Ee(i)?i.concat(gu(e)):[i,gu(e)]:gu(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zi(t.ssContent),ssFallback:t.ssFallback&&Zi(t.ssFallback),el:t.el,anchor:t.anchor}}function vi(t=" ",e=0){return Re(Qd,null,t,e)}function yt(t="",e=!1){return e?(ce(),Cn(Xn,null,t)):Re(Xn,null,t)}function pr(t){return t==null||typeof t=="boolean"?Re(Xn):Ee(t)?Re(bt,null,t.slice()):typeof t=="object"?si(t):Re(Qd,null,String(t))}function si(t){return t.el===null||t.memo?t:Zi(t)}function Zd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Ee(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Zd(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(dc in e)?e._ctx=nn:i===3&&nn&&(nn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Le(e)?(e={default:e,_ctx:nn},n=32):(e=String(e),r&64?(n=16,e=[vi(e)]):n=8);t.children=e,t.shapeFlag|=n}function Na(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Rt([e.class,r.class]));else if(i==="style")e.style=Ji([e.style,r.style]);else if(ic(i)){const o=e[i],l=r[i];l&&o!==l&&!(Ee(o)&&o.includes(l))&&(e[i]=o?[].concat(o,l):l)}else i!==""&&(e[i]=r[i])}return e}function fr(t,e,n,r=null){Yn(t,e,7,[n,r])}function Lu(t,e,n,r){let i;const o=n&&n[r];if(Ee(t)||kt(t)){i=new Array(t.length);for(let l=0,c=t.length;l<c;l++)i[l]=e(t[l],l,void 0,o&&o[l])}else if(typeof t=="number"){i=new Array(t);for(let l=0;l<t;l++)i[l]=e(l+1,l,void 0,o&&o[l])}else if(Dt(t))if(t[Symbol.iterator])i=Array.from(t,(l,c)=>e(l,c,void 0,o&&o[c]));else{const l=Object.keys(t);i=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];i[c]=e(t[d],d,c,o&&o[c])}}else i=[];return n&&(n[r]=i),i}function gr(t,e,n={},r,i){if(nn.isCE||nn.parent&&xu(nn.parent)&&nn.parent.isCE)return Re("slot",e==="default"?null:{name:e},r&&r());let o=t[e];o&&o._c&&(o._d=!1),ce();const l=o&&p0(o(n)),c=Cn(bt,{key:n.key||`_${e}`},l||(r?r():[]),l&&t._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),o&&o._c&&(o._d=!0),c}function p0(t){return t.some(e=>Du(e)?!(e.type===Xn||e.type===bt&&!p0(e.children)):!0)?t:null}const Kf=t=>t?g0(t)?pc(t)||t.proxy:Kf(t.parent):null,Ou=Gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Kf(t.parent),$root:t=>Kf(t.root),$emit:t=>t.emit,$options:t=>i0(t),$forceUpdate:t=>()=>Hw(t.update),$nextTick:t=>Wd.bind(t.proxy),$watch:t=>PD.bind(t)}),yL={get({_:t},e){const{ctx:n,setupState:r,data:i,props:o,accessCache:l,type:c,appContext:h}=t;let d;if(e[0]!=="$"){const E=l[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return o[e]}else{if(r!==lt&&We(r,e))return l[e]=1,r[e];if(i!==lt&&We(i,e))return l[e]=2,i[e];if((d=t.propsOptions[0])&&We(d,e))return l[e]=3,o[e];if(n!==lt&&We(n,e))return l[e]=4,n[e];Vf&&(l[e]=0)}}const p=Ou[e];let m,_;if(p)return e==="$attrs"&&Pn(t,"get",e),p(t);if((m=c.__cssModules)&&(m=m[e]))return m;if(n!==lt&&We(n,e))return l[e]=4,n[e];if(_=h.config.globalProperties,We(_,e))return _[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:o}=t;return i!==lt&&We(i,e)?(i[e]=n,!0):r!==lt&&We(r,e)?(r[e]=n,!0):We(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:o}},l){let c;return!!n[l]||t!==lt&&We(t,l)||e!==lt&&We(e,l)||(c=o[0])&&We(c,l)||We(r,l)||We(Ou,l)||We(i.config.globalProperties,l)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:We(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},vL=c0();let _L=0;function wL(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||vL,o={uid:_L++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ew(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:o0(r,i),emitsOptions:jw(r,i),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:r.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=xD.bind(null,o),t.ce&&t.ce(o),o}let Ft=null;const ep=()=>Ft||nn,Xs=t=>{Ft=t,t.scope.on()},Gi=()=>{Ft&&Ft.scope.off(),Ft=null};function g0(t){return t.vnode.shapeFlag&4}let ya=!1;function bL(t,e=!1){ya=e;const{props:n,children:r}=t.vnode,i=g0(t);ZD(t,n,i,e),nL(t,r);const o=i?EL(t,e):void 0;return ya=!1,o}function EL(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ys(new Proxy(t.ctx,yL));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?TL(t):null;Xs(t),co();const o=di(r,t,0,[t.props,i]);if(ho(),Gi(),vw(o)){if(o.then(Gi,Gi),e)return o.then(l=>{mv(t,l,e)}).catch(l=>{uc(l,t,0)});t.asyncDep=o}else mv(t,o,e)}else m0(t,e)}function mv(t,e,n){Le(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Dt(e)&&(t.setupState=$w(e)),m0(t,n)}let yv;function m0(t,e,n){const r=t.type;if(!t.render){if(!e&&yv&&!r.render){const i=r.template;if(i){const{isCustomElement:o,compilerOptions:l}=t.appContext.config,{delimiters:c,compilerOptions:h}=r,d=Gt(Gt({isCustomElement:o,delimiters:c},l),h);r.render=yv(i,d)}}t.render=r.render||ar}Xs(t),co(),GD(t),ho(),Gi()}function IL(t){return new Proxy(t.attrs,{get(e,n){return Pn(t,"get","$attrs"),e[n]}})}function TL(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=IL(t))},slots:t.slots,emit:t.emit,expose:e}}function pc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($w(Ys(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ou)return Ou[n](t)}}))}function SL(t){return Le(t)&&t.displayName||t.name}function CL(t){return Le(t)&&"__vccOpts"in t}const sr=(t,e)=>ED(t,e,ya);function tp(t,e,n){const r=arguments.length;return r===2?Dt(e)&&!Ee(e)?Du(e)?Re(t,null,[e]):Re(t,e):Re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Du(n)&&(n=[n]),Re(t,e,n))}const AL="3.2.33",xL="http://www.w3.org/2000/svg",Vi=typeof document!="undefined"?document:null,vv=Vi&&Vi.createElement("template"),RL={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?Vi.createElementNS(xL,t):Vi.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Vi.createTextNode(t),createComment:t=>Vi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,o){const l=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{vv.innerHTML=r?`<svg>${t}</svg>`:t;const c=vv.content;if(r){const h=c.firstChild;for(;h.firstChild;)c.appendChild(h.firstChild);c.removeChild(h)}e.insertBefore(c,n)}return[l?l.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function kL(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function DL(t,e,n){const r=t.style,i=kt(n);if(n&&!i){for(const o in n)jf(r,o,n[o]);if(e&&!kt(e))for(const o in e)n[o]==null&&jf(r,o,"")}else{const o=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=o)}}const _v=/\s*!important$/;function jf(t,e,n){if(Ee(n))n.forEach(r=>jf(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=LL(t,e);_v.test(n)?t.setProperty(uo(r),n.replace(_v,""),"important"):t[r]=n}}const wv=["Webkit","Moz","ms"],cf={};function LL(t,e){const n=cf[e];if(n)return n;let r=vr(e);if(r!=="filter"&&r in t)return cf[e]=r;r=ac(r);for(let i=0;i<wv.length;i++){const o=wv[i]+r;if(o in t)return cf[e]=o}return e}const bv="http://www.w3.org/1999/xlink";function OL(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(bv,e.slice(6,e.length)):t.setAttributeNS(bv,e,n);else{const o=Dk(e);n==null||o&&!gw(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function NL(t,e,n,r,i,o,l){if(e==="innerHTML"||e==="textContent"){r&&l(r,i,o),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const h=n==null?"":n;(t.value!==h||t.tagName==="OPTION")&&(t.value=h),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const h=typeof t[e];h==="boolean"?n=gw(n):n==null&&h==="string"?(n="",c=!0):h==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}const[y0,PL]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Gf=0;const ML=Promise.resolve(),FL=()=>{Gf=0},UL=()=>Gf||(ML.then(FL),Gf=y0());function BL(t,e,n,r){t.addEventListener(e,n,r)}function $L(t,e,n,r){t.removeEventListener(e,n,r)}function VL(t,e,n,r,i=null){const o=t._vei||(t._vei={}),l=o[e];if(r&&l)l.value=r;else{const[c,h]=HL(e);if(r){const d=o[e]=WL(r,i);BL(t,c,d,h)}else l&&($L(t,c,l,h),o[e]=void 0)}}const Ev=/(?:Once|Passive|Capture)$/;function HL(t){let e;if(Ev.test(t)){e={};let n;for(;n=t.match(Ev);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[uo(t.slice(2)),e]}function WL(t,e){const n=r=>{const i=r.timeStamp||y0();(PL||i>=n.attached-1)&&Yn(qL(r,n.value),e,5,[r])};return n.value=t,n.attached=UL(),n}function qL(t,e){if(Ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Iv=/^on[a-z]/,zL=(t,e,n,r,i=!1,o,l,c,h)=>{e==="class"?kL(t,r,i):e==="style"?DL(t,n,r):ic(e)?Dd(e)||VL(t,e,n,r,l):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):KL(t,e,r,i))?NL(t,e,r,o,l,c,h):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),OL(t,e,r,i))};function KL(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Iv.test(e)&&Le(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Iv.test(e)&&kt(n)?!1:e in t}const Zr="transition",$o="animation",gc=(t,{slots:e})=>tp(Jw,jL(t),e);gc.displayName="Transition";const v0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};gc.props=Gt({},Jw.props,v0);const Fi=(t,e=[])=>{Ee(t)?t.forEach(n=>n(...e)):t&&t(...e)},Tv=t=>t?Ee(t)?t.some(e=>e.length>1):t.length>1:!1;function jL(t){const e={};for(const ae in t)ae in v0||(e[ae]=t[ae]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:l=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:h=o,appearActiveClass:d=l,appearToClass:p=c,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:_=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,C=GL(i),M=C&&C[0],P=C&&C[1],{onBeforeEnter:V,onEnter:X,onEnterCancelled:se,onLeave:Z,onLeaveCancelled:de,onBeforeAppear:re=V,onAppear:z=X,onAppearCancelled:Ie=se}=e,ye=(ae,Je,Qe)=>{Ds(ae,Je?p:c),Ds(ae,Je?d:l),Qe&&Qe()},Ke=(ae,Je)=>{Ds(ae,E),Ds(ae,_),Je&&Je()},it=ae=>(Je,Qe)=>{const Qn=ae?z:X,gt=()=>ye(Je,ae,Qe);Fi(Qn,[Je,gt]),Sv(()=>{Ds(Je,ae?h:o),ei(Je,ae?p:c),Tv(Qn)||Cv(Je,r,M,gt)})};return Gt(e,{onBeforeEnter(ae){Fi(V,[ae]),ei(ae,o),ei(ae,l)},onBeforeAppear(ae){Fi(re,[ae]),ei(ae,h),ei(ae,d)},onEnter:it(!1),onAppear:it(!0),onLeave(ae,Je){const Qe=()=>Ke(ae,Je);ei(ae,m),JL(),ei(ae,_),Sv(()=>{Ds(ae,m),ei(ae,E),Tv(Z)||Cv(ae,r,P,Qe)}),Fi(Z,[ae,Qe])},onEnterCancelled(ae){ye(ae,!1),Fi(se,[ae])},onAppearCancelled(ae){ye(ae,!0),Fi(Ie,[ae])},onLeaveCancelled(ae){Ke(ae),Fi(de,[ae])}})}function GL(t){if(t==null)return null;if(Dt(t))return[hf(t.enter),hf(t.leave)];{const e=hf(t);return[e,e]}}function hf(t){return bw(t)}function ei(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Ds(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Sv(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let YL=0;function Cv(t,e,n,r){const i=t._endId=++YL,o=()=>{i===t._endId&&r()};if(n)return setTimeout(o,n);const{type:l,timeout:c,propCount:h}=XL(t,e);if(!l)return r();const d=l+"end";let p=0;const m=()=>{t.removeEventListener(d,_),o()},_=E=>{E.target===t&&++p>=h&&m()};setTimeout(()=>{p<h&&m()},c+1),t.addEventListener(d,_)}function XL(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),i=r(Zr+"Delay"),o=r(Zr+"Duration"),l=Av(i,o),c=r($o+"Delay"),h=r($o+"Duration"),d=Av(c,h);let p=null,m=0,_=0;e===Zr?l>0&&(p=Zr,m=l,_=o.length):e===$o?d>0&&(p=$o,m=d,_=h.length):(m=Math.max(l,d),p=m>0?l>d?Zr:$o:null,_=p?p===Zr?o.length:h.length:0);const E=p===Zr&&/\b(transform|all)(,|$)/.test(n[Zr+"Property"]);return{type:p,timeout:m,propCount:_,hasTransform:E}}function Av(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>xv(n)+xv(t[r])))}function xv(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function JL(){return document.body.offsetHeight}const Rv={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Vo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Vo(t,!0),r.enter(t)):r.leave(t,()=>{Vo(t,!1)}):Vo(t,e))},beforeUnmount(t,{value:e}){Vo(t,e)}};function Vo(t,e){t.style.display=e?t._vod:"none"}const QL=Gt({patchProp:zL},RL);let kv;function ZL(){return kv||(kv=oL(QL))}const eO=(...t)=>{const e=ZL().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=tO(r);if(!i)return;const o=e._component;!Le(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.innerHTML="";const l=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),l},e};function tO(t){return kt(t)?document.querySelector(t):t}var nO=!1;/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let _0;const mc=t=>_0=t,w0=Symbol();function Yf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var sa;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(sa||(sa={}));function rO(){const t=Iw(!0),e=t.run(()=>Pr({}));let n=[],r=[];const i=Ys({install(o){mc(i),i._a=o,o.provide(w0,i),o.config.globalProperties.$pinia=i,r.forEach(l=>n.push(l)),r=[]},use(o){return!this._a&&!nO?r.push(o):n.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const b0=()=>{};function Dv(t,e,n,r=b0){t.push(e);const i=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),r())};return!n&&ep()&&zd(i),i}function Ls(t,...e){t.slice().forEach(n=>{n(...e)})}function Xf(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];Yf(i)&&Yf(r)&&t.hasOwnProperty(n)&&!Et(r)&&!fi(r)?t[n]=Xf(i,r):t[n]=r}return t}const iO=Symbol();function sO(t){return!Yf(t)||!t.hasOwnProperty(iO)}const{assign:kr}=Object;function oO(t){return!!(Et(t)&&t.effect)}function aO(t,e,n,r){const{state:i,actions:o,getters:l}=e,c=n.state.value[t];let h;function d(){c||(n.state.value[t]=i?i():{});const p=vD(n.state.value[t]);return kr(p,o,Object.keys(l||{}).reduce((m,_)=>(m[_]=Ys(sr(()=>{mc(n);const E=n._s.get(t);return l[_].call(E,E)})),m),{}))}return h=E0(t,d,e,n),h.$reset=function(){const m=i?i():{};this.$patch(_=>{kr(_,m)})},h}function E0(t,e,n={},r,i){let o;const l=n.state,c=kr({actions:{}},n),h={deep:!0};let d,p,m=Ys([]),_=Ys([]),E;const C=r.state.value[t];!l&&!C&&(r.state.value[t]={}),Pr({});function M(re){let z;d=p=!1,typeof re=="function"?(re(r.state.value[t]),z={type:sa.patchFunction,storeId:t,events:E}):(Xf(r.state.value[t],re),z={type:sa.patchObject,payload:re,storeId:t,events:E}),Wd().then(()=>{d=!0}),p=!0,Ls(m,z,r.state.value[t])}const P=b0;function V(){o.stop(),m=[],_=[],r._s.delete(t)}function X(re,z){return function(){mc(r);const Ie=Array.from(arguments),ye=[],Ke=[];function it(Qe){ye.push(Qe)}function ae(Qe){Ke.push(Qe)}Ls(_,{args:Ie,name:re,store:Z,after:it,onError:ae});let Je;try{Je=z.apply(this&&this.$id===t?this:Z,Ie)}catch(Qe){throw Ls(Ke,Qe),Qe}return Je instanceof Promise?Je.then(Qe=>(Ls(ye,Qe),Qe)).catch(Qe=>(Ls(Ke,Qe),Promise.reject(Qe))):(Ls(ye,Je),Je)}}const se={_p:r,$id:t,$onAction:Dv.bind(null,_),$patch:M,$reset:P,$subscribe(re,z={}){const Ie=Dv(m,re,z.detached,()=>ye()),ye=o.run(()=>na(()=>r.state.value[t],Ke=>{(z.flush==="sync"?p:d)&&re({storeId:t,type:sa.direct,events:E},Ke)},kr({},h,z)));return Ie},$dispose:V},Z=cs(kr({},se));r._s.set(t,Z);const de=r._e.run(()=>(o=Iw(),o.run(()=>e())));for(const re in de){const z=de[re];if(Et(z)&&!oO(z)||fi(z))l||(C&&sO(z)&&(Et(z)?z.value=C[re]:Xf(z,C[re])),r.state.value[t][re]=z);else if(typeof z=="function"){const Ie=X(re,z);de[re]=Ie,c.actions[re]=z}}return kr(Z,de),kr(ze(Z),de),Object.defineProperty(Z,"$state",{get:()=>r.state.value[t],set:re=>{M(z=>{kr(z,re)})}}),r._p.forEach(re=>{kr(Z,o.run(()=>re({store:Z,app:r._a,pinia:r,options:c})))}),C&&l&&n.hydrate&&n.hydrate(Z.$state,C),d=!0,p=!0,Z}function lO(t,e,n){let r,i;const o=typeof e=="function";typeof t=="string"?(r=t,i=o?n:e):(i=t,r=t.id);function l(c,h){const d=ep();return c=c||d&&Mr(w0),c&&mc(c),c=_0,c._s.has(r)||(o?E0(r,e,i,c):aO(r,i,c)),c._s.get(r)}return l.$id=r,l}let uO="Store";function I0(...t){return t.reduce((e,n)=>(e[n.$id+uO]=function(){return n(this.$pinia)},e),{})}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const T0=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",fo=t=>T0?Symbol(t):"_vr_"+t,cO=fo("rvlm"),Lv=fo("rvd"),np=fo("r"),S0=fo("rl"),Jf=fo("rvl"),Fs=typeof window!="undefined";function hO(t){return t.__esModule||T0&&t[Symbol.toStringTag]==="Module"}const at=Object.assign;function ff(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const oa=()=>{},fO=/\/$/,dO=t=>t.replace(fO,"");function df(t,e,n="/"){let r,i={},o="",l="";const c=e.indexOf("?"),h=e.indexOf("#",c>-1?c:0);return c>-1&&(r=e.slice(0,c),o=e.slice(c+1,h>-1?h:e.length),i=t(o)),h>-1&&(r=r||e.slice(0,h),l=e.slice(h,e.length)),r=yO(r!=null?r:e,n),{fullPath:r+(o&&"?")+o+l,path:r,query:i,hash:l}}function pO(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ov(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gO(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Js(e.matched[r],n.matched[i])&&C0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Js(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function C0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mO(t[n],e[n]))return!1;return!0}function mO(t,e){return Array.isArray(t)?Nv(t,e):Array.isArray(e)?Nv(e,t):t===e}function Nv(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function yO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],!(i===1||l==="."))if(l==="..")i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var va;(function(t){t.pop="pop",t.push="push"})(va||(va={}));var aa;(function(t){t.back="back",t.forward="forward",t.unknown=""})(aa||(aa={}));function vO(t){if(!t)if(Fs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),dO(t)}const _O=/^[^#]+#/;function wO(t,e){return t.replace(_O,"#")+e}function bO(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const yc=()=>({left:window.pageXOffset,top:window.pageYOffset});function EO(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=bO(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Pv(t,e){return(history.state?history.state.position-e:-1)+t}const Qf=new Map;function IO(t,e){Qf.set(t,e)}function TO(t){const e=Qf.get(t);return Qf.delete(t),e}let SO=()=>location.protocol+"//"+location.host;function A0(t,e){const{pathname:n,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){let c=i.includes(t.slice(o))?t.slice(o).length:1,h=i.slice(c);return h[0]!=="/"&&(h="/"+h),Ov(h,"")}return Ov(n,t)+r+i}function CO(t,e,n,r){let i=[],o=[],l=null;const c=({state:_})=>{const E=A0(t,location),C=n.value,M=e.value;let P=0;if(_){if(n.value=E,e.value=_,l&&l===C){l=null;return}P=M?_.position-M.position:0}else r(E);i.forEach(V=>{V(n.value,C,{delta:P,type:va.pop,direction:P?P>0?aa.forward:aa.back:aa.unknown})})};function h(){l=n.value}function d(_){i.push(_);const E=()=>{const C=i.indexOf(_);C>-1&&i.splice(C,1)};return o.push(E),E}function p(){const{history:_}=window;!_.state||_.replaceState(at({},_.state,{scroll:yc()}),"")}function m(){for(const _ of o)_();o=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",p),{pauseListeners:h,listen:d,destroy:m}}function Mv(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?yc():null}}function AO(t){const{history:e,location:n}=window,r={value:A0(t,n)},i={value:e.state};i.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(h,d,p){const m=t.indexOf("#"),_=m>-1?(n.host&&document.querySelector("base")?t:t.slice(m))+h:SO()+t+h;try{e[p?"replaceState":"pushState"](d,"",_),i.value=d}catch(E){console.error(E),n[p?"replace":"assign"](_)}}function l(h,d){const p=at({},e.state,Mv(i.value.back,h,i.value.forward,!0),d,{position:i.value.position});o(h,p,!0),r.value=h}function c(h,d){const p=at({},i.value,e.state,{forward:h,scroll:yc()});o(p.current,p,!0);const m=at({},Mv(r.value,h,null),{position:p.position+1},d);o(h,m,!1),r.value=h}return{location:r,state:i,push:c,replace:l}}function xO(t){t=vO(t);const e=AO(t),n=CO(t,e.state,e.location,e.replace);function r(o,l=!0){l||n.pauseListeners(),history.go(o)}const i=at({location:"",base:t,go:r,createHref:wO.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function RO(t){return typeof t=="string"||t&&typeof t=="object"}function x0(t){return typeof t=="string"||typeof t=="symbol"}const ti={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},R0=fo("nf");var Fv;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Fv||(Fv={}));function Qs(t,e){return at(new Error,{type:t,[R0]:!0},e)}function ni(t,e){return t instanceof Error&&R0 in t&&(e==null||!!(t.type&e))}const Uv="[^/]+?",kO={sensitive:!1,strict:!1,start:!0,end:!0},DO=/[.+*?^${}()[\]/\\]/g;function LO(t,e){const n=at({},kO,e),r=[];let i=n.start?"^":"";const o=[];for(const d of t){const p=d.length?[]:[90];n.strict&&!d.length&&(i+="/");for(let m=0;m<d.length;m++){const _=d[m];let E=40+(n.sensitive?.25:0);if(_.type===0)m||(i+="/"),i+=_.value.replace(DO,"\\$&"),E+=40;else if(_.type===1){const{value:C,repeatable:M,optional:P,regexp:V}=_;o.push({name:C,repeatable:M,optional:P});const X=V||Uv;if(X!==Uv){E+=10;try{new RegExp(`(${X})`)}catch(Z){throw new Error(`Invalid custom RegExp for param "${C}" (${X}): `+Z.message)}}let se=M?`((?:${X})(?:/(?:${X}))*)`:`(${X})`;m||(se=P&&d.length<2?`(?:/${se})`:"/"+se),P&&(se+="?"),i+=se,E+=20,P&&(E+=-8),M&&(E+=-20),X===".*"&&(E+=-50)}p.push(E)}r.push(p)}if(n.strict&&n.end){const d=r.length-1;r[d][r[d].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const l=new RegExp(i,n.sensitive?"":"i");function c(d){const p=d.match(l),m={};if(!p)return null;for(let _=1;_<p.length;_++){const E=p[_]||"",C=o[_-1];m[C.name]=E&&C.repeatable?E.split("/"):E}return m}function h(d){let p="",m=!1;for(const _ of t){(!m||!p.endsWith("/"))&&(p+="/"),m=!1;for(const E of _)if(E.type===0)p+=E.value;else if(E.type===1){const{value:C,repeatable:M,optional:P}=E,V=C in d?d[C]:"";if(Array.isArray(V)&&!M)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const X=Array.isArray(V)?V.join("/"):V;if(!X)if(P)_.length<2&&(p.endsWith("/")?p=p.slice(0,-1):m=!0);else throw new Error(`Missing required param "${C}"`);p+=X}}return p}return{re:l,score:r,keys:o,parse:c,stringify:h}}function OO(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function NO(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const o=OO(r[n],i[n]);if(o)return o;n++}return i.length-r.length}const PO={type:0,value:""},MO=/[a-zA-Z0-9_]/;function FO(t){if(!t)return[[]];if(t==="/")return[[PO]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${d}": ${E}`)}let n=0,r=n;const i=[];let o;function l(){o&&i.push(o),o=[]}let c=0,h,d="",p="";function m(){!d||(n===0?o.push({type:0,value:d}):n===1||n===2||n===3?(o.length>1&&(h==="*"||h==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:d,regexp:p,repeatable:h==="*"||h==="+",optional:h==="*"||h==="?"})):e("Invalid state to consume buffer"),d="")}function _(){d+=h}for(;c<t.length;){if(h=t[c++],h==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:h==="/"?(d&&m(),l()):h===":"?(m(),n=1):_();break;case 4:_(),n=r;break;case 1:h==="("?n=2:MO.test(h)?_():(m(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&c--);break;case 2:h===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+h:n=3:p+=h;break;case 3:m(),n=0,h!=="*"&&h!=="?"&&h!=="+"&&c--,p="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${d}"`),m(),l(),i}function UO(t,e,n){const r=LO(FO(t.path),n),i=at(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function BO(t,e){const n=[],r=new Map;e=$v({strict:!1,end:!0,sensitive:!1},e);function i(p){return r.get(p)}function o(p,m,_){const E=!_,C=VO(p);C.aliasOf=_&&_.record;const M=$v(e,p),P=[C];if("alias"in p){const se=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of se)P.push(at({},C,{components:_?_.record.components:C.components,path:Z,aliasOf:_?_.record:C}))}let V,X;for(const se of P){const{path:Z}=se;if(m&&Z[0]!=="/"){const de=m.record.path,re=de[de.length-1]==="/"?"":"/";se.path=m.record.path+(Z&&re+Z)}if(V=UO(se,m,M),_?_.alias.push(V):(X=X||V,X!==V&&X.alias.push(V),E&&p.name&&!Bv(V)&&l(p.name)),"children"in C){const de=C.children;for(let re=0;re<de.length;re++)o(de[re],V,_&&_.children[re])}_=_||V,h(V)}return X?()=>{l(X)}:oa}function l(p){if(x0(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(l),m.alias.forEach(l))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(l),p.alias.forEach(l))}}function c(){return n}function h(p){let m=0;for(;m<n.length&&NO(p,n[m])>=0&&(p.record.path!==n[m].record.path||!k0(p,n[m]));)m++;n.splice(m,0,p),p.record.name&&!Bv(p)&&r.set(p.record.name,p)}function d(p,m){let _,E={},C,M;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Qs(1,{location:p});M=_.record.name,E=at($O(m.params,_.keys.filter(X=>!X.optional).map(X=>X.name)),p.params),C=_.stringify(E)}else if("path"in p)C=p.path,_=n.find(X=>X.re.test(C)),_&&(E=_.parse(C),M=_.record.name);else{if(_=m.name?r.get(m.name):n.find(X=>X.re.test(m.path)),!_)throw Qs(1,{location:p,currentLocation:m});M=_.record.name,E=at({},m.params,p.params),C=_.stringify(E)}const P=[];let V=_;for(;V;)P.unshift(V.record),V=V.parent;return{name:M,path:C,params:E,matched:P,meta:WO(P)}}return t.forEach(p=>o(p)),{addRoute:o,resolve:d,removeRoute:l,getRoutes:c,getRecordMatcher:i}}function $O(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function VO(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:HO(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function HO(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Bv(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function WO(t){return t.reduce((e,n)=>at(e,n.meta),{})}function $v(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function k0(t,e){return e.children.some(n=>n===t||k0(t,n))}const D0=/#/g,qO=/&/g,zO=/\//g,KO=/=/g,jO=/\?/g,L0=/\+/g,GO=/%5B/g,YO=/%5D/g,O0=/%5E/g,XO=/%60/g,N0=/%7B/g,JO=/%7C/g,P0=/%7D/g,QO=/%20/g;function rp(t){return encodeURI(""+t).replace(JO,"|").replace(GO,"[").replace(YO,"]")}function ZO(t){return rp(t).replace(N0,"{").replace(P0,"}").replace(O0,"^")}function Zf(t){return rp(t).replace(L0,"%2B").replace(QO,"+").replace(D0,"%23").replace(qO,"%26").replace(XO,"`").replace(N0,"{").replace(P0,"}").replace(O0,"^")}function eN(t){return Zf(t).replace(KO,"%3D")}function tN(t){return rp(t).replace(D0,"%23").replace(jO,"%3F")}function nN(t){return t==null?"":tN(t).replace(zO,"%2F")}function Nu(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function rN(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const o=r[i].replace(L0," "),l=o.indexOf("="),c=Nu(l<0?o:o.slice(0,l)),h=l<0?null:Nu(o.slice(l+1));if(c in e){let d=e[c];Array.isArray(d)||(d=e[c]=[d]),d.push(h)}else e[c]=h}return e}function Vv(t){let e="";for(let n in t){const r=t[n];if(n=eN(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(o=>o&&Zf(o)):[r&&Zf(r)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function iN(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}function Ho(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function oi(t,e,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(Qs(4,{from:n,to:e})):m instanceof Error?c(m):RO(m)?c(Qs(2,{from:e,to:m})):(o&&r.enterCallbacks[i]===o&&typeof m=="function"&&o.push(m),l())},d=t.call(r&&r.instances[i],e,n,h);let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function pf(t,e,n,r){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(sN(c)){const d=(c.__vccOpts||c)[e];d&&i.push(oi(d,n,r,o,l))}else{let h=c();i.push(()=>h.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const p=hO(d)?d.default:d;o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&oi(_,n,r,o,l)()}))}}return i}function sN(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Hv(t){const e=Mr(np),n=Mr(S0),r=sr(()=>e.resolve(Ws(t.to))),i=sr(()=>{const{matched:h}=r.value,{length:d}=h,p=h[d-1],m=n.matched;if(!p||!m.length)return-1;const _=m.findIndex(Js.bind(null,p));if(_>-1)return _;const E=Wv(h[d-2]);return d>1&&Wv(p)===E&&m[m.length-1].path!==E?m.findIndex(Js.bind(null,h[d-2])):_}),o=sr(()=>i.value>-1&&uN(n.params,r.value.params)),l=sr(()=>i.value>-1&&i.value===n.matched.length-1&&C0(n.params,r.value.params));function c(h={}){return lN(h)?e[Ws(t.replace)?"replace":"push"](Ws(t.to)).catch(oa):Promise.resolve()}return{route:r,href:sr(()=>r.value.href),isActive:o,isExactActive:l,navigate:c}}const oN=Ii({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hv,setup(t,{slots:e}){const n=cs(Hv(t)),{options:r}=Mr(np),i=sr(()=>({[qv(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[qv(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&e.default(n);return t.custom?o:tp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),aN=oN;function lN(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function uN(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((o,l)=>o!==i[l]))return!1}return!0}function Wv(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const qv=(t,e,n)=>t!=null?t:e!=null?e:n,cN=Ii({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Mr(Jf),i=sr(()=>t.route||r.value),o=Mr(Lv,0),l=sr(()=>i.value.matched[o]);pu(Lv,o+1),pu(cO,l),pu(Jf,i);const c=Pr();return na(()=>[c.value,l.value,t.name],([h,d,p],[m,_,E])=>{d&&(d.instances[p]=h,_&&_!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),h&&d&&(!_||!Js(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(C=>C(h))},{flush:"post"}),()=>{const h=i.value,d=l.value,p=d&&d.components[t.name],m=t.name;if(!p)return zv(n.default,{Component:p,route:h});const _=d.props[t.name],E=_?_===!0?h.params:typeof _=="function"?_(h):_:null,M=tp(p,at({},E,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(d.instances[m]=null)},ref:c}));return zv(n.default,{Component:M,route:h})||M}}});function zv(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const M0=cN;function hN(t){const e=BO(t.routes,t),n=t.parseQuery||rN,r=t.stringifyQuery||Vv,i=t.history,o=Ho(),l=Ho(),c=Ho(),h=gD(ti);let d=ti;Fs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=ff.bind(null,O=>""+O),m=ff.bind(null,nN),_=ff.bind(null,Nu);function E(O,ee){let j,ie;return x0(O)?(j=e.getRecordMatcher(O),ie=ee):ie=O,e.addRoute(ie,j)}function C(O){const ee=e.getRecordMatcher(O);ee&&e.removeRoute(ee)}function M(){return e.getRoutes().map(O=>O.record)}function P(O){return!!e.getRecordMatcher(O)}function V(O,ee){if(ee=at({},ee||h.value),typeof O=="string"){const _e=df(n,O,ee.path),w=e.resolve({path:_e.path},ee),T=i.createHref(_e.fullPath);return at(_e,w,{params:_(w.params),hash:Nu(_e.hash),redirectedFrom:void 0,href:T})}let j;if("path"in O)j=at({},O,{path:df(n,O.path,ee.path).path});else{const _e=at({},O.params);for(const w in _e)_e[w]==null&&delete _e[w];j=at({},O,{params:m(O.params)}),ee.params=m(ee.params)}const ie=e.resolve(j,ee),qe=O.hash||"";ie.params=p(_(ie.params));const st=pO(r,at({},O,{hash:ZO(qe),path:ie.path})),xe=i.createHref(st);return at({fullPath:st,hash:qe,query:r===Vv?iN(O.query):O.query||{}},ie,{redirectedFrom:void 0,href:xe})}function X(O){return typeof O=="string"?df(n,O,h.value.path):at({},O)}function se(O,ee){if(d!==O)return Qs(8,{from:ee,to:O})}function Z(O){return z(O)}function de(O){return Z(at(X(O),{replace:!0}))}function re(O){const ee=O.matched[O.matched.length-1];if(ee&&ee.redirect){const{redirect:j}=ee;let ie=typeof j=="function"?j(O):j;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=X(ie):{path:ie},ie.params={}),at({query:O.query,hash:O.hash,params:O.params},ie)}}function z(O,ee){const j=d=V(O),ie=h.value,qe=O.state,st=O.force,xe=O.replace===!0,_e=re(j);if(_e)return z(at(X(_e),{state:qe,force:st,replace:xe}),ee||j);const w=j;w.redirectedFrom=ee;let T;return!st&&gO(r,ie,j)&&(T=Qs(16,{to:w,from:ie}),Zn(ie,ie,!0,!1)),(T?Promise.resolve(T):ye(w,ie)).catch(x=>ni(x)?ni(x,2)?x:on(x):Ve(x,w,ie)).then(x=>{if(x){if(ni(x,2))return z(at(X(x.to),{state:qe,force:st,replace:xe}),ee||w)}else x=it(w,ie,!0,xe,qe);return Ke(w,ie,x),x})}function Ie(O,ee){const j=se(O,ee);return j?Promise.reject(j):Promise.resolve()}function ye(O,ee){let j;const[ie,qe,st]=fN(O,ee);j=pf(ie.reverse(),"beforeRouteLeave",O,ee);for(const _e of ie)_e.leaveGuards.forEach(w=>{j.push(oi(w,O,ee))});const xe=Ie.bind(null,O,ee);return j.push(xe),Os(j).then(()=>{j=[];for(const _e of o.list())j.push(oi(_e,O,ee));return j.push(xe),Os(j)}).then(()=>{j=pf(qe,"beforeRouteUpdate",O,ee);for(const _e of qe)_e.updateGuards.forEach(w=>{j.push(oi(w,O,ee))});return j.push(xe),Os(j)}).then(()=>{j=[];for(const _e of O.matched)if(_e.beforeEnter&&!ee.matched.includes(_e))if(Array.isArray(_e.beforeEnter))for(const w of _e.beforeEnter)j.push(oi(w,O,ee));else j.push(oi(_e.beforeEnter,O,ee));return j.push(xe),Os(j)}).then(()=>(O.matched.forEach(_e=>_e.enterCallbacks={}),j=pf(st,"beforeRouteEnter",O,ee),j.push(xe),Os(j))).then(()=>{j=[];for(const _e of l.list())j.push(oi(_e,O,ee));return j.push(xe),Os(j)}).catch(_e=>ni(_e,8)?_e:Promise.reject(_e))}function Ke(O,ee,j){for(const ie of c.list())ie(O,ee,j)}function it(O,ee,j,ie,qe){const st=se(O,ee);if(st)return st;const xe=ee===ti,_e=Fs?history.state:{};j&&(ie||xe?i.replace(O.fullPath,at({scroll:xe&&_e&&_e.scroll},qe)):i.push(O.fullPath,qe)),h.value=O,Zn(O,ee,j,xe),on()}let ae;function Je(){ae=i.listen((O,ee,j)=>{const ie=V(O),qe=re(ie);if(qe){z(at(qe,{replace:!0}),ie).catch(oa);return}d=ie;const st=h.value;Fs&&IO(Pv(st.fullPath,j.delta),yc()),ye(ie,st).catch(xe=>ni(xe,12)?xe:ni(xe,2)?(z(xe.to,ie).then(_e=>{ni(_e,20)&&!j.delta&&j.type===va.pop&&i.go(-1,!1)}).catch(oa),Promise.reject()):(j.delta&&i.go(-j.delta,!1),Ve(xe,ie,st))).then(xe=>{xe=xe||it(ie,st,!1),xe&&(j.delta?i.go(-j.delta,!1):j.type===va.pop&&ni(xe,20)&&i.go(-1,!1)),Ke(ie,st,xe)}).catch(oa)})}let Qe=Ho(),Qn=Ho(),gt;function Ve(O,ee,j){on(O);const ie=Qn.list();return ie.length?ie.forEach(qe=>qe(O,ee,j)):console.error(O),Promise.reject(O)}function Ue(){return gt&&h.value!==ti?Promise.resolve():new Promise((O,ee)=>{Qe.add([O,ee])})}function on(O){return gt||(gt=!O,Je(),Qe.list().forEach(([ee,j])=>O?j(O):ee()),Qe.reset()),O}function Zn(O,ee,j,ie){const{scrollBehavior:qe}=t;if(!Fs||!qe)return Promise.resolve();const st=!j&&TO(Pv(O.fullPath,0))||(ie||!j)&&history.state&&history.state.scroll||null;return Wd().then(()=>qe(O,ee,st)).then(xe=>xe&&EO(xe)).catch(xe=>Ve(xe,O,ee))}const St=O=>i.go(O);let Un;const mn=new Set;return{currentRoute:h,addRoute:E,removeRoute:C,hasRoute:P,getRoutes:M,resolve:V,options:t,push:Z,replace:de,go:St,back:()=>St(-1),forward:()=>St(1),beforeEach:o.add,beforeResolve:l.add,afterEach:c.add,onError:Qn.add,isReady:Ue,install(O){const ee=this;O.component("RouterLink",aN),O.component("RouterView",M0),O.config.globalProperties.$router=ee,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Ws(h)}),Fs&&!Un&&h.value===ti&&(Un=!0,Z(i.location).catch(qe=>{}));const j={};for(const qe in ti)j[qe]=sr(()=>h.value[qe]);O.provide(np,ee),O.provide(S0,cs(j)),O.provide(Jf,h);const ie=O.unmount;mn.add(O),O.unmount=function(){mn.delete(O),mn.size<1&&(d=ti,ae&&ae(),h.value=ti,Un=!1,gt=!1),ie()}}}}function Os(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function fN(t,e){const n=[],r=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let l=0;l<o;l++){const c=e.matched[l];c&&(t.matched.find(d=>Js(d,c))?r.push(c):n.push(c));const h=t.matched[l];h&&(e.matched.find(d=>Js(d,h))||i.push(h))}return[n,r,i]}const dN=Ii({setup(t){return(e,n)=>(ce(),Cn(Ws(M0)))}}),pN="modulepreload",Kv={},gN="/",ou=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${gN}${r}`,r in Kv)return;Kv[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":pN,i||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),i)return new Promise((c,h)=>{l.addEventListener("load",c),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};var ct={innerWidth(t){let e=t.offsetWidth,n=getComputedStyle(t);return e+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e},width(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),e},getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)},getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)},getOuterWidth(t,e){if(t){let n=t.offsetWidth;if(e){let r=getComputedStyle(t);n+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return n}else return 0},getOuterHeight(t,e){if(t){let n=t.offsetHeight;if(e){let r=getComputedStyle(t);n+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return n}else return 0},getClientHeight(t,e){if(t){let n=t.clientHeight;if(e){let r=getComputedStyle(t);n+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return n}else return 0},getViewport(){let t=window,e=document,n=e.documentElement,r=e.getElementsByTagName("body")[0],i=t.innerWidth||n.clientWidth||r.clientWidth,o=t.innerHeight||n.clientHeight||r.clientHeight;return{width:i,height:o}},getOffset(t){var e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}},index(t){let e=t.parentNode.childNodes,n=0;for(var r=0;r<e.length;r++){if(e[r]===t)return n;e[r].nodeType===1&&n++}return-1},addMultipleClasses(t,e){if(t.classList){let n=e.split(" ");for(let r=0;r<n.length;r++)t.classList.add(n[r])}else{let n=e.split(" ");for(let r=0;r<n.length;r++)t.className+=" "+n[r]}},addClass(t,e){t.classList?t.classList.add(e):t.className+=" "+e},removeClass(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")},hasClass(t,e){return t?t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className):!1},find(t,e){return t.querySelectorAll(e)},findSingle(t,e){return t.querySelector(e)},getHeight(t){let e=t.offsetHeight,n=getComputedStyle(t);return e-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),e},getWidth(t){let e=t.offsetWidth,n=getComputedStyle(t);return e-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),e},absolutePosition(t,e){let n=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),r=n.height,i=n.width,o=e.offsetHeight,l=e.offsetWidth,c=e.getBoundingClientRect(),h=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),p=this.getViewport(),m,_;c.top+o+r>p.height?(m=c.top+h-r,t.style.transformOrigin="bottom",m<0&&(m=h)):(m=o+c.top+h,t.style.transformOrigin="top"),c.left+i>p.width?_=Math.max(0,c.left+d+l-i):_=c.left+d,t.style.top=m+"px",t.style.left=_+"px"},relativePosition(t,e){let n=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t);const r=e.offsetHeight,i=e.getBoundingClientRect(),o=this.getViewport();let l,c;i.top+r+n.height>o.height?(l=-1*n.height,t.style.transformOrigin="bottom",i.top+l<0&&(l=-1*i.top)):(l=r,t.style.transformOrigin="top"),n.width>o.width?c=i.left*-1:i.left+n.width>o.width?c=(i.left+n.width-o.width)*-1:c=0,t.style.top=l+"px",t.style.left=c+"px"},getParents(t,e=[]){return t.parentNode===null?e:this.getParents(t.parentNode,e.concat([t.parentNode]))},getScrollableParents(t){let e=[];if(t){let n=this.getParents(t);const r=/(auto|scroll)/,i=o=>{let l=window.getComputedStyle(o,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let o of n){let l=o.nodeType===1&&o.dataset.scrollselectors;if(l){let c=l.split(",");for(let h of c){let d=this.findSingle(o,h);d&&i(d)&&e.push(d)}}o.nodeType!==9&&i(o)&&e.push(o)}}return e},getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",e},getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let e=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",e},getHiddenElementDimensions(t){var e={};return t.style.visibility="hidden",t.style.display="block",e.width=t.offsetWidth,e.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",e},fadeIn(t,e){t.style.opacity=0;var n=+new Date,r=0,i=function(){r=+t.style.opacity+(new Date().getTime()-n)/e,t.style.opacity=r,n=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(i)||setTimeout(i,16))};i()},fadeOut(t,e){var n=1,r=50,i=e,o=r/i;let l=setInterval(()=>{n-=o,n<=0&&(n=0,clearInterval(l)),t.style.opacity=n},r)},getUserAgent(){return navigator.userAgent},appendChild(t,e){if(this.isElement(e))e.appendChild(t);else if(e.el&&e.elElement)e.elElement.appendChild(t);else throw new Error("Cannot append "+e+" to "+t)},scrollInView(t,e){let n=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=n?parseFloat(n):0,i=getComputedStyle(t).getPropertyValue("paddingTop"),o=i?parseFloat(i):0,l=t.getBoundingClientRect(),h=e.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-o,d=t.scrollTop,p=t.clientHeight,m=this.getOuterHeight(e);h<0?t.scrollTop=d+h:h+m>p&&(t.scrollTop=d+h-p+m)},clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}},calculateScrollbarWidth(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),this.calculatedScrollbarWidth=e,e},getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),e=/(chrome)[ ]([\w.]+)/.exec(t)||/(webkit)[ ]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:e[1]||"",version:e[2]||"0"}},isVisible(t){return t.offsetParent!=null},invokeElementMethod(t,e,n){t[e].apply(t,n)},getFocusableElements(t){let e=this.find(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`),n=[];for(let r of e)getComputedStyle(r).display!="none"&&getComputedStyle(r).visibility!="hidden"&&n.push(r);return n},getFirstFocusableElement(t){const e=this.getFocusableElements(t);return e.length>0?e[0]:null},isClickable(t){const e=t.nodeName,n=t.parentElement&&t.parentElement.nodeName;return e=="INPUT"||e=="BUTTON"||e=="A"||n=="INPUT"||n=="BUTTON"||n=="A"||this.hasClass(t,"p-button")||this.hasClass(t.parentElement,"p-button")||this.hasClass(t.parentElement,"p-checkbox")||this.hasClass(t.parentElement,"p-radiobutton")},applyStyle(t,e){if(typeof e=="string")t.style.cssText=e;else for(let n in e)t.style[n]=e[n]},isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isAndroid(){return/(android)/i.test(navigator.userAgent)},isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},exportCSV(t,e){let n=new Blob([t],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(n,e+".csv");else{let r=document.createElement("a");r.download!==void 0?(r.setAttribute("href",URL.createObjectURL(n)),r.setAttribute("download",e+".csv"),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)):(t="data:text/csv;charset=utf-8,"+t,window.open(encodeURI(t)))}}};class mN{constructor(e,n=()=>{}){this.element=e,this.listener=n}bindScrollListener(){this.scrollableParents=ct.getScrollableParents(this.element);for(let e=0;e<this.scrollableParents.length;e++)this.scrollableParents[e].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let e=0;e<this.scrollableParents.length;e++)this.scrollableParents[e].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}var pW={equals(t,e,n){return n?this.resolveFieldData(t,n)===this.resolveFieldData(e,n):this.deepEquals(t,e)},deepEquals(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),r=Array.isArray(e),i,o,l;if(n&&r){if(o=t.length,o!=e.length)return!1;for(i=o;i--!==0;)if(!this.deepEquals(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var c=t instanceof Date,h=e instanceof Date;if(c!=h)return!1;if(c&&h)return t.getTime()==e.getTime();var d=t instanceof RegExp,p=e instanceof RegExp;if(d!=p)return!1;if(d&&p)return t.toString()==e.toString();var m=Object.keys(t);if(o=m.length,o!==Object.keys(e).length)return!1;for(i=o;i--!==0;)if(!Object.prototype.hasOwnProperty.call(e,m[i]))return!1;for(i=o;i--!==0;)if(l=m[i],!this.deepEquals(t[l],e[l]))return!1;return!0}return t!==t&&e!==e},resolveFieldData(t,e){if(t&&Object.keys(t).length&&e){if(this.isFunction(e))return e(t);if(e.indexOf(".")===-1)return t[e];{let i=e.split("."),o=t;for(var n=0,r=i.length;n<r;++n){if(o==null)return null;o=o[i[n]]}return o}}else return null},isFunction(t){return!!(t&&t.constructor&&t.call&&t.apply)},filter(t,e,n){var r=[];if(t){for(let i of t)for(let o of e)if(String(this.resolveFieldData(i,o)).toLowerCase().indexOf(n.toLowerCase())>-1){r.push(i);break}}return r},reorderArray(t,e,n){let r;if(t&&e!==n){if(n>=t.length)for(r=n-t.length;r--+1;)t.push(void 0);t.splice(n,0,t.splice(e,1)[0])}},findIndexInList(t,e){let n=-1;if(e){for(let r=0;r<e.length;r++)if(e[r]===t){n=r;break}}return n},contains(t,e){if(t!=null&&e&&e.length){for(let n of e)if(this.equals(t,n))return!0}return!1},insertIntoOrderedArray(t,e,n,r){if(n.length>0){let i=!1;for(let o=0;o<n.length;o++)if(this.findIndexInList(n[o],r)>e){n.splice(o,0,t),i=!0;break}i||n.push(t)}else n.push(t)},removeAccents(t){return t&&t.search(/[\xC0-\xFF]/g)>-1&&(t=t.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),t},getVNodeProp(t,e){let n=t.props;if(n){let r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=Object.prototype.hasOwnProperty.call(n,r)?r:e;return t.type.props[e].type===Boolean&&n[i]===""?!0:n[i]}return null},isEmpty(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0},isNotEmpty(t){return!this.isEmpty(t)}};function yN(){let t=[];const e=(o,l)=>{let c=t.length>0?t[t.length-1]:{key:o,value:l},h=c.value+(c.key===o?0:l)+1;return t.push({key:o,value:h}),h},n=o=>{t=t.filter(l=>l.value!==o)},r=()=>t.length>0?t[t.length-1].value:0,i=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:i,set:(o,l,c)=>{l&&(l.style.zIndex=String(e(o,c)))},clear:o=>{o&&(n(i(o)),o.style.zIndex="")},getCurrent:()=>r()}}var qs=yN(),jv=0;function Gv(t="pv_id_"){return jv++,`${t}${jv}`}function F0(){const t=new Map;return{on(e,n){let r=t.get(e);r?r.push(n):r=[n],t.set(e,r)},off(e,n){let r=t.get(e);r&&r.splice(r.indexOf(n)>>>0,1)},emit(e,n){let r=t.get(e);r&&r.slice().map(i=>{i(n)})}}}function vN(t){t.addEventListener("mousedown",U0)}function _N(t){t.removeEventListener("mousedown",U0)}function wN(t){let e=document.createElement("span");e.className="p-ink",t.appendChild(e),e.addEventListener("animationend",B0)}function bN(t){let e=$0(t);e&&(_N(t),e.removeEventListener("animationend",B0),e.remove())}function U0(t){let e=t.currentTarget,n=$0(e);if(!n||getComputedStyle(n,null).display==="none")return;if(ct.removeClass(n,"p-ink-active"),!ct.getHeight(n)&&!ct.getWidth(n)){let l=Math.max(ct.getOuterWidth(e),ct.getOuterHeight(e));n.style.height=l+"px",n.style.width=l+"px"}let r=ct.getOffset(e),i=t.pageX-r.left+document.body.scrollTop-ct.getWidth(n)/2,o=t.pageY-r.top+document.body.scrollLeft-ct.getHeight(n)/2;n.style.top=o+"px",n.style.left=i+"px",ct.addClass(n,"p-ink-active")}function B0(t){ct.removeClass(t.currentTarget,"p-ink-active")}function $0(t){for(let e=0;e<t.children.length;e++)if(typeof t.children[e].className=="string"&&t.children[e].className.indexOf("p-ink")!==-1)return t.children[e];return null}const ip={mounted(t,e){e.instance.$primevue&&e.instance.$primevue.config&&e.instance.$primevue.config.ripple&&(wN(t),vN(t))},unmounted(t){bN(t)}};var Pa={name:"Button",props:{label:{type:String},icon:{type:String},iconPos:{type:String,default:"left"},badge:{type:String},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"}},computed:{buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":this.icon&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label}},iconClass(){return[this.loading?"p-button-loading-icon "+this.loadingIcon:this.icon,"p-button-icon",{"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&String(this.badge).length===1}]},disabled(){return this.$attrs.disabled||this.loading}},directives:{ripple:ip}};const EN=["disabled"],IN={class:"p-button-label"};function TN(t,e,n,r,i,o){const l=Xd("ripple");return Qi((ce(),Ce("button",{class:Rt(o.buttonClass),type:"button",disabled:o.disabled},[gr(t.$slots,"default",{},()=>[n.loading&&!n.icon?(ce(),Ce("span",{key:0,class:Rt(o.iconClass)},null,2)):yt("",!0),n.icon?(ce(),Ce("span",{key:1,class:Rt(o.iconClass)},null,2)):yt("",!0),tt("span",IN,Sn(n.label||"\xA0"),1),n.badge?(ce(),Ce("span",{key:2,class:Rt(o.badgeStyleClass)},Sn(n.badge),3)):yt("",!0)])],10,EN)),[[l]])}Pa.render=TN;var sp={name:"InputText",emits:["update:modelValue"],props:{modelValue:null},methods:{onInput(t){this.$emit("update:modelValue",t.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};const SN=["value"];function CN(t,e,n,r,i,o){return ce(),Ce("input",Na({class:["p-inputtext p-component",{"p-filled":o.filled}],value:n.modelValue,onInput:e[0]||(e[0]=(...l)=>o.onInput&&o.onInput(...l))},t.$attrs),null,16,SN)}sp.render=CN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},AN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],l=t[n++],c=t[n++],h=((i&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],l=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return e.join("")},H0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],l=i+1<t.length,c=l?t[i+1]:0,h=i+2<t.length,d=h?t[i+2]:0,p=o>>2,m=(o&3)<<4|c>>4;let _=(c&15)<<2|d>>6,E=d&63;h||(E=64,l||(_=64)),r.push(n[p],n[m],n[_],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(V0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):AN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||c==null||d==null||m==null)throw Error();const _=o<<2|c>>4;if(r.push(_),d!==64){const E=c<<4&240|d>>2;if(r.push(E),m!==64){const C=d<<6&192|m;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},xN=function(t){const e=V0(t);return H0.encodeByteArray(e,!0)},W0=function(t){return xN(t).replace(/\./g,"")},RN=function(t){try{return H0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function q0(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ut())}function z0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function K0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DN(){return Ut().indexOf("Electron/")>=0}function j0(){const t=Ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function LN(){return Ut().indexOf("MSAppHost/")>=0}function ON(){return typeof indexedDB=="object"}function NN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN="FirebaseError";class hs extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=PN,Object.setPrototypeOf(this,hs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ma.prototype.create)}}class Ma{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],l=o?MN(o,r):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new hs(i,c,r)}}function MN(t,e){return t.replace(FN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const FN=/\{\$([^}]+)}/g;function UN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],l=e[i];if(Yv(o)&&Yv(l)){if(!Pu(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Go(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function BN(t,e){const n=new $N(t,e);return n.subscribe.bind(n)}class $N{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");VN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=gf),i.error===void 0&&(i.error=gf),i.complete===void 0&&(i.complete=gf);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var o;r(`${e}: ${(o=i.target.error)===null||o===void 0?void 0:o.message}`)}})}class Xv{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new G0(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Y0(this._db.createObjectStore(e,n))}close(){this._db.close()}}class G0{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Y0(this._transaction.objectStore(e))}}class Y0{constructor(e){this._store=e}index(e){return new Jv(this._store.index(e))}createIndex(e,n,r){return new Jv(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return Yo(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return Yo(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return Yo(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Yo(e,"Error clearing IndexedDB object store")}}class Jv{constructor(e){this._index=e}get(e){const n=this._index.get(e);return Yo(n,"Error reading from IndexedDB")}}function HN(t,e,n){return new Promise((r,i)=>{try{const o=indexedDB.open(t,e);o.onsuccess=l=>{r(new Xv(l.target.result))},o.onerror=l=>{var c;i(`Error opening indexedDB: ${(c=l.target.error)===null||c===void 0?void 0:c.message}`)},o.onupgradeneeded=l=>{n(new Xv(o.result),l.oldVersion,l.newVersion,new G0(o.transaction))}}catch(o){i(`Error opening indexedDB: ${o.message}`)}})}class es{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zN(e))try{this.getOrInitializeService({instanceIdentifier:Bi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Bi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bi){return this.instances.has(e)}getOptions(e=Bi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&l.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bi){return this.component?this.component.multipleInstances?e:Bi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qN(t){return t===Bi?void 0:t}function zN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Xe||(Xe={}));const jN={debug:Xe.DEBUG,verbose:Xe.VERBOSE,info:Xe.INFO,warn:Xe.WARN,error:Xe.ERROR,silent:Xe.SILENT},GN=Xe.INFO,YN={[Xe.DEBUG]:"log",[Xe.VERBOSE]:"log",[Xe.INFO]:"info",[Xe.WARN]:"warn",[Xe.ERROR]:"error"},XN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=YN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class op{constructor(e){this.name=e,this._logLevel=GN,this._logHandler=XN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Xe.DEBUG,...e),this._logHandler(this,Xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Xe.VERBOSE,...e),this._logHandler(this,Xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Xe.INFO,...e),this._logHandler(this,Xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Xe.WARN,...e),this._logHandler(this,Xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Xe.ERROR,...e),this._logHandler(this,Xe.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ed="@firebase/app",Qv="0.7.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=new op("@firebase/app"),ZN="@firebase/app-compat",eP="@firebase/analytics-compat",tP="@firebase/analytics",nP="@firebase/app-check-compat",rP="@firebase/app-check",iP="@firebase/auth",sP="@firebase/auth-compat",oP="@firebase/database",aP="@firebase/database-compat",lP="@firebase/functions",uP="@firebase/functions-compat",cP="@firebase/installations",hP="@firebase/installations-compat",fP="@firebase/messaging",dP="@firebase/messaging-compat",pP="@firebase/performance",gP="@firebase/performance-compat",mP="@firebase/remote-config",yP="@firebase/remote-config-compat",vP="@firebase/storage",_P="@firebase/storage-compat",wP="@firebase/firestore",bP="@firebase/firestore-compat",EP="firebase",IP="9.7.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="[DEFAULT]",TP={[ed]:"fire-core",[ZN]:"fire-core-compat",[tP]:"fire-analytics",[eP]:"fire-analytics-compat",[rP]:"fire-app-check",[nP]:"fire-app-check-compat",[iP]:"fire-auth",[sP]:"fire-auth-compat",[oP]:"fire-rtdb",[aP]:"fire-rtdb-compat",[lP]:"fire-fn",[uP]:"fire-fn-compat",[cP]:"fire-iid",[hP]:"fire-iid-compat",[fP]:"fire-fcm",[dP]:"fire-fcm-compat",[pP]:"fire-perf",[gP]:"fire-perf-compat",[mP]:"fire-rc",[yP]:"fire-rc-compat",[vP]:"fire-gcs",[_P]:"fire-gcs-compat",[wP]:"fire-fst",[bP]:"fire-fst-compat","fire-js":"fire-js",[EP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=new Map,td=new Map;function SP(t,e){try{t.container.addComponent(e)}catch(n){ap.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zs(t){const e=t.name;if(td.has(e))return ap.debug(`There were multiple attempts to register component ${e}.`),!1;td.set(e,t);for(const n of Mu.values())SP(n,t);return!0}function lp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},ts=new Ma("app","Firebase",CP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=IP;function xP(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:X0,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw ts.create("bad-app-name",{appName:String(r)});const i=Mu.get(r);if(i){if(Pu(t,i.options)&&Pu(n,i.config))return i;throw ts.create("duplicate-app",{appName:r})}const o=new KN(r);for(const c of td.values())o.addComponent(c);const l=new AP(t,n,o);return Mu.set(r,l),l}function J0(t=X0){const e=Mu.get(t);if(!e)throw ts.create("no-app",{appName:t});return e}function pi(t,e,n){var r;let i=(r=TP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const c=[`Unable to register library "${i}" with version "${e}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ap.warn(c.join(" "));return}Zs(new es(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP="firebase-heartbeat-database",kP=1,_a="firebase-heartbeat-store";let mf=null;function Q0(){return mf||(mf=HN(RP,kP,(t,e)=>{switch(e){case 0:t.createObjectStore(_a)}}).catch(t=>{throw ts.create("storage-open",{originalErrorMessage:t.message})})),mf}async function DP(t){try{return(await Q0()).transaction(_a).objectStore(_a).get(Z0(t))}catch(e){throw ts.create("storage-get",{originalErrorMessage:e.message})}}async function Zv(t,e){try{const r=(await Q0()).transaction(_a,"readwrite");return await r.objectStore(_a).put(e,Z0(t)),r.complete}catch(n){throw ts.create("storage-set",{originalErrorMessage:n.message})}}function Z0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=1024,OP=30*24*60*60*1e3;class NP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=e_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=OP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=e_(),{heartbeatsToSend:n,unsentEntries:r}=PP(this._heartbeatsCache.heartbeats),i=W0(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function e_(){return new Date().toISOString().substring(0,10)}function PP(t,e=LP){const n=[];let r=t.slice();for(const i of t){const o=n.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),t_(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),t_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ON()?NN().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await DP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function t_(t){return W0(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t){Zs(new es("platform-logger",e=>new JN(e),"PRIVATE")),Zs(new es("heartbeat",e=>new NP(e),"PRIVATE")),pi(ed,Qv,t),pi(ed,Qv,"esm2017"),pi("fire-js","")}FP("");function up(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function eb(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UP=eb,tb=new Ma("auth","Firebase",eb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=new op("@firebase/auth");function mu(t,...e){n_.logLevel<=Xe.ERROR&&n_.error(`Auth (${Ua}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,...e){throw cp(t,...e)}function mr(t,...e){return cp(t,...e)}function nb(t,e,n){const r=Object.assign(Object.assign({},UP()),{[e]:n});return new Ma("auth","Firebase",r).create(e,{appName:t.name})}function BP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Jn(t,"argument-error"),nb(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tb.create(t,...e)}function we(t,e,...n){if(!t)throw cp(e,...n)}function Lr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mu(e),new Error(e)}function $r(t,e){t||Lr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=new Map;function Or(t){$r(t instanceof Function,"Expected a class definition");let e=r_.get(t);return e?($r(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,r_.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t,e){const n=lp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Pu(o,e!=null?e:{}))return i;Jn(i,"already-initialized")}return n.initialize({options:e})}function VP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Or);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function HP(){return i_()==="http:"||i_()==="https:"}function i_(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HP()||z0()||"connection"in navigator)?navigator.onLine:!0}function qP(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,n){this.shortDelay=e,this.longDelay=n,$r(n>e,"Short delay should be less than long delay!"),this.isMobile=q0()||K0()}get(){return WP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t,e){$r(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=new Ba(3e4,6e4);function $a(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Va(t,e,n,r,i={}){return ib(t,i,async()=>{let o={},l={};r&&(e==="GET"?l=r:o={body:JSON.stringify(r)});const c=Fa(Object.assign({key:t.config.apiKey},l)).slice(1),h=await t._getAdditionalHeaders();return h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode),rb.fetch()(sb(t,t.config.apiHost,n,c),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},o))})}async function ib(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zP),e);try{const i=new jP(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw yf(t,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const c=o.ok?l.errorMessage:l.error.message,[h,d]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw yf(t,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw yf(t,"email-already-in-use",l);const p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw nb(t,p,d);Jn(t,p)}}catch(i){if(i instanceof hs)throw i;Jn(t,"network-request-failed")}}async function Ha(t,e,n,r,i={}){const o=await Va(t,e,n,r,i);return"mfaPendingCredential"in o&&Jn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function sb(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?hp(t.config,i):`${t.config.apiScheme}://${i}`}class jP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mr(this.auth,"network-request-failed")),KP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yf(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mr(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t,e){return Va(t,"POST","/v1/accounts:delete",e)}async function YP(t,e){return Va(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XP(t,e=!1){const n=Mn(t),r=await n.getIdToken(e),i=fp(r);we(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:la(vf(i.auth_time)),issuedAtTime:la(vf(i.iat)),expirationTime:la(vf(i.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function vf(t){return Number(t)*1e3}function fp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mu("JWT malformed, contained fewer than 3 sections"),null;try{const i=RN(n);return i?JSON.parse(i):(mu("Failed to decode base64 JWT payload"),null)}catch(i){return mu("Caught error parsing JWT payload as JSON",i),null}}function JP(t){const e=fp(t);return we(e,"internal-error"),we(typeof e.exp!="undefined","internal-error"),we(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof hs&&QP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function QP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=la(this.lastLoginAt),this.creationTime=la(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await wa(t,YP(n,{idToken:r}));we(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const l=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?nM(o.providerUserInfo):[],c=tM(t.providerData,l),h=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(c!=null&&c.length),p=h?d:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ob(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function eM(t){const e=Mn(t);await Fu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tM(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function nM(t){return t.map(e=>{var{providerId:n}=e,r=up(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rM(t,e){const n=await ib(t,{},async()=>{const r=Fa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,l=sb(t,i,"/v1/token",`key=${o}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",rb.fetch()(l,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken!="undefined","internal-error"),we(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):JP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return we(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await rM(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,l=new ba;return r&&(we(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&(we(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),o&&(we(typeof o=="number","internal-error",{appName:e}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ba,this.toJSON())}_performRefresh(){return Lr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t,e){we(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Yi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=up(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ob(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await wa(this,this.stsTokenManager.getToken(this.auth,e));return we(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XP(this,e)}reload(){return eM(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Yi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wa(this,GP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,l,c,h,d,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,E=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,C=(l=n.photoURL)!==null&&l!==void 0?l:void 0,M=(c=n.tenantId)!==null&&c!==void 0?c:void 0,P=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,V=(d=n.createdAt)!==null&&d!==void 0?d:void 0,X=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:se,emailVerified:Z,isAnonymous:de,providerData:re,stsTokenManager:z}=n;we(se&&z,e,"internal-error");const Ie=ba.fromJSON(this.name,z);we(typeof se=="string",e,"internal-error"),ri(m,e.name),ri(_,e.name),we(typeof Z=="boolean",e,"internal-error"),we(typeof de=="boolean",e,"internal-error"),ri(E,e.name),ri(C,e.name),ri(M,e.name),ri(P,e.name),ri(V,e.name),ri(X,e.name);const ye=new Yi({uid:se,auth:e,email:_,emailVerified:Z,displayName:m,isAnonymous:de,photoURL:C,phoneNumber:E,tenantId:M,stsTokenManager:Ie,createdAt:V,lastLoginAt:X});return re&&Array.isArray(re)&&(ye.providerData=re.map(Ke=>Object.assign({},Ke))),P&&(ye._redirectEventId=P),ye}static async _fromIdTokenResponse(e,n,r=!1){const i=new ba;i.updateFromServerResponse(n);const o=new Yi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fu(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ab.type="NONE";const s_=ab;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t,e,n){return`firebase:${t}:${e}:${n}`}class zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=yu(this.userKey,i.apiKey,o),this.fullPersistenceKey=yu("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zs(Or(s_),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Or(s_);const l=yu(r,e.config.apiKey,e.name);let c=null;for(const d of n)try{const p=await d._get(l);if(p){const m=Yi._fromJSON(e,p);d!==o&&(c=m),o=d;break}}catch{}const h=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new zs(o,e,r):(o=h[0],c&&await o._set(l,c.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(l)}catch{}})),new zs(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fb(e))return"Blackberry";if(db(e))return"Webos";if(dp(e))return"Safari";if((e.includes("chrome/")||ub(e))&&!e.includes("edge/"))return"Chrome";if(hb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lb(t=Ut()){return/firefox\//i.test(t)}function dp(t=Ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ub(t=Ut()){return/crios\//i.test(t)}function cb(t=Ut()){return/iemobile/i.test(t)}function hb(t=Ut()){return/android/i.test(t)}function fb(t=Ut()){return/blackberry/i.test(t)}function db(t=Ut()){return/webos/i.test(t)}function vc(t=Ut()){return/iphone|ipad|ipod/i.test(t)}function iM(t=Ut()){var e;return vc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sM(){return j0()&&document.documentMode===10}function pb(t=Ut()){return vc(t)||hb(t)||db(t)||fb(t)||/windows phone/i.test(t)||cb(t)}function oM(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t,e=[]){let n;switch(t){case"Browser":n=o_(Ut());break;case"Worker":n=`${o_(Ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ua}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new a_(this),this.idTokenSubscription=new a_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tb,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Or(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===o)&&(l==null?void 0:l.user)&&(r=l.user)}return r?r._redirectEventId?(we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fu(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Mn(e):null;return n&&we(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Or(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ma("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Or(e)||this._popupRedirectResolver;we(n,this,"argument-error"),this.redirectPersistenceManager=await zs.create(this,[Or(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),l=this._isInitialized?Promise.resolve():this._initializationPromise;return we(l,this,"internal-error"),l.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Wa(t){return Mn(t)}class a_{constructor(e){this.auth=e,this.observer=null,this.addObserver=BN(n=>this.observer=n)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Lr("not implemented")}_getIdTokenResponse(e){return Lr("not implemented")}_linkToIdToken(e,n){return Lr("not implemented")}_getReauthenticationResolver(e){return Lr("not implemented")}}async function lM(t,e){return Va(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uM(t,e){return Ha(t,"POST","/v1/accounts:signInWithPassword",$a(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cM(t,e){return Ha(t,"POST","/v1/accounts:signInWithEmailLink",$a(t,e))}async function hM(t,e){return Ha(t,"POST","/v1/accounts:signInWithEmailLink",$a(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends pp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ea(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ea(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return uM(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cM(e,{email:this._email,oobCode:this._password});default:Jn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return lM(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return hM(e,{idToken:n,email:this._email,oobCode:this._password});default:Jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(t,e){return Ha(t,"POST","/v1/accounts:signInWithIdp",$a(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM="http://localhost";class ns extends pp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=up(n,["providerId","signInMethod"]);if(!r||!i)return null;const l=new ns(r,i);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return Ks(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ks(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ks(e,n)}buildRequest(){const e={requestUri:fM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dM(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pM(t){const e=jo(Go(t)).link,n=e?jo(Go(e)).deep_link_id:null,r=jo(Go(t)).deep_link_id;return(r?jo(Go(r)).link:null)||r||n||e||t}class gp{constructor(e){var n,r,i,o,l,c;const h=jo(Go(e)),d=(n=h.apiKey)!==null&&n!==void 0?n:null,p=(r=h.oobCode)!==null&&r!==void 0?r:null,m=dM((i=h.mode)!==null&&i!==void 0?i:null);we(d&&p&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=p,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(l=h.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(c=h.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=pM(e);try{return new gp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.providerId=po.PROVIDER_ID}static credential(e,n){return Ea._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gp.parseLink(n);return we(r,"argument-error"),Ea._fromEmailAndCode(e,r.code,r.tenantId)}}po.PROVIDER_ID="password";po.EMAIL_PASSWORD_SIGN_IN_METHOD="password";po.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends mp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends qa{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.FACEBOOK_SIGN_IN_METHOD="facebook.com";ai.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return li.credential(n,r)}catch{return null}}}li.GOOGLE_SIGN_IN_METHOD="google.com";li.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends qa{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.GITHUB_SIGN_IN_METHOD="github.com";ui.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends qa{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ci.credential(n,r)}catch{return null}}}ci.TWITTER_SIGN_IN_METHOD="twitter.com";ci.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gM(t,e){return Ha(t,"POST","/v1/accounts:signUp",$a(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Yi._fromIdTokenResponse(e,r,i),l=l_(r);return new rs({user:o,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=l_(r);return new rs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function l_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu extends hs{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Uu.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Uu(e,n,r,i)}}function mb(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Uu._fromErrorAndOperation(t,o,e,r):o})}async function mM(t,e,n=!1){const r=await wa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yM(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await wa(t,mb(r,i,e,t),n);we(o.idToken,r,"internal-error");const l=fp(o.idToken);we(l,r,"internal-error");const{sub:c}=l;return we(t.uid===c,r,"user-mismatch"),rs._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Jn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(t,e,n=!1){const r="signIn",i=await mb(t,r,e),o=await rs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function vM(t,e){return yb(Wa(t),e)}async function gW(t,e,n){const r=Wa(t),i=await gM(r,{returnSecureToken:!0,email:e,password:n}),o=await rs._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function mW(t,e,n){return vM(Mn(t),po.credential(e,n))}function _M(t,e,n,r){return Mn(t).onAuthStateChanged(e,n,r)}function wM(t){return Mn(t).signOut()}const Bu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bu,"1"),this.storage.removeItem(Bu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(){const t=Ut();return dp(t)||vc(t)}const EM=1e3,IM=10;class _b extends vb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bM()&&oM(),this.fallbackToPolling=pb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,c,h)=>{this.notifyListeners(l,h)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const l=this.storage.getItem(r);if(e.newValue!==l)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},o=this.storage.getItem(r);sM()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,IM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},EM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_b.type="LOCAL";const TM=_b;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb extends vb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wb.type="SESSION";const bb=wb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new _c(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(l).map(async d=>d(n.origin,o)),h=await SM(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_c.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,l;return new Promise((c,h)=>{const d=yp("",20);i.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(m){const _=m;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(_.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(){return window}function AM(t){yr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(){return typeof yr().WorkerGlobalScope!="undefined"&&typeof yr().importScripts=="function"}async function xM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kM(){return Eb()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib="firebaseLocalStorageDb",DM=1,$u="firebaseLocalStorage",Tb="fbase_key";class za{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wc(t,e){return t.transaction([$u],e?"readwrite":"readonly").objectStore($u)}function LM(){const t=indexedDB.deleteDatabase(Ib);return new za(t).toPromise()}function rd(){const t=indexedDB.open(Ib,DM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($u,{keyPath:Tb})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($u)?e(r):(r.close(),await LM(),e(await rd()))})})}async function u_(t,e,n){const r=wc(t,!0).put({[Tb]:e,value:n});return new za(r).toPromise()}async function OM(t,e){const n=wc(t,!1).get(e),r=await new za(n).toPromise();return r===void 0?null:r.value}function c_(t,e){const n=wc(t,!0).delete(e);return new za(n).toPromise()}const NM=800,PM=3;class Sb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>PM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Eb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_c._getInstance(kM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xM(),!this.activeServiceWorker)return;this.sender=new CM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rd();return await u_(e,Bu,"1"),await c_(e,Bu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>u_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>OM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>c_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=wc(i,!1).getAll();return new za(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sb.type="LOCAL";const MM=Sb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function UM(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=mr("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",FM().appendChild(r)})}function BM(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ba(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t,e){return e?Or(e):(we(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp extends pp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $M(t){return yb(t.auth,new vp(t),t.bypassAuthState)}function VM(t){const{auth:e,user:n}=t;return we(n,e,"internal-error"),yM(n,new vp(t),t.bypassAuthState)}async function HM(t){const{auth:e,user:n}=t;return we(n,e,"internal-error"),mM(n,new vp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:l,type:c}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $M;case"linkViaPopup":case"linkViaRedirect":return HM;case"reauthViaPopup":case"reauthViaRedirect":return VM;default:Jn(this.auth,"internal-error")}}resolve(e){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WM=new Ba(2e3,1e4);async function yW(t,e,n){const r=Wa(t);BP(t,e,mp);const i=Cb(r,n);return new Wi(r,"signInViaPopup",e,i).executeNotNull()}class Wi extends Ab{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Wi.currentPopupAction&&Wi.currentPopupAction.cancel(),Wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){$r(this.filter.length===1,"Popup operations only handle one event");const e=yp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mr(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,WM.get())};e()}}Wi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM="pendingRedirect",_f=new Map;class zM extends Ab{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_f.get(this.auth._key());if(!e){try{const r=await KM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_f.set(this.auth._key(),e)}return this.bypassAuthState||_f.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KM(t,e){const n=GM(e),r=jM(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jM(t){return Or(t._redirectPersistence)}function GM(t){return yu(qM,t.config.apiKey,t.name)}async function YM(t,e,n=!1){const r=Wa(t),i=Cb(r,e),l=await new zM(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=10*60*1e3;class JM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xb(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XM&&this.cachedEventUids.clear(),this.cachedEventUids.has(h_(e))}saveEventToCache(e){this.cachedEventUids.add(h_(e)),this.lastProcessedEventTime=Date.now()}}function h_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xb(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZM(t,e={}){return Va(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eF=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tF=/^https?/;async function nF(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZM(t);for(const n of e)try{if(rF(n))return}catch{}Jn(t,"unauthorized-domain")}function rF(t){const e=nd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!tF.test(n))return!1;if(eF.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iF=new Ba(3e4,6e4);function f_(){const t=yr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sF(t){return new Promise((e,n)=>{var r,i,o;function l(){f_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{f_(),n(mr(t,"network-request-failed"))},timeout:iF.get()})}if(!((i=(r=yr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=yr().gapi)===null||o===void 0)&&o.load)l();else{const c=BM("iframefcb");return yr()[c]=()=>{gapi.load?l():n(mr(t,"network-request-failed"))},UM(`https://apis.google.com/js/api.js?onload=${c}`).catch(h=>n(h))}}).catch(e=>{throw vu=null,e})}let vu=null;function oF(t){return vu=vu||sF(t),vu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aF=new Ba(5e3,15e3),lF="__/auth/iframe",uF="emulator/auth/iframe",cF={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hF=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fF(t){const e=t.config;we(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hp(e,uF):`https://${t.config.authDomain}/${lF}`,r={apiKey:e.apiKey,appName:t.name,v:Ua},i=hF.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Fa(r).slice(1)}`}async function dF(t){const e=await oF(t),n=yr().gapi;return we(n,t,"internal-error"),e.open({where:document.body,url:fF(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cF,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const l=mr(t,"network-request-failed"),c=yr().setTimeout(()=>{o(l)},aF.get());function h(){yr().clearTimeout(c),i(r)}r.ping(h).then(h,()=>{o(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pF={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gF=500,mF=600,yF="_blank",vF="http://localhost";class d_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _F(t,e,n,r=gF,i=mF){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const h=Object.assign(Object.assign({},pF),{width:r.toString(),height:i.toString(),top:o,left:l}),d=Ut().toLowerCase();n&&(c=ub(d)?yF:n),lb(d)&&(e=e||vF,h.scrollbars="yes");const p=Object.entries(h).reduce((_,[E,C])=>`${_}${E}=${C},`,"");if(iM(d)&&c!=="_self")return wF(e||"",c),new d_(null);const m=window.open(e||"",c,p);we(m,t,"popup-blocked");try{m.focus()}catch{}return new d_(m)}function wF(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bF="__/auth/handler",EF="emulator/auth/handler";function p_(t,e,n,r,i,o){we(t.config.authDomain,t,"auth-domain-config-required"),we(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ua,eventId:i};if(e instanceof mp){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",UN(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(o||{}))l[h]=d}if(e instanceof qa){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(l.scopes=h.join(","))}t.tenantId&&(l.tid=t.tenantId);const c=l;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];return`${IF(t)}?${Fa(c).slice(1)}`}function IF({config:t}){return t.emulator?hp(t,EF):`https://${t.authDomain}/${bF}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="webStorageSupport";class TF{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bb,this._completeRedirectFn=YM}async _openPopup(e,n,r,i){var o;$r((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=p_(e,n,r,nd(),i);return _F(e,l,yp())}async _openRedirect(e,n,r,i){return await this._originValidation(e),AM(p_(e,n,r,nd(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):($r(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dF(e),r=new JM(e);return n.register("authEvent",i=>(we(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wf,{type:wf},i=>{var o;const l=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[wf];l!==void 0&&n(!!l),Jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nF(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pb()||dp()||vc()}}const SF=TF;var g_="@firebase/auth",m_="0.19.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AF(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xF(t){Zs(new es("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:l}=r.options;return((c,h)=>{we(o&&!o.includes(":"),"invalid-api-key",{appName:c.name}),we(!(l!=null&&l.includes(":")),"argument-error",{appName:c.name});const d={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gb(t)},p=new aM(c,h,d);return VP(p,n),p})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zs(new es("auth-internal",e=>{const n=Wa(e.getProvider("auth").getImmediate());return(r=>new CF(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pi(g_,m_,AF(t)),pi(g_,m_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(t=J0()){const e=lp(t,"auth");return e.isInitialized()?e.getImmediate():$P(t,{popupRedirectResolver:SF,persistence:[MM,TM,bb]})}xF("Browser");var RF="firebase",kF="9.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pi(RF,kF,"app");var DF=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Q,_p=_p||{},be=DF||self;function Vu(){}function id(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ka(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function LF(t){return Object.prototype.hasOwnProperty.call(t,bf)&&t[bf]||(t[bf]=++OF)}var bf="closure_uid_"+(1e9*Math.random()>>>0),OF=0;function NF(t,e,n){return t.call.apply(t.bind,arguments)}function PF(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function zt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?zt=NF:zt=PF,zt.apply(null,arguments)}function au(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Xt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,o){for(var l=Array(arguments.length-2),c=2;c<arguments.length;c++)l[c-2]=arguments[c];return e.prototype[i].apply(r,l)}}function Ti(){this.s=this.s,this.o=this.o}var MF=0,FF={};Ti.prototype.s=!1;Ti.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),MF!=0)){var t=LF(this);delete FF[t]}};Ti.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rb=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},kb=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)};function UF(t){e:{var e=RU;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function v_(t){return Array.prototype.concat.apply([],arguments)}function wp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Hu(t){return/^[\s\xa0]*$/.test(t)}var __=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function fn(t,e){return t.indexOf(e)!=-1}function Ef(t,e){return t<e?-1:t>e?1:0}var dn;e:{var w_=be.navigator;if(w_){var b_=w_.userAgent;if(b_){dn=b_;break e}}dn=""}function bp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Db(t){const e={};for(const n in t)e[n]=t[n];return e}var E_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lb(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let o=0;o<E_.length;o++)n=E_[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ep(t){return Ep[" "](t),t}Ep[" "]=Vu;function BF(t){var e=HF;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var $F=fn(dn,"Opera"),eo=fn(dn,"Trident")||fn(dn,"MSIE"),Ob=fn(dn,"Edge"),sd=Ob||eo,Nb=fn(dn,"Gecko")&&!(fn(dn.toLowerCase(),"webkit")&&!fn(dn,"Edge"))&&!(fn(dn,"Trident")||fn(dn,"MSIE"))&&!fn(dn,"Edge"),VF=fn(dn.toLowerCase(),"webkit")&&!fn(dn,"Edge");function Pb(){var t=be.document;return t?t.documentMode:void 0}var Wu;e:{var If="",Tf=function(){var t=dn;if(Nb)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ob)return/Edge\/([\d\.]+)/.exec(t);if(eo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(VF)return/WebKit\/(\S+)/.exec(t);if($F)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Tf&&(If=Tf?Tf[1]:""),eo){var Sf=Pb();if(Sf!=null&&Sf>parseFloat(If)){Wu=String(Sf);break e}}Wu=If}var HF={};function WF(){return BF(function(){let t=0;const e=__(String(Wu)).split("."),n=__("9").split("."),r=Math.max(e.length,n.length);for(let l=0;t==0&&l<r;l++){var i=e[l]||"",o=n[l]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],i[0].length==0&&o[0].length==0)break;t=Ef(i[1].length==0?0:parseInt(i[1],10),o[1].length==0?0:parseInt(o[1],10))||Ef(i[2].length==0,o[2].length==0)||Ef(i[2],o[2]),i=i[3],o=o[3]}while(t==0)}return 0<=t})}var od;if(be.document&&eo){var I_=Pb();od=I_||parseInt(Wu,10)||void 0}else od=void 0;var qF=od,zF=function(){if(!be.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{be.addEventListener("test",Vu,e),be.removeEventListener("test",Vu,e)}catch{}return t}();function rn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}rn.prototype.h=function(){this.defaultPrevented=!0};function Ia(t,e){if(rn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Nb){e:{try{Ep(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:KF[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ia.Z.h.call(this)}}Xt(Ia,rn);var KF={2:"touch",3:"pen",4:"mouse"};Ia.prototype.h=function(){Ia.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ja="closure_listenable_"+(1e6*Math.random()|0),jF=0;function GF(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++jF,this.ca=this.fa=!1}function bc(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ec(t){this.src=t,this.g={},this.h=0}Ec.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var l=ld(t,e,r,i);return-1<l?(e=t[l],n||(e.fa=!1)):(e=new GF(e,this.src,o,!!r,i),e.fa=n,t.push(e)),e};function ad(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Rb(r,e),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(bc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ld(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.ca&&o.listener==e&&o.capture==!!n&&o.ia==r)return i}return-1}var Ip="closure_lm_"+(1e6*Math.random()|0),Cf={};function Mb(t,e,n,r,i){if(r&&r.once)return Ub(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)Mb(t,e[o],n,r,i);return null}return n=Cp(n),t&&t[ja]?t.N(e,n,Ka(r)?!!r.capture:!!r,i):Fb(t,e,n,!1,r,i)}function Fb(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var l=Ka(i)?!!i.capture:!!i,c=Sp(t);if(c||(t[Ip]=c=new Ec(t)),n=c.add(e,n,r,l,o),n.proxy)return n;if(r=YF(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)zF||(i=l),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent($b(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function YF(){function t(n){return e.call(t.src,t.listener,n)}var e=XF;return t}function Ub(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)Ub(t,e[o],n,r,i);return null}return n=Cp(n),t&&t[ja]?t.O(e,n,Ka(r)?!!r.capture:!!r,i):Fb(t,e,n,!0,r,i)}function Bb(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)Bb(t,e[o],n,r,i);else r=Ka(r)?!!r.capture:!!r,n=Cp(n),t&&t[ja]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=ld(o,n,r,i),-1<n&&(bc(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete t.g[e],t.h--)))):t&&(t=Sp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ld(e,n,r,i)),(n=-1<t?e[t]:null)&&Tp(n))}function Tp(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[ja])ad(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent($b(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Sp(e))?(ad(n,t),n.h==0&&(n.src=null,e[Ip]=null)):bc(t)}}}function $b(t){return t in Cf?Cf[t]:Cf[t]="on"+t}function XF(t,e){if(t.ca)t=!0;else{e=new Ia(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Tp(t),t=n.call(r,e)}return t}function Sp(t){return t=t[Ip],t instanceof Ec?t:null}var Af="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cp(t){return typeof t=="function"?t:(t[Af]||(t[Af]=function(e){return t.handleEvent(e)}),t[Af])}function Bt(){Ti.call(this),this.i=new Ec(this),this.P=this,this.I=null}Xt(Bt,Ti);Bt.prototype[ja]=!0;Bt.prototype.removeEventListener=function(t,e,n,r){Bb(this,t,e,n,r)};function Kt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new rn(e,t);else if(e instanceof rn)e.target=e.target||t;else{var i=e;e=new rn(r,t),Lb(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var l=e.g=n[o];i=lu(l,r,!0,e)&&i}if(l=e.g=t,i=lu(l,r,!0,e)&&i,i=lu(l,r,!1,e)&&i,n)for(o=0;o<n.length;o++)l=e.g=n[o],i=lu(l,r,!1,e)&&i}Bt.prototype.M=function(){if(Bt.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)bc(n[r]);delete t.g[e],t.h--}}this.I=null};Bt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Bt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function lu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var l=e[o];if(l&&!l.ca&&l.capture==n){var c=l.listener,h=l.ia||l.src;l.fa&&ad(t.i,l),i=c.call(h,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ap=be.JSON.stringify;function JF(){var t=Hb;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class QF{constructor(){this.h=this.g=null}add(e,n){const r=Vb.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Vb=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new ZF,t=>t.reset());class ZF{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function eU(t){be.setTimeout(()=>{throw t},0)}function xp(t,e){ud||tU(),cd||(ud(),cd=!0),Hb.add(t,e)}var ud;function tU(){var t=be.Promise.resolve(void 0);ud=function(){t.then(nU)}}var cd=!1,Hb=new QF;function nU(){for(var t;t=JF();){try{t.h.call(t.g)}catch(n){eU(n)}var e=Vb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}cd=!1}function Ic(t,e){Bt.call(this),this.h=t||1,this.g=e||be,this.j=zt(this.kb,this),this.l=Date.now()}Xt(Ic,Bt);Q=Ic.prototype;Q.da=!1;Q.S=null;Q.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Kt(this,"tick"),this.da&&(Rp(this),this.start()))}};Q.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Rp(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}Q.M=function(){Ic.Z.M.call(this),Rp(this),delete this.g};function kp(t,e,n){if(typeof t=="function")n&&(t=zt(t,n));else if(t&&typeof t.handleEvent=="function")t=zt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:be.setTimeout(t,e||0)}function Wb(t){t.g=kp(()=>{t.g=null,t.i&&(t.i=!1,Wb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class rU extends Ti{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Wb(this)}M(){super.M(),this.g&&(be.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ta(t){Ti.call(this),this.h=t,this.g={}}Xt(Ta,Ti);var T_=[];function qb(t,e,n,r){Array.isArray(n)||(n&&(T_[0]=n.toString()),n=T_);for(var i=0;i<n.length;i++){var o=Mb(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function zb(t){bp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Tp(e)},t),t.g={}}Ta.prototype.M=function(){Ta.Z.M.call(this),zb(this)};Ta.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Tc(){this.g=!0}Tc.prototype.Aa=function(){this.g=!1};function iU(t,e,n,r,i,o){t.info(function(){if(t.g)if(o)for(var l="",c=o.split("&"),h=0;h<c.length;h++){var d=c[h].split("=");if(1<d.length){var p=d[0];d=d[1];var m=p.split("_");l=2<=m.length&&m[1]=="type"?l+(p+"="+d+"&"):l+(p+"=redacted&")}}else l=null;else l=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+l})}function sU(t,e,n,r,i,o,l){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+o+" "+l})}function Us(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+aU(t,n)+(r?" "+r:"")})}function oU(t,e){t.info(function(){return"TIMEOUT: "+e})}Tc.prototype.info=function(){};function aU(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var l=1;l<i.length;l++)i[l]=""}}}}return Ap(n)}catch{return e}}var fs={},S_=null;function Sc(){return S_=S_||new Bt}fs.Ma="serverreachability";function Kb(t){rn.call(this,fs.Ma,t)}Xt(Kb,rn);function Sa(t){const e=Sc();Kt(e,new Kb(e,t))}fs.STAT_EVENT="statevent";function jb(t,e){rn.call(this,fs.STAT_EVENT,t),this.stat=e}Xt(jb,rn);function pn(t){const e=Sc();Kt(e,new jb(e,t))}fs.Na="timingevent";function Gb(t,e){rn.call(this,fs.Na,t),this.size=e}Xt(Gb,rn);function Ga(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return be.setTimeout(function(){t()},e)}var Cc={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Yb={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Dp(){}Dp.prototype.h=null;function C_(t){return t.h||(t.h=t.i())}function Xb(){}var Ya={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Lp(){rn.call(this,"d")}Xt(Lp,rn);function Op(){rn.call(this,"c")}Xt(Op,rn);var hd;function Ac(){}Xt(Ac,Dp);Ac.prototype.g=function(){return new XMLHttpRequest};Ac.prototype.i=function(){return{}};hd=new Ac;function Xa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Ta(this),this.P=lU,t=sd?125:void 0,this.W=new Ic(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Jb}function Jb(){this.i=null,this.g="",this.h=!1}var lU=45e3,fd={},qu={};Q=Xa.prototype;Q.setTimeout=function(t){this.P=t};function dd(t,e,n){t.K=1,t.v=Rc(Vr(e)),t.s=n,t.U=!0,Qb(t,null)}function Qb(t,e){t.F=Date.now(),Ja(t),t.A=Vr(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),sE(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Jb,t.g=SE(t.l,n?e:null,!t.s),0<t.O&&(t.L=new rU(zt(t.Ia,t,t.g),t.O)),qb(t.V,t.g,"readystatechange",t.gb),e=t.H?Db(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Sa(1),iU(t.j,t.u,t.A,t.m,t.X,t.s)}Q.gb=function(t){t=t.target;const e=this.L;e&&Nr(t)==3?e.l():this.Ia(t)};Q.Ia=function(t){try{if(t==this.g)e:{const p=Nr(this.g);var e=this.g.Da();const m=this.g.ba();if(!(3>p)&&(p!=3||sd||this.g&&(this.h.h||this.g.ga()||k_(this.g)))){this.I||p!=4||e==7||(e==8||0>=m?Sa(3):Sa(2)),xc(this);var n=this.g.ba();this.N=n;t:if(Zb(this)){var r=k_(this.g);t="";var i=r.length,o=Nr(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){qi(this),ua(this);var l="";break t}this.h.i=new be.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,l=this.h.g}else l=this.g.ga();if(this.i=n==200,sU(this.j,this.u,this.A,this.m,this.X,p,n),this.i){if(this.$&&!this.J){t:{if(this.g){var c,h=this.g;if((c=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Hu(c)){var d=c;break t}}d=null}if(n=d)Us(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,pd(this,n);else{this.i=!1,this.o=3,pn(12),qi(this),ua(this);break e}}this.U?(eE(this,p,l),sd&&this.i&&p==3&&(qb(this.V,this.W,"tick",this.fb),this.W.start())):(Us(this.j,this.m,l,null),pd(this,l)),p==4&&qi(this),this.i&&!this.I&&(p==4?bE(this.l,this):(this.i=!1,Ja(this)))}else n==400&&0<l.indexOf("Unknown SID")?(this.o=3,pn(12)):(this.o=0,pn(13)),qi(this),ua(this)}}}catch{}finally{}};function Zb(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function eE(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=uU(t,n),i==qu){e==4&&(t.o=4,pn(14),r=!1),Us(t.j,t.m,null,"[Incomplete Response]");break}else if(i==fd){t.o=4,pn(15),Us(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Us(t.j,t.m,i,null),pd(t,i);Zb(t)&&i!=qu&&i!=fd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pn(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hp(e),e.L=!0,pn(11))):(Us(t.j,t.m,n,"[Invalid Chunked Response]"),qi(t),ua(t))}Q.fb=function(){if(this.g){var t=Nr(this.g),e=this.g.ga();this.C<e.length&&(xc(this),eE(this,t,e),this.i&&t!=4&&Ja(this))}};function uU(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?qu:(n=Number(e.substring(n,r)),isNaN(n)?fd:(r+=1,r+n>e.length?qu:(e=e.substr(r,n),t.C=r+n,e)))}Q.cancel=function(){this.I=!0,qi(this)};function Ja(t){t.Y=Date.now()+t.P,tE(t,t.P)}function tE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ga(zt(t.eb,t),e)}function xc(t){t.B&&(be.clearTimeout(t.B),t.B=null)}Q.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(oU(this.j,this.A),this.K!=2&&(Sa(3),pn(17)),qi(this),this.o=2,ua(this)):tE(this,this.Y-t)};function ua(t){t.l.G==0||t.I||bE(t.l,t)}function qi(t){xc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Rp(t.W),zb(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function pd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||gd(n.i,t))){if(n.I=t.N,!t.J&&gd(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Gu(n),Lc(n);else break e;Vp(n),pn(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Ga(zt(n.ab,n),6e3));if(1>=lE(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else zi(n,11)}else if((t.J||n.g==t)&&Gu(n),!Hu(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let d=i[e];if(n.U=d[0],d=d[1],n.G==2)if(d[0]=="c"){n.J=d[1],n.la=d[2];const p=d[3];p!=null&&(n.ma=p,n.h.info("VER="+n.ma));const m=d[4];m!=null&&(n.za=m,n.h.info("SVER="+n.za));const _=d[5];_!=null&&typeof _=="number"&&0<_&&(r=1.5*_,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const E=t.g;if(E){const C=E.g?E.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(C){var o=r.i;!o.g&&(fn(C,"spdy")||fn(C,"quic")||fn(C,"h2"))&&(o.j=o.l,o.g=new Set,o.h&&(Mp(o,o.h),o.h=null))}if(r.D){const M=E.g?E.g.getResponseHeader("X-HTTP-Session-Id"):null;M&&(r.sa=M,vt(r.F,r.D,M))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var l=t;if(r.oa=TE(r,r.H?r.la:null,r.W),l.J){uE(r.i,l);var c=l,h=r.K;h&&c.setTimeout(h),c.B&&(xc(c),Ja(c)),r.g=l}else _E(r);0<n.l.length&&Oc(n)}else d[0]!="stop"&&d[0]!="close"||zi(n,7);else n.G==3&&(d[0]=="stop"||d[0]=="close"?d[0]=="stop"?zi(n,7):$p(n):d[0]!="noop"&&n.j&&n.j.wa(d),n.A=0)}}Sa(4)}catch{}}function cU(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(id(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Np(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(id(t)||typeof t=="string")kb(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(id(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=cU(t),i=r.length;for(var o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}}function go(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof go)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}Q=go.prototype;Q.R=function(){Pp(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};Q.T=function(){return Pp(this),this.g.concat()};function Pp(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];is(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],is(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}Q.get=function(t,e){return is(this.h,t)?this.h[t]:e};Q.set=function(t,e){is(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};Q.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);t.call(e,o,i,this)}};function is(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var nE=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function hU(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ss(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ss){this.g=e!==void 0?e:t.g,zu(this,t.j),this.s=t.s,Ku(this,t.i),ju(this,t.m),this.l=t.l,e=t.h;var n=new Ca;n.i=e.i,e.g&&(n.g=new go(e.g),n.h=e.h),A_(this,n),this.o=t.o}else t&&(n=String(t).match(nE))?(this.g=!!e,zu(this,n[1]||"",!0),this.s=ca(n[2]||""),Ku(this,n[3]||"",!0),ju(this,n[4]),this.l=ca(n[5]||"",!0),A_(this,n[6]||"",!0),this.o=ca(n[7]||"")):(this.g=!!e,this.h=new Ca(null,this.g))}ss.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xo(e,x_,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xo(e,x_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Xo(n,n.charAt(0)=="/"?mU:gU,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xo(n,vU)),t.join("")};function Vr(t){return new ss(t)}function zu(t,e,n){t.j=n?ca(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ku(t,e,n){t.i=n?ca(e,!0):e}function ju(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function A_(t,e,n){e instanceof Ca?(t.h=e,_U(t.h,t.g)):(n||(e=Xo(e,yU)),t.h=new Ca(e,t.g))}function vt(t,e,n){t.h.set(e,n)}function Rc(t){return vt(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function fU(t){return t instanceof ss?Vr(t):new ss(t,void 0)}function dU(t,e,n,r){var i=new ss(null,void 0);return t&&zu(i,t),e&&Ku(i,e),n&&ju(i,n),r&&(i.l=r),i}function ca(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,pU),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function pU(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var x_=/[#\/\?@]/g,gU=/[#\?:]/g,mU=/[#\?]/g,yU=/[#\?@]/g,vU=/#/g;function Ca(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Si(t){t.g||(t.g=new go,t.h=0,t.i&&hU(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}Q=Ca.prototype;Q.add=function(t,e){Si(this),this.i=null,t=mo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function rE(t,e){Si(t),e=mo(t,e),is(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,is(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Pp(t)))}function iE(t,e){return Si(t),e=mo(t,e),is(t.g.h,e)}Q.forEach=function(t,e){Si(this),this.g.forEach(function(n,r){kb(n,function(i){t.call(e,i,r,this)},this)},this)};Q.T=function(){Si(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r]);return n};Q.R=function(t){Si(this);var e=[];if(typeof t=="string")iE(this,t)&&(e=v_(e,this.g.get(mo(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=v_(e,t[n])}return e};Q.set=function(t,e){return Si(this),this.i=null,t=mo(this,t),iE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};Q.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function sE(t,e,n){rE(t,e),0<n.length&&(t.i=null,t.g.set(mo(t,e),wp(n)),t.h+=n.length)}Q.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var o=0;o<r.length;o++){var l=i;r[o]!==""&&(l+="="+encodeURIComponent(String(r[o]))),t.push(l)}}return this.i=t.join("&")};function mo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function _U(t,e){e&&!t.j&&(Si(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(rE(this,r),sE(this,i,n))},t)),t.j=e}var wU=class{constructor(t,e){this.h=t,this.g=e}};function oE(t){this.l=t||bU,be.PerformanceNavigationTiming?(t=be.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(be.g&&be.g.Ea&&be.g.Ea()&&be.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bU=10;function aE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function lE(t){return t.h?1:t.g?t.g.size:0}function gd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Mp(t,e){t.g?t.g.add(e):t.h=e}function uE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}oE.prototype.cancel=function(){if(this.i=cE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function cE(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return wp(t.i)}function Fp(){}Fp.prototype.stringify=function(t){return be.JSON.stringify(t,void 0)};Fp.prototype.parse=function(t){return be.JSON.parse(t,void 0)};function EU(){this.g=new Fp}function IU(t,e,n){const r=n||"";try{Np(t,function(i,o){let l=i;Ka(i)&&(l=Ap(i)),e.push(r+o+"="+encodeURIComponent(l))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function TU(t,e){const n=new Tc;if(be.Image){const r=new Image;r.onload=au(uu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=au(uu,n,r,"TestLoadImage: error",!1,e),r.onabort=au(uu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=au(uu,n,r,"TestLoadImage: timeout",!1,e),be.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function uu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Qa(t){this.l=t.$b||null,this.j=t.ib||!1}Xt(Qa,Dp);Qa.prototype.g=function(){return new kc(this.l,this.j)};Qa.prototype.i=function(t){return function(){return t}}({});function kc(t,e){Bt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Up,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xt(kc,Bt);var Up=0;Q=kc.prototype;Q.open=function(t,e){if(this.readyState!=Up)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Aa(this)};Q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||be).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};Q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Za(this)),this.readyState=Up};Q.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Aa(this)),this.g&&(this.readyState=3,Aa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof be.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;hE(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function hE(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}Q.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Za(this):Aa(this),this.readyState==3&&hE(this)}};Q.Ua=function(t){this.g&&(this.response=this.responseText=t,Za(this))};Q.Ta=function(t){this.g&&(this.response=t,Za(this))};Q.ha=function(){this.g&&Za(this)};function Za(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Aa(t)}Q.setRequestHeader=function(t,e){this.v.append(t,e)};Q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};Q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Aa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(kc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var SU=be.JSON.parse;function Lt(t){Bt.call(this),this.headers=new go,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=fE,this.K=this.L=!1}Xt(Lt,Bt);var fE="",CU=/^https?$/i,AU=["POST","PUT"];Q=Lt.prototype;Q.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():hd.g(),this.C=this.u?C_(this.u):C_(hd),this.g.onreadystatechange=zt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(o){R_(this,o);return}t=n||"";const i=new go(this.headers);r&&Np(r,function(o,l){i.set(l,o)}),r=UF(i.T()),n=be.FormData&&t instanceof be.FormData,!(0<=Rb(AU,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(o,l){this.g.setRequestHeader(l,o)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{gE(this),0<this.B&&((this.K=xU(this.g))?(this.g.timeout=this.B,this.g.ontimeout=zt(this.pa,this)):this.A=kp(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){R_(this,o)}};function xU(t){return eo&&WF()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function RU(t){return t.toLowerCase()=="content-type"}Q.pa=function(){typeof _p!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Kt(this,"timeout"),this.abort(8))};function R_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,dE(t),Dc(t)}function dE(t){t.D||(t.D=!0,Kt(t,"complete"),Kt(t,"error"))}Q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Kt(this,"complete"),Kt(this,"abort"),Dc(this))};Q.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dc(this,!0)),Lt.Z.M.call(this)};Q.Fa=function(){this.s||(this.F||this.v||this.l?pE(this):this.cb())};Q.cb=function(){pE(this)};function pE(t){if(t.h&&typeof _p!="undefined"&&(!t.C[1]||Nr(t)!=4||t.ba()!=2)){if(t.v&&Nr(t)==4)kp(t.Fa,0,t);else if(Kt(t,"readystatechange"),Nr(t)==4){t.h=!1;try{const c=t.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=c===0){var i=String(t.H).match(nE)[1]||null;if(!i&&be.self&&be.self.location){var o=be.self.location.protocol;i=o.substr(0,o.length-1)}r=!CU.test(i?i.toLowerCase():"")}n=r}if(n)Kt(t,"complete"),Kt(t,"success");else{t.m=6;try{var l=2<Nr(t)?t.g.statusText:""}catch{l=""}t.j=l+" ["+t.ba()+"]",dE(t)}}finally{Dc(t)}}}}function Dc(t,e){if(t.g){gE(t);const n=t.g,r=t.C[0]?Vu:null;t.g=null,t.C=null,e||Kt(t,"ready");try{n.onreadystatechange=r}catch{}}}function gE(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(be.clearTimeout(t.A),t.A=null)}function Nr(t){return t.g?t.g.readyState:0}Q.ba=function(){try{return 2<Nr(this)?this.g.status:-1}catch{return-1}};Q.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};Q.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),SU(e)}};function k_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case fE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}Q.Da=function(){return this.m};Q.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function kU(t){let e="";return bp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Bp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=kU(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):vt(t,e,n))}function Wo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mE(t){this.za=0,this.l=[],this.h=new Tc,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Wo("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Wo("baseRetryDelayMs",5e3,t),this.$a=Wo("retryDelaySeedMs",1e4,t),this.Ya=Wo("forwardChannelMaxRetries",2,t),this.ra=Wo("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new oE(t&&t.concurrentRequestLimit),this.Ca=new EU,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}Q=mE.prototype;Q.ma=8;Q.G=1;function $p(t){if(yE(t),t.G==3){var e=t.V++,n=Vr(t.F);vt(n,"SID",t.J),vt(n,"RID",e),vt(n,"TYPE","terminate"),el(t,n),e=new Xa(t,t.h,e,void 0),e.K=2,e.v=Rc(Vr(n)),n=!1,be.navigator&&be.navigator.sendBeacon&&(n=be.navigator.sendBeacon(e.v.toString(),"")),!n&&be.Image&&(new Image().src=e.v,n=!0),n||(e.g=SE(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ja(e)}IE(t)}Q.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Lc(t){t.g&&(Hp(t),t.g.cancel(),t.g=null)}function yE(t){Lc(t),t.u&&(be.clearTimeout(t.u),t.u=null),Gu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&be.clearTimeout(t.m),t.m=null)}function xf(t,e){t.l.push(new wU(t.Za++,e)),t.G==3&&Oc(t)}function Oc(t){aE(t.i)||t.m||(t.m=!0,xp(t.Ha,t),t.C=0)}function DU(t,e){return lE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Ga(zt(t.Ha,t,e),EE(t,t.C)),t.C++,!0)}Q.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Xa(this,this.h,t,void 0);let o=this.s;if(this.P&&(o?(o=Db(o),Lb(o,this.P)):o=this.P),this.o===null&&(i.H=o),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vE(this,i,e),n=Vr(this.F),vt(n,"RID",t),vt(n,"CVER",22),this.D&&vt(n,"X-HTTP-Session-Id",this.D),el(this,n),this.o&&o&&Bp(n,this.o,o),Mp(this.i,i),this.Ra&&vt(n,"TYPE","init"),this.ja?(vt(n,"$req",e),vt(n,"SID","null"),i.$=!0,dd(i,n,null)):dd(i,n,e),this.G=2}}else this.G==3&&(t?D_(this,t):this.l.length==0||aE(this.i)||D_(this))};function D_(t,e){var n;e?n=e.m:n=t.V++;const r=Vr(t.F);vt(r,"SID",t.J),vt(r,"RID",n),vt(r,"AID",t.U),el(t,r),t.o&&t.s&&Bp(r,t.o,t.s),n=new Xa(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=vE(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Mp(t.i,n),dd(n,r,e)}function el(t,e){t.j&&Np({},function(n,r){vt(e,r,n)})}function vE(t,e,n){n=Math.min(t.l.length,n);var r=t.j?zt(t.j.Oa,t.j,t):null;e:{var i=t.l;let o=-1;for(;;){const l=["count="+n];o==-1?0<n?(o=i[0].h,l.push("ofs="+o)):o=0:l.push("ofs="+o);let c=!0;for(let h=0;h<n;h++){let d=i[h].h;const p=i[h].g;if(d-=o,0>d)o=Math.max(0,i[h].h-100),c=!1;else try{IU(p,l,"req"+d+"_")}catch{r&&r(p)}}if(c){r=l.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function _E(t){t.g||t.u||(t.Y=1,xp(t.Ga,t),t.A=0)}function Vp(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Ga(zt(t.Ga,t),EE(t,t.A)),t.A++,!0)}Q.Ga=function(){if(this.u=null,wE(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Ga(zt(this.bb,this),t)}};Q.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,pn(10),Lc(this),wE(this))};function Hp(t){t.B!=null&&(be.clearTimeout(t.B),t.B=null)}function wE(t){t.g=new Xa(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Vr(t.oa);vt(e,"RID","rpc"),vt(e,"SID",t.J),vt(e,"CI",t.N?"0":"1"),vt(e,"AID",t.U),el(t,e),vt(e,"TYPE","xmlhttp"),t.o&&t.s&&Bp(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Rc(Vr(e)),n.s=null,n.U=!0,Qb(n,t)}Q.ab=function(){this.v!=null&&(this.v=null,Lc(this),Vp(this),pn(19))};function Gu(t){t.v!=null&&(be.clearTimeout(t.v),t.v=null)}function bE(t,e){var n=null;if(t.g==e){Gu(t),Hp(t),t.g=null;var r=2}else if(gd(t.i,e))n=e.D,uE(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Sc(),Kt(r,new Gb(r,n,e,i)),Oc(t)}else _E(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&DU(t,e)||r==2&&Vp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:zi(t,5);break;case 4:zi(t,10);break;case 3:zi(t,6);break;default:zi(t,2)}}}function EE(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function zi(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=zt(t.jb,t);n||(n=new ss("//www.google.com/images/cleardot.gif"),be.location&&be.location.protocol=="http"||zu(n,"https"),Rc(n)),TU(n.toString(),r)}else pn(2);t.G=0,t.j&&t.j.va(e),IE(t),yE(t)}Q.jb=function(t){t?(this.h.info("Successfully pinged google.com"),pn(2)):(this.h.info("Failed to ping google.com"),pn(1))};function IE(t){t.G=0,t.I=-1,t.j&&((cE(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,wp(t.l),t.l.length=0),t.j.ua())}function TE(t,e,n){let r=fU(n);if(r.i!="")e&&Ku(r,e+"."+r.i),ju(r,r.m);else{const i=be.location;r=dU(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&bp(t.aa,function(i,o){vt(r,o,i)}),e=t.D,n=t.sa,e&&n&&vt(r,e,n),vt(r,"VER",t.ma),el(t,r),r}function SE(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Lt(new Qa({ib:!0})):new Lt(t.qa),e.L=t.H,e}function CE(){}Q=CE.prototype;Q.xa=function(){};Q.wa=function(){};Q.va=function(){};Q.ua=function(){};Q.Oa=function(){};function Yu(){if(eo&&!(10<=Number(qF)))throw Error("Environmental error: no available transport.")}Yu.prototype.g=function(t,e){return new Fn(t,e)};function Fn(t,e){Bt.call(this),this.g=new mE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Hu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Hu(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new yo(this)}Xt(Fn,Bt);Fn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),xp(zt(t.hb,t,e))),pn(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=TE(t,null,t.W),Oc(t)};Fn.prototype.close=function(){$p(this.g)};Fn.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,xf(this.g,e)}else this.v?(e={},e.__data__=Ap(t),xf(this.g,e)):xf(this.g,t)};Fn.prototype.M=function(){this.g.j=null,delete this.j,$p(this.g),delete this.g,Fn.Z.M.call(this)};function AE(t){Lp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Xt(AE,Lp);function xE(){Op.call(this),this.status=1}Xt(xE,Op);function yo(t){this.g=t}Xt(yo,CE);yo.prototype.xa=function(){Kt(this.g,"a")};yo.prototype.wa=function(t){Kt(this.g,new AE(t))};yo.prototype.va=function(t){Kt(this.g,new xE(t))};yo.prototype.ua=function(){Kt(this.g,"b")};Yu.prototype.createWebChannel=Yu.prototype.g;Fn.prototype.send=Fn.prototype.u;Fn.prototype.open=Fn.prototype.m;Fn.prototype.close=Fn.prototype.close;Cc.NO_ERROR=0;Cc.TIMEOUT=8;Cc.HTTP_ERROR=6;Yb.COMPLETE="complete";Xb.EventType=Ya;Ya.OPEN="a";Ya.CLOSE="b";Ya.ERROR="c";Ya.MESSAGE="d";Bt.prototype.listen=Bt.prototype.N;Lt.prototype.listenOnce=Lt.prototype.O;Lt.prototype.getLastError=Lt.prototype.La;Lt.prototype.getLastErrorCode=Lt.prototype.Da;Lt.prototype.getStatus=Lt.prototype.ba;Lt.prototype.getResponseJson=Lt.prototype.Qa;Lt.prototype.getResponseText=Lt.prototype.ga;Lt.prototype.send=Lt.prototype.ea;var LU=function(){return new Yu},OU=function(){return Sc()},Rf=Cc,NU=Yb,PU=fs,L_={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},MU=Qa,cu=Xb,FU=Lt;const O_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}In.UNAUTHENTICATED=new In(null),In.GOOGLE_CREDENTIALS=new In("google-credentials-uid"),In.FIRST_PARTY=new In("first-party-uid"),In.MOCK_USER=new In("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo="9.6.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new op("@firebase/firestore");function N_(){return os.logLevel}function he(t,...e){if(os.logLevel<=Xe.DEBUG){const n=e.map(Wp);os.debug(`Firestore (${vo}): ${t}`,...n)}}function _i(t,...e){if(os.logLevel<=Xe.ERROR){const n=e.map(Wp);os.error(`Firestore (${vo}): ${t}`,...n)}}function P_(t,...e){if(os.logLevel<=Xe.WARN){const n=e.map(Wp);os.warn(`Firestore (${vo}): ${t}`,...n)}}function Wp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t="Unexpected state"){const e=`FIRESTORE (${vo}) INTERNAL ASSERTION FAILED: `+t;throw _i(e),new Error(e)}function ht(t,e){t||Ae()}function ke(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends hs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UU{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BU{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(In.UNAUTHENTICATED))}shutdown(){}}class $U{constructor(e){this.t=e,this.currentUser=In.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=h=>this.i!==r?(r=this.i,n(h)):Promise.resolve();let o=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Fr,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Fr)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ht(typeof r.accessToken=="string"),new UU(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ht(e===null||typeof e=="string"),new In(e)}}class VU{constructor(e,n,r){this.type="FirstParty",this.user=In.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class HU{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new VU(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(In.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WU{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qU{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=o=>{o.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.p;return this.p=o.token,he("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.g.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.g.getImmediate({optional:!0});o?i(o):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ht(typeof n.token=="string"),this.p=n.token,new WU(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zU(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qp.A=-1;class RE{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=zU(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function et(t,e){return t<e?-1:t>e?1:0}function to(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return sn.fromMillis(Date.now())}static fromDate(e){return sn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new sn(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?et(this.nanoseconds,e.nanoseconds):et(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Me(e)}static min(){return new Me(new sn(0,0))}static max(){return new Me(new sn(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _o(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ae(),r===void 0?r=e.length-n:r>e.length-n&&Ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),l=n.get(i);if(o<l)return-1;if(o>l)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class dt extends xa{construct(e,n,r){return new dt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new dt(n)}static emptyPath(){return new dt([])}}const KU=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tn extends xa{construct(e,n,r){return new Tn(e,n,r)}static isValidIdentifier(e){return KU.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Tn(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new ne(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let l=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new ne(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new ne(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else c==="`"?(l=!l,i++):c!=="."||l?(r+=c,i++):(o(),i++)}if(o(),l)throw new ne(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tn(n)}static emptyPath(){return new Tn([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e){this.fields=e,e.sort(Tn.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return to(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Yt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new Yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return et(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Yt.EMPTY_BYTE_STRING=new Yt("");const jU=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(t){if(ht(!!t),typeof t=="string"){let e=0;const n=jU.exec(t);if(ht(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:At(t.seconds),nanos:At(t.nanos)}}function At(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function no(t){return typeof t=="string"?Yt.fromBase64String(t):Yt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function LE(t){const e=t.mapValue.fields.__previous_value__;return DE(e)?LE(e):e}function Ra(t){const e=wi(t.mapValue.fields.__local_write_time__.timestampValue);return new sn(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GU{constructor(e,n,r,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.useFetchStreams=h}}class ro{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ro("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t){return t==null}function Xu(t){return t===0&&1/t==-1/0}function YU(t){return typeof t=="number"&&Number.isInteger(t)&&!Xu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(dt.fromString(e))}static fromName(e){return new fe(dt.fromString(e).popFirst(5))}static empty(){return new fe(dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&dt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return dt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new dt(e.slice()))}}function as(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?DE(t)?4:XU(t)?9:10:Ae()}function _r(t,e){if(t===e)return!0;const n=as(t);if(n!==as(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ra(t).isEqual(Ra(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=wi(r.timestampValue),l=wi(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return no(r.bytesValue).isEqual(no(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return At(r.geoPointValue.latitude)===At(i.geoPointValue.latitude)&&At(r.geoPointValue.longitude)===At(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return At(r.integerValue)===At(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=At(r.doubleValue),l=At(i.doubleValue);return o===l?Xu(o)===Xu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return to(t.arrayValue.values||[],e.arrayValue.values||[],_r);case 10:return function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(M_(o)!==M_(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!_r(o[c],l[c])))return!1;return!0}(t,e);default:return Ae()}}function ka(t,e){return(t.values||[]).find(n=>_r(n,e))!==void 0}function io(t,e){if(t===e)return 0;const n=as(t),r=as(e);if(n!==r)return et(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return et(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=At(i.integerValue||i.doubleValue),c=At(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return F_(t.timestampValue,e.timestampValue);case 4:return F_(Ra(t),Ra(e));case 5:return et(t.stringValue,e.stringValue);case 6:return function(i,o){const l=no(i),c=no(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=et(l[h],c[h]);if(d!==0)return d}return et(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=et(At(i.latitude),At(o.latitude));return l!==0?l:et(At(i.longitude),At(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const l=i.values||[],c=o.values||[];for(let h=0;h<l.length&&h<c.length;++h){const d=io(l[h],c[h]);if(d)return d}return et(l.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=et(c[p],d[p]);if(m!==0)return m;const _=io(l[c[p]],h[d[p]]);if(_!==0)return _}return et(c.length,d.length)}(t.mapValue,e.mapValue);default:throw Ae()}}function F_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return et(t,e);const n=wi(t),r=wi(e),i=et(n.seconds,r.seconds);return i!==0?i:et(n.nanos,r.nanos)}function js(t){return yd(t)}function yd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=wi(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?no(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,fe.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",o=!0;for(const l of r.values||[])o?o=!1:i+=",",i+=yd(l);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${yd(r.fields[c])}`;return o+"}"}(t.mapValue):Ae();var e,n}function U_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function vd(t){return!!t&&"integerValue"in t}function zp(t){return!!t&&"arrayValue"in t}function B_(t){return!!t&&"nullValue"in t}function $_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _u(t){return!!t&&"mapValue"in t}function ha(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _o(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ha(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ha(t.arrayValue.values[n]);return e}return Object.assign({},t)}function XU(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.value=e}static empty(){return new or({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!_u(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ha(n)}setAll(e){let n=Tn.emptyPath(),r={},i=[];e.forEach((l,c)=>{if(!n.isImmediateParentOf(c)){const h=this.getFieldsMap(n);this.applyChanges(h,r,i),r={},i=[],n=c.popLast()}l?r[c.lastSegment()]=ha(l):i.push(c.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());_u(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return _r(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];_u(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){_o(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new or(ha(this.value))}}function OE(t){const e=[];return _o(t.fields,(n,r)=>{const i=new Tn([n]);if(_u(r)){const o=OE(r.mapValue).fields;if(o.length===0)e.push(i);else for(const l of o)e.push(i.child(l))}else e.push(i)}),new md(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,r,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new tn(e,0,Me.min(),Me.min(),or.empty(),0)}static newFoundDocument(e,n,r){return new tn(e,1,n,Me.min(),r,0)}static newNoDocument(e,n){return new tn(e,2,n,Me.min(),or.empty(),0)}static newUnknownDocument(e,n){return new tn(e,3,n,Me.min(),or.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=or.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=or.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tn(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function JU(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Me.fromTimestamp(r===1e9?new sn(n+1,0):new sn(n,r));return new so(i,fe.empty(),e)}function QU(t){return new so(t.readTime,t.key,-1)}class so{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new so(Me.min(),fe.empty(),-1)}static max(){return new so(Me.max(),fe.empty(),-1)}}function ZU(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:et(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eB{constructor(e,n=null,r=[],i=[],o=null,l=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=c,this.P=null}}function V_(t,e=null,n=[],r=[],i=null,o=null,l=null){return new eB(t,e,n,r,i,o,l)}function Kp(t){const e=ke(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+js(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),wo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>js(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>js(r)).join(",")),e.P=n}return e.P}function tB(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${js(r.value)}`;var r}).join(", ")}]`),wo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>js(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>js(n)).join(",")),`Target(${e})`}function jp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!uB(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!_r(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!W_(t.startAt,e.startAt)&&W_(t.endAt,e.endAt)}function _d(t){return fe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class gn extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new nB(e,n,r):n==="array-contains"?new sB(e,r):n==="in"?new oB(e,r):n==="not-in"?new aB(e,r):n==="array-contains-any"?new lB(e,r):new gn(e,n,r)}static V(e,n,r){return n==="in"?new rB(e,r):new iB(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(io(n,this.value)):n!==null&&as(this.value)===as(n)&&this.v(io(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class nB extends gn{constructor(e,n,r){super(e,n,r),this.key=fe.fromName(r.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.v(n)}}class rB extends gn{constructor(e,n){super(e,"in",n),this.keys=NE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class iB extends gn{constructor(e,n){super(e,"not-in",n),this.keys=NE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function NE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>fe.fromName(r.referenceValue))}class sB extends gn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zp(n)&&ka(n.arrayValue,this.value)}}class oB extends gn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ka(this.value.arrayValue,n)}}class aB extends gn{constructor(e,n){super(e,"not-in",n)}matches(e){if(ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ka(this.value.arrayValue,n)}}class lB extends gn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ka(this.value.arrayValue,r))}}class Ju{constructor(e,n){this.position=e,this.inclusive=n}}class fa{constructor(e,n="asc"){this.field=e,this.dir=n}}function uB(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function H_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],l=t.position[i];if(o.field.isKeyField()?r=fe.comparator(fe.fromName(l.referenceValue),n.key):r=io(l,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function W_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_r(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n=null,r=[],i=[],o=null,l="F",c=null,h=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=c,this.endAt=h,this.D=null,this.C=null,this.startAt,this.endAt}}function cB(t,e,n,r,i,o,l,c){return new tl(t,e,n,r,i,o,l,c)}function Gp(t){return new tl(t)}function wu(t){return!wo(t.limit)&&t.limitType==="F"}function Qu(t){return!wo(t.limit)&&t.limitType==="L"}function PE(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ME(t){for(const e of t.filters)if(e.S())return e.field;return null}function FE(t){return t.collectionGroup!==null}function Da(t){const e=ke(t);if(e.D===null){e.D=[];const n=ME(e),r=PE(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new fa(n)),e.D.push(new fa(Tn.keyField(),"asc"));else{let i=!1;for(const o of e.explicitOrderBy)e.D.push(o),o.field.isKeyField()&&(i=!0);if(!i){const o=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new fa(Tn.keyField(),o))}}}return e.D}function ls(t){const e=ke(t);if(!e.C)if(e.limitType==="F")e.C=V_(e.path,e.collectionGroup,Da(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const o of Da(e)){const l=o.dir==="desc"?"asc":"desc";n.push(new fa(o.field,l))}const r=e.endAt?new Ju(e.endAt.position,!e.endAt.inclusive):null,i=e.startAt?new Ju(e.startAt.position,!e.startAt.inclusive):null;e.C=V_(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.C}function hB(t,e,n){return new tl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nc(t,e){return jp(ls(t),ls(e))&&t.limitType===e.limitType}function UE(t){return`${Kp(ls(t))}|lt:${t.limitType}`}function wd(t){return`Query(target=${tB(ls(t))}; limitType=${t.limitType})`}function Yp(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):fe.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,o,l){const c=H_(i,o,l);return i.inclusive?c<=0:c<0}(n.startAt,Da(n),r)||n.endAt&&!function(i,o,l){const c=H_(i,o,l);return i.inclusive?c>=0:c>0}(n.endAt,Da(n),r))}(t,e)}function fB(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function BE(t){return(e,n)=>{let r=!1;for(const i of Da(t)){const o=dB(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function dB(t,e,n){const r=t.field.isKeyField()?fe.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?io(c,h):Ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xu(e)?"-0":e}}function VE(t){return{integerValue:""+t}}function pB(t,e){return YU(e)?VE(e):$E(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this._=void 0}}function gB(t,e,n){return t instanceof Zu?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof La?WE(t,e):t instanceof Oa?qE(t,e):function(r,i){const o=HE(r,i),l=q_(o)+q_(r.k);return vd(o)&&vd(r.k)?VE(l):$E(r.M,l)}(t,e)}function mB(t,e,n){return t instanceof La?WE(t,e):t instanceof Oa?qE(t,e):n}function HE(t,e){return t instanceof ec?vd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Zu extends Pc{}class La extends Pc{constructor(e){super(),this.elements=e}}function WE(t,e){const n=zE(e);for(const r of t.elements)n.some(i=>_r(i,r))||n.push(r);return{arrayValue:{values:n}}}class Oa extends Pc{constructor(e){super(),this.elements=e}}function qE(t,e){let n=zE(e);for(const r of t.elements)n=n.filter(i=>!_r(i,r));return{arrayValue:{values:n}}}class ec extends Pc{constructor(e,n){super(),this.M=e,this.k=n}}function q_(t){return At(t.integerValue||t.doubleValue)}function zE(t){return zp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function yB(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof La&&r instanceof La||n instanceof Oa&&r instanceof Oa?to(n.elements,r.elements,_r):n instanceof ec&&r instanceof ec?_r(n.k,r.k):n instanceof Zu&&r instanceof Zu}(t.transform,e.transform)}class vB{constructor(e,n){this.version=e,this.transformResults=n}}class gi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new gi}static exists(e){return new gi(void 0,e)}static updateTime(e){return new gi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Mc{}function _B(t,e,n){t instanceof Fc?function(r,i,o){const l=r.value.clone(),c=j_(r.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof nl?function(r,i,o){if(!bu(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=j_(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(KE(r)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bd(t,e,n){t instanceof Fc?function(r,i,o){if(!bu(r.precondition,i))return;const l=r.value.clone(),c=G_(r.fieldTransforms,o,i);l.setAll(c),i.convertToFoundDocument(K_(i),l).setHasLocalMutations()}(t,e,n):t instanceof nl?function(r,i,o){if(!bu(r.precondition,i))return;const l=G_(r.fieldTransforms,o,i),c=i.data;c.setAll(KE(r)),c.setAll(l),i.convertToFoundDocument(K_(i),c).setHasLocalMutations()}(t,e,n):function(r,i){bu(r.precondition,i)&&i.convertToNoDocument(Me.min())}(t,e)}function wB(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=HE(r.transform,i||null);o!=null&&(n==null&&(n=or.empty()),n.set(r.field,o))}return n||null}function z_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&to(n,r,(i,o)=>yB(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function K_(t){return t.isFoundDocument()?t.version:Me.min()}class Fc extends Mc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class nl extends Mc{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}}function KE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function j_(t,e,n){const r=new Map;ht(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],l=o.transform,c=e.data.field(o.field);r.set(o.field,mB(l,c,n[i]))}return r}function G_(t,e,n){const r=new Map;for(const i of t){const o=i.transform,l=n.data.field(i.field);r.set(i.field,gB(o,l,e))}return r}class jE extends Mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class bB extends Mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EB{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct,He;function IB(t){switch(t){default:return Ae();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function GE(t){if(t===void 0)return _i("GRPC error has no .code"),U.UNKNOWN;switch(t){case Ct.OK:return U.OK;case Ct.CANCELLED:return U.CANCELLED;case Ct.UNKNOWN:return U.UNKNOWN;case Ct.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Ct.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Ct.INTERNAL:return U.INTERNAL;case Ct.UNAVAILABLE:return U.UNAVAILABLE;case Ct.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Ct.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Ct.NOT_FOUND:return U.NOT_FOUND;case Ct.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Ct.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Ct.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Ct.ABORTED:return U.ABORTED;case Ct.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Ct.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Ct.DATA_LOSS:return U.DATA_LOSS;default:return Ae()}}(He=Ct||(Ct={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_o(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return kE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n){this.comparator=e,this.root=n||qt.EMPTY}insert(e,n){return new $t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qt.BLACK,null,null))}remove(e){return new $t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hu(this.root,e,this.comparator,!1)}getReverseIterator(){return new hu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hu(this.root,e,this.comparator,!0)}}class hu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r!=null?r:qt.RED,this.left=i!=null?i:qt.EMPTY,this.right=o!=null?o:qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new qt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ae();const e=this.left.check();if(e!==this.right.check())throw Ae();return e+(this.isRed()?0:1)}}qt.EMPTY=null,qt.RED=!0,qt.BLACK=!1;qt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae()}get value(){throw Ae()}get color(){throw Ae()}get left(){throw Ae()}get right(){throw Ae()}copy(t,e,n,r,i){return this}insert(t,e,n){return new qt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.comparator=e,this.data=new $t(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Y_(this.data.getIterator())}getIteratorFrom(e){return new Y_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof jt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new jt(this.comparator);return n.data=e,n}}class Y_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TB=new $t(fe.comparator);function us(){return TB}const SB=new $t(fe.comparator);function Ed(){return SB}function kf(){return new bo(t=>t.toString(),(t,e)=>t.isEqual(e))}const CB=new $t(fe.comparator),AB=new jt(fe.comparator);function pt(...t){let e=AB;for(const n of t)e=e.add(n);return e}const xB=new jt(et);function YE(){return xB}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,rl.createSynthesizedTargetChangeForCurrentChange(e,n)),new Uc(Me.min(),r,YE(),us(),pt())}}class rl{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n){return new rl(Yt.EMPTY_BYTE_STRING,n,pt(),pt(),pt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,r,i){this.O=e,this.removedTargetIds=n,this.key=r,this.F=i}}class XE{constructor(e,n){this.targetId=e,this.$=n}}class JE{constructor(e,n,r=Yt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class X_{constructor(){this.B=0,this.L=Q_(),this.U=Yt.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=pt(),n=pt(),r=pt();return this.L.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Ae()}}),new rl(this.U,this.q,e,n,r)}J(){this.K=!1,this.L=Q_()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class RB{constructor(e){this.nt=e,this.st=new Map,this.it=us(),this.rt=J_(),this.ot=new jt(et)}ut(e){for(const n of e.O)e.F&&e.F.isFoundDocument()?this.at(n,e.F):this.ct(n,e.key,e.F);for(const n of e.removedTargetIds)this.ct(n,e.key,e.F)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:Ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,i)=>{this.ft(i)&&n(i)})}_t(e){const n=e.targetId,r=e.$.count,i=this.wt(n);if(i){const o=i.target;if(_d(o))if(r===0){const l=new fe(o.path);this.ct(n,l,tn.newNoDocument(l,Me.min()))}else ht(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((o,l)=>{const c=this.wt(l);if(c){if(o.current&&_d(c.target)){const h=new fe(c.target.path);this.it.get(h)!==null||this.It(l,h)||this.ct(l,h,tn.newNoDocument(h,e))}o.j&&(n.set(l,o.H()),o.J())}});let r=pt();this.rt.forEach((o,l)=>{let c=!0;l.forEachWhile(h=>{const d=this.wt(h);return!d||d.purpose===2||(c=!1,!1)}),c&&(r=r.add(o))}),this.it.forEach((o,l)=>l.setReadTime(e));const i=new Uc(e,n,this.ot,this.it,r);return this.it=us(),this.rt=J_(),this.ot=new jt(et),i}at(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const i=this.lt(e);this.It(e,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new X_,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new jt(et),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||he("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new X_),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function J_(){return new $t(fe.comparator)}function Q_(){return new $t(fe.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kB=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),DB=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class LB{constructor(e,n){this.databaseId=e,this.N=n}}function tc(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function QE(t,e){return t.N?e.toBase64():e.toUint8Array()}function OB(t,e){return tc(t,e.toTimestamp())}function Ur(t){return ht(!!t),Me.fromTimestamp(function(e){const n=wi(e);return new sn(n.seconds,n.nanos)}(t))}function Xp(t,e){return function(n){return new dt(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function ZE(t){const e=dt.fromString(t);return ht(nI(e)),e}function Id(t,e){return Xp(t.databaseId,e.path)}function Df(t,e){const n=ZE(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new fe(eI(n))}function Td(t,e){return Xp(t.databaseId,e)}function NB(t){const e=ZE(t);return e.length===4?dt.emptyPath():eI(e)}function Sd(t){return new dt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function eI(t){return ht(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Z_(t,e,n){return{name:Id(t,e),fields:n.value.mapValue.fields}}function PB(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(h,d){return h.N?(ht(d===void 0||typeof d=="string"),Yt.fromBase64String(d||"")):(ht(d===void 0||d instanceof Uint8Array),Yt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),l=e.targetChange.cause,c=l&&function(h){const d=h.code===void 0?U.UNKNOWN:GE(h.code);return new ne(d,h.message||"")}(l);n=new JE(r,i,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Df(t,r.document.name),o=Ur(r.document.updateTime),l=new or({mapValue:{fields:r.document.fields}}),c=tn.newFoundDocument(i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Eu(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Df(t,r.document),o=r.readTime?Ur(r.readTime):Me.min(),l=tn.newNoDocument(i,o),c=r.removedTargetIds||[];n=new Eu([],c,l.key,l)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Df(t,r.document),o=r.removedTargetIds||[];n=new Eu([],o,i,null)}else{if(!("filter"in e))return Ae();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,o=new EB(i),l=r.targetId;n=new XE(l,o)}}return n}function MB(t,e){let n;if(e instanceof Fc)n={update:Z_(t,e.key,e.value)};else if(e instanceof jE)n={delete:Id(t,e.key)};else if(e instanceof nl)n={update:Z_(t,e.key,e.data),updateMask:KB(e.fieldMask)};else{if(!(e instanceof bB))return Ae();n={verify:Id(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Zu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof La)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Oa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ec)return{fieldPath:o.field.canonicalString(),increment:l.k};throw Ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:OB(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Ae()}(t,e.precondition)),n}function FB(t,e){return t&&t.length>0?(ht(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?Ur(r.updateTime):Ur(i);return o.isEqual(Me.min())&&(o=Ur(i)),new vB(o,r.transformResults||[])}(n,e))):[]}function UB(t,e){return{documents:[Td(t,e.path)]}}function BB(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Td(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Td(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(h){if(h.length===0)return;const d=h.map(p=>function(m){if(m.op==="=="){if($_(m.value))return{unaryFilter:{field:Ns(m.field),op:"IS_NAN"}};if(B_(m.value))return{unaryFilter:{field:Ns(m.field),op:"IS_NULL"}}}else if(m.op==="!="){if($_(m.value))return{unaryFilter:{field:Ns(m.field),op:"IS_NOT_NAN"}};if(B_(m.value))return{unaryFilter:{field:Ns(m.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ns(m.field),op:WB(m.op),value:m.value}}}(p));return d.length===1?d[0]:{compositeFilter:{op:"AND",filters:d}}}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(p){return{field:Ns(p.field),direction:HB(p.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=function(h,d){return h.N||wo(d)?d:{value:d}}(t,e.limit);var c;return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt={before:(c=e.startAt).inclusive,values:c.position}),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),n}function $B(t){let e=NB(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ht(r===1);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];n.where&&(o=tI(n.where));let l=[];n.orderBy&&(l=n.orderBy.map(p=>function(m){return new fa(Bs(m.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(p)));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,wo(m)?null:m}(n.limit));let h=null;n.startAt&&(h=function(p){const m=!!p.before,_=p.values||[];return new Ju(_,m)}(n.startAt));let d=null;return n.endAt&&(d=function(p){const m=!p.before,_=p.values||[];return new Ju(_,m)}(n.endAt)),cB(e,i,l,o,c,"F",h,d)}function VB(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ae()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function tI(t){return t?t.unaryFilter!==void 0?[zB(t)]:t.fieldFilter!==void 0?[qB(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>tI(e)).reduce((e,n)=>e.concat(n)):Ae():[]}function HB(t){return kB[t]}function WB(t){return DB[t]}function Ns(t){return{fieldPath:t.canonicalString()}}function Bs(t){return Tn.fromServerFormat(t.fieldPath)}function qB(t){return gn.create(Bs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ae()}}(t.fieldFilter.op),t.fieldFilter.value)}function zB(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Bs(t.unaryFilter.field);return gn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Bs(t.unaryFilter.field);return gn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Bs(t.unaryFilter.field);return gn.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Bs(t.unaryFilter.field);return gn.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ae()}}function KB(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function nI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jB="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GB{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new K((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):K.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):K.reject(n)}static resolve(e){return new K((n,r)=>{n(e)})}static reject(e){return new K((n,r)=>{r(e)})}static waitFor(e){return new K((n,r)=>{let i=0,o=0,l=!1;e.forEach(c=>{++i,c.next(()=>{++o,l&&o===i&&n()},h=>r(h))}),l=!0,o===i&&n()})}static or(e){let n=K.resolve(!1);for(const r of e)n=n.next(i=>i?K.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}}function il(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YB{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&_B(o,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&bd(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&bd(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(Me.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),pt())}isEqual(e){return this.batchId===e.batchId&&to(this.mutations,e.mutations,(n,r)=>z_(n,r))&&to(this.baseMutations,e.baseMutations,(n,r)=>z_(n,r))}}class Jp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ht(e.mutations.length===r.length);let i=CB;const o=e.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new Jp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XB{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n,r,i,o=Me.min(),l=Me.min(),c=Yt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=c}withSequenceNumber(e){return new Xi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Xi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JB{constructor(e){this.Jt=e}}function QB(t){const e=$B({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?hB(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZB{constructor(){this.qe=new e$}addToCollectionParentIndex(e,n){return this.qe.add(n),K.resolve()}getCollectionParents(e,n){return K.resolve(this.qe.getEntries(n))}addFieldIndex(e,n){return K.resolve()}deleteFieldIndex(e,n){return K.resolve()}getDocumentsMatchingTarget(e,n){return K.resolve(null)}getFieldIndex(e,n){return K.resolve(null)}getFieldIndexes(e,n){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}updateCollectionGroup(e,n,r){return K.resolve()}updateIndexEntries(e,n){return K.resolve()}}class e${constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new jt(dt.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new jt(dt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.mn=e}next(){return this.mn+=2,this.mn}static gn(){return new oo(0)}static yn(){return new oo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==jB)throw t;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t${constructor(){this.changes=new bo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?K.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n${constructor(e,n,r){this.ds=e,this.Bs=n,this.indexManager=r}Ls(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Us(e,n,r))}Us(e,n,r){return this.ds.getEntry(e,n).next(i=>{for(const o of r)o.applyToLocalView(i);return i})}qs(e,n){e.forEach((r,i)=>{for(const o of n)o.applyToLocalView(i)})}Ks(e,n){return this.ds.getEntries(e,n).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Qs(e,n,r){return function(i){return fe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.js(e,n.path):FE(n)?this.Ws(e,n,r):this.zs(e,n,r)}js(e,n){return this.Ls(e,new fe(n)).next(r=>{let i=Ed();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Ws(e,n,r){const i=n.collectionGroup;let o=Ed();return this.indexManager.getCollectionParents(e,i).next(l=>K.forEach(l,c=>{const h=function(d,p){return new tl(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.zs(e,h,r).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}zs(e,n,r){let i;return this.ds.getAllFromCollection(e,n.path,r).next(o=>(i=o,this.Bs.getAllMutationBatchesAffectingQuery(e,n))).next(o=>{for(const l of o)for(const c of l.mutations){const h=c.key;let d=i.get(h);d==null&&(d=tn.newInvalidDocument(h),i=i.insert(h,d)),bd(c,d,l.localWriteTime),d.isFoundDocument()||(i=i.remove(h))}}).next(()=>(i.forEach((o,l)=>{Yp(n,l)||(i=i.remove(o))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Hs=r,this.Js=i}static Ys(e,n){let r=pt(),i=pt();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Qp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r${Xs(e){this.Zs=e}Qs(e,n,r,i){return function(o){return o.filters.length===0&&o.limit===null&&o.startAt==null&&o.endAt==null&&(o.explicitOrderBy.length===0||o.explicitOrderBy.length===1&&o.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(Me.min())?this.ti(e,n):this.Zs.Ks(e,i).next(o=>{const l=this.ei(n,o);return(wu(n)||Qu(n))&&this.ni(n.limitType,l,i,r)?this.ti(e,n):(N_()<=Xe.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),wd(n)),this.Zs.Qs(e,n,JU(r,-1)).next(c=>(l.forEach(h=>{c=c.insert(h.key,h)}),c)))})}ei(e,n){let r=new jt(BE(e));return n.forEach((i,o)=>{Yp(e,o)&&(r=r.add(o))}),r}ni(e,n,r,i){if(r.size!==n.size)return!0;const o=e==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ti(e,n){return N_()<=Xe.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",wd(n)),this.Zs.Qs(e,n,so.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i${constructor(e,n,r,i){this.persistence=e,this.si=n,this.M=i,this.ii=new $t(et),this.ri=new bo(o=>Kp(o),jp),this.oi=new Map,this.ui=e.getRemoteDocumentCache(),this.fs=e.getTargetCache(),this._s=e.getBundleCache(),this.ai(r)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Bs=this.persistence.getMutationQueue(e,this.indexManager),this.ci=new n$(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ii))}}function s$(t,e,n,r){return new i$(t,e,n,r)}async function rI(t,e){const n=ke(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.Bs.getAllMutationBatches(r).next(o=>(i=o,n.ai(e),n.Bs.getAllMutationBatches(r))).next(o=>{const l=[],c=[];let h=pt();for(const d of i){l.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){c.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return n.ci.Ks(r,h).next(d=>({hi:d,removedBatchIds:l,addedBatchIds:c}))})})}function o$(t,e){const n=ke(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.ui.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,m=p.keys();let _=K.resolve();return m.forEach(E=>{_=_.next(()=>d.getEntry(c,E)).next(C=>{const M=h.docVersions.get(E);ht(M!==null),C.version.compareTo(M)<0&&(p.applyToRemoteDocument(C,h),C.isValidDocument()&&(C.setReadTime(h.commitVersion),d.addEntry(C)))})}),_.next(()=>l.Bs.removeMutationBatch(c,p))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.Bs.performConsistencyCheck(r)).next(()=>n.ci.Ks(r,i))})}function iI(t){const e=ke(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.fs.getLastRemoteSnapshotVersion(n))}function a$(t,e){const n=ke(t),r=e.snapshotVersion;let i=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const l=n.ui.newChangeBuffer({trackRemovals:!0});i=n.ii;const c=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;c.push(n.fs.removeMatchingKeys(o,d.removedDocuments,p).next(()=>n.fs.addMatchingKeys(o,d.addedDocuments,p)));let _=m.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.has(p)?_=_.withResumeToken(Yt.EMPTY_BYTE_STRING,Me.min()).withLastLimboFreeSnapshotVersion(Me.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(p,_),function(E,C,M){return E.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(m,_,d)&&c.push(n.fs.updateTargetData(o,_))});let h=us();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(o,d))}),c.push(l$(o,l,e.documentUpdates).next(d=>{h=d})),!r.isEqual(Me.min())){const d=n.fs.getLastRemoteSnapshotVersion(o).next(p=>n.fs.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(d)}return K.waitFor(c).next(()=>l.apply(o)).next(()=>n.ci.Gs(o,h)).next(()=>h)}).then(o=>(n.ii=i,o))}function l$(t,e,n){let r=pt();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=us();return n.forEach((l,c)=>{const h=i.get(l);c.isNoDocument()&&c.version.isEqual(Me.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):he("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),o})}function u$(t,e){const n=ke(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(r,e)))}function c$(t,e){const n=ke(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.fs.getTargetData(r,e).next(o=>o?(i=o,K.resolve(i)):n.fs.allocateTargetId(r).next(l=>(i=new Xi(e,l,0,r.currentSequenceNumber),n.fs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ii.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ii=n.ii.insert(r.targetId,r),n.ri.set(e,r.targetId)),r})}async function Cd(t,e,n){const r=ke(t),i=r.ii.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,l=>r.persistence.referenceDelegate.removeTarget(l,i))}catch(l){if(!il(l))throw l;he("LocalStore",`Failed to update sequence numbers for target ${e}: ${l}`)}r.ii=r.ii.remove(e),r.ri.delete(i.target)}function ew(t,e,n){const r=ke(t);let i=Me.min(),o=pt();return r.persistence.runTransaction("Execute query","readonly",l=>function(c,h,d){const p=ke(c),m=p.ri.get(d);return m!==void 0?K.resolve(p.ii.get(m)):p.fs.getTargetData(h,d)}(r,l,ls(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.fs.getMatchingKeysForTargetId(l,c.targetId).next(h=>{o=h})}).next(()=>r.si.Qs(l,e,n?i:Me.min(),n?o:pt())).next(c=>(h$(r,fB(e),c),{documents:c,li:o})))}function h$(t,e,n){let r=Me.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.oi.set(e,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f${constructor(e){this.M=e,this.wi=new Map,this.mi=new Map}getBundleMetadata(e,n){return K.resolve(this.wi.get(n))}saveBundleMetadata(e,n){var r;return this.wi.set(n.id,{id:(r=n).id,version:r.version,createTime:Ur(r.createTime)}),K.resolve()}getNamedQuery(e,n){return K.resolve(this.mi.get(n))}saveNamedQuery(e,n){return this.mi.set(n.name,function(r){return{name:r.name,query:QB(r.bundledQuery),readTime:Ur(r.readTime)}}(n)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d${constructor(){this.overlays=new $t(fe.comparator),this.gi=new Map}getOverlay(e,n){return K.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.Xt(e,n,o)}),K.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.gi.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.gi.delete(r)),K.resolve()}getOverlaysForCollection(e,n,r){const i=kf(),o=n.length+1,l=new fe(n.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return K.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new $t((d,p)=>d-p);const l=this.overlays.getIterator();for(;l.hasNext();){const d=l.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=kf(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=kf(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=i)););return K.resolve(c)}Xt(e,n,r){if(r===null)return;const i=this.overlays.get(r.key);if(i!==null){const l=this.gi.get(i.largestBatchId).delete(r.key);this.gi.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new XB(n,r));let o=this.gi.get(n);o===void 0&&(o=pt(),this.gi.set(n,o)),this.gi.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(){this.yi=new jt(Mt.pi),this.Ii=new jt(Mt.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(e,n){const r=new Mt(e,n);this.yi=this.yi.add(r),this.Ii=this.Ii.add(r)}Ei(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ai(new Mt(e,n))}Ri(e,n){e.forEach(r=>this.removeReference(r,n))}Pi(e){const n=new fe(new dt([])),r=new Mt(n,e),i=new Mt(n,e+1),o=[];return this.Ii.forEachInRange([r,i],l=>{this.Ai(l),o.push(l.key)}),o}bi(){this.yi.forEach(e=>this.Ai(e))}Ai(e){this.yi=this.yi.delete(e),this.Ii=this.Ii.delete(e)}Vi(e){const n=new fe(new dt([])),r=new Mt(n,e),i=new Mt(n,e+1);let o=pt();return this.Ii.forEachInRange([r,i],l=>{o=o.add(l.key)}),o}containsKey(e){const n=new Mt(e,0),r=this.yi.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Mt{constructor(e,n){this.key=e,this.vi=n}static pi(e,n){return fe.comparator(e.key,n.key)||et(e.vi,n.vi)}static Ti(e,n){return et(e.vi,n.vi)||fe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p${constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Bs=[],this.Si=1,this.Di=new jt(Mt.pi)}checkEmpty(e){return K.resolve(this.Bs.length===0)}addMutationBatch(e,n,r,i){const o=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const l=new YB(o,n,r,i);this.Bs.push(l);for(const c of i)this.Di=this.Di.add(new Mt(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return K.resolve(l)}lookupMutationBatch(e,n){return K.resolve(this.Ci(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.xi(r),o=i<0?0:i;return K.resolve(this.Bs.length>o?this.Bs[o]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.Bs.length===0?-1:this.Si-1)}getAllMutationBatches(e){return K.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Mt(n,0),i=new Mt(n,Number.POSITIVE_INFINITY),o=[];return this.Di.forEachInRange([r,i],l=>{const c=this.Ci(l.vi);o.push(c)}),K.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new jt(et);return n.forEach(i=>{const o=new Mt(i,0),l=new Mt(i,Number.POSITIVE_INFINITY);this.Di.forEachInRange([o,l],c=>{r=r.add(c.vi)})}),K.resolve(this.Ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;fe.isDocumentKey(o)||(o=o.child(""));const l=new Mt(new fe(o),0);let c=new jt(et);return this.Di.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(h.vi)),!0)},l),K.resolve(this.Ni(c))}Ni(e){const n=[];return e.forEach(r=>{const i=this.Ci(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ht(this.ki(n.batchId,"removed")===0),this.Bs.shift();let r=this.Di;return K.forEach(n.mutations,i=>{const o=new Mt(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Di=r})}_n(e){}containsKey(e,n){const r=new Mt(n,0),i=this.Di.firstAfterOrEqual(r);return K.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.Bs.length,K.resolve()}ki(e,n){return this.xi(e)}xi(e){return this.Bs.length===0?0:e-this.Bs[0].batchId}Ci(e){const n=this.xi(e);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g${constructor(e){this.Mi=e,this.docs=new $t(fe.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,l=this.Mi(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return K.resolve(r?r.document.mutableCopy():tn.newInvalidDocument(n))}getEntries(e,n){let r=us();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():tn.newInvalidDocument(i))}),K.resolve(r)}getAllFromCollection(e,n,r){let i=us();const o=new fe(n.child("")),l=this.docs.getIteratorFrom(o);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!n.isPrefixOf(c.path))break;c.path.length>n.length+1||ZU(QU(h),r)<=0||(i=i.insert(h.key,h.mutableCopy()))}return K.resolve(i)}getAllFromCollectionGroup(e,n,r,i){Ae()}Oi(e,n){return K.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new m$(this)}getSize(e){return K.resolve(this.size)}}class m$ extends t${constructor(e){super(),this.Kn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Kn.addEntry(e,i)):this.Kn.removeEntry(r)}),K.waitFor(n)}getFromCache(e,n){return this.Kn.getEntry(e,n)}getAllFromCache(e,n){return this.Kn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y${constructor(e){this.persistence=e,this.Fi=new bo(n=>Kp(n),jp),this.lastRemoteSnapshotVersion=Me.min(),this.highestTargetId=0,this.$i=0,this.Bi=new Zp,this.targetCount=0,this.Li=oo.gn()}forEachTarget(e,n){return this.Fi.forEach((r,i)=>n(i)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Li.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$i&&(this.$i=n),K.resolve()}Tn(e){this.Fi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Li=new oo(n),this.highestTargetId=n),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,n){return this.Tn(n),this.targetCount+=1,K.resolve()}updateTargetData(e,n){return this.Tn(n),K.resolve()}removeTargetData(e,n){return this.Fi.delete(n.target),this.Bi.Pi(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Fi.forEach((l,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Fi.delete(l),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),K.waitFor(o).next(()=>i)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fi.get(n)||null;return K.resolve(r)}addMatchingKeys(e,n,r){return this.Bi.Ei(n,r),K.resolve()}removeMatchingKeys(e,n,r){this.Bi.Ri(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(l=>{o.push(i.markPotentiallyOrphaned(e,l))}),K.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Bi.Pi(n),K.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Bi.Vi(n);return K.resolve(r)}containsKey(e,n){return K.resolve(this.Bi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v${constructor(e,n){this.Ui={},this.overlays={},this.es=new qp(0),this.ns=!1,this.ns=!0,this.referenceDelegate=e(this),this.fs=new y$(this),this.indexManager=new ZB,this.ds=function(r){return new g$(r)}(r=>this.referenceDelegate.qi(r)),this.M=new JB(n),this._s=new f$(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new d$,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ui[e.toKey()];return r||(r=new p$(n,this.referenceDelegate),this.Ui[e.toKey()]=r),r}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(e,n,r){he("MemoryPersistence","Starting transaction:",e);const i=new _$(this.es.next());return this.referenceDelegate.Ki(),r(i).next(o=>this.referenceDelegate.Gi(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Qi(e,n){return K.or(Object.values(this.Ui).map(r=>()=>r.containsKey(e,n)))}}class _$ extends GB{constructor(e){super(),this.currentSequenceNumber=e}}class eg{constructor(e){this.persistence=e,this.ji=new Zp,this.Wi=null}static zi(e){return new eg(e)}get Hi(){if(this.Wi)return this.Wi;throw Ae()}addReference(e,n,r){return this.ji.addReference(r,n),this.Hi.delete(r.toString()),K.resolve()}removeReference(e,n,r){return this.ji.removeReference(r,n),this.Hi.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,n){return this.Hi.add(n.toString()),K.resolve()}removeTarget(e,n){this.ji.Pi(n.targetId).forEach(i=>this.Hi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Hi.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}Ki(){this.Wi=new Set}Gi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Hi,r=>{const i=fe.fromPath(r);return this.Ji(e,i).next(o=>{o||n.removeEntry(i,Me.min())})}).next(()=>(this.Wi=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ji(e,n).next(r=>{r?this.Hi.delete(n.toString()):this.Hi.add(n.toString())})}qi(e){return 0}Ji(e,n){return K.or([()=>K.resolve(this.ji.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Qi(e,n)])}}class tw{constructor(){this.activeTargetIds=YE()}Zi(e){this.activeTargetIds=this.activeTargetIds.add(e)}tr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class w${constructor(){this.$r=new tw,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.$r.Zi(e),this.Br[e]||"not-current"}updateQueryState(e,n,r){this.Br[e]=n}removeLocalQueryTarget(e){this.$r.tr(e)}isLocalQueryTarget(e){return this.$r.activeTargetIds.has(e)}clearQueryState(e){delete this.Br[e]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(e){return this.$r.activeTargetIds.has(e)}start(){return this.$r=new tw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b${Lr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(e){this.Qr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){he("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Qr)e(0)}Gr(){he("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Qr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I${constructor(e){this.Wr=e.Wr,this.zr=e.zr}Hr(e){this.Jr=e}Yr(e){this.Xr=e}onMessage(e){this.Zr=e}close(){this.zr()}send(e){this.Wr(e)}eo(){this.Jr()}no(e){this.Xr(e)}so(e){this.Zr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T$ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.io=n+"://"+e.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(e,n,r,i,o){const l=this.uo(e,n);he("RestConnection","Sending: ",l,r);const c={};return this.ao(c,i,o),this.co(e,l,c,r).then(h=>(he("RestConnection","Received: ",h),h),h=>{throw P_("RestConnection",`${e} failed with error: `,h,"url: ",l,"request:",r),h})}ho(e,n,r,i,o){return this.oo(e,n,r,i,o)}ao(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+vo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}uo(e,n){const r=E$[e];return`${this.io}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((o,l)=>{const c=new FU;c.listenOnce(NU.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Rf.NO_ERROR:const d=c.getResponseJson();he("Connection","XHR received:",JSON.stringify(d)),o(d);break;case Rf.TIMEOUT:he("Connection",'RPC "'+e+'" timed out'),l(new ne(U.DEADLINE_EXCEEDED,"Request time out"));break;case Rf.HTTP_ERROR:const p=c.getStatus();if(he("Connection",'RPC "'+e+'" failed with status:',p,"response text:",c.getResponseText()),p>0){const m=c.getResponseJson().error;if(m&&m.status&&m.message){const _=function(E){const C=E.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(C)>=0?C:U.UNKNOWN}(m.status);l(new ne(_,m.message))}else l(new ne(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ne(U.UNAVAILABLE,"Connection failed."));break;default:Ae()}}finally{he("Connection",'RPC "'+e+'" completed.')}});const h=JSON.stringify(i);c.send(n,"POST",h,r,15)})}lo(e,n,r){const i=[this.io,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=LU(),l=OU(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new MU({})),this.ao(c.initMessageHeaders,n,r),q0()||K0()||DN()||j0()||LN()||z0()||(c.httpHeadersOverwriteParam="$httpHeaders");const h=i.join("");he("Connection","Creating WebChannel: "+h,c);const d=o.createWebChannel(h,c);let p=!1,m=!1;const _=new I$({Wr:C=>{m?he("Connection","Not sending because WebChannel is closed:",C):(p||(he("Connection","Opening WebChannel transport."),d.open(),p=!0),he("Connection","WebChannel sending:",C),d.send(C))},zr:()=>d.close()}),E=(C,M,P)=>{C.listen(M,V=>{try{P(V)}catch(X){setTimeout(()=>{throw X},0)}})};return E(d,cu.EventType.OPEN,()=>{m||he("Connection","WebChannel transport opened.")}),E(d,cu.EventType.CLOSE,()=>{m||(m=!0,he("Connection","WebChannel transport closed"),_.no())}),E(d,cu.EventType.ERROR,C=>{m||(m=!0,P_("Connection","WebChannel transport errored:",C),_.no(new ne(U.UNAVAILABLE,"The operation could not be completed")))}),E(d,cu.EventType.MESSAGE,C=>{var M;if(!m){const P=C.data[0];ht(!!P);const V=P,X=V.error||((M=V[0])===null||M===void 0?void 0:M.error);if(X){he("Connection","WebChannel received error:",X);const se=X.status;let Z=function(re){const z=Ct[re];if(z!==void 0)return GE(z)}(se),de=X.message;Z===void 0&&(Z=U.INTERNAL,de="Unknown error status: "+se+" with message "+X.message),m=!0,_.no(new ne(Z,de)),d.close()}else he("Connection","WebChannel received:",P),_.so(P)}}),E(l,PU.STAT_EVENT,C=>{C.stat===L_.PROXY?he("Connection","Detected buffering proxy"):C.stat===L_.NOPROXY&&he("Connection","Detected no buffering proxy")}),setTimeout(()=>{_.eo()},0),_}}function Lf(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t){return new LB(t,!0)}class sI{constructor(e,n,r=1e3,i=1.5,o=6e4){this.Yn=e,this.timerId=n,this.fo=r,this._o=i,this.wo=o,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(e){this.cancel();const n=Math.floor(this.mo+this.Eo()),r=Math.max(0,Date.now()-this.po),i=Math.max(0,n-r);i>0&&he("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.mo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,i,()=>(this.po=Date.now(),e())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){this.yo!==null&&(this.yo.skipDelay(),this.yo=null)}cancel(){this.yo!==null&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,n,r,i,o,l,c,h){this.Yn=e,this.Ro=r,this.Po=i,this.bo=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new sI(e,n)}Co(){return this.state===1||this.state===5||this.xo()}xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&this.vo===null&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(e){this.$o(),this.stream.send(e)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(e,n){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,e!==4?this.Do.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(_i(n.toString()),_i("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Lo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Yr(n)}Lo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.qo(r,i)},r=>{e(()=>{const i=new ne(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ko(i)})})}qo(e,n){const r=this.Uo(this.Vo);this.stream=this.Go(e,n),this.stream.Hr(()=>{r(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(i=>{r(()=>this.Ko(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(e){return he("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Yn.enqueueAndForget(()=>this.Vo===e?n():(he("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class S$ extends oI{constructor(e,n,r,i,o,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,l),this.M=o}Go(e,n){return this.bo.lo("Listen",e,n)}onMessage(e){this.Do.reset();const n=PB(this.M,e),r=function(i){if(!("targetChange"in i))return Me.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Me.min():o.readTime?Ur(o.readTime):Me.min()}(e);return this.listener.Qo(n,r)}jo(e){const n={};n.database=Sd(this.M),n.addTarget=function(i,o){let l;const c=o.target;return l=_d(c)?{documents:UB(i,c)}:{query:BB(i,c)},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0?l.resumeToken=QE(i,o.resumeToken):o.snapshotVersion.compareTo(Me.min())>0&&(l.readTime=tc(i,o.snapshotVersion.toTimestamp())),l}(this.M,e);const r=VB(this.M,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=Sd(this.M),n.removeTarget=e,this.Fo(n)}}class C$ extends oI{constructor(e,n,r,i,o,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,l),this.M=o,this.zo=!1}get Ho(){return this.zo}start(){this.zo=!1,this.lastStreamToken=void 0,super.start()}Lo(){this.zo&&this.Jo([])}Go(e,n){return this.bo.lo("Write",e,n)}onMessage(e){if(ht(!!e.streamToken),this.lastStreamToken=e.streamToken,this.zo){this.Do.reset();const n=FB(e.writeResults,e.commitTime),r=Ur(e.commitTime);return this.listener.Yo(r,n)}return ht(!e.writeResults||e.writeResults.length===0),this.zo=!0,this.listener.Xo()}Zo(){const e={};e.database=Sd(this.M),this.Fo(e)}Jo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>MB(this.M,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A$ extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.M=i,this.tu=!1}eu(){if(this.tu)throw new ne(U.FAILED_PRECONDITION,"The client has already been terminated.")}oo(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.oo(e,n,r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(U.UNKNOWN,i.toString())})}ho(e,n,r){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ho(e,n,r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(U.UNKNOWN,i.toString())})}terminate(){this.tu=!0}}class x${constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){this.nu===0&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ou("Offline")))}set(e){this.cu(),this.nu=0,e==="Online"&&(this.iu=!1),this.ou(e)}ou(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}uu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(_i(n),this.iu=!1):he("OnlineStateTracker",n)}cu(){this.su!==null&&(this.su.cancel(),this.su=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R${constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=o,this._u.Lr(l=>{r.enqueueAndForget(async()=>{ds(this)&&(he("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=ke(c);h.fu.add(4),await ol(h),h.wu.set("Unknown"),h.fu.delete(4),await $c(h)}(this))})}),this.wu=new x$(r,i)}}async function $c(t){if(ds(t))for(const e of t.du)await e(!0)}async function ol(t){for(const e of t.du)await e(!1)}function aI(t,e){const n=ke(t);n.lu.has(e.targetId)||(n.lu.set(e.targetId,e),rg(n)?ng(n):Eo(n).xo()&&tg(n,e))}function lI(t,e){const n=ke(t),r=Eo(n);n.lu.delete(e),r.xo()&&uI(n,e),n.lu.size===0&&(r.xo()?r.Mo():ds(n)&&n.wu.set("Unknown"))}function tg(t,e){t.mu.Z(e.targetId),Eo(t).jo(e)}function uI(t,e){t.mu.Z(e),Eo(t).Wo(e)}function ng(t){t.mu=new RB({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.lu.get(e)||null}),Eo(t).start(),t.wu.ru()}function rg(t){return ds(t)&&!Eo(t).Co()&&t.lu.size>0}function ds(t){return ke(t).fu.size===0}function cI(t){t.mu=void 0}async function k$(t){t.lu.forEach((e,n)=>{tg(t,e)})}async function D$(t,e){cI(t),rg(t)?(t.wu.au(e),ng(t)):t.wu.set("Unknown")}async function L$(t,e,n){if(t.wu.set("Online"),e instanceof JE&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const l of i.targetIds)r.lu.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.lu.delete(l),r.mu.removeTarget(l))}(t,e)}catch(r){he("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nc(t,r)}else if(e instanceof Eu?t.mu.ut(e):e instanceof XE?t.mu._t(e):t.mu.ht(e),!n.isEqual(Me.min()))try{const r=await iI(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.mu.yt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.lu.get(h);d&&i.lu.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach(c=>{const h=i.lu.get(c);if(!h)return;i.lu.set(c,h.withResumeToken(Yt.EMPTY_BYTE_STRING,h.snapshotVersion)),uI(i,c);const d=new Xi(h.target,c,1,h.sequenceNumber);tg(i,d)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){he("RemoteStore","Failed to raise snapshot:",r),await nc(t,r)}}async function nc(t,e,n){if(!il(e))throw e;t.fu.add(1),await ol(t),t.wu.set("Offline"),n||(n=()=>iI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{he("RemoteStore","Retrying IndexedDB access"),await n(),t.fu.delete(1),await $c(t)})}function hI(t,e){return e().catch(n=>nc(t,n,e))}async function Vc(t){const e=ke(t),n=bi(e);let r=e.hu.length>0?e.hu[e.hu.length-1].batchId:-1;for(;O$(e);)try{const i=await u$(e.localStore,r);if(i===null){e.hu.length===0&&n.Mo();break}r=i.batchId,N$(e,i)}catch(i){await nc(e,i)}fI(e)&&dI(e)}function O$(t){return ds(t)&&t.hu.length<10}function N$(t,e){t.hu.push(e);const n=bi(t);n.xo()&&n.Ho&&n.Jo(e.mutations)}function fI(t){return ds(t)&&!bi(t).Co()&&t.hu.length>0}function dI(t){bi(t).start()}async function P$(t){bi(t).Zo()}async function M$(t){const e=bi(t);for(const n of t.hu)e.Jo(n.mutations)}async function F$(t,e,n){const r=t.hu.shift(),i=Jp.from(r,e,n);await hI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vc(t)}async function U$(t,e){e&&bi(t).Ho&&await async function(n,r){if(i=r.code,IB(i)&&i!==U.ABORTED){const o=n.hu.shift();bi(n).ko(),await hI(n,()=>n.remoteSyncer.rejectFailedWrite(o.batchId,r)),await Vc(n)}var i}(t,e),fI(t)&&dI(t)}async function rw(t,e){const n=ke(t);n.asyncQueue.verifyOperationInProgress(),he("RemoteStore","RemoteStore received new credentials");const r=ds(n);n.fu.add(3),await ol(n),r&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.fu.delete(3),await $c(n)}async function B$(t,e){const n=ke(t);e?(n.fu.delete(2),await $c(n)):e||(n.fu.add(2),await ol(n),n.wu.set("Unknown"))}function Eo(t){return t.gu||(t.gu=function(e,n,r){const i=ke(e);return i.eu(),new S$(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,r)}(t.datastore,t.asyncQueue,{Hr:k$.bind(null,t),Yr:D$.bind(null,t),Qo:L$.bind(null,t)}),t.du.push(async e=>{e?(t.gu.ko(),rg(t)?ng(t):t.wu.set("Unknown")):(await t.gu.stop(),cI(t))})),t.gu}function bi(t){return t.yu||(t.yu=function(e,n,r){const i=ke(e);return i.eu(),new C$(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,r)}(t.datastore,t.asyncQueue,{Hr:P$.bind(null,t),Yr:U$.bind(null,t),Xo:M$.bind(null,t),Yo:F$.bind(null,t)}),t.du.push(async e=>{e?(t.yu.ko(),await Vc(t)):(await t.yu.stop(),t.hu.length>0&&(he("RemoteStore",`Stopping write stream with ${t.hu.length} pending writes`),t.hu=[]))})),t.yu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}static createAndSchedule(e,n,r,i,o){const l=Date.now()+r,c=new ig(e,n,l,i,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sg(t,e){if(_i("AsyncQueue",`${e}: ${t}`),il(t))return new ne(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||fe.comparator(n.key,r.key):(n,r)=>fe.comparator(n.key,r.key),this.keyedMap=Ed(),this.sortedSet=new $t(this.comparator)}static emptySet(e){return new Gs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(){this.pu=new $t(fe.comparator)}track(e){const n=e.doc.key,r=this.pu.get(n);r?e.type!==0&&r.type===3?this.pu=this.pu.insert(n,e):e.type===3&&r.type!==1?this.pu=this.pu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pu=this.pu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pu=this.pu.remove(n):e.type===1&&r.type===2?this.pu=this.pu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pu=this.pu.insert(n,{type:2,doc:e.doc}):Ae():this.pu=this.pu.insert(n,e)}Iu(){const e=[];return this.pu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ao{constructor(e,n,r,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=l,this.syncStateChanged=c,this.excludesMetadataChanges=h}static fromInitialDocuments(e,n,r,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ao(e,n,Gs.emptySet(n),o,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $${constructor(){this.Tu=void 0,this.listeners=[]}}class V${constructor(){this.queries=new bo(e=>UE(e),Nc),this.onlineState="Unknown",this.Eu=new Set}}async function pI(t,e){const n=ke(t),r=e.query;let i=!1,o=n.queries.get(r);if(o||(i=!0,o=new $$),i)try{o.Tu=await n.onListen(r)}catch(l){const c=sg(l,`Initialization of query '${wd(e.query)}' failed`);return void e.onError(c)}n.queries.set(r,o),o.listeners.push(e),e.Au(n.onlineState),o.Tu&&e.Ru(o.Tu)&&og(n)}async function gI(t,e){const n=ke(t),r=e.query;let i=!1;const o=n.queries.get(r);if(o){const l=o.listeners.indexOf(e);l>=0&&(o.listeners.splice(l,1),i=o.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function H$(t,e){const n=ke(t);let r=!1;for(const i of e){const o=i.query,l=n.queries.get(o);if(l){for(const c of l.listeners)c.Ru(i)&&(r=!0);l.Tu=i}}r&&og(n)}function W$(t,e,n){const r=ke(t),i=r.queries.get(e);if(i)for(const o of i.listeners)o.onError(n);r.queries.delete(e)}function og(t){t.Eu.forEach(e=>{e.next()})}class mI{constructor(e,n,r){this.query=e,this.Pu=n,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}Ru(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ao(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Pu.next(e),n=!0):this.Su(e,this.onlineState)&&(this.Du(e),n=!0),this.Vu=e,n}onError(e){this.Pu.error(e)}Au(e){this.onlineState=e;let n=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,e)&&(this.Du(this.Vu),n=!0),n}Su(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Cu||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Du(e){e=ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Pu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.key=e}}class vI{constructor(e){this.key=e}}class q${constructor(e,n){this.query=e,this.$u=n,this.Bu=null,this.current=!1,this.Lu=pt(),this.mutatedKeys=pt(),this.Uu=BE(e),this.qu=new Gs(this.Uu)}get Ku(){return this.$u}Gu(e,n){const r=n?n.Qu:new iw,i=n?n.qu:this.qu;let o=n?n.mutatedKeys:this.mutatedKeys,l=i,c=!1;const h=wu(this.query)&&i.size===this.query.limit?i.last():null,d=Qu(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,m)=>{const _=i.get(p),E=Yp(this.query,m)?m:null,C=!!_&&this.mutatedKeys.has(_.key),M=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let P=!1;_&&E?_.data.isEqual(E.data)?C!==M&&(r.track({type:3,doc:E}),P=!0):this.ju(_,E)||(r.track({type:2,doc:E}),P=!0,(h&&this.Uu(E,h)>0||d&&this.Uu(E,d)<0)&&(c=!0)):!_&&E?(r.track({type:0,doc:E}),P=!0):_&&!E&&(r.track({type:1,doc:_}),P=!0,(h||d)&&(c=!0)),P&&(E?(l=l.add(E),o=M?o.add(p):o.delete(p)):(l=l.delete(p),o=o.delete(p)))}),wu(this.query)||Qu(this.query))for(;l.size>this.query.limit;){const p=wu(this.query)?l.last():l.first();l=l.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{qu:l,Qu:r,ni:c,mutatedKeys:o}}ju(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.qu;this.qu=e.qu,this.mutatedKeys=e.mutatedKeys;const o=e.Qu.Iu();o.sort((d,p)=>function(m,_){const E=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae()}};return E(m)-E(_)}(d.type,p.type)||this.Uu(d.doc,p.doc)),this.Wu(r);const l=n?this.zu():[],c=this.Lu.size===0&&this.current?1:0,h=c!==this.Bu;return this.Bu=c,o.length!==0||h?{snapshot:new ao(this.query,e.qu,i,o,e.mutatedKeys,c===0,h,!1),Hu:l}:{Hu:l}}Au(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new iw,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(e){return!this.$u.has(e)&&!!this.qu.has(e)&&!this.qu.get(e).hasLocalMutations}Wu(e){e&&(e.addedDocuments.forEach(n=>this.$u=this.$u.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.$u=this.$u.delete(n)),this.current=e.current)}zu(){if(!this.current)return[];const e=this.Lu;this.Lu=pt(),this.qu.forEach(r=>{this.Ju(r.key)&&(this.Lu=this.Lu.add(r.key))});const n=[];return e.forEach(r=>{this.Lu.has(r)||n.push(new vI(r))}),this.Lu.forEach(r=>{e.has(r)||n.push(new yI(r))}),n}Yu(e){this.$u=e.li,this.Lu=pt();const n=this.Gu(e.documents);return this.applyChanges(n,!0)}Xu(){return ao.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,this.Bu===0)}}class z${constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class K${constructor(e){this.key=e,this.Zu=!1}}class j${constructor(e,n,r,i,o,l){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.ta={},this.ea=new bo(c=>UE(c),Nc),this.na=new Map,this.sa=new Set,this.ia=new $t(fe.comparator),this.ra=new Map,this.oa=new Zp,this.ua={},this.aa=new Map,this.ca=oo.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return this.ha===!0}}async function G$(t,e){const n=iV(t);let r,i;const o=n.ea.get(e);if(o)r=o.targetId,n.sharedClientState.addLocalQueryTarget(r),i=o.view.Xu();else{const l=await c$(n.localStore,ls(e));n.isPrimaryClient&&aI(n.remoteStore,l);const c=n.sharedClientState.addLocalQueryTarget(l.targetId);r=l.targetId,i=await Y$(n,e,r,c==="current")}return i}async function Y$(t,e,n,r){t.la=(p,m,_)=>async function(E,C,M,P){let V=C.view.Gu(M);V.ni&&(V=await ew(E.localStore,C.query,!1).then(({documents:Z})=>C.view.Gu(Z,V)));const X=P&&P.targetChanges.get(C.targetId),se=C.view.applyChanges(V,E.isPrimaryClient,X);return ow(E,C.targetId,se.Hu),se.snapshot}(t,p,m,_);const i=await ew(t.localStore,e,!0),o=new q$(e,i.li),l=o.Gu(i.documents),c=rl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),h=o.applyChanges(l,t.isPrimaryClient,c);ow(t,n,h.Hu);const d=new z$(e,n,o);return t.ea.set(e,d),t.na.has(n)?t.na.get(n).push(e):t.na.set(n,[e]),h.snapshot}async function X$(t,e){const n=ke(t),r=n.ea.get(e),i=n.na.get(r.targetId);if(i.length>1)return n.na.set(r.targetId,i.filter(o=>!Nc(o,e))),void n.ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Cd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),lI(n.remoteStore,r.targetId),Ad(n,r.targetId)}).catch(sl)):(Ad(n,r.targetId),await Cd(n.localStore,r.targetId,!0))}async function J$(t,e,n){const r=sV(t);try{const i=await function(o,l){const c=ke(o),h=sn.now(),d=l.reduce((m,_)=>m.add(_.key),pt());let p;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>c.ci.Ks(m,d).next(_=>{p=_;const E=[];for(const C of l){const M=wB(C,p.get(C.key));M!=null&&E.push(new nl(C.key,M,OE(M.value.mapValue),gi.exists(!0)))}return c.Bs.addMutationBatch(m,h,E,l)})).then(m=>(m.applyToLocalDocumentSet(p),{batchId:m.batchId,changes:p}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let h=o.ua[o.currentUser.toKey()];h||(h=new $t(et)),h=h.insert(l,c),o.ua[o.currentUser.toKey()]=h}(r,i.batchId,n),await al(r,i.changes),await Vc(r.remoteStore)}catch(i){const o=sg(i,"Failed to persist write");n.reject(o)}}async function _I(t,e){const n=ke(t);try{const r=await a$(n.localStore,e);e.targetChanges.forEach((i,o)=>{const l=n.ra.get(o);l&&(ht(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?l.Zu=!0:i.modifiedDocuments.size>0?ht(l.Zu):i.removedDocuments.size>0&&(ht(l.Zu),l.Zu=!1))}),await al(n,r,e)}catch(r){await sl(r)}}function sw(t,e,n){const r=ke(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ea.forEach((o,l)=>{const c=l.view.Au(e);c.snapshot&&i.push(c.snapshot)}),function(o,l){const c=ke(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.listeners)m.Au(l)&&(h=!0)}),h&&og(c)}(r.eventManager,e),i.length&&r.ta.Qo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Q$(t,e,n){const r=ke(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ra.get(e),o=i&&i.key;if(o){let l=new $t(fe.comparator);l=l.insert(o,tn.newNoDocument(o,Me.min()));const c=pt().add(o),h=new Uc(Me.min(),new Map,new jt(et),l,c);await _I(r,h),r.ia=r.ia.remove(o),r.ra.delete(e),ag(r)}else await Cd(r.localStore,e,!1).then(()=>Ad(r,e,n)).catch(sl)}async function Z$(t,e){const n=ke(t),r=e.batch.batchId;try{const i=await o$(n.localStore,e);bI(n,r,null),wI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await al(n,i)}catch(i){await sl(i)}}async function eV(t,e,n){const r=ke(t);try{const i=await function(o,l){const c=ke(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.Bs.lookupMutationBatch(h,l).next(p=>(ht(p!==null),d=p.keys(),c.Bs.removeMutationBatch(h,p))).next(()=>c.Bs.performConsistencyCheck(h)).next(()=>c.ci.Ks(h,d))})}(r.localStore,e);bI(r,e,n),wI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await al(r,i)}catch(i){await sl(i)}}function wI(t,e){(t.aa.get(e)||[]).forEach(n=>{n.resolve()}),t.aa.delete(e)}function bI(t,e,n){const r=ke(t);let i=r.ua[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.ua[r.currentUser.toKey()]=i}}function Ad(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.na.get(e))t.ea.delete(r),n&&t.ta.fa(r,n);t.na.delete(e),t.isPrimaryClient&&t.oa.Pi(e).forEach(r=>{t.oa.containsKey(r)||EI(t,r)})}function EI(t,e){t.sa.delete(e.path.canonicalString());const n=t.ia.get(e);n!==null&&(lI(t.remoteStore,n),t.ia=t.ia.remove(e),t.ra.delete(n),ag(t))}function ow(t,e,n){for(const r of n)r instanceof yI?(t.oa.addReference(r.key,e),tV(t,r)):r instanceof vI?(he("SyncEngine","Document no longer in limbo: "+r.key),t.oa.removeReference(r.key,e),t.oa.containsKey(r.key)||EI(t,r.key)):Ae()}function tV(t,e){const n=e.key,r=n.path.canonicalString();t.ia.get(n)||t.sa.has(r)||(he("SyncEngine","New document in limbo: "+n),t.sa.add(r),ag(t))}function ag(t){for(;t.sa.size>0&&t.ia.size<t.maxConcurrentLimboResolutions;){const e=t.sa.values().next().value;t.sa.delete(e);const n=new fe(dt.fromString(e)),r=t.ca.next();t.ra.set(r,new K$(n)),t.ia=t.ia.insert(n,r),aI(t.remoteStore,new Xi(ls(Gp(n.path)),r,2,qp.A))}}async function al(t,e,n){const r=ke(t),i=[],o=[],l=[];r.ea.isEmpty()||(r.ea.forEach((c,h)=>{l.push(r.la(h,e,n).then(d=>{if(d){r.isPrimaryClient&&r.sharedClientState.updateQueryState(h.targetId,d.fromCache?"not-current":"current"),i.push(d);const p=Qp.Ys(h.targetId,d);o.push(p)}}))}),await Promise.all(l),r.ta.Qo(i),await async function(c,h){const d=ke(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>K.forEach(h,m=>K.forEach(m.Hs,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>K.forEach(m.Js,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!il(p))throw p;he("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const _=d.ii.get(m),E=_.snapshotVersion,C=_.withLastLimboFreeSnapshotVersion(E);d.ii=d.ii.insert(m,C)}}}(r.localStore,o))}async function nV(t,e){const n=ke(t);if(!n.currentUser.isEqual(e)){he("SyncEngine","User change. New user:",e.toKey());const r=await rI(n.localStore,e);n.currentUser=e,function(i,o){i.aa.forEach(l=>{l.forEach(c=>{c.reject(new ne(U.CANCELLED,o))})}),i.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await al(n,r.hi)}}function rV(t,e){const n=ke(t),r=n.ra.get(e);if(r&&r.Zu)return pt().add(r.key);{let i=pt();const o=n.na.get(e);if(!o)return i;for(const l of o){const c=n.ea.get(l);i=i.unionWith(c.view.Ku)}return i}}function iV(t){const e=ke(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_I.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Q$.bind(null,e),e.ta.Qo=H$.bind(null,e.eventManager),e.ta.fa=W$.bind(null,e.eventManager),e}function sV(t){const e=ke(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Z$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eV.bind(null,e),e}class oV{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Bc(e.databaseInfo.databaseId),this.sharedClientState=this._a(e),this.persistence=this.wa(e),await this.persistence.start(),this.gcScheduler=this.ma(e),this.localStore=this.ga(e)}ma(e){return null}ga(e){return s$(this.persistence,new r$,e.initialUser,this.M)}wa(e){return new v$(eg.zi,this.M)}_a(e){return new w$}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aV{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nV.bind(null,this.syncEngine),await B$(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new V$}createDatastore(e){const n=Bc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new T$(i));var i;return function(o,l,c,h){return new A$(o,l,c,h)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,o=c=>sw(this.syncEngine,c,0),l=nw.vt()?new nw:new b$,new R$(n,r,i,o,l);var n,r,i,o,l}createSyncEngine(e,n){return function(r,i,o,l,c,h,d){const p=new j$(r,i,o,l,c,h);return d&&(p.ha=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ke(e);he("RemoteStore","RemoteStore shutting down."),n.fu.add(5),await ol(n),n._u.shutdown(),n.wu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.pa(this.observer.next,e)}error(e){this.observer.error?this.pa(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Ia(){this.muted=!0}pa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=In.UNAUTHENTICATED,this.clientId=RE.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{he("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(he("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ne(U.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=sg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uV(t,e){t.asyncQueue.verifyOperationInProgress(),he("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await rI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function cV(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hV(t);he("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>rw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,o)=>rw(e.remoteStore,o)),t.onlineComponents=e}async function hV(t){return t.offlineComponents||(he("FirestoreClient","Using default OfflineComponentProvider"),await uV(t,new oV)),t.offlineComponents}async function TI(t){return t.onlineComponents||(he("FirestoreClient","Using default OnlineComponentProvider"),await cV(t,new aV)),t.onlineComponents}function fV(t){return TI(t).then(e=>e.syncEngine)}async function SI(t){const e=await TI(t),n=e.eventManager;return n.onListen=G$.bind(null,e.syncEngine),n.onUnlisten=X$.bind(null,e.syncEngine),n}function dV(t,e,n={}){const r=new Fr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new II({next:m=>{o.enqueueAndForget(()=>gI(i,p));const _=m.docs.has(l);!_&&m.fromCache?h.reject(new ne(U.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?h.reject(new ne(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new mI(Gp(l.path),d,{includeMetadataChanges:!0,Cu:!0});return pI(i,p)}(await SI(t),t.asyncQueue,e,n,r)),r.promise}function pV(t,e,n={}){const r=new Fr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new II({next:m=>{o.enqueueAndForget(()=>gI(i,p)),m.fromCache&&c.source==="server"?h.reject(new ne(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new mI(l,d,{includeMetadataChanges:!0,Cu:!0});return pI(i,p)}(await SI(t),t.asyncQueue,e,n,r)),r.promise}const aw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t,e,n){if(!n)throw new ne(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gV(t,e,n,r){if(e===!0&&r===!0)throw new ne(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lw(t){if(!fe.isDocumentKey(t))throw new ne(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uw(t){if(fe.isDocumentKey(t))throw new ne(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ae()}function Ei(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hc(t);throw new ne(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,gV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cw({}),this._settingsFrozen=!1,e instanceof ro?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new ne(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ro(i.options.projectId)}(e))}get app(){if(!this._app)throw new ne(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ne(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cw(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new BU;switch(n.type){case"gapi":const r=n.client;return ht(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new HU(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new ne(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=aw.get(e);n&&(he("ComponentProvider","Removing Datastore"),aw.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new An(this.firestore,e,this._key)}}class ll{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ll(this.firestore,e,this._query)}}class mi extends ll{constructor(e,n,r){super(e,n,Gp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new An(this.firestore,null,new fe(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function mV(t,e,...n){if(t=Mn(t),CI("collection","path",e),t instanceof lg){const r=dt.fromString(e,...n);return uw(r),new mi(t,null,r)}{if(!(t instanceof An||t instanceof mi))throw new ne(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(dt.fromString(e,...n));return uw(r),new mi(t.firestore,null,r)}}function Iu(t,e,...n){if(t=Mn(t),arguments.length===1&&(e=RE.R()),CI("doc","path",e),t instanceof lg){const r=dt.fromString(e,...n);return lw(r),new An(t,null,new fe(r))}{if(!(t instanceof An||t instanceof mi))throw new ne(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(dt.fromString(e,...n));return lw(r),new An(t.firestore,t instanceof mi?t.converter:null,new fe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new sI(this,"async_queue_retry"),this.qa=()=>{const n=Lf();n&&he("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Do.Ao()};const e=Lf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ka(),this.Ga(e)}enterRestrictedMode(e){if(!this.Oa){this.Oa=!0,this.La=e||!1;const n=Lf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qa)}}enqueue(e){if(this.Ka(),this.Oa)return new Promise(()=>{});const n=new Fr;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ma.push(e),this.Qa()))}async Qa(){if(this.Ma.length!==0){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(e){if(!il(e))throw e;he("AsyncQueue","Operation failed with retryable error: "+e)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(e){const n=this.ka.then(()=>(this.Ba=!0,e().catch(r=>{this.$a=r,this.Ba=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw _i("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ba=!1,r))));return this.ka=n,n}enqueueAfterDelay(e,n,r){this.Ka(),this.Ua.indexOf(e)>-1&&(n=0);const i=ig.createAndSchedule(this,e,n,r,o=>this.ja(o));return this.Fa.push(i),i}Ka(){this.$a&&Ae()}verifyOperationInProgress(){}async Wa(){let e;do e=this.ka,await e;while(e!==this.ka)}za(e){for(const n of this.Fa)if(n.timerId===e)return!0;return!1}Ha(e){return this.Wa().then(()=>{this.Fa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Fa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Wa()})}Ja(e){this.Ua.push(e)}ja(e){const n=this.Fa.indexOf(e);this.Fa.splice(n,1)}}class Io extends lg{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new yV,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||AI(this),this._firestoreClient.terminate()}}function vV(t=J0()){return lp(t,"firestore").getImmediate()}function ug(t){return t._firestoreClient||AI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function AI(t){var e;const n=t._freezeSettings(),r=function(i,o,l,c){return new GU(i,o,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new lV(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lo(Yt.fromBase64String(e))}catch(n){throw new ne(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new lo(Yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return et(this._lat,e._lat)||et(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _V=/^__.*__$/;class wV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new nl(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fc(e,this.data,n,this.fieldTransforms)}}function RI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae()}}class fg{constructor(e,n,r,i,o,l){this.settings=e,this.databaseId=n,this.M=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Ya(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Xa(){return this.settings.Xa}Za(e){return new fg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}tc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Za({path:r,ec:!1});return i.nc(e),i}sc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Za({path:r,ec:!1});return i.Ya(),i}ic(e){return this.Za({path:void 0,ec:!0})}rc(e){return rc(e,this.settings.methodName,this.settings.oc||!1,this.path,this.settings.uc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ya(){if(this.path)for(let e=0;e<this.path.length;e++)this.nc(this.path.get(e))}nc(e){if(e.length===0)throw this.rc("Document fields must not be empty");if(RI(this.Xa)&&_V.test(e))throw this.rc('Document fields cannot begin and end with "__"')}}class bV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.M=r||Bc(e)}ac(e,n,r,i=!1){return new fg({Xa:e,methodName:n,uc:r,path:Tn.emptyPath(),ec:!1,oc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function dg(t){const e=t._freezeSettings(),n=Bc(t._databaseId);return new bV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function kI(t,e,n,r,i,o={}){const l=t.ac(o.merge||o.mergeFields?2:0,e,n,i);OI("Data must be an object, but it was:",l,r);const c=DI(r,l);let h,d;if(o.merge)h=new md(l.fieldMask),d=l.fieldTransforms;else if(o.mergeFields){const p=[];for(const m of o.mergeFields){const _=IV(e,m,n);if(!l.contains(_))throw new ne(U.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);SV(p,_)||p.push(_)}h=new md(p),d=l.fieldTransforms.filter(m=>h.covers(m.field))}else h=null,d=l.fieldTransforms;return new wV(new or(c),h,d)}function EV(t,e,n,r=!1){return pg(n,t.ac(r?4:3,e))}function pg(t,e){if(LI(t=Mn(t)))return OI("Unsupported field value:",e,t),DI(t,e);if(t instanceof xI)return function(n,r){if(!RI(r.Xa))throw r.rc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.rc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ec&&e.Xa!==4)throw e.rc("Nested arrays are not supported");return function(n,r){const i=[];let o=0;for(const l of n){let c=pg(l,r.ic(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Mn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return pB(r.M,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=sn.fromDate(n);return{timestampValue:tc(r.M,i)}}if(n instanceof sn){const i=new sn(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:tc(r.M,i)}}if(n instanceof hg)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof lo)return{bytesValue:QE(r.M,n._byteString)};if(n instanceof An){const i=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw r.rc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xp(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.rc(`Unsupported field value: ${Hc(n)}`)}(t,e)}function DI(t,e){const n={};return kE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_o(t,(r,i)=>{const o=pg(i,e.tc(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function LI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof sn||t instanceof hg||t instanceof lo||t instanceof An||t instanceof xI)}function OI(t,e,n){if(!LI(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Hc(n);throw r==="an object"?e.rc(t+" a custom object"):e.rc(t+" "+r)}}function IV(t,e,n){if((e=Mn(e))instanceof cg)return e._internalPath;if(typeof e=="string")return NI(t,e);throw rc("Field path arguments must be of type string or ",t,!1,void 0,n)}const TV=new RegExp("[~\\*/\\[\\]]");function NI(t,e,n){if(e.search(TV)>=0)throw rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cg(...e.split("."))._internalPath}catch{throw rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rc(t,e,n,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||l)&&(h+=" (found",o&&(h+=` in field ${r}`),l&&(h+=` in document ${i}`),h+=")"),new ne(U.INVALID_ARGUMENT,c+t+h)}function SV(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new An(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class CV extends PI{data(){return super.data()}}function gg(t,e){return typeof e=="string"?NI(t,e):e instanceof cg?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class MI extends PI{constructor(e,n,r,i,o,l){super(e,n,r,i,l),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Tu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Tu extends MI{data(e={}){return super.data(e)}}class AV{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Jo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Tu(this._firestore,this._userDataWriter,r.key,r,new Jo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(l=>({type:"added",doc:new Tu(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Jo(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:o++}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Tu(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Jo(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:xV(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RV(t){if(Qu(t)&&t.explicitOrderBy.length===0)throw new ne(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kV{}function DV(t,...e){for(const n of e)t=n._apply(t);return t}class LV extends kV{constructor(e,n,r){super(),this.lc=e,this.fc=n,this.dc=r,this.type="where"}_apply(e){const n=dg(e.firestore),r=function(i,o,l,c,h,d,p){let m;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ne(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){fw(p,d);const E=[];for(const C of p)E.push(hw(c,i,C));m={arrayValue:{values:E}}}else m=hw(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||fw(p,d),m=EV(l,o,p,d==="in"||d==="not-in");const _=gn.create(h,d,m);return function(E,C){if(C.S()){const P=ME(E);if(P!==null&&!P.isEqual(C.field))throw new ne(U.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${P.toString()}' and '${C.field.toString()}'`);const V=PE(E);V!==null&&OV(E,C.field,V)}const M=function(P,V){for(const X of P.filters)if(V.indexOf(X.op)>=0)return X.op;return null}(E,function(P){switch(P){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(C.op));if(M!==null)throw M===C.op?new ne(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${C.op.toString()}' filter.`):new ne(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${C.op.toString()}' filters with '${M.toString()}' filters.`)}(i,_),_}(e._query,"where",n,e.firestore._databaseId,this.lc,this.fc,this.dc);return new ll(e.firestore,e.converter,function(i,o){const l=i.filters.concat([o]);return new tl(i.path,i.collectionGroup,i.explicitOrderBy.slice(),l,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function Qo(t,e,n){const r=e,i=gg("where",t);return new LV(i,r,n)}function hw(t,e,n){if(typeof(n=Mn(n))=="string"){if(n==="")throw new ne(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!FE(e)&&n.indexOf("/")!==-1)throw new ne(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(dt.fromString(n));if(!fe.isDocumentKey(r))throw new ne(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return U_(t,new fe(r))}if(n instanceof An)return U_(t,n._key);throw new ne(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hc(n)}.`)}function fw(t,e){if(!Array.isArray(t)||t.length===0)throw new ne(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new ne(U.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function OV(t,e,n){if(!n.isEqual(e))throw new ne(U.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NV{convertValue(e,n="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return At(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(no(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Ae()}}convertObject(e,n){const r={};return _o(e.fields,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertGeoPoint(e){return new hg(At(e.latitude),At(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=LE(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ra(e));default:return null}}convertTimestamp(e){const n=wi(e);return new sn(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=dt.fromString(e);ht(nI(r));const i=new ro(r.get(1),r.get(3)),o=new fe(r.popFirst(5));return i.isEqual(n)||_i(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PV(t){t=Ei(t,An);const e=Ei(t.firestore,Io);return dV(ug(e),t._key).then(n=>BV(e,t,n))}class UI extends NV{constructor(e){super(),this.firestore=e}convertBytes(e){return new lo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new An(this.firestore,null,n)}}function dw(t){t=Ei(t,ll);const e=Ei(t.firestore,Io),n=ug(e),r=new UI(e);return RV(t._query),pV(n,t._query).then(i=>new AV(e,r,t,i))}function MV(t,e,n){t=Ei(t,An);const r=Ei(t.firestore,Io),i=FI(t.converter,e,n);return mg(r,[kI(dg(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,gi.none())])}function FV(t){return mg(Ei(t.firestore,Io),[new jE(t._key,gi.none())])}function UV(t,e){const n=Ei(t.firestore,Io),r=Iu(t),i=FI(t.converter,e);return mg(n,[kI(dg(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,gi.exists(!1))]).then(()=>r)}function mg(t,e){return function(n,r){const i=new Fr;return n.asyncQueue.enqueueAndForget(async()=>J$(await fV(n),r,i)),i.promise}(ug(t),e)}function BV(t,e,n){const r=n.docs.get(e._key),i=new UI(t);return new MI(t,i,e._key,r,new Jo(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){vo=n})(Ua),Zs(new es("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Io(i,new $U(n.getProvider("auth-internal")),new qU(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC")),pi(O_,"3.4.8",t),pi(O_,"3.4.8","esm2017")})();const $V={apiKey:"AIzaSyDJvRsJnou6HHln2jvo2tPHsK1h_Z6oAtw",authDomain:"info-board-f093e.firebaseapp.com",projectId:"info-board-f093e",storageBucket:"info-board-f093e.appspot.com",messagingSenderId:"20564543840",appId:"1:20564543840:web:16c010b6fc5e448ccbf605"},BI=xP($V),VV=vV(BI);var HV=F0(),$I={name:"Menuitem",inheritAttrs:!1,emits:["click"],props:{item:null,template:null,exact:null},methods:{onClick(t,e){this.$emit("click",{originalEvent:t,item:this.item,navigate:e})},linkClass(t,e){return["p-menuitem-link",{"p-disabled":this.disabled(t),"router-link-active":e&&e.isActive,"router-link-active-exact":this.exact&&e&&e.isExactActive}]},visible(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled(t){return typeof t.disabled=="function"?t.disabled():t.disabled},label(){return typeof this.item.label=="function"?this.item.label():this.item.label}},computed:{containerClass(){return["p-menuitem",this.item.class]}},directives:{ripple:ip}};const WV=["href","onClick"],qV={class:"p-menuitem-text"},zV=["href","target","tabindex"],KV={class:"p-menuitem-text"};function jV(t,e,n,r,i,o){const l=en("router-link"),c=Xd("ripple");return o.visible()?(ce(),Ce("li",{key:0,class:Rt(o.containerClass),role:"none",style:Ji(n.item.style)},[n.template?(ce(),Cn(dL(n.template),{key:1,item:n.item},null,8,["item"])):(ce(),Ce(bt,{key:0},[n.item.to&&!o.disabled(n.item)?(ce(),Cn(l,{key:0,to:n.item.to,custom:""},{default:xt(({navigate:h,href:d,isActive:p,isExactActive:m})=>[Qi((ce(),Ce("a",{href:d,onClick:_=>o.onClick(_,h),class:Rt(o.linkClass(n.item,{isActive:p,isExactActive:m})),role:"menuitem"},[tt("span",{class:Rt(["p-menuitem-icon",n.item.icon])},null,2),tt("span",qV,Sn(o.label()),1)],10,WV)),[[c]])]),_:1},8,["to"])):Qi((ce(),Ce("a",{key:1,href:n.item.url,class:Rt(o.linkClass(n.item)),onClick:e[0]||(e[0]=(...h)=>o.onClick&&o.onClick(...h)),target:n.item.target,role:"menuitem",tabindex:o.disabled(n.item)?null:"0"},[tt("span",{class:Rt(["p-menuitem-icon",n.item.icon])},null,2),tt("span",KV,Sn(o.label()),1)],10,zV)),[[c]])],64))],6)):yt("",!0)}$I.render=jV;var VI={name:"Menu",emits:["show","hide"],inheritAttrs:!1,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:String,default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},exact:{type:Boolean,default:!0}},data(){return{overlayVisible:!1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,beforeUnmount(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&qs.clear(this.container),this.container=null},methods:{itemClick(t){const e=t.item;this.disabled(e)||(e.command&&e.command(t),e.to&&t.navigate&&t.navigate(t.originalEvent),this.hide())},toggle(t){this.overlayVisible?this.hide():this.show(t)},show(t){this.overlayVisible=!0,this.target=t.currentTarget},hide(){this.overlayVisible=!1,this.target=null},onEnter(t){this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&qs.set("menu",t,this.baseZIndex+this.$primevue.config.zIndex.menu),this.$emit("show")},onLeave(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave(t){this.autoZIndex&&qs.clear(t)},alignOverlay(){ct.absolutePosition(this.container,this.target),this.container.style.minWidth=ct.getOuterWidth(this.target)+"px"},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=t=>{this.overlayVisible&&this.container&&!this.container.contains(t.target)&&!this.isTargetClicked(t)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new mN(this.target,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked(t){return this.target&&(this.target===t.target||this.target.contains(t.target))},visible(t){return typeof t.visible=="function"?t.visible():t.visible!==!1},disabled(t){return typeof t.disabled=="function"?t.disabled():t.disabled},label(t){return typeof t.label=="function"?t.label():t.label},containerRef(t){this.container=t},onOverlayClick(t){HV.emit("overlay-click",{originalEvent:t,target:this.target})}},computed:{containerClass(){return["p-menu p-component",{"p-menu-overlay":this.popup,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]}},components:{Menuitem:$I}};const GV={class:"p-menu-list p-reset",role:"menu"},YV={key:0,class:"p-submenu-header"};function XV(t,e,n,r,i,o){const l=en("Menuitem");return ce(),Cn(Gd,{to:n.appendTo,disabled:!n.popup},[Re(gc,{name:"p-connected-overlay",onEnter:o.onEnter,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave},{default:xt(()=>[!n.popup||i.overlayVisible?(ce(),Ce("div",Na({key:0,ref:o.containerRef,class:o.containerClass},t.$attrs,{onClick:e[0]||(e[0]=(...c)=>o.onOverlayClick&&o.onOverlayClick(...c))}),[tt("ul",GV,[(ce(!0),Ce(bt,null,Lu(n.model,(c,h)=>(ce(),Ce(bt,{key:o.label(c)+h.toString()},[c.items&&o.visible(c)&&!c.separator?(ce(),Ce(bt,{key:0},[c.items?(ce(),Ce("li",YV,[gr(t.$slots,"item",{item:c},()=>[vi(Sn(o.label(c)),1)])])):yt("",!0),(ce(!0),Ce(bt,null,Lu(c.items,(d,p)=>(ce(),Ce(bt,{key:d.label+h+p},[o.visible(d)&&!d.separator?(ce(),Cn(l,{key:0,item:d,onClick:o.itemClick,template:t.$slots.item,exact:n.exact},null,8,["item","onClick","template","exact"])):o.visible(d)&&d.separator?(ce(),Ce("li",{class:Rt(["p-menu-separator",d.class]),style:Ji(d.style),key:"separator"+h+p,role:"separator"},null,6)):yt("",!0)],64))),128))],64)):o.visible(c)&&c.separator?(ce(),Ce("li",{class:Rt(["p-menu-separator",c.class]),style:Ji(c.style),key:"separator"+h.toString(),role:"separator"},null,6)):(ce(),Cn(l,{key:o.label(c)+h.toString(),item:c,onClick:o.itemClick,template:t.$slots.item,exact:n.exact},null,8,["item","onClick","template","exact"]))],64))),128))])],16)):yt("",!0)]),_:3},8,["onEnter","onLeave","onAfterLeave"])],8,["to","disabled"])}function JV(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var QV=`
.p-menu-overlay {
    position: absolute;
    top: 0;
    left: 0;
}
.p-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-menu .p-menuitem-link {
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
.p-menu .p-menuitem-text {
    line-height: 1;
}
`;JV(QV);VI.render=XV;const xd=lO({id:"main",state:()=>({loginInfo:void 0,loginUserID:void 0})});class HI{}class ZV extends HI{constructor(n){super();jn(this,"email");jn(this,"password");jn(this,"photo_url");jn(this,"reg_date");jn(this,"user_name");Object.assign(this,n)}toJson(){return rf(this,[])}get authoredTitle(){return"Author: Vas"}get docObject(){return{email:this.email,password:this.password,photo_url:this.photo_url,reg_date:this.reg_date,user_name:this.user_name}}}class WI{constructor(e){jn(this,"collection");this.collection=mV(VV,e)}getCollection(){return this.collection}async getAll(){return console.log("AllDocs earned"),dw(this.collection)}async getByID(e){const n=Iu(this.collection,e),r=await PV(n);return console.log("1 Document earned:",r.data()),r.data()}async create(e){const n=await UV(this.collection,e.docObject);return console.log("Document written with ID: ",n.id),n}async update(e,n){await MV(Iu(this.collection,n),e.docObject),console.log("Document updated with ID: ",n)}async remove(e){FV(Iu(this.collection,e)),console.log("Document deleted with ID: ",e)}async search(...e){return dw(DV(this.collection,...e))}}class eH extends WI{constructor(){super("users")}}function qI(){const t=Pr([]);Pr({});const e=new eH;let n=[];function r(d){return d?e.search(Qo("email","==",d)):e.search()}function i(d){return r(d).then(p=>{p.forEach(m=>{n.push(m.id)}),t.value=p.docs.map(m=>new ZV(m.data()))})}async function o(){const d=await e.getAll();let p=[];return d.forEach(m=>{p.push(m)}),p}function l(d){return e.create(d)}function c(d,p){e.update(d,p)}function h(d){return e.getByID(d)}return{users:t,usersFirestore:e,usersID:n,search:i,addUser:l,setUser:c,getUser:h,getAllUsers:o}}var Wc=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n};const tH=Ii({data(){return{userName:"",isLogin:!1,searchText:"",items:[{label:"Profile",icon:"pi pi-user",to:"/profile"},{label:"Activities",icon:"pi pi-users",to:"/activities"},{label:"Sign out",icon:"pi pi-sign-out",command:()=>{this.signOut()}}],items1:[{label:"Profile",icon:"pi pi-user",to:"/profile"},{label:"Home page",icon:"pi pi-home",to:"/"},{label:"Sign out",icon:"pi pi-sign-out",command:()=>{this.signOut()}}]}},props:{isHomePage:Boolean},methods:{signOut(){const t=y_();wM(t).then(()=>{console.log("Sign-out successful"),this.isLogin=!0,window.location.reload()}).catch(e=>{})},toggle(t){this.$refs.menu.toggle(t)}},components:{Button:Pa,InputText:sp,Menu:VI},mounted(){const t=y_(BI);_M(t,e=>{if(e){e.uid;const n=qI();n.search(e.email).then(()=>{this.mainStore.loginUserID=n.usersID[0],this.userName=n.users.value[0].user_name,this.isLogin=!0}),this.mainStore.loginInfo=e}else this.isLogin=!1,this.mainStore.loginInfo=void 0})},computed:ks({},I0(xd))}),nH={class:"wrapper"},rH={class:"login"},iH=vi("Login"),sH={class:"profile"},oH={key:0,class:"menu"},aH={key:1,class:"menu"};function lH(t,e,n,r,i,o){const l=en("RouterLink"),c=en("Button"),h=en("Menu");return ce(),Ce("div",nH,[Qi(tt("div",rH,[Re(c,{class:"loginButton",label:"Login"},{default:xt(()=>[Re(l,{class:"router",to:"/login"},{default:xt(()=>[iH]),_:1})]),_:1})],512),[[Rv,!t.isLogin]]),Qi(tt("div",sH,[this.isHomePage?(ce(),Ce("div",oH,[Re(c,{type:"button",onClick:t.toggle},{default:xt(()=>[vi(Sn(t.userName),1)]),_:1},8,["onClick"]),Re(h,{ref:"menu",model:t.items,popup:!0},null,8,["model"])])):(ce(),Ce("div",aH,[Re(c,{type:"button",onClick:t.toggle},{default:xt(()=>[vi(Sn(t.userName),1)]),_:1},8,["onClick"]),Re(h,{ref:"menu",model:t.items1,popup:!0},null,8,["model"])]))],512),[[Rv,t.isLogin]])])}var uH=Wc(tH,[["render",lH]]);const cH=Ii({data(){return{count:1,posts:void 0}},props:{isHomePage:Boolean},components:{NavigationMenu:uH},methods:{timestampToDate(t){var e=new Date;return e.setTime(t),("0"+e.getDate()).slice(-2)+"."+("0"+(e.getMonth()+1)).slice(-2)+"."+e.getFullYear()}},mounted(){}}),hH={class:"wrapper"},fH=tt("nav",{class:"wrapper__navigation",id:"navigation_header"},null,-1),dH={class:"wrapper__login",id:"login_header"};function pH(t,e,n,r,i,o){const l=en("NavigationMenu");return ce(),Ce("header",hH,[fH,tt("div",dH,[Re(l,{isHomePage:this.isHomePage},null,8,["isHomePage"])])])}var gH=Wc(cH,[["render",pH]]),zI={name:"Card"};const mH={class:"p-card p-component"},yH={key:0,class:"p-card-header"},vH={class:"p-card-body"},_H={key:0,class:"p-card-title"},wH={key:1,class:"p-card-subtitle"},bH={class:"p-card-content"},EH={key:2,class:"p-card-footer"};function IH(t,e,n,r,i,o){return ce(),Ce("div",mH,[t.$slots.header?(ce(),Ce("div",yH,[gr(t.$slots,"header")])):yt("",!0),tt("div",vH,[t.$slots.title?(ce(),Ce("div",_H,[gr(t.$slots,"title")])):yt("",!0),t.$slots.subtitle?(ce(),Ce("div",wH,[gr(t.$slots,"subtitle")])):yt("",!0),tt("div",bH,[gr(t.$slots,"content")]),t.$slots.footer?(ce(),Ce("div",EH,[gr(t.$slots,"footer")])):yt("",!0)])])}function TH(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var SH=`
.p-card-header img {
    width: 100%;
}
`;TH(SH);zI.render=IH;class yg extends HI{constructor(n){super();jn(this,"deleted_at");jn(this,"description");jn(this,"title");jn(this,"reg_date");jn(this,"user_id");Object.assign(this,n)}toJson(){return rf(this,[])}get docObject(){return{deleted_at:this.deleted_at,description:this.description,title:this.title,reg_date:this.reg_date,user_id:this.user_id}}get authoredTitle(){return"Author: Vas"}}const CH=Ii({data(){return{count:1,posts:void 0}},emits:["remove","edit"],props:{post:yg,isHomePage:Boolean},components:{Card:zI,Button:Pa},methods:{test(){this.count},timestampToDate(t){var e=new Date;return e.setTime(t),("0"+e.getDate()).slice(-2)+"."+("0"+(e.getMonth()+1)).slice(-2)+"."+e.getFullYear()}},mounted(){}}),AH={class:"postWrapper"},xH={class:"postFooter"},RH={class:"postDate"},kH={key:0,class:"postButtons"};function DH(t,e,n,r,i,o){const l=en("Card"),c=en("Button");return ce(),Ce("div",AH,[Re(l,{class:"postCard"},{header:xt(()=>[]),title:xt(()=>[vi(Sn(t.post.title),1)]),content:xt(()=>[vi(Sn(t.post.description),1)]),footer:xt(()=>{var h;return[tt("div",xH,[tt("div",null,Sn((h=t.post)==null?void 0:h.user_id),1),tt("div",RH,Sn(t.timestampToDate(t.post.reg_date)),1)])]}),_:1}),this.isHomePage?yt("",!0):(ce(),Ce("div",kH,[Re(c,{class:"actionButton",onClick:e[0]||(e[0]=h=>t.$emit("remove",t.post)),icon:"pi pi-times",label:"Archive"}),Re(c,{class:"actionButton",onClick:e[1]||(e[1]=h=>t.$emit("edit",t.post)),icon:"pi pi-times",label:"Edit"})]))])}var LH=Wc(CH,[["render",DH]]),vg={name:"Dialog",inheritAttrs:!1,emits:["update:visible","show","hide","maximize","unmaximize","dragend"],props:{header:null,footer:null,visible:Boolean,modal:Boolean,contentStyle:null,contentClass:String,rtl:Boolean,maximizable:Boolean,dismissableMask:Boolean,closable:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"},position:{type:String,default:"center"},breakpoints:{type:Object,default:null},draggable:{type:Boolean,default:!0},keepInViewport:{type:Boolean,default:!0},minX:{type:Number,default:0},minY:{type:Number,default:0},appendTo:{type:String,default:"body"}},data(){return{containerVisible:this.visible,maximized:!1}},documentKeydownListener:null,container:null,mask:null,styleElement:null,dragging:null,documentDragListener:null,documentDragEndListener:null,lastPageX:null,lastPageY:null,updated(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount(){this.unbindDocumentState(),this.unbindGlobalListeners(),this.destroyStyle(),this.mask=null,this.container&&this.autoZIndex&&qs.clear(this.container),this.container=null},mounted(){this.breakpoints&&this.createStyle()},methods:{close(){this.$emit("update:visible",!1)},onBeforeEnter(t){this.autoZIndex&&qs.set("modal",t,this.baseZIndex+this.$primevue.config.zIndex.modal),t.setAttribute(this.attributeSelector,"")},onEnter(){this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.$emit("show"),this.focus(),this.enableDocumentSettings(),this.bindGlobalListeners()},onBeforeLeave(){this.modal&&ct.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(t){this.autoZIndex&&qs.clear(t),this.containerVisible=!1,this.unbindDocumentState(),this.unbindGlobalListeners()},onMaskClick(t){this.dismissableMask&&this.closable&&this.modal&&this.mask===t.target&&this.close()},focus(){let t=this.container.querySelector("[autofocus]");t&&t.focus()},maximize(t){this.maximized?(this.maximized=!1,this.$emit("unmaximize",t)):(this.maximized=!0,this.$emit("maximize",t)),this.modal||(this.maximized?ct.addClass(document.body,"p-overflow-hidden"):ct.removeClass(document.body,"p-overflow-hidden"))},enableDocumentSettings(){(this.modal||this.maximizable&&this.maximized)&&ct.addClass(document.body,"p-overflow-hidden")},unbindDocumentState(){(this.modal||this.maximizable&&this.maximized)&&ct.removeClass(document.body,"p-overflow-hidden")},onKeyDown(t){if(t.which===9){t.preventDefault();let e=ct.getFocusableElements(this.container);if(e&&e.length>0)if(!document.activeElement)e[0].focus();else{let n=e.indexOf(document.activeElement);t.shiftKey?n==-1||n===0?e[e.length-1].focus():e[n-1].focus():n==-1||n===e.length-1?e[0].focus():e[n+1].focus()}}else t.which===27&&this.closeOnEscape&&this.close()},bindDocumentKeyDownListener(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},getPositionClass(){const e=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return e?`p-dialog-${e}`:""},containerRef(t){this.container=t},maskRef(t){this.mask=t},createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let t="";for(let e in this.breakpoints)t+=`
                        @media screen and (max-width: ${e}) {
                            .p-dialog[${this.attributeSelector}] {
                                width: ${this.breakpoints[e]} !important;
                            }
                        }
                    `;this.styleElement.innerHTML=t}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},initDrag(t){ct.hasClass(t.target,"p-dialog-header-icon")||ct.hasClass(t.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",ct.addClass(document.body,"p-unselectable-text"))},bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.closeOnEscape&&this.closable&&this.bindDocumentKeyDownListener()},unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentKeyDownListener()},bindDocumentDragListener(){this.documentDragListener=t=>{if(this.dragging){let e=ct.getOuterWidth(this.container),n=ct.getOuterHeight(this.container),r=t.pageX-this.lastPageX,i=t.pageY-this.lastPageY,o=this.container.getBoundingClientRect(),l=o.left+r,c=o.top+i,h=ct.getViewport();this.container.style.position="fixed",this.keepInViewport?(l>=this.minX&&l+e<h.width&&(this.lastPageX=t.pageX,this.container.style.left=l+"px"),c>=this.minY&&c+n<h.height&&(this.lastPageY=t.pageY,this.container.style.top=c+"px")):(this.lastPageX=t.pageX,this.container.style.left=l+"px",this.lastPageY=t.pageY,this.container.style.top=c+"px")}},window.document.addEventListener("mousemove",this.documentDragListener)},unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)},bindDocumentDragEndListener(){this.documentDragEndListener=t=>{this.dragging&&(this.dragging=!1,ct.removeClass(document.body,"p-unselectable-text"),this.$emit("dragend",t))},window.document.addEventListener("mouseup",this.documentDragEndListener)},unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}},computed:{maskClass(){return["p-dialog-mask",{"p-component-overlay p-component-overlay-enter":this.modal},this.getPositionClass()]},dialogClass(){return["p-dialog p-component",{"p-dialog-rtl":this.rtl,"p-dialog-maximized":this.maximizable&&this.maximized,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},maximizeIconClass(){return["p-dialog-header-maximize-icon pi",{"pi-window-maximize":!this.maximized,"pi-window-minimize":this.maximized}]},ariaId(){return Gv()},ariaLabelledById(){return this.header!=null?this.ariaId+"_header":null},attributeSelector(){return Gv()},contentStyleClass(){return["p-dialog-content",this.contentClass]},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo}},directives:{ripple:ip}};const OH=["aria-labelledby","aria-modal"],NH=["id"],PH={class:"p-dialog-header-icons"},MH=["aria-label"],FH=tt("span",{class:"p-dialog-header-close-icon pi pi-times"},null,-1),UH=[FH],BH={key:1,class:"p-dialog-footer"};function $H(t,e,n,r,i,o){const l=Xd("ripple");return ce(),Cn(Gd,{to:o.appendTarget,disabled:o.appendDisabled},[i.containerVisible?(ce(),Ce("div",{key:0,ref:o.maskRef,class:Rt(o.maskClass),onClick:e[3]||(e[3]=(...c)=>o.onMaskClick&&o.onMaskClick(...c))},[Re(gc,{name:"p-dialog",onBeforeEnter:o.onBeforeEnter,onEnter:o.onEnter,onBeforeLeave:o.onBeforeLeave,onLeave:o.onLeave,onAfterLeave:o.onAfterLeave,appear:""},{default:xt(()=>[n.visible?(ce(),Ce("div",Na({key:0,ref:o.containerRef,class:o.dialogClass},t.$attrs,{role:"dialog","aria-labelledby":o.ariaLabelledById,"aria-modal":n.modal}),[n.showHeader?(ce(),Ce("div",{key:0,class:"p-dialog-header",onMousedown:e[2]||(e[2]=(...c)=>o.initDrag&&o.initDrag(...c))},[gr(t.$slots,"header",{},()=>[n.header?(ce(),Ce("span",{key:0,id:o.ariaLabelledById,class:"p-dialog-title"},Sn(n.header),9,NH)):yt("",!0)]),tt("div",PH,[n.maximizable?Qi((ce(),Ce("button",{key:0,class:"p-dialog-header-icon p-dialog-header-maximize p-link",onClick:e[0]||(e[0]=(...c)=>o.maximize&&o.maximize(...c)),type:"button",tabindex:"-1"},[tt("span",{class:Rt(o.maximizeIconClass)},null,2)])),[[l]]):yt("",!0),n.closable?Qi((ce(),Ce("button",{key:1,class:"p-dialog-header-icon p-dialog-header-close p-link",onClick:e[1]||(e[1]=(...c)=>o.close&&o.close(...c)),"aria-label":n.ariaCloseLabel,type:"button"},UH,8,MH)),[[l]]):yt("",!0)])],32)):yt("",!0),tt("div",{class:Rt(o.contentStyleClass),style:Ji(n.contentStyle)},[gr(t.$slots,"default")],6),n.footer||t.$slots.footer?(ce(),Ce("div",BH,[gr(t.$slots,"footer",{},()=>[vi(Sn(n.footer),1)])])):yt("",!0)],16,OH)):yt("",!0)]),_:3},8,["onBeforeEnter","onEnter","onBeforeLeave","onLeave","onAfterLeave"])],2)):yt("",!0)],8,["to","disabled"])}function VH(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var HH=`
.p-dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    pointer-events: none;
}
.p-dialog-mask.p-component-overlay {
    pointer-events: auto;
}
.p-dialog {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    pointer-events: auto;
    max-height: 90%;
    -webkit-transform: scale(1);
            transform: scale(1);
}
.p-dialog-content {
    overflow-y: auto;
}
.p-dialog-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dialog-footer {
    -ms-flex-negative: 0;
        flex-shrink: 0;
}
.p-dialog .p-dialog-header-icons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-dialog .p-dialog-header-icon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow: hidden;
    position: relative;
}

/* Fluid */
.p-fluid .p-dialog-footer .p-button {
    width: auto;
}

/* Animation */
/* Center */
.p-dialog-enter-active {
    -webkit-transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}
.p-dialog-leave-active {
    -webkit-transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
    transition: all 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
}
.p-dialog-enter-from,
.p-dialog-leave-to {
    opacity: 0;
    -webkit-transform: scale(0.7);
            transform: scale(0.7);
}

/* Top, Bottom, Left, Right, Top* and Bottom* */
.p-dialog-top .p-dialog,
.p-dialog-bottom .p-dialog,
.p-dialog-left .p-dialog,
.p-dialog-right .p-dialog,
.p-dialog-topleft .p-dialog,
.p-dialog-topright .p-dialog,
.p-dialog-bottomleft .p-dialog,
.p-dialog-bottomright .p-dialog {
    margin: .75rem;
    -webkit-transform: translate3d(0px, 0px, 0px);
            transform: translate3d(0px, 0px, 0px);
}
.p-dialog-top .p-dialog-enter-active,
.p-dialog-top .p-dialog-leave-active,
.p-dialog-bottom .p-dialog-enter-active,
.p-dialog-bottom .p-dialog-leave-active,
.p-dialog-left .p-dialog-enter-active,
.p-dialog-left .p-dialog-leave-active,
.p-dialog-right .p-dialog-enter-active,
.p-dialog-right .p-dialog-leave-active,
.p-dialog-topleft .p-dialog-enter-active,
.p-dialog-topleft .p-dialog-leave-active,
.p-dialog-topright .p-dialog-enter-active,
.p-dialog-topright .p-dialog-leave-active,
.p-dialog-bottomleft .p-dialog-enter-active,
.p-dialog-bottomleft .p-dialog-leave-active,
.p-dialog-bottomright .p-dialog-enter-active,
.p-dialog-bottomright .p-dialog-leave-active {
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out;
}
.p-dialog-top .p-dialog-enter-from,
.p-dialog-top .p-dialog-leave-to {
    -webkit-transform: translate3d(0px, -100%, 0px);
            transform: translate3d(0px, -100%, 0px);
}
.p-dialog-bottom .p-dialog-enter-from,
.p-dialog-bottom .p-dialog-leave-to {
    -webkit-transform: translate3d(0px, 100%, 0px);
            transform: translate3d(0px, 100%, 0px);
}
.p-dialog-left .p-dialog-enter-from,
.p-dialog-left .p-dialog-leave-to,
.p-dialog-topleft .p-dialog-enter-from,
.p-dialog-topleft .p-dialog-leave-to,
.p-dialog-bottomleft .p-dialog-enter-from,
.p-dialog-bottomleft .p-dialog-leave-to {
    -webkit-transform: translate3d(-100%, 0px, 0px);
            transform: translate3d(-100%, 0px, 0px);
}
.p-dialog-right .p-dialog-enter-from,
.p-dialog-right .p-dialog-leave-to,
.p-dialog-topright .p-dialog-enter-from,
.p-dialog-topright .p-dialog-leave-to,
.p-dialog-bottomright .p-dialog-enter-from,
.p-dialog-bottomright .p-dialog-leave-to {
    -webkit-transform: translate3d(100%, 0px, 0px);
            transform: translate3d(100%, 0px, 0px);
}

/* Maximize */
.p-dialog-maximized {
    -webkit-transition: none;
    transition: none;
    -webkit-transform: none;
            transform: none;
    width: 100vw !important;
    height: 100vh !important;
    top: 0px !important;
    left: 0px !important;
    max-height: 100%;
    height: 100%;
}
.p-dialog-maximized .p-dialog-content {
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
}

/* Position */
.p-dialog-left {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
}
.p-dialog-right {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
}
.p-dialog-top {
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-topleft {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-topright {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-dialog-bottom {
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-dialog-bottomleft {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-dialog-bottomright {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-confirm-dialog .p-dialog-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
`;VH(HH);vg.render=$H;var KI={name:"Textarea",emits:["update:modelValue"],props:{modelValue:null,autoResize:Boolean},mounted(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize(){const t=window.getComputedStyle(this.$el);this.$el.style.height="auto",this.$el.style.height=`calc(${t.borderTopWidth} + ${t.borderBottomWidth} + ${this.$el.scrollHeight}px)`,parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput(t){this.autoResize&&this.resize(),this.$emit("update:modelValue",t.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};const WH=["value"];function qH(t,e,n,r,i,o){return ce(),Ce("textarea",Na({class:["p-inputtextarea p-inputtext p-component",{"p-filled":o.filled,"p-inputtextarea-resizable ":n.autoResize}]},t.$attrs,{value:n.modelValue,onInput:e[0]||(e[0]=(...l)=>o.onInput&&o.onInput(...l))}),null,16,WH)}function zH(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(!t||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var KH=`
.p-inputtextarea-resizable {
    overflow: hidden;
    resize: none;
}
.p-fluid .p-inputtextarea {
    width: 100%;
}
`;zH(KH);KI.render=qH;class jH extends WI{constructor(){super("posts")}}function fu(t={}){const e=Pr([]),n=Pr(!1),r=Pr({}),i=new jH;function o(E){return i.create(E)}function l(E,C){i.update(E,C)}function c(E){return i.remove(E)}async function h(){return await i.getAll()}function d(E,C){return arguments.length==1||!C||C==""?E?i.search(Qo("title","==",E)):i.search():E&&C?i.search(Qo("title","==",E),Qo("user_id","==",C)):C?i.search(Qo("user_id","==",C)):i.search()}function p(E,C){return n.value=!0,d(E,C).then(M=>{r.value=M,e.value=M.docs.map(P=>new yg(P.data()))})}function m(E,C){return d(E,C).then(M=>M.docs[0].id)}function _(E){return i.getByID(E)}return{posts:e,postsFirestore:i,isLoading:n,search:p,searchID:m,addPost:o,deletePost:c,setPost:l,getAllPosts:h,getPost:_}}var $s=F0(),jI={name:"ConfirmDialog",props:{group:String,breakpoints:{type:Object,default:null}},confirmListener:null,closeListener:null,data(){return{visible:!1,confirmation:null}},mounted(){this.confirmListener=t=>{!t||t.group===this.group&&(this.confirmation=t,this.visible=!0)},this.closeListener=()=>{this.visible=!1,this.confirmation=null},$s.on("confirm",this.confirmListener),$s.on("close",this.closeListener)},beforeUnmount(){$s.off("confirm",this.confirmListener),$s.off("close",this.closeListener)},methods:{accept(){this.confirmation.accept&&this.confirmation.accept(),this.visible=!1},reject(){this.confirmation.reject&&this.confirmation.reject(),this.visible=!1}},computed:{header(){return this.confirmation?this.confirmation.header:null},message(){return this.confirmation?this.confirmation.message:null},blockScroll(){return this.confirmation?this.confirmation.blockScroll:!0},position(){return this.confirmation?this.confirmation.position:null},iconClass(){return["p-confirm-dialog-icon",this.confirmation?this.confirmation.icon:null]},acceptLabel(){return this.confirmation?this.confirmation.acceptLabel||this.$primevue.config.locale.accept:null},rejectLabel(){return this.confirmation?this.confirmation.rejectLabel||this.$primevue.config.locale.reject:null},acceptIcon(){return this.confirmation?this.confirmation.acceptIcon:null},rejectIcon(){return this.confirmation?this.confirmation.rejectIcon:null},acceptClass(){return["p-confirm-dialog-accept",this.confirmation?this.confirmation.acceptClass:null]},rejectClass(){return["p-confirm-dialog-reject",this.confirmation?this.confirmation.rejectClass||"p-button-text":null]},autoFocusAccept(){return this.confirmation.defaultFocus===void 0||this.confirmation.defaultFocus==="accept"},autoFocusReject(){return this.confirmation.defaultFocus==="reject"}},components:{CDialog:vg,CDButton:Pa}};const GH={class:"p-confirm-dialog-message"};function YH(t,e,n,r,i,o){const l=en("CDButton"),c=en("CDialog");return ce(),Cn(c,{visible:i.visible,"onUpdate:visible":e[2]||(e[2]=h=>i.visible=h),modal:!0,header:o.header,blockScroll:o.blockScroll,position:o.position,class:"p-confirm-dialog",breakpoints:n.breakpoints},{footer:xt(()=>[Re(l,{label:o.rejectLabel,icon:o.rejectIcon,class:Rt(o.rejectClass),onClick:e[0]||(e[0]=h=>o.reject()),autofocus:o.autoFocusReject},null,8,["label","icon","class","autofocus"]),Re(l,{label:o.acceptLabel,icon:o.acceptIcon,class:Rt(o.acceptClass),onClick:e[1]||(e[1]=h=>o.accept()),autofocus:o.autoFocusAccept},null,8,["label","icon","class","autofocus"])]),default:xt(()=>[tt("i",{class:Rt(o.iconClass)},null,2),tt("span",GH,Sn(o.message),1)]),_:1},8,["visible","header","blockScroll","position","breakpoints"])}jI.render=YH;var qo=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Rd={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(t,e){(function(){var n,r="4.17.21",i=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",c="Invalid `variable` option passed into `_.template`",h="__lodash_hash_undefined__",d=500,p="__lodash_placeholder__",m=1,_=2,E=4,C=1,M=2,P=1,V=2,X=4,se=8,Z=16,de=32,re=64,z=128,Ie=256,ye=512,Ke=30,it="...",ae=800,Je=16,Qe=1,Qn=2,gt=3,Ve=1/0,Ue=9007199254740991,on=17976931348623157e292,Zn=0/0,St=4294967295,Un=St-1,mn=St>>>1,To=[["ary",z],["bind",P],["bindKey",V],["curry",se],["curryRight",Z],["flip",ye],["partial",de],["partialRight",re],["rearg",Ie]],O="[object Arguments]",ee="[object Array]",j="[object AsyncFunction]",ie="[object Boolean]",qe="[object Date]",st="[object DOMException]",xe="[object Error]",_e="[object Function]",w="[object GeneratorFunction]",T="[object Map]",x="[object Number]",B="[object Null]",N="[object Object]",q="[object Promise]",Y="[object Proxy]",W="[object RegExp]",H="[object Set]",$="[object String]",ue="[object Symbol]",te="[object Undefined]",le="[object WeakMap]",ve="[object WeakSet]",Ne="[object ArrayBuffer]",je="[object DataView]",Ge="[object Float32Array]",nt="[object Float64Array]",an="[object Int8Array]",lr="[object Int16Array]",ps="[object Int32Array]",wr="[object Uint8Array]",gs="[object Uint8ClampedArray]",Vt="[object Uint16Array]",yn="[object Uint32Array]",cl=/\b__p \+= '';/g,GI=/\b(__p \+=) '' \+/g,YI=/(__e\(.*?\)|\b__t\)) \+\n'';/g,_g=/&(?:amp|lt|gt|quot|#39);/g,wg=/[&<>"']/g,XI=RegExp(_g.source),JI=RegExp(wg.source),QI=/<%-([\s\S]+?)%>/g,ZI=/<%([\s\S]+?)%>/g,bg=/<%=([\s\S]+?)%>/g,eT=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,tT=/^\w*$/,nT=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qc=/[\\^$.*+?()[\]{}|]/g,rT=RegExp(qc.source),zc=/^\s+/,iT=/\s/,sT=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,oT=/\{\n\/\* \[wrapped with (.+)\] \*/,aT=/,? & /,lT=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,uT=/[()=,{}\[\]\/\s]/,cT=/\\(\\)?/g,hT=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Eg=/\w*$/,fT=/^[-+]0x[0-9a-f]+$/i,dT=/^0b[01]+$/i,pT=/^\[object .+?Constructor\]$/,gT=/^0o[0-7]+$/i,mT=/^(?:0|[1-9]\d*)$/,yT=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,hl=/($^)/,vT=/['\n\r\u2028\u2029\\]/g,fl="\\ud800-\\udfff",_T="\\u0300-\\u036f",wT="\\ufe20-\\ufe2f",bT="\\u20d0-\\u20ff",Ig=_T+wT+bT,Tg="\\u2700-\\u27bf",Sg="a-z\\xdf-\\xf6\\xf8-\\xff",ET="\\xac\\xb1\\xd7\\xf7",IT="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",TT="\\u2000-\\u206f",ST=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Cg="A-Z\\xc0-\\xd6\\xd8-\\xde",Ag="\\ufe0e\\ufe0f",xg=ET+IT+TT+ST,Kc="['\u2019]",CT="["+fl+"]",Rg="["+xg+"]",dl="["+Ig+"]",kg="\\d+",AT="["+Tg+"]",Dg="["+Sg+"]",Lg="[^"+fl+xg+kg+Tg+Sg+Cg+"]",jc="\\ud83c[\\udffb-\\udfff]",xT="(?:"+dl+"|"+jc+")",Og="[^"+fl+"]",Gc="(?:\\ud83c[\\udde6-\\uddff]){2}",Yc="[\\ud800-\\udbff][\\udc00-\\udfff]",ms="["+Cg+"]",Ng="\\u200d",Pg="(?:"+Dg+"|"+Lg+")",RT="(?:"+ms+"|"+Lg+")",Mg="(?:"+Kc+"(?:d|ll|m|re|s|t|ve))?",Fg="(?:"+Kc+"(?:D|LL|M|RE|S|T|VE))?",Ug=xT+"?",Bg="["+Ag+"]?",kT="(?:"+Ng+"(?:"+[Og,Gc,Yc].join("|")+")"+Bg+Ug+")*",DT="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",LT="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",$g=Bg+Ug+kT,OT="(?:"+[AT,Gc,Yc].join("|")+")"+$g,NT="(?:"+[Og+dl+"?",dl,Gc,Yc,CT].join("|")+")",PT=RegExp(Kc,"g"),MT=RegExp(dl,"g"),Xc=RegExp(jc+"(?="+jc+")|"+NT+$g,"g"),FT=RegExp([ms+"?"+Dg+"+"+Mg+"(?="+[Rg,ms,"$"].join("|")+")",RT+"+"+Fg+"(?="+[Rg,ms+Pg,"$"].join("|")+")",ms+"?"+Pg+"+"+Mg,ms+"+"+Fg,LT,DT,kg,OT].join("|"),"g"),UT=RegExp("["+Ng+fl+Ig+Ag+"]"),BT=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,$T=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],VT=-1,ft={};ft[Ge]=ft[nt]=ft[an]=ft[lr]=ft[ps]=ft[wr]=ft[gs]=ft[Vt]=ft[yn]=!0,ft[O]=ft[ee]=ft[Ne]=ft[ie]=ft[je]=ft[qe]=ft[xe]=ft[_e]=ft[T]=ft[x]=ft[N]=ft[W]=ft[H]=ft[$]=ft[le]=!1;var ut={};ut[O]=ut[ee]=ut[Ne]=ut[je]=ut[ie]=ut[qe]=ut[Ge]=ut[nt]=ut[an]=ut[lr]=ut[ps]=ut[T]=ut[x]=ut[N]=ut[W]=ut[H]=ut[$]=ut[ue]=ut[wr]=ut[gs]=ut[Vt]=ut[yn]=!0,ut[xe]=ut[_e]=ut[le]=!1;var HT={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},WT={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},qT={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},zT={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},KT=parseFloat,jT=parseInt,Vg=typeof qo=="object"&&qo&&qo.Object===Object&&qo,GT=typeof self=="object"&&self&&self.Object===Object&&self,Ht=Vg||GT||Function("return this")(),Jc=e&&!e.nodeType&&e,Ci=Jc&&!0&&t&&!t.nodeType&&t,Hg=Ci&&Ci.exports===Jc,Qc=Hg&&Vg.process,Bn=function(){try{var S=Ci&&Ci.require&&Ci.require("util").types;return S||Qc&&Qc.binding&&Qc.binding("util")}catch{}}(),Wg=Bn&&Bn.isArrayBuffer,qg=Bn&&Bn.isDate,zg=Bn&&Bn.isMap,Kg=Bn&&Bn.isRegExp,jg=Bn&&Bn.isSet,Gg=Bn&&Bn.isTypedArray;function xn(S,k,R){switch(R.length){case 0:return S.call(k);case 1:return S.call(k,R[0]);case 2:return S.call(k,R[0],R[1]);case 3:return S.call(k,R[0],R[1],R[2])}return S.apply(k,R)}function YT(S,k,R,J){for(var Te=-1,Ye=S==null?0:S.length;++Te<Ye;){var Ot=S[Te];k(J,Ot,R(Ot),S)}return J}function $n(S,k){for(var R=-1,J=S==null?0:S.length;++R<J&&k(S[R],R,S)!==!1;);return S}function XT(S,k){for(var R=S==null?0:S.length;R--&&k(S[R],R,S)!==!1;);return S}function Yg(S,k){for(var R=-1,J=S==null?0:S.length;++R<J;)if(!k(S[R],R,S))return!1;return!0}function Wr(S,k){for(var R=-1,J=S==null?0:S.length,Te=0,Ye=[];++R<J;){var Ot=S[R];k(Ot,R,S)&&(Ye[Te++]=Ot)}return Ye}function pl(S,k){var R=S==null?0:S.length;return!!R&&ys(S,k,0)>-1}function Zc(S,k,R){for(var J=-1,Te=S==null?0:S.length;++J<Te;)if(R(k,S[J]))return!0;return!1}function mt(S,k){for(var R=-1,J=S==null?0:S.length,Te=Array(J);++R<J;)Te[R]=k(S[R],R,S);return Te}function qr(S,k){for(var R=-1,J=k.length,Te=S.length;++R<J;)S[Te+R]=k[R];return S}function eh(S,k,R,J){var Te=-1,Ye=S==null?0:S.length;for(J&&Ye&&(R=S[++Te]);++Te<Ye;)R=k(R,S[Te],Te,S);return R}function JT(S,k,R,J){var Te=S==null?0:S.length;for(J&&Te&&(R=S[--Te]);Te--;)R=k(R,S[Te],Te,S);return R}function th(S,k){for(var R=-1,J=S==null?0:S.length;++R<J;)if(k(S[R],R,S))return!0;return!1}var QT=nh("length");function ZT(S){return S.split("")}function eS(S){return S.match(lT)||[]}function Xg(S,k,R){var J;return R(S,function(Te,Ye,Ot){if(k(Te,Ye,Ot))return J=Ye,!1}),J}function gl(S,k,R,J){for(var Te=S.length,Ye=R+(J?1:-1);J?Ye--:++Ye<Te;)if(k(S[Ye],Ye,S))return Ye;return-1}function ys(S,k,R){return k===k?fS(S,k,R):gl(S,Jg,R)}function tS(S,k,R,J){for(var Te=R-1,Ye=S.length;++Te<Ye;)if(J(S[Te],k))return Te;return-1}function Jg(S){return S!==S}function Qg(S,k){var R=S==null?0:S.length;return R?ih(S,k)/R:Zn}function nh(S){return function(k){return k==null?n:k[S]}}function rh(S){return function(k){return S==null?n:S[k]}}function Zg(S,k,R,J,Te){return Te(S,function(Ye,Ot,ot){R=J?(J=!1,Ye):k(R,Ye,Ot,ot)}),R}function nS(S,k){var R=S.length;for(S.sort(k);R--;)S[R]=S[R].value;return S}function ih(S,k){for(var R,J=-1,Te=S.length;++J<Te;){var Ye=k(S[J]);Ye!==n&&(R=R===n?Ye:R+Ye)}return R}function sh(S,k){for(var R=-1,J=Array(S);++R<S;)J[R]=k(R);return J}function rS(S,k){return mt(k,function(R){return[R,S[R]]})}function em(S){return S&&S.slice(0,im(S)+1).replace(zc,"")}function Rn(S){return function(k){return S(k)}}function oh(S,k){return mt(k,function(R){return S[R]})}function So(S,k){return S.has(k)}function tm(S,k){for(var R=-1,J=S.length;++R<J&&ys(k,S[R],0)>-1;);return R}function nm(S,k){for(var R=S.length;R--&&ys(k,S[R],0)>-1;);return R}function iS(S,k){for(var R=S.length,J=0;R--;)S[R]===k&&++J;return J}var sS=rh(HT),oS=rh(WT);function aS(S){return"\\"+zT[S]}function lS(S,k){return S==null?n:S[k]}function vs(S){return UT.test(S)}function uS(S){return BT.test(S)}function cS(S){for(var k,R=[];!(k=S.next()).done;)R.push(k.value);return R}function ah(S){var k=-1,R=Array(S.size);return S.forEach(function(J,Te){R[++k]=[Te,J]}),R}function rm(S,k){return function(R){return S(k(R))}}function zr(S,k){for(var R=-1,J=S.length,Te=0,Ye=[];++R<J;){var Ot=S[R];(Ot===k||Ot===p)&&(S[R]=p,Ye[Te++]=R)}return Ye}function ml(S){var k=-1,R=Array(S.size);return S.forEach(function(J){R[++k]=J}),R}function hS(S){var k=-1,R=Array(S.size);return S.forEach(function(J){R[++k]=[J,J]}),R}function fS(S,k,R){for(var J=R-1,Te=S.length;++J<Te;)if(S[J]===k)return J;return-1}function dS(S,k,R){for(var J=R+1;J--;)if(S[J]===k)return J;return J}function _s(S){return vs(S)?gS(S):QT(S)}function er(S){return vs(S)?mS(S):ZT(S)}function im(S){for(var k=S.length;k--&&iT.test(S.charAt(k)););return k}var pS=rh(qT);function gS(S){for(var k=Xc.lastIndex=0;Xc.test(S);)++k;return k}function mS(S){return S.match(Xc)||[]}function yS(S){return S.match(FT)||[]}var vS=function S(k){k=k==null?Ht:ws.defaults(Ht.Object(),k,ws.pick(Ht,$T));var R=k.Array,J=k.Date,Te=k.Error,Ye=k.Function,Ot=k.Math,ot=k.Object,lh=k.RegExp,_S=k.String,Vn=k.TypeError,yl=R.prototype,wS=Ye.prototype,bs=ot.prototype,vl=k["__core-js_shared__"],_l=wS.toString,rt=bs.hasOwnProperty,bS=0,sm=function(){var s=/[^.]+$/.exec(vl&&vl.keys&&vl.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),wl=bs.toString,ES=_l.call(ot),IS=Ht._,TS=lh("^"+_l.call(rt).replace(qc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),bl=Hg?k.Buffer:n,Kr=k.Symbol,El=k.Uint8Array,om=bl?bl.allocUnsafe:n,Il=rm(ot.getPrototypeOf,ot),am=ot.create,lm=bs.propertyIsEnumerable,Tl=yl.splice,um=Kr?Kr.isConcatSpreadable:n,Co=Kr?Kr.iterator:n,Ai=Kr?Kr.toStringTag:n,Sl=function(){try{var s=Li(ot,"defineProperty");return s({},"",{}),s}catch{}}(),SS=k.clearTimeout!==Ht.clearTimeout&&k.clearTimeout,CS=J&&J.now!==Ht.Date.now&&J.now,AS=k.setTimeout!==Ht.setTimeout&&k.setTimeout,Cl=Ot.ceil,Al=Ot.floor,uh=ot.getOwnPropertySymbols,xS=bl?bl.isBuffer:n,cm=k.isFinite,RS=yl.join,kS=rm(ot.keys,ot),Nt=Ot.max,Jt=Ot.min,DS=J.now,LS=k.parseInt,hm=Ot.random,OS=yl.reverse,ch=Li(k,"DataView"),Ao=Li(k,"Map"),hh=Li(k,"Promise"),Es=Li(k,"Set"),xo=Li(k,"WeakMap"),Ro=Li(ot,"create"),xl=xo&&new xo,Is={},NS=Oi(ch),PS=Oi(Ao),MS=Oi(hh),FS=Oi(Es),US=Oi(xo),Rl=Kr?Kr.prototype:n,ko=Rl?Rl.valueOf:n,fm=Rl?Rl.toString:n;function y(s){if(wt(s)&&!Se(s)&&!(s instanceof Be)){if(s instanceof Hn)return s;if(rt.call(s,"__wrapped__"))return dy(s)}return new Hn(s)}var Ts=function(){function s(){}return function(a){if(!_t(a))return{};if(am)return am(a);s.prototype=a;var u=new s;return s.prototype=n,u}}();function kl(){}function Hn(s,a){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=n}y.templateSettings={escape:QI,evaluate:ZI,interpolate:bg,variable:"",imports:{_:y}},y.prototype=kl.prototype,y.prototype.constructor=y,Hn.prototype=Ts(kl.prototype),Hn.prototype.constructor=Hn;function Be(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=St,this.__views__=[]}function BS(){var s=new Be(this.__wrapped__);return s.__actions__=vn(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=vn(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=vn(this.__views__),s}function $S(){if(this.__filtered__){var s=new Be(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function VS(){var s=this.__wrapped__.value(),a=this.__dir__,u=Se(s),f=a<0,g=u?s.length:0,v=ZC(0,g,this.__views__),b=v.start,I=v.end,A=I-b,D=f?I:b-1,L=this.__iteratees__,F=L.length,G=0,oe=Jt(A,this.__takeCount__);if(!u||!f&&g==A&&oe==A)return Mm(s,this.__actions__);var ge=[];e:for(;A--&&G<oe;){D+=a;for(var Oe=-1,me=s[D];++Oe<F;){var Fe=L[Oe],$e=Fe.iteratee,Ln=Fe.type,cn=$e(me);if(Ln==Qn)me=cn;else if(!cn){if(Ln==Qe)continue e;break e}}ge[G++]=me}return ge}Be.prototype=Ts(kl.prototype),Be.prototype.constructor=Be;function xi(s){var a=-1,u=s==null?0:s.length;for(this.clear();++a<u;){var f=s[a];this.set(f[0],f[1])}}function HS(){this.__data__=Ro?Ro(null):{},this.size=0}function WS(s){var a=this.has(s)&&delete this.__data__[s];return this.size-=a?1:0,a}function qS(s){var a=this.__data__;if(Ro){var u=a[s];return u===h?n:u}return rt.call(a,s)?a[s]:n}function zS(s){var a=this.__data__;return Ro?a[s]!==n:rt.call(a,s)}function KS(s,a){var u=this.__data__;return this.size+=this.has(s)?0:1,u[s]=Ro&&a===n?h:a,this}xi.prototype.clear=HS,xi.prototype.delete=WS,xi.prototype.get=qS,xi.prototype.has=zS,xi.prototype.set=KS;function br(s){var a=-1,u=s==null?0:s.length;for(this.clear();++a<u;){var f=s[a];this.set(f[0],f[1])}}function jS(){this.__data__=[],this.size=0}function GS(s){var a=this.__data__,u=Dl(a,s);if(u<0)return!1;var f=a.length-1;return u==f?a.pop():Tl.call(a,u,1),--this.size,!0}function YS(s){var a=this.__data__,u=Dl(a,s);return u<0?n:a[u][1]}function XS(s){return Dl(this.__data__,s)>-1}function JS(s,a){var u=this.__data__,f=Dl(u,s);return f<0?(++this.size,u.push([s,a])):u[f][1]=a,this}br.prototype.clear=jS,br.prototype.delete=GS,br.prototype.get=YS,br.prototype.has=XS,br.prototype.set=JS;function Er(s){var a=-1,u=s==null?0:s.length;for(this.clear();++a<u;){var f=s[a];this.set(f[0],f[1])}}function QS(){this.size=0,this.__data__={hash:new xi,map:new(Ao||br),string:new xi}}function ZS(s){var a=Wl(this,s).delete(s);return this.size-=a?1:0,a}function eC(s){return Wl(this,s).get(s)}function tC(s){return Wl(this,s).has(s)}function nC(s,a){var u=Wl(this,s),f=u.size;return u.set(s,a),this.size+=u.size==f?0:1,this}Er.prototype.clear=QS,Er.prototype.delete=ZS,Er.prototype.get=eC,Er.prototype.has=tC,Er.prototype.set=nC;function Ri(s){var a=-1,u=s==null?0:s.length;for(this.__data__=new Er;++a<u;)this.add(s[a])}function rC(s){return this.__data__.set(s,h),this}function iC(s){return this.__data__.has(s)}Ri.prototype.add=Ri.prototype.push=rC,Ri.prototype.has=iC;function tr(s){var a=this.__data__=new br(s);this.size=a.size}function sC(){this.__data__=new br,this.size=0}function oC(s){var a=this.__data__,u=a.delete(s);return this.size=a.size,u}function aC(s){return this.__data__.get(s)}function lC(s){return this.__data__.has(s)}function uC(s,a){var u=this.__data__;if(u instanceof br){var f=u.__data__;if(!Ao||f.length<i-1)return f.push([s,a]),this.size=++u.size,this;u=this.__data__=new Er(f)}return u.set(s,a),this.size=u.size,this}tr.prototype.clear=sC,tr.prototype.delete=oC,tr.prototype.get=aC,tr.prototype.has=lC,tr.prototype.set=uC;function dm(s,a){var u=Se(s),f=!u&&Ni(s),g=!u&&!f&&Jr(s),v=!u&&!f&&!g&&xs(s),b=u||f||g||v,I=b?sh(s.length,_S):[],A=I.length;for(var D in s)(a||rt.call(s,D))&&!(b&&(D=="length"||g&&(D=="offset"||D=="parent")||v&&(D=="buffer"||D=="byteLength"||D=="byteOffset")||Cr(D,A)))&&I.push(D);return I}function pm(s){var a=s.length;return a?s[Eh(0,a-1)]:n}function cC(s,a){return ql(vn(s),ki(a,0,s.length))}function hC(s){return ql(vn(s))}function fh(s,a,u){(u!==n&&!nr(s[a],u)||u===n&&!(a in s))&&Ir(s,a,u)}function Do(s,a,u){var f=s[a];(!(rt.call(s,a)&&nr(f,u))||u===n&&!(a in s))&&Ir(s,a,u)}function Dl(s,a){for(var u=s.length;u--;)if(nr(s[u][0],a))return u;return-1}function fC(s,a,u,f){return jr(s,function(g,v,b){a(f,g,u(g),b)}),f}function gm(s,a){return s&&cr(a,Pt(a),s)}function dC(s,a){return s&&cr(a,wn(a),s)}function Ir(s,a,u){a=="__proto__"&&Sl?Sl(s,a,{configurable:!0,enumerable:!0,value:u,writable:!0}):s[a]=u}function dh(s,a){for(var u=-1,f=a.length,g=R(f),v=s==null;++u<f;)g[u]=v?n:jh(s,a[u]);return g}function ki(s,a,u){return s===s&&(u!==n&&(s=s<=u?s:u),a!==n&&(s=s>=a?s:a)),s}function Wn(s,a,u,f,g,v){var b,I=a&m,A=a&_,D=a&E;if(u&&(b=g?u(s,f,g,v):u(s)),b!==n)return b;if(!_t(s))return s;var L=Se(s);if(L){if(b=t1(s),!I)return vn(s,b)}else{var F=Qt(s),G=F==_e||F==w;if(Jr(s))return Bm(s,I);if(F==N||F==O||G&&!g){if(b=A||G?{}:iy(s),!I)return A?qC(s,dC(b,s)):WC(s,gm(b,s))}else{if(!ut[F])return g?s:{};b=n1(s,F,I)}}v||(v=new tr);var oe=v.get(s);if(oe)return oe;v.set(s,b),Oy(s)?s.forEach(function(me){b.add(Wn(me,a,u,me,s,v))}):Dy(s)&&s.forEach(function(me,Fe){b.set(Fe,Wn(me,a,u,Fe,s,v))});var ge=D?A?Oh:Lh:A?wn:Pt,Oe=L?n:ge(s);return $n(Oe||s,function(me,Fe){Oe&&(Fe=me,me=s[Fe]),Do(b,Fe,Wn(me,a,u,Fe,s,v))}),b}function pC(s){var a=Pt(s);return function(u){return mm(u,s,a)}}function mm(s,a,u){var f=u.length;if(s==null)return!f;for(s=ot(s);f--;){var g=u[f],v=a[g],b=s[g];if(b===n&&!(g in s)||!v(b))return!1}return!0}function ym(s,a,u){if(typeof s!="function")throw new Vn(l);return Uo(function(){s.apply(n,u)},a)}function Lo(s,a,u,f){var g=-1,v=pl,b=!0,I=s.length,A=[],D=a.length;if(!I)return A;u&&(a=mt(a,Rn(u))),f?(v=Zc,b=!1):a.length>=i&&(v=So,b=!1,a=new Ri(a));e:for(;++g<I;){var L=s[g],F=u==null?L:u(L);if(L=f||L!==0?L:0,b&&F===F){for(var G=D;G--;)if(a[G]===F)continue e;A.push(L)}else v(a,F,f)||A.push(L)}return A}var jr=qm(ur),vm=qm(gh,!0);function gC(s,a){var u=!0;return jr(s,function(f,g,v){return u=!!a(f,g,v),u}),u}function Ll(s,a,u){for(var f=-1,g=s.length;++f<g;){var v=s[f],b=a(v);if(b!=null&&(I===n?b===b&&!Dn(b):u(b,I)))var I=b,A=v}return A}function mC(s,a,u,f){var g=s.length;for(u=De(u),u<0&&(u=-u>g?0:g+u),f=f===n||f>g?g:De(f),f<0&&(f+=g),f=u>f?0:Py(f);u<f;)s[u++]=a;return s}function _m(s,a){var u=[];return jr(s,function(f,g,v){a(f,g,v)&&u.push(f)}),u}function Wt(s,a,u,f,g){var v=-1,b=s.length;for(u||(u=i1),g||(g=[]);++v<b;){var I=s[v];a>0&&u(I)?a>1?Wt(I,a-1,u,f,g):qr(g,I):f||(g[g.length]=I)}return g}var ph=zm(),wm=zm(!0);function ur(s,a){return s&&ph(s,a,Pt)}function gh(s,a){return s&&wm(s,a,Pt)}function Ol(s,a){return Wr(a,function(u){return Ar(s[u])})}function Di(s,a){a=Yr(a,s);for(var u=0,f=a.length;s!=null&&u<f;)s=s[hr(a[u++])];return u&&u==f?s:n}function bm(s,a,u){var f=a(s);return Se(s)?f:qr(f,u(s))}function ln(s){return s==null?s===n?te:B:Ai&&Ai in ot(s)?QC(s):h1(s)}function mh(s,a){return s>a}function yC(s,a){return s!=null&&rt.call(s,a)}function vC(s,a){return s!=null&&a in ot(s)}function _C(s,a,u){return s>=Jt(a,u)&&s<Nt(a,u)}function yh(s,a,u){for(var f=u?Zc:pl,g=s[0].length,v=s.length,b=v,I=R(v),A=1/0,D=[];b--;){var L=s[b];b&&a&&(L=mt(L,Rn(a))),A=Jt(L.length,A),I[b]=!u&&(a||g>=120&&L.length>=120)?new Ri(b&&L):n}L=s[0];var F=-1,G=I[0];e:for(;++F<g&&D.length<A;){var oe=L[F],ge=a?a(oe):oe;if(oe=u||oe!==0?oe:0,!(G?So(G,ge):f(D,ge,u))){for(b=v;--b;){var Oe=I[b];if(!(Oe?So(Oe,ge):f(s[b],ge,u)))continue e}G&&G.push(ge),D.push(oe)}}return D}function wC(s,a,u,f){return ur(s,function(g,v,b){a(f,u(g),v,b)}),f}function Oo(s,a,u){a=Yr(a,s),s=ly(s,a);var f=s==null?s:s[hr(zn(a))];return f==null?n:xn(f,s,u)}function Em(s){return wt(s)&&ln(s)==O}function bC(s){return wt(s)&&ln(s)==Ne}function EC(s){return wt(s)&&ln(s)==qe}function No(s,a,u,f,g){return s===a?!0:s==null||a==null||!wt(s)&&!wt(a)?s!==s&&a!==a:IC(s,a,u,f,No,g)}function IC(s,a,u,f,g,v){var b=Se(s),I=Se(a),A=b?ee:Qt(s),D=I?ee:Qt(a);A=A==O?N:A,D=D==O?N:D;var L=A==N,F=D==N,G=A==D;if(G&&Jr(s)){if(!Jr(a))return!1;b=!0,L=!1}if(G&&!L)return v||(v=new tr),b||xs(s)?ty(s,a,u,f,g,v):XC(s,a,A,u,f,g,v);if(!(u&C)){var oe=L&&rt.call(s,"__wrapped__"),ge=F&&rt.call(a,"__wrapped__");if(oe||ge){var Oe=oe?s.value():s,me=ge?a.value():a;return v||(v=new tr),g(Oe,me,u,f,v)}}return G?(v||(v=new tr),JC(s,a,u,f,g,v)):!1}function TC(s){return wt(s)&&Qt(s)==T}function vh(s,a,u,f){var g=u.length,v=g,b=!f;if(s==null)return!v;for(s=ot(s);g--;){var I=u[g];if(b&&I[2]?I[1]!==s[I[0]]:!(I[0]in s))return!1}for(;++g<v;){I=u[g];var A=I[0],D=s[A],L=I[1];if(b&&I[2]){if(D===n&&!(A in s))return!1}else{var F=new tr;if(f)var G=f(D,L,A,s,a,F);if(!(G===n?No(L,D,C|M,f,F):G))return!1}}return!0}function Im(s){if(!_t(s)||o1(s))return!1;var a=Ar(s)?TS:pT;return a.test(Oi(s))}function SC(s){return wt(s)&&ln(s)==W}function CC(s){return wt(s)&&Qt(s)==H}function AC(s){return wt(s)&&Xl(s.length)&&!!ft[ln(s)]}function Tm(s){return typeof s=="function"?s:s==null?bn:typeof s=="object"?Se(s)?Am(s[0],s[1]):Cm(s):Ky(s)}function _h(s){if(!Fo(s))return kS(s);var a=[];for(var u in ot(s))rt.call(s,u)&&u!="constructor"&&a.push(u);return a}function xC(s){if(!_t(s))return c1(s);var a=Fo(s),u=[];for(var f in s)f=="constructor"&&(a||!rt.call(s,f))||u.push(f);return u}function wh(s,a){return s<a}function Sm(s,a){var u=-1,f=_n(s)?R(s.length):[];return jr(s,function(g,v,b){f[++u]=a(g,v,b)}),f}function Cm(s){var a=Ph(s);return a.length==1&&a[0][2]?oy(a[0][0],a[0][1]):function(u){return u===s||vh(u,s,a)}}function Am(s,a){return Fh(s)&&sy(a)?oy(hr(s),a):function(u){var f=jh(u,s);return f===n&&f===a?Gh(u,s):No(a,f,C|M)}}function Nl(s,a,u,f,g){s!==a&&ph(a,function(v,b){if(g||(g=new tr),_t(v))RC(s,a,b,u,Nl,f,g);else{var I=f?f(Bh(s,b),v,b+"",s,a,g):n;I===n&&(I=v),fh(s,b,I)}},wn)}function RC(s,a,u,f,g,v,b){var I=Bh(s,u),A=Bh(a,u),D=b.get(A);if(D){fh(s,u,D);return}var L=v?v(I,A,u+"",s,a,b):n,F=L===n;if(F){var G=Se(A),oe=!G&&Jr(A),ge=!G&&!oe&&xs(A);L=A,G||oe||ge?Se(I)?L=I:It(I)?L=vn(I):oe?(F=!1,L=Bm(A,!0)):ge?(F=!1,L=$m(A,!0)):L=[]:Bo(A)||Ni(A)?(L=I,Ni(I)?L=My(I):(!_t(I)||Ar(I))&&(L=iy(A))):F=!1}F&&(b.set(A,L),g(L,A,f,v,b),b.delete(A)),fh(s,u,L)}function xm(s,a){var u=s.length;if(!!u)return a+=a<0?u:0,Cr(a,u)?s[a]:n}function Rm(s,a,u){a.length?a=mt(a,function(v){return Se(v)?function(b){return Di(b,v.length===1?v[0]:v)}:v}):a=[bn];var f=-1;a=mt(a,Rn(pe()));var g=Sm(s,function(v,b,I){var A=mt(a,function(D){return D(v)});return{criteria:A,index:++f,value:v}});return nS(g,function(v,b){return HC(v,b,u)})}function kC(s,a){return km(s,a,function(u,f){return Gh(s,f)})}function km(s,a,u){for(var f=-1,g=a.length,v={};++f<g;){var b=a[f],I=Di(s,b);u(I,b)&&Po(v,Yr(b,s),I)}return v}function DC(s){return function(a){return Di(a,s)}}function bh(s,a,u,f){var g=f?tS:ys,v=-1,b=a.length,I=s;for(s===a&&(a=vn(a)),u&&(I=mt(s,Rn(u)));++v<b;)for(var A=0,D=a[v],L=u?u(D):D;(A=g(I,L,A,f))>-1;)I!==s&&Tl.call(I,A,1),Tl.call(s,A,1);return s}function Dm(s,a){for(var u=s?a.length:0,f=u-1;u--;){var g=a[u];if(u==f||g!==v){var v=g;Cr(g)?Tl.call(s,g,1):Sh(s,g)}}return s}function Eh(s,a){return s+Al(hm()*(a-s+1))}function LC(s,a,u,f){for(var g=-1,v=Nt(Cl((a-s)/(u||1)),0),b=R(v);v--;)b[f?v:++g]=s,s+=u;return b}function Ih(s,a){var u="";if(!s||a<1||a>Ue)return u;do a%2&&(u+=s),a=Al(a/2),a&&(s+=s);while(a);return u}function Pe(s,a){return $h(ay(s,a,bn),s+"")}function OC(s){return pm(Rs(s))}function NC(s,a){var u=Rs(s);return ql(u,ki(a,0,u.length))}function Po(s,a,u,f){if(!_t(s))return s;a=Yr(a,s);for(var g=-1,v=a.length,b=v-1,I=s;I!=null&&++g<v;){var A=hr(a[g]),D=u;if(A==="__proto__"||A==="constructor"||A==="prototype")return s;if(g!=b){var L=I[A];D=f?f(L,A,I):n,D===n&&(D=_t(L)?L:Cr(a[g+1])?[]:{})}Do(I,A,D),I=I[A]}return s}var Lm=xl?function(s,a){return xl.set(s,a),s}:bn,PC=Sl?function(s,a){return Sl(s,"toString",{configurable:!0,enumerable:!1,value:Xh(a),writable:!0})}:bn;function MC(s){return ql(Rs(s))}function qn(s,a,u){var f=-1,g=s.length;a<0&&(a=-a>g?0:g+a),u=u>g?g:u,u<0&&(u+=g),g=a>u?0:u-a>>>0,a>>>=0;for(var v=R(g);++f<g;)v[f]=s[f+a];return v}function FC(s,a){var u;return jr(s,function(f,g,v){return u=a(f,g,v),!u}),!!u}function Pl(s,a,u){var f=0,g=s==null?f:s.length;if(typeof a=="number"&&a===a&&g<=mn){for(;f<g;){var v=f+g>>>1,b=s[v];b!==null&&!Dn(b)&&(u?b<=a:b<a)?f=v+1:g=v}return g}return Th(s,a,bn,u)}function Th(s,a,u,f){var g=0,v=s==null?0:s.length;if(v===0)return 0;a=u(a);for(var b=a!==a,I=a===null,A=Dn(a),D=a===n;g<v;){var L=Al((g+v)/2),F=u(s[L]),G=F!==n,oe=F===null,ge=F===F,Oe=Dn(F);if(b)var me=f||ge;else D?me=ge&&(f||G):I?me=ge&&G&&(f||!oe):A?me=ge&&G&&!oe&&(f||!Oe):oe||Oe?me=!1:me=f?F<=a:F<a;me?g=L+1:v=L}return Jt(v,Un)}function Om(s,a){for(var u=-1,f=s.length,g=0,v=[];++u<f;){var b=s[u],I=a?a(b):b;if(!u||!nr(I,A)){var A=I;v[g++]=b===0?0:b}}return v}function Nm(s){return typeof s=="number"?s:Dn(s)?Zn:+s}function kn(s){if(typeof s=="string")return s;if(Se(s))return mt(s,kn)+"";if(Dn(s))return fm?fm.call(s):"";var a=s+"";return a=="0"&&1/s==-Ve?"-0":a}function Gr(s,a,u){var f=-1,g=pl,v=s.length,b=!0,I=[],A=I;if(u)b=!1,g=Zc;else if(v>=i){var D=a?null:GC(s);if(D)return ml(D);b=!1,g=So,A=new Ri}else A=a?[]:I;e:for(;++f<v;){var L=s[f],F=a?a(L):L;if(L=u||L!==0?L:0,b&&F===F){for(var G=A.length;G--;)if(A[G]===F)continue e;a&&A.push(F),I.push(L)}else g(A,F,u)||(A!==I&&A.push(F),I.push(L))}return I}function Sh(s,a){return a=Yr(a,s),s=ly(s,a),s==null||delete s[hr(zn(a))]}function Pm(s,a,u,f){return Po(s,a,u(Di(s,a)),f)}function Ml(s,a,u,f){for(var g=s.length,v=f?g:-1;(f?v--:++v<g)&&a(s[v],v,s););return u?qn(s,f?0:v,f?v+1:g):qn(s,f?v+1:0,f?g:v)}function Mm(s,a){var u=s;return u instanceof Be&&(u=u.value()),eh(a,function(f,g){return g.func.apply(g.thisArg,qr([f],g.args))},u)}function Ch(s,a,u){var f=s.length;if(f<2)return f?Gr(s[0]):[];for(var g=-1,v=R(f);++g<f;)for(var b=s[g],I=-1;++I<f;)I!=g&&(v[g]=Lo(v[g]||b,s[I],a,u));return Gr(Wt(v,1),a,u)}function Fm(s,a,u){for(var f=-1,g=s.length,v=a.length,b={};++f<g;){var I=f<v?a[f]:n;u(b,s[f],I)}return b}function Ah(s){return It(s)?s:[]}function xh(s){return typeof s=="function"?s:bn}function Yr(s,a){return Se(s)?s:Fh(s,a)?[s]:fy(Ze(s))}var UC=Pe;function Xr(s,a,u){var f=s.length;return u=u===n?f:u,!a&&u>=f?s:qn(s,a,u)}var Um=SS||function(s){return Ht.clearTimeout(s)};function Bm(s,a){if(a)return s.slice();var u=s.length,f=om?om(u):new s.constructor(u);return s.copy(f),f}function Rh(s){var a=new s.constructor(s.byteLength);return new El(a).set(new El(s)),a}function BC(s,a){var u=a?Rh(s.buffer):s.buffer;return new s.constructor(u,s.byteOffset,s.byteLength)}function $C(s){var a=new s.constructor(s.source,Eg.exec(s));return a.lastIndex=s.lastIndex,a}function VC(s){return ko?ot(ko.call(s)):{}}function $m(s,a){var u=a?Rh(s.buffer):s.buffer;return new s.constructor(u,s.byteOffset,s.length)}function Vm(s,a){if(s!==a){var u=s!==n,f=s===null,g=s===s,v=Dn(s),b=a!==n,I=a===null,A=a===a,D=Dn(a);if(!I&&!D&&!v&&s>a||v&&b&&A&&!I&&!D||f&&b&&A||!u&&A||!g)return 1;if(!f&&!v&&!D&&s<a||D&&u&&g&&!f&&!v||I&&u&&g||!b&&g||!A)return-1}return 0}function HC(s,a,u){for(var f=-1,g=s.criteria,v=a.criteria,b=g.length,I=u.length;++f<b;){var A=Vm(g[f],v[f]);if(A){if(f>=I)return A;var D=u[f];return A*(D=="desc"?-1:1)}}return s.index-a.index}function Hm(s,a,u,f){for(var g=-1,v=s.length,b=u.length,I=-1,A=a.length,D=Nt(v-b,0),L=R(A+D),F=!f;++I<A;)L[I]=a[I];for(;++g<b;)(F||g<v)&&(L[u[g]]=s[g]);for(;D--;)L[I++]=s[g++];return L}function Wm(s,a,u,f){for(var g=-1,v=s.length,b=-1,I=u.length,A=-1,D=a.length,L=Nt(v-I,0),F=R(L+D),G=!f;++g<L;)F[g]=s[g];for(var oe=g;++A<D;)F[oe+A]=a[A];for(;++b<I;)(G||g<v)&&(F[oe+u[b]]=s[g++]);return F}function vn(s,a){var u=-1,f=s.length;for(a||(a=R(f));++u<f;)a[u]=s[u];return a}function cr(s,a,u,f){var g=!u;u||(u={});for(var v=-1,b=a.length;++v<b;){var I=a[v],A=f?f(u[I],s[I],I,u,s):n;A===n&&(A=s[I]),g?Ir(u,I,A):Do(u,I,A)}return u}function WC(s,a){return cr(s,Mh(s),a)}function qC(s,a){return cr(s,ny(s),a)}function Fl(s,a){return function(u,f){var g=Se(u)?YT:fC,v=a?a():{};return g(u,s,pe(f,2),v)}}function Ss(s){return Pe(function(a,u){var f=-1,g=u.length,v=g>1?u[g-1]:n,b=g>2?u[2]:n;for(v=s.length>3&&typeof v=="function"?(g--,v):n,b&&un(u[0],u[1],b)&&(v=g<3?n:v,g=1),a=ot(a);++f<g;){var I=u[f];I&&s(a,I,f,v)}return a})}function qm(s,a){return function(u,f){if(u==null)return u;if(!_n(u))return s(u,f);for(var g=u.length,v=a?g:-1,b=ot(u);(a?v--:++v<g)&&f(b[v],v,b)!==!1;);return u}}function zm(s){return function(a,u,f){for(var g=-1,v=ot(a),b=f(a),I=b.length;I--;){var A=b[s?I:++g];if(u(v[A],A,v)===!1)break}return a}}function zC(s,a,u){var f=a&P,g=Mo(s);function v(){var b=this&&this!==Ht&&this instanceof v?g:s;return b.apply(f?u:this,arguments)}return v}function Km(s){return function(a){a=Ze(a);var u=vs(a)?er(a):n,f=u?u[0]:a.charAt(0),g=u?Xr(u,1).join(""):a.slice(1);return f[s]()+g}}function Cs(s){return function(a){return eh(qy(Wy(a).replace(PT,"")),s,"")}}function Mo(s){return function(){var a=arguments;switch(a.length){case 0:return new s;case 1:return new s(a[0]);case 2:return new s(a[0],a[1]);case 3:return new s(a[0],a[1],a[2]);case 4:return new s(a[0],a[1],a[2],a[3]);case 5:return new s(a[0],a[1],a[2],a[3],a[4]);case 6:return new s(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new s(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var u=Ts(s.prototype),f=s.apply(u,a);return _t(f)?f:u}}function KC(s,a,u){var f=Mo(s);function g(){for(var v=arguments.length,b=R(v),I=v,A=As(g);I--;)b[I]=arguments[I];var D=v<3&&b[0]!==A&&b[v-1]!==A?[]:zr(b,A);if(v-=D.length,v<u)return Jm(s,a,Ul,g.placeholder,n,b,D,n,n,u-v);var L=this&&this!==Ht&&this instanceof g?f:s;return xn(L,this,b)}return g}function jm(s){return function(a,u,f){var g=ot(a);if(!_n(a)){var v=pe(u,3);a=Pt(a),u=function(I){return v(g[I],I,g)}}var b=s(a,u,f);return b>-1?g[v?a[b]:b]:n}}function Gm(s){return Sr(function(a){var u=a.length,f=u,g=Hn.prototype.thru;for(s&&a.reverse();f--;){var v=a[f];if(typeof v!="function")throw new Vn(l);if(g&&!b&&Hl(v)=="wrapper")var b=new Hn([],!0)}for(f=b?f:u;++f<u;){v=a[f];var I=Hl(v),A=I=="wrapper"?Nh(v):n;A&&Uh(A[0])&&A[1]==(z|se|de|Ie)&&!A[4].length&&A[9]==1?b=b[Hl(A[0])].apply(b,A[3]):b=v.length==1&&Uh(v)?b[I]():b.thru(v)}return function(){var D=arguments,L=D[0];if(b&&D.length==1&&Se(L))return b.plant(L).value();for(var F=0,G=u?a[F].apply(this,D):L;++F<u;)G=a[F].call(this,G);return G}})}function Ul(s,a,u,f,g,v,b,I,A,D){var L=a&z,F=a&P,G=a&V,oe=a&(se|Z),ge=a&ye,Oe=G?n:Mo(s);function me(){for(var Fe=arguments.length,$e=R(Fe),Ln=Fe;Ln--;)$e[Ln]=arguments[Ln];if(oe)var cn=As(me),On=iS($e,cn);if(f&&($e=Hm($e,f,g,oe)),v&&($e=Wm($e,v,b,oe)),Fe-=On,oe&&Fe<D){var Tt=zr($e,cn);return Jm(s,a,Ul,me.placeholder,u,$e,Tt,I,A,D-Fe)}var rr=F?u:this,Rr=G?rr[s]:s;return Fe=$e.length,I?$e=f1($e,I):ge&&Fe>1&&$e.reverse(),L&&A<Fe&&($e.length=A),this&&this!==Ht&&this instanceof me&&(Rr=Oe||Mo(Rr)),Rr.apply(rr,$e)}return me}function Ym(s,a){return function(u,f){return wC(u,s,a(f),{})}}function Bl(s,a){return function(u,f){var g;if(u===n&&f===n)return a;if(u!==n&&(g=u),f!==n){if(g===n)return f;typeof u=="string"||typeof f=="string"?(u=kn(u),f=kn(f)):(u=Nm(u),f=Nm(f)),g=s(u,f)}return g}}function kh(s){return Sr(function(a){return a=mt(a,Rn(pe())),Pe(function(u){var f=this;return s(a,function(g){return xn(g,f,u)})})})}function $l(s,a){a=a===n?" ":kn(a);var u=a.length;if(u<2)return u?Ih(a,s):a;var f=Ih(a,Cl(s/_s(a)));return vs(a)?Xr(er(f),0,s).join(""):f.slice(0,s)}function jC(s,a,u,f){var g=a&P,v=Mo(s);function b(){for(var I=-1,A=arguments.length,D=-1,L=f.length,F=R(L+A),G=this&&this!==Ht&&this instanceof b?v:s;++D<L;)F[D]=f[D];for(;A--;)F[D++]=arguments[++I];return xn(G,g?u:this,F)}return b}function Xm(s){return function(a,u,f){return f&&typeof f!="number"&&un(a,u,f)&&(u=f=n),a=xr(a),u===n?(u=a,a=0):u=xr(u),f=f===n?a<u?1:-1:xr(f),LC(a,u,f,s)}}function Vl(s){return function(a,u){return typeof a=="string"&&typeof u=="string"||(a=Kn(a),u=Kn(u)),s(a,u)}}function Jm(s,a,u,f,g,v,b,I,A,D){var L=a&se,F=L?b:n,G=L?n:b,oe=L?v:n,ge=L?n:v;a|=L?de:re,a&=~(L?re:de),a&X||(a&=~(P|V));var Oe=[s,a,g,oe,F,ge,G,I,A,D],me=u.apply(n,Oe);return Uh(s)&&uy(me,Oe),me.placeholder=f,cy(me,s,a)}function Dh(s){var a=Ot[s];return function(u,f){if(u=Kn(u),f=f==null?0:Jt(De(f),292),f&&cm(u)){var g=(Ze(u)+"e").split("e"),v=a(g[0]+"e"+(+g[1]+f));return g=(Ze(v)+"e").split("e"),+(g[0]+"e"+(+g[1]-f))}return a(u)}}var GC=Es&&1/ml(new Es([,-0]))[1]==Ve?function(s){return new Es(s)}:Zh;function Qm(s){return function(a){var u=Qt(a);return u==T?ah(a):u==H?hS(a):rS(a,s(a))}}function Tr(s,a,u,f,g,v,b,I){var A=a&V;if(!A&&typeof s!="function")throw new Vn(l);var D=f?f.length:0;if(D||(a&=~(de|re),f=g=n),b=b===n?b:Nt(De(b),0),I=I===n?I:De(I),D-=g?g.length:0,a&re){var L=f,F=g;f=g=n}var G=A?n:Nh(s),oe=[s,a,u,f,g,L,F,v,b,I];if(G&&u1(oe,G),s=oe[0],a=oe[1],u=oe[2],f=oe[3],g=oe[4],I=oe[9]=oe[9]===n?A?0:s.length:Nt(oe[9]-D,0),!I&&a&(se|Z)&&(a&=~(se|Z)),!a||a==P)var ge=zC(s,a,u);else a==se||a==Z?ge=KC(s,a,I):(a==de||a==(P|de))&&!g.length?ge=jC(s,a,u,f):ge=Ul.apply(n,oe);var Oe=G?Lm:uy;return cy(Oe(ge,oe),s,a)}function Zm(s,a,u,f){return s===n||nr(s,bs[u])&&!rt.call(f,u)?a:s}function ey(s,a,u,f,g,v){return _t(s)&&_t(a)&&(v.set(a,s),Nl(s,a,n,ey,v),v.delete(a)),s}function YC(s){return Bo(s)?n:s}function ty(s,a,u,f,g,v){var b=u&C,I=s.length,A=a.length;if(I!=A&&!(b&&A>I))return!1;var D=v.get(s),L=v.get(a);if(D&&L)return D==a&&L==s;var F=-1,G=!0,oe=u&M?new Ri:n;for(v.set(s,a),v.set(a,s);++F<I;){var ge=s[F],Oe=a[F];if(f)var me=b?f(Oe,ge,F,a,s,v):f(ge,Oe,F,s,a,v);if(me!==n){if(me)continue;G=!1;break}if(oe){if(!th(a,function(Fe,$e){if(!So(oe,$e)&&(ge===Fe||g(ge,Fe,u,f,v)))return oe.push($e)})){G=!1;break}}else if(!(ge===Oe||g(ge,Oe,u,f,v))){G=!1;break}}return v.delete(s),v.delete(a),G}function XC(s,a,u,f,g,v,b){switch(u){case je:if(s.byteLength!=a.byteLength||s.byteOffset!=a.byteOffset)return!1;s=s.buffer,a=a.buffer;case Ne:return!(s.byteLength!=a.byteLength||!v(new El(s),new El(a)));case ie:case qe:case x:return nr(+s,+a);case xe:return s.name==a.name&&s.message==a.message;case W:case $:return s==a+"";case T:var I=ah;case H:var A=f&C;if(I||(I=ml),s.size!=a.size&&!A)return!1;var D=b.get(s);if(D)return D==a;f|=M,b.set(s,a);var L=ty(I(s),I(a),f,g,v,b);return b.delete(s),L;case ue:if(ko)return ko.call(s)==ko.call(a)}return!1}function JC(s,a,u,f,g,v){var b=u&C,I=Lh(s),A=I.length,D=Lh(a),L=D.length;if(A!=L&&!b)return!1;for(var F=A;F--;){var G=I[F];if(!(b?G in a:rt.call(a,G)))return!1}var oe=v.get(s),ge=v.get(a);if(oe&&ge)return oe==a&&ge==s;var Oe=!0;v.set(s,a),v.set(a,s);for(var me=b;++F<A;){G=I[F];var Fe=s[G],$e=a[G];if(f)var Ln=b?f($e,Fe,G,a,s,v):f(Fe,$e,G,s,a,v);if(!(Ln===n?Fe===$e||g(Fe,$e,u,f,v):Ln)){Oe=!1;break}me||(me=G=="constructor")}if(Oe&&!me){var cn=s.constructor,On=a.constructor;cn!=On&&"constructor"in s&&"constructor"in a&&!(typeof cn=="function"&&cn instanceof cn&&typeof On=="function"&&On instanceof On)&&(Oe=!1)}return v.delete(s),v.delete(a),Oe}function Sr(s){return $h(ay(s,n,my),s+"")}function Lh(s){return bm(s,Pt,Mh)}function Oh(s){return bm(s,wn,ny)}var Nh=xl?function(s){return xl.get(s)}:Zh;function Hl(s){for(var a=s.name+"",u=Is[a],f=rt.call(Is,a)?u.length:0;f--;){var g=u[f],v=g.func;if(v==null||v==s)return g.name}return a}function As(s){var a=rt.call(y,"placeholder")?y:s;return a.placeholder}function pe(){var s=y.iteratee||Jh;return s=s===Jh?Tm:s,arguments.length?s(arguments[0],arguments[1]):s}function Wl(s,a){var u=s.__data__;return s1(a)?u[typeof a=="string"?"string":"hash"]:u.map}function Ph(s){for(var a=Pt(s),u=a.length;u--;){var f=a[u],g=s[f];a[u]=[f,g,sy(g)]}return a}function Li(s,a){var u=lS(s,a);return Im(u)?u:n}function QC(s){var a=rt.call(s,Ai),u=s[Ai];try{s[Ai]=n;var f=!0}catch{}var g=wl.call(s);return f&&(a?s[Ai]=u:delete s[Ai]),g}var Mh=uh?function(s){return s==null?[]:(s=ot(s),Wr(uh(s),function(a){return lm.call(s,a)}))}:ef,ny=uh?function(s){for(var a=[];s;)qr(a,Mh(s)),s=Il(s);return a}:ef,Qt=ln;(ch&&Qt(new ch(new ArrayBuffer(1)))!=je||Ao&&Qt(new Ao)!=T||hh&&Qt(hh.resolve())!=q||Es&&Qt(new Es)!=H||xo&&Qt(new xo)!=le)&&(Qt=function(s){var a=ln(s),u=a==N?s.constructor:n,f=u?Oi(u):"";if(f)switch(f){case NS:return je;case PS:return T;case MS:return q;case FS:return H;case US:return le}return a});function ZC(s,a,u){for(var f=-1,g=u.length;++f<g;){var v=u[f],b=v.size;switch(v.type){case"drop":s+=b;break;case"dropRight":a-=b;break;case"take":a=Jt(a,s+b);break;case"takeRight":s=Nt(s,a-b);break}}return{start:s,end:a}}function e1(s){var a=s.match(oT);return a?a[1].split(aT):[]}function ry(s,a,u){a=Yr(a,s);for(var f=-1,g=a.length,v=!1;++f<g;){var b=hr(a[f]);if(!(v=s!=null&&u(s,b)))break;s=s[b]}return v||++f!=g?v:(g=s==null?0:s.length,!!g&&Xl(g)&&Cr(b,g)&&(Se(s)||Ni(s)))}function t1(s){var a=s.length,u=new s.constructor(a);return a&&typeof s[0]=="string"&&rt.call(s,"index")&&(u.index=s.index,u.input=s.input),u}function iy(s){return typeof s.constructor=="function"&&!Fo(s)?Ts(Il(s)):{}}function n1(s,a,u){var f=s.constructor;switch(a){case Ne:return Rh(s);case ie:case qe:return new f(+s);case je:return BC(s,u);case Ge:case nt:case an:case lr:case ps:case wr:case gs:case Vt:case yn:return $m(s,u);case T:return new f;case x:case $:return new f(s);case W:return $C(s);case H:return new f;case ue:return VC(s)}}function r1(s,a){var u=a.length;if(!u)return s;var f=u-1;return a[f]=(u>1?"& ":"")+a[f],a=a.join(u>2?", ":" "),s.replace(sT,`{
/* [wrapped with `+a+`] */
`)}function i1(s){return Se(s)||Ni(s)||!!(um&&s&&s[um])}function Cr(s,a){var u=typeof s;return a=a==null?Ue:a,!!a&&(u=="number"||u!="symbol"&&mT.test(s))&&s>-1&&s%1==0&&s<a}function un(s,a,u){if(!_t(u))return!1;var f=typeof a;return(f=="number"?_n(u)&&Cr(a,u.length):f=="string"&&a in u)?nr(u[a],s):!1}function Fh(s,a){if(Se(s))return!1;var u=typeof s;return u=="number"||u=="symbol"||u=="boolean"||s==null||Dn(s)?!0:tT.test(s)||!eT.test(s)||a!=null&&s in ot(a)}function s1(s){var a=typeof s;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?s!=="__proto__":s===null}function Uh(s){var a=Hl(s),u=y[a];if(typeof u!="function"||!(a in Be.prototype))return!1;if(s===u)return!0;var f=Nh(u);return!!f&&s===f[0]}function o1(s){return!!sm&&sm in s}var a1=vl?Ar:tf;function Fo(s){var a=s&&s.constructor,u=typeof a=="function"&&a.prototype||bs;return s===u}function sy(s){return s===s&&!_t(s)}function oy(s,a){return function(u){return u==null?!1:u[s]===a&&(a!==n||s in ot(u))}}function l1(s){var a=Gl(s,function(f){return u.size===d&&u.clear(),f}),u=a.cache;return a}function u1(s,a){var u=s[1],f=a[1],g=u|f,v=g<(P|V|z),b=f==z&&u==se||f==z&&u==Ie&&s[7].length<=a[8]||f==(z|Ie)&&a[7].length<=a[8]&&u==se;if(!(v||b))return s;f&P&&(s[2]=a[2],g|=u&P?0:X);var I=a[3];if(I){var A=s[3];s[3]=A?Hm(A,I,a[4]):I,s[4]=A?zr(s[3],p):a[4]}return I=a[5],I&&(A=s[5],s[5]=A?Wm(A,I,a[6]):I,s[6]=A?zr(s[5],p):a[6]),I=a[7],I&&(s[7]=I),f&z&&(s[8]=s[8]==null?a[8]:Jt(s[8],a[8])),s[9]==null&&(s[9]=a[9]),s[0]=a[0],s[1]=g,s}function c1(s){var a=[];if(s!=null)for(var u in ot(s))a.push(u);return a}function h1(s){return wl.call(s)}function ay(s,a,u){return a=Nt(a===n?s.length-1:a,0),function(){for(var f=arguments,g=-1,v=Nt(f.length-a,0),b=R(v);++g<v;)b[g]=f[a+g];g=-1;for(var I=R(a+1);++g<a;)I[g]=f[g];return I[a]=u(b),xn(s,this,I)}}function ly(s,a){return a.length<2?s:Di(s,qn(a,0,-1))}function f1(s,a){for(var u=s.length,f=Jt(a.length,u),g=vn(s);f--;){var v=a[f];s[f]=Cr(v,u)?g[v]:n}return s}function Bh(s,a){if(!(a==="constructor"&&typeof s[a]=="function")&&a!="__proto__")return s[a]}var uy=hy(Lm),Uo=AS||function(s,a){return Ht.setTimeout(s,a)},$h=hy(PC);function cy(s,a,u){var f=a+"";return $h(s,r1(f,d1(e1(f),u)))}function hy(s){var a=0,u=0;return function(){var f=DS(),g=Je-(f-u);if(u=f,g>0){if(++a>=ae)return arguments[0]}else a=0;return s.apply(n,arguments)}}function ql(s,a){var u=-1,f=s.length,g=f-1;for(a=a===n?f:a;++u<a;){var v=Eh(u,g),b=s[v];s[v]=s[u],s[u]=b}return s.length=a,s}var fy=l1(function(s){var a=[];return s.charCodeAt(0)===46&&a.push(""),s.replace(nT,function(u,f,g,v){a.push(g?v.replace(cT,"$1"):f||u)}),a});function hr(s){if(typeof s=="string"||Dn(s))return s;var a=s+"";return a=="0"&&1/s==-Ve?"-0":a}function Oi(s){if(s!=null){try{return _l.call(s)}catch{}try{return s+""}catch{}}return""}function d1(s,a){return $n(To,function(u){var f="_."+u[0];a&u[1]&&!pl(s,f)&&s.push(f)}),s.sort()}function dy(s){if(s instanceof Be)return s.clone();var a=new Hn(s.__wrapped__,s.__chain__);return a.__actions__=vn(s.__actions__),a.__index__=s.__index__,a.__values__=s.__values__,a}function p1(s,a,u){(u?un(s,a,u):a===n)?a=1:a=Nt(De(a),0);var f=s==null?0:s.length;if(!f||a<1)return[];for(var g=0,v=0,b=R(Cl(f/a));g<f;)b[v++]=qn(s,g,g+=a);return b}function g1(s){for(var a=-1,u=s==null?0:s.length,f=0,g=[];++a<u;){var v=s[a];v&&(g[f++]=v)}return g}function m1(){var s=arguments.length;if(!s)return[];for(var a=R(s-1),u=arguments[0],f=s;f--;)a[f-1]=arguments[f];return qr(Se(u)?vn(u):[u],Wt(a,1))}var y1=Pe(function(s,a){return It(s)?Lo(s,Wt(a,1,It,!0)):[]}),v1=Pe(function(s,a){var u=zn(a);return It(u)&&(u=n),It(s)?Lo(s,Wt(a,1,It,!0),pe(u,2)):[]}),_1=Pe(function(s,a){var u=zn(a);return It(u)&&(u=n),It(s)?Lo(s,Wt(a,1,It,!0),n,u):[]});function w1(s,a,u){var f=s==null?0:s.length;return f?(a=u||a===n?1:De(a),qn(s,a<0?0:a,f)):[]}function b1(s,a,u){var f=s==null?0:s.length;return f?(a=u||a===n?1:De(a),a=f-a,qn(s,0,a<0?0:a)):[]}function E1(s,a){return s&&s.length?Ml(s,pe(a,3),!0,!0):[]}function I1(s,a){return s&&s.length?Ml(s,pe(a,3),!0):[]}function T1(s,a,u,f){var g=s==null?0:s.length;return g?(u&&typeof u!="number"&&un(s,a,u)&&(u=0,f=g),mC(s,a,u,f)):[]}function py(s,a,u){var f=s==null?0:s.length;if(!f)return-1;var g=u==null?0:De(u);return g<0&&(g=Nt(f+g,0)),gl(s,pe(a,3),g)}function gy(s,a,u){var f=s==null?0:s.length;if(!f)return-1;var g=f-1;return u!==n&&(g=De(u),g=u<0?Nt(f+g,0):Jt(g,f-1)),gl(s,pe(a,3),g,!0)}function my(s){var a=s==null?0:s.length;return a?Wt(s,1):[]}function S1(s){var a=s==null?0:s.length;return a?Wt(s,Ve):[]}function C1(s,a){var u=s==null?0:s.length;return u?(a=a===n?1:De(a),Wt(s,a)):[]}function A1(s){for(var a=-1,u=s==null?0:s.length,f={};++a<u;){var g=s[a];f[g[0]]=g[1]}return f}function yy(s){return s&&s.length?s[0]:n}function x1(s,a,u){var f=s==null?0:s.length;if(!f)return-1;var g=u==null?0:De(u);return g<0&&(g=Nt(f+g,0)),ys(s,a,g)}function R1(s){var a=s==null?0:s.length;return a?qn(s,0,-1):[]}var k1=Pe(function(s){var a=mt(s,Ah);return a.length&&a[0]===s[0]?yh(a):[]}),D1=Pe(function(s){var a=zn(s),u=mt(s,Ah);return a===zn(u)?a=n:u.pop(),u.length&&u[0]===s[0]?yh(u,pe(a,2)):[]}),L1=Pe(function(s){var a=zn(s),u=mt(s,Ah);return a=typeof a=="function"?a:n,a&&u.pop(),u.length&&u[0]===s[0]?yh(u,n,a):[]});function O1(s,a){return s==null?"":RS.call(s,a)}function zn(s){var a=s==null?0:s.length;return a?s[a-1]:n}function N1(s,a,u){var f=s==null?0:s.length;if(!f)return-1;var g=f;return u!==n&&(g=De(u),g=g<0?Nt(f+g,0):Jt(g,f-1)),a===a?dS(s,a,g):gl(s,Jg,g,!0)}function P1(s,a){return s&&s.length?xm(s,De(a)):n}var M1=Pe(vy);function vy(s,a){return s&&s.length&&a&&a.length?bh(s,a):s}function F1(s,a,u){return s&&s.length&&a&&a.length?bh(s,a,pe(u,2)):s}function U1(s,a,u){return s&&s.length&&a&&a.length?bh(s,a,n,u):s}var B1=Sr(function(s,a){var u=s==null?0:s.length,f=dh(s,a);return Dm(s,mt(a,function(g){return Cr(g,u)?+g:g}).sort(Vm)),f});function $1(s,a){var u=[];if(!(s&&s.length))return u;var f=-1,g=[],v=s.length;for(a=pe(a,3);++f<v;){var b=s[f];a(b,f,s)&&(u.push(b),g.push(f))}return Dm(s,g),u}function Vh(s){return s==null?s:OS.call(s)}function V1(s,a,u){var f=s==null?0:s.length;return f?(u&&typeof u!="number"&&un(s,a,u)?(a=0,u=f):(a=a==null?0:De(a),u=u===n?f:De(u)),qn(s,a,u)):[]}function H1(s,a){return Pl(s,a)}function W1(s,a,u){return Th(s,a,pe(u,2))}function q1(s,a){var u=s==null?0:s.length;if(u){var f=Pl(s,a);if(f<u&&nr(s[f],a))return f}return-1}function z1(s,a){return Pl(s,a,!0)}function K1(s,a,u){return Th(s,a,pe(u,2),!0)}function j1(s,a){var u=s==null?0:s.length;if(u){var f=Pl(s,a,!0)-1;if(nr(s[f],a))return f}return-1}function G1(s){return s&&s.length?Om(s):[]}function Y1(s,a){return s&&s.length?Om(s,pe(a,2)):[]}function X1(s){var a=s==null?0:s.length;return a?qn(s,1,a):[]}function J1(s,a,u){return s&&s.length?(a=u||a===n?1:De(a),qn(s,0,a<0?0:a)):[]}function Q1(s,a,u){var f=s==null?0:s.length;return f?(a=u||a===n?1:De(a),a=f-a,qn(s,a<0?0:a,f)):[]}function Z1(s,a){return s&&s.length?Ml(s,pe(a,3),!1,!0):[]}function eA(s,a){return s&&s.length?Ml(s,pe(a,3)):[]}var tA=Pe(function(s){return Gr(Wt(s,1,It,!0))}),nA=Pe(function(s){var a=zn(s);return It(a)&&(a=n),Gr(Wt(s,1,It,!0),pe(a,2))}),rA=Pe(function(s){var a=zn(s);return a=typeof a=="function"?a:n,Gr(Wt(s,1,It,!0),n,a)});function iA(s){return s&&s.length?Gr(s):[]}function sA(s,a){return s&&s.length?Gr(s,pe(a,2)):[]}function oA(s,a){return a=typeof a=="function"?a:n,s&&s.length?Gr(s,n,a):[]}function Hh(s){if(!(s&&s.length))return[];var a=0;return s=Wr(s,function(u){if(It(u))return a=Nt(u.length,a),!0}),sh(a,function(u){return mt(s,nh(u))})}function _y(s,a){if(!(s&&s.length))return[];var u=Hh(s);return a==null?u:mt(u,function(f){return xn(a,n,f)})}var aA=Pe(function(s,a){return It(s)?Lo(s,a):[]}),lA=Pe(function(s){return Ch(Wr(s,It))}),uA=Pe(function(s){var a=zn(s);return It(a)&&(a=n),Ch(Wr(s,It),pe(a,2))}),cA=Pe(function(s){var a=zn(s);return a=typeof a=="function"?a:n,Ch(Wr(s,It),n,a)}),hA=Pe(Hh);function fA(s,a){return Fm(s||[],a||[],Do)}function dA(s,a){return Fm(s||[],a||[],Po)}var pA=Pe(function(s){var a=s.length,u=a>1?s[a-1]:n;return u=typeof u=="function"?(s.pop(),u):n,_y(s,u)});function wy(s){var a=y(s);return a.__chain__=!0,a}function gA(s,a){return a(s),s}function zl(s,a){return a(s)}var mA=Sr(function(s){var a=s.length,u=a?s[0]:0,f=this.__wrapped__,g=function(v){return dh(v,s)};return a>1||this.__actions__.length||!(f instanceof Be)||!Cr(u)?this.thru(g):(f=f.slice(u,+u+(a?1:0)),f.__actions__.push({func:zl,args:[g],thisArg:n}),new Hn(f,this.__chain__).thru(function(v){return a&&!v.length&&v.push(n),v}))});function yA(){return wy(this)}function vA(){return new Hn(this.value(),this.__chain__)}function _A(){this.__values__===n&&(this.__values__=Ny(this.value()));var s=this.__index__>=this.__values__.length,a=s?n:this.__values__[this.__index__++];return{done:s,value:a}}function wA(){return this}function bA(s){for(var a,u=this;u instanceof kl;){var f=dy(u);f.__index__=0,f.__values__=n,a?g.__wrapped__=f:a=f;var g=f;u=u.__wrapped__}return g.__wrapped__=s,a}function EA(){var s=this.__wrapped__;if(s instanceof Be){var a=s;return this.__actions__.length&&(a=new Be(this)),a=a.reverse(),a.__actions__.push({func:zl,args:[Vh],thisArg:n}),new Hn(a,this.__chain__)}return this.thru(Vh)}function IA(){return Mm(this.__wrapped__,this.__actions__)}var TA=Fl(function(s,a,u){rt.call(s,u)?++s[u]:Ir(s,u,1)});function SA(s,a,u){var f=Se(s)?Yg:gC;return u&&un(s,a,u)&&(a=n),f(s,pe(a,3))}function CA(s,a){var u=Se(s)?Wr:_m;return u(s,pe(a,3))}var AA=jm(py),xA=jm(gy);function RA(s,a){return Wt(Kl(s,a),1)}function kA(s,a){return Wt(Kl(s,a),Ve)}function DA(s,a,u){return u=u===n?1:De(u),Wt(Kl(s,a),u)}function by(s,a){var u=Se(s)?$n:jr;return u(s,pe(a,3))}function Ey(s,a){var u=Se(s)?XT:vm;return u(s,pe(a,3))}var LA=Fl(function(s,a,u){rt.call(s,u)?s[u].push(a):Ir(s,u,[a])});function OA(s,a,u,f){s=_n(s)?s:Rs(s),u=u&&!f?De(u):0;var g=s.length;return u<0&&(u=Nt(g+u,0)),Jl(s)?u<=g&&s.indexOf(a,u)>-1:!!g&&ys(s,a,u)>-1}var NA=Pe(function(s,a,u){var f=-1,g=typeof a=="function",v=_n(s)?R(s.length):[];return jr(s,function(b){v[++f]=g?xn(a,b,u):Oo(b,a,u)}),v}),PA=Fl(function(s,a,u){Ir(s,u,a)});function Kl(s,a){var u=Se(s)?mt:Sm;return u(s,pe(a,3))}function MA(s,a,u,f){return s==null?[]:(Se(a)||(a=a==null?[]:[a]),u=f?n:u,Se(u)||(u=u==null?[]:[u]),Rm(s,a,u))}var FA=Fl(function(s,a,u){s[u?0:1].push(a)},function(){return[[],[]]});function UA(s,a,u){var f=Se(s)?eh:Zg,g=arguments.length<3;return f(s,pe(a,4),u,g,jr)}function BA(s,a,u){var f=Se(s)?JT:Zg,g=arguments.length<3;return f(s,pe(a,4),u,g,vm)}function $A(s,a){var u=Se(s)?Wr:_m;return u(s,Yl(pe(a,3)))}function VA(s){var a=Se(s)?pm:OC;return a(s)}function HA(s,a,u){(u?un(s,a,u):a===n)?a=1:a=De(a);var f=Se(s)?cC:NC;return f(s,a)}function WA(s){var a=Se(s)?hC:MC;return a(s)}function qA(s){if(s==null)return 0;if(_n(s))return Jl(s)?_s(s):s.length;var a=Qt(s);return a==T||a==H?s.size:_h(s).length}function zA(s,a,u){var f=Se(s)?th:FC;return u&&un(s,a,u)&&(a=n),f(s,pe(a,3))}var KA=Pe(function(s,a){if(s==null)return[];var u=a.length;return u>1&&un(s,a[0],a[1])?a=[]:u>2&&un(a[0],a[1],a[2])&&(a=[a[0]]),Rm(s,Wt(a,1),[])}),jl=CS||function(){return Ht.Date.now()};function jA(s,a){if(typeof a!="function")throw new Vn(l);return s=De(s),function(){if(--s<1)return a.apply(this,arguments)}}function Iy(s,a,u){return a=u?n:a,a=s&&a==null?s.length:a,Tr(s,z,n,n,n,n,a)}function Ty(s,a){var u;if(typeof a!="function")throw new Vn(l);return s=De(s),function(){return--s>0&&(u=a.apply(this,arguments)),s<=1&&(a=n),u}}var Wh=Pe(function(s,a,u){var f=P;if(u.length){var g=zr(u,As(Wh));f|=de}return Tr(s,f,a,u,g)}),Sy=Pe(function(s,a,u){var f=P|V;if(u.length){var g=zr(u,As(Sy));f|=de}return Tr(a,f,s,u,g)});function Cy(s,a,u){a=u?n:a;var f=Tr(s,se,n,n,n,n,n,a);return f.placeholder=Cy.placeholder,f}function Ay(s,a,u){a=u?n:a;var f=Tr(s,Z,n,n,n,n,n,a);return f.placeholder=Ay.placeholder,f}function xy(s,a,u){var f,g,v,b,I,A,D=0,L=!1,F=!1,G=!0;if(typeof s!="function")throw new Vn(l);a=Kn(a)||0,_t(u)&&(L=!!u.leading,F="maxWait"in u,v=F?Nt(Kn(u.maxWait)||0,a):v,G="trailing"in u?!!u.trailing:G);function oe(Tt){var rr=f,Rr=g;return f=g=n,D=Tt,b=s.apply(Rr,rr),b}function ge(Tt){return D=Tt,I=Uo(Fe,a),L?oe(Tt):b}function Oe(Tt){var rr=Tt-A,Rr=Tt-D,jy=a-rr;return F?Jt(jy,v-Rr):jy}function me(Tt){var rr=Tt-A,Rr=Tt-D;return A===n||rr>=a||rr<0||F&&Rr>=v}function Fe(){var Tt=jl();if(me(Tt))return $e(Tt);I=Uo(Fe,Oe(Tt))}function $e(Tt){return I=n,G&&f?oe(Tt):(f=g=n,b)}function Ln(){I!==n&&Um(I),D=0,f=A=g=I=n}function cn(){return I===n?b:$e(jl())}function On(){var Tt=jl(),rr=me(Tt);if(f=arguments,g=this,A=Tt,rr){if(I===n)return ge(A);if(F)return Um(I),I=Uo(Fe,a),oe(A)}return I===n&&(I=Uo(Fe,a)),b}return On.cancel=Ln,On.flush=cn,On}var GA=Pe(function(s,a){return ym(s,1,a)}),YA=Pe(function(s,a,u){return ym(s,Kn(a)||0,u)});function XA(s){return Tr(s,ye)}function Gl(s,a){if(typeof s!="function"||a!=null&&typeof a!="function")throw new Vn(l);var u=function(){var f=arguments,g=a?a.apply(this,f):f[0],v=u.cache;if(v.has(g))return v.get(g);var b=s.apply(this,f);return u.cache=v.set(g,b)||v,b};return u.cache=new(Gl.Cache||Er),u}Gl.Cache=Er;function Yl(s){if(typeof s!="function")throw new Vn(l);return function(){var a=arguments;switch(a.length){case 0:return!s.call(this);case 1:return!s.call(this,a[0]);case 2:return!s.call(this,a[0],a[1]);case 3:return!s.call(this,a[0],a[1],a[2])}return!s.apply(this,a)}}function JA(s){return Ty(2,s)}var QA=UC(function(s,a){a=a.length==1&&Se(a[0])?mt(a[0],Rn(pe())):mt(Wt(a,1),Rn(pe()));var u=a.length;return Pe(function(f){for(var g=-1,v=Jt(f.length,u);++g<v;)f[g]=a[g].call(this,f[g]);return xn(s,this,f)})}),qh=Pe(function(s,a){var u=zr(a,As(qh));return Tr(s,de,n,a,u)}),Ry=Pe(function(s,a){var u=zr(a,As(Ry));return Tr(s,re,n,a,u)}),ZA=Sr(function(s,a){return Tr(s,Ie,n,n,n,a)});function ex(s,a){if(typeof s!="function")throw new Vn(l);return a=a===n?a:De(a),Pe(s,a)}function tx(s,a){if(typeof s!="function")throw new Vn(l);return a=a==null?0:Nt(De(a),0),Pe(function(u){var f=u[a],g=Xr(u,0,a);return f&&qr(g,f),xn(s,this,g)})}function nx(s,a,u){var f=!0,g=!0;if(typeof s!="function")throw new Vn(l);return _t(u)&&(f="leading"in u?!!u.leading:f,g="trailing"in u?!!u.trailing:g),xy(s,a,{leading:f,maxWait:a,trailing:g})}function rx(s){return Iy(s,1)}function ix(s,a){return qh(xh(a),s)}function sx(){if(!arguments.length)return[];var s=arguments[0];return Se(s)?s:[s]}function ox(s){return Wn(s,E)}function ax(s,a){return a=typeof a=="function"?a:n,Wn(s,E,a)}function lx(s){return Wn(s,m|E)}function ux(s,a){return a=typeof a=="function"?a:n,Wn(s,m|E,a)}function cx(s,a){return a==null||mm(s,a,Pt(a))}function nr(s,a){return s===a||s!==s&&a!==a}var hx=Vl(mh),fx=Vl(function(s,a){return s>=a}),Ni=Em(function(){return arguments}())?Em:function(s){return wt(s)&&rt.call(s,"callee")&&!lm.call(s,"callee")},Se=R.isArray,dx=Wg?Rn(Wg):bC;function _n(s){return s!=null&&Xl(s.length)&&!Ar(s)}function It(s){return wt(s)&&_n(s)}function px(s){return s===!0||s===!1||wt(s)&&ln(s)==ie}var Jr=xS||tf,gx=qg?Rn(qg):EC;function mx(s){return wt(s)&&s.nodeType===1&&!Bo(s)}function yx(s){if(s==null)return!0;if(_n(s)&&(Se(s)||typeof s=="string"||typeof s.splice=="function"||Jr(s)||xs(s)||Ni(s)))return!s.length;var a=Qt(s);if(a==T||a==H)return!s.size;if(Fo(s))return!_h(s).length;for(var u in s)if(rt.call(s,u))return!1;return!0}function vx(s,a){return No(s,a)}function _x(s,a,u){u=typeof u=="function"?u:n;var f=u?u(s,a):n;return f===n?No(s,a,n,u):!!f}function zh(s){if(!wt(s))return!1;var a=ln(s);return a==xe||a==st||typeof s.message=="string"&&typeof s.name=="string"&&!Bo(s)}function wx(s){return typeof s=="number"&&cm(s)}function Ar(s){if(!_t(s))return!1;var a=ln(s);return a==_e||a==w||a==j||a==Y}function ky(s){return typeof s=="number"&&s==De(s)}function Xl(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=Ue}function _t(s){var a=typeof s;return s!=null&&(a=="object"||a=="function")}function wt(s){return s!=null&&typeof s=="object"}var Dy=zg?Rn(zg):TC;function bx(s,a){return s===a||vh(s,a,Ph(a))}function Ex(s,a,u){return u=typeof u=="function"?u:n,vh(s,a,Ph(a),u)}function Ix(s){return Ly(s)&&s!=+s}function Tx(s){if(a1(s))throw new Te(o);return Im(s)}function Sx(s){return s===null}function Cx(s){return s==null}function Ly(s){return typeof s=="number"||wt(s)&&ln(s)==x}function Bo(s){if(!wt(s)||ln(s)!=N)return!1;var a=Il(s);if(a===null)return!0;var u=rt.call(a,"constructor")&&a.constructor;return typeof u=="function"&&u instanceof u&&_l.call(u)==ES}var Kh=Kg?Rn(Kg):SC;function Ax(s){return ky(s)&&s>=-Ue&&s<=Ue}var Oy=jg?Rn(jg):CC;function Jl(s){return typeof s=="string"||!Se(s)&&wt(s)&&ln(s)==$}function Dn(s){return typeof s=="symbol"||wt(s)&&ln(s)==ue}var xs=Gg?Rn(Gg):AC;function xx(s){return s===n}function Rx(s){return wt(s)&&Qt(s)==le}function kx(s){return wt(s)&&ln(s)==ve}var Dx=Vl(wh),Lx=Vl(function(s,a){return s<=a});function Ny(s){if(!s)return[];if(_n(s))return Jl(s)?er(s):vn(s);if(Co&&s[Co])return cS(s[Co]());var a=Qt(s),u=a==T?ah:a==H?ml:Rs;return u(s)}function xr(s){if(!s)return s===0?s:0;if(s=Kn(s),s===Ve||s===-Ve){var a=s<0?-1:1;return a*on}return s===s?s:0}function De(s){var a=xr(s),u=a%1;return a===a?u?a-u:a:0}function Py(s){return s?ki(De(s),0,St):0}function Kn(s){if(typeof s=="number")return s;if(Dn(s))return Zn;if(_t(s)){var a=typeof s.valueOf=="function"?s.valueOf():s;s=_t(a)?a+"":a}if(typeof s!="string")return s===0?s:+s;s=em(s);var u=dT.test(s);return u||gT.test(s)?jT(s.slice(2),u?2:8):fT.test(s)?Zn:+s}function My(s){return cr(s,wn(s))}function Ox(s){return s?ki(De(s),-Ue,Ue):s===0?s:0}function Ze(s){return s==null?"":kn(s)}var Nx=Ss(function(s,a){if(Fo(a)||_n(a)){cr(a,Pt(a),s);return}for(var u in a)rt.call(a,u)&&Do(s,u,a[u])}),Fy=Ss(function(s,a){cr(a,wn(a),s)}),Ql=Ss(function(s,a,u,f){cr(a,wn(a),s,f)}),Px=Ss(function(s,a,u,f){cr(a,Pt(a),s,f)}),Mx=Sr(dh);function Fx(s,a){var u=Ts(s);return a==null?u:gm(u,a)}var Ux=Pe(function(s,a){s=ot(s);var u=-1,f=a.length,g=f>2?a[2]:n;for(g&&un(a[0],a[1],g)&&(f=1);++u<f;)for(var v=a[u],b=wn(v),I=-1,A=b.length;++I<A;){var D=b[I],L=s[D];(L===n||nr(L,bs[D])&&!rt.call(s,D))&&(s[D]=v[D])}return s}),Bx=Pe(function(s){return s.push(n,ey),xn(Uy,n,s)});function $x(s,a){return Xg(s,pe(a,3),ur)}function Vx(s,a){return Xg(s,pe(a,3),gh)}function Hx(s,a){return s==null?s:ph(s,pe(a,3),wn)}function Wx(s,a){return s==null?s:wm(s,pe(a,3),wn)}function qx(s,a){return s&&ur(s,pe(a,3))}function zx(s,a){return s&&gh(s,pe(a,3))}function Kx(s){return s==null?[]:Ol(s,Pt(s))}function jx(s){return s==null?[]:Ol(s,wn(s))}function jh(s,a,u){var f=s==null?n:Di(s,a);return f===n?u:f}function Gx(s,a){return s!=null&&ry(s,a,yC)}function Gh(s,a){return s!=null&&ry(s,a,vC)}var Yx=Ym(function(s,a,u){a!=null&&typeof a.toString!="function"&&(a=wl.call(a)),s[a]=u},Xh(bn)),Xx=Ym(function(s,a,u){a!=null&&typeof a.toString!="function"&&(a=wl.call(a)),rt.call(s,a)?s[a].push(u):s[a]=[u]},pe),Jx=Pe(Oo);function Pt(s){return _n(s)?dm(s):_h(s)}function wn(s){return _n(s)?dm(s,!0):xC(s)}function Qx(s,a){var u={};return a=pe(a,3),ur(s,function(f,g,v){Ir(u,a(f,g,v),f)}),u}function Zx(s,a){var u={};return a=pe(a,3),ur(s,function(f,g,v){Ir(u,g,a(f,g,v))}),u}var eR=Ss(function(s,a,u){Nl(s,a,u)}),Uy=Ss(function(s,a,u,f){Nl(s,a,u,f)}),tR=Sr(function(s,a){var u={};if(s==null)return u;var f=!1;a=mt(a,function(v){return v=Yr(v,s),f||(f=v.length>1),v}),cr(s,Oh(s),u),f&&(u=Wn(u,m|_|E,YC));for(var g=a.length;g--;)Sh(u,a[g]);return u});function nR(s,a){return By(s,Yl(pe(a)))}var rR=Sr(function(s,a){return s==null?{}:kC(s,a)});function By(s,a){if(s==null)return{};var u=mt(Oh(s),function(f){return[f]});return a=pe(a),km(s,u,function(f,g){return a(f,g[0])})}function iR(s,a,u){a=Yr(a,s);var f=-1,g=a.length;for(g||(g=1,s=n);++f<g;){var v=s==null?n:s[hr(a[f])];v===n&&(f=g,v=u),s=Ar(v)?v.call(s):v}return s}function sR(s,a,u){return s==null?s:Po(s,a,u)}function oR(s,a,u,f){return f=typeof f=="function"?f:n,s==null?s:Po(s,a,u,f)}var $y=Qm(Pt),Vy=Qm(wn);function aR(s,a,u){var f=Se(s),g=f||Jr(s)||xs(s);if(a=pe(a,4),u==null){var v=s&&s.constructor;g?u=f?new v:[]:_t(s)?u=Ar(v)?Ts(Il(s)):{}:u={}}return(g?$n:ur)(s,function(b,I,A){return a(u,b,I,A)}),u}function lR(s,a){return s==null?!0:Sh(s,a)}function uR(s,a,u){return s==null?s:Pm(s,a,xh(u))}function cR(s,a,u,f){return f=typeof f=="function"?f:n,s==null?s:Pm(s,a,xh(u),f)}function Rs(s){return s==null?[]:oh(s,Pt(s))}function hR(s){return s==null?[]:oh(s,wn(s))}function fR(s,a,u){return u===n&&(u=a,a=n),u!==n&&(u=Kn(u),u=u===u?u:0),a!==n&&(a=Kn(a),a=a===a?a:0),ki(Kn(s),a,u)}function dR(s,a,u){return a=xr(a),u===n?(u=a,a=0):u=xr(u),s=Kn(s),_C(s,a,u)}function pR(s,a,u){if(u&&typeof u!="boolean"&&un(s,a,u)&&(a=u=n),u===n&&(typeof a=="boolean"?(u=a,a=n):typeof s=="boolean"&&(u=s,s=n)),s===n&&a===n?(s=0,a=1):(s=xr(s),a===n?(a=s,s=0):a=xr(a)),s>a){var f=s;s=a,a=f}if(u||s%1||a%1){var g=hm();return Jt(s+g*(a-s+KT("1e-"+((g+"").length-1))),a)}return Eh(s,a)}var gR=Cs(function(s,a,u){return a=a.toLowerCase(),s+(u?Hy(a):a)});function Hy(s){return Yh(Ze(s).toLowerCase())}function Wy(s){return s=Ze(s),s&&s.replace(yT,sS).replace(MT,"")}function mR(s,a,u){s=Ze(s),a=kn(a);var f=s.length;u=u===n?f:ki(De(u),0,f);var g=u;return u-=a.length,u>=0&&s.slice(u,g)==a}function yR(s){return s=Ze(s),s&&JI.test(s)?s.replace(wg,oS):s}function vR(s){return s=Ze(s),s&&rT.test(s)?s.replace(qc,"\\$&"):s}var _R=Cs(function(s,a,u){return s+(u?"-":"")+a.toLowerCase()}),wR=Cs(function(s,a,u){return s+(u?" ":"")+a.toLowerCase()}),bR=Km("toLowerCase");function ER(s,a,u){s=Ze(s),a=De(a);var f=a?_s(s):0;if(!a||f>=a)return s;var g=(a-f)/2;return $l(Al(g),u)+s+$l(Cl(g),u)}function IR(s,a,u){s=Ze(s),a=De(a);var f=a?_s(s):0;return a&&f<a?s+$l(a-f,u):s}function TR(s,a,u){s=Ze(s),a=De(a);var f=a?_s(s):0;return a&&f<a?$l(a-f,u)+s:s}function SR(s,a,u){return u||a==null?a=0:a&&(a=+a),LS(Ze(s).replace(zc,""),a||0)}function CR(s,a,u){return(u?un(s,a,u):a===n)?a=1:a=De(a),Ih(Ze(s),a)}function AR(){var s=arguments,a=Ze(s[0]);return s.length<3?a:a.replace(s[1],s[2])}var xR=Cs(function(s,a,u){return s+(u?"_":"")+a.toLowerCase()});function RR(s,a,u){return u&&typeof u!="number"&&un(s,a,u)&&(a=u=n),u=u===n?St:u>>>0,u?(s=Ze(s),s&&(typeof a=="string"||a!=null&&!Kh(a))&&(a=kn(a),!a&&vs(s))?Xr(er(s),0,u):s.split(a,u)):[]}var kR=Cs(function(s,a,u){return s+(u?" ":"")+Yh(a)});function DR(s,a,u){return s=Ze(s),u=u==null?0:ki(De(u),0,s.length),a=kn(a),s.slice(u,u+a.length)==a}function LR(s,a,u){var f=y.templateSettings;u&&un(s,a,u)&&(a=n),s=Ze(s),a=Ql({},a,f,Zm);var g=Ql({},a.imports,f.imports,Zm),v=Pt(g),b=oh(g,v),I,A,D=0,L=a.interpolate||hl,F="__p += '",G=lh((a.escape||hl).source+"|"+L.source+"|"+(L===bg?hT:hl).source+"|"+(a.evaluate||hl).source+"|$","g"),oe="//# sourceURL="+(rt.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++VT+"]")+`
`;s.replace(G,function(me,Fe,$e,Ln,cn,On){return $e||($e=Ln),F+=s.slice(D,On).replace(vT,aS),Fe&&(I=!0,F+=`' +
__e(`+Fe+`) +
'`),cn&&(A=!0,F+=`';
`+cn+`;
__p += '`),$e&&(F+=`' +
((__t = (`+$e+`)) == null ? '' : __t) +
'`),D=On+me.length,me}),F+=`';
`;var ge=rt.call(a,"variable")&&a.variable;if(!ge)F=`with (obj) {
`+F+`
}
`;else if(uT.test(ge))throw new Te(c);F=(A?F.replace(cl,""):F).replace(GI,"$1").replace(YI,"$1;"),F="function("+(ge||"obj")+`) {
`+(ge?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(I?", __e = _.escape":"")+(A?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+F+`return __p
}`;var Oe=zy(function(){return Ye(v,oe+"return "+F).apply(n,b)});if(Oe.source=F,zh(Oe))throw Oe;return Oe}function OR(s){return Ze(s).toLowerCase()}function NR(s){return Ze(s).toUpperCase()}function PR(s,a,u){if(s=Ze(s),s&&(u||a===n))return em(s);if(!s||!(a=kn(a)))return s;var f=er(s),g=er(a),v=tm(f,g),b=nm(f,g)+1;return Xr(f,v,b).join("")}function MR(s,a,u){if(s=Ze(s),s&&(u||a===n))return s.slice(0,im(s)+1);if(!s||!(a=kn(a)))return s;var f=er(s),g=nm(f,er(a))+1;return Xr(f,0,g).join("")}function FR(s,a,u){if(s=Ze(s),s&&(u||a===n))return s.replace(zc,"");if(!s||!(a=kn(a)))return s;var f=er(s),g=tm(f,er(a));return Xr(f,g).join("")}function UR(s,a){var u=Ke,f=it;if(_t(a)){var g="separator"in a?a.separator:g;u="length"in a?De(a.length):u,f="omission"in a?kn(a.omission):f}s=Ze(s);var v=s.length;if(vs(s)){var b=er(s);v=b.length}if(u>=v)return s;var I=u-_s(f);if(I<1)return f;var A=b?Xr(b,0,I).join(""):s.slice(0,I);if(g===n)return A+f;if(b&&(I+=A.length-I),Kh(g)){if(s.slice(I).search(g)){var D,L=A;for(g.global||(g=lh(g.source,Ze(Eg.exec(g))+"g")),g.lastIndex=0;D=g.exec(L);)var F=D.index;A=A.slice(0,F===n?I:F)}}else if(s.indexOf(kn(g),I)!=I){var G=A.lastIndexOf(g);G>-1&&(A=A.slice(0,G))}return A+f}function BR(s){return s=Ze(s),s&&XI.test(s)?s.replace(_g,pS):s}var $R=Cs(function(s,a,u){return s+(u?" ":"")+a.toUpperCase()}),Yh=Km("toUpperCase");function qy(s,a,u){return s=Ze(s),a=u?n:a,a===n?uS(s)?yS(s):eS(s):s.match(a)||[]}var zy=Pe(function(s,a){try{return xn(s,n,a)}catch(u){return zh(u)?u:new Te(u)}}),VR=Sr(function(s,a){return $n(a,function(u){u=hr(u),Ir(s,u,Wh(s[u],s))}),s});function HR(s){var a=s==null?0:s.length,u=pe();return s=a?mt(s,function(f){if(typeof f[1]!="function")throw new Vn(l);return[u(f[0]),f[1]]}):[],Pe(function(f){for(var g=-1;++g<a;){var v=s[g];if(xn(v[0],this,f))return xn(v[1],this,f)}})}function WR(s){return pC(Wn(s,m))}function Xh(s){return function(){return s}}function qR(s,a){return s==null||s!==s?a:s}var zR=Gm(),KR=Gm(!0);function bn(s){return s}function Jh(s){return Tm(typeof s=="function"?s:Wn(s,m))}function jR(s){return Cm(Wn(s,m))}function GR(s,a){return Am(s,Wn(a,m))}var YR=Pe(function(s,a){return function(u){return Oo(u,s,a)}}),XR=Pe(function(s,a){return function(u){return Oo(s,u,a)}});function Qh(s,a,u){var f=Pt(a),g=Ol(a,f);u==null&&!(_t(a)&&(g.length||!f.length))&&(u=a,a=s,s=this,g=Ol(a,Pt(a)));var v=!(_t(u)&&"chain"in u)||!!u.chain,b=Ar(s);return $n(g,function(I){var A=a[I];s[I]=A,b&&(s.prototype[I]=function(){var D=this.__chain__;if(v||D){var L=s(this.__wrapped__),F=L.__actions__=vn(this.__actions__);return F.push({func:A,args:arguments,thisArg:s}),L.__chain__=D,L}return A.apply(s,qr([this.value()],arguments))})}),s}function JR(){return Ht._===this&&(Ht._=IS),this}function Zh(){}function QR(s){return s=De(s),Pe(function(a){return xm(a,s)})}var ZR=kh(mt),ek=kh(Yg),tk=kh(th);function Ky(s){return Fh(s)?nh(hr(s)):DC(s)}function nk(s){return function(a){return s==null?n:Di(s,a)}}var rk=Xm(),ik=Xm(!0);function ef(){return[]}function tf(){return!1}function sk(){return{}}function ok(){return""}function ak(){return!0}function lk(s,a){if(s=De(s),s<1||s>Ue)return[];var u=St,f=Jt(s,St);a=pe(a),s-=St;for(var g=sh(f,a);++u<s;)a(u);return g}function uk(s){return Se(s)?mt(s,hr):Dn(s)?[s]:vn(fy(Ze(s)))}function ck(s){var a=++bS;return Ze(s)+a}var hk=Bl(function(s,a){return s+a},0),fk=Dh("ceil"),dk=Bl(function(s,a){return s/a},1),pk=Dh("floor");function gk(s){return s&&s.length?Ll(s,bn,mh):n}function mk(s,a){return s&&s.length?Ll(s,pe(a,2),mh):n}function yk(s){return Qg(s,bn)}function vk(s,a){return Qg(s,pe(a,2))}function _k(s){return s&&s.length?Ll(s,bn,wh):n}function wk(s,a){return s&&s.length?Ll(s,pe(a,2),wh):n}var bk=Bl(function(s,a){return s*a},1),Ek=Dh("round"),Ik=Bl(function(s,a){return s-a},0);function Tk(s){return s&&s.length?ih(s,bn):0}function Sk(s,a){return s&&s.length?ih(s,pe(a,2)):0}return y.after=jA,y.ary=Iy,y.assign=Nx,y.assignIn=Fy,y.assignInWith=Ql,y.assignWith=Px,y.at=Mx,y.before=Ty,y.bind=Wh,y.bindAll=VR,y.bindKey=Sy,y.castArray=sx,y.chain=wy,y.chunk=p1,y.compact=g1,y.concat=m1,y.cond=HR,y.conforms=WR,y.constant=Xh,y.countBy=TA,y.create=Fx,y.curry=Cy,y.curryRight=Ay,y.debounce=xy,y.defaults=Ux,y.defaultsDeep=Bx,y.defer=GA,y.delay=YA,y.difference=y1,y.differenceBy=v1,y.differenceWith=_1,y.drop=w1,y.dropRight=b1,y.dropRightWhile=E1,y.dropWhile=I1,y.fill=T1,y.filter=CA,y.flatMap=RA,y.flatMapDeep=kA,y.flatMapDepth=DA,y.flatten=my,y.flattenDeep=S1,y.flattenDepth=C1,y.flip=XA,y.flow=zR,y.flowRight=KR,y.fromPairs=A1,y.functions=Kx,y.functionsIn=jx,y.groupBy=LA,y.initial=R1,y.intersection=k1,y.intersectionBy=D1,y.intersectionWith=L1,y.invert=Yx,y.invertBy=Xx,y.invokeMap=NA,y.iteratee=Jh,y.keyBy=PA,y.keys=Pt,y.keysIn=wn,y.map=Kl,y.mapKeys=Qx,y.mapValues=Zx,y.matches=jR,y.matchesProperty=GR,y.memoize=Gl,y.merge=eR,y.mergeWith=Uy,y.method=YR,y.methodOf=XR,y.mixin=Qh,y.negate=Yl,y.nthArg=QR,y.omit=tR,y.omitBy=nR,y.once=JA,y.orderBy=MA,y.over=ZR,y.overArgs=QA,y.overEvery=ek,y.overSome=tk,y.partial=qh,y.partialRight=Ry,y.partition=FA,y.pick=rR,y.pickBy=By,y.property=Ky,y.propertyOf=nk,y.pull=M1,y.pullAll=vy,y.pullAllBy=F1,y.pullAllWith=U1,y.pullAt=B1,y.range=rk,y.rangeRight=ik,y.rearg=ZA,y.reject=$A,y.remove=$1,y.rest=ex,y.reverse=Vh,y.sampleSize=HA,y.set=sR,y.setWith=oR,y.shuffle=WA,y.slice=V1,y.sortBy=KA,y.sortedUniq=G1,y.sortedUniqBy=Y1,y.split=RR,y.spread=tx,y.tail=X1,y.take=J1,y.takeRight=Q1,y.takeRightWhile=Z1,y.takeWhile=eA,y.tap=gA,y.throttle=nx,y.thru=zl,y.toArray=Ny,y.toPairs=$y,y.toPairsIn=Vy,y.toPath=uk,y.toPlainObject=My,y.transform=aR,y.unary=rx,y.union=tA,y.unionBy=nA,y.unionWith=rA,y.uniq=iA,y.uniqBy=sA,y.uniqWith=oA,y.unset=lR,y.unzip=Hh,y.unzipWith=_y,y.update=uR,y.updateWith=cR,y.values=Rs,y.valuesIn=hR,y.without=aA,y.words=qy,y.wrap=ix,y.xor=lA,y.xorBy=uA,y.xorWith=cA,y.zip=hA,y.zipObject=fA,y.zipObjectDeep=dA,y.zipWith=pA,y.entries=$y,y.entriesIn=Vy,y.extend=Fy,y.extendWith=Ql,Qh(y,y),y.add=hk,y.attempt=zy,y.camelCase=gR,y.capitalize=Hy,y.ceil=fk,y.clamp=fR,y.clone=ox,y.cloneDeep=lx,y.cloneDeepWith=ux,y.cloneWith=ax,y.conformsTo=cx,y.deburr=Wy,y.defaultTo=qR,y.divide=dk,y.endsWith=mR,y.eq=nr,y.escape=yR,y.escapeRegExp=vR,y.every=SA,y.find=AA,y.findIndex=py,y.findKey=$x,y.findLast=xA,y.findLastIndex=gy,y.findLastKey=Vx,y.floor=pk,y.forEach=by,y.forEachRight=Ey,y.forIn=Hx,y.forInRight=Wx,y.forOwn=qx,y.forOwnRight=zx,y.get=jh,y.gt=hx,y.gte=fx,y.has=Gx,y.hasIn=Gh,y.head=yy,y.identity=bn,y.includes=OA,y.indexOf=x1,y.inRange=dR,y.invoke=Jx,y.isArguments=Ni,y.isArray=Se,y.isArrayBuffer=dx,y.isArrayLike=_n,y.isArrayLikeObject=It,y.isBoolean=px,y.isBuffer=Jr,y.isDate=gx,y.isElement=mx,y.isEmpty=yx,y.isEqual=vx,y.isEqualWith=_x,y.isError=zh,y.isFinite=wx,y.isFunction=Ar,y.isInteger=ky,y.isLength=Xl,y.isMap=Dy,y.isMatch=bx,y.isMatchWith=Ex,y.isNaN=Ix,y.isNative=Tx,y.isNil=Cx,y.isNull=Sx,y.isNumber=Ly,y.isObject=_t,y.isObjectLike=wt,y.isPlainObject=Bo,y.isRegExp=Kh,y.isSafeInteger=Ax,y.isSet=Oy,y.isString=Jl,y.isSymbol=Dn,y.isTypedArray=xs,y.isUndefined=xx,y.isWeakMap=Rx,y.isWeakSet=kx,y.join=O1,y.kebabCase=_R,y.last=zn,y.lastIndexOf=N1,y.lowerCase=wR,y.lowerFirst=bR,y.lt=Dx,y.lte=Lx,y.max=gk,y.maxBy=mk,y.mean=yk,y.meanBy=vk,y.min=_k,y.minBy=wk,y.stubArray=ef,y.stubFalse=tf,y.stubObject=sk,y.stubString=ok,y.stubTrue=ak,y.multiply=bk,y.nth=P1,y.noConflict=JR,y.noop=Zh,y.now=jl,y.pad=ER,y.padEnd=IR,y.padStart=TR,y.parseInt=SR,y.random=pR,y.reduce=UA,y.reduceRight=BA,y.repeat=CR,y.replace=AR,y.result=iR,y.round=Ek,y.runInContext=S,y.sample=VA,y.size=qA,y.snakeCase=xR,y.some=zA,y.sortedIndex=H1,y.sortedIndexBy=W1,y.sortedIndexOf=q1,y.sortedLastIndex=z1,y.sortedLastIndexBy=K1,y.sortedLastIndexOf=j1,y.startCase=kR,y.startsWith=DR,y.subtract=Ik,y.sum=Tk,y.sumBy=Sk,y.template=LR,y.times=lk,y.toFinite=xr,y.toInteger=De,y.toLength=Py,y.toLower=OR,y.toNumber=Kn,y.toSafeInteger=Ox,y.toString=Ze,y.toUpper=NR,y.trim=PR,y.trimEnd=MR,y.trimStart=FR,y.truncate=UR,y.unescape=BR,y.uniqueId=ck,y.upperCase=$R,y.upperFirst=Yh,y.each=by,y.eachRight=Ey,y.first=yy,Qh(y,function(){var s={};return ur(y,function(a,u){rt.call(y.prototype,u)||(s[u]=a)}),s}(),{chain:!1}),y.VERSION=r,$n(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){y[s].placeholder=y}),$n(["drop","take"],function(s,a){Be.prototype[s]=function(u){u=u===n?1:Nt(De(u),0);var f=this.__filtered__&&!a?new Be(this):this.clone();return f.__filtered__?f.__takeCount__=Jt(u,f.__takeCount__):f.__views__.push({size:Jt(u,St),type:s+(f.__dir__<0?"Right":"")}),f},Be.prototype[s+"Right"]=function(u){return this.reverse()[s](u).reverse()}}),$n(["filter","map","takeWhile"],function(s,a){var u=a+1,f=u==Qe||u==gt;Be.prototype[s]=function(g){var v=this.clone();return v.__iteratees__.push({iteratee:pe(g,3),type:u}),v.__filtered__=v.__filtered__||f,v}}),$n(["head","last"],function(s,a){var u="take"+(a?"Right":"");Be.prototype[s]=function(){return this[u](1).value()[0]}}),$n(["initial","tail"],function(s,a){var u="drop"+(a?"":"Right");Be.prototype[s]=function(){return this.__filtered__?new Be(this):this[u](1)}}),Be.prototype.compact=function(){return this.filter(bn)},Be.prototype.find=function(s){return this.filter(s).head()},Be.prototype.findLast=function(s){return this.reverse().find(s)},Be.prototype.invokeMap=Pe(function(s,a){return typeof s=="function"?new Be(this):this.map(function(u){return Oo(u,s,a)})}),Be.prototype.reject=function(s){return this.filter(Yl(pe(s)))},Be.prototype.slice=function(s,a){s=De(s);var u=this;return u.__filtered__&&(s>0||a<0)?new Be(u):(s<0?u=u.takeRight(-s):s&&(u=u.drop(s)),a!==n&&(a=De(a),u=a<0?u.dropRight(-a):u.take(a-s)),u)},Be.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},Be.prototype.toArray=function(){return this.take(St)},ur(Be.prototype,function(s,a){var u=/^(?:filter|find|map|reject)|While$/.test(a),f=/^(?:head|last)$/.test(a),g=y[f?"take"+(a=="last"?"Right":""):a],v=f||/^find/.test(a);!g||(y.prototype[a]=function(){var b=this.__wrapped__,I=f?[1]:arguments,A=b instanceof Be,D=I[0],L=A||Se(b),F=function(Fe){var $e=g.apply(y,qr([Fe],I));return f&&G?$e[0]:$e};L&&u&&typeof D=="function"&&D.length!=1&&(A=L=!1);var G=this.__chain__,oe=!!this.__actions__.length,ge=v&&!G,Oe=A&&!oe;if(!v&&L){b=Oe?b:new Be(this);var me=s.apply(b,I);return me.__actions__.push({func:zl,args:[F],thisArg:n}),new Hn(me,G)}return ge&&Oe?s.apply(this,I):(me=this.thru(F),ge?f?me.value()[0]:me.value():me)})}),$n(["pop","push","shift","sort","splice","unshift"],function(s){var a=yl[s],u=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",f=/^(?:pop|shift)$/.test(s);y.prototype[s]=function(){var g=arguments;if(f&&!this.__chain__){var v=this.value();return a.apply(Se(v)?v:[],g)}return this[u](function(b){return a.apply(Se(b)?b:[],g)})}}),ur(Be.prototype,function(s,a){var u=y[a];if(u){var f=u.name+"";rt.call(Is,f)||(Is[f]=[]),Is[f].push({name:a,func:u})}}),Is[Ul(n,V).name]=[{name:"wrapper",func:n}],Be.prototype.clone=BS,Be.prototype.reverse=$S,Be.prototype.value=VS,y.prototype.at=mA,y.prototype.chain=yA,y.prototype.commit=vA,y.prototype.next=_A,y.prototype.plant=bA,y.prototype.reverse=EA,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=IA,y.prototype.first=y.prototype.head,Co&&(y.prototype[Co]=wA),y},ws=vS();Ci?((Ci.exports=ws)._=ws,Jc._=ws):Ht._=ws}).call(qo)})(Rd,Rd.exports);const XH=Ii({data(){return{displayDialogCreate:!1,displayDialogEdit:!1,postTitle:"",postText:"",isLogin:!1,searchText:"",editedPost:{}}},props:{isHomePage:Boolean},computed:Xy(ks({},I0(xd)),{simpleposts(){return this.posts.slice(3)}}),components:{PostItem:LH,InputText:sp,Dialog:vg,Textarea:KI,Button:Pa,ConfirmDialog:jI},methods:{addDialogCreateEnable(){this.displayDialogCreate=!0,this.postTitle="",this.postText=""},addDialogEditEnable(t){this.displayDialogEdit=!0,this.editedPost=t,this.postTitle=t.title,this.postText=t.description},cancel(){this.displayDialogCreate=!1,this.displayDialogEdit=!1,this.postTitle="",this.postText=""},createPost(){const t=fu(),e=this.postText,n=this.postTitle,r=Date.now(),i=this.mainStore.loginUserID,o=-1;t.addPost(new yg({deleted_at:o,description:e,title:n,reg_date:r,user_id:i})),this.cancel(),Zo.push({name:"home"})},deletePost(t){this.$confirm.require({message:"Do you want to archive this post?",header:"Archive Confirmation",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:()=>{const e=fu();t.deleted_at=Date.now(),e.searchID(t.title,this.mainStore.loginUserID).then(n=>{console.log(n),e.setPost(t,n)}),Zo.push({name:"home"}),console.log(t)},reject:()=>{}})},editPost(){const t=fu();t.searchID(this.editedPost.title,this.mainStore.loginUserID).then(e=>{t.getPost(e).then(n=>{this.editedPost.title=this.postTitle,this.editedPost.description=this.postText,this.editedPost.user_id=n.user_id,t.setPost(this.editedPost,e),this.cancel(),Zo.push({name:"home"})})})}},setup(t){const e=Zo.currentRoute.value.query,n=Pr(e==null?void 0:e.search),{posts:r,isLoading:i,search:o}=fu(e),{getAllUsers:l}=qI(),c=xd();function h(){let d="";t.isHomePage?n.value==""&&document.location.reload():d=c.loginUserID,o(n.value,d).then(p=>{l().then(m=>{let _=[];for(let E=0;E<r.value.length;E++)r.value[E].deleted_at==-1&&_.push(r.value[E]);r.value=_;for(let E=0;E<r.value.length;E++)for(let C=0;C<m.length;C++)if(r.value[E].user_id==m[C].id){r.value[E].user_id=m[C].data().user_name;break}i.value=!1})})}return h(),{posts:r,isLoading:i,search:n,localSearch:h,debounceSearch:Rd.exports.debounce(h,200)}}}),JH={key:0},QH={class:"p-input-icon-left"},ZH=tt("i",{class:"pi pi-search"},null,-1),eW={class:"p-float-label"},tW=tt("label",{for:"username"},"Title",-1),nW={class:"p-float-label"},rW=tt("label",{for:"username"},"Title",-1),iW={key:1,class:"homeSimplePostsWrapper"};function sW(t,e,n,r,i,o){const l=en("ConfirmDialog"),c=en("Button"),h=en("InputText"),d=en("Textarea"),p=en("Dialog"),m=en("PostItem");return ce(),Ce(bt,null,[Re(l),t.isLoading?(ce(),Ce("div",JH,"Loading...")):yt("",!0),(ce(),Cn(Gd,{to:"#navigation_header"},[tt("div",null,[this.isHomePage?yt("",!0):(ce(),Cn(c,{key:0,class:"addPostButton",label:"Add post",onClick:e[0]||(e[0]=_=>t.addDialogCreateEnable())}))]),tt("span",QH,[ZH,Re(h,{class:"searchInput",type:"text",placeholder:"Search",modelValue:t.search,"onUpdate:modelValue":e[1]||(e[1]=_=>t.search=_),onInput:t.debounceSearch},null,8,["modelValue","onInput"])])])),Re(p,{visible:t.displayDialogCreate,"onUpdate:visible":e[6]||(e[6]=_=>t.displayDialogCreate=_),breakpoints:{"10000px":"50vw","1200px":"75vw","640px":"100vw"}},{header:xt(()=>[tt("span",eW,[Re(h,{id:"username",type:"text",modelValue:t.postTitle,"onUpdate:modelValue":e[2]||(e[2]=_=>t.postTitle=_)},null,8,["modelValue"]),tW])]),footer:xt(()=>[Re(c,{label:"Cancel",onClick:e[4]||(e[4]=_=>t.cancel()),icon:"pi pi-times",class:"p-button-text"}),Re(c,{label:"Create",onClick:e[5]||(e[5]=_=>t.createPost()),icon:"pi pi-check",autofocus:""})]),default:xt(()=>[Re(d,{class:"postTextArea",modelValue:t.postText,"onUpdate:modelValue":e[3]||(e[3]=_=>t.postText=_),autoResize:!0,rows:"5",cols:"30",placeholder:"Write your post here"},null,8,["modelValue"])]),_:1},8,["visible"]),Re(p,{visible:t.displayDialogEdit,"onUpdate:visible":e[11]||(e[11]=_=>t.displayDialogEdit=_),breakpoints:{"10000px":"50vw","1200px":"75vw","640px":"100vw"}},{header:xt(()=>[tt("span",nW,[Re(h,{id:"username",type:"text",modelValue:t.postTitle,"onUpdate:modelValue":e[7]||(e[7]=_=>t.postTitle=_)},null,8,["modelValue"]),rW])]),footer:xt(()=>[Re(c,{label:"Cancel",onClick:e[9]||(e[9]=_=>t.cancel()),icon:"pi pi-times",class:"p-button-text"}),Re(c,{label:"Confirm",onClick:e[10]||(e[10]=_=>t.editPost()),icon:"pi pi-check",autofocus:""})]),default:xt(()=>[Re(d,{class:"postTextArea",modelValue:t.postText,"onUpdate:modelValue":e[8]||(e[8]=_=>t.postText=_),autoResize:!0,rows:"5",cols:"30",placeholder:"Write your post here"},null,8,["modelValue"])]),_:1},8,["visible"]),t.isLoading?yt("",!0):(ce(),Ce("div",iW,[this.isHomePage?(ce(!0),Ce(bt,{key:0},Lu(t.posts,(_,E)=>(ce(),Cn(m,{key:_.id,class:"simplePostItem",post:_,isHomePage:t.isHomePage},null,8,["post","isHomePage"]))),128)):yt("",!0)])),!t.isLoading&&!this.isHomePage?(ce(!0),Ce(bt,{key:2},Lu(t.posts,(_,E)=>(ce(),Cn(m,{key:_.id,class:"postItem",post:_,isHomePage:t.isHomePage,onRemove:e[12]||(e[12]=C=>t.deletePost(C)),onEdit:e[13]||(e[13]=C=>t.addDialogEditEnable(C))},null,8,["post","isHomePage"]))),128)):yt("",!0)],64)}var oW=Wc(XH,[["render",sW]]);const aW=Ii({setup(t){return(e,n)=>(ce(),Ce(bt,null,[Re(gH,{isHomePage:!0}),Re(oW,{isHomePage:!0})],64))}}),lW=hN({history:xO("/"),routes:[{path:"/",name:"home",component:aW},{path:"/login",name:"login",component:()=>ou(()=>import("./LoginView.5cd87edb.js"),["assets/LoginView.5cd87edb.js","assets/LoginView.d88ff1d4.css","assets/Vuelogo.ce88517d.js"])},{path:"/register",name:"register",component:()=>ou(()=>import("./RegisterView.82ebfcc8.js"),["assets/RegisterView.82ebfcc8.js","assets/LoginView.d88ff1d4.css","assets/Vuelogo.ce88517d.js"])},{path:"/profile",name:"profile",component:()=>ou(()=>import("./ProfileInfoView.bdf42ba3.js"),["assets/ProfileInfoView.bdf42ba3.js","assets/ProfileInfoView.ba1dc656.css","assets/Vuelogo.ce88517d.js"])},{path:"/activities",name:"activities",component:()=>ou(()=>import("./ProfileActivitiesView.d08bca70.js"),[])}]});var Zo=lW;const Zt={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"},pw={ripple:!1,inputStyle:"outlined",locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",weekHeader:"Wk",firstDayOfWeek:0,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",emptyMessage:"No available options"},filterMatchModeOptions:{text:[Zt.STARTS_WITH,Zt.CONTAINS,Zt.NOT_CONTAINS,Zt.ENDS_WITH,Zt.EQUALS,Zt.NOT_EQUALS],numeric:[Zt.EQUALS,Zt.NOT_EQUALS,Zt.LESS_THAN,Zt.LESS_THAN_OR_EQUAL_TO,Zt.GREATER_THAN,Zt.GREATER_THAN_OR_EQUAL_TO],date:[Zt.DATE_IS,Zt.DATE_IS_NOT,Zt.DATE_BEFORE,Zt.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100}},uW=Symbol();var cW={install:(t,e)=>{let n=e?ks(ks({},pw),e):ks({},pw);const r={config:cs(n)};t.config.globalProperties.$primevue=r,t.provide(uW,r)}};const hW=Symbol();var fW={install:t=>{const e={require:n=>{$s.emit("confirm",n)},close:()=>{$s.emit("close")}};t.config.globalProperties.$confirm=e,t.provide(hW,e)}};const ul=eO(dN);ul.use(cW);ul.use(rO());ul.use(Zo);ul.use(fW);ul.mount("#app");export{_M as A,Sn as B,bt as F,li as G,gH as N,pW as O,oW as P,ZV as U,Wc as _,mW as a,Pa as b,sp as c,Ii as d,xd as e,en as f,y_ as g,Ce as h,tt as i,Re as j,BI as k,vi as l,I0 as m,Na as n,ce as o,Rt as p,Ji as q,Zo as r,yW as s,gr as t,qI as u,yt as v,xt as w,gW as x,wM as y,VI as z};
