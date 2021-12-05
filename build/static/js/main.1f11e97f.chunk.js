(this["webpackJsonpsimple-react-month-picker"]=this["webpackJsonpsimple-react-month-picker"]||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var r,c,i,o,a,s,d,l,u,b,h,f,j=n(0),p=n.n(j),O=n(18),x=n.n(O),m=(n(27),n(28),n(6)),g=n(3),v=n.n(g),w=n(4),y=n(5),k=y.a.div(r||(r=Object(w.a)(["\n  border: #eee 1px solid;\n  border-radius: 5px;\n  position: relative;\n  user-select: none;\n  min-width: 200px;\n\tbackground-color: white;\n"]))),S=y.a.div(c||(c=Object(w.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n  padding: 5px 10px;\n"]))),C=y.a.div(i||(i=Object(w.a)([""]))),M=n(22),E=y.a.div(o||(o=Object(w.a)(["\n  background-color: white;\n  border: #eee 1px solid;\n  position: absolute;\n  top: 35px;\n  right: 0;\n  z-index: 99999;\n  width: 425px;\n  flex-direction: row;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0 0 10px 0 rgb(0 0 0 / 20%);\n"]))),Y=y.a.div(a||(a=Object(w.a)(["\n  box-sizing: border-box;\n  flex: 0.5;\n  padding: 20px;\n  border-right: #eee 1px solid;\n"]))),T=y.a.div(s||(s=Object(w.a)(["\n  box-sizing: border-box;\n  flex: 1;\n  padding: 20px;\n"]))),N=y.a.div(d||(d=Object(w.a)(["\n  color: #575757;\n  margin: 0 0 20px 0;\n  user-select: none;\n"]))),P=y.a.div(l||(l=Object(w.a)(["\n  color: #282c34;\n  font-weight: bold;\n  cursor: pointer;\n"]))),A=y.a.div(u||(u=Object(w.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),B=y.a.div(b||(b=Object(w.a)(["\n  user-select: none;\n"]))),F=y.a.div(h||(h=Object(w.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  gap: 5px;\n  margin-top: 10px;\n"]))),z=y.a.div(f||(f=Object(w.a)(["\n  border: #eee 1px solid;\n  padding: 5px;\n  border-radius: 5px;\n  background-color: white;\n  text-align: center;\n  &:hover {\n    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);\n  }\n  &.selected {\n    background-color: #1d7f7a;\n    color: white;\n  }\n  pointer-events: ",";\n  opacity: ",";\n  cursor: ",";\n"])),(function(t){return t.disabled?"none":"auto"}),(function(t){return t.disabled?.5:1}),(function(t){return t.disabled?"default":"pointer"})),L=n(8),D=n(9),I=n(2),J=function(t){var e=t.presets,n=t.onChange,r=Object(j.useState)(0),c=Object(m.a)(r,2),i=c[0],o=c[1],a=Object(j.useState)([]),s=Object(m.a)(a,2),d=s[0],l=s[1],u=Object(j.useState)([]),b=Object(m.a)(u,2),h=b[0],f=b[1];Object(j.useEffect)((function(){for(var t=[],e=function(e){var n=[1,2,3,4,5,6,7,8,9,10,11,12].map((function(t){return{selected:!1,date:v()(e+"-"+t+"-01 00:00:00").toDate()}}));t.push({year:e,months:n})},n=2010;n<=Number(v()().format("YYYY"));n++)e(n);l(t),o(t.length-1)}),[]),Object(j.useEffect)((function(){2===h.length&&n(h)}),[h,n]);var p=d[i];return p?Object(I.jsxs)(E,{children:[e&&e.length&&Object(I.jsxs)(Y,{children:[Object(I.jsx)(N,{children:"PRESETS"}),e.map((function(t,e){return Object(I.jsx)(P,{onClick:function(e){return function(t){var e=t.start,n=t.end;f([e,n])}(t)},children:t.title},e)}))]}),Object(I.jsxs)(T,{children:[Object(I.jsx)(N,{children:"SELECT A MONTH RANGE:"}),Object(I.jsxs)(A,{children:[Object(I.jsx)(L.a,{icon:D.a,style:{width:20,height:20,opacity:i?1:.2,cursor:i?"pointer":"default"},onClick:function(t){return i?o(i-1):null}}),Object(I.jsx)(B,{children:p.year}),Object(I.jsx)(L.a,{icon:D.b,style:{width:20,height:20,opacity:i===d.length-1?.2:1,cursor:i===d.length-1?"default":"pointer"},onClick:function(t){return i<d.length-1?o(i+1):null}})]}),Object(I.jsx)(F,{children:p.months.map((function(t,e){return Object(I.jsxs)(z,{className:!0===t.selected||2===h.length&&v()(t.date).isBetween(v()(h[0]),v()(h[1]))?"selected":"",disabled:v()(t.date).isAfter(v()().endOf("month")),onClick:function(n){return function(t,e){var n=Object(M.a)(d);n[i].months[t].selected=!0,l(n),h.length?v()(h[0]).isBefore(v()(e.date))?f([h[0],e.date]):f([e.date,h[0]]):f([e.date])}(e,t)},children:[t.selected," ",v()(t.date).format("MMM")]},e)}))})]})]}):null},R=Object(j.memo)(J),G=function(t){var e=t.onChange,n=t.value,r=t.presets,c=t.style,i=Object(j.useState)(!1),o=Object(m.a)(i,2),a=o[0],s=o[1],d=Object(j.useState)(!1),l=Object(m.a)(d,2),u=l[0],b=l[1],h=Object(j.useState)(n),f=Object(m.a)(h,2),p=f[0],O=f[1];Object(j.useEffect)((function(){if(!p||p.length<2)return b("No dates selected");var t=r&&r.length?r.find((function(t){return(v()(t.start).isSame(v()(p[0]),"month")||t.start)===p[0]&&(v()(t.end).isSame(v()(p[1]),"month")||t.end)===p[1]})):null;return b(t?t.title:v()(p[0]).format("MMM YY")+" - "+v()(p[1]).format("MMM YY"))}),[p,r]);return Object(I.jsxs)(k,{style:c,children:[Object(I.jsxs)(S,{onClick:function(t){return s(!a)},children:[Object(I.jsx)(C,{children:u}),Object(I.jsx)(L.a,{icon:D.c,style:{width:14,height:14}})]}),a&&Object(I.jsx)(R,{presets:r,onChange:function(t){O(t),"function"===typeof e&&e(t),setTimeout((function(){s(!1)}),200)}})]})},H=Object(j.memo)(G);var q=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(H,{style:{width:300,margin:"50px auto"},presets:[{title:"This month",start:v.a.utc().startOf("month"),end:v.a.utc().endOf("month")},{title:"Past 3 months",start:v.a.utc().subtract(2,"month").startOf("month"),end:v.a.utc().endOf("month")},{title:"Past 6 months",start:v.a.utc().subtract(5,"month").startOf("month"),end:v.a.utc().endOf("month")},{title:"Past Year",start:v.a.utc().subtract(12,"month").startOf("month"),end:v.a.utc().endOf("month")},{title:"All time",start:null,end:null}]})})},K=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),i(t),o(t)}))};x.a.render(Object(I.jsx)(p.a.StrictMode,{children:Object(I.jsx)(q,{})}),document.getElementById("root")),K()}},[[36,1,2]]]);
//# sourceMappingURL=main.1f11e97f.chunk.js.map