import{e as V,K as g,L as $,a as c,c as m,f as e,b as l,w as x,T as p,u as t,F as T,D as z,a5 as B,S as v,Q as _,a9 as h,I as u}from"./vendor.f6fbf43f.js";import{P as E,_ as F}from"./index.c9db1882.js";import{r as f}from"./XMarkIcon.93aef592.js";const D={"aria-live":"assertive",class:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"},P={class:"flex w-full flex-col items-center space-y-4 sm:items-end"},U={key:0,class:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},A={class:"p-4"},M={class:"flex items-start"},N={class:"flex-shrink-0"},R=e("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[e("p",{class:"text-sm font-medium text-gray-900"},"Erfolgreich hinzugef\xFCgt"),e("p",{class:"mt-1 text-sm text-gray-500"}," Das Training wurde erfolgreich hinzugef\xFCgt. ")],-1),j={class:"ml-4 flex flex-shrink-0"},S=e("span",{class:"sr-only"},"Close",-1),Y={"aria-live":"assertive",class:"pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"},H={class:"flex w-full flex-col items-center space-y-4 sm:items-end"},I={key:0,class:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},K={class:"p-4"},L={class:"flex items-start"},Q={class:"flex-shrink-0"},q=e("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[e("p",{class:"text-sm font-medium text-gray-900"},"Fehler"),e("p",{class:"mt-1 text-sm text-gray-500"},"Es gab leider einen Fehler beim Erstellen.")],-1),G={class:"ml-4 flex flex-shrink-0"},J=e("span",{class:"sr-only"},"Close",-1),O={class:"min-h-full"},W={class:"hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4"},X=e("div",{class:"flex flex-shrink-0 items-center px-6"},[e("img",{class:"h-8 w-auto",src:F,alt:"Your Company"})],-1),Z={class:"mt-6 flex h-0 flex-1 flex-col overflow-y-auto"},ee={class:"mt-6 mb-3 px-3 flex-row"},se={class:"space-y-1"},te=e("p",{class:"text-2xl font-bold mx-2"},"Back",-1),oe={class:"flex flex-col lg:pl-64"},ae={class:"mt-6 mb-3 px-3 flex-row lg:hidden"},le={class:"space-y-1"},ne=e("p",{class:"text-xl font-bold mx-2"},"Back",-1),ie={class:"flex-1"},re={class:"divide-y divide-gray-200 lg:col-span-9"},de={class:"py-6 px-4 sm:p-6 lg:pb-8"},ce=e("div",null,[e("h2",{class:"text-lg font-medium leading-6 text-gray-900"},"Training aufzeichnen"),e("p",{class:"mt-1 text-sm text-gray-500"}," Hier kann ein neues Training aufgezeichnet werden ")],-1),me={class:"mt-6 grid grid-cols-12 gap-6"},ue={class:"col-span-12 sm:col-span-4"},fe=e("label",{for:"first-name",class:"block text-sm font-medium text-gray-700"},"Datum",-1),ge={class:"col-span-12 sm:col-span-2"},xe=e("label",{for:"last-name",class:"block text-sm font-medium text-gray-700"},"Beginn",-1),pe={class:"col-span-12 sm:col-span-2"},ve=e("label",{for:"last-name",class:"block text-sm font-medium text-gray-700"},"Ende",-1),_e={class:"pt-5"},he={class:"flex justify-center"},Ce={setup(ye){const r=V(),y=E();let d=g(!1),n=g(!1),a=$({date:"",von:"",bis:""});const b=i=>{const s=i.getDate(),o=i.getMonth()+1,C=i.getFullYear();return`${s}.${o}.${C}`};async function w(i){i.preventDefault();try{await z.post(`/logTraining/${y.getAktivenUser.data.t_id}`,a),console.log(a),n.value=!0,k(),setTimeout(()=>{n.value=!1},3e3)}catch(s){s.value=!0,setTimeout(()=>s.value=!1,3e3),console.log("Error")}}function k(){a.datum="",a.beginn="",a.ende=""}return r.currentRoute.value.params.id,(i,s)=>(c(),m(T,null,[e("div",D,[e("div",P,[l(p,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:x(()=>[t(n)?(c(),m("div",U,[e("div",A,[e("div",M,[e("div",N,[l(t(B),{class:"h-6 w-6 text-green-400","aria-hidden":"true"})]),R,e("div",j,[e("button",{type:"button",onClick:s[0]||(s[0]=o=>v(n)?n.value=!1:n=!1),class:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},[S,l(t(f),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):_("",!0)]),_:1})])]),e("div",Y,[e("div",H,[l(p,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:x(()=>[t(d)?(c(),m("div",I,[e("div",K,[e("div",L,[e("div",Q,[l(t(f),{class:"h-6 w-6 text-red-600","aria-hidden":"true"})]),q,e("div",G,[e("button",{type:"button",onClick:s[1]||(s[1]=o=>v(d)?d.value=!1:d=!1),class:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},[J,l(t(f),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):_("",!0)]),_:1})])]),e("div",O,[e("div",W,[X,e("div",Z,[e("div",ee,[e("div",se,[e("div",{onClick:s[2]||(s[2]=o=>t(r).go(-1)),class:"text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"},[l(t(h),{class:"h-10 w-10"}),te])])])])]),e("div",oe,[e("div",ae,[e("div",le,[e("div",{onClick:s[3]||(s[3]=o=>t(r).go(-1)),class:"text-gray-900 group flex items-center py-2 text-sm font-medium rounded-md"},[l(t(h),{class:"h-10 w-10"}),ne])])]),e("main",ie,[e("form",re,[e("div",de,[ce,e("div",me,[e("div",ue,[fe,l(t(u),{id:"date",modelValue:t(a).date,"onUpdate:modelValue":s[4]||(s[4]=o=>t(a).date=o),format:b,"model-type":"yyyy-MM-dd"},null,8,["modelValue"])]),e("div",ge,[xe,l(t(u),{modelValue:t(a).von,"onUpdate:modelValue":s[5]||(s[5]=o=>t(a).von=o),timePicker:""},null,8,["modelValue"])]),e("div",pe,[ve,l(t(u),{modelValue:t(a).bis,"onUpdate:modelValue":s[6]||(s[6]=o=>t(a).bis=o),timePicker:""},null,8,["modelValue"])])])]),e("div",_e,[e("div",he,[e("button",{onClick:s[7]||(s[7]=o=>t(r).go(-1)),type:"button",class:"rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"}," Cancel "),e("button",{onClick:w,type:"submit",class:"ml-3 inline-flex justify-center rounded-md border border-transparent bg-lime-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"}," Aufzeichnen ")])])])])])])],64))}};export{Ce as default};
