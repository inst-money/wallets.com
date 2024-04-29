<template>
  <div class="global-payment">
    <div class="container">
      <h1 class="content-title">全球支付</h1>
      <div class="show-chart">
        <div class="charts-left">
          <ul>
            <li :class="{ active: currentIndex == 0 }" @click="activeIt(0)">
              <div class="icon">
                <img src="@/assets/global-payment/icon1.png">
              </div>
              <div class="describe">
                <h3 class="title">全球收单</h3>
                <h4 data-font="dinRegular" class="subtitle">Online Payments</h4>
              </div>
              <i class="el-icon-arrow-right" />
            </li>
            <li :class="{ active: currentIndex == 1 }" @click="activeIt(1)">
              <div class="icon">
                <img src="@/assets/global-payment/icon2.png">
              </div>
              <div class="describe">
                <h3 class="title">全球收款</h3>
                <h4 data-font="dinRegular" class="subtitle">
                  Cross-border Collections
                </h4>
              </div>
              <i class="el-icon-arrow-right" />
            </li>
            <li :class="{ active: currentIndex == 2 }" @click="activeIt(2)">
              <div class="icon">
                <img src="@/assets/global-payment/icon3.png">
              </div>
              <div class="describe">
                <h3 class="title">全球发卡</h3>
                <h4 data-font="dinRegular" class="subtitle">
                  Virtual Payment Cards
                </h4>
              </div>
              <i class="el-icon-arrow-right" />
            </li>
            <li :class="{ active: currentIndex == 3 }" @click="activeIt(3)">
              <div class="icon">
                <img src="@/assets/global-payment/icon4.png">
              </div>
              <div class="describe">
                <h3 class="title">全球付款</h3>
                <h4 data-font="dinRegular" class="subtitle">Global Payouts</h4>
              </div>
              <i class="el-icon-arrow-right" />
            </li>
          </ul>
          <h3 class="detail-title">全球收单</h3>
          <p data-font="dinRegular" class="detail">
            涵盖全球主流国家和地区多达几十种支付方式，无论是<span>国际卡支付</span>还是深入本地的多样支付方式如<span>电子钱包、网银转账</span>等，为您扩展新市场提供所匹配的支付工具。提供多样的交易&amp;结算币种，提高支付转化率、助力业务增长。
          </p>
        </div>
        <div class="charts-right">
          <div class="img-box" :class="{ 'img-box__show': currentIndex == 0 }" style="">
            <div class="rise-up">
              <img src="@/assets/global-payment/demo1.png">
            </div>
          </div>
          <div class="img-box" :class="{ 'img-box__show': currentIndex == 1 }">
            <div class="rise-up">
              <img src="@/assets/global-payment/demo2.png">
            </div>
          </div>
          <div class="img-box" :class="{ 'img-box__show': currentIndex == 2 }">
            <div class="rise-up">
              <img src="@/assets/global-payment/demo3.png">
            </div>
          </div>
          <div class="img-box" :class="{ 'img-box__show': currentIndex == 3 }">
            <div class="rise-up">
              <img src="@/assets/global-payment/demo3.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TMP1',
  data() {
    return {
      imgBoxList: [],
      currentIndex: 0
    }
  },
  methods: {
    activeIt(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.global-payment {
  background: #19191e;
  padding-bottom: 115px;
  padding-top: 80px;

  .container {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1200px;
    .content-title {
      margin-bottom: 40px;
      font-size: 70px;
      font-weight: 600;
      color: #fff;
      line-height: 75px;
    }

    .show-chart {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .charts-left {
        width: 34.58%;
        ul {
          width: 100%;
          li {
            &.active {
              background: #4c389d;
            }
            width: 100%;
            display: flex;
            align-items: center;
            height: 66px;
            background: rgba(109, 115, 138, 0.1);
            color: #fff;
            border-radius: 4px;
            margin-bottom: 20px;
            cursor: pointer;
            position: relative;
            .icon {
              width: 50px;
              height: 50px;
              margin-left: 15px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .describe {
              margin-left: 25px;
              color: #fff;
              font-size: 16px;
              font-weight: 600;
              color: hsla(0, 0%, 100%, 0.86);
              line-height: 22px;
              .title {
                color: #fff;
              }
              .subtitle {
                font-size: 14px;
                color: #9b9b9b;
                line-height: 18px;
              }
              .el-icon-arrow-right {
                color: hsla(0, 0%, 100%, 0.6);
                position: absolute;
                top: 50%;
                margin-top: -7px;
                right: 15px;
                &::before {
                  content: "\e604";
                }
              }
            }
          }
        }
        .detail-title {
          font-size: 20px;
          font-weight: 600;
          color: hsla(0, 0%, 100%, 0.86);
          line-height: 28px;
        }
        p.detail {
          margin-top: 7px;
          font-size: 14px;
          color: hsla(0, 0%, 100%, 0.6);
          line-height: 30px;
        }
      }

      .charts-right {
        width: 59.58%;
        position: relative;
        .img-box {
          width: 100%;
          display: none;
          &__show {
            display: initial;
            .rise-up {
              animation: rise-up 0.3s ease-in-out forwards;
              img {
                width: 100%;
                height: auto;
              }
              &.chartPayments-box {
                position: relative;
                max-width: 715px;
                img {
                  width: 100%;
                  position: absolute;
                  left: 0;
                  top: 0;
                  z-index: 1;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}

@keyframes rise-up {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
