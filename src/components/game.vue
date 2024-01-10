<template>
  <div
    class="container"
    :class="{ 'pc' : !isMobile }"
  >
      <div
        class="overlay"
        :class="{ 'success' : complete}"
        :style="`width:${this.renderOptions.width}px; height: ${this.renderOptions.height}px; zoom: ${isMobile ? zoom : 1};`"
        v-if="gameOver || complete"
      >
        <div class="box">
          <div
            class="line"
            :class="{ 'start' : gameOver || complete }"
          >
            <p>{{ complete ? '성공' : '실패' }}</p>
            <ul v-if="complete">
              <li v-for="index in 5" :key="index">
                <img src="@/assets/img/star.png" alt="">
              </li>
            </ul>
          </div>
          <img src="@/assets/img/flag.png" alt="" v-if="complete">
          <button @click="retry">RETRY</button>
        </div>
      </div>

      <canvas ref="ctx"
        @mouseover="isMouseEvt = true"
        @mouseup="isClickEvt = false"
        @mousedown="isClickEvt = isMouseEvt"
        @mouseout="isMouseEvt = false"
        @mousemove="mouseEvtHandler"
        @click="clickEvtHandler"
        @touchend="clickEvtHandler"
        @touchstart.stop.prevent="touchEvtHandler"
        @touchmove="mouseEvtHandler"
      />
    </div>
</template>

