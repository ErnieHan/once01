(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{291:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r="https://spreadsheets.google.com/feeds/list/1Jo-2gJyM50z6f3XTmdvpJZJgt73UL3l5thKAuTJQf9U/4/public/values?alt=json",a="https://spreadsheets.google.com/feeds/list/1Jo-2gJyM50z6f3XTmdvpJZJgt73UL3l5thKAuTJQf9U/2/public/values?alt=json"},399:function(e){e.exports=JSON.parse('{"app":{"hello":"Hello World!","home":"Home","about":"About","users":"Users","twice":"TWICE"},"setting":{"settingTitle":"Device Settings","languageTitle":"Language"}}')},400:function(e){e.exports=JSON.parse('{"app":{"hello":"Hello World!","home":"Home","about":"About","users":"Users","twice":"TWICE"},"setting":{"settingTitle":"\u88dd\u7f6e\u8a2d\u5b9a","languageTitle":"\u9078\u64c7\u8a9e\u8a00"}}')},401:function(e){e.exports=JSON.parse('{"app":{"hello":"Hello World!","home":"Home","about":"About","users":"Users","twice":"\u30c8\u30a5\u30ef\u30a4\u30b9"},"setting":{"settingTitle":"\u30c7\u30d0\u30a4\u30b9\u8a2d\u5b9a","languageTitle":"\u8a00\u8a9e\u3092\u9078\u629e\u3057"}}')},402:function(e){e.exports=JSON.parse('{"app":{"hello":"Hello World!","home":"Home","about":"About","users":"Users","twice":"\ud2b8\uc640\uc774\uc2a4"},"setting":{"settingTitle":"\uc7a5\uce58\uc124\uc815","languageTitle":"\uc5b8\uc5b4"}}')},406:function(e,t,n){e.exports=n(876)},452:function(e,t,n){},472:function(e,t,n){},876:function(e,t,n){"use strict";n.r(t);n(407),n(412),n(430),n(431),n(439),n(440),n(442),n(443),n(444);var r=n(0),a=n.n(r),c=n(198),o=n.n(c),i=(n(452),n(75)),u=n.n(i),l=n(134),s=n(32),f=n(33),p=n(34),h=n(35),d=n(22),m=n(96),g=function(e){var t=("; "+document.cookie).split("; "+e+"=");if(2===t.length)return t.pop().split(";").shift()},b=function(e,t){document.cookie=e.toString()+"="+t+";path=/"},v=n(84),y=n(291),O={primaryPink:"#F8CDDB"},j={primaryPink:"#F8CDDB"},w=function(e,t){return{type:"UPDATE_THEME",themeName:e,themeColors:t}},x=function(e){return b("language",e),v.a.changeLanguage(e),{type:"UPDATE_LANGUAGE",lang:e}},E=function(e){return{type:"UPDATE_NEWS",result:e}},k=n(199),P=n(97),S=n(12),T=n(13);function D(){var e=Object(S.a)(["\n  padding-top: 60px;\n  padding-bottom: 50px;\n  padding-right: 18px;\n  width: calc(100% + 18px);\n  height: 100%;\n  overflow-y: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  @media screen and (max-width: 767px) {\n    width: 100%;\n    padding-right: 0px;\n  }\n"]);return D=function(){return e},e}function R(){var e=Object(S.a)(["\n  width: 375px;\n  height: 667px;\n  border-radius: 10px;\n  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  position: relative;\n  @media screen and (max-width: 767px) {\n    width: 100%;\n    height: 100%;\n    box-shadow: none;\n    border-radius: 0;\n  }\n"]);return R=function(){return e},e}function C(){var e=Object(S.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return C=function(){return e},e}function A(){var e=Object(S.a)(["\n  padding: 35px;\n  height: 100vh;\n  min-height: 100vh;\n  max-height: 100vh;\n  @media screen and (max-width: 767px) {\n    padding: 0;\n  }\n"]);return A=function(){return e},e}var H=T.a.div(A()),U=T.a.div(C()),L=T.a.div(R()),N=T.a.div(D()),J=n(72);function z(){var e=Object(S.a)(["\n  width: 100%;\n  height: 60px;\n  background: #f8cddb;\n"]);return z=function(){return e},e}function M(){var e=Object(S.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  top: 0;\n  left: ",";\n  z-index: 99;\n  transition: all 350ms ease;\n"]);return M=function(){return e},e}function F(){var e=Object(S.a)(["\n  width: 70%;\n  padding-left: 8px;\n  h3 {\n    font-size: 17px;\n    margin-bottom: 8px;\n  }\n  p {\n    font-size: 13px;\n  }\n"]);return F=function(){return e},e}function W(){var e=Object(S.a)(["\n  width: 30%;\n  height: 0;\n  padding-bottom: 30%;\n  background-image: ",";\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n"]);return W=function(){return e},e}function $(){var e=Object(S.a)(["\n  display: flex;\n  margin-bottom: 8px;\n"]);return $=function(){return e},e}function _(){var e=Object(S.a)(["\n  padding: 15px;\n"]);return _=function(){return e},e}var B=T.a.div(_()),I=T.a.div($()),G=T.a.div(W(),(function(e){return"url(".concat(e.img,")")})),K=T.a.div(F()),Q=T.a.div(M(),(function(e){return e.active?"0":"100%"})),X=T.a.div(z());function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(n,!0).forEach((function(t){Object(J.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q=function(e){Object(p.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=Object(d.a)(e);if(t()){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={showModal:!1,modal:{title:"",contentText:""}},e.handleClick=function(t){var n=v.a.language;console.log(t["gsx$".concat(n,"title")]),e.setState({showModal:!0,modal:V({},e.state.modal,{title:t["gsx$".concat(n,"title")].$t,contentText:t.gsx$subtitle.$t})})},e.closeModal=function(){e.setState({showModal:!1})},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this,t=this.props.newsResult,n=v.a.language;return a.a.createElement(B,null,t.fetched?t.result.map((function(t,r){return a.a.createElement(I,{key:r,onClick:e.handleClick.bind(e,t)},a.a.createElement(G,{img:t.gsx$imgurl.$t}),a.a.createElement(K,null,a.a.createElement("h3",null,t["gsx$".concat(n,"title")].$t)))})):null,a.a.createElement(Q,{active:this.state.showModal},a.a.createElement(X,{onClick:this.closeModal},this.state.modal.title)))}}]),n}(r.Component),Y=Object(m.b)((function(e){return{newsResult:e.app.newsResult}}),null)(q);var ee=Object(r.lazy)((function(){return Promise.all([n.e(4),n.e(3)]).then(n.bind(null,878))})),te=function(e){Object(p.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=Object(d.a)(e);if(t()){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"loading")},a.a.createElement(ee,null)),a.a.createElement(Y,null))}}]),n}(r.Component);function ne(){var e=Object(S.a)(["\n  padding: 12px;\n  border-bottom: 1px solid #e9e8e7;\n  &:last-child {\n    border-bottom: 0;\n  }\n"]);return ne=function(){return e},e}function re(){var e=Object(S.a)(["\n  width: 100%;\n  border: 0;\n  border-radius: 0 0 10px 10px;\n  background: #f1f0f7;\n  padding: 12px;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n"]);return re=function(){return e},e}function ae(){var e=Object(S.a)(["\n  background: #fff;\n  padding: 0 15px;\n"]);return ae=function(){return e},e}function ce(){var e=Object(S.a)(["\n  background: #f1f0f7;\n  border-radius: 10px 10px 0 0;\n  padding: 12px;\n  text-align: center;\n  font-size: 16px;\n  font-weight: bold;\n"]);return ce=function(){return e},e}function oe(){var e=Object(S.a)(["\n  width: 300px;\n  min-height: 100px;\n  transition: all 350ms ease;\n  transform: ",";\n"]);return oe=function(){return e},e}function ie(){var e=Object(S.a)(["\n  position: absolute;\n  background: rgba(0, 0, 0, 0.25);\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: ",";\n  pointer-events: ",";\n  transition: all 350ms ease;\n"]);return ie=function(){return e},e}function ue(){var e=Object(S.a)(["\n  border: 1px solid #fc5b9d;\n  padding: 6px;\n  min-width: 100px;\n  text-align: center;\n  border-radius: 50px;\n  color: #fc5b9d;\n"]);return ue=function(){return e},e}function le(){var e=Object(S.a)(["\n  font-size: 14px;\n  font-weight: bold;\n"]);return le=function(){return e},e}function se(){var e=Object(S.a)(["\n  background: #fff;\n  margin: 0 -15px;\n  padding: 6px 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return se=function(){return e},e}var fe=T.a.div(se()),pe=T.a.div(le()),he=T.a.div(ue()),de=T.a.div(ie(),(function(e){return e.active?"1":"0"}),(function(e){return e.active?"":"none"})),me=T.a.div(oe(),(function(e){return e.active?"scale(1)":"scale(0.5)"})),ge=T.a.div(ce()),be=T.a.div(ae()),ve=T.a.div(re()),ye=T.a.div(ne()),Oe=n(82);var je=function(e){Object(p.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=Object(d.a)(e);if(t()){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={show:!1},e.handleChange=function(t){e.props.updateLanguage(t)},e.showSelection=function(){e.setState({show:!0})},e.closeSelection=function(){e.setState({show:!1})},e.transferText=function(e){var t;switch(e){case"tw":t="\u7e41\u9ad4\u4e2d\u6587";break;case"en":t="English";break;case"jp":t="\u65e5\u672c\u8a9e";break;case"kr":t="\ud55c\uad6d\uc5b4";break;default:t="default"}return t},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this,t=this.state.show;return a.a.createElement(fe,null,a.a.createElement(pe,null,a.a.createElement(Oe.a,null,(function(e){return a.a.createElement(a.a.Fragment,null,e("setting.languageTitle"))}))),a.a.createElement(he,{onClick:this.showSelection},this.transferText(this.props.lang)),a.a.createElement(de,{active:t,onClick:this.closeSelection},a.a.createElement(me,{active:t},a.a.createElement(ge,null,a.a.createElement(Oe.a,null,(function(e){return a.a.createElement(a.a.Fragment,null,e("setting.languageTitle"))}))),a.a.createElement(be,null,[{name:"\u7e41\u9ad4\u4e2d\u6587",value:"tw"},{name:"English",value:"en"},{name:"\u65e5\u672c\u8a9e",value:"jp"},{name:"\ud55c\uad6d\uc5b4",value:"kr"}].map((function(t,n){return a.a.createElement(ye,{key:n,onClick:e.handleChange.bind(e,t.value)},t.name)}))),a.a.createElement(ve,null,"\u78ba\u8a8d"))))}}]),n}(r.Component),we=Object(m.b)((function(e){return{lang:e.app.updateLanguage.lang}}),(function(e){return{updateLanguage:function(t){return e(x(t))}}}))(je);function xe(){var e=Object(S.a)(["\n  font-size: 14px;\n  color: #666;\n  margin-bottom: 8px;\n"]);return xe=function(){return e},e}function Ee(){var e=Object(S.a)(["\n  background: #f1f0f7;\n  padding: 15px;\n  min-height: 100%;\n"]);return Ee=function(){return e},e}var ke=T.a.div(Ee()),Pe=T.a.p(xe()),Se=function(e){Object(p.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=Object(d.a)(e);if(t()){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return a.a.createElement(ke,null,a.a.createElement(Pe,null,a.a.createElement(Oe.a,null,(function(e){return a.a.createElement(a.a.Fragment,null,e("setting.settingTitle"))}))),a.a.createElement(we,null))}}]),n}(r.Component);var Te=function(e){Object(p.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=Object(d.a)(e);if(t()){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Page404"))}}]),n}(r.Component);function De(){var e=Object(S.a)(["\n  width: 100%;\n  min-height: 60px;\n  background: ",";\n  top: 0;\n  left: 0;\n  position: absolute;\n  transition: all 500ms ease;\n  z-index: 99;\n  @media (max-width: 767px) {\n    position: fixed;\n    top: 0;\n    left: 0;\n  }\n"]);return De=function(){return e},e}var Re=T.a.header(De(),(function(e){return e.themeColors.primaryPink}));var Ce=function(e){Object(p.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=Object(d.a)(e);if(t()){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props,t=e.themeColors,n=e.headerHide;return a.a.createElement(Re,{themeColors:t,headerHide:n},a.a.createElement(Oe.a,null,(function(e){return a.a.createElement(a.a.Fragment,null,e("app.twice"))})))}}]),n}(r.Component);function Ae(){var e=Object(S.a)(["\n  width: 20%;\n  border-right: 1px solid #e9e8e7;\n  background: ",";\n  a {\n    display: block;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  &:last-child {\n    border-right: 0;\n  }\n"]);return Ae=function(){return e},e}function He(){var e=Object(S.a)(["\n  width: 100%;\n  height: 45px;\n  position: absolute;\n  bottom: 0;\n  border-top: 1px solid #e9e8e7;\n  background: #fff;\n  z-index: 99;\n  display: flex;\n  @media (max-width: 767px) {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n  }\n"]);return He=function(){return e},e}var Ue=T.a.div(He()),Le=T.a.div(Ae(),(function(e){return e.active?"#F8CDDB":"#ffffff"})),Ne=n(395),Je=n(137);var ze=[{name:"setting",icon:Je.a,url:"/setting"},{name:"disc",icon:Je.b,url:"/disc"},{name:"home",icon:Je.d,url:"/"},{name:"products",icon:Je.c,url:"/products"},{name:"members",icon:Je.e,url:"/members"}],Me=function(e){Object(p.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=Object(d.a)(e);if(t()){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={active:2},e.handleClick=function(t){e.setState({active:t})},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=window.location.hash.replace("#",""),t=ze.findIndex((function(t){return t.url===e}));-1!==t?this.setState({active:t}):this.setState({active:2})}},{key:"render",value:function(){var e=this;return a.a.createElement(Ue,null,ze.map((function(t,n){return a.a.createElement(Le,{key:n,active:e.state.active===n,onClick:e.handleClick.bind(e,n)},a.a.createElement(k.b,{to:t.url},a.a.createElement(Ne.a,{icon:t.icon,size:"lg",color:e.state.active===n?"#fff":"#666666"})))})))}}]),n}(r.Component),Fe=n(403);n(472);function We(){var e=Object(r.useState)(""),t=Object(Fe.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){document.getElementById("camera").addEventListener("change",(function(e){console.log(e.target.files);var t=new FileReader;t.onload=function(e){console.log("result",e.target.result),c(e.target.result)},t.readAsDataURL(e.target.files[0])}))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,"\u958b\u555f\u76f8\u6a5fA",a.a.createElement("input",{id:"camera",type:"file",accept:"image/*",capture:"camera"}),a.a.createElement("img",{src:n,alt:""})),a.a.createElement("div",null,"\u958b\u555f\u76f8\u6a5fB",a.a.createElement("input",{type:"file",accept:"video/*",capture:"camcorder"})),a.a.createElement("div",null,"\u958b\u555f\u9304\u5f71",a.a.createElement("input",{type:"file",accept:"audio/*",capture:"microphone"})))}var $e=function(e){Object(p.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=Object(d.a)(e);if(t()){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={headerHide:!1,bodyScrollTop:0},e.handleChangeTheme=function(){var t=e.props,n=t.changeTheme;n("primary"===t.themeName?"dark":"primary")},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.readThemeCookie;(0,e.setLanguage)(),t(),this.homePageFetchEvent()}},{key:"homePageFetchEvent",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.fetchNews();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t){var n=this;e.getThemeSuccessfully!==this.props.getThemeSuccessfully&&this.refs.body.addEventListener("scroll",(function(e){var t=n.state.bodyScrollTop;e.target.scrollTop>t&&e.target.scrollTop>150?n.setState({headerHide:!0}):n.setState({headerHide:!1}),n.setState({bodyScrollTop:e.target.scrollTop})}))}},{key:"shouldComponentUpdate",value:function(e,t){return e.getThemeSuccessfully!==this.props.getThemeSuccessfully||t.headerHide!==this.state.headerHide}},{key:"render",value:function(){var e=this.props,t=e.getThemeSuccessfully,n=e.themeColors,r=this.state.headerHide;return t&&a.a.createElement(k.a,null,a.a.createElement(H,null,a.a.createElement(U,null,a.a.createElement(L,null,a.a.createElement(Ce,{themeColors:n,headerHide:r}),a.a.createElement(N,{ref:"body"},a.a.createElement(P.c,null,a.a.createElement(P.a,{exact:!0,path:"/"},a.a.createElement(te,null)),a.a.createElement(P.a,{path:"/setting"},a.a.createElement(Se,null)),a.a.createElement(P.a,{path:"/capture"},a.a.createElement(We,null)),a.a.createElement(P.a,{path:"*"},a.a.createElement(Te,null)))),a.a.createElement(Me,null)))))}}]),n}(a.a.Component),_e=Object(m.b)((function(e){return{setAppActive:e.app.active,themeName:e.app.updateTheme.themeName,themeColors:e.app.updateTheme.themeColors,getThemeSuccessfully:e.app.updateTheme.getThemeSuccessfully}}),(function(e){return{setApp:function(){return e({type:"SET_APP"})},readThemeCookie:function(){return e((function(e){if(g("theme")){var t=g("theme");e(w(t,"primary"===t?O:j))}else b("theme","primary"),e(w("primary",O))}))},changeTheme:function(t){return e(function(e){return function(t){if("primary"===e){var n=O;b("theme",e),t(w(e,n))}else{var r=j;b("theme",e),t(w(e,r))}}}(t))},setLanguage:function(){return e((function(e){if(g("language")){var t=g("language");e(x(t)),v.a.changeLanguage(t),console.log("now_language_cookie",t)}else b("language","tw")}))},fetchNews:function(){return e(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(y.a);case 3:if(200!==(n=e.sent).status){e.next=11;break}return e.next=7,n.json();case 7:r=e.sent,t(E(r.feed.entry)),e.next=12;break;case 11:throw new Error("fetch news failed");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}())}}}))($e);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=n(73),Ie=n(397),Ge=n(398);function Ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Qe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ke(n,!0).forEach((function(t){Object(J.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ke(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Xe={getThemeSuccessfully:!1,themeName:"primary"};function Ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ze(n,!0).forEach((function(t){Object(J.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ze(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var qe={lang:"tw"};function Ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function et(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ye(n,!0).forEach((function(t){Object(J.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ye(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var tt={fetched:!1,result:[]};function nt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?nt(n,!0).forEach((function(t){Object(J.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var at={active:!0},ct=Object(Be.combineReducers)({index:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_APP":return rt({},e,{active:!1});default:return e}},updateTheme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_THEME":return Qe({},e,{getThemeSuccessfully:!0,themeName:t.themeName,themeColors:t.themeColors});default:return e}},updateLanguage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LANGUAGE":return Ve({},e,{lang:t.lang});default:return e}},newsResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_NEWS":return et({},e,{fetched:!0,result:t.result});default:return e}}}),ot=Object(Be.combineReducers)({app:ct}),it=Object(Be.createStore)(ot,Object(Ge.composeWithDevTools)(Object(Be.applyMiddleware)(Ie.a))),ut=n(399),lt=n(400),st=n(401),ft={en:{translation:ut},tw:{translation:lt},kr:{translation:n(402)},jp:{translation:st}};v.a.use(Oe.b).init({resources:ft,lng:"tw",fallbackLng:"tw",interpolation:{escapeValue:!1}});v.a,n(473),n(675),n(676),n(684),n(875);o.a.render(a.a.createElement(m.a,{store:it},a.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[406,1,2]]]);