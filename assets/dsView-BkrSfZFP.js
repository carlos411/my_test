import{a as u,_ as $}from"./MainHeader-BMI33E1I.js";import{_ as T}from"./MainFooter-CJcXlDFS.js";import{_ as E,a as h}from"./DropdownQa-HVaXx4jM.js";import{g as A,r as d,f as p,c as m,d as l,t as f,u as I,F as w,h as H,i as M,n as k,j as c,k as L,a as t,w as i,e as a}from"./index-DhevOZ2_.js";const z={class:"dropdownBox"},C={class:"dropdownBtn"},D=["src"],U={class:"dropdownList"},q=["onClick"],S={__name:"DropdownMenu",props:{size:{type:String,default:"default"},placeHolder:{type:String,required:!0},options:{type:Array,required:!0}},setup(g){const B=A(),V=g,o=d(null),s=d(V.placeHolder),n=d(!1),v={red:{expandBtn:new URL("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207L10%2013L15%207'%20stroke='%23D14535'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",import.meta.url).href},blue:{expandBtn:new URL("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207L10%2013L15%207'%20stroke='%233B6683'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",import.meta.url).href}};function y(){n.value=!n.value,o.value.classList.toggle("-expand")}function b(e){s.value=e.name,o.value.classList.contains("-active")||o.value.classList.add("-active")}return(e,r)=>(p(),m("div",z,[l("div",{class:k(["dropdown-menu",V.size]),ref_key:"dropdownMenu",ref:o,onClick:y},[l("div",C,[l("span",null,f(s.value),1),l("img",{class:"expandBtn",src:v[I(B).meta.theme].expandBtn,alt:"expandBtn"},null,8,D)]),n.value?(p(),m(w,{key:0},[r[0]||(r[0]=l("hr",null,null,-1)),l("ul",U,[(p(!0),m(w,null,H(g.options,(x,_)=>(p(),m("li",{key:x,onClick:ee=>b(x)},[l("span",null,f(x.name),1)],8,q))),128))])],64)):M("",!0)],2)]))}},F="data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='36'%20height='36'%20rx='18'%20fill='%23F2EEEB'/%3e%3cpath%20d='M13.832%2013.834L22.1654%2022.1673'%20stroke='%23693413'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M22.168%2013.834L13.8346%2022.1673'%20stroke='%23693413'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",N={class:"introTitle"},Q={class:"bold"},j={class:"overflowBox"},R={class:"overflow"},O={__name:"LightBox",props:{bgc:{type:String,default:"#FFFEFA"},pX:{type:[Number,String],required:!0},pY:{type:[Number,String],required:!0},isLightBox:{type:Boolean,required:!0},title:{type:String,required:!0}},emits:["toggle"],setup(g,{emit:B}){const V=B;function o(){V("toggle")}return(s,n)=>(p(),m(w,null,[g.isLightBox?(p(),m("div",{key:0,class:k(["lightBox",{clicked:g.isLightBox}])},[l("div",{class:k(["lightBoxContent",g.bgc])},[l("div",{class:"closeBtnBox"},[l("div",{class:"closeBtn",onClick:o},n[0]||(n[0]=[l("img",{src:F,alt:"closeIcon"},null,-1)]))]),l("div",N,[l("h4",Q,f(g.title),1)]),l("div",j,[l("div",R,[c(s.$slots,"default")])])],2)],2)):M("",!0),l("div",{class:k(["blackCover",{clicked:g.isLightBox}])},null,2)],64))}},X={class:"buttons"},Y={style:{"flex-direction":"column"}},G={style:{display:"flex"}},J={style:{display:"flex","flex-direction":"column","align-items":"center",width:"200px"}},K={style:{"flex-direction":"column",gap:"8px",padding:"10px",margin:"0 auto"}},P={style:{"flex-direction":"column",gap:"8px",padding:"10px",margin:"0 auto"}},W={class:"dropdowns"},Z={style:{"flex-direction":"column"}},re={__name:"dsView",setup(g){const B=["primary","white","outline","baseline","text"],V=["large","default","small"],o={placeHolder:"這裡填預設文字",errorMsg:"Invalid Input",inputValue:d(""),inputError:d(!1)},s={textAlign:"textLeft",placeHolder:"這裡填預設文字",errorMsg:"Invalid Input",inputValue:d(""),inputError:d(!1)},n={size:"small",textAlign:"textLeft",placeHolder:"這裡填預設文字",errorMsg:"Invalid Input",inputValue:d(""),inputError:d(!1)};L(o.inputValue,(b,e)=>{o.inputValue.value.includes("123")?o.inputError.value=!0:o.inputError.value=!1}),L(s.inputValue,(b,e)=>{s.inputValue.value.includes("123")?s.inputError.value=!0:s.inputError.value=!1}),L(n.inputValue,(b,e)=>{n.inputValue.value.includes("123")?n.inputError.value=!0:n.inputError.value=!1});const v=d([]),y={placeHolder:"請選擇一個選項",options:[{id:0,name:"選項1"},{id:1,name:"選項2"},{id:2,name:"選項3"},{id:3,name:"選項4"}]};return(b,e)=>(p(),m(w,null,[t($,{theme:"red",bgc:"purple-1"}),e[36]||(e[36]=l("h4",{style:{margin:"20px 0"}},"首頁還沒切元件庫先當首頁",-1)),l("section",X,[e[8]||(e[8]=l("h4",null,"Buttons (完成)",-1)),l("div",Y,[(p(),m(w,null,H(B,r=>(p(),m(w,null,[l("div",G,[(p(),m(w,null,H(V,x=>l("div",J,[l("h6",null,f(r)+" "+f(x),1),t(u,{class:k(`${x}Box`),btnStyle:`${r} ${x}`},{default:i(()=>e[6]||(e[6]=[a("查看")])),_:2},1032,["class","btnStyle"])])),64))]),e[7]||(e[7]=l("br",null,null,-1))],64))),64))])]),t(u,{btnStyle:"text large"},{default:i(()=>e[9]||(e[9]=[a("Test")])),_:1}),l("section",null,[e[21]||(e[21]=l("h4",null,"問卷問題",-1)),l("div",K,[e[15]||(e[15]=l("h6",null,"Input (預設字置中)",-1)),t(E,{placeHolder:o.placeHolder,errorMsg:o.errorMsg,hasError:o.inputError.value,modelValue:o.inputValue.value,"onUpdate:modelValue":e[0]||(e[0]=r=>o.inputValue.value=r)},null,8,["placeHolder","errorMsg","hasError","modelValue"]),l("p",null,"用 v-model 監聽: "+f(o.inputValue),1),e[16]||(e[16]=l("h6",null,'Input (字靠左): textAlign = "textLeft"',-1)),t(E,{textAlign:s.textAlign,placeHolder:s.placeHolder,errorMsg:s.errorMsg,hasError:s.inputError.value,modelValue:s.inputValue.value,"onUpdate:modelValue":e[1]||(e[1]=r=>s.inputValue.value=r)},null,8,["textAlign","placeHolder","errorMsg","hasError","modelValue"]),l("p",null,"用 v-model 監聽: "+f(s.inputValue),1),e[17]||(e[17]=l("h6",null,'Input (小) size = "small"',-1)),t(E,{size:n.size,textAlign:n.textAlign,placeHolder:n.placeHolder,errorMsg:n.errorMsg,hasError:n.inputError.value,modelValue:n.inputValue.value,"onUpdate:modelValue":e[2]||(e[2]=r=>n.inputValue.value=r)},null,8,["size","textAlign","placeHolder","errorMsg","hasError","modelValue"]),l("p",null,"用 v-model 監聽: "+f(n.inputValue),1),e[18]||(e[18]=l("h6",null,"Option",-1)),t(u,{btnType:"form",btnStyle:"option",modelValue:v.value,"onUpdate:modelValue":e[3]||(e[3]=r=>v.value=r)},{default:i(()=>e[10]||(e[10]=[a("選項1")])),_:1},8,["modelValue"]),t(u,{btnType:"form",btnStyle:"option",modelValue:v.value,"onUpdate:modelValue":e[4]||(e[4]=r=>v.value=r)},{default:i(()=>e[11]||(e[11]=[a("選項2")])),_:1},8,["modelValue"]),t(u,{btnType:"form",btnStyle:"option",modelValue:v.value,"onUpdate:modelValue":e[5]||(e[5]=r=>v.value=r)},{default:i(()=>e[12]||(e[12]=[a("選項3")])),_:1},8,["modelValue"]),l("p",null,"用 v-model 監聽: "+f(v.value.join(" , ")),1),e[19]||(e[19]=l("h6",null,"nextQ",-1)),t(u,{btnType:"form",btnStyle:"nextQ"},{default:i(()=>e[13]||(e[13]=[a("上一題")])),_:1}),e[20]||(e[20]=l("h6",null,"lastQ",-1)),t(u,{btnType:"form",btnStyle:"lastQ"},{default:i(()=>e[14]||(e[14]=[a("下一題")])),_:1})])]),l("section",null,[e[30]||(e[30]=l("h4",null,"活動參加",-1)),l("div",P,[e[26]||(e[26]=l("h6",null,"預設",-1)),t(u,{btnType:"event",btnStyle:"attend"},{default:i(()=>e[22]||(e[22]=[a("參加")])),_:1}),e[27]||(e[27]=l("h6",null,"可編輯",-1)),t(u,{btnType:"event",btnStyle:"edit"},{default:i(()=>e[23]||(e[23]=[a("編輯")])),_:1}),e[28]||(e[28]=l("h6",null,"已參加",-1)),t(u,{btnType:"event",btnStyle:"registered"},{default:i(()=>e[24]||(e[24]=[a("已參加")])),_:1}),e[29]||(e[29]=l("h6",null,"額滿",-1)),t(u,{btnType:"event",btnStyle:"disable"},{default:i(()=>e[25]||(e[25]=[a("已額滿")])),_:1})])]),l("section",W,[e[34]||(e[34]=l("h4",null,"Dropdowns (還沒加動畫)",-1)),l("div",Z,[e[31]||(e[31]=l("h6",null,"DropdownQa",-1)),t(h,{question:"這裡是問題",answer:"這裡是回答"}),e[32]||(e[32]=l("h6",null,"DropdownMenu",-1)),t(S,{placeHolder:y.placeHolder,options:y.options},null,8,["placeHolder","options"]),e[33]||(e[33]=l("h6",null,'DropdownMenu (size="large")',-1)),t(S,{size:"large",placeHolder:y.placeHolder,options:y.options},null,8,["placeHolder","options"])])]),l("section",null,[e[35]||(e[35]=l("h4",null,"燈箱",-1)),t(O,{"is-light-box":!1,onToggle:b.toggleLightBox,pY:"0",pX:"0"},null,8,["onToggle"])]),t(T,{class:"bg-yellow-2"})],64))}};export{re as default};
