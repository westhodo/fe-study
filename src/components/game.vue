<template>
  <div class="game">
    <canvas ref="ctx"
      @mouseover="isMouseEvt = true"
      @mouseup="isClickEvt = false"
      @mousedown="isClickEvt = isMouseEvt"
      @mouseout="isMouseEvt = false"
      @mousemove="mouseEvtHandler"
      @click="clickEvtHandler"
      @touchmove="mouseEvtHandler"
      @touchend="isClickEvt = false"
      @touchstart="isClickEvt = true"
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

  import icon1 from "../assets/img/1.svg"
  import icon2 from "../assets/img/2.svg"
  import icon3 from "../assets/img/3.svg"
  import icon4 from "../assets/img/4.svg"
  import icon5 from "../assets/img/5.svg"
  import icon6 from "../assets/img/6.svg"
  import icon7 from "../assets/img/7.svg"
  import icon8 from "../assets/img/8.svg"
  import icon9 from "../assets/img/9.svg"
  import icon10 from "../assets/img/10.svg"
  import icon11 from "../assets/img/11.svg"
  // import backgroundImg from "../assets/img/bg.png"

  export default {
    name: "game",
    components: {},
    computed: {
      isMobile() {
        return window.innerHeight / window.innerWidth >= 1.49
      }
    },
    mounted() {
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
      const thick = 2
      const gap = 2

      const bottom = this.Bodies.rectangle(xPos / 2, yPos, xPos, 50, this.customRender('transparent'))
      const left = this.Bodies.rectangle(gap, yPos / 2, thick, xPos + yPos, this.customRender('transparent'))
      const right = this.Bodies.rectangle(xPos - gap, yPos / 2, thick, xPos + yPos, this.customRender('transparent'))

      this.World.add(this.engine.world, [bottom, left, right])

      this.Engine.run(this.engine)
      this.Render.run(this.render)

      this.beforeUpdate()
      this.init()

      this.Events.on(this.engine, "collisionActive", this.crushBallEvtHandler)
      this.Events.on(this.engine, "collisionStart", this.crushBallEvtHandler)

      this.Render.lookAt(this.render, {
        min: { x: 0, y: 0 },
        max: { x: this.renderOptions.width, y: this.renderOptions.height }
      })
      this.Render.run(this.render)
    },
    methods: {
      init () {
        this.gameOver = false
        this.ball = null
        this.engine.timing.timeScale = 1
        this.score = 0

        while (this.engine.world.bodies.length > 4) this.engine.world.bodies.pop()

        this.createBall(1)
      },
      mousePos(canvas, e) {
        const rect = canvas.getBoundingClientRect()
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        }
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
        this.Events.on(this.engine, "beforeUpdate", () => {
          if (this.gameOver) return

          if (this.ball) {
            const gravity = this.engine.world.gravity

            this.Body.applyForce(this.ball, this.ball.position, {
              x: -gravity.x * gravity.scale * this.ball.mass,
              y: -gravity.y * gravity.scale * this.ball.mass,
            })

            if (this.isClickEvt && this.getMouseXpos) this.ball.position.x = this.getMouseXpos
            this.ball.position.y = 50
          }

          // this.isLineEnable = false
          const bodies = Composite.allBodies(this.engine.world)
          for (let i = 4; i < bodies.length; i++) {
            this.body = bodies[i]

            if (this.body.position.y < 100) {
              if (
                this.body !== this.ball &&
                Math.abs(this.body.velocity.x) < 0.2 &&
                Math.abs(this.body.velocity.y) < 0.2
              ) {
                // gameOver()
              }
            } else if (this.body.position.y < 150) {
              if (
                this.body !== this.ball &&
                Math.abs(this.body.velocity.x) < 0.5 &&
                Math.abs(this.body.velocity.y) < 0.5
              ) {
                // isLineEnable = true
              }
            }
          }
        })

      },
      resize() {
        if (this.isMobile) {
          // mobile
        } else {
          // pc
        }
        // Render.setPixelRatio(this.render, this.$refs.game.style.zoom * 2)
      },
      mouseEvtHandler (e) {
        if (this.gameOver) return

        const rect = this.render.canvas.getBoundingClientRect()
        this.getMouseXpos = e.clientX - rect.left
      },
      clickEvtHandler () {
        if (this.gameOver || !this.isMouseEvt) return

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
              ) {
                return
              }

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
            }
          }
        })
      }
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
        getMouseXpos: null,
        isClickEvt: false,
        isMouseEvt: false,
        fps: 100,
        updateSize: 1,
        iconArray: [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11],

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
          width: 400,
          height: 600,
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
  canvas {
    background: url('../assets/img/bg.png') 50% 50% no-repeat !important;
  }
</style>