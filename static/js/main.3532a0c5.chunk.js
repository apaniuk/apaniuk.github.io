(this.webpackJsonpapaniuk=this.webpackJsonpapaniuk||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);n(73),n(74),n(75),n(76);var r=n(0),i=n.n(r),o=n(55),a=n.n(o),c=n(38),s=n(41),d=(n(83),n(6)),l=n(134),x=n(139),b=n(140),j=n(141),p=n(130),u=n(131),f=n(132),h=n(58),O=n.n(h),g=n(10),m=n(23),v=n(12),A=n(1),w=function(e){var t=e.children,n=e.disabled,i=void 0!==n&&n,o=e.duration,a=void 0===o?1e3:o,c=e.glitchId,s=e.iterationCount,d=void 0===s?"infinite":s,l=e.onHover,x=void 0!==l&&l,b=e.onMouseEnter,j=e.onMouseLeave,p=e.restCssVarList,u=void 0===p?"[]":p,f=Object(m.a)(e,["children","disabled","duration","glitchId","iterationCount","onHover","onMouseEnter","onMouseLeave","restCssVarList"]),h=Object(r.useRef)(null),O=function(e,t){return{add:Object(r.useCallback)((function(){var n;return null===(n=e.current)||void 0===n||n.setAttribute("data-animation",t),e}),[]),remove:Object(r.useCallback)((function(){var t;return null===(t=e.current)||void 0===t||t.removeAttribute("data-animation"),e}),[])}}(h,c),w=function(e){var t=e.callbackEvents,n=e.onHover,i=e.toggleAnimation;return{handleOnMouseEnter:Object(r.useCallback)((function(e){return"function"===typeof t.onMouseEnter&&t.onMouseEnter(e),n&&i.add(),e}),[n,t.onMouseEnter]),handleOnMouseLeave:Object(r.useCallback)((function(e){return"function"===typeof t.onMouseEnter&&t.onMouseLeave(e),n&&i.remove(),e}),[n,t.onMouseLeave])}}({callbackEvents:{onMouseEnter:b,onMouseLeave:j},onHover:x,toggleAnimation:O}),y=w.handleOnMouseEnter,P=w.handleOnMouseLeave;return function(e,t){var n=t.disabled,i=t.onHover;Object(r.useEffect)((function(){n||i?e.remove():setTimeout(e.add,0)}),[n,i])}(O,{disabled:i,onHover:x}),function(e,t){var n=t.iterationCount,i=t.duration,o=void 0===i?0:i;Object(r.useEffect)((function(){var t;null===(t=e.current)||void 0===t||t.style.setProperty("--iteration-count",n)}),[n]),Object(r.useEffect)((function(){var t,n="".concat(o,"ms");null===(t=e.current)||void 0===t||t.style.setProperty("--duration",n)}),[o])}(h,{iterationCount:d,duration:a}),function(e,t){Object(r.useEffect)((function(){JSON.parse(t).forEach((function(t){var n,r=Object(v.a)(t,2),i=r[0],o=r[1];null===(n=e.current)||void 0===n||n.style.setProperty(i,o)}))}),[t])}(h,u),Object(A.jsx)("div",Object(g.a)(Object(g.a)({onMouseEnter:y,onMouseLeave:P},f),{},{children:Object(A.jsx)("div",{ref:h,style:{display:"inline-block"},children:Array.isArray(t)?[t[0],Object(r.cloneElement)(t[1],{rootRef:h,key:1})]:t})}))},y=Object(r.memo)(w),P=(n(85),function(e){var t=e.children,n=e.duration,r=void 0===n?3e3:n,i=Object(m.a)(e,["children","duration"]);return Object(A.jsx)(y,Object(g.a)(Object(g.a)({duration:r,glitchId:"glitch-clip"},i),{},{children:Object(A.jsx)(A.Fragment,{children:t})}))}),k=Object(r.memo)(P),S=(n(86),function(e){var t=e.children,n=e.color1,i=void 0===n?"rgba(77, 171, 245, .5)":n,o=e.color2,a=void 0===o?"rgba(245, 0, 87, .3)":o,c=e.duration,s=void 0===c?2e3:c,d=e.component,l=void 0===d?"span":d,x=Object(m.a)(e,["children","color1","color2","duration","component"]);return Object(A.jsx)(y,Object(g.a)(Object(g.a)({duration:s,glitchId:"glitch-text",restCssVarList:JSON.stringify([["--text-shadow-color-1",i],["--text-shadow-color-2",a]])},x),{},{children:Object(A.jsx)(A.Fragment,{children:Object(r.createElement)(l,null,t)})}))}),H=Object(r.memo)(S),B=function(){return Object(A.jsx)(l.a,{component:c.b,to:"/about",sx:{padding:0,boxShadow:"none"},variant:"outlined",children:Object(A.jsx)(k,{onHover:!0,children:Object(A.jsx)(x.a,{component:"span",sx:{padding:"6px 16px",display:"inline-block",fontSize:"1.2rem"},children:"More about me"})})})},E=function(){return Object(A.jsx)(x.a,{sx:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(A.jsx)(b.a,{sx:{display:"flex",flexDirection:"column",borderRadius:"0",padding:"30px 10px",border:"1px solid #f26b38",zIndex:1,position:"relative",width:"100%",transform:"skew(0deg, -10deg)",borderRight:"none",borderLeft:"none"},children:Object(A.jsxs)(x.a,{sx:{display:"flex",flexDirection:"column",position:"relative",textAlign:"center"},children:[Object(A.jsx)(k,{children:Object(A.jsxs)(H,{color1:"#f26b38",color2:"#6699ff",children:[Object(A.jsx)(j.a,{variant:"h2",textAlign:"center",fontWeight:700,sx:{cursor:"default",userSelect:"none"},children:"I'M"}),Object(A.jsx)(j.a,{variant:"h2",textAlign:"center",fontWeight:700,sx:{cursor:"default",userSelect:"none"},children:"ANDREW PANIUK"})]})}),Object(A.jsx)(j.a,{color:"text.secondary",textAlign:"center",sx:{cursor:"default",userSelect:"none"},children:Object(A.jsx)(x.a,{height:"30px",children:Object(A.jsx)(O.a,{loop:!1,typeSpeed:40,backSpeed:30,strings:["Web Developer.","Typescript &#183; ReactJS &#183; React Native.","NodeJS &#183; ExpressJS &#183; MongoDB &#183; GraphQL.","Based in Rivne.","Love simplicity.","Welcome to my website."]})})}),Object(A.jsx)(x.a,{textAlign:"center",pt:"30px",pb:"30px",children:Object(A.jsx)(B,{})}),Object(A.jsxs)(x.a,{sx:{display:"flex",lineHeight:1,justifyContent:"center",textAlign:"center"},children:[Object(A.jsx)(x.a,{padding:"0 5px",children:Object(A.jsx)("a",{href:"https://www.linkedin.com/in/andrewpaniuk/",target:"_blank",rel:"noopener noreferrer",children:Object(A.jsx)(p.a,{fontSize:"large"})})}),Object(A.jsx)(x.a,{padding:"0 5px",children:Object(A.jsx)("a",{href:"https://github.com/apaniuk",target:"_blank",rel:"noopener noreferrer",children:Object(A.jsx)(u.a,{fontSize:"large"})})}),Object(A.jsx)(x.a,{padding:"0 5px",children:Object(A.jsx)("a",{href:"https://www.instagram.com/andrew.paniuk/",target:"_blank",rel:"noopener noreferrer",children:Object(A.jsx)(f.a,{fontSize:"large"})})})]})]})})})},T=n(142),F=n(136),C=n(135),L=n(137),R=n(9),M=Object(R.a)(j.a)((function(e){var t=e.theme;return{textTransform:"uppercase",display:"inline-block",fontSize:"1.1rem",boxShadow:"inset 0 -6px 0px ".concat(t.colors.primary)}})),U=Object(R.a)((function(e){var t,n,r=e.children,i=Object(m.a)(e,["children"]);return Object(A.jsx)(x.a,Object(g.a)(Object(g.a)({},i),{},{children:Object(A.jsx)(k,{duration:(t=1,n=7,Math.floor(Math.random()*(n-t+1)+t)),children:Object(A.jsx)(M,{variant:"h5",children:r})})}))}))((function(){return{paddingBottom:"20px"}})),J=Object(R.a)(x.a)((function(){return{padding:"40px 0 0 0"}})),Q=function(e){var t=e.children,n=e.title;return Object(A.jsxs)(J,{component:"section",children:[n&&Object(A.jsx)(U,{children:n}),t]})},D=function(e){var t=e.items;return Object(A.jsx)(x.a,{component:"ul",color:"text.secondary",sx:{position:"relative",listStyle:"none",margin:0,marginLeft:"0",paddingLeft:"1.2em","& li::before":{content:'"-"',position:"absolute",left:0}},children:t.map((function(e,t){return Object(A.jsx)(x.a,{component:"li",children:Object(A.jsx)(j.a,{color:"text.secondary",children:e})},t)}))})},V=function(){return Object(A.jsx)(Q,{title:"about information",children:Object(A.jsx)(x.a,{sx:{display:"flex"},children:Object(A.jsx)(x.a,{children:Object(A.jsx)(j.a,{color:"text.secondary",children:"Hello! I\u2019m Andrew Paniuk. I am a highly competent Front-End Developer with 4+ years' experience building stable websites and apps in fast-paced, collaborative environments. Highly skilled in JavaScript/ReactJS/Typescript/MongoDB/GraphQL and working knowledge of React Native, NodeJS, C#, .NET, SQL. I am currently seeking long-term contract positions which will allow me to further professional growth."})})})})},I=function(){return Object(A.jsx)(Q,{title:"additional skills and proficiencies",children:Object(A.jsx)(D,{items:["Familiar with Agile and Scrum working methods.","JEST.","Confident building and optimising development processes.","Experience with user testing."]})})},X=function(){return Object(A.jsxs)(Q,{title:"personal interests",children:[Object(A.jsxs)(x.a,{component:"blockquote",mb:"10px",children:[Object(A.jsx)(j.a,{children:"\u0411\u044b\u0442\u044c \u043d\u0430 \u0440\u0430\u0441\u0441\u043b\u0430\u0431\u043e\u043d\u0435, \u043d\u0430 \u0447\u0438\u043b\u0435!"}),Object(A.jsx)("footer",{children:Object(A.jsx)(j.a,{children:"- Djigan"})})]}),Object(A.jsx)(D,{items:["Enduro/Motocross.","Traveling."]})]})},N=function(){return Object(A.jsx)(Q,{title:"core skills",children:Object(A.jsx)(D,{items:["Programming languages: javascript (typescript, reactJS, NodeJS), C#.","Database languages: GraphQL, MongoDB and SQL.","Building SPA with ReactJS.","Building server side with NodeJS or C# .NET.","Building mobile apps with React Native."]})})},G=n(66),W=function(e){var t=e.children,n=e.position,r=void 0===n?"right":n,i=Object(m.a)(e,["children","position"]);return Object(A.jsx)(G.Scrollbars,Object(g.a)(Object(g.a)({renderTrackVertical:function(e){return Object(A.jsx)("div",Object(g.a)(Object(g.a)({},e),{},{className:"scrollbars",style:Object(g.a)(Object(g.a)({},e.style),{},{height:"100%",right:"left"==r?"calc(100% - 4px)":0,width:"12px",paddingTop:"3px",paddingBottom:"3px",paddingLeft:"1px"})}))},renderThumbVertical:function(e){return Object(A.jsx)("div",Object(g.a)(Object(g.a)({},e),{},{className:"asdasd",style:Object(g.a)(Object(g.a)({},e.style),{},{zIndex:1299,backgroundColor:"#bbb",width:"8px",borderRadius:"10px",left:1})}))},universal:!0,autoHide:!0},i),{},{children:t}))},q=function(){return Object(A.jsx)(Q,{title:"soft skills",children:Object(A.jsx)(D,{items:["Communication.","Teamwork.","Approachability and Helpfulness.","Patience.","Problem solving.","Accountability.","Time management."]})})},z=function(){return Object(A.jsx)(Q,{title:"work expirience",children:Object(A.jsx)(x.a,{p:"0 10px",children:Object(A.jsx)(x.a,{sx:{display:"flex"},children:Object(A.jsxs)(x.a,{children:[Object(A.jsx)(j.a,{variant:"h6",sx:{fontSize:"1rem"},children:"RadiantRFID | Full Stack Developer"}),Object(A.jsx)(x.a,{sx:{paddingTop:"10px"},children:Object(A.jsx)(x.a,{sx:{borderLeft:"1px solid #f26b38",display:"inline-block",position:"relative",padding:"24px 10px 20px 10px","&::after":{content:'"01/10/2018 - present"',position:"absolute",display:"flex",alignItems:"center",height:"24px",top:-12,left:-1,backgroundColor:"#f26b38",padding:"2px 10px",color:"white"}},children:Object(A.jsx)(D,{items:["Used javascript \xb7 AngularJS \xb7 ReactJS \xb7 C# \xb7 ASP.NET \xb7 SQL to design and develop IoT Platform and web-based solutions, both front end and back end.","Trouble-shot and fixed threads and bugs.","Communicated with clients to provide knowledge and support, ensuring that their requirements were fully met."]})})})]})})})})},K=function(){return Object(A.jsx)(Q,{title:"education",children:Object(A.jsxs)(x.a,{p:"0 10px",children:[Object(A.jsx)(x.a,{sx:{display:"flex"},children:Object(A.jsxs)(x.a,{children:[Object(A.jsx)(j.a,{variant:"h6",sx:{fontSize:"1rem"},children:"IT Academy STEP"}),Object(A.jsx)(x.a,{sx:{paddingTop:"10px"},children:Object(A.jsx)(j.a,{color:"text.secondary",sx:{borderLeft:"1px solid #f26b38",display:"inline-block",position:"relative",padding:"24px 10px 20px 10px","&::after":{content:'"01/09/2017 - 01/09/2018"',position:"absolute",display:"flex",alignItems:"center",height:"24px",top:-12,left:-1,backgroundColor:"#f26b38",padding:"2px 10px",color:"white"}},children:"Graduated front-end courses."})})]})}),Object(A.jsx)(x.a,{sx:{display:"flex",paddingTop:"20px"},children:Object(A.jsxs)(x.a,{children:[Object(A.jsx)(j.a,{variant:"h6",sx:{fontSize:"1rem"},children:"WSZiA w Opolu"}),Object(A.jsx)(x.a,{sx:{paddingTop:"10px"},children:Object(A.jsx)(j.a,{color:"text.secondary",sx:{borderLeft:"1px solid #f26b38",display:"inline-block",position:"relative",padding:"24px 10px 20px 10px","&::after":{content:'"01/10/2013 - 01/08/2017"',position:"absolute",display:"flex",alignItems:"center",height:"24px",top:-12,left:-1,backgroundColor:"#f26b38",padding:"2px 10px",color:"white"}},children:"Graduated from the university with a degree in Enterprise Management and Logistics."})})]})})]})})},Z=function(){return Object(A.jsx)(Q,{title:"core skills",children:Object(A.jsx)(D,{items:["Ukrainian.","Russian.","Polish.","English."]})})},Y=function(){return Object(A.jsx)(x.a,{sx:{height:"100%",margin:"30px 0",overflow:"hidden"},children:Object(A.jsx)(T.a,{sx:{height:"100%"},children:Object(A.jsxs)(F.a,{container:!0,height:"100%",sx:{position:"relative",backgroundColor:"#28282F",overflow:"hidden",borderRadius:"10px",border:"1px solid #f26b38",padding:"10px"},children:[Object(A.jsx)(C.a,{mdDown:!0,children:Object(A.jsx)(F.a,{item:!0,md:3,children:Object(A.jsxs)(x.a,{sx:{position:"relative",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:"30px 15px",justifyContent:"space-between"},children:[Object(A.jsxs)(x.a,{width:"100%",children:[Object(A.jsx)(k,{children:Object(A.jsx)(L.a,{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABkAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD8qqKK2PCHhDV/HniKy0LQrGXUdUvJBHDbxDJJ9T6AdzSbSV2NJydluZMMMlxKkUSNLK5CqiDJYnoAO5r66/Zy/wCCZ/xR+OscGpXtsPCegOQftWoKRI49l/8A1kdxX3Z+yF/wTq8Hfs8eE28ffFBbfUdetbVr24F0uYLCNFLscewB469c9do4f45f8FLfEevSz6R8MbFPC+iKvlJqd1Er3sg6ZReUiGOMYZuhBXoMLzqbaL8f+B/Wx306CvZLmf4L/P5aepfH7CX7Ln7L0Ont8VPErarq8670trgSStIB1Pkxqx256MVUe9Wo/wBpn9lX4fvDbeGPhTd6hHEeLhLGKJPw3yZ/DaBXwxreuaj4k1W51PVr+51PUblzJPd3crSyyN6szEkmqVHsodVf11/M9KNJxXxP5aL8D9OvC37T37LHxCjNpqugweHCQG8vWtKCox9A8RcfmRXUXf7GX7Mf7QmkT3+g6Rot9E+A974fuVLxk9AxBJU+xwfpX5Ojk11vww+Kfif4OeLLbxH4V1OTTdRh+VsfNHOneORDw6n0PsRggEHsafSKJnSm17s383dH0X8cf+CMclvBcX/wz8RmZgCy6ZqXf0VWJ/Uk/Svzo+KnwY8Y/BfX5dI8XaHc6Tco5RXkQ+XJj+62PTnBwcEcV+537Pn7dfh74w6ULfUbKTTfE9nbedf6dChbeq/6ya35JkQD5mTh1GcBwC1er/EX4V/D39pnwK1prNnZa/pd1GRDexBWeP8A3WxwQf4T0PYEVOsXaDv5P9H/AMP8jzpw/wCfsbea/Vbfdb5n80lFfWH7bH7BviL9lzW5NTsFl1fwTcPmG/VSTBk8K/6c9uhzwT8n1vCamro5JwdN2f8Aw4UUUVZmPhhkuZkiiRpZZGCoiDLMTwAB3Nftp/wTR/Yms/g34LtfHniiyjm8X6rGJYFlXJtIjyMe/wD+vn5cfA//AATL/ZyT46fHq31DU7cy+H/DoF5PkcPID8q/55BZTX7WfEzx3D4KTw7o1oUi1LXNQg0+2VR/qoy6rJJj/ZVgB7sPQ1yVJxu3P4Y/i/6/H0O6lCVlGHxS/Bdfv1+S8z4W/wCCjn7Tl3q3iKb4V+HbuS30uwwdbkjO37VMQGWHPdEBBI7scH7tfCVdN8T9em8U/EnxXrE5Jmv9Vurpt3UF5WbH61zNdB69KmqcFFFvS9Mn1a8jtrdCzuwXj3OBX0j8Pv2ZNF1O3MurXFxOyYDiJ9oJx0H+P6V5L8E9ON/4rRiPkh/ek/QHH6la+xPh5KJLa5gLBSJFbJ7AjH9K+WznG1aDVOjK3Vnv4HDwnB1Jq4zwb+yR8OvEQubefR5lSNAfPS4k3ZPvux+ldDcf8EyfCviDTTcaZrGoaSzAmPzXEm70yCOle5+GNFTQtKSBJROWPmNIOhJ9PbgV7boSldGsgcj90uMkHjHHStMshVqK1Wbb9WeFmGKcJXpJJeiPyp1P9lLx/wDsx/FPwZ4lmf7fpMGuWarqViDhd0yrscc7dwJXng5x3wfafDvxN1f4PfEPWG0hw2nLfTRzacxIhlRZCAMfwkAcMOR7jivviaBLiPZIodchgGGcEHIP1BAP4V8A/HzwU3gb4oavaqu20u3N9benlyEnH4NuX/gNa5qqlKEKkXqnudOU1oYqc6VWK1W3ex9gFfCP7R/wwntrq3j1HRdSiaGe2mUF4HxgqQc4YZ+hB7g8/gx+2j+y5qX7LvxZu9GdHk0C8Zp9MusHa0efu5Pp/wDWySDX6afs/fFWT4Z+NIluZSND1BlhvUJ4Tssv1Unn2J9q9U/4KE/s62n7QHwC1byIEfXtHia+sZsc/KMkZ9Mc/TdjrXVhcWsRT9t9pfF6d/1+9HnY3BPC1fYfZlrF+fb9H8mfz8UU+eCS2mkhlRo5Y2KOjDBUg4INFeyeAfuH/wAEkPhVF4I/ZsTxDJEFvvEVy1wz9zGPufoQP+A1N8YPiJJq/wC0Lb3sb77XQtQgt4Fzx+6lBc/i+7n0xXv/AOzPpMfgT9mrwZbGIQpZaQsjoBjoCx/Svj7wTo58a+N4Y7ydooneW9u5wMkRxq0shHqSFIHuRXzGY1JKnShHeTv/AF959hldKLq1qk9oLl/T8l+J8a/FnRk8O/FTxlpUZJjsdZvLVSRgkJO6j+Vcqil3VR1JwK9t+N/wo8Ua14z8QeMrWyN/Z65qdzfmO2yz25llaTYw9t2M+3avG7DT7m+1GG0gjY3LuEVAOQ2fSvdpV6VaPNTkmiHSnTtGasz6E+Gui2PgvwimoXk0ULTrveaQgBV7DPv1/IdqTTf2k7HQtZb7Fpc99AQUZy+wH3wAaydL/Z+1HXbJDqGr3U7xLloII96xA9gSf5CuX1b4OXNp41sNH02O5v7e5i3h5PkBcbspuAxn5QemcGvnVDA4itN1p8zd+6SSPalLE06UY048q+9n014X/bm03TrSCHUdOntIIht2+Qz5H1AH+e1fSXwc/ba+HvjW2FiuoTW80KgBbiIoRn+Eev1HtX59/EH9m7xj4VuLCXS/Dz6rYTWn2r7RaWbSKhAJZXzuGcA4GcnjgZFdT8M9L8Nvo63E0LaJq5iAdbdEMsUiNydkgIXkZ6DrWkpUcJD22Hk9fnb1W9jgeGWMk4VEtO2n/AufrJ/btgNMXUHuo47MjPmyNtA/Ovm79q+xsPGfh3S/EmhzRan/AGbI1vdy2rb/AC435UtjsGUjPYt718v/ABE+KnxQ8Sfs8XFgNIubzT9J1JopPE1iQkc8G1dpdAcqwPykjIJz0xzW/Zg0+4t9NuvEej6V46lkkZ7e4t9M+xNZzJImQXN6GQKxyeS546DrXZVnLF0uR2s7ffvfyS/qx52Hw6wNT219Y3+7a3zH195fs7+Kx49+Edil5i4msw2m3IfneFA259cxsmfU5r5Gkl1PVdY8SaT4u8D6f4dlt9BOvabqen3EPnMgukt1Sdbd2gYs7MPkVSNvSvaf2J9VbPirTGY7f3Fyi+h+dWP/AKB+VebgqU8Hi1Sk7qS/r8j08yqQxuCdWKs4Nf1+J+Nn7a3ww/4VJ+0t400KOMx2pu2uoMjqjknP4sGNFfdP/BQ74I23i79oy51Q2BnM2mW2W2EjI3A449efxNFeusdSo/upbrT7jwXl1bEfvYbS1+8+/PhvcJrH7OGkyWpLrP4fIQ46/uiP518h/BqeI+OoLCdxFHqttcaYHP8AC80TIn/j5UfjXv8A/wAE/PHMXxD/AGTvBVxuSSS1tjZTqDnDL1B/76x+FfMPiXSbjwf4u1LTtzR3GnXjxK44IKOQGH5A15OZe5GhU7afdb/gntZVapLEUu+q+d9fyNDwx4tg8H6RZaPqd4ja1E0sc1pLIBvwWRVKnks36ZrxLw54Usbf4p+JrsW/lSQTZjiA+WJm+8PzzXvvxS+GelfESePxq8j2q6papcxXWmLsntr9SPtC99w8wbgp7SZB548P8LzTP8QvEwlcyM7lpGK4y27uO3U8Vw04xhGt7OWttfm1t6pnrp88qbkuv6PT5M9d8CG5/tKXysfZ9v73PT2x79f1r13SvhlZ6naWWrajI9rDDOJkEBCHBBUs5x0wx/DJNcV4Z08ado8CFcSSDzH9cn/AYFe3+DvENpqmlW1qXRLqJBG0BOCwAxkDuMV42HUKlZ8xeOqThC8PmXvEn7PDaHpBvvDmvXthfwDLLJIZIXHcFWJyK+NPjZ4Rh0y317U7qGFb68hkW4mtx5TFx1GMnA6dOvSvuVYY7m0WwWJoIGOWS1upbVX+ojdR/jXxf8X7Dw9rHjC10u6u5orQSl1a5uZJPMI6k7mOchgcD+le5X9lTq05UbxXVK721PLwE61SM41WpPo3brod/wDskeG08TfCLVvA922NP1mzZCTyIpXG5WA9VdlP/Aa9C+IHwgmsfgsYNH0+S3FhdQXx061UuF3R+VLEFHOY3B7YxmvIPgJ8Xhb+NotP8PeHNRl0y3d4vtrbAJWQjP7vO4DIGMD04FfWnxg15vBnw/1XxUunrY6zOIIo4/Ocb3LAZlCFQxC565+6K6qKVelUVdNNXfonr/S3ObESqUMTB0dpW+bVl/TPCPGFld+DP2fdGtNQhNlrGouluUljxOLYSzTmMkjIUEwtt7FhW1+xXEx8U+I5APkWzjU/Uvx/I14f4t8b6x43u4Z9XuhN5ClIYo41jjiUnJCqoAGT1PU9ya+mv2LtAa18MeINYdcC8ukt0JHURqST9MyY/CsMHJV8bT5Nor8kduOg8Pl9TntzSd9O7f8AkeNftp+MdP0j4yi1uWdZU02AnGMcs59aK+J/+Clvxsvbr9rHxFb6TdAwWFvDZOOwdNwOPwIP40V31Ms+sTlVvuzzqObrC040WvhSR7p/wRh+N8cf/CSfDO+uArMft9gjkDPXcqj/AL6JPutfSX7X3gF9G8X23ie3jP2LVUEc7AcLOgxz6bkAI9SrV+KnwU+K+q/BT4maH4v0iV47nT51d1Q48yPI3L+mRnjIFf0JeDfFXhf9rX4F2uo2cyTWOq26sWj5a1uAAQR6EHnnqDg9SK9DF4f28JUer1Xr1X9d/I8vBYr6tUjX6L3ZenR/128z5M+G/jCTSrptCvrgJ4e1VvJug65+zswKLcIequmQcjqBg5ryvwH4QuvDOuazpmrBv7Yt9UaxvC5JO5Gx1PUHJOe+RXeeNfBup+AvEd3ouqwmK6gbhh92VP4XU91P/wBbqDWy+jv47lHiXSQsviC1t4k1fTgCZLpYQFju4gPvHYAsg6/KrdCcfKwnL2FTDvSX+W6/U+2nGCqwxEfhf3a7P9L+h1tX9D1ZtD1KO8SNZWQMArHAyQRn9axodUtJ7VbhZ4xCwzuZgMfWrCSLKoZGDKRkEHINfMpuDut0dcoqScXscL4q/a0uPhX4tvrPVra7vt7K8fdHQgZxnGCDnp6186/HT436T8Sd6aPp09l50okdpduAACMKASehA/CvpL4i/DLSfH9sn2yCH7UgKJLIORn+o6ivMbj9lnw9o0Bvb3WpvssQ3yqyLGg99y/Nx9a+qwOKwMIxnUvzr1evkeZWoVrtU7WZY/Zd0LUP+ED1m0t9W0fRr+Yu/wDp14Ip0iZAN4A5xz06+1ev/s//ABj1n4laHrnws+I+m3esw6Tumj8VRndb2sSqxEskpI5AKlOu7OCK8r8AX3wbbXY/Dmlac+p6hcxtC1zLLcMG455LheOuAMcV6/8AFy30j4e6VpngDwvGbHTbYG+1CBHJLzvjYrnOWKIF4J43e1dcq8acqtRxfvWdmrb6fdv91+hyui6zp009V1XS3X8vvPM7Kyn1G8gtLaJp7meRYookGWdmOAB7kmvu27vNO/Zw+AU93ezxRR6HpzzSyuflecgsT9C5P4fSvK/2VPgvJ58XjbWYCiKD/ZkEg5YngzEemOF/E+hr5H/4K5ftaRX7RfCLw3eCRI283V5oWyMjgR5H4j6bs8EGurLcNKjTdR/FPRenf9f+HPPzbFxr1VRWsIavzfb9Pv7H5s/Ejxnc/EPx7r3iS7Znm1O7kuMuckKT8oP0XA/Ciubor6WMVFKK6HyUpOcnJ7sK+sv2DP22tS/Zc8Zrp+qSSXfgnUXC3duST5BJ++o9MnPtyR1YH5NopTgpqzKhNwd1/wAOf0n654e8FftQeALLVtLv4rqOSPfY6rakM8JIB2sM8jkZU9eCD0NfJfjb4ceK/g5rsUl3HNamOTdaapaMfLcjoVcdG9jg1+cv7LX7afjv9lzWkbSLttQ8PyMPtGkXDExlc87fTqePc4wTmv2A+An7fXwh/aS0VdPu7600jVJk23Gj6xt2t6/e4I+vHua8XF4OFd80/dl/N0fr2/rc9/BY+phly0/fh/K916d/6ukeON4l8OeNs/8ACSWjaLq7nJ1rSoQY5Sepnt8gE9ctGQf9k15l8QvGmqfBLXI4r2CSbRdQj8zT9Y04ia2vVHDbScbWUn5lYBl4yBkGvuPxV+yf4L8VKbzRLibQ3lG5TaMJrc+4Vj/6CwFcNdfse6rNpN74f1G80jxP4WvHDy2V4ZLaRJAMLNC6q/lSgHAYZBHDAjivOhgJqdsRT5ovqv61+49d5nQcL0J8r/la/J9Pvt6HxYn7RWk69eJHfy3UEaLlZZF+XPfhe/vitPxd8dPC2teBdR0dtQnubmYmFJRuyFI+9nAzj071q/F3/gm18R/B+oT3Hg5IfGOinLxrHMkN5Ev910chWI6ZQnOM7R0rwXWP2efihoBP2/4eeJ7dR1k/smdk/wC+gpH616H9j4ZSUo3VtdyFmkqkbXTKvwo8VQ+BfH2kaurCU291GNpHG0uAzZPHTP51+p/hT9mJ9W+IWt+I/GDLNZPqM81rYB9xuFMrFXlPZSMHb1PfHQ/mboH7NXjfULM6nr1jH4E8PR4abWfFkn9nQKvdlWTDyfSNWr1D9pP/AIKsyab4Wg8C/Cad7z7JapYzeKbhSrT7ECGRAefmwT17jk8iu2tQpVZqUo8zXT/M82pialKNqc+VPd/5ef8AWh9Lft7ft7aJ+zx4VuvCnhS5hvPG9zEYY44G+WyXpk46Y6cemBzkr+H2u65feJdYvNV1O5e7v7uUyzTSHlmP8vp2FGua7qHiXVbnU9VvJr+/uG3y3E7bmY/57dqo12Qg0+aW/wDWiPBqVE1yQ2/Pzf8AWgUUUVqYBRRRQAU+GaS3lSWJ2ilQhldDhlI6EHtRRQB7f8MP22PjL8JQkeh+Nb5rVOlteuZkPPfJyfxNfdHwg/4KH/F7xPbaeNRudHn81VLH7Bg8+4aiivDxjdKSVPT00Po8DFVoN1Vzeup6t44/bY+IuiaSLi0GkRyZIybNiOnu9fGHxu/4KVfHW41CTS7bxFbaXA8XMmn2oicZyOucfmKKK5aNSc5qMpNo7MRSp06blCKT8kfInjf4m+LPiTfG88UeIdQ1yfOQbydnVf8AdXoPwFczRRX0qSirJHyUpOTvJ3YUUUUyQooooA//2Q==",sx:{width:100,height:100}})}),Object(A.jsx)(k,{duration:4,children:Object(A.jsx)(H,{children:Object(A.jsx)(j.a,{variant:"h6",children:"Andrew Paniuk"})})}),Object(A.jsx)(j.a,{color:"text.secondary",sx:{fontSize:".8rem"},children:"andrew.paniuk@gmail.com"}),Object(A.jsxs)(x.a,{width:"100%",pt:"30px",pb:"30px",children:[Object(A.jsxs)(j.a,{color:"text.secondary",sx:{fontSize:".8rem"},children:[Object(A.jsx)(x.a,{component:"span",color:"primary.main",children:"Age:\xa0"}),"25 y.o."]}),Object(A.jsxs)(j.a,{color:"text.secondary",sx:{fontSize:".8rem"},children:[Object(A.jsx)(x.a,{component:"span",color:"primary.main",children:"Residence:\xa0"}),"Ukraine"]}),Object(A.jsxs)(j.a,{color:"text.secondary",sx:{fontSize:".8rem"},children:[Object(A.jsx)(x.a,{component:"span",color:"primary.main",children:"Address:\xa0"}),"Rivne"]}),Object(A.jsxs)(j.a,{color:"text.secondary",sx:{fontSize:".8rem"},children:[Object(A.jsx)(x.a,{component:"span",color:"primary.main",children:"Phone:\xa0"}),"+38(067) 25 97 026"]}),Object(A.jsxs)(j.a,{color:"text.secondary",sx:{fontSize:".8rem"},children:[Object(A.jsx)(x.a,{component:"span",color:"primary.main",children:"Skype:\xa0"}),"no.comments3"]}),Object(A.jsxs)(j.a,{color:"text.secondary",sx:{fontSize:".8rem"},children:[Object(A.jsx)(x.a,{component:"span",color:"primary.main",children:"Freelancer:\xa0"}),"Available"]})]})]}),Object(A.jsxs)(x.a,{sx:{display:"flex",lineHeight:1,justifyContent:"center",textAlign:"center"},children:[Object(A.jsx)(x.a,{padding:"0 5px",children:Object(A.jsx)("a",{href:"https://www.linkedin.com/in/andrewpaniuk/",target:"_blank",rel:"noopener noreferrer",children:Object(A.jsx)(p.a,{fontSize:"small"})})}),Object(A.jsx)(x.a,{padding:"0 5px",children:Object(A.jsx)("a",{href:"https://github.com/apaniuk",target:"_blank",rel:"noopener noreferrer",children:Object(A.jsx)(u.a,{fontSize:"small"})})}),Object(A.jsx)(x.a,{padding:"0 5px",children:Object(A.jsx)("a",{href:"https://www.instagram.com/andrew.paniuk/",target:"_blank",rel:"noopener noreferrer",children:Object(A.jsx)(f.a,{fontSize:"small"})})})]})]})})}),Object(A.jsx)(F.a,{item:!0,md:9,sm:12,height:"100%",width:"100%",children:Object(A.jsx)(b.a,{sx:{height:"100%",borderRadius:"10px",border:"3px solid #f26b38"},children:Object(A.jsx)(W,{autoHide:!1,children:Object(A.jsxs)(x.a,{sx:{padding:"0 40px 40px 40px"},children:[Object(A.jsx)(V,{}),Object(A.jsx)(N,{}),Object(A.jsx)(q,{}),Object(A.jsx)(I,{}),Object(A.jsx)(z,{}),Object(A.jsx)(K,{}),Object(A.jsx)(Z,{}),Object(A.jsx)(X,{})]})})})})]})})})},_=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(s.a,{title:"Andrew Paniuk"}),Object(A.jsxs)(d.c,{children:[Object(A.jsx)(d.a,{path:"/",element:Object(A.jsx)(E,{})}),Object(A.jsx)(d.a,{path:"/about",element:Object(A.jsx)(Y,{})})]})]})},$=n(138),ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),o(e),a(e)}))},te=n(109),ne=n(133),re={html:{height:"100%"},body:{height:"100%",overflow:"hidden",background:"#000",backgroundImage:"linear-gradient(147deg, #000000 0%, #2c3e50 74%);"},"#root":{height:"100%",display:"flex",flexDirection:"column"},a:{color:"inherit",textDecoration:"none"},sup:{lineHeight:1},blockquote:{margin:"0",borderTop:"2px solid #EAF9F9",borderBottom:"2px solid #EAF9F9",padding:"20px 20px 20px 90px",position:"relative",fontFamily:"'Lato', sans-serif",fontWeight:"300"},"blockquote:before":{content:'"\\201C"',fontFamily:"serif",position:"absolute",left:"20px",top:"20px",color:"white",background:"#f26b38",width:"50px",height:"50px",borderRadius:"50%",fontSize:"50px",lineHeight:"1.35",textAlign:"center"}},ie=n(67),oe=n(31),ae=Object(g.a)(Object(g.a)({},{white:"#fff",black:"#000",primary:"#f26b38",warning:"#f58020",danger:"#e84022",secondary:"#17c690",success:"#17c690",error:"#e84022",yellow:"#e9d700",gray:"#b2b2b2",border:"rgba(0, 0, 0, 0.23)",sidebarBg:"#5c5c5c",lightGrey:"#FAFAFA",headerColor:"#fff",headerColorHover:"rgba(255,255,255,.7)"}),{},{warning:"#f58020",danger:"#e84022",secondary:"#17c690",success:"#17c690",error:"#e84022",yellow:"#e9d700",gray:"#b2b2b2",border:"#d8d8d8",headerBg:"#24292f"}),ce=Object(ie.a)({colors:ae,constants:{HEADER_HEIGHT:48,FOOTER_HEIGHT:30,NAVIGATION_WIDTH:100},spacings:{s:10,m:14,l:18,xl:24},borderRadii:{s:4,m:10,l:25,xl:75},typography:{fontFamily:"Roboto Mono"},components:{MuiPaper:{defaultProps:{elevation:0},styleOverrides:{root:{zIndex:2,position:"relative",overflow:"hidden","&::after":{content:'""',position:"absolute",top:"0",left:"0",width:"100%",height:"100%",background:"linear-gradient(90deg, #11111b 21px, transparent 1%) center, linear-gradient(#11111b 21px, transparent 1%) center, #fff",backgroundSize:"22px 22px",backgroundPosition:"center",opacity:.2,zIndex:-1},"& *":{zIndex:2}}}},MuiTextField:{defaultProps:{variant:"outlined",margin:"normal",size:"small",fullWidth:!0}},MuiFormControl:{styleOverrides:{marginNormal:{marginTop:0,marginBottom:"16px"},marginDense:{marginTop:0,marginBottom:"10px"}}},MuiButton:{styleOverrides:{root:{borderRadius:0},contained:{borderRadius:0,"&:hover":{backgroundColor:ae.primary}}}},MuiOutlinedInput:{styleOverrides:{root:{borderRadius:0}}},MuiAppBar:{styleOverrides:{root:{background:ae.headerBg}}},MuiTooltip:{defaultProps:{disableInteractive:!0}},MuiLink:{styleOverrides:{root:{color:"#0969da",fontSize:"12px"}},defaultProps:{underline:"hover",display:"inline-block"},variants:[{props:{variant:"background"},style:{background:"#ddf4ff",padding:"2px 6px",borderRadius:6}},{props:{variant:"header"},style:{fontWeight:600,fontSize:"14px"}}]}},palette:{mode:"dark",primary:{main:ae.primary},secondary:{main:"#19857b"},error:{main:oe.a.A400},background:{default:"#1c1c21",paper:"#28282F"},text:{secondary:"#999"}}}),se=Object(A.jsx)(te.a,{styles:re});a.a.render(Object(A.jsx)(i.a.StrictMode,{children:Object(A.jsx)($.a,{theme:ce,children:Object(A.jsx)(c.a,{children:Object(A.jsxs)(s.b,{children:[Object(A.jsx)(ne.a,{}),se,Object(A.jsx)(_,{})]})})})}),document.getElementById("root")),ee()},83:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.3532a0c5.chunk.js.map