(this["webpackJsonpfood-project"]=this["webpackJsonpfood-project"]||[]).push([[0],{24:function(e,t,c){},34:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(18),s=c.n(r),a=(c(24),c(4)),i=c(2),j=c(0);function o(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("nav",{className:"blue-grey darken-3 nav",children:Object(j.jsxs)("div",{className:"nav-wrapper",children:[Object(j.jsx)(a.b,{to:"/",className:"brand-logo",children:"React Movies"}),Object(j.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down ",children:[Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/contacts",children:"Contacts"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/about",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/PavelMelnik94/food-project",children:"Repo"})})]})]})})})}function l(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("footer",{className:"page-footer   blue-grey darken-4",children:Object(j.jsx)("div",{className:"footer-copyright",children:Object(j.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(j.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/PavelMelnik94/food-project",children:"Repo"})]})})})})}c(34);var b=c(8),u=c(10),d=c.n(u),h=c(13),O="https://www.themealdb.com/api/json/v1/".concat("1","/"),x=function(){var e=Object(h.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"lookup.php?i=").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"categories.php"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(h.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"filter.php?c=").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var f=function(){return Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("div",{className:"indeterminate"})})},v=c(12);function g(e){var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("img",{src:c,alt:t})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsx)("span",{className:"card-title",children:t}),Object(j.jsxs)("p",{children:[n.slice(0,100)," ..."]})]}),Object(j.jsx)("div",{className:"card-action",children:Object(j.jsx)(a.b,{to:"/category/".concat(t),className:"btn",children:"\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"})})]})}function N(e){var t=e.catalog,c=void 0===t?[]:t;return Object(j.jsx)("div",{className:"list",children:c.map((function(e){return Object(j.jsx)(g,Object(v.a)({},e),e.idCategory)}))})}function y(e){var t=e.cb,c=void 0===t?Function.prototype:t,r=Object(n.useState)(""),s=Object(b.a)(r,2),a=s[0],i=s[1],o=function(){c(a)};return Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"input-field col s12",children:[Object(j.jsx)("input",{type:"search",id:"search-field",placeholder:"search",onKeyDown:function(e){"Enter"===e.key&&o()},onChange:function(e){return i(e.target.value)},value:a}),Object(j.jsx)("button",{className:"btn",style:{position:"absolute",top:0,right:0},onClick:o,children:"Search"})]})})}function w(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(b.a)(s,2),o=a[0],l=a[1],u=Object(i.g)(),d=u.pathname,h=u.search,O=Object(i.f)().push;return Object(n.useEffect)((function(){m().then((function(e){r(e.categories),l(h?e.categories.filter((function(e){return e.strCategory.toLowerCase().includes(h.split("=")[1].toLowerCase())})):e.categories)}))}),[h]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(y,{cb:function(e){l(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),O({pathname:d,search:"?search=".concat(e)})}}),c.length?Object(j.jsx)(N,{catalog:o}):Object(j.jsx)(f,{})]})}function k(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"contacts"})})}function C(){return Object(j.jsx)("div",{children:Object(j.jsx)("h3",{children:"about"})})}function M(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Page not found"})})}var F=function(e){var t=e.strMeal,c=e.idMeal,n=e.strMealThumb;return Object(j.jsxs)("div",{className:"card ",children:[Object(j.jsx)("div",{className:"card-image ",children:Object(j.jsx)("img",{src:n,alt:t})}),Object(j.jsx)("div",{className:"card-content ",children:Object(j.jsx)("span",{className:"card-title ",children:t})}),Object(j.jsx)("div",{className:"card-action",children:Object(j.jsx)(a.b,{to:"/meal/".concat(c),className:"btn",children:"\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0435\u0446\u0435\u043f\u0442"})})]})};function S(e){var t=e.meals;return Object(j.jsx)("div",{className:"list",children:t.map((function(e){return Object(j.jsx)(F,Object(v.a)({},e),e.idMeal)}))})}function E(e){var t=Object(n.useState)([]),c=Object(b.a)(t,2),r=c[0],s=c[1],a=Object(i.h)().name,o=Object(i.f)().goBack;return Object(n.useEffect)((function(){return p(a).then((function(e){return s(e.meals)})),function(){console.log("dismount")}}),[a]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{className:"btn",onClick:o,children:"\u043d\u0430\u0437\u0430\u0434"}),r.length?Object(j.jsx)(S,{meals:r}):Object(j.jsx)(f,{})]})}var L=function(e){var t=Object(i.h)().id,c=Object(n.useState)({}),r=Object(b.a)(c,2),s=r[0],a=r[1],o=Object(i.f)().goBack;return Object(n.useEffect)((function(){return x(t).then((function(e){return a(e.meals[0])})),function(){console.log("unmount")}}),[t]),Object(j.jsx)(j.Fragment,{children:s.idMeal?Object(j.jsxs)("div",{className:"recipe",children:[Object(j.jsx)("img",{src:s.strMealThumb,alt:s.strMeal}),Object(j.jsx)("h1",{children:s.strMeal}),Object(j.jsxs)("h6",{children:["\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f: ",s.strCategory]}),s.strArea?Object(j.jsxs)("h6",{children:["\u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435: ",s.strArea]}):null,Object(j.jsxs)("p",{children:["\u0440\u0435\u0446\u0435\u043f\u0442: ",s.strInstructions]}),Object(j.jsxs)("table",{className:"centered",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"\u0438\u043d\u0433\u0440\u0438\u0434\u0438\u0435\u043d\u0442"}),Object(j.jsx)("th",{children:"\u043c\u0435\u0440\u0430"})]})}),Object(j.jsx)("tbody",{children:Object.keys(s).map((function(e){return e.includes("Ingredient")&&s[e]?Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:s[e]}),Object(j.jsx)("td",{children:s["strMeasure".concat(e.slice(13))]})]},e):null}))})]}),s.strYoutube?Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h5",{style:{margin:"2rem 0 1.5rem"},children:"\u0432\u0438\u0434\u0435\u043e \u0440\u0435\u0446\u0435\u043f\u0442"}),Object(j.jsx)("iframe",{title:t,src:"https://www.youtube.com/embed/".concat(s.strYoutube.slice(-11)),allowFullScreen:!0})]}):null,Object(j.jsx)("button",{className:"btn",onClick:o,children:"\u043d\u0430\u0437\u0430\u0434"})]}):Object(j.jsx)(f,{})})};var T=function(){return Object(j.jsx)("div",{className:"app",children:Object(j.jsxs)(a.a,{basename:"/food-project",children:[Object(j.jsx)(o,{}),Object(j.jsx)("main",{className:"container content",children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",children:Object(j.jsx)(w,{})}),Object(j.jsx)(i.a,{path:"/about",component:C}),Object(j.jsx)(i.a,{path:"/contacts",component:k}),Object(j.jsx)(i.a,{path:"/category/:name",component:E}),Object(j.jsx)(i.a,{path:"/meal/:id",component:L}),Object(j.jsx)(i.a,{component:M})]})}),Object(j.jsx)(l,{})]})})};s.a.render(Object(j.jsx)(T,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.05f19da5.chunk.js.map