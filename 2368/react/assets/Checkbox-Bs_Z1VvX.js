import{r as e,e as v,B as r,c as l}from"./index-CMT5ZWXL.js";import{P as y}from"./ProgressRadial-XyGd28Gq.js";const C=e.forwardRef((o,u)=>{let{className:d,disabled:i=!1,indeterminate:c=!1,label:s,status:m,variant:p="default",isLoading:t=!1,wrapperProps:b={},labelProps:f={},style:x,...h}=o,a=e.useRef(null),k=v(a,u);e.useEffect(()=>{a.current&&(a.current.indeterminate=c,a.current.checked=!c&&a.current.checked)});let n=e.createElement(e.Fragment,null,e.createElement(r,{as:"input",className:l("iui-checkbox",{"iui-checkbox-visibility":p==="eyeball"},d),style:x,"data-iui-loading":t?"true":void 0,disabled:i||t,type:"checkbox",ref:k,...h}),t&&e.createElement(y,{size:"x-small",indeterminate:!0})),{className:E,...N}=b,{className:g,...P}=f;return s?e.createElement(r,{as:"label",className:l("iui-checkbox-wrapper",E),"data-iui-disabled":i?"true":void 0,"data-iui-status":m,"data-iui-loading":t?"true":void 0,...N},n,s&&e.createElement(r,{as:"span",className:l("iui-checkbox-label",g),...P},s)):n});export{C};
