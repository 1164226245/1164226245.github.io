(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[28],{248:function(e,t,n){},485:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(13),o=n(14),r=n(16),s=n(15),c=n(17),i=(n(77),n(78)),u=n.n(i),l=(n(195),n(196)),h=n.n(l),p=(n(248),n(0)),f=n.n(p),d=n(68),m=h.a.alert,v=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){!function(e){var t=m("\u8b66\u544a","\u6211\u4eec\u5373\u5c06\u8c03\u7528\u4f60\u7684\u624b\u673a\u8bbe\u5907",[{text:"\u53d6\u6d88",onPress:function(){return e.props.history.go(-1)},style:"default"},{text:"\u786e\u8ba4",onPress:function(){return u.a.success("\u83b7\u5f97\u5141\u8bb8,\u5373\u5c06\u8c03\u7528",1)}}]);setTimeout((function(){console.log("auto close"),t.close()}),5e5)}(this)}},{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement(d.a,{title:"\u626b\u4e00\u626b",show:!0,scan:!0}),f.a.createElement("h3",null,"\u626b\u4e00\u626b"))}}]),t}(p.Component)},62:function(e,t,n){"use strict";n(86);var a=n(6),o=n(65);n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o.a})),n.d(t,"b",(function(){return o.b}));var r=new a.b},65:function(e,t,n){"use strict";n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return i}));n(77);var a=n(78),o=n.n(a),r=n(69),s=n.n(r);n.d(t,"a",(function(){return s.a}));var c=n(62),i="http://47.105.44.9:4321/",u="";function l(e){o.a.hide(),o.a.fail(e,1)}function h(e){o.a.success(e,1)}s.a.defaults.baseURL=i,s.a.defaults.headers.common.token=u,s.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",s.a.interceptors.request.use((function(e){var t,n;return t=t||"\u6b63\u5728\u8bf7\u6c42",n=n||1,o.a.hide(),o.a.loading(t,n,(function(){})),u=sessionStorage.token?sessionStorage.token:"",e.headers.token=u,e}),(function(e){var t;return t="\u8bf7\u6c42\u5931\u8d25,\u7f51\u7edc\u5f02\u5e38",o.a.offline(t,1),Promise.reject(e)})),s.a.interceptors.response.use((function(e){return console.log(e),"3000"==e.data.code&&c.c.push("/login"),e.data.type?h(e.data.msg):0==e.data.type?l(e.data.msg):h(e.data.msg),e}),(function(e){return l("\u54cd\u5e94\u5931\u8d25,\u670d\u52a1\u5f02\u5e38"),Promise.reject(e)}))},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));n(80);var a=n(81),o=n.n(a),r=(n(82),n(83)),s=n.n(r),c=(n(84),n(85)),i=n.n(c),u=(n(71),n(72)),l=n.n(u),h=n(13),p=n(14),f=n(16),d=n(15),m=n(17),v=(n(70),n(0)),g=n.n(v),b=n(62),y=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"handelGoBack",value:function(e){e&&b.c.goBack()}},{key:"handelGoSearch",value:function(){b.c.push("/search")}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.show,o=t.serach,r=sessionStorage.token;return g.a.createElement(i.a,{mode:"light",className:"navbar",icon:a&&g.a.createElement(l.a,{type:"left"}),onLeftClick:function(){return e.handelGoBack(a)},rightContent:[!o&&g.a.createElement(l.a,{onClick:this.handelGoSearch.bind(this),key:"0",type:"search",style:{marginRight:"16px"}}),!r&&g.a.createElement(k,{scan:this.props.scan,login:this.props.login,key:1})]},n)}}]),t}(v.Component),j=s.a.Item,k=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1,selected:""},n.handleVisibleChange=function(e){n.setState({visible:e})},n.onSelect=function(e){n.setState({visible:!1,selected:e.props.value}),"login"==e.props.value?b.c.push("/login"):"scan"==e.props.value?b.c.push("/scan"):n.showActionSheet()},n.showActionSheet=function(){var e=["\u62cd\u7167","\u4ece\u624b\u673a\u76f8\u518c\u9009\u62e9","\u4f7f\u7528\u76f8\u673a\u62cd\u7167","\u5220\u9664","\u53d6\u6d88"];o.a.showActionSheetWithOptions({options:e,cancelButtonIndex:e.length-1,destructiveButtonIndex:e.length-2,message:"\u8bf7\u6ce8\u610f\u67e5\u770b",maskClosable:!0,"data-seed":"logId",wrapProps:{onTouchStart:function(e){return e.preventDefault()}}},(function(e){console.log(e)}))},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e,t=this.props,n=(t.scan,t.login);return g.a.createElement(s.a,{mask:!0,overlayClassName:"fortest",overlayStyle:{color:"currentColor"},visible:this.state.visible,overlay:[!n&&g.a.createElement(j,{key:"6",value:"login",icon:(e="uQIYTFeRrjPELImDRrPt",g.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/".concat(e,".svg"),className:"am-icon am-icon-xs",alt:""}))},g.a.createElement("span",{style:{marginRight:5}},"\u767b\u5f55"))],align:{overflow:{adjustY:0,adjustX:0},offset:[-10,0]},onVisibleChange:this.handleVisibleChange,onSelect:this.onSelect},g.a.createElement(l.a,{type:"ellipsis"}))}}]),t}(v.Component)},70:function(e,t,n){}}]);
//# sourceMappingURL=28.5b438967.chunk.js.map