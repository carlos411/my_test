import{f as a,c as s,d as n,n as r,t as i,i as d,r as p,F as c}from"./index-Dt86I-RQ.js";const g=["placeholder","value"],h={__name:"InputText",props:{size:{type:String,default:""},textAlign:{type:String,default:"textCenter"},placeHolder:{type:String,required:!0},errorMsg:{type:String,default:"Invalid Input"},hasError:{type:Boolean,default:!1},modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:l}){const o=l,u=t=>{o("update:modelValue",t.target.value)};return(t,w)=>(a(),s("div",{class:r(["inputBox",{"-error":e.hasError}])},[n("input",{type:"text",class:r([e.textAlign,e.size]),placeholder:e.placeHolder,value:e.modelValue,onInput:u},null,42,g),e.hasError?(a(),s("p",{key:0,class:r(["errorMsg",e.textAlign])},i(e.errorMsg),3)):d("",!0)],2))}},m="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207L10%2013L15%207'%20stroke='%23D14535'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",v={class:"question-block"},x={class:"question"},f={class:"answer"},k={__name:"DropdownQa",props:{question:{type:String,required:!0},answer:{type:String,required:!0}},setup(e){const l=p(!1);function o(){l.value=!l.value}return(u,t)=>(a(),s("div",{class:r(["dropdown-qa",{"-expand":l.value}]),onClick:o},[n("div",v,[n("div",x,[t[0]||(t[0]=n("span",null,"Q",-1)),n("p",null,i(e.question),1)]),t[1]||(t[1]=n("img",{class:"expandBtn",src:m,alt:"chev-red"},null,-1))]),l.value?(a(),s(c,{key:0},[t[3]||(t[3]=n("hr",null,null,-1)),n("div",f,[t[2]||(t[2]=n("span",null,"A",-1)),n("p",null,i(e.answer),1)])],64)):d("",!0)],2))}};export{h as _,k as a};