<script>
  import {
    Engine,
    Render,
    Runner,
    Common,
    MouseConstraint,
    Mouse,
    World,
    Vertices,
    Svg,
    Bodies,
    Body,
    Composites,
    Composite,
    Events
  } from "matter-js"

  import icon1 from "../assets/img/1.png"
  import icon2 from "../assets/img/2.png"
  import icon3 from "../assets/img/3.png"
  import icon4 from "../assets/img/4.png"
  import icon5 from "../assets/img/5.png"
  import icon6 from "../assets/img/6.png"
  import icon7 from "../assets/img/7.png"
  import icon8 from "../assets/img/8.png"
  import icon9 from "../assets/img/9.png"
  import icon10 from "../assets/img/10.png"
  import icon11 from "../assets/img/11.png"

  export default {
    name: "game",
    components: {},
    computed: {},
    mounted() {
      this.init()
      window.addEventListener("resize", this.resize)
    },
    unmounted() {
      window.removeEventListener("resize", this.resize);
    },
    methods: {
      init () {
        this.engine = this.Engine.create()
        this.world = this.engine.world

        this.render = this.Render.create({
          element: this.$el,
          engine: this.engine,
          canvas: this.$refs.ctx,
          options: this.renderOptions
        })

        const xPos = this.renderOptions.width
        const yPos = this.renderOptions.height
        const thick = 5
        const gap = 2

        const bottom = this.Bodies.rectangle(xPos / 2, yPos, xPos, 50, this.customRender('transparent'))
        const left = this.Bodies.rectangle(gap, yPos / 2, thick, xPos + yPos, this.customRender('transparent'))
        const right = this.Bodies.rectangle(xPos - gap, yPos / 2, thick, xPos + yPos, this.customRender('transparent'))

        this.World.add(this.engine.world, [bottom, left, right])

        this.Runner.run(this.engine)
        this.Render.run(this.render)

        this.Events.on(this.engine, "beforeUpdate", this.beforeUpdate)
        this.start()
        this.performance()
        this.resize()

        this.Events.on(this.engine, "collisionActive", this.crushBallEvtHandler)
        this.Events.on(this.engine, "collisionStart", this.crushBallEvtHandler)
        this.Events.on(this.render, "afterRender", this.afterRender)
        this.Render.lookAt(this.render, {
          min: { x: 0, y: 0 },
          max: { x: this.renderOptions.width, y: this.renderOptions.height }
        })
      },
      start () {
        this.gameOver = false
        this.complete = false
        this.ball = null
        this.engine.timing.timeScale = 1
        this.score = 0

        while (this.engine.world.bodies.length > 4) this.engine.world.bodies.pop()

        this.createBall(1)
      },
      retry () {
        window.setInterval('location.reload()', 100)
      },
      createBall(size) {
        this.ball = this.newBall(this.render.options.width / 2, 50, size)
        this.ball.collisionFilter = {
          group: -1,
          category: 2,
          mask: 0,
        }

        this.World.add(this.engine.world, this.ball)
      },
      newBall(x, y, size) {
        const ball = this.Bodies.circle(x, y, size * 10, {
          render: {
            sprite: {
              texture: this.iconArray[size - 1],
              xScale: size / 12.75,
              yScale: size / 12.75,
            },
          },
        })
        ball.size = size
        ball.createdAt = Date.now()
        ball.restitution = 0.3
        ball.friction = 0.1

        return ball
      },
      customRender(color) {
        return {
          isStatic: true,
          render: {
            fillStyle: color
          }
        }
      },
      beforeUpdate () {
          if (this.gameOver) return

          if (this.ball) {
            const gravity = this.engine.world.gravity

            this.Body.applyForce(this.ball, this.ball.position, {
              x: -gravity.x * gravity.scale * this.ball.mass,
              y: -gravity.y * gravity.scale * this.ball.mass,
            })

            if (this.isClickEvt && this.getMouseXpos) {
              this.ball.position.x = this.getMouseXpos

              if (this.getMouseXpos > 455) this.ball.position.x = 455;
              else if (this.getMouseXpos < 25) this.ball.position.x = 25;
            }

            this.ball.position.y = 50
          }

          const bodies = Composite.allBodies(this.engine.world)
          for (let i = 4; i < bodies.length; i++) {
            this.body = bodies[i]

            if (this.body.position.y < 100) {
              if (this.body !== this.ball && Math.abs(this.body.velocity.x) < 0.2 && Math.abs(this.body.velocity.y) < 0.2) this.gameEnd()
            }
          }
          this.isOverLine = true
      },
      afterRender () {
        const ctx = this.$refs.ctx.getContext("2d");
        if (!this.gameOver && this.isOverLine) {
          ctx.strokeStyle = "#f55";
          ctx.beginPath();
          ctx.moveTo(0, 100);
          ctx.lineTo(480, 100);
          ctx.stroke();
        }
      },
      gameEnd () {
        this.gameOver = true;
        this.engine.timing.timeScale = 0;
      },
      resize () {
        this.isMobile = window.innerHeight / window.innerWidth >= 1.49
        this.zoom = window.innerWidth / this.renderOptions.width
        if (this.isMobile) this.$refs.ctx.style.zoom = this.zoom;
        else  this.$refs.ctx.style.zoom = 1
      },
      touchEvtHandler (e) {
        this.isClickEvt = true
        this.getMouseXpos = e.touches[0].clientX / this.$refs.ctx.style.zoom;
      },
      mouseEvtHandler (e) {
        if (this.gameOver) return
        const rect = this.$refs.ctx.getBoundingClientRect()
        if (this.isMobile) this.getMouseXpos = (e?.clientX || e?.touches[0]?.clientX) / this.$refs.ctx.style.zoom - rect.left
        else this.getMouseXpos = e?.clientX - rect.left
      },
      clickEvtHandler () {
        if (this.gameOver) return

        if (this.ball) {
          this.ball.createdAt = 0
          this.ball.collisionFilter = { group: 0, category: 1, mask: -1, }

          this.Body.setVelocity(this.ball, { x: 0, y: (100 / this.fps) * 5.5 })
          this.ball = null

          this.updateSize = Math.ceil(Math.random() * 3)

          setTimeout(() => this.createBall(this.updateSize), 500)
        }
      },
      crushBallEvtHandler (e) {
        if (this.gameOver) return

        e.pairs.forEach((crush) => {
          this.sumBalls = [crush.bodyA, crush.bodyB]

          if (!this.sumBalls[0].size || !this.sumBalls[1].size) return

          if (this.sumBalls[0].size === this.sumBalls[1].size) {
            const allBodies = this.Composite.allBodies(this.engine.world)
            if (allBodies.includes(this.sumBalls[0]) && allBodies.includes(this.sumBalls[1])) {
              if (
                (Date.now() - this.sumBalls[0].createdAt < 100 ||
                  Date.now() - this.sumBalls[1].createdAt < 100) &&
                this.sumBalls[0].createdAt !== 0 &&
                this.sumBalls[1].createdAt !== 0
              ) return

              this.World.remove(this.engine.world, this.sumBalls[0])
              this.World.remove(this.engine.world, this.sumBalls[1])

              this.World.add(
                this.engine.world,
                this.newBall(
                  (this.sumBalls[0].position.x + this.sumBalls[1].position.x) / 2,
                  (this.sumBalls[0].position.y + this.sumBalls[1].position.y) / 2,
                  this.sumBalls[0].size === 11 ? 11 : this.sumBalls[0].size + 1
                )
              )
              if (this.sumBalls[0].size === 10) this.complete = true
            }
          }
        })
      },
      performance () {
        window.requestAnimationFrame(() => {
          const now = performance.now();
          while (this.speeds.length > 0 && this.speeds[0] <= now - 1000) this.speeds.shift();
          this.speeds.push(now);
          this.fps = this.speeds.length; // fps가 20이하 일 경우 성능 저하 (공이 맺히기 시작)
          this.performance()
        })
      },
    },
    data() {
      return {
        /* recycle Matter */
        ball: null,
        world: undefined,
        runner: undefined,
        render: undefined,
        engine: undefined,
        mouseConstraint: undefined,
        touch: false,
        bodies: undefined,

        /* Game Acc */
        gameOver: false,
        complete: false,
        getMouseXpos: null,
        isOverLine: false,
        isClickEvt: false,
        isMouseEvt: false,
        fps: 100,
        updateSize: 1,
        iconArray: [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11],
        isMobile: false,
        zoom: null,
        speeds: [],

        /* import Matter */
        Engine: Engine,
        Render: Render,
        Runner: Runner,
        Common: Common,
        MouseConstraint: MouseConstraint,
        Mouse: Mouse,
        World: World,
        Vertices: Vertices,
        Svg: Svg,
        Bodies: Bodies,
        Body: Body,
        Composites: Composites,
        Composite: Composite,
        Events: Events,
        renderOptions: {
          width: 480,
          height: 720,
          pixelRatio: 'auto',
          wireframes: false,
          showDebug: false,
          showBroadphase: false,
          showBounds: false,
          showVelocity: false,
          showCollisions: false,
          showSeparations: false,
          showAxes: false,
          showPositions: false,
          showAngleIndicator: false,
          showIds: false,
          showShadows: false,
          showVertexNumbers: false,
          showConvexHulls: false,
          showInternalEdges: false,
          showMousePosition: false
        },
      }
    }
  }
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { overflow: hidden; position: fixed; width: 100%; height: 100vh; display: flex; align-items: center; justify-content: center; background-color: #000; }
.container { position: relative; }
.container.pc { width: 100%; height: 100%; text-align: center;}
.overlay { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 100%; height: 100%; background-color: rgba(0, 0, 0, .3); display: flex; align-items: center; justify-content: center; overflow: hidden; }
.overlay .box { position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; z-index: 1; }
.overlay .box .line { position: absolute; width: 0; height: 80px; top: 10%; left: 0; background-color: #FFDD86; color: #000; border-top: 3px solid #000; border-bottom: 3px solid #000; display: inline-flex; align-items: center; justify-content: center; }
.overlay .box .line.start { animation: widthOpen linear .5s .2s; animation-fill-mode: forwards; }
.overlay .box .line.start p { animation: isTop linear 1.5s .1s; animation-fill-mode: forwards; opacity: 0; }
.overlay .box .line.start ul { animation: isBottom linear 1.5s .5s; animation-fill-mode: forwards; opacity: 0; }
.overlay .box .line ul { width: 100%; display: inline-flex; align-items: center; justify-content: center; list-style: none; gap: 5px; position: absolute; transform: translate(-50%, -50%); left: 50%; }
.overlay .box .line li { width: 30px; height: 30px; }
.overlay .box .line li img { width: 100%; height: 100%; object-fit: contain; }
.overlay .box .line p { font-size: 2rem; font-weight: bold; white-space: nowrap; position: absolute; left: 50%; top: -1000px; transform: translate(-50%, -50%); }
.overlay .box > img { width: 50%; object-fit: contain; position: absolute; top: 10%; left: 50%; transform: translateX(-50%); z-index: -1;}
.overlay.success .box img { width: 100%; top: 0; }
.overlay button { display: block; background-color: #FAB057; outline: none; border: 3px solid #FAB057; padding: 1em 3em; border-radius: 50px; box-shadow: 0px 5px 3px rgba(0, 0, 0, .5); border: 2px solid;}
.overlay button:active { box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, .5) inset; }
canvas { background: url('../assets/img/bg.png') 50% 50% no-repeat !important; }

@keyframes widthOpen {
  0% { width: 0; }
  100% { width: 100%; }
}

@keyframes isTop {
  0% { top: -1000px; opacity: 0; }
  100% { top: 50%; opacity: 1; }
}

@keyframes isBottom {
  0% { bottom: -1000px; opacity: 0; }
  100% { bottom: -30px; opacity: 1; }
}

</style>