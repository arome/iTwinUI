import{r as f,g as v}from"./index-Cvt5k5E7.js";const h=(r,l={},t=!0)=>{let{root:s,rootMargin:n,threshold:o}=l,e=f.useRef(()=>{});return f.useCallback(i=>{var u,a;if((u=e.current)==null||u.call(e),e.current=()=>{},!i||!((a=v())!=null&&a.IntersectionObserver))return;let c=new IntersectionObserver(([b],g)=>{b.isIntersecting&&(t&&g.disconnect(),r())},{root:s,rootMargin:n,threshold:o});c.observe(i),e.current=()=>c.disconnect()},[r,t,s,n,o])};export{h as u};
