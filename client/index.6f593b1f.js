import{S as e,i as a,s as t,e as n,a as r,b as s,d as l,f as c,g as o,h,C as i,j as d,k as u,D as f,t as g,E as v,F as p,q as m,n as _,G as E,H as k,I as y}from"./index.2f81c3c8.js";function b(e,a,t){const n=Object.create(e);return n.food=a[t],n}function D(e,a,t){const n=Object.create(e);return n.category=a[t],n}function x(e){var a,t,g,v,p;return{c(){a=n("form"),t=n("a"),g=r(),v=n("input"),this.h()},l(e){a=s(e,"FORM",{class:!0},!1);var n=l(a);t=s(n,"A",{href:!0,"uk-search-icon":!0},!1),l(t).forEach(c),g=o(n,"\n        "),v=s(n,"INPUT",{class:!0,type:!0,placeholder:!0},!1),l(v).forEach(c),n.forEach(c),this.h()},h(){h(t,"href",""),h(t,"uk-search-icon",""),h(v,"class","uk-search-input"),h(v,"type","search"),h(v,"placeholder","Search..."),h(a,"class","uk-search uk-search-default"),p=[i(v,"input",e.input_input_handler),i(v,"keydown",e.updateFilters)]},m(n,r){d(n,a,r),u(a,t),u(a,g),u(a,v),v.value=e.filterValue},p(e,a){e.filterValue&&(v.value=a.filterValue)},d(e){e&&c(a),f(p)}}}function T(e){for(var a,t,m,_,E,y,b,x,T,L,F,N,A=e.categories,C=[],w=0;w<A.length;w+=1)C[w]=$(D(e,A,w));return{c(){a=n("div"),t=n("h5"),m=g("Category"),_=r(),E=n("div"),y=n("select");for(var e=0;e<C.length;e+=1)C[e].c();b=r(),x=n("button"),T=n("span"),L=r(),F=n("span"),this.h()},l(e){a=s(e,"DIV",{class:!0},!1);var n=l(a);t=s(n,"H5",{},!1);var r=l(t);m=o(r,"Category"),r.forEach(c),_=o(n,"\n        "),E=s(n,"DIV",{"uk-form-custom":!0},!1);var h=l(E);y=s(h,"SELECT",{},!1);for(var i=l(y),d=0;d<C.length;d+=1)C[d].l(i);i.forEach(c),b=o(h,"\n          "),x=s(h,"BUTTON",{class:!0,type:!0,tabindex:!0},!1);var u=l(x);T=s(u,"SPAN",{},!1),l(T).forEach(c),L=o(u,"\n            "),F=s(u,"SPAN",{"uk-icon":!0},!1),l(F).forEach(c),u.forEach(c),h.forEach(c),n.forEach(c),this.h()},h(){void 0===e.selectedCategory&&k(()=>e.select_change_handler.call(y)),h(F,"uk-icon","icon: chevron-down"),h(x,"class","uk-button uk-button-default"),h(x,"type","button"),h(x,"tabindex","-1"),h(E,"uk-form-custom","target: > * > span:first-child"),h(a,"class","uk-margin"),N=[i(y,"change",e.select_change_handler),i(y,"change",e.updateFilters)]},m(n,r){d(n,a,r),u(a,t),u(t,m),u(a,_),u(a,E),u(E,y);for(var s=0;s<C.length;s+=1)C[s].m(y,null);v(y,e.selectedCategory),u(E,b),u(E,x),u(x,T),u(x,L),u(x,F)},p(e,a){if(e.categories){A=a.categories;for(var t=0;t<A.length;t+=1){const n=D(a,A,t);C[t]?C[t].p(e,n):(C[t]=$(n),C[t].c(),C[t].m(y,null))}for(;t<C.length;t+=1)C[t].d(1);C.length=A.length}e.selectedCategory&&v(y,a.selectedCategory)},d(e){e&&c(a),p(C,e),f(N)}}}function $(e){var a,t,r=e.category+"";return{c(){a=n("option"),t=g(r),this.h()},l(e){a=s(e,"OPTION",{value:!0},!1);var n=l(a);t=o(n,r),n.forEach(c),this.h()},h(){a.__value=e.category,a.value=a.__value},m(e,n){d(e,a,n),u(a,t)},p(e,t){a.value=a.__value},d(e){e&&c(a)}}}function L(e){var a,t,v,p,m,_,E,k,y,b,D,x,T,$,L,F,N;return{c(){a=n("div"),t=n("label"),v=n("input"),p=g("\n          Recommended"),m=r(),_=n("br"),E=r(),k=n("label"),y=n("input"),b=g("\n          Not Recommended"),D=r(),x=n("br"),T=r(),$=n("label"),L=n("input"),F=g("\n          All"),this.h()},l(e){a=s(e,"DIV",{class:!0},!1);var n=l(a);t=s(n,"LABEL",{class:!0},!1);var r=l(t);v=s(r,"INPUT",{class:!0,type:!0,name:!0,checked:!0,value:!0},!1),l(v).forEach(c),p=o(r,"\n          Recommended"),r.forEach(c),m=o(n,"\n        "),_=s(n,"BR",{},!1),l(_).forEach(c),E=o(n,"\n        "),k=s(n,"LABEL",{class:!0},!1);var h=l(k);y=s(h,"INPUT",{class:!0,type:!0,name:!0,value:!0},!1),l(y).forEach(c),b=o(h,"\n          Not Recommended"),h.forEach(c),D=o(n,"\n        "),x=s(n,"BR",{},!1),l(x).forEach(c),T=o(n,"\n        "),$=s(n,"LABEL",{class:!0},!1);var i=l($);L=s(i,"INPUT",{class:!0,type:!0,name:!0,value:!0},!1),l(L).forEach(c),F=o(i,"\n          All"),i.forEach(c),n.forEach(c),this.h()},h(){e.$$binding_groups[0].push(v),h(v,"class","uk-radio"),h(v,"type","radio"),h(v,"name","radio2"),v.checked=!0,v.__value=1,v.value=v.__value,h(t,"class","svelte-e8x2hu"),e.$$binding_groups[0].push(y),h(y,"class","uk-radio"),h(y,"type","radio"),h(y,"name","radio2"),y.__value=2,y.value=y.__value,h(k,"class","svelte-e8x2hu"),e.$$binding_groups[0].push(L),h(L,"class","uk-radio"),h(L,"type","radio"),h(L,"name","radio2"),L.__value=3,L.value=L.__value,h($,"class","svelte-e8x2hu"),h(a,"class","uk-margin uk-grid-small uk-child-width-auto "),N=[i(v,"change",e.input0_change_handler),i(v,"change",e.updateFilters),i(y,"change",e.input1_change_handler),i(y,"change",e.updateFilters),i(L,"change",e.input2_change_handler),i(L,"change",e.updateFilters)]},m(n,r){d(n,a,r),u(a,t),u(t,v),v.checked=v.__value===e.selected,u(t,p),u(a,m),u(a,_),u(a,E),u(a,k),u(k,y),y.checked=y.__value===e.selected,u(k,b),u(a,D),u(a,x),u(a,T),u(a,$),u($,L),L.checked=L.__value===e.selected,u($,F)},p(e,a){e.selected&&(v.checked=v.__value===a.selected),e.selected&&(y.checked=y.__value===a.selected),e.selected&&(L.checked=L.__value===a.selected)},d(t){t&&c(a),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(v),1),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(y),1),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(L),1),f(N)}}}function F(e){var a;return{c(){a=n("div"),this.h()},l(e){a=s(e,"DIV",{"uk-spinner":!0},!1),l(a).forEach(c),this.h()},h(){h(a,"uk-spinner","ratio: 2")},m(e,t){d(e,a,t)},d(e){e&&c(a)}}}function N(e){var a,t,h,i,f,v,p,_,E,k,y;return{c(){a=n("h3"),t=n("b"),h=g("Oh no!"),i=r(),f=n("h5"),v=g("Something went wrong. Please try again later."),p=r(),_=n("p"),E=g("Error details:\n        "),k=n("b"),y=g(e.errorMessage)},l(n){a=s(n,"H3",{},!1);var r=l(a);t=s(r,"B",{},!1);var d=l(t);h=o(d,"Oh no!"),d.forEach(c),r.forEach(c),i=o(n,"\n      "),f=s(n,"H5",{},!1);var u=l(f);v=o(u,"Something went wrong. Please try again later."),u.forEach(c),p=o(n,"\n      "),_=s(n,"P",{},!1);var g=l(_);E=o(g,"Error details:\n        "),k=s(g,"B",{},!1);var m=l(k);y=o(m,e.errorMessage),m.forEach(c),g.forEach(c)},m(e,n){d(e,a,n),u(a,t),u(t,h),d(e,i,n),d(e,f,n),u(f,v),d(e,p,n),d(e,_,n),u(_,E),u(_,k),u(k,y)},p(e,a){e.errorMessage&&m(y,a.errorMessage)},d(e){e&&(c(a),c(i),c(f),c(p),c(_))}}}function A(e){for(var a,t,i,f,v,m,_,E,k,y,D,x,T,$,L,F,N,A=e.filteredFoodData,C=[],w=0;w<A.length;w+=1)C[w]=I(b(e,A,w));return{c(){a=n("div"),t=n("table"),i=n("thead"),f=n("tr"),v=n("th"),m=g("Name"),_=r(),E=n("th"),k=g("Safe"),y=r(),D=n("th"),x=g("Category"),T=r(),$=n("th"),L=g("Note"),F=r(),N=n("tbody");for(var e=0;e<C.length;e+=1)C[e].c();this.h()},l(e){a=s(e,"DIV",{class:!0},!1);var n=l(a);t=s(n,"TABLE",{class:!0},!1);var r=l(t);i=s(r,"THEAD",{},!1);var h=l(i);f=s(h,"TR",{class:!0},!1);var d=l(f);v=s(d,"TH",{class:!0},!1);var u=l(v);m=o(u,"Name"),u.forEach(c),_=o(d,"\n            "),E=s(d,"TH",{class:!0},!1);var g=l(E);k=o(g,"Safe"),g.forEach(c),y=o(d,"\n            "),D=s(d,"TH",{class:!0},!1);var p=l(D);x=o(p,"Category"),p.forEach(c),T=o(d,"\n            "),$=s(d,"TH",{class:!0},!1);var b=l($);L=o(b,"Note"),b.forEach(c),d.forEach(c),h.forEach(c),F=o(r,"\n        "),N=s(r,"TBODY",{},!1);for(var A=l(N),w=0;w<C.length;w+=1)C[w].l(A);A.forEach(c),r.forEach(c),n.forEach(c),this.h()},h(){h(v,"class","svelte-e8x2hu"),h(E,"class","svelte-e8x2hu"),h(D,"class","svelte-e8x2hu"),h($,"class","svelte-e8x2hu"),h(f,"class","svelte-e8x2hu"),h(t,"class","uk-table uk-table-divider svelte-e8x2hu"),h(a,"class","controls-container table-container svelte-e8x2hu")},m(e,n){d(e,a,n),u(a,t),u(t,i),u(i,f),u(f,v),u(v,m),u(f,_),u(f,E),u(E,k),u(f,y),u(f,D),u(D,x),u(f,T),u(f,$),u($,L),u(t,F),u(t,N);for(var r=0;r<C.length;r+=1)C[r].m(N,null)},p(e,a){if(e.filteredFoodData){A=a.filteredFoodData;for(var t=0;t<A.length;t+=1){const n=b(a,A,t);C[t]?C[t].p(e,n):(C[t]=I(n),C[t].c(),C[t].m(N,null))}for(;t<C.length;t+=1)C[t].d(1);C.length=A.length}},d(e){e&&c(a),p(C,e)}}}function C(e){var a;return{c(){a=n("span"),this.h()},l(e){a=s(e,"SPAN",{class:!0,"uk-icon":!0},!1),l(a).forEach(c),this.h()},h(){h(a,"class","uk-margin-small-right no-icon"),h(a,"uk-icon","close")},m(e,t){d(e,a,t)},d(e){e&&c(a)}}}function w(e){var a;return{c(){a=n("span"),this.h()},l(e){a=s(e,"SPAN",{class:!0,"uk-icon":!0},!1),l(a).forEach(c),this.h()},h(){h(a,"class","uk-margin-small-right yes-icon"),h(a,"uk-icon","check")},m(e,t){d(e,a,t)},d(e){e&&c(a)}}}function I(e){var a,t,i,f,v,p,_,E,k,y,b,D,x,T=e.food.name+"",$=e.food.category+"",L=e.food.comments+"";function F(e){return!0===e.food.recommended?w:!1===e.food.recommended?C:void 0}var N=F(e),A=N&&N(e);return{c(){a=n("tr"),t=n("td"),i=n("b"),f=g(T),v=r(),p=n("td"),A&&A.c(),_=r(),E=n("td"),k=g($),y=r(),b=n("td"),D=g(L),x=r(),this.h()},l(e){a=s(e,"TR",{class:!0},!1);var n=l(a);t=s(n,"TD",{class:!0},!1);var r=l(t);i=s(r,"B",{},!1);var h=l(i);f=o(h,T),h.forEach(c),r.forEach(c),v=o(n,"\n              "),p=s(n,"TD",{class:!0},!1);var d=l(p);A&&A.l(d),d.forEach(c),_=o(n,"\n              "),E=s(n,"TD",{class:!0},!1);var u=l(E);k=o(u,$),u.forEach(c),y=o(n,"\n              "),b=s(n,"TD",{class:!0},!1);var g=l(b);D=o(g,L),g.forEach(c),x=o(n,"\n            "),n.forEach(c),this.h()},h(){h(t,"class","reduced-padding svelte-e8x2hu"),h(p,"class","reduced-padding svelte-e8x2hu"),h(E,"class","reduced-padding svelte-e8x2hu"),h(b,"class","reduced-padding svelte-e8x2hu"),h(a,"class","svelte-e8x2hu")},m(e,n){d(e,a,n),u(a,t),u(t,i),u(i,f),u(a,v),u(a,p),A&&A.m(p,null),u(a,_),u(a,E),u(E,k),u(a,y),u(a,b),u(b,D),u(a,x)},p(e,a){e.filteredFoodData&&T!==(T=a.food.name+"")&&m(f,T),N!==(N=F(a))&&(A&&A.d(1),(A=N&&N(a))&&(A.c(),A.m(p,null))),e.filteredFoodData&&$!==($=a.food.category+"")&&m(k,$),e.filteredFoodData&&L!==(L=a.food.comments+"")&&m(D,L)},d(e){e&&c(a),A&&A.d()}}}function O(e){var a,t,i,f,g,v,p,m,E=e.foodData.length>0&&x(e),k=e.categories.length>1&&T(e),y=e.foodData.length>0&&L(e),b=e.isLoading&&F(),D=!e.isLoading&&!e.foodData.length>0&&e.errorMessage&&N(e),$=e.foodData.length>0&&A(e);return{c(){a=r(),t=n("div"),i=n("div"),E&&E.c(),f=r(),k&&k.c(),g=r(),y&&y.c(),v=r(),b&&b.c(),p=r(),D&&D.c(),m=r(),$&&$.c(),this.h()},l(e){a=o(e,"\n\n"),t=s(e,"DIV",{class:!0},!1);var n=l(t);i=s(n,"DIV",{class:!0},!1);var r=l(i);E&&E.l(r),f=o(r,"\n    "),k&&k.l(r),g=o(r,"\n\n    "),y&&y.l(r),v=o(r,"\n\n    "),b&&b.l(r),p=o(r,"\n\n    "),D&&D.l(r),r.forEach(c),m=o(n,"\n\n  "),$&&$.l(n),n.forEach(c),this.h()},h(){document.title="Food guardian",h(i,"class","controls-container stick svelte-e8x2hu"),h(t,"class","main-container svelte-e8x2hu")},m(e,n){d(e,a,n),d(e,t,n),u(t,i),E&&E.m(i,null),u(i,f),k&&k.m(i,null),u(i,g),y&&y.m(i,null),u(i,v),b&&b.m(i,null),u(i,p),D&&D.m(i,null),u(t,m),$&&$.m(t,null)},p(e,a){a.foodData.length>0?E?E.p(e,a):((E=x(a)).c(),E.m(i,f)):E&&(E.d(1),E=null),a.categories.length>1?k?k.p(e,a):((k=T(a)).c(),k.m(i,g)):k&&(k.d(1),k=null),a.foodData.length>0?y?y.p(e,a):((y=L(a)).c(),y.m(i,v)):y&&(y.d(1),y=null),a.isLoading?b||((b=F()).c(),b.m(i,p)):b&&(b.d(1),b=null),!a.isLoading&&!a.foodData.length>0&&a.errorMessage?D?D.p(e,a):((D=N(a)).c(),D.m(i,null)):D&&(D.d(1),D=null),a.foodData.length>0?$?$.p(e,a):(($=A(a)).c(),$.m(t,null)):$&&($.d(1),$=null)},i:_,o:_,d(e){e&&(c(a),c(t)),E&&E.d(),k&&k.d(),y&&y.d(),b&&b.d(),D&&D.d(),$&&$.d()}}}function P(e,a,t){let n=[],r=["All"],s="",l=[],c=3,o=!0,h="All",i=!1,d="";E(async()=>{!async function(){t("isLoading",i=!0);try{const e="https://go-food-api.herokuapp.com/api/foods",a=await fetch(e);if(!a.ok)throw t("isLoading",i=!1),a;const s=await a.json();t("isLoading",i=!1),t("foodData",n=s),t("errorMessage",d=null),n.forEach(e=>{r.includes(e.category)||r.push(e.category)}),t("filteredFoodData",l=n)}catch(e){t("isLoading",i=!1),console.log(e),t("errorMessage",d=e.statusText)}}()});return{foodData:n,categories:r,filterValue:s,filteredFoodData:l,selected:c,selectedCategory:h,isLoading:i,errorMessage:d,updateFilters:function(){t("filteredFoodData",l=n.filter(e=>{!function(e){switch(c){case 3:o=!0;break;case 2:o=!1===e;break;case 1:o=!0===e}}(e.recommended);let a="All"===h||e.category===h;return e.name.toLowerCase().includes(s.toLowerCase())&&o&&a}))},input_input_handler:function(){s=this.value,t("filterValue",s)},select_change_handler:function(){h=y(this),t("selectedCategory",h),t("categories",r)},input0_change_handler:function(){c=this.__value,t("selected",c)},input1_change_handler:function(){c=this.__value,t("selected",c)},input2_change_handler:function(){c=this.__value,t("selected",c)},$$binding_groups:[[]]}}export default class extends e{constructor(e){super(),a(this,e,P,O,t,[])}}
