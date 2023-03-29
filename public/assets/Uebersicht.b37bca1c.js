import{e as y,K as m,ar as $,D as b,a as s,c as l,u as c,F as u,r as k,f as t,t as a,M as D,b as d,h as C,i as g,w as h,as as v}from"./vendor.f6fbf43f.js";import{r as N,a as T,b as B}from"./MapPinIcon.ed37ea14.js";const L=t("h1",{class:"text-xl px-5 pt-3 font-bold"},"Letzte Ank\xFCndigungen:",-1),R={class:"bg-white px-4 py-6 sm:px-6"},j={class:"flex space-x-3"},F={class:"flex-shrink-0"},K=["src"],M={class:"min-w-0 flex-1"},V={class:"text-sm font-medium text-gray-900"},z={class:"hover:underline"},A={class:"text-sm text-gray-500"},E={class:"hover:underline"},S={class:"bg-gray-100 px-5 mt-4 py-5 rounded-md shadow-md lg:mr-16 w-auto"},Y={class:"flex flex-rows items-center"},q={class:"font-bold mr-12 w-full"},G=t("div",{class:"ml-5 w-11/12"},null,-1),H={class:"mt-3"},I={key:1},J=t("p",{class:"text-center"},"Keine Nachrichten vorhanden",-1),O=[J],P={async setup(x){let n,i;const _=y();let o=m([]);const p=m(_.currentRoute.value.params.id);try{const{data:r}=([n,i]=$(()=>b.get(`/getNews/${p.value}`)),n=await n,i(),n);o.value=r,console.log(o.value.length),o.value.length>2&&(o.value.length=2)}catch(r){console.log(r)}return(r,f)=>(s(),l(u,null,[L,c(o).length!=0?(s(!0),l(u,{key:0},k(c(o),e=>(s(),l("div",null,[t("div",R,[t("div",j,[t("div",F,[t("img",{class:"h-10 w-10 rounded-full",src:e.avatarpath,alt:""},null,8,K)]),t("div",M,[t("p",V,[t("a",z,a(e.vorname)+" "+a(e.nachname),1)]),t("p",A,[t("a",E,a(e.datetime),1)])])]),t("div",S,[t("div",Y,[t("h1",q,a(e.titel),1),G]),t("p",H,a(e.nachricht),1)])]),t("p",{class:"text-center text-gray-500 underline cursor-pointer",onClick:f[0]||(f[0]=w=>c(_).push(`/detailMannschaft/${c(_).currentRoute.value.params.id}/ankuendigungen`))}," mehr anzeigen ")]))),256)):(s(),l("div",I,O))],64))}},Q=t("h1",{class:"text-xl px-5 pt-3 font-bold"},"Kommende Trainings",-1),U=t("br",null,null,-1),W={key:0,class:"overflow-hidden bg-white shadow sm:rounded-md mx-3 mb-3"},X={role:"list",class:"divide-y divide-gray-200"},Z=["onClick"],tt={class:"px-4 py-4 sm:px-6"},et={class:"flex items-center justify-between"},st={class:"truncate text-sm font-medium text-lime-500"},nt={class:"mt-2 sm:flex sm:justify-between"},ot={class:"sm:flex"},at={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0"},lt={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6"},rt={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0"},ct={key:1,class:"text-center text-2xl font-bold"},it=t("p",null,"Es sind noch keine Trainings vorhanden",-1),dt=[it],_t={async setup(x){let n,i;const _=y();let o=m([]);const p=m(_.currentRoute.value.params.id);try{const{data:r}=([n,i]=$(()=>b.get(`/getTrainings/${p.value}`)),n=await n,i(),n);o.value=r,console.log(o.value)}catch(r){console.log(r)}return D(()=>"test"),(r,f)=>(s(),l(u,null,[Q,U,c(o).length>0?(s(),l("div",W,[t("ul",X,[(s(!0),l(u,null,k(c(o),e=>(s(),l("li",{key:e.training_id},[t("div",{class:"block hover:bg-gray-50",onClick:w=>r.$router.push(`/training/${e.training_id}`)},[t("div",tt,[t("div",et,[t("p",st,a(e.titel),1)]),t("div",nt,[t("div",ot,[t("div",at,[d(c(N),{class:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),t("p",null,a(new Date(e.trainingdatum).getDay())+"."+a(new Date(e.trainingdatum).getMonth())+"."+a(new Date(e.trainingdatum).getFullYear())+" | Treffpunkt: "+a(e.trainingtreffpunkt),1)]),t("p",lt,[d(c(T),{class:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),C(" "+a(e.wo),1)])]),t("div",rt,[d(c(B),{class:"mr-1.5 h-7 w-7 flex-shrink-0 text-gray-400","aria-hidden":"true"})])])])],8,Z)]))),128))])])):(s(),l("div",ct,dt))],64))}},ut=t("h1",{class:"text-center text-xl font-bold mt-5"},"Loading...",-1),ht=t("br",null,null,-1),mt=t("hr",null,null,-1),xt=t("br",null,null,-1),pt=t("h1",{class:"text-center text-xl font-bold mt-5"},"Loading...",-1),ft={setup(x){return(n,i)=>(s(),l("div",null,[(s(),g(v,null,{fallback:h(()=>[ut]),default:h(()=>[d(P)]),_:1})),ht,mt,xt,(s(),g(v,null,{fallback:h(()=>[pt]),default:h(()=>[d(_t)]),_:1}))]))}},gt=t("div",{class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},[t("div",{class:"min-w-0 flex-1"},[t("h1",{class:"text-3xl font-bold text-gray-900 sm:truncate my-2"},"\xDCbersicht")])],-1),$t={setup(x){return(n,i)=>(s(),l(u,null,[gt,d(ft)],64))}};export{$t as default};
