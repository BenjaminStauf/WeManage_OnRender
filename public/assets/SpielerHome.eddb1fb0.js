import{e as _,K as f,o as x,D as h,a as n,c as o,f as e,u as i,F as m,r as b,b as p,t as u,z as y}from"./vendor.c359feed.js";import{_ as v}from"./Kalender_comp.0eeb0c1e.js";import{P as k}from"./index.4eb06b8d.js";const $={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},w=e("div",{class:"min-w-0 flex-1"},[e("h1",{class:"text-2xl font-bold leading-6 text-gray-900 sm:truncate"},"Home")],-1),T={class:"mt-4 flex sm:mt-0 sm:ml-4"},D={key:0,class:"mt-6 px-4 sm:px-6 lg:px-8"},M=e("h2",{class:"text-sm font-bold text-gray-900"},"Meine Mannschaften:",-1),C={key:0,role:"list",class:"mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4"},F=["onClick"],S={class:y("flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md  bg-lime-500")},B={class:"flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white"},z={class:"flex-1 truncate px-4 py-2 text-sm"},A={class:"font-medium text-gray-900 hover:text-gray-600"},K=e("p",{class:"text-gray-500"},"12 Spieler",-1),N={key:1},P=e("h1",null,"Du bist in keinen Teams",-1),V=[P],Y={key:1,class:"mx-3 my-3"},E=e("span",{class:"mt-2 block text-sm font-medium text-gray-900"},"Du bist noch keinem Team beigetreten",-1),H=[E],L={class:"px-2 pt-5"},G={setup(R){const r=k(),a=_();let l=f([]);return x(async()=>{const{data:d}=await h.get(`/getAllTrainingsSpieler/${r.getAktivenUser.data.s_id}`);l.value=d.map(s=>{let t=new Date(s.trainingdatum),c=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${s.trainingbeginn}`,g=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${s.trainingende}`;return{title:s.titel,start:c,end:g,t_id:s.training_id}})}),(d,s)=>(n(),o(m,null,[e("div",$,[w,e("div",T,[e("button",{onClick:s[0]||(s[0]=t=>i(a).push("/addTeam")),type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"}," Team beitreten ")])]),i(r).getTeams.length>0?(n(),o("div",D,[M,i(r).teams.length>0?(n(),o("ul",C,[(n(!0),o(m,null,b(i(r).getTeams,t=>(n(),o("li",{key:t.id,onClick:c=>i(a).push(`/detailMannschaft/${t.m_id}`),class:"relative col-span-1 flex rounded-md shadow-sm cursor-pointer"},[e("div",S,u(t.farbe),1),e("div",B,[e("div",z,[e("a",A,u(t.titel),1),K])])],8,F))),128))])):(n(),o("div",N,V))])):(n(),o("div",Y,[e("div",{onClick:s[1]||(s[1]=t=>i(a).push("/addTeam")),class:"relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},H)])),e("div",L,[p(v,{events:i(l)},null,8,["events"])])],64))}};export{G as default};
