(this["webpackJsonptest-1"]=this["webpackJsonptest-1"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),s=(n(13),n(3)),l=n(4),i=n(7),u=n(6),h=n(5),m=n.n(h),d=(n(14),n(15),n(16),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.star.username,"?set=set4&size=180x180")}),r.a.createElement("h2",null,e.star.name),r.a.createElement("p",null,e.star.email))}),p=function(e){return r.a.createElement("div",{className:"card-list"},e.postars.map((function(e){return r.a.createElement(d,{key:e.id,star:e})})))},f=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"text",placeholder:t,onChange:n})}),v=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).handleSearch=function(t){e.setState({searchText:t.target.value})},e.state={ps:[],searchText:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({ps:t})}))}},{key:"render",value:function(){var e=this.state,t=e.ps,n=e.searchText,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:m.a,className:"App-logo"})),r.a.createElement("div",null,"\xa0"),r.a.createElement("div",null,r.a.createElement(f,{placeholder:"Search Stars",handleChange:this.handleSearch}),r.a.createElement(p,{postars:a})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.0f818eae.chunk.js.map