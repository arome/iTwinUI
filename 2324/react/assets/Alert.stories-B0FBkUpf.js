import{r as t,B as f,c as m,u as p,S as g,p as h,I as j,a as C,j as i}from"./index-CrW_2eAO.js";import{S as v}from"./Placeholder-CxeUuJox.js";import{S as y}from"./SmileyHappy-yrs9EroS.js";import{I as q}from"./Icon-DmGOjYiE.js";import{A as b}from"./Anchor-FQGBOmHJ.js";import"./Text-D4FlMT9K.js";let u=t.createContext(void 0),k=t.forwardRef((o,n)=>{let{children:a,type:s="informational",isSticky:l=!1,clickableText:r,clickableTextProps:c,onClose:d,...x}=o;return t.createElement(e.Wrapper,{type:s,isSticky:l,ref:n,...x},t.createElement(e.Icon,null),t.createElement(e.Message,null,a,r?t.createElement(e.Action,c,r):null),d?t.createElement(e.CloseButton,{onClick:d}):null)}),E=t.forwardRef((o,n)=>{let{children:a,className:s,type:l="informational",isSticky:r=!1,...c}=o;return t.createElement(f,{className:m("iui-alert",s),"data-iui-status":l,"data-iui-variant":r?"sticky":void 0,ref:n,...c},t.createElement(u.Provider,{value:{type:l}},a))}),I=t.forwardRef((o,n)=>{let{children:a,...s}=o,{type:l}=p(u),r=g[l];return t.createElement(q,{fill:l,ref:n,...s},a??t.createElement(r,null))}),A=h.span("iui-alert-message"),M=t.forwardRef((o,n)=>{let{children:a,className:s,...l}=o,{type:r}=p(u);return t.createElement(b,{as:o.href?"a":"button",className:m("iui-button-base","iui-alert-link",s),underline:!0,"data-iui-status":r,ref:n,...l},a)}),S=t.forwardRef((o,n)=>{let{children:a,...s}=o;return t.createElement(j,{styleType:"borderless",size:"small","aria-label":"Close",ref:n,...s},a??t.createElement(C,null))});const e=Object.assign(k,{Wrapper:E,Icon:I,Message:A,Action:M,CloseButton:S}),R={title:"Alert"},U=()=>i.jsxs(e.Wrapper,{type:"informational",children:[i.jsx(e.Icon,{}),i.jsxs(e.Message,{children:["This is an informational message.",i.jsx(e.Action,{onClick:()=>console.log("Clicked more info!"),children:"More Info."})]}),i.jsx(e.CloseButton,{onClick:()=>console.log("Close!")})]}),N=()=>i.jsxs(e.Wrapper,{type:"positive",children:[i.jsx(e.Icon,{}),i.jsxs(e.Message,{children:["This is a positive message.",i.jsx(e.Action,{onClick:()=>console.log("Clicked more info!"),children:"More Info."})]}),i.jsx(e.CloseButton,{onClick:()=>console.log("Close!")})]}),P=()=>i.jsxs(e.Wrapper,{type:"warning",children:[i.jsx(e.Icon,{}),i.jsxs(e.Message,{children:["This is a warning message.",i.jsx(e.Action,{onClick:()=>console.log("Clicked more info!"),children:"More Info."})]}),i.jsx(e.CloseButton,{onClick:()=>console.log("Close!")})]}),z=()=>i.jsxs(e.Wrapper,{type:"negative",children:[i.jsx(e.Icon,{}),i.jsxs(e.Message,{children:["This is a negative message.",i.jsx(e.Action,{onClick:()=>console.log("Clicked more info!"),children:"More Info."})]}),i.jsx(e.CloseButton,{onClick:()=>console.log("Close!")})]}),H=()=>i.jsxs("div",{style:{height:"150px",overflow:"overlay",textAlign:"justify",border:"solid 0.5px"},children:[i.jsxs(e.Wrapper,{type:"informational",isSticky:!0,children:[i.jsx(e.Icon,{}),i.jsxs(e.Message,{children:["This is sticky!",i.jsx(e.Action,{onClick:()=>console.log("Clicked more info!"),children:"More Info."})]}),i.jsx(e.CloseButton,{onClick:()=>console.log("Close!")})]}),i.jsx("p",{style:{margin:0,padding:"8px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),O=()=>i.jsxs(e.Wrapper,{type:"informational",children:[i.jsx(e.Icon,{}),i.jsx(e.Message,{children:"This is an empty info message."})]}),_=()=>i.jsxs(e.Wrapper,{type:"informational",children:[i.jsx(e.Icon,{children:i.jsx(y,{})}),i.jsx(e.Message,{children:"This is an info message with a custom icon."}),i.jsx(e.CloseButton,{onClick:()=>console.log("Close!"),children:i.jsx(v,{})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{_ as CustomIcon,O as Empty,U as Informational,z as Negative,N as Positive,H as Sticky,P as Warning,R as default};
