(function(t){function e(e){for(var r,s,c=e[0],o=e[1],u=e[2],d=0,m=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[t._m(0),n("router-view")],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav"}},[n("a",{attrs:{href:"/"}},[n("h1",{staticClass:"display-4 text-primary"},[t._v("Chaistand")])])])}],s=(n("034f"),n("2877")),c={},o=Object(s["a"])(c,a,i,!1,null,null,null),u=o.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),n("div",{staticClass:"chaistands-container"},[n("table",{staticClass:"table table-hover"},[t._m(0),n("tbody",t._l(t.chaistands,(function(e,r){return n("tr",{key:e._id,staticClass:"table-active",attrs:{id:"chaistand",item:e,index:r}},[n("td",[n("p",{staticClass:"text-primary"},[t._v(t._s(e.name))]),n("p",{staticClass:"font-weight-lighter text-secondary"},[t._v(" "+t._s(e.recipe)+" ")])]),t._m(1,!0),n("td",[n("input",{staticClass:"btn btn-success",attrs:{type:"button",value:"view"},on:{click:function(n){return t.gotoChaistand(e._id)}}})])])})),0)])])])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{staticClass:"text-primary",attrs:{scope:"col"}},[t._v("Event")]),n("th",{staticClass:"text-primary",attrs:{scope:"col"}},[t._v("Status")]),n("th",{attrs:{scope:"col"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("div",{staticClass:"col text-success"},[t._v("brewing")])])}],p=(n("96cf"),n("1da1")),h=(n("99af"),n("d3b7"),n("d4ec")),v=n("bee2"),f=n("bc3a"),x=n.n(f),g="/api",_=function(){function t(){Object(h["a"])(this,t)}return Object(v["a"])(t,null,[{key:"getChaistands",value:function(){return new Promise((function(t,e){x.a.get(g).then((function(e){return t(e.data)})).catch((function(t){return e(t)}))}))}},{key:"createChaistand",value:function(t,e){var n={name:t,summary:e,recipeId:"Classic Chai"};return new Promise((function(t,e){x.a.post(g,n).then((function(e){return t(e.data)})).catch((function(t){return e(t)}))}))}},{key:"getChaistand",value:function(t){return new Promise((function(e,n){x.a.get("".concat(g,"/").concat(t)).then((function(t){return e(t.data)})).catch((function(t){return n(t)}))}))}},{key:"getOrders",value:function(t){return new Promise((function(e,n){x.a.get("".concat(g,"/").concat(t,"/orders")).then((function(t){return e(t.data)})).catch((function(t){return n(t)}))}))}},{key:"createOrder",value:function(t,e,n,r){return new Promise((function(a,i){x.a.post("".concat(g,"/").concat(t,"/orders"),{name:e,cups:n,mixins:r}).then((function(t){return a(t.data)})).catch((function(t){return i(t)}))}))}},{key:"cancelOrder",value:function(t,e){return new Promise((function(n,r){x.a.delete("".concat(g,"/").concat(t,"/orders/").concat(e)).then((function(t){return n(t.data)})).catch((function(t){return r(t)}))}))}},{key:"getMixins",value:function(){return new Promise((function(t,e){x.a.get("".concat(g,"/mixins")).then((function(e){return t(e.data)})).catch((function(t){return e(t)}))}))}},{key:"getRecipes",value:function(){return new Promise((function(t,e){x.a.get("".concat(g,"/recipes")).then((function(e){return t(e.data)})).catch((function(t){return e(t)}))}))}}]),t}(),C=_,b={name:"Chaistand",data:function(){return{error:"",chaistands:[]}},created:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.getChaistands();case 3:t.chaistands=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.error=e.t0.message;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},methods:{createChaiStand:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$router.push("create");case 1:case"end":return e.stop()}}),e)})))()},gotoChaistand:function(t){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.$router.push("chaistand/".concat(t));case 1:case"end":return n.stop()}}),n)})))()}}},y=b,w=Object(s["a"])(y,d,m,!1,null,null,null),O=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("p",[t._v("Event")]),t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),n("div",{staticClass:"row"},[n("label",{staticClass:"text-primary col-2 text-right",attrs:{for:"chaistand-name"}},[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control col-8",attrs:{type:"text",name:"chaistand-name",id:"chaistand-name",placeholder:"enter name for chaistand"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),n("div",{staticClass:"row"},[n("label",{staticClass:"text-primary col-2 text-right",attrs:{for:"chaistand-summary"}},[t._v("Summary")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.summary,expression:"summary"}],staticClass:"form-control col-8",attrs:{type:"text",name:"chaistand-summary",id:"chaistand-summary",placeholder:"enter summary for chaistand"},domProps:{value:t.summary},on:{input:function(e){e.target.composing||(t.summary=e.target.value)}}})]),n("hr"),n("input",{staticClass:"btn btn-success btn-block",attrs:{type:"button",value:"Order Up!"},on:{click:function(e){return t.createChaistand(t.name,t.summary)}}})])},M=[],j={name:"CreateChaistand",data:function(){return{error:"",name:"",summary:""}},methods:{createChaistand:function(t,e){var n=this;return Object(p["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:C.createChaistand(t,e).then((function(){return n.$router.push("/")})).catch((function(t){return n.error=t}));case 1:case"end":return r.stop()}}),r)})))()}}},P=j,$=Object(s["a"])(P,k,M,!1,null,null,null),A=$.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),n("p",{staticClass:"text-secondary"},[t._v(t._s(t.chaistand.name))]),n("div",[n("div",{staticClass:"orders-container d-sm-flex"},t._l(t.orders,(function(e,r){return n("div",{key:e._id,staticClass:"card border-secondary mb-3",staticStyle:{width:"10rem","max-width":"12rem",margin:"0 1em 0 0"},attrs:{id:"order",item:e,index:r},on:{click:function(n){return t.toggleModal(e)}}},[n("div",{staticClass:"card-header",attrs:{id:"name"}},[t._v(t._s(e.name))]),n("div",{staticClass:"card-body text-secondary"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("svg",{staticClass:"bi bi-cup",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M12 4H4v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4zM3 3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3H3z"}}),n("path",{attrs:{"fill-rule":"evenodd",d:"M14.5 5.5h-2v-1h2A1.5 1.5 0 0 1 16 6v4a1.5 1.5 0 0 1-1.5 1.5h-2v-1h2a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5z"}})])]),n("div",{staticClass:"col"},[t._v(" "+t._s(e.cups)+" cup"+t._s(t.orders.cups>1?"s":"")+" ")])]),n("hr"),n("div",[n("div",{staticClass:"text-left text-primary text-weight-lighter",staticStyle:{margin:"1em 0 0 0"}},[t._v(" Mixins ")]),t._l(e.mixins,(function(e,r){return n("div",{key:e._id,staticClass:"row row-cols-2",attrs:{id:"mixins",item:e,index:r}},[n("div",{staticClass:"col text-right",attrs:{id:"mixin-name"}},[t._v(" "+t._s(e.name)+" ")]),n("div",{staticClass:"col text-right",attrs:{id:"mixin-amount"}},[t._v(" x"+t._s(e.amount)+" ")])])}))],2),n("div",{staticClass:"badge badge-success",staticStyle:{margin:"1em 0 0 0"},attrs:{id:"status"}},[t._v(" "+t._s(e.status)+" ")]),n("div",[n("svg",{staticClass:"bi bi-x-circle-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"red",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(n){return t.cancelOrder(t.chaistand._id,e._id)}}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"}})])])])])})),0),n("input",{staticClass:"btn btn-success btn-block",attrs:{type:"button",value:"Add Order"},on:{click:function(e){return t.gotoCreateOrder(t.chaistand._id)}}}),n("hr"),t.orders.length>0?n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[t._v("Summary")]),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v("Total cups x"+t._s(t.totalCups()))])])]):t._e()])])},S=[],E=(n("a9e3"),n("2ef0")),L=n.n(E),N={name:"Chaistand",data:function(){return{error:"",componentKey:0,chaistand:{},orders:[],toggleModal:!1}},created:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.params.id,e.prev=1,e.next=4,C.getChaistand(n);case 4:return r=e.sent,e.next=7,C.getOrders(n);case 7:a=e.sent,t.chaistand=r[0],t.orders=a,console.log(a),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](1),t.error=e.t0.message;case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))()},methods:{gotoCreateOrder:function(t){this.$router.push("/chaistand/".concat(t,"/order/create"))},cancelOrder:function(t,e){var n=this;C.cancelOrder(t,e).then((function(){return n.$router.push("/")}))},totalCups:function(){return L.a.sumBy(this.orders,(function(t){return Number(t.cups)}))}}},z=N,B=Object(s["a"])(z,R,S,!1,null,null,null),I=B.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("p",{staticClass:"text-secondary"},[t._v("Make my chai")]),t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),n("div",{attrs:{id:"create-order-container"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",staticStyle:{margin:"0 0 1em 0"},attrs:{type:"text",name:"name",id:"name",placeholder:"enter name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("div",{staticClass:"row"},[t._m(0),n("div",{staticClass:"col-5"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.cups,expression:"cups"}],staticClass:"form-control",attrs:{type:"number",min:"1",max:"5",name:"cups",id:"cups",placeholder:"#"},domProps:{value:t.cups},on:{input:function(e){e.target.composing||(t.cups=e.target.value)}}})])]),n("hr"),n("div",{attrs:{id:"selected-mixins text-primary"}},[n("h5",{staticClass:"text-left text-primary"},[t._v("Mixins")]),t._l(t.selectedMixins,(function(e,r){return n("div",{key:r,staticClass:"row rol-cols-2",attrs:{item:e,index:r}},[n("div",{staticClass:"col text-right text-primary"},[t._v(t._s(e.name))]),n("div",{staticClass:"col text-right text-primary"},[t._v("x"+t._s(e.amount))]),n("div",[n("svg",{staticClass:"bi bi-x-circle-fill",attrs:{width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"red",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(e){return t.removeMixin(r)}}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"}})])])])}))],2),n("hr"),n("div",{attrs:{id:"mixins-select"}},[n("h5",{staticClass:"text-left text-primary"},[t._v("Add Mixins")]),n("div",{staticClass:"form-inline"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.dropdownMixin,expression:"dropdownMixin"}],staticClass:"form-control-sm mb-2 mr-sm-2",attrs:{name:"mixins",id:"mixins"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.dropdownMixin=e.target.multiple?n:n[0]}}},t._l(t.mixins,(function(e,r){return n("option",{key:e._id,attrs:{item:e,index:r},domProps:{value:e}},[t._v(t._s(e.name))])})),0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mixinAmount,expression:"mixinAmount"}],staticClass:"form-control-sm mb-2 mr-sm-2",attrs:{type:"number",min:"1",max:"10"},domProps:{value:t.mixinAmount},on:{input:function(e){e.target.composing||(t.mixinAmount=e.target.value)}}}),n("input",{staticClass:"form-control-sm mb-2 mr-sm-2",attrs:{type:"button",value:"add"},on:{click:function(e){return t.addMixin(t.dropdownMixin,t.mixinAmount)}}})])]),n("hr"),n("input",{staticClass:"btn btn-success btn-block",attrs:{type:"button",value:"Place Order"},on:{click:function(e){return t.createOrder(t.chaistandId,t.name,t.cups,t.selectedMixins)}}})])])},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-auto"},[n("label",{staticClass:"col-2 text-primary text-right",attrs:{for:"cups"}},[t._v("Cups")])])}],H=(n("a434"),n("b0c0"),{name:"CreateOrder",data:function(){return{error:"",chaistandId:"",mixins:[],dropdownMixin:{},mixinAmount:0,name:"",cups:0,selectedMixins:[]}},created:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.chaistandId=t.$route.params.id,C.getMixins().then((function(e){return t.mixins=e})).catch((function(e){return t.error=e}));case 2:case"end":return e.stop()}}),e)})))()},methods:{createOrder:function(t,e,n,r){var a=this;e&&n?C.createOrder(t,e,n,r).then((function(){return a.$router.push("/chaistand/".concat(t))})).catch((function(t){return a.error=t})):this.error="need name and cups"},addMixin:function(t,e){this.selectedMixins=this.selectedMixins.concat({_id:t._id,name:t.name,amount:e}),this.mixinAmount=0},removeMixin:function(t){this.selectedMixins.splice(t,1)}}}),J=H,K=Object(s["a"])(J,T,V,!1,null,null,null),U=K.exports;r["a"].use(l["a"]);var q=[{path:"/",name:"Chaistands",component:O},{path:"/create",name:"CreateChaistand",component:A},{path:"/chaistand/:id",name:"Chaistand",component:I,props:!0},{path:"/chaistand/:id/order/create",name:"CreateOrder",component:U,props:!0}],D=new l["a"]({routes:q}),F=D;r["a"].config.productionTip=!1,new r["a"]({router:F,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.53a4c268.js.map