<template>
  <div class="link-box">
    <slot />
    <div class="link-box__dec" />
  </div>
</template>

<script>
export default {
  name: 'LinkBox'
}
</script>

<style lang="scss" scoped>
$lineColor: white;
.link-box {
  position: relative;
  display: inline-block;

  &:hover {
    .link-box__dec {
      // width: 100%;
     &:after{
      transform: scaleX(1);
      transform-origin: left bottom;
     }
    }
  }
}

.link-box__dec {
  &:after{
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: $lineColor;
    transform-origin: bottom right;
    transition: transform .25s ease-out
  }
}
</style>
