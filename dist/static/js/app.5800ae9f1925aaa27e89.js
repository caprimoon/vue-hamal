webpackJsonp([4],{"+znz":function(t,e){},"5qRC":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("j1ja");var o=n("7+uW"),i=n("/ocq"),a=n("v5o6"),r=n.n(a),s=n("Dd8w"),c=n.n(s),u=n("NYxO"),l=n("9qgI"),d=n.n(l),f=n("rxKx"),h=n.n(f),p={name:"vh-page-animation",beforeCreate:function(){this.$store.registerModule("page",{state:{isBack:!1,isDragBack:!1,isTransitionAfter:!0},mutations:{SET_IS_DRAG_BACK:function(t,e){t.isDragBack=e},SET_IS_BACK:function(t,e){t.isBack=e},SET_IS_TRANSITION_AFTER:function(t,e){t.isTransitionAfter=e}}});var t=document.createElement("meta");t.name="viewport",t.content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1",document.getElementsByTagName("head")[0].appendChild(t)},mounted:function(){var t=this;this.$nextTick(function(){t.handler(),setTimeout(function(){t.$bus("onTransitionAfter")})}),this.back()},data:function(){return{duration:400,leaveTarget:"",enterTarget:"",translateX:"100%",backEl:"",isBack:!1,isPanBack:!1}},computed:c()({},Object(u.c)(["history","device","page"]),{transition:function(){return[this.animation+"In",this.animation+"Out"]}}),watch:{"history.direction":function(t){switch(t){case"forward":this.transitionName=this.transition[0];break;case"reverse":this.transitionName=this.transition[1]}},"history.record":function(t){t.length>1?this.backEl={el:t[t.length-2].el.cloneNode(!0),scrollTop:t[t.length-2].instances.$children[0].scrollTop}:this.backEl=""},backEl:function(t){var e=this;setTimeout(function(){e.$refs.back&&e.$refs.back.firstChild&&e.$refs.back.removeChild(e.$refs.back.firstChild),t&&e.$refs.back&&(e.$refs.back.appendChild(t.el),t.scrollTop&&setTimeout(function(){e.$refs.back.getElementsByClassName("vh-frame-main")[0].scrollTop=t.scrollTop},0))},this.duration)}},methods:c()({},Object(u.b)(["SET_IS_DRAG_BACK","SET_IS_TRANSITION_AFTER"]),{handler:function(){var t=new h.a(this.$refs.page,{inputClass:h.a.TouchInput,recognizers:[[h.a.Pan,{direction:h.a.DIRECTION_HORIZONTAL,threshold:1}]]});t.on("panstart",this.onPanstart),t.on("panmove",this.onPanmove),t.on("panend",this.onPanend)},beforeEnter:function(t){t.removeAttribute("style"),"forward"===this.history.direction&&(t.style.transform="translate3d(0, 100%, 0)"),this.SET_IS_TRANSITION_AFTER(!1)},enter:function(t,e){switch(this.enterTarget={el:t,done:e},this.history.direction){case"forward":d()(t,{translateX:["0%","100%"]},{duration:this.duration,complete:function(){t.removeAttribute("style"),e()}}),this.onAnimateShadow(["0%","100%"],["1","0"],this.duration);break;case"reverse":this.isPanBack?(t.removeAttribute("style"),e()):(t.style.zIndex="-1",this.device.os.ios?d()(t,{translateX:["0%","-20%"]},{duration:this.duration,complete:function(){t.removeAttribute("style"),e()}}):setTimeout(function(){t.removeAttribute("style"),e()},this.duration))}},afterEnter:function(){var t=this;this.isPanBack=!1,this.SET_IS_TRANSITION_AFTER(!0),setTimeout(function(){t.$bus("onTransitionAfter")},100)},beforeLeave:function(t){t.removeAttribute("style")},leave:function(t,e){switch(this.history.direction){case"forward":t.style.zIndex="-1",this.device.os.ios?d()(t,{translateX:["-20%","0%"]},{duration:this.duration,complete:function(){e()}}):setTimeout(function(){e()},this.duration);break;case"reverse":this.isPanBack?e():(d()(t,{translateX:["100%","0%"]},{duration:this.duration,complete:function(){e()}}),this.onAnimateShadow(["100%","0%"],["0","1"],this.duration))}},afterLeave:function(t){},onPanstart:function(t){!this.isBack&&this.page.isDragBack&&4===t.direction&&Math.abs(t.angle)<20&&this.backEl&&(this.enterTarget.el.style.touchAction="none",t.preventDefault(),this.isBack=!0,this.onPanmove(t))},onPanmove:function(t){if(this.isBack){t.preventDefault();var e=t.deltaX/document.body.clientWidth;e<0&&(e=0),this.device.os.ios&&(this.$refs.back.style.transform="translate3d("+(100*e*.2-20)+"%, 0, 0)"),this.enterTarget.el.style.transform="translate3d("+100*e+"%, 0, 0)",this.onAnimateShadow(100*e,1*(1-e),0)}},onPanend:function(t){var e=this;if(this.isBack){t.preventDefault();var n=t.deltaX/document.body.clientWidth,o=void 0,i=void 0,a=void 0;n<.5&&t.overallVelocityX<.4?(o=!1,a="0%",i="-20%",n<0&&(n=0)):(this.isPanBack=!0,o=!0,a="100%",i="0%");var r=0;r=o?Math.abs(this.duration*(1-n)):Math.abs(this.duration*n),d()(this.enterTarget.el,{translateX:[a,100*n+"%"]},{duration:r,complete:function(){o&&e.history.record.length>1&&e.$router.push(e.history.record[e.history.record.length-2]),setTimeout(function(){e.isBack=!1},0),e.SET_IS_DRAG_BACK(!0)}}),this.onAnimateShadow([a,100*n+"%"],"0",r),this.device.os.ios&&d()(this.$refs.back,{translateX:[i,100*n*.2-20+"%"]},{duration:r})}},onAnimateShadow:function(t,e,n){var o=this;0===n?(this.$refs.shadow.style.transform="translate3d("+t+"%, 0, 0)",this.$refs.shadow.style.opacity=e):d()(this.$refs.shadow,{translateX:t,opacity:e},{duration:n,complete:function(){o.$refs.shadow.removeAttribute("style")}})},plusReady:function(t){window.plus?t():document.addEventListener("plusready",t,!1)},back:function(){var t=this;this.plusReady(function(){window.plus.key.addEventListener("backbutton",function(){t.isBack||(t.page.isBack?t.history.record.length>1&&t.$router.push(t.history.record[t.history.record.length-2]):t.$native.moveTaskToBack())},!1)})}})},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"page",staticClass:"page-touch"},[n("div",{ref:"back",staticClass:"page back"}),t._v(" "),n("div",{ref:"shadow",staticClass:"page-shadow-effect"}),t._v(" "),n("transition",{attrs:{css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave}},[n("keep-alive",[n("router-view",{staticClass:"page"})],1)],1)],1)},staticRenderFns:[]};var v=n("VU/8")(p,g,!1,function(t){n("+znz"),n("nCa5")},"data-v-1cde8d15",null).exports,m={name:"vh-page-header",mounted:function(){this.$nextTick(function(){})},components:{},created:function(){this.path=this.$route.path},eventBus:{onTransitionAfter:function(){this.history.activate===this.path&&(this.config.back?this.SET_IS_BACK(!0):this.SET_IS_BACK(!1))}},data:function(){return{path:"",default:{back:!0,backgroundColor:"#fff",color:"#000",show:!0}}},watch:{},computed:c()({},Object(u.c)(["device","history"]),{config:function(){return c()({},this.default,this.options)},hamalHeaderStyle:function(){return{backgroundColor:this.config.backgroundColor,paddingTop:this.device.navigation.height+"px"}}}),props:{options:{type:Object,default:function(){return{}}}},methods:c()({},Object(u.b)(["SET_IS_BACK"]),{onBack:function(){this.config.back&&this.history.record.length>1&&this.$router.push(this.history.record[this.history.record.length-2])}})},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.config.show?n("div",{staticClass:"hamal-header",style:t.hamalHeaderStyle},[n("div",{staticClass:"hamal-header-left",on:{click:t.onBack}},[t._t("left",[t.config.back?n("i",{staticClass:"left-arrow",class:{blue:"#fff"==t.config.backgroundColor||"#ffffff"==t.config.backgroundColor}}):t._e(),t._v(" "),n("span",{staticClass:"text",style:{color:t.config.color}},[t._t("default",[t._v("\n          "+t._s(t.config.title)+"\n        ")])],2)])],2),t._v(" "),n("div",{staticClass:"hamal-header-right",style:{color:t.config.color}},[t._t("header-right")],2)]):t._e()},staticRenderFns:[]};var _=n("VU/8")(m,w,!1,function(t){n("jQzh")},"data-v-0df7f6f0",null).exports,y={name:"vh-page",created:function(){this.path=this.$route.path,this.config.lazy&&(this.show=!1)},mounted:function(){var t=this;this.$nextTick(function(){t.getHeadAndFeetHeight(),t.onScroll()})},forward:function(){},back:function(){this.onRecoveryScroll()},components:{vhHeader:_},data:function(){return{path:"",default:{back:!0,backgroundColor:"#fff",lazy:!1,header:{}},main:{top:"44",bottom:"0"},scrollTop:0,show:!0}},activated:function(){},watch:{},computed:c()({},Object(u.c)(["device","history"]),{config:function(){return c()({},this.default,this.options)},mainStyle:function(){return{top:this.main.top+"px",bottom:this.main.bottom+"px",backgroundColor:this.config.backgroundColor}}}),eventBus:{onTransitionAfter:function(){this.history.activate===this.path&&(this.config.back?this.SET_IS_DRAG_BACK(!0):this.SET_IS_DRAG_BACK(!1),this.config.lazy&&(this.show=!0))}},props:{options:{type:Object,default:function(){return{}}}},methods:c()({},Object(u.b)(["SET_IS_DRAG_BACK"]),{getHeadAndFeetHeight:function(){this.fullScreen||(this.main={top:this.$refs.header.offsetHeight,bottom:this.$refs.footer.offsetHeight})},onScroll:function(){var t=this;this.$refs.main&&(this.$refs.main.onscroll=function(e){t.scrollTop=e.target.scrollTop})},onRecoveryScroll:function(){this.$refs.main&&this.scrollTop&&(this.$refs.main.scrollTop=this.scrollTop)}})},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"page",staticClass:"vh-frame"},[n("header",{ref:"header"},[t._t("header",[n("vh-header",{attrs:{options:t.config.header}},[t._t("header-title"),t._v(" "),t._t("header-right",null,{slot:"header-right"})],2)])],2),t._v(" "),n("div",{ref:"main",staticClass:"vh-frame-main",style:t.mainStyle},[t.show?t._t("default",[t._m(0)]):n("div",{staticClass:"load"},[n("span",[t._v("正在加载")])])],2),t._v(" "),n("footer",{ref:"footer"},[t._t("footer")],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("p",[this._v("没有数据")])])}]};var T=n("VU/8")(y,b,!1,function(t){n("uLxx")},"data-v-6ac114d3",null).exports,S={name:"vh-scroller",mixins:[],components:{},data:function(){return{default:{el:{up:"",down:""},currentAction:"",deltaY:0,deviationY:0,disable:!1,run:!1,damp:.6,up:{deltaY:60,trigger:50,text:"下拉刷新",delay:500,duration:300,loading:!1},down:{deltaY:60,trigger:50,text:"",loading:!1,pause:!1,disable:!0}},scrollTop:0}},computed:{config:function(){return c()({},this.default,this.options)}},props:{options:{type:Object,default:function(){return{}}}},watch:{},created:function(){},mounted:function(){var t=this;this.$nextTick(function(){t.onScroll(),t.hammerHandler()})},updated:function(){},filters:{},methods:{hammerHandler:function(){this.config.el.main=this.$refs.content,this.config.el.up=this.$refs.up;var t=new h.a(this.$refs.content,{touchAction:"pan-y",inputClass:h.a.TouchInput,recognizers:[[h.a.Pan,{direction:h.a.DIRECTION_VERTICAL,threshold:1}]]});t.on("panstart",this.onPanStart),t.on("panmove",this.onPanMove),t.on("panend",this.onPanEnd)},onPanStart:function(t){this.config.disable||this.config.run||(t.preventDefault(),this.config.run=!0,this.onPanMove(t))},onPanMove:function(t){this.config.disable||t.deltaY>0&&(0!==this.scrollTop?this.config.deviationY=t.deltaY:(t.preventDefault(),this.pandownHandler(t)))},onPanEnd:function(t){this.config.disable||(this.config.deviationY=0,this.config.deltaY>this.config.up.trigger?this.onRefresh():this.onReset())},pandownHandler:function(t){var e=this.config.up.deltaY,n=(t.deltaY-this.config.deviationY)*this.config.damp;n>e&&(n=e),n>this.config.up.trigger?this.config.up.text="释放加载":this.config.up.text="下拉加载",this.onMove(n),this.config.deltaY=n},panupHandler:function(t){this.config.down.loading||t.target.clientHeight+t.target.scrollTop>=t.target.scrollHeight-this.config.down.deltaY&&this.onLoading()},onMove:function(t){var e="translate3d(0, "+t+"px, 0)";this.config.el.up.style.transform=e,this.config.el.main.style.transform=e},onReset:function(){var t=this;this.config.up.loading&&(this.config.up.text="刷新成功",d()(this.config.el.main,{translateY:[0,this.config.deltaY+"px"]},{duration:this.config.up.duration,delay:this.config.up.delay}),d()(this.config.el.up,{translateY:[0,this.config.deltaY+"px"]},{duration:this.config.up.duration,delay:this.config.up.delay,complete:function(){t.config.up.loading=!1,t.config.disable=!1,t.config.run=!1}}),this.config.deltaY=0)},onRefresh:function(){this.config.up.text="正在加载",this.config.up.loading=!0,this.$emit("on-refresh")},onLoading:function(){this.config.down.text="正在加载更多",this.config.down.loading=!0,this.$emit("on-loading")},onPauseLoading:function(){this.config.down.text="我是有底线的",this.config.down.pause=!0},onRecoveryLoading:function(){this.config.down.pause=!1,this.config.down.loading=!1,this.config.down.disable=!1,this.config.down.text="上拉加载更多"},onScroll:function(){var t=this;this.$refs.content.onscroll=function(e){t.scrollTop=e.target.scrollTop,t.panupHandler(e)}}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"up",staticClass:"scroller-top"},[n("p",[t._v(t._s(t.config.up.text))])]),t._v(" "),n("div",{ref:"content",staticClass:"vh-content"},[t._t("default",[t._m(0)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.config.down.disable,expression:"!config.down.disable"}],staticClass:"scroller-bottom"},[n("p",[t._v(t._s(t.config.down.text))])])],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"scroller-main"},[e("p",[this._v("没有数据")])])}]};var E=n("VU/8")(S,k,!1,function(t){n("vkF0")},"data-v-32a32e74",null).exports;function C(t){window.plus?t():document.addEventListener("plusready",t,!1)}var $,A=function(){var t=0,e=/Html5Plus\/.+\s\(.*(Immersed\/(\d+\.?\d*).*)\)/gi.exec(navigator.userAgent);return e&&e.length>=3&&(t=parseFloat(e[2])),t},x={},I=navigator.userAgent;($=I.match(/(Android);?[\s/]+([\d.]+)?/))&&(x.android=!0,x.version=$[2],x.isBadAndroid=!/Chrome\/\d/.test(window.navigator.appVersion)),function(){var t=I.match(/(iPhone\sOS)\s([\d_]+)/);if(t)x.ios=x.iphone=!0,x.version=t[2].replace(/_/g,".");else{var e=I.match(/(iPad).*OS\s([\d_]+)/);e&&(x.ios=x.ipad=!0,x.version=e[2].replace(/_/g,"."))}}();var R=x,O=n("//Fk"),D=n.n(O),B=n("bOdI"),P=n.n(B),L=n("mvHQ"),H=n.n(L),N=n("w6KN"),M=n.n(N);window.openDatabase||console.log("浏览器不支持webSql");var U="",Y={init:function(){return new D.a(function(t,e){(U=openDatabase("webSql","1.0","web sql",10485760)).transaction(function(t){t.executeSql("CREATE TABLE IF NOT EXISTS log (error text, time text)")},function(t){e(t)},function(){t()})})},write:function(t){return new D.a(function(e,n){U&&U.transaction(function(e){if("string"!=typeof t)try{t=H()(t)}catch(t){}var n=M()(new Date,"YYYY-MM-DD HH:mm:ss"),o=[t,n];e.executeSql("INSERT INTO log (error, time) VALUES (?, ?)",o)},function(t){n(t)},function(){e()})})},query:function(){return new D.a(function(t,e){U&&U.transaction(function(e){e.executeSql("SELECT * FROM log",[],function(e,n){for(var o=[],i={},a=0;a<n.rows.length;a++){try{i=P()({},a,{error:JSON.parse(n.rows.item(a).error),time:n.rows.item(a).time})}catch(t){i=P()({},a,{error:n.rows.item(a).error,time:n.rows.item(a).time})}o.push(i)}t(o.reverse())})},function(t){console.log(t),e(t)},function(){})})},empty:function(){return new D.a(function(t,e){U&&U.transaction(function(t){t.executeSql("DELETE FROM log")},function(t){e(t)},function(){t()})})}},F={install:function(t){t.prototype.$log=Y,t.$log=Y},log:Y},V=n("woOf"),j=n.n(V),z={createMessage:function(t){C(function(){t=j()({},{content:"",payload:"",option:{cover:!0}},t),window.plus.push.createMessage(t.content,t.payload,t.options)})},pushCallback:function(t){C(function(){window.plus.push.addEventListener("click",function(e){t(e)},!1)})}};var q="";function K(){var t,e;t=function(t){var e;e=t,window.plus.runtime.getProperty(window.plus.runtime.appid,function(t){var n=t.version,o=e[window.plus.os.name];if(o){var i=o.version;(function(t,e){if(!t||!e||""===t||""===e)return!1;for(var n=t.split(".",4),o=e.split(".",4),i=0;i<n.length&&i<o.length;i++){var a=n[i],r=parseInt(a),s=o[i],c=parseInt(s);if(c>r||s.length>a.length)return!0;if(c<r)return!1}return o.length>n.length&&0===e.indexOf(t)||void 0})(n,i)&&window.plus.nativeUI.confirm(o.note,function(t){var e;0===t.index&&(e=o.url,window.plus.nativeUI.showWaiting("正在更新,请稍候..."),window.plus.downloader.createDownload(e,{filename:"_doc/update/"},function(t,e){var n;200===e?(console.log("更新成功："+t.filename),n=t.filename,window.plus.nativeUI.showWaiting("安装更新..."),window.plus.runtime.install(n,{},function(){window.plus.nativeUI.closeWaiting(),console.log("安装更新成功！"),window.plus.nativeUI.alert("更新完成！",function(){window.plus.runtime.restart()})},function(t){window.plus.nativeUI.closeWaiting(),console.log("安装更新失败["+t.code+"]："+t.message),window.plus.nativeUI.alert("安装更新失败["+t.code+"]："+t.message)})):(console.log("更新失败！"),window.plus.nativeUI.alert("更新失败！")),window.plus.nativeUI.closeWaiting()}).start())},o.title,["立即更新","取消"])}})},(e=new window.plus.net.XMLHttpRequest).onreadystatechange=function(){switch(e.readyState){case 4:if(200===e.status){var n=e.responseText;n=n.substr(n.indexOf("{"));var o=JSON.parse(n);t(o)}else console.log("获取升级数据，联网请求失败："+e.status)}},e.open("GET",q),e.send()}var W={init:function(t){var e=this;if(void 0===this.audio){this.audio={playCompleted:!0,playList:[]};var n=this;C(function(){if(R.android){var o=window.plus.android.runtimeMainActivity();window.plus.android.importClass("com.iflytek.cloud.SpeechUtility").createUtility(o,"appid="+window.plus.runtime.appid);var i=window.plus.android.importClass("com.iflytek.cloud.SpeechSynthesizer").createSynthesizer(o,null),a=window.plus.android.implements("com.iflytek.cloud.SynthesizerListener",{onEvent:function(t,e,n,o){console.log("onEvent")},onSpeakBegin:function(){console.log("开始阅读")},onSpeakPaused:function(){console.log(" 暂停播放 ")},onSpeakResumed:function(){console.log("继续播放")},onBufferProgress:function(t,e,n,o){console.log("合成进度"+t)},onSpeakProgress:function(t,e,n){console.log("播放进度"+t)},onCompleted:function(t){if(console.log("播放完毕"),n.audio.playList.length>0){n.audio.playCompleted=!1;var e=n.audio.playList[0];n.audio.playList.splice(0,1),i.startSpeaking(e,n.audio.playListener)}else n.audio.playCompleted=!0}});e.audio.play=i,e.audio.playListener=a}else if(R.ios){var r=new(window.plus.ios.importClass("AVSpeechSynthesizer"));e.audio.play=r}t()})}else t()},play:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"收到一笔新的货款";this.init(function(){var n=t.audio.play;if(R.android)t.audio.playCompleted?(t.audio.playCompleted=!1,n.startSpeaking(e,t.audio.playListener)):t.audio.playList.push(e);else if(R.ios){var o=window.plus.ios.importClass("AVSpeechUtterance"),i=window.plus.ios.import("AVSpeechSynthesisVoice").voiceWithLanguage("zh-CN"),a=o.speechUtteranceWithString(e);a.plusSetAttribute("rate",.4),a.setVoice(i),n.speakUtterance(a)}})},stop:function(){}},X={},G={payment:function(t,e,n,i){C(function(){X[t]?window.plus.payment.request(X[t],e,function(t){n&&n(t)},function(t){t.message.indexOf("6001")>-1||t.message.indexOf("62001")>-1||t.message.indexOf("-2")>-1?o.a.$vux.toast.text("用户取消支付"):o.a.$vux.toast.text(""+t.message),console.log("["+t.code+"]："+t.message),i&&i(t)}):console.log("不支持的支付方式:"+t)})},getChannels:function(t,e){C(function(){window.plus.payment.getChannels(function(e){for(var n in e){var o=e[n];"qhpay"!==o.id&&"qihoo"!==o.id&&(X[o.id]=o)}t(X)},function(t){console.log("获取支付通道失败："+t.message),e&&e(t)})})}},Q="",J={scanCode:function(t,e,n,o){C(function(){(Q=new window.plus.barcode.Barcode(t.id,[window.plus.barcode.QR],{frameColor:t.frameColor||"#04be02",scanbarColor:t.scanbarColor||"#04be02"})).setFlash(e),Q.onmarked=function(t,e){n&&n(e)},Q.onerror=function(t){console.log("扫一扫错误: "+t),o&&o(t)}})},start:function(){C(function(){Q.start()})},cancel:function(){C(function(){Q.cancel()})},close:function(){C(function(){Q.close()})}},Z=n("sbrb"),tt=n.n(Z);var et=function(t,e){C(function(){window.plus.io.resolveLocalFileSystemURL(t,function(t){var n=null;t.file(function(t){(n=new window.plus.io.FileReader).onloadend=function(t){e&&e(t.target.result)},n.readAsDataURL(t)},function(t){console.log(t.message)})},function(t){console.log("Resolve file URL failed: "+t.message)})})};var nt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"2000",e=arguments[1],n=arguments[2];C(function(){et(e,function(o){var i={src:o};tt.a.getData(i,function(){var o=tt.a.getTag(this,"Orientation"),i=0,a="auto",r="auto",s=t+"px";if(console.log("旋转方向："+o),R.ios)switch(i=0,o){case 1:a=s;break;case 6:case 8:r=s;break;case 3:a=s;break;default:this.width/this.height>1?a=s:r=s}else if(R.android)switch(o){case 1:i=0,a=s;break;case 6:i=90,r=s;break;case 8:i=270,r=s;break;case 3:i=180,a=s;break;default:i=0,this.width/this.height>1?a=s:r=s}window.plus.zip.compressImage({src:e,dst:e,width:a,height:r,quality:90,format:"jpg",rotate:i,overwrite:!0},function(t){et(t.target,function(e){var o={src:"file://"+t.target.replace,base64:e};n&&n(o)})},function(t){console.log(t.message)})})})})},ot="",it="",at={captureImage:function(t,e,n){C(function(){(ot=window.plus.camera.getCamera()).captureImage(function(n){it=window.plus.nativeUI.showWaiting("正在压缩图片..."),nt(t,n,function(t){it.close(),e&&e(t)})},function(t){console.log("失败："+t.message),n&&n(t)},{filename:"_doc/camera/"+M()(new Date,"YYYY-MM-DD HH:mm:ss")+".jpg",index:1})})},close:function(){C(function(){ot.stopVideoCapture()})}},rt=n("0Qa9"),st=n.n(rt),ct="",ut="",lt={push:z,moveTaskToBack:function(){C(function(){window.plus.android.runtimeMainActivity().moveTaskToBack(!1)})},update:function(t){C(function(){t&&(q=t+"?time="+(new Date).getTime(),K())})},audio:W,pay:G,barcode:J,camera:at,upload:{upload:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1/1",o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return new st.a(function(a,r){C(function(){e=window.plus.io.convertAbsoluteFileSystem(e),o&&(ct=window.plus.nativeUI.showWaiting("开始上传..."));var s=window.plus.uploader.createUpload(t,{method:"POST",timeout:10,retry:0},function(t,e){if(i&&ct.close(),200===e){var n=JSON.parse(t.responseText),o=n.ret||n.err;console.log("上传状态："+o),s.abort(),a(n)}else console.log("上传失败："+t.responseText+"|"+e),r(t)});s.addFile(e,{key:"file.uploadFile"}),s.addEventListener("statechanged",function(t,e){200!==e?(u=Math.round(t.uploadedSize/t.totalSize*100))-c>=5&&(c+=u-c,100===u&&(u=99.9),ct.setTitle(n+"上传中..."+u+"%")):200===e&&ct.setTitle(n+"上传中...100%")},!1),s.start();var c=0,u=0})})},batchUpload:function(t,e){var n=this;return st.a.reduce(e,function(o,i,a,r){return i.src?n.upload(t,i.src,a+1+"/"+r,0===a,a+1===r).then(function(t){return o.push(j()({},e[a],{id:t})),o}):o},[]).then(function(t){return st.a.resolve(t)}).catch(function(t){return st.a.reject(t)})}},geolocation:{getCurrentPosition:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"baidu";C(function(){window.plus.geolocation.getCurrentPosition(function(e){var n=e.coords,o=e.coordsType,i=e.timestamp,a=e.address,r=e.addresses;t&&t({coords:n,coordsType:o,timestamp:i,address:a,addresses:r})},function(t){window.plus.nativeUI.alert("定位错误: "+t.message,function(){},"错误","确定")},{provider:e})})}},clip:{get:function(t){C(function(){var e=void 0;if(R.android){var n=window.plus.android.importClass("android.content.Context"),o=window.plus.android.runtimeMainActivity().getSystemService(n.CLIPBOARD_SERVICE);e=window.plus.android.invoke(o,"getText")}else if(R.ios){(e=window.plus.ios.importClass("UIPasteboard").generalPasteboard().valueForPasteboardType("public.utf8-plain-text"))&&"string"!=typeof e&&(e=e.toString())}e&&t&&t(e)})},set:function(t,e){C(function(){if(R.android){var n=window.plus.android.importClass("android.content.Context"),o=window.plus.android.runtimeMainActivity().getSystemService(n.CLIPBOARD_SERVICE);window.plus.android.invoke(o,"setText",t)}else if(R.ios){window.plus.ios.importClass("UIPasteboard").generalPasteboard().setValueforPasteboardType(t,"public.utf8-plain-text")}e&&e()})}},gallery:{pick:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:720;C(function(){window.plus.gallery.pick(function(e){var o=e.slice(-3).toLowerCase();"jpg"===o||"png"===o?(ut=window.plus.nativeUI.showWaiting("正在压缩图片..."),nt(n,e,function(e){ut.close(),t&&t(e)})):et(e,function(e){t&&t(e)})},function(t){console.log("取消选择图片")},{filter:"image",multiple:!1})})}}},dt={install:function(t){t.prototype.$native=lt},native:lt};function ft(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=new t;t.mixin({mounted:function(){var t=this.$options.eventBus||!1;if(t)for(var n in t)"string"==typeof this.$options.eventBus[n]?e.$on(n,this[this.$options.eventBus[n]].bind(this)):"function"==typeof this.$options.eventBus[n]&&e.$on(n,this.$options.eventBus[n].bind(this))}}),t.prototype.$bus=function(t,n){e.$emit(t,n)};var n=t.config.optionMergeStrategies;n.events=n.methods}"undefined"!=typeof window&&window.Vue&&window.Vue.use(ft);var ht={install:ft};function pt(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.mixin({computed:c()({},Object(u.c)(["history"])),mounted:function(){var t=this;this.$nextTick(function(){var e=t.$options.ready;e&&e.forEach(function(e){e.bind(t)()})})},activated:function(){var t=this;if("forward"===this.history.direction){this.$options.data&&this.$options.reset&&j()(this.$data,this.$options.data.bind(this)());var e=this.$options.forward;e&&e.forEach(function(e){e.bind(t)()})}else if("reverse"===this.history.direction){var n=this.$options.back;n&&n.forEach(function(e){e.bind(t)()})}}});var e=t.config.optionMergeStrategies;e.ready=e.activated,e.forward=e.activated,e.back=e.activated}"undefined"!=typeof window&&window.Vue&&window.Vue.use(pt);var gt,vt,mt=pt,wt=null,_t="undefined"!=typeof console,yt=/(?:^|[-_])(\w)/g;gt=function(t,e){var n=e?wt(e):"";return console.error("[Vue warn]: "+t+n),{msg:t,vm:e,trace:n}},vt=function(t,e){if(t.$root===t)return"<Root>";var n="function"==typeof t&&null!=t.cid?t.options:t._isVue?t.$options||t.constructor.options:t||{},o=n.name||n._componentTag,i=n.__file;if(!o&&i){var a=i.match(/([^/\\]+)\.vue$/);o=a&&a[1]}return(o?"<"+o.replace(yt,function(t){return t.toUpperCase()}).replace(/[-_]/g,"")+">":"<Anonymous>")+(i&&!1!==e?" at "+i:"")};wt=function(t){if(t._isVue&&t.$parent){for(var e=[],n=0;t;){if(e.length>0){var o=e[e.length-1];if(o.constructor===t.constructor){n++,t=t.$parent;continue}n>0&&(e[e.length-1]=[o,n],n=0)}e.push(t),t=t.$parent}return"\n\nfound in\n\n"+e.map(function(t,e){return""+(0===e?"---\x3e ":function(t,e){for(var n="";e;)e%2==1&&(n+=t),e>1&&(t+=t),e>>=1;return n}(" ",5+2*e))+(Array.isArray(t)?vt(t[0])+"... ("+t[1]+" recursive calls)":vt(t))}).join("\n")}return"\n\n(found in "+vt(t)+")"},r.a.attach(document.body);var bt=[v,T,_,E],Tt={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};bt.map(function(e){t.component(e.name,e)}),t.use(ht),t.use(mt),t.use(dt),t.use(F),e.store&&(function(t){t.registerModule("device",{state:{os:"",version:"",navigation:{height:0}},mutations:{updateOs:function(t,e){t.os=e.os},updateNavigation:function(t,e){t.navigation=e.navigation},updateVersion:function(t,e){t.version=e.version}},actions:{}});var e={height:A()};C(function(){window.plus.runtime.getProperty(window.plus.runtime.appid,function(e){t.commit("updateVersion",{version:e.version})})}),t.commit("updateNavigation",{navigation:e}),t.commit("updateOs",{os:R})}(e.store),e.router&&function(t,e){t.registerModule("history",{state:{isLoading:!1,direction:"forward",firstOpen:!0,record:[],activate:"/"},mutations:{SET_LOADING_STATUS:function(t,e){t.isLoading=e.isLoading},SET_DIRECTION:function(t,e){t.direction=e.direction},SET_FIRST_OPEN:function(t,e){t.firstOpen=e.firstOpen},SET_RECORD:function(t,e){t.record=e.record},SET_ACTIVATE:function(t,e){t.activate=e.activate}},actions:{onHistory:function(t,e){return t.dispatch("onHistoryRemove",e).then(function(n){if(n){if(e.from.matched[1]){var o=t.state.record;o[o.length-1].el=e.from.matched[1].instances.default.$el,o[o.length-1].instances=e.from.matched[1].instances.default,t.commit("SET_RECORD",{record:o})}return t.dispatch("onHistoryPush",{record:{path:e.to.path,el:""}}),D.a.resolve(!0)}if("/"===e.from.path){var i=t.state.record;t.commit("SET_RECORD",{record:i[0]})}return D.a.resolve(!1)})},onHistoryPush:function(t,e){var n=t.state.record.concat();n.push(e.record),t.commit("SET_RECORD",{record:n})},onHistoryRemove:function(t,e){var n="",o=t.state.record.concat();for(var i in o)if(o[i].path===e.to.path){n=Number(i)+1;break}return""!==n?(o.splice(n,o.length-n),t.commit("SET_RECORD",{record:o}),D.a.resolve(!1)):D.a.resolve(!0)}}});var n=!0;e.beforeEach(function(e,o,i){n||t.commit("SET_FIRST_OPEN",{firstOpen:!1}),n=!1,t.commit("SET_LOADING_STATUS",{isLoading:!0}),t.dispatch("onHistory",{to:e,from:o}).then(function(e){e?t.commit("SET_DIRECTION",{direction:"forward"}):t.commit("SET_DIRECTION",{direction:"reverse"}),i()})}),e.afterEach(function(e,n){t.commit("SET_LOADING_STATUS",{isLoading:!1}),setTimeout(function(){t.commit("SET_ACTIVATE",{activate:e.path})},0)})}(e.store,e.router)),t.$log.init(),window.onerror=function(e,n,o){console.error(e),t.$log.write({url:n,error:e,line:o})},t.config.errorHandler=function(e,n,o){var i=gt("Error in "+o+': "'+e.toString()+'"',n);console.error(e),n&&t.$log.write({trace:i.trace,error:i.msg})},window.Promise.prototype.catch=function(e){return this.then(null,function(n){n&&t.$log.write({error:n,remarks:"Promise error"}),e(n)})}}};o.a.use(i.a);var St=[{path:"",component:v,children:[{path:"/",component:function(){return n.e(0).then(n.bind(null,"s7H6"))}},{path:"/Hello-2",component:function(){return n.e(1).then(n.bind(null,"+i8t"))}},{path:"/Hello-3",component:function(){return n.e(2).then(n.bind(null,"fKsR"))}}]}],kt=new i.a({routes:St}),Et={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-view")],1)},staticRenderFns:[]},Ct=n("VU/8")({name:"app",mounted:function(){this.$nextTick(function(){})},data:function(){return{}},computed:{},watch:{},methods:{}},Et,!1,null,null,null).exports;o.a.config.productionTip=!1,o.a.config.errorHandler=function(t,e,n){console.error("errorHandler:",t),o.a.$log.write({error:t.message,hook:n})},window.Promise.prototype.catch=function(t){return this.then(null,function(e){console.error("prototype:",e.message),e.message&&o.a.$log.write({error:e.message,remarks:"Promise error"}),t(e)})},console.log(["%c                   _ooOoo_                   ","                  o8888888o                  ",'                  88" . "88                  ',"                  (| -_- |)                  ","                  O\\  =  /O                  ","               ____/`---'\\____               ","             .'  \\\\|     |//  `.             ","            /  \\\\|||  :  |||//  \\            ","           /  _||||| -:- |||||-  \\           ","           |   | \\\\\\  -  /// |   |           ","           | \\_|  ''\\---/''  |   |           ","           \\  .-\\__  `-`  ___/-. /           ","         ___`. .'  /--.--\\  `. . __          ",'      ."" \'<  `.___\\_<|>_/___.\'  >\'"".       ',"     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |     ","     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /     ","======`-.____`-.___\\_____/___.-`____.-'======","                   `=---='                   ","^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^","           佛祖保佑         永无BUG           "].join("\n"),"color: #FFD700;background: #000000"),r.a.attach(document.body),o.a.use(u.a);var $t=new u.a.Store({strict:!1});o.a.use(Tt,{store:$t,router:kt}),o.a.$log.init(),window.onerror=function(t,e,n){console.error("onerror:",t),o.a.$log.write({url:e,error:t,line:n})},new o.a({el:"#app",template:"<App/>",components:{App:Ct},router:kt,store:$t})},jQzh:function(t,e){},nCa5:function(t,e){},uLxx:function(t,e){},vkF0:function(t,e){},w6KN:function(t,e){t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";if(!t)return"";"string"==typeof t&&(t=new Date(t.replace(/-/g,"/"))),"number"==typeof t&&(t=new Date(t));var n={"M+":t.getMonth()+1,"D+":t.getDate(),"h+":t.getHours()%12==0?12:t.getHours()%12,"H+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};for(var o in/(Y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(e)&&(e=e.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"星期":"周":"")+{0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"}[t.getDay()+""])),n)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[o]:("00"+n[o]).substr((""+n[o]).length)));return e}}},["5qRC"]);
//# sourceMappingURL=app.5800ae9f1925aaa27e89.js.map