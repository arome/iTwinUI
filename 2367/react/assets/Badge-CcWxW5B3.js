import{r as u,B as g,c}from"./index-Dv96QNIp.js";import{i as f,S as m}from"./colors-ymlpSE_k.js";let B=e=>e?f(e)?m[e]:e:"",p=e=>e&&["positive","negative","warning","informational"].includes(e)?e:void 0;const x=u.forwardRef((e,a)=>{let{backgroundColor:s,style:r,className:n,children:o,...l}=e,t=s==="primary"?"informational":s,i=p(t),d=t&&!i?{"--iui-badge-background-color":B(t),...r}:{...r};return u.createElement(g,{as:"span",className:c("iui-badge",n),style:d,"data-iui-status":i,ref:a,...l},o)});export{x as B};
