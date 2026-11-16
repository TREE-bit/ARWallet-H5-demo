import{eS as t,e7 as n,ah as e,bL as r,e0 as o,eC as i,a9 as a,ae as s,dU as u,cq as c,as as l,d2 as h,eT as f,cJ as p,j as d,i2 as b,ea as v,cu as m,al as y}from"./graph_model-114d69ed.js";import"./vant-5c9c8dfc.js";import"./vue-vendor-fa589de8.js";import"./vendor-f10e4ea9.js";
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
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function w(t,n,e,r){return new(e||(e=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(n){i(n)}}function s(t){try{u(r.throw(t))}catch(n){i(n)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,s)}u((r=r.apply(t,n||[])).next())}))}function g(t,n){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(s){i=[6,s],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
 */var x=function(t){return{startEndTensor:t,startPoint:r(t,[0,0],[-1,2]),endPoint:r(t,[0,2],[-1,2])}},k={strides:[8,16],anchors:[2,6]};function z(t,e){var i,u,c;if(t.topLeft instanceof h&&t.bottomRight instanceof h){var l=o((function(){return[m([r(s(e-1,t.topLeft),0,1),r(t.topLeft,1,1)]),m([s(e-1,r(t.bottomRight,0,1)),r(t.bottomRight,1,1)])]}));i=l[0],u=l[1],null!=t.landmarks&&(c=o((function(){var r=s(n([e-1,0]),t.landmarks),o=n([1,-1]);return a(r,o)})))}else{var f=t.topLeft,p=f[0],d=f[1],b=t.bottomRight,v=b[0],y=b[1];i=[e-1-p,d],u=[e-1-v,y],null!=t.landmarks&&(c=t.landmarks.map((function(t){return[e-1-t[0],t[1]]})))}var w={topLeft:i,bottomRight:u};return null!=c&&(w.landmarks=c),null!=t.probability&&(w.probability=t.probability instanceof h?t.probability.clone():t.probability),w}function T(t,n){return o((function(){var e;return e=t.hasOwnProperty("box")?t.box:t,u(function(t,n){var e=a(t.startPoint,n),r=a(t.endPoint,n),o=v([e,r],1);return x(o)}(e,n).startEndTensor)}))}var P=function(){function b(e,r,o,i,a,s){this.blazeFaceModel=e,this.width=r,this.height=o,this.maxFaces=i,this.anchorsData=function(t,n,e){for(var r=[],o=0;o<e.strides.length;o++)for(var i=e.strides[o],a=Math.floor((n+i-1)/i),s=Math.floor((t+i-1)/i),u=e.anchors[o],c=0;c<a;c++)for(var l=i*(c+.5),h=0;h<s;h++)for(var f=i*(h+.5),p=0;p<u;p++)r.push([f,l]);return r}(r,o,k),this.anchors=t(this.anchorsData),this.inputSizeData=[r,o],this.inputSize=n([r,o]),this.iouThreshold=a,this.scoreThreshold=s}return b.prototype.getBoundingBoxes=function(n,f,p){return void 0===p&&(p=!0),w(this,void 0,void 0,(function(){var d,b,m,k,z,T,P,S,F,L,R,j,D,M,B=this;return g(this,(function(E){switch(E.label){case 0:return d=o((function(){var t,o,h,f,p,d,b,m,y,w,g,x,k,z=i.resizeBilinear(n,[B.width,B.height]),T=a(s(e(z,255),.5),2),P=B.blazeFaceModel.predict(T),S=u(P),F=(t=S,o=B.anchors,h=B.inputSize,f=r(t,[0,1],[-1,2]),p=l(f,o),d=r(t,[0,3],[-1,2]),b=e(d,h),m=e(p,h),y=e(b,2),w=s(m,y),g=l(m,y),x=a(w,h),k=a(g,h),v([x,k],1)),L=r(S,[0,0],[-1,1]);return[S,F,u(c(L))]})),b=d[0],m=d[1],k=d[2],z=console.warn,console.warn=function(){},T=i.nonMaxSuppression(m,k,this.maxFaces,this.iouThreshold,this.scoreThreshold),console.warn=z,[4,T.array()];case 1:return P=E.sent(),T.dispose(),S=P.map((function(t){return r(m,[t,0],[1,-1])})),f?[3,3]:[4,Promise.all(S.map((function(t){return w(B,void 0,void 0,(function(){var n;return g(this,(function(e){switch(e.label){case 0:return[4,t.array()];case 1:return n=e.sent(),t.dispose(),[2,n]}}))}))})))];case 2:S=E.sent(),E.label=3;case 3:for(F=n.shape[1],L=n.shape[2],R=f?e([L,F],this.inputSize):[L/this.inputSizeData[0],F/this.inputSizeData[1]],j=[],D=function(n){var e=S[n],i=o((function(){var o=x(e instanceof h?e:t(e));if(!p)return o;var i,a=P[n];return i=f?r(B.anchors,[a,0],[1,2]):B.anchorsData[a],{box:o,landmarks:y(u(r(b,[a,5],[1,-1])),[6,-1]),probability:r(k,[a],[1]),anchor:i}}));j.push(i)},M=0;M<S.length;M++)D(M);return m.dispose(),k.dispose(),b.dispose(),[2,{boxes:j,scaleFactor:R}]}}))}))},b.prototype.estimateFaces=function(t,n,e,i){return void 0===n&&(n=!1),void 0===e&&(e=!1),void 0===i&&(i=!0),w(this,void 0,void 0,(function(){var s,u,c,b,v,m,y=this;return g(this,(function(x){switch(x.label){case 0:return s=function(t){return t instanceof h?[t.shape[0],t.shape[1]]:[t.height,t.width]}(t),u=s[1],c=o((function(){return t instanceof h||(t=f(t)),p(d(t,"float32"),0)})),[4,this.getBoundingBoxes(c,n,i)];case 1:return b=x.sent(),v=b.boxes,m=b.scaleFactor,c.dispose(),n?[2,v.map((function(t){var n=T(t,m),o={topLeft:r(n,[0],[2]),bottomRight:r(n,[2],[2])};if(i){var s=t,c=s.landmarks,h=s.probability,f=s.anchor,p=a(l(c,f),m);o.landmarks=p,o.probability=h}return e&&(o=z(o,u)),o}))]:[2,Promise.all(v.map((function(t){return w(y,void 0,void 0,(function(){var n,r,o,a,s,c,l,h,f,p,d,b=this;return g(this,(function(v){switch(v.label){case 0:return n=T(t,m),i?[3,2]:[4,n.array()];case 1:return s=v.sent(),r={topLeft:s.slice(0,2),bottomRight:s.slice(2)},[3,4];case 2:return[4,Promise.all([t.landmarks,n,t.probability].map((function(t){return w(b,void 0,void 0,(function(){return g(this,(function(n){return[2,t.array()]}))}))})))];case 3:o=v.sent(),a=o[0],s=o[1],c=o[2],l=t.anchor,f=(h=m)[0],p=h[1],d=a.map((function(t){return[(t[0]+l[0])*f,(t[1]+l[1])*p]})),r={topLeft:s.slice(0,2),bottomRight:s.slice(2),landmarks:d,probability:c},(y=t.box).startEndTensor.dispose(),y.startPoint.dispose(),y.endPoint.dispose(),t.landmarks.dispose(),t.probability.dispose(),v.label=4;case 4:return n.dispose(),e&&(r=z(r,u)),[2,r]}var y}))}))})))]}}))}))},b.prototype.dispose=function(){this.blazeFaceModel.dispose(),this.anchors.dispose(),this.inputSize.dispose()},b}();
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
 */function S(t){var n=void 0===t?{}:t,e=n.maxFaces,r=void 0===e?10:e,o=n.inputWidth,i=void 0===o?128:o,a=n.inputHeight,s=void 0===a?128:a,u=n.iouThreshold,c=void 0===u?.3:u,l=n.scoreThreshold,h=void 0===l?.75:l,f=n.modelUrl;return w(this,void 0,void 0,(function(){var t;return g(this,(function(n){switch(n.label){case 0:return null==f?[3,2]:[4,b(f)];case 1:return t=n.sent(),[3,4];case 2:return[4,b("https://tfhub.dev/tensorflow/tfjs-model/blazeface/1/default/1",{fromTFHub:!0})];case 3:t=n.sent(),n.label=4;case 4:return[2,new P(t,i,s,r,c,h)]}}))}))}export{P as BlazeFaceModel,S as load};
