import{r as u,j as e,P as i}from"./index-tYez7WSa.js";import{S as a}from"./Calendar-CNUBZrPk.js";import{I as n}from"./InputWithDecorations-CEk33ea_.js";import{T as c}from"./TimePicker-Dnch6LMs.js";import"./InputFlexContainer-Cer55Gpa.js";import"./Icon-BVzfkDcs.js";const g={title:"TimePicker"},y=()=>{const[r,o]=u.useState(new Date(2021,4,11,14,55,22)),s=t=>{o(t),console.log(`New Time value: ${t}`)};return e.jsx(e.Fragment,{children:e.jsxs(n,{style:{width:150},id:"time-input",children:[e.jsx(n.Input,{value:r.toLocaleTimeString("en-US",{timeStyle:"short"}),readOnly:!0}),e.jsx(i,{applyBackground:!0,placement:"bottom-end",content:e.jsx(c,{date:r,onChange:s,setFocusHour:!0,use12Hours:!1}),children:e.jsx(n.Button,{children:e.jsx(a,{})})})]})})},S=()=>{const[r,o]=u.useState(new Date(2021,4,11,14,55,22)),s=t=>{o(t),console.log(`New Time value: ${t}`)};return e.jsx(e.Fragment,{children:e.jsxs(n,{style:{width:200},id:"time-input",children:[e.jsx(n.Input,{value:r.toLocaleTimeString("en-US",{timeStyle:"short"}),readOnly:!0}),e.jsx(i,{applyBackground:!0,placement:"bottom-end",content:e.jsx(c,{date:r,onChange:s,setFocusHour:!0,use12Hours:!1,hourRenderer:t=>t.getHours()===1?`${t.getHours()} hr`:`${t.getHours()} hrs`,minuteRenderer:t=>t.getMinutes()===1?`${t.getMinutes()} min`:`${t.getMinutes()} mins`,meridiemRenderer:t=>t==="AM"?"Before":"After"}),children:e.jsx(n.Button,{children:e.jsx(a,{})})})]})})},w=()=>{const[r,o]=u.useState(new Date(2021,4,11,14,30,0)),s=l=>{o(l),console.log(`New Time value: ${l}`)};return e.jsx(e.Fragment,{children:e.jsxs(n,{style:{width:150},id:"time-input",children:[e.jsx(n.Input,{value:r.toLocaleTimeString("en-US",{timeStyle:"short"}),readOnly:!0}),e.jsx(i,{applyBackground:!0,placement:"bottom-end",content:e.jsx(c,{date:r,onChange:s,setFocusHour:!0,useCombinedRenderer:!0,precision:"minutes",hourStep:1,minuteStep:30,use12Hours:!0}),children:e.jsx(n.Button,{children:e.jsx(a,{})})})]})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Basic,w as Combined,S as CustomRenderers,g as default};
