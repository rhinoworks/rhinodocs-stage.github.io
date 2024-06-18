"use strict";(self.webpackChunkrw_docs=self.webpackChunkrw_docs||[]).push([[911],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var o=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=n(e,["components","mdxType","originalType","parentName"]),p=c(a),u=i,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return a?o.createElement(m,s(s({ref:t},h),{},{components:a})):o.createElement(m,s({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n[p]="string"==typeof e?e:i,s[1]=n;for(var c=2;c<r;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4085:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>c});var o=a(7462),i=(a(7294),a(3905));const r={sidebar_position:5},s="Portfolio Page",n={unversionedId:"aegis-analytics/portfolio-page/portfolio-page",id:"aegis-analytics/portfolio-page/portfolio-page",title:"Portfolio Page",description:"Aegis Analytics Portfolio Dashboard contains all projects uploaded to the Platform by your organization. From this view, you can manage your projects from a birds eye view and add new projects. Individuals who do not have access to all sub-companies or all projects within your organization will only see projects assigned to the company they belong to and the projects they are assigned to as POC or as a viewer. Company and project assignments and viewers can be fine-tuned in the Rhino.works Account Settings by your organization's administrator.",source:"@site/docs/aegis-analytics/portfolio-page/portfolio-page.md",sourceDirName:"aegis-analytics/portfolio-page",slug:"/aegis-analytics/portfolio-page/",permalink:"/rhinodocs-stage.github.io/docs/aegis-analytics/portfolio-page/",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"analyticsSidebar",previous:{title:"Scores / KPIs",permalink:"/rhinodocs-stage.github.io/docs/aegis-analytics/scores-kpis"},next:{title:"Project Page",permalink:"/rhinodocs-stage.github.io/docs/aegis-analytics/project-page/"}},l={},c=[{value:"Create a New Project",id:"create-a-new-project",level:2},{value:"Portfolio Banners",id:"portfolio-banners",level:2},{value:"Project Analysis Banner",id:"project-analysis-banner",level:3},{value:"Projects Summary",id:"projects-summary",level:4},{value:"Projects Breakdown",id:"projects-breakdown",level:4},{value:"Portfolio Summary",id:"portfolio-summary",level:4},{value:"Cost Analysis Banner",id:"cost-analysis-banner",level:3},{value:"Costs Summary",id:"costs-summary",level:4},{value:"Baseline Historic Performance",id:"baseline-historic-performance",level:4},{value:"Periodic Remaining Costs",id:"periodic-remaining-costs",level:4},{value:"Cumulative Remaining Costs",id:"cumulative-remaining-costs",level:4},{value:"Risk Analysis Banner",id:"risk-analysis-banner",level:3},{value:"Risk Summary",id:"risk-summary",level:4},{value:"Portfolio Risk",id:"portfolio-risk",level:4},{value:"Categories of Risk",id:"categories-of-risk",level:4},{value:"Heat Map",id:"heat-map",level:4},{value:"Projects Table",id:"projects-table",level:2},{value:"View",id:"view",level:3},{value:"Export Data (XLSX)",id:"export-data-xlsx",level:3},{value:"Maximize",id:"maximize",level:3},{value:"Layouts",id:"layouts",level:3},{value:"Column Selector",id:"column-selector",level:3},{value:"Filters",id:"filters",level:3},{value:"Quick Filter",id:"quick-filter",level:4},{value:"Google Maps Integration",id:"google-maps-integration",level:2}],h={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"portfolio-page"},"Portfolio Page"),(0,i.kt)("p",null,"Aegis Analytics Portfolio Dashboard contains all projects uploaded to the Platform by your organization. From this view, you can manage your projects from a birds eye view and add new projects. Individuals who do not have access to all sub-companies or all projects within your organization will only see projects assigned to the company they belong to and the projects they are assigned to as POC or as a viewer. Company and project assignments and viewers can be fine-tuned in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/rhinoworks-account/settings"},"Rhino.works Account Settings")," by your organization's administrator."),(0,i.kt)("h2",{id:"create-a-new-project"},"Create a New Project"),(0,i.kt)("p",null,'Click "New Project" (the plus icon) in the top right corner of the dashboard page to begin the ',(0,i.kt)("a",{parentName:"p",href:"/docs/aegis-analytics/navbar#new-project-form"},"New Project Workflow"),". From this workflow you will be asked to fill in basic information about the project as well as uploading the Baseline of the project to get started."),(0,i.kt)("h2",{id:"portfolio-banners"},"Portfolio Banners"),(0,i.kt)("p",null,"The top row of components between the ",(0,i.kt)("a",{parentName:"p",href:"/docs/aegis-analytics/navbar"},"navbar")," and the ",(0,i.kt)("a",{parentName:"p",href:"#projects-table"},"Projects Table")," are all part of a banner. For now there are 2 banners, the ",(0,i.kt)("a",{parentName:"p",href:"#project-analysis-banner"},"Project Analysis Banner")," and the ",(0,i.kt)("a",{parentName:"p",href:"#risk-analysis-banner"},"Risk Analysis Banner"),", but more are coming in future releases"),(0,i.kt)("h3",{id:"project-analysis-banner"},"Project Analysis Banner"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Project Analysis Banner",src:a(4981).Z,width:"1896",height:"232"})),(0,i.kt)("p",null,"This is the default active banner that can be identified based on all widgets in the banner having the Aegis blue background color for their headers. By taking a look at this banner, you can identify quickly an overview of how all projects in your portfolio are tracking, both by their progress and their health. By interacting with the individual cards, you can quickly fine tune the ",(0,i.kt)("a",{parentName:"p",href:"#projects-table"},"Projects Table")," to see these metrics for a more specific subset of your projects. Here is a rundown of the widgets that make up the Project Analysis Banner:"),(0,i.kt)("h4",{id:"projects-summary"},"Projects Summary"),(0,i.kt)("p",null,"The Projects Summary widget is meant to quickly let you know how many active projects you have, and how many of those active projects are missing an update. We are rather generous with our definition of missing an update, where a project will only be marked as such if the data date of the latest upload is 45+ calendar days old, so this can be taken a sign to upload a newer update to a project if one exists."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can always check which schedule files you have uploaded to a project, along with relevant dates, in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/aegis-analytics/project-page/schedules-tab"},"Schedules Tab")," on a project's detail page.")),(0,i.kt)("p",null,"These 2 widgets can also be clicked to apply a ",(0,i.kt)("a",{parentName:"p",href:"#quick-filter"},"quick filter")," to the Projects Table."),(0,i.kt)("admonition",{title:"Example",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'If you click the "Missing Updates" card, the card\'s background color will change from white to another color (in this case orange) to let you know this quick filter is active. The Projects Table will then have a temporary filter applied on it that sets the Project Type to Active and the Update Status to Missing. This then adjusts the projects showing in the Projects Table to be a subset of the ones it was previously showing that are missing and active. To go back to how the list was before, simply click on the "Missing Updates" card once more to remove the quick filter.')),(0,i.kt)("h4",{id:"projects-breakdown"},"Projects Breakdown"),(0,i.kt)("p",null,"This widget is a quick summary of the projects based on their update variance. These individual cards can also be clicked on to apply a quick filter."),(0,i.kt)("h4",{id:"portfolio-summary"},"Portfolio Summary"),(0,i.kt)("p",null,"The Portfolio Summary component takes the ",(0,i.kt)("a",{parentName:"p",href:"/docs/aegis-analytics/scores-kpis#project-score"},"Project Score"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/aegis-analytics/scores-kpis#progress-score"},"Progress Score"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/aegis-analytics/scores-kpis#qc-score"},"QC Score"),", and ",(0,i.kt)("a",{parentName:"p",href:"/docs/aegis-analytics/scores-kpis#predictability-score"},"Predictability Score")," for the latest update of every project currently showing in the ",(0,i.kt)("a",{parentName:"p",href:"#projects-table"},"Projects Table")," and averages them out per score. These scores are then also plotted for the last 6 months on a chart on the right, with the Project Score being selected by default. Clicking a different score's card will toggle the chart on the right."),(0,i.kt)("h3",{id:"cost-analysis-banner"},"Cost Analysis Banner"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Risk Analysis Banner",src:a(3413).Z,width:"1895",height:"230"})),(0,i.kt)("p",null,"The Cost Analysis Banner has a focus on projects that are cost loaded (projects equipped with valid cost data available). To view cost analytics, click the Cost button on the leftmost side of the banner. This will switch the Header Metrics over to Cost View and will filter your projects to only those that are cost loaded. Any time a banner is changed, the cost loaded and risk metric filters all get reset to the default for that banner. Here is a breakdown of the widgets inside this banner:"),(0,i.kt)("h4",{id:"costs-summary"},"Costs Summary"),(0,i.kt)("p",null,"This section shows the number of active cost loaded projects as well as the Current SPI which is the average of the latest cumulative SPI for all projects showing. You may click the Active Cost Loaded Projects button to apply a quick filter for the project table. This quick filter will keep all other active filters but will change the Cost-Loaded and Project Type filters to only show cost loaded and active projects."),(0,i.kt)("h4",{id:"baseline-historic-performance"},"Baseline Historic Performance"),(0,i.kt)("p",null,"This chart takes the latest month with available cost data from the shown projects and displays that month as well as the previous 5 months. The Actual cost of the month is the blue bar and the green bar correlates to the Baseline cost for that month. "),(0,i.kt)("h4",{id:"periodic-remaining-costs"},"Periodic Remaining Costs"),(0,i.kt)("p",null,"This chart starts at the next month after the latest month in the Baseline Historic Performance and shows the next 5 months. The early and late periodic remaining costs are displayed for each month. The average is the cost at the average date between early and late. "),(0,i.kt)("h4",{id:"cumulative-remaining-costs"},"Cumulative Remaining Costs"),(0,i.kt)("p",null,"This chart uses the same months as Periodic Remaining Costs since it is also regarding future months without actual costs yet. Shown are the cumulative remaining costs for all shown projects at each given month. There are bars for the early, average, and late cost just like in Periodic Remaining Costs. You will notice this chart tends to converge together as you move right."),(0,i.kt)("h3",{id:"risk-analysis-banner"},"Risk Analysis Banner"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Risk Analysis Banner",src:a(1893).Z,width:"1894",height:"230"})),(0,i.kt)("p",null,"The Risk Analysis Banner has a focus on projects that have risk metrics type 'Monte Carlo - Performance Factor' and 'Monte Carlo - Risk Register'. To view risk analytics, click the Risk button on the leftmost side of the banner. This will switch the Header Metrics over to Risk View and will filter your projects to only those that have Risk Metrics enabled. Here is a breakdown of the widgets inside this banner:"),(0,i.kt)("h4",{id:"risk-summary"},"Risk Summary"),(0,i.kt)("p",null,"This section is identical to the ",(0,i.kt)("a",{parentName:"p",href:"#projects-summary"},"Projects Summary")," section on the Project Analysis Banner, except these metrics are for risk enabled projects and there is an additional card for Projects that slipped last period (similar to the Slipped from the Project Analysis' ",(0,i.kt)("a",{parentName:"p",href:"#projects-breakdown"},"Projects Breakdown"),")."),(0,i.kt)("h4",{id:"portfolio-risk"},"Portfolio Risk"),(0,i.kt)("p",null,"The Portfolio Risk component is similar to the Project Analysis' ",(0,i.kt)("a",{parentName:"p",href:"#portfolio-summary"},"Portfolio Summary")," but in this case we only show the Risk Score."),(0,i.kt)("h4",{id:"categories-of-risk"},"Categories of Risk"),(0,i.kt)("p",null,"A new section, Categories of Risk charts three fields that are filled out in the form when creating risks in a risk register: the category of risk, the owner of the risk, and the status of the risk. These are combined across all risk enabled projects and plotted as percentages on the bar or as a table for quick comparisons."),(0,i.kt)("h4",{id:"heat-map"},"Heat Map"),(0,i.kt)("p",null,"The Heat Map charts each risk from each project's risk register (from projects that use risk registers) based on its likelihood to occur and the impact that risk will have. There is a third dimension on this chart as well that counts the number of risks with the same likelihood/impact coordinate and makes the bubble larger when there are more risks with that coordinate (the total risks at that coordinate can be viewed by hovering over a bubble)."),(0,i.kt)("h2",{id:"projects-table"},"Projects Table"),(0,i.kt)("p",null,"The Projects Table lists all projects that you have uploaded to Aegis Analytics, or all projects that you have the permissions to view within your company's hierarchy. Projects in the Project Table can be opened using the blue monitor button at the start of each row, which will bring you to the project's details page. To see a brief summary of the project, click anywhere else in the row to bring up the overview."),(0,i.kt)("p",null,'Projects with a yellow triangle in the top left of their row indicate that they are currently missing the most recent update. This can be quick filtered for by clicking "Missing Update" in the Project Summary Header Metrics. To see a more focused subset of projects in this list, utilize the ',(0,i.kt)("a",{parentName:"p",href:"#filter-menu"},"Filter Menu"),", the searchbar, or one of the ",(0,i.kt)("a",{parentName:"p",href:"#quick-filter"},"Quick Filters")," in the header banner. This table can be sorted by clicking on a column's header."),(0,i.kt)("p",null,"Here are the different buttons available on the Project Table Component."),(0,i.kt)("h3",{id:"view"},"View"),(0,i.kt)("p",null,"When 'Table' is selected, what's visible is the project table and the option for the map as well. You can click anywhere in the project row to bring up the overview. When 'Gantt' is selected, the map and the ability to click in the project row to display the overview is disabled, instead a Gantt chart will appear. You may interact with the slider in between the table and the chart to adjust how much of the total width is occupied by the table versus the chart. You may also click the arrows above or below the slider to completely hide either the table or chart if you would like to view only one at a time. To undo this change simply find the arrow either to the right or left of the table depending on which side was minimized and click the arrow to bring both the table and chart back to view. "),(0,i.kt)("h3",{id:"export-data-xlsx"},"Export Data (XLSX)"),(0,i.kt)("p",null,"To export the current list of projects to excel, simply press the 'Export Report' button located just to the right of the view selector."),(0,i.kt)("h3",{id:"maximize"},"Maximize"),(0,i.kt)("p",null,"To maximize the width of the Projects Table and hide the ",(0,i.kt)("a",{parentName:"p",href:"#google-maps-integration"},"map"),", press the 'Maximize' button. This can be toggled back to the original view by pressing the button again. This is disabled when Gantt view is selected."),(0,i.kt)("h3",{id:"layouts"},"Layouts"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Portfolio Layout",src:a(1413).Z,width:"994",height:"695"})),(0,i.kt)("p",null,"You may have multiple saved portfolio layouts that will speed up the process of finding your desired projects. You can save your preferred filters, banner, project list view, and data columns. Create several different layout options depending on what you want to see. You may edit, delete, and add as many layouts as you would like!"),(0,i.kt)("h3",{id:"column-selector"},"Column Selector"),(0,i.kt)("p",null,"Clicking this button opens a dropdown with every available column. You may select or deselect any column to focus on the data that is important to your projects. To reset back to the default shown columns simply select the Reset button, and you are good to go."),(0,i.kt)("h3",{id:"filters"},"Filters"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Filters",src:a(5608).Z,width:"1027",height:"390"})),(0,i.kt)("p",null,"The filter menu allows you to set a new baseline filter set for the Projects Table. This can be used in combination with ",(0,i.kt)("a",{parentName:"p",href:"#quick-filter"},"Quick Filters")," and the searchbar to quickly see only the projects you want to see. To see the filter menu, simply click the 'Toggle Filter Menu' button to the left of the 'Reset Filters' Button. To close the filter menu, press the same toggle filter button or you may hit the x on the popup window. The filters are broken down into 3 sections based on the type of filter they are: Project, Status, or KPI."),(0,i.kt)("p",null,"The Project Filters are basic information filters, all of which were fields you filled out in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/aegis-analytics/navbar#new-project-form"},"New Project Form"),". For Saas users, the client filter will display only the clients that have been tagged to a project and the company filter will display only the companies you have access to in your company's hierarchy. The default filter set has 'Archived' unchecked in the Project Type filter and if the banner is set to ",(0,i.kt)("a",{parentName:"p",href:"#risk-analysis-banner"},"Risk Analysis")," then 'default' is unchecked from the Risk Metrics Type filter."),(0,i.kt)("p",null,"The Status Filters have a few different options on ways to view project statuses: The current status of the project, a comparison of the current update to the previous update to see if a project is improving or starting to fall behind, a more exact look at how behind your behind projects are compared to the baseline, and whether the latest update in Analytics for your project is current or old."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Baseline \u0394 slider strictly compares current and baseline completion dates. In situations such as a covid delay pushing a previously on time or ahead project's completion x months, that project could show up in the negatives. This kind of situation is usually documented in the notes for the first impacted update, which can be viewed in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/aegis-analytics/project-page/schedules-tab"},"Schedules Tab")," of a project's detail page.")),(0,i.kt)("p",null,"KPI Filters are ways to quickly filter for projects that are at or below thresholds for each of the 4 scores we track in Aegis Analytics. You can click and drag to change the value to specific number or tap your left/right arrow keys when the slider is selected (or click the arrows next to the slider) to increment/decrement the value by 1 tick. If the slider value is anything other than the default 0-100, a chip will appear next to the label for the slider to indicate what range is currently being filtered for. Click the x on the chip to reset this filter back to 0-100."),(0,i.kt)("p",null,"The header metrics/charts are all updated as you update the current filter set to reflect the change in projects in the Projects Table. These changes can also be viewed in the summary on the filter bar to the right where it says 'x out of y projects shown'. X is the current amount of projects in the list based on the filters applied and y is the total projects that you have access to."),(0,i.kt)("h4",{id:"quick-filter"},"Quick Filter"),(0,i.kt)("p",null,"While the filter menu and searchbar create a new semi-permanent baseline set of filters (permanent until manually changed or reset), quick filters are temporary filters that are applied on top of the baseline set. These can be useful for quickly toggling between multiple views or for back and forth comparison without the need to open multiple tabs or windows. As an example scenario, lets say you are on the default banner and your team has just finished uploading the latest updates for their projects to Analytics. You can set the baseline filter set through the ",(0,i.kt)("a",{parentName:"p",href:"#filter-menu"},"Filter Menu")," to make sure the Projects Table only shows projects for this team (in case you have access to other projects). Then you can use the quick filters in the header banner to quickly check if your team missed one (by clicking missing) or check which of these projects has slipped in the last period so you know which ones to pay special attention to this month, or even to see which have improved so that you can pat your team member on the back for getting the project closer to on track."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If the 'Reset Filters' button is bright red (and not greyed out), that means there currently is a (or combination of) filter(s) applied to the Projects Table. If the project you are looking for is not showing up, simply press the 'Reset Filters' button to get the view back to default. You can then search for the project if you know its name, look for it on the ",(0,i.kt)("a",{parentName:"p",href:"#google-maps-integration"},"map"),", or simply scroll down in the Projects Table until you find it. If it still isn't showing up, try including archived projects in the Project Type filter.")),(0,i.kt)("h2",{id:"google-maps-integration"},"Google Maps Integration"),(0,i.kt)("p",null,"On Project Creation, you will be asked to input your project's physical location. This physical location will be mirrored on our Google Maps Integration. To hide the integration, click the Maximize button to the left of the Map Integration's header (this will maximize the ",(0,i.kt)("a",{parentName:"p",href:"#project-list"},"Project List"),"). Clicking on a marker is another way to access that project's detail page."))}p.isMDXComponent=!0},4981:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/all-banner-761f2f6a3853eb677997ed896fae4b29.png"},3413:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/cost-banner-9dcea78d2a6f50ebe0ca46e905cab925.png"},5608:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/filters-5-c78e48e55a2f7fff6c2515f056231942.png"},1413:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/portfolio-layout-ed02b804f4e56e14f8d1497496b1bf82.png"},1893:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/risk-banner-40c5d6f6dbf6bf493c6de92c73e3e853.png"}}]);