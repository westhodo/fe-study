(function(e){function t(t){for(var i,r,l=t[0],a=t[1],h=t[2],d=0,u=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);c&&c(t);while(u.length)u.shift()();return o.push.apply(o,h||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],i=!0,l=1;l<s.length;l++){var a=s[l];0!==n[a]&&(i=!1)}i&&(o.splice(t--,1),e=r(r.s=s[0]))}return e}var i={},n={app:0},o=[];function r(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=i,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(s,i,function(t){return e[t]}.bind(null,i));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/canvas-study/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var c=a;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0f01":function(e,t,s){e.exports=s.p+"img/7.e35d4add.png"},"1f66":function(e,t,s){e.exports=s.p+"img/3.f917fa55.png"},"338d":function(e,t,s){e.exports=s.p+"img/6.3af255e3.png"},"4abd":function(e,t,s){e.exports=s.p+"img/10.52d07ffe.png"},"56d7":function(e,t,s){"use strict";s.r(t);var i=s("7a23");function n(e,t,s,n,o,r){const l=Object(i["k"])("game");return Object(i["i"])(),Object(i["c"])(l)}var o=s("ba5a"),r=s.n(o),l=s("5904"),a=s.n(l);const h={class:"box"},c={key:0},d=Object(i["f"])("img",{src:r.a,alt:""},null,-1),u=[d],p={key:0,src:a.a,alt:""};function g(e,t,s,n,o,r){return Object(i["i"])(),Object(i["e"])("div",{class:Object(i["g"])(["container",{pc:!o.isMobile}])},[o.gameOver||o.complete?(Object(i["i"])(),Object(i["e"])("div",{key:0,class:Object(i["g"])(["overlay",{success:o.complete}]),style:Object(i["h"])(`width:${this.renderOptions.width}px; height: ${this.renderOptions.height}px; zoom: ${o.isMobile?o.zoom:1};`)},[Object(i["f"])("div",h,[Object(i["f"])("div",{class:Object(i["g"])(["line",{start:o.gameOver||o.complete}])},[Object(i["f"])("p",null,Object(i["l"])(o.complete?"성공":"실패"),1),o.complete?(Object(i["i"])(),Object(i["e"])("ul",c,[(Object(i["i"])(),Object(i["e"])(i["a"],null,Object(i["j"])(5,e=>Object(i["f"])("li",{key:e},u)),64))])):Object(i["d"])("",!0)],2),o.complete?(Object(i["i"])(),Object(i["e"])("img",p)):Object(i["d"])("",!0),Object(i["f"])("button",{onClick:t[0]||(t[0]=(...e)=>r.retry&&r.retry(...e))},"RETRY")])],6)):Object(i["d"])("",!0),Object(i["f"])("canvas",{ref:"ctx",onMouseover:t[1]||(t[1]=e=>o.isMouseEvt=!0),onMouseup:t[2]||(t[2]=e=>o.isClickEvt=!1),onMousedown:t[3]||(t[3]=e=>o.isClickEvt=o.isMouseEvt),onMouseout:t[4]||(t[4]=e=>o.isMouseEvt=!1),onMousemove:t[5]||(t[5]=(...e)=>r.mouseEvtHandler&&r.mouseEvtHandler(...e)),onClick:t[6]||(t[6]=(...e)=>r.clickEvtHandler&&r.clickEvtHandler(...e)),onTouchend:t[7]||(t[7]=(...e)=>r.clickEvtHandler&&r.clickEvtHandler(...e)),onTouchstart:t[8]||(t[8]=Object(i["m"])((...e)=>r.touchEvtHandler&&r.touchEvtHandler(...e),["stop","prevent"])),onTouchmove:t[9]||(t[9]=(...e)=>r.mouseEvtHandler&&r.mouseEvtHandler(...e))},null,544)],2)}s("14d9");var m=s("b8bf"),f={name:"game",components:{},computed:{},mounted(){this.init(),window.addEventListener("resize",this.resize)},unmounted(){window.removeEventListener("resize",this.resize)},methods:{init(){this.engine=this.Engine.create(),this.world=this.engine.world,this.render=this.Render.create({element:this.$el,engine:this.engine,canvas:this.$refs.ctx,options:this.renderOptions});const e=this.renderOptions.width,t=this.renderOptions.height,s=5,i=2,n=this.Bodies.rectangle(e/2,t,e,50,this.customRender("transparent")),o=this.Bodies.rectangle(i,t/2,s,e+t,this.customRender("transparent")),r=this.Bodies.rectangle(e-i,t/2,s,e+t,this.customRender("transparent"));this.World.add(this.engine.world,[n,o,r]),this.Runner.run(this.engine),this.Render.run(this.render),this.Events.on(this.engine,"beforeUpdate",this.beforeUpdate),this.start(),this.performance(),this.resize(),this.Events.on(this.engine,"collisionActive",this.crushBallEvtHandler),this.Events.on(this.engine,"collisionStart",this.crushBallEvtHandler),this.Events.on(this.render,"afterRender",this.afterRender),this.Render.lookAt(this.render,{min:{x:0,y:0},max:{x:this.renderOptions.width,y:this.renderOptions.height}})},start(){this.gameOver=!1,this.complete=!1,this.ball=null,this.engine.timing.timeScale=1,this.score=0;while(this.engine.world.bodies.length>3)this.engine.world.bodies.pop();this.createBall(1)},retry(){window.setInterval("location.reload()",100)},createBall(e){this.ball=this.newBall(this.render.options.width/2,50,e),this.ball.collisionFilter={group:-1,category:2,mask:0},this.World.add(this.engine.world,this.ball)},newBall(e,t,i){const n=this.Bodies.circle(e,t,10*i,{size:i,createdAt:Date.now(),friction:.1,render:{sprite:{texture:s("b967")(`./${i}.png`),xScale:i/12.75,yScale:i/12.75}}});return n},customRender(e){return{isStatic:!0,render:{fillStyle:e}}},beforeUpdate(){if(this.gameOver)return;if(this.ball){const e=this.engine.world.gravity;this.Body.applyForce(this.ball,this.ball.position,{x:-e.x*e.scale*this.ball.mass,y:-e.y*e.scale*this.ball.mass}),this.isClickEvt&&this.getMouseXpos&&(this.ball.position.x=this.getMouseXpos,this.getMouseXpos>455?this.ball.position.x=455:this.getMouseXpos<25&&(this.ball.position.x=25)),this.ball.position.y=50}const e=m["Composite"].allBodies(this.engine.world);for(let t=4;t<e.length;t++)this.body=e[t],this.body.position.y<100&&this.body!==this.ball&&Math.abs(this.body.velocity.x)<.2&&Math.abs(this.body.velocity.y)<.2&&this.gameEnd();this.isOverLine=!0},afterRender(){const e=this.$refs.ctx.getContext("2d");!this.gameOver&&this.isOverLine&&(e.strokeStyle="#f55",e.beginPath(),e.moveTo(0,100),e.lineTo(480,100),e.stroke())},gameEnd(){this.gameOver=!0,this.engine.timing.timeScale=0},resize(){this.isMobile=window.innerHeight/window.innerWidth>=1.49,this.zoom=window.innerWidth/this.renderOptions.width,this.isMobile?this.$refs.ctx.style.zoom=this.zoom:this.$refs.ctx.style.zoom=1},touchEvtHandler(e){this.isClickEvt=!0,this.getMouseXpos=e.touches[0].clientX/this.$refs.ctx.style.zoom},mouseEvtHandler(e){var t;if(this.gameOver)return;const s=this.$refs.ctx.getBoundingClientRect();this.isMobile?this.getMouseXpos=((null===e||void 0===e?void 0:e.clientX)||(null===e||void 0===e||null===(t=e.touches[0])||void 0===t?void 0:t.clientX))/this.$refs.ctx.style.zoom-s.left:this.getMouseXpos=(null===e||void 0===e?void 0:e.clientX)-s.left},clickEvtHandler(){this.gameOver||this.ball&&(this.ball.createdAt=0,this.ball.collisionFilter={group:0,category:1,mask:-1},this.Body.setVelocity(this.ball,{x:0,y:100/this.fps*5.5}),this.ball=null,this.updateSize=Math.ceil(3*Math.random()),setTimeout(()=>this.createBall(this.updateSize),500))},crushBallEvtHandler(e){this.gameOver||e.pairs.forEach(e=>{if(this.sumBalls=[e.bodyA,e.bodyB],this.sumBalls[0].size&&this.sumBalls[1].size&&this.sumBalls[0].size===this.sumBalls[1].size){const e=this.Composite.allBodies(this.engine.world);if(e.includes(this.sumBalls[0])&&e.includes(this.sumBalls[1])){if((Date.now()-this.sumBalls[0].createdAt<100||Date.now()-this.sumBalls[1].createdAt<100)&&0!==this.sumBalls[0].createdAt&&0!==this.sumBalls[1].createdAt)return;this.World.remove(this.engine.world,this.sumBalls[0]),this.World.remove(this.engine.world,this.sumBalls[1]),this.World.add(this.engine.world,this.newBall((this.sumBalls[0].position.x+this.sumBalls[1].position.x)/2,(this.sumBalls[0].position.y+this.sumBalls[1].position.y)/2,11===this.sumBalls[0].size?11:this.sumBalls[0].size+1)),10===this.sumBalls[0].size&&(this.complete=!0)}}})},performance(){window.requestAnimationFrame(()=>{const e=performance.now();while(this.speeds.length>0&&this.speeds[0]<=e-1e3)this.speeds.shift();this.speeds.push(e),this.fps=this.speeds.length,this.performance()})}},data(){return{ball:null,world:void 0,runner:void 0,render:void 0,engine:void 0,mouseConstraint:void 0,touch:!1,bodies:void 0,gameOver:!1,complete:!1,getMouseXpos:null,isOverLine:!1,isClickEvt:!1,isMouseEvt:!1,fps:100,updateSize:1,isMobile:!1,zoom:null,speeds:[],Engine:m["Engine"],Render:m["Render"],Runner:m["Runner"],Common:m["Common"],MouseConstraint:m["MouseConstraint"],Mouse:m["Mouse"],World:m["World"],Vertices:m["Vertices"],Svg:m["Svg"],Bodies:m["Bodies"],Body:m["Body"],Composites:m["Composites"],Composite:m["Composite"],Events:m["Events"],renderOptions:{width:480,height:720,pixelRatio:window.devicePixelRatio,wireframes:!1,showDebug:!1,showBroadphase:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showShadows:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}}}},b=(s("c238"),s("d959")),v=s.n(b);const w=v()(f,[["render",g]]);var O=w,y={name:"App",components:{game:O}};const x=v()(y,[["render",n]]);var B=x;Object(i["b"])(B).mount("#app")},5904:function(e,t,s){e.exports=s.p+"img/flag.462d95e9.png"},"5fa5":function(e,t,s){e.exports=s.p+"img/4.ef9d9ca8.png"},6846:function(e,t,s){e.exports=s.p+"img/9.b91bbe05.png"},"775a":function(e,t,s){e.exports=s.p+"img/1.125b8bc0.png"},"8e30":function(e,t,s){e.exports=s.p+"img/2.81d1d21f.png"},b967:function(e,t,s){var i={"./1.png":"775a","./10.png":"4abd","./11.png":"e509","./2.png":"8e30","./3.png":"1f66","./4.png":"5fa5","./5.png":"c037","./6.png":"338d","./7.png":"0f01","./8.png":"eadf","./9.png":"6846","./bg.png":"dc97","./flag.png":"5904","./star.png":"ba5a"};function n(e){var t=o(e);return s(t)}function o(e){if(!s.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=o,e.exports=n,n.id="b967"},ba5a:function(e,t,s){e.exports=s.p+"img/star.d5768891.png"},c037:function(e,t,s){e.exports=s.p+"img/5.e37a2a5e.png"},c238:function(e,t,s){"use strict";s("e81b")},dc97:function(e,t,s){e.exports=s.p+"img/bg.2eb059e6.png"},e509:function(e,t,s){e.exports=s.p+"img/11.6a69a306.png"},e81b:function(e,t,s){},eadf:function(e,t,s){e.exports=s.p+"img/8.55c1f110.png"}});
//# sourceMappingURL=app.5326f0d3.js.map