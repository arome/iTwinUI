import{r as e,F as g,t as v,m as h}from"./index-DXBjKzeP.js";import{a as C}from"./MenuItem-CbFAkNIc.js";const y=e.forwardRef((r,o)=>e.createElement(g,null,e.createElement(D,{ref:o,...r})));let D=e.forwardRef((r,o)=>{let{menuItems:n,children:f,role:u="menu",visible:d,placement:l="bottom-start",matchWidth:a=!1,onVisibleChange:p,portal:c=!0,middleware:s,...b}=r,[i,t]=v(!1,d,p),w=e.useMemo(()=>typeof n=="function"?n(()=>t(!1)):n,[n,t]);return e.createElement(C,{trigger:f,onKeyDown:h(r.onKeyDown,m=>{m.defaultPrevented||m.key==="Tab"&&t(!1)}),role:u,ref:o,portal:c,popoverProps:e.useMemo(()=>({placement:l,matchWidth:a,visible:i,onVisibleChange:t,middleware:s}),[a,s,l,t,i]),...b},w)});export{y as D};
