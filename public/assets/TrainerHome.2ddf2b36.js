import{e as x,K as f,o as h,D as p,a as n,c as o,f as e,u as r,b as u,F as g,r as b,h as y,t as l,z as v}from"./vendor.bde65cd9.js";import{_ as k}from"./Kalender_comp.d26a7fd3.js";import{P as $}from"./index.9201f21c.js";import{r as w}from"./PlusIcon.58a878f4.js";const T={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},D=e("div",{class:"min-w-0 flex-1"},[e("h1",{class:"text-2xl font-bold leading-6 text-gray-900 sm:truncate"},"Home")],-1),M={class:"mt-4 flex sm:mt-0 sm:ml-4"},C=y(" Team "),F={key:0,class:"mt-6 px-4 sm:px-6 lg:px-8"},j=e("h2",{class:"text-sm font-medium text-gray-900"},"Meine Mannschaften",-1),z={role:"list",class:"mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 cursor-pointer"},B=["onClick"],N={class:v("flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md  bg-lime-400")},S={class:"flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white"},V={class:"flex-1 truncate px-4 py-2 text-sm"},A={class:"font-medium text-gray-900 hover:text-gray-600"},K={class:"text-gray-500"},P={key:1,class:"mx-3 my-3"},Y=e("span",{class:"mt-2 block text-sm font-medium text-gray-900"},"Du hast noch kein Team erstellt",-1),E=[Y],H={class:"px-2 mt-5"},I={setup(L){const a=$(),i=x();let d=f([]);return h(async()=>{const{data:c}=await p.get(`/getAllTrainings/${a.getAktivenUser.data.t_id}`);d.value=c.map(s=>{let t=new Date(s.trainingdatum),m=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${s.trainingbeginn}`,_=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${s.trainingende}`;return{title:s.titel,start:m,end:_,t_id:s.training_id}})}),(c,s)=>(n(),o(g,null,[e("div",T,[D,e("div",M,[e("button",{onClick:s[0]||(s[0]=t=>r(i).push("/addTeam")),type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"},[C,u(r(w),{class:"ml-2 -mr-1 h-5 w-5","aria-hidden":"true"})])])]),r(a).teams.length>0?(n(),o("div",F,[j,e("ul",z,[(n(!0),o(g,null,b(r(a).getTeams,t=>(n(),o("li",{onClick:m=>r(i).push(`/detailMannschaft/${t.m_id}`),key:t.id,class:"relative col-span-1 flex rounded-md shadow-sm"},[e("div",N,l(t.farbe),1),e("div",S,[e("div",V,[e("a",A,l(t.titel),1),e("p",K,l(t.spieleranzahl)+" Spieler",1)])])],8,B))),128))])])):(n(),o("div",P,[e("div",{onClick:s[1]||(s[1]=t=>r(i).push("/addTeam")),class:"relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},E)])),e("div",H,[u(k,{termine:r(d)},null,8,["termine"])])],64))}};export{I as default};
