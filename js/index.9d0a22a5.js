(function(e){function t(t){for(var n,i,r=t[0],c=t[1],u=t[2],d=0,m=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(m.length)m.shift()();return o.push.apply(o,u||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=s[0]))}return e}var n={},a={index:0},o=[];function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("cd49")},"00a6":function(e,t,s){"use strict";function n(e){return{hint:"",points:100,category:e,answer:"",answeredBy:"",seenAnswer:!1}}function a(e){return{hint:e.hint,points:e.points,category:e.category,answer:e.answer,answeredBy:e.answeredBy,seenAnswer:e.seenAnswer}}s.d(t,"b",(function(){return n})),s.d(t,"a",(function(){return a}))},"0495":function(e,t,s){"use strict";s("d2f9")},"0ccc":function(e,t,s){"use strict";s("4c05")},"0ff6":function(e,t,s){"use strict";s.d(t,"a",(function(){return n})),s.d(t,"c",(function(){return a})),s.d(t,"b",(function(){return o})),s.d(t,"d",(function(){return i}));s("e9c4");function n(){var e=localStorage.getItem("categories");return null===e?[]:JSON.parse(e)}function a(e){var t=JSON.stringify(e);localStorage.setItem("categories",t)}function o(){var e=localStorage.getItem("teams");if(null===e)return{};var t=JSON.parse(e);return Array.isArray(t)?{}:t}function i(e){var t=JSON.stringify(e);localStorage.setItem("teams",t)}},"1f1c":function(e,t,s){},"25a3":function(e,t,s){"use strict";s("6588")},3734:function(e,t,s){"use strict";s.d(t,"b",(function(){return o})),s.d(t,"a",(function(){return i}));var n=s("4d5c"),a=s.n(n);function o(e){var t=a.a.Modal.init(e.$el,{});t.open()}function i(e){var t=a.a.Modal.getInstance(e.$el);t.close()}},"4c05":function(e,t,s){},5792:function(e,t,s){},"5dd8":function(e,t,s){},6588:function(e,t,s){},a6be:function(e,t,s){"use strict";s("5792")},b796:function(e,t,s){"use strict";s("e0c7")},cd49:function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("scoreboard",{ref:"scoreboard",attrs:{scores:e.scores,id:"scoreboard"},on:{"add-team":e.onAddTeam,"remove-team":e.onRemoveTeam}}),s("div",{staticClass:"main"},[s("question-panel",{attrs:{categories:e.categories,scores:e.scores},on:{"add-score":e.onAddScore,"view-answer":e.onViewAnswer}})],1),s("div",{staticClass:"fixed-action-btn"},[s("a",{staticClass:"btn-floating btn-large danger",class:{pulse:0===e.categories.length},attrs:{title:"Edit Game",href:"editor.html"}},[s("i",{staticClass:"material-icons"},[e._v("mode_edit")])])]),s("a",{staticClass:"pulltab danger",class:e.pulltabClass(),attrs:{href:"#"},on:{click:e.onPulloutScoreboard}},[e._v(" Scoreboard ")]),s("scoring-toast",{ref:"scoringToast",attrs:{scores:e.scores}})],1)},o=[],i=s("d4ec"),r=s("bee2"),c=s("262e"),u=s("2caf"),l=(s("a9e3"),s("b64b"),s("9ab4")),d=s("60a3"),m=s("4d5c"),f=s.n(m),b=s("0ff6"),v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"sidenav"},[e._m(0),e._l(Object.keys(e.scores),(function(t){return s("li",{key:t,staticClass:"team",class:e.teamClass(t)},[s("button",{staticClass:"danger btn-floating btn-small",attrs:{id:t,title:"Remove team"},on:{click:function(s){return e.onRemove(t,s)}}},[s("i",{staticClass:"material-icons"},[e._v("remove_circle")])]),s("span",{staticClass:"name"},[e._v(e._s(t))]),s("span",{staticClass:"badge"},[e._v(e._s(e.scores[t]))])])})),s("add-team",{on:{"add-team":e.onAddTeam}})],2)},h=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"center-align"},[s("h3",[e._v("Scoreboard")])])}],p=(s("caad"),s("2532"),s("a434"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{staticClass:"add-team row"},[e.addTeamPressed?s("div",{staticClass:"input-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.teamName,expression:"teamName"}],staticClass:"validate",attrs:{id:"teamName",type:"text"},domProps:{value:e.teamName},on:{keyup:function(t){return t.type.indexOf("key")||13===t.keyCode?e.onAddTeam.apply(null,arguments):null},input:function(t){t.target.composing||(e.teamName=t.target.value)}}}),s("label",{attrs:{for:"teamName"}},[e._v("New team name")])]):s("a",{staticClass:"btn",attrs:{href:"#"},on:{click:e.onPressAddTeam}},[e._v(" Add team ")])])}),O=[],w=function(e){Object(c["a"])(s,e);var t=Object(u["a"])(s);function s(){var e;return Object(i["a"])(this,s),e=t.apply(this,arguments),e.addTeamPressed=!1,e.teamName="",e}return Object(r["a"])(s,[{key:"onPressAddTeam",value:function(){this.addTeamPressed=!0,setTimeout((function(){var e=document.getElementById("teamName");e&&e.focus()}),100)}},{key:"onAddTeam",value:function(){""!==this.teamName&&(this.$emit("add-team",this.teamName),this.teamName="")}}]),s}(d["d"]);w=Object(l["a"])([d["a"]],w);var j=w,y=j,g=(s("b796"),s("2877")),k=Object(g["a"])(y,p,O,!1,null,"99c65746",null),C=k.exports,_=function(e){Object(c["a"])(s,e);var t=Object(u["a"])(s);function s(){var e;return Object(i["a"])(this,s),e=t.apply(this,arguments),e.focused=[],e}return Object(r["a"])(s,[{key:"teamClass",value:function(e){return{danger:this.focused.includes(e)}}},{key:"onRemove",value:function(e,t){var s,n,a=this,o=this.focused.includes(e),i=t.target,r=null===(s=i.parentNode)||void 0===s||null===(n=s.parentNode)||void 0===n?void 0:n.childNodes[1];o?(this.$emit("remove-team",e),this.focused.splice(this.focused.indexOf(e),1),i.classList.remove("danger-confirm")):(this.focused.push(e),i.classList.add("danger-confirm"),r.textContent="Confirm delete?",setTimeout((function(){a.focused.splice(a.focused.indexOf(e),1),r.textContent=e,i.classList.remove("danger-confirm")}),1e3))}},{key:"onAddTeam",value:function(e){this.$emit("add-team",e)}}]),s}(d["d"]);Object(l["a"])([Object(d["b"])()],_.prototype,"scores",void 0),_=Object(l["a"])([Object(d["a"])({components:{AddTeam:C}})],_);var A=_,T=A,P=(s("25a3"),Object(g["a"])(T,v,h,!1,null,"34b437b6",null)),S=P.exports,N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"question-panel"},[s("div",{staticClass:"category-list"},e._l(e.categories,(function(t,n){return s("div",{key:n,staticClass:"category center-align"},[s("span",{staticClass:"header z-depth-1"},[e._v(e._s(t.name))]),s("category-question-list",{attrs:{category:t},on:{"click-question":e.onClickQuestion}})],1)})),0),0===e.categories.length?s("p",[e._v(" It looks like there aren't any questions yet. Try adding some via edit mode! ")]):e._e(),s("question-modal",{ref:"questionModal",attrs:{showAnswer:e.showAnswer},on:{"show-answer":e.onShowAnswer,"answer-question":e.onAnswerQuestion,"cancel-focus":e.onCancelFocus}})],1)},q=[],x=s("3734"),$=s("00a6"),B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{staticClass:"question-list"},e._l(e.category.questions,(function(t,n){return s("li",{key:t.hint,staticClass:"question white-text z-depth-1",class:{"theme-main":!t.seenAnswer,"theme-disabled":t.seenAnswer,unanswered:!t.seenAnswer,answer:t.seenAnswer},on:{click:function(s){return e.$emit("click-question",n,t)}}},[e._v(e._s(t.points))])})),0)},E=[],M=function(e){Object(c["a"])(s,e);var t=Object(u["a"])(s);function s(){return Object(i["a"])(this,s),t.apply(this,arguments)}return Object(r["a"])(s,[{key:"questionClass",value:function(e){return{"theme-main":!e.seenAnswer,"theme-disabled":e.seenAnswer,unanswered:!e.seenAnswer,answer:e.seenAnswer}}}]),s}(d["d"]);Object(l["a"])([Object(d["b"])()],M.prototype,"category",void 0),M=Object(l["a"])([d["a"]],M);var I=M,L=I,R=(s("e296"),Object(g["a"])(L,B,E,!1,null,"b1ed2c7e",null)),F=R.exports,Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal"},[s("div",{staticClass:"modal-content"},[s("span",{staticClass:"card-title"},[e._v(" [ "+e._s(e.question.points)+" "+e._s(1===e.question.points?"Point":"Points")+" ] ")]),s("hr"),s("p",{attrs:{id:"question-hint"},domProps:{innerHTML:e._s(e.converter.makeHtml(e.question.hint))}}),e.showAnswer?s("div",[s("hr"),s("strong",{staticClass:"inconspicuous-text"},[e._v("Answer")]),s("p",{attrs:{id:"question-answer"},domProps:{innerHTML:e._s(e.converter.makeHtml(e.question.answer))}})]):e._e()]),e.showAnswer?s("div",{staticClass:"modal-footer"},[e._l(e.teams,(function(t){return s("a",{key:t,staticClass:"btn",attrs:{href:"#"},on:{click:function(s){return e.$emit("answer-question",t)}}},[e._v(" "+e._s(t)+" ")])})),s("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(t){return e.$emit("cancel-focus")}}},[e._v("Close")])],2):s("div",{staticClass:"modal-footer"},[s("a",{staticClass:"btn",attrs:{href:"#"},on:{click:e.onShowAnswer}},[e._v("Show Answer")]),s("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(t){return e.$emit("cancel-focus")}}},[e._v("Close")])])])},J=[],H=s("339e"),U=s.n(H),W={tables:!0},z=function(e){Object(c["a"])(s,e);var t=Object(u["a"])(s);function s(){var e;return Object(i["a"])(this,s),e=t.apply(this,arguments),e.converter=new U.a.Converter(W),e.showAnswer=!1,e.teams=[],e.question=Object($["b"])(""),e}return Object(r["a"])(s,[{key:"onShowAnswer",value:function(){this.showAnswer=!0,this.$emit("show-answer")}},{key:"init",value:function(e,t){this.showAnswer=!1,this.teams=e,this.question=t}}]),s}(d["d"]);z=Object(l["a"])([d["a"]],z);var V=z,G=V,D=(s("e8932"),Object(g["a"])(G,Q,J,!1,null,null,null)),K=D.exports,X=function(e){Object(c["a"])(s,e);var t=Object(u["a"])(s);function s(){var e;return Object(i["a"])(this,s),e=t.apply(this,arguments),e.questionClicked=Object($["b"])(""),e.clickIndex=-1,e.showAnswer=!1,e}return Object(r["a"])(s,[{key:"onClickQuestion",value:function(e,t){t.seenAnswer||(this.questionClicked=t,this.clickIndex=e,this.questionModal.init(Object.keys(this.scores),t),Object(x["b"])(this.questionModal))}},{key:"onCancelFocus",value:function(){Object(x["a"])(this.questionModal),this.questionClicked=Object($["b"])(""),this.clickIndex=-1}},{key:"onShowAnswer",value:function(){this.$emit("view-answer",this.questionClicked)}},{key:"onAnswerQuestion",value:function(e){this.$emit("add-score",e,this.questionClicked),this.onCancelFocus()}}]),s}(d["d"]);Object(l["a"])([Object(d["c"])()],X.prototype,"questionModal",void 0),Object(l["a"])([Object(d["b"])()],X.prototype,"categories",void 0),Object(l["a"])([Object(d["b"])()],X.prototype,"scores",void 0),X=Object(l["a"])([Object(d["a"])({components:{CategoryQuestionList:F,QuestionModal:K}})],X);var Y=X,Z=Y,ee=(s("0495"),Object(g["a"])(Z,N,q,!1,null,"220922c4",null)),te=ee.exports,se=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.show?s("div",{staticClass:"scoring-toast"},[-1!==e.teamAbove?s("team-toast",{ref:"aboveElem",staticClass:"team-toast",attrs:{rank:e.teamAbove,team:e.teamAboveName,score:e.teamAbovePoints}}):e._e(),s("team-toast",{ref:"focusedElem",staticClass:"team-toast",attrs:{rank:e.focusedTeam,team:e.focusedTeamName,score:e.focusedPoints}}),-1!==e.teamBelow?s("team-toast",{staticClass:"team-toast",attrs:{rank:e.teamBelow,team:e.teamBelowName,score:e.teamBelowPoints}}):e._e()],1):e._e()},ne=[],ae=s("5530"),oe=(s("4e82"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col s2"},[e._v(e._s(e.rank+1))]),s("div",{staticClass:"col s7"},[e._v(e._s(e.team))]),s("div",{staticClass:"col s3"},[e._v(e._s(Math.trunc(e.score)))])])}),ie=[],re=function(e){Object(c["a"])(s,e);var t=Object(u["a"])(s);function s(){return Object(i["a"])(this,s),t.apply(this,arguments)}return Object(r["a"])(s)}(d["d"]);Object(l["a"])([Object(d["b"])()],re.prototype,"rank",void 0),Object(l["a"])([Object(d["b"])()],re.prototype,"team",void 0),Object(l["a"])([Object(d["b"])()],re.prototype,"score",void 0),re=Object(l["a"])([d["a"]],re);var ce=re,ue=ce,le=Object(g["a"])(ue,oe,ie,!1,null,null,null),de=le.exports;function me(e,t,s){var n=(1-Math.cos(s*Math.PI))/2;return e*(1-n)+t*n}var fe=function(e){Object(c["a"])(s,e);var t=Object(u["a"])(s);function s(){var e;return Object(i["a"])(this,s),e=t.apply(this,arguments),e.duration=4e3,e.deltaStaticBefore=.125*e.duration,e.deltaIncrement=.625*e.duration,e.deltaSwap=.875*e.duration,e.deltaStaticAfter=1*e.duration,e.frames=100,e.interval=e.duration/e.frames,e.focusedTeam=-1,e.newFocusedRank=-1,e.focusedTeamName="",e.focusedTeamOriginalPoints=-1,e.focusedPoints=-1,e.pointsAdded=-1,e.teamAbove=-1,e.teamAboveName="",e.teamAbovePoints=-1,e.teamBelow=-1,e.teamBelowName="",e.teamBelowPoints=-1,e.timeCount=e.duration,e.show=!1,e.rankingWentUp=!1,e}return Object(r["a"])(s,[{key:"init",value:function(e,t,s){var n=this;this.teamAbove=-1,this.teamBelow=-1,this.focusedTeamName=e,this.focusedTeamOriginalPoints=t,this.focusedPoints=t,this.pointsAdded=s;var a=Object.keys(this.scores).sort((function(e,t){return n.scores[t]-n.scores[e]})),o=Object(ae["a"])({},this.scores);o[e]=t+s;var i=Object.keys(o).sort((function(e,t){return o[t]-o[e]}));this.focusedTeam=a.indexOf(e),this.newFocusedRank=i.indexOf(e),this.rankingWentUp=this.newFocusedRank<this.focusedTeam,this.focusedTeam>=1&&(this.teamAbove=this.focusedTeam-1,this.teamAboveName=a[this.teamAbove],this.teamAbovePoints=this.scores[this.teamAboveName]),this.focusedTeam<a.length-1&&(this.teamBelow=this.focusedTeam+1,this.teamBelowName=a[this.teamBelow],this.teamBelowPoints=this.scores[this.teamBelowName]),this.timeCount=0}},{key:"animate",value:function(){var e=this;setTimeout((function(){if(e.timeCount<e.deltaIncrement){var t=(e.timeCount-e.deltaStaticBefore)/e.deltaIncrement;e.focusedPoints=me(e.focusedTeamOriginalPoints,e.focusedTeamOriginalPoints+e.pointsAdded,t)}else e.timeCount<e.deltaSwap?(e.focusedPoints=e.focusedTeamOriginalPoints+e.pointsAdded,e.rankingWentUp&&!e.focusedElem.$el.classList.contains("bubble-up")&&(e.focusedElem.$el.classList.add("bubble-up"),e.aboveElem.$el.classList.add("bubble-down"),e.focusedTeam=e.newFocusedRank,e.teamAbove+=1)):(e.timeCount,e.deltaStaticAfter);e.timeCount+=e.interval,e.timeCount<e.duration?e.animate():(e.show=!1,e.focusedTeam=-1)}),this.interval)}},{key:"display",value:function(){var e=this;this.show=!0,setTimeout((function(){e.timeCount+=e.deltaStaticBefore,e.animate()}),this.deltaStaticBefore)}}]),s}(d["d"]);Object(l["a"])([Object(d["c"])()],fe.prototype,"aboveElem",void 0),Object(l["a"])([Object(d["c"])()],fe.prototype,"focusedElem",void 0),Object(l["a"])([Object(d["b"])()],fe.prototype,"scores",void 0),fe=Object(l["a"])([Object(d["a"])({components:{TeamToast:de}})],fe);var be=fe,ve=be,he=(s("a6be"),Object(g["a"])(ve,se,ne,!1,null,"bc89c332",null)),pe=he.exports,Oe=function(e){Object(c["a"])(s,e);var t=Object(u["a"])(s);function s(){var e;return Object(i["a"])(this,s),e=t.apply(this,arguments),e.scores=Object(b["b"])(),e.categories=Object(b["a"])(),e}return Object(r["a"])(s,[{key:"onPulloutScoreboard",value:function(){var e=f.a.Sidenav.init(this.scoreboard.$el,{});e.open()}},{key:"onAddScore",value:function(e,t){this.scoringToast.init(e,this.scores[e],Number(t.points)),this.$set(this.scores,e,this.scores[e]+Number(t.points)),t.answeredBy=e,this.scoringToast.display(),Object(b["d"])(this.scores),Object(b["c"])(this.categories)}},{key:"onAddTeam",value:function(e){Object.prototype.hasOwnProperty.call(this.scores,e)||(this.$set(this.scores,e,0),Object(b["d"])(this.scores))}},{key:"onRemoveTeam",value:function(e){this.$delete(this.scores,e),Object(b["d"])(this.scores)}},{key:"onViewAnswer",value:function(e){e.seenAnswer=!0,Object(b["c"])(this.categories)}},{key:"pulltabClass",value:function(){return{pulse:this.categories.length>0&&0===Object.keys(this.scores).length}}}]),s}(d["d"]);Object(l["a"])([Object(d["c"])()],Oe.prototype,"scoreboard",void 0),Object(l["a"])([Object(d["c"])()],Oe.prototype,"scoringToast",void 0),Oe=Object(l["a"])([Object(d["a"])({components:{Scoreboard:S,QuestionPanel:te,ScoringToast:pe}})],Oe);var we=Oe,je=we,ye=(s("0ccc"),Object(g["a"])(je,a,o,!1,null,"5c26f1cc",null)),ge=ye.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(ge)}}).$mount("#app")},d2f9:function(e,t,s){},e0c7:function(e,t,s){},e296:function(e,t,s){"use strict";s("5dd8")},e8932:function(e,t,s){"use strict";s("1f1c")}});
//# sourceMappingURL=index.9d0a22a5.js.map