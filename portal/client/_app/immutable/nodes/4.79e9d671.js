import{s as et,f as m,a as k,l as E,g as u,h as w,W as L,c as A,m as I,d as f,j as d,i as S,x as a,o as at}from"../chunks/scheduler.35986cdd.js";import{S as nt,i as st,b as N,d as V,m as z,a as J,t as K,e as Q}from"../chunks/index.f0d1f3f0.js";import{g as R}from"../chunks/navigation.d418afde.js";import{B as T}from"../chunks/Button.040683f0.js";function ot(r){let e;return{c(){e=E("User account")},l(t){e=I(t,"User account")},m(t,s){S(t,e,s)},d(t){t&&f(e)}}}function rt(r){let e;return{c(){e=E("Add Company")},l(t){e=I(t,"Add Company")},m(t,s){S(t,e,s)},d(t){t&&f(e)}}}function lt(r){let e;return{c(){e=E("Add Creator")},l(t){e=I(t,"Add Creator")},m(t,s){S(t,e,s)},d(t){t&&f(e)}}}function ct(r){let e,t,s,X="Getting Started with splearn",P,_,Y="Welcome to splearn! Follow these steps to get started:",q,o,h,B,p,G,b,M,$,O,v,U,g,W,x,Z="Once your creator account is ready, start adding projects and courses.",D,y,tt="Start your coding journey with splearn today!",j;return p=new T({props:{class:"mb-4",color:"green",$$slots:{default:[ot]},$$scope:{ctx:r}}}),p.$on("click",r[0]),$=new T({props:{color:"green",class:"mb-4",$$slots:{default:[rt]},$$scope:{ctx:r}}}),$.$on("click",r[1]),g=new T({props:{color:"green",class:"mb-4",$$slots:{default:[lt]},$$scope:{ctx:r}}}),g.$on("click",r[2]),{c(){e=m("main"),t=m("div"),s=m("h2"),s.textContent=X,P=k(),_=m("p"),_.textContent=Y,q=k(),o=m("ol"),h=m("li"),B=E("Create a user account. "),N(p.$$.fragment),G=k(),b=m("li"),M=E("Create a company account by providing company details. "),N($.$$.fragment),O=k(),v=m("li"),U=E("After creating a company, set up a creator account for managing content. "),N(g.$$.fragment),W=k(),x=m("li"),x.textContent=Z,D=k(),y=m("p"),y.textContent=tt,this.h()},l(n){e=u(n,"MAIN",{class:!0});var l=w(e);t=u(l,"DIV",{class:!0});var c=w(t);s=u(c,"H2",{class:!0,"data-svelte-h":!0}),L(s)!=="svelte-17isytg"&&(s.textContent=X),P=A(c),_=u(c,"P",{class:!0,"data-svelte-h":!0}),L(_)!=="svelte-1kc9i29"&&(_.textContent=Y),q=A(c),o=u(c,"OL",{class:!0});var i=w(o);h=u(i,"LI",{class:!0});var C=w(h);B=I(C,"Create a user account. "),V(p.$$.fragment,C),C.forEach(f),G=A(i),b=u(i,"LI",{class:!0});var F=w(b);M=I(F,"Create a company account by providing company details. "),V($.$$.fragment,F),F.forEach(f),O=A(i),v=u(i,"LI",{class:!0});var H=w(v);U=I(H,"After creating a company, set up a creator account for managing content. "),V(g.$$.fragment,H),H.forEach(f),W=A(i),x=u(i,"LI",{class:!0,"data-svelte-h":!0}),L(x)!=="svelte-1u4fxqv"&&(x.textContent=Z),i.forEach(f),D=A(c),y=u(c,"P",{class:!0,"data-svelte-h":!0}),L(y)!=="svelte-m3j4od"&&(y.textContent=tt),c.forEach(f),l.forEach(f),this.h()},h(){d(s,"class","text-2xl font-semibold mb-4 text-gray-800"),d(_,"class","text-gray-600 mb-4"),d(h,"class","mb-2"),d(b,"class","mb-2"),d(v,"class","mb-2"),d(x,"class","mb-2"),d(o,"class","list-decimal pl-6 text-gray-600 mb-6"),d(y,"class","text-gray-600"),d(t,"class","bg-white p-8 rounded shadow-md w-full sm:max-w-md"),d(e,"class","bg-gray-100 min-h-screen flex items-center justify-center")},m(n,l){S(n,e,l),a(e,t),a(t,s),a(t,P),a(t,_),a(t,q),a(t,o),a(o,h),a(h,B),z(p,h,null),a(o,G),a(o,b),a(b,M),z($,b,null),a(o,O),a(o,v),a(v,U),z(g,v,null),a(o,W),a(o,x),a(t,D),a(t,y),j=!0},p(n,[l]){const c={};l&8&&(c.$$scope={dirty:l,ctx:n}),p.$set(c);const i={};l&8&&(i.$$scope={dirty:l,ctx:n}),$.$set(i);const C={};l&8&&(C.$$scope={dirty:l,ctx:n}),g.$set(C)},i(n){j||(J(p.$$.fragment,n),J($.$$.fragment,n),J(g.$$.fragment,n),j=!0)},o(n){K(p.$$.fragment,n),K($.$$.fragment,n),K(g.$$.fragment,n),j=!1},d(n){n&&f(e),Q(p),Q($),Q(g)}}}function it(r){return at(()=>{document.title="Getting Started | splearn"}),[()=>R("/sign-up"),()=>R("/company"),()=>R("/creator")]}class pt extends nt{constructor(e){super(),st(this,e,it,ct,et,{})}}export{pt as component};