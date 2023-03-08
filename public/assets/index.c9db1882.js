import{d as I,o as S,a as p,c as _,b as m,u as a,R as V,e as $,f as e,g as U,h as f,t as E,F as R,r as C,i as x,j as z,k as N,l as j,m as H,n as B,w as u,p as W,q as M,G as b,s as F,v as K,x as J,y as k,z as w,T as Z,J as q,A as G,B as Q,C as X,D as Y,E as ee,H as te,I as se}from"./vendor.f6fbf43f.js";const re=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=i(s);fetch(s.href,c)}};re();function A(l){const t=v();(t.aktiverUser!=null||l)&&localStorage.setItem(t.$id,JSON.stringify(t.$state))}const v=I("weManage",{state:()=>({aktiverUser:null,teams:[]}),getters:{getAktivenUser(){return this.aktiverUser},getTeams(){return this.teams},isTrainer(){try{return this.aktiverUser.type==="Trainer"}catch{return!1}},getNamen(){return`${this.aktiverUser.data.vorname} ${this.aktiverUser.data.nachname}`}},actions:{setAktivenUser(l){this.aktiverUser=l,A()},deleteAktivenUser(){this.teams=[],this.aktiverUser=null,A(!0)},setMannschaften(l){this.teams=l}}}),ne={setup(l){const t=v();return S(()=>{localStorage.getItem(t.$id)&&(t.$state=JSON.parse(localStorage.getItem(t.$id)))}),(i,r)=>(p(),_("div",null,[m(a(V))]))}},oe="modulepreload",P={},ie="/",n=function(t,i){return!i||i.length===0?t():Promise.all(i.map(r=>{if(r=`${ie}${r}`,r in P)return;P[r]=!0;const s=r.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${c}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":oe,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((h,d)=>{o.addEventListener("load",h),o.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},ae={class:"relative overflow-hidden"},le=U('<div class="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full" aria-hidden="true"><div class="relative mx-auto h-full max-w-7xl"><svg class="absolute right-full translate-y-1/4 translate-x-1/4 transform lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784"><defs><pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"></rect></svg><svg class="absolute left-full -translate-y-3/4 -translate-x-1/4 transform md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784"><defs><pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor"></rect></pattern></defs><rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect></svg></div></div>',1),ce={class:"relative pt-6 pb-16 sm:pb-24"},de={class:"mx-auto mt-16 max-w-7xl px-4 sm:mt-24"},me={class:"text-center"},ue=e("h1",{class:"text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"},[e("span",{class:"block xl:inline"},"Managen Sie Ihr Team"),f(" "+E(" ")+" "),e("span",{class:"block text-lime-500 xl:inline"},"PERFEKT")],-1),pe=e("p",{class:"mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"}," Zu einem Team geh\xF6ren alle, von der Familie \xFCber die Trainer bis hin zu Freunden und Unterst\xFCtzern. Organisieren und kommunizieren Sie mit allen Mitgliedern Ihres Sportteams in einer kostenlosen und einfachen App. ",-1),he={class:"mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8"},_e={class:"rounded-md shadow hover:cursor-pointer"},ge={setup(l){const t=$();return(i,r)=>(p(),_("div",ae,[le,e("div",ce,[e("main",de,[e("div",me,[ue,pe,e("div",he,[e("div",_e,[e("a",{onClick:r[0]||(r[0]=s=>a(t).push("/register")),class:"flex w-full items-center justify-center rounded-md border border-transparent bg-lime-500 px-8 py-3 text-base font-medium text-white hover:bg-lime-600 md:py-4 md:px-10 md:text-lg"},"Los gehts!")])])])])])]))}},fe={class:"overflow-hidden"},xe={class:"relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8"},ve=e("svg",{class:"absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4",width:"404",height:"784",fill:"none",viewBox:"0 0 404 784","aria-hidden":"true"},[e("defs",null,[e("pattern",{id:"8b1b5f72-e944-4457-af67-0c6d15a99f38",x:"0",y:"0",width:"20",height:"20",patternUnits:"userSpaceOnUse"},[e("rect",{x:"0",y:"0",width:"4",height:"4",class:"text-gray-200",fill:"currentColor"})])]),e("rect",{width:"404",height:"784",fill:"url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"})],-1),be={class:"relative lg:grid lg:grid-cols-3 lg:gap-x-8"},ye=e("div",{class:"lg:col-span-1"},[e("h2",{class:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"},[f(" Dein Team! "),e("br"),f(" Deine M\xF6glichkeiten alles heraus zuholen! ")])],-1),ke={class:"mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0"},we={class:"flex h-12 w-12 items-center justify-center rounded-md bg-lime-500 text-white"},Ee={class:"mt-5 text-lg font-medium leading-6 text-gray-900"},$e={class:"mt-2 text-base text-gray-500"},Te={setup(l){const t=[{name:"Bedienung & Handhabung",description:"Das Zusammenspiel neuer Technologien in Verbindung mit maximaler Innovation spricht nach einfacher Bedienung. Um es wirklich jedem recht zu machen!",icon:N},{name:"Design & Aussehen",description:"Das Zusammenspiel moderner Design-Elemente, mit gen\xFCgend Hirnschmalz um alles so darzustellen wie man es braucht, l\xE4sst sich sehen!",icon:j},{name:"Preis & Kosten",description:"Keine versteckten Kosten, welche sich w\xE4hrend Laufzeit der Reihe nach aufdecken. Preise werden im Vorhinein durch Abonnements festgelegt.",icon:H},{name:"Ein Platz",description:"F\xFCr alle Mitglieder egal ob Spieler- oder Trainer-Position ein Platz. Alle Aufgaben auf einem Platz vereint! ",icon:B}];return(i,r)=>(p(),_("div",fe,[e("div",xe,[ve,e("div",be,[ye,e("dl",ke,[(p(),_(R,null,C(t,s=>e("div",{key:s.name},[e("dt",null,[e("div",we,[(p(),x(z(s.icon),{class:"h-6 w-6","aria-hidden":"true"}))]),e("p",Ee,E(s.name),1)]),e("dd",$e,E(s.description),1)])),64))])])])]))}};var L="/assets/placeholder_icon.68f4f09d.png";const Ae={class:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},Pe={class:"relative flex h-16 justify-between"},Le={class:"absolute inset-y-0 left-0 flex items-center sm:hidden"},Re=e("span",{class:"sr-only"},"Open main menu",-1),Oe={class:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"},De=e("div",{class:"flex flex-shrink-0 items-center"},[e("img",{class:"block h-8 w-auto lg:hidden",src:L,alt:"Workflow"}),e("img",{class:"hidden h-8 w-auto lg:block",src:L,alt:"Workflow"})],-1),Ie={class:"hidden sm:ml-6 sm:flex sm:space-x-8"},Se={class:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"},Ve=e("button",{type:"button",class:"rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},null,-1),Ue=e("span",{class:"sr-only"},"Open user menu",-1),Ce=["src"],ze={class:"space-y-1 pt-2 pb-4"},Ne=f("Home"),je=f("Team"),He=f("Kontakt"),Be={setup(l){const t=v(),i=$();function r(){t.isTrainer?i.push("/homeTrainer"):i.push("/homeSpieler")}function s(){t.deleteAktivenUser(),i.push("/")}return(c,o)=>(p(),x(a(G),{as:"nav",class:"bg-white shadow"},{default:u(({open:h})=>[e("div",Ae,[e("div",Pe,[e("div",Le,[m(a(b),{class:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lime-500"},{default:u(()=>[Re,h?(p(),x(a(M),{key:1,class:"block h-6 w-6","aria-hidden":"true"})):(p(),x(a(W),{key:0,class:"block h-6 w-6","aria-hidden":"true"}))]),_:2},1024)]),e("div",Oe,[De,e("div",Ie,[e("a",{onClick:o[0]||(o[0]=d=>a(i).push("/")),class:"hover:cursor-pointer inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700"},"Home"),e("a",{onClick:o[1]||(o[1]=d=>a(i).push("/aboutus")),class:"hover:cursor-pointer inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700"},"Team"),e("a",{onClick:o[2]||(o[2]=d=>a(i).push("/contact")),class:"hover:cursor-pointer inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700"},"Kontakt")])]),e("div",Se,[Ve,a(t).getAktivenUser?(p(),x(a(F),{key:0,as:"div",class:"relative ml-3"},{default:u(()=>[e("div",null,[m(a(K),{class:"flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},{default:u(()=>[Ue,e("img",{class:"h-8 w-8 rounded-full",src:a(t).getAktivenUser.data.avatarpath,alt:""},null,8,Ce)]),_:1})]),m(Z,{class:"z-40","enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:u(()=>[m(a(J),{class:"absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:u(()=>[m(a(k),null,{default:u(({active:d})=>[e("a",{onClick:r,class:w([d?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},"Zur Software",2)]),_:1}),m(a(k),null,{default:u(({active:d})=>[e("a",{href:"#",class:w([d?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},"Settings",2)]),_:1}),m(a(k),null,{default:u(({active:d})=>[e("a",{onClick:s,class:w([d?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"])},"Sign out",2)]),_:1})]),_:1})]),_:1})]),_:1})):(p(),_("button",{key:1,onClick:o[3]||(o[3]=d=>a(i).push("/login")),type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"}," Anmelden "))])])]),m(a(q),{class:"sm:hidden"},{default:u(()=>[e("div",ze,[m(a(b),{as:"a",onClick:o[4]||(o[4]=d=>a(i).push("/")),class:"block border-l-4 border-lime-500 bg-lime-50 py-2 pl-3 pr-4 text-base font-medium text-lime-600"},{default:u(()=>[Ne]),_:1}),m(a(b),{as:"a",onClick:o[5]||(o[5]=d=>a(i).push("/aboutus")),class:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"},{default:u(()=>[je]),_:1}),m(a(b),{as:"a",onClick:o[6]||(o[6]=d=>a(i).push("/contact")),class:"block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"},{default:u(()=>[He]),_:1})])]),_:1})]),_:1}))}},We=e("br",null,null,-1),Me={setup(l){return(t,i)=>(p(),_(R,null,[m(Be),m(ge),We,m(Te)],64))}},Fe={class:"min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8"},Ke={class:"mx-auto max-w-max"},Je={class:"sm:flex"},Ze=e("p",{class:"text-4xl font-bold tracking-tight text-lime-500 sm:text-5xl"},"404",-1),qe={class:"sm:ml-6"},Ge=e("div",{class:"sm:border-l sm:border-gray-200 sm:pl-6"},[e("h1",{class:"text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"}," Page not found "),e("p",{class:"mt-1 text-base text-gray-500"}," Please check the URL in the address bar and try again. ")],-1),Qe={class:"mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6"},Xe={setup(l){const t=$();return(i,r)=>(p(),_("div",Fe,[e("div",Ke,[e("main",Je,[Ze,e("div",qe,[Ge,e("div",Qe,[e("a",{onClick:r[0]||(r[0]=s=>a(t).push("/")),class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},"Go back home"),e("a",{onClick:r[1]||(r[1]=s=>a(t).push("/contact")),class:"inline-flex items-center rounded-md border border-transparent bg-lime-100 px-4 py-2 text-sm font-medium text-lime-600 hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},"Contact support")])])])])]))}},Ye=Q({history:X(),routes:[{path:"/",name:"LandingPage",component:Me},{path:"/login",name:"Login",component:()=>n(()=>import("./LoginView.6c1c7402.js"),["assets/LoginView.6c1c7402.js","assets/vendor.f6fbf43f.js","assets/index.esm.29ac2ecc.js","assets/XMarkIcon.93aef592.js"])},{path:"/register",name:"Register",component:()=>n(()=>import("./RegisterView.ab1ef7b2.js"),["assets/RegisterView.ab1ef7b2.js","assets/vendor.f6fbf43f.js","assets/index.esm.29ac2ecc.js","assets/XMarkIcon.93aef592.js"])},{path:"/aboutus",name:"AboutUs",component:()=>n(()=>import("./AboutUsView.1f39a24d.js"),["assets/AboutUsView.1f39a24d.js","assets/vendor.f6fbf43f.js"])},{path:"/contact",name:"Conatct",component:()=>n(()=>import("./ContactView.e40d7acd.js"),["assets/ContactView.e40d7acd.js","assets/vendor.f6fbf43f.js","assets/index.esm.29ac2ecc.js","assets/XMarkIcon.93aef592.js"])},{path:"/addTrainingLog",name:"Add Training Log",component:()=>n(()=>import("./TrainerLogErstellen.89a05a30.js"),["assets/TrainerLogErstellen.89a05a30.js","assets/vendor.f6fbf43f.js","assets/XMarkIcon.93aef592.js"])},{path:"/homeTrainer",name:"Home",component:()=>n(()=>import("./HomeViewTrainer.d88f736d.js"),["assets/HomeViewTrainer.d88f736d.js","assets/vendor.f6fbf43f.js","assets/ChevronUpDownIcon.04da6e64.js"]),children:[{path:"",component:()=>n(()=>import("./TrainerHome.74d74515.js"),["assets/TrainerHome.74d74515.js","assets/vendor.f6fbf43f.js","assets/Kalender_comp.4121563f.js","assets/Kalender_comp.90e9cccb.css","assets/PlusIcon.fe1537b1.js"])},{path:"teams",component:()=>n(()=>import("./TrainerKarten.40d16762.js"),["assets/TrainerKarten.40d16762.js","assets/vendor.f6fbf43f.js","assets/PlusIcon.fe1537b1.js"])},{path:"settings",component:()=>n(()=>import("./TrainerSettings.f0b821f9.js"),["assets/TrainerSettings.f0b821f9.js","assets/vendor.f6fbf43f.js"])},{path:"logTraining",component:()=>n(()=>import("./TrainerLogTraining.dbf1c212.js"),["assets/TrainerLogTraining.dbf1c212.js","assets/vendor.f6fbf43f.js"])}],beforeEnter:(l,t,i)=>{const r=v();r.getAktivenUser?r.isTrainer&&i():i("/")}},{path:"/homeSpieler",name:"HomeSpieler",component:()=>n(()=>import("./HomeViewSpieler.e9dea846.js"),["assets/HomeViewSpieler.e9dea846.js","assets/vendor.f6fbf43f.js","assets/ChevronUpDownIcon.04da6e64.js"]),children:[{path:"",component:()=>n(()=>import("./SpielerHome.7a7302f7.js"),["assets/SpielerHome.7a7302f7.js","assets/vendor.f6fbf43f.js","assets/Kalender_comp.4121563f.js","assets/Kalender_comp.90e9cccb.css"])},{path:"teams",component:()=>n(()=>import("./SpielerTeams.3144ff39.js"),["assets/SpielerTeams.3144ff39.js","assets/vendor.f6fbf43f.js","assets/PlusIcon.fe1537b1.js"])},{path:"settings",component:()=>n(()=>import("./SpielerSettings.71fb9a77.js"),["assets/SpielerSettings.71fb9a77.js","assets/vendor.f6fbf43f.js","assets/index.esm.29ac2ecc.js","assets/XMarkIcon.93aef592.js"])},{path:"gesundheit",component:()=>n(()=>import("./SpielerGesundheit.ea045730.js"),["assets/SpielerGesundheit.ea045730.js","assets/vendor.f6fbf43f.js","assets/XMarkIcon.93aef592.js","assets/StarIcon.47826697.js","assets/ChevronUpDownIcon.04da6e64.js","assets/CheckIcon.0426d8fc.js"])},{path:"abwesenheiten",component:()=>n(()=>import("./SpielerAbwesenheiten.ce808601.js"),["assets/SpielerAbwesenheiten.ce808601.js","assets/vendor.f6fbf43f.js"])}],beforeEnter:(l,t,i)=>{const r=v();r.getAktivenUser?r.isSpieler||i():i("/")}},{path:"/addTeam",name:"addTeam",component:()=>n(()=>import("./TeamErstellenView.4f05837f.js"),["assets/TeamErstellenView.4f05837f.js","assets/vendor.f6fbf43f.js","assets/index.esm.29ac2ecc.js","assets/XMarkIcon.93aef592.js"])},{path:"/changeTeam",name:"Change Team",component:()=>n(()=>import("./MannschaftChange.2cdb4c78.js"),["assets/MannschaftChange.2cdb4c78.js","assets/PlusIcon.fe1537b1.js","assets/vendor.f6fbf43f.js"])},{path:"/detailMannschaft/:id",name:"Change Team",component:()=>n(()=>import("./MannschaftDetailView.6f7bbe0e.js"),["assets/MannschaftDetailView.6f7bbe0e.js","assets/vendor.f6fbf43f.js"]),params:!0,children:[{path:"",component:()=>n(()=>import("./Uebersicht.80a01faa.js"),["assets/Uebersicht.80a01faa.js","assets/vendor.f6fbf43f.js","assets/MapPinIcon.ed37ea14.js"])},{path:"ankuendigungen",component:()=>n(()=>import("./ankuendigungen.f8ff0039.js"),["assets/ankuendigungen.f8ff0039.js","assets/vendor.f6fbf43f.js","assets/TrashIcon.90dc8b1a.js","assets/PlusIcon.fe1537b1.js"])},{path:"trainings",component:()=>n(()=>import("./trainings.eeaedae6.js"),["assets/trainings.eeaedae6.js","assets/vendor.f6fbf43f.js","assets/Kalender_comp.4121563f.js","assets/Kalender_comp.90e9cccb.css","assets/MapPinIcon.ed37ea14.js","assets/PlusIcon.fe1537b1.js"])},{path:"mitglieder",component:()=>n(()=>import("./Mitglieder.93ab8d7e.js"),["assets/Mitglieder.93ab8d7e.js","assets/vendor.f6fbf43f.js","assets/TrashIcon.90dc8b1a.js","assets/XMarkIcon.93aef592.js"])},{path:"statistik",component:()=>n(()=>import("./statistics.99889024.js"),["assets/statistics.99889024.js","assets/vendor.f6fbf43f.js"])},{path:"health",component:()=>n(()=>import("./health.f19522cf.js"),["assets/health.f19522cf.js","assets/vendor.f6fbf43f.js","assets/StarIcon.47826697.js"])},{path:"settings",component:()=>n(()=>import("./UnderConstruction.138cf60f.js"),["assets/UnderConstruction.138cf60f.js","assets/vendor.f6fbf43f.js"])}]},{path:"/training/:id",name:"Training",component:()=>n(()=>import("./TrainingDetail.cac4cba7.js"),["assets/TrainingDetail.cac4cba7.js","assets/vendor.f6fbf43f.js","assets/CheckIcon.0426d8fc.js","assets/XMarkIcon.93aef592.js","assets/TrashIcon.90dc8b1a.js"]),params:!0},{path:"/trainingerstellen/:id",name:"Training erstellen",component:()=>n(()=>import("./TrainingErstellen.7fe2fc69.js"),["assets/TrainingErstellen.7fe2fc69.js","assets/vendor.f6fbf43f.js","assets/XMarkIcon.93aef592.js"]),params:!0},{path:"/spielerHealth/:id",name:"Spieler Health Anzeigen",component:()=>n(()=>import("./SpielerHealth.296a311d.js"),["assets/SpielerHealth.296a311d.js","assets/vendor.f6fbf43f.js"]),params:!0},{path:"/:pathmatch(.*)*",name:"not-found",component:Xe}]});function et(l={}){const{immediate:t=!1,onNeedRefresh:i,onOfflineReady:r,onRegistered:s,onRegisteredSW:c,onRegisterError:o}=l;let h,d;const O=async(T=!0)=>{await d};async function D(){if("serviceWorker"in navigator){const{Workbox:T,messageSW:st}=await n(()=>import("./workbox-window.prod.es5.d2780aeb.js"),[]);h=new T("/service-worker.js",{scope:"/",type:"classic"}),h.addEventListener("activated",g=>{g.isUpdate?window.location.reload():r==null||r()}),h.register({immediate:t}).then(g=>{c?c("/service-worker.js",g):s==null||s(g)}).catch(g=>{o==null||o(g)})}}return d=D(),O}(location.origin==="http://localhost:8080"||location.origin==="http://localhost:5050")&&(Y.defaults.baseURL="http://localhost:2410");const y=ee(ne),tt=te();y.use(tt);et({onNeedRefresh(){},onOfflineReady(){}});y.use(Ye);y.component("Datepicker",se);y.mount("#app");export{v as P,L as _,Be as a};
