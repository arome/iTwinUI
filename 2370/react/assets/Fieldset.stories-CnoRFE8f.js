import{r as l,c as b,j as e}from"./index-DXBjKzeP.js";import{F as h}from"./FieldsetBase-BPK0hBpk.js";import{L as m}from"./LabeledSelect-BUbWr6R4.js";import{I as r}from"./InputGroup-C1dSVtmo.js";import{R as a}from"./Radio-B5yGoCU4.js";import{T as i}from"./ToggleSwitch-BxUxbwu9.js";import"./Select-CTqhAUyS.js";import"./MenuItem-CbFAkNIc.js";import"./focusable-CyQJtPTg.js";import"./ListItem-BDOM0Z9K.js";import"./LinkAction-DWnhxyKu.js";import"./Tag-6Y5pwymD.js";import"./Icon-DCEecauC.js";import"./List-D8UpYt0H.js";import"./SvgCheckmark-B65I9QT-.js";import"./SvgCaretDownSmall-CN6cnPu9.js";import"./InputGrid-C_0IanRD.js";import"./Label-DM50dGsw.js";import"./Input-CWRtm-ZM.js";import"./Textarea-Dit0N42M.js";import"./InputWithDecorations-iiDSrsjf.js";import"./InputFlexContainer-TGAy7C0x.js";import"./MenuExtraContent-CsGYA1do.js";import"./Text-DcuUQEjC.js";import"./useContainerWidth-D82WkVOD.js";import"./useVirtualScroll-BTT4fenB.js";const p=l.forwardRef((s,o)=>{let{children:t,className:u,disabled:d,legend:c,...x}=s;return l.createElement(h,{className:b("iui-fieldset",u),disabled:d,ref:o,...x},c&&l.createElement("legend",null,c),d?l.Children.map(t,n=>l.isValidElement(n)?l.cloneElement(n,{disabled:!0}):n):t)}),J={title:"Fieldset"},K=()=>{const[s,o]=l.useState(void 0);return e.jsxs(p,{legend:"General Settings",style:{display:"flex",flexDirection:"column",gap:11},children:[e.jsx(m,{label:"Resolution",options:[{value:1,label:"1200 x 1000"},{value:2,label:"1600 x 1200"},{value:3,label:"2560 x 1600"}],displayStyle:"inline",value:s,onChange:t=>o(t),placeholder:"Select"}),e.jsxs(r,{label:"Color Theme",displayStyle:"inline",children:[e.jsx(a,{name:"choice",value:"option1",label:"Light"}),e.jsx(a,{name:"choice",value:"option2",label:"Dark"}),e.jsx(a,{name:"choice",value:"option3",label:"Match device"})]}),e.jsxs(r,{children:[e.jsx(i,{label:"Share usage statistics"}),e.jsx(i,{label:"Share crash logs"}),e.jsx(i,{disabled:!0,label:"Advanced settings"})]})]})},O=()=>{const[s,o]=l.useState(void 0);return e.jsxs(p,{legend:"General Settings",style:{display:"flex",flexDirection:"column",gap:11},disabled:!0,children:[e.jsx(m,{label:"Resolution",options:[{value:1,label:"1200 x 1000"},{value:2,label:"1600 x 1200"},{value:3,label:"2560 x 1600"}],displayStyle:"inline",value:s,onChange:t=>o(t),placeholder:"Select"}),e.jsxs(r,{label:"Color Theme",displayStyle:"inline",children:[e.jsx(a,{name:"choice",value:"option1",label:"Light"}),e.jsx(a,{name:"choice",value:"option2",label:"Dark"}),e.jsx(a,{name:"choice",value:"option3",label:"Match device"})]}),e.jsxs(r,{children:[e.jsx(i,{label:"Share usage statistics"}),e.jsx(i,{label:"Share crash logs"}),e.jsx(i,{label:"Advanced settings"})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{K as Basic,O as Disabled,J as default};
