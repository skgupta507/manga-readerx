(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const A={};function X(e){A.context=e}const Je=(e,t)=>e===t,Qe=Symbol("solid-track"),re={equals:Je};let Te=Be;const B=1,se=2,Oe={owned:null,cleanups:null,context:null,owner:null},fe={};var w=null;let U=null,b=null,C=null,_=null,ge=0;function F(e,t){const n=b,r=w,s=e.length===0,o=s?Oe:{owned:null,cleanups:null,context:null,owner:t||r},l=s?e:()=>e(()=>R(()=>ye(o)));w=o,b=null;try{return $(l,!0)}finally{b=n,w=r}}function T(e,t){t=t?Object.assign({},re,t):re;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),$e(n,s));return[_e.bind(n),r]}function ve(e,t,n){const r=ae(e,t,!0,B);H(r)}function Q(e,t,n){const r=ae(e,t,!1,B);H(r)}function ze(e,t,n){Te=st;const r=ae(e,t,!1,B);r.user=!0,_?_.push(r):H(r)}function x(e,t,n){n=n?Object.assign({},re,n):re;const r=ae(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,H(r),_e.bind(r)}function Ne(e,t,n){let r,s,o;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,s=e,o=t||{}):(r=e,s=t,o=n||{});let l=null,i=fe,a=null,u=!1,c="initialValue"in o,h=typeof r=="function"&&x(r);const p=new Set,[y,m]=(o.storage||T)(o.initialValue),[L,N]=T(void 0),[k,S]=T(void 0,{equals:!1}),[P,v]=T(c?"ready":"unresolved");if(A.context){a=`${A.context.id}${A.context.count++}`;let f;o.ssrLoadFrom==="initial"?i=o.initialValue:A.load&&(f=A.load(a))&&(i=f[0])}function E(f,d,g,I){return l===f&&(l=null,c=!0,(f===i||d===i)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(I,{value:d})),i=fe,M(d,g)),d}function M(f,d){$(()=>{d||m(()=>f),v(d?"errored":"ready"),N(d);for(const g of p.keys())g.decrement();p.clear()},!1)}function D(){const f=tt,d=y(),g=L();if(g&&!l)throw g;return b&&!b.user&&f&&ve(()=>{k(),l&&(f.resolved||p.has(f)||(f.increment(),p.add(f)))}),d}function G(f=!0){if(f!==!1&&u)return;u=!1;const d=h?h():r;if(d==null||d===!1){E(l,R(y));return}const g=i!==fe?i:R(()=>s(d,{value:y(),refetching:f}));return typeof g!="object"||!(g&&"then"in g)?(E(l,g,void 0,d),g):(l=g,u=!0,queueMicrotask(()=>u=!1),$(()=>{v(c?"refreshing":"pending"),S()},!1),g.then(I=>E(g,I,void 0,d),I=>E(g,void 0,qe(I),d)))}return Object.defineProperties(D,{state:{get:()=>P()},error:{get:()=>L()},loading:{get(){const f=P();return f==="pending"||f==="refreshing"}},latest:{get(){if(!c)return D();const f=L();if(f&&!l)throw f;return y()}}}),h?ve(()=>G(!1)):G(!1),[D,{refetch:G,mutate:m}]}function R(e){const t=b;b=null;try{return e()}finally{b=t}}function ke(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let u=0;u<e.length;u++)i[u]=e[u]()}else i=e();if(o){o=!1;return}const a=R(()=>t(i,s,l));return s=i,a}}function Qt(e){ze(()=>R(e))}function z(e){return w===null||(w.cleanups===null?w.cleanups=[e]:w.cleanups.push(e)),e}function Ye(){return w}function Ze(e,t){const n=w;w=e;try{return $(t,!0)}catch(r){we(r)}finally{w=n}}function et(e){const t=b,n=w;return Promise.resolve().then(()=>{b=t,w=n;let r;return $(e,!1),b=w=null,r?r.done:void 0})}function me(e,t){const n=Symbol("context");return{id:n,Provider:ot(n),defaultValue:e}}function ce(e){let t;return(t=Ue(w,e.id))!==void 0?t:e.defaultValue}function Ie(e){const t=x(e),n=x(()=>de(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let tt;function _e(){const e=U;if(this.sources&&(this.state||e))if(this.state===B||e)H(this);else{const t=C;C=null,$(()=>ie(this),!1),C=t}if(b){const t=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(t)):(b.sources=[this],b.sourceSlots=[t]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return this.value}function $e(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&$(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],l=U&&U.running;l&&U.disposed.has(o),(l&&!o.tState||!l&&!o.state)&&(o.pure?C.push(o):_.push(o),o.observers&&je(o)),l||(o.state=B)}if(C.length>1e6)throw C=[],new Error},!1)),t}function H(e){if(!e.fn)return;ye(e);const t=w,n=b,r=ge;b=w=e,nt(e,e.value,r),b=n,w=t}function nt(e,t,n){let r;try{r=e.fn(t)}catch(s){e.pure&&(e.state=B),we(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?$e(e,r):e.value=r,e.updatedAt=n)}function ae(e,t,n,r=B,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:w,context:null,pure:n};return w===null||w!==Oe&&(w.owned?w.owned.push(o):w.owned=[o]),o}function oe(e){const t=U;if(e.state===0||t)return;if(e.state===se||t)return ie(e);if(e.suspense&&R(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ge);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===B||t)H(e);else if(e.state===se||t){const s=C;C=null,$(()=>ie(e,n[0]),!1),C=s}}function $(e,t){if(C)return e();let n=!1;t||(C=[]),_?n=!0:_=[],ge++;try{const r=e();return rt(n),r}catch(r){C||(_=null),we(r)}}function rt(e){if(C&&(Be(C),C=null),e)return;const t=_;_=null,t.length&&$(()=>Te(t),!1)}function Be(e){for(let t=0;t<e.length;t++)oe(e[t])}function st(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:oe(r)}for(A.context&&X(),t=0;t<n;t++)oe(e[t])}function ie(e,t){const n=U;e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];s.sources&&(s.state===B||n?s!==t&&oe(s):(s.state===se||n)&&ie(s,t))}}function je(e){const t=U;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=se,r.pure?C.push(r):_.push(r),r.observers&&je(r))}}function ye(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),l=n.observerSlots.pop();r<s.length&&(o.sourceSlots[l]=r,s[r]=o,n.observerSlots[r]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)ye(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function qe(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function we(e){throw e=qe(e),e}function Ue(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Ue(e.owner,t):void 0}function de(e){if(typeof e=="function"&&!e.length)return de(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=de(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function ot(e,t){return function(r){let s;return Q(()=>s=R(()=>(w.context={[e]:r.value},Ie(()=>r.children))),void 0),s}}const it=Symbol("fallback");function Ee(e){for(let t=0;t<e.length;t++)e[t]()}function lt(e,t,n={}){let r=[],s=[],o=[],l=0,i=t.length>1?[]:null;return z(()=>Ee(o)),()=>{let a=e()||[],u,c;return a[Qe],R(()=>{let p=a.length,y,m,L,N,k,S,P,v,E;if(p===0)l!==0&&(Ee(o),o=[],r=[],s=[],l=0,i&&(i=[])),n.fallback&&(r=[it],s[0]=F(M=>(o[0]=M,n.fallback())),l=1);else if(l===0){for(s=new Array(p),c=0;c<p;c++)r[c]=a[c],s[c]=F(h);l=p}else{for(L=new Array(p),N=new Array(p),i&&(k=new Array(p)),S=0,P=Math.min(l,p);S<P&&r[S]===a[S];S++);for(P=l-1,v=p-1;P>=S&&v>=S&&r[P]===a[v];P--,v--)L[v]=s[P],N[v]=o[P],i&&(k[v]=i[P]);for(y=new Map,m=new Array(v+1),c=v;c>=S;c--)E=a[c],u=y.get(E),m[c]=u===void 0?-1:u,y.set(E,c);for(u=S;u<=P;u++)E=r[u],c=y.get(E),c!==void 0&&c!==-1?(L[c]=s[u],N[c]=o[u],i&&(k[c]=i[u]),c=m[c],y.set(E,c)):o[u]();for(c=S;c<p;c++)c in L?(s[c]=L[c],o[c]=N[c],i&&(i[c]=k[c],i[c](c))):s[c]=F(h);s=s.slice(0,l=p),r=a.slice(0)}return s});function h(p){if(o[c]=p,i){const[y,m]=T(c);return i[c]=m,t(a[c],y)}return t(a[c])}}}function O(e,t){return R(()=>e(t||{}))}function Se(e){let t,n;const r=s=>{const o=A.context;if(o){const[i,a]=T();(n||(n=e())).then(u=>{X(o),a(()=>u.default),X()}),t=i}else if(!t){const[i]=Ne(()=>(n||(n=e())).then(a=>a.default));t=i}let l;return x(()=>(l=t())&&R(()=>{if(!o)return l(s);const i=A.context;X(o);const a=l(s);return X(i),a}))};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}function zt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return x(lt(()=>e.each,e.children,t||void 0))}function Me(e){let t=!1;const n=e.keyed,r=x(()=>e.when,void 0,{equals:(s,o)=>t?s===o:!s==!o});return x(()=>{const s=r();if(s){const o=e.children,l=typeof o=="function"&&o.length>0;return t=n||l,l?R(()=>o(s)):o}return e.fallback},void 0,void 0)}function ct(e,t,n){let r=n.length,s=t.length,o=r,l=0,i=0,a=t[s-1].nextSibling,u=null;for(;l<s||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const c=o<r?i?n[i-1].nextSibling:n[o-i]:a;for(;i<o;)e.insertBefore(n[i++],c)}else if(o===i)for(;l<s;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],c),t[s]=n[o]}else{if(!u){u=new Map;let h=i;for(;h<o;)u.set(n[h],h++)}const c=u.get(t[l]);if(c!=null)if(i<c&&c<o){let h=l,p=1,y;for(;++h<s&&h<o&&!((y=u.get(t[h]))==null||y!==c+p);)p++;if(p>c-i){const m=t[l];for(;i<c;)e.insertBefore(n[i++],m)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const xe="_$DX_DELEGATE";function at(e,t,n,r={}){let s;return F(o=>{s=o,t===document?e():he(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function Yt(e,t,n){const r=document.createElement("template");r.innerHTML=e;let s=r.content.firstChild;return n&&(s=s.firstChild),s}function ut(e,t=window.document){const n=t[xe]||(t[xe]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,ft))}}function Zt(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function en(e,t){t==null?e.removeAttribute("class"):e.className=t}function tn(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let o,l;for(o=0,l=s.length;o<l;o++){const i=s[o];!i||i==="undefined"||t[i]||(Pe(e,i,!1),delete n[i])}for(o=0,l=r.length;o<l;o++){const i=r[o],a=!!t[i];!i||i==="undefined"||n[i]===a||!a||(Pe(e,i,!0),n[i]=a)}return n}function nn(e,t,n){return R(()=>e(t,n))}function he(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return le(e,t,r,n);Q(s=>le(e,t(),s,n),r)}function Pe(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,o=r.length;s<o;s++)e.classList.toggle(r[s],n)}function ft(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),A.registry&&!A.done&&(A.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function le(e,t,n,r,s){for(A.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(A.context)return n;if(o==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=V(e,n,r,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(A.context)return n;n=V(e,n,r)}else{if(o==="function")return Q(()=>{let i=t();for(;typeof i=="function";)i=i();n=le(e,i,n,r)}),()=>n;if(Array.isArray(t)){const i=[],a=n&&Array.isArray(n);if(pe(i,t,n,s))return Q(()=>n=le(e,i,n,r,!0)),()=>n;if(A.context){if(!i.length)return n;for(let u=0;u<i.length;u++)if(i[u].parentNode)return n=i}if(i.length===0){if(n=V(e,n,r),l)return n}else a?n.length===0?Ce(e,i,r):ct(e,n,i):(n&&V(e),Ce(e,i));n=i}else if(t instanceof Node){if(A.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=V(e,n,r,t);V(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function pe(e,t,n,r){let s=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],a=n&&n[o];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))s=pe(e,i,a)||s;else if(typeof i=="function")if(r){for(;typeof i=="function";)i=i();s=pe(e,Array.isArray(i)?i:[i],Array.isArray(a)?a:[a])||s}else e.push(i),s=!0;else{const u=String(i);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return s}function Ce(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function V(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(s!==i){const a=i.parentNode===e;!o&&!l?a?e.replaceChild(s,i):e.insertBefore(s,n):a&&i.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const dt=!1,ht="http://www.w3.org/2000/svg";function pt(e,t=!1){return t?document.createElementNS(ht,e):document.createElement(e)}function rn(e){const{useShadow:t}=e,n=document.createTextNode(""),r=e.mount||document.body;function s(){if(A.context){const[o,l]=T(!1);return queueMicrotask(()=>l(!0)),()=>o()&&e.children}else return()=>e.children}if(r instanceof HTMLHeadElement){const[o,l]=T(!1),i=()=>l(!0);F(a=>he(r,()=>o()?a():s()(),null)),z(()=>{A.context?queueMicrotask(i):i()})}else{const o=pt(e.isSVG?"g":"div",e.isSVG),l=t&&o.attachShadow?o.attachShadow({mode:"open"}):o;Object.defineProperty(o,"_$host",{get(){return n.parentNode},configurable:!0}),he(l,s()),r.appendChild(o),e.ref&&e.ref(o),z(()=>r.removeChild(o))}return n}function gt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function mt([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function yt(e){try{return document.querySelector(e)}catch{return null}}function wt(e,t){const n=yt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function bt(e,t,n,r){let s=!1;const o=i=>typeof i=="string"?{value:i}:i,l=mt(T(o(e()),{equals:(i,a)=>i.value===a.value}),void 0,i=>(!s&&t(i),i));return n&&z(n((i=e())=>{s=!0,l[1](o(i)),s=!1})),{signal:l,utils:r}}function At(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:T({value:""})};return e}function vt(){return bt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),wt(window.location.hash.slice(1),n)},e=>gt(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Et(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const l={to:s,options:o,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:a=>{a&&(n=!0),i.navigate(s,o)}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}const St=/^(?:[a-z0-9]+:)?\/\//i,xt=/^\/+|\/+$/g;function J(e,t=!1){const n=e.replace(xt,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function te(e,t,n){if(St.test(t))return;const r=J(e),s=n&&J(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+J(t,!o)}function Pt(e,t){if(e==null)throw new Error(t);return e}function De(e,t){return J(e).replace(/\/*(\*.*)?$/g,"")+J(t)}function Ct(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function ne(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function Lt(e,t){const[n,r]=e.split("/*",2),s=n.split("/").filter(Boolean),o=s.length;return l=>{const i=l.split("/").filter(Boolean),a=i.length-o;if(a<0||a>0&&r===void 0&&!t)return null;const u={path:o?"":"/",params:{}};for(let c=0;c<o;c++){const h=s[c],p=i[c];if(h[0]===":")u.params[h.slice(1)]=p;else if(h.localeCompare(p,void 0,{sensitivity:"base"})!==0)return null;u.path+=`/${p}`}return r&&(u.params[r]=a?i.slice(-a).join("/"):""),u}}function Rt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Ke(e){const t=new Map,n=Ye();return new Proxy({},{get(r,s){return t.has(s)||Ze(n,()=>t.set(s,x(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Ve(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return Ve(r).reduce((o,l)=>[...o,...s.map(i=>i+l)],[])}const Tt=100,Fe=me(),ue=me(),He=()=>Pt(ce(Fe),"Make sure your app is wrapped in a <Router />");let Y;const be=()=>Y||ce(ue)||He().base,sn=()=>be().params;function Ot(e,t="",n){const{component:r,data:s,children:o}=e,l=!o||Array.isArray(o)&&!o.length,i={key:e,element:r?()=>O(r,{}):()=>{const{element:a}=e;return a===void 0&&n?O(n,{}):a},preload:e.component?r.preload:e.preload,data:s};return Ge(e.path).reduce((a,u)=>{for(const c of Ve(u)){const h=De(t,c),p=l?h:h.split("/*",1)[0];a.push({...i,originalPath:c,pattern:p,matcher:Lt(p,!l)})}return a},[])}function Nt(e,t=0){return{routes:e,score:Rt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],l=o.matcher(n);if(!l)return null;r.unshift({...l,route:o})}return r}}}function Ge(e){return Array.isArray(e)?e:[e]}function We(e,t="",n,r=[],s=[]){const o=Ge(e);for(let l=0,i=o.length;l<i;l++){const a=o[l];if(a&&typeof a=="object"&&a.hasOwnProperty("path")){const u=Ot(a,t,n);for(const c of u){r.push(c);const h=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!h)We(a.children,c.pattern,n,r,s);else{const p=Nt([...r],s.length);s.push(p)}r.pop()}}}return r.length?s:s.sort((l,i)=>i.score-l.score)}function kt(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function It(e,t){const n=new URL("http://sar"),r=x(a=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),a}},n,{equals:(a,u)=>a.href===u.href}),s=x(()=>ne(r().pathname)),o=x(()=>ne(r().search,!0)),l=x(()=>ne(r().hash)),i=x(()=>"");return{get pathname(){return s()},get search(){return o()},get hash(){return l()},get state(){return t()},get key(){return i()},query:Ke(ke(o,()=>Ct(r())))}}function _t(e,t="",n,r){const{signal:[s,o],utils:l={}}=At(e),i=l.parsePath||(f=>f),a=l.renderPath||(f=>f),u=l.beforeLeave||Et(),c=te("",t),h=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!s().value&&o({value:c,replace:!0,scroll:!1});const[p,y]=T(!1),m=async f=>{y(!0);try{await et(f)}finally{y(!1)}},[L,N]=T(s().value),[k,S]=T(s().state),P=It(L,k),v=[],E={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(f){return te(c,f)}};if(n)try{Y=E,E.data=n({data:void 0,params:{},location:P,navigate:D(E)})}finally{Y=void 0}function M(f,d,g){R(()=>{if(typeof d=="number"){d&&(l.go?u.confirm(d,g)&&l.go(d):console.warn("Router integration does not support relative routing"));return}const{replace:I,resolve:Z,scroll:j,state:K}={replace:!1,resolve:!0,scroll:!0,...g},q=Z?f.resolvePath(d):te("",d);if(q===void 0)throw new Error(`Path '${d}' is not a routable path`);if(v.length>=Tt)throw new Error("Too many redirects");const W=L();if((q!==W||K!==k())&&!dt){if(u.confirm(q,g)){const ee=v.push({value:W,replace:I,scroll:j,state:k()});m(()=>{N(q),S(K)}).then(()=>{v.length===ee&&G({value:q,state:K})})}}})}function D(f){return f=f||ce(ue)||E,(d,g)=>M(f,d,g)}function G(f){const d=v[0];d&&((f.value!==d.value||f.state!==d.state)&&o({...f,replace:d.replace,scroll:d.scroll}),v.length=0)}Q(()=>{const{value:f,state:d}=s();R(()=>{f!==L()&&m(()=>{N(f),S(d)})})});{let f=function(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const g=d.composedPath().find(ee=>ee instanceof Node&&ee.nodeName.toUpperCase()==="A");if(!g||!g.hasAttribute("link"))return;const I=g.href;if(g.target||!I&&!g.hasAttribute("state"))return;const Z=(g.getAttribute("rel")||"").split(/\s+/);if(g.hasAttribute("download")||Z&&Z.includes("external"))return;const j=new URL(I),K=ne(j.pathname);if(j.origin!==window.location.origin||c&&K&&!K.toLowerCase().startsWith(c.toLowerCase()))return;const q=i(j.pathname+j.search+j.hash),W=g.getAttribute("state");d.preventDefault(),M(E,q,{resolve:!1,replace:g.hasAttribute("replace"),scroll:!g.hasAttribute("noscroll"),state:W&&JSON.parse(W)})};ut(["click"]),document.addEventListener("click",f),z(()=>document.removeEventListener("click",f))}return{base:E,out:h,location:P,isRouting:p,renderPath:a,parsePath:i,navigatorFactory:D,beforeLeave:u}}function $t(e,t,n,r){const{base:s,location:o,navigatorFactory:l}=e,{pattern:i,element:a,preload:u,data:c}=r().route,h=x(()=>r().path),p=Ke(()=>r().params);u&&u();const y={parent:t,pattern:i,get child(){return n()},path:h,params:p,data:t.data,outlet:a,resolvePath(m){return te(s.path(),m,h())}};if(c)try{Y=y,y.data=c({data:t.data,params:p,location:o,navigate:l(y)})}finally{Y=void 0}return y}const Bt=e=>{const{source:t,url:n,base:r,data:s,out:o}=e,l=t||vt(),i=_t(l,r,s);return O(Fe.Provider,{value:i,get children(){return e.children}})},jt=e=>{const t=He(),n=be(),r=Ie(()=>e.children),s=x(()=>We(r(),De(n.pattern,e.base||""),Ut)),o=x(()=>kt(s(),t.location.pathname));t.out&&t.out.matches.push(o().map(({route:u,path:c,params:h})=>({originalPath:u.originalPath,pattern:u.pattern,path:c,params:h})));const l=[];let i;const a=x(ke(o,(u,c,h)=>{let p=c&&u.length===c.length;const y=[];for(let m=0,L=u.length;m<L;m++){const N=c&&c[m],k=u[m];h&&N&&k.route.key===N.route.key?y[m]=h[m]:(p=!1,l[m]&&l[m](),F(S=>{l[m]=S,y[m]=$t(t,y[m-1]||n,()=>a()[m+1],()=>o()[m])}))}return l.splice(u.length).forEach(m=>m()),h&&p?h:(i=y[0],y)}));return O(Me,{get when(){return a()&&i},children:u=>O(ue.Provider,{value:u,get children(){return u.outlet()}})})},qt=(e,t)=>()=>O(jt,{base:t,children:e}),Ut=()=>{const e=be();return O(Me,{get when(){return e.child},children:t=>O(ue.Provider,{value:t,get children(){return t.outlet()}})})},Mt={}.VITE_ALI_OSS_BUCKET,Dt="manga-info.json",Kt=async()=>{try{const e=await fetch(`https://${Mt}/${Dt}`,{method:"GET",headers:{Accept:"application/json"}});if(e.status!==200)throw new Error(`request status is ${e.status}`);return await e.json()}catch(e){return console.error("fetch from ali-oss failed",`
`,e),[]}},Ae=()=>{};Ae.state="pending";Ae.loading=!0;const Xe=me(Ae),{Provider:Vt}=Xe,Ft=e=>{const[t]=Ne(Kt);return O(Vt,{value:t,get children(){return e.children}})},on=()=>ce(Xe),Ht="modulepreload",Gt=function(e){return"/manga-reader/"+e},Le={},Re=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Gt(o),o in Le)return;Le[o]=!0;const l=o.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(!!r)for(let c=s.length-1;c>=0;c--){const h=s[c];if(h.href===o&&(!l||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${i}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Ht,l||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),l)return new Promise((c,h)=>{u.addEventListener("load",c),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},Wt="/manga-reader",Xt=[{path:"/",component:Se(()=>Re(()=>import("./index.26b8f18b.js"),["assets/index.26b8f18b.js","assets/index.cae98b9d.css"]))},{path:"/read/:id/:chapterNum",component:Se(()=>Re(()=>import("./index.6c6a0b26.js"),[]))}].map(e=>{const{path:t,...n}=e;return{path:`${Wt}${t}`,...n}});const Jt=()=>{const e=qt(Xt);return O(Bt,{get children(){return O(Ft,{get children(){return O(e,{})}})}})};at(()=>O(Jt,{}),document.getElementById("root"));export{zt as F,rn as P,Me as S,Q as a,en as b,O as c,ut as d,tn as e,on as f,T as g,sn as h,he as i,Qt as o,Zt as s,Yt as t,nn as u};