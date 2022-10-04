import{e as x,Q as f,o as h,D as p,a as o,c as r,f as e,u as n,b as c,F as u,r as b,h as y,t as g,z as v}from"./vendor.6904d49b.js";import{_ as k}from"./Kalender_comp.92f8403d.js";import{P as $}from"./index.68ddbc0c.js";import{r as w}from"./PlusIcon.3957faee.js";const T={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},D=e("div",{class:"min-w-0 flex-1"},[e("h1",{class:"text-2xl font-bold leading-6 text-gray-900 sm:truncate"},"Home")],-1),M={class:"mt-4 flex sm:mt-0 sm:ml-4"},C=y(" Team "),F={key:0,class:"mt-6 px-4 sm:px-6 lg:px-8"},B=e("h2",{class:"text-sm font-medium text-gray-900"},"Meine Mannschaften",-1),N={role:"list",class:"mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4"},S=["onClick"],V={class:v("flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md  bg-lime-400")},z={class:"flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white"},A={class:"flex-1 truncate px-4 py-2 text-sm"},P={class:"font-medium text-gray-900 hover:text-gray-600"},Y=e("p",{class:"text-gray-500"},"12 Spieler",-1),E={key:1,class:"mx-3 my-3"},H=e("span",{class:"mt-2 block text-sm font-medium text-gray-900"},"Du hast noch kein Team erstellt",-1),K=[H],L={class:"px-2 mt-5"},G={setup(Q){const a=$(),i=x();let l=f([]);return h(async()=>{const{data:d}=await p.get(`/getAllTrainings/${a.getAktivenUser.data.t_id}`);l.value=d.map(s=>{let t=new Date(s.trainingdatum),m=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${s.trainingbeginn}`,_=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${s.trainingende}`;return{title:s.titel,start:m,end:_,t_id:s.training_id}})}),(d,s)=>(o(),r(u,null,[e("div",T,[D,e("div",M,[e("button",{onClick:s[0]||(s[0]=t=>n(i).push("/addTeam")),type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"},[C,c(n(w),{class:"ml-2 -mr-1 h-5 w-5","aria-hidden":"true"})])])]),n(a).teams.length>0?(o(),r("div",F,[B,e("ul",N,[(o(!0),r(u,null,b(n(a).getTeams,t=>(o(),r("li",{onClick:m=>n(i).push(`/detailMannschaft/${t.m_id}`),key:t.id,class:"relative col-span-1 flex rounded-md shadow-sm"},[e("div",V,g(t.farbe),1),e("div",z,[e("div",A,[e("a",P,g(t.titel),1),Y])])],8,S))),128))])])):(o(),r("div",E,[e("div",{onClick:s[1]||(s[1]=t=>n(i).push("/addTeam")),class:"relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},K)])),e("div",L,[c(k,{termine:n(l)},null,8,["termine"])])],64))}};export{G as default};
