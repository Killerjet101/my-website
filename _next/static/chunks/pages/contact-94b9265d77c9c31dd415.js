(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{8776:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var a=r(7294),n=r(8464),s=r(266),o=r(809),i=r.n(o),l=r(9669),c=r.n(l),d=r(9352),u=r(1707),m=r(5893),x=function(){var e=(0,a.useRef)(""),t=(0,a.useRef)(""),r=(0,a.useState)(!1),n=r[0],o=r[1],l=(0,a.useState)(""),x=l[0],h=l[1],g=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),b=function(){var r=(0,s.Z)(i().mark((function r(){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(""!=e.current&&""!=t.current){r.next=2;break}return r.abrupt("return",h("Please fill out all fields!"));case 2:if(g.test(e.current)){r.next=4;break}return r.abrupt("return",h("Hmm, that doesn't look like an email."));case 4:return o(!0),r.next=7,c().post("/api/send",{email:e.current,message:t.current});case 7:if("FIELD_EMPTY"!==(a=r.sent).data.result){r.next=10;break}return r.abrupt("return",h("Please fill out all fields!"));case 10:if("DISCORD_API_ERROR"!==a.data.result){r.next=12;break}return r.abrupt("return",h("Something went wrong..."));case 12:return o(!1),r.abrupt("return",h("Thanks for reaching out!"));case 14:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,m.jsxs)("div",{className:"md:col-span-2 row-span-3 bg-opacity-50 bg-white dark:bg-white/5 rounded-md p-4 border border-zinc-800/50",children:[(0,m.jsx)("h1",{className:"font-bold text-sm dark:text-slate-500 mb-1",children:"EMAIL"}),(0,m.jsx)("input",{placeholder:"example@gmail.com",type:"text",onChange:function(t){return e.current=t.target.value},className:"w-full p-2 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"}),(0,m.jsx)("h1",{className:"font-bold text-sm dark:text-slate-500 mb-1",children:"MESSAGE"}),(0,m.jsx)("textarea",{placeholder:"Hi Conrad, what's up?",onChange:function(e){return t.current=e.target.value},className:"w-full p-2 h-36 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"}),(0,m.jsxs)("div",{className:"w-full flex flex-row justify-between items-center",children:[(0,m.jsx)("p",{className:"text-gray-900 dark:text-gray-300 text-sm",children:x}),(0,m.jsxs)("button",{onClick:b,className:"border border-gray-800 hover:bg-gray-200 dark:border-indigo-600/80 dark:bg-indigo-600/70 dark:hover:bg-indigo-500/70 flex flex-row items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors duration-75",children:[(0,m.jsx)("span",{className:"mt-[2px]",children:"Send"}),!n&&(0,m.jsx)(d.vDu,{className:"ml-2"}),n&&(0,m.jsx)(u.Cd,{className:"w-4 h-4 ml-2 animate-spin"})]})]})]})},h=r(6311),g=r(6893),b=r(9920),f=r(1664),p=r(778),w=function(e,t){return[-(t-window.innerHeight/3)/35,(e-window.innerWidth/1.5)/30,1.05]},k=function(e,t,r){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(t,"deg) scale(").concat(r,")")},j=function(e){var t=e.name,r=e.description,a=e.icon,n=e.link,s=e.borderColor,o=(0,b.useSpring)((function(){return{xys:[0,0,1],config:{mass:1,tension:350,friction:40}}})),i=(0,h.Z)(o,2),l=i[0],c=i[1];return(0,m.jsx)(f.default,{href:n,passHref:!0,children:(0,m.jsxs)(b.animated.a,{target:"_blank",rel:"noreferrer noopener",onMouseMove:function(e){var t=e.clientX,r=e.clientY;return c({xys:w(t,r)})},onMouseLeave:function(){return c({xys:[0,0,1]})},style:{transform:l.xys.to(k)},className:(0,p.A)(s||"hover:border-white/50","shadow-white shadow-none hover:shadow-lg mb-4 row-start-3 flex flex-row items-center bg-opacity-50 bg-white dark:bg-white/5 rounded-md p-4 border border-zinc-800/50 cursor-pointer transition-colors duration-150"),children:[a,(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{className:"font-medium text-sm text-black/80 dark:text-slate-400 mx-3",children:t}),(0,m.jsx)("p",{className:"text-sm text-gray-800/70 dark:text-gray-100/70 mx-3",children:r})]}),(0,m.jsx)(g.AlO,{className:"w-5 h-5 text-gray-600"})]})})},y=r(7735),v=r(1770),N=function(){var e=(0,a.useState)("00:00:00 p.m."),t=e[0],r=e[1],n=(0,a.useState)(!0),s=n[0],o=n[1];function i(){var e=(new Date).toLocaleString("en-US",{timeZone:"America/Los_Angeles"});r("".concat(e.slice(-11,-6)).concat(e.slice(-3,-1),".M.")),setTimeout(i,6e4),(new Date).getHours()>=22&&o(!1),(new Date).getHours()<=6&&o(!1)}return(0,a.useEffect)((function(){i()}),[]),(0,m.jsxs)("p",{className:"text-black/50 dark:text-white/50 text-sm mb-10",children:["It's currently ",(0,m.jsx)("span",{className:"font-semibold text-black/60 dark:text-white/60",children:t})," for me, so I'm"," ",(0,m.jsx)("span",{className:"font-semibold text-black/60 dark:text-white/60",children:s?"probably awake":"sleeping"}),". I'll get back to you soon."]})},_={online:"bg-green-500",idle:"bg-yellow-500",dnd:"bg-red-500",offline:"bg-gray-500"},E=function(){var e=(0,n.qP)("224207524411211777").data;return(0,m.jsxs)(v.E.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{ease:"easeOut",duration:.15},className:"mt-36 w-full",children:[(0,m.jsx)("h1",{className:"text-black dark:text-white font-bold text-3xl mb-3 mt-8",children:"Let's chat \ud83d\udcac"}),(0,m.jsx)("p",{className:"text-gray-800 dark:text-gray-200 mb-6",children:"Have an inquiry, or want to connect? Feel free to leave a message below, get in touch via Discord, or email. Any other way maybe be a risk of not getting a response. Just an fyi."}),(0,m.jsx)(N,{}),(0,m.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 md:gap-4 mb-20",children:[(0,m.jsx)(x,{}),(0,m.jsxs)("div",{className:"row-start-1 md:row-auto",children:[(0,m.jsx)(j,{name:e?(0,m.jsxs)("span",{children:[null===e||void 0===e?void 0:e.discord_user.username,"#",null===e||void 0===e?void 0:e.discord_user.discriminator,(0,m.jsx)("span",{className:"".concat(_[null===e||void 0===e?void 0:e.discord_status]," ml-1.5 h-2.5 w-2.5 inline-block rounded-full")})]}):null,description:"Discord",icon:(0,m.jsx)(y.Mqf,{className:"w-6 h-6 text-[#5865F2]"}),link:"https://discord.com/users/224207524411211777",borderColor:"hover:border-[#5865F2]/50"}),(0,m.jsx)(j,{name:"killerjet101",description:"Instagram",icon:(0,m.jsx)(y.Pno,{className:"w-6 h-6 text-gray-400"}),link:"https://www.instagram.com/killerjet101/",borderColor:"hover:border-gray-400/50"}),(0,m.jsx)(j,{name:"con.___.man",description:"Personal Instagram",icon:(0,m.jsx)(y.Pno,{className:"w-6 h-6 text-gray-400"}),link:"https://www.instagram.com/con.___.man/",borderColor:"hover:border-gray-400/50"}),(0,m.jsx)(j,{name:"Killerjet101",description:"Github",icon:(0,m.jsx)(y.pZu,{className:"w-6 h-6 text-gray-400"}),link:"https://github.com/Killerjet101",borderColor:"hover:border-gray-400/50"}),(0,m.jsx)(j,{name:"Kill3rjet101@gmail.com",description:"Email",icon:(0,m.jsx)(y.IeF,{className:"w-6 h-6 text-gray-400"}),link:"mailto:Kill3rjet101@gmail.com",borderColor:"hover:border-gray-400/50"})]})]})]})}},3038:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r(8776)}])}},function(e){e.O(0,[415,937,609,437,774,888,179],(function(){return t=3038,e(e.s=t);var t}));var t=e.O();_N_E=t}]);