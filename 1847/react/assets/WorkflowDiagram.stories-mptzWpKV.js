import{r as e,B as s,c as p,T as f,j as d}from"./index-7nKTUIFH.js";const v=n=>{const{title:i,description:r,className:l,style:o,contentProps:t,...m}=n,a=e.createElement(s,{as:"li",className:p("iui-workflow-diagram-step",l),style:o,...m},e.createElement(s,{as:"span",...t,className:p("iui-workflow-diagram-content",t==null?void 0:t.className)},i));return r?e.createElement(f,{content:r},a):a},w=e.forwardRef((n,i)=>{const{steps:r,className:l,contentProps:o,wrapperProps:t,...m}=n;return e.createElement(s,{as:"div",...t,ref:i},e.createElement(s,{as:"ol",className:p("iui-workflow-diagram",l),...m},r.map((a,c)=>{const u=o==null?void 0:o(c);return e.createElement(v,{contentProps:u,key:c,title:a.name,description:a.description})})))}),k={title:"WorkflowDiagram"},S=()=>d.jsx(w,{steps:[{name:"Start"},{name:"Set parameters"},{name:"Invite collaborators"},{name:"Review & Approve"},{name:"Complete"}]}),T=()=>d.jsx(w,{steps:[{name:"Start",description:"Start Tooltip"},{name:"Set parameters",description:"Set parameters Tooltip"},{name:"Invite collaborators",description:"Invite collaborators Tooltip"},{name:"Review & Approve",description:"Review & Approve Tooltip"},{name:"Complete",description:"Complete Tooltip"}]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{S as Basic,T as WithTooltips,k as default};
