<template>
  <div class="nav-header" :class="{ bg }">
    <div class="g-container wrapper">

      <Logo />

      <div class="nav-right">
        <div class="nav">
          <LinkBox class="terms__term isTrue">
            <a class="quickBtn cardBtn headerTopText" :class="{ isTrue: isPer }" @click="goHome">
              {{ $t('nav.home') }}
            </a>
          </LinkBox>
          <LinkBox class="terms__term">
            <a class="quickBtn cardBtn headerTopText" :class="{ isTrue: isBus }" @click="goBusiness">
              {{ $t('nav.security') }}
            </a>
          </LinkBox>
          <!-- <LinkBox class="terms__term">
            <a class="quickBtn cardBtn headerTopText" :class="{ isTrue: isBus }">
              {{ $t('nav.products') }}
            </a>
          </LinkBox> -->
          <a-popover placement="bottom" arrow-point-at-center overlay-class-name="custom—popover">
            <a class="color_f headerTopText" :class="{ isTrue: isPro }" @click="(e) => e.preventDefault()">
              {{ $t('nav.products') }}
              <img class="down_icon" src="@/assets/pre/down_icon.svg" alt="">
            </a>
            <template #content>
              <div class="tag-content tag-content-row">
                <div class="tag-container">
                  <div class="nav-menu-item-container">
                    <!-- <img src="@/assets/pre/about-us.svg" alt="fast card"> -->
                    <div class="nav-menu-item-right">
                      <h4>{{ $t("footer.products.global_acquiring1") }}</h4>
                      <div>{{ $t("footer.products.global_acquiring1") }}</div>
                      <!-- <div>About Us</div> -->
                    </div>
                  </div>
                  <div class="nav-menu-item-container">
                    <!-- <img src="@/assets/pre/about-us.svg" alt="fast card"> -->
                    <div class="nav-menu-item-right">
                      <h4>{{ $t("footer.products.global_acquiring2") }}</h4>
                      <div>{{ $t("footer.products.global_acquiring2") }}</div>
                      <!-- <div>About Us</div> -->
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </a-popover>

          <LinkBox class="terms__term">
            <a class="quickBtn cardBtn headerTopText" :class="{ isTrue: isBus }">
              {{ $t('nav.about_us') }}
            </a>
          </LinkBox>

        </div>
        <div v-if="!isLogin" class="nav-right-container">
          <div class="nav">
            <div class="quickBtn headerTopText" @click="toMerchat">
              <span>{{ $t("nav.login") }}</span>
            </div>
          </div>
          <ButtonCreate class="btn--create headerTopText" />
        </div>

        <a-dropdown v-if="isLogin">
          <a @click="(e) => e.preventDefault()">
            <img class="portraitSty" src="@/assets/pre/ellipse5.svg">
          </a>
          <a-menu slot="overlay" @click="handleRightClick">
            <a-menu-item key="my">
              <div class="nav-menu-item-container">
                <img class="buy-crypto-img" src="@/assets/pre/ellipse5.svg">
                <div class="nav-menu-item-right">
                  <h4>Dashboard</h4>
                  <span>Personal Center</span>
                </div>
              </div>
            </a-menu-item>
            <a-menu-item key="loginOut">
              <div class="nav-menu-item-container">
                <img class="buy-crypto-img" src="@/assets/pre/login.svg" alt="third party">
                <div class="nav-menu-item-right">
                  <h4>Sign Out</h4>
                  <span> Sign Out Your Account</span>
                </div>
              </div>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <div v-if="!isLogin&&false" class="right-lang">
          <a-dropdown>
            <div class="inner">
              <!-- <span class="lang">{{lang}}</span> <a-icon type="global" /> -->
              <img v-if="lang === 'en'" alt="us" src="@/assets/images/squareflag/US.png" class="flag">
              <img v-if="lang === 'zh'" alt="cn" src="@/assets/images/squareflag/CN.png" class="flag"> {{ $t('lang.title') }}
              <a-icon type="caret-down" />
            </div>
            <template #overlay>
              <a-menu @click="handleLangMenuClick">
                <a-menu-item key="zh">
                  <img src="@/assets/images/squareflag/CN.png" alt="" class="flag"> CN - 简体中文
                </a-menu-item>
                <a-menu-item key="en">
                  <img src="@/assets/images/squareflag/US.png" alt="" class="flag"> US - English
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>

    </div>

    <a-drawer title="Login" :width="375" :visible="drawerVisible" @close="onClose">
      <div class="wrapper-left-item">
        <div class="select-label">Email</div>
        <div class="select-container select-container-address">
          <a-input placeholder="Email" :value="mail" size="large" @change="mailChange" />
        </div>
      </div>
      <div class="wrapper-left-item">
        <div class="select-label">Password</div>
        <div class="select-container select-container-address">
          <a-input placeholder="Password" type="password" :value="password" size="large" @change="passwordChange" />
        </div>
      </div>
      <div class="resetPasswordContainer">
        <a class="register" href="javascript:void(0)" @click="resetPasswordClick()">
          Forget your password?
        </a>
      </div>
      <a-button class="goToBtn" :loading="loginLoading" @click="loginCLick()">Login</a-button>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          padding: '48px 24px',
          textAlign: 'center',
          zIndex: 1,
        }"
      >
        Haven’t registered?
        <span class="register" @click="registerCLick()">Sign up now</span>
      </div>
    </a-drawer>

    <a-drawer title="Change Password" :width="375" :visible="drawerChangePasswordVisible" @close="onChangePasswordClose">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="Current Password" has-feedback>
          <a-input
            v-decorator="[
              'old_password',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please enter your current password!',
                  },
                ],
              },
            ]"
            type="password"
          />
        </a-form-item>
        <a-form-item label="New Password" has-feedback>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please enter your new password!',
                  },
                  {
                    validator: validateToNextPassword,
                  },
                ],
              },
            ]"
            type="password"
          />
        </a-form-item>
        <a-form-item label="Confirm Password" has-feedback>
          <a-input
            v-decorator="[
              'confirm',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your new password!',
                  },
                  {
                    validator: compareToFirstPassword,
                  },
                ],
              },
            ]"
            type="password"
            @blur="handleConfirmBlur"
          />
        </a-form-item>
        <a-form-item>
          <a-button class="goToBtn" html-type="submit"> Confirm </a-button>
        </a-form-item>
      </a-form>
    </a-drawer>

    <a-modal v-model="verifyGoogleVisible" title="Verify" :footer="null" :mask-closable="false" centered>
      <a-form :form="verifyGoogleAuthForm">
        <a-form-item label="Verify Google Authenticator">
          <a-input
            v-decorator="[
              'google_code',
              {
                rules: [
                  {
                    required: true,
                    len: 6,
                    message:
                      'Please enter the six-digit code from Google Authenticator!',
                  },
                ],
              },
            ]"
            class="google_input"
            placeholder="Google Authenticator Code"
            size="large"
          />
        </a-form-item>
      </a-form>
      <div class="confirmContainer">
        <a-button class="goToBtn" @click="handleVerifyGoogleSubmit">
          Confirm
        </a-button>
      </div>
    </a-modal>

  </div>
