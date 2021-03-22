(function(e){function t(t){for(var o,i,s=t[0],u=t[1],c=t[2],l=0,p=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"84447724"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var c=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,n[1](c)}r[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._m(0),n("div",{staticClass:"budget_container"},[n("h1",{staticClass:"budget",style:e.balance<0?"color:  red":""},[e._v(" "+e._s(e.balance)+" ")])]),n("BudgetForm",{on:{submitForm:e.submitForm}}),n("div",{staticClass:"budget_calculations"},[n("div",{staticClass:"income"},[n("h2",[e._v("Income")]),e.incomes.length>0?n("ul",{staticClass:"income_list"},e._l(e.incomes,(function(t,o){return n("li",{key:o},[n("div",[n("span",[e._v(" "+e._s(t.description))]),n("span",{staticClass:"amount",staticStyle:{background:"green"}},[e._v(e._s(t.amount))])]),n("span",{staticClass:"delete_btn",on:{click:function(n){return e.deleteBudget(t.id)}}},[e._v("×")])])})),0):n("div",[n("h3",{staticClass:"budget_warning"},[e._v("No income added yet.")])])]),n("div",{staticClass:"expenses"},[n("h2",[e._v("Expenses")]),e.expenses.length>0?n("ul",{staticClass:"expenses_list"},e._l(e.expenses,(function(t,o){return n("li",{key:o},[n("div",[n("span",[e._v(" "+e._s(t.description))]),n("span",{staticClass:"amount",staticStyle:{background:"red"}},[e._v(e._s(t.amount))])]),n("span",{staticClass:"delete_btn",on:{click:function(n){return e.deleteBudget(t.id)}}},[e._v("×")])])})),0):n("div",[n("h3",{staticClass:"budget_warning"},[e._v("No expenses added yet.")])])])])],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"headline"},[n("h2",[e._v("Budget Calculator")])])}],i=n("5530"),s=(n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{staticClass:"input_boxes",on:{submit:function(t){return t.preventDefault(),e.submitForm(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.budget.amount,expression:"budget.amount"}],attrs:{required:"",type:"number",placeholder:"Cost"},domProps:{value:e.budget.amount},on:{input:function(t){t.target.composing||e.$set(e.budget,"amount",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.budget.description,expression:"budget.description"}],attrs:{required:"",type:"text",placeholder:"Description"},domProps:{value:e.budget.description},on:{input:function(t){t.target.composing||e.$set(e.budget,"description",t.target.value)}}}),n("button",{attrs:{type:"submit"}},[e._v("Add")])])])}),u=[],c={data:function(){return{budget:{amount:0,description:""}}},methods:{submitForm:function(){this.$emit("submitForm",this.budget),this.budget={amount:0,description:""}}}},l=c,d=n("2877"),p=Object(d["a"])(l,s,u,!1,null,"75a4e604",null),m=p.exports,f=n("260b"),b=(n("e71f"),{apiKey:"AIzaSyB7Tmwtk7BEarMcqjdTHgWuVZ-S61Hstm8",authDomain:"quizzler-c9921.firebaseapp.com",databaseURL:"https://quizzler-c9921.firebaseio.com",projectId:"quizzler-c9921",storageBucket:"quizzler-c9921.appspot.com",messagingSenderId:"782469156138",appId:"1:782469156138:web:c0a07237e4264aba906253",measurementId:"G-VVP1MD63JS"});f["a"].initializeApp(b);var v=f["a"].firestore(),g={components:{BudgetForm:m},data:function(){return{balance:0,incomes:[],expenses:[]}},methods:{submitForm:function(e){var t=parseInt(t);t<0?v.collection("budgets").add(Object(i["a"])(Object(i["a"])({},e),{},{type:"expense"})):v.collection("budgets").add(Object(i["a"])(Object(i["a"])({},e),{},{type:"income"}))},getFromFirebase:function(){var e=this;v.collection("budgets").onSnapshot((function(t){e.expenses=[],e.incomes=[],e.balance=0,t.forEach((function(t){var n=t.data(),o=parseInt(n.amount);o<0?e.expenses.push(Object(i["a"])({id:t.id},n)):e.incomes.push(Object(i["a"])({id:t.id},n)),e.balance+=o}))}))},deleteBudget:function(e){v.collection("budgets").doc(e).delete()}},created:function(){this.getFromFirebase()}},h=g,_=(n("5c0b"),Object(d["a"])(h,r,a,!1,null,null,null)),y=_.exports,x=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],C={name:"Home",components:{}},O=C,k=Object(d["a"])(O,j,w,!1,null,null,null),F=k.exports;o["a"].use(x["a"]);var P=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],S=new x["a"]({mode:"history",base:"/",routes:P}),E=S,z=n("f309");o["a"].use(z["a"]);var B=new z["a"]({});o["a"].config.productionTip=!1,new o["a"]({router:E,vuetify:B,render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});