import{e as w,K as y,L as _,a as i,c as n,f as e,M as d,N as c,u as t,t as u,O as p,D as b}from"./vendor.46812002.js";import{P as v,_ as k}from"./index.aeb1d6da.js";import{u as $,r as f,e as E}from"./index.esm.e2a3acbd.js";const S={class:"min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"},C=e("div",{class:"sm:mx-auto sm:w-full sm:max-w-md"},[e("img",{class:"mx-auto h-12 w-auto",src:k,alt:"Electronic City"}),e("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"}," Sign in to your account ")],-1),V={class:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},j={class:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},D={class:"space-y-6",action:"#",method:"POST"},P=e("label",{for:"email",class:"block text-sm font-medium text-gray-700"}," Email address ",-1),T={class:"mt-1"},q={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},B=e("label",{for:"password",class:"block text-sm font-medium text-gray-700"}," Password ",-1),N={class:"mt-1"},U={key:0,class:"mt-2 text-sm text-red-600",id:"email-error"},A={class:"flex items-center justify-between"},K={class:"text-sm"},L=e("div",{class:"text-sm"},[e("a",{href:"#",class:"font-medium text-lime-500 hover:text-lime-600"}," Forgot your password? ")],-1),M={class:"mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3"},G={setup(O){const x=v(),l=w();let o=y({email:"",password:""});const h=_(()=>({email:{required:f,email:E},password:{required:f}})),r=$(h,o);async function g(m){if(m.preventDefault(),r.value.$silentErrors.length==0)try{const s=await b.post("/login",{email:o.email,password:o.password});console.log(s),x.setAktivenUser(s.data),s.data.type=="Trainer"?(console.log("push"),l.push("/homeTrainer")):l.push("/homeSpieler")}catch(s){console.log(s.message)}else console.log("fehler")}return(m,s)=>(i(),n("div",S,[C,e("div",V,[e("div",j,[e("form",D,[e("div",null,[P,e("div",T,[d(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>t(o).email=a),id:"email",name:"email",type:"email",autocomplete:"email",required:"",class:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"},null,512),[[c,t(o).email]]),t(r).email.$invalid?(i(),n("p",q,u(t(r).email.$silentErrors[0].$message),1)):p("",!0)])]),e("div",null,[B,e("div",N,[d(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>t(o).password=a),id:"password",name:"password",type:"password",autocomplete:"current-password",required:"",class:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"},null,512),[[c,t(o).password]]),t(r).password.$invalid?(i(),n("p",U,u(t(r).password.$silentErrors[0].$message),1)):p("",!0)])]),e("div",A,[e("div",K,[e("a",{onClick:s[2]||(s[2]=a=>t(l).push("/register")),class:"font-medium text-lime-500 hover:text-lime-600 underline"}," Erstellen Sie ein Konto ")]),L]),e("div",M,[e("button",{onClick:s[3]||(s[3]=a=>t(l).push("/")),class:"my-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none"}," Abbrechen "),e("button",{onClick:g,class:"my-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-500 hover:bg-lime-600 focus:outline-none"}," Login ")])])])])]))}};export{G as default};