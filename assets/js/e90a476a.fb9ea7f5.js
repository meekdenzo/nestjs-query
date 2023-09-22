"use strict";(self.webpackChunknestjs_query=self.webpackChunknestjs_query||[]).push([[9465],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>y});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),s=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(r),c=n,y=p["".concat(u,".").concat(c)]||p[c]||d[c]||a;return r?o.createElement(y,l(l({ref:t},m),{},{components:r})):o.createElement(y,l({ref:t},m))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var o=r(7294),n=r(4334);const a={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,r=e.hidden,l=e.className;return o.createElement("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>k});var o=r(7462),n=r(7294),a=r(4334),l=r(2466),i=r(6550),u=r(1980),s=r(7392),m=r(12);function p(e){return function(e){var t,r;return null!=(t=null==(r=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:p(r);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function c(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function y(e){var t=e.queryString,r=void 0!==t&&t,o=e.groupId,a=(0,i.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,o=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:r,groupId:o});return[(0,u._X)(l),(0,n.useCallback)((function(e){if(l){var t=new URLSearchParams(a.location.search);t.set(l,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[l,a])]}function v(e){var t,r,o,a,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,p=d(e),v=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!c({value:r,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var n=null!=(t=o.find((function(e){return e.default})))?t:o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:p})})),f=v[0],g=v[1],T=y({queryString:u,groupId:s}),b=T[0],h=T[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,m.Nk)(t),o=r[0],a=r[1],[o,(0,n.useCallback)((function(e){t&&a.set(e)}),[t,a])]),I=k[0],j=k[1],N=function(){var e=null!=b?b:I;return c({value:e,tabValues:p})?e:null}();return(0,n.useLayoutEffect)((function(){N&&g(N)}),[N]),{selectedValue:f,selectValue:(0,n.useCallback)((function(e){if(!c({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),h(e),j(e)}),[h,j,p]),tabValues:p}}var f=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function T(e){var t=e.className,r=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,m=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=m.indexOf(t),o=s[r].value;o!==i&&(p(t),u(o))},c=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var o,n=m.indexOf(e.currentTarget)+1;r=null!=(o=m[n])?o:m[0];break;case"ArrowLeft":var a,l=m.indexOf(e.currentTarget)-1;r=null!=(a=m[l])?a:m[m.length-1]}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,l=e.attributes;return n.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return m.push(e)},onKeyDown:c,onClick:d},l,{className:(0,a.Z)("tabs__item",g.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function b(e){var t=e.lazy,r=e.children,o=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var l=a.find((function(e){return e.props.value===o}));return l?(0,n.cloneElement)(l,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})})))}function h(e){var t=v(e);return n.createElement("div",{className:(0,a.Z)("tabs-container",g.tabList)},n.createElement(T,(0,o.Z)({},e,t)),n.createElement(b,(0,o.Z)({},e,t)))}function k(e){var t=(0,f.Z)();return n.createElement(h,(0,o.Z)({key:String(t)},e))}},2322:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),l=r(4866),i=r(5162),u=["components"],s={title:"v0.11.0",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","minor"]},m=void 0,p={permalink:"/nestjs-query/blog/2020/05/07/v0.11.0",editUrl:"https://github.com/tripss/nestjs-query/edit/master/documentation/blog/blog/2020-05-07-v0.11.0.mdx",source:"@site/blog/2020-05-07-v0.11.0.mdx",title:"v0.11.0",description:"@InjectQueryService",date:"2020-05-07T00:00:00.000Z",formattedDate:"May 7, 2020",tags:[{label:"releases",permalink:"/nestjs-query/blog/tags/releases"},{label:"minor",permalink:"/nestjs-query/blog/tags/minor"}],readingTime:4.085,hasTruncateMarker:!1,authors:[{name:"Doug Martin",title:"Creator",url:"https://github.com/tripss",imageURL:"https://avatars1.githubusercontent.com/u/361261?v=4"}],frontMatter:{title:"v0.11.0",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/tripss",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","minor"]},prevItem:{title:"v0.11.2",permalink:"/nestjs-query/blog/2020/05/13/v0.11.2"},nextItem:{title:"v0.8.6",permalink:"/nestjs-query/blog/2020/04/22/v0.8.6"}},d={authorsImageUrls:[void 0]},c=[{value:"<code>@InjectQueryService</code>",id:"injectqueryservice",level:3},{value:"Relation Decorators",id:"relation-decorators",level:2},{value:"@Relation",id:"relation",level:3},{value:"@Connection",id:"connection",level:3},{value:"Auto Generated Resolvers",id:"auto-generated-resolvers",level:2},{value:"Example",id:"example",level:3},{value:"Previously",id:"previously",level:4},{value:"New",id:"new",level:4}],y={toc:c},v="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,u);return(0,a.kt)(v,(0,o.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"injectqueryservice"},(0,a.kt)("inlineCode",{parentName:"h3"},"@InjectQueryService")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.11.x")," an new decorator was added ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectQueryService"),", this decorator replaces the ORM specific decorators:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@InjectTypeOrmQueryService")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@InjectSequelizeQueryService"))),(0,a.kt)("p",null,"To migrate replace all ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectTypeOrmQueryService")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectSequelizeQueryService")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectQueryService"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You still need to import the ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQueryTypeOrmModule")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQuerySequelizeModule")," to use ",(0,a.kt)("inlineCode",{parentName:"p"},"@InjectQueryService"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { QueryService, InjectQueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(@InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>) {\n    super(service);\n  }\n}\n")),(0,a.kt)("h2",{id:"relation-decorators"},"Relation Decorators"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.11.x")," two new decorators were introduced from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ptc-org/nestjs-query-graphql")," package. The ",(0,a.kt)("inlineCode",{parentName:"p"},"@Relation")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@Connection")," allow specifying relations on the DTO rather than passing them in as options to the ",(0,a.kt)("inlineCode",{parentName:"p"},"CRUDResolver"),"."),(0,a.kt)("h3",{id:"relation"},"@Relation"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@Relation")," decorator allow specifying a single relation (e.g. one-to-one, many-to-one)."),(0,a.kt)("p",null,"In this example we add a relation for a ",(0,a.kt)("inlineCode",{parentName:"p"},"todoItem"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"import { FilterableField, Relation } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\nimport { TodoItemDTO } from '../todo-item/todo-item.dto.ts';\n\n@ObjectType('SubTask')\n@Relation('todoItem', () => TodoItemDTO, { update: { enabled: true } })\nexport class SubTaskDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n\n  @FilterableField()\n  todoItemId!: string;\n}\n")),(0,a.kt)("h3",{id:"connection"},"@Connection"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@Connection")," decorator allow specifying a connection relation (e.g. many-to-many, one-to-many)."),(0,a.kt)("p",null,"In this example we add a connection for ",(0,a.kt)("inlineCode",{parentName:"p"},"subTasks"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{6}","{6}":!0},"import { FilterableField, Connection } from '@ptc-org/nestjs-query-graphql';\nimport { ObjectType, ID, GraphQLISODateTime } from '@nestjs/graphql';\nimport { SubTaskDTO } from '../sub-task/sub-task.dto'\n\n@ObjectType('TodoItem')\n@Connection('subTasks', () => SubTaskDTO, { update: { enabled: true } })\nexport class TodoItemDTO {\n  @FilterableField(() => ID)\n  id!: string;\n\n  @FilterableField()\n  title!: string;\n\n  @FilterableField()\n  completed!: boolean;\n\n  @FilterableField(() => GraphQLISODateTime)\n  created!: Date;\n\n  @FilterableField(() => GraphQLISODateTime)\n  updated!: Date;\n}\n")),(0,a.kt)("h2",{id:"auto-generated-resolvers"},"Auto Generated Resolvers"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.11.x")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"@nestjs-query/query-graph")," package is now able to automatically create your resolvers."),(0,a.kt)("p",null,"To start using this feature update your module to import the ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When used with the new relation decorators, you can remove a lot of boiler plate.")),(0,a.kt)(l.Z,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"typeorm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts"',title:'"todo-item.module.ts"'},"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n"))),(0,a.kt)(i.Z,{value:"sequelize",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts"',title:'"todo-item.module.ts"'},"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQuerySequelizeModule } from '@ptc-org/nestjs-query-sequelize';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQuerySequelizeModule.forFeature([TodoItemEntity])],\n      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")))),(0,a.kt)("p",null,"Once you have updated your module you can remove the old resolver."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Be sure to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQueryTypeOrmModule")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQuerySequelizeModule")," to the imports in ",(0,a.kt)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule"),".")),(0,a.kt)("p",null,"To read more about the auto-generated resolvers check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/graphql/resolvers"},"resolvers docs")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("h4",{id:"previously"},"Previously"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.resolver.ts"',title:'"todo-item.resolver.ts"'},"import { QueryService, InjectQueryService } from '@ptc-org/nestjs-query-core';\nimport { CRUDResolver } from '@ptc-org/nestjs-query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemInputDTO } from './todo-item.input';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Resolver()\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(\n      @InjectQueryService(TodoItemEntity) readonly service: QueryService<TodoItemEntity>\n  ) {\n    super(service);\n  }\n}\n")),(0,a.kt)(l.Z,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"typeorm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts"',title:'"todo-item.module.ts"'},"import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemResolver } from './todo-item.resolver';\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n})\nexport class TodoItemModule {}\n\n"))),(0,a.kt)(i.Z,{value:"sequelize",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts"',title:'"todo-item.module.ts"'},"import { NestjsQuerySequelizeModule } from '@ptc-org/nestjs-query-sequelize';\nimport { Module } from '@nestjs/common';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemResolver } from './todo-item.resolver';\n\n@Module({\n  providers: [TodoItemResolver],\n  imports: [NestjsQuerySequelizeModule.forFeature([TodoItemEntity])],\n})\nexport class TodoItemModule {}\n\n")))),(0,a.kt)("h4",{id:"new"},"New"),(0,a.kt)(l.Z,{defaultValue:"typeorm",groupId:"orm",values:[{label:"TypeOrm",value:"typeorm"},{label:"Sequelize",value:"sequelize"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"typeorm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts"',title:'"todo-item.module.ts"'},"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n"))),(0,a.kt)(i.Z,{value:"sequelize",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts"',title:'"todo-item.module.ts"'},"import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';\nimport { NestjsQuerySequelizeModule } from '@ptc-org/nestjs-query-sequelize';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQuerySequelizeModule.forFeature([TodoItemEntity])],\n      resolvers: [{ DTOClass: TodoItemDTO, EntityClass: TodoItemEntity }],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")))))}f.isMDXComponent=!0}}]);