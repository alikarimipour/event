(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{so1x:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=t("Z4CC"),i=t("tnAE"),o=t("JPLv"),s=function(){function l(l,n,t,u){this.route=l,this.router=n,this.restService=t,this.configService=u,this.initLineHeight=3,this.lineHeightOptions={floor:1,ceil:5,step:1},this.initFontSizeStr="14px",this.initFontSize=14,this.fontSizeOptions={floor:12,step:2,ceil:20,translate:function(l,n){switch(n){case e.a.Low:case e.a.High:default:return l+"px"}}},this.selectFont=3}return l.prototype.ngOnInit=function(){var l=this;this.sub=this.route.paramMap.subscribe(function(n){l.stepId=n.get("stepId"),l.callService()})},l.prototype.callService=function(){var l=this;this.restService.makeRequest(this.configService.post,"step/getById",{stepId:this.stepId},!0,function(n){l.text=n.result.text,l.step=n.result},function(l){})},l.prototype.onFontSizeChange=function(){this.initFontSizeStr=this.initFontSize+"px"},l.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},l}(),a=function(){return function(){}}(),r=t("pMnS"),c=t("3egp"),b=t("pk5E"),p=t("NgMZ"),d=t("gIcY"),g=t("Ip0R"),f=t("ZYCi"),v=u.ob({encapsulation:0,styles:[[".book-title[_ngcontent-%COMP%]{position:absolute;top:50%}.book-page-mainText[_ngcontent-%COMP%]{background-color:#fff;padding:1em;text-align:justify;width:100%}.book-page-setting[_ngcontent-%COMP%]{border:1px solid #939393}.book-page-setting[_ngcontent-%COMP%]   .text-setting[_ngcontent-%COMP%]{background-color:#fff}.book-page-setting[_ngcontent-%COMP%]   .text-setting[_ngcontent-%COMP%]   .text-setting-title[_ngcontent-%COMP%]{background-color:#15b0a8;color:#fff}.book-page-setting[_ngcontent-%COMP%]   .setting-body[_ngcontent-%COMP%]{color:#9d9d9d;padding-top:1em;border-bottom:1px solid #939393}.fontContainer[_ngcontent-%COMP%]{padding:20px;position:relative;border:1px solid #939393;border-radius:50%;width:50px;height:50px;margin:5px 7px}.fontContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .fontContainer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.fontContainerSelect[_ngcontent-%COMP%]{background-color:#15b0a8;border-radius:50%;width:40px;height:40px;color:#fff}.fontContainerBorder[_ngcontent-%COMP%]{border:1px solid #15b0a8}.font-title[_ngcontent-%COMP%]{display:block;font-size:13px;padding-bottom:5px}.font-box-select[_ngcontent-%COMP%]{border:1px solid #15b0a8}.font-iranSans[_ngcontent-%COMP%]{font-family:iran-light,sans-serif!important}.font-bNazanin[_ngcontent-%COMP%]{font-family:b-nazanin,sans-serif!important}.font-arial[_ngcontent-%COMP%]{font-family:'Arial, Helvetica, sans-serif',sans-serif!important}"]],data:{}});function C(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,7,"div",[["style","position: relative"]],null,null,null,null,null)),(l()(),u.qb(1,0,null,null,1,"app-top-background",[],null,null,null,c.b,c.a)),u.pb(2,114688,null,0,b.a,[],{isSmall:[0,"isSmall"]},null),(l()(),u.qb(3,0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(l()(),u.qb(4,0,null,null,3,"div",[["class","book-title"]],null,null,null,null,null)),(l()(),u.qb(5,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Gb(-1,null,["\u0639\u0646\u0648\u0627\u0646 : "])),(l()(),u.qb(7,0,null,null,0,"span",[],[[8,"textContent",0]],null,null,null,null)),(l()(),u.qb(8,0,null,null,77,"div",[["class","container mt-4"]],null,null,null,null,null)),(l()(),u.qb(9,0,null,null,76,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),u.qb(10,0,null,null,75,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.qb(11,0,null,null,66,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),u.qb(12,0,null,null,65,"div",[["class","book-page-setting p-2"]],null,null,null,null,null)),(l()(),u.qb(13,0,null,null,57,"div",[["class","text-setting"]],null,null,null,null,null)),(l()(),u.qb(14,0,null,null,3,"div",[["class","text-setting-title p-2"]],null,null,null,null,null)),(l()(),u.qb(15,0,null,null,0,"span",[],null,null,null,null,null)),(l()(),u.qb(16,0,null,null,1,"span",[["class","pr-1"]],null,null,null,null,null)),(l()(),u.Gb(-1,null,["\u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u0645\u062a\u0646 "])),(l()(),u.qb(18,0,null,null,7,"div",[["class","col-md-12 setting-body"]],null,null,null,null,null)),(l()(),u.qb(19,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),u.Gb(-1,null,["\u0627\u0646\u062f\u0627\u0632\u0647 \u0641\u0648\u0646\u062a"])),(l()(),u.qb(21,0,null,null,4,"div",[["class","py-3"]],null,null,null,null,null)),(l()(),u.qb(22,0,null,null,3,"ng5-slider",[["class","ng5-slider"]],[[2,"ng5-slider-vertical",null],[1,"disabled",0]],[[null,"valueChange"],[null,"userChange"],["window","resize"]],function(l,n,t){var e=!0,i=l.component;return"window:resize"===n&&(e=!1!==u.zb(l,24).onResize(t)&&e),"valueChange"===n&&(e=!1!==(i.initFontSize=t)&&e),"userChange"===n&&(e=!1!==i.onFontSizeChange()&&e),e},p.b,p.a)),u.Db(5120,null,d.h,function(l){return[l]},[e.o]),u.pb(24,4964352,null,1,e.o,[u.E,u.k,u.h],{value:[0,"value"],options:[1,"options"]},{valueChange:"valueChange",userChange:"userChange"}),u.Eb(335544320,1,{tooltipTemplate:0}),(l()(),u.qb(26,0,null,null,7,"div",[["class","col-md-12 setting-body"]],null,null,null,null,null)),(l()(),u.qb(27,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),u.Gb(-1,null,["\u0641\u0627\u0635\u0644\u0647 \u0628\u06cc\u0646 \u062e\u0637\u0648\u0637"])),(l()(),u.qb(29,0,null,null,4,"div",[["class","py-3"]],null,null,null,null,null)),(l()(),u.qb(30,0,null,null,3,"ng5-slider",[["class","ng5-slider"]],[[2,"ng5-slider-vertical",null],[1,"disabled",0]],[[null,"valueChange"],["window","resize"]],function(l,n,t){var e=!0,i=l.component;return"window:resize"===n&&(e=!1!==u.zb(l,32).onResize(t)&&e),"valueChange"===n&&(e=!1!==(i.initLineHeight=t)&&e),e},p.b,p.a)),u.Db(5120,null,d.h,function(l){return[l]},[e.o]),u.pb(32,4964352,null,1,e.o,[u.E,u.k,u.h],{value:[0,"value"],options:[1,"options"]},{valueChange:"valueChange"}),u.Eb(335544320,2,{tooltipTemplate:0}),(l()(),u.qb(34,0,null,null,36,"div",[["class","col-md-12 setting-body"]],null,null,null,null,null)),(l()(),u.qb(35,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),u.Gb(-1,null,["\u0646\u0648\u0639 \u0641\u0648\u0646\u062a"])),(l()(),u.qb(37,0,null,null,33,"div",[["style","display: flex;align-items: center;justify-content: center"]],null,null,null,null,null)),(l()(),u.qb(38,0,null,null,10,"a",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==(l.component.selectFont=1)&&u),u},null,null)),(l()(),u.qb(39,0,null,null,7,"div",[["class","text-center fontContainer mt-3 pt-3 font-arial"]],null,null,null,null,null)),u.pb(40,278528,null,0,g.i,[u.t,u.u,u.k,u.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u.Bb(41,{fontContainerBorder:0}),(l()(),u.qb(42,0,null,null,4,"div",[],null,null,null,null,null)),u.pb(43,278528,null,0,g.i,[u.t,u.u,u.k,u.E],{ngClass:[0,"ngClass"]},null),u.Bb(44,{fontContainerSelect:0}),(l()(),u.qb(45,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Gb(-1,null,["\u0622\u0628"])),(l()(),u.qb(47,0,null,null,1,"div",[["class","text-center font-title font-arial"]],null,null,null,null,null)),(l()(),u.Gb(-1,null,[" \u0622\u0631\u06cc\u0627\u0644 "])),(l()(),u.qb(49,0,null,null,10,"a",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==(l.component.selectFont=2)&&u),u},null,null)),(l()(),u.qb(50,0,null,null,7,"div",[["class","text-center fontContainer mt-3 pt-3 font-bNazanin"]],null,null,null,null,null)),u.pb(51,278528,null,0,g.i,[u.t,u.u,u.k,u.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u.Bb(52,{fontContainerBorder:0}),(l()(),u.qb(53,0,null,null,4,"div",[],null,null,null,null,null)),u.pb(54,278528,null,0,g.i,[u.t,u.u,u.k,u.E],{ngClass:[0,"ngClass"]},null),u.Bb(55,{fontContainerSelect:0}),(l()(),u.qb(56,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Gb(-1,null,["\u0622\u0628"])),(l()(),u.qb(58,0,null,null,1,"div",[["class","text-center font-title font-bNazanin"]],null,null,null,null,null)),(l()(),u.Gb(-1,null,[" \u0646\u0627\u0632\u0646\u06cc\u0646 "])),(l()(),u.qb(60,0,null,null,10,"a",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==(l.component.selectFont=3)&&u),u},null,null)),(l()(),u.qb(61,0,null,null,7,"div",[["class","text-center fontContainer mt-3 pt-3 font-iranSans"]],null,null,null,null,null)),u.pb(62,278528,null,0,g.i,[u.t,u.u,u.k,u.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u.Bb(63,{fontContainerBorder:0}),(l()(),u.qb(64,0,null,null,4,"div",[],null,null,null,null,null)),u.pb(65,278528,null,0,g.i,[u.t,u.u,u.k,u.E],{ngClass:[0,"ngClass"]},null),u.Bb(66,{fontContainerSelect:0}),(l()(),u.qb(67,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Gb(-1,null,["\u0622\u0628"])),(l()(),u.qb(69,0,null,null,1,"div",[["class","text-center font-title font-iranSans"]],null,null,null,null,null)),(l()(),u.Gb(-1,null,[" \u0627\u06cc\u0631\u0627\u0646\u0633\u0646\u0633 "])),(l()(),u.qb(71,0,null,null,6,"div",[["class","mt-5"]],null,null,null,null,null)),(l()(),u.qb(72,0,null,null,5,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.zb(l,73).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&e),e},null,null)),u.pb(73,671744,null,0,f.l,[f.k,f.a,g.h],{routerLink:[0,"routerLink"]},null),(l()(),u.qb(74,0,null,null,3,"button",[["class","green-button quiz-button"]],[[8,"disabled",0]],null,null,null,null)),u.pb(75,278528,null,0,g.n,[u.u,u.k,u.E],{ngStyle:[0,"ngStyle"]},null),u.Bb(76,{cursor:0}),(l()(),u.Gb(-1,null,[" \u0622\u0632\u0645\u0648\u0646 \u062f\u0648\u0631\u0647 "])),(l()(),u.qb(78,0,null,null,7,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),u.qb(79,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.qb(80,0,null,null,5,"div",[["class","mb-3 book-page-mainText"]],null,null,null,null,null)),(l()(),u.qb(81,0,null,null,4,"span",[["class","pb-3"]],[[8,"innerHTML",1]],null,null,null,null)),u.pb(82,278528,null,0,g.i,[u.t,u.u,u.k,u.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u.Bb(83,{"font-arial":0,"font-bNazanin":1,"font-iranSans":2}),u.pb(84,278528,null,0,g.n,[u.u,u.k,u.E],{ngStyle:[0,"ngStyle"]},null),u.Bb(85,{"line-height":0,"font-size":1})],function(l,n){var t=n.component;l(n,2,0,!0),l(n,24,0,t.initFontSize,t.fontSizeOptions),l(n,32,0,t.initLineHeight,t.lineHeightOptions);var e=l(n,41,0,1===t.selectFont);l(n,40,0,"text-center fontContainer mt-3 pt-3 font-arial",e);var i=l(n,44,0,1===t.selectFont);l(n,43,0,i);var o=l(n,52,0,2===t.selectFont);l(n,51,0,"text-center fontContainer mt-3 pt-3 font-bNazanin",o);var s=l(n,55,0,2===t.selectFont);l(n,54,0,s);var a=l(n,63,0,3===t.selectFont);l(n,62,0,"text-center fontContainer mt-3 pt-3 font-iranSans",a);var r=l(n,66,0,3===t.selectFont);l(n,65,0,r),l(n,73,0,u.sb(3,"/quiz/",t.step.course.id,"/",t.step.id,"/",t.step.quiz.id,""));var c=l(n,76,0,!0===t.step.passed?"not-allowed":"url");l(n,75,0,c);var b=l(n,83,0,1==t.selectFont,2==t.selectFont,3==t.selectFont);l(n,82,0,"pb-3",b);var p=l(n,85,0,t.initLineHeight,t.initFontSizeStr);l(n,84,0,p)},function(l,n){var t=n.component;l(n,7,0,t.step.title),l(n,22,0,u.zb(n,24).sliderElementVerticalClass,u.zb(n,24).sliderElementDisabledAttr),l(n,30,0,u.zb(n,32).sliderElementVerticalClass,u.zb(n,32).sliderElementDisabledAttr),l(n,72,0,u.zb(n,73).target,u.zb(n,73).href),l(n,74,0,!0===t.step.passed),l(n,81,0,t.text)})}function h(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,1,"app-match-info",[],null,null,null,C,v)),u.pb(1,245760,null,0,s,[f.a,f.k,i.a,o.a],null,null)],function(l,n){l(n,1,0)},null)}var m=u.mb("app-match-info",s,h,{},{},[]),k=t("xkgV"),q=t("CHMM");t.d(n,"MatchInfoModuleNgFactory",function(){return x});var x=u.nb(a,[],function(l){return u.xb([u.yb(512,u.j,u.cb,[[8,[r.a,m]],[3,u.j],u.y]),u.yb(4608,g.m,g.l,[u.v,[2,g.v]]),u.yb(4608,k.e,k.e,[]),u.yb(1073742336,g.c,g.c,[]),u.yb(1073742336,q.a,q.a,[]),u.yb(1073742336,k.a,k.a,[]),u.yb(1073742336,e.b,e.b,[]),u.yb(1073742336,f.m,f.m,[[2,f.s],[2,f.k]]),u.yb(1073742336,a,a,[]),u.yb(1024,f.i,function(){return[[{path:":stepId",component:s,pathMatch:"full"}]]},[])])})}}]);