import{r as i,o,c as l,b as e,t as r,F as u,i as d,n as p}from"./index-BYB-fB-h.js";const c="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207L10%2013L15%207'%20stroke='%23D14535'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",g={class:"question-block"},m={class:"question"},v={class:"answer"},x={__name:"DropdownQa",props:{question:{type:String,required:!0},answer:{type:String,required:!0}},setup(t){const n=i(!1);function a(){n.value=!n.value}return(w,s)=>(o(),l("div",{class:p(["dropdown-qa",{"-expand":n.value}]),onClick:a},[e("div",g,[e("div",m,[s[0]||(s[0]=e("span",null,"Q",-1)),e("p",null,r(t.question),1)]),s[1]||(s[1]=e("img",{class:"expandBtn",src:c,alt:"chev-red"},null,-1))]),n.value?(o(),l(u,{key:0},[s[3]||(s[3]=e("hr",null,null,-1)),e("div",v,[s[2]||(s[2]=e("span",null,"A",-1)),e("p",null,r(t.answer),1)])],64)):d("",!0)],2))}};export{x as _};
