import{r as t,B as E,c as u,u as f,p as T,h as w,m as v,l as N,S as y,j as n}from"./index-DTVZzNG9.js";import{I as h}from"./Icon-xRuzto5k.js";import{L as S}from"./LinkAction-Rlo0bCje.js";import{S as W}from"./SvgChevronRight-D3IU7Mvc.js";let m=t.createContext(void 0),R=t.forwardRef((a,l)=>{let{children:r,title:i,caption:c,endIcon:s,...d}=a;return t.createElement(e.Wrapper,{...d,ref:l},t.createElement(e.Trigger,{label:i,caption:c,endIcon:s}),t.createElement(e.Content,null,r))}),A=t.forwardRef((a,l)=>{let{children:r,className:i,onToggle:c,style:s,isExpanded:d,status:x,size:p="default",styleType:o="default",disabled:b=!1,...B}=a,[j,C]=t.useState(d??!1),k=d??j,[g,I]=t.useState(void 0);return t.createElement(m.Provider,{value:{status:x,isExpanded:k,onToggle:c,size:p,styleType:o,disabled:b,setExpanded:C,children:r,descriptionId:g,setDescriptionId:I}},t.createElement(E,{className:u("iui-expandable-block",i),"data-iui-expanded":k,"data-iui-size":p,"data-iui-variant":o!=="default"?o:void 0,style:s,ref:l,...B},r))}),L=t.forwardRef((a,l)=>{let{className:r,children:i,label:c,caption:s,expandIcon:d,endIcon:x,...p}=a,{disabled:o,status:b}=f(m);return t.createElement(S,{className:u("iui-expandable-header",r),"data-iui-disabled":o?"true":void 0,ref:l,...p},i??t.createElement(t.Fragment,null,d??t.createElement(e.ExpandIcon,null),t.createElement(e.LabelArea,null,t.createElement(e.Title,null,c),s&&t.createElement(e.Caption,null,s)),x||b?t.createElement(e.EndIcon,null,x):null))}),D=t.forwardRef((a,l)=>{let{className:r,children:i,...c}=a;return t.createElement(h,{className:u("iui-expandable-block-icon",r),ref:l,...c},i??t.createElement(W,{"aria-hidden":!0}))}),z=T.span("iui-expandable-block-label"),P=t.forwardRef((a,l)=>{let{className:r,children:i,onClick:c,...s}=a,{isExpanded:d,setExpanded:x,disabled:p,onToggle:o,descriptionId:b}=f(m);return t.createElement(w,{className:u("iui-expandable-block-title","iui-link-action",r),"aria-expanded":d,"aria-disabled":p,onClick:v(c,()=>{p||(x(!d),o==null||o(!d))}),ref:l,"aria-describedby":b,...s},i)}),F=t.forwardRef((a,l)=>{let r=N(),{setDescriptionId:i}=f(m);return t.useEffect(()=>(i(a.id||r),()=>i(void 0)),[a.id,r,i]),t.createElement(E,{ref:l,id:r,...a,className:u("iui-expandable-block-caption",a==null?void 0:a.className)})}),_=t.forwardRef((a,l)=>{let{children:r,...i}=a,{status:c}=f(m),s=r??(c&&y[c]());return t.createElement(h,{fill:c,ref:l,...i},s)}),H=t.forwardRef((a,l)=>{let{className:r,children:i,innerProps:c,...s}=a;return t.createElement(E,{className:u("iui-expandable-content",r),ref:l,...s},t.createElement(E,c,i))});const e=Object.assign(R,{Wrapper:A,Trigger:L,ExpandIcon:D,LabelArea:z,Title:P,Caption:F,EndIcon:_,Content:H}),G={title:"ExpandableBlock"},J=()=>n.jsx(e,{title:"Basic Block",children:"Content in block!"}),K=()=>n.jsxs(e.Wrapper,{children:[n.jsxs(e.Trigger,{children:[n.jsx(e.ExpandIcon,{}),n.jsxs(e.LabelArea,{children:[n.jsx(e.Title,{children:"Basic Block"}),n.jsx(e.Caption,{children:"basic caption"})]})]}),n.jsx(e.Content,{children:"Content in block!"})]}),Q=()=>n.jsx(n.Fragment,{children:[...Array(3).fill(null)].map((a,l)=>n.jsxs(e.Wrapper,{children:[n.jsx(e.Trigger,{label:`Basic Block #${l+1}`}),n.jsx(e.Content,{children:"Content in block!"})]},l))}),U=()=>n.jsxs(e.Wrapper,{status:"positive",children:[n.jsxs(e.Trigger,{children:[n.jsx(e.ExpandIcon,{}),n.jsx(e.LabelArea,{children:n.jsx(e.Title,{children:"Basic Block With Status"})}),n.jsx(e.EndIcon,{})]}),n.jsx(e.Content,{children:"Content in block!"})]}),V=()=>n.jsxs(e.Wrapper,{size:"small",children:[n.jsx(e.Trigger,{label:"Basic Block"}),n.jsx(e.Content,{children:"Content in block!"})]}),X=()=>n.jsxs(e.Wrapper,{styleType:"borderless",children:[n.jsx(e.Trigger,{label:"Basic Block"}),n.jsx(e.Content,{children:"Content in block!"})]}),Y=()=>n.jsxs(e.Wrapper,{disabled:!0,children:[n.jsx(e.Trigger,{label:"Disabled Block"}),n.jsx(e.Content,{children:"Content in block!"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Q as Accordion,J as Basic,X as Borderless,Y as Disabled,V as Small,U as StatusIcon,K as WithCaption,G as default};
