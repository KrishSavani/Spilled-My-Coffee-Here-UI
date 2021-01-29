(this["webpackJsonpbasic-layout"]=this["webpackJsonpbasic-layout"]||[]).push([[0],{20:function(e,t,l){},21:function(e,t,l){},27:function(e,t,l){"use strict";l.r(t);var n=l(0),s=l(1),c=l.n(s),r=l(12),o=l.n(r),a=(l(20),l(21),l(3)),i=function(){return Object(n.jsxs)("nav",{className:"flex justify-between items-center h-16 bg-white text-black\r relative shadow-sm font-mono",role:"navigation",children:[Object(n.jsx)(a.b,{to:"/",className:"pl-8",children:"Hack Club"}),Object(n.jsx)("div",{className:"pbnx-4 cursor-pointer md:hidden",children:Object(n.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),Object(n.jsxs)("div",{className:"pr-8 md:block hidden",children:[Object(n.jsx)(a.b,{className:"p-4",to:"/",children:"Home"}),Object(n.jsx)(a.b,{className:"p-4",to:"/",children:"About"}),Object(n.jsx)(a.b,{className:"p-4",to:"/",children:"Leaderboard"})]})]})},f=function(){return Object(n.jsxs)("div",{className:"bg-white h-screen \r flex flex-col justify-center items-center",children:[Object(n.jsx)("h1",{className:"lg:text-9xl ms:text-7xl sm:text-5xl \r text-3xl font-black mb-14",children:"Background Image"}),Object(n.jsx)(a.b,{className:"py-6 px-10 bg-green-500 rounded-full text-3xl items-center hover:bg-green-300",children:"Join Now Discord"})]})},b=function(){return Object(n.jsx)("div",{className:"bg-white h-screen \r flex flex-col justify-center items-center",children:Object(n.jsx)("h1",{className:"lg:text-9xl ms:text-7xl sm:text-5xl \r text-3xl font-black mb-14",children:"About Section"})})},d=l(10),x=l(5),j=l(14),m=l.n(j),u={container:{backgroundColor:"#232323",color:"white"},titleContainer:{borderBottom:"1px solid #f20089",color:"#f20089"},info:{fontSize:"1.5em",textAlign:"center"},name:{fontSize:"1.3em",textAlign:"center",textTransform:"uppercase"},level:{fontSize:"0.75em",textTransform:"uppercase"}},h=function(e){var t=e.data,l=t.rank,s=t.fullName,c=t.level,r=t.points,o=m()({"container w-11/12 sm:w-8/12 h-20 my-2 mx-auto flex flex-row justify-evenly items-center shadow-xl":!0,"w-full sm:w-full mt-0  h-24 bg-black ":"RANK"===l,"sm:w-11/12 h-28":"1"===l,"sm:w-10/12 h-24":"2"===l,"sm:w-9/12 h-20":"3"===l});return Object(n.jsxs)("div",{className:o,style:"RANK"===l?u.titleContainer:u.container,children:[Object(n.jsx)("h6",{style:u.info,children:l}),Object(n.jsxs)("div",{className:"container w-2/6 flex flex-col items-center",children:[Object(n.jsx)("h6",{style:u.name,children:s}),Object(n.jsxs)("p",{style:u.level,children:[" ",c]})]}),Object(n.jsx)("h6",{style:u.info,children:r})]})},p={container:{backgroundColor:"#000",border:"2px dotted #f20089"},title:{color:" #f20089",textTransform:"uppercase"},textContainer:{border:"4px dotted #f20089",borderRightStyle:"none",borderLeftStyle:"none"},searchBox:{backgroundColor:"#121212",color:"#f20089",borderTopStyle:"none"}},v=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),l=(t[0],t[1]),c=Object(s.useState)(x),r=Object(d.a)(c,2),o=r[0],a=r[1];return Object(n.jsxs)("div",{className:"bg-black h-full flex flex-col justify-center items-center",children:[Object(n.jsx)("div",{className:"w-8/12 flex justify-center py-5 mt-3 mb-16",style:p.textContainer,children:Object(n.jsx)("h1",{className:"text-4xl font-extrabold",style:p.title,children:"Leaderboard"})}),Object(n.jsxs)("div",{className:"w-full h-screen flex flex-col justify-center items-center",children:[Object(n.jsx)("div",{class:"shadow flex w-full md:w-8/12 mb-5",style:p.searchBox,children:Object(n.jsx)("input",{class:"w-full p-3",type:"text",placeholder:"Search...",style:p.searchBox,onChange:function(e){return function(e){if(e){var t=x.filter((function(t){var l=t.fullName?t.fullName.toUpperCase():"".toUpperCase(),n=e.toUpperCase();return l.indexOf(n)>-1}));a(t),l(e)}else a(x),l(e)}(e.target.value)}})}),Object(n.jsxs)("div",{className:"container w-full lg:w-8/12 h-screen mb-10 flex-grow overflow-y-auto overscroll-contain",style:p.container,children:[Object(n.jsx)("div",{className:"sticky top-0 z-50",children:Object(n.jsx)(h,{data:{rank:"RANK",fullName:"NAME",level:"LEVEL",points:"POINTS"}})}),o.map((function(e){return Object(n.jsx)(h,{data:e},e.rank)}))]})]})]})},N=function(){return Object(n.jsx)("div",{className:"flex justify-center items-center h-16 \r bg-black text-white",children:Object(n.jsx)("p",{children:"Footer"})})};var O=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(i,{}),Object(n.jsx)(f,{}),Object(n.jsx)(b,{}),Object(n.jsx)(v,{}),Object(n.jsx)(N,{})]})},w=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,28)).then((function(t){var l=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;l(e),n(e),s(e),c(e),r(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(a.a,{children:Object(n.jsx)(O,{})})}),document.getElementById("root")),w()},5:function(e){e.exports=JSON.parse('[{"rank":"1","fullName":"abc def","level":"elite","points":"1001"},{"rank":"2","fullName":"lmn","level":"elite","points":"899"},{"rank":"3","fullName":"xyz","level":"elite","points":"895"},{"rank":"4","fullName":"qwe","level":"noob","points":"700"},{"rank":"5","fullName":"def","level":"noob","points":"675"},{"rank":"6","fullName":"def","level":"noob","points":"675"},{"rank":"7","fullName":"def","level":"noob","points":"675"},{"rank":"8","fullName":"def","level":"noob","points":"675"},{"rank":"9","fullName":"def","level":"noob","points":"675"},{"rank":"10","fullName":"def","level":"noob","points":"675"},{"rank":"11","fullName":"def","level":"noob","points":"675"},{"rank":"12","fullName":"def","level":"noob","points":"675"},{"rank":"13","fullName":"def","level":"noob","points":"675"},{"rank":"14","fullName":"def","level":"noob","points":"675"},{"rank":"15","fullName":"def","level":"noob","points":"675"}]')}},[[27,1,2]]]);
//# sourceMappingURL=main.4dc059a0.chunk.js.map