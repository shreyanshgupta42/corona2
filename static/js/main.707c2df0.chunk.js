(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],{184:function(e,n,t){},331:function(e,n,t){"use strict";t.r(n);var a,o,i,r,c,s,l,d,b=t(0),u=t(81),j=t.n(u),h=t(65),x=(t(184),t(18)),p=t(24),f=t(16),g=t(26),m=t(154),O=t.n(m),v=Object(p.b)(O.a)(a||(a=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n"]))),y=Object(p.b)(h.b)(o||(o=Object(g.a)(["\n  color: black;\n  text-decoration: none;\n  div {\n    width: 300px;\n    height: 100%;\n    margin: 0 15px 40px;\n    box-shadow: 0px 0px 50px 0px rgba(219, 219, 219, 5);\n    margin-top: 10px;\n    border-radius: 15px;\n    padding: 5px 20px;\n    &:hover {\n      cursor: pointer;\n      text-decoration-color: blue;\n      color: white;\n      background-color: #8c8c8c;\n    }\n    h1 {\n      text-align: center;\n      margin: 10px 0;\n      font-size: 21px;\n    }\n\n    p {\n      box-sizing: border-box;\n      width: 100%;\n      margin: 0;\n      position: relative;\n      span {\n        box-sizing: border-box;\n        width: 100px;\n        text-align: right;\n      }\n    }\n  }\n  @media (max-width: 768px) {\n    font-size: 10px;\n    div{\n      width: 200px;\n    }\n    h1{\n      font-size: 12px;\n    }\n  }\n"]))),C=t(2),S=function(e){var n=e.Country,t=e.TotalConfirmed,a=e.TotalDeath,o=e.TotalRecovered,i=new Intl.NumberFormat("en-US",{maximumSignificantDigits:3});return Object(C.jsx)(y,{to:"/".concat(n),children:Object(C.jsxs)("div",{children:[Object(C.jsx)("h1",{children:n}),Object(C.jsxs)("p",{children:["Total Confirmed:"," ","\u2003\u2003\u2003\u2003\u2003\u2003",Object(C.jsx)("span",{style:{color:"#b30000"},children:i.format(t)}),Object(C.jsx)("br",{}),"Total Death: ","    ","\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003",Object(C.jsx)("span",{style:{color:"#333333"},children:i.format(a)}),Object(C.jsx)("br",{}),"Total Recovered:"," ","\u2003\u2003\u2003\u2003\u2003\u2003",Object(C.jsx)("span",{style:{color:"#006600"},children:i.format(o)})," "]}),Object(C.jsx)("br",{})]})})},A=function(e){var n=e.response,t=e.input,a=n.data;return Object(C.jsx)(v,{className:"mt-2",children:a.map((function(e){return 0===e.name.toLowerCase().search(t)?Object(C.jsx)("div",{children:Object(C.jsx)(S,{Country:e.name,TotalConfirmed:e.latest_data.confirmed,TotalDeath:e.latest_data.deaths,TotalRecovered:e.latest_data.recovered},e.name)},e.name):void 0}))})},R=p.b.input(i||(i=Object(g.a)(["\n  display: block;\n  font-family: 'Roboto', sans-serif;\n  width: 500px;\n  height: 18px;\n  margin: auto;\n  margin-bottom: 50px;\n  outline: none;\n  padding: 13px 15px;\n  border: 1px solid #dbdbdb;\n  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);\n  font-size: 14px;\n  border-radius: 20px;\n  color: #8d8d8d;\n\n  &::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n  @media (max-width: 768px) {\n    font-size: 10px;\n    width: 350px;\n  }\n"]))),T=p.b.div(r||(r=Object(g.a)(["\n  text-align: center;\n  margin: 0 0 40px;\n\n  h1 {\n    color: ",";\n    text-transform: uppercase;\n    margin: 0 0 10px;\n  }\n  @media (max-width: 768px) {\n    font-size: 10px;\n  }\n"])),(function(e){return e.theme.mainColors.blue})),M=p.b.div(c||(c=Object(g.a)(["\n  /* margin-left: 380px; */\n  margin-bottom: 50px;\n  display: flex;\n  justify-content: center;\n  span {\n    font-weight: bold;\n    margin-left: 20px;\n    padding: 10px;\n    border-radius: 10px;\n  }\n  @media (max-width: 768px) {\n    font-size: 10px;\n  }\n"]))),G=p.b.div(s||(s=Object(g.a)(["\n  margin: auto;\n  width: 1400px;\n  @media (max-width: 768px) {\n    width: 700px;\n  }\n"]))),N=new Intl.NumberFormat("en-US",{maximumSignificantDigits:3}),B=function(e,n,t){if(void 0!==e.data&&void 0!==n.ID)return Object(C.jsxs)("div",{children:[Object(C.jsxs)(M,{children:[Object(C.jsxs)("span",{style:{color:"#b30000",background:"#ff9999"},children:["TotalConfirmed: ",N.format(n.Global.TotalConfirmed)]}),Object(C.jsxs)("span",{style:{color:"#006600",background:"#99ff99"},children:["TotalDeath: ",N.format(n.Global.TotalDeaths)]}),Object(C.jsxs)("span",{style:{color:"#333333",background:"#cccccc"},children:["TotalRecovered: ",N.format(n.Global.TotalRecovered)]})]}),Object(C.jsx)(A,{response:e,input:t})]})},L=function(){var e=Object(b.useState)(""),n=Object(f.a)(e,2),t=n[0],a=n[1],o=Object(b.useState)(""),i=Object(f.a)(o,2),r=i[0],c=i[1],s=Object(b.useState)(""),l=Object(f.a)(s,2),d=l[0],u=l[1];return Object(b.useEffect)((function(){return fetch("https://corona-api.com/countries").then((function(e){return e.json()})).then((function(e){c(e)})).catch((function(e){console.error(e)})),function(){}}),[]),Object(b.useEffect)((function(){return fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(e){u(e),console.log(e.Global.TotalConfirmed)})).catch((function(e){console.error(e)})),function(){}}),[]),Object(C.jsxs)(G,{children:[Object(C.jsx)(T,{children:Object(C.jsx)("h1",{children:"COVID-19 PANDEMIC TRACKER"})}),Object(C.jsx)(R,{type:"text",placeholder:"Type a Country",value:t,onChange:function(e){a(e.target.value)}}),B(r,d,t)]})},w=p.b.div(l||(l=Object(g.a)(["\n  color: #636362;\n  text-align: center;\n  h1 {\n    width: 620px;\n    color: black;\n    border-bottom: 1px solid #b0b0b0;\n  }\n  h5 {\n    color: gray;\n  }\n  div {\n    span {\n      width: 300px;\n      height: 50px;\n      margin: auto;\n      margin-left: 10px;\n      margin-top: 1px;\n      padding: 20px 20px;\n    }\n  }\n  @media (max-width: 768px) {\n    font-size: 10px;\n    h1 {\n      width: 430px;\n    }\n  }\n"]))),D=(t(191),t(113)),E=t.n(D),I=p.b.button(d||(d=Object(g.a)(["\n  text-align: center;\n  font-size: 20px;\n  padding: 8px;\n  @media (max-width: 768px) {\n    font-size: 10px;\n  }\n"]))),k={China:"CHN",Thailand:"Tha","S. Korea":"KOR",Singapore:"SGP",Philippines:"PHL",Malaysia:"MYS",Vietnam:"VNM",Australia:"AUS",Mexico:"MEX",Brazil:"BRA",Colombia:"COL",France:"FRA",Nepal:"Nepal",Canada:"CAN",Cambodia:"KHM","Sri Lanka":"LKA","Cote d'Ivoire":"CIV",Germany:"DEU",Finland:"FIN","United Arab Emirates":"ARE",India:"IND",Italy:"ITA","United Kingdom":"GBR",Russia:"RUS",Sweden:"SWE",Spain:"ESP",Belgium:"BEL",Egypt:"EGY",Iran:"IRN",Israel:"ISR",Lebanon:"LBN",Iraq:"IRQ",Oman:"OMN",Afghanistan:"AFG",Bahrain:"BHR",Kuwait:"KWT",Austria:"AUT",USA:"usa",Algeria:"DZA",Croatia:"HRV",Switzerland:"CHE",Pakistan:"PAK",Georgia:"GEO",Greece:"GRC","North Macedonia":"MKD",Norway:"NOR",Romania:"ROU",Denmark:"DNK",Estonia:"EST",Netherlands:"NLD","San Marino":"SMR",Azerbaijan:"AZE",Belarus:"BLR",Iceland:"ISL",Lithuania:"LTU","New Zealand":"NZL",Nigeria:"NGA",Ireland:"IRL",Luxembourg:"LUX",Monaco:"MCO",Qatar:"QAT",Ecuador:"ECU",Czechia:"CZE",Armenia:"ARM","Dominican Republic":"DOM",Indonesia:"IDN",Portugal:"PRT",Andorra:"AND",Latvia:"LVA",Morocco:"MAR","Saudi Arabia":"SAU",Senegal:"SEN",Argentina:"ARG",Chile:"CHL",Jordan:"JOR",Ukraine:"UKR","Saint Barthelemy":"BLM",Hungary:"HUN","Faroe Islands":"FRO",Gibraltar:"GIB",Liechtenstein:"LIE",Poland:"POL",Tunisia:"TUN","West Bank and Gaza":"PSE","Bosnia and Herzegovina":"BIH",Slovenia:"SVN","South Africa":"ZAF",Bhutan:"BTN",Cameroon:"CMR","Costa Rica":"CRI",Peru:"PER",Serbia:"SRB",Slovakia:"SVK",Togo:"TGO","Holy See":"VAT","French Guiana":"GUF",Malta:"MLT",Martinique:"MTQ",Bulgaria:"BGR",Maldives:"MDV",Bangladesh:"BGD",Moldova:"MDA",Paraguay:"PRY",Albania:"ALB",Cyprus:"CYP",Brunei:"BRN","Macao SAR":"MAC","Saint Martin":"MAF","Burkina Faso":"BFA","Channel Islands":"GGY-JEY",Mongolia:"MNG",Panama:"PAN","Cruise Ship":"cruise","Taiwan*":"TWN",Bolivia:"BOL",Honduras:"HND","Congo (Kinshasa)":"COD",Jamaica:"JAM",Reunion:"REU",Turkey:"TUR",Cuba:"CUB",Guyana:"GUY",Kazakhstan:"KAZ","Cayman Islands":"CYM",Guadeloupe:"GLP",Ethiopia:"ETH",Sudan:"SDN",Guinea:"GIN","Antigua and Barbuda":"ATG",Aruba:"ABW",Kenya:"KEN",Uruguay:"URY",Ghana:"GHA",Jersey:"JEY",Namibia:"NAM",Seychelles:"SYC","Trinidad and Tobago":"TTO",Venezuela:"VEN",Curacao:"CUW",Eswatini:"SWZ",Gabon:"GAB",Guatemala:"GTM",Guernsey:"GGY",Mauritania:"MRT",Rwanda:"RWA","Saint Lucia":"LCA","Saint Vincent and the Grenadines":"VCT",Suriname:"SUR",Kosovo:"RKS","Central African Republic":"CAF","Congo (Brazzaville)":"COG","Equatorial Guinea":"GNQ",Uzbekistan:"UZB",Guam:"GUM","Puerto Rico":"PRI",Benin:"BEN",Greenland:"GRL",Liberia:"LBR",Mayotte:"MYT",Somalia:"SOM",Tanzania:"TZA",Bahamas:"BHS",Barbados:"BRB",Montenegro:"MNE",Gambia:"GMB",Kyrgyzstan:"KGZ",Mauritius:"MUS",Zambia:"ZMB",Djibouti:"DJI",Chad:"TCD","El Salvador":"SLV",Fiji:"FJI",Nicaragua:"NIC",Madagascar:"MDG",Haiti:"HTI",Angola:"AGO","Cabo Verde":"CPV",Niger:"NER","Papua New Guinea":"PNG",Zimbabwe:"ZWE","Timor-Leste":"TLS",Eritrea:"ERI",Uganda:"UGA",Dominica:"DMA",Grenada:"GRD",Mozambique:"MOZ",Syria:"SYR",Belize:"BLZ",Laos:"LAO",Libya:"LBY","Diamond Princess":"NA-SHIP-DP","Guinea-Bissau":"GNB",Mali:"MLI","Saint Kitts and Nevis":"KNA",Botswana:"BWA",Burundi:"BDI","Sierra Leone":"SLE",Burma:"MMR",Malawi:"MWI","South Sudan":"SSD","Western Sahara":"ESH","Sao Tome and Principe":"STP","MS Zaandam":"NA-SHIP-MSZ",Yemen:"YEM",Comoros:"COM",Tajikistan:"TJK",Lesotho:"LSO","Solomon Islands":"SLB","Marshall Islands":"MHL",Vanuatu:"VUT",Samoa:"WSM",Kiribati:"KIR",Palau:"PLW"},U=t(333),P=t(337),K=t(172),z=t(173),F=t(73),H=t(70),_=t(175),W=function(e){var n,t=e.data,a=e.render;return console.log(a),1===a?n="#ff3049":2===a?n="green":3===a&&(n="grey"),Object(C.jsx)("div",{children:Object(C.jsxs)(U.a,{width:500,height:350,data:t||[],margin:{top:5,right:30,left:20,bottom:5},children:[Object(C.jsx)(P.a,{strokeDasharray:"3 3"}),Object(C.jsx)(K.a,{dataKey:"date"}),Object(C.jsx)(z.a,{}),Object(C.jsx)(F.a,{}),Object(C.jsx)(H.a,{}),Object(C.jsx)(_.a,{dataKey:"val",fill:n})]})})};console.log(1);var V=[{date:"1",val:0},{date:"2",val:0},{date:"3",val:0},{date:"4",val:0},{date:"5",val:0},{date:"6",val:0},{date:"7",val:0},{date:"8",val:0},{date:"9",val:0},{date:"9",val:0},{date:"9",val:0},{date:"9",val:0},{date:"9",val:0},{date:"9",val:0}],Z=function(e){var n=e.Country;console.log(4);var t=Object(b.useState)(0),a=Object(f.a)(t,2),o=a[0],i=a[1],r=Object(b.useState)(!0),c=Object(f.a)(r,2),s=c[0],l=c[1];console.log(n),console.log(k["".concat(n)]);var d=k["".concat(n)];return console.log(5),Object(b.useEffect)((function(){l(!0);for(var e=0,n=new Date,t=function(t){i=15-t,r=new Date(n.getTime()-24*i*60*60*1e3),V[t-1].date=String(r).substring(4,10),c=r.getDate(),s=r.getMonth()+1,b=r.getFullYear(),c=("0"+c).slice(-2),s=("0"+s).slice(-2),console.log("7"+t),console.log(c+" "+s+" "+b+" "+r),fetch("https://covid-api.com/api/reports/total?date=".concat(b,"-").concat(s,"-").concat(c,"&iso=").concat(d)).then((function(e){return console.log("8"+t),e.json()})).then((function(n){console.log("9"+t),1===o?(e++,V[t-1].val=n.data.confirmed_diff,console.log(n.data.confirmed_diff+" "+t),14===e&&l(!1)):2===o?(e++,V[t-1].val=n.data.recovered_diff,console.log(n.data.recovered_diff+" "+t),14===e&&l(!1)):3===o&&(e++,V[t-1].val=n.data.deaths_diff,console.log(n.data.deaths_diff+" "+t),14===e&&l(!1))}))},a=1;a<=14;a++){var i,r,c,s,b;t(a)}}),[d,o]),Object(b.useEffect)((function(){console.log("render "+o),console.log("loading "+s)}),[o,s]),Object(b.useEffect)((function(){console.log("loading "+s)}),[s]),Object(C.jsxs)("div",{children:[console.log(10),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:[console.log(11),Object(C.jsx)(I,{style:{color:"red"},onClick:function(){i(1),console.log("confirmed clicked"),l(!0)},type:"button",children:"Confirmed"}),Object(C.jsx)(I,{style:{marginLeft:"150px",color:"green"},onClick:function(){i(2),console.log("recovered clicked"),l(!0)},type:"button",children:"Recovered"}),Object(C.jsx)(I,{style:{marginLeft:"150px",color:"grey"},onClick:function(){i(3),console.log("death button clicked"),l(!0)},type:"button",children:"Death"})]}),console.log(12),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"30px"},children:[console.log(13),s&&Object(C.jsx)("div",{children:"loading"}),1===o&&!1===s&&Object(C.jsx)(W,{data:V,render:o}),2===o&&!1===s&&Object(C.jsx)(W,{data:V,render:o}),3===o&&!1===s&&Object(C.jsx)(W,{data:V,render:o})]})]})};var Y=function(e){var n=e.Country,t=e.confirmed,a=e.death,o=e.recovered,i=e.td,r=e.tc,c=e.updatedAt,s=e.population,l=e.critical,d=e.deathrate,b=e.recoveryrate,u=e.casespermillion,j=new Date(c);console.log(j),c=String(j).substring(4,15);var h=n;n=n.toUpperCase(),d=d?d.toFixed(2):0,b=b?b.toFixed(2):0;var x,p=new Intl.NumberFormat("en-US",{maximumSignificantDigits:3});return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(w,{children:[Object(C.jsx)("div",{style:{display:"flex",alignContent:"center",justifyContent:"center"},children:Object(C.jsxs)("h1",{children:[n,Object(C.jsxs)("div",{style:{display:"flex",alignContent:"center",justifyContent:"center",fontSize:"15px"},children:[Object(C.jsxs)("h5",{children:["Updated: ",c]}),Object(C.jsxs)("h5",{style:{paddingLeft:"30px"},children:["Population: ",(x=s,x>999&&x<1e6?(x/1e3).toFixed(1)+"K":x>1e6?(x/1e6).toFixed(1)+"M":x<900?x:void 0)]})]})]})}),Object(C.jsxs)("div",{style:{height:"75px",paddingTop:"20px"},children:[Object(C.jsxs)("span",{style:{color:"#b30000",background:"#ff9999",fontWeight:"bold"},children:["Total Cases: ",p.format(t)]}),Object(C.jsxs)("span",{style:{color:"#006600",background:"#99ff99",fontWeight:"bold"},children:["Total Recovered: ",p.format(o)]}),Object(C.jsxs)("span",{style:{color:"#333333",background:"#cccccc",fontWeight:"bold"},children:["Total Death: ",p.format(a)]})]}),Object(C.jsxs)("div",{className:"d-flex justify-content-between align-item-center",style:{color:"gray",borderColor:"green"},children:[Object(C.jsxs)("span",{style:{borderRight:"1px solid #b0b0b0"},children:["Cases today: ",p.format(r)]}),Object(C.jsxs)("span",{style:{borderRight:"1px solid #b0b0b0"},children:["Deaths today: ",p.format(i)]}),Object(C.jsxs)("span",{style:{borderRight:"1px solid #b0b0b0"},children:["Critical: ",p.format(l)]}),Object(C.jsxs)("span",{children:["Cases per Million: ",p.format(u)]})]})]}),Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginTop:"40px",fontSize:"15px",marginBottom:"60px"},children:[Object(C.jsx)(E.a,{radius:70,progress:d,strokeWidth:4,strokeColor:"#b30000",strokeLinecap:"square",trackStrokeWidth:10,children:Object(C.jsx)("div",{className:"indicator",style:{display:"flex",height:"100%",justifyContent:"center",margin:"auto",position:"absolute",textAlign:"center",top:"0",width:"100%",paddingTop:"70px"},children:Object(C.jsxs)("div",{children:["Death Rate:",Object(C.jsx)("br",{}),0!==d&&Object(C.jsxs)("div",{children:[d,"%"]}),0===d&&Object(C.jsx)("div",{children:"NA"})]})})}),Object(C.jsx)(E.a,{radius:70,progress:b,strokeWidth:4,strokeColor:"#006600",strokeLinecap:"square",trackStrokeWidth:10,children:Object(C.jsx)("div",{className:"indicator",style:{display:"flex",height:"100%",justifyContent:"center",margin:"auto",position:"absolute",textAlign:"center",top:"0",width:"100%",paddingTop:"70px"},children:Object(C.jsxs)("div",{children:["Recovery Rate:",Object(C.jsx)("br",{}),0!==b&&Object(C.jsxs)("div",{children:[b,"%"]}),0===b&&Object(C.jsx)("div",{children:"NA"})]})})})]}),Object(C.jsx)(Z,{Country:h})]})},J=function(e,n){if(""!==e)return e.map((function(e){return e.name===n.country?Object(C.jsx)("div",{children:Object(C.jsx)(Y,{Country:e.name,match:n,confirmed:e.latest_data.confirmed,death:e.latest_data.deaths,recovered:e.latest_data.recovered,td:e.today.deaths,tc:e.today.confirmed,updatedAt:e.updated_at,population:e.population,critical:e.latest_data.critical,deathrate:e.latest_data.calculated.death_rate,recoveryrate:e.latest_data.calculated.recovery_rate,casespermillion:e.latest_data.calculated.cases_per_million_population})},e.name):void 0}))},q=function(){var e=Object(b.useState)(""),n=Object(f.a)(e,2),t=n[0],a=n[1];Object(b.useEffect)((function(){return fetch("https://corona-api.com/countries").then((function(e){return e.json()})).then((function(e){a(e.data)})).catch((function(e){console.error(e)})),function(){}}),[]);var o=Object(x.f)();return Object(C.jsx)("div",{children:J(t,o)})},Q={mainColors:{blue:"#2400ff",gray:"#c6c6c6",dark:"#353535"}};var X=function(){return Object(C.jsx)(p.a,{theme:Q,children:Object(C.jsxs)(x.c,{children:[Object(C.jsx)(x.a,{exact:!0,path:"/",children:Object(C.jsx)(L,{})}),Object(C.jsx)(x.a,{exact:!0,path:"/:country",children:Object(C.jsx)(q,{})}),Object(C.jsx)(x.a,{children:"This is 404 page"})]})})},$=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,339)).then((function(n){var t=n.getCLS,a=n.getFID,o=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),a(e),o(e),i(e),r(e)}))};j.a.render(Object(C.jsx)(h.a,{children:Object(C.jsx)(X,{})}),document.getElementById("root")),$()}},[[331,1,2]]]);
//# sourceMappingURL=main.707c2df0.chunk.js.map