<template>
  <div
    class="donut_container"
    :class="{ 'pc' : !isMobile }"
    ref="root"
  >
      <app-button disable />
      <div
        class="overlay"
        :class="{ 'success' : complete}"
        :style="`width:${renderOptions.width}px; height: ${renderOptions.height}px; zoom: ${isMobile ? zoom : 1};`"
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

      <canvas ref="ctxRef" id="canvas"
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
    World,
    Bodies,
    Body,
    Composite,
    Events
  } from "matter-js"
  import {
    ref,
    reactive,
    // getCurrentInstance,
    onMounted,
    onUnmounted
  } from "vue"
  import { useRoute } from 'vue-router'
  import appButton from '../components/appButton.vue'

  export default {
    name: "donut-game",
    setup() {
      const $route = useRoute()
      const renderOptions = reactive ({
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
      })
      /* Game Acc */
      let gameOver = ref(false)
      let complete = ref(false)
      let getMouseXpos = ref(null)
      let isOverLine = ref(false)
      let isClickEvt = ref(false)
      let isMouseEvt = ref(false)
      let fps = ref(100)
      let updateSize = ref(1)
      let isMobile = ref(false)
      let zoom = ref(null)
      let speeds = reactive([])
      let ctxRef = ref(null)
      let root = ref(null)

      /* recycle Matter */
      let ball = reactive([])
      let world = reactive([])
      let render = reactive([])
      let engine = reactive([])

      onMounted (() => {
        engine = Engine.create()
        world = engine.world
        render = Render.create({
          element: root.value,
          engine: engine,
          canvas: ctxRef.value,
          options: renderOptions
        })
        init ()

        performanceHandler()
        window.addEventListener("resize", resize)
      })
      onUnmounted (() => window.removeEventListener("resize", resize))

      const init = (() => {
        makeWallHandler()

        Runner.run(engine)
        Render.run(render)

        start()
        resize()

        Events.on(engine, "beforeUpdate", beforeUpdate)
        Events.on(engine, "collisionActive", crushBallEvtHandler)
        Events.on(engine, "collisionStart", crushBallEvtHandler)
        Events.on(render, "afterRender", afterRender)
        Render.lookAt(render, {
          min: { x: 0, y: 0 },
          max: { x: renderOptions.width, y: renderOptions.height }
        })
      })

      const makeWallHandler = (() => {
        const xPos = renderOptions.width
        const yPos = renderOptions.height
        const thick = 5
        const gap = 2

        const bottom = Bodies.rectangle(xPos / 2, yPos, xPos, 50, customRender('transparent'))
        const left = Bodies.rectangle(gap, yPos / 2, thick, xPos + yPos, customRender('transparent'))
        const right = Bodies.rectangle(xPos - gap, yPos / 2, thick, xPos + yPos, customRender('transparent'))

        World.add(world, [bottom, left, right])
      })

      const start = (() => {
        gameOver.value = false
        complete.value = false
        engine.timing.timeScale = 1

        while (world.bodies.length > 3) world.bodies.pop()

        createBall(1)
      })

      const retry = (() => setTimeout(() => location.reload(true), 100))

      const createBall = ((size) => {
        ball = newBall(render.options.width / 2, 50, size)
        ball.collisionFilter = { group: -1, category: 2, mask: 0 }

        World.add(world, ball)
      })

      const newBall = ((x, y, size) => {
        const ball = Bodies.circle(x, y, size * 10, {
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
      })

      const customRender = ((color) => {
        return {
          isStatic: true,
          render: {
            fillStyle: color
          }
        }
      })

      const beforeUpdate = (() => {
          if (gameOver.value) return

          if (ball) {
            const gravity = world.gravity

            Body.applyForce(ball, ball.position, {
              x: -gravity.x * gravity.scale * ball.mass,
              y: -gravity.y * gravity.scale * ball.mass,
            })

            if (isClickEvt.value && getMouseXpos.value) {
              ball.position.x = getMouseXpos.value

              if (getMouseXpos.value > 455) ball.position.x = 455;
              else if (getMouseXpos.value < 25) ball.position.x = 25;
            }

            ball.position.y = 50
          }

          const bodies = Composite.allBodies(world)
          for (let i = 4; i < bodies.length; i++) {
            let body = bodies[i]

            if (body.position.y < 100) {
              if (body !== ball && Math.abs(body.velocity.x) < 0.2 && Math.abs(body.velocity.y) < 0.2) gameEnd()
            }
          }
          isOverLine.value = true
      })

      const afterRender = (() => {
        if ($route.name === 'donut-game') {
            const canvas = document.querySelector('#canvas')
            const ctx = canvas.getContext("2d")
            if (!gameOver.value && isOverLine.value) {
              ctx.strokeStyle = "#f55";
              ctx.beginPath();
              ctx.moveTo(0, 100);
              ctx.lineTo(480, 100);
              ctx.stroke();
          }
        } else {
          return
        }
      })

      const gameEnd = (() => {
        gameOver.value = true
        engine.timing.timeScale = 0
      })

      const resize = (() => {
        isMobile.value = window.innerHeight / window.innerWidth >= 1.49
        zoom.value = window.innerWidth / renderOptions.width
        if (isMobile.value) ctxRef.value.style.zoom = zoom.value;
        else ctxRef.value.style.zoom = 1
      })

      const touchEvtHandler = ((e) => {
        isClickEvt.value = true
        getMouseXpos.value = e.touches[0].clientX / ctxRef.value.style.zoom;
      })

      const mouseEvtHandler = ((e) => {
        if (gameOver.value) return
        const rect = ctxRef.value.getBoundingClientRect()
        if (isMobile.value) getMouseXpos.value = (e?.clientX || e?.touches[0]?.clientX) / ctxRef.value.style.zoom - rect.left
        else getMouseXpos.value = e?.clientX - rect.left
      })

      const clickEvtHandler = (() => {
        if (gameOver.value) return

        if (ball) {
          ball.createdAt = 0
          ball.collisionFilter = { group: 0, category: 1, mask: -1, }

          Body.setVelocity(ball, { x: 0, y: (100 / fps.value) * 5.5 })
          ball = null

          updateSize = Math.ceil(Math.random() * 3)

          setTimeout(() => createBall(updateSize), 500)
        }
      })

      const crushBallEvtHandler = ((e) => {
        if (gameOver.value) return

        e.pairs.forEach((crush) => {
          const sumBalls = [crush.bodyA, crush.bodyB]

          if (!sumBalls[0].size || !sumBalls[1].size) return

          if (sumBalls[0].size === sumBalls[1].size) {
            const allBodies = Composite.allBodies(world)
            if (allBodies.includes(sumBalls[0]) && allBodies.includes(sumBalls[1])) {
              if (
                (Date.now() - sumBalls[0].createdAt < 100 ||
                  Date.now() - sumBalls[1].createdAt < 100) &&
                sumBalls[0].createdAt !== 0 &&
                sumBalls[1].createdAt !== 0
              ) return

              World.remove(world, sumBalls[0])
              World.remove(world, sumBalls[1])

              World.add(
                world,
                newBall(
                  (sumBalls[0].position.x + sumBalls[1].position.x) / 2,
                  (sumBalls[0].position.y + sumBalls[1].position.y) / 2,
                  sumBalls[0].size === 11 ? 11 : sumBalls[0].size + 1
                )
              )
              if (sumBalls[0].size === 10) complete.value = true
            }
          }
        })
      })
      const performanceHandler = (() => {
        window.requestAnimationFrame(() => {
          const now = performance.now()
          while (speeds.length > 0 && speeds[0] <= now - 1000) speeds.shift()
          speeds.push(now)
          fps.value = speeds.length // fps가 20이하 일 경우 성능 저하 (공이 맺히기 시작)
          performanceHandler()
        })
      })

      return {
        isMouseEvt,
        isClickEvt,
        renderOptions,
        root,
        ctxRef,
        complete,
        gameOver,
        isMobile,
        init,
        touchEvtHandler,
        mouseEvtHandler,
        clickEvtHandler,
        retry
      }
    },
    components: {
      'app-button': appButton
    }
  }
</script>
<style lang="scss" scoped>
  @import '../assets/scss/donut.scss';
</style>