import{R as u,j as e}from"./index-DcTlL2oN.js";import{S as i}from"./Calendar-BV1QSPJo.js";import{I as n}from"./InputWithDecorations-C222oPaY.js";import{P as c}from"./Popover-DjArJ8lA.js";import{T as a}from"./TimePicker-PSDrosqZ.js";import"./InputFlexContainer-rQVsMkZX.js";import"./Icon-Wk-BsVi0.js";const S={title:"TimePicker"},y=()=>{const[r,o]=u.useState(new Date(2021,4,11,14,55,22)),s=t=>{o(t),console.log(`New Time value: ${t}`)};return e.jsx(e.Fragment,{children:e.jsxs(n,{style:{width:150},id:"time-input",children:[e.jsx(n.Input,{value:r.toLocaleTimeString("en-US",{timeStyle:"short"}),readOnly:!0}),e.jsx(c,{applyBackground:!0,placement:"bottom-end",content:e.jsx(a,{date:r,onChange:s,setFocusHour:!0,use12Hours:!1}),children:e.jsx(n.Button,{children:e.jsx(i,{})})})]})})},w=()=>{const[r,o]=u.useState(new Date(2021,4,11,14,55,22)),s=t=>{o(t),console.log(`New Time value: ${t}`)};return e.jsx(e.Fragment,{children:e.jsxs(n,{style:{width:200},id:"time-input",children:[e.jsx(n.Input,{value:r.toLocaleTimeString("en-US",{timeStyle:"short"}),readOnly:!0}),e.jsx(c,{applyBackground:!0,placement:"bottom-end",content:e.jsx(a,{date:r,onChange:s,setFocusHour:!0,use12Hours:!1,hourRenderer:t=>t.getHours()===1?`${t.getHours()} hr`:`${t.getHours()} hrs`,minuteRenderer:t=>t.getMinutes()===1?`${t.getMinutes()} min`:`${t.getMinutes()} mins`,meridiemRenderer:t=>t==="AM"?"Before":"After"}),children:e.jsx(n.Button,{children:e.jsx(i,{})})})]})})},f=()=>{const[r,o]=u.useState(new Date(2021,4,11,14,55,30)),s=m=>{o(m),console.log(`New Time value: ${m}`)};return e.jsx(e.Fragment,{children:e.jsxs(n,{style:{width:150},id:"time-input",children:[e.jsx(n.Input,{value:r.toLocaleTimeString("en-US",{timeStyle:"short"}),readOnly:!0}),e.jsx(c,{applyBackground:!0,placement:"bottom-end",content:e.jsx(a,{date:r,onChange:s,setFocusHour:!0,useCombinedRenderer:!0,precision:"minutes",hourStep:1,minuteStep:1,secondStep:15,use12Hours:!0}),children:e.jsx(n.Button,{children:e.jsx(i,{})})})]})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Basic,f as Combined,w as CustomRenderers,S as default};
