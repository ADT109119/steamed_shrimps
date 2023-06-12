(function(){"use strict";var e={9895:function(e,t,n){var a=n(9242),o=n(3396);function l(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var r=n(89);const s={},i=(0,r.Z)(s,[["render",l]]);var u=i,c=n(2483),d=(n(7658),n(3767),n(8585),n(8696),n(7139)),m=n(4870);const v={class:"center"},f={class:"text"};var p={__name:"donutChart",props:{max:Number,min:Number,value:Number,colorChangeMode:Boolean},setup(e){const t=e,n=(0,m.iH)();console.log(t.value/(t.max-t.min)*100),(0,o.bv)((()=>{a()}));const a=()=>{let e=(t.value-t.min)/(t.max-t.min);n.value.style.setProperty("--p",100*e),t.colorChangeMode&&n.value.style.setProperty("--c","hsl("+Math.floor(230-250*e)+"deg, 100%, 50%)")};return(0,o.YP)((()=>t.value),(e=>{console.log(e),a()})),(e,t)=>((0,o.wg)(),(0,o.iD)("span",{class:"donut-chart",style:{"--c":"#40aafc","--p":"80"},ref_key:"chart",ref:n},[(0,o._)("span",v,[(0,o._)("span",f,[(0,o.WI)(e.$slots,"default")])])],512))}};const g=p;var b=g;const _={class:"displayer"},h={class:"name"},w={class:"time"},y=(0,o._)("br",null,null,-1);var k={__name:"tempDisplayer",props:{temp:{type:Number,default:20},water:{type:Number,default:50},time:{type:String,default:"xxxx-xx-xx"},name:{type:String,default:"未命名"}},setup(e){const t=e;return(e,n)=>((0,o.wg)(),(0,o.iD)("div",_,[(0,o._)("div",null,[(0,o._)("span",h,(0,d.zw)(t.name),1),(0,o._)("span",w,[(0,o.Uk)("最後更新時間:"),y,(0,o.Uk)((0,d.zw)(t.time.replace("T"," ").split(".")[0]),1)])]),(0,o.Wm)(b,{max:"40",min:"0",value:t.temp,"color-change-mode":"true"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,d.zw)(Number(t.temp).toFixed(2)+"℃"),1)])),_:1},8,["value"]),(0,o.Wm)(b,{max:"100",min:"0",value:t.water},{default:(0,o.w5)((()=>[(0,o.Uk)((0,d.zw)(Number(t.water).toFixed(2)+"%"),1)])),_:1},8,["value"])]))}};const x=k;var S=x,C=n(9999),O=n.n(C),I=n(8451),H=n.n(I);const N={class:"home"},U={class:"container pt-3"},D={class:"backgroundText"},j=(0,o._)("br",null,null,-1),T=(0,o._)("br",null,null,-1),F={class:"spinner-border text-muted"},W=(0,o._)("i",{class:"fa fa-th-list"},null,-1),M=(0,o._)("i",{class:"fa fa-close closeButton"},null,-1),B=[W,M],E=(0,o._)("i",{class:"cross"},null,-1),P=[E];var V={__name:"HomeView",setup(e){const t=(0,m.iH)(),n=(0,c.tv)(),l=()=>{t.value.classList.remove("active")},r=e=>{n.push(e)},s=(0,m.iH)(!1),i=(0,m.iH)(!1);let u=H().sha256;(0,o.bv)((()=>{if(setTimeout((()=>{i.value=!0}),5e3),null==localStorage.getItem("user")){let e="";crypto.getRandomValues(new Uint8Array(64)).forEach((t=>{e+=String.fromCharCode(Math.floor(t%127))})),localStorage.setItem("user",u(e))}}));const d=(0,m.iH)({}),v=O().connect("wss://test.mosquitto.org:8081");return v.on("connect",(()=>{console.log("connected."),v.subscribe("steamedShrimp/"+localStorage.getItem("user")),v.on("message",(function(e,t){let n=JSON.parse(t);var a=new Date;a.setUTCHours(a.getUTCHours()+8),n["time"]=a.toISOString(),console.log(n),d.value[e]=n,s.value=!0,console.log([e,t].join(": "))}))})),(0,o.Jd)((()=>{v.end()})),(e,n)=>((0,o.wg)(),(0,o.iD)("div",N,[(0,o._)("div",U,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(d.value,((e,t)=>((0,o.wg)(),(0,o.j4)(S,{key:t,temp:e.t,water:e.h,time:e.time,name:e.name},null,8,["temp","water","time","name"])))),128))]),(0,o._)("div",D,[(0,o.wy)((0,o._)("div",null,[(0,o.Uk)(" 您目前沒有任何裝置"),j,(0,o.Uk)("請點選右下角的【+】圖標"),T,(0,o.Uk)("以新增裝置 ")],512),[[a.F8,i.value&&!s.value]]),(0,o.wy)((0,o._)("div",F,null,512),[[a.F8,!i.value&&!s.value]])]),(0,o._)("span",{class:"listButton button",ref_key:"listButton",ref:t,onclick:"this.classList.toggle('active')"},B,512),(0,o._)("span",{class:"addButton button",onClick:n[0]||(n[0]=e=>{l(),r("/add")})},P)]))}};const A=V;var J=A;const z={class:"about"},L=(0,o._)("h1",null,"This is an about page",-1),R=[L];function Y(e,t){return(0,o.wg)(),(0,o.iD)("div",z,R)}const Z={},q=(0,r.Z)(Z,[["render",Y]]);var K=q;const $={class:"pt-5"},G={class:"container"},Q=(0,o._)("i",{class:"fa fa-bluetooth"},null,-1),X=(0,o._)("p",null,[(0,o.Uk)("目前連接裝置: "),(0,o._)("span",{id:"displayDevice"},"尚未連接裝置")],-1),ee={class:"form-floating mb-3 mt-3"},te=["disabled"],ne=(0,o._)("label",{for:"email"},"WiFi SSID",-1),ae={class:"form-floating mt-3 mb-3"},oe=["disabled"],le=(0,o._)("label",{for:"pwd"},"Password",-1),re={class:"form-floating mt-3 mb-3"},se=(0,o._)("label",{for:"deviceName"},"使用者ID(用作區分不同使用者)",-1),ie=["disabled"],ue=(0,o._)("button",{class:"btn btn-danger",onclick:"history.go(-1)"},"取消",-1);var ce={__name:"AddView",setup(e){let t=H().sha256;var n;(0,o.bv)((()=>{if(n=setInterval((()=>{}),1e3),null==localStorage.getItem("user")){let e="";crypto.getRandomValues(new Uint8Array(64)).forEach((t=>{e+=String.fromCharCode(Math.floor(t%127))})),s.value=t(e),console.log(t(e)),localStorage.setItem("user",t(e))}else s.value.value=localStorage.getItem("user")})),(0,o.Jd)((()=>{clearInterval(n)}));const a=(0,m.iH)(!0),l=(0,m.iH)(),r=(0,m.iH)(),s=(0,m.iH)();console.log(a.value);const i=()=>{window.AppInventor.setWebViewString(JSON.stringify({function_name:"scanBluetooth"}))},u=()=>{let e=String.fromCharCode(l.value.value.length)+l.value.value+String.fromCharCode(r.value.value.length)+r.value.value+String.fromCharCode(s.value.value.length)+s.value.value;console.log(e),console.log(e.length),window.AppInventor.setWebViewString(JSON.stringify({function_name:"sendWiFi",wifi_data:e}))};return(e,t)=>((0,o.wg)(),(0,o.iD)("div",$,[(0,o._)("div",G,[(0,o._)("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=e=>i())},[Q,(0,o.Uk)("連接藍牙")]),X,(0,o._)("div",ee,[(0,o._)("input",{type:"text",class:"form-control",id:"ssid",placeholder:"Enter WiFi SSID",name:"ssid",ref_key:"wifi_ssid",ref:l,disabled:!a.value},null,8,te),ne]),(0,o._)("div",ae,[(0,o._)("input",{type:"text",class:"form-control",id:"pwd",placeholder:"Enter password",name:"pwd",ref_key:"wifi_pwd",ref:r,disabled:!a.value},null,8,oe),le]),(0,o._)("div",re,[(0,o._)("input",{type:"text",class:"form-control",id:"deviceName",placeholder:"Enter device name",ref_key:"device_name",ref:s,name:"deviceName",disabled:""},null,512),se]),(0,o._)("div",null,[(0,o._)("button",{class:"btn btn-success",disabled:!a.value,onClick:t[1]||(t[1]=e=>u())},"送出並連接",8,ie),ue])])]))}};const de=ce;var me=de;const ve=[{path:"/",name:"home",component:J},{path:"/about",name:"about",component:K},{path:"/add",name:"add",component:me}],fe=(0,c.p7)({history:(0,c.r5)(),routes:ve});var pe=fe,ge=n(65),be=(0,ge.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,a.ri)(u).use(be).use(pe).mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,a,o,l){if(!a){var r=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],l=e[c][2];for(var s=!0,i=0;i<a.length;i++)(!1&l||r>=l)&&Object.keys(n.O).every((function(e){return n.O[e](a[i])}))?a.splice(i--,1):(s=!1,l<r&&(r=l));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[a,o,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,l,r=a[0],s=a[1],i=a[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(i)var c=i(n)}for(t&&t(a);u<r.length;u++)l=r[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},a=self["webpackChunksteamed_shrimps"]=self["webpackChunksteamed_shrimps"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9895)}));a=n.O(a)})();
//# sourceMappingURL=app.f3ae5e69.js.map