import{e as $,Q as p,at as b,D as k,a as e,c as n,u as l,F as m,r as w,f as t,t as a,L as C,b as u,h as L,i as v,w as x,au as y}from"./vendor.6904d49b.js";import{r as N,a as T,b as B}from"./MapPinIcon.a4d1a14e.js";const R=t("h1",{class:"text-xl px-5 pt-3 font-bold"},"Letzte Ank\xFCndigungen:",-1),j={class:"bg-white px-4 py-6 sm:px-6"},D={class:"flex space-x-3"},V={class:"flex-shrink-0"},z=["src"],A={class:"min-w-0 flex-1"},E={class:"text-sm font-medium text-gray-900"},F={class:"hover:underline"},K={class:"text-sm text-gray-500"},S={class:"hover:underline"},M={class:"bg-gray-100 px-5 mt-4 py-5 rounded-md shadow-md lg:mr-16 w-auto"},Q={class:"flex flex-rows items-center"},q={class:"font-bold mr-12 w-full"},G=t("div",{class:"ml-5 w-11/12"},null,-1),H={class:"mt-3"},I={key:1},J=t("p",{class:"text-center"},"Keine Nachrichten vorhanden",-1),O=[J],P={async setup(f){let s,c;const h=$();let o=p([]);const g=p(h.currentRoute.value.params.id);try{const{data:d}=([s,c]=b(()=>k.get(`/getNews/${g.value}`)),s=await s,c(),s);o.value=d,console.log(o.value.length),o.value.length>2&&(o.value.length=2)}catch(d){console.log(d)}return(d,r)=>(e(),n(m,null,[R,l(o).length!=0?(e(!0),n(m,{key:0},w(l(o),i=>(e(),n("div",null,[t("div",j,[t("div",D,[t("div",V,[t("img",{class:"h-10 w-10 rounded-full",src:i.avatarpath,alt:""},null,8,z)]),t("div",A,[t("p",E,[t("a",F,a(i.vorname)+" "+a(i.nachname),1)]),t("p",K,[t("a",S,a(i.datetime),1)])])]),t("div",M,[t("div",Q,[t("h1",q,a(i.titel),1),G]),t("p",H,a(i.nachricht),1)])]),t("p",{class:"text-center text-gray-500 underline cursor-pointer",onClick:r[0]||(r[0]=_=>l(h).push(`/detailMannschaft/${l(h).currentRoute.value.params.id}/ankuendigungen`))}," mehr anzeigen ")]))),256)):(e(),n("div",I,O))],64))}},U=t("h1",{class:"text-xl px-5 pt-3 font-bold"},"Kommende Trainings",-1),W=t("br",null,null,-1),X={key:0,class:"overflow-hidden bg-white shadow sm:rounded-md mx-3 mb-3"},Y={role:"list",class:"divide-y divide-gray-200"},Z=["onClick"],tt={class:"px-4 py-4 sm:px-6"},et={class:"flex items-center justify-between"},st={class:"truncate text-sm font-medium text-lime-500"},nt={class:"mt-2 sm:flex sm:justify-between"},ot={class:"sm:flex"},lt={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0"},at={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6"},rt={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0"},ct={key:1,class:"text-center text-2xl font-bold"},it=t("p",null,"Es sind noch keine Trainings vorhanden",-1),dt=[it],_t={async setup(f){let s,c;const h=$();let o=p([]);const g=p(h.currentRoute.value.params.id);try{const{data:r}=([s,c]=b(()=>k.get(`/getTrainings/${g.value}`)),s=await s,c(),s);o.value=r}catch(r){console.log(r)}const d=C(()=>"test");return(r,i)=>(e(),n(m,null,[U,W,l(o).length>0?(e(),n("div",X,[t("ul",Y,[(e(!0),n(m,null,w(l(o),_=>(e(),n("li",{key:_.training_id},[t("div",{class:"block hover:bg-gray-50",onClick:vt=>r.$router.push(`/training/${_.training_id}`)},[t("div",tt,[t("div",et,[t("p",st,a(_.titel),1)]),t("div",nt,[t("div",ot,[t("div",lt,[u(l(N),{class:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),t("p",null,a(l(d))+" Treffpunkt: "+a(_.trainingtreffpunkt),1)]),t("p",at,[u(l(T),{class:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),L(" "+a(_.wo),1)])]),t("div",rt,[u(l(B),{class:"mr-1.5 h-7 w-7 flex-shrink-0 text-gray-400","aria-hidden":"true"})])])])],8,Z)]))),128))])])):(e(),n("div",ct,dt))],64))}},ut=t("h1",{class:"text-center text-xl font-bold mt-5"},"Loading...",-1),ht=t("br",null,null,-1),mt=t("hr",null,null,-1),xt=t("br",null,null,-1),pt=t("h1",{class:"text-center text-xl font-bold mt-5"},"Loading...",-1),ft={setup(f){return(s,c)=>(e(),n("div",null,[(e(),v(y,null,{fallback:x(()=>[ut]),default:x(()=>[u(P)]),_:1})),ht,mt,xt,(e(),v(y,null,{fallback:x(()=>[pt]),default:x(()=>[u(_t)]),_:1}))]))}},gt=t("div",{class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},[t("div",{class:"min-w-0 flex-1"},[t("h1",{class:"text-3xl font-bold text-gray-900 sm:truncate my-2"},"\xDCbersicht")])],-1),bt={setup(f){return(s,c)=>(e(),n(m,null,[gt,u(ft)],64))}};export{bt as default};
