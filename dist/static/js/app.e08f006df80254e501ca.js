webpackJsonp([1],{"1/oy":function(t,e){},"26zX":function(t,e){},"6OaC":function(t,e){},"6xg8":function(t,e){},"81Ae":function(t,e){},"9M+g":function(t,e){},AFPf:function(t,e){},GfHa:function(t,e){},H2NY:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},MrdY:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{attrs:{name:"navbar"}}),this._v(" "),e("router-view",{attrs:{name:"body"}})],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},n,!1,function(t){a("81Ae")},null,null).exports,r=a("e6fC"),o=a("ppUw"),c=a.n(o),l=a("/ocq"),d=a("Dd8w"),u=a.n(d),m=a("Xxa5"),v=a.n(m),g=a("exGp"),p=a.n(g),f=a("mtWM"),b=a.n(f),h=function(){return b.a.create({baseURL:"https://helm-iot-server.herokuapp.com",withCredentials:!0})},_={name:"BounceLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},size:{type:String,default:"60px"},margin:{type:String,default:"2px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,height:this.size,width:this.size,borderRadius:this.radius,opacity:.6,position:"absolute",top:0,left:0}}},computed:{spinnerBasicStyle:function(){return{height:this.size,width:this.size,position:"relative"}}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"v-spinner"},[e("div",{staticClass:"v-bounce v-bounce1",style:this.spinnerBasicStyle},[e("div",{staticClass:"v-bounce v-bounce2",style:this.spinnerStyle}),e("div",{staticClass:"v-bounce v-bounce3",style:this.spinnerStyle})])])},staticRenderFns:[]};var w=a("VU/8")(_,C,!1,function(t){a("AFPf")},null,null).exports,x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"keg mx-auto"},[a("div",{staticClass:"beer",style:{height:t.beerLevel,background:t.computeColor}},[t._m(0),t._v(" "),a("div",{staticClass:"bubble bubble1"}),t._v(" "),a("div",{staticClass:"bubble bubble2"}),t._v(" "),a("div",{staticClass:"bubble bubble3"}),t._v(" "),a("div",{staticClass:"bubble bubble4"}),t._v(" "),a("div",{staticClass:"bubble bubble5"})])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"foam"},[a("div",{staticClass:"foam-1"}),t._v(" "),a("div",{staticClass:"foam-2"}),t._v(" "),a("div",{staticClass:"foam-3"}),t._v(" "),a("div",{staticClass:"foam-4"}),t._v(" "),a("div",{staticClass:"foam-5"}),t._v(" "),a("div",{staticClass:"foam-6"}),t._v(" "),a("div",{staticClass:"foam-7"}),t._v(" "),a("div",{staticClass:"foam-8"}),t._v(" "),a("div",{staticClass:"foam-9"}),t._v(" "),a("div",{staticClass:"foam-10"}),t._v(" "),a("div",{staticClass:"foam-11"}),t._v(" "),a("div",{staticClass:"foam-12"}),t._v(" "),a("div",{staticClass:"foam-13"}),t._v(" "),a("div",{staticClass:"foam-14"}),t._v(" "),a("div",{staticClass:"foam-15"})])}]};var k=a("VU/8")({computed:{beerLevel:function(){return this.percent+"%"},computeColor:function(){switch(this.beerColor){case 0:return"linear-gradient(#ffe377, #f7c600)";case 1:return"linear-gradient(#a33700, #882300)";case 2:return"linear-gradient(#440600, #2f0200)"}}},props:["percent","beerColor"]},x,!1,function(t){a("26zX")},null,null).exports,y=a("NYxO"),K={data:function(){return{changeSettings:!0,connected:!1,fullWeight:null,menuItems:!1,offset:null,waiting:!1,weight:null}},components:{BounceLoader:w,KegGraphic:k},computed:u()({},Object(y.b)(["getEmail","getKegs"]),{percent:function(){var t=(this.weight/this.getKegs[this.num].fullWeight*100).toFixed(0);return t>100?100:t<0?0:t>=0&&t<=100?t:0},settingsTxt:function(){return this.changeSettings?"Edit":"Done"}}),created:function(){console.log("Connected to socket "+this.$socket.id),this.$socket.emit("room",this.getKegs[this.num].id),this.fullWeight=this.getKegs[this.num].fullWeight,this.offset=this.getKegs[this.num].tareWeight},methods:{changeColor:function(t){var e=this;return p()(v.a.mark(function a(){return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h().patch("/change-color",{email:e.getEmail,keg:e.num,color:t});case 2:"Color changed"===a.sent.data.message&&(e.$store.state.kegs[e.num].color=t);case 4:case"end":return a.stop()}},a,e)}))()},setFull:function(){var t=this;return p()(v.a.mark(function e(){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$store.state.kegs[t.num].fullWeight=t.weight,h().patch("/set-full-weight",{email:t.getEmail,keg:t.num,fullWeight:t.weight});case 2:case"end":return e.stop()}},e,t)}))()},tare:function(){this.waiting=!0,this.$socket.emit("tare",this.getKegs[this.num].id)}},props:["num"],sockets:{weightUpdate:function(t){t.roomId===this.getKegs[this.num].id&&(this.connected=!0,console.log("Keg"+(this.num+1)+" weight is: "+(t.weight-(t.medianOffset/1e3).toFixed(0))),this.weight=t.weight-(t.medianOffset/1e3).toFixed(0)),t.medianOffset>0&&(this.waiting=!1,this.offset=t.medianOffset)}},watch:{offset:function(){h().patch("set-tare-weight",{email:this.getEmail,keg:this.num,tareWeight:this.offset})}}},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header"},[a("span",{staticClass:"h4"},[t._v(t._s(t.getKegs[t.num].name))])]),t._v(" "),a("div",{staticClass:"card-body pt-1"},[a("div",{staticClass:"d-flex justify-content-end pb-2"},[a("i",{staticClass:"menu fas fa-bars",on:{click:function(e){t.menuItems=!t.menuItems}}})]),t._v(" "),t.menuItems?a("div",{staticClass:"mb-3"},[a("small",[t._v("Status: "),a("span",{staticClass:"badge",class:[{"badge-success":t.connected},{"badge-danger":!t.connected}]},[t._v(t._s(t.connected?"Connected":"Disconnected"))])]),t._v(" "),a("br"),t._v(" "),a("small",[t._v("Level: "+t._s(t.percent)+"%")])]):t._e(),t._v(" "),a("keg-graphic",{attrs:{percent:t.percent,beerColor:t.getKegs[t.num].color}})],1),t._v(" "),a("div",{staticClass:"card-footer"},[t.waiting?a("bounce-loader",{staticClass:"overlay d-flex align-items-center justify-content-center"}):t._e(),t._v(" "),a("span",{staticClass:"settings btn btn-sm btn-outline-primary",on:{click:function(e){t.changeSettings=!t.changeSettings}}},[a("small",[t._v(t._s(t.settingsTxt))])]),t._v(" "),a("button",{staticClass:"btn btn-color-picker pale mb-3",attrs:{disabled:t.changeSettings},on:{click:function(e){t.changeColor(0)}}}),t._v(" "),a("button",{staticClass:"btn btn-color-picker brown mb-3",attrs:{disabled:t.changeSettings},on:{click:function(e){t.changeColor(1)}}}),t._v(" "),a("button",{staticClass:"btn btn-color-picker dark mb-3",attrs:{disabled:t.changeSettings},on:{click:function(e){t.changeColor(2)}}}),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn btn-warning",attrs:{disabled:t.changeSettings},on:{click:t.tare}},[t._v("Tare")]),t._v(" "),a("button",{staticClass:"btn btn-success",attrs:{disabled:t.changeSettings},on:{click:t.setFull}},[t._v("Set to Full")])],1)])},staticRenderFns:[]};var N={components:{Keg:a("VU/8")(K,P,!1,function(t){a("oa+I")},"data-v-398aade9",null).exports},computed:u()({},Object(y.b)(["getEmail","getKegs"]))},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-5"},[a("div",{staticClass:"row m-3"},[a("div",{staticClass:"col d-flex justify-content-center text-center mx-auto"},[a("keg",{attrs:{num:0}})],1),t._v(" "),t.getKegs.length>1?a("div",{staticClass:"col mobile-margin d-flex justify-content-center text-center mx-auto"},[a("keg",{attrs:{num:1}})],1):t._e()]),t._v(" "),t.getKegs.length>2?a("div",{staticClass:"row m-3"},[a("div",{staticClass:"col d-flex justify-content-center text-center mx-auto"},[a("keg",{attrs:{num:2}})],1),t._v(" "),a("div",{staticClass:"col mobile-margin d-flex justify-content-center text-center mx-auto"},[t.getKegs.length>3?a("keg",{attrs:{num:3}}):t._e()],1)]):t._e()])},staticRenderFns:[]};var E=a("VU/8")(N,$,!1,function(t){a("6OaC")},null,null).exports,S={data:function(){return{email:"",password:"",togglePass:!1}},methods:u()({},Object(y.c)(["storeEmail"]),{login:function(){var t=this;h().post("/signup",{email:this.email,password:this.password}).then(function(e){console.log(e),"yes"===e.data.success?(t.storeEmail(t.email),t.$cookies.set("user_session",t.email,"0"),t.$router.push("/setup")):alert("Login failed")}).catch(function(t){alert(t)})}})},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-5"},[a("div",{staticClass:"row my-auto"},[a("div",{staticClass:"col d-flex justify-content-center"},[a("div",{staticClass:"card shadow text-center"},[a("div",{staticClass:"card-header h4"},[t._v("\r\n          Create Account\r\n        ")]),t._v(" "),a("div",{staticClass:"card-body"},[a("form",[a("div",{staticClass:"form-group"},[a("label",[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Password")]),t._v(" "),"checkbox"==(t.togglePass?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{id:"exampleInputPassword1",placeholder:"Password",type:"checkbox"},domProps:{checked:Array.isArray(t.password)?t._i(t.password,null)>-1:t.password},on:{change:function(e){var a=t.password,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&(t.password=a.concat([null])):i>-1&&(t.password=a.slice(0,i).concat(a.slice(i+1)))}else t.password=n}}}):"radio"==(t.togglePass?"text":"password")?a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{id:"exampleInputPassword1",placeholder:"Password",type:"radio"},domProps:{checked:t._q(t.password,null)},on:{change:function(e){t.password=null}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{id:"exampleInputPassword1",placeholder:"Password",type:t.togglePass?"text":"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-check mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.togglePass,expression:"togglePass"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"true",id:"passCheck"},domProps:{checked:Array.isArray(t.togglePass)?t._i(t.togglePass,"true")>-1:t.togglePass},on:{change:function(e){var a=t.togglePass,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i=t._i(a,"true");s.checked?i<0&&(t.togglePass=a.concat(["true"])):i>-1&&(t.togglePass=a.slice(0,i).concat(a.slice(i+1)))}else t.togglePass=n}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"passCheck"}},[t._v("View/check password before submitting")])]),t._v(" "),a("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v("Submit")])])])])])])])},staticRenderFns:[]};var T=a("VU/8")(S,D,!1,function(t){a("MrdY")},null,null).exports,F={methods:{logout:function(){this.$store.state.kegs.length=0,h().get("logout"),this.$cookies.remove("user_session"),this.$router.push("/")}}},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-sm navbar-dark bg-dark shadow"},[t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("span",{staticClass:"navbar-brand mb-0 h1"},[t._v("Kegmo")]),t._v(" "),a("router-link",{staticClass:"nav-link",attrs:{to:"/setup"}},[t._v("Setup")]),t._v(" "),a("router-link",{staticClass:"nav-link",attrs:{to:"/my-kegs"}},[t._v("View")])],1),t._v(" "),a("form",{staticClass:"form-inline my-2 my-lg-0",on:{submit:function(e){return e.preventDefault(),t.logout(e)}}},[a("button",{staticClass:"btn btn-warning my-2 my-sm-0"},[t._v("Logout")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"#navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]};var R=a("VU/8")(F,A,!1,function(t){a("6xg8")},null,null).exports,B={data:function(){return{email:"",password:""}},methods:u()({},Object(y.c)(["storeEmail","storeKegs"]),{login:function(){var t=this;return p()(v.a.mark(function e(){var a,s;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h().post("/login",{email:t.email,password:t.password});case 2:return a=e.sent,e.next=5,h().get("/get-kegs",{params:{email:t.email}});case 5:(s=e.sent).data.userKegs?t.storeKegs(s.data.userKegs):s.data.message&&alert("Could not retrieve your Kegmos"),"yes"===a.data.success?(t.storeEmail(t.email),t.$cookies.set("user_session",t.email,"0"),t.$router.push("/my-kegs")):alert("Login failed...");case 8:case"end":return e.stop()}},e,t)}))()}})},j={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-sm navbar-dark bg-dark shadow"},[t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[t._m(1),t._v(" "),a("form",{staticClass:"form-inline my-2 my-lg-0",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],staticClass:"form-control mr-sm-2",attrs:{type:"email",name:"email",placeholder:"E-mail","aria-label":"E-mail"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}}],staticClass:"form-control mr-sm-2",attrs:{type:"password",name:"password",placeholder:"Password","aria-label":"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),a("button",{staticClass:"btn btn-success my-2 my-sm-0"},[t._v("Login")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"#navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"navbar-nav mr-auto"},[e("span",{staticClass:"navbar-brand mb-0 h1"},[this._v("Kegmo")])])}]};var I=a("VU/8")(B,j,!1,function(t){a("H2NY")},null,null).exports,O={data:function(){return{addSecond:!1,addThird:!1,addFourth:!1,scale:[{name:"",id:"",disableBtn:!1},{name:"",id:"",disableBtn:!1},{name:"",id:"",disableBtn:!1},{name:"",id:"",disableBtn:!1}]}},beforeRouteLeave:function(t,e,a){var s=this;return p()(v.a.mark(function e(){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("MyKegs"!==t.name){e.next=6;break}return s.$store.state.kegs.length=0,e.next=4,h().get("/get-kegs",{params:{email:s.getEmail}});case 4:(n=e.sent).data.userKegs?s.storeKegs(n.data.userKegs):n.data.message&&alert("Could not retrieve your Kegmos");case 6:a();case 7:case"end":return e.stop()}},e,s)}))()},computed:u()({},Object(y.b)(["getEmail","getKegs"])),created:function(){var t=this;return p()(v.a.mark(function e(){var a,s;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h().get("/get-kegs",{params:{email:t.getEmail}});case 2:a=e.sent,e.t0=a.data.userKegs.length,e.next=2===e.t0?6:3===e.t0?8:4===e.t0?11:15;break;case 6:return t.addSecond=!0,e.abrupt("break",16);case 8:return t.addSecond=!0,t.addThird=!0,e.abrupt("break",16);case 11:return t.addSecond=!0,t.addThird=!0,t.addFourth=!0,e.abrupt("break",16);case 15:return e.abrupt("break",16);case 16:for(s=0;s<a.data.userKegs.length;s++)t.scale[s].name=a.data.userKegs[s].name,t.scale[s].id=a.data.userKegs[s].id,t.scale[s].disableBtn=!0;case 17:case"end":return e.stop()}},e,t)}))()},methods:u()({},Object(y.c)(["storeKegs"]),{btnText:function(t){return this.scale[t].disableBtn?"Registered":"Submit"},changeName:function(t){var e=this;return p()(v.a.mark(function a(){return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h().patch("/change-name",{email:e.getEmail,keg:t,name:e.scale[t].name});case 2:"Name changed"===a.sent.data.message?e.$store.state.kegs[t].name=e.scale[t].name:alert("Name change failed");case 4:case"end":return a.stop()}},a,e)}))()},disabled:function(t){return""===this.scale[t].name},headerText:function(t){switch(t){case 1:return this.addSecond?"Register Second Kegmo":"Add Another Kegmo";case 2:return this.addThird?"Register Third Kegmo":"Add Another Kegmo";case 3:return this.addFourth?"Register Fourth Kegmo":"Add Another Kegmo"}},register:function(t){var e=this;return p()(v.a.mark(function a(){var s;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h().patch("/register",{email:e.getEmail,name:e.scale[t].name,id:e.scale[t].id});case 2:"Scale registered"===(s=a.sent).data.message?e.scale[t].disableBtn=!0:"Error"===s.data.message&&alert("There was an error registering your scale");case 4:case"end":return a.stop()}},a,e)}))()}})},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col-12 col-md"},[a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header text-center"},[t._v("\n          Register Your Kegmo\n        ")]),t._v(" "),a("div",{staticClass:"card-body text-center"},[a("form",[a("div",{staticClass:"form-group"},[a("label",[t._v("Kegmo Name")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.scale[0].name,expression:"scale[0].name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.scale[0].name},on:{input:function(e){e.target.composing||t.$set(t.scale[0],"name",e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{disabled:t.disabled(0)},on:{click:function(e){e.preventDefault(),t.changeName(0)}}},[t._v("Change")])])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Kegmo I.D. (from box)")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.scale[0].id,expression:"scale[0].id"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.scale[0].id},on:{input:function(e){e.target.composing||t.$set(t.scale[0],"id",e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.scale[0].disableBtn},on:{click:function(e){e.preventDefault(),t.register(0)}}},[t._v(t._s(t.btnText(0)))])])])])]),t._v(" "),a("div",{staticClass:"col-12 col-md mobile-margin"},[a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header text-center"},[t._v("\n          "+t._s(t.headerText(1))+"\n        ")]),t._v(" "),a("div",{staticClass:"card-body text-center"},[t.addSecond?a("form",[a("div",{staticClass:"form-group"},[a("label",[t._v("Kegmo Name")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.scale[1].name,expression:"scale[1].name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.scale[1].name},on:{input:function(e){e.target.composing||t.$set(t.scale[1],"name",e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{disabled:t.disabled(1)},on:{click:function(e){e.preventDefault(),t.changeName(1)}}},[t._v("Change")])])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Kegmo I.D. (from box)")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.scale[1].id,expression:"scale[1].id"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.scale[1].id},on:{input:function(e){e.target.composing||t.$set(t.scale[1],"id",e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.scale[1].disableBtn},on:{click:function(e){e.preventDefault(),t.register(1)}}},[t._v(t._s(t.btnText(1)))])]):a("button",{staticClass:"btn btn-dark",on:{click:function(e){t.addSecond=!0}}},[a("i",{staticClass:"fas fa-plus"})])])])])]),t._v(" "),t.addSecond?a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-12 col-md"},[a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header text-center"},[t._v("\n          "+t._s(t.headerText(2))+"\n        ")]),t._v(" "),a("div",{staticClass:"card-body text-center"},[t.addThird?a("form",[a("div",{staticClass:"form-group"},[a("label",[t._v("Kegmo Name")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.scale[2].name,expression:"scale[2].name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.scale[2].name},on:{input:function(e){e.target.composing||t.$set(t.scale[2],"name",e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{disabled:t.disabled(2)},on:{click:function(e){e.preventDefault(),t.changeName(2)}}},[t._v("Change")])])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Kegmo I.D. (from box)")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.scale[2].id,expression:"scale[2].id"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.scale[2].id},on:{input:function(e){e.target.composing||t.$set(t.scale[2],"id",e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.scale[2].disableBtn},on:{click:function(e){e.preventDefault(),t.register(2)}}},[t._v(t._s(t.btnText(2)))])]):a("button",{staticClass:"btn btn-dark",on:{click:function(e){t.addThird=!0}}},[a("i",{staticClass:"fas fa-plus"})])])])]),t._v(" "),a("div",{staticClass:"col-12 col-md mobile-margin"},[t.addThird?a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-header text-center"},[t._v("\n          "+t._s(t.headerText(3))+"\n        ")]),t._v(" "),a("div",{staticClass:"card-body text-center"},[t.addFourth?a("form",[a("div",{staticClass:"form-group"},[a("label",[t._v("Kegmo Name")]),t._v(" "),a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.scale[3].name,expression:"scale[3].name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.scale[3].name},on:{input:function(e){e.target.composing||t.$set(t.scale[3],"name",e.target.value)}}}),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{disabled:t.disabled(3)},on:{click:function(e){e.preventDefault(),t.changeName(3)}}},[t._v("Change")])])])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("Kegmo I.D. (from box)")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.scale[3].id,expression:"scale[3].id"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.scale[3].id},on:{input:function(e){e.target.composing||t.$set(t.scale[3],"id",e.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.scale[3].disableBtn},on:{click:function(e){e.preventDefault(),t.register(3)}}},[t._v(t._s(t.btnText(3)))])]):a("button",{staticClass:"btn btn-dark",on:{click:function(e){t.addFourth=!0}}},[a("i",{staticClass:"fas fa-plus"})])])]):t._e()])]):t._e()])},staticRenderFns:[]};var L=a("VU/8")(O,U,!1,function(t){a("ySwJ")},"data-v-1edaa730",null).exports;s.a.use(l.a);var V=function(t,e,a){window.$cookies.isKey("user_session")?a():a("/")},W=new l.a({mode:"history",routes:[{path:"/",name:"Login",components:{navbar:I,body:T}},{path:"/my-kegs/",name:"MyKegs",components:{navbar:R,body:E},beforeEnter:V},{path:"/setup",name:"Setup",components:{navbar:R,body:L},beforeEnter:V}]}),M=a("hMcO"),z=a.n(M);s.a.use(y.a);var Y=new y.a.Store({state:{email:"",kegs:[]},getters:{getEmail:function(t){return t.email},getKegs:function(t){return t.kegs}},mutations:{storeEmail:function(t,e){t.email=e},storeKegs:function(t,e){for(var a=0;a<e.length;a++)t.kegs.push(e[a])}},actions:{}});a("Jmt5"),a("9M+g");s.a.use(r.a),s.a.use(c.a),s.a.use(z.a,"https://helm-iot-server.herokuapp.com/"),s.a.config.productionTip=!1,new s.a({el:"#app",router:W,store:Y,components:{App:i},template:"<App/>"})},"oa+I":function(t,e){},ySwJ:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e08f006df80254e501ca.js.map