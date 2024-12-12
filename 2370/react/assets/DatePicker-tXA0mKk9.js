import{r as n,o as _,Q as Ee,d as ke,l as Te,B as v,c as b,I as y}from"./index-DXBjKzeP.js";import{T as Re}from"./TimePicker-C0uGGbHM.js";import{S as Ie}from"./SvgChevronLeft-BhPHtV7i.js";import{S as Ne}from"./SvgChevronRight-DIb2hPAE.js";const X=(m,u)=>{if(!m||!u)return!1;let s=new Date(m),r=new Date(u);return s&&s.setHours(0,0,0,0),r&&r.setHours(0,0,0,0),s<r},xe=m=>n.createElement(_,m,n.createElement("path",{d:"m14.6 0 1.4 1.4-6.6 6.6 6.6 6.6-1.4 1.4-8-8zm-6.6 0 1.4 1.4-6.6 6.6 6.6 6.6-1.4 1.4-8-8z"})),He=m=>n.createElement(_,m,n.createElement("path",{d:"m1.4 0-1.4 1.4 6.6 6.6-6.6 6.6 1.4 1.4 8-8zm6.6 0-1.4 1.4 6.6 6.6-6.6 6.6 1.4 1.4 8-8z"}));let p=(m,u)=>m&&u&&m.getFullYear()===u.getFullYear()&&m.getMonth()===u.getMonth()&&m.getDate()===u.getDate(),ye=(m,u,s)=>{if(!m||!u||!s)return!1;let r=new Date(u),c=new Date(s),d=new Date(m);return d&&d.setHours(0,0,0,0),r&&r.setHours(0,0,0,0),c&&c.setHours(0,0,0,0),d>r&&d<c},Z=(m,u)=>!u,Ce=["January","February","March","April","May","June","July","August","September","October","November","December"],Ae=["Su","Mo","Tu","We","Th","Fr","Sa"],Le=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];const Je=m=>{let u=new Intl.DateTimeFormat(m,{weekday:"short"}),s=new Intl.DateTimeFormat(m,{weekday:"long"}),r=new Intl.DateTimeFormat(m,{month:"long"}),c=[r.format(new Date(2020,0,1)),r.format(new Date(2020,1,1)),r.format(new Date(2020,2,1)),r.format(new Date(2020,3,1)),r.format(new Date(2020,4,1)),r.format(new Date(2020,5,1)),r.format(new Date(2020,6,1)),r.format(new Date(2020,7,1)),r.format(new Date(2020,8,1)),r.format(new Date(2020,9,1)),r.format(new Date(2020,10,1)),r.format(new Date(2020,11,1))],d=[s.format(new Date(2020,10,1)),s.format(new Date(2020,10,2)),s.format(new Date(2020,10,3)),s.format(new Date(2020,10,4)),s.format(new Date(2020,10,5)),s.format(new Date(2020,10,6)),s.format(new Date(2020,10,7))],E=[u.format(new Date(2020,10,1)).slice(0,2),u.format(new Date(2020,10,2)).slice(0,2),u.format(new Date(2020,10,3)).slice(0,2),u.format(new Date(2020,10,4)).slice(0,2),u.format(new Date(2020,10,5)).slice(0,2),u.format(new Date(2020,10,6)).slice(0,2),u.format(new Date(2020,10,7)).slice(0,2)];return{months:c,shortDays:E,days:d}},Ke=n.forwardRef((m,u)=>{let{date:s,onChange:r,localizedNames:c,className:d,setFocus:E=!1,showTime:ee=!1,use12Hours:te=!1,precision:re,hourStep:ae,minuteStep:ne,secondStep:le,useCombinedRenderer:se,combinedRenderer:oe,hourRenderer:ue,minuteRenderer:ie,secondRenderer:me,meridiemRenderer:ce,showYearSelection:K=!1,enableRangeSelect:k=!1,startDate:w,endDate:C,monthYearProps:R,calendarProps:ge,monthProps:I,weekDayProps:N,dayProps:S,weekProps:x,isDateDisabled:Y,applyBackground:fe=!0,showDatesOutsideMonth:A=!0,...De}=m,j=(c==null?void 0:c.months)??Ce,he=(c==null?void 0:c.shortDays)??Ae,we=(c==null?void 0:c.days)??Le,[g,P]=n.useState(s),[l,L]=n.useState(w),[i,$]=n.useState(C),[D,f]=n.useState(l??g??new Date),[o,Me]=n.useState((l==null?void 0:l.getMonth())??(g==null?void 0:g.getMonth())??new Date().getMonth()),[h,de]=n.useState((l==null?void 0:l.getFullYear())??(g==null?void 0:g.getFullYear())??new Date().getFullYear()),[pe,Q]=n.useState(!0),F=n.useRef(E);n.useEffect(()=>{F.current&&(F.current=!1)});let M=n.useCallback((e,t)=>{Me(e),de(t)},[]);n.useEffect(()=>{let e=new Date;P(s),L(w),$(C),k||f(s??e),M((w==null?void 0:w.getMonth())??(s==null?void 0:s.getMonth())??e.getMonth(),(w==null?void 0:w.getFullYear())??(s==null?void 0:s.getFullYear())??e.getFullYear())},[s,M,w,C,k]);let B=n.useContext(Ee);ke(()=>{E&&B&&B.setInitialFocus(-1)},[B,E]);let O=n.useMemo(()=>{let e=new Date(h,o,1).getDay();e===0&&A&&(e=7);let t=[];for(let a=1;a<=42;a++){let T=a-e;t.push(new Date(h,o,T))}return t},[o,h,A]),Se=n.useMemo(()=>{let e=[],t=Math.ceil(O.length/7);for(let a=0;a<t;a++)e.push(O.slice(7*a,(a+1)*7));return e},[O]),H=(e,t)=>{let a=l??g??new Date;return new Date(e,t,a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds())},Fe=()=>{let e=h-1;M(o,e),f(H(e,o))},ve=()=>{let e=h+1;M(o,e),f(H(e,o))},z=()=>{let e=o!==0?o-1:11,t=o!==0?h:h-1;M(e,t),f(H(t,e))},W=()=>{let e=o!==11?o+1:0,t=o!==11?h:h+1;M(e,t),f(H(t,e))},U=e=>{if(k)if(pe){e.getMonth()!==(l==null?void 0:l.getMonth())&&M(e.getMonth(),e.getFullYear());let t=l??new Date,a=new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes(),t.getSeconds());L(a),f(a),X(a,i)?i&&(r==null||r(a,i)):($(a),r==null||r(a,a)),Q(!1)}else{e.getMonth()!==(i==null?void 0:i.getMonth())&&M(e.getMonth(),e.getFullYear());let t=i??new Date,a=new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes(),t.getSeconds());f(a),X(a,l)?(L(a),i&&(r==null||r(a,i))):($(a),l&&(r==null||r(l,a)),Q(!0))}else{e.getMonth()!==(g==null?void 0:g.getMonth())&&M(e.getMonth(),e.getFullYear());let t=g??new Date,a=new Date(e.getFullYear(),e.getMonth(),e.getDate(),t.getHours(),t.getMinutes(),t.getSeconds());P(a),f(a),Z(r,k)&&(r==null||r(a))}},be=e=>{if(e.altKey||!D)return;let t=new Date(D);switch(e.key){case"ArrowDown":t.setDate(D.getDate()+7),t.getMonth()!==o&&W(),f(t),F.current=!0,e.preventDefault();break;case"ArrowUp":t.setDate(D.getDate()-7),t.getMonth()!==o&&z(),f(t),F.current=!0,e.preventDefault();break;case"ArrowLeft":t.setDate(D.getDate()-1),t.getMonth()!==o&&z(),f(t),F.current=!0,e.preventDefault();break;case"ArrowRight":t.setDate(D.getDate()+1),t.getMonth()!==o&&W(),f(t),F.current=!0,e.preventDefault();break;case"Enter":case" ":case"Spacebar":Y!=null&&Y(D)||U(D),e.preventDefault();break}},V=e=>{if(e.getMonth()!==o)return"iui-calendar-day-outside-month";let t="iui-calendar-day";return p(e,g)||p(e,l)&&p(e,i)?t+="-selected":p(e,l)?t+="-range-start":p(e,i)&&(t+="-range-end"),l&&i&&ye(e,l,i)&&(t+="-range"),p(e,new Date)&&(t+="-today"),t},q=Te();return n.createElement(v,{className:b("iui-date-picker",{"iui-popover-surface":fe},d),ref:u,...De},n.createElement("div",null,n.createElement(v,{as:"div",...R,className:b("iui-calendar-month-year",R==null?void 0:R.className)},K&&n.createElement(y,{styleType:"borderless",onClick:Fe,"aria-label":"Previous year",size:"small"},n.createElement(xe,null)),n.createElement(y,{styleType:"borderless",onClick:z,"aria-label":"Previous month",size:"small"},n.createElement(Ie,null)),n.createElement("span",{"aria-live":"polite"},n.createElement(v,{as:"span",id:q,title:j[o],...I,className:b("iui-calendar-month",I==null?void 0:I.className)},j[o])," ",h),n.createElement(y,{styleType:"borderless",onClick:W,"aria-label":"Next month",size:"small"},n.createElement(Ne,null)),K&&n.createElement(y,{styleType:"borderless",onClick:ve,"aria-label":"Next year",size:"small"},n.createElement(He,null))),n.createElement(v,{as:"div",...N,className:b("iui-calendar-weekdays",N==null?void 0:N.className)},he.map((e,t)=>n.createElement("div",{key:e,title:we[t]},e))),n.createElement("div",{onKeyDown:be,role:"listbox","aria-labelledby":q,...ge},Se.map((e,t)=>n.createElement(v,{as:"div",key:`week-${o}-${t}`,...x,className:b("iui-calendar-week",x==null?void 0:x.className)},e.map((a,T)=>{let Ye=a.getDate(),G=Y==null?void 0:Y(a);return a.getMonth()!==o&&!A?n.createElement(v,{key:`day-${o}-${T}`,className:b(V(a),S==null?void 0:S.className),"aria-hidden":!0}):n.createElement(v,{as:"div",key:`day-${o}-${T}`,onClick:()=>!G&&U(a),role:"option",tabIndex:p(a,D)?0:-1,"aria-disabled":G?"true":void 0,ref:J=>{p(a,D)&&F.current&&setTimeout(()=>{J==null||J.focus()})},...S,className:b(V(a),S==null?void 0:S.className)},Ye)}))))),ee&&n.createElement(Re,{date:l??g,use12Hours:te,precision:re,hourStep:ae,minuteStep:ne,secondStep:le,useCombinedRenderer:se,combinedRenderer:oe,hourRenderer:ue,minuteRenderer:ie,secondRenderer:me,meridiemRenderer:ce,onChange:e=>Z(r,k)?r==null?void 0:r(e):r==null?void 0:r(new Date((l==null?void 0:l.getFullYear())??e.getFullYear(),(l==null?void 0:l.getMonth())??e.getMonth(),(l==null?void 0:l.getDate())??e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds()),new Date((i==null?void 0:i.getFullYear())??e.getFullYear(),(i==null?void 0:i.getMonth())??e.getMonth(),(i==null?void 0:i.getDate())??e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds()))}))});export{Ke as D,Je as g,X as i};
