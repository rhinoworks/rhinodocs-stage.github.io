"use strict";(self.webpackChunkrw_docs=self.webpackChunkrw_docs||[]).push([[635],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>g});var i=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=l(a),u=n,g=d["".concat(c,".").concat(u)]||d[u]||h[u]||s;return a?i.createElement(g,o(o({ref:t},p),{},{components:a})):i.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[d]="string"==typeof e?e:n,o[1]=r;for(var l=2;l<s;l++)o[l]=a[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=a(8168),n=(a(6540),a(5680));const s={sidebar_position:2},o="Analysis Tab",r={unversionedId:"aegis-analytics/project-page/schedules-tab/analysis-tab",id:"aegis-analytics/project-page/schedules-tab/analysis-tab",title:"Analysis Tab",description:"The Analysis Tab goes more in depth to the impacts of your projects schedules and how they compare between updates.",source:"@site/docs/aegis-analytics/project-page/schedules-tab/analysis-tab.md",sourceDirName:"aegis-analytics/project-page/schedules-tab",slug:"/aegis-analytics/project-page/schedules-tab/analysis-tab",permalink:"/rhinodocs-stage.github.io/docs/aegis-analytics/project-page/schedules-tab/analysis-tab",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"analyticsSidebar",previous:{title:"Manage Tab",permalink:"/rhinodocs-stage.github.io/docs/aegis-analytics/project-page/schedules-tab/manage-tab"},next:{title:"Reports Tab",permalink:"/rhinodocs-stage.github.io/docs/aegis-analytics/project-page/schedules-tab/reports-tab"}},c={},l=[{value:"Schedule Impact Analysis",id:"schedule-impact-analysis",level:2},{value:"Critical Path Comparison",id:"critical-path-comparison",level:2},{value:"Schedule Comparison",id:"schedule-comparison",level:2}],p={toc:l},d="wrapper";function h(e){let{components:t,...s}=e;return(0,n.yg)(d,(0,i.A)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"analysis-tab"},"Analysis Tab"),(0,n.yg)("p",null,"The Analysis Tab goes more in depth to the impacts of your projects schedules and how they compare between updates."),(0,n.yg)("h2",{id:"schedule-impact-analysis"},"Schedule Impact Analysis"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Impact Analysis",src:a(9691).A,width:"3424",height:"690"})),(0,n.yg)("p",null,"The Schedule Impact Analysis component helps quantify the effect of delays or change on a projects schedule. All updates are shown on a table with information about current completion dates and the impact a date change has."),(0,n.yg)("p",null,"The Data Date represents what day the update was uploaded. The current completion column displays the date for each update, and the change in days from an updates current completion to its previous update is represented in the Update Change column. The progress impact and logic impact show how many days out of the update change were from progress impacts or logic impacts."),(0,n.yg)("h2",{id:"critical-path-comparison"},"Critical Path Comparison"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Critical Path Comparison",src:a(6260).A,width:"3322",height:"312"})),(0,n.yg)("p",null,"This component utilizes a gantt chart displaying the critical path for the project up until the finish milestone. By choosing 2 updates in the Update Selector located in the header, you can compare the critical path to see how it has changed. Clicking specific activities in the grid will filter the grid for only that activity and select it for viewing convenience. To undo this, click on the activity again. There is a toggle button located in the header that allows you to quickly expand/collapse all update bars. By default, the latest 2 updates will be selected (if the project is past the baseline)."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"If the selected activity doesn't appear in the other update then it could be due to one of several factors including (but not limited to)"),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"losing its criticality (Remember this gantt chart is only displaying activities on the critical path!)"),(0,n.yg)("li",{parentName:"ul"},"being given a new activity code (we use activity codes to match the activities between updates)"),(0,n.yg)("li",{parentName:"ul"},"the path changing"),(0,n.yg)("li",{parentName:"ul"},"activities being added to the schedule"))),(0,n.yg)("h2",{id:"schedule-comparison"},"Schedule Comparison"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Schedule Comparison",src:a(266).A,width:"3314",height:"1172"})),(0,n.yg)("p",null,"The Schedule Comparison component allows you to visually compare 2 consecutive schedules uploaded to your project dashboard. While reviewing the comparison, you can show/hide relationship arrows, toggle critical/all activities, select schedules to compare, and review changes found in the comparison."),(0,n.yg)("p",null,"Changes available in the Schedule Comparison component include:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Additions (added activities)"),(0,n.yg)("li",{parentName:"ul"},"Duration (change in activity durations)"),(0,n.yg)("li",{parentName:"ul"},"Progress (activities progressing ahead/behind schedule)"),(0,n.yg)("li",{parentName:"ul"},"Constraint (activities with changed constraints)"),(0,n.yg)("li",{parentName:"ul"},"Logic (activities with logic changes)")))}h.isMDXComponent=!0},9691:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/impact-analysis-b132541346d514fa22116e4e09684d13.png"},6260:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/ss-critical-path-comparison-bcfa237dbd0d040f74c4fe8a1caf497b.png"},266:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/ss-schedule-comparison-81d512599c5f40c82465d5fec256286a.png"}}]);