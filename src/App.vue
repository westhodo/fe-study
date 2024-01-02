<template>
  <div id="app">
    <game/>
  </div>
</template>

<script>
import GAME from '@/components/game.vue';

export default {
  name: "App",
  components: {
    'game': GAME
  },
};
</script>

