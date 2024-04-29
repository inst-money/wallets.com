<template>
  <div class="global-account" data-v-088b8f2a="" data-v-3242de3c="">
    <div class="container" data-v-088b8f2a="">
      <h1 class="content-title" data-v-088b8f2a="">一个账户，解锁全球</h1>
      <div class="show-chart" data-v-088b8f2a="">
        <div class="charts-left charts-left-white">
          <ul>
            <li :class="{ active: currentIndex == 0 }" @click="activeIt(0)">
              <div class="icon">
                <img src="@/assets/global-account/icon1.png" />
              </div>
              <div class="describe">
                <h3 class="title">多币种钱包</h3>
                <h4 data-font="dinRegular" class="subtitle">
                  Multi-currency Wallet
                </h4>
              </div>
              <i class="el-icon-arrow-right el-icon-arrow-right-white"></i>
            </li>
            <li :class="{ active: currentIndex == 1 }" @click="activeIt(1)">
              <div class="icon">
                <img src="@/assets/global-account/icon2.png" />
              </div>
              <div class="describe">
                <h3 class="title">汇率管理</h3>
                <h4 data-font="dinRegular" class="subtitle">FX Management</h4>
              </div>
              <i class="el-icon-arrow-right el-icon-arrow-right-white"></i>
            </li>
          </ul>
          <h3 class="detail-title">多币种钱包</h3>
          <p data-font="dinRegular" class="detail">
            无论客户从事国际化的电商平台业务、独立站业务、数字化文娱类等业务，还是希望进行<span>收款、付款、汇兑</span>，只需一个<span
              >“PHOTONPAY MULTI-CURRENCY WALLET”</span
            >，
            全球生意皆可一手掌控，无需再忍受银行繁杂的业务流程及高昂的手续费用。
          </p>
        </div>
        <div class="charts-right">
          <div class="img-box" :class="{ 'img-box__show': currentIndex == 0 }">
            <div class="rise-up">
              <img src="@/assets/global-account/demo1.png" />
            </div>
          </div>
          <div class="img-box" :class="{ 'img-box__show': currentIndex == 1 }">
            <div class="rise-up">
              <img src="@/assets/global-account/demo2.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TMP2",
  data() {
    return {
      imgBoxList: [],
      currentIndex: 0,
    };
  },
  methods: {
    activeIt(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="scss">
.global-account {
  background: #efefef;
  padding-top: 90px;
  padding-bottom: 115px;
  .container {
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1200px;
    .content-title {
      margin-bottom: 40px;
      font-size: 70px;
      font-weight: 600;
      color: #19191e;
      line-height: 75px;
    }

    .show-chart {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .charts-left {
        width: 34.58%;
        &.charts-left-white {
          ul {
            li {
              background: #fff;
              &.active{
                .describe{
                .title {
                    color: #fff;
                }
                .subtitle{
                    color: #fff;
                }
              }
              }
              .describe{
                .title {
                    color: #212121;
                }
                .subtitle{
                    font-size: 14px;
                    color: #9b9b9b;
                    line-height: 18px;
                }
              }
            }
          }
        }
        ul {
          width: 100%;
          margin-left:0;
          padding-left:0;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          align-items: flex-start;
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
          color: #19191e;
          line-height: 28px;
        }
        p.detail {
          margin-top: 7px;
          font-size: 14px;
          color: #19191e;
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
</style>
