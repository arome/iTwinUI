import{k as K,r as a,o as he,B as k,c as G,d as oe,h as ge,V as fe,l as pe,I as z,j as C,P as W,e as ae}from"./index-CuyZiCR-.js";import{S as te}from"./Slider-D3EQ8B_T.js";import{u as q}from"./useEventListener-CrCZDbR0.js";import{I as T}from"./Input-CvmHKG8T.js";import{B as le}from"./Button-rllnJcuq.js";import"./ProgressRadial-CWDrPmbc.js";function re(u,e,o){return e in u?Object.defineProperty(u,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):u[e]=o,u}let A=new Uint8Array(4),U=new Uint32Array(A.buffer);const de=u=>typeof u!="string"&&"r"in u&&"g"in u&&"b"in u,be=u=>typeof u!="string"&&"h"in u&&"s"in u&&"l"in u,Ce=u=>typeof u!="string"&&"h"in u&&"s"in u&&"v"in u;class p{static create(e){return e?de(e)?p.fromRGB(e):be(e)?p.fromHSL(e):Ce(e)?p.fromHSV(e):typeof e=="string"?p.fromString(e,p.fromTbgr(0)):p.fromTbgr(0):p.fromTbgr(0)}toTbgr(){return this._tbgr}static fromTbgr(e){return new p(e)}static fromRgbt(e,o,s,r){return this.fromTbgr(this.computeTbgrFromComponents(e,o,s,r))}static computeTbgrFromComponents(e,o,s,r){return A[0]=e,A[1]=o,A[2]=s,A[3]=r||0,U[0]}static fromString(e,o){let[s,r]=this.computeTbgrFromString(e,o==null?void 0:o.toTbgr());return new p(s,r)}static fromHSL(e){let o=e.a??1;return new p(this.computeTbgrFromHSL(e.h/360,e.s/100,e.l/100,Math.round((1-o)*255)),e.h)}static fromRGB(e){let o=e.a??1;return p.fromRgbt(e.r,e.g,e.b,Math.round((1-o)*255))}static fromHSV(e){let o=e.a??1,s=Math.round((1-o)*255);if(!e.s||e.h===-1){let R=255&Math.floor(255*e.v/100+.5+3e-14);return p.fromRgbt(R,R,R,0)}let r=e.h,h=e.s,g=e.v;r===360&&(r=0),r/=60;let i=Math.floor(r),b=r-i;g/=100,h/=100;let c=255&Math.floor(g*(1-h)*255+.5),m=255&Math.floor(g*(1-h*b)*255+.5),n=255&Math.floor(g*(1-h*(1-b))*255+.5),f=255&Math.floor(255*g+.5),l=0,v=0,S=0;switch(i){case 0:l=f,S=n,v=c;break;case 1:l=m,S=f,v=c;break;case 2:l=c,S=f,v=n;break;case 3:l=c,S=m,v=f;break;case 4:l=n,S=c,v=f;break;case 5:l=f,S=c,v=m;break}return new p(p.computeTbgrFromComponents(l,S,v,s),e.h)}static computeTbgrFromString(e,o){e=e.toLowerCase();let s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e);if(s){let r,h=s[1],g=s[2],i=m=>m[m.length-1]==="%",b=m=>{let n=parseFloat(m);return 255*K(i(m)?n/100:n,0,1)},c=m=>{let n=i(m)?parseFloat(m)/100*255:parseInt(m,10);return K(n,0,255)};switch(h){case"rgb":case"rgba":if(r=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g),r)return[this.computeTbgrFromComponents(c(r[1]),c(r[2]),c(r[3]),typeof r[4]=="string"?255-b(r[4]):0),void 0];break;case"hsl":case"hsla":if(r=/^(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g),r){let m=parseFloat(r[1]),n=parseInt(r[2],10)/100,f=parseInt(r[3],10)/100,l=typeof r[4]=="string"?255-b(r[4]):0;return[this.computeTbgrFromHSL(m/360,n,f,l),m]}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],h=r.length;if(h===3)return[this.computeTbgrFromComponents(parseInt(r.charAt(0)+r.charAt(0),16),parseInt(r.charAt(1)+r.charAt(1),16),parseInt(r.charAt(2)+r.charAt(2),16),0),void 0];if(h===6)return[this.computeTbgrFromComponents(parseInt(r.charAt(0)+r.charAt(1),16),parseInt(r.charAt(2)+r.charAt(3),16),parseInt(r.charAt(4)+r.charAt(5),16),0),void 0];if(h===8)return[this.computeTbgrFromComponents(parseInt(r.charAt(0)+r.charAt(1),16),parseInt(r.charAt(2)+r.charAt(3),16),parseInt(r.charAt(4)+r.charAt(5),16),255-parseInt(r.charAt(6)+r.charAt(7),16)),void 0]}if(o)return[o,void 0];throw new Error("unable to parse string into ColorValue")}static getColors(e){return U[0]=e,{b:A[2],g:A[1],r:A[0],t:A[3]}}getRgb(e){return U[0]=this._tbgr,e?(A[0]<<24)+(A[1]<<16)+(A[2]<<8)+(255-A[3]):(A[0]<<16)+(A[1]<<8)+A[2]}getAlpha(){return p.getAlpha(this._tbgr)}static getAlpha(e){return U[0]=e,255-A[3]}toHexString(e){if(e){let o=this.getRgb(e);return o<0&&(o=4294967295+o+1),`#${`00000000${o.toString(16)}`.slice(-8)}`}return`#${`000000${this.getRgb().toString(16)}`.slice(-6)}`}static computeTbgrFromHSL(e,o,s,r=0){let h=(m,n,f)=>(f<0&&(f+=1),f>1&&(f-=1),f<.16666666666666666?m+(n-m)*6*f:f<.5?n:f<.6666666666666666?m+(n-m)*6*(.6666666666666666-f):m),g=(m,n,f)=>Math.round(255*h(m,n,f));if(e=((m,n)=>(m%n+n)%n)(e,1),o=K(o,0,1),s=K(s,0,1),o===0)return s*=255,this.computeTbgrFromComponents(s,s,s,r);let b=s<=.5?s*(1+o):s+o-s*o,c=2*s-b;return this.computeTbgrFromComponents(g(c,b,e+1/3),g(c,b,e),g(c,b,e-1/3),r)}toHslColor(){return{...p.toHsl(this._tbgr),...this._hue!=null&&{h:this._hue}}}static toHsl(e){let{r:o,g:s,b:r}=p.getColors(e),h=o/255,g=s/255,i=r/255,b=Math.min(h,g,i),c=Math.max(h,g,i),m=c-b,n=0,f=0;n=m===0?0:h===c?(g-i)/m%6:g===c?(i-h)/m+2:(h-g)/m+4,n=Math.round(60*n),n<0&&(n+=360);let l=(c+b)/2;return f=m===0?0:m/(1-Math.abs(2*l-1)),f=Number((100*f).toFixed(1)),l=Number((100*l).toFixed(1)),{h:n,s:f,l,a:this.getAlpha(e)/255}}toRgbColor(){let{r:e,g:o,b:s}=p.getColors(this._tbgr);return{r:e,g:o,b:s,a:this.getAlpha()/255}}toHsvColor(){return{...p.toHsv(this._tbgr),...this._hue!=null&&{h:this._hue}}}static toHsv(e){let{r:o,g:s,b:r}=p.getColors(e),h=o/255,g=s/255,i=r/255,b=Math.min(h,g,i),c=Math.max(h,g,i),m=c-b,n=0;n=m===0?0:h===c?(g-i)/m%6:g===c?(i-h)/m+2:(h-g)/m+4,n=Math.round(60*n),n<0&&(n+=360);let f=c,l=c===0?0:m/c;return l=Number((100*l).toFixed(1)),f=Number((100*f).toFixed(1)),{h:n,s:l,v:f,a:this.getAlpha(e)/255}}equals(e){return this._tbgr===e._tbgr}static getFormattedColorNumber(e,o=1){return o===0&&Math.round(e).toString(),Number(e.toFixed(o)).toString()}toRgbString(e){let o=this.toRgbColor(),s=`${o.r}, ${o.g}, ${o.b}`;if(e){let r=o.a??1;return`rgba(${s}, ${p.getFormattedColorNumber(r,2)})`}return`rgb(${s})`}toHslString(e){let o=this.toHslColor(),s=`${p.getFormattedColorNumber(this._hue??o.h)}, ${p.getFormattedColorNumber(o.s)}%, ${p.getFormattedColorNumber(o.l)}%`;if(e){let r=o.a??1;return`hsla(${s}, ${p.getFormattedColorNumber(r,2)})`}return`hsl(${s})`}toHsvString(e){let o=this.toHsvColor(),s=`${this._hue??o.h}, ${o.s}%, ${o.v}%`;if(e){let r=o.a??1;return`hsva(${s}, ${p.getFormattedColorNumber(r,2)})`}return`hsv(${s})`}constructor(e,o){re(this,"_tbgr",void 0),re(this,"_hue",void 0),U[0]=e,this._tbgr=U[0],this._hue=o}}const ve=u=>a.createElement(he,u,a.createElement("path",{d:"m5 15-3.78125-3.5 3.78125-3.5v2h8v3h-8zm6-7 3.78125-3.5-3.78125-3.5v2h-8v3h8z"})),ne=a.createContext(void 0),X=()=>{let u=a.useContext(ne);if(u==null)throw new Error("useColorPickerContext must be used within a ColorPickerContext.Provider");return u},Z=u=>u instanceof p?u:p.create(u),J=a.forwardRef((u,e)=>{let{children:o,className:s,selectedColor:r,onChange:h,onChangeComplete:g,showAlpha:i=!1,applyBackground:b=!0,...c}=u,m=a.useRef(null),n=a.useMemo(()=>Z(r),[r]),f=a.useRef(n.toTbgr()),[l,v]=a.useState(n);a.useEffect(()=>{v(n)},[n]);let[S,R]=a.useState(()=>l.toHsvColor());a.useEffect(()=>{n.toTbgr()!==f.current&&(f.current=n.toTbgr(),R(n.toHsvColor()))},[n]);let $=a.useCallback((H,x,j)=>{R(H);let I=j??p.create(H);x?g==null||g(I):h==null||h(I),f.current=I.toTbgr(),v(I)},[h,g]);return a.createElement(k,{className:G("iui-color-picker",{"iui-popover-surface":b},s),ref:oe(m,e),...c},a.createElement(ne.Provider,{value:{activeColor:l,setActiveColor:v,hsvColor:S,applyHsvColorChange:$,onChangeComplete:g,showAlpha:i}},o))}),Y=a.forwardRef((u,e)=>{let{color:o,style:s,onClick:r,isActive:h,className:g,...i}=u,b=a.useMemo(()=>typeof o=="string"?o:Z(o).toHslString(!0),[o]);return a.createElement(k,{as:r?ge:"span",className:G("iui-color-swatch",{"iui-active":h},g),style:{"--iui-color-swatch-background":b,...s},onClick:r,"aria-pressed":r&&h?"true":void 0,ref:e,...i},u.children??a.createElement(fe,null,b.toUpperCase()))});let xe=(u,e)=>(K(e,u.top,u.bottom)-u.top)/u.height*100,Ee=(u,e)=>(K(e,u.left,u.right)-u.left)/u.width*100;const se=a.forwardRef((u,e)=>{var _,V,ee;let{className:o,...s}=u,r=a.useRef(),h=oe(r,e),{activeColor:g,hsvColor:i,onChangeComplete:b,applyHsvColorChange:c,showAlpha:m}=X(),n=a.useMemo(()=>p.create({h:i.h,s:100,v:100}),[i.h]),f=a.useMemo(()=>i.h,[i]),l=a.useMemo(()=>m?i.a??1:1,[i.a,m]),v=a.useMemo(()=>g.toHexString(),[g]),[S,R]=a.useState(!1),$=n.toHexString(),H=100-i.v,x=i.s,j=a.useCallback((d,w)=>{let M={h:Number(d.toFixed(2)),s:i.s,v:i.v,a:i.a};c(M,w)},[c,i]),I=a.useCallback((d,w)=>{let N=Number(d.toFixed(2)),M={h:i.h,s:i.s,v:i.v,a:N};c(M,w)},[c,i]),B=a.useRef(null),O=a.useRef(null),t=a.useCallback((d,w,N)=>{let M={h:i.h,s:d,v:100-w,a:i.a};c(M,N)},[c,i]),E=a.useCallback((d,w)=>{if(B.current&&S||B.current&&w==="onClick"){let N=Ee(B.current.getBoundingClientRect(),d.clientX),M=xe(B.current.getBoundingClientRect(),d.clientY);w==="onChange"?t(N,M,!0):t(N,M,!1)}},[S,t]),F=a.useCallback(d=>{S&&(E(d,"onChange"),R(!1),d.preventDefault(),d.stopPropagation())},[S,E]);q("pointerup",F,(_=r.current)==null?void 0:_.ownerDocument);let D=a.useCallback(d=>{S&&(d.preventDefault(),d.stopPropagation(),E(d,"onUpdate"))},[S,E]);q("pointermove",D,(V=r.current)==null?void 0:V.ownerDocument);let L=a.useCallback(d=>{S&&(E(d,"onChange"),R(!1))},[S,E]);q("pointerleave",L,(ee=r.current)==null?void 0:ee.ownerDocument);let y=a.useRef({}),ue=d=>{if(d.altKey)return;let w=x,N=H;switch(y.current[d.key]=!0,d.key){case"ArrowDown":N=Math.min(N+1,100),t(w,N,!1);break;case"ArrowUp":N=Math.max(N-1,0),t(w,N,!1);break;case"ArrowLeft":w=Math.max(w-1,0),t(w,N,!1);break;case"ArrowRight":w=Math.min(w+1,100),t(w,N,!1);break}},me=d=>{switch(y.current[d.key]=!1,d.key){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":if(y.current.ArrowUp||y.current.ArrowDown||y.current.ArrowLeft||y.current.ArrowRight)return;b==null||b(p.create(i));break}};return a.createElement(k,{className:G("iui-color-selection-wrapper",o),ref:h,...s},a.createElement(k,{className:"iui-color-field",style:{"--iui-color-field-hue":$,"--iui-color-picker-selected-color":v},ref:B,onPointerDown:d=>{var w;d.preventDefault(),E(d,"onClick"),R(!0),(w=O.current)==null||w.focus()}},a.createElement(k,{className:"iui-color-dot",style:{"--iui-color-dot-inset-block":`${H.toString()}% auto`,"--iui-color-dot-inset-inline":`${x.toString()}% auto`},onPointerDown:()=>{var d;R(!0),(d=O.current)==null||d.focus()},onKeyDown:ue,onKeyUp:me,tabIndex:0,ref:O})),a.createElement(te,{minLabel:"",maxLabel:"",values:[f],className:"iui-hue-slider",trackDisplayMode:"none",tooltipProps:()=>({visible:!1}),onChange:d=>{j(d[0],!0)},onUpdate:d=>{j(d[0],!1)},min:0,max:359,thumbProps:()=>({"aria-label":"Hue"})}),m&&a.createElement(te,{minLabel:"",maxLabel:"",values:[l],className:"iui-opacity-slider",trackDisplayMode:"none",tooltipProps:()=>({visible:!1}),onChange:d=>{I(d[0],!0)},onUpdate:d=>{I(d[0],!1)},min:0,max:1,step:.01,style:{"--iui-color-picker-selected-color":$},thumbProps:()=>({"aria-label":"Opacity"})}))}),ie=a.forwardRef((u,e)=>{let{defaultColorFormat:o,allowedColorFormats:s=["hsl","rgb","hex"],className:r,...h}=u,g=a.useRef(null),{activeColor:i,applyHsvColorChange:b,hsvColor:c,showAlpha:m}=X(),[n,f]=a.useState(o);a.useEffect(()=>{f(o)},[o]);let[l,v]=a.useState(["","","",""]);a.useEffect(()=>{if(n==="hsl"){let t=i.toHslColor();v([p.getFormattedColorNumber(c.h),p.getFormattedColorNumber(t.s),p.getFormattedColorNumber(t.l),p.getFormattedColorNumber(t.a??i.getAlpha()/255,2)])}else if(n==="rgb"){let t=i.toRgbColor();v([t.r.toString(),t.g.toString(),t.b.toString(),p.getFormattedColorNumber(t.a??i.getAlpha()/255,2)])}else v([i.toHexString(m)]),R(!0)},[i,c.h,n,m]);let[S,R]=a.useState(!0),$=a.useCallback(()=>{let t=s[(s.indexOf(n)+1)%s.length]??s[0];f(t)},[n,s]),H=t=>!!(t&&g.current&&g.current.contains(t)),x=()=>{let t;if(n==="hex")try{let E=l[0].replace(/ /g,"").toLowerCase();if(t=p.create(E),R(!0),i.toHexString(m).toLowerCase()===E)return}catch{R(!1);return}if(n==="hsl"){let[E,F,D,L]=l.map(Number);if(E<0||E>360||F<0||F>100||D<0||D>100||L<0||L>1)return;let y=i.toHslColor();if(y.h===E&&y.s===F&&y.l===D&&y.a===L)return;t=p.create({h:E,s:F,l:D,a:L})}if(n==="rgb"){let[E,F,D,L]=l.map(Number);if(E<0||E>255||F<0||F>255||D<0||D>255||L<0||L>1)return;let y=i.toRgbColor();if(y.r===E&&y.g===F&&y.b===D&&y.a===L)return;t=p.create({r:E,g:F,b:D,a:L})}t&&b(t.toHsvColor(),!0,t)},j=a.createElement(T,{size:"small",maxLength:m?9:7,minLength:1,placeholder:"HEX","aria-label":"Hex",value:l[0],onChange:t=>{let E=t.target.value.startsWith("#")?t.target.value:`#${t.target.value}`;v([E])},onKeyDown:t=>{t.key==="Enter"&&(t.preventDefault(),x())},onBlur:t=>{t.preventDefault(),x()},status:S?void 0:"negative"}),I=a.createElement(a.Fragment,null,a.createElement(T,{size:"small",type:"number",min:"0",max:"359",step:".1",placeholder:"H","aria-label":"Hue",value:l[0]??"",onChange:t=>{v([t.target.value,l[1],l[2],l[3]])},onKeyDown:t=>{t.key==="Enter"&&(t.preventDefault(),x())},onBlur:t=>{t.preventDefault(),H(t.relatedTarget)||x()},status:Number(l[0])<0||Number(l[0])>360?"negative":void 0}),a.createElement(T,{size:"small",type:"number",min:"0",max:"100",step:".1",placeholder:"S","aria-label":"Saturation",value:l[1]??"",onChange:t=>{v([l[0],t.target.value,l[2],l[3]])},onKeyDown:t=>{t.key==="Enter"&&(t.preventDefault(),x())},onBlur:t=>{t.preventDefault(),H(t.relatedTarget)||x()},status:Number(l[1])<0||Number(l[1])>100?"negative":void 0}),a.createElement(T,{size:"small",type:"number",min:"0",max:"100",step:".1",placeholder:"L","aria-label":"Lightness",value:l[2]??"",onChange:t=>{v([l[0],l[1],t.target.value,l[3]])},onKeyDown:t=>{t.key==="Enter"&&(t.preventDefault(),x())},onBlur:t=>{t.preventDefault(),H(t.relatedTarget)||x()},status:Number(l[2])<0||Number(l[2])>100?"negative":void 0}),m&&a.createElement(T,{size:"small",type:"number",min:"0",max:"1",step:".01",placeholder:"A","aria-label":"Alpha",value:l[3]??"",onChange:t=>{v([l[0],l[1],l[2],t.target.value])},onKeyDown:t=>{t.key==="Enter"&&(t.preventDefault(),x())},onBlur:t=>{t.preventDefault(),H(t.relatedTarget)||x()},status:Number(l[3])<0||Number(l[3])>1?"negative":void 0})),B=a.createElement(a.Fragment,null,a.createElement(T,{size:"small",type:"number",min:"0",max:"255",placeholder:"R","aria-label":"Red",value:l[0]??"",onChange:t=>{v([t.target.value,l[1],l[2],l[3]])},onKeyDown:t=>{t.key==="Enter"&&(t.preventDefault(),x())},onBlur:t=>{t.preventDefault(),H(t.relatedTarget)||x()},status:Number(l[0])<0||Number(l[0])>255?"negative":void 0}),a.createElement(T,{size:"small",type:"number",min:"0",max:"255",placeholder:"G","aria-label":"Green",value:l[1]??"",onChange:t=>{v([l[0],t.target.value,l[2],l[3]])},onKeyDown:t=>{t.key==="Enter"&&(t.preventDefault(),x())},onBlur:t=>{t.preventDefault(),H(t.relatedTarget)||x()},status:Number(l[1])<0||Number(l[1])>255?"negative":void 0}),a.createElement(T,{size:"small",type:"number",min:"0",max:"255",placeholder:"B","aria-label":"Blue",value:l[2]??"",onChange:t=>{v([l[0],l[1],t.target.value,l[3]])},onKeyDown:t=>{t.key==="Enter"&&(t.preventDefault(),x())},onBlur:t=>{t.preventDefault(),H(t.relatedTarget)||x()},status:Number(l[2])<0||Number(l[2])>255?"negative":void 0}),m&&a.createElement(T,{size:"small",type:"number",min:"0",max:"1",step:".01",placeholder:"A","aria-label":"Alpha",value:l[3]??"",onChange:t=>{v([l[0],l[1],l[2],t.target.value])},onKeyDown:t=>{t.key==="Enter"&&(t.preventDefault(),x())},onBlur:t=>{t.preventDefault(),H(t.relatedTarget)||x()},status:Number(l[3])<0||Number(l[3])>1?"negative":void 0})),O=pe();return a.createElement(k,{className:G("iui-color-input-wrapper",r),ref:e,...h},a.createElement(k,{className:"iui-color-picker-section-label",id:O},m&&n!=="hex"?n.toUpperCase()+"A":n.toUpperCase()),a.createElement(k,{className:"iui-color-input"},s.length>1&&a.createElement(z,{styleType:"borderless",onClick:$,size:"small",label:"Switch format"},a.createElement(ve,null)),a.createElement(k,{ref:g,className:"iui-color-input-fields",role:n!=="hex"?"group":void 0,"aria-labelledby":n!=="hex"?O:void 0},n==="hex"&&j,n==="rgb"&&B,n==="hsl"&&I)))}),Q=a.forwardRef((u,e)=>{let{colors:o,label:s,className:r,children:h,...g}=u,{activeColor:i,setActiveColor:b,onChangeComplete:c}=X();return a.createElement(k,{className:G("iui-color-palette-wrapper",r),ref:e,...g},s&&a.createElement(k,{className:"iui-color-picker-section-label"},s),a.createElement(k,{className:"iui-color-palette"},h,o&&o.map((m,n)=>{let f=Z(m);return a.createElement(Y,{key:n,color:f,onClick:()=>{c==null||c(f),b(f)},isActive:f.equals(i)})})))}),ce=u=>a.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...u},a.createElement("path",{d:"M5 15l-3.781-3.5L5 8v2h8v3H5zm6-7l3.781-3.5L11 1v2H3v3h8z"})),He={title:"ColorPicker"},P=[{color:"#ffffff",name:"WHITE"},{color:"#5a6973",name:"GREY"},{color:"#00121d",name:"KURETAKE BLACK MANGA"},{color:"#002a44",name:"RHAPSODY IN BLUE"},{color:"#00426b",name:"DARK IMPERIAL BLUE"},{color:"#005a92",name:"JETSKI RACE"},{color:"#0073ba",name:"FRENCH BLUE"},{color:"#008be1",name:"BLUE COLA"},{color:"#30b0ff",name:"FANTASY CONSOLE SKY"},{color:"#58bfff",name:"HELLO SUMMER"},{color:"#7fceff",name:"CHROMIS DAMSEL BLUE"},{color:"#a6ddff",name:"DROPLET"},{color:"#cdecff",name:"LUCID DREAMS"},{color:"#e5f5fd",name:"KODAMA WHITE"},{color:"#010200",name:"REGISTRATION BLACK"},{color:"#122306",name:"YUZU SOY"},{color:"#23450b",name:"FOREST GREEN"},{color:"#346711",name:"TATZELWURM GREEN"},{color:"#458816",name:"CHLOROPHYLL"},{color:"#56aa1c",name:"PLASTIC PINES"},{color:"#5fbb1f",name:"FIELD GREEN"},{color:"#67cc22",name:"GREEN HIGH"},{color:"#91e458",name:"LILLIPUTIAN LIME"},{color:"#b2ec8b",name:"GREEN DAY"},{color:"#d4f4bd",name:"TEA GREEN"},{color:"#eef6e8",name:"VERDE PASTEL"},{color:"#9ba5af",name:"SERYI GREY"},{color:"#cf0000",name:"RED EPIPHYLLUM"},{color:"#ff6300",name:"SAFETY ORANGE"},{color:"#ffc335",name:"RISE-N-SHINE"}],ke=()=>{const[u,e]=a.useState(!1),[o,s]=a.useState(P[5]),[r,h]=a.useState(P[5].name),g=i=>{const b=i.toHexString(),c=P.findIndex(m=>m.color===b.toLowerCase());s(P[c]),h(P[c].name),console.log(`Selected ${P[c].color}`)};return C.jsxs(C.Fragment,{children:[C.jsx(W,{content:C.jsx(J,{selectedColor:o.color,onChangeComplete:g,children:C.jsx(Q,{colors:P.map(({color:i})=>i)})}),visible:u,onVisibleChange:e,placement:"bottom-start",children:C.jsx(z,{label:"Show color picker",children:C.jsx(Y,{style:{pointerEvents:"none"},color:o.color})})}),C.jsx("span",{style:{marginLeft:16},children:r})]})},Fe=()=>{const[u,e]=a.useState(!1),[o,s]=a.useState(p.create({h:0,s:100,l:50})),r=["hsl","rgb","hex"],[h,g]=a.useState(r[0]),i=c=>{s(c),console.log(`Selected ${b(c)}`)},b=(c=o)=>{switch(h){case"hsl":return c.toHslString();case"rgb":return c.toRgbString();case"hex":return c.toHexString().toUpperCase()}};return C.jsx(C.Fragment,{children:C.jsxs(ae,{children:[C.jsx(W,{content:C.jsxs(J,{selectedColor:o,onChangeComplete:i,children:[C.jsx(se,{}),C.jsx(ie,{defaultColorFormat:h}),C.jsx(Q,{label:"Saved Colors",colors:[{h:0,s:100,l:50},{r:255,g:98,b:0},"#fec134","#5A6973",{h:95,s:83,v:72},{h:250,s:100,l:59}]})]}),visible:u,onVisibleChange:e,placement:"bottom-start",children:C.jsx(z,{label:"Show color picker",children:C.jsx(Y,{style:{pointerEvents:"none"},color:o})})}),C.jsx(le,{onClick:()=>{g(r[(r.indexOf(h)+1)%r.length])},endIcon:C.jsx(ce,{}),children:C.jsx("div",{style:{width:170},children:b()??"No color selected."})})]})})},De=()=>{const[u,e]=a.useState(!1),[o,s]=a.useState(p.create({r:90,g:105,b:115,a:.4})),r=["hsl","rgb","hex"],[h,g]=a.useState(r[0]),i=c=>{s(c),console.log(`Selected ${b(c)}`)},b=(c=o)=>{switch(h){case"hsl":return c.toHslString(!0);case"rgb":return c.toRgbString(!0);case"hex":return c.toHexString(!0)}};return C.jsx(C.Fragment,{children:C.jsxs(ae,{children:[C.jsx(W,{content:C.jsxs(J,{selectedColor:o,onChangeComplete:i,showAlpha:!0,children:[C.jsx(se,{}),C.jsx(ie,{defaultColorFormat:h}),C.jsx(Q,{label:"Saved Colors",colors:[{r:90,g:105,b:115,a:1},{r:90,g:105,b:115,a:.81},{r:90,g:105,b:115,a:.4}]})]}),visible:u,onVisibleChange:e,placement:"bottom-start",children:C.jsx(z,{label:"Show color picker",children:C.jsx(Y,{style:{pointerEvents:"none"},color:o})})}),C.jsx(le,{onClick:()=>{g(r[(r.indexOf(h)+1)%r.length])},endIcon:C.jsx(ce,{}),children:C.jsx("div",{style:{width:200},children:b()??"No color selected."})})]})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Fe as Advanced,ke as Basic,De as WithAlpha,He as default};
