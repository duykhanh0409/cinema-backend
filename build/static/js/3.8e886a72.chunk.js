(this.webpackJsonpproject_tickets=this.webpackJsonpproject_tickets||[]).push([[3],{159:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=t.sendForm=t.send=t.init=void 0;var n=a(160);Object.defineProperty(t,"EmailJSResponseStatus",{enumerable:!0,get:function(){return n.EmailJSResponseStatus}});var s=a(161),l=null,c="https://api.emailjs.com";function r(e,t,a){return void 0===a&&(a={}),new Promise((function(s,l){var c=new XMLHttpRequest;for(var r in c.addEventListener("load",(function(e){var t=new n.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?s(t):l(t)})),c.addEventListener("error",(function(e){l(new n.EmailJSResponseStatus(e.target))})),c.open("POST",e,!0),a)c.setRequestHeader(r,a[r]);c.send(t)}))}function o(e){var t=document&&document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function i(e,t){l=e,c=t||"https://api.emailjs.com"}function u(e,t,a,n){var s={lib_version:"2.6.3",user_id:n||l,service_id:e,template_id:t,template_params:o(a)};return r(c+"/api/v1.0/email/send",JSON.stringify(s),{"Content-type":"application/json"})}function A(e,t,a,n){var o;if("string"===typeof a&&(a=document.querySelector("#"!==(o=a)[0]?"#"+o:o)),!a||"FORM"!==a.nodeName)throw"Expected the HTML form element or the style selector of form";s.UI.progressState(a);var i=new FormData(a);return i.append("lib_version","2.6.3"),i.append("service_id",e),i.append("template_id",t),i.append("user_id",n||l),r(c+"/api/v1.0/email/send-form",i).then((function(e){return s.UI.successState(a),e}),(function(e){return s.UI.errorState(a),Promise.reject(e)}))}t.init=i,t.send=u,t.sendForm=A,t.default={init:i,send:u,sendForm:A}},160:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmailJSResponseStatus=void 0;var n=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=n},161:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UI=void 0;var n=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=n},162:function(e,t){e.exports="data:image/jpeg;base64,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"},166:function(e,t,a){"use strict";a.r(t);var n=a(13),s=a(1),l=a.n(s),c=a(48),r=a(49),o=a(26),i=a.n(o),u=a(9),A=a(60),m=a(159),d=a.n(m);a(58);t.default=function(){var e=Object(s.useState)([]),t=Object(n.a)(e,2),o=t[0],m=t[1],p=Object(s.useState)(!0),E=Object(n.a)(p,2),f=E[0],S=E[1],h=Object(u.c)(),R=Object(u.d)((function(e){return e.loginUser}));Object(s.useEffect)((function(){v()}),[]);var v=function(){i.a.get("http://ciname-nodejs-backend.herokuapp.com/booking/data").then((function(e){var t=e.data;m(t)})).catch((function(e){return console.log(e)}))};console.log(o);var j=o.filter((function(e){return e.client===R.email})).map((function(e,t){return l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},t),l.a.createElement("td",null,e.cinema),l.a.createElement("td",null,e.date),l.a.createElement("td",null,e.time),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.seats),l.a.createElement("td",null,e.tongTien))})),b=R.email.split("@");console.log(f,"\u0111\xe2u");return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null),l.a.createElement("div",{className:"hero mv-single-hero heroProfile",style:{height:"300px"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"})))),l.a.createElement("div",{style:{height:"600px",background:"#020d18",color:"white"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3 col-sm-3 col-md-3 left-profile"},l.a.createElement("div",{className:"avatar"},l.a.createElement("img",{src:a(162),height:"100px",width:"100px",style:{borderRadius:"50px"}}),l.a.createElement("p",null,f?b[0]:""),l.a.createElement("a",{className:"btn btn-outline-primary button-image"},"AVATAR")),l.a.createElement("div",{className:"avatar-content"},l.a.createElement("p",null,"Account Detail"),l.a.createElement("p",{style:{color:"yellow"}},"ProFile"),l.a.createElement("p",{style:{fontSize:"15px"},className:"btn btn-outline-primary",onClick:function(){d.a.send("gmail","template_ooyu9fe9",{khanh:"c\u1ea3m \u01a1n b\u1ea1n \u0111\xe3 \u0111\u1eb7t v\xe9"},"user_K0eHghnp38YT5qwjxEru9").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)}))}},"Sent Email"),l.a.createElement("a",{className:"btn btn-outline-primary BTN-LOGOUT",onClick:function(){S(!1),h(A.a(!1))}},"LOG OUT"))),l.a.createElement("div",{className:"col-lg-8 col-md-8 col-sm-8"},l.a.createElement("div",null,l.a.createElement("div",{className:"container",style:{paddingTop:"80px"}},l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"STT "),l.a.createElement("th",{scope:"col"},"Rap"),l.a.createElement("th",{scope:"col"},"Th\u1eddi Gian \u0110\u1eb7t"),l.a.createElement("th",{scope:"col"},"Xu\u1ea5t Chi\u1ebfu"),l.a.createElement("th",{scope:"col"},"T\xean Phim"),l.a.createElement("th",{scope:"col"},"S\u1ed1 Gh\u1ebf"),l.a.createElement("th",{scope:"col"},"T\u1ed5ng Ti\u1ec1n"))),l.a.createElement("tbody",null,f?j:"")))))))),l.a.createElement(r.a,null))}}}]);
//# sourceMappingURL=3.8e886a72.chunk.js.map