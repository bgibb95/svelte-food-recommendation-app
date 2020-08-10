import{_ as e,a as n,b as a,c as t,i as c,s as o,d as r,S as s,e as l,q as i,f as u,g as d,j as f,h,k as v,H as g,m as p,o as m,I as _,t as E,J as k,K as y,z as b,n as x,L as D,M as T,N as j}from"./index.79d47b8e.js";import{_ as $,a as L}from"./asyncToGenerator.87003971.js";function A(e,n,a){var t=Object.create(e);return t.food=n[a],t}function C(e,n,a){var t=Object.create(e);return t.category=n[a],t}function N(e){for(var n,a,t,c,o,r,s,E,b=e.categories,x=[],D=0;D<b.length;D+=1)x[D]=F(C(e,b,D));return{c:function(){n=l("div"),a=l("select");for(var e=0;e<x.length;e+=1)x[e].c();t=i(),c=l("button"),o=l("span"),r=i(),s=l("span"),this.h()},l:function(e){n=u(e,"DIV",{"uk-form-custom":!0},!1);var l=d(n);a=u(l,"SELECT",{},!1);for(var i=d(a),v=0;v<x.length;v+=1)x[v].l(i);i.forEach(f),t=h(l,"\n          "),c=u(l,"BUTTON",{class:!0,type:!0,tabindex:!0},!1);var g=d(c);o=u(g,"SPAN",{},!1),d(o).forEach(f),r=h(g,"\n            "),s=u(g,"SPAN",{"uk-icon":!0},!1),d(s).forEach(f),g.forEach(f),l.forEach(f),this.h()},h:function(){void 0===e.selectedCategory&&T(function(){return e.select_change_handler.call(a)}),v(s,"uk-icon","icon: chevron-down"),v(c,"class","uk-button uk-button-default"),v(c,"type","button"),v(c,"tabindex","-1"),v(n,"uk-form-custom","target: > * > span:first-child"),E=[g(a,"change",e.select_change_handler),g(a,"change",e.updateFilters)]},m:function(l,i){p(l,n,i),m(n,a);for(var u=0;u<x.length;u+=1)x[u].m(a,null);_(a,e.selectedCategory),m(n,t),m(n,c),m(c,o),m(c,r),m(c,s)},p:function(e,n){if(e.categories){b=n.categories;for(var t=0;t<b.length;t+=1){var c=C(n,b,t);x[t]?x[t].p(e,c):(x[t]=F(c),x[t].c(),x[t].m(a,null))}for(;t<x.length;t+=1)x[t].d(1);x.length=b.length}e.selectedCategory&&_(a,n.selectedCategory)},d:function(e){e&&f(n),k(x,e),y(E)}}}function F(e){var n,a,t=e.category+"";return{c:function(){n=l("option"),a=E(t),this.h()},l:function(e){n=u(e,"OPTION",{value:!0},!1);var c=d(n);a=h(c,t),c.forEach(f),this.h()},h:function(){n.__value=e.category,n.value=n.__value},m:function(e,t){p(e,n,t),m(n,a)},p:function(e,a){n.value=n.__value},d:function(e){e&&f(n)}}}function I(e){var n;return{c:function(){n=l("div"),this.h()},l:function(e){n=u(e,"DIV",{"uk-spinner":!0},!1),d(n).forEach(f),this.h()},h:function(){v(n,"uk-spinner","ratio: 2")},m:function(e,a){p(e,n,a)},d:function(e){e&&f(n)}}}function V(e){for(var n,a,t,c,o,r,s,g,_,y,b,x,D,T,j,$,L=e.filteredFoodData,C=[],N=0;N<L.length;N+=1)C[N]=B(A(e,L,N));return{c:function(){n=l("table"),a=l("thead"),t=l("tr"),c=l("th"),o=E("Name"),r=i(),s=l("th"),g=E("Safe"),_=i(),y=l("th"),b=E("Category"),x=i(),D=l("th"),T=E("Comment"),j=i(),$=l("tbody");for(var e=0;e<C.length;e+=1)C[e].c();this.h()},l:function(e){n=u(e,"TABLE",{class:!0},!1);var l=d(n);a=u(l,"THEAD",{},!1);var i=d(a);t=u(i,"TR",{class:!0},!1);var v=d(t);c=u(v,"TH",{class:!0},!1);var p=d(c);o=h(p,"Name"),p.forEach(f),r=h(v,"\n          "),s=u(v,"TH",{class:!0},!1);var m=d(s);g=h(m,"Safe"),m.forEach(f),_=h(v,"\n          "),y=u(v,"TH",{class:!0},!1);var E=d(y);b=h(E,"Category"),E.forEach(f),x=h(v,"\n          "),D=u(v,"TH",{class:!0},!1);var k=d(D);T=h(k,"Comment"),k.forEach(f),v.forEach(f),i.forEach(f),j=h(l,"\n      "),$=u(l,"TBODY",{},!1);for(var L=d($),A=0;A<C.length;A+=1)C[A].l(L);L.forEach(f),l.forEach(f),this.h()},h:function(){v(c,"class","svelte-vj0x0n"),v(s,"class","svelte-vj0x0n"),v(y,"class","svelte-vj0x0n"),v(D,"class","svelte-vj0x0n"),v(t,"class","svelte-vj0x0n"),v(n,"class","uk-table uk-table-divider svelte-vj0x0n")},m:function(e,l){p(e,n,l),m(n,a),m(a,t),m(t,c),m(c,o),m(t,r),m(t,s),m(s,g),m(t,_),m(t,y),m(y,b),m(t,x),m(t,D),m(D,T),m(n,j),m(n,$);for(var i=0;i<C.length;i+=1)C[i].m($,null)},p:function(e,n){if(e.filteredFoodData){L=n.filteredFoodData;for(var a=0;a<L.length;a+=1){var t=A(n,L,a);C[a]?C[a].p(e,t):(C[a]=B(t),C[a].c(),C[a].m($,null))}for(;a<C.length;a+=1)C[a].d(1);C.length=L.length}},d:function(e){e&&f(n),k(C,e)}}}function w(e){var n;return{c:function(){n=l("span"),this.h()},l:function(e){n=u(e,"SPAN",{class:!0,"uk-icon":!0},!1),d(n).forEach(f),this.h()},h:function(){v(n,"class","uk-margin-small-right no-icon"),v(n,"uk-icon","close")},m:function(e,a){p(e,n,a)},d:function(e){e&&f(n)}}}function O(e){var n;return{c:function(){n=l("span"),this.h()},l:function(e){n=u(e,"SPAN",{class:!0,"uk-icon":!0},!1),d(n).forEach(f),this.h()},h:function(){v(n,"class","uk-margin-small-right yes-icon"),v(n,"uk-icon","check")},m:function(e,a){p(e,n,a)},d:function(e){e&&f(n)}}}function B(e){var n,a,t,c,o,r,s,g,_,k,y,x,D,T=e.food.name+"",j=e.food.category+"",$=e.food.comments+"";function L(e){return!0===e.food.recommended?O:!1===e.food.recommended?w:void 0}var A=L(e),C=A&&A(e);return{c:function(){n=l("tr"),a=l("td"),t=l("b"),c=E(T),o=i(),r=l("td"),C&&C.c(),s=i(),g=l("td"),_=E(j),k=i(),y=l("td"),x=E($),D=i(),this.h()},l:function(e){n=u(e,"TR",{class:!0},!1);var l=d(n);a=u(l,"TD",{class:!0},!1);var i=d(a);t=u(i,"B",{},!1);var v=d(t);c=h(v,T),v.forEach(f),i.forEach(f),o=h(l,"\n            "),r=u(l,"TD",{class:!0},!1);var p=d(r);C&&C.l(p),p.forEach(f),s=h(l,"\n            "),g=u(l,"TD",{class:!0},!1);var m=d(g);_=h(m,j),m.forEach(f),k=h(l,"\n            "),y=u(l,"TD",{class:!0},!1);var E=d(y);x=h(E,$),E.forEach(f),D=h(l,"\n          "),l.forEach(f),this.h()},h:function(){v(a,"class","reduced-padding svelte-vj0x0n"),v(r,"class","reduced-padding svelte-vj0x0n"),v(g,"class","reduced-padding svelte-vj0x0n"),v(y,"class","reduced-padding svelte-vj0x0n"),v(n,"class","svelte-vj0x0n")},m:function(e,l){p(e,n,l),m(n,a),m(a,t),m(t,c),m(n,o),m(n,r),C&&C.m(r,null),m(n,s),m(n,g),m(g,_),m(n,k),m(n,y),m(y,x),m(n,D)},p:function(e,n){e.filteredFoodData&&T!==(T=n.food.name+"")&&b(c,T),A!==(A=L(n))&&(C&&C.d(1),(C=A&&A(n))&&(C.c(),C.m(r,null))),e.filteredFoodData&&j!==(j=n.food.category+"")&&b(_,j),e.filteredFoodData&&$!==($=n.food.comments+"")&&b(x,$)},d:function(e){e&&f(n),C&&C.d()}}}function P(e){var n,a,t,c,o,r,s,_,k,b,D,T,j,$,L,A,C,F,w,O,B,P,R,S,H,U,M,q,z,G,J,K,Y=e.categories.length>1&&N(e),Q=e.isLoading&&I(),W=e.foodData.length>0&&V(e);return{c:function(){n=i(),a=l("div"),t=l("div"),c=l("form"),o=l("a"),r=i(),s=l("input"),_=i(),k=l("div"),b=l("h5"),D=E("Category"),T=i(),Y&&Y.c(),j=i(),$=l("div"),L=l("label"),A=l("input"),C=E("\n        Recommended"),F=i(),w=l("br"),O=i(),B=l("label"),P=l("input"),R=E("\n        Not Recommended"),S=i(),H=l("br"),U=i(),M=l("label"),q=l("input"),z=E("\n        All"),G=i(),Q&&Q.c(),J=i(),W&&W.c(),this.h()},l:function(e){n=h(e,"\n\n"),a=u(e,"DIV",{},!1);var l=d(a);t=u(l,"DIV",{},!1);var i=d(t);c=u(i,"FORM",{class:!0},!1);var v=d(c);o=u(v,"A",{href:!0,"uk-search-icon":!0},!1),d(o).forEach(f),r=h(v,"\n      "),s=u(v,"INPUT",{class:!0,type:!0,placeholder:!0},!1),d(s).forEach(f),v.forEach(f),_=h(i,"\n    "),k=u(i,"DIV",{class:!0},!1);var g=d(k);b=u(g,"H5",{},!1);var p=d(b);D=h(p,"Category"),p.forEach(f),T=h(g,"\n      "),Y&&Y.l(g),g.forEach(f),j=h(i,"\n\n    "),$=u(i,"DIV",{class:!0},!1);var m=d($);L=u(m,"LABEL",{class:!0},!1);var E=d(L);A=u(E,"INPUT",{class:!0,type:!0,name:!0,checked:!0,value:!0},!1),d(A).forEach(f),C=h(E,"\n        Recommended"),E.forEach(f),F=h(m,"\n      "),w=u(m,"BR",{},!1),d(w).forEach(f),O=h(m,"\n      "),B=u(m,"LABEL",{class:!0},!1);var y=d(B);P=u(y,"INPUT",{class:!0,type:!0,name:!0,value:!0},!1),d(P).forEach(f),R=h(y,"\n        Not Recommended"),y.forEach(f),S=h(m,"\n      "),H=u(m,"BR",{},!1),d(H).forEach(f),U=h(m,"\n      "),M=u(m,"LABEL",{class:!0},!1);var x=d(M);q=u(x,"INPUT",{class:!0,type:!0,name:!0,value:!0},!1),d(q).forEach(f),z=h(x,"\n        All"),x.forEach(f),m.forEach(f),i.forEach(f),G=h(l,"\n\n  "),Q&&Q.l(l),J=h(l,"\n\n  "),W&&W.l(l),l.forEach(f),this.h()},h:function(){document.title="Food guardian",v(o,"href",""),v(o,"uk-search-icon",""),v(s,"class","uk-search-input"),v(s,"type","search"),v(s,"placeholder","Search..."),v(c,"class","uk-search uk-search-default"),v(k,"class","uk-margin"),e.$$binding_groups[0].push(A),v(A,"class","uk-radio"),v(A,"type","radio"),v(A,"name","radio2"),A.checked=!0,A.__value=1,A.value=A.__value,v(L,"class","svelte-vj0x0n"),e.$$binding_groups[0].push(P),v(P,"class","uk-radio"),v(P,"type","radio"),v(P,"name","radio2"),P.__value=2,P.value=P.__value,v(B,"class","svelte-vj0x0n"),e.$$binding_groups[0].push(q),v(q,"class","uk-radio"),v(q,"type","radio"),v(q,"name","radio2"),q.__value=3,q.value=q.__value,v(M,"class","svelte-vj0x0n"),v($,"class","uk-margin uk-grid-small uk-child-width-auto "),K=[g(s,"input",e.input0_input_handler),g(s,"keydown",e.updateFilters),g(A,"change",e.input1_change_handler),g(P,"change",e.input2_change_handler),g(q,"change",e.input3_change_handler)]},m:function(l,i){p(l,n,i),p(l,a,i),m(a,t),m(t,c),m(c,o),m(c,r),m(c,s),s.value=e.filterValue,m(t,_),m(t,k),m(k,b),m(b,D),m(k,T),Y&&Y.m(k,null),m(t,j),m(t,$),m($,L),m(L,A),A.checked=A.__value===e.selected,m(L,C),m($,F),m($,w),m($,O),m($,B),m(B,P),P.checked=P.__value===e.selected,m(B,R),m($,S),m($,H),m($,U),m($,M),m(M,q),q.checked=q.__value===e.selected,m(M,z),m(a,G),Q&&Q.m(a,null),m(a,J),W&&W.m(a,null)},p:function(e,n){e.filterValue&&(s.value=n.filterValue),n.categories.length>1?Y?Y.p(e,n):((Y=N(n)).c(),Y.m(k,null)):Y&&(Y.d(1),Y=null),e.selected&&(A.checked=A.__value===n.selected),e.selected&&(P.checked=P.__value===n.selected),e.selected&&(q.checked=q.__value===n.selected),n.isLoading?Q||((Q=I()).c(),Q.m(a,J)):Q&&(Q.d(1),Q=null),n.foodData.length>0?W?W.p(e,n):((W=V(n)).c(),W.m(a,null)):W&&(W.d(1),W=null)},i:x,o:x,d:function(t){t&&(f(n),f(a)),Y&&Y.d(),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(A),1),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(P),1),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(q),1),Q&&Q.d(),W&&W.d(),y(K)}}}function R(e,n,a){var t=[],c=["All"],o="",r=[],s=3,l=!0,i="All",u=!1;function d(){return f.apply(this,arguments)}function f(){return(f=$(L.mark(function e(){var n,o;return L.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a("isLoading",u=!0),e.prev=1,e.next=4,fetch("https://go-food-api.herokuapp.com/api/foods");case 4:return n=e.sent,e.next=7,n.json();case 7:o=e.sent,a("foodData",t=o),t.forEach(function(e){c.includes(e.category)||c.push(e.category)}),a("filteredFoodData",r=t),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),a("isLoading",u=!1),console.log(e.t0);case 17:case"end":return e.stop()}},e,null,[[1,13]])}))).apply(this,arguments)}function h(){a("filteredFoodData",r=t.filter(function(e){!function(e){switch(s){case 3:l=!0;break;case 2:l=!1===e;break;case 1:l=!0===e}}(e.recommended);var n="All"===i||e.category===i;return e.name.toLowerCase().includes(o.toLowerCase())&&l&&n}))}D($(L.mark(function e(){return L.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:d();case 1:case"end":return e.stop()}},e)})));return h(),{foodData:t,categories:c,filterValue:o,filteredFoodData:r,selected:s,selectedCategory:i,isLoading:u,updateFilters:h,input0_input_handler:function(){o=this.value,a("filterValue",o)},select_change_handler:function(){i=j(this),a("selectedCategory",i),a("categories",c)},input1_change_handler:function(){s=this.__value,a("selected",s)},input2_change_handler:function(){s=this.__value,a("selected",s)},input3_change_handler:function(){s=this.__value,a("selected",s)},$$binding_groups:[[]]}}export default(function(l){function i(e){var s;return n(this,i),s=a(this,t(i).call(this)),c(r(s),e,R,P,o,[]),s}return e(i,s),i}());
