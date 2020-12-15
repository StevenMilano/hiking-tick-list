(this["webpackJsonphiking-tick-list"]=this["webpackJsonphiking-tick-list"]||[]).push([[0],{46:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),c=n.n(s),i=n(13),r=n.n(i),l=n(3),o=n(5),j=n(4),d=(n(46),n(17)),h=n.n(d),u=n(21),b=n(15),O=n(18),x=n.n(O),m=n(70);function p(e){var t=e.data,n=c.a.useState(2),s=Object(o.a)(n,2),i=s[0],r=(s[1],function(){console.log("test"),console.log(t)});return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"hike-card",onClick:r,children:[Object(a.jsx)("img",{className:"hike-card-img",src:"",alt:""}),Object(a.jsxs)("div",{className:"hike-card-text",children:[Object(a.jsx)("h3",{children:"SoapStone-Santee-Ridge Loop"}),Object(a.jsx)("p",{children:"Location maryland elkridge"}),Object(a.jsx)("p",{children:"8.2mi"}),Object(a.jsx)("p",{children:"accent and decent"}),Object(a.jsx)("p",{children:"condition status details, and date"}),Object(a.jsx)("p",{className:"hike-card-summary",children:"Summary classic long mountain route."}),Object(a.jsx)("div",{className:"rating",children:Object(a.jsx)(m.a,{name:"read-only",value:i,readOnly:!0})})]})]}),Object(a.jsxs)("div",{className:"hike-card",onClick:r,children:[Object(a.jsx)("img",{className:"hike-card-img",src:"",alt:""}),Object(a.jsxs)("div",{className:"hike-card-text",children:[Object(a.jsx)("h3",{children:"SoapStone-Santee-Ridge Loop"}),Object(a.jsx)("p",{children:"Location maryland elkridge"}),Object(a.jsx)("p",{children:"8.2mi"}),Object(a.jsx)("p",{children:"accent and decent"}),Object(a.jsx)("p",{children:"condition status details, and date"}),Object(a.jsx)("p",{children:"Summary classic long mountain route."}),Object(a.jsx)("div",{className:"rating",children:Object(a.jsx)(m.a,{name:"read-only",value:i,readOnly:!0})})]})]})]})}function v(e){var t=e.onLoad,n=e.onUnmount,s=e.containerStyle,c=e.address,i=void 0===c?"":c,r=e.setAddress,l=e.maxResults,o=void 0===l?0:l,j=e.setMaxResults,d=e.minLength,O=void 0===d?0:d,m=e.setMinLength,p=e.minStars,v=void 0===p?0:p,g=e.setMinStars,f=e.maxDistance,k=void 0===f?30:f,S=e.setMaxDistance,y=(e.lat,e.setLat),N=(e.lng,e.setLng),L=e.data,M=void 0===L?{}:L,F=e.setData,C=e.center,R=void 0===C?{lat:-34.397,lng:150.644}:C,D=e.setCenter,w=(e.status,e.setStatus),A=(e.position,e.setPosition,e.response,e.setResponse,e.error,e.setError);e.value,e.setValue;function U(){return(U=Object(u.a)(h.a.mark((function e(t,n,a,s,c,i,r){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t,n,a,s,c,i,r);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t,n,a,s,c,i){var r=function(e){return Object.keys(e).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t]))})).join("&")}({key:e,lat:t,lon:n,maxDistance:i,maxResults:a,hikeLength:s,hikeRating:c});fetch("https://www.hikingproject.com/data/get-trails?"+r).then((function(e){return e.json()})).then((function(e){w("fetched"),F(e)}),(function(e){w("fetched"),A(e)}))}return Object(a.jsxs)("div",{children:[Object(a.jsx)("header",{role:"banner",children:Object(a.jsx)("h2",{children:"Find hikes near you"})}),Object(a.jsxs)("form",{id:"hike-finder",children:[Object(a.jsxs)("div",{className:"form",children:[Object(a.jsx)("label",{htmlFor:"address",children:"Enter a location"}),Object(a.jsx)("input",{onChange:function(e){return r(e.target.value)},value:i,type:"text",id:"address",name:"address",placeholder:"Appalachian trail",required:!0})]}),Object(a.jsxs)("div",{className:"form",children:[Object(a.jsx)("label",{htmlFor:"resultsLimit",children:"Result limit"}),Object(a.jsxs)("select",{onChange:function(e){return j(e.target.value)},value:o,type:"number",id:"resultsLimit",name:"resultsLimit",children:[Object(a.jsx)("option",{value:"10",children:"10"}),Object(a.jsx)("option",{value:"50",children:"50"}),Object(a.jsx)("option",{value:"100",children:"100"}),Object(a.jsx)("option",{value:"200",children:"200"}),Object(a.jsx)("option",{value:"300",children:"300"}),Object(a.jsx)("option",{value:"400",children:"400"}),Object(a.jsx)("option",{value:"500",children:"500"})]})]}),Object(a.jsxs)("div",{className:"form",children:[Object(a.jsx)("label",{htmlFor:"search-area",children:"Search area"}),Object(a.jsxs)("select",{onChange:function(e){return S(e.target.value)},value:k,id:"search-area",name:"search-area",children:[Object(a.jsx)("option",{value:"30",children:"30 Miles"}),Object(a.jsx)("option",{value:"50",children:"50 Miles"}),Object(a.jsx)("option",{value:"100",children:"100 Miles"}),Object(a.jsx)("option",{value:"150",children:"150 Miles"}),Object(a.jsx)("option",{value:"200",children:"200 Miles"})]})]}),Object(a.jsxs)("div",{className:"form",children:[Object(a.jsx)("label",{htmlFor:"hike-length",children:"Hike length"}),Object(a.jsxs)("select",{onChange:function(e){return m(e.target.value)},value:O,id:"hike-length",name:"hike-length",children:[Object(a.jsx)("option",{value:"5",children:"5 Miles"}),Object(a.jsx)("option",{value:"10",children:"10 Miles"}),Object(a.jsx)("option",{value:"15",children:"15 Miles"}),Object(a.jsx)("option",{value:"20",children:"20 Miles"}),Object(a.jsx)("option",{value:"0",children:"No limit"})]})]}),Object(a.jsxs)("div",{className:"form",children:[Object(a.jsx)("label",{htmlFor:"rating",children:"Hike rating"}),Object(a.jsxs)("select",{onChange:function(e){return g(e.target.value)},value:v,id:"rating",name:"rating",children:[Object(a.jsx)("option",{value:"1",children:"1 star"}),Object(a.jsx)("option",{value:"2",children:"2 star"}),Object(a.jsx)("option",{value:"3",children:"3 star"}),Object(a.jsx)("option",{value:"4",children:"4 star"}),Object(a.jsx)("option",{value:"0",children:"No limit"})]})]}),Object(a.jsx)("input",{type:"button",value:"search",id:"submit",onClick:function(e){e.preventDefault(),x.a.fromAddress(i).then((function(e){var t=e.results[0].geometry.location,n=t.lat,a=t.lng;y(n),N(a),function(e,t,n,a,s,c,i){U.apply(this,arguments)}("200793847-c31065fb4a7ef9c4bec2522c771d7f3c",n,a,o,O,v,k),D({lat:n,lng:a})}),(function(e){console.error(e)}))}})]}),Object(a.jsx)("p",{id:"js-error-message",className:"error-message"}),Object(a.jsxs)("div",{className:"map",children:[Object(a.jsxs)(b.b,{googleMapsApiKey:"AIzaSyD1OurySFNmim0G5iuXQ-8To7tec6RO0qk",children:[console.log(R),Object(a.jsxs)(b.a,{mapContainerStyle:s,center:R,zoom:10,onLoad:t,onUnmount:n,children:[Object(a.jsx)(b.c,{position:R}),function(e){if(e&&e.trails)return e&&e.trails.map((function(e){return Object(a.jsx)(b.c,{position:{lat:e.latitude,lng:e.longitude}},e.id)}))}(M)]})]}),function(e){if(e&&e.trails)return e&&e.trails.map((function(e){return Object(a.jsxs)("div",{className:"hike-card",children:[Object(a.jsx)("img",{className:"hike-card-img",src:"",alt:""}),Object(a.jsxs)("div",{className:"hike-card-text",children:[Object(a.jsx)("a",{target:"_blank",href:e.url,children:Object(a.jsx)("h3",{children:e.name})}),Object(a.jsx)("p",{children:e.location}),Object(a.jsx)("p",{children:e.length}),Object(a.jsxs)("p",{children:["accent: ",e.accent," decent: ",e.decent]}),Object(a.jsxs)("p",{children:["condition status and details: ",e.conditionStatus," ",e.conditionDetails]}),Object(a.jsxs)("p",{className:"hike-card-subtext",children:["last updated: ",e.conditionDate]}),Object(a.jsx)("p",{children:e.summary})]})]},e.id)}))}(M)]})]})}var g=n(14),f=n(23);function k(e){var t=e.onLoad,n=e.onUnmount,s=e.containerStyle,c=e.address,i=void 0===c?"":c,r=e.setAddress,l=e.maxResults,o=void 0===l?0:l,j=e.setMaxResults,d=e.minLength,O=void 0===d?0:d,m=e.setMinLength,p=e.minStars,v=void 0===p?0:p,k=e.setMinStars,S=e.maxDistance,y=void 0===S?30:S,N=e.setMaxDistance,L=(e.lat,e.setLat),M=(e.lng,e.setLng),F=e.data,C=void 0===F?{}:F,R=e.setData,D=e.center,w=void 0===D?{lat:-34.397,lng:150.644}:D,A=e.setCenter,U=(e.status,e.setStatus),E=(e.position,e.setPosition,e.response,e.setResponse,e.error,e.setError);e.value,e.setValue;function T(){return(T=Object(u.a)(h.a.mark((function e(t,n,a,s,c,i,r){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(t,n,a,s,c,i,r);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t,n,a,s,c,i){var r=function(e){return Object.keys(e).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(e[t]))})).join("&")}({key:e,lat:t,lon:n,maxDistance:i,maxResults:a,hikeLength:s,hikeRating:c});fetch("https://www.hikingproject.com/data/get-trails?"+r).then((function(e){return e.json()})).then((function(e){U("fetched"),R(e)}),(function(e){U("fetched"),E(e)}))}return Object(a.jsx)("div",{children:Object(a.jsxs)("main",{role:"main",children:[Object(a.jsxs)("header",{role:"banner",children:[Object(a.jsx)("h1",{children:"Hiking Tick list"}),Object(a.jsx)("h2",{children:"Find hikes near you"})]}),Object(a.jsxs)("section",{children:[Object(a.jsx)("header",{children:Object(a.jsx)("h3",{children:"Find Hikes near you and make a tick list for each hike."})}),Object(a.jsxs)("form",{id:"hike-finder",children:[Object(a.jsxs)("div",{className:"form",children:[Object(a.jsx)("label",{htmlFor:"address",children:"Enter a location"}),Object(a.jsx)("input",{onChange:function(e){return r(e.target.value)},value:i,type:"text",id:"address",name:"address",placeholder:"Appalachian trail",required:!0})]}),Object(a.jsxs)("div",{className:"form",children:[Object(a.jsx)("label",{htmlFor:"resultsLimit",children:"Result limit"}),Object(a.jsxs)("select",{onChange:function(e){return j(e.target.value)},value:o,type:"number",id:"resultsLimit",name:"resultsLimit",children:[Object(a.jsx)("option",{value:"10",children:"10"}),Object(a.jsx)("option",{value:"50",children:"50"}),Object(a.jsx)("option",{value:"100",children:"100"}),Object(a.jsx)("option",{value:"200",children:"200"}),Object(a.jsx)("option",{value:"300",children:"300"}),Object(a.jsx)("option",{value:"400",children:"400"}),Object(a.jsx)("option",{value:"500",children:"500"})]})]}),Object(a.jsxs)("div",{className:"form",children:[Object(a.jsx)("label",{htmlFor:"search-area",children:"Search area"}),Object(a.jsxs)("select",{onChange:function(e){return N(e.target.value)},value:y,id:"search-area",name:"search-area",children:[Object(a.jsx)("option",{value:"30",children:"30 Miles"}),Object(a.jsx)("option",{value:"50",children:"50 Miles"}),Object(a.jsx)("option",{value:"100",children:"100 Miles"}),Object(a.jsx)("option",{value:"150",children:"150 Miles"}),Object(a.jsx)("option",{value:"200",children:"200 Miles"})]})]}),Object(a.jsxs)("div",{className:"form",children:[Object(a.jsx)("label",{htmlFor:"hike-length",children:"Hike length"}),Object(a.jsxs)("select",{onChange:function(e){return m(e.target.value)},value:O,id:"hike-length",name:"hike-length",children:[Object(a.jsx)("option",{value:"5",children:"5 Miles"}),Object(a.jsx)("option",{value:"10",children:"10 Miles"}),Object(a.jsx)("option",{value:"15",children:"15 Miles"}),Object(a.jsx)("option",{value:"20",children:"20 Miles"}),Object(a.jsx)("option",{value:"0",children:"No limit"})]})]}),Object(a.jsxs)("div",{className:"form",children:[Object(a.jsx)("label",{htmlFor:"rating",children:"Hike rating"}),Object(a.jsxs)("select",{onChange:function(e){return k(e.target.value)},value:v,id:"rating",name:"rating",children:[Object(a.jsx)("option",{value:"1",children:"1 star"}),Object(a.jsx)("option",{value:"2",children:"2 star"}),Object(a.jsx)("option",{value:"3",children:"3 star"}),Object(a.jsx)("option",{value:"4",children:"4 star"}),Object(a.jsx)("option",{value:"0",children:"No limit"})]})]}),Object(a.jsx)("input",{type:"button",value:"search",id:"submit",onClick:function(e){e.preventDefault(),x.a.fromAddress(i).then((function(e){var t=e.results[0].geometry.location,n=t.lat,a=t.lng;L(n),M(a),function(e,t,n,a,s,c,i){T.apply(this,arguments)}("200793847-c31065fb4a7ef9c4bec2522c771d7f3c",n,a,o,O,v,y),A({lat:n,lng:a})}),(function(e){console.error(e)}))}})]}),Object(a.jsxs)("div",{className:"map",children:[Object(a.jsxs)(b.b,{googleMapsApiKey:"AIzaSyD1OurySFNmim0G5iuXQ-8To7tec6RO0qk",children:[console.log(w),Object(a.jsxs)(b.a,{mapContainerStyle:s,center:w,zoom:10,onLoad:t,onUnmount:n,children:[Object(a.jsx)(b.c,{position:w}),function(e){if(e&&e.trails)return e&&e.trails.map((function(e){return Object(a.jsx)(b.c,{position:{lat:e.latitude,lng:e.longitude}},e.id)}))}(C)]})]}),function(e){if(e&&e.trails)return e&&e.trails.map((function(e){return Object(a.jsxs)("div",{className:"hike-card",children:[Object(a.jsx)("img",{className:"hike-card-img",src:"",alt:""}),Object(a.jsxs)("div",{className:"hike-card-text",children:[Object(a.jsx)("a",{target:"_blank",href:e.url,children:Object(a.jsx)("h3",{children:e.name})}),Object(a.jsx)("p",{children:e.location}),Object(a.jsx)("p",{children:e.length}),Object(a.jsxs)("p",{children:["accent: ",e.accent," decent: ",e.decent]}),Object(a.jsxs)("p",{children:["condition status and details: ",e.conditionStatus," ",e.conditionDetails]}),Object(a.jsxs)("p",{className:"hike-card-subtext",children:["last updated: ",e.conditionDate]}),Object(a.jsx)("p",{children:e.summary})]})]},e.id)}))}(C)]})]}),Object(a.jsxs)(f.Element,{id:"signup-form",name:"signup-form",children:[Object(a.jsx)("header",{children:Object(a.jsx)("h3",{children:"Start Now"})}),Object(a.jsxs)("form",{className:"signup-form",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"first-name",children:"First name"}),Object(a.jsx)("input",{placeholder:"First Name",type:"text",name:"first-name",id:"first-name"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"last-name",children:"Last name"}),Object(a.jsx)("input",{type:"text",name:"last-name",id:"last-name",placeholder:"Last Name"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"username",children:"Email"}),Object(a.jsx)("input",{type:"text",name:"username",id:"username"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",name:"password",id:"password"})]}),Object(a.jsx)(g.b,{to:"/find-a-hike",children:Object(a.jsx)("button",{type:"submit",children:"Sign Up"})}),Object(a.jsxs)("div",{className:"mt-2",children:[Object(a.jsx)("span",{children:"Already have an account? "}),Object(a.jsx)(g.b,{to:"/login",children:Object(a.jsx)("span",{className:"loginText",children:"Login here"})})]})]})]})]})})}function S(){return Object(a.jsx)("footer",{role:"content-info",children:Object(a.jsx)("p",{children:"Created by Steven Milano"})})}var y=n.n(f).a.Link;function N(){return Object(a.jsxs)("nav",{children:[Object(a.jsx)(g.b,{to:"/",children:"Home"}),Object(a.jsx)(y,{to:"signup-form",spy:!0,smooth:!0,duration:500,className:"signup-form",activeClass:"signup-form-active",children:"Sign up"}),Object(a.jsx)(g.b,{to:"/find-a-hike",children:"Find a hike"}),Object(a.jsx)(g.b,{to:"/tick-list",children:"Tick List"})]})}function L(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("header",{role:"banner",children:Object(a.jsx)("h1",{children:"My hikes"})}),Object(a.jsxs)("section",{children:[Object(a.jsxs)("form",{action:"/action_page.php",children:[Object(a.jsx)("label",{htmlFor:"trail",children:"Trail"}),Object(a.jsx)("input",{type:"text",id:"trail",name:"trail",placeholder:"Appalachian trail"}),Object(a.jsx)("label",{htmlFor:"Length",children:"address"}),Object(a.jsx)("input",{type:"text",id:"address",name:"address",placeholder:"Appalachian trail"}),Object(a.jsxs)("select",{name:"completed",id:"completed",children:[Object(a.jsx)("label",{htmlFor:"completed",children:"Completed Hike"}),Object(a.jsx)("option",{value:"True",children:"True"}),Object(a.jsx)("option",{value:"False",children:"Flase"})]}),Object(a.jsx)("button",{children:"Filter"})]}),Object(a.jsx)(p,{})]})]})}x.a.setApiKey("AIzaSyD1OurySFNmim0G5iuXQ-8To7tec6RO0qk"),x.a.setLanguage("en");var M={width:"400px",height:"400px"};var F=function(){var e=c.a.useState(""),t=Object(o.a)(e,2),n=t[0],s=t[1],i=c.a.useState(0),r=Object(o.a)(i,2),d=r[0],h=r[1],u=c.a.useState(0),b=Object(o.a)(u,2),O=b[0],x=b[1],m=c.a.useState(0),p=Object(o.a)(m,2),g=p[0],f=p[1],y=c.a.useState(0),F=Object(o.a)(y,2),C=F[0],R=F[1],D=c.a.useState(null),w=Object(o.a)(D,2),A=(w[0],w[1]),U=c.a.useState(0),E=Object(o.a)(U,2),T=E[0],H=E[1],I=c.a.useState(0),q=Object(o.a)(I,2),z=q[0],P=q[1],V=c.a.useState(""),B=Object(o.a)(V,2),G=B[0],K=B[1],Q=c.a.useState({}),X=Object(o.a)(Q,2),_=X[0],J=X[1],W=c.a.useState({lat:-34.397,lng:150.644}),Y=Object(o.a)(W,2),Z=Y[0],$=Y[1],ee=c.a.useState("idle"),te=Object(o.a)(ee,2),ne=te[0],ae=te[1],se=c.a.useState([]),ce=Object(o.a)(se,2),ie=ce[0],re=ce[1],le=c.a.useState([]),oe=Object(o.a)(le,2),je=oe[0],de=oe[1],he=c.a.useState(null),ue=Object(o.a)(he,2),be=ue[0],Oe=ue[1],xe=c.a.useState(null),me=Object(o.a)(xe,2),pe=me[0],ve=me[1],ge=c.a.useState(2),fe=Object(o.a)(ge,2),ke=fe[0],Se=fe[1],ye=c.a.useCallback((function(e){var t=new window.google.maps.LatLngBounds;e.fitBounds(t),A(e)}),[]),Ne=c.a.useCallback((function(e){A(null)}),[]);return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(N,{})}),Object(a.jsxs)("div",{children:[Object(a.jsx)(j.a,{exact:!0,path:"/",render:function(e){var t;return Object(a.jsx)(k,(t={onUnmount:Ne,onLoad:ye,center:Z,containerStyle:M,address:n,setAddress:s,maxResults:d,setMaxResults:h,minLength:O,setMinLength:x,minStars:g,setMinStars:f,maxDistance:C,setMaxDistance:R,lat:T,setLat:H,lng:z,setLng:P,data:_,setData:J,url:G,setUrl:K},Object(l.a)(t,"center",Z),Object(l.a)(t,"setCenter",$),Object(l.a)(t,"status",ne),Object(l.a)(t,"setStatus",ae),Object(l.a)(t,"position",ie),Object(l.a)(t,"setPosition",re),Object(l.a)(t,"response",je),Object(l.a)(t,"setResponse",de),Object(l.a)(t,"error",be),Object(l.a)(t,"setError",Oe),Object(l.a)(t,"marker",pe),Object(l.a)(t,"setMarker",ve),Object(l.a)(t,"value",ke),Object(l.a)(t,"setValue",Se),t))}}),Object(a.jsx)(j.a,{path:"/find-a-hike",render:function(e){var t;return Object(a.jsx)(v,(t={onUnmount:Ne,onLoad:ye,center:Z,containerStyle:M,address:n,setAddress:s,maxResults:d,setMaxResults:h,minLength:O,setMinLength:x,minStars:g,setMinStars:f,maxDistance:C,setMaxDistance:R,lat:T,setLat:H,lng:z,setLng:P,data:_,setData:J,url:G,setUrl:K},Object(l.a)(t,"center",Z),Object(l.a)(t,"setCenter",$),Object(l.a)(t,"status",ne),Object(l.a)(t,"setStatus",ae),Object(l.a)(t,"position",ie),Object(l.a)(t,"setPosition",re),Object(l.a)(t,"response",je),Object(l.a)(t,"setResponse",de),Object(l.a)(t,"error",be),Object(l.a)(t,"setError",Oe),Object(l.a)(t,"marker",pe),Object(l.a)(t,"setMarker",ve),Object(l.a)(t,"value",ke),Object(l.a)(t,"setValue",Se),t))}}),Object(a.jsx)(j.a,{path:"/tick-list",component:L})]}),Object(a.jsx)(S,{})]})};r.a.render(Object(a.jsx)(g.a,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.f56d4813.chunk.js.map