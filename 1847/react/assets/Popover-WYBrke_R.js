import{r as t,e as R,n as y,h as C,w,P as k,F as I,z as O,A as S,B as z,c as M,v as W,C as B,D as L,E as N,G as U,H as $,J as A,K as D,L as H,M as V,N as G,O as J,Q as K,U as Q,W as T,X,Y}from"./index-7nKTUIFH.js";const j=o=>{const{placement:m="bottom-start",visible:p,onVisibleChange:g,closeOnOutsideClick:h,autoUpdateOptions:b,matchWidth:i,trigger:r={click:!0,hover:!1,focus:!1},role:c}=o,n={flip:!0,shift:!0,...o.middleware},[f,d]=W(!1,p,g),a=B({placement:m,open:f,onOpenChange:d,whileElementsMounted:(...s)=>V(...s,b),middleware:[n.offset!==void 0&&G(n.offset),n.flip&&J(),n.shift&&K(),i&&Q({apply:({rects:s})=>{v(s.reference.width)}}),n.autoPlacement&&T(),n.inline&&X(),n.hide&&Y()].filter(Boolean)}),l=L([N(a.context,{enabled:!!r.click}),U(a.context,{outsidePress:h}),$(a.context,{enabled:!!r.hover,delay:100,handleClose:A({buffer:1})}),D(a.context,{enabled:!!r.focus}),H(a.context,{role:"dialog",enabled:!!c})]),[e,v]=t.useState(),u=t.useCallback(s=>l.getFloatingProps({...s,style:{...a.floatingStyles,zIndex:9999,...i&&e?{minInlineSize:`${e}px`,maxInlineSize:`min(${e*2}px, 90vw)`}:{},...s==null?void 0:s.style}}),[a.floatingStyles,l,i,e]);return t.useMemo(()=>({open:f,onOpenChange:d,...l,getFloatingProps:u,...a}),[f,d,l,u,a])},Z=t.forwardRef((o,m)=>{var x;const{portal:p=!0,visible:g,placement:h="bottom-start",onVisibleChange:b,closeOnOutsideClick:i=!0,middleware:r,positionReference:c,className:n,children:f,content:d,applyBackground:a=!1,...l}=o,e=j({visible:g,placement:h,onVisibleChange:b,closeOnOutsideClick:i,role:"dialog",middleware:r}),[v,u]=t.useState(),s=R(e.refs.setFloating,m,u),P=`${y()}-trigger`,F=!!o["aria-labelledby"]||!!o["aria-label"];return C(()=>{if(c)return e.refs.setPositionReference(c),()=>void e.refs.setPositionReference(null)},[e.refs,c]),t.createElement(t.Fragment,null,w(f,E=>({id:E.props.id||P,...e.getReferenceProps(E.props),ref:e.refs.setReference})),e.open?t.createElement(k,{portal:p},t.createElement(I,null,t.createElement(O,{portalContainer:v},t.createElement(S,{context:e.context,modal:!1,initialFocus:e.refs.floating},t.createElement(z,{className:M({"iui-popover-surface":a},n),"aria-labelledby":F||(x=e.refs.domReference.current)==null?void 0:x.id,...e.getFloatingProps(l),ref:s},d))))):null)});export{Z as P,j as u};
