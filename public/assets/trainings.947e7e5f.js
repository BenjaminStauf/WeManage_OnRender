import{f as b,U as f,aq as w,i as k,a as n,c as a,e,b as l,u as s,F as h,r as T,t as m,ar as C,as as B,n as y,at as N,ag as D,P as F,p as V,y as p,au as j}from"./vendor.82e95389.js";import{P as E}from"./index.d8b81aca.js";import{_ as P}from"./Kalender_comp.fd78198f.js";const R={class:"mx-4 mt-4"},S=e("br",null,null,-1),A=e("br",null,null,-1),L=e("h1",{class:"ml-5 text-xl font-bold"},"N\xE4chsten Trainings",-1),M=e("br",null,null,-1),U={key:0,class:"overflow-hidden bg-white sm:rounded-md mx-3 mb-3"},Y={role:"list",class:"divide-y divide-gray-200"},q=["onClick"],K={class:"block hover:bg-gray-50"},z={class:"px-4 py-4 sm:px-6"},G={class:"flex items-center justify-between"},H={class:"truncate text-sm font-medium text-lime-500"},I={class:"mt-2 sm:flex sm:justify-between"},J={class:"sm:flex"},O={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0"},Q={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6"},W={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0"},X={key:1},Z=e("h1",{class:"text-center text-xl font-bold mt-5"},"Es wurden noch keine Trainings erstellt",-1),ee=[Z],te={async setup(v){let r,_;const u=b();let d=f([]),i=f([]);const x=u.currentRoute.value.params.id;try{const{data:c}=([r,_]=w(()=>k.get(`/getTrainings/${x}`)),r=await r,_(),r);d.value=c,i.value=d.value.map(o=>{let t=new Date(o.trainingdatum),g=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${o.trainingbeginn}`,$=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${o.trainingende}`;return{title:o.titel,start:g,end:$,t_id:o.training_id}}),console.log(i.value)}catch(c){console.log(c)}return(c,o)=>(n(),a(h,null,[e("div",R,[l(P,{termine:s(i)},null,8,["termine"])]),S,A,L,M,s(d).length>0?(n(),a("div",U,[e("ul",Y,[(n(!0),a(h,null,T(s(d),t=>(n(),a("li",{key:t.training_id,onClick:g=>c.$router.push(`/training/${t.training_id}`)},[e("a",K,[e("div",z,[e("div",G,[e("p",H,m(t.titel),1)]),e("div",I,[e("div",J,[e("div",O,[l(s(C),{class:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),e("p",null,m(t.trainingdatum)+" | Beginn: "+m(t.trainingbeginn)+", Ende: "+m(t.trainingende),1)]),e("p",Q,[l(s(B),{class:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),y(" "+m(t.wo),1)])]),e("div",W,[l(s(N),{class:"mr-1.5 h-7 w-7 flex-shrink-0 text-gray-400","aria-hidden":"true"})])])])])],8,q))),128))])])):(n(),a("div",X,ee))],64))}},se={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},ne=e("div",{class:"min-w-0 flex-1"},[e("h1",{class:"text-3xl font-bold text-gray-900 sm:truncate"},"Trainings")],-1),re={key:0,class:"mt-4 flex sm:mt-0 sm:ml-4"},ae=y(" Training "),ie=e("div",null,[e("h1",{class:"text-center text-xl font-bold mt-5"},"Loading...")],-1),ce={setup(v){const r=b(),_=E(),u=r.currentRoute.value.params.id;return(d,i)=>(n(),a(h,null,[e("div",se,[ne,s(_).getAktivenUser.type=="Trainer"?(n(),a("div",re,[e("button",{onClick:i[0]||(i[0]=x=>s(r).push(`/trainingerstellen/${s(u)}`)),type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"},[ae,l(s(D),{class:"ml-2 -mr-1 h-5 w-5","aria-hidden":"true"})])])):F("",!0)]),(n(),V(j,null,{fallback:p(()=>[ie]),default:p(()=>[l(te)]),_:1}))],64))}};export{ce as default};
