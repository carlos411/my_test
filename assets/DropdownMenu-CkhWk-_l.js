import{m as f,r as l,f as t,c as s,d as e,t as p,u as x,F as m,h as k,j as _,n as B}from"./index-BjgmhQG9.js";const L={class:"dropdownBox"},y={class:"dropdownBtn"},C=["src"],M={class:"dropdownList"},D=["onClick"],R={__name:"DropdownMenu",props:{size:{type:String,default:"default"},placeHolder:{type:String,required:!0},options:{type:Array,required:!0}},setup(r){const v=f(),i=r,n=l(null),d=l(i.placeHolder),o=l(!1),g={red:{expandBtn:new URL("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207L10%2013L15%207'%20stroke='%23D14535'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",import.meta.url).href},blue:{expandBtn:new URL("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207L10%2013L15%207'%20stroke='%233B6683'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",import.meta.url).href}};function w(){o.value=!o.value,n.value.classList.toggle("-expand")}function h(c){d.value=c.name,n.value.classList.contains("-active")||n.value.classList.add("-active")}return(c,u)=>(t(),s("div",L,[e("div",{class:B(["dropdown-menu",i.size]),ref_key:"dropdownMenu",ref:n,onClick:w},[e("div",y,[e("span",null,p(d.value),1),e("img",{class:"expandBtn",src:g[x(v).meta.theme].expandBtn,alt:"expandBtn"},null,8,C)]),o.value?(t(),s(m,{key:0},[u[0]||(u[0]=e("hr",null,null,-1)),e("ul",M,[(t(!0),s(m,null,k(r.options,(a,j)=>(t(),s("li",{key:a,onClick:z=>h(a)},[e("span",null,p(a.name),1)],8,D))),128))])],64)):_("",!0)],2)]))}};export{R as _};
