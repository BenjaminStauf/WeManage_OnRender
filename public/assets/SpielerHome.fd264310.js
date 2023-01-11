import{e as f,K as _,o as x,D as h,a as n,c as o,f as t,u as r,F as u,r as p,b,t as l,z as y}from"./vendor.bde65cd9.js";import{_ as v}from"./Kalender_comp.d26a7fd3.js";import{P as k}from"./index.9201f21c.js";const $={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},w=t("div",{class:"min-w-0 flex-1"},[t("h1",{class:"text-2xl font-bold leading-6 text-gray-900 sm:truncate"},"Home")],-1),T={class:"mt-4 flex sm:mt-0 sm:ml-4"},D={key:0,class:"mt-6 px-4 sm:px-6 lg:px-8"},M=t("h2",{class:"text-sm font-bold text-gray-900"},"Meine Mannschaften:",-1),C={key:0,role:"list",class:"mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4"},F=["onClick"],S={class:"flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white"},j={class:"flex-1 truncate px-4 py-2 text-sm"},z={class:"font-medium text-gray-900 hover:text-gray-600"},B={class:"text-gray-500"},A={key:1},K=t("h1",null,"Du bist in keinen Teams",-1),N=[K],P={key:1,class:"mx-3 my-3"},V=t("span",{class:"mt-2 block text-sm font-medium text-gray-900"},"Du bist noch keinem Team beigetreten",-1),Y=[V],E={class:"px-2 pt-5"},q={setup(H){const i=k(),a=f();let d=_([]);return x(async()=>{const{data:c}=await h.get(`/getAllTrainingsSpieler/${i.getAktivenUser.data.s_id}`);d.value=c.map(s=>{let e=new Date(s.trainingdatum),m=`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()} ${s.trainingbeginn}`,g=`${e.getFullYear()}-${e.getMonth()+1}-${e.getDate()} ${s.trainingende}`;return{title:s.titel,start:m,end:g,t_id:s.training_id}})}),(c,s)=>(n(),o(u,null,[t("div",$,[w,t("div",T,[t("button",{onClick:s[0]||(s[0]=e=>r(a).push("/addTeam")),type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"}," Team beitreten ")])]),r(i).getTeams.length>0?(n(),o("div",D,[M,r(i).teams.length>0?(n(),o("ul",C,[(n(!0),o(u,null,p(r(i).getTeams,e=>(n(),o("li",{key:e.id,onClick:m=>r(a).push(`/detailMannschaft/${e.m_id}`),class:"relative col-span-1 flex rounded-md shadow-sm cursor-pointer"},[t("div",{class:y(["text-lime-500 flex-shrink-0 flex items-center justify-center w-16  text-sm font-medium rounded-l-md",`bg-[${e.farbe}]`])},l(e.farbe),3),t("div",S,[t("div",j,[t("a",z,l(e.titel),1),t("p",B,l(e.spieleranzahl)+" Spieler",1)])])],8,F))),128))])):(n(),o("div",A,N))])):(n(),o("div",P,[t("div",{onClick:s[1]||(s[1]=e=>r(a).push("/addTeam")),class:"relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},Y)])),t("div",E,[b(v,{events:r(d)},null,8,["events"])])],64))}};export{q as default};