(function(e){function t(t){for(var n,c,r=t[0],a=t[1],l=t[2],u=0,p=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&p.push(s[c][0]),s[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,r=1;r<o.length;r++){var a=o[r];0!==s[a]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},s={app:0},i=[];function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/fe-study/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=a;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0544":function(e,t,o){e.exports=o.p+"img/5.e37a2a5e.png"},"05f1":function(e,t,o){e.exports=o.p+"img/flag.462d95e9.png"},"093d":function(e,t,o){},"0c33":function(e,t,o){},"0d8c":function(e,t,o){"use strict";o("2a40")},"146f":function(e,t,o){"use strict";o("093d")},"1c38":function(e,t,o){"use strict";o("7f97")},"263e":function(e,t,o){},2830:function(e,t,o){e.exports=o.p+"img/8.55c1f110.png"},"298a":function(e,t,o){e.exports=o.p+"img/6.3af255e3.png"},"2a0e":function(e,t,o){e.exports=o.p+"img/11.6a69a306.png"},"2a40":function(e,t,o){},"2b4e":function(e,t,o){e.exports=o.p+"img/1.125b8bc0.png"},"3bd3":function(e,t,o){"use strict";o("263e")},4138:function(e,t,o){e.exports=o.p+"img/4.ef9d9ca8.png"},"42fe":function(e,t,o){"use strict";o("a94d")},"4f03":function(e,t,o){"use strict";o("0c33")},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("7a23");function s(e,t,o,s,i,c){const r=Object(n["B"])("router-view");return Object(n["u"])(),Object(n["d"])(r)}var i={name:"App"},c=o("d959"),r=o.n(c);const a=r()(i,[["render",s]]);var l=a,d=o("6c02"),u=o("e685"),p=o.n(u);const b=e=>(Object(n["x"])("data-v-195e25f4"),e=e(),Object(n["v"])(),e),g=b(()=>Object(n["g"])("img",{src:p.a,alt:""},null,-1));function h(e,t,o,s,i,c){const r=Object(n["B"])("app-header"),a=Object(n["B"])("router-view"),l=Object(n["B"])("app-nav");return Object(n["u"])(),Object(n["f"])("main",null,[Object(n["g"])("div",{class:Object(n["o"])(["desktop",{wide:s.currentOpen||s.getUsername,freeze:s.getUsername}])},[Object(n["i"])(r,{customClass:s.currentOpen||s.getUsername?"open":""},null,8,["customClass"]),g,Object(n["i"])(a),Object(n["i"])(l,{navClass:"type2",fileTitle:!0}),Object(n["i"])(l,{navClass:"type1"})],2)])}var m=o("9604"),O=o.n(m);const f=e=>(Object(n["x"])("data-v-edab3c16"),e=e(),Object(n["v"])(),e),j=f(()=>Object(n["g"])("img",{src:O.a,alt:""},null,-1)),v=[j],A={class:"acc"},w=f(()=>Object(n["g"])("li",null,[Object(n["g"])("p",null,"이 Mac의 관하여")],-1)),x=f(()=>Object(n["g"])("li",{class:"division"},null,-1));function y(e,t,o,s,i,c){return Object(n["u"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("header",{class:Object(n["o"])(o.customClass)},[Object(n["g"])("button",{onClick:t[0]||(t[0]=(...e)=>s.openTooltipHnalder&&s.openTooltipHnalder(...e))},v),Object(n["g"])("button",A,[Object(n["g"])("p",null,Object(n["D"])(s.nowTime),1)])],2),Object(n["g"])("ul",{class:Object(n["o"])(["tooltip",{on:s.openTooltip}])},[w,x,Object(n["g"])("li",{onClick:t[1]||(t[1]=(...e)=>s.logout&&s.logout(...e))},[Object(n["g"])("p",null,Object(n["D"])(this.$parent.getUsername)+" 로그아웃...",1)])],2),Object(n["g"])("div",{class:Object(n["o"])(["dim",{on:s.openTooltip}]),onClick:t[2]||(t[2]=(...e)=>s.closeTooltipHnalder&&s.closeTooltipHnalder(...e))},null,2)],64)}o("14d9");var B={name:"app-header",setup(){const e=Object(n["k"])(),t=e.parent.proxy,o=Object(n["z"])(""),s=Object(n["z"])(!1);Object(n["s"])(()=>{setInterval(i,1e3)});const i=()=>{const e=new Date,t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),c=String(e.getMinutes()).padStart(2,"0");o.value=`${t}년 ${n}월 ${s}일 ${i}시 ${c}분`},c=()=>s.value=!0,r=()=>s.value=!1,a=Object(d["c"])(),l=()=>{r(),e.parent.parent.parent.proxy.currentOpen=!1,t.getUsername=void 0,t.username="",localStorage.clear(),setTimeout(()=>location.reload(!0),500),a.push("/")};return{updateTimeHandler:i,openTooltipHnalder:c,closeTooltipHnalder:r,logout:l,openTooltip:s,nowTime:o}},props:{customClass:{type:String,default:""}}};o("42fe");const C=r()(B,[["render",y],["__scopeId","data-v-edab3c16"]]);var k=C;const T=["src"],S={key:0};function E(e,t,s,i,c,r){const a=Object(n["B"])("router-link");return Object(n["u"])(),Object(n["f"])("nav",{class:Object(n["o"])(s.navClass)},[Object(n["g"])("ul",null,[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(i.navMenuList,e=>(Object(n["u"])(),Object(n["f"])("li",{key:e},[Object(n["i"])(a,{to:e.path},{default:Object(n["I"])(()=>[Object(n["g"])("img",{src:o("bb6e")("./"+(""===e.icon?"desktop/folder.png":e.icon)),alt:""},null,8,T),s.fileTitle?(Object(n["u"])(),Object(n["f"])("p",S,Object(n["D"])(e.name),1)):Object(n["e"])("",!0)]),_:2},1032,["to"])]))),128))])],2)}var M={name:"app-nav",setup(){let e=Object(n["y"])([]);const t=Object(n["k"])();return e=[{name:"Donut Game",icon:"donut/10.png",path:"/donut-game"},{name:"ToDo List",icon:"desktop/memo.png",path:"/to-do-list"}],"type2"===t.proxy.navClass&&e.map(e=>e.icon=""),{navMenuList:e}},props:{navClass:{type:String,default:""},fileTitle:{type:Boolean,default:!1}}};o("81fb");const I=r()(M,[["render",E],["__scopeId","data-v-9427b58e"]]);var z=I,H={name:"index",setup(){let e=Object(n["z"])(!1),t=Object(n["z"])(void 0);return t.value=localStorage.getItem("west-username"),{currentOpen:e,getUsername:t}},components:{"app-header":k,"app-nav":z}};o("3bd3");const D=r()(H,[["render",h],["__scopeId","data-v-195e25f4"]]);var U=D,R=o("8f06"),_=o.n(R);const L=e=>(Object(n["x"])("data-v-622e5c70"),e=e(),Object(n["v"])(),e),W={class:"screen"},P={class:"user"},V=L(()=>Object(n["g"])("div",{class:"photo"},[Object(n["g"])("img",{src:_.a,alt:""})],-1)),Y={class:"name_output"},X={key:0},F=L(()=>Object(n["g"])("p",{class:"info_text"},[Object(n["h"])("Touch ID를 활성화 하려면 "),Object(n["g"])("br"),Object(n["h"])(" 사용자 이름이 필요합니다.")],-1));function N(e,t,o,s,i,c){return Object(n["u"])(),Object(n["f"])("div",W,[Object(n["g"])("div",P,[V,Object(n["g"])("p",Y,Object(n["D"])(s.getUsername),1),s.getUsername?Object(n["e"])("",!0):(Object(n["u"])(),Object(n["f"])("div",X,[Object(n["J"])(Object(n["g"])("input",{type:"text",class:"name_input",placeholder:"이름 입력","onUpdate:modelValue":t[0]||(t[0]=e=>s.username=e),onKeyup:t[1]||(t[1]=Object(n["K"])(e=>s.onPressEnter(s.username),["enter"]))},null,544),[[n["F"],s.username]]),F]))])])}var J={name:"desktop",setup(){const e=Object(n["k"])(),t=e.parent.parent.proxy;let o=Object(n["z"])(void 0);const s=Object(n["z"])(""),i=Object(n["s"])(()=>{o.value=localStorage.getItem("west-username"),o.value&&setTimeout(()=>t.currentOpen=!0,1e3)}),c=e=>{localStorage.setItem("west-username",e),o.value=localStorage.getItem("west-username"),null!==o.value&&setTimeout(()=>t.currentOpen=!0,1e3)};return{mounted:i,onPressEnter:c,getUsername:o,username:s}}};o("146f");const G=r()(J,[["render",N],["__scopeId","data-v-622e5c70"]]);var K=G;const Q=e=>(Object(n["x"])("data-v-5c366460"),e=e(),Object(n["v"])(),e),Z=Q(()=>Object(n["g"])("div",{class:"page_404"},[Object(n["g"])("h2",null,"🚧뚝딱뚝딱🚧"),Object(n["g"])("iframe",{src:"https://lottie.host/embed/e15fe7f6-d3f7-40ac-999f-602b9e191640/3ukDgHodMk.json"}),Object(n["g"])("h3",null,"🔥 열심히 만드는 중 🔥")],-1));function q(e,t,o,s,i,c){const r=Object(n["B"])("app-button");return Object(n["u"])(),Object(n["f"])("div",{class:Object(n["o"])(["page",{max_wide:s.maximize}])},[Object(n["i"])(r),Z],2)}const $={class:"window_btn"},ee=["title"];function te(e,t,o,s,i,c){return Object(n["u"])(),Object(n["f"])("div",$,[Object(n["g"])("button",{onClick:t[0]||(t[0]=(...e)=>s.routeGoHome&&s.routeGoHome(...e)),title:"닫기"}),Object(n["g"])("button",{onClick:t[1]||(t[1]=(...e)=>s.routeGoBack&&s.routeGoBack(...e)),title:"뒤로가기"}),Object(n["g"])("button",{onClick:t[2]||(t[2]=(...e)=>s.isMaximize&&s.isMaximize(...e)),class:Object(n["o"])({off:o.disable}),title:o.disable?"사용할 수 없음":"화면 확대/축소"},null,10,ee)])}var oe={name:"app-button",setup(){const e=Object(n["k"])();let t=e.parent.proxy;const o=Object(d["c"])(),s=()=>o.push("/"),i=()=>o.go(-1),c=()=>t.maximize=!t.maximize;return{routeGoHome:s,routeGoBack:i,isMaximize:c}},props:{disable:{type:Boolean,default:!1}}};o("0d8c");const ne=r()(oe,[["render",te],["__scopeId","data-v-22b332da"]]);var se=ne,ie={name:"page-404",setup(){const e=Object(n["z"])(!1);return{maximize:e}},components:{"app-button":se}};o("4f03");const ce=r()(ie,[["render",q],["__scopeId","data-v-5c366460"]]);var re=ce,ae=o("c822"),le=o.n(ae),de=o("05f1"),ue=o.n(de);const pe=e=>(Object(n["x"])("data-v-55c2b591"),e=e(),Object(n["v"])(),e),be={class:"box"},ge={key:0},he=pe(()=>Object(n["g"])("img",{src:le.a,alt:""},null,-1)),me=[he],Oe={key:0,src:ue.a,alt:""};function fe(e,t,o,s,i,c){const r=Object(n["B"])("app-button");return e.isError?Object(n["e"])("",!0):(Object(n["u"])(),Object(n["f"])("div",{key:0,class:Object(n["o"])(["donut_container",{pc:!i.isMobile}])},[Object(n["i"])(r,{disable:""}),i.gameOver||i.complete?(Object(n["u"])(),Object(n["f"])("div",{key:0,class:Object(n["o"])(["overlay",{success:i.complete}]),style:Object(n["p"])(`width:${this.renderOptions.width}px; height: ${this.renderOptions.height}px; zoom: ${i.isMobile?i.zoom:1};`)},[Object(n["g"])("div",be,[Object(n["g"])("div",{class:Object(n["o"])(["line",{start:i.gameOver||i.complete}])},[Object(n["g"])("p",null,Object(n["D"])(i.complete?"성공":"실패"),1),i.complete?(Object(n["u"])(),Object(n["f"])("ul",ge,[(Object(n["u"])(),Object(n["f"])(n["a"],null,Object(n["A"])(5,e=>Object(n["g"])("li",{key:e},me)),64))])):Object(n["e"])("",!0)],2),i.complete?(Object(n["u"])(),Object(n["f"])("img",Oe)):Object(n["e"])("",!0),Object(n["g"])("button",{onClick:t[0]||(t[0]=(...e)=>c.retry&&c.retry(...e))},"RETRY")])],6)):Object(n["e"])("",!0),Object(n["g"])("canvas",{ref:"ctx",onMouseover:t[1]||(t[1]=e=>i.isMouseEvt=!0),onMouseup:t[2]||(t[2]=e=>i.isClickEvt=!1),onMousedown:t[3]||(t[3]=e=>i.isClickEvt=i.isMouseEvt),onMouseout:t[4]||(t[4]=e=>i.isMouseEvt=!1),onMousemove:t[5]||(t[5]=(...e)=>c.mouseEvtHandler&&c.mouseEvtHandler(...e)),onClick:t[6]||(t[6]=(...e)=>c.clickEvtHandler&&c.clickEvtHandler(...e)),onTouchend:t[7]||(t[7]=(...e)=>c.clickEvtHandler&&c.clickEvtHandler(...e)),onTouchstart:t[8]||(t[8]=Object(n["L"])((...e)=>c.touchEvtHandler&&c.touchEvtHandler(...e),["stop","prevent"])),onTouchmove:t[9]||(t[9]=(...e)=>c.mouseEvtHandler&&c.mouseEvtHandler(...e))},null,544)],2))}var je=o("b8bf"),ve={name:"game",components:{"app-button":se},computed:{},mounted(){this.init(),window.addEventListener("resize",this.resize)},unmounted(){window.removeEventListener("resize",this.resize)},methods:{init(){this.engine=this.Engine.create(),this.world=this.engine.world,this.render=this.Render.create({element:this.$el,engine:this.engine,canvas:this.$refs.ctx,options:this.renderOptions});const e=this.renderOptions.width,t=this.renderOptions.height,o=5,n=2,s=this.Bodies.rectangle(e/2,t,e,50,this.customRender("transparent")),i=this.Bodies.rectangle(n,t/2,o,e+t,this.customRender("transparent")),c=this.Bodies.rectangle(e-n,t/2,o,e+t,this.customRender("transparent"));this.World.add(this.engine.world,[s,i,c]),this.Runner.run(this.engine),this.Render.run(this.render),this.Events.on(this.engine,"beforeUpdate",this.beforeUpdate),this.start(),this.performance(),this.resize(),this.Events.on(this.engine,"collisionActive",this.crushBallEvtHandler),this.Events.on(this.engine,"collisionStart",this.crushBallEvtHandler),this.Events.on(this.render,"afterRender",this.afterRender),this.Render.lookAt(this.render,{min:{x:0,y:0},max:{x:this.renderOptions.width,y:this.renderOptions.height}})},start(){this.gameOver=!1,this.complete=!1,this.ball=null,this.engine.timing.timeScale=1,this.score=0;while(this.engine.world.bodies.length>3)this.engine.world.bodies.pop();this.createBall(1)},retry(){window.setInterval("location.reload()",100)},createBall(e){this.ball=this.newBall(this.render.options.width/2,50,e),this.ball.collisionFilter={group:-1,category:2,mask:0},this.World.add(this.engine.world,this.ball)},newBall(e,t,n){const s=this.Bodies.circle(e,t,10*n,{size:n,createdAt:Date.now(),friction:.1,render:{sprite:{texture:o("a69b")(`./${n}.png`),xScale:n/12.75,yScale:n/12.75}}});return s},customRender(e){return{isStatic:!0,render:{fillStyle:e}}},beforeUpdate(){if(this.gameOver)return;if(this.ball){const e=this.engine.world.gravity;this.Body.applyForce(this.ball,this.ball.position,{x:-e.x*e.scale*this.ball.mass,y:-e.y*e.scale*this.ball.mass}),this.isClickEvt&&this.getMouseXpos&&(this.ball.position.x=this.getMouseXpos,this.getMouseXpos>455?this.ball.position.x=455:this.getMouseXpos<25&&(this.ball.position.x=25)),this.ball.position.y=50}const e=je["Composite"].allBodies(this.engine.world);for(let t=4;t<e.length;t++)this.body=e[t],this.body.position.y<100&&this.body!==this.ball&&Math.abs(this.body.velocity.x)<.2&&Math.abs(this.body.velocity.y)<.2&&this.gameEnd();this.isOverLine=!0},afterRender(){var e;const t=null===this||void 0===this||null===(e=this.$refs)||void 0===e||null===(e=e.ctx)||void 0===e?void 0:e.getContext("2d");"donut-game"===this.$router.name&&!this.gameOver&&this.isOverLine&&(t.strokeStyle="#f55",t.beginPath(),t.moveTo(0,100),t.lineTo(480,100),t.stroke())},gameEnd(){this.gameOver=!0,this.engine.timing.timeScale=0},resize(){this.isMobile=window.innerHeight/window.innerWidth>=1.49,this.zoom=window.innerWidth/this.renderOptions.width,this.isMobile?this.$refs.ctx.style.zoom=this.zoom:this.$refs.ctx.style.zoom=1},touchEvtHandler(e){this.isClickEvt=!0,this.getMouseXpos=e.touches[0].clientX/this.$refs.ctx.style.zoom},mouseEvtHandler(e){var t;if(this.gameOver)return;const o=this.$refs.ctx.getBoundingClientRect();this.isMobile?this.getMouseXpos=((null===e||void 0===e?void 0:e.clientX)||(null===e||void 0===e||null===(t=e.touches[0])||void 0===t?void 0:t.clientX))/this.$refs.ctx.style.zoom-o.left:this.getMouseXpos=(null===e||void 0===e?void 0:e.clientX)-o.left},clickEvtHandler(){this.gameOver||this.ball&&(this.ball.createdAt=0,this.ball.collisionFilter={group:0,category:1,mask:-1},this.Body.setVelocity(this.ball,{x:0,y:100/this.fps*5.5}),this.ball=null,this.updateSize=Math.ceil(3*Math.random()),setTimeout(()=>this.createBall(this.updateSize),500))},crushBallEvtHandler(e){this.gameOver||e.pairs.forEach(e=>{if(this.sumBalls=[e.bodyA,e.bodyB],this.sumBalls[0].size&&this.sumBalls[1].size&&this.sumBalls[0].size===this.sumBalls[1].size){const e=this.Composite.allBodies(this.engine.world);if(e.includes(this.sumBalls[0])&&e.includes(this.sumBalls[1])){if((Date.now()-this.sumBalls[0].createdAt<100||Date.now()-this.sumBalls[1].createdAt<100)&&0!==this.sumBalls[0].createdAt&&0!==this.sumBalls[1].createdAt)return;this.World.remove(this.engine.world,this.sumBalls[0]),this.World.remove(this.engine.world,this.sumBalls[1]),this.World.add(this.engine.world,this.newBall((this.sumBalls[0].position.x+this.sumBalls[1].position.x)/2,(this.sumBalls[0].position.y+this.sumBalls[1].position.y)/2,11===this.sumBalls[0].size?11:this.sumBalls[0].size+1)),10===this.sumBalls[0].size&&(this.complete=!0)}}})},performance(){window.requestAnimationFrame(()=>{const e=performance.now();while(this.speeds.length>0&&this.speeds[0]<=e-1e3)this.speeds.shift();this.speeds.push(e),this.fps=this.speeds.length,this.performance()})}},data(){return{ball:null,world:void 0,runner:void 0,render:void 0,engine:void 0,mouseConstraint:void 0,touch:!1,bodies:void 0,gameOver:!1,complete:!1,getMouseXpos:null,isOverLine:!1,isClickEvt:!1,isMouseEvt:!1,fps:100,updateSize:1,isMobile:!1,zoom:null,speeds:[],Engine:je["Engine"],Render:je["Render"],Runner:je["Runner"],Common:je["Common"],MouseConstraint:je["MouseConstraint"],Mouse:je["Mouse"],World:je["World"],Vertices:je["Vertices"],Svg:je["Svg"],Bodies:je["Bodies"],Body:je["Body"],Composites:je["Composites"],Composite:je["Composite"],Events:je["Events"],renderOptions:{width:480,height:630,pixelRatio:window.devicePixelRatio,wireframes:!1,showDebug:!1,showBroadphase:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showShadows:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}}}};o("1c38");const Ae=r()(ve,[["render",fe],["__scopeId","data-v-55c2b591"]]);var we=Ae;const xe={class:"layout_l"},ye={class:"empty_menu"},Be={class:"layout_r"},Ce={class:"current_write"},ke={class:"to_do_list"},Te={key:0},Se=["onUpdate:modelValue"],Ee={key:1,class:"btn_box"},Me=["id"],Ie=["id"],ze=["id"],He={key:2,class:"btn_box"},De=["id"],Ue=["id"];function Re(e,t,o,s,i,c){const r=Object(n["B"])("app-button");return Object(n["u"])(),Object(n["f"])("div",{class:Object(n["o"])(["todo_wrap",{max_wide:s.maximize}])},[Object(n["g"])("div",xe,[Object(n["i"])(r),Object(n["g"])("div",ye,[Object(n["g"])("h2",null,[Object(n["h"])(" MEMO "),Object(n["g"])("button",{onClick:t[0]||(t[0]=(...e)=>s.deleteTodoItem&&s.deleteTodoItem(...e))},"ALL CELAR")]),Object(n["g"])("p",null,Object(n["D"])(s.getUsername)+"의 MEMO",1)])]),Object(n["g"])("div",Be,[Object(n["g"])("div",Ce,[Object(n["J"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>s.writeTodo=e),onKeyup:t[2]||(t[2]=Object(n["K"])((...e)=>s.updateText&&s.updateText(...e),["enter"])),placeholder:"Please enter text"},null,544),[[n["F"],s.writeTodo]]),Object(n["g"])("span",null,"TOTAL : "+Object(n["D"])(s.todoList.length),1)]),Object(n["g"])("ul",ke,[(Object(n["u"])(!0),Object(n["f"])(n["a"],null,Object(n["A"])(s.todoList,(e,o)=>(Object(n["u"])(),Object(n["f"])("li",{key:o,class:Object(n["o"])({fix:e.fixed})},[e.edit?Object(n["e"])("",!0):(Object(n["u"])(),Object(n["f"])("p",Te,Object(n["D"])(e.desc),1)),Object(n["J"])(Object(n["g"])("input",{type:"text","onUpdate:modelValue":t=>e.desc=t},null,8,Se),[[n["G"],e.edit],[n["F"],e.desc]]),e.edit?(Object(n["u"])(),Object(n["f"])("div",Ee,[Object(n["g"])("button",{id:o,onClick:t[3]||(t[3]=(...e)=>s.delTodoItem&&s.delTodoItem(...e))}," 💣",8,Me),Object(n["g"])("button",{id:o,onClick:t[4]||(t[4]=(...e)=>s.editCancelTodoItem&&s.editCancelTodoItem(...e))}," ❌ ",8,Ie),Object(n["g"])("button",{id:o,onClick:t[5]||(t[5]=(...e)=>s.editDoneTodoItem&&s.editDoneTodoItem(...e))}," ⭕ ",8,ze)])):Object(n["e"])("",!0),e.edit?Object(n["e"])("",!0):(Object(n["u"])(),Object(n["f"])("div",He,[Object(n["g"])("button",{id:o,onClick:t[6]||(t[6]=(...e)=>s.fixedTodoItem&&s.fixedTodoItem(...e)),class:"fix_btn"},"✅",8,De),Object(n["g"])("button",{id:o,onClick:t[7]||(t[7]=(...e)=>s.editStartTodoItem&&s.editStartTodoItem(...e))}," 📝 ",8,Ue)]))],2))),128))])])],2)}var _e={name:"To-do-list",setup(){const e=Object(n["z"])(!1),t=Object(n["z"])("");let o=Object(n["z"])(void 0),s=Object(n["y"])([]);const i=()=>{""!==t.value&&t.value?c(t.value):alert("Write text"),t.value=""},c=e=>{s.push({desc:e,edit:!1,fixed:!1}),r()},r=()=>{localStorage.setItem("west-todo-item",JSON.stringify(s))},a=Object(n["s"])(()=>{const e=JSON.parse(localStorage.getItem("west-todo-item"));o.value=localStorage.getItem("west-username"),e&&s.push(...e)}),l=()=>{s.splice(0,s.length),localStorage.removeItem("west-todo-item")},d=e=>parseInt(e.target.id),u=e=>{s.splice(d(e),1),r()},p=e=>s[d(e)].edit=!0,b=e=>{s[d(e)].edit=!1,r()},g=e=>{s[d(e)].edit=!1,setTimeout(()=>location.reload(!0),100)},h=e=>{s[d(e)].fixed=!s[d(e)].fixed,s.sort((e,t)=>t.fixed-e.fixed),r()};return{maximize:e,todoList:s,writeTodo:t,getTodoItem:a,getUsername:o,updateText:i,setTodoItem:r,delTodoItem:u,deleteTodoItem:l,editStartTodoItem:p,editDoneTodoItem:b,editCancelTodoItem:g,fixedTodoItem:h}},components:{"app-button":se}};o("c836");const Le=r()(_e,[["render",Re],["__scopeId","data-v-047b6950"]]);var We=Le;const Pe=[{path:"/",redirect:"/desktop",component:U,children:[{path:"/desktop",name:"desktop",component:K},{path:"/page-404",name:"page404",component:re},{path:"/donut-game",name:"donut-game",component:we},{path:"/to-do-list",name:"to-do-list",component:We}]}],Ve=Object(d["a"])({history:Object(d["b"])("/fe-study/"),routes:Pe});o("c2b1");const Ye=Object(n["c"])(l);Ye.use(Ve),Ye.mount("#app")},7888:function(e,t,o){e.exports=o.p+"img/2.81d1d21f.png"},"7f97":function(e,t,o){},"81fb":function(e,t,o){"use strict";o("8b6d")},"8b6d":function(e,t,o){},"8f06":function(e,t,o){e.exports=o.p+"img/mimoji.2d73e79c.jpg"},9204:function(e,t,o){e.exports=o.p+"img/7.e35d4add.png"},9604:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFTSURBVEiJrdVBSxVRGMbxd8S0RDQQxFXpTokWiTs/QlJfor1t2uTCrYguJRdthGgt2EY/gbprEYIQBCUhCm1S0MBfi3vBcbgzc51zn9VwXvj/meecmRPRMHiFXRw2ZZSBH+Cz2+z0WrDubhZ6CZ/AdQ6+2TN4W/C6DT7DIrJeC8bxAv2poDEsYx8/sIc3GEE/XrY3+hf+4CuWMNQNfA4nOucf/pbM4BgTdRX8rgB0k7dVgo1E+GqRmeXggxFxHhHDtT12zveIeJZl2VV+sS/3/DwBHhHxsQgvCp4kwCMijjot5gUDiYJHdYKzRMFs5RRPE0/QKUbrJGUfWLfZwZ2q+gqOL43Kuc1CROxjqkzwKVEQETETERelUxwk1rRVqcc8bhrCLzFZ+4740FDwrqsSMaR1F9wn2yjuaaXkMba0LpRveI9pjGrdaita//+fWMPDTpz/VwsfyiPbiQIAAAAASUVORK5CYII="},"96f1":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJzSURBVHic7Zs9a1NRGICf9yYxtY0N2uAHtUgHoejq4CYFcSvZupX+BjdRB8HB+jNqQQeXglJol6KDf0BFFIUuNVYbm7b5qMm953WwqaZUUOi9r3jPM+Wc4b5PHnLIDeSCx+NJMwKgy8tZgo/TIGXgTHc/BhSogMzjTj+Q8fEwpjl/jOjCQp5C7SnK1WRH6xKl3IRcnGwnO7eXgELtZvJvHkCu8SW8kfzcXgJUpsymC9Nms3fJgp6zG6+j0d2JmUO9pIv6CDtDEnZKqCsSthu6tf6WdrMOEKhu4twTmVt7BSD67KEeqsBfos8fJTDEwdoK1De6O07Re5nZyu1s/NP/ASSAU6PQ2YFvLYBAkFs6PfwusHZLDBEonuzZUvS6/SegsdnAuX4ktnuPPTRs7x9ywT5A5f1AUqMOKHwkPUfgN6Q+gP0RODYU37WDDIQhuF9+crRbEHX2lub3AbGjCq1tdPMzOAcorK/CmxfQrKXgCIhA/yBSGvnxGoHSWbhchqODKQjQJZeHgWLv+vylFAUAJL/vG7c0kq4ABJnedS6fsgAH4ANYC1jjA1gLWOMDWAtY4wNYC1jjA1gLWOMDWAtY4wNYC1jjA1gLWOMDWAtY4wNYC1jjA1gLWOMDWAtY4wNYC1jjA1gLWOMDWAtY4wNYC1iT1eb2S1w4JkrOWiZeNKLV2GBt5XV3RzListQqBZTc//1fOQAy1Ksl6tUr3Q2FD4Eis5ZWibL9tWcpyGwQFI/PoCwZKSXHxidobv1ciywS5e/vPjZ3J0tFplS0jDJMfI/NJUvUKbLTPEG9WqVe2wJVlFWBecb65mTycWSt6PF4bPkOZx23aBycXdUAAAAASUVORK5CYII="},"9cda":function(e,t,o){e.exports=o.p+"img/3.f917fa55.png"},"9ea1":function(e,t,o){e.exports=o.p+"img/memo.113c0229.png"},a69b:function(e,t,o){var n={"./1.png":"2b4e","./10.png":"fa4e","./11.png":"2a0e","./2.png":"7888","./3.png":"9cda","./4.png":"4138","./5.png":"0544","./6.png":"298a","./7.png":"9204","./8.png":"2830","./9.png":"f036","./bg.png":"df01","./flag.png":"05f1","./star.png":"c822"};function s(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=i,e.exports=s,s.id="a69b"},a94d:function(e,t,o){},bb6e:function(e,t,o){var n={"./desktop/apple.png":"9604","./desktop/background.jpg":"e685","./desktop/folder.png":"96f1","./desktop/memo.png":"9ea1","./desktop/mimoji.jpg":"8f06","./donut/1.png":"2b4e","./donut/10.png":"fa4e","./donut/11.png":"2a0e","./donut/2.png":"7888","./donut/3.png":"9cda","./donut/4.png":"4138","./donut/5.png":"0544","./donut/6.png":"298a","./donut/7.png":"9204","./donut/8.png":"2830","./donut/9.png":"f036","./donut/bg.png":"df01","./donut/flag.png":"05f1","./donut/star.png":"c822"};function s(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=i,e.exports=s,s.id="bb6e"},c2b1:function(e,t,o){},c822:function(e,t,o){e.exports=o.p+"img/star.d5768891.png"},c836:function(e,t,o){"use strict";o("edc7")},df01:function(e,t,o){e.exports=o.p+"img/bg.2eb059e6.png"},e685:function(e,t,o){e.exports=o.p+"img/background.20644346.jpg"},edc7:function(e,t,o){},f036:function(e,t,o){e.exports=o.p+"img/9.b91bbe05.png"},fa4e:function(e,t,o){e.exports=o.p+"img/10.52d07ffe.png"}});
//# sourceMappingURL=app.8a1db8cd.js.map