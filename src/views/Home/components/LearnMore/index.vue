<template>
  <div class="c-wrap">
    <div class="overflow-bg">
      <BgWave />
    </div>
    <div class="learn-more">

      <div class="info">{{ $t("contact.title") }}</div>
      <div class="button">
        <div class="apply button-box2">
          {{ $t("contact.btn") }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import BgWave from '@/components/HomeBg/BgWave/index.vue'

export default {
  components: { BgWave }
}

</script>

<style lang="scss" scoped>

.c-wrap {
    position: relative;
    width: 100%;
    height: 294px;
    margin-bottom: 110px;
    overflow: hidden;
    position:relative;
}

.overflow-bg {
    width: 100vw;
    position: absolute;
    top:  0rem;
    left: 0;
}

.learn-more {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 294px;
    margin: 0 auto;
    z-index: 2;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;

    background: linear-gradient(to bottom, #8200c9 0%, #11e8bb 140%);

    .info {
        font-family: Medium;
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        margin-bottom: 40px;
        text-align: center;
        max-width: 865px;
    }

    .button {
        font-family: Regular;
        font-weight: 400;
        font-size: 18px;
        line-height: 19px;
        display: flex;

        .apply {
            background: hsla(0, 0%, 100%, .1);
            border: 1.5px solid #fff;
            border-radius: 9999px;
            padding: 15px 32px;
            cursor: pointer;
        }

        .button-box2 {
            position: relative;
            overflow: hidden;
            z-index: 1;
            transition: transform .35s ease, box-shadow .35s ease, background .35s ease;

            &:hover {
                transition: transform .35s ease, box-shadow .35s ease, background .35s ease;
            }

        }
    }

}
</style>
