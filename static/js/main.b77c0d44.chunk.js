(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(n,e,t){"use strict";t.r(e);var r=t(5),o=t.n(r),a=t(38),i=t.n(a),u=(t(44),t(16)),c=(t(45),t(24)),s=t(17),f=t(14),l=t.n(f),d=t(39),w=t.n(d),p=t(9),h=t.n(p),v=t(15),g=t(18),m=t.n(g);t(96),t(99);m.a.initializeApp({apiKey:"AIzaSyDeVrI4qEw6LJyJpz9KyV6Us0946KFp3Vc",authDomain:"real-time-drawing.firebaseapp.com",databaseURL:"https://real-time-drawing.firebaseio.com",projectId:"real-time-drawing",appId:"1:483886123352:web:9a59dd94e7430752"});var b=m.a.auth(),y=m.a.firestore();b.onAuthStateChanged(function(n){console.log({user:n})});var E=function(){return b.currentUser},j=function(){var n=Object(v.a)(h.a.mark(function n(){return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.signInAnonymously();case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),x=function(){return y.collection("points")},O=function(){var n=Object(v.a)(h.a.mark(function n(e,t,r,o){var a,i;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}throw new Error("Id must be provided.");case 2:if("number"===typeof t&&"number"===typeof r){n.next=5;break}return n.abrupt("return");case 5:if(a=E()){n.next=8;break}throw new Error("User is not logged in.");case 8:return u=e,i=x().doc(u),n.next=11,i.set({userId:a.uid,x:t,y:r,color:o});case 11:case"end":return n.stop()}var u},n)}));return function(e,t,r,o){return n.apply(this,arguments)}}(),k=l.a.Util.getRandomColor(),S={x:0,y:0,points:[],stroke:k,tension:0},D={},I=function(n){var e=n?Object(s.a)({},S,{stroke:n}):S;return new l.a.Line(e)},L=function(n){var e=D[n];if(!e)throw new Error("Line with given id was not found.");return e},U=function(n,e){D[n]=e},A=function(n,e,t){var r=L(n);"number"===typeof e&&"number"===typeof t&&(r.points(r.points().concat([e,t])),r.draw())},M=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(r.useRef)(null),t=Object(r.useRef)(null),o=Object(r.useState)(!1),a=Object(u.a)(o,2),i=a[0],c=a[1],f=function(){return L(e.current)};Object(r.useEffect)(function(){if(n){return function(n,e){var t=E();if(!t)throw new Error("User is not logged in.");return x().onSnapshot(function(e){var r=e.docs.map(function(n){return Object(s.a)({id:n.id},n.data())}).filter(function(n){return n.userId!==t.uid});n(r)},function(n){console.error(n),e&&e(n)})}(function(n){n.forEach(function(n){var e=n.id,t=n.x,r=n.y,o=n.color;if(!D[e]){var a=I(o);U(e,a),l(a)}A(e,t,r)})})}},[n]);var l=function(n){t.current&&t.current.add(n)};return{layerRef:t,onStartDrawing:function(){c(!0),function(){var n=I(),t=w()();U(t,n),e.current=t}(),l(f())},onDrawing:function(t){if(i&&t.target.getPointerPosition&&f()){var r=t.target.getPointerPosition(),o=r.x,a=r.y,u=e.current;A(u,o,a),n&&O(u,o,a,k)}},onFinishDrawing:function(){c(!1)}}},R=function(){var n=M(!0),e=n.layerRef,t=n.onStartDrawing,r=n.onDrawing,a=n.onFinishDrawing;return o.a.createElement(c.Stage,{width:window.innerWidth,height:window.innerHeight,onMouseDown:t,onTouchStart:t,onMouseMove:r,onTouchMove:r,onMouseUp:a,onTouchEnd:a,onMouseLeave:a},o.a.createElement(c.Layer,{ref:e}))},J=function(){return o.a.createElement("div",null,o.a.createElement(R,null))},P=function(){var n=Object(r.useState)(!1),e=Object(u.a)(n,2),t=e[0],a=e[1];return Object(r.useEffect)(function(){return b.onAuthStateChanged(function(n){n?a(!0):j()})},[]),o.a.createElement("div",{className:"App"},t?o.a.createElement(J,null):o.a.createElement("h1",null,"Loading ....."))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},40:function(n,e,t){n.exports=t(101)},44:function(n,e,t){},45:function(n,e,t){}},[[40,1,2]]]);
//# sourceMappingURL=main.b77c0d44.chunk.js.map