(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{231:function(t,n,e){"use strict";var c=e(4),r=e(198),a=function(t){var n=t.children;return Object(c.jsx)(r.a,{container:!0,direction:"column",css:function(t){return{paddingBottom:t.spacing(15),width:"100%",minHeight:"100vh"}}},n)};e.d(n,"a",function(){return a})},232:function(t,n,e){"use strict";var c=e(30),r=e(4),a=e(198),E=e(112),i=e(207);function o(){var t=Object(c.a)(["\n                            flex-grow: 1;\n                        "]);return o=function(){return t},t}function u(){var t=Object(c.a)(["\n                    height: 100%;\n                    display: flex;\n                    align-items: center;\n                "]);return u=function(){return t},t}function s(){var t=Object(c.a)(["\n                height: var(--section-title-height);\n            "]);return s=function(){return t},t}var j=function(t){var n=t.title,e=t.children;return Object(r.jsx)(a.a,{item:!0,css:Object(r.css)(s())},Object(r.jsx)(E.a,{square:!0,css:Object(r.css)(u())},Object(r.jsx)(a.a,{container:!0,css:function(t){return{paddingLeft:t.spacing(4),paddingRight:t.spacing(4)}}},Object(r.jsx)(a.a,{item:!0,css:Object(r.css)(o())},Object(r.jsx)(i.a,{variant:"h4",component:"div"},Object(r.jsx)("span",null,n))),e)))};e.d(n,"a",function(){return j})},256:function(t,n,e){"use strict";e.r(n);var c,r,a=e(92),E=e(75),i=e(4),o=e(198),u=e(236),s=e(244),j=e(240),O=e(45),b=e(0),f=function(t){var n=t.routes;return Object(i.jsx)(b.Fragment,null,n.map(function(t){return"undefined"!==typeof t.paths?t.paths.map(function(n){return Object(i.jsx)(O.b,{path:n,key:n},function(n){if(n.match){var e=t.render();return"undefined"!==typeof e?e:void 0}})}):"undefined"!==typeof t.path?Object(i.jsx)(O.b,{path:t.path,key:t.path},function(n){if(n.match){var e=t.render();return"undefined"!==typeof e?e:void 0}}):null}))},p=e(231),d=e(232);!function(t){t[t.ALL=0]="ALL",t[t.NEW=1]="NEW",t[t.SENT=2]="SENT",t[t.IN_PROGRESS=3]="IN_PROGRESS",t[t.DONE=4]="DONE",t[t.REJECTED=5]="REJECTED",t[t.OVERDUE=6]="OVERDUE",t[t.DEACTIVATED=7]="DEACTIVATED"}(c||(c={})),function(t){t.ALL="all",t.NEW="new",t.SENT="sent",t.IN_PROGRESS="in-progress",t.DONE="done",t.REJECTED="rejected",t.OVERDUE="overdue",t.DEACTIVATED="deactivated"}(r||(r={}));var D=function(){var t,n=Object(b.useState)(0),e=Object(E.a)(n,2),D=e[0],l=e[1],R=(t={},Object(a.a)(t,r.ALL,"\u0412\u0441\u0435"),Object(a.a)(t,r.NEW,"\u041d\u043e\u0432\u044b\u0435"),Object(a.a)(t,r.SENT,"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435"),Object(a.a)(t,r.IN_PROGRESS,"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435"),Object(a.a)(t,r.DONE,"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"),Object(a.a)(t,r.REJECTED,"\u041e\u0442\u043e\u0437\u0432\u0430\u043d\u043d\u044b\u0435"),Object(a.a)(t,r.OVERDUE,"\u041f\u0440\u043e\u0441\u0440\u043e\u0447\u0435\u043d\u043d\u044b\u0435"),Object(a.a)(t,r.DEACTIVATED,"\u0414\u0435\u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435"),t);return Object(i.jsx)(p.a,null,Object(i.jsx)(f,{routes:[{paths:["",r.ALL],render:function(){return l(c.ALL)}},{path:r.NEW,render:function(){return l(c.NEW)}},{path:r.SENT,render:function(){return l(c.SENT)}},{path:r.IN_PROGRESS,render:function(){return l(c.IN_PROGRESS)}},{path:r.DONE,render:function(){return l(c.DONE)}},{path:r.REJECTED,render:function(){return l(c.REJECTED)}},{path:r.OVERDUE,render:function(){return l(c.OVERDUE)}},{path:r.DEACTIVATED,render:function(){return l(c.DEACTIVATED)}}]}),Object(i.jsx)(d.a,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u043d\u0438\u0439"}),Object(i.jsx)(o.a,{item:!0},Object(i.jsx)(u.a,{position:"static"},Object(i.jsx)(s.a,{value:D,css:function(t){return{paddingLeft:t.spacing(4)}}},Object(i.jsx)(j.a,{to:r.ALL,component:O.a,label:R[r.ALL]}),Object(i.jsx)(j.a,{to:r.NEW,component:O.a,label:R[r.NEW]}),Object(i.jsx)(j.a,{to:r.SENT,component:O.a,label:R[r.SENT]}),Object(i.jsx)(j.a,{to:r.IN_PROGRESS,component:O.a,label:R[r.IN_PROGRESS]}),Object(i.jsx)(j.a,{to:r.DONE,component:O.a,label:R[r.DONE]}),Object(i.jsx)(j.a,{to:r.REJECTED,component:O.a,label:R[r.REJECTED]}),Object(i.jsx)(j.a,{to:r.OVERDUE,component:O.a,label:R[r.OVERDUE]}),Object(i.jsx)(j.a,{to:r.DEACTIVATED,component:O.a,label:R[r.DEACTIVATED]})))))};e.d(n,"Tasks",function(){return D})}}]);
//# sourceMappingURL=7.7f10a225.chunk.js.map