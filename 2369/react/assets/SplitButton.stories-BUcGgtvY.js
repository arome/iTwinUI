import{r as t,l as j,I as w,B as P,c as v,j as o}from"./index-BZWtA-ZP.js";import{B as M}from"./Button-VRyjiX13.js";import{a as R,M as r}from"./MenuItem-C8Mcshnn.js";import{S as T}from"./SvgCaretUpSmall-DZ0K7dpq.js";import{S as N}from"./SvgCaretDownSmall-6Yqrqo6L.js";import"./ProgressRadial-ChzkP0wb.js";import"./focusable-BldRe1y3.js";import"./ListItem-80SJh2Et.js";import"./LinkAction-DPsPrRzV.js";const z=t.forwardRef((e,s)=>{var p;let{onClick:l,menuItems:n,className:f,menuPlacement:b="bottom-end",styleType:m="default",size:c,children:y,wrapperProps:i,menuButtonProps:I,portal:x=!0,...C}=e,[u,a]=t.useState(!1),S=t.useMemo(()=>typeof n=="function"?n(()=>a(!1)):n,[n]),g={visible:u,onVisibleChange:a,placement:b,matchWidth:!0},d=j(),h=t.createElement(w,{styleType:m,size:c,disabled:e.disabled,"aria-labelledby":((p=e.labelProps)==null?void 0:p.id)||d,...I},u?t.createElement(T,null):t.createElement(N,null)),[B,E]=t.useState(null);return t.createElement(P,{as:"div",...i,ref:E,className:v("iui-button-split",{"iui-disabled":e.disabled},i==null?void 0:i.className)},t.createElement(M,{className:f,styleType:m,size:c,onClick:l,ref:s,...C,labelProps:{id:d,...e.labelProps}},y),t.createElement(R,{popoverProps:g,trigger:h,portal:x,positionReference:B,onKeyDown:({key:k})=>{k==="Tab"&&a(!1)}},S))}),q={title:"SplitButton",decorators:[e=>o.jsx("div",{style:{minHeight:150},children:o.jsx(e,{})})]},F=()=>{const e=(l,n)=>()=>{console.log(`Item #${l} clicked!`),n()},s=l=>[o.jsx(r,{onClick:e(1,l),children:"Item #1"},1),o.jsx(r,{onClick:e(2,l),children:"Item #2"},2),o.jsx(r,{onClick:e(3,l),children:"Item #3"},3)];return o.jsx(z,{onClick:()=>console.log("Primary button clicked!"),menuItems:s,styleType:"default",children:"Default"})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{F as Basic,q as default};
