import{e as k,K as $,L as C,M as f,a as i,c as n,f as e,b as m,w as E,T,N as x,O as h,u as t,t as g,P as c,F as S,D as V,Q as j}from"./vendor.28678742.js";import{P as B,_ as F}from"./index.ca028f78.js";import{u as P,r as y,e as D}from"./index.esm.48079def.js";import{r as v}from"./XMarkIcon.a4de140c.js";const L={"aria-live":"assertive",class:"z-40 pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"},N={class:"flex w-full flex-col items-center space-y-4 sm:items-end"},q={key:0,class:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},A={class:"p-4"},U={class:"flex items-start"},K={class:"flex-shrink-0"},M=e("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[e("p",{class:"text-sm font-medium text-gray-900"},"Fehler"),e("p",{class:"mt-1 text-sm text-gray-500"}," Beim Anmelden ist leider ein Fehler aufgetreten. Bitte probiere es erneut. ")],-1),O={class:"ml-4 flex flex-shrink-0"},R=e("span",{class:"sr-only"},"Close",-1),z={class:"min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"},Q=e("div",{class:"sm:mx-auto sm:w-full sm:max-w-md"},[e("img",{class:"mx-auto h-12 w-auto",src:F,alt:"Electronic City"}),e("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"}," Sign in to your account ")],-1),G={class:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},H={class:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},I={class:"space-y-6",action:"#",method:"POST"},J=e("label",{for:"email",class:"block text-sm font-medium text-gray-700"}," Email address ",-1),W={class:"mt-1"},X={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},Y=e("label",{for:"password",class:"block text-sm font-medium text-gray-700"}," Password ",-1),Z={class:"mt-1"},ee={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},se={class:"flex items-center justify-between"},te={class:"text-sm"},oe=e("div",{class:"text-sm"},[e("a",{href:"#",class:"font-medium text-lime-500 hover:text-lime-600"}," Forgot your password? ")],-1),ae={class:"mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3"},re=["disabled"],ce={setup(le){const w=B(),d=k();let o=$(!1),a=C({email:"",password:""});const _=f(()=>({email:{required:y,email:D},password:{required:y}})),r=P(_,a);async function b(p){if(p.preventDefault(),r.value.$silentErrors.length==0)try{const s=await V.post("/login",{email:a.email,password:a.password});console.log(s),w.setAktivenUser(s.data),s.data.type=="Trainer"?(console.log("push"),d.push("/homeTrainer")):d.push("/homeSpieler")}catch{console.log("catch"),o.value=!0,console.log(o.value),setTimeout(()=>o.value=!1,3e3)}else console.log("fehler")}const u=f(()=>r.value.$invalid==!0);return(p,s)=>(i(),n(S,null,[e("div",L,[e("div",N,[m(T,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:E(()=>[t(o)?(i(),n("div",q,[e("div",A,[e("div",U,[e("div",K,[m(t(v),{class:"h-6 w-6 text-red-600","aria-hidden":"true"})]),M,e("div",O,[e("button",{type:"button",onClick:s[0]||(s[0]=l=>j(o)?o.value=!1:o=!1),class:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},[R,m(t(v),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):c("",!0)]),_:1})])]),e("div",z,[Q,e("div",G,[e("div",H,[e("form",I,[e("div",null,[J,e("div",W,[x(e("input",{"onUpdate:modelValue":s[1]||(s[1]=l=>t(a).email=l),id:"email",name:"email",type:"email",autocomplete:"email",required:"",class:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"},null,512),[[h,t(a).email]]),t(r).email.$invalid?(i(),n("p",X,g(t(r).email.$silentErrors[0].$message),1)):c("",!0)])]),e("div",null,[Y,e("div",Z,[x(e("input",{"onUpdate:modelValue":s[2]||(s[2]=l=>t(a).password=l),id:"password",name:"password",type:"password",autocomplete:"current-password",required:"",class:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"},null,512),[[h,t(a).password]]),t(r).password.$invalid?(i(),n("p",ee,g(t(r).password.$silentErrors[0].$message),1)):c("",!0)])]),e("div",se,[e("div",te,[e("a",{onClick:s[3]||(s[3]=l=>t(d).push("/register")),class:"font-medium text-lime-500 hover:text-lime-600 underline"}," Erstellen Sie ein Konto ")]),oe]),e("div",ae,[e("button",{onClick:s[4]||(s[4]=l=>t(d).push("/")),class:"my-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none"}," Abbrechen "),t(u)?(i(),n("button",{key:1,disabled:t(u),class:"my-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-800 focus:outline-none"}," Login ",8,re)):(i(),n("button",{key:0,type:"submit",onClick:b,class:"my-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-500 hover:bg-lime-600 focus:outline-none"}," Login "))])])])])])],64))}};export{ce as default};
