import{m,r as o,f as y,c as b,d as u,q as v,n as r}from"./index-AMVyeuOY.js";const T={__name:"Btn",props:{btnType:{type:String,default:"default"},btnStyle:{type:String,required:!0},modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(i,{emit:p}){m();const e=i,c=p,s=o(null),l=o("");e.btnType=="default"?l.value="defaultBtn":e.btnType=="form"?l.value="formBtn":e.btnType=="event"&&(l.value="eventBtn");const d=()=>{e.btnType=="form"&e.btnStyle=="option"&&s.value.classList.toggle("-active")},f=()=>{if(e.btnType=="form"&e.btnStyle=="option"){const n=s.value.querySelector("span").innerText,t=[...e.modelValue];if(t.includes(n)){const a=t.indexOf(n);t.splice(a,1)}else t.push(n);c("update:modelValue",t)}};return(n,t)=>(y(),b("div",{class:r(l.value),ref_key:"btnClass",ref:s,onClick:t[0]||(t[0]=a=>(d(),f()))},[u("div",{class:r(["btn",e.btnStyle])},[u("span",null,[v(n.$slots,"default")])],2)],2))}};export{T as _};
