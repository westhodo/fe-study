<template>
  <div
    v-if="!isError"
    class="donut_container"
    :class="{ 'pc' : !isMobile }"
  >
      <app-button disable />
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
                <img src="@/assets/img/donut/star.png" alt="">
              </li>
            </ul>
          </div>
          <img src="@/assets/img/donut/flag.png" alt="" v-if="complete">
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
  import appButton from '../components/appButton.vue'

  export default {
    name: "game",
    components: {
      'app-button': appButton
    },
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

        while (this.engine.world.bodies.length > 3) this.engine.world.bodies.pop()

        this.createBall(1)
      },
      retry () {
        window.setInterval('location.reload()', 100)
      },
      createBall(size) {
        this.ball = this.newBall(this.render.options.width / 2, 50, size)
        this.ball.collisionFilter = { group: -1, category: 2, mask: 0 }

        this.World.add(this.engine.world, this.ball)
      },
      newBall(x, y, size) {
        const ball = this.Bodies.circle(x, y, size * 10, {
          size: size,
          createdAt:  Date.now(),
          friction: 0.1,
          render: {
            sprite: {
              texture: require(`../assets/img/donut/${size}.png`),
              xScale: size / 12.75,
              yScale: size / 12.75,
            },
          },
        })

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
        const ctx = this?.$refs?.ctx?.getContext("2d");
        if (this.$router.name === 'donut-game') {
          if (!this.gameOver && this.isOverLine) {
            ctx.strokeStyle = "#f55";
            ctx.beginPath();
            ctx.moveTo(0, 100);
            ctx.lineTo(480, 100);
            ctx.stroke();
          }
        } else {
          return
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
          height: 630,
          pixelRatio: window.devicePixelRatio,
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
<style lang="scss" scoped>
  @import '../assets/scss/donut.scss';
</style>