import{P as c}from"./index.4eb06b8d.js";import{e as m,a as l,c as o,f as e,u as t,b as x,F as d,r as _,h as f,t as n,z as u}from"./vendor.c359feed.js";import{r as h}from"./PlusIcon.f06be05c.js";const g={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},p=e("div",{class:"min-w-0 flex-1"},[e("h1",{class:"text-2xl font-bold leading-6 text-gray-900 sm:truncate"},"Teams")],-1),b={class:"mt-4 flex sm:mt-0 sm:ml-4"},y=f(" Team "),v={class:"mt-6 px-4 sm:px-6 lg:px-8"},w={role:"list",class:"grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"},k=e("div",{class:u("flex flex-1 flex-col p-16 rounded-t-lg bg-lime-500")},null,-1),T={class:"flex flex-1 flex-col pb-4"},C={class:"mt-6 text-sm font-medium text-gray-900"},B={class:"mt-1 flex flex-grow flex-col justify-between"},N=e("dt",{class:"sr-only"},"Title",-1),S={class:"text-sm text-gray-500"},V=e("dd",{class:"text-sm text-gray-500"},"12 Spieler",-1),$={class:"-mt-px flex divide-x divide-gray-200"},z={class:"flex w-0 flex-1"},D=["onClick"],F=e("span",{class:"ml-3"},"Details",-1),P=[F],A={setup(E){const a=c(),i=m();return(L,r)=>(l(),o(d,null,[e("div",g,[p,e("div",b,[e("button",{onClick:r[0]||(r[0]=s=>t(i).push("/addTeam")),type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none 2"},[y,x(t(h),{class:"ml-2 -mr-1 h-5 w-5","aria-hidden":"true"})])])]),e("div",v,[e("ul",w,[(l(!0),o(d,null,_(t(a).getTeams,s=>(l(),o("li",{key:s.id,class:"col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"},[k,e("div",T,[e("h3",C,n(s.titel),1),e("dl",B,[N,e("dd",S,n(s.farbe),1),V])]),e("div",null,[e("div",$,[e("div",z,[e("a",{onClick:M=>t(i).push(`/detailMannschaft/${s.m_id}`),class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500 cursor-pointer"},P,8,D)])])])]))),128))])])],64))}};export{A as default};
