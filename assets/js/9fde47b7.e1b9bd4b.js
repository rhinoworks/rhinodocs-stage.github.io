"use strict";(self.webpackChunkrw_docs=self.webpackChunkrw_docs||[]).push([[905],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=l(a),u=n,f=h["".concat(c,".").concat(u)]||h[u]||p[u]||i;return a?r.createElement(f,o(o({ref:t},d),{},{components:a})):r.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:5},o="Cost Tab (Beta)",s={unversionedId:"aegis-analytics/project-page/cost-tab",id:"aegis-analytics/project-page/cost-tab",title:"Cost Tab (Beta)",description:"The Cost Tab has every detail needed for planning the finances of your project in one convenient, easy to read area. Costs from your schedule are plotted and track your project's planned, current, and completion costs. For each of these charts, the month of the current update's data date is highlighted in blue.",source:"@site/docs/aegis-analytics/project-page/cost-tab.md",sourceDirName:"aegis-analytics/project-page",slug:"/aegis-analytics/project-page/cost-tab",permalink:"/rhinodocs-stage.github.io/docs/aegis-analytics/project-page/cost-tab",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"analyticsSidebar",previous:{title:"Quality Tab",permalink:"/rhinodocs-stage.github.io/docs/aegis-analytics/project-page/quality-tab"},next:{title:"Risk Tab",permalink:"/rhinodocs-stage.github.io/docs/aegis-analytics/project-page/risk-tab"}},c={},l=[{value:"S-Curve (Beta)",id:"s-curve-beta",level:2},{value:"Baseline Historic Performance (Beta)",id:"baseline-historic-performance-beta",level:2},{value:"Schedule Performance Index (Beta)",id:"schedule-performance-index-beta",level:2},{value:"Activity Cost Details (Beta)",id:"activity-cost-details-beta",level:2}],d={toc:l};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cost-tab-beta"},"Cost Tab (Beta)"),(0,n.kt)("p",null,"The Cost Tab has every detail needed for planning the finances of your project in one convenient, easy to read area. Costs from your schedule are plotted and track your project's planned, current, and completion costs. For each of these charts, the month of the current update's data date is highlighted in blue."),(0,n.kt)("h2",{id:"s-curve-beta"},"S-Curve (Beta)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"S-Curve",src:a(6927).Z,width:"3416",height:"694"})),(0,n.kt)("p",null,"This chart shows all months that have cost data available in the project. The month with a light blue column background is the month of the most recent project update. Prior to the current updates month, there is an actual cost for the month and its early/late baseline costs for the month. To the right of this month are cost forecasts based on the actual previous costs as well as the early and late baseline costs."),(0,n.kt)("h2",{id:"baseline-historic-performance-beta"},"Baseline Historic Performance (Beta)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Baseline Historic Performance",src:a(2239).Z,width:"3420",height:"694"})),(0,n.kt)("p",null,"The Baseline Historic Performance Chart compares the baseline planned cost (both early and late) with the actual cost for all previous months and the current month. The values for specific months are shown as bars and the cumulative values are charted as lines."),(0,n.kt)("h2",{id:"schedule-performance-index-beta"},"Schedule Performance Index (Beta)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Schedule Performance Index",src:a(7598).Z,width:"3414",height:"686"})),(0,n.kt)("p",null,"This component shows the periodic spi for the current month and the cumulative spi. Here's what different SPI values mean:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SPI > 1: Project is ahead of schedule"),(0,n.kt)("li",{parentName:"ul"},"SPI = 1: Project is on schedule"),(0,n.kt)("li",{parentName:"ul"},"SPI < 1: Project is behind schedule")),(0,n.kt)("p",null,"You will see a green bar if your periodic spi is greater than or equal to 1 with a red bar otherwise."),(0,n.kt)("h2",{id:"activity-cost-details-beta"},"Activity Cost Details (Beta)"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Activity Cost Details",src:a(977).Z,width:"3416",height:"1278"})),(0,n.kt)("p",null,"The Activity Cost Detail component is a table of all the activities and their related cost data. You may filter the table by its overall activity code type or any number of activity code subtypes within that activity code type. Only one activity code type can be selected at a time due to the fact that an activity can belong in multiple activity code types."),(0,n.kt)("p",null,"In addition to the activity code filter, you may switch the between all activities in the current update, activities with actual finish dates, and planned activities by selecting the respective button to the right of 'Activity Code Filter'."),(0,n.kt)("p",null,"When 'Planned' is selected, you may change the lookahead days to display planned activities within 30, 60, or 90 days of the most recent update's data date."))}h.isMDXComponent=!0},977:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/activity-cost-details-4d96f89ef9ed9c3ae4a376417bd2699c.png"},2239:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/baseline-historic-performance-11ccb0e7acf2565d41f282f83efef77b.png"},6927:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/s-curve-6776adf4857339e55c345da9b7be3995.png"},7598:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/spi-e8452c1964c1620c7eef9723b9648d60.png"}}]);