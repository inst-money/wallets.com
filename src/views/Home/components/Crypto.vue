<template>
  <div id="payment-gateway" class="app-dark-bg">
    <div class="black-box">
      <div class="g-container container">
        <div class="top">
          <div class="left">
            <h2 class="g-title left title">{{ $t("use_step.title") }}</h2>
            <!-- <div class="tip2">{{ $t('crypto.tip2') }}</div> -->
          </div>
          <div class="right">
            <div class="right__item">
              <img class="right__item__img" src="@/assets/images/home/payment1.png" alt="">
              <div class="right__item__content">{{ $t("use_step.step1") }}</div>
              <img class="right__item__arrow" src="@/assets/images/home/arrow-down.png" alt="">
            </div>
            <div class="right__item">
              <img class="right__item__img" src="@/assets/images/home/payment2.png" alt="">
              <div class="right__item__content">{{ $t("use_step.step2") }}</div>
              <img class="right__item__arrow" src="@/assets/images/home/arrow-down.png" alt="">
            </div>
            <div class="right__item">
              <img class="right__item__img" src="@/assets/images/home/payment3.png" alt="">
              <div class="right__item__content">{{ $t("use_step.step3") }}</div>
              <img class="right__item__arrow" src="@/assets/images/home/arrow-down.png" alt="">
            </div>
            <div class="right__item">
              <img class="right__item__img" src="@/assets/images/home/payment4.png" alt="">
              <div class="right__item__content">{{ $t("use_step.step4") }}</div>
            </div>
          </div>
        </div>
        <!--        <div class="bottom">-->
        <!--          <div class="bottom__item">-->
        <!--            <img src="@/assets/images/home/payment5.png" alt="">-->
        <!--            <div class="bottom__item__content">{{ $t('crypto.bottom1') }}</div>-->
        <!--          </div>-->
        <!--          <div class="bottom__item">-->
        <!--            <img src="@/assets/images/home/payment6.png" alt="">-->
        <!--            <div class="bottom__item__content">{{ $t('crypto.bottom2') }}</div>-->
        <!--          </div>-->
        <!--          <div class="bottom__item">-->
        <!--            <img src="@/assets/images/home/payment7.png" alt="">-->
        <!--            <div class="bottom__item__content">{{ $t('crypto.bottom3') }}</div>-->
        <!--          </div>-->
        <!--          <div class="bottom__item">-->
        <!--            <img src="@/assets/images/home/payment8.png" alt="">-->
        <!--            <div class="bottom__item__content">{{ $t('crypto.bottom4') }}</div>-->
        <!--          </div>-->
        <!--          <div class="bottom__item">-->
        <!--            <img src="@/assets/images/home/payment9.png" alt="">-->
        <!--            <div class="bottom__item__content">{{ $t('crypto.bottom5') }}</div>-->
        <!--          </div>-->
        <!--          <div class="bottom__item">-->
        <!--            <img src="@/assets/images/home/payment10.png" alt="">-->
        <!--            <div class="bottom__item__content">{{ $t('crypto.bottom6') }}</div>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Crypto'
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/var.scss';

.payment-gateway{
  position: relative;

}
  .black-box {
    border-radius: 200px 0 0 0;
    // background: var(--color-base);
    padding-bottom: 200px;
  }

  .container {
    padding-top: 200px;
  }

  .top {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 1280px) {
      margin: 0 auto;
      max-width: 640px;
      grid-template-columns: 1fr;
      grid-row-gap: 80px;
    }
  }

  .tip1 {
    font-size: 16px;
    line-height: 28px;
    color: var(--color-content-light);
  }

  .title {
    margin-top: 10px;
    max-width: 500px;
    color: #FFF;
    color: black;
  }

  .tip2 {
    margin-top: 40px;
    max-width: 500px;
    font-size: 18px;
    line-height: 28px;
    color: var(--color-content-light);
    color: var(--color-base);
  }

  .right {
    padding-top: 10px;
    @media (max-width: 960px) {
      padding-top: 0;
    }
  }

  .right__item {
    position: relative;
    display: flex;
    align-items: center;

    & + & {
      margin-top: 80px;
    }
  }

  .right__item__img {
    height: 70px;
  }

  .right__item__content {
    flex: 1;
    margin-left: 40px;
    font-size: 18px;
    line-height: 26px;
    color: var(--color-content-light);
    color: var(--color-base);

    @media (max-width: 960px) {
      max-width: 300px;
    }
  }

  .right__item__arrow {
    position: absolute;
    bottom: -51px;
    left: 21px;
    filter: drop-shadow(2px 4px 7px #6086d8)
  }

  .bottom {
    margin-top: 140px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 80px;
    justify-items: center;
    @media (max-width: 750px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .bottom__item {
    max-width: 200px;
    text-align: center;
  }

  .bottom__item__content {
    font-size: 16px;
    line-height: 28px;
    color: red;
  }
</style>
