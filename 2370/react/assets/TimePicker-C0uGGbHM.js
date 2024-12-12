import{r as a,B as I,c as $}from"./index-DXBjKzeP.js";let L=(n,r,o)=>{let m=o?E(n.getHours(),o):n.getHours();return o?!!r&&m%12===r.getHours()%12:!!r&&m===r.getHours()},P=(n,r)=>!!r&&n.getMinutes()===r.getMinutes(),N=(n,r)=>!!r&&n.getSeconds()===r.getSeconds(),B=(n,r,o,m)=>{let s=!0;switch(o){case"seconds":if(s=N(n,r),!s)break;case"minutes":if(s=P(n,r),!s)break;case"hours":s=L(n,r,m)}return s},U=(n,r)=>!!r&&(n==="AM"?r.getHours()<12:r.getHours()>=12),E=(n,r)=>{let o=n%12;return r==="PM"?o+12:o},h=(n,r)=>new Date(r.getFullYear(),r.getMonth(),r.getDate(),n,r.getMinutes(),r.getSeconds()),te=(n,r)=>{let o="";switch(r){case"seconds":o=":"+n.getSeconds().toLocaleString(void 0,{minimumIntegerDigits:2});case"minutes":o=":"+n.getMinutes().toLocaleString(void 0,{minimumIntegerDigits:2})+o;case"hours":o=n.getHours().toLocaleString(void 0,{minimumIntegerDigits:2})+o}return o};const se=a.forwardRef((n,r)=>{let{date:o,onChange:m,use12Hours:s=!1,precision:l="minutes",hourStep:F=1,minuteStep:w=1,secondStep:p=1,setFocusHour:R=!1,hourRenderer:k=e=>e.getHours().toLocaleString(void 0,{minimumIntegerDigits:2}),minuteRenderer:j=e=>e.getMinutes().toLocaleString(void 0,{minimumIntegerDigits:2}),secondRenderer:c=e=>e.getSeconds().toLocaleString(void 0,{minimumIntegerDigits:2}),meridiemRenderer:C=e=>e,useCombinedRenderer:H=!1,combinedRenderer:S=te,className:d,...q}=n,[i,x]=a.useState(o),[f,M]=a.useState(i??new Date),[D,v]=a.useState(s?(f==null?void 0:f.getHours())>11?"PM":"AM":void 0);a.useEffect(()=>{M(o??new Date),x(o)},[o]);let z=e=>{let t=s?E(e.getHours(),D):e.getHours(),u=h(t,i??new Date);T(u)},G=e=>{let t=s?E(e.getHours(),D):e.getHours(),u=h(t,e);T(u)},J=e=>{let t=i??new Date,u=t.getHours();v(e),e==="AM"&&u>11&&(t=h(u-12,t)),e==="PM"&&u<=12&&(t=h(u+12,t)),T(t)},T=e=>{let t=e;l==="hours"&&(t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),0,0)),l==="minutes"&&(t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),0)),M(t),x(t),m==null||m(t)},O=e=>{let t=s?E(e.getHours(),D):e.getHours();M(h(t,f))},Q=e=>{let t=s?E(e.getHours(),D):e.getHours();M(h(t,e))},W=e=>{let t=i??new Date,u=t.getHours();e==="AM"&&u>11&&(v(e),t=h(u-12,t)),e==="PM"&&u<=12&&(v(e),t=h(u+12,t)),M(t)},Y=(e,t,u)=>{let b=[];for(let y=0;y<e;y++)y%u===0&&b.push(t(y));return b},X=a.useMemo(()=>{let e=i??new Date,t=[],u=Array.from(Array(s?12:24).keys()).filter(g=>g%F===0).map(g=>s&&g===0?12:g),b=Array.from(Array(60).keys()).filter(g=>g%w===0),y=Array.from(Array(60).keys()).filter(g=>g%p===0);return u.forEach(g=>{l==="hours"?t.push(new Date(e.getFullYear(),e.getMonth(),e.getDate(),g,e.getMinutes(),e.getSeconds())):b.forEach(K=>{l==="minutes"?t.push(new Date(e.getFullYear(),e.getMonth(),e.getDate(),g,K,e.getSeconds())):y.forEach(ee=>{t.push(new Date(e.getFullYear(),e.getMonth(),e.getDate(),g,K,ee))})})}),t},[F,w,p,i,s,l]),Z=a.useMemo(()=>{let e=i??new Date;return Y(s?12:24,t=>new Date(e.getFullYear(),e.getMonth(),e.getDate(),s&&t===0?12:t,e.getMinutes(),e.getSeconds()),F)},[F,i,s]),_=a.useMemo(()=>{let e=i??new Date;return Y(60,t=>new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),t,e.getSeconds()),w)},[w,i]),V=a.useMemo(()=>{let e=i??new Date;return Y(60,t=>new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),t),p)},[p,i]);return a.createElement(I,{className:$("iui-time-picker",d),ref:r,...q},H?a.createElement(A,{data:X,isSameFocused:e=>B(e,f,l,s?D:void 0),isSameSelected:e=>B(e,i,l,s?D:void 0),onFocusChange:Q,onSelectChange:G,setFocus:R,precision:l,valueRenderer:S}):a.createElement(a.Fragment,null,a.createElement(A,{data:Z,isSameFocused:e=>L(e,f,s?D:void 0),isSameSelected:e=>L(e,i,s?D:void 0),onFocusChange:O,onSelectChange:z,setFocus:R,valueRenderer:k}),l!=="hours"&&a.createElement(A,{data:_,isSameFocused:e=>P(e,f),isSameSelected:e=>P(e,i),onFocusChange:e=>M(e),onSelectChange:e=>T(e),valueRenderer:j}),l==="seconds"&&a.createElement(A,{data:V,isSameFocused:e=>N(e,f),isSameSelected:e=>N(e,i),onFocusChange:e=>M(e),onSelectChange:e=>T(e),valueRenderer:c})),s&&a.createElement(A,{data:["AM","PM"],isSameFocused:e=>U(e,f),isSameSelected:e=>U(e,i),onFocusChange:e=>W(e),onSelectChange:e=>J(e),valueRenderer:C,className:"iui-period"}))});let A=n=>{let{data:r,onFocusChange:o,onSelectChange:m,isSameFocused:s,isSameSelected:l,setFocus:F=!1,valueRenderer:w,precision:p="minutes",className:R="iui-time"}=n,k=a.useRef(F),j=(c,C,H,S,d)=>{if(!c.altKey)switch(c.key){case"ArrowDown":if(d+1>C)break;H(d+1),k.current=!0,c.preventDefault();break;case"ArrowUp":if(d-1<0)break;H(d-1),k.current=!0,c.preventDefault();break;case"Enter":case" ":case"Spacebar":S(d),c.preventDefault();break}};return a.createElement(I,{className:`${R}`},a.createElement("ol",null,r.map((c,C)=>{let H=s(c);return a.createElement(I,{as:"li",onKeyDown:S=>{j(S,r.length-1,d=>o(r[d]),d=>m(r[d]),C)},className:$({"iui-selected":l(c)}),key:C,tabIndex:H?0:void 0,ref:S=>{!S||!H||setTimeout(()=>{S.scrollIntoView({block:"nearest",inline:"nearest"}),k.current&&(S.focus(),k.current=!1)})},onClick:()=>{m(c)}},w(c,p))})))};export{se as T};
