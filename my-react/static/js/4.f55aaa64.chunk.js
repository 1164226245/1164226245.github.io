(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[4],{171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalComponent=void 0;var a=p(n(63)),o=p(n(67)),r=p(n(59)),l=p(n(58)),u=p(n(60)),i=p(n(61)),s=p(n(64)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),f=p(n(278)),d=p(n(74));function p(e){return e&&e.__esModule?e:{default:e}}var m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(n[a[o]]=e[a[o]])}return n},v=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,r.default)(t,[{key:"renderFooterButton",value:function(e,t,n){var a={};if(e.style&&"string"===typeof(a=e.style)){a={cancel:{},default:{},destructive:{color:"red"}}[a]||{}}return c.createElement(d.default,{activeClassName:t+"-button-active",key:n},c.createElement("a",{className:t+"-button",role:"button",style:a,onClick:function(t){t.preventDefault(),e.onPress&&e.onPress()}},e.text||"Button"))}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.prefixCls,l=n.className,u=n.wrapClassName,i=n.transitionName,d=n.maskTransitionName,p=n.style,v=n.platform,h=n.footer,y=void 0===h?[]:h,b=n.operation,g=n.animated,N=n.transparent,P=n.popup,_=n.animationType,C=m(n,["prefixCls","className","wrapClassName","transitionName","maskTransitionName","style","platform","footer","operation","animated","transparent","popup","animationType"]),E=(0,s.default)(r+"-button-group-"+(2!==y.length||b?"v":"h"),r+"-button-group-"+(b?"operation":"normal")),w=y.length?c.createElement("div",{className:E,role:"group"},y.map((function(e,n){return t.renderFooterButton(e,r,n)}))):null,x=void 0,O=void 0;g&&(x=O=N?"am-fade":"am-slide-up",P&&(x="slide-up"===_?"am-slide-up":"am-slide-down",O="am-fade"));var k=(0,s.default)(u,(0,o.default)({},r+"-wrap-popup",P)),M=(0,s.default)(l,(e={},(0,o.default)(e,r+"-transparent",N),(0,o.default)(e,r+"-popup",P),(0,o.default)(e,r+"-popup-"+_,P&&_),(0,o.default)(e,r+"-android","android"===v),e));return c.createElement(f.default,(0,a.default)({},C,{prefixCls:r,className:M,wrapClassName:k,transitionName:i||x,maskTransitionName:d||O,style:p,footer:w}))}}]),t}(t.ModalComponent=function(e){function t(){return(0,l.default)(this,t),(0,u.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,i.default)(t,e),t}(c.Component));t.default=v,v.defaultProps={prefixCls:"am-modal",transparent:!1,popup:!1,animationType:"slide-down",animated:!0,style:{},onShow:function(){},footer:[],closable:!1,operation:!1,platform:"ios"}},195:function(e,t,n){"use strict";n(66),n(368)},196:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(369)),o=u(n(171)),r=u(n(370)),l=u(n(371));function u(e){return e&&e.__esModule?e:{default:e}}o.default.alert=a.default,o.default.prompt=l.default,o.default.operation=r.default,t.default=o.default,e.exports=t.default},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector,a=e;for(;a;){if(n.call(a,t))return a;a=a.parentElement}return null},e.exports=t.default},368:function(e,t,n){},369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[{text:"\u786e\u5b9a"}],u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ios",i=!1;if(!e&&!t)return{close:function(){}};var s=document.createElement("div");function c(){o.unmountComponentAtNode(s),s&&s.parentNode&&s.parentNode.removeChild(s)}document.body.appendChild(s);var f=n.map((function(e){var t=e.onPress||function(){};return e.onPress=function(){if(!i){var e=t();e&&e.then?e.then((function(){i=!0,c()})).catch((function(){})):(i=!0,c())}},e})),d="am-modal";return o.render(a.createElement(l.default,{visible:!0,transparent:!0,title:e,transitionName:"am-zoom",closable:!1,maskClosable:!1,footer:f,maskTransitionName:"am-fade",platform:u,wrapProps:{onTouchStart:function(e){if(!/iPhone|iPod|iPad/i.test(navigator.userAgent))return;(0,r.default)(e.target,"."+d+"-footer")||e.preventDefault()}}},a.createElement("div",{className:d+"-alert-content"},t)),s),{close:c}};var a=i(n(0)),o=i(n(18)),r=u(n(197)),l=u(n(171));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}e.exports=t.default},370:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{text:"\u786e\u5b9a"}],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ios",n=!1,u=document.createElement("div");function i(){o.unmountComponentAtNode(u),u&&u.parentNode&&u.parentNode.removeChild(u)}document.body.appendChild(u);var s=e.map((function(e){var t=e.onPress||function(){};return e.onPress=function(){if(!n){var e=t();e&&e.then?e.then((function(){n=!0,i()})).catch((function(){})):(n=!0,i())}},e}));return o.render(a.createElement(l.default,{visible:!0,operation:!0,transparent:!0,prefixCls:"am-modal",transitionName:"am-zoom",closable:!1,maskClosable:!0,onClose:i,footer:s,maskTransitionName:"am-fade",className:"am-modal-operation",platform:t,wrapProps:{onTouchStart:function(e){if(!/iPhone|iPod|iPad/i.test(navigator.userAgent))return;(0,r.default)(e.target,".am-modal-footer")||e.preventDefault()}}}),u),{close:i}};var a=i(n(0)),o=i(n(18)),r=u(n(197)),l=u(n(171));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}e.exports=t.default},371:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"default",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:["",""],c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"ios",f=!1;if(i="string"===typeof i?i:"number"===typeof i?""+i:"",!n)return{close:function(){}};var d="am-modal",p={text:i};function m(e){var t=e.target,n=t.getAttribute("type");null!==n&&(p[n]=t.value)}function v(e){var t=e.currentTarget||e.target;t&&t.focus()}function h(){/MicroMessenger/.test(navigator.userAgent)&&(document.body.scrollTop=document.body.scrollTop)}var y=void 0,b=function(e){setTimeout((function(){e&&e.focus()}),500)};switch(u){case"login-password":y=a.createElement("div",{className:d+"-input-container"},a.createElement("div",{className:d+"-input"},a.createElement("label",null,a.createElement("input",{type:"text",defaultValue:p.text,ref:function(e){return b(e)},onClick:v,onChange:m,placeholder:s[0],onBlur:h}))),a.createElement("div",{className:d+"-input"},a.createElement("label",null,a.createElement("input",{type:"password",defaultValue:p.password,onClick:v,onChange:m,placeholder:s[1],onBlur:h}))));break;case"secure-text":y=a.createElement("div",{className:d+"-input-container"},a.createElement("div",{className:d+"-input"},a.createElement("label",null,a.createElement("input",{type:"password",defaultValue:p.password,ref:function(e){return b(e)},onClick:v,onChange:m,placeholder:s[0],onBlur:h}))));break;case"default":default:y=a.createElement("div",{className:d+"-input-container"},a.createElement("div",{className:d+"-input"},a.createElement("label",null,a.createElement("input",{type:"text",defaultValue:p.text,ref:function(e){return b(e)},onClick:v,onChange:m,placeholder:s[0],onBlur:h}))))}var g=a.createElement("div",null,t,y),N=document.createElement("div");function P(){o.unmountComponentAtNode(N),N&&N.parentNode&&N.parentNode.removeChild(N)}function _(e){if("function"===typeof e){var t=p.text,n=void 0===t?"":t,a=p.password,o=void 0===a?"":a,r="login-password"===u?[n,o]:"secure-text"===u?[o]:[n];return e.apply(void 0,r)}}document.body.appendChild(N);var C=void 0;C="function"===typeof n?[{text:"\u53d6\u6d88",onPress:function(){}},{text:"\u786e\u5b9a",onPress:function(){_(n)}}]:n.map((function(e){return{text:e.text,onPress:function(){return _(e.onPress)}}}));var E=C.map((function(e){var t=e.onPress||function(){};return e.onPress=function(){if(!f){var e=t();e&&e.then?e.then((function(){f=!0,P()})).catch((function(){})):(f=!0,P())}},e}));return o.render(a.createElement(l.default,{visible:!0,transparent:!0,prefixCls:d,title:e,closable:!1,maskClosable:!1,transitionName:"am-zoom",footer:E,maskTransitionName:"am-fade",platform:c,wrapProps:{onTouchStart:function(e){if(!/iPhone|iPod|iPad/i.test(navigator.userAgent))return;(0,r.default)(e.target,"."+d+"-content")||e.preventDefault()}}},a.createElement("div",{className:d+"-propmt-content"},g)),N),{close:P}};var a=i(n(0)),o=i(n(18)),r=u(n(197)),l=u(n(171));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}e.exports=t.default}}]);
//# sourceMappingURL=4.f55aaa64.chunk.js.map