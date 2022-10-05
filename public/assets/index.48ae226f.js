import{d as I,o as C,a as p,c as h,b as m,u as i,R as V,e as $,f as e,g as D,h as b,t as E,F as L,r as U,i as g,j as N,k as q,l as j,m as W,n as B,w as u,p as H,q as M,G as v,s as F,v as J,x as z,y as k,z as w,T as G,J as K,A as Q,B as Z,C as X,D as Y,E as ee,H as te,I as se}from"./vendor.7c81a5c5.js";const re=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}};re();function R(l){const t=x();(t.aktiverUser!=null||l)&&localStorage.setItem(t.$id,JSON.stringify(t.$state))}const x=I("weManage",{state:()=>({aktiverUser:null,teams:[]}),getters:{getAktivenUser(){return this.aktiverUser},getTeams(){return this.teams},isTrainer(){try{return this.aktiverUser.type==="Trainer"}catch{return!1}},getNamen(){return`${this.aktiverUser.data.vorname} ${this.aktiverUser.data.nachname}`}},actions:{setAktivenUser(l){this.aktiverUser=l,R()},deleteAktivenUser(){this.teams=[],this.aktiverUser=null,R(!0)},setMannschaften(l){this.teams=l}}}),oe={setup(l){const t=x();return C(()=>{localStorage.getItem(t.$id)&&(t.$state=JSON.parse(localStorage.getItem(t.$id)))}),(n,r)=>(p(),h("div",null,[m(i(V))]))}},ne="modulepreload",O={},ie="/",a=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${ie}${r}`,r in O)return;O[r]=!0;const s=r.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${c}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":ne,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((f,d)=>{o.addEventListener("load",f),o.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},ae={class:"relative overflow-hidden"},le=D('<div class="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full" aria-hidden="true"><div class="relative mx-auto h-full max-w-7xl"><svg class="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784"><defs><pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"></rect></svg><svg class="absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784"><defs><pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect></svg></div></div>',1),ce={class:"relative pt-6 pb-16 sm:pb-24"},de={class:"mx-auto mt-16 max-w-7xl px-4 sm:mt-24"},me={class:"text-center"},ue=e("h1",{class:"text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"},[e("span",{class:"block xl:inline"},"Managen Sie Ihr Team"),b(" "+E(" ")+" "),e("span",{class:"block text-lime-500 xl:inline"},"PERFEKT")],-1),pe=e("p",{class:"mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"}," Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua. ",-1),fe={class:"mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8"},he={class:"rounded-md shadow"},_e={setup(l){const t=$();return(n,r)=>(p(),h("div",ae,[le,e("div",ce,[e("main",de,[e("div",me,[ue,pe,e("div",fe,[e("div",he,[e("a",{onClick:r[0]||(r[0]=s=>i(t).push("/register")),class:"flex w-full items-center justify-center rounded-md border border-transparent bg-lime-500 px-8 py-3 text-base font-medium text-white hover:bg-lime-600 md:py-4 md:px-10 md:text-lg"},"Get started")])])])])])]))}},ge={class:"overflow-hidden"},xe={class:"relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8"},ve=e("svg",{class:"absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4",width:"404",height:"784",fill:"none",viewBox:"0 0 404 784","aria-hidden":"true"},[e("defs",null,[e("pattern",{id:"8b1b5f72-e944-4457-af67-0c6d15a99f38",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"},[e("rect",{x:"0",y:"0",width:"4",height:"4",class:"text-gray-200",fill:"currentColor"})])]),e("rect",{width:"404",height:"784",fill:"url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"})],-1),be={class:"relative lg:grid lg:grid-cols-3 lg:gap-x-8"},ye=e("div",{class:"lg:col-span-1"},[e("h2",{class:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"}," A better way to send money. ")],-1),ke={class:"mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0"},we={class:"flex h-12 w-12 items-center justify-center rounded-md bg-lime-500 text-white"},Ee={class:"mt-5 text-lg font-medium leading-6 text-gray-900"},$e={class:"mt-2 text-base text-gray-500"},Te={setup(l){const t=[{name:"Competitive rates",description:"Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.",icon:q},{name:"No hidden fees",description:"Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.",icon:j},{name:"Instant transfers",description:"Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.",icon:W},{name:"Reminder emails",description:"Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.",icon:B}];return(n,r)=>(p(),h("div",ge,[e("div",xe,[ve,e("div",be,[ye,e("dl",ke,[(p(),h(L,null,U(t,s=>e("div",{key:s.name},[e("dt",null,[e("div",we,[(p(),g(N(s.icon),{class:"h-6 w-6","aria-hidden":"true"}))]),e("p",Ee,E(s.name),1)]),e("dd",$e,E(s.description),1)])),64))])])])]))}};var A="/assets/placeholder_icon.68f4f09d.png";const Re={class:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},Oe={class:"relative flex h-16 justify-between"},Ae={class:"absolute inset-y-0 left-0 flex items-center sm:hidden"},Le=e("span",{class:"sr-only"},"Open main menu",-1),Pe={class:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"},Se=e("div",{class:"flex flex-shrink-0 items-center"},[e("img",{class:"block h-8 w-auto lg:hidden",src:A,alt:"Workflow"}),e("img",{class:"hidden h-8 w-auto lg:block",src:A,alt:"Workflow"})],-1),Ie={class:"hidden sm:ml-6 sm:flex sm:space-x-8"},Ce={class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},Ve=e("button",{type:"button",class:"rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},null,-1),De=e("span",{class:"sr-only"},"Open user menu",-1),Ue=["src"],Ne={class:"space-y-1 pt-2 pb-4"},qe=b("Home"),je=b("Team"),We=b("Conatct"),Be={setup(l){const t=x(),n=$();function r(){t.isTrainer?n.push("/homeTrainer"):n.push("/homeSpieler")}function s(){t.deleteAktivenUser(),n.push("/")}return(c,o)=>(p(),g(i(Q),{as:"nav",class:"bg-white shadow"},{default:u(({open:f})=>[e("div",Re,[e("div",Oe,[e("div",Ae,[m(i(v),{class:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500"},{default:u(()=>[Le,f?(p(),g(i(M),{key:1,class:"block h-6 w-6","aria-hidden":"true"})):(p(),g(i(H),{key:0,class:"block h-6 w-6","aria-hidden":"true"}))]),_:2},1024)]),e("div",Pe,[Se,e("div",Ie,[e("a",{onClick:o[0]||(o[0]=d=>i(n).push("/")),class:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700"},"Home"),e("a",{onClick:o[1]||(o[1]=d=>i(n).push("/aboutus")),class:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700"},"Team"),e("a",{onClick:o[2]||(o[2]=d=>i(n).push("/contact")),class:"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700"},"Contact")])]),e("div",Ce,[Ve,i(t).getAktivenUser?(p(),g(i(F),{key:0,as:"div",class:"relative ml-3"},{default:u(()=>[e("div",null,[m(i(J),{class:"flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},{default:u(()=>[De,e("img",{class:"h-8 w-8 rounded-full",src:i(t).getAktivenUser.data.avatarpath,alt:""},null,8,Ue)]),_:1})]),m(G,{class:"z-40","enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:u(()=>[m(i(z),{class:"absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:u(()=>[m(i(k),null,{default:u(({active:d})=>[e("a",{onClick:r,class:w([d?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},"Zur Software",2)]),_:1}),m(i(k),null,{default:u(({active:d})=>[e("a",{href:"#",class:w([d?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},"Settings",2)]),_:1}),m(i(k),null,{default:u(({active:d})=>[e("a",{onClick:s,class:w([d?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},"Sign out",2)]),_:1})]),_:1})]),_:1})]),_:1})):(p(),h("button",{key:1,onClick:o[3]||(o[3]=d=>i(n).push("/login")),type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"}," Anmelden "))])])]),m(i(K),{class:"sm:hidden"},{default:u(()=>[e("div",Ne,[m(i(v),{as:"a",onClick:o[4]||(o[4]=d=>i(n).push("/")),class:"block border-l-4 border-lime-500 bg-lime-50 py-2 pl-3 pr-4 text-base font-medium text-lime-600"},{default:u(()=>[qe]),_:1}),m(i(v),{as:"a",onClick:o[5]||(o[5]=d=>i(n).push("/aboutus")),class:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"},{default:u(()=>[je]),_:1}),m(i(v),{as:"a",onClick:o[6]||(o[6]=d=>i(n).push("/contact")),class:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"},{default:u(()=>[We]),_:1})])]),_:1})]),_:1}))}},He=e("br",null,null,-1),Me={setup(l){return(t,n)=>(p(),h(L,null,[m(Be),m(_e),He,m(Te)],64))}},Fe={class:"min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"},Je={class:"mx-auto max-w-max"},ze={class:"sm:flex"},Ge=e("p",{class:"text-4xl font-bold tracking-tight text-lime-500 sm:text-5xl"},"404",-1),Ke={class:"sm:ml-6"},Qe=e("div",{class:"sm:border-l sm:border-gray-200 sm:pl-6"},[e("h1",{class:"text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"}," Page not found "),e("p",{class:"mt-1 text-base text-gray-500"}," Please check the URL in the address bar and try again. ")],-1),Ze={class:"mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6"},Xe={setup(l){const t=$();return(n,r)=>(p(),h("div",Fe,[e("div",Je,[e("main",ze,[Ge,e("div",Ke,[Qe,e("div",Ze,[e("a",{onClick:r[0]||(r[0]=s=>i(t).push("/")),class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},"Go back home"),e("a",{onClick:r[1]||(r[1]=s=>i(t).push("/contact")),class:"inline-flex items-center rounded-md border border-transparent bg-lime-100 px-4 py-2 text-sm font-medium text-lime-600 hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},"Contact support")])])])])]))}},Ye=Z({history:X(),routes:[{path:"/",name:"LandingPage",component:Me},{path:"/login",name:"Login",component:()=>a(()=>import("./LoginView.ad5ecad7.js"),["assets/LoginView.ad5ecad7.js","assets/vendor.7c81a5c5.js","assets/index.esm.2fec7fc8.js"])},{path:"/register",name:"Register",component:()=>a(()=>import("./RegisterView.509bb8ad.js"),["assets/RegisterView.509bb8ad.js","assets/vendor.7c81a5c5.js","assets/index.esm.2fec7fc8.js","assets/XMarkIcon.67675c45.js"])},{path:"/aboutus",name:"AboutUs",component:()=>a(()=>import("./AboutUsView.31ba6508.js"),["assets/AboutUsView.31ba6508.js","assets/vendor.7c81a5c5.js"])},{path:"/contact",name:"Conatct",component:()=>a(()=>import("./ContactView.21f10d6e.js"),["assets/ContactView.21f10d6e.js","assets/vendor.7c81a5c5.js","assets/index.esm.2fec7fc8.js","assets/XMarkIcon.67675c45.js"])},{path:"/homeTrainer",name:"Home",component:()=>a(()=>import("./HomeViewTrainer.e908d1e2.js"),["assets/HomeViewTrainer.e908d1e2.js","assets/vendor.7c81a5c5.js","assets/ChevronUpDownIcon.0d87c1c8.js"]),children:[{path:"",component:()=>a(()=>import("./TrainerHome.0276b85c.js"),["assets/TrainerHome.0276b85c.js","assets/vendor.7c81a5c5.js","assets/Kalender_comp.01c8b6d9.js","assets/Kalender_comp.90e9cccb.css","assets/PlusIcon.ecb512fc.js"])},{path:"teams",component:()=>a(()=>import("./TrainerKarten.c0b6573c.js"),["assets/TrainerKarten.c0b6573c.js","assets/vendor.7c81a5c5.js","assets/PlusIcon.ecb512fc.js"])},{path:"settings",component:()=>a(()=>import("./TrainerSettings.626eb202.js"),["assets/TrainerSettings.626eb202.js","assets/vendor.7c81a5c5.js"])}],beforeEnter:(l,t,n)=>{const r=x();r.getAktivenUser?r.isTrainer&&n():n("/")}},{path:"/homeSpieler",name:"HomeSpieler",component:()=>a(()=>import("./HomeViewSpieler.cb086d4f.js"),["assets/HomeViewSpieler.cb086d4f.js","assets/vendor.7c81a5c5.js","assets/ChevronUpDownIcon.0d87c1c8.js"]),children:[{path:"",component:()=>a(()=>import("./SpielerHome.21536c5b.js"),["assets/SpielerHome.21536c5b.js","assets/vendor.7c81a5c5.js","assets/Kalender_comp.01c8b6d9.js","assets/Kalender_comp.90e9cccb.css"])},{path:"teams",component:()=>a(()=>import("./SpielerTeams.e6300d4e.js"),["assets/SpielerTeams.e6300d4e.js","assets/vendor.7c81a5c5.js","assets/PlusIcon.ecb512fc.js"])},{path:"settings",component:()=>a(()=>import("./SpielerSettings.4eaf6cb0.js"),["assets/SpielerSettings.4eaf6cb0.js","assets/vendor.7c81a5c5.js","assets/index.esm.2fec7fc8.js"])}],beforeEnter:(l,t,n)=>{const r=x();r.getAktivenUser?r.isSpieler||n():n("/")}},{path:"/addTeam",name:"addTeam",component:()=>a(()=>import("./TeamErstellenView.f6de5b01.js"),["assets/TeamErstellenView.f6de5b01.js","assets/vendor.7c81a5c5.js","assets/index.esm.2fec7fc8.js"])},{path:"/changeTeam",name:"Change Team",component:()=>a(()=>import("./MannschaftChange.d8ef4123.js"),["assets/MannschaftChange.d8ef4123.js","assets/PlusIcon.ecb512fc.js","assets/vendor.7c81a5c5.js"])},{path:"/detailMannschaft/:id",name:"Change Team",component:()=>a(()=>import("./MannschaftDetailView.7a17e157.js"),["assets/MannschaftDetailView.7a17e157.js","assets/vendor.7c81a5c5.js"]),params:!0,children:[{path:"",component:()=>a(()=>import("./Uebersicht.73d023eb.js"),["assets/Uebersicht.73d023eb.js","assets/vendor.7c81a5c5.js","assets/MapPinIcon.75ba8418.js"])},{path:"ankuendigungen",component:()=>a(()=>import("./ankuendigungen.bb58dca5.js"),["assets/ankuendigungen.bb58dca5.js","assets/vendor.7c81a5c5.js","assets/TrashIcon.9169f269.js","assets/PlusIcon.ecb512fc.js"])},{path:"trainings",component:()=>a(()=>import("./trainings.fb9fc40b.js"),["assets/trainings.fb9fc40b.js","assets/vendor.7c81a5c5.js","assets/Kalender_comp.01c8b6d9.js","assets/Kalender_comp.90e9cccb.css","assets/MapPinIcon.75ba8418.js","assets/PlusIcon.ecb512fc.js"])},{path:"mitglieder",component:()=>a(()=>import("./Mitglieder.d9adf2ad.js"),["assets/Mitglieder.d9adf2ad.js","assets/vendor.7c81a5c5.js","assets/TrashIcon.9169f269.js","assets/XMarkIcon.67675c45.js"])},{path:"statistik",component:()=>a(()=>import("./UnderConstruction.e577aa8e.js"),["assets/UnderConstruction.e577aa8e.js","assets/vendor.7c81a5c5.js"])},{path:"settings",component:()=>a(()=>import("./UnderConstruction.e577aa8e.js"),["assets/UnderConstruction.e577aa8e.js","assets/vendor.7c81a5c5.js"])}]},{path:"/training/:id",name:"Training",component:()=>a(()=>import("./TrainingDetail.fd793879.js"),["assets/TrainingDetail.fd793879.js","assets/vendor.7c81a5c5.js","assets/XMarkIcon.67675c45.js","assets/TrashIcon.9169f269.js"]),params:!0},{path:"/trainingerstellen/:id",name:"Training erstellen",component:()=>a(()=>import("./TrainingErstellen.d13916e5.js"),["assets/TrainingErstellen.d13916e5.js","assets/vendor.7c81a5c5.js","assets/XMarkIcon.67675c45.js"]),params:!0},{path:"/:pathmatch(.*)*",name:"not-found",component:Xe}]});function et(l={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:s,onRegisteredSW:c,onRegisterError:o}=l;let f,d;const P=async(T=!0)=>{await d};async function S(){if("serviceWorker"in navigator){const{Workbox:T,messageSW:st}=await a(()=>import("./workbox-window.prod.es5.d2780aeb.js"),[]);f=new T("/service-worker.js",{scope:"/",type:"classic"}),f.addEventListener("activated",_=>{_.isUpdate?window.location.reload():r==null||r()}),f.register({immediate:t}).then(_=>{c?c("/service-worker.js",_):s==null||s(_)}).catch(_=>{o==null||o(_)})}}return d=S(),P}(location.origin==="http://localhost:8080"||location.origin==="http://localhost:5050")&&(Y.defaults.baseURL="http://localhost:2410");const y=ee(oe),tt=te();y.use(tt);et({onNeedRefresh(){},onOfflineReady(){}});y.use(Ye);y.component("Datepicker",se);y.mount("#app");export{x as P,A as _,Be as a};
