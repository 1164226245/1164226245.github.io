(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[12],{118:function(e,t,n){"use strict";n(66),n(88),n(119)},119:function(e,t,n){},120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(121)),r=l(n(79)),o=l(n(124));function l(e){return e&&e.__esModule?e:{default:e}}r.default.CheckboxItem=o.default,r.default.AgreeItem=a.default,t.default=r.default,e.exports=t.default},121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(n(63)),r=f(n(58)),o=f(n(59)),l=f(n(60)),i=f(n(61)),s=f(n(64)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),u=f(n(133)),d=f(n(79));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},b=function(e){function t(){return(0,r.default)(this,t),(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.style,n=p(e,["style"]),r=n.prefixCls,o=n.className,l=(0,s.default)(r+"-agree",o);return c.createElement("div",(0,a.default)({},(0,u.default)(n),{className:l,style:t}),c.createElement(d.default,(0,a.default)({},n,{className:r+"-agree-label"})))}}]),t}(c.Component);t.default=b,b.defaultProps={prefixCls:"am-checkbox"},e.exports=t.default},122:function(e,t,n){var a=n(123);var r={shouldComponentUpdate:function(e,t){return function(e,t,n){return!a(e.props,t)||!a(e.state,n)}(this,e,t)}};e.exports=r},123:function(e,t){e.exports=function(e,t,n,a){var r=n?n.call(a,e,t):void 0;if(void 0!==r)return!!r;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),l=Object.keys(t);if(o.length!==l.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var c=o[s];if(!i(c))return!1;var u=e[c],d=t[c];if(!1===(r=n?n.call(a,u,d,c):void 0)||void 0===r&&u!==d)return!1}return!0}},124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=p(n(63)),r=p(n(67)),o=p(n(58)),l=p(n(59)),i=p(n(60)),s=p(n(61)),c=p(n(64)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),d=p(n(132)),f=p(n(79));function p(e){return e&&e.__esModule?e:{default:e}}var b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},m=d.default.Item;function h(){}var y=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.listPrefixCls,o=(t.onChange,t.disabled),l=t.checkboxProps,i=t.onClick,s=b(t,["listPrefixCls","onChange","disabled","checkboxProps","onClick"]),d=s.prefixCls,p=s.className,y=s.children,v=(0,c.default)(d+"-item",p,(0,r.default)({},d+"-item-disabled",!0===o));o||(s.onClick=i||h);var g={};return["name","defaultChecked","checked","onChange","disabled"].forEach((function(t){t in e.props&&(g[t]=e.props[t])})),u.createElement(m,(0,a.default)({},s,{prefixCls:n,className:v,thumb:u.createElement(f.default,(0,a.default)({},l,g))}),y)}}]),t}(u.Component);t.default=y,y.defaultProps={prefixCls:"am-checkbox",listPrefixCls:"am-list",checkboxProps:{}},e.exports=t.default},127:function(e,t,n){"use strict";n.r(t);var a=n(63),r=n.n(a),o=n(67),l=n.n(o),i=n(154),s=n.n(i),c=n(58),u=n.n(c),d=n(59),f=n.n(d),p=n(60),b=n.n(p),m=n(61),h=n.n(m),y=n(0),v=n.n(y),g=n(2),C=n.n(g),k=n(122),O=n.n(k),x=n(64),j=n.n(x),_=function(e){function t(e){u()(this,t);var n=b()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));P.call(n);var a="checked"in e?e.checked:e.defaultChecked;return n.state={checked:a},n}return h()(t,e),f()(t,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:e.checked})}},{key:"shouldComponentUpdate",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return O.a.shouldComponentUpdate.apply(this,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.className,o=t.style,i=t.name,c=t.type,u=t.disabled,d=t.readOnly,f=t.tabIndex,p=t.onClick,b=t.onFocus,m=t.onBlur,h=s()(t,["prefixCls","className","style","name","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur"]),y=Object.keys(h).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=h[t]),e}),{}),g=this.state.checked,C=j()(n,a,(e={},l()(e,n+"-checked",g),l()(e,n+"-disabled",u),e));return v.a.createElement("span",{className:C,style:o},v.a.createElement("input",r()({name:i,type:c,readOnly:d,disabled:u,tabIndex:f,className:n+"-input",checked:!!g,onClick:p,onFocus:b,onBlur:m,onChange:this.handleChange},y)),v.a.createElement("span",{className:n+"-inner"}))}}]),t}(v.a.Component);_.propTypes={prefixCls:C.a.string,className:C.a.string,style:C.a.object,name:C.a.string,type:C.a.string,defaultChecked:C.a.oneOfType([C.a.number,C.a.bool]),checked:C.a.oneOfType([C.a.number,C.a.bool]),disabled:C.a.bool,onFocus:C.a.func,onBlur:C.a.func,onChange:C.a.func,onClick:C.a.func,tabIndex:C.a.string,readOnly:C.a.bool},_.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}};var P=function(){var e=this;this.handleChange=function(t){var n=e.props;n.disabled||("checked"in n||e.setState({checked:t.target.checked}),n.onChange({target:r()({},n,{checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()}}))}},w=_;n.d(t,"default",(function(){return w}))},143:function(e,t,n){"use strict";n(66),n(88),n(144)},144:function(e,t,n){},145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=y(n(67)),r=y(n(63)),o=y(n(58)),l=y(n(59)),i=y(n(60)),s=y(n(61)),c=y(n(64)),u=h(n(2)),d=h(n(0)),f=y(n(74)),p=n(93),b=y(n(146)),m=y(n(150));function h(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function y(e){return e&&e.__esModule?e:{default:e}}var v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n};function g(){}function C(e){return"undefined"===typeof e||null===e?"":e+""}var k=function(e){function t(e){(0,o.default)(this,t);var n=(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onInputChange=function(e){var t=e.target,a=t.value,r=0;try{r=t.selectionEnd||0}catch(u){console.warn("Get selection error:",u)}var o=n.state.value,l=void 0===o?"":o,i=n.props.type,s=a;switch(i){case"bankCard":s=a.replace(/\D/g,"").replace(/(....)(?=.)/g,"$1 ");break;case"phone":var c=(s=a.replace(/\D/g,"").substring(0,11)).length;c>3&&c<8?s=s.substr(0,3)+" "+s.substr(3):c>=8&&(s=s.substr(0,3)+" "+s.substr(3,4)+" "+s.substr(7));break;case"number":s=a.replace(/\D/g,"")}n.handleOnChange(s,s!==a,(function(){switch(i){case"bankCard":case"phone":case"number":try{var e=n.calcPos(r,l,a,s,[" "],/\D/g);("phone"===i&&(4===e||9===e)||"bankCard"===i&&e>0&&e%5===0)&&(e-=1),t.selectionStart=t.selectionEnd=e}catch(u){console.warn("Set selection error:",u)}}}))},n.handleOnChange=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g,r=n.props.onChange;"value"in n.props?n.setState({value:n.props.value}):n.setState({value:e}),r?t?setTimeout((function(){r(e),a()})):(r(e),a()):a()},n.onInputFocus=function(e){n.debounceTimeout&&(clearTimeout(n.debounceTimeout),n.debounceTimeout=null),n.setState({focus:!0}),n.props.onFocus&&n.props.onFocus(e)},n.onInputBlur=function(e){n.inputRef&&(n.debounceTimeout=window.setTimeout((function(){document.activeElement!==(n.inputRef&&n.inputRef.inputRef)&&n.setState({focus:!1})}),200)),n.props.onBlur&&(setTimeout((function(){document.body&&(document.body.scrollTop=document.body.scrollTop)}),100),n.props.onBlur(e))},n.clearInput=function(){"password"!==n.props.type&&n.props.updatePlaceholder&&n.setState({placeholder:n.props.value}),n.setState({value:""}),n.props.onChange&&n.props.onChange(""),n.focus()},n.focus=function(){n.inputRef&&n.inputRef.focus()},n.calcPos=function(e,t,n,a,r,o){var l=n.length-t.length,i=e;if(l>0){var s=n.substr(i-l,l).replace(o,"").length;i-=l-s;for(var c=0;s>0;)-1===r.indexOf(a.charAt(i-s+c))?s--:c++;i+=c}return i},n.state={placeholder:e.placeholder,value:C(e.value||e.defaultValue)},n}return(0,s.default)(t,e),(0,l.default)(t,[{key:"componentWillReceiveProps",value:function(e){"placeholder"in e&&!e.updatePlaceholder&&this.setState({placeholder:e.placeholder}),"value"in e&&this.setState({value:e.value})}},{key:"componentWillUnmount",value:function(){this.debounceTimeout&&(window.clearTimeout(this.debounceTimeout),this.debounceTimeout=null)}},{key:"render",value:function(){var e,t,o=this,l=(0,r.default)({},this.props);delete l.updatePlaceholder;var i=l.prefixCls,s=l.prefixListCls,u=l.editable,h=l.style,y=l.clear,g=l.children,k=l.error,O=l.className,x=l.extra,j=l.labelNumber,_=l.type,P=l.onExtraClick,w=l.onErrorClick,E=l.moneyKeyboardAlign,I=l.moneyKeyboardWrapProps,L=l.moneyKeyboardHeader,K=l.onVirtualKeyboardConfirm,N=l.autoAdjustHeight,S=l.disabledKeys,A=v(l,["prefixCls","prefixListCls","editable","style","clear","children","error","className","extra","labelNumber","type","onExtraClick","onErrorClick","moneyKeyboardAlign","moneyKeyboardWrapProps","moneyKeyboardHeader","onVirtualKeyboardConfirm","autoAdjustHeight","disabledKeys"]),B=A.name,R=A.disabled,F=A.maxLength,M=this.state.value,T=(0,p.getComponentLocale)(this.props,this.context,"InputItem",(function(){return n(151)})),H=T.confirmLabel,D=T.backspaceLabel,z=T.cancelKeyboardLabel,V=this.state,W=V.focus,U=V.placeholder,G=(0,c.default)(s+"-item",i+"-item",s+"-item-middle",O,(e={},(0,a.default)(e,i+"-disabled",R),(0,a.default)(e,i+"-error",k),(0,a.default)(e,i+"-focus",W),(0,a.default)(e,i+"-android",W),e)),q=(0,c.default)(i+"-label",(t={},(0,a.default)(t,i+"-label-2",2===j),(0,a.default)(t,i+"-label-3",3===j),(0,a.default)(t,i+"-label-4",4===j),(0,a.default)(t,i+"-label-5",5===j),(0,a.default)(t,i+"-label-6",6===j),(0,a.default)(t,i+"-label-7",7===j),t)),J=i+"-control",Y="text";"bankCard"===_||"phone"===_?Y="tel":"password"===_?Y="password":"digit"===_?Y="number":"text"!==_&&"number"!==_&&(Y=_);var Q=void 0;"number"===_&&(Q={pattern:"[0-9]*"});var X=void 0;return"digit"===_&&(X={className:"h5numInput"}),d.createElement("div",{className:G},d.createElement("div",{className:s+"-line"},g?d.createElement("div",{className:q},g):null,d.createElement("div",{className:J},"money"===_?d.createElement(b.default,{value:C(M),type:_,ref:function(e){return o.inputRef=e},maxLength:F,placeholder:U,onChange:this.onInputChange,onFocus:this.onInputFocus,onBlur:this.onInputBlur,onVirtualKeyboardConfirm:K,disabled:R,editable:u,prefixCls:i,style:h,confirmLabel:H,backspaceLabel:D,cancelKeyboardLabel:z,moneyKeyboardAlign:E,moneyKeyboardWrapProps:I,moneyKeyboardHeader:L,autoAdjustHeight:N,disabledKeys:S}):d.createElement(m.default,(0,r.default)({},Q,A,X,{value:C(M),defaultValue:void 0,ref:function(e){return o.inputRef=e},style:h,type:Y,maxLength:F,name:B,placeholder:U,onChange:this.onInputChange,onFocus:this.onInputFocus,onBlur:this.onInputBlur,readOnly:!u,disabled:R}))),y&&u&&!R&&M&&(""+M).length>0?d.createElement(f.default,{activeClassName:i+"-clear-active"},d.createElement("div",{className:i+"-clear",onClick:this.clearInput})):null,k?d.createElement("div",{className:i+"-error-extra",onClick:w}):null,""!==x?d.createElement("div",{className:i+"-extra",onClick:P},x):null))}}]),t}(d.Component);k.defaultProps={prefixCls:"am-input",prefixListCls:"am-list",type:"text",editable:!0,disabled:!1,placeholder:"",clear:!1,onChange:g,onBlur:g,onFocus:g,extra:"",onExtraClick:g,error:!1,onErrorClick:g,onVirtualKeyboardConfirm:g,labelNumber:5,updatePlaceholder:!1,moneyKeyboardAlign:"right",moneyKeyboardWrapProps:{},moneyKeyboardHeader:null,disabledKeys:null},k.contextTypes={antLocale:u.object},t.default=k,e.exports=t.default},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=m(n(58)),r=m(n(59)),o=m(n(60)),l=m(n(61)),i=m(n(64)),s=b(n(0)),c=b(n(18)),u=n(147),d=m(n(148)),f=m(n(149)),p=n(94);function b(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function m(e){return e&&e.__esModule?e:{default:e}}var h=null,y=!!c.createPortal;var v=function(e){function t(e){(0,a.default)(this,t);var n=(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onChange=function(e){"value"in n.props||n.setState({value:e.target.value}),n.props.onChange(e)},n.onConfirm=function(e){n.props.onVirtualKeyboardConfirm(e)},n.addBlurListener=function(){document.addEventListener("click",n.doBlur,!1)},n.removeBlurListener=function(){document.removeEventListener("click",n.doBlur,!1)},n.saveRef=function(e){y&&e&&(h=e)},n.doBlur=function(e){var t=n.state.value;e.target!==n.inputRef&&n.onInputBlur(t)},n.unLinkInput=function(){h&&h.antmKeyboard&&h.linkedInput&&h.linkedInput===n&&(h.linkedInput=null,n.props.autoAdjustHeight&&(n.getContainer().style.height="0"),(0,u.addClass)(h.antmKeyboard,n.props.keyboardPrefixCls+"-wrapper-hide")),n.removeBlurListener()},n.onInputBlur=function(e){y&&(n.keyBoard=null),n.state.focus&&(n.setState({focus:!1}),n.props.onBlur(e),setTimeout((function(){n.unLinkInput()}),50))},n.onInputFocus=function(){var e=n.state.value;n.props.onFocus(e),n.setState({focus:!0},(function(){if(h){if(h.linkedInput=n,h.antmKeyboard){if(n.props.autoAdjustHeight){var t=h.antmKeyboard.offsetHeight;if(n.getContainer().style.height=t+"px",n.inputRef){var a=n.inputRef.getBoundingClientRect().bottom,r=window.innerHeight-a;r<t&&(o=function(){var e=document.scrollingElement||document.documentElement;return e&&e.scrollTop||0}()+t-r,(document.scrollingElement||document.documentElement).scrollTop=o)}}(0,u.removeClass)(h.antmKeyboard,n.props.keyboardPrefixCls+"-wrapper-hide")}h.confirmDisabled=""===e,h.confirmKeyboardItem&&(""===e?(0,u.addClass)(h.confirmKeyboardItem,n.props.keyboardPrefixCls+"-item-disabled"):(0,u.removeClass)(h.confirmKeyboardItem,n.props.keyboardPrefixCls+"-item-disabled"))}var o}))},n.onKeyboardClick=function(e){var t=n.props.maxLength,a=n.state.value,r=n.onChange,o=void 0;"delete"===e?r({target:{value:o=a.substring(0,a.length-1)}}):"confirm"===e?(r({target:{value:o=a}}),n.onInputBlur(a),n.onConfirm(a)):"hide"===e?(o=a,n.onInputBlur(o)):r(void 0!==t&&+t>=0&&(a+e).length>t?{target:{value:o=(a+e).substr(0,t)}}:{target:{value:o=a+e}}),h&&(h.confirmDisabled=""===o,h.confirmKeyboardItem&&(""===o?(0,u.addClass)(h.confirmKeyboardItem,n.props.keyboardPrefixCls+"-item-disabled"):(0,u.removeClass)(h.confirmKeyboardItem,n.props.keyboardPrefixCls+"-item-disabled")))},n.onFakeInputClick=function(){n.focus()},n.focus=function(){n.renderCustomKeyboard(),n.removeBlurListener(),n.state.focus||n.onInputFocus(),setTimeout((function(){n.addBlurListener()}),50)},n.state={focus:!1,value:e.value||""},n}return(0,l.default)(t,e),(0,r.default)(t,[{key:"componentWillReceiveProps",value:function(e){"value"in e&&this.setState({value:e.value})}},{key:"componentWillUnmount",value:function(){this.state.focus&&this.props.onBlur(this.state.value),this.unLinkInput()}},{key:"getComponent",value:function(){var e=this.props,t=e.confirmLabel,n=e.backspaceLabel,a=e.cancelKeyboardLabel,r=e.keyboardPrefixCls,o=e.moneyKeyboardWrapProps,l=e.moneyKeyboardHeader,i=e.disabledKeys;return s.createElement(d.default,{ref:this.saveRef,onClick:this.onKeyboardClick,prefixCls:r,confirmLabel:t,backspaceLabel:n,cancelKeyboardLabel:a,wrapProps:o,header:l,disabledKeys:i})}},{key:"getContainer",value:function(){var e=this.props.keyboardPrefixCls,t=document.querySelector("#"+e+"-container");return t||((t=document.createElement("div")).setAttribute("id",e+"-container"),document.body.appendChild(t)),this.container=t,this.container}},{key:"renderCustomKeyboard",value:function(){var e=this;y?this.keyBoard=s.createElement(f.default,{getContainer:function(){return e.getContainer()}},this.getComponent()):h=c.unstable_renderSubtreeIntoContainer(this,this.getComponent(),this.getContainer())}},{key:"renderPortal",value:function(){return y&&p.canUseDOM?this.keyBoard:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.placeholder,a=t.disabled,r=t.editable,o=t.moneyKeyboardAlign,l=this.state,c=l.focus,u=l.value,d=a||!r,f=(0,i.default)("fake-input",{focus:c,"fake-input-disabled":a}),p=(0,i.default)("fake-input-container",{"fake-input-container-left":"left"===o});return s.createElement("div",{className:p},""===u&&s.createElement("div",{className:"fake-input-placeholder"},n),s.createElement("div",{role:"textbox","aria-label":u||n,className:f,ref:function(t){return e.inputRef=t},onClick:d?function(){}:this.onFakeInputClick},u),this.renderPortal())}}]),t}(s.Component);v.defaultProps={onChange:function(){},onFocus:function(){},onBlur:function(){},onVirtualKeyboardConfirm:function(){},placeholder:"",disabled:!1,editable:!0,prefixCls:"am-input",keyboardPrefixCls:"am-number-keyboard",autoAdjustHeight:!1},t.default=v,e.exports=t.default},147:function(e,t,n){"use strict";function a(e,t){return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}Object.defineProperty(t,"__esModule",{value:!0}),t.hasClass=a,t.addClass=function(e,t){e.classList?e.classList.add(t):a(e,t)||(e.className=e.className+" "+t)},t.removeClass=function(e,t){if(e.classList)e.classList.remove(t);else if(a(e,t)){var n=e.className;e.className=(" "+n+" ").replace(" "+t+" ","")}}},148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.KeyboardItem=void 0;var a=p(n(63)),r=p(n(67)),o=p(n(58)),l=p(n(59)),i=p(n(60)),s=p(n(61)),c=p(n(64)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),d=p(n(74)),f=n(94);function p(e){return e&&e.__esModule?e:{default:e}}var b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n};function m(e,t){if(!e||!e.length||!t)return!1;for(var n=0,a=e.length;n<a;n++)if(e[n]===t)return!0;return!1}var h=t.KeyboardItem=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.onClick,o=e.className,l=e.disabled,i=e.children,s=e.tdRef,f=e.label,p=e.iconOnly,m=b(e,["prefixCls","onClick","className","disabled","children","tdRef","label","iconOnly"]),h=i;"keyboard-delete"===o?h="delete":"keyboard-hide"===o?h="hide":"keyboard-confirm"===o&&(h="confirm");var y=(0,r.default)({},t+"-item-disabled",l),v=(0,c.default)(t+"-item",o,y);return u.createElement(d.default,{disabled:l,activeClassName:t+"-item-active"},u.createElement("td",(0,a.default)({ref:s,onClick:function(e){n(e,h)},className:v},m),i,p&&u.createElement("i",{className:"sr-only"},f)))}}]),t}(u.Component);h.defaultProps={prefixCls:"am-number-keyboard",onClick:function(){},disabled:!1};var y=function(e){function t(){(0,o.default)(this,t);var e=(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onKeyboardClick=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t.nativeEvent.stopImmediatePropagation(),e.props.disabledKeys&&m(e.props.disabledKeys,n)?null:"confirm"===n&&e.confirmDisabled?null:void(e.linkedInput&&e.linkedInput.onKeyboardClick(n))},e.renderKeyboardItem=function(t,n){var a=!1;return e.props.disabledKeys&&m(e.props.disabledKeys,t)&&(a=!0),u.createElement(h,{onClick:e.onKeyboardClick,key:"item-"+t+"-"+n,disabled:a},t)},e}return(0,s.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,r=t.confirmLabel,o=t.backspaceLabel,l=t.cancelKeyboardLabel,i=t.wrapProps,s=t.header,d=(0,c.default)(n+"-wrapper",n+"-wrapper-hide");return u.createElement("div",(0,a.default)({className:d,ref:function(t){return e.antmKeyboard=t}},i),s&&u.cloneElement(s,{onClick:this.onKeyboardClick}),u.createElement("table",null,u.createElement("tbody",null,u.createElement("tr",null,["1","2","3"].map((function(t,n){return e.renderKeyboardItem(t,n)})),u.createElement(h,(0,a.default)({className:"keyboard-delete",rowSpan:2,onClick:this.onKeyboardClick},this.getAriaAttr(o)))),u.createElement("tr",null,["4","5","6"].map((function(t,n){return e.renderKeyboardItem(t,n)}))),u.createElement("tr",null,["7","8","9"].map((function(t,n){return e.renderKeyboardItem(t,n)})),u.createElement(h,{className:"keyboard-confirm",rowSpan:2,onClick:this.onKeyboardClick,tdRef:function(t){return e.confirmKeyboardItem=t}},r)),u.createElement("tr",null,[".","0"].map((function(t,n){return e.renderKeyboardItem(t,n)})),u.createElement(h,(0,a.default)({className:"keyboard-hide",onClick:this.onKeyboardClick},this.getAriaAttr(l)))))))}},{key:"getAriaAttr",value:function(e){return f.IS_IOS?{label:e,iconOnly:!0}:{role:"button","aria-label":e}}}]),t}(u.Component);y.defaultProps={prefixCls:"am-number-keyboard",disabledKeys:null},t.default=y},149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(58)),r=c(n(59)),o=c(n(60)),l=c(n(61)),i=s(n(0));function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function c(e){return e&&e.__esModule?e:{default:e}}var u=s(n(18)).createPortal,d=function(e){function t(e){(0,a.default)(this,t);var n=(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.container=n.props.getContainer(),n}return(0,l.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){return this.props.children?u(this.props.children,this.container):null}}]),t}(i.Component);t.default=d,e.exports=t.default},150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n(63)),r=c(n(58)),o=c(n(59)),l=c(n(60)),i=c(n(61)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},d=function(e){function t(){(0,r.default)(this,t);var e=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onInputBlur=function(t){var n=t.target.value;e.props.onBlur&&e.props.onBlur(n)},e.onInputFocus=function(t){var n=t.target.value;e.props.onFocus&&e.props.onFocus(n)},e.focus=function(){e.inputRef&&e.inputRef.focus()},e}return(0,i.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=(t.onBlur,t.onFocus,u(t,["onBlur","onFocus"]));return s.createElement("input",(0,a.default)({ref:function(t){return e.inputRef=t},onBlur:this.onInputBlur,onFocus:this.onInputFocus},n))}}]),t}(s.Component);t.default=d,e.exports=t.default},151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={confirmLabel:"\u786e\u5b9a",backspaceLabel:"\u9000\u683c",cancelKeyboardLabel:"\u6536\u8d77\u952e\u76d8"},e.exports=t.default},377:function(e,t,n){},490:function(e,t,n){"use strict";n.r(t);n(118);var a,r=n(120),o=n.n(r),l=(n(75),n(76)),i=n.n(l),s=(n(143),n(145)),c=n.n(s),u=(n(152),n(153)),d=n.n(u),f=n(13),p=n(14),b=n(16),m=n(15),h=n(17),y=(n(377),n(0)),v=n.n(y),g=n(68),C=n(62),k=n(99),O=n(111),x=Object(O.a)(a=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(b.a)(this,Object(m.a)(t).call(this))).checkOne=function(e){console.log(e),console.log(e.target.id),console.log(e.target.checked),k.a.setDefaultAddre(sessionStorage.mobile,e.target.id,e.target.checked)},e.deloneAddress=function(e,t){k.a.deleteOneAddr(e,t),C.c.go(0)},e.editP=function(e){console.log(e)},e.gotoEditAddress=function(e,t,n){C.c.push("./modifyaddress?id="+t)},e.saveAddress=function(){console.log(e.provinceRef.state.value),C.a.post("/react/addaddress",{mobile:sessionStorage.mobile,addresobj:{mobile:e.moblieRef.state.value,province:e.provinceRef.state.value,town:e.townRef.state.value,district:e.districtRef.state.value,specific:e.inputRef.state.value,checked:!1}}).then((function(e){console.log(e),C.c.go(0)}))},e.state={},e}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){k.a.getAddrList("/react/showaddress")}},{key:"render",value:function(){var e=this,t=k.a.addressList;k.a.num;return console.log(t),v.a.createElement("div",null,v.a.createElement(g.a,{title:"\u7528\u6237"+sessionStorage.mobile,style:{color:"#ffffff"},show:!0}),v.a.createElement(d.a,{marqueeProps:{loop:!0,style:{padding:"0 7.5px"}}},"\u5730\u5740\u9875\u53ef\u4ee5\u5b8c\u6210\u5730\u5740\u65b0\u589e,\u8bbe\u7f6e\u9ed8\u8ba4\u5730\u5740,\u5220\u9664\u5730\u5740\u4ee5\u53ca\u5730\u5740\u4fee\u6539\u7b49\u529f\u80fd"),v.a.createElement(c.a,{placeholder:"\u6536\u8d27\u624b\u673a\u53f7",ref:function(t){return e.moblieRef=t},onChange:this.editP},v.a.createElement("div",{onClick:function(){return e.labelFocusInst.focus()}},"\u624b\u673a\u53f7:")),v.a.createElement(c.a,{placeholder:"xx\u7701",ref:function(t){return e.provinceRef=t},onChange:this.editP},v.a.createElement("div",{onClick:function(){return e.labelFocusInst.focus()}},"\u7701:")),v.a.createElement(c.a,{placeholder:"xx\u5e02",ref:function(t){return e.townRef=t},onChange:this.editP},v.a.createElement("div",{onClick:function(){return e.labelFocusInst.focus()}},"\u5e02")),v.a.createElement(c.a,{placeholder:"xx\u533a",ref:function(t){return e.districtRef=t},onChange:this.editP},v.a.createElement("div",{onClick:function(){return e.labelFocusInst.focus()}},"\u533a")),v.a.createElement(c.a,{placeholder:"xx\u8857\u9053xx\u53f7...",ref:function(t){return e.inputRef=t},onChange:this.editP},v.a.createElement("div",{onClick:function(){return e.labelFocusInst.focus()}},"\u5177\u4f53")),v.a.createElement(i.a,{type:"ghost",style:{backgroundColor:"#99CCFF",color:"#FF6666"},onClick:this.saveAddress},"\u65b0\u589e\u5730\u5740"),v.a.createElement("div",{className:"showaddress"},t.map((function(t,n){return console.log(t),console.log(t.addresobj.checked),v.a.createElement("ul",{className:"tr",key:n,id:t._id,style:{height:"50px"}},v.a.createElement("li",{style:{width:"25%",lineHeight:"50px"}},v.a.createElement("p",{className:"title",style:{lineHeight:"0px",marginTop:"30px"}},t.addresobj.mobile)),v.a.createElement("li",{style:{width:"25%",lineHeight:"50px"}},v.a.createElement("p",{className:"title",style:{lineHeight:"0px",marginTop:"30px"}},t.addresobj.province+"\u7701")),v.a.createElement("li",{style:{width:"20%",lineHeight:"50px"}},v.a.createElement("p",{className:"title",style:{lineHeight:"0px",marginTop:"30px"}},t.addresobj.town+"\u5e02")),v.a.createElement("li",{style:{width:"25%",lineHeight:"50px"}},v.a.createElement("p",{className:"title",style:{lineHeight:"0px",marginTop:"30px"}},t.addresobj.district+"\u533a")),v.a.createElement("li",{style:{width:"100%",lineHeight:"50px",display:"flex",justifyContent:" spaceBetween"}},v.a.createElement("p",{className:"title",style:{lineHeight:"0px",marginTop:"24px",textAlign:"left",width:"50%",textOverflow:"ellipsis"}},t.addresobj.specific),v.a.createElement("div",{className:"defaultone",style:{display:"flex",alignItems:"end",width:"60%"}},v.a.createElement("p",null,"\u9ed8\u8ba4\u5730\u5740:",v.a.createElement(o.a,{checked:t.checked,id:t._id,onChange:e.checkOne})),v.a.createElement("p",{style:{display:"flex",alignSelf:"center"}},v.a.createElement(i.a,{onClick:function(){return e.deloneAddress(sessionStorage.mobile,t._id)},type:"primary",size:"small",inline:!0,style:{backgroundColor:"#CC3333",color:"#CCCCCC"}},"\u5220\u9664"),v.a.createElement(i.a,{type:"primary",size:"small",inline:!0,style:{backgroundColor:"#FF9966",color:"#fff",fontSize:".2rem"},onClick:function(){return e.gotoEditAddress(t.addresobj.mobile,t._id,{province:t.addresobj.province,town:t.addresobj.town,district:t.addresobj.district,specific:t.addresobj.specific})}},"\u4fee\u6539")))))}))))}}]),t}(y.Component))||a;t.default=x},62:function(e,t,n){"use strict";n(86);var a=n(6),r=n(65);n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r.a})),n.d(t,"b",(function(){return r.b}));var o=new a.b},65:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return s}));n(77);var a=n(78),r=n.n(a),o=n(69),l=n.n(o);n.d(t,"a",(function(){return l.a}));var i=n(62),s="https://huyulin.top:4321/",c="";function u(e){r.a.hide(),r.a.fail(e,1)}function d(e){r.a.success(e,1)}l.a.defaults.baseURL=s,l.a.defaults.headers.common.token=c,l.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",l.a.interceptors.request.use((function(e){var t,n;return t=t||"\u6b63\u5728\u8bf7\u6c42",n=n||1,r.a.hide(),r.a.loading(t,n,(function(){})),c=sessionStorage.token?sessionStorage.token:"",e.headers.token=c,e}),(function(e){var t;return t="\u8bf7\u6c42\u5931\u8d25,\u7f51\u7edc\u5f02\u5e38",r.a.offline(t,1),Promise.reject(e)})),l.a.interceptors.response.use((function(e){return console.log(e),"3000"==e.data.code&&i.c.push("/login"),e.data.type?d(e.data.msg):0==e.data.type?u(e.data.msg):d(e.data.msg),e}),(function(e){return u("\u54cd\u5e94\u5931\u8d25,\u670d\u52a1\u5f02\u5e38"),Promise.reject(e)}))},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));n(80);var a=n(81),r=n.n(a),o=(n(82),n(83)),l=n.n(o),i=(n(84),n(85)),s=n.n(i),c=(n(71),n(72)),u=n.n(c),d=n(13),f=n(14),p=n(16),b=n(15),m=n(17),h=(n(70),n(0)),y=n.n(h),v=n(62),g=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(f.a)(t,[{key:"handelGoBack",value:function(e){e&&v.c.goBack()}},{key:"handelGoSearch",value:function(){v.c.push("/search")}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.show,r=t.serach,o=sessionStorage.token;return y.a.createElement(s.a,{mode:"light",className:"navbar",icon:a&&y.a.createElement(u.a,{type:"left"}),onLeftClick:function(){return e.handelGoBack(a)},rightContent:[!r&&y.a.createElement(u.a,{onClick:this.handelGoSearch.bind(this),key:"0",type:"search",style:{marginRight:"16px"}}),!o&&y.a.createElement(k,{scan:this.props.scan,login:this.props.login,key:1})]},n)}}]),t}(h.Component),C=l.a.Item,k=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={visible:!1,selected:""},n.handleVisibleChange=function(e){n.setState({visible:e})},n.onSelect=function(e){n.setState({visible:!1,selected:e.props.value}),"login"==e.props.value?v.c.push("/login"):"scan"==e.props.value?v.c.push("/scan"):n.showActionSheet()},n.showActionSheet=function(){var e=["\u62cd\u7167","\u4ece\u624b\u673a\u76f8\u518c\u9009\u62e9","\u4f7f\u7528\u76f8\u673a\u62cd\u7167","\u5220\u9664","\u53d6\u6d88"];r.a.showActionSheetWithOptions({options:e,cancelButtonIndex:e.length-1,destructiveButtonIndex:e.length-2,message:"\u8bf7\u6ce8\u610f\u67e5\u770b",maskClosable:!0,"data-seed":"logId",wrapProps:{onTouchStart:function(e){return e.preventDefault()}}},(function(e){console.log(e)}))},n}return Object(m.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e,t=this.props,n=(t.scan,t.login);return y.a.createElement(l.a,{mask:!0,overlayClassName:"fortest",overlayStyle:{color:"currentColor"},visible:this.state.visible,overlay:[!n&&y.a.createElement(C,{key:"6",value:"login",icon:(e="uQIYTFeRrjPELImDRrPt",y.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/".concat(e,".svg"),className:"am-icon am-icon-xs",alt:""}))},y.a.createElement("span",{style:{marginRight:5}},"\u767b\u5f55"))],align:{overflow:{adjustY:0,adjustX:0},offset:[-10,0]},onVisibleChange:this.handleVisibleChange,onSelect:this.onSelect},y.a.createElement(u.a,{type:"ellipsis"}))}}]),t}(h.Component)},70:function(e,t,n){},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n(58)),r=u(n(59)),o=u(n(60)),l=u(n(61)),i=u(n(64)),s=u(n(127)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},f=function(e){function t(){return(0,a.default)(this,t),(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.style,a=d(e,["className","style"]),r=a.prefixCls,o=a.children,l=(0,i.default)(r+"-wrapper",t);"class"in a&&delete a.class;var u=c.createElement("label",{className:l,style:n},c.createElement(s.default,a),o);return this.props.wrapLabel?u:c.createElement(s.default,this.props)}}]),t}(c.Component);t.default=f,f.defaultProps={prefixCls:"am-checkbox",wrapLabel:!0},e.exports=t.default},93:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(63),o=(a=r)&&a.__esModule?a:{default:a};t.getComponentLocale=function(e,t,n,a){var r={};if(t&&t.antLocale&&t.antLocale[n])r=t.antLocale[n];else{var l=a();r=l.default||l}var i=(0,o.default)({},r);e.locale&&(i=(0,o.default)({},i,e.locale),e.locale.lang&&(i.lang=(0,o.default)({},r.lang,e.locale.lang)));return i},t.getLocaleCode=function(e){var t=e.antLocale&&e.antLocale.locale;if(e.antLocale&&e.antLocale.exist&&!t)return"zh-cn";return t}},94:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=t.canUseDOM=!("undefined"===typeof window||!window.document||!window.document.createElement);t.IS_IOS=a&&/iphone|ipad|ipod/i.test(window.navigator.userAgent)},99:function(e,t,n){"use strict";var a,r,o,l,i,s,c,u,d,f,p=n(73),b=n.n(p),m=n(96),h=n(13),y=n(97),v=(n(98),n(90)),g=n(62),C=(n(102),a=function e(){Object(h.a)(this,e),Object(m.a)(this,"addressList",r,this),Object(m.a)(this,"defaultAddressList",o,this),Object(m.a)(this,"num",l,this),Object(m.a)(this,"getAddrList",i,this),Object(m.a)(this,"getDefaultAddrList",s,this),Object(m.a)(this,"deleteOneAddr",c,this),Object(m.a)(this,"setDefaultAddre",u,this),Object(m.a)(this,"calcelDefault",d,this),Object(m.a)(this,"modifyaddress",f,this)},r=Object(y.a)(a.prototype,"addressList",[v.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),o=Object(y.a)(a.prototype,"defaultAddressList",[v.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),l=Object(y.a)(a.prototype,"num",[v.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),i=Object(y.a)(a.prototype,"getAddrList",[v.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var n;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(g.a.get(t));case 2:n=a.sent,e.addressList=n.data.result;case 4:case"end":return a.stop()}}))}}}),s=Object(y.a)(a.prototype,"getDefaultAddrList",[v.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var n;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(g.a.get(t));case 2:n=a.sent,console.log(n.data.result),e.defaultAddressList=n.data.result;case 5:case"end":return a.stop()}}))}}}),c=Object(y.a)(a.prototype,"deleteOneAddr",[v.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,n){g.a.post("/react/deleteoneaddress",{mobile:t,id:n}).then((function(t){console.log(t),e.num=t.data.code}))}}}),u=Object(y.a)(a.prototype,"setDefaultAddre",[v.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,n,a){g.a.post("/react/defaultChecked",{mobile:t,id:n,checked:a}).then((function(t){e.addressList=t.data.result}))}}}),d=Object(y.a)(a.prototype,"calcelDefault",[v.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t,n,a){g.a.post("/react/canceldefault",{mobile:t,id:n,checked:a}).then((function(t){e.addressList=e.addressList.map((function(e){return e._id==n&&(e.checked=!0!==a),e}))}))}}}),f=Object(y.a)(a.prototype,"modifyaddress",[v.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return function(e,t,n){g.a.post("/react/modifyaddress",{mobile:e,id:t,addresobj:n}).then((function(e){console.log(e)}))}}}),a);t.a=new C}}]);
//# sourceMappingURL=12.70031468.chunk.js.map