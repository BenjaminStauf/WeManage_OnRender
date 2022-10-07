import{r as d}from"./PlusIcon.f06be05c.js";import{K as l,a as t,c as a,f as e,b as c,u as n,F as m,r as u,g as i,t as o}from"./vendor.c359feed.js";const f={class:"mx-auto max-w-lg px-4 pt-10 pb-12 lg:pb-16"},b={class:"space-y-6"},h=i('<div><h1 class="text-lg font-medium leading-6 text-gray-900">Mannschaft anpassen</h1><p class="mt-1 text-sm text-gray-500">Hier kannst du deine Mannschaft anpassen.</p></div><div><label for="project-name" class="block text-sm font-medium text-gray-700">Team Name</label><div class="mt-1"><input type="text" name="project-name" id="project-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm" value="Project Nero"></div></div>',2),p={class:"space-y-2"},g={class:"space-y-1"},x=e("label",{for:"add-team-members",class:"block text-sm font-medium text-gray-700"},"Add Team Members",-1),y=e("p",{id:"add-team-members-helper",class:"sr-only"},"Search by email address",-1),_={class:"flex"},v=e("div",{class:"flex-grow"},[e("input",{type:"text",name:"add-team-members",id:"add-team-members",class:"block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm",placeholder:"Email address","aria-describedby":"add-team-members-helper"})],-1),w={class:"ml-3"},k={type:"button",class:"inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},j=e("span",null,"Add",-1),B={class:"border-b border-gray-200"},M={role:"list",class:"divide-y divide-gray-200"},E=["src"],H={class:"ml-3 flex flex-col"},N={class:"text-sm font-medium text-gray-900"},P={class:"text-sm text-gray-500"},D=i('<div><label for="tags" class="block text-sm font-medium text-gray-700">Zugangscode</label><input type="text" name="tags" id="tags" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"></div><div class="flex justify-end"><button type="button" class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"> Cancel </button><button type="submit" class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-lime-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"> Create this project </button></div>',2),Q={setup(O){const r=[{name:"Calvin Hawkins",email:"calvin.hawkins@example.com",imageUrl:"https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Bessie Richards",email:"bessie.richards@example.com",imageUrl:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},{name:"Floyd Black",email:"floyd.black@example.com",imageUrl:"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}];return l([{name:"Public access",description:"This project would be available to anyone who has the link"},{name:"Private to Project Members",description:"Only members of this project would be able to access"},{name:"Private to you",description:"You are the only one able to access this project"}][0]),(q,C)=>(t(),a("main",f,[e("form",null,[e("div",b,[h,e("div",p,[e("div",g,[x,y,e("div",_,[v,e("span",w,[e("button",k,[c(n(d),{class:"-ml-2 mr-1 h-5 w-5 text-gray-400","aria-hidden":"true"}),j])])])]),e("div",B,[e("ul",M,[(t(),a(m,null,u(r,s=>e("li",{key:s.email,class:"flex py-4"},[e("img",{class:"h-10 w-10 rounded-full",src:s.imageUrl,alt:""},null,8,E),e("div",H,[e("span",N,o(s.name),1),e("span",P,o(s.email),1)])])),64))])])]),D])])]))}};export{Q as default};
