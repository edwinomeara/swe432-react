(this["webpackJsonpswe432-assignments"]=this["webpackJsonpswe432-assignments"]||[]).push([[0],{24:function(e,t,n){e.exports=n(41)},29:function(e,t,n){},30:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(13),s=n.n(l),r=(n(29),n(11)),m=n(21),i=(n(30),n(19)),u=n.n(i),o=n(46),f=n(22);function E(e){var t=e.assignment,n=e.checkAssignment;return c.a.createElement(o.a,null,c.a.createElement(f.a,null,c.a.createElement("input",{className:"mr-3",type:"checkbox",checked:t.complete,onChange:function(){n(t.id)}}),t.name))}var g=n(42),p=n(43),d=n(44);function v(e){var t=e.assignments,n=e.checkAssignment;return t.map((function(e){return c.a.createElement(g.a,{fluid:!0},c.a.createElement(p.a,null,c.a.createElement(d.a,null,c.a.createElement(E,{key:e.id,checkAssignment:n,assignment:e}))))}))}var h=n(47);var b=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],l=t[1],s=Object(a.useRef)();return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("assignmentApp.assignments"));e&&l(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("assignmentApp.assignments",JSON.stringify(n))}),[n]),c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,null,c.a.createElement(p.a,null,c.a.createElement(d.a,{xs:6},c.a.createElement("input",{className:"userInput",ref:s,type:"text",placeholder:"Type in assignment here"})),c.a.createElement(d.a,null,c.a.createElement(h.a,{className:"",variant:"primary",onClick:function(e){var t=s.current.value;""!==t&&(l((function(e){return[].concat(Object(r.a)(e),[{id:u()(),name:t,complete:!1}])})),s.current.value=null)}},"Add Assignment To List")),c.a.createElement(d.a,null,c.a.createElement(h.a,{className:"",variant:"danger",onClick:function(){var e=n.filter((function(e){return!e.complete}));l(e)}},"Remove Completed Assignments")))),c.a.createElement(g.a,{fluid:"md",className:"mt-3 mb-3"},c.a.createElement(p.a,null,c.a.createElement(d.a,null,c.a.createElement("div",null,c.a.createElement("label",{className:"text1"},"Assignments you need to complete:"),c.a.createElement("label",{className:"text2"},n.filter((function(e){return!e.complete})).length))))),c.a.createElement(v,{assignments:n,checkAssignment:function(e){var t=Object(r.a)(n),a=t.find((function(t){return t.id===e}));a.complete=!a.complete,l(t)}}))},k=(n(40),n(45));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k.a,{fluid:!0,className:"bg-dark"},c.a.createElement("h1",{className:"ml-3 text3"},"SWE 432 Assignment 7"),c.a.createElement("p",{className:"ml-5 text3"},"Add assignments as needed, check if complete, and remove when finished.")),c.a.createElement(b,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.88ce648f.chunk.js.map