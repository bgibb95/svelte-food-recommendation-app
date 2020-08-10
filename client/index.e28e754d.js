import{S as e,i as a,s as t,e as n,a as r,b as s,d as l,f as c,g as o,h as i,C as d,j as h,k as u,D as f,t as g,E as v,F as m,q as p,n as _,G as E,H as y,I as b}from"./index.2f81c3c8.js";function k(e,a,t){const n=Object.create(e);return n.food=a[t],n}function D(e,a,t){const n=Object.create(e);return n.category=a[t],n}function x(e){var a,t,g,v,m;return{c(){a=n("form"),t=n("a"),g=r(),v=n("input"),this.h()},l(e){a=s(e,"FORM",{class:!0},!1);var n=l(a);t=s(n,"A",{href:!0,"uk-search-icon":!0},!1),l(t).forEach(c),g=o(n,"\n        "),v=s(n,"INPUT",{class:!0,type:!0,placeholder:!0},!1),l(v).forEach(c),n.forEach(c),this.h()},h(){i(t,"href",""),i(t,"uk-search-icon",""),i(v,"class","uk-search-input"),i(v,"type","search"),i(v,"placeholder","Search..."),i(a,"class","uk-search uk-search-default"),m=[d(v,"input",e.input_input_handler),d(v,"keydown",e.updateFilters)]},m(n,r){h(n,a,r),u(a,t),u(a,g),u(a,v),v.value=e.filterValue},p(e,a){e.filterValue&&(v.value=a.filterValue)},d(e){e&&c(a),f(m)}}}function T(e){for(var a,t,p,_,E,b,k,x,T,L,F,C,A=e.categories,N=[],w=0;w<A.length;w+=1)N[w]=$(D(e,A,w));return{c(){a=n("div"),t=n("h5"),p=g("Category"),_=r(),E=n("div"),b=n("select");for(var e=0;e<N.length;e+=1)N[e].c();k=r(),x=n("button"),T=n("span"),L=r(),F=n("span"),this.h()},l(e){a=s(e,"DIV",{class:!0},!1);var n=l(a);t=s(n,"H5",{},!1);var r=l(t);p=o(r,"Category"),r.forEach(c),_=o(n,"\n        "),E=s(n,"DIV",{"uk-form-custom":!0},!1);var i=l(E);b=s(i,"SELECT",{},!1);for(var d=l(b),h=0;h<N.length;h+=1)N[h].l(d);d.forEach(c),k=o(i,"\n          "),x=s(i,"BUTTON",{class:!0,type:!0,tabindex:!0},!1);var u=l(x);T=s(u,"SPAN",{},!1),l(T).forEach(c),L=o(u,"\n            "),F=s(u,"SPAN",{"uk-icon":!0},!1),l(F).forEach(c),u.forEach(c),i.forEach(c),n.forEach(c),this.h()},h(){void 0===e.selectedCategory&&y(()=>e.select_change_handler.call(b)),i(F,"uk-icon","icon: chevron-down"),i(x,"class","uk-button uk-button-default"),i(x,"type","button"),i(x,"tabindex","-1"),i(E,"uk-form-custom","target: > * > span:first-child"),i(a,"class","uk-margin"),C=[d(b,"change",e.select_change_handler),d(b,"change",e.updateFilters)]},m(n,r){h(n,a,r),u(a,t),u(t,p),u(a,_),u(a,E),u(E,b);for(var s=0;s<N.length;s+=1)N[s].m(b,null);v(b,e.selectedCategory),u(E,k),u(E,x),u(x,T),u(x,L),u(x,F)},p(e,a){if(e.categories){A=a.categories;for(var t=0;t<A.length;t+=1){const n=D(a,A,t);N[t]?N[t].p(e,n):(N[t]=$(n),N[t].c(),N[t].m(b,null))}for(;t<N.length;t+=1)N[t].d(1);N.length=A.length}e.selectedCategory&&v(b,a.selectedCategory)},d(e){e&&c(a),m(N,e),f(C)}}}function $(e){var a,t,r=e.category+"";return{c(){a=n("option"),t=g(r),this.h()},l(e){a=s(e,"OPTION",{value:!0},!1);var n=l(a);t=o(n,r),n.forEach(c),this.h()},h(){a.__value=e.category,a.value=a.__value},m(e,n){h(e,a,n),u(a,t)},p(e,t){a.value=a.__value},d(e){e&&c(a)}}}function L(e){var a,t,v,m,p,_,E,y,b,k,D,x,T,$,L,F,C;return{c(){a=n("div"),t=n("label"),v=n("input"),m=g("\n          Recommended"),p=r(),_=n("br"),E=r(),y=n("label"),b=n("input"),k=g("\n          Not Recommended"),D=r(),x=n("br"),T=r(),$=n("label"),L=n("input"),F=g("\n          All"),this.h()},l(e){a=s(e,"DIV",{class:!0},!1);var n=l(a);t=s(n,"LABEL",{class:!0},!1);var r=l(t);v=s(r,"INPUT",{class:!0,type:!0,name:!0,checked:!0,value:!0},!1),l(v).forEach(c),m=o(r,"\n          Recommended"),r.forEach(c),p=o(n,"\n        "),_=s(n,"BR",{},!1),l(_).forEach(c),E=o(n,"\n        "),y=s(n,"LABEL",{class:!0},!1);var i=l(y);b=s(i,"INPUT",{class:!0,type:!0,name:!0,value:!0},!1),l(b).forEach(c),k=o(i,"\n          Not Recommended"),i.forEach(c),D=o(n,"\n        "),x=s(n,"BR",{},!1),l(x).forEach(c),T=o(n,"\n        "),$=s(n,"LABEL",{class:!0},!1);var d=l($);L=s(d,"INPUT",{class:!0,type:!0,name:!0,value:!0},!1),l(L).forEach(c),F=o(d,"\n          All"),d.forEach(c),n.forEach(c),this.h()},h(){e.$$binding_groups[0].push(v),i(v,"class","uk-radio"),i(v,"type","radio"),i(v,"name","radio2"),v.checked=!0,v.__value=1,v.value=v.__value,i(t,"class","svelte-18xumyb"),e.$$binding_groups[0].push(b),i(b,"class","uk-radio"),i(b,"type","radio"),i(b,"name","radio2"),b.__value=2,b.value=b.__value,i(y,"class","svelte-18xumyb"),e.$$binding_groups[0].push(L),i(L,"class","uk-radio"),i(L,"type","radio"),i(L,"name","radio2"),L.__value=3,L.value=L.__value,i($,"class","svelte-18xumyb"),i(a,"class","uk-margin uk-grid-small uk-child-width-auto "),C=[d(v,"change",e.input0_change_handler),d(v,"change",e.updateFilters),d(b,"change",e.input1_change_handler),d(b,"change",e.updateFilters),d(L,"change",e.input2_change_handler),d(L,"change",e.updateFilters)]},m(n,r){h(n,a,r),u(a,t),u(t,v),v.checked=v.__value===e.selected,u(t,m),u(a,p),u(a,_),u(a,E),u(a,y),u(y,b),b.checked=b.__value===e.selected,u(y,k),u(a,D),u(a,x),u(a,T),u(a,$),u($,L),L.checked=L.__value===e.selected,u($,F)},p(e,a){e.selected&&(v.checked=v.__value===a.selected),e.selected&&(b.checked=b.__value===a.selected),e.selected&&(L.checked=L.__value===a.selected)},d(t){t&&c(a),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(v),1),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(b),1),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(L),1),f(C)}}}function F(e){var a;return{c(){a=n("div"),this.h()},l(e){a=s(e,"DIV",{"uk-spinner":!0},!1),l(a).forEach(c),this.h()},h(){i(a,"uk-spinner","ratio: 2")},m(e,t){h(e,a,t)},d(e){e&&c(a)}}}function C(e){var a,t,i,d,f,v,m,_,E,y,b;return{c(){a=n("h3"),t=n("b"),i=g("Oh no!"),d=r(),f=n("h5"),v=g("Something went wrong. Please try again later."),m=r(),_=n("p"),E=g("Error details:\n        "),y=n("b"),b=g(e.errorMessage)},l(n){a=s(n,"H3",{},!1);var r=l(a);t=s(r,"B",{},!1);var h=l(t);i=o(h,"Oh no!"),h.forEach(c),r.forEach(c),d=o(n,"\n      "),f=s(n,"H5",{},!1);var u=l(f);v=o(u,"Something went wrong. Please try again later."),u.forEach(c),m=o(n,"\n      "),_=s(n,"P",{},!1);var g=l(_);E=o(g,"Error details:\n        "),y=s(g,"B",{},!1);var p=l(y);b=o(p,e.errorMessage),p.forEach(c),g.forEach(c)},m(e,n){h(e,a,n),u(a,t),u(t,i),h(e,d,n),h(e,f,n),u(f,v),h(e,m,n),h(e,_,n),u(_,E),u(_,y),u(y,b)},p(e,a){e.errorMessage&&p(b,a.errorMessage)},d(e){e&&(c(a),c(d),c(f),c(m),c(_))}}}function A(e){for(var a,t,d,f,v,p,_,E,y,b,D,x,T,$,L,F,C,A=e.filteredFoodData,N=[],w=0;w<A.length;w+=1)N[w]=I(k(e,A,w));return{c(){a=n("div"),t=n("table"),d=n("thead"),f=n("tr"),v=n("th"),p=g("Name"),_=r(),E=n("th"),y=g("Safe"),b=r(),D=n("th"),x=g("Category"),T=r(),$=n("th"),L=g("Comment"),F=r(),C=n("tbody");for(var e=0;e<N.length;e+=1)N[e].c();this.h()},l(e){a=s(e,"DIV",{class:!0},!1);var n=l(a);t=s(n,"TABLE",{class:!0},!1);var r=l(t);d=s(r,"THEAD",{},!1);var i=l(d);f=s(i,"TR",{class:!0},!1);var h=l(f);v=s(h,"TH",{class:!0},!1);var u=l(v);p=o(u,"Name"),u.forEach(c),_=o(h,"\n            "),E=s(h,"TH",{class:!0},!1);var g=l(E);y=o(g,"Safe"),g.forEach(c),b=o(h,"\n            "),D=s(h,"TH",{class:!0},!1);var m=l(D);x=o(m,"Category"),m.forEach(c),T=o(h,"\n            "),$=s(h,"TH",{class:!0},!1);var k=l($);L=o(k,"Comment"),k.forEach(c),h.forEach(c),i.forEach(c),F=o(r,"\n        "),C=s(r,"TBODY",{},!1);for(var A=l(C),w=0;w<N.length;w+=1)N[w].l(A);A.forEach(c),r.forEach(c),n.forEach(c),this.h()},h(){i(v,"class","svelte-18xumyb"),i(E,"class","svelte-18xumyb"),i(D,"class","svelte-18xumyb"),i($,"class","svelte-18xumyb"),i(f,"class","svelte-18xumyb"),i(t,"class","uk-table uk-table-divider svelte-18xumyb"),i(a,"class","controls-container svelte-18xumyb")},m(e,n){h(e,a,n),u(a,t),u(t,d),u(d,f),u(f,v),u(v,p),u(f,_),u(f,E),u(E,y),u(f,b),u(f,D),u(D,x),u(f,T),u(f,$),u($,L),u(t,F),u(t,C);for(var r=0;r<N.length;r+=1)N[r].m(C,null)},p(e,a){if(e.filteredFoodData){A=a.filteredFoodData;for(var t=0;t<A.length;t+=1){const n=k(a,A,t);N[t]?N[t].p(e,n):(N[t]=I(n),N[t].c(),N[t].m(C,null))}for(;t<N.length;t+=1)N[t].d(1);N.length=A.length}},d(e){e&&c(a),m(N,e)}}}function N(e){var a;return{c(){a=n("span"),this.h()},l(e){a=s(e,"SPAN",{class:!0,"uk-icon":!0},!1),l(a).forEach(c),this.h()},h(){i(a,"class","uk-margin-small-right no-icon"),i(a,"uk-icon","close")},m(e,t){h(e,a,t)},d(e){e&&c(a)}}}function w(e){var a;return{c(){a=n("span"),this.h()},l(e){a=s(e,"SPAN",{class:!0,"uk-icon":!0},!1),l(a).forEach(c),this.h()},h(){i(a,"class","uk-margin-small-right yes-icon"),i(a,"uk-icon","check")},m(e,t){h(e,a,t)},d(e){e&&c(a)}}}function I(e){var a,t,d,f,v,m,_,E,y,b,k,D,x,T=e.food.name+"",$=e.food.category+"",L=e.food.comments+"";function F(e){return!0===e.food.recommended?w:!1===e.food.recommended?N:void 0}var C=F(e),A=C&&C(e);return{c(){a=n("tr"),t=n("td"),d=n("b"),f=g(T),v=r(),m=n("td"),A&&A.c(),_=r(),E=n("td"),y=g($),b=r(),k=n("td"),D=g(L),x=r(),this.h()},l(e){a=s(e,"TR",{class:!0},!1);var n=l(a);t=s(n,"TD",{class:!0},!1);var r=l(t);d=s(r,"B",{},!1);var i=l(d);f=o(i,T),i.forEach(c),r.forEach(c),v=o(n,"\n              "),m=s(n,"TD",{class:!0},!1);var h=l(m);A&&A.l(h),h.forEach(c),_=o(n,"\n              "),E=s(n,"TD",{class:!0},!1);var u=l(E);y=o(u,$),u.forEach(c),b=o(n,"\n              "),k=s(n,"TD",{class:!0},!1);var g=l(k);D=o(g,L),g.forEach(c),x=o(n,"\n            "),n.forEach(c),this.h()},h(){i(t,"class","reduced-padding svelte-18xumyb"),i(m,"class","reduced-padding svelte-18xumyb"),i(E,"class","reduced-padding svelte-18xumyb"),i(k,"class","reduced-padding svelte-18xumyb"),i(a,"class","svelte-18xumyb")},m(e,n){h(e,a,n),u(a,t),u(t,d),u(d,f),u(a,v),u(a,m),A&&A.m(m,null),u(a,_),u(a,E),u(E,y),u(a,b),u(a,k),u(k,D),u(a,x)},p(e,a){e.filteredFoodData&&T!==(T=a.food.name+"")&&p(f,T),C!==(C=F(a))&&(A&&A.d(1),(A=C&&C(a))&&(A.c(),A.m(m,null))),e.filteredFoodData&&$!==($=a.food.category+"")&&p(y,$),e.filteredFoodData&&L!==(L=a.food.comments+"")&&p(D,L)},d(e){e&&c(a),A&&A.d()}}}function O(e){var a,t,d,f,g,v,m,p,E=e.foodData.length>0&&x(e),y=e.categories.length>1&&T(e),b=e.foodData.length>0&&L(e),k=e.isLoading&&F(),D=!e.isLoading&&!e.foodData.length>0&&e.errorMessage&&C(e),$=e.foodData.length>0&&A(e);return{c(){a=r(),t=n("div"),d=n("div"),E&&E.c(),f=r(),y&&y.c(),g=r(),b&&b.c(),v=r(),k&&k.c(),m=r(),D&&D.c(),p=r(),$&&$.c(),this.h()},l(e){a=o(e,"\n\n"),t=s(e,"DIV",{class:!0},!1);var n=l(t);d=s(n,"DIV",{class:!0},!1);var r=l(d);E&&E.l(r),f=o(r,"\n    "),y&&y.l(r),g=o(r,"\n\n    "),b&&b.l(r),v=o(r,"\n\n    "),k&&k.l(r),m=o(r,"\n\n    "),D&&D.l(r),r.forEach(c),p=o(n,"\n\n  "),$&&$.l(n),n.forEach(c),this.h()},h(){document.title="Food guardian",i(d,"class","controls-container stick svelte-18xumyb"),i(t,"class","main-container svelte-18xumyb")},m(e,n){h(e,a,n),h(e,t,n),u(t,d),E&&E.m(d,null),u(d,f),y&&y.m(d,null),u(d,g),b&&b.m(d,null),u(d,v),k&&k.m(d,null),u(d,m),D&&D.m(d,null),u(t,p),$&&$.m(t,null)},p(e,a){a.foodData.length>0?E?E.p(e,a):((E=x(a)).c(),E.m(d,f)):E&&(E.d(1),E=null),a.categories.length>1?y?y.p(e,a):((y=T(a)).c(),y.m(d,g)):y&&(y.d(1),y=null),a.foodData.length>0?b?b.p(e,a):((b=L(a)).c(),b.m(d,v)):b&&(b.d(1),b=null),a.isLoading?k||((k=F()).c(),k.m(d,m)):k&&(k.d(1),k=null),!a.isLoading&&!a.foodData.length>0&&a.errorMessage?D?D.p(e,a):((D=C(a)).c(),D.m(d,null)):D&&(D.d(1),D=null),a.foodData.length>0?$?$.p(e,a):(($=A(a)).c(),$.m(t,null)):$&&($.d(1),$=null)},i:_,o:_,d(e){e&&(c(a),c(t)),E&&E.d(),y&&y.d(),b&&b.d(),k&&k.d(),D&&D.d(),$&&$.d()}}}function P(e,a,t){let n=[],r=["All"],s="",l=[],c=3,o=!0,i="All",d=!1,h="";E(async()=>{!async function(){t("isLoading",d=!0);try{const e="https://go-food-api.herokuapp.com/api/foods",a=await fetch(e);if(!a.ok)throw t("isLoading",d=!1),a;const s=await a.json();t("isLoading",d=!1),t("foodData",n=s),t("errorMessage",h=null),n.forEach(e=>{r.includes(e.category)||r.push(e.category)}),t("filteredFoodData",l=n)}catch(e){t("isLoading",d=!1),console.log(e),t("errorMessage",h=e.statusText)}}()});return{foodData:n,categories:r,filterValue:s,filteredFoodData:l,selected:c,selectedCategory:i,isLoading:d,errorMessage:h,updateFilters:function(){t("filteredFoodData",l=n.filter(e=>{!function(e){switch(c){case 3:o=!0;break;case 2:o=!1===e;break;case 1:o=!0===e}}(e.recommended);let a="All"===i||e.category===i;return e.name.toLowerCase().includes(s.toLowerCase())&&o&&a}))},input_input_handler:function(){s=this.value,t("filterValue",s)},select_change_handler:function(){i=b(this),t("selectedCategory",i),t("categories",r)},input0_change_handler:function(){c=this.__value,t("selected",c)},input1_change_handler:function(){c=this.__value,t("selected",c)},input2_change_handler:function(){c=this.__value,t("selected",c)},$$binding_groups:[[]]}}export default class extends e{constructor(e){super(),a(this,e,P,O,t,[])}}
