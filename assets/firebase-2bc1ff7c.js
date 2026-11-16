var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,n,i)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,s=(e,t,n)=>new Promise(((i,r)=>{var o=e=>{try{s(n.next(e))}catch(t){r(t)}},a=e=>{try{s(n.throw(e))}catch(t){r(t)}},s=e=>e.done?i(e.value):Promise.resolve(e.value).then(o,a);s((n=n.apply(e,t)).next())}));import{b as c,e as l,s as u,u as d}from"./main-de5d7909.js";import"./main-f12dc869.js";import"./vendor-f10e4ea9.js";import"./vue-vendor-fa589de8.js";import"./vant-5c9c8dfc.js";import"./modulepreload-polyfill-4abee2a4.js";const h=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},f={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],o=r+1<e.length,a=o?e[r+1]:0,s=r+2<e.length,c=s?e[r+2]:0,l=t>>2,u=(3&t)<<4|a>>4;let d=(15&a)<<2|c>>6,h=63&c;s||(h=64,o||(d=64)),i.push(n[l],n[u],n[d],n[h])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(h(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(o>>10)),t[i++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],a=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],o=r<e.length?n[e.charAt(r)]:0;++r;const a=r<e.length?n[e.charAt(r)]:64;++r;const s=r<e.length?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==a||null==s)throw new p;const c=t<<2|o>>4;if(i.push(c),64!==a){const e=o<<4&240|a>>2;if(i.push(e),64!==s){const e=a<<6&192|s;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
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
 */class p extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const g=function(e){return function(e){const t=h(e);return f.encodeByteArray(t,!0)}(e).replace(/\./g,"")};
/**
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
 */
const m=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,b=()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&function(e){try{return f.decodeString(e,!0)}catch(n){console.error("base64Decode failed: ",n)}return null}(e[1]);return t&&JSON.parse(t)},y=()=>{try{return m()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||b()}catch(e){return}},v=()=>{var e;return null===(e=y())||void 0===e?void 0:e.config};
/**
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
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}function I(){try{return"object"==typeof indexedDB}catch(e){return!1}}function S(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function E(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
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
 */class _ extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?function(e,t){return e.replace(D,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new _(i,a,n)}}const D=/\{\$([^}]+)}/g;function T(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],o=t[r];if(k(n)&&k(o)){if(!T(n,o))return!1}else if(n!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function k(e){return null!==e&&"object"==typeof e}
/**
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
 */function A(e,t=1e3,n=2){const i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
/**
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
 */function O(e){return e&&e._delegate?e._delegate:e}class M{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const P="[DEFAULT]";
/**
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
 */class j{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new w;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:P})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=P){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return s(this,null,(function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}))}isComponentSet(){return null!=this.component}isInitialized(e=P){return this.instances.has(e)}getOptions(e=P){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,o]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(r)&&o.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===P?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}var i;return n||null}normalizeInstanceIdentifier(e=P){return this.component?this.component.multipleInstances?e:P:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class N{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new j(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */var B,L;(L=B||(B={}))[L.DEBUG=0]="DEBUG",L[L.VERBOSE=1]="VERBOSE",L[L.INFO=2]="INFO",L[L.WARN=3]="WARN",L[L.ERROR=4]="ERROR",L[L.SILENT=5]="SILENT";const $={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},F=B.INFO,R={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},x=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=R[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class H{constructor(e){this.name=e,this._logLevel=F,this._logHandler=x,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?$[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}let K,z;const V=new WeakMap,W=new WeakMap,U=new WeakMap,q=new WeakMap,G=new WeakMap;let J={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return W.get(e);if("objectStoreNames"===t)return e.objectStoreNames||U.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Q(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Y(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(z||(z=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Z(this),t),Q(V.get(this))}:function(...t){return Q(e.apply(Z(this),t))}:function(t,...n){const i=e.call(Z(this),t,...n);return U.set(i,t.sort?t.sort():[t]),Q(i)}}function X(e){return"function"==typeof e?Y(e):(e instanceof IDBTransaction&&function(e){if(W.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)}));W.set(e,t)}(e),t=e,(K||(K=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,J):e);var t}function Q(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(Q(e.result)),i()},o=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&V.set(t,e)})).catch((()=>{})),G.set(t,e),t}(e);if(q.has(e))return q.get(e);const t=X(e);return t!==e&&(q.set(e,t),G.set(t,e)),t}const Z=e=>G.get(e);function ee(e,t,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const a=indexedDB.open(e,t),s=Q(a);return i&&a.addEventListener("upgradeneeded",(e=>{i(Q(a.result),e.oldVersion,e.newVersion,Q(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}function te(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",(e=>t(e.oldVersion,e))),Q(n).then((()=>{}))}const ne=["get","getKey","getAll","getAllKeys","count"],ie=["put","add","delete","clear"],re=new Map;function oe(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(re.get(t))return re.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=ie.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!ne.includes(n))return;const o=function(e,...t){return s(this,null,(function*(){const o=this.transaction(e,r?"readwrite":"readonly");let a=o.store;return i&&(a=a.index(t.shift())),(yield Promise.all([a[n](...t),r&&o.done]))[0]}))};return re.set(t,o),o}J=(e=>{return s=((e,t)=>{for(var n in t||(t={}))r.call(t,n)&&a(e,n,t[n]);if(i)for(var n of i(t))o.call(t,n)&&a(e,n,t[n]);return e})({},e),t(s,n({get:(t,n,i)=>oe(t,n)||e.get(t,n,i),has:(t,n)=>!!oe(t,n)||e.has(t,n)}));var s})(J);
/**
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
 */
class ae{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const se="@firebase/app",ce="0.11.2",le=new H("@firebase/app"),ue="@firebase/app-compat",de="@firebase/analytics-compat",he="@firebase/analytics",fe="@firebase/app-check-compat",pe="@firebase/app-check",ge="@firebase/auth",me="@firebase/auth-compat",be="@firebase/database",ye="@firebase/data-connect",ve="@firebase/database-compat",we="@firebase/functions",Ie="@firebase/functions-compat",Se="@firebase/installations",Ee="@firebase/installations-compat",_e="@firebase/messaging",Ce="@firebase/messaging-compat",De="@firebase/performance",Te="@firebase/performance-compat",ke="@firebase/remote-config",Ae="@firebase/remote-config-compat",Oe="@firebase/storage",Me="@firebase/storage-compat",Pe="@firebase/firestore",je="@firebase/vertexai",Ne="@firebase/firestore-compat",Be="firebase",Le="[DEFAULT]",$e={[se]:"fire-core",[ue]:"fire-core-compat",[he]:"fire-analytics",[de]:"fire-analytics-compat",[pe]:"fire-app-check",[fe]:"fire-app-check-compat",[ge]:"fire-auth",[me]:"fire-auth-compat",[be]:"fire-rtdb",[ye]:"fire-data-connect",[ve]:"fire-rtdb-compat",[we]:"fire-fn",[Ie]:"fire-fn-compat",[Se]:"fire-iid",[Ee]:"fire-iid-compat",[_e]:"fire-fcm",[Ce]:"fire-fcm-compat",[De]:"fire-perf",[Te]:"fire-perf-compat",[ke]:"fire-rc",[Ae]:"fire-rc-compat",[Oe]:"fire-gcs",[Me]:"fire-gcs-compat",[Pe]:"fire-fst",[Ne]:"fire-fst-compat",[je]:"fire-vertex","fire-js":"fire-js",[Be]:"fire-js-all"},Fe=new Map,Re=new Map,xe=new Map;function He(e,t){try{e.container.addComponent(t)}catch(n){le.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ke(e){const t=e.name;if(xe.has(t))return le.debug(`There were multiple attempts to register component ${t}.`),!1;xe.set(t,e);for(const n of Fe.values())He(n,e);for(const n of Re.values())He(n,e);return!0}function ze(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */const Ve=new C("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
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
 */
class We{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new M("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ve.create("app-deleted",{appName:this._name})}}function Ue(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:Le,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw Ve.create("bad-app-name",{appName:String(r)});if(n||(n=v()),!n)throw Ve.create("no-options");const o=Fe.get(r);if(o){if(T(n,o.options)&&T(i,o.config))return o;throw Ve.create("duplicate-app",{appName:r})}const a=new N(r);for(const c of xe.values())a.addComponent(c);const s=new We(n,i,a);return Fe.set(r,s),s}function qe(e=Le){const t=Fe.get(e);if(!t&&e===Le&&v())return Ue();if(!t)throw Ve.create("no-app",{appName:e});return t}function Ge(e,t,n){var i;let r=null!==(i=$e[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void le.warn(e.join(" "))}Ke(new M(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
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
 */const Je="firebase-heartbeat-store";let Ye=null;function Xe(){return Ye||(Ye=ee("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Je)}catch(n){console.warn(n)}}}).catch((e=>{throw Ve.create("idb-open",{originalErrorMessage:e.message})}))),Ye}function Qe(e,t){return s(this,null,(function*(){try{const n=(yield Xe()).transaction(Je,"readwrite"),i=n.objectStore(Je);yield i.put(t,Ze(e)),yield n.done}catch(n){if(n instanceof _)le.warn(n.message);else{const e=Ve.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});le.warn(e.message)}}}))}function Ze(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class et{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}triggerHeartbeat(){return s(this,null,(function*(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tt();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}
/**
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){le.warn(n)}}))}getHeartbeatsHeader(){return s(this,null,(function*(){var e;try{if(null===this._heartbeatsCache&&(yield this._heartbeatsCachePromise),null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=tt(),{heartbeatsToSend:n,unsentEntries:i}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),it(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),it(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),r=g(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return le.warn(t),""}}))}}function tt(){return(new Date).toISOString().substring(0,10)}class nt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return s(this,null,(function*(){return!!I()&&S().then((()=>!0)).catch((()=>!1))}))}read(){return s(this,null,(function*(){if(yield this._canUseIndexedDBPromise){const e=yield function(e){return s(this,null,(function*(){try{const t=(yield Xe()).transaction(Je),n=yield t.objectStore(Je).get(Ze(e));return yield t.done,n}catch(t){if(t instanceof _)le.warn(t.message);else{const e=Ve.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});le.warn(e.message)}}}))}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}))}overwrite(e){return s(this,null,(function*(){var t;if(yield this._canUseIndexedDBPromise){const n=yield this.read();return Qe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}))}add(e){return s(this,null,(function*(){var t;if(yield this._canUseIndexedDBPromise){const n=yield this.read();return Qe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}))}}function it(e){return g(JSON.stringify({version:2,heartbeats:e})).length}var rt;rt="",Ke(new M("platform-logger",(e=>new ae(e)),"PRIVATE")),Ke(new M("heartbeat",(e=>new et(e)),"PRIVATE")),Ge(se,ce,rt),Ge(se,ce,"esm2017"),Ge("fire-js","");
/**
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
 */
Ge("firebase","11.4.0","app");const ot="@firebase/installations",at="0.6.13",st=1e4,ct=`w:${at}`,lt="FIS_v2",ut=36e5,dt=new C("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function ht(e){return e instanceof _&&e.code.includes("request-failed")}
/**
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
 */function ft({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function pt(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function gt(e,t){return s(this,null,(function*(){const n=(yield t.json()).error;return dt.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}))}function mt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function bt(e,{refreshToken:t}){const n=mt(e);return n.append("Authorization",function(e){return`${lt} ${e}`}
/**
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
 */(t)),n}function yt(e){return s(this,null,(function*(){const t=yield e();return t.status>=500&&t.status<600?e():t}))}
/**
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
 */
function vt(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
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
 */
/**
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
 */
const wt=/^[cdef][\w-]{21}$/;function It(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
/**
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
 */(e);return wt.test(t)?t:""}catch(e){return""}}function St(e){return`${e.appName}!${e.appId}`}
/**
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
 */const Et=new Map;function _t(e,t){const n=St(e);Ct(n,t),function(e,t){const n=function(){!Dt&&"BroadcastChannel"in self&&(Dt=new BroadcastChannel("[Firebase] FID Change"),Dt.onmessage=e=>{Ct(e.data.key,e.data.fid)});return Dt}();n&&n.postMessage({key:e,fid:t});0===Et.size&&Dt&&(Dt.close(),Dt=null)}(n,t)}function Ct(e,t){const n=Et.get(e);if(n)for(const i of n)i(t)}let Dt=null;
/**
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
 */
const Tt="firebase-installations-store";let kt=null;function At(){return kt||(kt=ee("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Tt)}})),kt}function Ot(e,t){return s(this,null,(function*(){const n=St(e),i=(yield At()).transaction(Tt,"readwrite"),r=i.objectStore(Tt),o=yield r.get(n);return yield r.put(t,n),yield i.done,o&&o.fid===t.fid||_t(e,t.fid),t}))}function Mt(e){return s(this,null,(function*(){const t=St(e),n=(yield At()).transaction(Tt,"readwrite");yield n.objectStore(Tt).delete(t),yield n.done}))}function Pt(e,t){return s(this,null,(function*(){const n=St(e),i=(yield At()).transaction(Tt,"readwrite"),r=i.objectStore(Tt),o=yield r.get(n),a=t(o);return void 0===a?yield r.delete(n):yield r.put(a,n),yield i.done,!a||o&&o.fid===a.fid||_t(e,a.fid),a}))}
/**
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
 */function jt(e){return s(this,null,(function*(){let t;const n=yield Pt(e.appConfig,(n=>{const i=function(e){const t=e||{fid:It(),registrationStatus:0};return Lt(t)}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(dt.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=function(e,t){return s(this,null,(function*(){try{const n=yield function(e,t){return s(this,arguments,(function*({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=ft(e),r=mt(e),o=t.getImmediate({optional:!0});if(o){const e=yield o.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const a={fid:n,authVersion:lt,appId:e.appId,sdkVersion:ct},s={method:"POST",headers:r,body:JSON.stringify(a)},c=yield yt((()=>fetch(i,s)));if(c.ok){const e=yield c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:pt(e.authToken)}}throw yield gt("Create Installation",c)}))}(e,t);return Ot(e.appConfig,n)}catch(n){throw ht(n)&&409===n.customData.serverCode?yield Mt(e.appConfig):yield Ot(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}))}(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Nt(e)}:{installationEntry:t}}(e,i);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:yield t}:{installationEntry:n,registrationPromise:t}}))}function Nt(e){return s(this,null,(function*(){let t=yield Bt(e.appConfig);for(;1===t.registrationStatus;)yield vt(100),t=yield Bt(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=yield jt(e);return n||t}return t}))}function Bt(e){return Pt(e,(e=>{if(!e)throw dt.create("installation-not-found");return Lt(e)}))}function Lt(e){return 1===(t=e).registrationStatus&&t.registrationTime+st<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
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
 */}function $t(e,t){return s(this,arguments,(function*({appConfig:e,heartbeatServiceProvider:t},n){const i=function(e,{fid:t}){return`${ft(e)}/${t}/authTokens:generate`}
/**
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
 */(e,n),r=bt(e,n),o=t.getImmediate({optional:!0});if(o){const e=yield o.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const a={installation:{sdkVersion:ct,appId:e.appId}},s={method:"POST",headers:r,body:JSON.stringify(a)},c=yield yt((()=>fetch(i,s)));if(c.ok){return pt(yield c.json())}throw yield gt("Generate Auth Token",c)}))}function Ft(e,t=!1){return s(this,null,(function*(){let n;const i=yield Pt(e.appConfig,(i=>{if(!xt(i))throw dt.create("not-registered");const r=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+ut}(e)}(r))return i;if(1===r.requestStatus)return n=function(e,t){return s(this,null,(function*(){let n=yield Rt(e.appConfig);for(;1===n.authToken.requestStatus;)yield vt(100),n=yield Rt(e.appConfig);const i=n.authToken;return 0===i.requestStatus?Ft(e,t):i}))}(e,t),i;{if(!navigator.onLine)throw dt.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=function(e,t){return s(this,null,(function*(){try{const n=yield $t(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return yield Ot(e.appConfig,i),n}catch(n){if(!ht(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});yield Ot(e.appConfig,n)}else yield Mt(e.appConfig);throw n}}))}(e,t),t}}));return n?yield n:i.authToken}))}function Rt(e){return Pt(e,(e=>{if(!xt(e))throw dt.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+st<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
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
 */}))}function xt(e){return void 0!==e&&2===e.registrationStatus}
/**
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
 */
function Ht(e,t=!1){return s(this,null,(function*(){const n=e;yield function(e){return s(this,null,(function*(){const{registrationPromise:t}=yield jt(e);t&&(yield t)}))}
/**
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
 */(n);return(yield Ft(n,t)).token}))}function Kt(e){return dt.create("missing-app-config-values",{valueName:e})}
/**
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
 */const zt="installations",Vt=e=>{const t=ze(e.getProvider("app").getImmediate(),zt).getImmediate();return{getId:()=>function(e){return s(this,null,(function*(){const t=e,{installationEntry:n,registrationPromise:i}=yield jt(t);return i?i.catch(console.error):Ft(t).catch(console.error),n.fid}))}(t),getToken:e=>Ht(t,e)}};Ke(new M(zt,(e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Kt("App Configuration");if(!e.name)throw Kt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Kt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:ze(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),Ke(new M("installations-internal",Vt,"PRIVATE")),Ge(ot,at),Ge(ot,at,"esm2017");
/**
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
 */
const Wt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ut="google.c.a.c_id",qt=1e4;var Gt,Jt,Yt;
/**
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
 */
function Xt(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Qt(e){const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),i=new Uint8Array(n.length);for(let r=0;r<n.length;++r)i[r]=n.charCodeAt(r);return i}
/**
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
 */(Jt=Gt||(Gt={}))[Jt.DATA_MESSAGE=1]="DATA_MESSAGE",Jt[Jt.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(Yt||(Yt={}));const Zt="fcm_token_details_db",en="fcm_token_object_Store";
/**
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
 */
const tn="firebase-messaging-store";let nn=null;function rn(){return nn||(nn=ee("firebase-messaging-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(tn)}})),nn}function on(e){return s(this,null,(function*(){const t=sn(e),n=yield rn(),i=yield n.transaction(tn).objectStore(tn).get(t);if(i)return i;{const t=yield function(e){return s(this,null,(function*(){if("databases"in indexedDB&&!(yield indexedDB.databases()).map((e=>e.name)).includes(Zt))return null;let t=null;return(yield ee(Zt,5,{upgrade:(n,i,r,o)=>s(this,null,(function*(){var r;if(i<2)return;if(!n.objectStoreNames.contains(en))return;const a=o.objectStore(en),s=yield a.index("fcmSenderId").get(e);if(yield a.clear(),s)if(2===i){const e=s;if(!e.auth||!e.p256dh||!e.endpoint)return;t={token:e.fcmToken,createTime:null!==(r=e.createTime)&&void 0!==r?r:Date.now(),subscriptionOptions:{auth:e.auth,p256dh:e.p256dh,endpoint:e.endpoint,swScope:e.swScope,vapidKey:"string"==typeof e.vapidKey?e.vapidKey:Xt(e.vapidKey)}}}else if(3===i){const e=s;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Xt(e.auth),p256dh:Xt(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Xt(e.vapidKey)}}}else if(4===i){const e=s;t={token:e.fcmToken,createTime:e.createTime,subscriptionOptions:{auth:Xt(e.auth),p256dh:Xt(e.p256dh),endpoint:e.endpoint,swScope:e.swScope,vapidKey:Xt(e.vapidKey)}}}}))})).close(),yield te(Zt),yield te("fcm_vapid_details_db"),yield te("undefined"),function(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?t:null}))}(e.appConfig.senderId);if(t)return yield an(e,t),t}}))}function an(e,t){return s(this,null,(function*(){const n=sn(e),i=(yield rn()).transaction(tn,"readwrite");return yield i.objectStore(tn).put(t,n),yield i.done,t}))}function sn({appConfig:e}){return e.appId}
/**
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
 */const cn=new C("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});function ln({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}function un(e){return s(this,arguments,(function*({appConfig:e,installations:t}){const n=yield t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}))}function dn({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const r={web:{endpoint:n,auth:t,p256dh:e}};return i!==Wt&&(r.web.applicationPubKey=i),r}
/**
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
 */function hn(e){return s(this,null,(function*(){const t=yield function(e,t){return s(this,null,(function*(){const n=yield e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Qt(t)})}))}(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:Xt(t.getKey("auth")),p256dh:Xt(t.getKey("p256dh"))},i=yield on(e.firebaseDependencies);if(i){if(function(e,t){const n=t.vapidKey===e.vapidKey,i=t.endpoint===e.endpoint,r=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&i&&r&&o}
/**
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
 */(i.subscriptionOptions,n))return Date.now()>=i.createTime+6048e5?function(e,t){return s(this,null,(function*(){try{const n=yield function(e,t){return s(this,null,(function*(){const n=yield un(e),i=dn(t.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(i)};let o;try{const n=yield fetch(`${ln(e.appConfig)}/${t.token}`,r);o=yield n.json()}catch(a){throw cn.create("token-update-failed",{errorInfo:null==a?void 0:a.toString()})}if(o.error){const e=o.error.message;throw cn.create("token-update-failed",{errorInfo:e})}if(!o.token)throw cn.create("token-update-no-token");return o.token}))}(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return yield an(e.firebaseDependencies,i),n}catch(n){throw n}}))}(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{yield function(e,t){return s(this,null,(function*(){const n={method:"DELETE",headers:yield un(e)};try{const i=yield fetch(`${ln(e.appConfig)}/${t}`,n),r=yield i.json();if(r.error){const e=r.error.message;throw cn.create("token-unsubscribe-failed",{errorInfo:e})}}catch(i){throw cn.create("token-unsubscribe-failed",{errorInfo:null==i?void 0:i.toString()})}}))}(e.firebaseDependencies,i.token)}catch(r){console.warn(r)}return fn(e.firebaseDependencies,n)}return fn(e.firebaseDependencies,n)}))}function fn(e,t){return s(this,null,(function*(){const n=
/**
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
 */yield function(e,t){return s(this,null,(function*(){const n=yield un(e),i=dn(t),r={method:"POST",headers:n,body:JSON.stringify(i)};let o;try{const t=yield fetch(ln(e.appConfig),r);o=yield t.json()}catch(a){throw cn.create("token-subscribe-failed",{errorInfo:null==a?void 0:a.toString()})}if(o.error){const e=o.error.message;throw cn.create("token-subscribe-failed",{errorInfo:e})}if(!o.token)throw cn.create("token-subscribe-no-token");return o.token}))}(e,t),i={token:n,createTime:Date.now(),subscriptionOptions:t};return yield an(e,i),i.token}))}function pn(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const r=t.notification.image;r&&(e.notification.image=r);const o=t.notification.icon;o&&(e.notification.icon=o)}(t,e),function(e,t){if(!t.data)return;e.data=t.data}(t,e),function(e,t){var n,i,r,o,a;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};const s=null!==(r=null===(i=t.fcmOptions)||void 0===i?void 0:i.link)&&void 0!==r?r:null===(o=t.notification)||void 0===o?void 0:o.click_action;s&&(e.fcmOptions.link=s);const c=null===(a=t.fcmOptions)||void 0===a?void 0:a.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}
/**
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
 */(t,e),t}function gn(e){return cn.create("missing-app-config-values",{valueName:e})}
/**
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
 */
/**
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
 */
!function(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));n.join("")}
/**
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
 */("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class mn{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=function(e){if(!e||!e.options)throw gn("App Configuration Object");if(!e.name)throw gn("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw gn(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:i,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}
/**
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
 */function bn(e){return s(this,null,(function*(){try{e.swRegistration=yield navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),e.swRegistration.update().catch((()=>{})),yield function(e){return s(this,null,(function*(){return new Promise(((t,n)=>{const i=setTimeout((()=>n(new Error("Service worker not registered after 10000 ms"))),qt),r=e.installing||e.waiting;e.active?(clearTimeout(i),t()):r?r.onstatechange=e=>{var n;"activated"===(null===(n=e.target)||void 0===n?void 0:n.state)&&(r.onstatechange=null,clearTimeout(i),t())}:(clearTimeout(i),n(new Error("No incoming service worker found.")))}))}))}
/**
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
 */(e.swRegistration)}catch(t){throw cn.create("failed-service-worker-registration",{browserErrorMessage:null==t?void 0:t.message})}}))}
/**
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
 */
function yn(e,t){return s(this,null,(function*(){if(!navigator)throw cn.create("only-available-in-window");if("default"===Notification.permission&&(yield Notification.requestPermission()),"granted"!==Notification.permission)throw cn.create("permission-blocked");
/**
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
 */
return yield function(e,t){return s(this,null,(function*(){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Wt)}))}(e,null==t?void 0:t.vapidKey),yield function(e,t){return s(this,null,(function*(){if(t||e.swRegistration||(yield bn(e)),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw cn.create("invalid-sw-registration");e.swRegistration=t}}))}(e,null==t?void 0:t.serviceWorkerRegistration),hn(e)}))}
/**
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
 */function vn(e,t,n){return s(this,null,(function*(){const i=function(e){switch(e){case Yt.NOTIFICATION_CLICKED:return"notification_open";case Yt.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
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
 */(t);(yield e.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:n[Ut],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}))}function wn(e,t){return s(this,null,(function*(){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===Yt.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(pn(n)):e.onMessageHandler.next(pn(n)));const i=n.data;var r;"object"==typeof(r=i)&&r&&Ut in r&&"1"===i["google.c.a.e"]&&(yield vn(e,n.messageType,i))}))}const In="@firebase/messaging",Sn="0.12.17",En=e=>{const t=new mn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",(e=>wn(t,e))),t},_n=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:e=>yn(t,e)}};Ke(new M("messaging",En,"PUBLIC")),Ke(new M("messaging-internal",_n,"PRIVATE")),Ge(In,Sn),Ge(In,Sn,"esm2017");
/**
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
 */
const Cn="analytics",Dn="https://www.googletagmanager.com/gtag/js",Tn=new H("@firebase/analytics"),kn=new C("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
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
 */
function An(e){if(!e.startsWith(Dn)){const t=kn.create("invalid-gtag-resource",{gtagURL:e});return Tn.warn(t.message),""}return e}function On(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Mn(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:An}),i=document.createElement("script"),r=`${Dn}?l=${e}&id=${t}`;i.src=n?null==n?void 0:n.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function Pn(e,t,n,i){return function(r,...o){return s(this,null,(function*(){try{if("event"===r){const[i,r]=o;yield function(e,t,n,i,r){return s(this,null,(function*(){try{let o=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const i=yield On(n);for(const n of e){const e=i.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){o=[];break}o.push(r)}}0===o.length&&(o=Object.values(t)),yield Promise.all(o),e("event",i,r||{})}catch(o){Tn.error(o)}}))}(e,t,n,i,r)}else if("config"===r){const[r,a]=o;yield function(e,t,n,i,r,o){return s(this,null,(function*(){const a=i[r];try{if(a)yield t[a];else{const e=(yield On(n)).find((e=>e.measurementId===r));e&&(yield t[e.appId])}}catch(s){Tn.error(s)}e("config",r,o)}))}(e,t,n,i,r,a)}else if("consent"===r){const[t,n]=o;e("consent",t,n)}else if("get"===r){const[t,n,i]=o;e("get",t,n,i)}else if("set"===r){const[t]=o;e("set",t)}else e(r,...o)}catch(a){Tn.error(a)}}))}}const jn=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Nn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function Bn(e){return s(this,arguments,(function*(e,t=jn,n){const{appId:i,apiKey:r,measurementId:o}=e.options;if(!i)throw kn.create("no-app-id");if(!r){if(o)return{measurementId:o,appId:i};throw kn.create("no-api-key")}const a=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new $n;return setTimeout((()=>s(this,null,(function*(){c.abort()}))),void 0!==n?n:6e4),Ln({appId:i,apiKey:r,measurementId:o},a,c,t)}))}function Ln(e,t,n){return s(this,arguments,(function*(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=jn){var o;const{appId:a,measurementId:c}=e;try{yield function(e,t){return new Promise(((n,i)=>{const r=Math.max(t-Date.now(),0),o=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(o),i(kn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(i,t)}catch(l){if(c)return Tn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null==l?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const t=yield function(e){return s(this,null,(function*(){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:Nn(i)},o="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),a=yield fetch(o,r);if(200!==a.status&&304!==a.status){let e="";try{const n=yield a.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(s){}throw kn.create("config-fetch-failed",{httpStatus:a.status,responseMessage:e})}return a.json()}))}(e);return r.deleteThrottleMetadata(a),t}catch(l){const t=l;if(!function(e){if(!(e instanceof _&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(r.deleteThrottleMetadata(a),c)return Tn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null==t?void 0:t.message}]`),{appId:a,measurementId:c};throw l}const s=503===Number(null===(o=null==t?void 0:t.customData)||void 0===o?void 0:o.httpStatus)?A(n,r.intervalMillis,30):A(n,r.intervalMillis),u={throttleEndTimeMillis:Date.now()+s,backoffCount:n+1};return r.setThrottleMetadata(a,u),Tn.debug(`Calling attemptFetch again in ${s} millis`),Ln(e,u,i,r)}}))}class $n{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}function Fn(e,t,n,i,r,o,a){return s(this,null,(function*(){var c;const l=Bn(e);l.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Tn.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Tn.error(e))),t.push(l);const u=
/**
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
 */
function(){return s(this,null,(function*(){if(!I())return Tn.warn(kn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{yield S()}catch(e){return Tn.warn(kn.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}))}().then((e=>e?i.getId():void 0)),[d,h]=yield Promise.all([l,u]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Dn)&&n.src.includes(e))return n;return null}
/**
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
 */)(o)||Mn(o,d.measurementId),r("js",new Date);const f=null!==(c=null==a?void 0:a.config)&&void 0!==c?c:{};return f.origin="firebase",f.update=!0,null!=h&&(f.firebase_id=h),r("config",d.measurementId,f),d.measurementId}))}
/**
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
 */class Rn{constructor(e){this.app=e}_delete(){return delete xn[this.app.options.appId],Promise.resolve()}}let xn={},Hn=[];const Kn={};let zn,Vn,Wn="dataLayer",Un=!1;function qn(){const e=[];if(function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),E()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=kn.create("invalid-analytics-context",{errorInfo:t});Tn.warn(n.message)}}function Gn(e,t,n){qn();const i=e.options.appId;if(!i)throw kn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw kn.create("no-api-key");Tn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=xn[i])throw kn.create("already-exists",{id:i});if(!Un){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Wn);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,i,r){let o=function(...e){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(o=window[r]),window[r]=Pn(o,e,t,n),{gtagCore:o,wrappedGtag:window[r]}}(xn,Hn,Kn,Wn,"gtag");Vn=e,zn=t,Un=!0}xn[i]=Fn(e,Hn,Kn,t,zn,Wn,n);return new Rn(e)}function Jn(e,t,n,i){e=O(e),function(e,t,n,i,r){return s(this,null,(function*(){if(r&&r.global)e("event",n,i);else{const r=yield t,o=Object.assign(Object.assign({},i),{send_to:r});e("event",n,o)}}))}(Vn,xn[e.app.options.appId],t,n,i).catch((e=>Tn.error(e)))}const Yn="@firebase/analytics",Xn="0.10.12";Ke(new M(Cn,((e,{options:t})=>Gn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Ke(new M("analytics-internal",(function(e){try{const t=e.getProvider(Cn).getImmediate();return{logEvent:(e,n,i)=>Jn(t,e,n,i)}}catch(t){throw kn.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),Ge(Yn,Xn),Ge(Yn,Xn,"esm2017");const{localStore:Qn}=d(),Zn=Ue({apiKey:"AIzaSyCyGbt1mWnyl1UXOZXaxjuTJSlBUE9r8W8",authDomain:"arbwallet-1e619.firebaseapp.com",projectId:"arbwallet-1e619",storageBucket:"arbwallet-1e619.firebasestorage.app",messagingSenderId:"892597940252",appId:"1:892597940252:web:353190024c32ce80a12fd9",measurementId:"G-WFYPV044M5"}),ei=
/**
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
 */
function(e=qe()){
/**
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
 */
return function(){return s(this,null,(function*(){try{yield S()}catch(e){return!1}return"undefined"!=typeof window&&I()&&E()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}))}
/**
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
 */().then((e=>{if(!e)throw cn.create("unsupported-browser")}),(e=>{throw cn.create("indexed-db-unsupported")})),ze(O(e),"messaging").getImmediate()}(Zn),ti=function(e=qe()){const t=ze(e=O(e),Cn);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=ze(e,Cn);if(n.isInitialized()){const e=n.getImmediate();if(T(t,n.getOptions()))return e;throw kn.create("already-initialized")}const i=n.initialize({options:t});return i}(e)}(Zn),ni=()=>s(void 0,null,(function*(){try{const e=yield function(e,t){return s(this,null,(function*(){return yn(e=O(e),t)}))}(ei,{vapidKey:"BLP2Y2p7makX1c1Te9ySLbQm6o12Cjz9aWNxKBKcmv4M3zZwluPwNadLqJiPvOYF_Ak85outySG_BGyOsCQpV_c"});if(e)return Qn.get("memberId")&&Qn.get("userInfo")&&Qn.get("token")&&(yield c({deviceId:e,deviceType:"3",memberId:Qn.get("memberId")})),e}catch(e){console.error("获取 FCM 令牌失败:",e)}})),ii=()=>s(void 0,null,(function*(){yield l(),u(yield ni())}));var ri;window.__FIREBASE_MESSAGE_LISTENER__||(window.__FIREBASE_MESSAGE_LISTENER__=!0,ei&&(ri=e=>{e.notification&&new Notification(e.notification.title,{body:e.notification.body,icon:"logo_192x192.png"})},function(e,t){if(!navigator)throw cn.create("only-available-in-window");e.onMessageHandler=t}(O(ei),ri)));export{ti as analytics,l as ensureDeviceCode,ii as init,ni as requestPermission};
