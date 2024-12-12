import{a4 as i,j as e,r as l}from"./index-tYez7WSa.js";import{B as s}from"./Button-DiDze6-u.js";import{P as a}from"./ProgressRadial-BUrOjo2y.js";const m={title:"Toasts"},p=()=>{const t=i(),o=()=>{t.setSettings({placement:"top",order:"descending"}),t.positive("This is a positive toast message",{duration:7e3,hasCloseButton:!0,link:{title:"Link",onClick:()=>{alert("Link was clicked!")}},type:"temporary",onRemove:()=>{console.log("Toast removed!")}})};return e.jsxs(e.Fragment,{children:[e.jsx(s,{styleType:"high-visibility",onClick:o,children:"Positive"}),e.jsx(s,{style:{display:"block",marginTop:16},onClick:()=>t.closeAll(),children:"Close All"})]})},g=()=>{const t=i(),o=()=>{t.setSettings({placement:"top",order:"descending"}),t.negative("This is a negative toast message",{duration:7e3,hasCloseButton:!0,link:{title:"Link",onClick:()=>{alert("Link was clicked!")}},type:"temporary",onRemove:()=>{console.log("Toast removed!")}})};return e.jsxs(e.Fragment,{children:[e.jsx(s,{styleType:"high-visibility",onClick:o,children:"Negative"}),e.jsx(s,{style:{display:"block",marginTop:16},onClick:()=>t.closeAll(),children:"Close All"})]})},k=()=>{const t=i(),o=()=>{t.setSettings({placement:"top",order:"descending"}),t.informational("This is an informational toast message",{duration:7e3,hasCloseButton:!0,link:{title:"Link",onClick:()=>{alert("Link was clicked!")}},type:"temporary",onRemove:()=>{console.log("Toast removed!")}})};return e.jsxs(e.Fragment,{children:[e.jsx(s,{styleType:"high-visibility",onClick:o,children:"Informational"}),e.jsx(s,{style:{display:"block",marginTop:16},onClick:()=>t.closeAll(),children:"Close All"})]})},y=()=>{const t=i(),o=()=>{t.setSettings({placement:"top",order:"descending"}),t.warning("This is a warning toast message",{duration:7e3,hasCloseButton:!0,link:{title:"Link",onClick:()=>{alert("Link was clicked!")}},type:"temporary",onRemove:()=>{console.log("Toast removed!")}})};return e.jsxs(e.Fragment,{children:[e.jsx(s,{styleType:"high-visibility",onClick:o,children:"Warning"}),e.jsx(s,{style:{display:"block",marginTop:16},onClick:()=>t.closeAll(),children:"Close All"})]})},h=()=>{const t=i(),o=()=>{t.setSettings({placement:"bottom-end"}),t.informational("This is a toast message",{duration:7e3,hasCloseButton:!0,link:{title:"Link",onClick:()=>{alert("Link was clicked!")}},type:"temporary",onRemove:()=>{console.log("Toast removed!")}})};return e.jsxs(e.Fragment,{children:[e.jsx(s,{styleType:"high-visibility",onClick:o,children:"Toast"}),e.jsx(s,{style:{display:"block",marginTop:16},onClick:()=>t.closeAll(),children:"Close All"})]})},u=()=>{const t=i(),o=l.useRef(null),n=()=>{t.setSettings({placement:"top",order:"descending"}),t.positive("This is a positive toast message",{duration:7e3,hasCloseButton:!0,link:{title:"Link",onClick:()=>{alert("Link was clicked!")}},type:"temporary",onRemove:()=>{console.log("Toast removed!")},animateOutTo:o.current})};return e.jsxs(e.Fragment,{children:[e.jsx(s,{ref:o,styleType:"high-visibility",onClick:n,children:"Positive"}),e.jsx(s,{style:{display:"block",marginTop:16},onClick:()=>t.closeAll(),children:"Close All"})]})},T=()=>{const t=i(),o=()=>{t.setSettings({placement:"top",order:"descending"});const{close:n}=t.informational(e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"flex-end"},children:[e.jsx(a,{size:"small",indeterminate:!0,style:{marginRight:"8px"}}),"Your process is running..."]}),{duration:7e3,hasCloseButton:!0,link:{title:"Link",onClick:()=>{alert("Link was clicked!")}},type:"persisting",onRemove:()=>{console.log("Toast removed!")}});setTimeout(()=>{n(),t.positive("Process completed",{duration:7e3,hasCloseButton:!0,link:{title:"Link",onClick:()=>{alert("Link was clicked!")}},type:"persisting",onRemove:()=>{console.log("Toast removed!")}})},3e3)};return e.jsx(e.Fragment,{children:e.jsx(s,{styleType:"high-visibility",onClick:o,children:"Start process"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{u as AnchorToButton,T as CloseIndividual,k as Informational,g as Negative,h as PositionChanged,p as Positive,y as Warning,m as default};
