import{r as a,B as c,c as d,T as D,j as L}from"./index-eRKR2_i9.js";const j=a.forwardRef((n,t)=>{let{title:C,index:e,currentStepNumber:r,totalSteps:b,type:k,onClick:i,description:m,className:N,style:f,stepProps:s,trackContentProps:p,circleProps:u,nameProps:l,...x}=n,o=r>e,y=r===e,S=o&&!!i,E=()=>{S&&(i==null||i(e))},w=g=>{g.altKey||S&&(g.key==="Enter"||g.key==="Space"||g.key===" ")&&E()},$=a.createElement(c,{as:"li",...s,className:d("iui-stepper-step",{"iui-current":y,"iui-clickable":S},N,s==null?void 0:s.className),style:{inlineSize:k==="default"?`${100/b}%`:void 0,...f,...s==null?void 0:s.style},onClick:E,onKeyDown:w,"aria-current":y?"step":void 0,tabIndex:S?0:void 0,ref:t,...x},a.createElement(c,{as:"div",...p,className:d("iui-stepper-track-content",p==null?void 0:p.className)},a.createElement(c,{as:"span",...u,className:d("iui-stepper-circle",u==null?void 0:u.className)},e+1)),k==="default"&&a.createElement(c,{as:"span",...l,className:d("iui-stepper-step-name",l==null?void 0:l.className)},C));return m?a.createElement(D,{content:m},$):$});let v={stepsCountLabel:(n,t)=>`Step ${n} of ${t}:`};const h=a.forwardRef((n,t)=>{let{currentStep:C,steps:e,type:r="default",localization:b=v,onStepClick:k,stepProps:i,trackContentProps:m,circleProps:N,nameProps:f,labelProps:s,labelCountProps:p,...u}=n,l=Math.min(Math.max(0,C??0),e.length-1);return a.createElement(c,{className:"iui-stepper",ref:t,...u},a.createElement("ol",null,e.map((x,o)=>{let y=i==null?void 0:i(o),S=m==null?void 0:m(o),E=N==null?void 0:N(o),w=f==null?void 0:f(o);return a.createElement(j,{stepProps:y,trackContentProps:S,circleProps:E,nameProps:w,key:o,index:o,title:r==="long"?"":x.name,currentStepNumber:l,totalSteps:e.length,type:r,onClick:k,description:x.description})})),r==="long"&&a.createElement(c,{as:"div",...s,className:d("iui-stepper-steps-label",s==null?void 0:s.className)},a.createElement(c,{as:"span",...p,className:d("iui-stepper-steps-label-count",p==null?void 0:p.className)},b.stepsCountLabel(l+1,e.length)),e[l].name))}),F={title:"Stepper"},T=()=>{const n=t=>{console.log(`Clicked index: ${t}`)};return L.jsx(h,{currentStep:2,steps:[{name:"First Step"},{name:"Completed Step"},{name:"Current Step"},{name:"Next Step"},{name:"Last Step"}],onStepClick:n})},B=()=>{const n=t=>{console.log(`Clicked index: ${t}`)};return L.jsx(h,{type:"long",currentStep:2,steps:[{name:"First Step"},{name:"Completed Step"},{name:"Current Step"},{name:"Next Step"},{name:"Last Step"}],onStepClick:n})},K=()=>{const t={stepsCountLabel:(e,r)=>`Localized step ${e} of ${r}:`},C=e=>{console.log(`Clicked index: ${e}`)};return L.jsx(h,{type:"long",currentStep:2,steps:[{name:"First Step"},{name:"Completed Step"},{name:"Current Step"},{name:"Next Step"},{name:"Last Step"}],localization:t,onStepClick:C})},R=()=>{const n=t=>{console.log(`Clicked index: ${t}`)};return L.jsx(h,{currentStep:2,steps:[{name:"First Step",description:"First Step Description"},{name:"Completed Step",description:"Completed Step Description"},{name:"Current Step",description:"Current Step Description"},{name:"Next Step",description:"Next Step Description"},{name:"Last Step",description:"Last Step Description"}],onStepClick:n})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{T as Basic,K as LocalizedLong,B as Long,R as WithTooltips,F as default};
