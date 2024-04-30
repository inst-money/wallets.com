<template>
  <div class="data-list-show">
    <div class="data-item">
      <div class="text">
        <span class="data">
          <!-- <span>170</span> -->
          <ICountUp :end-val="170" :options="optionsA" />
          <span>+</span>
        </span>
        <span class="info">Supported countries</span>
        <img src="@/assets/b64/a.png">
      </div>
    </div>
    <div class="line-border" />
    <div class="data-item">
      <div class="text">
        <span class="data">
          <ICountUp :end-val="50" :options="optionsB" />
          <span>+</span>
        </span>
        <span class="info">Fiat currencies</span>
        <img src="@/assets/b64/b.png">
      </div>
    </div>
    <!-- <div class="line-border" />
    <div class="data-item">
      <div class="text">
        <span class="data">
          <span><ICountUp :end-val="100" :options="optionsC" /></span>
          <span>+</span>
        </span>
        <span class="info">Fiat payment channels</span>
        <img src="@/assets/b64/c.png">
      </div>
    </div> -->
  </div>
</template>

<script>
import ICountUp from 'vue-countup-v2'

const options = {
  startVal: 0,
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
  prefix: '',
  suffix: '',
  enableScrollSpy: true,
  scrollSpyDelay: 0,
  scrollSpyOnce: true
}
export default {
  components: {
    ICountUp
  },
  data() {
    return {
      valueA: 170,
      valueB: 50,
      valueC: 100,
      options,
      optionsA: {
        ...options,
        duration: 3.5
      },
      optionsB: {
        ...options,
        duration: 1
      },
      optionsC: {
        ...options,
        duration: 2
      }
    }
  },
  methods: {
  }
}

</script>

<style lang="scss" scoped>
.data-list-show {
    display: flex;
    justify-content: space-between;
    background: linear-gradient(92.03deg, #404552 1.26%, #1b202d 99.88%);
    box-shadow: 0 4px 20px rgba(0, 0, 0, .05);
    border-radius: 24px;
    padding-bottom: -20px;

    .data-item {
        padding: 30px 32px;
        padding-top: 24px;
        box-sizing: border-box;

        .text {
            display: flex;
            flex-direction: column;
            justify-items: center;
            justify-content: center;
            text-align: center;

            .data {
                font-family: Bold;
                font-style: normal;
                font-weight: 700;
                font-size: 40px;
                line-height: 48px;
                text-align: center;
                letter-spacing: .2px;
                color: #fff;
                margin-bottom: 8px;

                .span {
                    margin-right: 10px;
                }

            }

            .info {
                font-family: Regular;
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 22px;
                text-align: center;
                color: #fff;
                opacity: .6;
                max-width: 200px;
                padding: 0 40px;
                box-sizing: border-box;
                margin-bottom: 18px;
            }

            img {
                width: 120px;
                position: relative;
                left: 45px;
            }
        }

    }

    .line-border {
        margin: 32px 0;
        width: 1px;
        box-sizing: border-box;
        background: linear-gradient(hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, .2), hsla(0, 0%, 100%, 0));
    }
}

@media (max-width: 960px) {
      .data-list-show {
        display: none;
      }
}
</style>
