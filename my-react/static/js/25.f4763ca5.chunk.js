(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[25],{327:function(e,t,n){},483:function(e,t,n){"use strict";n.r(t),n.d(t,"mobileReg",(function(){return O})),n.d(t,"codeReg",(function(){return F}));n(91);var a,r=n(92),o=n.n(r),c=(n(88),n(132)),s=n.n(c),u=(n(75),n(76)),l=n.n(u),i=(n(143),n(145)),p=n.n(i),d=(n(100),n(101)),f=n.n(d),h=(n(152),n(153)),g=n.n(h),m=n(13),b=n(14),v=n(16),y=n(15),C=n(17),k=(n(327),n(0)),w=n.n(k),x=n(68),S=n(26),j=n(62),E=n(87),O=/^1(3|4|5|6|7|8|9)\d{9}$/,F=/^\d{4}$/,I=null,R=Object(S.b)()(a=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(v.a)(this,Object(y.a)(t).call(this,e))).handleCheckMobile=function(e){console.log(e);var t=n.code.state.value;n.state.toggle&&n.setState({codeFlag:O.test(e),loginFlag:O.test(e)&&F.test(t)})},n.handleCheckCode=function(e){console.log(e);var t=n.mobile.state.value;console.log(t),n.setState({loginFlag:O.test(t)&&F.test(e)})},n.star=function(){n.state.count>1?n.setState({count:--n.state.count,txt:"\u8fd8\u6709".concat(n.state.count,"S"),codeFlag:!1,toggle:!1}):(clearInterval(I),I=null,n.setState({count:60,txt:"\u53d1\u9001\u9a8c\u8bc1\u7801",codeFlag:!0,toggle:!0}))},n.computedTime=function(){n.star(),I=setInterval(n.star,1e3)},n.handleSendCode=function(){n.computedTime(),console.log(n.mobile.state.value),j.a.post("/react/aly/sendCode",{mobile:n.mobile.state.value}).then((function(e){console.log(e)}))},n.handleSumbit=function(){j.a.post("react/aly/checkCode",{mobile:n.mobile.state.value,code:n.code.state.value}).then((function(e){e.data.type?(sessionStorage.token=e.data.token,sessionStorage.mobile=n.mobile.state.value,n.props.history.push("/main/mine"),clearInterval(I),I=null,n.props.dispatch(Object(E.d)({token:e.data.token}))):(sessionStorage.token="",sessionStorage.mobile="")}))},n.state={codeFlag:!1,loginFlag:!1,count:10800,toggle:!0,txt:"\u53d1\u9001\u9a8c\u8bc1\u7801"},n}return Object(C.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.codeFlag,a=t.loginFlag,r=t.txt;this.props.mobile;return console.log(this.props.mobile),w.a.createElement("div",null,w.a.createElement(x.a,{title:"\u767b\u5f55",show:!0}),w.a.createElement(g.a,{marqueeProps:{loop:!0,style:{padding:"0 7.5px"}}},"\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u5b8c\u6210\u586b\u5199\u9a8c\u8bc1\u7801\u767b\u5f55...  \u8bf7\u8f93\u5165\u624b\u673a\u53f7\u5b8c\u6210\u586b\u5199\u9a8c\u8bc1\u7801\u767b\u5f55..."),w.a.createElement(o.a,null,w.a.createElement(s.a,null,w.a.createElement(f.a,null),w.a.createElement(p.a,{type:"tel",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7...",clear:!0,ref:function(t){return e.mobile=t},onChange:this.handleCheckMobile},"\u624b\u673a\u53f7\u7801"),w.a.createElement(f.a,null),w.a.createElement(p.a,{type:"number",placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801...",ref:function(t){return e.code=t},onChange:this.handleCheckCode},"\u9a8c\u8bc1\u7801"),w.a.createElement(l.a,{type:"warning",inline:!0,className:"left-btn",style:{backgroundColor:"#FFFF66",color:"#003366"},disabled:!n,onClick:this.handleSendCode},r),w.a.createElement(l.a,{type:"primary",style:{backgroundColor:"#CC0033",color:"#CCCC00"},disabled:!a,onClick:this.handleSumbit},"\u7acb\u5373\u767b\u9646"),w.a.createElement(f.a,null))))}}]),t}(k.Component))||a;t.default=R},62:function(e,t,n){"use strict";n(86);var a=n(6),r=n(65);n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r.a})),n.d(t,"b",(function(){return r.b}));var o=new a.b},65:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return u}));n(77);var a=n(78),r=n.n(a),o=n(69),c=n.n(o);n.d(t,"a",(function(){return c.a}));var s=n(62),u="http://47.105.44.9:4321/",l="";function i(e){r.a.hide(),r.a.fail(e,1)}function p(e){r.a.success(e,1)}c.a.defaults.baseURL=u,c.a.defaults.headers.common.token=l,c.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",c.a.interceptors.request.use((function(e){var t,n;return t=t||"\u6b63\u5728\u8bf7\u6c42",n=n||1,r.a.hide(),r.a.loading(t,n,(function(){})),l=sessionStorage.token?sessionStorage.token:"",e.headers.token=l,e}),(function(e){var t;return t="\u8bf7\u6c42\u5931\u8d25,\u7f51\u7edc\u5f02\u5e38",r.a.offline(t,1),Promise.reject(e)})),c.a.interceptors.response.use((function(e){return console.log(e),"3000"==e.data.code&&s.c.push("/login"),e.data.type?p(e.data.msg):0==e.data.type?i(e.data.msg):p(e.data.msg),e}),(function(e){return i("\u54cd\u5e94\u5931\u8d25,\u670d\u52a1\u5f02\u5e38"),Promise.reject(e)}))},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));n(80);var a=n(81),r=n.n(a),o=(n(82),n(83)),c=n.n(o),s=(n(84),n(85)),u=n.n(s),l=(n(71),n(72)),i=n.n(l),p=n(13),d=n(14),f=n(16),h=n(15),g=n(17),m=(n(70),n(0)),b=n.n(m),v=n(62),y=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"handelGoBack",value:function(e){e&&v.c.goBack()}},{key:"handelGoSearch",value:function(){v.c.push("/search")}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.show,r=t.serach,o=sessionStorage.token;return b.a.createElement(u.a,{mode:"light",className:"navbar",icon:a&&b.a.createElement(i.a,{type:"left"}),onLeftClick:function(){return e.handelGoBack(a)},rightContent:[!r&&b.a.createElement(i.a,{onClick:this.handelGoSearch.bind(this),key:"0",type:"search",style:{marginRight:"16px"}}),!o&&b.a.createElement(k,{scan:this.props.scan,login:this.props.login,key:1})]},n)}}]),t}(m.Component),C=c.a.Item,k=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={visible:!1,selected:""},n.handleVisibleChange=function(e){n.setState({visible:e})},n.onSelect=function(e){n.setState({visible:!1,selected:e.props.value}),"login"==e.props.value?v.c.push("/login"):"scan"==e.props.value?v.c.push("/scan"):n.showActionSheet()},n.showActionSheet=function(){var e=["\u62cd\u7167","\u4ece\u624b\u673a\u76f8\u518c\u9009\u62e9","\u4f7f\u7528\u76f8\u673a\u62cd\u7167","\u5220\u9664","\u53d6\u6d88"];r.a.showActionSheetWithOptions({options:e,cancelButtonIndex:e.length-1,destructiveButtonIndex:e.length-2,message:"\u8bf7\u6ce8\u610f\u67e5\u770b",maskClosable:!0,"data-seed":"logId",wrapProps:{onTouchStart:function(e){return e.preventDefault()}}},(function(e){console.log(e)}))},n}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e,t=this.props,n=(t.scan,t.login);return b.a.createElement(c.a,{mask:!0,overlayClassName:"fortest",overlayStyle:{color:"currentColor"},visible:this.state.visible,overlay:[!n&&b.a.createElement(C,{key:"6",value:"login",icon:(e="uQIYTFeRrjPELImDRrPt",b.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/".concat(e,".svg"),className:"am-icon am-icon-xs",alt:""}))},b.a.createElement("span",{style:{marginRight:5}},"\u767b\u5f55"))],align:{overflow:{adjustY:0,adjustX:0},offset:[-10,0]},onVisibleChange:this.handleVisibleChange,onSelect:this.onSelect},b.a.createElement(i.a,{type:"ellipsis"}))}}]),t}(m.Component)},70:function(e,t,n){},87:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"k",(function(){return s})),n.d(t,"d",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"f",(function(){return i})),n.d(t,"n",(function(){return p})),n.d(t,"l",(function(){return d})),n.d(t,"i",(function(){return f})),n.d(t,"h",(function(){return h})),n.d(t,"g",(function(){return g})),n.d(t,"m",(function(){return m})),n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return y}));var a=n(73),r=n.n(a),o=n(62);function c(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.url,e.cb,a.next=3,r.a.awrap(o.a.get(t));case 3:return n=a.sent,a.abrupt("return",{type:"getBanner",payload:n.data.result});case 5:case"end":return a.stop()}}))}function s(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.url,a.next=3,r.a.awrap(o.a.post(t));case 3:return n=a.sent,a.abrupt("return",{type:"changeUser",payload:{mobile:n.data.result}});case 5:case"end":return a.stop()}}))}var u=function(e){return{type:"changeUser",payload:e}};function l(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.url,e.cb,a.next=3,r.a.awrap(o.a.get(t));case 3:return n=a.sent,a.abrupt("return",{type:"getMiddleBanner",payload:n.data.result});case 5:case"end":return a.stop()}}))}function i(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.url,e.cb,a.next=3,r.a.awrap(o.a.get(t));case 3:return n=a.sent,a.abrupt("return",{type:"getBrandbanner",payload:n.data.result});case 5:case"end":return a.stop()}}))}function p(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.url,e.cb,a.next=3,r.a.awrap(o.a.get(t));case 3:return n=a.sent,a.abrupt("return",{type:"getSmallbanner",payload:n.data.result});case 5:case"end":return a.stop()}}))}function d(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.url,e.cb,a.next=3,r.a.awrap(o.a.get(t));case 3:return n=a.sent,a.abrupt("return",{type:"getNoticebar",payload:n.data.result});case 5:case"end":return a.stop()}}))}function f(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.url,e.cb,a.next=3,r.a.awrap(o.a.get(t));case 3:return n=a.sent,a.abrupt("return",{type:"getIndexList",payload:n.data.result});case 5:case"end":return a.stop()}}))}function h(e){var t,n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.url,n=e.params,c.next=3,r.a.awrap(o.a.get(t,{params:n}));case 3:return a=c.sent,c.abrupt("return",{type:"getGoodsType",payload:a.data.result});case 5:case"end":return c.stop()}}))}function g(e){var t,n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.url,n=e.params,c.next=3,r.a.awrap(o.a.get(t,{params:n}));case 3:return a=c.sent,c.abrupt("return",{type:"getGoodsList",payload:a.data.result});case 5:case"end":return c.stop()}}))}function m(e){var t,n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.url,n=e.params,c.next=3,r.a.awrap(o.a.get(t,{params:n}));case 3:return a=c.sent,c.abrupt("return",{type:"getSearchDetail",payload:a.data.result});case 5:case"end":return c.stop()}}))}function b(){return{type:"ChangeGoodListReverse"}}function v(){return{type:"ChangeIndexListReverse"}}function y(){return{type:"ChangeSerchListReverse"}}}}]);
//# sourceMappingURL=25.f4763ca5.chunk.js.map