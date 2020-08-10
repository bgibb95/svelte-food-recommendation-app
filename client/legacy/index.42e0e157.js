import{_ as e,a as n,b as a,c as t,i as c,s as o,d as r,S as s,f as l,g as i,h as u,j as d,k as f,l as h,m as g,H as v,o as p,p as m,I as _,t as E,J as b,K as y,w as k,n as D,L as x,M as T,N as L}from"./index.d2f48ed9.js";import{_ as $,a as F}from"./asyncToGenerator.82c908b5.js";function w(e,n,a){var t=Object.create(e);return t.food=n[a],t}function A(e,n,a){var t=Object.create(e);return t.category=n[a],t}function C(e){var n,a,t,c,o;return{c:function(){n=l("form"),a=l("a"),t=i(),c=l("input"),this.h()},l:function(e){n=u(e,"FORM",{class:!0},!1);var o=d(n);a=u(o,"A",{href:!0,"uk-search-icon":!0},!1),d(a).forEach(f),t=h(o,"\n        "),c=u(o,"INPUT",{class:!0,type:!0,placeholder:!0},!1),d(c).forEach(f),o.forEach(f),this.h()},h:function(){g(a,"href",""),g(a,"uk-search-icon",""),g(c,"class","uk-search-input"),g(c,"type","search"),g(c,"placeholder","Search..."),g(n,"class","uk-search uk-search-default"),o=[v(c,"input",e.input_input_handler),v(c,"keydown",e.updateFilters)]},m:function(o,r){p(o,n,r),m(n,a),m(n,t),m(n,c),c.value=e.filterValue},p:function(e,n){e.filterValue&&(c.value=n.filterValue)},d:function(e){e&&f(n),_(o)}}}function N(e){for(var n,a,t,c,o,r,s,k,D,x,L,$,F=e.categories,w=[],C=0;C<F.length;C+=1)w[C]=I(A(e,F,C));return{c:function(){n=l("div"),a=l("h5"),t=E("Category"),c=i(),o=l("div"),r=l("select");for(var e=0;e<w.length;e+=1)w[e].c();s=i(),k=l("button"),D=l("span"),x=i(),L=l("span"),this.h()},l:function(e){n=u(e,"DIV",{class:!0},!1);var l=d(n);a=u(l,"H5",{},!1);var i=d(a);t=h(i,"Category"),i.forEach(f),c=h(l,"\n        "),o=u(l,"DIV",{"uk-form-custom":!0},!1);var g=d(o);r=u(g,"SELECT",{},!1);for(var v=d(r),p=0;p<w.length;p+=1)w[p].l(v);v.forEach(f),s=h(g,"\n          "),k=u(g,"BUTTON",{class:!0,type:!0,tabindex:!0},!1);var m=d(k);D=u(m,"SPAN",{},!1),d(D).forEach(f),x=h(m,"\n            "),L=u(m,"SPAN",{"uk-icon":!0},!1),d(L).forEach(f),m.forEach(f),g.forEach(f),l.forEach(f),this.h()},h:function(){void 0===e.selectedCategory&&T(function(){return e.select_change_handler.call(r)}),g(L,"uk-icon","icon: chevron-down"),g(k,"class","uk-button uk-button-default"),g(k,"type","button"),g(k,"tabindex","-1"),g(o,"uk-form-custom","target: > * > span:first-child"),g(n,"class","uk-margin"),$=[v(r,"change",e.select_change_handler),v(r,"change",e.updateFilters)]},m:function(l,i){p(l,n,i),m(n,a),m(a,t),m(n,c),m(n,o),m(o,r);for(var u=0;u<w.length;u+=1)w[u].m(r,null);b(r,e.selectedCategory),m(o,s),m(o,k),m(k,D),m(k,x),m(k,L)},p:function(e,n){if(e.categories){F=n.categories;for(var a=0;a<F.length;a+=1){var t=A(n,F,a);w[a]?w[a].p(e,t):(w[a]=I(t),w[a].c(),w[a].m(r,null))}for(;a<w.length;a+=1)w[a].d(1);w.length=F.length}e.selectedCategory&&b(r,n.selectedCategory)},d:function(e){e&&f(n),y(w,e),_($)}}}function I(e){var n,a,t=e.category+"";return{c:function(){n=l("option"),a=E(t),this.h()},l:function(e){n=u(e,"OPTION",{value:!0},!1);var c=d(n);a=h(c,t),c.forEach(f),this.h()},h:function(){n.__value=e.category,n.value=n.__value},m:function(e,t){p(e,n,t),m(n,a)},p:function(e,a){n.value=n.__value},d:function(e){e&&f(n)}}}function O(e){var n,a,t,c,o,r,s,b,y,k,D,x,T,L,$,F,w;return{c:function(){n=l("div"),a=l("label"),t=l("input"),c=E("\n          Recommended"),o=i(),r=l("br"),s=i(),b=l("label"),y=l("input"),k=E("\n          Not Recommended"),D=i(),x=l("br"),T=i(),L=l("label"),$=l("input"),F=E("\n          All"),this.h()},l:function(e){n=u(e,"DIV",{class:!0},!1);var l=d(n);a=u(l,"LABEL",{class:!0},!1);var i=d(a);t=u(i,"INPUT",{class:!0,type:!0,name:!0,checked:!0,value:!0},!1),d(t).forEach(f),c=h(i,"\n          Recommended"),i.forEach(f),o=h(l,"\n        "),r=u(l,"BR",{},!1),d(r).forEach(f),s=h(l,"\n        "),b=u(l,"LABEL",{class:!0},!1);var g=d(b);y=u(g,"INPUT",{class:!0,type:!0,name:!0,value:!0},!1),d(y).forEach(f),k=h(g,"\n          Not Recommended"),g.forEach(f),D=h(l,"\n        "),x=u(l,"BR",{},!1),d(x).forEach(f),T=h(l,"\n        "),L=u(l,"LABEL",{class:!0},!1);var v=d(L);$=u(v,"INPUT",{class:!0,type:!0,name:!0,value:!0},!1),d($).forEach(f),F=h(v,"\n          All"),v.forEach(f),l.forEach(f),this.h()},h:function(){e.$$binding_groups[0].push(t),g(t,"class","uk-radio"),g(t,"type","radio"),g(t,"name","radio2"),t.checked=!0,t.__value=1,t.value=t.__value,g(a,"class","svelte-18xumyb"),e.$$binding_groups[0].push(y),g(y,"class","uk-radio"),g(y,"type","radio"),g(y,"name","radio2"),y.__value=2,y.value=y.__value,g(b,"class","svelte-18xumyb"),e.$$binding_groups[0].push($),g($,"class","uk-radio"),g($,"type","radio"),g($,"name","radio2"),$.__value=3,$.value=$.__value,g(L,"class","svelte-18xumyb"),g(n,"class","uk-margin uk-grid-small uk-child-width-auto "),w=[v(t,"change",e.input0_change_handler),v(t,"change",e.updateFilters),v(y,"change",e.input1_change_handler),v(y,"change",e.updateFilters),v($,"change",e.input2_change_handler),v($,"change",e.updateFilters)]},m:function(l,i){p(l,n,i),m(n,a),m(a,t),t.checked=t.__value===e.selected,m(a,c),m(n,o),m(n,r),m(n,s),m(n,b),m(b,y),y.checked=y.__value===e.selected,m(b,k),m(n,D),m(n,x),m(n,T),m(n,L),m(L,$),$.checked=$.__value===e.selected,m(L,F)},p:function(e,n){e.selected&&(t.checked=t.__value===n.selected),e.selected&&(y.checked=y.__value===n.selected),e.selected&&($.checked=$.__value===n.selected)},d:function(a){a&&f(n),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(t),1),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(y),1),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf($),1),_(w)}}}function P(e){var n;return{c:function(){n=l("div"),this.h()},l:function(e){n=u(e,"DIV",{"uk-spinner":!0},!1),d(n).forEach(f),this.h()},h:function(){g(n,"uk-spinner","ratio: 2")},m:function(e,a){p(e,n,a)},d:function(e){e&&f(n)}}}function V(e){var n,a,t,c,o,r,s,g,v,_,b;return{c:function(){n=l("h3"),a=l("b"),t=E("Oh no!"),c=i(),o=l("h5"),r=E("Something went wrong. Please try again later."),s=i(),g=l("p"),v=E("Error details:\n        "),_=l("b"),b=E(e.errorMessage)},l:function(l){n=u(l,"H3",{},!1);var i=d(n);a=u(i,"B",{},!1);var p=d(a);t=h(p,"Oh no!"),p.forEach(f),i.forEach(f),c=h(l,"\n      "),o=u(l,"H5",{},!1);var m=d(o);r=h(m,"Something went wrong. Please try again later."),m.forEach(f),s=h(l,"\n      "),g=u(l,"P",{},!1);var E=d(g);v=h(E,"Error details:\n        "),_=u(E,"B",{},!1);var y=d(_);b=h(y,e.errorMessage),y.forEach(f),E.forEach(f)},m:function(e,l){p(e,n,l),m(n,a),m(a,t),p(e,c,l),p(e,o,l),m(o,r),p(e,s,l),p(e,g,l),m(g,v),m(g,_),m(_,b)},p:function(e,n){e.errorMessage&&k(b,n.errorMessage)},d:function(e){e&&(f(n),f(c),f(o),f(s),f(g))}}}function B(e){for(var n,a,t,c,o,r,s,v,_,b,k,D,x,T,L,$,F,A=e.filteredFoodData,C=[],N=0;N<A.length;N+=1)C[N]=H(w(e,A,N));return{c:function(){n=l("div"),a=l("table"),t=l("thead"),c=l("tr"),o=l("th"),r=E("Name"),s=i(),v=l("th"),_=E("Safe"),b=i(),k=l("th"),D=E("Category"),x=i(),T=l("th"),L=E("Comment"),$=i(),F=l("tbody");for(var e=0;e<C.length;e+=1)C[e].c();this.h()},l:function(e){n=u(e,"DIV",{class:!0},!1);var l=d(n);a=u(l,"TABLE",{class:!0},!1);var i=d(a);t=u(i,"THEAD",{},!1);var g=d(t);c=u(g,"TR",{class:!0},!1);var p=d(c);o=u(p,"TH",{class:!0},!1);var m=d(o);r=h(m,"Name"),m.forEach(f),s=h(p,"\n            "),v=u(p,"TH",{class:!0},!1);var E=d(v);_=h(E,"Safe"),E.forEach(f),b=h(p,"\n            "),k=u(p,"TH",{class:!0},!1);var y=d(k);D=h(y,"Category"),y.forEach(f),x=h(p,"\n            "),T=u(p,"TH",{class:!0},!1);var w=d(T);L=h(w,"Comment"),w.forEach(f),p.forEach(f),g.forEach(f),$=h(i,"\n        "),F=u(i,"TBODY",{},!1);for(var A=d(F),N=0;N<C.length;N+=1)C[N].l(A);A.forEach(f),i.forEach(f),l.forEach(f),this.h()},h:function(){g(o,"class","svelte-18xumyb"),g(v,"class","svelte-18xumyb"),g(k,"class","svelte-18xumyb"),g(T,"class","svelte-18xumyb"),g(c,"class","svelte-18xumyb"),g(a,"class","uk-table uk-table-divider svelte-18xumyb"),g(n,"class","controls-container svelte-18xumyb")},m:function(e,l){p(e,n,l),m(n,a),m(a,t),m(t,c),m(c,o),m(o,r),m(c,s),m(c,v),m(v,_),m(c,b),m(c,k),m(k,D),m(c,x),m(c,T),m(T,L),m(a,$),m(a,F);for(var i=0;i<C.length;i+=1)C[i].m(F,null)},p:function(e,n){if(e.filteredFoodData){A=n.filteredFoodData;for(var a=0;a<A.length;a+=1){var t=w(n,A,a);C[a]?C[a].p(e,t):(C[a]=H(t),C[a].c(),C[a].m(F,null))}for(;a<C.length;a+=1)C[a].d(1);C.length=A.length}},d:function(e){e&&f(n),y(C,e)}}}function M(e){var n;return{c:function(){n=l("span"),this.h()},l:function(e){n=u(e,"SPAN",{class:!0,"uk-icon":!0},!1),d(n).forEach(f),this.h()},h:function(){g(n,"class","uk-margin-small-right no-icon"),g(n,"uk-icon","close")},m:function(e,a){p(e,n,a)},d:function(e){e&&f(n)}}}function S(e){var n;return{c:function(){n=l("span"),this.h()},l:function(e){n=u(e,"SPAN",{class:!0,"uk-icon":!0},!1),d(n).forEach(f),this.h()},h:function(){g(n,"class","uk-margin-small-right yes-icon"),g(n,"uk-icon","check")},m:function(e,a){p(e,n,a)},d:function(e){e&&f(n)}}}function H(e){var n,a,t,c,o,r,s,v,_,b,y,D,x,T=e.food.name+"",L=e.food.category+"",$=e.food.comments+"";function F(e){return!0===e.food.recommended?S:!1===e.food.recommended?M:void 0}var w=F(e),A=w&&w(e);return{c:function(){n=l("tr"),a=l("td"),t=l("b"),c=E(T),o=i(),r=l("td"),A&&A.c(),s=i(),v=l("td"),_=E(L),b=i(),y=l("td"),D=E($),x=i(),this.h()},l:function(e){n=u(e,"TR",{class:!0},!1);var l=d(n);a=u(l,"TD",{class:!0},!1);var i=d(a);t=u(i,"B",{},!1);var g=d(t);c=h(g,T),g.forEach(f),i.forEach(f),o=h(l,"\n              "),r=u(l,"TD",{class:!0},!1);var p=d(r);A&&A.l(p),p.forEach(f),s=h(l,"\n              "),v=u(l,"TD",{class:!0},!1);var m=d(v);_=h(m,L),m.forEach(f),b=h(l,"\n              "),y=u(l,"TD",{class:!0},!1);var E=d(y);D=h(E,$),E.forEach(f),x=h(l,"\n            "),l.forEach(f),this.h()},h:function(){g(a,"class","reduced-padding svelte-18xumyb"),g(r,"class","reduced-padding svelte-18xumyb"),g(v,"class","reduced-padding svelte-18xumyb"),g(y,"class","reduced-padding svelte-18xumyb"),g(n,"class","svelte-18xumyb")},m:function(e,l){p(e,n,l),m(n,a),m(a,t),m(t,c),m(n,o),m(n,r),A&&A.m(r,null),m(n,s),m(n,v),m(v,_),m(n,b),m(n,y),m(y,D),m(n,x)},p:function(e,n){e.filteredFoodData&&T!==(T=n.food.name+"")&&k(c,T),w!==(w=F(n))&&(A&&A.d(1),(A=w&&w(n))&&(A.c(),A.m(r,null))),e.filteredFoodData&&L!==(L=n.food.category+"")&&k(_,L),e.filteredFoodData&&$!==($=n.food.comments+"")&&k(D,$)},d:function(e){e&&f(n),A&&A.d()}}}function R(e){var n,a,t,c,o,r,s,v,_=e.foodData.length>0&&C(e),E=e.categories.length>1&&N(e),b=e.foodData.length>0&&O(e),y=e.isLoading&&P(),k=!e.isLoading&&!e.foodData.length>0&&e.errorMessage&&V(e),x=e.foodData.length>0&&B(e);return{c:function(){n=i(),a=l("div"),t=l("div"),_&&_.c(),c=i(),E&&E.c(),o=i(),b&&b.c(),r=i(),y&&y.c(),s=i(),k&&k.c(),v=i(),x&&x.c(),this.h()},l:function(e){n=h(e,"\n\n"),a=u(e,"DIV",{class:!0},!1);var l=d(a);t=u(l,"DIV",{class:!0},!1);var i=d(t);_&&_.l(i),c=h(i,"\n    "),E&&E.l(i),o=h(i,"\n\n    "),b&&b.l(i),r=h(i,"\n\n    "),y&&y.l(i),s=h(i,"\n\n    "),k&&k.l(i),i.forEach(f),v=h(l,"\n\n  "),x&&x.l(l),l.forEach(f),this.h()},h:function(){document.title="Food guardian",g(t,"class","controls-container stick svelte-18xumyb"),g(a,"class","main-container svelte-18xumyb")},m:function(e,l){p(e,n,l),p(e,a,l),m(a,t),_&&_.m(t,null),m(t,c),E&&E.m(t,null),m(t,o),b&&b.m(t,null),m(t,r),y&&y.m(t,null),m(t,s),k&&k.m(t,null),m(a,v),x&&x.m(a,null)},p:function(e,n){n.foodData.length>0?_?_.p(e,n):((_=C(n)).c(),_.m(t,c)):_&&(_.d(1),_=null),n.categories.length>1?E?E.p(e,n):((E=N(n)).c(),E.m(t,o)):E&&(E.d(1),E=null),n.foodData.length>0?b?b.p(e,n):((b=O(n)).c(),b.m(t,r)):b&&(b.d(1),b=null),n.isLoading?y||((y=P()).c(),y.m(t,s)):y&&(y.d(1),y=null),!n.isLoading&&!n.foodData.length>0&&n.errorMessage?k?k.p(e,n):((k=V(n)).c(),k.m(t,null)):k&&(k.d(1),k=null),n.foodData.length>0?x?x.p(e,n):((x=B(n)).c(),x.m(a,null)):x&&(x.d(1),x=null)},i:D,o:D,d:function(e){e&&(f(n),f(a)),_&&_.d(),E&&E.d(),b&&b.d(),y&&y.d(),k&&k.d(),x&&x.d()}}}function j(e,n,a){var t=[],c=["All"],o="",r=[],s=3,l=!0,i="All",u=!1,d="";function f(){return h.apply(this,arguments)}function h(){return(h=$(F.mark(function e(){var n,o;return F.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a("isLoading",u=!0),e.prev=1,"https://go-food-api.herokuapp.com/api/foods",e.next=5,fetch("https://go-food-api.herokuapp.com/api/foods");case 5:if((n=e.sent).ok){e.next=9;break}throw a("isLoading",u=!1),n;case 9:return e.next=11,n.json();case 11:o=e.sent,a("isLoading",u=!1),a("foodData",t=o),a("errorMessage",d=null),t.forEach(function(e){c.includes(e.category)||c.push(e.category)}),a("filteredFoodData",r=t),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(1),a("isLoading",u=!1),console.log(e.t0),a("errorMessage",d=e.t0.statusText);case 24:case"end":return e.stop()}},e,null,[[1,19]])}))).apply(this,arguments)}x($(F.mark(function e(){return F.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:f();case 1:case"end":return e.stop()}},e)})));return{foodData:t,categories:c,filterValue:o,filteredFoodData:r,selected:s,selectedCategory:i,isLoading:u,errorMessage:d,updateFilters:function(){a("filteredFoodData",r=t.filter(function(e){!function(e){switch(s){case 3:l=!0;break;case 2:l=!1===e;break;case 1:l=!0===e}}(e.recommended);var n="All"===i||e.category===i;return e.name.toLowerCase().includes(o.toLowerCase())&&l&&n}))},input_input_handler:function(){o=this.value,a("filterValue",o)},select_change_handler:function(){i=L(this),a("selectedCategory",i),a("categories",c)},input0_change_handler:function(){s=this.__value,a("selected",s)},input1_change_handler:function(){s=this.__value,a("selected",s)},input2_change_handler:function(){s=this.__value,a("selected",s)},$$binding_groups:[[]]}}export default(function(l){function i(e){var s;return n(this,i),s=a(this,t(i).call(this)),c(r(s),e,j,R,o,[]),s}return e(i,s),i}());
