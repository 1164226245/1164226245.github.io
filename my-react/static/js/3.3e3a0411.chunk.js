(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[3],{132:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=f(r(63)),a=f(r(58)),l=f(r(59)),n=f(r(60)),o=f(r(61)),u=f(r(64)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(0)),c=f(r(324));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&(r[i[a]]=e[i[a]])}return r},p=function(e){function t(){return(0,a.default)(this,t),(0,n.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,r=e.children,a=e.className,l=e.style,n=e.renderHeader,o=e.renderFooter,c=d(e,["prefixCls","children","className","style","renderHeader","renderFooter"]),f=(0,u.default)(t,a);return s.createElement("div",(0,i.default)({className:f,style:l},c),n?s.createElement("div",{className:t+"-header"},"function"===typeof n?n():n):null,r?s.createElement("div",{className:t+"-body"},r):null,o?s.createElement("div",{className:t+"-footer"},"function"===typeof o?o():o):null)}}]),t}(s.Component);t.default=p,p.Item=c.default,p.defaultProps={prefixCls:"am-list"},e.exports=t.default},142:function(e,t,r){},152:function(e,t,r){"use strict";r(66),r(71),r(325)},153:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=d(r(63)),a=d(r(58)),l=d(r(59)),n=d(r(60)),o=d(r(61)),u=d(r(64)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(0)),c=d(r(72)),f=d(r(326));function d(e){return e&&e.__esModule?e:{default:e}}var p=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&(r[i[a]]=e[i[a]])}return r},m=function(e){function t(e){(0,a.default)(this,t);var r=(0,n.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.onClick=function(){var e=r.props,t=e.mode,i=e.onClick;i&&i(),"closable"===t&&r.setState({show:!1})},r.state={show:!0},r}return(0,o.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.mode,r=e.icon,a=e.onClick,l=e.children,n=e.className,o=e.prefixCls,d=e.action,m=e.marqueeProps,h=p(e,["mode","icon","onClick","children","className","prefixCls","action","marqueeProps"]),v={},y=null;"closable"===t?y=s.createElement("div",{className:o+"-operation",onClick:this.onClick,role:"button","aria-label":"close"},d||s.createElement(c.default,{type:"cross",size:"md"})):("link"===t&&(y=s.createElement("div",{className:o+"-operation",role:"button","aria-label":"go to detail"},d||s.createElement(c.default,{type:"right",size:"md"}))),v.onClick=a);var _=(0,u.default)(o,n);return this.state.show?s.createElement("div",(0,i.default)({className:_},h,v,{role:"alert"}),r&&s.createElement("div",{className:o+"-icon","aria-hidden":"true"},r),s.createElement("div",{className:o+"-content"},s.createElement(f.default,(0,i.default)({prefixCls:o,text:l},m))),y):null}}]),t}(s.Component);t.default=m,m.defaultProps={prefixCls:"am-notice-bar",mode:"",icon:s.createElement(c.default,{type:"voice",size:"xxs"}),onClick:function(){}},e.exports=t.default},324:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Brief=void 0;var i=d(r(63)),a=d(r(67)),l=d(r(58)),n=d(r(59)),o=d(r(60)),u=d(r(61)),s=d(r(64)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(0)),f=d(r(74));function d(e){return e&&e.__esModule?e:{default:e}}var p=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&(r[i[a]]=e[i[a]])}return r},m=t.Brief=function(e){function t(){return(0,l.default)(this,t),(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,n.default)(t,[{key:"render",value:function(){return c.createElement("div",{className:"am-list-brief",style:this.props.style},this.props.children)}}]),t}(c.Component),h=function(e){function t(e){(0,l.default)(this,t);var r=(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.onClick=function(e){var t=r.props,i=t.onClick,a=t.platform;if(i&&"android"===a){r.debounceTimeout&&(clearTimeout(r.debounceTimeout),r.debounceTimeout=null);var l=e.currentTarget,n=Math.max(l.offsetHeight,l.offsetWidth),o=e.currentTarget.getBoundingClientRect(),u={width:n+"px",height:n+"px",left:e.clientX-o.left-l.offsetWidth/2+"px",top:e.clientY-o.top-l.offsetWidth/2+"px"};r.setState({coverRippleStyle:u,RippleClicked:!0},(function(){r.debounceTimeout=setTimeout((function(){r.setState({coverRippleStyle:{display:"none"},RippleClicked:!1})}),1e3)}))}i&&i(e)},r.state={coverRippleStyle:{display:"none"},RippleClicked:!1},r}return(0,u.default)(t,e),(0,n.default)(t,[{key:"componentWillUnmount",value:function(){this.debounceTimeout&&(clearTimeout(this.debounceTimeout),this.debounceTimeout=null)}},{key:"render",value:function(){var e,t,r,l=this,n=this.props,o=n.prefixCls,u=n.className,d=n.activeStyle,m=n.error,h=n.align,v=n.wrap,y=n.disabled,_=n.children,b=n.multipleLine,w=n.thumb,O=n.extra,x=n.arrow,C=n.onClick,k=p(n,["prefixCls","className","activeStyle","error","align","wrap","disabled","children","multipleLine","thumb","extra","arrow","onClick"]),g=(k.platform,p(k,["platform"])),T=this.state,N=T.coverRippleStyle,P=T.RippleClicked,E=(0,s.default)(o+"-item",u,(e={},(0,a.default)(e,o+"-item-disabled",y),(0,a.default)(e,o+"-item-error",m),(0,a.default)(e,o+"-item-top","top"===h),(0,a.default)(e,o+"-item-middle","middle"===h),(0,a.default)(e,o+"-item-bottom","bottom"===h),e)),j=(0,s.default)(o+"-ripple",(0,a.default)({},o+"-ripple-animate",P)),S=(0,s.default)(o+"-line",(t={},(0,a.default)(t,o+"-line-multiple",b),(0,a.default)(t,o+"-line-wrap",v),t)),W=(0,s.default)(o+"-arrow",(r={},(0,a.default)(r,o+"-arrow-horizontal","horizontal"===x),(0,a.default)(r,o+"-arrow-vertical","down"===x||"up"===x),(0,a.default)(r,o+"-arrow-vertical-up","up"===x),r)),M=c.createElement("div",(0,i.default)({},g,{onClick:function(e){l.onClick(e)},className:E}),w?c.createElement("div",{className:o+"-thumb"},"string"===typeof w?c.createElement("img",{src:w}):w):null,c.createElement("div",{className:S},void 0!==_&&c.createElement("div",{className:o+"-content"},_),void 0!==O&&c.createElement("div",{className:o+"-extra"},O),x&&c.createElement("div",{className:W,"aria-hidden":"true"})),c.createElement("div",{style:N,className:j})),q={};return Object.keys(g).forEach((function(e){/onTouch/i.test(e)&&(q[e]=g[e],delete g[e])})),c.createElement(f.default,(0,i.default)({},q,{disabled:y||!C,activeStyle:d,activeClassName:o+"-item-active"}),M)}}]),t}(c.Component);h.defaultProps={prefixCls:"am-list",align:"middle",error:!1,multipleLine:!1,wrap:!1,platform:"ios"},h.Brief=m,t.default=h},325:function(e,t,r){},326:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=f(r(63)),a=f(r(58)),l=f(r(59)),n=f(r(60)),o=f(r(61)),u=c(r(0)),s=c(r(18));function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){(0,a.default)(this,t);var e=(0,n.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={animatedWidth:0,overflowWidth:0},e}return(0,o.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this._measureText(),this._startAnimation()}},{key:"componentDidUpdate",value:function(){this._measureText(),this._marqueeTimer||this._startAnimation()}},{key:"componentWillUnmount",value:function(){clearTimeout(this._marqueeTimer)}},{key:"render",value:function(){var e=this,t=this.props,r=t.prefixCls,a=t.className,l=t.text,n=(0,i.default)({position:"relative",right:this.state.animatedWidth,whiteSpace:"nowrap",display:"inline-block"},this.props.style);return u.createElement("div",{className:r+"-marquee-wrap "+a,style:{overflow:"hidden"},role:"marquee"},u.createElement("div",{ref:function(t){return e.textRef=t},className:r+"-marquee",style:n},l))}},{key:"_startAnimation",value:function(){var e=this;this._marqueeTimer&&window.clearTimeout(this._marqueeTimer);var t=1/this.props.fps*1e3,r=0===this.state.animatedWidth?this.props.leading:t;0!==this.state.overflowWidth&&(this._marqueeTimer=window.setTimeout((function r(){var i=e.state.overflowWidth,a=e.state.animatedWidth+1,l=a>i;if(l){if(!e.props.loop)return;a=0}l&&e.props.trailing?e._marqueeTimer=window.setTimeout((function(){e.setState({animatedWidth:a}),e._marqueeTimer=window.setTimeout(r,t)}),e.props.trailing):(e.setState({animatedWidth:a}),e._marqueeTimer=window.setTimeout(r,t))}),r))}},{key:"_measureText",value:function(){var e=s.findDOMNode(this),t=this.textRef;if(e&&t){var r=e.offsetWidth,i=t.offsetWidth-r;i!==this.state.overflowWidth&&this.setState({overflowWidth:i})}}}]),t}(u.Component);t.default=d,d.defaultProps={text:"",loop:!1,leading:500,trailing:800,fps:40,className:""},e.exports=t.default},88:function(e,t,r){"use strict";r(66),r(142)}}]);
//# sourceMappingURL=3.3e3a0411.chunk.js.map