(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[16],{118:function(e,t,n){"use strict";n(66),n(88),n(119)},119:function(e,t,n){},120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(121)),r=c(n(79)),o=c(n(124));function c(e){return e&&e.__esModule?e:{default:e}}r.default.CheckboxItem=o.default,r.default.AgreeItem=a.default,t.default=r.default,e.exports=t.default},121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(n(63)),r=d(n(58)),o=d(n(59)),c=d(n(60)),i=d(n(61)),s=d(n(64)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),l=d(n(133)),p=d(n(79));function d(e){return e&&e.__esModule?e:{default:e}}var f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},h=function(e){function t(){return(0,r.default)(this,t),(0,c.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.style,n=f(e,["style"]),r=n.prefixCls,o=n.className,c=(0,s.default)(r+"-agree",o);return u.createElement("div",(0,a.default)({},(0,l.default)(n),{className:c,style:t}),u.createElement(p.default,(0,a.default)({},n,{className:r+"-agree-label"})))}}]),t}(u.Component);t.default=h,h.defaultProps={prefixCls:"am-checkbox"},e.exports=t.default},122:function(e,t,n){var a=n(123);var r={shouldComponentUpdate:function(e,t){return function(e,t,n){return!a(e.props,t)||!a(e.state,n)}(this,e,t)}};e.exports=r},123:function(e,t){e.exports=function(e,t,n,a){var r=n?n.call(a,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),c=Object.keys(t);if(o.length!==c.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var u=o[s];if(!i(u))return!1;var l=e[u],p=t[u];if(!1===(r=n?n.call(a,l,p,u):void 0)||void 0===r&&l!==p)return!1}return!0}},124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(n(63)),r=f(n(67)),o=f(n(58)),c=f(n(59)),i=f(n(60)),s=f(n(61)),u=f(n(64)),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),p=f(n(132)),d=f(n(79));function f(e){return e&&e.__esModule?e:{default:e}}var h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},m=p.default.Item;function b(){}var g=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.listPrefixCls,o=(t.onChange,t.disabled),c=t.checkboxProps,i=t.onClick,s=h(t,["listPrefixCls","onChange","disabled","checkboxProps","onClick"]),p=s.prefixCls,f=s.className,g=s.children,y=(0,u.default)(p+"-item",f,(0,r.default)({},p+"-item-disabled",!0===o));o||(s.onClick=i||b);var v={};return["name","defaultChecked","checked","onChange","disabled"].forEach((function(t){t in e.props&&(v[t]=e.props[t])})),l.createElement(m,(0,a.default)({},s,{prefixCls:n,className:y,thumb:l.createElement(d.default,(0,a.default)({},c,v))}),g)}}]),t}(l.Component);t.default=g,g.defaultProps={prefixCls:"am-checkbox",listPrefixCls:"am-list",checkboxProps:{}},e.exports=t.default},127:function(e,t,n){"use strict";n.r(t);var a=n(63),r=n.n(a),o=n(67),c=n.n(o),i=n(154),s=n.n(i),u=n(58),l=n.n(u),p=n(59),d=n.n(p),f=n(60),h=n.n(f),m=n(61),b=n.n(m),g=n(0),y=n.n(g),v=n(2),O=n.n(v),k=n(122),j=n.n(k),x=n(64),C=n.n(x),w=function(e){function t(e){l()(this,t);var n=h()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));E.call(n);var a="checked"in e?e.checked:e.defaultChecked;return n.state={checked:a},n}return b()(t,e),d()(t,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:e.checked})}},{key:"shouldComponentUpdate",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return j.a.shouldComponentUpdate.apply(this,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.className,o=t.style,i=t.name,u=t.type,l=t.disabled,p=t.readOnly,d=t.tabIndex,f=t.onClick,h=t.onFocus,m=t.onBlur,b=s()(t,["prefixCls","className","style","name","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur"]),g=Object.keys(b).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=b[t]),e}),{}),v=this.state.checked,O=C()(n,a,(e={},c()(e,n+"-checked",v),c()(e,n+"-disabled",l),e));return y.a.createElement("span",{className:O,style:o},y.a.createElement("input",r()({name:i,type:u,readOnly:p,disabled:l,tabIndex:d,className:n+"-input",checked:!!v,onClick:f,onFocus:h,onBlur:m,onChange:this.handleChange},g)),y.a.createElement("span",{className:n+"-inner"}))}}]),t}(y.a.Component);w.propTypes={prefixCls:O.a.string,className:O.a.string,style:O.a.object,name:O.a.string,type:O.a.string,defaultChecked:O.a.oneOfType([O.a.number,O.a.bool]),checked:O.a.oneOfType([O.a.number,O.a.bool]),disabled:O.a.bool,onFocus:O.a.func,onBlur:O.a.func,onChange:O.a.func,onClick:O.a.func,tabIndex:O.a.string,readOnly:O.a.bool},w.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}};var E=function(){var e=this;this.handleChange=function(t){var n=e.props;n.disabled||("checked"in n||e.setState({checked:t.target.checked}),n.onChange({target:r()({},n,{checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()}}))}},P=w;n.d(t,"default",(function(){return P}))},170:function(e,t,n){"use strict";var a,r,o,c,i,s,u,l,p=n(73),d=n.n(p),f=n(96),h=n(13),m=n(14),b=n(97),g=(n(98),n(90)),y=n(62),v=(a=function(){function e(){Object(h.a)(this,e),Object(f.a)(this,"carList",r,this),Object(f.a)(this,"getCarList",o,this),Object(f.a)(this,"delSelect",c,this),Object(f.a)(this,"changeOneChecked",i,this),Object(f.a)(this,"changeQuan",s,this),Object(f.a)(this,"changeOneCount",u,this),Object(f.a)(this,"changeOneCountNum",l,this)}return Object(m.a)(e,[{key:"carTotal",get:function(){var e=0;return this.carList.forEach((function(t){e+=t.count})),e}},{key:"carNum",get:function(){var e=0;return this.carList.forEach((function(t){t.checked&&(e+=t.count)})),e}},{key:"checkedGood",get:function(){var e=[];return this.carList.forEach((function(t){t.checked&&e.push(t)})),e}},{key:"total",get:function(){var e=0;return this.carList.forEach((function(t){t.checked&&(e+=t.count*t.good.jiage)})),e}},{key:"quan",get:function(){var e=!0;return this.carList.forEach((function(t){t.checked||(e=!1)})),e},set:function(e){this.carList=this.carList.map((function(t){return t.checked=e,t}))}}]),e}(),r=Object(b.a)(a.prototype,"carList",[g.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),o=Object(b.a)(a.prototype,"getCarList",[g.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var n;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.awrap(y.a.get(t));case 2:n=a.sent,e.carList=n.data.result;case 4:case"end":return a.stop()}}))}}}),c=Object(b.a)(a.prototype,"delSelect",[g.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){y.a.post("/react/delSelect").then((function(t){e.carList=e.carList.filter((function(e){return!e.checked}))}))}}}),i=Object(b.a)(a.prototype,"changeOneChecked",[g.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,n){y.a.post("/react/changeChecked",{goodsid:n,checked:t}).then((function(a){e.carList=e.carList.map((function(e){return e.goodsid==n&&(e.checked=t),e}))}))}}}),s=Object(b.a)(a.prototype,"changeQuan",[g.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){y.a.post("/react/changeChecked",{checked:t}).then((function(n){e.quan=t}))}}}),u=Object(b.a)(a.prototype,"changeOneCount",[g.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,n){y.a.post("/react/changeCount",{goodsid:t,flag:n}).then((function(a){e.carList=e.carList.map((function(e){return e.goodsid==t&&(e.count+=n?1:-1),e}))}))}}}),l=Object(b.a)(a.prototype,"changeOneCountNum",[g.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,n){y.a.post("/react/changeCount",{goodsid:t,count:n}).then((function(a){e.carList=e.carList.map((function(e){return e.goodsid==t&&(e.count=n),e}))}))}}}),Object(b.a)(a.prototype,"carTotal",[g.e],Object.getOwnPropertyDescriptor(a.prototype,"carTotal"),a.prototype),Object(b.a)(a.prototype,"carNum",[g.e],Object.getOwnPropertyDescriptor(a.prototype,"carNum"),a.prototype),Object(b.a)(a.prototype,"checkedGood",[g.e],Object.getOwnPropertyDescriptor(a.prototype,"checkedGood"),a.prototype),Object(b.a)(a.prototype,"total",[g.e],Object.getOwnPropertyDescriptor(a.prototype,"total"),a.prototype),Object(b.a)(a.prototype,"quan",[g.e],Object.getOwnPropertyDescriptor(a.prototype,"quan"),a.prototype),a);t.a=new v},365:function(e,t,n){},366:function(e,t,n){"use strict";n.r(t);n(118);var a,r=n(120),o=n.n(r),c=(n(152),n(153)),i=n.n(c),s=(n(75),n(76)),u=n.n(s),l=n(13),p=n(14),d=n(16),f=n(15),h=n(17),m=(n(367),n(0)),b=n.n(m),g=n(68),y=n(62),v=n(26),O=n(87),k=n(170),j=n(111),x=n(65),C=Object(v.b)((function(e){return{shoppingInfo:e.getIn(["data","shoppingInfo"]),mobile:e.getIn(["user","mobile"])}}))(a=Object(j.a)(a=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).checkOne=function(e){console.log(e),k.a.changeOneChecked(e.target.checked,e.target.goodsid)},n.checkAll=function(e){console.log(e),console.log(e.target.checked),k.a.changeQuan(e.target.checked)},n.add=function(e,t){k.a.changeOneCount(e,!0)},n.reduce=function(e,t){k.a.changeOneCount(e,!1)},n.changeCount=function(e,t){console.log(t.target.value),t.target.value>1&&k.a.changeOneCountNum(e,1*t.target.value)},n.delSelect=function(){k.a.delSelect()},n.gotoOrder=function(){k.a.checkedGood.length>0?y.c.push("/orderfrom"):Object(x.c)("\u8bf7\u9009\u4e2d\u60a8\u5fc3\u4eea\u7684\u5546\u54c1")},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.mobile||this.props.dispatch(Object(O.k)({url:"/react/getMobile"})),k.a.getCarList("/react/shopcar/showshoppingcar")}},{key:"render",value:function(){var e=this,t=this.props,n=(t.shoppingInfo,t.dispatch,t.mobile,k.a.carList),a=k.a.carNum,r=k.a.total,c=k.a.quan;k.a.checked,k.a.checkedGood;return b.a.createElement("div",null,b.a.createElement(g.a,{title:"\u8d2d\u7269\u8f66"}),b.a.createElement("div",{style:{display:sessionStorage.token?"none":"block"}},b.a.createElement(u.a,{type:"primary"}," \u4f60\u5c1a\u672a\u767b\u9646,\u8bf7\u9a6c\u4e0a\u767b\u5f55  ")),b.a.createElement("div",{style:{display:sessionStorage.token?"block":"none"}},b.a.createElement("div",{style:{display:n.length>0?"none":"block"}},b.a.createElement("h2",null," \u4f60 \u8fd8\u4e70\u8d2d\u4e70\u4efb\u4f55\u5546\u54c1,\u8d2d\u7269\u8f66\u7a7a\u7a7a\u5982\u4e5f , \u8bf7\u9a6c\u4e0a\u53bb\u8d2d\u4e70 ")),b.a.createElement("div",{style:{display:!n.length>0?"none":"block"},className:"move-shop"},b.a.createElement("div",{id:"carDiv"},b.a.createElement("div",{id:"tbody"},b.a.createElement(i.a,{marqueeProps:{loop:!0,style:{padding:"0 7.5px"}}},"\u4e34\u8fd1\u8fc7\u5e74,\u5404\u5927\u5feb\u9012\u516c\u53f8\u5373\u5c06\u4f11\u606f,\u8bf7\u60a8\u6293\u7ecf\u6700\u540e\u7684\u65f6\u95f4\u5b8c\u6210\u8d2d\u7269\u4e0b\u5355..."),n&&n.map((function(t,n){return t.good&&b.a.createElement("ul",{className:"tr",key:n,id:t._id},b.a.createElement("li",{style:{width:"11%"}},b.a.createElement(o.a,{checked:t.checked,goodsid:t.goodsid,onChange:e.checkOne})),b.a.createElement("li",{style:{width:"24%"}},b.a.createElement("img",{src:t.good.pic})),b.a.createElement("li",{style:{width:"38%"}},b.a.createElement("p",{className:"title",style:{lineHeight:"18px",marginTop:"36px"}},t.good.dtitle?t.good.dtitle.slice(0,14):t.good.d_title.slice(0,14)),b.a.createElement("p",{style:{lineHeight:"18px"}},"\uffe5",t.good.jiage+"\u5143")),b.a.createElement("li",{style:{width:"26%"}},b.a.createElement("span",{style:{fontSize:"22px",marginRight:"3px"},onClick:function(){return e.reduce(t.goodsid,t.count)}},"-"),b.a.createElement("input",{goodsid:t.goodsid,type:"text",value:t.count,onChange:function(n){e.changeCount(t.goodsid,n)},style:{width:"54px",fontSize:"16px",textAlign:"center",background:"none",border:"0"}}),b.a.createElement("span",{style:{fontSize:"22px"},onClick:function(){return e.add(t.goodsid,t.count)}},"+")))}))),b.a.createElement("div",{className:"carFoot"},b.a.createElement(o.a,{style:{width:"4%",float:"left",marginLeft:"2%",lineHeight:"50px"},onClick:this.checkAll,checked:c}),b.a.createElement("p",{onClick:this.delSelect,style:{width:"28%",lineHeight:"50px",fontSize:"14px",color:"black",marginLeft:"4%"}},"\u5220\u9664\u9009\u4e2d"),b.a.createElement("p",{style:{width:"36%",lineHeight:"50px",color:"#fff"}},"\u5546\u54c1\u603b\u4ef7:",b.a.createElement("span",{style:{width:"100px",color:"#99CCCC"}}," ",r+"\u5143"," ")),b.a.createElement(u.a,{onClick:this.gotoOrder,type:"warning",style:{backgroundColor:"#FF9966",width:"26%",fontSize:"14px",lineHeight:"50px",textAlign:"center",color:"#fff",letterSpacing:"2px",borderRadius:"30px"}},"\u4e0b\u5355",a))))))}}]),t}(m.Component))||a)||a;t.default=C},367:function(e,t,n){},498:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n(14),o=n(16),c=n(15),i=n(17),s=n(0),u=n.n(s),l=n(9),p=n(3),d=(n(236),n(238)),f=n.n(d);n(365);var h,m=n(20),b=n(26),g=n(111),y=n(170),v=(n(366),[{txt:"\u9996\u9875",path:"/main/home",name:"home",icon:"icon-home"},{txt:"\u5206\u7c7b",path:"/main/classify",name:"classify",icon:"icon-svgclassifyselect"},{txt:"\u8d2d\u7269\u8f66",path:"/main/shopcar",name:"shopcar",icon:"icon-shop_car"},{txt:"\u6211\u7684",path:"/main/mine",name:"mine",icon:"icon-minefill"}]),O=Object(b.b)()(h=Object(g.a)(h=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={foots:v,active:2},n.handleChangeActive=function(e){console.log(e),localStorage.active=e},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setState({active:localStorage.active})}},{key:"render",value:function(){var e=this,t=this.state.active;!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(this.props);y.a.carList,y.a.carNum,y.a.total;var n=y.a.carTotal;return u.a.createElement("footer",null,this.state.foots.map((function(a,r){return u.a.createElement("div",{key:r,onClick:function(){return e.handleChangeActive(r)}},u.a.createElement(m.c,{activeClassName:"nav-active",to:a.path},u.a.createElement("i",{className:"iconfont "+a.icon}," "),u.a.createElement("span",null," ",a.txt," "),r==e.state.foots.length-2&&u.a.createElement(f.a,{text:n,className:"hot",hot:!0,style:{marginLeft:12,paddingRight:"9px",backgroundColor:2==t?"#FF6666":"#999999"}})))})))}}]),t}(s.Component))||h)||h;n.d(t,"default",(function(){return k}));var k=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"box"},u.a.createElement(l.d,null,u.a.createElement(l.b,{path:"/main/home",component:Object(p.a)((function(){return Promise.all([n.e(9),n.e(33)]).then(n.bind(null,496))}))}),u.a.createElement(l.b,{path:"/main/classify",component:Object(p.a)((function(){return Promise.all([n.e(18),n.e(29)]).then(n.bind(null,497))}))}),u.a.createElement(l.b,{path:"/main/shopcar/",component:Object(p.a)((function(){return Promise.resolve().then(n.bind(null,366))}))}),u.a.createElement(l.b,{path:"/main/mine",component:Object(p.a)((function(){return n.e(31).then(n.bind(null,499))}))}),u.a.createElement(l.b,{render:function(){return u.a.createElement(l.a,{to:"/main/home"})}})),u.a.createElement(O,this.props))}}]),t}(s.Component)},62:function(e,t,n){"use strict";n(86);var a=n(6),r=n(65);n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r.a})),n.d(t,"b",(function(){return r.b}));var o=new a.b},65:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return s}));n(77);var a=n(78),r=n.n(a),o=n(69),c=n.n(o);n.d(t,"a",(function(){return c.a}));var i=n(62),s="https://huyulin.top:4321/",u="";function l(e){r.a.hide(),r.a.fail(e,1)}function p(e){r.a.success(e,1)}c.a.defaults.baseURL=s,c.a.defaults.headers.common.token=u,c.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",c.a.interceptors.request.use((function(e){var t,n;return t=t||"\u6b63\u5728\u8bf7\u6c42",n=n||1,r.a.hide(),r.a.loading(t,n,(function(){})),u=sessionStorage.token?sessionStorage.token:"",e.headers.token=u,e}),(function(e){var t;return t="\u8bf7\u6c42\u5931\u8d25,\u7f51\u7edc\u5f02\u5e38",r.a.offline(t,1),Promise.reject(e)})),c.a.interceptors.response.use((function(e){return console.log(e),"3000"==e.data.code&&i.c.push("/login"),e.data.type?p(e.data.msg):0==e.data.type?l(e.data.msg):p(e.data.msg),e}),(function(e){return l("\u54cd\u5e94\u5931\u8d25,\u670d\u52a1\u5f02\u5e38"),Promise.reject(e)}))},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));n(80);var a=n(81),r=n.n(a),o=(n(82),n(83)),c=n.n(o),i=(n(84),n(85)),s=n.n(i),u=(n(71),n(72)),l=n.n(u),p=n(13),d=n(14),f=n(16),h=n(15),m=n(17),b=(n(70),n(0)),g=n.n(b),y=n(62),v=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"handelGoBack",value:function(e){e&&y.c.goBack()}},{key:"handelGoSearch",value:function(){y.c.push("/search")}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.show,r=t.serach,o=sessionStorage.token;return g.a.createElement(s.a,{mode:"light",className:"navbar",icon:a&&g.a.createElement(l.a,{type:"left"}),onLeftClick:function(){return e.handelGoBack(a)},rightContent:[!r&&g.a.createElement(l.a,{onClick:this.handelGoSearch.bind(this),key:"0",type:"search",style:{marginRight:"16px"}}),!o&&g.a.createElement(k,{scan:this.props.scan,login:this.props.login,key:1})]},n)}}]),t}(b.Component),O=c.a.Item,k=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={visible:!1,selected:""},n.handleVisibleChange=function(e){n.setState({visible:e})},n.onSelect=function(e){n.setState({visible:!1,selected:e.props.value}),"login"==e.props.value?y.c.push("/login"):"scan"==e.props.value?y.c.push("/scan"):n.showActionSheet()},n.showActionSheet=function(){var e=["\u62cd\u7167","\u4ece\u624b\u673a\u76f8\u518c\u9009\u62e9","\u4f7f\u7528\u76f8\u673a\u62cd\u7167","\u5220\u9664","\u53d6\u6d88"];r.a.showActionSheetWithOptions({options:e,cancelButtonIndex:e.length-1,destructiveButtonIndex:e.length-2,message:"\u8bf7\u6ce8\u610f\u67e5\u770b",maskClosable:!0,"data-seed":"logId",wrapProps:{onTouchStart:function(e){return e.preventDefault()}}},(function(e){console.log(e)}))},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e,t=this.props,n=(t.scan,t.login);return g.a.createElement(c.a,{mask:!0,overlayClassName:"fortest",overlayStyle:{color:"currentColor"},visible:this.state.visible,overlay:[!n&&g.a.createElement(O,{key:"6",value:"login",icon:(e="uQIYTFeRrjPELImDRrPt",g.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/".concat(e,".svg"),className:"am-icon am-icon-xs",alt:""}))},g.a.createElement("span",{style:{marginRight:5}},"\u767b\u5f55"))],align:{overflow:{adjustY:0,adjustX:0},offset:[-10,0]},onVisibleChange:this.handleVisibleChange,onSelect:this.onSelect},g.a.createElement(l.a,{type:"ellipsis"}))}}]),t}(b.Component)},70:function(e,t,n){},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(58)),r=l(n(59)),o=l(n(60)),c=l(n(61)),i=l(n(64)),s=l(n(127)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));function l(e){return e&&e.__esModule?e:{default:e}}var p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},d=function(e){function t(){return(0,a.default)(this,t),(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,a=p(e,["className","style"]),r=a.prefixCls,o=a.children,c=(0,i.default)(r+"-wrapper",t);"class"in a&&delete a.class;var l=u.createElement("label",{className:c,style:n},u.createElement(s.default,a),o);return this.props.wrapLabel?l:u.createElement(s.default,this.props)}}]),t}(u.Component);t.default=d,d.defaultProps={prefixCls:"am-checkbox",wrapLabel:!0},e.exports=t.default},87:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"k",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"j",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"n",(function(){return p})),n.d(t,"l",(function(){return d})),n.d(t,"i",(function(){return f})),n.d(t,"h",(function(){return h})),n.d(t,"g",(function(){return m})),n.d(t,"m",(function(){return b})),n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return v}));var a=n(73),r=n.n(a),o=n(62);function c(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.url,e.cb,a.next=3,r.a.awrap(o.a.get(t));case 3:return n=a.sent,a.abrupt("return",{type:"getBanner",payload:n.data.result});case 5:case"end":return a.stop()}}))}function i(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.url,a.next=3,r.a.awrap(o.a.post(t));case 3:return n=a.sent,a.abrupt("return",{type:"changeUser",payload:{mobile:n.data.result}});case 5:case"end":return a.stop()}}))}var s=function(e){return{type:"changeUser",payload:e}};function u(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.url,e.cb,a.next=3,r.a.awrap(o.a.get(t));case 3:return n=a.sent,a.abrupt("return",{type:"getMiddleBanner",payload:n.data.result});case 5:case"end":return a.stop()}}))}function l(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.url,e.cb,a.next=3,r.a.awrap(o.a.get(t));case 3:return n=a.sent,a.abrupt("return",{type:"getBrandbanner",payload:n.data.result});case 5:case"end":return a.stop()}}))}function p(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.url,e.cb,a.next=3,r.a.awrap(o.a.get(t));case 3:return n=a.sent,a.abrupt("return",{type:"getSmallbanner",payload:n.data.result});case 5:case"end":return a.stop()}}))}function d(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.url,e.cb,a.next=3,r.a.awrap(o.a.get(t));case 3:return n=a.sent,a.abrupt("return",{type:"getNoticebar",payload:n.data.result});case 5:case"end":return a.stop()}}))}function f(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.url,e.cb,a.next=3,r.a.awrap(o.a.get(t));case 3:return n=a.sent,a.abrupt("return",{type:"getIndexList",payload:n.data.result});case 5:case"end":return a.stop()}}))}function h(e){var t,n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.url,n=e.params,c.next=3,r.a.awrap(o.a.get(t,{params:n}));case 3:return a=c.sent,c.abrupt("return",{type:"getGoodsType",payload:a.data.result});case 5:case"end":return c.stop()}}))}function m(e){var t,n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.url,n=e.params,c.next=3,r.a.awrap(o.a.get(t,{params:n}));case 3:return a=c.sent,c.abrupt("return",{type:"getGoodsList",payload:a.data.result});case 5:case"end":return c.stop()}}))}function b(e){var t,n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.url,n=e.params,c.next=3,r.a.awrap(o.a.get(t,{params:n}));case 3:return a=c.sent,c.abrupt("return",{type:"getSearchDetail",payload:a.data.result});case 5:case"end":return c.stop()}}))}function g(){return{type:"ChangeGoodListReverse"}}function y(){return{type:"ChangeIndexListReverse"}}function v(){return{type:"ChangeSerchListReverse"}}}}]);
//# sourceMappingURL=16.92f446ec.chunk.js.map