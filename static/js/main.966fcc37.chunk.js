(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{291:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r="https://spreadsheets.google.com/feeds/list/1Jo-2gJyM50z6f3XTmdvpJZJgt73UL3l5thKAuTJQf9U/4/public/values?alt=json",a="https://spreadsheets.google.com/feeds/list/1Jo-2gJyM50z6f3XTmdvpJZJgt73UL3l5thKAuTJQf9U/2/public/values?alt=json"},399:function(e){e.exports=JSON.parse('{"app":{"hello":"Hello World!","home":"Home","about":"About","users":"Users","twice":"TWICE"},"setting":{"settingTitle":"Device Settings","languageTitle":"Language"}}')},400:function(e){e.exports=JSON.parse('{"app":{"hello":"Hello World!","home":"Home","about":"About","users":"Users","twice":"TWICE"},"setting":{"settingTitle":"\u88dd\u7f6e\u8a2d\u5b9a","languageTitle":"\u9078\u64c7\u8a9e\u8a00"}}')},401:function(e){e.exports=JSON.parse('{"app":{"hello":"Hello World!","home":"Home","about":"About","users":"Users","twice":"\u30c8\u30a5\u30ef\u30a4\u30b9"},"setting":{"settingTitle":"\u30c7\u30d0\u30a4\u30b9\u8a2d\u5b9a","languageTitle":"\u8a00\u8a9e\u3092\u9078\u629e\u3057"}}')},402:function(e){e.exports=JSON.parse('{"app":{"hello":"Hello World!","home":"Home","about":"About","users":"Users","twice":"\ud2b8\uc640\uc774\uc2a4"},"setting":{"settingTitle":"\uc7a5\uce58\uc124\uc815","languageTitle":"\uc5b8\uc5b4"}}')},405:function(e,t,n){e.exports=n(874)},451:function(e,t,n){},874:function(e,t,n){"use strict";n.r(t);n(406),n(411),n(429),n(430),n(438),n(439),n(441),n(442),n(443);var r=n(0),a=n.n(r),c=n(198),o=n.n(c),i=(n(451),n(74)),u=n.n(i),l=n(133),s=n(36),f=n(37),p=n(38),h=n(39),d=n(25),m=n(132),g=function(e){var t=("; "+document.cookie).split("; "+e+"=");if(2===t.length)return t.pop().split(";").shift()},b=function(e,t){document.cookie=e.toString()+"="+t+";path=/"},v=n(136),y=n(291),O={primaryPink:"#F8CDDB"},j={primaryPink:"#F8CDDB"},w=function(e,t){return{type:"UPDATE_THEME",themeName:e,themeColors:t}},x=function(e){return b("language",e),v.a.changeLanguage(e),{type:"UPDATE_LANGUAGE",lang:e}},E=function(e){return{type:"UPDATE_NEWS",result:e}},k=n(199),P=n(95),T=n(22),S=n(23);function D(){var e=Object(T.a)(["\n  padding-top: 60px;\n  padding-bottom: 50px;\n  padding-right: 18px;\n  width: calc(100% + 18px);\n  height: 100%;\n  overflow-y: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  @media screen and (max-width: 767px) {\n    width: 100%;\n    padding-right: 0px;\n  }\n"]);return D=function(){return e},e}function R(){var e=Object(T.a)(["\n  width: 375px;\n  height: 667px;\n  border-radius: 10px;\n  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  position: relative;\n  @media screen and (max-width: 767px) {\n    width: 100%;\n    height: 100%;\n    box-shadow: none;\n    border-radius: 0;\n  }\n"]);return R=function(){return e},e}function C(){var e=Object(T.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return C=function(){return e},e}function A(){var e=Object(T.a)(["\n  padding: 35px;\n  height: 100vh;\n  min-height: 100vh;\n  max-height: 100vh;\n  @media screen and (max-width: 767px) {\n    padding: 0;\n  }\n"]);return A=function(){return e},e}var H=S.a.div(A()),U=S.a.div(C()),N=S.a.div(R()),J=S.a.div(D());var L=Object(r.lazy)((function(){return Promise.all([n.e(5),n.e(4)]).then(n.bind(null,876))})),z=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,877))})),W=function(e){Object(p.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=Object(d.a)(e);if(t()){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"loading")},a.a.createElement(L,null),a.a.createElement(z,null)))}}]),n}(r.Component);function F(){var e=Object(T.a)(["\n  padding: 12px;\n  border-bottom: 1px solid #e9e8e7;\n  &:last-child {\n    border-bottom: 0;\n  }\n"]);return F=function(){return e},e}function _(){var e=Object(T.a)(["\n  width: 100%;\n  border: 0;\n  border-radius: 0 0 10px 10px;\n  background: #f1f0f7;\n  padding: 12px;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n"]);return _=function(){return e},e}function M(){var e=Object(T.a)(["\n  background: #fff;\n  padding: 0 15px;\n"]);return M=function(){return e},e}function B(){var e=Object(T.a)(["\n  background: #f1f0f7;\n  border-radius: 10px 10px 0 0;\n  padding: 12px;\n  text-align: center;\n  font-size: 16px;\n  font-weight: bold;\n"]);return B=function(){return e},e}function G(){var e=Object(T.a)(["\n  width: 300px;\n  min-height: 100px;\n  transition: all 350ms ease;\n  transform: ",";\n"]);return G=function(){return e},e}function I(){var e=Object(T.a)(["\n  position: absolute;\n  background: rgba(0, 0, 0, 0.25);\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: ",";\n  pointer-events: ",";\n  transition: all 350ms ease;\n"]);return I=function(){return e},e}function K(){var e=Object(T.a)(["\n  border: 1px solid #fc5b9d;\n  padding: 6px;\n  min-width: 100px;\n  text-align: center;\n  border-radius: 50px;\n  color: #fc5b9d;\n"]);return K=function(){return e},e}function Q(){var e=Object(T.a)(["\n  font-size: 14px;\n  font-weight: bold;\n"]);return Q=function(){return e},e}function X(){var e=Object(T.a)(["\n  background: #fff;\n  margin: 0 -15px;\n  padding: 6px 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return X=function(){return e},e}var Z=S.a.div(X()),V=S.a.div(Q()),$=S.a.div(K()),q=S.a.div(I(),(function(e){return e.active?"1":"0"}),(function(e){return e.active?"":"none"})),Y=S.a.div(G(),(function(e){return e.active?"scale(1)":"scale(0.5)"})),ee=S.a.div(B()),te=S.a.div(M()),ne=S.a.div(_()),re=S.a.div(F()),ae=n(81);var ce=function(e){Object(p.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=Object(d.a)(e);if(t()){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={show:!1},e.handleChange=function(t){e.props.updateLanguage(t)},e.showSelection=function(){e.setState({show:!0})},e.closeSelection=function(){e.setState({show:!1})},e.transferText=function(e){var t;switch(e){case"tw":t="\u7e41\u9ad4\u4e2d\u6587";break;case"en":t="English";break;case"jp":t="\u65e5\u672c\u8a9e";break;case"kr":t="\ud55c\uad6d\uc5b4";break;default:t="default"}return t},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this,t=this.state.show;return a.a.createElement(Z,null,a.a.createElement(V,null,a.a.createElement(ae.a,null,(function(e){return a.a.createElement(a.a.Fragment,null,e("setting.languageTitle"))}))),a.a.createElement($,{onClick:this.showSelection},this.transferText(this.props.lang)),a.a.createElement(q,{active:t,onClick:this.closeSelection},a.a.createElement(Y,{active:t},a.a.createElement(ee,null,a.a.createElement(ae.a,null,(function(e){return a.a.createElement(a.a.Fragment,null,e("setting.languageTitle"))}))),a.a.createElement(te,null,[{name:"\u7e41\u9ad4\u4e2d\u6587",value:"tw"},{name:"English",value:"en"},{name:"\u65e5\u672c\u8a9e",value:"jp"},{name:"\ud55c\uad6d\uc5b4",value:"kr"}].map((function(t,n){return a.a.createElement(re,{key:n,onClick:e.handleChange.bind(e,t.value)},t.name)}))),a.a.createElement(ne,null,"\u78ba\u8a8d"))))}}]),n}(r.Component),oe=Object(m.b)((function(e){return{lang:e.app.updateLanguage.lang}}),(function(e){return{updateLanguage:function(t){return e(x(t))}}}))(ce);function ie(){var e=Object(T.a)(["\n  font-size: 14px;\n  color: #666;\n  margin-bottom: 8px;\n"]);return ie=function(){return e},e}function ue(){var e=Object(T.a)(["\n  background: #f1f0f7;\n  padding: 15px;\n  min-height: 100%;\n"]);return ue=function(){return e},e}var le=S.a.div(ue()),se=S.a.p(ie()),fe=function(e){Object(p.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=Object(d.a)(e);if(t()){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return a.a.createElement(le,null,a.a.createElement(se,null,a.a.createElement(ae.a,null,(function(e){return a.a.createElement(a.a.Fragment,null,e("setting.settingTitle"))}))),a.a.createElement(oe,null))}}]),n}(r.Component);var pe=function(e){Object(p.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=Object(d.a)(e);if(t()){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Page404"))}}]),n}(r.Component);function he(){var e=Object(T.a)(["\n  width: 100%;\n  min-height: 60px;\n  background: ",";\n  top: 0;\n  left: 0;\n  position: absolute;\n  transition: all 500ms ease;\n  z-index: 99;\n  @media (max-width: 767px) {\n    position: fixed;\n    top: 0;\n    left: 0;\n  }\n"]);return he=function(){return e},e}var de=S.a.header(he(),(function(e){return e.themeColors.primaryPink}));var me=function(e){Object(p.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=Object(d.a)(e);if(t()){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props,t=e.themeColors,n=e.headerHide;return a.a.createElement(de,{themeColors:t,headerHide:n},a.a.createElement(ae.a,null,(function(e){return a.a.createElement(a.a.Fragment,null,e("app.twice"))})))}}]),n}(r.Component);function ge(){var e=Object(T.a)(["\n  width: 20%;\n  border-right: 1px solid #e9e8e7;\n  background: ",";\n  a {\n    display: block;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  &:last-child {\n    border-right: 0;\n  }\n"]);return ge=function(){return e},e}function be(){var e=Object(T.a)(["\n  width: 100%;\n  height: 45px;\n  position: absolute;\n  bottom: 0;\n  border-top: 1px solid #e9e8e7;\n  background: #fff;\n  z-index: 99;\n  display: flex;\n  @media (max-width: 767px) {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n  }\n"]);return be=function(){return e},e}var ve=S.a.div(be()),ye=S.a.div(ge(),(function(e){return e.active?"#F8CDDB":"#ffffff"})),Oe=n(395),je=n(137);var we=[{name:"setting",icon:je.a,url:"/setting"},{name:"disc",icon:je.b,url:"/disc"},{name:"home",icon:je.d,url:"/"},{name:"products",icon:je.c,url:"/products"},{name:"members",icon:je.e,url:"/members"}],xe=function(e){Object(p.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=Object(d.a)(e);if(t()){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={active:2},e.handleClick=function(t){e.setState({active:t})},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=window.location.hash.replace("#",""),t=we.findIndex((function(t){return t.url===e}));-1!==t?this.setState({active:t}):this.setState({active:2})}},{key:"render",value:function(){var e=this;return a.a.createElement(ve,null,we.map((function(t,n){return a.a.createElement(ye,{key:n,active:e.state.active===n,onClick:e.handleClick.bind(e,n)},a.a.createElement(k.b,{to:t.url},a.a.createElement(Oe.a,{icon:t.icon,size:"lg",color:e.state.active===n?"#fff":"#666666"})))})))}}]),n}(r.Component);var Ee=function(e){Object(p.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,r=Object(d.a)(e);if(t()){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={headerHide:!1,bodyScrollTop:0},e.handleChangeTheme=function(){var t=e.props,n=t.changeTheme;n("primary"===t.themeName?"dark":"primary")},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.readThemeCookie;(0,e.setLanguage)(),t(),this.homePageFetchEvent()}},{key:"homePageFetchEvent",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.fetchNews();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t){var n=this;e.getThemeSuccessfully!==this.props.getThemeSuccessfully&&this.refs.body.addEventListener("scroll",(function(e){var t=n.state.bodyScrollTop;e.target.scrollTop>t&&e.target.scrollTop>150?n.setState({headerHide:!0}):n.setState({headerHide:!1}),n.setState({bodyScrollTop:e.target.scrollTop})}))}},{key:"shouldComponentUpdate",value:function(e,t){return e.getThemeSuccessfully!==this.props.getThemeSuccessfully||t.headerHide!==this.state.headerHide}},{key:"render",value:function(){var e=this.props,t=e.getThemeSuccessfully,n=e.themeColors,r=this.state.headerHide;return t&&a.a.createElement(k.a,null,a.a.createElement(H,null,a.a.createElement(U,null,a.a.createElement(N,null,a.a.createElement(me,{themeColors:n,headerHide:r}),a.a.createElement(J,{ref:"body"},a.a.createElement(P.c,null,a.a.createElement(P.a,{exact:!0,path:"/"},a.a.createElement(W,null)),a.a.createElement(P.a,{path:"/setting"},a.a.createElement(fe,null)),a.a.createElement(P.a,{path:"*"},a.a.createElement(pe,null)))),a.a.createElement(xe,null)))))}}]),n}(a.a.Component),ke=Object(m.b)((function(e){return{setAppActive:e.app.active,themeName:e.app.updateTheme.themeName,themeColors:e.app.updateTheme.themeColors,getThemeSuccessfully:e.app.updateTheme.getThemeSuccessfully}}),(function(e){return{setApp:function(){return e({type:"SET_APP"})},readThemeCookie:function(){return e((function(e){if(g("theme")){var t=g("theme");e(w(t,"primary"===t?O:j))}else b("theme","primary"),e(w("primary",O))}))},changeTheme:function(t){return e(function(e){return function(t){if("primary"===e){var n=O;b("theme",e),t(w(e,n))}else{var r=j;b("theme",e),t(w(e,r))}}}(t))},setLanguage:function(){return e((function(e){if(g("language")){var t=g("language");e(x(t)),v.a.changeLanguage(t),console.log("now_language_cookie",t)}else b("language","tw")}))},fetchNews:function(){return e(function(){var e=Object(l.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(y.a);case 3:if(200!==(n=e.sent).status){e.next=11;break}return e.next=7,n.json();case 7:r=e.sent,t(E(r.feed.entry)),e.next=12;break;case 11:throw new Error("fetch news failed");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}())}}}))(Ee);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Pe=n(72),Te=n(397),Se=n(398),De=n(94);function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Re(n,!0).forEach((function(t){Object(De.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ae={getThemeSuccessfully:!1,themeName:"primary"};function He(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?He(n,!0).forEach((function(t){Object(De.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):He(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ne={lang:"tw"};function Je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Je(n,!0).forEach((function(t){Object(De.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Je(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ze={fetched:!1,result:[]};function We(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?We(n,!0).forEach((function(t){Object(De.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):We(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _e={active:!0},Me=Object(Pe.combineReducers)({index:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_APP":return Fe({},e,{active:!1});default:return e}},updateTheme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_THEME":return Ce({},e,{getThemeSuccessfully:!0,themeName:t.themeName,themeColors:t.themeColors});default:return e}},updateLanguage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LANGUAGE":return Ue({},e,{lang:t.lang});default:return e}},newsResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_NEWS":return Le({},e,{fetched:!0,result:t.result});default:return e}}}),Be=Object(Pe.combineReducers)({app:Me}),Ge=Object(Pe.createStore)(Be,Object(Se.composeWithDevTools)(Object(Pe.applyMiddleware)(Te.a))),Ie=n(399),Ke=n(400),Qe=n(401),Xe={en:{translation:Ie},tw:{translation:Ke},kr:{translation:n(402)},jp:{translation:Qe}};v.a.use(ae.b).init({resources:Xe,lng:"tw",fallbackLng:"tw",interpolation:{escapeValue:!1}});v.a,n(471),n(673),n(674),n(682),n(873);o.a.render(a.a.createElement(m.a,{store:Ge},a.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[405,1,2]]]);