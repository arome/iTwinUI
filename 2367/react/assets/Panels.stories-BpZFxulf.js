import{r as n,C as N,u as C,n as Q,f as O,N as F,B as _,e as q,c as L,d as G,I as V,m as z,D as J,j as e}from"./index-Dv96QNIp.js";import{F as y}from"./Flex-CG2rVFNM.js";import{T as H}from"./Text-DBnt4SRn.js";import{S as K}from"./SvgChevronLeft-GO4-9omn.js";import{S as p}from"./Surface-wzWM_plT.js";import{L as B}from"./List-D8fei9iq.js";import{L as g}from"./ListItem-CoRQg2xJ.js";import{D as U}from"./Divider-CRqgmDV2.js";import{T as X}from"./ToggleSwitch-C-d8i3W1.js";import{B as D}from"./Button-B_9YiJ55.js";import"./supports-CwNJNXmk.js";import"./LinkAction-BlP19DSj.js";import"./SvgCheckmark-CeF5aIDx.js";import"./ProgressRadial-1hnZEbAI.js";class W{}const Y=()=>n.useMemo(()=>new W,[]),Z=(s,i)=>{let t=n.useCallback(()=>s instanceof W?(Object.assign(s,i),()=>{for(let d in i)delete s[d]}):()=>{},[s,i]);return N(t,()=>s,()=>s)},ee=()=>()=>{},$=n.createContext(void 0),te=s=>{let{children:i,instance:t}=s,d=a.useInstance(),f=t||d,{activePanelId:r,changeActivePanel:c,triggers:l,setShouldFocus:x}=C(A),h=n.useCallback(async()=>{if(r==null)return;let u=l[r];u.triggerId!=null&&(x({fromPanelId:r,toPanelId:u.panelId,direction:"backward"}),c(u.panelId))},[r,c,x,l]);return Z(f,n.useMemo(()=>({goBack:h}),[h])),n.createElement($.Provider,{value:{instance:f}},i)},ne=n.forwardRef((s,i)=>{let{children:t,className:d,onActiveIdChange:f,instance:r,...c}=s,l=Q(f),x=n.useRef(null),[h,u]=n.useState(void 0),[P,j]=n.useState({}),I=n.useRef(new Set),[S,E]=n.useState(void 0),m=O("(prefers-reduced-motion: no-preference)"),k=n.useCallback(b=>{var w,o,v;!I.current.has(b)||b===h||(F.flushSync(()=>u(b)),(w=l.current)==null||w.call(l,b),(v=(o=x.current)==null?void 0:o.ownerDocument.getElementById(b))==null||v.scrollIntoView({block:"nearest",inline:"center",behavior:m?"smooth":"instant"}))},[h,m,l]);return n.createElement(A.Provider,{value:n.useMemo(()=>({activePanelId:h,setActivePanelId:u,changeActivePanel:k,triggers:P,setTriggers:j,shouldFocus:S,setShouldFocus:E,panels:I}),[h,k,u,j,S,P])},n.createElement(te,{instance:r},n.createElement(_,{ref:q(x,i),...c,className:L("iui-panel-wrapper",d)},t)))}),A=n.createContext(void 0);let re=n.forwardRef((s,i)=>{let{id:t,children:d,className:f,...r}=s,{activePanelId:c,triggers:l,panels:x,setActivePanelId:h}=C(A),u=n.useMemo(()=>l[t],[t,l]),P=le(c)||c,j=[c,P].includes(t),I=c===t&&c!==P,S=P===t&&c!==t;return G(()=>{c==null&&x.current.size===0&&h(t);let m=x.current;return m.has(t)||m.add(t),()=>{m.delete(t)}},[c,t,x,h]),n.createElement(R.Provider,{value:n.useMemo(()=>({id:t,associatedTrigger:u}),[u,t])},j&&n.createElement(_,{ref:i,id:t,className:L("iui-panel",f),"aria-labelledby":`${t}-header-title`,role:"group",inert:S?"":void 0,"data-iui-transitioning":I?"true":void 0,...r},d))}),R=n.createContext(void 0),se=s=>{let{children:i,for:t}=s,{changeActivePanel:d,triggers:f,setTriggers:r,activePanelId:c,shouldFocus:l,setShouldFocus:x,panels:h}=C(A),{id:u}=C(R),P=n.useId(),j=i.props.id||P,I=n.useCallback(()=>{c!=null&&(x({fromPanelId:c,toPanelId:t,direction:"forward"}),d==null||d(t))},[c,d,t,x]),S=n.useCallback(m=>{(l==null?void 0:l.direction)==="backward"&&(l==null?void 0:l.toPanelId)===u&&(l==null?void 0:l.fromPanelId)===t&&(m==null||m.focus({preventScroll:!0}),x(void 0))},[t,u,x,l]),E=ee();return n.useEffect(()=>{h.current.has(t)},[t,E,h,f]),n.useEffect(()=>{r(m=>{let k=m[t];return k==null||u!==k.panelId||j!==k.triggerId?{...m,[t]:{panelId:u,triggerId:j}}:m})},[t,u,r,j]),J(i,m=>({...m.props,id:j,ref:S,onClick:z(m.props.onClick,I),"aria-expanded":c===t,"aria-controls":t}))},ae=n.forwardRef((s,i)=>{let{titleProps:t,children:d,...f}=s,{shouldFocus:r,setShouldFocus:c}=C(A),{id:l,associatedTrigger:x}=C(R),h=n.useCallback(u=>{(r==null?void 0:r.direction)==="forward"&&r.toPanelId===l&&(u==null||u.focus({preventScroll:!0}),c(void 0))},[l,c,r==null?void 0:r.direction,r==null?void 0:r.toPanelId]);return n.createElement(y,{ref:i,...f},x&&n.createElement(ie,null),n.createElement(H,{id:`${l}-header-title`,as:"h2",tabIndex:-1,ref:h,...t},d))}),ie=n.forwardRef((s,i)=>{let{children:t,onClick:d,...f}=s,{instance:r}=C($);return n.createElement(V,{ref:i,"aria-label":"Previous panel",styleType:"borderless",size:"small","data-iui-shift":"left",...f,onClick:z(n.useCallback(()=>r==null?void 0:r.goBack(),[r]),d)},t||n.createElement(K,null))});const a={Wrapper:ne,Panel:re,Trigger:se,Header:ae,useInstance:Y};function le(s,{delay:i}={delay:500}){let[t,d]=n.useState(void 0),f=n.useRef(void 0);return n.useEffect(()=>(i===0?d(s):f.current=setTimeout(()=>d(s),i),()=>{clearTimeout(f.current)}),[s,i]),t}const ye={component:a,title:"Panels"},Se=()=>{const s="root",i="more-info";return e.jsxs(a.Wrapper,{as:p,style:{inlineSize:"min(300px, 30vw)",blockSize:"min(500px, 50vh)"},children:[e.jsxs(a.Panel,{id:s,children:[e.jsx(p.Header,{as:a.Header,children:"Root"}),e.jsx(p.Body,{as:B,children:e.jsx(g,{children:e.jsx(a.Trigger,{for:i,children:e.jsx(g.Action,{children:"More details"})})})})]}),e.jsxs(a.Panel,{id:i,children:[e.jsx(p.Header,{as:a.Header,children:"More details"}),e.jsx(p.Body,{isPadded:!0,children:e.jsx(H,{children:"Content"})})]})]})},ke=()=>{const s="root",i=Array.from(Array(20).keys()).map(t=>({id:`panel-${t}`,label:`Panel ${t}`}));return e.jsxs(a.Wrapper,{as:p,style:{inlineSize:"min(300px, 30vw)",blockSize:"min(500px, 50vh)"},children:[e.jsxs(a.Panel,{id:s,as:y,flexDirection:"column",alignItems:"stretch",gap:"0",children:[e.jsx(p.Header,{as:a.Header,children:"Root"}),e.jsx(p.Body,{as:B,children:i.map(t=>e.jsx(g,{children:e.jsx(g.Content,{children:e.jsx(a.Trigger,{for:`${t.id}`,children:e.jsx(g.Action,{children:t.label})})})},t.id))})]}),i.map(t=>e.jsxs(a.Panel,{as:y,id:t.id,flexDirection:"column",alignItems:"stretch",children:[e.jsx(p.Header,{as:a.Header,children:t.label}),e.jsxs(p.Body,{as:y,flexDirection:"column",children:[e.jsx(H,{children:`Content for ${t.id}`}),e.jsx(y.Spacer,{}),e.jsx(U,{}),e.jsx(H,{children:`Footer for ${t.id}`})]})]},t.id))]})},be=()=>{const s=n.useId(),i=n.useId(),t=n.useId(),d=n.useId(),[f,r]=n.useState(!1),[c,l]=n.useState("240p"),[x,h]=n.useState("1.0x"),[u,P]=n.useState([]),j=a.useInstance(),I=n.useCallback(({content:o,state:v,setState:T})=>{const M=v===o;return e.jsxs(g,{active:M,"aria-selected":M,onClick:()=>{j.goBack()},children:[e.jsx(g.Action,{onClick:()=>T(o),children:o}),e.jsx(g.Icon,{})]})},[j]),S=n.useCallback(({content:o})=>e.jsx(I,{content:o,state:c,setState:l}),[I,c]),E=n.useCallback(({content:o})=>e.jsx(I,{content:o,state:x,setState:h}),[I,x]),m=n.useCallback(({content:o})=>e.jsx(I,{content:o,state:u.includes(o)?o:"",setState:()=>{P(v=>v.includes(o)?v.filter(T=>T!==o):[...v,o])}}),[I,u]),k=n.useMemo(()=>["240p","360p","480p","720p","1080p"],[]),b=n.useMemo(()=>Array.from({length:21},(o,v)=>(v*.1).toFixed(1)+"x"),[]),w=n.useId();return e.jsx(e.Fragment,{children:e.jsxs(a.Wrapper,{instance:j,as:p,style:{inlineSize:"min(200px, 30vw)",blockSize:"min(250px, 50vh)"},children:[e.jsx(a.Panel,{id:s,children:e.jsxs(B,{children:[e.jsxs(g,{children:[e.jsx(g.Content,{as:"label",htmlFor:w,children:"Repeat"}),e.jsx(X,{id:w,onChange:o=>r(o.target.checked),checked:f})]}),e.jsx(g,{children:e.jsx(a.Trigger,{for:i,children:e.jsx(g.Action,{children:"Quality"})})}),e.jsx(g,{children:e.jsx(a.Trigger,{for:t,children:e.jsx(g.Action,{children:"Speed"})})}),e.jsx(g,{children:e.jsx(a.Trigger,{for:d,children:e.jsx(g.Action,{children:"Accessibility"})})})]})}),e.jsxs(a.Panel,{id:i,as:y,flexDirection:"column",alignItems:"stretch",gap:"0",children:[e.jsx(p.Header,{as:a.Header,children:"Quality"}),e.jsx(p.Body,{as:B,children:k.map(o=>e.jsx(S,{content:o},o))})]}),e.jsxs(a.Panel,{id:t,as:y,flexDirection:"column",alignItems:"stretch",gap:"0",children:[e.jsx(p.Header,{as:a.Header,children:"Speed"}),e.jsx(p.Body,{as:B,children:b.map(o=>e.jsx(E,{content:o},o))})]}),e.jsxs(a.Panel,{id:d,as:y,flexDirection:"column",alignItems:"stretch",gap:"0",children:[e.jsx(p.Header,{as:a.Header,children:"Accessibility"}),e.jsxs(p.Body,{as:B,children:[e.jsx(m,{content:"High contrast"}),e.jsx(m,{content:"Large text"}),e.jsx(m,{content:"Screen reader"})]})]})]})})},Ce=()=>{const s=a.useInstance(),r=["root","panel-1","panel-1-1","panel-1-1-1"];return e.jsxs(y,{flexDirection:"column",alignItems:"flex-start",children:[e.jsx(D,{id:"instance-go-back",onClick:()=>s.goBack(),children:"Go Back"}),e.jsx(a.Wrapper,{instance:s,as:p,style:{width:"min(300px, 30vw)",height:"min(500px, 50vh)"},children:r.map((c,l)=>e.jsxs(a.Panel,{id:c,children:[e.jsx(p.Header,{as:a.Header,children:c}),e.jsx(p.Body,{isPadded:!0,children:e.jsx(a.Trigger,{for:r[l+1],children:e.jsxs(D,{children:["Go to ",r[l+1]??"panel that doesn't exist"]})})})]},c))})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Se as Basic,be as MultiLevelList,ke as MultiPanelInformationPanel,Ce as NestedPanels,ye as default};
