import{r as t,B as n,c}from"./index-Bp_-6zWh.js";let g=["3xs","2xs","xs","s","m","l","xl","2xl","3xl"],m=e=>g.includes(e)?`var(--iui-size-${e})`:e,y=t.forwardRef((e,a)=>{let{display:l,flexDirection:i,justifyContent:r,alignItems:s,gap:f,flexWrap:x,className:u,style:o,...p}=e;return t.createElement(n,{className:c("iui-flex",u),style:{"--iui-flex-display":l,"--iui-flex-direction":i,"--iui-flex-justify":r,"--iui-flex-align":s,"--iui-flex-gap":m(f),"--iui-flex-wrap":x,...o},ref:a,...p})}),d=t.forwardRef((e,a)=>{let{flex:l,className:i,style:r,...s}=e;return t.createElement(n,{className:c("iui-flex-spacer",i),style:{"--iui-flex-spacer-flex":l,...r},ref:a,...s})}),F=t.forwardRef((e,a)=>{let{gapBefore:l,gapAfter:i,flex:r,alignSelf:s,className:f,style:x,...u}=e,o={"--iui-flex-item-flex":r,"--iui-flex-item-align":s,"--iui-flex-item-gap-before":m(l),"--iui-flex-item-gap-after":m(i),...l!==void 0&&{"--iui-flex-item-gap-before-toggle":"var(--iui-on)"},...i!==void 0&&{"--iui-flex-item-gap-after-toggle":"var(--iui-on)"},...x};return t.createElement(n,{className:c("iui-flex-item",f),ref:a,style:o,...u})});const v=Object.assign(y,{Item:F,Spacer:d});export{v as F};
