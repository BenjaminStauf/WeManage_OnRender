import{P as T,_ as w}from"./index.05f51811.js";import{U as _,ae as R,ak as M,al as S,am as z,an as A,ao as B,o as U,D as V,a as r,c as d,b as n,w as i,u as a,a8 as j,f as e,ap as D,F as p,r as h,a9 as N,R as F,e as L,aa as O,ab as g,ac as P,q as Y,z as u,i as v,j as b,h as k,t as m}from"./vendor.81fa8b35.js";const q={class:"min-h-full"},E=e("div",{class:"fixed inset-0 bg-gray-600 bg-opacity-75"},null,-1),H={class:"fixed inset-0 z-40 flex"},G={class:"absolute top-0 right-0 -mr-12 pt-2"},I=e("span",{class:"sr-only"},"Close sidebar",-1),J=e("div",{class:"flex flex-shrink-0 items-center px-4"},[e("img",{class:"h-8 w-auto",src:w,alt:"Your Company"})],-1),K={class:"mt-5 h-0 flex-1 overflow-y-auto"},Q={class:"px-2"},W={class:"space-y-1"},X=["onClick","aria-current"],Z={class:"mt-8"},ee=e("h3",{class:"px-3 text-sm font-medium text-gray-500",id:"mobile-teams-headline"}," Teams ",-1),te={class:"mt-1 space-y-1",role:"group","aria-labelledby":"mobile-teams-headline"},ae={class:"truncate"},se=e("div",{class:"w-14 flex-shrink-0","aria-hidden":"true"},null,-1),ne={class:"hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4"},re=e("div",{class:"flex flex-shrink-0 items-center px-6"},[e("img",{class:"h-8 w-auto",src:w,alt:"Your Company"})],-1),oe={class:"mt-6 flex h-0 flex-1 flex-col overflow-y-auto"},ie={class:"mt-6 mb-3 px-3 flex-row"},le={class:"space-y-1"},ce=e("p",{class:"text-2xl font-bold mx-2"},"Back",-1),de=e("hr",null,null,-1),ue={class:"mt-6 px-3"},fe={class:"space-y-1"},pe=["onClick","aria-current"],he={class:"flex flex-col lg:pl-64"},ge={class:"sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden"},me=e("span",{class:"sr-only"},"Open sidebar",-1),xe=e("div",{class:"flex flex-1 justify-between px-4 sm:px-6 lg:px-8"},null,-1),ye={class:"flex-1"},ke={setup(_e){const l=T(),s=L(),c=_(!1),x=[{name:"\xDCbersicht",icon:R,current:!1,path:`/detailMannschaft/${s.currentRoute.value.params.id}`,params:!0,onlyTrainer:!0},{name:"Ank\xFCndigungen",icon:M,current:!1,path:`/detailMannschaft/${s.currentRoute.value.params.id}/ankuendigungen`,params:!0,onlyTrainer:!0},{name:"Trainings",icon:S,current:!1,path:`/detailMannschaft/${s.currentRoute.value.params.id}/trainings`,onlyTrainer:!0},{name:"Mitglieder",icon:z,current:!1,path:`/detailMannschaft/${s.currentRoute.value.params.id}/mitglieder`,onlyTrainer:!0},{name:"Statistik",icon:A,current:!1,path:`/detailMannschaft/${s.currentRoute.value.params.id}/statistik`,onlyTrainer:!0},{name:"Settings",icon:B,current:!1,path:`/detailMannschaft/${s.currentRoute.value.params.id}/settings`,onlyTrainer:!0}];U(async()=>{if(l.getAktivenUser.type=="Trainer"){const{data:f}=await V.get(`/mannschaftenTrainer/${l.getAktivenUser.data.t_id}`);l.setMannschaften(f)}});function y(f){s.push(f),c.value=!1}function $(){l.getAktivenUser.type=="Trainer"?s.push("/homeTrainer"):s.push("/homeSpieler")}return _(s.currentRoute.value.params.id),(f,o)=>(r(),d("div",q,[n(a(j),{as:"template",show:c.value},{default:i(()=>[n(a(O),{as:"div",class:"relative z-40 lg:hidden",onClose:o[1]||(o[1]=t=>c.value=!1)},{default:i(()=>[n(a(g),{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>[E]),_:1}),e("div",H,[n(a(g),{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:i(()=>[n(a(P),{class:"relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4"},{default:i(()=>[n(a(g),{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:i(()=>[e("div",G,[e("button",{type:"button",class:"ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:o[0]||(o[0]=t=>c.value=!1)},[I,n(a(Y),{class:"h-6 w-6 text-white","aria-hidden":"true"})])])]),_:1}),J,e("div",K,[e("nav",Q,[e("div",W,[(r(),d(p,null,h(x,t=>e("a",{onClick:C=>y(t.path),key:t.name,class:u([t.current?"bg-gray-100 text-gray-900":"text-gray-600 hover:text-gray-900 hover:bg-gray-50","group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md"]),"aria-current":t.current?"page":void 0},[(r(),v(b(t.icon),{class:u([t.current?"text-gray-500":"text-gray-400 group-hover:text-gray-500","mr-3 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"},null,8,["class"])),k(" "+m(t.name),1)],10,X)),64))]),e("div",Z,[ee,e("div",te,[(r(!0),d(p,null,h(a(l).getTeams,t=>(r(),d("a",{key:t.t_id,class:"group flex items-center rounded-md px-3 py-2 text-base font-medium leading-5 text-gray-600 hover:bg-gray-50 hover:text-gray-900"},[e("span",{class:u("w-2.5 h-2.5 mr-4 rounded-full bg-[#50d71e] "),"aria-hidden":"true"},null,2),e("span",ae,m(t.titel),1)]))),128))])])])])]),_:1})]),_:1}),se])]),_:1})]),_:1},8,["show"]),e("div",ne,[re,e("div",oe,[e("div",ie,[e("div",le,[e("div",{onClick:$,class:"text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"},[n(a(D),{class:"h-10 w-10"}),ce])])]),de,e("nav",ue,[e("div",fe,[(r(),d(p,null,h(x,t=>e("a",{key:t.name,onClick:C=>y(t.path),class:u([t.current?"bg-gray-200 text-gray-900":"text-gray-700 hover:text-gray-900 hover:bg-gray-50","group flex items-center px-2 py-2 text-sm font-medium rounded-md"]),"aria-current":t.current?"page":void 0},[(r(),v(b(t.icon),{class:u([t.current?"text-gray-500":"text-gray-400 group-hover:text-gray-500","mr-3 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"},null,8,["class"])),k(" "+m(t.name),1)],10,pe)),64))])])])]),e("div",he,[e("div",ge,[e("button",{type:"button",class:"border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500 lg:hidden",onClick:o[2]||(o[2]=t=>c.value=!0)},[me,n(a(N),{class:"h-6 w-6","aria-hidden":"true"})]),xe]),e("main",ye,[n(a(F))])])]))}};export{ke as default};
