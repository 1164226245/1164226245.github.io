(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[30],{321:function(t,e,n){},322:function(t,e,n){},323:function(t,e,n){t.exports=n.p+"static/media/03.53f4cb0b.gif"},500:function(t,e,n){"use strict";n.r(e);n(75);var a=n(76),o=n.n(a),i=n(13),r=n(14),c=n(16),s=n(15),l=n(17),u=(n(321),n(0)),p=n.n(u),h=(n(322),n(480)),m=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={flag:!0},n}return Object(l.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.props,e=t.id,n=(t.options,t.children);return console.log(n),p.a.createElement("div",{className:"swiper-container",id:e},p.a.createElement("div",{className:"swiper-wrapper"},n))}},{key:"componentDidMount",value:function(){var t=this.props,e=t.id,n=t.options;if(t.children.length>0)new h.a("#"+e,n)}},{key:"componentDidUpdate",value:function(){var t=this.props,e=t.id,n=t.options;if(t.children.length>0&&this.state.flag){new h.a("#"+e,n);this.setState({flag:!1})}}}]),e}(u.Component);m.Item=function(t){return p.a.createElement("div",{className:"swiper-slide"},t.children)};var f,v=n(323),d=n.n(v),b=n(26),g=(m.Item,null),y=Object(b.b)()(f=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(c.a)(this,Object(s.a)(e).call(this,t))).handleGotoMain=function(){clearInterval(g),n.props.history.push("/main/home"),clearInterval(g)},n.state={count:10,txt:"\u8df3\u8fc7"},n}return Object(l.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;localStorage.visitCount?(localStorage.visitCount++,localStorage.visitCount>3&&this.props.history.push("/main/home")):localStorage.visitCount=1,g=setInterval((function(){t.setState((function(){return{count:--t.state.count}}),(function(){t.state.count<1&&(clearInterval(g),t.props.history.push("/main/home"))}))}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(g)}},{key:"render",value:function(){var t=this,e=this.state.count;return p.a.createElement("div",{className:"g-box"},p.a.createElement("img",{src:d.a,alt:""}),p.a.createElement(o.a,{loading:!0,inline:!0,className:"guidebutton",style:{color:"red"},onClick:function(){return t.handleGotoMain()}},e+"s"))}}]),e}(u.Component))||f;e.default=y}}]);
//# sourceMappingURL=30.b5cb5046.chunk.js.map