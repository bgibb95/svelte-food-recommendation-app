import{_ as t,a as n,b as s,c as o,i as r,s as e,d as a,S as f,e as c,t as i,f as u,g as h,h as l,j as p,k as g,m as v,o as m,z as d,q as b,n as j,J as E}from"./index.79d47b8e.js";function x(t,n,s){var o=Object.create(t);return o.post=n[s],o}function q(t){var n,s,o,r,e=t.post.title+"";return{c:function(){n=c("li"),s=c("a"),o=i(e),this.h()},l:function(t){n=u(t,"LI",{},!1);var r=h(n);s=u(r,"A",{rel:!0,href:!0},!1);var a=h(s);o=l(a,e),a.forEach(p),r.forEach(p),this.h()},h:function(){g(s,"rel","prefetch"),g(s,"href",r="blog/"+t.post.slug)},m:function(t,r){v(t,n,r),m(n,s),m(s,o)},p:function(t,n){t.posts&&e!==(e=n.post.title+"")&&d(o,e),t.posts&&r!==(r="blog/"+n.post.slug)&&g(s,"href",r)},d:function(t){t&&p(n)}}}function L(t){for(var n,s,o,r,e,a=t.posts,f=[],d=0;d<a.length;d+=1)f[d]=q(x(t,a,d));return{c:function(){n=b(),s=c("h1"),o=i("Recent posts"),r=b(),e=c("ul");for(var t=0;t<f.length;t+=1)f[t].c();this.h()},l:function(t){n=l(t,"\n\n"),s=u(t,"H1",{},!1);var a=h(s);o=l(a,"Recent posts"),a.forEach(p),r=l(t,"\n\n"),e=u(t,"UL",{class:!0},!1);for(var c=h(e),i=0;i<f.length;i+=1)f[i].l(c);c.forEach(p),this.h()},h:function(){document.title="Blog",g(e,"class","svelte-1frg2tf")},m:function(t,a){v(t,n,a),v(t,s,a),m(s,o),v(t,r,a),v(t,e,a);for(var c=0;c<f.length;c+=1)f[c].m(e,null)},p:function(t,n){if(t.posts){a=n.posts;for(var s=0;s<a.length;s+=1){var o=x(n,a,s);f[s]?f[s].p(t,o):(f[s]=q(o),f[s].c(),f[s].m(e,null))}for(;s<f.length;s+=1)f[s].d(1);f.length=a.length}},i:j,o:j,d:function(t){t&&(p(n),p(s),p(r),p(e)),E(f,t)}}}function R(t){t.params,t.query;return this.fetch("blog.json").then(function(t){return t.json()}).then(function(t){return{posts:t}})}function k(t,n,s){var o=n.posts;return t.$set=function(t){"posts"in t&&s("posts",o=t.posts)},{posts:o}}export default(function(c){function i(t){var f;return n(this,i),f=s(this,o(i).call(this)),r(a(f),t,k,L,e,["posts"]),f}return t(i,f),i}());export{R as preload};