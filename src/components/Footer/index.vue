<template>
  <div>
    <Subscribe />
    <div :class="['defaultFooter', { footerContainerBg: hasBg }]">
      <div class="footerContainer">
        <div class="footerLeft">
          <div class="linkBtn">
            <img src="@/assets/images/logo.png" alt="">
          </div>
          <div class="tips">© 2023 Beyounger. All rights reserved.</div>
        </div>
        <div class="footerRight">
          <a href="#" target="_blank">
            <img class="dec dec1" src="@/assets/pre/telegramIcon.svg" alt="check">
            <img class="dec dec2" src="@/assets/pre/telegramHoverIcon.svg" alt="check">
          </a>
          <a href="#" target="_blank">
            <img class="dec dec1" src="@/assets/pre/discordIcon.svg" alt="check">
            <img class="dec dec2" src="@/assets/pre/discordHoverIcon.svg" alt="check">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Subscribe from '@/views/Home/Subscribe.vue'

export default {
  name: 'NewFooter',
  components: {
    Subscribe
  },
  props: {
    hasBg: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  methods: {
    goPage(value) {
      this.$router.push(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.defaultFooter {
    width: 100%;

    .footerContainer {
        display: flex;
        flex-direction: row;
        max-width: 1280px;
        margin: auto;
        border-top: 1px solid #f2f2f2;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 960px) {
            width: 100%;
            flex-direction: column;
        }

        .footerLeft {
            // height: 120px;
            // padding: 30px 0 40px 0;
            color: var(--color-content);

            @media (max-width: 960px) {
                height: 60px;
                padding: 20px;
            }

            .linkBtn {
                // height: 20px;
                line-height: 20px;
                margin-bottom: 10px;

                img {
                    height: 42px;
                }

                a {
                    color: #000000;
                    margin-right: 20px;

                    &:hover {
                        color: #0045ff;
                    }
                }
            }

            .tips {
                height: 20px;
                line-height: 20px;
            }
        }

        .footerRight {
            height: 120px;
            line-height: 120px;
            text-decoration: none;
            transition: color 0.3s;

            @media (max-width: 960px) {
                height: 60px;
                line-height: 60px;
            }

            &:hover {
                color: var(--color-base-light);
                font-weight: bold;
            }

            a {
                color: #000000;
                margin-left: 20px;

                .dec2 {
                    display: none;
                }

                &:hover {
                    .dec1 {
                        display: none;
                    }

                    .dec2 {
                        display: inline-block;
                    }
                }
            }
        }
    }

    .footerAffix {
        text-align: end;
        margin-top: -48px;

        .footerAffixContainer {
            position: fixed;
            bottom: 40px;
            height: 48px;
            right: 20px;

            .footerLink {
                cursor: pointer;
                text-decoration: underline;
                width: 20px;

                .dec {
                    width: 80px;
                }
            }
        }
    }
}

.footerContainerBg {
    background: linear-gradient(104.49deg, #fff4ef 0%, #edf6ff 99.7%);
}</style>
