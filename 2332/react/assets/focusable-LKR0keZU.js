import{r as a,n as E,C as A}from"./index-ZG0WEztO.js";let d='a[href], button, input, textarea, select, details, audio[controls], video[controls], [contenteditable]:not([contenteditable="false"]), [tabindex]:not([tabindex="-1"])';const p=t=>{if(!t)return[];let s=t.querySelectorAll(d);return Array.from(s).filter(e=>!e.hasAttribute("disabled")&&!e.classList.contains("iui-disabled")&&e.getAttribute("aria-disabled")!=="true")},x=t=>{if(!t)return[];let s=t.querySelectorAll(`${d}, [tabindex="-1"]`);return Array.from(s).filter(e=>!e.hasAttribute("disabled")&&!e.classList.contains("iui-disabled")&&e.getAttribute("aria-disabled")!=="true")};function g(t,s){let e=a.useRef([]),[u,f]=a.useState(e.current),i=l=>{e.current=l,f(l)},{filter:m}=s??{},r=E(m),b=a.useMemo(()=>({focusableElementsRef:e,focusableElements:u}),[e,u]);return A(a.useCallback(()=>{if(!t)return i([]),()=>{};o();let l=new MutationObserver(()=>o());return l.observe(t,{childList:!0,subtree:!0}),()=>l.disconnect();function o(){var c;let n=x(t);r.current&&(n=(c=r.current)==null?void 0:c.call(r,n)),i(n)}},[t,r]),()=>b,()=>b)}export{x as a,p as g,g as u};
