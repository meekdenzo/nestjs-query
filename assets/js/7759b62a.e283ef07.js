"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[2808],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(r),p=o,v=c["".concat(i,".").concat(p)]||c[p]||d[p]||a;return r?n.createElement(v,s(s({ref:t},m),{},{components:r})):n.createElement(v,s({ref:t},m))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),o=r(4334);const a={tabItem:"tabItem_Ymn6"};function s(e){var t=e.children,r=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,s),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>k});var n=r(7462),o=r(7294),a=r(4334),s=r(2466),l=r(6550),i=r(1980),u=r(7392),m=r(12);function c(e){return function(e){var t,r;return null!=(t=null==(r=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,r=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:c(r);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function v(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,a=(0,l.k6)(),s=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,i._X)(s),(0,o.useCallback)((function(e){if(s){var t=new URLSearchParams(a.location.search);t.set(s,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[s,a])]}function f(e){var t,r,n,a,s=e.defaultValue,l=e.queryString,i=void 0!==l&&l,u=e.groupId,c=d(e),f=(0,o.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var o=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:s,tabValues:c})})),b=f[0],y=f[1],g=v({queryString:i,groupId:u}),h=g[0],T=g[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,m.Nk)(t),n=r[0],a=r[1],[n,(0,o.useCallback)((function(e){t&&a.set(e)}),[t,a])]),I=k[0],j=k[1],O=function(){var e=null!=h?h:I;return p({value:e,tabValues:c})?e:null}();return(0,o.useLayoutEffect)((function(){O&&y(O)}),[O]),{selectedValue:b,selectValue:(0,o.useCallback)((function(e){if(!p({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);y(e),T(e),j(e)}),[T,j,c]),tabValues:c}}var b=r(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,r=e.block,l=e.selectedValue,i=e.selectValue,u=e.tabValues,m=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=m.indexOf(t),n=u[r].value;n!==l&&(c(t),i(n))},p=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,o=m.indexOf(e.currentTarget)+1;r=null!=(n=m[o])?n:m[0];break;case"ArrowLeft":var a,s=m.indexOf(e.currentTarget)-1;r=null!=(a=m[s])?a:m[m.length-1]}null==(t=r)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},u.map((function(e){var t=e.value,r=e.label,s=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return m.push(e)},onKeyDown:p,onClick:d},s,{className:(0,a.Z)("tabs__item",y.tabItem,null==s?void 0:s.className,{"tabs__item--active":l===t})}),null!=r?r:t)})))}function h(e){var t=e.lazy,r=e.children,n=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var s=a.find((function(e){return e.props.value===n}));return s?(0,o.cloneElement)(s,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function T(e){var t=f(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",y.tabList)},o.createElement(g,(0,n.Z)({},e,t)),o.createElement(h,(0,n.Z)({},e,t)))}function k(e){var t=(0,b.Z)();return o.createElement(T,(0,n.Z)({key:String(t)},e))}},9878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>v,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=(r(4866),r(5162),["components"]),l={title:"v0.11.2",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","patch"]},i=void 0,u={permalink:"/nestjs-query/blog/2020/05/13/v0.11.2",editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/blog/blog/2020-05-13-v0.11.2.mdx",source:"@site/blog/2020-05-13-v0.11.2.mdx",title:"v0.11.2",description:"@InjectAssemblerQueryService",date:"2020-05-13T00:00:00.000Z",formattedDate:"May 13, 2020",tags:[{label:"releases",permalink:"/nestjs-query/blog/tags/releases"},{label:"patch",permalink:"/nestjs-query/blog/tags/patch"}],readingTime:1.84,hasTruncateMarker:!1,authors:[{name:"Doug Martin",title:"Creator",url:"https://github.com/tripss",imageURL:"https://avatars1.githubusercontent.com/u/361261?v=4"}],frontMatter:{title:"v0.11.2",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","patch"]},nextItem:{title:"v0.11.0",permalink:"/nestjs-query/blog/2020/05/07/v0.11.0"}},m={authorsImageUrls:[void 0]},c=[{value:"<code>@InjectAssemblerQueryService</code>",id:"injectassemblerqueryservice",level:2},{value:"Example",id:"example",level:3},{value:"Using Assemblers in auto-generated Resolver",id:"using-assemblers-in-auto-generated-resolver",level:2},{value:"Using Services in auto-generated Resolver",id:"using-services-in-auto-generated-resolver",level:2}],d={toc:c},p="wrapper";function v(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"injectassemblerqueryservice"},(0,a.kt)("inlineCode",{parentName:"h2"},"@InjectAssemblerQueryService")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.11.1")," a new ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectAssemblerQueryService")," decorator has been introduced to reduce boiler plate code related to creating an ",(0,a.kt)("inlineCode",{parentName:"p"},"AssemblerQueryService"),"."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Define your assembler"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.assembler.ts"',title:'"todo-item.assembler.ts"'},"import { Assembler, ClassTransformerAssembler } from '@ptc-org/nestjs-query-core';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Assembler(TodoItemDTO, TodoItemEntity)\nexport class TodoItemAssembler extends ClassTransformerAssembler<TodoItemDTO, TodoItemEntity> {\n  convertToDTO(entity: TodoItemEntity): TodoItemDTO {\n    const dto = super.convertToDTO(entity);\n    dto.age = Date.now() - entity.created.getMilliseconds();\n    return dto;\n  }\n}\n\n")),(0,a.kt)("p",null,"Now, instead of defining an ",(0,a.kt)("inlineCode",{parentName:"p"},"AssemblerQueryService")," you can use the decorator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.resolver.ts" {8}',title:'"todo-item.resolver.ts"',"{8}":!0},"import { QueryService, InjectAssemblerQueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(@InjectAssemblerQueryService(TodoItemAssembler) readonly service: QueryService<TodoItemDTO>) {\n    super(service);\n  }\n}\n")),(0,a.kt)("h2",{id:"using-assemblers-in-auto-generated-resolver"},"Using Assemblers in auto-generated Resolver"),(0,a.kt)("p",null,"There is a new ",(0,a.kt)("inlineCode",{parentName:"p"},"AssemblerClass")," option when using the ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")," to generate your resolver to using a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"Assembler"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When using the AssemblerClass option you don't need to specify the entity.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts" {12-13,17-18}',title:'"todo-item.module.ts"',"{12-13,17-18}":!0},"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemAssembler } from './todo-item.assembler';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      // Register the assembler\n      assemblers: [TodoItemAssembler],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          // specify the assembler type to use.\n          AssemblerClass: TodoItemAssembler,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n\n")),(0,a.kt)("h2",{id:"using-services-in-auto-generated-resolver"},"Using Services in auto-generated Resolver"),(0,a.kt)("p",null,"There is a new ",(0,a.kt)("inlineCode",{parentName:"p"},"ServiceClass")," option when using the ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")," to generate your resolver to a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryService"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When using the ServiceClass option you don't need to specify the entity.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts" {12-13,17-18}',title:'"todo-item.module.ts"',"{12-13,17-18}":!0},"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemService } from './todo-item.service';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      // Register the the custom QueryService\n      services: [TodoItemService],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          // specify the QueryService type to use.\n          ServiceClass: TodoItemService,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")))}v.isMDXComponent=!0}}]);