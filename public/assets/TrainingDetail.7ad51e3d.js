import{a as m,c as u,f as t,aG as B,aH as A,aI as it,aJ as N,e as O,Q as d,K as ot,o as et,D as S,L as V,b as l,w,u as e,V as T,O as z,T as H,a8 as lt,a9 as Y,aa as rt,aB as dt,a7 as mt,t as h,M as q,N as Z,I as j,F as Q,r as ct,h as X,i as G}from"./vendor.46812002.js";import{P as K}from"./index.aeb1d6da.js";import{r as st}from"./CheckIcon.a1118165.js";import{r as D}from"./XMarkIcon.02a88101.js";import{r as ut}from"./TrashIcon.4072e08f.js";function ht(y,r){return m(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z","clip-rule":"evenodd"})])}function gt(y,r){return m(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z","clip-rule":"evenodd"})])}function R(y,r){return m(),u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[t("path",{"fill-rule":"evenodd",d:"M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"})])}var tt={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"halbe Minute",withPreposition:"halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},ft=function(r,g,i){var n,f=i!=null&&i.addSuffix?tt[r].withPreposition:tt[r].standalone;return typeof f=="string"?n=f:g===1?n=f.one:n=f.other.replace("{{count}}",String(g)),i!=null&&i.addSuffix?i.comparison&&i.comparison>0?"in "+n:"vor "+n:n},pt=ft,vt={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},xt={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},_t={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},yt={date:B({formats:vt,defaultWidth:"full"}),time:B({formats:xt,defaultWidth:"full"}),dateTime:B({formats:_t,defaultWidth:"full"})},wt=yt,bt={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},kt=function(r,g,i,n){return bt[r]},$t=kt,Mt={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},Tt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},I={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","M\xE4r","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},Pt={narrow:I.narrow,abbreviated:["Jan.","Feb.","M\xE4rz","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:I.wide},St={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},Dt={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},Ct={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},zt=function(r){var g=Number(r);return g+"."},Jt={ordinalNumber:zt,era:A({values:Mt,defaultWidth:"wide"}),quarter:A({values:Tt,defaultWidth:"wide",argumentCallback:function(r){return r-1}}),month:A({values:I,formattingValues:Pt,defaultWidth:"wide"}),day:A({values:St,defaultWidth:"wide"}),dayPeriod:A({values:Dt,defaultWidth:"wide",formattingValues:Ct,defaultFormattingWidth:"wide"})},Wt=Jt,At=/^(\d+)(\.)?/i,Nt=/\d+/i,Vt={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},Ht={any:[/^v/i,/^n/i]},Ft={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},Lt={any:[/1/i,/2/i,/3/i,/4/i]},jt={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},Ut={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Et={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},Bt={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},Qt={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},Rt={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},It={ordinalNumber:it({matchPattern:At,parsePattern:Nt,valueCallback:function(r){return parseInt(r)}}),era:N({matchPatterns:Vt,defaultMatchWidth:"wide",parsePatterns:Ht,defaultParseWidth:"any"}),quarter:N({matchPatterns:Ft,defaultMatchWidth:"wide",parsePatterns:Lt,defaultParseWidth:"any",valueCallback:function(r){return r+1}}),month:N({matchPatterns:jt,defaultMatchWidth:"wide",parsePatterns:Ut,defaultParseWidth:"any"}),day:N({matchPatterns:Et,defaultMatchWidth:"wide",parsePatterns:Bt,defaultParseWidth:"any"}),dayPeriod:N({matchPatterns:Qt,defaultMatchWidth:"wide",parsePatterns:Rt,defaultParseWidth:"any"})},Ot=It,Xt={code:"de",formatDistance:pt,formatLong:wt,formatRelative:$t,localize:Wt,match:Ot,options:{weekStartsOn:1,firstWeekContainsDate:4}},Kt=Xt;const Yt={"aria-live":"assertive",class:"z-40 pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"},qt={class:"flex w-full flex-col items-center space-y-4 sm:items-end"},Zt={key:0,class:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},Gt={class:"p-4"},te={class:"flex items-start"},ee={class:"flex-shrink-0"},se=t("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[t("p",{class:"text-sm font-medium text-gray-900"},"Success"),t("p",{class:"mt-1 text-sm text-gray-500"},"Du hast das Training erfolgreich ge\xE4ndert.")],-1),ae={class:"ml-4 flex flex-shrink-0"},ne=t("span",{class:"sr-only"},"Close",-1),ie={"aria-live":"assertive",class:"z-40 pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"},oe={class:"flex w-full flex-col items-center space-y-4 sm:items-end"},le={key:0,class:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},re={class:"p-4"},de={class:"flex items-start"},me={class:"flex-shrink-0"},ce=t("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[t("p",{class:"text-sm font-medium text-gray-900"},"Achtung"),t("p",{class:"mt-1 text-sm text-gray-500"}," Du kannst die Anwesenheit nicht \xE4ndern, das Training hat noch nicht begonnen. ")],-1),ue={class:"ml-4 flex flex-shrink-0"},he=t("span",{class:"sr-only"},"Close",-1),ge={"aria-live":"assertive",class:"z-40 pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"},fe={class:"flex w-full flex-col items-center space-y-4 sm:items-end"},pe={key:0,class:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},ve={class:"p-4"},xe={class:"flex items-start"},_e={class:"flex-shrink-0"},ye=t("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[t("p",{class:"text-sm font-medium text-gray-900"},"Fehler"),t("p",{class:"mt-1 text-sm text-gray-500"}," Es gab leider einen Fehler beim \xE4ndern der Anwesenheit. ")],-1),we={class:"ml-4 flex flex-shrink-0"},be=t("span",{class:"sr-only"},"Close",-1),ke=t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),$e={class:"fixed inset-0 z-10 overflow-y-auto"},Me={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},Te={class:"sm:flex sm:items-start"},Pe={class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},Se={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},De=X("Training l\xF6schen"),Ce=t("div",{class:"mt-2"},[t("p",{class:"text-sm text-gray-500"}," Wenn du das Training l\xF6scht, kann dieses nicht wiederhergestellt werde. ")],-1),ze={class:"mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"},Je={class:"mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16 mt-5"},We={class:"overflow-hidden rounded-lg bg-white"},Ae={class:"divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x"},Ne={class:"divide-y divide-gray-200 lg:col-span-12 flex flex-col justify-center"},Ve={key:0,class:"overflow-hidden bg-white shadow sm:rounded-lg col-span-full mx-3 my-3"},He={class:"sm:flex sm:items-center"},Fe=t("div",{class:"sm:flex-auto p-4"},[t("h1",{class:"text-xl font-semibold text-gray-900"},"Trainings Info"),t("p",{class:"mt-2 text-sm text-gray-700"}," Hier siehst du alle Informationen zu diesem Training ")],-1),Le={class:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none p-4"},je=X(" Bearbeiten "),Ue=X(" L\xF6schen "),Ee={class:"border-t border-gray-200 px-4 py-5 sm:p-0"},Be={class:"sm:divide-y sm:divide-gray-200"},Qe={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},Re=t("dt",{class:"text-sm font-medium text-gray-500"},"Titel",-1),Ie={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},Oe={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},Xe=t("dt",{class:"text-sm font-medium text-gray-500"},"Datum",-1),Ke={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},Ye={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},qe=t("dt",{class:"text-sm font-medium text-gray-500"},"Treffpunkt:",-1),Ze={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},Ge={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},ts=t("dt",{class:"text-sm font-medium text-gray-500"},"Start:",-1),es={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},ss={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},as=t("dt",{class:"text-sm font-medium text-gray-500"},"Ende:",-1),ns={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},is={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},os=t("dt",{class:"text-sm font-medium text-gray-500"},"Halle:",-1),ls={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},rs={key:1,class:"overflow-hidden bg-white shadow sm:rounded-lg col-span-full mx-3 my-3"},ds={class:"sm:flex sm:items-center"},ms=t("div",{class:"sm:flex-auto p-4"},[t("h1",{class:"text-xl font-semibold text-gray-900"},"Trainings Info"),t("p",{class:"mt-2 text-sm text-gray-700"}," Hier siehst du alle Informationen zu diesem Training ")],-1),cs={class:"mt-4 sm:mt-0 sm:ml-16 sm:flex-none p-4"},us={class:"border-t border-gray-200 px-4 py-5 sm:p-0"},hs={class:"sm:divide-y sm:divide-gray-200"},gs={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},fs=t("dt",{class:"text-sm font-medium text-gray-500"},"Titel",-1),ps={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},vs={class:"mt-1"},xs={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},_s=t("dt",{class:"text-sm font-medium text-gray-500"},"Datum",-1),ys={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},ws={class:"mt-1"},bs={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},ks=t("dt",{class:"text-sm font-medium text-gray-500"},"Treffpunkt:",-1),$s={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},Ms={class:"mt-1"},Ts={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},Ps=t("dt",{class:"text-sm font-medium text-gray-500"},"Start:",-1),Ss={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},Ds={class:"mt-1"},Cs={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},zs=t("dt",{class:"text-sm font-medium text-gray-500"},"Ende:",-1),Js={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},Ws={class:"mt-1"},As={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},Ns=t("dt",{class:"text-sm font-medium text-gray-500"},"Halle:",-1),Vs={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},Hs={class:"mt-1"},Fs={class:"mx-5"},Ls={class:"max-w-screen-xl px-4pb-6 sm:px-6 lg:px-10 lg:pb-16 mt-5 mx-auto"},js=t("h3",{class:"text-xl font-bold leading-6 text-gray-900"},"Statistik zum Training",-1),Us={class:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3"},Es={class:"overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"},Bs=t("dt",{class:"truncate text-sm font-medium text-gray-500"},"Anzahl an Spielern",-1),Qs={class:"mt-1 text-3xl font-semibold tracking-tight text-gray-900"},Rs={class:"overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"},Is=t("dt",{class:"truncate text-sm font-medium text-gray-500"},"Anzahl an Spielern (%)",-1),Os={class:"mt-1 text-3xl font-semibold tracking-tight text-gray-900"},Xs={class:"overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"},Ks=t("dt",{class:"truncate text-sm font-medium text-gray-500"},"Fehlende Spieler",-1),Ys={class:"mt-1 text-3xl font-semibold tracking-tight text-gray-900"},qs=t("br",null,null,-1),Zs={class:"mx-5"},Gs={class:"max-w-screen-xl px-4pb-6 sm:px-6 lg:px-10 lg:pb-16 mt-5 mx-auto"},ta=t("h1",{class:"text-xl font-bold"},"Anwesenheit:",-1),ea={class:"mt-8 flex flex-col"},sa={class:"-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"},aa={class:"inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"},na={class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},ia={class:"min-w-full divide-y divide-gray-300 mx-3"},oa=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"}," Name "),t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," Kommt ")])],-1),la={class:"divide-y divide-gray-200 bg-white"},ra={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6"},da={class:"flex items-center"},ma={class:"h-10 w-10 flex-shrink-0"},ca=["src"],ua={class:"ml-4"},ha={class:"font-medium text-gray-900"},ga={class:"text-gray-500"},fa={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},pa=["onClick"],va=["onClick"],xa={setup(y){K();const r=O(),g=r.currentRoute.value.params.id,i=d({}),n=d([]);let f=d(!1),x=d(!1),b=d(!1),C=d(!1),p=d(!1),v=d(!1),c=ot({titel:"",datum:null,treffpunkt:null,start:null,ende:null,halle:""}),F=d("00:00 Uhr"),L=d("00:00 Uhr"),U=d("00:00 Uhr");et(async()=>{const{data:o}=await S.get(`/getTrainingDetail/${g}`);i.value=o[0],F.value=`${i.value.trainingtreffpunkt.split(":")[0]}:${i.value.trainingtreffpunkt.split(":")[1]} Uhr`,L.value=`${i.value.trainingbeginn.split(":")[0]}:${i.value.trainingbeginn.split(":")[1]} Uhr`,U.value=`${i.value.trainingende.split(":")[0]}:${i.value.trainingende.split(":")[1]} Uhr`,console.log(i.value);const{data:s}=await S.get(`/getTrainingDetailSpieler/${g}`);n.value=s;let a=new Date,M=new Date(i.value.trainingdatum.split("-")[0],i.value.trainingdatum.split("-")[1]-1,Number(i.value.trainingdatum.split("-")[2].substring(0,2))+1,i.value.trainingtreffpunkt.split(":")[0],i.value.trainingtreffpunkt.split(":")[1],i.value.trainingtreffpunkt.split(":")[2]);console.log(`Jetzt: ${a.toDateString()} ${a.getHours()}:${a.getMinutes()}`),console.log(`Training: ${M.toDateString()} ${M.getHours()}:${M.getMinutes()}`),a>M?(console.log("\xC4ndern ok"),C.value=!0):(console.log("\xC4ndern nicht ok"),C.value=!1)});async function J(o,s){if(C.value){n.value.forEach(a=>{a.s_id==s&&(a.kommt=o)});try{await S.patch(`changeAnwesenheit/${g}/${s}`,{kommt:o})}catch(a){a.value=!0,setTimeout(()=>a.value=!1,3e3),console.log(a)}}else f.value=!0,setTimeout(()=>f.value=!1,3e3),console.log("Darf nicht \xE4ndern, das Training hat noch nd begonnen")}async function _(){try{const o=new Date(c.datum);o.setHours(12),c.datum=o,console.log(c),await S.patch(`/changeTraining/${g}`,{state:c}),b.value=!0,p.value=!1,setTimeout(()=>b.value=!1,3e3),window.location.reload()}catch(o){console.log(o)}}async function k(){try{const o=await S.delete(`/delTraining/${g}`);r.go(-1)}catch(o){console.log(o)}}const $=V(()=>{let o=new Date(i.value.trainingdatum),s=o.getDate(),a=o.toLocaleString("de-de",{weekday:"long"}),M=o.toLocaleString("de-de",{month:"long"}),E=o.toLocaleString("de-de",{year:"numeric"});return`${a}, ${s}. ${M} ${E}`});let P=V(()=>{let o=0;return n.value.forEach(s=>{s.kommt&&(o+=1)}),o}),W=V(()=>{let o=0;return n.value.forEach(s=>{s.kommt&&(o+=1)}),Math.floor(o/n.value.length*100)}),at=V(()=>{let o=0;return n.value.forEach(s=>{s.kommt||(o+=1)}),o});const nt=o=>{const s=o.getDate(),a=o.getMonth()+1,M=o.getFullYear();return`${s}.${a}.${M}`};return(o,s)=>(m(),u(Q,null,[t("div",Yt,[t("div",qt,[l(H,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:w(()=>[e(b)?(m(),u("div",Zt,[t("div",Gt,[t("div",te,[t("div",ee,[l(e(st),{class:"h-6 w-6 text-green-500","aria-hidden":"true"})]),se,t("div",ae,[t("button",{type:"button",onClick:s[0]||(s[0]=a=>T(b)?b.value=!1:b=!1),class:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},[ne,l(e(D),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):z("",!0)]),_:1})])]),t("div",ie,[t("div",oe,[l(H,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:w(()=>[e(f)?(m(),u("div",le,[t("div",re,[t("div",de,[t("div",me,[l(e(R),{class:"h-6 w-6 text-orange-500","aria-hidden":"true"})]),ce,t("div",ue,[t("button",{type:"button",onClick:s[1]||(s[1]=a=>T(f)?f.value=!1:f=!1),class:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},[he,l(e(D),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):z("",!0)]),_:1})])]),t("div",ge,[t("div",fe,[l(H,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:w(()=>[e(x)?(m(),u("div",pe,[t("div",ve,[t("div",xe,[t("div",_e,[l(e(D),{class:"h-6 w-6 text-red-600","aria-hidden":"true"})]),ye,t("div",we,[t("button",{type:"button",onClick:s[2]||(s[2]=a=>T(x)?x.value=!1:x=!1),class:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},[be,l(e(D),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):z("",!0)]),_:1})])]),l(e(mt),{as:"template",show:e(v)},{default:w(()=>[l(e(lt),{as:"div",class:"relative z-10",onClose:s[4]||(s[4]=a=>T(v)?v.value=!0:v=!0)},{default:w(()=>[l(e(Y),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:w(()=>[ke]),_:1}),t("div",$e,[t("div",Me,[l(e(Y),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:w(()=>[l(e(rt),{class:"relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"},{default:w(()=>[t("div",Te,[t("div",Pe,[l(e(R),{class:"h-6 w-6 text-red-600","aria-hidden":"true"})]),t("div",Se,[l(e(dt),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:w(()=>[De]),_:1}),Ce])]),t("div",ze,[t("button",{type:"button",class:"inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",onClick:k}," L\xF6schen "),t("button",{type:"button",class:"mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm",onClick:s[3]||(s[3]=a=>T(v)?v.value=!1:v=!1),ref:"cancelButtonRef"}," Cancel ",512)])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]),t("div",null,[t("div",Je,[t("div",We,[t("div",Ae,[t("div",Ne,[e(p)?(m(),u("div",rs,[t("div",ds,[ms,t("div",cs,[t("button",{onClick:s[7]||(s[7]=a=>T(p)?p.value=!1:p=!1),type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-gray-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-500 focus:outline-none"}," Cancle ")])]),t("div",us,[t("dl",hs,[t("div",gs,[fs,t("dd",ps,[t("div",vs,[q(t("input",{type:"text",name:"titel",id:"titel","onUpdate:modelValue":s[8]||(s[8]=a=>e(c).titel=a),class:"block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"},null,512),[[Z,e(c).titel]])])])]),t("div",xs,[_s,t("dd",ys,[t("div",ws,[l(e(j),{id:"date",modelValue:e(c).datum,"onUpdate:modelValue":s[9]||(s[9]=a=>e(c).datum=a),"format-locale":e(Kt),format:nt},null,8,["modelValue","format-locale"])])])]),t("div",bs,[ks,t("dd",$s,[t("div",Ms,[l(e(j),{modelValue:e(c).treffpunkt,"onUpdate:modelValue":s[10]||(s[10]=a=>e(c).treffpunkt=a),timePicker:"","model-type":"timestamp"},null,8,["modelValue"])])])]),t("div",Ts,[Ps,t("dd",Ss,[t("div",Ds,[l(e(j),{modelValue:e(c).start,"onUpdate:modelValue":s[11]||(s[11]=a=>e(c).start=a),timePicker:"","model-type":"timestamp"},null,8,["modelValue"])])])]),t("div",Cs,[zs,t("dd",Js,[t("div",Ws,[l(e(j),{modelValue:e(c).ende,"onUpdate:modelValue":s[12]||(s[12]=a=>e(c).ende=a),timePicker:"","model-type":"timestamp"},null,8,["modelValue"])])])]),t("div",As,[Ns,t("dd",Vs,[t("div",Hs,[q(t("input",{type:"text",name:"halle",id:"halle","onUpdate:modelValue":s[13]||(s[13]=a=>e(c).halle=a),class:"block w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"},null,512),[[Z,e(c).halle]])])])])])]),t("div",{class:"flex justify-end mx-6 my-4"},[t("button",{onClick:_,type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"}," Save ")])])):(m(),u("div",Ve,[t("div",He,[Fe,t("div",Le,[t("button",{onClick:s[5]||(s[5]=a=>T(p)?p.value=!0:p=!0),type:"button",class:"inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none"},[l(e(gt),{class:"-ml-1 mr-2 h-5 w-5","aria-hidden":"true"}),je]),t("button",{onClick:s[6]||(s[6]=a=>T(v)?v.value=!0:v=!0),type:"button",class:"ml-2 inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none"},[l(e(ut),{class:"-ml-1 mr-2 h-5 w-5","aria-hidden":"true"}),Ue])])]),t("div",Ee,[t("dl",Be,[t("div",Qe,[Re,t("dd",Ie,h(i.value.titel),1)]),t("div",Oe,[Xe,t("dd",Ke,h(e($)),1)]),t("div",Ye,[qe,t("dd",Ze,h(i.value.trainingtreffpunkt),1)]),t("div",Ge,[ts,t("dd",es,h(i.value.trainingbeginn),1)]),t("div",ss,[as,t("dd",ns,h(i.value.trainingende),1)]),t("div",is,[os,t("dd",ls,h(i.value.wo),1)])])])]))])])])]),t("div",Fs,[t("div",Ls,[t("div",null,[js,t("dl",Us,[t("div",Es,[Bs,t("dd",Qs,h(e(P)),1)]),t("div",Rs,[Is,t("dd",Os,h(e(W))+"% ",1)]),t("div",Xs,[Ks,t("dd",Ys,h(e(at)),1)])])])])]),qs,t("div",Zs,[t("div",Gs,[ta,t("div",ea,[t("div",sa,[t("div",aa,[t("div",na,[t("table",ia,[oa,t("tbody",la,[(m(!0),u(Q,null,ct(n.value,(a,M)=>(m(),u("tr",{key:M},[t("td",ra,[t("div",da,[t("div",ma,[t("img",{class:"h-10 w-10 rounded-full",src:a.avatarpath,alt:""},null,8,ca)]),t("div",ua,[t("div",ha,h(a.vorname)+" "+h(a.nachname),1),t("div",ga,h(a.email),1)])])]),t("td",fa,[a.kommt?(m(),u("span",{key:0,onClick:E=>J(!1,a.s_id),class:"cursor-pointer inline-flex rounded-full bg-green-500 px-2 text-xs font-semibold leading-5 text-white"},"Ja",8,pa)):(m(),u("span",{key:1,onClick:E=>J(!0,a.s_id),class:"cursor-pointer inline-flex rounded-full bg-red-600 px-2 text-xs font-semibold leading-5 text-white"},"Nein",8,va))])]))),128))])])])])])])])])])],64))}},_a={"aria-live":"assertive",class:"z-40 pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"},ya={class:"flex w-full flex-col items-center space-y-4 sm:items-end"},wa={key:0,class:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},ba={class:"p-4"},ka={class:"flex items-start"},$a={class:"flex-shrink-0"},Ma=t("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[t("p",{class:"text-sm font-medium text-gray-900"},"Achtung"),t("p",{class:"mt-1 text-sm text-gray-500"}," Du kannst deine Anwesenheit nicht \xE4ndern, das Training hat schon begonnen ")],-1),Ta={class:"ml-4 flex flex-shrink-0"},Pa=t("span",{class:"sr-only"},"Close",-1),Sa={"aria-live":"assertive",class:"z-40 pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"},Da={class:"flex w-full flex-col items-center space-y-4 sm:items-end"},Ca={key:0,class:"pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},za={class:"p-4"},Ja={class:"flex items-start"},Wa={class:"flex-shrink-0"},Aa=t("div",{class:"ml-3 w-0 flex-1 pt-0.5"},[t("p",{class:"text-sm font-medium text-gray-900"},"Fehler"),t("p",{class:"mt-1 text-sm text-gray-500"}," Es gab leider einen Fehler beim \xE4ndern der Anwesenheit. ")],-1),Na={class:"ml-4 flex flex-shrink-0"},Va=t("span",{class:"sr-only"},"Close",-1),Ha={class:"mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16 mt-5"},Fa={class:"overflow-hidden rounded-lg bg-white"},La={class:"divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x"},ja={class:"divide-y divide-gray-200 lg:col-span-12 flex flex-col justify-center"},Ua={class:"overflow-hidden bg-white shadow sm:rounded-lg col-span-full mx-3 my-3"},Ea=t("div",{class:"px-4 py-5 sm:px-6"},[t("h3",{class:"text-lg font-medium leading-6 text-gray-900"},"Trainings Info Spieler"),t("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"}," Hier siehst du alle Informationen zu diesem Training ")],-1),Ba={class:"border-t border-gray-200 px-4 py-5 sm:p-0"},Qa={class:"sm:divide-y sm:divide-gray-200"},Ra={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},Ia=t("dt",{class:"text-sm font-medium text-gray-500"},"Titel",-1),Oa={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},Xa={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},Ka=t("dt",{class:"text-sm font-medium text-gray-500"},"Datum",-1),Ya={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},qa={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},Za=t("dt",{class:"text-sm font-medium text-gray-500"},"Treffpunkt:",-1),Ga={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},tn={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},en=t("dt",{class:"text-sm font-medium text-gray-500"},"Start:",-1),sn={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},an={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},nn=t("dt",{class:"text-sm font-medium text-gray-500"},"Ende:",-1),on={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},ln={class:"py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"},rn=t("dt",{class:"text-sm font-medium text-gray-500"},"Halle:",-1),dn={class:"mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"},mn={class:"flex justify-center"},cn={role:"list",class:"grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 shadow-xl"},un={class:"col-span-2 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"},hn=t("div",{class:"flex flex-1 flex-col p-8"},[t("h3",{class:"mt-6 text-sm font-medium text-gray-900"},"Kommst du zu diesem Training?")],-1),gn={key:0,class:"-mt-px flex divide-x divide-gray-200"},fn={class:"flex w-0 flex-1"},pn=t("span",{class:"ml-3 text-white"},"Ja",-1),vn={key:1,class:"-mt-px flex divide-x divide-gray-200"},xn={class:"flex w-0 flex-1"},_n=t("span",{class:"ml-3 text-white"},"Nein",-1),yn={setup(y){const r=O(),g=K(),i=r.currentRoute.value.params.id,n=d({}),f=d([]);let x=d(!0),b=d({}),C=d(!1),p=d(!1),v=d(!1),c=d("00:00 Uhr"),F=d("00:00 Uhr"),L=d("00:00 Uhr");et(async()=>{const{data:_}=await S.get(`/getTrainingDetail/${i}`);n.value=_[0],c.value=`${n.value.trainingtreffpunkt.split(":")[0]}:${n.value.trainingtreffpunkt.split(":")[1]} Uhr`,F.value=`${n.value.trainingbeginn.split(":")[0]}:${n.value.trainingbeginn.split(":")[1]} Uhr`,L.value=`${n.value.trainingende.split(":")[0]}:${n.value.trainingende.split(":")[1]} Uhr`,console.log(n.value);const{data:k}=await S.get(`/getTrainingDetailSpieler/${i}`);f.value=k,b.value=f.value.find(W=>g.getAktivenUser.data.s_id==W.s_id),x.value=b.value.kommt;let $=new Date,P=new Date(n.value.trainingdatum.split("-")[0],n.value.trainingdatum.split("-")[1]-1,Number(n.value.trainingdatum.split("-")[2].substring(0,2))+1,n.value.trainingtreffpunkt.split(":")[0],n.value.trainingtreffpunkt.split(":")[1],n.value.trainingtreffpunkt.split(":")[2]);console.log(`Jetzt: ${$.toDateString()} ${$.getHours()}:${$.getMinutes()}`),console.log(`Training: ${P.toDateString()} ${P.getHours()}:${P.getMinutes()}`),$<P?(console.log("\xC4ndern ok"),C.value=!0):(console.log("\xC4ndern nicht ok"),C.value=!1)});const U=V(()=>{let _=new Date(n.value.trainingdatum),k=_.getDate(),$=_.toLocaleString("de-de",{weekday:"long"}),P=_.toLocaleString("de-de",{month:"long"}),W=_.toLocaleString("de-de",{year:"numeric"});return`${$}, ${k}. ${P} ${W}`});async function J(){if(C.value){x.value?x.value=!1:x.value=!0,console.log(x.value);try{await S.patch(`/changeSpielerKommt/${b.value.s_id}`,{kommt:x.value,train_id:i})}catch(_){_.value=!0,setTimeout(()=>_.value=!1,3e3),console.log(_)}}else p.value=!0,setTimeout(()=>p.value=!1,3e3),console.log("Darf nicht \xE4ndern, das Training hat schon begonnen")}return(_,k)=>(m(),u(Q,null,[t("div",_a,[t("div",ya,[l(H,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:w(()=>[e(p)?(m(),u("div",wa,[t("div",ba,[t("div",ka,[t("div",$a,[l(e(R),{class:"h-6 w-6 text-orange-500","aria-hidden":"true"})]),Ma,t("div",Ta,[t("button",{type:"button",onClick:k[0]||(k[0]=$=>T(p)?p.value=!1:p=!1),class:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},[Pa,l(e(D),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):z("",!0)]),_:1})])]),t("div",Sa,[t("div",Da,[l(H,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:w(()=>[e(v)?(m(),u("div",Ca,[t("div",za,[t("div",Ja,[t("div",Wa,[l(e(D),{class:"h-6 w-6 text-red-600","aria-hidden":"true"})]),Aa,t("div",Na,[t("button",{type:"button",onClick:k[1]||(k[1]=$=>T(v)?v.value=!1:v=!1),class:"inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"},[Va,l(e(D),{class:"h-5 w-5","aria-hidden":"true"})])])])])])):z("",!0)]),_:1})])]),t("div",Ha,[t("div",Fa,[t("div",La,[t("div",ja,[t("div",Ua,[Ea,t("div",Ba,[t("dl",Qa,[t("div",Ra,[Ia,t("dd",Oa,h(n.value.titel),1)]),t("div",Xa,[Ka,t("dd",Ya,h(e(U)),1)]),t("div",qa,[Za,t("dd",Ga,h(e(c)),1)]),t("div",tn,[en,t("dd",sn,h(e(F)),1)]),t("div",an,[nn,t("dd",on,h(e(L)),1)]),t("div",ln,[rn,t("dd",dn,h(n.value.wo),1)])])])])])])])]),t("div",mn,[t("ul",cn,[t("li",un,[hn,t("div",null,[e(x)?(m(),u("div",gn,[t("div",fn,[t("p",{onClick:J,class:"cursor-pointer relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-b-lg border border-transparent py-4 text-sm font-medium bg-green-500"},[l(e(st),{class:"h-5 w-5 text-white","aria-hidden":"true"}),pn])])])):z("",!0),e(x)?z("",!0):(m(),u("div",vn,[t("div",xn,[t("p",{onClick:J,class:"cursor-pointer relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-b-lg border border-transparent py-4 text-sm font-medium bg-red-600"},[l(e(D),{class:"h-5 w-5 text-white","aria-hidden":"true"}),_n])])]))])])])])],64))}},wn={class:"bg-lime-500 relative z-10"},bn={class:"mx-auto max-w-7xl px-2 sm:px-4 lg:px-8"},kn=t("p",{class:"text-black text-lg ml-2"},"Back",-1),Dn={setup(y){const r=O(),g=K();return r.currentRoute.value.params.id,(i,n)=>(m(),u("div",null,[t("nav",wn,[t("div",bn,[t("div",{class:"relative flex h-16 items-center",onClick:n[0]||(n[0]=f=>e(r).go("-1"))},[l(e(ht),{class:"w-10 h-10 text-black"}),kn])])]),e(g).getAktivenUser.type=="Trainer"?(m(),G(xa,{key:0})):(m(),G(yn,{key:1}))]))}};export{Dn as default};
