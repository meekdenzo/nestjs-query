"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[2869],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,m=u["".concat(p,".").concat(d)]||u[d]||y[d]||s;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},953:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),i=["components"],a={title:"Getting Started"},p=void 0,c={unversionedId:"persistence/typegoose/getting-started",id:"persistence/typegoose/getting-started",title:"Getting Started",description:"The @ptc-org/nestjs-query-typegoose package provides an implementation of @ptc-org/nestjs-query-core QueryService.",source:"@site/docs/persistence/typegoose/getting-started.md",sourceDirName:"persistence/typegoose",slug:"/persistence/typegoose/getting-started",permalink:"/nestjs-query/docs/persistence/typegoose/getting-started",draft:!1,editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/docs/persistence/typegoose/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started"},sidebar:"docs",previous:{title:"Serialization",permalink:"/nestjs-query/docs/persistence/mongoose/serialization"},next:{title:"Relations",permalink:"/nestjs-query/docs/persistence/typegoose/relations"}},l={},u=[{value:"Installation",id:"installation",level:2},{value:"Docs",id:"docs",level:2}],y={toc:u},d="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)(d,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"@ptc-org/nestjs-query-typegoose")," package provides an implementation of ",(0,s.kt)("inlineCode",{parentName:"p"},"@ptc-org/nestjs-query-core")," ",(0,s.kt)("a",{parentName:"p",href:"/nestjs-query/docs/concepts/services"},"QueryService"),"."),(0,s.kt)("p",null,"This package is built using ",(0,s.kt)("a",{parentName:"p",href:"https://typegoose.github.io/typegoose/"},"typegoose")," and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kpfromer/nestjs-typegoose#readme"},"nestjs-typegoose"),". If you are unfamiliar with them I suggest you read their documentation first."),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/nestjs-query/docs/introduction/install#nestjs-queryquery-typegoose"},"Installation Docs")),(0,s.kt)("h2",{id:"docs"},"Docs"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Read the ",(0,s.kt)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/services"},"QueryService docs")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/typegoose/relations"},"Relations")," - How to work with relations/references in ",(0,s.kt)("inlineCode",{parentName:"li"},"typegoose")," with ",(0,s.kt)("inlineCode",{parentName:"li"},"nestjs-query")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/typegoose/custom-service"},"Custom Service")," - Example custom service"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/typegoose/serialization"},"Serialization")," - How to serialize ",(0,s.kt)("inlineCode",{parentName:"li"},"typegoose")," models.")))}m.isMDXComponent=!0}}]);