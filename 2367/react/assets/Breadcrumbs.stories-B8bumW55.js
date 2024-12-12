import{r as s,B as u,c as f,O as x,j as t,I as g}from"./index-Dv96QNIp.js";import{S as C}from"./ChevronRightDouble-BwmUYeOC.js";import{S as E}from"./Folder-BNBNEO_C.js";import{S as I}from"./More-Dzpa6ZPt.js";import{B as j}from"./Button-B_9YiJ55.js";import{A as k}from"./Anchor-C8Wm5PNz.js";import{S as y}from"./SvgChevronRight-B8WkKyyl.js";import{T as p}from"./Text-DBnt4SRn.js";import{D as B}from"./DropdownMenu-DmiDMjtG.js";import{M as v}from"./MenuItem-DdGhDnJ7.js";import{D as R}from"./DropdownButton-B4apMY7J.js";import{I as S}from"./Input-BRiVCKQB.js";import"./ProgressRadial-1hnZEbAI.js";import"./focusable-B75wnLyK.js";import"./ListItem-CoRQg2xJ.js";import"./LinkAction-BlP19DSj.js";import"./SvgCaretUpSmall-bBvWkNrX.js";import"./SvgCaretDownSmall-4IbG5BZ2.js";let A=s.forwardRef((r,n)=>{let{children:e,currentIndex:d=s.Children.count(e)-1,separator:o,overflowButton:a,className:i,...m}=r,c=s.useMemo(()=>s.Children.toArray(e),[e]);return s.createElement(u,{as:"nav",className:f("iui-breadcrumbs",i),ref:n,"aria-label":"Breadcrumb",...m},s.createElement(x,{as:"ol",itemsCount:c.length,className:"iui-breadcrumbs-list"},s.createElement(M,{currentIndex:d,overflowButton:a,separator:o},c)))}),M=r=>{let{children:n,currentIndex:e,overflowButton:d,separator:o}=r,{visibleCount:a}=x.useContext();return s.createElement(s.Fragment,null,a>1&&s.createElement(s.Fragment,null,s.createElement(b,{item:n[0],isActive:e===0}),s.createElement(h,{separator:o})),n.length-a>0&&s.createElement(s.Fragment,null,s.createElement(u,{as:"li",className:"iui-breadcrumbs-item"},d?d(a):s.createElement(u,{as:"span",className:"iui-breadcrumbs-content"},"…")),s.createElement(h,{separator:o})),n.slice(a>1?n.length-a+1:n.length-1).map((i,m)=>{let c=a>1?1+(n.length-a)+m:n.length-1;return s.createElement(s.Fragment,{key:c},s.createElement(b,{item:n[c],isActive:e===c}),c<n.length-1&&s.createElement(h,{separator:o}))}))},b=({item:r,isActive:n})=>{let e=r;return((e==null?void 0:e.type)==="span"||(e==null?void 0:e.type)==="a"||(e==null?void 0:e.type)===j)&&(e=s.createElement(w,e.props)),s.createElement(u,{as:"li",className:"iui-breadcrumbs-item"},e&&s.cloneElement(e,{"aria-current":e.props["aria-current"]??n?"location":void 0}))},h=({separator:r})=>s.createElement(u,{as:"li",className:"iui-breadcrumbs-separator","aria-hidden":!0},r??s.createElement(y,null)),w=s.forwardRef((r,n)=>{let{as:e,...d}=r,o={...d,className:f("iui-breadcrumbs-content",r.className),ref:n};return String(e)==="span"||r.href==null&&r.onClick==null&&e==null?s.createElement(u,{as:"span",...o}):s.createElement(j,{as:e==="a"||e==null&&r.href?k:e,styleType:"borderless",...o})});const l=Object.assign(A,{Item:w}),Z={title:"Breadcrumbs"},ee=()=>t.jsxs(l,{children:[t.jsx(l.Item,{onClick:()=>console.log("Root"),children:"Root"},0),t.jsx(l.Item,{onClick:()=>console.log("Item 1"),children:"Item 1"},1),t.jsx(l.Item,{onClick:()=>console.log("Item 2"),children:"Item 2"},2)]}),te=()=>t.jsxs(l,{children:[t.jsx(l.Item,{href:"/",children:"iTwinUI"},0),t.jsx(l.Item,{href:"/?path=/docs/core-breadcrumbs",children:"Breadcrumbs"},1),t.jsx(l.Item,{children:"Links"},2)]}),re=()=>t.jsxs(l,{separator:t.jsx(C,{}),children:[t.jsx(l.Item,{onClick:()=>console.log("Root"),children:"Root"},0),t.jsx(l.Item,{onClick:()=>console.log("Item 1"),children:"Item 1"},1),t.jsx(l.Item,{onClick:()=>console.log("Item 2"),children:"Item 2"},2)]}),N=()=>{const r=Array(10).fill(null).map((n,e)=>t.jsxs(l.Item,{onClick:()=>console.log(`Clicked on breadcrumb ${e+1}`),children:["Item ",e]},e));return t.jsx(l,{children:r})};N.decorators=[r=>t.jsxs(t.Fragment,{children:[t.jsx(p,{variant:"small",as:"small",isMuted:!0,children:"Resize the container to see overflow behavior."}),t.jsx("div",{style:{width:"min(30rem, 100%)",border:"1px solid lightpink",padding:8,resize:"inline",overflow:"hidden"},children:t.jsx(r,{})})]})];const F=()=>{const r=Array(10).fill(null).map((n,e)=>t.jsxs(l.Item,{onClick:()=>console.log(`Clicked on breadcrumb ${e+1}`),children:["Item ",e]},e));return t.jsx(l,{overflowButton:n=>{const e=n>1?r.length-n:r.length-2;return t.jsx(g,{"aria-label":`Item ${e}`,onClick:()=>{console.log(`Visit breadcrumb ${e}`)},styleType:"borderless",label:`Item ${e}`,labelProps:{placement:"bottom"},children:t.jsx(I,{})})},children:r})};F.decorators=[r=>t.jsxs(t.Fragment,{children:[t.jsx(p,{variant:"small",as:"small",isMuted:!0,children:"Resize the container to see overflow behavior."}),t.jsx("div",{style:{width:"min(30rem, 100%)",border:"1px solid lightpink",padding:8,resize:"inline",overflow:"hidden"},children:t.jsx(r,{})})]})];const $=()=>{const r=Array(10).fill(null).map((n,e)=>t.jsxs(l.Item,{onClick:()=>console.log(`Clicked on breadcrumb ${e+1}`),children:["Item ",e]},e));return t.jsx(l,{overflowButton:n=>t.jsx(B,{menuItems:e=>Array(r.length-n).fill(null).map((d,o)=>{const a=n>1?o+1:o,i=()=>{console.log(`Visit breadcrumb ${a}`),e()};return t.jsxs(v,{onClick:i,children:["Item ",a]},a)}),children:t.jsx(g,{"aria-label":"Dropdown with more breadcrumbs",onClick:()=>console.log("Clicked on overflow icon"),styleType:"borderless",children:t.jsx(I,{})})}),children:r})};$.decorators=[r=>t.jsxs(t.Fragment,{children:[t.jsx(p,{variant:"small",as:"small",isMuted:!0,children:"Resize the container to see overflow behavior."}),t.jsx("div",{style:{width:"min(30rem, 100%)",border:"1px solid lightpink",padding:8,resize:"inline",overflow:"hidden"},children:t.jsx(r,{})})]})];const se=()=>{const r=s.useMemo(()=>["Root","Level 1","Level 2","Level 3","Level 4"],[]),[n,e]=s.useState(r.length-1),[d,o]=s.useState(!1),a=s.useMemo(()=>r.slice(0,n+1).map((i,m)=>t.jsx(l.Item,{onClick:()=>{n!==m?e(m):o(!0)},children:i},`Breadcrumb${m}`)),[r,n]);return t.jsxs("div",{style:{display:"inline-flex",width:450},children:[t.jsx(R,{startIcon:t.jsx(E,{"aria-hidden":!0}),styleType:"borderless",menuItems:i=>r.map((m,c)=>t.jsx(v,{onClick:()=>{e(c),o(!1),i()},children:m},`Item${c}`))}),d?t.jsx(S,{defaultValue:r.slice(0,n+1).join("/"),onChange:({target:{value:i}})=>{const m=i.substring(i.lastIndexOf("/",i.length-2)+1);e(r.findIndex(c=>m.includes(c)))},onKeyDown:({key:i})=>i==="Enter"&&o(!1),onBlur:()=>o(!1)}):t.jsx(l,{children:a})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{ee as Basic,F as CustomOverflowBackButton,$ as CustomOverflowDropdown,re as CustomSeparator,se as FolderNavigation,te as Links,N as Overflow,Z as default};
