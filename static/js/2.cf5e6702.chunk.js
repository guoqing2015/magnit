(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{256:function(t,e,n){var o;window,t.exports=(o=n(29),function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(4)),c=function(){function t(t,e){var n=this;this.focusedPuzzleState=t,this.toolbarTopPositionState=e,this.throttledChainCleaning=r.default.throttle(function(){n.focusedPuzzleState[0].length=0},100)}return t.prototype.onPuzzleFocus=function(t){var e=this.focusedPuzzleState,n=e[0],o=e[1];this.throttledChainCleaning(),n.includes(t)?o(n.slice()):(n.push(t),o(n.slice()))},t.prototype.onPuzzleBlur=function(t){t.preventDefault(),t.stopPropagation()},t.prototype.updateToolbarTopPosition=function(){var t=this.focusedPuzzleState[0],e=this.toolbarTopPositionState[1];if(t.length){var n=r.default.head(t);if(n){var o=document.getElementById(n);if(o){var c=o.getBoundingClientRect().top;e(window.scrollY+c-128)}}}},t}();e.EditorServiceImpl=c},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(2)),o(n(6)),o(n(9))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=n(3),c=n(5),i=n(0);!function(t){t[t.TEMPLATE=0]="TEMPLATE",t[t.TASK=1]="TASK"}(o=e.EEditorType||(e.EEditorType={})),e.getEditorService=function(t,e){switch(t){case o.TASK:return new(r.TaskEditorService.bind.apply(r.TaskEditorService,[void 0].concat(e)));case o.TEMPLATE:return new(c.TemplateEditorService.bind.apply(c.TemplateEditorService,[void 0].concat(e)));default:return console.log("%c%s","color:#F07178","Current type ("+t+") service does not exist!"),new(i.EditorServiceImpl.bind.apply(i.EditorServiceImpl,[void 0].concat(e)))}}},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(n(0).EditorServiceImpl);e.TaskEditorService=c},function(t,e){t.exports=o},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e}(n(0).EditorServiceImpl);e.TemplateEditorService=c},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(7)),o(n(8))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.EMPTY=""}(e.ETerminals||(e.ETerminals={}))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.GROUP="group",t.QUESTION="question",t.RADIO_ANSWER="radio_answer",t.CHECKBOX_ANSWER="checkbox_answer",t.DROPDOWN_ANSWER="dropdown_answer",t.REFERENCE_ANSWER="reference_answer",t.UPLOAD_FILES="upload_files",t.DATE_ANSWER="date_answer",t.TEXT_ANSWER="text_answer",t.NUMERIC_ANSWER="numeric_answer"}(e.EPuzzleType||(e.EPuzzleType={}))},function(t,e,n){"use strict";function o(t){return 1===t.toString().length?"0"+t:t.toString()}Object.defineProperty(e,"__esModule",{value:!0}),e.getFriendlyDate=function(t){return o(t.getDate())+"."+o(t.getMonth()+1)+"."+t.getFullYear()}}]))},258:function(t,e,n){"use strict";n.r(e);var o=n(47),r=n(119),c=n(95),i=n(12),a=n(0),s=n(252),u=n(251),l=n(55),p=n(250),d=n(51),f=n(253),b=n(118),j=n(117),O=n(130),h=n(84),m=n(29),v=n.n(m),x=n(256);function g(){var t=Object(o.a)(["\n                                width: 180px;\n                            "]);return g=function(){return t},t}function y(){var t=Object(o.a)(["\n                            width: 180px;\n                        "]);return y=function(){return t},t}var _=[{id:"title",sortable:!0,label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u0430"},{id:"description",label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},{id:"createdAt",label:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f"},{id:"updatedAt",label:"\u0414\u0430\u0442\u0430 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"}],E=function(){var t=Object(a.useContext)(j.a),e=Object(a.useState)([]),n=Object(c.a)(e,2),o=n[0],m=n[1],E=Object(a.useState)({redirect:!1,to:""}),S=Object(c.a)(E,2),T=S[0],w=S[1];Object(a.useEffect)(function(){Object(b.c)(t.courier).then(function(t){t.templates=t.templates.map(function(t){return Object(r.a)({},t,{createdAt:Object(x.getFriendlyDate)(new Date(t.createdAt)),updatedAt:Object(x.getFriendlyDate)(new Date(t.updatedAt))})}),m(t.templates)}).catch(console.error)},[t.courier]);var P=!o.length;return Object(i.jsx)(u.a,null,T.redirect&&Object(i.jsx)(l.b,{to:"templates/edit/".concat(T.to),noThrow:!0}),Object(i.jsx)(s.a,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432"},Object(i.jsx)(O.a,{item:!0,hidden:P},Object(i.jsx)(p.CustomButton,{component:l.a,to:"create",variant:"contained",title:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d",scheme:"blue",icon:Object(i.jsx)(d.AddIcon,null),css:Object(i.css)(y())}))),P&&Object(i.jsx)(f.a,{title:"\u0428\u0430\u0431\u043b\u043e\u043d\u043e\u0432 \u043d\u0435\u0442",actionName:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d",button:Object(i.jsx)(p.CustomButton,{component:l.a,to:"create",icon:Object(i.jsx)(d.AddIcon,null),title:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d",css:Object(i.css)(g())}),description:"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443"}),!P&&Object(i.jsx)(h.a,{square:!0,css:function(t){return{margin:t.spacing(3),boxShadow:"0px 0px ".concat(t.spacing(2)," ").concat(t.colors.lightGray," !important")}}},Object(i.jsx)(O.a,{container:!0,direction:"row",css:function(t){return{marginTop:t.spacing(2)}}},Object(i.jsx)(O.a,{container:!0,direction:"column",css:function(t){return{padding:t.spacing(3)}}},Object(i.jsx)(O.a,{container:!0,direction:"row",spacing:2},Object(i.jsx)(O.a,{item:!0,xs:!0},Object(i.jsx)(p.InputField,{placeholder:"\u041f\u043e\u0438\u0441\u043a ...",fullWidth:!0,css:function(t){return{borderRadius:t.radius(5),background:t.colors.white,border:"1px solid ".concat(t.colors.lightGray),transition:"border 0.25s ease-in-out",cursor:"pointer",":hover, :active":{border:"1px solid ".concat(t.colors.primary)},div:{":before, :after":{border:"none !important"}},input:{padding:"".concat(t.spacing(2)," ").concat(t.spacing(4))}}}}))),Object(i.jsx)(O.a,{item:!0,css:function(t){return{padding:t.spacing(3)}}},Object(i.jsx)(p.TableWrapper,{columns:_,data:o,onRowClick:function(t){v.a.isObject(t)&&v.a.has(t,"id")&&w({redirect:!0,to:v.a.get(t,"id")})}}))))))},S=n(56),T=n(254),w=n(134),P=n(111),C=n(127),A=n(137),M=n(135),k=n(136);function R(){var t=Object(o.a)(["\n                            display: flex;\n                            align-items: center;\n                        "]);return R=function(){return t},t}var z=function(t){var e=t.messages,n=t.error,o=t.open,r=Object(T.a)(t,["messages","error","open"]);return Object(i.jsx)(w.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:o,autoHideDuration:2500,onClose:r.onClose},Object(i.jsx)(P.a,{css:function(t){return{background:n?t.colors.red:t.colors.green,boxShadow:"0 4px 8px ".concat(n?t.colors.red:t.colors.green,"50")}},message:Object(i.jsx)("span",{css:Object(i.css)(R())},n?Object(i.jsx)(A.a,{css:function(t){return{marginRight:t.spacing(1)}}}):Object(i.jsx)(M.a,{css:function(t){return{marginRight:t.spacing(1)}}}),n?e.error:e.success),action:[Object(i.jsx)(C.a,{key:"close",color:"inherit",onClick:r.onClose},Object(i.jsx)(k.a,null))]}))},D=function(){var t=Object(a.useContext)(j.a),e=Object(a.useState)({}),n=Object(c.a)(e,2),o=n[0],r=n[1],f=Object(a.useState)(!1),h=Object(c.a)(f,2),m=h[0],x=h[1],g=Object(a.useState)(!1),y=Object(c.a)(g,2),_=y[0],E=y[1],T=Object(a.useState)(!1),w=Object(c.a)(T,2),P=w[0],C=w[1];return Object(i.jsx)(u.a,null,P&&Object(i.jsx)(l.b,{to:"/templates",noThrow:!0}),Object(i.jsx)(s.a,{title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u0430"},Object(i.jsx)(O.a,{item:!0},Object(i.jsx)(p.CustomButton,{variant:"contained",title:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",scheme:"blue",icon:Object(i.jsx)(d.CheckIcon,null),onClick:function(){Object(b.a)(t.courier,o).then(function(){return E(!0)}).catch(function(){E(!0),x(!0)})}}))),Object(i.jsx)(O.a,{css:function(t){return{maxWidth:t.maxTemplateWidth,margin:t.spacing(4),position:"relative",opacity:_?.5:1,transition:"opacity 0.3s ease-in-out",pointerEvents:_?"none":"initial"}}},Object(i.jsx)(S.TemplateEditor,{css:function(t){return{background:t.colors.main}},onChange:function(t){r(v.a.cloneDeep(t))}})),Object(i.jsx)(z,{open:_,error:m,onClose:function(t,e){"clickaway"!==e&&(m||C(!0),E(!1),setTimeout(function(){return x(!1)},100))},messages:{success:"\u0428\u0430\u0431\u043b\u043e\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d!",error:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430!"}}))},I=function(t){var e=t.templateId,n=Object(a.useContext)(j.a),o=Object(a.useState)({}),r=Object(c.a)(o,2),f=r[0],h=r[1],m=Object(a.useState)(!1),x=Object(c.a)(m,2),g=x[0],y=x[1],_=Object(a.useState)(!1),E=Object(c.a)(_,2),T=E[0],w=E[1],P=Object(a.useState)(!1),C=Object(c.a)(P,2),A=C[0],M=C[1];return Object(a.useEffect)(function(){Object(b.b)(n.courier,e).then(function(t){return h(JSON.parse(t.template))}).catch(console.error)},[n.courier,e]),Object(i.jsx)(u.a,null,A&&Object(i.jsx)(l.b,{to:"/templates",noThrow:!0}),Object(i.jsx)(s.a,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0448\u0430\u0431\u043b\u043e\u043d\u0430"},Object(i.jsx)(O.a,{item:!0},Object(i.jsx)(p.CustomButton,{variant:"contained",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",scheme:"blue",icon:Object(i.jsx)(d.CheckIcon,null),onClick:function(){Object(b.d)(n.courier,e,f).then(function(){return w(!0)}).catch(function(){w(!0),y(!0)})}}))),Object(i.jsx)(O.a,{css:function(t){return{maxWidth:t.maxTemplateWidth,margin:t.spacing(4),position:"relative",opacity:T?.5:1,transition:"opacity 0.3s ease-in-out",pointerEvents:T?"none":"initial"}}},!v.a.isEmpty(f)&&Object(i.jsx)(S.TemplateEditor,{initialState:f,css:function(t){return{background:t.colors.main}},onChange:function(t){h(v.a.cloneDeep(t))}})),Object(i.jsx)(z,{open:T,error:g,onClose:function(t,e){"clickaway"!==e&&(g||M(!0),w(!1),setTimeout(function(){return y(!1)},100))},messages:{success:"\u0428\u0430\u0431\u043b\u043e\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0451\u043d!",error:"\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0448\u0430\u0431\u043b\u043e\u043d\u0430!"}}))};n.d(e,"TemplateList",function(){return E}),n.d(e,"CreateTemplate",function(){return D}),n.d(e,"EditTemplate",function(){return I})}}]);
//# sourceMappingURL=2.cf5e6702.chunk.js.map