import{r as s,j as e}from"./index-DXBjKzeP.js";import{S as t}from"./SearchBox-aafXyxfG.js";import{T as d}from"./Text-DcuUQEjC.js";import{D as r}from"./Divider-CCzXNRHb.js";import"./InputFlexContainer-TGAy7C0x.js";import"./Icon-DCEecauC.js";const n=a=>s.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...a},s.createElement("path",{d:"M4.807 6h6.395a.28.28 0 01.24.443L8.27 9.9a.34.34 0 01-.481 0L4.566 6.443A.27.27 0 014.806 6z"})),l=a=>s.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...a},s.createElement("path",{d:"M4.807 9.997h6.395a.28.28 0 00.24-.443L8.27 6.097a.34.34 0 00-.48 0h-.001L4.566 9.554a.27.27 0 00.24.443z"})),B={title:"SearchBox"},E=()=>e.jsx(t,{inputProps:{placeholder:"Basic search"}}),b=()=>e.jsxs(t,{children:[e.jsx(t.Button,{label:"Search button"}),e.jsx(t.Input,{placeholder:"Basic search with custom interactions"}),e.jsx(d,{isMuted:!0,variant:"body",as:"p",style:{paddingRight:"var(--iui-size-s)",alignSelf:"center"},children:"0/3"}),e.jsx(r,{orientation:"vertical"}),e.jsx(t.Button,{"aria-label":"Previous result",children:e.jsx(l,{})}),e.jsx(t.Button,{"aria-label":"Next result",children:e.jsx(n,{})})]}),S=()=>e.jsx(t,{inputProps:{placeholder:"Search with warning"},status:"warning"}),v=()=>e.jsx(t,{expandable:!0,inputProps:{placeholder:"Expandable search"}}),w=()=>e.jsxs(t,{expandable:!0,children:[e.jsx(t.CollapsedState,{children:e.jsx(t.ExpandButton,{styleType:"borderless"})}),e.jsxs(t.ExpandedState,{children:[e.jsx(t.Icon,{}),e.jsx(t.Input,{placeholder:"Expandable search with borderless ExpandButton"}),e.jsx(t.CollapseButton,{})]})]}),C=()=>e.jsxs(t,{expandable:!0,children:[e.jsx(t.CollapsedState,{}),e.jsxs(t.ExpandedState,{children:[e.jsx(t.Input,{placeholder:"Expandable search with custom interactions"}),e.jsx(t.Button,{"aria-label":"Previous result",children:e.jsx(l,{})}),e.jsx(t.Button,{"aria-label":"Next result",children:e.jsx(n,{})}),e.jsx(r,{orientation:"vertical"}),e.jsx(t.CollapseButton,{})]})]}),g=()=>e.jsx(t,{size:"small",inputProps:{placeholder:"Search..."}}),f=()=>{const[a,o]=s.useState(!1),i=()=>{console.log("Expanding searchbox"),o(!0)},c=()=>{console.log("Collapsing searchbox"),o(!1)};return e.jsxs(t,{expandable:!0,isExpanded:a,onExpand:i,onCollapse:c,children:[e.jsx(t.CollapsedState,{children:e.jsx(t.ExpandButton,{})}),e.jsxs(t.ExpandedState,{children:[e.jsx(t.Input,{placeholder:"Test"}),e.jsx(t.CollapseButton,{}),e.jsx(r,{orientation:"vertical"}),e.jsx(t.Button,{"aria-label":"Previous result",children:e.jsx(l,{})}),e.jsx(t.Button,{"aria-label":"Next result",children:e.jsx(n,{})})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{E as Basic,b as BasicWithCustomItems,S as BasicWithStatus,w as BorderlessExpandButton,v as Expandable,C as ExpandableWithCustomItems,g as Small,f as WithCustomAction,B as default};
