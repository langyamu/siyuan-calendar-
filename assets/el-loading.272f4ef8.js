var St=Object.defineProperty,kt=Object.defineProperties;var Ct=Object.getOwnPropertyDescriptors;var Ye=Object.getOwnPropertySymbols;var Et=Object.prototype.hasOwnProperty,zt=Object.prototype.propertyIsEnumerable;var Ke=(e,t,l)=>t in e?St(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,V=(e,t)=>{for(var l in t||(t={}))Et.call(t,l)&&Ke(e,l,t[l]);if(Ye)for(var l of Ye(t))zt.call(t,l)&&Ke(e,l,t[l]);return e},X=(e,t)=>kt(e,Ct(t));import{aV as Tt,f as se,s as b,aW as Lt,az as tt,B as _t,u as s,aX as Nt,e as at,E as x,ak as O,m as ge,n as Pt,a3 as fe,p as Ue,ai as It,a9 as ze,aI as ae,y as be,aY as $t,z as At,C as Bt,aZ as Mt,D as Ht,v as Dt,x as q,a_ as Ce,a$ as Rt,b0 as Vt,b1 as Ft,b2 as Ot,b3 as ot,w as oe,a0 as M,b4 as Xe,o as lt,b5 as st,V as Te,ao as Ne,ap as Pe,G as w,H as N,Q as E,I as pe,O as k,J as ee,a8 as H,K as P,L as F,M as te,P as G,b6 as Ee,ad as ve,b7 as Wt,ar as jt,a7 as ce,R as me,_ as ye,a4 as le,W as nt,A as Yt,t as Kt,b as Ut,b8 as Le,aD as rt,d as Je,S as Xt,U as it,aH as Jt,b9 as qt,r as he,as as Z,aw as Gt,j as Q,k as qe,ba as Zt}from"./index.6c479464.js";function Da(){if(!arguments.length)return[];var e=arguments[0];return Tt(e)?e:[e]}let ue;const Ra=()=>{var e;if(!se)return 0;if(ue!==void 0)return ue;const t=document.createElement("div");t.className="el-scrollbar__wrap",t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const l=t.offsetWidth;t.style.overflow="scroll";const a=document.createElement("div");a.style.width="100%",t.appendChild(a);const n=a.offsetWidth;return(e=t.parentNode)==null||e.removeChild(t),ue=l-n,ue};function Va(e,t){if(!se)return;if(!t){e.scrollTop=0;return}const l=[];let a=t.offsetParent;for(;a!==null&&e!==a&&e.contains(a);)l.push(a),a=a.offsetParent;const n=t.offsetTop+l.reduce((c,p)=>c+p.offsetTop,0),i=n+t.offsetHeight,r=e.scrollTop,v=r+e.clientHeight;n<r?e.scrollTop=n:i>v&&(e.scrollTop=i-e.clientHeight)}const Qt=e=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e),ea=["class","style"],ta=/^on[A-Z]/,aa=(e={})=>{const{excludeListeners:t=!1,excludeKeys:l}=e,a=b(()=>((l==null?void 0:l.value)||[]).concat(ea)),n=tt();return n?b(()=>{var i;return Lt(Object.entries((i=n.proxy)==null?void 0:i.$attrs).filter(([r])=>!a.value.includes(r)&&!(t&&ta.test(r))))}):b(()=>({}))},ct=Symbol("scrollbarContextKey");var oa={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const la=e=>(t,l)=>sa(t,l,s(e)),sa=(e,t,l)=>Nt(l,e,e).replace(/\{(\w+)\}/g,(a,n)=>{var i;return`${(i=t==null?void 0:t[n])!=null?i:`{${n}}`}`}),na=e=>{const t=b(()=>s(e).name),l=at(e)?e:x(e);return{lang:t,locale:l,t:la(e)}},Fa=()=>{const e=_t("locale");return na(b(()=>e.value||oa))};function ra(e){const t=x();function l(){if(e.value==null)return;const{selectionStart:n,selectionEnd:i,value:r}=e.value;if(n==null||i==null)return;const v=r.slice(0,Math.max(0,n)),c=r.slice(Math.max(0,i));t.value={selectionStart:n,selectionEnd:i,value:r,beforeTxt:v,afterTxt:c}}function a(){if(e.value==null||t.value==null)return;const{value:n}=e.value,{beforeTxt:i,afterTxt:r,selectionStart:v}=t.value;if(i==null||r==null||v==null)return;let c=n.length;if(n.endsWith(r))c=n.length-r.length;else if(n.startsWith(i))c=i.length;else{const p=i[v-1],C=n.indexOf(p,v-1);C!==-1&&(c=C+1)}e.value.setSelectionRange(c,c)}return[l,a]}let B;const ia=`
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,ca=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function ua(e){const t=window.getComputedStyle(e),l=t.getPropertyValue("box-sizing"),a=Number.parseFloat(t.getPropertyValue("padding-bottom"))+Number.parseFloat(t.getPropertyValue("padding-top")),n=Number.parseFloat(t.getPropertyValue("border-bottom-width"))+Number.parseFloat(t.getPropertyValue("border-top-width"));return{contextStyle:ca.map(r=>`${r}:${t.getPropertyValue(r)}`).join(";"),paddingSize:a,borderSize:n,boxSizing:l}}function Ge(e,t=1,l){var a;B||(B=document.createElement("textarea"),document.body.appendChild(B));const{paddingSize:n,borderSize:i,boxSizing:r,contextStyle:v}=ua(e);B.setAttribute("style",`${v};${ia}`),B.value=e.value||e.placeholder||"";let c=B.scrollHeight;const p={};r==="border-box"?c=c+i:r==="content-box"&&(c=c-n),B.value="";const C=B.scrollHeight-n;if(O(t)){let m=C*t;r==="border-box"&&(m=m+n+i),c=Math.max(m,c),p.minHeight=`${m}px`}if(O(l)){let m=C*l;r==="border-box"&&(m=m+n+i),c=Math.min(m,c)}return p.height=`${c}px`,(a=B.parentNode)==null||a.removeChild(B),B=void 0,p}const da=ge({id:{type:String,default:void 0},size:Pt,disabled:Boolean,modelValue:{type:fe([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:fe([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String,default:""},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ue,default:""},prefixIcon:{type:Ue,default:""},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:fe([Object,Array,String]),default:()=>It({})}}),fa={[ze]:e=>ae(e),input:e=>ae(e),change:e=>ae(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},pa=["role"],va=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder"],ma=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder"],ha={name:"ElInput",inheritAttrs:!1},ga=be(X(V({},ha),{props:da,emits:fa,setup(e,{expose:t,emit:l}){const a=e,n={suffix:"append",prefix:"prepend"},i=tt(),r=$t(),v=At(),c=b(()=>{const o={};return a.containerRole==="combobox"&&(o["aria-haspopup"]=r["aria-haspopup"],o["aria-owns"]=r["aria-owns"],o["aria-expanded"]=r["aria-expanded"]),o}),p=aa({excludeKeys:b(()=>Object.keys(c.value))}),{form:C,formItem:m}=Bt(),{inputId:u}=Mt(a,{formItemContext:m}),g=Ht(),y=Dt(),f=q("input"),W=q("textarea"),D=Ce(),I=Ce(),$=x(!1),_=x(!1),d=x(!1),T=x(!1),S=x(),L=Ce(a.inputStyle),z=b(()=>D.value||I.value),A=b(()=>{var o;return(o=C==null?void 0:C.statusIcon)!=null?o:!1}),K=b(()=>(m==null?void 0:m.validateState)||""),Ie=b(()=>Rt[K.value]),ut=b(()=>T.value?Vt:Ft),dt=b(()=>[r.style,a.inputStyle]),$e=b(()=>[a.inputStyle,L.value,{resize:a.resize}]),j=b(()=>Ot(a.modelValue)?"":String(a.modelValue)),ne=b(()=>a.clearable&&!y.value&&!a.readonly&&!!j.value&&($.value||_.value)),we=b(()=>a.showPassword&&!y.value&&!a.readonly&&(!!j.value||$.value)),U=b(()=>a.showWordLimit&&!!p.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!y.value&&!a.readonly&&!a.showPassword),xe=b(()=>Array.from(j.value).length),ft=b(()=>!!U.value&&xe.value>Number(p.value.maxlength)),pt=b(()=>!!v.suffix||!!a.suffixIcon||ne.value||a.showPassword||U.value||!!K.value&&A.value),[vt,mt]=ra(D);ot(I,o=>{if(!U.value||a.resize!=="both")return;const h=o[0],{width:R}=h.contentRect;S.value={right:`calc(100% - ${R+15+6}px)`}});const re=()=>{const{type:o,autosize:h}=a;if(!(!se||o!=="textarea"))if(h){const R=le(h)?h.minRows:void 0,Y=le(h)?h.maxRows:void 0;L.value=V({},Ge(I.value,R,Y))}else L.value={minHeight:Ge(I.value).minHeight}},ie=()=>{const o=z.value;!o||o.value===j.value||(o.value=j.value)},Ae=o=>{const{el:h}=i.vnode;if(!h)return;const Y=Array.from(h.querySelectorAll(`.${f.e(o)}`)).find(xt=>xt.parentNode===h);if(!Y)return;const je=n[o];v[je]?Y.style.transform=`translateX(${o==="suffix"?"-":""}${h.querySelector(`.${f.be("group",je)}`).offsetWidth}px)`:Y.removeAttribute("style")},Se=()=>{Ae("prefix"),Ae("suffix")},ke=async o=>{vt();let{value:h}=o.target;a.formatter&&(h=a.parser?a.parser(h):h,h=a.formatter(h)),!d.value&&h!==j.value&&(l(ze,h),l("input",h),await M(),ie(),mt())},Be=o=>{l("change",o.target.value)},Me=o=>{l("compositionstart",o),d.value=!0},He=o=>{var h;l("compositionupdate",o);const R=(h=o.target)==null?void 0:h.value,Y=R[R.length-1]||"";d.value=!Qt(Y)},De=o=>{l("compositionend",o),d.value&&(d.value=!1,ke(o))},ht=()=>{T.value=!T.value,Re()},Re=async()=>{var o;await M(),(o=z.value)==null||o.focus()},gt=()=>{var o;return(o=z.value)==null?void 0:o.blur()},Ve=o=>{$.value=!0,l("focus",o)},Fe=o=>{var h;$.value=!1,l("blur",o),a.validateEvent&&((h=m==null?void 0:m.validate)==null||h.call(m,"blur").catch(R=>Xe()))},bt=o=>{_.value=!1,l("mouseleave",o)},yt=o=>{_.value=!0,l("mouseenter",o)},Oe=o=>{l("keydown",o)},wt=()=>{var o;(o=z.value)==null||o.select()},We=()=>{l(ze,""),l("change",""),l("clear"),l("input","")};return oe(()=>a.modelValue,()=>{var o;M(()=>re()),a.validateEvent&&((o=m==null?void 0:m.validate)==null||o.call(m,"change").catch(h=>Xe()))}),oe(j,()=>ie()),oe(()=>a.type,async()=>{await M(),ie(),re(),Se()}),lt(async()=>{!a.formatter&&a.parser,ie(),Se(),await M(),re()}),st(async()=>{await M(),Se()}),t({input:D,textarea:I,ref:z,textareaStyle:$e,autosize:Te(a,"autosize"),focus:Re,blur:gt,select:wt,clear:We,resizeTextarea:re}),(o,h)=>Ne((w(),N("div",Ee(s(c),{class:[o.type==="textarea"?s(W).b():s(f).b(),s(f).m(s(g)),s(f).is("disabled",s(y)),s(f).is("exceed",s(ft)),{[s(f).b("group")]:o.$slots.prepend||o.$slots.append,[s(f).bm("group","append")]:o.$slots.append,[s(f).bm("group","prepend")]:o.$slots.prepend,[s(f).m("prefix")]:o.$slots.prefix||o.prefixIcon,[s(f).m("suffix")]:o.$slots.suffix||o.suffixIcon||o.clearable||o.showPassword,[s(f).bm("suffix","password-clear")]:s(ne)&&s(we)},o.$attrs.class],style:s(dt),role:o.containerRole,onMouseenter:yt,onMouseleave:bt}),[E(" input "),o.type!=="textarea"?(w(),N(pe,{key:0},[E(" prepend slot "),o.$slots.prepend?(w(),N("div",{key:0,class:k(s(f).be("group","prepend"))},[ee(o.$slots,"prepend")],2)):E("v-if",!0),H("div",{class:k([s(f).e("wrapper"),s(f).is("focus",$.value)])},[E(" prefix slot "),o.$slots.prefix||o.prefixIcon?(w(),N("span",{key:0,class:k(s(f).e("prefix"))},[H("span",{class:k(s(f).e("prefix-inner"))},[ee(o.$slots,"prefix"),o.prefixIcon?(w(),P(s(G),{key:0,class:k(s(f).e("icon"))},{default:F(()=>[(w(),P(te(o.prefixIcon)))]),_:1},8,["class"])):E("v-if",!0)],2)],2)):E("v-if",!0),H("input",Ee({id:s(u),ref_key:"input",ref:D,class:s(f).e("inner")},s(p),{type:o.showPassword?T.value?"text":"password":o.type,disabled:s(y),formatter:o.formatter,parser:o.parser,readonly:o.readonly,autocomplete:o.autocomplete,tabindex:o.tabindex,"aria-label":o.label,placeholder:o.placeholder,style:o.inputStyle,onCompositionstart:Me,onCompositionupdate:He,onCompositionend:De,onInput:ke,onFocus:Ve,onBlur:Fe,onChange:Be,onKeydown:Oe}),null,16,va),E(" suffix slot "),s(pt)?(w(),N("span",{key:1,class:k(s(f).e("suffix"))},[H("span",{class:k(s(f).e("suffix-inner"))},[!s(ne)||!s(we)||!s(U)?(w(),N(pe,{key:0},[ee(o.$slots,"suffix"),o.suffixIcon?(w(),P(s(G),{key:0,class:k(s(f).e("icon"))},{default:F(()=>[(w(),P(te(o.suffixIcon)))]),_:1},8,["class"])):E("v-if",!0)],64)):E("v-if",!0),s(ne)?(w(),P(s(G),{key:1,class:k([s(f).e("icon"),s(f).e("clear")]),onMousedown:h[0]||(h[0]=jt(()=>{},["prevent"])),onClick:We},{default:F(()=>[ve(s(Wt))]),_:1},8,["class"])):E("v-if",!0),s(we)?(w(),P(s(G),{key:2,class:k([s(f).e("icon"),s(f).e("password")]),onClick:ht},{default:F(()=>[(w(),P(te(s(ut))))]),_:1},8,["class"])):E("v-if",!0),s(U)?(w(),N("span",{key:3,class:k(s(f).e("count"))},[H("span",{class:k(s(f).e("count-inner"))},ce(s(xe))+" / "+ce(s(p).maxlength),3)],2)):E("v-if",!0),s(K)&&s(Ie)&&s(A)?(w(),P(s(G),{key:4,class:k([s(f).e("icon"),s(f).e("validateIcon"),s(f).is("loading",s(K)==="validating")])},{default:F(()=>[(w(),P(te(s(Ie))))]),_:1},8,["class"])):E("v-if",!0)],2)],2)):E("v-if",!0)],2),E(" append slot "),o.$slots.append?(w(),N("div",{key:1,class:k(s(f).be("group","append"))},[ee(o.$slots,"append")],2)):E("v-if",!0)],64)):(w(),N(pe,{key:1},[E(" textarea "),H("textarea",Ee({id:s(u),ref_key:"textarea",ref:I,class:s(W).e("inner")},s(p),{tabindex:o.tabindex,disabled:s(y),readonly:o.readonly,autocomplete:o.autocomplete,style:s($e),"aria-label":o.label,placeholder:o.placeholder,onCompositionstart:Me,onCompositionupdate:He,onCompositionend:De,onInput:ke,onFocus:Ve,onBlur:Fe,onChange:Be,onKeydown:Oe}),null,16,ma),s(U)?(w(),N("span",{key:0,style:me(S.value),class:k(s(f).e("count"))},ce(s(xe))+" / "+ce(s(p).maxlength),7)):E("v-if",!0)],64))],16,pa)),[[Pe,o.type!=="hidden"]])}}));var ba=ye(ga,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Oa=nt(ba),J=4,ya={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},wa=({move:e,size:t,bar:l})=>({[l.size]:t,transform:`translate${l.axis}(${e}%)`}),xa=ge({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Sa=be({props:xa,setup(e){const t=e,l="Thumb",a=Yt(ct),n=q("scrollbar");a||Kt(l,"can not inject scrollbar context");const i=x(),r=x(),v=x({}),c=x(!1);let p=!1,C=!1,m=se?document.onselectstart:null;const u=b(()=>ya[t.vertical?"vertical":"horizontal"]),g=b(()=>wa({size:t.size,move:t.move,bar:u.value})),y=b(()=>i.value[u.value.offset]**2/a.wrapElement[u.value.scrollSize]/t.ratio/r.value[u.value.offset]),f=S=>{var L;if(S.stopPropagation(),S.ctrlKey||[1,2].includes(S.button))return;(L=window.getSelection())==null||L.removeAllRanges(),D(S);const z=S.currentTarget;!z||(v.value[u.value.axis]=z[u.value.offset]-(S[u.value.client]-z.getBoundingClientRect()[u.value.direction]))},W=S=>{if(!r.value||!i.value||!a.wrapElement)return;const L=Math.abs(S.target.getBoundingClientRect()[u.value.direction]-S[u.value.client]),z=r.value[u.value.offset]/2,A=(L-z)*100*y.value/i.value[u.value.offset];a.wrapElement[u.value.scroll]=A*a.wrapElement[u.value.scrollSize]/100},D=S=>{S.stopImmediatePropagation(),p=!0,document.addEventListener("mousemove",I),document.addEventListener("mouseup",$),m=document.onselectstart,document.onselectstart=()=>!1},I=S=>{if(!i.value||!r.value||p===!1)return;const L=v.value[u.value.axis];if(!L)return;const z=(i.value.getBoundingClientRect()[u.value.direction]-S[u.value.client])*-1,A=r.value[u.value.offset]-L,K=(z-A)*100*y.value/i.value[u.value.offset];a.wrapElement[u.value.scroll]=K*a.wrapElement[u.value.scrollSize]/100},$=()=>{p=!1,v.value[u.value.axis]=0,document.removeEventListener("mousemove",I),document.removeEventListener("mouseup",$),T(),C&&(c.value=!1)},_=()=>{C=!1,c.value=!!t.size},d=()=>{C=!0,c.value=p};Ut(()=>{T(),document.removeEventListener("mouseup",$)});const T=()=>{document.onselectstart!==m&&(document.onselectstart=m)};return Le(Te(a,"scrollbarElement"),"mousemove",_),Le(Te(a,"scrollbarElement"),"mouseleave",d),(S,L)=>(w(),P(rt,{name:s(n).b("fade")},{default:F(()=>[Ne(H("div",{ref_key:"instance",ref:i,class:k([s(n).e("bar"),s(n).is(s(u).key)]),onMousedown:W},[H("div",{ref_key:"thumb",ref:r,class:k(s(n).e("thumb")),style:me(s(g)),onMousedown:f},null,38)],34),[[Pe,S.always||c.value]])]),_:1},8,["name"]))}});var Ze=ye(Sa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const ka=ge({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),Ca=be({props:ka,setup(e,{expose:t}){const l=e,a=x(0),n=x(0);return t({handleScroll:r=>{if(r){const v=r.offsetHeight-J,c=r.offsetWidth-J;n.value=r.scrollTop*100/v*l.ratioY,a.value=r.scrollLeft*100/c*l.ratioX}}}),(r,v)=>(w(),N(pe,null,[ve(Ze,{move:a.value,ratio:r.ratioX,size:r.width,always:r.always},null,8,["move","ratio","size","always"]),ve(Ze,{move:n.value,ratio:r.ratioY,size:r.height,vertical:"",always:r.always},null,8,["move","ratio","size","always"])],64))}});var Ea=ye(Ca,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const za=ge({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:Boolean,wrapStyle:{type:fe([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),Ta={scroll:({scrollTop:e,scrollLeft:t})=>O(e)&&O(t)},La={name:"ElScrollbar"},_a=be(X(V({},La),{props:za,emits:Ta,setup(e,{expose:t,emit:l}){const a=e,n=q("scrollbar");let i,r;const v=x(),c=x(),p=x(),C=x("0"),m=x("0"),u=x(),g=x(1),y=x(1),f=b(()=>{const d={};return a.height&&(d.height=Je(a.height)),a.maxHeight&&(d.maxHeight=Je(a.maxHeight)),[a.wrapStyle,d]}),W=()=>{var d;c.value&&((d=u.value)==null||d.handleScroll(c.value),l("scroll",{scrollTop:c.value.scrollTop,scrollLeft:c.value.scrollLeft}))};function D(d,T){le(d)?c.value.scrollTo(d):O(d)&&O(T)&&c.value.scrollTo(d,T)}const I=d=>{!O(d)||(c.value.scrollTop=d)},$=d=>{!O(d)||(c.value.scrollLeft=d)},_=()=>{if(!c.value)return;const d=c.value.offsetHeight-J,T=c.value.offsetWidth-J,S=d**2/c.value.scrollHeight,L=T**2/c.value.scrollWidth,z=Math.max(S,a.minSize),A=Math.max(L,a.minSize);g.value=S/(d-S)/(z/(d-z)),y.value=L/(T-L)/(A/(T-A)),m.value=z+J<d?`${z}px`:"",C.value=A+J<T?`${A}px`:""};return oe(()=>a.noresize,d=>{d?(i==null||i(),r==null||r()):({stop:i}=ot(p,_),r=Le("resize",_))},{immediate:!0}),oe(()=>[a.maxHeight,a.height],()=>{a.native||M(()=>{var d;_(),c.value&&((d=u.value)==null||d.handleScroll(c.value))})}),Xt(ct,it({scrollbarElement:v,wrapElement:c})),lt(()=>{a.native||M(()=>_())}),st(()=>_()),t({wrap$:c,update:_,scrollTo:D,setScrollTop:I,setScrollLeft:$,handleScroll:W}),(d,T)=>(w(),N("div",{ref_key:"scrollbar$",ref:v,class:k(s(n).b())},[H("div",{ref_key:"wrap$",ref:c,class:k([d.wrapClass,s(n).e("wrap"),{[s(n).em("wrap","hidden-default")]:!d.native}]),style:me(s(f)),onScroll:W},[(w(),P(te(d.tag),{ref_key:"resize$",ref:p,class:k([s(n).e("view"),d.viewClass]),style:me(d.viewStyle)},{default:F(()=>[ee(d.$slots,"default")]),_:3},8,["class","style"]))],38),d.native?E("v-if",!0):(w(),P(Ea,{key:0,ref_key:"barRef",ref:u,height:m.value,width:C.value,always:d.always,"ratio-x":y.value,"ratio-y":g.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}}));var Na=ye(_a,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const Wa=nt(Na);function Pa(e){let t;const l=q("loading"),a=x(!1),n=it(X(V({},e),{originalPosition:"",originalOverflow:"",visible:!1}));function i(g){n.text=g}function r(){const g=n.parent;if(!g.vLoadingAddClassList){let y=g.getAttribute("loading-number");y=Number.parseInt(y)-1,y?g.setAttribute("loading-number",y.toString()):(he(g,l.bm("parent","relative")),g.removeAttribute("loading-number")),he(g,l.bm("parent","hidden"))}v(),m.unmount()}function v(){var g,y;(y=(g=u.$el)==null?void 0:g.parentNode)==null||y.removeChild(u.$el)}function c(){var g;if(e.beforeClose&&!e.beforeClose())return;const y=n.parent;y.vLoadingAddClassList=void 0,a.value=!0,clearTimeout(t),t=window.setTimeout(()=>{a.value&&(a.value=!1,r())},400),n.visible=!1,(g=e.closed)==null||g.call(e)}function p(){!a.value||(a.value=!1,r())}const m=qt({name:"ElLoading",setup(){return()=>{const g=n.spinner||n.svg,y=Z("svg",V({class:"circular",viewBox:n.svgViewBox?n.svgViewBox:"25 25 50 50"},g?{innerHTML:g}:{}),[Z("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})]),f=n.text?Z("p",{class:l.b("text")},[n.text]):void 0;return Z(rt,{name:l.b("fade"),onAfterLeave:p},{default:F(()=>[Ne(ve("div",{style:{backgroundColor:n.background||""},class:[l.b("mask"),n.customClass,n.fullscreen?"is-fullscreen":""]},[Z("div",{class:l.b("spinner")},[y,f])]),[[Pe,n.visible]])])})}}}),u=m.mount(document.createElement("div"));return X(V({},Jt(n)),{setText:i,removeElLoadingChild:v,close:c,handleAfterLeave:p,vm:u,get $el(){return u.$el}})}let de;const Ia=function(e={}){if(!se)return;const t=$a(e);if(t.fullscreen&&de)return de;const l=Pa(X(V({},t),{closed:()=>{var n;(n=t.closed)==null||n.call(t),t.fullscreen&&(de=void 0)}}));Aa(t,t.parent,l),Qe(t,t.parent,l),t.parent.vLoadingAddClassList=()=>Qe(t,t.parent,l);let a=t.parent.getAttribute("loading-number");return a?a=`${Number.parseInt(a)+1}`:a="1",t.parent.setAttribute("loading-number",a),t.parent.appendChild(l.$el),M(()=>l.visible.value=t.visible),t.fullscreen&&(de=l),l},$a=e=>{var t,l,a,n;let i;return ae(e.target)?i=(t=document.querySelector(e.target))!=null?t:document.body:i=e.target||document.body,{parent:i===document.body||e.body?document.body:i,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:i===document.body&&((l=e.fullscreen)!=null?l:!0),lock:(a=e.lock)!=null?a:!1,customClass:e.customClass||"",visible:(n=e.visible)!=null?n:!0,target:i}},Aa=async(e,t,l)=>{const{nextZIndex:a}=Gt(),n={};if(e.fullscreen)l.originalPosition.value=Q(document.body,"position"),l.originalOverflow.value=Q(document.body,"overflow"),n.zIndex=a();else if(e.parent===document.body){l.originalPosition.value=Q(document.body,"position"),await M();for(const i of["top","left"]){const r=i==="top"?"scrollTop":"scrollLeft";n[i]=`${e.target.getBoundingClientRect()[i]+document.body[r]+document.documentElement[r]-Number.parseInt(Q(document.body,`margin-${i}`),10)}px`}for(const i of["height","width"])n[i]=`${e.target.getBoundingClientRect()[i]}px`}else l.originalPosition.value=Q(t,"position");for(const[i,r]of Object.entries(n))l.$el.style[i]=r},Qe=(e,t,l)=>{const a=q("loading");l.originalPosition.value!=="absolute"&&l.originalPosition.value!=="fixed"?qe(t,a.bm("parent","relative")):he(t,a.bm("parent","relative")),e.fullscreen&&e.lock?qe(t,a.bm("parent","hidden")):he(t,a.bm("parent","hidden"))},_e=Symbol("ElLoading"),et=(e,t)=>{var l,a,n,i;const r=t.instance,v=u=>le(t.value)?t.value[u]:void 0,c=u=>{const g=ae(u)&&(r==null?void 0:r[u])||u;return g&&x(g)},p=u=>c(v(u)||e.getAttribute(`element-loading-${Zt(u)}`)),C=(l=v("fullscreen"))!=null?l:t.modifiers.fullscreen,m={text:p("text"),svg:p("svg"),svgViewBox:p("svgViewBox"),spinner:p("spinner"),background:p("background"),customClass:p("customClass"),fullscreen:C,target:(a=v("target"))!=null?a:C?void 0:e,body:(n=v("body"))!=null?n:t.modifiers.body,lock:(i=v("lock"))!=null?i:t.modifiers.lock};e[_e]={options:m,instance:Ia(m)}},Ba=(e,t)=>{for(const l of Object.keys(t))at(t[l])&&(t[l].value=e[l])},ja={mounted(e,t){t.value&&et(e,t)},updated(e,t){const l=e[_e];t.oldValue!==t.value&&(t.value&&!t.oldValue?et(e,t):t.value&&t.oldValue?le(t.value)&&Ba(t.value,l.options):l==null||l.instance.close())},unmounted(e){var t;(t=e[_e])==null||t.instance.close()}};export{Oa as E,Wa as a,Da as c,Ra as g,Qt as i,Va as s,Fa as u,ja as v};
//# sourceMappingURL=el-loading.272f4ef8.js.map
