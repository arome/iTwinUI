import{p as y,r,B as x,c as k,j as e}from"./index-DXBjKzeP.js";import{A as v}from"./Anchor-CLci7xWL.js";import"./Text-DcuUQEjC.js";const f=y.li("iui-legal-footer-item"),h=y.li("iui-legal-footer-separator",{"aria-hidden":!0}),g=y.ul("iui-legal-footer-list");let c={cookies:"Cookies",legalNotices:"Legal notices",privacy:"Privacy",termsOfService:"Terms of service",termsOfUse:"Terms of use"};const E=[{key:"copyright",title:`© ${new Date().getFullYear()} Bentley Systems, Incorporated`},{key:"termsOfService",title:c.termsOfService,url:"https://connect-agreementportal.bentley.com/AgreementApp/Home/Eula/view/readonly/BentleyConnect"},{key:"privacy",title:c.privacy,url:"https://www.bentley.com/en/privacy-policy"},{key:"termsOfUse",title:c.termsOfUse,url:"https://www.bentley.com/en/terms-of-use-and-select-online-agreement"},{key:"cookies",title:c.cookies,url:"https://www.bentley.com/en/cookie-policy"},{key:"legalNotices",title:c.legalNotices,url:"https://connect.bentley.com/Legal"}],o=Object.assign(i=>{let{children:t,customElements:l,translatedTitles:p,className:d,...w}=i,n={...c,...p},a=E.map(s=>{if(s.key&&n.hasOwnProperty(s.key)){let u=s.key;return{...s,title:n[u]}}return s}),m=a;return l&&(m=typeof l=="function"?l(a):[...a,...l]),r.createElement(x,{as:"footer",className:k("iui-legal-footer",d),...w},t||r.createElement(g,null,m.map((s,u)=>r.createElement(r.Fragment,{key:s.key||`${s.title}-${u}`},u>0&&r.createElement(h,null),r.createElement(f,null,s.url?r.createElement(v,{href:s.url,target:"_blank",rel:"noreferrer"},s.title):s.title)))))},{List:g,Item:f,Separator:h}),j=i=>r.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...i},r.createElement("path",{d:"M8 12.5a5.19 5.19 0 01-3.872-1.666.5.5 0 11.744-.668A4.191 4.191 0 008 11.5a4.191 4.191 0 003.128-1.334.5.5 0 11.744.668A5.19 5.19 0 018 12.5zM11 5a1.146 1.146 0 011 1.25 1.146 1.146 0 01-1 1.25 1.146 1.146 0 01-1-1.25A1.146 1.146 0 0111 5zM5 5a1.146 1.146 0 011 1.25A1.146 1.146 0 015 7.5a1.146 1.146 0 01-1-1.25A1.146 1.146 0 015 5zm3-4a7 7 0 11-7 7 7.008 7.008 0 017-7m0-1a8 8 0 108 8 8 8 0 00-8-8z"})),F={title:"Footer"},O=()=>e.jsx(o,{translatedTitles:{cookies:"Cookies translated"}}),S=()=>e.jsx(o,{customElements:[{title:"Custom",url:"https://www.bentley.com/"}]}),T=()=>e.jsx(o,{customElements:()=>[{title:"Custom Element 1",url:"https://www.bentley.com/"},{title:"Custom Element 2"},{title:"Custom Element 3"},{title:"Custom Element 4"}]}),z=()=>{const i=t=>{const l={privacy:"https://www.bentley.com/",cookies:"https://www.bentley.com/",legalNotices:"https://www.bentley.com/"},p={termsOfService:"Terms of service translated",privacy:"Privacy translated",termsOfUse:"Terms of use translated",cookies:"Cookies translated",legalNotices:"Legal notices translated"},d=[{title:"Custom Element 1",url:"https://www.bentley.com/"},{title:"Custom Element 2"}];return[...t.map(({key:n,title:a,url:m})=>({key:n,title:n?p[n]??a:a,url:n?l[n]??m:m})),...d]};return e.jsx(o,{customElements:i})},B=()=>e.jsx("div",{children:e.jsx(o,{style:{position:"fixed",bottom:0}})}),N=()=>{const i=e.jsxs(o.Item,{children:[e.jsx(j,{style:{width:12,height:12,marginRight:4}}),e.jsxs("span",{children:["Powered by Happiness © ",new Date().getFullYear()]})]},"copyright");return e.jsx(o,{children:e.jsx(o.List,{children:[i,...E.filter(t=>t.key!=="copyright").flatMap((t,l)=>e.jsxs(r.Fragment,{children:[e.jsx(o.Separator,{}),e.jsx(o.Item,{children:t.url?e.jsx("a",{href:t.url,target:"_blank",rel:"noreferrer",children:t.title}):t.title})]},t.key||`${t.title}-${l}`)),,]})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{S as AppendedCustomElements,O as Basic,B as BottomFixed,N as CustomContent,z as CustomizedDefaultAndCustomElements,T as OnlyCustomElements,F as default};
