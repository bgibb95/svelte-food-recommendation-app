import{S as e,i as a,s as n,e as t,l as c,c as l,a as s,d as r,b as o,f as d,C as i,h,j as u,D as f,t as v,E as g,F as p,v as m,n as _,G as E,H as k,I as y}from"./index.065f77ca.js";function b(e,a,n){const t=Object.create(e);return t.food=a[n],t}function D(e,a,n){const t=Object.create(e);return t.category=a[n],t}function x(e){for(var a,n,v,m,_,E,y,b,x=e.categories,$=[],j=0;j<x.length;j+=1)$[j]=T(D(e,x,j));return{c(){a=t("div"),n=t("select");for(var e=0;e<$.length;e+=1)$[e].c();v=c(),m=t("button"),_=t("span"),E=c(),y=t("span"),this.h()},l(e){a=l(e,"DIV",{"uk-form-custom":!0},!1);var t=s(a);n=l(t,"SELECT",{},!1);for(var c=s(n),d=0;d<$.length;d+=1)$[d].l(c);c.forEach(r),v=o(t,"\n          "),m=l(t,"BUTTON",{class:!0,type:!0,tabindex:!0},!1);var i=s(m);_=l(i,"SPAN",{},!1),s(_).forEach(r),E=o(i,"\n            "),y=l(i,"SPAN",{"uk-icon":!0},!1),s(y).forEach(r),i.forEach(r),t.forEach(r),this.h()},h(){void 0===e.selectedCategory&&k(()=>e.select_change_handler.call(n)),d(y,"uk-icon","icon: chevron-down"),d(m,"class","uk-button uk-button-default"),d(m,"type","button"),d(m,"tabindex","-1"),d(a,"uk-form-custom","target: > * > span:first-child"),b=[i(n,"change",e.select_change_handler),i(n,"change",e.updateFilters)]},m(t,c){h(t,a,c),u(a,n);for(var l=0;l<$.length;l+=1)$[l].m(n,null);f(n,e.selectedCategory),u(a,v),u(a,m),u(m,_),u(m,E),u(m,y)},p(e,a){if(e.categories){x=a.categories;for(var t=0;t<x.length;t+=1){const c=D(a,x,t);$[t]?$[t].p(e,c):($[t]=T(c),$[t].c(),$[t].m(n,null))}for(;t<$.length;t+=1)$[t].d(1);$.length=x.length}e.selectedCategory&&f(n,a.selectedCategory)},d(e){e&&r(a),g($,e),p(b)}}}function T(e){var a,n,c=e.category+"";return{c(){a=t("option"),n=v(c),this.h()},l(e){a=l(e,"OPTION",{value:!0},!1);var t=s(a);n=o(t,c),t.forEach(r),this.h()},h(){a.__value=e.category,a.value=a.__value},m(e,t){h(e,a,t),u(a,n)},p(e,n){a.value=a.__value},d(e){e&&r(a)}}}function $(e){var a;return{c(){a=t("div"),this.h()},l(e){a=l(e,"DIV",{"uk-spinner":!0},!1),s(a).forEach(r),this.h()},h(){d(a,"uk-spinner","ratio: 2")},m(e,n){h(e,a,n)},d(e){e&&r(a)}}}function j(e){for(var a,n,i,f,p,m,_,E,k,y,D,x,T,$,j,C,A=e.filteredFoodData,L=[],N=0;N<A.length;N+=1)L[N]=F(b(e,A,N));return{c(){a=t("table"),n=t("thead"),i=t("tr"),f=t("th"),p=v("Name"),m=c(),_=t("th"),E=v("Safe"),k=c(),y=t("th"),D=v("Category"),x=c(),T=t("th"),$=v("Comment"),j=c(),C=t("tbody");for(var e=0;e<L.length;e+=1)L[e].c();this.h()},l(e){a=l(e,"TABLE",{class:!0},!1);var t=s(a);n=l(t,"THEAD",{},!1);var c=s(n);i=l(c,"TR",{class:!0},!1);var d=s(i);f=l(d,"TH",{class:!0},!1);var h=s(f);p=o(h,"Name"),h.forEach(r),m=o(d,"\n          "),_=l(d,"TH",{class:!0},!1);var u=s(_);E=o(u,"Safe"),u.forEach(r),k=o(d,"\n          "),y=l(d,"TH",{class:!0},!1);var v=s(y);D=o(v,"Category"),v.forEach(r),x=o(d,"\n          "),T=l(d,"TH",{class:!0},!1);var g=s(T);$=o(g,"Comment"),g.forEach(r),d.forEach(r),c.forEach(r),j=o(t,"\n      "),C=l(t,"TBODY",{},!1);for(var b=s(C),A=0;A<L.length;A+=1)L[A].l(b);b.forEach(r),t.forEach(r),this.h()},h(){d(f,"class","svelte-vj0x0n"),d(_,"class","svelte-vj0x0n"),d(y,"class","svelte-vj0x0n"),d(T,"class","svelte-vj0x0n"),d(i,"class","svelte-vj0x0n"),d(a,"class","uk-table uk-table-divider svelte-vj0x0n")},m(e,t){h(e,a,t),u(a,n),u(n,i),u(i,f),u(f,p),u(i,m),u(i,_),u(_,E),u(i,k),u(i,y),u(y,D),u(i,x),u(i,T),u(T,$),u(a,j),u(a,C);for(var c=0;c<L.length;c+=1)L[c].m(C,null)},p(e,a){if(e.filteredFoodData){A=a.filteredFoodData;for(var n=0;n<A.length;n+=1){const t=b(a,A,n);L[n]?L[n].p(e,t):(L[n]=F(t),L[n].c(),L[n].m(C,null))}for(;n<L.length;n+=1)L[n].d(1);L.length=A.length}},d(e){e&&r(a),g(L,e)}}}function C(e){var a;return{c(){a=t("span"),this.h()},l(e){a=l(e,"SPAN",{class:!0,"uk-icon":!0},!1),s(a).forEach(r),this.h()},h(){d(a,"class","uk-margin-small-right no-icon"),d(a,"uk-icon","close")},m(e,n){h(e,a,n)},d(e){e&&r(a)}}}function A(e){var a;return{c(){a=t("span"),this.h()},l(e){a=l(e,"SPAN",{class:!0,"uk-icon":!0},!1),s(a).forEach(r),this.h()},h(){d(a,"class","uk-margin-small-right yes-icon"),d(a,"uk-icon","check")},m(e,n){h(e,a,n)},d(e){e&&r(a)}}}function F(e){var a,n,i,f,g,p,_,E,k,y,b,D,x,T=e.food.name+"",$=e.food.category+"",j=e.food.comments+"";function F(e){return!0===e.food.recommended?A:!1===e.food.recommended?C:void 0}var L=F(e),N=L&&L(e);return{c(){a=t("tr"),n=t("td"),i=t("b"),f=v(T),g=c(),p=t("td"),N&&N.c(),_=c(),E=t("td"),k=v($),y=c(),b=t("td"),D=v(j),x=c(),this.h()},l(e){a=l(e,"TR",{class:!0},!1);var t=s(a);n=l(t,"TD",{class:!0},!1);var c=s(n);i=l(c,"B",{},!1);var d=s(i);f=o(d,T),d.forEach(r),c.forEach(r),g=o(t,"\n            "),p=l(t,"TD",{class:!0},!1);var h=s(p);N&&N.l(h),h.forEach(r),_=o(t,"\n            "),E=l(t,"TD",{class:!0},!1);var u=s(E);k=o(u,$),u.forEach(r),y=o(t,"\n            "),b=l(t,"TD",{class:!0},!1);var v=s(b);D=o(v,j),v.forEach(r),x=o(t,"\n          "),t.forEach(r),this.h()},h(){d(n,"class","reduced-padding svelte-vj0x0n"),d(p,"class","reduced-padding svelte-vj0x0n"),d(E,"class","reduced-padding svelte-vj0x0n"),d(b,"class","reduced-padding svelte-vj0x0n"),d(a,"class","svelte-vj0x0n")},m(e,t){h(e,a,t),u(a,n),u(n,i),u(i,f),u(a,g),u(a,p),N&&N.m(p,null),u(a,_),u(a,E),u(E,k),u(a,y),u(a,b),u(b,D),u(a,x)},p(e,a){e.filteredFoodData&&T!==(T=a.food.name+"")&&m(f,T),L!==(L=F(a))&&(N&&N.d(1),(N=L&&L(a))&&(N.c(),N.m(p,null))),e.filteredFoodData&&$!==($=a.food.category+"")&&m(k,$),e.filteredFoodData&&j!==(j=a.food.comments+"")&&m(D,j)},d(e){e&&r(a),N&&N.d()}}}function L(e){var a,n,f,g,m,E,k,y,b,D,T,C,A,F,L,N,I,V,O,B,P,R,S,w,H,U,G,M,Y,q,z,J,K=e.categories.length>1&&x(e),Q=e.isLoading&&$(),W=e.foodData.length>0&&j(e);return{c(){a=c(),n=t("div"),f=t("div"),g=t("form"),m=t("a"),E=c(),k=t("input"),y=c(),b=t("div"),D=t("h5"),T=v("Category"),C=c(),K&&K.c(),A=c(),F=t("div"),L=t("label"),N=t("input"),I=v("\n        Recommended"),V=c(),O=t("br"),B=c(),P=t("label"),R=t("input"),S=v("\n        Not Recommended"),w=c(),H=t("br"),U=c(),G=t("label"),M=t("input"),Y=v("\n        All"),q=c(),Q&&Q.c(),z=c(),W&&W.c(),this.h()},l(e){a=o(e,"\n\n"),n=l(e,"DIV",{},!1);var t=s(n);f=l(t,"DIV",{},!1);var c=s(f);g=l(c,"FORM",{class:!0},!1);var d=s(g);m=l(d,"A",{href:!0,"uk-search-icon":!0},!1),s(m).forEach(r),E=o(d,"\n      "),k=l(d,"INPUT",{class:!0,type:!0,placeholder:!0},!1),s(k).forEach(r),d.forEach(r),y=o(c,"\n    "),b=l(c,"DIV",{class:!0},!1);var i=s(b);D=l(i,"H5",{},!1);var h=s(D);T=o(h,"Category"),h.forEach(r),C=o(i,"\n      "),K&&K.l(i),i.forEach(r),A=o(c,"\n\n    "),F=l(c,"DIV",{class:!0},!1);var u=s(F);L=l(u,"LABEL",{class:!0},!1);var v=s(L);N=l(v,"INPUT",{class:!0,type:!0,name:!0,checked:!0,value:!0},!1),s(N).forEach(r),I=o(v,"\n        Recommended"),v.forEach(r),V=o(u,"\n      "),O=l(u,"BR",{},!1),s(O).forEach(r),B=o(u,"\n      "),P=l(u,"LABEL",{class:!0},!1);var p=s(P);R=l(p,"INPUT",{class:!0,type:!0,name:!0,value:!0},!1),s(R).forEach(r),S=o(p,"\n        Not Recommended"),p.forEach(r),w=o(u,"\n      "),H=l(u,"BR",{},!1),s(H).forEach(r),U=o(u,"\n      "),G=l(u,"LABEL",{class:!0},!1);var _=s(G);M=l(_,"INPUT",{class:!0,type:!0,name:!0,value:!0},!1),s(M).forEach(r),Y=o(_,"\n        All"),_.forEach(r),u.forEach(r),c.forEach(r),q=o(t,"\n\n  "),Q&&Q.l(t),z=o(t,"\n\n  "),W&&W.l(t),t.forEach(r),this.h()},h(){document.title="Food guardian",d(m,"href",""),d(m,"uk-search-icon",""),d(k,"class","uk-search-input"),d(k,"type","search"),d(k,"placeholder","Search..."),d(g,"class","uk-search uk-search-default"),d(b,"class","uk-margin"),e.$$binding_groups[0].push(N),d(N,"class","uk-radio"),d(N,"type","radio"),d(N,"name","radio2"),N.checked=!0,N.__value=1,N.value=N.__value,d(L,"class","svelte-vj0x0n"),e.$$binding_groups[0].push(R),d(R,"class","uk-radio"),d(R,"type","radio"),d(R,"name","radio2"),R.__value=2,R.value=R.__value,d(P,"class","svelte-vj0x0n"),e.$$binding_groups[0].push(M),d(M,"class","uk-radio"),d(M,"type","radio"),d(M,"name","radio2"),M.__value=3,M.value=M.__value,d(G,"class","svelte-vj0x0n"),d(F,"class","uk-margin uk-grid-small uk-child-width-auto "),J=[i(k,"input",e.input0_input_handler),i(k,"keydown",e.updateFilters),i(N,"change",e.input1_change_handler),i(R,"change",e.input2_change_handler),i(M,"change",e.input3_change_handler)]},m(t,c){h(t,a,c),h(t,n,c),u(n,f),u(f,g),u(g,m),u(g,E),u(g,k),k.value=e.filterValue,u(f,y),u(f,b),u(b,D),u(D,T),u(b,C),K&&K.m(b,null),u(f,A),u(f,F),u(F,L),u(L,N),N.checked=N.__value===e.selected,u(L,I),u(F,V),u(F,O),u(F,B),u(F,P),u(P,R),R.checked=R.__value===e.selected,u(P,S),u(F,w),u(F,H),u(F,U),u(F,G),u(G,M),M.checked=M.__value===e.selected,u(G,Y),u(n,q),Q&&Q.m(n,null),u(n,z),W&&W.m(n,null)},p(e,a){e.filterValue&&(k.value=a.filterValue),a.categories.length>1?K?K.p(e,a):((K=x(a)).c(),K.m(b,null)):K&&(K.d(1),K=null),e.selected&&(N.checked=N.__value===a.selected),e.selected&&(R.checked=R.__value===a.selected),e.selected&&(M.checked=M.__value===a.selected),a.isLoading?Q||((Q=$()).c(),Q.m(n,z)):Q&&(Q.d(1),Q=null),a.foodData.length>0?W?W.p(e,a):((W=j(a)).c(),W.m(n,null)):W&&(W.d(1),W=null)},i:_,o:_,d(t){t&&(r(a),r(n)),K&&K.d(),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(N),1),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(R),1),e.$$binding_groups[0].splice(e.$$binding_groups[0].indexOf(M),1),Q&&Q.d(),W&&W.d(),p(J)}}}function N(e,a,n){let t=[],c=["All"],l="",s=[],r=3,o=!0,d="All",i=!1;function h(){n("filteredFoodData",s=t.filter(e=>{!function(e){switch(r){case 3:o=!0;break;case 2:o=!1===e;break;case 1:o=!0===e}}(e.recommended);let a="All"===d||e.category===d;return e.name.toLowerCase().includes(l.toLowerCase())&&o&&a}))}E(async()=>{!async function(){n("isLoading",i=!0);try{const e=await fetch("https://go-food-api.herokuapp.com/api/foods"),a=await e.json();n("foodData",t=a),t.forEach(e=>{c.includes(e.category)||c.push(e.category)}),n("filteredFoodData",s=t)}catch(e){n("isLoading",i=!1),console.log(e)}}()});return h(),{foodData:t,categories:c,filterValue:l,filteredFoodData:s,selected:r,selectedCategory:d,isLoading:i,updateFilters:h,input0_input_handler:function(){l=this.value,n("filterValue",l)},select_change_handler:function(){d=y(this),n("selectedCategory",d),n("categories",c)},input1_change_handler:function(){r=this.__value,n("selected",r)},input2_change_handler:function(){r=this.__value,n("selected",r)},input3_change_handler:function(){r=this.__value,n("selected",r)},$$binding_groups:[[]]}}export default class extends e{constructor(e){super(),a(this,e,N,L,n,[])}}