</template>

<script>
import BigNumber from 'bignumber.js'
// import { login, submitChangePassword, getGaStatus } from '@/api/index';
import ButtonCreate from './ButtonCreate.vue'
import Logo from './Logo.vue'
import LinkBox from './LinkBox.vue'

export default {
  name: 'NavHeader',
  // eslint-disable-next-line vue/no-unused-components
  components: { LinkBox, ButtonCreate, Logo },
  props: {
    nav: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  data() {
    return {
      form: this.$form.createForm(this, { name: 'changePasswordForm' }),
      verifyGoogleAuthForm: this.$form.createForm(this, {
        name: 'verifyGoogleAuthFormName'
      }),
      bg: false,
      drawerVisible: false,
      drawerChangePasswordVisible: false,
      isLogin: false,
      loginLoading: false,
      localStorageMail: '',
      mail: '',
      password: '',
      verifyGoogleVisible: false,
      verifyParams: {},
      isPer: false,
      isBus: false,
      isPro: false,
      isBrd: false
    }
  },
  computed: {

    lang() {
      const lang = this.$i18n.locale
      return lang
    }
  },
  created() {
    if (localStorage.getItem('Our_money_access_token')) {
      this.isLogin = true
      this.localStorageMail = localStorage.getItem('Our_mail')
    }
    if (this.nav) {
      this.bg = true
    }
    if (this.$route.path === '/' || this.$route.path === '/register') {
      this.isPer = true
    } else if (this.$route.path === '/business') {
      this.isBus = true
    } else if (
      this.$route.path === '/brand' ||
      this.$route.path === '/business-solutions' ||
      this.$route.path === '/about' ||
      this.$route.path === '/contact-sales'
    ) {
      this.isBrd = true
    } else {
      this.isPro = true
    }
  },
  mounted() {
    // window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    // window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toMerchat() {
      window.location.href = 'http://merchants.easyloon.com/'
    },
    goHome() {
      // this.$router.push('/');
    },
    goBusiness() {
      // this.$router.push('/business');
    },
    mailChange(e) {
      this.mail = e.target.value
    },
    passwordChange(e) {
      this.password = e.target.value
    },
    handleSubmit(e) {
      e.preventDefault()
    },
    handleConfirmBlur(e) {
      const { value } = e.target
      this.confirmDirty = this.confirmDirty || !!value
    },
    compareToFirstPassword(rule, value, callback) {
      const { form } = this
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!')
      } else {
        callback()
      }
    },
    validateToNextPassword(rule, value, callback) {
      const { form } = this
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true })
      }
      callback()
    },
    handleScroll() {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      if (top > 100) {
        top = 100
      }
      document.getElementById('headerLogoImg').style.height = `${BigNumber(
        1 - BigNumber(top).dividedBy(100).dividedBy(4).toFixed(2),
      )
        .multipliedBy(48)
        .toFixed(0)}px`
      Array.prototype.forEach.call(
        document.getElementsByClassName('headerTopText'),
        (element) => {
          // eslint-disable-next-line no-param-reassign
          element.style.fontSize = `${BigNumber(
            1 - BigNumber(top).dividedBy(100).dividedBy(8).toFixed(2),
          )
            .multipliedBy(16)
            .toFixed(0)}px`
        },
      )
      this.bg = top !== 0
    },
    handleOnlineClick() {
      this.$router.push('/onlinePayment')
    },
    handleLangMenuClick(e) {
      const { key } = e
      this.$i18n.locale = key
      localStorage.setItem('locale', key)
    },
    handleMenuClick(e) {
      switch (e.key) {
        case 'business-solutions':
          this.$router.push('/business-solutions')
          break
        default:
          break
      }
    },
    handleRightClick(e) {
      switch (e.key) {
        case 'my':
          this.$router.push('/my')
          break
        case 'kyc-card':
          this.$router.push({
            path: '/my',
            query: {
              tab: 'fastBuy'
            }
          })
          break
        case 'card':
          this.$router.push({
            path: '/my',
            query: {
              tab: 'myCard'
            }
          })
          break
        case 'kyc':
          this.$router.push({
            path: '/my',
            query: {
              tab: 'identification'
            }
          })
          break
        case 'changePassword':
          this.drawerChangePasswordVisible = true
          break
        case 'loginOut':
          localStorage.clear()
          if (this.$route.path === '/') {
            this.$router.go(0)
          } else {
            this.$router.push('/')
          }
          break
        default:
          break
      }
    },
    handleBuyClick() {
      if (this.$route.path === '/') {
        document.querySelector('#card-container').scrollIntoView({
          behavior: 'smooth'
        })
      } else {
        this.$router.push({
          path: '/',
          query: {
            goOurContainer: true
          }
        })
      }
    },
    showDrawer() {
      this.drawerVisible = true
    },
    onClose() {
      this.drawerVisible = false
    },
    onChangePasswordClose() {
      this.drawerChangePasswordVisible = false
    },
    submitLogin() {
      this.loginLoading = true
    },
    loginCLick() {
      if (!this.mail) {
        this.$message.error('Please enter email')
      } else if (!this.password) {
        this.$message.error('Please enter your password')
      }
    },
    handleVerifyGoogleSubmit() {
      const { verifyParams } = this
      this.verifyGoogleAuthForm.validateFields((err, values) => {
        if (!err) {
          const params = {
            ...verifyParams,
            'ga-code': values.google_code
          }
          this.submitLogin(params)
        }
      })
    },
    registerCLick() {
      this.$router.push('/register')
    },
    resetPasswordClick() {
      this.$router.push('/resetPassword')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/var.scss";

.flag {
  margin-right: 8px;
  width: 20px;
}

$default-text-color: #fff;

.nav-header {
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: $header-height;
  padding-top: 33px;
  padding-bottom: 33px;
  min-height: 120px;
  box-sizing: border-box;
z-index: 100;
  // background: #ffffff;
  display: none;

  @media (min-width: 960px) {
    display: inline-block;
  }

  &.bg {
    background: #fff;
    opacity: 0.96;
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.08);
  }
}

