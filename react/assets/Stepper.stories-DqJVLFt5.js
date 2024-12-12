import{r as s,B as c,c as x,T as z,j as m}from"./index-tYez7WSa.js";const D=s.forwardRef((e,t)=>{let{title:k,index:n,currentStepNumber:p,totalSteps:w,type:h,onClick:l,description:S,className:N,style:f,stepProps:a,trackContentProps:r,circleProps:u,nameProps:o,stepContent:d,...i}=e,b=p>n,y=p===n,C=b&&!!l,E=()=>{C&&(l==null||l(n))},j=L=>{L.altKey||C&&(L.key==="Enter"||L.key==="Space"||L.key===" ")&&E()},v=s.createElement(c,{as:"li",...a,className:x("iui-stepper-step",{"iui-current":y,"iui-clickable":C},N,a==null?void 0:a.className),style:{inlineSize:h==="default"?`${100/w}%`:void 0,...f,...a==null?void 0:a.style},onClick:E,onKeyDown:j,"aria-current":y?"step":void 0,tabIndex:C?0:void 0,ref:t,...i},s.createElement(c,{as:"div",...r,className:x("iui-stepper-track-content",r==null?void 0:r.className)},s.createElement(c,{as:"span",...u,className:x("iui-stepper-circle",u==null?void 0:u.className)},d?d():n+1)),h==="default"&&s.createElement(c,{as:"span",...o,className:x("iui-stepper-step-name",o==null?void 0:o.className)},k));return S?s.createElement(z,{content:S},v):v});let F={stepsCountLabel:(e,t)=>`Step ${e} of ${t}:`};const g=s.forwardRef((e,t)=>{let{currentStep:k,steps:n,type:p="default",localization:w=F,onStepClick:h,stepProps:l,trackContentProps:S,circleProps:N,nameProps:f,labelProps:a,labelCountProps:r,...u}=e,o=Math.min(Math.max(0,k??0),n.length-1);return s.createElement(c,{className:"iui-stepper",ref:t,...u},s.createElement("ol",null,n.map((d,i)=>{let b=l==null?void 0:l(i),y=S==null?void 0:S(i),C=N==null?void 0:N(i),E=f==null?void 0:f(i);return s.createElement(D,{stepProps:b,trackContentProps:y,circleProps:C,nameProps:E,key:i,index:i,title:p==="long"?"":d.name,currentStepNumber:o,totalSteps:n.length,type:p,onClick:h,description:d.description,stepContent:d.stepContent})})),p==="long"&&s.createElement(c,{as:"div",...a,className:x("iui-stepper-steps-label",a==null?void 0:a.className)},s.createElement(c,{as:"span",...r,className:x("iui-stepper-steps-label-count",r==null?void 0:r.className)},w.stepsCountLabel(o+1,n.length)),n[o].name))}),$=e=>s.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...e},s.createElement("path",{d:"M6 13.4L1.3 8.7l1.4-1.4L6 10.6l7.3-7.3 1.4 1.4z"})),B={title:"Stepper"},K=()=>{const e=t=>{console.log(`Clicked index: ${t}`)};return m.jsx(g,{currentStep:2,steps:[{name:"First Step"},{name:"Completed Step"},{name:"Current Step"},{name:"Next Step"},{name:"Last Step"}],onStepClick:e})},M=()=>{const e=t=>{console.log(`Clicked index: ${t}`)};return m.jsx(g,{currentStep:2,steps:[{name:"First Step",stepContent:()=>m.jsx($,{})},{name:"Second Step",stepContent:()=>m.jsx($,{})},{name:"Third Step"},{name:"Last Step"}],onStepClick:e})},R=()=>{const e=t=>{console.log(`Clicked index: ${t}`)};return m.jsx(g,{type:"long",currentStep:2,steps:[{name:"First Step"},{name:"Completed Step"},{name:"Current Step"},{name:"Next Step"},{name:"Last Step"}],onStepClick:e})},A=()=>{const t={stepsCountLabel:(n,p)=>`Localized step ${n} of ${p}:`},k=n=>{console.log(`Clicked index: ${n}`)};return m.jsx(g,{type:"long",currentStep:2,steps:[{name:"First Step"},{name:"Completed Step"},{name:"Current Step"},{name:"Next Step"},{name:"Last Step"}],localization:t,onStepClick:k})},I=()=>{const e=t=>{console.log(`Clicked index: ${t}`)};return m.jsx(g,{currentStep:2,steps:[{name:"First Step",description:"First Step Description"},{name:"Completed Step",description:"Completed Step Description"},{name:"Current Step",description:"Current Step Description"},{name:"Next Step",description:"Next Step Description"},{name:"Last Step",description:"Last Step Description"}],onStepClick:e})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{K as Basic,M as CustomIcon,A as LocalizedLong,R as Long,I as WithTooltips,B as default};
