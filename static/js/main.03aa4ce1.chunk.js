(this.webpackJsonpfood=this.webpackJsonpfood||[]).push([[0],{17:function(e,t,a){e.exports={card:"Card_card__26cdF",cardContent:"Card_cardContent__3SXIF",cardImage:"Card_cardImage__184Oc",cardName:"Card_cardName__3c0o4",cardDescr:"Card_cardDescr__15pqr",cardPrice:"Card_cardPrice__297zf",cardReviews:"Card_cardReviews__1B2PJ",cardButton:"Card_cardButton__37Qs5",tagList:"Card_tagList__38MXB",tagListItem:"Card_tagListItem__2WCQo",button:"Card_button__2Thkv",buttonIcon:"Card_buttonIcon__1taKd"}},25:function(e,t,a){e.exports={form:"Signup_form__289Q8",button:"Signup_button__U8Vel"}},55:function(e,t,a){e.exports={menu:"Menu_menu__3wc4b"}},56:function(e,t,a){e.exports={form:"SearchForm_form__NjrE1"}},57:function(e,t,a){e.exports={round:"SupportButton_round__2zT6z"}},64:function(e,t,a){e.exports=a(94)},69:function(e,t,a){},70:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),l=(a(69),a(21)),s=(a(70),a(29)),u=a(22),i=a.n(u),m=a(36),d=a(26),p=a(27),h=a(31),v=a(28),f=a(32),_=a(37),g=a.n(_),b=a(55),E=a.n(b),w=a(17),y=a.n(w),N=function(e){var t=e.product;return r.a.createElement("li",null,r.a.createElement("div",{className:y.a.card},r.a.createElement("img",{src:t.image,alt:t.name,className:y.a.cardImage}),r.a.createElement("div",{className:y.a.cardContent},r.a.createElement("h2",{className:y.a.cardName},t.name),r.a.createElement("p",{className:y.a.cardPrice},r.a.createElement("i",{className:"material-icons"},"monetization_on"),t.price," \u0433\u0440\u0438\u0432\u0435\u043d"),r.a.createElement("p",{className:y.a.cardDescr},t.description)),r.a.createElement("button",{className:y.a.cardButton+" "+y.a.button},r.a.createElement("i",{className:"material-icons button__icon"},"shopping_cart"),"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443")))},C=a(126),S=a(122),x=a(56),j=a.n(x),O=Object(S.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:200}}}})),k=function(e){var t=e.handleSearchForm,a=O();return r.a.createElement("form",{className:j.a.form,onSubmit:t},r.a.createElement(C.a,{id:"outlined-search",label:"Search by Category",type:"search",className:a.textField,margin:"normal",variant:"outlined"}))},F=a(57),B=a.n(F),P=(n.Component,""),I=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={products:null},a.handleSearchForm=function(e){e.preventDefault();var t=e.target.querySelector("input"),n=t.value;a.getProductsByCategory(n).then((function(e){a.setState({products:e.data.products})})),t.value=P},a.getProducts=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"http://localhost:3005",e.next=4,g.a.get("".concat("http://localhost:3005","/products"));case 4:return t=e.sent,e.abrupt("return",t);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),a.getProductsByCategory=function(){var e=Object(m.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"http://localhost:3005",e.next=4,g.a.get("".concat("http://localhost:3005","/products?category=").concat(t));case 4:return a=e.sent,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getProducts().then((function(t){e.setState({products:t.data.products})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.products;return r.a.createElement("div",null,r.a.createElement(k,{handleSearchForm:this.handleSearchForm}),r.a.createElement("ul",{className:E.a.menu},e&&e.map((function(e){return r.a.createElement(N,{key:e.id,product:e})}))))}}]),t}(n.Component),q=a(127),D=a(25),z=a.n(D),A=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={user:""},a.sendUserData=function(){var e=Object(m.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"http://localhost:3005",e.next=4,g.a.post("".concat("http://localhost:3005","/signup"),t,{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}});case 4:return a=e.sent,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),a.submitForm=function(e){var t={username:e.target.querySelector("#name").value,telephone:e.target.querySelector("#tel").value,password:e.target.querySelector("#psw").value,email:e.target.querySelector("#email").value};console.log(t),a.sendUserData(t).then((function(e){return console.log(e)}))},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:z.a.form,onSubmit:this.submitForm},r.a.createElement("div",null,r.a.createElement(C.a,{id:"name",className:z.a.textField,label:"Name",type:"text",margin:"normal",variant:"outlined"})),r.a.createElement("div",null,r.a.createElement(C.a,{id:"tel",className:z.a.textField,label:"Telephone",type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",margin:"normal",variant:"outlined"})),r.a.createElement("div",null,r.a.createElement(C.a,{id:"psw",className:z.a.textField,label:"Password",type:"password",margin:"normal",variant:"outlined",required:!0})),r.a.createElement("div",null,r.a.createElement(C.a,{id:"email",className:z.a.textField,label:"Email",type:"email",margin:"normal",variant:"outlined",required:!0})),r.a.createElement("div",null,r.a.createElement(q.a,{variant:"contained",type:"submit",className:z.a.button},"Submit")))}}]),t}(n.Component);var L=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"list"},r.a.createElement(s.b,{to:"/signup",className:"link",activeClassName:"selected"},"Signup"),r.a.createElement(s.b,{to:"/products",className:"link",activeClassName:"selected"},"Products")),r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/products",component:I}),r.a.createElement(l.b,{path:"/signup",component:A}),r.a.createElement(l.a,{to:"/products"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(s.a,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[64,1,2]]]);
//# sourceMappingURL=main.03aa4ce1.chunk.js.map