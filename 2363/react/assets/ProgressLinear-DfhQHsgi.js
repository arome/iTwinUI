import{r as e,B as r,c as l,K as p,V as v,k as x}from"./index-Bp_-6zWh.js";const N=e.forwardRef((s,n)=>{let{value:t,indeterminate:d=t===void 0,labels:i=[],isAnimated:o=!1,status:u,className:c,labelGroupProps:a,...m}=s,g=x(t??100,0,100);return e.createElement(r,{className:l("iui-progress-indicator-linear",c),ref:n,"data-iui-status":u,"data-iui-indeterminate":d?"true":void 0,"data-iui-animated":o?"true":void 0,...m,style:{"--iui-progress-percentage":`${g}%`,...s.style}},e.createElement(p,null,t!==100&&e.createElement(v,null,"Loading."),e.createElement("slot",null)),i.length>0&&e.createElement(r,{as:"div",...a,className:l("iui-progress-indicator-linear-label",a==null?void 0:a.className)},i.map((E,f)=>e.createElement("span",{key:f},E))))});export{N as P};
