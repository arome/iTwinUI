import{r as e,o as n,B as g,c as p,k as h,K as v,V as S}from"./index-Caxb35LP.js";const x=a=>e.createElement(n,a,e.createElement("path",{d:"m6 13.4-4.7-4.7 1.4-1.4 3.3 3.3 7.3-7.3 1.4 1.4z"})),i=a=>e.createElement(n,a,e.createElement("path",{d:"M6.25 1h3.5v3.19l-.676 6.408H6.91L6.25 4.19zm.12 10.572h3.268V15H6.37z"})),f=e.forwardRef((a,s)=>{let{value:t,indeterminate:d=t===void 0,status:r,size:l,className:o,style:m,children:c,...u}=a,E={negative:e.createElement(i,{"aria-hidden":!0}),positive:e.createElement(x,{"aria-hidden":!0}),warning:e.createElement(i,{"aria-hidden":!0})};return e.createElement(g,{className:p("iui-progress-indicator-radial",o),"data-iui-size":l,"data-iui-status":r,"data-iui-indeterminate":d?"true":void 0,ref:s,style:{...t!==void 0&&{"--iui-progress-percentage":`${h(t,0,100)}%`},...m},...u},e.createElement(v,null,t!==100&&e.createElement(S,null,"Loading."),e.createElement("slot",null)),l!=="x-small"?c??(r?E[r]:null):null)});export{f as P};
