import{P as c}from"./index.d8b81aca.js";import{a as l,c as o,e,u as t,b as m,ag as x,F as a,r as _,n as f,f as u,H as g,t as d}from"./vendor.82e95389.js";const h={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},p=e("div",{class:"min-w-0 flex-1"},[e("h1",{class:"text-2xl font-bold leading-6 text-gray-900 sm:truncate"},"Teams")],-1),b={class:"mt-4 flex sm:mt-0 sm:ml-4"},y=f(" Team "),v={class:"mt-6 px-4 sm:px-6 lg:px-8"},w={role:"list",class:"grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"},k={class:"flex flex-1 flex-col pb-4"},T={class:"mt-6 text-sm font-medium text-gray-900"},C={class:"mt-1 flex flex-grow flex-col justify-between"},$=e("dt",{class:"sr-only"},"Title",-1),B={class:"text-sm text-gray-500"},N=e("dd",{class:"text-sm text-gray-500"},"12 Spieler",-1),S={class:"-mt-px flex divide-x divide-gray-200"},V={class:"flex w-0 flex-1"},D=["onClick"],F=e("span",{class:"ml-3"},"Details",-1),P=[F],R={setup(z){const n=c(),i=u();return(E,r)=>(l(),o(a,null,[e("div",h,[p,e("div",b,[e("button",{onClick:r[0]||(r[0]=s=>t(i).push("/addTeam")),type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none 2"},[y,m(t(x),{class:"ml-2 -mr-1 h-5 w-5","aria-hidden":"true"})])])]),e("div",v,[e("ul",w,[(l(!0),o(a,null,_(t(n).getTeams,s=>(l(),o("li",{key:s.id,class:"col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"},[e("div",{class:g(`flex flex-1 flex-col p-16 rounded-t-lg bg-[#${s.farbe}]`)},null,2),e("div",k,[e("h3",T,d(s.titel),1),e("dl",C,[$,e("dd",B,d(s.farbe),1),N])]),e("div",null,[e("div",S,[e("div",V,[e("a",{onClick:H=>t(i).push(`/detailMannschaft/${s.m_id}`),class:"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500 cursor-pointer"},P,8,D)])])])]))),128))])])],64))}};export{R as default};
