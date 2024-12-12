import{p as ue,r as e,g as K,V as oe,c as k,O as L,m as W,l as ce,n as me,y as de,e as $,B as T,G as fe,N as be,Q as Ee}from"./index-CMT5ZWXL.js";import{M as ve}from"./MenuItem-Cys7w8BZ.js";import{T as ge}from"./Tag-BgYubxDr.js";import{I as he}from"./Icon-Blg8hdXF.js";import{L as Se}from"./List-eHU5MT9M.js";import{S as ye}from"./SvgCheckmark-FJJNjO0I.js";import{S as Ce}from"./SvgCaretDownSmall-Bmd4DO7F.js";const P=ue.div("iui-input-with-icon"),pe=({text:t=""})=>{let[n,a]=e.useState(t);return e.useEffect(()=>{var s;a(t);let r=(s=K())==null?void 0:s.setTimeout(()=>a(""),5e3);return()=>{var o;return void((o=K())==null?void 0:o.clearTimeout(r))}},[t]),e.createElement(oe,{as:"div","aria-live":"polite","aria-atomic":"true"},n)},j=e.forwardRef((t,n)=>{let{className:a,label:r,...s}=t;return e.createElement(ge,{className:k("iui-select-tag",a),labelProps:{className:"iui-select-tag-label"},removeButtonProps:{className:"iui-select-tag-button"},ref:n,...s},r)}),xe=e.forwardRef((t,n)=>{let{tags:a,className:r,...s}=t,o=e.useMemo(()=>e.Children.toArray(a),[a]);return e.createElement(L,{itemsCount:o.length,className:k("iui-select-tag-container",r),ref:n,...s},e.createElement(Ne,{...t,tags:o}))});let Ne=t=>{let{tags:n}=t,{visibleCount:a}=L.useContext();return e.createElement(e.Fragment,null,a<n.length?n.slice(0,a-1):n,e.createElement(L.OverflowNode,null,e.createElement(j,{label:`+${n.length-a+1} item(s)`})))};const Ae=e.forwardRef((t,n)=>{let{native:a,...r}=t,s=a?we:ke;return e.createElement(s,{...r,ref:n})});let we=e.forwardRef((t,n)=>{let{triggerProps:a,options:r,disabled:s,placeholder:o,defaultValue:p=o!==void 0?"":void 0,value:d,onChange:g,size:h,status:x,styleType:c,required:E,...f}=t;return e.createElement(P,{...f,ref:n},e.createElement(G,{as:"select",size:h,status:x,styleType:c,disabled:s,defaultValue:d===void 0?p:void 0,value:d===null?"":d,required:E,...a,onKeyDown:W(a==null?void 0:a.onKeyDown,u=>{var I,V;u.key==="Enter"&&((V=(I=u.currentTarget).showPicker)==null||V.call(I))}),onChange:W(a==null?void 0:a.onChange,u=>{g==null||g(u.currentTarget.value,u)})},c!=="borderless"&&o!==void 0?e.createElement("option",{value:"",disabled:!0},o):null,r.map(u=>e.createElement("option",{key:u.value,...u},u.label))),e.createElement(Q,{disabled:s}))}),ke=e.forwardRef((t,n)=>{let a=ce(),{options:r,value:s,onChange:o,placeholder:p,disabled:d=!1,size:g,itemRenderer:h,selectedItemRenderer:x,menuClassName:c,menuStyle:E,multiple:f=!1,triggerProps:u,status:I,popoverProps:{portal:V=!0,...m}={},styleType:U,...J}=t,[O,z]=e.useState(!1),[X,Y]=e.useState(""),[Z,A]=e.useState(),i=s!==void 0?s:Z,v=me(o),q=e.useRef(null),_=e.useCallback(()=>{var l;d||(z(!0),(l=m==null?void 0:m.onVisibleChange)==null||l.call(m,!0))},[d,m]),M=e.useCallback(()=>{var l,b;z(!1),(l=q.current)==null||l.focus({preventScroll:!0}),(b=m==null?void 0:m.onVisibleChange)==null||b.call(m,!1)},[m]),ee=e.useMemo(()=>r.map((l,b)=>{let y=F(i,f)?(i==null?void 0:i.includes(l.value))??!1:i===l.value,D=h?h(l,{close:()=>z(!1),isSelected:y}):e.createElement(ve,null,l.label),{label:le,icon:ne,startIcon:re,...se}=l,ie=re??ne;return e.cloneElement(D,{key:`${le}-${b}`,isSelected:y,startIcon:ie,endIcon:y?e.createElement(ye,{"aria-hidden":!0}):null,onClick:()=>{var w,H;if(!l.disabled&&(Re(v.current,f)?(A(l.value),(w=v.current)==null||w.call(v,l.value),M()):(A(C=>y?C==null?void 0:C.filter(B=>l.value!==B):[...C??[],l.value]),(H=v.current)==null||H.call(v,l.value,y?"removed":"added")),F(i,f))){let C=i||[],B=y?C.filter(R=>l.value!==R):[...C,l.value];Y(r.filter(R=>B.includes(R.value)).map(R=>R.label).filter(Boolean).join(", "))}},ref:w=>{y&&!f&&(w==null||w.scrollIntoView({block:"nearest"}))},role:"option",...se,...D.props})}),[M,h,f,v,r,i]),S=e.useMemo(()=>{if(i!=null)return F(i,f)?r.filter(l=>i.some(b=>b===l.value)):r.find(l=>l.value===i)},[f,r,i]),te=e.useMemo(()=>{let l=0;return Array.isArray(i)&&i.length>0?l=r.findIndex(b=>b.value===i[0]):i&&(l=r.findIndex(b=>b.value===i)),l>=0?l:0},[r,i]),ae=e.useCallback(l=>e.createElement(j,{key:l.label,label:l.label}),[]),N=de({visible:O,matchWidth:!0,closeOnOutsideClick:!0,middleware:{size:{maxHeight:"var(--iui-menu-max-height)"}},...m,onVisibleChange:l=>l?_():M()});return e.createElement(e.Fragment,null,e.createElement(P,{...J,ref:$(N.refs.setPositionReference,n)},e.createElement(G,{...N.getReferenceProps(),tabIndex:0,role:"combobox",size:g,status:I,"aria-disabled":d?"true":void 0,"data-iui-disabled":d?"true":void 0,"aria-autocomplete":"none","aria-expanded":O,"aria-haspopup":"listbox","aria-controls":`${a}-menu`,styleType:U,...u,ref:$(q,u==null?void 0:u.ref,N.refs.setReference),className:k({"iui-placeholder":(!S||S.length===0)&&!!p},u==null?void 0:u.className)},(!S||S.length===0)&&e.createElement(T,{as:"span",className:"iui-content"},p),F(S,f)?e.createElement(Ie,{selectedItems:S,selectedItemsRenderer:x,tagRenderer:ae}):e.createElement(Te,{selectedItem:S,selectedItemRenderer:x})),e.createElement(Q,{disabled:d,isOpen:O}),f?e.createElement(pe,{text:X}):null),N.open&&e.createElement(fe,{portal:V},e.createElement(Ve,{defaultFocusedIndex:te,className:c,id:`${a}-menu`,key:`${a}-menu`,...N.getFloatingProps({style:E,onKeyDown:({key:l})=>{l==="Tab"&&M()}}),ref:N.refs.setFloating},ee)))}),F=(t,n)=>n,Re=(t,n)=>!n,G=e.forwardRef((t,n)=>{let{size:a,status:r,styleType:s="default",...o}=t;return e.createElement(T,{"data-iui-size":a,"data-iui-status":r,"data-iui-variant":s!=="default"?s:void 0,...o,ref:n,className:k("iui-select-button","iui-field",t.className)})}),Q=e.forwardRef((t,n)=>{let{disabled:a,isOpen:r,...s}=t;return e.createElement(he,{"aria-hidden":!0,...s,ref:n,className:k("iui-end-icon",{"iui-disabled":a,"iui-open":r},t.className)},e.createElement(Ce,null))}),Te=({selectedItem:t,selectedItemRenderer:n})=>{let a=(t==null?void 0:t.startIcon)??(t==null?void 0:t.icon);return e.createElement(e.Fragment,null,t&&n&&n(t),t&&!n&&e.createElement(e.Fragment,null,a&&e.createElement(T,{as:"span",className:"iui-icon","aria-hidden":!0},a),e.createElement(T,{as:"span",className:"iui-content"},t.label)))},Ie=({selectedItems:t,selectedItemsRenderer:n,tagRenderer:a})=>{let r=e.useMemo(()=>t?t.map(s=>a(s)):[],[t,a]);return e.createElement(e.Fragment,null,t&&n&&n(t),t&&!n&&e.createElement(T,{as:"span",className:"iui-content"},e.createElement(xe,{tags:r})))},Ve=e.forwardRef((t,n)=>{let{defaultFocusedIndex:a=0,autoFocus:r=!0,children:s,className:o,...p}=t,[d,g]=e.useState(a),h=e.useCallback(c=>{queueMicrotask(()=>{let E=c==null?void 0:c.querySelector('[tabindex="0"]');E==null||E.focus()})},[]),x=e.useMemo(()=>e.Children.map(s,(c,E)=>e.isValidElement(c)?e.createElement(be,{key:E,render:c,ref:c.props.ref||c.ref}):c),[s]);return e.createElement(Ee,{render:e.createElement(Se,{as:"div",className:k("iui-menu",o)}),orientation:"vertical",role:"listbox",activeIndex:d,onNavigate:g,ref:$(n,r?h:void 0),...p},x)});export{pe as A,P as I,Ae as S,xe as a,j as b};
