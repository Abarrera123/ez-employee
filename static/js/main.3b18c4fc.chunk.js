(this["webpackJsonpez-employee"]=this["webpackJsonpez-employee"]||[]).push([[0],{25:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(12),s=n.n(r),l=n(17),o=n(13),i=n(14),h=n(15),u=n(19),m=n(18),j=n(0);var d=function(e){return Object(j.jsx)("form",{children:Object(j.jsxs)("div",{className:"form-group",style:{display:"flex"},children:[Object(j.jsx)("label",{htmlFor:"search"}),Object(j.jsx)("input",{onChange:e.handleInputchange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search Employee",id:"search"}),Object(j.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary",children:"Search"}),Object(j.jsx)("button",{onClick:e.refreshPage,className:"btn btn-primary ml-1",children:"Reset"})]})})};n(25);var b=function(e){return Object(j.jsx)("div",{className:"wrapper",children:e.children})};var p=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(j.jsx)("div",{className:t,children:e.children})},f=n(16),O=n.n(f),y={getEmployees:function(){return O.a.get("https://randomuser.me/api/?results=50&nat=us")}},x=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={employees:[],search:" "},e.searchEmployee=function(t){console.log("Search",t);var n=e.state.employees.filter((function(e){return-1!==Object.values(e).join("").toLocaleLowerCase.indexOf(t.toLocaleLowerCase())}));e.setState({employees:n})},e.handleInputChange=function(t){e.setState(Object(o.a)({},t.target.name,t.target.value)),console.log("Handle",e.state.search)},e.handleFormSubmit=function(t){t.preventDefault(),console.log("Button Clicked",e.state.search,t),e.searchEmployee(e.state.search)},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;y.search().then((function(t){console.log(t),e.setState({employees:t.data.results.map((function(e,t){return{firstName:e.name.first,lastName:e.name.last,picture:e.picture.large,email:e.email,phone:e.phone,city:e.location.city,key:1}}))})})).catch((function(e){return console.log(e)}))}},{key:"refreshPage",value:function(){window.location.reload(!1)}},{key:"render",value:function(){return Object(j.jsx)(b,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)(p,{size:"md-4",children:[Object(j.jsx)("h2",{children:"EZ-Employee"}),Object(j.jsx)(d,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit})]})}),Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)(p,{size:"md-12",children:[Object(j.jsx)("table",{className:"table",children:Object(j.jsxs)("thread",{children:[Object(j.jsx)("tr",{children:"Photo"}),Object(j.jsx)("tr",{children:"First Name"}),Object(j.jsx)("tr",{children:"Last Name"}),Object(j.jsx)("tr",{children:"Email"}),Object(j.jsx)("tr",{children:"Phone"}),Object(j.jsx)("tr",{children:"city"})]})}),Object(l.a)(this.state.employees).map((function(e){e.picture,e.firstName,e.lastName,e.email,e.phone,e.city,e.key}))]})})]})})}}]),n}(c.a.Component);s.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.3b18c4fc.chunk.js.map