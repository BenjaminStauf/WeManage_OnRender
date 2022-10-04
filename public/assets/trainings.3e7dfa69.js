import{e as b,Q as f,at as w,D as k,a as n,c as i,f as e,b as l,u as s,F as h,r as T,t as m,h as v,O as C,i as B,w as p,au as D}from"./vendor.6904d49b.js";import{P as N}from"./index.993b3444.js";import{_ as F}from"./Kalender_comp.92f8403d.js";import{r as V,a as j,b as E}from"./MapPinIcon.a4d1a14e.js";import{r as R}from"./PlusIcon.3957faee.js";const S={class:"mx-2 mt-4"},A=e("br",null,null,-1),L=e("br",null,null,-1),M=e("h1",{class:"ml-5 text-xl font-bold"},"N\xE4chsten Trainings",-1),P=e("br",null,null,-1),Y={key:0,class:"overflow-hidden bg-white sm:rounded-md mx-3 mb-3"},K={role:"list",class:"divide-y divide-gray-200"},O=["onClick"],Q={class:"block hover:bg-gray-50"},U={class:"px-4 py-4 sm:px-6"},q={class:"flex items-center justify-between"},z={class:"truncate text-sm font-medium text-lime-500"},G={class:"mt-2 sm:flex sm:justify-between"},H={class:"sm:flex"},I={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0"},J={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6"},W={class:"mt-2 flex items-center text-sm text-gray-500 sm:mt-0"},X={key:1},Z=e("h1",{class:"text-center text-xl font-bold mt-5"},"Es wurden noch keine Trainings erstellt",-1),ee=[Z],te={async setup(y){let r,_;const u=b();let d=f([]),o=f([]);const x=u.currentRoute.value.params.id;try{const{data:c}=([r,_]=w(()=>k.get(`/getTrainings/${x}`)),r=await r,_(),r);d.value=c,o.value=d.value.map(a=>{let t=new Date(a.trainingdatum),g=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${a.trainingbeginn}`,$=`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${a.trainingende}`;return{title:a.titel,start:g,end:$,t_id:a.training_id}}),console.log(o.value)}catch(c){console.log(c)}return(c,a)=>(n(),i(h,null,[e("div",S,[l(F,{termine:s(o)},null,8,["termine"])]),A,L,M,P,s(d).length>0?(n(),i("div",Y,[e("ul",K,[(n(!0),i(h,null,T(s(d),t=>(n(),i("li",{key:t.training_id,onClick:g=>c.$router.push(`/training/${t.training_id}`)},[e("a",Q,[e("div",U,[e("div",q,[e("p",z,m(t.titel),1)]),e("div",G,[e("div",H,[e("div",I,[l(s(V),{class:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),e("p",null,m(t.trainingdatum)+" | Beginn: "+m(t.trainingbeginn)+", Ende: "+m(t.trainingende),1)]),e("p",J,[l(s(j),{class:"mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),v(" "+m(t.wo),1)])]),e("div",W,[l(s(E),{class:"mr-1.5 h-7 w-7 flex-shrink-0 text-gray-400","aria-hidden":"true"})])])])])],8,O))),128))])])):(n(),i("div",X,ee))],64))}},se={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},ne=e("div",{class:"min-w-0 flex-1"},[e("h1",{class:"text-3xl font-bold text-gray-900 sm:truncate"},"Trainings")],-1),re={key:0,class:"mt-4 flex sm:mt-0 sm:ml-4"},ie=v(" Training "),oe=e("div",null,[e("h1",{class:"text-center text-xl font-bold mt-5"},"Loading...")],-1),_e={setup(y){const r=b(),_=N(),u=r.currentRoute.value.params.id;return(d,o)=>(n(),i(h,null,[e("div",se,[ne,s(_).getAktivenUser.type=="Trainer"?(n(),i("div",re,[e("button",{onClick:o[0]||(o[0]=x=>s(r).push(`/trainingerstellen/${s(u)}`)),type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"},[ie,l(s(R),{class:"ml-2 -mr-1 h-5 w-5","aria-hidden":"true"})])])):C("",!0)]),(n(),B(D,null,{fallback:p(()=>[oe]),default:p(()=>[l(te)]),_:1}))],64))}};export{_e as default};
