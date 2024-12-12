import{p as T,r,l as I,B as D,c as L,u as w,e as O,b as k,j as e,I as h}from"./index-tYez7WSa.js";import{S as y}from"./ChevronRightDouble-DSSr_XxV.js";import{L as A}from"./List-Cbt0Qp7o.js";import{L as M}from"./ListItem-C6pxeoZ-.js";import{L as R}from"./Label-BEf-NZpc.js";import{a as S}from"./focusable-oNOde-ZF.js";import"./LinkAction-CKBGUraS.js";let B=T.div("iui-transfer-list-wrapper"),N=r.forwardRef((s,i)=>{let{className:u,children:n,...d}=s,t=I(),[a,f]=r.useState(t);return r.createElement(D,{as:"div",className:L("iui-transfer-list-listbox-wrapper",u),ref:i,...d},r.createElement(j.Provider,{value:{labelId:a,setLabelId:f}},n))}),W=r.forwardRef((s,i)=>{let{children:u,className:n,...d}=s,{labelId:t}=w(j),[a,f]=r.useState(),b=r.useRef(null),o=O(b,i),l=r.useCallback(()=>{let c=S(b.current);return c.filter(m=>!c.some(v=>v.contains(m.parentElement)))},[]);r.useEffect(()=>{var m;let c=l();if(a!=null){(m=c==null?void 0:c[a])==null||m.focus();return}},[a,l]);let x=c=>{if(c.altKey)return;let m=l();if(!(m!=null&&m.length))return;let v=a??0;switch(c.key){case"ArrowDown":f(Math.min(v+1,m.length-1)),c.preventDefault(),c.stopPropagation();break;case"ArrowUp":f(Math.max(v-1,0)),c.preventDefault(),c.stopPropagation();break}};return r.createElement(A,{className:L("iui-transfer-list-listbox",n),onKeyDown:x,role:"listbox","aria-multiselectable":!0,"aria-labelledby":t,tabIndex:0,ref:o,...d},u)}),K=r.forwardRef((s,i)=>{let{actionable:u=!0,disabled:n,onActiveChange:d,children:t,active:a,...f}=s,b=()=>u&&d&&d(!a),o=l=>{l.altKey||(l.key==="Enter"||l.key===" "||l.key==="Spacebar")&&(n||b(),l.preventDefault())};return r.createElement(M,{ref:i,onClick:b,onKeyDown:o,active:a,actionable:u,tabIndex:-1,role:"option","aria-disabled":n?"true":void 0,"aria-selected":a?"true":void 0,disabled:n,...f},t)}),F=r.forwardRef((s,i)=>{let{children:u,id:n,...d}=s,{labelId:t,setLabelId:a}=w(j);return r.useEffect(()=>{n&&n!==t&&a(n)},[n,t,a]),r.createElement(R,{as:"div",id:t,ref:i,...d},u)}),z=r.forwardRef((s,i)=>{let{className:u,children:n,...d}=s;return r.createElement(k,{role:"toolbar",ref:i,...d,orientation:"vertical",className:L("iui-transfer-list-toolbar",u)},n)});const p=Object.assign(B,{ListboxWrapper:N,Listbox:W,Item:K,ListboxLabel:F,Toolbar:z}),j=r.createContext(void 0),g=s=>r.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...s},r.createElement("path",{d:"M14.6 0L16 1.4 9.4 8l6.6 6.6-1.4 1.4-8-8zM8 0l1.4 1.4L2.8 8l6.6 6.6L8 16 0 8z"})),C=s=>r.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...s},r.createElement("path",{d:"M11.3 0l1.4 1.4L6.1 8l6.6 6.6-1.4 1.4-8-8z"})),E=s=>r.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...s},r.createElement("path",{d:"M4.7 0L3.3 1.4 9.9 8l-6.6 6.6L4.7 16l8-8z"})),Q={title:"TransferList"},V=()=>{const[s,i]=r.useState([{name:"Option 1",active:!1},{name:"Option 2",active:!1},{name:"Option 3",active:!1},{name:"Option 4",active:!1},{name:"Option 5",active:!1},{name:"Option 6",active:!1}]),[u,n]=r.useState([{name:"Option 7",active:!1}]),d=(t,a,f,b)=>{f(o=>{const l=[...o],x=[];return t.forEach(c=>{if(b||c.active===!0){const m=c;m.active=!1,l.push(m)}else x.push(c)}),a(x),l})};return e.jsxs(p,{children:[e.jsx(p.ListboxWrapper,{children:e.jsx(p.Listbox,{children:s==null?void 0:s.map((t,a)=>e.jsx(p.Item,{actionable:!0,active:t.active,onActiveChange:f=>{i(b=>{const o=[...b],l={...o[a]};return l.active=f,o[a]=l,o})},children:t.name},t.name))})}),e.jsxs(p.Toolbar,{children:[e.jsx(h,{styleType:"borderless",label:"Move Right All",onClick:()=>{d(s,i,n,!0)},children:e.jsx(y,{})}),e.jsx(h,{styleType:"borderless",label:"Move Right",onClick:()=>d(s,i,n,!1),children:e.jsx(E,{})}),e.jsx(h,{styleType:"borderless",label:"Move Left",onClick:()=>d(u,n,i,!1),children:e.jsx(C,{})}),e.jsx(h,{styleType:"borderless",label:"Move Left All",onClick:()=>d(u,n,i,!0),children:e.jsx(g,{})})]}),e.jsx(p.ListboxWrapper,{children:e.jsx(p.Listbox,{children:u.map((t,a)=>e.jsx(p.Item,{actionable:!0,active:t.active,onActiveChange:f=>{n(b=>{const o=[...b],l={...o[a]};return l.active=f,o[a]=l,o})},children:t.name},t.name))})})]})},X=()=>{const[s,i]=r.useState([{name:"Option 1",active:!1},{name:"Option 2",active:!1},{name:"Option 3",active:!1},{name:"Option 4",active:!1},{name:"Option 5",active:!1},{name:"Option 6",active:!1}]),[u,n]=r.useState([{name:"Option 7",active:!1}]),d=(t,a,f,b)=>{f(o=>{const l=[...o],x=[];return t.forEach(c=>{if(b||c.active===!0){const m=c;m.active=!1,l.push(m)}else x.push(c)}),a(x),l})};return e.jsxs(p,{children:[e.jsxs(p.ListboxWrapper,{children:[e.jsx(p.ListboxLabel,{children:"Options"}),e.jsx(p.Listbox,{children:s==null?void 0:s.map((t,a)=>e.jsx(p.Item,{actionable:!0,active:t.active,onActiveChange:f=>{i(b=>{const o=[...b],l={...o[a]};return l.active=f,o[a]=l,o})},children:t.name},t.name))})]}),e.jsxs(p.Toolbar,{children:[e.jsx(h,{styleType:"borderless",label:"Move Right All",onClick:()=>{d(s,i,n,!0)},children:e.jsx(y,{})}),e.jsx(h,{styleType:"borderless",label:"Move Right",onClick:()=>d(s,i,n,!1),children:e.jsx(E,{})}),e.jsx(h,{styleType:"borderless",label:"Move Left",onClick:()=>d(u,n,i,!1),children:e.jsx(C,{})}),e.jsx(h,{styleType:"borderless",label:"Move Left All",onClick:()=>d(u,n,i,!0),children:e.jsx(g,{})})]}),e.jsxs(p.ListboxWrapper,{children:[e.jsx(p.ListboxLabel,{children:"Applied"}),e.jsx(p.Listbox,{children:u.map((t,a)=>e.jsx(p.Item,{actionable:!0,active:t.active,onActiveChange:f=>{n(b=>{const o=[...b],l={...o[a]};return l.active=f,o[a]=l,o})},children:t.name},t.name))})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{V as Basic,X as WithLabel,Q as default};
