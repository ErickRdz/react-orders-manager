(this["webpackJsonpreact-orders-manager"]=this["webpackJsonpreact-orders-manager"]||[]).push([[0],{144:function(e,t,a){e.exports=a(292)},292:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),o=a(33),i=a(19),s=a(20),u=a(23),m=a(22),d=a(7),h=a(298),E=a(301),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(E.a.Item,{as:o.b,to:"/"},"Home"),r.a.createElement(E.a.Item,{as:o.b,to:"/orders"},"Orders"))}}]),a}(n.Component),f=a(299),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{text:!0,style:{backgroundColor:"white"}},r.a.createElement(f.a,{as:"h2"},"Welcome!"),r.a.createElement("p",null,"To see the orders list, go to the Orders section..."))}}]),a}(n.Component),g=a(79),v=a.n(g),C=a(134),O=a(300),w=a(302),j=a(135),y=a.n(j),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={ordersRequest:{}},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(C.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",url:"http://localhost:3001/orders"},e.next=3,y()(t);case 3:a=e.sent,this.setState({ordersRequest:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.ordersRequest;return r.a.createElement(h.a,null,e,r.a.createElement(O.a,{celled:!0,padded:!0},r.a.createElement(O.a.Header,null,r.a.createElement(O.a.Row,null,r.a.createElement(O.a.HeaderCell,{singleLine:!0},"Id "),r.a.createElement(O.a.HeaderCell,null,"Customer"),r.a.createElement(O.a.HeaderCell,null,"Amount"),r.a.createElement(O.a.HeaderCell,null,"Payment method"),r.a.createElement(O.a.HeaderCell,null,"Reference"))),r.a.createElement(O.a.Body,null,r.a.createElement(O.a.Row,null,r.a.createElement(O.a.Cell,null,r.a.createElement(f.a,{as:"h2",textAlign:"center"},"A")),r.a.createElement(O.a.Cell,{singleLine:!0},"Power Output"),r.a.createElement(O.a.Cell,null,r.a.createElement(w.a,{icon:"star",defaultRating:3,maxRating:3})),r.a.createElement(O.a.Cell,{textAlign:"right"},"80% ",r.a.createElement("br",null)),r.a.createElement(O.a.Cell,null,"Creatine supplementation is the reference compound for increasing muscular creatine levels; there is variability in this increase, however, with some nonresponders.")),r.a.createElement(O.a.Row,null,r.a.createElement(O.a.Cell,null,r.a.createElement(f.a,{as:"h2",textAlign:"center"},"A")),r.a.createElement(O.a.Cell,{singleLine:!0},"Weight"),r.a.createElement(O.a.Cell,null,r.a.createElement(w.a,{icon:"star",defaultRating:3,maxRating:3})),r.a.createElement(O.a.Cell,{textAlign:"right"},"100% ",r.a.createElement("br",null)),r.a.createElement(O.a.Cell,null,"Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess potency")))))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(p,null),r.a.createElement(h.a,{className:"main"},r.a.createElement(d.a,{exact:!0,path:"/",component:b}),r.a.createElement(d.a,{exact:!0,path:"/orders",component:x})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(291);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[144,1,2]]]);
//# sourceMappingURL=main.2a182d75.chunk.js.map