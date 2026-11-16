var e=(e,t,n)=>new Promise(((r,s)=>{var a=e=>{try{i(n.next(e))}catch(t){s(t)}},o=e=>{try{i(n.throw(e))}catch(t){s(t)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,o);i((n=n.apply(e,t)).next())}));import{a as t,c as n}from"./vant-5c9c8dfc.js";import{r}from"./vendor-f10e4ea9.js";function s(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class a{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class o{refCount(e){return i("refCount")}incRef(e){return i("incRef")}timerAvailable(){return!0}time(e){return i("time")}read(e){return i("read")}readSync(e){return i("readSync")}readToGPU(e,t){return i("readToGPU")}numDataIds(){return i("numDataIds")}disposeData(e,t){return i("disposeData")}write(e,t,n){return i("write")}move(e,t,n,r,s){return i("move")}createTensorFromGPUData(e,t,n){return i("createTensorFromGPUData")}memory(){return i("memory")}floatPrecision(){return i("floatPrecision")}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}dispose(){return i("dispose")}}function i(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,t--,p(e,t,n)}function l(e,t,n){return Math.max(e,Math.min(t,n))}function c(e){return e%2==0?e:e+1}function p(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function d(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function h(e,t){if(!e)throw new Error("string"==typeof t?t:t())}function m(e,t,n=""){h(b(e,t),(()=>n+` Shapes ${e} and ${t} must match`))}function f(e){h(null!=e,(()=>"The input to the tensor constructor must be a non-null value."))}function g(e){if(0===e.length)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function y(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(null!==e[n]&&null!==t[n]&&e[n]!==t[n])return!1;return!0}function b(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function w(e){return e%1==0}function N(e){const t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function x(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function v(e,t=e=>0,n,r){return new Promise(((s,a)=>{let o=0;const i=()=>{if(e())return void s();o++;const u=t(o);null!=n&&o>=n?a():null!=r?r(i,u):setTimeout(i,u)};i()}))}function T(e,t){let n=1,r=-1;for(let a=0;a<e.length;++a)if(e[a]>=0)n*=e[a];else if(-1===e[a]){if(-1!==r)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${a}`);r=a}else if(e[a]<0)throw Error(`Shapes can not be < 0. Found ${e[a]} at dim ${a}`);if(-1===r){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(0===n)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!=0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);const s=e.slice();return s[r]=t/n,s}function S(e,t){const n=t.length;return h((e=null==e?t.map(((e,t)=>t)):[].concat(e)).every((e=>e>=-n&&e<n)),(()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`)),h(e.every((e=>w(e))),(()=>`All values in axis param must be integers but got axis ${e}`)),e.map((e=>e<0?n+e:e))}function k(e,t){const n=[],r=[],s=null!=t&&Array.isArray(t)&&0===t.length,a=null==t||s?null:S(t,e).sort();let o=0;for(let i=0;i<e.length;++i){if(null!=a){if(a[o]===i&&1!==e[i])throw new Error(`Can't squeeze axis ${i} since its dim '${e[i]}' is not 1`);(null==a[o]||a[o]>i)&&1===e[i]&&(n.push(e[i]),r.push(i)),a[o]<=i&&o++}1!==e[i]&&(n.push(e[i]),r.push(i))}return{newShape:n,keptDims:r}}function E(e,t){return _(e,t)}function _(e,t){let n=null;if(null==e||"float32"===e)n=new Float32Array(t);else if("int32"===e)n=new Int32Array(t);else if("bool"===e)n=new Uint8Array(t);else{if("string"!==e)throw new Error(`Unknown data type ${e}`);n=new Array(t)}return n}function I(e,t){for(let n=0;n<e.length;n++){const r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function A(e){return"bool"===e||"complex64"===e||"float32"===e||"int32"===e||"string"===e}function M(e,t){return"complex64"!==t&&(("float32"!==t||"complex64"===e)&&(("int32"!==t||"float32"===e||"complex64"===e)&&("bool"!==t||"bool"!==e)))}function $(e){if("float32"===e||"int32"===e)return 4;if("complex64"===e)return 8;if("bool"===e)return 1;throw new Error(`Unknown dtype ${e}`)}function O(e){if(null==e)return 0;let t=0;return e.forEach((e=>t+=e.length)),t}function D(e){return"string"==typeof e||e instanceof String}function C(e){return"boolean"==typeof e}function R(e){return"number"==typeof e}function F(e){return Array.isArray(e)?F(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":R(e)?"float32":D(e)?"string":C(e)?"bool":"float32"}function B(e){return!!(e&&e.constructor&&e.call&&e.apply)}function z(e,t){for(let n=t;n<e;++n)if(e%n==0)return n;return e}function L(e){const t=e.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function P(e,t,n,r=!1){const s=new Array;if(1===t.length){const a=t[0]*(r?2:1);for(let t=0;t<a;t++)s[t]=n[e+t]}else{const a=t[0],o=t.slice(1),i=o.reduce(((e,t)=>e*t))*(r?2:1);for(let t=0;t<a;t++)s[t]=P(e+t*i,o,n,r)}return s}function V(e,t,n=!1){if(0===e.length)return t[0];const r=e.reduce(((e,t)=>e*t))*(n?2:1);if(0===r)return[];if(r!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return P(0,e,t,n)}function U(e,t){if(Array.isArray(e))return e;if("float32"===t)return e instanceof Float32Array?e:new Float32Array(e);if("int32"===t)return e instanceof Int32Array?e:new Int32Array(e);if("bool"===t||"string"===t)return Uint8Array.from(new Int32Array(e));throw new Error(`Unknown dtype ${t}`)}function j(e,t){const n=W(e,t);for(let r=0;r<n.length;r++)n[r]=1;return n}function W(e,t){if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t)return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function q(e,t){const n=e.reduce(((e,t)=>e*t),1);if(null==t||"float32"===t)return V(e,new Float32Array(n));if("int32"===t)return V(e,new Int32Array(n));if("bool"===t)return V(e,new Uint8Array(n));throw new Error(`Unknown data type ${t}`)}function G(e){e.forEach((t=>{h(Number.isInteger(t)&&t>=0,(()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`))}))}function K(e,t,n){if(0===t)return 0;if(1===t)return e[0];let r=e[e.length-1];for(let s=0;s<e.length-1;++s)r+=n[s]*e[s];return r}function H(e,t,n){if(0===t)return[];if(1===t)return[e];const r=new Array(t);for(let s=0;s<r.length-1;++s)r[s]=Math.floor(e/n[s]),e-=r[s]*n[s];return r[r.length-1]=e,r}function J(e){return e&&e.then&&"function"==typeof e.then}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Z="tfjsflags";class Y{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=X,this.populateURLFlags()}setPlatform(e,t){null!=this.platform&&(Q().getBool("IS_TEST")||Q().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},null!=this.urlFlags[e]){const t=this.urlFlags[e];Q().getBool("IS_TEST")||Q().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${t}.`),this.set(e,t)}}getAsync(t){return e(this,null,(function*(){return t in this.flags||(this.flags[t]=yield this.evaluateFlag(t)),this.flags[t]}))}get(e){if(e in this.flags)return this.flags[e];const t=this.evaluateFlag(e);if(J(t))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(null==this.flagRegistry[e])throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,null!=this.flagRegistry[e].setHook&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(null==this.flagRegistry[e])throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(void 0===this.global||void 0===this.global.location||void 0===this.global.location.search)return;const e=this.getQueryParams(this.global.location.search);if(Z in e){e[Z].split(",").forEach((e=>{const[t,n]=e.split(":");this.urlFlags[t]=function(e,t){const n=t.toLowerCase();return"true"===n||"false"===n?"true"===n:""+ +n===n?+n:t}(0,n)}))}}}function X(e){const t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,((e,...n)=>(function(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}(t,n[0],n[1]),n.join("=")))),t}function Q(){return te}let ee,te=null;function ne(){if(null==ee){let e;if("undefined"!=typeof window)e=window;else if("undefined"!=typeof global)e=global;else if("undefined"!=typeof process)e=process;else{if("undefined"==typeof self)throw new Error("Could not find a global object");e=self}ee=e}return ee}function re(e,t){const n=function(){const e=ne();return null==e._tfGlobals&&(e._tfGlobals=new Map),e._tfGlobals}();if(n.has(e))return n.get(e);{const r=t();return n.set(e,r),n.get(e)}}const se="Abs",ae="Acos",oe="Acosh",ie="Add",ue="AddN",le="All",ce="Any",pe="ArgMax",de="ArgMin",he="Asin",me="Asinh",fe="Atan",ge="Atanh",ye="Atan2",be="AvgPool",we="AvgPoolGrad",Ne="AvgPool3D",xe="AvgPool3DGrad",ve="BatchMatMul",Te="BatchToSpaceND",Se="Bincount",ke="BitwiseAnd",Ee="BroadcastTo",_e="BroadcastArgs",Ie="Cast",Ae="Ceil",Me="ClipByValue",$e="Complex",Oe="ComplexAbs",De="Concat",Ce="Conv2D",Re="Conv2DBackpropFilter",Fe="Conv2DBackpropInput",Be="Conv3D",ze="Conv3DBackpropFilterV2",Le="Conv3DBackpropInputV2",Pe="Cos",Ve="Cosh",Ue="Cumprod",je="Cumsum",We="CropAndResize",qe="DenseBincount",Ge="DepthToSpace",Ke="DepthwiseConv2dNative",He="DepthwiseConv2dNativeBackpropFilter",Je="DepthwiseConv2dNativeBackpropInput",Ze="Diag",Ye="Dilation2D",Xe="Dilation2DBackpropInput",Qe="Dilation2DBackpropFilter",et="Draw",tt="RealDiv",nt="Einsum",rt="Elu",st="EluGrad",at="Erf",ot="Equal",it="Exp",ut="ExpandDims",lt="Expm1",ct="FFT",pt="Fill",dt="FlipLeftRight",ht="Floor",mt="FloorDiv",ft="FusedBatchNorm",gt="GatherV2",yt="GatherNd",bt="Greater",wt="GreaterEqual",Nt="Identity",xt="IFFT",vt="Imag",Tt="IsFinite",St="IsInf",kt="IsNan",Et="LeakyRelu",_t="Less",It="LessEqual",At="LinSpace",Mt="Log",$t="Log1p",Ot="LogicalAnd",Dt="LogicalNot",Ct="LogicalOr",Rt="LogicalXor",Ft="LogSoftmax",Bt="LowerBound",zt="LRN",Lt="LRNGrad",Pt="MatrixBandPart",Vt="Max",Ut="Maximum",jt="MaxPool",Wt="MaxPoolGrad",qt="MaxPool3D",Gt="MaxPool3DGrad",Kt="MaxPoolWithArgmax",Ht="Mean",Jt="Min",Zt="Minimum",Yt="MirrorPad",Xt="Mod",Qt="Multinomial",en="Multiply",tn="Neg",nn="NotEqual",rn="NonMaxSuppressionV3",sn="NonMaxSuppressionV4",an="NonMaxSuppressionV5",on="OnesLike",un="OneHot",ln="Pack",cn="PadV2",pn="Pool",dn="Pow",hn="Prelu",mn="Prod",fn="RaggedGather",gn="RaggedRange",yn="RaggedTensorToTensor",bn="Range",wn="Real",Nn="Reciprocal",xn="Relu",vn="Reshape",Tn="ResizeNearestNeighbor",Sn="ResizeNearestNeighborGrad",kn="ResizeBilinear",En="ResizeBilinearGrad",_n="Relu6",In="Reverse",An="Round",Mn="Rsqrt",$n="ScatterNd",On="TensorScatterUpdate",Dn="SearchSorted",Cn="Select",Rn="Selu",Fn="Slice",Bn="Sin",zn="Sinh",Ln="Sign",Pn="Sigmoid",Vn="Softplus",Un="Sqrt",jn="Sum",Wn="SpaceToBatchND",qn="SplitV",Gn="Softmax",Kn="SparseFillEmptyRows",Hn="SparseReshape",Jn="SparseSegmentMean",Zn="SparseSegmentSum",Yn="SparseToDense",Xn="SquaredDifference",Qn="Square",er="StaticRegexReplace",tr="StridedSlice",nr="StringNGrams",rr="StringSplit",sr="StringToHashBucketFast",ar="Sub",or="Tan",ir="Tanh",ur="Tile",lr="TopK",cr="Transform",pr="Transpose",dr="Unique",hr="Unpack",mr="UnsortedSegmentSum",fr="UpperBound",gr="ZerosLike",yr="Step",br="FromPixels",wr="RotateWithOffset",Nr="_FusedMatMul",xr="FusedConv2D",vr="FusedDepthwiseConv2D";
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Tr(...e){Q().getBool("IS_TEST")||Q().getBool("PROD")||console.warn(...e)}function Sr(...e){!Q().getBool("IS_TEST")&&Q().getBool("PROD")}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kr=re("kernelRegistry",(()=>new Map)),Er=re("gradRegistry",(()=>new Map));function _r(e,t){const n=Rr(e,t);return kr.get(n)}function Ir(e){return Er.get(e)}function Ar(e){const t=kr.entries(),n=[];for(;;){const{done:r,value:s}=t.next();if(r)break;const[a,o]=s,[i]=a.split("_");i===e&&n.push(o)}return n}function Mr(e){const{kernelName:t,backendName:n}=e,r=Rr(t,n);kr.has(r)&&Tr(`The kernel '${t}' for backend '${n}' is already registered`),kr.set(r,e)}function $r(e){const{kernelName:t}=e;Er.has(t)&&Q().getBool("DEBUG")&&Tr(`Overriding the gradient for '${t}'`),Er.set(t,e)}function Or(e,t){const n=Rr(e,t);if(!kr.has(n))throw new Error(`The kernel '${e}' for backend '${t}' is not registered`);kr.delete(n)}function Dr(e){if(!Er.has(e))throw new Error(`The gradient '${e}' for backend is not registered`);Er.delete(e)}function Cr(e,t){Ar(e).forEach((e=>{Mr(Object.assign({},e,{backendName:t}))}))}function Rr(e,t){return`${t}_${e}`}
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fr(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}var Br=Lr,zr=null;try{zr=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(vf){}function Lr(e,t,n){this.low=0|e,this.high=0|t,this.unsigned=!!n}function Pr(e){return!0===(e&&e.__isLong__)}Lr.prototype.__isLong__,Object.defineProperty(Lr.prototype,"__isLong__",{value:!0}),Lr.isLong=Pr;var Vr={},Ur={};function jr(e,t){var n,r,s;return t?(s=0<=(e>>>=0)&&e<256)&&(r=Ur[e])?r:(n=qr(e,(0|e)<0?-1:0,!0),s&&(Ur[e]=n),n):(s=-128<=(e|=0)&&e<128)&&(r=Vr[e])?r:(n=qr(e,e<0?-1:0,!1),s&&(Vr[e]=n),n)}function Wr(e,t){if(isNaN(e))return t?es:Qr;if(t){if(e<0)return es;if(e>=Zr)return as}else{if(e<=-Yr)return os;if(e+1>=Yr)return ss}return e<0?Wr(-e,t).neg():qr(e%Jr|0,e/Jr|0,t)}function qr(e,t,n){return new Lr(e,t,n)}Lr.fromInt=jr,Lr.fromNumber=Wr,Lr.fromBits=qr;var Gr=Math.pow;function Kr(e,t,n){if(0===e.length)throw Error("empty string");if("NaN"===e||"Infinity"===e||"+Infinity"===e||"-Infinity"===e)return Qr;if("number"==typeof t?(n=t,t=!1):t=!!t,(n=n||10)<2||36<n)throw RangeError("radix");var r;if((r=e.indexOf("-"))>0)throw Error("interior hyphen");if(0===r)return Kr(e.substring(1),t,n).neg();for(var s=Wr(Gr(n,8)),a=Qr,o=0;o<e.length;o+=8){var i=Math.min(8,e.length-o),u=parseInt(e.substring(o,o+i),n);if(i<8){var l=Wr(Gr(n,i));a=a.mul(l).add(Wr(u))}else a=(a=a.mul(s)).add(Wr(u))}return a.unsigned=t,a}function Hr(e,t){return"number"==typeof e?Wr(e,t):"string"==typeof e?Kr(e,t):qr(e.low,e.high,"boolean"==typeof t?t:e.unsigned)}Lr.fromString=Kr,Lr.fromValue=Hr;var Jr=4294967296,Zr=Jr*Jr,Yr=Zr/2,Xr=jr(1<<24),Qr=jr(0);Lr.ZERO=Qr;var es=jr(0,!0);Lr.UZERO=es;var ts=jr(1);Lr.ONE=ts;var ns=jr(1,!0);Lr.UONE=ns;var rs=jr(-1);Lr.NEG_ONE=rs;var ss=qr(-1,2147483647,!1);Lr.MAX_VALUE=ss;var as=qr(-1,-1,!0);Lr.MAX_UNSIGNED_VALUE=as;var os=qr(0,-2147483648,!1);Lr.MIN_VALUE=os;var is=Lr.prototype;is.toInt=function(){return this.unsigned?this.low>>>0:this.low},is.toNumber=function(){return this.unsigned?(this.high>>>0)*Jr+(this.low>>>0):this.high*Jr+(this.low>>>0)},is.toString=function(e){if((e=e||10)<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(os)){var t=Wr(e),n=this.div(t),r=n.mul(t).sub(this);return n.toString(e)+r.toInt().toString(e)}return"-"+this.neg().toString(e)}for(var s=Wr(Gr(e,6),this.unsigned),a=this,o="";;){var i=a.div(s),u=(a.sub(i.mul(s)).toInt()>>>0).toString(e);if((a=i).isZero())return u+o;for(;u.length<6;)u="0"+u;o=""+u+o}},is.getHighBits=function(){return this.high},is.getHighBitsUnsigned=function(){return this.high>>>0},is.getLowBits=function(){return this.low},is.getLowBitsUnsigned=function(){return this.low>>>0},is.getNumBitsAbs=function(){if(this.isNegative())return this.eq(os)?64:this.neg().getNumBitsAbs();for(var e=0!=this.high?this.high:this.low,t=31;t>0&&!(e&1<<t);t--);return 0!=this.high?t+33:t+1},is.isZero=function(){return 0===this.high&&0===this.low},is.eqz=is.isZero,is.isNegative=function(){return!this.unsigned&&this.high<0},is.isPositive=function(){return this.unsigned||this.high>=0},is.isOdd=function(){return!(1&~this.low)},is.isEven=function(){return!(1&this.low)},is.equals=function(e){return Pr(e)||(e=Hr(e)),(this.unsigned===e.unsigned||this.high>>>31!=1||e.high>>>31!=1)&&(this.high===e.high&&this.low===e.low)},is.eq=is.equals,is.notEquals=function(e){return!this.eq(e)},is.neq=is.notEquals,is.ne=is.notEquals,is.lessThan=function(e){return this.comp(e)<0},is.lt=is.lessThan,is.lessThanOrEqual=function(e){return this.comp(e)<=0},is.lte=is.lessThanOrEqual,is.le=is.lessThanOrEqual,is.greaterThan=function(e){return this.comp(e)>0},is.gt=is.greaterThan,is.greaterThanOrEqual=function(e){return this.comp(e)>=0},is.gte=is.greaterThanOrEqual,is.ge=is.greaterThanOrEqual,is.compare=function(e){if(Pr(e)||(e=Hr(e)),this.eq(e))return 0;var t=this.isNegative(),n=e.isNegative();return t&&!n?-1:!t&&n?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},is.comp=is.compare,is.negate=function(){return!this.unsigned&&this.eq(os)?os:this.not().add(ts)},is.neg=is.negate,is.add=function(e){Pr(e)||(e=Hr(e));var t=this.high>>>16,n=65535&this.high,r=this.low>>>16,s=65535&this.low,a=e.high>>>16,o=65535&e.high,i=e.low>>>16,u=0,l=0,c=0,p=0;return c+=(p+=s+(65535&e.low))>>>16,l+=(c+=r+i)>>>16,u+=(l+=n+o)>>>16,u+=t+a,qr((c&=65535)<<16|(p&=65535),(u&=65535)<<16|(l&=65535),this.unsigned)},is.subtract=function(e){return Pr(e)||(e=Hr(e)),this.add(e.neg())},is.sub=is.subtract,is.multiply=function(e){if(this.isZero())return Qr;if(Pr(e)||(e=Hr(e)),zr)return qr(zr.mul(this.low,this.high,e.low,e.high),zr.get_high(),this.unsigned);if(e.isZero())return Qr;if(this.eq(os))return e.isOdd()?os:Qr;if(e.eq(os))return this.isOdd()?os:Qr;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(Xr)&&e.lt(Xr))return Wr(this.toNumber()*e.toNumber(),this.unsigned);var t=this.high>>>16,n=65535&this.high,r=this.low>>>16,s=65535&this.low,a=e.high>>>16,o=65535&e.high,i=e.low>>>16,u=65535&e.low,l=0,c=0,p=0,d=0;return p+=(d+=s*u)>>>16,c+=(p+=r*u)>>>16,p&=65535,c+=(p+=s*i)>>>16,l+=(c+=n*u)>>>16,c&=65535,l+=(c+=r*i)>>>16,c&=65535,l+=(c+=s*o)>>>16,l+=t*u+n*i+r*o+s*a,qr((p&=65535)<<16|(d&=65535),(l&=65535)<<16|(c&=65535),this.unsigned)},is.mul=is.multiply,is.divide=function(e){if(Pr(e)||(e=Hr(e)),e.isZero())throw Error("division by zero");var t,n,r;if(zr)return this.unsigned||-2147483648!==this.high||-1!==e.low||-1!==e.high?qr((this.unsigned?zr.div_u:zr.div_s)(this.low,this.high,e.low,e.high),zr.get_high(),this.unsigned):this;if(this.isZero())return this.unsigned?es:Qr;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return es;if(e.gt(this.shru(1)))return ns;r=es}else{if(this.eq(os))return e.eq(ts)||e.eq(rs)?os:e.eq(os)?ts:(t=this.shr(1).div(e).shl(1)).eq(Qr)?e.isNegative()?ts:rs:(n=this.sub(e.mul(t)),r=t.add(n.div(e)));if(e.eq(os))return this.unsigned?es:Qr;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();r=Qr}for(n=this;n.gte(e);){t=Math.max(1,Math.floor(n.toNumber()/e.toNumber()));for(var s=Math.ceil(Math.log(t)/Math.LN2),a=s<=48?1:Gr(2,s-48),o=Wr(t),i=o.mul(e);i.isNegative()||i.gt(n);)i=(o=Wr(t-=a,this.unsigned)).mul(e);o.isZero()&&(o=ts),r=r.add(o),n=n.sub(i)}return r},is.div=is.divide,is.modulo=function(e){return Pr(e)||(e=Hr(e)),zr?qr((this.unsigned?zr.rem_u:zr.rem_s)(this.low,this.high,e.low,e.high),zr.get_high(),this.unsigned):this.sub(this.div(e).mul(e))},is.mod=is.modulo,is.rem=is.modulo,is.not=function(){return qr(~this.low,~this.high,this.unsigned)},is.and=function(e){return Pr(e)||(e=Hr(e)),qr(this.low&e.low,this.high&e.high,this.unsigned)},is.or=function(e){return Pr(e)||(e=Hr(e)),qr(this.low|e.low,this.high|e.high,this.unsigned)},is.xor=function(e){return Pr(e)||(e=Hr(e)),qr(this.low^e.low,this.high^e.high,this.unsigned)},is.shiftLeft=function(e){return Pr(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?qr(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):qr(0,this.low<<e-32,this.unsigned)},is.shl=is.shiftLeft,is.shiftRight=function(e){return Pr(e)&&(e=e.toInt()),0==(e&=63)?this:e<32?qr(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):qr(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},is.shr=is.shiftRight,is.shiftRightUnsigned=function(e){if(Pr(e)&&(e=e.toInt()),0===(e&=63))return this;var t=this.high;return e<32?qr(this.low>>>e|t<<32-e,t>>>e,this.unsigned):qr(32===e?t:t>>>e-32,0,this.unsigned)},is.shru=is.shiftRightUnsigned,is.shr_u=is.shiftRightUnsigned,is.toSigned=function(){return this.unsigned?qr(this.low,this.high,!1):this},is.toUnsigned=function(){return this.unsigned?this:qr(this.low,this.high,!0)},is.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},is.toBytesLE=function(){var e=this.high,t=this.low;return[255&t,t>>>8&255,t>>>16&255,t>>>24,255&e,e>>>8&255,e>>>16&255,e>>>24]},is.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,255&e,t>>>24,t>>>16&255,t>>>8&255,255&t]},Lr.fromBytes=function(e,t,n){return n?Lr.fromBytesLE(e,t):Lr.fromBytesBE(e,t)},Lr.fromBytesLE=function(e,t){return new Lr(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},Lr.fromBytesBE=function(e,t){return new Lr(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)};const us=t(Br),ls=us||s({__proto__:null,default:us},[Br]);function cs(e){return ls.fromString(e,!0,16)}const ps=cs("c3a5c85c97cb3127"),ds=cs("b492b66fbe98f273"),hs=cs("9ae16a3b2f90404f");function ms(e){return e.xor(e.shru(47))}function fs(e,t,n){const r=e.slice(t,t+n);return ls.fromBytes(Array.from(r),!0,!0)}function gs(e,t){return fs(e,t,8)}function ys(e,t){return fs(e,t,4)}function bs(e,t){return 0===t?e:e.shru(t).or(e.shl(64-t))}function ws(e,t,n=cs("9ddfea08eb382d69")){let r=e.xor(t).mul(n);r=r.xor(r.shru(47));let s=t.xor(r).mul(n);return s=s.xor(s.shru(47)),s=s.mul(n),s}function Ns(e,t,n,r){return function(e,t,n,r,s,a){s=s.add(e),a=bs(a.add(s).add(r),21);const o=s;return s=(s=s.add(t)).add(n),a=a.add(bs(s,44)),[s.add(r),a.add(o)]}(gs(e,t),gs(e,t+8),gs(e,t+16),gs(e,t+24),n,r)}function xs(e,t=e.length){const n=ls.fromNumber(81,!0);if(t<=32)return t<=16?function(e,t=e.length){if(t>=8){const n=hs.add(2*t),r=gs(e,0).add(hs),s=gs(e,t-8);return ws(bs(s,37).mul(n).add(r),bs(r,25).add(s).mul(n),n)}if(t>=4){const n=hs.add(2*t);return ws(ys(e,0).shl(3).add(t),ys(e,t-4),n)}if(t>0){const n=e[0]+(e[t>>1]<<8),r=t+(e[t-1]<<2);return ms(hs.mul(n).xor(ps.mul(r))).mul(hs)}return hs}(e,t):function(e,t=e.length){const n=hs.add(2*t),r=gs(e,0).mul(ds),s=gs(e,8),a=gs(e,t-8).mul(n),o=gs(e,t-16).mul(hs);return ws(bs(r.add(s),43).add(bs(a,30)).add(o),r.add(bs(s.add(hs),18)).add(a),n)}(e,t);if(t<=64)return function(e,t=e.length){const n=hs.add(2*t),r=gs(e,0).mul(hs),s=gs(e,8),a=gs(e,t-8).mul(n),o=gs(e,t-16).mul(hs),i=bs(r.add(s),43).add(bs(a,30)).add(o),u=ws(i,r.add(bs(s.add(hs),18)).add(a),n),l=gs(e,16).mul(n),c=gs(e,24),p=i.add(gs(e,t-32)).mul(n),d=u.add(gs(e,t-24)).mul(n);return ws(bs(l.add(c),43).add(bs(p,30)).add(d),l.add(bs(c.add(r),18)).add(p),n)}(e,t);let r=n,s=n.mul(ds).add(113),a=ms(s.mul(hs).add(113)).mul(hs),o=[ls.UZERO,ls.UZERO],i=[ls.UZERO,ls.UZERO];r=r.mul(hs).add(gs(e,0));let u=0;const l=64*(t-1>>6),c=l+(t-1&63)-63;do{r=bs(r.add(s).add(o[0]).add(gs(e,u+8)),37).mul(ds),s=bs(s.add(o[1]).add(gs(e,u+48)),42).mul(ds),r=r.xor(i[1]),s=s.add(o[0]).add(gs(e,u+40)),a=bs(a.add(i[0]),33).mul(ds),o=Ns(e,u,o[1].mul(ds),r.add(i[0])),i=Ns(e,u+32,a.add(i[1]),s.add(gs(e,u+16))),[a,r]=[r,a],u+=64}while(u!==l);const p=ds.add(a.and(255).shl(1));return u=c,i[0]=i[0].add(t-1&63),o[0]=o[0].add(i[0]),i[0]=i[0].add(o[0]),r=bs(r.add(s).add(o[0]).add(gs(e,u+8)),37).mul(p),s=bs(s.add(o[1]).add(gs(e,u+48)),42).mul(p),r=r.xor(i[1].mul(9)),s=s.add(o[0].mul(9).add(gs(e,u+40))),a=bs(a.add(i[0]),33).mul(p),o=Ns(e,u,o[1].mul(p),r.add(i[0])),i=Ns(e,u+32,a.add(i[1]),s.add(gs(e,u+16))),[a,r]=[r,a],ws(ws(o[0],i[0],p).add(ms(s).mul(ps)).add(a),ws(o[1],i[1],p).add(r),p)}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vs(e,t){return"string"===t?Es(e):Ts([e],t)}function Ts(e,t){if("string"===t)throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=As(e)),Q().getBool("DEBUG")&&I(e,t),function(e,t){return e instanceof Float32Array&&"float32"===t||e instanceof Int32Array&&"int32"===t||e instanceof Uint8Array&&"bool"===t}(e,t))return e;if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t){const t=new Uint8Array(e.length);for(let n=0;n<t.length;++n)0!==Math.round(e[n])&&(t[n]=1);return t}throw new Error(`Unknown data type ${t}`)}function Ss(){return Q().platform.now()}function ks(e,t){return Q().platform.fetch(e,t)}function Es(e,t="utf-8"){return t=t||"utf-8",Q().platform.encode(e,t)}function _s(e,t="utf-8"){return t=t||"utf-8",Q().platform.decode(e,t)}function Is(e){return null!=Q().platform.isTypedArray?Q().platform.isTypedArray(e):Fr(e)}function As(e,t=[],n=!1){if(null==t&&(t=[]),"boolean"==typeof e||"number"==typeof e||"string"==typeof e||J(e)||null==e||Is(e)&&n)t.push(e);else if(Array.isArray(e)||Is(e))for(let r=0;r<e.length;++r)As(e[r],t,n);else{let r=-1;for(const t of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(t)&&(r=Math.max(r,Number(t)));for(let s=0;s<=r;s++)As(e[s],t,n)}return t}const Ms=Object.freeze(Object.defineProperty({__proto__:null,arraysEqual:b,arraysEqualWithNull:y,assert:h,assertNonNegativeIntegerDimensions:G,assertNonNull:f,assertShapesMatch:m,bytesFromStringArray:O,bytesPerElement:$,checkConversionForErrors:I,clamp:l,computeStrides:L,convertBackendValuesAndArrayBuffer:U,createScalarValue:vs,createShuffledIndices:function(e){const t=new Uint32Array(e);for(let n=0;n<e;++n)t[n]=n;return u(t),t},decodeString:_s,distSquared:function(e,t){let n=0;for(let r=0;r<e.length;r++){const s=Number(e[r])-Number(t[r]);n+=s*s}return n},encodeString:Es,fetch:ks,fingerPrint64:xs,flatten:As,getArrayFromDType:_,getTypedArrayFromDType:E,hasEncodingLoss:M,hexToLong:cs,indexToLoc:H,inferDtype:F,inferFromImplicitShape:T,isBoolean:C,isFunction:B,isInt:w,isNumber:R,isPromise:J,isScalarShape:function(e){return 0===e.length},isString:D,isTypedArray:Is,isValidDtype:A,locToIndex:K,makeOnesTypedArray:j,makeZerosNestedTypedArray:q,makeZerosTypedArray:W,nearestDivisor:z,nearestLargerEven:c,now:Ss,parseAxisParam:S,randUniform:function(e,t){const n=Math.random();return t*n+(1-n)*e},repeatedTry:v,rightPad:x,shuffle:u,shuffleCombo:function(e,t){if(e.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let n=e.length,r=0;for(;n>0;)r=Math.random()*n|0,n--,p(e,n,r),p(t,n,r)},sizeFromShape:g,sizeToSquarishShape:N,squeezeShape:k,sum:d,swap:p,tanh:function(e){if(null!=Math.tanh)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;{const t=Math.exp(2*e);return(t-1)/(t+1)}},toNestedArray:V,toTypedArray:Ts},Symbol.toStringTag,{value:"Module"}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $s{constructor(e,t){this.backendTimer=e,this.logger=t,null==t&&(this.logger=new Ds)}profileKernel(e,t,n){let r;const s=()=>{r=n()};let a;const o=Ss();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(s);else{s();for(const e of r)e.dataSync();a=Promise.resolve({kernelMs:Ss()-o})}if(Q().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let i=0;i<r.length;i++){const t=r[i];t.data().then((n=>{Os(n,t.dtype,e)}))}return{kernelName:e,outputs:r,inputs:t,timeMs:a.then((e=>e.kernelMs)),extraInfo:a.then((e=>null!=e.getExtraProfileInfo?e.getExtraProfileInfo():""))}}logKernelProfile(e){const{kernelName:t,outputs:n,timeMs:r,inputs:s,extraInfo:a}=e;n.forEach((e=>{Promise.all([e.data(),r,a]).then((n=>{this.logger.logKernelProfile(t,e,n[0],n[1],s,n[2])}))}))}}function Os(e,t,n){if("float32"!==t)return!1;for(let r=0;r<e.length;r++){const t=e[r];if(isNaN(t)||!isFinite(t))return console.warn(`Found ${t} in the result of '${n}'`),!0}return!1}class Ds{logKernelProfile(e,t,n,r,s,a){"number"==typeof r?x(`${r}ms`,9):r.error,x(e,25),t.rank,t.size,x(t.shape.toString(),14);let o="";for(const i in s){const e=s[i];if(null!=e){const n=e.shape||t.shape,r=n.length;o+=`${i}: ${r}D ${r>0?n:""} `}}}}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cs(e,t,n,r){const s=L(t),a=function(e,t,n,r){const s=g(t),a=r[r.length-1],o=new Array(a).fill(0),i=t.length,u="complex64"===n?zs(e):e;if(i>1)for(let l=0;l<s/a;l++){const e=l*a;for(let t=0;t<a;t++)o[t]=Math.max(o[t],Rs(u[e+t],0,n).length)}return o}(e,t,n,s),o=t.length,i=Bs(e,t,n,s,a),u=["Tensor"];return r&&(u.push(`  dtype: ${n}`),u.push(`  rank: ${o}`),u.push(`  shape: [${t}]`),u.push("  values:")),u.push(i.map((e=>"    "+e)).join("\n")),u.join("\n")}function Rs(e,t,n){let r;return r=Array.isArray(e)?`${parseFloat(e[0].toFixed(7))} + ${parseFloat(e[1].toFixed(7))}j`:D(e)?`'${e}'`:"bool"===n?Fs(e):parseFloat(e.toFixed(7)).toString(),x(r,t)}function Fs(e){return 0===e?"false":"true"}function Bs(e,t,n,r,s,a=!0){const o="complex64"===n?2:1,i=t[0],u=t.length;if(0===u){if("complex64"===n){return[Rs(zs(e)[0],0,n)]}return"bool"===n?[Fs(e[0])]:[e[0].toString()]}if(1===u){if(i>20){const t=3*o;let r=Array.from(e.slice(0,t)),a=Array.from(e.slice((i-3)*o,i*o));return"complex64"===n&&(r=zs(r),a=zs(a)),["["+r.map(((e,t)=>Rs(e,s[t],n))).join(", ")+", ..., "+a.map(((e,t)=>Rs(e,s[i-3+t],n))).join(", ")+"]"]}return["["+("complex64"===n?zs(e):Array.from(e)).map(((e,t)=>Rs(e,s[t],n))).join(", ")+"]"]}const l=t.slice(1),c=r.slice(1),p=r[0]*o,d=[];if(i>20){for(let t=0;t<3;t++){const r=t*p,a=r+p;d.push(...Bs(e.slice(r,a),l,n,c,s,!1))}d.push("...");for(let t=i-3;t<i;t++){const r=t*p,a=r+p;d.push(...Bs(e.slice(r,a),l,n,c,s,t===i-1))}}else for(let f=0;f<i;f++){const t=f*p,r=t+p;d.push(...Bs(e.slice(t,r),l,n,c,s,f===i-1))}const h=2===u?",":"";d[0]="["+(i>0?d[0]+h:"");for(let f=1;f<d.length-1;f++)d[f]=" "+d[f]+h;let m=",\n";for(let f=2;f<u;f++)m+="\n";return d[d.length-1]=" "+d[d.length-1]+"]"+(a?"":m),d}function zs(e){const t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ls{constructor(e,t,n){if(this.dtype=t,this.shape=e.slice(),this.size=g(e),null!=n){const e=n.length;h(e===this.size,(()=>`Length of values '${e}' does not match the size inferred by the shape '${this.size}'.`))}if("complex64"===t)throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||_(t,this.size),this.strides=L(e)}set(e,...t){0===t.length&&(t=[0]),h(t.length===this.rank,(()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`));const n=this.locToIndex(t);this.values[n]=e}get(...e){0===e.length&&(e=[0]);let t=0;for(const r of e){if(r<0||r>=this.shape[t]){const t=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(t)}t++}let n=e[e.length-1];for(let r=0;r<e.length-1;++r)n+=this.strides[r]*e[r];return this.values[n]}locToIndex(e){if(0===this.rank)return 0;if(1===this.rank)return e[0];let t=e[e.length-1];for(let n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t}indexToLoc(e){if(0===this.rank)return[];if(1===this.rank)return[e];const t=new Array(this.shape.length);for(let n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return Ps().makeTensor(this.values,this.shape,this.dtype)}}let Ps=null,Vs=null;class Us{constructor(e,t,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=g(e),this.strides=L(e),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}buffer(){return e(this,null,(function*(){const e=yield this.data();return Vs.buffer(this.shape,this.dtype,e)}))}bufferSync(){return Vs.buffer(this.shape,this.dtype,this.dataSync())}array(){return e(this,null,(function*(){const e=yield this.data();return V(this.shape,e,"complex64"===this.dtype)}))}arraySync(){return V(this.shape,this.dataSync(),"complex64"===this.dtype)}data(){return e(this,null,(function*(){this.throwIfDisposed();const e=Ps().read(this.dataId);if("string"===this.dtype){const n=yield e;try{return n.map((e=>_s(e)))}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}))}dataToGPU(e){return this.throwIfDisposed(),Ps().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=Ps().readSync(this.dataId);if("string"===this.dtype)try{return e.map((e=>_s(e)))}catch(t){throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}bytes(){return e(this,null,(function*(){this.throwIfDisposed();const e=yield Ps().read(this.dataId);return"string"===this.dtype?e:new Uint8Array(e.buffer)}))}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),Ps().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return Vs.print(this,e)}clone(){return this.throwIfDisposed(),Vs.clone(this)}toString(e=!1){return Cs(this.dataSync(),this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),Vs.cast(this,e)}variable(e=!0,t,n){return this.throwIfDisposed(),Ps().makeVariable(this,e,t,n)}}function js(){return re("Tensor",(()=>Us))}Object.defineProperty(Us,Symbol.hasInstance,{value:e=>!!e&&null!=e.data&&null!=e.dataSync&&null!=e.throwIfDisposed}),js();class Ws extends Us{constructor(e,t,n,r){super(e.shape,e.dtype,e.dataId,r),this.trainable=t,this.name=n}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!b(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);Ps().disposeTensor(this),this.dataId=e.dataId,Ps().incRef(this,null)}dispose(){Ps().disposeVariable(this),this.isDisposedInternal=!0}}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
var qs,Gs,Ks,Hs,Js,Zs,Ys,Xs,Qs,ea;Object.defineProperty(Ws,Symbol.hasInstance,{value:e=>e instanceof Us&&null!=e.assign&&e.assign instanceof Function}),(Gs=qs||(qs={})).R0="R0",Gs.R1="R1",Gs.R2="R2",Gs.R3="R3",Gs.R4="R4",Gs.R5="R5",Gs.R6="R6",(Hs=Ks||(Ks={})).float32="float32",Hs.int32="int32",Hs.bool="int32",Hs.complex64="complex64",(Zs=Js||(Js={})).float32="float32",Zs.int32="int32",Zs.bool="bool",Zs.complex64="complex64",(Xs=Ys||(Ys={})).float32="float32",Xs.int32="float32",Xs.bool="float32",Xs.complex64="complex64",(ea=Qs||(Qs={})).float32="complex64",ea.int32="complex64",ea.bool="complex64",ea.complex64="complex64";const ta={float32:Ys,int32:Ks,bool:Js,complex64:Qs};function na(e,t){if("string"===e||"string"===t){if("string"===e&&"string"===t)return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return ta[e][t]}function ra(e){return na(e,"int32")}function sa(e){return null!=e&&"object"==typeof e&&"texture"in e&&e.texture instanceof WebGLTexture}function aa(e){return"undefined"!=typeof GPUBuffer&&null!=e&&"object"==typeof e&&"buffer"in e&&e.buffer instanceof GPUBuffer}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oa(e,t){if(e.dtype===t.dtype)return[e,t];const n=na(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function ia(e,t){h(e.dtype===t.dtype,(()=>`The dtypes of the first(${e.dtype}) and second(${t.dtype}) input must match`))}function ua(e,t){return t.some((t=>t.id===e.id))}function la(e){const t=[];return ca(e,t,new Set),t}function ca(e,t,n){if(null==e)return;if(e instanceof Us)return void t.push(e);if(r=e,!Array.isArray(r)&&"object"!=typeof r)return;var r;const s=e;for(const a in s){const e=s[a];n.has(e)||(n.add(e),ca(e,t,n))}}const pa=Object.freeze(Object.defineProperty({__proto__:null,assertTypesMatch:ia,getTensorsInContainer:la,isTensorInList:ua,makeTypesMatch:oa},Symbol.toStringTag,{value:"Module"}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function da(e){return null!=e.kernelName}class ha{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map((e=>e.name))))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class ma{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new ha}ready(){return e(this,null,(function*(){if(null!=this.pendingBackendInit)return this.pendingBackendInit.then((()=>{}));if(null!=this.backendInstance)return;const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const n=e[t];if(yield this.initializeBackend(n).success)return void(yield this.setBackend(n))}throw new Error("Could not initialize any backends, all backend initializations failed.")}))}get backend(){if(null!=this.pendingBackendInit)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(null==this.backendInstance){const{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry)){if(!(e in this.registryFactory))return null;{const{asyncInit:t}=this.initializeBackend(e);if(t)return null}}return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,n=1){return e in this.registryFactory?(Tr(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:n},!0)}setBackend(t){return e(this,null,(function*(){if(null==this.registryFactory[t])throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,null==this.registry[t]){this.backendInstance=null;const{success:e,asyncInit:n}=this.initializeBackend(t);if(!(n?yield e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new $s(this.backendInstance),!0}))}setupRegisteredKernels(){Ar(this.backendName).forEach((e=>{null!=e.setupFunc&&e.setupFunc(this.backendInstance)}))}disposeRegisteredKernels(e){Ar(e).forEach((t=>{null!=t.disposeFunc&&t.disposeFunc(this.registry[e])}))}initializeBackend(e){const t=this.registryFactory[e];if(null==t)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const n=t.factory();if(!n||n instanceof o||"function"!=typeof n.then)return this.registry[e]=n,{success:!0,asyncInit:!1};{const t=++this.pendingBackendInitId,r=n.then((n=>!(t<this.pendingBackendInitId)&&(this.registry[e]=n,this.pendingBackendInit=null,!0))).catch((n=>(t<this.pendingBackendInitId||(this.pendingBackendInit=null,Tr(`Initialization of backend ${e} failed`),Tr(n.stack||n.message)),!1)));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}}catch(n){return Tr(`Initialization of backend ${e} failed`),Tr(n.stack||n.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(0===Object.keys(this.registryFactory).length)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority))}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let t=0;t<e.length;t++){const n=e[t],{success:r,asyncInit:s}=this.initializeBackend(n);if(s||r)return{name:n,asyncInit:s}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){const n=this.state.tensorInfo.get(t),r=n.backend,s=this.readSync(t),a=r.refCount(t);r.disposeData(t,!0),n.backend=e,e.move(t,s,n.shape,n.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let n,r=null;if(null==t){if("function"!=typeof e)throw new Error("Please provide a function to tidy()");t=e}else{if("string"!=typeof e&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof t)throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e}return this.scopedRun((()=>this.startScope(r)),(()=>this.endScope(n)),(()=>(n=t(),n instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n)))}scopedRun(e,t,n){e();try{const e=n();return t(),e}catch(r){throw t(),r}}nextTensorId(){return ma.nextTensorId++}nextVariableId(){return ma.nextVariableId++}clone(e){const t=ga.runKernel(Nt,{x:e}),n={x:e};return this.addTapeNode(this.state.activeScope.name,n,[t],(e=>({x:()=>{const t={x:e},n={dtype:"float32"};return ga.runKernel(Ie,t,n)}})),[],{}),t}runKernel(e,t,n){null==this.backendName&&this.backend;if(!(null!=_r(e,this.backendName)))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,n){const r=this.backend.numDataIds();let s=0;n.forEach((e=>{s+="complex64"===e.dtype?3:1}));const a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=r-t-s-a;if(o>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${e}'`)}runKernelFunc(e){let t,n=[];const r=this.isTapeOn(),s=this.state.numBytes,a=this.state.numTensors;let o,i;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0),null==this.backendName&&this.backend;const u=da(e)?e.kernelName:null!=this.state.activeScope?this.state.activeScope.name:"";if(da(e)){const{kernelName:t,inputs:s,attrs:a}=e;null==this.backendName&&this.backend;const u=_r(t,this.backendName);h(null!=u,(()=>`Cannot find registered kernel '${t}' for backend '${this.backendName}'`)),o=()=>{const e=this.backend.numDataIds();i=u.kernelFunc({inputs:s,attrs:a,backend:this.backend});const o=Array.isArray(i)?i:[i];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(t,e,o);const l=o.map((e=>null!=e.rank?e:this.makeTensorFromTensorInfo(e)));if(r){const e=this.getTensorsForGradient(t,s,l);n=this.saveTensorsForBackwardMode(e)}return l}}else{const{forwardFunc:t}=e,s=e=>{r&&(n=e.map((e=>this.keep(this.clone(e)))))};o=()=>{const e=this.backend.numDataIds();i=this.tidy((()=>t(this.backend,s)));const n=Array.isArray(i)?i:[i];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,e,n),n}}const{inputs:l,attrs:c}=e,p=da(e)?null:e.backwardsFunc;let d;return this.scopedRun((()=>this.state.kernelDepth++),(()=>this.state.kernelDepth--),(()=>{this.ENV.getBool("DEBUG")||this.state.profiling?(d=this.profiler.profileKernel(u,l,(()=>o())),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(d),t=d.outputs):t=o()})),r&&this.addTapeNode(u,l,t,p,n,c),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-s,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(l).map((e=>null!=l[e]?l[e].shape:null)),outputShapes:t.map((e=>e.shape)),kernelTimeMs:d.timeMs,extraInfo:d.extraInfo}),Array.isArray(i)?t:t[0]}saveTensorsForBackwardMode(e){return e.map((e=>this.keep(this.clone(e))))}getTensorsForGradient(e,t,n){const r=Ir(e);if(null!=r){const e=r.inputsToSave||[],s=r.outputsToSave||[];let a;r.saveAllInputs?(h(Array.isArray(t),(()=>"saveAllInputs is true, expected inputs to be an array.")),a=Object.keys(t).map((e=>t[e]))):a=e.map((e=>t[e]));const o=n.filter(((e,t)=>s[t]));return a.concat(o)}return[]}makeTensor(e,t,n,r){if(null==e)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",r=r||this.backend;let s=e;"string"===n&&D(e[0])&&(s=e.map((e=>Es(e))));const a=r.write(s,t,n),o=new Us(t,n,a,this.nextTensorId());if(this.trackTensor(o,r),"string"===n){const e=this.state.tensorInfo.get(a),t=O(s);this.state.numBytes+=t-e.bytes,e.bytes=t}return o}makeTensorFromDataId(e,t,n,r){const s={dataId:e,shape:t,dtype:n=n||"float32"};return this.makeTensorFromTensorInfo(s,r)}makeTensorFromTensorInfo(e,t){const{dataId:n,shape:r,dtype:s}=e,a=new Us(r,s,n,this.nextTensorId());return this.trackTensor(a,t),a}makeVariable(e,t=!0,n,r){n=n||this.nextVariableId().toString(),null!=r&&r!==e.dtype&&(e=e.cast(r));const s=new Ws(e,t,n,this.nextTensorId());if(null!=this.state.registeredVariables[s.name])throw new Error(`Variable with name ${s.name} was already registered`);return this.state.registeredVariables[s.name]=s,this.incRef(s,this.backend),s}trackTensor(e,t){this.state.numTensors++,"string"===e.dtype&&this.state.numStringTensors++;let n=0;"complex64"!==e.dtype&&"string"!==e.dtype&&(n=e.size*$(e.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:n})),e instanceof Ws||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,"string"===e.dtype&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),"complex64"!==e.dtype&&"string"!==e.dtype){const t=e.size*$(e.dtype);this.state.numBytes-=t}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),null!=this.state.registeredVariables[e.name]&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,null==e.reasons&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}profile(t){return e(this,null,(function*(){this.state.profiling=!0;const e=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=yield t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map((e=>e.totalBytesSnapshot))),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n;for(const t of this.state.activeProfile.kernels)t.kernelTimeMs=yield t.kernelTimeMs,t.extraInfo=yield t.extraInfo;return this.state.activeProfile}))}isTapeOn(){return this.state.gradientDepth>0&&0===this.state.kernelDepth}addTapeNode(e,t,n,r,s,a){const o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:s},i=Ir(e);null!=i&&(r=i.gradFunc),null!=r&&(o.gradient=e=>(e=e.map(((e,t)=>{if(null==e){const e=n[t],r=W(e.size,e.dtype);return this.makeTensor(r,e.shape,e.dtype)}return e})),r(e.length>1?e:e[0],s,a))),this.state.activeTape.push(o)}keep(e){return e.kept=!0,e}startTape(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){const t=la(e),n=new Set(t.map((e=>e.id)));for(let s=0;s<this.state.activeScope.track.length;s++){const e=this.state.activeScope.track[s];e.kept||n.has(e.id)||e.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach((e=>{e.kept||e.scopeId!==r.id||this.track(e)}))}gradients(e,t,n,r=!1){if(h(t.length>0,(()=>"gradients() received an empty list of xs.")),null!=n&&"float32"!==n.dtype)throw new Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);const s=this.scopedRun((()=>this.startTape()),(()=>this.endTape()),(()=>this.tidy("forward",e)));h(s instanceof Us,(()=>"The result y returned by f() must be a tensor."));const a=function(e,t,n){const r={},s={};for(let u=0;u<t.length;u++)r[t[u].id]=!0;for(let u=0;u<e.length;u++){const n=e[u],a=n.inputs;for(const e in a){const o=a[e];let i=!1;for(let e=0;e<t.length;e++)if(r[o.id]){n.outputs.forEach((e=>r[e.id]=!0)),i=!0,s[n.id]=!0;break}if(i)break}}const a={};a[n.id]=!0;const o={};for(let u=e.length-1;u>=0;u--){const t=e[u],n=t.inputs;for(let e=0;e<t.outputs.length;e++)if(a[t.outputs[e].id]){for(const e in n)a[n[e].id]=!0,o[t.id]=!0;break}}const i=[];for(let u=0;u<e.length;u++){const t=e[u];if(s[t.id]&&o[t.id]){const e={};for(const s in t.inputs){const n=t.inputs[s];r[n.id]&&(e[s]=n)}const n=Object.assign({},t);n.inputs=e,n.outputs=t.outputs,i.push(n)}}return i}(this.state.activeTape,t,s);if(!r&&0===a.length&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",(()=>{const e={};e[s.id]=null==n?function(e){const t=j(g(e),"float32");return ga.makeTensor(t,e,"float32")}(s.shape):n,function(e,t,n,r){for(let s=t.length-1;s>=0;s--){const a=t[s],o=[];if(a.outputs.forEach((t=>{const n=e[t.id];null!=n?o.push(n):o.push(null)})),null==a.gradient)throw new Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);const i=a.gradient(o);for(const t in a.inputs){if(!(t in i))throw new Error(`Cannot backprop through input ${t}. Available gradients found: ${Object.keys(i)}.`);const s=n((()=>i[t]()));if("float32"!==s.dtype)throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${t} must have 'float32' dtype, but has '${s.dtype}'`);const o=a.inputs[t];if(!b(s.shape,o.shape))throw new Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${t}' has shape '${s.shape}', which does not match the shape of the input '${o.shape}'`);if(null==e[o.id])e[o.id]=s;else{const t=e[o.id];e[o.id]=r(t,s),t.dispose()}}}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */(e,a,(e=>this.tidy(e)),ya);const r=t.map((t=>e[t.id]));return 0===this.state.gradientDepth&&(this.state.activeTape.forEach((e=>{for(const t of e.saved)t.dispose()})),this.state.activeTape=null),{value:s,grads:r}}))}customGrad(e){return h(B(e),(()=>"The f passed in customGrad(f) must be a function.")),(...t)=>{let n;h(t.every((e=>e instanceof Us)),(()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors"));const r={};t.forEach(((e,t)=>{r[t]=e}));return this.runKernelFunc({forwardFunc:(r,s)=>(n=e(...t,s),h(n.value instanceof Us,(()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor")),h(B(n.gradFunc),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function.")),n.value),backwardsFunc:(e,r)=>{const s=n.gradFunc(e,r),a=Array.isArray(s)?s:[s];h(a.length===t.length,(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...).")),h(a.every((e=>e instanceof Us)),(()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."));const o={};return a.forEach(((e,t)=>{o[t]=()=>e})),o},inputs:r})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}time(t){return e(this,null,(function*(){const e=Ss(),n=yield this.backend.time(t);return n.wallMs=Ss()-e,n}))}track(e){return null!=this.state.activeScope&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new ha;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}function fa(){const e=ne();if(null==e._tfengine){const t=new Y(e);e._tfengine=new ma(t)}var t;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */return t=e._tfengine.ENV,te=t,Ps=()=>e._tfengine,e._tfengine}ma.nextTensorId=0,ma.nextVariableId=0;const ga=fa();function ya(e,t){const n={a:e,b:t};return ga.runKernel(ie,n)}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ba;function wa(e){if(void 0!==ba)return ba;if(e||"undefined"!=typeof navigator&&null!=navigator){if(e||(e=navigator),"ReactNative"===e.product)return!0;const t=e.userAgent||e.vendor||("undefined"!=typeof window?window.opera:"");if(!t){const t=e;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Na(){return"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope}const xa=Object.freeze(Object.defineProperty({__proto__:null,isBrowser:Na,isMobile:wa,mockIsMobile:function(e){ba=e}},Symbol.toStringTag,{value:"Module"})),va=Q();
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ta(e,t){let n=e;if(Is(e))return"string"===t?[]:[e.length];if(sa(e)){const t=e.channels||"RGBA";return[e.height,e.width*t.length]}if(aa(e))return[e.buffer.size/(null==t?4:$(t))];if(!Array.isArray(e))return[];const r=[];for(;Array.isArray(n)||Is(n)&&"string"!==t;)r.push(n.length),n=n[0];return Array.isArray(e)&&Q().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Sa(e,r,[]),r}function Sa(e,t,n){if(n=n||[],!Array.isArray(e)&&!Is(e))return void h(0===t.length,(()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`));h(t.length>0,(()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${e.length} elements`)),h(e.length===t[0],(()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`));const r=t.slice(1);for(let s=0;s<e.length;++s)Sa(e[s],r,n.concat(s))}function ka(e,t,n,r){if("string_or_numeric"!==e){if(null==e)throw new Error("Expected dtype cannot be null.");if("numeric"!==e&&e!==t||"numeric"===e&&"string"===t)throw new Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function Ea(e,t,n,r="numeric"){if(e instanceof js())return ka(r,e.dtype,t,n),e;let s=F(e);if("string"!==s&&["bool","int32","float32"].indexOf(r)>=0&&(s=r),ka(r,s,t,n),null==e||!Is(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e){const r=null==e?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${r}'`)}const a=Ta(e,s);Is(e)||Array.isArray(e)||(e=[e]);const o="string"!==s?Ts(e,s):As(e,[],!0);return ga.makeTensor(o,a,s)}function _a(e,t,n,r="numeric"){if(!Array.isArray(e))throw new Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map(((e,s)=>Ea(e,`${t}[${s}]`,n,r)))}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */va.registerFlag("DEBUG",(()=>!1),(e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")})),va.registerFlag("IS_BROWSER",(()=>Na())),va.registerFlag("IS_NODE",(()=>"undefined"!=typeof process&&void 0!==process.versions&&void 0!==process.versions.node)),va.registerFlag("IS_CHROME",(()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor))),va.registerFlag("IS_SAFARI",(()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor))),va.registerFlag("PROD",(()=>!1)),va.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",(()=>va.getBool("DEBUG"))),va.registerFlag("DEPRECATION_WARNINGS_ENABLED",(()=>!0)),va.registerFlag("IS_TEST",(()=>!1)),va.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",(()=>va.getBool("DEBUG"))),va.registerFlag("WRAP_TO_IMAGEBITMAP",(()=>!1)),va.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",(()=>!1)),va.registerFlag("USE_SETTIMEOUTCUSTOM",(()=>!1));const Ia="__op";function Aa(e){const t=Object.keys(e);if(1!==t.length)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const r=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n+=Ia;const s=(...e)=>{ga.startScope(n);try{const t=r(...e);return J(t)&&console.error("Cannot return a Promise inside of tidy."),ga.endScope(t),t}catch(t){throw ga.endScope(null),t}};return Object.defineProperty(s,"name",{value:n,configurable:!0}),s}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ma=Aa({complex_:function(e,t){const n=Ea(e,"real","complex"),r=Ea(t,"imag","complex");m(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);const s={real:n,imag:r};return ga.runKernel($e,s)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $a(e,t,n,r){if(null==r)r=F(e);else if("complex64"===r)throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(aa(e)||sa(e)){if("float32"!==r&&"int32"!==r)throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return ga.backend.createTensorFromGPUData(e,t||n,r)}if(!Is(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e)throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=t){G(t);const e=g(t),r=g(n);h(e===r,(()=>`Based on the provided shape, [${t}], the tensor should have ${e} values but has ${r}`));for(let s=0;s<n.length;++s){const e=n[s],r=s!==n.length-1||e!==g(t.slice(s));h(n[s]===t[s]||!r,(()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `))}}return Is(e)||Array.isArray(e)||(e=[e]),t=t||n,e="string"!==r?Ts(e,r):As(e,[],!0),ga.makeTensor(e,t,r)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Oa(e,t,n){return $a(e,t,Ta(e,n),n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Da={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class Ca{static join(e){return new Ca(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,null==e)return;if(e instanceof Array||(e=[e]),0===(e=e.map((e=>Is(e)?e.buffer:e))).length)return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let n=0;n<e.length;n++){const r=e[n];n!==e.length-1&&r.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const s=t+r.byteLength;this.shards.push({buffer:r,start:t,end:s}),t=s}0===this.shards.length&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(0===this.shards.length)return new ArrayBuffer(0);if(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),(t=Math.min(this.byteLength,t))<=e)return new ArrayBuffer(0);const n=this.findShardForByte(e);if(-1===n)throw new Error(`Could not find start shard for byte ${e}`);const r=new ArrayBuffer(t-e),s=new Uint8Array(r);let a=0;for(let o=n;o<this.shards.length;o++){const n=this.shards[o],r=e+a-n.start,i=a,u=Math.min(t,n.end)-n.start,l=new Uint8Array(n.buffer,r,u-r);if(s.set(l,i),a+=l.length,t<n.end)break}return r}findShardForByte(e){if(0===this.shards.length||e<0||e>=this.byteLength)return-1;if(null!=this.bufferUniformSize)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function t(t){return e<t.start?-1:e>=t.end?1:0}if(0===t(this.shards[this.previousShardIndex]))return this.previousShardIndex;const n=function(e,t){let n=0,r=e.length;for(;n<=r;){const s=Math.floor((r-n)/2)+n,a=t(e[s]);if(0===a)return s;a<0?r=s:n=s+1}return-1}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */(this.shards,t);return-1===n?-1:(this.previousShardIndex=n,this.previousShardIndex)}}function Ra(){Q().set("PROD",!0)}function Fa(){Q().set("DEBUG",!0)}function Ba(){Q().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function za(e){Q().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function La(){ga.disposeVariables()}function Pa(){return ga}function Va(){return ga.memory()}function Ua(e){return ga.profile(e)}function ja(e,t){return ga.tidy(e,t)}function Wa(e){la(e).forEach((e=>e.dispose()))}function qa(e){return ga.keep(e)}function Ga(e){return ga.time(e)}function Ka(e){return ga.setBackend(e)}function Ha(){return ga.ready()}function Ja(){return ga.backendName}function Za(e){ga.removeBackend(e)}function Ya(e){return ga.findBackend(e)}function Xa(e){return ga.findBackendFactory(e)}function Qa(e,t,n=1){return ga.registerBackend(e,t,n)}function eo(){return ga.backend}function to(e,t){Q().setPlatform(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function no(t,n){return e(this,null,(function*(){const r=[],s=[],a=Array.isArray(t)?t.map((e=>e.name)):Object.keys(t);for(let o=0;o<a.length;++o){const i=a[o],u=Array.isArray(t)?t[o].tensor:t[i];if("float32"!==u.dtype&&"int32"!==u.dtype&&"bool"!==u.dtype&&"string"!==u.dtype&&"complex64"!==u.dtype)throw new Error(`Unsupported dtype in weight '${i}': ${u.dtype}`);const l={name:i,shape:u.shape,dtype:u.dtype};if("string"===u.dtype){const t=new Promise((t=>e(this,null,(function*(){const e=yield u.bytes(),n=e.reduce(((e,t)=>e+t.length),0)+4*e.length,r=new Uint8Array(n);let s=0;for(let t=0;t<e.length;t++){const n=e[t],a=new Uint8Array(new Uint32Array([n.length]).buffer);r.set(a,s),s+=4,r.set(n,s),s+=n.length}t(r)}))));s.push(t)}else s.push(u.data());null!=n&&(l.group=n),r.push(l)}return{data:lo(yield Promise.all(s)),specs:r}}))}function ro(e,t){const n=new Ca(e),r={};let s=0;for(const a of t){const e=so(a,((e,t)=>n.slice(s+e,s+t)));r[a.name]=oo(a,n.slice(s,s+e)),s+=e}return r}function so(e,t){const n=g(e.shape);let r;if("quantization"in e){const t=e.quantization;r=Da[t.dtype]}else{if("string"===e.dtype){let e=0;for(let r=0;r<n;r++)e+=4+new Uint32Array(t(e,e+4))[0];return e}r=Da[e.dtype]}return n*r}function ao(t,n){return e(this,null,(function*(){const e=g(t.shape);let r;if("quantization"in t){const e=t.quantization;r=Da[e.dtype]}else{if("string"===t.dtype){let t=0;for(let r=0;r<e;r++)t+=4+new Uint32Array(yield n(t,t+4))[0];return t}r=Da[t.dtype]}return e*r}))}function oo(e,t){const n=e.name,r=e.dtype,s=e.shape,a=g(s);let o,i=0;if("quantization"in e){const s=e.quantization;if("uint8"===s.dtype||"uint16"===s.dtype){if(!("min"in s)||!("scale"in s))throw new Error(`Weight ${e.name} with quantization ${s.dtype} doesn't have corresponding metadata min and scale.`)}else{if("float16"!==s.dtype)throw new Error(`Weight ${e.name} has unknown quantization dtype ${s.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);if("float32"!==r)throw new Error(`Weight ${e.name} is quantized with ${s.dtype} which only supports weights of type float32 not ${r}.`)}const u=Da[s.dtype],l="uint8"===s.dtype?new Uint8Array(t):new Uint16Array(t);if("float32"===r)if("uint8"===s.dtype||"uint16"===s.dtype){o=new Float32Array(l.length);for(let e=0;e<l.length;e++){const t=l[e];o[e]=t*s.scale+s.min}}else{if("float16"!==s.dtype)throw new Error(`Unsupported quantization type ${s.dtype} for weight type float32.`);{const e=function(){const e=function(){const e=e=>{let t=e<<13,n=0;for(;!(8388608&t);)n-=8388608,t<<=1;return t&=-8388609,n+=947912704,t|n},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let n=1024;n<2048;n++)t[n]=939524096+(n-1024<<13);return t}(),t=function(){const e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}(),n=function(){const e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}();return r=>{const s=new ArrayBuffer(4*r.length),a=new Uint32Array(s);for(let o=0;o<r.length;o++){const s=r[o],i=e[n[s>>10]+(1023&s)]+t[s>>10];a[o]=i}return new Float32Array(s)}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */();o=e(l)}}else{if("int32"!==r)throw new Error(`Unsupported dtype in weight '${n}': ${r}`);if("uint8"!==s.dtype&&"uint16"!==s.dtype)throw new Error(`Unsupported quantization type ${s.dtype} for weight type int32.`);o=new Int32Array(l.length);for(let e=0;e<l.length;e++){const t=l[e];o[e]=Math.round(t*s.scale+s.min)}}i+=a*u}else if("string"===r){const n=g(e.shape);o=[];for(let e=0;e<n;e++){const e=new Uint32Array(t.slice(i,i+4))[0];i+=4;const n=new Uint8Array(t.slice(i,i+e));o.push(n),i+=e}}else{const e=Da[r];if("float32"===r)o=new Float32Array(t);else if("int32"===r)o=new Int32Array(t);else{if("bool"!==r){if("complex64"===r){o=new Float32Array(t);const e=new Float32Array(o.length/2),n=new Float32Array(o.length/2);for(let t=0;t<e.length;t++)e[t]=o[2*t],n[t]=o[2*t+1];const r=Oa(e,s,"float32"),a=Oa(n,s,"float32"),i=Ma(r,a);return r.dispose(),a.dispose(),i}throw new Error(`Unsupported dtype in weight '${n}': ${r}`)}o=new Uint8Array(t)}i+=a*e}return Oa(o,s,r)}function io(t,n,r){return e(this,null,(function*(){let e=new Uint8Array(n);for(;e.byteLength<r;){const{done:n,value:s}=yield t.read();if(n&&null==s){const t=r-e.byteLength;throw new Error(`Reader is done but ${t} bytes are still expected`)}const a=new Uint8Array(e.length+s.byteLength);a.set(e,0),a.set(new Uint8Array(s),e.length),e=a}return e.buffer}))}function uo(t,n){return e(this,null,(function*(){const r={},s=t.getReader();let a=new ArrayBuffer(0);for(const t of n){const n=yield ao(t,((t,n)=>e(this,null,(function*(){return a=yield io(s,a,n),a.slice(t,n)}))));a=yield io(s,a,n);const o=a.slice(0,n);a=a.slice(n);const i=oo(t,o);if(r[t.name]=i,"webgpu"===Ja()){const e=eo();"uploadToGPU"in e&&g(i.shape)>=Q().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&e.uploadToGPU(i.dataId)}}return r}))}function lo(e){if(null===e)throw new Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0;const n=[];e.forEach((e=>{if(t+=e.byteLength,n.push(e.byteLength===e.buffer.byteLength?e:new e.constructor(e)),!(e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${e.constructor.name}`)}));const r=new Uint8Array(t);let s=0;return n.forEach((e=>{r.set(new Uint8Array(e.buffer),s),s+=e.byteLength})),r.buffer}const co="undefined"!=typeof Buffer&&("undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa);function po(e){return co?Buffer.byteLength(e,"utf8"):new Blob([e]).size}function ho(e){return Ca.join(e)}function mo(e){for(e=e.trim();e.endsWith("/");)e=e.slice(0,e.length-1);const t=e.split("/");return t[t.length-1]}function fo(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return null!=e.signature&&(n.signature=e.signature),null!=e.userDefinedMetadata&&(n.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(n.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(n.initializerSignature=e.initializerSignature),null!=e.trainingConfig&&(n.trainingConfig=e.trainingConfig),n}function go(e,t,n){const r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(null!=e.trainingConfig&&(r.trainingConfig=e.trainingConfig),null!=e.weightsManifest){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=t,r.weightData=n}return null!=e.signature&&(r.signature=e.signature),null!=e.userDefinedMetadata&&(r.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(r.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(r.initializerSignature=e.initializerSignature),r}function yo(t,n){return e(this,null,(function*(){let e,r;return null!=t.weightsManifest&&([e,r]=yield n(t.weightsManifest)),go(t,e,r)}))}function bo(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==e.modelTopology?0:po(JSON.stringify(e.modelTopology)),weightSpecsBytes:null==e.weightSpecs?0:po(JSON.stringify(e.weightSpecs)),weightDataBytes:null==e.weightData?0:new Ca(e.weightData).byteLength}}function wo(e){const t=[];for(const n of e)t.push(...n.weights);return t}class No{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return null==No.instance&&(No.instance=new No),No.instance}static registerSaveRouter(e){No.getInstance().saveRouters.push(e)}static registerLoadRouter(e){No.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return No.getHandlers(e,"save")}static getLoadHandlers(e,t){return No.getHandlers(e,"load",t)}static getHandlers(e,t,n){const r=[];return("load"===t?No.getInstance().loadRouters:No.getInstance().saveRouters).forEach((t=>{const s=t(e,n);null!==s&&r.push(s)})),r}}const xo=e=>No.getSaveHandlers(e),vo=(e,t)=>No.getLoadHandlers(e,t)
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */,To="tensorflowjs",So="models_store",ko="model_info_store";function Eo(){if(!Q().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const e="undefined"==typeof window?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(null==t)throw new Error("The current browser does not appear to support IndexedDB.");return t}function _o(e){const t=e.result;t.createObjectStore(So,{keyPath:"modelPath"}),t.createObjectStore(ko,{keyPath:"modelPath"})}class Io{constructor(e){if(this.indexedDB=Eo(),null==e||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}save(t){return e(this,null,(function*(){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}))}load(){return e(this,null,(function*(){return this.databaseAction(this.modelPath)}))}databaseAction(e,t){return new Promise(((e,n)=>{const r=this.indexedDB.open(To,1);r.onupgradeneeded=()=>_o(r),r.onsuccess=()=>{const s=r.result;if(null==t){const t=s.transaction(So,"readonly"),r=t.objectStore(So).get(this.modelPath);r.onsuccess=()=>{if(null==r.result)return s.close(),n(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));e(r.result.modelArtifacts)},r.onerror=e=>(s.close(),n(r.error)),t.oncomplete=()=>s.close()}else{t.weightData=Ca.join(t.weightData);const r=bo(t),o=s.transaction(ko,"readwrite");let i,u,l=o.objectStore(ko);try{i=l.put({modelPath:this.modelPath,modelArtifactsInfo:r})}catch(a){return n(a)}i.onsuccess=()=>{u=s.transaction(So,"readwrite");const i=u.objectStore(So);let c;try{c=i.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:r})}catch(a){return n(a)}c.onsuccess=()=>e({modelArtifactsInfo:r}),c.onerror=e=>{l=o.objectStore(ko);const t=l.delete(this.modelPath);t.onsuccess=()=>(s.close(),n(c.error)),t.onerror=e=>(s.close(),n(c.error))}},i.onerror=e=>(s.close(),n(i.error)),o.oncomplete=()=>{null==u?s.close():u.oncomplete=()=>s.close()}}},r.onerror=e=>n(r.error)}))}}Io.URL_SCHEME="indexeddb://";const Ao=e=>{return Q().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Io.URL_SCHEME)?(t=e.slice(Io.URL_SCHEME.length),new Io(t)):null;var t};No.registerSaveRouter(Ao),No.registerLoadRouter(Ao);class Mo{constructor(){this.indexedDB=Eo()}listModels(){return e(this,null,(function*(){return new Promise(((e,t)=>{const n=this.indexedDB.open(To,1);n.onupgradeneeded=()=>_o(n),n.onsuccess=()=>{const r=n.result,s=r.transaction(ko,"readonly"),a=s.objectStore(ko).getAll();a.onsuccess=()=>{const t={};for(const e of a.result)t[e.modelPath]=e.modelArtifactsInfo;e(t)},a.onerror=e=>(r.close(),t(a.error)),s.oncomplete=()=>r.close()},n.onerror=e=>t(n.error)}))}))}removeModel(t){return e(this,null,(function*(){var e;return t=(e=t).startsWith(Io.URL_SCHEME)?e.slice(Io.URL_SCHEME.length):e,new Promise(((e,n)=>{const r=this.indexedDB.open(To,1);r.onupgradeneeded=()=>_o(r),r.onsuccess=()=>{const s=r.result,a=s.transaction(ko,"readwrite"),o=a.objectStore(ko),i=o.get(t);let u;i.onsuccess=()=>{if(null==i.result)return s.close(),n(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const r=o.delete(t),a=()=>{u=s.transaction(So,"readwrite");const r=u.objectStore(So).delete(t);r.onsuccess=()=>e(i.result.modelArtifactsInfo),r.onerror=e=>n(i.error)};r.onsuccess=a,r.onerror=e=>(a(),s.close(),n(i.error))}},i.onerror=e=>(s.close(),n(i.error)),a.oncomplete=()=>{null==u?s.close():u.oncomplete=()=>s.close()}},r.onerror=e=>n(r.error)}))}))}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $o="/",Oo="tensorflowjs_models",Do="info",Co="model_topology",Ro="weight_specs",Fo="weight_data",Bo="model_metadata";function zo(e){return{info:[Oo,e,Do].join($o),topology:[Oo,e,Co].join($o),weightSpecs:[Oo,e,Ro].join($o),weightData:[Oo,e,Fo].join($o),modelMetadata:[Oo,e,Bo].join($o)}}function Lo(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function Po(e){const t=e.split($o);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join($o)}class Vo{constructor(e){if(!Q().getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==e||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=zo(this.modelPath)}save(t){return e(this,null,(function*(){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),s=bo(t),a=Ca.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,function(e){if(co)return Buffer.from(e).toString("base64");const t=new Uint8Array(e);let n="";for(let r=0,s=t.length;r<s;r++)n+=String.fromCharCode(t[r]);return btoa(n)}(a));const e={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:null!=t.signature?t.signature:void 0,userDefinedMetadata:null!=t.userDefinedMetadata?t.userDefinedMetadata:void 0,modelInitializer:null!=t.modelInitializer?t.modelInitializer:void 0,initializerSignature:null!=t.initializerSignature?t.initializerSignature:void 0,trainingConfig:null!=t.trainingConfig?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(e)),{modelArtifactsInfo:s}}catch(e){throw Lo(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}}))}load(){return e(this,null,(function*(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(null==e)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if("JSON"!==e.modelTopologyType)throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const t={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(null==n)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=n;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(null==r)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=r;const s=this.LS.getItem(this.keys.modelMetadata);if(null!=s){const e=JSON.parse(s);t.format=e.format,t.generatedBy=e.generatedBy,t.convertedBy=e.convertedBy,null!=e.signature&&(t.signature=e.signature),null!=e.userDefinedMetadata&&(t.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(t.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(t.initializerSignature=e.initializerSignature),null!=e.trainingConfig&&(t.trainingConfig=e.trainingConfig)}const a=this.LS.getItem(this.keys.weightData);if(null==a)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=function(e){if(co){const t=Buffer.from(e,"base64");return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;++r)n.set([t.charCodeAt(r)],r);return n.buffer}(a),t}))}}Vo.URL_SCHEME="localstorage://";const Uo=e=>{return Q().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Vo.URL_SCHEME)?(t=e.slice(Vo.URL_SCHEME.length),new Vo(t)):null;var t};No.registerSaveRouter(Uo),No.registerLoadRouter(Uo);class jo{constructor(){h(Q().getBool("IS_BROWSER"),(()=>"Current environment is not a web browser")),h("undefined"==typeof window||void 0!==window.localStorage,(()=>"Current browser does not appear to support localStorage")),this.LS=window.localStorage}listModels(){return e(this,null,(function*(){const e={},t=Oo+$o,n=$o+Do;for(let r=0;r<this.LS.length;++r){const s=this.LS.key(r);if(s.startsWith(t)&&s.endsWith(n)){e[Po(s)]=JSON.parse(this.LS.getItem(s))}}return e}))}removeModel(t){return e(this,null,(function*(){var e;const n=zo(t=(e=t).startsWith(Vo.URL_SCHEME)?e.slice(Vo.URL_SCHEME.length):e);if(null==this.LS.getItem(n.info))throw new Error(`Cannot find model at path '${t}'`);const r=JSON.parse(this.LS.getItem(n.info));return Lo(n),r}))}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wo="://";class qo{constructor(){this.managers={}}static getInstance(){return null==qo.instance&&(qo.instance=new qo),qo.instance}static registerManager(e,t){h(null!=e,(()=>"scheme must not be undefined or null.")),e.endsWith(Wo)&&(e=e.slice(0,e.indexOf(Wo))),h(e.length>0,(()=>"scheme must not be an empty string."));const n=qo.getInstance();h(null==n.managers[e],(()=>`A model store manager is already registered for scheme '${e}'.`)),n.managers[e]=t}static getManager(e){const t=qo.getInstance().managers[e];if(null==t)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(qo.getInstance().managers)}}function Go(e){if(-1===e.indexOf(Wo))throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${qo.getSchemes().join(",")}`);return{scheme:e.split(Wo)[0],path:e.split(Wo)[1]}}function Ko(t,n,r=!1){return e(this,null,(function*(){h(t!==n,(()=>`Old path and new path are the same: '${t}'`));const e=No.getLoadHandlers(t);h(e.length>0,(()=>`Copying failed because no load handler is found for source URL ${t}.`)),h(e.length<2,(()=>`Copying failed because more than one (${e.length}) load handlers for source URL ${t}.`));const s=e[0],a=No.getSaveHandlers(n);h(a.length>0,(()=>`Copying failed because no save handler is found for destination URL ${n}.`)),h(a.length<2,(()=>`Copying failed because more than one (${e.length}) save handlers for destination URL ${n}.`));const o=a[0],i=Go(t).scheme,u=Go(t).path,l=i===Go(t).scheme,c=yield s.load();r&&l&&(yield qo.getManager(i).removeModel(u));const p=yield o.save(c);return r&&!l&&(yield qo.getManager(i).removeModel(u)),p.modelArtifactsInfo}))}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ho{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){"undefined"!=typeof window&&Q().getBool("USE_SETTIMEOUTCUSTOM")?(this.functionRefs.push(e),setTimeout((()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")}),t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",(e=>{if(e.source===window&&e.data.name===this.messageName){e.stopPropagation();(0,this.functionRefs[e.data.index])(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}}),!0))):setTimeout(e,t)}isTypedArray(e){return Fr(e)}}if(Q().get("IS_BROWSER")){Q().setPlatform("browser",new Ho);try{qo.registerManager(Vo.URL_SCHEME,new jo)}catch(Tf){}try{qo.registerManager(Io.URL_SCHEME,new Mo)}catch(Tf){}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jo=()=>require("node-fetch");let Zo;class Yo{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return null!=Q().global.fetch?Q().global.fetch(e,t):(null==Zo&&(Zo=Jo()),Zo(e,t))}now(){const e=process.hrtime();return 1e3*e[0]+e[1]/1e6}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw new Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return 0===e.length?"":new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}}
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Xo(e,t="float32",n){return t=t||"float32",G(e),new Ls(e,t,n)}
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Q().get("IS_NODE")&&!Q().get("IS_BROWSER")&&Q().setPlatform("node",new Yo);const Qo=Aa({cast_:function(e,t){const n=Ea(e,"x","cast");if(!A(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if("string"===t&&"string"!==n.dtype||"string"!==t&&"string"===n.dtype)throw new Error("Only strings can be casted to strings");const r={x:n},s={dtype:t};return ga.runKernel(Ie,r,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ei=Aa({clone_:function(e){const t={x:Ea(e,"x","clone","string_or_numeric")};return ga.runKernel(Nt,t)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ti(e,t=!1){e.toString(t)}
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */fa();Vs={buffer:Xo,cast:Qo,clone:ei,print:ti};const ni=Aa({add_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){let n=Ea(e,"a","add"),r=Ea(t,"b","add");[n,r]=oa(n,r);const s={a:n,b:r};return ga.runKernel(ie,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ri=Aa({floorDiv_:function(e,t){let n=Ea(e,"a","floorDiv"),r=Ea(t,"b","floorDiv");[n,r]=oa(n,r);const s={a:n,b:r};return ga.runKernel(mt,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const si=Aa({div_:function(e,t){let n=Ea(e,"a","div"),r=Ea(t,"b","div");if([n,r]=oa(n,r),"int32"===n.dtype&&"int32"===r.dtype)return ri(n,r);const s={a:n,b:r};return ga.runKernel(tt,s,{})}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ai=Aa({mul_:function(e,t){let n=Ea(e,"a","mul"),r=Ea(t,"b","mul");[n,r]=oa(n,r);const s={a:n,b:r};return ga.runKernel(en,s)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oi=Aa({abs_:function(e){const t=Ea(e,"x","abs");if("complex64"===t.dtype){const e={x:t};return ga.runKernel(Oe,e)}{const e={x:t};return ga.runKernel("Abs",e)}}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ii=Aa({acos_:function(e){const t={x:Ea(e,"x","acos")};return ga.runKernel(ae,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ui=Aa({acosh_:function(e){const t={x:Ea(e,"x","acosh")};return ga.runKernel(oe,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const li=Aa({addN_:function(e){h(Array.isArray(e),(()=>"The argument passed to tf.addN() must be a list of tensors")),h(e.length>=1,(()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`));const t=e.map(((e,t)=>Ea(e,`tensors${t}`,"addN"))),n=t[0];t.forEach((e=>{if(e.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")})),t.forEach((e=>{if(!b(e.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")}));const r=t;return ga.runKernel(ue,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ci=Aa({all_:function(e,t=null,n=!1){const r={x:Ea(e,"x","all","bool")},s={axis:t,keepDims:n};return ga.runKernel("All",r,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pi=Aa({any_:function(e,t=null,n=!1){const r={x:Ea(e,"x","any","bool")},s={axis:t,keepDims:n};return ga.runKernel("Any",r,s)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const di=Aa({argMax_:function(e,t=0){const n={x:Ea(e,"x","argMax")},r={axis:t};return ga.runKernel(pe,n,r)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hi=Aa({argMin_:function(e,t=0){const n={x:Ea(e,"x","argMin")},r={axis:t};return ga.runKernel(de,n,r)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mi=Aa({asin_:function(e){const t={x:Ea(e,"x","asin")};return ga.runKernel(he,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fi=Aa({asinh_:function(e){const t={x:Ea(e,"x","asinh")};return ga.runKernel(me,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gi=Aa({atan_:function(e){const t={x:Ea(e,"x","atan")};return ga.runKernel(fe,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yi=Aa({atan2_:function(e,t){let n=Ea(e,"a","atan2"),r=Ea(t,"b","atan2");[n,r]=oa(n,r);const s={a:n,b:r};return ga.runKernel(ye,s)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bi=Aa({atanh_:function(e){const t={x:Ea(e,"x","atanh")};return ga.runKernel(ge,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wi(e,t,n,r,s="NHWC",a){return vi(e,[...t,e[3]],n,a,r,null,null,Oi(s))}function Ni(e,t,n,r,s,a,o="channelsLast"){const[i,u]=ki(t);let l;if("channelsLast"===o)l=[i,u,e[3],e[3]];else{if("channelsFirst"!==o)throw new Error(`Unknown dataFormat ${o}`);l=[i,u,e[1],e[1]]}return vi(e,l,n,r,s,a,!1,o)}function xi(e,t,n,r,s,a,o="NDHWC"){const[i,u,l]=Ei(t);let c,p;if("NDHWC"===o)p="channelsLast",c=[i,u,l,e[4],e[4]];else{if("NCDHW"!==o)throw new Error(`Unknown dataFormat ${o}`);p="channelsFirst",c=[i,u,l,e[1],e[1]]}return Ti(e,c,n,r,s,!1,p,a)}function vi(e,t,n,r,s,a,o=!1,i="channelsLast"){let[u,l,c,p]=[-1,-1,-1,-1];if("channelsLast"===i)[u,l,c,p]=e;else{if("channelsFirst"!==i)throw new Error(`Unknown dataFormat ${i}`);[u,p,l,c]=e}const[d,h,,m]=t,[f,g]=ki(n),[y,b]=ki(r),w=_i(d,y),N=_i(h,b),{padInfo:x,outHeight:v,outWidth:T}=function(e,t,n,r,s,a,o,i,u){let l,c,p;if("number"==typeof e){l={top:e,bottom:e,left:e,right:e,type:0===e?"VALID":"NUMBER"};const s=function(e,t,n,r,s){null==r&&(r=Si(e,t,n));const a=e[0],o=e[1],i=Ii((a-t+2*r)/n+1,s),u=Ii((o-t+2*r)/n+1,s);return[i,u]}([t,n],a,r,e,i);c=s[0],p=s[1]}else if("same"===e){c=Math.ceil(t/r),p=Math.ceil(n/s);const e=Math.max(0,(c-1)*r+a-t),i=Math.max(0,(p-1)*s+o-n),u=Math.floor(e/2),d=e-u,h=Math.floor(i/2);l={top:u,bottom:d,left:h,right:i-h,type:"SAME"}}else if("valid"===e)l={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((t-a+1)/r),p=Math.ceil((n-o+1)/s);else{if("object"!=typeof e)throw Error(`Unknown padding parameter: ${e}`);{const d="channelsLast"===u?e[1][0]:e[2][0],h="channelsLast"===u?e[1][1]:e[2][1],m="channelsLast"===u?e[2][0]:e[3][0],f="channelsLast"===u?e[2][1]:e[3][1];l={top:d,bottom:h,left:m,right:f,type:0===d&&0===h&&0===m&&0===f?"VALID":"EXPLICIT"},c=Ii((t-a+d+h)/r+1,i),p=Ii((n-o+m+f)/s+1,i)}}return{padInfo:l,outHeight:c,outWidth:p}}(s,l,c,f,g,w,N,a,i),S=o?m*p:m;let k;return"channelsFirst"===i?k=[u,S,v,T]:"channelsLast"===i&&(k=[u,v,T,S]),{batchSize:u,dataFormat:i,inHeight:l,inWidth:c,inChannels:p,outHeight:v,outWidth:T,outChannels:S,padInfo:x,strideHeight:f,strideWidth:g,filterHeight:d,filterWidth:h,effectiveFilterHeight:w,effectiveFilterWidth:N,dilationHeight:y,dilationWidth:b,inShape:e,outShape:k,filterShape:t}}function Ti(e,t,n,r,s,a=!1,o="channelsLast",i){let[u,l,c,p,d]=[-1,-1,-1,-1,-1];if("channelsLast"===o)[u,l,c,p,d]=e;else{if("channelsFirst"!==o)throw new Error(`Unknown dataFormat ${o}`);[u,d,l,c,p]=e}const[h,m,f,,g]=t,[y,b,w]=Ei(n),[N,x,v]=Ei(r),T=_i(h,N),S=_i(m,x),k=_i(f,v),{padInfo:E,outDepth:_,outHeight:I,outWidth:A}=function(e,t,n,r,s,a,o,i,u,l,c){let p,d,h,m;"valid"===e&&(e=0);if("number"==typeof e){p={top:e,bottom:e,left:e,right:e,front:e,back:e,type:0===e?"VALID":"NUMBER"};const f=function(e,t,n,r,s,a){null==s&&(s=Si(e,t[0],r[0]));const o=[0,0,0,n];for(let i=0;i<3;i++)e[i]+2*s>=t[i]&&(o[i]=Ii((e[i]-t[i]+2*s)/r[i]+1,a));return o}([t,n,r,1],[i,u,l],1,[s,a,o],e,c);d=f[0],h=f[1],m=f[2]}else{if("same"!==e)throw Error(`Unknown padding parameter: ${e}`);{d=Math.ceil(t/s),h=Math.ceil(n/a),m=Math.ceil(r/o);const e=(d-1)*s+i-t,c=(h-1)*a+u-n,f=(m-1)*o+l-r,g=Math.floor(e/2),y=e-g,b=Math.floor(c/2),w=c-b,N=Math.floor(f/2);p={top:b,bottom:w,left:N,right:f-N,front:g,back:y,type:"SAME"}}}return{padInfo:p,outDepth:d,outHeight:h,outWidth:m}}(s,l,c,p,y,b,w,T,S,k,i),M=a?g*d:g;let $;return"channelsFirst"===o?$=[u,M,_,I,A]:"channelsLast"===o&&($=[u,_,I,A,M]),{batchSize:u,dataFormat:o,inDepth:l,inHeight:c,inWidth:p,inChannels:d,outDepth:_,outHeight:I,outWidth:A,outChannels:M,padInfo:E,strideDepth:y,strideHeight:b,strideWidth:w,filterDepth:h,filterHeight:m,filterWidth:f,effectiveFilterDepth:T,effectiveFilterHeight:S,effectiveFilterWidth:k,dilationDepth:N,dilationHeight:x,dilationWidth:v,inShape:e,outShape:$,filterShape:t}}function Si(e,t,n,r=1){const s=_i(t,r);return Math.floor((e[0]*(n-1)-n+s)/2)}function ki(e){return"number"==typeof e?[e,e,e]:2===e.length?[e[0],e[1],1]:e}function Ei(e){return"number"==typeof e?[e,e,e]:e}function _i(e,t){return t<=1?e:e+(e-1)*(t-1)}function Ii(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function Ai(e){const[t,n,r]=ki(e);return 1===t&&1===n&&1===r}function Mi(e,t){return Ai(e)||Ai(t)}function $i(e){return ki(e).every((e=>e>0))}function Oi(e){if("NHWC"===e)return"channelsLast";if("NCHW"===e)return"channelsFirst";throw new Error(`Unknown dataFormat ${e}`)}function Di(e,t,n){if(null!=n){if("string"==typeof t)throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if("number"==typeof t)h(w(t),(()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`));else{if("object"!=typeof t)throw Error(`Error in ${e}: Unknown padding parameter: ${t}`);t.forEach((t=>{t.forEach((t=>{h(w(t),(()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`))}))}))}}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ci=Aa({reshape_:function(e,t){const n={x:Ea(e,"x","reshape","string_or_numeric")},r={shape:t};return ga.runKernel(vn,n,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ri=Aa({avgPool_:function(e,t,n,r,s){const a=Ea(e,"x","avgPool","float32");h(Mi(n,1),(()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`));let o=a,i=!1;3===a.rank&&(i=!0,o=Ci(a,[1,a.shape[0],a.shape[1],a.shape[2]])),h(4===o.rank,(()=>`Error in avgPool: x must be rank 4 but got rank ${o.rank}.`)),Di("avgPool",r,s);const u={x:o},l={filterSize:t,strides:n,pad:r,dimRoundingMode:s};let c=ga.runKernel(be,u,l);return c=Qo(c,a.dtype),i?Ci(c,[c.shape[1],c.shape[2],c.shape[3]]):c}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fi=Aa({avgPool3d_:function(e,t,n,r,s,a="NDHWC"){const o=Ea(e,"x","avgPool3d","float32");let i=o,u=!1;4===o.rank&&(u=!0,i=Ci(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),h(5===i.rank,(()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`)),h("NDHWC"===a,(()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`)),h("number"==typeof n&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,(()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`)),Di("avgPool3d",r,s);const l={x:i},c={filterSize:t,strides:n,pad:r,dimRoundingMode:s,dataFormat:a};let p=ga.runKernel(Ne,l,c);return p=Qo(p,i.dtype),u?Ci(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bi=Aa({concat_:function(e,t=0){h(e.length>=1,(()=>"Pass at least one tensor to concat"));const n=_a(e,"tensors","concat","string_or_numeric");if("complex64"===n[0].dtype&&n.forEach((e=>{if("complex64"!==e.dtype)throw new Error(`Cannot concatenate complex64 tensors with a tensor\n          with dtype ${e.dtype}. `)})),1===n.length)return ei(n[0]);const r=n,s={axis:t};return ga.runKernel(De,r,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zi=Aa({matMul_:function(e,t,n=!1,r=!1){let s=Ea(e,"a","matMul"),a=Ea(t,"b","matMul");[s,a]=oa(s,a);const o={a:s,b:a},i={transposeA:n,transposeB:r};return ga.runKernel(ve,o,i)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Li=Aa({sigmoid_:function(e){const t={x:Ea(e,"x","sigmoid","float32")};return ga.runKernel(Pn,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pi=Aa({slice_:function(e,t,n){const r=Ea(e,"x","slice","string_or_numeric");if(0===r.rank)throw new Error("Slicing scalar is not possible");const s={x:r},a={begin:t,size:n};return ga.runKernel(Fn,s,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vi=Aa({tanh_:function(e){const t={x:Ea(e,"x","tanh","float32")};return ga.runKernel(ir,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ui=Aa({basicLSTMCell_:function(e,t,n,r,s,a){const o=Ea(e,"forgetBias","basicLSTMCell"),i=Ea(t,"lstmKernel","basicLSTMCell"),u=Ea(n,"lstmBias","basicLSTMCell"),l=Ea(r,"data","basicLSTMCell"),c=Ea(s,"c","basicLSTMCell"),p=Ea(a,"h","basicLSTMCell"),d=Bi([l,p],1),h=zi(d,i),m=ni(h,u),f=m.shape[0],g=m.shape[1]/4,y=[f,g],b=Pi(m,[0,0],y),w=Pi(m,[0,g],y),N=Pi(m,[0,2*g],y),x=Pi(m,[0,3*g],y),v=ni(ai(Li(b),Vi(w)),ai(c,Li(ni(o,N))));return[v,ai(Vi(v),Li(x))]}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ji=Aa({batchToSpaceND_:function(e,t,n){const r=Ea(e,"x","batchToSpaceND"),s=t.reduce(((e,t)=>e*t));h(r.rank>=1+t.length,(()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`)),h(n.length===t.length,(()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`)),h(r.shape[0]%s==0,(()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${s}`));const a={x:r},o={blockShape:t,crops:n};return ga.runKernel(Te,a,o)}});const Wi=Aa({batchNorm_:
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r,s,a){null==a&&(a=.001);const o=Ea(e,"x","batchNorm"),i=Ea(t,"mean","batchNorm"),u=Ea(n,"variance","batchNorm");let l,c;null!=s&&(l=Ea(s,"scale","batchNorm")),null!=r&&(c=Ea(r,"offset","batchNorm")),h(i.rank===u.rank,(()=>"Batch normalization gradient requires mean and variance to have equal ranks.")),h(null==c||i.rank===c.rank,(()=>"Batch normalization gradient requires mean and offset to have equal ranks.")),h(null==l||i.rank===l.rank,(()=>"Batch normalization gradient requires mean and scale to have equal ranks."));const p={x:function(e){let t;return t=0===e.rank||1===e.rank?Ci(e,[1,1,1,e.size]):2===e.rank?Ci(e,[1,1,e.shape[0],e.shape[1]]):3===e.rank?Ci(e,[1,e.shape[0],e.shape[1],e.shape[2]]):e,t}(o),scale:l,offset:c,mean:i,variance:u},d={varianceEpsilon:a},m=ga.runKernel(ft,p,d);return Ci(m,o.shape)}});const qi=Aa({batchNorm2d_:function(e,t,n,r,s,a){const o=Ea(e,"x","batchNorm"),i=Ea(t,"mean","batchNorm"),u=Ea(n,"variance","batchNorm");let l,c;return null!=s&&(l=Ea(s,"scale","batchNorm")),null!=r&&(c=Ea(r,"offset","batchNorm")),h(2===o.rank,(()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`)),h(2===i.rank||1===i.rank,(()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`)),h(2===u.rank||1===u.rank,(()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${u.rank}.`)),null!=l&&h(2===l.rank||1===l.rank,(()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`)),null!=c&&h(2===c.rank||1===c.rank,(()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${c.rank}.`)),Wi(o,i,u,c,l,a)}});const Gi=Aa({batchNorm3d_:function(e,t,n,r,s,a){const o=Ea(e,"x","batchNorm"),i=Ea(t,"mean","batchNorm"),u=Ea(n,"variance","batchNorm");let l,c;return null!=s&&(l=Ea(s,"scale","batchNorm")),null!=r&&(c=Ea(r,"offset","batchNorm")),h(3===o.rank,(()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`)),h(3===i.rank||1===i.rank,(()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`)),h(3===u.rank||1===u.rank,(()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${u.rank}.`)),null!=l&&h(3===l.rank||1===l.rank,(()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`)),null!=c&&h(3===c.rank||1===c.rank,(()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${c.rank}.`)),Wi(o,i,u,c,l,a)}});const Ki=Aa({batchNorm4d_:function(e,t,n,r,s,a){const o=Ea(e,"x","batchNorm"),i=Ea(t,"mean","batchNorm"),u=Ea(n,"variance","batchNorm");let l,c;return null!=s&&(l=Ea(s,"scale","batchNorm")),null!=r&&(c=Ea(r,"offset","batchNorm")),h(4===o.rank,(()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`)),h(4===i.rank||1===i.rank,(()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`)),h(4===u.rank||1===u.rank,(()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${u.rank}.`)),null!=l&&h(4===l.rank||1===l.rank,(()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`)),null!=c&&h(4===c.rank||1===c.rank,(()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${c.rank}.`)),Wi(o,i,u,c,l,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hi=Aa({bincount_:function(e,t,n){const r=Ea(e,"x","bincount"),s=Ea(t,"weights","bincount");h("int32"===r.dtype,(()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`)),h(n>=0,(()=>`size must be non-negative, but got ${n}.`)),h(s.size===r.size||0===s.size,(()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${s.shape}.`));const a={x:r,weights:s},o={size:n};return ga.runKernel(Se,a,o)}});
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ji=Aa({bitwiseAnd_:function(e,t){const n=Ea(e,"x","bitwiseAnd"),r=Ea(t,"y","bitwiseAnd");if(!b(n.shape,r.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${n.shape}, y: ${r.shape}`);if("int32"!==n.dtype||"int32"!==r.dtype)throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${n.dtype} and type of y: ${r.dtype}`);const s={a:n,b:r};return ga.runKernel(ke,s)}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zi=Aa({broadcastArgs_:function(e,t){const n=Ea(e,"s0","broadcastArgs","int32"),r=Ea(t,"s1","broadcastArgs","int32");if(1!==n.rank)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(1!==r.rank)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);const s={s0:n,s1:r};return ga.runKernel(_e,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yi=Aa({broadcastTo_:function(e,t){let n=Ea(e,"broadcastTo","x");const r=n.shape;if(G(t),t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const e=n.shape.slice();for(;e.length<t.length;)e.unshift(1);n=Ci(n,e)}const s=n.shape,a=Array.from(t);for(let u=t.length-1;u>=0;u--)if(s[u]===t[u])a[u]=1;else if(1!==n.shape[u])throw new Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(0===a.map(((e,t)=>e>1?t:-1)).filter((e=>e>=0)).length)return ei(n);const o={x:n},i={reps:a};return ga.runKernel(ur,o,i)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xi=Aa({ceil_:function(e){const t={x:Ea(e,"x","ceil","float32")};return ga.runKernel(Ae,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qi(e,t,n){G(e);const r={shape:e,value:t,dtype:n=n||F(t)};return ga.runKernel(pt,{},r)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eu=Aa({clipByValue_:function(e,t,n){const r=Ea(e,"x","clipByValue");if(h(t<=n,(()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`)),t===n)return Qi(r.shape,t,r.dtype);const s={x:r},a={clipValueMin:t,clipValueMax:n};return ga.runKernel(Me,s,a)}});const tu=Aa({concat1d_:function(e){return Bi(e,0)}});const nu=Aa({concat2d_:function(e,t){return Bi(e,t)}});const ru=Aa({concat3d_:function(e,t){return Bi(e,t)}});const su=Aa({concat4d_:function(e,t){return Bi(e,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const au=Aa({conv2d_:function(e,t,n,r,s="NHWC",a=[1,1],o){const i=Ea(e,"x","conv2d","float32"),u=Ea(t,"filter","conv2d","float32");let l=i,c=!1;3===i.rank&&(c=!0,l=Ci(i,[1,i.shape[0],i.shape[1],i.shape[2]])),h(4===l.rank,(()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`)),h(4===u.rank,(()=>`Error in conv2d: filter must be rank 4, but got rank ${u.rank}.`)),Di("conv2d",r,o);const p="NHWC"===s?l.shape[3]:l.shape[1];h(p===u.shape[2],(()=>`Error in conv2d: depth of input (${p}) must match input depth for filter ${u.shape[2]}.`)),h(Mi(n,a),(()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`)),h($i(a),(()=>"Error in conv2D: Dilated rates should be larger than 0.")),h($i(n),(()=>"Error in conv2D: Strides should be larger than 0."));const d={x:l,filter:u},m={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o},f=ga.runKernel(Ce,d,m);return c?Ci(f,[f.shape[1],f.shape[2],f.shape[3]]):f}});const ou=Aa({conv1d_:function(e,t,n,r,s="NWC",a=1,o){const i=Ea(e,"x","conv1d"),u=Ea(t,"filter","conv1d");let l=i,c=!1;2===i.rank&&(c=!0,l=Ci(i,[1,i.shape[0],i.shape[1]])),h(3===l.rank,(()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`)),h(3===u.rank,(()=>`Error in conv1d: filter must be rank 3, but got rank ${u.rank}.`)),Di("conv1d",r,o),h(l.shape[2]===u.shape[1],(()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${u.shape[1]}.`)),h(Mi(n,a),(()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${a}'`)),h($i(a),(()=>"Error in conv1D: Dilated rates should be larger than 0.")),h($i(n),(()=>"Error in conv1D: Stride should be larger than 0.")),h("NWC"===s,(()=>`Error in conv1d: got dataFormat of ${s} but only NWC is currently supported.`));const p=Ci(u,[1,u.shape[0],u.shape[1],u.shape[2]]),d=Ci(l,[l.shape[0],1,l.shape[1],l.shape[2]]),m=au(d,p,[1,n],r,"NHWC",[1,a],o);return Ci(m,c?[m.shape[2],m.shape[3]]:[m.shape[0],m.shape[2],m.shape[3]])}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const iu=Aa({conv2DBackpropInput_:function(e,t,n,r,s,a="NHWC",o){h(e.length===t.rank,(()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`));let i=e,u=t,l=!1;3===t.rank&&(l=!0,u=Ci(t,[1,t.shape[0],t.shape[1],t.shape[2]]),i=[1,e[0],e[1],e[2]]),h(4===i.length,(()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`)),h(4===u.rank,(()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${u.rank}`)),h(4===n.rank,(()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`));const c="NHWC"===a?i[3]:i[1],p="NHWC"===a?u.shape[3]:u.shape[1];h(c===n.shape[2],(()=>`Error in conv2dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[2]}.`)),h(p===n.shape[3],(()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${n.shape[3]}.`)),Di("conv2dDerInput",s,o);const d={dy:u,filter:n},m={strides:r,pad:s,dataFormat:a,dimRoundingMode:o,inputShape:i},f=ga.runKernel(Fe,d,m);return l?Ci(f,[f.shape[1],f.shape[2],f.shape[3]]):f}});const uu=Aa({conv2dTranspose_:function(e,t,n,r,s,a){const o=Ea(e,"x","conv2dTranspose"),i=Ea(t,"filter","conv2dTranspose");return iu(n,o,i,r,s,"NHWC",a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lu=Aa({conv3d_:function(e,t,n,r,s="NDHWC",a=[1,1,1]){const o=Ea(e,"x","conv3d"),i=Ea(t,"filter","conv3d");let u=o,l=!1;4===o.rank&&(l=!0,u=Ci(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),h(5===u.rank,(()=>`Error in conv3d: input must be rank 5, but got rank ${u.rank}.`)),h(5===i.rank,(()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`)),h(u.shape[4]===i.shape[3],(()=>`Error in conv3d: depth of input (${u.shape[4]}) must match input depth for filter ${i.shape[3]}.`)),h(Mi(n,a),(()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`)),h("NDHWC"===s,(()=>`Error in conv3d: got dataFormat of ${s} but only NDHWC is currently supported.`)),h($i(a),(()=>"Error in conv3D: Dilated rates should be larger than 0.")),h($i(n),(()=>"Error in conv3D: Strides should be larger than 0."));const c={x:u,filter:i},p={strides:n,pad:r,dataFormat:s,dilations:a},d=ga.runKernel(Be,c,p);return l?Ci(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cu=Aa({conv3DBackpropInput_:function(e,t,n,r,s){h(e.length===t.rank,(()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`));let a=e,o=t,i=!1;4===t.rank&&(i=!0,o=Ci(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),a=[1,e[0],e[1],e[2],e[3]]);const u=a[4],l=o.shape[4];h(5===a.length,(()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`)),h(5===o.rank,(()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`)),h(5===n.rank,(()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`)),h(u===n.shape[3],(()=>`Error in conv3dDerInput: depth of input (${u}) must match input depth for filter ${n.shape[3]}.`)),h(l===n.shape[4],(()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[4]}.`));const c={dy:o,filter:n},p={pad:s,strides:r,inputShape:a},d=ga.runKernel(Le,c,p);return i?Ci(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}});const pu=Aa({conv3dTranspose_:function(e,t,n,r,s){const a=Ea(e,"x","conv3dTranspose"),o=Ea(t,"filter","conv3dTranspose");return cu(n,a,o,r,s)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const du=Aa({cos_:function(e){const t={x:Ea(e,"x","cos","float32")};return ga.runKernel("Cos",t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hu=Aa({cosh_:function(e){const t={x:Ea(e,"x","cosh","float32")};return ga.runKernel(Ve,t)}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mu=Aa({cumprod_:function(e,t=0,n=!1,r=!1){const s={x:Ea(e,"x","cumprod")},a={axis:t,exclusive:n,reverse:r};return ga.runKernel(Ue,s,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fu=Aa({cumsum_:function(e,t=0,n=!1,r=!1){const s={x:Ea(e,"x","cumsum")},a={axis:t,exclusive:n,reverse:r};return ga.runKernel(je,s,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gu=Aa({denseBincount_:function(e,t,n,r=!1){const s=Ea(e,"x","denseBincount"),a=Ea(t,"weights","denseBincount");h("int32"===s.dtype,(()=>`Error in denseBincount: input dtype must be int32, but got ${s.dtype}`)),h(s.rank<=2,(()=>`Error in denseBincount: input must be at most rank 2, but got rank ${s.rank}.`)),h(n>=0,(()=>`size must be non-negative, but got ${n}.`)),h(a.size===s.size||0===a.size,(()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${s.shape}, weights shape: ${a.shape}.`));const o={x:s,weights:a},i={size:n,binaryOutput:r};return ga.runKernel(qe,o,i)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yu=Aa({depthToSpace_:function(e,t,n="NHWC"){const r=Ea(e,"x","depthToSpace","float32"),s="NHWC"===n?r.shape[1]:r.shape[2],a="NHWC"===n?r.shape[2]:r.shape[3],o="NHWC"===n?r.shape[3]:r.shape[1];h(t>1,(()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`)),h(s*t>=0,(()=>`Negative dimension size caused by overflow when multiplying\n    ${s} and ${t}  for depthToSpace with input shape\n    ${r.shape}`)),h(a*t>=0,(()=>`Negative dimension size caused by overflow when multiplying\n    ${a} and ${t} for depthToSpace with input shape\n        ${r.shape}`)),h(o%(t*t)==0,(()=>`Dimension size must be evenly divisible by ${t*t} but is ${o} for depthToSpace with input shape ${r.shape}`));const i={x:r},u={blockSize:t,dataFormat:n};return ga.runKernel(Ge,i,u)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bu=Aa({depthwiseConv2d_:function(e,t,n,r,s="NHWC",a=[1,1],o){const i=Ea(e,"x","depthwiseConv2d","float32"),u=Ea(t,"filter","depthwiseConv2d","float32");let l=i,c=!1;3===i.rank&&(c=!0,l=Ci(i,[1,i.shape[0],i.shape[1],i.shape[2]])),h(4===l.rank,(()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`)),h(4===u.rank,(()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${u.rank}.`));const p="NHWC"===s?l.shape[3]:l.shape[1];h(p===u.shape[2],(()=>`Error in depthwiseConv2d: number of input channels (${p}) must match the inChannels dimension in filter ${u.shape[2]}.`)),Di("depthwiseConv2d",r,o);const d={x:l,filter:u},m={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o},f=ga.runKernel(Ke,d,m);return c?Ci(f,[f.shape[1],f.shape[2],f.shape[3]]):f}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wu=Aa({diag_:function(e){const t={x:Ea(e,"x","diag")};return ga.runKernel(Ze,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nu=Aa({dilation2d_:function(e,t,n,r,s=[1,1],a="NHWC"){const o=Ea(e,"x","dilation2d"),i=Ea(t,"filter","dilation2d");h(3===o.rank||4===o.rank,(()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`)),h(3===i.rank,(()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`)),h("NHWC"===a,(()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${a}`));let u=o,l=!1;3===o.rank&&(u=Ci(o,[1,o.shape[0],o.shape[1],o.shape[2]]),l=!0),h(u.shape[3]===i.shape[2],(()=>`Error in dilation2d:  input and filter must have the same depth: ${u.shape[3]} vs ${i.shape[2]}`));const c={x:u,filter:i},p={strides:n,pad:r,dilations:s},d=ga.runKernel(Ye,c,p);return l?Ci(d,[d.shape[1],d.shape[2],d.shape[3]]):d}});
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xu(e,t){const n=e.length,r=[];for(let s=0;s<n;s++){const a=n-1-s,o=e[a]||1;(t[t.length-1-s]||1)>1&&1===o&&r.unshift(a)}return r}function vu(e,t){const n=[];for(let r=0;r<t.length;r++){const s=e[e.length-r-1],a=t.length-r-1,o=t[a];(null==s||1===s&&o>1)&&n.unshift(a)}return n}function Tu(e,t){const n=Math.max(e.length,t.length),r=new Array(n);for(let s=0;s<n;s++){let a=e[e.length-s-1];null==a&&(a=1);let o=t[t.length-s-1];if(null==o&&(o=1),1===a)r[n-s-1]=o;else if(1===o)r[n-s-1]=a;else{if(a!==o){throw Error(`Operands could not be broadcast together with shapes ${e} and ${t}.`)}r[n-s-1]=a}}return r}const Su=Object.freeze(Object.defineProperty({__proto__:null,assertAndGetBroadcastShape:Tu,getBroadcastDims:xu,getReductionAxes:vu},Symbol.toStringTag,{value:"Module"}));
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ku=Aa({equal_:function(e,t){let n=Ea(e,"a","equal","string_or_numeric"),r=Ea(t,"b","equal","string_or_numeric");[n,r]=oa(n,r),Tu(n.shape,r.shape);const s={a:n,b:r};return ga.runKernel(ot,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Eu=Aa({where_:function(e,t,n){const r=Ea(t,"a","where"),s=Ea(n,"b","where"),a=Ea(e,"condition","where","bool"),o=Tu(Tu(a.shape,r.shape),s.shape),i={condition:Yi(a,o),t:Yi(r,o),e:Yi(s,o)};return ga.runKernel(Cn,i)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _u=Aa({zerosLike_:function(e){const t={x:Ea(e,"x","zerosLike")};return ga.runKernel(gr,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Iu=Aa({divNoNan_:function(e,t){let n=Ea(e,"a","div"),r=Ea(t,"b","div");[n,r]=oa(n,r);const s=si(n,r),a=_u(s),o=ku(r,a);return Eu(o,a,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Au=Aa({dot_:function(e,t){const n=Ea(e,"t1","dot"),r=Ea(t,"t2","dot");h(!(1!==n.rank&&2!==n.rank||1!==r.rank&&2!==r.rank),(()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`));const s=1===n.rank?n.size:n.shape[1],a=1===r.rank?r.size:r.shape[0];if(h(s===a,(()=>`Error in dot: inner dimensions of inputs must match, but got ${s} and ${a}.`)),1===n.rank&&1===r.rank){const e=Ci(n,[1,-1]),t=Ci(r,[-1,1]),s=zi(e,t);return Ci(s,[])}if(1===n.rank&&2===r.rank){const e=Ci(n,[1,-1]),t=Ci(r,[r.shape[0],r.shape[1]]),s=zi(e,t);return Ci(s,[s.size])}if(2===n.rank&&1===r.rank){const e=Ci(r,[-1,1]),t=zi(n,e);return Ci(t,[t.size])}{const e=Ci(r,[r.shape[0],r.shape[1]]);return zi(n,e)}}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mu=Aa({einsum_:function(e,...t){const n=t.map(((e,t)=>Ea(e,`tensors${t}`,"einsum"))),r={equation:e};return ga.runKernel(nt,n,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $u=Aa({elu_:function(e){const t={x:Ea(e,"x","elu","float32")};return ga.runKernel("Elu",t)}});
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ou=Aa({ensureShape_:function(e,t){const n=Ea(e,"x","ensureShape","string_or_numeric");if(!y(n.shape,t))throw new Error(`EnsureShape: Shape of tensor ${n.shape} is not compatible with expected shape ${t}`);return e}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Du=Aa({erf_:function(e){let t=Ea(e,"x","erf");h("int32"===t.dtype||"float32"===t.dtype,(()=>"Input dtype must be `int32` or `float32`.")),"int32"===t.dtype&&(t=Qo(t,"float32"));const n={x:t};return ga.runKernel("Erf",n)}});
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cu(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function Ru(e,t,n){const r=e.length+t.length,s=[];let a=0,o=0;for(let i=0;i<r;i++)-1===n.indexOf(i)?s.push(e[a++]):s.push(t[o++]);return s}function Fu(e,t){const n=[],r=e.length;for(let s=0;s<r;s++)-1===t.indexOf(s)&&n.push(e[s]);return[n,t.map((t=>e[t]))]}function Bu(e,t){return Ru(e,t.map((e=>1)),t)}function zu(e,t,n){h(Cu(t,n),(()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`))}function Lu(e,t){if(Cu(e,t))return null;const n=[];for(let r=0;r<t;++r)-1===e.indexOf(r)&&n.push(r);return e.forEach((e=>n.push(e))),n}function Pu(e){return e.map(((e,t)=>[t,e])).sort(((e,t)=>e[1]-t[1])).map((e=>e[0]))}function Vu(e,t){const n=[];for(let r=t-e;r<t;++r)n.push(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Uu=Aa({max_:function(e,t=null,n=!1){const r={x:Ea(e,"x","max")},s={reductionIndices:t,keepDims:n};return ga.runKernel("Max",r,s)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ju=Aa({min_:function(e,t=null,n=!1){const r={x:Ea(e,"x","min")},s={axis:t,keepDims:n};return ga.runKernel("Min",r,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wu=Aa({pow_:function(e,t){let n=Ea(e,"base","pow"),r=Ea(t,"exp","pow");[n,r]=oa(n,r);const s={a:n,b:r};return ga.runKernel("Pow",s)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qu(e,t){if((Is(e)&&"string"!==t||Array.isArray(e))&&"complex64"!==t)throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===t&&Is(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return $a(e,[],[],t)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gu=Aa({sqrt_:function(e){const t={x:Ea(e,"x","sqrt","float32")};return ga.runKernel(Un,t)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ku=Aa({square_:function(e){const t=Ea(e,"x","square");return ga.runKernel("Square",{x:t},{})}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hu=Aa({sum_:function(e,t=null,n=!1){let r=Ea(e,"x","sum");"bool"===r.dtype&&(r=Qo(r,"int32"));const s={x:r},a={axis:t,keepDims:n};return ga.runKernel("Sum",s,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ju(e,t,n=null){if(0===e.rank)return oi(e);if(1!==e.rank&&null===n)return Ju(Ci(e,[-1]),t,n);if(1===e.rank||"number"==typeof n||Array.isArray(n)&&1===n.length){if(1===t)return Hu(oi(e),n);if(t===1/0)return Uu(oi(e),n);if(t===-1/0)return ju(oi(e),n);if("euclidean"===t||2===t)return Gu(Hu(Wu(oi(e),qu(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&2===n.length){if(1===t)return Uu(Hu(oi(e),n[0]),n[1]-1);if(t===1/0)return Uu(Hu(oi(e),n[1]),n[0]);if(t===-1/0)return ju(Hu(oi(e),n[1]),n[0]);if("fro"===t||"euclidean"===t)return Gu(Hu(Ku(e),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const Zu=Aa({norm_:function(e,t="euclidean",n=null,r=!1){const s=Ju(e=Ea(e,"x","norm"),t,n);let a=s.shape;if(r){const t=S(n,e.shape);a=Bu(s.shape,t)}return Ci(s,a)}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yu=Aa({euclideanNorm_:function(e,t=null,n=!1){return Zu(e,"euclidean",t,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xu=Aa({exp_:function(e){const t={x:Ea(e,"x","exp")};return ga.runKernel("Exp",t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qu=Aa({expandDims_:function(e,t=0){const n=Ea(e,"x","expandDims","string_or_numeric");h(t<=n.rank,(()=>"Axis must be <= rank of the tensor"));const r={input:n},s={dim:t};return ga.runKernel(ut,r,s)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const el=Aa({expm1_:function(e){const t={x:Ea(e,"x","expm1")};return ga.runKernel(lt,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tl=Aa({tile_:function(e,t){const n=Ea(e,"x","tile","string_or_numeric");h(n.rank===t.length,(()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`));const r={x:n},s={reps:t};return ga.runKernel(ur,r,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nl=Aa({eye_:function(e,t,n,r="float32"){null==t&&(t=e);const s=Xo([e,t],r),a=e<=t?e:t;for(let i=0;i<a;++i)s.set(1,i,i);const o=Ci(s.toTensor(),[e,t]);if(null==n)return o;if(1===n.length)return tl(Qu(o,0),[n[0],1,1]);if(2===n.length)return tl(Qu(Qu(o,0),0),[n[0],n[1],1,1]);if(3===n.length)return tl(Qu(Qu(Qu(o,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rl=Aa({floor_:function(e){const t={x:Ea(e,"x","floor","float32")};return ga.runKernel(ht,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sl=Aa({gather_:function(e,t,n=0,r=0){const s={x:Ea(e,"x","gather"),indices:Ea(t,"indices","gather","int32")},a={axis:n,batchDims:r};return ga.runKernel(gt,s,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const al=Aa({greater_:function(e,t){let n=Ea(e,"a","greater","string_or_numeric"),r=Ea(t,"b","greater","string_or_numeric");[n,r]=oa(n,r),Tu(n.shape,r.shape);const s={a:n,b:r};return ga.runKernel(bt,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ol=Aa({greaterEqual_:function(e,t){let n=Ea(e,"a","greaterEqual","string_or_numeric"),r=Ea(t,"b","greaterEqual","string_or_numeric");[n,r]=oa(n,r),Tu(n.shape,r.shape);const s={a:n,b:r};return ga.runKernel(wt,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const il=Aa({imag_:function(e){const t={input:Ea(e,"input","imag")};return ga.runKernel(vt,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ul=Aa({isFinite_:function(e){const t={x:Ea(e,"x","isFinite")};return ga.runKernel(Tt,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ll=Aa({isInf_:function(e){const t={x:Ea(e,"x","isInf")};return ga.runKernel(St,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cl=Aa({isNaN_:function(e){const t={x:Ea(e,"x","isNaN")};return ga.runKernel(kt,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pl=Aa({leakyRelu_:function(e,t=.2){const n={x:Ea(e,"x","leakyRelu")},r={alpha:t};return ga.runKernel(Et,n,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dl=Aa({less_:function(e,t){let n=Ea(e,"a","less","string_or_numeric"),r=Ea(t,"b","less","string_or_numeric");[n,r]=oa(n,r),Tu(n.shape,r.shape);const s={a:n,b:r};return ga.runKernel(_t,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hl=Aa({lessEqual_:function(e,t){let n=Ea(e,"a","lessEqual","string_or_numeric"),r=Ea(t,"b","lessEqual","string_or_numeric");[n,r]=oa(n,r),Tu(n.shape,r.shape);const s={a:n,b:r};return ga.runKernel(It,s)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ml(e,t,n){if(n<=0)throw new Error("The number of values should be positive.");const r={start:e,stop:t,num:n};return ga.runKernel(At,{},r)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fl=Aa({localResponseNormalization_:function(e,t=5,n=1,r=1,s=.5){const a=Ea(e,"x","localResponseNormalization");h(4===a.rank||3===a.rank,(()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank ${a.rank}.`)),h(w(t),(()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`));let o=a,i=!1;3===a.rank&&(i=!0,o=Ci(a,[1,a.shape[0],a.shape[1],a.shape[2]]));const u={x:o},l={depthRadius:t,bias:n,alpha:r,beta:s},c=ga.runKernel("LRN",u,l);return i?Ci(c,[c.shape[1],c.shape[2],c.shape[3]]):c}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gl=Aa({log_:function(e){const t={x:Ea(e,"x","log","float32")};return ga.runKernel("Log",t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yl=Aa({log1p_:function(e){const t={x:Ea(e,"x","log1p")};return ga.runKernel($t,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bl(e){return h(B(e),(()=>"The f passed in grad(f) must be a function")),(t,n)=>{const r=Ea(t,"x","tf.grad","string_or_numeric"),s=null!=n?Ea(n,"dy","tf.grad"):null;return ga.tidy((()=>{const{value:t,grads:n}=ga.gradients((()=>e(r)),[r],s);return null!=s&&m(t.shape,s.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),Sl(n),n[0]}))}}function wl(e){return h(B(e),(()=>"The f passed in grads(f) must be a function")),(t,n)=>{h(Array.isArray(t),(()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s"));const r=_a(t,"args","tf.grads","string_or_numeric"),s=null!=n?Ea(n,"dy","tf.grads"):null;return ga.tidy((()=>{const{value:t,grads:n}=ga.gradients((()=>e(...r)),r,s);return null!=s&&m(t.shape,s.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Sl(n),n}))}}function Nl(e){return h(B(e),(()=>"The f passed in valueAndGrad(f) must be a function")),(t,n)=>{h(t instanceof Us,(()=>"The x passed in valueAndGrad(f)(x) must be a tensor")),h(null==n||n instanceof Us,(()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor"));const{grads:r,value:s}=ga.gradients((()=>e(t)),[t],n);return Sl(r),{grad:r[0],value:s}}}function xl(e){return h(B(e),(()=>"The f passed in valueAndGrads(f) must be a function")),(t,n)=>{h(Array.isArray(t)&&t.every((e=>e instanceof Us)),(()=>"The args passed in valueAndGrads(f)(args) must be array of tensors")),h(null==n||n instanceof Us,(()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor"));const r=ga.gradients((()=>e(...t)),t,n);return null!=n&&m(r.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Sl(r.grads),r}}function vl(e,t){h(B(e),(()=>"The f passed in variableGrads(f) must be a function")),h(null==t||Array.isArray(t)&&t.every((e=>e instanceof Ws)),(()=>"The varList passed in variableGrads(f, varList) must be an array of variables"));const n=null!=t;if(!n){t=[];for(const e in ga.registeredVariables)t.push(ga.registeredVariables[e])}const r=n?t.filter((e=>!e.trainable)):null,s=t.length;h((t=t.filter((e=>e.trainable))).length>0,(()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${s} variables is trainable.`));const{value:a,grads:o}=ga.gradients(e,t,null,!0);h(o.some((e=>null!=e)),(()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().")),h(0===a.rank,(()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${a.rank} tensor`));const i={};return t.forEach(((e,t)=>{null!=o[t]&&(i[e.name]=o[t])})),null!=r&&r.forEach((e=>i[e.name]=null)),{value:a,grads:i}}function Tl(e){return ga.customGrad(e)}function Sl(e){if(e.filter((e=>null==e)).length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.")}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kl=Aa({neg_:function(e){const t={x:Ea(e,"x","neg")};return ga.runKernel("Neg",t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const El=Aa({softplus_:function(e){const t={x:Ea(e,"x","softplus")};return ga.runKernel(Vn,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _l=Aa({logSigmoid_:function(e){const t=Ea(e,"x","logSigmoid");return Tl((e=>({value:kl(El(kl(e))),gradFunc:t=>ai(t,Li(kl(e)))})))(t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Il=Aa({sub_:function(e,t){let n=Ea(e,"a","sub"),r=Ea(t,"b","sub");[n,r]=oa(n,r);const s={a:n,b:r};return ga.runKernel("Sub",s)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Al=Aa({logSoftmax_:function(e,t=-1){const n=Ea(e,"logits","logSoftmax");if(-1===t&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return Tl(((e,n)=>{const r=Uu(e,t,!0),s=Il(e,r),a=Il(Qo(s,"float32"),gl(Hu(Xu(s),t,!0)));n([a]);return{value:a,gradFunc:(e,n)=>{const[r]=n,s=Xu(r);return Il(e,ai(Hu(e,t,!0),s))}}}))(n)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ml=Aa({logSumExp_:function(e,t=null,n=!1){const r=Ea(e,"x","logSumExp"),s=S(t,r.shape),a=Uu(r,s,!0),o=Il(r,a),i=Xu(o),u=Hu(i,s),l=gl(u),c=ni(Ci(a,l.shape),l);if(n){const e=Bu(c.shape,s);return Ci(c,e)}return c}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $l=Aa({logicalAnd_:function(e,t){const n=Ea(e,"a","logicalAnd","bool"),r=Ea(t,"b","logicalAnd","bool");Tu(n.shape,r.shape);const s={a:n,b:r};return ga.runKernel(Ot,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ol=Aa({logicalNot_:function(e){const t={x:Ea(e,"x","logicalNot","bool")};return ga.runKernel(Dt,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dl=Aa({logicalOr_:function(e,t){const n=Ea(e,"a","logicalOr","bool"),r=Ea(t,"b","logicalOr","bool");Tu(n.shape,r.shape);const s={a:n,b:r};return ga.runKernel(Ct,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cl=Aa({logicalXor_:function(e,t){const n=Ea(e,"a","logicalXor","bool"),r=Ea(t,"b","logicalXor","bool");return Tu(n.shape,r.shape),$l(Dl(e,t),Ol($l(e,t)))}}),Rl=2147483648;
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fl=Aa({searchSorted_:function(e,t,n="left"){const r=Ea(e,"sortedSequence","searchSorted"),s=Ea(t,"values","searchSorted"),a=r.shape[r.shape.length-1],o=s.shape[s.shape.length-1],i=Ci(r,[-1,a]),u=Ci(s,[-1,o]);if(i.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(i.shape[0]!==u.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(g(u.shape)>=Rl)throw new Error("values tensor size must less than 2147483648");if(i.shape[1]>=Rl)throw new Error(`trailing dim_size must less than 2147483648 for int32 output type, was ${i.shape[1]}`);const l={sortedSequence:i,values:u},c={side:n};return ga.runKernel(Dn,l,c)}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bl(e,t){return Fl(e,t,"left")}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zl=Aa({maxPool_:function(e,t,n,r,s){const a=Ea(e,"x","maxPool");let o=a,i=!1;3===a.rank&&(i=!0,o=Ci(a,[1,a.shape[0],a.shape[1],a.shape[2]])),h(4===o.rank,(()=>`Error in maxPool: input must be rank 4 but got rank ${o.rank}.`)),h(Mi(n,1),(()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`)),Di("maxPool",r,s);const u={x:o},l={filterSize:t,strides:n,pad:r,dimRoundingMode:s},c=ga.runKernel(jt,u,l);return i?Ci(c,[c.shape[1],c.shape[2],c.shape[3]]):c}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ll=Aa({maxPool3d_:function(e,t=[1,1,1],n,r,s,a="NDHWC"){const o=Ea(e,"x","maxPool3d");let i=o,u=!1;4===o.rank&&(u=!0,i=Ci(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),h(5===i.rank,(()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`)),h("NDHWC"===a,(()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`)),Di("maxPool3d",r,s);const l={x:i},c={filterSize:t,strides:n,pad:r,dimRoundingMode:s,dataFormat:a},p=ga.runKernel(qt,l,c);return u?Ci(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pl=Aa({maxPoolWithArgmax_:function(e,t,n,r,s=!1){const a={x:Ea(e,"x","maxPoolWithArgmax")},o={filterSize:t,strides:n,pad:r,includeBatchInIndex:s},i=ga.runKernel(Kt,a,o);return{result:i[0],indexes:i[1]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vl=Aa({maximum_:function(e,t){let n=Ea(e,"a","maximum"),r=Ea(t,"b","maximum");[n,r]=oa(n,r),"bool"===n.dtype&&(n=Qo(n,"int32"),r=Qo(r,"int32")),Tu(n.shape,r.shape);const s={a:n,b:r};return ga.runKernel(Ut,s)}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ul=Aa({mean_:function(e,t=null,n=!1){const r={x:Ea(e,"x","mean")},s={axis:t,keepDims:n};return ga.runKernel(Ht,r,s)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jl(e,t="float32"){if(G(e),"complex64"===t){const t=jl(e,"float32"),n=jl(e,"float32");return Ma(t,n)}const n=W(g(e),t);return ga.makeTensor(n,e,t)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wl(e,t="float32"){if(G(e),"complex64"===t){const t=Wl(e,"float32"),n=jl(e,"float32");return Ma(t,n)}const n=j(g(e),t);return ga.makeTensor(n,e,t)}
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ql(e,t,{indexing:n="xy"}={}){if("xy"!==n&&"ij"!==n)throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(void 0===e)return[];let r=Ea(e,"x","meshgrid",e instanceof Us?e.dtype:"float32");if(void 0===t)return[r];let s=Ea(t,"y","meshgrid",t instanceof Us?t.dtype:"float32");const a=g(r.shape),o=g(s.shape);return"xy"===n?(r=Ci(r,[1,-1]),s=Ci(s,[-1,1]),[zi(Wl([o,1],r.dtype),r),zi(s,Wl([1,a],s.dtype))]):(r=Ci(r,[-1,1]),s=Ci(s,[1,-1]),[zi(r,Wl([1,o],r.dtype)),zi(Wl([a,1],s.dtype),s)])}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gl=Aa({minimum_:function(e,t){let n=Ea(e,"a","minimum"),r=Ea(t,"b","minimum");[n,r]=oa(n,r),"bool"===n.dtype&&(n=Qo(n,"int32"),r=Qo(r,"int32")),Tu(n.shape,r.shape);const s={a:n,b:r};return ga.runKernel(Zt,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kl=Aa({mirrorPad_:function(e,t,n){h("reflect"===n||"symmetric"===n,(()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`));const r=Ea(e,"x","mirrorPad");if(0===r.rank)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");h(t.length===r.rank,(()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`));const s="reflect"===n?1:0;for(let i=0;i<r.rank;i++)h(2===t[i].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),h(t[i][0]>=0&&t[i][0]<=r.shape[i]-s&&t[i][1]>=0&&t[i][1]<=r.shape[i]-s,(()=>`Padding in dimension ${i} cannot be greater than or equal to ${r.shape[i]-s} or less than 0 for input of shape ${r.shape}`));const a={paddings:t,mode:n},o={x:r};return ga.runKernel(Yt,o,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hl=Aa({mod_:function(e,t){let n=Ea(e,"a","mod"),r=Ea(t,"b","mod");[n,r]=oa(n,r);const s={a:n,b:r};return ga.runKernel("Mod",s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jl=Aa({moments_:function(e,t=null,n=!1){const r=S(t,(e=Ea(e,"x","moments")).shape),s=Ul(e,r,n);let a=s.shape;n||(a=Bu(s.shape,r));const o=Ku(Il(Qo(e,"float32"),Ci(s,a)));return{mean:s,variance:Ul(o,r,n)}}});const Zl=Aa({multiRNNCell_:function(e,t,n,r){const s=Ea(t,"data","multiRNNCell"),a=_a(n,"c","multiRNNCell"),o=_a(r,"h","multiRNNCell");let i=s;const u=[];for(let p=0;p<e.length;p++){const t=e[p](i,a[p],o[p]);u.push(t[0]),u.push(t[1]),i=t[1]}const l=[],c=[];for(let p=0;p<u.length;p+=2)l.push(u[p]),c.push(u[p+1]);return[l,c]}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yl=Aa({multinomial_:function(e,t,n,r=!1){const s=Ea(e,"logits","multinomial"),a=s.size,o=s.rank;if(a<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${a}.`);if(o>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${o}`);n=n||Math.random();const i={logits:1===o?Ci(s,[1,-1]):s},u={numSamples:t,seed:n,normalized:r},l=ga.runKernel(Qt,i,u);return 1===o?Ci(l,[l.size]):l}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xl=Aa({notEqual_:function(e,t){let n=Ea(e,"a","notEqual","string_or_numeric"),r=Ea(t,"b","notEqual","string_or_numeric");[n,r]=oa(n,r),Tu(n.shape,r.shape);const s={a:n,b:r};return ga.runKernel(nn,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ql=Aa({oneHot_:function(e,t,n=1,r=0,s="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const a={indices:Ea(e,"indices","oneHot","int32")},o={dtype:s,depth:t,onValue:n,offValue:r};return ga.runKernel(un,a,o)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ec=Aa({onesLike_:function(e){const t={x:Ea(e,"x","onesLike")};return ga.runKernel(on,t)}});const tc=Aa({outerProduct_:function(e,t){const n=Ea(e,"v1","outerProduct"),r=Ea(t,"v2","outerProduct");h(1===n.rank&&1===r.rank,(()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`));const s=Ci(n,[-1,1]),a=Ci(r,[1,-1]);return zi(s,a)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nc=Aa({pad_:function(e,t,n=0){const r=Ea(e,"x","pad");if(0===r.rank)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const s={paddings:t,constantValue:n},a={x:r};return ga.runKernel(cn,a,s)}});const rc=Aa({pad1d_:function(e,t,n=0){return h(2===t.length,(()=>"Invalid number of paddings. Must be length of 2.")),nc(e,[t],n)}});const sc=Aa({pad2d_:function(e,t,n=0){return h(2===t.length&&2===t[0].length&&2===t[1].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),nc(e,t,n)}});const ac=Aa({pad3d_:function(e,t,n=0){return h(3===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),nc(e,t,n)}});const oc=Aa({pad4d_:function(e,t,n=0){return h(4===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length&&2===t[3].length,(()=>"Invalid number of paddings. Must be length of 2 each.")),nc(e,t,n)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ic=Aa({spaceToBatchND_:function(e,t,n){const r=Ea(e,"x","spaceToBatchND");h(r.rank>=1+t.length,(()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`)),h(n.length===t.length,(()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`)),h(r.shape.reduce(((e,r,s)=>s>0&&s<=t.length?e&&(r+n[s-1][0]+n[s-1][1])%t[s-1]==0:e),!0),(()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`));const s={x:r},a={blockShape:t,paddings:n};return ga.runKernel(Wn,s,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uc=Aa({pool_:function(e,t,n,r,s,a,o){null==s&&(s=[1,1]),null==a&&(a=1),0===r&&(r="valid");const i=Ea(e,"x","maxPool");let u=i,l=!1;3===i.rank&&(l=!0,u=Ci(i,[1,i.shape[0],i.shape[1],i.shape[2]])),h(Mi(a,s),(()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${s}'`));const c=Ni(u.shape,t,a,s,r),p=[c.dilationHeight,c.dilationWidth];let d;d="same"===r?function(e,t){const n=e.map(((e,n)=>e+(e-1)*(t[n]-1))),r=n.map((e=>e-1)),s=r.map((e=>Math.floor(e/2))),a=r.map(((e,t)=>e-s[t]));return r.map(((e,t)=>[s[t],a[t]]))}([c.filterHeight,c.filterWidth],p):[[0,0],[0,0]];const m=1===p[0]&&1===p[1],[f,g]=function(e,t,n){const r=n.map((e=>e[0])),s=n.map((e=>e[1])),a=e.concat(r,s),o=t.map(((e,t)=>(e-a[t]%e)%e)),i=s.map(((e,t)=>e+o[t])),u=t.map(((e,t)=>[r[t],i[t]])),l=t.map(((e,t)=>[0,o[t]]));return[u,l]}([c.inHeight,c.inWidth],p,d),y=m?r:"valid",b=m?u:ic(u,p,f),w=("avg"===n?()=>Ri(b,t,a,y,o):()=>zl(b,t,a,y,o))(),N=m?w:ji(w,p,g);return l?Ci(N,[N.shape[1],N.shape[2],N.shape[3]]):N}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lc=Aa({prelu_:function(e,t){const n={x:Ea(e,"x","prelu"),alpha:Ea(t,"alpha","prelu")};return ga.runKernel(hn,n)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cc=Aa({prod_:function(e,t=null,n=!1){let r=Ea(e,"x","prod");"bool"===r.dtype&&(r=Qo(r,"int32"));const s={x:r},a={axis:t,keepDims:n};return ga.runKernel(mn,s,a)}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pc=Aa({raggedGather_:function(e,t,n,r){const s={paramsNestedSplits:e.map(((e,t)=>Ea(e,`tensors${t}`,"raggedGather","int32"))),paramsDenseValues:Ea(t,"paramsDenseValues","raggedGather"),indices:Ea(n,"indices","raggedGather","int32")},a={outputRaggedRank:r},o=ga.runKernel(fn,s,a);return{outputNestedSplits:o.slice(0,o.length-1),outputDenseValues:o[o.length-1]}}});
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dc=Aa({raggedRange_:function(e,t,n){const r=Ea(e,"starts","raggedRange"),s={starts:r,limits:Ea(t,"limits","raggedRange",r.dtype),deltas:Ea(n,"deltas","raggedRange",r.dtype)},a=ga.runKernel(gn,s);return{rtNestedSplits:a[0],rtDenseValues:a[1]}}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hc=Aa({raggedTensorToTensor_:function(e,t,n,r,s){const a=Ea(e,"shape","raggedTensorToTensor","int32"),o=Ea(t,"values","raggedTensorToTensor"),i={shape:a,values:o,defaultValue:Ea(n,"defaultValue","raggedTensorToTensor",o.dtype),rowPartitionTensors:r.map(((e,t)=>Ea(e,`tensors${t}`,"raggedTensorToTensor","int32")))},u={rowPartitionTypes:s};return ga.runKernel(yn,i,u)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mc=Aa({rand_:function(e,t,n){G(e);const r=g(e);let s=null;if(null==n||"float32"===n)s=new Float32Array(r);else if("int32"===n)s=new Int32Array(r);else{if("bool"!==n)throw new Error(`Unknown data type ${n}`);s=new Uint8Array(r)}for(let a=0;a<r;a++)s[a]=t();return ga.makeTensor(s,e,n)}});var fc={exports:{}};!function(e,t){function n(e){var t=this,n=function(){var e=4022871197,t=function(t){t=String(t);for(var n=0;n<t.length;n++){var r=.02519603282416938*(e+=t.charCodeAt(n));r-=e=r>>>0,e=(r*=e)>>>0,e+=4294967296*(r-=e)}return 2.3283064365386963e-10*(e>>>0)};return t}();t.next=function(){var e=2091639*t.s0+2.3283064365386963e-10*t.c;return t.s0=t.s1,t.s1=t.s2,t.s2=e-(t.c=0|e)},t.c=1,t.s0=n(" "),t.s1=n(" "),t.s2=n(" "),t.s0-=n(e),t.s0<0&&(t.s0+=1),t.s1-=n(e),t.s1<0&&(t.s1+=1),t.s2-=n(e),t.s2<0&&(t.s2+=1),n=null}function r(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function s(e,t){var s=new n(e),a=t&&t.state,o=s.next;return o.int32=function(){return 4294967296*s.next()|0},o.double=function(){return o()+11102230246251565e-32*(2097152*o()|0)},o.quick=o,a&&("object"==typeof a&&r(a,s),o.state=function(){return r(s,{})}),o}t&&t.exports?t.exports=s:this.alea=s}(0,fc);var gc=fc.exports,yc={exports:{}};!function(e,t){function n(e){var t=this,n="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),t.next()}function r(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function s(e,t){var s=new n(e),a=t&&t.state,o=function(){return(s.next()>>>0)/4294967296};return o.double=function(){do{var e=((s.next()>>>11)+(s.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=s.next,o.quick=o,a&&("object"==typeof a&&r(a,s),o.state=function(){return r(s,{})}),o}t&&t.exports?t.exports=s:this.xor128=s}(0,yc);var bc=yc.exports,wc={exports:{}};!function(e,t){function n(e){var t=this,n="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^e^e<<1)|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function r(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function s(e,t){var s=new n(e),a=t&&t.state,o=function(){return(s.next()>>>0)/4294967296};return o.double=function(){do{var e=((s.next()>>>11)+(s.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=s.next,o.quick=o,a&&("object"==typeof a&&r(a,s),o.state=function(){return r(s,{})}),o}t&&t.exports?t.exports=s:this.xorwow=s}(0,wc);var Nc=wc.exports,xc={exports:{}};!function(e,t){function n(e){var t=this;t.next=function(){var e,n,r=t.x,s=t.i;return e=r[s],n=(e^=e>>>7)^e<<24,n^=(e=r[s+1&7])^e>>>10,n^=(e=r[s+3&7])^e>>>3,n^=(e=r[s+4&7])^e<<7,e=r[s+7&7],n^=(e^=e<<13)^e<<9,r[s]=n,t.i=s+1&7,n},function(e,t){var n,r=[];if(t===(0|t))r[0]=t;else for(t=""+t,n=0;n<t.length;++n)r[7&n]=r[7&n]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next()}(t,e)}function r(e,t){return t.x=e.x.slice(),t.i=e.i,t}function s(e,t){null==e&&(e=+new Date);var s=new n(e),a=t&&t.state,o=function(){return(s.next()>>>0)/4294967296};return o.double=function(){do{var e=((s.next()>>>11)+(s.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=s.next,o.quick=o,a&&(a.x&&r(a,s),o.state=function(){return r(s,{})}),o}t&&t.exports?t.exports=s:this.xorshift7=s}(0,xc);var vc=xc.exports,Tc={exports:{}};!function(e,t){function n(e){var t=this;t.next=function(){var e,n,r=t.w,s=t.X,a=t.i;return t.w=r=r+1640531527|0,n=s[a+34&127],e=s[a=a+1&127],n^=n<<13,e^=e<<17,n^=n>>>15,e^=e>>>12,n=s[a]=n^e,t.i=a,n+(r^r>>>16)|0},function(e,t){var n,r,s,a,o,i=[],u=128;for(t===(0|t)?(r=t,t=null):(t+="\0",r=0,u=Math.max(u,t.length)),s=0,a=-32;a<u;++a)t&&(r^=t.charCodeAt((a+32)%t.length)),0===a&&(o=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,a>=0&&(o=o+1640531527|0,s=0==(n=i[127&a]^=r+o)?s+1:0);for(s>=128&&(i[127&(t&&t.length||0)]=-1),s=127,a=512;a>0;--a)r=i[s+34&127],n=i[s=s+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,i[s]=r^n;e.w=o,e.X=i,e.i=s}(t,e)}function r(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function s(e,t){null==e&&(e=+new Date);var s=new n(e),a=t&&t.state,o=function(){return(s.next()>>>0)/4294967296};return o.double=function(){do{var e=((s.next()>>>11)+(s.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=s.next,o.quick=o,a&&(a.X&&r(a,s),o.state=function(){return r(s,{})}),o}t&&t.exports?t.exports=s:this.xor4096=s}(0,Tc);var Sc=Tc.exports,kc={exports:{}};!function(e,t){function n(e){var t=this,n="";t.next=function(){var e=t.b,n=t.c,r=t.d,s=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^s,s=s-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^s,t.a=s-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=0|e):n+=e;for(var r=0;r<n.length+20;r++)t.b^=0|n.charCodeAt(r),t.next()}function r(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function s(e,t){var s=new n(e),a=t&&t.state,o=function(){return(s.next()>>>0)/4294967296};return o.double=function(){do{var e=((s.next()>>>11)+(s.next()>>>0)/4294967296)/(1<<21)}while(0===e);return e},o.int32=s.next,o.quick=o,a&&("object"==typeof a&&r(a,s),o.state=function(){return r(s,{})}),o}t&&t.exports?t.exports=s:this.tychei=s}(0,kc);var Ec,_c=kc.exports,Ic={exports:{}};Ec=Ic,function(e,t,n){var s,a=256,o="random",i=n.pow(a,6),u=n.pow(2,52),l=2*u,c=255;function p(r,c,p){var y=[],b=f(m((c=1==c?{entropy:!0}:c||{}).entropy?[r,g(t)]:null==r?function(){try{var n;return s&&(n=s.randomBytes)?n=n(a):(n=new Uint8Array(a),(e.crypto||e.msCrypto).getRandomValues(n)),g(n)}catch(vf){var r=e.navigator,o=r&&r.plugins;return[+new Date,e,o,e.screen,g(t)]}}():r,3),y),w=new d(y),N=function(){for(var e=w.g(6),t=i,n=0;e<u;)e=(e+n)*a,t*=a,n=w.g(1);for(;e>=l;)e/=2,t/=2,n>>>=1;return(e+n)/t};return N.int32=function(){return 0|w.g(4)},N.quick=function(){return w.g(4)/4294967296},N.double=N,f(g(w.S),t),(c.pass||p||function(e,t,r,s){return s&&(s.S&&h(s,w),e.state=function(){return h(w,{})}),r?(n[o]=e,t):e})(N,b,"global"in c?c.global:this==n,c.state)}function d(e){var t,n=e.length,r=this,s=0,o=r.i=r.j=0,i=r.S=[];for(n||(e=[n++]);s<a;)i[s]=s++;for(s=0;s<a;s++)i[s]=i[o=c&o+e[s%n]+(t=i[s])],i[o]=t;(r.g=function(e){for(var t,n=0,s=r.i,o=r.j,i=r.S;e--;)t=i[s=c&s+1],n=n*a+i[c&(i[s]=i[o=c&o+t])+(i[o]=t)];return r.i=s,r.j=o,n})(a)}function h(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function m(e,t){var n,r=[],s=typeof e;if(t&&"object"==s)for(n in e)try{r.push(m(e[n],t-1))}catch(vf){}return r.length?r:"string"==s?e:e+"\0"}function f(e,t){for(var n,r=e+"",s=0;s<r.length;)t[c&s]=c&(n^=19*t[c&s])+r.charCodeAt(s++);return g(t)}function g(e){return String.fromCharCode.apply(0,e)}if(f(n.random(),t),Ec.exports){Ec.exports=p;try{s=r}catch(y){}}else n["seed"+o]=p}("undefined"!=typeof self?self:n,[],Math);var Ac=gc,Mc=bc,$c=Nc,Oc=vc,Dc=Sc,Cc=_c,Rc=Ic.exports;Rc.alea=Ac,Rc.xor128=Mc,Rc.xorwow=$c,Rc.xorshift7=Oc,Rc.xor4096=Dc,Rc.tychei=Cc;var Fc=Rc;
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Bc{constructor(e,t,n,r,s){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);const a=s||Math.random();this.random=Fc.alea(a.toString())}nextValue(){if(!isNaN(this.nextVal)){const e=this.nextVal;return this.nextVal=NaN,e}let e,t,n=!1;for(;!n;){let r,s,a;do{r=2*this.random()-1,s=2*this.random()-1,a=r*r+s*s}while(a>=1||0===a);const o=Math.sqrt(-2*Math.log(a)/a);e=this.mean+this.stdDev*r*o,t=this.mean+this.stdDev*s*o,this.truncated&&!this.isValidTruncated(e)||(n=!0)}return this.truncated&&!this.isValidTruncated(t)||(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return null==this.dtype||"float32"===this.dtype?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class zc{constructor(e,t,n,r){this.alpha=e,this.beta=1/t,this.dtype=n;const s=r||Math.random();this.randu=Fc.alea(s.toString()),this.randn=new Bc(0,1,n,!1,this.randu()),this.d=e<1?e+2/3:e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,t,n,r,s,a;for(;;){do{r=this.randn.nextValue(),a=1+this.c*r}while(a<=0);if(a*=a*a,e=r*r,t=1-.331*e*e,n=.5*e+this.d*(1-a+Math.log(a)),s=this.randu(),s<t||Math.log(s)<n)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)}convertValue(e){return"float32"===this.dtype?e:Math.round(e)}}class Lc{constructor(e=0,t=1,n,r){if(this.canReturnFloat=()=>null==this.dtype||"float32"===this.dtype,this.min=e,this.range=t-e,this.dtype=n,null==r&&(r=Math.random()),"number"==typeof r&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=Fc.alea(r)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pc=Aa({randomGamma_:function(e,t,n=1,r="float32",s){if(G(e),null==n&&(n=1),null==r&&(r="float32"),"float32"!==r&&"int32"!==r)throw new Error(`Unsupported data type ${r}`);const a=new zc(t,n,r,s),o=Xo(e,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vc=Aa({randomNormal_:function(e,t=0,n=1,r,s){if(G(e),null!=r&&"bool"===r)throw new Error(`Unsupported data type ${r}`);const a=new Bc(t,n,r,!1,s),o=Xo(e,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Uc=Aa({randomStandardNormal_:function(e,t,n){if(null!=t&&"bool"===t)throw new Error(`Unsupported data type ${t}`);return Vc(e,0,1,t,n)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jc=Aa({randomUniform_:function(e,t=0,n=1,r="float32",s){G(e);const a=Xo(e,r),o=new Lc(t,n,null,s);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}});
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wc=Aa({randomUniformInt_:function(e,t,n,r){return jc(e,t,n,"int32",r)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qc(e,t,n=1,r="float32"){if(0===n)throw new Error("Cannot have a step of zero");const s={start:e,stop:t,step:n,dtype:r};return ga.runKernel(bn,{},s)}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gc=Aa({real_:function(e){const t={input:Ea(e,"input","real")};return ga.runKernel(wn,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kc=Aa({reciprocal_:function(e){const t={x:Ea(e,"x","reciprocal")};return ga.runKernel(Nn,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hc=Aa({relu_:function(e){const t={x:Ea(e,"x","relu")};return ga.runKernel(xn,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jc=Aa({relu6_:function(e){const t={x:Ea(e,"x","relu6")};return ga.runKernel(_n,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zc=Aa({reverse_:function(e,t){const n={x:Ea(e,"x","reverse")},r={dims:t};return ga.runKernel(In,n,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yc=Aa({reverse1d_:function(e){const t=Ea(e,"x","reverse");return h(1===t.rank,(()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`)),Zc(t,0)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xc=Aa({reverse2d_:function(e,t){const n=Ea(e,"x","reverse");return h(2===n.rank,(()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`)),Zc(n,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qc=Aa({reverse3d_:function(e,t){const n=Ea(e,"x","reverse");return h(3===n.rank,(()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`)),Zc(n,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ep=Aa({reverse4d_:function(e,t){const n=Ea(e,"x","reverse");return h(4===n.rank,(()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`)),Zc(n,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tp=Aa({round_:function(e){const t={x:Ea(e,"x","round")};return ga.runKernel(An,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const np=Aa({rsqrt_:function(e){const t={x:Ea(e,"x","rsqrt","float32")};return ga.runKernel(Mn,t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rp=Aa({selu_:function(e){const t={x:Ea(e,"x","selu")};return ga.runKernel(Rn,t)}});const sp=Aa({separableConv2d_:function(e,t,n,r,s,a=[1,1],o="NHWC"){const i=Ea(e,"x","separableConv2d"),u=Ea(t,"depthwiseFilter","separableConv2d"),l=Ea(n,"pointwiseFilter","separableConv2d");let c=i,p=!1;if(3===i.rank&&(p=!0,c=Ci(i,[1,i.shape[0],i.shape[1],i.shape[2]])),"NCHW"===o)throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");h(4===c.rank,(()=>`Error in separableConv2d: input must be rank 4, but got rank ${c.rank}.`)),h(4===u.rank,(()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${u.rank}.`)),h(4===l.rank,(()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${u.rank}.`)),h(1===l.shape[0],(()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`)),h(1===l.shape[1],(()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`));const d=u.shape[2],m=u.shape[3];h(l.shape[2]===d*m,(()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*m}, but got ${l.shape[2]}.`));const f=bu(c,u,r,s,o,a),g=au(f,l,1,"valid",o);return p?Ci(g,[g.shape[1],g.shape[2],g.shape[3]]):g}});
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ap=function(t,n){return e(this,null,(function*(){const e=Ea(t,"x","setdiff1d"),r=Ea(n,"y","setdiff1d");h(e.dtype===r.dtype,(()=>`x and y should have the same dtype, but got x (${e.dtype}) and y (${r.dtype}).`)),h(1===e.rank,(()=>`x should be 1D tensor, but got x (${e.shape}).`)),h(1===r.rank,(()=>`y should be 1D tensor, but got y (${r.shape}).`));const s=yield e.data(),a=yield r.data(),o=new Set(a);let i=0;for(let t=0;t<s.length;t++)o.has(s[t])||i++;const u=new Ls([i],e.dtype),l=new Ls([i],"int32");for(let t=0,n=0;t<s.length;t++)o.has(s[t])||(u.values[n]=s[t],l.values[n]=t,n++);return[u.toTensor(),l.toTensor()]}))};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const op=Aa({sign_:function(e){const t={x:Ea(e,"x","sign")};return ga.runKernel(Ln,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ip=Aa({sin_:function(e){const t={x:Ea(e,"x","sin","float32")};return ga.runKernel("Sin",t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const up=Aa({sinh_:function(e){const t={x:Ea(e,"x","sinh")};return ga.runKernel(zn,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lp=Aa({slice1d_:function(e,t,n){const r=Ea(e,"x","slice1d");return h(1===r.rank,(()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`)),Pi(r,[t],[n])}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cp=Aa({slice2d_:function(e,t,n){const r=Ea(e,"x","slice2d");return h(2===r.rank,(()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`)),Pi(r,t,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pp=Aa({slice3d_:function(e,t,n){const r=Ea(e,"x","slice3d");return h(3===r.rank,(()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`)),Pi(r,t,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dp=Aa({slice4d_:function(e,t,n){const r=Ea(e,"x","slice4d");return h(4===r.rank,(()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`)),Pi(r,t,n)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hp=Aa({softmax_:function(e,t=-1){const n=Ea(e,"logits","softmax","float32");if(-1===t&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);const r={logits:n},s={dim:t};return ga.runKernel(Gn,r,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mp=Aa({fft_:function(e){h("complex64"===e.dtype,(()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`));const t={input:e};return ga.runKernel("FFT",t)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fp=Aa({ifft_:function(e){h("complex64"===e.dtype,(()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`));const t={input:e};return ga.runKernel(xt,t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gp=Aa({irfft_:function(e){const t=e.shape[e.shape.length-1],n=e.size/t;let r;if(t<=2){const s=Ci(e,[n,t]);r=fp(s)}else{const s=[n,2*(t-1)],a=Ci(Gc(e),[n,t]),o=Ci(il(e),[n,t]),i=Zc(Pi(a,[0,1],[n,t-2]),1),u=ai(Zc(Pi(o,[0,1],[n,t-2]),1),qu(-1)),l=Bi([a,i],1),c=Bi([o,u],1),p=Ci(Ma(l,c),[s[0],s[1]]);r=fp(p)}if(r=Gc(r),3===e.rank&&0!==e.shape[0]){const t=r,n=e.shape[0];r=Ci(r,[n,r.shape[0]/n,r.shape[1]]),t.dispose()}return r}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yp=Aa({split_:function(e,t,n=0){const r={x:Ea(e,"x","split")},s={numOrSizeSplits:t,axis:n};return ga.runKernel(qn,r,s)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bp=Aa({rfft_:function(e,t){h("float32"===e.dtype,(()=>`The dtype for rfft() must be real value but got ${e.dtype}`));let n=e.shape[e.shape.length-1];const r=e.size/n;let s;if(null!=t&&t<n){const r=e.shape.map((e=>0)),a=e.shape.map((e=>e));a[e.shape.length-1]=t,s=Pi(e,r,a),n=t}else if(null!=t&&t>n){const r=e.shape.map((e=>e));r[e.shape.length-1]=t-n,s=Bi([e,jl(r)],e.shape.length-1),n=t}else s=e;const a=_u(s),o=Ci(Ma(s,a),[r,n]),i=mp(o),u=Math.floor(n/2)+1,l=Gc(i),c=il(i),p=yp(l,[u,n-u],l.shape.length-1),d=yp(c,[u,n-u],c.shape.length-1),m=s.shape.slice();return m[s.shape.length-1]=u,Ci(Ma(p[0],d[0]),m)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wp=Aa({squaredDifference_:function(e,t){let n=Ea(e,"a","squaredDifference"),r=Ea(t,"b","squaredDifference");[n,r]=oa(n,r),Tu(n.shape,r.shape);const s={a:n,b:r};return ga.runKernel(Xn,s,{})}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Np=Aa({squeeze_:function(e,t){const n=Ea(e,"x","squeeze","string_or_numeric");return Ci(n,k(n.shape,t).newShape)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xp=Aa({stack_:function(e,t=0){const n=_a(e,"tensors","stack","string_or_numeric");h(n.length>=1,(()=>"Pass at least one tensor to tf.stack")),n.length>0&&h(t<=n[0].rank,(()=>"Axis must be <= rank of the tensor"));const r=n,s={axis:t};return ga.runKernel(ln,r,s)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vp=Aa({step_:function(e,t=0){const n={x:Ea(e,"x","step")},r={alpha:t};return ga.runKernel(yr,n,r)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tp=Aa({stridedSlice_:function(e,t,n,r,s=0,a=0,o=0,i=0,u=0){const l={x:Ea(e,"x","stridedSlice","string_or_numeric")},c={begin:t,end:n,strides:r,beginMask:s,endMask:a,ellipsisMask:o,newAxisMask:i,shrinkAxisMask:u};return ga.runKernel(tr,l,c)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sp=Aa({tan_:function(e){const t={x:Ea(e,"x","tan","float32")};return ga.runKernel("Tan",t)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kp(e,t){f(e);const n=Ta(e,t);if(1!==n.length)throw new Error("tensor1d() requires values to be a flat/TypedArray");return $a(e,null,n,t)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ep(e,t,n){if(f(e),null!=t&&2!==t.length)throw new Error("tensor2d() requires shape to have two numbers");const r=Ta(e,n);if(2!==r.length&&1!==r.length)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return $a(e,t,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _p(e,t,n){if(f(e),null!=t&&3!==t.length)throw new Error("tensor3d() requires shape to have three numbers");const r=Ta(e,n);if(3!==r.length&&1!==r.length)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return $a(e,t,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ip(e,t,n){if(f(e),null!=t&&4!==t.length)throw new Error("tensor4d() requires shape to have four numbers");const r=Ta(e,n);if(4!==r.length&&1!==r.length)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return $a(e,t,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ap(e,t,n){if(f(e),null!=t&&5!==t.length)throw new Error("tensor5d() requires shape to have five numbers");const r=Ta(e,n);if(5!==r.length&&1!==r.length)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return $a(e,t,r,n)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mp(e,t,n){if(f(e),null!=t&&6!==t.length)throw new Error("tensor6d() requires shape to have six numbers");const r=Ta(e,n);if(6!==r.length&&1!==r.length)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===r.length&&null==t)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return $a(e,t=t||r,r,n)}function $p(e,t,n){const r=t.rank>1?t.shape[t.rank-1]:1,s=t.rank>1?t.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${s}.`;if(n.rank<s)throw new Error(a+` update.rank < ${s}. `);if(e.length<r+(n.rank-s))throw new Error(a+` Output shape length < ${r+(n.rank-s)}`);if(n.rank!==s+e.length-r)throw new Error(a+" update.rank != "+(s+e.length-r));for(let o=0;o<s;++o)if(n.shape[o]!==t.shape[o])throw new Error(a+` updates.shape[${o}] (${n.shape[o]}) != indices.shape[${o}] (${t.shape[o]}).`);for(let o=0;o<n.rank-s;++o)if(n.shape[o+s]!==e[o+r])throw new Error(a+` updates.shape[${o+s}] (${n.shape[o+s]}) != shape[${o+s}] (${e[o+s]})`)}function Op(e,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if("int32"!==t.dtype)throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(0===n.length){if(0===t.size)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(0===e.size)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}$p(n,t,e)}function Dp(e,t,n){const r=t.shape.length,s=r>1?t.shape[r-1]:1,a=n.length;let o=1;for(let u=s;u<a;++u)o*=n[u];const i=s<1?1:s;return{sliceRank:s,numUpdates:g(t.shape)/i,sliceSize:o,strides:[...L(n.slice(0,s)),1],outputSize:g(n)}}const Cp=Object.freeze(Object.defineProperty({__proto__:null,calculateShapes:Dp,validateInput:Op,validateUpdateShape:$p},Symbol.toStringTag,{value:"Module"}));
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rp=Aa({tensorScatterUpdate_:function(e,t,n){const r=Ea(e,"tensor","tensorScatterupdate"),s=Ea(t,"indices","tensorScatterupdate","int32"),a=Ea(n,"updates","tensorScatterupdate");if(Op(a,s,r.shape),r.dtype!==a.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${r.dtype} and ${a.dtype}.`);const o={tensor:r,indices:s,updates:a};return ga.runKernel(On,o,{})}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fp=Aa({topk_:function(e,t=1,n=!0){const r=Ea(e,"x","topk");if(0===r.rank)throw new Error("topk() expects the input to be of rank 1 or higher");const s=r.shape[r.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>s)throw new Error(`'k' passed to topk() must be <= the last dimension (${s}) but got ${t}`);const a={x:r},o={k:t,sorted:n},[i,u]=ga.runKernel(lr,a,o);return{values:i,indices:u}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bp=Aa({truncatedNormal_:function(e,t=0,n=1,r,s){if(G(e),null!=r&&"bool"===r)throw new Error("Unsupported data type $ { dtype }");const a=new Bc(t,n,r,!0,s),o=Xo(e,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zp=Aa({unique_:function(e,t=0){const n=Ea(e,"x","unique","string_or_numeric");h(n.rank>0,(()=>"The input tensor must be at least 1D"));const r={x:n},s={axis:t},[a,o]=ga.runKernel(dr,r,s);return{values:a,indices:o}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lp=Aa({unsortedSegmentSum_:function(e,t,n){const r=Ea(e,"x","unsortedSegmentSum"),s=Ea(t,"segmentIds","unsortedSegmentSum","int32");h(w(n),(()=>"numSegments must be of dtype int"));const a={x:r,segmentIds:s},o={numSegments:n};return ga.runKernel(mr,a,o)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pp=Aa({unstack_:function(e,t=0){const n=Ea(e,"x","unstack","string_or_numeric");h(t>=-n.shape.length&&t<n.shape.length,(()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`));const r={value:n},s={axis:t};return ga.runKernel(hr,r,s)}});
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vp(e,t){return Fl(e,t,"right")}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Up(e,t=!0,n,r){return ga.makeVariable(e,t,n,r)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jp(e,t){const n=[];for(let a=0;a<t.length;a++)t[a]&&n.push(a);const r=Xo(e,"int32"),s=Xo([n.length,e.length],"int32");for(let a=0;a<n.length;a++){const t=r.indexToLoc(n[a]),o=a*e.length;s.values.set(t,o)}return s.toTensor()}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wp=function(t){return e(this,null,(function*(){const e=Ea(t,"condition","whereAsync","bool"),n=yield e.data(),r=jp(e.shape,n);return t!==e&&e.dispose(),r}))};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qp=function(t,n,r){return e(this,null,(function*(){const e=Ea(t,"tensor","boolMask"),s=Ea(n,"mask","boolMask","bool"),a=null==r?0:r,o=s.rank,i=e.shape;h(o>0,(()=>"mask cannot be scalar")),m(i.slice(a,a+o),s.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let t=a;t<a+o;t++)u*=i[t];const l=i.slice(0,a).concat([u],i.slice(a+o)),c=Ci(e,l),p=Ci(s,[-1]),d=yield Wp(p),f=Np(d,[1]),g=sl(c,f,a);return t!==e&&e.dispose(),n!==s&&s.dispose(),f.dispose(),c.dispose(),p.dispose(),d.dispose(),g}))};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gp=Aa({transpose_:function(e,t,n){const r=Ea(e,"x","transpose");if(null==t&&(t=r.shape.map(((e,t)=>t)).reverse()),h(r.rank===t.length,(()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`)),t.forEach((e=>{h(e>=0&&e<r.rank,(()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`))})),r.rank<=1)return r.clone();const s={x:r},a={perm:t};return"complex64"===r.dtype?ja((()=>{let e=Gc(r),t=il(r);return e=ga.runKernel(pr,{x:e},a),t=ga.runKernel(pr,{x:t},a),n&&(t=kl(t)),Ma(e,t)})):ga.runKernel(pr,s,a)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kp=Aa({movingAverage_:function(e,t,n,r,s=!0){const a=Ea(e,"v","movingAverage"),o=Ea(t,"x","movingAverage"),i=Ea(n,"decay","movingAverage");ia(a,o),h(b(a.shape,o.shape),(()=>"Shape mismatch in v and x"));const u=qu(1),l=Il(u,i);let c=ai(Il(o,a),l);if(s){h(null!=r,(()=>"When using zeroDebias: true, step is required."));const e=Ea(r,"step","movingAverage");c=si(c,Il(u,Wu(i,e)))}return ni(a,c)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hp=Aa({scatterND_:function(e,t,n){G(n);const r=Ea(e,"indices","scatterND","int32"),s=Ea(t,"updates","scatterND");Op(s,r,n);const a={indices:r,updates:s},o={shape:n};return ga.runKernel($n,a,o)}});const Jp=Aa({sparseToDense_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r=0){G(n);const s=Ea(e,"sparseIndices","sparseToDense","int32"),a=Ea(t,"sparseValues","sparseToDense","string_or_numeric"),o=Ea(r,"defaultValue","sparseToDense",a.dtype);!function(e,t,n,r){if("int32"!==e.dtype)throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);const s=e.rank>0?e.shape[0]:1,a=e.rank>1?e.shape[1]:1;if(n.length!==a)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${a}.`);const o=t.size;if(0!==t.rank&&(1!==t.rank||o!==s))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${s}]`);if(t.dtype!==r.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(s,a,n,o);const i={sparseIndices:s,sparseValues:a,defaultValue:o},u={outputShape:n};return ga.runKernel(Yn,i,u)}});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zp=Aa({gatherND_:function(e,t){const n=Ea(t,"indices","gatherND","int32"),r={params:Ea(e,"x","gatherND","string_or_numeric"),indices:n};return ga.runKernel(yt,r)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yp=Aa({dropout_:
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r){const s=Ea(e,"x","dropout");if(h("float32"===s.dtype,(()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${s.dtype} tensor instead.`)),h(t>=0&&t<1,(()=>`rate must be a float in the range [0, 1), but got ${t}.`)),0===t)return e instanceof Us?s.clone():s;const a=function(e,t){if(null==t)return e.shape.slice();if(b(e.shape,t))return t;if(e.shape.length===t.length){const n=[];for(let r=0;r<e.shape.length;r++)null==t[r]&&null!=e.shape[r]?n.push(e.shape[r]):n.push(t[r]);return n}return t}(s,n),o=1-t,i=si(rl(ni(jc(a,0,1,"float32",r),o)),o);return ai(s,i)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xp(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function Qp(e,t,n){const r=1-e%2,s=new Float32Array(e);for(let a=0;a<e;++a){const o=2*Math.PI*a/(e+r-1);s[a]=t-n*Math.cos(o)}return kp(s,"float32")}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ed=function(t,n,r=1){return e(this,null,(function*(){const e=Ea(t,"predictions","inTopK"),s=Ea(n,"targets","inTopK");h(e.rank>1,(()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${e.rank}`)),h(e.rank-1===s.rank,(()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${e.rank} and targets rank ${s.rank}`)),m(e.shape.slice(0,e.shape.length-1),s.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const a=e.shape[e.shape.length-1];h(r>0&&r<=a,(()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${a}), but got ${r}`));const o=yield e.data(),i=yield s.data(),[u,l]=[o.length/a,a],c=E("bool",u);for(let t=0;t<u;t++){const e=t*l,n=o.subarray(e,e+l),s=[];for(let t=0;t<n.length;t++)s.push({value:n[t],index:t});s.sort(((e,t)=>t.value-e.value)),c[t]=0;for(let a=0;a<r;a++)if(s[a].index===i[t]){c[t]=1;break}}return t!==e&&e.dispose(),n!==s&&s.dispose(),Oa(c,s.shape,"bool")}))};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const td=Aa({conv2DBackpropFilter_:function(e,t,n,r,s,a="NHWC",o){let i=e;3===e.rank&&(i=Ci(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let u=t;3===u.rank&&(u=Ci(t,[1,t.shape[0],t.shape[1],t.shape[2]])),h(4===i.rank,(()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`)),h(4===u.rank,(()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${u.shape}.`)),h(4===n.length,(()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`));const l="NHWC"===a?i.shape[3]:i.shape[1],c="NHWC"===a?u.shape[3]:u.shape[1];h(l===n[2],(()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${n[2]}.`)),h(c===n[3],(()=>`Error in conv2dDerFilter: depth of dy (${c}) must match output depth for filter (${n[3]}).`)),Di("conv2dDerFilter",s,o);const p={x:i,dy:u},d={strides:r,pad:s,dataFormat:a,dimRoundingMode:o,filterShape:n};return ga.runKernel(Re,p,d)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nd(e,t,n){if(null==n||"linear"===n)return e;if("relu"===n)return ai(e,vp(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function rd(e,t){let n=t;const r=vu(e.shape,t.shape);return r.length>0&&(n=Hu(n,r)),Ci(n,e.shape)}function sd(e,t,n,r){if("linear"===t)return e;if("relu"===t)return Hc(e);if("elu"===t)return $u(e);if("relu6"===t)return Jc(e);if("prelu"===t)return lc(e,n);if("leakyrelu"===t)return pl(e,r);if("sigmoid"===t)return Li(e);throw new Error(`Unknown fused activation ${t}.`)}const ad=(e,t)=>!(e>0)||"linear"===t;
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const od=Aa({fusedConv2d_:function({x:e,filter:t,strides:n,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:i,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:c}){if(u=u||"linear",!1===ad(ga.state.gradientDepth,u)){h("NHWC"===s,(()=>`Error in fused conv2d: got dataFormat of ${s} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`));let p=au(e,t,n,r,s,a,o);return null!=i&&(p=ni(p,i)),sd(p,u,l,c)}const p=Ea(e,"x","conv2d","float32"),d=Ea(t,"filter","conv2d","float32");let m=p,f=!1;3===p.rank&&(f=!0,m=Ci(p,[1,p.shape[0],p.shape[1],p.shape[2]])),h(4===m.rank,(()=>`Error in fused conv2d: input must be rank 4, but got rank ${m.rank}.`)),h(4===d.rank,(()=>`Error in fused conv2d: filter must be rank 4, but got rank ${d.rank}.`)),Di("fused conv2d",r,o);const g="NHWC"===s?m.shape[3]:m.shape[1];h(d.shape[2]===g,(()=>`Error in conv2d: depth of input (${g}) must match input depth for filter ${d.shape[2]}.`)),h(Mi(n,a),(()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`));const y=vi(m.shape,d.shape,n,a,r,o);let b,w;if(null!=i&&(b=Ea(i,"bias","fused conv2d"),[b]=oa(b,p),"NHWC"===s?Tu(y.outShape,b.shape):(h(b.shape.length<=1,(()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${b.shape.length}.`)),h(0===b.shape.length||b.shape[0]===y.outChannels||1===b.shape[0],(()=>`Error in fused conv2d: bias shape (${b.shape}) is not compatible with the number of output channels (${y.outChannels})`)))),null!=l){const e=l.shape;if(h(e.length<=1||3===e.length,(()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${e.length}.`)),1===e.length)h(1===e[0]||e[0]===y.outChannels,(()=>`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the number of output channels (${y.outChannels}).`));else if(3===e.length)try{Tu(e,y.outShape)}catch(vf){const n=`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the output shape of the conv2d (${y.outShape}).`;throw Error(n)}w=Ea(l,"prelu weights","fused conv2d")}const N=(e,t)=>{h("NHWC"===s,(()=>`Error in gradient of fused conv2D: got dataFormat of ${s} but only NHWC is currently supported.`));const[o,i,l,c]=t,p=nd(e,l,u);h(Ai(a),(()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`));const d=[iu(i.shape,p,o,n,r),td(i,p,o.shape,n,r)];if(null!=c){const e=rd(c,p);d.push(e)}return d},x={x:m,filter:d,bias:b,preluActivationWeights:w},v={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o,activation:u,leakyreluAlpha:c};if(null==i){return Tl(((e,t,n)=>{let r=ga.runKernel(xr,x,v);return n([t,e,r]),f&&(r=Ci(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:N}}))(m,d)}return Tl(((e,t,n,r)=>{let s=ga.runKernel(xr,x,v);return r([t,e,s,n]),f&&(s=Ci(s,[s.shape[1],s.shape[2],s.shape[3]])),{value:s,gradFunc:N}}))(m,d,b)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const id=Aa({depthwiseConv2dNativeBackpropFilter_:function(e,t,n,r,s,a=[1,1],o){let i=e;3===e.rank&&(i=Ci(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let u=t;3===u.rank&&(u=Ci(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={x:i,dy:u},c={strides:r,pad:s,dimRoundingMode:o,dilations:a,filterShape:n};return ga.runKernel(He,l,c)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ud=Aa({depthwiseConv2dNativeBackpropInput_:function(e,t,n,r,s,a=[1,1],o){let i=t,u=!1;3===t.rank&&(u=!0,i=Ci(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const l={dy:i,filter:n},c={strides:r,pad:s,dimRoundingMode:o,dilations:a,inputShape:e},p=ga.runKernel(Je,l,c);return u?Ci(p,[p.shape[1],p.shape[2],p.shape[3]]):p}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ld=Aa({fusedDepthwiseConv2d_:function({x:e,filter:t,strides:n,pad:r,dataFormat:s="NHWC",dilations:a=[1,1],dimRoundingMode:o,bias:i,activation:u="linear",preluActivationWeights:l,leakyreluAlpha:c}){if(!1===ad(ga.state.gradientDepth,u)){let p=bu(e,t,n,r,s,a,o);return null!=i&&(p=ni(p,i)),sd(p,u,l,c)}const p=Ea(e,"x","depthwiseConv2d","float32"),d=Ea(t,"filter","depthwiseConv2d","float32");let m=p,f=!1;3===p.rank&&(f=!0,m=Ci(p,[1,p.shape[0],p.shape[1],p.shape[2]])),h(4===m.rank,(()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${m.rank}.`)),h(4===d.rank,(()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${d.rank}.`)),h(m.shape[3]===d.shape[2],(()=>`Error in fused depthwiseConv2d: number of input channels (${m.shape[3]}) must match the inChannels dimension in filter ${d.shape[2]}.`)),null==a&&(a=[1,1]),h(Mi(n,a),(()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`)),Di("fused depthwiseConv2d",r,o);const g=vi(m.shape,d.shape,n,a,r,o,!0);let y,b;null!=i&&(y=Ea(i,"bias","fused conv2d"),[y]=oa(y,p),Tu(g.outShape,y.shape)),null!=l&&(b=Ea(l,"prelu weights","fused depthwiseConv2d"));const w=(e,t)=>{h(Ai(a),(()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`));const[s,i,l,c]=t,p=nd(e,l,u),d=ud(i.shape,p,s,n,r,a,o),m=id(i,p,s.shape,n,r,a,o);if(null!=c){return[d,m,rd(y,p)]}return[d,m]},N={x:m,filter:d,bias:y,preluActivationWeights:b},x={strides:n,pad:r,dataFormat:s,dilations:a,dimRoundingMode:o,activation:u,leakyreluAlpha:c};if(null==i){return Tl(((e,t,n)=>{let r=ga.runKernel(vr,N,x);return n([t,e,r]),f&&(r=Ci(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:w}}))(m,d)}return Tl(((e,t,n,r)=>{let s=ga.runKernel(vr,N,x);return r([t,e,s,n]),f&&(s=Ci(s,[s.shape[1],s.shape[2],s.shape[3]])),{value:s,gradFunc:w}}))(m,d,y)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cd=Aa({fusedMatMul_:function({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:s,activation:a="linear",preluActivationWeights:o,leakyreluAlpha:i=.2}){if(!1===ad(ga.state.gradientDepth,a)){let u=zi(e,t,n,r);return null!=s&&(u=ni(u,s)),sd(u,a,o,i)}let u=Ea(e,"a","fused matMul"),l=Ea(t,"b","fused matMul");[u,l]=oa(u,l);const c=n?u.shape[u.rank-2]:u.shape[u.rank-1],p=r?l.shape[l.rank-1]:l.shape[l.rank-2],d=n?u.shape[u.rank-1]:u.shape[u.rank-2],m=r?l.shape[l.rank-2]:l.shape[l.rank-1],f=u.shape.slice(0,-2),y=l.shape.slice(0,-2),b=g(f),w=g(y);h(c===p,(()=>`Error in fused matMul: inner shapes (${c}) and (${p}) of Tensors with shapes ${u.shape} and ${l.shape} and transposeA=${n} and transposeB=${r} must match.`));const N=Tu(u.shape.slice(0,-2),l.shape.slice(0,-2)).concat([d,m]),x=Ci(u,n?[b,c,d]:[b,d,c]),v=Ci(l,r?[w,m,p]:[w,p,m]);let T,S;null!=s&&(T=Ea(s,"bias","fused matMul"),[T]=oa(T,u),Tu(N,T.shape)),null!=o&&(S=Ea(o,"prelu weights","fused matMul"));const k=(e,t)=>{const[o,i,u,l]=t,c=nd(Ci(e,u.shape),u,a);let p,d;if(n||r?!n&&r?(p=zi(c,i,!1,!1),d=zi(c,o,!0,!1)):n&&!r?(p=zi(i,c,!1,!0),d=zi(o,c,!1,!1)):(p=zi(i,c,!0,!0),d=zi(c,o,!0,!0)):(p=zi(c,i,!1,!0),d=zi(o,c,!0,!1)),null!=s){return[p,d,rd(l,c)]}return[p,d]},E={a:x,b:v,bias:T,preluActivationWeights:S},_={transposeA:n,transposeB:r,activation:a,leakyreluAlpha:i};if(null==s){return Tl(((e,t,n)=>{const r=ga.runKernel(Nr,E,_);return n([e,t,r]),{value:Ci(r,N),gradFunc:k}}))(x,v)}return Tl(((e,t,n,r)=>{const s=ga.runKernel(Nr,E,_);return r([e,t,s,n]),{value:Ci(s,N),gradFunc:k}}))(x,v,T)}}),pd=Object.freeze(Object.defineProperty({__proto__:null,conv2d:od,depthwiseConv2d:ld,matMul:cd},Symbol.toStringTag,{value:"Module"}));
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dd=Aa({hammingWindow_:
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e){return Qp(e,.54,.46)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hd=Aa({hannWindow_:function(e){return Qp(e,.5,.5)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const md=Aa({frame_:function(e,t,n,r=!1,s=0){let a=0;const o=[];for(;a+t<=e.size;)o.push(Pi(e,a,t)),a+=n;if(r)for(;a<e.size;){const r=a+t-e.size,i=Bi([Pi(e,a,t-r),Qi([r],s)]);o.push(i),a+=n}return 0===o.length?Ep([],[0,t]):Ci(Bi(o),[o.length,t])}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fd=Aa({stft_:function(e,t,n,r,s=hd){null==r&&(r=Xp(t));const a=md(e,t,n),o=ai(a,s(t));return bp(o,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gd=Aa({cropAndResize_:function(e,t,n,r,s="bilinear",a=0){const o=Ea(e,"image","cropAndResize"),i=Ea(t,"boxes","cropAndResize","float32"),u=Ea(n,"boxInd","cropAndResize","int32"),l=i.shape[0];h(4===o.rank,(()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`)),h(2===i.rank&&4===i.shape[1],(()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${i.shape}.`)),h(1===u.rank&&u.shape[0]===l,(()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${i.shape}.`)),h(2===r.length,(()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`)),h(r[0]>=1&&r[1]>=1,(()=>`cropSize must be atleast [1,1], but was ${r}`)),h("bilinear"===s||"nearest"===s,(()=>`method must be bilinear or nearest, but was ${s}`));const c={image:o,boxes:i,boxInd:u},p={method:s,extrapolationValue:a,cropSize:r};return ga.runKernel(We,c,p)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yd=Aa({flipLeftRight_:function(e){const t=Ea(e,"image","flipLeftRight","float32");h(4===t.rank,(()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`));const n={image:t};return ga.runKernel(dt,n,{})}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bd=Aa({grayscaleToRGB_:function(e){const t=Ea(e,"image","grayscaleToRGB"),n=t.rank-1,r=t.shape[n];h(t.rank>=2,(()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`)),h(1===r,(()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`));const s=new Array(t.rank);return s.fill(1,0,n),s[n]=3,tl(t,s)}});
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wd=Aa({rgbToGrayscale_:function(e){const t=Ea(e,"image","RGBToGrayscale"),n=t.rank-1,r=t.shape[n];h(t.rank>=2,(()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`)),h(3===r,(()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${r}.`));const s=t.dtype,a=Qo(t,"float32"),o=kp([.2989,.587,.114]);let i;switch(t.rank){case 2:i=Mu("ij,j->i",a,o);break;case 3:i=Mu("ijk,k->ij",a,o);break;case 4:i=Mu("ijkl,l->ijk",a,o);break;case 5:i=Mu("ijklm,m->ijkl",a,o);break;case 6:i=Mu("ijklmn,n->ijklm",a,o);break;default:throw new Error("Not a valid tensor rank.")}return i=Qu(i,-1),Qo(i,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nd=Aa({rotateWithOffset_:function(e,t,n=0,r=.5){const s=Ea(e,"image","rotateWithOffset","float32");h(4===s.rank,(()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${s.rank}.`));const a={image:s},o={radians:t,fillValue:n,center:r};return ga.runKernel(wr,a,o)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xd(e,t,n,r,s,a){null==r&&(r=.5),null==s&&(s=Number.NEGATIVE_INFINITY),null==a&&(a=0);const o=e.shape[0];return n=Math.min(n,o),h(0<=r&&r<=1,(()=>`iouThreshold must be in [0, 1], but was '${r}'`)),h(2===e.rank,(()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`)),h(4===e.shape[1],(()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`)),h(1===t.rank,(()=>"scores must be a 1D tensor")),h(t.shape[0]===o,(()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`)),h(0<=a&&a<=1,(()=>`softNmsSigma must be in [0, 1], but was '${a}'`)),{maxOutputSize:n,iouThreshold:r,scoreThreshold:s,softNmsSigma:a}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vd=Aa({nonMaxSuppression_:function(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY){const a=Ea(e,"boxes","nonMaxSuppression","float32"),o=Ea(t,"scores","nonMaxSuppression","float32"),i=xd(a,o,n,r,s),u={maxOutputSize:n=i.maxOutputSize,iouThreshold:r=i.iouThreshold,scoreThreshold:s=i.scoreThreshold};return ga.runKernel(rn,{boxes:a,scores:o},u)}});
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Td(e,t,n){const r=function(e,t,n){return function(e,t,n){let r=0,s=e.length,a=0,o=!1;for(;r<s;){a=r+(s-r>>>1);const i=n(t,e[a]);i>0?r=a+1:(s=a,o=!i)}return o?r:-r-1}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */(e,t,n||Sd)}(e,t,n),s=r<0?-(r+1):r;e.splice(s,0,t)}function Sd(e,t){return e>t?1:e<t?-1:0}function kd(e,t,n,r,s){return Id(e,t,n,r,s,0)}function Ed(e,t,n,r,s,a){return Id(e,t,n,r,s,0,!1,a,!0)}function _d(e,t,n,r,s,a){return Id(e,t,n,r,s,a,!0)}function Id(e,t,n,r,s,a,o=!1,i=!1,u=!1){const l=[];for(let g=0;g<t.length;g++)t[g]>s&&l.push({score:t[g],boxIndex:g,suppressBeginIndex:0});l.sort($d);const c=a>0?-.5/a:0,p=[],d=[];for(;p.length<n&&l.length>0;){const t=l.pop(),{score:n,boxIndex:a,suppressBeginIndex:o}=t;if(n<s)break;let i=!1;for(let u=p.length-1;u>=o;--u){const n=Ad(e,a,p[u]);if(n>=r){i=!0;break}if(t.score=t.score*Md(r,c,n),t.score<=s)break}t.suppressBeginIndex=p.length,i||(t.score===n?(p.push(a),d.push(t.score)):t.score>s&&Td(l,t,$d))}const h=p.length,m=n-h;i&&m>0&&(p.push(...new Array(m).fill(0)),d.push(...new Array(m).fill(0)));const f={selectedIndices:p};return o&&(f.selectedScores=d),u&&(f.validOutputs=h),f}function Ad(e,t,n){const r=e.subarray(4*t,4*t+4),s=e.subarray(4*n,4*n+4),a=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),i=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),l=Math.min(s[0],s[2]),c=Math.min(s[1],s[3]),p=Math.max(s[0],s[2]),d=Math.max(s[1],s[3]),h=(i-a)*(u-o),m=(p-l)*(d-c);if(h<=0||m<=0)return 0;const f=Math.max(a,l),g=Math.max(o,c),y=Math.min(i,p),b=Math.min(u,d),w=Math.max(y-f,0)*Math.max(b-g,0);return w/(h+m-w)}function Md(e,t,n){const r=Math.exp(t*n*n);return n<=e?r:0}function $d(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Od=function(t,n,r){return e(this,arguments,(function*(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY){const a=Ea(e,"boxes","nonMaxSuppressionAsync"),o=Ea(t,"scores","nonMaxSuppressionAsync"),i=xd(a,o,n,r,s);n=i.maxOutputSize,r=i.iouThreshold,s=i.scoreThreshold;const u=yield Promise.all([a.data(),o.data()]),l=u[0],c=u[1],{selectedIndices:p}=kd(l,c,n,r,s);return a!==e&&a.dispose(),o!==t&&o.dispose(),kp(p,"int32")}))};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dd=Aa({nonMaxSuppressionWithScore_:function(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const o=Ea(e,"boxes","nonMaxSuppression"),i=Ea(t,"scores","nonMaxSuppression"),u=xd(o,i,n,r,s,a),l={boxes:o,scores:i},c={maxOutputSize:n=u.maxOutputSize,iouThreshold:r=u.iouThreshold,scoreThreshold:s=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},p=ga.runKernel(an,l,c);return{selectedIndices:p[0],selectedScores:p[1]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cd=function(t,n,r){return e(this,arguments,(function*(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,a=0){const o=Ea(e,"boxes","nonMaxSuppressionAsync"),i=Ea(t,"scores","nonMaxSuppressionAsync"),u=xd(o,i,n,r,s,a);n=u.maxOutputSize,r=u.iouThreshold,s=u.scoreThreshold,a=u.softNmsSigma;const l=yield Promise.all([o.data(),i.data()]),c=l[0],p=l[1],{selectedIndices:d,selectedScores:h}=_d(c,p,n,r,s,a);return o!==e&&o.dispose(),i!==t&&i.dispose(),{selectedIndices:kp(d,"int32"),selectedScores:kp(h)}}))};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rd=Aa({nonMaxSuppressionPadded_:function(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const o=Ea(e,"boxes","nonMaxSuppression"),i=Ea(t,"scores","nonMaxSuppression"),u=xd(o,i,n,r,s,null),l={boxes:o,scores:i},c={maxOutputSize:u.maxOutputSize,iouThreshold:u.iouThreshold,scoreThreshold:u.scoreThreshold,padToMaxOutputSize:a},p=ga.runKernel(sn,l,c);return{selectedIndices:p[0],validOutputs:p[1]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fd=function(t,n,r){return e(this,arguments,(function*(e,t,n,r=.5,s=Number.NEGATIVE_INFINITY,a=!1){const o=Ea(e,"boxes","nonMaxSuppressionAsync"),i=Ea(t,"scores","nonMaxSuppressionAsync"),u=xd(o,i,n,r,s,null),l=u.maxOutputSize,c=u.iouThreshold,p=u.scoreThreshold,[d,h]=yield Promise.all([o.data(),i.data()]),{selectedIndices:m,validOutputs:f}=Ed(d,h,l,c,p,a);return o!==e&&o.dispose(),i!==t&&i.dispose(),{selectedIndices:kp(m,"int32"),validOutputs:qu(f,"int32")}}))};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bd=Aa({resizeBilinear_:function(e,t,n=!1,r=!1){const s=Ea(e,"images","resizeBilinear");h(3===s.rank||4===s.rank,(()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${s.rank}.`)),h(2===t.length,(()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`)),h(!1===r||!1===n,(()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false."));let a=s,o=!1;3===s.rank&&(o=!0,a=Ci(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:a},u={alignCorners:n,halfPixelCenters:r,size:t},l=ga.runKernel(kn,i,u);return o?Ci(l,[l.shape[1],l.shape[2],l.shape[3]]):l}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zd=Aa({resizeNearestNeighbor_:function(e,t,n=!1,r=!1){const s=Ea(e,"images","resizeNearestNeighbor");h(3===s.rank||4===s.rank,(()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${s.rank}.`)),h(2===t.length,(()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`)),h("float32"===s.dtype||"int32"===s.dtype,(()=>"`images` must have `int32` or `float32` as dtype")),h(!1===r||!1===n,(()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false."));let a=s,o=!1;3===s.rank&&(o=!0,a=Ci(s,[1,s.shape[0],s.shape[1],s.shape[2]]));const i={images:a},u={alignCorners:n,halfPixelCenters:r,size:t},l=ga.runKernel(Tn,i,u);return o?Ci(l,[l.shape[1],l.shape[2],l.shape[3]]):l}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ld=Aa({threshold_:function(e,t="binary",n=!1,r=.5){const s=Ea(e,"image","threshold"),a=s.shape[0]*s.shape[1];let o,i,u,l,c=ai(kp([r]),255);if(h(3===s.rank,(()=>`Error in threshold: image must be rank 3,but got rank ${s.rank}.`)),h(3===s.shape[2]||1===s.shape[2],(()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${s.shape[2]}.`)),h("int32"===s.dtype||"float32"===s.dtype,(()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${s.dtype}.`)),h("otsu"===t||"binary"===t,(()=>`Method must be binary or otsu, but was ${t}`)),3===s.shape[2]){[o,i,u]=yp(s,[1,1,1],-1);const e=ai(o,.2989),t=ai(i,.587),n=ai(u,.114);l=ni(ni(e,t),n)}else l=e;if("otsu"===t){c=function(e,t){let n,r,s,a,o,i,u=kp([-1]),l=kp([0]),c=kp([0]);for(let p=0;p<e.size-1;p++){n=Pi(e,0,p+1),r=Pi(e,p+1),o=si(Hu(n),t),i=si(Hu(r),t);const d=Hu(ai(n,qc(0,n.size)));s=si(d,Hu(n));const h=Qi(r.shape,n.size),m=ni(qc(0,r.size),h),f=ai(r,m);a=si(Hu(f),Hu(r));const g=Il(s,a),y=Il(s,a),b=ai(o,i);c=ai(ai(b,g),y);const w=al(c,l);l=Eu(w,c,l),u=Eu(w,kp([p]),u)}return u}(Hi(Qo(tp(l),"int32"),Oa([]),256),a)}const p=n?hl(l,c):al(l,c);return Qo(ai(p,255),"int32")}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pd=Aa({transform_:function(e,t,n="nearest",r="constant",s=0,a){const o=Ea(e,"image","transform","float32"),i=Ea(t,"transforms","transform","float32");h(4===o.rank,(()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`)),h(2===i.rank&&(i.shape[0]===o.shape[0]||1===i.shape[0])&&8===i.shape[1],(()=>"Error in transform: Input transform should be batch x 8 or 1 x 8")),h(null==a||2===a.length,(()=>`Error in transform: outputShape must be [height, width] or null, but got ${a}.`));const u={image:o,transforms:i},l={interpolation:n,fillMode:r,fillValue:s,outputShape:a};return ga.runKernel(cr,u,l)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vd=Aa({bandPart_:function(e,t,n){const r=Ea(e,"a","bandPart");h(r.rank>=2,(()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`));const s=r.shape,[a,o]=r.shape.slice(-2);let i,u;"number"==typeof t?(h(t%1==0,(()=>`bandPart(): numLower must be an integer, got ${t}.`)),h(t<=a,(()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${a}).`)),i=Ea(t<0?a:t,"numLower","bandPart")):(h("int32"===t.dtype,(()=>"bandPart(): numLower's dtype must be an int32.")),i=Eu(dl(t,0),a,Gl(t,a))),"number"==typeof n?(h(n%1==0,(()=>`bandPart(): numUpper must be an integer, got ${n}.`)),h(n<=o,(()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`)),u=Ea(n<0?o:n,"numUpper","bandPart")):(h("int32"===n.dtype,(()=>"bandPart(): numUpper's dtype must be an int32.")),u=Eu(dl(n,0),o,Gl(n,o)));const l=Ci(qc(0,a,1,"int32"),[-1,1]),c=qc(0,o,1,"int32"),p=Il(l,c),d=$l(hl(p,i),ol(p,kl(u))),m=jl([a,o],r.dtype);return Ci(xp(Pp(Ci(r,[-1,a,o])).map((e=>Eu(d,e,m)))),s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ud=Aa({gramSchmidt_:function(e){let t;if(Array.isArray(e)){t=!1,h(null!=e&&e.length>0,(()=>"Gram-Schmidt process: input must not be null, undefined, or empty"));const n=e[0].shape[0];for(let t=1;t<e.length;++t)h(e[t].shape[0]===n,(()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[t].shape[0]} vs. ${n})`))}else t=!0,e=yp(e,e.shape[0],0).map((e=>Np(e,[0])));h(e.length<=e[0].shape[0],(()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`));const n=[],r=e;for(let s=0;s<e.length;++s)n.push(ga.tidy((()=>{let e=r[s];if(s>0)for(let t=0;t<s;++t){const r=ai(Hu(ai(n[t],e)),n[t]);e=Il(e,r)}return si(e,Zu(e,"euclidean"))})));return t?xp(n,0):n}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jd(e,t=!1){return ga.tidy((()=>{h(2===e.shape.length,(()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`));const n=e.shape[0],r=e.shape[1];let s=nl(n),a=ei(e);const o=Ep([[1]],[1,1]);let i=ei(o);const u=n>=r?r:n;for(let e=0;e<u;++e){const t=a,u=i,l=s;[i,a,s]=ga.tidy((()=>{const t=Pi(a,[e,e],[n-e,1]),u=Zu(t),l=Pi(a,[e,e],[1,1]),c=Eu(al(l,0),Ep([[-1]]),Ep([[1]])),p=Il(l,ai(c,u)),d=si(t,p);i=1===d.shape[0]?ei(o):Bi([o,Pi(d,[1,0],[d.shape[0]-1,d.shape[1]])],0);const h=kl(si(zi(c,p),u)),m=Pi(a,[e,0],[n-e,r]),f=ai(h,i),g=Gp(i);if(0===e)a=Il(m,zi(f,zi(g,m)));else{const t=Il(m,zi(f,zi(g,m)));a=Bi([Pi(a,[0,0],[e,r]),t],0)}const y=Gp(f),b=Pi(s,[0,e],[n,s.shape[1]-e]);if(0===e)s=Il(b,zi(zi(b,i),y));else{const t=Il(b,zi(zi(b,i),y));s=Bi([Pi(s,[0,0],[n,e]),t],1)}return[i,a,s]})),Wa([t,u,l])}return!t&&n>r&&(s=Pi(s,[0,0],[n,r]),a=Pi(a,[0,0],[r,r])),[s,a]}))}const Wd=Aa({qr_:function(e,t=!1){if(h(e.rank>=2,(()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`)),2===e.rank)return jd(e,t);{const n=e.shape.slice(0,e.shape.length-2).reduce(((e,t)=>e*t)),r=Pp(Ci(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),s=[],a=[];r.forEach((e=>{const[n,r]=jd(e,t);s.push(n),a.push(r)}));return[Ci(xp(s,0),e.shape),Ci(xp(a,0),e.shape)]}}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var qd,Gd;(Gd=qd||(qd={}))[Gd.NONE=0]="NONE",Gd[Gd.MEAN=1]="MEAN",Gd[Gd.SUM=2]="SUM",Gd[Gd.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS";const Kd=Aa({computeWeightedLoss_:function(e,t,n=qd.SUM_BY_NONZERO_WEIGHTS){const r=Ea(e,"losses","computeWeightedLoss");let s=null;null!=t&&(s=Ea(t,"weights","computeWeightedLoss"));const a=null==s?r:ai(r,s);if(n===qd.NONE)return a;if(n===qd.SUM)return Hu(a);if(n===qd.MEAN){if(null==s)return Ul(a);{const e=r.size/s.size,t=si(Hu(a),Hu(s));return e>1?si(t,qu(e)):t}}if(n===qd.SUM_BY_NONZERO_WEIGHTS){if(null==s)return si(Hu(a),qu(r.size));{const e=ai(s,Wl(r.shape)),t=Qo(Hu(Xl(e,qu(0))),"float32");return si(Hu(a),t)}}throw Error(`Unknown reduction: ${n}`)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hd=Aa({absoluteDifference_:function(e,t,n,r=qd.SUM_BY_NONZERO_WEIGHTS){const s=Ea(e,"labels","absoluteDifference"),a=Ea(t,"predictions","absoluteDifference");let o=null;null!=n&&(o=Ea(n,"weights","absoluteDifference")),m(s.shape,a.shape,"Error in absoluteDifference: ");const i=oi(Il(s,a));return Kd(i,o,r)}});const Jd=Aa({cosineDistance_:function(e,t,n,r,s=qd.SUM_BY_NONZERO_WEIGHTS){const a=Ea(e,"labels","cosineDistance"),o=Ea(t,"predictions","cosineDistance");let i=null;null!=r&&(i=Ea(r,"weights","cosineDistance")),m(a.shape,o.shape,"Error in cosineDistance: ");const u=qu(1),l=Il(u,Hu(ai(a,o),n,!0));return Kd(l,i,s)}});const Zd=Aa({hingeLoss_:function(e,t,n,r=qd.SUM_BY_NONZERO_WEIGHTS){let s=Ea(e,"labels","hingeLoss");const a=Ea(t,"predictions","hingeLoss");let o=null;null!=n&&(o=Ea(n,"weights","hingeLoss")),m(s.shape,a.shape,"Error in hingeLoss: ");const i=qu(1);s=Il(ai(qu(2),s),i);const u=Hc(Il(i,ai(s,a)));return Kd(u,o,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yd=Aa({huberLoss_:function(e,t,n,r=1,s=qd.SUM_BY_NONZERO_WEIGHTS){const a=Ea(e,"labels","huberLoss"),o=Ea(t,"predictions","huberLoss");let i=null;null!=n&&(i=Ea(n,"weights","huberLoss")),m(a.shape,o.shape,"Error in huberLoss: ");const u=qu(r),l=oi(Il(o,a)),c=Gl(l,u),p=Il(l,c),d=ni(ai(qu(.5),Ku(c)),ai(u,p));return Kd(d,i,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xd=Aa({logLoss_:function(e,t,n,r=1e-7,s=qd.SUM_BY_NONZERO_WEIGHTS){const a=Ea(e,"labels","logLoss"),o=Ea(t,"predictions","logLoss");let i=null;null!=n&&(i=Ea(n,"weights","logLoss")),m(a.shape,o.shape,"Error in logLoss: ");const u=qu(1),l=qu(r),c=kl(ai(a,gl(ni(o,l)))),p=ai(Il(u,a),gl(ni(Il(u,o),l))),d=Il(c,p);return Kd(d,i,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qd=Aa({meanSquaredError_:function(e,t,n,r=qd.SUM_BY_NONZERO_WEIGHTS){const s=Ea(e,"labels","meanSquaredError"),a=Ea(t,"predictions","meanSquaredError");let o=null;null!=n&&(o=Ea(n,"weights","meanSquaredError")),m(s.shape,a.shape,"Error in meanSquaredError: ");const i=wp(s,a);return Kd(i,o,r)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eh=Aa({sigmoidCrossEntropy_:function(e,t,n,r=0,s=qd.SUM_BY_NONZERO_WEIGHTS){let a=Ea(e,"multiClassLabels","sigmoidCrossEntropy");const o=Ea(t,"logits","sigmoidCrossEntropy");let i=null;if(null!=n&&(i=Ea(n,"weights","sigmoidCrossEntropy")),m(a.shape,o.shape,"Error in sigmoidCrossEntropy: "),r>0){const e=qu(r),t=qu(1),n=qu(.5);a=ni(ai(a,Il(t,e)),ai(n,e))}const u=function(e,t){const n=Ea(e,"labels","sigmoidCrossEntropyWithLogits"),r=Ea(t,"logits","sigmoidCrossEntropyWithLogits");m(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");const s=Hc(r),a=ai(r,n),o=yl(Xu(kl(oi(r))));return ni(Il(s,a),o)}(a,o);return Kd(u,i,s)}});
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const th=Aa({softmaxCrossEntropy_:function(e,t,n,r=0,s=qd.SUM_BY_NONZERO_WEIGHTS){let a=Ea(e,"onehotLabels","softmaxCrossEntropy");const o=Ea(t,"logits","softmaxCrossEntropy");let i=null;if(null!=n&&(i=Ea(n,"weights","softmaxCrossEntropy")),m(a.shape,o.shape,"Error in softmaxCrossEntropy: "),r>0){const e=qu(r),t=qu(1),n=qu(a.shape[1]);a=ni(ai(a,Il(t,e)),si(e,n))}const u=function(e,t,n=-1){if(-1===n&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);return Tl(((e,t,r)=>{const s=Ml(t,[n],!0),a=Il(Qo(t,"float32"),s);r([e,a]);const o=kl(ai(a,e));return{value:Hu(o,[n]),gradFunc:(e,t)=>{const[r,s]=t,a=Bu(e.shape,[n]);return[ai(Ci(e,a),Il(Qo(r,"float32"),Xu(s))),ai(Ci(e,a),Il(Xu(s),Qo(r,"float32")))]}}}))(e,t)}(a,o);return Kd(u,i,s)}});
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nh={fft:mp,ifft:fp,rfft:bp,irfft:gp},rh={hammingWindow:dd,hannWindow:hd,frame:md,stft:fd},sh={flipLeftRight:yd,grayscaleToRGB:bd,resizeNearestNeighbor:zd,resizeBilinear:Bd,rgbToGrayscale:wd,rotateWithOffset:Nd,cropAndResize:gd,nonMaxSuppression:vd,nonMaxSuppressionAsync:Od,nonMaxSuppressionWithScore:Dd,nonMaxSuppressionWithScoreAsync:Cd,nonMaxSuppressionPadded:Rd,nonMaxSuppressionPaddedAsync:Fd,threshold:Ld,transform:Pd},ah={bandPart:Vd,gramSchmidt:Ud,qr:Wd},oh={absoluteDifference:Hd,computeWeightedLoss:Kd,cosineDistance:Jd,hingeLoss:Zd,huberLoss:Yd,logLoss:Xd,meanSquaredError:Qd,sigmoidCrossEntropy:eh,softmaxCrossEntropy:th},ih={sparseFillEmptyRows:Aa({sparseFillEmptyRows_:function(e,t,n,r){const s=Ea(e,"indices","sparseFillEmptyRows","int32"),a=Ea(t,"values","sparseFillEmptyRows"),o=Ea(n,"denseShape","sparseFillEmptyRows","int32"),i=Ea(r,"defaultValue","sparseFillEmptyRows",a.dtype);if(2!==s.rank)throw new Error(`Indices should be Tensor2D but received shape\n        ${s.shape}`);if(1!==a.rank)throw new Error(`Values should be Tensor1D but received shape ${a.shape}`);if(1!==o.rank)throw new Error(`Dense shape should be Tensor1D but received shape ${o.shape}`);if(0!==i.rank)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);const u={indices:s,values:a,denseShape:o,defaultValue:i},l=ga.runKernel(Kn,u);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}}),sparseReshape:Aa({sparseReshape_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n){const r=Ea(e,"inputIndices","sparseReshape","int32"),s=Ea(t,"inputShape","sparseReshape","int32"),a=Ea(n,"newShape","sparseReshape","int32");if(2!==r.rank)throw new Error(`Input indices should be Tensor2D but received shape\n        ${r.shape}`);if(1!==s.rank)throw new Error(`Input shape should be Tensor1D but received shape ${s.shape}`);if(1!==a.rank)throw new Error(`New shape should be Tensor1D but received shape ${a.shape}`);const o={inputIndices:r,inputShape:s,newShape:a},i=ga.runKernel(Hn,o);return{outputIndices:i[0],outputShape:i[1]}}}),sparseSegmentMean:Aa({sparseSegmentMean_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n){const r=Ea(e,"data","sparseSegmentMean"),s=Ea(t,"indices","sparseSegmentMean","int32"),a=Ea(n,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==s.rank)throw new Error(`Indices should be Tensor1D but received shape\n          ${s.shape}`);if(1!==a.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n          ${a.shape}`);const o={data:r,indices:s,segmentIds:a};return ga.runKernel(Jn,o)}}),sparseSegmentSum:Aa({sparseSegmentSum_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n){const r=Ea(e,"data","sparseSegmentSum"),s=Ea(t,"indices","sparseSegmentSum","int32"),a=Ea(n,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(1!==s.rank)throw new Error(`Indices should be Tensor1D but received shape\n         ${s.shape}`);if(1!==a.rank)throw new Error(`Segment ids should be Tensor1D but received shape\n         ${a.shape}`);const o={data:r,indices:s,segmentIds:a};return ga.runKernel(Zn,o)}})},uh={stringNGrams:Aa({stringNGrams_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r,s,a,o,i){const u=Ea(e,"data","stringNGrams","string");if("string"!==u.dtype)throw new Error("Data must be of datatype string");if(1!==u.shape.length)throw new Error(`Data must be a vector, saw: ${u.shape}`);const l=Ea(t,"dataSplits","stringNGrams");if("int32"!==l.dtype)throw new Error("Data splits must be of datatype int32");const c={separator:n,nGramWidths:r,leftPad:s,rightPad:a,padWidth:o,preserveShortSequences:i},p={data:u,dataSplits:l},d=ga.runKernel(nr,p,c);return{nGrams:d[0],nGramsSplits:d[1]}}}),stringSplit:Aa({stringSplit_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n=!0){const r=Ea(e,"input","stringSplit","string"),s=Ea(t,"delimiter","stringSplit","string");if(1!==r.rank)throw new Error(`Input should be Tensor1D but received shape ${r.shape}`);if(0!==s.rank)throw new Error(`Delimiter should be a scalar but received shape ${s.shape}`);const a={skipEmpty:n},o={input:r,delimiter:s},i=ga.runKernel(rr,o,a);return{indices:i[0],values:i[1],shape:i[2]}}}),stringToHashBucketFast:Aa({stringToHashBucketFast_:
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t){const n=Ea(e,"input","stringToHashBucketFast","string"),r={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const s={input:n};return ga.runKernel(sr,s,r)}}),staticRegexReplace:Aa({staticRegexReplace_:
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function(e,t,n,r=!0){const s=Ea(e,"input","staticRegexReplace","string"),a={pattern:t,rewrite:n,replaceGlobal:r};return ga.runKernel(er,{x:s},a)}})},lh=new Map,ch=new Map;
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ph{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}}class dh{constructor(){this.classNameMap={}}static getMap(){return null==dh.instance&&(dh.instance=new dh),dh.instance}static register(e){dh.getMap().classNameMap[e.className]=[e,e.fromConfig]}}function hh(e,t,n){h(null!=e.className,(()=>"Class being registered does not have the static className property defined.")),h("string"==typeof e.className,(()=>"className is required to be a string, but got type "+typeof e.className)),h(e.className.length>0,(()=>"Class being registered has an empty-string as its className, which is disallowed.")),void 0===t&&(t="Custom"),void 0===n&&(n=e.className);const r=t+">"+n;return dh.register(e),lh.set(r,e),ch.set(e,r),e}const mh=Object.freeze(Object.defineProperty({__proto__:null,Serializable:ph,SerializationMap:dh,getRegisteredName:function(e){return ch.has(e)?ch.get(e):e.className},registerClass:hh},Symbol.toStringTag,{value:"Module"}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class fh extends ph{minimize(e,t=!1,n){const{value:r,grads:s}=this.computeGradients(e,n);if(null!=n){const e=n.map((e=>({name:e.name,tensor:s[e.name]})));this.applyGradients(e)}else this.applyGradients(s);return Wa(s),t?r:(r.dispose(),null)}get iterations(){return null==this.iterations_&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return vl(e,t)}dispose(){null!=this.iterations_&&Wa(this.iterations_)}saveIterations(){return e(this,null,(function*(){return null==this.iterations_&&(this.iterations_=0),{name:"iter",tensor:qu(this.iterations_,"int32")}}))}getWeights(){return e(this,null,(function*(){throw new Error("getWeights() is not implemented for this optimizer yet.")}))}setWeights(t){return e(this,null,(function*(){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}))}extractIterations(t){return e(this,null,(function*(){return this.iterations_=(yield t[0].tensor.data())[0],t.slice(1)}))}}Object.defineProperty(fh,Symbol.hasInstance,{value:e=>null!=e.minimize&&null!=e.computeGradients&&null!=e.applyGradients});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class gh extends fh{static get className(){return"Adadelta"}constructor(e,t,n=null){super(),this.learningRate=e,this.rho=t,this.epsilon=n,this.accumulatedGrads=[],this.accumulatedUpdates=[],null==n&&(this.epsilon=ga.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map((e=>e.name)):Object.keys(e)).forEach(((t,n)=>{const r=ga.registeredVariables[t],s=!1;null==this.accumulatedGrads[n]&&(this.accumulatedGrads[n]={originalName:`${t}/accum_grad`,variable:ja((()=>_u(r).variable(s)))}),null==this.accumulatedUpdates[n]&&(this.accumulatedUpdates[n]={originalName:`${t}/accum_var`,variable:ja((()=>_u(r).variable(s)))});const a=Array.isArray(e)?e[n].tensor:e[t];if(null==a)return;const o=this.accumulatedGrads[n].variable,i=this.accumulatedUpdates[n].variable;ja((()=>{const e=ni(ai(o,this.rho),ai(Ku(a),1-this.rho)),t=ai(si(Gu(ni(i,this.epsilon)),Gu(ni(o,this.epsilon))),a),n=ni(ai(i,this.rho),ai(Ku(t),1-this.rho));o.assign(e),i.assign(n);const s=ni(ai(t,-this.learningRate),r);r.assign(s)}))})),this.incrementIterations()}dispose(){null!=this.accumulatedUpdates&&(Wa(this.accumulatedGrads.map((e=>e.variable))),Wa(this.accumulatedUpdates.map((e=>e.variable))))}getWeights(){return e(this,null,(function*(){const e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[yield this.saveIterations()].concat(e.map((e=>({name:e.originalName,tensor:e.variable}))))}))}setWeights(t){return e(this,null,(function*(){const e=(t=yield this.extractIterations(t)).length/2,n=!1;this.accumulatedGrads=t.slice(0,e).map((e=>({originalName:e.name,variable:e.tensor.variable(n)}))),this.accumulatedUpdates=t.slice(e,2*e).map((e=>({originalName:e.name,variable:e.tensor.variable(n)})))}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class yh extends fh{static get className(){return"Adagrad"}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map((e=>e.name)):Object.keys(e)).forEach(((t,n)=>{const r=ga.registeredVariables[t];if(null==this.accumulatedGrads[n]){const e=!1;this.accumulatedGrads[n]={originalName:`${t}/accumulator`,variable:ja((()=>Qi(r.shape,this.initialAccumulatorValue).variable(e)))}}const s=Array.isArray(e)?e[n].tensor:e[t];if(null==s)return;const a=this.accumulatedGrads[n].variable;ja((()=>{const e=ni(a,Ku(s));a.assign(e);const t=ni(ai(si(s,Gu(ni(e,ga.backend.epsilon()))),-this.learningRate),r);r.assign(t)}))})),this.incrementIterations()}dispose(){null!=this.accumulatedGrads&&Wa(this.accumulatedGrads.map((e=>e.variable)))}getWeights(){return e(this,null,(function*(){return[yield this.saveIterations()].concat(this.accumulatedGrads.map((e=>({name:e.originalName,tensor:e.variable}))))}))}setWeights(t){return e(this,null,(function*(){t=yield this.extractIterations(t);this.accumulatedGrads=t.map((e=>({originalName:e.name,variable:e.tensor.variable(false)})))}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class bh extends fh{static get className(){return"Adam"}constructor(e,t,n,r=null){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],ja((()=>{this.accBeta1=qu(t).variable(),this.accBeta2=qu(n).variable()})),null==r&&(this.epsilon=ga.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map((e=>e.name)):Object.keys(e);ja((()=>{const n=Il(1,this.accBeta1),r=Il(1,this.accBeta2);t.forEach(((t,s)=>{const a=ga.registeredVariables[t],o=!1;null==this.accumulatedFirstMoment[s]&&(this.accumulatedFirstMoment[s]={originalName:`${t}/m`,variable:ja((()=>_u(a).variable(o)))}),null==this.accumulatedSecondMoment[s]&&(this.accumulatedSecondMoment[s]={originalName:`${t}/v`,variable:ja((()=>_u(a).variable(o)))});const i=Array.isArray(e)?e[s].tensor:e[t];if(null==i)return;const u=this.accumulatedFirstMoment[s].variable,l=this.accumulatedSecondMoment[s].variable,c=ni(ai(u,this.beta1),ai(i,1-this.beta1)),p=ni(ai(l,this.beta2),ai(Ku(i),1-this.beta2)),d=si(c,n),h=si(p,r);u.assign(c),l.assign(p);const m=ni(ai(si(d,ni(Gu(h),this.epsilon)),-this.learningRate),a);a.assign(m)})),this.accBeta1.assign(ai(this.accBeta1,this.beta1)),this.accBeta2.assign(ai(this.accBeta2,this.beta2))})),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),null!=this.accumulatedFirstMoment&&Wa(this.accumulatedFirstMoment.map((e=>e.variable))),null!=this.accumulatedSecondMoment&&Wa(this.accumulatedSecondMoment.map((e=>e.variable)))}getWeights(){return e(this,null,(function*(){const e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[yield this.saveIterations()].concat(e.map((e=>({name:e.originalName,tensor:e.variable}))))}))}setWeights(t){return e(this,null,(function*(){t=yield this.extractIterations(t),ja((()=>{this.accBeta1.assign(Wu(this.beta1,this.iterations_+1)),this.accBeta2.assign(Wu(this.beta2,this.iterations_+1))}));const e=t.length/2,n=!1;this.accumulatedFirstMoment=t.slice(0,e).map((e=>({originalName:e.name,variable:e.tensor.variable(n)}))),this.accumulatedSecondMoment=t.slice(e,2*e).map((e=>({originalName:e.name,variable:e.tensor.variable(n)})))}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class wh extends fh{static get className(){return"Adamax"}constructor(e,t,n,r=null,s=0){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=r,this.decay=s,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],ja((()=>{this.iteration=qu(0).variable(),this.accBeta1=qu(t).variable()})),null==r&&(this.epsilon=ga.backend.epsilon())}applyGradients(e){const t=Array.isArray(e)?e.map((e=>e.name)):Object.keys(e);ja((()=>{const n=Il(1,this.accBeta1),r=si(-this.learningRate,ni(ai(this.iteration,this.decay),1));t.forEach(((t,s)=>{const a=ga.registeredVariables[t],o=!1;null==this.accumulatedFirstMoment[s]&&(this.accumulatedFirstMoment[s]={originalName:`${t}/m`,variable:_u(a).variable(o)}),null==this.accumulatedWeightedInfNorm[s]&&(this.accumulatedWeightedInfNorm[s]={originalName:`${t}/v`,variable:_u(a).variable(o)});const i=Array.isArray(e)?e[s].tensor:e[t];if(null==i)return;const u=this.accumulatedFirstMoment[s].variable,l=this.accumulatedWeightedInfNorm[s].variable,c=ni(ai(u,this.beta1),ai(i,1-this.beta1)),p=ai(l,this.beta2),d=oi(i),h=Vl(p,d);u.assign(c),l.assign(h);const m=ni(ai(si(r,n),si(c,ni(h,this.epsilon))),a);a.assign(m)})),this.iteration.assign(ni(this.iteration,1)),this.accBeta1.assign(ai(this.accBeta1,this.beta1))})),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),null!=this.accumulatedFirstMoment&&Wa(this.accumulatedFirstMoment.map((e=>e.variable))),null!=this.accumulatedWeightedInfNorm&&Wa(this.accumulatedWeightedInfNorm.map((e=>e.variable)))}getWeights(){return e(this,null,(function*(){throw new Error("getWeights() is not implemented for Adamax yet.")}))}setWeights(t){return e(this,null,(function*(){throw new Error("setWeights() is not implemented for Adamax yet.")}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Nh extends fh{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map((e=>e.name)):Object.keys(e)).forEach(((t,n)=>{const r=Array.isArray(e)?e[n].tensor:e[t];if(null==r)return;const s=ga.registeredVariables[t];ja((()=>{const e=ni(ai(this.c,r),s);s.assign(e)}))})),this.incrementIterations()}setLearningRate(e){this.learningRate=e,null!=this.c&&this.c.dispose(),this.c=qa(qu(-e))}dispose(){this.c.dispose()}getWeights(){return e(this,null,(function*(){return[yield this.saveIterations()]}))}setWeights(t){return e(this,null,(function*(){if(0!==(t=yield this.extractIterations(t)).length)throw new Error("SGD optimizer does not have settable weights.")}))}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class xh extends Nh{static get className(){return"Momentum"}constructor(e,t,n=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=n,this.accumulations=[],this.m=qu(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map((e=>e.name)):Object.keys(e)).forEach(((t,n)=>{const r=ga.registeredVariables[t];if(null==this.accumulations[n]){const e=!1;this.accumulations[n]={originalName:`${t}/momentum`,variable:ja((()=>_u(r).variable(e)))}}const s=this.accumulations[n].variable,a=Array.isArray(e)?e[n].tensor:e[t];null!=a&&ja((()=>{let e;const t=ni(ai(this.m,s),a);e=this.useNesterov?ni(ai(this.c,ni(a,ai(t,this.m))),r):ni(ai(this.c,t),r),s.assign(t),r.assign(e)}))})),this.incrementIterations()}dispose(){this.m.dispose(),null!=this.accumulations&&Wa(this.accumulations.map((e=>e.variable)))}setMomentum(e){this.momentum=e}getWeights(){return e(this,null,(function*(){return[yield this.saveIterations()].concat(this.accumulations.map((e=>({name:e.originalName,tensor:e.variable}))))}))}setWeights(t){return e(this,null,(function*(){t=yield this.extractIterations(t);this.accumulations=t.map((e=>({originalName:e.name,variable:e.tensor.variable(false)})))}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vh extends fh{static get className(){return"RMSProp"}constructor(e,t=.9,n=0,r=null,s=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=n,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=s,null==r&&(this.epsilon=ga.backend.epsilon()),null==e)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map((e=>e.name)):Object.keys(e)).forEach(((t,n)=>{const r=ga.registeredVariables[t],s=!1;null==this.accumulatedMeanSquares[n]&&(this.accumulatedMeanSquares[n]={originalName:`${t}/rms`,variable:ja((()=>_u(r).variable(s)))}),null==this.accumulatedMoments[n]&&(this.accumulatedMoments[n]={originalName:`${t}/momentum`,variable:ja((()=>_u(r).variable(s)))}),null==this.accumulatedMeanGrads[n]&&this.centered&&(this.accumulatedMeanGrads[n]={originalName:`${t}/mg`,variable:ja((()=>_u(r).variable(s)))});const a=Array.isArray(e)?e[n].tensor:e[t];if(null==a)return;const o=this.accumulatedMeanSquares[n].variable,i=this.accumulatedMoments[n].variable;ja((()=>{const e=ni(ai(o,this.decay),ai(Ku(a),1-this.decay));if(this.centered){const t=this.accumulatedMeanGrads[n].variable,s=ni(ai(t,this.decay),ai(a,1-this.decay)),u=si(ai(a,this.learningRate),Gu(Il(e,ni(Ku(s),this.epsilon)))),l=ni(ai(i,this.momentum),u);o.assign(e),t.assign(s),i.assign(l);const c=Il(r,l);r.assign(c)}else{const e=ni(ai(o,this.decay),ai(Ku(a),1-this.decay)),t=ni(ai(i,this.momentum),si(ai(a,this.learningRate),Gu(ni(e,this.epsilon))));o.assign(e),i.assign(t);const n=Il(r,t);r.assign(n)}}))})),this.incrementIterations()}dispose(){null!=this.accumulatedMeanSquares&&Wa(this.accumulatedMeanSquares.map((e=>e.variable))),null!=this.accumulatedMeanGrads&&this.centered&&Wa(this.accumulatedMeanGrads.map((e=>e.variable))),null!=this.accumulatedMoments&&Wa(this.accumulatedMoments.map((e=>e.variable)))}getWeights(){return e(this,null,(function*(){const e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[yield this.saveIterations()].concat(e.map((e=>({name:e.originalName,tensor:e.variable}))))}))}setWeights(t){return e(this,null,(function*(){t=yield this.extractIterations(t);const e=this.centered?t.length/3:t.length/2,n=!1;this.accumulatedMeanSquares=t.slice(0,e).map((e=>({originalName:e.name,variable:e.tensor.variable(n)}))),this.accumulatedMoments=t.slice(e,2*e).map((e=>({originalName:e.name,variable:e.tensor.variable(n)}))),this.centered&&(this.accumulatedMeanGrads=t.slice(2*e,3*e).map((e=>({originalName:e.name,variable:e.tensor.variable(n)}))))}))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}}
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Th=[gh,yh,bh,wh,xh,vh,Nh];function Sh(e){return new Promise((e=>setTimeout(e))).then(e)}class kh{constructor(e){if(!Q().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(kh.URL_SCHEME)&&(e=e.slice(kh.URL_SCHEME.length)),null!=e&&0!==e.length||(e="model"),this.modelJsonFileName=e+".json",this.weightDataFileName=e+".weights.bin"}save(t){return e(this,null,(function*(){if("undefined"==typeof document)throw new Error("Browser downloads are not supported in this environment since `document` is not present");const e=Ca.join(t.weightData),n=window.URL.createObjectURL(new Blob([e],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const e=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],r=fo(t,e),s=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),a=null==this.modelJsonAnchor?document.createElement("a"):this.modelJsonAnchor;if(a.download=this.modelJsonFileName,a.href=s,yield Sh((()=>a.dispatchEvent(new MouseEvent("click")))),null!=t.weightData){const e=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor;e.download=this.weightDataFileName,e.href=n,yield Sh((()=>e.dispatchEvent(new MouseEvent("click"))))}return{modelArtifactsInfo:bo(t)}}}))}}kh.URL_SCHEME="downloads://";class Eh{constructor(e){if(null==e||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}load(){return e(this,null,(function*(){return new Promise(((e,t)=>{const n=new FileReader;n.onload=n=>{const r=JSON.parse(n.target.result),s=r.modelTopology;if(null==s)return void t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));if(null==r.weightsManifest)return void t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));if(0===this.weightsFiles.length)return void e({modelTopology:s});const a=yo(r,(e=>this.loadWeights(e)));e(a)},n.onerror=e=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),n.readAsText(this.jsonFile)}))}))}loadWeights(e){const t=[],n=[];for(const a of e)t.push(...a.weights),n.push(...a.paths);const r=this.checkManifestAndWeightFiles(e),s=n.map((e=>this.loadWeightsFile(e,r[e])));return Promise.all(s).then((e=>[t,e]))}loadWeightsFile(e,t){return new Promise(((n,r)=>{const s=new FileReader;s.onload=e=>{const t=e.target.result;n(t)},s.onerror=t=>r(`Failed to weights data from file of path '${e}'.`),s.readAsArrayBuffer(t)}))}checkManifestAndWeightFiles(e){const t=[],n=this.weightsFiles.map((e=>mo(e.name))),r={};for(const s of e)s.paths.forEach((e=>{const s=mo(e);if(-1!==t.indexOf(s))throw new Error(`Duplicate file basename found in weights manifest: '${s}'`);if(t.push(s),-1===n.indexOf(s))throw new Error(`Weight file with basename '${s}' is not provided.`);r[e]=this.weightsFiles[n.indexOf(s)]}));if(t.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function _h(e,t,n,r){var s,a,o;h(null!=(s=e)&&Array.isArray(s)&&s.length>0,(()=>"promises must be a none empty array")),o=r=null==r?1:r,h((a=n=null==n?0:n)>=0&&a<=1,(()=>`Progress fraction must be in range [0, 1], but got startFraction ${a}`)),h(o>=0&&o<=1,(()=>`Progress fraction must be in range [0, 1], but got endFraction ${o}`)),h(o>=a,(()=>`startFraction must be no more than endFraction, but got startFraction ${a} and endFraction ${o}`));let i=0;return Promise.all(e.map((s=>(s.then((s=>{const a=n+ ++i/e.length*(r-n);return t(a),s})),s))))}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ih(t,n){return e(this,null,(function*(){null==n&&(n={});const e=null==n.fetchFunc?Q().platform.fetch:n.fetchFunc,r=t.map((t=>e(t,n.requestInit,{isBinary:!0}))),s=(null==n.onProgress?yield Promise.all(r):yield _h(r,n.onProgress,0,.5)).map((e=>e.arrayBuffer()));return null==n.onProgress?yield Promise.all(s):yield _h(s,n.onProgress,.5,1)}))}function Ah(t,n="",r,s){return e(this,null,(function*(){return Mh((e=>Ih(e,{requestInit:s})))(t,n,r)}))}function Mh(t){return(n,r="",s)=>e(this,null,(function*(){const e=n.map((()=>!1)),a={},o=null!=s?s.map((()=>!1)):[],i=[];if(n.forEach(((t,n)=>{let r=0;t.weights.forEach((t=>{const u="quantization"in t?t.quantization.dtype:t.dtype,l=Da[u]*g(t.shape),c=()=>{e[n]=!0,null==a[n]&&(a[n]=[]),a[n].push({manifestEntry:t,groupOffset:r,sizeBytes:l})};null!=s?s.forEach(((e,n)=>{e===t.name&&(c(),o[n]=!0)})):c(),i.push(t.name),r+=l}))})),!o.every((e=>e))){const e=s.filter(((e,t)=>!o[t]));throw new Error(`Could not find weights in manifest with names: ${e.join(", ")}. \nManifest JSON has weights with names: ${i.join(", ")}.`)}const u=e.reduce(((e,t,n)=>(t&&e.push(n),e)),[]),l=[];u.forEach((e=>{n[e].paths.forEach((e=>{const t=r+(r.endsWith("/")?"":"/")+e;l.push(t)}))}));const c=yield t(l),p={};let d=0;return u.forEach((e=>{const t=n[e].paths.length,r=new Ca(c.slice(d,d+t));a[e].forEach((e=>{const t=ro(r.slice(e.groupOffset,e.groupOffset+e.sizeBytes),[e.manifestEntry]);for(const n in t)p[n]=t[n]})),d+=t})),p}))}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */No.registerSaveRouter((e=>Q().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(kh.URL_SCHEME)?function(e="model"){return new kh(e)}(e.slice(kh.URL_SCHEME.length)):null));class $h{constructor(e,t){if(this.DEFAULT_METHOD="POST",null==t&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.weightUrlConverter=t.weightUrlConverter,null!=t.fetchFunc?(h("function"==typeof t.fetchFunc,(()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)")),this.fetch=t.fetchFunc):this.fetch=Q().platform.fetch,h(null!=e&&e.length>0,(()=>"URL path for http must not be null, undefined or empty.")),Array.isArray(e)&&h(2===e.length,(()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`)),this.path=e,null!=t.requestInit&&null!=t.requestInit.body)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{},this.loadOptions=t}save(t){return e(this,null,(function*(){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;const n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],r=fo(t,n);if(e.body.append("model.json",new Blob([JSON.stringify(r)],{type:"application/json"}),"model.json"),null!=t.weightData){const n=Ca.join(t.weightData);e.body.append("model.weights.bin",new Blob([n],{type:"application/octet-stream"}),"model.weights.bin")}const s=yield this.fetch(this.path,e);if(s.ok)return{modelArtifactsInfo:bo(t),responses:[s]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${s.status}.`)}))}loadModelJSON(){return e(this,null,(function*(){const e=yield this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=yield e.json()}catch(vf){let t=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?t+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":t+=" Please make sure the server is serving valid JSON for this request.",new Error(t)}const n=t.modelTopology,r=t.weightsManifest;if(null==n&&null==r)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return t}))}load(){return e(this,null,(function*(){if(this.loadOptions.streamWeights)return this.loadStream();return yo(yield this.loadModelJSON(),(e=>this.loadWeights(e)))}))}loadStream(){return e(this,null,(function*(){const t=yield this.loadModelJSON(),n=yield this.getWeightUrls(t.weightsManifest),r=wo(t.weightsManifest);return Object.assign(Object.assign({},t),{weightSpecs:r,getWeightStream:()=>function(t,n){var r;const s=null==n.fetchFunc?Q().platform.fetch:n.fetchFunc;let a,o=0;return null===(r=n.onProgress)||void 0===r||r.call(n,0),new ReadableStream({pull:r=>e(this,null,(function*(){for(var e;o<t.length;){if(!a){const e=(yield s(t[o],n.requestInit,{isBinary:!0})).body;a=e.getReader()}const{done:i,value:u}=yield a.read();if(!i)return void r.enqueue(u);o++,a=void 0,null===(e=n.onProgress)||void 0===e||e.call(n,o/t.length)}r.close()}))})}(n,this.loadOptions)})}))}getWeightUrls(t){return e(this,null,(function*(){const e=Array.isArray(this.path)?this.path[1]:this.path,[n,r]=function(e){const t=e.lastIndexOf("/"),n=e.lastIndexOf("?"),r=e.substring(0,t),s=n>t?e.substring(n):"";return[r+"/",s]}(e),s=this.weightPathPrefix||n,a=[],o=[];for(const i of t)for(const e of i.paths)null!=this.weightUrlConverter?o.push(this.weightUrlConverter(e)):a.push(s+e+r);return this.weightUrlConverter&&a.push(...yield Promise.all(o)),a}))}loadWeights(t){return e(this,null,(function*(){const e=yield this.getWeightUrls(t);return[wo(t),yield Ih(e,this.loadOptions)]}))}}function Oh(e){return null!=e.match($h.URL_SCHEME_REGEX)}$h.URL_SCHEME_REGEX=/^https?:\/\//;const Dh=(e,t)=>{if("undefined"==typeof fetch&&(null==t||null==t.fetchFunc))return null;{let n=!0;if(n=Array.isArray(e)?e.every((e=>Oh(e))):Oh(e),n)return Ch(e,t)}return null};function Ch(e,t){return new $h(e,t)}function Rh(e,t){return Ch(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */No.registerSaveRouter(Dh),No.registerLoadRouter(Dh);class Fh{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class Bh{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class zh{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}}function Lh(e,t,n,r){if(1===arguments.length){return null!=e.modelTopology||null!=e.weightSpecs?new Fh(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Fh({modelTopology:e}))}return console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Fh({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:r})}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ph=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:Ca,browserFiles:function(e){return new Eh(e)},browserHTTPRequest:Rh,concatenateArrayBuffers:ho,copyModel:function(t,n){return e(this,null,(function*(){return Ko(t,n,!1)}))},decodeWeights:ro,decodeWeightsStream:uo,encodeWeights:no,fromMemory:function(e,t,n,r){return new zh(Lh(...arguments))},fromMemorySync:Lh,getLoadHandlers:vo,getModelArtifactsForJSON:yo,getModelArtifactsForJSONSync:go,getModelArtifactsInfoForJSON:bo,getSaveHandlers:xo,getWeightSpecs:wo,http:Ch,isHTTPScheme:Oh,listModels:function(){return e(this,null,(function*(){const e=qo.getSchemes(),t={};for(const n of e){const e=yield qo.getManager(n).listModels();for(const r in e){t[n+Wo+r]=e[r]}}return t}))},loadWeights:Ah,moveModel:function(t,n){return e(this,null,(function*(){return Ko(t,n,!0)}))},registerLoadRouter:e=>No.registerLoadRouter(e),registerSaveRouter:e=>No.registerSaveRouter(e),removeModel:function(t){return e(this,null,(function*(){const e=Go(t);return qo.getManager(e.scheme).removeModel(e.path)}))},weightsLoaderFactory:Mh,withSaveHandler:function(e){return new Bh(e)},withSaveHandlerSync:function(e){return new Bh(e)}},Symbol.toStringTag,{value:"Module"}));
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Vh,Uh=!1;function jh(e,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==e)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,r=!1,s=!1,a=!1,o=!1,i=!1;if(e.data instanceof Uint8Array)n=!0;else if("undefined"!=typeof ImageData&&e instanceof ImageData)r=!0;else if("undefined"!=typeof HTMLVideoElement&&e instanceof HTMLVideoElement)s=!0;else if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement)a=!0;else if(null!=e.getContext)o=!0;else{if(!("undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap))throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);i=!0}if(null!=_r(br,ga.backendName)){const n={pixels:e},r={numChannels:t};return ga.runKernel(br,n,r)}const[u,l]=s?[e.videoWidth,e.videoHeight]:[e.width,e.height];let c,p;if(o)c=e.getContext("2d").getImageData(0,0,u,l).data;else if(r||n)c=e.data;else if(a||s||i){if(null==Vh)if("undefined"==typeof document){if("undefined"==typeof OffscreenCanvas||"undefined"==typeof OffscreenCanvasRenderingContext2D)throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");Vh=new OffscreenCanvas(1,1).getContext("2d")}else Vh=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Vh.canvas.width=u,Vh.canvas.height=l,Vh.drawImage(e,0,0,u,l),c=Vh.getImageData(0,0,u,l).data}if(4===t)p=new Int32Array(c);else{const e=u*l;p=new Int32Array(e*t);for(let n=0;n<e;n++)for(let e=0;e<t;++e)p[n*t+e]=c[4*n+e]}return _p(p,[l,u,t],"int32")}function Wh(e){return"undefined"!=typeof window&&"undefined"!=typeof ImageBitmap&&window.hasOwnProperty("createImageBitmap")&&!(e instanceof ImageBitmap)&&function(e){return null!=e&&0!==e.width&&0!==e.height}(e)&&!function(e){return null!=e&&e.data instanceof Uint8Array}(e)}function qh(e){if(2!==e.rank&&3!==e.rank)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);const t=2===e.rank?1:e.shape[2];if(t>4||2===t)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${t}`);if("float32"!==e.dtype&&"int32"!==e.dtype)throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`)}const Gh=Aa({fromPixels_:jh}),Kh=Object.freeze(Object.defineProperty({__proto__:null,draw:function(e,t,n){let r=Ea(e,"img","draw");if(!(e instanceof Us)){const e=r;r=Qo(e,"int32"),e.dispose()}qh(r),function(e){const t=(null==e?void 0:e.alpha)||1;if(t>1||t<0)throw new Error(`Alpha value ${t} is suppoed to be in range [0 - 1].`)}(null==n?void 0:n.imageOptions);const s={image:r},a={canvas:t,options:n};ga.runKernel(et,s,a)},fromPixels:Gh,fromPixelsAsync:function(t,n=3){return e(this,null,(function*(){let e=null;if(Q().getBool("WRAP_TO_IMAGEBITMAP")&&Wh(t)){let n;try{n=yield createImageBitmap(t,{premultiplyAlpha:"none"})}catch(vf){n=null}e=null!=n&&n.width===t.width&&n.height===t.height?n:t}else e=t;return jh(e,n)}))},toPixels:function(t,n){return e(this,null,(function*(){let e=Ea(t,"img","toPixels");if(!(t instanceof Us)){const t=e;e=Qo(t,"int32"),t.dispose()}qh(e);const[r,s]=e.shape.slice(0,2),a=2===e.rank?1:e.shape[2],o=yield e.data(),i="float32"===e.dtype?255:1,u=new Uint8ClampedArray(s*r*4);for(let t=0;t<r*s;++t){const n=[0,0,0,255];for(let s=0;s<a;s++){const r=o[t*a+s];if("float32"===e.dtype){if(r<0||r>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${r}.`)}else if("int32"===e.dtype&&(r<0||r>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${r}.`);1===a?(n[0]=r*i,n[1]=r*i,n[2]=r*i):n[s]=r*i}const r=4*t;u[r+0]=Math.round(n[0]),u[r+1]=Math.round(n[1]),u[r+2]=Math.round(n[2]),u[r+3]=Math.round(n[3])}if(null!=n){if(!Uh){null!=_r(et,ga.backendName)&&(console.warn("tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead."),Uh=!0)}n.width=s,n.height=r;const e=n.getContext("2d"),t=new ImageData(u,s,r);e.putImageData(t,0,0)}return e!==t&&e.dispose(),u}))}},Symbol.toStringTag,{value:"Module"}));
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
!function(){for(const e of Th)hh(e)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */();
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
var Hh,Jh,Zh,Yh,Xh;Q().registerFlag("KEEP_INTERMEDIATE_TENSORS",(()=>!1),(e=>{e&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")})),(Jh=Hh||(Hh={}))[Jh.DT_INVALID=0]="DT_INVALID",Jh[Jh.DT_FLOAT=1]="DT_FLOAT",Jh[Jh.DT_DOUBLE=2]="DT_DOUBLE",Jh[Jh.DT_INT32=3]="DT_INT32",Jh[Jh.DT_UINT8=4]="DT_UINT8",Jh[Jh.DT_INT16=5]="DT_INT16",Jh[Jh.DT_INT8=6]="DT_INT8",Jh[Jh.DT_STRING=7]="DT_STRING",Jh[Jh.DT_COMPLEX64=8]="DT_COMPLEX64",Jh[Jh.DT_INT64=9]="DT_INT64",Jh[Jh.DT_BOOL=10]="DT_BOOL",Jh[Jh.DT_QINT8=11]="DT_QINT8",Jh[Jh.DT_QUINT8=12]="DT_QUINT8",Jh[Jh.DT_QINT32=13]="DT_QINT32",Jh[Jh.DT_BFLOAT16=14]="DT_BFLOAT16",Jh[Jh.DT_QINT16=15]="DT_QINT16",Jh[Jh.DT_QUINT16=16]="DT_QUINT16",Jh[Jh.DT_UINT16=17]="DT_UINT16",Jh[Jh.DT_COMPLEX128=18]="DT_COMPLEX128",Jh[Jh.DT_HALF=19]="DT_HALF",Jh[Jh.DT_RESOURCE=20]="DT_RESOURCE",Jh[Jh.DT_VARIANT=21]="DT_VARIANT",Jh[Jh.DT_UINT32=22]="DT_UINT32",Jh[Jh.DT_UINT64=23]="DT_UINT64",Jh[Jh.DT_FLOAT_REF=101]="DT_FLOAT_REF",Jh[Jh.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",Jh[Jh.DT_INT32_REF=103]="DT_INT32_REF",Jh[Jh.DT_UINT8_REF=104]="DT_UINT8_REF",Jh[Jh.DT_INT16_REF=105]="DT_INT16_REF",Jh[Jh.DT_INT8_REF=106]="DT_INT8_REF",Jh[Jh.DT_STRING_REF=107]="DT_STRING_REF",Jh[Jh.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",Jh[Jh.DT_INT64_REF=109]="DT_INT64_REF",Jh[Jh.DT_BOOL_REF=110]="DT_BOOL_REF",Jh[Jh.DT_QINT8_REF=111]="DT_QINT8_REF",Jh[Jh.DT_QUINT8_REF=112]="DT_QUINT8_REF",Jh[Jh.DT_QINT32_REF=113]="DT_QINT32_REF",Jh[Jh.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",Jh[Jh.DT_QINT16_REF=115]="DT_QINT16_REF",Jh[Jh.DT_QUINT16_REF=116]="DT_QUINT16_REF",Jh[Jh.DT_UINT16_REF=117]="DT_UINT16_REF",Jh[Jh.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",Jh[Jh.DT_HALF_REF=119]="DT_HALF_REF",Jh[Jh.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",Jh[Jh.DT_VARIANT_REF=121]="DT_VARIANT_REF",Jh[Jh.DT_UINT32_REF=122]="DT_UINT32_REF",Jh[Jh.DT_UINT64_REF=123]="DT_UINT64_REF",Yh=Zh||(Zh={}),(Xh=Yh.CheckpointFormatVersion||(Yh.CheckpointFormatVersion={}))[Xh.LEGACY=0]="LEGACY",Xh[Xh.V1=1]="V1",Xh[Xh.V2=2]="V2";
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Qh={};function em(e,t){const n={tfOpName:e,category:"custom",inputs:[],attrs:[],customExecutor:t};Qh[e]=n}function tm(e){return Qh[e]}function nm(e){delete Qh[e]}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rm(e,t,n,r,s){const a=t.inputParams[e];if(a&&void 0!==a.inputIndexStart){const e=a.inputIndexStart,o=0===a.inputIndexEnd?void 0:void 0===a.inputIndexEnd?e+1:a.inputIndexEnd,i=e<0?t.inputNames.length+e:e;if("tensor"===a.type)return sm(t.inputNames[i],n,r,s);if("tensors"===a.type){const a=t.inputs.slice(e,o);return t.inputNames.slice(e,o).filter(((e,t)=>{var n;return"NoOp"!==(null===(n=a[t])||void 0===n?void 0:n.op)})).map((e=>sm(e,n,r,s)))}const u=sm(t.inputNames[i],n,r,s),l=u.dataSync();return"number"===a.type?l[0]:V(u.shape,l)}const o=t.attrParams[e];return o&&o.value}function sm(e,t,n,r){const[s,a]=um(e,n);if(null!=r){const e=r.getHashTableHandleByName(s);if(null!=e)return e}const o=n.currentContextIds.find((e=>!!t[im(s,e)]));return void 0!==o?t[im(s,o)][a]:void 0}function am(e,t,n){return t[im(e,n.currentContextId)]}function om(e,t){const[n,r,s]=um(e,t);return[im(n,t&&t.currentContextId),r,s]}function im(e,t){return t?`${e}-${t}`:e}function um(e,t){if(""===e)return["",0,void 0];const n=null!=t&&null!=t.parseNodeNameCache;if(n){const n=t.parseNodeNameCache.get(e);if(null!=n)return n}const r=e.split(":");let s;if(1===r.length)s=[e,0,void 0];else{const e=r[0],t=3===r.length?r[1]:void 0;s=[e,Number(r[r.length-1]),t]}return n&&t.parseNodeNameCache.set(e,s),s}function lm(e,t,n){let r=rm("pad",e,t,n);if("explicit"===r){r=rm("explicitPaddings",e,t,n);const s=[[0,0],[0,0],[0,0],[0,0]];for(let e=0;e<4;e++)s[e][0]=r[2*e],s[e][1]=r[2*e+1];return s}return r}function cm(e){return e.kept?e:ei(e)}
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pm=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]},Symbol.toStringTag,{value:"Module"})),dm=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]},Symbol.toStringTag,{value:"Module"})),hm=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}]},Symbol.toStringTag,{value:"Module"})),mm=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}]},Symbol.toStringTag,{value:"Module"})),fm=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}]},Symbol.toStringTag,{value:"Module"})),gm=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}]},Symbol.toStringTag,{value:"Module"})),ym=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}]},Symbol.toStringTag,{value:"Module"})),bm=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}]},Symbol.toStringTag,{value:"Module"})),wm=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}]},Symbol.toStringTag,{value:"Module"})),Nm=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}]},Symbol.toStringTag,{value:"Module"})),xm=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}]},Symbol.toStringTag,{value:"Module"})),vm=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}]},Symbol.toStringTag,{value:"Module"})),Tm=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}]},Symbol.toStringTag,{value:"Module"})),Sm=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}]},Symbol.toStringTag,{value:"Module"})),km=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}]},Symbol.toStringTag,{value:"Module"})),Em=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}]},Symbol.toStringTag,{value:"Module"})),_m=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}]},Symbol.toStringTag,{value:"Module"})),Im=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}]},Symbol.toStringTag,{value:"Module"})),Am=Object.freeze(Object.defineProperty({__proto__:null,json:[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}]},Symbol.toStringTag,{value:"Module"}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Mm{static get Instance(){return this._instance||(this._instance=new this)}constructor(){const e=[].concat(...[pm,dm,hm,mm,fm,gm,ym,bm,wm,Nm,xm,vm,Tm,Sm,km,Em,_m,Im,Am].map((e=>e.json)));this.opMappers=e.reduce(((e,t)=>(e[t.tfOpName]=t,e)),{})}transformGraph(e,t={}){const n=e.node,r=[],s=[],a=[],o=n.reduce(((e,t)=>(e[t.name]=this.mapNode(t),t.op.startsWith("Placeholder")?r.push(e[t.name]):"Const"===t.op?s.push(e[t.name]):null!=t.input&&0!==t.input.length||a.push(e[t.name]),e)),{});let i=[];const u=[];let l={},c={};null!=t&&(l=this.mapSignatureEntries(t.inputs),c=this.mapSignatureEntries(t.outputs));const p=Object.keys(o);p.forEach((e=>{const t=o[e];t.inputNames.forEach(((e,n)=>{const[r,,s]=om(e),a=o[r];if(null!=a.outputs){const e=a.outputs.indexOf(s);if(-1!==e){const s=`${r}:${e}`;t.inputNames[n]=s}}t.inputs.push(a),a.children.push(t)}))})),0===Object.keys(c).length?p.forEach((e=>{const t=o[e];0===t.children.length&&u.push(t)})):Object.keys(c).forEach((e=>{const[t]=om(e),n=o[t];null!=n&&(n.signatureKey=c[e],u.push(n))})),Object.keys(l).length>0?Object.keys(l).forEach((e=>{const[t]=om(e),n=o[t];n&&(n.signatureKey=l[e],i.push(n))})):i=r;let d={};null!=e.library&&null!=e.library.function&&(d=e.library.function.reduce(((e,t)=>(e[t.signature.name]=this.mapFunction(t),e)),{}));const h={nodes:o,inputs:i,outputs:u,weights:s,placeholders:r,signature:t,functions:d};return a.length>0&&(h.initNodes=a),h}mapSignatureEntries(e){return Object.keys(e||{}).reduce(((t,n)=>(t[e[n].name]=n,t)),{})}mapNode(e){const t=tm(e.op)||this.opMappers[e.op]||{};null==e.attr&&(e.attr={});const n={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map((e=>e.startsWith("^")?e.slice(1):e)),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:t.outputs};return null!=t.inputs&&(n.inputParams=t.inputs.reduce(((e,t)=>(e[t.name]={type:t.type,inputIndexStart:t.start,inputIndexEnd:t.end},e)),{})),null!=t.attrs&&(n.attrParams=t.attrs.reduce(((t,n)=>{const r=n.type;let s;switch(n.type){case"string":s=Om(e.attr,n.tfName,n.defaultValue),void 0===s&&n.tfDeprecatedName&&(s=Om(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"string[]":s=Um(e.attr,n.tfName,n.defaultValue),void 0===s&&n.tfDeprecatedName&&(s=Um(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"number":s=Cm(e.attr,n.tfName,n.defaultValue||0),void 0===s&&n.tfDeprecatedName&&(s=Cm(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"number[]":s=Vm(e.attr,n.tfName,n.defaultValue),void 0===s&&n.tfDeprecatedName&&(s=Vm(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool":s=Dm(e.attr,n.tfName,n.defaultValue),void 0===s&&n.tfDeprecatedName&&(s=Dm(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool[]":s=Wm(e.attr,n.tfName,n.defaultValue),void 0===s&&n.tfDeprecatedName&&(s=Wm(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape":s=Pm(e.attr,n.tfName,n.defaultValue),void 0===s&&n.tfDeprecatedName&&(s=Pm(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape[]":s=jm(e.attr,n.tfName,n.defaultValue),void 0===s&&n.tfDeprecatedName&&(s=jm(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype":s=Bm(e.attr,n.tfName,n.defaultValue),void 0===s&&n.tfDeprecatedName&&(s=Bm(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype[]":s=zm(e.attr,n.tfName,n.defaultValue),void 0===s&&n.tfDeprecatedName&&(s=zm(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"func":s=Fm(e.attr,n.tfName,n.defaultValue),void 0===s&&n.tfDeprecatedName&&(s=Fm(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${n.type} for op: ${e.op}`)}return t[n.name]={value:s,type:r},t}),{})),n}mapFunction(e){const t=e.nodeDef,n=[];let r={};null!=t&&(r=t.reduce(((e,t)=>(e[t.name]=this.mapNode(t),"Const"===t.op&&n.push(e[t.name]),e)),{}));const s=[],a=[];e.signature.inputArg.forEach((e=>{const[t]=om(e.name),n={name:t,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:Rm(e.type),type:"dtype"}},children:[]};n.signatureKey=e.name,s.push(n),r[t]=n}));Object.keys(r).forEach((e=>{const t=r[e];t.inputNames.forEach(((e,n)=>{const[s,,a]=om(e),o=r[s];if(null!=o.outputs){const e=o.outputs.indexOf(a);if(-1!==e){const r=`${s}:${e}`;t.inputNames[n]=r}}t.inputs.push(o),o.children.push(t)}))}));const o=e.ret;e.signature.outputArg.forEach((e=>{const[t,n]=om(o[e.name]),s=r[t];null!=s&&(s.defaultOutput=n,a.push(s))}));const i=this.mapArgsToSignature(e);return{nodes:r,inputs:s,outputs:a,weights:n,placeholders:[],signature:i}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce(((e,t)=>(e[t.name]=this.mapArgToTensorInfo(t),e)),{}),outputs:e.signature.outputArg.reduce(((t,n)=>(t[n.name]=this.mapArgToTensorInfo(n,e.ret),t)),{})}}mapArgToTensorInfo(e,t){let n=e.name;return null!=t&&(n=t[n]),{name:n,dtype:e.type}}}function $m(e,t){const n=Array.isArray(e)?String.fromCharCode.apply(null,e):function(e){const t=Q().global;if(void 0!==t.atob)return t.atob(e);if("undefined"!=typeof Buffer)return new Buffer(e,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}(e);return t?n:n.toLowerCase()}function Om(e,t,n,r=!1){const s=e[t];return null!=s?$m(s.s,r):n}function Dm(e,t,n){const r=e[t];return r?r.b:n}function Cm(e,t,n){const r=e[t]||{},s=null!=r.i?r.i:null!=r.f?r.f:n;return"number"==typeof s?s:parseInt(s,10)}function Rm(e){switch("string"==typeof e&&(e=Hh[e]),e){case Hh.DT_FLOAT:case Hh.DT_HALF:return"float32";case Hh.DT_INT32:case Hh.DT_INT64:case Hh.DT_INT8:case Hh.DT_UINT8:return"int32";case Hh.DT_BOOL:return"bool";case Hh.DT_DOUBLE:return"float32";case Hh.DT_STRING:return"string";case Hh.DT_COMPLEX64:case Hh.DT_COMPLEX128:return"complex64";default:return null}}function Fm(e,t,n){const r=e[t];return r&&r.func?r.func.name:n}function Bm(e,t,n){const r=e[t];return r&&r.type?Rm(r.type):n}function zm(e,t,n){const r=e[t];return r&&r.list&&r.list.type?r.list.type.map((e=>Rm(e))):n}function Lm(e){if(!e.unknownRank)return null!=e.dim?e.dim.map((e=>"number"==typeof e.size?e.size:parseInt(e.size,10))):[]}function Pm(e,t,n){const r=e[t];return r&&r.shape?Lm(r.shape):n}function Vm(e,t,n){const r=e[t];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map((e=>"number"==typeof e?e:parseInt(e,10))):n}function Um(e,t,n,r=!1){const s=e[t];return s&&s.list&&s.list.s?s.list.s.map((e=>$m(e,r))):n}function jm(e,t,n){const r=e[t];return r&&r.list&&r.list.shape?r.list.shape.map((e=>Lm(e))):n}function Wm(e,t,n){const r=e[t];return r&&r.list&&r.list.b?r.list.b:n}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class qm{constructor(e,t,n){this.node=e,this.tensorMap=t,this.context=n,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map((e=>this.getInput(e))),null!=e.rawAttrs&&(this.attrs=Object.keys(e.rawAttrs).reduce(((e,t)=>(e[t]=this.getAttr(t),e)),{}))}getInput(e){return sm(e,this.tensorMap,this.context)}getAttr(e,t){const n=this.node.rawAttrs[e];if(null!=n.tensor)return sm(e,this.tensorMap,this.context);if(null!=n.i||null!=n.f)return Cm(this.node.rawAttrs,e,t);if(null!=n.s)return Om(this.node.rawAttrs,e,t);if(null!=n.b)return Dm(this.node.rawAttrs,e,t);if(null!=n.shape)return Pm(this.node.rawAttrs,e,t);if(null!=n.type)return Bm(this.node.rawAttrs,e,t);if(null!=n.list){if(null!=n.list.i||null!=n.list.f)return Vm(this.node.rawAttrs,e,t);if(null!=n.list.s)return Um(this.node.rawAttrs,e,t);if(null!=n.list.shape)return jm(this.node.rawAttrs,e,t);if(null!=n.list.b)return Wm(this.node.rawAttrs,e,t);if(null!=n.list.type)return zm(this.node.rawAttrs,e,t)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gm=Object.freeze(Object.defineProperty({__proto__:null,OP_SCOPE_SUFFIX:Ia,abs:oi,acos:ii,acosh:ui,add:ni,addN:li,all:ci,any:pi,argMax:di,argMin:hi,asin:mi,asinh:fi,atan:gi,atan2:yi,atanh:bi,avgPool:Ri,avgPool3d:Fi,basicLSTMCell:Ui,batchNorm:Wi,batchNorm2d:qi,batchNorm3d:Gi,batchNorm4d:Ki,batchToSpaceND:ji,bincount:Hi,bitwiseAnd:Ji,booleanMaskAsync:qp,broadcastArgs:Zi,broadcastTo:Yi,buffer:Xo,cast:Qo,ceil:Xi,clipByValue:eu,clone:ei,complex:Ma,concat:Bi,concat1d:tu,concat2d:nu,concat3d:ru,concat4d:su,conv1d:ou,conv2d:au,conv2dTranspose:uu,conv3d:lu,conv3dTranspose:pu,cos:du,cosh:hu,cosineWindow:Qp,cumprod:mu,cumsum:fu,denseBincount:gu,depthToSpace:yu,depthwiseConv2d:bu,diag:wu,dilation2d:Nu,div:si,divNoNan:Iu,dot:Au,dropout:Yp,einsum:Mu,elu:$u,enclosingPowerOfTwo:Xp,ensureShape:Ou,equal:ku,erf:Du,euclideanNorm:Yu,exp:Xu,expandDims:Qu,expm1:el,eye:nl,fft:mp,fill:Qi,floor:rl,floorDiv:ri,fused:pd,gather:sl,gatherND:Zp,greater:al,greaterEqual:ol,ifft:fp,imag:il,image:sh,inTopKAsync:ed,irfft:gp,isFinite:ul,isInf:ll,isNaN:cl,leakyRelu:pl,less:dl,lessEqual:hl,linalg:ah,linspace:ml,localResponseNormalization:fl,log:gl,log1p:yl,logSigmoid:_l,logSoftmax:Al,logSumExp:Ml,logicalAnd:$l,logicalNot:Ol,logicalOr:Dl,logicalXor:Cl,losses:oh,lowerBound:Bl,matMul:zi,max:Uu,maxPool:zl,maxPool3d:Ll,maxPoolWithArgmax:Pl,maximum:Vl,mean:Ul,meshgrid:ql,min:ju,minimum:Gl,mirrorPad:Kl,mod:Hl,moments:Jl,movingAverage:Kp,mul:ai,multiRNNCell:Zl,multinomial:Yl,neg:kl,norm:Zu,notEqual:Xl,oneHot:Ql,ones:Wl,onesLike:ec,op:Aa,outerProduct:tc,pad:nc,pad1d:rc,pad2d:sc,pad3d:ac,pad4d:oc,pool:uc,pow:Wu,prelu:lc,print:ti,prod:cc,raggedGather:pc,raggedRange:dc,raggedTensorToTensor:hc,rand:mc,randomGamma:Pc,randomNormal:Vc,randomStandardNormal:Uc,randomUniform:jc,randomUniformInt:Wc,range:qc,real:Gc,reciprocal:Kc,relu:Hc,relu6:Jc,reshape:Ci,reverse:Zc,reverse1d:Yc,reverse2d:Xc,reverse3d:Qc,reverse4d:ep,rfft:bp,round:tp,rsqrt:np,scalar:qu,scatterND:Hp,searchSorted:Fl,selu:rp,separableConv2d:sp,setdiff1dAsync:ap,sigmoid:Li,sign:op,signal:rh,sin:ip,sinh:up,slice:Pi,slice1d:lp,slice2d:cp,slice3d:pp,slice4d:dp,softmax:hp,softplus:El,spaceToBatchND:ic,sparse:ih,sparseToDense:Jp,spectral:nh,split:yp,sqrt:Gu,square:Ku,squaredDifference:wp,squeeze:Np,stack:xp,step:vp,stridedSlice:Tp,string:uh,sub:Il,sum:Hu,tan:Sp,tanh:Vi,tensor:Oa,tensor1d:kp,tensor2d:Ep,tensor3d:_p,tensor4d:Ip,tensor5d:Ap,tensor6d:Mp,tensorScatterUpdate:Rp,tile:tl,topk:Fp,transpose:Gp,truncatedNormal:Bp,unique:zp,unsortedSegmentSum:Lp,unstack:Pp,upperBound:Vp,variable:Up,where:Eu,whereAsync:Wp,zeros:jl,zerosLike:_u},Symbol.toStringTag,{value:"Module"}));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Km(e,t,n=""){if("number"!=typeof e&&"number"!=typeof t){h(e.length===t.length,(()=>n+` Shapes ${e} and ${t} must match`));for(let r=0;r<e.length;r++){const s=e[r],a=t[r];h(s<0||a<0||s===a,(()=>n+` Shapes ${e} and ${t} must match`))}}}function Hm(e){return"number"!=typeof e&&!e.some((e=>e<0))}function Jm(e,t,n){let r=Zm(e,n);const s=!Hm(r);if(s&&0===t.length)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(s&&t.forEach((e=>{r=Zm(e.shape,r)})),!Hm(r))throw new Error(`Non-fully-defined elementShape: ${r}`);return r}function Zm(e,t){if("number"==typeof e)return t;if("number"==typeof t)return e;if(e.length!==t.length)throw new Error(`Incompatible ranks during merge: ${e} vs. ${t}`);const n=[];for(let r=0;r<e.length;++r){const s=e[r],a=t[r];if(s>=0&&a>=0&&s!==a)throw new Error(`Incompatible shape during merge: ${e} vs. ${t}`);n[r]=s>=0?s:a}return n}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ym{constructor(e,t,n,r,s,a,o){this.name=e,this.dtype=t,this.maxSize=n,this.elementShape=r,this.identicalElementShapes=s,this.dynamicSize=a,this.clearAfterRead=o,this.tensors=[],this.closed_=!1,this.idTensor=qu(0),qa(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach((t=>{null!=e&&e.has(t.tensor.id)||t.tensor.dispose()})),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);const t=this.tensors[e];if(t.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor}readMany(e){return e.map((e=>this.read(e)))}write(e,t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);const n=this.tensors[e]||{};if(t.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},\n          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);if(0!==this.size()||null!=this.elementShape&&0!==this.elementShape.length||(this.elementShape=t.shape),Km(this.elementShape,t.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),n.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(n.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);n.tensor=t,qa(t),n.written=!0,this.tensors[e]=n}writeMany(e,t){if(e.length!==t.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);e.forEach(((e,n)=>this.write(e,t[n])))}gather(e,t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);if(e)e=e.slice(0,this.size());else{e=[];for(let t=0;t<this.size();t++)e.push(t)}if(0===e.length)return Oa([],[0].concat(this.elementShape));const n=this.readMany(e);return Km(this.elementShape,n[0].shape,"TensorArray shape mismatch: "),xp(n,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(0===this.size())return Oa([],[0].concat(this.elementShape));const t=[];for(let r=0;r<this.size();r++)t.push(r);const n=this.readMany(t);return Km(this.elementShape,n[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${n[0].shape})`),Bi(n,0)}scatter(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);const n=Math.max(...e);if(!this.dynamicSize&&n>=this.maxSize)throw new Error(`Max index must be < array size (${n}  vs. ${this.maxSize})`);this.writeMany(e,Pp(t,0))}split(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);let n=0;const r=e.map((e=>(n+=e,n)));if(n!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${n}, and tensor's shape is: ${t.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);const s=0===n?0:t.size/n,a=[];ja((()=>{t=Ci(t,[1,n,s]);for(let n=0;n<e.length;++n){const o=[0,0===n?0:r[n-1],0],i=[1,e[n],s];a[n]=Ci(Pi(t,o,i),this.elementShape)}return a}));const o=[];for(let i=0;i<e.length;i++)o[i]=i;this.writeMany(o,a)}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xm{get id(){return this.idTensor.id}constructor(e,t,n,r=-1){this.tensors=e,this.elementShape=t,this.elementDtype=n,null!=e&&e.forEach((e=>{if(n!==e.dtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${e.dtype}`);Km(t,e.shape,"TensorList shape mismatch: "),qa(e)})),this.idTensor=qu(0),this.maxNumElements=r,qa(this.idTensor)}copy(){return new Xm([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach((t=>{null!=e&&e.has(t.id)||t.dispose()})),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,t,n=-1){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(-1!==n&&this.tensors.length!==n)throw new Error(`Operation expected a list with ${n} elements but got a list with ${this.tensors.length} elements.`);Km(e,this.elementShape,"TensorList shape mismatch: ");const r=Jm(this.elementShape,this.tensors,e);return ja((()=>{const e=this.tensors.map((e=>Ci(e,r)));return xp(e,0)}))}popBack(e,t){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(0===this.size())throw new Error("Trying to pop from an empty list.");const n=Jm(this.elementShape,this.tensors,e),r=this.tensors.pop();return r.kept=!1,Km(r.shape,e,"TensorList shape mismatch: "),Ci(r,n)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(Km(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");qa(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(-1!==this.maxNumElements&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);const t=new Xm([],this.elementShape,this.elementDtype,this.maxNumElements);t.tensors.length=e;for(let n=0;n<Math.min(this.tensors.length,e);++n)t.tensors[n]=this.tensors[n];return t}getItem(e,t,n){if(n!==this.elementDtype)throw new Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(null==this.tensors[e])throw new Error(`element at index ${e} is null.`);Km(this.tensors[e].shape,t,"TensorList shape mismatch: ");const r=Jm(this.elementShape,this.tensors,t);return Ci(this.tensors[e],r)}setItem(e,t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(e<0||-1!==this.maxNumElements&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);Km(this.elementShape,t.shape,"TensorList shape mismatch: "),qa(t),null!=this.tensors[e]&&(this.tensors[e].kept=!1),this.tensors[e]=t}gather(e,t,n){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);Km(this.elementShape,n,"TensorList shape mismatch: "),e=e.slice(0,this.size());const r=Jm(this.elementShape,this.tensors,n);return 0===e.length?Oa([],[0].concat(r)):ja((()=>{const t=e.map((e=>Ci(this.tensors[e],r)));return xp(t,0)}))}concat(e,t){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);Km(this.elementShape,t,"TensorList shape mismatch: ");const n=Jm(this.elementShape,this.tensors,t);return 0===this.size()?Oa([],[0].concat(n)):ja((()=>{const e=this.tensors.map((e=>Ci(e,n)));return Bi(e,0)}))}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Qm=(t,n,r)=>e(void 0,null,(function*(){switch(t.op){case"If":case"StatelessIf":{const e=rm("thenBranch",t,n,r),s=rm("elseBranch",t,n,r),a=rm("cond",t,n,r),o=rm("args",t,n,r);return(yield a.data())[0]?r.functionMap[e].executeFunctionAsync(o,r.tensorArrayMap,r.tensorListMap):r.functionMap[s].executeFunctionAsync(o,r.tensorArrayMap,r.tensorListMap)}case"While":case"StatelessWhile":{const e=rm("body",t,n,r),s=rm("cond",t,n,r),a=rm("args",t,n,r),o=yield r.functionMap[s].executeFunctionAsync(a,r.tensorArrayMap,r.tensorListMap),i=a.map((e=>e.id));let u=yield o[0].data();o.forEach((e=>{e.kept||-1!==i.indexOf(e.id)||e.dispose()}));let l=a;for(;u[0];){const t=l;l=yield r.functionMap[e].executeFunctionAsync(l,r.tensorArrayMap,r.tensorListMap);const n=l.map((e=>e.id));t.forEach((e=>{e.kept||-1!==i.indexOf(e.id)||-1!==n.indexOf(e.id)||e.dispose()}));const a=yield r.functionMap[s].executeFunctionAsync(l,r.tensorArrayMap,r.tensorListMap);u=yield a[0].data(),a.forEach((e=>{e.kept||-1!==i.indexOf(e.id)||-1!==n.indexOf(e.id)||e.dispose()}))}return l}case"LoopCond":return[cm(rm("pred",t,n,r))];case"Switch":{const e=rm("pred",t,n,r);let s=rm("data",t,n,r);return s.kept||(s=cm(s)),(yield e.data())[0]?[void 0,s]:[s,void 0]}case"Merge":{const e=t.inputNames.find((e=>void 0!==sm(e,n,r)));if(e){return[cm(sm(e,n,r))]}return}case"Enter":{const e=rm("frameName",t,n,r),s=rm("tensor",t,n,r);return r.enterFrame(e),[cm(s)]}case"Exit":{const e=rm("tensor",t,n,r);return r.exitFrame(),[cm(e)]}case"NextIteration":{const e=rm("tensor",t,n,r);return r.nextIteration(),[cm(e)]}case"TensorArrayV3":{const e=rm("size",t,n,r),s=rm("dtype",t,n,r),a=rm("elementShape",t,n,r),o=rm("dynamicSize",t,n,r),i=rm("clearAfterRead",t,n,r),u=rm("identicalElementShapes",t,n,r),l=rm("name",t,n,r),c=new Ym(l,s,e,a,u,o,i);return r.addTensorArray(c),[c.idTensor,qu(1)]}case"TensorArrayWriteV3":{const e=rm("tensorArrayId",t,n,r),s=rm("index",t,n,r),a=rm("tensor",t,n,r),o=r.getTensorArray(e.id);return o.write(s,a),[o.idTensor]}case"TensorArrayReadV3":{const e=rm("tensorArrayId",t,n,r),s=rm("index",t,n,r);return[r.getTensorArray(e.id).read(s)]}case"TensorArrayGatherV3":{const e=rm("tensorArrayId",t,n,r),s=rm("indices",t,n,r),a=rm("dtype",t,n,r);return[r.getTensorArray(e.id).gather(s,a)]}case"TensorArrayScatterV3":{const e=rm("tensorArrayId",t,n,r),s=rm("indices",t,n,r),a=rm("tensor",t,n,r),o=r.getTensorArray(e.id);return o.scatter(s,a),[o.idTensor]}case"TensorArrayConcatV3":{const e=rm("tensorArrayId",t,n,r),s=r.getTensorArray(e.id),a=rm("dtype",t,n,r);return[s.concat(a)]}case"TensorArraySplitV3":{const e=rm("tensorArrayId",t,n,r),s=rm("tensor",t,n,r),a=rm("lengths",t,n,r),o=r.getTensorArray(e.id);return o.split(a,s),[o.idTensor]}case"TensorArraySizeV3":{const e=rm("tensorArrayId",t,n,r);return[qu(r.getTensorArray(e.id).size(),"int32")]}case"TensorArrayCloseV3":{const e=rm("tensorArrayId",t,n,r),s=r.getTensorArray(e.id);return s.clearAndClose(),[s.idTensor]}case"TensorListSetItem":{const e=rm("tensorListId",t,n,r),s=rm("index",t,n,r),a=rm("tensor",t,n,r),o=r.getTensorList(e.id);return o.setItem(s,a),[o.idTensor]}case"TensorListGetItem":{const e=rm("tensorListId",t,n,r),s=rm("index",t,n,r),a=rm("elementShape",t,n,r),o=rm("elementDType",t,n,r);return[r.getTensorList(e.id).getItem(s,a,o)]}case"TensorListScatterV2":case"TensorListScatter":{const e=rm("indices",t,n,r),s=function(e,t,n,r){if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);const s=Math.max(...t);if(null!=r&&-1!==r&&s>=r)throw new Error(`Max index must be < array size (${s}  vs. ${r})`);const a=new Xm([],n,e.dtype,r),o=Pp(e,0);return t.forEach(((e,t)=>{a.setItem(e,o[t])})),a}(rm("tensor",t,n,r),e,rm("elementShape",t,n,r),rm("numElements",t,n,r));return r.addTensorList(s),[s.idTensor]}case"TensorListReserve":case"EmptyTensorList":{const e=rm("elementShape",t,n,r),s=rm("elementDType",t,n,r);let a;a="TensorListReserve"===t.op?"numElements":"maxNumElements";const o=rm(a,t,n,r),i=function(e,t,n,r){return new Xm([],e,t,r)}(e,s,0,"TensorListReserve"===t.op?-1:o);return r.addTensorList(i),[i.idTensor]}case"TensorListGather":{const e=rm("tensorListId",t,n,r),s=rm("indices",t,n,r),a=rm("elementShape",t,n,r),o=rm("elementDType",t,n,r);return[r.getTensorList(e.id).gather(s,o,a)]}case"TensorListStack":{const e=rm("tensorListId",t,n,r),s=rm("elementShape",t,n,r),a=rm("elementDType",t,n,r),o=rm("numElements",t,n,r);return[r.getTensorList(e.id).stack(s,a,o)]}case"TensorListFromTensor":{const e=function(e,t,n){const r=e.dtype;if(e.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${e.shape}`);if(e.dtype!==n)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${n}`);Km(e.shape.slice(1),t,"TensorList shape mismatch: ");const s=Pp(e);return new Xm(s,t,r)}(rm("tensor",t,n,r),rm("elementShape",t,n,r),rm("elementDType",t,n,r));return r.addTensorList(e),[e.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{const e=rm("tensorListId",t,n,r),s=r.getTensorList(e.id),a=rm("dtype",t,n,r),o=rm("elementShape",t,n,r);return[s.concat(a,o)]}case"TensorListPushBack":{const e=rm("tensorListId",t,n,r),s=rm("tensor",t,n,r),a=r.getTensorList(e.id);return a.pushBack(s),[a.idTensor]}case"TensorListPopBack":{const e=rm("tensorListId",t,n,r),s=rm("elementShape",t,n,r),a=rm("elementDType",t,n,r);return[r.getTensorList(e.id).popBack(s,a)]}case"TensorListSplit":{const e=rm("tensor",t,n,r),s=rm("elementShape",t,n,r),a=function(e,t,n){let r=0;const s=t.map((e=>(r+=e,r)));if(r!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        ${r}, and tensor's shape is: ${e.shape}`);const a=Zm(e.shape.slice(1),n),o=0===r?0:e.size/r,i=ja((()=>{const n=[];e=Ci(e,[1,r,o]);for(let r=0;r<t.length;++r){const i=[0,0===r?0:s[r-1],0],u=[1,t[r],o];n[r]=Ci(Pi(e,i,u),a)}return e.dispose(),n})),u=new Xm([],n,e.dtype,t.length);for(let l=0;l<i.length;l++)u.setItem(l,i[l]);return u}(e,rm("lengths",t,n,r),s);return r.addTensorList(a),[a.idTensor]}case"TensorListLength":{const e=rm("tensorListId",t,n,r);return[qu(r.getTensorList(e.id).size(),"int32")]}case"TensorListResize":{const e=rm("tensorListId",t,n,r),s=rm("size",t,n,r),a=r.getTensorList(e.id).resize(s);return r.addTensorList(a),[a.idTensor]}default:throw TypeError(`Node type ${t.op} is not implemented`)}}))
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */;function ef(e,t,n){const[r,s]=rm("fusedOps",e,t,n),a="biasadd"===r,o=!a,i="prelu"===s,u="fusedbatchnorm"===r,l=rm("numArgs",e,t,n);if(a){if(i&&2!==l)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&a&&1!==l)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(u)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");const c=rm("strides",e,t,n),p=lm(e,t,n),d=rm("dataFormat",e,t,n).toUpperCase(),h=rm("dilations",e,t,n);let[m,f]=rm("args",e,t,n);o&&(f=m,m=void 0);return{stride:c,pad:p,dataFormat:d,dilations:h,biasArg:m,preluArg:f,activationFunc:s,leakyreluAlpha:rm("leakyreluAlpha",e,t,n)}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function tf(e,t,n){return{boxes:rm("boxes",e,t,n),scores:rm("scores",e,t,n),maxOutputSize:rm("maxOutputSize",e,t,n),iouThreshold:rm("iouThreshold",e,t,n),scoreThreshold:rm("scoreThreshold",e,t,n),softNmsSigma:rm("softNmsSigma",e,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class nf{get id(){return this.handle.id}constructor(e,t){this.keyDType=e,this.valueDType=t,this.handle=qu(0),this.tensorMap=new Map,qa(this.handle)}clearAndClose(){this.tensorMap.forEach((e=>e.dispose())),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return qu(this.size(),"int32")}import(t,n){return e(this,null,(function*(){this.checkKeyAndValueTensor(t,n);const e=yield t.data();return this.tensorMap.forEach((e=>e.dispose())),this.tensorMap.clear(),ja((()=>{const t=Pp(n),r=e.length,s=t.length;h(r===s,(()=>`The number of elements doesn't match, keys has ${r} elements, the values has ${s} elements.`));for(let n=0;n<r;n++){const r=e[n],s=t[n];qa(s),this.tensorMap.set(r,s)}return this.handle}))}))}find(t,n){return e(this,null,(function*(){this.checkKeyAndValueTensor(t,n);const e=yield t.data();return ja((()=>{const t=[];for(let r=0;r<e.length;r++){const s=e[r],a=this.findWithDefault(s,n);t.push(a)}return xp(t)}))}))}findWithDefault(e,t){const n=this.tensorMap.get(e);return null!=n?n:t}checkKeyAndValueTensor(e,t){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(t.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`)}}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function rf(t,n,r,s,a=ja){const o=((t,n,r)=>{switch(t.category){case"arithmetic":return a((()=>((e,t,n,r=Gm)=>{switch(e.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(rm("a",e,t,n),rm("b",e,t,n))];case"AddN":return[r.addN(rm("tensors",e,t,n))];case"FloorMod":case"Mod":return[r.mod(rm("a",e,t,n),rm("b",e,t,n))];case"Mul":return[r.mul(rm("a",e,t,n),rm("b",e,t,n))];case"RealDiv":case"Div":return[r.div(rm("a",e,t,n),rm("b",e,t,n))];case"DivNoNan":return[r.divNoNan(rm("a",e,t,n),rm("b",e,t,n))];case"FloorDiv":return[r.floorDiv(rm("a",e,t,n),rm("b",e,t,n))];case"Sub":return[r.sub(rm("a",e,t,n),rm("b",e,t,n))];case"Minimum":return[r.minimum(rm("a",e,t,n),rm("b",e,t,n))];case"Maximum":return[r.maximum(rm("a",e,t,n),rm("b",e,t,n))];case"Pow":return[r.pow(rm("a",e,t,n),rm("b",e,t,n))];case"SquaredDifference":return[r.squaredDifference(rm("a",e,t,n),rm("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}})(t,n,r)));case"basic_math":return a((()=>((e,t,n,r=Gm)=>{switch(e.op){case"Abs":case"ComplexAbs":return[r.abs(rm("x",e,t,n))];case"Acos":return[r.acos(rm("x",e,t,n))];case"Acosh":return[r.acosh(rm("x",e,t,n))];case"Asin":return[r.asin(rm("x",e,t,n))];case"Asinh":return[r.asinh(rm("x",e,t,n))];case"Atan":return[r.atan(rm("x",e,t,n))];case"Atan2":return[r.atan2(rm("x",e,t,n),rm("y",e,t,n))];case"Atanh":return[r.atanh(rm("x",e,t,n))];case"Ceil":return[r.ceil(rm("x",e,t,n))];case"Complex":return[r.complex(rm("real",e,t,n),rm("imag",e,t,n))];case"Cos":return[r.cos(rm("x",e,t,n))];case"Cosh":return[r.cosh(rm("x",e,t,n))];case"Elu":return[r.elu(rm("x",e,t,n))];case"Erf":return[r.erf(rm("x",e,t,n))];case"Exp":return[r.exp(rm("x",e,t,n))];case"Expm1":return[r.expm1(rm("x",e,t,n))];case"Floor":return[r.floor(rm("x",e,t,n))];case"Log":return[r.log(rm("x",e,t,n))];case"Log1p":return[r.log1p(rm("x",e,t,n))];case"Imag":return[r.imag(rm("x",e,t,n))];case"Neg":return[r.neg(rm("x",e,t,n))];case"Reciprocal":return[r.reciprocal(rm("x",e,t,n))];case"Real":return[r.real(rm("x",e,t,n))];case"Relu":return[r.relu(rm("x",e,t,n))];case"Round":return[r.round(rm("x",e,t,n))];case"Selu":return[r.selu(rm("x",e,t,n))];case"Sigmoid":return[r.sigmoid(rm("x",e,t,n))];case"Sin":return[r.sin(rm("x",e,t,n))];case"Sign":return[r.sign(rm("x",e,t,n))];case"Sinh":return[r.sinh(rm("x",e,t,n))];case"Softplus":return[r.softplus(rm("x",e,t,n))];case"Sqrt":return[r.sqrt(rm("x",e,t,n))];case"Square":return[r.square(rm("x",e,t,n))];case"Tanh":return[r.tanh(rm("x",e,t,n))];case"Tan":return[r.tan(rm("x",e,t,n))];case"ClipByValue":return[r.clipByValue(rm("x",e,t,n),rm("clipValueMin",e,t,n),rm("clipValueMax",e,t,n))];case"Relu6":return[r.relu6(rm("x",e,t,n))];case"Rsqrt":return[r.rsqrt(sm(e.inputNames[0],t,n))];case"LeakyRelu":return[r.leakyRelu(rm("x",e,t,n),rm("alpha",e,t,n))];case"Prelu":return[r.prelu(rm("x",e,t,n),rm("alpha",e,t,n))];case"IsNan":return[r.isNaN(sm(e.inputNames[0],t,n))];case"IsInf":return[r.isInf(sm(e.inputNames[0],t,n))];case"IsFinite":return[r.isFinite(sm(e.inputNames[0],t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}})(t,n,r)));case"control":return Qm(t,n,r);case"convolution":return a((()=>((e,t,n,r=Gm)=>{switch(e.op){case"Conv1D":{const s=rm("stride",e,t,n),a=rm("pad",e,t,n),o=rm("dataFormat",e,t,n).toUpperCase(),i=rm("dilation",e,t,n);return[r.conv1d(rm("x",e,t,n),rm("filter",e,t,n),s,a,o,i)]}case"Conv2D":{const s=rm("strides",e,t,n),a=lm(e,t,n),o=rm("dataFormat",e,t,n).toUpperCase(),i=rm("dilations",e,t,n);return[r.conv2d(rm("x",e,t,n),rm("filter",e,t,n),[s[1],s[2]],a,o,[i[1],i[2]])]}case"_FusedConv2D":{const{stride:s,pad:a,dataFormat:o,dilations:i,biasArg:u,preluArg:l,activationFunc:c,leakyreluAlpha:p}=ef(e,t,n);return[r.fused.conv2d({x:rm("x",e,t,n),filter:rm("filter",e,t,n),strides:[s[1],s[2]],pad:a,dataFormat:o,dilations:[i[1],i[2]],bias:u,activation:c,preluActivationWeights:l,leakyreluAlpha:p})]}case"FusedDepthwiseConv2dNative":{const{stride:s,pad:a,dataFormat:o,dilations:i,biasArg:u,preluArg:l,activationFunc:c,leakyreluAlpha:p}=ef(e,t,n);return[r.fused.depthwiseConv2d({x:rm("x",e,t,n),filter:rm("filter",e,t,n),strides:[s[1],s[2]],pad:a,dataFormat:o,dilations:[i[1],i[2]],bias:u,activation:c,preluActivationWeights:l,leakyreluAlpha:p})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{const s=rm("outputShape",e,t,n),a=rm("strides",e,t,n),o=lm(e,t,n);return[r.conv2dTranspose(rm("x",e,t,n),rm("filter",e,t,n),s,[a[1],a[2]],o)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{const s=rm("strides",e,t,n),a=lm(e,t,n),o=rm("dilations",e,t,n),i=rm("dataFormat",e,t,n).toUpperCase();return[r.depthwiseConv2d(rm("input",e,t,n),rm("filter",e,t,n),[s[1],s[2]],a,i,[o[1],o[2]])]}case"Conv3D":{const s=rm("strides",e,t,n),a=rm("pad",e,t,n),o=rm("dataFormat",e,t,n).toUpperCase(),i=rm("dilations",e,t,n);return[r.conv3d(rm("x",e,t,n),rm("filter",e,t,n),[s[1],s[2],s[3]],a,o,[i[1],i[2],i[3]])]}case"AvgPool":{const s=rm("strides",e,t,n),a=rm("pad",e,t,n),o=rm("kernelSize",e,t,n);return[r.avgPool(rm("x",e,t,n),[o[1],o[2]],[s[1],s[2]],a)]}case"MaxPool":{const s=rm("strides",e,t,n),a=rm("pad",e,t,n),o=rm("kernelSize",e,t,n);return[r.maxPool(rm("x",e,t,n),[o[1],o[2]],[s[1],s[2]],a)]}case"MaxPoolWithArgmax":{const s=rm("strides",e,t,n),a=rm("pad",e,t,n),o=rm("kernelSize",e,t,n),i=rm("includeBatchInIndex",e,t,n),{result:u,indexes:l}=r.maxPoolWithArgmax(rm("x",e,t,n),[o[1],o[2]],[s[1],s[2]],a,i);return[u,l]}case"AvgPool3D":{const s=rm("strides",e,t,n),a=rm("pad",e,t,n),o=rm("kernelSize",e,t,n);return[r.avgPool3d(rm("x",e,t,n),[o[1],o[2],o[3]],[s[1],s[2],s[3]],a)]}case"MaxPool3D":{const s=rm("strides",e,t,n),a=rm("pad",e,t,n),o=rm("kernelSize",e,t,n);return[r.maxPool3d(rm("x",e,t,n),[o[1],o[2],o[3]],[s[1],s[2],s[3]],a)]}case"Dilation2D":{const s=rm("strides",e,t,n),a=rm("pad",e,t,n),o=rm("dilations",e,t,n),i=s[1],u=s[2],l=o[1],c=o[2];return[r.dilation2d(rm("x",e,t,n),rm("filter",e,t,n),[i,u],a,[l,c],"NHWC")]}default:throw TypeError(`Node type ${e.op} is not implemented`)}})(t,n,r)));case"creation":return a((()=>((e,t,n,r=Gm)=>{switch(e.op){case"Fill":{const s=rm("shape",e,t,n),a=rm("dtype",e,t,n),o=rm("value",e,t,n);return[r.fill(s,o,a)]}case"LinSpace":{const s=rm("start",e,t,n),a=rm("stop",e,t,n),o=rm("num",e,t,n);return[r.linspace(s,a,o)]}case"Multinomial":{const s=rm("logits",e,t,n),a=rm("numSamples",e,t,n),o=rm("seed",e,t,n);return[r.multinomial(s,a,o)]}case"OneHot":{const s=rm("indices",e,t,n),a=rm("depth",e,t,n),o=rm("onValue",e,t,n),i=rm("offValue",e,t,n),u=rm("dtype",e,t,n);return[r.oneHot(s,a,o,i,u)]}case"Ones":return[r.ones(rm("shape",e,t,n),rm("dtype",e,t,n))];case"OnesLike":return[r.onesLike(rm("x",e,t,n))];case"RandomStandardNormal":return[r.randomStandardNormal(rm("shape",e,t,n),rm("dtype",e,t,n),rm("seed",e,t,n))];case"RandomUniform":return[r.randomUniform(rm("shape",e,t,n),rm("minval",e,t,n),rm("maxval",e,t,n),rm("dtype",e,t,n))];case"RandomUniformInt":return[r.randomUniformInt(rm("shape",e,t,n),rm("minval",e,t,n),rm("maxval",e,t,n),rm("seed",e,t,n))];case"Range":{const s=rm("start",e,t,n),a=rm("stop",e,t,n),o=rm("step",e,t,n);return[r.range(s,a,o,rm("dtype",e,t,n))]}case"TruncatedNormal":{const s=rm("shape",e,t,n),a=rm("mean",e,t,n),o=rm("stdDev",e,t,n),i=rm("seed",e,t,n);return[r.truncatedNormal(s,a,o,rm("dtype",e,t,n),i)]}case"Zeros":return[r.zeros(rm("shape",e,t,n),rm("dtype",e,t,n))];case"ZerosLike":return[r.zerosLike(rm("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}})(t,n,r)));case"dynamic":return((t,n,r,s,...a)=>e(void 0,[t,n,r,s,...a],(function*(e,t,n,r,s=Gm){switch(e.op){case"NonMaxSuppressionV5":{const{boxes:r,scores:a,maxOutputSize:o,iouThreshold:i,scoreThreshold:u,softNmsSigma:l}=tf(e,t,n),c=yield s.image.nonMaxSuppressionWithScoreAsync(r,a,o,i,u,l);return[c.selectedIndices,c.selectedScores]}case"NonMaxSuppressionV4":{const{boxes:r,scores:a,maxOutputSize:o,iouThreshold:i,scoreThreshold:u}=tf(e,t,n),l=rm("padToMaxOutputSize",e,t,n),c=yield s.image.nonMaxSuppressionPaddedAsync(r,a,o,i,u,l);return[c.selectedIndices,c.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{const{boxes:r,scores:a,maxOutputSize:o,iouThreshold:i,scoreThreshold:u}=tf(e,t,n);return[yield s.image.nonMaxSuppressionAsync(r,a,o,i,u)]}case"Where":{const r=s.cast(rm("condition",e,t,n),"bool"),a=[yield s.whereAsync(r)];return r.dispose(),a}case"ListDiff":return s.setdiff1dAsync(rm("x",e,t,n),rm("y",e,t,n));default:throw TypeError(`Node type ${e.op} is not implemented`)}})))
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */(t,n,r);case"evaluation":return a((()=>((e,t,n,r=Gm)=>{switch(e.op){case"LowerBound":{const s=rm("sortedSequence",e,t,n),a=rm("values",e,t,n);return[r.lowerBound(s,a)]}case"TopKV2":{const s=rm("x",e,t,n),a=rm("k",e,t,n),o=rm("sorted",e,t,n),i=r.topk(s,a,o);return[i.values,i.indices]}case"UpperBound":{const s=rm("sortedSequence",e,t,n),a=rm("values",e,t,n);return[r.upperBound(s,a)]}case"Unique":{const s=rm("x",e,t,n),a=r.unique(s);return[a.values,a.indices]}case"UniqueV2":{const s=rm("x",e,t,n),a=rm("axis",e,t,n),o=r.unique(s,a);return[o.values,o.indices]}default:throw TypeError(`Node type ${e.op} is not implemented`)}})(t,n,r)));case"image":return a((()=>((e,t,n,r=Gm)=>{switch(e.op){case"ResizeBilinear":{const s=rm("images",e,t,n),a=rm("size",e,t,n),o=rm("alignCorners",e,t,n),i=rm("halfPixelCenters",e,t,n);return[r.image.resizeBilinear(s,[a[0],a[1]],o,i)]}case"ResizeNearestNeighbor":{const s=rm("images",e,t,n),a=rm("size",e,t,n),o=rm("alignCorners",e,t,n),i=rm("halfPixelCenters",e,t,n);return[r.image.resizeNearestNeighbor(s,[a[0],a[1]],o,i)]}case"CropAndResize":{const s=rm("image",e,t,n),a=rm("boxes",e,t,n),o=rm("boxInd",e,t,n),i=rm("cropSize",e,t,n),u=rm("method",e,t,n),l=rm("extrapolationValue",e,t,n);return[r.image.cropAndResize(s,a,o,i,u,l)]}case"ImageProjectiveTransformV3":{const s=rm("images",e,t,n),a=rm("transforms",e,t,n),o=rm("outputShape",e,t,n),i=rm("fillValue",e,t,n),u=rm("interpolation",e,t,n),l=rm("fillMode",e,t,n);return[r.image.transform(s,a,u.toLowerCase(),l.toLowerCase(),i,o)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}})(t,n,r)));case"graph":return a((()=>((e,t,n,r=Gm)=>{switch(e.op){case"Const":return t[e.name];case"PlaceholderWithDefault":const s=rm("default",e,t,n);return[sm(e.name,t,n)||s];case"Placeholder":return[sm(e.name,t,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":case"Snapshot":return[cm(rm("x",e,t,n))];case"IdentityN":return rm("x",e,t,n).map((e=>cm(e)));case"Shape":return[r.tensor1d(rm("x",e,t,n).shape,"int32")];case"ShapeN":return rm("x",e,t,n).map((e=>r.tensor1d(e.shape)));case"Size":return[r.scalar(rm("x",e,t,n).size,"int32")];case"Rank":return[r.scalar(rm("x",e,t,n).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":const a=rm("x",e,t,n),o=rm("data",e,t,n),i=(rm("message",e,t,n),rm("summarize",e,t,n));console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance.");for(let e=0;e<o.length;e++)Array.prototype.slice.call(o[e].dataSync()).slice(0,i);return[a];default:throw TypeError(`Node type ${e.op} is not implemented`)}})(t,n,r)));case"logical":return a((()=>((e,t,n,r=Gm)=>{switch(e.op){case"Equal":return[r.equal(rm("a",e,t,n),rm("b",e,t,n))];case"NotEqual":return[r.notEqual(rm("a",e,t,n),rm("b",e,t,n))];case"Greater":return[r.greater(rm("a",e,t,n),rm("b",e,t,n))];case"GreaterEqual":return[r.greaterEqual(rm("a",e,t,n),rm("b",e,t,n))];case"Less":return[r.less(rm("a",e,t,n),rm("b",e,t,n))];case"LessEqual":return[r.lessEqual(rm("a",e,t,n),rm("b",e,t,n))];case"LogicalAnd":return[r.logicalAnd(rm("a",e,t,n),rm("b",e,t,n))];case"LogicalNot":return[r.logicalNot(rm("a",e,t,n))];case"LogicalOr":return[r.logicalOr(rm("a",e,t,n),rm("b",e,t,n))];case"Select":case"SelectV2":return[r.where(rm("condition",e,t,n),rm("a",e,t,n),rm("b",e,t,n))];case"BitwiseAnd":return[r.bitwiseAnd(rm("a",e,t,n),rm("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}})(t,n,r)));case"matrices":return a((()=>((e,t,n,r=Gm)=>{switch(e.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(rm("a",e,t,n),rm("b",e,t,n),rm("transposeA",e,t,n),rm("transposeB",e,t,n))];case"Einsum":return[r.einsum(rm("equation",e,t,n),...rm("tensors",e,t,n))];case"Transpose":return[r.transpose(rm("x",e,t,n),rm("perm",e,t,n))];case"_FusedMatMul":const[s,a]=rm("fusedOps",e,t,n),o="biasadd"===s,i="prelu"===a,u=rm("numArgs",e,t,n),l=rm("leakyreluAlpha",e,t,n);if(o){if(i&&2!==u)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&1!==u)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}const[c,p]=rm("args",e,t,n);return[r.fused.matMul({a:rm("a",e,t,n),b:rm("b",e,t,n),transposeA:rm("transposeA",e,t,n),transposeB:rm("transposeB",e,t,n),bias:c,activation:a,preluActivationWeights:p,leakyreluAlpha:l})];case"MatrixBandPart":return[r.linalg.bandPart(rm("a",e,t,n),rm("numLower",e,t,n),rm("numUpper",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}})(t,n,r)));case"normalization":return a((()=>((e,t,n,r=Gm)=>{switch(e.op){case"EuclideanNorm":return[r.euclideanNorm(rm("x",e,t,n),rm("axis",e,t,n),rm("keepDims",e,t,n))];case"FusedBatchNorm":case"FusedBatchNormV2":case"FusedBatchNormV3":return[r.batchNorm(rm("x",e,t,n),rm("mean",e,t,n),rm("variance",e,t,n),rm("offset",e,t,n),rm("scale",e,t,n),rm("epsilon",e,t,n))];case"LRN":return[r.localResponseNormalization(rm("x",e,t,n),rm("radius",e,t,n),rm("bias",e,t,n),rm("alpha",e,t,n),rm("beta",e,t,n))];case"Softmax":return[r.softmax(rm("x",e,t,n))];case"LogSoftmax":return[r.logSoftmax(rm("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}})(t,n,r)));case"ragged":return a((()=>((e,t,n,r=Gm)=>{switch(e.op){case"RaggedGather":{const{outputNestedSplits:s,outputDenseValues:a}=r.raggedGather(rm("paramsNestedSplits",e,t,n),rm("paramsDenseValues",e,t,n),rm("indices",e,t,n),rm("outputRaggedRank",e,t,n));return s.concat(a)}case"RaggedRange":{const{rtNestedSplits:s,rtDenseValues:a}=r.raggedRange(rm("starts",e,t,n),rm("limits",e,t,n),rm("splits",e,t,n));return[s,a]}case"RaggedTensorToTensor":return[r.raggedTensorToTensor(rm("shape",e,t,n),rm("values",e,t,n),rm("defaultValue",e,t,n),rm("rowPartitionTensors",e,t,n),rm("rowPartitionTypes",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}})(t,n,r)));case"reduction":return a((()=>((e,t,n,r=Gm)=>{switch(e.op){case"Max":{const s=rm("axis",e,t,n),a=rm("keepDims",e,t,n);return[r.max(rm("x",e,t,n),s,a)]}case"Mean":{const s=rm("axis",e,t,n),a=rm("keepDims",e,t,n);return[r.mean(rm("x",e,t,n),s,a)]}case"Min":{const s=rm("axis",e,t,n),a=rm("keepDims",e,t,n);return[r.min(rm("x",e,t,n),s,a)]}case"Sum":{const s=rm("axis",e,t,n),a=rm("keepDims",e,t,n);return[r.sum(rm("x",e,t,n),s,a)]}case"All":{const s=rm("axis",e,t,n),a=rm("keepDims",e,t,n);return[r.all(rm("x",e,t,n),s,a)]}case"Any":{const s=rm("axis",e,t,n),a=rm("keepDims",e,t,n);return[r.any(rm("x",e,t,n),s,a)]}case"ArgMax":{const s=rm("axis",e,t,n);return[r.argMax(rm("x",e,t,n),s)]}case"ArgMin":{const s=rm("axis",e,t,n);return[r.argMin(rm("x",e,t,n),s)]}case"Prod":{const s=rm("axis",e,t,n),a=rm("keepDims",e,t,n);return[r.prod(rm("x",e,t,n),s,a)]}case"Cumprod":{const s=rm("axis",e,t,n),a=rm("exclusive",e,t,n),o=rm("reverse",e,t,n);return[r.cumprod(rm("x",e,t,n),s,a,o)]}case"Cumsum":{const s=rm("axis",e,t,n),a=rm("exclusive",e,t,n),o=rm("reverse",e,t,n);return[r.cumsum(rm("x",e,t,n),s,a,o)]}case"Bincount":const s=rm("x",e,t,n),a=rm("weights",e,t,n),o=rm("size",e,t,n);return[r.bincount(s,a,o)];case"DenseBincount":{const s=rm("x",e,t,n),a=rm("weights",e,t,n),o=rm("size",e,t,n),i=rm("binaryOutput",e,t,n);return[r.denseBincount(s,a,o,i)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}})(t,n,r)));case"slice_join":return a((()=>((e,t,n,r=Gm)=>{switch(e.op){case"ConcatV2":case"Concat":{const s=rm("n",e,t,n),a=rm("axis",e,t,n);let o=rm("tensors",e,t,n);return o=o.slice(0,s),[r.concat(o,a)]}case"Gather":{const s=rm("x",e,t,n),a=rm("indices",e,t,n);return[r.gather(s,r.cast(a,"int32"),0)]}case"GatherV2":{const s=rm("axis",e,t,n),a=rm("batchDims",e,t,n),o=rm("x",e,t,n),i=rm("indices",e,t,n);return[r.gather(o,r.cast(i,"int32"),s,a)]}case"Reverse":{const s=rm("dims",e,t,n),a=[];for(let e=0;e<s.length;e++)s[e]&&a.push(e);const o=rm("x",e,t,n);return[r.reverse(o,a)]}case"ReverseV2":{const s=rm("axis",e,t,n),a=rm("x",e,t,n);return[r.reverse(a,s)]}case"Slice":{const s=rm("begin",e,t,n),a=rm("size",e,t,n);return[r.slice(rm("x",e,t,n),s,a)]}case"StridedSlice":{const s=rm("begin",e,t,n),a=rm("end",e,t,n),o=rm("strides",e,t,n),i=rm("beginMask",e,t,n),u=rm("endMask",e,t,n),l=rm("ellipsisMask",e,t,n),c=rm("newAxisMask",e,t,n),p=rm("shrinkAxisMask",e,t,n),d=rm("x",e,t,n);return[r.stridedSlice(d,s,a,o,i,u,l,c,p)]}case"Pack":return ja((()=>{const s=rm("axis",e,t,n),a=rm("tensors",e,t,n),o=a[0].shape,i=r.squeeze(a[0]).shape,u=a.map((e=>{const t=b(e.shape,o);if(!t&&!b(r.squeeze(e).shape,i))throw new Error("the input tensors shape does not match");return t?e:r.reshape(e,o)}));return[r.stack(u,s)]}));case"Unpack":{const s=rm("axis",e,t,n),a=rm("tensor",e,t,n);return r.unstack(a,s)}case"Tile":{const s=rm("reps",e,t,n);return[r.tile(rm("x",e,t,n),s)]}case"Split":case"SplitV":{const s=rm("axis",e,t,n),a=rm("numOrSizeSplits",e,t,n),o=rm("x",e,t,n);return r.split(o,a,s)}case"ScatterNd":{const s=rm("indices",e,t,n),a=rm("values",e,t,n),o=rm("shape",e,t,n);return[r.scatterND(s,a,o)]}case"GatherNd":{const s=rm("x",e,t,n),a=rm("indices",e,t,n);return[r.gatherND(s,a)]}case"SparseToDense":{const s=rm("sparseIndices",e,t,n),a=rm("outputShape",e,t,n),o=rm("sparseValues",e,t,n),i=rm("defaultValue",e,t,n);return[r.sparseToDense(s,o,a,o.dtype===i.dtype?i:r.cast(i,o.dtype))]}case"TensorScatterUpdate":{const s=rm("indices",e,t,n),a=rm("values",e,t,n),o=rm("tensor",e,t,n);return[r.tensorScatterUpdate(o,s,a)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}})(t,n,r)));case"sparse":return a((()=>((e,t,n,r=Gm)=>{switch(e.op){case"SparseFillEmptyRows":{const{outputIndices:s,outputValues:a,emptyRowIndicator:o,reverseIndexMap:i}=r.sparse.sparseFillEmptyRows(rm("indices",e,t,n),rm("values",e,t,n),rm("denseShape",e,t,n),rm("defaultValue",e,t,n));return[s,a,o,i]}case"SparseReshape":{const{outputIndices:s,outputShape:a}=r.sparse.sparseReshape(rm("inputIndices",e,t,n),rm("inputShape",e,t,n),rm("newShape",e,t,n));return[s,a]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(rm("data",e,t,n),rm("indices",e,t,n),rm("segmentIds",e,t,n))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(rm("data",e,t,n),rm("indices",e,t,n),rm("segmentIds",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}})(t,n,r)));case"spectral":return a((()=>((e,t,n,r=Gm)=>{switch(e.op){case"FFT":return[r.fft(rm("x",e,t,n))];case"IFFT":return[r.ifft(rm("x",e,t,n))];case"RFFT":return[r.rfft(rm("x",e,t,n))];case"IRFFT":return[r.irfft(rm("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}})(t,n,r)));case"string":return a((()=>((e,t,n,r=Gm)=>{switch(e.op){case"StaticRegexReplace":return[r.string.staticRegexReplace(rm("input",e,t,n),rm("pattern",e,t,n),rm("rewrite",e,t,n),rm("replaceGlobal",e,t,n))];case"StringNGrams":{const{nGrams:s,nGramsSplits:a}=r.string.stringNGrams(rm("data",e,t,n),rm("dataSplits",e,t,n),rm("separator",e,t,n),rm("nGramWidths",e,t,n),rm("leftPad",e,t,n),rm("rightPad",e,t,n),rm("padWidth",e,t,n),rm("preserveShortSequences",e,t,n));return[s,a]}case"StringSplit":{const{indices:s,values:a,shape:o}=r.string.stringSplit(rm("input",e,t,n),rm("delimiter",e,t,n),rm("skipEmpty",e,t,n));return[s,a,o]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(rm("input",e,t,n),rm("numBuckets",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}})(t,n,r)));case"transformation":return a((()=>((e,t,n,r=Gm)=>{switch(e.op){case"Cast":return[r.cast(rm("x",e,t,n),rm("dtype",e,t,n))];case"ExpandDims":{const s=rm("axis",e,t,n);return[r.expandDims(rm("x",e,t,n),s)]}case"Squeeze":{const s=rm("axis",e,t,n);return[r.squeeze(rm("x",e,t,n),s)]}case"Reshape":return[r.reshape(rm("x",e,t,n),rm("shape",e,t,n))];case"EnsureShape":return[r.ensureShape(rm("x",e,t,n),rm("shape",e,t,n))];case"MirrorPad":return[r.mirrorPad(rm("x",e,t,n),rm("padding",e,t,n),rm("mode",e,t,n))];case"PadV2":case"Pad":return[r.pad(rm("x",e,t,n),rm("padding",e,t,n),rm("constantValue",e,t,n))];case"SpaceToBatchND":{const s=rm("blockShape",e,t,n),a=rm("paddings",e,t,n);return[r.spaceToBatchND(rm("x",e,t,n),s,a)]}case"BatchToSpaceND":{const s=rm("blockShape",e,t,n),a=rm("crops",e,t,n);return[r.batchToSpaceND(rm("x",e,t,n),s,a)]}case"DepthToSpace":{const s=rm("blockSize",e,t,n),a=rm("dataFormat",e,t,n).toUpperCase();return[r.depthToSpace(rm("x",e,t,n),s,a)]}case"BroadcastTo":return[r.broadcastTo(rm("x",e,t,n),rm("shape",e,t,n))];case"BroadcastArgs":return[r.broadcastArgs(rm("s0",e,t,n),rm("s1",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}})(t,n,r)));case"hash_table":return((t,n,r,s)=>e(void 0,null,(function*(){switch(t.op){case"HashTable":case"HashTableV2":{const e=s.getHashTableHandleByName(t.name);if(null!=e)return[e];{const e=rm("keyDType",t,n,r),a=rm("valueDType",t,n,r),o=new nf(e,a);return s.addHashTable(t.name,o),[o.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{const e=rm("tableHandle",t,n,r,s),a=rm("keys",t,n,r),o=rm("values",t,n,r),i=s.getHashTableById(e.id);return[yield i.import(a,o)]}case"LookupTableFind":case"LookupTableFindV2":{const e=rm("tableHandle",t,n,r,s),a=rm("keys",t,n,r),o=rm("defaultValue",t,n,r),i=s.getHashTableById(e.id);return[yield i.find(a,o)]}case"LookupTableSize":case"LookupTableSizeV2":{const e=rm("tableHandle",t,n,r,s);return[s.getHashTableById(e.id).tensorSize()]}default:throw TypeError(`Node type ${t.op} is not implemented`)}})))
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */(t,n,r,s);case"custom":const o=tm(t.op);if(o&&o.customExecutor)return o.customExecutor(new qm(t,n,r));throw TypeError(`Custom op ${t.op} is not registered.`);default:throw TypeError(`Unknown op '${t.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(t,n,r);return J(o)?o.then((e=>[].concat(e))):[].concat(o)}class sf{constructor(e={},t={},n={},r={},s){this.weightMap=e,this.tensorArrayMap=t,this.tensorListMap=n,this.functionMap=r,this.parseNodeNameCache=s,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,t){return{id:e,frameName:t,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){const e=[];for(let t=0;t<this.contexts.length-1;t++){const n=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(n))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map((e=>0===e.id&&0===e.iterationId?"":`${e.frameName}-${e.iterationId}`)).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(!(this.contexts&&this.contexts.length>1))throw new Error("Cannot exit frame, the context is empty");this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift()}nextIteration(){if(!(this.contexts&&this.contexts.length>0))throw new Error("Cannot increase frame iteration, the context is empty");{this.contexts=this.contexts.slice(),this.lastId++;const e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(const t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose(e);for(const t in this.tensorListMap)this.tensorListMap[t].clearAndClose(e)}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function af(e,t,n,r){const s=new Set,a=[];let o=null,i=null;const u=new Set,l=new Set(Object.keys(e).map((e=>um(e)[0])));r=r||[];const c=new Set(r.map((e=>um(e.name)[0]))),p=[...t];for(;p.length>0;){const e=p.pop();(df(e)||hf(e)||mf(e))&&null==o&&(o=e,i=o.children.map((e=>e.name)).filter((e=>s.has(e)))),s.add(e.name),null==n[e.name]&&(l.has(e.name)||c.has(e.name)||(0!==e.inputs.length?e.inputs.forEach((e=>{u.has(e.name)||(u.add(e.name),p.push(e))})):a.push(e.name)))}return{inputs:e,outputs:t,usedNodes:s,missingInputs:a,dynamicNode:o,syncInputs:i}}function of(e,t){const{usedNodes:n,inputs:r}=t,s=Object.keys(r).map((e=>um(e)[0])).map((t=>e.nodes[t])),a=e.initNodes||[],o=e=>n.has("string"==typeof e?e:e.name);function i(e){return[...new Map(e.map((e=>[e.name,e]))).values()]}const u=i([...s,...e.weights,...a]).filter(o),l=i([...u,...Object.values(e.nodes)]).filter(o),c=new Map(l.map((e=>[e.name,e]))),p={};for(const f of l){p[f.name]=p[f.name]||0;for(const e of f.children)o(e)||(p[e.name]=Number.POSITIVE_INFINITY),p[e.name]=(p[e.name]||0)+1}const d=Object.entries(p).filter((([,e])=>0===e)).map((([e])=>e)),h=[...d];for(;d.length>0;){const e=d.pop(),t=c.get(e);for(const n of t.children.filter(o))0==--p[n.name]&&(h.push(n.name),d.push(n.name))}const m=function(e,t){const n=new Map(e.map((e=>[e.name,e]))),r=t.map((e=>e.name)),s=new Set(r);for(;r.length>0;){const e=r.pop(),t=n.get(e);for(const a of t.children)n.has(a.name)&&!s.has(a.name)&&(s.add(a.name),r.push(a.name))}const a=e.filter((e=>s.has(e.name)));return a}(h.map((e=>c.get(e))),u);return function(e,t){const n=new Map(e.map(((e,t)=>[e.name,t]))),r=new Set(t.map((e=>e.name))),s=e=>r.has("string"==typeof e?e:e.name),a=new Set(e.map((e=>e.name))),o=e=>a.has("string"==typeof e?e:e.name);for(const i of e){for(const e of i.children.filter(o)){if(!n.has(e.name))throw new uf(`Child ${e.name} of node ${i.name} is unreachable.`);if(n.get(i.name)>n.get(e.name))throw new uf(`Node ${i.name} is scheduled to run after its child ${e.name}.`)}if(!s(i))for(const e of i.inputs){if(!n.has(e.name))throw new uf(`Input ${e.name} of node ${i.name} is unreachable.`);if(n.get(e.name)>n.get(i.name))throw new uf(`Node ${i.name} is scheduled to run before its input ${e.name}.`)}}}(m,u),m}class uf extends Error{constructor(e){super(`NodesExecutionOrderError: ${e}`)}}const lf=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),cf=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),pf=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function df(e){return lf.has(e.op)}function hf(e){return cf.has(e.op)}function mf(e){return pf.has(e.op)}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ff{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){const t=Object.keys(e).map((t=>e[t].map((e=>e.id))));this._weightIds=[].concat(...t),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map((e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0})))}get outputs(){return this._outputs.map((e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0})))}get inputNodes(){return this._inputs.map((e=>e.signatureKey||e.name))}get outputNodes(){return this._outputs.map((e=>{const t=e.signatureKey||e.name;return e.defaultOutput?`${t}:${e.defaultOutput}`:t}))}get functions(){return Object.keys(this._functions).reduce(((e,t)=>(e[t]=this._functions[t].signature,e)),{})}constructor(e,t){this.graph=e,this.parent=t,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,null!=e.functions&&Object.keys(e.functions).forEach((t=>{this._functionExecutorMap[t]=new ff(e.functions[t],this)}))}getCompilationKey(e,t){const n=e.map((e=>e.name)).sort(),r=t.map((e=>e.name)).sort();return n.join(this.SEPARATOR)+"--"+r.join(this.SEPARATOR)}compile(e,t){const n=af(e,t,this.weightMap,this._initNodes),{missingInputs:r,dynamicNode:s,syncInputs:a}=n;if(null!=s)throw new Error(`This execution contains the node '${s.name}', which has the dynamic op '${s.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${a}]`);if(r.length>0){const n=t.map((e=>e.name)),s=Object.keys(e);throw new Error(`Cannot compute the outputs [${n}] from the provided inputs [${s}]. Missing the following inputs: [${r}]`)}const o=of(this.graph,n),i=function(e){const t=new Map(e.map(((e,t)=>[e.name,t]))),n=Number.MAX_SAFE_INTEGER,r=e.map(((e,t)=>df(e)?n:t)),s=e=>{const n=r[t.get(e.name)];return null==n?-1:n},a=e.map(((e,t)=>e.children.map(s).reduce(((e,t)=>Math.max(e,t)),r[t]))),o=new Map;for(let i=0;i<e.length;++i){const t=a[i];if(t===n)continue;const r=e[i],s=e[t];o.has(s.name)||o.set(s.name,[]),o.get(s.name).push(r)}return o}(o);return{orderedNodes:o,nodeLiveUntilMap:i}}cloneAndKeepTensor(e){if(null==e)return null;const t=e.clone();return qa(t),t}cloneTensorList(e){if(!e)return null;return e.map((e=>this.cloneAndKeepTensor(e)))}cloneTensorMap(e){return Object.fromEntries(Object.entries(e).map((([e,t])=>[e,this.cloneTensorList(t)])))}execute(e,t){this.disposeIntermediateTensors(),e=this.mapInputs(e);const n=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);const r=n.map((e=>this.graph.nodes[um(e)[0]])),s=t.map((e=>um(e)[0])),a=new Set(s);let o=s.map((e=>this.graph.nodes[e]));0===o.length&&(o=this._outputs);const i=this.getCompilationKey(r,o);let u=this.compiledMap.get(i);null==u&&(u=this.compile(e,o),this.compiledMap.set(i,u));try{this.keepIntermediateTensors=Q().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(vf){this.keepIntermediateTensors=!1,console.warn(vf.message)}const l={},c={};return ja((()=>{const n=new sf(this.weightMap,l,c,this.functionExecutorMap,this.parseNodeNameCache),r=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(e).forEach((t=>{const[s,a]=um(t,n),o=[];o[a]=e[t],r[s]=o,this.keepIntermediateTensors&&(this.clonedTensorsMap[s]=this.cloneTensorList(o))}));const s=this.getFrozenTensorIds(r),{orderedNodes:o,nodeLiveUntilMap:i}=u;for(const e of o){if(r[e.name])continue;const t=rf(e,r,n,this._resourceManager);if(J(t))throw new Error(`The execution of the op '${e.op}' returned a promise. Please use model.executeAsync() instead.`);r[e.name]=t,this.keepIntermediateTensors&&(this.clonedTensorsMap[e.name]=this.cloneTensorList(t)),this.checkTensorForDisposalWithNodeLiveUntilInfo(e,r,n,s,a,i.get(e.name))}return null==this.parent&&n.dispose(s),t.map((e=>sm(e,r,n)))}))}getFrozenTensorIds(e){const t=[].concat.apply([],Object.keys(e).map((t=>e[t])).map((e=>e.map((e=>e.id)))));return new Set(t)}checkTensorForDisposal(e,t,n,r,s,a,o){if(!df(t)&&!a.has(e)){for(const r of n[e])null!=r&&(o[r.id]=(o[r.id]||0)+t.children.length);for(const e of t.inputs){if(df(e))continue;const t=am(e.name,n,r);if(null!=t)for(const e of t){if(!e||e.kept||s.has(e.id))continue;const t=o[e.id];1===t?(e.dispose(),delete o[e.id]):null!=t&&o[e.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(e,t,n,r,s,a){var o;if(!df(e)&&null!=a)for(const i of a){if(df(o=i)||s.has(o.name))continue;const e=am(i.name,t,n);for(const t of e)!t||t.kept||r.has(t.id)||t.dispose()}}executeAsync(t,n){return e(this,null,(function*(){return this._executeAsync(t,n)}))}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach((e=>{for(const t of e)t&&!t.isDisposed&&t.dispose()})),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}_executeAsync(t,n){return e(this,arguments,(function*(e,t,n=!1,r={},s={}){this.disposeIntermediateTensors(),n||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t));try{this.keepIntermediateTensors=Q().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(vf){this.keepIntermediateTensors=!1,console.warn(vf.message)}const a=new sf(this.weightMap,r,s,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));const o=yield this.executeWithControlFlow(e,a,t,n),i=t.map((e=>sm(e,o,a))),u=i.map((e=>e.id)),l=Object.keys(e).map((t=>e[t].id)),c=new Set([...u,...l,...this.weightIds]);return Object.values(o).forEach((e=>{e.forEach((e=>{!e||e.isDisposed||c.has(e.id)||e.dispose()}))})),null==this.parent&&a.dispose(c),i}))}executeFunctionAsync(t,n,r){return e(this,null,(function*(){const e=t.reduce(((e,t,n)=>(e[this.inputs[n].name]=t,e)),{});return this._executeAsync(e,this.outputNodes,!0,n,r)}))}executeWithControlFlow(t,n,r,s){return e(this,null,(function*(){const e=Object.keys(t),a=e.map((e=>this.graph.nodes[um(e)[0]])),o=r.map((e=>um(e)[0])),i=new Set(o);let u=o.map((e=>this.graph.nodes[e]));0===u.length&&(u=this._outputs);const{usedNodes:l,missingInputs:c,dynamicNode:p,syncInputs:d}=af(t,u,this.weightMap,this._initNodes),h=[...a,...this.graph.weights,...this._initNodes||[]].map((e=>({node:e,contexts:n.currentContext}))),m=Object.assign({},this.weightMap);Object.keys(t).forEach((e=>{const[n,r]=um(e),s=[];s[r]=t[e],m[n]=s}));const f={},g=this.getFrozenTensorIds(m),y={};for(;h.length>0;){const e=this.processStack(a,h,n,m,y,g,i,f,l);yield Promise.all(e)}null!=p||s||console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");const b=u.filter((e=>!df(e)&&!sm(e.name,m,n))).map((e=>e.name));if(b.length>0){let t="";throw null!=p&&(t=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${d}]`),new Error(`Cannot compute the outputs [${b}] from the provided inputs [${e}]. Consider providing the following inputs: [${c}]. ${t}`)}return m}))}processStack(e,t,n,r,s,a,o,i,u){const l=[];for(;t.length>0;){const e=t.pop();n.currentContext=e.contexts;let c="";if("Enter"===e.node.op&&rm("isConstant",e.node,r,n)&&([c]=om(e.node.name,n)),null==r[e.node.name]){const p=rf(e.node,r,n,this._resourceManager);c||([c]=om(e.node.name,n));const d=n.currentContext;J(p)?l.push(p.then((l=>(r[c]=l,this.keepIntermediateTensors&&(this.clonedTensorsMap[c]=this.cloneTensorList(l)),n.currentContext=d,this.checkTensorForDisposal(c,e.node,r,n,a,o,i),this.processChildNodes(e.node,t,n,r,s,u),l)))):(r[c]=p,this.keepIntermediateTensors&&(this.clonedTensorsMap[c]=this.cloneTensorList(p)),this.checkTensorForDisposal(c,e.node,r,n,a,o,i),this.processChildNodes(e.node,t,n,r,s,u))}else this.processChildNodes(e.node,t,n,r,s,u)}return l}processChildNodes(e,t,n,r,s,a){e.children.forEach((e=>{const[o]=om(e.name,n);!s[o]&&a.has(e.name)&&("Merge"===e.op?e.inputNames.some((e=>!!sm(e,r,n)))&&(s[o]=!0,t.push({contexts:n.currentContext,node:e})):e.inputNames.every((e=>!!sm(e,r,n)))&&(s[o]=!0,t.push({contexts:n.currentContext,node:e})))}))}dispose(){Object.keys(this.weightMap).forEach((e=>this.weightMap[e].forEach((e=>e.dispose()))))}checkInputShapeAndType(e){Object.keys(e).forEach((t=>{const n=e[t],[r]=um(t),s=this.graph.nodes[r];if(s.attrParams.shape&&s.attrParams.shape.value){const e=s.attrParams.shape.value;h(e.length===n.shape.length&&n.shape.every(((t,n)=>-1===e[n]||e[n]===t)),(()=>`The shape of dict['${s.name}'] provided in model.execute(dict) must be [${e}], but was [${n.shape}]`))}s.attrParams.dtype&&s.attrParams.dtype.value&&h(n.dtype===s.attrParams.dtype.value,(()=>`The dtype of dict['${s.name}'] provided in model.execute(dict) must be ${s.attrParams.dtype.value}, but was ${n.dtype}`))}))}mapInputs(e){var t,n;const r={};for(const s in e){const a=null===(n=null===(t=this._signature)||void 0===t?void 0:t.inputs)||void 0===n?void 0:n[s];null!=a?r[a.name]=e[s]:r[s]=e[s]}return r}checkInputs(e){const t=Object.keys(e).filter((e=>{const[t]=um(e);return null==this.graph.nodes[t]}));if(t.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`)}mapOutputs(e){return e.map((e=>{var t,n;const r=null===(n=null===(t=this._signature)||void 0===t?void 0:t.outputs)||void 0===n?void 0:n[e];return null!=r?r.name:e}),{})}checkOutputs(e){e.forEach((e=>{const[t]=um(e);if(!this.graph.nodes[t])throw new Error(`The output '${e}' is not found in the graph`)}))}}class gf{constructor(e={},t={}){this.hashTableNameToHandle=e,this.hashTableMap=t}addHashTable(e,t){this.hashTableNameToHandle[e]=t.handle,this.hashTableMap[t.id]=t}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(const e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(const e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yf="?tfjs-format=file",bf="model.json";class wf{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(e,t={},n=Ph){this.modelUrl=e,this.loadOptions=t,this.version="n/a",this.io=n,null==t&&(this.loadOptions={}),this.resourceManager=new gf}findIOHandler(){const e=this.modelUrl;if(null!=e.load)this.handler=e;else if(null!=this.loadOptions.requestInit)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{const t=this.io.getLoadHandlers(e,this.loadOptions);if(0===t.length)t.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw new Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);this.handler=t[0]}}load(){if(this.findIOHandler(),null==this.handler.load)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");const e=this.handler.load();return J(e)?e.then((e=>null==e.getWeightStream?this.loadSync(e):this.loadStreaming(e))):this.loadSync(e)}loadSync(e){const t=this.io.decodeWeights(e.weightData,e.weightSpecs);return this.loadWithWeightMap(e,t)}loadStreaming(t){return e(this,null,(function*(){if(null==t.getWeightStream)throw new Error("Model artifacts missing streamWeights function");const e=yield uo(t.getWeightStream(),t.weightSpecs);return this.loadWithWeightMap(t,e)}))}loadWithWeightMap(e,t){this.artifacts=e;const n=this.artifacts.modelTopology;let r=this.artifacts.signature;if(null!=this.artifacts.userDefinedMetadata){const e=this.artifacts.userDefinedMetadata;null!=e.signature&&(r=e.signature),null!=e.structuredOutputKeys&&(this.structuredOutputKeys=e.structuredOutputKeys)}if(this.signature=r,this.version=`${n.versions.producer}.${n.versions.minConsumer}`,this.executor=new ff(Mm.Instance.transformGraph(n,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(t),this.executor.resourceManager=this.resourceManager,null!=e.modelInitializer&&null!=e.modelInitializer.node){const t=Mm.Instance.transformGraph(e.modelInitializer);this.initializer=new ff(t),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=e.initializerSignature}return!0}save(t,n){return e(this,null,(function*(){if("string"==typeof t){const e=this.io.getSaveHandlers(t);if(0===e.length)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(e.length>1)throw new Error(`Found more than one (${e.length}) save handlers for URL '${t}'`);t=e[0]}if(null==t.save)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}))}addStructuredOutputNames(e){if(this.structuredOutputKeys){const t={};return(e instanceof Us?[e]:e).forEach(((e,n)=>t[this.structuredOutputKeys[n]]=e)),t}return e}predict(e,t){const n=this.execute(e,this.outputNodes);return this.addStructuredOutputNames(n)}predictAsync(t,n){return e(this,null,(function*(){const e=yield this.executeAsync(t,this.outputNodes);return this.addStructuredOutputNames(e)}))}normalizeInputs(e){var t;if(!(e instanceof Us||Array.isArray(e))){const n=null===(t=this.signature)||void 0===t?void 0:t.inputs;if(null!=n)for(const t in n){const r=n[t];null!=r.resourceId&&(e[t]=this.resourceIdToCapturedInput[r.resourceId])}return e}e=Array.isArray(e)?e:[e];const n=Object.keys(this.resourceIdToCapturedInput).length;if(e.length+n!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-n} non-resource placeholders, while there are ${e.length} input tensors provided.`);let r=0;return this.inputNodes.reduce(((t,n)=>{var s,a,o;const i=null===(o=null===(a=null===(s=this.signature)||void 0===s?void 0:s.inputs)||void 0===a?void 0:a[n])||void 0===o?void 0:o.resourceId;return t[n]=null!=i?this.resourceIdToCapturedInput[i]:e[r++],t}),{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}executeInitializerGraph(){return null==this.initializer?[]:null==this.initializerSignature?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}executeInitializerGraphAsync(){return e(this,null,(function*(){return null==this.initializer?[]:null==this.initializerSignature?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}))}setResourceIdToCapturedInput(e){if(this.resourceIdToCapturedInput={},this.initializerSignature){const t=this.initializerSignature.outputs,n=Object.keys(t);for(let r=0;r<n.length;r++){const s=t[n[r]];this.resourceIdToCapturedInput[s.resourceId]=e[r]}}}execute(e,t){null==this.resourceIdToCapturedInput&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);const n=this.executor.execute(e,t);return n.length>1?n:n[0]}executeAsync(t,n){return e(this,null,(function*(){null==this.resourceIdToCapturedInput&&this.setResourceIdToCapturedInput(yield this.executeInitializerGraphAsync()),t=this.normalizeInputs(t),n=this.normalizeOutputs(n);const e=yield this.executor.executeAsync(t,n);return e.length>1?e:e[0]}))}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce(((t,n)=>(t[n]=[e[n]],t)),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&Wa(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}function Nf(t){return e(this,arguments,(function*(e,t={},n=Ph){if(null==e)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");null==t&&(t={}),t.fromTFHub&&"string"==typeof e&&(e=function(e){e.endsWith("/")||(e+="/");return`${e}${bf}${yf}`}(e));const r=new wf(e,t,n);return yield r.load(),r}))}function xf(e){if(null==e)throw new Error("modelUrl in loadGraphModelSync() cannot be null. Please provide model artifacts or an IOHandler that loads the model");let t;if(e instanceof Array){const[n,r]=e;if(!n)throw new Error("modelJSON must be the first element of the array");if(!(r&&r instanceof ArrayBuffer))throw new Error("An ArrayBuffer of weights must be the second element of the array");if(!("modelTopology"in n))throw new Error("Model JSON is missing 'modelTopology'");if(!("weightsManifest"in n))throw new Error("Model JSON is missing 'weightsManifest'");t=Lh(go(n,wo(n.weightsManifest),r))}else if("load"in e)t=e;else{if(!("modelTopology"in e&&"weightSpecs"in e&&"weightData"in e))throw new Error("Unknown model format");t=Lh(e)}const n=new wf(t);return n.load(),n}export{Ai as $,bh as A,Di as B,Ru as C,vi as D,ga as E,Ti as F,Si as G,wi as H,Fu as I,Ni as J,xi as K,Oi as L,xh as M,Mi as N,Bu as O,Lu as P,xu as Q,vh as R,Nh as S,rd as T,nd as U,Vu as V,vu as W,Pu as X,Sr as Y,ad as Z,$i as _,Ta as a,je as a$,na as a0,Op as a1,$p as a2,Tr as a3,kd as a4,Ed as a5,_d as a6,jp as a7,se as a8,ai as a9,ve as aA,Te as aB,ic as aC,Ee as aD,Ie as aE,Ae as aF,Me as aG,Eu as aH,$l as aI,ol as aJ,hl as aK,Oe as aL,De as aM,S as aN,yp as aO,Ce as aP,iu as aQ,td as aR,Fe as aS,au as aT,ze as aU,Be as aV,cu as aW,Pe as aX,ip as aY,Ve as aZ,up as a_,vp as aa,ae as ab,Ku as ac,Gu as ad,Il as ae,qu as af,kl as ag,si as ah,oe as ai,ie as aj,Hu as ak,Ci as al,ue as am,pe as an,_u as ao,de as ap,he as aq,me as ar,ni as as,ye as at,fe as au,ge as av,xe as aw,Ne as ax,we as ay,be as az,b,mu as b$,fu as b0,Ke as b1,ud as b2,id as b3,Ye as b4,Xe as b5,Qe as b6,rt as b7,st as b8,at as b9,Ut as bA,dl as bB,Gt as bC,qt as bD,Wt as bE,jt as bF,Ht as bG,Wl as bH,Jt as bI,Zt as bJ,Yt as bK,Pi as bL,Xt as bM,rl as bN,en as bO,tn as bP,un as bQ,jl as bR,on as bS,ln as bT,Pp as bU,cn as bV,dn as bW,Wu as bX,gl as bY,hn as bZ,mn as b_,Xu as ba,it as bb,ut as bc,lt as bd,ht as be,mt as bf,ft as bg,np as bh,tl as bi,gt as bj,Lp as bk,xp as bl,wt as bm,Nt as bn,Tt as bo,St as bp,kt as bq,Et as br,al as bs,$t as bt,Mt as bu,Ft as bv,Lt as bw,zt as bx,ku as by,Vt as bz,D as c,Yi as c$,tt as c0,Nn as c1,_n as c2,xn as c3,vn as c4,kn as c5,En as c6,Tn as c7,Sn as c8,In as c9,jn as cA,or as cB,ir as cC,ur as cD,pr as cE,hr as cF,mr as cG,Vl as cH,sl as cI,Qu as cJ,gr as cK,$r as cL,js as cM,oi as cN,ii as cO,ui as cP,ci as cQ,pi as cR,di as cS,hi as cT,mi as cU,fi as cV,gi as cW,yi as cX,bi as cY,Ri as cZ,Wi as c_,Zc as ca,An as cb,Mn as cc,Cn as cd,Ol as ce,Rn as cf,Pn as cg,Ln as ch,Bn as ci,du as cj,zn as ck,hu as cl,Fn as cm,nc as cn,Gn as co,Vn as cp,Li as cq,Wn as cr,ji as cs,qn as ct,Bi as cu,Un as cv,Qn as cw,Xn as cx,yr as cy,ar as cz,Ea as d,eo as d$,Xi as d0,eu as d1,Us as d2,ou as d3,uu as d4,yu as d5,bu as d6,Nu as d7,Iu as d8,Au as d9,Hl as dA,Zu as dB,Xl as dC,ec as dD,uc as dE,lc as dF,cc as dG,Kc as dH,Hc as dI,Jc as dJ,Bd as dK,zd as dL,bp as dM,tp as dN,rp as dO,sp as dP,op as dQ,hp as dR,El as dS,wp as dT,Np as dU,Tp as dV,Sp as dW,Vi as dX,Fp as dY,zp as dZ,Ss as d_,$u as da,Du as db,Yu as dc,el as dd,mp as de,ri as df,fp as dg,gp as dh,ul as di,ll as dj,cl as dk,pl as dl,fl as dm,_l as dn,Al as dp,Ml as dq,yl as dr,Dl as ds,Cl as dt,zl as du,Uu as dv,Ul as dw,ju as dx,Gl as dy,Kl as dz,Es as e,H as e$,ja as e0,dp as e1,pp as e2,cp as e3,lp as e4,Vc as e5,cd as e6,kp as e7,su as e8,ru as e9,ro as eA,pu as eB,sh as eC,od as eD,lu as eE,Jl as eF,qi as eG,Gi as eH,Ki as eI,Ll as eJ,Fi as eK,Oa as eL,qc as eM,gu as eN,J as eO,la as eP,ua as eQ,Fc as eR,Ep as eS,Gh as eT,ks as eU,o as eV,a as eW,Pa as eX,U as eY,Xo as eZ,E as e_,nu as ea,tu as eb,Yp as ec,hh as ed,jc as ee,Bp as ef,nl as eg,ah as eh,ph as ei,dh as ej,Up as ek,Wa as el,Va as em,Q as en,R as eo,qa as ep,Qi as eq,ei as er,fh as es,u as et,xo as eu,no as ev,ho as ew,Ah as ex,vo as ey,Rh as ez,As as f,$n as f$,K as f0,$e as f1,W as f2,wn as f3,Ts as f4,M as f5,ke as f6,_ as f7,ot as f8,bt as f9,V as fA,q as fB,et as fC,nt as fD,ct as fE,pt as fF,F as fG,dt as fH,xr as fI,vr as fJ,yt as fK,xt as fL,At as fM,Ot as fN,Dt as fO,Ct as fP,Kt as fQ,Qt as fR,rn as fS,sn as fT,an as fU,m as fV,fn as fW,gn as fX,yn as fY,bn as fZ,wr as f_,_t as fa,It as fb,vs as fc,nn as fd,Ls as fe,er as ff,xs as fg,p as fh,Qa as fi,T as fj,Nr as fk,le as fl,ce as fm,Se as fn,_e as fo,vt as fp,Re as fq,Le as fr,We as fs,Ue as ft,j as fu,qe as fv,Ge as fw,He as fx,Je as fy,Ze as fz,h as g,Bl as g$,Dn as g0,Kn as g1,Hn as g2,Jn as g3,Zn as g4,Yn as g5,tr as g6,nr as g7,rr as g8,sr as g9,qs as gA,qd as gB,Tl as gC,bl as gD,wl as gE,Nl as gF,xl as gG,vl as gH,Y as gI,te as gJ,oh as gK,nh as gL,pd as gM,rh as gN,ih as gO,uh as gP,li as gQ,Ui as gR,Hi as gS,Ji as gT,Zi as gU,Ma as gV,wu as gW,Mu as gX,Ou as gY,il as gZ,ml as g_,On as ga,lr as gb,cr as gc,dr as gd,Mr as ge,N as gf,x as gg,c as gh,k as gi,wa as gj,v as gk,d as gl,$ as gm,Na as gn,w as go,ra as gp,br as gq,Kh as gr,Ph as gs,mh as gt,Ms as gu,Su as gv,pa as gw,Cp as gx,xa as gy,Ws as gz,Ql as h,pn as h$,Pl as h0,ql as h1,Zl as h2,Yl as h3,tc as h4,rc as h5,sc as h6,ac as h7,oc as h8,ti as h9,Zp as hA,Xp as hB,Qp as hC,ed as hD,Ra as hE,Fa as hF,Ba as hG,za as hH,La as hI,Ua as hJ,Ga as hK,Ka as hL,Ha as hM,Ja as hN,Za as hO,Ya as hP,Xa as hQ,to as hR,_r as hS,Ir as hT,Ar as hU,Or as hV,Dr as hW,Cr as hX,Rt as hY,Bt as hZ,Pt as h_,pc as ha,dc as hb,hc,mc as hd,Pc as he,Uc as hf,Wc as hg,Gc as hh,Yc as hi,Xc as hj,Qc as hk,ep as hl,ap as hm,_p as hn,Ip as ho,Ap as hp,Mp as hq,Rp as hr,Vp as hs,Wp as ht,Ia as hu,qp as hv,Kp as hw,Hp as hx,Fl as hy,Jp as hz,Is as i,fr as i0,wf as i1,Nf as i2,xf as i3,nm as i4,em as i5,Qo as j,L as k,l,zi as m,gh as n,Aa as o,wh as p,yh as q,z as r,g as s,Gp as t,_s as u,sd as v,Tu as w,zu as x,Cu as y,Dp as z};
