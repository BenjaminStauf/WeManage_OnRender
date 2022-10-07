import{e as j,K as k,o as M,D as B,a as o,c as l,b as a,w as n,u as s,a7 as D,f as e,s as w,F as h,r as m,R as L,a8 as R,a9 as y,aa as V,q as N,z as i,i as C,j as $,h as S,t as u,v as T,T as A,x as z,y as p,ab as O,ac as F,ad as K,an as P,ao as Y}from"./vendor.c359feed.js";import{P as q,_ as U}from"./index.1f582018.js";import{r as E}from"./ChevronUpDownIcon.8c2f746d.js";const G={class:"min-h-full"},H=e("div",{class:"fixed inset-0 bg-gray-600 bg-opacity-75"},null,-1),I={class:"fixed inset-0 z-40 flex"},J={class:"absolute top-0 right-0 -mr-12 pt-2"},Q=e("span",{class:"sr-only"},"Close sidebar",-1),W=e("div",{class:"flex flex-shrink-0 items-center px-4"},[e("img",{class:"h-8 w-auto",src:U,alt:"Your Company"})],-1),X={class:"mt-5 h-0 flex-1 overflow-y-auto"},Z={class:"px-2"},ee={class:"space-y-1"},te=["onClick","aria-current"],se={class:"mt-8"},ae=e("h3",{class:"px-3 text-sm font-medium text-gray-500",id:"mobile-teams-headline"}," Teams ",-1),ne={key:0,class:"mt-1 space-y-1",role:"group","aria-labelledby":"mobile-teams-headline"},oe=["onClick"],re={class:"truncate"},le={key:1},ie=e("h1",{class:"text-center font-bold"},"Du bist in keinen Teams",-1),ce=[ie],de=e("div",{class:"w-14 flex-shrink-0","aria-hidden":"true"},null,-1),ue={class:"hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4"},fe=e("div",{class:"flex flex-shrink-0 items-center px-6"},[e("img",{class:"h-8 w-auto",src:U,alt:"Your Company"})],-1),ge={class:"mt-6 flex h-0 flex-1 flex-col overflow-y-auto"},he={class:"flex w-full items-center justify-between"},me={class:"flex min-w-0 items-center justify-between space-x-3"},pe=["src"],xe={class:"flex min-w-0 flex-1 flex-col"},ye={class:"truncate text-sm font-medium text-gray-900"},_e={class:"py-1"},ve={class:"py-1"},be={class:"mt-6 px-3"},ke={class:"space-y-1"},we=["onClick","aria-current"],Ce={key:0,class:"mt-8"},$e=e("h3",{class:"px-3 text-sm font-medium text-gray-500",id:"desktop-teams-headline"}," Teams ",-1),Se={class:"mt-1 space-y-1",role:"group","aria-labelledby":"desktop-teams-headline"},Te=["onClick"],Ae={class:"truncate"},ze={key:1,class:""},Ue=e("h1",{class:"text-center my-5 text-gray-500"},"Keine Teams vorhanden",-1),je=[Ue],Me={class:"flex flex-col lg:pl-64"},Be={class:"sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden"},De=e("span",{class:"sr-only"},"Open sidebar",-1),Le={class:"flex flex-1 justify-between px-4 sm:px-6 lg:px-8"},Re=e("div",{class:"flex flex-1"},[e("div",{class:"flex w-full md:ml-0"},[e("div",{class:"relative w-full text-gray-400 focus-within:text-gray-600"})])],-1),Ve={class:"flex items-center"},Ne=e("span",{class:"sr-only"},"Open user menu",-1),Oe=["src"],Fe={class:"py-1"},Ke={class:"py-1"},Pe={class:"flex-1"},He={setup(Ye){const r=q(),g=j(),f=k(!1),_=[{name:"Home",icon:F,current:!1,path:"/homeSpieler"},{name:"My teams",icon:K,current:!1,path:"/homeSpieler/teams"},{name:"Settings",icon:P,current:!1,path:"/homeSpieler/settings"},{name:"Gesundheit",icon:Y,current:!1,path:"/homeSpieler/gesundheit"}];M(async()=>{try{const{data:c}=await B.get(`/mannschaftenSpieler/${r.getAktivenUser.data.s_id}`);console.log(c),r.setMannschaften(c)}catch(c){console.log(c)}});function v(c){g.push(c),f.value=!1}function b(){r.deleteAktivenUser(),location.reload()}return k(g.currentRoute.value.params.id),(c,d)=>(o(),l("div",G,[a(s(D),{as:"template",show:f.value},{default:n(()=>[a(s(R),{as:"div",class:"relative z-40 lg:hidden",onClose:d[1]||(d[1]=t=>f.value=!1)},{default:n(()=>[a(s(y),{as:"template",enter:"transition-opacity ease-linear duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[H]),_:1}),e("div",I,[a(s(y),{as:"template",enter:"transition ease-in-out duration-300 transform","enter-from":"-translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-300 transform","leave-from":"translate-x-0","leave-to":"-translate-x-full"},{default:n(()=>[a(s(V),{class:"relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4"},{default:n(()=>[a(s(y),{as:"template",enter:"ease-in-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in-out duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[e("div",J,[e("button",{type:"button",class:"ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:d[0]||(d[0]=t=>f.value=!1)},[Q,a(s(N),{class:"h-6 w-6 text-white","aria-hidden":"true"})])])]),_:1}),W,e("div",X,[e("nav",Z,[e("div",ee,[(o(),l(h,null,m(_,t=>e("a",{key:t.name,onClick:x=>v(t.path),class:i([t.current?"bg-gray-100 text-gray-900":"text-gray-600 hover:text-gray-900 hover:bg-gray-50","group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md"]),"aria-current":t.current?"page":void 0},[(o(),C($(t.icon),{class:i([t.current?"text-gray-500":"text-gray-400 group-hover:text-gray-500","mr-3 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"},null,8,["class"])),S(" "+u(t.name),1)],10,te)),64))]),e("div",se,[ae,s(r).teams.length>0?(o(),l("div",ne,[(o(!0),l(h,null,m(s(r).getTeams,t=>(o(),l("a",{key:t.t_id,onClick:x=>s(g).push(`/detailMannschaft/${t.m_id}`),class:"group flex items-center rounded-md px-3 py-2 text-base font-medium leading-5 text-gray-600 hover:bg-gray-50 hover:text-gray-900"},[e("span",{class:i("w-2.5 h-2.5 mr-4 rounded-full bg-[#50d71e] "),"aria-hidden":"true"},null,2),e("span",re,u(t.titel),1)],8,oe))),128))])):(o(),l("div",le,ce))])])])]),_:1})]),_:1}),de])]),_:1})]),_:1},8,["show"]),e("div",ue,[fe,e("div",ge,[a(s(w),{as:"div",class:"relative inline-block px-3 text-left"},{default:n(()=>[e("div",null,[a(s(T),{class:"group w-full rounded-md bg-gray-100 px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 focus:ring-offset-gray-100"},{default:n(()=>[e("span",he,[e("span",me,[e("img",{class:"h-10 w-10 flex-shrink-0 rounded-full bg-gray-300",src:s(r).getAktivenUser.data.avatarpath,alt:"Avatar"},null,8,pe),e("span",xe,[e("span",ye,u(s(r).getAktivenUser.data.vorname)+" "+u(s(r).getAktivenUser.data.nachname),1)])]),a(s(E),{class:"h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"})])]),_:1})]),a(A,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:n(()=>[a(s(z),{class:"absolute right-0 left-0 z-10 mx-3 mt-1 origin-top divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:n(()=>[e("div",_e,[a(s(p),null,{default:n(({active:t})=>[e("a",{href:"#",class:i([t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Settings",2)]),_:1})]),e("div",ve,[a(s(p),null,{default:n(({active:t})=>[e("a",{onClick:b,class:i([t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Logout",2)]),_:1})])]),_:1})]),_:1})]),_:1}),e("nav",be,[e("div",ke,[(o(),l(h,null,m(_,t=>e("a",{key:t.name,onClick:x=>v(t.path),class:i([t.current?"bg-gray-200 text-gray-900":"text-gray-700 hover:text-gray-900 hover:bg-gray-50","group flex items-center px-2 py-2 text-sm font-medium rounded-md"]),"aria-current":t.current?"page":void 0},[(o(),C($(t.icon),{class:i([t.current?"text-gray-500":"text-gray-400 group-hover:text-gray-500","mr-3 flex-shrink-0 h-6 w-6"]),"aria-hidden":"true"},null,8,["class"])),S(" "+u(t.name),1)],10,we)),64))]),s(r).teams.length>0?(o(),l("div",Ce,[$e,e("div",Se,[(o(!0),l(h,null,m(s(r).getTeams,t=>(o(),l("a",{key:t.id,onClick:x=>s(g).push(`/detailMannschaft/${t.m_id}`),class:"group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"},[e("span",{class:i("w-2.5 h-2.5 mr-4 rounded-full bg-lime-400"),"aria-hidden":"true"},null,2),e("span",Ae,u(t.titel),1)],8,Te))),128))])])):(o(),l("div",ze,je))])])]),e("div",Me,[e("div",Be,[e("button",{type:"button",class:"border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500 lg:hidden",onClick:d[2]||(d[2]=t=>f.value=!0)},[De,a(s(O),{class:"h-6 w-6","aria-hidden":"true"})]),e("div",Le,[Re,e("div",Ve,[a(s(w),{as:"div",class:"relative ml-3"},{default:n(()=>[e("div",null,[a(s(T),{class:"flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},{default:n(()=>[Ne,e("img",{class:"h-8 w-8 rounded-full",src:s(r).getAktivenUser.data.avatarpath,alt:""},null,8,Oe)]),_:1})]),a(A,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:n(()=>[a(s(z),{class:"absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:n(()=>[e("div",Fe,[a(s(p),null,{default:n(({active:t})=>[e("a",{class:i([t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Settings",2)]),_:1})]),e("div",Ke,[a(s(p),null,{default:n(({active:t})=>[e("a",{onClick:b,class:i([t?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm"])},"Logout",2)]),_:1})])]),_:1})]),_:1})]),_:1})])])]),e("main",Pe,[a(s(L))])])]))}};export{He as default};
