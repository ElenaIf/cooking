(this["webpackJsonpcooking-app"]=this["webpackJsonpcooking-app"]||[]).push([[0],{100:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(31),r=c.n(a),i=(c(71),c(72),c(73),c(17)),s=c(18),j=c(21),o=c(20),l=c(23),d=c(1),u=function(e){Object(j.a)(c,e);var t=Object(o.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(d.jsxs)(l.a,{children:[Object(d.jsx)(l.a.Item,{children:Object(d.jsx)(l.a.Link,{href:"/cooking/#/recipes",children:"Recipes"})}),Object(d.jsx)(l.a.Item,{children:Object(d.jsx)(l.a.Link,{href:"/cooking/#/about",children:"About"})}),Object(d.jsx)(l.a.Item,{children:Object(d.jsx)(l.a.Link,{href:"/cooking/#/new",children:"Add new"})})]})}}]),c}(n.Component),b=c(50),h=function(e){Object(j.a)(c,e);var t=Object(o.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(d.jsx)("header",{children:Object(d.jsxs)(b.a,{bg:"light",expand:"lg",children:[Object(d.jsx)(b.a.Brand,{href:"/recipes",children:"PlanCake"}),Object(d.jsx)(u,{})]})})}}]),c}(n.Component),O=c(14),p=c(6),x=c(25),m=function(){return Object(d.jsx)(x.a,{className:"recipeFluidContainer",children:Object(d.jsxs)("section",{className:"recipeInfo",children:[Object(d.jsx)("h1",{children:"Hello!"}),Object(d.jsx)("p",{children:"My name is Elena, I am a Web Developer and I want to welcome you on my website with recipes!"}),Object(d.jsx)("p",{children:"This website is made with React"}),Object(d.jsx)("p",{children:"For styling I used Bootstrap and CSS"}),Object(d.jsx)("p",{children:"Backend is made with PHP, using Symfony framework"}),Object(d.jsxs)("p",{children:["Repository with the original code can be found here:"," ",Object(d.jsx)("a",{href:"https://github.com/ElenaIf/cooking",children:"https://github.com/ElenaIf/cooking"})]})]})})},f=function(e){Object(j.a)(c,e);var t=Object(o.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(d.jsx)("section",{children:Object(d.jsx)("h1",{children:"Hello from Home!"})})}}]),c}(n.Component),g=c(24),v=c(37),y=function(e){var t=e.name,c=e.photo,n=e.link,a=Object(p.h)().url;return Object(d.jsx)("article",{className:"recipeCard",children:Object(d.jsxs)(v.a,{style:{width:"18rem"},children:[Object(d.jsx)(v.a.Img,{variant:"top",src:c,alt:t,className:"cardImage"}),Object(d.jsxs)(v.a.Body,{children:[Object(d.jsx)(v.a.Title,{children:t}),Object(d.jsx)(g.b,{to:"".concat(a,"/").concat(n),children:"Read more"})]})]})},n)},k=c(28),C=c.n(k),I=c(64),N=c(34),w=function(){var e=Object(n.useState)(),t=Object(O.a)(e,2),c=t[0],a=t[1],r=Object(p.g)().id,i=Object(p.f)();Object(n.useEffect)((function(){c||C.a.get("http://localhost:3001/recipes/"+r).then((function(e){a(e.data)}))}));var s=void 0;return c||(s=Object(d.jsx)("h2",{children:"Loading..."})),c&&(s=Object(d.jsx)("article",{children:Object(d.jsxs)("div",{children:[Object(d.jsx)(I.a,{src:c.photo,alt:c.name,fluid:!0,className:"singleRecipeImage"}),Object(d.jsxs)(x.a,{fluid:!0,className:"recipeFluidContainer",children:[Object(d.jsxs)("h1",{className:"recipeName",children:[" ",c.name]}),Object(d.jsxs)("p",{children:["Difficulty: ",c.difficulty]}),Object(d.jsxs)("div",{className:"recipeInfo",children:[Object(d.jsx)("p",{className:"recipeInstructions",children:c.instructions}),Object(d.jsx)("h3",{className:"recipeIngredients",children:"Ingredients"}),Object(d.jsx)("ul",{children:c.ingredients.map((function(e){return Object(d.jsx)("li",{children:e.name},e.id)}))}),Object(d.jsx)(N.a,{variant:"outline-dark",className:"returnButton",onClick:function(){i.goBack()},children:"Back to recipes"})]})]})]},c.id)})),Object(d.jsx)("div",{children:s})},B=function(e){var t=e.search;return Object(d.jsx)("div",{className:"searchBox",children:Object(d.jsx)("input",{type:"text",onChange:t,placeholder:"Search recipe here"})})},S=function(e){var t=e.recipes,c=Object(p.h)().url,a=Object(n.useState)(""),r=Object(O.a)(a,2),i=r[0],s=r[1],j=t.filter((function(e){return e.name.toLocaleLowerCase().includes(i.toLocaleLowerCase())}));return Object(d.jsxs)(p.c,{children:[Object(d.jsxs)(p.a,{path:c,exact:!0,children:[Object(d.jsx)(x.a,{fluid:!0,children:Object(d.jsx)(B,{search:function(e){s(e.target.value)}})}),Object(d.jsx)(x.a,{fluid:!0,children:Object(d.jsx)("section",{className:"recipesList",children:j.map((function(e){return Object(d.jsx)(y,{name:e.name,photo:e.photo,instructions:e.instructions,ingredients:e.ingredients,link:e.id},e.id)}))})})]}),Object(d.jsx)(p.a,{path:"".concat(c,"/:id"),children:Object(d.jsx)(w,{})})]})},E=c(51),L=c(42),A=c(36),G=c(66),F=function(e){var t=e.closeAlert;return Object(d.jsx)(G.a,{variant:"success",onClose:t,dismissible:!0,children:"Thank you, your recipe was added!"})},H=c(10),R=c(65),M=c(35),D=(c(99),[{id:1,label:"Choose difficulty level",value:"Medium"},{id:2,label:"Easy",value:"Easy"},{id:3,label:"Medium",value:"Medium"},{id:4,label:"Hard",value:"Hard"}]),P=function(){var e=Object(n.useState)({name:"",photo:"",instructions:"",difficulty:"",ingredients:[]}),t=Object(O.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),i=Object(O.a)(r,2),s=i[0],j=i[1],o=Object(n.useState)([{id:1,name:"",amount:""}]),l=Object(O.a)(o,2),u=l[0],b=l[1],h=function(e){a(Object(A.a)(Object(A.a)({},c),{},Object(L.a)({},e.target.name,e.target.value)))},p=function(e,t){var n=e.target,r=n.name,i=n.value,s=Object(E.a)(u);s[t][r]=i,b(s),a(Object(A.a)(Object(A.a)({},c),{},{ingredients:u}))};return Object(d.jsxs)(d.Fragment,{children:[!0===s&&Object(d.jsx)(F,{closeAlert:function(){return j(!1)}}),Object(d.jsxs)(H.a,{onSubmit:function(e){e.preventDefault(),C.a.post("https://secret-shore-65901.herokuapp.com/recipes/add",c),j(!0),document.getElementById("recipeForm").reset()},id:"recipeForm",children:[Object(d.jsx)("h3",{children:"Add a new recipe"}),Object(d.jsx)(H.a.Group,{children:Object(d.jsx)(H.a.Control,{className:"formInput",type:"text",name:"name",id:"name",placeholder:"Recipe name",onChange:h})}),Object(d.jsx)(H.a.Group,{children:Object(d.jsx)(H.a.Control,{className:"formInput","aria-label":"photo",type:"text",name:"photo",id:"photo",placeholder:"Link to photo",onChange:h})}),Object(d.jsx)(H.a.Group,{children:Object(d.jsx)(H.a.Control,{className:"formInput",as:"select",name:"difficulty",id:"difficulty",onChange:h,children:D.map((function(e){return Object(d.jsx)("option",{value:e.value,children:e.label},e.id)}))})}),u.map((function(e,t){return Object(d.jsx)("div",{children:Object(d.jsx)(H.a.Group,{children:Object(d.jsxs)(R.a,{children:[Object(d.jsx)(M.a,{children:Object(d.jsx)(H.a.Control,{className:"formInput",type:"text",name:"amount",placeholder:"Amount",onChange:function(e){return p(e,t)}})}),Object(d.jsx)(M.a,{children:Object(d.jsx)(H.a.Control,{className:"formInput",type:"text",name:"name",placeholder:"Ingredient Name",onChange:function(e){return p(e,t)}})})]})})},t)})),Object(d.jsx)(H.a.Group,{children:Object(d.jsx)(N.a,{id:"addMoreButton",variant:"outline-secondary",onClick:function(e,t){e.preventDefault();var c={id:u.length+1,name:"",amount:""};b((function(e){return[].concat(Object(E.a)(e),[c])}))},children:"Add more"})}),Object(d.jsx)(H.a.Group,{children:Object(d.jsx)(H.a.Control,{className:"formInput",as:"textarea",name:"instructions",id:"instructions",rows:5,placeholder:"Instructions",onChange:h})}),Object(d.jsx)(H.a.Group,{children:Object(d.jsx)(N.a,{id:"submitButton",type:"submit",variant:"secondary",size:"lg",block:!0,children:"Send"})})]})]})},T=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){C.a.get("https://secret-shore-65901.herokuapp.com/recipes/all").then((function(e){return a(e.data)}))}),[]),Object(d.jsx)("main",{children:Object(d.jsxs)(p.c,{children:[Object(d.jsx)(p.a,{path:"/about",children:Object(d.jsx)(m,{})}),Object(d.jsx)(p.a,{path:"/new",children:Object(d.jsx)(P,{})}),Object(d.jsx)(p.a,{exact:!0,path:"/",children:Object(d.jsx)(f,{})}),Object(d.jsx)(p.a,{path:"/recipes",children:Object(d.jsx)(S,{recipes:c})})]})})},J=function(e){Object(j.a)(c,e);var t=Object(o.a)(c);function c(){return Object(i.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(d.jsx)("footer",{children:"\xa9 Elena Ivankina"})}}]),c}(n.Component);var z=function(){return Object(d.jsx)(g.a,{className:"justify-content-md-center",children:Object(d.jsxs)(x.a,{fluid:!0,children:[Object(d.jsx)(R.a,{children:Object(d.jsx)(M.a,{children:Object(d.jsx)(h,{})})}),Object(d.jsxs)(R.a,{children:[Object(d.jsx)(M.a,{}),Object(d.jsx)(M.a,{md:"auto",children:Object(d.jsx)(T,{})}),Object(d.jsx)(M.a,{})]}),Object(d.jsx)(R.a,{children:Object(d.jsx)(J,{})})]})})};r.a.render(Object(d.jsx)(z,{}),document.getElementById("root"))},72:function(e,t,c){},73:function(e,t,c){},99:function(e,t,c){}},[[100,1,2]]]);
//# sourceMappingURL=main.4d0fbdd6.chunk.js.map