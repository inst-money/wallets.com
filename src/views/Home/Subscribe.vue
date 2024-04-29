<template>
  <div class="g-container Subscribe">
    <div class="container_l">
      <h5>{{ $t("footer.products.name") }}</h5>
      <!-- <div class="title-e">For Businesses</div> -->
      <div class="title-on" @click="handlePaymentsMenuClick('#')">
        <a
          href="javascript:void(0);"
          @click="handlePaymentsMenuClick('#')"
        >{{ $t("footer.products.global_acquiring") }}</a>
      </div>
    </div>
    <div class="container_l">
      <h5>{{ $t("footer.company.name") }}</h5>
      <div class="title-ab">
        <a href="javascript:void(0);" @click="goPage('')">{{ $t("footer.company.about_us") }}</a>
      </div>
    </div>
    <div class="container_l">
      <h5>{{ $t("footer.resources.name") }}</h5>
      <div class="title-ab">
        <a href="javascript:void(0);" @click="goPage('')">{{ $t("footer.resources.terms") }}</a>
      </div>
      <div class="title-ab">
        <a href="javascript:void(0);" @click="goPage('')">{{ $t("footer.resources.privacy") }}</a>
      </div>
      <div class="title-ab">
        <a href="javascript:void(0);" @click="goPage('')">{{ $t("footer.resources.cookies") }}</a>
      </div>
    </div>
    <div class="container">
      <h2 class="title">{{ $t("subscription.title") }}</h2>
      <div class="emailContainer">
        <a-input
          placeholder="Email"
          class="emailInput"
          :value="mail"
          size="large"
          @change="
            (e) => {
              // eslint-disable-next-line vue/this-in-template
              this.mail = e.target.value;
            }
          "
        />
        <div class="checkboxContainer">
          <a-checkbox :checked="checked" @change="checkBoxChange" />
          <div class="tips">
            {{ $t("subscription.desc") }}
          </div>
        </div>
        <div class="subContainer">
          <a-button
            class="btnSub"
            type="primary"
            :disabled="!checked || !regEmail.test(mail)"
            @click="Subscribe"
          >{{ $t("subscription.btn") }}</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { subscription } from '@/api/index'
// import { regEmail } from "@/utils/reg.js";

export default {
  name: 'Advantages',
  data() {
    return {
      mail: null,
      checked: false,
      regEmail: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    }
  },
  mounted() {},
  methods: {
    handlePaymentsMenuClick(e) {
      switch (e) {
        case 'fast-buy':
          if (!localStorage.getItem('inst_mail')) {
            this.drawerVisible = true
          } else if (this.$route.path === '/my') {
            this.$router.go(0)
          } else {
            this.$router.push({
              path: '/my',
              query: {
                tab: 'fastBuy'
              }
            })
          }
          break
        case 'third-buy':
          this.$router.push('/buy')
          break
        case 'card':
          if (!localStorage.getItem('inst_mail')) {
            this.drawerVisible = true
          } else {
            this.$router.push({
              path: '/my',
              query: {
                tab: 'myCard'
              }
            })
          }
          break
        case 'wallet':
          if (!localStorage.getItem('inst_mail')) {
            this.drawerVisible = true
          } else {
            this.$router.push('/my')
          }
          break
        case 'onlinePayment':
          this.$router.push('/onlinePayment')
          break
        case 'business-card':
          this.$router.push('/business-card')
          break
        case 'business-solutions':
          this.$router.push('/business-solutions')
          break
        case 'business-onRamps':
          this.$router.push('/business-onRamps')
          break
        case 'brand':
          this.$router.push('/brand')
          break
        default:
          break
      }
    },
    goPage(value) {
      this.$router.push(value)
    },
    checkBoxChange() {
      this.checked = !this.checked
    },
    Subscribe() {
      const params = {
        mail: this.mail
      }
      subscription(params).then((res) => {
        if (res.code === 0) {
          this.$message.success('Subscription success')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Subscribe {
  margin: 0 auto 60px;
  // background-color: #ffffff;
  display: flex;
  padding-top: 48px;
  padding-left: 0;
  padding-right: 0;
  border-top: 1px solid #e9eaf0;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 0 24px;
  }
  .container_l {
    flex: 1;
    margin-top: 12px;
    h5 {
      color: #14192b;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    .title-e {
      color: #888b94;
      font-size: 14px;
      line-height: 1.75em;
      letter-spacing: 0.02em;
      margin-top: 20px;
    }
    .title-on {
      font-size: 16px;
      margin-bottom: 4px;
      cursor: pointer;
      a {
        font-weight: 400;
        color: #4b5166;
        &:hover {
          color: #0045ff;
        }
      }
    }
    .title-ab {
      font-size: 16px;
      margin-bottom: 4px;
      cursor: pointer;
      a {
        font-weight: 400;
        color: #4b5166;
        &:hover {
          color: #0045ff;
        }
      }
    }
  }
  .container {
    width: 540px;
    padding-left: 48px;
    border-left: 1px solid #e9eaf0;
    @media (max-width: 960px) {
      width: 96%;
      border-left: none;
      padding-left: 0;
    }
  }
  .title {
    margin-bottom: 24px;
    font-size: 18px;
    @media (max-width: 960px) {
      margin: 40px 0;
    }
  }
  .emailContainer {
    width: 100%;
    margin: auto;
    @media (max-width: 960px) {
      width: 100%;
    }
    .emailInput {
      height: 48px;
      font-size: 16px;
      border-radius: 10px;
      width: 360px;
      @media (max-width: 960px) {
        width: 100%;
      }
    }
    .checkboxContainer {
      display: flex;
      align-items: center;
      margin-top: 40px;
      .tips {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        opacity: 0.6;
        margin-left: 10px;
      }
    }
    .subContainer {
      display: flex;
      margin-top: 12px;
      .btnSub {
        height: 48px;
        width: 150px;
        border-radius: 20px;
      }
    }
  }
}
</style>
