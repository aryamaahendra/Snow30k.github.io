(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"5f83":function(t,e,r){},ab3e:function(t,e,r){"use strict";var a=r("feea"),n=r.n(a);n.a},f26d:function(t,e,r){"use strict";var a=r("5f83"),n=r.n(a);n.a},f820:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("router-link",{staticClass:"startbtn",attrs:{to:"/"}},[t._v("Add Players")]),r("button",{staticClass:"startbtn ml-1",on:{click:function(e){return e.preventDefault(),t.SelecPlayer(e)}}},[t._v("Start")]),r("ul",{staticClass:"player-list"},t._l(t.players,(function(e,a){return r("li",{key:a,class:"player-"+a+" player"},[t._v(" "+t._s(e)+" ")])})),0),t.isChallenge?r("div",{staticClass:"overlay"},[r("HelloWorld"),r("h3",{staticClass:"chosenPlayer"},[t._v(" "+t._s(t.players[t.currPlayer])+" chose your challenge ")]),r("button",{staticClass:"startbtn btn-selesai",on:{click:function(e){return e.preventDefault(),t.hideChalange(e)}}},[t._v(" Selesai ")])],1):t._e()],1)},n=[],c=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),s=r("2f62"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-challenges"},[r("div",{class:t.cardTruth,on:{click:t.rotateTruth}},[r("div",{staticClass:"content"},[r("div",{staticClass:"front bg-truth"},[t._v(" Truth ")]),r("div",{staticClass:"back"},[r("p",[t._v(t._s(t.truth))])])])]),r("div",{class:t.cardDare,on:{click:t.rotateDare}},[r("div",{staticClass:"content"},[r("div",{staticClass:"front bg-dare"},[t._v(" Dare ")]),r("div",{staticClass:"back"},[r("p",[t._v(t._s(t.dare))])])])])])},o=[];function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h={name:"HelloWorld",data:function(){return{cardTruth:{card:!0,cardRotate:!1},cardDare:{card:!0,cardRotate:!1,mlCard:!0},truth:"",dare:""}},computed:u({},Object(s["e"])(["challenges"]),{},Object(s["c"])(["countDare","countTruth"])),methods:{rotateTruth:function(){var t=this.getRandomInt(0,this.countDare-1);this.countTruth<=0&&alert("Fatal Error!!! Refres The Page"),this.cardDare.cardRotate&&(this.cardDare.cardRotate=!this.cardDare.cardRotate),this.cardTruth.cardRotate||(this.truth=this.challenges.truth[t]),this.cardTruth.cardRotate=!this.cardTruth.cardRotate},rotateDare:function(){var t=this.getRandomInt(0,this.countDare-1);this.countDare<=0&&alert("Fatal Error!!! Refres The Page"),this.cardTruth.cardRotate&&(this.cardTruth.cardRotate=!this.cardTruth.cardRotate),this.cardDare.cardRotate||(this.dare=this.challenges.dare[t]),this.cardDare.cardRotate=!this.cardDare.cardRotate},getRandomInt:function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t}}},d=h,p=(r("ab3e"),r("2877")),f=Object(p["a"])(d,i,o,!1,null,"5b14c1a4",null),b=f.exports;function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O={name:"about",components:{HelloWorld:b},data:function(){return{currPlayer:0,player:0,spinTimeTotal:0,spinTimeout:null,isChallenge:!1}},computed:v({},Object(s["e"])(["players"]),{},Object(s["c"])(["countPlayers"])),methods:{SelecPlayer:function(){this.spinTimeTotal=500*Math.random()+500,this.spin()},spin:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(e>=this.spinTimeTotal)return clearTimeout(this.spinTimeout),void setTimeout((function(){t.isChallenge=!0}),500);var r=document.getElementsByClassName("player-".concat(this.currPlayer));r[0].classList.remove("bgSpin"),this.player>=this.countPlayers-1?this.player=0:this.player++,r=document.getElementsByClassName("player-".concat(this.player)),r[0].classList.add("bgSpin"),this.currPlayer=this.player;var a=Math.floor(30*Math.random())+25;this.spinTimeout=setTimeout((function(){t.spin(e+a)}),50)},hideChalange:function(){this.isChallenge=!1}}},m=O,g=(r("f26d"),Object(p["a"])(m,a,n,!1,null,null,null));e["default"]=g.exports},feea:function(t,e,r){}}]);
//# sourceMappingURL=about.b18d6fa4.js.map