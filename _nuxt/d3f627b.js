(window.webpackJsonp=window.webpackJsonp||[]).push([[22,8,9,10],{512:function(t,e,r){r(3)({target:"Object",stat:!0},{is:r(337)})},513:function(t,e,r){var content=r(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("5d8e99ec",content,!0,{sourceMap:!1})},514:function(t,e,r){var content=r(533);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("140c4bc2",content,!0,{sourceMap:!1})},516:function(t,e,r){"use strict";r(17),r(18),r(14),r(24);var n=r(2),o=(r(4),r(53),r(61),r(33),r(16),r(28),r(62),r(230),r(40),r(324),r(325),r(326),r(327),r(328),r(329),r(330),r(331),r(332),r(333),r(334),r(335),r(336),r(41),r(19),r(323),r(0)),c=r(97),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=["start","end","center"];function y(t,e){return h.reduce((function(r,n){return r[t+Object(l.x)(n)]=e(),r}),{})}var m=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},O=y("align",(function(){return{type:String,default:null,validator:m}})),j=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},w=y("justify",(function(){return{type:String,default:null,validator:j}})),_=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},x=y("alignContent",(function(){return{type:String,default:null,validator:_}})),P={align:Object.keys(O),justify:Object.keys(w),alignContent:Object.keys(x)},R={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,r){var n=R[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var $=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},O),{},{justify:{type:String,default:null,validator:j}},w),{},{alignContent:{type:String,default:null,validator:_}},x),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var f in r)l+=String(r[f]);var d=$.get(l);return d||function(){var t,e;for(e in d=[],P)P[e].forEach((function(t){var n=r[t],o=S(e,t,n);o&&d.push(o)}));d.push((t={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(t,"align-".concat(r.align),r.align),Object(n.a)(t,"justify-".concat(r.justify),r.justify),Object(n.a)(t,"align-content-".concat(r.alignContent),r.alignContent),t)),$.set(l,d)}(),t(r.tag,Object(c.a)(data,{staticClass:"row",class:d}),o)}})},517:function(t,e,r){"use strict";r(17),r(18),r(14),r(24);var n=r(2),o=(r(4),r(51),r(16),r(28),r(62),r(230),r(40),r(324),r(325),r(326),r(327),r(328),r(329),r(330),r(331),r(332),r(333),r(334),r(335),r(336),r(41),r(53),r(19),r(74),r(323),r(0)),c=r(97),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=h.reduce((function(t,e){return t["offset"+Object(l.x)(e)]={type:[String,Number],default:null},t}),{}),m=h.reduce((function(t,e){return t["order"+Object(l.x)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(v),offset:Object.keys(y),order:Object.keys(m)};function j(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],O)O[e].forEach((function(t){var n=r[t],o=j(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},518:function(t,e,r){"use strict";var n=r(2),o=(r(53),r(61),r(232),r(18),r(4),r(19),r(79),r(98),r(16),r(17),r(14),r(24),r(27)),c=r(105),l=r(148);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:d({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},530:function(t,e,r){"use strict";r(513)},531:function(t,e,r){var n=r(31)((function(i){return i[1]}));n.push([t.i,".logo[data-v-9cf17858]{position:absolute}@media only screen and (max-width:959.98px){.logo[data-v-9cf17858]{position:relative}}",""]),n.locals={},t.exports=n},532:function(t,e,r){"use strict";r(514)},533:function(t,e,r){var n=r(31)((function(i){return i[1]}));n.push([t.i,".right-container[data-v-37a0ede2]{border:none;border-radius:50px 0 50px 0;margin-right:0;text-align:center;width:80%}.right-container .right-container-img[data-v-37a0ede2]{height:90vh}.right-container .right-container-img .students-img[data-v-37a0ede2]{border-radius:50px 0 50px 0;height:100%;width:100%}.right-container .right-container-text[data-v-37a0ede2]{color:#fff;font-weight:700;position:relative;text-align:center;top:20%}",""]),n.locals={},t.exports=n},534:function(t,e,r){var content=r(567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("2b4fd408",content,!0,{sourceMap:!1})},545:function(t,e,r){"use strict";r.r(e);var n=r(322),o=r(9),c=r(8),l=r(22),f=r(21),d=r(10),h=r(7),v=(r(14),r(4),r(52),r(81));function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},O=function(t){Object(l.a)(r,t);var e=y(r);function r(){return Object(c.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r)}(v.Vue),j=O=m([Object(v.Component)({name:"login-header"})],O),w=(r(530),r(58)),component=Object(w.a)(j,(function(){var t=this._self._c;this._self._setupProxy;return t(n.a,{staticClass:"logo",attrs:{"max-width":"300px",src:"images/logo.png"}})}),[],!1,null,"9cf17858",null);e.default=component.exports},546:function(t,e,r){"use strict";r.r(e);var n=r(506),o=r(322),c=r(9),l=r(8),f=r(22),d=r(21),h=r(10),v=r(7),y=(r(14),r(4),r(52),r(81));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(h.a)(t);if(e){var o=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var O=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},j=function(t){Object(f.a)(r,t);var e=m(r);function r(){return Object(l.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r)}(y.Vue),w=j=O([Object(y.Component)({name:"login-page-right-image"})],j),_=(r(532),r(58)),component=Object(_.a)(w,(function(){var t=this._self._c;this._self._setupProxy;return t(n.a,{staticClass:"right-container"},[t("div",{staticClass:"right-container-img"},[t(o.a,{staticClass:"students-img",attrs:{src:"images/login-page-students.jpg"}})],1)])}),[],!1,null,"37a0ede2",null);e.default=component.exports},566:function(t,e,r){"use strict";r(534)},567:function(t,e,r){var n=r(31)((function(i){return i[1]}));n.push([t.i,".login-block[data-v-44263029]{width:70%}@media only screen and (max-width:1263.98px){.login-block[data-v-44263029]{width:100%}}",""]),n.locals={},t.exports=n},583:function(t,e,r){var content=r(609);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("e4d6ffb4",content,!0,{sourceMap:!1})},591:function(t,e,r){"use strict";r.r(e);var n=r(547),o=r(506),c=r(518),l=r(578),f=(r(52),r(8)),d=r(9),h=r(22),v=r(21),y=r(10),m=r(7),O=(r(14),r(4),r(229),r(28),r(51),r(81));function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(y.a)(t);if(e){var o=Object(y.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(v.a)(this,r)}}var w=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t,e){if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},x=function(t){Object(h.a)(r,t);var e=j(r);function r(){var t;return Object(f.a)(this,r),(t=e.apply(this,arguments)).credential={username:"",password:"",confirmPassword:""},t.formRules={username:[function(e){return""!==e||t.$t("form-error.empty-input")},function(e){return""!==e||t.$t("form-error.empty-input")},function(e){return/.+@.+\..+/.test(e)||t.$t("form-error.incorrect-email-input")}],password:[function(e){return""!==e||t.$t("form-error.empty-input")}],confirmPassword:[function(e){return""!==e||t.$t("form-error.empty-input")},function(e){return e==t.credential.password||t.$t("form-error.incorrect-confirm-password")}]},t.passwordVisible=!1,t}return Object(d.a)(r,[{key:"validateForm",value:function(){var t;(null===(t=this.$refs.form)||void 0===t?void 0:t.validate())&&this.signup()}},{key:"resetError",value:function(){}},{key:"signup",value:function(){return this.credential}},{key:"tooglePasswordVisibility",value:function(){this.passwordVisible=!this.passwordVisible}}]),r}(O.Vue);w([Object(O.PropSync)("error",{type:String}),_("design:type",String)],x.prototype,"errorMessage",void 0),w([Object(O.PropSync)("step",{type:Number}),_("design:type",Number)],x.prototype,"currentStep",void 0),w([Object(O.Emit)("reset-error"),_("design:type",Function),_("design:paramtypes",[]),_("design:returntype",void 0)],x.prototype,"resetError",null),w([Object(O.Emit)("signup"),_("design:type",Function),_("design:paramtypes",[]),_("design:returntype",void 0)],x.prototype,"signup",null);var P=x=w([Object(O.Component)({name:"signup-form"})],x),R=(r(566),r(58)),component=Object(R.a)(P,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e(o.a,{staticClass:"login-block",attrs:{fluid:""}},[e(c.a,{ref:"form",attrs:{"lazy-validation":""}},[e("div",{staticClass:"login-header text-left"},[e("h1",[t._v(t._s(t.$t("signup.signup")))]),t._v(" "),e("p",[t._v(t._s(t.$t("signup.description")))])]),t._v(" "),e("div",{staticClass:"login-email-container text-left"},[e("h4",{staticClass:"mb-2"},[t._v(t._s(t.$t("login.email")))]),t._v(" "),e(l.a,{attrs:{type:"email",rules:t.formRules.username,solo:""},on:{input:t.resetError},model:{value:t.credential.username,callback:function(e){t.$set(t.credential,"username",e)},expression:"credential.username"}}),t._v(" "),e("h4",{staticClass:"mb-2"},[t._v(t._s(t.$t("login.password")))]),t._v(" "),e(l.a,{attrs:{rules:t.formRules.password,hint:t.$t("signup.password-rule"),"append-icon":t.passwordVisible?"mdi-eye-outline":"mdi-eye-off-outline",type:t.passwordVisible?"text":"password",solo:""},on:{"click:append":t.tooglePasswordVisibility,input:t.resetError},model:{value:t.credential.password,callback:function(e){t.$set(t.credential,"password",e)},expression:"credential.password"}}),t._v(" "),e("h4",{staticClass:"mb-2"},[t._v(t._s(t.$t("login.confirm-password")))]),t._v(" "),e(l.a,{attrs:{rules:t.formRules.confirmPassword,"append-icon":t.passwordVisible?"mdi-eye-outline":"mdi-eye-off-outline",type:t.passwordVisible?"text":"password",solo:""},on:{input:t.resetError,"click:append":t.tooglePasswordVisibility},model:{value:t.credential.confirmPassword,callback:function(e){t.$set(t.credential,"confirmPassword",e)},expression:"credential.confirmPassword"}}),t._v(" "),""!==t.errorMessage?e("p",{staticClass:"my-0 red--text"},[t._v(t._s(t.errorMessage))]):t._e()],1),t._v(" "),e("div",{staticClass:"login-form-footer"},[e(n.a,{staticClass:"base-btn primary",on:{click:t.validateForm}},[t._v(t._s(t.$t("signup.submit")))])],1),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("\n                "+t._s(t.$t("signup.have-account"))+"\n                "),e("NuxtLink",{attrs:{to:"/login"}},[e("span",{staticClass:"secondary--text"},[t._v(t._s(t.$t("signup.login")))])])],1)])],1)],1)}),[],!1,null,"44263029",null);e.default=component.exports},608:function(t,e,r){"use strict";r(583)},609:function(t,e,r){var n=r(31)((function(i){return i[1]}));n.push([t.i,".login-page-container[data-v-5ceac8be]{align-items:center!important}@media only screen and (max-width:959.98px){.login-page-container[data-v-5ceac8be]{align-items:baseline!important}.carousel-container[data-v-5ceac8be]{display:none}}",""]),n.locals={},t.exports=n},652:function(t,e,r){"use strict";r.r(e);var n=r(517),o=r(516),c=(r(52),r(6)),l=r(8),f=r(9),d=r(22),h=r(21),v=r(10),y=r(7),m=(r(42),r(14),r(4),r(69),r(81)),O=r(545),j=r(546),w=r(591),_=r(147);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(h.a)(this,r)}}var P=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(y.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},R=function(t){Object(d.a)(o,t);var e,r,n=x(o);function o(){var t;return Object(l.a)(this,o),(t=n.apply(this,arguments)).errorMessage="",t}return Object(f.a)(o,[{key:"signup",value:(r=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$service.auth.signup(e);case 3:t.sent?(this.$toast.success(this.$t("signup-account-created")),this.$router.push({path:"".concat(_.b.LOGIN_PAGE_PATH,"/")})):this.$toast.error(this.$t("errors.registration-failed")),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.debug(t.t0),this.errorMessage=this.$t("errors.registration-failed").toString();case 11:case"end":return t.stop()}}),t,this,[[0,7]])}))),function(t){return r.apply(this,arguments)})},{key:"resetError",value:(e=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.errorMessage="";case 1:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),o}(m.Vue),S=R=P([Object(m.Component)({name:"Signup",layout:_.a.LAYOUT_LOGIN,components:{SignupForm:w.default,LoginPageRightImage:j.default,LoginHeader:O.default}})],R),$=(r(608),r(58)),component=Object($.a)(S,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("login-header"),t._v(" "),e(o.a,{staticClass:"login-page-container full-height mb-0",attrs:{justify:"center"}},[e(n.a,{staticClass:"text-center px-10",attrs:{md:"6",sm:"12","justify-center":""}},[e("signup-form",{attrs:{error:t.errorMessage},on:{signup:t.signup,"reset-error":t.resetError}})],1),t._v(" "),e(n.a,{staticClass:"carousel-container full-height",attrs:{align:"center","delimiter-icon":"mdi-minus",justify:"center",md:"6",sm:"12"}},[e("login-page-right-image")],1)],1)],1)}),[],!1,null,"5ceac8be",null);e.default=component.exports}}]);