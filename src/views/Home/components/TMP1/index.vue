<template>
  <div class="global-payment">
    <div class="container">
      <h1 class="content-title">Collection & Payout</h1>
      <div class="show-chart">
        <div class="charts-left">
          <ul class="ul">
            <li class="li" :class="{ active: currentIndex == 1 }" @click="activeIt(1)">
              <div class="icon">
                <img src="@/assets/global-payment/shopping-cart.png" />
              </div>
              <div class="describe">
                <h3 class="title">Collections</h3>
                <h4 class="subtitle">Global Collection Service</h4>
              </div>
              <i class="el-icon-arrow-right" />
            </li>
            <li class="li" :class="{ active: currentIndex == 3 }" @click="activeIt(3)">
              <div class="icon">
                <img src="@/assets/global-payment/money.png" />
              </div>
              <div class="describe">
                <h3 class="title">Payouts</h3>
                <h4 class="subtitle">Global Payouts</h4>
              </div>
              <i class="el-icon-arrow-right" />
            </li>
          </ul>
          <h3 class="detail-title">{{ currentDesc.title }}</h3>
          <p class="detail" v-if="currentDesc.desc">{{ currentDesc.desc }}</p>
          <ul class="detail-list">
            <li v-for="item in currentDesc.desc_list" :key="item.title">
              <h3 class="detail-list-title">{{ item.title }}</h3>
              <p class="detail-list-subtitle">{{ item.desc }}</p>
            </li>

          </ul>
        </div>
        <div class="charts-right">
          <div class="img-box" :class="{ 'img-box__show': currentIndex == 1 }">
            <div class="rise-up">
              <img src="@/assets/global-payment/demo2.png" />
            </div>
          </div>
          <div class="img-box" :class="{ 'img-box__show': currentIndex == 3 }">
            <div class="rise-up">
              <img src="@/assets/global-payment/demo3.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TMP1",
  data() {
    return {
      imgBoxList: [],
      currentIndex: 1,
      descList: [
        {
          key: 1,
          title: "Global Collection Service",
          // desc: "跨境电商平台收款，一站式解决。Easyloon支持80%主流平台及币种，多币种多平台多店铺，一站式管理，化零为整。",
          desc_list: [
            {
              title: "Higher Efficiency",
              desc: `Sign up an account in minutes with 0 fee; Collection+Payout can be completed in 1 business day.`,
            },
            {
              title: `Better Security`,
              desc: "Bank level security is guaranteed by our powerful payment network and financial institution partership.",
            },
            {
              title: "Lower Cost",
              desc: `Lower payment cost, higher transparency on FX coversion Fee - lower than average.`,
            },
          ],
        },
        {
          key: 3,
          title: "Global Payouts",
          // desc: "Easyloon充分运用国际金融技术及科技能力形成强大的支付网络，遍布全球150+国家及地区。使用Easyloon付款产品可以让您快速安全地向全球供应商、代理商或服务商等全球各地的交易方支付款项；让您无论何时何地，无缝链接当地清算网络，支持B2C/B2B，最快可支持实时到账。",
          desc_list: [
            {
              desc: "With our product, you can make payments seamlessly to your local suppliers or your overseas employees.",
              title: ""
            },
            {
              desc: "We help you to transfer funds or to the overseas local e-wallets.",
              title: ""
            },
            {
              desc: "We speed up your funds movement with local payment ecosystem.",
              title: ""
            },
            {
              desc: "With our automated payment infrastructure, we make your payments faster and cheaper.",
              title: ""
            }
          ]
        },
      ],
    };
  },
  computed: {
    currentDesc() {
      return this.descList.find((item) => item.key === this.currentIndex) || {};
    },
  },
  methods: {
    activeIt(index) {
      this.currentIndex = index;
    },
  },
};
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
      font-size: 50px;
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
        ul.ul {
          width: 100%;
          padding-left: 0;
          li.li {
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
          margin-top: 40px;
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
        ul.detail-list{
          color: #fff;
          margin-top: 20px;
          margin-left: 0;
          padding-left: 0;
          li{
            margin-top: 20px;
            padding-left: 0;
            list-style: none;
            margin-left: 0;
          }
          .detail-list-title{
            font-weight: bold;
            color: #fff;
            font-size: 20px;   
          }
          .detail-list-subtitle{
            margin-top: 5px;
            font-size: 14px;
            color: #9b9b9b;
          }
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

@media screen and (max-width: 800px) {
  .global-payment {
    padding-top: 46px;
    padding-bottom: 42px;
    min-height: 790px;
    box-sizing: border-box;

    .container {
      padding: 0 6.66vw;
      .content-title {
        margin-bottom: 33px;
      }

      .show-chart {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .charts-left {
          width: 100%;
          ul.ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li.li {
              width: 50%;
              height: 40px;
              margin-bottom: 10px;
              &.active {
              }
              .icon {
                width: 30px;
                height: 30px;
                margin-left: 8px;
                flex-shrink: 0;
              }
              .describe {
                font-size: 14px;
                margin-left: 10px;
                .title {
                  font-size: 12px;
                }
                .subtitle {
                  display: none;
                }
                ul.detail-list{
                }
                .el-icon-arrow-right {
                }
              }
            }
          }
          .detail-title {
          }
          p.detail {
          }
        }

        .charts-right {
          width: 100%;
          margin-top: 21px;
          .img-box {
            &__show {
              display: initial;
              .rise-up {
                img {
                }
                &.chartPayments-box {
                  img {
                  }
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
