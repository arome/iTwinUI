import{r as v,B as m,c as h,V as S,j as a,R as u}from"./index-CMT5ZWXL.js";import{S as C}from"./Camera-CU4ldyLQ.js";import{C as i,I as M,S as I}from"./InputGrid-CxUJ2lKx.js";import{L as A}from"./Label-Cc8PQXBW.js";import{M as T}from"./MenuItem-Cys7w8BZ.js";import{F as y}from"./Flex-Bs4RbMYy.js";import{D as G}from"./Divider-D9LhWd9P.js";import{C as x}from"./Checkbox-Bs_Z1VvX.js";import"./Input-BuG6pjby.js";import"./Textarea-DrmXGrWR.js";import"./Icon-Blg8hdXF.js";import"./InputWithDecorations--38rcH07.js";import"./InputFlexContainer-DRUw2Fb5.js";import"./MenuExtraContent-DMLmZ47N.js";import"./Select-jJbbbgB6.js";import"./Tag-BgYubxDr.js";import"./LinkAction-BDzIzOXt.js";import"./List-eHU5MT9M.js";import"./SvgCheckmark-FJJNjO0I.js";import"./SvgCaretDownSmall-Bmd4DO7F.js";import"./Text-Bn8rigPg.js";import"./useContainerWidth-CPoBbREo.js";import"./useVirtualScroll-Dbtc7-O6.js";import"./ListItem-C2rqQCbn.js";import"./focusable-JYc8HAvD.js";import"./ProgressRadial-XyGd28Gq.js";const B=v.forwardRef((l,e)=>{let{hasSublabel:n,hasIcon:t,contentWidth:r,translatedStrings:o={loading:"Loading…"},className:d,style:c,...b}=l;return v.createElement(m,{className:h("iui-menu-item-skeleton",d),"data-iui-size":n&&"large",style:{"--iui-menu-item-content-skeleton-max-width":r,...c},ref:e,...b},t&&v.createElement(m,{className:"iui-icon iui-skeleton","aria-hidden":!0}),v.createElement(m,{as:"span",className:"iui-content"},v.createElement(m,{className:"iui-menu-label iui-skeleton","aria-hidden":!0}),n&&v.createElement(m,{className:"iui-menu-description iui-skeleton","aria-hidden":!0}),v.createElement(S,null,o.loading)))}),le={decorators:[l=>a.jsx("div",{style:{maxWidth:"clamp(300px, 50%, 100%)",minHeight:380},children:a.jsx(l,{})})],title:"ComboBox"},s=[{label:"Afghanistan",value:"AF"},{label:"Åland Islands",value:"AX"},{label:"Albania",value:"AL"},{label:"Algeria",value:"DZ"},{label:"American Samoa",value:"AS"},{label:"Andorra",value:"AD"},{label:"Angola",value:"AO"},{label:"Anguilla",value:"AI"},{label:"Antarctica",value:"AQ"},{label:"Antigua and Barbuda",value:"AG"},{label:"Argentina",value:"AR"},{label:"Armenia",value:"AM"},{label:"Aruba",value:"AW"},{label:"Australia",value:"AU"},{label:"Austria",value:"AT"},{label:"Azerbaijan",value:"AZ"},{label:"Bahamas",value:"BS"},{label:"Bahrain",value:"BH"},{label:"Bangladesh",value:"BD"},{label:"Barbados",value:"BB"},{label:"Belarus",value:"BY"},{label:"Belgium",value:"BE"},{label:"Belize",value:"BZ"},{label:"Benin",value:"BJ"},{label:"Bermuda",value:"BM"},{label:"Bhutan",value:"BT"},{label:"Bolivia",value:"BO"},{label:"Bosnia and Herzegovina",value:"BA"},{label:"Botswana",value:"BW"},{label:"Bouvet Island",value:"BV"},{label:"Brazil",value:"BR"},{label:"British Indian Ocean Territory",value:"IO"},{label:"Brunei Darussalam",value:"BN"},{label:"Bulgaria",value:"BG"},{label:"Burkina Faso",value:"BF"},{label:"Burundi",value:"BI"},{label:"Cambodia",value:"KH"},{label:"Cameroon",value:"CM"},{label:"Canada",value:"CA"},{label:"Cape Verde",value:"CV"},{label:"Cayman Islands",value:"KY"},{label:"Central African Republic",value:"CF"},{label:"Chad",value:"TD"},{label:"Chile",value:"CL"},{label:"China",value:"CN"},{label:"Christmas Island",value:"CX"},{label:"Cocos (Keeling) Islands",value:"CC"},{label:"Colombia",value:"CO"},{label:"Comoros",value:"KM"},{label:"Congo",value:"CG"},{label:"Congo, The Democratic Republic of the",value:"CD"},{label:"Cook Islands",value:"CK"},{label:"Costa Rica",value:"CR"},{label:"Cote D'Ivoire",value:"CI"},{label:"Croatia",value:"HR"},{label:"Cuba",value:"CU"},{label:"Cyprus",value:"CY"},{label:"Czech Republic",value:"CZ"},{label:"Denmark",value:"DK"},{label:"Djibouti",value:"DJ"},{label:"Dominica",value:"DM"},{label:"Dominican Republic",value:"DO"},{label:"Ecuador",value:"EC"},{label:"Egypt",value:"EG"},{label:"El Salvador",value:"SV"},{label:"Equatorial Guinea",value:"GQ"},{label:"Eritrea",value:"ER"},{label:"Estonia",value:"EE"},{label:"Ethiopia",value:"ET"},{label:"Falkland Islands (Malvinas)",value:"FK"},{label:"Faroe Islands",value:"FO"},{label:"Fiji",value:"FJ"},{label:"Finland",value:"FI"},{label:"France",value:"FR"},{label:"French Guiana",value:"GF"},{label:"French Polynesia",value:"PF"},{label:"French Southern Territories",value:"TF"},{label:"Gabon",value:"GA"},{label:"Gambia",value:"GM"},{label:"Georgia",value:"GE"},{label:"Germany",value:"DE"},{label:"Ghana",value:"GH"},{label:"Gibraltar",value:"GI"},{label:"Greece",value:"GR"},{label:"Greenland",value:"GL"},{label:"Grenada",value:"GD"},{label:"Guadeloupe",value:"GP"},{label:"Guam",value:"GU"},{label:"Guatemala",value:"GT"},{label:"Guernsey",value:"GG"},{label:"Guinea",value:"GN"},{label:"Guinea-Bissau",value:"GW"},{label:"Guyana",value:"GY"},{label:"Haiti",value:"HT"},{label:"Heard Island and Mcdonald Islands",value:"HM"},{label:"Holy See (Vatican City State)",value:"VA"},{label:"Honduras",value:"HN"},{label:"Hong Kong",value:"HK"},{label:"Hungary",value:"HU"},{label:"Iceland",value:"IS"},{label:"India",value:"IN"},{label:"Indonesia",value:"ID"},{label:"Iran, Islamic Republic Of",value:"IR"},{label:"Iraq",value:"IQ"},{label:"Ireland",value:"IE"},{label:"Isle of Man",value:"IM"},{label:"Israel",value:"IL"},{label:"Italy",value:"IT"},{label:"Jamaica",value:"JM"},{label:"Japan",value:"JP"},{label:"Jersey",value:"JE"},{label:"Jordan",value:"JO"},{label:"Kazakhstan",value:"KZ"},{label:"Kenya",value:"KE"},{label:"Kiribati",value:"KI"},{label:"Korea, Democratic People'S Republic of",value:"KP"},{label:"Korea, Republic of",value:"KR"},{label:"Kuwait",value:"KW"},{label:"Kyrgyzstan",value:"KG"},{label:"Lao People'S Democratic Republic",value:"LA"},{label:"Latvia",value:"LV"},{label:"Lebanon",value:"LB"},{label:"Lesotho",value:"LS"},{label:"Liberia",value:"LR"},{label:"Libyan Arab Jamahiriya",value:"LY"},{label:"Liechtenstein",value:"LI"},{label:"Lithuania",value:"LT"},{label:"Luxembourg",value:"LU"},{label:"Macao",value:"MO"},{label:"Macedonia, The Former Yugoslav Republic of",value:"MK"},{label:"Madagascar",value:"MG"},{label:"Malawi",value:"MW"},{label:"Malaysia",value:"MY"},{label:"Maldives",value:"MV"},{label:"Mali",value:"ML"},{label:"Malta",value:"MT"},{label:"Marshall Islands",value:"MH"},{label:"Martinique",value:"MQ"},{label:"Mauritania",value:"MR"},{label:"Mauritius",value:"MU"},{label:"Mayotte",value:"YT"},{label:"Mexico",value:"MX"},{label:"Micronesia, Federated States of",value:"FM"},{label:"Moldova, Republic of",value:"MD"},{label:"Monaco",value:"MC"},{label:"Mongolia",value:"MN"},{label:"Montserrat",value:"MS"},{label:"Morocco",value:"MA"},{label:"Mozambique",value:"MZ"},{label:"Myanmar",value:"MM"},{label:"Namibia",value:"NA"},{label:"Nauru",value:"NR"},{label:"Nepal",value:"NP"},{label:"Netherlands",value:"NL"},{label:"Netherlands Antilles",value:"AN"},{label:"New Caledonia",value:"NC"},{label:"New Zealand",value:"NZ"},{label:"Nicaragua",value:"NI"},{label:"Niger",value:"NE"},{label:"Nigeria",value:"NG"},{label:"Niue",value:"NU"},{label:"Norfolk Island",value:"NF"},{label:"Northern Mariana Islands",value:"MP"},{label:"Norway",value:"NO"},{label:"Oman",value:"OM"},{label:"Pakistan",value:"PK"},{label:"Palau",value:"PW"},{label:"Palestinian Territory, Occupied",value:"PS"},{label:"Panama",value:"PA"},{label:"Papua New Guinea",value:"PG"},{label:"Paraguay",value:"PY"},{label:"Peru",value:"PE"},{label:"Philippines",value:"PH"},{label:"Pitcairn",value:"PN"},{label:"Poland",value:"PL"},{label:"Portugal",value:"PT"},{label:"Puerto Rico",value:"PR"},{label:"Qatar",value:"QA"},{label:"Reunion",value:"RE"},{label:"Romania",value:"RO"},{label:"Russian Federation",value:"RU"},{label:"RWANDA",value:"RW"},{label:"Saint Helena",value:"SH"},{label:"Saint Kitts and Nevis",value:"KN"},{label:"Saint Lucia",value:"LC"},{label:"Saint Pierre and Miquelon",value:"PM"},{label:"Saint Vincent and the Grenadines",value:"VC"},{label:"Samoa",value:"WS"},{label:"San Marino",value:"SM"},{label:"Sao Tome and Principe",value:"ST"},{label:"Saudi Arabia",value:"SA"},{label:"Senegal",value:"SN"},{label:"Serbia and Montenegro",value:"CS"},{label:"Seychelles",value:"SC"},{label:"Sierra Leone",value:"SL"},{label:"Singapore",value:"SG"},{label:"Slovakia",value:"SK"},{label:"Slovenia",value:"SI"},{label:"Solomon Islands",value:"SB"},{label:"Somalia",value:"SO"},{label:"South Africa",value:"ZA"},{label:"South Georgia and the South Sandwich Islands",value:"GS"},{label:"Spain",value:"ES"},{label:"Sri Lanka",value:"LK"},{label:"Sudan",value:"SD"},{label:"Surilabel",value:"SR"},{label:"Svalbard and Jan Mayen",value:"SJ"},{label:"Swaziland",value:"SZ"},{label:"Sweden",value:"SE"},{label:"Switzerland",value:"CH"},{label:"Syrian Arab Republic",value:"SY"},{label:"Taiwan, Province of China",value:"TW"},{label:"Tajikistan",value:"TJ"},{label:"Tanzania, United Republic of",value:"TZ"},{label:"Thailand",value:"TH"},{label:"Timor-Leste",value:"TL"},{label:"Togo",value:"TG"},{label:"Tokelau",value:"TK"},{label:"Tonga",value:"TO"},{label:"Trinidad and Tobago",value:"TT"},{label:"Tunisia",value:"TN"},{label:"Turkey",value:"TR"},{label:"Turkmenistan",value:"TM"},{label:"Turks and Caicos Islands",value:"TC"},{label:"Tuvalu",value:"TV"},{label:"Uganda",value:"UG"},{label:"Ukraine",value:"UA"},{label:"United Arab Emirates",value:"AE"},{label:"United Kingdom",value:"GB"},{label:"United States",value:"US"},{label:"United States Minor Outlying Islands",value:"UM"},{label:"Uruguay",value:"UY"},{label:"Uzbekistan",value:"UZ"},{label:"Vanuatu",value:"VU"},{label:"Venezuela",value:"VE"},{label:"Viet Nam",value:"VN"},{label:"Virgin Islands, British",value:"VG"},{label:"Virgin Islands, U.S.",value:"VI"},{label:"Wallis and Futuna",value:"WF"},{label:"Western Sahara",value:"EH"},{label:"Yemen",value:"YE"},{label:"Zambia",value:"ZM"},{label:"Zimbabwe",value:"ZW"}],P=async()=>new Promise(l=>{setTimeout(()=>{l(s.map(e=>({...e,sublabel:e.value,icon:a.jsx("img",{loading:"lazy",style:{width:20,height:15},src:`https://flagcdn.com/w20/${e.value.toLowerCase()}.png`,srcSet:`https://flagcdn.com/w40/${e.value.toLowerCase()}.png 2x`,alt:""})})))},2e3)}),ue=()=>{const l=u.useMemo(()=>s,[]);return a.jsx(i,{options:l,inputProps:{placeholder:"Select a country"},onChange:e=>console.log(e??"")})},ne=()=>{const l=u.useMemo(()=>s,[]),[e,n]=u.useState("CA");return a.jsx(i,{options:l,inputProps:{placeholder:"Select a country"},value:e,onChange:t=>{console.log(t),n(t)}})},te=()=>{const l=u.useMemo(()=>s.map((e,n)=>({...e,sublabel:`${e.value}${n%2?" -- disabled":""}`,disabled:n%2!==0,startIcon:a.jsx("img",{loading:"lazy",style:{width:20,height:15},src:`https://flagcdn.com/w20/${e.value.toLowerCase()}.png`,srcSet:`https://flagcdn.com/w40/${e.value.toLowerCase()}.png 2x`,alt:""})})),[]);return a.jsx(i,{options:l,inputProps:{placeholder:"Select a country"},onChange:e=>console.log(e??"")})},oe=()=>{const l=u.useMemo(()=>s,[]);return a.jsxs(M,{children:[a.jsx(A,{children:"Country"}),a.jsx(i,{options:l,onChange:e=>console.log(e??""),inputProps:{placeholder:"Select a country"}})]})},ie=()=>{const l=u.useMemo(()=>s,[]);return a.jsx(i,{options:l,inputProps:{placeholder:"Select a country"},onChange:e=>console.log(e??""),status:"negative"})},se=()=>{const l=u.useMemo(()=>s,[]),[e,n]=u.useState("AF"),t=u.useCallback(o=>{console.log(o??""),n(o)},[]),r=u.useCallback(({value:o,label:d},{isSelected:c,id:b})=>a.jsx(T,{id:b,isSelected:c,value:o,children:a.jsx("em",{style:{textTransform:"uppercase",fontWeight:c?"bold":void 0},children:d})},b),[]);return a.jsx(i,{options:l,inputProps:{placeholder:"Select a country"},value:e,onChange:t,itemRenderer:r})},re=()=>{const l=u.useMemo(()=>s,[]);return a.jsx(i,{options:l,message:"This is a message",inputProps:{placeholder:"Select a country"},onChange:e=>console.log(e??"")})},be=()=>{const l=u.useMemo(()=>s,[]);return a.jsx(i,{options:l,message:a.jsx(I,{startIcon:a.jsx(C,{}),children:"This is a message"}),inputProps:{placeholder:"Select a country"},onChange:e=>console.log(e??"")})},ve=()=>{const[l,e]=u.useState([]),[n,t]=u.useState(),[r,o]=u.useState(!0),d=u.useCallback(b=>{console.log(b??""),t(b)},[]),c=u.useMemo(()=>r?a.jsx(a.Fragment,{children:new Array(6).fill(null).map((b,g)=>a.jsx(B,{hasIcon:!0,hasSublabel:!0,contentWidth:`${Math.min(Math.max(Math.random()*100,25),60)}%`},g))}):"No options found",[r]);return a.jsx(i,{inputProps:{placeholder:"Select a country"},value:n,onChange:d,emptyStateMessage:c,options:l,onShow:u.useCallback(async()=>{r&&(e(await P()),o(!1))},[r])})},ce=()=>{const l=u.useMemo(()=>s,[]);return a.jsx(i,{options:l,inputProps:{placeholder:"Select a country"},onChange:e=>console.log(e??""),enableVirtualization:!0})},N=()=>{const{clearFilterOnOptionToggle:l}=u.useContext(p),e=u.useMemo(()=>s,[]),[n,t]=u.useState(["CA","AX"]);return a.jsx(i,{options:e,inputProps:{placeholder:"Select a country"},multiple:!0,value:n,onChange:(r,o)=>{console.log(o.value+" "+o.type),t(r)},clearFilterOnOptionToggle:l})};N.decorators=[l=>{const[e,n]=u.useState(!0);return a.jsx(a.Fragment,{children:a.jsx(p.Provider,{value:{clearFilterOnOptionToggle:e},children:a.jsxs(y,{id:"main-story-container",flexDirection:"column",alignItems:"stretch",children:[a.jsx(l,{}),a.jsx(G,{}),a.jsx(x,{checked:e,onChange:t=>n(t.target.checked),label:"clearFilterOnOptionToggle"})]})})})}];const p=u.createContext({clearFilterOnOptionToggle:!0});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{ue as Basic,ne as Controlled,se as CustomRenderer,te as DisabledItems,ve as Loading,N as MultipleSelect,ce as Virtualized,be as WithCustomMessageIcon,oe as WithLabel,re as WithMessage,ie as WithStatus,le as default};
