<template>
  <div class="top">

    <div class="wrapper">

      <div class="text-gradient"> {{ $t('nav.title') }}</div>
      <div class="p"> {{ $t('nav.desc') }}</div>
      <div class="btn-wrap">
        <div class="btn primary"> {{ $t('nav.start') }}</div>
        <div class="btn" style="margin-left: 20px;"> {{ $t('nav.contact_us') }}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '~@/styles/var.scss';

.top {
  padding: 0px;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding-top: 113px;
  z-index: 2;
  .wrapper {
    padding-top: 100px;
    max-width: 1280px;
    width: 1286px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media (min-width: 1440px) {
      width: 1286px;
    }

    @media (min-width: 1030px) {
      width: calc(100% - 154px);
    }

    @media (max-width: 767px) {
      padding-top: 0px;
      width: calc(100% - 32px);
    }
  }

}

.text-gradient {
  @media (max-width: 767px) {
    font-size: 36px;
    }
  font-size: 48px;
  font-weight: bold;
  // --hue: 400;
  // --hue: 500;
  --hue: 33;

  --hue-complimentary2: 288;
  --base: hsl(var(--hue), 95%, 50%);
  --base: #fff;
  --complimentary1: hsl(var(--hue-complimentary1), 95%, 50%);
  --complimentary2: hsl(var(--hue-complimentary2), 95%, 50%);
  background-image: linear-gradient(45deg,
      var(--base) 0%,
      var(--complimentary2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  &::selection{
    background: none;
  }
}

.p {
  font-size: 18px;
  margin-top: 40px;
  color: #fff;
  opacity: .5;
}

.btn-wrap {
  $primaryColor: #fff;
  margin-top: 80px;
  display: flex;

  .btn {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 120px;
    height: 48px;
    line-height: 28px;
    justify-content: center;
    border: 1px solid $primaryColor;
    color: $primaryColor;
    border-radius: 2px;
    font-weight: bold;
    border-radius: 60px;

    &.primary {
      $brandColor: #0045ff;
      background: $brandColor;
      border: 1px solid $brandColor;
      color: #fff;

      &:hover {
        // color: #0045ff;
        border: 1px solid #3a6bea;
        background: #3a6bea !important;
        box-shadow: 0 8px 24px rgba(11, 72, 230, .4) !important;
      }
    }

    &:hover {

      background: $primaryColor;
      // color: #fff;
      // color: #0045ff;
      transition: all .5s;
      background: hsla(0, 0%, 100%, .1) !important;
      box-shadow: 0 8px 24px hsla(0, 0%, 100%, .5) !important;
      transform: translateY(-4px);
      cursor: pointer;
      z-index: 0
    }
  }
}
</style>
