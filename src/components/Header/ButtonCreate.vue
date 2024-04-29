<template>
  <router-link to="">
    <div class="g-link-clear button-create">
      <span>{{ $t("nav.signup") }}</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ButtonCreate'
}
</script>

<style lang="scss" scoped>
$activeColor: #fff;

.button-create {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 120px;
  height: 48px;
  line-height: 28px;
  justify-content: center;
  border: 1px solid $activeColor;
  color: $activeColor;
  border-radius: 2px;
  font-weight: bold;
  border-radius: 60px;

  &:hover {

    background: $activeColor;
    // color: #fff;
    // color: #0045ff;
    transition: all 1s;
    background: hsla(0, 0%, 100%, .1) !important;
    box-shadow: 0 8px 24px hsla(0, 0%, 100%, .5) !important;
    transform: translateY(-4px);
    cursor: pointer;
    z-index: 0
  }
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-50%, 0, 0); // g-slide dom scroll width / 2
  }
}

.button-create__arrow {
  margin-left: auto;
  height: 10px;
  transition: transform 0.3s;
}
</style>
