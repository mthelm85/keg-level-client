webpackJsonp([1],{"/IrI":function(t,e){},"1/oy":function(t,e){},"1R8h":function(t,e){},"9M+g":function(t,e){},AFPf:function(t,e){},BQAl:function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},MrdY:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{attrs:{name:"navbar"}}),this._v(" "),e("router-view",{attrs:{name:"body"}})],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},n,!1,function(t){a("yJjI")},null,null).exports,r=a("e6fC"),o=a("ppUw"),c=a.n(o),l=a("/ocq"),d=a("Xxa5"),u=a.n(d),g=a("exGp"),m=a.n(g),v=a("Dd8w"),p=a.n(v),h=a("mtWM"),f=a.n(h),b=function(){return f.a.create({baseURL:"https://helm-iot-server.herokuapp.com",withCredentials:!0})},_={name:"BounceLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"60px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,height:this.size,width:this.size,borderRadius:this.radius,opacity:.6,position:"absolute",top:0,left:0}}},computed:{spinnerBasicStyle:function(){return{height:this.size,width:this.size,position:"relative"}}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"v-spinner"},[e("div",{staticClass:"v-bounce v-bounce1",style:this.spinnerBasicStyle},[e("div",{staticClass:"v-bounce v-bounce2",style:this.spinnerStyle}),e("div",{staticClass:"v-bounce v-bounce3",style:this.spinnerStyle})])])},staticRenderFns:[]};var w=a("VU/8")(_,C,!1,function(t){a("AFPf")},null,null).exports,k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keg mx-auto"},[a("div",{staticClass:"beer",style:{height:t.beerLevel,background:t.computeColor}},[t._m(0),t._v(" "),a("div",{staticClass:"bubble bubble1"}),t._v(" "),a("div",{staticClass:"bubble bubble2"}),t._v(" "),a("div",{staticClass:"bubble bubble3"}),t._v(" "),a("div",{staticClass:"bubble bubble4"}),t._v(" "),a("div",{staticClass:"bubble bubble5"})])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"foam"},[a("div",{staticClass:"foam-1"}),t._v(" "),a("div",{staticClass:"foam-2"}),t._v(" "),a("div",{staticClass:"foam-3"}),t._v(" "),a("div",{staticClass:"foam-4"}),t._v(" "),a("div",{staticClass:"foam-5"}),t._v(" "),a("div",{staticClass:"foam-6"}),t._v(" "),a("div",{staticClass:"foam-7"}),t._v(" "),a("div",{staticClass:"foam-8"}),t._v(" "),a("div",{staticClass:"foam-9"}),t._v(" "),a("div",{staticClass:"foam-10"}),t._v(" "),a("div",{staticClass:"foam-11"}),t._v(" "),a("div",{staticClass:"foam-12"}),t._v(" "),a("div",{staticClass:"foam-13"}),t._v(" "),a("div",{staticClass:"foam-14"}),t._v(" "),a("div",{staticClass:"foam-15"})])}]};var x=a("VU/8")({computed:{beerLevel:function(){return this.percent+"%"},computeColor:function(){switch(this.beerColor){case 0:return"linear-gradient(#ffe377, #f7c600)";case 1:return"linear-gradient(#a33700, #882300)";case 2:return"linear-gradient(#440600, #2f0200)"}}},props:["percent","beerColor"]},k,!1,function(t){a("YfcY")},null,null).exports,y=a("NYxO"),S={data:function(){return{changeSettings:!0,connected:!1,fullWeight:null,menuItems:!1,offset:null,waiting:!1,weight:null}},components:{BounceLoader:w,KegGraphic:x},computed:p()({},Object(y.b)(["getEmail","getKegs"]),{percent:function(){return(this.weight/this.fullWeight*100).toFixed(0)},roomId:function(){return this.$route.params.roomId},settingsTxt:function(){return this.changeSettings?"Edit":"Done"}}),methods:{changeColor:function(t){var e=this;return m()(u.a.mark(function a(){return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b().patch("/change-color",{email:e.getEmail,keg:0,color:t});case 2:"Color changed"===a.sent.data.message&&(e.$store.state.kegs[0].color=t);case 4:case"end":return a.stop()}},a,e)}))()},setFull:function(){var t=this;return m()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.fullWeight=t.weight,b().patch("/set-full-weight",{email:t.getEmail,keg:0,fullWeight:t.weight});case 2:case"end":return e.stop()}},e,t)}))()},tare:function(){this.waiting=!0,this.$socket.emit("tare",this.getKegs[0].id)}},sockets:{connect:function(){console.log("Connected to socket "+this.$socket.id),this.$socket.emit("room",this.getKegs[0].id)},weightUpdate:function(t){t&&(this.connected=!0),t.medianOffset>0&&(this.waiting=!1,this.offset=t.medianOffset),console.log("Keg1 weight is: "+(t.weight-(t.medianOffset/1e3).toFixed(0))),this.weight=t.weight-(t.medianOffset/1e3).toFixed(0)}},watch:{offset:function(){b().patch("set-tare-weight",{email:this.getEmail,keg:0,tareWeight:this.offest})}}},K={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header"},[a("span",{staticClass:"h4"},[t._v(t._s(t.getKegs[0].name))])]),t._v(" "),a("div",{staticClass:"card-body pt-1"},[a("div",{staticClass:"d-flex justify-content-end pb-1"},[a("i",{staticClass:"menu fas fa-bars",on:{click:function(e){t.menuItems=!t.menuItems}}})]),t._v(" "),t.menuItems?a("div",{staticClass:"mb-3"},[a("small",[t._v("Status: "),a("span",{staticClass:"badge",class:[{"badge-success":t.connected},{"badge-danger":!t.connected}]},[t._v(t._s(t.connected?"Connected":"Disconnected"))])]),t._v(" "),a("br"),t._v(" "),a("small",[t._v("Level: "+t._s(t.percent)+"%")])]):t._e(),t._v(" "),a("keg-graphic",{attrs:{percent:t.percent,beerColor:t.getKegs[0].color}})],1),t._v(" "),a("div",{staticClass:"card-footer"},[t.waiting?a("bounce-loader",{staticClass:"overlay d-flex align-items-center justify-content-center"}):t._e(),t._v(" "),a("span",{staticClass:"settings btn btn-sm btn-outline-primary",on:{click:function(e){t.changeSettings=!t.changeSettings}}},[a("small",[t._v(t._s(t.settingsTxt))])]),t._v(" "),a("button",{staticClass:"btn btn-color-picker pale mb-3",attrs:{disabled:t.changeSettings},on:{click:function(e){t.changeColor(0)}}}),t._v(" "),a("button",{staticClass:"btn btn-color-picker brown mb-3",attrs:{disabled:t.changeSettings},on:{click:function(e){t.changeColor(1)}}}),t._v(" "),a("button",{staticClass:"btn btn-color-picker dark mb-3",attrs:{disabled:t.changeSettings},on:{click:function(e){t.changeColor(2)}}}),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-warning",attrs:{disabled:t.changeSettings},on:{click:t.tare}},[t._v("Tare")]),t._v(" "),a("button",{staticClass:"btn btn-success",attrs:{disabled:t.changeSettings},on:{click:t.setFull}},[t._v("Set to Full")])],1)])},staticRenderFns:[]};var $=a("VU/8")(S,K,!1,function(t){a("sz5s")},"data-v-5373c8d4",null).exports,E={data:function(){return{changeSettings:!0,fullWeight:null,weight:null}},components:{KegGraphic:x},computed:p()({},Object(y.b)(["getEmail","getKegs"]),{percent:function(){return(this.weight/this.fullWeight*100).toFixed(0)},roomId:function(){return this.$route.params.roomId},settingsTxt:function(){return this.changeSettings?"Edit":"Done"}}),methods:{changeColor:function(t){var e=this;return m()(u.a.mark(function a(){return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b().patch("/change-color",{email:e.getEmail,keg:1,color:t});case 2:"Color changed"===a.sent.data.message&&(e.$store.state.kegs[1].color=t);case 4:case"end":return a.stop()}},a,e)}))()},setFull:function(){this.fullWeight=this.weight},tare:function(){this.$socket.emit("tare",this.kegs[1].id)}},sockets:{connect:function(){this.$socket.emit("room",this.kegs[1].id)},weightUpdate:function(t){console.log("Keg2 weight is: "+t),this.weight=t}}},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header"},[a("span",{staticClass:"h4"},[t._v(t._s(t.getKegs[1].name))])]),t._v(" "),a("div",{staticClass:"card-body"},[a("keg-graphic",{attrs:{percent:t.percent,beerColor:t.getKegs[1].color}})],1),t._v(" "),a("div",{staticClass:"card-footer"},[a("span",{staticClass:"settings btn btn-sm btn-outline-primary",on:{click:function(e){t.changeSettings=!t.changeSettings}}},[a("small",[t._v(t._s(t.settingsTxt))])]),t._v(" "),a("button",{staticClass:"btn btn-color-picker pale mb-3",attrs:{disabled:t.changeSettings},on:{click:function(e){t.changeColor(0)}}}),t._v(" "),a("button",{staticClass:"btn btn-color-picker brown mb-3",attrs:{disabled:t.changeSettings},on:{click:function(e){t.changeColor(1)}}}),t._v(" "),a("button",{staticClass:"btn btn-color-picker dark mb-3",attrs:{disabled:t.changeSettings},on:{click:function(e){t.changeColor(2)}}}),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-warning",attrs:{disabled:t.changeSettings},on:{click:t.tare}},[t._v("Tare")]),t._v(" "),a("button",{staticClass:"btn btn-success",attrs:{disabled:t.changeSettings},on:{click:t.setFull}},[t._v("Set to Full")])])])},staticRenderFns:[]};var F=a("VU/8")(E,P,!1,function(t){a("tIfX")},"data-v-7c597a4e",null).exports,T={data:function(){return{changeSettings:!0,fullWeight:null,weight:null}},components:{KegGraphic:x},computed:p()({},Object(y.b)(["getEmail","getKegs"]),{percent:function(){return(this.weight/this.fullWeight*100).toFixed(0)},roomId:function(){return this.$route.params.roomId},settingsTxt:function(){return this.changeSettings?"Edit":"Done"}}),methods:{changeColor:function(t){var e=this;return m()(u.a.mark(function a(){return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b().patch("/change-color",{email:e.getEmail,keg:2,color:t});case 2:"Color changed"===a.sent.data.message&&(e.$store.state.kegs[2].color=t);case 4:case"end":return a.stop()}},a,e)}))()},setFull:function(){this.fullWeight=this.weight},tare:function(){this.$socket.emit("tare",this.kegs[2].id)}},sockets:{connect:function(){this.$socket.emit("room",this.kegs[2].id)},weightUpdate:function(t){console.log("Keg3 weight is: "+t),this.weight=t}}},N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header"},[a("span",{staticClass:"h4"},[t._v(t._s(t.getKegs[2].name))])]),t._v(" "),a("div",{staticClass:"card-body"},[a("keg-graphic",{attrs:{percent:t.percent,beerColor:t.getKegs[2].color}})],1),t._v(" "),a("div",{staticClass:"card-footer"},[a("span",{staticClass:"settings btn btn-sm btn-outline-primary",on:{click:function(e){t.changeSettings=!t.changeSettings}}},[a("small",[t._v(t._s(t.settingsTxt))])]),t._v(" "),a("button",{staticClass:"btn btn-color-picker pale mb-3",attrs:{disabled:t.changeSettings},on:{click:function(e){t.changeColor(0)}}}),t._v(" "),a("button",{staticClass:"btn btn-color-picker brown mb-3",attrs:{disabled:t.changeSettings},on:{click:function(e){t.changeColor(1)}}}),t._v(" "),a("button",{staticClass:"btn btn-color-picker dark mb-3",attrs:{disabled:t.changeSettings},on:{click:function(e){t.changeColor(2)}}}),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-warning",attrs:{disabled:t.changeSettings},on:{click:t.tare}},[t._v("Tare")]),t._v(" "),a("button",{staticClass:"btn btn-success",attrs:{disabled:t.changeSettings},on:{click:t.setFull}},[t._v("Set to Full")])])])},staticRenderFns:[]};var I=a("VU/8")(T,N,!1,function(t){a("/IrI")},"data-v-721ed320",null).exports,D={data:function(){return{changeSettings:!0,fullWeight:null,weight:null}},components:{KegGraphic:x},computed:p()({},Object(y.b)(["getEmail","getKegs"]),{percent:function(){return(this.weight/this.fullWeight*100).toFixed(0)},roomId:function(){return this.$route.params.roomId},settingsTxt:function(){return this.changeSettings?"Edit":"Done"}}),methods:{changeColor:function(t){var e=this;return m()(u.a.mark(function a(){return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b().patch("/change-color",{email:e.getEmail,keg:3,color:t});case 2:"Color changed"===a.sent.data.message&&(e.$store.state.kegs[3].color=t);case 4:case"end":return a.stop()}},a,e)}))()},setFull:function(){this.fullWeight=this.weight},tare:function(){this.$socket.emit("tare",this.kegs[3].id)}},sockets:{connect:function(){this.$socket.emit("room",this.kegs[3].id)},weightUpdate:function(t){console.log("Keg4 weight is: "+t),this.weight=t}}},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header"},[a("span",{staticClass:"h4"},[t._v(t._s(t.getKegs[3].name))])]),t._v(" "),a("div",{staticClass:"card-body"},[a("keg-graphic",{attrs:{percent:t.percent,beerColor:t.getKegs[3].color}})],1),t._v(" "),a("div",{staticClass:"card-footer"},[a("span",{staticClass:"settings btn btn-sm btn-outline-primary",on:{click:function(e){t.changeSettings=!t.changeSettings}}},[a("small",[t._v(t._s(t.settingsTxt))])]),t._v(" "),a("button",{staticClass:"btn btn-color-picker pale mb-3",attrs:{disabled:t.changeSettings},on:{click:function(e){t.changeColor(0)}}}),t._v(" "),a("button",{staticClass:"btn btn-color-picker brown mb-3",attrs:{disabled:t.changeSettings},on:{click:function(e){t.changeColor(1)}}}),t._v(" "),a("button",{staticClass:"btn btn-color-picker dark mb-3",attrs:{disabled:t.changeSettings},on:{click:function(e){t.changeColor(2)}}}),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-warning",attrs:{disabled:t.changeSettings},on:{click:t.tare}},[t._v("Tare")]),t._v(" "),a("button",{staticClass:"btn btn-success",attrs:{disabled:t.changeSettings},on:{click:t.setFull}},[t._v("Set to Full")])])])},staticRenderFns:[]};var R={components:{Keg1:$,Keg2:F,Keg3:I,Keg4:a("VU/8")(D,A,!1,function(t){a("UgPc")},"data-v-1187b292",null).exports},computed:p()({},Object(y.b)(["getEmail","getKegs"])),created:function(){var t=this;return m()(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.getKegs.length){e.next=5;break}return e.next=3,b().get("/get-kegs",{params:{email:t.getEmail}});case 3:a=e.sent,t.storeKegs(a.data.userKegs);case 5:case"end":return e.stop()}},e,t)}))()},methods:p()({},Object(y.c)(["storeKegs"]))},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-5"},[a("div",{staticClass:"row m-3"},[a("div",{staticClass:"col d-flex justify-content-center text-center mx-auto"},[a("keg1")],1),t._v(" "),t.getKegs.length>1?a("div",{staticClass:"col d-flex justify-content-center text-center mx-auto"},[a("keg2")],1):t._e()]),t._v(" "),t.getKegs.length>2?a("div",{staticClass:"row m-3"},[a("div",{staticClass:"col d-flex justify-content-center text-center mx-auto"},[a("keg3")],1),t._v(" "),a("div",{staticClass:"col d-flex justify-content-center text-center mx-auto"},[t.getKegs.length>3?a("keg4"):t._e()],1)]):t._e()])},staticRenderFns:[]};var j=a("VU/8")(R,U,!1,function(t){a("1R8h")},null,null).exports,B={data:function(){return{email:"",password:"",togglePass:!1}},methods:p()({},Object(y.c)(["storeEmail"]),{login:function(){var t=this;b().post("/signup",{email:this.email,password:this.password}).then(function(e){console.log(e),"yes"===e.data.success?(t.storeEmail(t.email),t.$cookies.set("user_session",t.email,"0"),t.$router.push("/setup")):alert("Login failed")}).catch(function(t){alert(t)})}})},W={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-5"},[a("div",{staticClass:"row my-auto"},[a("div",{staticClass:"col d-flex justify-content-center"},[a("div",{staticClass:"card shadow text-center"},[a("div",{staticClass:"card-header h4"},[t._v("\r\n          Create Account\r\n        ")]),t._v(" "),a("div",{staticClass:"card-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Password")]),t._v(" "),"checkbox"==(t.togglePass?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{id:"exampleInputPassword1",placeholder:"Password",type:"checkbox"},domProps:{checked:Array.isArray(t.password)?t._i(t.password,null)>-1:t.password},on:{change:function(e){var a=t.password,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&(t.password=a.concat([null])):i>-1&&(t.password=a.slice(0,i).concat(a.slice(i+1)))}else t.password=n}}}):"radio"==(t.togglePass?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{id:"exampleInputPassword1",placeholder:"Password",type:"radio"},domProps:{checked:t._q(t.password,null)},on:{change:function(e){t.password=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{id:"exampleInputPassword1",placeholder:"Password",type:t.togglePass?"text":"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-check mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.togglePass,expression:"togglePass"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"true",id:"passCheck"},domProps:{checked:Array.isArray(t.togglePass)?t._i(t.togglePass,"true")>-1:t.togglePass},on:{change:function(e){var a=t.togglePass,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i=t._i(a,"true");s.checked?i<0&&(t.togglePass=a.concat(["true"])):i>-1&&(t.togglePass=a.slice(0,i).concat(a.slice(i+1)))}else t.togglePass=n}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"passCheck"}},[t._v("View/check password before submitting")])]),t._v(" "),a("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Submit")])])])])])])])},staticRenderFns:[]};var O=a("VU/8")(B,W,!1,function(t){a("MrdY")},null,null).exports,V={methods:{logout:function(){b().get("logout"),this.$cookies.remove("user_session"),this.$router.push("/")}}},L={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-sm navbar-light bg-light shadow-sm"},[t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("span",{staticClass:"navbar-brand mb-0 h1"},[t._v("Kegmo")]),t._v(" "),a("router-link",{staticClass:"nav-link",attrs:{to:"/setup"}},[t._v("Setup")]),t._v(" "),a("router-link",{staticClass:"nav-link",attrs:{to:"/my-kegs"}},[t._v("View")])],1),t._v(" "),a("form",{staticClass:"form-inline my-2 my-lg-0",on:{submit:function(e){return e.preventDefault(),t.logout(e)}}},[a("button",{staticClass:"btn btn-warning my-2 my-sm-0"},[t._v("Logout")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"#navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]};var Y=a("VU/8")(V,L,!1,function(t){a("BQAl")},null,null).exports,z={data:function(){return{email:"",password:""}},methods:p()({},Object(y.c)(["storeEmail"]),{login:function(){var t=this;b().post("/login",{email:this.email,password:this.password}).then(function(e){"yes"===e.data.success?(t.storeEmail(t.email),t.$cookies.set("user_session",t.email,"0"),t.$router.push("/my-kegs")):alert("Login failed")}).catch(function(t){alert(t)})}})},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-sm navbar-light bg-light shadow-sm"},[t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[t._m(1),t._v(" "),a("form",{staticClass:"form-inline my-2 my-lg-0",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],staticClass:"form-control mr-sm-2",attrs:{type:"email",name:"email",placeholder:"E-mail","aria-label":"E-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}}],staticClass:"form-control mr-sm-2",attrs:{type:"password",name:"password",placeholder:"Password","aria-label":"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),a("button",{staticClass:"btn btn-success my-2 my-sm-0"},[t._v("Login")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"#navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"navbar-nav mr-auto"},[e("span",{staticClass:"navbar-brand mb-0 h1"},[this._v("Kegmo")])])}]};var G=a("VU/8")(z,M,!1,function(t){a("YBWt")},null,null).exports,J={beforeRouteLeave:function(t,e,a){this.$store.state.kegs.length=0,a()},data:function(){return{addSecond:!1,addThird:!1,addFourth:!1,scale:[{name:"",id:"",disableBtn:!1},{name:"",id:"",disableBtn:!1},{name:"",id:"",disableBtn:!1},{name:"",id:"",disableBtn:!1}]}},computed:p()({},Object(y.b)(["getEmail","getKegs"])),created:function(){var t=this;return m()(u.a.mark(function e(){var a,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b().get("/get-kegs",{params:{email:t.getEmail}});case 2:a=e.sent,e.t0=a.data.userKegs.length,e.next=2===e.t0?6:3===e.t0?8:4===e.t0?11:15;break;case 6:return t.addSecond=!0,e.abrupt("break",16);case 8:return t.addSecond=!0,t.addThird=!0,e.abrupt("break",16);case 11:return t.addSecond=!0,t.addThird=!0,t.addFourth=!0,e.abrupt("break",16);case 15:return e.abrupt("break",16);case 16:for(s=0;s<a.data.userKegs.length;s++)t.scale[s].name=a.data.userKegs[s].name,t.scale[s].id=a.data.userKegs[s].id,t.scale[s].disableBtn=!0;case 17:case"end":return e.stop()}},e,t)}))()},methods:{btnText:function(t){return this.scale[t].disableBtn?"Registered":"Submit"},changeName:function(t){b().patch("/change-name",{email:this.getEmail,keg:t,name:this.scale[t].name})},disabled:function(t){return""===this.scale[t].name},headerText:function(t){switch(t){case 1:return this.addSecond?"Register Second Kegmo":"Add Another Kegmo";case 2:return this.addThird?"Register Third Kegmo":"Add Another Kegmo";case 3:return this.addFourth?"Register Fourth Kegmo":"Add Another Kegmo"}},register:function(t){var e=this;return m()(u.a.mark(function a(){var s;return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b().patch("/register",{email:e.getEmail,name:e.scale[t].name,id:e.scale[t].id});case 2:"Scale registered"===(s=a.sent).data.message?e.scale[t].disableBtn=!0:"Error"===s.data.message&&alert("There was an error registering your scale");case 4:case"end":return a.stop()}},a,e)}))()}}},H={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col"},[a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header text-center"},[t._v("\n          Register Your Kegmo\n        ")]),t._v(" "),a("div",{staticClass:"card-body text-center"},[a("form",[a("div",{staticClass:"form-group"},[a("label",[t._v("Kegmo Name")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.scale[0].name,expression:"scale[0].name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.scale[0].name},on:{input:function(e){e.target.composing||t.$set(t.scale[0],"name",e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{disabled:t.disabled(0)},on:{click:function(e){e.preventDefault(),t.changeName(0)}}},[t._v("Change")])])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Kegmo I.D. (from box)")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.scale[0].id,expression:"scale[0].id"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.scale[0].id},on:{input:function(e){e.target.composing||t.$set(t.scale[0],"id",e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.scale[0].disableBtn},on:{click:function(e){e.preventDefault(),t.register(0)}}},[t._v(t._s(t.btnText(0)))])])])])]),t._v(" "),a("div",{staticClass:"col"},[a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header text-center"},[t._v("\n          "+t._s(t.headerText(1))+"\n        ")]),t._v(" "),a("div",{staticClass:"card-body text-center"},[t.addSecond?a("form",[a("div",{staticClass:"form-group"},[a("label",[t._v("Kegmo Name")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.scale[1].name,expression:"scale[1].name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.scale[1].name},on:{input:function(e){e.target.composing||t.$set(t.scale[1],"name",e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{disabled:t.disabled(1)},on:{click:function(e){e.preventDefault(),t.changeName(1)}}},[t._v("Change")])])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Kegmo I.D. (from box)")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.scale[1].id,expression:"scale[1].id"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.scale[1].id},on:{input:function(e){e.target.composing||t.$set(t.scale[1],"id",e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.scale[1].disableBtn},on:{click:function(e){e.preventDefault(),t.register(1)}}},[t._v(t._s(t.btnText(1)))])]):a("button",{staticClass:"btn btn-dark",on:{click:function(e){t.addSecond=!0}}},[a("i",{staticClass:"fas fa-plus"})])])])])]),t._v(" "),t.addSecond?a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col"},[a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header text-center"},[t._v("\n          "+t._s(t.headerText(2))+"\n        ")]),t._v(" "),a("div",{staticClass:"card-body text-center"},[t.addThird?a("form",[a("div",{staticClass:"form-group"},[a("label",[t._v("Kegmo Name")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.scale[2].name,expression:"scale[2].name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.scale[2].name},on:{input:function(e){e.target.composing||t.$set(t.scale[2],"name",e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{disabled:t.disabled(2)},on:{click:function(e){e.preventDefault(),t.changeName(2)}}},[t._v("Change")])])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Kegmo I.D. (from box)")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.scale[2].id,expression:"scale[2].id"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.scale[2].id},on:{input:function(e){e.target.composing||t.$set(t.scale[2],"id",e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.scale[2].disableBtn},on:{click:function(e){e.preventDefault(),t.register(2)}}},[t._v(t._s(t.btnText(2)))])]):a("button",{staticClass:"btn btn-dark",on:{click:function(e){t.addThird=!0}}},[a("i",{staticClass:"fas fa-plus"})])])])]),t._v(" "),a("div",{staticClass:"col"},[t.addThird?a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header text-center"},[t._v("\n          "+t._s(t.headerText(3))+"\n        ")]),t._v(" "),a("div",{staticClass:"card-body text-center"},[t.addFourth?a("form",[a("div",{staticClass:"form-group"},[a("label",[t._v("Kegmo Name")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.scale[3].name,expression:"scale[3].name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.scale[3].name},on:{input:function(e){e.target.composing||t.$set(t.scale[3],"name",e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{disabled:t.disabled(3)},on:{click:function(e){e.preventDefault(),t.changeName(3)}}},[t._v("Change")])])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Kegmo I.D. (from box)")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.scale[3].id,expression:"scale[3].id"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.scale[3].id},on:{input:function(e){e.target.composing||t.$set(t.scale[3],"id",e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.scale[3].disableBtn},on:{click:function(e){e.preventDefault(),t.register(3)}}},[t._v(t._s(t.btnText(3)))])]):a("button",{staticClass:"btn btn-dark",on:{click:function(e){t.addFourth=!0}}},[a("i",{staticClass:"fas fa-plus"})])])]):t._e()])]):t._e()])},staticRenderFns:[]};var Q=a("VU/8")(J,H,!1,function(t){a("SYT8")},"data-v-063b92ba",null).exports,X=this;s.a.use(l.a);var q=function(t,e,a){X.a.app.$cookies.isKey("user_session")?a():a("/")},Z=new l.a({mode:"history",routes:[{path:"/",name:"Login",components:{navbar:G,body:O}},{path:"/my-kegs/",name:"MyKegs",components:{navbar:Y,body:j},beforeEnter:q},{path:"/setup",name:"Setup",components:{navbar:Y,body:Q},beforeEnter:q}]}),tt=a("hMcO"),et=a.n(tt);s.a.use(y.a);var at=new y.a.Store({state:{email:"",kegs:[]},getters:{getEmail:function(t){return t.email},getKegs:function(t){return t.kegs}},mutations:{storeEmail:function(t,e){t.email=e},storeKegs:function(t,e){for(var a=0;a<e.length;a++)t.kegs.push(e[a])}},actions:{}});a("Jmt5"),a("9M+g");s.a.use(r.a),s.a.use(c.a),s.a.use(et.a,"http://localhost:3000"),s.a.config.productionTip=!1,new s.a({el:"#app",router:Z,store:at,components:{App:i},template:"<App/>"})},SYT8:function(t,e){},UgPc:function(t,e){},YBWt:function(t,e){},YfcY:function(t,e){},sz5s:function(t,e){},tIfX:function(t,e){},yJjI:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2e47cdee3136e66ee018.js.map