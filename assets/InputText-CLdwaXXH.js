import{f as l,c as r,d as u,n as t,t as i,j as d}from"./index-AMVyeuOY.js";const c=["placeholder","value"],p={__name:"InputText",props:{size:{type:String,default:""},textAlign:{type:String,default:"textCenter"},placeHolder:{type:String,required:!0},errorMsg:{type:String,default:"Invalid Input"},hasError:{type:Boolean,default:!1},modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:n}){const o=n,s=a=>{o("update:modelValue",a.target.value)};return(a,m)=>(l(),r("div",{class:t(["inputBox",{"-error":e.hasError}])},[u("input",{type:"text",class:t([e.textAlign,e.size]),placeholder:e.placeHolder,value:e.modelValue,onInput:s},null,42,c),e.hasError?(l(),r("p",{key:0,class:t(["errorMsg",e.textAlign])},i(e.errorMsg),3)):d("",!0)],2))}};export{p as _};
