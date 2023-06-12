(function(){"use strict";var e={1034:function(e,t,n){var o=n(9242),r=n(3396);function a(e,t){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(n)}var i=n(89);const l={},s=(0,i.Z)(l,[["render",a]]);var u=s,c=n(2483),d=(n(7658),n(3767),n(8585),n(8696),n(7139)),f=n(4870);const p={class:"center"},m={class:"text"};var v={__name:"donutChart",props:{max:Number,min:Number,value:Number,colorChangeMode:Boolean},setup(e){const t=e,n=(0,f.iH)();console.log(t.value/(t.max-t.min)*100),(0,r.bv)((()=>{o()}));const o=()=>{let e=(t.value-t.min)/(t.max-t.min);n.value.style.setProperty("--p",100*e),t.colorChangeMode&&n.value.style.setProperty("--c","hsl("+Math.floor(230-250*e)+"deg, 100%, 50%)")};return(0,r.YP)((()=>t.value),(e=>{console.log(e),o()})),(e,t)=>((0,r.wg)(),(0,r.iD)("span",{class:"donut-chart",style:{"--c":"#40aafc","--p":"80"},ref_key:"chart",ref:n},[(0,r._)("span",p,[(0,r._)("span",m,[(0,r.WI)(e.$slots,"default")])])],512))}};const g=v;var w=g;const _={class:"displayer"},b={class:"name"},h={class:"time"},y=(0,r._)("br",null,null,-1);var S={__name:"tempDisplayer",props:{temp:{type:Number,default:20},water:{type:Number,default:50},time:{type:String,default:"xxxx-xx-xx"},name:{type:String,default:"未命名"}},setup(e){const t=e;return(e,n)=>((0,r.wg)(),(0,r.iD)("div",_,[(0,r._)("div",null,[(0,r._)("span",b,(0,d.zw)(t.name),1),(0,r._)("span",h,[(0,r.Uk)("最後更新時間:"),y,(0,r.Uk)((0,d.zw)(t.time.replace("T"," ").split(".")[0]),1)])]),(0,r.Wm)(w,{max:"40",min:"0",value:t.temp,"color-change-mode":"true"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,d.zw)(Number(t.temp).toFixed(2)+"℃"),1)])),_:1},8,["value"]),(0,r.Wm)(w,{max:"100",min:"0",value:t.water},{default:(0,r.w5)((()=>[(0,r.Uk)((0,d.zw)(Number(t.water).toFixed(2)+"%"),1)])),_:1},8,["value"])]))}};const k=S;var x=k,I=n(9999),O=n.n(I),C=n(8451),N=n.n(C);const U={class:"home"},A={class:"container pt-3"},W={class:"backgroundText"},V=(0,r._)("br",null,null,-1),H=(0,r._)("br",null,null,-1),D={class:"spinner-border text-muted"},J=(0,r._)("i",{class:"fa fa-th-list"},null,-1),j=(0,r._)("i",{class:"fa fa-close closeButton"},null,-1),T=[J,j],F=(0,r._)("i",{class:"cross"},null,-1),M=[F];var E={__name:"HomeView",setup(e){const t=(0,f.iH)(),n=(0,c.tv)(),a=()=>{t.value.classList.remove("active")},i=e=>{n.push(e)},l=(0,f.iH)(!1),s=(0,f.iH)(!1),u=(0,f.iH)();let d=N().sha256;(0,r.bv)((()=>{if(setTimeout((()=>{s.value=!0}),5e3),window.AppInventor){""==window.AppInventor.getWebViewString()&&window.AppInventor.setWebViewString(JSON.stringify({function_name:"getUserId"}));let e=JSON.parse(window.AppInventor.getWebViewString());if("userid"==e.name)if("not found"==e.user_id){let e="";crypto.getRandomValues(new Uint8Array(64)).forEach((t=>{e+=String.fromCharCode(Math.floor(t%127))})),window.AppInventor.setWebViewString(JSON.stringify({function_name:"setUserId",user_id:d(e)}))}else u.value=e.user_id;else window.AppInventor.setWebViewString(JSON.stringify({function_name:"getUserId"}))}if(null==localStorage.getItem("user")){let e="";crypto.getRandomValues(new Uint8Array(64)).forEach((t=>{e+=String.fromCharCode(Math.floor(t%127))})),localStorage.setItem("user",d(e))}}));const p=O().connect("wss://test.mosquitto.org:8081"),m=(0,f.iH)({});return p.on("connect",(()=>{console.log("connected.")})),(0,r.Jd)((()=>{p.end()})),(0,r.YP)((()=>u.value),(e=>{alert("steamedShrimp/"+e),p.subscribe("steamedShrimp/"+e),p.on("message",(function(e,t){let n=JSON.parse(t);var o=new Date;o.setUTCHours(o.getUTCHours()+8),n["time"]=o.toISOString(),console.log(n),m.value[e]=n,l.value=!0,console.log([e,t].join(": "))}))})),(e,n)=>((0,r.wg)(),(0,r.iD)("div",U,[(0,r._)("div",A,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.value,((e,t)=>((0,r.wg)(),(0,r.j4)(x,{key:t,temp:e.t,water:e.h,time:e.time,name:e.name},null,8,["temp","water","time","name"])))),128))]),(0,r._)("div",W,[(0,r.wy)((0,r._)("div",null,[(0,r.Uk)(" 您目前沒有任何裝置"),V,(0,r.Uk)("請點選右下角的【+】圖標"),H,(0,r.Uk)("以新增裝置 ")],512),[[o.F8,s.value&&!l.value]]),(0,r.wy)((0,r._)("div",D,null,512),[[o.F8,!s.value&&!l.value]])]),(0,r._)("span",{class:"listButton button",ref_key:"listButton",ref:t,onclick:"this.classList.toggle('active')"},T,512),(0,r._)("span",{class:"addButton button",onClick:n[0]||(n[0]=e=>{a(),i("/add")})},M)]))}};const P=E;var B=P;const z={class:"about"},R=(0,r._)("h1",null,"This is an about page",-1),Y=[R];function L(e,t){return(0,r.wg)(),(0,r.iD)("div",z,Y)}const Z={},q=(0,i.Z)(Z,[["render",L]]);var K=q;const $={class:"pt-5"},G={class:"container"},Q=(0,r._)("i",{class:"fa fa-bluetooth"},null,-1),X=(0,r._)("p",null,[(0,r.Uk)("目前連接裝置: "),(0,r._)("span",{id:"displayDevice"},"尚未連接裝置")],-1),ee={class:"form-floating mb-3 mt-3"},te=["disabled"],ne=(0,r._)("label",{for:"email"},"WiFi SSID",-1),oe={class:"form-floating mt-3 mb-3"},re=["disabled"],ae=(0,r._)("label",{for:"pwd"},"Password",-1),ie={class:"form-floating mt-3 mb-3"},le=(0,r._)("label",{for:"deviceName"},"使用者ID(用作區分不同使用者)",-1),se=["disabled"],ue=(0,r._)("button",{class:"btn btn-danger",onclick:"history.go(-1)"},"取消",-1);var ce={__name:"AddView",setup(e){let t=N().sha256;var n;(0,r.bv)((()=>{if(n=setInterval((()=>{}),1e3),window.AppInventor){let e=JSON.parse(window.AppInventor.getWebViewString());if("userid"==e.name)if("not found"==e.user_id){let e="";crypto.getRandomValues(new Uint8Array(64)).forEach((t=>{e+=String.fromCharCode(Math.floor(t%127))})),window.AppInventor.setWebViewString(JSON.stringify({function_name:"setUserId",user_id:t(e)}))}else l.value.value=e.user_id;else window.AppInventor.setWebViewString(JSON.stringify({function_name:"getUserId"}))}})),(0,r.Jd)((()=>{clearInterval(n)}));const o=(0,f.iH)(!0),a=(0,f.iH)(),i=(0,f.iH)(),l=(0,f.iH)();console.log(o.value);const s=()=>{window.AppInventor.setWebViewString(JSON.stringify({function_name:"scanBluetooth"}))},u=()=>{let e=String.fromCharCode(a.value.value.length)+a.value.value+String.fromCharCode(i.value.value.length)+i.value.value+String.fromCharCode(l.value.value.length)+l.value.value;console.log(e),console.log(e.length),window.AppInventor.setWebViewString(JSON.stringify({function_name:"sendWiFi",wifi_data:e}))};return(e,t)=>((0,r.wg)(),(0,r.iD)("div",$,[(0,r._)("div",G,[(0,r._)("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=e=>s())},[Q,(0,r.Uk)("連接藍牙")]),X,(0,r._)("div",ee,[(0,r._)("input",{type:"text",class:"form-control",id:"ssid",placeholder:"Enter WiFi SSID",name:"ssid",ref_key:"wifi_ssid",ref:a,disabled:!o.value},null,8,te),ne]),(0,r._)("div",oe,[(0,r._)("input",{type:"text",class:"form-control",id:"pwd",placeholder:"Enter password",name:"pwd",ref_key:"wifi_pwd",ref:i,disabled:!o.value},null,8,re),ae]),(0,r._)("div",ie,[(0,r._)("input",{type:"text",class:"form-control",id:"deviceName",placeholder:"Enter device name",ref_key:"device_name",ref:l,name:"deviceName",disabled:""},null,512),le]),(0,r._)("div",null,[(0,r._)("button",{class:"btn btn-success",disabled:!o.value,onClick:t[1]||(t[1]=e=>u())},"送出並連接",8,se),ue])])]))}};const de=ce;var fe=de;const pe=[{path:"/",name:"home",component:B},{path:"/about",name:"about",component:K},{path:"/add",name:"add",component:fe}],me=(0,c.p7)({history:(0,c.r5)(),routes:pe});var ve=me,ge=n(65),we=(0,ge.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(u).use(we).use(ve).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],a=e[c][2];for(var l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],l=o[1],s=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var c=s(n)}for(t&&t(o);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=self["webpackChunksteamed_shrimps"]=self["webpackChunksteamed_shrimps"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1034)}));o=n.O(o)})();
//# sourceMappingURL=app.32b378f2.js.map