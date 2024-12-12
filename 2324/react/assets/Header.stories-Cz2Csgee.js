import{r as t,o as P,B as o,c as j,I as C,h as B,e as H,j as e}from"./index-CrW_2eAO.js";import{S as I}from"./Network-D2FW4hlb.js";import{S as U}from"./Notification-JUMUmyWY.js";import{D as w}from"./DropdownMenu-BI4RIPaI.js";import{S as L}from"./SvgChevronRight-DKY00AWx.js";import{S as R}from"./SvgCaretUpSmall-BHfhPcmx.js";import{S as A}from"./SvgCaretDownSmall-CTaGjTPa.js";import{A as E}from"./Avatar-BTYgbjYH.js";import{M as v}from"./MenuItem-CV2KM48D.js";import{M as F}from"./MenuExtraContent-BN76CfNX.js";import{T as z}from"./Text-D4FlMT9K.js";import{S as D}from"./Select-CC-k_Ujm.js";import{M as O}from"./MenuDivider-DGxpj2F4.js";import{I as W}from"./Input-3REH9c-W.js";import{g as M}from"./colors-ymlpSE_k.js";import"./focusable-Bsdf7ZRn.js";import"./ListItem-JRvQwkkZ.js";import"./LinkAction-BoE8S-fS.js";import"./Tag-6nz-_7Dn.js";import"./Icon-DmGOjYiE.js";import"./List-DqPcjK5I.js";import"./SvgCheckmark-dYp65ACF.js";const J=r=>t.createElement(P,r,t.createElement("path",{d:"m8 4a2 2 0 1 1 2-2 2 2 0 0 1 -2 2zm2 4a2 2 0 1 0 -2 2 2 2 0 0 0 2-2zm0 6a2 2 0 1 0 -2 2 2 2 0 0 0 2-2z"}));let Y={moreOptions:"More options"};const k=t.forwardRef((r,a)=>{let{appLogo:s,breadcrumbs:i,isSlim:n=!1,actions:c,menuItems:l,translatedStrings:m,className:h,children:b,...u}=r,g={...Y,...m};return t.createElement(o,{as:"header",className:j("iui-page-header",h),"data-iui-size":n?"slim":void 0,ref:a,...u},t.createElement(o,{className:"iui-page-header-left"},s,i&&t.createElement(o,{className:"iui-page-header-divider"}),i),b&&t.createElement(o,{className:"iui-page-header-center"},b),t.createElement(o,{className:"iui-page-header-right"},c,l&&t.createElement(w,{menuItems:l},t.createElement(C,{styleType:"borderless","aria-label":g.moreOptions},t.createElement(J,{"aria-hidden":!0})))))}),S=t.forwardRef((r,a)=>{let{className:s,items:i,...n}=r;return t.createElement(o,{as:"nav","aria-label":"breadcrumbs",className:j("iui-breadcrumbs","iui-header-breadcrumbs",s),ref:a,...n},t.createElement(o,{as:"ol",className:j("iui-breadcrumbs-list","iui-header-breadcrumbs-list")},i.reduce((c,l,m)=>[...c,l,m!==i.length-1&&t.createElement(o,{as:"li",className:"iui-breadcrumbs-separator",key:m},t.createElement(L,{key:`chevron${m}`,"aria-hidden":!0,className:"iui-chevron"}))],[])))}),T=t.forwardRef((r,a)=>{let{className:s,children:i,startIcon:n,endIcon:c,styleType:l,size:m,...h}=r;return t.createElement(B,{className:j("iui-header-breadcrumb-button",s),ref:a,...h},n,i,c)}),$=t.forwardRef((r,a)=>{let{menuItems:s,className:i,menuPlacement:n="bottom-end",children:c,disabled:l,...m}=r,[h,b]=t.useState(!1),[u,g]=t.useState(0),x=t.useRef(null);return t.useEffect(()=>{x.current&&g(x.current.offsetWidth)},[c]),t.createElement(o,{className:j("iui-header-breadcrumb-button-wrapper",i),ref:x},t.createElement(T,{ref:a,disabled:l,...m},c),t.createElement(w,{placement:n,menuItems:s,style:{minInlineSize:u},onVisibleChange:V=>b(V)},t.createElement(B,{"aria-label":"More",className:"iui-header-breadcrumb-button iui-header-breadcrumb-button-split",disabled:l},h?t.createElement(R,{className:"iui-header-breadcrumb-button-dropdown-icon","aria-hidden":!0}):t.createElement(A,{className:"iui-header-breadcrumb-button-dropdown-icon","aria-hidden":!0}))))}),_=t.forwardRef((r,a)=>{let{menuItems:s,className:i,children:n,...c}=r,[l,m]=t.useState(!1),[h,b]=t.useState(0),u=t.useRef(null),g=H(a,u);return t.useEffect(()=>{u.current&&b(u.current.offsetWidth)},[n]),t.createElement(w,{menuItems:s,style:{minInlineSize:h},onVisibleChange:x=>m(x)},t.createElement(T,{className:j("iui-header-breadcrumb-button",i),ref:g,"aria-label":"Dropdown",endIcon:l?t.createElement(R,{className:"iui-header-breadcrumb-button-dropdown-icon","aria-hidden":!0}):t.createElement(A,{className:"iui-header-breadcrumb-button-dropdown-icon","aria-hidden":!0}),...c},n))}),d=t.forwardRef((r,a)=>{let{name:s,description:i,htmlName:n,isActive:c=!1,startIcon:l,menuItems:m,disabled:h,...b}=r,u={startIcon:l?t.createElement(o,{as:"span",className:"iui-header-breadcrumb-button-icon","aria-hidden":!0},l):null,children:t.createElement(o,{as:"span",className:"iui-header-breadcrumb-button-text"},t.createElement(o,{as:"span",className:"iui-header-breadcrumb-button-text-label"},s),i&&t.createElement(o,{as:"span",className:"iui-header-breadcrumb-button-text-sublabel"},i)),ref:a,disabled:h,name:n,...!!m&&{menuItems:m},...b},g=r.menuItems&&r.onClick?t.createElement($,u):r.menuItems?t.createElement(_,u):t.createElement(T,u);return t.createElement(o,{as:"li",className:"iui-header-breadcrumb-item","aria-current":c?"location":void 0,"aria-disabled":h?"true":void 0},g)}),y=t.forwardRef((r,a)=>{let{className:s,children:i,logo:n,onClick:c,as:l=c?"button":"div",...m}=r;return t.createElement(o,{className:j("iui-header-brand",s),as:l,type:l==="button"?"button":void 0,onClick:c,ref:a,...m},n?t.createElement(o,{as:"span",className:"iui-header-brand-icon","aria-hidden":!0},n):null,i&&t.createElement(o,{as:"span",className:"iui-header-brand-label"},i))}),q=r=>t.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...r},t.createElement("path",{d:"M10.015 6.346a2.52 2.52 0 01-.93 1.79 1.991 1.991 0 00-.79 1.5h-1.11a2.921 2.921 0 011.12-2.29c.787-.677.621-1.96-.38-1.96-.633.022-.74.696-.74 1.28h-1.2a2.868 2.868 0 01.68-2.09 2.041 2.041 0 013.35 1.77zm-1.52 4.805a.745.745 0 11-.745-.745.745.745 0 01.745.745zM8 1.501A6.499 6.499 0 111.501 8 6.506 6.506 0 018 1.501m0-1.5A7.999 7.999 0 1015.999 8 7.999 7.999 0 008 .001z"})),G=r=>t.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...r},t.createElement("path",{d:"M14.025 3.253l-5-2.974a2.023 2.023 0 00-2.05 0l-5 2.974A1.994 1.994 0 001 4.963v6.073a2.025 2.025 0 00.975 1.71l5 2.975a2.023 2.023 0 002.05 0l5-2.974a1.994 1.994 0 00.975-1.71V4.938a1.953 1.953 0 00-.975-1.686zM8 3.25a1.063 1.063 0 11-1.063 1.063A1.063 1.063 0 018 3.25zm3 9.19a.25.25 0 01-.122.214l-2.725 1.623a.25.25 0 01-.255 0L5.123 12.64A.25.25 0 015 12.424v-1.441a.25.25 0 01.378-.215L7 11.667v-3.43l-.878-.56A.25.25 0 016 7.462V6.016a.25.25 0 01.378-.214l2.5 1.383A.25.25 0 019 7.399v4.268l1.622-.899a.25.25 0 01.378.215z"})),N=r=>t.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...r},t.createElement("path",{d:"M10.5 0a3.905 3.905 0 00-1.466 3.051c0 .097.007.192.014.287L6.8 5.586a4.806 4.806 0 00-4.773 1.601l2.942 2.941L0 15.097V16h.903l4.969-4.969 2.94 2.941A4.806 4.806 0 0010.415 9.2l2.248-2.248c.095.007.19.014.287.014A3.905 3.905 0 0016 5.501z"})),xe={title:"Header"},f=(r,a)=>s=>{console.log(`Menu '${r}', ${s} clicked!`),a()},p=r=>a=>[e.jsxs(v,{value:"Item #1",onClick:f(r,a),children:[r," item #1"]},1),e.jsxs(v,{value:"Item #2",onClick:f(r,a),children:[r," item #2"]},2),e.jsxs(v,{value:"Item #3",onClick:f(r,a),children:[r," item #3"]},3)],ve=()=>{const[r,a]=t.useState("User"),s=i=>[e.jsx(F,{children:e.jsxs(e.Fragment,{children:[e.jsx(z,{variant:"leading",children:"Terry Rivers"}),e.jsx(z,{isMuted:!0,style:{marginBottom:8},children:"terry.rivers@email.com"}),e.jsx(D,{options:[{value:"User",label:"User"},{value:"Moderator",label:"Moderator"},{value:"Administrator",label:"Administrator"}],value:r,onChange:n=>a(n)})]})},0),e.jsx(O,{},1),e.jsx(v,{value:"View profile",onClick:f("Avatar",i),children:"View profile"},2),e.jsx(v,{value:"Sign out",onClick:f("Avatar",i),children:"Sign out"},3)];return e.jsx(k,{appLogo:e.jsx(y,{logo:e.jsx("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"m12.6 13.4c-1.2-1.5-2.1-3.1-2.4-5.5-2.7 3.9-4.6 4.2-5.7 2.4l-1.2 5.7h-2.2l3.5-14.1 1.8-.4c-.1.5-1.4 6.2.6 7 2 .7 4.6-8.5 4.6-8.5l2.2.4c-1.6 3.7-1.6 7.6 1.1 10.9l-2.3 2.1"})}),onClick:()=>console.log("Clicked on the title"),children:"Microstation"}),breadcrumbs:e.jsx(S,{items:[e.jsx(d,{onClick:()=>console.log("Clicked on the Project"),menuItems:p("Project"),name:"Project A (Super Size Edition)",description:"YJC-2249",startIcon:e.jsx(I,{}),disabled:!0},"project"),e.jsx(d,{onClick:()=>console.log("Clicked on the iModel"),menuItems:p("iModel"),name:"iModel B",startIcon:e.jsx("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png",style:{objectFit:"cover"}}),isActive:!0},"iModel"),e.jsx(d,{name:"Version C",onClick:()=>console.log("Clicked on the Version"),startIcon:e.jsx(N,{})},"version")]}),actions:[e.jsx(C,{onClick:()=>console.log("Clicked on the notification bell"),styleType:"borderless","aria-label":"Notifications",children:e.jsx(U,{})},"notif"),e.jsx(w,{menuItems:p("Help"),children:e.jsx(C,{styleType:"borderless","aria-label":"Help",children:e.jsx(q,{})})},"help"),e.jsx(w,{menuItems:s,children:e.jsx(C,{styleType:"borderless","aria-label":"User",children:e.jsx(E,{size:"medium",abbreviation:"TR",backgroundColor:M("Terry Rivers"),image:e.jsx("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/user-placeholder.png"}),title:"Terry Rivers"})})},"avatar")],menuItems:p("More")})},fe=()=>e.jsx(k,{appLogo:e.jsx(y,{logo:e.jsx("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"m12.6 13.4c-1.2-1.5-2.1-3.1-2.4-5.5-2.7 3.9-4.6 4.2-5.7 2.4l-1.2 5.7h-2.2l3.5-14.1 1.8-.4c-.1.5-1.4 6.2.6 7 2 .7 4.6-8.5 4.6-8.5l2.2.4c-1.6 3.7-1.6 7.6 1.1 10.9l-2.3 2.1"})})}),breadcrumbs:e.jsx(S,{items:[e.jsx(d,{name:"Project A (Super Size Edition)",description:"YJC-2249",startIcon:e.jsx(I,{}),onClick:()=>console.log("Clicked on the Project"),menuItems:p("Project")},"project"),e.jsx(d,{name:"iModel B",startIcon:e.jsx("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png",style:{objectFit:"cover"}}),onClick:()=>console.log("Clicked on the iModel")},"iModel"),e.jsx(d,{name:"Version C",menuItems:p("Version"),startIcon:e.jsx(N,{}),isActive:!0},"version")]}),actions:[e.jsx(E,{size:"medium",abbreviation:"TR",backgroundColor:M("Terry Rivers"),title:"Terry Rivers"},"avatar")]}),we=()=>e.jsx(k,{isSlim:!0,appLogo:e.jsx(y,{logo:e.jsx("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"m12.6 13.4c-1.2-1.5-2.1-3.1-2.4-5.5-2.7 3.9-4.6 4.2-5.7 2.4l-1.2 5.7h-2.2l3.5-14.1 1.8-.4c-.1.5-1.4 6.2.6 7 2 .7 4.6-8.5 4.6-8.5l2.2.4c-1.6 3.7-1.6 7.6 1.1 10.9l-2.3 2.1"})})}),breadcrumbs:e.jsx(S,{items:[e.jsx(d,{name:"Project A (Super Size Edition)",description:"YJC-2249",startIcon:e.jsx(I,{}),onClick:()=>console.log("Clicked on the Project"),menuItems:p("Project")},"project"),e.jsx(d,{name:"iModel B",startIcon:e.jsx("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png",style:{objectFit:"cover"}}),onClick:()=>console.log("Clicked on the iModel")},"iModel"),e.jsx(d,{name:"Version C",menuItems:p("Version"),startIcon:e.jsx(N,{}),isActive:!0},"version")]}),actions:[e.jsx(E,{size:"medium",abbreviation:"TR",backgroundColor:M("Terry Rivers"),title:"Terry Rivers"},"avatar")]}),Ce=()=>{const r=e.jsxs(e.Fragment,{children:[e.jsxs("style",{children:[".center-input { border-radius: 22px; width: 20vw; transition: all 0.2s ease }",".iui-slim .iui-center { align-items: unset }",".iui-slim .center-input { min-height: unset }","@media (max-width: 768px) { .center-input { display: none; } }"]}),e.jsx(W,{className:"center-input",placeholder:"Search within Model B..."})]});return e.jsx(k,{appLogo:e.jsx(y,{logo:e.jsx(G,{})}),breadcrumbs:e.jsx(S,{items:[e.jsx(d,{name:"Project A",description:"YJC-2249",startIcon:e.jsx(I,{}),onClick:()=>console.log("Clicked on the Project"),menuItems:p("Project")},"project"),e.jsx(d,{name:"iModel B",startIcon:e.jsx("img",{src:"https://itwinplatformcdn.azureedge.net/iTwinUI/stadium.png",style:{objectFit:"cover"}}),onClick:()=>console.log("Clicked on the iModel")},"iModel"),e.jsx(d,{name:"Version C",onClick:()=>console.log("Clicked on the Version"),startIcon:e.jsx(N,{}),isActive:!0},"version")]}),actions:[e.jsx(E,{size:"medium",abbreviation:"TR",backgroundColor:M("Terry Rivers"),title:"Terry Rivers"},"avatar")],menuItems:p("More"),children:r})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{fe as Basic,Ce as CenterContent,ve as Full,we as Slim,xe as default};
