import{P as M,_ as T}from"./index.bb07a464.js";import{e as R,K as b,ac as B,at as S,au as z,av as A,aw as V,an as j,o as D,D as N,a as r,c as d,b as n,w as i,u as a,a7 as U,f as e,F as h,r as p,R as F,a8 as L,a9 as g,aa as O,q as P,ax as k,z as u,i as w,j as $,h as C,t as m,ab as Y}from"./vendor.28678742.js";const q={class:"min-h-full"},E=e("div",{class:"fixed inset-0 bg-gray-600 bg-opacity-75"},null,-1),H={class:"fixed inset-0 z-40 flex"},K={class:"absolute top-0 right-0 -mr-12 pt-2"},G=e("span",{class:"sr-only"},"Close sidebar",-1),I=e("div",{class:"flex flex-shrink-0 items-center px-4"},[e("img",{class:"h-8 w-auto",src:T,alt:"Your Company"})],-1),J={class:"mt-6 mb-3 px-3 flex-row"},Q={class:"space-y-1"},W=e("p",{class:"text-2xl font-bold mx-2"},"Back",-1),X={class:"mt-5 h-0 flex-1 overflow-y-auto"},Z={class:"px-2"},ee={class:"space-y-1"},te=["onClick","aria-current"],ae={class:"mt-8"},se=e("h3",{class:"px-3 text-sm font-medium text-gray-500",id:"mobile-teams-headline"}," Teams ",-1),ne={class:"mt-1 space-y-1",role:"group","aria-labelledby":"mobile-teams-headline"},re=["onClick"],oe={class:"truncate"},ie=e("div",{class:"w-14 flex-shrink-0","aria-hidden":"true"},null,-1),le={class:"hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4"},ce=e("div",{class:"flex flex-shrink-0 items-center px-6"},[e("img",{class:"h-8 w-auto",src:T,alt:"Your Company"})],-1),de={class:"mt-6 flex h-0 flex-1 flex-col overflow-y-auto"},ue={class:"mt-6 mb-3 px-3 flex-row"},fe={class:"space-y-1"},he=e("p",{class:"text-2xl font-bold mx-2"},"Back",-1),pe=e("hr",null,null,-1),ge={class:"mt-6 px-3"},me={class:"space-y-1"},xe=["onClick","aria-current"],_e={class:"flex flex-col lg:pl-64"},ye={class:"sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden"},ve=e("span",{class:"sr-only"},"Open sidebar",-1),be=e("div",{class:"flex flex-1 justify-between px-4 sm:px-6 lg:px-8"},null,-1),ke={class:"flex-1"},Te={setup(we){const l=M(),s=R(),c=b(!1),x=[{name:"\xDCbersicht",icon:B,current:!1,path:`/detailMannschaft/${s.currentRoute.value.params.id}`,params:!0,onlyTrainer:!0},{name:"Ank\xFCndigungen",icon:S,current:!1,path:`/detailMannschaft/${s.currentRoute.value.params.id}/ankuendigungen`,params:!0,onlyTrainer:!0},{name:"Trainings",icon:z,current:!1,path:`/detailMannschaft/${s.currentRoute.value.params.id}/trainings`,onlyTrainer:!0},{name:"Mitglieder",icon:A,current:!1,path:`/detailMannschaft/${s.currentRoute.value.params.id}/mitglieder`,onlyTrainer:!0},{name:"Statistik",icon:V,current:!1,path:`/detailMannschaft/${s.currentRoute.value.params.id}/statistik`,onlyTrainer:!0},{name:"Settings",icon:j,current:!1,path:`/detailMannschaft/${s.currentRoute.value.params.id}/settings`,onlyTrainer:!0}];D(async()=>{if(l.getAktivenUser.type=="Trainer"){const{data:f}=await N.get(`/mannschaftenTrainer/${l.getAktivenUser.data.t_id}`);l.setMannschaften(f)}});function _(f){s.push(f),c.value=!1}function y(){l.getAktivenUser.type=="Trainer"?s.push("/homeTrainer"):s.push("/homeSpieler")}return b(s.currentRoute.value.params.id),(f,o)=>(r(),d("div",q,[n(a(U),{as:"template",show:c.value},{default:i(()=>[n(a(L),{as:"div",class:"relative z-40 lg:hidden",onClose:o[1]||(o[1]=t=>c.value=!1)},{default:i(()=>[n(a(g),{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>[E]),_:1}),e("div",H,[n(a(g),{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:i(()=>[n(a(O),{class:"relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4"},{default:i(()=>[n(a(g),{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>[e("div",K,[e("button",{type:"button",class:"ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:o[0]||(o[0]=t=>c.value=!1)},[G,n(a(P),{class:"h-6 w-6 text-white","aria-hidden":"true"})])])]),_:1}),I,e("div",J,[e("div",Q,[e("div",{onClick:y,class:"text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"},[n(a(k),{class:"h-10 w-10"}),W])])]),e("div",X,[e("nav",Z,[e("div",ee,[(r(),d(h,null,p(x,t=>e("a",{onClick:v=>_(t.path),key:t.name,class:u([t.current?"bg-gray-100 text-gray-900":"text-gray-600 hover:text-gray-900 hover:bg-gray-50","group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md"]),"aria-current":t.current?"page":void 0},[(r(),w($(t.icon),{class:u([t.current?"text-gray-500":"text-gray-400 group-hover:text-gray-500","mr-3 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"},null,8,["class"])),C(" "+m(t.name),1)],10,te)),64))]),e("div",ae,[se,e("div",ne,[(r(!0),d(h,null,p(a(l).getTeams,t=>(r(),d("a",{onClick:v=>a(s).push(`/detailMannschaft/${t.m_id}`),key:t.t_id,class:"group flex items-center rounded-md px-3 py-2 text-base font-medium leading-5 text-gray-600 hover:bg-gray-50 hover:text-gray-900"},[e("span",{class:u("w-2.5 h-2.5 mr-4 rounded-full bg-[#50d71e] "),"aria-hidden":"true"},null,2),e("span",oe,m(t.titel),1)],8,re))),128))])])])])]),_:1})]),_:1}),ie])]),_:1})]),_:1},8,["show"]),e("div",le,[ce,e("div",de,[e("div",ue,[e("div",fe,[e("div",{onClick:y,class:"text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"},[n(a(k),{class:"h-10 w-10"}),he])])]),pe,e("nav",ge,[e("div",me,[(r(),d(h,null,p(x,t=>e("a",{key:t.name,onClick:v=>_(t.path),class:u([t.current?"bg-gray-200 text-gray-900":"text-gray-700 hover:text-gray-900 hover:bg-gray-50","group flex items-center px-2 py-2 text-sm font-medium rounded-md"]),"aria-current":t.current?"page":void 0},[(r(),w($(t.icon),{class:u([t.current?"text-gray-500":"text-gray-400 group-hover:text-gray-500","mr-3 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"},null,8,["class"])),C(" "+m(t.name),1)],10,xe)),64))])])])]),e("div",_e,[e("div",ye,[e("button",{type:"button",class:"border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500 lg:hidden",onClick:o[2]||(o[2]=t=>c.value=!0)},[ve,n(a(Y),{class:"h-6 w-6","aria-hidden":"true"})]),be]),e("main",ke,[n(a(F))])])]))}};export{Te as default};
