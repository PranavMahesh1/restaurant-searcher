(this["webpackJsonprestaurant-searcher"]=this["webpackJsonprestaurant-searcher"]||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(19),c=a.n(r),o=(a(72),a(73),a(74),a(14)),u=a(24),i=a.n(u),s=(a(92),a(115)),m=a(116),d=a(60),E=a(120),h=a(117),p=a(114),f=a(61),g=a(18),y=a(122),b=a(15),v=a(27),x=a(17),k=(a(93),function(e){var t=Object(g.f)();var a=function(e){var t,a=e,n=5-Math.ceil(a),r=[];if(t=a,Number(t)===t&&t%1!==0){for(var c=Math.floor(a),o=1;o<=c;o++)r.push(l.a.createElement(b.a,{color:"orange"}));r.push(l.a.createElement(b.b,{color:"orange"}))}else for(var u=1;u<=a;u++)r.push(l.a.createElement(b.a,{color:"orange"}));for(var i=1;i<=n;)r.push(l.a.createElement(b.c,{color:"orange"})),i++;return r},n=e.restaurantsList.map((function(e,n){return l.a.createElement(y.a,{key:n,className:"card-margin",height:"300"},l.a.createElement(y.a.Img,{variant:"top",src:e.image_url,height:"250"}),l.a.createElement(y.a.Body,{style:{height:"240"}},l.a.createElement(y.a.Title,null,e.name),l.a.createElement(y.a.Text,null),l.a.createElement(y.a.Text,null,function(e,t){var a=e,n=[];if(null!=a){n.push(l.a.createElement("span",{key:t},"Price: "));for(var r=0;r<a.length;r++)n.push(l.a.createElement(v.a,{color:"green"}))}return n}(e.price,n)),l.a.createElement(y.a.Text,null,"Rating: ",a(e.rating)),l.a.createElement(y.a.Text,null,l.a.createElement(x.a,{color:"#e53935"})," ",e.display_phone)),l.a.createElement(p.a,{onClick:function(){!function(e){t.push("/details",{detailsObject:e})}(e)},variant:"success",style:{margin:"4px"}},"More information"))}));return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(s.a,null,l.a.createElement(m.a,{className:"justify-content-md-center"},n)))}),w="https://cors-anywhere.herokuapp.com/",O="yR15w8bu1wHsBvCaLBOTjSE19XdcT0rwnd9CUAkRENxiBHBqkfNj2sAkTx-yzkY4n146e_nXFAo43nQlwWSp3xxCHpoO8kzwBY_aE9OklcwvTEc3x3zEdUdP-epSXnYx",j=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],u=Object(n.useState)(""),g=Object(o.a)(u,2),y=g[0],b=g[1],v=Object(n.useState)([]),j=Object(o.a)(v,2),C=j[0],S=j[1],T=Object(n.useState)({}),N=Object(o.a)(T,2),B=N[0],A=N[1],L=Object(n.useState)(),P=Object(o.a)(L,2),z=(P[0],P[1],navigator.geolocation);Object(n.useEffect)((function(){z?z.getCurrentPosition((function(e){console.log("Location: ",e.coords.latitude,e.coords.longitude),A(e.coords)}),(function(e){})):console.log("Location API is not supported/available")}),[]);return l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement(m.a,{className:"justify-content-md-center"},l.a.createElement(d.a,{xs:"6"},l.a.createElement("h1",{className:"heading"},"Restaurant-Searcher"),l.a.createElement("p",{className:"text"},"Enter the restaurant type/name and location and click Submit, or enter just the restaurant and click Submit with Your Location."),l.a.createElement(E.a,null,l.a.createElement(E.a.Group,{controlId:"basic"},l.a.createElement(E.a.Label,{className:"text"},"Enter Restaurant Name/Type"),l.a.createElement(h.a,null,l.a.createElement(h.a.Prepend,null,l.a.createElement(h.a.Text,{id:"inputGroupPrepend"},l.a.createElement(x.d,null))),l.a.createElement(E.a.Control,{onChange:function(e){c(e.target.value)},placeholder:"Restaurant"}))),l.a.createElement(E.a.Group,{controlId:"basic"},l.a.createElement(E.a.Label,{className:"text"},"Enter Location"),l.a.createElement(h.a,null,l.a.createElement(h.a.Prepend,null,l.a.createElement(h.a.Text,{id:"inputGroupPrepend"},l.a.createElement(x.b,null))),l.a.createElement(E.a.Control,{onChange:function(e){b(e.target.value)},placeholder:"Location (i.e. Atlanta, GA)"})))),l.a.createElement(p.a,{variant:"light",onClick:function(e){i.a.get("".concat(w,"https://api.yelp.com/v3/businesses/search?term=").concat(r,"&categories=food&location=").concat(y),{headers:{Authorization:"Bearer ".concat(O)}}).then((function(e){S(e.data.businesses)})).catch((function(e){console.log("Error occured: ",e)}))}},"Submit"),l.a.createElement(p.a,{variant:"light",onClick:function(e){i.a.get("".concat(w,"https://api.yelp.com/v3/businesses/search?term=").concat(r,"&categories=food&latitude=").concat(B.latitude,"&longitude=").concat(B.longitude,"&radius=15000"),{headers:{Authorization:"Bearer ".concat(O)}}).then((function(e){S(e.data.businesses)})).catch((function(e){console.log("Error occured: ",e)}))},className:"float-right"},"Submit with Your Location"),l.a.createElement(h.a,{className:"mb-3"},l.a.createElement(h.a.Prepend,null,l.a.createElement(h.a.Checkbox,{"aria-label":"Checkbox for following text input"})),l.a.createElement(f.a,{"aria-label":"Text input with checkbox"})),l.a.createElement(h.a,{className:"mb-3"},l.a.createElement(h.a.Prepend,null,l.a.createElement(h.a.Checkbox,{"aria-label":"Checkbox for following text input"})),l.a.createElement(f.a,{"aria-label":"Text input with checkbox"})))),C.length>0?l.a.createElement(k,{restaurantsList:C}):null))},C=a(123),S=a(118),T=a(121),N=a(119),B=a(25),A=Object(B.GoogleApiWrapper)({apiKey:"".concat("AIzaSyBKkqON7yV0e9pLsxgZeoR8l917lbOEOrU")})((function(e){var t=Object(g.g)(),a=Object(n.useState)(t.state.detailsObject),r=Object(o.a)(a,2),c=r[0],u=r[1],d=Object(n.useState)(!1),E=Object(o.a)(d,2),h=E[0],f=E[1],k=Object(n.useState)({}),w=Object(o.a)(k,2),O=w[0],j=w[1],A=Object(n.useState)({}),L=Object(o.a)(A,2),P=(L[0],L[1]);Object(n.useEffect)((function(){i.a.get("".concat("https://cors-anywhere.herokuapp.com/","https://api.yelp.com/v3/businesses/").concat(c.id),{headers:{Authorization:"Bearer ".concat("yR15w8bu1wHsBvCaLBOTjSE19XdcT0rwnd9CUAkRENxiBHBqkfNj2sAkTx-yzkY4n146e_nXFAo43nQlwWSp3xxCHpoO8kzwBY_aE9OklcwvTEc3x3zEdUdP-epSXnYx")}}).then((function(e){console.log("Restaurant data: ",e.data),u(e.data)})).catch((function(e){console.log("Error occured: ",e)}))}),[]);var z=c.categories.map((function(e,t){return l.a.createElement("span",{key:t},e.title,", ")})),R=c.photos&&c.photos.map((function(e,t){return l.a.createElement(C.a.Item,null,l.a.createElement("div",{style:{overflow:"hidden",height:"400px"}},l.a.createElement("img",{className:"d-block w-100",src:e,alt:"Restaurant",key:t,style:{backgroundPosition:"center center"}})))})),M={width:"100%",height:"400px",position:"relative"};var _=function(e){var t="";return(e=e.toString().match(/^([01]\d|2[0-3])([0-5]\d)/)).length>1&&(t=(e[1]%12||12)+":"+e[2]+(e[1]<12?" AM":" PM")),t};return l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement(m.a,{className:"justify-content-md-center"},l.a.createElement(y.a,{style:{width:"100%"}},l.a.createElement(y.a.Body,{style:{padding:"0.5rem"}},l.a.createElement(C.a,null,R)))),l.a.createElement("br",null),l.a.createElement(m.a,{className:"justify-content-md-center"},l.a.createElement(y.a,{style:{width:"100%"}},l.a.createElement(y.a.Header,null,l.a.createElement("center",null,l.a.createElement("h1",null,c.name))),l.a.createElement(y.a.Body,{style:{padding:"0rem"}},l.a.createElement(B.Map,{google:e.google,style:M,containerStyle:M,zoom:20,initialCenter:{lat:c.coordinates.latitude,lng:c.coordinates.longitude}},l.a.createElement(B.Marker,{title:"".concat(c.name),name:"".concat(c.name),onClick:function(e,t,a){P(e),j(t),f(!0)},position:{lat:c.coordinates.latitude,lng:c.coordinates.longitude}}),l.a.createElement(B.InfoWindow,{marker:O,visible:h,onClose:function(e){h&&(j(null),f(!1))}},l.a.createElement("h4",null,c.name)))))),l.a.createElement(m.a,{style:{marginTop:"16px"}},l.a.createElement(y.a,{style:{width:"100%"}},l.a.createElement(y.a.Header,null,"Restaurant Details"),l.a.createElement(y.a.Body,null,l.a.createElement(T.a,{defaultActiveKey:"general",id:"uncontrolled-tab-example"},l.a.createElement(N.a,{style:{padding:"16px"},eventKey:"general",title:"General"},l.a.createElement("p",null,"Cuisines: ",z),l.a.createElement("p",null,function(){var e=c.price,t=[];if(null!=e){t.push(l.a.createElement("span",null,"Price: "));for(var a=0;a<e.length;a++)t.push(l.a.createElement(v.a,{color:"green"}))}return t}()),l.a.createElement("p",null,"Rating: ",function(){var e,t=c.rating,a=5-Math.ceil(t),n=[];if(e=t,Number(e)===e&&e%1!==0){for(var r=Math.floor(t),o=1;o<=r;o++)n.push(l.a.createElement(b.a,{color:"orange"}));n.push(l.a.createElement(b.b,{color:"orange"}))}else for(var u=1;u<=t;u++)n.push(l.a.createElement(b.a,{color:"orange"}));for(var i=1;i<=a;)n.push(l.a.createElement(b.c,{color:"orange"})),i++;return n}()," ",c.review_count," reviews"),l.a.createElement("a",{variant:"outline-primary",target:"_blank",rel:"noopener noreferrer",href:c.url},l.a.createElement(p.a,{variant:"outline-primary"},"Yelp Link"))),l.a.createElement(N.a,{style:{padding:"16px"},eventKey:"address",title:"Address/Contact"},l.a.createElement("p",null,l.a.createElement(x.c,{color:"#e53935"})," ",""!==c.location.address1?"Location: ".concat(c.location.address1,", ").concat(c.location.city,", ").concat(c.location.state," ").concat(c.location.zip_code):"Location: ".concat(c.location.city,", ").concat(c.location.state," ").concat(c.location.zip_code)),l.a.createElement("p",null,l.a.createElement(x.a,{color:"#e53935"})," ",l.a.createElement("a",{href:"tel:".concat(c.phone)},c.display_phone))),l.a.createElement(N.a,{style:{padding:"16px"},eventKey:"hours",title:"Open Hours"},l.a.createElement("p",null,function(){var e=[],t="";if(c.hours&&c.hours[0].open){var a=c.hours[0].open;a.filter((function(e){return 0===e.day})).length>0?(t=a.filter((function(e){return 0===e.day})),e.push(l.a.createElement("tr",null,l.a.createElement("td",null,"Monday"),l.a.createElement("td",null,_(t[0].start)," - ",_(t[0].end))))):e.push(l.a.createElement("tr",null,l.a.createElement("td",null,"Monday"),l.a.createElement("td",{style:{color:"red"}},"Closed"))),a.filter((function(e){return 1===e.day})).length>0?(t=a.filter((function(e){return 1===e.day})),e.push(l.a.createElement("tr",null,l.a.createElement("td",null,"Tuesday"),l.a.createElement("td",null,_(t[0].start)," - ",_(t[0].end))))):e.push(l.a.createElement("tr",null,l.a.createElement("td",null,"Tuesday"),l.a.createElement("td",{style:{color:"red"}},"Closed"))),a.filter((function(e){return 2===e.day})).length>0?(t=a.filter((function(e){return 2===e.day})),e.push(l.a.createElement("tr",null,l.a.createElement("td",null,"Wednesday"),l.a.createElement("td",null,_(t[0].start)," - ",_(t[0].end))))):e.push(l.a.createElement("tr",null,l.a.createElement("td",null,"Wednesday"),l.a.createElement("td",{style:{color:"red"}},"Closed"))),a.filter((function(e){return 3===e.day})).length>0?(t=a.filter((function(e){return 3===e.day})),e.push(l.a.createElement("tr",null,l.a.createElement("td",null,"Thursday"),l.a.createElement("td",null,_(t[0].start)," - ",_(t[0].end))))):e.push(l.a.createElement("tr",null,l.a.createElement("td",null,"Thursday"),l.a.createElement("td",{style:{color:"red"}},"Closed"))),a.filter((function(e){return 4===e.day})).length>0?(t=a.filter((function(e){return 4===e.day})),e.push(l.a.createElement("tr",null,l.a.createElement("td",null,"Friday"),l.a.createElement("td",null,_(t[0].start)," - ",_(t[0].end))))):e.push(l.a.createElement("tr",null,l.a.createElement("td",null,"Friday"),l.a.createElement("td",{style:{color:"red"}},"Closed"))),a.filter((function(e){return 5===e.day})).length>0?(t=a.filter((function(e){return 5===e.day})),e.push(l.a.createElement("tr",null,l.a.createElement("td",null,"Saturday"),l.a.createElement("td",null,_(t[0].start)," - ",_(t[0].end))))):e.push(l.a.createElement("tr",null,l.a.createElement("td",null,"Saturday"),l.a.createElement("td",{style:{color:"red"}},"Closed"))),a.filter((function(e){return 6===e.day})).length>0?(t=a.filter((function(e){return 6===e.day})),e.push(l.a.createElement("tr",null,l.a.createElement("td",null,"Sunday"),l.a.createElement("td",null,_(t[0].start)," - ",_(t[0].end))))):e.push(l.a.createElement("tr",null,l.a.createElement("td",null,"Sunday"),l.a.createElement("td",{style:{color:"red"}},"Closed")))}return l.a.createElement(S.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Day"),l.a.createElement("th",null,"Hours"))),l.a.createElement("tbody",null,e))}()))))))))})),L=a(26);var P=function(){return l.a.createElement(L.a,null,l.a.createElement(g.c,null,l.a.createElement(g.a,{path:"/details"},l.a.createElement(A,null)),l.a.createElement(g.a,{path:"/"},l.a.createElement(j,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t,a){e.exports=a(112)},72:function(e,t,a){},73:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.c93671fd.chunk.js.map