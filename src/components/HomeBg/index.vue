<template>
  <div>
    <component :is="bg" />

  </div>
</template>
<script>
import Pixi from './BgWave/index.vue'

export default {
  components: {
    Pixi
  },
  data() {
    return {
      bg: Pixi
    }
  }

}

</script>
<style scoped lang="scss"></style>