.portraitSty {
  height: 32px;
}

.personContent {
  height: 12px;
}

.wrapper {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding: 0px;
  width: 1286px;
  margin: 0 auto;

  @media (min-width: 1440px) {
    width: 1286px;
  }

  @media (min-width: 1030px) {
    width: calc(100% - 154px);
  }

  @media (max-width: 767px) {
    width: calc(100% - 32px);
  }

  .nav-right {
    display: flex;
    justify-content: center;

    .ant-dropdown-trigger {
      color: #fff;
      font-size: 16px;
    }
  }

  .nav-right-container {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
  }

  .right-lang {
    display: flex;
    // flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 20px;

    .inner {
      flex: 1;
    }
  }
}

.quickBtn {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: $default-text-color;
  font-size: 16px;
}

.terms__term {
  margin-right: 40px;
  font-weight: 600;
}

.cardBtn {
  font-weight: 600;

  &:hover {
    color: $primaryColor;
  }
}

.img--logo {
  vertical-align: middle;
  height: 48px;
}

.nav {
  display: flex;
  margin: 0 40px 0 120px;
  justify-content: center;
  align-items: center;

  .ant-dropdown-trigger {
    margin-right: 40px;
  }

  .down_icon {
    width: 12px;
    margin-left: 4px;
    filter: invert(1);
  }

  .color_f {
    color: $default-text-color;
    font-size: 16px;
    margin-right: 40px;
    font-weight: 600;

    &:hover {
      color: $primaryColor;
    }
  }
}

