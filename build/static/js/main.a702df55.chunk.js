(this.webpackJsonpexercise2=this.webpackJsonpexercise2||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),o=t.n(c),u=t(14),l=t(2),i=function(e){return r.a.createElement("div",null,r.a.createElement("p",null," ",e.name," "),r.a.createElement("input",{className:"search",value:e.value,onChange:e.onChange}))},m=function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.namevalue,onChange:e.onChangeName})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.numbervalue,onChange:e.onChangeNumber})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},s=t(3),f=t.n(s),d=function(e){return r.a.createElement("div",null,e.personsToShow.map((function(n,t){return r.a.createElement("div",{key:n.id},"  ",n.name,"  ",n.number,r.a.createElement("button",{onClick:function(){return function(n){var t=e.personsToShow.filter((function(e){return e.id===n}));if(console.log(t),window.confirm("delete ".concat(t[0].name," from contacts ?"))){console.log("delete record with id ".concat(n));var a="/api/persons/".concat(n);f.a.delete(a).then((function(t){e.func(e.personsToShow.filter((function(e){return e.id!==n})))})).catch((function(n){e.err("".concat(t[0].name," has already been removed from server!!")),setTimeout((function(){e.err(null)}),5e3)}))}}(n.id)}},"delete"))})))},h=function(){return f.a.get("/api/persons")},b=function(e){return f.a.post("/api/persons",e)},v=(t(37),function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),s=Object(l.a)(o,2),v=s[0],p=s[1],E=Object(a.useState)(""),g=Object(l.a)(E,2),w=g[0],j=g[1],O=Object(a.useState)(""),S=Object(l.a)(O,2),C=S[0],N=S[1],T=Object(a.useState)(t),k=Object(l.a)(T,2),y=k[0],x=k[1],J=Object(a.useState)(!0),A=Object(l.a)(J,2),B=A[0],D=A[1],I=Object(a.useState)(null),L=Object(l.a)(I,2),P=L[0],q=L[1];Object(a.useEffect)((function(){h().then((function(e){c(e.data)}))}),[]);var z=function(e){return null===e.message?null:(console.log(e.message),r.a.createElement("div",{className:"error"},e.message))};return r.a.createElement("div",{className:"container"},r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r.a.createElement("h1",null,"Phonebook"),r.a.createElement(z,{message:P}),r.a.createElement(i,{name:"filter shown with",value:C,onChange:function(e){var n=e.target.value;N(n),D(!1);var a=t.filter((function(e){return e.name.includes(n)}));x(a)}}),r.a.createElement("h3",null,"Add a new Name "),r.a.createElement(m,{onSubmit:function(e){e.preventDefault();var n={name:v.trim(),number:w.trim()},a=t.find((function(e){return e.name.toLowerCase()===n.name}));if(console.log(a),a){if(!0===window.confirm("".concat(a.name.trim()," is already added to the phonebook,replace old number with the new one ?"))){var r=a.id,o="/api/persons/".concat(r),l=Object(u.a)({},a,{number:w});f.a.put(o,l).then((function(e){c(t.map((function(n){return n.id!==r?n:e.data})))})),q("Changed ".concat(v,"'s  phone number to ").concat(w)),setTimeout((function(){q(null)}),5e3),p(""),j("")}}else b(n).then((function(e){c(t.concat(e.data))})).catch((function(e){console.log(e.message),q(e.message)})),setTimeout((function(){q(null)}),5e3),p(""),j("")},namevalue:v,numbervalue:w,onChangeName:function(e){p(e.target.value)},onChangeNumber:function(e){j(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{func:c,err:q,personsToShow:B?t:y}))});o.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a702df55.chunk.js.map