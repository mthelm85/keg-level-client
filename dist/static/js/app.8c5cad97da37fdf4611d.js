webpackJsonp([0],{"1/oy":function(t,e){},"9M+g":function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},L0C8:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},a,!1,function(t){s("vGjf")},null,null).exports,c=s("e6fC"),o=s("/ocq"),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"keg mt-5 mx-auto"},[e("div",{staticClass:"beer",style:{height:this.beerLevel}},[this._m(0),this._v(" "),e("div",{staticClass:"bubble bubble1"}),this._v(" "),e("div",{staticClass:"bubble bubble2"}),this._v(" "),e("div",{staticClass:"bubble bubble3"}),this._v(" "),e("div",{staticClass:"bubble bubble4"}),this._v(" "),e("div",{staticClass:"bubble bubble5"})])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"foam"},[s("div",{staticClass:"foam-1"}),t._v(" "),s("div",{staticClass:"foam-2"}),t._v(" "),s("div",{staticClass:"foam-3"}),t._v(" "),s("div",{staticClass:"foam-4"}),t._v(" "),s("div",{staticClass:"foam-5"}),t._v(" "),s("div",{staticClass:"foam-6"}),t._v(" "),s("div",{staticClass:"foam-7"}),t._v(" "),s("div",{staticClass:"foam-8"}),t._v(" "),s("div",{staticClass:"foam-9"}),t._v(" "),s("div",{staticClass:"foam-10"}),t._v(" "),s("div",{staticClass:"foam-11"}),t._v(" "),s("div",{staticClass:"foam-12"}),t._v(" "),s("div",{staticClass:"foam-13"}),t._v(" "),s("div",{staticClass:"foam-14"}),t._v(" "),s("div",{staticClass:"foam-15"})])}]};var r={data:function(){return{weight:null,fullWeight:null}},components:{KegGraphic:s("VU/8")({computed:{beerLevel:function(){return this.percent+"%"}},props:["percent"]},l,!1,function(t){s("L0C8")},null,null).exports},computed:{percent:function(){return(this.weight/this.fullWeight*100).toFixed(0)}},created:function(){this.$socket.emit("getWeight")},methods:{setFull:function(){this.fullWeight=this.weight},tare:function(){this.$socket.emit("tare")}},sockets:{connect:function(){alert("socket connected")},weightUpdate:function(t){this.weight=t.weight}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col mx-auto"},[s("keg-graphic",{attrs:{percent:t.percent}}),t._v(" "),s("br"),t._v(" "),s("button",{staticClass:"btn btn-warning",on:{click:t.tare}},[t._v("Tare")]),t._v(" "),s("button",{staticClass:"btn btn-success",on:{click:t.setFull}},[t._v("Set to Full")])],1)])])},staticRenderFns:[]};var v=s("VU/8")(r,u,!1,function(t){s("yqNY")},null,null).exports;i.a.use(o.a);var f=new o.a({mode:"history",routes:[{path:"/",name:"KegWeight",component:v}]}),d=s("hMcO"),h=s.n(d);s("Jmt5"),s("9M+g");i.a.use(c.a),i.a.use(h.a,"https://helm-iot-server.herokuapp.com/"),i.a.config.productionTip=!1,new i.a({el:"#app",router:f,components:{App:n},template:"<App/>"})},vGjf:function(t,e){},yqNY:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8c5cad97da37fdf4611d.js.map