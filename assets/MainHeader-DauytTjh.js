import{m as _,h as p,f as m,c as h,d as l,r as y,n as c,o as F,k as b,a as C,w as f,F as w,j as M,e as v,t as V}from"./index-B2h6hAfs.js";const k={__name:"Btn",props:{btnType:{type:String,default:"default"},btnStyle:{type:String,required:!0},modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(u,{emit:r}){_();const e=u,s=r,a=p(null),i=p("");e.btnType=="default"?i.value="defaultBtn":e.btnType=="form"?i.value="formBtn":e.btnType=="event"&&(i.value="eventBtn");const g=()=>{e.btnType=="form"&e.btnStyle=="option"&&a.value.classList.toggle("-active")},o=()=>{if(e.btnType=="form"&e.btnStyle=="option"){const n=a.value.querySelector("span").innerText,t=[...e.modelValue];if(t.includes(n)){const d=t.indexOf(n);t.splice(d,1)}else t.push(n);s("update:modelValue",t)}};return(n,t)=>(m(),h("div",{class:c(i.value),ref_key:"btnClass",ref:a,onClick:t[0]||(t[0]=d=>(g(),o()))},[l("div",{class:c(["btn",e.btnStyle])},[l("span",null,[y(n.$slots,"default")])],2)],2))}},x={class:"logo"},S=["src"],B={__name:"MainHeader",props:{theme:{type:String,default:""},bgc:{type:String,required:!0}},setup(u){_();const r=u,e={red:{logoUrl:new URL("/my_test/assets/header-red-DeYBfw_i.svg",import.meta.url).href},blue:{logoUrl:new URL("data:image/svg+xml,%3csvg%20width='64'%20height='48'%20viewBox='0%200%2064%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1058_15112)'%3e%3cg%20clip-path='url(%23clip1_1058_15112)'%3e%3cpath%20d='M8.7%2028.9584C9.25%2024.4956%206.25%2020.0328%2011%2017.256C13.68%2015.689%2012.6%2022.2146%2019.4%2026.0824C22.692%2027.9548%2027.45%2027.8675%2032%2025.6857V47.9998H15.135C8.29%2047.9998%202.47%2043.4328%200.616999%2037.2196C2.466%2036.938%207.888%2035.5525%208.7%2028.9584Z'%20fill='%23FFFEFA'/%3e%3cpath%20d='M0%2015.0099C0%206.75471%206.811%200%2015.135%200H32V25.686C27.45%2027.8678%2022.692%2027.955%2019.4%2026.0826C12.6%2022.2149%2013.68%2015.6893%2011%2017.2562C6.25%2020.0331%209.25%2024.4959%208.7%2028.9587C7.887%2035.5527%202.466%2036.9382%200.616999%2037.2198C0.216997%2035.877%200%2034.4579%200%2032.9911V15.0099Z'%20fill='%233B6683'/%3e%3cpath%20d='M55.2998%2028.9584C54.7498%2024.4956%2057.7498%2020.0328%2052.9998%2017.256C50.3198%2015.689%2051.3998%2022.2146%2044.5998%2026.0824C41.3078%2027.9548%2036.5498%2027.8675%2031.9998%2025.6857V47.9998H48.8648C55.7098%2047.9998%2061.5298%2043.4328%2063.3828%2037.2196C61.5338%2036.938%2056.1118%2035.5525%2055.2998%2028.9584Z'%20fill='%23FFFEFA'/%3e%3cpath%20d='M64%2015.0099C64%206.75471%2057.189%200%2048.865%200H32V25.686C36.55%2027.8678%2041.308%2027.955%2044.6%2026.0826C51.4%2022.2149%2050.32%2015.6893%2053%2017.2562C57.75%2020.0331%2054.75%2024.4959%2055.3%2028.9587C56.113%2035.5527%2061.534%2036.9382%2063.383%2037.2198C63.784%2035.877%2064%2034.4579%2064%2032.9901V15.0089V15.0099Z'%20fill='%233B6683'/%3e%3cpath%20d='M21.2%2011.1572C19.6536%2011.1572%2018.4%209.91399%2018.4%208.38038C18.4%206.84676%2019.6536%205.60352%2021.2%205.60352C22.7464%205.60352%2024%206.84676%2024%208.38038C24%209.91399%2022.7464%2011.1572%2021.2%2011.1572Z'%20fill='%23FFFEFA'/%3e%3cpath%20d='M42.5984%2011.1572C41.052%2011.1572%2039.7984%209.91399%2039.7984%208.38038C39.7984%206.84676%2041.052%205.60352%2042.5984%205.60352C44.1448%205.60352%2045.3984%206.84676%2045.3984%208.38038C45.3984%209.91399%2044.1448%2011.1572%2042.5984%2011.1572Z'%20fill='%23FFFEFA'/%3e%3cpath%20d='M38.3555%2015.6295C38.3555%2013.6173%2035.2605%2013.4199%2031.9985%2013.4199C28.7365%2013.4199%2025.6415%2013.6173%2025.6415%2015.6295C25.6415%2017.6417%2028.7365%2020.7062%2031.9985%2020.7062C35.2605%2020.7062%2038.3555%2017.6417%2038.3555%2015.6295Z'%20fill='%23FFFEFA'/%3e%3cpath%20d='M34.7148%2042.1687C34.7148%2041.3099%2033.3928%2041.2246%2031.9998%2041.2246C30.6068%2041.2246%2029.2848%2041.3089%2029.2848%2042.1687C29.2848%2043.0286%2030.6068%2044.3367%2031.9998%2044.3367C33.3928%2044.3367%2034.7148%2043.0276%2034.7148%2042.1687Z'%20fill='%237E5539'/%3e%3cpath%20d='M21.1984%2040.8599C18.8788%2040.8599%2016.9984%2038.995%2016.9984%2036.6946C16.9984%2034.3942%2018.8788%2032.5293%2021.1984%2032.5293C23.518%2032.5293%2025.3984%2034.3942%2025.3984%2036.6946C25.3984%2038.995%2023.518%2040.8599%2021.1984%2040.8599Z'%20fill='white'/%3e%3cpath%20d='M21.1992%2039.1735C19.8185%2039.1735%2018.6992%2038.0635%2018.6992%2036.6942C18.6992%2035.3249%2019.8185%2034.2148%2021.1992%2034.2148C22.5799%2034.2148%2023.6992%2035.3249%2023.6992%2036.6942C23.6992%2038.0635%2022.5799%2039.1735%2021.1992%2039.1735Z'%20fill='%23693413'/%3e%3cpath%20d='M42.6008%2040.8599C40.2812%2040.8599%2038.4008%2038.995%2038.4008%2036.6946C38.4008%2034.3942%2040.2812%2032.5293%2042.6008%2032.5293C44.9204%2032.5293%2046.8008%2034.3942%2046.8008%2036.6946C46.8008%2038.995%2044.9204%2040.8599%2042.6008%2040.8599Z'%20fill='white'/%3e%3cpath%20d='M42.6016%2039.1735C41.2208%2039.1735%2040.1016%2038.0635%2040.1016%2036.6942C40.1016%2035.3249%2041.2208%2034.2148%2042.6016%2034.2148C43.9823%2034.2148%2045.1016%2035.3249%2045.1016%2036.6942C45.1016%2038.0635%2043.9823%2039.1735%2042.6016%2039.1735Z'%20fill='%23693413'/%3e%3cpath%20d='M31.6461%2043.3379H32.2461V47.999H31.6461V43.3379Z'%20fill='%237E5539'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1058_15112'%3e%3crect%20width='64'%20height='48'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_1058_15112'%3e%3crect%20width='64'%20height='48'%20fill='white'%20transform='matrix(-1%200%200%201%2064%200)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",import.meta.url).href}},s=p(!1),a=p(!1);window.innerWidth<=768&&(a.value=!0);function i(){s.value=!s.value}return F(()=>{window.addEventListener("resize",()=>{window.innerWidth>768?a.value=!1:a.value=!0})}),(g,o)=>{const n=b("RouterLink");return m(),h("header",{class:c([`bg-${r.bgc}`])},[l("nav",null,[l("div",{class:c(["navHamburger",{"-navFocus":s.value}]),onClick:i},o[0]||(o[0]=[l("div",{class:"line"},null,-1),l("div",{class:"line"},null,-1)]),2),l("div",x,[C(n,{to:"/"},{default:f(()=>[l("img",{src:e[r.theme].logoUrl,alt:"Logo"},null,8,S)]),_:1})]),l("ul",{class:c(["headerList",[{"-navFocus":s.value},{["bg-"+r.bgc]:a.value}]])},[(m(),h(w,null,M([{name:"認識新毛友",link:"/petInfoCard"},{name:"訂閱寵物盒",link:"/sploot-box"},{name:"尋找小幫手",link:"/sploot-buddy"},{name:"毛孩日曆",link:"/sploot-event"},{name:"友善設施",link:"/sploot-pet-friendly"}],(t,d)=>l("li",{class:"headerItem",key:d},[C(n,{to:t.link},{default:f(()=>[v(V(t.name),1)]),_:2},1032,["to"])])),64))],2),C(k,{class:"loginBox",btnStyle:"primary small"},{default:f(()=>o[1]||(o[1]=[v("登入")])),_:1})])],2)}}};export{B as _,k as a};
