(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{w4GT:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),a=function(){},e=u("pMnS"),o=u("ra/t"),r=u("ntG5"),i=u("gIcY"),s=u("M9A9"),p=u("ZYCi"),c=u("Zq1E"),d=(u("OO+k"),function(l,n,u,t){return new(u||(u=Promise))(function(a,e){function o(l){try{i(t.next(l))}catch(l){e(l)}}function r(l){try{i(t.throw(l))}catch(l){e(l)}}function i(l){l.done?a(l.value):new u(function(n){n(l.value)}).then(o,r)}i((t=t.apply(l,n||[])).next())})}),g=function(l,n){var u,t,a,e,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function r(e){return function(r){return function(e){if(u)throw new TypeError("Generator is already executing.");for(;o;)try{if(u=1,t&&(a=2&e[0]?t.return:e[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,e[1])).done)return a;switch(t=0,a&&(e=[2&e[0],a.value]),e[0]){case 0:case 1:a=e;break;case 4:return o.label++,{value:e[1],done:!1};case 5:o.label++,t=e[1],e=[0];continue;case 7:e=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===e[0]||2===e[0])){o=0;continue}if(3===e[0]&&(!a||e[1]>a[0]&&e[1]<a[3])){o.label=e[1];break}if(6===e[0]&&o.label<a[1]){o.label=a[1],a=e;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(e);break}a[2]&&o.ops.pop(),o.trys.pop();continue}e=n.call(l,o)}catch(l){e=[6,l],t=0}finally{u=a=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,r])}}},b=function(){function l(l,n){this.alertCtrl=l,this.toastCtrl=n,this.submitted=!1}return l.prototype.ionViewDidEnter=function(){return d(this,void 0,void 0,function(){return g(this,function(l){switch(l.label){case 0:return[4,this.toastCtrl.create({message:"This does not actually send a support request.",duration:3e3})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})},l.prototype.submit=function(l){return d(this,void 0,void 0,function(){return g(this,function(n){switch(n.label){case 0:return this.submitted=!0,l.valid?(this.supportMessage="",this.submitted=!1,[4,this.toastCtrl.create({message:"Your support request has been sent.",duration:3e3})]):[3,3];case 1:return[4,n.sent().present()];case 2:n.sent(),n.label=3;case 3:return[2]}})})},l}(),f=u("CssM"),m=u("P87I"),h=t.La({encapsulation:2,styles:[["page-support .support-logo{padding:20px 0;min-height:200px;text-align:center}page-support .support-logo img{max-width:150px}page-support .list{margin-bottom:0}"]],data:{}});function v(l){return t.fb(0,[(l()(),t.Na(0,0,null,null,10,"ion-header",[],null,null,null,o.La,o.q)),t.Ma(1,49152,null,0,r.y,[t.k],null,null),(l()(),t.Na(2,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,o.pb,o.T)),t.Ma(3,49152,null,0,r.Xa,[t.k],{color:[0,"color"]},null),(l()(),t.Na(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.Z,o.e)),t.Ma(5,49152,null,0,r.g,[],null,null),(l()(),t.Na(6,0,null,0,1,"ion-menu-button",[],null,null,null,o.Xa,o.D)),t.Ma(7,49152,null,0,r.P,[t.k],null,null),(l()(),t.Na(8,0,null,0,2,"ion-title",[],null,null,null,o.ob,o.U)),t.Ma(9,49152,null,0,r.Ya,[t.k],null,null),(l()(),t.db(-1,0,["Support"])),(l()(),t.Na(11,0,null,null,34,"ion-content",[],null,null,null,o.Fa,o.k)),t.Ma(12,49152,null,0,r.r,[t.k],null,null),(l()(),t.Na(13,0,null,0,1,"div",[["class","support-logo"]],null,null,null,null,null)),(l()(),t.Na(14,0,null,null,0,"img",[["alt","Ionic Logo"],["src","assets/img/appicon.svg"]],null,null,null,null,null)),(l()(),t.Na(15,0,null,0,30,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var a=!0,e=l.component;return"submit"===n&&(a=!1!==t.Xa(l,17).onSubmit(u)&&a),"reset"===n&&(a=!1!==t.Xa(l,17).onReset()&&a),"ngSubmit"===n&&(a=!1!==e.submit(t.Xa(l,17))&&a),a},null,null)),t.Ma(16,16384,null,0,i.s,[],null,null),t.Ma(17,4210688,[["submitForm",4]],0,i.m,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.ab(2048,null,i.b,null,[i.m]),t.Ma(19,16384,null,0,i.l,[[4,i.b]],null,null),(l()(),t.Na(20,0,null,null,16,"ion-list",[["lines","none"]],null,null,null,o.Wa,o.A)),t.Ma(21,49152,null,0,r.M,[t.k],{lines:[0,"lines"]},null),(l()(),t.Na(22,0,null,0,14,"ion-item",[],null,[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==t.Xa(l,24).onClick(u)&&a),a},o.Ta,o.t)),t.Ma(23,49152,null,0,r.F,[t.k],null,null),t.Ma(24,16384,null,0,s.a,[[2,p.l],t.k],null,null),(l()(),t.Na(25,0,null,0,2,"ion-label",[["color","primary"],["position","stacked"]],null,null,null,o.Ua,o.z)),t.Ma(26,49152,null,0,r.L,[t.k],{color:[0,"color"],position:[1,"position"]},null),(l()(),t.db(-1,0,["Enter your support message below"])),(l()(),t.Na(28,0,null,0,8,"ion-textarea",[["name","supportQuestion"],["required",""],["rows","6"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"ionBlur"]],function(l,n,u){var a=!0,e=l.component;return"input"===n&&(a=!1!==t.Xa(l,31)._handleInputEvent(u.target.value)&&a),"ionBlur"===n&&(a=!1!==t.Xa(l,31)._handleBlurEvent()&&a),"ngModelChange"===n&&(a=!1!==(e.supportMessage=u)&&a),a},o.mb,o.R)),t.Ma(29,16384,null,0,i.p,[],{required:[0,"required"]},null),t.ab(1024,null,i.h,function(l){return[l]},[i.p]),t.Ma(31,16384,null,0,c.a,[t.k],null,null),t.ab(1024,null,i.i,function(l){return[l]},[c.a]),t.Ma(33,671744,[["supportQuestion",4]],0,i.n,[[2,i.b],[6,i.h],[8,null],[6,i.i]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.ab(2048,null,i.j,null,[i.n]),t.Ma(35,16384,null,0,i.k,[[4,i.j]],null,null),t.Ma(36,49152,null,0,r.Ua,[t.k],{name:[0,"name"],required:[1,"required"],rows:[2,"rows"]},null),(l()(),t.Na(37,0,null,null,3,"ion-text",[["color","danger"]],null,null,null,o.lb,o.Q)),t.Ma(38,49152,null,0,r.Ta,[t.k],{color:[0,"color"]},null),(l()(),t.Na(39,0,null,0,1,"p",[["padding-left",""]],[[8,"hidden",0]],null,null,null,null)),(l()(),t.db(-1,null,[" Support message is required "])),(l()(),t.Na(41,0,null,null,4,"div",[["padding",""]],null,null,null,null,null)),(l()(),t.Na(42,0,null,null,3,"ion-button",[["expand","block"],["type","submit"]],null,[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==t.Xa(l,44).onClick(u)&&a),a},o.Y,o.d)),t.Ma(43,49152,null,0,r.f,[t.k],{expand:[0,"expand"],type:[1,"type"]},null),t.Ma(44,16384,null,0,s.a,[[2,p.l],t.k],null,null),(l()(),t.db(-1,0,["Submit"]))],function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,21,0,"none"),l(n,26,0,"primary","stacked"),l(n,29,0,""),l(n,33,0,"supportQuestion",u.supportMessage),l(n,36,0,"supportQuestion","","6"),l(n,38,0,"danger"),l(n,43,0,"block","submit")},function(l,n){var u=n.component;l(n,15,0,t.Xa(n,19).ngClassUntouched,t.Xa(n,19).ngClassTouched,t.Xa(n,19).ngClassPristine,t.Xa(n,19).ngClassDirty,t.Xa(n,19).ngClassValid,t.Xa(n,19).ngClassInvalid,t.Xa(n,19).ngClassPending),l(n,28,0,t.Xa(n,29).required?"":null,t.Xa(n,35).ngClassUntouched,t.Xa(n,35).ngClassTouched,t.Xa(n,35).ngClassPristine,t.Xa(n,35).ngClassDirty,t.Xa(n,35).ngClassValid,t.Xa(n,35).ngClassInvalid,t.Xa(n,35).ngClassPending),l(n,39,0,t.Xa(n,33).valid||!1===u.submitted)})}var k=t.Ja("page-support",b,function(l){return t.fb(0,[(l()(),t.Na(0,0,null,null,1,"page-support",[],null,null,null,v,h)),t.Ma(1,49152,null,0,b,[f.a,m.a],null,null)],null,null)},{},{},[]),M=u("Ip0R"),y=u("95zI"),C=u("9opb"),w=u("apKv"),X=u("B4/3"),N=function(){};u.d(n,"SupportModuleNgFactory",function(){return V});var V=t.Ka(a,[],function(l){return t.Ua([t.Va(512,t.j,t.Z,[[8,[e.a,k]],[3,t.j],t.v]),t.Va(4608,M.l,M.k,[t.s,[2,M.r]]),t.Va(4608,i.t,i.t,[]),t.Va(4608,y.a,y.a,[t.x,t.g]),t.Va(4608,C.a,C.a,[y.a,t.j,t.p]),t.Va(4608,w.a,w.a,[y.a,t.j,t.p]),t.Va(1073742336,M.b,M.b,[]),t.Va(1073742336,i.r,i.r,[]),t.Va(1073742336,i.g,i.g,[]),t.Va(1073742336,X.a,X.a,[]),t.Va(1073742336,p.n,p.n,[[2,p.t],[2,p.l]]),t.Va(1073742336,N,N,[]),t.Va(1073742336,a,a,[]),t.Va(1024,p.j,function(){return[[{path:"",component:b}]]},[])])})}}]);