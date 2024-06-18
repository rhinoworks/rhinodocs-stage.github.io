"use strict";(self.webpackChunkrw_docs=self.webpackChunkrw_docs||[]).push([[771],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=i,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return a?r.createElement(g,n(n({ref:t},p),{},{components:a})):r.createElement(g,n({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,n[1]=s;for(var c=2;c<o;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8670:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(7462),i=(a(7294),a(3905));const o={sidebar_position:3},n="Reports Tab",s={unversionedId:"aegis-analytics/project-page/schedules-tab/reports-tab",id:"aegis-analytics/project-page/schedules-tab/reports-tab",title:"Reports Tab",description:"Gantt Overview",source:"@site/docs/aegis-analytics/project-page/schedules-tab/reports-tab.md",sourceDirName:"aegis-analytics/project-page/schedules-tab",slug:"/aegis-analytics/project-page/schedules-tab/reports-tab",permalink:"/rhinodocs-stage.github.io/docs/aegis-analytics/project-page/schedules-tab/reports-tab",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"analyticsSidebar",previous:{title:"Analysis Tab",permalink:"/rhinodocs-stage.github.io/docs/aegis-analytics/project-page/schedules-tab/analysis-tab"},next:{title:"Glossary",permalink:"/rhinodocs-stage.github.io/docs/aegis-analytics/glossary"}},l={},c=[{value:"Gantt Overview",id:"gantt-overview",level:2},{value:"Gantt Buttons",id:"gantt-buttons",level:2},{value:"Column Selector",id:"column-selector",level:3},{value:"Filters",id:"filters",level:3},{value:"Group By",id:"group-by",level:3},{value:"Collapse All",id:"collapse-all",level:4},{value:"PDF Export",id:"pdf-export",level:3}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reports-tab"},"Reports Tab"),(0,i.kt)("h2",{id:"gantt-overview"},"Gantt Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Gantt Table",src:a(2351).Z,width:"3428",height:"702"})),(0,i.kt)("p",null,"The Reports Tab features Gantt data for the most recent update. This component displays all the activities for the current update. On the table to the left there are a variety of columns that show data related to the shown activities. To the right there is a chart that greatly helps visualize the timeline of your projects activities."),(0,i.kt)("h2",{id:"gantt-buttons"},"Gantt Buttons"),(0,i.kt)("h3",{id:"column-selector"},"Column Selector"),(0,i.kt)("p",null,"When clicked, a dropdown will open that shows all available columns. By default, the first 7 columns will be checked and visible. All columns can be unchecked to hide or checked to display."),(0,i.kt)("h3",{id:"filters"},"Filters"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Gantt Filters",src:a(9115).Z,width:"1300",height:"626"})),(0,i.kt)("p",null,"A 'Gantt Filters' window will appear that can help narrow down your chart to see the activities you desire. You can add as many groups which consist of as many filters as needed. The buttons 'And' or 'Or' can be selected for each group, and these allow you to look for an activity that satisfies all the filters with 'And' or at least one of the filters with 'Or'. For this example above, the filtered activities that would show up after hitting apply will be activies who either have an ID equal to 'SUB-1170' OR have a start date after 6/18/2024 AND a finish date before 3/4/2025."),(0,i.kt)("h3",{id:"group-by"},"Group By"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Gantt Group By",src:a(5175).Z,width:"3422",height:"1288"})),(0,i.kt)("p",null,"This feature allows you to group your projects activities based on their Activity Codes. You may collapse or expand any of these activity codes which helps visualize how each activity group is performing. The grouping row is distinctive by its dropdown icon and highlighted color of dark gray. You can view total values for all activities within the group like its overall start and finish times for the entire group or its total remaining days."),(0,i.kt)("h4",{id:"collapse-all"},"Collapse All"),(0,i.kt)("p",null,"When Group By is selected, this button toggles whether all activities within a group are collapsed or expanded."),(0,i.kt)("h3",{id:"pdf-export"},"PDF Export"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Gantt PDF Export",src:a(4094).Z,width:"2850",height:"1190"})),(0,i.kt)("p",null,"When clicked a pdf will be downloaded and display the current view that the component is displaying when this button is clicked. It will display the project name, update name, and update date on the top of your pdf image."))}d.isMDXComponent=!0},5175:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/gantt-group-by-42e952b4f2e295ffd78270a7149e2b41.png"},2351:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/gantt-overview-abbde281c603742913ef0c0207c58cbe.png"},4094:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/gantt-pdf-3ad25438a8a0b9e1c4cc825e4a1c5162.png"},9115:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/gantt_filters-c42c3dc60e72f07eea412e5f53510cb6.png"}}]);