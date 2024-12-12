import{r as M,N as T,R as S}from"./index-Caxb35LP.js";function x(o,l,e){let s=e.initialDeps??[],t;return()=>{var n,i,r,a;let u;e.key&&((n=e.debug)!=null&&n.call(e))&&(u=Date.now());const c=o();if(!(c.length!==s.length||c.some((g,d)=>s[d]!==g)))return t;s=c;let m;if(e.key&&((i=e.debug)!=null&&i.call(e))&&(m=Date.now()),t=l(...c),e.key&&((r=e.debug)!=null&&r.call(e))){const g=Math.round((Date.now()-u)*100)/100,d=Math.round((Date.now()-m)*100)/100,z=d/16,v=(f,E)=>{for(f=String(f);f.length<E;)f=" "+f;return f};console.info(`%c⏱ ${v(d,5)} /${v(g,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*z,120))}deg 100% 31%);`,e==null?void 0:e.key)}return(a=e==null?void 0:e.onChange)==null||a.call(e,t),t}}function w(o,l){if(o===void 0)throw new Error("Unexpected undefined");return o}const _=(o,l)=>Math.abs(o-l)<1,R=(o,l,e)=>{let s;return function(...t){o.clearTimeout(s),s=o.setTimeout(()=>l.apply(this,t),e)}},k=o=>o,D=o=>{const l=Math.max(o.startIndex-o.overscan,0),e=Math.min(o.endIndex+o.overscan,o.count-1),s=[];for(let t=l;t<=e;t++)s.push(t);return s},A=(o,l)=>{const e=o.scrollElement;if(!e)return;const s=o.targetWindow;if(!s)return;const t=i=>{const{width:r,height:a}=i;l({width:Math.round(r),height:Math.round(a)})};if(t(e.getBoundingClientRect()),!s.ResizeObserver)return()=>{};const n=new s.ResizeObserver(i=>{const r=i[0];if(r!=null&&r.borderBoxSize){const a=r.borderBoxSize[0];if(a){t({width:a.inlineSize,height:a.blockSize});return}}t(e.getBoundingClientRect())});return n.observe(e,{box:"border-box"}),()=>{n.unobserve(e)}},C={passive:!0},F=typeof window>"u"?!0:"onscrollend"in window,W=(o,l)=>{const e=o.scrollElement;if(!e)return;const s=o.targetWindow;if(!s)return;let t=0;const n=F?()=>{}:R(s,()=>{l(t,!1)},o.options.isScrollingResetDelay),i=u=>()=>{t=e[o.options.horizontal?"scrollLeft":"scrollTop"],n(),l(t,u)},r=i(!0),a=i(!1);return a(),e.addEventListener("scroll",r,C),e.addEventListener("scrollend",a,C),()=>{e.removeEventListener("scroll",r),e.removeEventListener("scrollend",a)}},j=(o,l,e)=>{if(l!=null&&l.borderBoxSize){const s=l.borderBoxSize[0];if(s)return Math.round(s[e.options.horizontal?"inlineSize":"blockSize"])}return Math.round(o.getBoundingClientRect()[e.options.horizontal?"width":"height"])},B=(o,{adjustments:l=0,behavior:e},s)=>{var t,n;const i=o+l;(n=(t=s.scrollElement)==null?void 0:t.scrollTo)==null||n.call(t,{[s.options.horizontal?"left":"top"]:i,behavior:e})};class P{constructor(l){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let e=null;const s=()=>e||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:e=new this.targetWindow.ResizeObserver(t=>{t.forEach(n=>{this._measureElement(n.target,n)})}));return{disconnect:()=>{var t;return(t=s())==null?void 0:t.disconnect()},observe:t=>{var n;return(n=s())==null?void 0:n.observe(t,{box:"border-box"})},unobserve:t=>{var n;return(n=s())==null?void 0:n.unobserve(t)}}})(),this.range=null,this.setOptions=e=>{Object.entries(e).forEach(([s,t])=>{typeof t>"u"&&delete e[s]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:k,rangeExtractor:D,onChange:()=>{},measureElement:j,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,...e}},this.notify=(e,s)=>{var t,n;const{startIndex:i,endIndex:r}=this.range??{startIndex:void 0,endIndex:void 0},a=this.calculateRange();(e||i!==(a==null?void 0:a.startIndex)||r!==(a==null?void 0:a.endIndex))&&((n=(t=this.options).onChange)==null||n.call(t,this,s))},this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.observer.disconnect(),this.elementsCache.clear()},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;const s=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==s){if(this.cleanup(),!s){this.notify(!1,!1);return}this.scrollElement=s,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=((e=this.scrollElement)==null?void 0:e.window)??null,this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,t=>{this.scrollRect=t,this.notify(!1,!1)})),this.unsubs.push(this.options.observeElementOffset(this,(t,n)=>{this.scrollAdjustments=0,this.scrollDirection=n?this.getScrollOffset()<t?"forward":"backward":null,this.scrollOffset=t;const i=this.isScrolling;this.isScrolling=n,this.notify(i!==n,n)}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,s)=>{const t=new Map,n=new Map;for(let i=s-1;i>=0;i--){const r=e[i];if(t.has(r.lane))continue;const a=n.get(r.lane);if(a==null||r.end>a.end?n.set(r.lane,r):r.end<a.end&&t.set(r.lane,!0),t.size===this.options.lanes)break}return n.size===this.options.lanes?Array.from(n.values()).sort((i,r)=>i.end===r.end?i.index-r.index:i.end-r.end)[0]:void 0},this.getMeasurementOptions=x(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(e,s,t,n,i)=>(this.pendingMeasuredCacheIndexes=[],{count:e,paddingStart:s,scrollMargin:t,getItemKey:n,enabled:i}),{key:!1}),this.getMeasurements=x(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:e,paddingStart:s,scrollMargin:t,getItemKey:n,enabled:i},r)=>{var a;if(!i)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(h=>{this.itemSizeCache.set(h.key,h.size)}));const u=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const c=this.measurementsCache.slice(0,u);for(let h=u;h<e;h++){let m=(a=this.measurementsCache[h])==null?void 0:a.measureElement;m||(m=p=>{const I=n(h),b=this.elementsCache.get(I);if(!p){b&&(this.observer.unobserve(b),this.elementsCache.delete(I));return}b!==p&&(b&&this.observer.unobserve(b),this.observer.observe(p),this.elementsCache.set(I,p)),p.isConnected&&this.resizeItem(h,this.options.measureElement(p,void 0,this))});const g=n(h),d=this.options.lanes===1?c[h-1]:this.getFurthestMeasurement(c,h),z=d?d.end+this.options.gap:s+t,v=r.get(g),f=typeof v=="number"?v:this.options.estimateSize(h),E=z+f,y=d?d.lane:h%this.options.lanes;c[h]={index:h,start:z,size:f,end:E,key:g,lane:y,measureElement:m}}return this.measurementsCache=c,c},{key:!1,debug:()=>this.options.debug}),this.calculateRange=x(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset()],(e,s,t)=>this.range=e.length>0&&s>0?L({measurements:e,outerSize:s,scrollOffset:t}):null,{key:!1,debug:()=>this.options.debug}),this.getIndexes=x(()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count],(e,s,t,n)=>s===null?[]:e({startIndex:s.startIndex,endIndex:s.endIndex,overscan:t,count:n}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{const s=this.options.indexAttribute,t=e.getAttribute(s);return t?parseInt(t,10):(console.warn(`Missing attribute name '${s}={index}' on measured element.`),-1)},this._measureElement=(e,s)=>{const t=this.indexFromElement(e),n=this.getMeasurements()[t];if(!n||!e.isConnected){this.elementsCache.forEach((r,a)=>{r===e&&(this.observer.unobserve(e),this.elementsCache.delete(a))});return}const i=this.elementsCache.get(n.key);i!==e&&(i&&this.observer.unobserve(i),this.observer.observe(e),this.elementsCache.set(n.key,e)),this.resizeItem(t,this.options.measureElement(e,s,this))},this.resizeItem=(e,s)=>{const t=this.getMeasurements()[e];if(!t)return;const n=this.itemSizeCache.get(t.key)??t.size,i=s-n;i!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(t,i,this):t.start<this.getScrollOffset()+this.scrollAdjustments)&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=i,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(t.index),this.itemSizeCache=new Map(this.itemSizeCache.set(t.key,s)),this.notify(!0,!1))},this.measureElement=e=>{e&&this._measureElement(e,void 0)},this.getVirtualItems=x(()=>[this.getIndexes(),this.getMeasurements()],(e,s)=>{const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n],a=s[r];t.push(a)}return t},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{const s=this.getMeasurements();if(s.length!==0)return w(s[O(0,s.length-1,t=>w(s[t]).start,e)])},this.getOffsetForAlignment=(e,s)=>{const t=this.getSize(),n=this.getScrollOffset();s==="auto"&&(e<=n?s="start":e>=n+t?s="end":s="start"),s==="start"?e=e:s==="end"?e=e-t:s==="center"&&(e=e-t/2);const i=this.options.horizontal?"scrollWidth":"scrollHeight",a=(this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[i]:this.scrollElement[i]:0)-t;return Math.max(Math.min(a,e),0)},this.getOffsetForIndex=(e,s="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));const t=this.getMeasurements()[e];if(!t)return;const n=this.getSize(),i=this.getScrollOffset();if(s==="auto")if(t.end>=i+n-this.options.scrollPaddingEnd)s="end";else if(t.start<=i+this.options.scrollPaddingStart)s="start";else return[i,s];const r=s==="end"?t.end+this.options.scrollPaddingEnd:t.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(r,s),s]},this.isDynamicMode=()=>this.elementsCache.size>0,this.cancelScrollToIndex=()=>{this.scrollToIndexTimeoutId!==null&&this.targetWindow&&(this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=(e,{align:s="start",behavior:t}={})=>{this.cancelScrollToIndex(),t==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(e,s),{adjustments:void 0,behavior:t})},this.scrollToIndex=(e,{align:s="auto",behavior:t}={})=>{e=Math.max(0,Math.min(e,this.options.count-1)),this.cancelScrollToIndex(),t==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");const n=this.getOffsetForIndex(e,s);if(!n)return;const[i,r]=n;this._scrollToOffset(i,{adjustments:void 0,behavior:t}),t!=="smooth"&&this.isDynamicMode()&&this.targetWindow&&(this.scrollToIndexTimeoutId=this.targetWindow.setTimeout(()=>{if(this.scrollToIndexTimeoutId=null,this.elementsCache.has(this.options.getItemKey(e))){const[u]=w(this.getOffsetForIndex(e,r));_(u,this.getScrollOffset())||this.scrollToIndex(e,{align:r,behavior:t})}else this.scrollToIndex(e,{align:r,behavior:t})}))},this.scrollBy=(e,{behavior:s}={})=>{this.cancelScrollToIndex(),s==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+e,{adjustments:void 0,behavior:s})},this.getTotalSize=()=>{var e;const s=this.getMeasurements();let t;return s.length===0?t=this.options.paddingStart:t=this.options.lanes===1?((e=s[s.length-1])==null?void 0:e.end)??0:Math.max(...s.slice(-this.options.lanes).map(n=>n.end)),t-this.options.scrollMargin+this.options.paddingEnd},this._scrollToOffset=(e,{adjustments:s,behavior:t})=>{this.options.scrollToFn(e,{behavior:t,adjustments:s},this)},this.measure=()=>{var e,s;this.itemSizeCache=new Map,(s=(e=this.options).onChange)==null||s.call(e,this,!1)},this.setOptions(l)}}const O=(o,l,e,s)=>{for(;o<=l;){const t=(o+l)/2|0,n=e(t);if(n<s)o=t+1;else if(n>s)l=t-1;else return t}return o>0?o-1:0};function L({measurements:o,outerSize:l,scrollOffset:e}){const s=o.length-1,n=O(0,s,r=>o[r].start,e);let i=n;for(;i<s&&o[i].end<e+l;)i++;return{startIndex:n,endIndex:i}}const V=typeof document<"u"?M.useLayoutEffect:M.useEffect;function N(o){const l=M.useReducer(()=>({}),{})[1],e={...o,onChange:(t,n)=>{var i;n?T.flushSync(l):l(),(i=o.onChange)==null||i.call(o,t,n)}},[s]=M.useState(()=>new P(e));return s.setOptions(e),M.useEffect(()=>s._didMount(),[]),V(()=>s._willUpdate()),s}function $(o){return N({observeElementRect:A,observeElementOffset:W,scrollToFn:B,...o})}let U=`
:host {
  contain: layout;
  background-color: var(--iui-color-background);
}
[data-iui-virtualizer='root'] {
  min-inline-size: 100%;
  position: relative;
}
::slotted([data-iui-virtualizer='item']) {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
}
`;const K=o=>{let{...l}=o,e=$({indexAttribute:"data-iui-index",overscan:10,...l}),s=S.useCallback((n,i)=>{setTimeout(()=>{e.scrollToIndex(n,{align:"auto",...i})})},[e]),t=S.useMemo(()=>({...e,scrollToIndex:s}),[e,s]);return S.useMemo(()=>({virtualizer:t,css:U}),[t])};export{K as u};