.nav__item {
  font-size: 16px;
  line-height: 19px;
  opacity: 0.8;
  transition: opacity 0.3s;

  &+& {
    margin-left: 48px;
  }

  &:hover {
    opacity: 1;
  }
}

.nav-menu-item-container {
  display: flex;
  flex: 1;
  flex-direction: row;

  img {
    height: 40px;
    width: 40px;
  }

  .buy-crypto-img {
    margin-top: 10px;
    width: 20px;
    height: 20px;
  }

  .changeImg {
    height: 16px;
    width: 16px;
    margin-top: 8px;
  }

  .nav-menu-item-right {
    margin-left: 20px;

    span {
      opacity: 0.8;
      font-size: 12px;
    }
  }
}

.tag-container {
  display: flex;
  flex-direction: column;

  .title {
    color: #000000;
    opacity: 0.6;
    padding: 0 20px;
    font-size: 16px;
  }

  .title-business {
    margin-top: 12px;
  }
}

.tag-content {
  display: flex;

  .nav-menu-item-container {
    padding: 15px 20px;
    cursor: pointer;

    img {
      width: 40px;
    }

    .nav-menu-item-right {
      min-width: 200px;

      h4 {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #000000;
      }

      div {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #000000;
        opacity: 0.3;
      }
    }
  }

  .nav-menu-item-container:hover {
    background: #f2f6ff;
  }

  .nav-menu-item-container-last {
    padding-right: 0;
  }
}

.tag-content-row {
  flex-direction: column;
}

.select-label {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: left;
  font-weight: bold;
  opacity: 0.3;
}

.select-container-address {
  height: 50px;
}

.goToBtn {
  background: $primaryColor;
  border-radius: 8px;
  height: 40px;
  width: 100%;
  color: #fff;
  margin-top: 20px;
}

.resetPasswordContainer {
  text-align: end;
  margin-bottom: 40px;
}

.register {
  cursor: pointer;
  color: $primaryColor;
  font-size: 12px;
}

.register:hover {
  border-bottom: 1px solid $primaryColor;
}

.mailSty {
  cursor: pointer;
  color: $primaryColor;
}

.btn--create {
  font-size: 16px;
}

.isTrue {
  color: $primaryColor !important;
  color: #fff !important;
}

.lang {
  margin-right: 6px;
}</style>
